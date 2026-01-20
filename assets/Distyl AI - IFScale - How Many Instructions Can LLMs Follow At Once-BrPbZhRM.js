const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2025-07-11</em></p>
<p>Distyl AI &#x53D1;&#x5E03;&#x7684;&#x8BBA;&#x6587; <strong>&#x300A;<a href="https://arxiv.org/abs/2507.11538">How Many Instructions Can LLMs Follow At Once?</a>&#x300B;</strong> &#x63A2;&#x8BA8;&#x4E86;&#x4E00;&#x4E2A;&#x975E;&#x5E38;&#x5B9E;&#x9645;&#x4E14;&#x7D27;&#x8FEB;&#x7684;&#x95EE;&#x9898;&#xFF1A;<strong>&#x5927;&#x6A21;&#x578B;&#x7A76;&#x7ADF;&#x80FD;&#x540C;&#x65F6;&#x9075;&#x5FAA;&#x591A;&#x5C11;&#x6761;&#x6307;&#x4EE4;&#xFF1F;</strong></p>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x57FA;&#x51C6;&#x6D4B;&#x8BD5; <strong>IFScale</strong>&#xFF0C;&#x4E13;&#x95E8;&#x7528;&#x4E8E;&#x8BC4;&#x4F30;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x5728;&#x9AD8;&#x5BC6;&#x5EA6;&#x6307;&#x4EE4;&#x4E0B;&#x7684;&#x8868;&#x73B0;&#x3002;</p>
<h2 id="IFScale &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#IFScale &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>IFScale &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x9AD8;&#x5BC6;&#x5EA6;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#xFF08;High-Density Instruction Following&#xFF09;&#x7684;&#x6027;&#x80FD;&#x8FB9;&#x754C;&#x672A;&#x77E5;&#x3002;</strong></p>
<p>&#x76EE;&#x524D;&#x7684;&#x5927;&#x6A21;&#x578B;&#x867D;&#x7136;&#x62E5;&#x6709;&#x767E;&#x4E07;&#x7EA7;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#xFF08;Context Window&#xFF09;&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x53EF;&#x4EE5;&#x8F93;&#x5165;&#x5927;&#x91CF;&#x4FE1;&#x606F;&#xFF0C;&#x4F46;&#x662F;&#xFF1A;</p>
<ul>
<li><strong>&#x73B0;&#x6709;&#x57FA;&#x51C6;&#x6D4B;&#x8BD5;&#x7684;&#x5C40;&#x9650;&#xFF1A;</strong> &#x5927;&#x591A;&#x6570;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#xFF08;Instruction Following&#xFF09;&#x7684;&#x6D4B;&#x8BD5;&#xFF08;&#x5982; FollowBench, ComplexBench&#xFF09;&#x53EA;&#x5173;&#x6CE8;&#x5C11;&#x91CF;&#x590D;&#x6742;&#x6307;&#x4EE4;&#x7684;&#x7EC4;&#x5408;&#xFF0C;&#x6216;&#x8005;&#x5355;&#x6761;&#x6307;&#x4EE4;&#x7684;&#x96BE;&#x5EA6;&#x3002;</li>
<li><strong>&#x76F2;&#x533A;&#xFF1A;</strong> &#x4E1A;&#x754C;&#x7F3A;&#x4E4F;&#x5BF9;&#x201C;&#x6570;&#x91CF;&#x7EA7;&#x201D;&#x6307;&#x4EE4;&#x538B;&#x529B;&#x7684;&#x8BC4;&#x4F30;&#x3002;&#x5F53;&#x7528;&#x6237;&#x4E00;&#x6B21;&#x6027;&#x6254;&#x7ED9;&#x6A21;&#x578B; 50&#x3001;100 &#x751A;&#x81F3; 500 &#x6761;&#x5177;&#x4F53;&#x7684;&#x4E1A;&#x52A1;&#x89C4;&#x5219;&#x65F6;&#xFF0C;&#x6A21;&#x578B;&#x8FD8;&#x80FD;&#x8BB0;&#x5F97;&#x4F4F;&#x5E76;&#x6267;&#x884C;&#x5417;&#xFF1F;</li>
</ul>
<p><strong>IFScale &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x901A;&#x8FC7;&#x751F;&#x6210;&#x5305;&#x542B; 500 &#x4E2A;&#x7279;&#x5B9A;&#x5173;&#x952E;&#x8BCD;&#x7EA6;&#x675F;&#x7684;&#x5546;&#x4E1A;&#x62A5;&#x544A;&#x4EFB;&#x52A1;&#xFF0C;&#x91CF;&#x5316;&#x4E86;&#x6A21;&#x578B;&#x5728;&#x6307;&#x4EE4;&#x5BC6;&#x5EA6;&#x589E;&#x52A0;&#x65F6;&#x7684;&#x6027;&#x80FD;&#x8870;&#x51CF;&#x66F2;&#x7EBF;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x975E;&#x5E38;&#x771F;&#x5B9E;&#xFF0C;&#x4E14;&#x968F;&#x7740; Agent &#x5E94;&#x7528;&#x7684;&#x843D;&#x5730;&#x53D8;&#x5F97;&#x6108;&#x53D1;&#x5173;&#x952E;&#x3002;</strong></p>
<ul>
<li><strong>&#x4F01;&#x4E1A;&#x7EA7;&#x5E94;&#x7528;&#x573A;&#x666F;&#xFF1A;</strong> &#x5728;&#x771F;&#x5B9E;&#x7684;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#xFF0C;AI &#x7CFB;&#x7EDF;&#x5F80;&#x5F80;&#x9700;&#x8981;&#x9075;&#x5FAA;&#x5927;&#x91CF;&#x7684;&#x4E1A;&#x52A1;&#x89C4;&#x5219;&#x3001;&#x5408;&#x89C4;&#x6027;&#x8981;&#x6C42;&#x3001;&#x98CE;&#x683C;&#x6307;&#x5357;&#x548C;&#x683C;&#x5F0F;&#x9650;&#x5236;&#x3002;&#x6BD4;&#x5982;&#x751F;&#x6210;&#x4E00;&#x4EFD;&#x7B26;&#x5408; SEC &#x89C4;&#x5B9A;&#x7684;&#x8D22;&#x52A1;&#x62A5;&#x544A;&#xFF0C;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x9700;&#x8981;&#x9075;&#x5B88;&#x51E0;&#x5341;&#x6761;&#x516C;&#x53F8;&#x653F;&#x7B56;&#x7684;&#x5BA2;&#x670D;&#x673A;&#x5668;&#x4EBA;&#x3002;</li>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x7684;&#x8BEF;&#x533A;&#xFF1A;</strong> &#x6211;&#x4EEC;&#x5E38;&#x4EE5;&#x4E3A;&#x201C;&#x80FD;&#x5B58;&#x8FDB; Context &#x5C31;&#x80FD;&#x88AB;&#x7406;&#x89E3;&#x201D;&#xFF0C;&#x4F46;&#x4E8B;&#x5B9E;&#x8BC1;&#x660E;&#xFF0C;&#x201C;&#x80FD;&#x770B;&#x89C1;&#x201D;&#x4E0D;&#x4EE3;&#x8868;&#x201C;&#x80FD;&#x6267;&#x884C;&#x201D;&#x3002;&#x6A21;&#x578B;&#x5728;&#x9AD8;&#x8D1F;&#x8F7D;&#x4E0B;&#x7684;&#x6CE8;&#x610F;&#x529B;&#x5206;&#x914D;&#x662F;&#x4E00;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x6311;&#x6218;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<p>&#x4E3B;&#x8981;&#x5F52;&#x56E0;&#x4E8E;<strong>&#x6A21;&#x578B;&#x80FD;&#x529B;&#x7684;&#x6F14;&#x8FDB;</strong>&#xFF1A;</p>
<ol>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x7684;&#x7206;&#x53D1;&#xFF1A;</strong> &#x4EE5;&#x524D;&#x7684;&#x6A21;&#x578B;&#x8BFB;&#x4E0D;&#x4E86;&#x90A3;&#x4E48;&#x957F;&#x7684; Prompt&#xFF0C;&#x6D4B;&#x51E0;&#x767E;&#x6761;&#x6307;&#x4EE4;&#x6CA1;&#x610F;&#x4E49;&#x3002;&#x73B0;&#x5728;&#x767E;&#x4E07; token &#x7684;&#x7A97;&#x53E3;&#x5DF2;&#x6210;&#x6807;&#x914D;&#xFF0C;&#x4F7F;&#x5F97;&#x5355;&#x6B21; Prompt &#x5305;&#x542B;&#x6570;&#x767E;&#x6761;&#x6307;&#x4EE4;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</li>
<li><strong>&#x63A8;&#x7406;&#x6A21;&#x578B;&#xFF08;Reasoning Models&#xFF09;&#x7684;&#x5174;&#x8D77;&#xFF1A;</strong> &#x50CF; o1, o3, Gemini 1.5 Pro &#x8FD9;&#x7C7B;&#x5177;&#x5907;&#x5F3A;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x7684;&#x6A21;&#x578B;&#x51FA;&#x73B0;&#xFF0C;&#x8BA9;&#x4EBA;&#x4EEC;&#x5F00;&#x59CB;&#x671F;&#x5F85;&#x5B83;&#x4EEC;&#x80FD;&#x5904;&#x7406;&#x66F4;&#x590D;&#x6742;&#x7684;&#x903B;&#x8F91;&#x7EA6;&#x675F;&#x3002;</li>
<li><strong>Agent &#x7684;&#x590D;&#x6742;&#x5316;&#xFF1A;</strong> &#x73B0;&#x5728;&#x7684; Agent &#x4E0D;&#x518D;&#x662F;&#x7B80;&#x5355;&#x7684;&#x95EE;&#x7B54;&#x673A;&#xFF0C;&#x800C;&#x662F;&#x9700;&#x8981;&#x957F;&#x65F6;&#x95F4;&#x8FD0;&#x884C;&#x3001;&#x7EF4;&#x62A4;&#x590D;&#x6742;&#x72B6;&#x6001;&#x548C;&#x89C4;&#x5219;&#x7684;&#x7CFB;&#x7EDF;&#xFF0C;&#x5BF9;&#x201C;&#x591A;&#x6307;&#x4EE4;&#x5E76;&#x53D1;&#x201D;&#x7684;&#x9700;&#x6C42;&#x6FC0;&#x589E;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>&#x7814;&#x7A76;&#x56E2;&#x961F;&#x8BBE;&#x8BA1;&#x4E86;&#x4E00;&#x4E2A;&#x5DE7;&#x5999;&#x4E14;&#x53EF;&#x91CF;&#x5316;&#x7684;&#x5B9E;&#x9A8C;&#x65B9;&#x6848;&#xFF1A;</p>
<ul>
<li><strong>&#x4EFB;&#x52A1;&#x8BBE;&#x8BA1;&#xFF1A;</strong> &#x8981;&#x6C42;&#x6A21;&#x578B;&#x64B0;&#x5199;&#x4E00;&#x4EFD;&#x4E13;&#x4E1A;&#x7684;&#x5546;&#x4E1A;&#x62A5;&#x544A;&#x3002;</li>
<li><strong>&#x7EA6;&#x675F;&#x6761;&#x4EF6;&#xFF1A;</strong> &#x8F93;&#x5165;&#x4E2D;&#x5305;&#x542B; N &#x6761;&#xFF08;&#x4ECE; 10 &#x5230; 500&#xFF09;&#x5177;&#x4F53;&#x7684;&#x5173;&#x952E;&#x8BCD;&#x7EA6;&#x675F;&#xFF0C;&#x8981;&#x6C42;&#x62A5;&#x544A;&#x4E2D;&#x5FC5;&#x987B;&#x51C6;&#x786E;&#x5305;&#x542B;&#x8FD9;&#x4E9B;&#x8BCD;&#x3002;</li>
<li><strong>&#x6570;&#x636E;&#x6765;&#x6E90;&#xFF1A;</strong> &#x5173;&#x952E;&#x8BCD;&#x6765;&#x81EA; SEC 10-K &#x6587;&#x4EF6;&#xFF0C;&#x7ECF;&#x8FC7;&#x7CBE;&#x5FC3;&#x7B5B;&#x9009;&#xFF08;&#x53BB;&#x9664;&#x540C;&#x4E49;&#x8BCD;&#x3001;&#x4F4E;&#x9891;&#x8BCD;&#xFF09;&#xFF0C;&#x786E;&#x4FDD;&#x662F;&#x6807;&#x51C6;&#x7684;&#x5546;&#x4E1A;&#x672F;&#x8BED;&#x3002;</li>
<li><strong>&#x8BC4;&#x4F30;&#x6307;&#x6807;&#xFF1A;</strong> &#x76F4;&#x63A5;&#x7EDF;&#x8BA1;&#x8F93;&#x51FA;&#x62A5;&#x544A;&#x4E2D;&#x5305;&#x542B;&#x7684;&#x5173;&#x952E;&#x8BCD;&#x6570;&#x91CF;&#xFF0C;&#x8BA1;&#x7B97;&#x51C6;&#x786E;&#x7387;&#xFF08;Accuracy&#xFF09;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x907F;&#x5F00;&#x4E86;&#x4E3B;&#x89C2;&#x8BC4;&#x4EF7;&#xFF0C;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x7EAF;&#x7CB9;&#x7684;&#x3001;&#x786C;&#x6838;&#x7684;**&#x201C;&#x6307;&#x4EE4;&#x53EC;&#x56DE;&#x7387;&#x201D;**&#x6D4B;&#x8BD5;&#x3002;</p>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>&#x76EE;&#x524D;&#x7684;&#x8BC4;&#x4F30;&#x591A;&#x4FA7;&#x91CD;&#x4E8E;&#x201C;&#x63A8;&#x7406;&#x6DF1;&#x5EA6;&#x201D;&#x800C;&#x975E;&#x201C;&#x6307;&#x4EE4;&#x5E7F;&#x5EA6;&#x201D;&#xFF1A;</p>
<ul>
<li><strong>ComplexBench / FollowBench&#xFF1A;</strong> &#x4FA7;&#x91CD;&#x4E8E;&#x5355;&#x6761;&#x6307;&#x4EE4;&#x7684;&#x903B;&#x8F91;&#x590D;&#x6742;&#x5EA6;&#xFF08;&#x5982;&#x201C;&#x5982;&#x679C; A &#x4E14; B&#xFF0C;&#x5219; C&#x201D;&#xFF09;&#xFF0C;&#x800C;&#x975E;&#x6307;&#x4EE4;&#x7684;&#x6570;&#x91CF;&#x5806;&#x53E0;&#x3002;</li>
<li><strong>Haystack Needle Test&#xFF08;&#x5927;&#x6D77;&#x635E;&#x9488;&#xFF09;&#xFF1A;</strong> &#x4FA7;&#x91CD;&#x4E8E;&#x68C0;&#x7D22;&#xFF08;Retrieval&#xFF09;&#xFF0C;&#x5373;&#x201C;&#x627E;&#x5230;&#x201D;&#x4FE1;&#x606F;&#xFF0C;&#x800C; IFScale &#x4FA7;&#x91CD;&#x4E8E;&#x751F;&#x6210;&#x65F6;&#x7684;&#x201C;&#x7EA6;&#x675F;&#x6EE1;&#x8DB3;&#x201D;&#xFF08;Constraint Satisfaction&#xFF09;&#x3002;</li>
</ul>
<p><strong>IFScale &#x7684;&#x72EC;&#x7279;&#x4EF7;&#x503C;&#xFF1A;</strong> &#x5B83;&#x63ED;&#x793A;&#x4E86;&#x6A21;&#x578B;&#x5728;&#x8BA4;&#x77E5;&#x8D1F;&#x8F7D;&#xFF08;Cognitive Load&#xFF09;&#x8FC7;&#x8F7D;&#x65F6;&#x7684;&#x5D29;&#x6E83;&#x65B9;&#x5F0F;&#xFF0C;&#x8FD9;&#x662F;&#x5176;&#x4ED6; Benchmark &#x6CA1;&#x6D4B;&#x51FA;&#x6765;&#x7684;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x6307;&#x4EE4;&#x5BC6;&#x5EA6; (Instruction Density)"><a href="#1. &#x6307;&#x4EE4;&#x5BC6;&#x5EA6; (Instruction Density)"></a>1. &#x6307;&#x4EE4;&#x5BC6;&#x5EA6; (Instruction Density)</h3>
<p>&#x8FD9;&#x662F;&#x8BBA;&#x6587;&#x5B9A;&#x4E49;&#x7684;&#x6838;&#x5FC3;&#x53D8;&#x91CF;&#x3002;&#x6307;&#x5728;&#x5355;&#x4E2A; Prompt &#x4E2D;&#x540C;&#x65F6;&#x7ED9;&#x51FA;&#x7684;&#x72EC;&#x7ACB;&#x7EA6;&#x675F;&#x6761;&#x4EF6;&#x7684;&#x6570;&#x91CF;&#x3002;
&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#xFF0C;&#x5373;&#x4FBF;&#x662F;&#x6700;&#x5F3A;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x5982; o3, Gemini 1.5 Pro&#xFF09;&#xFF0C;&#x5728; 500 &#x6761;&#x6307;&#x4EE4;&#x7684;&#x5BC6;&#x5EA6;&#x4E0B;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x4E5F;&#x53EA;&#x6709; <strong>68%</strong> &#x5DE6;&#x53F3;&#x3002;&#x8FD9;&#x8BF4;&#x660E;&#x5927;&#x6A21;&#x578B;&#x8DDD;&#x79BB;&#x5B8C;&#x7F8E;&#x7684;&#x201C;&#x6309;&#x89C4;&#x77E9;&#x529E;&#x4E8B;&#x201D;&#x8FD8;&#x6709;&#x5F88;&#x957F;&#x7684;&#x8DEF;&#x8981;&#x8D70;&#x3002;</p>
<h3 id="2. &#x6027;&#x80FD;&#x8870;&#x51CF;&#x6A21;&#x5F0F; (Degradation Patterns)"><a href="#2. &#x6027;&#x80FD;&#x8870;&#x51CF;&#x6A21;&#x5F0F; (Degradation Patterns)"></a>2. &#x6027;&#x80FD;&#x8870;&#x51CF;&#x6A21;&#x5F0F; (Degradation Patterns)</h3>
<p>&#x8FD9;&#x662F;&#x8BBA;&#x6587;&#x6700;&#x6709;&#x8DA3;&#x7684;&#x53D1;&#x73B0;&#xFF0C;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x6A21;&#x578B;&#x5728;&#x538B;&#x529B;&#x4E0B;&#x8868;&#x73B0;&#x51FA;&#x622A;&#x7136;&#x4E0D;&#x540C;&#x7684;&#x5D29;&#x6E83;&#x65B9;&#x5F0F;&#xFF1A;</p>
<ul>
<li>
<p><strong>&#x9608;&#x503C;&#x8870;&#x51CF; (Threshold Decay)&#xFF1A;</strong></p>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x6A21;&#x578B;&#xFF1A;</strong> &#x63A8;&#x7406;&#x6A21;&#x578B;&#xFF08;&#x5982; o3, Gemini-1.5-Pro&#xFF09;&#x3002;</li>
<li><strong>&#x7279;&#x5F81;&#xFF1A;</strong> &#x5728;&#x8FBE;&#x5230;&#x67D0;&#x4E2A;&#x4E34;&#x754C;&#x70B9;&#x4E4B;&#x524D;&#xFF0C;&#x8868;&#x73B0;&#x975E;&#x5E38;&#x5B8C;&#x7F8E;&#xFF08;&#x8FD1;&#x4E4E; 100%&#xFF09;&#x3002;&#x4E00;&#x65E6;&#x8D85;&#x8FC7;&#x8FD9;&#x4E2A;&#x4E34;&#x754C;&#x503C;&#xFF08;&#x6BD4;&#x5982; 300 &#x6761;&#xFF09;&#xFF0C;&#x6027;&#x80FD;&#x7A81;&#x7136;&#x65AD;&#x5D16;&#x5F0F;&#x4E0B;&#x8DCC;&#xFF0C;&#x4E14;&#x65B9;&#x5DEE;&#x53D8;&#x5927;&#x3002;</li>
<li><strong>&#x542F;&#x793A;&#xFF1A;</strong> &#x8FD9;&#x7C7B;&#x6A21;&#x578B;&#x201C;&#x8981;&#x4E48;&#x5168;&#x5BF9;&#xFF0C;&#x8981;&#x4E48;&#x5D29;&#x6E83;&#x201D;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x9700;&#x8981;&#x627E;&#x5230;&#x90A3;&#x4E2A;&#x5B89;&#x5168;&#x9608;&#x503C;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7EBF;&#x6027;&#x8870;&#x51CF; (Linear Decay)&#xFF1A;</strong></p>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x6A21;&#x578B;&#xFF1A;</strong> GPT-4.1, Claude 3.5 Sonnet&#x3002;</li>
<li><strong>&#x7279;&#x5F81;&#xFF1A;</strong> &#x968F;&#x7740;&#x6307;&#x4EE4;&#x589E;&#x591A;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x7A33;&#x6B65;&#x3001;&#x7EBF;&#x6027;&#x5730;&#x4E0B;&#x964D;&#x3002;</li>
<li><strong>&#x542F;&#x793A;&#xFF1A;</strong> &#x884C;&#x4E3A;&#x53EF;&#x9884;&#x6D4B;&#xFF0C;&#x9002;&#x5408;&#x505A;&#x964D;&#x7EA7;&#x5904;&#x7406;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x6307;&#x6570;&#x8870;&#x51CF; (Exponential Decay)&#xFF1A;</strong></p>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x6A21;&#x578B;&#xFF1A;</strong> GPT-4o, Llama-4&#x3002;</li>
<li><strong>&#x7279;&#x5F81;&#xFF1A;</strong> &#x54EA;&#x6015;&#x53EA;&#x589E;&#x52A0;&#x5C11;&#x91CF;&#x6307;&#x4EE4;&#xFF0C;&#x6027;&#x80FD;&#x4E5F;&#x4F1A;&#x8FC5;&#x901F;&#x4E0B;&#x964D;&#xFF0C;&#x65E0;&#x6CD5;&#x5904;&#x7406;&#x9AD8;&#x5BC6;&#x5EA6;&#x4EFB;&#x52A1;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="3. &#x9996;&#x56E0;&#x6548;&#x5E94; (Primacy Bias)"><a href="#3. &#x9996;&#x56E0;&#x6548;&#x5E94; (Primacy Bias)"></a>3. &#x9996;&#x56E0;&#x6548;&#x5E94; (Primacy Bias)</h3>
<p>&#x7814;&#x7A76;&#x53D1;&#x73B0;&#xFF0C;&#x6A21;&#x578B;&#x66F4;&#x5BB9;&#x6613;&#x5FFD;&#x7565;&#x5217;&#x8868;<strong>&#x540E;&#x9762;</strong>&#x7684;&#x6307;&#x4EE4;&#x3002;</p>
<ul>
<li><strong>&#x4F4D;&#x7F6E;&#x504F;&#x5DEE;&#xFF1A;</strong> &#x5728;&#x9AD8;&#x5BC6;&#x5EA6;&#x4E0B;&#xFF0C;&#x6392;&#x5728;&#x524D;&#x9762;&#x7684;&#x6307;&#x4EE4;&#x5B8C;&#x6210;&#x5EA6;&#x663E;&#x8457;&#x9AD8;&#x4E8E;&#x6392;&#x5728;&#x540E;&#x9762;&#x7684;&#x3002;</li>
<li><strong>&#x8FD9;&#x610F;&#x5473;&#x7740;&#xFF1A;</strong> &#x5982;&#x679C;&#x4F60;&#x6709;&#x6781;&#x5176;&#x91CD;&#x8981;&#x7684;&#x5B89;&#x5168;&#x89C4;&#x5219;&#x6216;&#x6838;&#x5FC3;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF0C;<strong>&#x4E00;&#x5B9A;&#x8981;&#x5199;&#x5728; Prompt &#x7684;&#x6700;&#x524D;&#x9762;</strong>&#x3002;</li>
</ul>
<h3 id="4. &#x63A8;&#x7406;&#x80FD;&#x529B;&#x4E0E;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x7684;&#x76F8;&#x5173;&#x6027;"><a href="#4. &#x63A8;&#x7406;&#x80FD;&#x529B;&#x4E0E;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x7684;&#x76F8;&#x5173;&#x6027;"></a>4. &#x63A8;&#x7406;&#x80FD;&#x529B;&#x4E0E;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x7684;&#x76F8;&#x5173;&#x6027;</h3>
<p>&#x8BBA;&#x6587;&#x6307;&#x51FA;&#xFF0C;<strong>&#x6A21;&#x578B;&#x7684;&#x5927;&#x5C0F;&#xFF08;Size&#xFF09;&#x548C;&#x63A8;&#x7406;&#x80FD;&#x529B;&#xFF08;Reasoning Capability&#xFF09;</strong> &#x4E0E;&#x6297;&#x5E72;&#x6270;&#x80FD;&#x529B;&#x5F3A;&#x76F8;&#x5173;&#x3002;
&#x63A8;&#x7406;&#x6A21;&#x578B;&#xFF08;Reasoning Models&#xFF09;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x505A;&#x6570;&#x5B66;&#x9898;&#x597D;&#xFF0C;&#x5B83;&#x4EEC;&#x5728;&#x5904;&#x7406;&#x8FD9;&#x79CD;&#x9700;&#x8981;&#x9AD8;&#x5EA6;&#x6CE8;&#x610F;&#x529B;&#x5206;&#x914D;&#x7684;&#x4EFB;&#x52A1;&#x65F6;&#xFF0C;&#x4E5F;&#x8868;&#x73B0;&#x51FA;&#x4E86;&#x7C7B;&#x4F3C;&#x201C;&#x5DE5;&#x4F5C;&#x8BB0;&#x5FC6;&#xFF08;Working Memory&#xFF09;&#x201D;&#x66F4;&#x5F3A;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x80FD;&#x7EF4;&#x6301;&#x66F4;&#x4E45;&#x7684;&#x7A33;&#x5B9A;&#x6027;&#xFF08;Threshold Pattern&#xFF09;&#x3002;</p>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>IFScale &#x544A;&#x8BC9;&#x6211;&#x4EEC;&#xFF0C;&#x867D;&#x7136;&#x5927;&#x6A21;&#x578B;&#x770B;&#x8D77;&#x6765;&#x65E0;&#x6240;&#x4E0D;&#x80FD;&#xFF0C;&#x4F46;&#x5728;&#x9762;&#x5BF9;&#x201C;&#x7E41;&#x7410;&#x7684;&#x89C4;&#x5219;&#x201D;&#x65F6;&#xFF0C;&#x5B83;&#x4EEC;&#x4F9D;&#x7136;&#x50CF;&#x4EBA;&#x7C7B;&#x4E00;&#x6837;&#x4F1A;&#x201C;&#x987E;&#x6B64;&#x5931;&#x5F7C;&#x201D;&#x3002;</p>
<ol>
<li><strong>&#x4E0D;&#x8981;&#x76F2;&#x76EE;&#x5806;&#x780C;&#x6307;&#x4EE4;&#xFF1A;</strong> &#x76EE;&#x524D;&#x9876;&#x5C16;&#x6A21;&#x578B;&#x7684;&#x6781;&#x9650;&#x5927;&#x7EA6;&#x5728;&#x51E0;&#x767E;&#x6761;&#xFF0C;&#x666E;&#x901A;&#x6A21;&#x578B;&#x51E0;&#x5341;&#x6761;&#x5C31;&#x5F00;&#x59CB;&#x4E22;&#x4E09;&#x843D;&#x56DB;&#x4E86;&#x3002;</li>
<li><strong>&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x6A21;&#x578B;&#xFF1A;</strong> &#x5BF9;&#x4E8E;&#x89C4;&#x5219;&#x5BC6;&#x96C6;&#x578B;&#x4EFB;&#x52A1;&#xFF0C;<strong>&#x63A8;&#x7406;&#x6A21;&#x578B;&#xFF08;Reasoning Models&#xFF09;</strong> &#x6216;&#x8BB8;&#x662F;&#x6BD4;&#x901A;&#x7528;&#x6A21;&#x578B;&#x66F4;&#x597D;&#x7684;&#x9009;&#x62E9;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x80FD;&#x575A;&#x6301;&#x66F4;&#x4E45;&#x4E0D;&#x5D29;&#x6E83;&#x3002;</li>
<li><strong>Prompt &#x5DE5;&#x7A0B;&#x5F88;&#x91CD;&#x8981;&#xFF1A;</strong> &#x628A;&#x91CD;&#x8981;&#x7684;&#x89C4;&#x5219;&#x653E;&#x524D;&#x9762;&#xFF0C;&#x5C3D;&#x91CF;&#x7CBE;&#x7B80;&#x6307;&#x4EE4;&#x6570;&#x91CF;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2507.11538">&#x8BBA;&#x6587;&#x94FE;&#x63A5; (Arxiv)</a></li>
<li><a href="https://distylai.github.io/IFScale">&#x9879;&#x76EE;&#x4E3B;&#x9875; (IFScale)</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2025-11-20</em></p>
`,E=[{level:2,title:"IFScale 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 指令密度 (Instruction Density)",children:[]},{level:3,title:"2. 性能衰减模式 (Degradation Patterns)",children:[]},{level:3,title:"3. 首因效应 (Primacy Bias)",children:[]},{level:3,title:"4. 推理能力与指令遵循的相关性",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
