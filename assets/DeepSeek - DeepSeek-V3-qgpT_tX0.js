const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2024-12-27</em></p>
<p>DeepSeek &#x56E2;&#x961F;&#x53D1;&#x5E03;&#x7684; <strong>DeepSeek-V3</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2412.19437">DeepSeek-V3 Technical Report</a>&#x300B;&#xFF09;&#x662F;&#x5F00;&#x6E90;&#x5927;&#x6A21;&#x578B;&#x9886;&#x57DF;&#x7684;&#x4E00;&#x679A;&#x91CD;&#x78C5;&#x70B8;&#x5F39;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x62E5;&#x6709; <strong>6710 &#x4EBF;&#x53C2;&#x6570;</strong>&#xFF08;&#x6FC0;&#x6D3B;&#x53C2;&#x6570; 370 &#x4EBF;&#xFF09;&#x7684;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;&#xFF08;MoE&#xFF09;&#x6A21;&#x578B;&#x3002;&#x5B83;&#x5728;&#x6027;&#x80FD;&#x4E0A;&#x5BF9;&#x9F50;&#x4E86; GPT-4 &#x548C; Claude 3.5 Sonnet &#x7B49;&#x9876;&#x5C16;&#x95ED;&#x6E90;&#x6A21;&#x578B;&#xFF0C;&#x4F46;&#x5176;&#x8BAD;&#x7EC3;&#x6210;&#x672C;&#x4EC5;&#x4E3A; 557.6 &#x4E07;&#x7F8E;&#x5143;&#xFF0C;&#x4E14;<strong>&#x63A8;&#x7406;&#x6210;&#x672C;&#x6781;&#x4F4E;</strong>&#x3002;&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x7A81;&#x7834;&#x5728;&#x4E8E;&#x901A;&#x8FC7;&#x67B6;&#x6784;&#x521B;&#x65B0;&#xFF08;MLA + DeepSeekMoE&#xFF09;&#x628A;&#x201C;&#x5927;&#x6A21;&#x578B;&#x201D;&#x505A;&#x5230;&#x4E86;&#x6781;&#x81F4;&#x7684;&#x201C;&#x8F7B;&#x91CF;&#x5316;&#x201D;&#x548C;&#x201C;&#x9AD8;&#x6548;&#x5316;&#x201D;&#x3002;</p>
<h2 id="DeepSeek-V3 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#DeepSeek-V3 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>DeepSeek-V3 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x4F20;&#x7EDF;&#x5927;&#x6A21;&#x578B;&#x5728;&#x201C;&#x9AD8;&#x6027;&#x80FD;&#x201D;&#x4E0E;&#x201C;&#x4F4E;&#x6210;&#x672C;&#x201D;&#x4E4B;&#x95F4;&#x7684;&#x77DB;&#x76FE;&#x3002;</strong></p>
<p>&#x5728; DeepSeek-V3 &#x51FA;&#x73B0;&#x4E4B;&#x524D;&#xFF0C;&#x5F00;&#x6E90;&#x793E;&#x533A;&#x9762;&#x4E34;&#x7740;&#x4E24;&#x4E2A;&#x201C;&#x4E0D;&#x53EF;&#x80FD;&#x4E09;&#x89D2;&#x201D;&#x822C;&#x7684;&#x56F0;&#x5883;&#xFF1A;</p>
<ul>
<li><strong>&#x663E;&#x5B58;&#x5899;&#xFF08;Memory Wall&#xFF09;&#xFF1A;</strong> &#x60F3;&#x8981;&#x6027;&#x80FD;&#x597D;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x5F97;&#x5927;&#xFF0C;&#x4E0A;&#x4E0B;&#x6587;&#x5C31;&#x5F97;&#x957F;&#x3002;&#x4F46;&#x8FD9;&#x4F1A;&#x5BFC;&#x81F4; KV Cache&#xFF08;&#x63A8;&#x7406;&#x65F6;&#x7684;&#x663E;&#x5B58;&#x5360;&#x7528;&#xFF09;&#x7206;&#x70B8;&#xFF0C;&#x63A8;&#x7406;&#x901F;&#x5EA6;&#x53D8;&#x6162;&#xFF0C;&#x670D;&#x52A1;&#x6210;&#x672C;&#x6781;&#x9AD8;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x8D35;&#xFF08;Training Cost&#xFF09;&#xFF1A;</strong> &#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x5343;&#x4EBF;&#x53C2;&#x6570;&#x6A21;&#x578B;&#x52A8;&#x8F84;&#x9700;&#x8981;&#x6570;&#x4E07;&#x5F20; H100 &#x8DD1;&#x51E0;&#x4E2A;&#x6708;&#xFF0C;&#x5BF9;&#x4E8E;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x673A;&#x6784;&#x6765;&#x8BF4;&#x662F;&#x5929;&#x4EF7;&#x3002;</li>
</ul>
<p><strong>DeepSeek-V3 &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x901A;&#x8FC7; <strong>MLA&#xFF08;&#x591A;&#x5934;&#x6F5C;&#x5728;&#x6CE8;&#x610F;&#x529B;&#xFF09;</strong> &#x5C06;&#x63A8;&#x7406;&#x65F6;&#x7684; KV Cache &#x538B;&#x7F29;&#x4E86; 90% &#x4EE5;&#x4E0A;&#xFF0C;&#x5E76;&#x901A;&#x8FC7; <strong>DeepSeekMoE</strong> &#x548C; <strong>FP8 &#x8BAD;&#x7EC3;</strong> &#x5927;&#x5E45;&#x964D;&#x4F4E;&#x4E86;&#x8BA1;&#x7B97;&#x91CF;&#x548C;&#x663E;&#x5B58;&#x5360;&#x7528;&#xFF0C;&#x8BC1;&#x660E;&#x4E86;**&#x201C;&#x6700;&#x5F3A;&#x7684;&#x6027;&#x80FD;&#x201D;&#x5E76;&#x4E0D;&#x9700;&#x8981;&#x201C;&#x6700;&#x8D35;&#x7684;&#x7B97;&#x529B;&#x201D;**&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x6781;&#x5176;&#x771F;&#x5B9E;&#xFF0C;&#x662F;&#x5236;&#x7EA6;&#x5927;&#x6A21;&#x578B;&#x843D;&#x5730;&#x548C;&#x666E;&#x53CA;&#x7684;&#x6B7B;&#x7A74;&#x3002;</strong></p>
<ul>
<li><strong>&#x63A8;&#x7406;&#x4FA7;&#xFF1A;</strong> &#x5BF9;&#x4E8E;&#x957F;&#x6587;&#x672C;&#x5E94;&#x7528;&#xFF0C;KV Cache &#x5F80;&#x5F80;&#x6BD4;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x672C;&#x8EAB;&#x8FD8;&#x8981;&#x5927;&#x3002;&#x8FD9;&#x9650;&#x5236;&#x4E86;&#x5E76;&#x53D1;&#x91CF;&#xFF08;Batch Size&#xFF09;&#xFF0C;&#x4F7F;&#x5F97; API &#x4EF7;&#x683C;&#x5C45;&#x9AD8;&#x4E0D;&#x4E0B;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x4FA7;&#xFF1A;</strong> &#x7B97;&#x529B;&#x77ED;&#x7F3A;&#x662F;&#x5168;&#x7403;&#x6027;&#x95EE;&#x9898;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x80FD;&#x5728;&#x6709;&#x9650;&#x7B97;&#x529B;&#x4E0B;&#x8BAD;&#x7EC3;&#x51FA;&#x66F4;&#x5F3A;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x5C06;&#x6C38;&#x8FDC;&#x843D;&#x540E;&#x4E8E;&#x62E5;&#x6709;&#x65E0;&#x9650;&#x8D44;&#x6E90;&#x7684;&#x95ED;&#x6E90;&#x5DE8;&#x5934;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>MoE &#x6280;&#x672F;&#x7684;&#x6210;&#x719F;&#xFF1A;</strong> &#x6DF7;&#x5408;&#x4E13;&#x5BB6;&#x6A21;&#x578B;&#xFF08;Mixture of Experts&#xFF09;&#x4ECE; GPT-4 &#x5F00;&#x59CB;&#x8FDB;&#x5165;&#x4E3B;&#x6D41;&#x89C6;&#x91CE;&#xFF0C;&#x4F46;&#x4F20;&#x7EDF;&#x7684; MoE&#xFF08;&#x5982; Switch Transformer &#x6216; Mixtral&#xFF09;&#x5B58;&#x5728;&#x4E13;&#x5BB6;&#x5197;&#x4F59;&#x548C;&#x77E5;&#x8BC6;&#x6DF7;&#x5408;&#x4E0D;&#x5747;&#x7684;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>Attention &#x7684;&#x74F6;&#x9888;&#x65E5;&#x76CA;&#x51F8;&#x663E;&#xFF1A;</strong> &#x968F;&#x7740;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#x4ECE; 4k &#x5377;&#x5230; 128k &#x751A;&#x81F3; 1M&#xFF0C;&#x6807;&#x51C6;&#x7684; Multi-Head Attention (MHA) &#x751A;&#x81F3; Grouped-Query Attention (GQA) &#x90FD;&#x663E;&#x5F97;&#x592A;&#x201C;&#x91CD;&#x201D;&#x4E86;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>DeepSeek-V3 &#x7684;&#x67B6;&#x6784;&#x53EF;&#x4EE5;&#x6982;&#x62EC;&#x4E3A;&#x4E24;&#x4E2A;&#x6838;&#x5FC3;&#x201C;&#x624B;&#x672F;&#x201D;&#xFF1A;</p>
<ul>
<li>
<p><strong>&#x624B;&#x672F;&#x4E00;&#xFF1A;DeepSeekMoE&#xFF08;&#x6781;&#x81F4;&#x7684;&#x4E13;&#x5BB6;&#x7EC6;&#x5206;&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li><strong>&#x4F20;&#x7EDF; MoE&#xFF1A;</strong> &#x53EA;&#x6709;&#x51E0;&#x4E2A;&#x5927;&#x4E13;&#x5BB6;&#xFF08;&#x6BD4;&#x5982; 8 &#x4E2A;&#xFF09;&#xFF0C;&#x6BCF;&#x6B21;&#x9009; 2 &#x4E2A;&#x3002;&#x5C31;&#x50CF;&#x628A;&#x6D3B;&#x513F;&#x5206;&#x7ED9;&#x51E0;&#x4E2A;&#x5168;&#x80FD;&#x5DE5;&#x5320;&#x3002;</li>
<li><strong>DeepSeekMoE&#xFF1A;</strong> &#x628A;&#x4E13;&#x5BB6;&#x5207;&#x5F97;&#x975E;&#x5E38;&#x7EC6;&#xFF08;256 &#x4E2A;&#xFF09;&#xFF0C;&#x6BCF;&#x6B21;&#x9009; 64 &#x4E2A;&#xFF0C;&#x5E76;&#x4E14;&#x8FD8;&#x6709;&#x201C;&#x5171;&#x4EAB;&#x4E13;&#x5BB6;&#x201D;&#xFF08;Shared Experts&#xFF09;&#x3002;&#x8FD9;&#x5C31;&#x50CF;&#x628A;&#x6D3B;&#x513F;&#x62C6;&#x89E3;&#xFF0C;&#x5206;&#x7ED9;&#x51E0;&#x5341;&#x4E2A;&#x4E13;&#x95E8;&#x62E7;&#x87BA;&#x4E1D;&#x3001;&#x4E13;&#x95E8;&#x5237;&#x6F06;&#x7684;&#x6D41;&#x6C34;&#x7EBF;&#x5DE5;&#x4EBA;&#xFF0C;&#x540C;&#x65F6;&#x8FD8;&#x6709;&#x51E0;&#x4E2A;&#x201C;&#x5DE5;&#x5934;&#x201D;&#x8D1F;&#x8D23;&#x7EDF;&#x7B79;&#x901A;&#x7528;&#x77E5;&#x8BC6;&#x3002;</li>
<li><strong>&#x7ED3;&#x679C;&#xFF1A;</strong> &#x77E5;&#x8BC6;&#x638C;&#x63E1;&#x66F4;&#x7CBE;&#x51C6;&#xFF0C;&#x8BA1;&#x7B97;&#x6548;&#x7387;&#x66F4;&#x9AD8;&#x3002;<strong>&#x4E0D;&#x4EC5;&#x63A8;&#x7406;&#x5FEB;&#xFF0C;&#x8BAD;&#x7EC3;&#x65F6;&#x7684;&#x8BA1;&#x7B97;&#x91CF;&#xFF08;FLOPs&#xFF09;&#x4E5F;&#x4EC5;&#x4E3A;&#x540C;&#x89C4;&#x6A21;&#x7A20;&#x5BC6;&#x6A21;&#x578B;&#x7684; 1/10&#xFF0C;&#x8BA9;&#x8D85;&#x5927;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</strong></li>
</ul>
</li>
<li>
<p><strong>&#x624B;&#x672F;&#x4E8C;&#xFF1A;MLA&#xFF08;&#x591A;&#x5934;&#x6F5C;&#x5728;&#x6CE8;&#x610F;&#x529B;&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li><strong>&#x4F20;&#x7EDF; Attention&#xFF1A;</strong> &#x8981;&#x5B58;&#x5DE8;&#x5927;&#x7684; KV Cache&#x3002;</li>
<li><strong>MLA&#xFF1A;</strong> &#x5BF9; KV &#x8FDB;&#x884C;<strong>&#x4F4E;&#x79E9;&#x538B;&#x7F29;&#xFF08;Low-Rank Compression&#xFF09;</strong>&#x3002;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x5B58;&#x50A8;&#x5B8C;&#x6574;&#x7684;&#x201C;&#x8BD5;&#x5377;&#x201D;&#xFF08;Key/Value&#xFF09;&#xFF0C;&#x800C;&#x662F;&#x53EA;&#x5B58;&#x50A8;&#x538B;&#x7F29;&#x540E;&#x7684;&#x201C;&#x77E5;&#x8BC6;&#x70B9;&#x6458;&#x8981;&#x201D;&#xFF08;Latent Vector&#xFF09;&#x3002;</li>
<li><strong>&#x7ED3;&#x679C;&#xFF1A;</strong> &#x5728;&#x4FDD;&#x6301;&#x6027;&#x80FD;&#x51E0;&#x4E4E;&#x4E0D;&#x964D;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x663E;&#x5B58;&#x5360;&#x7528;&#x6781;&#x5927;&#x964D;&#x4F4E;&#x3002;<strong>&#x8FD9;&#x4E0D;&#x4EC5;&#x8BA9;&#x63A8;&#x7406;&#x901F;&#x5EA6;&#x8D77;&#x98DE;&#xFF0C;&#x4E5F;&#x8BA9;&#x8BAD;&#x7EC3;&#x65F6;&#x80FD;&#x585E;&#x4E0B;&#x66F4;&#x5927;&#x7684; Batch Size &#x548C;&#x66F4;&#x957F;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</strong></li>
</ul>
</li>
<li>
<p><strong>&#x624B;&#x672F;&#x4E09;&#xFF1A;FP8 &#x6DF7;&#x5408;&#x7CBE;&#x5EA6;&#x8BAD;&#x7EC3;</strong>&#xFF1A;</p>
<ul>
<li>&#x5168;&#x94FE;&#x8DEF;&#x4F7F;&#x7528; FP8&#xFF08;8&#x4F4D;&#x6D6E;&#x70B9;&#x6570;&#xFF09;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#x548C;&#x5B58;&#x50A8;&#xFF0C;&#x8BA9;&#x540C;&#x6837;&#x7684;&#x663E;&#x5361;&#x7B97;&#x529B;&#x7FFB;&#x500D;&#xFF0C;&#x663E;&#x5B58;&#x5360;&#x7528;&#x51CF;&#x534A;&#x3002;<strong>&#x901A;&#x8FC7;&#x7CBE;&#x7EC6;&#x7684;&#x91CF;&#x5316;&#x7B56;&#x7565;&#x786E;&#x4FDD;&#x4E86;&#x8BAD;&#x7EC3;&#x7CBE;&#x5EA6;&#x4E0D;&#x964D;&#x3002;</strong></li>
</ul>
</li>
</ul>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>DeepSeek-V3 &#x4EE3;&#x8868;&#x4E86;&#x5F53;&#x524D; <strong>Transformer + MoE</strong> &#x67B6;&#x6784;&#x7684;&#x5DC5;&#x5CF0;&#x4F18;&#x5316;&#x3002;</p>
<ul>
<li><strong>&#x5BF9;&#x6BD4; Llama 3.1 (Dense)&#xFF1A;</strong> Llama 3.1 405B &#x662F;&#x7A20;&#x5BC6;&#x6A21;&#x578B;&#xFF0C;&#x6BCF;&#x6B21;&#x63A8;&#x7406;&#x90FD;&#x8981;&#x6FC0;&#x6D3B;&#x6240;&#x6709;&#x53C2;&#x6570;&#xFF0C;&#x6210;&#x672C;&#x6781;&#x9AD8;&#x3002;DeepSeek-V3 &#x53C2;&#x6570;&#x91CF;&#x66F4;&#x5927;&#xFF08;671B&#xFF09;&#xFF0C;&#x4F46;&#x6BCF;&#x6B21;&#x53EA;&#x6FC0;&#x6D3B; 37B&#xFF0C;&#x901F;&#x5EA6;&#x5FEB;&#x5F97;&#x591A;&#x3002;</li>
<li><strong>&#x5BF9;&#x6BD4; GPT-4o / Claude 3.5&#xFF1A;</strong> DeepSeek-V3 &#x5728;&#x6570;&#x5B66;&#x3001;&#x4EE3;&#x7801;&#x7B49;&#x786C;&#x6838;&#x4EFB;&#x52A1;&#x4E0A;&#x5DF2;&#x5B9E;&#x73B0;&#x8D85;&#x8D8A;&#x6216;&#x6301;&#x5E73;&#xFF0C;&#x4F46;&#x8BAD;&#x7EC3;&#x548C;&#x63A8;&#x7406;&#x6210;&#x672C;&#x53EF;&#x80FD;&#x53EA;&#x6709;&#x5B83;&#x4EEC;&#x7684;&#x51E0;&#x5341;&#x5206;&#x4E4B;&#x4E00;&#x3002;</li>
</ul>
<p><strong>DeepSeek-V3 &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;...</strong> &#x5B83;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x5806;&#x6599;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;<strong>&#x7B97;&#x6CD5;&#x5C42;&#x9762;&#x7684;&#x6781;&#x81F4;&#x4F18;&#x5316;</strong>&#xFF0C;&#x69A8;&#x5E72;&#x4E86;&#x786C;&#x4EF6;&#x7684;&#x6BCF;&#x4E00;&#x6EF4;&#x6027;&#x80FD;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. MLA (Multi-Head Latent Attention)"><a href="#1. MLA (Multi-Head Latent Attention)"></a>1. MLA (Multi-Head Latent Attention)</h3>
<p>[&#x8FD9;&#x662F; V3 &#x6700;&#x6838;&#x5FC3;&#x7684;&#x521B;&#x65B0;&#xFF0C;&#x89E3;&#x51B3;&#x4E86; KV Cache &#x663E;&#x5B58;&#x7206;&#x70B8;&#x7684;&#x95EE;&#x9898;]</p>
<ul>
<li><strong>&#x4F20;&#x7EDF;&#x6A21;&#x578B; (MHA/GQA)&#xFF1A;</strong> &#x5C31;&#x50CF;&#x6BCF;&#x4E2A;&#x4EBA;&#x6765;&#x8003;&#x8BD5;&#xFF0C;&#x8003;&#x5B98;&#x90FD;&#x8981;&#x628A;&#x4ED6;&#x7684;&#x6574;&#x4EFD;&#x5C65;&#x5386;&#xFF08;KV&#xFF09;&#x5B58;&#x8FDB;&#x6863;&#x6848;&#x67DC;&#x3002;&#x4EBA;&#x591A;&#x4E86;&#xFF0C;&#x6863;&#x6848;&#x67DC;&#x5C31;&#x7206;&#x4E86;&#x3002;</li>
<li><strong>MLA&#xFF1A;</strong> &#x8003;&#x5B98;&#x5728;&#x5B58;&#x5C65;&#x5386;&#x524D;&#xFF0C;&#x5148;&#x628A;&#x5B83;<strong>&#x538B;&#x7F29;</strong>&#x6210;&#x4E00;&#x5F20;&#x5C0F;&#x5361;&#x7247;&#xFF08;Latent Vector&#xFF09;&#x3002;
<ul>
<li><strong>&#x538B;&#x7F29; (Compression)&#xFF1A;</strong> &#x628A;&#x9AD8;&#x7EF4;&#x7684; Key &#x548C; Value &#x6295;&#x5F71;&#x5230;&#x4E00;&#x4E2A;&#x4F4E;&#x7EF4;&#x7A7A;&#x95F4;&#x3002;</li>
<li><strong>&#x8FD8;&#x539F; (Absorb)&#xFF1A;</strong> &#x5728;&#x8BA1;&#x7B97;&#x6CE8;&#x610F;&#x529B;&#x65F6;&#xFF0C;&#x901A;&#x8FC7;&#x77E9;&#x9635;&#x53D8;&#x6362;&#xFF0C;&#x8BA9; Query &#x80FD;&#x591F;&#x76F4;&#x63A5;&#x7406;&#x89E3;&#x8FD9;&#x5F20;&#x5C0F;&#x5361;&#x7247;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x628A;&#x5361;&#x7247;&#x8FD8;&#x539F;&#x6210;&#x539F;&#x59CB;&#x5C65;&#x5386;&#x3002;</li>
</ul>
</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> <strong>&#x201C;&#x628A;&#x4E66;&#x8BFB;&#x8584;&#x201D;</strong>&#x3002;&#x4EE5;&#x524D;&#x8981;&#x80CC;&#x6574;&#x672C;&#x4E66;&#xFF08;Full KV&#xFF09;&#xFF0C;&#x73B0;&#x5728;&#x53EA;&#x9700;&#x8981;&#x8BB0;&#x51E0;&#x4E2A;&#x6838;&#x5FC3;&#x516C;&#x5F0F;&#xFF08;Latent KV&#xFF09;&#xFF0C;&#x4F9D;&#x7136;&#x80FD;&#x8003;&#x6EE1;&#x5206;&#x3002;</li>
</ul>
<h3 id="2. DeepSeekMoE (&#x7EC6;&#x7C92;&#x5EA6;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;)"><a href="#2. DeepSeekMoE (&#x7EC6;&#x7C92;&#x5EA6;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;)"></a>2. DeepSeekMoE (&#x7EC6;&#x7C92;&#x5EA6;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;)</h3>
<p>[&#x89E3;&#x51B3;&#x4E86;&#x4E13;&#x5BB6;&#x6A21;&#x578B;&#x7684;&#x201C;&#x77E5;&#x8BC6;&#x6DF7;&#x6742;&#x201D;&#x548C;&#x201C;&#x8DEF;&#x7531;&#x574D;&#x7F29;&#x201D;&#x95EE;&#x9898;]</p>
<ul>
<li><strong>&#x7EC6;&#x7C92;&#x5EA6;&#x4E13;&#x5BB6; (Fine-grained Experts)&#xFF1A;</strong> &#x5C06;&#x4E13;&#x5BB6;&#x5207;&#x5206;&#x5F97;&#x66F4;&#x7EC6;&#x3002;V3 &#x6709; 256 &#x4E2A;&#x8DEF;&#x7531;&#x4E13;&#x5BB6;&#x3002;</li>
<li><strong>&#x5171;&#x4EAB;&#x4E13;&#x5BB6; (Shared Experts)&#xFF1A;</strong> &#x8BBE;&#x7F6E;&#x4E00;&#x90E8;&#x5206;&#x4E13;&#x5BB6;<strong>&#x6C38;&#x8FDC;&#x88AB;&#x6FC0;&#x6D3B;</strong>&#x3002;
<ul>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#xFF1F;</strong> &#x6709;&#x4E9B;&#x77E5;&#x8BC6;&#xFF08;&#x6BD4;&#x5982;&#x8BED;&#x6CD5;&#x3001;&#x903B;&#x8F91;&#x8BCD;&#xFF09;&#x662F;&#x901A;&#x7528;&#x7684;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x8DEF;&#x7531;&#xFF0C;&#x5E94;&#x8BE5;&#x8BA9;&#x6240;&#x6709;&#x8F93;&#x5165;&#x90FD;&#x7ECF;&#x8FC7;&#x5B83;&#x4EEC;&#x3002;</li>
</ul>
</li>
<li><strong>&#x65E0;&#x8F85;&#x52A9;&#x635F;&#x5931;&#x8D1F;&#x8F7D;&#x5747;&#x8861; (Auxiliary-Loss-Free Balancing)&#xFF1A;</strong>
<ul>
<li>&#x4F20;&#x7EDF; MoE &#x4E3A;&#x4E86;&#x9632;&#x6B62;&#x6240;&#x6709;&#x4EFB;&#x52A1;&#x90FD;&#x6D8C;&#x5411;&#x540C;&#x4E00;&#x4E2A;&#x4E13;&#x5BB6;&#xFF08;&#x5BFC;&#x81F4;&#x90A3;&#x4E2A;&#x4E13;&#x5BB6;&#x7D2F;&#x6B7B;&#xFF0C;&#x5176;&#x4ED6;&#x4E13;&#x5BB6;&#x95F2;&#x6B7B;&#xFF09;&#xFF0C;&#x4F1A;&#x52A0;&#x4E00;&#x4E2A;&#x201C;&#x60E9;&#x7F5A;&#x9879;&#x201D;&#xFF08;Auxiliary Loss&#xFF09;&#x5F3A;&#x884C;&#x5206;&#x914D;&#x3002;&#x4F46;&#x8FD9;&#x4F1A;&#x5E72;&#x6270;&#x6A21;&#x578B;&#x5B66;&#x4E60;&#x3002;</li>
<li>V3 &#x6539;&#x7528;<strong>&#x52A8;&#x6001;&#x504F;&#x7F6E; (Bias)</strong> &#x6765;&#x8C03;&#x6574;&#x8DEF;&#x7531;&#xFF0C;&#x65E2;&#x4FDD;&#x8BC1;&#x4E86;&#x8D1F;&#x8F7D;&#x5747;&#x8861;&#xFF0C;&#x53C8;&#x4E0D;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x7684;&#x4E3B;&#x4EFB;&#x52A1;&#x8868;&#x73B0;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="3. FP8 &#x8BAD;&#x7EC3; (8-bit Floating Point)"><a href="#3. FP8 &#x8BAD;&#x7EC3; (8-bit Floating Point)"></a>3. FP8 &#x8BAD;&#x7EC3; (8-bit Floating Point)</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x4EE5;&#x524D;&#x8BAD;&#x7EC3;&#x7528; FP16/BF16&#xFF08;16&#x4F4D;&#xFF09;&#xFF0C;&#x73B0;&#x5728;&#x7528; FP8&#xFF08;8&#x4F4D;&#xFF09;&#x3002;</li>
<li><strong>&#x96BE;&#x5EA6;&#xFF1A;</strong> 8&#x4F4D;&#x8868;&#x793A;&#x7684;&#x6570;&#x5B57;&#x8303;&#x56F4;&#x5F88;&#x7A84;&#xFF0C;&#x7A0D;&#x5FAE;&#x5927;&#x4E00;&#x70B9;&#x5C31;&#x6EA2;&#x51FA;&#xFF0C;&#x5C0F;&#x4E00;&#x70B9;&#x5C31;&#x53D8;&#x6210; 0&#xFF0C;&#x5BB9;&#x6613;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x7EC3;&#x201C;&#x50BB;&#x201D;&#x4E86;&#x3002;</li>
<li><strong>DeepSeek &#x7684;&#x89E3;&#x6CD5;&#xFF1A;</strong> &#x628A;&#x5927;&#x9505;&#x996D;&#x6539;&#x6210;&#x201C;&#x5F00;&#x5C0F;&#x7076;&#x201D;&#x3002;
<ul>
<li><strong>&#x7CBE;&#x7EC6;&#x5316;&#x91CF;&#x5316; (Tile-wise Scaling)&#xFF1A;</strong> &#x4E0D;&#x518D;&#x662F;&#x6574;&#x5C42;&#x5171;&#x7528;&#x4E00;&#x4E2A;&#x7F29;&#x653E;&#x6BD4;&#x4F8B;&#xFF0C;&#x800C;&#x662F;&#x6BCF; 128x128 &#x7684;&#x5C0F;&#x5757;&#x5355;&#x72EC;&#x8BA1;&#x7B97;&#x3002;&#x8FD9;&#x6837;&#x5373;&#x4F7F;&#x6709;&#x5F02;&#x5E38;&#x5927;&#x503C;&#xFF08;Outlier&#xFF09;&#xFF0C;&#x4E5F;&#x53EA;&#x4F1A;&#x5F71;&#x54CD;&#x5C40;&#x90E8;&#xFF0C;&#x4E0D;&#x4F1A;&#x62D6;&#x7D2F;&#x6574;&#x4F53;&#x7CBE;&#x5EA6;&#x3002;</li>
<li><strong>&#x9AD8;&#x7CBE;&#x5EA6;&#x7D2F;&#x52A0;&#xFF1A;</strong> &#x7B97;&#x4E58;&#x6CD5;&#x7528; FP8&#xFF08;&#x5FEB;&#xFF09;&#xFF0C;&#x4F46;&#x7B97;&#x52A0;&#x6CD5;&#xFF08;Accumulation&#xFF09;&#x65F6;&#x4E34;&#x65F6;&#x7528; FP32&#xFF0C;&#x9632;&#x6B62;&#x8BEF;&#x5DEE;&#x7D2F;&#x79EF;&#x3002;</li>
</ul>
</li>
<li><strong>&#x7ED3;&#x679C;&#xFF1A;</strong> &#x8BAD;&#x7EC3;&#x5168;&#x7A0B;&#x6CA1;&#x6709;&#x51FA;&#x73B0; Loss Spike&#xFF08;&#x635F;&#x5931;&#x5C16;&#x5CF0;&#xFF09;&#xFF0C;&#x6548;&#x679C;&#x4E0E;&#x9AD8;&#x7CBE;&#x5EA6;&#x8BAD;&#x7EC3;&#x51E0;&#x4E4E;&#x65E0;&#x5F02;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>DeepSeek-V3 &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x7B97;&#x6CD5;&#x4E0E;&#x5DE5;&#x7A0B;&#x7684;&#x6781;&#x81F4;&#x534F;&#x594F;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>MLA</strong> &#x89E3;&#x51B3;&#x4E86;**&#x201C;&#x5B58;&#x4E0D;&#x4E0B;&#x201D;**&#x7684;&#x95EE;&#x9898;&#xFF08;KV Cache&#xFF09;&#x3002;</li>
<li><strong>DeepSeekMoE</strong> &#x89E3;&#x51B3;&#x4E86;**&#x201C;&#x7B97;&#x5F97;&#x6162;&#x201D;**&#x7684;&#x95EE;&#x9898;&#xFF08;&#x8BA1;&#x7B97;&#x91CF;&#xFF09;&#x3002;</li>
<li><strong>FP8</strong> &#x89E3;&#x51B3;&#x4E86;**&#x201C;&#x8BAD;&#x4E0D;&#x8D77;&#x201D;**&#x7684;&#x95EE;&#x9898;&#xFF08;&#x663E;&#x5B58;&#x4E0E;&#x7B97;&#x529B;&#xFF09;&#x3002;</li>
</ol>
<p>&#x5B83;&#x5411;&#x4E16;&#x754C;&#x8BC1;&#x660E;&#xFF1A;<strong>&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x4E0D;&#x9700;&#x8981;&#x62FC;&#x8D22;&#x529B;&#xFF0C;&#x62FC;&#x667A;&#x529B;&#x7167;&#x6837;&#x80FD;&#x8D62;&#x3002;</strong></p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2412.19437">&#x8BBA;&#x6587;&#x5730;&#x5740;</a></li>
<li><a href="https://github.com/deepseek-ai/DeepSeek-V3">GitHub &#x9879;&#x76EE;</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-28</em></p>
<p>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x975E;&#x5E38;&#x68D2;&#x7684;&#x76F4;&#x89C9;&#xFF01;&#x4F60;&#x7684;&#x62C5;&#x5FC3;&#x662F;&#x6709;&#x9053;&#x7406;&#x7684;&#xFF1A;<strong>&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#xFF08;Matrix Multiplication&#xFF09;&#x786E;&#x5B9E;&#x662F;&#x884C;&#x4E0E;&#x5217;&#x7684;&#x6574;&#x4F53;&#x8FD0;&#x7B97;&#xFF0C;&#x5982;&#x679C;&#x968F;&#x4FBF;&#x628A;&#x77E9;&#x9635;&#x5207;&#x788E;&#x4E86;&#xFF0C;&#x5B83;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x8054;&#x7CFB;&#x4E0D;&#x5C31;&#x65AD;&#x4E86;&#x5417;&#xFF1F;</strong></p>
<p>&#x4F46;&#x5B9E;&#x9645;&#x4E0A;&#xFF0C;<strong>Block-wise&#xFF08;&#x5206;&#x5757;&#xFF09;&#x91CF;&#x5316;&#x5B8C;&#x5168;&#x7B26;&#x5408;&#x6570;&#x5B66;&#x903B;&#x8F91;</strong>&#xFF0C;&#x5B83;&#x5229;&#x7528;&#x7684;&#x662F;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x4E2D;**&#x201C;&#x7D2F;&#x52A0;&#x6C42;&#x548C;&#x201D;&#x7684;&#x53EF;&#x62C6;&#x5206;&#x6027;**&#x3002;</p>
<p>&#x6211;&#x7528;&#x4E00;&#x4E2A;&#x901A;&#x4FD7;&#x7684;&#x4F8B;&#x5B50;&#x548C;&#x4E00;&#x6BB5;&#x7B80;&#x5355;&#x7684;&#x6570;&#x5B66;&#x516C;&#x5F0F;&#x6765;&#x89E3;&#x91CA;&#x5B83;&#x662F;&#x600E;&#x4E48;&#x505A;&#x5230;&#x7684;&#x3002;</p>
<h3 id="1. &#x6838;&#x5FC3;&#x903B;&#x8F91;&#xFF1A;&#x52A0;&#x6CD5;&#x662F;&#x53EF;&#x4EE5;&#x5206;&#x7EC4;&#x7684;"><a href="#1. &#x6838;&#x5FC3;&#x903B;&#x8F91;&#xFF1A;&#x52A0;&#x6CD5;&#x662F;&#x53EF;&#x4EE5;&#x5206;&#x7EC4;&#x7684;"></a>1. &#x6838;&#x5FC3;&#x903B;&#x8F91;&#xFF1A;&#x52A0;&#x6CD5;&#x662F;&#x53EF;&#x4EE5;&#x5206;&#x7EC4;&#x7684;</h3>
<p>&#x4E0D;&#x7BA1;&#x662F;&#x7B97; $W_q$ &#x8FD8;&#x662F; $W_v$&#xFF0C;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x7684;&#x672C;&#x8D28;&#x5C31;&#x662F;**&#x201C;&#x70B9;&#x79EF;&#x201D;&#xFF08;Dot Product&#xFF09;**&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x8981;&#x7B97;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x7ED3;&#x679C; $Y$&#xFF0C;&#x5B83;&#x662F;&#x8F93;&#x5165; $X$ &#x548C;&#x6743;&#x91CD; $W$ &#x7684;&#x4E58;&#x79EF;&#x3002;
$$Y = x_1 \\cdot w_1 + x_2 \\cdot w_2 + x_3 \\cdot w_3 + x_4 \\cdot w_4$$</p>
<h4 id="&#x4F20;&#x7EDF;&#x91CF;&#x5316;&#xFF08;Per-Tensor&#xFF09;"><a href="#&#x4F20;&#x7EDF;&#x91CF;&#x5316;&#xFF08;Per-Tensor&#xFF09;"></a>&#x4F20;&#x7EDF;&#x91CF;&#x5316;&#xFF08;Per-Tensor&#xFF09;</h4>
<p>&#x5C31;&#x50CF;&#x5927;&#x5BB6;&#x5171;&#x7528;&#x4E00;&#x4E2A;&#x7F29;&#x653E;&#x6BD4;&#x4F8B; $S$&#xFF08;&#x6BD4;&#x5982; $S=0.1$&#xFF09;&#x3002;
$$Y = (x_1&apos; \\cdot w_1&apos; + x_2&apos; \\cdot w_2&apos; + ... ) \\times S_{&#x5168;&#x5C40;}$$
<strong>&#x95EE;&#x9898;</strong>&#xFF1A;&#x5982;&#x679C; $x_1$ &#x7279;&#x522B;&#x5927;&#xFF0C;&#x4E3A;&#x4E86;&#x5BB9;&#x7EB3;&#x5B83;&#xFF0C;$S$ &#x5FC5;&#x987B;&#x5F88;&#x5927;&#xFF0C;&#x5BFC;&#x81F4; $x_2, x_3$ &#x8FD9;&#x4E9B;&#x5C0F;&#x6570;&#x5B57;&#x53D8;&#x4E3A;&#x4E86; 0&#x3002;</p>
<h4 id="&#x5206;&#x5757;&#x91CF;&#x5316;&#xFF08;Block-wise / Tile-wise&#xFF09;"><a href="#&#x5206;&#x5757;&#x91CF;&#x5316;&#xFF08;Block-wise / Tile-wise&#xFF09;"></a>&#x5206;&#x5757;&#x91CF;&#x5316;&#xFF08;Block-wise / Tile-wise&#xFF09;</h4>
<p>&#x6211;&#x4EEC;&#x628A;&#x4E0A;&#x9762;&#x7684;&#x516C;&#x5F0F;<strong>&#x5207;&#x6210;&#x4E24;&#x534A;</strong>&#x6765;&#x770B;&#xFF08;&#x6BD4;&#x5982;&#x6BCF; 2 &#x4E2A;&#x6570;&#x4E00;&#x7EC4;&#xFF09;&#xFF1A;
$$Y = \\underbrace{(x_1 \\cdot w_1 + x_2 \\cdot w_2)}<em>{\\text{&#x7B2C;1&#x7EC4;}} + \\underbrace{(x_3 \\cdot w_3 + x_4 \\cdot w_4)}</em>{\\text{&#x7B2C;2&#x7EC4;}}$$</p>
<p>&#x65E2;&#x7136;&#x662F;&#x52A0;&#x6CD5;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;<strong>&#x7ED9;&#x6BCF;&#x4E00;&#x7EC4;&#x5355;&#x72EC;&#x914D;&#x4E00;&#x4E2A;&#x7F29;&#x653E;&#x6BD4;&#x4F8B;</strong>&#xFF1A;</p>
<ul>
<li>&#x7B2C; 1 &#x7EC4;&#x6570;&#x503C;&#x5927;&#xFF0C;&#x7528; $S_1$&#x3002;</li>
<li>&#x7B2C; 2 &#x7EC4;&#x6570;&#x503C;&#x5C0F;&#xFF0C;&#x7528; $S_2$&#x3002;</li>
</ul>
<p>&#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;&#x53D8;&#x6210;&#x4E86;&#xFF1A;</p>
<ol>
<li><strong>&#x7B97;&#x7B2C; 1 &#x5757;</strong>&#xFF1A;&#x7528; FP8 &#x7B97;&#x51FA; $(x_1&apos;w_1&apos; + x_2&apos;w_2&apos;)$&#xFF0C;&#x7136;&#x540E;&#x7ACB;&#x523B;&#x4E58;&#x4EE5; $S_1$ &#x8FD8;&#x539F;&#x56DE;&#x9AD8;&#x7CBE;&#x5EA6;&#x3002;</li>
<li><strong>&#x7B97;&#x7B2C; 2 &#x5757;</strong>&#xFF1A;&#x7528; FP8 &#x7B97;&#x51FA; $(x_3&apos;w_3&apos; + x_4&apos;w_4&apos;)$&#xFF0C;&#x7136;&#x540E;&#x7ACB;&#x523B;&#x4E58;&#x4EE5; $S_2$ &#x8FD8;&#x539F;&#x56DE;&#x9AD8;&#x7CBE;&#x5EA6;&#x3002;</li>
<li><strong>&#x6700;&#x540E;&#x52A0;&#x8D77;&#x6765;</strong>&#xFF1A;$Result = \\text{&#x90E8;&#x5206;&#x548C;}_1 + \\text{&#x90E8;&#x5206;&#x548C;}_2$&#x3002;</li>
</ol>
<p><strong>&#x7ED3;&#x8BBA;</strong>&#xFF1A;&#x56E0;&#x4E3A;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x672C;&#x8D28;&#x662F;<strong>&#x7D2F;&#x52A0;&#x548C;</strong>&#xFF0C;&#x6240;&#x4EE5;&#x4F60;&#x53EF;&#x4EE5;&#x5148;&#x628A;&#x5B83;&#x4EEC;&#x5207;&#x6210;&#x5C0F;&#x5757;&#xFF0C;<strong>&#x5206;&#x5757;&#x7B97;&#x5B8C;&#x3001;&#x8FD8;&#x539F;&#x7CBE;&#x5EA6;&#x3001;&#x6700;&#x540E;&#x518D;&#x52A0;&#x5728;&#x4E00;&#x8D77;</strong>&#x3002;&#x6570;&#x5B66;&#x7ED3;&#x679C;&#x662F;&#x5B8C;&#x5168;&#x7B49;&#x4EF7;&#x7684;&#xFF08;&#x751A;&#x81F3;&#x66F4;&#x51C6;&#xFF0C;&#x56E0;&#x4E3A;&#x6BCF;&#x5757;&#x7684;&#x7CBE;&#x5EA6;&#x90FD;&#x66F4;&#x9AD8;&#xFF09;&#x3002;</p>
<h3 id="2. &#x901A;&#x4FD7;&#x6BD4;&#x55BB;&#xFF1A;&#x5916;&#x5E01;&#x5151;&#x6362;"><a href="#2. &#x901A;&#x4FD7;&#x6BD4;&#x55BB;&#xFF1A;&#x5916;&#x5E01;&#x5151;&#x6362;"></a>2. &#x901A;&#x4FD7;&#x6BD4;&#x55BB;&#xFF1A;&#x5916;&#x5E01;&#x5151;&#x6362;</h3>
<p>&#x60F3;&#x8C61;&#x4F60;&#x8981;&#x8BA1;&#x7B97;&#x4F60;&#x624B;&#x91CC;&#x7684;&#x201C;&#x603B;&#x8D44;&#x4EA7;&#x201D;&#xFF08;$Y$&#xFF09;&#xFF0C;&#x4F60;&#x624B;&#x91CC;&#x7684;&#x94B1;&#xFF08;$X$&#xFF09;&#x548C;&#x6C47;&#x7387;&#xFF08;$W$&#xFF09;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#x3002;</p>
<ul>
<li>
<p><strong>&#x4F20;&#x7EDF;&#x91CF;&#x5316;&#xFF08;&#x4E00;&#x5200;&#x5207;&#xFF09;</strong>&#xFF1A;
&#x628A;&#x4F60;&#x624B;&#x91CC;&#x6240;&#x6709;&#x7684;&#x7F8E;&#x5143;&#x3001;&#x65E5;&#x5143;&#x3001;&#x6D25;&#x5DF4;&#x5E03;&#x97E6;&#x5E01;&#x90FD;&#x5148;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x7528;&#x4E00;&#x4E2A;**&#x201C;&#x5168;&#x7403;&#x5E73;&#x5747;&#x6C47;&#x7387;&#x201D;**&#x53BB;&#x7B97;&#x3002;</p>
<ul>
<li><em>&#x540E;&#x679C;</em>&#xFF1A;&#x6D25;&#x5DF4;&#x5E03;&#x97E6;&#x5E01;&#x9762;&#x503C;&#x592A;&#x5927;&#xFF08;&#x5F02;&#x5E38;&#x503C;&#xFF09;&#xFF0C;&#x5BFC;&#x81F4;&#x4F60;&#x7684;&#x7F8E;&#x5143;&#x5728;&#x5E73;&#x5747;&#x6C47;&#x7387;&#x4E0B;&#x663E;&#x5F97;&#x5FAE;&#x4E0D;&#x8DB3;&#x9053;&#xFF0C;&#x88AB;&#x5FFD;&#x7565;&#x8BA1;&#x4E3A; 0 &#x4E86;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5206;&#x5757;&#x91CF;&#x5316;&#xFF08;&#x5206;&#x8D26;&#x7B97;&#xFF09;</strong>&#xFF1A;
&#x4F60;&#x628A;&#x94B1;&#x5206;&#x6210;&#x51E0;&#x4E2A;&#x4FE1;&#x5C01;&#xFF08;Block&#xFF09;&#x3002;</p>
<ul>
<li><strong>&#x4FE1;&#x5C01; A&#xFF08;&#x7F8E;&#x5143;&#xFF09;</strong>&#xFF1A;&#x7528;&#x201C;&#x7F8E;&#x5143;&#x6C47;&#x7387;&#x201D;&#x7B97;&#x4E00;&#x4E0B;&#xFF0C;&#x8BB0;&#x4E0B;&#x6765;&#x3002;</li>
<li><strong>&#x4FE1;&#x5C01; B&#xFF08;&#x65E5;&#x5143;&#xFF09;</strong>&#xFF1A;&#x7528;&#x201C;&#x65E5;&#x5143;&#x6C47;&#x7387;&#x201D;&#x7B97;&#x4E00;&#x4E0B;&#xFF0C;&#x8BB0;&#x4E0B;&#x6765;&#x3002;</li>
<li><strong>&#x6700;&#x540E;</strong>&#xFF1A;&#x628A;&#x4FE1;&#x5C01; A &#x7684;&#x7ED3;&#x679C; + &#x4FE1;&#x5C01; B &#x7684;&#x7ED3;&#x679C;&#x3002;</li>
</ul>
</li>
</ul>
<p>&#x8FD9;&#x6837;&#xFF0C;&#x65E0;&#x8BBA;&#x6D25;&#x5DF4;&#x5E03;&#x97E6;&#x5E01;&#x600E;&#x4E48;&#x81A8;&#x80C0;&#xFF0C;&#x90FD;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x4F60;&#x7B97;&#x7F8E;&#x5143;&#x7684;&#x7CBE;&#x5EA6;&#x3002;</p>
<h3 id="3. &#x5728; GPU &#x4E0A;&#x662F;&#x600E;&#x4E48;&#x53D1;&#x751F;&#x7684;&#xFF1F;"><a href="#3. &#x5728; GPU &#x4E0A;&#x662F;&#x600E;&#x4E48;&#x53D1;&#x751F;&#x7684;&#xFF1F;"></a>3. &#x5728; GPU &#x4E0A;&#x662F;&#x600E;&#x4E48;&#x53D1;&#x751F;&#x7684;&#xFF1F;</h3>
<p>&#x4F60;&#x63D0;&#x5230;&#x7684; $W_q, W_k, W_v$ &#x90FD;&#x662F;&#x5DE8;&#x5927;&#x7684;&#x77E9;&#x9635;&#x3002;&#x5728; H800 &#x8FD9;&#x79CD; GPU &#x4E0A;&#xFF0C;&#x8BA1;&#x7B97;&#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x6027;&#x628A;&#x6574;&#x4E2A;&#x5927;&#x77E9;&#x9635;&#x7B97;&#x5B8C;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x672C;&#x6765;&#x5C31;&#x662F;&#x5207;&#x6210;&#x65E0;&#x6570;&#x4E2A;&#x5C0F;&#x5757;&#xFF08;Tile&#xFF09;&#x6254;&#x8FDB; Tensor Core &#x8BA1;&#x7B97;&#x7684;&#x3002;</p>
<p>DeepSeek &#x7684;&#x505A;&#x6CD5;&#x662F;&#xFF1A;</p>
<ol>
<li><strong>&#x5B58;&#x50A8;&#x65F6;</strong>&#xFF1A;&#x628A;&#x6743;&#x91CD; $W$ &#x5207;&#x6210; $128 \\times 128$ &#x7684;&#x5C0F;&#x5757;&#x3002;&#x6BCF;&#x4E00;&#x5757;&#x9644;&#x5E26;&#x4E00;&#x4E2A; FP32 &#x683C;&#x5F0F;&#x7684;&#x7F29;&#x653E;&#x56E0;&#x5B50;&#xFF08;Scale&#xFF09;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#x65F6;</strong>&#xFF1A;
<ul>
<li>GPU &#x8BFB;&#x53D6;&#x4E00;&#x4E2A;&#x5C0F;&#x5757;&#x7684; FP8 &#x6743;&#x91CD;&#x548C; FP8 &#x6FC0;&#x6D3B;&#x503C;&#x3002;</li>
<li>&#x5728; Tensor Core &#x5185;&#x90E8;&#x6781;&#x901F;&#x5B8C;&#x6210;&#x4E58;&#x6CD5;&#x548C;&#x7D2F;&#x52A0;&#x3002;</li>
<li><strong>&#x7ACB;&#x523B;</strong>&#x4E58;&#x4EE5;&#x8BE5;&#x5757;&#x5BF9;&#x5E94;&#x7684;&#x7F29;&#x653E;&#x56E0;&#x5B50;&#xFF0C;&#x53D8;&#x56DE;&#x9AD8;&#x7CBE;&#x5EA6;&#xFF08;FP32/BF16&#xFF09;&#x3002;</li>
<li>&#x628A;&#x8FD9;&#x4E2A;&#x9AD8;&#x7CBE;&#x5EA6;&#x7684;&#x7ED3;&#x679C;&#x52A0;&#x5230;&#x603B;&#x548C;&#xFF08;Accumulator&#xFF09;&#x91CC;&#x3002;</li>
</ul>
</li>
</ol>
<p>&#x6240;&#x4EE5;&#xFF0C;<strong>&#x201C;&#x62C6;&#x5F00;&#x201D;&#x4E0D;&#x4EC5;&#x6CA1;&#x6709;&#x7834;&#x574F;&#x6574;&#x4F53;&#x6027;&#xFF0C;&#x53CD;&#x800C;&#x662F;&#x5229;&#x7528;&#x4E86; GPU &#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x7684;&#x7269;&#x7406;&#x7279;&#x6027;&#xFF0C;&#x5728;&#x5FAE;&#x89C2;&#x5C42;&#x9762;&#x201C;&#x66F4;&#x7CBE;&#x51C6;&#x5730;&#x201D;&#x5B8C;&#x6210;&#x4E86;&#x6574;&#x4F53;&#x8FD0;&#x7B97;&#x3002;</strong></p>
`,E=[{level:2,title:"DeepSeek-V3 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. MLA (Multi-Head Latent Attention)",children:[]},{level:3,title:"2. DeepSeekMoE (细粒度混合专家)",children:[]},{level:3,title:"3. FP8 训练 (8-bit Floating Point)",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[{level:3,title:"1. 核心逻辑：加法是可以分组的",children:[{level:4,title:"传统量化（Per-Tensor）",children:[]},{level:4,title:"分块量化（Block-wise / Tile-wise）",children:[]}]},{level:3,title:"2. 通俗比喻：外币兑换",children:[]},{level:3,title:"3. 在 GPU 上是怎么发生的？",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
