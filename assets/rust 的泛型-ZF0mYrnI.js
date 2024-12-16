const x={},s=`<p>Rust &#x6CDB;&#x578B;&#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x662F; <strong>&#x201C;&#x7F16;&#x5199;&#x4E0E;&#x7C7B;&#x578B;&#x65E0;&#x5173;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x7C7B;&#x578B;&#x7684;&#x5B89;&#x5168;&#x6027;&#x548C;&#x6027;&#x80FD;&#x201D;</strong>&#x3002;&#x901A;&#x8FC7;&#x6CDB;&#x578B;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x7528;&#x727A;&#x7272; Rust &#x7684;&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;&#x539F;&#x5219;&#x3002;</p>
<p>&#x4E0B;&#x9762;&#x901A;&#x8FC7;&#x51E0;&#x4E2A;&#x4F8B;&#x5B50;&#x6DF1;&#x5165;&#x8BB2;&#x89E3;&#x8FD9;&#x4E00;&#x601D;&#x60F3;&#x3002;</p>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;&#x6CDB;&#x578B;&#x662F;&#x4E00;&#x79CD;&#x7C7B;&#x578B;&#x53C2;&#x6570;&#x5316;&#x673A;&#x5236;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;&#x6CDB;&#x578B;&#x662F;&#x4E00;&#x79CD;&#x7C7B;&#x578B;&#x53C2;&#x6570;&#x5316;&#x673A;&#x5236;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;<strong>&#x6CDB;&#x578B;&#x662F;&#x4E00;&#x79CD;&#x7C7B;&#x578B;&#x53C2;&#x6570;&#x5316;&#x673A;&#x5236;</strong></h3>
<p>&#x6CDB;&#x578B;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x903B;&#x8F91;&#xFF0C;&#x80FD;&#x591F;&#x5904;&#x7406;&#x591A;&#x79CD;&#x7C7B;&#x578B;&#x3002;&#x4EE5;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x6808;&#xFF08;<code>Stack</code>&#xFF09;&#x4E3A;&#x4F8B;&#xFF1A;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x6808;&#x7684;&#x5B9E;&#x73B0;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x6808;&#x7684;&#x5B9E;&#x73B0;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x6808;&#x7684;&#x5B9E;&#x73B0;</h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Stack</span></span>&lt;T&gt; {
    items: <span class="hljs-built_in">Vec</span>&lt;T&gt;, <span class="hljs-comment">// &#x4F7F;&#x7528;&#x6CDB;&#x578B; T&#xFF0C;&#x8868;&#x793A;&#x53EF;&#x4EE5;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x7D20;</span>
}

<span class="hljs-keyword">impl</span>&lt;T&gt; Stack&lt;T&gt; {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">new</span></span>() -&gt; <span class="hljs-keyword">Self</span> {
        Stack { items: <span class="hljs-built_in">Vec</span>::new() }
    }

    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">push</span></span>(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>, item: T) {
        <span class="hljs-keyword">self</span>.items.push(item);
    }

    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">pop</span></span>(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>) -&gt; <span class="hljs-built_in">Option</span>&lt;T&gt; {
        <span class="hljs-keyword">self</span>.items.pop()
    }
}
</code></pre>
<h4 id="&#x4F7F;&#x7528;&#x6CDB;&#x578B;&#x6808;"><a href="#&#x4F7F;&#x7528;&#x6CDB;&#x578B;&#x6808;"></a>&#x4F7F;&#x7528;&#x6CDB;&#x578B;&#x6808;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> stack_i32 = Stack::new(); <span class="hljs-comment">// i32 &#x7C7B;&#x578B;&#x7684;&#x6808;</span>
    stack_i32.push(<span class="hljs-number">1</span>);
    stack_i32.push(<span class="hljs-number">2</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Popped: {:?}&quot;</span>, stack_i32.pop()); <span class="hljs-comment">// &#x8F93;&#x51FA;: Popped: Some(2)</span>

    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> stack_str = Stack::new(); <span class="hljs-comment">// &#x5B57;&#x7B26;&#x4E32;&#x7C7B;&#x578B;&#x7684;&#x6808;</span>
    stack_str.push(<span class="hljs-string">&quot;Hello&quot;</span>);
    stack_str.push(<span class="hljs-string">&quot;Rust&quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Popped: {:?}&quot;</span>, stack_str.pop()); <span class="hljs-comment">// &#x8F93;&#x51FA;: Popped: Some(&quot;Rust&quot;)</span>
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x903B;&#x8F91;&#x72EC;&#x7ACB;&#x4E8E;&#x5177;&#x4F53;&#x7C7B;&#x578B;</strong>&#xFF1A;&#x6808;&#x7684;&#x529F;&#x80FD;&#x4EE3;&#x7801; <code>push</code> &#x548C; <code>pop</code> &#x4E0E;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x65E0;&#x5173;&#xFF0C;&#x53EA;&#x9700;&#x5B9A;&#x4E49;&#x4E00;&#x6B21;&#x3002;</li>
<li><strong>&#x7C7B;&#x578B;&#x5B89;&#x5168;</strong>&#xFF1A;&#x6CDB;&#x578B; <code>T</code> &#x786E;&#x4FDD; <code>Stack&lt;i32&gt;</code> &#x53EA;&#x80FD;&#x5B58;&#x50A8; <code>i32</code>&#xFF0C;<code>Stack&lt;&amp;str&gt;</code> &#x53EA;&#x80FD;&#x5B58;&#x50A8;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x9632;&#x6B62;&#x7C7B;&#x578B;&#x6DF7;&#x6DC6;&#x3002;</li>
<li><strong>&#x6027;&#x80FD;&#x65E0;&#x635F;</strong>&#xFF1A;Rust &#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x4F1A;&#x4E3A;&#x6BCF;&#x79CD;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#xFF08;<strong>&#x5355;&#x6001;&#x5316;</strong>&#xFF09;&#xFF0C;&#x65E0;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;&#x6CDB;&#x578B; + trait &#x7EA6;&#x675F;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;&#x6CDB;&#x578B; + trait &#x7EA6;&#x675F;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;<strong>&#x6CDB;&#x578B; + trait &#x7EA6;&#x675F;</strong></h3>
<p>&#x6CDB;&#x578B;&#x4E0D;&#x4EC5;&#x53EF;&#x4EE5;&#x8868;&#x793A;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<strong>trait &#x7EA6;&#x675F;</strong>&#x9650;&#x5B9A;&#x7C7B;&#x578B;&#x7684;&#x884C;&#x4E3A;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8981;&#x6C42;&#x67D0;&#x4E9B;&#x6CDB;&#x578B;&#x7C7B;&#x578B;&#x5FC5;&#x987B;&#x5B9E;&#x73B0;&#x7279;&#x5B9A;&#x7684;&#x63A5;&#x53E3;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x6BD4;&#x8F83;&#x51FD;&#x6570;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x6BD4;&#x8F83;&#x51FD;&#x6570;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x6BD4;&#x8F83;&#x51FD;&#x6570;</h4>
<p>&#x6211;&#x4EEC;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x53D7;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x8FD4;&#x56DE;&#x8F83;&#x5927;&#x7684;&#x90A3;&#x4E2A;&#x503C;&#x3002;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x9700;&#x8981;&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#xFF0C;&#x53EA;&#x6709;&#x5B9E;&#x73B0;&#x4E86; <code>PartialOrd</code>&#xFF08;&#x652F;&#x6301;&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#xFF09;&#x7684;&#x7C7B;&#x578B;&#x624D;&#x80FD;&#x4F7F;&#x7528;&#x5B83;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">max</span></span>&lt;T: <span class="hljs-built_in">PartialOrd</span>&gt;(a: T, b: T) -&gt; T {
    <span class="hljs-keyword">if</span> a &gt; b {
        a
    } <span class="hljs-keyword">else</span> {
        b
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Max of 5 and 10: {}&quot;</span>, max(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>)); <span class="hljs-comment">// i32 &#x7C7B;&#x578B;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Max of 3.14 and 2.71: {}&quot;</span>, max(<span class="hljs-number">3.14</span>, <span class="hljs-number">2.71</span>)); <span class="hljs-comment">// f64 &#x7C7B;&#x578B;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Max of &apos;a&apos; and &apos;z&apos;: {}&quot;</span>, max(<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;z&apos;</span>)); <span class="hljs-comment">// char &#x7C7B;&#x578B;</span>
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x6CDB;&#x578B;&#x4E0E;&#x884C;&#x4E3A;&#x7ED1;&#x5B9A;</strong>&#xFF1A;<code>T: PartialOrd</code> &#x8868;&#x793A;&#x6CDB;&#x578B; <code>T</code> &#x5FC5;&#x987B;&#x5B9E;&#x73B0; <code>PartialOrd</code>&#xFF0C;&#x8FD9;&#x6837;&#x51FD;&#x6570;&#x4E2D;&#x624D;&#x53EF;&#x4EE5;&#x5B89;&#x5168;&#x5730;&#x4F7F;&#x7528;&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#x3002;</li>
<li><strong>&#x7075;&#x6D3B;&#x6027;&#x548C;&#x5B89;&#x5168;&#x6027;&#x517C;&#x987E;</strong>&#xFF1A;&#x867D;&#x7136; <code>max</code> &#x51FD;&#x6570;&#x9002;&#x7528;&#x4E8E;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#xFF0C;&#x4F46;&#x901A;&#x8FC7; <code>PartialOrd</code> &#x9650;&#x5236;&#xFF0C;&#x907F;&#x514D;&#x4E86;&#x4E0D;&#x652F;&#x6301;&#x6BD4;&#x8F83;&#x7684;&#x7C7B;&#x578B;&#xFF08;&#x5982;&#x590D;&#x6742;&#x5BF9;&#x8C61;&#xFF09;&#x5BFC;&#x81F4;&#x7F16;&#x8BD1;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;<strong>&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;</strong></h3>
<p>Rust &#x7684;&#x6CDB;&#x578B;&#x901A;&#x8FC7;<strong>&#x5355;&#x6001;&#x5316;</strong>&#xFF0C;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x4E3A;&#x6BCF;&#x79CD;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x5B9E;&#x73B0;&#xFF0C;&#x4ECE;&#x800C;&#x6D88;&#x9664;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x7C7B;&#x578B;&#x68C0;&#x67E5;&#x6216;&#x591A;&#x6001;&#x5206;&#x6D3E;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x901A;&#x8FC7;&#x53CD;&#x6C47;&#x7F16;&#x89C2;&#x5BDF;&#x6CDB;&#x578B;&#x7684;&#x5355;&#x6001;&#x5316;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x901A;&#x8FC7;&#x53CD;&#x6C47;&#x7F16;&#x89C2;&#x5BDF;&#x6CDB;&#x578B;&#x7684;&#x5355;&#x6001;&#x5316;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x901A;&#x8FC7;&#x53CD;&#x6C47;&#x7F16;&#x89C2;&#x5BDF;&#x6CDB;&#x578B;&#x7684;&#x5355;&#x6001;&#x5316;</h4>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">identity</span></span>&lt;T&gt;(x: T) -&gt; T {
    x
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, identity(<span class="hljs-number">5</span>)); <span class="hljs-comment">// i32 &#x7C7B;&#x578B;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, identity(<span class="hljs-number">3.14</span>)); <span class="hljs-comment">// f64 &#x7C7B;&#x578B;</span>
}
</code></pre>
<p>&#x5982;&#x679C;&#x67E5;&#x770B;&#x751F;&#x6210;&#x7684;&#x6C47;&#x7F16;&#x4EE3;&#x7801;&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x7F16;&#x8BD1;&#x5668;&#x751F;&#x6210;&#x4E86;&#x4E24;&#x4E2A;&#x72EC;&#x7ACB;&#x7684;&#x5B9E;&#x73B0;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x4E2A;&#x5904;&#x7406; <code>i32</code> &#x7684; <code>identity</code> &#x51FD;&#x6570;&#x3002;</li>
<li>&#x4E00;&#x4E2A;&#x5904;&#x7406; <code>f64</code> &#x7684; <code>identity</code> &#x51FD;&#x6570;&#x3002;</li>
</ul>
<p><strong>&#x7ED3;&#x679C;</strong>&#xFF1A;</p>
<ul>
<li>&#x6CDB;&#x578B;&#x51FD;&#x6570;&#x7684;&#x6027;&#x80FD;&#x7B49;&#x540C;&#x4E8E;&#x624B;&#x52A8;&#x4E3A;&#x6BCF;&#x79CD;&#x7C7B;&#x578B;&#x7F16;&#x5199;&#x51FD;&#x6570;&#x3002;</li>
<li>&#x6CDB;&#x578B;&#x63D0;&#x4F9B;&#x4E86;&#x96F6;&#x6210;&#x672C;&#x7684;&#x7075;&#x6D3B;&#x6027;&#xFF0C;&#x65E0;&#x9700;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x5F00;&#x9500;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;&#x7EC4;&#x5408;&#x4E0E;&#x590D;&#x7528;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;&#x7EC4;&#x5408;&#x4E0E;&#x590D;&#x7528;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;<strong>&#x7EC4;&#x5408;&#x4E0E;&#x590D;&#x7528;</strong></h3>
<p>&#x6CDB;&#x578B;&#x53EF;&#x4EE5;&#x4E0E;&#x5176;&#x4ED6; Rust &#x7279;&#x6027;&#xFF08;&#x5982;&#x679A;&#x4E3E;&#x3001;trait &#x7B49;&#xFF09;&#x7ED3;&#x5408;&#xFF0C;&#x521B;&#x5EFA;&#x9AD8;&#x5EA6;&#x62BD;&#x8C61;&#x3001;&#x7075;&#x6D3B;&#x7684;&#x4EE3;&#x7801;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x4E0E; Option"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x4E0E; Option"></a>&#x793A;&#x4F8B;&#xFF1A;&#x6CDB;&#x578B;&#x4E0E; <code>Option</code></h4>
<p>Rust &#x6807;&#x51C6;&#x5E93;&#x7684; <code>Option&lt;T&gt;</code> &#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x6CDB;&#x578B;&#x679A;&#x4E3E;&#xFF0C;&#x7528;&#x4E8E;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x53EF;&#x80FD;&#x6709;&#x503C;&#x6216;&#x65E0;&#x503C;&#x7684;&#x7C7B;&#x578B;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Option</span></span>&lt;T&gt; {
    <span class="hljs-literal">Some</span>(T),
    <span class="hljs-literal">None</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> some_number: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-built_in">i32</span>&gt; = <span class="hljs-literal">Some</span>(<span class="hljs-number">5</span>);
    <span class="hljs-keyword">let</span> some_text: <span class="hljs-built_in">Option</span>&lt;&amp;<span class="hljs-built_in">str</span>&gt; = <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> no_value: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-built_in">i32</span>&gt; = <span class="hljs-literal">None</span>;

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}, {:?}, {:?}&quot;</span>, some_number, some_text, no_value);
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><code>Option&lt;T&gt;</code> &#x4F7F;&#x7528;&#x6CDB;&#x578B; <code>T</code>&#xFF0C;&#x53EF;&#x4EE5;&#x9002;&#x7528;&#x4E8E;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x3002;</li>
<li>&#x901A;&#x8FC7; <code>Option</code>&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8868;&#x8FBE; &#x201C;&#x503C;&#x53EF;&#x80FD;&#x4E3A;&#x7A7A;&#x201D;&#x7684;&#x8BED;&#x4E49;&#xFF0C;&#x800C;&#x65E0;&#x9700;&#x6BCF;&#x79CD;&#x7C7B;&#x578B;&#x90FD;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x903B;&#x8F91;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Rust &#x6CDB;&#x578B;&#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x5728;&#x4E8E;&#xFF1A;</p>
<ol>
<li><strong>&#x53C2;&#x6570;&#x5316;&#x7C7B;&#x578B;</strong>&#xFF1A;&#x5C06;&#x7C7B;&#x578B;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x4EE3;&#x7801;&#x903B;&#x8F91;&#x72EC;&#x7ACB;&#x4E8E;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x3002;</li>
<li><strong>&#x7C7B;&#x578B;&#x5B89;&#x5168;</strong>&#xFF1A;&#x901A;&#x8FC7; trait &#x7EA6;&#x675F;&#x660E;&#x786E;&#x6CDB;&#x578B;&#x7684;&#x884C;&#x4E3A;&#x8FB9;&#x754C;&#x3002;</li>
<li><strong>&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;</strong>&#xFF1A;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x5355;&#x6001;&#x5316;&#xFF0C;&#x65E2;&#x4FDD;&#x7559;&#x7075;&#x6D3B;&#x6027;&#x53C8;&#x65E0;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;&#x3002;</li>
<li><strong>&#x9AD8;&#x6548;&#x590D;&#x7528;</strong>&#xFF1A;&#x4E0E; Rust &#x7684;&#x5176;&#x4ED6;&#x7279;&#x6027;&#x7ED3;&#x5408;&#xFF0C;&#x7B80;&#x5316;&#x5E38;&#x89C1;&#x6A21;&#x5F0F;&#x7684;&#x5B9E;&#x73B0;&#x3002;</li>
</ol>
<p>&#x6CDB;&#x578B;&#x4F7F; Rust &#x5728;&#x7075;&#x6D3B;&#x6027;&#x3001;&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x548C;&#x6027;&#x80FD;&#x4E4B;&#x95F4;&#x53D6;&#x5F97;&#x4E86;&#x5F88;&#x597D;&#x7684;&#x5E73;&#x8861;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:3,title:"核心思想 1：泛型是一种类型参数化机制",children:[{level:4,title:"示例：泛型栈的实现",children:[]},{level:4,title:"使用泛型栈",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 2：泛型 + trait 约束",children:[{level:4,title:"示例：实现一个比较函数",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 3：零成本抽象",children:[{level:4,title:"示例：通过反汇编观察泛型的单态化",children:[]}]},{level:3,title:"核心思想 4：组合与复用",children:[{level:4,title:"示例：泛型与 Option",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"总结",children:[]},{level:2,title:"参考",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
