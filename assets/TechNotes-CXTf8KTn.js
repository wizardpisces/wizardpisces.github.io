const x={},F=`<h1 id="TechNotes"><a href="#TechNotes"></a>TechNotes</h1>
<p>&#x7B80;&#x4ECB;&#xFF1A;&#x4E2A;&#x4EBA;&#x6280;&#x672F;&#x601D;&#x8003;&#x4E0E;&#x603B;&#x7ED3;</p>
<h1 id="MCP SSE &#x7684;&#x7F3A;&#x9677;"><a href="#MCP SSE &#x7684;&#x7F3A;&#x9677;"></a>MCP SSE &#x7684;&#x7F3A;&#x9677;</h1>
<p>&#x5F53;&#x524D; MCP &#x57FA;&#x4E8E;&#x7684; sse &#x65E0;&#x72B6;&#x6001;&#x901A;&#x4FE1;&#x8FD8;&#x662F;&#x6709;&#x7F3A;&#x9677;&#xFF0C;&#x4F1A;&#x5BFC;&#x81F4;&#x5BA2;&#x6237;&#x7AEF;&#x591A;&#x6B21;&#x8BBF;&#x95EE;&#x4E22;&#x5931; session&#xFF08;&#x591A;&#x4E2A; pod &#x8D1F;&#x8F7D;&#x5747;&#x8861;&#x7684;&#x65F6;&#x5019;&#x5F88;&#x5BB9;&#x6613;&#x51FA;&#x73B0;&#xFF09;&#xFF0C;&#x8FD8;&#x5F97;&#x5F80; websocket &#x65B9;&#x5411;&#x6F14;&#x8FDB;</p>
<p>&#x66FE;&#x7ECF;&#x524D;&#x7AEF;&#x70ED;&#x66FF;&#x6362;&#xFF08;HMR&#xFF09;&#x6709;&#x8FC7;&#x7C7B;&#x4F3C;&#x7684;&#x6F14;&#x53D8;</p>
<h1 id="&#x4E3A;&#x4EC0;&#x4E48; mac &#x4E0D;&#x518D;&#x4F7F;&#x7528; CUDA&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48; mac &#x4E0D;&#x518D;&#x4F7F;&#x7528; CUDA&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48; mac &#x4E0D;&#x518D;&#x4F7F;&#x7528; CUDA&#xFF1F;</h1>
<p>&#x6838;&#x5FC3;&#x539F;&#x56E0;&#xFF1A;&#x7B26;&#x5408; Apple &#x7684;&#x5C01;&#x95ED;&#x751F;&#x6001;&#x6280;&#x672F;&#x8DEF;&#x7EBF;&#xFF0C;&#x8F6C;&#x5411; Metal &#x8BA9; Apple &#x80FD;&#x66F4;&#x597D;&#x5730;&#x4F18;&#x5316;&#x81EA;&#x5DF1;&#x7684;&#x786C;&#x4EF6;&#x4E0E;&#x8F6F;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF0C;&#x800C;&#x4E0D;&#x4F9D;&#x8D56;&#x5916;&#x90E8;&#x6280;&#x672F;&#x3002;</p>
<h1 id="&#x4E3A;&#x4EC0;&#x4E48; jest &#x9700;&#x8981; watchman&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48; jest &#x9700;&#x8981; watchman&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48; jest &#x9700;&#x8981; watchman&#xFF1F;</h1>
<ul>
<li>&#x539F;&#x56E0;&#xFF1A;&#x56E0;&#x4E3A; jest &#x9700;&#x8981;&#x76D1;&#x542C;&#x6587;&#x4EF6;&#x53D8;&#x5316;&#xFF0C;&#x800C; watchman &#x662F;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x76D1;&#x542C;&#x5DE5;&#x5177;&#xFF0C;&#x66F4;&#x9002;&#x5408;&#x5927;&#x578B;&#x9879;&#x76EE;&#xFF08;&#x6240;&#x4EE5; watchman &#x5F97;&#x5D29;&#x6E83;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4; jest &#x65E0;&#x6CD5;&#x6B63;&#x5E38;&#x5DE5;&#x4F5C;&#xFF09;</li>
<li>watchman &#x7684;&#x542F;&#x52A8; &#xFF1A;&#x5728;&#x7B2C;&#x4E00;&#x6B21; run jest &#x65F6;&#xFF0C;&#x4F1A;&#x542F;&#x52A8; watchman &#x6301;&#x7EED;&#x76D1;&#x542C;&#x6587;&#x4EF6;&#x53D8;&#x5316;</li>
<li>watch &#x8303;&#x56F4;&#xFF1A;&#x5386;&#x53F2;&#x542F;&#x52A8;&#x8FC7; jest &#x7684;&#x76EE;&#x5F55;&#x90FD;&#x4F1A;&#x7EB3;&#x5165;&#x5230; watchman &#x7684;&#x76D1;&#x542C;&#x8303;&#x56F4;&#xFF0C;&#x5728; MAC &#x7684;&#x6D3B;&#x52A8;&#x76D1;&#x89C6;&#x5668;&#x627E;&#x5230; watchman &#x6253;&#x5F00;&#x7684;&#x6587;&#x4EF6;&#x6216;&#x8005;&#x7A97;&#x53E3;&#x770B;&#x5230;</li>
</ul>
<h1 id="&#x4E3A;&#x4EC0;&#x4E48; git &#x6709;&#x4E86;&#x5206;&#x652F;&#x8FD8;&#x9700;&#x8981; tag&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48; git &#x6709;&#x4E86;&#x5206;&#x652F;&#x8FD8;&#x9700;&#x8981; tag&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48; git &#x6709;&#x4E86;&#x5206;&#x652F;&#x8FD8;&#x9700;&#x8981; tag&#xFF1F;</h1>
<ul>
<li>&#x5206;&#x652F;&#xFF1A;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x63D0;&#x4EA4;&#x7684;&#x53EF;&#x53D8;&#x6307;&#x9488;&#xFF0C;&#x968F;&#x7740;&#x4F60;&#x5728;&#x5206;&#x652F;&#x4E0A;&#x63D0;&#x4EA4;&#x65B0;&#x7684;&#x66F4;&#x6539;&#xFF0C;&#x5206;&#x652F;&#x4F1A;&#x81EA;&#x52A8;&#x5411;&#x524D;&#x79FB;&#x52A8;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5206;&#x652F;&#x662F;&#x52A8;&#x6001;&#x7684;&#x3001;&#x53EF;&#x53D8;&#x7684;&#xFF0C;&#x5B83;&#x4EEC;&#x901A;&#x5E38;&#x4EE3;&#x8868;&#x5F00;&#x53D1;&#x8FDB;&#x5EA6;&#xFF0C;&#x4F8B;&#x5982; master&#x3001;develop&#x3001;feature/xyz &#x7B49;&#x5206;&#x652F;&#x540D;&#x3002;</li>
<li>&#x6807;&#x7B7E;&#xFF1A;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x7279;&#x5B9A;&#x63D0;&#x4EA4;&#x7684;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6307;&#x9488;&#x3002;&#x6807;&#x7B7E;&#x901A;&#x5E38;&#x7528;&#x4E8E;&#x6807;&#x8BB0;&#x4EE3;&#x7801;&#x7684;&#x7279;&#x5B9A;&#x72B6;&#x6001;&#xFF0C;&#x6BD4;&#x5982;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x53D1;&#x5E03;&#xFF08;v1.0.0&#xFF09;&#xFF0C;&#x800C;&#x8FD9;&#x4E2A;&#x6807;&#x7B7E;&#x4E00;&#x65E6;&#x6253;&#x4E0A;&#xFF0C;&#x5B83;&#x5C31;&#x6C38;&#x4E45;&#x6307;&#x5411;&#x90A3;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x63D0;&#x4EA4;&#xFF0C;&#x4E0D;&#x4F1A;&#x968F;&#x65F6;&#x95F4;&#x53D8;&#x5316;&#x3002;</li>
</ul>
<h1 id="Trace ID &#x4E09;&#x6BB5; &#x4EE3;&#x8868;&#x5565;&#xFF1F;"><a href="#Trace ID &#x4E09;&#x6BB5; &#x4EE3;&#x8868;&#x5565;&#xFF1F;"></a>Trace ID &#x4E09;&#x6BB5; &#x4EE3;&#x8868;&#x5565;&#xFF1F;</h1>
<ul>
<li>e9e976fde12bc6745f1c51fa80652d01:000000788c34c719:0000000000000000</li>
<li>&#x7B2C;&#x4E00;&#x6BB5;&#x5168;&#x5C40;&#x552F;&#x4E00; Trace ID</li>
<li>&#x7B2C;&#x4E8C;&#x6BB5;&#xFF1A;spanId</li>
<li>&#x7B2C;&#x4E09;&#x6BB5;&#xFF1A;parentSpanId</li>
</ul>
<h1 id="&#x56FE;&#x50CF;&#x76F8;&#x4F3C;&#x5EA6;"><a href="#&#x56FE;&#x50CF;&#x76F8;&#x4F3C;&#x5EA6;"></a>&#x56FE;&#x50CF;&#x76F8;&#x4F3C;&#x5EA6;</h1>
<h2 id="pixelmatch &#x56FE;&#x7247;&#x76F8;&#x4F3C;&#x5EA6;"><a href="#pixelmatch &#x56FE;&#x7247;&#x76F8;&#x4F3C;&#x5EA6;"></a><a href="https://www.npmjs.com/package/pixelmatch">pixelmatch &#x56FE;&#x7247;&#x76F8;&#x4F3C;&#x5EA6;</a></h2>
<p>&#x7B80;&#x4ECB;&#xFF1A;&#x5177;&#x6709;&#x51C6;&#x786E;&#x7684;&#x6297;&#x952F;&#x9F7F;&#x50CF;&#x7D20;&#x68C0;&#x6D4B;&#xFF08;&#x901A;&#x8FC7;&#x8272;&#x5DEE;&#x9608;&#x503C;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x5DEE;&#x5F02;&#xFF0C;&#x8FD8;&#x53EF;&#x80FD;&#x662F;&#x952F;&#x9F7F;&#xFF09;&#x548C;&#x611F;&#x77E5;&#x8272;&#x5DEE;&#x5EA6;&#x91CF;&#xFF08;<a href="https://zh.wikipedia.org/wiki/YIQ">YIQ</a> &#xFF09;&#x3002;</p>
<ul>
<li>Y &#x662F;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x56E0;&#x4E3A;&#x9ED1;&#x767D;&#x7535;&#x89C6;&#x53EA;&#x4F9D;&#x8D56;&#x4EAE;&#x5EA6;&#x3002;</li>
<li>I&#xFF08;&#x6A59;&#x84DD;&#x5BF9;&#x6BD4;&#xFF09;&#x6B21;&#x91CD;&#x8981;&#xFF0C;&#x5B83;&#x5BF9;&#x4EBA;&#x773C;&#x7684;&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x8D21;&#x732E;&#x8F83;&#x5927;&#x3002;</li>
<li>Q&#xFF08;&#x7D2B;&#x7EFF;&#x5BF9;&#x6BD4;&#xFF09;&#x7684;&#x91CD;&#x8981;&#x6027;&#x8F83;&#x4F4E;&#xFF0C;&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x88AB;&#x66F4;&#x5927;&#x7A0B;&#x5EA6;&#x5730;&#x538B;&#x7F29;&#x3002;
&#x4E3A;&#x5565;&#x6709;&#x7528;</li>
<li>&#x56E0;&#x4E3A;&#x4EBA;&#x773C;&#x5BF9;&#x989C;&#x8272;&#x7684;&#x611F;&#x77E5;&#x662F;&#x975E;&#x7EBF;&#x6027;&#x7684;&#xFF0C;&#x5BF9;&#x4E0D;&#x540C;&#x989C;&#x8272;&#x5206;&#x91CF;&#x7684;&#x654F;&#x611F;&#x5EA6;&#x4E0D;&#x540C;&#x3002;</li>
<li>&#x5373;&#x4F7F;&#x4E24;&#x4E2A;&#x50CF;&#x7D20;&#x5728; RGB &#x7A7A;&#x95F4;&#x4E2D;&#x770B;&#x4F3C;&#x5DEE;&#x5F02;&#x8F83;&#x5927;&#xFF0C;&#x901A;&#x8FC7; YIQ &#x7A7A;&#x95F4;&#x6D4B;&#x91CF;&#x540E;&#x53EF;&#x80FD;&#x53CD;&#x6620;&#x51FA;&#x7684;&#x611F;&#x77E5;&#x5DEE;&#x5F02;&#x8F83;&#x5C0F;&#xFF0C;&#x4ECE;&#x800C;&#x907F;&#x514D;&#x9519;&#x8BEF;&#x5730;&#x6807;&#x8BB0;&#x4E3A;&#x663E;&#x8457;&#x4E0D;&#x540C;&#x3002;</li>
<li>&#x5C06; RGB &#x989C;&#x8272;&#x8F6C;&#x6362;&#x4E3A; YIQ &#x540E;&#xFF0C;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x4EBA;&#x773C;&#x611F;&#x77E5;&#x7684;&#x5DEE;&#x5F02;&#x8C03;&#x6574;&#x989C;&#x8272;&#x5206;&#x91CF;&#x7684;&#x6743;&#x91CD;&#x3002;&#x6BD4;&#x8F83;&#x4E24;&#x5F20;&#x56FE;&#x7247;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x66F4;&#x52A0;&#x51C6;&#x786E;&#x5730;&#x53CD;&#x6620;&#x89C6;&#x89C9;&#x4E0A;&#x7684;&#x5DEE;&#x5F02;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5355;&#x7EAF;&#x7684;&#x6570;&#x503C;&#x5DEE;&#x5F02;&#x3002;</li>
</ul>
<p>&#x573A;&#x666F;&#xFF1A;&#x4E13;&#x6CE8;&#x4E8E;&#x7CBE;&#x786E;&#x68C0;&#x6D4B;&#x50CF;&#x7D20;&#x5DEE;&#x5F02;&#xFF0C;&#x5E38;&#x7528;&#x4E8E;&#x56DE;&#x5F52;&#x6D4B;&#x8BD5;&#x3001;&#x5DEE;&#x5F02;&#x56FE;&#x751F;&#x6210;&#x7B49;&#x573A;&#x666F;&#xFF0C;&#x4F18;&#x5148;&#x8003;&#x8651;&#x6027;&#x80FD;&#x3002;</p>
<h2 id="&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6807;&#xFF08;structural similarity index&#xFF0C;SSIM index&#xFF09;"><a href="#&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6807;&#xFF08;structural similarity index&#xFF0C;SSIM index&#xFF09;"></a>&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6807;&#xFF08;structural similarity index&#xFF0C;SSIM index&#xFF09;</h2>
<p>&#x7B80;&#x4ECB;&#xFF1A;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4EE5;&#x8861;&#x91CF;&#x4E24;&#x5F20;&#x6570;&#x5B57;&#x56FE;&#x50CF;&#x76F8;&#x4F3C;&#x7A0B;&#x5EA6;&#x7684;&#x6307;&#x6807;&#x3002;&#x5F53;&#x4E24;&#x5F20;&#x56FE;&#x50CF;&#x5176;&#x4E2D;&#x4E00;&#x5F20;&#x4E3A;&#x65E0;&#x5931;&#x771F;&#x56FE;&#x50CF;&#xFF0C;&#x53E6;&#x4E00;&#x5F20;&#x4E3A;&#x5931;&#x771F;&#x540E;&#x7684;&#x56FE;&#x50CF;&#xFF0C;&#x4E8C;&#x8005;&#x7684;&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x53EF;&#x4EE5;&#x770B;&#x6210;&#x662F;&#x5931;&#x771F;&#x56FE;&#x50CF;&#x7684;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8861;&#x91CF;&#x6307;&#x6807;&#x3002;</p>
<p>&#x4E3A;&#x5565;&#x6709;&#x7528;</p>
<ul>
<li>&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x7684;&#x57FA;&#x672C;&#x89C2;&#x5FF5;&#x4E3A;&#x81EA;&#x7136;&#x56FE;&#x50CF;&#x662F;&#x9AD8;&#x5EA6;&#x7ED3;&#x6784;&#x5316;&#x7684;&#xFF0C;&#x4EA6;&#x5373;&#x5728;&#x81EA;&#x7136;&#x56FE;&#x50CF;&#x4E2D;&#x76F8;&#x90BB;&#x50CF;&#x7D20;&#x4E4B;&#x95F4;&#x6709;&#x5F88;&#x5F3A;&#x7684;&#x5173;&#x7CFB;&#x6027;&#xFF0C;&#x800C;&#x8FD9;&#x6837;&#x7684;&#x5173;&#x7CFB;&#x6027;&#x627F;&#x8F7D;&#x4E86;&#x573A;&#x666F;&#x4E2D;&#x7269;&#x4F53;&#x7684;&#x7ED3;&#x6784;&#x4FE1;&#x606F;&#x3002;</li>
<li>&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x7CFB;&#x7EDF;&#x5728;&#x89C2;&#x770B;&#x56FE;&#x50CF;&#x65F6;&#x5DF2;&#x7ECF;&#x5F88;&#x4E60;&#x60EF;&#x62BD;&#x53D6;&#x8FD9;&#x6837;&#x7684;&#x7ED3;&#x6784;&#x6027;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
<p>&#x573A;&#x666F;&#xFF1A;&#x4E13;&#x6CE8;&#x4E8E;&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#xFF0C;&#x5E38;&#x7528;&#x4E8E;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;&#x3001;&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x3001;&#x56FE;&#x50CF;&#x589E;&#x5F3A;&#x7B49;&#x573A;&#x666F;&#xFF0C;&#x4F18;&#x5148;&#x8003;&#x8651;&#x51C6;&#x786E;&#x6027;&#x3002;</p>
<h1 id><a href="#"></a></h1>
<h1 id="&#x8BC6;&#x522B;&#x6DF1;&#x5EA6;&#x4F2A;&#x9020;"><a href="#&#x8BC6;&#x522B;&#x6DF1;&#x5EA6;&#x4F2A;&#x9020;"></a><a href="https://www.zdnet.com/article/intels-new-deepfake-detector-can-spot-a-real-or-fake-video-based-on-blood-flow-in-video-pixels/">&#x8BC6;&#x522B;&#x6DF1;&#x5EA6;&#x4F2A;&#x9020;</a></h1>
<p>&#x82F1;&#x7279;&#x5C14;&#x516C;&#x53F8;&#x5BA3;&#x5E03;&#x4E86;&#x4E00;&#x4E2A;&#x53EB;&#x505A; FakeCatcher &#x7684;&#x8F6F;&#x4EF6;&#xFF0C;&#x53F7;&#x79F0;&#x53EF;&#x4EE5;&#x67E5;&#x51FA;&#x67D0;&#x4E2A;&#x89C6;&#x9891;&#x662F;&#x5426;&#x4E3A;&#x6DF1;&#x5EA6;&#x4F2A;&#x9020;&#xFF0C;&#x51C6;&#x786E;&#x5EA6;&#x9AD8;&#x8FBE;96%&#x3002;</p>
<p>&#x5B83;&#x7684;&#x539F;&#x7406;&#x662F;&#x8BC6;&#x522B;&#x89C6;&#x9891;&#x4EBA;&#x7269;&#x76AE;&#x80A4;&#x7684;&#x9759;&#x8109;&#x8840;&#x6DB2;&#x6D41;&#x52A8;&#x3002;&#x5982;&#x679C;&#x662F;&#x771F;&#x4EBA;&#xFF0C;&#x8840;&#x6DB2;&#x65F6;&#x523B;&#x5728;&#x4F53;&#x5185;&#x5FAA;&#x73AF;&#xFF0C;&#x76AE;&#x80A4;&#x4E0A;&#x7684;&#x9759;&#x8109;&#x5C31;&#x4F1A;&#x6709;&#x5468;&#x671F;&#x6027;&#x7684;&#x6DF1;&#x6D45;&#x53D8;&#x5316;&#xFF0C;&#x6DF1;&#x5EA6;&#x4F2A;&#x9020;&#x7684;&#x4EBA;&#x5C31;&#x6CA1;&#x6709;&#x3002;</p>
<h1 id="&#x5927;&#x6570;&#x636E;&#x5DF2;&#x6B7B;&#xFF1F;"><a href="#&#x5927;&#x6570;&#x636E;&#x5DF2;&#x6B7B;&#xFF1F;"></a>&#x5927;&#x6570;&#x636E;&#x5DF2;&#x6B7B;&#xFF1F;</h1>
<p>&#x5927;&#x6570;&#x636E;&#x4F5C;&#x4E3A;&#x5355;&#x4E00;&#x95EE;&#x9898;&#x5C31;&#x4E0D;&#x5B58;&#x5728;&#x4E86;&#xFF0C;&#x53D8;&#x6210;&#x4E86;&#x6D77;&#x91CF;&#x5B58;&#x50A8;&#x548C;&#x5927;&#x578B;&#x8BA1;&#x7B97;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x3002;
<a href="https://www.ruanyifeng.com/blog/2023/03/weekly-issue-244.html">&#x535A;&#x5BA2;&#x672C;&#x5468;&#x8BDD;&#x9898;</a></p>
<h1 id="&#x5C24;&#x96E8;&#x6EAA;&#x89E3;&#x8BFB;2022 Web&#x524D;&#x7AEF;&#x751F;&#x6001;&#x8D8B;&#x52BF;"><a href="#&#x5C24;&#x96E8;&#x6EAA;&#x89E3;&#x8BFB;2022 Web&#x524D;&#x7AEF;&#x751F;&#x6001;&#x8D8B;&#x52BF;"></a>&#x5C24;&#x96E8;&#x6EAA;&#x89E3;&#x8BFB;2022 Web&#x524D;&#x7AEF;&#x751F;&#x6001;&#x8D8B;&#x52BF;</h1>
<p>&#x548C; Svelte&#x76F8;&#x6BD4;&#xFF0C;Vue&#x7684; Reactivity Transform &#x548C; Solid -labels &#x90FD;&#x5C5E;&#x4E8E;&#x7EDF;&#x4E00;&#x6A21;&#x578B;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x4ED6;&#x4E0D;&#x53D7;&#x9650;&#x4E8E;&#x7EC4;&#x4EF6;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x5728;&#x7EC4;&#x5EFA;&#x5185;&#x4F7F;&#x7528;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x5728;&#x7EC4;&#x5EFA;&#x5916;&#x4F7F;&#x7528;&#xFF0C;&#x4F18;&#x52BF;&#x5C31;&#x662F;&#x6709;&#x5229;&#x4E8E;&#x957F;&#x671F;&#x7684;&#x91CD;&#x6784;&#x548C;&#x590D;&#x7528;</p>
<ul>
<li><a href="https://juejin.cn/post/7124551017382805518#heading-5">&#x5C24;&#x96E8;&#x6EAA;&#x89E3;&#x8BFB;2022 Web&#x524D;&#x7AEF;&#x751F;&#x6001;&#x8D8B;&#x52BF;</a></li>
</ul>
<h1 id="E2E &#x6846;&#x67B6;&#x539F;&#x7406;"><a href="#E2E &#x6846;&#x67B6;&#x539F;&#x7406;"></a>E2E &#x6846;&#x67B6;&#x539F;&#x7406;</h1>
<ul>
<li>puppeteer,playwright &#x57FA;&#x4E8E;&#x6D4F;&#x89C8;&#x5668;&#x8C03;&#x8BD5;&#x534F;&#x8BAE;&#xFF1B;&#x504F;&#x5E95;&#x5C42;&#xFF0C;&#x529F;&#x80FD;&#x66F4;&#x4E30;&#x5BCC;&#xFF0C;&#x4F46;&#x662F;&#x8DE8;&#x6D4F;&#x89C8;&#x5668;&#x4E00;&#x81F4;&#x6027;&#x6709;&#x9650;&#xFF1B;
<ul>
<li>&#x4F8B;&#x5982;&#xFF1A;playwright &#x8DDF; chrome &#x7684;&#x4EA4;&#x4E92;&#x662F;&#x57FA;&#x4E8E; chrome devtools &#x534F;&#x8BAE;&#xFF1B;</li>
<li>&#x731C;&#x60F3;&#xFF1A;&#x80FD;&#x591F;&#x4F7F;&#x7528; playwright &#x5B9E;&#x73B0;&#x7684;&#x80FD;&#x529B;&#xFF08;&#x4F8B;&#x5982; UI &#x7684;&#x5F55;&#x5236;&#x56DE;&#x653E;&#xFF09;&#xFF0C;&#x4E5F;&#x80FD;&#x76F4;&#x63A5;&#x5F00;&#x53D1;&#x5BF9;&#x5E94;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x63D2;&#x4EF6;&#x5B9E;&#x73B0;&#xFF1F;</li>
</ul>
</li>
<li>selenium &#x57FA;&#x4E8E; webdriver API&#xFF1B;&#x8DE8;&#x6D4F;&#x89C8;&#x5668;&#x4E00;&#x81F4;&#x6027;&#xFF0C;&#x529F;&#x80FD;&#x6709;&#x9650;</li>
</ul>
<h1 id="CAP &#x5B9A;&#x7406;"><a href="#CAP &#x5B9A;&#x7406;"></a>CAP &#x5B9A;&#x7406;</h1>
<p>&#x6570;&#x636E;&#x4E00;&#x81F4;&#xFF08;Consistency&#xFF09;&#x3001;&#x9AD8;&#x53EF;&#x7528;&#xFF08;Availability&#xFF09;&#x3001;&#x6570;&#x636E;&#x5206;&#x533A;&#xFF08;Partition tolerance&#xFF09;</p>
<p>CAP &#x5B9A;&#x7406;&#x7684;&#x6838;&#x5FC3;&#x89C2;&#x70B9;&#x662F;&#xFF0C;&#x5728;&#x8BBE;&#x8BA1;&#x548C;&#x8FD0;&#x884C;&#x5206;&#x5E03;&#x5F0F;&#x7CFB;&#x7EDF;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x6839;&#x636E;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x573A;&#x666F;&#x7684;&#x9700;&#x6C42;&#xFF0C;&#x505A;&#x51FA;&#x9009;&#x62E9;&#x548C;&#x6743;&#x8861;&#x3002;&#x4F8B;&#x5982;&#xFF0C;</p>
<ul>
<li>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x7CFB;&#x7EDF;&#x5FC5;&#x987B;&#x4FDD;&#x8BC1;&#x6570;&#x636E;&#x7684;&#x5B9E;&#x65F6;&#x4E00;&#x81F4;&#x6027;&#xFF0C;&#x6BD4;&#x5982;&#x94F6;&#x884C;&#x7CFB;&#x7EDF;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x5728;&#x7F51;&#x7EDC;&#x5206;&#x533A;&#x65F6;&#x727A;&#x7272;&#x4E00;&#x90E8;&#x5206;&#x53EF;&#x7528;&#x6027;&#x3002;</li>
<li>&#x800C;&#x5982;&#x679C;&#x7CFB;&#x7EDF;&#x66F4;&#x6CE8;&#x91CD;&#x7528;&#x6237;&#x4F53;&#x9A8C;&#x548C;&#x670D;&#x52A1;&#x7684;&#x4E0D;&#x95F4;&#x65AD;&#x6027;&#xFF0C;&#x5982;&#x793E;&#x4EA4;&#x7F51;&#x7EDC;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x5728;&#x7F51;&#x7EDC;&#x5206;&#x533A;&#x65F6;&#x9009;&#x62E9;&#x4FDD;&#x6301;&#x9AD8;&#x53EF;&#x7528;&#x6027;&#xFF0C;&#x540C;&#x65F6;&#x5141;&#x8BB8;&#x6682;&#x65F6;&#x7684;&#x6570;&#x636E;&#x4E0D;&#x4E00;&#x81F4;&#x3002;</li>
</ul>
<h1 id="&#x6570;&#x636E;&#x5B58;&#x50A8;&#x4E8E;&#x53EF;&#x89C6;&#x5316;"><a href="#&#x6570;&#x636E;&#x5B58;&#x50A8;&#x4E8E;&#x53EF;&#x89C6;&#x5316;"></a>&#x6570;&#x636E;&#x5B58;&#x50A8;&#x4E8E;&#x53EF;&#x89C6;&#x5316;</h1>
<ul>
<li>Prometheus + Grafana</li>
<li>Elasticsearch + Kibana</li>
</ul>
<h1 id="elasticsearch vs &#x6570;&#x636E;&#x5E93;"><a href="#elasticsearch vs &#x6570;&#x636E;&#x5E93;"></a>elasticsearch vs &#x6570;&#x636E;&#x5E93;</h1>
<p>es &#x4FA7;&#x91CD;&#x4E8E;&#x641C;&#x7D22;&#xFF08;&#x5012;&#x6392;&#x7D22;&#x5F15;&#xFF0C;&#x6C34;&#x5E73;&#x53EF;&#x6269;&#x5C55;&#x6027;&#x66F4;&#x5F3A;&#xFF09;&#xFF0C;&#x6570;&#x636E;&#x5E93;&#x4FA7;&#x91CD;&#x4E8E;&#x5B58;&#x50A8;&#xFF08;&#x4E8B;&#x52A1;&#xFF0C;&#x4E00;&#x81F4;&#x6027;&#xFF0C;&#x590D;&#x6742;&#x7684;&#x5173;&#x7CFB;&#x6A21;&#x578B;&#xFF09;</p>
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
`,n=[{level:1,title:"TechNotes",children:[]},{level:1,title:"MCP SSE 的缺陷",children:[]},{level:1,title:"为什么 mac 不再使用 CUDA？",children:[]},{level:1,title:"为什么 jest 需要 watchman？",children:[]},{level:1,title:"为什么 git 有了分支还需要 tag？",children:[]},{level:1,title:"Trace ID 三段 代表啥？",children:[]},{level:1,title:"图像相似度",children:[{level:2,title:"pixelmatch 图片相似度",children:[]},{level:2,title:"结构相似性指标（structural similarity index，SSIM index）",children:[]}]},{level:1,title:"",children:[]},{level:1,title:"识别深度伪造",children:[]},{level:1,title:"大数据已死？",children:[]},{level:1,title:"尤雨溪解读2022 Web前端生态趋势",children:[]},{level:1,title:"E2E 框架原理",children:[]},{level:1,title:"CAP 定理",children:[]},{level:1,title:"数据存储于可视化",children:[]},{level:1,title:"elasticsearch vs 数据库",children:[]},{level:1,title:"内存对齐",children:[]},{level:1,title:"符号表 2023-3-6",children:[]},{level:1,title:"风控引擎优化 2023-3-2",children:[]},{level:1,title:"扩容机制 2023-3-2",children:[]},{level:1,title:"AOP（面向切面编程） 2023-3-1",children:[]},{level:1,title:"逃逸分析",children:[{level:2,title:"Reference",children:[]}]},{level:1,title:"文章精读之设计原则/模式",children:[{level:2,title:"设计原则：SOLID原则",children:[]},{level:2,title:"设计模式",children:[{level:3,title:"Creational Patterns",children:[]},{level:3,title:"Behavioral Patterns",children:[]},{level:3,title:"Structural Patterns",children:[]}]},{level:2,title:"设计原则 vs 设计模式",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"关于继承",children:[{level:3,title:"Reference",children:[]}]},{level:1,title:"关于面向对象",children:[]},{level:1,title:"React状态管理",children:[]},{level:1,title:"文章精读之前端框架设计",children:[{level:2,title:"组件类型",children:[]},{level:2,title:"状态管理",children:[]},{level:2,title:"CSS方案",children:[]},{level:2,title:"构建工具",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"CSS Animation,Transition 原理",children:[{level:2,title:"总结",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"Vue运行时错误处理",children:[{level:2,title:"Reference",children:[]}]},{level:1,title:"插件对比（Vue vs React）",children:[{level:2,title:"插件",children:[{level:3,title:"插件的插件（Vuex vs Redux）",children:[]},{level:3,title:"插件的插件的插件",children:[]}]},{level:2,title:"总结",children:[]},{level:2,title:"Reference",children:[]}]},{level:1,title:"模拟LRU的数据结构（Set vs Array）",children:[]},{level:1,title:"ORM 模块组成",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
