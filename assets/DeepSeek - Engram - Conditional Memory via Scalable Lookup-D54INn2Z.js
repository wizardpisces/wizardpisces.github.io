const x={},F=`<p>DeepSeek &#x6700;&#x8FD1;(2025-01-12)&#x53D1;&#x5E03;&#x7684; <strong>Engram</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2601.07372">Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models</a>&#x300B;&#xFF09;&#x5728; AI &#x5708;&#x5F15;&#x8D77;&#x4E86;&#x5F88;&#x5927;&#x5173;&#x6CE8;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;**&#x201C;&#x6761;&#x4EF6;&#x5B58;&#x50A8;&#x201D;&#xFF08;Conditional Memory&#xFF09;**&#x673A;&#x5236;&#xFF0C;&#x65E8;&#x5728;&#x4E3A;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x50CF;&#x201C;&#x8BCD;&#x5178;&#x201D;&#x6216;&#x201C;&#x767E;&#x79D1;&#x5168;&#x4E66;&#x201D;&#x4E00;&#x6837;&#x7684;&#x5916;&#x90E8;&#x67E5;&#x8BE2;&#x6A21;&#x5757;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x9700;&#x8981;&#x628A;&#x6240;&#x6709;&#x77E5;&#x8BC6;&#x90FD;&#x6B7B;&#x8BB0;&#x786C;&#x80CC;&#x5728;&#x795E;&#x7ECF;&#x5143;&#x7684;&#x6743;&#x91CD;&#x91CC;&#x3002;</p>
<h2 id="Engram &#x8BBA;&#x6587;&#x6982;&#x8FF0;"><a href="#Engram &#x8BBA;&#x6587;&#x6982;&#x8FF0;"></a>Engram &#x8BBA;&#x6587;&#x6982;&#x8FF0;</h2>
<h3 id="1. Engram &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#1. Engram &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>1. Engram &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h3>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;Transformer &#x6A21;&#x578B;&#x5728;&#x5904;&#x7406;&#x201C;&#x9759;&#x6001;&#x77E5;&#x8BC6;&#x201D;&#x65F6;&#x6781;&#x5EA6;&#x4F4E;&#x6548;&#x3002;</strong></p>
<p>&#x76EE;&#x524D;&#x4E3B;&#x6D41;&#x7684; Transformer&#xFF08;&#x5305;&#x62EC; GPT-4 &#x548C; DeepSeek-V3 &#x8FD9;&#x79CD; MoE &#x6A21;&#x578B;&#xFF09;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6839;&#x672C;&#x7F3A;&#x9677;&#xFF1A;<strong>&#x5B83;&#x4EEC;&#x7F3A;&#x4E4F;&#x539F;&#x751F;&#x7684;&#x201C;&#x67E5;&#x8BE2;&#x201D;&#x80FD;&#x529B;&#x3002;</strong></p>
<ul>
<li><strong>&#x8BA1;&#x7B97;&#x6D6A;&#x8D39;&#xFF1A;</strong> &#x5F53;&#x6A21;&#x578B;&#x9047;&#x5230;&#x4E00;&#x4E2A;&#x5E38;&#x89C1;&#x7684;&#x77ED;&#x8BED;&#x6216;&#x4E8B;&#x5B9E;&#xFF08;&#x6BD4;&#x5982;&#x201C;&#x5DF4;&#x9ECE;&#x7684;&#x9996;&#x90FD;&#x662F;...&#x201D;&#xFF09;&#x65F6;&#xFF0C;&#x5B83;&#x4F9D;&#x7136;&#x9700;&#x8981;&#x52A8;&#x7528;&#x6602;&#x8D35;&#x7684;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF08;Attention&#xFF09;&#x548C;&#x5168;&#x8FDE;&#x63A5;&#x5C42;&#xFF08;FFN&#xFF09;&#x53BB;&#x8FDB;&#x884C;&#x590D;&#x6742;&#x7684;&#x77E9;&#x9635;&#x8FD0;&#x7B97;&#xFF0C;&#x4ECE;&#x6743;&#x91CD;&#x4E2D;&#x201C;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x201D;&#x51FA;&#x7B54;&#x6848;&#x3002;</li>
<li><strong>&#x5B58;&#x50A8;&#x538B;&#x529B;&#xFF1A;</strong> &#x4E3A;&#x4E86;&#x8BB0;&#x4F4F;&#x6D77;&#x91CF;&#x4E8B;&#x5B9E;&#xFF0C;&#x6A21;&#x578B;&#x5FC5;&#x987B;&#x4E0D;&#x65AD;&#x589E;&#x52A0;&#x53C2;&#x6570;&#x91CF;&#x3002;&#x8FD9;&#x5BFC;&#x81F4;&#x663E;&#x5B58;&#xFF08;HBM&#xFF09;&#x9700;&#x6C42;&#x6FC0;&#x589E;&#xFF0C;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x6781;&#x9AD8;&#x3002;</li>
</ul>
<p><strong>Engram &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x4E2A;  &#x590D;&#x6742;&#x5EA6;&#x7684;&#x67E5;&#x627E;&#x8868;&#x3002;&#x6A21;&#x578B;&#x5728;&#x5904;&#x7406;&#x6587;&#x672C;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x54C8;&#x5E0C;&#xFF08;Hashing&#xFF09;&#x76F4;&#x63A5;&#x4ECE;&#x4E00;&#x4E2A;&#x6D77;&#x91CF;&#x7684; N-gram &#x5D4C;&#x5165;&#x8868;&#x4E2D;&#x201C;&#x63D0;&#x53D6;&#x201D;&#x76F8;&#x5173;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x7ECF;&#x8FC7;&#x5C42;&#x5C42;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x7684;&#x91CD;&#x5EA6;&#x8BA1;&#x7B97;&#x3002;</p>
<hr>
<h3 id="2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h3>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x4E14;&#x662F;&#x76EE;&#x524D;&#x5927;&#x6A21;&#x578B;&#x8FDB;&#x4E00;&#x6B65;&#x6269;&#x5C55;&#xFF08;Scaling&#xFF09;&#x7684;&#x5934;&#x53F7;&#x74F6;&#x9888;&#x3002;</strong></p>
<ul>
<li><strong>&#x673A;&#x68B0;&#x8BB0;&#x5FC6; vs. &#x903B;&#x8F91;&#x63A8;&#x7406;&#xFF1A;</strong> &#x7814;&#x7A76;&#x53D1;&#x73B0;&#xFF0C;&#x6A21;&#x578B;&#x7684;&#x524D;&#x51E0;&#x5C42;&#x5F80;&#x5F80;&#x5728;&#x505A;&#x201C;&#x4F4E;&#x7EA7;&#x201D;&#x7684;&#x6A21;&#x5F0F;&#x8BC6;&#x522B;&#x548C;&#x4E8B;&#x5B9E;&#x63D0;&#x53D6;&#xFF0C;&#x540E;&#x51E0;&#x5C42;&#x624D;&#x5728;&#x505A;&#x771F;&#x6B63;&#x7684;&#x201C;&#x601D;&#x8003;&#x201D;&#x3002;&#x628A;&#x4E8B;&#x5B9E;&#x548C;&#x903B;&#x8F91;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#x5904;&#x7406;&#xFF0C;&#x5BFC;&#x81F4;&#x795E;&#x7ECF;&#x5143;&#x7684;&#x6709;&#x6548;&#x6DF1;&#x5EA6;&#x88AB;&#x6D6A;&#x8D39;&#x4E86;&#x3002;</li>
<li><strong>&#x786C;&#x4EF6;&#x74F6;&#x9888;&#xFF1A;</strong> GPU &#x7684;&#x663E;&#x5B58;&#xFF08;HBM&#xFF09;&#x8D35;&#x4E14;&#x7A00;&#x7F3A;&#xFF0C;&#x4F46;&#x5185;&#x5B58;&#xFF08;DRAM&#xFF09;&#x548C;&#x786C;&#x76D8;&#xFF08;NVMe&#xFF09;&#x76F8;&#x5BF9;&#x4FBF;&#x5B9C;&#x3002;&#x5982;&#x679C;&#x80FD;&#x628A;&#x201C;&#x77E5;&#x8BC6;&#x201D;&#x4ECE; GPU &#x663E;&#x5B58;&#x91CC;&#x5265;&#x79BB;&#x51FA;&#x6765;&#xFF0C;&#x653E;&#x5230; CPU &#x5185;&#x5B58;&#x91CC;&#x968F;&#x7528;&#x968F;&#x53D6;&#xFF0C;AI &#x7684;&#x6210;&#x672C;&#x5C06;&#x5927;&#x5E45;&#x4E0B;&#x964D;&#x3002;</li>
</ul>
<hr>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h3>
<p>&#x5176;&#x5B9E;&#x201C;&#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x201D;&#x6216;&#x201C;&#x5916;&#x90E8;&#x5B58;&#x50A8;&#x201D;&#x7684;&#x6982;&#x5FF5;&#x4E00;&#x76F4;&#x6709;&#xFF08;&#x6BD4;&#x5982; RAG&#x3001;KNN-LM&#xFF09;&#xFF0C;&#x4F46; Engram &#x89E3;&#x51B3;&#x5F97;&#x66F4;&#x5E95;&#x5C42;&#x3001;&#x66F4;&#x9AD8;&#x6548;&#xFF0C;&#x73B0;&#x5728;&#x7206;&#x53D1;&#x4E3B;&#x8981;&#x6709;&#x4E09;&#x4E2A;&#x539F;&#x56E0;&#xFF1A;</p>
<ol>
<li><strong>MoE &#x6280;&#x672F;&#x7684;&#x6210;&#x719F;&#xFF1A;</strong> &#x73B0;&#x5728;&#x7684;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x901A;&#x8FC7;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;&#xFF08;MoE&#xFF09;&#x5B9E;&#x73B0;&#x4E86;&#x201C;&#x6761;&#x4EF6;&#x8BA1;&#x7B97;&#x201D;&#xFF08;&#x53EA;&#x6FC0;&#x6D3B;&#x90E8;&#x5206;&#x795E;&#x7ECF;&#x5143;&#xFF09;&#x3002;DeepSeek &#x8BA4;&#x4E3A;&#x9664;&#x4E86;&#x8BA1;&#x7B97;&#x53EF;&#x4EE5;&#x201C;&#x7A00;&#x758F;&#x5316;&#x201D;&#xFF0C;<strong>&#x5B58;&#x50A8;&#x4E5F;&#x5E94;&#x8BE5;&#x201C;&#x7A00;&#x758F;&#x5316;&#x201D;</strong>&#x3002;</li>
<li><strong>PCIe &#x5E26;&#x5BBD;&#x7684;&#x8FDB;&#x6B65;&#xFF1A;</strong> &#x8FC7;&#x53BB;&#x901A;&#x8FC7; CPU &#x5185;&#x5B58;&#x8BFB;&#x53D6;&#x6570;&#x636E;&#x592A;&#x6162;&#x3002;&#x4F46; Engram &#x91C7;&#x7528;&#x4E86;<strong>&#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;</strong>&#x548C;<strong>&#x5F02;&#x6B65;&#x9884;&#x53D6;</strong>&#x6280;&#x672F;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x6A21;&#x578B;&#x8BA1;&#x7B97;&#x7684;&#x540C;&#x65F6;&#x628A;&#x77E5;&#x8BC6;&#x4ECE;&#x5185;&#x5B58;&#x62C9;&#x5230; GPU&#xFF0C;&#x51E0;&#x4E4E;&#x96F6;&#x5EF6;&#x8FDF;&#x3002;</li>
<li><strong>&#x5927;&#x6A21;&#x578B; Scaling Law &#x7684;&#x74F6;&#x9888;&#xFF1A;</strong> &#x76F2;&#x76EE;&#x5806;&#x53C2;&#x6570;&#x5DF2;&#x7ECF;&#x8FB9;&#x9645;&#x6548;&#x5E94;&#x9012;&#x51CF;&#x4E86;&#x3002;DeepSeek &#x53D1;&#x73B0;&#x4E86;&#x4E00;&#x79CD;&#x65B0;&#x7684; <strong>U &#x578B;&#x6BD4;&#x4F8B;&#x5B9A;&#x5F8B;&#xFF08;U-shaped scaling law&#xFF09;</strong>&#xFF1A;&#x5C06; 20%-25% &#x7684;&#x53C2;&#x6570;&#x5206;&#x914D;&#x7ED9; Engram&#xFF08;&#x5B58;&#x50A8;&#xFF09;&#xFF0C;&#x5269;&#x4E0B;&#x7684;&#x7ED9;&#x8BA1;&#x7B97;&#xFF0C;&#x6027;&#x80FD;&#x8FDC;&#x597D;&#x4E8E;&#x7EAF;&#x8BA1;&#x7B97;&#x6A21;&#x578B;&#x3002;</li>
</ol>
<hr>
<h3 id="4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h3>
<p>Engram &#x7684;&#x67B6;&#x6784;&#x5305;&#x542B;&#x51E0;&#x4E2A;&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#xFF1A;</p>
<ul>
<li><strong>Tokenizer &#x538B;&#x7F29;&#xFF1A;</strong> &#x628A;&#x610F;&#x4E49;&#x76F8;&#x8FD1;&#x7684;&#x8BCD;&#x5408;&#x5E76;&#xFF08;&#x6BD4;&#x5982; &quot;Hello&quot; &#x548C; &quot;hello&quot;&#xFF09;&#xFF0C;&#x51CF;&#x5C11;&#x67E5;&#x627E;&#x8868;&#x7684;&#x5197;&#x4F59;&#x3002;</li>
<li><strong>&#x591A;&#x5934;&#x54C8;&#x5E0C;&#xFF08;Multi-Head Hashing&#xFF09;&#xFF1A;</strong> &#x7C7B;&#x4F3C; Attention &#x7684;&#x591A;&#x5934;&#x673A;&#x5236;&#xFF0C;&#x901A;&#x8FC7;&#x591A;&#x4E2A;&#x54C8;&#x5E0C;&#x51FD;&#x6570;&#x5904;&#x7406;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x51CF;&#x5C11;&#x51B2;&#x7A81;&#xFF0C;&#x786E;&#x4FDD;&#x5B58;&#x50A8;&#x7684;&#x77E5;&#x8BC6;&#x80FD;&#x88AB;&#x7CBE;&#x51C6;&#x5B9A;&#x4F4D;&#x3002;</li>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x611F;&#x77E5;&#x95E8;&#x63A7;&#xFF08;Context-Aware Gating&#xFF09;&#xFF1A;</strong> &#x8FD9;&#x662F;&#x6700;&#x5173;&#x952E;&#x7684;&#x4E00;&#x6B65;&#x3002;&#x67E5;&#x51FA;&#x6765;&#x7684;&#x77E5;&#x8BC6;&#x4E0D;&#x662F;&#x76F2;&#x76EE;&#x76F8;&#x52A0;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x201C;&#x95F8;&#x95E8;&#x201D;&#x6839;&#x636E;&#x5F53;&#x524D;&#x8BED;&#x5883;&#x51B3;&#x5B9A;&#x5438;&#x53D6;&#x591A;&#x5C11;&#x3002;&#x5982;&#x679C;&#x67E5;&#x51FA;&#x7684;&#x77E5;&#x8BC6;&#x548C;&#x5F53;&#x524D;&#x903B;&#x8F91;&#x4E0D;&#x7B26;&#xFF0C;&#x6A21;&#x578B;&#x4F1A;&#x9009;&#x62E9;&#x5FFD;&#x7565;&#x3002;</li>
<li><strong>&#x89E3;&#x8026;&#x5B58;&#x50A8;&#xFF1A;</strong> &#x5DE8;&#x5927;&#x7684;&#x77E5;&#x8BC6;&#x5E93;&#xFF08;&#x53EF;&#x80FD;&#x8FBE; 1000 &#x4EBF;&#x53C2;&#x6570;&#xFF09;&#x53EF;&#x4EE5;&#x5B58;&#x5728;&#x5EC9;&#x4EF7;&#x7684; CPU &#x5185;&#x5B58;&#x4E2D;&#xFF0C;&#x53EA;&#x6709;&#x7528;&#x5230;&#x7684;&#x90A3;&#x4E00;&#x5C0F;&#x90E8;&#x5206;&#x4F1A;&#x5728;&#x63A8;&#x7406;&#x65F6;&#x901A;&#x8FC7; PCIe &#x5FEB;&#x901F;&#x62C9;&#x53D6;&#x3002;</li>
</ul>
<hr>
<h3 id="5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h3>
<p>Engram &#x662F;&#x76EE;&#x524D;&#x6700;&#x524D;&#x6CBF;&#x7684;&#x65B9;&#x5411;&#x4E4B;&#x4E00;&#xFF0C;&#x4F46;&#x786E;&#x5B9E;&#x5B58;&#x5728;&#x5176;&#x4ED6;&#x7ADE;&#x4E89;&#x8DEF;&#x7EBF;&#xFF1A;</p>
<ul>
<li><strong>RAG&#xFF08;&#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x751F;&#x6210;&#xFF09;&#xFF1A;</strong> &#x8FD9;&#x79CD;&#x662F;&#x5728;&#x6A21;&#x578B;&#x5916;&#x9762;&#x6302;&#x4E2A;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x3002;&#x4F18;&#x70B9;&#x662F;&#x77E5;&#x8BC6;&#x53EF;&#x4EE5;&#x5B9E;&#x65F6;&#x66F4;&#x65B0;&#xFF0C;&#x7F3A;&#x70B9;&#x662F;&#x901F;&#x5EA6;&#x6162;&#x3001;&#x63A8;&#x7406;&#x6210;&#x672C;&#x9AD8;&#xFF0C;&#x4E14;&#x65E0;&#x6CD5;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x5E95;&#x5EA7;&#x7684;&#x6548;&#x7387;&#x3002;</li>
<li><strong>K-NN LM&#xFF1A;</strong> &#x7C7B;&#x4F3C;&#x601D;&#x8DEF;&#xFF0C;&#x4F46;&#x901A;&#x5E38;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x5DE8;&#x5927;&#xFF0C;&#x96BE;&#x4EE5;&#x5728;&#x8D85;&#x5927;&#x89C4;&#x6A21;&#x9884;&#x8BAD;&#x7EC3;&#x4E2D;&#x4F7F;&#x7528;&#x3002;</li>
<li><strong>Infini-transformer&#xFF1A;</strong> &#x8C37;&#x6B4C;&#x63D0;&#x51FA;&#x7684;&#x65B9;&#x6848;&#xFF0C;&#x8BD5;&#x56FE;&#x901A;&#x8FC7;&#x7279;&#x6B8A;&#x7684;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x5B9E;&#x73B0;&#x65E0;&#x9650;&#x957F;&#x8BB0;&#x5FC6;&#xFF0C;&#x4F46;&#x5DE5;&#x7A0B;&#x5B9E;&#x73B0;&#x96BE;&#x5EA6;&#x6781;&#x5927;&#x3002;</li>
</ul>
<p><strong>Engram &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;&#x201C;&#x5DE5;&#x7A0B;&#x7F8E;&#x5B66;&#x201D;&#xFF1A;</strong> &#x5B83;&#x975E;&#x5E38;&#x7B26;&#x5408;&#x786C;&#x4EF6;&#xFF08;CPU/GPU &#x5206;&#x5C42;&#x5B58;&#x50A8;&#xFF09;&#x7684;&#x73B0;&#x72B6;&#xFF0C;&#x4E14;&#x80FD;&#x76F4;&#x63A5;&#x96C6;&#x6210;&#x8FDB;&#x9884;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x3002;</p>
<p>&#x8981;&#x6DF1;&#x5165;&#x7406;&#x89E3; DeepSeek Engram&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x628A;&#x8FD9;&#x4E9B;&#x786C;&#x6838;&#x7684;&#x6280;&#x672F;&#x540D;&#x8BCD;&#x62C6;&#x89E3;&#x6210;&#x76F4;&#x89C2;&#x7684;&#x6A21;&#x578B;&#x3002;Engram &#x7684;&#x6838;&#x5FC3;&#x903B;&#x8F91;&#x5176;&#x5B9E;&#x5C31;&#x662F;&#xFF1A;<strong>&#x65E2;&#x7136;&#x6A21;&#x578B;&#x8BB0;&#x4E0D;&#x4F4F;&#x90A3;&#x4E48;&#x591A;&#x4E1C;&#x897F;&#xFF0C;&#x90A3;&#x5C31;&#x7ED9;&#x5B83;&#x4E00;&#x5957;&#x9AD8;&#x6548;&#x7684;&#x201C;&#x67E5;&#x8BCD;&#x5178;&#x201D;&#x7CFB;&#x7EDF;&#x3002;</strong></p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;</h2>
<hr>
<h3 id="1. &#x5B58;&#x50A8;&#x201C;&#x7A00;&#x758F;&#x5316;&#x201D; (Storage Sparsity)"><a href="#1. &#x5B58;&#x50A8;&#x201C;&#x7A00;&#x758F;&#x5316;&#x201D; (Storage Sparsity)"></a>1. &#x5B58;&#x50A8;&#x201C;&#x7A00;&#x758F;&#x5316;&#x201D; (Storage Sparsity)</h3>
<p>&#x8FD9;&#x662F;&#x76F8;&#x5BF9;&#x4E8E;**&#x8BA1;&#x7B97;&#x7A00;&#x758F;&#x5316;&#xFF08;MoE&#xFF09;**&#x63D0;&#x51FA;&#x7684;&#x6982;&#x5FF5;&#x3002;</p>
<ul>
<li><strong>&#x4F20;&#x7EDF;&#x6A21;&#x578B;&#xFF08;&#x7A20;&#x5BC6;&#xFF09;&#xFF1A;</strong> &#x6BCF;&#x5904;&#x7406;&#x4E00;&#x4E2A;&#x5B57;&#xFF0C;&#x90FD;&#x8981;&#x52A8;&#x7528;&#x5168;&#x8EAB;&#x6240;&#x6709;&#x795E;&#x7ECF;&#x5143;&#xFF08;&#x6743;&#x91CD;&#xFF09;&#xFF0C;&#x8FD9;&#x53EB;&#x201C;&#x5168;&#x91CF;&#x8BA1;&#x7B97;&#x201D;&#x3002;</li>
<li><strong>MoE &#x6A21;&#x578B;&#xFF08;&#x8BA1;&#x7B97;&#x7A00;&#x758F;&#xFF09;&#xFF1A;</strong> &#x5904;&#x7406;&#x4E00;&#x4E2A;&#x5B57;&#x65F6;&#xFF0C;&#x53EA;&#x6FC0;&#x6D3B;&#x4E00;&#x90E8;&#x5206;&#x201C;&#x4E13;&#x5BB6;&#x201D;&#x795E;&#x7ECF;&#x5143;&#x3002;&#x8FD9;&#x51CF;&#x5C11;&#x4E86;&#x8BA1;&#x7B97;&#x91CF;&#xFF0C;&#x4F46;&#x6240;&#x6709;&#x4E13;&#x5BB6;&#x7684;&#x77E5;&#x8BC6;&#x4F9D;&#x7136;&#x5B58;&#x5728;&#x663E;&#x5B58;&#x91CC;&#x3002;</li>
<li><strong>Engram&#xFF08;&#x5B58;&#x50A8;&#x7A00;&#x758F;&#xFF09;&#xFF1A;</strong> &#x65E2;&#x7136;&#x6A21;&#x578B;&#x4E2D;&#x5F88;&#x591A;&#x53C2;&#x6570;&#x53EA;&#x662F;&#x4E3A;&#x4E86;&#x8BB0;&#x4F4F;&#x201C;&#x5468;&#x6770;&#x4F26;&#x662F;&#x6B4C;&#x624B;&#x201D;&#x8FD9;&#x79CD;&#x6B7B;&#x77E5;&#x8BC6;&#xFF0C;&#x90A3;&#x5E72;&#x8106;&#x628A;&#x8FD9;&#x4E9B;&#x77E5;&#x8BC6;&#x5B58;&#x8FDB;&#x4E00;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x201C;&#x5916;&#x6302;&#x67E5;&#x627E;&#x8868;&#x201D;&#x91CC;&#x3002;&#x6A21;&#x578B;&#x5728;&#x63A8;&#x7406;&#x65F6;&#xFF0C;&#x53EA;&#x4ECE;&#x8868;&#x4E2D;&#x63D0;&#x53D6;&#x76F8;&#x5173;&#x7684;<strong>&#x4E00;&#x5C0F;&#x90E8;&#x5206;</strong>&#x5411;&#x91CF;&#xFF0C;&#x5269;&#x4E0B;&#x7684; 99.9% &#x77E5;&#x8BC6;&#x90FD;&#x8EBA;&#x5728;&#x5185;&#x5B58;&#x91CC;&#x4E0D;&#x52A8;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x4EE5;&#x524D;&#x662F;&#x8003;&#x8BD5;&#x524D;&#x628A;&#x6574;&#x672C;&#x4E66;&#x80CC;&#x4E0B;&#x6765;&#xFF08;&#x7A20;&#x5BC6;&#xFF09;&#xFF0C;&#x73B0;&#x5728;&#x662F;&#x5141;&#x8BB8;&#x4F60;&#x5E26;&#x4E00;&#x672C;&#x5DE8;&#x5927;&#x7684;&#x5B57;&#x5178;&#x8FDB;&#x8003;&#x573A;&#xFF0C;&#x4F46;&#x4F60;&#x6BCF;&#x6B21;&#x53EA;&#x7FFB;&#x5F00;&#x90A3;&#x4E00;&#x9875;&#xFF08;&#x7A00;&#x758F;&#xFF09;&#x3002;</li>
</ul>
<h3 id="2. &#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;&#x548C;&#x5F02;&#x6B65;&#x9884;&#x53D6; (Deterministic Addressing &amp; Asynchronous Prefetching)"><a href="#2. &#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;&#x548C;&#x5F02;&#x6B65;&#x9884;&#x53D6; (Deterministic Addressing &amp; Asynchronous Prefetching)"></a>2. &#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;&#x548C;&#x5F02;&#x6B65;&#x9884;&#x53D6; (Deterministic Addressing &amp; Asynchronous Prefetching)</h3>
<p>&#x8FD9;&#x662F;&#x89E3;&#x51B3;**&#x201C;&#x7531;&#x4E8E;&#x67E5;&#x627E;&#x8868;&#x592A;&#x5927;&#x5BFC;&#x81F4;&#x53D8;&#x6162;&#x201D;**&#x7684;&#x5DE5;&#x7A0B;&#x65B9;&#x6848;&#x3002;</p>
<ul>
<li><strong>&#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;&#xFF1A;</strong> Engram &#x4F7F;&#x7528;&#x56FA;&#x5B9A;&#x7684;&#x54C8;&#x5E0C;&#x51FD;&#x6570;&#xFF08;Hash Function&#xFF09;&#x6765;&#x8BA1;&#x7B97;&#x77E5;&#x8BC6;&#x5B58;&#x653E;&#x5728;&#x54EA;&#x3002;&#x6A21;&#x578B;&#x770B;&#x5230;&#x201C;&#x82F9;&#x679C;&#x201D;&#x4E24;&#x4E2A;&#x5B57;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x53BB;&#x641C;&#x7D22;&#xFF0C;&#x800C;&#x662F;&#x76F4;&#x63A5;&#x6839;&#x636E;&#x516C;&#x5F0F;&#x8BA1;&#x7B97;&#x51FA;&#x5730;&#x5740;&#x3002;&#x590D;&#x6742;&#x5EA6;&#x662F; &#x3002;</li>
<li><strong>&#x5F02;&#x6B65;&#x9884;&#x53D6;&#xFF1A;</strong> &#x5185;&#x5B58;&#xFF08;CPU&#xFF09;&#x8BFB;&#x53D6;&#x901F;&#x5EA6;&#x8FDC;&#x6162;&#x4E8E;&#x663E;&#x5B58;&#xFF08;GPU&#xFF09;&#x3002;&#x4E3A;&#x4E86;&#x4E0D;&#x8BA9; GPU &#x95F2;&#x7740;&#x7B49;&#x6570;&#x636E;&#xFF0C;Engram &#x91C7;&#x7528;&#x4E86;&#x201C;&#x63D0;&#x524D;&#x4E0B;&#x5355;&#x201D;&#x7B56;&#x7565;&#x3002;</li>
<li>&#x5F53;&#x6A21;&#x578B;&#x5728;&#x8BA1;&#x7B97;&#x7B2C; 1 &#x5C42;&#x65F6;&#xFF0C;&#x5B83;&#x5DF2;&#x7ECF;&#x7B97;&#x597D;&#x4E86;&#x7B2C; 2 &#x5C42;&#x9700;&#x8981;&#x7684;&#x77E5;&#x8BC6;&#x5730;&#x5740;&#x3002;</li>
<li>&#x5B83;&#x901A;&#x8FC7; PCIe &#x603B;&#x7EBF;<strong>&#x5F02;&#x6B65;</strong>&#x5730;&#x628A;&#x6570;&#x636E;&#x4ECE;&#x5185;&#x5B58;&#x642C;&#x5F80; GPU&#x3002;</li>
<li>&#x7B49;&#x7B2C; 2 &#x5C42;&#x5F00;&#x7B97;&#x65F6;&#xFF0C;&#x6570;&#x636E;&#x5DF2;&#x7ECF;&#x5728;&#x90A3;&#x7B49;&#x7740;&#x4E86;&#xFF0C;&#x51E0;&#x4E4E;&#x5B9E;&#x73B0;&#x4E86;&#x201C;&#x96F6;&#x6210;&#x672C;&#x201D;&#x67E5;&#x8BE2;&#x3002;</li>
</ul>
<h3 id="3. U &#x578B;&#x6BD4;&#x4F8B;&#x5B9A;&#x5F8B; (U-shaped Scaling Law)"><a href="#3. U &#x578B;&#x6BD4;&#x4F8B;&#x5B9A;&#x5F8B; (U-shaped Scaling Law)"></a>3. U &#x578B;&#x6BD4;&#x4F8B;&#x5B9A;&#x5F8B; (U-shaped Scaling Law)</h3>
<p>&#x8FD9;&#x662F;&#x8BE5;&#x8BBA;&#x6587;&#x6700;&#x91CD;&#x5927;&#x7684;&#x7406;&#x8BBA;&#x53D1;&#x73B0;&#x3002;DeepSeek &#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x4E86;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x4E0E;&#x53C2;&#x6570;&#x5206;&#x914D;&#x7684;&#x5173;&#x7CFB;&#x3002;</p>
<ul>
<li><strong>&#x4F20;&#x7EDF;&#x8BA4;&#x8BC6;&#xFF1A;</strong> &#x589E;&#x52A0;&#x53C2;&#x6570;&#x5C31;&#x80FD;&#x53D8;&#x5F3A;&#xFF0C;&#x66F2;&#x7EBF;&#x662F;&#x5355;&#x8C03;&#x4E0B;&#x964D;&#x7684;&#x3002;</li>
<li><strong>Engram &#x7684;&#x53D1;&#x73B0;&#xFF1A;</strong> &#x5728;<strong>&#x56FA;&#x5B9A;&#x603B;&#x53C2;&#x6570;</strong>&#xFF08;&#x8BA1;&#x7B97;&#x53C2;&#x6570; + &#x5B58;&#x50A8;&#x53C2;&#x6570;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5982;&#x679C;&#x628A;&#x5B58;&#x50A8;&#x53C2;&#x6570;&#x6BD4;&#x4F8B;&#x4ECE; 0% &#x9010;&#x6E10;&#x589E;&#x52A0;&#xFF0C;&#x6A21;&#x578B;&#x635F;&#x5931;&#xFF08;Loss&#xFF09;&#x4F1A;&#x5148;&#x4E0B;&#x964D;&#x540E;&#x4E0A;&#x5347;&#x3002;</li>
<li><strong>&#x7ED3;&#x8BBA;&#xFF1A;</strong> &#x5B58;&#x5728;&#x4E00;&#x4E2A;<strong>&#x6700;&#x4F18;&#x914D;&#x6BD4;</strong>&#xFF08;&#x901A;&#x5E38;&#x5728; 20%-25% &#x5DE6;&#x53F3;&#xFF09;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5982;&#x679C;&#x4F60;&#x6709; 100 &#x4EBF;&#x53C2;&#x6570;&#x7684;&#x9884;&#x7B97;&#xFF0C;&#x5168;&#x7ED9;&#x8BA1;&#x7B97;&#xFF08;&#x6A21;&#x578B;&#x6743;&#x91CD;&#xFF09;&#x4E0D;&#x662F;&#x6700;&#x4F18;&#x7684;&#xFF1B;&#x7ED9; 80 &#x4EBF;&#x8BA1;&#x7B97;&#xFF0C;20 &#x4EBF;&#x505A; Engram &#x5B58;&#x50A8;&#xFF0C;&#x6548;&#x679C;&#x6700;&#x597D;&#x3002;&#x8FD9;&#x4E2A;&#x6700;&#x4F18;&#x70B9;&#x7684;&#x51F9;&#x9677;&#x5904;&#x5C31;&#x662F;&#x201C;U &#x578B;&#x201D;&#x7684;&#x5E95;&#x90E8;&#x3002;</li>
</ul>
<h3 id="4. &#x591A;&#x5934;&#x54C8;&#x5E0C; (Multi-Head Hashing)"><a href="#4. &#x591A;&#x5934;&#x54C8;&#x5E0C; (Multi-Head Hashing)"></a>4. &#x591A;&#x5934;&#x54C8;&#x5E0C; (Multi-Head Hashing)</h3>
<p>&#x8FD9;&#x4E2A;&#x7075;&#x611F;&#x6765;&#x6E90;&#x4E8E; Transformer &#x7684;&#x201C;&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x201D;&#x3002;</p>
<ul>
<li>
<p><strong>&#x95EE;&#x9898;&#xFF1A;</strong> &#x54C8;&#x5E0C;&#x4F1A;&#x6709;&#x201C;&#x51B2;&#x7A81;&#x201D;&#x3002;&#x6BD4;&#x5982;&#x201C;&#x82F9;&#x679C;&#x201D;&#x65E2;&#x662F;&#x6C34;&#x679C;&#x4E5F;&#x662F;&#x516C;&#x53F8;&#xFF0C;&#x5982;&#x679C;&#x53EA;&#x7528;&#x4E00;&#x4E2A;&#x54C8;&#x5E0C;&#x51FD;&#x6570;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x628A;&#x8FD9;&#x4E24;&#x4E2A;&#x542B;&#x4E49;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#x3002;</p>
</li>
<li>
<p><strong>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF1A;</strong> &#x50CF; Attention &#x6709; 8 &#x4E2A;&#x5934;&#x4E00;&#x6837;&#xFF0C;Engram &#x4E5F;&#x7528;&#x591A;&#x4E2A;&#x54C8;&#x5E0C;&#x51FD;&#x6570;&#x3002;</p>
</li>
<li>
<p>&#x5934; 1 &#x53EF;&#x80FD;&#x5173;&#x6CE8;&#x8BCD;&#x4E49;&#x3002;</p>
</li>
<li>
<p>&#x5934; 2 &#x53EF;&#x80FD;&#x5173;&#x6CE8;&#x8BED;&#x6CD5;&#x3002;</p>
</li>
<li>
<p>&#x5934; 3 &#x53EF;&#x80FD;&#x5173;&#x6CE8;&#x4E0A;&#x4E0B;&#x6587;&#x5173;&#x8054;&#x3002;</p>
</li>
<li>
<p><strong>&#x6548;&#x679C;&#xFF1A;</strong> &#x901A;&#x8FC7;&#x591A;&#x4E2A;&#x7EF4;&#x5EA6;&#x8FDB;&#x884C;&#x67E5;&#x8BE2;&#xFF0C;&#x6A21;&#x578B;&#x80FD;&#x66F4;&#x7CBE;&#x51C6;&#x5730;&#x4ECE;&#x6D77;&#x91CF;&#x8868;&#x91CC;&#x52FE;&#x52D2;&#x51FA;&#x5B83;&#x73B0;&#x5728;&#x6700;&#x9700;&#x8981;&#x7684;&#x90A3;&#x90E8;&#x5206;&#x77E5;&#x8BC6;&#xFF0C;&#x6781;&#x5927;&#x5730;&#x51CF;&#x5C11;&#x4E86;&#x67E5;&#x8BE2;&#x8BEF;&#x5DEE;&#x3002;</p>
</li>
</ul>
<h3 id="5. &#x4E0A;&#x4E0B;&#x6587;&#x611F;&#x77E5;&#x95E8;&#x63A7; (Context-Aware Gating)"><a href="#5. &#x4E0A;&#x4E0B;&#x6587;&#x611F;&#x77E5;&#x95E8;&#x63A7; (Context-Aware Gating)"></a>5. &#x4E0A;&#x4E0B;&#x6587;&#x611F;&#x77E5;&#x95E8;&#x63A7; (Context-Aware Gating)</h3>
<p>&#x8FD9;&#x662F;&#x4E3A;&#x4E86;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x201C;&#x67E5;&#x5B57;&#x5178;&#x67E5;&#x50BB;&#x4E86;&#x201D;&#x3002;</p>
<ul>
<li>
<p><strong>&#x903B;&#x8F91;&#xFF1A;</strong> &#x5E76;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x4ECE; Engram &#x91CC;&#x67E5;&#x51FA;&#x6765;&#x7684;&#x4E1C;&#x897F;&#x90FD;&#x662F;&#x5BF9;&#x7684;&#x6216;&#x6709;&#x7528;&#x7684;&#x3002;</p>
</li>
<li>
<p><strong>&#x673A;&#x5236;&#xFF1A;</strong> Engram &#x67E5;&#x51FA;&#x6765;&#x7684;&#x5411;&#x91CF;&#x4F1A;&#x5148;&#x7ECF;&#x8FC7;&#x4E00;&#x4E2A;&#x201C;&#x95E8;&#x201D;&#xFF08;Gating&#xFF09;&#x3002;&#x8FD9;&#x4E2A;&#x95E8;&#x4F1A;&#x7ED3;&#x5408;&#x5F53;&#x524D;&#x53E5;&#x5B50;&#x7684;&#x8BED;&#x5883;&#xFF08;Context&#xFF09;&#x7B97;&#x51FA;&#x4E00;&#x4E2A;&#x6743;&#x91CD;&#x7CFB;&#x6570;&#xFF08;0 &#x5230; 1 &#x4E4B;&#x95F4;&#xFF09;&#x3002;</p>
</li>
<li>
<p><strong>&#x5E94;&#x7528;&#x573A;&#x666F;&#xFF1A;</strong></p>
</li>
<li>
<p>&#x5982;&#x679C;&#x67E5;&#x5230;&#x7684;&#x5185;&#x5BB9;&#x4E0E;&#x8BED;&#x5883;&#x6781;&#x5EA6;&#x5951;&#x5408;&#xFF0C;&#x6743;&#x91CD;&#x63A5;&#x8FD1; 1&#xFF0C;&#x6A21;&#x578B;&#x4F1A;&#x5927;&#x91CF;&#x5438;&#x6536;&#x8FD9;&#x4E2A;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#x3002;</p>
</li>
<li>
<p>&#x5982;&#x679C;&#x67E5;&#x5230;&#x7684;&#x5185;&#x5BB9;&#x98CE;&#x9A6C;&#x725B;&#x4E0D;&#x76F8;&#x53CA;&#xFF0C;&#x95E8;&#x63A7;&#x4F1A;&#x628A;&#x5B83;&#x8BBE;&#x4E3A;&#x63A5;&#x8FD1; 0&#xFF0C;&#x6A21;&#x578B;&#x4F9D;&#x7136;&#x9760;&#x81EA;&#x5DF1;&#x7684;&#x903B;&#x8F91;&#x63A8;&#x7406;&#x3002;</p>
</li>
<li>
<p><strong>&#x6570;&#x5B66;&#x8868;&#x8FBE;&#xFF1A;</strong> &#x6700;&#x7EC8;&#x8F93;&#x51FA; &#x3002;</p>
</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Engram &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x77E5;&#x8BC6;&#x7684;&#x964D;&#x672C;&#x589E;&#x6548;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>&#x5B58;&#x50A8;&#x7A00;&#x758F;&#x5316;</strong>&#x8BA9;&#x77E5;&#x8BC6;&#x4E0D;&#x518D;&#x5360;&#x7528;&#x6602;&#x8D35;&#x7684; GPU &#x795E;&#x7ECF;&#x5143;&#x3002;</li>
<li><strong>&#x591A;&#x5934;&#x54C8;&#x5E0C;&#x548C;&#x786E;&#x5B9A;&#x6027;&#x5BFB;&#x5740;</strong>&#x8BA9;&#x627E;&#x77E5;&#x8BC6;&#x53D8;&#x5F97;&#x6781;&#x5FEB;&#x3002;</li>
<li><strong>&#x95E8;&#x63A7;</strong>&#x786E;&#x4FDD;&#x77E5;&#x8BC6;&#x7528;&#x5F97;&#x5BF9;&#x3002;</li>
<li><strong>U &#x578B;&#x5B9A;&#x5F8B;</strong>&#x6307;&#x5BFC;&#x6211;&#x4EEC;&#x5982;&#x4F55;&#x79D1;&#x5B66;&#x5730;&#x5206;&#x914D;&#x5927;&#x8111;&#x5BB9;&#x91CF;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://github.com/deepseek-ai/Engram">&#x9879;&#x76EE;&#x5730;&#x5740;</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-19</em></p>
`,E=[{level:2,title:"Engram 论文概述",children:[{level:3,title:"1. Engram 解决了什么问题？",children:[]},{level:3,title:"2. 这个问题真实存在吗？",children:[]},{level:3,title:"3. 为什么现在才有人去解决？",children:[]},{level:3,title:"4. 它是如何解决的？",children:[]},{level:3,title:"5. 还有更好的解决方案吗？",children:[]}]},{level:2,title:"关键词解析：",children:[{level:3,title:"1. 存储“稀疏化” (Storage Sparsity)",children:[]},{level:3,title:"2. 确定性寻址和异步预取 (Deterministic Addressing & Asynchronous Prefetching)",children:[]},{level:3,title:"3. U 型比例定律 (U-shaped Scaling Law)",children:[]},{level:3,title:"4. 多头哈希 (Multi-Head Hashing)",children:[]},{level:3,title:"5. 上下文感知门控 (Context-Aware Gating)",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
