const x={},F=`<h1 id="Float32Array &#x5E94;&#x7528;&#x573A;&#x666F;"><a href="#Float32Array &#x5E94;&#x7528;&#x573A;&#x666F;"></a>Float32Array &#x5E94;&#x7528;&#x573A;&#x666F;</h1>
<p><code>Float32Array</code> &#x662F; JavaScript &#x4E2D;&#x7684;&#x4E00;&#x79CD;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x5B83;&#x4EE3;&#x8868;&#x5E73;&#x53F0;&#x5B57;&#x8282;&#x987A;&#x5E8F;&#x4E3A; 32 &#x4F4D;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#x578B;&#x6570;&#x7EC4;&#xFF08;&#x5BF9;&#x5E94;&#x4E8E; C &#x6D6E;&#x70B9;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF09;&#x3002;&#x8BA9;&#x6211;&#x4EEC;&#x63A2;&#x8BA8;&#x4E00;&#x4E0B; <code>Float32Array</code> &#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;&#x548C;&#x7279;&#x6027;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x6570;&#x503C;&#x8BA1;&#x7B97;&#x548C;&#x5E95;&#x5C42;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x5904;&#x7406;</strong>&#xFF1A;</p>
<ul>
<li><code>Float32Array</code> &#x5B58;&#x50A8;&#x7684;&#x662F;&#x5355;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x6570;&#xFF0C;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x5360;&#x636E; 4 &#x4E2A;&#x5B57;&#x8282;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x5B83;&#x5728;&#x5904;&#x7406;&#x5927;&#x91CF;&#x6570;&#x503C;&#x8BA1;&#x7B97;&#x65F6;&#x66F4;&#x52A0;&#x8282;&#x7701;&#x5185;&#x5B58;&#x3002;</li>
<li>&#x8FDE;&#x7EED;&#x7684;&#x5185;&#x5B58;&#x7A7A;&#x95F4;&#x5B58;&#x50A8;&#x4F7F;&#x5F97;&#x5728;&#x8FDB;&#x884C;&#x6570;&#x5B66;&#x8FD0;&#x7B97;&#x65F6;&#x6548;&#x7387;&#x66F4;&#x9AD8;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6027;&#x80FD;.</li>
</ul>
</li>
<li>
<p><strong>&#x97F3;&#x9891;&#x548C;&#x56FE;&#x50CF;&#x5904;&#x7406;</strong>&#xFF1A;</p>
<ul>
<li>&#x5728;&#x97F3;&#x9891;&#x5904;&#x7406;&#x4E2D;&#xFF0C;<code>Float32Array</code> &#x53EF;&#x4EE5;&#x5B58;&#x50A8;&#x97F3;&#x9891;&#x6837;&#x672C;&#x6570;&#x636E;&#xFF0C;&#x4F8B;&#x5982;&#x97F3;&#x9891;&#x6CE2;&#x5F62;&#x3001;&#x9891;&#x8C31;&#x5206;&#x6790;&#x7B49;&#x3002;</li>
<li>&#x56FE;&#x50CF;&#x5904;&#x7406;&#x4E2D;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>Float32Array</code> &#x5B58;&#x50A8;&#xFF08;&#x5229;&#x7528;&#x5176;&#x9AD8;&#x7CBE;&#x5EA6;&#xFF09;&#xFF0C;&#x4F8B;&#x5982;&#x56FE;&#x50CF;&#x6EE4;&#x6CE2;&#x3001;&#x53D8;&#x6362;&#x7B49;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>WebGL &#x548C; WebGPU</strong>&#xFF1A;</p>
<ul>
<li><code>Float32Array</code> &#x5728;&#x56FE;&#x5F62;&#x6E32;&#x67D3;&#x9886;&#x57DF;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x3002;WebGL &#x548C; WebGPU &#x4F7F;&#x7528; <code>Float32Array</code> &#x6765;&#x5904;&#x7406;&#x56FE;&#x5F62;&#x6570;&#x636E;&#xFF0C;&#x4F8B;&#x5982;&#x9876;&#x70B9;&#x5750;&#x6807;&#x3001;&#x7EB9;&#x7406;&#x5750;&#x6807;&#x3001;&#x989C;&#x8272;&#x7B49;&#x3002;</li>
<li>&#x5728;&#x8FD9;&#x4E9B;&#x56FE;&#x5F62;&#x5E93;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528; <code>Float32Array</code> &#x53EF;&#x4EE5;&#x9AD8;&#x6548;&#x5730;&#x4F20;&#x9012;&#x6570;&#x636E;&#x7ED9; GPU &#x8FDB;&#x884C;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x548C;&#x6E32;&#x67D3;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x4F20;&#x8F93;&#x548C;&#x89E3;&#x6790;</strong>&#xFF1A;</p>
<ul>
<li><code>Float32Array</code> &#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x5904;&#x7406;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#xFF0C;&#x4F8B;&#x5982;&#x7F51;&#x7EDC;&#x4F20;&#x8F93;&#x4E2D;&#x7684;&#x6570;&#x636E;&#x5305;&#x3001;&#x6587;&#x4EF6;&#x89E3;&#x6790;&#x7B49;&#x3002;</li>
<li>&#x901A;&#x8FC7; <code>ArrayBuffer</code> &#x548C; <code>DataView</code>&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x8F6C;&#x6362;&#x4E3A; <code>Float32Array</code>&#xFF0C;&#x5E76;&#x8FDB;&#x884C;&#x89E3;&#x6790;&#x3002;</li>
</ul>
</li>
</ol>
<h1 id="Float32Array &#x4F18;&#x52BF;"><a href="#Float32Array &#x4F18;&#x52BF;"></a>Float32Array &#x4F18;&#x52BF;</h1>
<p>&#x5F53;&#x7136;&#x53EF;&#x4EE5;&#x3002;<code>Float32Array</code> &#x7684;&#x4F18;&#x52BF;&#x4E3B;&#x8981;&#x4F53;&#x73B0;&#x5728;&#x4EE5;&#x4E0B;&#x51E0;&#x4E2A;&#x65B9;&#x9762;&#xFF1A;</p>
<h3 id="1. &#x5185;&#x5B58;&#x6548;&#x7387;"><a href="#1. &#x5185;&#x5B58;&#x6548;&#x7387;"></a>1. &#x5185;&#x5B58;&#x6548;&#x7387;</h3>
<p><code>Float32Array</code> &#x662F;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#xFF0C;&#x5E76;&#x4E14;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x662F;&#x8FDE;&#x7EED;&#x5B58;&#x50A8;&#x7684;&#x3002;&#x5B83;&#x76F4;&#x63A5;&#x6620;&#x5C04;&#x5230;&#x8BA1;&#x7B97;&#x673A;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#x8868;&#x793A;&#xFF0C;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x5B83;&#x53EF;&#x4EE5;&#x975E;&#x5E38;&#x9AD8;&#x6548;&#x5730;&#x4F7F;&#x7528;&#x5185;&#x5B58;&#x3002;&#x76F8;&#x6BD4;&#x4E4B;&#x4E0B;&#xFF0C;&#x666E;&#x901A;&#x7684; JavaScript &#x6570;&#x7EC4;&#x662F;&#x52A8;&#x6001;&#x7684;&#xFF0C;&#x53EF;&#x4EE5;&#x5305;&#x542B;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x56E0;&#x6B64;&#x5B83;&#x4EEC;&#x9700;&#x8981;&#x66F4;&#x591A;&#x7684;&#x5185;&#x5B58;&#x5F00;&#x9500;&#x6765;&#x5B58;&#x50A8;&#x989D;&#x5916;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x6BD4;&#x5982;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#x548C;&#x6307;&#x9488;&#x3002;</p>
<h3 id="2. &#x6027;&#x80FD;&#x4F18;&#x5316;"><a href="#2. &#x6027;&#x80FD;&#x4F18;&#x5316;"></a>2. &#x6027;&#x80FD;&#x4F18;&#x5316;</h3>
<p>&#x7531;&#x4E8E; <code>Float32Array</code> &#x4E2D;&#x7684;&#x6570;&#x636E;&#x662F;&#x7C7B;&#x578B;&#x5316;&#x7684;&#xFF08;&#x5373;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x662F;&#x76F8;&#x540C;&#x7C7B;&#x578B;&#x7684;&#xFF09;&#xFF0C;JavaScript &#x5F15;&#x64CE;&#x53EF;&#x4EE5;&#x5BF9;&#x64CD;&#x4F5C;&#x8FD9;&#x4E9B;&#x6570;&#x7EC4;&#x7684;&#x4EE3;&#x7801;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#x3002;&#x7F16;&#x8BD1;&#x5668;&#x77E5;&#x9053;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x662F;32&#x4F4D;&#x6D6E;&#x70B9;&#x6570;&#xFF0C;&#x56E0;&#x6B64;&#x5B83;&#x53EF;&#x4EE5;&#x5728;&#x5E95;&#x5C42;&#x4F7F;&#x7528;&#x66F4;&#x5FEB;&#x7684;&#x7B97;&#x6CD5;&#x548C;&#x6307;&#x4EE4;&#x96C6;&#x6765;&#x5904;&#x7406;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#x3002;</p>
<h3 id="3. &#x6570;&#x636E;&#x4E00;&#x81F4;&#x6027;"><a href="#3. &#x6570;&#x636E;&#x4E00;&#x81F4;&#x6027;"></a>3. &#x6570;&#x636E;&#x4E00;&#x81F4;&#x6027;</h3>
<p><code>Float32Array</code> &#x4FDD;&#x8BC1;&#x4E86;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x90FD;&#x662F;32&#x4F4D;&#x6D6E;&#x70B9;&#x6570;&#x3002;&#x8FD9;&#x79CD;&#x4E00;&#x81F4;&#x6027;&#x786E;&#x4FDD;&#x4E86;&#x5F53;&#x4F60;&#x5904;&#x7406;&#x79D1;&#x5B66;&#x8BA1;&#x7B97;&#x3001;&#x56FE;&#x5F62;&#x6E32;&#x67D3;&#x6216;&#x8005;&#x97F3;&#x9891;&#x5904;&#x7406;&#x7B49;&#x9700;&#x8981;&#x7CBE;&#x786E;&#x6D6E;&#x70B9;&#x8FD0;&#x7B97;&#x7684;&#x5E94;&#x7528;&#x65F6;&#xFF0C;&#x6570;&#x636E;&#x7684;&#x8868;&#x73B0;&#x662F;&#x53EF;&#x9884;&#x6D4B;&#x7684;&#x3002;</p>
<h3 id="4. &#x4E0E;&#x5E95;&#x5C42;&#x786C;&#x4EF6;&#x7684;&#x63A5;&#x8FD1;&#x6027;"><a href="#4. &#x4E0E;&#x5E95;&#x5C42;&#x786C;&#x4EF6;&#x7684;&#x63A5;&#x8FD1;&#x6027;"></a>4. &#x4E0E;&#x5E95;&#x5C42;&#x786C;&#x4EF6;&#x7684;&#x63A5;&#x8FD1;&#x6027;</h3>
<p><code>Float32Array</code> &#x66F4;&#x63A5;&#x8FD1;&#x786C;&#x4EF6;&#x5C42;&#x9762;&#x7684;&#x8868;&#x793A;&#xFF0C;&#x56E0;&#x4E3A;&#x73B0;&#x4EE3;&#x8BA1;&#x7B97;&#x673A;&#x786C;&#x4EF6;&#x901A;&#x5E38;&#x90FD;&#x662F;&#x9488;&#x5BF9;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x548C;&#x7C7B;&#x578B;&#x7684;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#x7684;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x8FD9;&#x4E9B;&#x6570;&#x7EC4;&#x7684;&#x64CD;&#x4F5C;&#x53EF;&#x4EE5;&#x975E;&#x5E38;&#x8FC5;&#x901F;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x6620;&#x5C04;&#x5230;&#x786C;&#x4EF6;&#x64CD;&#x4F5C;&#x3002;</p>
<h3 id="5. &#x4E8C;&#x8FDB;&#x5236;&#x64CD;&#x4F5C;&#x7684;&#x4FBF;&#x5229;&#x6027;"><a href="#5. &#x4E8C;&#x8FDB;&#x5236;&#x64CD;&#x4F5C;&#x7684;&#x4FBF;&#x5229;&#x6027;"></a>5. &#x4E8C;&#x8FDB;&#x5236;&#x64CD;&#x4F5C;&#x7684;&#x4FBF;&#x5229;&#x6027;</h3>
<p>&#x4F7F;&#x7528; <code>Float32Array</code> &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x8BFB;&#x53D6;&#x548C;&#x5199;&#x5165;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x6D41;&#xFF0C;&#x8FD9;&#x5728;&#x5904;&#x7406;&#x7F51;&#x7EDC;&#x4F20;&#x8F93;&#x548C;&#x6587;&#x4EF6; I/O &#x64CD;&#x4F5C;&#x65F6;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4ECE;&#x4E00;&#x4E2A; <code>ArrayBuffer</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A; <code>Float32Array</code>&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x8FDB;&#x884C;&#x4EFB;&#x4F55;&#x8F6C;&#x6362;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x5728;&#x5BA2;&#x6237;&#x7AEF;&#x548C;&#x670D;&#x52A1;&#x5668;&#x4E4B;&#x95F4;&#x4F20;&#x8F93;&#x6D6E;&#x70B9;&#x6570;&#x6570;&#x636E;&#x53D8;&#x5F97;&#x66F4;&#x52A0;&#x7B80;&#x5355;&#x548C;&#x5FEB;&#x901F;&#x3002;</p>
<h3 id="6. &#x4F20;&#x8F93;&#x6548;&#x7387;"><a href="#6. &#x4F20;&#x8F93;&#x6548;&#x7387;"></a>6. &#x4F20;&#x8F93;&#x6548;&#x7387;</h3>
<p>&#x5728;&#x7F51;&#x7EDC;&#x4F20;&#x8F93;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528; <code>Float32Array</code> &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x53D1;&#x9001;&#x548C;&#x63A5;&#x6536;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x5C06;&#x6D6E;&#x70B9;&#x6570;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x5176;&#x4ED6;&#x683C;&#x5F0F;&#x3002;&#x8FD9;&#x51CF;&#x5C11;&#x4E86;&#x6570;&#x636E;&#x7684;&#x5927;&#x5C0F;&#xFF0C;&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x52A0;&#x5FEB;&#x4F20;&#x8F93;&#x901F;&#x5EA6;&#x5E76;&#x51CF;&#x5C11;&#x5E26;&#x5BBD;&#x4F7F;&#x7528;&#x3002;</p>
<h3 id="7. Web APIs &#x7684;&#x517C;&#x5BB9;&#x6027;"><a href="#7. Web APIs &#x7684;&#x517C;&#x5BB9;&#x6027;"></a>7. Web APIs &#x7684;&#x517C;&#x5BB9;&#x6027;</h3>
<p>&#x8BB8;&#x591A; Web API &#x90FD;&#x662F;&#x56F4;&#x7ED5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x8BBE;&#x8BA1;&#x7684;&#xFF0C;&#x8FD9;&#x610F;&#x5473;&#x7740; <code>Float32Array</code> &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x7528;&#x4E8E;&#x8FD9;&#x4E9B; API&#xFF0C;&#x65E0;&#x9700;&#x989D;&#x5916;&#x7684;&#x8F6C;&#x6362;&#x6216;&#x5305;&#x88C5;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x5728;&#x4F7F;&#x7528; WebGL&#x3001;Web Audio API &#x7B49;&#x6280;&#x672F;&#x65F6;&#xFF0C;<code>Float32Array</code> &#x6210;&#x4E3A;&#x5904;&#x7406;&#x548C;&#x4F20;&#x8F93;&#x6570;&#x636E;&#x7684;&#x81EA;&#x7136;&#x9009;&#x62E9;&#x3002;</p>
<h1 id="&#x5B9E;&#x9645;&#x4F8B;&#x5B50;"><a href="#&#x5B9E;&#x9645;&#x4F8B;&#x5B50;"></a>&#x5B9E;&#x9645;&#x4F8B;&#x5B50;</h1>
<p>&#x4E00;&#x4E2A;&#x624B;&#x52A8;&#x521B;&#x5EFA;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5E8F;&#x5217;&#x5316;&#x8FC7;&#x7A0B;&#xFF0C;&#x5B83;&#x7C7B;&#x4F3C;&#x4E8E;Protocol Buffers&#xFF08;Protobuf&#xFF09;&#x7684;&#x5DE5;&#x4F5C;&#x539F;&#x7406;&#xFF1B;&#x4F8B;&#x5B50;&#xFF1A;</p>
<p>&#x4ECE;&#x4E00;&#x4E2A;&#x4E8C;&#x8FDB;&#x5236;WebSocket&#x6D41;&#x4E2D;&#x63A5;&#x6536;&#x6570;&#x636E;&#xFF0C;&#x8FD9;&#x4E2A;&#x6D41;&#x5305;&#x542B;&#x4E86;&#x4E00;&#x4E2A;&#x590D;&#x5408;&#x7ED3;&#x6784;&#x7684;&#x6570;&#x636E;&#x5305;&#xFF0C;&#x5176;&#x4E2D;&#x65E2;&#x6709;&#x5B57;&#x7B26;&#x4E32;&#x4E5F;&#x6709;&#x6D6E;&#x70B9;&#x6570;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x670D;&#x52A1;&#x5668;&#x53D1;&#x9001;&#x7684;&#x6570;&#x636E;&#x5305;&#x683C;&#x5F0F;&#x5982;&#x4E0B;&#xFF1A;</p>
<ul>
<li>4&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x7528;&#x6237;ID</li>
<li>32&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x7528;&#x6237;&#x540D;</li>
<li>4&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x5355;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x7528;&#x6237;&#x7684;&#x8D26;&#x6237;&#x4F59;&#x989D;</li>
</ul>
<p>&#x8FD9;&#x4E2A;&#x6570;&#x636E;&#x5305;&#x603B;&#x5171;&#x5360;&#x7528;40&#x4E2A;&#x5B57;&#x8282;&#xFF0C;&#x6211;&#x4EEC;&#x7684;&#x4EFB;&#x52A1;&#x662F;&#x4ECE;&#x8FD9;&#x4E2A;&#x4E8C;&#x8FDB;&#x5236;&#x6D41;&#x4E2D;&#x89E3;&#x6790;&#x51FA;&#x8FD9;&#x4E09;&#x4E2A;&#x5B57;&#x6BB5;&#x3002;</p>
<p>&#x9996;&#x5148;&#xFF0C;&#x6211;&#x4EEC;&#x4F1A;&#x63A5;&#x6536;&#x5230;&#x4E00;&#x4E2A; <code>ArrayBuffer</code> &#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x4E2D;&#x5305;&#x542B;&#x4E86;&#x8FD9;40&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x6570;&#x636E;&#x3002;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x6309;&#x7167;&#x6B63;&#x786E;&#x7684;&#x987A;&#x5E8F;&#x548C;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x6765;&#x89E3;&#x6790;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#x3002;</p>
<p><strong>&#x53D1;&#x9001;&#x65B9;&#x6709;&#x4EE5;&#x4E0B;&#x6570;&#x636E;&#xFF1A;</strong></p>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> userID = <span class="hljs-number">12345</span>; <span class="hljs-comment">// &#x7528;&#x6237;ID&#xFF0C;&#x4E00;&#x4E2A;&#x6574;&#x6570;</span>
<span class="hljs-keyword">let</span> username = <span class="hljs-string">&quot;User123&quot;</span>; <span class="hljs-comment">// &#x7528;&#x6237;&#x540D;&#xFF0C;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;</span>
<span class="hljs-keyword">let</span> balance = <span class="hljs-number">100.5</span>; <span class="hljs-comment">// &#x7528;&#x6237;&#x8D26;&#x6237;&#x4F59;&#x989D;&#xFF0C;&#x4E00;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;</span>
</code></pre>
<p>&#x53D1;&#x9001;&#x65B9;&#x5C06;&#x6267;&#x884C;&#x4EE5;&#x4E0B;&#x6B65;&#x9AA4;&#x6765;&#x5E8F;&#x5217;&#x5316;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x8BA1;&#x7B97;&#x7528;&#x6237;&#x540D;&#x5B57;&#x7B26;&#x4E32;&#x7684;UTF-8&#x7F16;&#x7801;&#x540E;&#x7684;&#x957F;&#x5EA6;</span>
<span class="hljs-keyword">let</span> usernameUtf8Length = <span class="hljs-keyword">new</span> TextEncoder().encode(username).length;

<span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8DB3;&#x591F;&#x5927;&#x7684;ArrayBuffer&#x6765;&#x5B58;&#x50A8;&#x6574;&#x4E2A;&#x6570;&#x636E;&#x5305;</span>
<span class="hljs-comment">// 4&#x5B57;&#x8282;&#x7684;userID + 32&#x5B57;&#x8282;&#x7684;&#x7528;&#x6237;&#x540D; + 4&#x5B57;&#x8282;&#x7684;balance</span>
<span class="hljs-keyword">let</span> buffer = <span class="hljs-keyword">new</span> <span class="hljs-built_in">ArrayBuffer</span>(<span class="hljs-number">4</span> + <span class="hljs-number">32</span> + <span class="hljs-number">4</span>);

<span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;DataView&#x6765;&#x64CD;&#x4F5C;ArrayBuffer</span>
<span class="hljs-keyword">let</span> view = <span class="hljs-keyword">new</span> <span class="hljs-built_in">DataView</span>(buffer);

<span class="hljs-comment">// &#x5C06;&#x7528;&#x6237;ID&#x5B58;&#x50A8;&#x5230;ArrayBuffer&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;</span>
view.setInt32(<span class="hljs-number">0</span>, userID);

<span class="hljs-comment">// &#x5C06;&#x7528;&#x6237;&#x540D;&#x8F6C;&#x6362;&#x4E3A;UTF-8&#x7F16;&#x7801;&#x7684;&#x5B57;&#x8282;&#x6570;&#x7EC4;</span>
<span class="hljs-keyword">let</span> usernameEncoded = <span class="hljs-keyword">new</span> TextEncoder().encode(username);

<span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;Uint8Array&#x89C6;&#x56FE;&#x6765;&#x586B;&#x5145;&#x7528;&#x6237;&#x540D;&#x7684;&#x5B57;&#x8282;</span>
<span class="hljs-keyword">let</span> usernameBytes = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Uint8Array</span>(buffer, <span class="hljs-number">4</span>, <span class="hljs-number">32</span>);
usernameBytes.set(usernameEncoded); <span class="hljs-comment">// &#x53EA;&#x590D;&#x5236;&#x7F16;&#x7801;&#x540E;&#x7684;&#x5B57;&#x8282;</span>

<span class="hljs-comment">// &#x5982;&#x679C;&#x7528;&#x6237;&#x540D;&#x4E0D;&#x8DB3;32&#x5B57;&#x8282;&#xFF0C;&#x4F59;&#x4E0B;&#x7684;&#x90E8;&#x5206;&#x5C06;&#x81EA;&#x52A8;&#x586B;&#x5145;&#x4E3A;0</span>

<span class="hljs-comment">// &#x5C06;&#x8D26;&#x6237;&#x4F59;&#x989D;&#x5B58;&#x50A8;&#x5230;ArrayBuffer&#x7684;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;</span>
<span class="hljs-comment">// &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x5C0F;&#x7AEF;&#x5B57;&#x8282;&#x5E8F;</span>
view.setFloat32(<span class="hljs-number">36</span>, balance, <span class="hljs-literal">true</span>);

<span class="hljs-comment">// &#x73B0;&#x5728;buffer&#x5305;&#x542B;&#x4E86;&#x5E8F;&#x5217;&#x5316;&#x540E;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x53EF;&#x4EE5;&#x53D1;&#x9001;&#x4E86;</span>
</code></pre>
<p><strong>&#x63A5;&#x6536;&#x65B9;</strong></p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x4ECE;WebSocket&#x63A5;&#x6536;&#x5230;&#x4E86;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x4E00;&#x4E2A;ArrayBuffer&#x5BF9;&#x8C61;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleWebSocketMessage</span>(<span class="hljs-params">event</span>) </span>{
  <span class="hljs-keyword">let</span> buffer = event.data; <span class="hljs-comment">// &#x8FD9;&#x91CC;&#x7684;data&#x5C5E;&#x6027;&#x5C31;&#x662F;ArrayBuffer&#x5BF9;&#x8C61;</span>

  <span class="hljs-comment">// &#x4F7F;&#x7528;DataView&#x6765;&#x89E3;&#x6790;&#x6570;&#x636E;&#x5305;</span>
  <span class="hljs-keyword">let</span> view = <span class="hljs-keyword">new</span> <span class="hljs-built_in">DataView</span>(buffer);

  <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7528;&#x6237;ID&#xFF08;&#x4ECE;&#x7B2C;0&#x5B57;&#x8282;&#x5F00;&#x59CB;&#x7684;4&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x6574;&#x6570;&#xFF09;</span>
  <span class="hljs-keyword">let</span> userID = view.getInt32(<span class="hljs-number">0</span>);

  <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7528;&#x6237;&#x540D;&#xFF08;&#x4ECE;&#x7B2C;4&#x5B57;&#x8282;&#x5F00;&#x59CB;&#x7684;32&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF09;</span>
  <span class="hljs-comment">// &#x9996;&#x5148;&#xFF0C;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;Uint8Array&#x89C6;&#x56FE;&#x6765;&#x83B7;&#x53D6;&#x539F;&#x59CB;&#x5B57;&#x8282;</span>
  <span class="hljs-keyword">let</span> usernameBytes = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Uint8Array</span>(buffer, <span class="hljs-number">4</span>, <span class="hljs-number">32</span>);

  <span class="hljs-comment">// &#x5C06;&#x5B57;&#x8282;&#x6570;&#x7EC4;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#xFF0C;&#x5E76;&#x62FC;&#x63A5;&#x6210;&#x5B57;&#x7B26;&#x4E32;</span>
  <span class="hljs-keyword">let</span> username = <span class="hljs-keyword">new</span> TextDecoder(<span class="hljs-string">&apos;utf-8&apos;</span>).decode(usernameBytes);

  <span class="hljs-comment">// &#x83B7;&#x53D6;&#x8D26;&#x6237;&#x4F59;&#x989D;&#xFF08;&#x4ECE;&#x7B2C;36&#x5B57;&#x8282;&#x5F00;&#x59CB;&#x7684;4&#x4E2A;&#x5B57;&#x8282;&#x7684;&#x5355;&#x7CBE;&#x5EA6;&#x6D6E;&#x70B9;&#x6570;&#xFF09;</span>
  <span class="hljs-keyword">let</span> balance = view.getFloat32(<span class="hljs-number">36</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">// &#x5047;&#x8BBE;&#x6570;&#x636E;&#x662F;&#x5C0F;&#x7AEF;&#x683C;&#x5F0F;</span>

  <span class="hljs-comment">// &#x73B0;&#x5728;&#x6211;&#x4EEC;&#x6709;&#x4E86;&#x6240;&#x6709;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x53EF;&#x4EE5;&#x5904;&#x7406;&#x5B83;&#x4EEC;&#x4E86;</span>
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`User ID: <span class="hljs-subst">\${userID}</span>\`</span>);
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`Username: <span class="hljs-subst">\${username}</span>\`</span>);
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`Account Balance: <span class="hljs-subst">\${balance}</span>\`</span>);
}
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF1A;</p>
<ul>
<li><code>ArrayBuffer</code> &#x662F;&#x539F;&#x59CB;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x3002;</li>
<li><code>DataView</code> &#x88AB;&#x7528;&#x6765;&#x89E3;&#x6790;&#x6574;&#x6570;&#x548C;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x6BB5;&#x3002;</li>
<li><code>Uint8Array</code> &#x88AB;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x7528;&#x6237;&#x540D;&#x7684;&#x5B57;&#x8282;&#xFF0C;&#x7136;&#x540E;&#x4F7F;&#x7528; <code>TextDecoder</code> &#x5C06;&#x8FD9;&#x4E9B;&#x5B57;&#x8282;&#x89E3;&#x7801;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x3002;</li>
<li><code>Float32Array</code> &#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#xFF0C;&#x4F46;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x6709;&#x591A;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;&#x9700;&#x8981;&#x5904;&#x7406;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; <code>Float32Array</code> &#x89C6;&#x56FE;&#x6765;&#x76F4;&#x63A5;&#x64CD;&#x4F5C;&#x8FD9;&#x4E9B;&#x6D6E;&#x70B9;&#x6570;&#x3002;</li>
</ul>
<p>&#x4E0E;&#x624B;&#x52A8;&#x5904;&#x7406;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x76F8;&#x6BD4;&#xFF0C;Protobuf&#x63D0;&#x4F9B;&#x4E86;&#x4EE5;&#x4E0B;&#x4F18;&#x52BF;&#xFF1A;</p>
<ul>
<li>&#x6548;&#x7387;&#xFF1A; Protobuf&#x8BBE;&#x8BA1;&#x7528;&#x6765;&#x5728;&#x7F51;&#x7EDC;&#x4E0A;&#x9AD8;&#x6548;&#x4F20;&#x8F93;&#x6570;&#x636E;&#xFF0C;&#x5B83;&#x7684;&#x7F16;&#x7801;&#x901A;&#x5E38;&#x6BD4;JSON&#x5C0F;&#x5F88;&#x591A;&#x3002;</li>
<li>&#x8DE8;&#x5E73;&#x53F0;&#xFF1A; Protobuf&#x652F;&#x6301;&#x591A;&#x79CD;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#xFF0C;&#x53EF;&#x4EE5;&#x8F7B;&#x677E;&#x5730;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x7CFB;&#x7EDF;&#x548C;&#x8BED;&#x8A00;&#x4E4B;&#x95F4;&#x4F20;&#x8F93;&#x6570;&#x636E;&#x3002;</li>
<li>&#x53EF;&#x6269;&#x5C55;&#x6027;&#xFF1A; Protobuf&#x8BBE;&#x8BA1;&#x4E86;&#x5411;&#x540E;&#x548C;&#x5411;&#x524D;&#x517C;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x66F4;&#x6539;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x800C;&#x4E0D;&#x7834;&#x574F;&#x5DF2;&#x90E8;&#x7F72;&#x7684;&#x7A0B;&#x5E8F;&#x4E4B;&#x95F4;&#x7684;&#x901A;&#x4FE1;&#x3002;</li>
<li>&#x81EA;&#x52A8;&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF1A; Protobuf&#x63D0;&#x4F9B;&#x4E86;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x5DE5;&#x5177;&#xFF0C;&#x53EF;&#x4EE5;&#x81EA;&#x52A8;&#x4E3A;&#x591A;&#x79CD;&#x8BED;&#x8A00;&#x751F;&#x6210;&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#x4EE3;&#x7801;&#xFF0C;&#x51CF;&#x5C11;&#x4E86;&#x624B;&#x52A8;&#x7F16;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x548C;&#x5DE5;&#x4F5C;&#x91CF;&#x3002;</li>
</ul>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li>GPT</li>
</ul>
`,E=[{level:1,title:"Float32Array 应用场景",children:[]},{level:1,title:"Float32Array 优势",children:[{level:3,title:"1. 内存效率",children:[]},{level:3,title:"2. 性能优化",children:[]},{level:3,title:"3. 数据一致性",children:[]},{level:3,title:"4. 与底层硬件的接近性",children:[]},{level:3,title:"5. 二进制操作的便利性",children:[]},{level:3,title:"6. 传输效率",children:[]},{level:3,title:"7. Web APIs 的兼容性",children:[]}]},{level:1,title:"实际例子",children:[]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
