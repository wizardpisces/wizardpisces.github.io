const x={},F=`<!-- 写作锚点
读者收获：能沿用户积分的写入、查询与合并过程理解 LSM Tree，并看出快速写入背后增加了哪些成本。
核心判断：LSM Tree 将零散更新先记录下来，再用有序文件批量整理，把维护磁盘布局的工作从每次写入转移到后台。
如何推进：从直接修改积分出发，依次遇到零散写入、内存写满、多文件查询的问题，用同一个例子推导后台合并，最后简述 Pando 的应用并引出下一篇。
-->
<h1 id="&#x6570;&#x636E;&#x5E93;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x65E7;&#x6570;&#x636E;&#xFF1F;&#x4ECE; LSM Tree &#x5230; Agent &#x7684; Git &#x670D;&#x52A1;"><a href="#&#x6570;&#x636E;&#x5E93;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x65E7;&#x6570;&#x636E;&#xFF1F;&#x4ECE; LSM Tree &#x5230; Agent &#x7684; Git &#x670D;&#x52A1;"></a>&#x6570;&#x636E;&#x5E93;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x65E7;&#x6570;&#x636E;&#xFF1F;&#x4ECE; LSM Tree &#x5230; Agent &#x7684; Git &#x670D;&#x52A1;</h1>
<p>&#x66F4;&#x65B0;&#x4E00;&#x6761;&#x6570;&#x636E;&#xFF0C;&#x6700;&#x81EA;&#x7136;&#x7684;&#x60F3;&#x6CD5;&#x662F;&#xFF1A;&#x627E;&#x5230;&#x65E7;&#x8BB0;&#x5F55;&#xFF0C;&#x628A;&#x5B83;&#x6539;&#x6389;&#x3002;</p>
<p>&#x4F46;&#x5728;&#x4E00;&#x4E9B;&#x6570;&#x636E;&#x5E93;&#x91CC;&#xFF0C;&#x65B0;&#x503C;&#x5199;&#x8FDB;&#x53BB;&#x4E86;&#xFF0C;&#x65E7;&#x503C;&#x5374;&#x8FD8;&#x7559;&#x5728;&#x78C1;&#x76D8;&#x4E0A;&#x3002;&#x8FC7;&#x4E00;&#x9635;&#x5B50;&#xFF0C;&#x540E;&#x53F0;&#x624D;&#x628A;&#x5B83;&#x4EEC;&#x6574;&#x7406;&#x6389;&#x3002;</p>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x7ED5;&#x8FD9;&#x4E00;&#x6B65;&#xFF1F;</p>
<p>&#x4ECE;&#x4E00;&#x4E2A;&#x4FDD;&#x5B58;&#x7528;&#x6237;&#x79EF;&#x5206;&#x7684;&#x6570;&#x636E;&#x5E93;&#x5F00;&#x59CB;&#xFF0C;&#x5C31;&#x80FD;&#x9010;&#x6B65;&#x63A8;&#x5BFC;&#x51FA; LSM Tree&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x5148;&#x4ECE;&#x201C;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x201D;&#x5F00;&#x59CB;"><a href="#&#x4E00;&#x3001;&#x5148;&#x4ECE;&#x201C;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x201D;&#x5F00;&#x59CB;"></a>&#x4E00;&#x3001;&#x5148;&#x4ECE;&#x201C;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x201D;&#x5F00;&#x59CB;</h2>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4EBF;&#x4E2A;&#x7528;&#x6237;&#xFF0C;&#x6570;&#x636E;&#x653E;&#x4E0D;&#x8FDB;&#x5185;&#x5B58;&#xFF0C;&#x4E3B;&#x8981;&#x4FDD;&#x5B58;&#x5728;&#x78C1;&#x76D8;&#x4E0A;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x6237;&#x7F16;&#x53F7; &#x2192; &#x79EF;&#x5206;
1001 &#x2192; 80
1002 &#x2192; 60
1003 &#x2192; 90
&#x2026;&#x2026;
</code></pre>
<p>&#x73B0;&#x5728;&#x4E0D;&#x65AD;&#x6536;&#x5230;&#x66F4;&#x65B0;&#xFF1A;</p>
<pre><code class="language-text">&#x628A; 1002 &#x7684;&#x79EF;&#x5206;&#x8BBE;&#x4E3A; 65
&#x628A; 8000 &#x7684;&#x79EF;&#x5206;&#x8BBE;&#x4E3A; 120
&#x628A; 1002 &#x7684;&#x79EF;&#x5206;&#x8BBE;&#x4E3A; 70
</code></pre>
<p>&#x6BCF;&#x6B21;&#x627E;&#x5230;&#x539F;&#x4F4D;&#x7F6E;&#x4FEE;&#x6539;&#xFF0C;&#x5C31;&#x8981;&#x8BBF;&#x95EE;&#x8FD9;&#x4E9B;&#x7528;&#x6237;&#x6240;&#x5728;&#x7684;&#x6570;&#x636E;&#x9875;&#x3002;&#x5B83;&#x4EEC;&#x53EF;&#x80FD;&#x5206;&#x5E03;&#x5728;&#x78C1;&#x76D8;&#x7684;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x6301;&#x7EED;&#x7684;&#x96F6;&#x6563;&#x66F4;&#x65B0;&#x4F1A;&#x5E26;&#x6765;&#x5927;&#x91CF;&#x5206;&#x6563;&#x7684;&#x78C1;&#x76D8;&#x8BFB;&#x5199;&#x3002;</p>
<p><strong>&#x80FD;&#x4E0D;&#x80FD;&#x5148;&#x6536;&#x4E0B;&#x66F4;&#x65B0;&#xFF0C;&#x6512;&#x6210;&#x4E00;&#x6279;&#xFF0C;&#x518D;&#x96C6;&#x4E2D;&#x5199;&#x51FA;&#x53BB;&#xFF1F;</strong></p>
<h2 id="&#x4E8C;&#x3001;&#x5148;&#x8BB0;&#x4E0B;&#x6765;&#xFF0C;&#x6682;&#x65F6;&#x4E0D;&#x6539;&#x65E7;&#x6570;&#x636E;"><a href="#&#x4E8C;&#x3001;&#x5148;&#x8BB0;&#x4E0B;&#x6765;&#xFF0C;&#x6682;&#x65F6;&#x4E0D;&#x6539;&#x65E7;&#x6570;&#x636E;"></a>&#x4E8C;&#x3001;&#x5148;&#x8BB0;&#x4E0B;&#x6765;&#xFF0C;&#x6682;&#x65F6;&#x4E0D;&#x6539;&#x65E7;&#x6570;&#x636E;</h2>
<p>&#x6BCF;&#x6765;&#x4E00;&#x6761;&#x66F4;&#x65B0;&#xFF0C;&#x5148;&#x8FFD;&#x52A0;&#x5230;&#x78C1;&#x76D8;&#x65E5;&#x5FD7;&#x672B;&#x5C3E;&#xFF1A;</p>
<pre><code class="language-text">1002 &#x2192; 65
8000 &#x2192; 120
1002 &#x2192; 70
</code></pre>
<p>&#x8FD9;&#x6837;&#x4E0D;&#x7528;&#x6BCF;&#x6B21;&#x53BB;&#x627E;&#x65E7;&#x4F4D;&#x7F6E;&#x3002;</p>
<p>&#x4F46;&#x67E5;&#x8BE2;&#x65F6;&#x600E;&#x4E48;&#x529E;&#xFF1F;&#x4E3A;&#x4E86;&#x77E5;&#x9053; 1002 &#x7684;&#x6700;&#x65B0;&#x79EF;&#x5206;&#xFF0C;&#x603B;&#x4E0D;&#x80FD;&#x6BCF;&#x6B21;&#x90FD;&#x8BFB;&#x5B8C;&#x6574;&#x4EFD;&#x65E5;&#x5FD7;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x5728;&#x5185;&#x5B58;&#x91CC;&#x7EF4;&#x62A4;&#x4E00;&#x5F20;&#x80FD;&#x6309;&#x7F16;&#x53F7;&#x67E5;&#x627E;&#x7684;&#x6709;&#x5E8F;&#x8868;&#x3002;&#x5148;&#x5FFD;&#x7565;&#x5386;&#x53F2;&#x5FEB;&#x7167;&#xFF0C;&#x53EA;&#x770B;&#x5F53;&#x524D;&#x503C;&#xFF1A;</p>
<pre><code class="language-text">1002 &#x2192; 70
8000 &#x2192; 120
</code></pre>
<p>&#x78C1;&#x76D8;&#x65E5;&#x5FD7;&#x8BB0;&#x5F55;&#x53D1;&#x751F;&#x8FC7;&#x7684;&#x66F4;&#x65B0;&#xFF0C;&#x5185;&#x5B58;&#x8868;&#x65B9;&#x4FBF;&#x5FEB;&#x901F;&#x67E5;&#x8BE2;&#x3002;&#xFF08;&#x5178;&#x578B;&#x5B9E;&#x73B0;&#x4E2D;&#xFF0C;&#x524D;&#x8005;&#x53EB; WAL&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x9884;&#x5199;&#x65E5;&#x5FD7;&#xFF1B;&#x540E;&#x8005;&#x53EB; MemTable&#x3002;&#xFF09;</p>
<h2 id="&#x4E09;&#x3001;&#x5185;&#x5B58;&#x5199;&#x6EE1;&#x600E;&#x4E48;&#x529E;&#xFF1F;"><a href="#&#x4E09;&#x3001;&#x5185;&#x5B58;&#x5199;&#x6EE1;&#x600E;&#x4E48;&#x529E;&#xFF1F;"></a>&#x4E09;&#x3001;&#x5185;&#x5B58;&#x5199;&#x6EE1;&#x600E;&#x4E48;&#x529E;&#xFF1F;</h2>
<p>&#x5047;&#x8BBE;&#x5185;&#x5B58;&#x53EA;&#x80FD;&#x5BB9;&#x7EB3;&#x4E09;&#x4E2A;&#x7528;&#x6237;&#x7684;&#x6570;&#x636E;&#x3002;</p>
<p>&#x63A5;&#x7740;&#x6536;&#x5230; <code>1001 &#x2192; 80</code>&#xFF0C;&#x5185;&#x5B58;&#x8868;&#x5199;&#x6EE1;&#x4E86;&#x3002;&#x628A;&#x8868;&#x91CC;&#x7684;&#x6570;&#x636E;&#x6309;&#x7F16;&#x53F7;&#x987A;&#x5E8F;&#x5199;&#x6210;&#x4E00;&#x4E2A;&#x78C1;&#x76D8;&#x6587;&#x4EF6;&#xFF1A;</p>
<pre><code class="language-text">&#x6587;&#x4EF6; A&#xFF1A;
1001 &#x2192; 80
1002 &#x2192; 70
8000 &#x2192; 120
</code></pre>
<p>&#x8FD9;&#x79CD;&#x6309; key &#x6392;&#x5E8F;&#x7684;&#x6587;&#x4EF6;&#xFF0C;&#x901A;&#x5E38;&#x53EB; SST &#x6587;&#x4EF6;&#x3002;</p>
<p>&#x63A5;&#x4E0B;&#x6765;&#xFF0C;&#x6362;&#x4E00;&#x5F20;&#x7A7A;&#x5185;&#x5B58;&#x8868;&#x63A5;&#x6536;&#x66F4;&#x65B0;&#x3002;<strong>&#x540E;&#x7EED;&#x66F4;&#x65B0;&#x4E0D;&#x56DE;&#x5934;&#x4FEE;&#x6539; A&#x3002;</strong></p>
<p>&#x53C8;&#x6536;&#x5230;&#x4E09;&#x6761;&#x6570;&#x636E;&#xFF1A;</p>
<pre><code class="language-text">1002 &#x2192; 75
3000 &#x2192; 50
8000 &#x2192; 130
</code></pre>
<p>&#x5185;&#x5B58;&#x518D;&#x6B21;&#x5199;&#x6EE1;&#xFF0C;&#x751F;&#x6210;&#x8F83;&#x65B0;&#x7684;&#x6587;&#x4EF6; B&#xFF1A;</p>
<pre><code class="language-text">&#x6587;&#x4EF6; B&#xFF1A;
1002 &#x2192; 75
3000 &#x2192; 50
8000 &#x2192; 130
</code></pre>
<p>&#x73B0;&#x5728; 1002 &#x6709;&#x4E24;&#x4E2A;&#x7248;&#x672C;&#xFF1A;A &#x91CC;&#x662F; 70&#xFF0C;B &#x91CC;&#x662F; 75&#x3002;</p>
<p>&#x5199;&#x5165;&#x5BB9;&#x6613;&#x4E86;&#xFF0C;&#x67E5;&#x8BE2;&#x65F6;&#x5374;&#x5F97;&#x5224;&#x65AD;&#x54EA;&#x4E00;&#x4EFD;&#x624D;&#x662F;&#x6700;&#x65B0;&#x503C;&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x67E5;&#x8BE2;&#x65F6;&#xFF0C;&#x4ECE;&#x8F83;&#x65B0;&#x7684;&#x6570;&#x636E;&#x627E;&#x8D77;"><a href="#&#x56DB;&#x3001;&#x67E5;&#x8BE2;&#x65F6;&#xFF0C;&#x4ECE;&#x8F83;&#x65B0;&#x7684;&#x6570;&#x636E;&#x627E;&#x8D77;"></a>&#x56DB;&#x3001;&#x67E5;&#x8BE2;&#x65F6;&#xFF0C;&#x4ECE;&#x8F83;&#x65B0;&#x7684;&#x6570;&#x636E;&#x627E;&#x8D77;</h2>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x7B80;&#x5316;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x67E5;&#x8BE2; 1002&#xFF1A;</p>
<pre><code class="language-text">&#x5148;&#x67E5;&#x5F53;&#x524D;&#x5185;&#x5B58;&#xFF1A;&#x6CA1;&#x6709;
&#x518D;&#x67E5;&#x8F83;&#x65B0;&#x7684; B&#xFF1A;&#x627E;&#x5230; 75
&#x8FD4;&#x56DE; 75
</code></pre>
<p>&#x67E5;&#x8BE2; 1001&#xFF1A;</p>
<pre><code class="language-text">&#x5148;&#x67E5;&#x5F53;&#x524D;&#x5185;&#x5B58;&#xFF1A;&#x6CA1;&#x6709;
&#x518D;&#x67E5; B&#xFF1A;&#x6CA1;&#x6709;
&#x518D;&#x67E5; A&#xFF1A;&#x627E;&#x5230; 80
</code></pre>
<p>&#x771F;&#x5B9E;&#x7CFB;&#x7EDF;&#x4F1A;&#x5229;&#x7528;&#x6587;&#x4EF6;&#x7684;&#x7F16;&#x53F7;&#x8303;&#x56F4;&#x3001;&#x7D22;&#x5F15;&#x7B49;&#x4FE1;&#x606F;&#x8DF3;&#x8FC7;&#x4E0D;&#x76F8;&#x5173;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x4E0D;&#x4F1A;&#x6BCF;&#x6B21;&#x9010;&#x4E2A;&#x626B;&#x63CF;&#x6240;&#x6709;&#x6587;&#x4EF6;&#x3002;&#x4F46;&#x6587;&#x4EF6;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#xFF0C;&#x67E5;&#x627E;&#x548C;&#x5904;&#x7406;&#x7248;&#x672C;&#x7684;&#x8D1F;&#x62C5;&#x4ECD;&#x4F1A;&#x589E;&#x52A0;&#x3002;</p>
<p>&#x5199;&#x5165;&#x65F6;&#x4E0D;&#x7528;&#x627E;&#x65E7;&#x8BB0;&#x5F55;&#xFF0C;&#x8BFB;&#x53D6;&#x65F6;&#x5C31;&#x5F97;&#x5728;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#x91CC;&#x627E;&#x6700;&#x65B0;&#x503C;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x4E0D;&#x80FD;&#x53EA;&#x751F;&#x6210;&#x65B0;&#x6587;&#x4EF6;&#xFF0C;&#x8FD8;&#x5F97;&#x6709;&#x4EBA;&#x6574;&#x7406;&#x5B83;&#x4EEC;&#x3002;</p>
<h2 id="&#x4E94;&#x3001;&#x540E;&#x53F0;&#x628A;&#x6709;&#x5E8F;&#x6587;&#x4EF6;&#x5408;&#x8D77;&#x6765;"><a href="#&#x4E94;&#x3001;&#x540E;&#x53F0;&#x628A;&#x6709;&#x5E8F;&#x6587;&#x4EF6;&#x5408;&#x8D77;&#x6765;"></a>&#x4E94;&#x3001;&#x540E;&#x53F0;&#x628A;&#x6709;&#x5E8F;&#x6587;&#x4EF6;&#x5408;&#x8D77;&#x6765;</h2>
<p>&#x628A; A&#x3001;B &#x5408;&#x5E76;&#xFF0C;&#x91CD;&#x590D;&#x7528;&#x6237;&#x4FDD;&#x7559;&#x8F83;&#x65B0;&#x7684;&#x79EF;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165; A&#xFF1A;
1001 &#x2192; 80
1002 &#x2192; 70
8000 &#x2192; 120

&#x8F93;&#x5165; B&#xFF1A;
1002 &#x2192; 75
3000 &#x2192; 50
8000 &#x2192; 130

&#x5408;&#x5E76;&#x751F;&#x6210; C&#xFF1A;
1001 &#x2192; 80
1002 &#x2192; 75
3000 &#x2192; 50
8000 &#x2192; 130
</code></pre>
<p>&#x8FD9;&#x91CC;&#x4E0D;&#x9700;&#x8981;&#x4FDD;&#x7559;&#x5386;&#x53F2;&#x5FEB;&#x7167;&#x3002;&#x65B0;&#x6587;&#x4EF6;&#x751F;&#x6548;&#x3001;&#x65E7;&#x6587;&#x4EF6;&#x4E0D;&#x518D;&#x88AB;&#x8BFB;&#x53D6;&#x4F7F;&#x7528;&#x540E;&#xFF0C;A&#x3001;B &#x5C31;&#x53EF;&#x4EE5;&#x56DE;&#x6536;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x540E;&#x53F0;&#x5408;&#x5E76;&#x6574;&#x7406;&#x8FC7;&#x7A0B;&#xFF0C;&#x53EB; <strong>Compaction</strong>&#x3002;</p>
<p>&#x90A3;&#x4E3A;&#x5565;&#x5355;&#x4E2A;&#x6587;&#x4EF6;&#x6700;&#x597D;&#x6574;&#x7406;&#x6392;&#x5E8F;&#xFF1F;&#x770B;&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;</p>
<pre><code class="language-text">A &#x5F53;&#x524D;&#x7F16;&#x53F7;&#xFF1A;1001
B &#x5F53;&#x524D;&#x7F16;&#x53F7;&#xFF1A;1002
</code></pre>
<p>&#x5148;&#x8F93;&#x51FA;&#x8F83;&#x5C0F;&#x7684; 1001&#xFF0C;&#x518D;&#x628A; A &#x7684;&#x8BFB;&#x53D6;&#x4F4D;&#x7F6E;&#x5411;&#x540E;&#x79FB;&#x52A8;&#xFF1A;</p>
<pre><code class="language-text">A &#x5F53;&#x524D;&#x8BB0;&#x5F55;&#xFF1A;1002 &#x2192; 70
B &#x5F53;&#x524D;&#x8BB0;&#x5F55;&#xFF1A;1002 &#x2192; 75
</code></pre>
<p>&#x7F16;&#x53F7;&#x76F8;&#x540C;&#xFF0C;&#x8F93;&#x51FA;&#x8F83;&#x65B0;&#x7684; 75&#xFF0C;&#x4E24;&#x8FB9;&#x4E00;&#x8D77;&#x5411;&#x540E;&#x79FB;&#x52A8;&#x3002;</p>
<p>&#x7EE7;&#x7EED;&#x8FD9;&#x6837;&#x6BD4;&#x8F83;&#xFF0C;&#x8F93;&#x5165;&#x53EA;&#x9700;&#x5411;&#x524D;&#x8BFB;&#xFF0C;&#x8F93;&#x51FA;&#x4E0D;&#x65AD;&#x5411;&#x540E;&#x5199;&#xFF0C;&#x50CF;&#x5F52;&#x5E76;&#x6392;&#x5E8F;&#x4E00;&#x6837;&#x5B8C;&#x6210;&#x6279;&#x91CF;&#x6574;&#x7406;&#x3002;</p>
<p><strong>&#x6587;&#x4EF6;&#x6709;&#x4E86;&#x987A;&#x5E8F;&#xFF0C;&#x5C31;&#x80FD;&#x901A;&#x8FC7;&#x6279;&#x91CF;&#x8BFB;&#x5199;&#x6765;&#x6574;&#x7406;&#x539F;&#x672C;&#x96F6;&#x6563;&#x7684;&#x66F4;&#x65B0;&#x3002;</strong></p>
<p>&#x5982;&#x679C;&#x8981;&#x5220;&#x9664;&#x7528;&#x6237;&#xFF0C;&#x4E5F;&#x4E0D;&#x6025;&#x7740;&#x4FEE;&#x6539;&#x65E7;&#x6587;&#x4EF6;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x5199;&#x4E00;&#x6761;&#x5220;&#x9664;&#x6807;&#x8BB0;&#xFF0C;&#x6321;&#x4F4F;&#x65E7;&#x79EF;&#x5206;&#x3002;&#x7B49;&#x5408;&#x5E76;&#x65F6;&#x80FD;&#x591F;&#x5B89;&#x5168;&#x6E05;&#x7406;&#xFF0C;&#x518D;&#x56DE;&#x6536;&#x76F8;&#x5173;&#x8BB0;&#x5F55;&#x3002;</p>
<h2 id="&#x516D;&#x3001;&#x8FD9;&#x5C31;&#x662F; LSM Tree &#x7684;&#x6838;&#x5FC3;"><a href="#&#x516D;&#x3001;&#x8FD9;&#x5C31;&#x662F; LSM Tree &#x7684;&#x6838;&#x5FC3;"></a>&#x516D;&#x3001;&#x8FD9;&#x5C31;&#x662F; LSM Tree &#x7684;&#x6838;&#x5FC3;</h2>
<p>&#x6211;&#x4EEC;&#x4E00;&#x6B65;&#x6B65;&#x5F97;&#x5230;&#x4E86;&#x8FD9;&#x6837;&#x7684;&#x7ED3;&#x6784;&#xFF1A;</p>
<pre><code class="language-text">&#x66F4;&#x65B0;&#x5230;&#x6765;
    &#x2193;
&#x8FFD;&#x52A0;&#x65E5;&#x5FD7;&#xFF0C;&#x66F4;&#x65B0;&#x5185;&#x5B58;&#x6709;&#x5E8F;&#x8868;
    &#x2193; &#x5185;&#x5B58;&#x8868;&#x5199;&#x6EE1;
&#x751F;&#x6210;&#x78C1;&#x76D8;&#x6709;&#x5E8F;&#x6587;&#x4EF6;
    &#x2193; &#x6587;&#x4EF6;&#x9010;&#x6E10;&#x79EF;&#x7D2F;
&#x540E;&#x53F0;&#x5408;&#x5E76;&#xFF0C;&#x6E05;&#x7406;&#x5931;&#x6548;&#x7248;&#x672C;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x5178;&#x578B; LSM Tree &#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x3002;&#x5168;&#x79F0;&#x662F; Log-Structured Merge-Tree&#xFF0C;&#x901A;&#x5E38;&#x8BD1;&#x4E3A;&#x201C;&#x65E5;&#x5FD7;&#x7ED3;&#x6784;&#x5408;&#x5E76;&#x6811;&#x201D;&#x3002;</p>
<p>&#x5B9E;&#x9645;&#x7CFB;&#x7EDF;&#x8FD8;&#x4F1A;&#x628A;&#x78C1;&#x76D8;&#x6587;&#x4EF6;&#x5206;&#x5C42;&#x7EC4;&#x7EC7;&#xFF0C;&#x9650;&#x5236;&#x6BCF;&#x5C42;&#x7684;&#x89C4;&#x6A21;&#xFF0C;&#x9010;&#x6B65;&#x5411;&#x4E0B;&#x5408;&#x5E76;&#x3002;&#x4E0D;&#x540C;&#x5408;&#x5E76;&#x7B56;&#x7565;&#x4F1A;&#x5728;&#x8BFB;&#x53D6;&#x3001;&#x5199;&#x5165;&#x548C;&#x7A7A;&#x95F4;&#x6210;&#x672C;&#x4E4B;&#x95F4;&#x505A;&#x4E0D;&#x540C;&#x53D6;&#x820D;&#x3002;</p>
<p>&#x5B83;&#x6CA1;&#x6709;&#x6D88;&#x9664;&#x7EF4;&#x62A4;&#x6570;&#x636E;&#x7684;&#x6210;&#x672C;&#x3002;&#x56DE;&#x5934;&#x770B;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#xFF1A;</p>
<ul>
<li>&#x67E5; 1001 &#x53EF;&#x80FD;&#x68C0;&#x67E5;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#xFF0C;&#x8FD9;&#x53EB;&#x8BFB;&#x653E;&#x5927;&#x3002;</li>
<li>1002 &#x7684;&#x65E7;&#x79EF;&#x5206;&#x6682;&#x65F6;&#x7559;&#x5728; A &#x4E2D;&#xFF0C;&#x589E;&#x52A0;&#x7A7A;&#x95F4;&#x5360;&#x7528;&#x3002;</li>
<li>1001 &#x6CA1;&#x6709;&#x66F4;&#x65B0;&#xFF0C;&#x5408;&#x5E76;&#x65F6;&#x5374;&#x53C8;&#x5199;&#x8FDB; C&#xFF0C;&#x8FD9;&#x53EB;&#x5199;&#x653E;&#x5927;&#x3002;</li>
</ul>
<p>&#x5408;&#x5E76;&#x8FD8;&#x4F1A;&#x4E0E;&#x524D;&#x53F0;&#x8BFB;&#x5199;&#x4E89;&#x62A2;&#x8D44;&#x6E90;&#x3002;&#x5982;&#x679C;&#x65B0;&#x6587;&#x4EF6;&#x4EA7;&#x751F;&#x5F97;&#x6BD4;&#x540E;&#x53F0;&#x6574;&#x7406;&#x66F4;&#x5FEB;&#xFF0C;&#x6587;&#x4EF6;&#x5C31;&#x4F1A;&#x79EF;&#x538B;&#xFF0C;&#x7CFB;&#x7EDF;&#x751A;&#x81F3;&#x9700;&#x8981;&#x964D;&#x4F4E;&#x5199;&#x5165;&#x901F;&#x5EA6;&#x3002;</p>
<p><strong>&#x5199;&#x5165;&#x5FEB;&#x4E86;&#xFF0C;&#x6570;&#x636E;&#x4F1A;&#x6682;&#x65F6;&#x5206;&#x6563;&#x5728;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#x91CC;&#xFF0C;&#x540E;&#x53F0;&#x5F97;&#x6301;&#x7EED;&#x6574;&#x7406;&#x3002;</strong></p>
<h2 id="&#x4E03;&#x3001;&#x540C;&#x4E00;&#x4E2A;&#x601D;&#x8DEF;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0;&#x5728; Git &#x670D;&#x52A1;&#x91CC;&#xFF1F;"><a href="#&#x4E03;&#x3001;&#x540C;&#x4E00;&#x4E2A;&#x601D;&#x8DEF;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0;&#x5728; Git &#x670D;&#x52A1;&#x91CC;&#xFF1F;"></a>&#x4E03;&#x3001;&#x540C;&#x4E00;&#x4E2A;&#x601D;&#x8DEF;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0;&#x5728; Git &#x670D;&#x52A1;&#x91CC;&#xFF1F;</h2>
<p>OpenAI &#x4E3A;&#x4E86;&#x5E94;&#x5BF9; Agent &#x7684;&#x5927;&#x91CF;&#x63D0;&#x4EA4;&#xFF0C;&#x6269;&#x5C55;&#x7684; Git &#x670D;&#x52A1;&#x540E;&#x7AEF; Pando&#xFF0C;&#x4E5F;&#x9047;&#x5230;&#x4E86;&#x201C;&#x5C0F;&#x6587;&#x4EF6;&#x8D8A;&#x6512;&#x8D8A;&#x591A;&#x201D;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5B83;&#x590D;&#x7528; Push &#x4E0A;&#x4F20;&#x7684; packfile&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x88C5;&#x7740; Git &#x5BF9;&#x8C61;&#x7684;&#x6570;&#x636E;&#x5305;&#xFF0C;&#x6765;&#x670D;&#x52A1;&#x540E;&#x7EED; Fetch&#x3002;&#x4F46;&#x4E3B;&#x5E72;&#x4E0D;&#x65AD;&#x66F4;&#x65B0;&#xFF0C;&#x843D;&#x540E;&#x4E00;&#x5929;&#x7684;&#x5BA2;&#x6237;&#x7AEF;&#x53EF;&#x80FD;&#x8981;&#x4E0B;&#x8F7D;&#x6570;&#x4E07;&#x4E2A;&#x5C0F;&#x5305;&#x3002;</p>
<p>Pando &#x4E8E;&#x662F;&#x501F;&#x9274; LSM Tree&#xFF1A;&#x5148;&#x63A5;&#x6536;&#x5C0F;&#x5305;&#xFF0C;&#x540E;&#x53F0;&#x518D;&#x6309;&#x5C42;&#x7EC4;&#x7EC7;&#x3001;&#x91CD;&#x6253;&#x5305;&#x6210;&#x8986;&#x76D6;&#x66F4;&#x591A;&#x7248;&#x672C;&#x7684;&#x5927;&#x5305;&#xFF0C;&#x51CF;&#x5C11;&#x4E0B;&#x8F7D;&#x6587;&#x4EF6;&#x6570;&#xFF0C;&#x4E5F;&#x6539;&#x5584;&#x538B;&#x7F29;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x4E3B;&#x5E72;&#x4ECE; v0 &#x8FDE;&#x7EED;&#x66F4;&#x65B0;&#x5230; v16&#xFF0C;&#x6BCF;&#x6B21; Push &#x6536;&#x5230;&#x4E00;&#x4E2A;&#x5C0F;&#x5305;&#x3002;&#x7528;&#x6BCF;&#x56DB;&#x4E2A;&#x5305;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x66F4;&#x5927;&#x7684;&#x5305;&#x6765;&#x793A;&#x610F;&#xFF1A;</p>
<pre><code class="language-text">L0&#xFF1A;P1&#xFF5E;P16&#xFF0C;&#x5171; 16 &#x4E2A;&#x5C0F;&#x5305;
    &#x2193; &#x6BCF; 4 &#x4E2A;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x5305;
L1&#xFF1A;Q1&#xFF5E;Q4&#xFF0C;&#x5171; 4 &#x4E2A;&#x4E2D;&#x5305;
    &#x2193; &#x518D;&#x5408;&#x6210;&#x4E00;&#x4E2A;&#x5305;
L2&#xFF1A;R1&#xFF0C;&#x8986;&#x76D6; v0 &#x2192; v16
</code></pre>
<p>&#x751F;&#x6210;&#x5927;&#x5305;&#x4EE5;&#x540E;&#xFF0C;&#x5C0F;&#x5305;&#x4ECD;&#x7136;&#x4FDD;&#x7559;&#x3002;&#x4E3A;&#x4EC0;&#x4E48;&#xFF1F;</p>
<pre><code class="language-text">&#x5BA2;&#x6237;&#x7AEF; A&#xFF1A;&#x5DF2;&#x6709; v0&#xFF0C;&#x60F3;&#x66F4;&#x65B0;&#x5230; v16
    &#x2192; &#x53EF;&#x4EE5;&#x4E0B;&#x8F7D;&#x5927;&#x5305; R1

&#x5BA2;&#x6237;&#x7AEF; B&#xFF1A;&#x5DF2;&#x6709; v15&#xFF0C;&#x60F3;&#x66F4;&#x65B0;&#x5230; v16
    &#x2192; &#x53EA;&#x9700;&#x5C0F;&#x5305; P16
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x7559;&#x4E0B; R1&#xFF0C;B &#x4E3A;&#x4E86;&#x4E00;&#x70B9;&#x65B0;&#x589E;&#x5185;&#x5BB9;&#xFF0C;&#x4E5F;&#x5F97;&#x4E0B;&#x8F7D;&#x8986;&#x76D6;&#x6574;&#x6BB5;&#x5386;&#x53F2;&#x7684;&#x5927;&#x5305;&#x3002;</p>
<p>**&#x5927;&#x5305;&#x7167;&#x987E;&#x843D;&#x540E;&#x5F88;&#x591A;&#x7684;&#x5BA2;&#x6237;&#x7AEF;&#xFF0C;&#x5C0F;&#x5305;&#x7167;&#x987E;&#x53EA;&#x5DEE;&#x5C11;&#x91CF;&#x66F4;&#x65B0;&#x7684;&#x5BA2;&#x6237;&#x7AEF;&#x3002;**Pando &#x6574;&#x7406;&#x7684;&#x662F;&#x5386;&#x53F2;&#x7684;&#x5305;&#x88C5;&#x65B9;&#x5F0F;&#xFF0C;&#x4E0D;&#x4F1A;&#x50CF;&#x79EF;&#x5206;&#x4F8B;&#x5B50;&#x90A3;&#x6837;&#xFF0C;&#x56E0;&#x6709;&#x4E86;&#x65B0;&#x503C;&#x5C31;&#x6DD8;&#x6C70;&#x65E7;&#x63D0;&#x4EA4;&#x3002;</p>
<p>&#x4ECE;&#x6570;&#x636E;&#x5E93;&#x5230; Git &#x670D;&#x52A1;&#xFF0C;&#x5171;&#x540C;&#x7684;&#x95EE;&#x9898;&#x90FD;&#x662F;&#xFF1A;&#x6BCF;&#x6B21;&#x65B0;&#x6570;&#x636E;&#x5230;&#x6765;&#x65F6;&#xFF0C;&#x8981;&#x4E0D;&#x8981;&#x7ACB;&#x523B;&#x628A;&#x6240;&#x6709;&#x4E1C;&#x897F;&#x6574;&#x7406;&#x597D;&#xFF1F;</p>
<p>LSM Tree &#x7ED9;&#x51FA;&#x7684;&#x529E;&#x6CD5;&#x662F;&#x5148;&#x8BB0;&#x5F55;&#xFF0C;&#x518D;&#x6279;&#x91CF;&#x7EF4;&#x62A4;&#x3002;Pando &#x501F;&#x7528;&#x4E86;&#x8FD9;&#x90E8;&#x5206;&#x601D;&#x8DEF;&#xFF0C;&#x4F46;&#x5B83;&#x5982;&#x4F55;&#x8BA9;&#x5927;&#x91CF; Agent &#x5E76;&#x884C; Push&#x3001;&#x53C8;&#x8BA9;&#x8BB8;&#x591A;&#x5BA2;&#x6237;&#x7AEF;&#x590D;&#x7528;&#x5DF2;&#x6709;&#x5305;&#xFF0C;&#x8FD8;&#x9700;&#x8981;&#x53E6;&#x5916;&#x7684;&#x8BBE;&#x8BA1;&#x3002;</p>
<p>&#x4E0B;&#x4E00;&#x7BC7;&#xFF0C;&#x6211;&#x4EEC;&#x518D;&#x770B; Pando &#x5982;&#x4F55;&#x628A;&#x8FD9;&#x4E9B;&#x8BBE;&#x8BA1;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Google&#xFF0C;LevelDB Implementation&#xFF1A;https://github.com/google/leveldb/blob/main/doc/impl.md</li>
<li>Meta&#xFF0C;RocksDB Overview&#xFF1A;https://github.com/facebook/rocksdb/wiki/RocksDB-Overview</li>
<li>Meta&#xFF0C;Compaction&#xFF1A;https://github.com/facebook/rocksdb/wiki/Compaction</li>
<li>OpenAI&#xFF0C;Scaling Git at OpenAI&#xFF1A;https://openai.com/index/scaling-git-at-openai/</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"数据库为什么不直接修改旧数据？从 LSM Tree 到 Agent 的 Git 服务",children:[{level:2,title:"一、先从“直接修改”开始",children:[]},{level:2,title:"二、先记下来，暂时不改旧数据",children:[]},{level:2,title:"三、内存写满怎么办？",children:[]},{level:2,title:"四、查询时，从较新的数据找起",children:[]},{level:2,title:"五、后台把有序文件合起来",children:[]},{level:2,title:"六、这就是 LSM Tree 的核心",children:[]},{level:2,title:"七、同一个思路，为什么会出现在 Git 服务里？",children:[]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
