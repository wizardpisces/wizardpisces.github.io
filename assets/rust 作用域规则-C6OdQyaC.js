const x={},s=`<h1 id="&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;"><a href="#&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;"></a>&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;</h1>
<p>Rust &#x7684;&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;&#x662F;&#x5176;&#x5185;&#x5B58;&#x5B89;&#x5168;&#x6027;&#x7684;&#x57FA;&#x7840;&#x4E4B;&#x4E00;&#xFF0C;&#x4E3B;&#x8981;&#x56F4;&#x7ED5;<strong>&#x6240;&#x6709;&#x6743;</strong>&#x3001;<strong>&#x501F;&#x7528;</strong>&#x548C;<strong>&#x751F;&#x547D;&#x5468;&#x671F;</strong>&#x6765;&#x786E;&#x4FDD;&#x5185;&#x5B58;&#x7684;&#x7BA1;&#x7406;&#x5B89;&#x5168;&#x4E14;&#x9AD8;&#x6548;&#x3002;&#x4EE5;&#x4E0B;&#x901A;&#x8FC7;&#x51E0;&#x4E2A;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x8BF4;&#x660E; Rust &#x7684;&#x4F5C;&#x7528;&#x57DF;&#x89C4;&#x5219;&#x3002;</p>
<h2 id="&#x6240;&#x6709;&#x6743;"><a href="#&#x6240;&#x6709;&#x6743;"></a>&#x6240;&#x6709;&#x6743;</h2>
<hr>
<h3 id="&#x4F8B; 1&#xFF1A;&#x53D8;&#x91CF;&#x7684;&#x6240;&#x6709;&#x6743;&#x4E0E;&#x4F5C;&#x7528;&#x57DF;"><a href="#&#x4F8B; 1&#xFF1A;&#x53D8;&#x91CF;&#x7684;&#x6240;&#x6709;&#x6743;&#x4E0E;&#x4F5C;&#x7528;&#x57DF;"></a>&#x4F8B; 1&#xFF1A;&#x53D8;&#x91CF;&#x7684;&#x6240;&#x6709;&#x6743;&#x4E0E;&#x4F5C;&#x7528;&#x57DF;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>); <span class="hljs-comment">// s &#x8FDB;&#x5165;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;&#x6240;&#x6709;&#x6743;&#x5C5E;&#x4E8E; s</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, s);
} <span class="hljs-comment">// &#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;&#xFF0C;s &#x88AB;&#x91CA;&#x653E;&#xFF0C;&#x5185;&#x5B58;&#x81EA;&#x52A8;&#x56DE;&#x6536;</span>
</code></pre>
<ul>
<li>&#x53D8;&#x91CF; <code>s</code> &#x7684;&#x6240;&#x6709;&#x6743;&#x5B58;&#x5728;&#x4E8E;&#x5B9A;&#x4E49;&#x5230;&#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;&#x4E4B;&#x95F4;&#x3002;</li>
<li>&#x79BB;&#x5F00;&#x4F5C;&#x7528;&#x57DF;&#x65F6;&#xFF0C;Rust &#x4F1A;&#x81EA;&#x52A8;&#x8C03;&#x7528; <code>drop</code>&#xFF0C;&#x91CA;&#x653E;&#x5185;&#x5B58;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x4F8B; 2&#xFF1A;&#x6240;&#x6709;&#x6743;&#x7684;&#x8F6C;&#x79FB;&#xFF08;Move&#xFF09;"><a href="#&#x4F8B; 2&#xFF1A;&#x6240;&#x6709;&#x6743;&#x7684;&#x8F6C;&#x79FB;&#xFF08;Move&#xFF09;"></a>&#x4F8B; 2&#xFF1A;&#x6240;&#x6709;&#x6743;&#x7684;&#x8F6C;&#x79FB;&#xFF08;Move&#xFF09;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> s2 = s1; <span class="hljs-comment">// s1 &#x7684;&#x6240;&#x6709;&#x6743;&#x8F6C;&#x79FB;&#x5230; s2</span>
    <span class="hljs-comment">// println!(&quot;{}&quot;, s1); // &#x9519;&#x8BEF;&#xFF01;s1 &#x4E0D;&#x518D;&#x6709;&#x6548;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, s2);
}
</code></pre>
<ul>
<li><code>s1</code> &#x7684;&#x6240;&#x6709;&#x6743;&#x88AB;&#x8F6C;&#x79FB;&#x7ED9; <code>s2</code> &#x540E;&#xFF0C;<code>s1</code> &#x5728;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x88AB;&#x6807;&#x8BB0;&#x4E3A;&#x65E0;&#x6548;&#x3002;</li>
<li>&#x8FD9;&#x79CD;&#x8BBE;&#x8BA1;&#x907F;&#x514D;&#x4E86;&#x4E24;&#x8005;&#x6307;&#x5411;&#x540C;&#x4E00;&#x5185;&#x5B58;&#x800C;&#x5BFC;&#x81F4;&#x6F5C;&#x5728;&#x7684;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x501F;&#x7528;"><a href="#&#x501F;&#x7528;"></a>&#x501F;&#x7528;</h2>
<hr>
<h3 id="&#x4F8B; 3&#xFF1A;&#x501F;&#x7528;&#xFF08;Borrowing&#xFF09;"><a href="#&#x4F8B; 3&#xFF1A;&#x501F;&#x7528;&#xFF08;Borrowing&#xFF09;"></a>&#x4F8B; 3&#xFF1A;&#x501F;&#x7528;&#xFF08;Borrowing&#xFF09;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> len = calculate_length(&amp;s); <span class="hljs-comment">// &#x501F;&#x7528; s</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;The length of &apos;{}&apos; is {}.&quot;</span>, s, len); <span class="hljs-comment">// s &#x4F9D;&#x7136;&#x6709;&#x6548;</span>
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-built_in">usize</span> {
    s.len()
}
</code></pre>
<ul>
<li>&#x901A;&#x8FC7; <code>&amp;</code> &#x501F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x501F;&#x7528;&#x4E0D;&#x4F1A;&#x8F6C;&#x79FB;&#x6240;&#x6709;&#x6743;&#x3002;</li>
<li>&#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x501F;&#x7528;&#x7ED3;&#x675F;&#xFF0C;&#x539F;&#x53D8;&#x91CF;&#x4ECD;&#x7136;&#x6709;&#x6548;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x4F8B; 4&#xFF1A;&#x53EF;&#x53D8;&#x501F;&#x7528;"><a href="#&#x4F8B; 4&#xFF1A;&#x53EF;&#x53D8;&#x501F;&#x7528;"></a>&#x4F8B; 4&#xFF1A;&#x53EF;&#x53D8;&#x501F;&#x7528;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    change(&amp;<span class="hljs-keyword">mut</span> s); <span class="hljs-comment">// &#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, s);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">change</span></span>(s: &amp;<span class="hljs-keyword">mut</span> <span class="hljs-built_in">String</span>) {
    s.push_str(<span class="hljs-string">&quot;, world&quot;</span>);
}
</code></pre>
<ul>
<li>&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x5728;&#x540C;&#x4E00;&#x65F6;&#x95F4;&#x53EA;&#x80FD;&#x6709;&#x4E00;&#x4E2A;&#x53EF;&#x53D8;&#x501F;&#x7528;&#xFF0C;&#x907F;&#x514D;&#x6570;&#x636E;&#x7ADE;&#x4E89;&#x3002;</li>
<li>&#x53EF;&#x53D8;&#x501F;&#x7528;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x53D8;&#x91CF;&#x624D;&#x80FD;&#x88AB;&#x518D;&#x6B21;&#x4F7F;&#x7528;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x4F8B; 5&#xFF1A;&#x4E0D;&#x53EF;&#x53D8;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x7684;&#x51B2;&#x7A81;"><a href="#&#x4F8B; 5&#xFF1A;&#x4E0D;&#x53EF;&#x53D8;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x7684;&#x51B2;&#x7A81;"></a>&#x4F8B; 5&#xFF1A;&#x4E0D;&#x53EF;&#x53D8;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x7684;&#x51B2;&#x7A81;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> r1 = &amp;s; <span class="hljs-comment">// &#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-keyword">let</span> r2 = &amp;s; <span class="hljs-comment">// &#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-comment">// let r3 = &amp;mut s; // &#x9519;&#x8BEF;&#xFF01;&#x540C;&#x65F6;&#x5B58;&#x5728;&#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{} and {}&quot;</span>, r1, r2);
}
</code></pre>
<ul>
<li>Rust &#x7981;&#x6B62;&#x540C;&#x65F6;&#x5B58;&#x5728;&#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;&#xFF0C;&#x9632;&#x6B62;&#x5E76;&#x53D1;&#x4FEE;&#x6539;&#x7684;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x4F8B; 6&#xFF1A;&#x4F5C;&#x7528;&#x57DF;&#x5D4C;&#x5957;&#x89E3;&#x51B3;&#x501F;&#x7528;&#x51B2;&#x7A81;"><a href="#&#x4F8B; 6&#xFF1A;&#x4F5C;&#x7528;&#x57DF;&#x5D4C;&#x5957;&#x89E3;&#x51B3;&#x501F;&#x7528;&#x51B2;&#x7A81;"></a>&#x4F8B; 6&#xFF1A;&#x4F5C;&#x7528;&#x57DF;&#x5D4C;&#x5957;&#x89E3;&#x51B3;&#x501F;&#x7528;&#x51B2;&#x7A81;</h3>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);

    {
        <span class="hljs-keyword">let</span> r1 = &amp;s; <span class="hljs-comment">// &#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, r1);
    } <span class="hljs-comment">// r1 &#x7684;&#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;</span>

    <span class="hljs-keyword">let</span> r2 = &amp;<span class="hljs-keyword">mut</span> s; <span class="hljs-comment">// &#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    r2.push_str(<span class="hljs-string">&quot;, world&quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, r2);
}
</code></pre>
<ul>
<li>&#x901A;&#x8FC7;&#x4F5C;&#x7528;&#x57DF;&#x5D4C;&#x5957;&#xFF0C;&#x89E3;&#x51B3;&#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x548C;&#x53EF;&#x53D8;&#x501F;&#x7528;&#x7684;&#x51B2;&#x7A81;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#&#x751F;&#x547D;&#x5468;&#x671F;"></a>&#x751F;&#x547D;&#x5468;&#x671F;</h2>
<h3 id="1. &#x57FA;&#x7840;&#x6982;&#x5FF5;&#xFF1A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;"><a href="#1. &#x57FA;&#x7840;&#x6982;&#x5FF5;&#xFF1A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;"></a>1. <strong>&#x57FA;&#x7840;&#x6982;&#x5FF5;&#xFF1A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;</strong></h3>
<p>&#x751F;&#x547D;&#x5468;&#x671F;&#xFF08;<code>&apos;a</code>&#xFF09;&#x8868;&#x793A;&#x5F15;&#x7528;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;Rust &#x7F16;&#x8BD1;&#x5668;&#x901A;&#x8FC7;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;&#x68C0;&#x67E5;&#x5F15;&#x7528;&#x662F;&#x5426;&#x6709;&#x6548;&#x3002;<br>
&#x793A;&#x4F8B;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> r;
    {
        <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
        r = &amp;x; <span class="hljs-comment">// &#x501F;&#x7528; x</span>
    } <span class="hljs-comment">// x &#x7684;&#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;</span>
    <span class="hljs-comment">// println!(&quot;{}&quot;, r); // &#x9519;&#x8BEF;&#xFF1A;r &#x6307;&#x5411;&#x7684; x &#x5DF2;&#x7ECF;&#x88AB;&#x91CA;&#x653E;</span>
}
</code></pre>
<ul>
<li><code>x</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x53EA;&#x5B58;&#x5728;&#x4E8E;&#x5185;&#x5C42;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;<code>r</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x66F4;&#x957F;&#x3002;</li>
<li>Rust &#x7F16;&#x8BD1;&#x5668;&#x4E0D;&#x5141;&#x8BB8;&#x5F15;&#x7528;&#x8D85;&#x51FA;&#x88AB;&#x5F15;&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#xFF0C;&#x907F;&#x514D;&#x60AC;&#x5782;&#x6307;&#x9488;&#x3002;</li>
</ul>
<hr>
<h3 id="2. &#x51FD;&#x6570;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#2. &#x51FD;&#x6570;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"></a>2. <strong>&#x51FD;&#x6570;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;</strong></h3>
<p>&#x5F53;&#x51FD;&#x6570;&#x6D89;&#x53CA;&#x5F15;&#x7528;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x8868;&#x793A;&#x5F15;&#x7528;&#x7684;&#x6709;&#x6548;&#x8303;&#x56F4;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x751F;&#x547D;&#x5468;&#x671F;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x751F;&#x547D;&#x5468;&#x671F;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">longest</span></span>&lt;<span class="hljs-symbol">&apos;a</span>&gt;(x: &amp;<span class="hljs-symbol">&apos;a</span> <span class="hljs-built_in">str</span>, y: &amp;<span class="hljs-symbol">&apos;a</span> <span class="hljs-built_in">str</span>) -&gt; &amp;<span class="hljs-symbol">&apos;a</span> <span class="hljs-built_in">str</span> {
    <span class="hljs-keyword">if</span> x.len() &gt; y.len() {
        x
    } <span class="hljs-keyword">else</span> {
        y
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;long&quot;</span>);
    <span class="hljs-keyword">let</span> s2 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;short&quot;</span>);
    <span class="hljs-keyword">let</span> result = longest(&amp;s1, &amp;s2); <span class="hljs-comment">// s1 &#x548C; s2 &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x90FD;&#x4F20;&#x9012;&#x7ED9; result</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;The longest string is: {}&quot;</span>, result);
}
</code></pre>
<p><strong>&#x89E3;&#x8BFB;&#xFF1A;</strong></p>
<ol>
<li><code>&lt;&apos;a&gt;</code> &#x8868;&#x793A; <code>x</code> &#x548C; <code>y</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x6709;&#x5173;&#x8054;&#xFF0C;&#x5E76;&#x4E14;&#x8FD4;&#x56DE;&#x503C;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0E;&#x5B83;&#x4EEC;&#x76F8;&#x540C;&#x3002;</li>
<li>&#x7F16;&#x8BD1;&#x5668;&#x786E;&#x4FDD; <code>result</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x8D85;&#x8FC7; <code>s1</code> &#x548C; <code>s2</code> &#x4E2D;&#x8F83;&#x77ED;&#x7684;&#x90A3;&#x4E00;&#x4E2A;&#x3002;</li>
</ol>
<hr>
<h3 id="3. &#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x76F8;&#x540C;&#x7684;&#x60C5;&#x51B5;"><a href="#3. &#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x76F8;&#x540C;&#x7684;&#x60C5;&#x51B5;"></a>3. <strong>&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x76F8;&#x540C;&#x7684;&#x60C5;&#x51B5;</strong></h3>
<p>&#x5982;&#x679C;&#x53C2;&#x6570;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x540C;&#xFF0C;Rust &#x4F1A;&#x9650;&#x5236;&#x8FD4;&#x56DE;&#x503C;&#x7684;&#x5F15;&#x7528;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x4E0D;&#x540C;&#x751F;&#x547D;&#x5468;&#x671F;&#x5BFC;&#x81F4;&#x9519;&#x8BEF;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x4E0D;&#x540C;&#x751F;&#x547D;&#x5468;&#x671F;&#x5BFC;&#x81F4;&#x9519;&#x8BEF;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x4E0D;&#x540C;&#x751F;&#x547D;&#x5468;&#x671F;&#x5BFC;&#x81F4;&#x9519;&#x8BEF;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> result;
    {
        <span class="hljs-keyword">let</span> s2 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;world&quot;</span>);
        result = longest(&amp;s1, &amp;s2); <span class="hljs-comment">// &#x9519;&#x8BEF;&#xFF1A;s2 &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x6BD4; result &#x77ED;</span>
    }
    <span class="hljs-comment">// println!(&quot;{}&quot;, result); // result &#x5F15;&#x7528;&#x7684; s2 &#x5DF2;&#x65E0;&#x6548;</span>
}
</code></pre>
<hr>
<h3 id="4. &#x7ED3;&#x5408;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#4. &#x7ED3;&#x5408;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"></a>4. <strong>&#x7ED3;&#x5408;&#x7ED3;&#x6784;&#x4F53;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;</strong></h3>
<p>&#x5982;&#x679C;&#x7ED3;&#x6784;&#x4F53;&#x5305;&#x542B;&#x5F15;&#x7528;&#xFF0C;&#x5FC5;&#x987B;&#x663E;&#x5F0F;&#x58F0;&#x660E;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x8868;&#x660E;&#x5176;&#x6709;&#x6548;&#x6027;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x7ED3;&#x6784;&#x4F53;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x7ED3;&#x6784;&#x4F53;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x7ED3;&#x6784;&#x4F53;&#x4E2D;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;</h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Book</span></span>&lt;<span class="hljs-symbol">&apos;a</span>&gt; {
    title: &amp;<span class="hljs-symbol">&apos;a</span> <span class="hljs-built_in">str</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> title = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Rust Programming&quot;</span>);
    <span class="hljs-keyword">let</span> book = Book { title: &amp;title }; <span class="hljs-comment">// book &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x53D7; title &#x9650;&#x5236;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Book title: {}&quot;</span>, book.title);
} <span class="hljs-comment">// title &#x88AB;&#x91CA;&#x653E;&#xFF0C;book &#x4E5F;&#x5931;&#x6548;</span>
</code></pre>
<p><strong>&#x89E3;&#x8BFB;&#xFF1A;</strong></p>
<ul>
<li><code>&lt;&apos;a&gt;</code> &#x7EA6;&#x675F; <code>Book</code> &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x786E;&#x4FDD; <code>Book</code> &#x7684;&#x5F15;&#x7528;&#x6709;&#x6548;&#x3002;</li>
</ul>
<hr>
<h3 id="5. &#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF08;&apos;static&#xFF09;"><a href="#5. &#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF08;&apos;static&#xFF09;"></a>5. <strong>&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF08;<code>&apos;static</code>&#xFF09;</strong></h3>
<p>&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;&#x8868;&#x793A;&#x5F15;&#x7528;&#x5728;&#x7A0B;&#x5E8F;&#x6574;&#x4E2A;&#x8FD0;&#x884C;&#x671F;&#x95F4;&#x90FD;&#x6709;&#x6548;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#x5B57;&#x9762;&#x503C;&#xFF09;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">static_example</span></span>() -&gt; &amp;<span class="hljs-symbol">&apos;static</span> <span class="hljs-built_in">str</span> {
    <span class="hljs-string">&quot;I have a static lifetime&quot;</span>
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = static_example();
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, s); <span class="hljs-comment">// &#x5B57;&#x7B26;&#x4E32;&#x5B57;&#x9762;&#x503C;&#x5728;&#x6574;&#x4E2A;&#x7A0B;&#x5E8F;&#x4E2D;&#x90FD;&#x6709;&#x6548;</span>
}
</code></pre>
<hr>
<h3 id="6. &#x7701;&#x7565;&#x89C4;&#x5219;&#xFF08;&#x751F;&#x547D;&#x5468;&#x671F;&#x7701;&#x7565;&#xFF09;"><a href="#6. &#x7701;&#x7565;&#x89C4;&#x5219;&#xFF08;&#x751F;&#x547D;&#x5468;&#x671F;&#x7701;&#x7565;&#xFF09;"></a>6. <strong>&#x7701;&#x7565;&#x89C4;&#x5219;&#xFF08;&#x751F;&#x547D;&#x5468;&#x671F;&#x7701;&#x7565;&#xFF09;</strong></h3>
<p>&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x80FD;&#x81EA;&#x52A8;&#x63A8;&#x65AD;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x65E0;&#x9700;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x65E0;&#x9700;&#x663E;&#x5F0F;&#x6807;&#x6CE8;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x65E0;&#x9700;&#x663E;&#x5F0F;&#x6807;&#x6CE8;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x65E0;&#x9700;&#x663E;&#x5F0F;&#x6807;&#x6CE8;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">str</span>) -&gt; &amp;<span class="hljs-built_in">str</span> { <span class="hljs-comment">// &#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;&#x88AB;&#x7701;&#x7565;</span>
    <span class="hljs-keyword">let</span> bytes = s.as_bytes();
    <span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
        <span class="hljs-keyword">if</span> item == <span class="hljs-string">b&apos; &apos;</span> {
            <span class="hljs-keyword">return</span> &amp;s[<span class="hljs-number">0</span>..i];
        }
    }
    &amp;s[..]
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> sentence = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello world&quot;</span>);
    <span class="hljs-keyword">let</span> word = first_word(&amp;sentence); <span class="hljs-comment">// &#x7F16;&#x8BD1;&#x5668;&#x81EA;&#x52A8;&#x63A8;&#x65AD;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;First word: {}&quot;</span>, word);
}
</code></pre>
<p><strong>&#x63A8;&#x65AD;&#x89C4;&#x5219;&#xFF1A;</strong></p>
<ol>
<li>&#x6BCF;&#x4E2A;&#x5F15;&#x7528;&#x53C2;&#x6570;&#x90FD;&#x5206;&#x914D;&#x4E00;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>&#x5982;&#x679C;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x5F15;&#x7528;&#x53C2;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x503C;&#x4E0E;&#x8BE5;&#x53C2;&#x6570;&#x5171;&#x4EAB;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>&#x5982;&#x679C;&#x6709;&#x591A;&#x4E2A;&#x5F15;&#x7528;&#x53C2;&#x6570;&#x4E14;&#x8FD4;&#x56DE;&#x503C;&#x4F7F;&#x7528;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x65E0;&#x6CD5;&#x63A8;&#x65AD;&#x65F6;&#x9700;&#x8981;&#x663E;&#x5F0F;&#x6807;&#x6CE8;&#x3002;</li>
</ol>
<hr>
<h3 id="7. &#x590D;&#x6742;&#x4F8B;&#x5B50;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;"><a href="#7. &#x590D;&#x6742;&#x4F8B;&#x5B50;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;"></a>7. <strong>&#x590D;&#x6742;&#x4F8B;&#x5B50;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;</strong></h3>
<p>&#x5F53;&#x6D89;&#x53CA;&#x591A;&#x4E2A;&#x5F15;&#x7528;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x660E;&#x786E;&#x533A;&#x5206;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x591A;&#x4E2A;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">concat_with_separator</span></span>&lt;<span class="hljs-symbol">&apos;a</span>, <span class="hljs-symbol">&apos;b</span>&gt;(s1: &amp;<span class="hljs-symbol">&apos;a</span> <span class="hljs-built_in">str</span>, s2: &amp;<span class="hljs-symbol">&apos;b</span> <span class="hljs-built_in">str</span>, sep: &amp;<span class="hljs-built_in">str</span>) -&gt; <span class="hljs-built_in">String</span> {
    <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;{}{}{}&quot;</span>, s1, sep, s2)
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> s2 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;world&quot;</span>);
    <span class="hljs-keyword">let</span> result = concat_with_separator(&amp;s1, &amp;s2, <span class="hljs-string">&quot;, &quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, result); <span class="hljs-comment">// &quot;hello, world&quot;</span>
}
</code></pre>
<p><strong>&#x89E3;&#x8BFB;&#xFF1A;</strong></p>
<ul>
<li><code>&lt;&apos;a, &apos;b&gt;</code> &#x8868;&#x793A; <code>s1</code> &#x548C; <code>s2</code> &#x53EF;&#x80FD;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>&#x8FD4;&#x56DE;&#x503C;&#x4E0D;&#x6D89;&#x53CA;&#x5F15;&#x7528;&#xFF0C;&#x56E0;&#x800C;&#x65E0;&#x9700;&#x4E0E; <code>s1</code> &#x6216; <code>s2</code> &#x5173;&#x8054;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<ol>
<li><strong>&#x751F;&#x547D;&#x5468;&#x671F;&#x7684;&#x6838;&#x5FC3;&#x76EE;&#x6807;</strong>&#xFF1A;&#x786E;&#x4FDD;&#x5F15;&#x7528;&#x5728;&#x6709;&#x6548;&#x8303;&#x56F4;&#x5185;&#x5B89;&#x5168;&#x4F7F;&#x7528;&#x3002;</li>
<li><strong>&#x5E38;&#x7528;&#x89C4;&#x5219;</strong>&#xFF1A;
<ul>
<li>&#x8FD4;&#x56DE;&#x503C;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x80FD;&#x8D85;&#x8FC7;&#x53C2;&#x6570;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x6D89;&#x53CA;&#x65F6;&#xFF0C;&#x660E;&#x786E;&#x751F;&#x547D;&#x5468;&#x671F;&#x5173;&#x7CFB;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x3002;</li>
</ul>
</li>
<li><strong>&#x573A;&#x666F;&#x5206;&#x7C7B;</strong>&#xFF1A;
<ul>
<li>&#x51FD;&#x6570;&#x53C2;&#x6570;&#x4E0E;&#x8FD4;&#x56DE;&#x503C;&#x3002;</li>
<li>&#x7ED3;&#x6784;&#x4F53;&#x4E2D;&#x7684;&#x5F15;&#x7528;&#x3002;</li>
<li>&#x9759;&#x6001;&#x751F;&#x547D;&#x5468;&#x671F;&#x6216;&#x590D;&#x6742;&#x5F15;&#x7528;&#x573A;&#x666F;&#x3002;</li>
</ul>
</li>
</ol>
<p>Rust &#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x673A;&#x5236;&#x867D;&#x7136;&#x770B;&#x8D77;&#x6765;&#x590D;&#x6742;&#xFF0C;&#x4F46;&#x901A;&#x8FC7;&#x660E;&#x786E;&#x7684;&#x89C4;&#x5219;&#x548C;&#x7F16;&#x8BD1;&#x5668;&#x68C0;&#x67E5;&#xFF0C;&#x786E;&#x4FDD;&#x4E86;&#x5185;&#x5B58;&#x5B89;&#x5168;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li><a href="https://www.rust-lang.org/zh-CN/learn/get-started">Rust &#x6240;&#x6709;&#x6743;&#x4E0E;&#x751F;&#x547D;&#x5468;&#x671F;</a></li>
<li>gpt</li>
</ul>
`,n=[{level:1,title:"作用域规则",children:[{level:2,title:"所有权",children:[{level:3,title:"例 1：变量的所有权与作用域",children:[]},{level:3,title:"例 2：所有权的转移（Move）",children:[]}]},{level:2,title:"借用",children:[{level:3,title:"例 3：借用（Borrowing）",children:[]},{level:3,title:"例 4：可变借用",children:[]},{level:3,title:"例 5：不可变和可变借用的冲突",children:[]},{level:3,title:"例 6：作用域嵌套解决借用冲突",children:[]}]},{level:2,title:"生命周期",children:[{level:3,title:"1. 基础概念：生命周期标注",children:[]},{level:3,title:"2. 函数中的生命周期",children:[{level:4,title:"示例：显式标注生命周期",children:[]}]},{level:3,title:"3. 生命周期不相同的情况",children:[{level:4,title:"示例：不同生命周期导致错误",children:[]}]},{level:3,title:"4. 结合结构体的生命周期",children:[{level:4,title:"示例：结构体中的生命周期",children:[]}]},{level:3,title:"5. 静态生命周期（'static）",children:[{level:4,title:"示例：静态生命周期",children:[]}]},{level:3,title:"6. 省略规则（生命周期省略）",children:[{level:4,title:"示例：无需显式标注",children:[]}]},{level:3,title:"7. 复杂例子：多个生命周期",children:[{level:4,title:"示例：多个生命周期标注",children:[]}]},{level:3,title:"总结",children:[]}]},{level:2,title:"参考",children:[]}]}];export{x as attributes,s as html,n as nestedHeaders};
