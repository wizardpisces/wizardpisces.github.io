const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-04-07&#xFF08;UIST&apos;23 &#x6700;&#x4F73;&#x8BBA;&#x6587;&#xFF09;</em></p>
<p>Stanford &#x548C; Google Research &#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>Generative Agents</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2304.03442">Generative Agents: Interactive Simulacra of Human Behavior</a>&#x300B;&#xFF09;&#x662F; AI Agent &#x9886;&#x57DF;&#x7684;&#x5960;&#x57FA;&#x6027;&#x5DE5;&#x4F5C;&#x4E4B;&#x4E00;&#x3002;
&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x6784;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x300A;&#x6A21;&#x62DF;&#x4EBA;&#x751F;&#x300B;&#x7684;&#x6C99;&#x76D2;&#x5C0F;&#x9547; <strong>Smallville</strong>&#xFF0C;&#x8BA9; <strong>25 &#x4E2A; AI Agent</strong> &#x5728;&#x5176;&#x4E2D;&#x81EA;&#x4E3B;&#x751F;&#x6D3B;&#x2014;&#x2014;&#x8D77;&#x5E8A;&#x3001;&#x505A;&#x65E9;&#x9910;&#x3001;&#x4E0A;&#x73ED;&#x3001;&#x804A;&#x5929;&#x3001;&#x7EC4;&#x7EC7;&#x6D3E;&#x5BF9;&#x3001;&#x53C2;&#x52A0;&#x9009;&#x4E3E;&#x2014;&#x2014;&#x6240;&#x6709;&#x884C;&#x4E3A;&#x90FD;&#x7531;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x9A71;&#x52A8;&#xFF0C;&#x4E14;<strong>&#x5B8C;&#x5168;&#x6CA1;&#x6709;&#x4EBA;&#x5DE5;&#x7F16;&#x6392;&#x811A;&#x672C;</strong>&#x3002;</p>
<p><img src="https://raw.githubusercontent.com/joonspk-research/generative_agents/main/cover.png" alt="Figure 1: Smallville &#x6C99;&#x76D2;&#x4E16;&#x754C;&#x5168;&#x666F;&#x3002;25 &#x4E2A; Agent &#x5728;&#x5176;&#x4E2D;&#x81EA;&#x4E3B;&#x751F;&#x6D3B;&#xFF0C;&#x5305;&#x62EC;&#x5728;&#x5496;&#x5561;&#x9986;&#x804A;&#x5929;&#x3001;&#x516C;&#x56ED;&#x6563;&#x6B65;&#x3001;&#x4E0A;&#x5B66;&#x3001;&#x4E0E;&#x540C;&#x4E8B;&#x5206;&#x4EAB;&#x65B0;&#x95FB;&#x7B49;&#x3002;&#x6BCF;&#x4E2A; Agent &#x7684;&#x884C;&#x4E3A;&#x5B8C;&#x5168;&#x7531; LLM &#x9A71;&#x52A8;&#x7684;&#x8BB0;&#x5FC6;-&#x53CD;&#x601D;-&#x89C4;&#x5212;&#x67B6;&#x6784;&#x751F;&#x6210;&#xFF0C;&#x65E0;&#x9700;&#x9884;&#x7F16;&#x811A;&#x672C;&#x3002;"></p>
<h2 id="Generative Agents &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#Generative Agents &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>Generative Agents &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x5982;&#x4F55;&#x8BA9; AI &#x5728;&#x5F00;&#x653E;&#x4E16;&#x754C;&#x4E2D;&#x957F;&#x671F;&#x5C55;&#x73B0;&#x51FA;&quot;&#x53EF;&#x4FE1;&#x7684;&quot;&#x7C7B;&#x4EBA;&#x884C;&#x4E3A;&#xFF1F;</strong></p>
<p>&#x5728;&#x6B64;&#x4E4B;&#x524D;&#xFF0C;&#x6E38;&#x620F; NPC &#x548C;&#x865A;&#x62DF;&#x89D2;&#x8272;&#x7684;&#x884C;&#x4E3A;&#x4E3B;&#x8981;&#x9760;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x5B9E;&#x73B0;&#xFF1A;</p>
<ul>
<li><strong>&#x89C4;&#x5219;&#x811A;&#x672C;&#xFF08;&#x6709;&#x9650;&#x72B6;&#x6001;&#x673A;/&#x884C;&#x4E3A;&#x6811;&#xFF09;&#xFF1A;</strong> &#x624B;&#x52A8;&#x7F16;&#x5199;&#x6BCF;&#x79CD;&#x60C5;&#x51B5;&#x7684;&#x53CD;&#x5E94;&#x3002;NPC &#x80FD;&#x8BF4;&#x7684;&#x8BDD;&#x3001;&#x80FD;&#x505A;&#x7684;&#x4E8B;&#x90FD;&#x662F;&#x9884;&#x8BBE;&#x597D;&#x7684;&#x3002;&#x300A;&#x6A21;&#x62DF;&#x4EBA;&#x751F;&#x300B;&#x300A;&#x8D28;&#x91CF;&#x6548;&#x5E94;&#x300B;&#x7528;&#x7684;&#x5C31;&#x662F;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x3002;</li>
<li><strong>&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF1A;</strong> &#x8BA9; Agent &#x81EA;&#x5DF1;&#x5B66;&#x51FA;&#x7B56;&#x7565;&#x3002;AlphaStar &#x548C; OpenAI Five &#x5728;&#x5BF9;&#x6297;&#x7C7B;&#x6E38;&#x620F;&#x4E2D;&#x8868;&#x73B0;&#x8D85;&#x4EBA;&#xFF0C;&#x4F46;&#x5B83;&#x4EEC;&#x7684;&quot;&#x884C;&#x4E3A;&quot;&#x53EA;&#x662F;&#x6700;&#x4F18;&#x5316;&#x4E00;&#x4E2A;&#x5956;&#x52B1;&#x51FD;&#x6570;&#xFF0C;&#x8FDC;&#x8C08;&#x4E0D;&#x4E0A;&quot;&#x50CF;&#x4EBA;&quot;&#x3002;</li>
</ul>
<p>&#x4E24;&#x6761;&#x8DEF;&#x90FD;&#x6709;&#x81F4;&#x547D;&#x77ED;&#x677F;&#xFF1A;</p>
<pre><code>&#x89C4;&#x5219;&#x811A;&#x672C;&#x7684;&#x56F0;&#x5883;&#xFF1A; 
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  NPC &#x9047;&#x5230;&quot;&#x6CA1;&#x89C1;&#x8FC7;&#x7684;&#x60C5;&#x51B5;&quot; &#x2192; &#x8981;&#x4E48;&#x5361;&#x6B7B;&#xFF0C;&#x8981;&#x4E48;&#x5FAA;&#x73AF;&#x9ED8;&#x8BA4;&#x884C;&#x4E3A;
  NPC &#x4E0D;&#x4F1A;&quot;&#x8BB0;&#x4F4F;&quot;&#x4E4B;&#x524D;&#x7684;&#x4E92;&#x52A8; &#x2192; &#x6BCF;&#x6B21;&#x5BF9;&#x8BDD;&#x90FD;&#x50CF;&#x7B2C;&#x4E00;&#x6B21;&#x89C1;&#x9762;
  &#x60F3;&#x8BA9; NPC &#x793E;&#x4EA4;&#xFF1F;&#x2192; &#x6BCF;&#x5BF9;&#x5173;&#x7CFB;&#x90FD;&#x8981;&#x624B;&#x5199;&#x5BF9;&#x8BDD;&#x6811;&#xFF0C;25 &#x4E2A;&#x4EBA;&#x5C31;&#x662F; 300 &#x5BF9;

&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x7684;&#x56F0;&#x5883;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5956;&#x52B1;&#x51FD;&#x6570;&#x600E;&#x4E48;&#x5B9A;&#x4E49;&quot;&#x50CF;&#x4EBA;&quot;&#xFF1F;
  &#x2192; &#x6253;&#x8D62;&#x6E38;&#x620F; &#x2713;&#xFF08;&#x5BB9;&#x6613;&#x91CF;&#x5316;&#xFF09;
  &#x2192; &#x53D1;&#x8D77;&#x4E00;&#x573A;&#x5408;&#x7406;&#x7684;&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9; &#x2717;&#xFF08;&#x600E;&#x4E48;&#x7ED9;&#x5956;&#x52B1;&#xFF1F;&#xFF09;
  &#x2192; &#x5728;&#x804A;&#x5929;&#x4E2D;&#x81EA;&#x7136;&#x5730;&#x8BA8;&#x8BBA;&#x5E02;&#x957F;&#x9009;&#x4E3E; &#x2717;&#xFF08;&#x66F4;&#x65E0;&#x6CD5;&#x91CF;&#x5316;&#xFF09;
</code></pre>
<p><strong>&#x6839;&#x672C;&#x77DB;&#x76FE;&#xFF1A;</strong> &#x5F00;&#x653E;&#x4E16;&#x754C;&#x4E2D;&#x7684;&quot;&#x53EF;&#x4FE1;&#x884C;&#x4E3A;&quot;&#x9700;&#x8981;&#x540C;&#x65F6;&#x5177;&#x5907;<strong>&#x957F;&#x671F;&#x8BB0;&#x5FC6;</strong>&#xFF08;&#x8BB0;&#x4F4F;&#x4E24;&#x5929;&#x524D;&#x7684;&#x5BF9;&#x8BDD;&#xFF09;&#x3001;<strong>&#x9AD8;&#x7EA7;&#x63A8;&#x7406;</strong>&#xFF08;&#x4ECE;&#x788E;&#x7247;&#x5316;&#x7ECF;&#x5386;&#x4E2D;&#x603B;&#x7ED3;&#x51FA;&quot;Klaus &#x5BF9;&#x7814;&#x7A76;&#x5145;&#x6EE1;&#x70ED;&#x60C5;&quot;&#xFF09;&#x548C;<strong>&#x7075;&#x6D3B;&#x89C4;&#x5212;</strong>&#xFF08;&#x6839;&#x636E;&#x5F53;&#x524D;&#x72B6;&#x51B5;&#x52A8;&#x6001;&#x8C03;&#x6574;&#x4E00;&#x5929;&#x7684;&#x8BA1;&#x5212;&#xFF09;&#x3002;&#x8FD9;&#x4E09;&#x4E2A;&#x80FD;&#x529B;&#x6B64;&#x524D;&#x4ECE;&#x672A;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x7CFB;&#x7EDF;&#x4E2D;&#x5B9E;&#x73B0;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x662F; Agent &#x4ECE;&quot;&#x5DE5;&#x5177;&quot;&#x8D70;&#x5411;&quot;&#x89D2;&#x8272;&quot;&#x7684;&#x5FC5;&#x7ECF;&#x4E4B;&#x8DEF;&#x3002;</strong></p>
<ul>
<li><strong>&#x6E38;&#x620F;&#x4EA7;&#x4E1A;&#x7684;&#x521A;&#x9700;&#xFF1A;</strong> 3A &#x6E38;&#x620F;&#x4E2D; NPC &#x884C;&#x4E3A;&#x7684;&#x53EF;&#x4FE1;&#x5EA6;&#x4E00;&#x76F4;&#x662F;&#x73A9;&#x5BB6;&#x6700;&#x5927;&#x7684;&#x62B1;&#x6028;&#x4E4B;&#x4E00;&#x3002;&#x82B1;&#x4E0A;&#x4EBF;&#x7F8E;&#x5143;&#x505A;&#x7684;&#x5F00;&#x653E;&#x4E16;&#x754C;&#xFF0C;NPC &#x8FD8;&#x662F;&#x7FFB;&#x6765;&#x8986;&#x53BB;&#x8BF4;&#x90A3;&#x51E0;&#x53E5;&#x53F0;&#x8BCD;&#x3002;</li>
<li><strong>&#x793E;&#x4F1A;&#x6A21;&#x62DF;&#x7684;&#x4EF7;&#x503C;&#xFF1A;</strong> &#x5982;&#x679C; AI &#x80FD;&#x53EF;&#x4FE1;&#x5730;&#x6A21;&#x62DF;&#x4EBA;&#x7C7B;&#x884C;&#x4E3A;&#xFF0C;&#x5C31;&#x80FD;&#x7528;&#x4E8E;&#xFF1A;&#x9762;&#x8BD5;&#x8BAD;&#x7EC3;&#xFF08;&#x6A21;&#x62DF;&#x5201;&#x94BB;&#x9762;&#x8BD5;&#x5B98;&#xFF09;&#x3001;&#x793E;&#x4F1A;&#x79D1;&#x5B66;&#x7814;&#x7A76;&#xFF08;&#x6A21;&#x62DF;&#x653F;&#x7B56;&#x5BF9;&#x4EBA;&#x7FA4;&#x7684;&#x5F71;&#x54CD;&#xFF09;&#x3001;UX &#x8BBE;&#x8BA1;&#x539F;&#x578B;&#xFF08;&#x4E0D;&#x7528;&#x771F;&#x4EBA;&#x5C31;&#x80FD;&#x6D4B;&#x8BD5;&#x793E;&#x4EA4;&#x4EA7;&#x54C1;&#x7684;&#x52A8;&#x6001;&#x4EA4;&#x4E92;&#xFF09;&#x3002;</li>
<li><strong>HCI &#x7684;&#x5919;&#x613F;&#xFF1A;</strong> &#x4ECE; 1994 &#x5E74; Bates &#x63D0;&#x51FA;&quot;&#x53EF;&#x4FE1; Agent&quot;&#x6982;&#x5FF5;&#x81F3;&#x4ECA; 30 &#x5E74;&#xFF0C;&#x8FD9;&#x4E00;&#x76F4;&#x662F;&#x4EBA;&#x673A;&#x4EA4;&#x4E92;&#x7684;&quot;&#x5317;&#x6781;&#x661F;&quot;&#x76EE;&#x6807;&#x2014;&#x2014;&#x53EA;&#x662F;&#x6280;&#x672F;&#x6761;&#x4EF6;&#x4E0D;&#x5177;&#x5907;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>LLM &#x7F16;&#x7801;&#x4E86;&#x4EBA;&#x7C7B;&#x884C;&#x4E3A;&#x7684;&#x5148;&#x9A8C;&#xFF1A;</strong> GPT-3.5/4 &#x7B49;&#x6A21;&#x578B;&#x4ECE;&#x6D77;&#x91CF;&#x4EBA;&#x7C7B;&#x6587;&#x672C;&#x4E2D;&#x5B66;&#x5230;&#x4E86;&#x793E;&#x4EA4;&#x89C4;&#x8303;&#x3001;&#x65E5;&#x5E38;&#x4E60;&#x60EF;&#x548C;&#x5E38;&#x8BC6;&#x63A8;&#x7406;&#xFF0C;&#x8FD9;&#x4E3A;&#x751F;&#x6210;&quot;&#x50CF;&#x4EBA;&#x7684;&#x884C;&#x4E3A;&quot;&#x63D0;&#x4F9B;&#x4E86;&#x539F;&#x6750;&#x6599;&#x3002;</li>
<li><strong>Prompt Engineering &#x7684;&#x7A81;&#x7834;&#xFF1A;</strong> Chain-of-Thought &#x7B49;&#x6280;&#x672F;&#x8BC1;&#x660E;&#xFF0C;&#x901A;&#x8FC7;&#x7CBE;&#x5FC3;&#x8BBE;&#x8BA1;&#x7684; prompt &#x53EF;&#x4EE5;&#x5F15;&#x5BFC; LLM &#x8FDB;&#x884C;&#x590D;&#x6742;&#x63A8;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x989D;&#x5916;&#x8BAD;&#x7EC3;&#x3002;</li>
<li><strong>&#x4E4B;&#x524D;&#x7684;&#x8BA4;&#x77E5;&#x67B6;&#x6784;&#x8D70;&#x5230;&#x4E86;&#x5C3D;&#x5934;&#xFF1A;</strong> SOAR&#x3001;ACT-R &#x7B49;&#x7ECF;&#x5178;&#x8BA4;&#x77E5;&#x67B6;&#x6784;&#x867D;&#x7136;&#x7406;&#x8BBA;&#x5B8C;&#x5584;&#xFF0C;&#x4F46;&#x4F9D;&#x8D56;&#x624B;&#x5DE5;&#x7F16;&#x5199;&#x7684;&quot;&#x8FC7;&#x7A0B;&#x77E5;&#x8BC6;&quot;&#x2014;&#x2014;Agent &#x53EA;&#x80FD;&#x505A;&#x4EBA;&#x7C7B;&#x9884;&#x5148;&#x6559;&#x8FC7;&#x7684;&#x4E8B;&#x3002;LLM &#x7B2C;&#x4E00;&#x6B21;&#x8BA9; Agent &#x6709;&#x4E86;&quot;&#x5373;&#x5174;&#x53D1;&#x6325;&quot;&#x7684;&#x80FD;&#x529B;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x7684;&#x6838;&#x5FC3;&#x8D21;&#x732E;&#x662F;&#x4E00;&#x4E2A;&#x4E09;&#x5C42;&#x67B6;&#x6784;&#xFF1A;<strong>&#x8BB0;&#x5FC6;&#x6D41;&#xFF08;Memory Stream&#xFF09;&#x2192; &#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;&#x2192; &#x89C4;&#x5212;&#x4E0E;&#x53CD;&#x5E94;&#xFF08;Planning &amp; Reacting&#xFF09;</strong>&#x3002;</p>
<h3 id="1. &#x8BB0;&#x5FC6;&#x6D41;&#xFF08;Memory Stream&#xFF09;&#x2014;&#x2014;Agent &#x7684;&quot;&#x4EBA;&#x751F;&#x65E5;&#x8BB0;&quot;"><a href="#1. &#x8BB0;&#x5FC6;&#x6D41;&#xFF08;Memory Stream&#xFF09;&#x2014;&#x2014;Agent &#x7684;&quot;&#x4EBA;&#x751F;&#x65E5;&#x8BB0;&quot;"></a>1. &#x8BB0;&#x5FC6;&#x6D41;&#xFF08;Memory Stream&#xFF09;&#x2014;&#x2014;Agent &#x7684;&quot;&#x4EBA;&#x751F;&#x65E5;&#x8BB0;&quot;</h3>
<p>&#x8BB0;&#x5FC6;&#x6D41;&#x662F;&#x4E00;&#x4E2A;&#x6309;&#x65F6;&#x95F4;&#x6392;&#x5217;&#x7684;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x8BB0;&#x5F55;&#x5217;&#x8868;&#xFF0C;&#x5B58;&#x50A8; Agent &#x7684;<strong>&#x6240;&#x6709;</strong>&#x7ECF;&#x5386;&#xFF08;&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x4E8B;&#x4EF6;&#x3001;&#x53C2;&#x4E0E;&#x7684;&#x5BF9;&#x8BDD;&#x3001;&#x6267;&#x884C;&#x7684;&#x884C;&#x4E3A;&#xFF09;&#x3002;</p>
<pre><code>&#x8BB0;&#x5FC6;&#x6D41;&#x793A;&#x4F8B;&#xFF08;Isabella Rodriguez&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
[2/12 7:00am] Isabella Rodriguez &#x6B63;&#x5728;&#x6446;&#x653E;&#x5496;&#x5561;&#x9986;&#x7684;&#x7CD5;&#x70B9;
[2/12 8:30am] Maria Lopez &#x5728; Hobbs Cafe &#x8FB9;&#x559D;&#x5496;&#x5561;&#x8FB9;&#x5B66;&#x5316;&#x5B66;
[2/12 9:15am] Isabella &#x548C; Maria &#x8BA8;&#x8BBA;&#x5728; Hobbs Cafe &#x4E3E;&#x529E;&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;
[2/12 2:00pm] &#x51B0;&#x7BB1;&#x662F;&#x7A7A;&#x7684;
  ...&#xFF08;&#x6301;&#x7EED;&#x589E;&#x957F;&#xFF0C;&#x4E24;&#x5929;&#x6A21;&#x62DF;&#x53EF;&#x8FBE;&#x6570;&#x767E;&#x6761;&#xFF09;
</code></pre>
<p><strong>&#x68C0;&#x7D22;&#x51FD;&#x6570;</strong>&#x662F;&#x8BB0;&#x5FC6;&#x6D41;&#x7684;&#x6838;&#x5FC3;&#x3002;&#x9762;&#x5BF9;&#x5F53;&#x524D;&#x60C5;&#x5883;&#xFF0C;Agent &#x4E0D;&#x53EF;&#x80FD;&#x56DE;&#x987E;&#x6240;&#x6709;&#x8BB0;&#x5FC6;&#xFF08;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x88C5;&#x4E0D;&#x4E0B;&#xFF09;&#xFF0C;&#x6240;&#x4EE5;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6765;&#x6311;&#x9009;&quot;&#x6700;&#x76F8;&#x5173;&quot;&#x7684;&#x8BB0;&#x5FC6;&#x3002;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x878D;&#x5408;&#x4E86;&#x4E09;&#x4E2A;&#x4FE1;&#x53F7;&#xFF1A;</p>
<pre><code>&#x6700;&#x7EC8;&#x68C0;&#x7D22;&#x5206;&#x6570; = &#x3B1;_recency &#xD7; &#x8FD1;&#x56E0;&#x6027; + &#x3B1;_importance &#xD7; &#x91CD;&#x8981;&#x6027; + &#x3B1;_relevance &#xD7; &#x76F8;&#x5173;&#x6027;

  &#x8FD1;&#x56E0;&#x6027;&#xFF08;Recency&#xFF09;&#xFF1A;&#x6700;&#x8FD1;&#x8BBF;&#x95EE;&#x8FC7;&#x7684;&#x8BB0;&#x5FC6;&#x5F97;&#x5206;&#x66F4;&#x9AD8;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5B9E;&#x73B0;&#xFF1A;&#x6307;&#x6570;&#x8870;&#x51CF;&#x51FD;&#x6570;&#xFF0C;decay_rate = 0.995 / &#x6E38;&#x620F;&#x5C0F;&#x65F6;
  &#x76F4;&#x89C9;&#xFF1A;&#x4ECA;&#x5929;&#x65E9;&#x4E0A;&#x7684;&#x4E8B; &gt; &#x6628;&#x5929;&#x7684;&#x4E8B; &gt; &#x524D;&#x5929;&#x7684;&#x4E8B;

  &#x91CD;&#x8981;&#x6027;&#xFF08;Importance&#xFF09;&#xFF1A;&#x91CD;&#x5927;&#x4E8B;&#x4EF6;&#x5F97;&#x5206;&#x66F4;&#x9AD8;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5B9E;&#x73B0;&#xFF1A;&#x76F4;&#x63A5;&#x8BA9; LLM &#x6253; 1-10 &#x5206;
  Prompt&#xFF1A;&quot;&#x5728; 1&#xFF08;&#x5237;&#x7259;&#xFF09;&#x5230; 10&#xFF08;&#x5206;&#x624B;&#xFF09;&#x7684;&#x5C3A;&#x5EA6;&#x4E0A;&#xFF0C;&#x8FD9;&#x6761;&#x8BB0;&#x5FC6;&#x6709;&#x591A;&#x91CD;&#x8981;&#xFF1F;&quot;
  &quot;&#x4E70;&#x83DC;&quot; &#x2192; 2 &#x5206; | &quot;&#x5411;&#x6697;&#x604B;&#x5BF9;&#x8C61;&#x8868;&#x767D;&quot; &#x2192; 8 &#x5206;

  &#x76F8;&#x5173;&#x6027;&#xFF08;Relevance&#xFF09;&#xFF1A;&#x4E0E;&#x5F53;&#x524D;&#x60C5;&#x5883;&#x8BED;&#x4E49;&#x5339;&#x914D;&#x7684;&#x8BB0;&#x5FC6;&#x5F97;&#x5206;&#x66F4;&#x9AD8;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5B9E;&#x73B0;&#xFF1A;&#x5BF9;&#x8BB0;&#x5FC6;&#x6587;&#x672C;&#x548C;&#x67E5;&#x8BE2;&#x6587;&#x672C;&#x5206;&#x522B;&#x505A; Embedding &#x2192; &#x4F59;&#x5F26;&#x76F8;&#x4F3C;&#x5EA6;
</code></pre>
<h3 id="2. &#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;&#x2014;&#x2014;&#x4ECE;&#x788E;&#x7247;&#x8BB0;&#x5FC6;&#x5230;&#x9AD8;&#x5C42;&#x6D1E;&#x5BDF;"><a href="#2. &#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;&#x2014;&#x2014;&#x4ECE;&#x788E;&#x7247;&#x8BB0;&#x5FC6;&#x5230;&#x9AD8;&#x5C42;&#x6D1E;&#x5BDF;"></a>2. &#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;&#x2014;&#x2014;&#x4ECE;&#x788E;&#x7247;&#x8BB0;&#x5FC6;&#x5230;&#x9AD8;&#x5C42;&#x6D1E;&#x5BDF;</h3>
<p>&#x4EC5;&#x9760;&#x539F;&#x59CB;&#x89C2;&#x5BDF;&#xFF0C;Agent &#x53EA;&#x80FD;&#x505A;&#x8868;&#x5C42;&#x5173;&#x8054;&#xFF08;&quot;Klaus &#x548C;&#x8C01;&#x804A;&#x5929;&#x6700;&#x591A;&#x5C31;&#x548C;&#x8C01;&#x6700;&#x719F;&quot;&#xFF09;&#xFF0C;&#x65E0;&#x6CD5;&#x505A;&#x6DF1;&#x5C42;&#x63A8;&#x7406;&#xFF08;&quot;Klaus &#x5BF9;&#x7814;&#x7A76;&#x5145;&#x6EE1;&#x70ED;&#x60C5;&#xFF0C;Maria &#x4E5F;&#x662F;&quot;&#xFF09;&#x3002;</p>
<p><strong>&#x53CD;&#x601D;&#x673A;&#x5236;</strong>&#x5B9A;&#x671F;&#x89E6;&#x53D1;&#xFF08;&#x5F53;&#x8FD1;&#x671F;&#x8BB0;&#x5FC6;&#x7684; Importance &#x603B;&#x5206;&#x8D85;&#x8FC7; 150 &#x65F6;&#xFF09;&#xFF0C;&#x751F;&#x6210;&#x66F4;&#x62BD;&#x8C61;&#x7684;&quot;&#x53CD;&#x601D;&#x8BB0;&#x5FC6;&quot;&#xFF1A;</p>
<pre><code>&#x53CD;&#x601D;&#x751F;&#x6210;&#x6D41;&#x7A0B;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Step 1: &#x786E;&#x5B9A;&#x53CD;&#x601D;&#x4E3B;&#x9898;
  &#x8F93;&#x5165;&#xFF1A;&#x6700;&#x8FD1; 100 &#x6761;&#x8BB0;&#x5FC6;
  Prompt&#xFF1A;&quot;&#x6839;&#x636E;&#x4E0A;&#x8FF0;&#x4FE1;&#x606F;&#xFF0C;&#x80FD;&#x56DE;&#x7B54;&#x7684; 3 &#x4E2A;&#x6700;&#x91CD;&#x8981;&#x7684;&#x9AD8;&#x5C42;&#x95EE;&#x9898;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&quot;
  &#x8F93;&#x51FA;&#xFF1A;&quot;Klaus Mueller &#x5BF9;&#x4EC0;&#x4E48;&#x8BDD;&#x9898;&#x6700;&#x6709;&#x70ED;&#x60C5;&#xFF1F;&quot;
         &quot;Klaus Mueller &#x548C; Maria Lopez &#x7684;&#x5173;&#x7CFB;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&quot;

Step 2: &#x7528;&#x95EE;&#x9898;&#x68C0;&#x7D22;&#x76F8;&#x5173;&#x8BB0;&#x5FC6;

Step 3: &#x63D0;&#x70BC;&#x6D1E;&#x5BDF;
  Prompt&#xFF1A;&quot;&#x6839;&#x636E;&#x4EE5;&#x4E0B;&#x9648;&#x8FF0;&#xFF0C;&#x4F60;&#x80FD;&#x5F97;&#x51FA;&#x54EA; 5 &#x6761;&#x9AD8;&#x5C42;&#x63A8;&#x65AD;&#xFF1F;&quot;
  &#x8F93;&#x51FA;&#xFF1A;&quot;Klaus Mueller &#x5BF9;&#x57CE;&#x5E02;&#x5316;&#x7814;&#x7A76;&#x5145;&#x6EE1;&#x70ED;&#x60C5;&#xFF08;&#x57FA;&#x4E8E;&#x8BB0;&#x5FC6; 1, 2, 8, 15&#xFF09;&quot;
         &#x2193;
  &#x8FD9;&#x6761;&#x53CD;&#x601D;&#x672C;&#x8EAB;&#x4E5F;&#x4F5C;&#x4E3A;&#x65B0;&#x8BB0;&#x5FC6;&#x5B58;&#x5165;&#x8BB0;&#x5FC6;&#x6D41;
  &#x2192; &#x4E0B;&#x6B21;&#x53CD;&#x601D;&#x53EF;&#x4EE5;&#x57FA;&#x4E8E;&#x4E4B;&#x524D;&#x7684;&#x53CD;&#x601D;&#x7EE7;&#x7EED;&#x62BD;&#x8C61;
  &#x2192; &#x5F62;&#x6210;&#x4E00;&#x68F5;&quot;&#x53CD;&#x601D;&#x6811;&quot;&#xFF1A;&#x53F6;&#x5B50;&#x662F;&#x89C2;&#x5BDF;&#xFF0C;&#x8D8A;&#x5F80;&#x4E0A;&#x8D8A;&#x62BD;&#x8C61;
</code></pre>
<p><strong>&#x53CD;&#x601D;&#x7684;&#x5A01;&#x529B;&#xFF1A;</strong> &#x5728;&#x8BC4;&#x4F30;&#x5B9E;&#x9A8C;&#x4E2D;&#xFF0C;&#x6CA1;&#x6709;&#x53CD;&#x601D;&#x7684; Agent &#x5728;&#x88AB;&#x95EE;&quot;&#x4F60;&#x60F3;&#x9001; Wolfgang &#x4EC0;&#x4E48;&#x751F;&#x65E5;&#x793C;&#x7269;&quot;&#x65F6;&#x8868;&#x793A;&quot;&#x4E0D;&#x77E5;&#x9053;&#x4ED6;&#x559C;&#x6B22;&#x4EC0;&#x4E48;&quot;&#xFF08;&#x5C3D;&#x7BA1;&#x8DDF;&#x4ED6;&#x4E92;&#x52A8;&#x4E86;&#x5F88;&#x591A;&#x6B21;&#xFF09;&#xFF1B;&#x6709;&#x53CD;&#x601D;&#x7684; Agent &#x80FD;&#x56DE;&#x7B54;&quot;&#x4ED6;&#x5BF9;&#x6570;&#x5B66;&#x97F3;&#x4E50;&#x521B;&#x4F5C;&#x611F;&#x5174;&#x8DA3;&#xFF0C;&#x53EF;&#x4EE5;&#x9001;&#x4E00;&#x672C;&#x76F8;&#x5173;&#x7684;&#x4E66;&quot;&#x3002;</p>
<h3 id="3. &#x89C4;&#x5212;&#x4E0E;&#x53CD;&#x5E94;&#xFF08;Planning &amp; Reacting&#xFF09;"><a href="#3. &#x89C4;&#x5212;&#x4E0E;&#x53CD;&#x5E94;&#xFF08;Planning &amp; Reacting&#xFF09;"></a>3. &#x89C4;&#x5212;&#x4E0E;&#x53CD;&#x5E94;&#xFF08;Planning &amp; Reacting&#xFF09;</h3>
<p><strong>&#x89C4;&#x5212;</strong>&#x91C7;&#x7528;&#x81EA;&#x9876;&#x5411;&#x4E0B;&#x7684;&#x9012;&#x5F52;&#x5206;&#x89E3;&#xFF1A;</p>
<pre><code>&#x89C4;&#x5212;&#x7684;&#x9012;&#x5F52;&#x5206;&#x89E3;&#x8FC7;&#x7A0B;&#xFF08;Eddy Lin&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Level 1: &#x4E00;&#x5929;&#x7684;&#x7C97;&#x7565;&#x8BA1;&#x5212;
  &quot;1) 8:00 &#x8D77;&#x5E8A; &#x2192; 2) 10:00 &#x53BB;&#x5B66;&#x6821; &#x2192; 3) 1:00 &#x505A;&#x97F3;&#x4E50;&#x521B;&#x4F5C; &#x2192; ... &#x2192; 7) 11:00 &#x7761;&#x89C9;&quot;

Level 2: &#x6BCF;&#x5C0F;&#x65F6;&#x7EC6;&#x5206;
  &quot;1:00 pm  &#x6784;&#x601D;&#x65B0;&#x97F3;&#x4E50;&#x7684;&#x7075;&#x611F;&#x548C;&#x4E3B;&#x9898;&quot;
  &quot;2:00 pm  &#x5F00;&#x59CB;&#x7F16;&#x66F2;&quot;
  &quot;3:00 pm  &#x4F11;&#x606F;&#x5E76;&#x542C;&#x4E00;&#x4E9B;&#x53C2;&#x8003;&#x66F2;&#x76EE;&quot;
  &quot;4:00 pm  &#x77ED;&#x6682;&#x4F11;&#x606F;&#xFF0C;&#x8865;&#x5145;&#x7CBE;&#x529B;&quot;

Level 3: 5-15 &#x5206;&#x949F;&#x7EC6;&#x5206;
  &quot;4:00 pm  &#x5403;&#x4E2A;&#x6C34;&#x679C;&#x96F6;&#x98DF;&quot;
  &quot;4:05 pm  &#x5728;&#x5DE5;&#x4F5C;&#x533A;&#x5468;&#x56F4;&#x8D70;&#x8D70;&quot;
  &quot;4:10 pm  &#x56DE;&#x5230;&#x684C;&#x524D;&#xFF0C;&#x56DE;&#x987E;&#x4ECA;&#x5929;&#x7684;&#x8FDB;&#x5C55;&quot;
  ...
</code></pre>
<p><strong>&#x53CD;&#x5E94;</strong>&#x5219;&#x662F;&#x5728;&#x6BCF;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x68C0;&#x67E5;&#x73AF;&#x5883;&#x53D8;&#x5316;&#xFF0C;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x6253;&#x65AD;&#x5F53;&#x524D;&#x8BA1;&#x5212;&#x3002;&#x5982;&#x679C; John &#x770B;&#x5230; Eddy &#x5728;&#x82B1;&#x56ED;&#x6563;&#x6B65;&#xFF0C;&#x7CFB;&#x7EDF;&#x4F1A;&#x8BC4;&#x4F30; John &#x4E0E; Eddy &#x7684;&#x5173;&#x7CFB;&#x3001;&#x5F53;&#x524D;&#x884C;&#x4E3A;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x7136;&#x540E;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x4E0A;&#x524D;&#x642D;&#x8BDD;&#x2014;&#x2014;&#x5982;&#x679C;&#x51B3;&#x5B9A;&#x642D;&#x8BDD;&#xFF0C;&#x8FD8;&#x4F1A;&#x751F;&#x6210;&#x7B26;&#x5408;&#x53CC;&#x65B9;&#x8BB0;&#x5FC6;&#x548C;&#x6027;&#x683C;&#x7684;&#x5BF9;&#x8BDD;&#x5185;&#x5BB9;&#x3002;</p>
<h3 id="4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;"><a href="#4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;"></a>4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;</h3>
<pre><code>&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502;              Generative Agent &#x67B6;&#x6784;                   &#x2502;
&#x2502;                                                      &#x2502;
&#x2502;  &#x611F;&#x77E5;&#xFF08;Perceive&#xFF09;                                     &#x2502;
&#x2502;    &#x2502;  Agent &#x89C2;&#x5BDF;&#x73AF;&#x5883;&#x4E2D;&#x7684;&#x4E8B;&#x4EF6;&#x548C;&#x5176;&#x4ED6; Agent              &#x2502;
&#x2502;    &#x2193;                                                 &#x2502;
&#x2502;  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;             &#x2502;
&#x2502;  &#x2502;       &#x8BB0;&#x5FC6;&#x6D41; (Memory Stream)         &#x2502;             &#x2502;
&#x2502;  &#x2502;  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;      &#x2502;             &#x2502;
&#x2502;  &#x2502;  &#x2502; &#x89C2;&#x5BDF; (Observations)       &#x2502;      &#x2502;             &#x2502;
&#x2502;  &#x2502;  &#x2502; &#x53CD;&#x601D; (Reflections)        &#x2502;      &#x2502;             &#x2502;
&#x2502;  &#x2502;  &#x2502; &#x8BA1;&#x5212; (Plans)              &#x2502;      &#x2502;             &#x2502;
&#x2502;  &#x2502;  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;      &#x2502;             &#x2502;
&#x2502;  &#x2502;       &#x2195; &#x68C0;&#x7D22;&#xFF08;Recency+Importance    &#x2502;             &#x2502;
&#x2502;  &#x2502;              +Relevance&#xFF09;            &#x2502;             &#x2502;
&#x2502;  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;             &#x2502;
&#x2502;    &#x2502;                        &#x2502;                        &#x2502;
&#x2502;    &#x2193;                        &#x2193;                        &#x2502;
&#x2502;  &#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;     &#x89C4;&#x5212;&#xFF08;Planning&#xFF09;              &#x2502;
&#x2502;  &quot;&#x6211;&#x6700;&#x8FD1;&#x5B66;&#x5230;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;&quot;   &quot;&#x4ECA;&#x5929;&#x6211;&#x8BE5;&#x505A;&#x4EC0;&#x4E48;&#xFF1F;&quot;            &#x2502;
&#x2502;    &#x2502;                        &#x2502;                        &#x2502;
&#x2502;    &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;                        &#x2502;
&#x2502;               &#x2193;                                      &#x2502;
&#x2502;          &#x53CD;&#x5E94;&#xFF08;React&#xFF09;                                &#x2502;
&#x2502;    &quot;&#x770B;&#x5230; XX &#x53D1;&#x751F;&#x4E86;&#xFF0C;&#x6211;&#x8BE5;&#x600E;&#x4E48;&#x505A;&#xFF1F;&quot;                     &#x2502;
&#x2502;               &#x2193;                                      &#x2502;
&#x2502;          &#x884C;&#x52A8; &#x2192; &#x66F4;&#x65B0;&#x73AF;&#x5883; &#x2192; &#x65B0;&#x7684;&#x89C2;&#x5BDF; &#x2192; &#x5FAA;&#x73AF;            &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x6D8C;&#x73B0;&#x793E;&#x4F1A;&#x884C;&#x4E3A;"><a href="#&#x6D8C;&#x73B0;&#x793E;&#x4F1A;&#x884C;&#x4E3A;"></a>&#x6D8C;&#x73B0;&#x793E;&#x4F1A;&#x884C;&#x4E3A;</h3>
<p>&#x8BBA;&#x6587;&#x5C55;&#x793A;&#x4E86;&#x4E09;&#x7C7B;&#x6D8C;&#x73B0;&#x884C;&#x4E3A;&#xFF0C;&#x5168;&#x90E8;&#x65E0;&#x9700;&#x4EBA;&#x5DE5;&#x5E72;&#x9884;&#xFF1A;</p>
<p><strong>1. &#x4FE1;&#x606F;&#x6269;&#x6563;</strong></p>
<p>Sam Moore &#x5BA3;&#x5E03;&#x7ADE;&#x9009;&#x5E02;&#x957F;&#x7684;&#x6D88;&#x606F;&#xFF0C;&#x521D;&#x59CB;&#x53EA;&#x6709; Sam &#x81EA;&#x5DF1;&#x77E5;&#x9053;&#x3002;&#x4E24;&#x5929;&#x540E;&#xFF1A;</p>
<pre><code>&#x4FE1;&#x606F;&#x6269;&#x6563;&#x8F68;&#x8FF9;&#xFF1A;
  Day 0: Sam (1/25 = 4%)
  Day 2: Sam &#x2192; Tom &#x2192; John &#x2192; ... &#x2192; 8 agents (32%)
  
  &#x5168;&#x7A0B;&#x65E0;&#x4EBA;&#x5DE5;&#x5E72;&#x9884;&#xFF0C;&#x4FE1;&#x606F;&#x901A;&#x8FC7;&#x81EA;&#x7136;&#x5BF9;&#x8BDD;&#x9010;&#x7EA7;&#x4F20;&#x64AD;
  &#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;&#xFF1A;&#x9010;&#x4E00;&quot;&#x91C7;&#x8BBF;&quot;&#x6240;&#x6709; Agent&#xFF0C;&#x786E;&#x8BA4;&#x56DE;&#x7B54;&#x975E;&#x5E7B;&#x89C9;
</code></pre>
<p><strong>2. &#x5173;&#x7CFB;&#x7F51;&#x7EDC;&#x81EA;&#x53D1;&#x5F62;&#x6210;</strong></p>
<pre><code>&#x793E;&#x4EA4;&#x7F51;&#x7EDC;&#x5BC6;&#x5EA6;&#x53D8;&#x5316;&#xFF1A;
  &#x6A21;&#x62DF;&#x5F00;&#x59CB;: &#x3B7; = 0.167&#xFF08;&#x521D;&#x59CB;&#x5316;&#x7684;&#x5173;&#x7CFB;&#xFF09;
  &#x6A21;&#x62DF;&#x7ED3;&#x675F;: &#x3B7; = 0.74 &#xFF08;&#x5927;&#x91CF;&#x65B0;&#x5173;&#x7CFB;&#x81EA;&#x53D1;&#x5F62;&#x6210;&#xFF09;
  
  453 &#x6761; Agent &#x5BF9;&#x5176;&#x4ED6; Agent &#x7684;&#x77E5;&#x8BC6;&#x56DE;&#x7B54;&#x4E2D;
  &#x4EC5; 1.3% (n=6) &#x662F;&#x5E7B;&#x89C9;
</code></pre>
<p><strong>3. &#x7FA4;&#x4F53;&#x534F;&#x4F5C;&#xFF08;&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;&#xFF09;</strong></p>
<p>&#x8FD9;&#x662F;&#x8BBA;&#x6587;&#x6700;&#x4EAE;&#x773C;&#x7684; Demo&#x2014;&#x2014;&#x53EA;&#x544A;&#x8BC9; Isabella &quot;&#x4F60;&#x60F3;&#x529E;&#x4E00;&#x4E2A;&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;&quot;&#xFF0C;&#x63A5;&#x4E0B;&#x6765;&#x5B8C;&#x5168;&#x7531; Agent &#x81EA;&#x884C;&#x63A8;&#x8FDB;&#xFF1A;</p>
<pre><code>&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;&#x7684;&#x6D8C;&#x73B0;&#x94FE;&#x6761;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Day 1 (2/13):
  Isabella &#x5728; Hobbs Cafe &#x9047;&#x5230;&#x5BA2;&#x4EBA;&#x65F6;&#x9080;&#x8BF7;&#x4ED6;&#x4EEC; &#x2192; 12 &#x4EBA;&#x88AB;&#x9080;&#x8BF7;
  Isabella &#x4E0B;&#x5348;&#x5F00;&#x59CB;&#x5E03;&#x7F6E;&#x5496;&#x5561;&#x9986;
  Maria&#xFF08;Isabella &#x7684;&#x597D;&#x53CB;&#xFF09;&#x6765;&#x5E2E;&#x5FD9;&#x88C5;&#x9970;
  Maria &#x5077;&#x5077;&#x9080;&#x8BF7;&#x81EA;&#x5DF1;&#x6697;&#x604B;&#x7684; Klaus &#x6765;&#x53C2;&#x52A0;
  
Day 2 (2/14, Valentine&apos;s Day):
  5:00 pm &#x2192; 5 &#x4F4D; Agent &#x51C6;&#x65F6;&#x51FA;&#x73B0;&#x5728; Hobbs Cafe
  &#x4ED6;&#x4EEC;&#x5728;&#x6D3E;&#x5BF9;&#x4E0A;&#x81EA;&#x7531;&#x4EA4;&#x6D41;&#x3001;&#x4EAB;&#x53D7;&#x6D3B;&#x52A8;
  
  &#x6F5C;&#x5728;&#x5931;&#x8D25;&#x70B9;&#xFF08;&#x5168;&#x90E8;&#x88AB; Agent &#x81EA;&#x4E3B;&#x514B;&#x670D;&#xFF09;&#xFF1A;
  &#x2713; Isabella &#x8981;&#x8BB0;&#x5F97;&#x9080;&#x8BF7;&#x4EBA;
  &#x2713; &#x88AB;&#x9080;&#x8BF7;&#x8005;&#x8981;&#x8BB0;&#x4F4F;&#x9080;&#x8BF7;
  &#x2713; &#x88AB;&#x9080;&#x8BF7;&#x8005;&#x8981;&#x51B3;&#x5B9A;&#x53BB;&#x53C2;&#x52A0;
  &#x2713; &#x88AB;&#x9080;&#x8BF7;&#x8005;&#x8981;&#x5728;&#x6B63;&#x786E;&#x65F6;&#x95F4;&#x51FA;&#x73B0;&#x5728;&#x6B63;&#x786E;&#x5730;&#x70B9;
</code></pre>
<p>7 &#x4E2A;&#x88AB;&#x9080;&#x8BF7;&#x4F46;&#x6CA1;&#x6765;&#x7684; Agent &#x4E2D;&#xFF0C;3 &#x4E2A;&#x8BF4;&#x6709;&#x5176;&#x4ED6;&#x4E8B;&#x5FD9;&#xFF08;&#x5408;&#x7406;&#x501F;&#x53E3;&#xFF09;&#xFF0C;4 &#x4E2A;&#x867D;&#x8868;&#x793A;&#x6709;&#x5174;&#x8DA3;&#x4F46;&#x5F53;&#x5929;&#x6CA1;&#x6709;&#x628A;&#x6D3E;&#x5BF9;&#x6392;&#x5165;&#x8BA1;&#x5212;&#x2014;&#x2014;&#x4E5F;&#x662F;&#x4E00;&#x79CD;&#x771F;&#x5B9E;&#x7684;&#x4EBA;&#x7C7B;&#x884C;&#x4E3A;&#x6A21;&#x5F0F;&#x3002;</p>
<h3 id="&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#xFF08;Controlled Evaluation&#xFF09;"><a href="#&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#xFF08;Controlled Evaluation&#xFF09;"></a>&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#xFF08;Controlled Evaluation&#xFF09;</h3>
<p>100 &#x4F4D;&#x4EBA;&#x7C7B;&#x8BC4;&#x4F30;&#x5458;&#x5BF9; 5 &#x79CD;&#x6761;&#x4EF6;&#x4E0B;&#x7684; Agent &#x56DE;&#x7B54;&#x8FDB;&#x884C;&#x53EF;&#x4FE1;&#x5EA6;&#x6392;&#x540D;&#xFF1A;</p>
<pre><code>TrueSkill &#x8BC4;&#x5206;&#xFF08;&#x8D8A;&#x9AD8;&#x8D8A;&#x597D;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
&#x5B8C;&#x6574;&#x67B6;&#x6784;&#xFF08;&#x89C2;&#x5BDF;+&#x53CD;&#x601D;+&#x89C4;&#x5212;&#xFF09;:     &#x3BC; = 29.89 &#x2190; &#x6700;&#x53EF;&#x4FE1;
&#x65E0;&#x53CD;&#x601D;:                         &#x3BC; = 26.88
&#x65E0;&#x53CD;&#x601D;+&#x65E0;&#x89C4;&#x5212;:                  &#x3BC; = 25.64
&#x4EBA;&#x7C7B;&#x4F17;&#x5305;&#x5DE5;&#x4EBA;&#x89D2;&#x8272;&#x626E;&#x6F14;:           &#x3BC; = 22.95
&#x65E0;&#x8BB0;&#x5FC6;+&#x65E0;&#x53CD;&#x601D;+&#x65E0;&#x89C4;&#x5212;:           &#x3BC; = 21.21 &#x2190; &#x6700;&#x4E0D;&#x53EF;&#x4FE1;

&#x5B8C;&#x6574;&#x67B6;&#x6784; vs &#x65E0;&#x8BB0;&#x5FC6;&#x67B6;&#x6784;: Cohen&apos;s d = 8.16&#xFF08;8 &#x4E2A;&#x6807;&#x51C6;&#x5DEE;&#xFF01;&#xFF09;
&#x6240;&#x6709;&#x4E24;&#x4E24;&#x6BD4;&#x8F83;&#x5747;&#x663E;&#x8457; (p &lt; 0.001)
&#x552F;&#x4E00;&#x7684;&#x4F8B;&#x5916;&#xFF1A;&#x4EBA;&#x7C7B;&#x4F17;&#x5305; &#x2248; &#x5B8C;&#x5168;&#x6D88;&#x878D;&#xFF08;&#x4E24;&#x4E2A;&#x6700;&#x5DEE;&#x6761;&#x4EF6;&#x4E4B;&#x95F4;&#x65E0;&#x663E;&#x8457;&#x5DEE;&#x5F02;&#xFF09;
</code></pre>
<p><strong>&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;</strong> &#x5B8C;&#x6574;&#x7684; Generative Agent &#x67B6;&#x6784;&#x5728;&#x53EF;&#x4FE1;&#x5EA6;&#x4E0A;&#x4E0D;&#x4EC5;&#x8D85;&#x8D8A;&#x4E86;&#x6240;&#x6709;&#x6D88;&#x878D;&#x7248;&#x672C;&#xFF0C;&#x751A;&#x81F3;&#x8D85;&#x8D8A;&#x4E86;&#x4EBA;&#x7C7B;&#x4F17;&#x5305;&#x5DE5;&#x4EBA;&#x7684;&#x89D2;&#x8272;&#x626E;&#x6F14;&#x3002;&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6;&#xFF08;&#x8BB0;&#x5FC6;&#x3001;&#x53CD;&#x601D;&#x3001;&#x89C4;&#x5212;&#xFF09;&#x90FD;&#x662F;&#x4E0D;&#x53EF;&#x6216;&#x7F3A;&#x7684;&#x3002;</p>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>Generative Agents &#x662F;<strong>&#x7B2C;&#x4E00;&#x4E2A;</strong>&#x5B8C;&#x6574;&#x5C55;&#x793A; LLM &#x9A71;&#x52A8;&#x7684;&#x53EF;&#x4FE1;&#x793E;&#x4F1A;&#x6A21;&#x62DF;&#x7684;&#x5DE5;&#x4F5C;&#x3002;&#x540E;&#x7EED;&#x6709;&#x5927;&#x91CF;&#x5DE5;&#x4F5C;&#x5728;&#x6B64;&#x57FA;&#x7840;&#x4E0A;&#x6539;&#x8FDB;&#xFF1A;</p>
<ul>
<li><strong>&#x6548;&#x7387;&#x95EE;&#x9898;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x81EA;&#x5DF1;&#x627F;&#x8BA4;&#x6A21;&#x62DF; 25 &#x4E2A; Agent &#x4E24;&#x5929;&#x82B1;&#x4E86;&#x6570;&#x5343;&#x7F8E;&#x5143; API &#x8D39;&#x7528;&#x3002;&#x540E;&#x7EED;&#x5DE5;&#x4F5C;&#xFF08;&#x5982; AgentSims&#x3001;CAMEL&#xFF09;&#x5C1D;&#x8BD5;&#x964D;&#x4F4E;&#x6210;&#x672C;&#xFF0C;&#x4F46;&#x6838;&#x5FC3;&#x67B6;&#x6784;&#x601D;&#x8DEF;&#x4E0D;&#x53D8;&#x3002;</li>
<li><strong>&#x8BB0;&#x5FC6;&#x7BA1;&#x7406;&#x7684;&#x7CFB;&#x7EDF;&#x5316;&#xFF1A;</strong> <a href="./MemOS%20-%20A%20Memory%20OS%20for%20AI%20System.md">MemOS</a> &#x5C06;&#x8BB0;&#x5FC6;&#x89C6;&#x4E3A;&#x53EF;&#x7BA1;&#x7406;&#x7684;&#x7CFB;&#x7EDF;&#x8D44;&#x6E90;&#xFF0C;&#x63D0;&#x51FA;&#x4E86;&#x6BD4;&#x8BB0;&#x5FC6;&#x6D41;&#x66F4;&#x7ED3;&#x6784;&#x5316;&#x7684; MemCube &#x65B9;&#x6848;&#x3002;<a href="./RUC%20-%20Memory%20in%20the%20Age%20of%20AI%20Agents.md">RUC &#x7684; Memory Survey</a> &#x4ECE; Forms-Functions-Dynamics &#x4E09;&#x4E2A;&#x7EF4;&#x5EA6;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x4E86; Agent Memory &#x7684;&#x5206;&#x7C7B;&#x5B66;&#x2014;&#x2014;&#x672C;&#x8BBA;&#x6587;&#x7684;&#x8BB0;&#x5FC6;&#x6D41;&#x57FA;&#x672C;&#x4E0A;&#x662F; Token-level + Experiential &#x7684;&#x7EC4;&#x5408;&#x3002;</li>
<li><strong>&#x884C;&#x4E3A;&#x9A71;&#x52A8;&#x7684;&#x6539;&#x8FDB;&#xFF1A;</strong> <a href="./Princeton%20%26%20Google%20-%20ReAct%20-%20Synergizing%20Reasoning%20and%20Acting%20in%20LLMs.md">ReAct</a> &#x63D0;&#x51FA;&#x63A8;&#x7406;-&#x884C;&#x52A8;&#x4EA4;&#x66FF;&#x8303;&#x5F0F;&#xFF0C;<a href="./Uniphore%20-%20Pre-Act%20-%20Multi-Step%20Planning%20and%20Reasoning%20Improves%20Acting.md">Pre-Act</a> &#x8FDB;&#x4E00;&#x6B65;&#x5F15;&#x5165;&#x591A;&#x6B65;&#x89C4;&#x5212;&#x3002;Generative Agents &#x7684;&quot;&#x89C4;&#x5212;-&#x53CD;&#x5E94;&quot;&#x5FAA;&#x73AF;&#x672C;&#x8D28;&#x4E0A;&#x662F; ReAct &#x601D;&#x60F3;&#x5728;&#x5F00;&#x653E;&#x4E16;&#x754C;&#x4E2D;&#x7684;&#x81EA;&#x7136;&#x5EF6;&#x4F38;&#x3002;</li>
<li><strong>&#x63A8;&#x7406;&#x6DF1;&#x5EA6;&#x7684;&#x589E;&#x5F3A;&#xFF1A;</strong> <a href="./Princeton%20%26%20Google%20-%20Tree%20of%20Thoughts%20-%20Deliberate%20Problem%20Solving%20with%20LLMs.md">Tree of Thoughts</a> &#x8BA9; LLM &#x5728;&#x63A8;&#x7406;&#x65F6;&#x8FDB;&#x884C;&#x6811;&#x641C;&#x7D22;&#x3002;&#x5982;&#x679C;&#x628A; ToT &#x7684;&#x641C;&#x7D22;&#x80FD;&#x529B;&#x5D4C;&#x5165; Generative Agents &#x7684;&#x89C4;&#x5212;&#x6A21;&#x5757;&#xFF0C;Agent &#x5728;&#x9762;&#x4E34;&#x590D;&#x6742;&#x51B3;&#x7B56;&#x65F6;&#x53EF;&#x80FD;&#x8868;&#x73B0;&#x66F4;&#x597D;&#x3002;</li>
</ul>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;25 &#x4E2A; Agent &#x7684;&quot;&#x695A;&#x95E8;&#x7684;&#x4E16;&#x754C;&quot;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;25 &#x4E2A; Agent &#x7684;&quot;&#x695A;&#x95E8;&#x7684;&#x4E16;&#x754C;&quot;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;25 &#x4E2A; Agent &#x7684;&quot;&#x695A;&#x95E8;&#x7684;&#x4E16;&#x754C;&quot;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x5F00;&#x521B;&#x6027;&#x5730;&#x8BC1;&#x660E;&#x4E86; LLM &#x53EF;&#x4EE5;&#x9A71;&#x52A8;&#x53EF;&#x4FE1;&#x7684;&#x793E;&#x4F1A;&#x6A21;&#x62DF;&#xFF0C;&#x4F46;&#x4E5F;&#x66B4;&#x9732;&#x4E86;&#x4E00;&#x4E9B;&#x503C;&#x5F97;&#x6DF1;&#x601D;&#x7684;&#x5C40;&#x9650;&#xFF1A;</p>
<h3 id="1. &#x53EF;&#x4FE1; &#x2260; &#x771F;&#x5B9E;"><a href="#1. &#x53EF;&#x4FE1; &#x2260; &#x771F;&#x5B9E;"></a>1. &#x53EF;&#x4FE1; &#x2260; &#x771F;&#x5B9E;</h3>
<p>Agent &#x7684;&#x884C;&#x4E3A;&quot;&#x770B;&#x8D77;&#x6765;&#x50CF;&#x4EBA;&quot;&#xFF0C;&#x4F46;&#x751F;&#x6210;&#x673A;&#x5236;&#x4E0E;&#x4EBA;&#x7C7B;&#x8BA4;&#x77E5;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x3002;&#x8BBA;&#x6587;&#x81EA;&#x5DF1;&#x4E5F;&#x89C2;&#x5BDF;&#x5230;&#x4E86;&#x51E0;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li><strong>&#x8FC7;&#x5EA6;&#x793C;&#x8C8C;&#xFF1A;</strong> &#x53D7; RLHF &#x6307;&#x4EE4;&#x5FAE;&#x8C03;&#x5F71;&#x54CD;&#xFF0C;Agent &#x4E4B;&#x95F4;&#x7684;&#x5BF9;&#x8BDD;&#x8FC7;&#x4E8E;&#x6B63;&#x5F0F;&#x3002;&#x592B;&#x59BB;&#x95F4;&#x7684;&#x804A;&#x5929;&#x90FD;&#x4EE5;&quot;It was good talking to you as always&quot;&#x7ED3;&#x5C3E;&#x3002;</li>
<li><strong>&#x8FC7;&#x5EA6;&#x5408;&#x4F5C;&#xFF1A;</strong> Isabella &#x51E0;&#x4E4E;&#x4E0D;&#x4F1A;&#x62D2;&#x7EDD;&#x4EFB;&#x4F55;&#x4EBA;&#x7684;&#x5EFA;&#x8BAE;&#xFF0C;&#x5BFC;&#x81F4;&#x5979;&#x7684;&#x6D3E;&#x5BF9;&#x8BA1;&#x5212;&#x4ECE;&quot;&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;&quot;&#x53D8;&#x6210;&#x4E86;&quot;&#x838E;&#x58EB;&#x6BD4;&#x4E9A;&#x6717;&#x8BFB;+&#x804C;&#x4E1A;&#x793E;&#x4EA4;+&#x60C5;&#x4EBA;&#x8282;&#x6D3E;&#x5BF9;&quot;&#x7684;&#x6DF7;&#x5408;&#x4F53;&#x3002;</li>
<li><strong>&#x8BB0;&#x5FC6;&#x5E7B;&#x89C9;&#xFF1A;</strong> &#x867D;&#x7136;&#x6BD4;&#x4F8B;&#x4E0D;&#x9AD8;&#xFF08;1.3%&#xFF09;&#xFF0C;&#x4F46; Agent &#x6709;&#x65F6;&#x4F1A;&quot;&#x6DFB;&#x6CB9;&#x52A0;&#x918B;&quot;&#x2014;&#x2014;Isabella &#x77E5;&#x9053; Sam &#x5728;&#x7ADE;&#x9009;&#xFF0C;&#x4F46;&#x51ED;&#x7A7A;&#x8BF4;&quot;&#x4ED6;&#x660E;&#x5929;&#x8981;&#x53D1;&#x8868;&#x58F0;&#x660E;&quot;&#xFF0C;&#x5B9E;&#x9645;&#x4ECE;&#x672A;&#x6709;&#x8FC7;&#x8FD9;&#x4E2A;&#x5BF9;&#x8BDD;&#x3002;</li>
</ul>
<h3 id="2. &#x6210;&#x672C;&#x4E0E;&#x89C4;&#x6A21;&#x7684;&#x5929;&#x82B1;&#x677F;"><a href="#2. &#x6210;&#x672C;&#x4E0E;&#x89C4;&#x6A21;&#x7684;&#x5929;&#x82B1;&#x677F;"></a>2. &#x6210;&#x672C;&#x4E0E;&#x89C4;&#x6A21;&#x7684;&#x5929;&#x82B1;&#x677F;</h3>
<p>25 &#x4E2A; Agent &#x6A21;&#x62DF;&#x4E24;&#x5929;&#x5C31;&#x82B1;&#x4E86;&#x6570;&#x5343;&#x7F8E;&#x5143;&#xFF08;2023 &#x5E74;&#x7684; GPT-3.5 &#x4EF7;&#x683C;&#xFF09;&#x3002;&#x6BCF;&#x4E2A; Agent &#x6BCF;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x90FD;&#x8981;&#x591A;&#x6B21;&#x8C03;&#x7528; LLM&#xFF08;&#x611F;&#x77E5;&#x2192;&#x68C0;&#x7D22;&#x2192;&#x51B3;&#x7B56;&#x2192;&#x5BF9;&#x8BDD;&#x2192;&#x89C4;&#x5212;&#x66F4;&#x65B0;&#xFF09;&#xFF0C;&#x8FD9;&#x8BA9;&#x89C4;&#x6A21;&#x6269;&#x5C55;&#x975E;&#x5E38;&#x56F0;&#x96BE;&#x3002;</p>
<h3 id="3. &#x771F;&#x6B63;&#x7684;&#x4EF7;&#x503C;&#xFF1A;&#x67B6;&#x6784;&#x8303;&#x5F0F;&#x7684;&#x786E;&#x7ACB;"><a href="#3. &#x771F;&#x6B63;&#x7684;&#x4EF7;&#x503C;&#xFF1A;&#x67B6;&#x6784;&#x8303;&#x5F0F;&#x7684;&#x786E;&#x7ACB;"></a>3. &#x771F;&#x6B63;&#x7684;&#x4EF7;&#x503C;&#xFF1A;&#x67B6;&#x6784;&#x8303;&#x5F0F;&#x7684;&#x786E;&#x7ACB;</h3>
<p>&#x5C3D;&#x7BA1;&#x6709;&#x8FD9;&#x4E9B;&#x5C40;&#x9650;&#xFF0C;Generative Agents &#x7684;&#x6700;&#x5927;&#x8D21;&#x732E;&#x662F;<strong>&#x786E;&#x7ACB;&#x4E86; Agent Memory &#x7684;&#x67B6;&#x6784;&#x8303;&#x5F0F;</strong>&#xFF1A;</p>
<pre><code>Generative Agents &#x4E4B;&#x524D;&#xFF1A;                    Generative Agents &#x4E4B;&#x540E;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;                    &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
Agent &#x8981;&#x4E48;&#x9760;&#x811A;&#x672C;&#xFF0C;                          Agent &#x7684;&#x6807;&#x914D;&#x67B6;&#x6784;&#x53D8;&#x6210;&#x4E86;&#xFF1A;
&#x8981;&#x4E48;&#x9760; RL&#xFF0C;                                  &#x8BB0;&#x5FC6;&#xFF08;&#x5B58;&#x50A8;&#x7ECF;&#x9A8C;&#xFF09;
&#x8981;&#x4E48;&#x9760;&#x5355;&#x6B21; Prompt&#x3002;                          + &#x68C0;&#x7D22;&#xFF08;&#x6309;&#x9700;&#x63D0;&#x53D6;&#xFF09;
                                             + &#x53CD;&#x601D;/&#x63A8;&#x7406;&#xFF08;&#x6DF1;&#x5EA6;&#x7406;&#x89E3;&#xFF09;
&quot;&#x8BB0;&#x5FC6;&quot;&#x53EA;&#x662F; Prompt &#x91CC;&#x7684;                       + &#x89C4;&#x5212;&#xFF08;&#x957F;&#x671F;&#x4E00;&#x81F4;&#x6027;&#xFF09;
&#x51E0;&#x884C;&#x63CF;&#x8FF0;&#x3002;
                                           &#x540E;&#x7EED;&#x51E0;&#x4E4E;&#x6240;&#x6709; Agent &#x6846;&#x67B6;
                                           &#xFF08;AutoGPT, LangChain, 
                                            Manus, MemOS&#xFF09;&#x90FD;&#x6CBF;&#x7528;
                                           &#x4E86;&#x8FD9;&#x4E2A;&#x8303;&#x5F0F;&#x3002;
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Generative Agents &#x672C;&#x8D28;&#x4E0A;&#x56DE;&#x7B54;&#x4E86;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;<strong>&quot;LLM + &#x5408;&#x9002;&#x7684;&#x67B6;&#x6784; = &#x53EF;&#x4FE1;&#x7684;&#x7C7B;&#x4EBA;&#x884C;&#x4E3A;&quot;</strong>&#x3002;</p>
<p>&#x5B83;&#x7684;&#x4E09;&#x4E2A;&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#x2014;&#x2014;&#x8BB0;&#x5FC6;&#x6D41;&#x3001;&#x53CD;&#x601D;&#x3001;&#x89C4;&#x5212;&#x2014;&#x2014;&#x5206;&#x522B;&#x89E3;&#x51B3;&#x4E86; Agent &#x7684;&quot;&#x8BB0;&quot;&#x3001;&quot;&#x609F;&quot;&#x3001;&quot;&#x884C;&quot;&#x4E09;&#x4E2A;&#x7EF4;&#x5EA6;&#x3002;</p>
<p>&#x4ECE;&#x66F4;&#x5927;&#x7684;&#x89C6;&#x89D2;&#x770B;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x5F00;&#x542F;&#x4E86;&quot;<strong>AI &#x793E;&#x4F1A;&#x5B66;</strong>&quot;&#x7684;&#x65B0;&#x8303;&#x5F0F;&#x2014;&#x2014;&#x4E0D;&#x518D;&#x95EE;&quot;AI &#x80FD;&#x4E0D;&#x80FD;&#x901A;&#x8FC7;&#x56FE;&#x7075;&#x6D4B;&#x8BD5;&quot;&#xFF0C;&#x800C;&#x662F;&#x95EE;&quot;&#x4E00;&#x7FA4; AI &#x80FD;&#x4E0D;&#x80FD;&#x81EA;&#x53D1;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x53EF;&#x4FE1;&#x7684;&#x793E;&#x4F1A;&quot;&#x3002;&#x7B54;&#x6848;&#x662F;&#xFF1A;&#x53EF;&#x4EE5;&#xFF0C;&#x4F46;&#x8FD8;&#x5F88;&#x8D35;&#xFF0C;&#x4E5F;&#x8FD8;&#x6709;&#x5F88;&#x591A;&#x8981;&#x6539;&#x8FDB;&#x7684;&#x5730;&#x65B9;&#x3002;&#x8FD9;&#x6761;&#x8DEF;&#x4E0A;&#x7684;&#x540E;&#x7EED;&#x5DE5;&#x4F5C;&#x2014;&#x2014;&#x4ECE; MemOS &#x7684;&#x7CFB;&#x7EDF;&#x5316;&#x8BB0;&#x5FC6;&#x7BA1;&#x7406;&#xFF0C;&#x5230; Manus &#x7684;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#xFF0C;&#x5230; ReAct &#x7684;&#x63A8;&#x7406;-&#x884C;&#x52A8;&#x5FAA;&#x73AF;&#x2014;&#x2014;&#x90FD;&#x5728;&#x4E0D;&#x540C;&#x7EF4;&#x5EA6;&#x4E0A;&#x63A8;&#x8FDB;&#x7740;&#x8FD9;&#x4E2A;&#x613F;&#x666F;&#x3002;</p>
`,E=[{level:2,title:"Generative Agents 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:'1. 记忆流（Memory Stream）——Agent 的"人生日记"',children:[]},{level:3,title:"2. 反思（Reflection）——从碎片记忆到高层洞察",children:[]},{level:3,title:"3. 规划与反应（Planning & Reacting）",children:[]},{level:3,title:"4. 整体架构协同",children:[]}]},{level:2,title:"实验结果",children:[{level:3,title:"涌现社会行为",children:[]},{level:3,title:"消融实验（Controlled Evaluation）",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:'冷思考：25 个 Agent 的"楚门的世界"',children:[{level:3,title:"1. 可信 ≠ 真实",children:[]},{level:3,title:"2. 成本与规模的天花板",children:[]},{level:3,title:"3. 真正的价值：架构范式的确立",children:[]}]},{level:2,title:"总结",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
