const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2025-02-17</em></p>
<p>DeepSeek &#x56E2;&#x961F;&#x53D1;&#x5E03;&#x7684; <strong>NSA (Native Sparse Attention)</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2502.11089">Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention</a>&#x300B;&#xFF09;&#x662F;&#x957F;&#x6587;&#x672C;&#x6A21;&#x578B;&#x6548;&#x7387;&#x4F18;&#x5316;&#x7684;&#x4E00;&#x6B21;&#x91CD;&#x8981;&#x7A81;&#x7834;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;<strong>&#x539F;&#x751F;&#x53EF;&#x8BAD;&#x7EC3;&#xFF08;Natively Trainable&#xFF09;<strong>&#x4E14;</strong>&#x786C;&#x4EF6;&#x5BF9;&#x9F50;&#xFF08;Hardware-Aligned&#xFF09;<strong>&#x7684;&#x7A00;&#x758F;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x3002;&#x5B83;&#x6253;&#x7834;&#x4E86;&#x201C;&#x7A00;&#x758F;&#x6CE8;&#x610F;&#x529B;&#x53EA;&#x80FD;&#x7528;&#x4E8E;&#x63A8;&#x7406;&#x52A0;&#x901F;&#x201D;&#x7684;&#x523B;&#x677F;&#x5370;&#x8C61;&#xFF0C;&#x8BC1;&#x660E;&#x4E86;&#x5728;</strong>&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;</strong>&#x5C31;&#x5F15;&#x5165;&#x7A00;&#x758F;&#x6027;&#xFF0C;&#x4E0D;&#x4EC5;&#x80FD;&#x5927;&#x5E45;&#x964D;&#x4F4E;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#xFF0C;&#x8FD8;&#x80FD;&#x5728;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x548C;&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#x4E0A;&#x8D85;&#x8D8A;&#x5168;&#x6CE8;&#x610F;&#x529B;&#xFF08;Full Attention&#xFF09;&#x6A21;&#x578B;&#x3002;</p>
<h2 id="NSA &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#NSA &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>NSA &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x5168;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF08;Full Attention&#xFF09;&#x5728;&#x957F;&#x6587;&#x672C;&#x4E0B;&#x7684;&#x6602;&#x8D35;&#x5F00;&#x9500;&#xFF0C;&#x4EE5;&#x53CA;&#x73B0;&#x6709;&#x7A00;&#x758F;&#x65B9;&#x6CD5;&#x7684;&#x201C;&#x865A;&#x5047;&#x7E41;&#x8363;&#x201D;&#x3002;</strong></p>
<p>&#x5728; NSA &#x51FA;&#x73B0;&#x4E4B;&#x524D;&#xFF0C;&#x957F;&#x6587;&#x672C;&#x5904;&#x7406;&#x9762;&#x4E34;&#x4E24;&#x4E2A;&#x4E3B;&#x8981;&#x56F0;&#x5883;&#xFF1A;</p>
<ul>
<li><strong>&#x5168;&#x6CE8;&#x610F;&#x529B;&#x7684;&#x8BA1;&#x7B97;&#x5899;&#xFF1A;</strong> &#x6807;&#x51C6; Attention &#x7684;&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;&#x662F; $O(N^2)$&#x3002;&#x5904;&#x7406; 64k &#x751A;&#x81F3;&#x66F4;&#x957F;&#x7684;&#x5E8F;&#x5217;&#x65F6;&#xFF0C;&#x8BA1;&#x7B97;&#x91CF;&#x548C;&#x663E;&#x5B58;&#x5360;&#x7528;&#x5448;&#x4E8C;&#x6B21;&#x65B9;&#x7206;&#x70B8;&#x3002;&#x8FD9;&#x4E0D;&#x4EC5;&#x62D6;&#x6162;&#x63A8;&#x7406;&#xFF0C;&#x66F4;&#x8BA9;&#x957F;&#x5E8F;&#x5217;&#x7684;<strong>&#x8BAD;&#x7EC3;</strong>&#x53D8;&#x5F97;&#x6781;&#x5176;&#x6602;&#x8D35;&#x3002;</li>
<li><strong>&#x73B0;&#x6709;&#x7A00;&#x758F;&#x65B9;&#x6CD5;&#x7684;&#x5C40;&#x9650;&#xFF1A;</strong> &#x4E1A;&#x754C;&#x867D;&#x7136;&#x6709;&#x5F88;&#x591A;&#x7A00;&#x758F;&#x6CE8;&#x610F;&#x529B;&#x65B9;&#x6CD5;&#xFF08;&#x5982; H2O, Quest, MInference&#xFF09;&#xFF0C;&#x4F46;&#x5B83;&#x4EEC;&#x5927;&#x591A;&#x5B58;&#x5728;&#x81F4;&#x547D;&#x7F3A;&#x9677;&#xFF1A;
<ul>
<li><strong>&#x63A8;&#x7406;&#x201C;&#x7279;&#x4F9B;&#x201D;&#xFF1A;</strong> &#x5927;&#x591A;&#x6570;&#x65B9;&#x6CD5;&#x662F;&#x5728;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x5B8C;&#x540E;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x5F3A;&#x884C;&#x780D;&#x6389;&#x201C;&#x4E0D;&#x91CD;&#x8981;&#x201D;&#x7684; KV&#x3002;&#x8FD9;&#x662F;&#x4E00;&#x79CD;&#x201C;&#x4E8B;&#x540E;&#x8BF8;&#x845B;&#x4EAE;&#x201D;&#xFF0C;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x65F6;&#x6CA1;&#x89C1;&#x8FC7;&#x7A00;&#x758F;&#x6A21;&#x5F0F;&#xFF0C;&#x5BFC;&#x81F4;&#x6548;&#x679C;&#x4E0B;&#x964D;&#x3002;</li>
<li><strong>&#x96BE;&#x4EE5;&#x8BAD;&#x7EC3;&#xFF1A;</strong> &#x4E00;&#x4E9B;&#x8BD5;&#x56FE;&#x5728;&#x8BAD;&#x7EC3;&#x4E2D;&#x5F15;&#x5165;&#x7A00;&#x758F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x5982;&#x57FA;&#x4E8E;&#x805A;&#x7C7B;&#x6216;&#x54C8;&#x5E0C;&#xFF09;&#xFF0C;&#x5F80;&#x5F80;&#x5305;&#x542B;&#x4E0D;&#x53EF;&#x5BFC;&#x7684;&#x64CD;&#x4F5C;&#xFF08;&#x5982; Top-k index&#xFF09;&#xFF0C;&#x6216;&#x8005;&#x7531;&#x4E8E;&#x5185;&#x5B58;&#x8BBF;&#x95EE;&#x4E0D;&#x8FDE;&#x7EED;&#xFF0C;&#x65E0;&#x6CD5;&#x5229;&#x7528; GPU Tensor Core &#x52A0;&#x901F;&#xFF0C;&#x5BFC;&#x81F4;<strong>&#x7406;&#x8BBA;&#x4E0A;&#x8BA1;&#x7B97;&#x5C11;&#x4E86;&#xFF0C;&#x5B9E;&#x9645;&#x4E0A;&#x8DD1;&#x5F97;&#x66F4;&#x6162;</strong>&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>NSA &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x8BBE;&#x8BA1;&#x4E86;&#x4E00;&#x5957;&#x65E2;&#x80FD;<strong>&#x7AEF;&#x5230;&#x7AEF;&#x8BAD;&#x7EC3;</strong>&#xFF0C;&#x53C8;&#x80FD;**&#x5B8C;&#x7F8E;&#x5951;&#x5408;&#x786C;&#x4EF6;&#xFF08;Triton &#x4F18;&#x5316;&#xFF09;**&#x7684;&#x7A00;&#x758F;&#x67B6;&#x6784;&#x3002;&#x5B83;&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x201C;&#x5A18;&#x80CE;&#x91CC;&#x201D;&#xFF08;&#x9884;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF09;&#x5C31;&#x5B66;&#x4F1A;&#x5982;&#x4F55;&#x9AD8;&#x6548;&#x5730;&#x201C;&#x6311;&#x91CD;&#x70B9;&#x770B;&#x201D;&#xFF0C;&#x4ECE;&#x800C;&#x5728;&#x4FDD;&#x6301;&#x751A;&#x81F3;&#x8D85;&#x8D8A;&#x5168;&#x6CE8;&#x610F;&#x529B;&#x6027;&#x80FD;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x5B9E;&#x73B0;&#x6570;&#x500D;&#x7684;&#x8BAD;&#x7EC3;&#x548C;&#x63A8;&#x7406;&#x52A0;&#x901F;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x6781;&#x5176;&#x771F;&#x5B9E;&#xFF0C;&#x662F;&#x8FC8;&#x5411;&#x201C;&#x65E0;&#x9650;&#x4E0A;&#x4E0B;&#x6587;&#x201D;&#x548C;&#x201C;&#x6DF1;&#x5EA6;&#x63A8;&#x7406;&#x201D;&#x7684;&#x5FC5;&#x7ECF;&#x4E4B;&#x8DEF;&#x3002;</strong></p>
<ul>
<li><strong>&#x957F;&#x6587;&#x672C;&#x521A;&#x9700;&#xFF1A;</strong> &#x73B0;&#x5728;&#x7684; AI &#x9700;&#x8981;&#x9605;&#x8BFB;&#x6574;&#x672C;&#x4E66;&#x3001;&#x5904;&#x7406;&#x6574;&#x4E2A;&#x4EE3;&#x7801;&#x5E93;&#xFF08;Repo-level coding&#xFF09;&#x3001;&#x8FDB;&#x884C;&#x8D85;&#x957F;&#x601D;&#x7EF4;&#x94FE;&#xFF08;Long Chain-of-Thought&#xFF09;&#x63A8;&#x7406;&#x3002;64k&#x3001;128k &#x751A;&#x81F3; 1M &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x6B63;&#x5728;&#x6210;&#x4E3A;&#x6807;&#x914D;&#x3002;</li>
<li><strong>&#x7B97;&#x529B;&#x74F6;&#x9888;&#xFF1A;</strong> &#x5728; 64k &#x957F;&#x5EA6;&#x4E0B;&#xFF0C;Attention &#x8BA1;&#x7B97;&#x5360;&#x636E;&#x4E86; 70%-80% &#x7684;&#x63A8;&#x7406;&#x5EF6;&#x8FDF;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x5355;&#x7EAF;&#x5806;&#x5361;&#x4E5F;&#x65E0;&#x6CD5;&#x5B9E;&#x73B0;&#x5B9E;&#x65F6;&#x7684;&#x957F;&#x6587;&#x672C;&#x5E94;&#x7528;&#x3002;</li>
<li><strong>&#x786C;&#x4EF6;&#x5229;&#x7528;&#x7387;&#x9677;&#x9631;&#xFF1A;</strong> &#x5F88;&#x591A;&#x7A00;&#x758F;&#x7B97;&#x6CD5;&#x770B;&#x7740;&#x5F88;&#x7F8E;&#xFF08;&#x8BA1;&#x7B97;&#x91CF;&#x53EA;&#x6709; 10%&#xFF09;&#xFF0C;&#x4F46;&#x56E0;&#x4E3A;&#x5185;&#x5B58;&#x8BFB;&#x5199;&#xFF08;IO&#xFF09;&#x592A;&#x4E71;&#xFF0C;GPU &#x5927;&#x90E8;&#x5206;&#x65F6;&#x95F4;&#x90FD;&#x5728;&#x7B49;&#x6570;&#x636E;&#xFF0C;&#x5BFC;&#x81F4;&#x52A0;&#x901F;&#x6BD4;&#x6781;&#x4F4E;&#x3002;</li>
</ul>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>NSA &#x7684;&#x6838;&#x5FC3;&#x5728;&#x4E8E;**&#x201C;&#x5206;&#x5C42;&#xFF08;Hierarchical&#xFF09;&#x201D;**&#x7684;&#x8BBE;&#x8BA1;&#x601D;&#x60F3;&#xFF0C;&#x5B83;&#x5C06;&#x6CE8;&#x610F;&#x529B;&#x5206;&#x914D;&#x5230;&#x4E86;&#x4E09;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5206;&#x652F;&#xFF0C;&#x50CF;&#x6F0F;&#x6597;&#x4E00;&#x6837;&#x9AD8;&#x6548;&#x7B5B;&#x9009;&#x4FE1;&#x606F;&#x3002;</p>
<h3 id="1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;&#xFF1A;&#x4E09;&#x652F;&#x67F1;&#x7B56;&#x7565;"><a href="#1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;&#xFF1A;&#x4E09;&#x652F;&#x67F1;&#x7B56;&#x7565;"></a>1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;&#xFF1A;&#x4E09;&#x652F;&#x67F1;&#x7B56;&#x7565;</h3>
<p>NSA &#x7684;&#x6838;&#x5FC3;&#x5728;&#x4E8E;**&#x201C;&#x5206;&#x5C42;&#xFF08;Hierarchical&#xFF09;&#x201D;<strong>&#x7684;&#x8BBE;&#x8BA1;&#x601D;&#x60F3;&#xFF0C;&#x5B83;&#x5C06;&#x6CE8;&#x610F;&#x529B;&#x5206;&#x914D;&#x5230;&#x4E86;&#x4E09;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5206;&#x652F;&#xFF0C;&#x50CF;&#x6F0F;&#x6597;&#x4E00;&#x6837;&#x9AD8;&#x6548;&#x7B5B;&#x9009;&#x4FE1;&#x606F;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x5B83;&#x4EEC;&#x5728;</strong>&#x7F51;&#x7EDC;&#x5C42;&#xFF08;Tensor Op&#xFF09;**&#x7684;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#xFF1A;</p>
<h4 id="A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Token Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;"><a href="#A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Token Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;"></a>A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Token Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;</h4>
<ul>
<li><strong>&#x539F;&#x7406;&#xFF1A;</strong> &#x5C06;&#x8FDE;&#x7EED;&#x7684; Token &#x5757;&#x538B;&#x7F29;&#x6210;&#x4E00;&#x4E2A;&#x6458;&#x8981; Token&#xFF0C;&#x7528;&#x6781;&#x4F4E;&#x7684;&#x6210;&#x672C;&#x626B;&#x63CF;&#x5168;&#x5C40;&#x3002;</li>
<li><strong>&#x7F51;&#x7EDC;&#x5C42;&#x5B9E;&#x73B0;&#xFF1A;</strong>
<ol>
<li><strong>Reshape (&#x5206;&#x7EC4;)&#xFF1A;</strong> &#x5C06;&#x8F93;&#x5165;&#x5E8F;&#x5217; <code>[t, d]</code> &#x5207;&#x5206;&#x4E3A; <code>[t/32, 32, d]</code> &#x7684;&#x5757;&#xFF08;&#x4F8B;&#x5982; Block Size = 32&#xFF09;&#x3002;</li>
<li><strong>MLP (&#x878D;&#x5408;)&#xFF1A;</strong> &#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; MLP &#x5BF9;&#x6BCF;&#x4E2A;&#x5757;&#x5185;&#x7684; 32 &#x4E2A; Token &#x8FDB;&#x884C;&#x52A0;&#x6743;&#x878D;&#x5408;&#xFF08;&#x7C7B;&#x4F3C;&#x4E8E;&#x6C60;&#x5316;&#xFF09;&#xFF0C;&#x8F93;&#x51FA; <code>[t/32, d]</code> &#x7684;&#x538B;&#x7F29;&#x5411;&#x91CF;&#x3002;</li>
<li><strong>Result&#xFF1A;</strong> &#x5F97;&#x5230;&#x4E00;&#x4E2A;&#x957F;&#x5EA6;&#x4EC5;&#x4E3A;&#x539F;&#x59CB; 1/32 &#x7684;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x5E8F;&#x5217;&#x3002;</li>
</ol>
</li>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x89E3;&#x51B3;&#x201C;&#x56E0;&#x4E3A;&#x7A00;&#x758F;&#x800C;&#x6F0F;&#x6389;&#x91CD;&#x8981;&#x4FE1;&#x606F;&#x201D;&#x7684;&#x95EE;&#x9898;&#x3002;&#x8BA1;&#x7B97;&#x91CF;&#x51CF;&#x5C11;&#x4E86; 97%&#x3002;</li>
</ul>
<h4 id="B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Token Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;"><a href="#B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Token Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;"></a>B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Token Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;</h4>
<ul>
<li><strong>&#x539F;&#x7406;&#xFF1A;</strong> &#x57FA;&#x4E8E;&#x538B;&#x7F29;&#x5206;&#x652F;&#x7684;&#x8BC4;&#x5206;&#xFF0C;&#x9009;&#x51FA;&#x6700;&#x91CD;&#x8981;&#xFF08;Top-k&#xFF09;&#x7684;&#x539F;&#x59CB; Block &#x8FDB;&#x884C;&#x7CBE;&#x8BFB;&#x3002;</li>
<li><strong>&#x7F51;&#x7EDC;&#x5C42;&#x5B9E;&#x73B0;&#xFF1A;</strong>
<ol>
<li><strong>Score (&#x6253;&#x5206;)&#xFF1A;</strong> Query &#x4E0E;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x5E8F;&#x5217;&#x8BA1;&#x7B97;&#x76F8;&#x4F3C;&#x5EA6;&#x3002;</li>
<li><strong>TopK (&#x7B5B;&#x9009;)&#xFF1A;</strong> &#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x5BFC;&#x64CD;&#x4F5C;&#xFF08;&#x4F46;&#x5728; Forward &#x4E2D;&#x4F7F;&#x7528;&#xFF09;&#xFF0C;&#x9009;&#x51FA;&#x5206;&#x6570;&#x6700;&#x9AD8;&#x7684; $k$ &#x4E2A;&#x7D22;&#x5F15;&#xFF08;Indices&#xFF09;&#x3002;</li>
<li><strong>Gather (&#x53D6;&#x8D27;)&#xFF1A;</strong> <strong>&#x8FD9;&#x662F;&#x5173;&#x952E;&#x4E00;&#x6B65;</strong>&#x3002;&#x5229;&#x7528;&#x7D22;&#x5F15;&#xFF0C;&#x76F4;&#x63A5;&#x4ECE;&#x663E;&#x5B58;&#x4E2D;&#x7684;&#x539F;&#x59CB;&#x9AD8;&#x7CBE;&#x5EA6; KV &#x5B58;&#x50A8;&#x533A;&#xFF08;Shape <code>[t, d]</code>&#xFF09;&#x4E2D;&#xFF0C;<strong>&#x53EA;&#x642C;&#x8FD0;</strong>&#x90A3; $k$ &#x4E2A; Block &#x5230;&#x8BA1;&#x7B97;&#x5355;&#x5143;&#x3002;</li>
<li><strong>Attention&#xFF1A;</strong> &#x53EA;&#x5BF9;&#x8FD9; $k \\times 32$ &#x4E2A; Token &#x8FDB;&#x884C;&#x6807;&#x51C6;&#x7684; Attention &#x8BA1;&#x7B97;&#x3002;</li>
</ol>
</li>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x662F;&#x7A00;&#x758F;&#x6027;&#x7684;&#x4E3B;&#x8981;&#x6765;&#x6E90;&#x3002;&#x65E0;&#x8BBA;&#x603B;&#x957F;&#x5EA6; $t$ &#x591A;&#x957F;&#xFF0C;&#x8BA1;&#x7B97;&#x91CF;&#x88AB;&#x9501;&#x5B9A;&#x4E3A;&#x5E38;&#x91CF; $O(k)$&#x3002;</li>
</ul>
<h4 id="C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Sliding Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;"><a href="#C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Sliding Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;"></a>C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Sliding Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;</h4>
<ul>
<li><strong>&#x539F;&#x7406;&#xFF1A;</strong> &#x65E0;&#x8BBA;&#x5982;&#x4F55;&#xFF0C;&#x59CB;&#x7EC8;&#x4FDD;&#x7559;&#x6700;&#x8FD1;&#x7684; $w$ &#x4E2A; Token&#x3002;</li>
<li><strong>&#x7F51;&#x7EDC;&#x5C42;&#x5B9E;&#x73B0;&#xFF1A;</strong>
<ol>
<li><strong>Slice (&#x5207;&#x7247;)&#xFF1A;</strong> &#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5F20;&#x91CF;&#x5207;&#x7247;&#x64CD;&#x4F5C; <code>K[:, -w:, :]</code>&#x3002;</li>
<li><strong>Attention&#xFF1A;</strong> &#x5BF9;&#x8FD9; $w$ &#x4E2A; Token &#x8FDB;&#x884C;&#x6807;&#x51C6;&#x8BA1;&#x7B97;&#x3002;</li>
</ol>
</li>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x4FDD;&#x8BC1;&#x57FA;&#x7840;&#x6D41;&#x7545;&#x5EA6;&#x548C;&#x5C40;&#x90E8;&#x903B;&#x8F91;&#x4E0D;&#x4E22;&#x5931;&#x3002;</li>
</ul>
<blockquote>
<p><strong>&#x7591;&#x95EE;&#xFF1A;&#x8FD9;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x5904;&#x7406;&#x7684; Token &#x4F1A;&#x91CD;&#x53E0;&#x5417;&#xFF1F;&#x662F;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x5417;&#xFF1F;</strong></p>
<ul>
<li><strong>&#x7269;&#x7406;&#x91CD;&#x53E0;&#xFF1A;</strong> &#x662F;&#x7684;&#x3002;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x7684;&#x8FD1;&#x671F; Token&#xFF0C;&#x53EF;&#x80FD;&#x65E2;&#x5728; <strong>Window</strong> &#x91CC;&#xFF0C;&#x53C8;&#x88AB; <strong>Selection</strong> &#x9009;&#x4E2D;&#x4E86;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#x4E0D;&#x91CD;&#x590D;&#xFF08;&#x7279;&#x5F81;&#x89E3;&#x8026;&#xFF09;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x5F3A;&#x8C03;&#x4E86; <strong>Independent Keys and Values</strong>&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x62E5;&#x6709;<strong>&#x72EC;&#x7ACB;&#x7684;&#x4E00;&#x5957;&#x6295;&#x5F71;&#x53C2;&#x6570; ($W_{QKV}$)</strong>&#x3002;
<ul>
<li><strong>Window &#x5206;&#x652F;</strong>&#x53EF;&#x80FD;&#x4FA7;&#x91CD;&#x770B;&#x201C;&#x8BED;&#x6CD5;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x4E3B;&#x8C13;&#x4E00;&#x81F4;&#xFF09;&#x3002;</li>
<li><strong>Selection &#x5206;&#x652F;</strong>&#x53EF;&#x80FD;&#x4FA7;&#x91CD;&#x770B;&#x201C;&#x8BED;&#x4E49;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x6307;&#x4EE3;&#x6D88;&#x89E3;&#xFF09;&#x3002;</li>
<li><strong>Compression &#x5206;&#x652F;</strong>&#x5219;&#x8D1F;&#x8D23;&#x201C;&#x5B8F;&#x89C2;&#x6982;&#x62EC;&#x201D;&#x3002;</li>
<li>&#x5373;&#x4F7F;&#x662F;&#x540C;&#x4E00;&#x4E2A;&#x8BCD;&#xFF0C;&#x88AB;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x201C;&#x770B;&#x201D;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x63D0;&#x53D6;&#x51FA;&#x7684;&#x7279;&#x5F81;&#x4E5F;&#x662F;<strong>&#x6B63;&#x4EA4;</strong>&#x7684;&#xFF0C;&#x8FD9;&#x4E0D;&#x4EC5;&#x4E0D;&#x662F;&#x6D6A;&#x8D39;&#xFF0C;&#x53CD;&#x800C;&#x662F;&#x5168;&#x65B9;&#x4F4D;&#x7684;&#x589E;&#x5F3A;&#x3002;</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="2. &#x786C;&#x4EF6;&#x5BF9;&#x9F50; (Hardware-Aligned) &#x7684;&#x9B54;&#x6CD5;"><a href="#2. &#x786C;&#x4EF6;&#x5BF9;&#x9F50; (Hardware-Aligned) &#x7684;&#x9B54;&#x6CD5;"></a>2. &#x786C;&#x4EF6;&#x5BF9;&#x9F50; (Hardware-Aligned) &#x7684;&#x9B54;&#x6CD5;</h3>
<p>&#x7B97;&#x6CD5;&#x8BBE;&#x8BA1;&#x5F97;&#x518D;&#x597D;&#xFF0C;&#x5982;&#x679C;&#x7531;&#x4E8E;&#x5185;&#x5B58;&#x8BBF;&#x95EE;&#x788E;&#x7247;&#x5316;&#x5BFC;&#x81F4; GPU &#x8DD1;&#x4E0D;&#x5FEB;&#x4E5F;&#x662F;&#x767D;&#x642D;&#x3002;NSA &#x505A;&#x4E86;&#x4E24;&#x9879;&#x5173;&#x952E;&#x7684;&#x5DE5;&#x7A0B;&#x4F18;&#x5316;&#xFF1A;</p>
<ul>
<li><strong>&#x5757;&#x7EA7;&#x7A00;&#x758F; (Blockwise Sparsity)&#xFF1A;</strong>
<ul>
<li><strong>&#x95EE;&#x9898;&#xFF1A;</strong> GPU &#x6781;&#x5176;&#x8BA8;&#x538C;&#x201C;&#x968F;&#x673A;&#x8BBF;&#x95EE;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x8BFB;&#x7B2C; 1 &#x4E2A;&#xFF0C;&#x7B2C; 5 &#x4E2A;&#xFF0C;&#x7B2C; 9 &#x4E2A; Token&#xFF09;&#x3002;</li>
<li><strong>NSA &#x7684;&#x89E3;&#x6CD5;&#xFF1A;</strong> &#x5F3A;&#x5236;&#x4EE5; <strong>Block&#xFF08;&#x5757;&#xFF09;</strong> &#x4E3A;&#x5355;&#x4F4D;&#x8FDB;&#x884C;&#x8BFB;&#x53D6;&#xFF08;&#x6BD4;&#x5982;&#x4E00;&#x6B21;&#x8BFB;&#x8FDE;&#x7EED;&#x7684; 64 &#x4E2A; Token&#xFF09;&#x3002;&#x8FD9;&#x5C31;&#x50CF;&#x642C;&#x7816;&#xFF0C;&#x4E00;&#x6B21;&#x642C;&#x4E00;&#x6574;&#x8F66;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x5757;&#x5757;&#x6361;&#xFF0C;&#x5B8C;&#x7F8E;&#x5229;&#x7528;&#x4E86; Tensor Core &#x7684;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x80FD;&#x529B;&#x3002;</li>
</ul>
</li>
<li><strong>GQA &#x53CB;&#x597D;&#x7684;&#x5185;&#x6838;&#x8BBE;&#x8BA1; (Group-Centric Kernel)&#xFF1A;</strong>
<ul>
<li><strong>&#x95EE;&#x9898;&#xFF1A;</strong> &#x73B0;&#x4EE3;&#x5927;&#x6A21;&#x578B;&#x90FD;&#x7528; GQA&#xFF08;&#x5206;&#x7EC4;&#x67E5;&#x8BE2;&#x6CE8;&#x610F;&#x529B;&#xFF09;&#xFF0C;&#x591A;&#x4E2A; Query &#x5934;&#x5171;&#x4EAB;&#x4E00;&#x7EC4; KV&#x3002;</li>
<li><strong>NSA &#x7684;&#x89E3;&#x6CD5;&#xFF1A;</strong> &#x5728;&#x5E95;&#x5C42; Kernel &#x5B9E;&#x73B0;&#x4E0A;&#xFF0C;&#x5F3A;&#x5236;&#x8BA9;&#x540C;&#x4E00;&#x7EC4;&#x7684; Query &#x5171;&#x4EAB; KV &#x52A0;&#x8F7D;&#x3002;&#x8FD9;&#x907F;&#x514D;&#x4E86;&#x91CD;&#x590D;&#x8BFB;&#x53D6;&#x663E;&#x5B58;&#xFF0C;&#x8FDB;&#x4E00;&#x6B65;&#x538B;&#x69A8;&#x4E86; IO &#x6027;&#x80FD;&#x3002;</li>
<li><strong>&#x7ED3;&#x679C;&#xFF1A;</strong> &#x5728; 64k &#x957F;&#x5EA6;&#x4E0B;&#xFF0C;&#x524D;&#x5411;&#x4F20;&#x64AD;&#xFF08;Forward&#xFF09;&#x52A0;&#x901F; <strong>9 &#x500D;</strong>&#xFF0C;&#x89E3;&#x7801;&#xFF08;Decoding&#xFF09;&#x52A0;&#x901F; <strong>11.6 &#x500D;</strong>&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="3. &#x539F;&#x751F;&#x53EF;&#x8BAD;&#x7EC3; (Natively Trainable)"><a href="#3. &#x539F;&#x751F;&#x53EF;&#x8BAD;&#x7EC3; (Natively Trainable)"></a>3. &#x539F;&#x751F;&#x53EF;&#x8BAD;&#x7EC3; (Natively Trainable)</h3>
<ul>
<li><strong>&#x95E8;&#x63A7;&#x878D;&#x5408; (Gating)&#xFF1A;</strong> &#x4E09;&#x4E2A;&#x5206;&#x652F;&#x7684;&#x7ED3;&#x679C;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x76F8;&#x52A0;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x53EF;&#x5B66;&#x4E60;&#x7684; MLP &#x95E8;&#x63A7;&#x7F51;&#x7EDC;&#x8FDB;&#x884C;&#x52A0;&#x6743;&#x878D;&#x5408;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x7A33;&#x5B9A;&#x6027;&#xFF1A;</strong> &#x76F8;&#x6BD4;&#x4E8E;&#x90A3;&#x4E9B;&#x751F;&#x786C;&#x7684;&#x201C;&#x526A;&#x679D;&#x201D;&#xFF0C;NSA &#x7684;&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6;&#x90FD;&#x662F;&#x53EF;&#x5FAE;&#x6216;&#x901A;&#x8FC7;&#x5DE7;&#x5999;&#x8BBE;&#x8BA1;&#x53C2;&#x4E0E;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x7684;&#xFF0C;&#x8FD9;&#x8BA9;&#x6A21;&#x578B;&#x80FD;&#x771F;&#x6B63;&#x5B66;&#x4F1A;&#x201C;&#x5982;&#x4F55;&#x7A00;&#x758F;&#x201D;&#x3002;</li>
</ul>
<h2 id="&#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4ECE;&#x7F51;&#x7EDC;&#x5C42;&#x89C6;&#x89D2;&#x770B;&#x53D8;&#x5316;"><a href="#&#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4ECE;&#x7F51;&#x7EDC;&#x5C42;&#x89C6;&#x89D2;&#x770B;&#x53D8;&#x5316;"></a>&#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4ECE;&#x7F51;&#x7EDC;&#x5C42;&#x89C6;&#x89D2;&#x770B;&#x53D8;&#x5316;</h2>
<p>&#x4E3A;&#x4E86;&#x66F4;&#x6709;&#x201C;&#x4F53;&#x611F;&#x201D;&#x5730;&#x7406;&#x89E3; NSA &#x5BF9;&#x7F51;&#x7EDC;&#x5C42;&#x7684;&#x6539;&#x53D8;&#xFF0C;&#x6211;&#x4EEC;&#x76F4;&#x63A5;&#x5BF9;&#x6BD4;&#x6807;&#x51C6; <strong>Decoder-only Transformer (&#x5982; GPT)</strong> &#x548C; <strong>NSA</strong> &#x5728;&#x63A8;&#x7406;&#xFF08;Inference&#xFF09;&#x65F6;&#x7684;<strong>&#x5173;&#x952E;&#x6570;&#x5B66;&#x516C;&#x5F0F;</strong>&#x3002;</p>
<h3 id="1. &#x6807;&#x51C6; Attention &#x5C42; (Baseline)"><a href="#1. &#x6807;&#x51C6; Attention &#x5C42; (Baseline)"></a>1. &#x6807;&#x51C6; Attention &#x5C42; (Baseline)</h3>
<p>&#x5728;&#x6807;&#x51C6;&#x7684;&#x300A;Attention Is All You Need&#x300B;&#x67B6;&#x6784;&#x4E2D;&#xFF0C;Decoder &#x751F;&#x6210;&#x7B2C; $t$ &#x4E2A;&#x8BCD;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x56DE;&#x5934;&#x770B;&#x4E4B;&#x524D;&#x6240;&#x6709;&#x7684; $t-1$ &#x4E2A;&#x8BCD;&#x3002;</p>
<p>$$
Output_t = \\text{Softmax}\\left(\\frac{\\mathbf{q}<em>t \\cdot \\mathbf{K}</em>{1:t}^T}{\\sqrt{d}}\\right) \\cdot \\mathbf{V}_{1:t}
$$</p>
<ul>
<li><strong>&#x8BA1;&#x7B97;&#x74F6;&#x9888;&#xFF1A;</strong> $\\mathbf{K}_{1:t}$ &#x7684;&#x957F;&#x5EA6;&#x662F; $t$&#x3002;&#x968F;&#x7740;&#x751F;&#x6210;&#x957F;&#x5EA6;&#x65E0;&#x9650;&#x589E;&#x957F;&#xFF08;&#x4F8B;&#x5982; 64k&#xFF09;&#xFF0C;&#x8FD9;&#x4E2A;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x7684;&#x8BA1;&#x7B97;&#x91CF;&#x5448;&#x7EBF;&#x6027;&#x7206;&#x70B8; $O(t)$&#xFF0C;&#x4E14;&#x6BCF;&#x6B21;&#x90FD;&#x8981;&#x642C;&#x8FD0;&#x5DE8;&#x5927;&#x7684; KV Cache&#x3002;</li>
</ul>
<h3 id="2. NSA Attention &#x5C42;"><a href="#2. NSA Attention &#x5C42;"></a>2. NSA Attention &#x5C42;</h3>
<p>NSA &#x5C06;&#x4E0A;&#x8FF0;&#x5355;&#x4E00;&#x7684;&#x5DE8;&#x5927;&#x77E9;&#x9635;&#x8BA1;&#x7B97;&#xFF0C;&#x62C6;&#x89E3;&#x4E3A;&#x4E09;&#x4E2A;&#x5E76;&#x884C;&#x7684;&#x5C0F;&#x578B;&#x77E9;&#x9635;&#x8BA1;&#x7B97;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x95E8;&#x63A7;&#xFF08;Gating&#xFF09;&#x878D;&#x5408;&#x3002;</p>
<blockquote>
<p><strong>&#x5173;&#x952E;&#x524D;&#x7F6E;&#x77E5;&#x8BC6;&#xFF1A;&#x8FD9;&#x4E9B; K &#x548C; V &#x662F;&#x4ECE;&#x54EA;&#x6765;&#x7684;&#xFF1F;</strong></p>
<p>&#x5728;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;&#x4E4B;&#x524D;&#xFF0C;&#x5FC5;&#x987B;&#x5148;&#x660E;&#x786E;&#x6570;&#x636E;&#x6D41;&#x7684;**&#x201C;&#x8EAB;&#x4E16;&#x201D;<strong>&#x3002;NSA &#x5E76;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x5730;&#x5BF9;&#x4E00;&#x5957; KV &#x8FDB;&#x884C;&#x5207;&#x5206;&#xFF0C;&#x800C;&#x662F;&#x5F15;&#x5165;&#x4E86;</strong>&#x4E09;&#x5957;&#x72EC;&#x7ACB;&#x7684;&#x6295;&#x5F71;**&#xFF08;&#x4E3A;&#x4E86;&#x7279;&#x5F81;&#x89E3;&#x8026;&#xFF09;&#xFF1A;</p>
<ol>
<li><strong>&#x8F93;&#x5165;&#xFF1A;</strong> &#x539F;&#x59CB;&#x9690;&#x85CF;&#x72B6;&#x6001; $X$ (Shape: $[t, d_{model}]$)</li>
<li><strong>&#x72EC;&#x7ACB;&#x6295;&#x5F71;&#xFF1A;</strong>
<ul>
<li><strong>Window &#x5206;&#x652F;&#xFF1A;</strong> $K^{win} = X W_K^{win}$ &#xFF08;&#x4FDD;&#x7559;&#x539F;&#x59CB;&#x7CBE;&#x5EA6;&#xFF09;</li>
<li><strong>Selection &#x5206;&#x652F;&#xFF1A;</strong> $K^{slc} = X W_K^{slc}$ &#xFF08;&#x4FDD;&#x7559;&#x539F;&#x59CB;&#x7CBE;&#x5EA6;&#xFF09;</li>
<li><strong>Compression &#x5206;&#x652F;&#xFF1A;</strong> $K^{raw_cmp} = X W_K^{cmp}$ $\\rightarrow$ <strong>&#x538B;&#x7F29;&#x53D8;&#x6362;</strong> $\\rightarrow$ $K^{cmp}$</li>
</ul>
</li>
</ol>
<p>&#x641E;&#x6E05;&#x695A;&#x4E86;&#x539F;&#x6599;&#x6765;&#x6E90;&#xFF0C;&#x6211;&#x4EEC;&#x518D;&#x770B;&#x5177;&#x4F53;&#x7684;&#x70F9;&#x996A;&#x8FC7;&#x7A0B;&#xFF1A;</p>
</blockquote>
<p>$$
Output_t = g_{cmp} \\cdot \\mathbf{O}<em>{cmp} + g</em>{slc} \\cdot \\mathbf{O}<em>{slc} + g</em>{win} \\cdot \\mathbf{O}_{win}
$$</p>
<p>&#x5176;&#x4E2D;&#x4E09;&#x4E2A;&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#x7684;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;&#x5982;&#x4E0B;&#xFF1A;</p>
<h4 id="A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;"><a href="#A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;"></a>A. &#x538B;&#x7F29;&#x6CE8;&#x610F;&#x529B; (Compression) &#x2014;&#x2014; &#x201C;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x626B;&#x5168;&#x5C40;&#x201D;</h4>
<p>$$
K_{cmp} = \\text{MLP}(\\text{Reshape}(K^{raw_cmp}))
$$
$$
\\mathbf{O}<em>{cmp} = \\text{Attention}(\\mathbf{q}<em>t, \\mathbf{K}</em>{cmp}, \\mathbf{V}</em>{cmp})
$$</p>
<ul>
<li><strong>&#x7F51;&#x7EDC;&#x5C42;&#x5B9E;&#x73B0; (Tensor Op)&#xFF1A;</strong>
<ol>
<li><strong>Reshape (&#x5206;&#x7EC4;)&#xFF1A;</strong> &#x5C06;&#x957F;&#x5EA6;&#x4E3A; $t$ &#x7684;&#x5E8F;&#x5217;&#x5207;&#x6210; $t/32$ &#x4E2A;&#x5757;&#x3002;&#x6BD4;&#x5982; <code>[64000, d]</code> $\\rightarrow$ <code>[2000, 32, d]</code>&#x3002;</li>
<li><strong>MLP (&#x878D;&#x5408;)&#xFF1A;</strong> &#x5BF9;&#x6BCF;&#x4E2A;&#x5757;&#x5185;&#x7684; 32 &#x4E2A; Token &#x5411;&#x91CF;&#x8FDB;&#x884C;&#x52A0;&#x6743;&#x878D;&#x5408;&#xFF08;&#x5B66;&#x4E60;&#x5982;&#x4F55;&#x63D0;&#x53D6;&#x6458;&#x8981;&#xFF09;&#xFF0C;&#x53D8;&#x6210; 1 &#x4E2A;&#x5411;&#x91CF;&#x3002;&#x5F62;&#x72B6;&#x53D8;&#x4E3A; <code>[2000, d]</code>&#x3002;</li>
<li><strong>Result&#xFF1A;</strong> &#x8FD9; 2000 &#x4E2A;&#x5411;&#x91CF;&#x5C31;&#x662F;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x3002;</li>
</ol>
</li>
<li><strong>&#x610F;&#x4E49;&#xFF1A;</strong> &#x8BA1;&#x7B97;&#x91CF;&#x76F4;&#x63A5;&#x780D;&#x6389; 97%&#xFF0C;&#x7528;&#x6781;&#x4F4E;&#x6210;&#x672C;&#x83B7;&#x53D6;&#x5168;&#x5C40;&#x6982;&#x89C8;&#x3002;</li>
</ul>
<h4 id="B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;"><a href="#B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;"></a>B. &#x9009;&#x62E9;&#x6CE8;&#x610F;&#x529B; (Selection) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x91CD;&#x70B9;&#x201D;</h4>
<p>$$
\\text{Indices} = \\text{TopK}(\\text{Softmax}(\\mathbf{q}<em>t \\cdot \\mathbf{K}</em>{cmp}^T)) \\quad \\leftarrow \\text{1. &#x62FF;&#x3010;&#x538B;&#x7F29;&#x5206;&#x652F;&#x3011;&#x7684;&#x8BC4;&#x5206;}
$$
$$
\\mathbf{K}<em>{indices} = \\text{Gather}(K^{slc}, \\text{Indices}) \\quad \\leftarrow \\text{2. &#x53BB;&#x3010;&#x9009;&#x62E9;&#x5206;&#x652F;&#x3011;&#x53D6;&#x8D27;}
$$
$$
\\mathbf{O}</em>{slc} = \\text{Attention}(\\mathbf{q}<em>t, \\mathbf{K}</em>{indices}, \\mathbf{V}_{indices})
$$</p>
<ul>
<li><strong>&#x7F51;&#x7EDC;&#x5C42;&#x5B9E;&#x73B0; (Tensor Op)&#xFF1A;</strong>
<ol>
<li><strong>Score (&#x6253;&#x5206;)&#xFF1A;</strong> Query &#x548C; 2000 &#x4E2A;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x5411;&#x91CF;&#x7B97;&#x76F8;&#x4F3C;&#x5EA6;&#xFF0C;&#x5F97;&#x5230; 2000 &#x4E2A;&#x5206;&#x6570;&#x3002;</li>
<li><strong>TopK (&#x7B5B;&#x9009;)&#xFF1A;</strong> &#x9009;&#x51FA;&#x5206;&#x6570;&#x6700;&#x9AD8;&#x7684; 16 &#x4E2A;&#x7D22;&#x5F15;&#xFF08;&#x6BD4;&#x5982;&#x7B2C; 5 &#x5757;&#x548C;&#x7B2C; 100 &#x5757;&#xFF09;&#x3002;</li>
<li><strong>Gather (&#x53D6;&#x8D27;)&#xFF1A;</strong> &#x5229;&#x7528;&#x8FD9; 16 &#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x4ECE; $K^{slc}$&#xFF08;&#x539F;&#x59CB;&#x7CBE;&#x5EA6;&#x5B58;&#x50A8;&#xFF09;&#x4E2D;&#x628A;&#x5BF9;&#x5E94;&#x7684; Token &#x5757;&#x642C;&#x8FD0;&#x5230; GPU &#x8BA1;&#x7B97;&#x5355;&#x5143;&#x3002;&#x6CE8;&#x610F;&#xFF1A;&#x8FD9;&#x91CC;&#x642C;&#x8FD0;&#x7684;&#x662F;<strong>&#x672A;&#x7ECF;&#x538B;&#x7F29;</strong>&#x7684;&#x539F;&#x59CB;&#x5411;&#x91CF;&#x3002;</li>
<li><strong>Attention&#xFF1A;</strong> &#x53EA;&#x5BF9;&#x8FD9; $16 \\times 32 = 512$ &#x4E2A; Token &#x8FDB;&#x884C;&#x7CBE;&#x7EC6;&#x8BA1;&#x7B97;&#x3002;</li>
</ol>
</li>
<li><strong>&#x610F;&#x4E49;&#xFF1A;</strong> <strong>&#x8FD9;&#x662F;&#x6700;&#x5173;&#x952E;&#x7684;&#x516C;&#x5F0F;&#x53D8;&#x5316;</strong>&#x3002;&#x65E0;&#x8BBA;&#x603B;&#x957F;&#x5EA6; $t$ &#x662F; 64k &#x8FD8;&#x662F; 100k&#xFF0C;&#x8FD9;&#x4E00;&#x6B65;&#x7684;&#x8BA1;&#x7B97;&#x91CF;&#x6C38;&#x8FDC;&#x9501;&#x5B9A;&#x5728; 512 &#x4E2A; Token&#x3002;<strong>&#x590D;&#x6742;&#x5EA6;&#x4ECE; $O(t)$ &#x964D;&#x4E3A; $O(1)$</strong>&#x3002;</li>
</ul>
<h4 id="C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;"><a href="#C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;"></a>C. &#x6ED1;&#x52A8;&#x7A97;&#x53E3; (Window) &#x2014;&#x2014; &#x201C;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x770B;&#x773C;&#x524D;&#x201D;</h4>
<p>$$
\\mathbf{O}<em>{win} = \\text{Attention}(\\mathbf{q}<em>t, \\mathbf{K}^{win}</em>{t-w:t}, \\mathbf{V}^{win}</em>{t-w:t})
$$</p>
<ul>
<li><strong>&#x7EF4;&#x5EA6;&#x53D8;&#x5316;&#xFF1A;</strong> &#x8F93;&#x5165;&#x7684; KV &#x957F;&#x5EA6;&#x56FA;&#x5B9A;&#x4E3A; $w$&#xFF08;&#x4F8B;&#x5982; 512&#xFF09;&#x3002;</li>
<li><strong>&#x610F;&#x4E49;&#xFF1A;</strong> &#x4FDD;&#x8BC1;&#x9644;&#x8FD1;&#x7684;&#x8BCD;&#xFF08;Local Context&#xFF09;&#x6C38;&#x8FDC;&#x88AB;&#x9AD8;&#x7CBE;&#x5EA6;&#x5173;&#x6CE8;&#x3002;</li>
</ul>
<blockquote>
<p><strong>&#x7591;&#x95EE;&#xFF1A;&#x8FD9;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x5904;&#x7406;&#x7684; Token &#x4F1A;&#x91CD;&#x53E0;&#x5417;&#xFF1F;&#x662F;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x5417;&#xFF1F;</strong></p>
<ul>
<li><strong>&#x7269;&#x7406;&#x91CD;&#x53E0;&#xFF1A;</strong> &#x662F;&#x7684;&#x3002;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x7684;&#x8FD1;&#x671F; Token&#xFF0C;&#x53EF;&#x80FD;&#x65E2;&#x5728; <strong>Window</strong>&#xFF08;&#x56E0;&#x4E3A;&#x5B83;&#x8FD1;&#xFF09;&#x91CC;&#xFF0C;&#x53C8;&#x88AB; <strong>Selection</strong>&#xFF08;&#x56E0;&#x4E3A;&#x5B83;&#x91CD;&#x8981;&#xFF09;&#x9009;&#x4E2D;&#x4E86;&#xFF0C;&#x540C;&#x65F6;&#x4E5F;&#x53C2;&#x4E0E;&#x4E86; <strong>Compression</strong>&#xFF08;&#x56E0;&#x4E3A;&#x5B83;&#x5728;&#x5168;&#x6587;&#x91CC;&#xFF09;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#x4E0D;&#x91CD;&#x590D;&#xFF08;&#x7279;&#x5F81;&#x89E3;&#x8026;&#xFF09;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x7279;&#x522B;&#x5F3A;&#x8C03;&#x4E86; <strong>Independent Keys and Values</strong>&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x62E5;&#x6709;<strong>&#x72EC;&#x7ACB;&#x7684;&#x4E00;&#x5957;&#x6295;&#x5F71;&#x53C2;&#x6570; ($W_{QKV}$)</strong>&#x3002;
<ul>
<li><strong>Window &#x5206;&#x652F;</strong>&#x53EF;&#x80FD;&#x4FA7;&#x91CD;&#x770B;&#x201C;&#x8BED;&#x6CD5;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x4E3B;&#x8C13;&#x4E00;&#x81F4;&#xFF09;&#x3002;</li>
<li><strong>Selection &#x5206;&#x652F;</strong>&#x53EF;&#x80FD;&#x4FA7;&#x91CD;&#x770B;&#x201C;&#x8BED;&#x4E49;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x6307;&#x4EE3;&#x6D88;&#x89E3;&#xFF09;&#x3002;</li>
<li><strong>Compression &#x5206;&#x652F;</strong>&#x7684; $W_{cmp}$ &#x5219;&#x662F;&#x770B;&#x201C;&#x5B8F;&#x89C2;&#x6982;&#x62EC;&#x201D;&#x3002;</li>
<li>&#x5373;&#x4F7F;&#x662F;&#x540C;&#x4E00;&#x4E2A;&#x8BCD;&#xFF0C;&#x88AB;&#x4E09;&#x4E2A;&#x5206;&#x652F;&#x201C;&#x770B;&#x201D;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x63D0;&#x53D6;&#x51FA;&#x7684;&#x7279;&#x5F81;&#x4E5F;&#x662F;<strong>&#x6B63;&#x4EA4;</strong>&#x7684;&#xFF0C;&#x5C31;&#x50CF;&#x4F60;&#x662F;&#x901A;&#x8FC7;&#x5F62;&#x72B6;&#x3001;&#x989C;&#x8272;&#x548C;&#x6C14;&#x5473;&#x4E09;&#x4E2A;&#x72EC;&#x7ACB;&#x901A;&#x9053;&#x53BB;&#x611F;&#x77E5;&#x540C;&#x4E00;&#x4E2A;&#x82F9;&#x679C;&#xFF0C;&#x8FD9;&#x4E0D;&#x4EC5;&#x4E0D;&#x662F;&#x6D6A;&#x8D39;&#xFF0C;&#x53CD;&#x800C;&#x662F;&#x5168;&#x65B9;&#x4F4D;&#x7684;&#x589E;&#x5F3A;&#x3002;</li>
</ul>
</li>
</ul>
</blockquote>
<blockquote>
<p><strong>&#x8FFD;&#x95EE;&#xFF1A;Standard Transformer &#x7684; N &#x5C42;&#x5806;&#x53E0;&#x672C;&#x8EAB;&#x4E0D;&#x5C31;&#x662F;&#x4E3A;&#x4E86;&#x63D0;&#x53D6;&#x591A;&#x5C42;&#x6B21;&#x62BD;&#x8C61;&#x5417;&#xFF1F;NSA &#x5728;&#x5355;&#x5C42;&#x5185;&#x641E; 3 &#x4E2A;&#x5206;&#x652F;&#xFF0C;&#x662F;&#x4E0D;&#x662F;&#x628A; N &#x53D8;&#x6210;&#x4E86; 3N &#x5C42;&#x62BD;&#x8C61;&#xFF1F;</strong></p>
<p><strong>&#x4E0D;&#x662F;&#x3002;&#x8FD9; 3 &#x4E2A;&#x5206;&#x652F;&#x662F;&#x5E76;&#x884C;&#xFF08;Parallel&#xFF09;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x4E32;&#x884C;&#xFF08;Sequential&#xFF09;&#x7684;&#x3002;</strong></p>
<p>&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x4E3A; <strong>Attention &#x5C42;&#x7684; MoE&#xFF08;&#x6DF7;&#x5408;&#x4E13;&#x5BB6;&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li><strong>Full Attention (&#x8001;&#x5E08;&#x5085;)&#xFF1A;</strong> &#x4E00;&#x4E2A;&#x4EBA;&#x5E72;&#x5B8C;&#x6240;&#x6709;&#x6D3B;&#xFF08;&#x770B;&#x5168;&#x5C40;&#x3001;&#x770B;&#x7EC6;&#x8282;&#x3001;&#x770B;&#x5C40;&#x90E8;&#xFF09;&#xFF0C;&#x80FD;&#x529B;&#x5F3A;&#x4F46;&#x6162;&#x3002;</li>
<li><strong>NSA (&#x5206;&#x5DE5;&#x534F;&#x4F5C;)&#xFF1A;</strong> &#x628A;&#x6D3B;&#x62C6;&#x7ED9;&#x4E09;&#x4E2A;<strong>&#x4E13;&#x7CBE;&#x7684;&#x5C0F;&#x5DE5;</strong>&#xFF1A;
<ul>
<li>&#x5C0F;&#x5DE5; A (Window) &#x8D1F;&#x8D23;&#x770B;&#x773C;&#x524D;&#x3002;</li>
<li>&#x5C0F;&#x5DE5; B (Selection) &#x8D1F;&#x8D23;&#x6311;&#x91CD;&#x70B9;&#x3002;</li>
<li>&#x5C0F;&#x5DE5; C (Compression) &#x8D1F;&#x8D23;&#x626B;&#x5927;&#x5C40;&#x3002;</li>
</ul>
</li>
<li>&#x4ED6;&#x4EEC;<strong>&#x540C;&#x65F6;&#x5E72;&#x6D3B;</strong>&#xFF0C;&#x6700;&#x540E;&#x628A;&#x7ED3;&#x679C;&#x62FC;&#x8D77;&#x6765;&#x3002;&#x8FD9;&#x4F9D;&#x7136;&#x662F;<strong>&#x4E00;&#x5C42;</strong>&#x7684;&#x8BA1;&#x7B97;&#x91CF;&#xFF0C;&#x5E76;&#x6CA1;&#x6709;&#x589E;&#x52A0;&#x7F51;&#x7EDC;&#x7684;&#x6DF1;&#x5EA6;&#xFF0C;&#x800C;&#x662F;&#x589E;&#x52A0;&#x4E86;&#x5355;&#x5C42;&#x5185;&#x7684;**&#x201C;&#x7279;&#x5F81;&#x5E7F;&#x5EA6;&#x201D;**&#x3002;</li>
</ul>
</blockquote>
<h3 id="3. &#x6838;&#x5FC3;&#x5DEE;&#x5F02;&#x603B;&#x7ED3;"><a href="#3. &#x6838;&#x5FC3;&#x5DEE;&#x5F02;&#x603B;&#x7ED3;"></a>3. &#x6838;&#x5FC3;&#x5DEE;&#x5F02;&#x603B;&#x7ED3;</h3>
<table>
<thead>
<tr>
<th style="text-align:left">&#x7EF4;&#x5EA6;</th>
<th style="text-align:left">&#x6807;&#x51C6; Attention (GPT)</th>
<th style="text-align:left">NSA (DeepSeek)</th>
<th style="text-align:left">&#x4F53;&#x611F;&#x5DEE;&#x5F02;</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>KV &#x77E9;&#x9635;&#x5927;&#x5C0F;</strong></td>
<td style="text-align:left">&#x968F;&#x65F6;&#x95F4; $t$ &#x65E0;&#x9650;&#x589E;&#x957F;</td>
<td style="text-align:left">&#x9501;&#x5B9A;&#x4E3A;&#x5E38;&#x6570; ($C \\approx 2000$)</td>
<td style="text-align:left"><strong>&#x8D8A;&#x804A;&#x8D8A;&#x6162; vs. &#x6C38;&#x4E0D;&#x51CF;&#x901F;</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;</strong></td>
<td style="text-align:left">$O(t)$ (Linear)</td>
<td style="text-align:left">$O(1)$ (Constant)</td>
<td style="text-align:left">&#x5F7B;&#x5E95;&#x89E3;&#x51B3;&#x957F;&#x6587;&#x672C;&#x63A8;&#x7406;&#x5EF6;&#x8FDF;</td>
</tr>
<tr>
<td style="text-align:left"><strong>&#x663E;&#x5B58;&#x5E26;&#x5BBD;</strong></td>
<td style="text-align:left">&#x5FC5;&#x987B;&#x642C;&#x8FD0;&#x5168;&#x91CF; KV Cache</td>
<td style="text-align:left">&#x53EA;&#x642C;&#x8FD0; Top-K &#x5757; (Cache Hit)</td>
<td style="text-align:left">&#x663E;&#x5B58;&#x5E26;&#x5BBD;&#x538B;&#x529B;&#x9AA4;&#x964D;</td>
</tr>
</tbody>
</table>
<p><strong>&#x672C;&#x8D28;&#x53D8;&#x5316;&#xFF1A;</strong>
NSA &#x5728;&#x6570;&#x5B66;&#x4E0A;&#x5C06;&#x6CE8;&#x610F;&#x529B;&#x7684;&#x201C;&#x5E7F;&#x5EA6;&#x201D;&#x548C;&#x201C;&#x7CBE;&#x5EA6;&#x201D;&#x89E3;&#x8026;&#x4E86;&#x3002;</p>
<ul>
<li><strong>&#x65E7;&#x516C;&#x5F0F;&#xFF1A;</strong> &#x8981;&#x4E48;&#x5168;&#x770B;&#xFF08;&#x9AD8;&#x7CBE;&#x4F46;&#x6162;&#xFF09;&#xFF0C;&#x8981;&#x4E48;&#x4E0D;&#x770B;&#xFF08;&#x5FEB;&#x4F46;&#x50BB;&#xFF09;&#x3002;</li>
<li><strong>&#x65B0;&#x516C;&#x5F0F;&#xFF1A;</strong> &#x8FDC;&#x5904;&#x201C;&#x772F;&#x7740;&#x773C;&#x770B;&#x201D;&#xFF08;Compression&#xFF09;&#xFF0C;&#x611F;&#x5174;&#x8DA3;&#x7684;&#x5730;&#x65B9;&#x201C;&#x62FF;&#x653E;&#x5927;&#x955C;&#x770B;&#x201D;&#xFF08;Selection&#xFF09;&#xFF0C;&#x773C;&#x524D;&#x201C;&#x7741;&#x5927;&#x773C;&#x770B;&#x201D;&#xFF08;Window&#xFF09;&#x3002;&#x8FD9;&#x975E;&#x5E38;&#x7B26;&#x5408;&#x4EBA;&#x7C7B;&#x7684;&#x9605;&#x8BFB;&#x76F4;&#x89C9;&#x3002;</li>
</ul>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>&#x957F;&#x6587;&#x672C;&#x4F18;&#x5316;&#x662F;&#x76EE;&#x524D;&#x7684;&#x201C;&#x5175;&#x5BB6;&#x5FC5;&#x4E89;&#x4E4B;&#x5730;&#x201D;&#xFF0C;NSA &#x5E76;&#x4E0D;&#x662F;&#x552F;&#x4E00;&#x7684;&#x73A9;&#x5BB6;&#x3002;&#x6211;&#x4EEC;&#x7528;<strong>&#x7F51;&#x7EDC;&#x5C42;&#x516C;&#x5F0F;&#x7684;&#x89C6;&#x89D2;</strong>&#x6765;&#x5BF9;&#x6BD4;&#x5404;&#x8DEF;&#x8C6A;&#x6770;&#xFF1A;</p>
<p>$$
\\text{Attention}(Q, K, V) = \\text{Softmax}\\left(\\frac{QK^T}{\\sqrt{d}}\\right)V
$$</p>
<h3 id="1. Ring Attention / FlashAttention"><a href="#1. Ring Attention / FlashAttention"></a>1. Ring Attention / FlashAttention</h3>
<ul>
<li><strong>&#x6D41;&#x6D3E;&#xFF1A;</strong> <strong>&#x7CFB;&#x7EDF;&#x4F18;&#x5316;&#x6D3E; (System Optimization)</strong>&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#x89C6;&#x89D2;&#xFF1A;</strong> <strong>&#x516C;&#x5F0F;&#x5B8C;&#x5168;&#x4E0D;&#x53D8;</strong>&#x3002;
<ul>
<li>&#x5B83;&#x4EEC;&#x4E0D;&#x6539;&#x53D8;&#x6570;&#x5B66;&#x516C;&#x5F0F;&#x7684;&#x4EFB;&#x4F55;&#x4E00;&#x9879;&#xFF0C;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x548C;&#x6807;&#x51C6; Attention &#x4E00;&#x6A21;&#x4E00;&#x6837;&#x3002;</li>
<li><strong>&#x6838;&#x5FC3;&#x6539;&#x52A8;&#xFF1A;</strong> &#x5B83;&#x4EEC;&#x4F18;&#x5316;&#x7684;&#x662F;<strong>&#x5982;&#x4F55;&#x5207;&#x5206;</strong> $Q, K, V$ &#x77E9;&#x9635;&#xFF0C;&#x4EE5;&#x53CA;<strong>&#x5982;&#x4F55;&#x642C;&#x8FD0;</strong>&#x5B83;&#x4EEC;&#x8FDB; GPU &#x663E;&#x5B58;&#xFF08;Tiling &amp; IO Optimization&#xFF09;&#x3002;</li>
</ul>
</li>
<li><strong>&#x5BF9;&#x6BD4; NSA&#xFF1A;</strong>
<ul>
<li>FlashAttention &#x662F;&#x628A; $O(N^2)$ &#x505A;&#x5F97;&#x66F4;&#x5FEB;&#xFF0C;&#x4F46;&#x8FD8;&#x662F; $O(N^2)$&#x3002;</li>
<li>NSA &#x662F;&#x76F4;&#x63A5;&#x628A;&#x516C;&#x5F0F;&#x91CC;&#x7684; $N$ &#x6362;&#x6210;&#x4E86;&#x5E38;&#x6570; $C$&#xFF0C;&#x5B9E;&#x73B0;&#x4E86;&#x7B97;&#x6CD5;&#x5C42;&#x9762;&#x7684;&#x964D;&#x7EF4;&#x6253;&#x51FB;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="2. Mamba / SSM (&#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x6A21;&#x578B;)"><a href="#2. Mamba / SSM (&#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x6A21;&#x578B;)"></a>2. Mamba / SSM (&#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x6A21;&#x578B;)</h3>
<ul>
<li><strong>&#x6D41;&#x6D3E;&#xFF1A;</strong> <strong>&#x7EBF;&#x6027;&#x9012;&#x5F52;&#x6D3E; (Linear Recurrence)</strong>&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#x89C6;&#x89D2;&#xFF1A;</strong> <strong>&#x5F7B;&#x5E95;&#x629B;&#x5F03; $QK^T$</strong>&#x3002;
<ul>
<li><strong>&#x516C;&#x5F0F;&#x53D8;&#x5316;&#xFF1A;</strong> $h_t = A h_{t-1} + B x_t$ &#xFF08;&#x7C7B;&#x4F3C;&#x4E8E; RNN&#xFF09;&#x3002;</li>
<li>&#x5B83;&#x4E0D;&#x518D;&#x4FDD;&#x7559;&#x5386;&#x53F2;&#x7684; $K$ &#x548C; $V$ &#x77E9;&#x9635;&#xFF0C;&#x800C;&#x662F;&#x628A;&#x6240;&#x6709;&#x5386;&#x53F2;&#x538B;&#x7F29;&#x8FDB;&#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x9690;&#x72B6;&#x6001; $h_t$ &#x4E2D;&#x3002;</li>
</ul>
</li>
<li><strong>&#x5BF9;&#x6BD4; NSA&#xFF1A;</strong>
<ul>
<li><strong>SSM&#xFF1A;</strong> &#x9057;&#x5FD8;&#x662F;&#x5FC5;&#x7136;&#x7684;&#x3002;&#x56E0;&#x4E3A; $h_t$ &#x5BB9;&#x91CF;&#x6709;&#x9650;&#xFF0C;&#x592A;&#x4E45;&#x8FDC;&#x7684;&#x4FE1;&#x606F;&#x4F1A;&#x88AB;&#x6324;&#x51FA;&#x53BB;&#xFF0C;&#x65E0;&#x6CD5;&#x201C;&#x7CBE;&#x51C6;&#x56DE;&#x770B;&#x201D;&#x3002;</li>
<li><strong>NSA&#xFF1A;</strong> &#x4FDD;&#x7559;&#x4E86; Attention &#x7684;&#x7075;&#x9B42;&#x2014;&#x2014;<strong>&#x968F;&#x65F6;&#x53EF;&#x4EE5;&#x7CBE;&#x51C6;&#x56DE;&#x770B;</strong>&#xFF08;&#x53EA;&#x8981;&#x5B83;&#x88AB; Selection &#x9009;&#x4E2D;&#xFF09;&#x3002;&#x5B83;&#x7ED3;&#x5408;&#x4E86; RNN &#x7684;&#x901F;&#x5EA6;&#xFF08;&#x538B;&#x7F29;&#x5206;&#x652F;&#xFF09;&#x548C; Attention &#x7684;&#x7CBE;&#x5EA6;&#xFF08;&#x9009;&#x62E9;&#x5206;&#x652F;&#xFF09;&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="3. &#x5176;&#x4ED6;&#x7A00;&#x758F; Attention (H2O, Quest, InfLLM)"><a href="#3. &#x5176;&#x4ED6;&#x7A00;&#x758F; Attention (H2O, Quest, InfLLM)"></a>3. &#x5176;&#x4ED6;&#x7A00;&#x758F; Attention (H2O, Quest, InfLLM)</h3>
<ul>
<li><strong>&#x6D41;&#x6D3E;&#xFF1A;</strong> <strong>&#x63A8;&#x7406;&#x526A;&#x679D;&#x6D3E; (Inference Pruning)</strong>&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#x89C6;&#x89D2;&#xFF1A;</strong> <strong>&#x8BAD;&#x7EC3;&#x65F6;&#x7528;&#x5168;&#x91CF;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x7528;&#x6B8B;&#x91CF;</strong>&#x3002;
<ul>
<li><strong>&#x8BAD;&#x7EC3;&#x516C;&#x5F0F;&#xFF1A;</strong> $Output = \\text{Attention}(Q, K_{all}, V_{all})$</li>
<li><strong>&#x63A8;&#x7406;&#x516C;&#x5F0F;&#xFF1A;</strong> $Output = \\text{Attention}(Q, K_{topk}, V_{topk})$</li>
</ul>
</li>
<li><strong>&#x5BF9;&#x6BD4; NSA&#xFF1A;</strong>
<ul>
<li>&#x8FD9;&#x79CD;&#x201C;&#x8BAD;&#x7EC3;&#x4E00;&#x5957;&#x3001;&#x63A8;&#x7406;&#x4E00;&#x5957;&#x201D;&#x7684;&#x505A;&#x6CD5;&#x5BFC;&#x81F4;&#x4E86;<strong>&#x5206;&#x5E03;&#x504F;&#x79FB; (Distribution Shift)</strong>&#x3002;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x65F6;&#x4E60;&#x60EF;&#x4E86;&#x4F9D;&#x8D56;&#x5FAE;&#x5F31;&#x7684;&#x4FE1;&#x53F7;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x7A81;&#x7136;&#x88AB;&#x5207;&#x65AD;&#xFF0C;&#x6027;&#x80FD;&#x4F1A;&#x5D29;&#x584C;&#x3002;</li>
<li><strong>NSA&#xFF1A;</strong> &#x8BAD;&#x7EC3;&#x548C;&#x63A8;&#x7406;&#x7528;&#x7684;&#x662F;&#x540C;&#x4E00;&#x5957;&#x7A00;&#x758F;&#x516C;&#x5F0F;&#xFF0C;&#x6A21;&#x578B;<strong>&#x9002;&#x5E94;&#x4E86;&#x7A00;&#x758F;</strong>&#x3002;</li>
</ul>
</li>
</ul>
<h3 id="4. Gated Attention (Alibaba)"><a href="#4. Gated Attention (Alibaba)"></a>4. Gated Attention (Alibaba)</h3>
<ul>
<li><strong>&#x6D41;&#x6D3E;&#xFF1A;</strong> <strong>&#x95E8;&#x63A7;&#x4FEE;&#x6B63;&#x6D3E; (Gating Correction)</strong>&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#x89C6;&#x89D2;&#xFF1A;</strong> <strong>&#x516C;&#x5F0F;&#x5916;&#x90E8;&#x52A0;&#x9501;</strong>&#x3002;
<ul>
<li><strong>&#x516C;&#x5F0F;&#x53D8;&#x5316;&#xFF1A;</strong> $Output = \\text{Attention}(Q, K, V) \\odot \\sigma(Gate)$</li>
<li>&#x5B83;&#x4E0D;&#x6539;&#x53D8; Attention &#x5185;&#x90E8;&#x7684;&#x8BA1;&#x7B97;&#xFF08;&#x4F9D;&#x7136;&#x662F;&#x5168;&#x91CF; $O(N^2)$&#xFF09;&#xFF0C;&#x4F46;&#x5728;&#x8F93;&#x51FA;&#x65F6;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;&#x95E8;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x91CD;&#x8981;&#x5C31;&#x4E58; 0&#x3002;</li>
</ul>
</li>
<li><strong>&#x5BF9;&#x6BD4; NSA&#xFF1A;</strong>
<ul>
<li><strong>Gated Attention&#xFF1A;</strong> &#x89E3;&#x51B3;&#x7684;&#x662F;<strong>&#x8D28;&#x91CF;&#x95EE;&#x9898;</strong>&#xFF08;&#x6CE8;&#x610F;&#x529B;&#x9ED1;&#x6D1E;&#xFF09;&#xFF0C;&#x8BA1;&#x7B97;&#x91CF;&#x6CA1;&#x53D8;&#xFF0C;&#x751A;&#x81F3;&#x7565;&#x6709;&#x589E;&#x52A0;&#x3002;</li>
<li><strong>NSA&#xFF1A;</strong> &#x89E3;&#x51B3;&#x7684;&#x662F;<strong>&#x901F;&#x5EA6;&#x95EE;&#x9898;</strong>&#xFF0C;&#x8BA1;&#x7B97;&#x91CF;&#x5927;&#x5E45;&#x51CF;&#x5C11;&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>NSA &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;&#xFF1A;</strong> &#x5B83;&#x4E0D;&#x59A5;&#x534F;&#x3002;&#x65E2;&#x8981; Attention &#x7684;&#x7CBE;&#x51C6;&#xFF08;Performance&#xFF09;&#xFF0C;&#x53C8;&#x8981; RNN &#x7EA7;&#x522B;&#x7684;&#x901F;&#x5EA6;&#xFF08;Efficiency&#xFF09;&#xFF0C;&#x8FD8;&#x8981;&#x80FD;&#x50CF;&#x6807;&#x51C6; Transformer &#x4E00;&#x6837;&#x597D;&#x8BAD;&#x7EC3;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x538B;&#x7F29;&#x4E0E;&#x9009;&#x62E9; (Compression &amp; Selection)"><a href="#1. &#x538B;&#x7F29;&#x4E0E;&#x9009;&#x62E9; (Compression &amp; Selection)"></a>1. &#x538B;&#x7F29;&#x4E0E;&#x9009;&#x62E9; (Compression &amp; Selection)</h3>
<p>&#x8FD9;&#x662F; NSA &#x89E3;&#x51B3;&#x201C;&#x65E2;&#x8981;&#x5168;&#x5C40;&#x53C8;&#x8981;&#x7EC6;&#x8282;&#x201D;&#x77DB;&#x76FE;&#x7684;&#x6838;&#x5FC3;&#x3002;</p>
<ul>
<li><strong>&#x538B;&#x7F29; (Compression)&#xFF1A;</strong> &#x5C31;&#x50CF;&#x770B;&#x4E66;&#x5148;&#x770B;<strong>&#x76EE;&#x5F55;</strong>&#x3002;&#x628A;&#x4E00;&#x7AE0;&#x7684;&#x5185;&#x5BB9;&#xFF08;&#x6BD4;&#x5982; 32 &#x4E2A;&#x8BCD;&#xFF09;&#x538B;&#x7F29;&#x6210;&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#x3002;Query &#x5148;&#x548C;&#x8FD9;&#x4E9B;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x7B97;&#x76F8;&#x5173;&#x6027;&#x3002;</li>
<li><strong>&#x9009;&#x62E9; (Selection)&#xFF1A;</strong> &#x53D1;&#x73B0;&#x7B2C; 5 &#x7AE0;&#x201C;&#x76EE;&#x5F55;&#x201D;&#x5F88;&#x6709;&#x8DA3;&#xFF0C;&#x4E8E;&#x662F;&#x628A;&#x7B2C; 5 &#x7AE0;&#x7684;<strong>&#x6B63;&#x6587;</strong>&#xFF08;&#x539F;&#x59CB; KV&#xFF09;&#x5B8C;&#x6574;&#x52A0;&#x8F7D;&#x51FA;&#x6765;&#x7EC6;&#x8BFB;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x5982;&#x679C;&#x5168;&#x6CE8;&#x610F;&#x529B;&#x662F;&#x201C;&#x9010;&#x5B57;&#x9605;&#x8BFB;&#x6574;&#x672C;&#x4E66;&#x201D;&#xFF0C;NSA &#x5C31;&#x662F;&#x201C;&#x5148;&#x626B;&#x76EE;&#x5F55;&#xFF0C;&#x518D;&#x8DF3;&#x8BFB;&#x91CD;&#x70B9;&#x7AE0;&#x8282;&#xFF0C;&#x540C;&#x65F6;&#x4F59;&#x5149;&#x626B;&#x89C6;&#x6B63;&#x5728;&#x8BFB;&#x7684;&#x8FD9;&#x4E00;&#x6BB5;&#xFF08;&#x6ED1;&#x52A8;&#x7A97;&#x53E3;&#xFF09;&#x201D;&#x3002;</li>
</ul>
<h3 id="2. &#x786C;&#x4EF6;&#x7B97;&#x672F;&#x5F3A;&#x5EA6; (Arithmetic Intensity)"><a href="#2. &#x786C;&#x4EF6;&#x7B97;&#x672F;&#x5F3A;&#x5EA6; (Arithmetic Intensity)"></a>2. &#x786C;&#x4EF6;&#x7B97;&#x672F;&#x5F3A;&#x5EA6; (Arithmetic Intensity)</h3>
<p>&#x8FD9;&#x662F; DeepSeek &#x56E2;&#x961F;&#x975E;&#x5E38;&#x5F3A;&#x8C03;&#x7684;&#x4E00;&#x4E2A;&#x5E95;&#x5C42;&#x6982;&#x5FF5;&#x3002;</p>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x8BA1;&#x7B97;&#x91CF; (FLOPs) / &#x5185;&#x5B58;&#x8BBF;&#x95EE;&#x91CF; (Bytes)&#x3002;</li>
<li><strong>&#x73B0;&#x72B6;&#xFF1A;</strong> Transformer &#x7684;&#x89E3;&#x7801;&#x9636;&#x6BB5;&#xFF08;Decoding&#xFF09;&#x662F;&#x5178;&#x578B;&#x7684;<strong>&#x5185;&#x5B58;&#x53D7;&#x9650; (Memory-bound)</strong> &#x4EFB;&#x52A1;&#x3002;GPU &#x7B97;&#x529B;&#x8FC7;&#x5269;&#xFF0C;&#x4F46;&#x663E;&#x5B58;&#x5E26;&#x5BBD;&#x4E0D;&#x591F;&#xFF0C;&#x6570;&#x636E;&#x4F9B;&#x4E0D;&#x4E0A;&#x3002;</li>
<li><strong>NSA &#x7684;&#x89E3;&#x6CD5;&#xFF1A;</strong> &#x901A;&#x8FC7;&#x5927;&#x5E45;&#x51CF;&#x5C11;&#x9700;&#x8981;&#x8BFB;&#x53D6;&#x7684; KV Block &#x6570;&#x91CF;&#xFF08;&#x53EA;&#x8BFB; Top-k&#xFF09;&#xFF0C;&#x76F4;&#x63A5;&#x964D;&#x4F4E;&#x4E86;&#x5185;&#x5B58;&#x8BBF;&#x95EE;&#x538B;&#x529B;&#xFF0C;&#x4ECE;&#x800C;&#x91CA;&#x653E;&#x4E86; GPU &#x7684;&#x8BA1;&#x7B97;&#x6F5C;&#x80FD;&#x3002;</li>
</ul>
<h3 id="3. MLA (Multi-Head Latent Attention) &#x662F; NSA &#x5417;&#xFF1F;"><a href="#3. MLA (Multi-Head Latent Attention) &#x662F; NSA &#x5417;&#xFF1F;"></a>3. MLA (Multi-Head Latent Attention) &#x662F; NSA &#x5417;&#xFF1F;</h3>
<p><strong>&#x4E0D;&#x662F;&#xFF0C;&#x5B83;&#x4EEC;&#x662F; DeepSeek &#x7684;&#x4E24;&#x628A;&#x4E0D;&#x540C;&#x7684;&#x201C;&#x5C60;&#x9F99;&#x5200;&#x201D;&#x3002;</strong></p>
<p>&#x5F88;&#x591A;&#x540C;&#x5B66;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x90FD;&#x51FA;&#x81EA; DeepSeek &#x4E14;&#x90FD;&#x6D89;&#x53CA;&#x201C;&#x7701;&#x663E;&#x5B58;&#x201D;&#x800C;&#x6DF7;&#x6DC6;&#x3002;</p>
<ul>
<li>
<p><strong>MLA (DeepSeek-V2/V3 &#x6838;&#x5FC3;)&#xFF1A;</strong></p>
<ul>
<li><strong>&#x672C;&#x8D28;&#xFF1A;</strong> <strong>&#x65E0;&#x635F;&#x538B;&#x7F29;&#x7684;&#x5168;&#x6CE8;&#x610F;&#x529B; (Compressed Full Attention)</strong>&#x3002;</li>
<li><strong>&#x89E3;&#x51B3;&#x95EE;&#x9898;&#xFF1A;</strong> <strong>&#x5B58;&#x4E0D;&#x4E0B;</strong>&#x3002;&#x901A;&#x8FC7;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#xFF08;Low-Rank Compression&#xFF09;&#x628A; KV &#x5411;&#x91CF;&#x538B;&#x5F97;&#x6781;&#x5C0F;&#xFF0C;&#x8BA9; 64k &#x957F;&#x5EA6;&#x7684; KV Cache &#x80FD;&#x585E;&#x8FDB;&#x663E;&#x5B58;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#xFF1A;</strong> <strong>&#x4F9D;&#x7136;&#x662F;&#x5168;&#x91CF;&#x8BA1;&#x7B97;</strong>&#x3002;&#x903B;&#x8F91;&#x4E0A;&#xFF0C;Query &#x8FD8;&#x662F;&#x8981;&#x548C; 64k &#x4E2A;&#xFF08;&#x89E3;&#x538B;&#x540E;&#x7684;&#xFF09;KV &#x4EA4;&#x4E92;&#x3002;&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;&#x4F9D;&#x7136;&#x662F; $O(N^2)$&#x3002;</li>
<li><strong>&#x5173;&#x952E;&#x8BCD;&#xFF1A;</strong> &#x663E;&#x5B58;&#x5BB9;&#x91CF; (Memory Capacity)&#x3001;&#x4F4E;&#x79E9; (Low-Rank)&#x3002;</li>
</ul>
</li>
<li>
<p><strong>NSA (&#x65B0;&#x8BBA;&#x6587;)&#xFF1A;</strong></p>
<ul>
<li><strong>&#x672C;&#x8D28;&#xFF1A;</strong> <strong>&#x6709;&#x635F;&#xFF08;&#x4F46;&#x806A;&#x660E;&#xFF09;&#x7684;&#x7A00;&#x758F;&#x6CE8;&#x610F;&#x529B; (Sparse Attention)</strong>&#x3002;</li>
<li><strong>&#x89E3;&#x51B3;&#x95EE;&#x9898;&#xFF1A;</strong> <strong>&#x7B97;&#x5F97;&#x6162;</strong>&#x3002;&#x5373;&#x4F7F;&#x663E;&#x5B58;&#x653E;&#x5F97;&#x4E0B;&#xFF0C;&#x7B97; 64k &#x6B21;&#x4E58;&#x6CD5;&#x4E5F;&#x592A;&#x6162;&#x4E86;&#x3002;NSA &#x9009;&#x62E9;&#x53EA;&#x548C; 1k &#x4E2A;&#x6700;&#x91CD;&#x8981;&#x7684; KV &#x4EA4;&#x4E92;&#x3002;</li>
<li><strong>&#x8BA1;&#x7B97;&#xFF1A;</strong> <strong>&#x7A00;&#x758F;&#x8BA1;&#x7B97;</strong>&#x3002;Query &#x5FFD;&#x7565;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x201C;&#x65E0;&#x5173;&#x7D27;&#x8981;&#x201D;&#x7684; KV&#x3002;&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;&#x662F; $O(N \\log N)$ &#x6216;&#x66F4;&#x4F4E;&#x3002;</li>
<li><strong>&#x5173;&#x952E;&#x8BCD;&#xFF1A;</strong> &#x8BA1;&#x7B97;&#x6548;&#x7387; (Compute Efficiency)&#x3001;&#x9009;&#x62E9; (Selection)&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>&#x7EC8;&#x6781;&#x5F62;&#x6001;&#x9884;&#x6D4B;&#xFF1A;</strong> &#x672A;&#x6765;&#x7684;&#x6A21;&#x578B;&#xFF08;DeepSeek-V4&#xFF1F;&#xFF09;&#x5F88;&#x53EF;&#x80FD;&#x4F1A;<strong>&#x540C;&#x65F6;&#x4F7F;&#x7528; MLA &#x548C; NSA</strong> &#x2014;&#x2014; &#x7528; MLA &#x8BA9;&#x4F60;&#x80FD;&#x4EE5;&#x6781;&#x4F4E;&#x663E;&#x5B58;&#x4EE3;&#x4EF7;&#x201C;&#x5B58;&#x201D;&#x4E0B; 100 &#x4E07;&#x5B57;&#xFF0C;&#x7528; NSA &#x8BA9;&#x4F60;&#x80FD;&#x4EE5;&#x6781;&#x5FEB;&#x901F;&#x5EA6;&#x201C;&#x8BFB;&#x201D;&#x5B8C;&#x8FD9; 100 &#x4E07;&#x5B57;&#x3002;</p>
<hr>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>NSA &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x7B26;&#x5408; GPU &#x813E;&#x6C14;&#x7684;&#x539F;&#x751F;&#x7A00;&#x758F;&#x6CE8;&#x610F;&#x529B;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>&#x539F;&#x751F; (Native)&#xFF1A;</strong> &#x5B83;&#x662F;&#x8BAD;&#x7EC3;&#x51FA;&#x6765;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x63A8;&#x7406;&#x60F3;&#x8C61;&#x51FA;&#x6765;&#x7684;&#x3002;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x5B66;&#x4F1A;&#x4E86;&#x5FFD;&#x7565;&#x566A;&#x97F3;&#x3002;</li>
<li><strong>&#x5206;&#x5C42; (Hierarchical)&#xFF1A;</strong> &#x5B8F;&#x89C2;&#xFF08;&#x538B;&#x7F29;&#xFF09;+ &#x5FAE;&#x89C2;&#xFF08;&#x9009;&#x62E9;&#xFF09;+ &#x5C40;&#x90E8;&#xFF08;&#x7A97;&#x53E3;&#xFF09;&#xFF0C;&#x4E09;&#x7BA1;&#x9F50;&#x4E0B;&#xFF0C;&#x65E0;&#x6B7B;&#x89D2;&#x8986;&#x76D6;&#x3002;</li>
<li><strong>&#x5DE5;&#x7A0B;&#x5316; (Engineering)&#xFF1A;</strong> &#x4E00;&#x5207;&#x7B97;&#x6CD5;&#x8BBE;&#x8BA1;&#x90FD;&#x4E3A;&#x786C;&#x4EF6;&#x6548;&#x7387;&#x8BA9;&#x8DEF;&#xFF08;Blockwise, Triton Kernel&#xFF09;&#xFF0C;&#x5C06;&#x7406;&#x8BBA;&#x7A00;&#x758F;&#x5EA6;&#x8F6C;&#x5316;&#x4E3A;&#x771F;&#x5B9E;&#x7684;&#x7269;&#x7406;&#x52A0;&#x901F;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2502.11089">&#x8BBA;&#x6587;&#x539F;&#x6587; (ArXiv)</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-30</em></p>
`,n=[{level:2,title:"NSA 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"1. 核心架构组件：三支柱策略",children:[{level:4,title:"A. 压缩注意力 (Token Compression) —— “低分辨率扫全局”",children:[]},{level:4,title:"B. 选择注意力 (Token Selection) —— “高分辨率看重点”",children:[]},{level:4,title:"C. 滑动窗口 (Sliding Window) —— “高分辨率看眼前”",children:[]}]},{level:3,title:"2. 硬件对齐 (Hardware-Aligned) 的魔法",children:[]},{level:3,title:"3. 原生可训练 (Natively Trainable)",children:[]}]},{level:2,title:"深度解构：从网络层视角看变化",children:[{level:3,title:"1. 标准 Attention 层 (Baseline)",children:[]},{level:3,title:"2. NSA Attention 层",children:[{level:4,title:"A. 压缩注意力 (Compression) —— “低分辨率扫全局”",children:[]},{level:4,title:"B. 选择注意力 (Selection) —— “高分辨率看重点”",children:[]},{level:4,title:"C. 滑动窗口 (Window) —— “高分辨率看眼前”",children:[]}]},{level:3,title:"3. 核心差异总结",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[{level:3,title:"1. Ring Attention / FlashAttention",children:[]},{level:3,title:"2. Mamba / SSM (状态空间模型)",children:[]},{level:3,title:"3. 其他稀疏 Attention (H2O, Quest, InfLLM)",children:[]},{level:3,title:"4. Gated Attention (Alibaba)",children:[]}]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 压缩与选择 (Compression & Selection)",children:[]},{level:3,title:"2. 硬件算术强度 (Arithmetic Intensity)",children:[]},{level:3,title:"3. MLA (Multi-Head Latent Attention) 是 NSA 吗？",children:[]}]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
