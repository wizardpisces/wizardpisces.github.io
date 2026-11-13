const x={},F=`<!-- 写作锚点
读者收获：能区分交接摘要、原始日志与索引的作用，理解记录仍在时 Agent 为什么会遗忘，以及何时需要回查原文。
核心判断：上下文压缩用较少的输入维持任务连续性，原始日志与按需回查帮助弥补摘要遗漏，但保存历史不等于模型已经读到历史。
如何推进：沿一次 401 排查，从上下文放不下引出交接摘要，再由缺失的环境信息引出日志与索引，最后说明适用边界和补救办法。
-->
<h1 id="&#x5BF9;&#x8BDD;&#x592A;&#x957F;&#xFF0C;Agent &#x5982;&#x4F55;&#x9760;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF1F;"><a href="#&#x5BF9;&#x8BDD;&#x592A;&#x957F;&#xFF0C;Agent &#x5982;&#x4F55;&#x9760;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF1F;"></a>&#x5BF9;&#x8BDD;&#x592A;&#x957F;&#xFF0C;Agent &#x5982;&#x4F55;&#x9760;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF1F;</h1>
<p>&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#x8981;&#x89E3;&#x51B3;&#x7684;&#x662F;&#xFF1A;<strong>&#x5386;&#x53F2;&#x592A;&#x957F;&#x65F6;&#xFF0C;&#x600E;&#x6837;&#x8BA9;&#x4EFB;&#x52A1;&#x7EE7;&#x7EED;&#x3002;</strong></p>
<p>&#x5148;&#x770B;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x3002;</p>
<h2 id="&#x4E00;&#x4E2A;&#x6301;&#x7EED;&#x8FD4;&#x56DE; 401 &#x7684;&#x6392;&#x67E5;&#x4EFB;&#x52A1;"><a href="#&#x4E00;&#x4E2A;&#x6301;&#x7EED;&#x8FD4;&#x56DE; 401 &#x7684;&#x6392;&#x67E5;&#x4EFB;&#x52A1;"></a>&#x4E00;&#x4E2A;&#x6301;&#x7EED;&#x8FD4;&#x56DE; 401 &#x7684;&#x6392;&#x67E5;&#x4EFB;&#x52A1;</h2>
<p>&#x5047;&#x8BBE;&#x7528;&#x6237;&#x8BA9; Agent &#x6392;&#x67E5;&#x4E00;&#x4E2A;&#x6301;&#x7EED;&#x8FD4;&#x56DE; 401 &#x7684;&#x63A5;&#x53E3;&#x3002;&#x53CC;&#x65B9;&#x5DF2;&#x7ECF;&#x8BA8;&#x8BBA;&#x3001;&#x6267;&#x884C;&#x4E86;&#x5F88;&#x4E45;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x6237;&#xFF1A;&#x6392;&#x67E5; 401&#xFF0C;&#x4F46;&#x4E0D;&#x8981;&#x4FEE;&#x6539;&#x9274;&#x6743;&#x903B;&#x8F91;&#x3002;

Agent&#xFF1A;&#x6000;&#x7591;&#x4EE4;&#x724C;&#x8FC7;&#x671F;&#x3002;
       &#x67E5;&#x5237;&#x65B0;&#x4EE3;&#x7801;&#x3001;&#x6539;&#x6D4B;&#x8BD5;&#x3001;&#x8FD0;&#x884C;&#x6D4B;&#x8BD5;&#x2026;&#x2026;
       &#x4ECD;&#x7136; 401&#x3002;

&#x7528;&#x6237;&#xFF1A;&#x5148;&#x68C0;&#x67E5;&#x73AF;&#x5883;&#x53D8;&#x91CF;&#x3002;

Agent&#xFF1A;&#x53D1;&#x73B0; AUTH_SECRET &#x4E3A;&#x7A7A;&#x3002;
       &#x4E34;&#x65F6;&#x8865;&#x9F50;&#x540E;&#xFF0C;&#x8BF7;&#x6C42;&#x6210;&#x529F;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x8FC7;&#x7A0B;&#x4EA7;&#x751F;&#x4E86;&#x5927;&#x91CF;&#x4EE3;&#x7801;&#x3001;&#x62A5;&#x9519;&#x548C;&#x5DE5;&#x5177;&#x8F93;&#x51FA;&#x3002;&#x73B0;&#x5728;&#xFF0C;&#x7528;&#x6237;&#x63A5;&#x7740;&#x8BF4;&#xFF1A;</p>
<blockquote>
<p>&#x627E;&#x5230;&#x914D;&#x7F6E;&#x4E3A;&#x4EC0;&#x4E48;&#x6CA1;&#x52A0;&#x8F7D;&#xFF0C;&#x4FEE;&#x597D;&#x540E;&#x8865;&#x4E00;&#x4E2A;&#x6D4B;&#x8BD5;&#x3002;</p>
</blockquote>
<p>&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF1A;<strong>&#x5982;&#x679C;&#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x6A21;&#x578B;&#x90FD;&#x8981;&#x5E26;&#x4E0A;&#x4E4B;&#x524D;&#x5168;&#x90E8;&#x5185;&#x5BB9;&#xFF0C;&#x8FDF;&#x65E9;&#x4F1A;&#x653E;&#x4E0D;&#x8FDB;&#x6A21;&#x578B;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x3002;</strong></p>
<p>&#x804A;&#x5929;&#x754C;&#x9762;&#x80FD;&#x5C55;&#x793A;&#x591A;&#x5C11;&#x5386;&#x53F2;&#xFF0C;&#x548C;&#x6A21;&#x578B;&#x8FD9;&#x4E00;&#x6B21;&#x80FD;&#x770B;&#x5230;&#x591A;&#x5C11;&#x5185;&#x5BB9;&#xFF0C;&#x662F;&#x4E24;&#x56DE;&#x4E8B;&#x3002;&#x6A21;&#x578B;&#x672C;&#x8F6E;&#x4F9D;&#x636E;&#x4EC0;&#x4E48;&#x5DE5;&#x4F5C;&#xFF0C;&#x53D6;&#x51B3;&#x4E8E;&#x5BBF;&#x4E3B;&#x7A0B;&#x5E8F;&#x7ED9;&#x5B83;&#x63D0;&#x4F9B;&#x4E86;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x4F46;&#x76F4;&#x63A5;&#x5220;&#x6389;&#x65E7;&#x5BF9;&#x8BDD;&#x4E5F;&#x4E0D;&#x884C;&#x2014;&#x2014;Agent &#x53EF;&#x80FD;&#x5FD8;&#x8BB0;&#x7528;&#x6237;&#x8BF4;&#x8FC7;&#x201C;&#x4E0D;&#x8981;&#x4FEE;&#x6539;&#x9274;&#x6743;&#x903B;&#x8F91;&#x201D;&#xFF0C;&#x6216;&#x8005;&#x518D;&#x6B21;&#x6392;&#x67E5;&#x5DF2;&#x7ECF;&#x5C1D;&#x8BD5;&#x8FC7;&#x3001;&#x5374;&#x6CA1;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x7684;&#x4EE4;&#x724C;&#x5237;&#x65B0;&#x903B;&#x8F91;&#x3002;</p>
<p>&#x538B;&#x7F29;&#x5C31;&#x662F;&#x4E3A;&#x4E86;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x77DB;&#x76FE;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x52A8;&#x4F5C;&#xFF1A;&#x628A;&#x201C;&#x5B8C;&#x6574;&#x8FC7;&#x7A0B;&#x201D;&#x6362;&#x6210;&#x201C;&#x63A5;&#x4E0B;&#x6765;&#x9700;&#x8981;&#x77E5;&#x9053;&#x7684;&#x72B6;&#x6001;&#x201D;"><a href="#&#x6838;&#x5FC3;&#x52A8;&#x4F5C;&#xFF1A;&#x628A;&#x201C;&#x5B8C;&#x6574;&#x8FC7;&#x7A0B;&#x201D;&#x6362;&#x6210;&#x201C;&#x63A5;&#x4E0B;&#x6765;&#x9700;&#x8981;&#x77E5;&#x9053;&#x7684;&#x72B6;&#x6001;&#x201D;"></a>&#x6838;&#x5FC3;&#x52A8;&#x4F5C;&#xFF1A;&#x628A;&#x201C;&#x5B8C;&#x6574;&#x8FC7;&#x7A0B;&#x201D;&#x6362;&#x6210;&#x201C;&#x63A5;&#x4E0B;&#x6765;&#x9700;&#x8981;&#x77E5;&#x9053;&#x7684;&#x72B6;&#x6001;&#x201D;</h2>
<p>&#x7CFB;&#x7EDF;&#x8BA9;&#x6A21;&#x578B;&#x5199;&#x4E00;&#x4EFD;&#x4EA4;&#x63A5;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#xFF1A;&#x4FEE;&#x590D;&#x6301;&#x7EED;&#x51FA;&#x73B0;&#x7684; 401&#x3002;

&#x7EA6;&#x675F;&#xFF1A;&#x7528;&#x6237;&#x8981;&#x6C42;&#x4E0D;&#x8981;&#x4FEE;&#x6539;&#x9274;&#x6743;&#x903B;&#x8F91;&#x3002;

&#x5DF2;&#x7ECF;&#x89C2;&#x5BDF;&#x5230;&#xFF1A;
- &#x6392;&#x67E5;&#x4EE4;&#x724C;&#x5237;&#x65B0;&#xFF0C;&#x672A;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x3002;
- AUTH_SECRET &#x4E3A;&#x7A7A;&#x3002;
- &#x4E34;&#x65F6;&#x8865;&#x9F50;&#x540E;&#xFF0C;&#x672C;&#x6B21;&#x8BF7;&#x6C42;&#x6210;&#x529F;&#x3002;

&#x4E0B;&#x4E00;&#x6B65;&#xFF1A;
&#x5B9A;&#x4F4D;&#x914D;&#x7F6E;&#x52A0;&#x8F7D;&#x5931;&#x8D25;&#x7684;&#x539F;&#x56E0;&#xFF0C;&#x4FEE;&#x590D;&#x5E76;&#x8865;&#x6D4B;&#x8BD5;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4EFD;&#x8BB0;&#x5F55;&#x600E;&#x4E48;&#x6765;&#xFF1F;</p>
<p>&#x5728;&#x4E00;&#x79CD;&#x6458;&#x8981;&#x5F0F;&#x5B9E;&#x73B0;&#x4E2D;&#xFF0C;&#x5BBF;&#x4E3B;&#x7A0B;&#x5E8F;&#x4F1A;&#x628A;&#x5F53;&#x524D;&#x5386;&#x53F2;&#x548C;&#x603B;&#x7ED3;&#x8981;&#x6C42;&#x4EA4;&#x7ED9;&#x6A21;&#x578B;&#xFF0C;&#x8BA9;&#x5B83;&#x6574;&#x7406;&#x51FA;&#x8FDB;&#x5C55;&#x3001;&#x7EA6;&#x675F;&#x3001;&#x5173;&#x952E;&#x53D1;&#x73B0;&#x548C;&#x5269;&#x4F59;&#x5DE5;&#x4F5C;&#xFF0C;&#x518D;&#x7528;&#x6458;&#x8981;&#x4E0E;&#x4FDD;&#x7559;&#x7684;&#x90E8;&#x5206;&#x6D88;&#x606F;&#x91CD;&#x5EFA;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
<pre><code class="language-text">&#x65E7;&#x5386;&#x53F2; + &#x603B;&#x7ED3;&#x8981;&#x6C42;
        &#x2193;
&#x6A21;&#x578B;&#x751F;&#x6210;&#x4EA4;&#x63A5;&#x6458;&#x8981;
        &#x2193;
&#x5FC5;&#x8981;&#x4E0A;&#x4E0B;&#x6587; + &#x90E8;&#x5206;&#x539F;&#x6D88;&#x606F; + &#x6458;&#x8981;
        &#x2193;
&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x4EFB;&#x52A1;
</code></pre>
<p>&#x540E;&#x7EED;&#x6A21;&#x578B;&#x4E3B;&#x8981;&#x6839;&#x636E;&#x8FD9;&#x4EFD;&#x4EA4;&#x63A5;&#x8BB0;&#x5F55;&#xFF0C;&#x4EE5;&#x53CA;&#x4FDD;&#x7559;&#x7684;&#x90E8;&#x5206;&#x6D88;&#x606F;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF0C;&#x4E0D;&#x5FC5;&#x518D;&#x9010;&#x6761;&#x9605;&#x8BFB;&#x4E4B;&#x524D;&#x5168;&#x90E8;&#x8FC7;&#x7A0B;&#x3002;</p>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6837;&#x505A;&#x6709;&#x7528;&#xFF1F;</strong></p>
<p>&#x56E0;&#x4E3A;&#x7EE7;&#x7EED;&#x4EFB;&#x52A1;&#x901A;&#x5E38;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x7ECF;&#x5386;&#x6240;&#x6709;&#x8FC7;&#x7A0B;&#xFF0C;&#x5374;&#x9700;&#x8981;&#x77E5;&#x9053;&#xFF1A;</p>
<ul>
<li>&#x6B63;&#x5728;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#xFF1B;</li>
<li>&#x5DF2;&#x7ECF;&#x89C2;&#x5BDF;&#x5230;&#x4E86;&#x4EC0;&#x4E48;&#xFF1B;</li>
<li>&#x54EA;&#x4E9B;&#x5C1D;&#x8BD5;&#x6CA1;&#x6709;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#xFF1B;</li>
<li>&#x6709;&#x4EC0;&#x4E48;&#x9650;&#x5236;&#xFF1B;</li>
<li>&#x4E0B;&#x4E00;&#x6B65;&#x505A;&#x4EC0;&#x4E48;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x4E3A;&#x4E86;&#x628A;&#x804A;&#x5929;&#x4FDD;&#x5B58;&#x5F97;&#x66F4;&#x5C0F;&#xFF0C;&#x800C;&#x662F;&#x4E3A;&#x4E86;<strong>&#x7528;&#x8F83;&#x5C0F;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x7EF4;&#x6301;&#x4EFB;&#x52A1;&#x8FDE;&#x7EED;&#x6027;</strong>&#x3002;</p>
<h2 id="&#x90A3;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x4FDD;&#x5B58;&#x539F;&#x59CB;&#x65E5;&#x5FD7;&#xFF1F;"><a href="#&#x90A3;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x4FDD;&#x5B58;&#x539F;&#x59CB;&#x65E5;&#x5FD7;&#xFF1F;"></a>&#x90A3;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x4FDD;&#x5B58;&#x539F;&#x59CB;&#x65E5;&#x5FD7;&#xFF1F;</h2>
<p>&#x56E0;&#x4E3A;&#x4EA4;&#x63A5;&#x8BB0;&#x5F55;&#x53EF;&#x80FD;&#x6F0F;&#x4E1C;&#x897F;&#x3002;</p>
<p>&#x5047;&#x8BBE; Agent &#x63A5;&#x4E0B;&#x6765;&#x9700;&#x8981;&#x786E;&#x8BA4;&#xFF1A;</p>
<blockquote>
<p>&#x5F53;&#x65F6;&#x4E34;&#x65F6;&#x8865;&#x9F50;&#x7684;&#x662F;&#x54EA;&#x4E2A;&#x73AF;&#x5883;&#x91CC;&#x7684; <code>AUTH_SECRET</code>&#xFF1F;&#x5F00;&#x53D1;&#x73AF;&#x5883;&#xFF0C;&#x8FD8;&#x662F;&#x6D4B;&#x8BD5;&#x73AF;&#x5883;&#xFF1F;</p>
</blockquote>
<p>&#x6458;&#x8981;&#x6CA1;&#x5199;&#x3002;</p>
<p>&#x8FD9;&#x65F6;&#xFF0C;&#x6458;&#x8981;&#x672C;&#x8EAB;&#x65E0;&#x6CD5;&#x7ED9;&#x51FA;&#x7B54;&#x6848;&#x3002;&#x5982;&#x679C;&#x65E7;&#x8BB0;&#x5F55;&#x8FD8;&#x5728;&#xFF0C;&#x5E76;&#x4E14;&#x6709;&#x8BFB;&#x53D6;&#x5165;&#x53E3;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x56DE;&#x67E5;&#x5F53;&#x65F6;&#x7684;&#x64CD;&#x4F5C;&#xFF1A;</p>
<pre><code class="language-text">&#x6458;&#x8981;&#xFF1A;&#x544A;&#x8BC9; Agent &#x76EE;&#x524D;&#x8FDB;&#x884C;&#x5230;&#x54EA;&#x91CC;
&#x539F;&#x59CB;&#x65E5;&#x5FD7;&#xFF1A;&#x4F9B; Agent &#x6838;&#x5BF9;&#x5F53;&#x65F6;&#x7A76;&#x7ADF;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;
&#x7D22;&#x5F15;&#xFF1A;&#x5E2E;&#x52A9;&#x7CFB;&#x7EDF;&#x5B9A;&#x4F4D;&#x90A3;&#x6BB5;&#x8BB0;&#x5F55;
</code></pre>
<p>&#x7D22;&#x5F15;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x4EC0;&#x4E48;&#x590D;&#x6742;&#x7684; AI &#x6280;&#x672F;&#x3002;&#x8BB0;&#x4E0B;&#x8FD9;&#x6761;&#x8BB0;&#x5F55;&#x5C5E;&#x4E8E;&#x54EA;&#x4E2A;&#x4F1A;&#x8BDD;&#x3001;&#x54EA;&#x4E00;&#x8F6E;&#x3001;&#x54EA;&#x6B21;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#xFF0C;&#x4EE5;&#x53CA;&#x5B83;&#x5728;&#x65E5;&#x5FD7;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5C31;&#x80FD;&#x5E2E;&#x52A9;&#x7A0B;&#x5E8F;&#x5B9A;&#x4F4D;&#x539F;&#x6587;&#x3002;</p>
<p>&#x627E;&#x5230;&#x540E;&#xFF0C;&#x8FD8;&#x8981;&#x628A;&#x76F8;&#x5173;&#x5185;&#x5BB9;&#x91CD;&#x65B0;&#x653E;&#x8FDB;&#x6A21;&#x578B;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6A21;&#x578B;&#x624D;&#x771F;&#x6B63;&#x8BFB;&#x5230;&#x4E86;&#x5B83;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x201C;&#x6709;&#x635F;&#x6458;&#x8981;&#x201D;&#x548C;&#x201C;&#x4FDD;&#x7559;&#x539F;&#x6587;&#x201D;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x5B58;&#x5728;&#x3002;<strong>&#x4E24;&#x8005;&#x627F;&#x62C5;&#x4E0D;&#x540C;&#x5DE5;&#x4F5C;&#xFF0C;&#x4E0D;&#x662F;&#x4E24;&#x79CD;&#x4E92;&#x76F8;&#x77DB;&#x76FE;&#x7684;&#x538B;&#x7F29;&#x65B9;&#x5F0F;&#x3002;</strong></p>
<p>&#x4F46;&#x8FD9;&#x91CC;&#x8FD8;&#x6709;&#x4E2A;&#x9650;&#x5236;&#xFF1A;</p>
<blockquote>
<p><strong>&#x65E5;&#x5FD7;&#x5B58;&#x7740;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x4F1A;&#x8BFB;&#x5230;&#xFF1B;&#x7D22;&#x5F15;&#x5B58;&#x5728;&#xFF0C;&#x4E5F;&#x4E0D;&#x4E00;&#x5B9A;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;</strong></p>
</blockquote>
<p>&#x5982;&#x679C; Agent &#x6839;&#x672C;&#x6CA1;&#x610F;&#x8BC6;&#x5230;&#x201C;&#x73AF;&#x5883;&#x4E0D;&#x540C;&#x201D;&#x5F88;&#x91CD;&#x8981;&#xFF0C;&#x5C31;&#x53EF;&#x80FD;&#x4E0D;&#x53BB;&#x56DE;&#x67E5;&#xFF0C;&#x76F4;&#x63A5;&#x6CBF;&#x7740;&#x9519;&#x8BEF;&#x7406;&#x89E3;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF08;&#x4E4B;&#x524D;&#x63D0;&#x5230;&#x7684;&#x300A;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x4E00;&#x6761;&#x8DEF;&#x8D70;&#x5230;&#x9ED1;&#x300B;&#x8BB2;&#x7684;&#x5C31;&#x662F;&#x8FD9;&#x4E2A;&#x73B0;&#x8C61;&#xFF09;&#x3002;</p>
<h2 id="&#x4E00;&#x4E9B;&#x5C40;&#x9650;&#x6027;"><a href="#&#x4E00;&#x4E9B;&#x5C40;&#x9650;&#x6027;"></a>&#x4E00;&#x4E9B;&#x5C40;&#x9650;&#x6027;</h2>
<p>&#x4E0A;&#x9762;&#x8FD9;&#x5957;<strong>&#x9002;&#x5408;&#x957F;&#x65F6;&#x95F4;&#x3001;&#x76EE;&#x6807;&#x76F8;&#x5BF9;&#x8FDE;&#x7EED;&#x7684;&#x4EFB;&#x52A1;&#x3002;</strong></p>
<p>&#x4F8B;&#x5982;&#x6392;&#x67E5;&#x6545;&#x969C;&#x3001;&#x5B9E;&#x73B0;&#x529F;&#x80FD;&#x3002;&#x8FC7;&#x7A0B;&#x5F88;&#x957F;&#xFF0C;&#x4F46;&#x53EF;&#x4EE5;&#x63D0;&#x70BC;&#x6210;&#x201C;&#x76EE;&#x6807;&#x3001;&#x7EA6;&#x675F;&#x3001;&#x5DF2;&#x6709;&#x53D1;&#x73B0;&#x3001;&#x5269;&#x4F59;&#x5DE5;&#x4F5C;&#x201D;&#x3002;&#x4E22;&#x6389;&#x90E8;&#x5206;&#x8FC7;&#x7A0B;&#xFF0C;&#x901A;&#x5E38;&#x4ECD;&#x80FD;&#x7EE7;&#x7EED;&#x3002;</p>
<p>&#x4F46;<strong>&#x4E0D;&#x9002;&#x5408;&#x53EA;&#x9760;&#x6458;&#x8981;&#x5904;&#x7406;&#x4F9D;&#x8D56;&#x7CBE;&#x786E;&#x7EC6;&#x8282;&#x7684;&#x5DE5;&#x4F5C;&#x3002;</strong></p>
<p>&#x4F8B;&#x5982;&#x7528;&#x6237;&#x8981;&#x6C42;&#xFF1A;</p>
<blockquote>
<p>&#x53EA;&#x6539;&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x4E2D;&#x7684; AI &#x5316;&#x63AA;&#x8F9E;&#xFF0C;&#x5176;&#x4ED6;&#x53E5;&#x5B50;&#x3001;&#x987A;&#x5E8F;&#x548C;&#x8282;&#x594F;&#x90FD;&#x4E0D;&#x8981;&#x52A8;&#x3002;</p>
</blockquote>
<p>&#x5982;&#x679C;&#x538B;&#x7F29;&#x540E;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x91CC;&#x53EA;&#x5269;&#x201C;&#x7528;&#x6237;&#x5E0C;&#x671B;&#x6587;&#x7AE0;&#x66F4;&#x81EA;&#x7136;&#x201D;&#xFF0C;&#x6839;&#x672C;&#x770B;&#x4E0D;&#x89C1;&#x539F;&#x6587;&#xFF0C;&#x90A3;&#x6839;&#x672C;&#x4E0D;&#x53EF;&#x80FD;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;</p>
<p>&#x8FD9;&#x79CD;&#x5E94;&#x8BE5;&#x91CD;&#x65B0;&#x8BFB;&#x53D6;&#x539F;&#x6587;&#x548C;&#x660E;&#x786E;&#x7EA6;&#x675F;&#xFF0C;&#x518D;&#x9010;&#x5904;&#x4FEE;&#x6539;&#xFF1B;&#x4E0D;&#x80FD;&#x62FF;&#x6458;&#x8981;&#x4EE3;&#x66FF;&#x539F;&#x6587;&#x3002;</p>
<p>&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x66F4;&#x9690;&#x853D;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x6458;&#x8981;&#x53EF;&#x80FD;&#x628A;&#x201C;&#x6000;&#x7591;&#x201D;&#x5199;&#x6210;&#x201C;&#x786E;&#x8BA4;&#x201D;&#x3002;&#x4E4B;&#x540E;&#x7684;&#x6A21;&#x578B;&#x5C31;&#x4F1A;&#x7EE7;&#x627F;&#x8FD9;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5E76;&#x7EE7;&#x7EED;&#x6CBF;&#x7740;&#x5B83;&#x63A8;&#x7406;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x8FD9;&#x5957;&#x673A;&#x5236;&#x4E0D;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x6C38;&#x8FDC;&#x8BB0;&#x5F97;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x5B83;&#x5728;&#x957F;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x5373;&#x4FBF;&#x662F;&#x5FD8;&#x6389;&#x90E8;&#x5206;&#x8FC7;&#x7A0B;&#xFF0C;&#x4ECD;&#x6709;&#x8F83;&#x5927;&#x7684;&#x673A;&#x4F1A;&#x628A;&#x4EFB;&#x52A1;&#x51C6;&#x786E;&#x5730;&#x63A8;&#x8FDB;&#x4E0B;&#x53BB;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x628A;&#x538B;&#x7F29;&#x7B56;&#x7565;&#x7406;&#x89E3;&#x4E3A;&#x957F;&#x4EFB;&#x52A1;&#x4E2D;&#x7684;&#x4E00;&#x6B21;&#x6362;&#x73ED;&#xFF1A;</p>
<blockquote>
<p><strong>&#x4EA4;&#x63A5;&#x8BB0;&#x5F55;&#x5E2E;&#x52A9;&#x4E0B;&#x4E00;&#x73ED;&#x5FEB;&#x901F;&#x63A5;&#x624B;&#xFF0C;&#x539F;&#x59CB;&#x5DE5;&#x4F5C;&#x8BB0;&#x5F55;&#x4F9B;&#x5FC5;&#x8981;&#x65F6;&#x6838;&#x5BF9;&#x3002;&#x8FC7;&#x7A0B;&#x4E2D;&#x4E0D;&#x53EF;&#x80FD;&#x4FDD;&#x7559;&#x6240;&#x6709;&#x7EC6;&#x8282;&#xFF0C;&#x80FD;&#x5426;&#x51C6;&#x786E;&#x7D22;&#x5F15;&#x539F;&#x59CB;&#x65E5;&#x5FD7;&#x5E76;&#x56DE;&#x67E5;&#xFF0C;&#x51B3;&#x5B9A;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x7684;&#x7A33;&#x5B9A;&#x6027;&#x3002;</strong></p>
</blockquote>
`,E=[{level:1,title:"对话太长，Agent 如何靠上下文压缩继续工作？",children:[{level:2,title:"一个持续返回 401 的排查任务",children:[]},{level:2,title:"核心动作：把“完整过程”换成“接下来需要知道的状态”",children:[]},{level:2,title:"那为什么还要保存原始日志？",children:[]},{level:2,title:"一些局限性",children:[]},{level:2,title:"总结",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
