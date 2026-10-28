const x={},F=`<!-- 写作锚点
读者收获：能沿一次工具返回追踪新输入的计算与缓存，判断长上下文加速省在哪里，而不只看每秒生成多少 token。
核心判断：DeepSeek-V4.1-Flash 改变深层全局 KV 的来源以减少首次计算，再结合跨层复用和低精度存储减轻缓存负担；生成和训练仍使用完整的新架构。
如何推进：从修 Bug 时新增的 2000 个 token 出发，走过逐层准备 KV、CED 改变依赖、完整生成与训练，再看这些记录如何被存读以及为效率付出的代价。
-->
<h1 id="Agent &#x53CD;&#x590D;&#x8BFB;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;DeepSeek Flash &#x5982;&#x4F55;&#x52A0;&#x901F;&#xFF1F;"><a href="#Agent &#x53CD;&#x590D;&#x8BFB;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;DeepSeek Flash &#x5982;&#x4F55;&#x52A0;&#x901F;&#xFF1F;"></a>Agent &#x53CD;&#x590D;&#x8BFB;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;DeepSeek Flash &#x5982;&#x4F55;&#x52A0;&#x901F;&#xFF1F;</h1>
<p>Coding Agent &#x4FEE;&#x4E00;&#x4E2A; Bug&#xFF0C;&#x8981;&#x8BFB;&#x6587;&#x4EF6;&#x3001;&#x8FD0;&#x884C;&#x6D4B;&#x8BD5;&#x3001;&#x67E5;&#x770B;&#x62A5;&#x9519;&#xFF0C;&#x518D;&#x7EE7;&#x7EED;&#x4FEE;&#x6539;&#x3002;&#x5B83;&#x751F;&#x6210;&#x7684;&#x6307;&#x4EE4;&#x53EF;&#x80FD;&#x5F88;&#x77ED;&#xFF0C;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x7684;&#x4EE3;&#x7801;&#x548C;&#x65E5;&#x5FD7;&#x5374;&#x5F88;&#x957F;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x751F;&#x6210;&#x5DE5;&#x5177;&#x8C03;&#x7528;
&#x2193;
&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x4E00;&#x5927;&#x6BB5;&#x5185;&#x5BB9;
&#x2193;
&#x6A21;&#x578B;&#x5904;&#x7406;&#x65B0;&#x5185;&#x5BB9;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;
&#x2193;
&#x66F4;&#x591A;&#x5185;&#x5BB9;&#x8FDB;&#x5165;&#x4E0A;&#x4E0B;&#x6587;
</code></pre>
<p>&#x4F60;&#x770B;&#x5B83;&#x534A;&#x5929;&#x6CA1;&#x52A8;&#x9759;&#xFF0C;&#x53EF;&#x80FD;&#x662F;&#x5728;&#x751F;&#x6210;&#x7B54;&#x6848;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x8FD8;&#x5728;&#x5904;&#x7406;&#x521A;&#x6536;&#x5230;&#x7684;&#x6750;&#x6599;&#xFF0C;&#x6216;&#x4FDD;&#x5B58;&#x3001;&#x8BFB;&#x53D6;&#x524D;&#x9762;&#x7684;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x3002;</p>
<p>DeepSeek-V4.1-Flash &#x5C31;&#x5728;&#x8FD9;&#x4E9B;&#x5730;&#x65B9;&#x7701;&#x5F00;&#x9500;&#xFF1A;&#x51CF;&#x5C11;&#x5904;&#x7406;&#x65B0;&#x8F93;&#x5165;&#x7684;&#x8BA1;&#x7B97;&#xFF0C;&#x7F29;&#x5C0F;&#x5386;&#x53F2;&#x7F13;&#x5B58;&#x3002;&#x5176;&#x4E2D;&#x4E00;&#x9879;&#x6539;&#x52A8;&#xFF0C;&#x662F;&#x628A; 40 &#x4E2A; Transformer Block &#x5206;&#x6210;&#x524D;&#x540E;&#x5404; 20 &#x4E2A;&#x3002;</p>
<h2 id="&#x7F13;&#x5B58;&#x91CC;&#x6CA1;&#x6709;&#x7684;&#xFF0C;&#x8FD8;&#x662F;&#x5F97;&#x5148;&#x7B97;"><a href="#&#x7F13;&#x5B58;&#x91CC;&#x6CA1;&#x6709;&#x7684;&#xFF0C;&#x8FD8;&#x662F;&#x5F97;&#x5148;&#x7B97;"></a>&#x7F13;&#x5B58;&#x91CC;&#x6CA1;&#x6709;&#x7684;&#xFF0C;&#x8FD8;&#x662F;&#x5F97;&#x5148;&#x7B97;</h2>
<p>&#x5047;&#x8BBE; Coding Agent &#x5DF2;&#x7ECF;&#x8BFB;&#x8FC7;&#x4E00;&#x6BB5; 10000 &#x4E2A; token &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x63A5;&#x7740;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF0C;&#x6536;&#x5230; 2000 &#x4E2A;&#x65B0; token&#xFF1A;</p>
<pre><code class="language-text">&#x65E7;&#x7684; 10000 &#x4E2A; &#x2192; &#x5DF2;&#x6709; KV&#xFF0C;&#x76F4;&#x63A5;&#x590D;&#x7528;
&#x65B0;&#x7684; 2000 &#x4E2A; &#x2192; &#x6CA1;&#x6709; KV&#xFF0C;&#x9996;&#x6B21;&#x8BA1;&#x7B97;
</code></pre>
<p>&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x521A;&#x521A;&#x8FD4;&#x56DE;&#xFF0C;&#x7F13;&#x5B58;&#x91CC;&#x8FD8;&#x6CA1;&#x6709;&#x3002;&#x6A21;&#x578B;&#x5F97;&#x5148;&#x5904;&#x7406;&#x8FD9; 2000 &#x4E2A; token&#xFF0C;&#x628A;&#x7B97;&#x51FA;&#x7684;&#x7ED3;&#x679C;&#x5B58;&#x4E0B;&#x6765;&#xFF0C;&#x540E;&#x9762;&#x56DE;&#x7B54;&#x65F6;&#x624D;&#x80FD;&#x76F4;&#x63A5;&#x8BFB;&#x53D6;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; KV Cache&#xFF1A;&#x628A;&#x5177;&#x4F53;&#x8F93;&#x5165;&#x7B97;&#x51FA;&#x7684; K&#x3001;V &#x5B58;&#x4E0B;&#x6765;&#xFF0C;&#x540E;&#x9762;&#x76F4;&#x63A5;&#x8BFB;&#x53D6;&#xFF0C;&#x514D;&#x53BB;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x5148;&#x5904;&#x7406;&#x8FD9;&#x6279;&#x8F93;&#x5165;&#x3001;&#x51C6;&#x5907;&#x597D; KV &#x7684;&#x8FC7;&#x7A0B;&#xFF0C;&#x53EB; Prefill&#x3002;&#x968F;&#x540E;&#x9010;&#x4E2A;&#x751F;&#x6210;&#x65B0; token&#xFF0C;&#x53EB; Decode&#x3002;</p>
<p>&#x6709;&#x4E86; KV Cache&#xFF0C;&#x65E7;&#x5185;&#x5BB9;&#x4E0D;&#x7528;&#x518D;&#x7B97;&#x4E00;&#x904D;&#x3002;&#x4F46;&#x65B0;&#x6765;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x6216;&#x8005;&#x6CA1;&#x547D;&#x4E2D;&#x7F13;&#x5B58;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4ECD;&#x8981;&#x5148;&#x7B97;&#x3002;&#x65B0;&#x67B6;&#x6784;&#x60F3;&#x7701;&#x4E0B;&#x7684;&#xFF0C;&#x5C31;&#x662F;&#x8FD9;&#x90E8;&#x5206;&#x8BA1;&#x7B97;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x9996;&#x6B21;&#x8BA1;&#x7B97;&#x8981;&#x7ECF;&#x8FC7;&#x90A3;&#x4E48;&#x591A;&#x5C42;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x9996;&#x6B21;&#x8BA1;&#x7B97;&#x8981;&#x7ECF;&#x8FC7;&#x90A3;&#x4E48;&#x591A;&#x5C42;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x9996;&#x6B21;&#x8BA1;&#x7B97;&#x8981;&#x7ECF;&#x8FC7;&#x90A3;&#x4E48;&#x591A;&#x5C42;&#xFF1F;</h2>
<p>&#x6BCF;&#x4E2A; token &#x8FDB;&#x5165;&#x6A21;&#x578B;&#x540E;&#xFF0C;&#x5148;&#x8868;&#x793A;&#x6210;&#x4E00;&#x4E32;&#x6570;&#x5B57;&#xFF0C;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x770B;&#x6210;&#x4E00;&#x5F20;&#x6570;&#x5B57;&#x5361;&#x7247;&#x3002;&#x5728;&#x666E;&#x901A; Decoder-only &#x6A21;&#x578B;&#x91CC;&#xFF0C;&#x5361;&#x7247;&#x4F1A;&#x8FD9;&#x6837;&#x5F80;&#x4E0B;&#x4F20;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165; token &#x2192; &#x6570;&#x5B57;&#x5361;&#x7247;
&#x2193;
Block 1
  &#x591A;&#x5934; Attention&#xFF1A;&#x8BFB;&#x53D6;&#x5176;&#x4ED6;&#x4F4D;&#x7F6E;&#x7684;&#x4FE1;&#x606F;
  FFN&#xFF1A;&#x7EE7;&#x7EED;&#x52A0;&#x5DE5;&#x5F53;&#x524D;&#x5361;&#x7247;
&#x2193;
Block 2&#xFF1A;&#x63A5;&#x7740;&#x52A0;&#x5DE5;&#x4E0A;&#x4E00;&#x5C42;&#x7684;&#x7ED3;&#x679C;
&#x2193;
&#x2026;&#x2026;
&#x2193;
Block 40
&#x2193;
&#x8F93;&#x51FA;&#x5934;&#xFF1A;&#x5F97;&#x5230;&#x4E0B;&#x4E00; token &#x7684;&#x6982;&#x7387;
</code></pre>
<p>&#x4E00;&#x4E2A; Block &#x5305;&#x542B; Attention&#x3001;&#x524D;&#x9988;&#x7F51;&#x7EDC; FFN &#x7B49;&#x8BA1;&#x7B97;&#xFF0C;&#x591A;&#x4E2A; Block &#x4E00;&#x5C42;&#x5C42;&#x63A5;&#x8D77;&#x6765;&#x3002;Attention &#x7684;&#x591A;&#x4E2A;&#x5934;&#x53EF;&#x4EE5;&#x5728;&#x540C;&#x4E00;&#x5C42;&#x91CC;&#x5E76;&#x884C;&#x8BFB;&#x53D6;&#x4FE1;&#x606F;&#xFF0C;&#x4F46;&#x540E;&#x4E00;&#x4E2A; Block &#x5F97;&#x7B49;&#x524D;&#x4E00;&#x4E2A;&#x52A0;&#x5DE5;&#x5B8C;&#x5361;&#x7247;&#xFF0C;&#x624D;&#x80FD;&#x63A5;&#x7740;&#x7B97;&#x3002;</p>
<p>Attention &#x8BFB;&#x53D6;&#x524D;&#x6587;&#x65F6;&#xFF0C;&#x4F1A;&#x4ECE;&#x5361;&#x7247;&#x7B97;&#x51FA; Q&#x3001;K&#x3001;V&#xFF1A;</p>
<pre><code class="language-text">Q&#xFF1A;&#x8FD9;&#x6B21;&#x8981;&#x627E;&#x4EC0;&#x4E48;
K&#xFF1A;&#x662F;&#x5426;&#x5339;&#x914D;&#x8FD9;&#x4E2A;&#x67E5;&#x8BE2;
V&#xFF1A;&#x88AB;&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x63D0;&#x4F9B;&#x4EC0;&#x4E48;&#x5185;&#x5BB9;
</code></pre>
<p>&#x751F;&#x6210; Q&#x3001;K&#x3001;V &#x6240;&#x7528;&#x7684;&#x6743;&#x91CD;&#xFF0C;&#x662F;&#x8BAD;&#x7EC3;&#x5F97;&#x5230;&#x7684;&#x53C2;&#x6570;&#xFF1B;KV &#x5219;&#x662F;&#x7528;&#x8FD9;&#x4E9B;&#x6743;&#x91CD;&#x5904;&#x7406;&#x5177;&#x4F53;&#x8F93;&#x5165;&#x540E;&#x7B97;&#x51FA;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x6362;&#x4E00;&#x4EFD;&#x8F93;&#x5165;&#xFF0C;KV &#x4F1A;&#x53D8;&#xFF0C;&#x6743;&#x91CD;&#x4E0D;&#x4F1A;&#x8DDF;&#x7740;&#x53D8;&#x3002;</p>
<p>&#x6BCF;&#x5C42;&#x90FD;&#x4ECE;&#x4F20;&#x5230;&#x8FD9;&#x4E00;&#x5C42;&#x7684;&#x5361;&#x7247;&#x751F;&#x6210; KV&#x3002;&#x60F3;&#x62FF;&#x5230;&#x5F88;&#x6DF1;&#x4E00;&#x5C42;&#x7684; KV&#xFF0C;&#x5C31;&#x5F97;&#x5148;&#x8BA9;&#x5361;&#x7247;&#x7ECF;&#x8FC7;&#x524D;&#x9762;&#x5404;&#x5C42;&#xFF0C;&#x4E00;&#x5C42;&#x5C42;&#x7B97;&#x5230;&#x8FD9;&#x91CC;&#x3002;</p>
<h2 id="&#x8BA9;&#x6DF1;&#x5C42; KV &#x6362;&#x4E00;&#x4E2A;&#x6765;&#x6E90;"><a href="#&#x8BA9;&#x6DF1;&#x5C42; KV &#x6362;&#x4E00;&#x4E2A;&#x6765;&#x6E90;"></a>&#x8BA9;&#x6DF1;&#x5C42; KV &#x6362;&#x4E00;&#x4E2A;&#x6765;&#x6E90;</h2>
<p>&#x56E0;&#x679C;&#x7F16;&#x7801;&#x5668;-&#x89E3;&#x7801;&#x5668;&#xFF08;Causal Encoder-Decoder&#xFF0C;CED&#xFF09;&#x8BA9;&#x540E;&#x534A;&#x6BB5;&#x7684;&#x5168;&#x5C40; KV &#x4E0D;&#x7528;&#x518D;&#x8FD9;&#x6837;&#x4E00;&#x5C42;&#x5C42;&#x7B49;&#x3002;</p>
<p>&#x524D; 20 &#x4E2A; Block &#x5148;&#x5904;&#x7406;&#x65B0;&#x8F93;&#x5165;&#xFF0C;&#x5F97;&#x5230;&#x4E2D;&#x95F4;&#x72B6;&#x6001;&#xFF0C;&#x8BB0;&#x4E3A; <code>H&#x2082;&#x2080;</code>&#x3002;&#x540E;&#x534A;&#x6BB5;&#x7528;&#x4E8E;&#x8BFB;&#x53D6;&#x5168;&#x6587;&#x7684;&#x5168;&#x5C40; KV&#xFF0C;&#x76F4;&#x63A5;&#x7528; <code>H&#x2082;&#x2080;</code> &#x4E58;&#x76F8;&#x5E94;&#x7684;&#x6295;&#x5F71;&#x6743;&#x91CD;&#x5F97;&#x5230;&#x3002;&#x4EE5;&#x7B2C; 30 &#x5C42;&#x4E3A;&#x4F8B;&#xFF1A;</p>
<pre><code class="language-text">&#x4F20;&#x7EDF;&#x8DEF;&#x5F84;&#xFF1A;
H&#x2082;&#x2080;
&#x2193;
&#x5B8C;&#x6574;&#x8BA1;&#x7B97;&#x7B2C; 21&#xFF5E;29 &#x4E2A; Block
&#x2193; &#x5F97;&#x5230;&#x7B2C; 29 &#x5C42;&#x7ED3;&#x679C;
&#x6295;&#x5F71;&#x51FA;&#x7B2C; 30 &#x5C42;&#x7684;&#x5168;&#x5C40; KV

CED &#x8DEF;&#x5F84;&#xFF1A;
H&#x2082;&#x2080;
&#x2193; &#x7B2C; 30 &#x5C42;&#x7684;&#x6295;&#x5F71;&#x6743;&#x91CD;
&#x7B2C; 30 &#x5C42;&#x7684;&#x5168;&#x5C40; KV
</code></pre>
<p>&#x6295;&#x5F71;&#x8FD9;&#x4E00;&#x6B65;&#x4ECD;&#x7136;&#x8981;&#x7B97;&#x3002;&#x4E0D;&#x8FC7;&#xFF0C;&#x4ECE; <code>H&#x2082;&#x2080;</code> &#x7B97;&#x51FA;&#x540E;&#x534A;&#x6BB5;&#x9700;&#x8981;&#x7684;&#x5168;&#x5C40; KV&#xFF0C;&#x6BD4;&#x8DD1;&#x5B8C;&#x540E; 20 &#x4E2A; Block &#x5C11;&#x4E86;&#x8BB8;&#x591A;&#x5DE5;&#x4F5C;&#x3002;</p>
<p>&#x540E;&#x534A;&#x6BB5;&#x5404;&#x5C42;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0D;&#x540C;&#x7684;&#x6295;&#x5F71;&#x6743;&#x91CD;&#xFF0C;&#x4F46;&#x90FD;&#x80FD;&#x4ECE; <code>H&#x2082;&#x2080;</code> &#x51FA;&#x53D1;&#x3002;&#x4E3A;&#x4E86;&#x51C6;&#x5907;&#x8FD9;&#x4E9B;&#x5168;&#x5C40; KV&#xFF0C;&#x539F;&#x672C;&#x8FD8;&#x8981;&#x5728;&#x5386;&#x53F2;&#x4F4D;&#x7F6E;&#x4E0A;&#x6267;&#x884C;&#x7684;&#x7B2C; 21&#x3001;22 &#x5C42;&#x7B49;&#x540E;&#x7EED;&#x5C42;&#x7684; Attention&#x3001;FFN&#xFF0C;&#x5C31;&#x80FD;&#x7701;&#x4E0B;&#x3002;</p>
<p>&#x8FD9;&#x6837;&#xFF0C;&#x4E3A;&#x8FD9; 2000 &#x4E2A;&#x65B0; token &#x51C6;&#x5907;&#x5168;&#x5C40; KV &#x65F6;&#xFF0C;&#x5C31;&#x4E0D;&#x7528;&#x8BA9;&#x6BCF;&#x4E2A;&#x4F4D;&#x7F6E;&#x90FD;&#x5B8C;&#x6574;&#x8DD1;&#x8FC7;&#x540E;&#x534A;&#x6BB5;&#x3002;</p>
<pre><code class="language-text">KV Cache &#x2192; &#x7B97;&#x8FC7;&#x7684;&#xFF0C;&#x4E0D;&#x91CD;&#x590D;&#x7B97;
MLA &#x2192; &#x6BCF;&#x4EFD;&#x5386;&#x53F2;&#x8BB0;&#x5F55;&#xFF0C;&#x5B58;&#x5C0F;&#x4E00;&#x70B9;
CED &#x2192; &#x51C6;&#x5907;&#x65B0;&#x8BB0;&#x5F55;&#x65F6;&#xFF0C;&#x5C11;&#x8DD1;&#x5B8C;&#x6574;&#x5C42;
</code></pre>
<h2 id="&#x5C11;&#x8DD1;&#x7684;&#x662F;&#x8F93;&#x5165; KV &#x8BA1;&#x7B97;&#xFF0C;&#x4E0D;&#x662F;&#x7B54;&#x6848;&#x751F;&#x6210;"><a href="#&#x5C11;&#x8DD1;&#x7684;&#x662F;&#x8F93;&#x5165; KV &#x8BA1;&#x7B97;&#xFF0C;&#x4E0D;&#x662F;&#x7B54;&#x6848;&#x751F;&#x6210;"></a>&#x5C11;&#x8DD1;&#x7684;&#x662F;&#x8F93;&#x5165; KV &#x8BA1;&#x7B97;&#xFF0C;&#x4E0D;&#x662F;&#x7B54;&#x6848;&#x751F;&#x6210;</h2>
<p>&#x90A3;&#x540E; 20 &#x4E2A; Block &#x8FD8;&#x5728;&#x5E72;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>&#x8BFB;&#x5165;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x65F6;&#xFF0C;&#x5927;&#x90E8;&#x5206;&#x4F4D;&#x7F6E;&#x53EA;&#x9700;&#x8981;&#x51C6;&#x5907;&#x597D;&#x4F9B;&#x540E;&#x9762;&#x8BFB;&#x53D6;&#x7684; KV&#x3002;&#x7B49;&#x5230;&#x751F;&#x6210;&#x7B54;&#x6848;&#xFF0C;&#x5F53;&#x524D; token &#x4ECD;&#x4F1A;&#x7ECF;&#x8FC7;&#x5B8C;&#x6574;&#x7F51;&#x7EDC;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D; token
&#x2193;
&#x524D; 20 &#x4E2A; Block
&#x2193;
&#x540E; 20 &#x4E2A; Block
&#x2193;
&#x9884;&#x6D4B;&#x4E0B;&#x4E00;&#x4E2A; token
</code></pre>
<p>&#x540E;&#x534A;&#x6BB5;&#x5404;&#x5C42;&#x4ECD;&#x4F1A;&#x751F;&#x6210;&#x81EA;&#x5DF1;&#x7684;&#x67E5;&#x8BE2;&#xFF0C;&#x8BFB;&#x53D6;&#x5386;&#x53F2; KV&#xFF0C;&#x518D;&#x7EE7;&#x7EED;&#x52A0;&#x5DE5;&#x5F53;&#x524D; token&#x3002;</p>
<p>&#x7701;&#x4E0B;&#x7684;&#x662F;&#x8BFB;&#x5165;&#x957F;&#x8F93;&#x5165;&#x65F6;&#x7684;&#x90A3;&#x90E8;&#x5206;&#x8BA1;&#x7B97;&#x3002;&#x751F;&#x6210;&#x7B54;&#x6848;&#x65F6;&#xFF0C;40 &#x4E2A; Block &#x4ECD;&#x7136;&#x90FD;&#x8981;&#x8DD1;&#x3002;</p>
<h2 id="&#x5FEB;&#x4E86;&#xFF0C;&#x4EE3;&#x4EF7;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5FEB;&#x4E86;&#xFF0C;&#x4EE3;&#x4EF7;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5FEB;&#x4E86;&#xFF0C;&#x4EE3;&#x4EF7;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x539F;&#x6765;&#xFF0C;&#x6DF1;&#x5C42;&#x7684;&#x5168;&#x5C40; KV &#x6765;&#x81EA;&#x4E00;&#x8DEF;&#x52A0;&#x5DE5;&#x5230;&#x8BE5;&#x5C42;&#x7684;&#x5386;&#x53F2;&#x72B6;&#x6001;&#x3002;&#x73B0;&#x5728;&#xFF0C;&#x540E;&#x534A;&#x6BB5;&#x7684;&#x5168;&#x5C40; KV &#x90FD;&#x4ECE;&#x7B2C; 20 &#x5C42;&#x7ED3;&#x679C;&#x51FA;&#x53D1;&#xFF0C;&#x518D;&#x7528;&#x5404;&#x5C42;&#x7684;&#x6743;&#x91CD;&#x53D8;&#x6362;&#xFF0C;&#x6216;&#x8005;&#x8DE8;&#x5C42;&#x590D;&#x7528;&#x3002;</p>
<p>&#x540E;&#x534A;&#x6BB5;&#x4ECD;&#x80FD;&#x7EE7;&#x7EED;&#x5904;&#x7406;&#x5F53;&#x524D; token&#xFF0C;&#x4F46;&#x5B83;&#x8BFB;&#x53D6;&#x7684;&#x5168;&#x5C40; KV&#xFF0C;&#x5C11;&#x4E86;&#x539F;&#x6765;&#x90A3;&#x4E9B;&#x9010;&#x5C42;&#x52A0;&#x5DE5;&#x5386;&#x53F2;&#x5185;&#x5BB9;&#x7684;&#x8BA1;&#x7B97;&#x3002;&#x8DE8;&#x5C42;&#x590D;&#x7528;&#x53C8;&#x8BA9;&#x4E00;&#x4E9B;&#x5C42;&#x5171;&#x7528; KV&#xFF0C;&#x4F4E;&#x7CBE;&#x5EA6;&#x5B58;&#x50A8;&#x5219;&#x4F1A;&#x5F15;&#x5165;&#x6570;&#x503C;&#x8BEF;&#x5DEE;&#x3002;&#x8FD9;&#x4E9B;&#x6539;&#x52A8;&#x90FD;&#x9700;&#x8981;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x4E2D;&#x9002;&#x5E94;&#x3002;</p>
<p>DeepSeek &#x62A5;&#x544A;&#x79F0;&#xFF0C;CED &#x80FD;&#x8BA9; Prefill &#x8BA1;&#x7B97;&#x63A5;&#x8FD1;&#x51CF;&#x534A;&#xFF0C;&#x6027;&#x80FD;&#x4E0E;&#x57FA;&#x7EBF;&#x76F8;&#x5F53;&#x3002;</p>
<p>&#x56DE;&#x5230;&#x4FEE; Bug &#x7684; Agent&#xFF1A;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x7684; 2000 &#x4E2A;&#x65B0; token&#xFF0C;&#x7B2C;&#x4E00;&#x6B21;&#x8FDB;&#x5165;&#x6A21;&#x578B;&#x65F6;&#xFF0C;&#x5C11;&#x8DD1;&#x4E00;&#x90E8;&#x5206;&#x5B8C;&#x6574;&#x5C42;&#x8BA1;&#x7B97;&#xFF1B;&#x7B97;&#x51FA;&#x7684; KV &#x518D;&#x901A;&#x8FC7;&#x590D;&#x7528;&#x548C;&#x4F4E;&#x7CBE;&#x5EA6;&#x5B58;&#x50A8;&#xFF0C;&#x51CF;&#x5C11;&#x4FDD;&#x5B58;&#x548C;&#x8BFB;&#x53D6;&#x7684;&#x5F00;&#x9500;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF0C;&#x770B; Agent &#x7684;&#x5FEB;&#x6162;&#xFF0C;&#x9664;&#x4E86;&#x6BCF;&#x79D2;&#x751F;&#x6210;&#x591A;&#x5C11; token&#xFF0C;&#x4E5F;&#x8981;&#x770B;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x4E4B;&#x540E;&#xFF0C;&#x5B83;&#x8981;&#x82B1;&#x591A;&#x4E45;&#x624D;&#x80FD;&#x63A5;&#x7740;&#x5E72;&#x6D3B;&#x3002;</p>
<p>&#x5173;&#x8054;&#x6587;&#x7AE0;&#x9605;&#x8BFB;&#x300A;&#x8FD8;&#x5728;&#x6BD4; Token &#x901F;&#x5EA6;&#xFF1F;Agent &#x7684;&#x5FEB;&#x6162;&#x53EF;&#x80FD;&#x4E0D;&#x5728;&#x90A3;&#x300B;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>DeepSeek-AI&#xFF0C;DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression&#xFF08;2026&#xFF09;&#xFF0C;&#x7B2C; 2.1&#x2014;2.3 &#x8282;&#xFF1A;https://arxiv.org/html/2609.19969v1</li>
<li>Hugging Face&#xFF0C;How caching works&#xFF1A;https://huggingface.co/docs/transformers/cache_explanation</li>
<li>Vaswani &#x7B49;&#xFF0C;Attention Is All You Need&#xFF08;NeurIPS&#xFF0C;2017&#xFF09;&#xFF1A;https://arxiv.org/html/1706.03762v7</li>
<li>Sun &#x7B49;&#xFF0C;You Only Cache Once: Decoder-Decoder Architectures for Language Models&#xFF08;2024&#xFF09;&#xFF1A;https://arxiv.org/html/2405.05254v2</li>
<li>DeepSeek-AI&#xFF0C;DeepSeek-V3 Technical Report&#xFF08;2024&#xFF09;&#xFF1A;https://arxiv.org/html/2412.19437v1</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
<h2 id="&#x5F80;&#x671F;&#x63A8;&#x8350;"><a href="#&#x5F80;&#x671F;&#x63A8;&#x8350;"></a>&#x5F80;&#x671F;&#x63A8;&#x8350;</h2>
<ul>
<li><a href="../../%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B7%B2%E5%8F%91%E5%B8%83/AI%20%E5%8F%AA%E7%9C%8B%E5%B1%80%E9%83%A8%EF%BC%8C%E6%80%8E%E4%B9%88%E7%9F%A5%E9%81%93%E6%95%B4%E5%BC%A0%E5%9B%BE%E5%9C%A8%E8%AE%B2%E4%BB%80%E4%B9%88%EF%BC%9F.md">AI &#x53EA;&#x770B;&#x5C40;&#x90E8;&#xFF0C;&#x600E;&#x4E48;&#x77E5;&#x9053;&#x6574;&#x5F20;&#x56FE;&#x5728;&#x8BB2;&#x4EC0;&#x4E48;&#xFF1F;</a></li>
<li><a href="../../%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B7%B2%E5%8F%91%E5%B8%83/%E4%BB%A3%E7%A0%81%E5%AE%9A%E4%B9%89%E7%BB%93%E6%9E%84%EF%BC%8C%E6%9D%83%E9%87%8D%E5%AD%98%E5%82%A8%E7%9F%A5%E8%AF%86%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A6%82%E4%BD%95%E6%8E%A8%E7%90%86.md">&#x4EE3;&#x7801;&#x5B9A;&#x4E49;&#x7ED3;&#x6784;&#xFF0C;&#x6743;&#x91CD;&#x5B58;&#x50A8;&#x77E5;&#x8BC6;&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x5927;&#x6A21;&#x578B;&#x5982;&#x4F55;&#x63A8;&#x7406;</a></li>
</ul>
`,E=[{level:1,title:"Agent 反复读长上下文，DeepSeek Flash 如何加速？",children:[{level:2,title:"缓存里没有的，还是得先算",children:[]},{level:2,title:"为什么首次计算要经过那么多层？",children:[]},{level:2,title:"让深层 KV 换一个来源",children:[]},{level:2,title:"少跑的是输入 KV 计算，不是答案生成",children:[]},{level:2,title:"快了，代价是什么？",children:[]},{level:2,title:"参考资料",children:[]},{level:2,title:"往期推荐",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
