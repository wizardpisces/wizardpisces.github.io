const x={},F=`<p>&#xFF08;&#x65F6;&#x95F4;&#xFF1A;2021-12-2&#xFF0C;&#x6700;&#x540E;&#x66F4;&#x65B0;&#x65F6;&#x95F4;2022-1-13&#xFF09;</p>
<h1 id="&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x601D;&#x8003;"><a href="#&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x601D;&#x8003;"></a>&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x601D;&#x8003;</h1>
<p>&#x6587;&#x7AE0;&#x5185;&#x5BB9;&#x4E3B;&#x8981;&#x57FA;&#x4E8E;<a href="https://zhuanlan.zhihu.com/p/76622839">2019 JSConf.Asia - &#x5C24;&#x96E8;&#x6EAA;&#x5728;&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x4E2D;&#x5BFB;&#x6C42;&#x5E73;&#x8861;</a> + &#x81EA;&#x8EAB;&#x5BF9;<a href="https://github.com/wizardpisces/experiment/packages">vue,react-hook,svelte&#x7684;&#x7B80;&#x5355;&#x5B9E;&#x73B0;</a>&#x540E;&#x7684;&#x601D;&#x8003;&#x603B;&#x7ED3;</p>
<h2 id="&#x72B6;&#x6001;&#x7BA1;&#x7406;"><a href="#&#x72B6;&#x6001;&#x7BA1;&#x7406;"></a>&#x72B6;&#x6001;&#x7BA1;&#x7406;</h2>
<p>&#x5927;&#x81F4;&#x79CD;&#x7C7B;&#xFF1A;</p>
<ol>
<li>Mutable vs Immutable</li>
<li>Dependency Tracking vs Dirty Tracking</li>
<li>Reactivity vs Simulated Reactivity</li>
</ol>
<p>eg:</p>
<ul>
<li>vue&#x504F;&#x5411;OOP(Object Oriented Program)&#x7F16;&#x7A0B;&#x6A21;&#x578B;; &#x9A71;&#x52A8;&#x89C6;&#x56FE;&#x504F;&#x5411;data mutable tracking</li>
<li>React&#x504F;&#x5411;FP(Functioanl Program)&#x7F16;&#x7A0B;&#x6A21;&#x578B;&#xFF1B;&#x9A71;&#x52A8;&#x89C6;&#x56FE;&#x504F;&#x5411;data immutable&#x5FEB;&#x7167;&#x66F4;&#x65B0;</li>
<li>Angular Dirty Tracking</li>
<li>Svelte &#x504F;&#x5411;&#x7F16;&#x8BD1;&#x65F6;&#x7684; Dirty Tracking</li>
</ul>
<h2 id="&#x6E32;&#x67D3;&#x673A;&#x5236;&#xFF1B;Render Mechanism"><a href="#&#x6E32;&#x67D3;&#x673A;&#x5236;&#xFF1B;Render Mechanism"></a>&#x6E32;&#x67D3;&#x673A;&#x5236;&#xFF1B;Render Mechanism</h2>
<p>&#x5927;&#x81F4;&#x79CD;&#x7C7B;&#xFF1A;</p>
<ol>
<li>JSX vs Template &#xFF08;&#x52A8;&#x6001;&#x6E32;&#x67D3;&#x51FD;&#x6570;&#x548C;&#x57FA;&#x4E8E;&#x9759;&#x6001;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x590D;&#x6742;&#x7684; Vue &#x8868;&#x8FBE;&#x5F0F;&#xFF09;</li>
<li>Expressiveness vs Raw Perf &#xFF08;&#x8868;&#x73B0;&#x529B;&#x548C;&#x539F;&#x751F;&#x6027;&#x80FD;&#xFF09;</li>
<li>Runtime Scheduling vs AOT&#xFF08;&#x8FD0;&#x884C;&#x65F6;&#x8C03;&#x5EA6;&#x548C;&#x63D0;&#x524D;&#x4F18;&#x5316;&#xFF09;</li>
</ol>
<p>JSX &#x8868;&#x73B0;&#x529B;&#x5F3A;&#xFF0C;&#x4F46;&#x662F;&#x6CA1;&#x6CD5;&#x505A;&#x9759;&#x6001;&#x7F16;&#x8BD1;&#x4F18;&#x5316;
Template &#x5931;&#x53BB;&#x4E86;&#x5F88;&#x591A;&#x8868;&#x73B0;&#x529B;&#xFF0C;&#x53D7;&#x9650;&#x4E8E;&#x6A21;&#x677F;&#x8BED;&#x6CD5;&#xFF0C;&#x4F46;&#x662F;&#x53EF;&#x4EE5;&#x505A;&#x9759;&#x6001;&#x7F16;&#x8BD1;&#x4F18;&#x5316;</p>
<p>eg:</p>
<ul>
<li>vue jsx/Virtual-DOM + template&#xFF0C;&#x7F16;&#x8BD1;&#x6210;render&#x51FD;&#x6570;
<ul>
<li>&#x4E3B;&#x8981;&#x65B9;&#x5411;&#x662F; template &#x7684;&#x9759;&#x6001;&#x4F18;&#x5316;</li>
</ul>
</li>
<li>react jsx/Virtual-DOM&#xFF0C;&#x7F16;&#x8BD1;&#x6210;render&#x51FD;&#x6570;
<ul>
<li>&#x4E3B;&#x8981;&#x65B9;&#x5411;&#x662F; JSX + &#x8FD0;&#x884C;&#x65F6;&#x8C03;&#x5EA6;&#x4F18;&#x5316;&#xFF0C;&#x63D0;&#x5347;&#x7528;&#x6237;<strong>&#x611F;&#x77E5;&#x6027;&#x80FD;</strong>&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;&#x65F6;&#x95F4;&#x5207;&#x7247;&#xFF08;&#x8C03;&#x5EA6;&#x4E5F;&#x8017;&#x65F6;&#xFF09;</li>
</ul>
</li>
<li>angular &#x57FA;&#x4E8E;template&#x7684;&#xFF0C;&#x5B83;&#x4EEC;&#x5C06;&#x6A21;&#x677F;&#x7F16;&#x8BD1;&#x6210;&#x76F8;&#x5BF9;&#x8F83;&#x4F4E;&#x7EA7;&#x522B;&#x7684;&#x6307;&#x4EE4;&#x6765;&#x8FDB;&#x884C;&#x5185;&#x5BB9;&#x6E32;&#x67D3;&#xFF0C;&#x57FA;&#x4E8E;Incremental DOM&#x66F4;&#x65B0;&#xFF08;&#x76F8;&#x5BF9;Virtual-DOM diff&#x8282;&#x7701;&#x5185;&#x5B58;&#xFF0C;&#x540C;&#x65F6;&#x66F4;&#x8D39;CPU&#xFF0C;&#x6240;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;CPU&#x8DDF;&#x5185;&#x5B58;&#x7684;&#x53D6;&#x820D;&#xFF09;
<ul>
<li>&#x4E3B;&#x8981;&#x65B9;&#x5411;&#x662F;&#xFF1A;&#x5F85;&#x8865;&#x5145;</li>
</ul>
</li>
<li>svelte&#xFF08;&#x4E00;&#x79CD;&#x7F16;&#x8BD1;&#x5668;&#x6846;&#x67B6;&#xFF09; &#x7F16;&#x8BD1;&#x751F;&#x6210;&#x6307;&#x4EE4;&#x66F4;&#x65B0;&#xFF0C;&#x57FA;&#x672C;&#x65E0;runtime&#x8C03;&#x5EA6;
<ul>
<li>&#x7F3A;&#x70B9;&#xFF1A;&#x5305;&#x5927;&#x5C0F;&#x4F1A;&#x968F;&#x7740;&#x5DE5;&#x7A0B;&#x589E;&#x957F;&#x800C;&#x6210;&#x6BD4;&#x8F83;&#x9661;&#x5CED;&#x7EBF;&#x6027;&#x589E;&#x957F;&#xFF1B;&#x53D7;&#x9650;&#x4E8E;&#x6A21;&#x677F;&#x8BED;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x6709;&#x5F88;&#x591A;&#x5FC3;&#x667A;&#x8D1F;&#x62C5;&#xFF1F;&#x7EA7;&#x522B;&#x8D8A;&#x4F4E;&#x7684;&#x7F16;&#x8BD1;&#x8F93;&#x51FA;&#xFF0C;&#x5F88;&#x96BE;&#x5C06;&#x4F60;&#x7684;&#x81EA;&#x5B9A;&#x4E49;&#x64CD;&#x4F5C;&#x4E0E;&#x5B83;&#x8FDB;&#x884C;&#x6302;&#x94A9;&#xFF0C;&#x5C31;&#x597D;&#x6BD4;&#x4F60;&#x65E0;&#x6CD5;&#x4F7F;&#x7528; C &#x8BED;&#x8A00;&#x53BB;&#x8C03;&#x8BD5;&#x4F60;&#x7684;&#x6C47;&#x7F16;&#x4EE3;&#x7801;</li>
<li>&#x4E3B;&#x8981;&#x65B9;&#x5411; AOT&#x4F18;&#x5316;&#xFF0C;&#x7F29;&#x5C0F;&#x7F16;&#x8BD1;&#x4F53;&#x79EF;&#xFF0C;&#x4F8B;&#x5982;&#x5BF9;&#x7F16;&#x8BD1;&#x6307;&#x4EE4;&#x5927;&#x5C0F;&#x7684;&#x4F18;&#x5316;</li>
</ul>
</li>
</ul>
<h1 id="&#x6846;&#x67B6;&#x5C42;&#x9762;"><a href="#&#x6846;&#x67B6;&#x5C42;&#x9762;"></a>&#x6846;&#x67B6;&#x5C42;&#x9762;</h1>
<h2 id="Vue"><a href="#Vue"></a>Vue</h2>
<p>react &lt; vue&#x7F16;&#x8BD1;&#x65F6; &lt; svelte
react &gt; vue&#x8FD0;&#x884C;&#x65F6; &gt; svelte</p>
<h3 id="&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;</h3>
<p><strong>&#x8FD0;&#x884C;&#x65F6;&#x6A21;&#x677F;&#x4E00;&#x6B21;&#x6027;&#x4F9D;&#x8D56;&#x6536;&#x96C6;</strong>
<s>&#x8FD0;&#x884C;&#x65F6;<strong>&#x5173;&#x8054;&#x53D8;&#x91CF;&#x66F4;&#x65B0;&#x64CD;&#x4F5C;&#x4E0E;&#x7EC4;&#x4EF6;&#x7684;&#x66F4;&#x65B0;&#x51FD;&#x6570;</strong>&#xFF0C;&#x53D8;&#x91CF;&#x53D8;&#x52A8;&#x65F6;&#x89E6;&#x53D1;&#x5BF9;&#x5E94;&#x7EC4;&#x4EF6;&#x7684;&#x66F4;&#x65B0;&#x51FD;&#x6570;</s></p>
<h3 id="API&#xFF1A;ref vs reactive"><a href="#API&#xFF1A;ref vs reactive"></a>API&#xFF1A;ref vs reactive</h3>
<h3 id="&#x8C03;&#x7528;&#x65B9;&#x5F0F;"><a href="#&#x8C03;&#x7528;&#x65B9;&#x5F0F;"></a>&#x8C03;&#x7528;&#x65B9;&#x5F0F;</h3>
<ol>
<li>reactive&#x53EA;&#x80FD;&#x4F20;&#x5165;&#x5BF9;&#x8C61;&#xFF0C;&#x65B9;&#x4FBF;&#x6570;&#x636E;&#x7684;&#x8BBF;&#x95EE;&#xFF1B;</li>
<li>ref &#x80FD;&#x4F20;&#x4EFB;&#x610F;&#x503C;&#xFF0C;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; ref &#x5BF9;&#x8C61;&#xFF0C;&#x4E3B;&#x8981;&#x66B4;&#x9732; .value &#x5C5E;&#x6027;&#xFF0C;&#x5BF9;value&#x662F;Object&#x7684;&#x60C5;&#x51B5;&#x4F1A;&#x7528; reactive&#x518D;&#x6B21;&#x5C01;&#x88C5;&#xFF1B;
&#x6240;&#x4EE5; ref &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x6210;&#x5BF9; reactive &#x7684;&#x518D;&#x6B21;&#x5C01;&#x88C5;&#xFF0C;&#x5904;&#x7406;&#x4E86; primary reactive&#x573A;&#x666F;&#xFF0C;&#x540C;&#x65F6;&#x89E3;&#x51B3;&#x4E86; &#x5BF9;&#x8C61;&#x6574;&#x4F53;&#x66FF;&#x6362;&#x7684;&#x70E6;&#x607C;</li>
</ol>
<h3 id="immutable vs mutable"><a href="#immutable vs mutable"></a>immutable vs mutable</h3>
<ol>
<li>reactive &#x662F; mutable &#x6A21;&#x5F0F;&#x7684;&#x6570;&#x636E; tracking&#xFF1B;</li>
<li>ref &#x662F; immutable &#x6A21;&#x5F0F;&#x7684;&#x6570;&#x636E; tracking&#xFF1B;&#x80FD;&#x4F20; ref</li>
</ol>
<h3 id="&#x5F00;&#x53D1;&#x4F53;&#x9A8C;"><a href="#&#x5F00;&#x53D1;&#x4F53;&#x9A8C;"></a>&#x5F00;&#x53D1;&#x4F53;&#x9A8C;</h3>
<p>&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x70ED;&#x66F4;&#x65B0;&#xFF1A;&#x5728;&#x540C;&#x4E00;&#x7EC4;&#x4EF6;&#x5C42;&#x9762;&#x8FD8;&#x80FD;&#x533A;&#x5206;&#x53EA;&#x5BF9;&#x6837;&#x5F0F;&#x3001;&#x6A21;&#x677F;&#x6216;&#x8005;js&#x903B;&#x8F91;&#x66F4;&#x65B0;</p>
<h2 id="React-Hooks"><a href="#React-Hooks"></a>React-Hooks</h2>
<p>&#x8F7B;&#x7F16;&#x8BD1;&#x91CD;&#x8FD0;&#x884C;&#x65F6;</p>
<h3 id="&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;</h3>
<p><strong>&#x8FD0;&#x884C;&#x65F6;&#x53CD;&#x590D;&#x4F9D;&#x8D56;&#x5904;&#x7406;</strong>
<s>&#x8FD0;&#x884C;&#x65F6;&#x901A;&#x8FC7;hooks&#x8C03;&#x7528;&#x987A;&#x5E8F;<strong>&#x5173;&#x8054;hooks(eg:setData)&#x8DDF;&#x51FD;&#x6570;&#x7EC4;&#x4EF6;</strong>&#xFF0C;&#x505A;&#x540E;&#x7EED;hook&#x8C03;&#x7528;&#x89E6;&#x53D1;&#x5BF9;&#x5E94;&#x51FD;&#x6570;&#x7EC4;&#x4EF6;&#x66F4;&#x65B0;</s></p>
<h2 id="Svelte&#x6DF1;&#x5165;"><a href="#Svelte&#x6DF1;&#x5165;"></a>Svelte&#x6DF1;&#x5165;</h2>
<p>&#x91CD;&#x7F16;&#x8BD1;&#x8F7B;&#x8FD0;&#x884C;&#x65F6;</p>
<h3 id="&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x8FD0;&#x884C;&#x539F;&#x7406;</h3>
<p><strong>&#x7F16;&#x8BD1;&#x65F6;&#x6A21;&#x677F;&#x4E00;&#x6B21;&#x6027;&#x4F9D;&#x8D56;&#x6536;&#x96C6;</strong>
<s>&#x7F16;&#x8BD1;&#x65F6;&#x901A;&#x8FC7;<strong>&#x6536;&#x96C6;&#x6A21;&#x677F;&#x5BF9;&#x53D8;&#x91CF;&#x7684;&#x5F15;&#x7528;&#x987A;&#x5E8F;&#x7F16;&#x8BD1;&#x51FA;&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x51FD;&#x6570;&#x4E0E;&#x66F4;&#x65B0;&#x51FD;&#x6570;</strong>&#xFF0C;&#x505A;&#x540E;&#x7EED;&#x4E8B;&#x4EF6;&#x7CBE;&#x51C6;&#x66F4;&#x65B0;</s></p>
<h3 id="&#x4E00;&#x53E5;&#x8BDD;&#x8C03;&#x5EA6;&#x539F;&#x7406;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x8C03;&#x5EA6;&#x539F;&#x7406;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x8C03;&#x5EA6;&#x539F;&#x7406;</h3>
<p>&#x5229;&#x7528;&#x6D4F;&#x89C8;&#x5668;&#x7684; microTask &#x6216;&#x8005; macroTask &#x505A;&#x7EC4;&#x4EF6;&#x6811;&#x66F4;&#x65B0;&#x7684;&#x6279;&#x91CF;&#x5904;&#x7406;</p>
<h3 id="&#x5173;&#x4E8E;&#x8C03;&#x5EA6;"><a href="#&#x5173;&#x4E8E;&#x8C03;&#x5EA6;"></a>&#x5173;&#x4E8E;&#x8C03;&#x5EA6;</h3>
<ol>
<li>&#x57FA;&#x672C;&#x8C03;&#x5EA6;&#x5355;&#x5143;?</li>
</ol>
<blockquote>
<p>&#x7EC4;&#x4EF6;&#x7684;&#x66F4;&#x65B0;&#x51FD;&#x6570;</p>
</blockquote>
<ol start="2">
<li>&#x5982;&#x4F55;&#x8C03;&#x5EA6;&#x7236;&#x7EC4;&#x4EF6;&#x66F4;&#x65B0;&#x53C8;&#x89E6;&#x53D1;&#x5B50;&#x7EC4;&#x4EF6;&#x7684;&#x66F4;&#x65B0;&#xFF1F;</li>
</ol>
<blockquote>
<p>&#x52A8;&#x6001;&#x4FEE;&#x6539;&#x8C03;&#x5EA6;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x4FDD;&#x8BC1;&#x5B50;&#x7EC4;&#x4EF6;&#x7684;update&#x51FD;&#x6570;&#x80FD;&#x5728;&#x7236;&#x7EC4;&#x4EF6;&#x7684;&#x66F4;&#x65B0;job&#x4E2D;&#x5B9E;&#x65F6;push&#x5230;&#x8C03;&#x5EA6;&#x7684;queue&#xFF0C;&#x4FDD;&#x8BC1;&#x4E86;&#x66F4;&#x65B0;&#x7684;&#x4E00;&#x81F4;&#x6027;</p>
<blockquote>
<p>&#x5751;&#xFF1A;queue&#x7684;&#x904D;&#x5386;&#x4E0D;&#x5EFA;&#x8BAE;&#x901A;&#x8FC7;&#x9759;&#x6001;&#x904D;&#x5386;&#x65B9;&#x5F0F;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;forEach&#xFF0C;&#x800C;&#x9700;&#x8981;&#x901A;&#x5173;&#x8FC7;&#x52A8;&#x6001;&#x904D;&#x5386;&#x65B9;&#x5F0F;&#x6765;&#x505A;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;&quot;for let of&quot;&#xFF1B;<em>&#xFF08;ps:&#x52A8;&#x9759;&#x6307;&#x662F;&#x5426;&#x5B9E;&#x65F6;&#x5BF9;&#x6570;&#x7EC4;&#x957F;&#x5EA6;&#x505A;&#x6C42;&#x503C;&#xFF0C;&#x53EA;&#x6709;&#x5B9E;&#x65F6;&#x8BA1;&#x7B97;&#x624D;&#x80FD;&#x4FDD;&#x8BC1;&#x52A8;&#x6001;&#x6539;&#x53D8;&#x7684;&#x8C03;&#x5EA6;&#x961F;&#x5217;&#x4E5F;&#x80FD;&#x88AB;&#x6267;&#x884C;&#xFF09;</em></p>
</blockquote>
</blockquote>
<h1 id="&#x8FDB;&#x4E00;&#x6B65;&#x601D;&#x8003;"><a href="#&#x8FDB;&#x4E00;&#x6B65;&#x601D;&#x8003;"></a>&#x8FDB;&#x4E00;&#x6B65;&#x601D;&#x8003;</h1>
<ul>
<li>&#x4F18;&#x52BF;&#x53EF;&#x80FD;&#x6F14;&#x53D8;&#x6210;&#x52A3;&#x52BF;&#xFF0C;&#x7F3A;&#x70B9;&#x4E5F;&#x53EF;&#x80FD;&#x6F14;&#x53D8;&#x6210;&#x67D0;&#x79CD;&#x4F18;&#x52BF;&#xFF1B;&#x5206;&#x4E45;&#x5FC5;&#x5408;&#x5408;&#x4E45;&#x5FC5;&#x5206;&#xFF1B;</li>
<li>Vue&#x8DDF;React&#x6700;&#x5927;&#x7684;&#x4E0D;&#x540C;&#x70B9;&#x53EF;&#x80FD;&#x5C31;&#x5728;&#x4E8E;&#x6570;&#x636E;&#x7684;Reactivity&#xFF08;&#x662F;Immutable&#x8FD8;&#x662F;Mutable&#xFF09;&#xFF1B;&#x540E;&#x7EED;&#x7684;&#x6F14;&#x53D8;&#x90FD;&#x79BB;&#x4E0D;&#x5F00;&#x8FD9;&#x70B9;&#xFF0C;&#x4F8B;&#x5B50;&#xFF1A;
<ol>
<li>Vue3&#x7684;Hooks&#x4E3A;&#x4E86;&#x89E3;&#x51B3;.vue&#x6587;&#x4EF6;<strong>&#x66F4;&#x8D34;&#x8FD1;web&#x5F00;&#x53D1;&#x8005;</strong>&#x5374;&#x5BFC;&#x81F4;&#x903B;&#x8F91;&#x89C6;&#x56FE;&#x5272;&#x88C2;&#x95EE;&#x9898;&#xFF1B;&#x987A;&#x5E26;&#x6709;&#x66F4;&#x597D;&#x7684;&#x903B;&#x8F91;&#x590D;&#x7528; + &#x66F4;&#x597D;&#x7684;ts</li>
<li>React fiber&#x4E3A;&#x4E86;&#x89E3;&#x51B3; &#x6570;&#x636E;Immutable&#x66F4;&#x5B89;&#x5168;&#x66F4;&#x597D;&#x9884;&#x6D4B;&#x5374;&#x5BFC;&#x81F4;&#x7684;&#x66F4;&#x65B0;&#x6027;&#x80FD;&#x95EE;&#x9898;</li>
<li>React + Mobx &#x8DDF; Vue3 Composition-API&#x5982;&#x6B64;&#x7C7B;&#x4F3C;</li>
</ol>
</li>
</ul>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li>https://zhuanlan.zhihu.com/p/35046696</li>
<li>https://zhuanlan.zhihu.com/p/76622839</li>
<li>https://github.com/wizardpisces/experiment/blob/master/packages/mini-react</li>
<li>https://github.com/wizardpisces/experiment/blob/master/packages/mini-svelte</li>
<li>https://github.com/wizardpisces/experiment/blob/master/packages/mini-vue</li>
<li>https://github.com/vuejs/vue-next</li>
<li>https://github.com/google/incremental-dom</li>
</ul>
`,e=[{level:1,title:"框架设计的思考",children:[{level:2,title:"状态管理",children:[]},{level:2,title:"渲染机制；Render Mechanism",children:[]}]},{level:1,title:"框架层面",children:[{level:2,title:"Vue",children:[{level:3,title:"一句话运行原理",children:[]},{level:3,title:"API：ref vs reactive",children:[]},{level:3,title:"调用方式",children:[]},{level:3,title:"immutable vs mutable",children:[]},{level:3,title:"开发体验",children:[]}]},{level:2,title:"React-Hooks",children:[{level:3,title:"一句话运行原理",children:[]}]},{level:2,title:"Svelte深入",children:[{level:3,title:"一句话运行原理",children:[]},{level:3,title:"一句话调度原理",children:[]},{level:3,title:"关于调度",children:[]}]}]},{level:1,title:"进一步思考",children:[]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,e as nestedHeaders};
