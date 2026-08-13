const x={title:"从 GC 到所有权：一文看懂语言如何管理对象生命周期"},F=`<p>&#x5F88;&#x591A;&#x4EBA;&#x628A; Go &#x548C; Rust &#x7684;&#x5DEE;&#x522B;&#x8BF4;&#x6210;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;Go &#x6709; GC&#xFF0C;Rust &#x6709;&#x6240;&#x6709;&#x6743;&#x3002;</p>
<p>&#x8FD9;&#x53E5;&#x8BDD;&#x6CA1;&#x9519;&#xFF0C;&#x5374;&#x6CA1;&#x6709;&#x56DE;&#x7B54;&#x771F;&#x6B63;&#x7684;&#x95EE;&#x9898;&#x3002;&#x770B;&#x4E00;&#x6BB5; Go&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">newRequest</span><span class="hljs-params">()</span> *<span class="hljs-title">Request</span></span> {
	request := Request{ID: <span class="hljs-string">&quot;42&quot;</span>}
	<span class="hljs-keyword">return</span> &amp;request
}
</code></pre>
<p><code>newRequest</code> &#x5DF2;&#x7ECF;&#x8FD4;&#x56DE;&#x4E86;&#xFF0C;<code>request</code> &#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x80FD;&#x88AB;&#x8C03;&#x7528;&#x65B9;&#x4F7F;&#x7528;&#xFF1F;&#x5B83;&#x4E0D;&#x80FD;&#x968F;&#x7740;&#x51FD;&#x6570;&#x6808;&#x5E27;&#x4E00;&#x8D77;&#x6D88;&#x5931;&#x3002;</p>
<p>&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x521B;&#x5EFA;&#x5230;&#x91CA;&#x653E;&#xFF0C;&#x59CB;&#x7EC8;&#x6709;&#x56DB;&#x7B14;&#x8D26;&#xFF1A;&#x653E;&#x5728;&#x54EA;&#x91CC;&#x3001;&#x6D3B;&#x5230;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x3001;&#x8C01;&#x80FD;&#x5F15;&#x7528;&#x6216;&#x4FEE;&#x6539;&#x5B83;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x53EF;&#x4EE5;&#x91CA;&#x653E;&#x3002;GC&#x3001;&#x6240;&#x6709;&#x6743;&#x3001;&#x501F;&#x7528;&#x548C;&#x9003;&#x9038;&#x5206;&#x6790;&#xFF0C;&#x5176;&#x5B9E;&#x90FD;&#x5728;&#x56DE;&#x7B54;&#x8FD9;&#x540C;&#x4E00;&#x7EC4;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x5148;&#x522B;&#x6025;&#x7740;&#x95EE;&#x5B83;&#x5728;&#x6808;&#x4E0A;&#x8FD8;&#x662F;&#x5806;&#x4E0A;"><a href="#&#x5148;&#x522B;&#x6025;&#x7740;&#x95EE;&#x5B83;&#x5728;&#x6808;&#x4E0A;&#x8FD8;&#x662F;&#x5806;&#x4E0A;"></a>&#x5148;&#x522B;&#x6025;&#x7740;&#x95EE;&#x5B83;&#x5728;&#x6808;&#x4E0A;&#x8FD8;&#x662F;&#x5806;&#x4E0A;</h2>
<p>&#x628A; <code>Request</code> &#x60F3;&#x6210;&#x4E00;&#x6B21; HTTP &#x8BF7;&#x6C42;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x3002;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4F1A;&#x8BFB;&#x5B83;&#xFF0C;&#x65E5;&#x5FD7; goroutine &#x53EF;&#x80FD;&#x7A0D;&#x540E;&#x8FD8;&#x8981;&#x5199;&#x5B83;&#xFF0C;&#x7F13;&#x5B58;&#x4E5F;&#x53EF;&#x80FD;&#x6682;&#x65F6;&#x4FDD;&#x7559;&#x5B83;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</p>
<pre><code class="language-text">&#x521B;&#x5EFA; Request &#x2192; &#x88AB;&#x591A;&#x4E2A;&#x4F4D;&#x7F6E;&#x4F7F;&#x7528; &#x2192; &#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x8005;&#x79BB;&#x5F00; &#x2192; &#x91CA;&#x653E;&#x8D44;&#x6E90;
</code></pre>
<p>&#x201C;&#x6808;&#x8FD8;&#x662F;&#x5806;&#x201D;&#x53EA;&#x56DE;&#x7B54;&#x7B2C;&#x4E00;&#x95EE;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;&#x771F;&#x6B63;&#x68D8;&#x624B;&#x7684;&#x662F;&#xFF1A;&#x7A0B;&#x5E8F;&#x8FD8;&#x5728;&#x8DD1;&#x65F6;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x8005;&#x5230;&#x5E95;&#x662F;&#x8C01;&#xFF1F;</p>
<p>&#x5982;&#x679C;&#x8BED;&#x8A00;&#x5141;&#x8BB8;&#x4EFB;&#x610F;&#x5730;&#x65B9;&#x4FDD;&#x7559;&#x5F15;&#x7528;&#xFF0C;&#x53C8;&#x4E0D;&#x8981;&#x6C42;&#x7A0B;&#x5E8F;&#x5458;&#x5199;&#x51FA;&#x5F15;&#x7528;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x901A;&#x5E38;&#x65E0;&#x6CD5;&#x53EA;&#x9760;&#x6E90;&#x7801;&#x8BC1;&#x660E;&#x201C;&#x8FD9;&#x91CC;&#x4E00;&#x5B9A;&#x662F;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x4F7F;&#x7528;&#x201D;&#x3002;&#x5B83;&#x9700;&#x8981;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x7EE7;&#x7EED;&#x89C2;&#x5BDF;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x4ECD;&#x53EF;&#x8FBE;&#x3002;&#x8FD9;&#x662F; Go &#x7684;&#x9009;&#x62E9;&#x3002;</p>
<h2 id="Go&#xFF1A;&#x5148;&#x51B3;&#x5B9A;&#x600E;&#x6837;&#x653E;&#xFF0C;&#x518D;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x51B3;&#x5B9A;&#x80FD;&#x5426;&#x56DE;&#x6536;"><a href="#Go&#xFF1A;&#x5148;&#x51B3;&#x5B9A;&#x600E;&#x6837;&#x653E;&#xFF0C;&#x518D;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x51B3;&#x5B9A;&#x80FD;&#x5426;&#x56DE;&#x6536;"></a>Go&#xFF1A;&#x5148;&#x51B3;&#x5B9A;&#x600E;&#x6837;&#x653E;&#xFF0C;&#x518D;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x51B3;&#x5B9A;&#x80FD;&#x5426;&#x56DE;&#x6536;</h2>
<p>Go &#x7F16;&#x8BD1;&#x5668;&#x5E76;&#x975E;&#x628A;&#x4E00;&#x5207;&#x90FD;&#x7559;&#x7ED9; runtime&#x3002;&#x5B83;&#x4F1A;&#x53D1;&#x73B0; <code>request</code> &#x7684;&#x6307;&#x9488;&#x79BB;&#x5F00;&#x4E86;&#x51FD;&#x6570;&#xFF0C;&#x4E8E;&#x662F;&#x4E0D;&#x80FD;&#x628A;&#x5BF9;&#x8C61;&#x53EA;&#x7559;&#x5728;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x540E;&#x4F1A;&#x6D88;&#x5931;&#x7684;&#x6808;&#x5E27;&#x91CC;&#x3002;&#x8FD9;&#x7C7B;&#x5224;&#x65AD;&#x901A;&#x5E38;&#x53EB;&#x9003;&#x9038;&#x5206;&#x6790;&#x3002;</p>
<pre><code class="language-text">&#x7F16;&#x8BD1;&#x671F;&#xFF1A;&#x5F15;&#x7528;&#x4F1A;&#x79BB;&#x5F00;&#x51FD;&#x6570; &#x2192; &#x9009;&#x62E9;&#x80FD;&#x7EE7;&#x7EED;&#x5B58;&#x6D3B;&#x7684;&#x5206;&#x914D;&#x65B9;&#x5F0F;
&#x8FD0;&#x884C;&#x671F;&#xFF1A;&#x4ECE; root &#x51FA;&#x53D1;&#x4ECD;&#x80FD;&#x5230;&#x8FBE;&#x5BF9;&#x8C61;&#x5417;&#xFF1F;&#x2192; &#x80FD;&#x5219;&#x4FDD;&#x7559;&#xFF0C;&#x4E0D;&#x80FD;&#x5219; GC &#x56DE;&#x6536;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E2A;&#x91CD;&#x8981;&#x8FB9;&#x754C;&#xFF1A;**&#x9003;&#x9038;&#x5206;&#x6790;&#x4E0D;&#x7B49;&#x4E8E;&#x5783;&#x573E;&#x56DE;&#x6536;&#x3002;**&#x524D;&#x8005;&#x4E3B;&#x8981;&#x56DE;&#x7B54;&#x201C;&#x8FD9;&#x4E2A;&#x503C;&#x80FD;&#x5426;&#x53EA;&#x6D3B;&#x5728;&#x5F53;&#x524D;&#x6808;&#x5E27;&#x201D;&#xFF1B;&#x540E;&#x8005;&#x56DE;&#x7B54;&#x201C;&#x73B0;&#x5728;&#x8FD8;&#x6709;&#x6D3B;&#x7740;&#x7684;&#x5F15;&#x7528;&#x80FD;&#x5230;&#x5B83;&#x5417;&#x201D;&#x3002;&#x524D;&#x8005;&#x5C3D;&#x91CF;&#x628A;&#x5206;&#x914D;&#x51B3;&#x7B56;&#x524D;&#x79FB;&#xFF0C;&#x540E;&#x8005;&#x5904;&#x7406;&#x8FD0;&#x884C;&#x4E2D;&#x4E0D;&#x65AD;&#x53D8;&#x5316;&#x7684;&#x5F15;&#x7528;&#x56FE;&#x3002;</p>
<p>&#x56E0;&#x6B64; Go &#x53EF;&#x4EE5;&#x8BA9;&#x4F60;&#x81EA;&#x7136;&#x5730;&#x628A;&#x8BF7;&#x6C42;&#x4E0A;&#x4E0B;&#x6587;&#x4EA4;&#x7ED9; goroutine&#x3001;channel &#x6216;&#x5BB9;&#x5668;&#xFF0C;&#x4E0D;&#x5FC5;&#x5728;&#x6BCF;&#x6B21;&#x4F20;&#x9012;&#x65F6;&#x58F0;&#x660E;&#x6240;&#x6709;&#x6743;&#x5982;&#x4F55;&#x8F6C;&#x79FB;&#x3002;&#x4EE3;&#x4EF7;&#x662F; runtime &#x8981;&#x7EF4;&#x62A4;&#x5806;&#x3001;&#x626B;&#x63CF;&#x53EF;&#x8FBE;&#x5BF9;&#x8C61;&#xFF0C;&#x5E76;&#x5728;&#x5408;&#x9002;&#x7684;&#x65F6;&#x5019;&#x5B8C;&#x6210;&#x56DE;&#x6536;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x300A;<a href="./%E4%B8%80%E6%96%87%E8%AF%BB%E6%87%82%20Go%20Runtime.md">&#x4E00;&#x6587;&#x8BFB;&#x61C2; Go Runtime</a>&#x300B;&#x4E2D; GC &#x4E0E;&#x8C03;&#x5EA6;&#x5668;&#x4E3A;&#x4EC0;&#x4E48;&#x90FD;&#x5C5E;&#x4E8E; runtime&#xFF1A;&#x5B83;&#x4EEC;&#x90FD;&#x5728;&#x7EF4;&#x6301;&#x6E90;&#x7801;&#x6CA1;&#x6709;&#x663E;&#x5F0F;&#x5199;&#x51FA;&#x7684;&#x8FD0;&#x884C;&#x72B6;&#x6001;&#x3002;</p>
<h2 id="Rust&#xFF1A;&#x628A;&#x80FD;&#x8BC1;&#x660E;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x53D8;&#x6210;&#x80FD;&#x5426;&#x7F16;&#x8BD1;&#x7684;&#x6761;&#x4EF6;"><a href="#Rust&#xFF1A;&#x628A;&#x80FD;&#x8BC1;&#x660E;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x53D8;&#x6210;&#x80FD;&#x5426;&#x7F16;&#x8BD1;&#x7684;&#x6761;&#x4EF6;"></a>Rust&#xFF1A;&#x628A;&#x80FD;&#x8BC1;&#x660E;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x53D8;&#x6210;&#x80FD;&#x5426;&#x7F16;&#x8BD1;&#x7684;&#x6761;&#x4EF6;</h2>
<p>&#x540C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728; Rust &#x4E2D;&#x53EF;&#x4EE5;&#x5199;&#x6210;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Request</span></span> { id: <span class="hljs-built_in">String</span> }

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">new_request</span></span>() -&gt; Request {
    Request { id: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;42&quot;</span>) }
}
</code></pre>
<p>&#x8FD9;&#x91CC;&#x8FD4;&#x56DE;&#x7684;&#x4E0D;&#x662F;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#x7684;&#x5F15;&#x7528;&#xFF0C;&#x800C;&#x662F; <code>Request</code> &#x7684;&#x6240;&#x6709;&#x6743;&#x3002;&#x8C03;&#x7528;&#x65B9;&#x53EF;&#x4EE5;&#x628A;&#x6240;&#x6709;&#x6743;&#x4EA4;&#x7ED9;&#x522B;&#x4EBA;&#xFF0C;&#x6216;&#x8005;&#x4E34;&#x65F6;&#x501F;&#x7ED9;&#x522B;&#x4EBA;&#x4F7F;&#x7528;&#xFF1B;&#x501F;&#x7528;&#x8005;&#x4E0D;&#x80FD;&#x6D3B;&#x5F97;&#x6BD4; owner &#x66F4;&#x4E45;&#xFF0C;&#x6240;&#x6709;&#x6743;&#x79FB;&#x52A8;&#x540E;&#x65E7;&#x53D8;&#x91CF;&#x4E5F;&#x4E0D;&#x80FD;&#x7EE7;&#x7EED;&#x4F7F;&#x7528;&#x5B83;&#x3002;</p>
<pre><code class="language-text">owner&#xFF1A;&#x5BF9;&#x8C61;&#x7684;&#x552F;&#x4E00;&#x8D1F;&#x8D23;&#x4EBA;
borrow&#xFF1A;&#x53EF;&#x4EE5;&#x4E34;&#x65F6;&#x4F7F;&#x7528;&#xFF0C;&#x4F46;&#x4E0D;&#x5EF6;&#x957F; owner &#x7684;&#x751F;&#x547D;
move&#xFF1A;&#x628A;&#x8D23;&#x4EFB;&#x4EA4;&#x7ED9;&#x53E6;&#x4E00;&#x4E2A;&#x7ED1;&#x5B9A;
drop&#xFF1A;&#x8D23;&#x4EFB;&#x7EC8;&#x7ED3;&#x65F6;&#x6267;&#x884C;&#x6E05;&#x7406;
</code></pre>
<p>&#x4F8B;&#x5982;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x7F16;&#x8BD1;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">invalid</span></span>() -&gt; &amp;<span class="hljs-built_in">String</span> {
    <span class="hljs-keyword">let</span> request = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;42&quot;</span>);
    &amp;request
}
</code></pre>
<p>&#x4E0D;&#x662F; Rust &#x731C;&#x51FA;&#x4E86;&#x5BF9;&#x8C61;&#x4F1A;&#x5728;&#x7B2C;&#x51E0;&#x884C;&#x6B7B;&#x4EA1;&#xFF1B;&#x800C;&#x662F;&#x5B83;&#x8981;&#x6C42;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x6210;&#x53EF;&#x8BC1;&#x660E;&#x7684;&#x5F62;&#x72B6;&#x3002;&#x8FD9;&#x4E2A;&#x5F15;&#x7528;&#x6BD4; <code>request</code> &#x6D3B;&#x5F97;&#x4E45;&#xFF0C;&#x56E0;&#x6B64;&#x7A0B;&#x5E8F;&#x88AB;&#x62D2;&#x7EDD;&#x3002;</p>
<p>&#x5BF9;&#x4E8E;&#x5355;&#x4E00;&#x6240;&#x6709;&#x8005;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;runtime &#x4E0D;&#x9700;&#x8981;&#x5728;&#x672A;&#x6765;&#x67D0;&#x6B21;&#x626B;&#x63CF;&#x4E2D;&#x518D;&#x5BFB;&#x627E;&#x201C;&#x6700;&#x540E;&#x4E00;&#x6761;&#x5F15;&#x7528;&#x201D;&#xFF1A;&#x6240;&#x6709;&#x8005;&#x7ED3;&#x675F;&#x65F6;&#xFF0C;Rust &#x8FD0;&#x884C; <code>Drop</code>&#x3002;&#x7A0B;&#x5E8F;&#x6267;&#x884C;&#x5230;&#x90A3;&#x4E00;&#x523B;&#x624D;&#x4F1A;&#x771F;&#x6B63;&#x6E05;&#x7406;&#xFF1B;&#x7F16;&#x8BD1;&#x5668;&#x63D0;&#x524D;&#x4FDD;&#x8BC1;&#x7684;&#x662F;&#x4E0D;&#x4F1A;&#x5B58;&#x5728;&#x5408;&#x6CD5;&#x7684;&#x60AC;&#x5782;&#x5F15;&#x7528;&#x3002;</p>
<h2 id="&#x9759;&#x6001;&#x8BC1;&#x660E;&#x6CA1;&#x6709;&#x6D88;&#x706D;&#x8FD0;&#x884C;&#x65F6;"><a href="#&#x9759;&#x6001;&#x8BC1;&#x660E;&#x6CA1;&#x6709;&#x6D88;&#x706D;&#x8FD0;&#x884C;&#x65F6;"></a>&#x9759;&#x6001;&#x8BC1;&#x660E;&#x6CA1;&#x6709;&#x6D88;&#x706D;&#x8FD0;&#x884C;&#x65F6;</h2>
<p>&#x5047;&#x5982;&#x540C;&#x4E00;&#x4E2A;&#x8BF7;&#x6C42;&#x9700;&#x8981;&#x540C;&#x65F6;&#x88AB;&#x5BA1;&#x8BA1;&#x6A21;&#x5757;&#x548C;&#x7F13;&#x5B58;&#x957F;&#x671F;&#x6301;&#x6709;&#xFF1A;</p>
<pre><code class="language-text">&#x5BA1;&#x8BA1;&#x6A21;&#x5757; &#x2500;&#x2500;&#x2510;
           &#x251C;&#x2500;&#x2500; Request
&#x7F13;&#x5B58;&#x6A21;&#x5757; &#x2500;&#x2500;&#x2518;
</code></pre>
<p>&#x5355;&#x4E00;&#x6240;&#x6709;&#x8005;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x8D34;&#x5408;&#x95EE;&#x9898;&#x3002;Rust &#x4E0D;&#x4F1A;&#x5047;&#x88C5;&#x7F16;&#x8BD1;&#x5668;&#x80FD;&#x591F;&#x77E5;&#x9053;&#x4E24;&#x4E2A;&#x6A21;&#x5757;&#x4F55;&#x65F6;&#x90FD;&#x653E;&#x624B;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x4F60;&#x663E;&#x5F0F;&#x9009;&#x62E9; <code>Rc</code> &#x6216;&#x591A;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684; <code>Arc</code>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::sync::Arc;

<span class="hljs-keyword">let</span> request = Arc::new(Request { id: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;42&quot;</span>) });
<span class="hljs-keyword">let</span> for_audit = Arc::clone(&amp;request);
<span class="hljs-keyword">let</span> for_cache = Arc::clone(&amp;request);
</code></pre>
<p>&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x589E;&#x51CF;&#xFF0C;&#x8BA1;&#x6570;&#x5F52;&#x96F6;&#x65F6;&#x624D;&#x91CA;&#x653E;&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x6CA1;&#x6709;&#x96C6;&#x4E2D;&#x5F0F; tracing GC&#xFF0C;&#x5374;&#x4ECD;&#x662F;&#x52A8;&#x6001;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x7BA1;&#x7406;&#xFF1B;&#x5F3A;&#x5F15;&#x7528;&#x5F62;&#x6210;&#x73AF;&#x65F6;&#xFF0C;&#x8BA1;&#x6570;&#x4E5F;&#x4E0D;&#x4F1A;&#x5F52;&#x96F6;&#xFF0C;&#x9700;&#x8981; <code>Weak</code> &#x6216;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x5173;&#x7CFB;&#x6765;&#x6253;&#x7834;&#x73AF;&#x3002;</p>
<p>&#x7F51;&#x7EDC;&#x4F55;&#x65F6;&#x6536;&#x5230;&#x6570;&#x636E;&#x3001;&#x54EA;&#x4E2A;&#x4EFB;&#x52A1;&#x5148;&#x88AB;&#x8C03;&#x5EA6;&#x3001;&#x54C8;&#x5E0C;&#x8868;&#x662F;&#x5426;&#x6269;&#x5BB9;&#xFF0C;&#x540C;&#x6837;&#x53EA;&#x4F1A;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x53D1;&#x751F;&#x3002;&#x6240;&#x6709;&#x6743;&#x53EA;&#x9759;&#x6001;&#x5316;&#x4E86;&#x4E00;&#x90E8;&#x5206;&#x751F;&#x547D;&#x5468;&#x671F;&#x95EE;&#x9898;&#xFF0C;&#x4E0D;&#x80FD;&#x628A;&#x672A;&#x6765;&#x8F93;&#x5165;&#x642C;&#x8FDB;&#x7F16;&#x8BD1;&#x5668;&#x3002;</p>
<h2 id="&#x771F;&#x6B63;&#x7684;&#x5206;&#x754C;&#xFF1A;&#x72B6;&#x6001;&#x7531;&#x8C01;&#x8D1F;&#x8D23;&#x8BC1;&#x660E;"><a href="#&#x771F;&#x6B63;&#x7684;&#x5206;&#x754C;&#xFF1A;&#x72B6;&#x6001;&#x7531;&#x8C01;&#x8D1F;&#x8D23;&#x8BC1;&#x660E;"></a>&#x771F;&#x6B63;&#x7684;&#x5206;&#x754C;&#xFF1A;&#x72B6;&#x6001;&#x7531;&#x8C01;&#x8D1F;&#x8D23;&#x8BC1;&#x660E;</h2>
<table>
<thead>
<tr>
<th>&#x95EE;&#x9898;</th>
<th>Go &#x7684;&#x4E3B;&#x8981;&#x5206;&#x5DE5;</th>
<th>Rust &#x7684;&#x4E3B;&#x8981;&#x5206;&#x5DE5;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x503C;&#x662F;&#x5426;&#x80FD;&#x53EA;&#x653E;&#x5728;&#x5F53;&#x524D;&#x6808;&#x5E27;</td>
<td>&#x7F16;&#x8BD1;&#x5668;&#x505A;&#x9003;&#x9038;&#x5206;&#x6790;</td>
<td>&#x7C7B;&#x578B;&#x3001;&#x6240;&#x6709;&#x6743;&#x4E0E;&#x5E03;&#x5C40;&#x5171;&#x540C;&#x7EA6;&#x675F;</td>
</tr>
<tr>
<td>&#x5F15;&#x7528;&#x662F;&#x5426;&#x4ECD;&#x6709;&#x6548;</td>
<td>runtime &#x4FDD;&#x6301;&#x53EF;&#x8FBE;&#x5BF9;&#x8C61;</td>
<td>&#x501F;&#x7528;&#x68C0;&#x67E5;&#x62D2;&#x7EDD;&#x60AC;&#x5782;&#x5F15;&#x7528;</td>
</tr>
<tr>
<td>&#x591A;&#x5904;&#x5171;&#x4EAB;&#x65F6;&#x4F55;&#x65F6;&#x91CA;&#x653E;</td>
<td>GC &#x6839;&#x636E;&#x53EF;&#x8FBE;&#x6027;&#x5224;&#x65AD;</td>
<td>&#x663E;&#x5F0F;&#x9009;&#x62E9; <code>Rc</code>/<code>Arc</code> &#x7B49;&#x52A8;&#x6001;&#x673A;&#x5236;&#xFF0C;&#x6216;&#x91CD;&#x6784;&#x6240;&#x6709;&#x6743;</td>
</tr>
<tr>
<td>&#x666E;&#x901A;&#x8D44;&#x6E90;&#x4F55;&#x65F6;&#x6E05;&#x7406;</td>
<td>&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x8FBE;&#x540E;&#x7531; GC &#x56DE;&#x6536;</td>
<td>owner &#x7ED3;&#x675F;&#x65F6;&#x6267;&#x884C; <code>Drop</code></td>
</tr>
</tbody>
</table>
<p>Rust &#x4E0D;&#x662F;&#x201C;&#x628A; GC &#x6362;&#x6210; <code>free</code>&#x201D;&#xFF0C;Go &#x4E5F;&#x4E0D;&#x662F;&#x201C;&#x5168;&#x90E8;&#x7531; runtime &#x51B3;&#x5B9A;&#x201D;&#x3002;&#x4E24;&#x8005;&#x90FD;&#x5728;&#x505A;&#x7F16;&#x8BD1;&#x671F;&#x5206;&#x6790;&#xFF0C;&#x4E5F;&#x90FD;&#x8981;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x5904;&#x7406;&#x771F;&#x5B9E;&#x8F93;&#x5165;&#xFF1B;&#x5DEE;&#x522B;&#x662F;&#x5B83;&#x4EEC;&#x8BA9;&#x54EA;&#x4E00;&#x90E8;&#x5206;&#x5173;&#x7CFB;&#x6210;&#x4E3A;&#x8BED;&#x8A00;&#x5F3A;&#x5236;&#x7684;&#x9759;&#x6001;&#x7EA6;&#x675F;&#x3002;</p>
<blockquote>
<p>&#x8BED;&#x8A00; runtime &#x7684;&#x8BBE;&#x8BA1;&#xFF0C;&#x9996;&#x5148;&#x662F;&#x5728;&#x5212;&#x5206;&#xFF1A;&#x54EA;&#x4E9B;&#x5173;&#x4E8E;&#x7A0B;&#x5E8F;&#x72B6;&#x6001;&#x7684;&#x5224;&#x65AD;&#x53EF;&#x4EE5;&#x63D0;&#x524D;&#x8BC1;&#x660E;&#xFF0C;&#x54EA;&#x4E9B;&#x5FC5;&#x987B;&#x7559;&#x7ED9;&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;&#x65F6;&#x627F;&#x62C5;&#x3002;</p>
</blockquote>
<p>Go &#x8BA9; GC &#x63A5;&#x4F4F;&#x66F4;&#x591A;&#x52A8;&#x6001;&#x5F15;&#x7528;&#x5173;&#x7CFB;&#xFF0C;&#x6362;&#x53D6;&#x8F83;&#x8F7B;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x5FC3;&#x667A;&#x8D1F;&#x62C5;&#xFF1B;Rust &#x8BA9;&#x6240;&#x6709;&#x6743;&#x548C;&#x501F;&#x7528;&#x68C0;&#x67E5;&#x63A5;&#x4F4F;&#x66F4;&#x591A;&#x5173;&#x7CFB;&#xFF0C;&#x6362;&#x53D6;&#x66F4;&#x4E25;&#x683C;&#x7684;&#x8868;&#x8FBE;&#x65B9;&#x5F0F;&#x3002;&#x5B83;&#x4EEC;&#x6CA1;&#x6709;&#x6D88;&#x706D;&#x590D;&#x6742;&#x5EA6;&#xFF0C;&#x53EA;&#x662F;&#x628A;&#x590D;&#x6742;&#x5EA6;&#x5B89;&#x653E;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</p>
<p>&#x5F53;&#x4F60;&#x518D;&#x770B;&#x5230;&#x201C;&#x4E3A;&#x4EC0;&#x4E48;&#x9003;&#x9038;&#x201D;&#x201C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x91CC;&#x8981; <code>Arc</code>&#x201D;&#x201C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x4E2A;&#x5F15;&#x7528;&#x8FC7;&#x4E0D;&#x4E86;&#x501F;&#x7528;&#x68C0;&#x67E5;&#x201D;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x4EEC;&#x8FD8;&#x539F;&#x6210;&#x540C;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;<strong>&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6B64;&#x523B;&#x8FD8;&#x80FD;&#x7531;&#x8C01;&#x5B89;&#x5168;&#x5730;&#x4F7F;&#x7528;&#xFF0C;&#x53C8;&#x7531;&#x8C01;&#x8D1F;&#x8D23;&#x8BA9;&#x5B83;&#x7ED3;&#x675F;&#x3002;</strong></p>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li><a href="https://go.dev/doc/gc-guide">A Guide to the Go Garbage Collector</a></li>
<li><a href="https://go.dev/doc/faq#stack_or_heap">Go FAQ&#xFF1A;stack or heap</a></li>
<li><a href="https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html">The Rust Programming Language&#xFF1A;What Is Ownership?</a></li>
<li><a href="https://doc.rust-lang.org/book/ch15-04-rc.html">The Rust Programming Language&#xFF1A;Rc<t></t></a></li>
</ul>
`,E=[{level:2,title:"先别急着问它在栈上还是堆上",children:[]},{level:2,title:"Go：先决定怎样放，再在运行时决定能否回收",children:[]},{level:2,title:"Rust：把能证明的关系，变成能否编译的条件",children:[]},{level:2,title:"静态证明没有消灭运行时",children:[]},{level:2,title:"真正的分界：状态由谁负责证明",children:[]},{level:2,title:"参考",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
