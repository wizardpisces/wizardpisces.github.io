const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2017-06-12</em></p>
<p>Google &#x56E2;&#x961F;&#x53D1;&#x5E03;&#x7684; <strong>Transformer</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/1706.03762">Attention Is All You Need</a>&#x300B;&#xFF09;&#x662F; AI &#x53D1;&#x5C55;&#x53F2;&#x4E0A;&#x7684;&#x4E00;&#x5EA7;&#x91CC;&#x7A0B;&#x7891;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x5168;&#x65B0;&#x7684;&#x7F51;&#x7EDC;&#x67B6;&#x6784; <strong>Transformer</strong>&#xFF0C;&#x5F7B;&#x5E95;&#x629B;&#x5F03;&#x4E86;&#x5F53;&#x65F6;&#x4E3B;&#x6D41;&#x7684;&#x5FAA;&#x73AF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF08;RNN&#xFF09;&#x548C;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF08;CNN&#xFF09;&#xFF0C;&#x5B8C;&#x5168;&#x4F9D;&#x8D56;**&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF08;Attention Mechanism&#xFF09;**&#x6765;&#x5904;&#x7406;&#x5E8F;&#x5217;&#x6570;&#x636E;&#x3002;&#x8FD9;&#x4E00;&#x67B6;&#x6784;&#x540E;&#x6765;&#x6210;&#x4E3A;&#x4E86; BERT&#x3001;GPT &#x7B49;&#x6240;&#x6709;&#x73B0;&#x4EE3;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x7684;&#x57FA;&#x77F3;&#x3002;</p>
<h2 id="Transformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#Transformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>Transformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;RNN &#x5728;&#x5904;&#x7406;&#x957F;&#x5E8F;&#x5217;&#x65F6;&#x7684;&#x201C;&#x65E0;&#x6CD5;&#x5E76;&#x884C;&#x201D;&#x548C;&#x201C;&#x957F;&#x8DDD;&#x79BB;&#x4F9D;&#x8D56;&#x9057;&#x5FD8;&#x201D;&#x95EE;&#x9898;&#x3002;</strong></p>
<p>&#x5728; Transformer &#x51FA;&#x73B0;&#x4E4B;&#x524D;&#xFF0C;NLP &#x9886;&#x57DF;&#x7684;&#x7EDF;&#x6CBB;&#x8005;&#x662F; LSTM &#x548C; GRU &#x7B49; RNN &#x53D8;&#x4F53;&#x3002;&#x5B83;&#x4EEC;&#x5B58;&#x5728;&#x4E24;&#x4E2A;&#x81F4;&#x547D;&#x7F3A;&#x9677;&#xFF1A;</p>
<ul>
<li><strong>&#x65E0;&#x6CD5;&#x5E76;&#x884C;&#xFF08;&#x8BA1;&#x7B97;&#x6548;&#x7387;&#x4F4E;&#xFF09;&#xFF1A;</strong> RNN &#x5FC5;&#x987B;&#x6309;&#x7167;&#x65F6;&#x95F4;&#x6B65;&#xFF08;t, t+1, ...&#xFF09;&#x4F9D;&#x6B21;&#x8BA1;&#x7B97;&#x3002;&#x5904;&#x7406;&#x7B2C; 100 &#x4E2A;&#x8BCD;&#x4E4B;&#x524D;&#xFF0C;&#x5FC5;&#x987B;&#x5148;&#x7B97;&#x5B8C;&#x524D; 99 &#x4E2A;&#x8BCD;&#x3002;&#x8FD9;&#x5BFC;&#x81F4; GPU &#x7684;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x80FD;&#x529B;&#x65E0;&#x6CD5;&#x53D1;&#x6325;&#xFF0C;&#x8BAD;&#x7EC3;&#x6781;&#x6162;&#x3002;</li>
<li><strong>&#x957F;&#x8DDD;&#x79BB;&#x4F9D;&#x8D56;&#xFF08;&#x8BB0;&#x5FC6;&#x74F6;&#x9888;&#xFF09;&#xFF1A;</strong> &#x867D;&#x7136; LSTM &#x7F13;&#x89E3;&#x4E86;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#xFF0C;&#x4F46;&#x5F53;&#x5E8F;&#x5217;&#x5F88;&#x957F;&#x65F6;&#xFF08;&#x6BD4;&#x5982;&#x4E00;&#x6BB5;&#x51E0;&#x767E;&#x5B57;&#x7684;&#x8BDD;&#xFF09;&#xFF0C;&#x5F00;&#x5934;&#x7684;&#x4FE1;&#x606F;&#x4F20;&#x5230;&#x7ED3;&#x5C3E;&#x65F6;&#x4F9D;&#x7136;&#x4F1A;&#x53D8;&#x5F97;&#x6A21;&#x7CCA;&#x3002;&#x6A21;&#x578B;&#x5F88;&#x96BE;&#x201C;&#x8BB0;&#x4F4F;&#x201D;&#x5F88;&#x4E45;&#x4E4B;&#x524D;&#x51FA;&#x73B0;&#x7684;&#x4E3B;&#x8BED;&#x3002;</li>
</ul>
<p><strong>Transformer &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x5F15;&#x5165;&#x4E86; <strong>Self-Attention&#xFF08;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#xFF09;</strong> &#x673A;&#x5236;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x53EF;&#x4EE5;<strong>&#x4E00;&#x6B21;&#x6027;&#x770B;&#x5230;&#x6240;&#x6709;&#x8BCD;</strong>&#x3002;&#x65E0;&#x8BBA;&#x53E5;&#x5B50;&#x591A;&#x957F;&#xFF0C;&#x7B2C; 1 &#x4E2A;&#x8BCD;&#x548C;&#x7B2C; 100 &#x4E2A;&#x8BCD;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x90FD;&#x662F; 1&#xFF08;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4EA4;&#x4E92;&#xFF09;&#xFF0C;&#x800C;&#x4E14;&#x6240;&#x6709;&#x8BA1;&#x7B97;&#x90FD;&#x53EF;&#x4EE5;&#x5E76;&#x884C;&#x8FDB;&#x884C;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x6781;&#x5176;&#x771F;&#x5B9E;&#xFF0C;&#x662F;&#x5F53;&#x65F6;&#x5236;&#x7EA6; NLP &#x53D1;&#x5C55;&#x7684;&#x6700;&#x5927;&#x8DEF;&#x969C;&#x3002;</strong></p>
<ul>
<li><strong>&#x8BAD;&#x7EC3;&#x65F6;&#x957F;&#xFF1A;</strong> &#x5F53;&#x65F6;&#x7684; SOTA &#x6A21;&#x578B;&#x5728; WMT &#x7FFB;&#x8BD1;&#x6570;&#x636E;&#x96C6;&#x4E0A;&#x9700;&#x8981;&#x8BAD;&#x7EC3;&#x6570;&#x5929;&#x751A;&#x81F3;&#x6570;&#x5468;&#x3002;Transformer &#x5C06;&#x8BAD;&#x7EC3;&#x65F6;&#x95F4;&#x7F29;&#x77ED;&#x4E86;&#x51E0;&#x4E2A;&#x6570;&#x91CF;&#x7EA7;&#xFF08;&#x5728; 8 &#x4E2A; P100 GPU &#x4E0A;&#x4EC5;&#x9700; 3.5 &#x5929;&#xFF09;&#x3002;</li>
<li><strong>&#x6027;&#x80FD;&#x4E0A;&#x9650;&#xFF1A;</strong> RNN &#x7684;&#x4E32;&#x884C;&#x7279;&#x6027;&#x9650;&#x5236;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x6DF1;&#x5EA6;&#x548C;&#x5BBD;&#x5EA6;&#x3002;&#x60F3;&#x628A;&#x6A21;&#x578B;&#x505A;&#x5927;&#xFF08;Scaling&#xFF09;&#xFF0C;&#x5C31;&#x5FC5;&#x987B;&#x89E3;&#x51B3;&#x5E76;&#x884C;&#x8BAD;&#x7EC3;&#x7684;&#x95EE;&#x9898;&#x3002;Transformer &#x7684;&#x51FA;&#x73B0;&#x624D;&#x8BA9;&#x540E;&#x6765; GPT-3 &#x8FD9;&#x79CD;&#x5343;&#x4EBF;&#x53C2;&#x6570;&#x6A21;&#x578B;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x662F; Attention&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x662F; Attention&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x662F; Attention&#xFF1F;</h2>
<p>&#x5176;&#x5B9E;&#x201C;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x201D;&#x5728; 2014 &#x5E74;&#x5C31;&#x5DF2;&#x7ECF;&#x88AB;&#x5F15;&#x5165; RNN&#xFF08;Bahdanau Attention&#xFF09;&#xFF0C;&#x7528;&#x6765;&#x63D0;&#x5347;&#x7FFB;&#x8BD1;&#x8D28;&#x91CF;&#x3002;&#x4F46; Vaswani &#x7B49;&#x4EBA;&#x7684;&#x7A81;&#x7834;&#x6027;&#x601D;&#x7EF4;&#x5728;&#x4E8E;&#xFF1A;<strong>&#x65E2;&#x7136; Attention &#x6548;&#x679C;&#x8FD9;&#x4E48;&#x597D;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x9700;&#x8981; RNN&#xFF1F;</strong></p>
<ol>
<li><strong>&#x5927;&#x80C6;&#x505A;&#x51CF;&#x6CD5;&#xFF1A;</strong> &#x4E4B;&#x524D;&#x7684;&#x6A21;&#x578B;&#x662F; &quot;RNN + Attention&quot;&#x3002;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x76F4;&#x63A5;&#x53BB;&#x6389;&#x4E86; RNN&#xFF0C;&#x8BC1;&#x660E;&#x4E86; <strong>Attention Is All You Need</strong>&#xFF08;&#x53EA;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF09;&#x3002;</li>
<li><strong>&#x786C;&#x4EF6;&#x7684;&#x547C;&#x5524;&#xFF1A;</strong> GPU/TPU &#x64C5;&#x957F;&#x5927;&#x89C4;&#x6A21;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x3002;Transformer &#x7684;&#x6838;&#x5FC3;&#x8BA1;&#x7B97;&#xFF08;$QK^T$&#xFF09;&#x5168;&#x662F;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#xFF0C;&#x5B8C;&#x7F8E;&#x5951;&#x5408;&#x786C;&#x4EF6;&#x7279;&#x6027;&#xFF0C;&#x8BA9;&#x7B97;&#x529B;&#x5229;&#x7528;&#x7387;&#x5927;&#x5E45;&#x63D0;&#x5347;&#x3002;</li>
<li><strong>&#x4FE1;&#x606F;&#x7684;&#x76F4;&#x63A5;&#x901A;&#x8DEF;&#xFF1A;</strong> &#x5728; RNN &#x4E2D;&#xFF0C;&#x4FE1;&#x606F;&#x4F20;&#x9012;&#x9700;&#x8981; $O(N)$ &#x6B65;&#xFF1B;&#x5728; Transformer &#x4E2D;&#xFF0C;&#x4EFB;&#x610F;&#x4E24;&#x4E2A;&#x8BCD;&#x7684;&#x4FE1;&#x606F;&#x4F20;&#x9012;&#x53EA;&#x9700;&#x8981; $O(1)$ &#x6B65;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>Transformer &#x7684;&#x67B6;&#x6784;&#x6784;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x6807;&#x51C6;&#x7684;&#x201C;&#x7F16;&#x7801;&#x5668;-&#x89E3;&#x7801;&#x5668;&#x201D;&#xFF08;Encoder-Decoder&#xFF09;&#x7ED3;&#x6784;&#x3002;&#x5176;&#x6838;&#x5FC3;&#x5728;&#x4E8E;&#x5C06;&#x5E8F;&#x5217;&#x5904;&#x7406;&#x8F6C;&#x5316;&#x4E3A;&#x77E9;&#x9635;&#x8FD0;&#x7B97;&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x9AD8;&#x6548;&#x5E76;&#x884C;&#x3002;</p>
<h3 id="1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;"><a href="#1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;"></a>1. &#x6838;&#x5FC3;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;</h3>
<ul>
<li><strong>&#x81EA;&#x6CE8;&#x610F;&#x529B;&#xFF08;Self-Attention&#xFF09;&#xFF1A;</strong> &#x7075;&#x9B42;&#x6240;&#x5728;&#x3002;&#x6A21;&#x578B;&#x5728;&#x5904;&#x7406;&#x6BCF;&#x4E2A;&#x8BCD;&#x65F6;&#xFF0C;&#x90FD;&#x4F1A;&#x8BA1;&#x7B97;&#x5B83;&#x4E0E;&#x53E5;&#x4E2D;&#x5176;&#x4ED6;&#x6240;&#x6709;&#x8BCD;&#x7684;&#x5173;&#x8054;&#x5EA6;&#xFF0C;&#x6355;&#x6349;&#x4E0A;&#x4E0B;&#x6587;&#x4F9D;&#x8D56;&#x3002;</li>
<li><strong>&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#xFF08;Multi-Head Attention&#xFF09;&#xFF1A;</strong> &#x8D4B;&#x4E88;&#x6A21;&#x578B;&#x201C;&#x591A;&#x89C6;&#x89D2;&#x201D;&#x89C2;&#x5BDF;&#x80FD;&#x529B;&#x3002;&#x4E0D;&#x540C;&#x5934;&#x5173;&#x6CE8;&#x4E0D;&#x540C;&#x7684;&#x8BED;&#x6CD5;&#x6216;&#x8BED;&#x4E49;&#x7279;&#x5F81;&#xFF08;&#x5982;&#x4E00;&#x4E2A;&#x5934;&#x770B;&#x4E3B;&#x8C13;&#x5173;&#x7CFB;&#xFF0C;&#x4E00;&#x4E2A;&#x5934;&#x770B;&#x6307;&#x4EE3;&#x5173;&#x7CFB;&#xFF09;&#xFF0C;&#x6700;&#x540E;&#x62FC;&#x63A5;&#x878D;&#x5408;&#x3002;</li>
<li><strong>&#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#xFF08;Positional Encoding&#xFF09;&#xFF1A;</strong> &#x5F25;&#x8865; Attention &#x65E0;&#x5E8F;&#x6027;&#x7684;&#x201C;&#x8865;&#x4E01;&#x201D;&#x3002;&#x901A;&#x8FC7;&#x6B63;&#x5F26;/&#x4F59;&#x5F26;&#x6CE2;&#x4E3A;&#x6BCF;&#x4E2A;&#x8BCD;&#x6CE8;&#x5165;&#x4F4D;&#x7F6E;&#x4FE1;&#x606F;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x80FD;&#x533A;&#x5206;&#x8BCD;&#x5E8F;&#xFF08;&#x5982; &quot;Tom hit Jerry&quot; vs &quot;Jerry hit Tom&quot;&#xFF09;&#x3002;</li>
<li><strong>&#x524D;&#x9988;&#x7F51;&#x7EDC;&#x4E0E;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF08;FFN &amp; Residual&#xFF09;&#xFF1A;</strong> &#x7ECF;&#x5178;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7EC4;&#x4EF6;&#xFF0C;&#x4FDD;&#x8BC1;&#x7F51;&#x7EDC;&#x80FD;&#x6784;&#x5EFA;&#x5F97;&#x8DB3;&#x591F;&#x6DF1;&#x800C;&#x4E0D;&#x9000;&#x5316;&#x3002;</li>
</ul>
<h3 id="2. &#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4E32;&#x884C;&#x5806;&#x53E0;&#x7684; Layer (Vertical Stacking)"><a href="#2. &#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4E32;&#x884C;&#x5806;&#x53E0;&#x7684; Layer (Vertical Stacking)"></a>2. &#x6DF1;&#x5EA6;&#x89E3;&#x6784;&#xFF1A;&#x4E32;&#x884C;&#x5806;&#x53E0;&#x7684; Layer (Vertical Stacking)</h3>
<p><strong>Layer (= MultiHead Attention + FFN) &#x7684;&#x5806;&#x53E0;&#x662F;&#x4E32;&#x884C;&#x7684;&#xFF0C;&#x800C;&#x975E;&#x5E76;&#x884C;&#x7684;&#x3002;</strong></p>
<p>&#x5728; Transformer &#x67B6;&#x6784;&#x56FE;&#x4E2D;&#x7684; $N \\times$&#xFF08;&#x5982; $N=6$ &#x6216; $N=96$&#xFF09;&#xFF0C;&#x4EE3;&#x8868;&#x7684;&#x662F;<strong>&#x5782;&#x76F4;&#x65B9;&#x5411;&#x7684;&#x6DF1;&#x5EA6;&#x5806;&#x53E0;</strong>&#x3002;</p>
<ul>
<li>
<p><strong>&#x6570;&#x636E;&#x6D41;&#x5411;&#xFF1A;</strong>
$$ \\text{Input} \\to \\text{Layer}_1 \\to \\text{Layer}_2 \\to \\dots \\to \\text{Layer}_N \\to \\text{Output} $$
&#x5FC5;&#x987B;&#x7B49; Layer 1 &#x7B97;&#x5B8C;&#xFF0C;Layer 2 &#x624D;&#x80FD;&#x62FF;&#x5230;&#x8F93;&#x5165;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x7F51;&#x7EDC;&#x8D8A;&#x6DF1;&#xFF0C;&#x63A8;&#x7406;&#x5EF6;&#x8FDF;&#xFF08;Latency&#xFF09;&#x8D8A;&#x9AD8;&#x3002;</p>
</li>
<li>
<p><strong>&#x771F;&#x6B63;&#x7684;&#x5E76;&#x884C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;</strong> Transformer &#x7684;&#x5E76;&#x884C;&#x80FD;&#x529B;&#x4F53;&#x73B0;&#x5728;<strong>&#x5E8F;&#x5217;&#x7EF4;&#x5EA6;&#xFF08;Sequence&#xFF09;<strong>&#x548C;</strong>&#x591A;&#x5934;&#x7EF4;&#x5EA6;&#xFF08;Multi-Head&#xFF09;</strong>&#xFF0C;&#x800C;&#x975E;&#x5C42;&#x7EA7;&#x7EF4;&#x5EA6;&#x3002;</p>
<ul>
<li><strong>Training &#x9636;&#x6BB5;&#xFF1A;</strong> &#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4E00;&#x6B21;&#x6027;&#x628A;&#x4E00;&#x53E5;&#x8BDD;&#x91CC;&#x6240;&#x6709;&#x7684; 1000 &#x4E2A; Token <strong>&#x540C;&#x65F6;</strong>&#x585E;&#x8FDB; Layer 1 &#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#xFF08;&#x56E0;&#x4E3A;&#x6709; Teacher Forcing&#xFF09;&#x3002;</li>
<li><strong>Inference &#x9636;&#x6BB5;&#xFF1A;</strong> &#x7B2C; $t$ &#x4E2A;&#x8BCD;&#x5FC5;&#x987B;&#x7B49;&#x7B2C; $t-1$ &#x4E2A;&#x8BCD;&#x751F;&#x6210;&#x5B8C;&#x624D;&#x80FD;&#x5F00;&#x59CB;&#xFF08;&#x81EA;&#x56DE;&#x5F52;&#xFF09;&#xFF0C;&#x4F46;&#x5728;&#x5904;&#x7406;&#x6BCF;&#x4E00;&#x4E2A;&#x8BCD;&#x7684;&#x5185;&#x90E8;&#xFF0C;Attention &#x7684; 8 &#x4E2A;&#x5934;&#x662F;<strong>&#x5E76;&#x884C;</strong>&#x5DE5;&#x4F5C;&#x7684;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x6700;&#x540E;&#x662F;&#x5982;&#x4F55;&#x9884;&#x6D4B;&#x7684;&#xFF1F;&#xFF08;Training vs Inference&#xFF09;</strong></p>
<ul>
<li><strong>Training &#x65F6;&#xFF08;&#x5168;&#x91CF;&#x8BA1;&#x7B97;&#xFF09;&#xFF1A;</strong> &#x8F93;&#x5165;&#x662F;&#x4E00;&#x6574;&#x53E5;&#x8BDD;&#xFF08;$N$ &#x4E2A;&#x8BCD;&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x4F1A;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x51FA; $N$ &#x4E2A;&#x9690;&#x85CF;&#x72B6;&#x6001; $h_1, \\dots, h_N$&#x3002;&#x7136;&#x540E;&#x628A;&#x8FD9; $N$ &#x4E2A; $h$ <strong>&#x5168;&#x90E8;</strong>&#x62FF;&#x53BB;&#x4E58;&#x4EE5; LM Head&#xFF0C;&#x7B97;&#x51FA;&#x6BCF;&#x4E00;&#x4F4D;&#x7F6E;&#x5BF9;&#x4E0B;&#x4E00;&#x4E2A;&#x8BCD;&#x7684;&#x9884;&#x6D4B;&#x3002;</li>
<li><strong>Inference &#x65F6;&#xFF08;&#x589E;&#x91CF;&#x8BA1;&#x7B97;&#xFF09;&#xFF1A;</strong> &#x6211;&#x4EEC;&#x53EA;&#x5173;&#x5FC3;<strong>&#x6700;&#x540E;&#x4E00;&#x4E2A;</strong>&#x8BCD;&#x751F;&#x6210;&#x4EC0;&#x4E48;&#x3002;&#x6240;&#x4EE5;&#x867D;&#x7136;&#x8F93;&#x5165;&#x5E8F;&#x5217;&#x5F88;&#x957F;&#xFF0C;&#x4F46;&#x6211;&#x4EEC;&#x53EA;&#x53D6;<strong>&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F4D;&#x7F6E;</strong>&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001; $h_{last}$ &#x53BB;&#x4E58;&#x4EE5; LM Head&#xFF0C;&#x7B97;&#x51FA;&#x4E0B;&#x4E00;&#x4E2A;&#x8BCD;&#x7684; Logits&#x3002;&#x4E4B;&#x524D;&#x7684;&#x8BCD;&#x5728; KV Cache &#x91CC;&#x5B58;&#x7740;&#xFF0C;&#x4E0D;&#x7528;&#x91CD;&#x7B97;&#x3002;</li>
</ul>
</li>
</ul>
<h4 id="A. &#x5173;&#x952E;&#x8FDE;&#x63A5;&#xFF1A;Cross-Attention (&#x4EA4;&#x53C9;&#x6CE8;&#x610F;&#x529B;)"><a href="#A. &#x5173;&#x952E;&#x8FDE;&#x63A5;&#xFF1A;Cross-Attention (&#x4EA4;&#x53C9;&#x6CE8;&#x610F;&#x529B;)"></a>A. &#x5173;&#x952E;&#x8FDE;&#x63A5;&#xFF1A;Cross-Attention (&#x4EA4;&#x53C9;&#x6CE8;&#x610F;&#x529B;)</h4>
<p>&#x9664;&#x4E86;&#x5904;&#x7406;&#x5E8F;&#x5217;&#x5185;&#x90E8;&#x5173;&#x7CFB;&#x7684; Self-Attention&#xFF0C;Encoder &#x548C; Decoder &#x4E4B;&#x95F4;&#x901A;&#x8FC7; <strong>Cross-Attention</strong> &#x8FDB;&#x884C;&#x6865;&#x63A5;&#xFF1A;</p>
<ul>
<li><strong>&#x4EA4;&#x4E92;&#x65B9;&#x5411;&#xFF1A;</strong> <strong>Decoder &#x5173;&#x6CE8; Encoder</strong>&#x3002;</li>
<li><strong>Query (Q)&#xFF1A;</strong> &#x6765;&#x81EA; <strong>Decoder</strong>&#x3002;&#x610F;&#x4E3A;&#xFF1A;&#x201C;&#x4E3A;&#x4E86;&#x9884;&#x6D4B;&#x4E0B;&#x4E00;&#x4E2A;&#x8BCD;&#xFF0C;&#x6211;&#x9700;&#x8981;&#x5173;&#x6CE8;&#x6E90;&#x53E5;&#x5B50;&#x7684;&#x54EA;&#x4E9B;&#x90E8;&#x5206;&#xFF1F;&#x201D;</li>
<li><strong>Key (K) &amp; Value (V)&#xFF1A;</strong> &#x6765;&#x81EA; <strong>Encoder</strong>&#x3002;&#x610F;&#x4E3A;&#xFF1A;&#x201C;&#x8FD9;&#x662F;&#x6E90;&#x53E5;&#x5B50;&#x7684;&#x5B8C;&#x6574;&#x4E0A;&#x4E0B;&#x6587;&#x7279;&#x5F81;&#x3002;&#x201D;</li>
<li><strong>&#x76F4;&#x89C2;&#x6A21;&#x578B;&#xFF1A;</strong> &#x7C7B;&#x4F3C;&#x4E8E;<strong>&#x5F00;&#x5377;&#x8003;&#x8BD5;</strong>&#x3002;Decoder&#xFF08;&#x8003;&#x751F;&#xFF09;&#x62FF;&#x7740;&#x8BD5;&#x5377;&#x4E0A;&#x7684;&#x95EE;&#x9898;&#xFF08;Query&#xFF09;&#xFF0C;&#x53BB; Encoder&#xFF08;&#x6559;&#x79D1;&#x4E66;&#xFF09;&#x4E2D;&#x68C0;&#x7D22;&#x76F8;&#x5173;&#x7684;&#x77E5;&#x8BC6;&#x70B9;&#xFF08;Key/Value&#xFF09;&#x6765;&#x751F;&#x6210;&#x7B54;&#x6848;&#x3002;</li>
</ul>
<h4 id="B. &#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;&#x57FA;&#x4E8E; Teacher Forcing &#x7684;&#x5E76;&#x884C;&#x5316;"><a href="#B. &#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;&#x57FA;&#x4E8E; Teacher Forcing &#x7684;&#x5E76;&#x884C;&#x5316;"></a>B. &#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;&#x57FA;&#x4E8E; Teacher Forcing &#x7684;&#x5E76;&#x884C;&#x5316;</h4>
<p><strong>&#x6838;&#x5FC3;&#x8BEF;&#x533A;&#x6F84;&#x6E05;&#xFF1A;&#x6240;&#x8C13;&#x7684;&#x201C;&#x5E76;&#x884C;&#x201D;&#x5230;&#x5E95;&#x6307;&#x4EC0;&#x4E48;&#xFF1F;</strong>
&#x8FD9;&#x91CC;&#x7684;&#x5E76;&#x884C;<strong>&#x5E76;&#x975E;</strong>&#x6307; Encoder &#x548C; Decoder &#x4E92;&#x4E0D;&#x4F9D;&#x8D56;&#x5730;&#x540C;&#x65F6;&#x8BA1;&#x7B97;&#xFF08;&#x5B9E;&#x9645;&#x4E0A; Decoder &#x5FC5;&#x987B;&#x7B49;&#x5F85; Encoder &#x8F93;&#x51FA;&#xFF09;&#x3002;Transformer &#x7684;&#x6838;&#x5FC3;&#x7A81;&#x7834;&#x5728;&#x4E8E;<strong>&#x5E8F;&#x5217;&#x7EF4;&#x5EA6;&#xFF08;Time Step&#xFF09;&#x7684;&#x5E76;&#x884C;&#x5316;</strong>&#xFF0C;&#x5F7B;&#x5E95;&#x6D88;&#x9664;&#x4E86; RNN &#x7684;&#x65F6;&#x5E8F;&#x4F9D;&#x8D56;&#x3002;</p>
<p>&#x7531;&#x4E8E;&#x8BAD;&#x7EC3;&#x65F6;&#x5DF2;&#x77E5;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#xFF08;Ground Truth&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x91C7;&#x7528; <strong>Teacher Forcing</strong> &#x7B56;&#x7565;&#xFF1A;</p>
<ol>
<li><strong>Encoder &#x524D;&#x5411;&#x8BA1;&#x7B97;&#xFF1A;</strong> &#x8F93;&#x5165;&#x5B8C;&#x6574;&#x6E90;&#x5E8F;&#x5217;&#xFF0C;&#x4E00;&#x6B21;&#x6027;&#x8BA1;&#x7B97;&#x51FA;&#x7279;&#x5F81;&#x77E9;&#x9635;&#xFF08;K, V&#xFF09;&#x3002;</li>
<li><strong>Decoder &#x5E76;&#x884C;&#x9884;&#x6D4B;&#xFF1A;</strong> &#x5C06;&#x6B63;&#x786E;&#x7684;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7ECF; Mask &#x5904;&#x7406;&#x540E;&#xFF0C;<strong>&#x4E00;&#x6B21;&#x6027;</strong>&#x8F93;&#x5165; Decoder&#x3002;
<ul>
<li>&#x8BA1;&#x7B97;&#x4F4D;&#x7F6E; 10 &#x7684; Loss&#xFF08;&#x9884;&#x6D4B;&#x7B2C; 11 &#x4E2A;&#x8BCD;&#xFF09;&#x65F6;&#xFF0C;&#x76F4;&#x63A5;&#x5229;&#x7528;&#x5DF2;&#x77E5;&#x7684;&#x6B63;&#x786E;&#x524D; 10 &#x4E2A;&#x8BCD;&#x4F5C;&#x4E3A;&#x8F93;&#x5165;&#x3002;</li>
<li><strong>&#x7ED3;&#x679C;&#xFF1A;</strong> &#x6574;&#x4E2A;&#x5E8F;&#x5217;&#x6240;&#x6709;&#x4F4D;&#x7F6E;&#x7684;&#x6982;&#x7387;&#x8BA1;&#x7B97;&#x548C; Loss &#x8BA1;&#x7B97;&#xFF0C;&#x88AB;&#x8F6C;&#x5316;&#x4E3A;&#x4E00;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#xFF0C;<strong>&#x5728;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x5185;&#x540C;&#x65F6;&#x5B8C;&#x6210;</strong>&#x3002;</li>
</ul>
</li>
</ol>
<blockquote>
<p><strong>&#x7591;&#x95EE;&#xFF1A;&#x8054;&#x5408;&#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#x5BF9;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x4F1A;&#x51B2;&#x7A81;&#x5417;&#xFF1F;</strong></p>
<p>&#x8FD9;&#x5E76;&#x975E;&#x51B2;&#x7A81;&#xFF0C;&#x800C;&#x662F;<strong>&#x68AF;&#x5EA6;&#x7684;&#x805A;&#x5408;&#xFF08;Gradient Aggregation&#xFF09;</strong>&#x3002;&#x5728;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x4E2D;&#xFF0C;Encoder &#x63A5;&#x6536;&#x5230;&#x7684;&#x68AF;&#x5EA6;&#x662F; Decoder &#x6240;&#x6709;&#x4F4D;&#x7F6E;&#x56DE;&#x4F20;&#x68AF;&#x5EA6;&#x7684;<strong>&#x5411;&#x91CF;&#x548C;</strong>&#x3002;&#x6A21;&#x578B;&#x5BFB;&#x627E;&#x7684;&#x662F;<strong>&#x5168;&#x5C40;&#x6700;&#x4F18;&#x89E3;</strong>&#xFF0C;&#x8BA9;&#x53C2;&#x6570;&#x5411;&#x7740;&#x201C;&#x4F7F;&#x6574;&#x4F53; Loss &#x6700;&#x5C0F;&#x201D;&#x7684;&#x5E73;&#x8861;&#x65B9;&#x5411;&#x66F4;&#x65B0;&#x3002;</p>
</blockquote>
<h4 id="C. &#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x4E32;&#x884C;&#x7684;&#x81EA;&#x56DE;&#x5F52; (Autoregressive)"><a href="#C. &#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x4E32;&#x884C;&#x7684;&#x81EA;&#x56DE;&#x5F52; (Autoregressive)"></a>C. &#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x4E32;&#x884C;&#x7684;&#x81EA;&#x56DE;&#x5F52; (Autoregressive)</h4>
<p>&#x5728;&#x5B9E;&#x9645;&#x63A8;&#x7406;&#x65F6;&#xFF0C;&#x6CA1;&#x6709;&#x6807;&#x51C6;&#x7B54;&#x6848;&#xFF0C;&#x6A21;&#x578B;&#x5FC5;&#x987B;<strong>&#x9010;&#x6B65;&#x751F;&#x6210;</strong>&#xFF1A;</p>
<ol>
<li><strong>Encoder &#x9884;&#x8BA1;&#x7B97;&#xFF1A;</strong> &#x5904;&#x7406;&#x6E90;&#x5E8F;&#x5217;&#xFF0C;&#x751F;&#x6210; K, V &#x77E9;&#x9635;&#xFF08;&#x590D;&#x7528;&#xFF09;&#x3002;</li>
<li><strong>Decoder &#x5FAA;&#x73AF;&#x751F;&#x6210;&#xFF1A;</strong>
<ul>
<li><strong>Step 1&#xFF1A;</strong> &#x8F93;&#x5165; <code>&lt;Start&gt;</code>&#xFF0C;&#x7ED3;&#x5408; K/V&#xFF0C;&#x9884;&#x6D4B; <code>I</code>&#x3002;</li>
<li><strong>Step 2&#xFF1A;</strong> &#x5C06; <code>I</code> &#x62FC;&#x63A5;&#x5230;&#x8F93;&#x5165;&#xFF0C;&#x8F93;&#x5165; <code>&lt;Start&gt; I</code>&#xFF0C;&#x7ED3;&#x5408; K/V&#xFF0C;&#x9884;&#x6D4B; <code>love</code>&#x3002;</li>
<li>... &#x5FAA;&#x73AF;&#x76F4;&#x81F3; <code>&lt;End&gt;</code>&#x3002;</li>
</ul>
</li>
</ol>
<p><strong>&#x7ED3;&#x8BBA;&#xFF1A;</strong> &#x8BAD;&#x7EC3;&#x662F;<strong>&#x5E76;&#x884C;</strong>&#x7684;&#xFF08;&#x9AD8;&#x6548;&#xFF09;&#xFF0C;&#x63A8;&#x7406;&#x662F;<strong>&#x4E32;&#x884C;</strong>&#x7684;&#xFF08;&#x9010;&#x6B65;&#xFF09;&#x3002;</p>
<h3 id="3. &#x7279;&#x6B8A;&#x4F18;&#x5316;&#xFF1A;LayerNorm&#x3001;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x4E0E;&#x6743;&#x91CD;&#x7ED1;&#x5B9A;"><a href="#3. &#x7279;&#x6B8A;&#x4F18;&#x5316;&#xFF1A;LayerNorm&#x3001;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x4E0E;&#x6743;&#x91CD;&#x7ED1;&#x5B9A;"></a>3. &#x7279;&#x6B8A;&#x4F18;&#x5316;&#xFF1A;LayerNorm&#x3001;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x4E0E;&#x6743;&#x91CD;&#x7ED1;&#x5B9A;</h3>
<h4 id="A. LayerNorm&#xFF1A;&#x6A21;&#x578B;&#x7684;&#x201C;&#x7A33;&#x538B;&#x5668;&#x201D;"><a href="#A. LayerNorm&#xFF1A;&#x6A21;&#x578B;&#x7684;&#x201C;&#x7A33;&#x538B;&#x5668;&#x201D;"></a>A. LayerNorm&#xFF1A;&#x6A21;&#x578B;&#x7684;&#x201C;&#x7A33;&#x538B;&#x5668;&#x201D;</h4>
<p>&#x5728; Transformer &#x7684;&#x6BCF;&#x4E2A; Block &#x4E2D;&#xFF0C;&#x65E0;&#x8BBA;&#x662F; Attention &#x8FD8;&#x662F; FFN&#xFF0C;&#x5B83;&#x4EEC;&#x7684;&#x8F93;&#x5165;&#x524D;&#xFF08;Pre-Norm&#xFF09;&#x6216;&#x8F93;&#x51FA;&#x540E;&#xFF08;Post-Norm&#xFF09;&#x90FD;&#x4F1A;&#x63A5;&#x4E00;&#x4E2A; <strong>Layer Normalization (LayerNorm)</strong>&#x3002;</p>
<ul>
<li>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x5F52;&#x4E00;&#x5316;&#xFF1F;</strong></p>
<ul>
<li>&#x6DF1;&#x5EA6;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x7684;&#x6570;&#x636E;&#x6D41;&#x5C31;&#x50CF;&#x6C34;&#x6D41;&#xFF0C;&#x6D41;&#x7ECF;&#x6BCF;&#x4E00;&#x5C42;&#x65F6;&#xFF0C;&#x6570;&#x503C;&#x7684;**&#x5747;&#x503C;&#xFF08;Mean&#xFF09;<strong>&#x548C;</strong>&#x65B9;&#x5DEE;&#xFF08;Variance&#xFF09;**&#x90FD;&#x4F1A;&#x53D1;&#x751F;&#x5267;&#x70C8;&#x6296;&#x52A8;&#xFF08;Internal Covariate Shift&#xFF09;&#x3002;</li>
<li>&#x5982;&#x679C;&#x4E0D;&#x52A0;&#x63A7;&#x5236;&#xFF0C;&#x6570;&#x503C;&#x53EF;&#x80FD;&#x5728;&#x67D0;&#x4E00;&#x5C42;&#x7A81;&#x7136;&#x7206;&#x70B8;&#xFF08;&#x68AF;&#x5EA6;&#x7206;&#x70B8;&#xFF09;&#x6216;&#x6D88;&#x5931;&#xFF08;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#xFF09;&#xFF0C;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x6839;&#x672C;&#x7EC3;&#x4E0D;&#x8D77;&#x6765;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>LayerNorm &#x505A;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</strong></p>
<ul>
<li>&#x5B83;&#x5F3A;&#x5236;&#x628A;&#x6BCF;&#x4E00;&#x5C42;&#x8F93;&#x5165;&#x7684;&#x5411;&#x91CF;&#x62C9;&#x56DE;&#x5230;&#x4E00;&#x4E2A;**&#x201C;&#x5747;&#x503C;&#x4E3A; 0&#xFF0C;&#x65B9;&#x5DEE;&#x4E3A; 1&#x201D;**&#x7684;&#x6807;&#x51C6;&#x6B63;&#x6001;&#x5206;&#x5E03;&#x3002;</li>
<li>&#x8FD9;&#x5C31;&#x597D;&#x6BD4;&#x6BCF;&#x6B21;&#x8003;&#x8BD5;&#x524D;&#xFF0C;&#x90FD;&#x5148;&#x628A;&#x5927;&#x5BB6;&#x7684;&#x5377;&#x9762;&#x5206;&#x6298;&#x7B97;&#x6210;&#x6807;&#x51C6;&#x5206;&#xFF0C;&#x786E;&#x4FDD;&#x4E0D;&#x540C;&#x79D1;&#x76EE;&#xFF08;&#x4E0D;&#x540C;&#x5C42;&#xFF09;&#x4E4B;&#x95F4;&#x7684;&#x5206;&#x6570;&#x5177;&#x6709;&#x53EF;&#x6BD4;&#x6027;&#x3002;</li>
<li><strong>&#x6548;&#x679C;&#xFF1A;</strong> &#x6781;&#x5927;&#x5730;&#x7A33;&#x5B9A;&#x4E86;&#x68AF;&#x5EA6;&#x7684;&#x4F20;&#x64AD;&#xFF0C;&#x8BA9;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x7528;&#x66F4;&#x5927;&#x7684;&#x5B66;&#x4E60;&#x7387;&#x53BB;&#x8BAD;&#x7EC3;&#x66F4;&#x6DF1;&#x7684;&#x6A21;&#x578B;&#x3002;&#x6CA1;&#x6709;&#x5B83;&#xFF0C;BERT &#x548C; GPT &#x8FD9;&#x79CD;&#x767E;&#x5C42;&#x6A21;&#x578B;&#x6839;&#x672C;&#x8DD1;&#x4E0D;&#x8D77;&#x6765;&#x3002;</li>
</ul>
</li>
</ul>
<h4 id="B. &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5; (Residual Connection)&#xFF1A;&#x4FE1;&#x606F;&#x7684;&#x201C;&#x9AD8;&#x901F;&#x516C;&#x8DEF;&#x201D;"><a href="#B. &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5; (Residual Connection)&#xFF1A;&#x4FE1;&#x606F;&#x7684;&#x201C;&#x9AD8;&#x901F;&#x516C;&#x8DEF;&#x201D;"></a>B. &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5; (Residual Connection)&#xFF1A;&#x4FE1;&#x606F;&#x7684;&#x201C;&#x9AD8;&#x901F;&#x516C;&#x8DEF;&#x201D;</h4>
<p>&#x5728;&#x67B6;&#x6784;&#x56FE;&#x4E2D;&#xFF0C;&#x4F60;&#x4F1A;&#x770B;&#x5230;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x6709;&#x4E00;&#x4E2A; $Add \\ &amp; \\ Norm$ &#x7684;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x4E2D; $Add$ &#x6307;&#x7684;&#x5C31;&#x662F;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF1A;
$$ Output = F(x) + x $$</p>
<ul>
<li>
<p><strong>&#x5B83;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</strong></p>
<ul>
<li>&#x5728;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x4E2D;&#xFF0C;&#x4FE1;&#x53F7;&#x4F20;&#x5F97;&#x8D8A;&#x6DF1;&#x8D8A;&#x5BB9;&#x6613;&#x201C;&#x5931;&#x771F;&#x201D;&#x6216;&#x201C;&#x8870;&#x51CF;&#x201D;&#x3002;&#x5C31;&#x50CF;&#x4F20;&#x8BDD;&#x6E38;&#x620F;&#xFF0C;&#x4F20;&#x5230;&#x7B2C; 100 &#x4E2A;&#x4EBA;&#x65F6;&#xFF0C;&#x539F;&#x59CB;&#x4FE1;&#x606F;&#x53EF;&#x80FD;&#x65E9;&#x5C31;&#x9762;&#x76EE;&#x5168;&#x975E;&#x4E86;&#x3002;</li>
<li>&#x5728;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x65F6;&#xFF0C;&#x68AF;&#x5EA6;&#x7ECF;&#x8FC7;&#x5C42;&#x5C42;&#x4E58;&#x6CD5;&#xFF0C;&#x5F88;&#x5BB9;&#x6613;&#x53D8;&#x6210; 0&#xFF08;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#xFF09;&#xFF0C;&#x5BFC;&#x81F4;&#x524D;&#x9762;&#x7684;&#x5C42;&#x6839;&#x672C;&#x6536;&#x4E0D;&#x5230;&#x66F4;&#x65B0;&#x4FE1;&#x53F7;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x5DE5;&#x4F5C;&#x7684;&#xFF1F;</strong></p>
<ul>
<li>&#x5B83;&#x5728;&#x590D;&#x6742;&#x7684;&#x53D8;&#x6362;&#x7F51;&#x7EDC; $F(x)$ &#x65C1;&#x8FB9;&#xFF0C;&#x4FEE;&#x4E86;&#x4E00;&#x6761;<strong>&#x76F4;&#x901A;&#x7684;&#x9AD8;&#x901F;&#x516C;&#x8DEF;</strong>&#xFF08;&#x76F4;&#x63A5;&#x52A0; $x$&#xFF09;&#x3002;</li>
<li>&#x8FD9;&#x4FDD;&#x8BC1;&#x4E86;&#x81F3;&#x5C11;&#x6709; $100%$ &#x7684;&#x539F;&#x59CB;&#x4FE1;&#x606F;&#x80FD;&#x65E0;&#x635F;&#x901A;&#x8FC7;&#x8FD9;&#x4E00;&#x5C42;&#x3002;&#x6A21;&#x578B;&#x53EA;&#x9700;&#x8981;&#x53BB;&#x5B66;&#x4E60;&#x90A3;&#x4E9B;&#x201C;&#x53D8;&#x5316;&#x7684;&#x6B8B;&#x5DEE;&#x90E8;&#x5206;&#x201D;&#xFF08;Residual&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4ECE;&#x5934;&#x5B66;&#x4E60;&#x6574;&#x4E2A;&#x6620;&#x5C04;&#x3002;</li>
<li><strong>&#x6548;&#x679C;&#xFF1A;</strong> &#x8BA9;&#x7F51;&#x7EDC;&#x7406;&#x8BBA;&#x4E0A;&#x53EF;&#x4EE5;&#x65E0;&#x9650;&#x5806;&#x53E0;&#x6DF1;&#x5EA6;&#x3002;&#x8457;&#x540D;&#x7684; ResNet &#x8BBA;&#x6587;&#x8BC1;&#x660E;&#xFF0C;&#x6709;&#x4E86;&#x5B83;&#xFF0C;&#x8BAD;&#x7EC3; 1000 &#x5C42;&#x7F51;&#x7EDC;&#x90FD;&#x6210;&#x4E3A;&#x4E86;&#x53EF;&#x80FD;&#x3002;</li>
</ul>
</li>
</ul>
<h4 id="C. &#x6743;&#x91CD;&#x7ED1;&#x5B9A; (Weight Tying)"><a href="#C. &#x6743;&#x91CD;&#x7ED1;&#x5B9A; (Weight Tying)"></a>C. &#x6743;&#x91CD;&#x7ED1;&#x5B9A; (Weight Tying)</h4>
<p>&#x5B83;&#x5BF9;&#x8282;&#x7701;&#x53C2;&#x6570;&#x81F3;&#x5173;&#x91CD;&#x8981;&#x3002;</p>
<ul>
<li>
<p><strong>&#x95EE;&#x9898;&#x80CC;&#x666F;&#xFF1A;</strong>
Transformer &#x7684;&#x201C;&#x51FA;&#x53E3;&#x201D;&#x662F;&#x4E00;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x7EBF;&#x6027;&#x5C42;&#xFF08;LM Head&#xFF09;&#xFF0C;&#x5C06; $d_{model}$ &#x7EF4;&#x5411;&#x91CF;&#x6620;&#x5C04;&#x56DE; $V$&#xFF08;&#x8BCD;&#x8868;&#x5927;&#x5C0F;&#xFF09;&#x7EF4;&#x7684;&#x6982;&#x7387;&#x5206;&#x5E03;&#x3002;
$$ 4096 \\times 100,000 \\approx 4 \\text{&#x4EBF;&#x53C2;&#x6570;} $$
&#x8FD9;&#x4E00;&#x5C42;&#x5982;&#x679C;&#x4E0D;&#x4F18;&#x5316;&#xFF0C;&#x53EF;&#x80FD;&#x5360;&#x636E;&#x6A21;&#x578B;&#x4E00;&#x534A;&#x4EE5;&#x4E0A;&#x7684;&#x53C2;&#x6570;&#x3002;</p>
</li>
<li>
<p><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;</strong>
&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x53D1;&#x73B0;&#xFF0C;<strong>Embedding &#x77E9;&#x9635;</strong>&#xFF08;&#x628A;&#x8BCD; ID &#x53D8;&#x6210;&#x5411;&#x91CF;&#xFF09;&#x548C; <strong>LM Head &#x77E9;&#x9635;</strong>&#xFF08;&#x628A;&#x5411;&#x91CF;&#x53D8;&#x6210;&#x8BCD; ID &#x6982;&#x7387;&#xFF09;&#x5176;&#x5B9E;&#x662F;&#x5728;&#x505A;<strong>&#x4E92;&#x9006;</strong>&#x7684;&#x4E8B;&#x60C5;&#x3002;</p>
<ul>
<li><strong>Input Embedding ($W_E$):</strong> <code>ID -&gt; Vector</code>&#x3002;&#x6BCF;&#x4E00;&#x884C;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x8BCD;&#x7684;&#x201C;&#x8BED;&#x4E49;&#x5750;&#x6807;&#x201D;&#x3002;</li>
<li><strong>Output Head ($W_{out}$):</strong> <code>Vector -&gt; ID Logits</code>&#x3002;&#x6BCF;&#x4E00;&#x5217;&#x5176;&#x5B9E;&#x4E5F;&#x662F;&#x5728;&#x5224;&#x65AD;&#x5411;&#x91CF;&#x662F;&#x5426;&#x7B26;&#x5408;&#x8BE5;&#x8BCD;&#x7684;&#x201C;&#x8BED;&#x4E49;&#x5750;&#x6807;&#x201D;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x64CD;&#x4F5C;&#x624B;&#x6CD5;&#xFF1A;</strong>
&#x76F4;&#x63A5;&#x5F3A;&#x5236;&#x8BA9;&#x8F93;&#x51FA;&#x77E9;&#x9635;&#x7B49;&#x4E8E;&#x8F93;&#x5165;&#x77E9;&#x9635;&#x7684;&#x8F6C;&#x7F6E;&#xFF1A;
$$ W_{out} = W_E^T $$</p>
</li>
<li>
<p><strong>&#x771F;&#x7684;&#x7701;&#x6389;&#x4E86;&#x5417;&#xFF1F;</strong>
<strong>&#x662F;&#x7684;&#xFF0C;&#x7269;&#x7406;&#x4E0A;&#x7701;&#x6389;&#x4E86; $W_{out}$ &#x8FD9;&#x4E2A;&#x77E9;&#x9635;&#x3002;</strong></p>
<ul>
<li><strong>&#x4E0D;&#x7ED1;&#x5B9A;&#xFF1A;</strong> &#x663E;&#x5B58;&#x91CC;&#x8981;&#x5B58;&#x4E24;&#x4E2A;&#x5DE8;&#x5927;&#x7684;&#x77E9;&#x9635;&#xFF1A;$W_{in}$ (&#x5165;&#x53E3;) &#x548C; $W_{out}$ (&#x51FA;&#x53E3;)&#x3002;</li>
<li><strong>&#x7ED1;&#x5B9A;&#xFF1A;</strong> &#x663E;&#x5B58;&#x91CC;&#x53EA;&#x5B58;&#x4E00;&#x4E2A; $W_{in}$&#x3002;&#x8BA1;&#x7B97;&#x8F93;&#x51FA;&#x65F6;&#xFF0C;&#x76F4;&#x63A5;&#x5C06; $W_{in}$ &#x77E9;&#x9635;<strong>&#x8F6C;&#x7F6E;&#xFF08;Transpose&#xFF09;</strong> &#x540E;&#x62FF;&#x6765;&#x7528;&#x3002;</li>
<li><strong>&#x6539;&#x53D8;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</strong> &#x6A21;&#x578B;&#x7684;&#x6700;&#x540E;&#x4E00;&#x5C42;&#xFF08;LM Head&#xFF09;&#x5728;&#x7269;&#x7406;&#x4E0A;<strong>&#x6D88;&#x5931;&#x4E86;</strong>&#xFF0C;&#x53D8;&#x6210;&#x4E86;&#x5BF9;&#x7B2C;&#x4E00;&#x5C42;&#xFF08;Embedding&#xFF09;&#x7684;<strong>&#x590D;&#x7528;&#x5F15;&#x7528;</strong>&#x3002;</li>
<li><strong>&#x6548;&#x679C;&#xFF1A;</strong> &#x8FDB;&#x95E8;&#x9886;&#x7684;&#x5361;&#xFF08;Embedding&#xFF09;&#xFF0C;&#x51FA;&#x95E8;&#x76F4;&#x63A5;&#x5237;&#x540C;&#x4E00;&#x5F20;&#x5361;&#xFF08;Tying&#xFF09;&#x7ED3;&#x7B97;&#x3002;&#x4E0D;&#x4EC5;&#x7701;&#x4E86;&#x4E00;&#x534A;&#x53C2;&#x6570;&#xFF0C;&#x8FD8;&#x8BA9;&#x201C;&#x9884;&#x6D4B;&#x8BCD;&#x201D;&#x548C;&#x201C;&#x7406;&#x89E3;&#x8BCD;&#x201D;&#x7684;&#x4EFB;&#x52A1;&#x5171;&#x540C;&#x6253;&#x78E8;&#x540C;&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#xFF0C;&#x63D0;&#x5347;&#x4E86; Embedding &#x8D28;&#x91CF;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x600E;&#x4E48;&#x77E5;&#x9053;&#x5BF9;&#x5E94;&#x54EA;&#x4E2A;&#x8BCD;&#xFF1F;</strong>
&#x7531;&#x4E8E;&#x6211;&#x4EEC;&#x590D;&#x7528;&#x7684;&#x662F; $W_E$&#xFF0C;&#x800C; $W_E$ &#x7684;&#x7B2C; $i$ &#x884C;&#x5BF9;&#x5E94;&#x7684;&#x5C31;&#x662F;&#x8BCD;&#x8868;&#x4E2D;&#x7B2C; $i$ &#x4E2A;&#x8BCD;&#xFF08;&#x6BD4;&#x5982; &quot;apple&quot;&#xFF09;&#x3002;
&#x6240;&#x4EE5;&#x8BA1;&#x7B97; $h \\cdot W_E^T$ &#x5F97;&#x5230;&#x7684;&#x5411;&#x91CF;&#x4E2D;&#xFF0C;&#x7B2C; $i$ &#x4E2A;&#x6570;&#x503C;&#x81EA;&#x7136;&#x5C31;&#x4EE3;&#x8868;&#x4E86;&#x6A21;&#x578B;&#x5BF9;&#x7B2C; $i$ &#x4E2A;&#x8BCD;&#x7684;&#x6253;&#x5206;&#x3002;</p>
</li>
</ul>
<hr>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>&#x5728; 2017 &#x5E74;&#xFF0C;Transformer &#x5C31;&#x662F;<strong>&#x6700;&#x4F18;&#x89E3;</strong>&#x3002;&#x800C;&#x5728;&#x4ECA;&#x5929;&#xFF08;2026&#x5E74;&#xFF09;&#xFF0C;&#x867D;&#x7136;&#x5B83;&#x4F9D;&#x7136;&#x662F;&#x9738;&#x4E3B;&#xFF0C;&#x4F46;&#x4E5F;&#x51FA;&#x73B0;&#x4E86;&#x6311;&#x6218;&#x8005;&#xFF1A;</p>
<ul>
<li><strong>&#x7EBF;&#x6027; Attention (Linear Transformer)&#xFF1A;</strong> &#x8BD5;&#x56FE;&#x5C06;&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;&#x4ECE; $O(N^2)$ &#x964D;&#x4E3A; $O(N)$&#x3002;</li>
<li><strong>SSM / Mamba&#xFF1A;</strong> &#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x6A21;&#x578B;&#xFF0C;&#x8BD5;&#x56FE;&#x7ED3;&#x5408; RNN &#x7684;&#x63A8;&#x7406;&#x6548;&#x7387;&#xFF08;$O(1)$ &#x5185;&#x5B58;&#xFF09;&#x548C; Transformer &#x7684;&#x8BAD;&#x7EC3;&#x5E76;&#x884C;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>MoE (Mixture of Experts)&#xFF1A;</strong> &#x5982; DeepSeek-V3&#xFF0C;&#x5F15;&#x5165;&#x7A00;&#x758F;&#x8BA1;&#x7B97;&#xFF0C;&#x5728;&#x4FDD;&#x6301; Transformer &#x67B6;&#x6784;&#x57FA;&#x7840;&#x7684;&#x540C;&#x65F6;&#x5927;&#x5E45;&#x63D0;&#x5347;&#x8BA1;&#x7B97;&#x6548;&#x7387;&#x3002;</li>
</ul>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x81EA;&#x6CE8;&#x610F;&#x529B; (Self-Attention)"><a href="#1. &#x81EA;&#x6CE8;&#x610F;&#x529B; (Self-Attention)"></a>1. &#x81EA;&#x6CE8;&#x610F;&#x529B; (Self-Attention)</h3>
<p>Transformer &#x629B;&#x5F03; RNN &#x7684;&#x5E95;&#x6C14;&#x3002;</p>
<ul>
<li><strong>&#x539F;&#x7406;&#xFF1A;</strong> &#x8F93;&#x5165;&#x4E00;&#x53E5;&#x8BDD;&#xFF0C;&#x6BCF;&#x4E2A;&#x8BCD;&#x751F;&#x6210;&#x4E09;&#x4E2A;&#x5411;&#x91CF;&#xFF1A;<strong>Query (&#x67E5;&#x8BE2;)</strong>&#x3001;<strong>Key (&#x952E;)</strong>&#x3001;<strong>Value (&#x503C;)</strong>&#x3002;</li>
<li><strong>&#x6BD4;&#x55BB;&#xFF1A;</strong> &#x6863;&#x6848;&#x5BA4;&#x67E5;&#x8D44;&#x6599;&#x3002;&#x62FF;&#x7740;&#x4F60;&#x7684;&#x95EE;&#x9898; (Q)&#xFF0C;&#x53BB;&#x5339;&#x914D;&#x6863;&#x6848;&#x6807;&#x7B7E; (K)&#xFF0C;&#x6839;&#x636E;&#x5339;&#x914D;&#x5EA6;&#x63D0;&#x53D6;&#x6863;&#x6848;&#x5185;&#x5BB9; (V)&#xFF0C;&#x6700;&#x540E;&#x878D;&#x5408;&#x6240;&#x6709;&#x5185;&#x5BB9;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;&#xFF1A;</strong> $Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$</li>
</ul>
<h3 id="2. &#x591A;&#x5934;&#x673A;&#x5236; (Multi-Head)"><a href="#2. &#x591A;&#x5934;&#x673A;&#x5236; (Multi-Head)"></a>2. &#x591A;&#x5934;&#x673A;&#x5236; (Multi-Head)</h3>
<p>&#x589E;&#x5F3A;&#x6A21;&#x578B;&#x7684;&#x201C;&#x5BB9;&#x9519;&#x7387;&#x201D;&#x548C;&#x201C;&#x8BED;&#x4E49;&#x6355;&#x83B7;&#x529B;&#x201D;&#x3002;</p>
<ul>
<li><strong>&#x89E3;&#x6CD5;&#xFF1A;</strong> &#x628A;&#x5411;&#x91CF;&#x5207;&#x6210;&#x591A;&#x4EFD;&#xFF08;&#x5982; 8 &#x5934;&#xFF09;&#xFF0C;&#x72EC;&#x7ACB;&#x8BA1;&#x7B97; Attention &#x540E;&#x62FC;&#x63A5;&#x3002;</li>
<li><strong>&#x6548;&#x679C;&#xFF1A;</strong> &#x5C31;&#x50CF;&#x778E;&#x5B50;&#x6478;&#x8C61;&#xFF0C;&#x4E0D;&#x540C;&#x7684;&#x4EBA;&#x6478;&#x4E0D;&#x540C;&#x7684;&#x90E8;&#x4F4D;&#xFF0C;&#x6C47;&#x603B;&#x540E;&#x624D;&#x80FD;&#x8FD8;&#x539F;&#x6574;&#x53EA;&#x8C61;&#x3002;</li>
</ul>
<h3 id="3. &#x7F29;&#x653E;&#x70B9;&#x79EF; (Scaled Dot-Product)"><a href="#3. &#x7F29;&#x653E;&#x70B9;&#x79EF; (Scaled Dot-Product)"></a>3. &#x7F29;&#x653E;&#x70B9;&#x79EF; (Scaled Dot-Product)</h3>
<p>&#x516C;&#x5F0F;&#x91CC;&#x7684; $\\sqrt{d_k}$&#x3002;</p>
<ul>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x9632;&#x6B62;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x3002;&#x9AD8;&#x7EF4;&#x5411;&#x91CF;&#x70B9;&#x79EF;&#x7ED3;&#x679C;&#x8FC7;&#x5927;&#x56DE;&#x5BFC;&#x81F4; Softmax &#x8FDB;&#x5165;&#x9971;&#x548C;&#x533A;&#xFF08;&#x68AF;&#x5EA6;&#x8FD1; 0&#xFF09;&#x3002;&#x9664;&#x4EE5;&#x7F29;&#x653E;&#x7CFB;&#x6570;&#x80FD;&#x628A;&#x6570;&#x503C;&#x62C9;&#x56DE;&#x8212;&#x9002;&#x533A;&#xFF0C;&#x5229;&#x4E8E;&#x8BAD;&#x7EC3;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x62D3;&#x5C55;&#xFF1A;Transformer &#x7684;&#x5BB6;&#x65CF;&#x6F14;&#x53D8;"><a href="#&#x62D3;&#x5C55;&#xFF1A;Transformer &#x7684;&#x5BB6;&#x65CF;&#x6F14;&#x53D8;"></a>&#x62D3;&#x5C55;&#xFF1A;Transformer &#x7684;&#x5BB6;&#x65CF;&#x6F14;&#x53D8;</h2>
<p>&#x867D;&#x7136; Transformer &#x539F;&#x4F5C;&#x63D0;&#x51FA;&#x4E86;&#x5B8C;&#x6574;&#x7684; Encoder-Decoder &#x67B6;&#x6784;&#xFF0C;&#x4F46;&#x540E;&#x7EED;&#x7684;&#x53D1;&#x5C55;&#x5C06;&#x5176;&#x62C6;&#x89E3;&#x4E3A;&#x4E09;&#x5927;&#x6D41;&#x6D3E;&#xFF0C;&#x5404;&#x81EA;&#x7EDF;&#x6CBB;&#x4E86;&#x4E0D;&#x540C;&#x7684; AI &#x9886;&#x57DF;&#x3002;</p>
<h3 id="1. Encoder-only (&#x7F16;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"><a href="#1. Encoder-only (&#x7F16;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"></a>1. Encoder-only (&#x7F16;&#x7801;&#x5668;&#x6D41;&#x6D3E;)</h3>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x4F5C;&#xFF1A;</strong> <strong>BERT</strong>, <strong>Sentence-BERT (SBERT)</strong>, RoBERTa</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> &#x53EA;&#x6709; Encoder&#xFF0C;&#x4F7F;&#x7528;<strong>&#x53CC;&#x5411;&#x6CE8;&#x610F;&#x529B; (Full Attention)</strong>&#xFF0C;&#x80FD;&#x540C;&#x65F6;&#x770B;&#x5230;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x4EFB;&#x52A1;&#xFF1A;</strong> <strong>&#x5B8C;&#x5F62;&#x586B;&#x7A7A; (Masked Language Modeling)</strong>&#x3002;&#x6316;&#x6389;&#x53E5;&#x5B50;&#x4E2D;&#x7684;&#x8BCD;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x6839;&#x636E;&#x4E0A;&#x4E0B;&#x6587;&#x586B;&#x56DE;&#x53BB;&#x3002;</li>
<li><strong>&#x6838;&#x5FC3;&#x80FD;&#x529B;&#xFF1A;</strong> <strong>&#x201C;&#x7406;&#x89E3;&#x201D;&#x4E0E;&#x201C;&#x8868;&#x793A;&#x201D;</strong>&#x3002;</li>
<li><strong>&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;</strong> &#x6587;&#x672C;&#x5206;&#x7C7B;&#x3001;&#x60C5;&#x611F;&#x5206;&#x6790;&#x3001;<strong>&#x8BED;&#x4E49;&#x5339;&#x914D;&#xFF08;Embedding&#xFF09;</strong>&#x3002;
<ul>
<li><em>&#x6CE8;&#xFF1A;SBERT &#x6B63;&#x662F;&#x5229;&#x7528; Encoder &#x5F3A;&#x5927;&#x7684;&#x8BED;&#x4E49;&#x63D0;&#x53D6;&#x80FD;&#x529B;&#xFF0C;&#x5C06;&#x53E5;&#x5B50;&#x538B;&#x7F29;&#x6210;&#x9AD8;&#x8D28;&#x91CF;&#x5411;&#x91CF;&#xFF0C;&#x7528;&#x4E8E;&#x8BA1;&#x7B97;&#x53E5;&#x5B50;&#x95F4;&#x7684;&#x76F8;&#x4F3C;&#x5EA6;&#x3002;</em></li>
</ul>
</li>
</ul>
<h3 id="2. Decoder-only (&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"><a href="#2. Decoder-only (&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"></a>2. Decoder-only (&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)</h3>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x4F5C;&#xFF1A;</strong> <strong>GPT &#x7CFB;&#x5217;</strong>, <strong>Llama</strong>, <strong>Claude</strong>, <strong>DeepSeek</strong></li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> &#x53EA;&#x6709; Decoder&#xFF0C;&#x4F7F;&#x7528;<strong>&#x5355;&#x5411;&#x6CE8;&#x610F;&#x529B; (Masked Self-Attention)</strong>&#xFF0C;&#x53EA;&#x80FD;&#x770B;&#x5230;&#x524D;&#x9762;&#x7684;&#x8BCD;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x4EFB;&#x52A1;&#xFF1A;</strong> <strong>&#x6587;&#x5B57;&#x63A5;&#x9F99; (Causal Language Modeling)</strong>&#x3002;&#x9884;&#x6D4B;&#x4E0B;&#x4E00;&#x4E2A;&#x8BCD;&#x3002;</li>
<li><strong>&#x6838;&#x5FC3;&#x80FD;&#x529B;&#xFF1A;</strong> <strong>&#x201C;&#x751F;&#x6210;&#x201D;&#x4E0E;&#x201C;&#x63A8;&#x7406;&#x201D;</strong>&#x3002;</li>
<li><strong>&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;</strong> &#x5BF9;&#x8BDD;&#x3001;&#x5199;&#x4F5C;&#x3001;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3002;&#x8FD9;&#x662F;&#x76EE;&#x524D; LLM &#x7684;&#x4E3B;&#x6D41;&#x67B6;&#x6784;&#x3002;
<ul>
<li><em>&#x6CE8;&#xFF1A;&#x5728; Decoder-only &#x67B6;&#x6784;&#x4E2D;&#xFF0C;&#x8F93;&#x5165;&#xFF08;Prompt&#xFF09;&#x548C;&#x8F93;&#x51FA;&#xFF08;Completion&#xFF09;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x5E8F;&#x5217;&#x4E2D;&#x6D41;&#x8F6C;&#xFF0C;&#x4E0D;&#x518D;&#x6709;&#x72EC;&#x7ACB;&#x7684; Encoder &#x8F93;&#x51FA; C&#x3002;</em></li>
</ul>
</li>
</ul>
<h3 id="3. Encoder-Decoder (&#x7F16;&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"><a href="#3. Encoder-Decoder (&#x7F16;&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)"></a>3. Encoder-Decoder (&#x7F16;&#x89E3;&#x7801;&#x5668;&#x6D41;&#x6D3E;)</h3>
<ul>
<li><strong>&#x4EE3;&#x8868;&#x4F5C;&#xFF1A;</strong> <strong>Transformer &#x539F;&#x4F5C;</strong>, <strong>T5</strong>, BART</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> &#x5B8C;&#x6574;&#x7684;&#x53CC;&#x5854;&#x7ED3;&#x6784;&#x3002;</li>
<li><strong>&#x8BAD;&#x7EC3;&#x4EFB;&#x52A1;&#xFF1A;</strong> &#x7FFB;&#x8BD1;&#x3001;&#x5E8F;&#x5217;&#x5230;&#x5E8F;&#x5217;&#x751F;&#x6210;&#x3002;</li>
<li><strong>&#x6838;&#x5FC3;&#x80FD;&#x529B;&#xFF1A;</strong> <strong>&#x201C;&#x8F6C;&#x6362;&#x201D;</strong>&#x3002;</li>
<li><strong>&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;</strong> &#x673A;&#x5668;&#x7FFB;&#x8BD1;&#x3001;&#x6587;&#x672C;&#x6458;&#x8981;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p><strong>Attention Is All You Need</strong> &#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x4E00;&#x4E2A;&#x6807;&#x9898;&#xFF0C;&#x66F4;&#x662F;&#x4E00;&#x79CD;&#x5BA3;&#x8A00;&#x3002;</p>
<ol>
<li>&#x5B83;&#x8BC1;&#x660E;&#x4E86;<strong>&#x5E76;&#x884C;&#x8BA1;&#x7B97;</strong>&#x662F;&#x63D0;&#x5347; AI &#x80FD;&#x529B;&#x7684;&#x5173;&#x952E;&#x8DEF;&#x5F84;&#x3002;</li>
<li>&#x5B83;&#x628A;<strong>&#x7279;&#x5F81;&#x63D0;&#x53D6;</strong>&#x7684;&#x4E3B;&#x52A8;&#x6743;&#x5B8C;&#x5168;&#x4EA4;&#x7ED9;&#x4E86;&#x6570;&#x636E;&#x4E4B;&#x95F4;&#x7684;&#x76F8;&#x4E92;&#x4F5C;&#x7528;&#xFF08;Self-Attention&#xFF09;&#xFF0C;&#x800C;&#x975E;&#x4EBA;&#x4E3A;&#x8BBE;&#x8BA1;&#x7684;&#x7ED3;&#x6784;&#x3002;</li>
<li>&#x5B83;&#x5F00;&#x542F;&#x4E86; <strong>Pre-training + Fine-tuning</strong> &#x7684;&#x5927;&#x6A21;&#x578B;&#x65F6;&#x4EE3;&#x3002;</li>
</ol>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#xFF0C;&#x5C31;&#x6CA1;&#x6709;&#x4ECA;&#x5929;&#x7684; ChatGPT&#x3001;Claude &#x6216; DeepSeek&#x3002;</p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/1706.03762">&#x8BBA;&#x6587;&#x539F;&#x6587;</a></li>
<li><a href="http://jalammar.github.io/illustrated-transformer/">The Illustrated Transformer (Jay Alammar)</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-26</em></p>
`,E=[{level:2,title:"Transformer 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么是 Attention？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"1. 核心架构组件",children:[]},{level:3,title:"2. 深度解构：串行堆叠的 Layer (Vertical Stacking)",children:[{level:4,title:"A. 关键连接：Cross-Attention (交叉注意力)",children:[]},{level:4,title:"B. 训练阶段：基于 Teacher Forcing 的并行化",children:[]},{level:4,title:"C. 推理阶段：串行的自回归 (Autoregressive)",children:[]}]},{level:3,title:"3. 特殊优化：LayerNorm、残差连接与权重绑定",children:[{level:4,title:"A. LayerNorm：模型的“稳压器”",children:[]},{level:4,title:"B. 残差连接 (Residual Connection)：信息的“高速公路”",children:[]},{level:4,title:"C. 权重绑定 (Weight Tying)",children:[]}]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 自注意力 (Self-Attention)",children:[]},{level:3,title:"2. 多头机制 (Multi-Head)",children:[]},{level:3,title:"3. 缩放点积 (Scaled Dot-Product)",children:[]}]},{level:2,title:"拓展：Transformer 的家族演变",children:[{level:3,title:"1. Encoder-only (编码器流派)",children:[]},{level:3,title:"2. Decoder-only (解码器流派)",children:[]},{level:3,title:"3. Encoder-Decoder (编解码器流派)",children:[]}]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
