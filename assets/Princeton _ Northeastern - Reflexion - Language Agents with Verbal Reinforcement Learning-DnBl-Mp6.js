const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-03-20</em></p>
<p>Princeton &#x548C; Northeastern University &#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>Reflexion</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2303.11366">Reflexion: Language Agents with Verbal Reinforcement Learning</a>&#x300B;&#xFF09;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x5168;&#x65B0;&#x7684; Agent &#x5B66;&#x4E60;&#x8303;&#x5F0F;&#x2014;&#x2014;<strong>&#x4E0D;&#x901A;&#x8FC7;&#x68AF;&#x5EA6;&#x66F4;&#x65B0;&#x6743;&#x91CD;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&quot;&#x8BED;&#x8A00;&#x53CD;&#x601D;&quot;&#x6765;&#x5F3A;&#x5316;&#x5B66;&#x4E60;</strong>&#x3002;
&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;Agent &#x5728;&#x4EFB;&#x52A1;&#x5931;&#x8D25;&#x540E;&#xFF0C;&#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x603B;&#x7ED3;&quot;&#x6211;&#x54EA;&#x91CC;&#x505A;&#x9519;&#x4E86;&#x3001;&#x4E0B;&#x6B21;&#x8BE5;&#x600E;&#x4E48;&#x6539;&quot;&#xFF0C;&#x628A;&#x8FD9;&#x6BB5;&#x53CD;&#x601D;&#x5B58;&#x5165;&#x8BB0;&#x5FC6;&#xFF0C;&#x4E0B;&#x6B21;&#x91CD;&#x8BD5;&#x65F6;&#x4EE5;&#x6B64;&#x4E3A;&#x53C2;&#x7167;&#xFF0C;&#x5FEB;&#x901F;&#x4FEE;&#x6B63;&#x884C;&#x4E3A;&#x3002;&#x8FD9;&#x8BA9; LLM Agent &#x5728;&#x51B3;&#x7B56;&#x3001;&#x63A8;&#x7406;&#x548C;&#x7F16;&#x7A0B;&#x4EFB;&#x52A1;&#x4E0A;&#x90FD;&#x83B7;&#x5F97;&#x4E86;&#x663E;&#x8457;&#x63D0;&#x5347;&#xFF0C;&#x5176;&#x4E2D;&#x5728; HumanEval &#x4EE3;&#x7801;&#x751F;&#x6210;&#x4E0A;&#x8FBE;&#x5230; <strong>91% pass@1</strong>&#xFF0C;&#x8D85;&#x8D8A;&#x4E86;&#x5F53;&#x65F6; GPT-4 &#x7684; 80%&#x3002;</p>
<p><img src="https://arxiv.org/html/2303.11366v4/x1.png" alt="Figure 1: Reflexion &#x5728;&#x51B3;&#x7B56;&#xFF08;AlfWorld&#xFF09;&#x3001;&#x7F16;&#x7A0B;&#xFF08;HumanEval&#xFF09;&#x548C;&#x63A8;&#x7406;&#xFF08;HotPotQA&#xFF09;&#x4E09;&#x7C7B;&#x4EFB;&#x52A1;&#x4E0A;&#x5747;&#x6709;&#x6548;&#x3002;Agent &#x901A;&#x8FC7;&#x8BD5;&#x9519;+&#x81EA;&#x6211;&#x53CD;&#x601D;&#x7684;&#x5FAA;&#x73AF;&#x8FED;&#x4EE3;&#x6539;&#x8FDB;&#x884C;&#x4E3A;&#x3002;"></p>
<h2 id="Reflexion &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#Reflexion &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>Reflexion &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM Agent &#x65E0;&#x6CD5;&#x4ECE;&#x5931;&#x8D25;&#x4E2D;&#x9AD8;&#x6548;&#x5B66;&#x4E60;&#x2014;&#x2014;&#x4F20;&#x7EDF; RL &#x9700;&#x8981;&#x5927;&#x91CF;&#x8BAD;&#x7EC3;&#x6837;&#x672C;&#x548C;&#x68AF;&#x5EA6;&#x66F4;&#x65B0;&#xFF0C;&#x800C; LLM &#x6CA1;&#x6CD5;&#x8FD9;&#x4E48;&#x505A;&#x3002;</strong></p>
<p>2023 &#x5E74;&#x521D;&#xFF0C;&#x57FA;&#x4E8E; LLM &#x7684; Agent&#xFF08;&#x5982; ReAct&#x3001;Toolformer&#x3001;HuggingGPT&#xFF09;&#x5DF2;&#x7ECF;&#x8BC1;&#x660E;&#x4E86; LLM &#x53EF;&#x4EE5;&#x4E0E;&#x5916;&#x90E8;&#x73AF;&#x5883;&#x4EA4;&#x4E92;&#x6267;&#x884C;&#x4EFB;&#x52A1;&#x3002;&#x4F46;&#x5B83;&#x4EEC;&#x9762;&#x4E34;&#x4E00;&#x4E2A;&#x5171;&#x540C;&#x56F0;&#x5883;&#xFF1A;</p>
<pre><code>LLM Agent &#x7684;&#x5B66;&#x4E60;&#x56F0;&#x5883;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x4F20;&#x7EDF; RL &#x7684;&#x8DEF;&#x7EBF;&#xFF1A;
  &#x5931;&#x8D25; &#x2192; &#x8BA1;&#x7B97;&#x68AF;&#x5EA6; &#x2192; &#x66F4;&#x65B0;&#x6743;&#x91CD; &#x2192; &#x4E0B;&#x6B21;&#x505A;&#x5F97;&#x66F4;&#x597D;
  &#x2717; &#x9700;&#x8981;&#x6D77;&#x91CF;&#x8BAD;&#x7EC3;&#x6837;&#x672C;
  &#x2717; &#x9700;&#x8981;&#x53EF;&#x5FAE;&#x5206;&#x7684;&#x5956;&#x52B1;&#x51FD;&#x6570;
  &#x2717; GPT-4 &#x8FD9;&#x79CD;&#x95ED;&#x6E90;&#x6A21;&#x578B;&#x6839;&#x672C;&#x6CA1;&#x6CD5;&#x66F4;&#x65B0;&#x6743;&#x91CD;

In-context Learning &#x7684;&#x8DEF;&#x7EBF;&#xFF1A;
  &#x7ED9;&#x51E0;&#x4E2A;&#x793A;&#x4F8B; &#x2192; &#x671F;&#x671B; LLM &#x4E00;&#x6B21;&#x505A;&#x5BF9;
  &#x2717; &#x5982;&#x679C;&#x505A;&#x9519;&#x4E86;&#x5462;&#xFF1F;&#x2192; &#x518D;&#x968F;&#x673A;&#x8BD5;&#x4E00;&#x6B21;&#xFF1F;
  &#x2717; &#x6CA1;&#x6709;&#x7CFB;&#x7EDF;&#x6027;&#x7684;&#x4ECE;&#x9519;&#x8BEF;&#x4E2D;&#x5B66;&#x4E60;&#x7684;&#x673A;&#x5236;
  &#x2717; &#x76F8;&#x540C;&#x7684;&#x9519;&#x8BEF;&#x53EF;&#x80FD;&#x53CD;&#x590D;&#x72AF;

&#x4EBA;&#x7C7B;&#x7684;&#x8DEF;&#x7EBF;&#xFF08;Reflexion &#x8981;&#x6A21;&#x4EFF;&#x7684;&#xFF09;&#xFF1A;
  &#x5931;&#x8D25; &#x2192; &quot;&#x6211;&#x53CD;&#x601D;&#x4E00;&#x4E0B;&#x54EA;&#x91CC;&#x505A;&#x9519;&#x4E86;&quot;
       &#x2192; &quot;&#x4E0B;&#x6B21;&#x5E94;&#x8BE5;&#x5148;&#x627E;&#x53F0;&#x706F;&#x518D;&#x627E;&#x676F;&#x5B50;&quot;
       &#x2192; &#x628A;&#x8FD9;&#x4E2A;&#x6559;&#x8BAD;&#x8BB0;&#x4F4F;
       &#x2192; &#x4E0B;&#x6B21;&#x5C1D;&#x8BD5;&#x65F6;&#x53C2;&#x7167;&#x8FD9;&#x4E2A;&#x6559;&#x8BAD;
  &#x2713; &#x51E0;&#x6B21;&#x5C1D;&#x8BD5;&#x5C31;&#x80FD;&#x5B66;&#x4F1A;&#x590D;&#x6742;&#x4EFB;&#x52A1;
  &#x2713; &#x4E0D;&#x9700;&#x8981;&#x4FEE;&#x6539;&#x5927;&#x8111;&quot;&#x6743;&#x91CD;&quot;
  &#x2713; &#x7ECF;&#x9A8C;&#x662F;&#x53EF;&#x89E3;&#x91CA;&#x7684;&#x81EA;&#x7136;&#x8BED;&#x8A00;
</code></pre>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x662F; LLM Agent &#x5B9E;&#x7528;&#x5316;&#x7684;&#x6838;&#x5FC3;&#x969C;&#x788D;&#x3002;</strong></p>
<ul>
<li><strong>&#x4E00;&#x6B21;&#x505A;&#x5BF9;&#x5F88;&#x96BE;&#xFF1A;</strong> &#x5373;&#x4F7F;&#x662F; GPT-4&#xFF0C;&#x5728; HumanEval &#x4E0A;&#x7684; pass@1 &#x4E5F;&#x53EA;&#x6709; 80%&#xFF0C;&#x610F;&#x5473;&#x7740;&#x6BCF; 5 &#x9053;&#x9898;&#x5C31;&#x6709; 1 &#x9053;&#x505A;&#x4E0D;&#x5BF9;&#x3002;&#x5728;&#x66F4;&#x590D;&#x6742;&#x7684;&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x9519;&#x8BEF;&#x7387;&#x66F4;&#x9AD8;&#x3002;</li>
<li><strong>&#x91CD;&#x8BD5;&#x4E0D;&#x7B49;&#x4E8E;&#x5B66;&#x4E60;&#xFF1A;</strong> &#x7B80;&#x5355;&#x5730;&#x8BA9; Agent &#x91CD;&#x8BD5;&#xFF08;temperature &gt; 0 &#x968F;&#x673A;&#x91C7;&#x6837;&#xFF09;&#xFF0C;&#x5E76;&#x4E0D;&#x4F1A;&#x7CFB;&#x7EDF;&#x6027;&#x5730;&#x6539;&#x8FDB;&#x2014;&#x2014;Agent &#x53EF;&#x80FD;&#x5728;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#x72AF;&#x76F8;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x9519;&#x8BEF;&#x3002;</li>
<li><strong>&#x4F20;&#x7EDF; RL &#x4E0D;&#x73B0;&#x5B9E;&#xFF1A;</strong> &#x5BF9;&#x4E8E;&#x95ED;&#x6E90; LLM&#xFF08;GPT-4&#xFF09;&#x6216;&#x8D85;&#x5927;&#x89C4;&#x6A21;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#xFF0C;&#x5FAE;&#x8C03;&#x6210;&#x672C;&#x6781;&#x9AD8;&#x4E14;&#x4E0D;&#x5207;&#x5B9E;&#x9645;&#x3002;&#x9700;&#x8981;&#x4E00;&#x79CD;<strong>&#x4E0D;&#x52A8;&#x6743;&#x91CD;</strong>&#x7684;&#x5B66;&#x4E60;&#x65B9;&#x5F0F;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>LLM &#x5177;&#x5907;&#x4E86;&#x81EA;&#x6211;&#x8BC4;&#x4F30;&#x7684;&#x6D8C;&#x73B0;&#x80FD;&#x529B;&#xFF1A;</strong> Reflexion &#x7684;&#x6838;&#x5FC3;&#x4F9D;&#x8D56; LLM &#x80FD;&#x51C6;&#x786E;&#x5730;&quot;&#x8BCA;&#x65AD;&quot;&#x81EA;&#x5DF1;&#x7684;&#x9519;&#x8BEF;&#x3002;&#x8FD9;&#x5728;&#x8F83;&#x5F31;&#x7684;&#x6A21;&#x578B;&#x4E0A;&#x51E0;&#x4E4E;&#x4E0D;&#x53EF;&#x80FD;&#x2014;&#x2014;&#x8BBA;&#x6587;&#x7684;&#x5B9E;&#x9A8C;&#x4E5F;&#x8BC1;&#x5B9E;&#xFF0C;&#x7528;&#x5F00;&#x6E90;&#x5C0F;&#x6A21;&#x578B;&#xFF08;StarChat-beta&#xFF09;&#x65F6; Reflexion &#x5B8C;&#x5168;&#x65E0;&#x6548;&#x3002;</li>
<li><strong>ReAct &#x7B49;&#x6846;&#x67B6;&#x5960;&#x5B9A;&#x4E86;&#x57FA;&#x7840;&#xFF1A;</strong> Reflexion &#x662F;&#x5EFA;&#x7ACB;&#x5728; ReAct &#x7684;&#x63A8;&#x7406;-&#x884C;&#x52A8;&#x8303;&#x5F0F;&#x4E4B;&#x4E0A;&#x7684;&#x3002;&#x6CA1;&#x6709; ReAct &#x7684;&#x53EF;&#x89C2;&#x5BDF;&#x8F68;&#x8FF9;&#xFF0C;&#x5C31;&#x6CA1;&#x6709;&#x53EF;&#x4F9B;&#x53CD;&#x601D;&#x7684;&quot;&#x539F;&#x6750;&#x6599;&quot;&#x3002;</li>
<li><strong>Self-Refine &#x7B49;&#x524D;&#x5E8F;&#x5DE5;&#x4F5C;&#x7684;&#x5C40;&#x9650;&#xFF1A;</strong> Self-Refine &#x53EA;&#x80FD;&#x5728;&#x5355;&#x6B21;&#x751F;&#x6210;&#x4EFB;&#x52A1;&#x4E0A;&#x4F18;&#x5316;&#xFF08;&#x5982;&#x6539;&#x8FDB;&#x4E00;&#x6BB5;&#x6587;&#x672C;&#xFF09;&#xFF0C;&#x4E0D;&#x652F;&#x6301;&#x591A;&#x6B65;&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x8DE8; trial &#x7684;&#x8BB0;&#x5FC6;&#x673A;&#x5236;&#x3002;Reflexion &#x628A;&#x8FD9;&#x4E2A;&#x601D;&#x8DEF;&#x6269;&#x5C55;&#x5230;&#x4E86;&#x5B8C;&#x6574;&#x7684; Agent &#x5FAA;&#x73AF;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>Reflexion &#x7684;&#x67B6;&#x6784;&#x7531;&#x4E09;&#x4E2A;&#x6A21;&#x578B;&#x7EC4;&#x6210;&#xFF1A;<strong>Actor&#xFF08;&#x884C;&#x52A8;&#x8005;&#xFF09;&#x2192; Evaluator&#xFF08;&#x8BC4;&#x4F30;&#x8005;&#xFF09;&#x2192; Self-Reflection&#xFF08;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF09;</strong>&#xFF0C;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;<strong>&#x60C5;&#x666F;&#x8BB0;&#x5FC6;&#xFF08;Episodic Memory&#xFF09;</strong> &#x6765;&#x5B58;&#x50A8;&#x53CD;&#x601D;&#x3002;</p>
<p><img src="https://arxiv.org/html/2303.11366v4/x2.png" alt="Figure 2: (a) Reflexion &#x67B6;&#x6784;&#x56FE;&#x2014;&#x2014;Actor &#x751F;&#x6210;&#x8F68;&#x8FF9;&#xFF0C;Evaluator &#x8BC4;&#x5206;&#xFF0C;Self-Reflection &#x6A21;&#x578B;&#x751F;&#x6210;&#x8BED;&#x8A00;&#x53CD;&#x9988;&#x5B58;&#x5165;&#x8BB0;&#x5FC6;&#xFF0C;&#x4E0B;&#x4E00;&#x8F6E; Actor &#x53C2;&#x7167;&#x8BB0;&#x5FC6;&#x6539;&#x8FDB;&#x884C;&#x4E3A;&#x3002;(b) Reflexion &#x5F3A;&#x5316;&#x7B97;&#x6CD5;&#x4F2A;&#x4EE3;&#x7801;&#x3002;"></p>
<h3 id="1. Actor&#xFF08;&#x884C;&#x52A8;&#x8005;&#xFF09;&#x2014;&#x2014;&#x6267;&#x884C;&#x4EFB;&#x52A1;"><a href="#1. Actor&#xFF08;&#x884C;&#x52A8;&#x8005;&#xFF09;&#x2014;&#x2014;&#x6267;&#x884C;&#x4EFB;&#x52A1;"></a>1. Actor&#xFF08;&#x884C;&#x52A8;&#x8005;&#xFF09;&#x2014;&#x2014;&#x6267;&#x884C;&#x4EFB;&#x52A1;</h3>
<p>Actor &#x5C31;&#x662F;&#x4E00;&#x4E2A; LLM Agent&#xFF0C;&#x53EF;&#x4EE5;&#x57FA;&#x4E8E; CoT &#x6216; ReAct &#x751F;&#x6210;&#x884C;&#x52A8;&#x3002;&#x5173;&#x952E;&#x533A;&#x522B;&#x5728;&#x4E8E;&#xFF1A;&#x5B83;&#x5728;&#x751F;&#x6210;&#x884C;&#x52A8;&#x65F6;&#xFF0C;&#x4E0D;&#x4EC5;&#x53C2;&#x8003;&#x5F53;&#x524D;&#x73AF;&#x5883;&#x72B6;&#x6001;&#xFF08;&#x77ED;&#x671F;&#x8BB0;&#x5FC6;&#xFF09;&#xFF0C;&#x8FD8;&#x53C2;&#x8003;&#x4E4B;&#x524D;&#x8BD5;&#x9519;&#x79EF;&#x7D2F;&#x7684;<strong>&#x53CD;&#x601D;&#x8BB0;&#x5F55;&#xFF08;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#xFF09;</strong>&#x3002;</p>
<h3 id="2. Evaluator&#xFF08;&#x8BC4;&#x4F30;&#x8005;&#xFF09;&#x2014;&#x2014;&#x5224;&#x65AD;&#x505A;&#x5F97;&#x597D;&#x4E0D;&#x597D;"><a href="#2. Evaluator&#xFF08;&#x8BC4;&#x4F30;&#x8005;&#xFF09;&#x2014;&#x2014;&#x5224;&#x65AD;&#x505A;&#x5F97;&#x597D;&#x4E0D;&#x597D;"></a>2. Evaluator&#xFF08;&#x8BC4;&#x4F30;&#x8005;&#xFF09;&#x2014;&#x2014;&#x5224;&#x65AD;&#x505A;&#x5F97;&#x597D;&#x4E0D;&#x597D;</h3>
<p>&#x8BC4;&#x4F30;&#x8005;&#x8D1F;&#x8D23;&#x628A;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#x8F6C;&#x5316;&#x4E3A;&#x53CD;&#x9988;&#x4FE1;&#x53F7;&#x3002;&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x7C7B;&#x578B;&#xFF0C;&#x8BC4;&#x4F30;&#x65B9;&#x5F0F;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code>&#x4E0D;&#x540C;&#x4EFB;&#x52A1;&#x7684;&#x8BC4;&#x4F30;&#x7B56;&#x7565;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF08;AlfWorld&#xFF09;&#xFF1A;
  &#x2192; &#x73AF;&#x5883;&#x672C;&#x8EAB;&#x53EA;&#x53CD;&#x9988;&quot;&#x5B8C;&#x6210;/&#x672A;&#x5B8C;&#x6210;&quot;
  &#x2192; &#x8865;&#x5145;&#x542F;&#x53D1;&#x5F0F;&#x89C4;&#x5219;&#xFF1A;&#x540C;&#x4E00;&#x52A8;&#x4F5C;&#x91CD;&#x590D; 3 &#x6B21;&#x4EE5;&#x4E0A; = &#x9677;&#x5165;&#x5FAA;&#x73AF;
  &#x2192; &#x6216;&#x884C;&#x52A8;&#x8D85;&#x8FC7; 30 &#x6B65; = &#x89C4;&#x5212;&#x4F4E;&#x6548;

&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#xFF08;HotPotQA&#xFF09;&#xFF1A;
  &#x2192; &#x7B54;&#x6848;&#x7684;&#x7CBE;&#x786E;&#x5339;&#x914D;&#xFF08;Exact Match&#xFF09;
  &#x2192; &#x5BF9;&#x5C31;&#x662F;&#x5BF9;&#xFF0C;&#x9519;&#x5C31;&#x662F;&#x9519;

&#x7F16;&#x7A0B;&#x4EFB;&#x52A1;&#xFF08;HumanEval&#xFF09;&#xFF1A;
  &#x2192; Agent &#x81EA;&#x5DF1;&#x751F;&#x6210;&#x5355;&#x5143;&#x6D4B;&#x8BD5;&#xFF08;&#x6700;&#x591A; 6 &#x4E2A;&#xFF09;
  &#x2192; &#x7528;&#x6D4B;&#x8BD5;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x53CD;&#x9988;&#x4FE1;&#x53F7;
  &#x2192; &#x8FD9;&#x662F; Reflexion &#x6700;&#x5DE7;&#x5999;&#x7684;&#x8BBE;&#x8BA1;&#x2014;&#x2014;&#x4E0D;&#x4F9D;&#x8D56; ground truth &#x6D4B;&#x8BD5;&#x7528;&#x4F8B;
</code></pre>
<h3 id="3. Self-Reflection&#xFF08;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF09;&#x2014;&#x2014;&#x628A;&#x5931;&#x8D25;&#x8F6C;&#x5316;&#x4E3A;&#x7ECF;&#x9A8C;"><a href="#3. Self-Reflection&#xFF08;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF09;&#x2014;&#x2014;&#x628A;&#x5931;&#x8D25;&#x8F6C;&#x5316;&#x4E3A;&#x7ECF;&#x9A8C;"></a>3. Self-Reflection&#xFF08;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF09;&#x2014;&#x2014;&#x628A;&#x5931;&#x8D25;&#x8F6C;&#x5316;&#x4E3A;&#x7ECF;&#x9A8C;</h3>
<p>&#x8FD9;&#x662F; Reflexion &#x6700;&#x6838;&#x5FC3;&#x7684;&#x521B;&#x65B0;&#x3002;&#x5F53; Evaluator &#x8FD4;&#x56DE;&#x5931;&#x8D25;&#x4FE1;&#x53F7;&#x65F6;&#xFF0C;Self-Reflection &#x6A21;&#x578B;&#x5206;&#x6790;&#x5F53;&#x524D;&#x8F68;&#x8FF9;&#xFF0C;&#x751F;&#x6210;&#x4E00;&#x6BB5;<strong>&#x5177;&#x4F53;&#x7684;&#x3001;&#x53EF;&#x64CD;&#x4F5C;&#x7684;</strong>&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x53CD;&#x9988;&#xFF1A;</p>
<pre><code>&#x53CD;&#x601D; vs &#x7B80;&#x5355;&#x91CD;&#x8BD5;&#x7684;&#x533A;&#x522B;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x573A;&#x666F;&#xFF1A;AlfWorld &#x4EFB;&#x52A1;&#x2014;&#x2014;&quot;&#x7528;&#x53F0;&#x706F;&#x68C0;&#x67E5;&#x676F;&#x5B50;&quot;

&#x7B80;&#x5355;&#x91CD;&#x8BD5;&#xFF1A;
  Trial 1: &#x5148;&#x627E;&#x676F;&#x5B50; &#x2192; &#x627E;&#x5230;&#x4E86; &#x2192; &#x518D;&#x627E;&#x53F0;&#x706F; &#x2192; use desklamp &#x2192; &#x5931;&#x8D25;
  Trial 2: &#x5148;&#x627E;&#x676F;&#x5B50; &#x2192; &#x627E;&#x5230;&#x4E86; &#x2192; &#x518D;&#x627E;&#x53F0;&#x706F; &#x2192; use desklamp &#x2192; &#x8FD8;&#x662F;&#x5931;&#x8D25;
  &#xFF08;&#x53CD;&#x590D;&#x72AF;&#x540C;&#x6837;&#x7684;&#x9519;&#x8BEF;&#xFF09;

Reflexion&#xFF1A;
  Trial 1: &#x5148;&#x627E;&#x676F;&#x5B50; &#x2192; &#x627E;&#x5230;&#x4E86; &#x2192; &#x518D;&#x627E;&#x53F0;&#x706F; &#x2192; use desklamp &#x2192; &#x5931;&#x8D25;
  &#x53CD;&#x601D;: &quot;&#x4EFB;&#x52A1;&#x8BF4;&#x7528;&#x53F0;&#x706F;&apos;&#x68C0;&#x67E5;&apos;&#x676F;&#x5B50;&#xFF0C;&#x6211;&#x5E94;&#x8BE5;&#x5148;&#x5230;&#x53F0;&#x706F;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;
         &#x62FF;&#x8D77;&#x676F;&#x5B50;&#x540E;&#x518D;&#x4F7F;&#x7528;&#x53F0;&#x706F;&#x3002;&#x6211;&#x6CE8;&#x610F;&#x5230;&#x53F0;&#x706F;&#x5728; desk 1 &#x4E0A;&#x3002;
         &#x4E0B;&#x6B21;&#x6211;&#x5E94;&#x8BE5;&#x5148;&#x53BB; desk 1 &#x627E;&#x53F0;&#x706F;&#xFF0C;&#x518D;&#x62FF;&#x676F;&#x5B50;&#x3002;&quot;
  Trial 2: &#x5148;&#x53BB; desk 1 &#x2192; &#x62FF;&#x676F;&#x5B50; &#x2192; use desklamp &#x2192; &#x6210;&#x529F;&#xFF01;

&#x573A;&#x666F;&#xFF1A;HotPotQA &#x591A;&#x8DF3;&#x95EE;&#x7B54;&#x2014;&#x2014;&quot;Grown-Ups &#x4E2D;&#x7684;&#x54EA;&#x4E2A;&#x6F14;&#x5458;&#x5728; &apos;Allo &apos;Allo! &#x4E2D;&#x6700;&#x51FA;&#x540D;&#xFF1F;&quot;

  Trial 1: &#x641C;&#x7D22; &quot;Grown-Ups&quot; &#x2192; &#x627E;&#x5230;&#x6F14;&#x5458;&#x5217;&#x8868; &#x2192; &#x641C;&#x7D22; &quot;&apos;Allo &apos;Allo!&quot; &#x2192; &#x641C;&#x7D22;&#x5931;&#x8D25;
  &#x53CD;&#x601D;: &quot;&#x6211;&#x641C;&#x9519;&#x4E86;&#x6807;&#x9898;&#x683C;&#x5F0F;&#x3002;&#x5E94;&#x8BE5;&#x76F4;&#x63A5;&#x641C;&#x6F14;&#x5458;&#x540D;&#x5B57; Sam Kelly
         &#x6765;&#x627E;&#x4ED6;&#x5728; &apos;Allo &apos;Allo! &#x4E2D;&#x7684;&#x89D2;&#x8272;&#x3002;&quot;
  Trial 2: &#x641C;&#x7D22; &quot;Grown-Ups&quot; &#x2192; &#x627E;&#x5230; Sam Kelly &#x2192; &#x641C;&#x7D22; &quot;Sam Kelly&quot;
           &#x2192; &#x53D1;&#x73B0;&#x4ED6;&#x6700;&#x51FA;&#x540D;&#x7684;&#x89D2;&#x8272;&#x662F; Captain Hans Geering &#x2192; &#x6B63;&#x786E;&#xFF01;
</code></pre>
<h3 id="4. &#x8BB0;&#x5FC6;&#x7BA1;&#x7406;"><a href="#4. &#x8BB0;&#x5FC6;&#x7BA1;&#x7406;"></a>4. &#x8BB0;&#x5FC6;&#x7BA1;&#x7406;</h3>
<pre><code>&#x53CC;&#x5C42;&#x8BB0;&#x5FC6;&#x7ED3;&#x6784;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x77ED;&#x671F;&#x8BB0;&#x5FC6;&#xFF08;Short-term Memory&#xFF09;&#xFF1A;
  = &#x5F53;&#x524D; trial &#x7684;&#x5B8C;&#x6574;&#x8F68;&#x8FF9;
  &#x2192; &#x63D0;&#x4F9B;&#x7CBE;&#x7EC6;&#x7684;&#x5373;&#x65F6;&#x4E0A;&#x4E0B;&#x6587;

&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#xFF08;Long-term Memory&#xFF09;&#xFF1A;
  = &#x8FC7;&#x5F80; trial &#x7684;&#x53CD;&#x601D;&#x6458;&#x8981;&#xFF08;&#x6700;&#x591A;&#x4FDD;&#x7559; 3 &#x6761;&#xFF09;
  &#x2192; &#x63D0;&#x4F9B;&#x8DE8; trial &#x7684;&#x7ECF;&#x9A8C;&#x6559;&#x8BAD;

&#x4E24;&#x8005;&#x534F;&#x540C;&#xFF1A;
  &#x77ED;&#x671F;&#x8BB0;&#x5FC6;&#x8BA9; Agent &#x77E5;&#x9053;&quot;&#x6211;&#x73B0;&#x5728;&#x5728;&#x505A;&#x4EC0;&#x4E48;&quot;
  &#x957F;&#x671F;&#x8BB0;&#x5FC6;&#x8BA9; Agent &#x77E5;&#x9053;&quot;&#x4E4B;&#x524D;&#x6211;&#x72AF;&#x8FC7;&#x4EC0;&#x4E48;&#x9519;&quot;
</code></pre>
<h3 id="5. &#x5B8C;&#x6574;&#x5FAA;&#x73AF;"><a href="#5. &#x5B8C;&#x6574;&#x5FAA;&#x73AF;"></a>5. &#x5B8C;&#x6574;&#x5FAA;&#x73AF;</h3>
<pre><code>Reflexion &#x4E3B;&#x5FAA;&#x73AF;&#xFF08;Algorithm 1&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x521D;&#x59CB;&#x5316;: Actor(M_a), Evaluator(M_e), Self-Reflection(M_sr)
&#x521D;&#x59CB;&#x5316;: &#x8BB0;&#x5FC6; mem = []

while &#x672A;&#x901A;&#x8FC7;&#x8BC4;&#x4F30; and &#x8BD5;&#x6B21; &lt; &#x6700;&#x5927;&#x8F6E;&#x6570;:
    &#x3C4;_t = Actor &#x751F;&#x6210;&#x8F68;&#x8FF9;&#xFF08;&#x53C2;&#x8003; mem&#xFF09;
    r_t = Evaluator &#x8BC4;&#x4F30; &#x3C4;_t
    if r_t == &#x901A;&#x8FC7;:
        return &#x6210;&#x529F;
    sr_t = Self-Reflection &#x5206;&#x6790; {&#x3C4;_t, r_t} &#x2192; &#x751F;&#x6210;&#x53CD;&#x601D;&#x6587;&#x672C;
    mem.append(sr_t)   # &#x5B58;&#x5165;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#xFF08;&#x6700;&#x591A; 3 &#x6761;&#xFF09;
    t += 1

return &#x5931;&#x8D25;&#xFF08;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x8F6E;&#x6570;&#xFF09;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF1A;AlfWorld"><a href="#&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF1A;AlfWorld"></a>&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF1A;AlfWorld</h3>
<p><img src="https://arxiv.org/html/2303.11366v4/x3.png" alt="Figure 3: (a) AlfWorld 134 &#x4E2A;&#x4EFB;&#x52A1;&#x7684;&#x7D2F;&#x8BA1;&#x5B8C;&#x6210;&#x7387;&#x3002;ReAct + Reflexion&#xFF08;&#x542F;&#x53D1;&#x5F0F;&#x8BC4;&#x4F30;&#xFF09;&#x5728; 12 &#x8F6E;&#x5185;&#x4ECE; ~75% &#x63D0;&#x5347;&#x5230; 97%&#xFF08;130/134 &#x5B8C;&#x6210;&#xFF09;&#x3002;(b) &#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x5206;&#x7C7B;&#x2014;&#x2014;Reflexion &#x51E0;&#x4E4E;&#x6D88;&#x9664;&#x4E86;&#x6240;&#x6709;&quot;&#x5E7B;&#x89C9;&#x6301;&#x6709;&#x7269;&#x54C1;&quot;&#x7684;&#x9519;&#x8BEF;&#x3002;"></p>
<pre><code>AlfWorld&#xFF08;134 &#x4E2A;&#x5BB6;&#x5C45;&#x51B3;&#x7B56;&#x4EFB;&#x52A1;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
ReAct only:         ~75%&#xFF08;&#x4E4B;&#x540E;&#x4E0D;&#x518D;&#x63D0;&#x5347;&#xFF0C;&#x5E7B;&#x89C9;&#x7387; 22%&#xFF09;
ReAct + Reflexion:   97%&#xFF08;130/134&#xFF09;&#xFF0C;12 &#x8F6E;&#x9010;&#x6B65;&#x63D0;&#x5347;

&#x5173;&#x952E;&#x73B0;&#x8C61;&#xFF1A;
  &#x2022; Trial 1&#x2192;2 &#x6709;&#x4E00;&#x4E2A;&#x8DF3;&#x8DC3;&#xFF08;&#x7ACB;&#x5373;&#x7EA0;&#x6B63;&#x660E;&#x663E;&#x9519;&#x8BEF;&#xFF09;
  &#x2022; Trial 2&#x2192;12 &#x7A33;&#x6B65;&#x63D0;&#x5347;&#xFF08;&#x9010;&#x6B65;&#x79EF;&#x7D2F;&#x641C;&#x7D22;&#x7ECF;&#x9A8C;&#xFF09;
  &#x2022; &#x57FA;&#x7EBF; ReAct &#x5728; Trial 6-7 &#x540E;&#x5B8C;&#x5168;&#x505C;&#x6EDE;
</code></pre>
<h3 id="&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#xFF1A;HotPotQA"><a href="#&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#xFF1A;HotPotQA"></a>&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#xFF1A;HotPotQA</h3>
<p><img src="https://arxiv.org/html/2303.11366v4/x4.png" alt="Figure 4: HotPotQA &#x4E0A;&#x7684;&#x8868;&#x73B0;&#x3002;(a) Reflexion ReAct vs CoT&#xFF1B;(b) Reflexion CoT (GT) &#x5728;&#x6709; ground truth context &#x65F6;&#x7684;&#x63A8;&#x7406;&#x6539;&#x8FDB;&#xFF1B;(c) &#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x2014;&#x2014;&#x81EA;&#x6211;&#x53CD;&#x601D;&#x6BD4;&#x5355;&#x7EAF;&#x7684;&quot;&#x60C5;&#x666F;&#x8BB0;&#x5FC6;&#x56DE;&#x653E;&quot;&#x591A;&#x63D0;&#x5347; 8%&#x3002;"></p>
<pre><code>HotPotQA&#xFF08;100 &#x4E2A;&#x591A;&#x8DF3;&#x95EE;&#x7B54;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
                     &#x57FA;&#x7EBF;     + Reflexion
CoT (GT) + GPT-4:   68%      &#x2192; 80%  (+12%)
ReAct + GPT-4:      39%      &#x2192; 51%  (+12%)
ReAct + GPT-3.5:    26%      &#x2192; 38%  (+12%)

&#x5173;&#x952E;&#x6D88;&#x878D;&#xFF1A;
  CoT (GT) baseline:     60%
  + &#x60C5;&#x666F;&#x8BB0;&#x5FC6;&#xFF08;EPM&#xFF09;:     66%  (+6%)
  + &#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF08;Reflexion&#xFF09;: 74%  (+8% over EPM)
  &#x2192; &#x53CD;&#x601D;&#x7684;&#x4EF7;&#x503C; &gt; &#x7B80;&#x5355;&#x56DE;&#x653E;&#x4E0A;&#x4E00;&#x8F6E;&#x8F68;&#x8FF9;
</code></pre>
<h3 id="&#x7F16;&#x7A0B;&#x4EFB;&#x52A1;&#xFF1A;HumanEval"><a href="#&#x7F16;&#x7A0B;&#x4EFB;&#x52A1;&#xFF1A;HumanEval"></a>&#x7F16;&#x7A0B;&#x4EFB;&#x52A1;&#xFF1A;HumanEval</h3>
<pre><code>&#x4EE3;&#x7801;&#x751F;&#x6210; pass@1 &#x51C6;&#x786E;&#x7387;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
                    &#x6B64;&#x524D; SOTA     GPT-4 &#x57FA;&#x7EBF;     Reflexion
HumanEval (Python)  65.8%        80.1%          91.0%  &#x2190; &#x65B0; SOTA
HumanEval (Rust)    -            60.0%          68.0%
MBPP (Python)       67.7%        80.1%          77.1%  &#x2190; &#x4F4E;&#x4E8E;&#x57FA;&#x7EBF;
MBPP (Rust)         -            70.9%          75.4%
Leetcode Hard       -            7.5%           15.0%  &#x2190; 2x &#x63D0;&#x5347;

&#x4E3A;&#x4EC0;&#x4E48; MBPP Python &#x4F4E;&#x4E8E;&#x57FA;&#x7EBF;&#xFF1F;
  &#x2192; MBPP &#x7684; false positive rate (16.3%) &#x8FDC;&#x9AD8;&#x4E8E; HumanEval (1.4%)
  &#x2192; Agent &#x81EA;&#x5DF1;&#x751F;&#x6210;&#x7684;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#x4E86;&#xFF0C;&#x4F46;&#x5B9E;&#x9645;&#x7B54;&#x6848;&#x662F;&#x9519;&#x7684;
  &#x2192; &#x5BFC;&#x81F4; Agent &#x8FC7;&#x65E9;&#x63D0;&#x4EA4;&#x4E86;&#x9519;&#x8BEF;&#x7B54;&#x6848;
</code></pre>
<h3 id="&#x7F16;&#x7A0B;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;"><a href="#&#x7F16;&#x7A0B;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;"></a>&#x7F16;&#x7A0B;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;</h3>
<pre><code>HumanEval Rust&#xFF08;50 &#x9053;&#x6700;&#x96BE;&#x9898;&#x76EE;&#xFF09;&#x6D88;&#x878D;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
&#x5B8C;&#x6574; Reflexion:                    68%
&#x53BB;&#x6389;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF08;&#x53EA;&#x7559;&#x6D4B;&#x8BD5;&#x53CD;&#x9988;&#xFF09;:       60%  &#x2192; &#x5B8C;&#x5168;&#x65E0;&#x63D0;&#x5347;
&#x53BB;&#x6389;&#x6D4B;&#x8BD5;&#x751F;&#x6210;&#xFF08;&#x53EA;&#x7559;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF09;:       52%  &#x2192; &#x53CD;&#x800C;&#x66F4;&#x5DEE;
GPT-4 &#x57FA;&#x7EBF;:                        60%

&#x7ED3;&#x8BBA;&#xFF1A;
  &#x2022; &#x6D4B;&#x8BD5;&#x751F;&#x6210; + &#x81EA;&#x6211;&#x53CD;&#x601D; &#x5FC5;&#x987B;&#x534F;&#x540C;&#x624D;&#x6709;&#x6548;
  &#x2022; &#x5149;&#x6709;&#x6D4B;&#x8BD5;&#x6CA1;&#x6709;&#x53CD;&#x601D; = &#x77E5;&#x9053;&#x9519;&#x4E86;&#x4F46;&#x4E0D;&#x77E5;&#x9053;&#x600E;&#x4E48;&#x6539;
  &#x2022; &#x5149;&#x6709;&#x53CD;&#x601D;&#x6CA1;&#x6709;&#x6D4B;&#x8BD5; = &#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x91CC;&#x9519;&#x4E86;&#x5C31;&#x4E71;&#x6539;
</code></pre>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>Reflexion &#x7684;&quot;&#x8BED;&#x8A00;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&quot;&#x8303;&#x5F0F;&#x6709;&#x660E;&#x786E;&#x7684;&#x4F18;&#x52BF;&#x548C;&#x5C40;&#x9650;&#xFF1A;</p>
<ul>
<li><strong>vs. Self-Refine&#xFF1A;</strong> Self-Refine &#x53EA;&#x5728;&#x5355;&#x6B21;&#x751F;&#x6210;&#x4E0A;&#x4F18;&#x5316;&#xFF08;&#x5982;&#x6539;&#x8FDB;&#x4E00;&#x5C01;&#x90AE;&#x4EF6;&#xFF09;&#xFF0C;&#x4E0D;&#x652F;&#x6301;&#x591A;&#x6B65;&#x51B3;&#x7B56;&#x548C;&#x8DE8; trial &#x8BB0;&#x5FC6;&#x3002;Reflexion &#x5C06;&#x81EA;&#x6211;&#x6539;&#x8FDB;&#x6269;&#x5C55;&#x5230;&#x4E86;&#x5B8C;&#x6574;&#x7684; Agent &#x5FAA;&#x73AF;&#x3002;</li>
<li><strong>vs. VOYAGER&#xFF1A;</strong> <a href="./NVIDIA%20%26%20Caltech%20-%20Voyager%20-%20An%20Open-Ended%20Embodied%20Agent%20with%20LLMs.md">VOYAGER</a> &#x4E5F;&#x6709;&#x8FED;&#x4EE3;&#x6539;&#x8FDB;&#x673A;&#x5236;&#xFF08;&#x8FED;&#x4EE3;&#x63D0;&#x793A;+&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#xFF09;&#xFF0C;&#x4F46; VOYAGER &#x5B58;&#x7684;&#x662F;<strong>&#x4EE3;&#x7801;&#x6280;&#x80FD;</strong>&#xFF0C;Reflexion &#x5B58;&#x7684;&#x662F;<strong>&#x8BED;&#x8A00;&#x7ECF;&#x9A8C;</strong>&#x3002;VOYAGER &#x7684;&#x6280;&#x80FD;&#x5E93;&#x66F4;&#x7CBE;&#x786E;&#x53EF;&#x6267;&#x884C;&#xFF0C;Reflexion &#x7684;&#x53CD;&#x601D;&#x8BB0;&#x5FC6;&#x66F4;&#x7075;&#x6D3B;&#x901A;&#x7528;&#x3002;</li>
<li><strong>vs. &#x4F20;&#x7EDF; RL &#x5FAE;&#x8C03;&#xFF1A;</strong> Reflexion &#x5B8C;&#x5168;&#x4E0D;&#x52A8;&#x6743;&#x91CD;&#xFF0C;&#x9002;&#x7528;&#x4E8E;&#x95ED;&#x6E90;&#x6A21;&#x578B;&#x3002;&#x4F46;&#x5B83;&#x7684;&quot;&#x5B66;&#x4E60;&quot;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x5728; context window &#x91CC;&#x586B;&#x5145;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x53D7;&#x9650;&#x4E8E;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#xFF08;&#x8BBA;&#x6587;&#x53EA;&#x4FDD;&#x7559; 3 &#x6761;&#x53CD;&#x601D;&#xFF09;&#x3002;</li>
<li><strong>&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x80FD;&#x529B;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x5728; StarChat-beta&#xFF08;&#x5F00;&#x6E90;&#x5C0F;&#x6A21;&#x578B;&#xFF09;&#x4E0A;&#x6D4B;&#x8BD5; Reflexion&#xFF0C;&#x7ED3;&#x679C;&#x5B8C;&#x5168;&#x65E0;&#x6548;&#x2014;&#x2014;&#x5C0F;&#x6A21;&#x578B;&#x6CA1;&#x6709;&quot;&#x51C6;&#x786E;&#x8BCA;&#x65AD;&#x9519;&#x8BEF;&quot;&#x7684;&#x6D8C;&#x73B0;&#x80FD;&#x529B;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740; Reflexion &#x662F;&#x4E00;&#x79CD;<strong>&#x53EA;&#x5BF9;&#x5F3A;&#x6A21;&#x578B;&#x6709;&#x6548;</strong>&#x7684;&#x6280;&#x672F;&#x3002;</li>
</ul>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;&#x53CD;&#x601D;&#x7684;&#x6781;&#x9650;&#x5728;&#x54EA;&#xFF1F;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;&#x53CD;&#x601D;&#x7684;&#x6781;&#x9650;&#x5728;&#x54EA;&#xFF1F;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;&#x53CD;&#x601D;&#x7684;&#x6781;&#x9650;&#x5728;&#x54EA;&#xFF1F;</h2>
<h3 id="1. &#x5C40;&#x90E8;&#x6700;&#x4F18;&#x7684;&#x9677;&#x9631;"><a href="#1. &#x5C40;&#x90E8;&#x6700;&#x4F18;&#x7684;&#x9677;&#x9631;"></a>1. &#x5C40;&#x90E8;&#x6700;&#x4F18;&#x7684;&#x9677;&#x9631;</h3>
<p>&#x8BBA;&#x6587;&#x5766;&#x627F; Reflexion &#x5728; WebShop&#xFF08;&#x7535;&#x5546;&#x641C;&#x7D22;&#x4EFB;&#x52A1;&#xFF09;&#x4E0A;&#x5B8C;&#x5168;&#x65E0;&#x6548;&#x2014;&#x2014;4 &#x8F6E;&#x4E4B;&#x540E;&#x6BEB;&#x65E0;&#x6539;&#x8FDB;&#x3002;&#x539F;&#x56E0;&#x662F;&#x641C;&#x7D22;&#x4EFB;&#x52A1;&#x9700;&#x8981;<strong>&#x9AD8;&#x5EA6;&#x591A;&#x6837;&#x5316;&#x7684;&#x63A2;&#x7D22;</strong>&#xFF08;&#x6362;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x641C;&#x7D22;&#x8BCD;&#xFF09;&#xFF0C;&#x800C; Reflexion &#x7684;&#x53CD;&#x601D;&#x5F80;&#x5F80;&#x53EA;&#x662F;&#x5BF9;&#x73B0;&#x6709;&#x7B56;&#x7565;&#x7684;&#x5FAE;&#x8C03;&#xFF0C;&#x7F3A;&#x4E4F;&#x771F;&#x6B63;&#x7684;&quot;&#x8DF3;&#x51FA;&#x6846;&#x67B6;&quot;&#x80FD;&#x529B;&#x3002;</p>
<pre><code>Reflexion &#x64C5;&#x957F;&#x7684; vs &#x4E0D;&#x64C5;&#x957F;&#x7684;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x64C5;&#x957F;&#xFF08;&#x9519;&#x8BEF;&#x53EF;&#x5B9A;&#x4F4D;&#x3001;&#x4FEE;&#x590D;&#x8DEF;&#x5F84;&#x660E;&#x786E;&#xFF09;&#xFF1A;
  &quot;&#x6211;&#x5E94;&#x8BE5;&#x5148;&#x627E;&#x53F0;&#x706F;&#x518D;&#x627E;&#x676F;&#x5B50;&quot; &#x2192; &#x884C;&#x52A8;&#x987A;&#x5E8F;&#x8C03;&#x6574;
  &quot;&#x641C;&#x7D22; Sam Kelly &#x800C;&#x4E0D;&#x662F; &apos;Allo &apos;Allo!&quot; &#x2192; &#x641C;&#x7D22;&#x7B56;&#x7565;&#x4FEE;&#x6B63;
  &quot;&#x51FD;&#x6570;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x6CA1;&#x5904;&#x7406;&quot; &#x2192; &#x4EE3;&#x7801;&#x903B;&#x8F91;&#x4FEE;&#x590D;

&#x4E0D;&#x64C5;&#x957F;&#xFF08;&#x9700;&#x8981;&#x521B;&#x9020;&#x6027;&#x63A2;&#x7D22;&#xFF09;&#xFF1A;
  &quot;&#x6211;&#x641C; &apos;red running shoes&apos; &#x6CA1;&#x7ED3;&#x679C;&quot; &#x2192; &#x8BE5;&#x641C;&#x4EC0;&#x4E48;&#xFF1F;
  &#x2192; &#x53CD;&#x601D;&#x53EA;&#x80FD;&#x8BF4;&quot;&#x8BD5;&#x8BD5;&#x4E0D;&#x540C;&#x7684;&#x641C;&#x7D22;&#x8BCD;&quot;
  &#x2192; &#x4F46;&#x5177;&#x4F53;&#x641C;&#x4EC0;&#x4E48;&#xFF1F;&#x6A21;&#x578B;&#x4E0D;&#x77E5;&#x9053;
  &#x2192; &#x672C;&#x8D28;&#x662F; exploration vs exploitation &#x7684;&#x8001;&#x95EE;&#x9898;
</code></pre>
<h3 id="2. &quot;&#x8BED;&#x8A00;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&quot;&#x7684;&#x672C;&#x8D28;"><a href="#2. &quot;&#x8BED;&#x8A00;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&quot;&#x7684;&#x672C;&#x8D28;"></a>2. &quot;&#x8BED;&#x8A00;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&quot;&#x7684;&#x672C;&#x8D28;</h3>
<p>Reflexion &#x6700;&#x6DF1;&#x5C42;&#x7684;&#x6D1E;&#x5BDF;&#x662F;&#xFF1A;<strong>&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&quot;&#x8BED;&#x4E49;&#x68AF;&#x5EA6;&quot;&#x6765;&#x4F18;&#x5316; Agent &#x7B56;&#x7565;</strong>&#x3002;&#x4F20;&#x7EDF; RL &#x7528;&#x6807;&#x91CF;&#x5956;&#x52B1;&#xFF08;+1/-1&#xFF09;&#x66F4;&#x65B0;&#x6743;&#x91CD;&#xFF0C;Reflexion &#x7528;&#x4E00;&#x6BB5;&#x8BDD;&#xFF08;&quot;&#x4E0B;&#x6B21;&#x5E94;&#x8BE5;&#x5148;&#x68C0;&#x67E5; desk 1&quot;&#xFF09;&#x66F4;&#x65B0;&#x4E0A;&#x4E0B;&#x6587;&#x3002;&#x8FD9;&#x79CD;&quot;&#x8BED;&#x4E49;&#x68AF;&#x5EA6;&quot;&#x6BD4;&#x6807;&#x91CF;&#x5956;&#x52B1;&#x4FE1;&#x606F;&#x91CF;&#x5927;&#x5F97;&#x591A;&#xFF0C;&#x4F46;&#x4E5F;&#x4F9D;&#x8D56;&#x4E8E; LLM &#x7684;&#x81EA;&#x6211;&#x8BCA;&#x65AD;&#x51C6;&#x786E;&#x6027;&#x3002;</p>
<pre><code>Reflexion &#x7684;&#x8303;&#x5F0F;&#x610F;&#x4E49;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x4F20;&#x7EDF; RL:           reward &#x2192; gradient &#x2192; weight update
Reflexion:         failure &#x2192; self-reflection &#x2192; memory update
                            &#x2191;                    &#x2191;
                     &quot;&#x8BED;&#x4E49;&#x68AF;&#x5EA6;&quot;            &quot;&#x8BED;&#x4E49;&#x6743;&#x91CD;&quot;
                   &#xFF08;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x53CD;&#x9988;&#xFF09;      &#xFF08;context window &#x4E2D;&#x7684;&#x7ECF;&#x9A8C;&#xFF09;

&#x4F18;&#x52BF;&#xFF1A;&#x53EF;&#x89E3;&#x91CA;&#x3001;&#x4F4E;&#x6210;&#x672C;&#x3001;&#x4E0D;&#x9700;&#x8981;&#x6A21;&#x578B;&#x8BBF;&#x95EE;&#x6743;&#x9650;
&#x52A3;&#x52BF;&#xFF1A;&#x53D7;&#x9650;&#x4E8E;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#x3001;&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x81EA;&#x7701;&#x80FD;&#x529B;&#x3001;&#x65E0;&#x6536;&#x655B;&#x4FDD;&#x8BC1;
</code></pre>
<h3 id="3. &#x5728; Agent &#x65CF;&#x8C31;&#x4E2D;&#x7684;&#x5B9A;&#x4F4D;"><a href="#3. &#x5728; Agent &#x65CF;&#x8C31;&#x4E2D;&#x7684;&#x5B9A;&#x4F4D;"></a>3. &#x5728; Agent &#x65CF;&#x8C31;&#x4E2D;&#x7684;&#x5B9A;&#x4F4D;</h3>
<pre><code>2023 &#x5E74; Agent &#x5B66;&#x4E60;&#x8303;&#x5F0F;&#xFF1A;

  ReAct               Reflexion              VOYAGER
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;               &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;              &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5355;&#x6B21;&#x63A8;&#x7406;+&#x884C;&#x52A8;        &#x591A;&#x8F6E;&#x8BD5;&#x9519;+&#x8BED;&#x8A00;&#x53CD;&#x601D;       &#x6301;&#x7EED;&#x63A2;&#x7D22;+&#x4EE3;&#x7801;&#x6280;&#x80FD;&#x5E93;
  &#x65E0;&#x8DE8;&#x8BD5;&#x6B21;&#x5B66;&#x4E60;          &#x8DE8;&#x8BD5;&#x6B21;&#x8BED;&#x8A00;&#x8BB0;&#x5FC6;          &#x8DE8;&#x4EFB;&#x52A1;&#x4EE3;&#x7801;&#x8BB0;&#x5FC6;
  &quot;&#x505A;&#x4E00;&#x6B21;&#x5C31;&#x5B8C;&quot;         &quot;&#x505A;&#x9519;&#x4E86;&#x6211;&#x53CD;&#x601D;&quot;          &quot;&#x505A;&#x5BF9;&#x4E86;&#x6211;&#x5B58;&#x4EE3;&#x7801;&quot;
       &#x2502;                    &#x2502;                      &#x2502;
       &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
                            &#x2502;
              Generative Agents: &#x4E09;&#x8005;&#x7684;&#x7EFC;&#x5408;&#x4F53;
              &#x8BB0;&#x5FC6;&#x6D41;(&#x2248;Reflexion&#x8BB0;&#x5FC6;) + &#x89C4;&#x5212;(&#x2248;ReAct) + &#x6280;&#x80FD;&#x590D;&#x7528;(&#x2248;VOYAGER)
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Reflexion &#x7684;&#x6838;&#x5FC3;&#x8D21;&#x732E;&#x662F;&#x63D0;&#x51FA;&#x4E86;**&quot;&#x8BED;&#x8A00;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&quot;**&#x8FD9;&#x4E2A;&#x5168;&#x65B0;&#x8303;&#x5F0F;&#x2014;&#x2014;&#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x53CD;&#x601D;&#x4EE3;&#x66FF;&#x68AF;&#x5EA6;&#x66F4;&#x65B0;&#xFF0C;&#x8BA9; LLM Agent &#x5728;&#x4E0D;&#x4FEE;&#x6539;&#x6743;&#x91CD;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x4ECE;&#x5931;&#x8D25;&#x4E2D;&#x5B66;&#x4E60;&#x3002;</p>
<p>&#x5B83;&#x7684;&#x4E09;&#x4E2A;&#x7EC4;&#x4EF6;&#x2014;&#x2014;Actor &#x6267;&#x884C;&#x3001;Evaluator &#x8BC4;&#x4F30;&#x3001;Self-Reflection &#x53CD;&#x601D;&#x2014;&#x2014;&#x5F62;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&quot;&#x8BD5;&#x9519;-&#x53CD;&#x601D;-&#x6539;&#x8FDB;&quot;&#x7684;&#x95ED;&#x73AF;&#x3002;&#x5728;&#x51B3;&#x7B56;&#xFF08;AlfWorld +22%&#xFF09;&#x3001;&#x63A8;&#x7406;&#xFF08;HotPotQA +20%&#xFF09;&#x548C;&#x7F16;&#x7A0B;&#xFF08;HumanEval 91%&#xFF09;&#x4E09;&#x7C7B;&#x4EFB;&#x52A1;&#x4E0A;&#x5747;&#x53D6;&#x5F97;&#x4E86;&#x663E;&#x8457;&#x63D0;&#x5347;&#x3002;</p>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x6700;&#x6DF1;&#x8FDC;&#x7684;&#x5F71;&#x54CD;&#x4E0D;&#x662F;&#x5177;&#x4F53;&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x800C;&#x662F;&#x5B83;&#x8BC1;&#x660E;&#x4E86;&#x4E00;&#x4E2A;&#x53EF;&#x80FD;&#x6027;&#xFF1A;<strong>LLM &#x7684;&quot;&#x5B66;&#x4E60;&quot;&#x4E0D;&#x4E00;&#x5B9A;&#x9700;&#x8981;&#x68AF;&#x5EA6;&#x2014;&#x2014;&#x8BED;&#x8A00;&#x672C;&#x8EAB;&#x5C31;&#x53EF;&#x4EE5;&#x662F;&#x4F18;&#x5316;&#x4FE1;&#x53F7;</strong>&#x3002;&#x8FD9;&#x4E3A;&#x540E;&#x7EED;&#x6240;&#x6709;&#x4E0D;&#x52A8;&#x6743;&#x91CD;&#x7684; Agent &#x6539;&#x8FDB;&#x65B9;&#x6CD5;&#xFF08;&#x5305;&#x62EC; VOYAGER &#x7684;&#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x3001;<a href="./Uniphore%20-%20Pre-Act%20-%20Multi-Step%20Planning%20and%20Reasoning%20Improves%20Acting.md">Pre-Act</a> &#x7684;&#x591A;&#x6B65;&#x89C4;&#x5212;&#x8C03;&#x6574;&#xFF09;&#x5960;&#x5B9A;&#x4E86;&#x7406;&#x8BBA;&#x57FA;&#x7840;&#x3002;</p>
`,E=[{level:2,title:"Reflexion 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"1. Actor（行动者）——执行任务",children:[]},{level:3,title:"2. Evaluator（评估者）——判断做得好不好",children:[]},{level:3,title:"3. Self-Reflection（自我反思）——把失败转化为经验",children:[]},{level:3,title:"4. 记忆管理",children:[]},{level:3,title:"5. 完整循环",children:[]}]},{level:2,title:"实验结果",children:[{level:3,title:"决策任务：AlfWorld",children:[]},{level:3,title:"推理任务：HotPotQA",children:[]},{level:3,title:"编程任务：HumanEval",children:[]},{level:3,title:"编程消融实验",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"冷思考：反思的极限在哪？",children:[{level:3,title:"1. 局部最优的陷阱",children:[]},{level:3,title:'2. "语言强化学习"的本质',children:[]},{level:3,title:"3. 在 Agent 族谱中的定位",children:[]}]},{level:2,title:"总结",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
