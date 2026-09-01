const x={},E=`<h1 id="LangGraph &#x5230;&#x5E95;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;&#x7528;&#x4E00;&#x4E2A;&#x67E5;&#x5929;&#x6C14;&#x7684;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x770B;&#x61C2;"><a href="#LangGraph &#x5230;&#x5E95;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;&#x7528;&#x4E00;&#x4E2A;&#x67E5;&#x5929;&#x6C14;&#x7684;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x770B;&#x61C2;"></a>LangGraph &#x5230;&#x5E95;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;&#x7528;&#x4E00;&#x4E2A;&#x67E5;&#x5929;&#x6C14;&#x7684;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x770B;&#x61C2;</h1>
<p>&#x4E0A;&#x4E00;&#x7BC7;<a href="./%E4%BB%80%E4%B9%88%E6%98%AF%20ReAct%EF%BC%9F%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%20AI%20Agent%20%E5%8E%9F%E7%90%86.md">&#x300A;&#x4EC0;&#x4E48;&#x662F; ReAct&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI Agent &#x539F;&#x7406;&#x300B;</a>&#x91CC;&#xFF0C;&#x6211;&#x4EEC;&#x505A;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x4F1A;&#x67E5;&#x5929;&#x6C14;&#x7684; Agent&#x3002;</p>
<p>&#x6A21;&#x578B;&#x53D1;&#x73B0;&#x81EA;&#x5DF1;&#x4E0D;&#x77E5;&#x9053;&#x5B9E;&#x65F6;&#x5929;&#x6C14;&#xFF0C;&#x5C31;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF1B;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#xFF0C;&#x6A21;&#x578B;&#x518D;&#x56DE;&#x7B54;&#x3002;&#x4EFB;&#x52A1;&#x6CA1;&#x7ED3;&#x675F;&#xFF0C;&#x5C31;&#x7EE7;&#x7EED;&#x5FAA;&#x73AF;&#x3002;</p>
<p>&#x8FD9;&#x5DF2;&#x7ECF;&#x662F; Agent &#x4E86;&#x3002;LangGraph &#x53C8;&#x591A;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>&#x8FD8;&#x662F;&#x4ECE;&#x67E5;&#x5929;&#x6C14;&#x5F00;&#x59CB;&#x3002;</p>
<h2 id="&#x4E00;&#x53E5;&#x8BDD;&#x91CC;&#x4EC0;&#x4E48;&#x90FD;&#x6709;&#xFF0C;&#x4E8B;&#x60C5;&#x5F88;&#x7B80;&#x5355;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x91CC;&#x4EC0;&#x4E48;&#x90FD;&#x6709;&#xFF0C;&#x4E8B;&#x60C5;&#x5F88;&#x7B80;&#x5355;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x91CC;&#x4EC0;&#x4E48;&#x90FD;&#x6709;&#xFF0C;&#x4E8B;&#x60C5;&#x5F88;&#x7B80;&#x5355;</h2>
<p>&#x7528;&#x6237;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x5317;&#x4EAC;&#x660E;&#x5929;&#x8981;&#x4E0D;&#x8981;&#x5E26;&#x4F1E;&#xFF1F;</p>
</blockquote>
<p>&#x57CE;&#x5E02;&#x3001;&#x65E5;&#x671F;&#x548C;&#x95EE;&#x9898;&#x90FD;&#x5728;&#x4E00;&#x53E5;&#x8BDD;&#x91CC;&#x3002;Agent &#x67E5;&#x5B8C;&#x5929;&#x6C14;&#xFF0C;&#x76F4;&#x63A5;&#x56DE;&#x7B54;&#x3002;</p>
<p>&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x662F;&#x4E00;&#x6761;&#x76F4;&#x7EBF;&#xFF1A;</p>
<pre><code class="language-text">&#x7406;&#x89E3;&#x95EE;&#x9898; &#x2192; &#x67E5;&#x8BE2;&#x5929;&#x6C14; &#x2192; &#x56DE;&#x7B54;
</code></pre>
<p>&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x7528;&#x666E;&#x901A;&#x51FD;&#x6570;&#x5C31;&#x591F;&#x4E86;&#x3002;&#x7279;&#x610F;&#x5957;&#x4E00;&#x5C42;&#x56FE;&#xFF0C;&#x4EE3;&#x7801;&#x53EA;&#x4F1A;&#x66F4;&#x7ED5;&#x3002;</p>
<h2 id="&#x7528;&#x6237;&#x5C11;&#x8BF4;&#x4E86;&#x4E00;&#x4E2A;&#x57CE;&#x5E02;"><a href="#&#x7528;&#x6237;&#x5C11;&#x8BF4;&#x4E86;&#x4E00;&#x4E2A;&#x57CE;&#x5E02;"></a>&#x7528;&#x6237;&#x5C11;&#x8BF4;&#x4E86;&#x4E00;&#x4E2A;&#x57CE;&#x5E02;</h2>
<p>&#x73B0;&#x5728;&#x7528;&#x6237;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x660E;&#x5929;&#x8981;&#x4E0D;&#x8981;&#x5E26;&#x4F1E;&#xFF1F;</p>
</blockquote>
<p>Agent &#x53D1;&#x73B0;&#x7F3A;&#x5C11;&#x57CE;&#x5E02;&#xFF0C;&#x53EA;&#x597D;&#x8FFD;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x4F60;&#x60F3;&#x67E5;&#x54EA;&#x4E2A;&#x57CE;&#x5E02;&#xFF1F;</p>
</blockquote>
<p>&#x7528;&#x6237;&#x56DE;&#x7B54;&#xFF1A;</p>
<blockquote>
<p>&#x5317;&#x4EAC;&#x3002;</p>
</blockquote>
<p>&#x8FD9;&#x65F6;&#x624D;&#x6709;&#x771F;&#x6B63;&#x7684;&#x9EBB;&#x70E6;&#x3002;</p>
<p>&#x201C;&#x660E;&#x5929;&#x201D;&#x5728;&#x7B2C;&#x4E00;&#x8F6E;&#xFF0C;&#x201C;&#x5317;&#x4EAC;&#x201D;&#x5728;&#x7B2C;&#x4E8C;&#x8F6E;&#x3002;&#x5982;&#x679C;&#x7A0B;&#x5E8F;&#x53EA;&#x770B;&#x5F53;&#x524D;&#x8FD9;&#x53E5;&#x8BDD;&#xFF0C;&#x5B83;&#x6C38;&#x8FDC;&#x51D1;&#x4E0D;&#x9F50;&#x67E5;&#x8BE2;&#x5929;&#x6C14;&#x6240;&#x9700;&#x7684;&#x4FE1;&#x606F;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x5B83;&#x8981;&#x7559;&#x4E0B;&#x4E00;&#x5F20;&#x4EFB;&#x52A1;&#x4FBF;&#x7B7E;&#xFF1A;&#x65E5;&#x671F;&#x662F;&#x660E;&#x5929;&#xFF0C;&#x57CE;&#x5E02;&#x8FD8;&#x4E0D;&#x77E5;&#x9053;&#x3002;&#x7528;&#x6237;&#x8865;&#x5145;&#x5317;&#x4EAC;&#x4EE5;&#x540E;&#xFF0C;&#x53EA;&#x9700;&#x628A;&#x4FBF;&#x7B7E;&#x4E0A;&#x7684;&#x57CE;&#x5E02;&#x8865;&#x9F50;&#x3002;</p>
<p>&#x8FD9;&#x5F20;&#x4FBF;&#x7B7E;&#x5C31;&#x662F; State&#x3002;</p>
<p>State &#x4E0D;&#x662F;&#x6A21;&#x578B;&#x7684;&#x601D;&#x8003;&#xFF0C;&#x4E5F;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x5B8C;&#x6574;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#x3002;&#x5B83;&#x8BB0;&#x5F55;&#x7684;&#x662F;&#xFF1A;&#x8FD9;&#x4EF6;&#x4E8B;&#x505A;&#x5230;&#x73B0;&#x5728;&#xFF0C;&#x54EA;&#x4E9B;&#x4FE1;&#x606F;&#x5DF2;&#x7ECF;&#x786E;&#x5B9A;&#x3002;</p>
<h2 id="&#x8BB0;&#x4F4F;&#x4FE1;&#x606F;&#x8FD8;&#x4E0D;&#x591F;"><a href="#&#x8BB0;&#x4F4F;&#x4FE1;&#x606F;&#x8FD8;&#x4E0D;&#x591F;"></a>&#x8BB0;&#x4F4F;&#x4FE1;&#x606F;&#x8FD8;&#x4E0D;&#x591F;</h2>
<p>&#x5047;&#x8BBE; Agent &#x8BC6;&#x522B;&#x51FA;&#x5317;&#x4EAC;&#x540E;&#xFF0C;&#x9700;&#x8981;&#x5148;&#x8BA9;&#x7528;&#x6237;&#x786E;&#x8BA4;&#x5B9A;&#x4F4D;&#xFF1A;</p>
<blockquote>
<p>&#x5C06;&#x67E5;&#x8BE2;&#x5317;&#x4EAC;&#x7684;&#x5929;&#x6C14;&#xFF0C;&#x662F;&#x5426;&#x7EE7;&#x7EED;&#xFF1F;</p>
</blockquote>
<p>&#x7528;&#x6237;&#x53EF;&#x80FD;&#x5341;&#x5206;&#x949F;&#x4EE5;&#x540E;&#x624D;&#x56DE;&#x590D;&#x201C;&#x7EE7;&#x7EED;&#x201D;&#x3002;&#x539F;&#x6765;&#x7684;&#x7A0B;&#x5E8F;&#x65E9;&#x5C31;&#x7ED3;&#x675F;&#x4E86;&#x3002;&#x518D;&#x6B21;&#x6536;&#x5230;&#x6D88;&#x606F;&#x65F6;&#xFF0C;&#x7CFB;&#x7EDF;&#x9664;&#x4E86;&#x8981;&#x627E;&#x56DE;&#x57CE;&#x5E02;&#x548C;&#x65E5;&#x671F;&#xFF0C;&#x8FD8;&#x5F97;&#x77E5;&#x9053;&#x4E0A;&#x6B21;&#x505C;&#x5728;&#x54EA;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x4EFB;&#x52A1;&#x4FBF;&#x7B7E;&#x4E0A;&#x53C8;&#x591A;&#x4E86;&#x4E00;&#x884C;&#xFF1A;</p>
<pre><code class="language-text">&#x57CE;&#x5E02;&#xFF1A;&#x5317;&#x4EAC;
&#x65E5;&#x671F;&#xFF1A;&#x660E;&#x5929;
&#x4E0B;&#x4E00;&#x6B65;&#xFF1A;&#x67E5;&#x8BE2;&#x5929;&#x6C14;
</code></pre>
<p>&#x73B0;&#x5728;&#x5B83;&#x65E2;&#x4FDD;&#x5B58;&#x4E86;&#x4EFB;&#x52A1;&#x6570;&#x636E;&#xFF0C;&#x4E5F;&#x4FDD;&#x5B58;&#x4E86;&#x6062;&#x590D;&#x4F4D;&#x7F6E;&#x3002;&#x628A;&#x8FD9;&#x4EFD;&#x4FBF;&#x7B7E;&#x5B58;&#x8FDB;&#x6570;&#x636E;&#x5E93;&#xFF0C;&#x670D;&#x52A1;&#x91CD;&#x542F;&#x540E;&#xFF0C;&#x4EFB;&#x52A1;&#x8FD8;&#x80FD;&#x4ECE;&#x201C;&#x67E5;&#x8BE2;&#x5929;&#x6C14;&#x201D;&#x63A5;&#x7740;&#x8D70;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; checkpoint &#x6700;&#x6734;&#x7D20;&#x7684;&#x6837;&#x5B50;&#x3002;</p>
<h2 id="&#x518D;&#x52A0;&#x4E24;&#x4E2A;&#x8981;&#x6C42;&#xFF0C;&#x76F4;&#x7EBF;&#x5F00;&#x59CB;&#x5206;&#x53C9;"><a href="#&#x518D;&#x52A0;&#x4E24;&#x4E2A;&#x8981;&#x6C42;&#xFF0C;&#x76F4;&#x7EBF;&#x5F00;&#x59CB;&#x5206;&#x53C9;"></a>&#x518D;&#x52A0;&#x4E24;&#x4E2A;&#x8981;&#x6C42;&#xFF0C;&#x76F4;&#x7EBF;&#x5F00;&#x59CB;&#x5206;&#x53C9;</h2>
<p>&#x4EA7;&#x54C1;&#x7ECF;&#x7406;&#x53C8;&#x52A0;&#x4E86;&#x4E24;&#x4E2A;&#x8981;&#x6C42;&#xFF1A;&#x5929;&#x6C14;&#x63A5;&#x53E3;&#x5931;&#x8D25;&#x53EF;&#x4EE5;&#x91CD;&#x8BD5;&#xFF1B;&#x6D89;&#x53CA;&#x6781;&#x7AEF;&#x5929;&#x6C14;&#x65F6;&#xFF0C;&#x56DE;&#x7B54;&#x8981;&#x5148;&#x7ECF;&#x8FC7;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x3002;</p>
<p>&#x6D41;&#x7A0B;&#x53D8;&#x6210;&#x4E86;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">&#x6536;&#x5230;&#x95EE;&#x9898;
   &#x2502;
   &#x251C;&#x2500;&#x2500; &#x7F3A;&#x57CE;&#x5E02; &#x2192; &#x8FFD;&#x95EE; &#x2192; &#x6682;&#x505C;
   &#x251C;&#x2500;&#x2500; &#x7F3A;&#x65E5;&#x671F; &#x2192; &#x8FFD;&#x95EE; &#x2192; &#x6682;&#x505C;
   &#x2502;
   &#x2514;&#x2500;&#x2500; &#x4FE1;&#x606F;&#x9F50;&#x5168; &#x2192; &#x67E5;&#x8BE2;&#x5929;&#x6C14;
                    &#x2502;
                    &#x251C;&#x2500;&#x2500; &#x5931;&#x8D25; &#x2192; &#x91CD;&#x8BD5;
                    &#x2502;
                    &#x2514;&#x2500;&#x2500; &#x6210;&#x529F; &#x2192; &#x751F;&#x6210;&#x56DE;&#x7B54;
                                  &#x2502;
                                  &#x251C;&#x2500;&#x2500; &#x6781;&#x7AEF;&#x5929;&#x6C14; &#x2192; &#x4EBA;&#x5DE5;&#x786E;&#x8BA4; &#x2192; &#x53D1;&#x5E03;
                                  &#x2514;&#x2500;&#x2500; &#x666E;&#x901A;&#x5929;&#x6C14; &#x2192; &#x53D1;&#x5E03;
</code></pre>
<p>&#x8FD9;&#x65F6;&#x518D;&#x7528;&#x4E00;&#x4E32; <code>if</code> &#x4E5F;&#x80FD;&#x5199;&#x3002;&#x53EA;&#x662F;&#x91CD;&#x8BD5;&#x4F1A;&#x85CF;&#x5728;&#x67E5;&#x8BE2;&#x51FD;&#x6570;&#x91CC;&#xFF0C;&#x5224;&#x65AD;&#x4F1A;&#x6563;&#x5728;&#x63D0;&#x793A;&#x8BCD;&#x91CC;&#xFF0C;&#x6682;&#x505C;&#x4F4D;&#x7F6E;&#x53C8;&#x5355;&#x72EC;&#x653E;&#x8FDB;&#x6570;&#x636E;&#x5E93;&#x3002;&#x60F3;&#x77E5;&#x9053;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x63A5;&#x4E0B;&#x6765;&#x4F1A;&#x53BB;&#x54EA;&#xFF0C;&#x5F97;&#x7FFB;&#x597D;&#x51E0;&#x4E2A;&#x6587;&#x4EF6;&#x3002;</p>
<p>&#x7A0B;&#x5E8F;&#x65E9;&#x5DF2;&#x662F;&#x4E00;&#x5F20;&#x56FE;&#xFF0C;&#x53EA;&#x662F;&#x8FD9;&#x5F20;&#x56FE;&#x6563;&#x843D;&#x5728;&#x4EE3;&#x7801;&#x91CC;&#x3002;</p>
<h2 id="&#x628A;&#x56FE;&#x6446;&#x5230;&#x660E;&#x9762;&#x4E0A;"><a href="#&#x628A;&#x56FE;&#x6446;&#x5230;&#x660E;&#x9762;&#x4E0A;"></a>&#x628A;&#x56FE;&#x6446;&#x5230;&#x660E;&#x9762;&#x4E0A;</h2>
<p>LangGraph &#x628A;&#x6BCF;&#x4E2A;&#x6B65;&#x9AA4;&#x5355;&#x72EC;&#x62FF;&#x51FA;&#x6765;&#xFF0C;&#x518D;&#x628A;&#x6B65;&#x9AA4;&#x4E4B;&#x95F4;&#x7684;&#x53BB;&#x5411;&#x5199;&#x6E05;&#x695A;&#x3002;</p>
<p>&#x201C;&#x63D0;&#x53D6;&#x4FE1;&#x606F;&#x201D;&#x201C;&#x8FFD;&#x95EE;&#x57CE;&#x5E02;&#x201D;&#x201C;&#x67E5;&#x8BE2;&#x5929;&#x6C14;&#x201D;&#x201C;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x201D;&#x90FD;&#x662F; Node&#x3002;Node &#x53EF;&#x4EE5;&#x8C03;&#x7528; LLM&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x53EA;&#x662F;&#x666E;&#x901A;&#x51FD;&#x6570;&#xFF0C;&#x751A;&#x81F3;&#x53EF;&#x4EE5;&#x7531;&#x4EBA;&#x5B8C;&#x6210;&#x3002;</p>
<p>Node &#x4E4B;&#x95F4;&#x7684;&#x8FDE;&#x7EBF;&#x662F; Edge&#x3002;&#x201C;&#x67E5;&#x8BE2;&#x6210;&#x529F;&#x540E;&#x751F;&#x6210;&#x56DE;&#x7B54;&#x201D;&#x662F;&#x4E00;&#x6761;&#x56FA;&#x5B9A;&#x7684;&#x8FB9;&#xFF1B;&#x201C;&#x4FE1;&#x606F;&#x63D0;&#x53D6;&#x540E;&#xFF0C;&#x7F3A;&#x57CE;&#x5E02;&#x5C31;&#x8FFD;&#x95EE;&#xFF0C;&#x5426;&#x5219;&#x53BB;&#x67E5;&#x5929;&#x6C14;&#x201D;&#x8981;&#x6839;&#x636E; State &#x5224;&#x65AD;&#xFF0C;&#x6240;&#x4EE5;&#x662F;&#x4E00;&#x6761;&#x6761;&#x4EF6;&#x8FB9;&#x3002;</p>
<p>&#x5230;&#x8FD9;&#x91CC;&#xFF0C;&#x4E09;&#x4E2A;&#x6700;&#x5E38;&#x89C1;&#x7684;&#x8BCD;&#x90FD;&#x6709;&#x4E86;&#x6765;&#x5904;&#xFF1A;</p>
<pre><code class="language-text">State&#xFF1A;&#x4EFB;&#x52A1;&#x5DF2;&#x7ECF;&#x77E5;&#x9053;&#x4EC0;&#x4E48;&#xFF0C;&#x4EE5;&#x53CA;&#x505C;&#x5728;&#x54EA;&#x91CC;
Node&#xFF1A;&#x5F53;&#x524D;&#x8981;&#x505A;&#x54EA;&#x4E00;&#x6B65;
Edge&#xFF1A;&#x505A;&#x5B8C;&#x4EE5;&#x540E;&#x53EF;&#x4EE5;&#x53BB;&#x54EA;&#x91CC;
</code></pre>
<p>LangGraph &#x6CBF;&#x7740;&#x8FD9;&#x4E9B;&#x8FB9;&#x8FD0;&#x884C; Node&#x3002;&#x6BCF;&#x4E00;&#x6B65;&#x7ED3;&#x675F;&#x540E;&#x66F4;&#x65B0; State&#xFF1B;&#x9047;&#x5230;&#x6682;&#x505C;&#x5C31;&#x4FDD;&#x5B58;&#x73B0;&#x573A;&#xFF0C;&#x6536;&#x5230;&#x65B0;&#x8F93;&#x5165;&#x540E;&#x4ECE;&#x4FDD;&#x5B58;&#x7684;&#x4F4D;&#x7F6E;&#x6062;&#x590D;&#x3002;</p>
<p>&#x5B83;&#x6CA1;&#x6709;&#x8BA9;&#x6A21;&#x578B;&#x53D8;&#x806A;&#x660E;&#x3002;&#x5B83;&#x53EA;&#x662F;&#x8BA9;&#x4EFB;&#x52A1;&#x7684;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E0D;&#x518D;&#x9760;&#x4E00;&#x5806;&#x9690;&#x542B;&#x7684; <code>if</code> &#x7EF4;&#x6301;&#x3002;</p>
<h2 id="&#x5B83;&#x548C; ReAct &#x7684;&#x5206;&#x754C;&#xFF1A;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x4E0E;&#x81EA;&#x7531;"><a href="#&#x5B83;&#x548C; ReAct &#x7684;&#x5206;&#x754C;&#xFF1A;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x4E0E;&#x81EA;&#x7531;"></a>&#x5B83;&#x548C; ReAct &#x7684;&#x5206;&#x754C;&#xFF1A;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x4E0E;&#x81EA;&#x7531;</h2>
<p>&#x5E38;&#x89C1;&#x7684;&#x8BF4;&#x6CD5;&#x662F;&#xFF1A;ReAct &#x7528;&#x6765;&#x63A2;&#x7D22;&#xFF0C;LangGraph &#x7528;&#x6765;&#x8DD1;&#x56FA;&#x5B9A; workflow&#x3002;&#x8FD9;&#x4E2A;&#x8BF4;&#x6CD5;&#x4E0D;&#x591F;&#x51C6;&#x786E;&#x3002;</p>
<p>ReAct &#x81EA;&#x5DF1;&#x4E5F;&#x6709;&#x4E00;&#x5C42;&#x56FA;&#x5B9A;&#x6D41;&#x7A0B;&#xFF1A;&#x601D;&#x8003;&#x3001;&#x884C;&#x52A8;&#x3001;&#x89C2;&#x5BDF;&#xFF0C;&#x518D;&#x56DE;&#x5230;&#x601D;&#x8003;&#x3002;&#x5B83;&#x4E0D;&#x77E5;&#x9053;&#x7684;&#x662F;&#x5177;&#x4F53;&#x884C;&#x52A8;&#x5E8F;&#x5217;&#x3002;&#x6A21;&#x578B;&#x8FD9;&#x6B21;&#x8BE5;&#x641C;&#x7F51;&#x9875;&#x3001;&#x8BFB;&#x6587;&#x4EF6;&#xFF0C;&#x8FD8;&#x662F;&#x76F4;&#x63A5;&#x56DE;&#x7B54;&#xFF1B;&#x8981;&#x8DD1;&#x51E0;&#x8F6E;&#xFF1B;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BA4;&#x4E3A;&#x8D44;&#x6599;&#x591F;&#x4E86;&#xFF0C;&#x90FD;&#x662F;&#x8FD0;&#x884C;&#x65F6;&#x51B3;&#x5B9A;&#x7684;&#x3002;</p>
<p>LangGraph &#x9884;&#x5148;&#x77E5;&#x9053;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x4EF6;&#x4E8B;&#xFF1A;&#x8FD9;&#x4E2A;&#x4EFB;&#x52A1;&#x6709;&#x54EA;&#x4E9B;&#x5408;&#x6CD5;&#x6B65;&#x9AA4;&#xFF0C;&#x6B65;&#x9AA4;&#x4E4B;&#x95F4;&#x5141;&#x8BB8;&#x600E;&#x4E48;&#x8DF3;&#x3002;&#x5B9E;&#x9645;&#x4F1A;&#x8D70;&#x54EA;&#x6761;&#x8DEF;&#x5F84;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x672A;&#x77E5;&#x3002;</p>
<pre><code class="language-text">ReAct
&#x56FA;&#x5B9A;&#xFF1A;&#x601D;&#x8003; &#x2192; &#x884C;&#x52A8; &#x2192; &#x89C2;&#x5BDF; &#x7684;&#x5FAA;&#x73AF;
&#x672A;&#x77E5;&#xFF1A;&#x672C;&#x8F6E;&#x5177;&#x4F53;&#x505A;&#x4EC0;&#x4E48;&#x3001;&#x505A;&#x591A;&#x5C11;&#x8F6E;

LangGraph
&#x56FA;&#x5B9A;&#xFF1A;&#x6709;&#x54EA;&#x4E9B; Node&#x3001;&#x54EA;&#x4E9B; Edge &#x53EF;&#x4EE5;&#x8D70;
&#x672A;&#x77E5;&#xFF1A;&#x8FD9;&#x6B21;&#x8FD0;&#x884C;&#x5B9E;&#x9645;&#x4F1A;&#x8D70;&#x54EA;&#x4E00;&#x6761;&#x8DEF;&#x5F84;
</code></pre>
<p>&#x62FF;&#x201C;&#x7814;&#x7A76;&#x4E00;&#x4E2A;&#x7ADE;&#x54C1;&#x201D;&#x6765;&#x8BF4;&#xFF0C;&#x5916;&#x5C42;&#x56FE;&#x53EF;&#x4EE5;&#x89C4;&#x5B9A;&#xFF1A;&#x5148;&#x6F84;&#x6E05;&#x8303;&#x56F4;&#xFF0C;&#x518D;&#x7814;&#x7A76;&#xFF0C;&#x63A5;&#x7740;&#x6574;&#x7406;&#xFF0C;&#x6700;&#x540E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6838;&#x3002;&#x8FDB;&#x5165;&#x201C;&#x7814;&#x7A76;&#x201D;&#x8FD9;&#x4E2A; Node &#x540E;&#xFF0C;&#x91CC;&#x9762;&#x5B8C;&#x5168;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A; ReAct Agent&#xFF1A;&#x5B83;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x641C;&#x51E0;&#x6B21;&#x3001;&#x8BFB;&#x54EA;&#x4E9B;&#x8D44;&#x6599;&#x3001;&#x662F;&#x5426;&#x8FD8;&#x8981;&#x8865;&#x641C;&#x3002;</p>
<pre><code class="language-text">&#x6F84;&#x6E05;&#x8303;&#x56F4; &#x2192; &#x7814;&#x7A76;&#xFF08;ReAct &#x81EA;&#x4E3B;&#x63A2;&#x7D22;&#xFF09;&#x2192; &#x6574;&#x7406; &#x2192; &#x4EBA;&#x5DE5;&#x5BA1;&#x6838;
</code></pre>
<p>&#x8FD9;&#x5F20;&#x56FE;&#x4E0D;&#x66FF; Agent &#x51B3;&#x5B9A;&#x7814;&#x7A76;&#x65F6;&#x8BE5;&#x641C;&#x4EC0;&#x4E48;&#x3002;&#x5B83;&#x53EA;&#x89C4;&#x5B9A;&#x8FB9;&#x754C;&#xFF1A;&#x7814;&#x7A76;&#x53EF;&#x4EE5;&#x53CD;&#x590D;&#x5C1D;&#x8BD5;&#xFF0C;&#x53D1;&#x5E03;&#x524D;&#x5FC5;&#x987B;&#x5BA1;&#x6838;&#xFF0C;&#x8FD0;&#x884C;&#x4E5F;&#x5F97;&#x6709;&#x505C;&#x6B62;&#x6761;&#x4EF6;&#x3002;</p>
<h2 id="&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x4E0D;&#x7528; LangGraph"><a href="#&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x4E0D;&#x7528; LangGraph"></a>&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x4E0D;&#x7528; LangGraph</h2>
<p>&#x5982;&#x679C;&#x4F60;&#x7684;&#x5E94;&#x7528;&#x53EA;&#x662F;&#x4E00;&#x6B21;&#x95EE;&#x7B54;&#x3001;&#x4E00;&#x6B21; RAG &#x68C0;&#x7D22;&#xFF0C;&#x6216;&#x8005;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x5DE5;&#x5177;&#x540E;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#xFF0C;&#x666E;&#x901A;&#x51FD;&#x6570;&#x901A;&#x5E38;&#x66F4;&#x6E05;&#x695A;&#x3002;</p>
<p>&#x5F53;&#x4EFB;&#x52A1;&#x5F00;&#x59CB;&#x9700;&#x8981;&#x7B49;&#x7528;&#x6237;&#x3001;&#x7B49;&#x4EBA;&#x5DE5;&#x5BA1;&#x6838;&#xFF0C;&#x6216;&#x5728;&#x5931;&#x8D25;&#x540E;&#x56DE;&#x5230;&#x7279;&#x5B9A;&#x6B65;&#x9AA4;&#x65F6;&#xFF0C;&#x663E;&#x5F0F;&#x7684;&#x56FE;&#x624D;&#x503C;&#x5F97;&#x5F15;&#x5165;&#x3002;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x4FE1;&#x53F7;&#xFF1A;&#x4F60;&#x5DF2;&#x7ECF;&#x8BF4;&#x4E0D;&#x6E05;&#x201C;&#x8FD9;&#x4E2A;&#x4EFB;&#x52A1;&#x4E0B;&#x4E00;&#x6B65;&#x5141;&#x8BB8;&#x53BB;&#x54EA;&#x201D;&#x3002;</p>
<p>&#x5929;&#x6C14; Agent &#x91CC;&#xFF0C;&#x8DE8;&#x8F6E;&#x4FE1;&#x606F;&#x4E0D;&#x80FD;&#x4E22;&#xFF0C;&#x4E8E;&#x662F;&#x6709;&#x4E86; State&#xFF1B;&#x4EFB;&#x52A1;&#x4F1A;&#x6682;&#x505C;&#xFF0C;&#x4E8E;&#x662F;&#x8981; checkpoint&#xFF1B;&#x8DEF;&#x5F84;&#x5F00;&#x59CB;&#x5206;&#x53C9;&#xFF0C;&#x624D;&#x9700;&#x8981; Node &#x548C; Edge&#x3002;</p>
<p>&#x5F53; Agent &#x4E0D;&#x518D;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x5957;&#x4F1A;&#x6682;&#x505C;&#x3001;&#x91CD;&#x8BD5;&#x3001;&#x5206;&#x53C9;&#x7684;&#x6D41;&#x7A0B;&#x65F6;&#xFF0C;LangGraph &#x5E2E;&#x4F60;&#x628A;&#x8FD9;&#x5957;&#x6D41;&#x7A0B;&#x5199;&#x6E05;&#x695A;&#x3001;&#x7BA1;&#x8D77;&#x6765;&#x3002;</p>
<p>&#x60F3;&#x628A;&#x6682;&#x505C;&#x548C;&#x6062;&#x590D;&#x62C6;&#x6210;&#x4EE3;&#x7801;&#x770B;&#xFF0C;&#x5B8C;&#x6574;&#x7684;&#x6781;&#x7B80;&#x793A;&#x4F8B;&#x5728;&#x7AD9;&#x70B9;&#x6E90;&#x7801; <code>examples/tiny-langgraph/main.py</code>&#x3002;&#x5B83;&#x53EA;&#x5B9E;&#x73B0;&#x4E86; <code>State + next + &#x6267;&#x884C;&#x5FAA;&#x73AF;</code>&#xFF0C;&#x7528;&#x6765;&#x8BF4;&#x660E;&#x72B6;&#x6001;&#x56FE;&#x7684;&#x9AA8;&#x67B6;&#x3002;</p>
<p>&#x4EFB;&#x52A1;&#x80FD;&#x8DD1;&#x8D77;&#x6765;&#x4EE5;&#x540E;&#xFF0C;&#x7EBF;&#x4E0A;&#x5F53;&#x7136;&#x8FD8;&#x9700;&#x8981;&#x8BB0;&#x5F55;&#x6BCF;&#x4E00;&#x6B65;&#x5B9E;&#x9645;&#x8C03;&#x7528;&#x4E86;&#x4EC0;&#x4E48;&#x5DE5;&#x5177;&#x3001;&#x62FF;&#x5230;&#x4E86;&#x4EC0;&#x4E48;&#x7ED3;&#x679C;&#xFF0C;&#x65B9;&#x4FBF;&#x6392;&#x67E5;&#x9519;&#x8BEF;&#x3002;&#x8FD9;&#x7C7B;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x901A;&#x5E38;&#x53EB; Trace&#xFF1B;&#x5B83;&#x548C;&#x4FDD;&#x5B58; State &#x662F;&#x4E24;&#x4EF6;&#x4E8B;&#xFF1A;State &#x7528;&#x6765;&#x8BA9;&#x4EFB;&#x52A1;&#x7EE7;&#x7EED;&#xFF0C;Trace &#x7528;&#x6765;&#x4E8B;&#x540E;&#x8FD8;&#x539F;&#x4EFB;&#x52A1;&#x600E;&#x4E48;&#x8D70;&#x5230;&#x8FD9;&#x91CC;&#x3002;</p>
<p>&#x4F46;&#x66F4;&#x65E9;&#x4E5F;&#x66F4;&#x96BE;&#x7684;&#x95EE;&#x9898;&#x662F;&#xFF1A;&#x6539;&#x4E86; Prompt&#x3001;&#x6A21;&#x578B;&#x6216;&#x56FE;&#x4E0A;&#x7684;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x4EE5;&#x540E;&#xFF0C;&#x600E;&#x4E48;&#x77E5;&#x9053;&#x5B83;&#x6CA1;&#x6709;&#x5728;&#x522B;&#x7684;&#x8DEF;&#x5F84;&#x4E0A;&#x53D8;&#x5DEE;&#xFF1F;&#x63A5;&#x7740;&#x8BFB;<a href="./Agent%20%E8%BF%99%E6%AC%A1%E7%AD%94%E5%AF%B9%E4%BA%86%EF%BC%8C%E4%B8%8B%E6%AC%A1%E5%91%A2%EF%BC%9F%E4%B8%80%E4%B8%AA%E5%A4%A9%E6%B0%94%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%20LangSmith.md">&#x300A;Agent &#x8FD9;&#x6B21;&#x7B54;&#x5BF9;&#x4E86;&#xFF0C;&#x4E0B;&#x6B21;&#x5462;&#xFF1F;&#x4E00;&#x4E2A;&#x5929;&#x6C14;&#x4F8B;&#x5B50;&#x770B;&#x61C2; LangSmith&#x300B;</a>&#x3002;</p>
<p>&#x5982;&#x679C;&#x4EFB;&#x52A1;&#x8FD8;&#x4F1A;&#x5206;&#x6210;&#x591A;&#x6761;&#x652F;&#x7EBF;&#xFF0C;&#x6700;&#x540E;&#x518D;&#x6C47;&#x5408;&#xFF0C;&#x53EF;&#x4EE5;&#x7EE7;&#x7EED;&#x770B;<a href="../ai-%E5%A5%BD%E9%97%AE%E9%A2%98/%E4%BB%8E%20Loop%20%E5%88%B0%20Graph%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%E5%A4%9A%20Agent%20%E6%80%8E%E4%B9%88%E5%8D%8F%E4%BD%9C.md">&#x300A;&#x4ECE; Loop &#x5230; Graph&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x591A; Agent &#x600E;&#x4E48;&#x534F;&#x4F5C;&#x300B;</a>&#x3002;</p>
`,F=[{level:1,title:"LangGraph 到底解决了什么问题？用一个查天气的简单例子看懂",children:[{level:2,title:"一句话里什么都有，事情很简单",children:[]},{level:2,title:"用户少说了一个城市",children:[]},{level:2,title:"记住信息还不够",children:[]},{level:2,title:"再加两个要求，直线开始分叉",children:[]},{level:2,title:"把图摆到明面上",children:[]},{level:2,title:"它和 ReAct 的分界：不是固定与自由",children:[]},{level:2,title:"什么时候不用 LangGraph",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
