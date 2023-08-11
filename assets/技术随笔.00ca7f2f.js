const x={},F=`<h1 id="&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"><a href="#&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"></a>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;</h1>
<!-- * \u5982\u4F55\u5224\u65AD\u6570\u636E\u7279\u5F81\u662F\u5426\u7EBF\u6027\u53EF\u5206\uFF1F\u5148\u901A\u8FC7 PCA \u6216\u8005 KMeans \u7B49\u65B9\u6CD5\u964D\u7EF4\u5E76\u53EF\u89C6\u5316\uFF0C\u89C2\u5BDF\u5206\u7C7B\u5728\u56FE\u4E0A\u662F\u5426\u4EA4\u9519\uFF1B -->
<ul>
<li>&#x5982;&#x4F55;&#x5224;&#x65AD;&#x6570;&#x636E;&#x7279;&#x5F81;&#x662F;&#x5426;&#x7EBF;&#x6027;&#x53EF;&#x5206;&#xFF1F;&#x5148;&#x901A;&#x8FC7;&#x7279;&#x5F81;&#x7EF4;&#x5EA6;&#x7ED8;&#x5236;&#x56FE;</li>
<li>&#x4F8B;&#x5982;&#xFF1A;&#x6570;&#x636E;&#x96C6;&#x4EC5;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5206;&#x79BB;&#x76F8;&#x5F53;&#x660E;&#x663E;&#x7684;&#x805A;&#x7C7B;&#x3002;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris setosa&#xFF0C;&#x800C;&#x53E6;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris virginica &#x548C; Iris versicolor&#xFF1B;&#x901A;&#x8FC7; &#x7279;&#x5F81;&#x7ED8;&#x5236;&#x51FA;&#x7684;&#x56FE;&#x4F1A;&#x5206;&#x6210;&#x660E;&#x663E;2&#x5806;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x5806;&#x662F;&#x4EA4;&#x9519;2&#x79CD;&#x7C7B;&#x578B; Iris</li>
</ul>
<h1 id="&#x5C1D;&#x8BD5;&#x7406;&#x89E3;&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;"><a href="#&#x5C1D;&#x8BD5;&#x7406;&#x89E3;&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;"></a>&#x5C1D;&#x8BD5;&#x7406;&#x89E3;&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;</h1>
<ul>
<li>&#x591A;&#x4E2A;&#x5B50;&#x7F51;&#x53E0;&#x52A0;&#x7684;&#x5230;&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#xFF0C;&#x89C4;&#x907F;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x8DDF;&#x7206;&#x70B8;&#x95EE;&#x9898;</li>
</ul>
<h1 id="&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"><a href="#&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"></a>&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;</h1>
<ul>
<li>&#x662F;&#x4EC0;&#x4E48;&#xFF1F;ONNX = &#xFF08;&#x6A21;&#x578B;&#x672C;&#x8EAB; + &#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6743;&#x91CD;&#x8DDF;&#x504F;&#x7F6E;&#xFF09;&#x7684;&#x4E00;&#x79CD;&#x66F4;&#x52A0;&#x62BD;&#x8C61;&#x7684;&#x8868;&#x8FBE;</li>
<li>&#x5982;&#x4F55;&#x8868;&#x793A;&#xFF1F;&#x4F7F;&#x7528;&#x9884;&#x5B9A;&#x4E49;&#x7684; operator&#xFF08;&#x63CF;&#x8FF0;&#x8F93;&#x5165;&#x4E0E;&#x8F93;&#x51FA;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;add&#x7B97;&#x5B50;=  inputA + inputB = OutputC&#xFF0C;&#x53EF;&#x62D3;&#x5C55;&#xFF09;&#x6765;&#x63CF;&#x8FF0;&#x6A21;&#x578B;&#xFF0C;&#x7528;&#x5411;&#x91CF;&#x63CF;&#x8FF0;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x53C2;&#x6570;</li>
<li>&#x4F5C;&#x7528;&#xFF1F;&#x5B9E;&#x73B0;&#x4E0D;&#x540C;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6846;&#x67B6;&#x548C;&#x5E73;&#x53F0;&#x4E4B;&#x95F4;&#x7684;&#x6A21;&#x578B;&#x4E92;&#x64CD;&#x4F5C;&#x6027;</li>
<li>&#x4E3A;&#x4EC0;&#x4E48; pytorch &#x5728;&#x5BFC;&#x51FA; ONNX &#x7684;&#x65F6;&#x5019;&#x9700;&#x8981;&#x4F20;&#x5165;&#x4E00;&#x7EC4;&#x8F93;&#x5165;&#xFF1F;&#x539F;&#x56E0;&#xFF1A;
<ul>
<li>ONNX &#x5E76;&#x975E;&#x50CF;&#x7F16;&#x8BD1;&#x5668;&#x4E00;&#x6837;&#x5F7B;&#x5E95;&#x89E3;&#x6790;&#x539F;&#x6A21;&#x578B;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x8BB0;&#x5F55;&#x6240;&#x6709;&#x63A7;&#x5236;&#x6D41;&#xFF1B;&#x800C;&#x662F;&#x4E0D;&#x8003;&#x8651;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x9759;&#x6001;&#x56FE;</li>
<li>&#x800C;&#x662F;&#x5229;&#x7528; pytorch trace &#x673A;&#x5236;&#xFF0C;&#x5C06;&#x53C2;&#x6570;&#x4F20;&#x5165;&#x6A21;&#x578B;&#x6267;&#x884C;&#xFF0C;&#x5E76;&#x8BB0;&#x5F55;&#x6267;&#x884C;&#x8FD9;&#x7EC4;&#x8F93;&#x5165;&#x5BF9;&#x5E94;&#x7684;&#x8BA1;&#x7B97;&#x56FE;</li>
</ul>
</li>
</ul>
<h1 id="Transformer &#x6A21;&#x578B;&#x7684;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236; - &#x5C1D;&#x8BD5;&#x7406;&#x89E3;"><a href="#Transformer &#x6A21;&#x578B;&#x7684;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236; - &#x5C1D;&#x8BD5;&#x7406;&#x89E3;"></a>Transformer &#x6A21;&#x578B;&#x7684;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236; - &#x5C1D;&#x8BD5;&#x7406;&#x89E3;</h1>
<p>&#x8F93;&#x5165;&#x4E32; -&gt; &#x5206;&#x8BCD; -&gt; &#x67E5;&#x8BE2;&#x5411;&#x91CF;&#xFF08;&#x56FA;&#x5B9A;&#xFF09; -&gt; &#x6839;&#x636E;&#x4F4D;&#x7F6E;&#x4FE1;&#x606F;&#x66F4;&#x65B0;&#x5411;&#x91CF;</p>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch</h1>
<ol>
<li>Epoch &#x662F;&#x4EC0;&#x4E48;&#xFF1F;
&#x4E00;&#x6B21; Epoch = &#x8BA9;&#x6240;&#x6709;&#x6570;&#x636E;&#x901A;&#x8FC7;&#x6A21;&#x578B;&#x6B63;&#x5411;+&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x4E00;&#x6B21; = &#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x5B66;&#x4E60;&#x5468;&#x671F;</li>
<li>Epoch &#x8BBE;&#x7F6E;&#x591A;&#x5C11;&#x6B21;&#x5408;&#x9002;&#xFF1F;
&#x65E0;&#x5B9A;&#x8BBA;&#xFF1A;
&#x6B21;&#x6570;&#x5C11;&#x4F1A;&#x5BFC;&#x81F4;&#x6B20;&#x62DF;&#x5408;&#xFF1B;
&#x6B21;&#x6570;&#x591A;&#x4F1A;&#x5BFC;&#x81F4;&#x8FC7;&#x62DF;&#x5408;&#xFF1B;</li>
<li>&#x4EC0;&#x4E48;&#x662F; Batch&#xFF1F;
Batch Size = &#x4E00;&#x6B21;&#x8BAD;&#x7EC3;&#x7684;&#x6837;&#x672C;&#x6570;
&#x6BCF;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x6240;&#x9700;&#x8981;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5E76;&#x4E0D;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x83B7;&#x5F97;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x7531;&#x4E00;&#x6279;&#x6570;&#x636E;&#x52A0;&#x6743;&#x5F97;&#x5230;&#x7684;</li>
<li>Batch &#x7684;&#x4F5C;&#x7528;&#xFF1F;</li>
</ol>
<ul>
<li>&#x6548;&#x7387;&#xFF1A;&#x5229;&#x7528;&#x77E9;&#x9635;&#x8BA1;&#x7B97;&#x52A0;&#x901F;&#xFF08;&#x76F8;&#x5BF9;&#x4E8E;&#x5355;&#x4E2A;&#x53BB;&#x8BAD;&#x7EC3;&#xFF09;</li>
<li>&#x7A33;&#x5B9A;&#x6027;&#xFF1A;&#x5E73;&#x5747;&#x6BCF;&#x4E2A;&#x6570;&#x636E;&#x6837;&#x672C;&#x7684;&#x8D21;&#x732E;&#xFF0C;&#x51CF;&#x5C11;&#x68AF;&#x5EA6;&#x7684;&#x65B9;&#x5DEE;</li>
<li>&#x591A;&#x5927;&#x5408;&#x9002;&#xFF1A;&#x770B;&#x60C5;&#x51B5;&#xFF0C;&#x592A;&#x5C0F;&#x4F1A;&#x5BFC;&#x81F4;&#x8BAD;&#x7EC3;&#x592A;&#x4E45;&#xFF1B;&#x592A;&#x5927;&#x4F1A;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x53D7;&#x4E0D;&#x4E86;</li>
</ul>
<p>&#x53C2;&#x8003;&#xFF1A;<a href="https://towardsdatascience.com/epoch-vs-iterations-vs-batch-size-4dfb9c7ce9c9">epoch-vs-iterations-vs-batch-size</a></p>
<h1 id="GPT &#x5C1D;&#x8BD5;"><a href="#GPT &#x5C1D;&#x8BD5;"></a>GPT &#x5C1D;&#x8BD5;</h1>
<ol>
<li>&#x4EE3;&#x7801;&#x5C1D;&#x8BD5;
<ul>
<li>&#x91CD;&#x6784;&#x8F6C;&#x6362;
<ul>
<li>&#x8F93;&#x5165; js -&gt; ts</li>
</ul>
</li>
<li>&#x4F18;&#x5316;
<ul>
<li>&#x683C;&#x5F0F;&#x5316;&#x4EE3;&#x7801;</li>
</ul>
</li>
<li>&#x521B;&#x5EFA;
<ul>
<li>&#x521B;&#x5EFA;&#x63D2;&#x4EF6;&#xFF08;eslint&#xFF09;&#x6B65;&#x9AA4;&#xFF1A;&#x5199;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B; -&gt; &#x8F93;&#x5165; gpt -&gt; &#x751F;&#x6210;&#x63D2;&#x4EF6; -&gt; &#x5FAE;&#x8C03;&#x6210;&#x578B;
<ul>
<li>&#x95EE;&#x9898;&#xFF1A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x4F1A;&#x6BD4;&#x8F83;&#x7E41;&#x7410;&#x6216;&#x8005;&#x9690;&#x85CF;&#x903B;&#x8F91;&#x95EE;&#x9898;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x53BB;&#x5229;&#x7528;&#x7B2C;&#x4E09;&#x65B9;&#x7684;&#x5305;&#x7684;&#x80FD;&#x529B;</li>
<li>&#x76EE;&#x524D;&#x65B9;&#x6848;&#xFF1A;&#x9700;&#x8981; developer &#x627E;&#x5230;&#x66F4;&#x4FBF;&#x6377;&#x7684;&#x65B9;&#x5F0F;&#x518D;&#x53BB;&#x6295;&#x5582;&#x7ED9; gpt &#x751F;&#x6210;&#x66F4;&#x52A0;&#x5408;&#x7406;&#x7B80;&#x6D01;&#x7684;&#x4EE3;&#x7801;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
<h1 id="&#x5185;&#x5B58;&#x5BF9;&#x9F50;"><a href="#&#x5185;&#x5B58;&#x5BF9;&#x9F50;"></a>&#x5185;&#x5B58;&#x5BF9;&#x9F50;</h1>
<p>&#x7A7A;&#x95F4;&#x6362;&#x65F6;&#x95F4;&#xFF1F;
&#x4F18;&#x52BF;&#xFF1A;&#x5BF9;&#x9F50;&#x53EF;&#x4EE5;&#x52A0;&#x5FEB; CPU &#x8BBF;&#x95EE;&#x901F;&#x5EA6;
&#x52A3;&#x52BF;&#xFF1A;&#x4F1A;&#x6D6A;&#x8D39;&#x7A7A;&#x95F4;</p>
<h1 id="&#x7B26;&#x53F7;&#x8868; 2023-3-6"><a href="#&#x7B26;&#x53F7;&#x8868; 2023-3-6"></a>&#x7B26;&#x53F7;&#x8868; 2023-3-6</h1>
<ol>
<li>wiki
&#x7B26;&#x53F7;&#x8868;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8BED;&#x8A00;&#x7FFB;&#x8BD1;&#x5668;&#xFF08;&#x4F8B;&#x5982;&#x7F16;&#x8BD1;&#x5668;&#x548C;&#x89E3;&#x91CA;&#x5668;&#xFF09;&#x4E2D;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x3002;&#x5728;&#x7B26;&#x53F7;&#x8868;&#x4E2D;&#xFF0C;&#x7A0B;&#x5E8F;&#x6E90;&#x4EE3;&#x7801;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x6807;&#x8BC6;&#x7B26;&#x90FD;&#x548C;&#x5B83;&#x7684;&#x58F0;&#x660E;&#x6216;&#x4F7F;&#x7528;&#x4FE1;&#x606F;&#x7ED1;&#x5B9A;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x6BD4;&#x5982;&#x5176;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x3001;&#x4F5C;&#x7528;&#x57DF;&#x4EE5;&#x53CA;&#x5185;&#x5B58;&#x5730;&#x5740;&#x3002;</li>
<li>Example
<a href="https://en.wikipedia.org/wiki/Symbol_table#Example">Symbol_table#Example</a></li>
</ol>
<ul>
<li>Go &#x7F16;&#x8BD1;&#x5668;&#x9ED8;&#x8BA4;&#x7F16;&#x8BD1;&#x51FA;&#x6765;&#x7684;&#x7A0B;&#x5E8F;&#x4F1A;&#x5E26;&#x6709;&#x7B26;&#x53F7;&#x8868;&#x548C;&#x8C03;&#x8BD5;&#x4FE1;&#x606F;&#xFF0C;&#x4E00;&#x822C;&#x6765;&#x8BF4; release &#x7248;&#x672C;&#x53EF;&#x4EE5;&#x53BB;&#x9664;&#x8C03;&#x8BD5;&#x4FE1;&#x606F;&#x4EE5;&#x51CF;&#x5C0F;&#x4E8C;&#x8FDB;&#x5236;&#x4F53;&#x79EF;&#x3002;</li>
<li>ABI&#xFF08;Application binary interface&#xFF09;&#xFF1A; &#x7EA6;&#x5B9A;&#x6570;&#x636E;&#x5728;&#x4E8C;&#x8FDB;&#x5236;&#x6D41;&#x4E0A;&#x7684;&#x6392;&#x5217;&#xFF0C;&#x8FD8;&#x6709; calling convention &#x7B49;&#x65B9;&#x5F0F;&#x4FBF;&#x4E8E;&#x4E0D;&#x540C;&#x8BED;&#x79CD;&#x4EA4;&#x4E92;
<ul>
<li>low-level, hardware-dependent  vs API&#xFF08;high-level, hardware-independent&#xFF0C;human readable format&#xFF09;</li>
</ul>
</li>
</ul>
<ol start="3">
<li>&#x601D;&#x8003;
&#x6709;&#x70B9;&#x7C7B;&#x4F3C; js &#x7684; source-map&#xFF1F;</li>
</ol>
<h1 id="&#x98CE;&#x63A7;&#x5F15;&#x64CE;&#x4F18;&#x5316; 2023-3-2"><a href="#&#x98CE;&#x63A7;&#x5F15;&#x64CE;&#x4F18;&#x5316; 2023-3-2"></a>&#x98CE;&#x63A7;&#x5F15;&#x64CE;&#x4F18;&#x5316; 2023-3-2</h1>
<ol>
<li>&#x4EC0;&#x4E48;&#x662F;&#x98CE;&#x63A7;&#xFF1F;</li>
</ol>
<blockquote>
<p>input&#xFF1A;&#x98CE;&#x63A7;&#x53C2;&#x6570;&#xFF0C;&#x53C2;&#x6570;&#x6743;&#x91CD;&#xFF0C;&#x53C2;&#x6570;&#x7EC4;&#x5408;&#x5224;&#x5B9A;&#x903B;&#x8F91;</p>
</blockquote>
<blockquote>
<p>output&#xFF1A;reject/pass</p>
</blockquote>
<ol start="2">
<li>&#x4E3A;&#x4EC0;&#x4E48;&#x9700;&#x8981;&#x4F18;&#x5316;&#xFF1F;</li>
</ol>
<blockquote>
<p>&#x98CE;&#x63A7;&#x7684;&#x5224;&#x5B9A;&#x6548;&#x7387;&#x8D8A;&#x9AD8;&#xFF0C;&#x5BF9;&#x4E0B;&#x6E38;&#x771F;&#x5B9E;&#x4E1A;&#x52A1;&#x7684;&#x963B;&#x585E;&#x4E5F;&#x5C31;&#x8D8A;&#x5C0F;</p>
</blockquote>
<ol start="3">
<li>&#x5982;&#x4F55;&#x505A;&#xFF1F;</li>
</ol>
<ul>
<li>&#x53C2;&#x6570;&#x83B7;&#x53D6;&#xFF1A;&#x53C2;&#x6570;&#x7684;&#x83B7;&#x53D6;&#x53EF;&#x80FD;&#x6E20;&#x9053;&#x83B7;&#x53D6;&#xFF08;redis/kafka/db &#x7B49;&#xFF09;
<ul>
<li>&#x5E76;&#x884C;</li>
<li>&#x53C2;&#x6570;&#x7B5B;&#x9009;&#x6392;&#x5E8F;&#x62C9;&#x53D6;&#xFF1A;&#x6839;&#x636E;&#x4E1A;&#x52A1;&#x6570;&#x636E;&#x4F7F;&#x7528;&#x6743;&#x91CD;&#xFF0C;&#x63A8;&#x8FDF;&#x5C0F;&#x6982;&#x7387;&#x4F7F;&#x7528;&#x7684;&#x53C2;&#x6570;&#x62C9;&#x53D6;</li>
</ul>
</li>
<li>&#x903B;&#x8F91;&#x7EC4;&#x5408;
<ul>
<li>&#x65F6;&#x5E8F;&#x8C03;&#x6574;&#xFF08;&#x8C03;&#x6574;&#x903B;&#x8F91;&#x6267;&#x884C;&#x5148;&#x540E;&#x987A;&#x5E8F;&#xFF09;</li>
<li>&#x526A;&#x679D;&#xFF08;&#x7F16;&#x8BD1;&#x9636;&#x6BB5;&#x65E0;&#x6548;&#x5224;&#x5B9A;&#x903B;&#x8F91;&#x6D88;&#x9664;&#xFF09;</li>
</ul>
</li>
</ul>
<h1 id="&#x6269;&#x5BB9;&#x673A;&#x5236; 2023-3-2"><a href="#&#x6269;&#x5BB9;&#x673A;&#x5236; 2023-3-2"></a>&#x6269;&#x5BB9;&#x673A;&#x5236; 2023-3-2</h1>
<p>&#x9700;&#x8981;&#x5904;&#x7406;&#x597D;&#x6269;&#x5BB9;&#x8DDF;&#x6536;&#x7F29;</p>
<ol>
<li>
<p>&#x6808;&#x7A7A;&#x95F4;&#xFF08;&#x6216;&#x8005;&#x5806;&#x7A7A;&#x95F4;&#xFF09;&#x7B56;&#x7565;</p>
<ul>
<li>&#x5206;&#x6BB5;&#x673A;&#x5236;
<ul>
<li>&#x65E7;&#x79E9;&#x5E8F;&#x7684;&#x5EF6;&#x7EED;</li>
<li>&#x4FDD;&#x7559;&#x65E7;&#x6709;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#xFF0C;&#x7533;&#x8BF7;&#x65B0;&#x7A7A;&#x95F4;&#x5B58;&#x653E;&#x6EA2;&#x51FA;&#x6570;&#x636E;&#xFF0C;&#x901A;&#x8FC7;&#x94FE;&#x8868;&#x8FDE;&#x63A5;&#x5404;&#x7247;&#x6BB5;</li>
</ul>
</li>
<li>&#x8FDE;&#x7EED;&#x673A;&#x5236;
<ul>
<li>&#x65B0;&#x79E9;&#x5E8F;&#x66FF;&#x6362;&#x65E7;&#x79E9;&#x5E8F;</li>
<li>&#x89E6;&#x53D1;&#x6269;&#x5BB9;&#x4F1A;&#x7533;&#x8BF7;&#x66F4;&#x5927;&#x7684;&#x7A7A;&#x95F4;&#xFF08;2&#x500D;&#xFF1F;&#x7C7B;&#x4F3C; golang &#x5207;&#x7247;&#x7684;&#x52A8;&#x6001;&#x6269;&#x5BB9;&#x673A;&#x5236;&#xFF09;&#xFF0C;&#x628A;&#x65E7;&#x7A7A;&#x95F4;&#x6570;&#x636E;&#x642C;&#x5230;&#x65B0;&#x7A7A;&#x95F4;&#xFF0C;&#x5E76;&#x91CA;&#x653E;&#x6389;&#x65E7;&#x7A7A;&#x95F4;</li>
</ul>
</li>
<li>&#x4F18;&#x5316;&#xFF1A;&#x5EF6;&#x8FDF;&#x5F52;&#x8FD8;&#x7ED9;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#xFF0C;&#x81EA;&#x5DF1;&#x7BA1;&#x7406;&#x5185;&#x5B58;&#x7684;&#x4F38;&#x7F29;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;golang &#x7684; goroutine <a href="https://dreamgoing.github.io/go%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.html">go&#x5185;&#x5B58;&#x7BA1;&#x7406;</a></li>
</ul>
</li>
<li>
<p>&#x670D;&#x52A1;&#x80FD;&#x529B;</p>
<ul>
<li>&#x6A2A;&#x5411;&#xFF1A;&#x62D3;&#x5C55;&#x66F4;&#x591A;&#x96C6;&#x7FA4;&#x670D;&#x52A1;
<ul>
<li>&#x6D41;&#x91CF;&#x964D;&#x4F4E;&#x65F6;&#x4F1A;&#x89E6;&#x53D1;&#x6536;&#x7F29;</li>
</ul>
</li>
<li>&#x7EB5;&#x5411;&#xFF1A;&#x63D0;&#x5347;&#x5355;&#x4F53;&#x670D;&#x52A1;&#x80FD;&#x529B;</li>
</ul>
</li>
</ol>
<h1 id="AOP&#xFF08;&#x9762;&#x5411;&#x5207;&#x9762;&#x7F16;&#x7A0B;&#xFF09; 2023-3-1"><a href="#AOP&#xFF08;&#x9762;&#x5411;&#x5207;&#x9762;&#x7F16;&#x7A0B;&#xFF09; 2023-3-1"></a>AOP&#xFF08;&#x9762;&#x5411;&#x5207;&#x9762;&#x7F16;&#x7A0B;&#xFF09; 2023-3-1</h1>
<ul>
<li>&#x89E3;&#x91CA;&#xFF1A;&#x8FD0;&#x884C;&#x65F6;&#x52A8;&#x6001;&#x5730;&#x5C06;&#x4EE3;&#x7801;&#x5207;&#x5165;&#x5230;&#x7C7B;&#x7684;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x3001;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x4E0A;&#x7684;&#x7F16;&#x7A0B;&#x601D;&#x60F3;&#x5C31;&#x662F;&#x9762;&#x5411;&#x5207;&#x9762;&#x7684;&#x7F16;&#x7A0B;&#x3002;
<ul>
<li>&#x4F8B;&#x5B50;&#xFF1A;js &#x7684;&#x88C5;&#x9970;&#x5668;</li>
<li>&#x573A;&#x666F;&#xFF1A;&#x4F7F;&#x7528; AOP &#x5C06;&#x5176;&#x4ECE;&#x6838;&#x5FC3;&#x5173;&#x6CE8;&#x70B9;&#x4E2D;&#x5206;&#x79BB;&#x51FA;&#x6765;&#xFF08;&#x5B9E;&#x9645;&#x662F;&#x5BF9;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x8FDB;&#x884C;&#x4EE3;&#x7406;&#x91CD;&#x5199;&#xFF09;
<ul>
<li>Node.js &#x65E5;&#x5FD7;log</li>
<li>&#x57CB;&#x70B9;&#x3001;&#x6570;&#x636E;&#x4E0A;&#x62A5;</li>
<li>&#x6027;&#x80FD;&#x5206;&#x6790;&#x3001;&#x7EDF;&#x8BA1;&#x51FD;&#x6570;&#x6267;&#x884C;&#x65F6;&#x95F4;</li>
<li>&#x7ED9;ajax&#x8BF7;&#x6C42;&#x52A8;&#x6001;&#x6DFB;&#x52A0;&#x53C2;&#x6570;&#x3001;&#x52A8;&#x6001;&#x6539;&#x53D8;&#x51FD;&#x6570;&#x53C2;&#x6570;</li>
<li>&#x5206;&#x79BB;&#x8868;&#x5355;&#x8BF7;&#x6C42;&#x548C;&#x9A8C;&#x8BC1;</li>
<li>&#x9632;&#x6296;&#x4E0E;&#x8282;&#x6D41;...</li>
</ul>
</li>
</ul>
</li>
<li>&#x906D;&#x9047;&#xFF1A;golang &#x5783;&#x573E;&#x56DE;&#x6536; <a href="https://zhuanlan.zhihu.com/p/352475559">&#x4E09;&#x8272;&#x6807;&#x8BB0;&#x6CD5;&#x4E0E;&#x8BFB;&#x5199;&#x5C4F;&#x969C;</a></li>
<li>&#x6458;&#x8981;&#xFF1A;AOP&#x5176;&#x5B9E;&#x53EA;&#x662F;OOP&#x7684;&#x8865;&#x5145;&#x800C;&#x5DF2;&#x3002;OOP&#x4ECE;&#x6A2A;&#x5411;&#x4E0A;&#x533A;&#x5206;&#x51FA;&#x4E00;&#x4E2A;&#x4E2A;&#x7684;&#x7C7B;&#x6765;&#xFF0C;&#x800C;AOP&#x5219;&#x4ECE;&#x7EB5;&#x5411;&#x4E0A;&#x5411;&#x5BF9;&#x8C61;&#x4E2D;&#x52A0;&#x5165;&#x7279;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x3002;&#x6709;&#x4E86;AOP&#xFF0C;OOP&#x53D8;&#x5F97;&#x7ACB;&#x4F53;&#x4E86;&#x3002;<a href="https://www.zhihu.com/question/24863332">&#x4EC0;&#x4E48;&#x662F;&#x9762;&#x5411;&#x5207;&#x9762;&#x7F16;&#x7A0B; AOP&#xFF1F;</a></li>
</ul>
<h1 id="&#x9003;&#x9038;&#x5206;&#x6790;"><a href="#&#x9003;&#x9038;&#x5206;&#x6790;"></a>&#x9003;&#x9038;&#x5206;&#x6790;</h1>
<p>&#x89E3;&#x91CA;&#xFF1A;&#x5728;&#x7F16;&#x8BD1;&#x7A0B;&#x5E8F;&#x4F18;&#x5316;&#x7406;&#x8BBA;&#x4E2D;&#xFF0C;&#x9003;&#x9038;&#x5206;&#x6790;&#x662F;&#x4E00;&#x79CD;&#x786E;&#x5B9A;&#x6307;&#x9488;&#x52A8;&#x6001;&#x8303;&#x56F4;&#x7684;&#x65B9;&#x6CD5;&#x2014;&#x2014;&#x5206;&#x6790;&#x5728;&#x7A0B;&#x5E8F;&#x7684;&#x54EA;&#x4E9B;&#x5730;&#x65B9;&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x5230;&#x6307;&#x9488;&#x3002;&#x5B83;&#x6D89;&#x53CA;&#x5230;&#x6307;&#x9488;&#x5206;&#x6790;&#x548C;&#x5F62;&#x72B6;&#x5206;&#x6790;&#x3002;</p>
<p>&#x906D;&#x9047;&#xFF1A;&#x5728;&#x4E86;&#x89E3; golang reflect &#x7684;&#x8FC7;&#x7A0B; &#x201C;&#x7528;&#x4E8E;&#x83B7;&#x53D6;&#x63A5;&#x53E3;&#x503C; reflect.Value &#x7684;&#x51FD;&#x6570; reflect.ValueOf &#x5B9E;&#x73B0;&#x4E5F;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF0C;&#x5728;&#x8BE5;&#x51FD;&#x6570;&#x4E2D;&#x6211;&#x4EEC;&#x5148;&#x8C03;&#x7528;&#x4E86; reflect.escapes &#x4FDD;&#x8BC1;&#x5F53;&#x524D;&#x503C;<strong>&#x9003;&#x9038;&#x5230;&#x5806;&#x4E0A;</strong>&#xFF0C;&#x7136;&#x540E;&#x901A;&#x8FC7; reflect.unpackEface &#x4ECE;&#x63A5;&#x53E3;&#x4E2D;&#x83B7;&#x53D6; reflect.Value &#x7ED3;&#x6784;&#x4F53;&#xFF1B;&#x201D;</p>
<p>&#x9003;&#x9038;&#x57FA;&#x7840;</p>
<ul>
<li>&#x4E0D;&#x540C;&#x4E8E;jvm&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x9003;&#x9038;&#x5206;&#x6790;&#xFF0C;golang&#x7684;&#x9003;&#x9038;&#x5206;&#x6790;&#x662F;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x5B8C;&#x6210;&#x7684;&#x3002;</li>
<li>Golang&#x7684;&#x9003;&#x9038;&#x5206;&#x6790;&#x53EA;&#x9488;&#x5BF9;&#x6307;&#x9488;&#x3002;&#x4E00;&#x4E2A;&#x503C;&#x5F15;&#x7528;&#x53D8;&#x91CF;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x88AB;&#x53D6;&#x5740;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x6C38;&#x8FDC;&#x4E0D;&#x53EF;&#x80FD;&#x9003;&#x9038;&#x3002;</li>
<li>C &#x6216;&#x8005; C++ &#x662F;&#x624B;&#x52A8;&#x5206;&#x914D;&#x5230;&#x6808;&#x6216;&#x8005;&#x5806;&#x4E0A;&#xFF0C;&#x540E;&#x9762;&#x662F;&#x5426;&#x4F1A;&#x52A0;&#x4E0A;&#x8FD0;&#x884C;&#x65F6;&#x9003;&#x9038;&#x5206;&#x6790;</li>
</ul>
<p>&#x529F;&#x80FD;</p>
<ul>
<li>&#x9003;&#x9038;&#x5206;&#x6790;&#x8F85;&#x52A9;&#x7F16;&#x8BD1;&#x5668;&#x4F18;&#x5316;&#x7F16;&#x8BD1;&#x7ED3;&#x679C;
<ul>
<li>&#x5C06;&#x5806;&#x5206;&#x914D;&#x8F6C;&#x5316;&#x4E3A;&#x6808;&#x5206;&#x914D;&#x3002;&#x5982;&#x679C;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5B50;&#x7A0B;&#x5E8F;&#x4E2D;&#x88AB;&#x5206;&#x914D;&#xFF0C;&#x5E76;&#x4E14;&#x6307;&#x5411;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x6307;&#x9488;&#x6C38;&#x8FDC;&#x4E0D;&#x4F1A;&#x9003;&#x9038;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5C31;&#x53EF;&#x4EE5;&#x5728;&#x5206;&#x914D;&#x5728;&#x6808;&#x4E0A;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5728;&#x5806;&#x4E0A;&#x3002;&#x5728;&#x6709;&#x5783;&#x573E;&#x6536;&#x96C6;&#x7684;&#x8BED;&#x8A00;&#x4E2D;&#xFF0C;&#x8FD9;&#x79CD;&#x4F18;&#x5316;&#x53EF;&#x4EE5;&#x964D;&#x4F4E;&#x5783;&#x573E;&#x6536;&#x96C6;&#x5668;&#x8FD0;&#x884C;&#x7684;&#x9891;&#x7387;&#x3002;</li>
</ul>
</li>
</ul>
<p><a href="https://www.eet-china.com/mp/a51348.html">&#x7F16;&#x8BD1;&#x5668;&#x4F18;&#x5316;&#x7684;&#x573A;&#x666F;</a></p>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/91559562">golang &#x9003;&#x9038;&#x5206;&#x6790;&#x8BE6;&#x89E3;</a></li>
<li><a href="https://draveness.me/golang/docs/part2-foundation/ch04-basic/golang-reflect/#43-%E5%8F%8D%E5%B0%84">golang &#x53CD;&#x5C04;&#x539F;&#x7406;</a></li>
</ul>
<h1 id="&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x8BBE;&#x8BA1;&#x539F;&#x5219;/&#x6A21;&#x5F0F;"><a href="#&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x8BBE;&#x8BA1;&#x539F;&#x5219;/&#x6A21;&#x5F0F;"></a>&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x8BBE;&#x8BA1;&#x539F;&#x5219;/&#x6A21;&#x5F0F;</h1>
<h2 id="&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF1A;SOLID&#x539F;&#x5219;"><a href="#&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF1A;SOLID&#x539F;&#x5219;"></a>&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF1A;SOLID&#x539F;&#x5219;</h2>
<ul>
<li>Single Responsibility Principle &#x5355;&#x4E00;&#x539F;&#x5219;&#xFF1B;
<ul>
<li>&#x4E00;&#x79CD;Class&#x53EA;&#x8D1F;&#x8D23;&#x4E00;&#x7C7B;&#x4E8B;&#x60C5;</li>
</ul>
</li>
<li>Open/Closed Principle &#x5F00;&#x95ED;&#x539F;&#x5219;&#xFF1B;
<ul>
<li>&#x5141;&#x8BB8;&#x5728;&#x4E0D;&#x6539;&#x53D8;&#x5DF2;&#x6709;&#x4EE3;&#x7801;&#x524D;&#x63D0;&#x4E0B;&#x6DFB;&#x52A0;&#x65B0;&#x529F;&#x80FD;</li>
</ul>
</li>
<li>Liskov Substitution Principle &#x91CC;&#x6C0F;&#x66FF;&#x6362;&#x539F;&#x5219;&#xFF1B;
<ul>
<li>&#x4E0D;&#x8981;&#x4ECE;&#x53EF;&#x5B9E;&#x4F8B;&#x5316;&#x7684;&#x7236;&#x7C7B;&#x4E2D;&#x7EE7;&#x627F;&#xFF08;&#x65B9;&#x6CD5;&#xFF09;&#xFF0C;&#x800C;&#x662F;&#x8981;&#x4F7F;&#x7528;&#x57FA;&#x4E8E;&#x62BD;&#x8C61;&#x7C7B;&#x548C;&#x63A5;&#x53E3;&#x7684;&#x7EE7;&#x627F;&#x3002;</li>
</ul>
</li>
<li>Interface Segregation Principle &#x63A5;&#x53E3;&#x9694;&#x79BB;&#x539F;&#x5219;&#xFF1B;
<ul>
<li>Clients should not be forced to depend upon interfaces that they do not use. &#x5BF9;&#x4E8E;&#x975E;&#x5FC5;&#x987B;&#x7684;&#x53C2;&#x6570;&#x505A;&#x53EF;&#x9009;&#x914D;&#x7F6E;&#xFF0C;&#x7CBE;&#x7B80;&#x63A5;&#x53E3;&#xFF0C;&#x7B80;&#x5316;&#x4F7F;&#x7528;</li>
</ul>
</li>
<li>Dependency Inversion Principle &#x4F9D;&#x8D56;&#x53CD;&#x8F6C;&#x539F;&#x5219;
<ul>
<li>High-level modules should not depend on low-level modules.</li>
<li>Both should depend on abstractions.Abstractions should not depend upon details. Details should depend on abstractions.</li>
<li>&#x964D;&#x4F4E;&#x8026;&#x5408;&#xFF0C;&#x65B9;&#x4FBF;&#x91CD;&#x6784;&#x8DDF;&#x6269;&#x5C55;</li>
</ul>
</li>
</ul>
<h2 id="&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;"><a href="#&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;"></a>&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;</h2>
<h3 id="Creational Patterns"><a href="#Creational Patterns"></a>Creational Patterns</h3>
<ul>
<li>Fatory Method</li>
<li>SingleTon</li>
</ul>
<h3 id="Behavioral Patterns"><a href="#Behavioral Patterns"></a>Behavioral Patterns</h3>
<ul>
<li>Strategy</li>
<li>Observer</li>
<li>Iterator</li>
</ul>
<h3 id="Structural Patterns"><a href="#Structural Patterns"></a>Structural Patterns</h3>
<ul>
<li>Adapter</li>
<li>Decorator</li>
<li>Proxy</li>
</ul>
<h2 id="&#x8BBE;&#x8BA1;&#x539F;&#x5219; vs &#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;"><a href="#&#x8BBE;&#x8BA1;&#x539F;&#x5219; vs &#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;"></a>&#x8BBE;&#x8BA1;&#x539F;&#x5219; vs &#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;</h2>
<ul>
<li>&#x7B80;&#x6D01;&#x7406;&#x89E3;&#xFF1A;&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;&#xFF08;&#x8BED;&#x8A00;&#x76F8;&#x5173;&#xFF09;&#x662F;&#x5BF9;&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF08;&#x8BED;&#x8A00;&#x72EC;&#x7ACB;&#xFF09;&#x7684;&#x5B9E;&#x73B0;</li>
<li>&#x957F;&#x6587;&#x7406;&#x89E3;
<ul>
<li>Design principles provide high level guidelines to design better software applications. They do not provide implementation guidelines and are not bound to any programming language.</li>
<li>Design Pattern provides low-level solutions related to implementation, of commonly occurring object-oriented problems. In other words, design pattern suggests a specific implementation for the specific object-oriented programming problem.</li>
</ul>
</li>
</ul>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://github.com/ryanmcdermott/clean-code-javascript#solid</li>
<li>https://www.tutorialsteacher.com/articles/difference-between-design-principle-and-design-pattern</li>
<li>https://github.com/sohamkamani/javascript-design-patterns-for-humans#behavioral-design-patterns</li>
<li>https://github.com/lpxxn/rust-design-pattern</li>
</ul>
<h1 id="&#x5173;&#x4E8E;&#x7EE7;&#x627F;"><a href="#&#x5173;&#x4E8E;&#x7EE7;&#x627F;"></a>&#x5173;&#x4E8E;&#x7EE7;&#x627F;</h1>
<p>&#x8C08;&#x5230;&#x7EE7;&#x627F;&#x5C31;&#x4F1A;&#x8BF4;&#x5230;&#x201C;&#x7C7B;&#x201D;&#xFF0C;&#x201C;&#x7C7B;&#x201D;&#x5C01;&#x88C5;&#x7684;&#x662F;&#x6570;&#x636E;&#xFF0C;&#x662F;&#x5BF9;&#x540C;&#x4E00;&#x7C7B;&#x6570;&#x636E;&#x5B9E;&#x4F53;&#x4EE5;&#x53CA;&#x5176;&#x5904;&#x7406;&#x65B9;&#x6CD5;&#x7684;&#x62BD;&#x8C61;&#x3002;</p>
<ul>
<li>
<p>&#x76EE;&#x7684;&#xFF1A;</p>
<ol>
<li>&#x4EE3;&#x7801;&#x590D;&#x7528;</li>
<li>&#x591A;&#x6001;&#xFF08;&#x540C;&#x4E00;&#x64CD;&#x4F5C;&#x4F5C;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x53EF;&#x4EE5;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x89E3;&#x91CA;&#xFF0C;&#x4EA7;&#x751F;&#x4E0D;&#x540C;&#x7684;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x3002;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#xFF1A;&#x8986;&#x76D6;&#xFF0C;&#x91CD;&#x8F7D;&#xFF1B;&#x67D0;&#x79CD;&#x7A0B;&#x5EA6;&#x4E5F;&#x7B97;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF1F;&#xFF09;
<ul>
<li>&#x8986;&#x76D6;&#xFF1A;&#x6307;&#x5B50;&#x7C7B;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x7236;&#x7C7B;&#x65B9;&#x6CD5;&#xFF0C;&#x4F8B;&#x5982;js&#x7684;prototype</li>
<li>&#x91CD;&#x8F7D;&#xFF1A;&#x591A;&#x4E2A;&#x540C;&#x540D;&#x4F46;&#x53C2;&#x6570;&#x4E0D;&#x540C;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4F8B;&#x5982; Rust &#x51FD;&#x6570;&#x6A21;&#x677F;</li>
</ul>
</li>
</ol>
</li>
<li>
<p>&#x7EE7;&#x627F;&#x65B9;&#x5F0F;&#xFF1A;</p>
<ol>
<li>&#x6B63;&#x7EDF;&#xFF1A;C++,java</li>
<li>&#x6A21;&#x62DF;&#xFF1A;js&#x539F;&#x578B;&#x94FE;</li>
<li>&#x65E0;&#xFF1A;Rust trait &#x7EC4;&#x5408;&#x5B9E;&#x73B0;&#x591A;&#x6001;
&#x601D;&#x8003;&#xFF1A;Rust &#x7684;&#x7F16;&#x7A0B;&#x5EFA;&#x6A21;&#x6A21;&#x5F0F;&#x66F4;&#x50CF;&#x662F;&#x7EC4;&#x5408;&#xFF08;Composition&#xFF09; &#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x627F;&#xFF08;Inheritance&#xFF09;&#xFF1F;&#x6709;&#x70B9;&#x7C7B;&#x4F3C; Vue3 &#x9009;&#x62E9; Composition-API &#x4EE3;&#x66FF; Class-Option&#xFF1F;</li>
</ol>
</li>
</ul>
<p>&#x591A;&#x6001;&#x56FE;&#x89E3;&#xFF1A;<img src="https://pic1.zhimg.com/80/v2-6f26625afb5174fa5228e817cd68a7db_1440w.jpg?source=1940ef5c" alt="&#x591A;&#x6001;"></p>
<p><a href="https://www.zhihu.com/question/66038192/answer/1898435232">&#x56FE;&#x6765;&#x6E90;</a></p>
<h3 id="Reference"><a href="#Reference"></a>Reference</h3>
<ul>
<li><a href="https://fengliang.io/RustWHY/design_choices/why_not_inheritance.html">&#x4E3A;&#x4EC0;&#x4E48;Rust&#x6CA1;&#x6709;&#x7EE7;&#x627F;&#xFF1F;</a></li>
<li>https://www.runoob.com/rust/rust-object.html</li>
</ul>
<h1 id="&#x5173;&#x4E8E;&#x9762;&#x5411;&#x5BF9;&#x8C61;"><a href="#&#x5173;&#x4E8E;&#x9762;&#x5411;&#x5BF9;&#x8C61;"></a>&#x5173;&#x4E8E;&#x9762;&#x5411;&#x5BF9;&#x8C61;</h1>
<ul>
<li>&#x89E3;&#x91CA;&#xFF1A;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x901A;&#x5E38;&#x5B9E;&#x73B0;&#x4E86;&#x6570;&#x636E;&#x7684;&#x5C01;&#x88C5;&#x4E0E;&#x7EE7;&#x627F;&#x5E76;&#x80FD;&#x57FA;&#x4E8E;&#x6570;&#x636E;&#x8C03;&#x7528;&#x65B9;&#x6CD5;&#x3002;</li>
<li>&#x6709;&#xFF1A;js&#x4E00;&#x5207;&#x90FD;&#x662F;&#x5BF9;&#x8C61;</li>
<li>&#x65E0;&#xFF1A;Rust &#x4E0D;&#x662F;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x529F;&#x80FD;&#x90FD;&#x5F97;&#x4EE5;&#x5B9E;&#x73B0;&#x3002;</li>
</ul>
<h1 id="React&#x72B6;&#x6001;&#x7BA1;&#x7406;"><a href="#React&#x72B6;&#x6001;&#x7BA1;&#x7406;"></a>React&#x72B6;&#x6001;&#x7BA1;&#x7406;</h1>
<ul>
<li>Redux
<ul>
<li>&#x901A;&#x8FC7;props&#x6CE8;&#x5165; dispatch/state&#xFF0C;&#x89C4;&#x907F;&#x4E86; useContext &#x65B9;&#x6848;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x7684;&#x91CD;&#x590D;&#x6E32;&#x67D3;</li>
</ul>
</li>
<li>Mobx &#xFF08;&#x6709;&#x70B9;&#x7C7B;&#x4F3C;createContext + useContext + reactivity&#xFF09;
<ul>
<li>&#x7279;&#x5F81;&#xFF1A;Mobx + React &#x7C7B;&#x4F3C;&#x7B49;&#x4E8E; Vue</li>
</ul>
</li>
<li>createContext + useContext + useReducer
<ul>
<li>&#x5751;&#xFF1A;createContext &#x8FD4;&#x56DE;&#x7684; Provider &#x4E2D; value&#x53D8;&#x5316;&#x4F1A;&#x89E6;&#x53D1;&#x6240;&#x6709;&#x5B50;&#x7EC4;&#x4EF6;&#x91CD;&#x590D;&#x6E32;&#x67D3;
<ul>
<li>&#x5173;&#x8054;&#x601D;&#x8003;&#xFF1A;&#x8FD9;&#x79CD;&#x65B9;&#x6848;&#x9002;&#x7528;&#x4E8E;&#x5C0F;&#x578B;&#x7684;&#x72B6;&#x6001;&#x7BA1;&#x7406;&#xFF1F;</li>
</ul>
</li>
<li>Todo&#xFF1A;&#x4E86;&#x89E3;&#x91CD;&#x590D;&#x6E32;&#x67D3;&#x7684;&#x8FD0;&#x8F6C;&#x673A;&#x5236;</li>
<li>&#x4F18;&#x5316;&#xFF1A;&#x5BF9;&#x6E32;&#x67D3;&#x505A; useMemo</li>
</ul>
</li>
</ul>
<h1 id="&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x524D;&#x7AEF;&#x6846;&#x67B6;&#x8BBE;&#x8BA1;"><a href="#&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x524D;&#x7AEF;&#x6846;&#x67B6;&#x8BBE;&#x8BA1;"></a>&#x6587;&#x7AE0;&#x7CBE;&#x8BFB;&#x4E4B;&#x524D;&#x7AEF;&#x6846;&#x67B6;&#x8BBE;&#x8BA1;</h1>
<h2 id="&#x7EC4;&#x4EF6;&#x7C7B;&#x578B;"><a href="#&#x7EC4;&#x4EF6;&#x7C7B;&#x578B;"></a>&#x7EC4;&#x4EF6;&#x7C7B;&#x578B;</h2>
<ul>
<li>&#x7EAF;&#x5C55;&#x793A;&#x578B;&#x7684;&#x7EC4;&#x4EF6;&#xFF0C;&#x6570;&#x636E;&#x8FDB;&#xFF0C;DOM&#x51FA;&#xFF0C;&#x76F4;&#x89C2;&#x660E;&#x4E86;</li>
<li>&#x63A5;&#x5165;&#x578B;&#x7EC4;&#x4EF6;&#xFF0C;&#x5728;React&#x573A;&#x666F;&#x4E0B;&#x7684;container component&#xFF0C;&#x8FD9;&#x79CD;&#x7EC4;&#x4EF6;&#x4F1A;&#x8DDF;&#x6570;&#x636E;&#x5C42;&#x7684;service&#x6253;&#x4EA4;&#x9053;&#xFF0C;&#x4F1A;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x8DDF;&#x670D;&#x52A1;&#x5668;&#x6216;&#x8005;&#x8BF4;&#x6570;&#x636E;&#x6E90;&#x6253;&#x4EA4;&#x9053;&#x7684;&#x903B;&#x8F91;&#xFF0C;container&#x4F1A;&#x628A;&#x6570;&#x636E;&#x5411;&#x4E0B;*&#x4F20;&#x9012;&#x7ED9;&#x5C55;&#x793A;&#x578B;&#x7EC4;&#x4EF6;</li>
<li>&#x4EA4;&#x4E92;&#x578B;&#x7EC4;&#x4EF6;&#xFF0C;&#x5178;&#x578B;&#x7684;&#x4F8B;&#x5B50;&#x662F;&#x5BF9;&#x4E8E;&#x8868;&#x5355;&#x7EC4;&#x4EF6;&#x7684;&#x5C01;&#x88C5;&#x548C;&#x52A0;&#x5F3A;&#xFF0C;&#x5927;&#x90E8;&#x5206;&#x7684;&#x7EC4;&#x4EF6;&#x5E93;&#x90FD;&#x662F;&#x4EE5;&#x4EA4;&#x4E92;&#x578B;&#x7EC4;&#x4EF6;&#x4E3A;&#x4E3B;&#xFF0C;&#x6BD4;&#x5982;&#x8BF4;Element UI&#xFF0C;&#x7279;&#x70B9;&#x662F;&#x6709;&#x6BD4;&#x8F83;&#x590D;&#x6742;&#x7684;&#x4EA4;&#x4E92;&#x903B;&#x8F91;&#xFF0C;&#x4F46;&#x662F;&#x662F;&#x6BD4;&#x8F83;&#x901A;&#x7528;&#x7684;&#x903B;&#x8F91;&#xFF0C;&#x5F3A;&#x8C03;&#x7EC4;&#x4EF6;&#x7684;&#x590D;&#x7528;</li>
<li>&#x529F;&#x80FD;&#x578B;&#x7EC4;&#x4EF6;&#xFF0C;&#x4EE5;Vue&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;&#x4E3E;&#x4F8B;&#xFF0C;&#x8DEF;&#x7531;&#x7684;router-view&#x7EC4;&#x4EF6;&#x3001;transition&#x7EC4;&#x4EF6;&#xFF0C;&#x672C;&#x8EAB;&#x5E76;&#x4E0D;&#x6E32;&#x67D3;&#x4EFB;&#x4F55;&#x5185;&#x5BB9;&#xFF0C;&#x662F;&#x4E00;&#x4E2A;&#x903B;&#x8F91;&#x578B;&#x7684;&#x4E1C;&#x897F;&#xFF0C;&#x4F5C;&#x4E3A;&#x4E00;&#x79CD;&#x6269;&#x5C55;&#x6216;&#x8005;&#x662F;&#x62BD;&#x8C61;&#x673A;&#x5236;&#x5B58;&#x5728;</li>
</ul>
<h2 id="&#x72B6;&#x6001;&#x7BA1;&#x7406;"><a href="#&#x72B6;&#x6001;&#x7BA1;&#x7406;"></a>&#x72B6;&#x6001;&#x7BA1;&#x7406;</h2>
<p>&#x5982;&#x4F55;&#x7BA1;&#x7406;&#x5C06;&#x4E8B;&#x4EF6;&#x6E90;&#x6620;&#x5C04;&#x5230;&#x72B6;&#x6001;&#x53D8;&#x5316;&#x7684;&#x8FC7;&#x7A0B;&#xFF0C;&#x5982;&#x4F55;&#x5C06;&#x8FD9;&#x4E2A;&#x6620;&#x5C04;&#x7684;&#x8FC7;&#x7A0B;&#x4ECE;&#x89C6;&#x56FE;&#x7EC4;&#x4EF6;&#x4E2D;&#x5265;&#x79BB;&#x51FA;&#x6765;&#xFF0C;&#x5982;&#x4F55;&#x7EC4;&#x7EC7;&#x8FD9;&#x4E00;&#x90E8;&#x5206;&#x4EE3;&#x7801;&#x6765;&#x63D0;&#x9AD8;&#x53EF;&#x7EF4;&#x62A4;&#x6027;&#xFF0C;&#x662F;&#x72B6;&#x6001;&#x7BA1;&#x7406;&#x8981;&#x89E3;&#x51B3;&#x7684;&#x672C;&#x8D28;&#x95EE;&#x9898;</p>
<h2 id="CSS&#x65B9;&#x6848;"><a href="#CSS&#x65B9;&#x6848;"></a>CSS&#x65B9;&#x6848;</h2>
<ul>
<li>css modules</li>
<li>css-in-js</li>
</ul>
<h2 id="&#x6784;&#x5EFA;&#x5DE5;&#x5177;"><a href="#&#x6784;&#x5EFA;&#x5DE5;&#x5177;"></a>&#x6784;&#x5EFA;&#x5DE5;&#x5177;</h2>
<p>&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;</p>
<ul>
<li>&#x4EFB;&#x52A1;&#x7684;&#x81EA;&#x52A8;&#x5316;</li>
<li>&#x5F00;&#x53D1;&#x4F53;&#x9A8C;&#x548C;&#x6548;&#x7387;&#xFF08;&#x65B0;&#x7684;&#x8BED;&#x8A00;&#x529F;&#x80FD;&#xFF0C;&#x8BED;&#x6CD5;&#x7CD6;&#xFF0C;hot reload &#x7B49;&#x7B49;&#xFF09;</li>
<li>&#x90E8;&#x7F72;&#x76F8;&#x5173;&#x7684;&#x9700;&#x6C42;</li>
<li>&#x7F16;&#x8BD1;&#x65F6;&#x4F18;&#x5316;</li>
</ul>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li><a href="https://juejin.cn/post/6844903510455107598">Evanyou &#x804A;&#x804A;&#x524D;&#x7AEF;&#x6846;&#x67B6;</a></li>
</ul>
<h1 id="CSS Animation,Transition &#x539F;&#x7406;"><a href="#CSS Animation,Transition &#x539F;&#x7406;"></a>CSS Animation,Transition &#x539F;&#x7406;</h1>
<ul>
<li>
<p>GPU&#x6BD4;&#x8F83;&#x64C5;&#x957F;&#x4E8E;&#xFF1A;</p>
<ul>
<li>
<p>&#x7ED8;&#x5236;&#x4F4D;&#x56FE;&#x5230;&#x5C4F;&#x5E55;</p>
</li>
<li>
<p>&#x91CD;&#x590D;&#x7684;&#x7ED8;&#x5236;&#x540C;&#x4E00;&#x4E2A;&#x4F4D;&#x56FE;</p>
</li>
<li>
<p>&#x5728;&#x4E0D;&#x540C;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x4EE5;&#x4E0D;&#x540C;&#x7684;&#x65CB;&#x8F6C;&#x89D2;&#x5EA6;&#xFF0C;&#x6216;&#x8005;&#x4E0D;&#x540C;&#x7684;&#x7F29;&#x653E;&#x5927;&#x5C0F;&#x6765;&#x7ED8;&#x5236;&#x540C;&#x4E00;&#x4E2A;&#x4F4D;&#x56FE;&#x3002;</p>
</li>
</ul>
</li>
<li>
<p>GPU&#x76F8;&#x5BF9;&#x6162;&#x7684;&#x5730;&#x65B9;&#xFF1A;</p>
<ul>
<li>&#x5C06;&#x4F4D;&#x56FE;&#x52A0;&#x8F7D;&#x5230;&#x663E;&#x5B58;&#x91CC;&#x3002;</li>
</ul>
</li>
</ul>
<p>&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-css"><span class="hljs-comment">/*hover&#x7684;&#x65F6;&#x5019;height&#x53D8;&#x5316; 100 -&gt; 200&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x5143;&#x7D20;&#x5F53;&#x524D;&#x4F4D;&#x56FE;&#x7136;&#x540E;&#x56DE;&#x4F20;&#x7ED9;GPU&#x7ED8;&#x5236;*/</span>
<span class="hljs-selector-tag">div</span> {   
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;   
    <span class="hljs-attribute">transition</span>: height <span class="hljs-number">1s</span> linear;   
}   

<span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:hover</span> {   
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;   
} 

<span class="hljs-comment">/*
CSS&#x7684;transform&#x5C5E;&#x6027;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x5143;&#x7D20;&#x7684;&#x5E03;&#x5C40;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x5230;&#x5176;&#x5468;&#x56F4;&#x7684;&#x5143;&#x7D20;&#x3002;&#x5B83;&#x628A;&#x5143;&#x7D20;&#x5F53;&#x505A;&#x4E00;&#x4E2A;&#x6574;&#x4F53;&#x770B;&#x5F85;&#x2014;&#x2014;&#x7F29;&#x653E;&#x6574;&#x4E2A;&#x5143;&#x7D20;&#x3001;&#x65CB;&#x8F6C;&#x6574;&#x4E2A;&#x5143;&#x7D20;&#x6216;&#x8005;&#x79FB;&#x52A8;&#x6574;&#x4E2A;&#x5143;&#x7D20;&#x3002;
&#x6240;&#x4EE5;&#x4F4D;&#x56FE;&#x53EA;&#x4F1A;&#x5728;cpu&#x8DDF;GPU &#x4E4B;&#x95F4;&#x4F20;&#x9012;&#x4E00;&#x6B21;&#xFF0C;scale&#x7684;&#x91CD;&#x65B0;&#x7ED8;&#x5236;&#x53EA;&#x53D1;&#x751F;&#x5728;GPU&#xFF0C;&#x800C;&#x4E0D;&#x4F1A;&#x963B;&#x585E;&#x4E3B;&#x7EBF;&#x7A0B;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x66F4;&#x52A0;&#x6D41;&#x7545;&#xFF1F;
*/</span>
<span class="hljs-selector-tag">div</span> {   
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(<span class="hljs-number">0.5</span>);   
    <span class="hljs-attribute">transition</span>: transform <span class="hljs-number">1s</span> linear;   
}   
     
<span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:hover</span> {   
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.0</span>);   
}  
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x9009;&#x62E9;&#x72EC;&#x7ACB;&#x6027;&#x6BD4;&#x8F83;&#x5F3A;&#x7684;CSS&#x5C5E;&#x6027;&#x6709;&#x52A9;&#x4E8E;&#x6539;&#x5584;&#x52A8;&#x753B;&#x6548;&#x679C;&#xFF1A;transform&#xFF0C;opacity&#xFF0C;filter &#xFF08;&#x4F9D;&#x8D56;&#x4E8E;&#x8FC7;&#x6EE4;&#x5668;&#x7684;&#x590D;&#x6742;&#x5EA6;&#x548C;&#x6D4F;&#x89C8;&#x5668;&#xFF09;</p>
<p>&#x62D3;&#x5C55;&#xFF1A;&#x6E32;&#x67D3;&#x7EBF;&#x7A0B;&#x5206;&#x4E3A; &#x4E3B;&#x7EBF;&#x7A0B; (main thread) &#x548C; &#x5408;&#x6210;&#x7EBF;&#x7A0B; (compositor thread)</p>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://www.jb51.net/css/348357.html</li>
</ul>
<h1 id="Vue&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x5904;&#x7406;"><a href="#Vue&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x5904;&#x7406;"></a>Vue&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x5904;&#x7406;</h1>
<p>Vue&#x6E90;&#x7801;&#x91CC;&#x9762;lifeCycle/watch/directive/transition&#x7B49;&#x7684;callback/hook&#x7B49;&#x4E00;&#x822C;&#x4F1A;&#x88AB;&#x5C01;&#x88C5;&#x6267;&#x884C;</p>
<pre><code class="language-js"> <span class="hljs-keyword">const</span> res = callWithAsyncErrorHandling(hook, target, type, args)
</code></pre>
<ul>
<li>&#x5C01;&#x88C5;&#x6267;&#x884C;&#x8981;&#x7D20;&#xFF1A;
<ul>
<li>fn: Function,</li>
<li>instance: ComponentInternalInstance | null,</li>
<li>type: ErrorTypes,</li>
</ul>
</li>
<li>&#x9519;&#x8BEF;&#x5206;&#x7C7B;&#xFF1A;LifecycleHooks | ErrorCodes&#xFF08;&#x5176;&#x4ED6;&#x51FD;&#x6570;&#x6267;&#x884C;&#x70B9;&#xFF1A;callback + hook&#x7B49;&#xFF09;</li>
<li>&#x540C;&#x6B65;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF1A;&#x5C1D;&#x8BD5;&#x51FD;&#x6570;&#x8FD0;&#x884C;&#x5904;&#x7406;&#x540C;&#x6B65;&#x9519;&#x8BEF;&#xFF0C;&#x5E76;&#x641C;&#x96C6;&#x8FD4;&#x56DE;&#x503C;</li>
<li>&#x5F02;&#x6B65;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF1A;&#x6839;&#x636E;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x5426;Promise&#x6765;&#x5904;&#x7406;&#x5F02;&#x6B65;&#x9519;&#x8BEF;</li>
</ul>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li><a href="https://github.com/vuejs/core/blob/main/packages/runtime-core/src/errorHandling.ts">@vue/runtime-core/errorHandling</a></li>
</ul>
<h1 id="&#x63D2;&#x4EF6;&#x5BF9;&#x6BD4;&#xFF08;Vue vs React&#xFF09;"><a href="#&#x63D2;&#x4EF6;&#x5BF9;&#x6BD4;&#xFF08;Vue vs React&#xFF09;"></a>&#x63D2;&#x4EF6;&#x5BF9;&#x6BD4;&#xFF08;Vue vs React&#xFF09;</h1>
<h2 id="&#x63D2;&#x4EF6;"><a href="#&#x63D2;&#x4EF6;"></a>&#x63D2;&#x4EF6;</h2>
<ol>
<li>Vue&#x63D2;&#x4EF6;</li>
</ol>
<pre><code class="language-js"><span class="hljs-comment">// calls \`MyPlugin.install(Vue)\`</span>
Vue.use(MyPlugin)

<span class="hljs-keyword">new</span> Vue({
  <span class="hljs-comment">//... options</span>
})
<span class="hljs-comment">/**
 * 
 * &#x9002;&#x914D; Vue3&#x7684; Composition-API&#x573A;&#x666F;
 * 1. &#x5728;MyPlugin&#x521D;&#x59CB;&#x5316;&#x9636;&#x6BB5; app.provide(injectKey)&#x6CE8;&#x5165;&#x5B9E;&#x4F8B;
 * 2. &#x5728;MyPlugin use&#x9636;&#x6BB5; app.inject(injectKey)&#x83B7;&#x53D6;&#x5B9E;&#x4F8B;
 * 
 * Class &#x573A;&#x666F;
 * 1. &#x521D;&#x59CB;&#x5316;&#x9636;&#x6BB5; &#x628A; MyPlugin &#x9010;&#x6B65; mixin &#x5230;&#x5B50;&#x7EC4;&#x4EF6;
 * 2. &#x8C03;&#x7528;&#x9636;&#x6BB5;&#x76F4;&#x63A5;&#x5728;&#x7EC4;&#x4EF6;&#x5B9E;&#x4F8B;&#x4E0A;&#x83B7;&#x53D6;
</span></code></pre>
<ol start="2">
<li>React&#x63D2;&#x4EF6;</li>
</ol>
<pre><code class="language-js"><span class="hljs-comment">// &#x4F8B;&#x5B50;</span>
 &lt;Provider store={store}&gt;
 &lt;/Provider&gt;
</code></pre>
<p>// &#x4F7F;&#x7528;&#x5730;&#x65B9;&#xFF1A;&#x4E00;&#x822C;&#x9700;&#x8981;&#x5BF9;&#x7EC4;&#x4EF6;&#x505A;&#x4E8C;&#x6B21;&#x5C01;&#x88C5;&#x8FDB;&#x884C;connect&#xFF0C;&#x7136;&#x540E;&#x53EF;&#x4EE5;useDispatch&#xFF0C;<strong>&#x7C7B;&#x4F3C;Vue inject&#xFF1F;</strong></p>
<h3 id="&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#xFF08;Vuex vs Redux&#xFF09;"><a href="#&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#xFF08;Vuex vs Redux&#xFF09;"></a>&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#xFF08;Vuex vs Redux&#xFF09;</h3>
<ol>
<li>Vuex&#x63D2;&#x4EF6;</li>
</ol>
<pre><code class="language-js"><span class="hljs-comment">// &#x63D2;&#x4EF6;&#x6A21;&#x677F;</span>
<span class="hljs-keyword">const</span> myPlugin = <span class="hljs-function">(<span class="hljs-params">store</span>) =&gt;</span> {
  <span class="hljs-comment">// called when the store is initialized</span>
  store.subscribe(<span class="hljs-function">(<span class="hljs-params">mutation, state</span>) =&gt;</span> {
    <span class="hljs-comment">// called after every mutation.</span>
    <span class="hljs-comment">// The mutation comes in the format of \`{ type, payload }\`.</span>
  })
}
</code></pre>
<pre><code class="language-js"><span class="hljs-comment">// &#x63D2;&#x4EF6;&#x4F7F;&#x7528;</span>
<span class="hljs-keyword">const</span> store = createStore({
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">plugins</span>: [myPlugin]
})
</code></pre>
<p>// &#x63D2;&#x4EF6;&#x6848;&#x4F8B;
<a href="https://github.com/robinvdvleuten/vuex-persistedstate">vuex-persistedstate</a>&#x901A;&#x8FC7;&#x5BF9;mutation&#x7684;&#x62E6;&#x622A;&#xFF0C;&#x5BF9;&#x6A21;&#x5757;paths&#x8FDB;&#x884C;&#x7CBE;&#x51C6;&#x6301;&#x4E45;&#x5316;</p>
<ol start="2">
<li>Redux &#x4E2D;&#x95F4;&#x4EF6;</li>
</ol>
<pre><code class="language-js"><span class="hljs-comment">// &#x63D2;&#x4EF6;&#x4F8B;&#x5B50;</span>
<span class="hljs-keyword">const</span> logger = <span class="hljs-function"><span class="hljs-params">store</span> =&gt;</span> <span class="hljs-function"><span class="hljs-params">next</span> =&gt;</span> <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;dispatching&apos;</span>, action)
  <span class="hljs-keyword">let</span> result = next(action)
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;next state&apos;</span>, store.getState())
  <span class="hljs-keyword">return</span> result
}
</code></pre>
<pre><code class="language-js"><span class="hljs-comment">// &#x63D2;&#x4EF6;&#x4F7F;&#x7528;</span>
<span class="hljs-keyword">import</span> { createStore, combineReducers, applyMiddleware } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;redux&apos;</span>

<span class="hljs-keyword">const</span> todoApp = combineReducers(reducers)
<span class="hljs-keyword">const</span> store = createStore(
  todoApp,
  <span class="hljs-comment">// applyMiddleware() tells createStore() how to handle middleware</span>
  applyMiddleware(logger, crashReporter)
)

</code></pre>
<p>// &#x590D;&#x6742;&#x6848;&#x4F8B;
<a href="https://github.com/rt2zz/redux-persist#nested-persists">redux-persist</a></p>
<h3 id="&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;"><a href="#&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;"></a>&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;&#x7684;&#x63D2;&#x4EF6;</h3>
<ol>
<li>redux-persist&#x7684;&#x63D2;&#x4EF6;&#xFF0C;&#x6216;&#x8005;&#x79F0;&#x4E3A; Transforms
&#x4F8B;&#x5B50;</li>
</ol>
<pre><code class="language-js"><span class="hljs-keyword">import</span> createExpirationTransform <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;redux-persist-transform-expire&apos;</span>;

<span class="hljs-keyword">const</span> expireTransform = createExpirationTransform({
  <span class="hljs-attr">expireKey</span>: <span class="hljs-string">&apos;customExpiresAt&apos;</span>,
  <span class="hljs-attr">defaultState</span>: {
    <span class="hljs-attr">custom</span>: <span class="hljs-string">&apos;values&apos;</span>
  }
});

persistStore(store, {
  <span class="hljs-attr">transforms</span>: [expireTransform]
});
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Vue&#x7684;mutable &#x6BD4; React&#x7684;immutable&#x5BF9;&#x6570;&#x636E;&#x7684;&#x72B6;&#x6001;&#x7684;&#x64CD;&#x4F5C;&#x6765;&#x7684;&#x76F4;&#x63A5;&#xFF0C;&#x5BFC;&#x81F4;&#x5728;&#x72B6;&#x6001;&#x5904;&#x7406;&#x63D2;&#x4EF6;&#x6A21;&#x5F0F;&#x4E5F;&#x4F1A;&#x4E0D;&#x540C;&#xFF1B;vuex&#xFF08;&#x76F4;&#x63A5;mutation&#x6539;&#x53D8;&#x6570;&#x636E;&#xFF09;&#x6574;&#x4F53;&#x4E0A;&#x6BD4;redux&#xFF08;&#x901A;&#x8FC7;dispatch action&#xFF0C;&#x8D70;&#x6574;&#x4E2A;reducer&#x6D41;&#x7A0B;&#x8FD4;&#x56DE;&#x65B0;&#x7684;state&#xFF09;&#x66F4;&#x52A0;&#x76F4;&#x63A5;&#xFF0C;&#x5BFC;&#x81F4;&#x63D2;&#x4EF6;&#x6A21;&#x5F0F;&#x4E0A;vuex&#x76F4;&#x63A5;&#x52AB;&#x6301;mutation&#x6BD4;redux&#x52AB;&#x6301;reducer&#x6765;&#x7684;&#x66F4;&#x52A0;&#x7B80;&#x5355;</p>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://vuex.vuejs.org/guide/plugins.html</li>
<li>https://redux.js.org/understanding/history-and-design/middleware</li>
<li>https://v2.vuejs.org/v2/guide/plugins.html?redirect=true</li>
</ul>
<h1 id="&#x6A21;&#x62DF;LRU&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;Set vs Array&#xFF09;"><a href="#&#x6A21;&#x62DF;LRU&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;Set vs Array&#xFF09;"></a>&#x6A21;&#x62DF;LRU&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;Set vs Array&#xFF09;</h1>
<p>Set&#x4F1A;&#x81EA;&#x52A8;&#x8FFD;&#x8E2A;&#x63D2;&#x5165;&#x7684;&#x5148;&#x540E;&#x987A;&#x5E8F;</p>
<ol>
<li>Set&#x7ED3;&#x6784;</li>
</ol>
<pre><code class="language-js"><span class="hljs-keyword">let</span> s = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>()

s.add(<span class="hljs-number">3</span>)
s.add(<span class="hljs-number">2</span>)

<span class="hljs-comment">// make this key the freshest</span>
s.delete(<span class="hljs-number">3</span>)
s.add(<span class="hljs-number">3</span>)

<span class="hljs-comment">// get Oldest</span>
<span class="hljs-built_in">console</span>.log(s.values().next().value); <span class="hljs-comment">//2</span>
</code></pre>
<ol start="2">
<li>Array&#x7ED3;&#x6784;</li>
</ol>
<pre><code class="language-js"><span class="hljs-keyword">let</span> s = []

s.push(<span class="hljs-number">2</span>)
s.push(<span class="hljs-number">3</span>)

<span class="hljs-comment">// make this key the freshest</span>
s.splice(s.indexOf(<span class="hljs-number">3</span>))
s.push(<span class="hljs-number">3</span>)

<span class="hljs-comment">// get Oldest</span>
<span class="hljs-built_in">console</span>.log(s[<span class="hljs-number">0</span>])
</code></pre>
<h1 id="ORM &#x6A21;&#x5757;&#x7EC4;&#x6210;"><a href="#ORM &#x6A21;&#x5757;&#x7EC4;&#x6210;"></a>ORM &#x6A21;&#x5757;&#x7EC4;&#x6210;</h1>
<ul>
<li>ORM
<ul>
<li>ORM
<ul>
<li>Engine (open db, connect dialect and db_path)</li>
<li>Session(prepare for next operation,  open/close DB)</li>
</ul>
</li>
<li>Dialect
<ul>
<li>dialect : db and dialect container</li>
<li>sqlite3 : language type &lt;- map -&gt; db column type</li>
<li>mysql ...</li>
</ul>
</li>
<li>Schema (Parse a struct to a Schema instance)
<ul>
<li>&#x9759;&#x6001;&#x8BED;&#x8A00;&#xFF08;&#x4F8B;&#x5982; golang&#xFF09;&#xFF1A;type struct&#xFF08;Modal&#xFF09; &lt;- &#x53CD;&#x5C04; -&gt; Table Fields</li>
<li>&#x52A8;&#x6001;&#x8BED;&#x8A00;&#xFF08;&#x4F8B;&#x5982; js&#xFF09;&#xFF1A;&#x624B;&#x52A8; Table Fields &#x521B;&#x5EFA; -&gt; Table Fields</li>
</ul>
</li>
<li>Clause (SQL Builder)
<ul>
<li>generator: keyword sql string(vars) generation</li>
<li>clause : depend on generator, set/build final sql string</li>
</ul>
</li>
<li>Session ( SQL Execution )
<ul>
<li>raw: raw sql execution</li>
<li>table: table operation</li>
<li>record: ORM Open API (Find/Select/Update/Delete/Where/Limit ...) ,depend on Clause/clause &amp; table &amp; raw</li>
<li>hooks: ORM Open API hook</li>
<li>transaction: Atomicity/Consistency/Isolation/Durability</li>
<li>migration</li>
</ul>
</li>
</ul>
</li>
</ul>
`,n=[{level:1,title:"\u673A\u5668\u5B66\u4E60\u5206\u7C7B\u7684\u4E00\u70B9\u7406\u89E3",children:[]},{level:1,title:"\u5C1D\u8BD5\u7406\u89E3\u6B8B\u5DEE\u7F51\u7EDC",children:[]},{level:1,title:"\u5C1D\u8BD5\u7406\u89E3 ONNX \uFF08Open Neural Network Exchange\uFF09",children:[]},{level:1,title:"Transformer \u6A21\u578B\u7684\u81EA\u6CE8\u610F\u529B\u673A\u5236 - \u5C1D\u8BD5\u7406\u89E3",children:[]},{level:1,title:"\u6DF1\u5EA6\u5B66\u4E60\u4E2D\u7684 Epoch \u548C Batch",children:[]},{level:1,title:"GPT \u5C1D\u8BD5",children:[]},{level:1,title:"\u5185\u5B58\u5BF9\u9F50",children:[]},{level:1,title:"\u7B26\u53F7\u8868 2023-3-6",children:[]},{level:1,title:"\u98CE\u63A7\u5F15\u64CE\u4F18\u5316 2023-3-2",children:[]},{level:1,title:"\u6269\u5BB9\u673A\u5236 2023-3-2",children:[]},{level:1,title:"AOP\uFF08\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF09 2023-3-1",children:[]},{level:1,title:"\u9003\u9038\u5206\u6790",children:[{level:2,title:"Reference",children:[]}]},{level:1,title:"\u6587\u7AE0\u7CBE\u8BFB\u4E4B\u8BBE\u8BA1\u539F\u5219/\u6A21\u5F0F",children:[{level:2,title:"\u8BBE\u8BA1\u539F\u5219\uFF1ASOLID\u539F\u5219",children:[]},{level:2,title:"\u8BBE\u8BA1\u6A21\u5F0F",children:[{level:3,title:"Creational Patterns",children:[]},{level:3,title:"Behavioral Patterns",children:[]},{level:3,title:"Structural Patterns",children:[]}]},{level:2,title:"\u8BBE\u8BA1\u539F\u5219 vs \u8BBE\u8BA1\u6A21\u5F0F",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"\u5173\u4E8E\u7EE7\u627F",children:[{level:3,title:"Reference",children:[]}]},{level:1,title:"\u5173\u4E8E\u9762\u5411\u5BF9\u8C61",children:[]},{level:1,title:"React\u72B6\u6001\u7BA1\u7406",children:[]},{level:1,title:"\u6587\u7AE0\u7CBE\u8BFB\u4E4B\u524D\u7AEF\u6846\u67B6\u8BBE\u8BA1",children:[{level:2,title:"\u7EC4\u4EF6\u7C7B\u578B",children:[]},{level:2,title:"\u72B6\u6001\u7BA1\u7406",children:[]},{level:2,title:"CSS\u65B9\u6848",children:[]},{level:2,title:"\u6784\u5EFA\u5DE5\u5177",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"CSS Animation,Transition \u539F\u7406",children:[{level:2,title:"\u603B\u7ED3",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"Vue\u8FD0\u884C\u65F6\u9519\u8BEF\u5904\u7406",children:[{level:2,title:"Reference",children:[]}]},{level:1,title:"\u63D2\u4EF6\u5BF9\u6BD4\uFF08Vue vs React\uFF09",children:[{level:2,title:"\u63D2\u4EF6",children:[{level:3,title:"\u63D2\u4EF6\u7684\u63D2\u4EF6\uFF08Vuex vs Redux\uFF09",children:[]},{level:3,title:"\u63D2\u4EF6\u7684\u63D2\u4EF6\u7684\u63D2\u4EF6",children:[]}]},{level:2,title:"\u603B\u7ED3",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"\u6A21\u62DFLRU\u7684\u6570\u636E\u7ED3\u6784\uFF08Set vs Array\uFF09",children:[]},{level:1,title:"ORM \u6A21\u5757\u7EC4\u6210",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
