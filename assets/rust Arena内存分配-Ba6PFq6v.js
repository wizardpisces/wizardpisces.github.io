const x={},n=`<h2 id="Arena"><a href="#Arena"></a>Arena</h2>
<p>&#x5728; Rust &#x4E2D;&#xFF0C;<code>arena</code> &#x662F;&#x4E00;&#x79CD;&#x5185;&#x5B58;&#x5206;&#x914D;&#x7B56;&#x7565;&#xFF0C;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#x9AD8;&#x6027;&#x80FD;&#x573A;&#x666F;&#x4E2D;&#x9AD8;&#x6548;&#x5730;&#x5206;&#x914D;&#x548C;&#x7BA1;&#x7406;&#x4E00;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x76F8;&#x6BD4; <code>Box</code>&#x3001;<code>Rc</code>&#x3001;<code>Arc</code> &#x548C; <code>RefCell</code> &#x7B49;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF0C;<code>arena</code> &#x7684;&#x4F18;&#x52BF;&#x5728;&#x4E8E;&#x5B83;&#x53EF;&#x4EE5;&#x96C6;&#x4E2D;&#x7BA1;&#x7406;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x5B58;&#xFF0C;&#x4ECE;&#x800C;&#x907F;&#x514D;&#x9891;&#x7E41;&#x7684;&#x5206;&#x914D;&#x4E0E;&#x91CA;&#x653E;&#x64CD;&#x4F5C;&#x3002;</p>
<h3 id="&#x4EC0;&#x4E48;&#x662F; Arena&#xFF1F;"><a href="#&#x4EC0;&#x4E48;&#x662F; Arena&#xFF1F;"></a>&#x4EC0;&#x4E48;&#x662F; Arena&#xFF1F;</h3>
<p><code>Arena</code>&#xFF08;&#x5185;&#x5B58;&#x6C60;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x5206;&#x914D;&#x5668;&#xFF0C;&#x901A;&#x8FC7;&#x5728;&#x4E00;&#x5757;&#x8FDE;&#x7EED;&#x7684;&#x5185;&#x5B58;&#x533A;&#x57DF;&#x4E2D;&#x5206;&#x914D;&#x591A;&#x4E2A;&#x5BF9;&#x8C61;&#x6765;&#x63D0;&#x5347;&#x6027;&#x80FD;&#x3002;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0E; <code>arena</code> &#x672C;&#x8EAB;&#x7ED1;&#x5B9A;&#x3002;&#x5F53;&#x91CA;&#x653E; <code>arena</code> &#x65F6;&#xFF0C;&#x6240;&#x6709;&#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#x4F1A;&#x7EDF;&#x4E00;&#x91CA;&#x653E;&#xFF0C;&#x65E0;&#x9700;&#x9010;&#x4E00;&#x9500;&#x6BC1;&#x3002;</p>
<p>Rust &#x7684;&#x4E00;&#x4E9B;&#x5E93;&#xFF08;&#x5982; <a href="https://crates.io/crates/typed-arena"><code>typed-arena</code></a>&#x3001;<a href="https://crates.io/crates/bumpalo"><code>bumpalo</code></a>&#xFF09;&#x63D0;&#x4F9B;&#x4E86; <code>arena</code> &#x7684;&#x5B9E;&#x73B0;&#x3002;</p>
<hr>
<h3 id="Arena &#x66F4;&#x4F18;&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;"><a href="#Arena &#x66F4;&#x4F18;&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;"></a>Arena &#x66F4;&#x4F18;&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;</h3>
<h4 id="1. &#x9012;&#x5F52;&#x6570;&#x636E;&#x7ED3;&#x6784;"><a href="#1. &#x9012;&#x5F52;&#x6570;&#x636E;&#x7ED3;&#x6784;"></a>1. <strong>&#x9012;&#x5F52;&#x6570;&#x636E;&#x7ED3;&#x6784;</strong></h4>
<p><code>arena</code> &#x7279;&#x522B;&#x9002;&#x5408;&#x6784;&#x5EFA;&#x590D;&#x6742;&#x7684;&#x9012;&#x5F52;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;&#x5982;&#x6811;&#x3001;&#x56FE;&#x7B49;&#xFF09;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x80FD;&#x6709;&#x6548;&#x907F;&#x514D;&#x590D;&#x6742;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x7BA1;&#x7406;&#x3002;</p>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;&#x8BED;&#x6CD5;&#x6811;&#x89E3;&#x6790;&#x5668;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> typed_arena::Arena;

<span class="hljs-meta">#[derive(Debug)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Node</span></span>&lt;<span class="hljs-symbol">&apos;a</span>&gt; {
    value: <span class="hljs-built_in">i32</span>,
    children: <span class="hljs-built_in">Vec</span>&lt;&amp;<span class="hljs-symbol">&apos;a</span> Node&lt;<span class="hljs-symbol">&apos;a</span>&gt;&gt;,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> arena = Arena::new();

    <span class="hljs-comment">// &#x521B;&#x5EFA;&#x8282;&#x70B9;</span>
    <span class="hljs-keyword">let</span> root = arena.alloc(Node {
        value: <span class="hljs-number">1</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    });

    <span class="hljs-keyword">let</span> child1 = arena.alloc(Node {
        value: <span class="hljs-number">2</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    });

    <span class="hljs-keyword">let</span> child2 = arena.alloc(Node {
        value: <span class="hljs-number">3</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    });

    <span class="hljs-comment">// &#x6784;&#x5EFA;&#x6811;</span>
    root.children.push(child1);
    root.children.push(child2);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, root);
}
</code></pre>
<p><strong>&#x4F18;&#x52BF;</strong>&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x9700;&#x8981;&#x663E;&#x5F0F;&#x7BA1;&#x7406;&#x8282;&#x70B9;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#x90FD;&#x975E;&#x5E38;&#x9AD8;&#x6548;&#x3002;</li>
</ul>
<hr>
<h4 id="2. &#x77ED;&#x751F;&#x547D;&#x5468;&#x671F;&#x7684;&#x9AD8;&#x6027;&#x80FD;&#x6279;&#x91CF;&#x5206;&#x914D;"><a href="#2. &#x77ED;&#x751F;&#x547D;&#x5468;&#x671F;&#x7684;&#x9AD8;&#x6027;&#x80FD;&#x6279;&#x91CF;&#x5206;&#x914D;"></a>2. <strong>&#x77ED;&#x751F;&#x547D;&#x5468;&#x671F;&#x7684;&#x9AD8;&#x6027;&#x80FD;&#x6279;&#x91CF;&#x5206;&#x914D;</strong></h4>
<p>&#x5F53;&#x7A0B;&#x5E8F;&#x9700;&#x8981;&#x9891;&#x7E41;&#x521B;&#x5EFA;&#x5E76;&#x9500;&#x6BC1;&#x5BF9;&#x8C61;&#xFF0C;&#x4E14;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x8F83;&#x77ED;&#x65F6;&#xFF0C;<code>arena</code> &#x53EF;&#x4EE5;&#x907F;&#x514D;&#x9891;&#x7E41;&#x8C03;&#x7528;&#x7CFB;&#x7EDF;&#x5185;&#x5B58;&#x5206;&#x914D;&#x5668;&#xFF0C;&#x63D0;&#x9AD8;&#x6027;&#x80FD;&#x3002;</p>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;&#x6279;&#x91CF;&#x8BA1;&#x7B97;&#x4E34;&#x65F6;&#x5BF9;&#x8C61;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> bumpalo::Bump;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> arena = Bump::new();

    <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-number">0</span>..<span class="hljs-number">10</span> {
        <span class="hljs-keyword">let</span> temp_vec = arena.alloc_vec([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]);
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, temp_vec);
    }
    <span class="hljs-comment">// &#x6240;&#x6709;&#x4E34;&#x65F6;&#x5BF9;&#x8C61;&#x4F1A;&#x5728; arena &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x7ED3;&#x675F;&#x65F6;&#x81EA;&#x52A8;&#x91CA;&#x653E;</span>
}
</code></pre>
<p><strong>&#x4F18;&#x52BF;</strong>&#xFF1A;</p>
<ul>
<li>&#x5206;&#x914D;&#x6027;&#x80FD;&#x4F18;&#x4E8E;&#x5806;&#x5206;&#x914D;&#xFF08;&#x5982; <code>Box</code>&#xFF09;&#x3002;</li>
<li>&#x5BF9;&#x8C61;&#x9500;&#x6BC1;&#x96C6;&#x4E2D;&#x5728; <code>arena</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x7ED3;&#x675F;&#x65F6;&#xFF0C;&#x51CF;&#x5C11;&#x4E86;&#x5355;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6790;&#x6784;&#x5F00;&#x9500;&#x3002;</li>
</ul>
<hr>
<h4 id="3. &#x591A;&#x5BF9;&#x8C61;&#x5171;&#x4EAB;&#x7BA1;&#x7406;&#xFF0C;&#x66FF;&#x4EE3; Rc/Arc"><a href="#3. &#x591A;&#x5BF9;&#x8C61;&#x5171;&#x4EAB;&#x7BA1;&#x7406;&#xFF0C;&#x66FF;&#x4EE3; Rc/Arc"></a>3. <strong>&#x591A;&#x5BF9;&#x8C61;&#x5171;&#x4EAB;&#x7BA1;&#x7406;&#xFF0C;&#x66FF;&#x4EE3; <code>Rc</code>/<code>Arc</code></strong></h4>
<p>&#x5F53;&#x591A;&#x4E2A;&#x5BF9;&#x8C61;&#x9700;&#x8981;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x6279;&#x6570;&#x636E;&#x65F6;&#xFF0C;&#x4F7F;&#x7528; <code>arena</code> &#x53EF;&#x4EE5;&#x907F;&#x514D; <code>Rc</code> &#x6216; <code>Arc</code> &#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x5F00;&#x9500;&#x3002;</p>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x7ED3;&#x6784;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> typed_arena::Arena;

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">GraphNode</span></span>&lt;<span class="hljs-symbol">&apos;a</span>&gt; {
    value: <span class="hljs-built_in">i32</span>,
    neighbors: <span class="hljs-built_in">Vec</span>&lt;&amp;<span class="hljs-symbol">&apos;a</span> GraphNode&lt;<span class="hljs-symbol">&apos;a</span>&gt;&gt;,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> arena = Arena::new();

    <span class="hljs-keyword">let</span> node1 = arena.alloc(GraphNode {
        value: <span class="hljs-number">1</span>,
        neighbors: <span class="hljs-built_in">vec!</span>[],
    });

    <span class="hljs-keyword">let</span> node2 = arena.alloc(GraphNode {
        value: <span class="hljs-number">2</span>,
        neighbors: <span class="hljs-built_in">vec!</span>[node1],
    });

    node1.neighbors.push(node2); <span class="hljs-comment">// &#x6784;&#x6210;&#x53CC;&#x5411;&#x56FE;</span>

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Node1 value: {}&quot;</span>, node1.value);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Node2 value: {}&quot;</span>, node2.value);
}
</code></pre>
<p><strong>&#x4F18;&#x52BF;</strong>&#xFF1A;</p>
<ul>
<li>&#x7EDF;&#x4E00;&#x7BA1;&#x7406;&#x8282;&#x70B9;&#x7684;&#x5185;&#x5B58;&#xFF0C;&#x907F;&#x514D;&#x5FAA;&#x73AF;&#x5F15;&#x7528;&#x3002;</li>
<li>&#x4E0D;&#x9700;&#x8981;&#x624B;&#x52A8;&#x6E05;&#x7406;&#xFF0C;&#x751F;&#x547D;&#x5468;&#x671F;&#x7B80;&#x5355;&#x3002;</li>
</ul>
<hr>
<h4 id="4. &#x9700;&#x8981;&#x5FEB;&#x901F;&#x5206;&#x914D;&#x548C;&#x6E05;&#x7406;&#x7684;&#x5927;&#x91CF;&#x5C0F;&#x5BF9;&#x8C61;"><a href="#4. &#x9700;&#x8981;&#x5FEB;&#x901F;&#x5206;&#x914D;&#x548C;&#x6E05;&#x7406;&#x7684;&#x5927;&#x91CF;&#x5C0F;&#x5BF9;&#x8C61;"></a>4. <strong>&#x9700;&#x8981;&#x5FEB;&#x901F;&#x5206;&#x914D;&#x548C;&#x6E05;&#x7406;&#x7684;&#x5927;&#x91CF;&#x5C0F;&#x5BF9;&#x8C61;</strong></h4>
<p>&#x5BF9;&#x4E8E;&#x6E38;&#x620F;&#x5F00;&#x53D1;&#x6216;&#x5176;&#x4ED6;&#x9700;&#x8981;&#x9891;&#x7E41;&#x66F4;&#x65B0;&#x5927;&#x91CF;&#x5C0F;&#x5BF9;&#x8C61;&#x7684;&#x573A;&#x666F;&#xFF08;&#x5982;&#x7C92;&#x5B50;&#x7CFB;&#x7EDF;&#x3001;&#x5B9E;&#x4F53;&#x7BA1;&#x7406;&#xFF09;&#xFF0C;<code>arena</code> &#x53EF;&#x4EE5;&#x663E;&#x8457;&#x63D0;&#x5347;&#x5206;&#x914D;&#x548C;&#x6E05;&#x7406;&#x6027;&#x80FD;&#x3002;</p>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;&#x7C92;&#x5B50;&#x7CFB;&#x7EDF;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> bumpalo::Bump;

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Particle</span></span> {
    x: <span class="hljs-built_in">f32</span>,
    y: <span class="hljs-built_in">f32</span>,
    velocity: <span class="hljs-built_in">f32</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">simulate_particles</span></span>() {
    <span class="hljs-keyword">let</span> arena = Bump::new();

    <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-number">0</span>..<span class="hljs-number">1000</span> {
        <span class="hljs-keyword">let</span> _particle = arena.alloc(Particle {
            x: <span class="hljs-number">0.0</span>,
            y: <span class="hljs-number">0.0</span>,
            velocity: <span class="hljs-number">1.0</span>,
        });
    }
    <span class="hljs-comment">// &#x7C92;&#x5B50;&#x5728;&#x6B64;&#x6279;&#x6B21;&#x7ED3;&#x675F;&#x65F6;&#x7EDF;&#x4E00;&#x91CA;&#x653E;</span>
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    simulate_particles();
}
</code></pre>
<p><strong>&#x4F18;&#x52BF;</strong>&#xFF1A;</p>
<ul>
<li>&#x907F;&#x514D;&#x4E86;&#x9891;&#x7E41;&#x7684;&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5728;&#x5E27;&#x66F4;&#x65B0;&#x9891;&#x7E41;&#x7684;&#x573A;&#x666F;&#x4E2D;&#x3002;</li>
<li>&#x66F4;&#x9AD8;&#x7684;&#x7F13;&#x5B58;&#x547D;&#x4E2D;&#x7387;&#x3002;</li>
</ul>
<h2 id="&#x667A;&#x80FD;&#x6307;&#x9488; vs arena"><a href="#&#x667A;&#x80FD;&#x6307;&#x9488; vs arena"></a>&#x667A;&#x80FD;&#x6307;&#x9488; vs arena</h2>
<p>&#x867D;&#x7136; <code>arena</code> &#x786E;&#x5B9E;&#x5728;&#x67D0;&#x4E9B;&#x573A;&#x666F;&#x4E0B;&#x5177;&#x6709;&#x663E;&#x8457;&#x4F18;&#x52BF;&#xFF0C;&#x4F46;&#x5B83;&#x5E76;&#x4E0D;&#x662F;&#x4E07;&#x80FD;&#x7684;&#x5DE5;&#x5177;&#xFF0C;&#x4E5F;&#x4E0D;&#x9002;&#x5408;&#x6240;&#x6709;&#x573A;&#x666F;&#x3002;&#x4F7F;&#x7528; <code>arena</code> &#x9700;&#x8981;&#x6743;&#x8861;&#x4EE5;&#x4E0B;&#x51E0;&#x4E2A;&#x5173;&#x952E;&#x70B9;&#xFF1A;</p>
<hr>
<h3 id="1. &#x751F;&#x547D;&#x5468;&#x671F;&#x7ED1;&#x5B9A;&#x7684;&#x9650;&#x5236;"><a href="#1. &#x751F;&#x547D;&#x5468;&#x671F;&#x7ED1;&#x5B9A;&#x7684;&#x9650;&#x5236;"></a>1. <strong>&#x751F;&#x547D;&#x5468;&#x671F;&#x7ED1;&#x5B9A;&#x7684;&#x9650;&#x5236;</strong></h3>
<p><code>arena</code> &#x7684;&#x6838;&#x5FC3;&#x7406;&#x5FF5;&#x662F;&#x5C06;&#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#x751F;&#x547D;&#x5468;&#x671F;&#x7ED1;&#x5B9A;&#x5230; <code>arena</code> &#x81EA;&#x8EAB;&#x3002;&#x8FD9;&#x5E26;&#x6765;&#x4E86;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li><strong>&#x65E0;&#x6CD5;&#x7075;&#x6D3B;&#x63A7;&#x5236;&#x5BF9;&#x8C61;&#x7684;&#x91CA;&#x653E;&#x65F6;&#x95F4;</strong>&#xFF1A;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x5B58;&#x53EA;&#x80FD;&#x5728;&#x6574;&#x4E2A; <code>arena</code> &#x88AB;&#x9500;&#x6BC1;&#x65F6;&#x7EDF;&#x4E00;&#x91CA;&#x653E;&#xFF0C;&#x65E0;&#x6CD5;&#x63D0;&#x524D;&#x91CA;&#x653E;&#x5355;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;&#x5982;&#x679C;&#x4F60;&#x7684;&#x573A;&#x666F;&#x9700;&#x8981;&#x7CBE;&#x7EC6;&#x63A7;&#x5236;&#x5BF9;&#x8C61;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF08;&#x6BD4;&#x5982;&#x6309;&#x9700;&#x91CA;&#x653E;&#x67D0;&#x4E9B;&#x8D44;&#x6E90;&#xFF09;&#xFF0C;<code>arena</code> &#x5C31;&#x4E0D;&#x5408;&#x9002;&#x3002;</li>
<li><strong>&#x5BB9;&#x6613;&#x9020;&#x6210;&#x5185;&#x5B58;&#x6D6A;&#x8D39;</strong>&#xFF1A;&#x5982;&#x679C; <code>arena</code> &#x5B58;&#x5728;&#x4E00;&#x4E9B;&#x5BF9;&#x8C61;&#x957F;&#x65F6;&#x95F4;&#x4E0D;&#x88AB;&#x4F7F;&#x7528;&#xFF0C;&#x800C; <code>arena</code> &#x672C;&#x8EAB;&#x53C8;&#x4E0D;&#x80FD;&#x9500;&#x6BC1;&#xFF0C;&#x8FD9;&#x4E9B;&#x5BF9;&#x8C61;&#x5360;&#x7528;&#x7684;&#x5185;&#x5B58;&#x4F1A;&#x88AB;&#x6D6A;&#x8D39;&#x3002;</li>
</ul>
<hr>
<h3 id="2. &#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x79FB;&#x52A8;"><a href="#2. &#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x79FB;&#x52A8;"></a>2. <strong>&#x5BF9;&#x8C61;&#x4E0D;&#x53EF;&#x79FB;&#x52A8;</strong></h3>
<p><code>arena</code> &#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#x901A;&#x5E38;&#x662F;&#x4E0D;&#x53EF;&#x79FB;&#x52A8;&#x7684;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x5B58;&#x50A8;&#x5728; <code>arena</code> &#x7684;&#x5185;&#x5B58;&#x5757;&#x4E2D;&#x3002;&#x8FD9;&#x6837;&#x4F1A;&#x5BFC;&#x81F4;&#x4EE5;&#x4E0B;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x4E00;&#x4E9B;&#x9700;&#x8981;&#x6240;&#x6709;&#x6743;&#x79FB;&#x52A8;&#x7684;&#x7279;&#x6027;&#xFF08;&#x4F8B;&#x5982;&#x5BF9;&#x8C61;&#x653E;&#x5165; <code>Vec</code> &#x6216;&#x5176;&#x4ED6;&#x5BB9;&#x5668;&#x4E2D;&#xFF09;&#x3002;</li>
<li>&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x5F15;&#x7528;&#x6765;&#x8BBF;&#x95EE; <code>arena</code> &#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x751F;&#x547D;&#x5468;&#x671F;&#x7BA1;&#x7406;&#x53D8;&#x5F97;&#x590D;&#x6742;&#x3002;</li>
</ul>
<hr>
<h3 id="3. &#x4E0D;&#x9002;&#x5408;&#x9700;&#x8981;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x573A;&#x666F;"><a href="#3. &#x4E0D;&#x9002;&#x5408;&#x9700;&#x8981;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x573A;&#x666F;"></a>3. <strong>&#x4E0D;&#x9002;&#x5408;&#x9700;&#x8981;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x573A;&#x666F;</strong></h3>
<p>&#x5927;&#x591A;&#x6570; <code>arena</code> &#x5B9E;&#x73B0;&#xFF08;&#x5982; <code>typed-arena</code>&#xFF09;&#x5E76;&#x4E0D;&#x662F;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#xFF0C;&#x5982;&#x679C;&#x9700;&#x8981;&#x8DE8;&#x7EBF;&#x7A0B;&#x5171;&#x4EAB;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD8;&#x9700;&#x8981;&#x989D;&#x5916;&#x7684;&#x540C;&#x6B65;&#x673A;&#x5236;&#x3002;&#x8FD9;&#x65F6;&#xFF0C;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF08;&#x5982; <code>Arc</code>&#xFF09;&#x4F1A;&#x66F4;&#x5408;&#x9002;&#x3002;</p>
<p><strong>&#x4F8B;&#x5916;</strong>&#xFF1A;<code>bumpalo</code> &#x652F;&#x6301;&#x8DE8;&#x7EBF;&#x7A0B;&#xFF0C;&#x4F46;&#x9700;&#x8981;&#x7279;&#x522B;&#x5C0F;&#x5FC3;&#x4F7F;&#x7528;&#x3002;</p>
<hr>
<h3 id="4. &#x5185;&#x5B58;&#x4F7F;&#x7528;&#x7684;&#x4E0D;&#x53EF;&#x9884;&#x6D4B;&#x6027;"><a href="#4. &#x5185;&#x5B58;&#x4F7F;&#x7528;&#x7684;&#x4E0D;&#x53EF;&#x9884;&#x6D4B;&#x6027;"></a>4. <strong>&#x5185;&#x5B58;&#x4F7F;&#x7528;&#x7684;&#x4E0D;&#x53EF;&#x9884;&#x6D4B;&#x6027;</strong></h3>
<p>&#x7531;&#x4E8E; <code>arena</code> &#x4F7F;&#x7528;&#x5185;&#x5B58;&#x6C60;&#x8FDB;&#x884C;&#x5206;&#x914D;&#xFF0C;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x4F1A;&#x4E00;&#x76F4;&#x5360;&#x7528;&#x5185;&#x5B58;&#x76F4;&#x5230; <code>arena</code> &#x91CA;&#x653E;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x5360;&#x7528;&#x7684;&#x5CF0;&#x503C;&#x6BD4;&#x667A;&#x80FD;&#x6307;&#x9488;&#x9AD8;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5206;&#x914D;&#x4E86;&#x5F88;&#x591A;&#x4E34;&#x65F6;&#x5BF9;&#x8C61;&#x4F46;&#x672A;&#x53CA;&#x65F6;&#x9500;&#x6BC1; <code>arena</code> &#x65F6;&#x3002;</p>
<hr>
<h3 id="5. &#x7F3A;&#x4E4F;&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x6240;&#x6709;&#x6743;&#x7BA1;&#x7406;"><a href="#5. &#x7F3A;&#x4E4F;&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x6240;&#x6709;&#x6743;&#x7BA1;&#x7406;"></a>5. <strong>&#x7F3A;&#x4E4F;&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x6240;&#x6709;&#x6743;&#x7BA1;&#x7406;</strong></h3>
<p><code>arena</code> &#x7684;&#x5BF9;&#x8C61;&#x4E0D;&#x5177;&#x6709; Rust &#x6240;&#x5F3A;&#x8C03;&#x7684;&#x6240;&#x6709;&#x6743;&#x8BED;&#x4E49;&#xFF08;&#x6BD4;&#x5982; <code>ownership</code> &#x548C; <code>borrow checker</code>&#xFF09;&#xFF0C;&#x8FD9;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x4EE5;&#x4E0B;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li><strong>&#x5B89;&#x5168;&#x6027;&#x964D;&#x4F4E;</strong>&#xFF1A;&#x5982;&#x679C;&#x7A0B;&#x5E8F;&#x903B;&#x8F91;&#x590D;&#x6742;&#xFF0C;&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x903B;&#x8F91;&#x9519;&#x8BEF;&#xFF08;&#x4F8B;&#x5982;&#x60AC;&#x7A7A;&#x5F15;&#x7528;&#xFF09;&#x3002;</li>
<li><strong>&#x501F;&#x7528;&#x89C4;&#x5219;&#x53D8;&#x5F97;&#x6A21;&#x7CCA;</strong>&#xFF1A;&#x4F60;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x624B;&#x52A8;&#x786E;&#x4FDD;&#x5F15;&#x7528;&#x7684;&#x6B63;&#x786E;&#x6027;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F9D;&#x8D56;&#x7F16;&#x8BD1;&#x5668;&#x81EA;&#x52A8;&#x68C0;&#x67E5;&#x3002;</li>
</ul>
<hr>
<h3 id="6. &#x6027;&#x80FD;&#x4F18;&#x5316;&#x662F;&#x5426;&#x771F;&#x7684;&#x5FC5;&#x8981;"><a href="#6. &#x6027;&#x80FD;&#x4F18;&#x5316;&#x662F;&#x5426;&#x771F;&#x7684;&#x5FC5;&#x8981;"></a>6. <strong>&#x6027;&#x80FD;&#x4F18;&#x5316;&#x662F;&#x5426;&#x771F;&#x7684;&#x5FC5;&#x8981;</strong></h3>
<p>&#x867D;&#x7136; <code>arena</code> &#x6027;&#x80FD;&#x975E;&#x5E38;&#x9AD8;&#xFF0C;&#x4F46;&#x5B83;&#x7684;&#x4F18;&#x52BF;&#x53EA;&#x6709;&#x5728;&#x4EE5;&#x4E0B;&#x573A;&#x666F;&#x4E0B;&#x624D;&#x4F1A;&#x663E;&#x73B0;&#xFF1A;</p>
<ul>
<li>&#x5927;&#x91CF;&#x7684;&#x9891;&#x7E41;&#x5BF9;&#x8C61;&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#x3002;</li>
<li>&#x5BF9;&#x8C61;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x9AD8;&#x5EA6;&#x7EDF;&#x4E00;&#x3002;</li>
</ul>
<p>&#x5BF9;&#x4E8E;&#x666E;&#x901A;&#x7684;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF08;&#x5982; CRUD &#x5E94;&#x7528;&#xFF09;&#xFF0C;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF08;&#x5982; <code>Box</code>&#x3001;<code>Rc</code>&#x3001;<code>Arc</code>&#xFF09;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x76F4;&#x89C2;&#x7684;&#x4EE3;&#x7801;&#x8BED;&#x4E49;&#x548C;&#x66F4;&#x5B89;&#x5168;&#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x65B9;&#x5F0F;&#x3002;</p>
<hr>
<h3 id="&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9009;&#x62E9;&#x667A;&#x80FD;&#x6307;&#x9488;&#x800C;&#x4E0D;&#x662F; Arena&#xFF1F;"><a href="#&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9009;&#x62E9;&#x667A;&#x80FD;&#x6307;&#x9488;&#x800C;&#x4E0D;&#x662F; Arena&#xFF1F;"></a><strong>&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9009;&#x62E9;&#x667A;&#x80FD;&#x6307;&#x9488;&#x800C;&#x4E0D;&#x662F; Arena&#xFF1F;</strong></h3>
<table>
<thead>
<tr>
<th>&#x573A;&#x666F;</th>
<th>&#x4F7F;&#x7528;&#x667A;&#x80FD;&#x6307;&#x9488;</th>
<th>&#x4F7F;&#x7528; Arena</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>&#x590D;&#x6742;&#x751F;&#x547D;&#x5468;&#x671F;&#x7BA1;&#x7406;</strong></td>
<td>&#x2705; &#x53EF;&#x4EE5;&#x7528; <code>Box</code> &#x6216; <code>Rc</code></td>
<td>&#x274C; &#x751F;&#x547D;&#x5468;&#x671F;&#x8FC7;&#x4E8E;&#x7EDF;&#x4E00;&#x53EF;&#x80FD;&#x4E0D;&#x9002;&#x7528;</td>
</tr>
<tr>
<td><strong>&#x6309;&#x9700;&#x91CA;&#x653E;&#x5BF9;&#x8C61;</strong></td>
<td>&#x2705; &#x53EF;&#x4EE5;&#x91CA;&#x653E;&#x5355;&#x4E2A;&#x5BF9;&#x8C61;</td>
<td>&#x274C; &#x53EA;&#x80FD;&#x7EDF;&#x4E00;&#x91CA;&#x653E;&#x6240;&#x6709;&#x5BF9;&#x8C61;</td>
</tr>
<tr>
<td><strong>&#x591A;&#x7EBF;&#x7A0B;&#x73AF;&#x5883;</strong></td>
<td>&#x2705; &#x7528; <code>Arc</code></td>
<td>&#x274C; &#x591A;&#x6570; Arena &#x4E0D;&#x652F;&#x6301;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;</td>
</tr>
<tr>
<td><strong>&#x9AD8;&#x5185;&#x5B58;&#x5229;&#x7528;&#x7387;&#xFF08;&#x907F;&#x514D;&#x6D6A;&#x8D39;&#xFF09;</strong></td>
<td>&#x2705; &#x66F4;&#x7EC6;&#x7C92;&#x5EA6;&#x91CA;&#x653E;&#x5185;&#x5B58;</td>
<td>&#x274C; &#x957F;&#x671F;&#x8FD0;&#x884C;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x6D6A;&#x8D39;</td>
</tr>
<tr>
<td><strong>&#x8F7B;&#x91CF;&#x7EA7;&#x5206;&#x914D;&#x548C;&#x9AD8;&#x6027;&#x80FD;&#x9700;&#x6C42;</strong></td>
<td>&#x274C; &#x9891;&#x7E41;&#x5206;&#x914D;&#x91CA;&#x653E;&#x4F1A;&#x589E;&#x52A0;&#x5F00;&#x9500;</td>
<td>&#x2705; <code>arena</code> &#x9AD8;&#x6548;&#x5206;&#x914D;&#x4E0E;&#x91CA;&#x653E;</td>
</tr>
<tr>
<td><strong>&#x9012;&#x5F52;&#x7ED3;&#x6784;&#x6216;&#x5927;&#x91CF;&#x5C0F;&#x5BF9;&#x8C61;</strong></td>
<td>&#x274C; &#x667A;&#x80FD;&#x6307;&#x9488;&#x7BA1;&#x7406;&#x8F83;&#x4E3A;&#x590D;&#x6742;</td>
<td>&#x2705; <code>arena</code> &#x7B80;&#x5316;&#x751F;&#x547D;&#x5468;&#x671F;&#x548C;&#x7BA1;&#x7406;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p><code>arena</code> &#x662F;&#x4E00;&#x4E2A;&#x5F3A;&#x5927;&#x7684;&#x5DE5;&#x5177;&#xFF0C;&#x4F46;&#x5B83;&#x7684;&#x4F7F;&#x7528;&#x573A;&#x666F;&#x975E;&#x5E38;&#x660E;&#x786E;&#xFF1A;</p>
<ul>
<li><strong>&#x9AD8;&#x6027;&#x80FD;&#x9700;&#x6C42;</strong>&#xFF1A;&#x5927;&#x91CF;&#x5BF9;&#x8C61;&#x7684;&#x5FEB;&#x901F;&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#x3002;</li>
<li><strong>&#x751F;&#x547D;&#x5468;&#x671F;&#x7EDF;&#x4E00;</strong>&#xFF1A;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x53EF;&#x4EE5;&#x548C; <code>arena</code> &#x7ED1;&#x5B9A;&#x3002;</li>
<li><strong>&#x590D;&#x6742;&#x9012;&#x5F52;&#x7ED3;&#x6784;</strong>&#xFF1A;&#x4F8B;&#x5982;&#x8BED;&#x6CD5;&#x6811;&#x3001;&#x56FE;&#x7B49;&#x9700;&#x8981;&#x9AD8;&#x6548;&#x7BA1;&#x7406;&#x7684;&#x7ED3;&#x6784;&#x3002;</li>
</ul>
<p>&#x5728;&#x5927;&#x591A;&#x6570;&#x5E38;&#x89C1;&#x573A;&#x666F;&#x4E2D;&#xFF08;&#x5982; Web &#x5E94;&#x7528;&#x3001;&#x540E;&#x7AEF;&#x670D;&#x52A1;&#x7B49;&#xFF09;&#xFF0C;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF08;<code>Box</code>&#x3001;<code>Rc</code>&#x3001;<code>Arc</code> &#x7B49;&#xFF09;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x5B89;&#x5168;&#x3001;&#x66F4;&#x7075;&#x6D3B;&#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x65B9;&#x6848;&#x3002;&#x9009;&#x62E9;&#x662F;&#x5426;&#x4F7F;&#x7528; <code>arena</code> &#x65F6;&#xFF0C;&#x5E94;&#x8BE5;&#x57FA;&#x4E8E;&#x4F60;&#x7684;&#x5E94;&#x7528;&#x9700;&#x6C42;&#x3001;&#x751F;&#x547D;&#x5468;&#x671F;&#x590D;&#x6742;&#x6027;&#x4EE5;&#x53CA;&#x6027;&#x80FD;&#x74F6;&#x9888;&#x6765;&#x51B3;&#x5B9A;&#x3002;</p>
<p><strong>&#x7ED3;&#x8BBA;</strong>&#xFF1A;<strong>&#x4E0D;&#x8981;&#x8FC7;&#x5EA6;&#x4F18;&#x5316;&#xFF0C;&#x9664;&#x975E;&#x786E;&#x5B9E;&#x9700;&#x8981;&#x3002;</strong> &#x5982;&#x679C;&#x4F60;&#x7684;&#x5E94;&#x7528;&#x6027;&#x80FD;&#x74F6;&#x9888;&#x660E;&#x786E;&#x5728;&#x5185;&#x5B58;&#x5206;&#x914D;&#x4E0A;&#xFF0C;&#x4E14;&#x751F;&#x547D;&#x5468;&#x671F;&#x7EDF;&#x4E00;&#xFF0C;<code>arena</code> &#x624D;&#x662F;&#x6700;&#x4F73;&#x9009;&#x62E9;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x667A;&#x80FD;&#x6307;&#x9488;&#x66F4;&#x7B26;&#x5408; Rust &#x7684;&#x6240;&#x6709;&#x6743;&#x548C;&#x5B89;&#x5168;&#x6027;&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;&#x3002;</p>
<h2 id="Arena &#x7684;&#x539F;&#x7406;&#x7B80;&#x5355;&#x5B9E;&#x73B0;"><a href="#Arena &#x7684;&#x539F;&#x7406;&#x7B80;&#x5355;&#x5B9E;&#x73B0;"></a>Arena &#x7684;&#x539F;&#x7406;&#x7B80;&#x5355;&#x5B9E;&#x73B0;</h2>
<p><code>arena</code> &#x7684;&#x539F;&#x7406;&#x53EF;&#x4EE5;&#x7B80;&#x5355;&#x7406;&#x89E3;&#x4E3A;&#x4E00;&#x6B21;&#x6027;&#x5206;&#x914D;&#x4E00;&#x5927;&#x5757;&#x8FDE;&#x7EED;&#x7684;&#x5185;&#x5B58;&#xFF0C;&#x7136;&#x540E;&#x4ECE;&#x8FD9;&#x5757;&#x5185;&#x5B58;&#x4E2D;&#x9010;&#x6B65;&#x5212;&#x5206;&#x5C0F;&#x5757;&#x6765;&#x5206;&#x914D;&#x7ED9;&#x5BF9;&#x8C61;&#x3002;&#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#x4E0D;&#x4F1A;&#x5355;&#x72EC;&#x91CA;&#x653E;&#xFF0C;&#x800C;&#x662F;&#x7B49;&#x5230;&#x6574;&#x4E2A; <code>arena</code> &#x751F;&#x547D;&#x5468;&#x671F;&#x7ED3;&#x675F;&#x65F6;&#xFF0C;&#x7EDF;&#x4E00;&#x56DE;&#x6536;&#x6574;&#x5757;&#x5185;&#x5B58;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x51CF;&#x5C11;&#x4E86;&#x9891;&#x7E41;&#x8C03;&#x7528;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x5185;&#x5B58;&#x5206;&#x914D;&#x5668;&#x7684;&#x5F00;&#x9500;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x5347;&#x4E86;&#x6027;&#x80FD;&#x3002;</p>
<p>&#x4E0B;&#x9762;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#x624B;&#x52A8;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A; <code>arena</code> &#x7684;&#x7B80;&#x5316;&#x7248;&#x672C;&#x6765;&#x8BF4;&#x660E;&#x5176;&#x5DE5;&#x4F5C;&#x539F;&#x7406;&#xFF1A;</p>
<hr>
<h3 id="&#x624B;&#x52A8;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; arena"><a href="#&#x624B;&#x52A8;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; arena"></a>&#x624B;&#x52A8;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; <code>arena</code></h3>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Arena</span></span> {
    memory: <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">u8</span>&gt;,  <span class="hljs-comment">// &#x7528;&#x4E8E;&#x5B58;&#x50A8;&#x6240;&#x6709;&#x5206;&#x914D;&#x7684;&#x5185;&#x5B58;</span>
    offset: <span class="hljs-built_in">usize</span>,    <span class="hljs-comment">// &#x5F53;&#x524D;&#x5206;&#x914D;&#x7684;&#x504F;&#x79FB;&#x91CF;</span>
}

<span class="hljs-keyword">impl</span> Arena {
    <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684; Arena&#xFF0C;&#x9884;&#x5148;&#x5206;&#x914D;&#x4E00;&#x5757;&#x5185;&#x5B58;</span>
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">new</span></span>(size: <span class="hljs-built_in">usize</span>) -&gt; <span class="hljs-keyword">Self</span> {
        Arena {
            memory: <span class="hljs-built_in">vec!</span>[<span class="hljs-number">0</span>; size],
            offset: <span class="hljs-number">0</span>,
        }
    }

    <span class="hljs-comment">// &#x5728; Arena &#x4E2D;&#x5206;&#x914D;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5185;&#x5B58;&#x5757;</span>
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">allocate</span></span>&lt;T&gt;(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>, value: T) -&gt; &amp;<span class="hljs-keyword">mut</span> T {
        <span class="hljs-keyword">let</span> size = std::mem::size_of::&lt;T&gt;(); <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7C7B;&#x578B; T &#x7684;&#x5927;&#x5C0F;</span>
        <span class="hljs-keyword">let</span> align = std::mem::align_of::&lt;T&gt;(); <span class="hljs-comment">// &#x83B7;&#x53D6;&#x5BF9;&#x9F50;&#x8981;&#x6C42;</span>

        <span class="hljs-comment">/**
         * &#x786E;&#x4FDD;&#x504F;&#x79FB;&#x91CF;&#x6EE1;&#x8DB3;&#x5BF9;&#x9F50;&#x8981;&#x6C42;
         * self.offset + align - 1 &#x786E;&#x4FDD;&#x504F;&#x79FB;&#x91CF;&#x8DB3;&#x591F;&#x5927;&#xFF0C;&#x4EE5;&#x4FBF;&#x5728;&#x4E4B;&#x540E;&#x7684;&#x6B65;&#x9AA4;&#x4E2D;&#x5BF9;&#x9F50;&#x3002;
         * !(align - 1) &#x53D6;&#x53CD;&#x540E;&#xFF0C;&#x5F97;&#x5230; \`1111 1000\`&#xFF0C;&#x8FD9;&#x7528;&#x4E8E;&#x6E05;&#x9664;&#x4F4E;&#x4E8E; \`align\` &#x7684;&#x4F4D;&#x3002;
         * &#x6309;&#x4F4D;&#x4E0E;&#x64CD;&#x4F5C;&#xFF0C;&#x5C06;&#x504F;&#x79FB;&#x91CF;&#x8C03;&#x6574;&#x5230; \`align\` &#x7684;&#x4E0B;&#x4E00;&#x4E2A;&#x500D;&#x6570;&#x3002;
         */</span>
        <span class="hljs-keyword">let</span> align_offset = (<span class="hljs-keyword">self</span>.offset + align - <span class="hljs-number">1</span>) &amp; !(align - <span class="hljs-number">1</span>); 

        <span class="hljs-keyword">if</span> align_offset + size &gt; <span class="hljs-keyword">self</span>.memory.len() {
            <span class="hljs-built_in">panic!</span>(<span class="hljs-string">&quot;Arena out of memory!&quot;</span>); <span class="hljs-comment">// &#x5185;&#x5B58;&#x4E0D;&#x8DB3;</span>
        }

        <span class="hljs-keyword">let</span> ptr = <span class="hljs-keyword">self</span>.memory.as_mut_ptr().add(align_offset) <span class="hljs-keyword">as</span> *<span class="hljs-keyword">mut</span> T; <span class="hljs-comment">// &#x83B7;&#x53D6;&#x5185;&#x5B58;&#x5757;&#x6307;&#x9488;</span>
        <span class="hljs-keyword">unsafe</span> {
            ptr.write(value); <span class="hljs-comment">// &#x5C06;&#x503C;&#x5199;&#x5165;&#x5185;&#x5B58;</span>
        }

        <span class="hljs-keyword">self</span>.offset = align_offset + size; <span class="hljs-comment">// &#x66F4;&#x65B0;&#x504F;&#x79FB;&#x91CF;</span>
        <span class="hljs-keyword">unsafe</span> { &amp;<span class="hljs-keyword">mut</span> *ptr } <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x5206;&#x914D;&#x7684;&#x5185;&#x5B58;&#x5757;</span>
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> arena = Arena::new(<span class="hljs-number">1024</span>); <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5927;&#x5C0F;&#x4E3A; 1024 &#x5B57;&#x8282;&#x7684; Arena</span>

    <span class="hljs-comment">// &#x5728; Arena &#x4E2D;&#x5206;&#x914D;&#x5BF9;&#x8C61;</span>
    <span class="hljs-keyword">let</span> x = arena.allocate(<span class="hljs-number">42</span>);
    <span class="hljs-keyword">let</span> y = arena.allocate(<span class="hljs-number">3.14</span>);
    <span class="hljs-keyword">let</span> z = arena.allocate(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Hello, Arena!&quot;</span>));

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;x: {}&quot;</span>, *x);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;y: {}&quot;</span>, *y);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;z: {}&quot;</span>, z);
}
</code></pre>
<hr>
<h3 id="&#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x7684;&#x89E3;&#x6790;"><a href="#&#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x7684;&#x89E3;&#x6790;"></a>&#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x7684;&#x89E3;&#x6790;</h3>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316; <code>arena</code></strong>&#xFF1A;</p>
<ul>
<li><code>Arena::new(1024)</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5927;&#x5C0F;&#x4E3A; 1024 &#x5B57;&#x8282;&#x7684;&#x5185;&#x5B58;&#x6C60;&#xFF0C;&#x7528;&#x4E8E;&#x5B58;&#x50A8;&#x5206;&#x914D;&#x7684;&#x5BF9;&#x8C61;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5206;&#x914D;&#x5BF9;&#x8C61;</strong>&#xFF1A;</p>
<ul>
<li>&#x8C03;&#x7528; <code>allocate</code> &#x65B9;&#x6CD5;&#x65F6;&#xFF0C;<code>arena</code> &#x4F1A;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x6709;&#x8DB3;&#x591F;&#x7684;&#x5269;&#x4F59;&#x5185;&#x5B58;&#x3002;</li>
<li>&#x5B83;&#x5C06;&#x5BF9;&#x8C61;&#x5199;&#x5165;&#x5185;&#x5B58;&#x6C60;&#x4E2D;&#x7684;&#x4E0B;&#x4E00;&#x4E2A;&#x7A7A;&#x95F2;&#x4F4D;&#x7F6E;&#xFF0C;&#x540C;&#x65F6;&#x6EE1;&#x8DB3;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8BBF;&#x95EE;&#x5BF9;&#x8C61;</strong>&#xFF1A;</p>
<ul>
<li>&#x8FD4;&#x56DE;&#x7684;&#x6307;&#x9488;&#x662F;&#x5BF9;&#x8C61;&#x5728; <code>arena</code> &#x4E2D;&#x7684;&#x5730;&#x5740;&#xFF0C;&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x50CF;&#x666E;&#x901A;&#x5F15;&#x7528;&#x4E00;&#x6837;&#x8BBF;&#x95EE;&#x5B83;&#x4EEC;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x91CA;&#x653E;&#x5185;&#x5B58;</strong>&#xFF1A;</p>
<ul>
<li>&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x5B58;&#x4E0D;&#x4F1A;&#x5355;&#x72EC;&#x91CA;&#x653E;&#xFF0C;&#x53EA;&#x6709;&#x5728; <code>arena</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x7ED3;&#x675F;&#x65F6;&#xFF0C;&#x6574;&#x4E2A;&#x5185;&#x5B58;&#x6C60;&#x4F1A;&#x7EDF;&#x4E00;&#x91CA;&#x653E;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h3 id="&#x793A;&#x4F8B;&#x8F93;&#x51FA;"><a href="#&#x793A;&#x4F8B;&#x8F93;&#x51FA;"></a>&#x793A;&#x4F8B;&#x8F93;&#x51FA;</h3>
<pre><code class="language-text">x: 42
y: 3.14
z: Hello, Arena!
</code></pre>
<hr>
<h3 id="&#x539F;&#x7406;&#x603B;&#x7ED3;"><a href="#&#x539F;&#x7406;&#x603B;&#x7ED3;"></a>&#x539F;&#x7406;&#x603B;&#x7ED3;</h3>
<ul>
<li><strong>&#x5206;&#x914D;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x7EF4;&#x62A4;&#x4E00;&#x4E2A;&#x504F;&#x79FB;&#x91CF; (<code>offset</code>)&#xFF0C;&#x6BCF;&#x6B21;&#x4ECE;&#x5185;&#x5B58;&#x6C60;&#x4E2D;&#x5206;&#x914D;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5757;&#x3002;</li>
<li><strong>&#x5BF9;&#x9F50;</strong>&#xFF1A;&#x786E;&#x4FDD;&#x5206;&#x914D;&#x7684;&#x5185;&#x5B58;&#x5730;&#x5740;&#x7B26;&#x5408;&#x5BF9;&#x8C61;&#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;&#xFF08;<strong>&#x7F16;&#x8BD1;&#x5668;&#x4F1A;&#x786E;&#x4FDD;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x5927;&#x5C0F;&#x662F;&#x5B83;&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x7684;&#x500D;&#x6570;</strong>&#xFF09;</li>
<li><strong>&#x7EDF;&#x4E00;&#x91CA;&#x653E;</strong>&#xFF1A;<code>arena</code> &#x672C;&#x8EAB;&#x7684;&#x5185;&#x5B58;&#x7531; <code>Vec&lt;u8&gt;</code> &#x7BA1;&#x7406;&#xFF0C;&#x5F53; <code>arena</code> &#x88AB;&#x9500;&#x6BC1;&#x65F6;&#xFF0C;&#x6240;&#x6709;&#x5206;&#x914D;&#x7684;&#x5185;&#x5B58;&#x4F1A;&#x81EA;&#x52A8;&#x91CA;&#x653E;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x4E3A;&#x4EC0;&#x4E48; arena &#x9AD8;&#x6548;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48; arena &#x9AD8;&#x6548;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48; <code>arena</code> &#x9AD8;&#x6548;&#xFF1F;</h3>
<ul>
<li><strong>&#x51CF;&#x5C11;&#x5185;&#x5B58;&#x5206;&#x914D;&#x8C03;&#x7528;</strong>&#xFF1A;&#x4F20;&#x7EDF;&#x5206;&#x914D;&#x5668;&#x9700;&#x8981;&#x9891;&#x7E41;&#x8C03;&#x7528;&#x7CFB;&#x7EDF;&#x5206;&#x914D;&#x5185;&#x5B58;&#xFF0C;&#x800C; <code>arena</code> &#x53EA;&#x9700;&#x8981;&#x4E00;&#x6B21;&#x6027;&#x5206;&#x914D;&#x5927;&#x5757;&#x5185;&#x5B58;&#x3002;</li>
<li><strong>&#x5206;&#x914D;&#x901F;&#x5EA6;&#x5FEB;</strong>&#xFF1A;&#x5206;&#x914D;&#x5185;&#x5B58;&#x53EA;&#x9700;&#x7B80;&#x5355;&#x5730;&#x589E;&#x52A0;&#x504F;&#x79FB;&#x91CF;&#x3002;</li>
<li><strong>&#x91CA;&#x653E;&#x7B80;&#x5355;</strong>&#xFF1A;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x5B58;&#x65E0;&#x9700;&#x5355;&#x72EC;&#x56DE;&#x6536;&#xFF0C;&#x53EA;&#x9700;&#x91CA;&#x653E;&#x6574;&#x4E2A; <code>arena</code>&#x3002;</li>
</ul>
<hr>
<p>&#x8FD9;&#x4E2A;&#x7B80;&#x5355;&#x7684; <code>arena</code> &#x6F14;&#x793A;&#x4E86;&#x5176;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x3002;&#x5728;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x4E2D;&#xFF0C;&#x6BD4;&#x5982;&#x4F7F;&#x7528; <code>typed-arena</code> &#x6216; <code>bumpalo</code> &#x7B49;&#x5E93;&#xFF0C;&#x5185;&#x90E8;&#x5B9E;&#x73B0;&#x4F1A;&#x66F4;&#x590D;&#x6742;&#xFF0C;&#x5904;&#x7406;&#x5BF9;&#x9F50;&#x3001;&#x66F4;&#x9AD8;&#x6548;&#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x7B49;&#x95EE;&#x9898;&#xFF0C;&#x4F46;&#x57FA;&#x672C;&#x539F;&#x7406;&#x662F;&#x76F8;&#x4F3C;&#x7684;&#x3002;</p>
<h2 id="&#x5185;&#x5B58;&#x5BF9;&#x9F50;"><a href="#&#x5185;&#x5B58;&#x5BF9;&#x9F50;"></a>&#x5185;&#x5B58;&#x5BF9;&#x9F50;</h2>
<p><code>Aligned</code> &#x7ED3;&#x6784;&#x4F53;&#x5360;&#x7528; <strong>8 &#x5B57;&#x8282;</strong> &#x800C;&#x4E0D;&#x662F; <strong>7 &#x5B57;&#x8282;</strong>&#xFF0C;&#x662F;&#x56E0;&#x4E3A;<strong>&#x5185;&#x5B58;&#x5BF9;&#x9F50;&#x548C;&#x586B;&#x5145; (padding)</strong> &#x7684;&#x539F;&#x56E0;&#x3002;&#x8BA1;&#x7B97;&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x65F6;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x4F1A;&#x786E;&#x4FDD;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x5927;&#x5C0F;&#x662F;&#x5B83;&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x7684;&#x500D;&#x6570;&#x3002;(&#x6BCF;&#x79CD;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x5728;&#x5185;&#x5B58;&#x4E2D;&#x7684;&#x5730;&#x5740;&#x5FC5;&#x987B;&#x662F;&#x5176;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x7684;&#x500D;&#x6570;&#x3002;)</p>
<hr>
<h3 id="&#x56DE;&#x987E; Aligned &#x7684;&#x5B9A;&#x4E49;"><a href="#&#x56DE;&#x987E; Aligned &#x7684;&#x5B9A;&#x4E49;"></a>&#x56DE;&#x987E; <code>Aligned</code> &#x7684;&#x5B9A;&#x4E49;</h3>
<pre><code class="language-rust"><span class="hljs-meta">#[repr(C)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Aligned</span></span> {
    a: <span class="hljs-built_in">u32</span>, <span class="hljs-comment">// 4 &#x5B57;&#x8282;&#xFF0C;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x4E3A; 4</span>
    b: <span class="hljs-built_in">u16</span>, <span class="hljs-comment">// 2 &#x5B57;&#x8282;&#xFF0C;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x4E3A; 2</span>
    c: <span class="hljs-built_in">u8</span>,  <span class="hljs-comment">// 1 &#x5B57;&#x8282;&#xFF0C;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x4E3A; 1</span>
}
</code></pre>
<h4 id="&#x9010;&#x5B57;&#x6BB5;&#x5E03;&#x5C40;"><a href="#&#x9010;&#x5B57;&#x6BB5;&#x5E03;&#x5C40;"></a>&#x9010;&#x5B57;&#x6BB5;&#x5E03;&#x5C40;</h4>
<ul>
<li>
<p><strong><code>a: u32</code></strong></p>
<ul>
<li>&#x5360;&#x7528;&#x5730;&#x5740; <code>[0, 1, 2, 3]</code>&#x3002;</li>
<li>&#x8D77;&#x59CB;&#x5730;&#x5740;&#x662F; 0&#xFF0C;&#x7B26;&#x5408;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF08;4 &#x7684;&#x500D;&#x6570;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>
<p><strong><code>b: u16</code></strong></p>
<ul>
<li>&#x7D27;&#x63A5;&#x7740; <code>a</code>&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x8D77;&#x59CB;&#x5730;&#x5740;&#x662F; 4&#xFF0C;&#x4F46;&#x9700;&#x8981;&#x6EE1;&#x8DB3; <code>u16</code> &#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF08;2 &#x7684;&#x500D;&#x6570;&#xFF09;&#x3002;</li>
<li>&#x5730;&#x5740; <code>[4, 5]</code>&#xFF0C;&#x7B26;&#x5408;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;</li>
</ul>
</li>
<li>
<p><strong><code>c: u8</code></strong></p>
<ul>
<li>&#x7D27;&#x63A5;&#x7740; <code>b</code>&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x8D77;&#x59CB;&#x5730;&#x5740;&#x662F; 6&#x3002;</li>
<li>&#x5730;&#x5740; <code>[6]</code>&#xFF0C;&#x5BF9; <code>u8</code> &#x6CA1;&#x6709;&#x7279;&#x6B8A;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x586B;&#x5145; (padding)</strong>&#xFF1A;</p>
<ul>
<li>&#x7531;&#x4E8E; <code>Aligned</code> &#x7684;&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x662F; <code>4</code>&#xFF08;&#x7531; <code>u32</code> &#x51B3;&#x5B9A;&#xFF09;&#xFF0C;&#x6574;&#x4E2A;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x5927;&#x5C0F;&#x5FC5;&#x987B;&#x662F; <code>4</code> &#x7684;&#x500D;&#x6570;&#x3002;</li>
<li>&#x5F53;&#x524D;&#x7ED3;&#x6784;&#x4F53;&#x5360;&#x7528;&#x4E86; <code>[0, 1, 2, 3, 4, 5, 6]</code> &#x5171; 7 &#x5B57;&#x8282;&#x3002;</li>
<li>&#x4E3A;&#x4E86;&#x6EE1;&#x8DB3;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x4F1A;&#x5728;&#x672B;&#x5C3E;&#x586B;&#x5145; 1 &#x4E2A;&#x5B57;&#x8282;&#xFF0C;&#x4F7F;&#x603B;&#x5927;&#x5C0F;&#x8FBE;&#x5230; 8 &#x5B57;&#x8282;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x586B;&#x5145;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x586B;&#x5145;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x586B;&#x5145;&#xFF1F;</h3>
<p>&#x586B;&#x5145;&#x662F;&#x4E3A;&#x4E86;&#x8BA9;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x6BCF;&#x4E2A;&#x5B9E;&#x4F8B;&#x5728;&#x6570;&#x7EC4;&#x6216;&#x5185;&#x5B58;&#x4E2D;&#x90FD;&#x7B26;&#x5408;&#x5176;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;&#x5982;&#x679C;&#x4E0D;&#x586B;&#x5145;&#xFF0C;&#x6570;&#x7EC4;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x5BF9;&#x9F50;&#x4E86;&#xFF0C;&#x7B2C;&#x4E8C;&#x4E2A;&#x5143;&#x7D20;&#x53EF;&#x80FD;&#x4F1A;&#x9519;&#x4F4D;&#xFF0C;&#x4ECE;&#x800C;&#x5BFC;&#x81F4;&#x6027;&#x80FD;&#x95EE;&#x9898;&#x6216;&#x672A;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;"><a href="#&#x793A;&#x4F8B;"></a>&#x793A;&#x4F8B;</h4>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x586B;&#x5145;&#xFF0C;<code>Aligned</code> &#x7684;&#x5927;&#x5C0F;&#x662F; 7 &#x5B57;&#x8282;&#xFF0C;&#x800C;&#x4E0D;&#x662F; 8 &#x5B57;&#x8282;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">let</span> arr: [Aligned; <span class="hljs-number">2</span>] = [Aligned { a: <span class="hljs-number">0</span>, b: <span class="hljs-number">0</span>, c: <span class="hljs-number">0</span> }, Aligned { a: <span class="hljs-number">0</span>, b: <span class="hljs-number">0</span>, c: <span class="hljs-number">0</span> }];
</code></pre>
<ul>
<li>&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x5360;&#x7528; <code>[0, 1, 2, 3, 4, 5, 6]</code>&#x3002;</li>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x8D77;&#x59CB;&#x5730;&#x5740;&#x662F; <code>7</code>&#xFF0C;&#x4F46; <code>a: u32</code> &#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x662F; <code>4</code>&#xFF0C;&#x5730;&#x5740; <code>7</code> &#x4E0D;&#x7B26;&#x5408;&#x8981;&#x6C42;&#x3002;</li>
<li>&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x7A0B;&#x5E8F;&#x4F1A;&#x5D29;&#x6E83;&#x6216;&#x6027;&#x80FD;&#x53D7;&#x635F;&#x3002;</li>
</ul>
<p>&#x901A;&#x8FC7;&#x586B;&#x5145;&#x4F7F;&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x53D8;&#x4E3A; 8 &#x5B57;&#x8282;&#xFF1A;</p>
<ul>
<li>&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x5360;&#x7528; <code>[0, 1, 2, 3, 4, 5, 6, 7]</code>&#x3002;</li>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x5143;&#x7D20;&#x4ECE;&#x5730;&#x5740; <code>8</code> &#x5F00;&#x59CB;&#xFF0C;&#x6EE1;&#x8DB3; <code>u32</code> &#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x5982;&#x4F55;&#x9A8C;&#x8BC1;&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x548C;&#x5BF9;&#x9F50;&#xFF1F;"><a href="#&#x5982;&#x4F55;&#x9A8C;&#x8BC1;&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x548C;&#x5BF9;&#x9F50;&#xFF1F;"></a>&#x5982;&#x4F55;&#x9A8C;&#x8BC1;&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x548C;&#x5BF9;&#x9F50;&#xFF1F;</h3>
<p>&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::mem;

<span class="hljs-meta">#[repr(C)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Aligned</span></span> {
    a: <span class="hljs-built_in">u32</span>,
    b: <span class="hljs-built_in">u16</span>,
    c: <span class="hljs-built_in">u8</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Size of Aligned: {}&quot;</span>, mem::size_of::&lt;Aligned&gt;()); <span class="hljs-comment">// &#x8F93;&#x51FA; 8</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Alignment of Aligned: {}&quot;</span>, mem::align_of::&lt;Aligned&gt;()); <span class="hljs-comment">// &#x8F93;&#x51FA; 4</span>
}
</code></pre>
<hr>
<h3 id="&#x5C0F;&#x7ED3;"><a href="#&#x5C0F;&#x7ED3;"></a>&#x5C0F;&#x7ED3;</h3>
<ol>
<li><strong>&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;</strong>&#xFF1A;<code>Aligned</code> &#x7684;&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x662F; <code>4</code>&#xFF08;&#x7531; <code>u32</code> &#x51B3;&#x5B9A;&#xFF09;&#x3002;</li>
<li><strong>&#x7ED3;&#x6784;&#x4F53;&#x5927;&#x5C0F;&#x5FC5;&#x987B;&#x662F;&#x6700;&#x5927;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x7684;&#x500D;&#x6570;</strong>&#xFF1A;&#x4E3A;&#x4E86;&#x4F7F;&#x7ED3;&#x6784;&#x4F53;&#x5BF9;&#x9F50;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x5728;&#x672B;&#x5C3E;&#x586B;&#x5145; 1 &#x5B57;&#x8282;&#xFF0C;&#x4F7F;&#x603B;&#x5927;&#x5C0F;&#x53D8;&#x4E3A; 8&#x3002;</li>
<li><strong>&#x539F;&#x56E0;</strong>&#xFF1A;&#x586B;&#x5145;&#x7684;&#x76EE;&#x7684;&#x662F;&#x4E3A;&#x4E86;&#x4FDD;&#x8BC1;&#x7ED3;&#x6784;&#x4F53;&#x5B9E;&#x4F8B;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x5BF9;&#x9F50;&#xFF0C;&#x907F;&#x514D;&#x8DE8;&#x5E73;&#x53F0;&#x95EE;&#x9898;&#x548C;&#x6027;&#x80FD;&#x4E0B;&#x964D;&#x3002;</li>
</ol>
<hr>
<p>&#x5982;&#x679C;&#x60F3;&#x624B;&#x52A8;&#x4F18;&#x5316;&#x5185;&#x5B58;&#x5E03;&#x5C40;&#xFF0C;&#x53EF;&#x4EE5;&#x5C1D;&#x8BD5;&#x8C03;&#x6574;&#x5B57;&#x6BB5;&#x987A;&#x5E8F;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-meta">#[repr(C)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Optimized</span></span> {
    a: <span class="hljs-built_in">u32</span>,
    c: <span class="hljs-built_in">u8</span>,
    b: <span class="hljs-built_in">u16</span>,
}
</code></pre>
<p>&#x8C03;&#x6574;&#x540E;&#xFF0C;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x5E03;&#x5C40;&#x5982;&#x4E0B;&#xFF1A;</p>
<ul>
<li><code>a: u32</code> -&gt; <code>[0, 1, 2, 3]</code>&#x3002;</li>
<li><code>c: u8</code> -&gt; <code>[4]</code>&#x3002;</li>
<li><code>b: u16</code> -&gt; <code>[6, 7]</code>&#x3002;</li>
</ul>
<p>&#x6B64;&#x65F6; <code>Optimized</code> &#x7684;&#x5927;&#x5C0F;&#x4ECD;&#x7136;&#x662F; 8 &#x5B57;&#x8282;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x989D;&#x5916;&#x7684;&#x586B;&#x5145;&#x3002;</p>
<h2 id="Arena vs &#x52A8;&#x6001;&#x6570;&#x7EC4;&#x533A;&#x522B;"><a href="#Arena vs &#x52A8;&#x6001;&#x6570;&#x7EC4;&#x533A;&#x522B;"></a>Arena vs &#x52A8;&#x6001;&#x6570;&#x7EC4;&#x533A;&#x522B;</h2>
<p>&#x5F53; Arena &#x7684;&#x5185;&#x5B58;&#x4E0D;&#x8DB3;&#x65F6;&#xFF0C;&#x5B83;&#x4E0D;&#x4F1A;&#x81EA;&#x52A8;&#x6269;&#x5BB9;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x65B0;&#x7684;&#x5927;&#x5757;&#x5185;&#x5B58;&#x6765;&#x7EE7;&#x7EED;&#x5206;&#x914D;&#x5BF9;&#x8C61;&#xFF1A;Arena &#x4F1A;&#x5206;&#x914D;&#x4E00;&#x5757;&#x65B0;&#x7684;&#x5185;&#x5B58;&#x533A;&#x57DF;&#xFF0C;&#x539F;&#x6709;&#x7684;&#x5BF9;&#x8C61;&#x4F9D;&#x7136;&#x4FDD;&#x7559;&#xFF0C;&#x65B0;&#x7684;&#x5BF9;&#x8C61;&#x88AB;&#x5206;&#x914D;&#x5230;&#x65B0;&#x533A;&#x57DF;&#x4E2D;&#x3002;</p>
<ul>
<li>&#x8FD9;&#x548C;&#x52A8;&#x6001;&#x6570;&#x7EC4;&#x6269;&#x5BB9;&#x65F6;&#x9700;&#x8981;&#x79FB;&#x52A8;&#x5DF2;&#x6709;&#x6570;&#x636E;&#x7684;&#x65B9;&#x5F0F;&#x4E0D;&#x540C;&#x3002;</li>
<li>Arena &#x662F;&#x6279;&#x91CF;&#x5206;&#x914D;&#x4E0E;&#x96C6;&#x4E2D;&#x91CA;&#x653E;&#xFF0C;&#x800C;&#x52A8;&#x6001;&#x6570;&#x7EC4;&#x662F;&#x6309;&#x9700;&#x5206;&#x914D;&#x4E0E;&#x6309;&#x9700;&#x91CA;&#x653E;&#x3002;</li>
</ul>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li>gpt</li>
</ul>
`,F=[{level:2,title:"Arena",children:[{level:3,title:"什么是 Arena？",children:[]},{level:3,title:"Arena 更优的应用场景",children:[{level:4,title:"1. 递归数据结构",children:[]},{level:4,title:"2. 短生命周期的高性能批量分配",children:[]},{level:4,title:"3. 多对象共享管理，替代 Rc/Arc",children:[]},{level:4,title:"4. 需要快速分配和清理的大量小对象",children:[]}]}]},{level:2,title:"智能指针 vs arena",children:[{level:3,title:"1. 生命周期绑定的限制",children:[]},{level:3,title:"2. 对象不可移动",children:[]},{level:3,title:"3. 不适合需要线程安全的场景",children:[]},{level:3,title:"4. 内存使用的不可预测性",children:[]},{level:3,title:"5. 缺乏细粒度的所有权管理",children:[]},{level:3,title:"6. 性能优化是否真的必要",children:[]},{level:3,title:"什么时候选择智能指针而不是 Arena？",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"Arena 的原理简单实现",children:[{level:3,title:"手动实现一个简单的 arena",children:[]},{level:3,title:"运行过程的解析",children:[]},{level:3,title:"示例输出",children:[]},{level:3,title:"原理总结",children:[]},{level:3,title:"为什么 arena 高效？",children:[]}]},{level:2,title:"内存对齐",children:[{level:3,title:"回顾 Aligned 的定义",children:[{level:4,title:"逐字段布局",children:[]}]},{level:3,title:"为什么要填充？",children:[{level:4,title:"示例",children:[]}]},{level:3,title:"如何验证结构体大小和对齐？",children:[]},{level:3,title:"小结",children:[]}]},{level:2,title:"Arena vs 动态数组区别",children:[]},{level:2,title:"参考",children:[]}];export{x as attributes,n as html,F as nestedHeaders};
