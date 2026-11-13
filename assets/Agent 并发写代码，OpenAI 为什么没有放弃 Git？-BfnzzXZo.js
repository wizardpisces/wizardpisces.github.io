const x={},F=`<!-- 写作锚点
读者收获：区分固定提交的代码完整性与跨分支的同一时刻视图，理解 Pando 如何通过共享对象包和按 Ref 协调减少重复工作。
核心判断：Pando 保留 Git 的提交模型，减少全仓库协调与逐客户端打包的成本，代价是放宽跨分支快照保证并接受部分冗余传输。
如何推进：先展示完整副本与共享日志的协调成本，再沿一次 Push 说明数据与状态如何拆开，最后通过主干与功能分支的依赖解释一致性取舍，接续包复用和后台整理。
-->
<h1 id="Pando&#xFF1A;OpenAI &#x5982;&#x4F55;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1; Git&#xFF0C;&#x8BA9;&#x5927;&#x91CF; Agent &#x5E76;&#x53D1;&#x5F00;&#x53D1;"><a href="#Pando&#xFF1A;OpenAI &#x5982;&#x4F55;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1; Git&#xFF0C;&#x8BA9;&#x5927;&#x91CF; Agent &#x5E76;&#x53D1;&#x5F00;&#x53D1;"></a>Pando&#xFF1A;OpenAI &#x5982;&#x4F55;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1; Git&#xFF0C;&#x8BA9;&#x5927;&#x91CF; Agent &#x5E76;&#x53D1;&#x5F00;&#x53D1;</h1>
<p>OpenAI &#x7684; Pando &#x9879;&#x76EE;&#xFF0C;&#x89E3;&#x51B3;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x770B;&#x4F3C;&#x77DB;&#x76FE;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<p>Git &#x672C;&#x6765;&#x5C31;&#x652F;&#x6301;&#x591A;&#x4E2A;&#x5206;&#x652F;&#x5E76;&#x884C;&#x5F00;&#x53D1;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x5F53;&#x5927;&#x91CF; Agent &#x540C;&#x65F6;&#x64CD;&#x4F5C;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x65F6;&#xFF0C;Git &#x670D;&#x52A1;&#x7AEF;&#x53CD;&#x800C;&#x4F1A;&#x6210;&#x4E3A;&#x74F6;&#x9888;&#xFF1F;</p>
<p>&#x95EE;&#x9898;&#x4E0D;&#x5728; Git &#x7684;&#x5206;&#x652F;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x5728;&#x4F20;&#x7EDF;&#x670D;&#x52A1;&#x7AEF;&#x4E3A;&#x4E86;&#x7EF4;&#x62A4;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#x7684;&#x4E00;&#x81F4;&#x6027;&#xFF0C;&#x5F15;&#x5165;&#x4E86;&#x8FC7;&#x591A;&#x534F;&#x8C03;&#xFF1B;&#x540C;&#x65F6;&#xFF0C;&#x8BFB;&#x53D6;&#x4EE3;&#x7801;&#x65F6;&#x53C8;&#x91CD;&#x590D;&#x8FDB;&#x884C;&#x4E86;&#x5927;&#x91CF;&#x8BA1;&#x7B97;&#x3002;</p>
<p>Pando &#x4E3B;&#x8981;&#x6539;&#x4E86;&#x4E24;&#x5904;&#xFF1A;</p>
<ol>
<li>&#x5199;&#x5165;&#xFF1A;&#x4ECE;&#x4ED3;&#x5E93;&#x7EA7;&#x534F;&#x8C03;&#xFF0C;&#x6539;&#x4E3A;&#x5206;&#x652F;&#x7EA7;&#x534F;&#x8C03;&#x3002;</li>
<li>&#x8BFB;&#x53D6;&#xFF1A;&#x4ECE;&#x6BCF;&#x6B21;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x6570;&#x636E;&#x5305;&#xFF0C;&#x6539;&#x4E3A;&#x590D;&#x7528;&#x5DF2;&#x6709;&#x6570;&#x636E;&#x5305;&#x3002;</li>
</ol>
<p>&#x7406;&#x89E3;&#x8FD9;&#x4E24;&#x4E2A;&#x53D8;&#x5316;&#xFF0C;&#x53EA;&#x9700;&#x8981;&#x5148;&#x660E;&#x786E;&#x4E09;&#x4E2A;&#x6982;&#x5FF5;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x4E09;&#x4E2A;&#x5FC5;&#x8981;&#x6982;&#x5FF5;"><a href="#&#x4E00;&#x3001;&#x4E09;&#x4E2A;&#x5FC5;&#x8981;&#x6982;&#x5FF5;"></a>&#x4E00;&#x3001;&#x4E09;&#x4E2A;&#x5FC5;&#x8981;&#x6982;&#x5FF5;</h2>
<p><strong>Commit &#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x63D0;&#x4EA4;&#x8BB0;&#x5F55;</strong>&#xFF1B;Branch&#xFF08;&#x4F8B;&#x5982; <code>main</code>&#xFF09;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;&#x6307;&#x5411; Commit &#x7684;&#x53EF;&#x53D8;&#x6307;&#x9488;&#x3002;</p>
<pre><code>C1 &#x2190; C2 &#x2190; C3
           &#x2191;
          main
</code></pre>
<p>&#x65B0;&#x63D0;&#x4EA4; C4 &#x4EA7;&#x751F;&#x540E;&#xFF0C;Git &#x4E0D;&#x4FEE;&#x6539; C3&#xFF0C;&#x800C;&#x662F;&#x521B;&#x5EFA; C4&#xFF0C;&#x518D;&#x628A; <code>main</code> &#x4ECE; C3 &#x79FB;&#x5230; C4&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x591A;&#x4E2A; Agent &#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x521B;&#x5EFA;&#x4E0D;&#x540C;&#x7684; Commit&#x3002;&#x771F;&#x6B63;&#x9700;&#x8981;&#x534F;&#x8C03;&#x7684;&#x662F;&#xFF1A;&#x5B83;&#x4EEC;&#x5982;&#x4F55;&#x66F4;&#x65B0;&#x5171;&#x4EAB;&#x7684;&#x5206;&#x652F;&#x6307;&#x9488;&#x3002;</p>
<p><strong>CAS &#x662F;&#x4E00;&#x79CD;&#x5E26;&#x6761;&#x4EF6;&#x7684;&#x539F;&#x5B50;&#x66F4;&#x65B0;</strong>&#x3002;</p>
<p>&#x5047;&#x8BBE; <code>main</code> &#x5F53;&#x524D;&#x6307;&#x5411; C3&#xFF0C;&#x4E24;&#x4E2A;&#x8BF7;&#x6C42;&#x5206;&#x522B;&#x60F3;&#x628A;&#x5B83;&#x66F4;&#x65B0;&#x4E3A; C4&#x3001;C5&#x3002;</p>
<p>CAS &#x7684;&#x542B;&#x4E49;&#x662F;&#xFF1A;&#x53EA;&#x6709;&#x5F53;&#x524D;&#x503C;&#x4ECD;&#x7136;&#x662F; C3&#xFF0C;&#x624D;&#x5141;&#x8BB8;&#x66F4;&#x65B0;&#x3002;</p>
<p><strong>Packfile &#x662F; Git &#x7528;&#x6765;&#x6253;&#x5305;&#x3001;&#x538B;&#x7F29;&#x591A;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6570;&#x636E;&#x6587;&#x4EF6;&#x3002;</strong></p>
<p>Push &#x65F6;&#x5BA2;&#x6237;&#x7AEF;&#x4E0A;&#x4F20; packfile&#xFF0C;Fetch &#x65F6;&#x670D;&#x52A1;&#x5668;&#x5411;&#x5BA2;&#x6237;&#x7AEF;&#x4F20;&#x8F93; packfile&#x3002;&#x4F20;&#x7EDF;&#x670D;&#x52A1;&#x5668;&#x901A;&#x5E38;&#x9700;&#x8981;&#x6839;&#x636E;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x5DF2;&#x6709;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x5E76;&#x751F;&#x6210;&#x9002;&#x5408;&#x5B83;&#x7684;&#x6570;&#x636E;&#x5305;&#x3002;</p>
<p>&#x54B1;&#x73B0;&#x5728;&#x901A;&#x8FC7;&#x8FD9;&#x4E09;&#x4E2A;&#x6982;&#x5FF5;&#x652F;&#x6491;&#x4E0B;&#x9762;&#x7684;&#x67B6;&#x6784;&#x63A8;&#x5BFC;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x521B;&#x65B0;&#x4E00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x9700;&#x8981;&#x76F8;&#x4E92;&#x7B49;&#x5F85;&#xFF1F;"><a href="#&#x4E8C;&#x3001;&#x521B;&#x65B0;&#x4E00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x9700;&#x8981;&#x76F8;&#x4E92;&#x7B49;&#x5F85;&#xFF1F;"></a>&#x4E8C;&#x3001;&#x521B;&#x65B0;&#x4E00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x9700;&#x8981;&#x76F8;&#x4E92;&#x7B49;&#x5F85;&#xFF1F;</h2>
<h3 id="1. &#x65E7;&#x67B6;&#x6784;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x5171;&#x4EAB;&#x4E86;&#x534F;&#x8C03;&#x5165;&#x53E3;"><a href="#1. &#x65E7;&#x67B6;&#x6784;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x5171;&#x4EAB;&#x4E86;&#x534F;&#x8C03;&#x5165;&#x53E3;"></a>1. &#x65E7;&#x67B6;&#x6784;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x4E0D;&#x540C;&#x5206;&#x652F;&#x5171;&#x4EAB;&#x4E86;&#x534F;&#x8C03;&#x5165;&#x53E3;</h3>
<p>&#x5047;&#x8BBE; H1&#x3001;H2&#x3001;H3 &#x5404;&#x81EA;&#x4FDD;&#x5B58;&#x5B8C;&#x6574;&#x4ED3;&#x5E93;&#xFF0C;&#x591A;&#x4E2A; Agent &#x5411;&#x4E0D;&#x540C;&#x5206;&#x652F; Push&#x3002;&#x670D;&#x52A1;&#x7AEF;&#x4E0D;&#x80FD;&#x53EA;&#x66F4;&#x65B0;&#x6307;&#x9488;&#xFF0C;&#x5426;&#x5219; H2 &#x53EF;&#x80FD;&#x77E5;&#x9053; <code>main</code> &#x6307;&#x5411;&#x4E86; <code>C4</code>&#xFF0C;&#x5374;&#x6CA1;&#x6709;&#x76F8;&#x5E94;&#x6570;&#x636E;&#x53EF;&#x4F9B; Fetch&#x3002;</p>
<p>OpenAI &#x8BC4;&#x4F30;&#x7684; 3PC&#xFF08;&#x4E09;&#x9636;&#x6BB5;&#x63D0;&#x4EA4;&#xFF09;&#x65B9;&#x6848;&#xFF0C;&#x4F1A;&#x590D;&#x5236;&#x65B0;&#x589E;&#x6570;&#x636E;&#x3001;&#x7ECF;&#x8FC7;&#x591A;&#x8F6E;&#x534F;&#x8C03;&#xFF0C;&#x5E76;&#x7B49;&#x5F85;&#x591A;&#x6570;&#x526F;&#x672C;&#x63A5;&#x53D7;&#x66F4;&#x65B0;&#x540E;&#x518D;&#x53D1;&#x5E03;&#x3002;&#x597D;&#x5904;&#x662F;&#x526F;&#x672C;&#x53EF;&#x4EE5;&#x4ECE;&#x672C;&#x5730;&#x63D0;&#x4F9B;&#x8BFB;&#x53D6;&#xFF0C;&#x4F46;&#x6BCF;&#x6B21;&#x5199;&#x5165;&#x4E5F;&#x627F;&#x62C5;&#x4E86;&#x590D;&#x5236;&#x3001;&#x78C1;&#x76D8;&#x548C;&#x901A;&#x4FE1;&#x6210;&#x672C;&#x3002;</p>
<p>&#x53E6;&#x4E00;&#x79CD;&#x65B9;&#x6848;&#x4F7F;&#x7528;&#x5171;&#x4EAB; WAL&#xFF08;&#x9884;&#x5199;&#x65E5;&#x5FD7;&#xFF09;&#xFF1A;&#x5148;&#x628A;&#x66F4;&#x65B0;&#x767B;&#x8BB0;&#x5230;&#x540C;&#x4E00;&#x4E2A; manifest&#xFF0C;&#x518D;&#x7531;&#x526F;&#x672C;&#x8DDF;&#x8FDB;&#x3002;&#x5B83;&#x51CF;&#x5C11;&#x4E86;&#x53D1;&#x5E03;&#x65F6;&#x4E0E;&#x5404;&#x526F;&#x672C;&#x7684;&#x76F4;&#x63A5;&#x534F;&#x8C03;&#xFF0C;&#x5374;&#x8BA9;&#x6240;&#x6709;&#x5206;&#x652F;&#x4E89;&#x7528;&#x540C;&#x4E00;&#x4EFD;&#x6E05;&#x5355;&#x3002;&#x4E00;&#x4E2A;&#x5199;&#x5165;&#x8005;&#x5148;&#x66F4;&#x65B0;&#x6E05;&#x5355;&#xFF0C;&#x53E6;&#x4E00;&#x4E2A;&#x57FA;&#x4E8E;&#x65E7;&#x6E05;&#x5355;&#x7684;&#x5199;&#x5165;&#x5C31;&#x5F97;&#x68C0;&#x67E5;&#x5E76;&#x91CD;&#x8BD5;&#x3002;</p>
<p>&#x5373;&#x4F7F;&#x4E24;&#x4E2A; Agent &#x66F4;&#x65B0;&#x4E0D;&#x540C;&#x5206;&#x652F;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x5728;&#x526F;&#x672C;&#x8D44;&#x6E90;&#x6216;&#x5171;&#x540C;&#x53D1;&#x5E03;&#x5165;&#x53E3;&#x4E0A;&#x4E92;&#x76F8;&#x7B49;&#x5F85;&#x3002;</p>
<h3 id="2. Pando &#x7684;&#x6539;&#x6CD5;&#xFF1A;&#x5171;&#x4EAB;&#x6570;&#x636E;&#xFF0C;&#x5206;&#x522B;&#x66F4;&#x65B0;&#x5206;&#x652F;&#x72B6;&#x6001;"><a href="#2. Pando &#x7684;&#x6539;&#x6CD5;&#xFF1A;&#x5171;&#x4EAB;&#x6570;&#x636E;&#xFF0C;&#x5206;&#x522B;&#x66F4;&#x65B0;&#x5206;&#x652F;&#x72B6;&#x6001;"></a>2. Pando &#x7684;&#x6539;&#x6CD5;&#xFF1A;&#x5171;&#x4EAB;&#x6570;&#x636E;&#xFF0C;&#x5206;&#x522B;&#x66F4;&#x65B0;&#x5206;&#x652F;&#x72B6;&#x6001;</h3>
<p>Pando &#x5C06;&#x6570;&#x636E;&#x548C;&#x72B6;&#x6001;&#x5206;&#x5F00;&#x4FDD;&#x5B58;&#xFF0C;&#x670D;&#x52A1;&#x8282;&#x70B9;&#x65E0;&#x987B;&#x5404;&#x81EA;&#x7EF4;&#x62A4;&#x5B8C;&#x6574;&#x4ED3;&#x5E93;&#xFF1A;</p>
<ul>
<li>Blob Storage&#xFF1A;&#x4FDD;&#x5B58;&#x5BA2;&#x6237;&#x7AEF;&#x4E0A;&#x4F20;&#x7684; packfile&#x3002;</li>
<li>Metadata Store&#xFF1A;&#x4FDD;&#x5B58;&#x5206;&#x652F;&#x6307;&#x9488;&#x3001;&#x5206;&#x652F;&#x7248;&#x672C;&#xFF0C;&#x4EE5;&#x53CA;&#x7248;&#x672C;&#x5BF9;&#x5E94;&#x7684;&#x6570;&#x636E;&#x5305;&#x548C;&#x5386;&#x53F2;&#x4F9D;&#x8D56;&#x3002;</li>
</ul>
<p>Agent A &#x5411; <code>feature-A</code> Push &#x65B0;&#x63D0;&#x4EA4; <code>A1</code> &#x65F6;&#xFF0C;Pando&#xFF1A;</p>
<ol>
<li>&#x63A5;&#x6536;&#x5E76;&#x6821;&#x9A8C; packfile&#xFF0C;&#x628A;&#x5B83;&#x4FDD;&#x5B58;&#x5230; Blob Storage&#x3002;</li>
<li>&#x5728;&#x5143;&#x6570;&#x636E;&#x4E8B;&#x52A1;&#x4E2D;&#x8BB0;&#x5F55;&#x65B0;&#x7684;&#x5206;&#x652F;&#x7248;&#x672C;&#xFF0C;&#x5305;&#x542B; <code>A1</code>&#x3001;&#x5305;&#x7684;&#x4F4D;&#x7F6E;&#x548C;&#x5386;&#x53F2;&#x4F9D;&#x8D56;&#x3002;</li>
<li>&#x5728;&#x540C;&#x4E00;&#x4E8B;&#x52A1;&#x4E2D;&#x539F;&#x5B50;&#x66F4;&#x65B0; <code>feature-A</code> &#x7684;&#x6307;&#x9488;&#x3002;</li>
</ol>
<p>&#x5BF9;&#x5E94;&#x5173;&#x7CFB;&#x53EF;&#x4EE5;&#x7B80;&#x5316;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">feature-A &#x2192; Version 12 &#x2192; Commit A1
Version 12 &#x2192; Packfile P12 + &#x5386;&#x53F2;&#x4F9D;&#x8D56;
</code></pre>
<p>&#x53E6;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x5904;&#x7406; Fetch &#x65F6;&#xFF0C;&#x67E5;&#x8BE2;&#x5143;&#x6570;&#x636E;&#xFF0C;&#x627E;&#x5230;&#x6240;&#x9700;&#x5305;&#x53CA;&#x5176;&#x4F9D;&#x8D56;&#xFF0C;&#x8BA9;&#x5BA2;&#x6237;&#x7AEF;&#x4ECE;&#x5171;&#x4EAB;&#x5B58;&#x50A8;&#x6216;&#x7F13;&#x5B58;&#x4E0B;&#x8F7D;&#x3002;&#x5B8C;&#x6574;&#x4EE3;&#x7801;&#x7531;&#x5171;&#x4EAB;&#x5B58;&#x50A8;&#x4FDD;&#x5B58;&#xFF0C;&#x670D;&#x52A1;&#x8282;&#x70B9;&#x65E0;&#x987B;&#x5148;&#x540C;&#x6B65;&#x4E00;&#x6574;&#x4EFD;&#x672C;&#x5730;&#x4ED3;&#x5E93;&#x3002;</p>
<p>Agent B &#x66F4;&#x65B0; <code>feature-B</code>&#xFF0C;&#x4FEE;&#x6539;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x6761;&#x5206;&#x652F;&#x8BB0;&#x5F55;&#xFF0C;&#x4E0D;&#x5FC5;&#x4E0E; Agent A &#x4E89;&#x62A2;&#x5168;&#x5C40; manifest&#x3002;&#x540C;&#x4E00; Ref &#x7684;&#x7ADE;&#x4E89;&#x4ECD;&#x7528; CAS &#x4FDD;&#x62A4;&#xFF1B;&#x5171;&#x4EAB;&#x7684; Metadata Store &#x548C; Blob Storage &#x4E5F;&#x5FC5;&#x987B;&#x80FD;&#x591F;&#x6C34;&#x5E73;&#x6269;&#x5C55;&#xFF0C;&#x907F;&#x514D;&#x6210;&#x4E3A;&#x65B0;&#x7684;&#x96C6;&#x4E2D;&#x74F6;&#x9888;&#x3002;</p>
<h3 id="3. &#x653E;&#x5F03;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#xFF1F;"><a href="#3. &#x653E;&#x5F03;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#xFF1F;"></a>3. &#x653E;&#x5F03;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#xFF1F;</h3>
<p>Pando &#x653E;&#x5BBD;&#x7684;&#x662F;&#x8DE8;&#x5206;&#x652F;&#x7684;&#x540C;&#x4E00;&#x65F6;&#x523B;&#x89C6;&#x56FE;&#xFF0C;&#x4E0D;&#x662F;&#x4EE3;&#x7801;&#x5B8C;&#x6574;&#x6027;&#x3002;&#x5047;&#x8BBE; <code>feature-A</code> &#x4ECE;&#x4E3B;&#x5E72; <code>C1</code> &#x5206;&#x51FA;&#xFF0C;&#x63A8;&#x8FDB;&#x5230; <code>A2</code>&#xFF0C;&#x800C;&#x4E3B;&#x5E72;&#x5DF2;&#x7ECF;&#x8D70;&#x5230; <code>C3</code>&#xFF1A;</p>
<pre><code class="language-text">C1 -- C2 -- C3  main
  \\-- A1 -- A2  feature-A
</code></pre>
<p>&#x83B7;&#x53D6; <code>A2</code> &#x65F6;&#xFF0C;Pando &#x6839;&#x636E;&#x4F9D;&#x8D56;&#x8BB0;&#x5F55;&#xFF0C;&#x5E2E;&#x52A9;&#x5BA2;&#x6237;&#x7AEF;&#x53D6;&#x9F50; <code>A1</code> &#x548C;&#x57FA;&#x7840; <code>C1</code> &#x7B49;&#x6240;&#x9700;&#x5386;&#x53F2;&#xFF0C;&#x4F46;&#x4E0D;&#x8981;&#x6C42;&#x540C;&#x65F6;&#x628A; <code>main</code> &#x66F4;&#x65B0;&#x5230; <code>C3</code>&#x3002;&#x4E24;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x5728; Fetch &#x534F;&#x5546;&#x8FC7;&#x7A0B;&#x4E2D;&#x53EF;&#x80FD;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">&#x7532;&#xFF1A;main = C2&#xFF0C;feature-A = A2
&#x4E59;&#xFF1A;main = C3&#xFF0C;feature-A = A1
</code></pre>
<p>&#x5BF9;&#x6D4B;&#x8BD5;&#x56FA;&#x5B9A;&#x63D0;&#x4EA4; <code>A2</code> &#x7684; Agent &#x548C; CI&#xFF0C;&#x901A;&#x5E38;&#x53EA;&#x9700;&#x4FDD;&#x8BC1;&#x8FD9;&#x4E2A;&#x7248;&#x672C;&#x53CA;&#x5176;&#x5386;&#x53F2;&#x5B8C;&#x6574;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x6240;&#x6709;&#x5206;&#x652F;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x4E2A;&#x89C2;&#x5BDF;&#x65F6;&#x95F4;&#x3002;Pando &#x7684;&#x56E0;&#x679C;&#x4E00;&#x81F4;&#x6027;&#x6A21;&#x578B;&#x4FDD;&#x7559;&#x4E86;&#x5355;&#x4E2A; Ref &#x7684;&#x66F4;&#x65B0;&#x987A;&#x5E8F;&#x548C;&#x7248;&#x672C;&#x4F9D;&#x8D56;&#xFF0C;&#x4EE5;&#x653E;&#x5BBD;&#x6574;&#x4F53;&#x89C6;&#x56FE;&#x6362;&#x53D6;&#x66F4;&#x5C11;&#x7684;&#x534F;&#x8C03;&#xFF1B;&#x786E;&#x5B9E;&#x9700;&#x8981;&#x5168;&#x4ED3;&#x5E93;&#x4E00;&#x81F4;&#x5FEB;&#x7167;&#x7684;&#x5DE5;&#x5177;&#x5219;&#x8981;&#x53E6;&#x4F5C;&#x9002;&#x914D;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x521B;&#x65B0;&#x4E8C;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Fetch &#x4E0D;&#x518D;&#x91CD;&#x65B0;&#x751F;&#x6210; packfile&#xFF1F;"><a href="#&#x4E09;&#x3001;&#x521B;&#x65B0;&#x4E8C;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Fetch &#x4E0D;&#x518D;&#x91CD;&#x65B0;&#x751F;&#x6210; packfile&#xFF1F;"></a>&#x4E09;&#x3001;&#x521B;&#x65B0;&#x4E8C;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Fetch &#x4E0D;&#x518D;&#x91CD;&#x65B0;&#x751F;&#x6210; packfile&#xFF1F;</h2>
<p>&#x89E3;&#x51B3;&#x5199;&#x5165;&#x95EE;&#x9898;&#x540E;&#xFF0C;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x66F4;&#x5927;&#x7684;&#x8BFB;&#x53D6;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5047;&#x8BBE; 1000 &#x4E2A; CI &#x4EFB;&#x52A1;&#x540C;&#x65F6; Fetch &#x540C;&#x4E00;&#x4E2A;&#x5206;&#x652F;&#x3002;</p>
<p>&#x4F20;&#x7EDF; Git &#x670D;&#x52A1;&#x9700;&#x8981;&#x6839;&#x636E;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x7684; <code>have</code>&#xFF08;&#x5DF2;&#x7ECF;&#x62E5;&#x6709;&#x7684;&#x63D0;&#x4EA4;&#xFF09;&#x548C; <code>want</code>&#xFF08;&#x9700;&#x8981;&#x7684;&#x63D0;&#x4EA4;&#xFF09;&#xFF0C;&#x8BA1;&#x7B97;&#x4E24;&#x8005;&#x4E4B;&#x95F4;&#x7F3A;&#x5C11;&#x54EA;&#x4E9B;&#x5BF9;&#x8C61;&#xFF0C;&#x518D;&#x751F;&#x6210; packfile&#x3002;</p>
<p>&#x4E0D;&#x540C;&#x5BA2;&#x6237;&#x7AEF;&#x5DF2;&#x6709;&#x7684;&#x5386;&#x53F2;&#x53EF;&#x80FD;&#x4E0D;&#x540C;&#xFF0C;&#x6240;&#x4EE5;&#x670D;&#x52A1;&#x5668;&#x53EF;&#x80FD;&#x8981;&#x53CD;&#x590D;&#x6267;&#x884C;&#x76F8;&#x4F3C;&#x7684;&#x8BA1;&#x7B97;&#x548C;&#x6253;&#x5305;&#x5DE5;&#x4F5C;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x4E9B;&#x5BA2;&#x6237;&#x7AEF;&#x9700;&#x8981;&#x7684;&#x6570;&#x636E;&#x9AD8;&#x5EA6;&#x91CD;&#x53E0;&#x3002;</p>
<p>Pando &#x4ECE;&#x5DF2;&#x7ECF;&#x4E0A;&#x4F20;&#x7684;&#x6570;&#x636E;&#x5305;&#x5165;&#x624B;&#xFF1A;</p>
<p>&#x65E2;&#x7136; Push &#x65F6;&#x5DF2;&#x7ECF;&#x6536;&#x5230; packfile&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; Fetch &#x65F6;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528;&#xFF1F;</p>
<p>&#x4E8E;&#x662F;&#x5B83;&#x628A; Push &#x4E0A;&#x4F20;&#x7684; packfile &#x5B58;&#x5165; Blob Storage&#x3002;Fetch &#x65F6;&#xFF0C;&#x670D;&#x52A1;&#x5668;&#x6839;&#x636E;&#x5BA2;&#x6237;&#x7AEF;&#x7684; <code>have</code> &#x548C; <code>want</code>&#xFF0C;&#x67E5;&#x8BE2;&#x5143;&#x6570;&#x636E;&#xFF0C;&#x627E;&#x5230;&#x80FD;&#x591F;&#x8986;&#x76D6;&#x6240;&#x9700;&#x5386;&#x53F2;&#x7684;&#x5DF2;&#x6709; packfile&#xFF0C;&#x518D;&#x628A;&#x4E0B;&#x8F7D;&#x5730;&#x5740;&#x4EA4;&#x7ED9;&#x5BA2;&#x6237;&#x7AEF;&#x3002;</p>
<p>&#x6570;&#x636E;&#x7531; Express &#x670D;&#x52A1;&#x5206;&#x53D1;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x533A;&#x57DF;&#x7F13;&#x5B58;&#x52A0;&#x901F;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x628A;&#x8BFB;&#x53D6;&#x8FC7;&#x7A0B;&#x4ECE;&#xFF1A;</p>
<pre><code>&#x8BA1;&#x7B97;&#x5DEE;&#x96C6; &#x2192; &#x91CD;&#x65B0;&#x6253;&#x5305; &#x2192; &#x4F20;&#x8F93;
</code></pre>
<p>&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code>&#x67E5;&#x8BE2;&#x5143;&#x6570;&#x636E; &#x2192; &#x9009;&#x62E9;&#x5DF2;&#x6709; packfile &#x2192; &#x4E0B;&#x8F7D;
</code></pre>
<p>&#x4E0D;&#x540C;&#x5BA2;&#x6237;&#x7AEF;&#x7684;&#x5386;&#x53F2;&#x4E0D;&#x540C;&#xFF0C;Push &#x65F6;&#x4EA7;&#x751F;&#x7684; packfile &#x53C8;&#x8BE5;&#x600E;&#x4E48;&#x4F9B;&#x5176;&#x4ED6;&#x5BA2;&#x6237;&#x7AEF;&#x76F4;&#x63A5;&#x590D;&#x7528;&#xFF1F;</p>
<p>Pando &#x4F1A;&#x63A7;&#x5236; Push &#x65F6;&#x5411;&#x5BA2;&#x6237;&#x7AEF;&#x516C;&#x5E03;&#x54EA;&#x4E9B;&#x5DF2;&#x6709;&#x5206;&#x652F;&#x3002;</p>
<p>&#x4F20;&#x7EDF; Git &#x670D;&#x52A1;&#x901A;&#x5E38;&#x516C;&#x5E03;&#x8F83;&#x591A; Ref&#xFF0C;&#x8BA9;&#x5BA2;&#x6237;&#x7AEF;&#x77E5;&#x9053;&#x670D;&#x52A1;&#x5668;&#x5DF2;&#x7ECF;&#x6709;&#x54EA;&#x4E9B;&#x5BF9;&#x8C61;&#xFF0C;&#x4ECE;&#x800C;&#x5C3D;&#x53EF;&#x80FD;&#x51CF;&#x5C11;&#x4E0A;&#x4F20;&#x6570;&#x636E;&#x3002;</p>
<p>&#x4F46; Pando &#x9ED8;&#x8BA4;&#x4E3B;&#x8981;&#x516C;&#x5E03;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684; trunk &#x5206;&#x652F;&#x4F5C;&#x4E3A;&#x57FA;&#x7840;&#x3002;</p>
<p>&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5BA2;&#x6237;&#x7AEF;&#x521B;&#x5EFA; feature &#x5206;&#x652F;&#x7684; packfile &#x65F6;&#xFF0C;&#x4F1A;&#x628A; trunk &#x4E4B;&#x5916;&#x7684;&#x76F8;&#x5173;&#x5386;&#x53F2;&#x4E5F;&#x5305;&#x542B;&#x8FDB;&#x53BB;&#x3002;</p>
<p>&#x7ED3;&#x679C;&#x662F;&#xFF1A;packfile &#x53EF;&#x80FD;&#x6709;&#x4E00;&#x4E9B;&#x91CD;&#x590D;&#x5BF9;&#x8C61;&#xFF0C;&#x4F46;&#x5B83;&#x5BF9;&#x5176;&#x4ED6;&#x62E5;&#x6709;&#x76F8;&#x540C; trunk &#x5386;&#x53F2;&#x7684;&#x5BA2;&#x6237;&#x7AEF;&#x66F4;&#x5BB9;&#x6613;&#x590D;&#x7528;&#x3002;</p>
<p>&#x4E24;&#x79CD;&#x505A;&#x6CD5;&#x7684;&#x53D6;&#x820D;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x4F20;&#x7EDF;&#x65B9;&#x5F0F;&#xFF1A;&#x5C3D;&#x91CF;&#x51CF;&#x5C11;&#x4E0A;&#x4F20;&#x6570;&#x636E;&#xFF0C;&#x4F46;&#x670D;&#x52A1;&#x5668;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x4E3A;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x91CD;&#x65B0;&#x751F;&#x6210; packfile&#x3002;</li>
<li>Pando&#xFF1A;&#x5141;&#x8BB8;&#x4E0A;&#x4F20;&#x4E00;&#x4E9B;&#x91CD;&#x590D;&#x5BF9;&#x8C61;&#xFF0C;&#x6362;&#x53D6; packfile &#x80FD;&#x88AB;&#x66F4;&#x591A;&#x5BA2;&#x6237;&#x7AEF;&#x5171;&#x4EAB;&#x3002;</li>
</ul>
<p>OpenAI &#x62AB;&#x9732;&#xFF0C;&#x5728;&#x5176; monorepo &#x4E2D;&#xFF0C;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x4EA7;&#x751F;&#x7684; packfile &#x4E2D;&#x4F4D;&#x6570;&#x5C0F;&#x4E8E; 20 KiB&#xFF0C;99 &#x5206;&#x4F4D;&#x5C0F;&#x4E8E; 3 MiB&#x3002;&#x5BF9;&#x4ED6;&#x4EEC;&#x7684;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x989D;&#x5916;&#x6210;&#x672C;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x9700;&#x8981; Compaction&#xFF1F;"><a href="#&#x56DB;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x9700;&#x8981; Compaction&#xFF1F;"></a>&#x56DB;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x9700;&#x8981; Compaction&#xFF1F;</h2>
<p>&#x6BCF;&#x6B21; Push &#x90FD;&#x4EA7;&#x751F;&#x4E00;&#x4E2A; packfile&#x3002;&#x5982;&#x679C;&#x5BA2;&#x6237;&#x7AEF;&#x51E0;&#x5929;&#x6CA1;&#x6709; Fetch&#xFF0C;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x4E0B;&#x8F7D;&#x6210;&#x5343;&#x4E0A;&#x4E07;&#x4E2A;&#x5C0F;&#x6587;&#x4EF6;&#x3002;</p>
<p>&#x56E0;&#x6B64; Pando &#x5F15;&#x5165;&#x540E;&#x53F0; Compaction&#xFF1A;&#x628A;&#x591A;&#x4E2A;&#x5C0F; packfile &#x5408;&#x5E76;&#x6210;&#x66F4;&#x5927;&#x7684;&#x8986;&#x76D6;&#x8303;&#x56F4;&#xFF0C;&#x51CF;&#x5C11; Fetch &#x65F6;&#x9700;&#x8981;&#x5904;&#x7406;&#x7684;&#x6587;&#x4EF6;&#x6570;&#x91CF;&#xFF0C;&#x540C;&#x65F6;&#x6539;&#x5584;&#x538B;&#x7F29;&#x6548;&#x7387;&#x3002;</p>
<p>&#x5B83;&#x501F;&#x9274;&#x4E86; LSM Tree &#x7684;&#x5206;&#x5C42;&#x5408;&#x5E76;&#x601D;&#x8DEF;&#xFF0C;&#x5728;&#x8FD9;&#x91CC;&#x7684;&#x4F5C;&#x7528;&#x662F;&#xFF1A;</p>
<p>&#x5199;&#x5165;&#x9636;&#x6BB5;&#x5FEB;&#x901F;&#x8FFD;&#x52A0;&#xFF0C;&#x8BFB;&#x53D6;&#x9636;&#x6BB5;&#x590D;&#x7528;&#xFF0C;&#x540E;&#x53F0;&#x518D;&#x8D1F;&#x8D23;&#x6574;&#x7406;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x610F;&#x5473;&#x7740; Pando &#x4E0D;&#x5FC5;&#x4E3A;&#x4E86;&#x8BA9;&#x6BCF;&#x6B21;&#x8BFB;&#x53D6;&#x90FD;&#x9AD8;&#x6548;&#xFF0C;&#x800C;&#x5728; Push &#x7684;&#x540C;&#x6B65;&#x8DEF;&#x5F84;&#x4E0A;&#x6267;&#x884C;&#x5927;&#x91CF;&#x6574;&#x7406;&#x5DE5;&#x4F5C;&#x3002;</p>
<p>&#xFF08;&#x5BF9; LSM Tree &#x7EC6;&#x8282;&#x611F;&#x5174;&#x8DA3;&#x7684;&#x53EF;&#x4EE5;&#x67E5;&#x770B;&#x4E4B;&#x524D;&#x6587;&#x7AE0;&#x300A;&#x6570;&#x636E;&#x5E93;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x65E7;&#x6570;&#x636E;&#xFF1F;&#x4ECE; LSM Tree &#x5230; Agent &#x7684; Git &#x670D;&#x52A1;&#x300B;&#xFF09;</p>
<h2 id="&#x4E94;&#x3001;&#x8FD9;&#x5957;&#x67B6;&#x6784;&#x7684;&#x6838;&#x5FC3;&#x53D6;&#x820D;"><a href="#&#x4E94;&#x3001;&#x8FD9;&#x5957;&#x67B6;&#x6784;&#x7684;&#x6838;&#x5FC3;&#x53D6;&#x820D;"></a>&#x4E94;&#x3001;&#x8FD9;&#x5957;&#x67B6;&#x6784;&#x7684;&#x6838;&#x5FC3;&#x53D6;&#x820D;</h2>
<table>
<thead>
<tr>
<th>&#x4F20;&#x7EDF;&#x65B9;&#x6848;&#x7684;&#x74F6;&#x9888;</th>
<th>Pando &#x7684;&#x6539;&#x53D8;</th>
<th>&#x4EE3;&#x4EF7;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x4E0D;&#x540C;&#x5206;&#x652F;&#x5171;&#x4EAB;&#x534F;&#x8C03;&#x8FC7;&#x7A0B;</td>
<td>&#x6BCF;&#x4E2A; Ref &#x72EC;&#x7ACB;&#x66F4;&#x65B0;</td>
<td>&#x653E;&#x5F03;&#x4ED3;&#x5E93;&#x7EA7;&#x5168;&#x5C40;&#x5FEB;&#x7167;</td>
</tr>
<tr>
<td>&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x91CD;&#x65B0;&#x751F;&#x6210; packfile</td>
<td>&#x590D;&#x7528;&#x5DF2;&#x6709; packfile</td>
<td>&#x53EF;&#x80FD;&#x4E0A;&#x4F20;&#x3001;&#x4E0B;&#x8F7D;&#x91CD;&#x590D;&#x5BF9;&#x8C61;</td>
</tr>
<tr>
<td>&#x5386;&#x53F2; packfile &#x8D8A;&#x6765;&#x8D8A;&#x591A;</td>
<td>&#x540E;&#x53F0; Compaction</td>
<td>&#x589E;&#x52A0;&#x540E;&#x53F0;&#x6574;&#x7406;&#x548C;&#x7D22;&#x5F15;&#x590D;&#x6742;&#x5EA6;</td>
</tr>
</tbody>
</table>
<p>OpenAI &#x516C;&#x5E03;&#x7684;&#x7ED3;&#x679C;&#x662F;&#xFF1A;Push &#x4E2D;&#x4F4D;&#x5EF6;&#x8FDF;&#x964D;&#x4F4E;&#x8FD1; 5 &#x500D;&#xFF0C;&#x6BCF;&#x5929;&#x4F20;&#x8F93;&#x63A5;&#x8FD1; 1 PB Git &#x6570;&#x636E;&#xFF0C;&#x9AD8;&#x5CF0;&#x4E00;&#x5C0F;&#x65F6;&#x8D85;&#x8FC7; 57 TB&#xFF0C;&#x8D85;&#x8FC7; 99% &#x7684;&#x6570;&#x636E;&#x4F20;&#x8F93;&#x5B57;&#x8282;&#x6765;&#x81EA;&#x672C;&#x5730;&#x78C1;&#x76D8;&#x7F13;&#x5B58;&#x3002;</p>
<p>Pando &#x6700;&#x503C;&#x5F97;&#x501F;&#x9274;&#x7684;&#x601D;&#x60F3;&#xFF0C;&#x662F;&#x91CD;&#x65B0;&#x5224;&#x65AD;&#x7CFB;&#x7EDF;&#x7A76;&#x7ADF;&#x9700;&#x8981;&#x4FDD;&#x8BC1;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x4F20;&#x7EDF;&#x67B6;&#x6784;&#x503E;&#x5411;&#x4E8E;&#x8BA9;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#x4FDD;&#x6301;&#x5168;&#x5C40;&#x4E00;&#x81F4;&#xFF0C;&#x5E76;&#x4E3A;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x5B9E;&#x65F6;&#x751F;&#x6210;&#x4E13;&#x5C5E;&#x6570;&#x636E;&#x3002;</p>
<p>Pando &#x7684;&#x9009;&#x62E9;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x540C;&#x5206;&#x652F;&#x4E0D;&#x9700;&#x8981;&#x5171;&#x4EAB;&#x4E00;&#x4E2A;&#x66F4;&#x65B0;&#x987A;&#x5E8F;&#x3002;</li>
<li>&#x5355;&#x4E2A;&#x5206;&#x652F;&#x7684;&#x5386;&#x53F2;&#x5B8C;&#x6574;&#xFF0C;&#x6BD4;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#x7684;&#x5168;&#x5C40;&#x5FEB;&#x7167;&#x66F4;&#x91CD;&#x8981;&#x3002;</li>
<li>&#x5DF2;&#x7ECF;&#x751F;&#x6210;&#x7684;&#x6570;&#x636E;&#x5305;&#x53EF;&#x4EE5;&#x91CD;&#x590D;&#x5229;&#x7528;&#xFF0C;&#x4E0D;&#x5FC5;&#x4E3A;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x3002;</li>
</ul>
<p>&#x5B83;&#x8BA9; Git &#x670D;&#x52A1;&#x63D0;&#x901F;&#x7684;&#x529E;&#x6CD5;&#xFF0C;&#x662F;&#x51CF;&#x5C11;&#x7CFB;&#x7EDF;&#x4E3A;&#x63D0;&#x4F9B;&#x4F20;&#x7EDF;&#x4FDD;&#x8BC1;&#x800C;&#x627F;&#x62C5;&#x7684;&#x5DE5;&#x4F5C;&#x3002;</p>
`,E=[{level:1,title:"Pando：OpenAI 如何重新设计 Git，让大量 Agent 并发开发",children:[{level:2,title:"一、三个必要概念",children:[]},{level:2,title:"二、创新一：为什么不同分支需要相互等待？",children:[{level:3,title:"1. 旧架构的问题：不同分支共享了协调入口",children:[]},{level:3,title:"2. Pando 的改法：共享数据，分别更新分支状态",children:[]},{level:3,title:"3. 放弃了什么，为什么通常可以接受？",children:[]}]},{level:2,title:"三、创新二：为什么 Fetch 不再重新生成 packfile？",children:[]},{level:2,title:"四、为什么还需要 Compaction？",children:[]},{level:2,title:"五、这套架构的核心取舍",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
