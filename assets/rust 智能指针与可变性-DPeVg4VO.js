const x={},s=`<p>Rust &#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;&#x662F;&#x4E00;&#x79CD;&#x5C01;&#x88C5;&#x4E86;&#x6307;&#x9488;&#x884C;&#x4E3A;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF0C;&#x5B83;&#x4E0D;&#x4EC5;&#x80FD;&#x50CF;&#x666E;&#x901A;&#x6307;&#x9488;&#x90A3;&#x6837;&#x8BBF;&#x95EE;&#x6570;&#x636E;&#xFF0C;&#x8FD8;&#x9644;&#x52A0;&#x4E86;&#x66F4;&#x591A;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x6BD4;&#x5982;&#x6240;&#x6709;&#x6743;&#x7BA1;&#x7406;&#x3001;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x6216;&#x5185;&#x5B58;&#x81EA;&#x52A8;&#x56DE;&#x6536;&#x3002;&#x5E38;&#x89C1;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;&#x6709; <code>Box</code>&#x3001;<code>Rc</code>&#x3001;<code>Arc</code> &#x548C; <code>RefCell</code>&#x3002;&#x4E0B;&#x9762;&#x901A;&#x8FC7;&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#x8BB2;&#x89E3;&#x8FD9;&#x4E9B;&#x667A;&#x80FD;&#x6307;&#x9488;&#x53CA;&#x5176;&#x4F7F;&#x7528;&#x573A;&#x666F;&#x3002;</p>
<h2 id="&#x667A;&#x80FD;&#x6307;&#x9488;"><a href="#&#x667A;&#x80FD;&#x6307;&#x9488;"></a>&#x667A;&#x80FD;&#x6307;&#x9488;</h2>
<hr>
<h3 id="1. Box&lt;T&gt;: &#x5806;&#x4E0A;&#x5B58;&#x50A8;&#x6570;&#x636E;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;"><a href="#1. Box&lt;T&gt;: &#x5806;&#x4E0A;&#x5B58;&#x50A8;&#x6570;&#x636E;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;"></a>1. <code>Box&lt;T&gt;</code>: &#x5806;&#x4E0A;&#x5B58;&#x50A8;&#x6570;&#x636E;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;</h3>
<p><code>Box</code> &#x662F;&#x6700;&#x7B80;&#x5355;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF0C;&#x7528;&#x4E8E;&#x5C06;&#x6570;&#x636E;&#x5B58;&#x50A8;&#x5728;&#x5806;&#x4E0A;&#x800C;&#x4E0D;&#x662F;&#x6808;&#x4E0A;&#x3002;</p>
<p><strong>&#x4F7F;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x6570;&#x636E;&#x7684;&#x5927;&#x5C0F;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x4E0D;&#x786E;&#x5B9A;&#xFF0C;&#x6216;&#x8005;&#x9700;&#x8981;&#x9012;&#x5F52;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;&#x5982;&#x94FE;&#x8868;&#x3001;&#x6811;&#x7B49;&#xFF09;&#x3002;</li>
</ul>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> boxed_value = <span class="hljs-built_in">Box</span>::new(<span class="hljs-number">42</span>); <span class="hljs-comment">// &#x5C06;&#x503C;&#x5B58;&#x50A8;&#x5728;&#x5806;&#x4E0A;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Boxed value: {}&quot;</span>, boxed_value);
}
</code></pre>
<hr>
<h3 id="2. Rc&lt;T&gt;: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;"><a href="#2. Rc&lt;T&gt;: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;"></a>2. <code>Rc&lt;T&gt;</code>: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;</h3>
<p><code>Rc</code>&#xFF08;Reference Counted&#xFF09;&#x5141;&#x8BB8;&#x5728;&#x5355;&#x7EBF;&#x7A0B;&#x4E2D;&#x591A;&#x4E2A;&#x6240;&#x6709;&#x8005;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x3002;&#x5B83;&#x901A;&#x8FC7;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x6765;&#x8DDF;&#x8E2A;&#x6570;&#x636E;&#x7684;&#x6240;&#x6709;&#x6743;&#x3002;</p>
<p><strong>&#x4F7F;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x9700;&#x8981;&#x5171;&#x4EAB;&#x4E0D;&#x53EF;&#x53D8;&#x6570;&#x636E;&#xFF0C;&#x4E14;&#x6570;&#x636E;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x4E0D;&#x660E;&#x786E;&#x65F6;&#xFF08;&#x5982;&#x5728;&#x56FE;&#x6216;&#x6811;&#x7ED3;&#x6784;&#x4E2D;&#x591A;&#x4E2A;&#x8282;&#x70B9;&#x5171;&#x4EAB;&#x6570;&#x636E;&#xFF09;&#x3002;</li>
</ul>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::rc::Rc;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rc_value = Rc::new(<span class="hljs-number">42</span>);
    <span class="hljs-keyword">let</span> rc_clone1 = Rc::clone(&amp;rc_value);
    <span class="hljs-keyword">let</span> rc_clone2 = Rc::clone(&amp;rc_value);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Rc value: {}&quot;</span>, rc_value);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Rc clone1: {}&quot;</span>, rc_clone1);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Rc clone2: {}&quot;</span>, rc_clone2);

    <span class="hljs-comment">// &#x5F15;&#x7528;&#x8BA1;&#x6570;&#x589E;&#x52A0;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Reference count: {}&quot;</span>, Rc::strong_count(&amp;rc_value));
}
</code></pre>
<hr>
<h3 id="3. Arc&lt;T&gt;: &#x591A;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;"><a href="#3. Arc&lt;T&gt;: &#x591A;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;"></a>3. <code>Arc&lt;T&gt;</code>: &#x591A;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;</h3>
<p><code>Arc</code>&#xFF08;Atomic Reference Counted&#xFF09;&#x662F;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x667A;&#x80FD;&#x6307;&#x9488;&#xFF0C;&#x9002;&#x5408;&#x591A;&#x7EBF;&#x7A0B;&#x73AF;&#x5883;&#x3002;</p>
<p><strong>&#x4F7F;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x9700;&#x8981;&#x5728;&#x591A;&#x7EBF;&#x7A0B;&#x4E4B;&#x95F4;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x65F6;&#x4F7F;&#x7528;&#x3002;</li>
</ul>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::sync::Arc;
<span class="hljs-keyword">use</span> std::thread;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> arc_value = Arc::new(<span class="hljs-number">42</span>);

    <span class="hljs-keyword">let</span> handles: <span class="hljs-built_in">Vec</span>&lt;_&gt; = (<span class="hljs-number">0</span>..<span class="hljs-number">4</span>).map(|_| {
        <span class="hljs-keyword">let</span> arc_clone = Arc::clone(&amp;arc_value);
        thread::spawn(<span class="hljs-keyword">move</span> || {
            <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Value in thread: {}&quot;</span>, arc_clone);
        })
    }).collect();

    <span class="hljs-keyword">for</span> handle <span class="hljs-keyword">in</span> handles {
        handle.join().unwrap();
    }
}
</code></pre>
<hr>
<h3 id="4. RefCell&lt;T&gt;: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5185;&#x90E8;&#x53EF;&#x53D8;&#x6027;"><a href="#4. RefCell&lt;T&gt;: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5185;&#x90E8;&#x53EF;&#x53D8;&#x6027;"></a>4. <code>RefCell&lt;T&gt;</code>: &#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x7684;&#x5185;&#x90E8;&#x53EF;&#x53D8;&#x6027;</h3>
<p><code>RefCell</code> &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x201C;&#x5185;&#x90E8;&#x53EF;&#x53D8;&#x6027;&#x201D;&#x673A;&#x5236;&#xFF0C;&#x5373;&#x5373;&#x4F7F;&#x5916;&#x90E8;&#x4E0D;&#x53EF;&#x53D8;&#xFF0C;&#x4E5F;&#x80FD;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x501F;&#x7528;&#x53EF;&#x53D8;&#x5F15;&#x7528;&#xFF08;&#x52A8;&#x6001;&#x68C0;&#x67E5;&#xFF09;&#x3002;</p>
<p><strong>&#x4F7F;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x4F60;&#x9700;&#x8981;&#x5728;&#x4E0D;&#x53EF;&#x53D8;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x4E2D;&#x4FEE;&#x6539;&#x6570;&#x636E;&#xFF0C;&#x4F46;&#x65E0;&#x6CD5;&#x4F7F;&#x7528;&#x53EF;&#x53D8;&#x5F15;&#x7528;&#x65F6;&#x3002;</li>
</ul>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::cell::RefCell;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> ref_cell_value = RefCell::new(<span class="hljs-number">42</span>);

    <span class="hljs-comment">// &#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    *ref_cell_value.borrow_mut() += <span class="hljs-number">1</span>;

    <span class="hljs-comment">// &#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;RefCell value: {}&quot;</span>, ref_cell_value.borrow());
}
</code></pre>
<p><strong>&#x6CE8;&#x610F;</strong>&#xFF1A;<code>RefCell</code> &#x53EA;&#x9002;&#x7528;&#x4E8E;&#x5355;&#x7EBF;&#x7A0B;&#xFF0C;&#x4E14;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x501F;&#x7528;&#x89C4;&#x5219;&#x8FDD;&#x53CD;&#x65F6;&#x4F1A;&#x89E6;&#x53D1; panic&#x3002;</p>
<hr>
<h3 id="&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x793A;&#x4F8B;"><a href="#&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x793A;&#x4F8B;"></a>&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x793A;&#x4F8B;</h3>
<p>&#x5728;&#x5B9E;&#x9645;&#x9879;&#x76EE;&#x4E2D;&#xFF0C;&#x5E38;&#x5E38;&#x9700;&#x8981;&#x5C06;&#x8FD9;&#x4E9B;&#x667A;&#x80FD;&#x6307;&#x9488;&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4F7F;&#x7528; <code>Rc&lt;RefCell&lt;T&gt;&gt;</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5171;&#x4EAB;&#x7684;&#x3001;&#x53EF;&#x53D8;&#x7684;&#x6811;&#x8282;&#x70B9;&#x3002;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::rc::Rc;
<span class="hljs-keyword">use</span> std::cell::RefCell;

<span class="hljs-meta">#[derive(Debug)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Node</span></span> {
    value: <span class="hljs-built_in">i32</span>,
    children: <span class="hljs-built_in">Vec</span>&lt;Rc&lt;RefCell&lt;Node&gt;&gt;&gt;,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> root = Rc::new(RefCell::new(Node {
        value: <span class="hljs-number">1</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    }));

    <span class="hljs-keyword">let</span> child1 = Rc::new(RefCell::new(Node {
        value: <span class="hljs-number">2</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    }));

    <span class="hljs-keyword">let</span> child2 = Rc::new(RefCell::new(Node {
        value: <span class="hljs-number">3</span>,
        children: <span class="hljs-built_in">vec!</span>[],
    }));

    root.borrow_mut().children.push(child1.clone());
    root.borrow_mut().children.push(child2.clone());

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Root node: {:?}&quot;</span>, root);
}
</code></pre>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<ul>
<li><strong><code>Box</code></strong>&#xFF1A;&#x5806;&#x4E0A;&#x5B58;&#x50A8;&#x5355;&#x4E00;&#x6240;&#x6709;&#x8005;&#x7684;&#x6570;&#x636E;&#x3002;</li>
<li><strong><code>Rc</code></strong>&#xFF1A;&#x5355;&#x7EBF;&#x7A0B;&#x4E0B;&#x5171;&#x4EAB;&#x4E0D;&#x53EF;&#x53D8;&#x6570;&#x636E;&#x3002;</li>
<li><strong><code>Arc</code></strong>&#xFF1A;&#x591A;&#x7EBF;&#x7A0B;&#x4E0B;&#x5171;&#x4EAB;&#x4E0D;&#x53EF;&#x53D8;&#x6570;&#x636E;&#x3002;</li>
<li><strong><code>RefCell</code></strong>&#xFF1A;&#x5355;&#x7EBF;&#x7A0B;&#x4E2D;&#x63D0;&#x4F9B;&#x5185;&#x90E8;&#x53EF;&#x53D8;&#x6027;&#x3002;</li>
<li><strong>&#x7EC4;&#x5408;&#x4F7F;&#x7528;</strong>&#xFF1A;&#x4F8B;&#x5982; <code>Rc&lt;RefCell&lt;T&gt;&gt;</code> &#x7528;&#x4E8E;&#x5171;&#x4EAB;&#x548C;&#x4FEE;&#x6539;&#x6570;&#x636E;&#x3002;</li>
</ul>
<p>&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x667A;&#x80FD;&#x6307;&#x9488;&#x53D6;&#x51B3;&#x4E8E;&#x5177;&#x4F53;&#x7684;&#x9700;&#x6C42;&#xFF1A;&#x662F;&#x5426;&#x9700;&#x8981;&#x591A;&#x7EBF;&#x7A0B;&#x652F;&#x6301;&#xFF1F;&#x662F;&#x5426;&#x9700;&#x8981;&#x53EF;&#x53D8;&#x6027;&#xFF1F;&#x662F;&#x5426;&#x9700;&#x8981;&#x5171;&#x4EAB;&#xFF1F;&#x6839;&#x636E;&#x8FD9;&#x4E9B;&#x56E0;&#x7D20;&#x8FDB;&#x884C;&#x51B3;&#x7B56;&#x5373;&#x53EF;&#x3002;</p>
<h1 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h1>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:2,title:"智能指针",children:[{level:3,title:"1. Box<T>: 堆上存储数据的智能指针",children:[]},{level:3,title:"2. Rc<T>: 单线程下的引用计数智能指针",children:[]},{level:3,title:"3. Arc<T>: 多线程下的引用计数智能指针",children:[]},{level:3,title:"4. RefCell<T>: 单线程下的内部可变性",children:[]},{level:3,title:"组合使用示例",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
