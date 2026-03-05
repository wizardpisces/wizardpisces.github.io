const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-05-25</em></p>
<p>NVIDIA&#x3001;Caltech&#x3001;UT Austin &#x548C; Stanford &#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>VOYAGER</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2305.16291">Voyager: An Open-Ended Embodied Agent with Large Language Models</a>&#x300B;&#xFF09;&#x662F; LLM &#x9A71;&#x52A8;&#x7684; <strong>Embodied Agent&#xFF08;&#x5177;&#x8EAB;&#x667A;&#x80FD;&#x4F53;&#xFF09;</strong> &#x9886;&#x57DF;&#x7684;&#x6807;&#x6746;&#x6027;&#x5DE5;&#x4F5C;&#x3002;
&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x8BA9; GPT-4 &#x5728; Minecraft &#x4E2D;<strong>&#x81EA;&#x4E3B;&#x63A2;&#x7D22;&#x3001;&#x81EA;&#x4E3B;&#x5B66;&#x6280;&#x80FD;&#x3001;&#x81EA;&#x4E3B;&#x79EF;&#x7D2F;&#x77E5;&#x8BC6;&#x5E93;</strong>&#x2014;&#x2014;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x7C7B;&#x5E72;&#x9884;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x68AF;&#x5EA6;&#x8BAD;&#x7EC3;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x5956;&#x52B1;&#x51FD;&#x6570;&#xFF0C;Agent &#x51ED;&#x501F;&quot;&#x597D;&#x5947;&#x5FC3;&quot;&#x9A71;&#x52A8;&#xFF0C;&#x6301;&#x7EED;&#x53D1;&#x73B0;&#x65B0;&#x7269;&#x54C1;&#x3001;&#x89E3;&#x9501;&#x79D1;&#x6280;&#x6811;&#x3001;&#x7A7F;&#x8D8A;&#x591A;&#x79CD;&#x5730;&#x5F62;&#xFF0C;&#x5E76;&#x628A;&#x5B66;&#x5230;&#x7684;&#x6280;&#x80FD;&#x5B58;&#x5165;&#x4E00;&#x4E2A;<strong>&#x4E0D;&#x65AD;&#x589E;&#x957F;&#x7684;&#x4EE3;&#x7801;&#x5E93;</strong>&#xFF0C;&#x4F9B;&#x672A;&#x6765;&#x590D;&#x7528;&#x3002;</p>
<p><img src="https://arxiv.org/html/2305.16291v2/x1.png" alt="Figure 1: VOYAGER &#x5728; Minecraft &#x4E2D;&#x6301;&#x7EED;&#x53D1;&#x73B0;&#x65B0;&#x7269;&#x54C1;&#x548C;&#x6280;&#x80FD;&#xFF0C;&#x663E;&#x8457;&#x8D85;&#x8D8A;&#x6240;&#x6709;&#x57FA;&#x7EBF;&#x65B9;&#x6CD5;&#x3002;X &#x8F74;&#x4E3A; Prompt &#x8FED;&#x4EE3;&#x6B21;&#x6570;&#xFF0C;VOYAGER &#x5728; 160 &#x6B21;&#x8FED;&#x4EE3;&#x4E2D;&#x53D1;&#x73B0; 63 &#x79CD;&#x72EC;&#x7279;&#x7269;&#x54C1;&#xFF0C;&#x662F;&#x5BF9;&#x624B;&#x7684; 3.3 &#x500D;&#x3002;"></p>
<h2 id="VOYAGER &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#VOYAGER &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>VOYAGER &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x73B0;&#x6709;&#x7684; LLM Agent &#x65E0;&#x6CD5;&quot;&#x7EC8;&#x8EAB;&#x5B66;&#x4E60;&quot;&#x2014;&#x2014;&#x5B83;&#x4EEC;&#x4E0D;&#x4F1A;&#x79EF;&#x7D2F;&#x6280;&#x80FD;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x81EA;&#x4E3B;&#x63A2;&#x7D22;&#x3002;</strong></p>
<p>&#x5728; VOYAGER &#x4E4B;&#x524D;&#xFF0C;LLM &#x9A71;&#x52A8;&#x7684; Agent&#xFF08;&#x5982; ReAct&#x3001;Reflexion&#x3001;AutoGPT&#xFF09;&#x867D;&#x7136;&#x80FD;&#x5B8C;&#x6210;&#x6307;&#x5B9A;&#x4EFB;&#x52A1;&#xFF0C;&#x4F46;&#x6709;&#x4E00;&#x4E2A;&#x6839;&#x672C;&#x7F3A;&#x9677;&#xFF1A;</p>
<pre><code>&#x73B0;&#x6709; Agent &#x7684;&#x56F0;&#x5883;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

ReAct / Reflexion:
  &#x2192; &#x7ED9;&#x5B9A;&#x4EFB;&#x52A1; &#x2192; &#x63A8;&#x7406;+&#x884C;&#x52A8; &#x2192; &#x5B8C;&#x6210;/&#x5931;&#x8D25; &#x2192; &#x7ED3;&#x675F;
  &#x2192; &#x4E0D;&#x4F1A;&#x4E3B;&#x52A8;&#x63D0;&#x51FA;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;
  &#x2192; &#x6BCF;&#x6B21;&#x4EFB;&#x52A1;&#x90FD;&#x4ECE;&#x96F6;&#x5F00;&#x59CB;&#xFF0C;&#x4E0D;&#x79EF;&#x7D2F;&#x7ECF;&#x9A8C;

AutoGPT:
  &#x2192; &#x7ED9;&#x5B9A;&#x9AD8;&#x5C42;&#x76EE;&#x6807; &#x2192; &#x5206;&#x89E3;&#x5B50;&#x4EFB;&#x52A1; &#x2192; &#x9010;&#x4E2A;&#x6267;&#x884C;
  &#x2192; &#x6709;&#x4EFB;&#x52A1;&#x5206;&#x89E3;&#x80FD;&#x529B;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x6280;&#x80FD;&#x79EF;&#x7D2F;
  &#x2192; &#x4E0D;&#x4F1A;&#x628A;&#x6210;&#x529F;&#x7ECF;&#x9A8C;&#x5B58;&#x4E0B;&#x6765;&#x4F9B;&#x672A;&#x6765;&#x590D;&#x7528;

&#x5171;&#x540C;&#x95EE;&#x9898;&#xFF1A;
  &#x2717; &#x65E0;&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#x2014;&#x2014;&#x4E0D;&#x77E5;&#x9053;&quot;&#x63A5;&#x4E0B;&#x6765;&#x8BE5;&#x5B66;&#x4EC0;&#x4E48;&quot;
  &#x2717; &#x65E0;&#x6280;&#x80FD;&#x5E93;&#x2014;&#x2014;&#x5B66;&#x8FC7;&#x7684;&#x4E1C;&#x897F;&#x4E0D;&#x4FDD;&#x5B58;&#xFF0C;&#x4E0B;&#x6B21;&#x8FD8;&#x5F97;&#x4ECE;&#x5934;&#x6765;
  &#x2717; &#x65E0;&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#x2014;&#x2014;&#x4E0D;&#x77E5;&#x9053;&#x81EA;&#x5DF1;&#x662F;&#x5426;&#x771F;&#x7684;&#x5B8C;&#x6210;&#x4E86;&#x4EFB;&#x52A1;
</code></pre>
<p>&#x4EE5; Minecraft &#x4E3A;&#x4F8B;&#xFF1A;&#x4E00;&#x4E2A;&#x597D;&#x7684;&#x73A9;&#x5BB6;&#x5E94;&#x8BE5;&#x50CF;&#x4EBA;&#x7C7B;&#x4E00;&#x6837;&#x2014;&#x2014;&#x5148;&#x5B66;&#x780D;&#x6728;&#x5934;&#x3001;&#x505A;&#x5DE5;&#x4F5C;&#x53F0;&#xFF0C;&#x518D;&#x5B66;&#x91C7;&#x77FF;&#x3001;&#x70BC;&#x94C1;&#xFF0C;&#x6700;&#x540E;&#x6311;&#x6218;&#x6316;&#x94BB;&#x77F3;&#x3002;&#x6BCF;&#x4E2A;&#x6280;&#x80FD;&#x90FD;&#x662F;&#x5728;&#x4E4B;&#x524D;&#x6280;&#x80FD;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x590D;&#x5408;&#x800C;&#x6765;&#x7684;&#x3002;&#x4F46;&#x73B0;&#x6709; Agent &#x8981;&#x4E48;&#x65E0;&#x6CD5;&#x81EA;&#x4E3B;&#x8BBE;&#x5B9A;&#x5B66;&#x4E60;&#x76EE;&#x6807;&#xFF0C;&#x8981;&#x4E48;&#x65E0;&#x6CD5;&#x628A;&#x5B66;&#x5230;&#x7684;&#x6280;&#x80FD;&#x5B58;&#x8D77;&#x6765;&#x590D;&#x7528;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x662F; Agent &#x4ECE;&quot;&#x5DE5;&#x5177;&quot;&#x8D70;&#x5411;&quot;&#x81EA;&#x4E3B;&#x667A;&#x80FD;&#x4F53;&quot;&#x7684;&#x6838;&#x5FC3;&#x6311;&#x6218;&#x3002;</strong></p>
<ul>
<li><strong>Minecraft &#x662F;&#x5B8C;&#x7F8E;&#x7684;&#x6D4B;&#x8BD5;&#x5E8A;&#xFF1A;</strong> &#x4E0D;&#x50CF;&#x56FD;&#x9645;&#x8C61;&#x68CB;&#x6216; Atari &#x6709;&#x56FA;&#x5B9A;&#x76EE;&#x6807;&#x548C;&#x5956;&#x52B1;&#xFF0C;Minecraft &#x662F;<strong>&#x5B8C;&#x5168;&#x5F00;&#x653E;</strong>&#x7684;&#x2014;&#x2014;&#x6CA1;&#x6709;&#x7EC8;&#x70B9;&#x3001;&#x6CA1;&#x6709;&#x56FA;&#x5B9A;&#x5267;&#x60C5;&#x3001;&#x7A0B;&#x5E8F;&#x5316;&#x751F;&#x6210;&#x7684;&#x65E0;&#x9650;&#x4E16;&#x754C;&#x3002;&#x8FD9;&#x8981;&#x6C42; Agent &#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&quot;&#x8BE5;&#x5E72;&#x5565;&quot;&#x548C;&quot;&#x600E;&#x4E48;&#x5E72;&quot;&#x3002;</li>
<li><strong>&#x7EC8;&#x8EAB;&#x5B66;&#x4E60;&#x662F; AGI &#x7684;&#x57FA;&#x77F3;&#xFF1A;</strong> &#x5982;&#x679C;&#x4E00;&#x4E2A; Agent &#x6BCF;&#x6B21;&#x4EFB;&#x52A1;&#x90FD;&#x4ECE;&#x96F6;&#x5F00;&#x59CB;&#x3001;&#x4E0D;&#x80FD;&#x590D;&#x7528;&#x4E4B;&#x524D;&#x7684;&#x7ECF;&#x9A8C;&#xFF0C;&#x90A3;&#x5B83;&#x6C38;&#x8FDC;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&quot;&#x4E00;&#x6B21;&#x6027;&#x811A;&#x672C;&#x6267;&#x884C;&#x5668;&quot;&#x3002;&#x771F;&#x6B63;&#x7684;&#x667A;&#x80FD;&#x4F53;&#x9700;&#x8981;<strong>&#x6301;&#x7EED;&#x8FDB;&#x5316;</strong>&#x3002;</li>
<li><strong>RL &#x5DF2;&#x7ECF;&#x89E6;&#x9876;&#xFF1A;</strong> DreamerV3 &#x548C; VPT &#x5728; Minecraft &#x4E2D;&#x53D6;&#x5F97;&#x4E86;&#x4E0D;&#x9519;&#x7684;&#x6210;&#x7EE9;&#xFF0C;&#x4F46;&#x5B83;&#x4EEC;&#x9700;&#x8981;&#x6D77;&#x91CF;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x3001;&#x7CBE;&#x5FC3;&#x8BBE;&#x8BA1;&#x7684;&#x5956;&#x52B1;&#x51FD;&#x6570;&#xFF0C;&#x800C;&#x4E14;&#x5B66;&#x5230;&#x7684;&#x7B56;&#x7565;&#x5F88;&#x96BE;&#x8FC1;&#x79FB;&#x5230;&#x65B0;&#x73AF;&#x5883;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>GPT-4 &#x7684;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x80FD;&#x529B;&#x8FBE;&#x5230;&#x4E34;&#x754C;&#x70B9;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x7684;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x663E;&#x793A;&#xFF0C;GPT-3.5 &#x7684;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x8D28;&#x91CF;&#x8FDC;&#x4E0D;&#x5982; GPT-4&#xFF08;&#x53D1;&#x73B0;&#x7269;&#x54C1;&#x6570;&#x76F8;&#x5DEE; 5.7 &#x500D;&#xFF09;&#x3002;&#x7528;&#x4EE3;&#x7801;&#x4F5C;&#x4E3A;&#x884C;&#x52A8;&#x7A7A;&#x95F4;&#x662F; VOYAGER &#x7684;&#x6838;&#x5FC3;&#x8BBE;&#x8BA1;&#xFF0C;&#x800C;&#x8FD9;&#x4F9D;&#x8D56;&#x4E8E; GPT-4 &#x7EA7;&#x522B;&#x7684;&#x7F16;&#x7A0B;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&quot;&#x4EE3;&#x7801;&#x5373;&#x884C;&#x52A8;&quot;&#x8303;&#x5F0F;&#x7684;&#x6210;&#x719F;&#xFF1A;</strong> Code as Policies&#x3001;ProgPrompt &#x7B49;&#x524D;&#x5E8F;&#x5DE5;&#x4F5C;&#x8BC1;&#x660E;&#x4E86;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x6BD4;&#x4F4E;&#x7EA7;&#x52A8;&#x4F5C;&#x66F4;&#x597D;&#x7684;&#x884C;&#x52A8;&#x7A7A;&#x95F4;&#x2014;&#x2014;&#x4EE3;&#x7801;&#x5929;&#x7136;&#x5177;&#x6709;<strong>&#x53EF;&#x7EC4;&#x5408;&#x6027;</strong>&#xFF08;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x51FD;&#x6570;&#xFF09;&#x3001;<strong>&#x53EF;&#x89E3;&#x91CA;&#x6027;</strong>&#xFF08;&#x4EBA;&#x7C7B;&#x53EF;&#x8BFB;&#xFF09;&#x548C;<strong>&#x65F6;&#x95F4;&#x6269;&#x5C55;&#x6027;</strong>&#xFF08;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x5305;&#x542B;&#x591A;&#x6B65;&#x64CD;&#x4F5C;&#xFF09;&#x3002;</li>
<li><strong>&#x5F00;&#x653E;&#x4E16;&#x754C;&#x73AF;&#x5883;&#x6846;&#x67B6;&#xFF08;MineDojo&#xFF09;&#x7684;&#x53EF;&#x7528;&#x6027;&#xFF1A;</strong> &#x6709;&#x4E86; MineDojo &#x548C; Mineflayer API&#xFF0C;Agent &#x53EF;&#x4EE5;&#x901A;&#x8FC7; JavaScript &#x4EE3;&#x7801;&#x63A7;&#x5236; Minecraft &#x89D2;&#x8272;&#xFF0C;&#x4E0D;&#x518D;&#x9700;&#x8981;&#x5904;&#x7406;&#x50CF;&#x7D20;&#x7EA7;&#x89C6;&#x89C9;&#x8F93;&#x5165;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>VOYAGER &#x7684;&#x6838;&#x5FC3;&#x662F;&#x4E09;&#x4E2A;&#x534F;&#x540C;&#x5DE5;&#x4F5C;&#x7684;&#x6A21;&#x5757;&#xFF1A;<strong>&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF08;Automatic Curriculum&#xFF09;&#x2192; &#x6280;&#x80FD;&#x5E93;&#xFF08;Skill Library&#xFF09;&#x2192; &#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x673A;&#x5236;&#xFF08;Iterative Prompting Mechanism&#xFF09;</strong>&#x3002;</p>
<p><img src="https://arxiv.org/html/2305.16291v2/x2.png" alt="Figure 2: VOYAGER &#x4E09;&#x5927;&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#x2014;&#x2014;&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#x8D1F;&#x8D23;&#x63D0;&#x51FA;&#x63A2;&#x7D22;&#x76EE;&#x6807;&#xFF0C;&#x6280;&#x80FD;&#x5E93;&#x8D1F;&#x8D23;&#x5B58;&#x50A8;&#x548C;&#x68C0;&#x7D22;&#x53EF;&#x590D;&#x7528;&#x7684;&#x4EE3;&#x7801;&#x6280;&#x80FD;&#xFF0C;&#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x673A;&#x5236;&#x901A;&#x8FC7;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x3001;&#x6267;&#x884C;&#x9519;&#x8BEF;&#x548C;&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#x6301;&#x7EED;&#x6539;&#x8FDB;&#x4EE3;&#x7801;&#x3002;"></p>
<h3 id="1. &#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF08;Automatic Curriculum&#xFF09;&#x2014;&#x2014;&quot;&#x63A5;&#x4E0B;&#x6765;&#x8BE5;&#x5B66;&#x4EC0;&#x4E48;&#xFF1F;&quot;"><a href="#1. &#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF08;Automatic Curriculum&#xFF09;&#x2014;&#x2014;&quot;&#x63A5;&#x4E0B;&#x6765;&#x8BE5;&#x5B66;&#x4EC0;&#x4E48;&#xFF1F;&quot;"></a>1. &#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF08;Automatic Curriculum&#xFF09;&#x2014;&#x2014;&quot;&#x63A5;&#x4E0B;&#x6765;&#x8BE5;&#x5B66;&#x4EC0;&#x4E48;&#xFF1F;&quot;</h3>
<p>&#x4E0D;&#x540C;&#x4E8E;&#x7ED9; Agent &#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x76EE;&#x6807;&#xFF08;&quot;&#x53BB;&#x6316;&#x94BB;&#x77F3;&quot;&#xFF09;&#xFF0C;VOYAGER &#x8BA9; GPT-4 &#x6839;&#x636E;&#x5F53;&#x524D;&#x72B6;&#x6001;<strong>&#x81EA;&#x4E3B;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;</strong>&#x3002;</p>
<p><img src="https://arxiv.org/html/2305.16291v2/x3.png" alt="Figure 3: &#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#x7684;&#x4EFB;&#x52A1;&#x63D0;&#x8BAE;&#x3002;GPT-4 &#x6839;&#x636E; Agent &#x5F53;&#x524D;&#x7684;&#x80CC;&#x5305;&#x3001;&#x4F4D;&#x7F6E;&#x3001;&#x751F;&#x7269;&#x7FA4;&#x7CFB;&#x3001;&#x5DF2;&#x5B8C;&#x6210;/&#x5931;&#x8D25;&#x7684;&#x4EFB;&#x52A1;&#x7B49;&#x4FE1;&#x606F;&#xFF0C;&#x81EA;&#x5E95;&#x5411;&#x4E0A;&#x5730;&#x63D0;&#x51FA;&#x9002;&#x5408;&#x5F53;&#x524D;&#x80FD;&#x529B;&#x6C34;&#x5E73;&#x7684;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x3002;"></p>
<pre><code>&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x8F93;&#x5165;&#x7ED9; GPT-4 &#x7684;&#x4FE1;&#x606F;&#xFF1A;
  &#x2022; &#x5F53;&#x524D;&#x80CC;&#x5305;: {&apos;cobblestone&apos;: 4, &apos;stone_pickaxe&apos;: 1, &apos;coal&apos;: 1, ...}
  &#x2022; &#x5F53;&#x524D;&#x88C5;&#x5907;: &#x77F3;&#x9550;
  &#x2022; &#x9644;&#x8FD1;&#x65B9;&#x5757;: dirt, water, iron_ore, stone
  &#x2022; &#x751F;&#x7269;&#x7FA4;&#x7CFB;: plains
  &#x2022; &#x5DF2;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;: [&quot;&#x780D;&#x6811;&quot;, &quot;&#x505A;&#x5DE5;&#x4F5C;&#x53F0;&quot;, &quot;&#x505A;&#x6728;&#x9550;&quot;, &quot;&#x505A;&#x77F3;&#x9550;&quot;, &quot;&#x91C7;&#x7164;&quot;]
  &#x2022; &#x5DF2;&#x5931;&#x8D25;&#x4EFB;&#x52A1;: [&quot;&#x505A;&#x94C1;&#x9550;&quot;]&#xFF08;&#x4E4B;&#x524D;&#x94C1;&#x77FF;&#x4E0D;&#x591F;&#xFF09;

&#x6307;&#x4EE4;&#x6838;&#x5FC3;: &quot;&#x6211;&#x7684;&#x7EC8;&#x6781;&#x76EE;&#x6807;&#x662F;&#x53D1;&#x73B0;&#x5C3D;&#x53EF;&#x80FD;&#x591A;&#x6837;&#x5316;&#x7684;&#x4E1C;&#x897F;&quot;

GPT-4 &#x7684;&#x63A8;&#x7406; &#x2192; &#x8F93;&#x51FA;:
  &quot;&#x4F60;&#x5DF2;&#x7ECF;&#x6709;&#x4E86;&#x77F3;&#x9550;&#x548C;&#x7164;&#xFF0C;&#x9644;&#x8FD1;&#x6709;&#x94C1;&#x77FF;&#x3002;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x5E94;&#x8BE5;&#x662F;&#x91C7;&#x96C6;&#x94C1;&#x77FF;&#x3002;&quot;
  Task: &quot;Mine 3 iron_ore&quot;
</code></pre>
<p><strong>&#x6E10;&#x8FDB;&#x5F0F;&#x4FE1;&#x606F;&#x66B4;&#x9732;&#xFF1A;</strong> &#x4E3A;&#x4E86;&#x8BA9; Agent &#x4ECE;&#x57FA;&#x7840;&#x6280;&#x80FD;&#x5F00;&#x59CB;&#xFF0C;&#x8BBA;&#x6587;&#x8BBE;&#x8BA1;&#x4E86;&#x4E00;&#x4E2A; warm-up schedule&#x2014;&#x2014;&#x524D;&#x51E0;&#x4E2A;&#x4EFB;&#x52A1;&#x53EA;&#x66B4;&#x9732;&#x6838;&#x5FC3;&#x80CC;&#x5305;&#x4FE1;&#x606F;&#xFF0C;&#x968F;&#x7740;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#x6570;&#x589E;&#x52A0;&#xFF0C;&#x9010;&#x6B65;&#x52A0;&#x5165;&#x751F;&#x7269;&#x7FA4;&#x7CFB;&#x3001;&#x751F;&#x547D;&#x503C;&#x3001;&#x9644;&#x8FD1;&#x5B9E;&#x4F53;&#x7B49;&#x66F4;&#x4E30;&#x5BCC;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
<h3 id="2. &#x6280;&#x80FD;&#x5E93;&#xFF08;Skill Library&#xFF09;&#x2014;&#x2014;&quot;&#x628A;&#x5B66;&#x5230;&#x7684;&#x4E1C;&#x897F;&#x5B58;&#x8D77;&#x6765;&quot;"><a href="#2. &#x6280;&#x80FD;&#x5E93;&#xFF08;Skill Library&#xFF09;&#x2014;&#x2014;&quot;&#x628A;&#x5B66;&#x5230;&#x7684;&#x4E1C;&#x897F;&#x5B58;&#x8D77;&#x6765;&quot;"></a>2. &#x6280;&#x80FD;&#x5E93;&#xFF08;Skill Library&#xFF09;&#x2014;&#x2014;&quot;&#x628A;&#x5B66;&#x5230;&#x7684;&#x4E1C;&#x897F;&#x5B58;&#x8D77;&#x6765;&quot;</h3>
<p>&#x8FD9;&#x662F; VOYAGER &#x6700;&#x5177;&#x5F00;&#x521B;&#x6027;&#x7684;&#x8BBE;&#x8BA1;&#x3002;&#x6BCF;&#x5F53; Agent &#x6210;&#x529F;&#x5B8C;&#x6210;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x5C31;&#x88AB;&#x5B58;&#x5165;&#x6280;&#x80FD;&#x5E93;&#xFF0C;&#x4EE5;<strong>&#x51FD;&#x6570;&#x63CF;&#x8FF0;&#x7684; Embedding &#x5411;&#x91CF;</strong>&#x4E3A;&#x7D22;&#x5F15;&#x3002;</p>
<p><img src="https://voyager.minedojo.org/assets/images/skill_library.png" alt="Figure 4: &#x6280;&#x80FD;&#x5E93;&#x7684;&#x5B58;&#x50A8;&#x548C;&#x68C0;&#x7D22;&#x3002;&#x4E0A;&#xFF1A;&#x65B0;&#x6280;&#x80FD;&#x901A;&#x8FC7;&#x63CF;&#x8FF0;&#x7684; Embedding &#x5411;&#x91CF;&#x7D22;&#x5F15;&#x540E;&#x5B58;&#x5165;&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#x3002;&#x4E0B;&#xFF1A;&#x9762;&#x5BF9;&#x65B0;&#x4EFB;&#x52A1;&#x65F6;&#xFF0C;&#x7CFB;&#x7EDF;&#x68C0;&#x7D22;&#x6700;&#x76F8;&#x5173;&#x7684; Top-5 &#x6280;&#x80FD;&#x4F5C;&#x4E3A;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4F9B; GPT-4 &#x53C2;&#x8003;&#x548C;&#x7EC4;&#x5408;&#x3002;"></p>
<pre><code>&#x6280;&#x80FD;&#x5E93;&#x7684;&#x8FD0;&#x4F5C;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x5B58;&#x50A8;&#xFF08;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x540E;&#xFF09;&#xFF1A;
  craftStoneShovel()    &#x2192; embedding(&quot;&#x7528;&#x77F3;&#x5934;&#x548C;&#x6728;&#x68CD;&#x5236;&#x4F5C;&#x77F3;&#x94F2;&quot;) &#x2192; &#x5B58;&#x5165;&#x5411;&#x91CF;DB
  combatZombieWithSword() &#x2192; embedding(&quot;&#x7528;&#x5251;&#x6218;&#x6597;&#x50F5;&#x5C38;&quot;) &#x2192; &#x5B58;&#x5165;&#x5411;&#x91CF;DB
  smeltRawIron()        &#x2192; embedding(&quot;&#x7528;&#x7089;&#x5B50;&#x51B6;&#x70BC;&#x94C1;&#x77FF;&#x77F3;&quot;) &#x2192; &#x5B58;&#x5165;&#x5411;&#x91CF;DB

&#x68C0;&#x7D22;&#xFF08;&#x9762;&#x5BF9;&#x65B0;&#x4EFB;&#x52A1;&#x65F6;&#xFF09;&#xFF1A;
  &#x65B0;&#x4EFB;&#x52A1;: &quot;Craft an iron pickaxe&quot;
  &#x2192; GPT-3.5 &#x751F;&#x6210;&#x5EFA;&#x8BAE;: &quot;&#x9700;&#x8981;&#x94C1;&#x952D;&#x548C;&#x6728;&#x68CD;&#xFF0C;&#x5148;&#x51B6;&#x70BC;&#x94C1;&#x77FF;&quot;
  &#x2192; &#x67E5;&#x8BE2;&#x5411;&#x91CF;DB &#x2192; &#x8FD4;&#x56DE; Top-5 &#x76F8;&#x5173;&#x6280;&#x80FD;:
    1. smeltRawIron()
    2. craftStoneShovel()   (&#x7ED3;&#x6784;&#x76F8;&#x4F3C;)
    3. mineIronOre()
    4. craftCraftingTable()
    5. craftSticks()
  &#x2192; &#x8FD9;&#x4E9B;&#x6280;&#x80FD;&#x4F5C;&#x4E3A; in-context examples &#x6CE8;&#x5165; GPT-4 &#x7684; prompt

&#x5173;&#x952E;&#x4F18;&#x52BF;&#xFF1A;
  &#x2713; &#x590D;&#x5408;&#x6027;: craftIronPickaxe() &#x5185;&#x90E8;&#x8C03;&#x7528; smeltRawIron() &#x548C; craftSticks()
  &#x2713; &#x53EF;&#x89E3;&#x91CA;&#x6027;: &#x6BCF;&#x4E2A;&#x6280;&#x80FD;&#x90FD;&#x662F;&#x4EBA;&#x7C7B;&#x53EF;&#x8BFB;&#x7684; JavaScript &#x51FD;&#x6570;
  &#x2713; &#x6297;&#x9057;&#x5FD8;: &#x6280;&#x80FD;&#x6C38;&#x8FDC;&#x4E0D;&#x4F1A;&#x4E22;&#x5931;&#xFF08;&#x5BF9;&#x6BD4; RL &#x7684;&#x707E;&#x96BE;&#x6027;&#x9057;&#x5FD8;&#xFF09;
  &#x2713; &#x53EF;&#x8FC1;&#x79FB;: &#x5728;&#x65B0;&#x4E16;&#x754C;&#x4E2D;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x5DF2;&#x6709;&#x6280;&#x80FD;&#x5E93;
</code></pre>
<h3 id="3. &#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x673A;&#x5236;&#xFF08;Iterative Prompting&#xFF09;&#x2014;&#x2014;&quot;&#x4EE3;&#x7801;&#x4E0D;&#x5BF9;&#x5C31;&#x6539;&#xFF0C;&#x6539;&#x5230;&#x5BF9;&#x4E3A;&#x6B62;&quot;"><a href="#3. &#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x673A;&#x5236;&#xFF08;Iterative Prompting&#xFF09;&#x2014;&#x2014;&quot;&#x4EE3;&#x7801;&#x4E0D;&#x5BF9;&#x5C31;&#x6539;&#xFF0C;&#x6539;&#x5230;&#x5BF9;&#x4E3A;&#x6B62;&quot;"></a>3. &#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x673A;&#x5236;&#xFF08;Iterative Prompting&#xFF09;&#x2014;&#x2014;&quot;&#x4EE3;&#x7801;&#x4E0D;&#x5BF9;&#x5C31;&#x6539;&#xFF0C;&#x6539;&#x5230;&#x5BF9;&#x4E3A;&#x6B62;&quot;</h3>
<p>LLM &#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x53EF;&#x80FD;&#x4E00;&#x6B21;&#x5C31;&#x5BF9;&#x3002;VOYAGER &#x901A;&#x8FC7;&#x4E09;&#x7C7B;&#x53CD;&#x9988;&#x4FE1;&#x53F7;<strong>&#x8FED;&#x4EE3;&#x4F18;&#x5316;</strong>&#x4EE3;&#x7801;&#xFF1A;</p>
<pre><code>&#x8FED;&#x4EE3;&#x63D0;&#x793A;&#x7684;&#x4E09;&#x7C7B;&#x53CD;&#x9988;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x2460; &#x73AF;&#x5883;&#x53CD;&#x9988;&#xFF08;Environment Feedback&#xFF09;
  &#x4EE3;&#x7801;&#x6267;&#x884C;&#x540E;&#x7684;&#x6E38;&#x620F;&#x72B6;&#x6001;&#x53D8;&#x5316;
  &#x4F8B;: &quot;I cannot make an iron chestplate because I need: 7 more iron ingots&quot;
  &#x2192; GPT-4 &#x610F;&#x8BC6;&#x5230;&#x94C1;&#x952D;&#x4E0D;&#x591F;&#xFF0C;&#x5148;&#x53BB;&#x91C7;&#x66F4;&#x591A;&#x94C1;&#x77FF;

&#x2461; &#x6267;&#x884C;&#x9519;&#x8BEF;&#xFF08;Execution Errors&#xFF09;
  JavaScript &#x89E3;&#x91CA;&#x5668;&#x7684;&#x62A5;&#x9519;&#x4FE1;&#x606F;
  &#x4F8B;: &quot;acacia_axe is not a valid item&quot;
  &#x2192; GPT-4 &#x53D1;&#x73B0;&#x6CA1;&#x6709; acacia_axe &#x8FD9;&#x4E2A;&#x7269;&#x54C1;&#xFF0C;&#x6539;&#x6210; wooden_axe

&#x2462; &#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#xFF08;Self-Verification&#xFF09;
  &#x7528;&#x53E6;&#x4E00;&#x4E2A; GPT-4 &#x5B9E;&#x4F8B;&#x68C0;&#x67E5;&#x4EFB;&#x52A1;&#x662F;&#x5426;&#x771F;&#x6B63;&#x5B8C;&#x6210;
  &#x4F8B;: &#x4EFB;&#x52A1;&#x662F; &quot;Mine 3 wood logs&quot;
       &#x80CC;&#x5305;&#x6709; {&apos;oak_log&apos;: 2, &apos;spruce_log&apos;: 2} = 4 &#x4E2A;&#x6728;&#x5934;
       &#x2192; &#x9A8C;&#x8BC1;&#x5668;: &quot;success = true&quot;&#xFF08;&#x603B;&#x6570;&#x8D85;&#x8FC7; 3&#xFF09;
  &#x5982;&#x679C;&#x5931;&#x8D25;&#xFF0C;&#x9A8C;&#x8BC1;&#x5668;&#x8FD8;&#x4F1A;&#x7ED9;&#x51FA;&#x6539;&#x8FDB;&#x5EFA;&#x8BAE;&#xFF08;critique&#xFF09;

&#x5FAA;&#x73AF;&#x6D41;&#x7A0B;&#xFF08;&#x6700;&#x591A; 4 &#x8F6E;&#xFF09;&#xFF1A;
  &#x751F;&#x6210;&#x4EE3;&#x7801; &#x2192; &#x6267;&#x884C; &#x2192; &#x6536;&#x96C6;&#x53CD;&#x9988; &#x2192; &#x6539;&#x8FDB;&#x4EE3;&#x7801; &#x2192; &#x6267;&#x884C; &#x2192; ...
  &#x2192; &#x76F4;&#x5230;&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#x901A;&#x8FC7; &#x2192; &#x5B58;&#x5165;&#x6280;&#x80FD;&#x5E93; &#x2192; &#x8BF7;&#x6C42;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;
  &#x2192; &#x6216; 4 &#x8F6E;&#x540E;&#x653E;&#x5F03; &#x2192; &#x6807;&#x8BB0;&#x4E3A;&#x5931;&#x8D25;&#x4EFB;&#x52A1; &#x2192; &#x8BFE;&#x7A0B;&#x63D0;&#x51FA;&#x65B0;&#x4EFB;&#x52A1;
</code></pre>
<h3 id="4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;"><a href="#4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;"></a>4. &#x6574;&#x4F53;&#x67B6;&#x6784;&#x534F;&#x540C;</h3>
<pre><code>&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502;                    VOYAGER &#x4E3B;&#x5FAA;&#x73AF;                            &#x2502;
&#x2502;                                                              &#x2502;
&#x2502;  &#x2460; &#x81EA;&#x52A8;&#x8BFE;&#x7A0B; (GPT-4)                                         &#x2502;
&#x2502;     &#x8F93;&#x5165;: Agent &#x72B6;&#x6001; + &#x5DF2;&#x5B8C;&#x6210;/&#x5931;&#x8D25;&#x4EFB;&#x52A1;                       &#x2502;
&#x2502;     &#x8F93;&#x51FA;: &#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF08;&#x5982; &quot;Mine 3 iron_ore&quot;&#xFF09;                 &#x2502;
&#x2502;        &#x2502;                                                     &#x2502;
&#x2502;        &#x2193;                                                     &#x2502;
&#x2502;  &#x2461; &#x6280;&#x80FD;&#x68C0;&#x7D22;                                                  &#x2502;
&#x2502;     &#x8F93;&#x5165;: &#x4EFB;&#x52A1;&#x63CF;&#x8FF0; + &#x73AF;&#x5883;&#x53CD;&#x9988;                                &#x2502;
&#x2502;     &#x8F93;&#x51FA;: Top-5 &#x76F8;&#x5173;&#x6280;&#x80FD;&#x4EE3;&#x7801;&#xFF08;from &#x5411;&#x91CF;DB&#xFF09;                  &#x2502;
&#x2502;        &#x2502;                                                     &#x2502;
&#x2502;        &#x2193;                                                     &#x2502;
&#x2502;  &#x2462; &#x4EE3;&#x7801;&#x751F;&#x6210; (GPT-4)                                         &#x2502;
&#x2502;     &#x8F93;&#x5165;: &#x4EFB;&#x52A1; + &#x68C0;&#x7D22;&#x5230;&#x7684;&#x6280;&#x80FD; + Agent &#x72B6;&#x6001; + &#x53CD;&#x9988;            &#x2502;
&#x2502;     &#x8F93;&#x51FA;: JavaScript &#x51FD;&#x6570;                                    &#x2502;
&#x2502;        &#x2502;                                                     &#x2502;
&#x2502;        &#x2193;                                                     &#x2502;
&#x2502;  &#x2463; &#x6267;&#x884C; &#x2192; &#x73AF;&#x5883;&#x53CD;&#x9988; + &#x6267;&#x884C;&#x9519;&#x8BEF;                               &#x2502;
&#x2502;        &#x2502;                                                     &#x2502;
&#x2502;        &#x2193;                                                     &#x2502;
&#x2502;  &#x2464; &#x81EA;&#x6211;&#x9A8C;&#x8BC1; (GPT-4)                                         &#x2502;
&#x2502;     &#x6210;&#x529F; &#x2192; &#x5B58;&#x5165;&#x6280;&#x80FD;&#x5E93; &#x2192; &#x56DE;&#x5230; &#x2460;                              &#x2502;
&#x2502;     &#x5931;&#x8D25; &#x2192; &#x5E26; critique &#x56DE;&#x5230; &#x2462;&#xFF08;&#x6700;&#x591A; 4 &#x8F6E;&#xFF09;                  &#x2502;
&#x2502;     &#x5361;&#x4F4F; &#x2192; &#x56DE;&#x5230; &#x2460; &#x6362;&#x4EFB;&#x52A1;                                    &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x63A2;&#x7D22;&#x80FD;&#x529B;"><a href="#&#x63A2;&#x7D22;&#x80FD;&#x529B;"></a>&#x63A2;&#x7D22;&#x80FD;&#x529B;</h3>
<p><img src="https://voyager.minedojo.org/assets/images/map.png" alt="Figure 5: &#x5730;&#x56FE;&#x8986;&#x76D6;&#x7387;&#x9E1F;&#x77B0;&#x56FE;&#x3002;VOYAGER &#x7A7F;&#x8D8A;&#x4E86; 2.3 &#x500D;&#x957F;&#x7684;&#x8DDD;&#x79BB;&#xFF0C;&#x8DE8;&#x8D8A;&#x8349;&#x539F;&#x3001;&#x6C99;&#x6F20;&#x3001;&#x6CB3;&#x6D41;&#x3001;&#x96EA;&#x539F;&#x7B49;&#x591A;&#x79CD;&#x5730;&#x5F62;&#xFF1B;&#x57FA;&#x7EBF;&#x65B9;&#x6CD5;&#x7684; Agent &#x5F80;&#x5F80;&#x56F0;&#x5728;&#x5C40;&#x90E8;&#x533A;&#x57DF;&#x3002;"></p>
<pre><code>160 &#x6B21; Prompt &#x8FED;&#x4EE3;&#x540E;&#x7684;&#x7269;&#x54C1;&#x53D1;&#x73B0;&#x6570;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
VOYAGER:     63 &#x79CD;&#x72EC;&#x7279;&#x7269;&#x54C1; &#x2190; 3.3x &#x9886;&#x5148;
AutoGPT:     ~19 &#x79CD;
Reflexion:   ~5 &#x79CD;
ReAct:       ~4 &#x79CD;
</code></pre>
<h3 id="&#x79D1;&#x6280;&#x6811;&#x89E3;&#x9501;"><a href="#&#x79D1;&#x6280;&#x6811;&#x89E3;&#x9501;"></a>&#x79D1;&#x6280;&#x6811;&#x89E3;&#x9501;</h3>
<p><img src="https://voyager.minedojo.org/assets/images/tech_tree.png" alt="Figure: &#x79D1;&#x6280;&#x6811;&#x638C;&#x63E1;&#x901F;&#x5EA6;&#x5BF9;&#x6BD4;&#x3002;VOYAGER &#x662F;&#x552F;&#x4E00;&#x89E3;&#x9501;&#x94BB;&#x77F3;&#x5DE5;&#x5177;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E14;&#x5728;&#x6728;/&#x77F3;/&#x94C1;&#x4E09;&#x4E2A;&#x5C42;&#x7EA7;&#x5206;&#x522B;&#x5FEB; 15.3x / 8.5x / 6.4x&#x3002;"></p>
<pre><code>&#x79D1;&#x6280;&#x6811; (&#x6728; &#x2192; &#x77F3; &#x2192; &#x94C1; &#x2192; &#x94BB;&#x77F3;) &#x89E3;&#x9501;&#x901F;&#x5EA6;&#xFF08;Prompt &#x8FED;&#x4EE3;&#x6B21;&#x6570;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
                    &#x6728;&#x5DE5;&#x5177;    &#x77F3;&#x5DE5;&#x5177;    &#x94C1;&#x5DE5;&#x5177;    &#x94BB;&#x77F3;&#x5DE5;&#x5177;
VOYAGER             6&#xB1;2      11&#xB1;2     21&#xB1;7     102 (1/3)
AutoGPT             92&#xB1;72    94&#xB1;72    135&#xB1;103  N/A (0/3)
Reflexion           N/A      N/A      N/A      N/A
ReAct               N/A      N/A      N/A      N/A

VOYAGER &#x662F;&#x552F;&#x4E00;&#x4E00;&#x4E2A;&#x89E3;&#x9501;&#x94BB;&#x77F3;&#x7EA7;&#x522B;&#x7684;&#x65B9;&#x6CD5;
&#x6728;&#x5DE5;&#x5177;&#x5FEB; 15.3x | &#x77F3;&#x5DE5;&#x5177;&#x5FEB; 8.5x | &#x94C1;&#x5DE5;&#x5177;&#x5FEB; 6.4x
</code></pre>
<h3 id="&#x96F6;&#x6837;&#x672C;&#x8FC1;&#x79FB;"><a href="#&#x96F6;&#x6837;&#x672C;&#x8FC1;&#x79FB;"></a>&#x96F6;&#x6837;&#x672C;&#x8FC1;&#x79FB;</h3>
<pre><code>&#x6E05;&#x7A7A;&#x80CC;&#x5305; &#x2192; &#x653E;&#x5165;&#x5168;&#x65B0;&#x4E16;&#x754C; &#x2192; &#x7ED9; 4 &#x4E2A;&#x672A;&#x89C1;&#x8FC7;&#x7684;&#x4EFB;&#x52A1;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
                 &#x94BB;&#x77F3;&#x9550;   &#x91D1;&#x5251;    &#x5CA9;&#x6D46;&#x6876;   &#x6307;&#x5357;&#x9488;
VOYAGER          19&#xB1;3    18&#xB1;7   21&#xB1;5    18&#xB1;2    &#x2190; &#x5168;&#x90E8; 3/3 &#x6210;&#x529F;
VOYAGER &#x65E0;&#x6280;&#x80FD;&#x5E93;  36     30&#xB1;9   27&#xB1;9    26&#xB1;3    &#x2190; &#x4E5F;&#x80FD;&#x505A;&#x4F46;&#x66F4;&#x6162;
AutoGPT+&#x6280;&#x80FD;&#x5E93;   39     30     N/A     30      &#x2190; &#x53EA;&#x80FD;&#x6210;&#x529F;&#x4E00;&#x90E8;&#x5206;
AutoGPT          N/A    N/A    N/A     N/A     &#x2190; &#x5168;&#x90E8;&#x5931;&#x8D25;
ReAct/Reflexion  N/A    N/A    N/A     N/A     &#x2190; &#x5168;&#x90E8;&#x5931;&#x8D25;

&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;
  &#x2022; &#x6280;&#x80FD;&#x5E93;&#x4E0D;&#x4EC5;&#x63D0;&#x5347; VOYAGER&#xFF0C;&#x8FD8;&#x80FD; plug-and-play &#x63D0;&#x5347; AutoGPT
  &#x2022; &#x8FD9;&#x8BC1;&#x660E;&#x6280;&#x80FD;&#x5E93;&#x662F;&#x901A;&#x7528;&#x7684;&quot;&#x7ECF;&#x9A8C;&#x8D44;&#x4EA7;&quot;&#xFF0C;&#x4E0D;&#x7ED1;&#x5B9A;&#x7279;&#x5B9A;&#x6846;&#x67B6;
</code></pre>
<h3 id="&#x6D88;&#x878D;&#x5B9E;&#x9A8C;"><a href="#&#x6D88;&#x878D;&#x5B9E;&#x9A8C;"></a>&#x6D88;&#x878D;&#x5B9E;&#x9A8C;</h3>
<p><img src="https://voyager.minedojo.org/assets/images/ablation.png" alt="Figure: &#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x3002;&#x5DE6;&#x56FE;&#xFF1A;&#x79FB;&#x9664;&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF08;&#x6362;&#x968F;&#x673A;&#x8BFE;&#x7A0B;&#x540E;&#x7269;&#x54C1;&#x53D1;&#x73B0;&#x6570;&#x4E0B;&#x964D; 93%&#xFF09;&#x3001;&#x6280;&#x80FD;&#x5E93;&#x3001;GPT-4 &#x7684;&#x5F71;&#x54CD;&#x3002;&#x53F3;&#x56FE;&#xFF1A;&#x79FB;&#x9664;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x3001;&#x6267;&#x884C;&#x9519;&#x8BEF;&#x3001;&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#x7684;&#x5F71;&#x54CD;&#x3002;&#x6240;&#x6709;&#x7EC4;&#x4EF6;&#x90FD;&#x662F;&#x4E0D;&#x53EF;&#x6216;&#x7F3A;&#x7684;&#x3002;"></p>
<p>&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;</p>
<ul>
<li><strong>&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#x4E0D;&#x53EF;&#x6216;&#x7F3A;&#xFF1A;</strong> &#x6362;&#x6210;&#x968F;&#x673A;&#x8BFE;&#x7A0B;&#x540E;&#x7269;&#x54C1;&#x53D1;&#x73B0;&#x6570;&#x4E0B;&#x964D; 93%&#xFF0C;&#x56E0;&#x4E3A;&#x6253;&#x4E71;&#x987A;&#x5E8F;&#x4F1A;&#x8BA9; Agent &#x9047;&#x5230;&quot;&#x4E0D;&#x53EF;&#x80FD;&#x5B8C;&#x6210;&quot;&#x7684;&#x4EFB;&#x52A1;&#x3002;</li>
<li><strong>&#x81EA;&#x6211;&#x9A8C;&#x8BC1;&#x662F;&#x6700;&#x91CD;&#x8981;&#x7684;&#x53CD;&#x9988;&#xFF1A;</strong> &#x79FB;&#x9664;&#x540E;&#x7269;&#x54C1;&#x53D1;&#x73B0;&#x6570;&#x4E0B;&#x964D; 73%&#xFF0C;&#x56E0;&#x4E3A;&#x6CA1;&#x6709;&#x9A8C;&#x8BC1;&#x5668;&#xFF0C;Agent &#x4E0D;&#x77E5;&#x9053;&#x4F55;&#x65F6;&#x8BE5;&#x8FDB;&#x5165;&#x4E0B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x3002;</li>
<li><strong>GPT-4 &gt;&gt; GPT-3.5&#xFF1A;</strong> &#x4EE3;&#x7801;&#x751F;&#x6210;&#x80FD;&#x529B;&#x76F8;&#x5DEE; 5.7 &#x500D;&#xFF0C;&#x8BF4;&#x660E; VOYAGER &#x7684;&#x8BBE;&#x8BA1;&#x4F9D;&#x8D56;&#x5F3A;&#x6A21;&#x578B;&#x3002;</li>
</ul>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>VOYAGER &#x7684;&#x4E09;&#x5927;&#x6A21;&#x5757;&#x5206;&#x522B;&#x6709;&#x5404;&#x81EA;&#x7684;&#x6539;&#x8FDB;&#x7A7A;&#x95F4;&#xFF1A;</p>
<ul>
<li><strong>&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;&#xFF1A;</strong> &#x76EE;&#x524D;&#x4F9D;&#x8D56; GPT-4 &#x7684;&quot;&#x4E16;&#x754C;&#x77E5;&#x8BC6;&quot;&#x6765;&#x63D0;&#x8BAE;&#x4EFB;&#x52A1;&#xFF0C;&#x9762;&#x5BF9; GPT-4 &#x4E0D;&#x4E86;&#x89E3;&#x7684;&#x9886;&#x57DF;&#xFF08;&#x975E; Minecraft&#xFF09;&#x53EF;&#x80FD;&#x4F1A;&#x63D0;&#x51FA;&#x4E0D;&#x5408;&#x7406;&#x7684;&#x4EFB;&#x52A1;&#x3002;&#x540E;&#x7EED;&#x5DE5;&#x4F5C;&#x53EF;&#x4EE5;&#x5F15;&#x5165;&#x66F4;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8BFE;&#x7A0B;&#x8BBE;&#x8BA1;&#x3002;</li>
<li><strong>&#x6280;&#x80FD;&#x5E93; vs &#x8BB0;&#x5FC6;&#x6D41;&#xFF1A;</strong> <a href="./Stanford%20%26%20Google%20-%20Generative%20Agents%20-%20Interactive%20Simulacra%20of%20Human%20Behavior.md">Generative Agents</a> &#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x8BB0;&#x5FC6;&#x6D41;&#x5B58;&#x50A8;&#x7ECF;&#x9A8C;&#xFF0C;VOYAGER &#x7528;&#x4EE3;&#x7801;&#x5B58;&#x50A8;&#x6280;&#x80FD;&#x3002;&#x4E24;&#x8005;&#x7684;&#x54F2;&#x5B66;&#x4E0D;&#x540C;&#x2014;&#x2014;&#x4EE3;&#x7801;&#x66F4;&#x7CBE;&#x786E;&#x53EF;&#x6267;&#x884C;&#xFF0C;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x66F4;&#x7075;&#x6D3B;&#x901A;&#x7528;&#x3002;<a href="./MemOS%20-%20A%20Memory%20OS%20for%20AI%20System.md">MemOS</a> &#x8BD5;&#x56FE;&#x7EDF;&#x4E00;&#x7BA1;&#x7406;&#x4E0D;&#x540C;&#x5F62;&#x6001;&#x7684;&#x8BB0;&#x5FC6;&#x3002;</li>
<li><strong>&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x7684;&#x7F3A;&#x5931;&#xFF1A;</strong> VOYAGER &#x5B8C;&#x5168;&#x4E0D;&#x770B;&#x5C4F;&#x5E55;&#xFF0C;&#x9760; Mineflayer API &#x83B7;&#x53D6;&#x7ED3;&#x6784;&#x5316;&#x72B6;&#x6001;&#x3002;&#x8FD9;&#x7ED5;&#x5F00;&#x4E86;&#x89C6;&#x89C9;&#x95EE;&#x9898;&#xFF0C;&#x4F46;&#x4E5F;&#x9650;&#x5236;&#x4E86;&#x5B83;&#x6267;&#x884C;&#x9700;&#x8981;&#x89C6;&#x89C9;&#x53CD;&#x9988;&#x7684;&#x4EFB;&#x52A1;&#xFF08;&#x5982;&#x5EFA;&#x9020; 3D &#x7ED3;&#x6784;&#xFF09;&#x3002;&#x8BBA;&#x6587;&#x7528;&quot;&#x4EBA;&#x7C7B;&#x66FF;&#x4EE3;&#x89C6;&#x89C9;&quot;&#x505A;&#x4E86;&#x5EFA;&#x9020; Demo&#xFF0C;&#x6697;&#x793A;&#x591A;&#x6A21;&#x6001;&#x662F;&#x672A;&#x6765;&#x65B9;&#x5411;&#x3002;</li>
<li><strong>&#x6210;&#x672C;&#x95EE;&#x9898;&#xFF1A;</strong> GPT-4 API &#x6BD4; GPT-3.5 &#x8D35; 15 &#x500D;&#xFF0C;&#x800C; VOYAGER &#x4E25;&#x91CD;&#x4F9D;&#x8D56; GPT-4 &#x7684;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x8D28;&#x91CF;&#x3002;&#x4E0D;&#x8FC7;&#x968F;&#x7740;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x7684;&#x63D0;&#x5347;&#xFF0C;&#x8FD9;&#x4E2A;&#x74F6;&#x9888;&#x6B63;&#x5728;&#x88AB;&#x6253;&#x7834;&#x3002;</li>
</ul>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;&quot;&#x4EE3;&#x7801;&#x5373;&#x884C;&#x52A8;&quot;&#x7684;&#x8FB9;&#x754C;&#x5728;&#x54EA;&#xFF1F;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;&quot;&#x4EE3;&#x7801;&#x5373;&#x884C;&#x52A8;&quot;&#x7684;&#x8FB9;&#x754C;&#x5728;&#x54EA;&#xFF1F;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;&quot;&#x4EE3;&#x7801;&#x5373;&#x884C;&#x52A8;&quot;&#x7684;&#x8FB9;&#x754C;&#x5728;&#x54EA;&#xFF1F;</h2>
<h3 id="1. Minecraft &#x662F;&#x4E00;&#x4E2A;&quot;&#x53CB;&#x597D;&quot;&#x7684;&#x6D4B;&#x8BD5;&#x73AF;&#x5883;"><a href="#1. Minecraft &#x662F;&#x4E00;&#x4E2A;&quot;&#x53CB;&#x597D;&quot;&#x7684;&#x6D4B;&#x8BD5;&#x73AF;&#x5883;"></a>1. Minecraft &#x662F;&#x4E00;&#x4E2A;&quot;&#x53CB;&#x597D;&quot;&#x7684;&#x6D4B;&#x8BD5;&#x73AF;&#x5883;</h3>
<p>VOYAGER &#x7684;&#x6210;&#x529F;&#x5F88;&#x5927;&#x7A0B;&#x5EA6;&#x4E0A;&#x4F9D;&#x8D56;&#x4E8E; Mineflayer &#x63D0;&#x4F9B;&#x7684;<strong>&#x9AD8;&#x7EA7; API</strong>&#x2014;&#x2014;Agent &#x4E0D;&#x9700;&#x8981;&#x5904;&#x7406;&#x50CF;&#x7D20;&#x3001;&#x4E0D;&#x9700;&#x8981;&#x7CBE;&#x786E;&#x64CD;&#x63A7;&#x9F20;&#x6807;&#x952E;&#x76D8;&#x3002;<code>mineBlock(bot, &quot;stone&quot;, 3)</code> &#x4E00;&#x884C;&#x4EE3;&#x7801;&#x5C31;&#x80FD;&#x641E;&#x5B9A;&#x4E00;&#x4E2A;&#x5728; RL &#x4E2D;&#x9700;&#x8981;&#x5927;&#x91CF;&#x8BAD;&#x7EC3;&#x624D;&#x80FD;&#x5B66;&#x4F1A;&#x7684;&#x6280;&#x80FD;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x6CA1;&#x6709;&#x73B0;&#x6210; API &#x7684;&#x73AF;&#x5883;&#xFF08;&#x6BD4;&#x5982;&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x7684;&#x673A;&#x5668;&#x4EBA;&#xFF09;&#xFF0C;&quot;&#x4EE3;&#x7801;&#x5373;&#x884C;&#x52A8;&quot;&#x7684;&#x8303;&#x5F0F;&#x8FD8;&#x80FD;&#x4E0D;&#x80FD;&#x5DE5;&#x4F5C;&#xFF1F;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5F00;&#x653E;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="2. &#x6280;&#x80FD;&#x5E93;&#x7684;&quot;&#x5929;&#x82B1;&#x677F;&quot;"><a href="#2. &#x6280;&#x80FD;&#x5E93;&#x7684;&quot;&#x5929;&#x82B1;&#x677F;&quot;"></a>2. &#x6280;&#x80FD;&#x5E93;&#x7684;&quot;&#x5929;&#x82B1;&#x677F;&quot;</h3>
<p>&#x6280;&#x80FD;&#x5E93;&#x4F1A;&#x4E00;&#x76F4;&#x589E;&#x957F;&#xFF0C;&#x4F46;<strong>&#x68C0;&#x7D22;&#x8D28;&#x91CF;</strong>&#x4F1A;&#x968F;&#x89C4;&#x6A21;&#x589E;&#x5927;&#x800C;&#x4E0B;&#x964D;&#x5417;&#xFF1F;&#x8BBA;&#x6587;&#x7684; Top-5 &#x68C0;&#x7D22;&#x51C6;&#x786E;&#x7387;&#x662F; 96.5%&#xFF0C;&#x4F46;&#x8FD9;&#x662F;&#x5728; ~300 &#x4E2A;&#x6280;&#x80FD;&#x7684;&#x89C4;&#x6A21;&#x4E0A;&#x6D4B;&#x8BD5;&#x7684;&#x3002;&#x5F53;&#x6280;&#x80FD;&#x5E93;&#x81A8;&#x80C0;&#x5230;&#x6570;&#x5343;&#x751A;&#x81F3;&#x6570;&#x4E07;&#x65F6;&#xFF0C;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x7684;&#x7CBE;&#x5EA6;&#x548C;&#x6548;&#x7387;&#x53EF;&#x80FD;&#x6210;&#x4E3A;&#x65B0;&#x7684;&#x74F6;&#x9888;&#x3002;</p>
<h3 id="3. &#x771F;&#x6B63;&#x7684;&#x8D21;&#x732E;&#xFF1A;Agent &#x8303;&#x5F0F;&#x7684;&#x7B2C;&#x4E09;&#x6781;"><a href="#3. &#x771F;&#x6B63;&#x7684;&#x8D21;&#x732E;&#xFF1A;Agent &#x8303;&#x5F0F;&#x7684;&#x7B2C;&#x4E09;&#x6781;"></a>3. &#x771F;&#x6B63;&#x7684;&#x8D21;&#x732E;&#xFF1A;Agent &#x8303;&#x5F0F;&#x7684;&#x7B2C;&#x4E09;&#x6781;</h3>
<pre><code>2023 &#x5E74; Agent &#x8303;&#x5F0F;&#x7684;&#x4E09;&#x8DB3;&#x9F0E;&#x7ACB;&#xFF1A;

  Generative Agents (Stanford)      VOYAGER (NVIDIA)           ReAct (Princeton)
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;            &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;            &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x8BB0;&#x5FC6;&#x6D41; + &#x53CD;&#x601D; + &#x89C4;&#x5212;              &#x81EA;&#x52A8;&#x8BFE;&#x7A0B; + &#x6280;&#x80FD;&#x5E93;          &#x63A8;&#x7406; + &#x884C;&#x52A8;&#x4EA4;&#x66FF;
  &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x4F5C;&#x4E3A;&#x884C;&#x52A8;&#x7A7A;&#x95F4;              &#x4EE3;&#x7801;&#x4F5C;&#x4E3A;&#x884C;&#x52A8;&#x7A7A;&#x95F4;            &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x4F5C;&#x4E3A;&#x884C;&#x52A8;&#x7A7A;&#x95F4;
  &#x793E;&#x4F1A;&#x6A21;&#x62DF; / &#x89D2;&#x8272;&#x626E;&#x6F14;               &#x5177;&#x8EAB;&#x63A2;&#x7D22; / &#x7EC8;&#x8EAB;&#x5B66;&#x4E60;         &#x77E5;&#x8BC6;&#x95EE;&#x7B54; / &#x51B3;&#x7B56;
  &#x5F3A;&#x8C03;&quot;&#x50CF;&#x4EBA;&quot;                        &#x5F3A;&#x8C03;&quot;&#x4F1A;&#x5B66;&#x4E60;&quot;               &#x5F3A;&#x8C03;&quot;&#x4F1A;&#x63A8;&#x7406;&quot;
</code></pre>
<p>VOYAGER &#x8BC1;&#x660E;&#x4E86;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x6D1E;&#x5BDF;&#xFF1A;<strong>LLM &#x6700;&#x64C5;&#x957F;&#x7684;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&quot;&#x505A;&#x4E8B;&quot;&#xFF0C;&#x800C;&#x662F;&quot;&#x5199;&#x4EE3;&#x7801;&#x8BA9;&#x522B;&#x4EBA;&#x505A;&#x4E8B;&quot;</strong>&#x3002;&#x628A;&#x4EE3;&#x7801;&#x4F5C;&#x4E3A;&#x884C;&#x52A8;&#x7A7A;&#x95F4;&#xFF0C;&#x5929;&#x7136;&#x83B7;&#x5F97;&#x4E86;&#x53EF;&#x7EC4;&#x5408;&#x6027;&#xFF08;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x51FD;&#x6570;&#xFF09;&#x548C;&#x6297;&#x9057;&#x5FD8;&#x6027;&#xFF08;&#x4EE3;&#x7801;&#x5B58;&#x4E86;&#x5C31;&#x4E0D;&#x4F1A;&#x5FD8;&#xFF09;&#xFF0C;&#x8FD9;&#x6BD4;&#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63CF;&#x8FF0;&#x884C;&#x52A8;&#x6216;&#x7528; RL &#x5B66;&#x4F4E;&#x7EA7;&#x7B56;&#x7565;&#x90FD;&#x66F4;&#x9AD8;&#x6548;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>VOYAGER &#x7684;&#x6838;&#x5FC3;&#x56DE;&#x7B54;&#x4E86;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;<strong>&quot;LLM Agent &#x5982;&#x4F55;&#x5B9E;&#x73B0;&#x7EC8;&#x8EAB;&#x5B66;&#x4E60;&#xFF1F;&quot;</strong></p>
<p>&#x7B54;&#x6848;&#x662F;&#x4E09;&#x4E2A;&#x6A21;&#x5757;&#x7684;&#x534F;&#x540C;&#xFF1A;<strong>&#x81EA;&#x52A8;&#x8BFE;&#x7A0B;</strong>&#x8BA9; Agent &#x77E5;&#x9053;&quot;&#x4E0B;&#x4E00;&#x6B65;&#x8BE5;&#x5B66;&#x4EC0;&#x4E48;&quot;&#xFF0C;<strong>&#x6280;&#x80FD;&#x5E93;</strong>&#x8BA9; Agent &#x628A;&#x5B66;&#x5230;&#x7684;&#x4E1C;&#x897F;&#x5B58;&#x4E0B;&#x6765;&#x5E76;&#x590D;&#x7528;&#xFF0C;<strong>&#x8FED;&#x4EE3;&#x63D0;&#x793A;</strong>&#x8BA9; Agent &#x80FD;&#x4ECE;&#x5931;&#x8D25;&#x4E2D;&#x4FEE;&#x6B63;&#x3002;&#x4E09;&#x8005;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x6B63;&#x5411;&#x98DE;&#x8F6E;&#x2014;&#x2014;&#x8D8A;&#x5B66;&#x8D8A;&#x591A;&#x3001;&#x8D8A;&#x5B66;&#x8D8A;&#x5FEB;&#x3001;&#x8D8A;&#x5B66;&#x8D8A;&#x590D;&#x6742;&#x3002;</p>
<p>&#x4ECE;&#x66F4;&#x5927;&#x7684;&#x89C6;&#x89D2;&#x770B;&#xFF0C;VOYAGER &#x5F00;&#x521B;&#x4E86;&quot;<strong>&#x4EE3;&#x7801;&#x4F5C;&#x4E3A; Agent &#x8BB0;&#x5FC6;</strong>&quot;&#x7684;&#x8303;&#x5F0F;&#x3002;<a href="./Stanford%20%26%20Google%20-%20Generative%20Agents%20-%20Interactive%20Simulacra%20of%20Human%20Behavior.md">Generative Agents</a> &#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x8BB0;&#x5F55;&#x7ECF;&#x9A8C;&#xFF0C;VOYAGER &#x7528;&#x53EF;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x8BB0;&#x5F55;&#x6280;&#x80FD;&#x2014;&#x2014;&#x4E24;&#x8005;&#x5206;&#x522B;&#x89E3;&#x51B3;&#x4E86;&quot;Agent &#x5982;&#x4F55;&#x8BB0;&#x4F4F;&#x7ECF;&#x5386;&quot;&#x548C;&quot;Agent &#x5982;&#x4F55;&#x8BB0;&#x4F4F;&#x80FD;&#x529B;&quot;&#x8FD9;&#x4E24;&#x4E2A;&#x4E92;&#x8865;&#x95EE;&#x9898;&#x3002;</p>
`,E=[{level:2,title:"VOYAGER 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:'1. 自动课程（Automatic Curriculum）——"接下来该学什么？"',children:[]},{level:3,title:'2. 技能库（Skill Library）——"把学到的东西存起来"',children:[]},{level:3,title:'3. 迭代提示机制（Iterative Prompting）——"代码不对就改，改到对为止"',children:[]},{level:3,title:"4. 整体架构协同",children:[]}]},{level:2,title:"实验结果",children:[{level:3,title:"探索能力",children:[]},{level:3,title:"科技树解锁",children:[]},{level:3,title:"零样本迁移",children:[]},{level:3,title:"消融实验",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:'冷思考："代码即行动"的边界在哪？',children:[{level:3,title:'1. Minecraft 是一个"友好"的测试环境',children:[]},{level:3,title:'2. 技能库的"天花板"',children:[]},{level:3,title:"3. 真正的贡献：Agent 范式的第三极",children:[]}]},{level:2,title:"总结",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
