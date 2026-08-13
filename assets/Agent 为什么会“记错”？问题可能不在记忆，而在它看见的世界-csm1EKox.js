const x={},F=`<h1 id="Agent &#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x201C;&#x8BB0;&#x9519;&#x201D;&#xFF1F;&#x95EE;&#x9898;&#x53EF;&#x80FD;&#x4E0D;&#x5728;&#x8BB0;&#x5FC6;&#xFF0C;&#x800C;&#x5728;&#x5B83;&#x770B;&#x89C1;&#x7684;&#x4E16;&#x754C;"><a href="#Agent &#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x201C;&#x8BB0;&#x9519;&#x201D;&#xFF1F;&#x95EE;&#x9898;&#x53EF;&#x80FD;&#x4E0D;&#x5728;&#x8BB0;&#x5FC6;&#xFF0C;&#x800C;&#x5728;&#x5B83;&#x770B;&#x89C1;&#x7684;&#x4E16;&#x754C;"></a>Agent &#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x201C;&#x8BB0;&#x9519;&#x201D;&#xFF1F;&#x95EE;&#x9898;&#x53EF;&#x80FD;&#x4E0D;&#x5728;&#x8BB0;&#x5FC6;&#xFF0C;&#x800C;&#x5728;&#x5B83;&#x770B;&#x89C1;&#x7684;&#x4E16;&#x754C;</h1>
<p>&#x4E0A;&#x4E00;&#x7BC7;<a href="./Agent%20%E8%BF%99%E6%AC%A1%E7%AD%94%E5%AF%B9%E4%BA%86%EF%BC%8C%E4%B8%8B%E6%AC%A1%E5%91%A2%EF%BC%9F%E4%B8%80%E4%B8%AA%E5%A4%A9%E6%B0%94%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%20LangSmith.md">&#x300A;Agent &#x8FD9;&#x6B21;&#x7B54;&#x5BF9;&#x4E86;&#xFF0C;&#x4E0B;&#x6B21;&#x5462;&#xFF1F;&#x4E00;&#x4E2A;&#x5929;&#x6C14;&#x4F8B;&#x5B50;&#x770B;&#x61C2; LangSmith&#x300B;</a>&#x91CC;&#xFF0C;&#x6211;&#x4EEC;&#x7ED9;&#x5929;&#x6C14; Agent &#x7559;&#x4E0B;&#x4E86; Trace&#x3002;&#x5B83;&#x54EA;&#x4E00;&#x6B65;&#x6536;&#x5230;&#x4EC0;&#x4E48;&#x3001;&#x8F93;&#x51FA;&#x4EC0;&#x4E48;&#xFF0C;&#x51FA;&#x9519;&#x540E;&#x7EC8;&#x4E8E;&#x4E0D;&#x7528;&#x9760;&#x731C;&#x3002;</p>
<p>&#x8FD9;&#x6B21;&#xFF0C;&#x7528;&#x6237;&#x5148;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x5317;&#x4EAC;&#x660E;&#x5929;&#x8981;&#x4E0D;&#x8981;&#x5E26;&#x4F1E;&#xFF1F;</p>
</blockquote>
<p>Agent &#x67E5;&#x5230;&#x5317;&#x4EAC;&#x660E;&#x5929;&#x5C0F;&#x96E8;&#xFF0C;&#x5EFA;&#x8BAE;&#x5E26;&#x4F1E;&#x3002;&#x7528;&#x6237;&#x63A5;&#x7740;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x90A3;&#x4E0A;&#x6D77;&#x5462;&#xFF1F;</p>
</blockquote>
<p>&#x5929;&#x6C14;&#x5DE5;&#x5177;&#x67E5;&#x5230;&#x4E0A;&#x6D77;&#x660E;&#x5929;&#x6674;&#xFF0C;Agent &#x5374;&#x56DE;&#x7B54;&#xFF1A;</p>
<blockquote>
<p>&#x5317;&#x4EAC;&#x660E;&#x5929;&#x6709;&#x5C0F;&#x96E8;&#xFF0C;&#x5EFA;&#x8BAE;&#x5E26;&#x4F1E;&#x3002;</p>
</blockquote>
<p>&#x57CE;&#x5E02;&#x63D0;&#x53D6;&#x5BF9;&#x4E86;&#xFF0C;&#x5DE5;&#x5177;&#x4E5F;&#x67E5;&#x5BF9;&#x4E86;&#xFF0C;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x4E3A;&#x4EC0;&#x4E48;&#x53C8;&#x56DE;&#x5230;&#x4E86;&#x5317;&#x4EAC;&#xFF1F;</p>
<h2 id="&#x9519;&#x8BEF;&#x53D1;&#x751F;&#x5728;&#x6700;&#x540E;&#x4E00;&#x6B65;"><a href="#&#x9519;&#x8BEF;&#x53D1;&#x751F;&#x5728;&#x6700;&#x540E;&#x4E00;&#x6B65;"></a>&#x9519;&#x8BEF;&#x53D1;&#x751F;&#x5728;&#x6700;&#x540E;&#x4E00;&#x6B65;</h2>
<p>&#x6253;&#x5F00;&#x8FD9;&#x6B21; Trace&#xFF1A;</p>
<pre><code class="language-text">extract_info
  &#x8F93;&#x51FA;&#xFF1A;city=&#x4E0A;&#x6D77;&#xFF0C;date=&#x660E;&#x5929;

get_weather
  &#x8F93;&#x51FA;&#xFF1A;&#x4E0A;&#x6D77;&#xFF0C;&#x6674;&#xFF0C;&#x964D;&#x96E8;&#x6982;&#x7387; 10%

write_answer
  &#x8F93;&#x5165;&#xFF1A;&#x5168;&#x90E8;&#x5BF9;&#x8BDD; + &#x5386;&#x6B21;&#x5DE5;&#x5177;&#x7ED3;&#x679C; + &#x5F53;&#x524D; State
  &#x8F93;&#x51FA;&#xFF1A;&#x5317;&#x4EAC;&#x660E;&#x5929;&#x6709;&#x5C0F;&#x96E8;&#xFF0C;&#x5EFA;&#x8BAE;&#x5E26;&#x4F1E;
</code></pre>
<p>&#x95EE;&#x9898;&#x51FA;&#x5728; <code>write_answer</code>&#x3002;&#x5B83;&#x5F53;&#x65F6;&#x770B;&#x5230;&#x4E86;&#x4E24;&#x4EFD;&#x5929;&#x6C14;&#xFF1A;&#x5386;&#x53F2;&#x5BF9;&#x8BDD;&#x91CC;&#x7684;&#x201C;&#x5317;&#x4EAC;&#x3001;&#x5C0F;&#x96E8;&#x201D;&#xFF0C;&#x4EE5;&#x53CA;&#x521A;&#x521A;&#x67E5;&#x5230;&#x7684;&#x201C;&#x4E0A;&#x6D77;&#x3001;&#x6674;&#x201D;&#x3002;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6CA1;&#x6709;&#x7F3A;&#x5E2D;&#xFF0C;&#x53EA;&#x662F;&#x548C;&#x65E7;&#x7B54;&#x6848;&#x6DF7;&#x5728;&#x4E86;&#x4E00;&#x8D77;&#x3002;</p>
<p>&#x7A0B;&#x5E8F;&#x539F;&#x672C;&#x60F3;&#x9632;&#x6B62; Agent &#x5FD8;&#x4E8B;&#xFF0C;&#x4E8E;&#x662F;&#x628A;&#x80FD;&#x627E;&#x5230;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x4EA4;&#x7ED9;&#x6A21;&#x578B;&#x3002;&#x7ED3;&#x679C;&#x4FE1;&#x606F;&#x8D8A;&#x5B8C;&#x6574;&#xFF0C;&#x5F53;&#x524D;&#x4E8B;&#x5B9E;&#x53CD;&#x800C;&#x8D8A;&#x4E0D;&#x7A81;&#x51FA;&#x3002;</p>
<h2 id="&#x6A21;&#x578B;&#x6CA1;&#x6709;&#x8BB0;&#x9519;&#xFF0C;&#x662F;&#x7A0B;&#x5E8F;&#x53C8;&#x628A;&#x5317;&#x4EAC;&#x53D1;&#x7ED9;&#x4E86;&#x5B83;"><a href="#&#x6A21;&#x578B;&#x6CA1;&#x6709;&#x8BB0;&#x9519;&#xFF0C;&#x662F;&#x7A0B;&#x5E8F;&#x53C8;&#x628A;&#x5317;&#x4EAC;&#x53D1;&#x7ED9;&#x4E86;&#x5B83;"></a>&#x6A21;&#x578B;&#x6CA1;&#x6709;&#x8BB0;&#x9519;&#xFF0C;&#x662F;&#x7A0B;&#x5E8F;&#x53C8;&#x628A;&#x5317;&#x4EAC;&#x53D1;&#x7ED9;&#x4E86;&#x5B83;</h2>
<p>&#x6211;&#x4EEC;&#x5E38;&#x8BF4;&#x201C;Agent &#x8FD8;&#x8BB0;&#x5F97;&#x5317;&#x4EAC;&#x201D;&#xFF0C;&#x542C;&#x8D77;&#x6765;&#x50CF;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x4E00;&#x76F4;&#x4FDD;&#x5B58;&#x7740;&#x4E00;&#x6BB5;&#x7ECF;&#x5386;&#x3002;</p>
<p>&#x5BF9;&#x8FD9;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x6765;&#x8BF4;&#xFF0C;&#x60C5;&#x51B5;&#x66F4;&#x6734;&#x7D20;&#xFF1A;&#x5B83;&#x80FD;&#x4F9D;&#x636E;&#x7684;&#xFF0C;&#x53EA;&#x662F;&#x7A0B;&#x5E8F;&#x521A;&#x521A;&#x53D1;&#x6765;&#x7684;&#x90A3;&#x4E32; token&#x3002;&#x5317;&#x4EAC;&#x518D;&#x6B21;&#x51FA;&#x73B0;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x5386;&#x53F2;&#x6D88;&#x606F;&#x548C;&#x65E7;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x53C8;&#x88AB;&#x53D1;&#x4E86;&#x4E00;&#x904D;&#xFF0C;&#x5E76;&#x975E;&#x6A21;&#x578B;&#x4E3B;&#x52A8;&#x56DE;&#x5FC6;&#x3002;</p>
<p>&#x5982;&#x679C;&#x53CD;&#x8FC7;&#x6765;&#x53EA;&#x53D1;&#x9001;&#xFF1A;</p>
<blockquote>
<p>&#x90A3;&#x4E0A;&#x6D77;&#x5462;&#xFF1F;</p>
</blockquote>
<p>&#x5317;&#x4EAC;&#x662F;&#x6D88;&#x5931;&#x4E86;&#xFF0C;&#x4E0A;&#x4E00;&#x8F6E;&#x7684;&#x201C;&#x660E;&#x5929;&#x201D;&#x4E5F;&#x4F1A;&#x4E00;&#x8D77;&#x6D88;&#x5931;&#x3002;&#x6240;&#x8C13; Agent &#x9057;&#x5FD8;&#xFF0C;&#x6709;&#x65F6;&#x53EA;&#x662F;&#x7CFB;&#x7EDF;&#x6CA1;&#x6709;&#x628A;&#x76F8;&#x5173;&#x4FE1;&#x606F;&#x91CD;&#x65B0;&#x653E;&#x8FDB;&#x6765;&#x3002;</p>
<p>&#x591A;&#x8F6E;&#x5BF9;&#x8BDD;&#x770B;&#x8D77;&#x6765;&#x50CF;&#x4E00;&#x6BB5;&#x8FDE;&#x7EED;&#x7ECF;&#x5386;&#xFF0C;&#x6A21;&#x578B;&#x770B;&#x5230;&#x7684;&#x5374;&#x662F;&#x7A0B;&#x5E8F;&#x6BCF;&#x4E00;&#x8F6E;&#x91CD;&#x65B0;&#x62FC;&#x88C5;&#x7684;&#x73B0;&#x573A;&#x3002;Agent &#x7684;&#x8FDE;&#x7EED;&#x6027;&#xFF0C;&#x5F88;&#x5927;&#x4E00;&#x90E8;&#x5206;&#x5B58;&#x5728;&#x4E8E;&#x6A21;&#x578B;&#x5916;&#x9762;&#x3002;</p>
<h2 id="&#x8865;&#x4E00;&#x53E5; Prompt &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x591F;"><a href="#&#x8865;&#x4E00;&#x53E5; Prompt &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x591F;"></a>&#x8865;&#x4E00;&#x53E5; Prompt &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x591F;</h2>
<p>&#x6700;&#x7701;&#x4E8B;&#x7684;&#x4FEE;&#x6CD5;&#xFF0C;&#x662F;&#x7ED9; Prompt &#x52A0;&#x4E00;&#x53E5;&#xFF1A;</p>
<blockquote>
<p>&#x5FC5;&#x987B;&#x56DE;&#x7B54;&#x5F53;&#x524D;&#x57CE;&#x5E02;&#xFF0C;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x5386;&#x53F2;&#x67E5;&#x8BE2;&#x7ED3;&#x679C;&#x3002;</p>
</blockquote>
<p>&#x5B83;&#x53EF;&#x80FD;&#x6709;&#x6548;&#xFF0C;&#x4F46;&#x9009;&#x62E9;&#x5F53;&#x524D;&#x4E8B;&#x5B9E;&#x7684;&#x8D23;&#x4EFB;&#x4ECD;&#x5728;&#x6A21;&#x578B;&#x8EAB;&#x4E0A;&#x3002;&#x4EE5;&#x540E;&#x8FDE;&#x7EED;&#x67E5;&#x8BE2;&#x5317;&#x4EAC;&#x3001;&#x4E0A;&#x6D77;&#x3001;&#x6DF1;&#x5733;&#xFF0C;&#x5B83;&#x8FD8;&#x662F;&#x8981;&#x4ECE;&#x591A;&#x4EFD;&#x7ED3;&#x679C;&#x91CC;&#x731C;&#x54EA;&#x4EFD;&#x5C5E;&#x4E8E;&#x73B0;&#x5728;&#x3002;</p>
<p>&#x5168;&#x90E8;&#x4FDD;&#x7559;&#x4F1A;&#x6DF7;&#xFF0C;&#x5168;&#x90E8;&#x5220;&#x9664;&#x4F1A;&#x5FD8;&#x3002;&#x771F;&#x6B63;&#x7684;&#x95EE;&#x9898;&#x4E0D;&#x662F;&#x518D;&#x5199;&#x4E00;&#x53E5;&#x4EC0;&#x4E48;&#xFF0C;&#x800C;&#x662F; <code>write_answer</code> &#x8FD9;&#x4E00;&#x6B65;&#x7A76;&#x7ADF;&#x5E94;&#x8BE5;&#x770B;&#x89C1;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; Context Engineering &#x5904;&#x7406;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<p>Prompt Engineering &#x544A;&#x8BC9;&#x6A21;&#x578B;&#xFF1A;&#x5728;&#x4F60;&#x770B;&#x5230;&#x7684;&#x4E16;&#x754C;&#x91CC;&#x5E94;&#x8BE5;&#x600E;&#x6837;&#x505A;&#x3002;Context Engineering &#x51B3;&#x5B9A;&#x6A21;&#x578B;&#xFF1A;&#x8FD9;&#x4E00;&#x6B21;&#x7A76;&#x7ADF;&#x80FD;&#x770B;&#x5230;&#x600E;&#x6837;&#x7684;&#x4E16;&#x754C;&#x3002;</p>
<p>&#x8981;&#x6C42;&#x6A21;&#x578B;&#x201C;&#x5FFD;&#x7565;&#x5317;&#x4EAC;&#x201D;&#xFF0C;&#x662F;&#x5728;&#x73B0;&#x6709;&#x4E16;&#x754C;&#x91CC;&#x589E;&#x52A0;&#x4E00;&#x6761;&#x89C4;&#x5219;&#xFF1B;&#x4E0D;&#x628A;&#x8FC7;&#x671F;&#x7684;&#x5317;&#x4EAC;&#x5929;&#x6C14;&#x4EA4;&#x7ED9;&#x56DE;&#x7B54;&#x8282;&#x70B9;&#xFF0C;&#x5219;&#x76F4;&#x63A5;&#x6539;&#x53D8;&#x4E86;&#x5B83;&#x9762;&#x5BF9;&#x7684;&#x4E16;&#x754C;&#x3002;&#x524D;&#x8005;&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x9075;&#x5B88;&#xFF0C;&#x540E;&#x8005;&#x7531;&#x7A0B;&#x5E8F;&#x4FDD;&#x8BC1;&#x3002;</p>
<h2 id="State &#x662F;&#x73B0;&#x5B9E;&#xFF0C;Context &#x662F;&#x5F53;&#x524D;&#x89C6;&#x56FE;"><a href="#State &#x662F;&#x73B0;&#x5B9E;&#xFF0C;Context &#x662F;&#x5F53;&#x524D;&#x89C6;&#x56FE;"></a>State &#x662F;&#x73B0;&#x5B9E;&#xFF0C;Context &#x662F;&#x5F53;&#x524D;&#x89C6;&#x56FE;</h2>
<p>&#x5929;&#x6C14; Agent &#x7684; State &#x91CC;&#x53EF;&#x4EE5;&#x4FDD;&#x7559;&#x5B8C;&#x6574;&#x4EFB;&#x52A1;&#x73B0;&#x573A;&#xFF1A;</p>
<pre><code class="language-text">State
&#x251C;&#x2500;&#x2500; &#x5F53;&#x524D;&#x67E5;&#x8BE2;&#xFF1A;&#x4E0A;&#x6D77;&#x3001;&#x660E;&#x5929;
&#x251C;&#x2500;&#x2500; &#x67E5;&#x8BE2;&#x5386;&#x53F2;&#xFF1A;&#x5317;&#x4EAC;&#x3001;&#x4E0A;&#x6D77;
&#x251C;&#x2500;&#x2500; &#x5317;&#x4EAC;&#x5929;&#x6C14;&#xFF1A;&#x5C0F;&#x96E8;
&#x251C;&#x2500;&#x2500; &#x4E0A;&#x6D77;&#x5929;&#x6C14;&#xFF1A;&#x6674;
&#x251C;&#x2500;&#x2500; &#x7528;&#x6237;&#x504F;&#x597D;&#xFF1A;&#x4E0B;&#x96E8;&#x65F6;&#x63D0;&#x9192;&#x5E26;&#x4F1E;
&#x2514;&#x2500;&#x2500; &#x6D41;&#x7A0B;&#x4F4D;&#x7F6E;&#xFF1A;&#x751F;&#x6210;&#x56DE;&#x7B54;
</code></pre>
<p>&#x4F46; State &#x5B58;&#x5728;&#x5185;&#x5B58;&#x6216;&#x6570;&#x636E;&#x5E93;&#x91CC;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x81EA;&#x52A8;&#x77E5;&#x9053;&#x5B83;&#x3002;&#x6A21;&#x578B;&#x5728;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x4E2D;&#x5B9E;&#x9645;&#x6536;&#x5230;&#x7684; Prompt&#x3001;&#x5386;&#x53F2;&#x6D88;&#x606F;&#x3001;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x548C;&#x68C0;&#x7D22;&#x8D44;&#x6599;&#xFF0C;&#x624D;&#x6784;&#x6210;&#x8FD9;&#x4E00;&#x6B21;&#x7684; Context&#x3002;</p>
<p>&#x540C;&#x4E00;&#x4EFD; State&#xFF0C;&#x53EF;&#x4EE5;&#x4E3A;&#x4E0D;&#x540C; Node &#x751F;&#x6210;&#x4E0D;&#x540C;&#x89C6;&#x56FE;&#xFF1A;</p>
<pre><code class="language-text">&#x63D0;&#x53D6;&#x4FE1;&#x606F; Node&#xFF1A;&#x6700;&#x8FD1;&#x4E00;&#x8F6E;&#x5BF9;&#x8BDD; + &#x5DF2;&#x77E5;&#x65E5;&#x671F;
&#x67E5;&#x8BE2;&#x5929;&#x6C14; Node&#xFF1A;&#x5F53;&#x524D;&#x57CE;&#x5E02; + &#x5F53;&#x524D;&#x65E5;&#x671F;
&#x751F;&#x6210;&#x56DE;&#x7B54; Node&#xFF1A;&#x5F53;&#x524D;&#x67E5;&#x8BE2; + &#x672C;&#x6B21;&#x5929;&#x6C14; + &#x56DE;&#x7B54;&#x89C4;&#x5219;
</code></pre>
<p>&#x67E5;&#x8BE2;&#x5386;&#x53F2;&#x6CA1;&#x6709;&#x88AB;&#x5220;&#x9664;&#xFF0C;&#x4ECD;&#x53EF;&#x7528;&#x4E8E;&#x5BA1;&#x8BA1;&#xFF1B;&#x5317;&#x4EAC;&#x5929;&#x6C14;&#x4E5F;&#x53EF;&#x4EE5;&#x7559;&#x5728; State &#x91CC;&#xFF0C;&#x7B49;&#x7528;&#x6237;&#x518D;&#x6B21;&#x67E5;&#x8BE2;&#x5317;&#x4EAC;&#x65F6;&#x53D6;&#x56DE;&#x3002;&#x5B83;&#x4EEC;&#x53EA;&#x662F;&#x4E0D;&#x5FC5;&#x8FDB;&#x5165;&#x8FD9;&#x6B21; <code>write_answer</code> &#x7684; Context&#x3002;</p>
<p>&#x4FEE;&#x590D;&#x4EE5;&#x540E;&#xFF0C;<code>write_answer</code> &#x4E0D;&#x518D;&#x63A5;&#x6536;&#x201C;&#x5168;&#x90E8;&#x5BF9;&#x8BDD; + &#x5386;&#x6B21;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x201D;&#xFF0C;&#x800C;&#x53EA;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x67E5;&#x8BE2;&#xFF1A;&#x4E0A;&#x6D77;&#x3001;&#x660E;&#x5929;
&#x672C;&#x6B21;&#x5929;&#x6C14;&#xFF1A;&#x6674;&#xFF0C;&#x964D;&#x96E8;&#x6982;&#x7387; 10%
&#x7528;&#x6237;&#x504F;&#x597D;&#xFF1A;&#x4E0B;&#x96E8;&#x65F6;&#x63D0;&#x9192;&#x5E26;&#x4F1E;
&#x56DE;&#x7B54;&#x89C4;&#x5219;&#xFF1A;&#x6781;&#x7AEF;&#x5929;&#x6C14;&#x5FC5;&#x987B;&#x63D0;&#x9192;&#x98CE;&#x9669;
</code></pre>
<p>&#x8FD9;&#x65F6;&#x5317;&#x4EAC;&#x4ECD;&#x5728;&#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x5374;&#x4E0D;&#x518D;&#x662F;&#x5F53;&#x524D;&#x56DE;&#x7B54;&#x7684;&#x5019;&#x9009;&#x9879;&#x3002;&#x4FEE;&#x590D;&#x6CA1;&#x6709;&#x8BA9;&#x6A21;&#x578B;&#x53D8;&#x5F97;&#x66F4;&#x806A;&#x660E;&#xFF0C;&#x53EA;&#x662F;&#x7A0B;&#x5E8F;&#x4E0D;&#x518D;&#x8981;&#x6C42;&#x5B83;&#x4ECE;&#x65B0;&#x65E7;&#x4E24;&#x4EFD;&#x5929;&#x6C14;&#x4E2D;&#x81EA;&#x884C;&#x8FA8;&#x8BA4;&#x73B0;&#x5728;&#x3002;</p>
<p>&#x628A;&#x51E0;&#x4E2A;&#x6982;&#x5FF5;&#x653E;&#x8FDB;&#x4E00;&#x6B21;&#x8FD0;&#x884C;&#xFF0C;&#x4F1A;&#x66F4;&#x5BB9;&#x6613;&#x5206;&#x6E05;&#xFF1A;</p>
<pre><code class="language-text">State / Memory
      &#x2502;  &#x7B5B;&#x9009;&#x3001;&#x538B;&#x7F29;&#x3001;&#x6309;&#x9700;&#x53D6;&#x56DE;
      &#x25BC;
   Context &#x2500;&#x2500;&#x88C5;&#x5165; Context Window&#x2500;&#x2500;&#x25B6; &#x6A21;&#x578B;&#x8C03;&#x7528;
      &#x25B2;                                  &#x2502;
      &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500; &#x7ED3;&#x679C;&#x5199;&#x56DE; State &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<p>State &#x4FDD;&#x5B58;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x73B0;&#x573A;&#xFF0C;Memory &#x7559;&#x4E0B;&#x4EE5;&#x540E;&#x53EF;&#x80FD;&#x590D;&#x7528;&#x7684;&#x4FE1;&#x606F;&#xFF1B;&#x53EA;&#x6709;&#x88AB;&#x53D6;&#x56DE;&#x5E76;&#x653E;&#x8FDB;&#x672C;&#x8F6E;&#x8F93;&#x5165;&#x7684;&#x90E8;&#x5206;&#xFF0C;&#x624D;&#x6210;&#x4E3A; Context&#x3002;Context Window &#x53EA;&#x662F;&#x8FD9;&#x6B21;&#x6700;&#x591A;&#x80FD;&#x88C5;&#x591A;&#x5C11;&#xFF0C;&#x4E0D;&#x4F1A;&#x66FF;&#x7CFB;&#x7EDF;&#x51B3;&#x5B9A;&#x5E94;&#x8BE5;&#x88C5;&#x4EC0;&#x4E48;&#x3002;&#x5373;&#x4F7F;&#x7A97;&#x53E3;&#x8DB3;&#x591F;&#x653E;&#x4E0B;&#x5317;&#x4EAC;&#x548C;&#x4E0A;&#x6D77;&#x4E24;&#x4EFD;&#x5929;&#x6C14;&#xFF0C;&#x5BB9;&#x91CF;&#x53D8;&#x5927;&#x4E5F;&#x4E0D;&#x4F1A;&#x81EA;&#x52A8;&#x5224;&#x65AD;&#x54EA;&#x4EFD;&#x5DF2;&#x7ECF;&#x8FC7;&#x671F;&#x3002;</p>
<p>&#x5185;&#x5BB9;&#x592A;&#x591A;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x7B5B;&#x6389;&#x8FC7;&#x671F;&#x7ED3;&#x679C;&#xFF0C;&#x628A;&#x957F;&#x5386;&#x53F2;&#x538B;&#x6210;&#x6458;&#x8981;&#xFF0C;&#x6216;&#x8005;&#x5C06;&#x7F51;&#x9875;&#x3001;&#x5B8C;&#x6574;&#x5DE5;&#x5177;&#x56DE;&#x5305;&#x548C;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#x7559;&#x5728;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x9700;&#x8981;&#x65F6;&#x518D;&#x8BFB;&#x53D6;&#x3002;&#x6682;&#x65F6;&#x4E0D;&#x4EA4;&#x7ED9;&#x6A21;&#x578B;&#xFF0C;&#x4E0D;&#x7B49;&#x4E8E;&#x6C38;&#x4E45;&#x5220;&#x9664;&#x3002;</p>
<h2 id="&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x6D3B;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x4E16;&#x754C;&#x91CC;"><a href="#&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x6D3B;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x4E16;&#x754C;&#x91CC;"></a>&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x6D3B;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x4E16;&#x754C;&#x91CC;</h2>
<p>&#x8FD9;&#x548C; Linux Namespace &#x6709;&#x4E00;&#x70B9;&#x76F8;&#x50CF;&#x3002;&#x5BBF;&#x4E3B;&#x673A;&#x4E0A;&#x6709;&#x5B8C;&#x6574;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF0C;&#x6C99;&#x7BB1;&#x91CC;&#x7684;&#x8FDB;&#x7A0B;&#x53EA;&#x770B;&#x5230;&#x6620;&#x5C04;&#x7ED9;&#x81EA;&#x5DF1;&#x7684;&#x90E8;&#x5206;&#x3002;&#x5BF9;&#x8FDB;&#x7A0B;&#x6765;&#x8BF4;&#xFF0C;&#x89C6;&#x56FE;&#x4E4B;&#x5916;&#x7684;&#x76EE;&#x5F55;&#x7B49;&#x4E8E;&#x4E0D;&#x5B58;&#x5728;&#xFF1B;&#x5BF9;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x6765;&#x8BF4;&#xFF0C;&#x6CA1;&#x6709;&#x8FDB;&#x5165; Context &#x7684; State &#x4E5F;&#x65E0;&#x6CD5;&#x53C2;&#x4E0E;&#x5224;&#x65AD;&#x3002;</p>
<p>&#x4E4B;&#x524D;&#x8FD9;&#x7BC7;(&#x300A;&#x4ECE; AI Agent &#x7684; BubbleWrap &#x6C99;&#x7BB1;&#xFF0C;&#x770B;&#x201C;&#x4E16;&#x754C;&#x4E0E;&#x5730;&#x56FE;&#x201D;&#x7684;&#x9694;&#x79BB;&#x300B;)&#x8BA8;&#x8BBA;&#x8FC7;&#xFF1A;&#x7CFB;&#x7EDF;&#x4E0D;&#x4EC5;&#x80FD;&#x9650;&#x5236;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#x505A;&#x4EC0;&#x4E48;&#xFF0C;&#x8FD8;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x770B;&#x89C1;&#x4EC0;&#x4E48;&#x3002;Context Engineering &#x5728;&#x6A21;&#x578B;&#x4FA7;&#x9047;&#x5230;&#x4E86;&#x76F8;&#x4F3C;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5F53;&#x7136;&#xFF0C;&#x4E24;&#x8005;&#x5E76;&#x4E0D;&#x5B8C;&#x5168;&#x4E00;&#x6837;&#x3002;Namespace &#x662F;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x5F3A;&#x5236;&#x7684;&#x8D44;&#x6E90;&#x9694;&#x79BB;&#xFF1B;Context &#x4ECD;&#x662F;&#x4E00;&#x4E32;&#x4EA4;&#x7ED9;&#x6982;&#x7387;&#x6A21;&#x578B;&#x7684; token&#xFF0C;&#x653E;&#x8FDB;&#x53BB;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x5FC5;&#x7136;&#x7528;&#x5BF9;&#x3002;&#x4F46;&#x6709;&#x4E00;&#x70B9;&#x662F;&#x786E;&#x5B9A;&#x7684;&#xFF1A;&#x6CA1;&#x6709;&#x8FDB;&#x5165; Context &#x7684;&#x65E7;&#x5929;&#x6C14;&#xFF0C;&#x4E0D;&#x4F1A;&#x88AB;&#x8BEF;&#x8BA4;&#x6210;&#x5F53;&#x524D;&#x7B54;&#x6848;&#x3002;</p>
<p>&#x56DE;&#x5934;&#x770B;&#x5F00;&#x5934;&#x7684;&#x9519;&#x8BEF;&#xFF0C;&#x7A0B;&#x5E8F;&#x660E;&#x660E;&#x62E5;&#x6709;&#x6B63;&#x786E;&#x7684; State&#xFF0C;&#x5374;&#x5728;&#x751F;&#x6210;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x65F6;&#xFF0C;&#x628A;&#x5317;&#x4EAC;&#x548C;&#x4E0A;&#x6D77;&#x4E24;&#x4EFD;&#x5929;&#x6C14;&#x90FD;&#x4EA4;&#x7ED9;&#x4E86;&#x6A21;&#x578B;&#x3002;Context Engineering &#x6240;&#x505A;&#x7684;&#xFF0C;&#x5C31;&#x662F;&#x5728;&#x6BCF;&#x6B21;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x4E4B;&#x524D;&#x91CD;&#x65B0;&#x56DE;&#x7B54;&#xFF1A;</p>
<blockquote>
<p>&#x8FD9;&#x4E00;&#x523B;&#xFF0C;&#x4EC0;&#x4E48;&#x5E94;&#x8BE5;&#x6210;&#x4E3A;&#x5B83;&#x773C;&#x91CC;&#x7684;&#x73B0;&#x5B9E;&#xFF1F;</p>
</blockquote>
`,E=[{level:1,title:"Agent 为什么会“记错”？问题可能不在记忆，而在它看见的世界",children:[{level:2,title:"错误发生在最后一步",children:[]},{level:2,title:"模型没有记错，是程序又把北京发给了它",children:[]},{level:2,title:"补一句 Prompt 为什么不够",children:[]},{level:2,title:"State 是现实，Context 是当前视图",children:[]},{level:2,title:"同一个模型，可以活在不同的世界里",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
