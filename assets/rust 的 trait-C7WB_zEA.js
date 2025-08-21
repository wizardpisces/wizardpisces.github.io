const s={},x=`<p>Rust &#x4E2D;&#x7684; <code>trait</code> &#x662F;&#x4E00;&#x79CD;&#x62BD;&#x8C61;&#x673A;&#x5236;&#xFF0C;&#x5B83;&#x5B9A;&#x4E49;&#x4E86;&#x67D0;&#x4E9B;&#x7C7B;&#x578B;&#x5FC5;&#x987B;&#x5B9E;&#x73B0;&#x7684;<strong>&#x884C;&#x4E3A;&#x96C6;&#x5408;</strong>&#x3002;<code>trait</code> &#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x662F;<strong>&#x901A;&#x8FC7;&#x884C;&#x4E3A;&#x5B9A;&#x4E49;&#x63A5;&#x53E3;&#xFF0C;&#x5E76;&#x5B9E;&#x73B0;&#x9762;&#x5411;&#x63A5;&#x53E3;&#x7F16;&#x7A0B;</strong>&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x7075;&#x6D3B;&#x6027;&#x3001;&#x53EF;&#x6269;&#x5C55;&#x6027;&#x548C;&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x3002;</p>
<p>&#x6211;&#x4EEC;&#x901A;&#x8FC7;&#x51E0;&#x4E2A;&#x4F8B;&#x5B50;&#x6765;&#x8BB2;&#x89E3; Rust &#x4E2D; <code>trait</code> &#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x3002;</p>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 1&#xFF1A;<strong>&#x5B9A;&#x4E49;&#x884C;&#x4E3A;</strong></h3>
<p><code>trait</code> &#x7684;&#x672C;&#x8D28;&#x662F;&#x63CF;&#x8FF0;&#x4E00;&#x7EC4;&#x884C;&#x4E3A;&#x6216;&#x529F;&#x80FD;&#xFF0C;&#x4EFB;&#x4F55;&#x5B9E;&#x73B0;&#x8BE5; <code>trait</code> &#x7684;&#x7C7B;&#x578B;&#x90FD;&#x5FC5;&#x987B;&#x63D0;&#x4F9B;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x63CF;&#x8FF0;&#x5BF9;&#x8C61;&#x7684; trait"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x63CF;&#x8FF0;&#x5BF9;&#x8C61;&#x7684; trait"></a>&#x793A;&#x4F8B;&#xFF1A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x63CF;&#x8FF0;&#x5BF9;&#x8C61;&#x7684; <code>trait</code></h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Describable</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">describe</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-built_in">String</span>; <span class="hljs-comment">// &#x63CF;&#x8FF0;&#x884C;&#x4E3A;</span>
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Person</span></span> {
    name: <span class="hljs-built_in">String</span>,
    age: <span class="hljs-built_in">u32</span>,
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Car</span></span> {
    brand: <span class="hljs-built_in">String</span>,
    model: <span class="hljs-built_in">String</span>,
}

<span class="hljs-comment">// &#x4E3A; Person &#x5B9E;&#x73B0; Describable</span>
<span class="hljs-keyword">impl</span> Describable <span class="hljs-keyword">for</span> Person {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">describe</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-built_in">String</span> {
        <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;Person: {} is {} years old.&quot;</span>, <span class="hljs-keyword">self</span>.name, <span class="hljs-keyword">self</span>.age)
    }
}

<span class="hljs-comment">// &#x4E3A; Car &#x5B9E;&#x73B0; Describable</span>
<span class="hljs-keyword">impl</span> Describable <span class="hljs-keyword">for</span> Car {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">describe</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-built_in">String</span> {
        <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;Car: {} {}&quot;</span>, <span class="hljs-keyword">self</span>.brand, <span class="hljs-keyword">self</span>.model)
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> person = Person {
        name: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Alice&quot;</span>),
        age: <span class="hljs-number">30</span>,
    };
    <span class="hljs-keyword">let</span> car = Car {
        brand: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Tesla&quot;</span>),
        model: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Model 3&quot;</span>),
    };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, person.describe());
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, car.describe());
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#x884C;&#x4E3A;</strong>&#xFF1A;<code>trait</code> &#x5B9A;&#x4E49;&#x4E86;&#x901A;&#x7528;&#x884C;&#x4E3A; <code>describe</code>&#x3002;</li>
<li><strong>&#x591A;&#x6001;&#x6027;</strong>&#xFF1A;&#x4E0D;&#x540C;&#x7684;&#x7C7B;&#x578B;&#xFF08;<code>Person</code> &#x548C; <code>Car</code>&#xFF09;&#x901A;&#x8FC7;&#x5B9E;&#x73B0; <code>Describable</code> &#x53EF;&#x4EE5;&#x8868;&#x73B0;&#x51FA;&#x5404;&#x81EA;&#x7684;&#x884C;&#x4E3A;&#x3002;</li>
<li><strong>&#x9762;&#x5411;&#x63A5;&#x53E3;&#x7F16;&#x7A0B;</strong>&#xFF1A;&#x8C03;&#x7528;&#x4EE3;&#x7801;&#x53EA;&#x5173;&#x5FC3;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B9E;&#x73B0;&#x4E86; <code>Describable</code>&#xFF0C;&#x800C;&#x4E0D;&#x5173;&#x5FC3;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;&#x9759;&#x6001;&#x5206;&#x53D1;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;&#x9759;&#x6001;&#x5206;&#x53D1;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 2&#xFF1A;<strong>&#x9759;&#x6001;&#x5206;&#x53D1;</strong></h3>
<p>Rust &#x4E2D;&#x7684; <code>trait</code> &#x662F;<strong>&#x9759;&#x6001;&#x5206;&#x53D1;</strong>&#x7684;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x7F16;&#x8BD1;&#x5668;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x4F1A;&#x6839;&#x636E;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x7684;&#x5B9E;&#x73B0;&#x4EE3;&#x7801;&#xFF0C;&#x4ECE;&#x800C;&#x907F;&#x514D;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x5206;&#x53D1;&#x7684;&#x6253;&#x5370;&#x529F;&#x80FD;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x5206;&#x53D1;&#x7684;&#x6253;&#x5370;&#x529F;&#x80FD;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x9759;&#x6001;&#x5206;&#x53D1;&#x7684;&#x6253;&#x5370;&#x529F;&#x80FD;</h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Printable</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">print</span></span>(&amp;<span class="hljs-keyword">self</span>);
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Book</span></span> {
    title: <span class="hljs-built_in">String</span>,
    author: <span class="hljs-built_in">String</span>,
}

<span class="hljs-keyword">impl</span> Printable <span class="hljs-keyword">for</span> Book {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">print</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Book: {} by {}&quot;</span>, <span class="hljs-keyword">self</span>.title, <span class="hljs-keyword">self</span>.author);
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">display</span></span>&lt;T: Printable&gt;(item: T) {
    item.print();
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> book = Book {
        title: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;Rust Programming&quot;</span>),
        author: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;John Doe&quot;</span>),
    };

    display(book);
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x9759;&#x6001;&#x5206;&#x53D1;</strong>&#xFF1A;&#x7F16;&#x8BD1;&#x5668;&#x5728; <code>display</code> &#x51FD;&#x6570;&#x4E2D;&#x5185;&#x8054;&#x4E86; <code>Book</code> &#x7684; <code>print</code> &#x65B9;&#x6CD5;&#xFF0C;&#x6CA1;&#x6709;&#x8FD0;&#x884C;&#x65F6;&#x6210;&#x672C;&#x3002;</li>
<li><strong>&#x6CDB;&#x578B;&#x7EA6;&#x675F;</strong>&#xFF1A;&#x901A;&#x8FC7; <code>T: Printable</code>&#xFF0C;&#x786E;&#x4FDD;&#x4F20;&#x5165;&#x7684;&#x7C7B;&#x578B;&#x5FC5;&#x987B;&#x5B9E;&#x73B0; <code>Printable</code>&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;&#x52A8;&#x6001;&#x5206;&#x53D1;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;&#x52A8;&#x6001;&#x5206;&#x53D1;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 3&#xFF1A;<strong>&#x52A8;&#x6001;&#x5206;&#x53D1;</strong></h3>
<p>&#x901A;&#x8FC7; <code>dyn Trait</code>&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x52A8;&#x6001;&#x51B3;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E2A;&#x7C7B;&#x578B;&#x7684;&#x5B9E;&#x73B0;&#x3002;&#x52A8;&#x6001;&#x5206;&#x53D1;&#x4F7F;&#x7528;&#x6307;&#x9488;&#xFF08;&#x5982; <code>Box</code> &#x6216; <code>&amp;</code>&#xFF09;&#xFF0C;&#x5E76;&#x5E26;&#x6709;&#x4E00;&#x5B9A;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#x52A8;&#x6001;&#x5206;&#x53D1;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#x52A8;&#x6001;&#x5206;&#x53D1;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#x52A8;&#x6001;&#x5206;&#x53D1;</h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Draw</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">draw</span></span>(&amp;<span class="hljs-keyword">self</span>);
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Circle</span></span> {
    radius: <span class="hljs-built_in">f64</span>,
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
    width: <span class="hljs-built_in">f64</span>,
    height: <span class="hljs-built_in">f64</span>,
}

<span class="hljs-keyword">impl</span> Draw <span class="hljs-keyword">for</span> Circle {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">draw</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Drawing a Circle with radius {}&quot;</span>, <span class="hljs-keyword">self</span>.radius);
    }
}

<span class="hljs-keyword">impl</span> Draw <span class="hljs-keyword">for</span> Rectangle {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">draw</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Drawing a Rectangle with width {} and height {}&quot;</span>, <span class="hljs-keyword">self</span>.width, <span class="hljs-keyword">self</span>.height);
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> shapes: <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">Box</span>&lt;<span class="hljs-keyword">dyn</span> Draw&gt;&gt; = <span class="hljs-built_in">vec!</span>[
        <span class="hljs-built_in">Box</span>::new(Circle { radius: <span class="hljs-number">5.0</span> }),
        <span class="hljs-built_in">Box</span>::new(Rectangle { width: <span class="hljs-number">3.0</span>, height: <span class="hljs-number">4.0</span> }),
    ];

    <span class="hljs-keyword">for</span> shape <span class="hljs-keyword">in</span> shapes {
        shape.draw(); <span class="hljs-comment">// &#x52A8;&#x6001;&#x5206;&#x53D1;&#xFF1A;&#x8FD0;&#x884C;&#x65F6;&#x8C03;&#x7528;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x7684; \`draw\` &#x65B9;&#x6CD5;</span>
    }
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x52A8;&#x6001;&#x5206;&#x53D1;</strong>&#xFF1A;&#x4F7F;&#x7528; <code>dyn Trait</code>&#xFF0C;&#x4F7F;&#x5F97;&#x7A0B;&#x5E8F;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x901A;&#x8FC7;&#x865A;&#x8868;&#x67E5;&#x627E;&#x8C03;&#x7528;&#x6B63;&#x786E;&#x7684;&#x65B9;&#x6CD5;&#x3002;</li>
<li><strong>&#x6269;&#x5C55;&#x6027;</strong>&#xFF1A;<code>shapes</code> &#x4E2D;&#x53EF;&#x4EE5;&#x5BB9;&#x7EB3;&#x4EFB;&#x610F;&#x5B9E;&#x73B0;&#x4E86; <code>Draw</code> &#x7684;&#x7C7B;&#x578B;&#x3002;</li>
<li><strong>&#x7075;&#x6D3B;&#x6027;&#x4E0E;&#x6027;&#x80FD;&#x7684;&#x6743;&#x8861;</strong>&#xFF1A;&#x76F8;&#x6BD4;&#x9759;&#x6001;&#x5206;&#x53D1;&#xFF0C;&#x52A8;&#x6001;&#x5206;&#x53D1;&#x66F4;&#x7075;&#x6D3B;&#xFF0C;&#x4F46;&#x6709;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;&#x7EC4;&#x5408;&#x4E0E;&#x6269;&#x5C55;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;&#x7EC4;&#x5408;&#x4E0E;&#x6269;&#x5C55;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 4&#xFF1A;<strong>&#x7EC4;&#x5408;&#x4E0E;&#x6269;&#x5C55;</strong></h3>
<p>Rust &#x7684; <code>trait</code> &#x652F;&#x6301;&#x7EC4;&#x5408;&#x548C;&#x6269;&#x5C55;&#xFF0C;&#x901A;&#x8FC7;&#x5C06;&#x591A;&#x4E2A; <code>trait</code> &#x7EC4;&#x5408;&#xFF0C;&#x6216;&#x8005;&#x5B9A;&#x4E49;&#x7EE7;&#x627F;&#x5173;&#x7CFB;&#xFF0C;&#x521B;&#x5EFA;&#x66F4;&#x5F3A;&#x5927;&#x7684;&#x63A5;&#x53E3;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x7EC4;&#x5408;&#x591A;&#x4E2A; trait"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x7EC4;&#x5408;&#x591A;&#x4E2A; trait"></a>&#x793A;&#x4F8B;&#xFF1A;&#x7EC4;&#x5408;&#x591A;&#x4E2A; <code>trait</code></h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Flyable</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">fly</span></span>(&amp;<span class="hljs-keyword">self</span>);
}

<span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Swimable</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">swim</span></span>(&amp;<span class="hljs-keyword">self</span>);
}

<span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">SuperHero</span></span>: Flyable + Swimable {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">save_the_world</span></span>(&amp;<span class="hljs-keyword">self</span>);
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Hero</span></span>;

<span class="hljs-keyword">impl</span> Flyable <span class="hljs-keyword">for</span> Hero {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">fly</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Flying!&quot;</span>);
    }
}

<span class="hljs-keyword">impl</span> Swimable <span class="hljs-keyword">for</span> Hero {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">swim</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Swimming!&quot;</span>);
    }
}

<span class="hljs-keyword">impl</span> SuperHero <span class="hljs-keyword">for</span> Hero {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">save_the_world</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Saving the world!&quot;</span>);
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> hero = Hero;
    hero.fly();
    hero.swim();
    hero.save_the_world();
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x7EC4;&#x5408;</strong>&#xFF1A;<code>SuperHero</code> &#x7531; <code>Flyable</code> &#x548C; <code>Swimable</code> &#x7EC4;&#x5408;&#x800C;&#x6210;&#xFF0C;&#x5B9A;&#x4E49;&#x4E86;&#x66F4;&#x591A;&#x7684;&#x884C;&#x4E3A;&#x3002;</li>
<li><strong>&#x6269;&#x5C55;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5B9E;&#x73B0; <code>SuperHero</code>&#xFF0C;&#x81EA;&#x52A8;&#x7EE7;&#x627F;&#x4E86; <code>Flyable</code> &#x548C; <code>Swimable</code> &#x7684;&#x80FD;&#x529B;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x6838;&#x5FC3;&#x601D;&#x60F3; 5&#xFF1A;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3; 5&#xFF1A;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;"></a>&#x6838;&#x5FC3;&#x601D;&#x60F3; 5&#xFF1A;<strong>&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;</strong></h3>
<p><code>trait</code> &#x53EF;&#x4EE5;&#x4E3A;&#x65B9;&#x6CD5;&#x63D0;&#x4F9B;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#xFF0C;&#x7C7B;&#x578B;&#x5728;&#x5B9E;&#x73B0; <code>trait</code> &#x65F6;&#x53EF;&#x4EE5;&#x9009;&#x62E9;&#x8986;&#x76D6;&#x8FD9;&#x4E9B;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#x3002;</p>
<h4 id="&#x793A;&#x4F8B;&#xFF1A;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#x7684; trait"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#x7684; trait"></a>&#x793A;&#x4F8B;&#xFF1A;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#x7684; <code>trait</code></h4>
<pre><code class="language-rust"><span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Greeter</span></span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">greet</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Hello, world!&quot;</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Human</span></span>;
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Robot</span></span>;

<span class="hljs-keyword">impl</span> Greeter <span class="hljs-keyword">for</span> Human {} <span class="hljs-comment">// &#x4F7F;&#x7528;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;</span>

<span class="hljs-keyword">impl</span> Greeter <span class="hljs-keyword">for</span> Robot {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">greet</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Beep boop! Greetings, human.&quot;</span>);
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> human = Human;
    <span class="hljs-keyword">let</span> robot = Robot;

    human.greet(); <span class="hljs-comment">// &#x8C03;&#x7528;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;</span>
    robot.greet(); <span class="hljs-comment">// &#x8C03;&#x7528;&#x81EA;&#x5B9A;&#x4E49;&#x5B9E;&#x73B0;</span>
}
</code></pre>
<h4 id="&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;&#xFF1A;"></a><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x4F53;&#x73B0;</strong>&#xFF1A;</h4>
<ul>
<li><strong>&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;</strong>&#xFF1A;&#x51CF;&#x5C11;&#x4E86;&#x91CD;&#x590D;&#x4EE3;&#x7801;&#xFF0C;<code>Human</code> &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#x3002;</li>
<li><strong>&#x7075;&#x6D3B;&#x8986;&#x76D6;</strong>&#xFF1A;<code>Robot</code> &#x901A;&#x8FC7;&#x91CD;&#x8F7D;&#x63D0;&#x4F9B;&#x4E86;&#x81EA;&#x5B9A;&#x4E49;&#x5B9E;&#x73B0;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Rust &#x4E2D; <code>trait</code> &#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x5305;&#x62EC;&#xFF1A;</p>
<ol>
<li><strong>&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#x63A5;&#x53E3;</strong>&#xFF1A;&#x901A;&#x8FC7; <code>trait</code> &#x660E;&#x786E;&#x7C7B;&#x578B;&#x5FC5;&#x987B;&#x5B9E;&#x73B0;&#x7684;&#x529F;&#x80FD;&#x3002;</li>
<li><strong>&#x9759;&#x6001;&#x4E0E;&#x52A8;&#x6001;&#x5206;&#x53D1;</strong>&#xFF1A;&#x63D0;&#x4F9B;&#x96F6;&#x6210;&#x672C;&#x7684;&#x9759;&#x6001;&#x5206;&#x53D1;&#xFF0C;&#x6216;&#x652F;&#x6301;&#x7075;&#x6D3B;&#x7684;&#x52A8;&#x6001;&#x5206;&#x53D1;&#x3002;</li>
<li><strong>&#x7EC4;&#x5408;&#x4E0E;&#x6269;&#x5C55;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x7EC4;&#x5408;&#x6216;&#x7EE7;&#x627F;&#x6784;&#x5EFA;&#x5F3A;&#x5927;&#x7684;&#x63A5;&#x53E3;&#x3002;</li>
<li><strong>&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;</strong>&#xFF1A;&#x4E3A;&#x901A;&#x7528;&#x529F;&#x80FD;&#x63D0;&#x4F9B;&#x9ED8;&#x8BA4;&#x5B9E;&#x73B0;&#xFF0C;&#x51CF;&#x5C11;&#x91CD;&#x590D;&#x4EE3;&#x7801;&#x3002;</li>
</ol>
<p><code>trait</code> &#x662F; Rust &#x5B9E;&#x73B0;&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x3001;&#x591A;&#x6001;&#x6027;&#x548C;&#x7075;&#x6D3B;&#x6269;&#x5C55;&#x7684;&#x5173;&#x952E;&#x673A;&#x5236;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x6301;&#x4E86;&#x6027;&#x80FD;&#x7684;&#x9AD8;&#x6548;&#x6027;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:3,title:"核心思想 1：定义行为",children:[{level:4,title:"示例：定义一个可以描述对象的 trait",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 2：静态分发",children:[{level:4,title:"示例：静态分发的打印功能",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 3：动态分发",children:[{level:4,title:"示例：使用动态分发",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 4：组合与扩展",children:[{level:4,title:"示例：组合多个 trait",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"核心思想 5：默认实现",children:[{level:4,title:"示例：默认实现的 trait",children:[]},{level:4,title:"核心思想体现：",children:[]}]},{level:3,title:"总结",children:[]},{level:2,title:"参考",children:[]}];export{s as attributes,x as html,n as nestedHeaders};
