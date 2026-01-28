const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2024-01-11</em></p>
<p>DeepSeek &#x53D1;&#x5E03;&#x7684; <strong>DeepSeekMoE</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2401.06066">DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models</a>&#x300B;&#xFF09;&#x662F;&#x5BF9;&#x73B0;&#x6709;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;&#x6A21;&#x578B;&#xFF08;MoE&#xFF09;&#x67B6;&#x6784;&#x7684;&#x4E00;&#x6B21;&#x91CD;&#x8981;&#x9769;&#x65B0;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x5B83;&#x901A;&#x8FC7;<strong>&#x628A;&#x5927;&#x4E13;&#x5BB6;&#x5207;&#x788E;</strong>&#xFF08;&#x7EC6;&#x7C92;&#x5EA6;&#x5206;&#x5272;&#xFF09;&#x548C;<strong>&#x8BBE;&#x7F6E;&#x201C;&#x516C;&#x7528;&#x201D;&#x4E13;&#x5BB6;</strong>&#xFF08;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x9694;&#x79BB;&#xFF09;&#xFF0C;&#x89E3;&#x51B3;&#x4E86;&#x4F20;&#x7EDF; MoE &#x6A21;&#x578B;&#x4E2D;&#x4E13;&#x5BB6;&#x201C;&#x5B66;&#x800C;&#x4E0D;&#x7CBE;&#x201D;&#x548C;&#x201C;&#x77E5;&#x8BC6;&#x5197;&#x4F59;&#x201D;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x5B9E;&#x73B0;&#x4E86;&#x66F4;&#x6781;&#x81F4;&#x7684;&#x4E13;&#x5BB6;&#x4E13;&#x4E1A;&#x5316;&#x3002;</p>
<h2 id="&#x524D;&#x7F6E;&#x80CC;&#x666F;&#xFF1A;&#x4ECE; Dense &#x5230; Sparse &#x7684;&#x8BA1;&#x7B97;&#x9769;&#x547D;"><a href="#&#x524D;&#x7F6E;&#x80CC;&#x666F;&#xFF1A;&#x4ECE; Dense &#x5230; Sparse &#x7684;&#x8BA1;&#x7B97;&#x9769;&#x547D;"></a>&#x524D;&#x7F6E;&#x80CC;&#x666F;&#xFF1A;&#x4ECE; Dense &#x5230; Sparse &#x7684;&#x8BA1;&#x7B97;&#x9769;&#x547D;</h2>
<p>&#x8981;&#x7406;&#x89E3; DeepSeekMoE&#xFF0C;&#x6211;&#x4EEC;&#x5FC5;&#x987B;&#x5148;&#x56DE;&#x5230; 2017 &#x5E74;&#xFF0C;Google Brain &#x56E2;&#x961F;&#x53D1;&#x8868;&#x4E86;&#x4E00;&#x7BC7;&#x540D;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/1701.06538">Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer</a>&#x300B;&#x7684;&#x5F00;&#x521B;&#x6027;&#x8BBA;&#x6587;&#x3002;</p>
<h3 id="1. Transformer &#x7684;&#x53C2;&#x6570;&#x5206;&#x5E03;&#xFF1A;&#x4E3A;&#x4F55; FFN &#x662F;&#x4F18;&#x5316;&#x7684;&#x5173;&#x952E;&#xFF1F;"><a href="#1. Transformer &#x7684;&#x53C2;&#x6570;&#x5206;&#x5E03;&#xFF1A;&#x4E3A;&#x4F55; FFN &#x662F;&#x4F18;&#x5316;&#x7684;&#x5173;&#x952E;&#xFF1F;"></a>1. Transformer &#x7684;&#x53C2;&#x6570;&#x5206;&#x5E03;&#xFF1A;&#x4E3A;&#x4F55; FFN &#x662F;&#x4F18;&#x5316;&#x7684;&#x5173;&#x952E;&#xFF1F;</h3>
<p>&#x5728;&#x6807;&#x51C6;&#x7684; Transformer&#xFF08;Decoder-only &#x67B6;&#x6784;&#xFF09;&#x4E2D;&#xFF0C;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x4E3B;&#x8981;&#x96C6;&#x4E2D;&#x5728;&#x4E24;&#x4E2A;&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#xFF1A;<strong>&#x81EA;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF08;Self-Attention&#xFF09;<strong>&#x548C;</strong>&#x524D;&#x9988;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF08;Feed-Forward Network, FFN&#xFF09;</strong>&#x3002;</p>
<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6570;&#x5B66;&#x63A8;&#x5BFC;&#x6765;&#x91CF;&#x5316;&#x4E24;&#x8005;&#x7684;&#x53C2;&#x6570;&#x5360;&#x6BD4;&#x3002;&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x7684;&#x9690;&#x85CF;&#x5C42;&#x7EF4;&#x5EA6;&#x4E3A; $d_{model}$&#xFF1A;</p>
<ul>
<li><strong>Attention &#x5C42;&#xFF1A;</strong> &#x5305;&#x542B; $W_Q, W_K, W_V, W_O$ &#x56DB;&#x4E2A;&#x6295;&#x5F71;&#x77E9;&#x9635;&#xFF0C;&#x6BCF;&#x4E2A;&#x5C3A;&#x5BF8;&#x7EA6;&#x4E3A; $d_{model} \\times d_{model}$&#x3002;
<ul>
<li>&#x53C2;&#x6570;&#x91CF; $\\approx 4 d_{model}^2$</li>
</ul>
</li>
<li><strong>FFN &#x5C42;&#xFF1A;</strong> &#x901A;&#x5E38;&#x91C7;&#x7528;&#x4E24;&#x5C42; MLP &#x7ED3;&#x6784;&#xFF0C;&#x4E2D;&#x95F4;&#x9690;&#x5C42;&#x7EF4;&#x5EA6; $d_{ff}$ &#x901A;&#x5E38;&#x653E;&#x5927; 4 &#x500D;&#xFF08;&#x5373; $d_{ff} = 4 d_{model}$&#xFF09;&#x3002;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x7EBF;&#x6027;&#x53D8;&#x6362;&#x77E9;&#x9635;&#xFF1A;&#x5347;&#x7EF4;&#x77E9;&#x9635; $W_1 (d_{model} \\times 4d_{model})$ &#x548C;&#x964D;&#x7EF4;&#x77E9;&#x9635; $W_2 (4d_{model} \\times d_{model})$&#x3002;
<ul>
<li>&#x53C2;&#x6570;&#x91CF; $\\approx 2 \\times 4 d_{model}^2 = 8 d_{model}^2$</li>
</ul>
</li>
</ul>
<p><strong>&#x7ED3;&#x8BBA;&#xFF1A;FFN &#x5C42;&#x7684;&#x53C2;&#x6570;&#x91CF;&#x7EA6;&#x4E3A; Attention &#x5C42;&#x7684; 2 &#x500D;&#xFF0C;&#x5360;&#x636E;&#x4E86;&#x6A21;&#x578B;&#x603B;&#x53C2;&#x6570;&#x91CF;&#xFF08;&#x4E0D;&#x542B; Embedding&#xFF09;&#x7684;&#x7EA6; 67%&#x3002;</strong> &#x8FD9;&#x610F;&#x5473;&#x7740;&#x5728;&#x7A20;&#x5BC6;&#xFF08;Dense&#xFF09;&#x6A21;&#x578B;&#x4E2D;&#xFF0C;FFN &#x662F;&#x8BA1;&#x7B97;&#x5F00;&#x9500;&#xFF08;FLOPs&#xFF09;&#x548C;&#x5B58;&#x50A8;&#x5F00;&#x9500;&#x7684;&#x4E3B;&#x8981;&#x6765;&#x6E90;&#x3002;</p>
<h3 id="2. MoE &#x7684;&#x6838;&#x5FC3;&#x7406;&#x5FF5;&#xFF1A;&#x6761;&#x4EF6;&#x8BA1;&#x7B97;"><a href="#2. MoE &#x7684;&#x6838;&#x5FC3;&#x7406;&#x5FF5;&#xFF1A;&#x6761;&#x4EF6;&#x8BA1;&#x7B97;"></a>2. MoE &#x7684;&#x6838;&#x5FC3;&#x7406;&#x5FF5;&#xFF1A;&#x6761;&#x4EF6;&#x8BA1;&#x7B97;</h3>
<p>&#x9274;&#x4E8E; FFN &#x5360;&#x636E;&#x4E86;&#x7EDD;&#x5927;&#x90E8;&#x5206;&#x53C2;&#x6570;&#xFF0C;MoE&#xFF08;Mixture-of-Experts&#xFF09;&#x67B6;&#x6784;&#x9009;&#x62E9;&#x5C06;&#x5176;&#x4F5C;&#x4E3A;&#x4F18;&#x5316;&#x7684;&#x4E3B;&#x9635;&#x5730;&#x3002;&#x5B83;&#x5F15;&#x5165;&#x4E86;<strong>&#x6761;&#x4EF6;&#x8BA1;&#x7B97;&#xFF08;Conditional Computation&#xFF09;<strong>&#x673A;&#x5236;&#xFF0C;&#x5C06;&#x9759;&#x6001;&#x7684;</strong>&#x7A20;&#x5BC6;&#x8BA1;&#x7B97;&#xFF08;Dense Computing&#xFF09;<strong>&#x8F6C;&#x5316;&#x4E3A;&#x52A8;&#x6001;&#x7684;</strong>&#x7A00;&#x758F;&#x8BA1;&#x7B97;&#xFF08;Sparse Computing&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li><strong>&#x4E13;&#x5BB6;&#x5206;&#x89E3;&#xFF08;Expert Decomposition&#xFF09;&#xFF1A;</strong> &#x5C06;&#x539F;&#x672C;&#x5E9E;&#x5927;&#x7684; FFN &#x6743;&#x91CD;&#x77E9;&#x9635;&#x62C6;&#x89E3;&#x4E3A; $N$ &#x4E2A;&#x72EC;&#x7ACB;&#x7684;&#x201C;&#x4E13;&#x5BB6;&#x201D;&#xFF08;Experts&#xFF09;&#xFF0C;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x7684; FFN &#x7F51;&#x7EDC;&#x3002;</li>
<li><strong>&#x7A00;&#x758F;&#x8DEF;&#x7531;&#xFF08;Sparse Routing&#xFF09;&#xFF1A;</strong> &#x5F15;&#x5165;&#x4E00;&#x4E2A;&#x53EF;&#x8BAD;&#x7EC3;&#x7684;<strong>&#x95E8;&#x63A7;&#x7F51;&#x7EDC;&#xFF08;Gating Network / Router&#xFF09;</strong>&#x3002;&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x8F93;&#x5165; Token&#xFF0C;&#x95E8;&#x63A7;&#x7F51;&#x7EDC;&#x4EC5;&#x52A8;&#x6001;&#x6FC0;&#x6D3B; <strong>Top-k</strong>&#xFF08;&#x901A;&#x5E38; $k=1$ &#x6216; $2$&#xFF09;&#x4E2A;&#x6700;&#x76F8;&#x5173;&#x7684;&#x4E13;&#x5BB6;&#x53C2;&#x4E0E;&#x8BA1;&#x7B97;&#x3002;</li>
</ul>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48; MoE &#x80FD;&#x201C;&#x4EE5;&#x5C0F;&#x535A;&#x5927;&#x201D;&#xFF1F;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48; MoE &#x80FD;&#x201C;&#x4EE5;&#x5C0F;&#x535A;&#x5927;&#x201D;&#xFF1F;"></a>3. &#x4E3A;&#x4EC0;&#x4E48; MoE &#x80FD;&#x201C;&#x4EE5;&#x5C0F;&#x535A;&#x5927;&#x201D;&#xFF1F;</h3>
<p>MoE &#x7684;&#x6838;&#x5FC3;&#x4F18;&#x52BF;&#x5728;&#x4E8E;<strong>&#x6A21;&#x578B;&#x5BB9;&#x91CF;&#xFF08;Capacity&#xFF09;&#x4E0E;&#x8BA1;&#x7B97;&#x91CF;&#xFF08;Compute&#xFF09;&#x7684;&#x89E3;&#x8026;</strong>&#x3002;</p>
<ul>
<li><strong>&#x53C2;&#x6570;&#x91CF;&#xFF08;Capacity&#xFF09;&#xFF1A;</strong> &#x53EF;&#x4EE5;&#x975E;&#x5E38;&#x5927;&#xFF08;&#x6BD4;&#x5982;&#x4E00;&#x4E07;&#x4EBF;&#xFF09;&#xFF0C;&#x56E0;&#x4E3A;&#x4E13;&#x5BB6;&#x5F88;&#x591A;&#xFF0C;&#x77E5;&#x8BC6;&#x5E93;&#x5DE8;&#x5927;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#x91CF;&#xFF08;Compute&#xFF09;&#xFF1A;</strong> &#x4FDD;&#x6301;&#x5F88;&#x5C0F;&#xFF08;&#x6BD4;&#x5982;&#x53EA;&#x6709;&#x4E00;&#x767E;&#x4EBF;&#xFF09;&#xFF0C;&#x56E0;&#x4E3A;&#x5BF9;&#x4E8E;&#x5355;&#x4E2A; Token&#xFF0C;&#x6BCF;&#x6B21;&#x53EA;&#x6FC0;&#x6D3B;&#x6781;&#x5C11;&#x90E8;&#x5206;&#x7684;&#x53C2;&#x6570;&#xFF08;Active Parameters&#xFF09;&#x3002;</li>
</ul>
<h3 id="4. &#x6F14;&#x8FDB;&#x8DEF;&#x7EBF;"><a href="#4. &#x6F14;&#x8FDB;&#x8DEF;&#x7EBF;"></a>4. &#x6F14;&#x8FDB;&#x8DEF;&#x7EBF;</h3>
<ul>
<li><strong>2017 (Shazeer et al.):</strong> &#x9996;&#x6B21;&#x5728;&#x5927;&#x89C4;&#x6A21; LSTM &#x4E0A;&#x9A8C;&#x8BC1;&#x4E86; MoE&#xFF0C;&#x5B9E;&#x73B0;&#x4E86; 1000 &#x500D;&#x7684;&#x6A21;&#x578B;&#x5BB9;&#x91CF;&#x63D0;&#x5347;&#x3002;</li>
<li><strong>2020 (GShard / Switch Transformer):</strong> Google &#x5C06; MoE &#x5B8C;&#x7F8E;&#x878D;&#x5165; Transformer&#xFF0C;&#x786E;&#x7ACB;&#x4E86; <strong>Top-2 &#x8DEF;&#x7531;</strong>&#xFF08;GShard&#xFF09;&#x548C; <strong>Top-1 &#x8DEF;&#x7531;</strong>&#xFF08;Switch&#xFF09;&#x7684;&#x6807;&#x51C6;&#x8303;&#x5F0F;&#x3002;&#x8FD9;&#x6210;&#x4E3A;&#x4E86;&#x540E;&#x6765;&#x5F88;&#x957F;&#x4E00;&#x6BB5;&#x65F6;&#x95F4;&#x5185; MoE &#x7684;&#x201C;&#x51FA;&#x5382;&#x8BBE;&#x7F6E;&#x201D;&#x3002;</li>
</ul>
<p><strong>&#x7136;&#x800C;&#xFF0C;&#x8FD9;&#x79CD;&#x201C;&#x6807;&#x51C6; MoE&#x201D;&#x968F;&#x7740;&#x6A21;&#x578B;&#x8D8A;&#x6765;&#x8D8A;&#x5927;&#xFF0C;&#x9010;&#x6E10;&#x66B4;&#x9732;&#x51FA;&#x4E86;&#x201C;&#x4E13;&#x5BB6;&#x540C;&#x8D28;&#x5316;&#x201D;&#x7684;&#x95EE;&#x9898;&#x2014;&#x2014;&#x8FD9;&#x6B63;&#x662F; DeepSeekMoE &#x767B;&#x573A;&#x7684;&#x5951;&#x673A;&#x3002;</strong></p>
<h2 id="DeepSeekMoE &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#DeepSeekMoE &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>DeepSeekMoE &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x4F20;&#x7EDF; MoE &#x67B6;&#x6784;&#xFF08;&#x5982; GShard&#xFF09;&#x4E2D;&#x7684;&#x4E13;&#x5BB6;&#x5F80;&#x5F80;&#x662F;&#x201C;&#x6742;&#x5BB6;&#x201D;&#x800C;&#x975E;&#x201C;&#x4E13;&#x5BB6;&#x201D;&#xFF0C;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x65E0;&#x6CD5;&#x8FBE;&#x5230;&#x7406;&#x8BBA;&#x4E0A;&#x9650;&#x3002;</strong></p>
<p>&#x5728; DeepSeekMoE &#x51FA;&#x73B0;&#x4E4B;&#x524D;&#xFF0C;&#x4E3B;&#x6D41;&#x7684; MoE &#x67B6;&#x6784;&#xFF08;&#x5373;&#x4E0A;&#x8FF0;&#x7684; Top-2 &#x8DEF;&#x7531;&#x6A21;&#x5F0F;&#xFF09;&#x5B58;&#x5728;&#x4E24;&#x4E2A;&#x4E3B;&#x8981;&#x987D;&#x75BE;&#xFF1A;</p>
<ul>
<li><strong>&#x77E5;&#x8BC6;&#x6DF7;&#x5408;&#xFF08;Knowledge Hybridity&#xFF09;&#xFF1A;</strong> &#x4F20;&#x7EDF; MoE &#x7684;&#x4E13;&#x5BB6;&#x6570;&#x91CF;&#x8F83;&#x5C11;&#x4E14;&#x4F53;&#x578B;&#x8F83;&#x5927;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5206;&#x914D;&#x7ED9;&#x540C;&#x4E00;&#x4E2A;&#x4E13;&#x5BB6;&#x7684; Token &#x53EF;&#x80FD;&#x5305;&#x542B;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x77E5;&#x8BC6;&#x70B9;&#x3002;&#x4E13;&#x5BB6;&#x88AB;&#x8FEB;&#x5728;&#x4E00;&#x4E2A;&#x809A;&#x5B50;&#x91CC;&#x88C5;&#x4E0B;&#x5929;&#x6587;&#x5730;&#x7406;&#xFF0C;&#x96BE;&#x4EE5;&#x4E13;&#x6CE8;&#x4E8E;&#x67D0;&#x4E00;&#x7279;&#x5B9A;&#x9886;&#x57DF;&#x3002;</li>
<li><strong>&#x77E5;&#x8BC6;&#x5197;&#x4F59;&#xFF08;Knowledge Redundancy&#xFF09;&#xFF1A;</strong> &#x6240;&#x6709;&#x7684; Token&#xFF08;&#x65E0;&#x8BBA;&#x662F;&#x5728;&#x8C08;&#x8BBA;&#x6570;&#x5B66;&#x8FD8;&#x662F;&#x6587;&#x5B66;&#xFF09;&#x90FD;&#x9700;&#x8981;&#x4E00;&#x4E9B;&#x901A;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x77E5;&#x8BC6;&#xFF08;&#x6BD4;&#x5982;&#x8BED;&#x6CD5;&#x7ED3;&#x6784;&#xFF09;&#x3002;&#x5728;&#x4F20;&#x7EDF; MoE &#x4E2D;&#xFF0C;&#x8FD9;&#x4E9B;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x88AB;&#x8FEB;&#x91CD;&#x590D;&#x5B58;&#x50A8;&#x5728;&#x6BCF;&#x4E00;&#x4E2A;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x91CC;&#xFF0C;&#x5BFC;&#x81F4;&#x4E86;&#x53C2;&#x6570;&#x7684;&#x5DE8;&#x5927;&#x6D6A;&#x8D39;&#x3002;</li>
</ul>
<p><strong>DeepSeekMoE &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x65B0;&#x7684;&#x8DEF;&#x7531;&#x67B6;&#x6784;&#xFF0C;&#x901A;&#x8FC7;&#x201C;&#x7EC6;&#x5207;&#x201D;&#x548C;&#x201C;&#x5171;&#x4EAB;&#x201D;&#xFF0C;&#x8BA9;&#x4E13;&#x7528;&#x4E13;&#x5BB6;&#x53EA;&#x5B66;&#x7279;&#x957F;&#xFF0C;&#x901A;&#x7528;&#x4E13;&#x5BB6;&#x53EA;&#x5B66;&#x57FA;&#x7840;&#xFF0C;&#x4ECE;&#x800C;&#x5728;&#x53C2;&#x6570;&#x91CF;&#x4E0D;&#x53D8;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x5927;&#x5E45;&#x63D0;&#x5347;&#x4E86;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x3002;&#x5B9E;&#x9A8C;&#x663E;&#x793A;&#xFF0C;DeepSeekMoE 2B &#x7684;&#x6027;&#x80FD;&#x53EF;&#x4EE5;&#x5339;&#x654C; GShard 2.9B&#xFF0C;&#x4E14;&#x4EC5;&#x7528; 40% &#x7684;&#x8BA1;&#x7B97;&#x91CF;&#x5C31;&#x8FBE;&#x5230;&#x4E86; LLaMA2 7B &#x7684;&#x6C34;&#x5E73;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x975E;&#x5E38;&#x771F;&#x5B9E;&#xFF0C;&#x5B83;&#x662F;&#x963B;&#x788D; MoE &#x6A21;&#x578B;&#x201C;&#x964D;&#x672C;&#x589E;&#x6548;&#x201D;&#x7684;&#x5173;&#x952E;&#x969C;&#x788D;&#x3002;</strong></p>
<ul>
<li><strong>&#x4E13;&#x5BB6;&#x7684;&#x201C;&#x5E73;&#x5EB8;&#x5316;&#x201D;&#xFF1A;</strong> &#x5982;&#x679C;&#x4E00;&#x4E2A;&#x4E13;&#x5BB6;&#x65E2;&#x8981;&#x5904;&#x7406;&#x201C;&#x82F9;&#x679C;&#x662F;&#x6C34;&#x679C;&#x201D;&#xFF0C;&#x53C8;&#x8981;&#x5904;&#x7406;&#x201C;&#x82F9;&#x679C;&#x662F;&#x79D1;&#x6280;&#x516C;&#x53F8;&#x201D;&#xFF0C;&#x5B83;&#x5185;&#x90E8;&#x7684;&#x53C2;&#x6570;&#x5C31;&#x4F1A;&#x4E92;&#x76F8;&#x5E72;&#x6270;&#xFF0C;&#x5BFC;&#x81F4;&#x54EA;&#x8FB9;&#x90FD;&#x5B66;&#x4E0D;&#x6DF1;&#x3002;</li>
<li><strong>&#x53C2;&#x6570;&#x7684;&#x201C;&#x865A;&#x80D6;&#x201D;&#xFF1A;</strong> &#x5982;&#x679C; 64 &#x4E2A;&#x4E13;&#x5BB6;&#x6BCF;&#x4E2A;&#x4EBA;&#x90FD;&#x82B1; 10% &#x7684;&#x53C2;&#x6570;&#x53BB;&#x8BB0;&#x201C;&#x4E3B;&#x8C13;&#x5BBE;&#x7ED3;&#x6784;&#x201D;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x90E8;&#x5206;&#x53C2;&#x6570;&#x5C31;&#x6D6A;&#x8D39;&#x4E86; 63 &#x4EFD;&#x3002;&#x8FD9;&#x4F7F;&#x5F97; MoE &#x6A21;&#x578B;&#x867D;&#x7136;&#x53C2;&#x6570;&#x591A;&#xFF0C;&#x4F46;&#x5B9E;&#x9645;&#x6709;&#x6548;&#x7684;&#x4FE1;&#x606F;&#x5BC6;&#x5EA6;&#x5E76;&#x4E0D;&#x9AD8;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>MoE &#x7684;&#x666E;&#x53CA;&#x4E0E;&#x74F6;&#x9888;&#xFF1A;</strong> &#x968F;&#x7740; GPT-4 &#x7B49;&#x6A21;&#x578B;&#x8BA9; MoE &#x6210;&#x4E3A;&#x4E3B;&#x6D41;&#xFF0C;&#x4E1A;&#x754C;&#x5F00;&#x59CB;&#x4ECE;&#x201C;&#x600E;&#x4E48;&#x8DD1;&#x901A; MoE&#x201D;&#x8F6C;&#x5411;&#x201C;&#x600E;&#x4E48;&#x4F18;&#x5316; MoE&#x201D;&#x3002;&#x5927;&#x5BB6;&#x53D1;&#x73B0;&#x7B80;&#x5355;&#x7684; Top-2 &#x8DEF;&#x7531;&#x867D;&#x7136;&#x80FD;&#x6269;&#x5C55;&#x53C2;&#x6570;&#xFF0C;&#x4F46;&#x6548;&#x7387;&#x9010;&#x6E10;&#x8FB9;&#x9645;&#x9012;&#x51CF;&#x3002;</li>
<li><strong>&#x5BF9;&#x201C;&#x6A21;&#x5757;&#x5316;&#x201D;&#x7684;&#x6DF1;&#x5165;&#x7406;&#x89E3;&#xFF1A;</strong> &#x7814;&#x7A76;&#x4EBA;&#x5458;&#x9010;&#x6E10;&#x610F;&#x8BC6;&#x5230;&#xFF0C;&#x5927;&#x8111;&#x7684;&#x8FD0;&#x4F5C;&#x65B9;&#x5F0F;&#x5E76;&#x975E;&#x5168;&#x4E5F;&#x662F;&#x201C;&#x5747;&#x5206;&#x201D;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x6709;&#x4E13;&#x95E8;&#x5904;&#x7406;&#x901A;&#x7528;&#x4FE1;&#x606F;&#x7684;&#x533A;&#x57DF;&#xFF08;&#x5982;&#x8111;&#x5E72;&#xFF09;&#x548C;&#x5904;&#x7406;&#x7279;&#x5B9A;&#x4FE1;&#x606F;&#x7684;&#x533A;&#x57DF;&#xFF08;&#x5982;&#x76AE;&#x5C42;&#xFF09;&#x3002;DeepSeek &#x8BD5;&#x56FE;&#x5728;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E2D;&#x6A21;&#x4EFF;&#x8FD9;&#x79CD;&#x5206;&#x5DE5;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>DeepSeekMoE &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;&#x5728;&#x4E8E;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x4E86; FFN &#x7684;&#x7269;&#x7406;&#x7ED3;&#x6784;&#x548C;&#x8DEF;&#x7531;&#x903B;&#x8F91;&#x3002;</p>
<h3 id="1. &#x7ED3;&#x6784;&#x53D8;&#x66F4;&#xFF1A;&#x4ECE;&#x6807;&#x51C6; FFN &#x5230; DeepSeekMoE"><a href="#1. &#x7ED3;&#x6784;&#x53D8;&#x66F4;&#xFF1A;&#x4ECE;&#x6807;&#x51C6; FFN &#x5230; DeepSeekMoE"></a>1. &#x7ED3;&#x6784;&#x53D8;&#x66F4;&#xFF1A;&#x4ECE;&#x6807;&#x51C6; FFN &#x5230; DeepSeekMoE</h3>
<p>&#x4E3A;&#x4E86;&#x76F4;&#x89C2;&#x7406;&#x89E3;&#xFF0C;&#x6211;&#x4EEC;&#x5BF9;&#x6BD4;&#x4E00;&#x4E0B;<strong>&#x6807;&#x51C6; FFN</strong>&#x3001;<strong>&#x4F20;&#x7EDF; MoE (GShard)</strong> &#x548C; <strong>DeepSeekMoE</strong> &#x5728;&#x7F51;&#x7EDC;&#x7ED3;&#x6784;&#x4E0A;&#x7684;&#x5DEE;&#x5F02;&#x3002;</p>
<h4 id="A. &#x6807;&#x51C6; FFN (Dense)"><a href="#A. &#x6807;&#x51C6; FFN (Dense)"></a>A. &#x6807;&#x51C6; FFN (Dense)</h4>
<p>&#x6700;&#x539F;&#x59CB;&#x7684; Transformer &#x7ED3;&#x6784;&#xFF0C;&#x6240;&#x6709; Token &#x8D70;&#x540C;&#x4E00;&#x6761;&#x8DEF;&#x3002;</p>
<ul>
<li><strong>&#x8F93;&#x5165;&#xFF1A;</strong> $h_{in}$</li>
<li><strong>&#x8BA1;&#x7B97;&#xFF1A;</strong> $h_{out} = \\text{FFN}(h_{in})$</li>
<li><strong>&#x53C2;&#x6570;&#xFF1A;</strong> 1 &#x4E2A;&#x5927; FFN&#x3002;</li>
</ul>
<h4 id="B. &#x4F20;&#x7EDF; MoE (&#x5982; GShard)"><a href="#B. &#x4F20;&#x7EDF; MoE (&#x5982; GShard)"></a>B. &#x4F20;&#x7EDF; MoE (&#x5982; GShard)</h4>
<p>&#x5C06;&#x5927; FFN &#x62C6;&#x5206;&#x4E3A; $N$ &#x4E2A;&#x540C;&#x7B49;&#x5927;&#x5C0F;&#x7684;&#x4E13;&#x5BB6;&#xFF08;&#x6BD4;&#x5982; $N=8$&#xFF09;&#x3002;</p>
<ul>
<li><strong>&#x8DEF;&#x7531;&#xFF1A;</strong> &#x8BA1;&#x7B97; Token &#x4E0E; 8 &#x4E2A;&#x4E13;&#x5BB6;&#x7684;&#x5339;&#x914D;&#x5EA6;&#x5206;&#x6570;&#xFF0C;&#x9009;&#x51FA; Top-2&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#xFF1A;</strong> $h_{out} = \\sum_{i \\in Top2} g_i \\cdot \\text{Expert}<em>i(h</em>{in})$
<ul>
<li>$g_i$ &#x662F;&#x95E8;&#x63A7;&#x6743;&#x91CD;&#x3002;</li>
</ul>
</li>
<li><strong>&#x95EE;&#x9898;&#xFF1A;</strong> &#x4E13;&#x5BB6;&#x7C92;&#x5EA6;&#x592A;&#x7C97;&#xFF0C;&#x4E14;&#x6CA1;&#x6709;&#x4E13;&#x95E8;&#x5904;&#x7406;&#x201C;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x201D;&#x7684;&#x5730;&#x65B9;&#x3002;</li>
</ul>
<h4 id="C. DeepSeekMoE"><a href="#C. DeepSeekMoE"></a>C. DeepSeekMoE</h4>
<p>DeepSeekMoE &#x505A;&#x4E86;&#x4E24;&#x4E2A;&#x5173;&#x952E;&#x6539;&#x52A8;&#xFF1A;<strong>&#x5207;&#x5F97;&#x66F4;&#x7EC6;</strong> + <strong>&#x8BBE;&#x7F6E;&#x56FA;&#x5B9A;&#x901A;&#x8DEF;</strong>&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x5C06;&#x6807;&#x51C6; FFN &#x7684;&#x53C2;&#x6570;&#x91CF;&#x8BB0;&#x4E3A; $P$&#x3002;
&#x5728;&#x4F20;&#x7EDF; MoE &#x4E2D;&#xFF0C;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x5927;&#x5C0F;&#x4E3A; $P$&#xFF08;&#x603B;&#x53C2;&#x6570; $N \\times P$&#xFF09;&#x3002;
&#x5728; DeepSeekMoE &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x7684;&#x5927;&#x5C0F;&#x7F29;&#x5C0F;&#x4E3A; $P/m$&#xFF08;&#x6BD4;&#x5982; $1/4$ &#x5927;&#x5C0F;&#xFF09;&#xFF0C;&#x5E76;&#x5C06;&#x603B;&#x4E13;&#x5BB6;&#x6570;&#x91CF;&#x589E;&#x52A0; $m$ &#x500D;&#x3002;</p>
<p>&#x6570;&#x5B66;&#x5F62;&#x5F0F;&#x4E0A;&#xFF0C;&#x8F93;&#x51FA;&#x7531;&#x4E24;&#x90E8;&#x5206;&#x7EC4;&#x6210;&#xFF1A;
$$
h_{out} = \\underbrace{\\sum_{i \\in \\mathcal{A}<em>{shared}} \\text{Expert}<em>i(h</em>{in})}</em>{\\text{&#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared)}} + \\underbrace{\\sum_{i \\in \\mathcal{A}<em>{routed}} g_i \\cdot \\text{Expert}<em>i(h</em>{in})}</em>{\\text{&#x8DEF;&#x7531;&#x4E13;&#x5BB6; (Routed)}}
$$</p>
<ul>
<li><strong>&#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared Experts)&#xFF1A;</strong>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x9009;&#x5B9A; $K_s$ &#x4E2A;&#x4E13;&#x5BB6;&#x4F5C;&#x4E3A;&#x201C;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x201D;&#x3002;</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> &#x65E0;&#x8BBA; Router &#x600E;&#x4E48;&#x9009;&#xFF0C;&#x8FD9; $K_s$ &#x4E2A;&#x4E13;&#x5BB6;&#x7684;&#x8F93;&#x51FA;<strong>&#x6C38;&#x8FDC;</strong>&#x4F1A;&#x88AB;&#x52A0;&#x5230;&#x7ED3;&#x679C;&#x91CC;&#x3002;</li>
<li><strong>&#x7269;&#x7406;&#x610F;&#x4E49;&#xFF1A;</strong> &#x8FD9;&#x5C31;&#x662F;&#x6A21;&#x578B;&#x7684;&#x201C;&#x4E3B;&#x5E72;&#x9053;&#x201D;&#xFF0C;&#x8D1F;&#x8D23;&#x627F;&#x8F7D;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#xFF08;Common Knowledge&#xFF09;&#x3002;</li>
</ul>
</li>
<li><strong>&#x7EC6;&#x7C92;&#x5EA6;&#x8DEF;&#x7531;&#x4E13;&#x5BB6; (Fine-Grained Routed Experts)&#xFF1A;</strong>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x5269;&#x4E0B;&#x7684; $N_{routed}$ &#x4E2A;&#x5C0F;&#x4E13;&#x5BB6;&#x53C2;&#x4E0E;&#x7ADE;&#x4E89;&#x3002;</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> Router &#x4ECE;&#x4E2D;&#x9009;&#x51FA; Top-$K_r$ &#x4E2A;&#x6FC0;&#x6D3B;&#x3002;</li>
<li><strong>&#x7269;&#x7406;&#x610F;&#x4E49;&#xFF1A;</strong> &#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x201C;&#x6280;&#x80FD;&#x5305;&#x201D;&#xFF0C;&#x6A21;&#x578B;&#x6839;&#x636E;&#x9700;&#x8981;&#x968F;&#x53D6;&#x968F;&#x7528;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="2. &#x4E3E;&#x4E2A;&#x5177;&#x4F53;&#x53C2;&#x6570;&#x7684;&#x4F8B;&#x5B50;"><a href="#2. &#x4E3E;&#x4E2A;&#x5177;&#x4F53;&#x53C2;&#x6570;&#x7684;&#x4F8B;&#x5B50;"></a>2. &#x4E3E;&#x4E2A;&#x5177;&#x4F53;&#x53C2;&#x6570;&#x7684;&#x4F8B;&#x5B50;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A; FFN &#x5C42;&#xFF0C;&#x539F;&#x672C;&#x7684;&#x4E2D;&#x95F4;&#x5C42;&#x7EF4;&#x5EA6;&#xFF08;Intermediate Size&#xFF09;&#x662F; <strong>4096</strong>&#x3002;</p>
<ul>
<li>
<p><strong>GShard &#x6A21;&#x5F0F; (Top-2)&#xFF1A;</strong></p>
<ul>
<li>&#x8BBE;&#x7F6E; 8 &#x4E2A;&#x4E13;&#x5BB6;&#xFF0C;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x7EF4;&#x5EA6; <strong>4096</strong>&#x3002;</li>
<li>&#x6BCF;&#x6B21;&#x6FC0;&#x6D3B; 2 &#x4E2A;&#x4E13;&#x5BB6;&#x3002;</li>
<li><strong>&#x6FC0;&#x6D3B;&#x53C2;&#x6570;&#x91CF;&#xFF1A;</strong> $2 \\times 4096 = 8192$&#x3002;</li>
</ul>
</li>
<li>
<p><strong>DeepSeekMoE &#x6A21;&#x5F0F;&#xFF1A;</strong></p>
<ul>
<li>&#x5C06;&#x4E13;&#x5BB6;&#x5207;&#x788E;&#xFF0C;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x7EF4;&#x5EA6;&#x53EA;&#x6709; <strong>1024</strong> (1/4 &#x5927;&#x5C0F;)&#x3002;&#x603B;&#x4E13;&#x5BB6;&#x6570;&#x53D8;&#x6210; $8 \\times 4 = 32$ &#x4E2A;&#x3002;</li>
<li><strong>&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#xFF1A;</strong> &#x6307;&#x5B9A;&#x5176;&#x4E2D; 2 &#x4E2A;&#x603B;&#x662F;&#x6FC0;&#x6D3B;&#xFF08;&#x7EF4;&#x5EA6; $2 \\times 1024 = 2048$&#xFF09;&#x3002;</li>
<li><strong>&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#xFF1A;</strong> &#x4ECE;&#x5269;&#x4E0B; 30 &#x4E2A;&#x91CC;&#x9009; 6 &#x4E2A;&#x6FC0;&#x6D3B;&#xFF08;&#x7EF4;&#x5EA6; $6 \\times 1024 = 6144$&#xFF09;&#x3002;</li>
<li><strong>&#x6FC0;&#x6D3B;&#x53C2;&#x6570;&#x91CF;&#xFF1A;</strong> $2048 + 6144 = 8192$&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>&#x5173;&#x952E;&#x70B9;&#xFF1A;</strong> &#x6CE8;&#x610F;&#x5230;&#x4E86;&#x5417;&#xFF1F;<strong>&#x6FC0;&#x6D3B;&#x53C2;&#x6570;&#x91CF;&#xFF08;&#x8BA1;&#x7B97;&#x91CF;&#xFF09;&#x5B8C;&#x5168;&#x4E00;&#x6837;&#xFF08;&#x90FD;&#x662F; 8192 &#x7EF4;&#x5EA6;&#x7684;&#x8BA1;&#x7B97;&#xFF09;</strong>&#xFF0C;&#x4F46;&#x5728; DeepSeekMoE &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x7EC4;&#x5408;&#x4E86; <strong>2 &#x4E2A;&#x5171;&#x4EAB;&#x4E13;&#x5BB6; + 6 &#x4E2A;&#x7EC6;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6;</strong>&#xFF0C;&#x76F8;&#x6BD4; GShard &#x7684; <strong>2 &#x4E2A;&#x7C97;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6;</strong>&#xFF0C;&#x7EC4;&#x5408;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x6307;&#x6570;&#x7EA7;&#x4E0A;&#x5347;&#x3002;</p>
<h2 id="&#x8FD9;&#x79CD;&#x6539;&#x52A8;&#x4E0D;&#x4F1A;&#x5E26;&#x6765;&#x526F;&#x4F5C;&#x7528;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x79CD;&#x6539;&#x52A8;&#x4E0D;&#x4F1A;&#x5E26;&#x6765;&#x526F;&#x4F5C;&#x7528;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x79CD;&#x6539;&#x52A8;&#x4E0D;&#x4F1A;&#x5E26;&#x6765;&#x526F;&#x4F5C;&#x7528;&#x5417;&#xFF1F;</h2>
<p>&#x5173;&#x4E8E;&#x201C;&#x7EC6;&#x7C92;&#x5EA6;&#x5206;&#x5272;&#x201D;&#x4E0E;&#x201C;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x201D;&#x7684;&#x6709;&#x6548;&#x6027;&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x4ECE;**&#x8868;&#x793A;&#x5B66;&#x4E60;&#xFF08;Representation Learning&#xFF09;<strong>&#x548C;</strong>&#x4F18;&#x5316;&#x52A8;&#x529B;&#x5B66;&#xFF08;Optimization Dynamics&#xFF09;**&#x7684;&#x89D2;&#x5EA6;&#x8FDB;&#x884C;&#x6DF1;&#x5165;&#x63A2;&#x8BA8;&#x3002;</p>
<h3 id="1. &#x7EC4;&#x5408;&#x7206;&#x70B8;&#x5E26;&#x6765;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x8DC3;&#x5347;"><a href="#1. &#x7EC4;&#x5408;&#x7206;&#x70B8;&#x5E26;&#x6765;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x8DC3;&#x5347;"></a>1. &#x7EC4;&#x5408;&#x7206;&#x70B8;&#x5E26;&#x6765;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x8DC3;&#x5347;</h3>
<p>&#x7EC6;&#x7C92;&#x5EA6;&#x5207;&#x5206;&#x867D;&#x7136;&#x964D;&#x4F4E;&#x4E86;&#x5355;&#x4E2A;&#x4E13;&#x5BB6;&#x7684;&#x53C2;&#x6570;&#x91CF;&#xFF0C;&#x4F46;&#x901A;&#x8FC7;**&#x8DEF;&#x7531;&#x7EC4;&#x5408;&#xFF08;Routing Combination&#xFF09;**&#x5E26;&#x6765;&#x4E86;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x7684;&#x6307;&#x6570;&#x7EA7;&#x589E;&#x957F;&#x3002;</p>
<ul>
<li><strong>GShard &#x6A21;&#x5F0F; (N=8, K=2)&#xFF1A;</strong>
<ul>
<li>&#x53EF;&#x80FD;&#x7684;&#x4E13;&#x5BB6;&#x7EC4;&#x5408;&#x8DEF;&#x5F84;&#x6570;&#xFF1A;$C_8^2 = 28$ &#x79CD;&#x3002;</li>
</ul>
</li>
<li><strong>DeepSeekMoE &#x6A21;&#x5F0F; (N=32, K=8)&#xFF1A;</strong>
<ul>
<li>&#x53EF;&#x80FD;&#x7684;&#x4E13;&#x5BB6;&#x7EC4;&#x5408;&#x8DEF;&#x5F84;&#x6570;&#xFF1A;$C_{32}^8 \\approx 1.05 \\times 10^7$ &#x79CD;&#x3002;</li>
</ul>
</li>
</ul>
<p>&#x8FD9;&#x79CD;**&#x7EC4;&#x5408;&#x7206;&#x70B8;&#xFF08;Combinatorial Explosion&#xFF09;**&#x8D4B;&#x4E88;&#x4E86;&#x6A21;&#x578B;&#x6781;&#x9AD8;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x3002;&#x5373;&#x4F7F;&#x5355;&#x4E2A;&#x5FAE;&#x578B;&#x4E13;&#x5BB6;&#x7684;&#x62DF;&#x5408;&#x80FD;&#x529B;&#x6709;&#x9650;&#xFF0C;&#x4F46;&#x901A;&#x8FC7; Router &#x7684;&#x52A8;&#x6001;&#x7F16;&#x6392;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x6784;&#x5EFA;&#x51FA;&#x4E0A;&#x5343;&#x4E07;&#x79CD;&#x7279;&#x5F02;&#x5316;&#x7684;&#x5B50;&#x7F51;&#x7EDC;&#xFF08;Sub-networks&#xFF09;&#x3002;&#x8FD9;&#x4F7F;&#x5F97; DeepSeekMoE &#x80FD;&#x591F;&#x4EE5;&#x6709;&#x9650;&#x7684;&#x53C2;&#x6570;&#x91CF;&#xFF0C;&#x66F4;&#x7CBE;&#x51C6;&#x5730;&#x8986;&#x76D6;&#x6570;&#x636E;&#x5206;&#x5E03;&#x4E2D;&#x7684;&#x957F;&#x5C3E;&#x6A21;&#x5F0F;&#x3002;</p>
<h3 id="2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x7684;&#x81EA;&#x7EC4;&#x7EC7;&#x6F14;&#x5316;&#x673A;&#x5236;"><a href="#2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x7684;&#x81EA;&#x7EC4;&#x7EC7;&#x6F14;&#x5316;&#x673A;&#x5236;"></a>2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x7684;&#x81EA;&#x7EC4;&#x7EC7;&#x6F14;&#x5316;&#x673A;&#x5236;</h3>
<p>&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x7684;&#x201C;&#x901A;&#x7528;&#x6027;&#x201D;&#x5E76;&#x975E;&#x4EBA;&#x4E3A;&#x89C4;&#x5219;&#x5F3A;&#x884C;&#x8D4B;&#x4E88;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x901A;&#x8FC7;**&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#xFF08;Gradient Descent&#xFF09;**&#x81EA;&#x53D1;&#x6F14;&#x5316;&#x51FA;&#x6765;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<ul>
<li><strong>&#x68AF;&#x5EA6;&#x6D41;&#x5411;&#x7684;&#x4E3B;&#x5BFC;&#x6027;&#xFF1A;</strong> &#x7531;&#x4E8E;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x5BF9;<strong>&#x6240;&#x6709; Token</strong> &#x5747;&#x4FDD;&#x6301;&#x6FC0;&#x6D3B;&#x72B6;&#x6001;&#xFF0C;&#x5176;&#x63A5;&#x6536;&#x5230;&#x7684;&#x68AF;&#x5EA6;&#x66F4;&#x65B0;&#x9891;&#x7387;&#x8FDC;&#x9AD8;&#x4E8E;&#x7A00;&#x758F;&#x6FC0;&#x6D3B;&#x7684;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x3002;</li>
<li><strong>&#x77E5;&#x8BC6;&#x7684;&#x81EA;&#x52A8;&#x5206;&#x5C42;&#xFF1A;</strong> &#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x503E;&#x5411;&#x4E8E;&#x5BFB;&#x627E;&#x964D;&#x4F4E;&#x5168;&#x5C40; Loss &#x6700;&#x5FEB;&#x7684;&#x8DEF;&#x5F84;&#x3002;&#x5C06;&#x9AD8;&#x9891;&#x51FA;&#x73B0;&#x7684;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#xFF08;&#x5982;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#x3001;&#x5E38;&#x7528;&#x8BCD;&#x5D4C;&#x5165;&#xFF09;&#x5B58;&#x50A8;&#x5728;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x4E2D;&#xFF0C;&#x80FD;&#x6700;&#x6709;&#x6548;&#x5730;&#x964D;&#x4F4E;&#x6574;&#x4F53; Loss&#x3002;</li>
<li><strong>&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x7684;&#x7279;&#x5316;&#xFF1A;</strong> &#x5F53;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x88AB;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x201C;&#x5438;&#x6536;&#x201D;&#x540E;&#xFF0C;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x4E0D;&#x518D;&#x9700;&#x8981;&#x901A;&#x8FC7;&#x5B66;&#x4E60;&#x5197;&#x4F59;&#x7684;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x6765;&#x964D;&#x4F4E; Loss&#xFF0C;&#x4ECE;&#x800C;&#x88AB;&#x8FEB;&#x4E13;&#x6CE8;&#x4E8E;&#x5B66;&#x4E60;&#x7279;&#x5B9A;&#x9886;&#x57DF;&#x7684;&#x3001;&#x7A00;&#x758F;&#x7684;&#x77E5;&#x8BC6;&#x6A21;&#x5F0F;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x79CD;&#x673A;&#x5236;&#x88AB;&#x79F0;&#x4E3A;**&#x201C;&#x6A21;&#x5757;&#x5316;&#x4E13;&#x95E8;&#x5316;&#x201D;&#xFF08;Modular Specialization&#xFF09;<strong>&#xFF0C;DeepSeekMoE &#x901A;&#x8FC7;&#x67B6;&#x6784;&#x7EA6;&#x675F;&#xFF0C;&#x6210;&#x529F;&#x8BF1;&#x5BFC;&#x6A21;&#x578B;&#x5B9E;&#x73B0;&#x4E86;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x4E0E;&#x4E13;&#x7528;&#x77E5;&#x8BC6;&#x7684;</strong>&#x89E3;&#x8026;&#xFF08;Decoupling&#xFF09;**&#x3002;</p>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>DeepSeekMoE &#x662F;&#x76EE;&#x524D; MoE &#x67B6;&#x6784;&#x4F18;&#x5316;&#x7684;&#x4E00;&#x6761;&#x5F3A;&#x529B;&#x8DEF;&#x7EBF;&#xFF0C;&#x4F46;&#x4E5F;&#x5B58;&#x5728;&#x7ADE;&#x4E89;&#x3002;&#x4E3A;&#x4E86;&#x66F4;&#x5168;&#x9762;&#x5730;&#x7406;&#x89E3; MoE &#x7684;&#x6280;&#x672F;&#x7248;&#x56FE;&#xFF0C;&#x6211;&#x4EEC;&#x6765;&#x770B;&#x770B;&#x5176;&#x4ED6;&#x4E24;&#x79CD;&#x4E3B;&#x6D41;&#x67B6;&#x6784;&#x662F;&#x5982;&#x4F55;&#x5728;&#x6A21;&#x578B;&#x5C42;&#x9762;&#x5B9E;&#x73B0;&#x7684;&#x3002;</p>
<h3 id="1. Switch Transformer (Google) - &#x6781;&#x81F4;&#x7A00;&#x758F;"><a href="#1. Switch Transformer (Google) - &#x6781;&#x81F4;&#x7A00;&#x758F;"></a>1. Switch Transformer (Google) - &#x6781;&#x81F4;&#x7A00;&#x758F;</h3>
<ul>
<li><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;</strong> &#x5C06;&#x201C;&#x7A00;&#x758F;&#x201D;&#x63A8;&#x5411;&#x6781;&#x81F4;&#xFF0C;&#x8FFD;&#x6C42;&#x901A;&#x4FE1;&#x4E0E;&#x8BA1;&#x7B97;&#x7684;&#x6700;&#x4F4E;&#x5F00;&#x9500;&#x3002;</li>
<li><strong>&#x6A21;&#x578B;&#x5B9E;&#x73B0;&#xFF1A;</strong>
<ul>
<li><strong>Top-1 &#x8DEF;&#x7531;&#xFF1A;</strong> &#x5BF9;&#x4E8E;&#x6BCF;&#x4E2A; Token&#xFF0C;Router <strong>&#x53EA;&#x9009;&#x62E9; 1 &#x4E2A;</strong>&#x6700;&#x5339;&#x914D;&#x7684;&#x4E13;&#x5BB6;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#xFF1A;</strong> $h_{out} = \\text{Expert}<em>{Top1}(h</em>{in}) \\times g_{Top1}$</li>
</ul>
</li>
<li><strong>&#x4F18;&#x7F3A;&#x70B9;&#xFF1A;</strong>
<ul>
<li><strong>&#x4F18;&#x70B9;&#xFF1A;</strong> &#x8DEF;&#x7531;&#x5F00;&#x9500;&#x6700;&#x5C0F;&#xFF0C;&#x975E;&#x5E38;&#x9002;&#x5408;&#x505A;&#x8D85;&#x7EA7;&#x5DE8;&#x5927;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x6BD4;&#x5982; 1.6T &#x53C2;&#x6570;&#xFF09;&#x3002;</li>
<li><strong>&#x7F3A;&#x70B9;&#xFF1A;</strong> <strong>&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x53D7;&#x9650;</strong>&#x3002;Token &#x53EA;&#x80FD;&#x83B7;&#x53D6;&#x5355;&#x4E00;&#x89C6;&#x89D2;&#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x7F3A;&#x4E4F;&#x4E0D;&#x540C;&#x4E13;&#x5BB6;&#x4E4B;&#x95F4;&#x7684;&#x201C;&#x5546;&#x8BAE;&#x201D;&#x4E0E;&#x4E92;&#x8865;&#xFF0C;&#x5BB9;&#x6613;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x5728;&#x590D;&#x6742;&#x4EFB;&#x52A1;&#x4E0A;&#x8868;&#x73B0;&#x4E0D;&#x4F73;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="2. Expert Choice Routing (Google) - &#x4E13;&#x5BB6;&#x6311; Token"><a href="#2. Expert Choice Routing (Google) - &#x4E13;&#x5BB6;&#x6311; Token"></a>2. Expert Choice Routing (Google) - &#x4E13;&#x5BB6;&#x6311; Token</h3>
<ul>
<li><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;</strong> &#x98A0;&#x8986;&#x4E86;&#x4F20;&#x7EDF;&#x7684;&#x201C;Token &#x9009;&#x4E13;&#x5BB6;&#x201D;&#x6A21;&#x5F0F;&#xFF0C;&#x6539;&#x4E3A;**&#x201C;&#x4E13;&#x5BB6;&#x9009; Token&#x201D;**&#x3002;</li>
<li><strong>&#x6A21;&#x578B;&#x5B9E;&#x73B0;&#xFF1A;</strong>
<ul>
<li><strong>&#x5B9A;&#x989D;&#x5206;&#x914D;&#xFF1A;</strong> &#x8BBE;&#x5B9A;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x80FD;&#x5904;&#x7406;&#x7684; Token &#x6570;&#x91CF;&#x4E0A;&#x9650;&#xFF08;Capacity Factor, &#x5982; $C$&#xFF09;&#x3002;</li>
<li><strong>&#x5168;&#x5C40;&#x6392;&#x5E8F;&#xFF1A;</strong> &#x8BA1;&#x7B97;&#x6240;&#x6709; Token &#x5BF9;&#x6240;&#x6709;&#x4E13;&#x5BB6;&#x7684;&#x5339;&#x914D;&#x5206;&#x6570;&#x77E9;&#x9635;&#x3002;</li>
<li><strong>Top-K &#x9009;&#x62E9;&#xFF1A;</strong> &#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x6311;&#x9009;&#x5206;&#x6570;&#x6700;&#x9AD8;&#x7684; $C$ &#x4E2A; Token &#x8FDB;&#x884C;&#x5904;&#x7406;&#x3002;</li>
</ul>
</li>
<li><strong>&#x4F18;&#x7F3A;&#x70B9;&#xFF1A;</strong>
<ul>
<li><strong>&#x4F18;&#x70B9;&#xFF1A;</strong> <strong>&#x5B8C;&#x7F8E;&#x7684;&#x8D1F;&#x8F7D;&#x5747;&#x8861;</strong>&#x3002;&#x56E0;&#x4E3A;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x5904;&#x7406;&#x7684; Token &#x6570;&#x91CF;&#x662F;&#x5F3A;&#x5236;&#x56FA;&#x5B9A;&#x7684;&#xFF0C;&#x6839;&#x672C;&#x4E0D;&#x5B58;&#x5728;&#x201C;&#x6709;&#x7684;&#x4E13;&#x5BB6;&#x7D2F;&#x6B7B;&#xFF0C;&#x6709;&#x7684;&#x4E13;&#x5BB6;&#x997F;&#x6B7B;&#x201D;&#x7684;&#x60C5;&#x51B5;&#x3002;</li>
<li><strong>&#x7F3A;&#x70B9;&#xFF1A;</strong> <strong>&#x5B9E;&#x73B0;&#x590D;&#x6742;&#x4E14;&#x975E;&#x56E0;&#x679C;</strong>&#x3002;&#x9700;&#x8981;&#x77E5;&#x9053;&#x5168;&#x5C40;&#x7684; Token &#x4FE1;&#x606F;&#x624D;&#x80FD;&#x6392;&#x5E8F;&#xFF0C;&#x8FD9;&#x5728; Batch &#x63A8;&#x7406;&#x65F6;&#x5F88;&#x96BE;&#x9AD8;&#x6548;&#x5E76;&#x884C;&#xFF0C;&#x4E14;&#x4E0D;&#x7B26;&#x5408; Decoder-only &#x6A21;&#x578B;&#x7684;&#x81EA;&#x56DE;&#x5F52;&#x751F;&#x6210;&#x903B;&#x8F91;&#xFF08;&#x751F;&#x6210;&#x7B2C; $t$ &#x4E2A;&#x8BCD;&#x65F6;&#x4E0D;&#x80FD;&#x770B;&#x7B2C; $t+1$ &#x4E2A;&#x8BCD;&#xFF09;&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>DeepSeekMoE &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;...</strong> &#x5B83;&#x8D70;&#x4E86;&#x4E00;&#x6761;<strong>&#x4E2D;&#x5EB8;&#x4E4B;&#x9053;</strong>&#x3002;&#x5B83;&#x4FDD;&#x7559;&#x4E86;&#x4F20;&#x7EDF;&#x7684;&#x201C;Token &#x9009;&#x4E13;&#x5BB6;&#x201D;&#x6A21;&#x5F0F;&#xFF08;&#x5B9E;&#x73B0;&#x7B80;&#x5355;&#x3001;&#x517C;&#x5BB9;&#x6027;&#x597D;&#xFF09;&#xFF0C;&#x4F46;&#x901A;&#x8FC7;&#x7EC6;&#x7C92;&#x5EA6;&#x5207;&#x5206;&#x548C;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#xFF0C;&#x5728;&#x4E0D;&#x589E;&#x52A0;&#x8BA1;&#x7B97;&#x91CF;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5927;&#x5E45;&#x63D0;&#x5347;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x548C;&#x8BAD;&#x7EC3;&#x7A33;&#x5B9A;&#x6027;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x7EC6;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6;&#x5206;&#x5272; (Fine-Grained Expert Segmentation)"><a href="#1. &#x7EC6;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6;&#x5206;&#x5272; (Fine-Grained Expert Segmentation)"></a>1. &#x7EC6;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6;&#x5206;&#x5272; (Fine-Grained Expert Segmentation)</h3>
<ul>
<li><strong>&#x4F20;&#x7EDF; MoE&#xFF1A;</strong> &#x53EA;&#x6709; 8 &#x4E2A;&#x5927;&#x53A8;&#xFF08;&#x4E13;&#x5BB6;&#xFF09;&#x3002;&#x4E0D;&#x7BA1;&#x4F60;&#x662F;&#x8981;&#x505A;&#x6CD5;&#x9910;&#x8FD8;&#x662F;&#x65E5;&#x6599;&#xFF0C;&#x53EA;&#x80FD;&#x9009;&#x5176;&#x4E2D; 2 &#x4E2A;&#x5927;&#x53A8;&#x5168;&#x6743;&#x8D1F;&#x8D23;&#x3002;</li>
<li><strong>DeepSeekMoE&#xFF1A;</strong> &#x628A;&#x8FD9; 8 &#x4E2A;&#x5927;&#x53A8;&#x89E3;&#x6784;&#x6210; 32 &#x4E2A;&#x4E13;&#x9879;&#x53A8;&#x5E08;&#xFF08;&#x5207;&#x83DC;&#x7684;&#x3001;&#x505A;&#x6C64;&#x7684;&#x3001;&#x714E;&#x725B;&#x6392;&#x7684;...&#xFF09;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x9047;&#x5230;&#x4E00;&#x4E2A;&#x590D;&#x6742;&#x7684;&#x83DC;&#xFF08;Token&#xFF09;&#xFF0C;&#x4F20;&#x7EDF;&#x6A21;&#x578B;&#x53EA;&#x80FD;&#x786C;&#x585E;&#x7ED9;&#x4E00;&#x4E2A;&#x6CDB;&#x6CDB;&#x7684;&#x5927;&#x53A8;&#xFF1B;DeepSeekMoE &#x53EF;&#x4EE5;&#x7075;&#x6D3B;&#x70B9;&#x5355;&#xFF1A;&#x201C;&#x6211;&#x8981; 1 &#x53F7;&#x7684;&#x5200;&#x5DE5; + 5 &#x53F7;&#x7684;&#x9171;&#x6C41; + 8 &#x53F7;&#x7684;&#x706B;&#x5019;&#x201D;&#x3002;&#x8FD9;&#x79CD;<strong>&#x7EC4;&#x5408;&#x7206;&#x70B8;</strong>&#x5E26;&#x6765;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x8FDC;&#x8D85;&#x524D;&#x8005;&#x3002;</li>
</ul>
<h3 id="2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared Experts)"><a href="#2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared Experts)"></a>2. &#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared Experts)</h3>
<ul>
<li><strong>&#x6982;&#x5FF5;&#xFF1A;</strong> &#x5728; MoE &#x5C42;&#x4E2D;&#xFF0C;&#x6709;&#x4E00;&#x90E8;&#x5206; FFN &#x662F;<strong>&#x4E0D;&#x53C2;&#x4E0E;&#x8DEF;&#x7531;&#x9009;&#x62E9;&#x7684;</strong>&#xFF0C;&#x5B83;&#x4EEC;&#x5BF9;&#x6BCF;&#x4E00;&#x4E2A;&#x8F93;&#x5165;&#x90FD;&#x5904;&#x4E8E;&#x201C;&#x5F00;&#x542F;&#x201D;&#x72B6;&#x6001;&#x3002;</li>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x662F;&#x6A21;&#x578B;&#x7684;&#x201C;&#x57FA;&#x672C;&#x529F;&#x201D;&#x5E95;&#x5EA7;&#x3002;
<ul>
<li>Token: &quot;The&quot; -&gt; &#x5373;&#x4F7F;&#x662F;&#x7B80;&#x5355;&#x7684;&#x865A;&#x8BCD;&#xFF0C;&#x4E5F;&#x9700;&#x8981;&#x88AB;&#x5904;&#x7406;&#x3002;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x5904;&#x7406;&#x5B83;&#xFF0C;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x5C31;&#x53EF;&#x4EE5;&#x4F11;&#x606F;&#xFF08;&#x6216;&#x8005;&#x53EA;&#x8D21;&#x732E;&#x6781;&#x5C0F;&#x7684;&#x6743;&#x91CD;&#xFF09;&#x3002;</li>
<li>Token: &quot;Quantum&quot; -&gt; &#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x5904;&#x7406;&#x57FA;&#x7840;&#x8BCD;&#x6027;&#xFF0C;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#xFF08;&#x7269;&#x7406;&#x5B66;&#x4E13;&#x5BB6;&#xFF09;&#x5904;&#x7406;&#x91CF;&#x5B50;&#x529B;&#x5B66;&#x7684;&#x8BED;&#x4E49;&#x3002;</li>
</ul>
</li>
<li><strong>&#x76F4;&#x89C2;&#x6A21;&#x578B;&#xFF1A;</strong> &#x5C31;&#x50CF;&#x533B;&#x9662;&#x91CC;&#x7684;<strong>&#x5206;&#x8BCA;&#x53F0;</strong>&#x548C;<strong>&#x5168;&#x79D1;&#x533B;&#x751F;</strong>&#xFF08;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#xFF09;&#xFF0C;&#x4ED6;&#x4EEC;&#x5904;&#x7406;&#x6302;&#x53F7;&#x548C;&#x5E38;&#x89C1;&#x611F;&#x5192;&#xFF1B;&#x53EA;&#x6709;&#x7591;&#x96BE;&#x6742;&#x75C7;&#x624D;&#x4F1A;&#x8F6C;&#x8BCA;&#x7ED9;<strong>&#x4E13;&#x79D1;&#x533B;&#x751F;</strong>&#xFF08;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#xFF09;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5168;&#x79D1;&#x533B;&#x751F;&#xFF0C;&#x6BCF;&#x4E2A;&#x5FC3;&#x810F;&#x5916;&#x79D1;&#x4E13;&#x5BB6;&#x90FD;&#x5F97;&#x5148;&#x82B1;&#x65F6;&#x95F4;&#x7ED9;&#x4F60;&#x91CF;&#x4F53;&#x6E29;&#x3001;&#x586B;&#x8868;&#xFF0C;&#x8FD9;&#x5C31;&#x662F;&#x6781;&#x5927;&#x7684;&#x6D6A;&#x8D39;&#x3002;</li>
</ul>
<h3 id="3. &#x6781;&#x81F4;&#x4E13;&#x5BB6;&#x4E13;&#x4E1A;&#x5316; (Ultimate Expert Specialization)"><a href="#3. &#x6781;&#x81F4;&#x4E13;&#x5BB6;&#x4E13;&#x4E1A;&#x5316; (Ultimate Expert Specialization)"></a>3. &#x6781;&#x81F4;&#x4E13;&#x5BB6;&#x4E13;&#x4E1A;&#x5316; (Ultimate Expert Specialization)</h3>
<p>&#x8FD9;&#x662F; DeepSeekMoE &#x7684;&#x7EC8;&#x6781;&#x76EE;&#x6807;&#x3002;</p>
<ul>
<li>&#x901A;&#x8FC7;<strong>&#x7EC6;&#x7C92;&#x5EA6;</strong>&#xFF0C;&#x786E;&#x4FDD;&#x4E13;&#x5BB6;&#x8DB3;&#x591F;&#x201C;&#x5C0F;&#x201D;&#xFF0C;&#x5C0F;&#x5230;&#x53EA;&#x80FD;&#x88C5;&#x4E0B;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x9886;&#x57DF;&#x7684;&#x77E5;&#x8BC6;&#x3002;</li>
<li>&#x901A;&#x8FC7;<strong>&#x5171;&#x4EAB;</strong>&#xFF0C;&#x786E;&#x4FDD;&#x4E13;&#x5BB6;&#x8DB3;&#x591F;&#x201C;&#x7EAF;&#x201D;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x53BB;&#x8BB0;&#x90A3;&#x4E9B;&#x5230;&#x5904;&#x90FD;&#x662F;&#x7684;&#x901A;&#x7528;&#x5E9F;&#x8BDD;&#x3002;</li>
<li>&#x7ED3;&#x679C;&#x5C31;&#x662F;&#xFF1A;&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x90FD;&#x6210;&#x4E3A;&#x4E86;&#x771F;&#x6B63;&#x7684;&#x201C;&#x7279;&#x79CD;&#x5175;&#x201D;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>DeepSeekMoE &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x7684;&#x4E13;&#x4E1A;&#x5206;&#x5DE5;&#x6539;&#x9769;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>&#x62D2;&#x7EDD;&#x5E73;&#x5EB8;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x628A;&#x4E13;&#x5BB6;&#x5207;&#x5C0F;&#xFF0C;&#x8FEB;&#x4F7F;&#x5B83;&#x4EEC;&#x5404;&#x81EA;&#x901A;&#x8FC7;&#x4E0D;&#x540C;&#x7684;&#x7EC4;&#x5408;&#x6765;&#x9002;&#x5E94;&#x6570;&#x636E;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BD5;&#x56FE;&#x201C;&#x4EE5;&#x6B64;&#x5145;&#x597D;&#x201D;&#x3002;</li>
<li><strong>&#x5265;&#x79BB;&#x5171;&#x6027;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#xFF0C;&#x628A;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x5265;&#x79BB;&#x51FA;&#x6765;&#xFF0C;&#x6D88;&#x9664;&#x4E86;&#x5197;&#x4F59;&#x3002;</li>
<li><strong>&#x4EE5;&#x5C0F;&#x535A;&#x5927;</strong>&#xFF1A;&#x7528;&#x66F4;&#x5C11;&#x7684;&#x8BA1;&#x7B97;&#x91CF;&#xFF08;&#x6FC0;&#x6D3B;&#x53C2;&#x6570;&#xFF09;&#xFF0C;&#x5B9E;&#x73B0;&#x4E86;&#x6BD4;&#x540C;&#x7EA7;&#x7A20;&#x5BC6;&#x6A21;&#x578B;&#x548C;&#x4F20;&#x7EDF; MoE &#x66F4;&#x5F3A;&#x7684;&#x6027;&#x80FD;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://github.com/deepseek-ai/DeepSeek-MoE">DeepSeek-MoE Project</a></li>
<li><a href="https://arxiv.org/pdf/2401.06066">DeepSeek-MoE Paper (2024)</a></li>
<li><a href="https://arxiv.org/abs/1701.06538">Outrageously Large Neural Networks (The Original MoE Paper, 2017)</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-23</em>
&quot;&#x66F4;&#x65B0;&#xFF1A;2026-01-27&quot;</p>
`,E=[{level:2,title:"前置背景：从 Dense 到 Sparse 的计算革命",children:[{level:3,title:"1. Transformer 的参数分布：为何 FFN 是优化的关键？",children:[]},{level:3,title:"2. MoE 的核心理念：条件计算",children:[]},{level:3,title:"3. 为什么 MoE 能“以小博大”？",children:[]},{level:3,title:"4. 演进路线",children:[]}]},{level:2,title:"DeepSeekMoE 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"1. 结构变更：从标准 FFN 到 DeepSeekMoE",children:[{level:4,title:"A. 标准 FFN (Dense)",children:[]},{level:4,title:"B. 传统 MoE (如 GShard)",children:[]},{level:4,title:"C. DeepSeekMoE",children:[]}]},{level:3,title:"2. 举个具体参数的例子",children:[]}]},{level:2,title:"这种改动不会带来副作用吗？",children:[{level:3,title:"1. 组合爆炸带来的表达能力跃升",children:[]},{level:3,title:"2. 共享专家的自组织演化机制",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[{level:3,title:"1. Switch Transformer (Google) - 极致稀疏",children:[]},{level:3,title:"2. Expert Choice Routing (Google) - 专家挑 Token",children:[]}]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 细粒度专家分割 (Fine-Grained Expert Segmentation)",children:[]},{level:3,title:"2. 共享专家 (Shared Experts)",children:[]},{level:3,title:"3. 极致专家专业化 (Ultimate Expert Specialization)",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
