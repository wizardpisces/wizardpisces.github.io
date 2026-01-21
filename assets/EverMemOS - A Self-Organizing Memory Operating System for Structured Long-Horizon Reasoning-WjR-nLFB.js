const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2026-01-05</em></p>
<p><a href="https://arxiv.org/abs/2601.02163">EverMemOS: A Self-Organizing Memory Operating System for Structured Long-Horizon Reasoning</a> &#x7531;&#x65B0;&#x52A0;&#x5761;&#x56FD;&#x7ACB;&#x5927;&#x5B66;&#xFF08;NUS&#xFF09;&#x548C; Shopee &#x7B49;&#x673A;&#x6784;&#x8054;&#x5408;&#x53D1;&#x5E03;&#x3002;&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;**&#x201C;&#x81EA;&#x7EC4;&#x7EC7;&#x8BB0;&#x5FC6;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x201D;**&#xFF0C;&#x65E8;&#x5728;&#x89E3;&#x51B3;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x5728;&#x957F;&#x671F;&#x4EA4;&#x4E92;&#x4E2D;&#x201C;&#x8BB0;&#x4E0D;&#x4F4F;&#x3001;&#x8BB0;&#x4E0D;&#x51C6;&#x3001;&#x8BB0;&#x4E0D;&#x5168;&#x201D;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x901A;&#x8FC7;&#x6A21;&#x62DF;&#x4EBA;&#x7C7B;&#x5927;&#x8111;&#x7684;&#x8BB0;&#x5FC6;&#x5F62;&#x6210;&#x8FC7;&#x7A0B;&#xFF0C;&#x8BA9; AI &#x62E5;&#x6709;&#x7ED3;&#x6784;&#x5316;&#x3001;&#x53EF;&#x8FDB;&#x5316;&#x7684;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#x3002;</p>
<h2 id="EverMemOS &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#EverMemOS &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>EverMemOS &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM &#x7F3A;&#x4E4F;&#x6709;&#x6548;&#x7684;&#x673A;&#x5236;&#x6765;&#x7EF4;&#x6301;&#x957F;&#x671F;&#x3001;&#x8FDE;&#x8D2F;&#x4E14;&#x4E00;&#x81F4;&#x7684;&#x8BB0;&#x5FC6;&#x3002;</strong></p>
<p>&#x5F53;&#x524D;&#x7684;&#x5927;&#x6A21;&#x578B;&#x5728;&#x5904;&#x7406;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#x65F6;&#x9762;&#x4E34;&#x51E0;&#x4E2A;&#x4E3B;&#x8981;&#x6311;&#x6218;&#xFF1A;</p>
<ul>
<li><strong>&#x788E;&#x7247;&#x5316;&#x5B58;&#x50A8;&#xFF1A;</strong> &#x73B0;&#x6709;&#x7684;&#x8BB0;&#x5FC6;&#x7CFB;&#x7EDF;&#x5F80;&#x5F80;&#x53EA;&#x662F;&#x628A;&#x5BF9;&#x8BDD;&#x8BB0;&#x5F55;&#x5207;&#x6210;&#x788E;&#x7247;&#xFF08;Chunks&#xFF09;&#x5B58;&#x8FDB;&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#xFF0C;&#x5BFC;&#x81F4;&#x8BB0;&#x5FC6;&#x4E4B;&#x95F4;&#x7F3A;&#x4E4F;&#x8054;&#x7CFB;&#xFF0C;&#x96BE;&#x4EE5;&#x8FD8;&#x539F;&#x4E8B;&#x60C5;&#x7684;&#x5168;&#x8C8C;&#x3002;</li>
<li><strong>&#x7F3A;&#x4E4F;&#x6574;&#x5408;&#xFF1A;</strong> &#x968F;&#x7740;&#x5BF9;&#x8BDD;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#xFF0C;&#x7528;&#x6237;&#x7684;&#x72B6;&#x6001;&#x548C;&#x504F;&#x597D;&#x662F;&#x52A8;&#x6001;&#x53D8;&#x5316;&#x7684;&#xFF08;&#x6BD4;&#x5982;&#x4ECE;&#x201C;&#x559C;&#x6B22;&#x5403;&#x8FA3;&#x201D;&#x53D8;&#x6210;&#x201C;&#x6700;&#x8FD1;&#x80C3;&#x4E0D;&#x597D;&#x4E0D;&#x5403;&#x8FA3;&#x201D;&#xFF09;&#xFF0C;&#x7B80;&#x5355;&#x7684;&#x68C0;&#x7D22;&#x65E0;&#x6CD5;&#x5904;&#x7406;&#x8FD9;&#x79CD;&#x72B6;&#x6001;&#x6F14;&#x53D8;&#x548C;&#x51B2;&#x7A81;&#x3002;</li>
<li><strong>&#x68C0;&#x7D22;&#x4E0D;&#x7CBE;&#x51C6;&#xFF1A;</strong> &#x4F20;&#x7EDF;&#x7684; RAG&#xFF08;&#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x751F;&#x6210;&#xFF09;&#x5F80;&#x5F80;&#x8981;&#x4E48;&#x67E5;&#x4E0D;&#x5230;&#xFF0C;&#x8981;&#x4E48;&#x67E5;&#x51FA;&#x4E00;&#x5806;&#x65E0;&#x5173;&#x4FE1;&#x606F;&#xFF0C;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x5728;&#x63A8;&#x7406;&#x65F6;&#x88AB;&#x566A;&#x58F0;&#x5E72;&#x6270;&#x3002;</li>
</ul>
<p><strong>EverMemOS &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x5957;&#x53D7;&#x8BA4;&#x77E5;&#x79D1;&#x5B66;&#x542F;&#x53D1;&#x7684;**&#x201C;&#x8BB0;&#x5FC6;&#x751F;&#x547D;&#x5468;&#x671F;&#x201D;<strong>&#x7BA1;&#x7406;&#x673A;&#x5236;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x8BB0;&#x5FC6;&#x4ECE;&#x539F;&#x672C;&#x7684;&#x201C;&#x6D41;&#x6C34;&#x8D26;&#x201D;&#x8F6C;&#x5316;&#x4E3A;&#x7ED3;&#x6784;&#x5316;&#x7684;</strong>&#x201C;&#x8BB0;&#x5FC6;&#x7EC6;&#x80DE;&#xFF08;MemCells&#xFF09;&#x201D;<strong>&#xFF0C;&#x518D;&#x805A;&#x7C7B;&#x6210;</strong>&#x201C;&#x8BB0;&#x5FC6;&#x573A;&#x666F;&#xFF08;MemScenes&#xFF09;&#x201D;<strong>&#xFF0C;&#x6700;&#x540E;&#x901A;&#x8FC7;</strong>&#x201C;&#x91CD;&#x6784;&#x6027;&#x56DE;&#x5FC6;&#xFF08;Reconstructive Recollection&#xFF09;&#x201D;**&#x6309;&#x9700;&#x63D0;&#x53D6;&#xFF0C;&#x8BA9; AI &#x50CF;&#x4EBA;&#x4E00;&#x6837;&#x201C;&#x7406;&#x89E3;&#x201D;&#x5E76;&#x201C;&#x8BB0;&#x4F4F;&#x201D;&#x957F;&#x671F;&#x4EA4;&#x4E92;&#x4E2D;&#x7684;&#x5173;&#x952E;&#x4FE1;&#x606F;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x662F;&#x6253;&#x9020;&#x201C;&#x66F4;&#x50CF;&#x4EBA;&#x201D;&#x7684; AI Agent &#x7684;&#x5173;&#x952E;&#x74F6;&#x9888;&#x3002;</strong></p>
<p>&#x60F3;&#x8C61;&#x4E00;&#x4E2A;&#x966A;&#x4F34;&#x578B; AI &#x6216;&#x79C1;&#x4EBA;&#x52A9;&#x7406;&#xFF1A;</p>
<ul>
<li><strong>&#x65E0;&#x6CD5;&#x8DE8;&#x65F6;&#x95F4;&#x63A8;&#x7406;&#xFF1A;</strong> &#x4F60;&#x4E0A;&#x4E2A;&#x6708;&#x8BF4;&#x201C;&#x4E0B;&#x4E2A;&#x6708;&#x8981;&#x53BB;&#x65C5;&#x884C;&#x201D;&#xFF0C;&#x8FD9;&#x4E2A;&#x6708;&#x5B83;&#x5B8C;&#x5168;&#x5FD8;&#x4E86;&#x8FD9;&#x56DE;&#x4E8B;&#xFF0C;&#x65E0;&#x6CD5;&#x63D0;&#x4F9B;&#x76F8;&#x5173;&#x5EFA;&#x8BAE;&#x3002;</li>
<li><strong>&#x7528;&#x6237;&#x753B;&#x50CF;&#x6A21;&#x7CCA;&#xFF1A;</strong> &#x5B83;&#x8BB0;&#x4E0D;&#x4F4F;&#x4F60;&#x7684;&#x957F;&#x671F;&#x4E60;&#x60EF;&#xFF0C;&#x6BCF;&#x6B21;&#x90FD;&#x8981;&#x4F60;&#x91CD;&#x590D;&#x4E00;&#x904D;&#x9700;&#x6C42;&#x3002;</li>
<li><strong>&#x4FE1;&#x606F;&#x51B2;&#x7A81;&#xFF1A;</strong> &#x5F53;&#x4F60;&#x6539;&#x53D8;&#x4E3B;&#x610F;&#x65F6;&#xFF0C;&#x5B83;&#x53EF;&#x80FD;&#x4F1A;&#x540C;&#x65F6;&#x68C0;&#x7D22;&#x5230;&#x65E7;&#x7684;&#x548C;&#x65B0;&#x7684;&#x504F;&#x597D;&#xFF0C;&#x5BFC;&#x81F4;&#x56DE;&#x7B54;&#x81EA;&#x76F8;&#x77DB;&#x76FE;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<ol>
<li><strong>Agent &#x5E94;&#x7528;&#x7684;&#x6DF1;&#x5165;&#xFF1A;</strong> AI &#x4ECE;&#x5355;&#x7EAF;&#x7684;&#x95EE;&#x7B54;&#x5DE5;&#x5177;&#x8FDB;&#x5316;&#x4E3A;&#x9700;&#x8981;&#x957F;&#x671F;&#x670D;&#x52A1;&#x7684; Agent&#xFF0C;&#x5BF9;&#x8BB0;&#x5FC6;&#x7684;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x4E00;&#x81F4;&#x6027;&#x8981;&#x6C42;&#x6025;&#x5267;&#x63D0;&#x9AD8;&#x3002;</li>
<li><strong>&#x8BA4;&#x77E5;&#x79D1;&#x5B66;&#x7684;&#x542F;&#x53D1;&#xFF1A;</strong> &#x7814;&#x7A76;&#x8005;&#x53D1;&#x73B0;&#x5355;&#x7EAF;&#x7684;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x4E0D;&#x8DB3;&#x4EE5;&#x6A21;&#x62DF;&#x4EBA;&#x7C7B;&#x8BB0;&#x5FC6;&#xFF0C;&#x9700;&#x8981;&#x5F15;&#x5165;&#x66F4;&#x590D;&#x6742;&#x7684;&#x8BA4;&#x77E5;&#x6A21;&#x578B;&#xFF08;&#x5982;&#x8BB0;&#x5FC6;&#x75D5;&#x8FF9; Engram &#x7406;&#x8BBA;&#xFF09;&#x3002;</li>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x7684;&#x5C40;&#x9650;&#xFF1A;</strong> &#x5373;&#x4F7F;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x53D8;&#x5927;&#xFF0C;&#x5168;&#x91CF;&#x8F93;&#x5165;&#x4F9D;&#x7136;&#x6602;&#x8D35;&#x4E14;&#x6548;&#x7387;&#x4F4E;&#x4E0B;&#xFF08;Lost-in-the-Middle &#x95EE;&#x9898;&#xFF09;&#xFF0C;&#x7ED3;&#x6784;&#x5316;&#x8BB0;&#x5FC6;&#x662F;&#x66F4;&#x4F18;&#x89E3;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>EverMemOS &#x7684;&#x67B6;&#x6784;&#x6A21;&#x62DF;&#x4E86;&#x4EBA;&#x7C7B;&#x8BB0;&#x5FC6;&#x7684;&#x5F62;&#x6210;&#x8FC7;&#x7A0B;&#xFF0C;&#x5305;&#x542B;&#x4E09;&#x4E2A;&#x6838;&#x5FC3;&#x9636;&#x6BB5;&#xFF1A;</p>
<ul>
<li>
<p><strong>&#x9636;&#x6BB5; 1&#xFF1A;&#x60C5;&#x666F;&#x75D5;&#x8FF9;&#x5F62;&#x6210; (Episodic Trace Formation)</strong></p>
<ul>
<li>&#x5C06;&#x8FDE;&#x7EED;&#x7684;&#x5BF9;&#x8BDD;&#x6D41;&#x5207;&#x5206;&#x4E3A;&#x539F;&#x5B50;&#x7684;<strong>&#x8BB0;&#x5FC6;&#x7EC6;&#x80DE; (MemCells)</strong>&#x3002;</li>
<li>&#x6BCF;&#x4E2A; MemCell &#x5305;&#x542B;&#xFF1A;
<ul>
<li><strong>Episode&#xFF1A;</strong> &#x5177;&#x4F53;&#x7684;&#x4E8B;&#x4EF6;&#x63CF;&#x8FF0;&#x3002;</li>
<li><strong>Atomic Facts&#xFF1A;</strong> &#x63D0;&#x53D6;&#x51FA;&#x7684;&#x539F;&#x5B50;&#x4E8B;&#x5B9E;&#xFF08;&#x5982;&#x201C;&#x7528;&#x6237;&#x559C;&#x6B22;&#x82F9;&#x679C;&#x201D;&#xFF09;&#x3002;</li>
<li><strong>Foresight&#xFF1A;</strong> &#x5177;&#x6709;&#x65F6;&#x95F4;&#x6709;&#x6548;&#x6027;&#x7684;&#x524D;&#x77BB;&#x6027;&#x4FE1;&#x53F7;&#xFF08;&#x5982;&#x201C;&#x4E0B;&#x5468;&#x4E00;&#x6709;&#x4E2A;&#x4F1A;&#x8BAE;&#x201D;&#xFF09;&#xFF0C;&#x5E26;&#x6709; <code>[t_start, t_end]</code> &#x65F6;&#x95F4;&#x6233;&#x3002;</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>&#x9636;&#x6BB5; 2&#xFF1A;&#x8BED;&#x4E49;&#x6574;&#x5408; (Semantic Consolidation)</strong></p>
<ul>
<li>&#x7C7B;&#x4F3C;&#x4E8E;&#x5927;&#x8111;&#x5728;&#x7761;&#x7720;&#x65F6;&#x7684;&#x8BB0;&#x5FC6;&#x6574;&#x7406;&#xFF0C;EverMemOS &#x4F1A;&#x5B9A;&#x671F;&#x5C06; MemCells &#x805A;&#x7C7B;&#x6210;<strong>&#x8BB0;&#x5FC6;&#x573A;&#x666F; (MemScenes)</strong>&#x3002;</li>
<li><strong>MemScene&#xFF1A;</strong> &#x662F;&#x540C;&#x4E00;&#x4E3B;&#x9898;&#x4E0B;&#x76F8;&#x5173;&#x8BB0;&#x5FC6;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x9AD8;&#x7EA7;&#x522B;&#x7684;&#x8BED;&#x4E49;&#x7ED3;&#x6784;&#x3002;</li>
<li><strong>User Profile Update&#xFF1A;</strong> &#x5728;&#x6574;&#x7406;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x7CFB;&#x7EDF;&#x4F1A;&#x5206;&#x6790;&#x5E76;&#x66F4;&#x65B0;&#x7528;&#x6237;&#x753B;&#x50CF;&#xFF0C;&#x89E3;&#x51B3;&#x65B0;&#x65E7;&#x4FE1;&#x606F;&#x7684;&#x51B2;&#x7A81;&#xFF08;&#x6BD4;&#x5982;&#x7528;&#x65B0;&#x7684;&#x996E;&#x98DF;&#x504F;&#x597D;&#x8986;&#x76D6;&#x65E7;&#x7684;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x9636;&#x6BB5; 3&#xFF1A;&#x91CD;&#x6784;&#x6027;&#x56DE;&#x5FC6; (Reconstructive Recollection)</strong></p>
<ul>
<li>&#x5728;&#x9700;&#x8981;&#x56DE;&#x5FC6;&#x65F6;&#xFF0C;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x5730;&#x641C;&#x5173;&#x952E;&#x8BCD;&#x3002;</li>
<li><strong>&#x53CC;&#x5C42;&#x68C0;&#x7D22;&#xFF1A;</strong> &#x5148;&#x5B9A;&#x4F4D;&#x76F8;&#x5173;&#x7684; MemScenes&#xFF08;&#x5927;&#x8303;&#x56F4;&#xFF09;&#xFF0C;&#x518D;&#x4ECE;&#x4E2D;&#x7B5B;&#x9009;&#x5177;&#x4F53;&#x7684; MemCells&#xFF08;&#x5C0F;&#x8303;&#x56F4;&#xFF09;&#x3002;</li>
<li><strong>Agentic Verification&#xFF1A;</strong> &#x5F15;&#x5165;&#x4E00;&#x4E2A;&#x201C;&#x9A8C;&#x8BC1;&#x5668;&#x201D;&#x6765;&#x5224;&#x65AD;&#x67E5;&#x5230;&#x7684;&#x4FE1;&#x606F;&#x591F;&#x4E0D;&#x591F;&#x7528;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x591F;&#xFF0C;&#x5B83;&#x4F1A;&#x91CD;&#x5199;&#x67E5;&#x8BE2;&#x8BED;&#x53E5;&#x518D;&#x6B21;&#x68C0;&#x7D22;&#xFF1B;&#x5982;&#x679C;&#x591F;&#x4E86;&#xFF0C;&#x5C31;&#x5408;&#x6210;&#x6700;&#x7EC8;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7ED9;&#x6A21;&#x578B;&#x3002;</li>
</ul>
</li>
</ul>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>EverMemOS &#x662F;&#x76EE;&#x524D;&#x5728;&#x7ED3;&#x6784;&#x5316;&#x8BB0;&#x5FC6;&#x7BA1;&#x7406;&#x65B9;&#x9762;&#x6700;&#x524D;&#x6CBF;&#x7684;&#x5C1D;&#x8BD5;&#x4E4B;&#x4E00;&#xFF0C;&#x4E0E;&#x4E4B;&#x7ADE;&#x4E89;&#x7684;&#x65B9;&#x6848;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li><strong>MemGPT&#xFF1A;</strong> &#x5F15;&#x5165;&#x865A;&#x62DF;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x673A;&#x5236;&#xFF0C;&#x901A;&#x8FC7;&#x5206;&#x9875;&#x6765;&#x7BA1;&#x7406;&#x4E0A;&#x4E0B;&#x6587;&#x3002;<strong>&#x5BF9;&#x6BD4;&#xFF1A;</strong> EverMemOS &#x66F4;&#x4FA7;&#x91CD;&#x4E8E;&#x8BB0;&#x5FC6;&#x7684;&#x8BED;&#x4E49;&#x7ED3;&#x6784;&#x548C;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x800C; MemGPT &#x66F4;&#x4FA7;&#x91CD;&#x4E8E;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x5C42;&#x9762;&#x7684;&#x8D44;&#x6E90;&#x8C03;&#x5EA6;&#x3002;</li>
<li><strong>Generative Agents (&#x65AF;&#x5766;&#x798F;&#x5C0F;&#x9547;)&#xFF1A;</strong> &#x6A21;&#x62DF;&#x4E86;&#x8BB0;&#x5FC6;&#x7684;&#x5B58;&#x50A8;&#x3001;&#x68C0;&#x7D22;&#x548C;&#x53CD;&#x601D;&#x3002;<strong>&#x5BF9;&#x6BD4;&#xFF1A;</strong> EverMemOS &#x7684;&#x673A;&#x5236;&#x66F4;&#x52A0;&#x5DE5;&#x7A0B;&#x5316;&#x548C;&#x9AD8;&#x6548;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728;&#x5904;&#x7406;&#x201C;&#x524D;&#x77BB;&#x6027;&#x4FE1;&#x53F7;&#xFF08;Foresight&#xFF09;&#x201D;&#x548C;&#x201C;&#x7528;&#x6237;&#x753B;&#x50CF;&#x52A8;&#x6001;&#x66F4;&#x65B0;&#x201D;&#x65B9;&#x9762;&#x6709;&#x72EC;&#x5230;&#x4E4B;&#x5904;&#x3002;</li>
</ul>
<p><strong>EverMemOS &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;&#x201C;&#x7ED3;&#x6784;&#x5316;&#x201D;&#x548C;&#x201C;&#x81EA;&#x7EC4;&#x7EC7;&#x201D;&#xFF1A;</strong> &#x5B83;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x5E72;&#x9884;&#xFF0C;&#x5C31;&#x80FD;&#x81EA;&#x52A8;&#x628A;&#x6742;&#x4E71;&#x7684;&#x5BF9;&#x8BDD;&#x6574;&#x7406;&#x6210;&#x4E95;&#x4E95;&#x6709;&#x6761;&#x7684;&#x8BB0;&#x5FC6;&#x7F51;&#x7EDC;&#xFF0C;&#x5E76;&#x4E14;&#x652F;&#x6301;&#x5BF9;&#x672A;&#x6765;&#x7684;&#x89C4;&#x5212;&#xFF08;Foresight&#xFF09;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. MemCell (&#x8BB0;&#x5FC6;&#x7EC6;&#x80DE;)"><a href="#1. MemCell (&#x8BB0;&#x5FC6;&#x7EC6;&#x80DE;)"></a>1. MemCell (&#x8BB0;&#x5FC6;&#x7EC6;&#x80DE;)</h3>
<p>[EverMemOS &#x7684;&#x539F;&#x5B50;&#x5B58;&#x50A8;&#x5355;&#x5143;]</p>
<ul>
<li><strong>&#x4F20;&#x7EDF;&#x6A21;&#x578B;&#xFF1A;</strong> &#x5B58;&#x50A8;&#x7684;&#x662F;&#x5207;&#x5206;&#x540E;&#x7684;&#x6587;&#x672C;&#x5757;&#xFF08;Chunk&#xFF09;&#x3002;</li>
<li><strong>EverMemOS&#xFF1A;</strong> MemCell &#x662F;&#x4E00;&#x4E2A;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x4E86;&#x201C;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF08;Episode&#xFF09;&#x201D;&#x3001;&#x201C;&#x4E8B;&#x5B9E;&#x662F;&#x4EC0;&#x4E48;&#xFF08;Facts&#xFF09;&#x201D;&#x4EE5;&#x53CA;&#x201C;&#x672A;&#x6765;&#x8981;&#x6CE8;&#x610F;&#x4EC0;&#x4E48;&#xFF08;Foresight&#xFF09;&#x201D;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x4EE5;&#x524D;&#x5B58;&#x7684;&#x662F;&#x4E00;&#x5806;&#x788E;&#x7EB8;&#x7247;&#xFF1B;&#x73B0;&#x5728;&#x5B58;&#x7684;&#x662F;&#x4E00;&#x5F20;&#x5F20;&#x5199;&#x597D;&#x7684;&#x201C;&#x4FBF;&#x7B7E;&#x6761;&#x201D;&#xFF0C;&#x4E0A;&#x9762;&#x6E05;&#x695A;&#x5730;&#x5206;&#x7C7B;&#x8BB0;&#x5F55;&#x4E86;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
<h3 id="2. MemScene (&#x8BB0;&#x5FC6;&#x573A;&#x666F;)"><a href="#2. MemScene (&#x8BB0;&#x5FC6;&#x573A;&#x666F;)"></a>2. MemScene (&#x8BB0;&#x5FC6;&#x573A;&#x666F;)</h3>
<p>[&#x8BB0;&#x5FC6;&#x7684;&#x9AD8;&#x7EA7;&#x7EC4;&#x7EC7;&#x5F62;&#x5F0F;]</p>
<ul>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x628A;&#x76F8;&#x5173;&#x7684; MemCells &#x805A;&#x5728;&#x4E00;&#x8D77;&#x3002;&#x6BD4;&#x5982;&#x6240;&#x6709;&#x5173;&#x4E8E;&#x201C;&#x65C5;&#x884C;&#x89C4;&#x5212;&#x201D;&#x7684; MemCells &#x4F1A;&#x88AB;&#x5F52;&#x5230;&#x4E00;&#x4E2A; MemScene &#x4E2D;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x5C31;&#x50CF;&#x7535;&#x8111;&#x91CC;&#x7684;&#x6587;&#x4EF6;&#x5939;&#x3002;&#x4F60;&#x4E0D;&#x4F1A;&#x628A;&#x6240;&#x6709;&#x6587;&#x4EF6;&#x90FD;&#x5806;&#x5728;&#x684C;&#x9762;&#x4E0A;&#xFF0C;&#x800C;&#x662F;&#x4F1A;&#x6309;&#x9879;&#x76EE;&#xFF08;&#x4E3B;&#x9898;&#xFF09;&#x5EFA;&#x6587;&#x4EF6;&#x5939;&#xFF08;MemScene&#xFF09;&#x6765;&#x5B58;&#x653E;&#x76F8;&#x5173;&#x6587;&#x4EF6;&#xFF08;MemCell&#xFF09;&#x3002;</li>
</ul>
<h3 id="3. Foresight (&#x524D;&#x77BB;&#x6027;&#x4FE1;&#x53F7;)"><a href="#3. Foresight (&#x524D;&#x77BB;&#x6027;&#x4FE1;&#x53F7;)"></a>3. Foresight (&#x524D;&#x77BB;&#x6027;&#x4FE1;&#x53F7;)</h3>
<p>[EverMemOS &#x7684;&#x72EC;&#x7279;&#x521B;&#x65B0;]</p>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x5E26;&#x6709;&#x65F6;&#x95F4;&#x6709;&#x6548;&#x6027;&#x7684;&#x8BB0;&#x5FC6;&#x3002;&#x6BD4;&#x5982;&#x201C;&#x63D0;&#x9192;&#x6211;&#x4E0B;&#x5468;&#x4E94;&#x4EA4;&#x62A5;&#x544A;&#x201D;&#x3002;</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong> &#x6BCF;&#x4E2A; Foresight &#x90FD;&#x6709; <code>[&#x5F00;&#x59CB;&#x65F6;&#x95F4;, &#x7ED3;&#x675F;&#x65F6;&#x95F4;]</code>&#x3002;&#x5728;&#x68C0;&#x7D22;&#x65F6;&#xFF0C;&#x7CFB;&#x7EDF;&#x4F1A;&#x81EA;&#x52A8;&#x8FC7;&#x6EE4;&#x6389;&#x8FC7;&#x671F;&#x7684;&#x6216;&#x672A;&#x751F;&#x6548;&#x7684; Foresight&#x3002;</li>
<li><strong>&#x4EF7;&#x503C;&#xFF1A;</strong> &#x8BA9; AI &#x5177;&#x5907;&#x4E86;&#x201C;&#x65F6;&#x95F4;&#x89C2;&#x5FF5;&#x201D;&#xFF0C;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x6D3B;&#x5728;&#x5F53;&#x4E0B;&#xFF0C;&#x800C;&#x662F;&#x80FD;&#x5904;&#x7406;&#x672A;&#x6765;&#x7684;&#x4EFB;&#x52A1;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>EverMemOS &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x7ED9; AI &#x4E00;&#x4E2A;&#x4F1A;&#x6574;&#x7406;&#x7684;&#x5927;&#x8111;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>&#x81EA;&#x52A8;&#x6574;&#x7406;&#xFF1A;</strong> &#x628A;&#x6D41;&#x6C34;&#x8D26;&#x53D8;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x7684; MemCells &#x548C; MemScenes&#x3002;</li>
<li><strong>&#x52A8;&#x6001;&#x66F4;&#x65B0;&#xFF1A;</strong> &#x80FD;&#x591F;&#x5904;&#x7406;&#x4FE1;&#x606F;&#x7684;&#x51B2;&#x7A81;&#x548C;&#x6F14;&#x53D8;&#xFF0C;&#x7EF4;&#x62A4;&#x51C6;&#x786E;&#x7684;&#x7528;&#x6237;&#x753B;&#x50CF;&#x3002;</li>
<li><strong>&#x65F6;&#x95F4;&#x611F;&#x77E5;&#xFF1A;</strong> &#x901A;&#x8FC7; Foresight &#x673A;&#x5236;&#xFF0C;&#x8BA9; AI &#x80FD;&#x591F;&#x7406;&#x89E3;&#x5E76;&#x5904;&#x7406;&#x4E0E;&#x65F6;&#x95F4;&#x76F8;&#x5173;&#x7684;&#x4EFB;&#x52A1;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2601.02163">&#x8BBA;&#x6587;&#x5730;&#x5740;</a></li>
<li><a href="https://github.com/EverMind-AI/EverMemOS">&#x9879;&#x76EE;&#x5730;&#x5740;</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-21</em></p>
`,E=[{level:2,title:"EverMemOS 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. MemCell (记忆细胞)",children:[]},{level:3,title:"2. MemScene (记忆场景)",children:[]},{level:3,title:"3. Foresight (前瞻性信号)",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
