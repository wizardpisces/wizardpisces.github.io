const x={},F=`<h2 id="&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;"><a href="#&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;"></a>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</h2>
<p>Rust &#x7684;&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;&#x8D2F;&#x7A7F;&#x5176;&#x8BED;&#x8A00;&#x7684;&#x6838;&#x5FC3;&#x7279;&#x6027;&#xFF0C;&#x4ECE;&#x5B89;&#x5168;&#x6027;&#x5230;&#x6027;&#x80FD;&#xFF0C;&#x518D;&#x5230;&#x5F00;&#x53D1;&#x8005;&#x4F53;&#x9A8C;&#xFF0C;&#x5F62;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x5F3A;&#x5927;&#x4E14;&#x5E73;&#x8861;&#x7684;&#x7F16;&#x7A0B;&#x751F;&#x6001;&#x3002;</p>
<h3 id="0. &#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;"><a href="#0. &#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;"></a>0. <strong>&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;</strong></h3>
<ul>
<li>&#x6CDB;&#x578B;&#xFF1A;&#x7F16;&#x8BD1;&#x5668;&#x65F6;&#x5355;&#x6001;&#x5316;&#xFF0C;&#x7F16;&#x8BD1;&#x5668;&#x4E3A;&#x6BCF;&#x79CD;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x5B9E;&#x73B0;&#xFF0C;&#x4ECE;&#x800C;&#x6D88;&#x9664;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x7C7B;&#x578B;&#x68C0;&#x67E5;&#x6216;&#x591A;&#x6001;&#x5206;&#x6D3E;&#x3002;Rust &#x7684;&#x6CDB;&#x578B;&#x901A;&#x8FC7;<strong>&#x5355;&#x6001;&#x5316;</strong>&#xFF0C;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x4E3A;&#x6BCF;&#x79CD;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x5B9E;&#x73B0;&#xFF0C;&#x4ECE;&#x800C;&#x6D88;&#x9664;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x7C7B;&#x578B;&#x68C0;&#x67E5;&#x6216;&#x591A;&#x6001;&#x5206;&#x6D3E;&#x3002;</li>
<li>trait&#xFF1A;&#x5728;&#x6CDB;&#x578B;&#x548C; trait &#x9759;&#x6001;&#x5206;&#x53D1;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;Rust &#x7F16;&#x8BD1;&#x5668;&#x4F1A;&#x4E3A;&#x6BCF;&#x4E2A;&#x5177;&#x4F53;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x6240;&#x8C13;&#x7684; &#x5355;&#x6001;&#x5316;&#xFF08;monomorphization&#xFF09;&#x3002;</li>
</ul>
<hr>
<h3 id="1. &#x5185;&#x5B58;&#x5B89;&#x5168;&#xFF08;Memory Safety&#xFF09;"><a href="#1. &#x5185;&#x5B58;&#x5B89;&#x5168;&#xFF08;Memory Safety&#xFF09;"></a>1. <strong>&#x5185;&#x5B58;&#x5B89;&#x5168;&#xFF08;Memory Safety&#xFF09;</strong></h3>
<p>Rust &#x7684;&#x4E3B;&#x8981;&#x76EE;&#x6807;&#x662F;&#x907F;&#x514D; <strong>&#x5185;&#x5B58;&#x5B89;&#x5168;&#x95EE;&#x9898;</strong>&#xFF08;&#x5982;&#x7A7A;&#x6307;&#x9488;&#x89E3;&#x5F15;&#x7528;&#x3001;&#x7F13;&#x51B2;&#x533A;&#x6EA2;&#x51FA;&#x3001;&#x60AC;&#x5782;&#x6307;&#x9488;&#x7B49;&#xFF09;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x7F16;&#x8BD1;&#x65F6;&#x68C0;&#x67E5;&#x786E;&#x4FDD;&#x7A0B;&#x5E8F;&#x4E0D;&#x4F1A;&#x51FA;&#x73B0;&#x672A;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#xFF0C;&#x800C;&#x4E0D;&#x4F9D;&#x8D56;&#x5783;&#x573E;&#x56DE;&#x6536;&#xFF08;GC&#xFF09;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x6240;&#x6709;&#x6743;&#x7CFB;&#x7EDF;</strong>&#xFF1A;&#x6BCF;&#x5757;&#x5185;&#x5B58;&#x6709;&#x4E14;&#x4EC5;&#x6709;&#x4E00;&#x4E2A;&#x6240;&#x6709;&#x8005;&#x3002;</li>
<li><strong>&#x501F;&#x7528;&#x548C;&#x751F;&#x547D;&#x5468;&#x671F;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x501F;&#x7528;&#xFF08;&#x5F15;&#x7528;&#xFF09;&#x548C;&#x751F;&#x547D;&#x5468;&#x671F;&#x6807;&#x6CE8;&#x907F;&#x514D;&#x60AC;&#x5782;&#x6307;&#x9488;&#x3002;</li>
<li><strong>&#x4E0D;&#x53EF;&#x53D8;&#x6027;&#x9ED8;&#x8BA4;</strong>&#xFF1A;&#x9ED8;&#x8BA4;&#x4E0D;&#x53EF;&#x53D8;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF0C;&#x907F;&#x514D;&#x6570;&#x636E;&#x7ADE;&#x4E89;&#x95EE;&#x9898;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x4EE5; <strong>&#x96F6;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;</strong> &#x7684;&#x65B9;&#x5F0F;&#x5B9E;&#x73B0;&#x5185;&#x5B58;&#x5B89;&#x5168;&#x3002;</li>
</ul>
<p><strong>&#x793A;&#x4F8B;</strong>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> r1 = &amp;s; <span class="hljs-comment">// &#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-keyword">let</span> r2 = &amp;s; <span class="hljs-comment">// &#x518D;&#x6B21;&#x4E0D;&#x53EF;&#x53D8;&#x501F;&#x7528;</span>
    <span class="hljs-comment">// let r3 = &amp;mut s; // &#x9519;&#x8BEF;&#xFF1A;&#x4E0D;&#x80FD;&#x540C;&#x65F6;&#x6709;&#x53EF;&#x53D8;&#x548C;&#x4E0D;&#x53EF;&#x53D8;&#x5F15;&#x7528;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}, {}&quot;</span>, r1, r2);
}
</code></pre>
<hr>
<h3 id="2. &#x5E76;&#x53D1;&#x5B89;&#x5168;&#xFF08;Fearless Concurrency&#xFF09;"><a href="#2. &#x5E76;&#x53D1;&#x5B89;&#x5168;&#xFF08;Fearless Concurrency&#xFF09;"></a>2. <strong>&#x5E76;&#x53D1;&#x5B89;&#x5168;&#xFF08;Fearless Concurrency&#xFF09;</strong></h3>
<p>Rust &#x901A;&#x8FC7;&#x7F16;&#x8BD1;&#x65F6;&#x68C0;&#x67E5;&#xFF0C;&#x9632;&#x6B62;&#x5E38;&#x89C1;&#x7684;&#x5E76;&#x53D1;&#x9519;&#x8BEF;&#xFF08;&#x5982;&#x6570;&#x636E;&#x7ADE;&#x4E89;&#x548C;&#x6B7B;&#x9501;&#xFF09;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#x5728;&#x7F16;&#x8BD1;&#x9636;&#x6BB5;&#x786E;&#x4FDD;&#x5E76;&#x53D1;&#x4EE3;&#x7801;&#x7684;&#x5B89;&#x5168;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x6240;&#x6709;&#x6743;</strong>&#xFF1A;<code>Send</code> &#x548C; <code>Sync</code> trait &#x5B9A;&#x4E49;&#x4E86;&#x8DE8;&#x7EBF;&#x7A0B;&#x4F20;&#x9012;&#x548C;&#x5171;&#x4EAB;&#x7684;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&#x4E0D;&#x53D8;&#x91CF;&#x4FDD;&#x62A4;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x9501;&#xFF08;&#x5982; <code>Mutex</code>&#xFF09;&#x548C;&#x539F;&#x5B50;&#x64CD;&#x4F5C;&#xFF08;&#x5982; <code>Arc</code>&#xFF09;&#xFF0C;&#x786E;&#x4FDD;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x5F00;&#x53D1;&#x8005;&#x53EF;&#x4EE5;&#x7F16;&#x5199;&#x9AD8;&#x6548;&#x7684;&#x5E76;&#x53D1;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x4E0D;&#x5FC5;&#x5BB3;&#x6015;&#x6570;&#x636E;&#x7ADE;&#x4E89;&#x548C;&#x5176;&#x4ED6;&#x9690;&#x6666;&#x7684;&#x5E76;&#x53D1;&#x95EE;&#x9898;&#x3002;</li>
</ul>
<p><strong>&#x793A;&#x4F8B;</strong>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::sync::Arc;
<span class="hljs-keyword">use</span> std::thread;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> data = Arc::new(<span class="hljs-built_in">vec!</span>[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">// &#x5F15;&#x7528;&#x8BA1;&#x6570;&#x4FDD;&#x8BC1;&#x591A;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;</span>
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> handles = <span class="hljs-built_in">vec!</span>[];

    <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-number">0</span>..<span class="hljs-number">3</span> {
        <span class="hljs-keyword">let</span> data_clone = Arc::clone(&amp;data);
        <span class="hljs-keyword">let</span> handle = thread::spawn(<span class="hljs-keyword">move</span> || {
            <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, data_clone);
        });
        handles.push(handle);
    }

    <span class="hljs-keyword">for</span> handle <span class="hljs-keyword">in</span> handles {
        handle.join().unwrap();
    }
}
</code></pre>
<hr>
<h3 id="3. &#x7C7B;&#x578B;&#x5B89;&#x5168;&#x4E0E;&#x8868;&#x8FBE;&#x6027;&#xFF08;Type Safety and Expressiveness&#xFF09;"><a href="#3. &#x7C7B;&#x578B;&#x5B89;&#x5168;&#x4E0E;&#x8868;&#x8FBE;&#x6027;&#xFF08;Type Safety and Expressiveness&#xFF09;"></a>3. <strong>&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x4E0E;&#x8868;&#x8FBE;&#x6027;&#xFF08;Type Safety and Expressiveness&#xFF09;</strong></h3>
<p>Rust &#x7684;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#x901A;&#x8FC7;&#x9759;&#x6001;&#x68C0;&#x67E5;&#xFF0C;&#x786E;&#x4FDD;&#x7C7B;&#x578B;&#x6B63;&#x786E;&#x6027;&#xFF0C;&#x5E76;&#x4E3A;&#x5F00;&#x53D1;&#x8005;&#x63D0;&#x4F9B;&#x4E30;&#x5BCC;&#x7684;&#x8868;&#x8FBE;&#x80FD;&#x529B;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#x4E0D;&#x4EC5;&#x7528;&#x4E8E;&#x9519;&#x8BEF;&#x68C0;&#x6D4B;&#xFF0C;&#x8FD8;&#x8981;&#x63D0;&#x9AD8;&#x4EE3;&#x7801;&#x53EF;&#x8BFB;&#x6027;&#x548C;&#x8868;&#x8FBE;&#x529B;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x679A;&#x4E3E;&#xFF08;Enum&#xFF09;&#x548C;&#x6A21;&#x5F0F;&#x5339;&#x914D;&#xFF08;Pattern Matching&#xFF09;</strong>&#xFF1A;&#x63D0;&#x4F9B;&#x5F3A;&#x5927;&#x7684;&#x5206;&#x652F;&#x903B;&#x8F91;&#x63A7;&#x5236;&#x3002;</li>
<li><strong>&#x6CDB;&#x578B;&#x548C; trait</strong>&#xFF1A;&#x5B9E;&#x73B0;&#x7075;&#x6D3B;&#x7684;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x6301;&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x3002;</li>
<li><strong>Option &#x548C; Result &#x7C7B;&#x578B;</strong>&#xFF1A;&#x907F;&#x514D;&#x7A7A;&#x503C;&#x548C;&#x9519;&#x8BEF;&#x5904;&#x7406;&#x4E2D;&#x7684;&#x672A;&#x5B9A;&#x4E49;&#x884C;&#x4E3A;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x51CF;&#x5C11;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#xFF0C;&#x63D0;&#x9AD8;&#x4EE3;&#x7801;&#x7684;&#x9C81;&#x68D2;&#x6027;&#x548C;&#x53EF;&#x8BFB;&#x6027;&#x3002;</li>
</ul>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;Option &#x548C;&#x6A21;&#x5F0F;&#x5339;&#x914D;</strong>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">divide</span></span>(a: <span class="hljs-built_in">i32</span>, b: <span class="hljs-built_in">i32</span>) -&gt; <span class="hljs-built_in">Option</span>&lt;<span class="hljs-built_in">i32</span>&gt; {
    <span class="hljs-keyword">if</span> b == <span class="hljs-number">0</span> {
        <span class="hljs-literal">None</span>
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-literal">Some</span>(a / b)
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">match</span> divide(<span class="hljs-number">10</span>, <span class="hljs-number">2</span>) {
        <span class="hljs-literal">Some</span>(result) =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Result: {}&quot;</span>, result),
        <span class="hljs-literal">None</span> =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Cannot divide by zero&quot;</span>),
    }
}
</code></pre>
<hr>
<h3 id="4. &#x6027;&#x80FD;&#x4F18;&#x5148;&#xFF08;Performance Focused&#xFF09;"><a href="#4. &#x6027;&#x80FD;&#x4F18;&#x5148;&#xFF08;Performance Focused&#xFF09;"></a>4. <strong>&#x6027;&#x80FD;&#x4F18;&#x5148;&#xFF08;Performance Focused&#xFF09;</strong></h3>
<p>Rust &#x7684;&#x6027;&#x80FD;&#x63A5;&#x8FD1; C/C++&#xFF0C;&#x4F46;&#x4E0D;&#x4EE5;&#x5B89;&#x5168;&#x6027;&#x4E3A;&#x4EE3;&#x4EF7;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x63D0;&#x4F9B;&#x63A5;&#x8FD1;&#x786C;&#x4EF6;&#x7EA7;&#x7684;&#x6027;&#x80FD;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x6301;&#x5185;&#x5B58;&#x548C;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x65E0;&#x5783;&#x573E;&#x56DE;&#x6536;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x6240;&#x6709;&#x6743;&#x7CFB;&#x7EDF;&#x7BA1;&#x7406;&#x5185;&#x5B58;&#xFF0C;&#x907F;&#x514D; GC &#x5E26;&#x6765;&#x7684;&#x5EF6;&#x8FDF;&#x3002;</li>
<li><strong>&#x9AD8;&#x6548;&#x7684;&#x5E76;&#x53D1;&#x6A21;&#x578B;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x96F6;&#x5F00;&#x9500;&#x62BD;&#x8C61;&#xFF0C;&#x5141;&#x8BB8;&#x5F00;&#x53D1;&#x8005;&#x5B9E;&#x73B0;&#x9AD8;&#x6027;&#x80FD;&#x5E76;&#x53D1;&#x3002;</li>
<li><strong>LLVM &#x4F18;&#x5316;</strong>&#xFF1A;Rust &#x4F7F;&#x7528; LLVM &#x7F16;&#x8BD1;&#x5668;&#x540E;&#x7AEF;&#x751F;&#x6210;&#x9AD8;&#x6548;&#x673A;&#x5668;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x9002;&#x5408;&#x7CFB;&#x7EDF;&#x7EA7;&#x5F00;&#x53D1;&#x548C;&#x6027;&#x80FD;&#x654F;&#x611F;&#x7684;&#x573A;&#x666F;&#x3002;</li>
</ul>
<hr>
<h3 id="5. &#x5F00;&#x53D1;&#x8005;&#x4F53;&#x9A8C;&#xFF08;Developer Experience&#xFF09;"><a href="#5. &#x5F00;&#x53D1;&#x8005;&#x4F53;&#x9A8C;&#xFF08;Developer Experience&#xFF09;"></a>5. <strong>&#x5F00;&#x53D1;&#x8005;&#x4F53;&#x9A8C;&#xFF08;Developer Experience&#xFF09;</strong></h3>
<p>Rust &#x901A;&#x8FC7;&#x5DE5;&#x5177;&#x548C;&#x8BBE;&#x8BA1;&#x964D;&#x4F4E;&#x4E86;&#x590D;&#x6742;&#x8BED;&#x8A00;&#x7684;&#x5B66;&#x4E60;&#x6210;&#x672C;&#x548C;&#x5F00;&#x53D1;&#x95E8;&#x69DB;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x5373;&#x4F7F;&#x662F;&#x590D;&#x6742;&#x7684;&#x8BED;&#x8A00;&#xFF0C;&#x4E5F;&#x5E94;&#x5C3D;&#x53EF;&#x80FD;&#x53CB;&#x597D;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x53CB;&#x597D;&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x9519;&#x8BEF;&#x4FE1;&#x606F;</strong>&#xFF1A;&#x8BE6;&#x7EC6;&#x7684;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#x5E2E;&#x52A9;&#x5F00;&#x53D1;&#x8005;&#x5FEB;&#x901F;&#x5B9A;&#x4F4D;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>Cargo &#x5DE5;&#x5177;&#x94FE;</strong>&#xFF1A;&#x96C6;&#x6210;&#x5305;&#x7BA1;&#x7406;&#x3001;&#x6784;&#x5EFA;&#x3001;&#x6D4B;&#x8BD5;&#x548C;&#x53D1;&#x5E03;&#x529F;&#x80FD;&#x3002;</li>
<li><strong>&#x793E;&#x533A;&#x9A71;&#x52A8;&#x751F;&#x6001;</strong>&#xFF1A;&#x5B98;&#x65B9;&#x6587;&#x6863;&#x548C;&#x793E;&#x533A;&#x8D44;&#x6E90;&#x9F50;&#x5168;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x5E2E;&#x52A9;&#x5F00;&#x53D1;&#x8005;&#x4EE5;&#x66F4;&#x4F4E;&#x7684;&#x5FC3;&#x667A;&#x8D1F;&#x62C5;&#x7F16;&#x5199;&#x9AD8;&#x8D28;&#x91CF;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;&#x7F16;&#x8BD1;&#x5668;&#x7684;&#x53CB;&#x597D;&#x63D0;&#x793A;</strong>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">10</span>;
    x = <span class="hljs-number">20</span>; <span class="hljs-comment">// &#x7F16;&#x8BD1;&#x9519;&#x8BEF;&#xFF1A;x &#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x53D8;&#x91CF;</span>
}
</code></pre>
<p><strong>&#x9519;&#x8BEF;&#x4FE1;&#x606F;</strong>&#xFF1A;</p>
<pre><code>error[E0384]: cannot assign twice to immutable variable \`x\`
 --&gt; main.rs:3:5
  |
2 |     let x = 10;
  |         -
  |         |
  |         first assignment to \`x\`
3 |     x = 20;
  |     ^^^^^^ cannot assign twice to immutable variable
</code></pre>
<hr>
<h3 id="6. &#x6A21;&#x5757;&#x5316;&#x4E0E;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF08;Modularity and Reusability&#xFF09;"><a href="#6. &#x6A21;&#x5757;&#x5316;&#x4E0E;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF08;Modularity and Reusability&#xFF09;"></a>6. <strong>&#x6A21;&#x5757;&#x5316;&#x4E0E;&#x4EE3;&#x7801;&#x590D;&#x7528;&#xFF08;Modularity and Reusability&#xFF09;</strong></h3>
<p>Rust &#x63D0;&#x4F9B;&#x4E86;&#x5F3A;&#x5927;&#x7684;&#x6A21;&#x5757;&#x7CFB;&#x7EDF;&#x548C;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;&#x5DE5;&#x5177;&#xFF0C;&#x65B9;&#x4FBF;&#x5F00;&#x53D1;&#x8005;&#x7EC4;&#x7EC7;&#x4EE3;&#x7801;&#x548C;&#x590D;&#x7528;&#x73B0;&#x6709;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x6A21;&#x5757;&#x5316;&#x8BBE;&#x8BA1;&#x63D0;&#x9AD8;&#x53EF;&#x7EF4;&#x62A4;&#x6027;&#x548C;&#x590D;&#x7528;&#x6027;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>&#x6A21;&#x5757;&#x548C;&#x5305;&#x7BA1;&#x7406;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x6A21;&#x5757;&#x548C; <code>crate</code> &#x7CFB;&#x7EDF;&#x5B9E;&#x73B0;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x3002;</li>
<li><strong>Cargo</strong>&#xFF1A;&#x6807;&#x51C6;&#x5316;&#x7684;&#x5305;&#x7BA1;&#x7406;&#x5668;&#xFF0C;&#x63D0;&#x4F9B;&#x7EDF;&#x4E00;&#x7684;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;&#x548C;&#x7248;&#x672C;&#x63A7;&#x5236;&#x3002;</li>
<li><strong>trait &#x548C;&#x6CDB;&#x578B;</strong>&#xFF1A;&#x5B9E;&#x73B0;&#x7075;&#x6D3B;&#x7684;&#x4EE3;&#x7801;&#x590D;&#x7528;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x51CF;&#x5C11;&#x91CD;&#x590D;&#x4EE3;&#x7801;&#xFF0C;&#x63D0;&#x9AD8;&#x56E2;&#x961F;&#x534F;&#x4F5C;&#x6548;&#x7387;&#x3002;</li>
</ul>
<hr>
<h3 id="7. &#x5B89;&#x5168;&#x4E0E;&#x7075;&#x6D3B;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF08;Error Handling&#xFF09;"><a href="#7. &#x5B89;&#x5168;&#x4E0E;&#x7075;&#x6D3B;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF08;Error Handling&#xFF09;"></a>7. <strong>&#x5B89;&#x5168;&#x4E0E;&#x7075;&#x6D3B;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF08;Error Handling&#xFF09;</strong></h3>
<p>Rust &#x5F3A;&#x8C03;&#x663E;&#x5F0F;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF0C;&#x907F;&#x514D;&#x9690;&#x5F0F;&#x5931;&#x8D25;&#x3002;</p>
<ul>
<li><strong>&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#x5F3A;&#x5236;&#x5904;&#x7406;&#x9519;&#x8BEF;&#xFF0C;&#x63D0;&#x5347;&#x7A0B;&#x5E8F;&#x53EF;&#x9760;&#x6027;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x5B9E;&#x73B0;</strong>&#xFF1A;
<ul>
<li><strong>Result &#x7C7B;&#x578B;</strong>&#xFF1A;&#x901A;&#x8FC7; <code>Ok</code> &#x548C; <code>Err</code> &#x660E;&#x786E;&#x8868;&#x793A;&#x64CD;&#x4F5C;&#x6210;&#x529F;&#x6216;&#x5931;&#x8D25;&#x3002;</li>
<li><strong><code>?</code> &#x64CD;&#x4F5C;&#x7B26;</strong>&#xFF1A;&#x7B80;&#x5316;&#x9519;&#x8BEF;&#x4F20;&#x64AD;&#x3002;</li>
<li><strong>panic! &#x548C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x9519;&#x8BEF;</strong>&#xFF1A;&#x7528;&#x4E8E;&#x5904;&#x7406;&#x6781;&#x7AEF;&#x60C5;&#x51B5;&#x3002;</li>
</ul>
</li>
<li><strong>&#x610F;&#x4E49;</strong>&#xFF1A;&#x63D0;&#x9AD8;&#x9519;&#x8BEF;&#x5904;&#x7406;&#x7684;&#x53EF;&#x8BFB;&#x6027;&#x548C;&#x5B89;&#x5168;&#x6027;&#x3002;</li>
</ul>
<p><strong>&#x793A;&#x4F8B;&#xFF1A;Result &#x548C; <code>?</code> &#x64CD;&#x4F5C;&#x7B26;</strong>&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::fs::File;
<span class="hljs-keyword">use</span> std::io::{<span class="hljs-keyword">self</span>, Read};

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">read_file</span></span>(path: &amp;<span class="hljs-built_in">str</span>) -&gt; io::<span class="hljs-built_in">Result</span>&lt;<span class="hljs-built_in">String</span>&gt; {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> file = File::open(path)?;
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> content = <span class="hljs-built_in">String</span>::new();
    file.read_to_string(&amp;<span class="hljs-keyword">mut</span> content)?;
    <span class="hljs-literal">Ok</span>(content)
}
</code></pre>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Rust &#x7684;&#x6838;&#x5FC3;&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;&#x662F;&#x591A;&#x4E2A;&#x65B9;&#x9762;&#x7684;&#x7EFC;&#x5408;&#x5E73;&#x8861;&#xFF0C;&#x5B83;&#x4EEC;&#x5171;&#x540C;&#x6784;&#x6210;&#x4E86; Rust &#x7684;&#x72EC;&#x7279;&#x6027;&#xFF1A;</p>
<ol>
<li><strong>&#x96F6;&#x6210;&#x672C;&#x62BD;&#x8C61;</strong>&#xFF1A;&#x9AD8;&#x6548;&#x4E14;&#x7075;&#x6D3B;&#x7684;&#x8BED;&#x8A00;&#x7279;&#x6027;&#x3002;</li>
<li><strong>&#x5185;&#x5B58;&#x5B89;&#x5168;</strong>&#xFF1A;&#x65E0; GC &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x675C;&#x7EDD;&#x5185;&#x5B58;&#x9519;&#x8BEF;&#x3002;</li>
<li><strong>&#x5E76;&#x53D1;&#x5B89;&#x5168;</strong>&#xFF1A;&#x8BA9;&#x591A;&#x7EBF;&#x7A0B;&#x7F16;&#x7A0B;&#x66F4;&#x5B89;&#x5168;&#x3001;&#x66F4;&#x9AD8;&#x6548;&#x3002;</li>
<li><strong>&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x4E0E;&#x8868;&#x8FBE;&#x6027;</strong>&#xFF1A;&#x9759;&#x6001;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#x63D0;&#x5347;&#x53EF;&#x9760;&#x6027;&#x548C;&#x5F00;&#x53D1;&#x4F53;&#x9A8C;&#x3002;</li>
<li><strong>&#x6027;&#x80FD;&#x4F18;&#x5148;</strong>&#xFF1A;&#x63A5;&#x8FD1; C/C++ &#x7684;&#x6027;&#x80FD;&#x8868;&#x73B0;&#x3002;</li>
<li><strong>&#x5F00;&#x53D1;&#x8005;&#x4F53;&#x9A8C;</strong>&#xFF1A;&#x53CB;&#x597D;&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x548C;&#x5DE5;&#x5177;&#x94FE;&#x3002;</li>
<li><strong>&#x6A21;&#x5757;&#x5316;&#x4E0E;&#x4EE3;&#x7801;&#x590D;&#x7528;</strong>&#xFF1A;&#x5F3A;&#x5927;&#x7684;&#x6A21;&#x5757;&#x548C;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;&#x3002;</li>
<li><strong>&#x663E;&#x5F0F;&#x9519;&#x8BEF;&#x5904;&#x7406;</strong>&#xFF1A;&#x7C7B;&#x578B;&#x9A71;&#x52A8;&#x7684;&#x9519;&#x8BEF;&#x5904;&#x7406;&#x673A;&#x5236;&#x3002;</li>
</ol>
<p>&#x8FD9;&#x4E9B;&#x7406;&#x5FF5;&#x8BA9; Rust &#x6210;&#x4E3A;&#x4E00;&#x95E8;&#x517C;&#x5177;&#x5B89;&#x5168;&#x6027;&#x3001;&#x6027;&#x80FD;&#x548C;&#x5F00;&#x53D1;&#x6548;&#x7387;&#x7684;&#x73B0;&#x4EE3;&#x7CFB;&#x7EDF;&#x7EA7;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:2,title:"设计理念",children:[{level:3,title:"0. 零成本抽象",children:[]},{level:3,title:"1. 内存安全（Memory Safety）",children:[]},{level:3,title:"2. 并发安全（Fearless Concurrency）",children:[]},{level:3,title:"3. 类型安全与表达性（Type Safety and Expressiveness）",children:[]},{level:3,title:"4. 性能优先（Performance Focused）",children:[]},{level:3,title:"5. 开发者体验（Developer Experience）",children:[]},{level:3,title:"6. 模块化与代码复用（Modularity and Reusability）",children:[]},{level:3,title:"7. 安全与灵活的错误处理（Error Handling）",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"参考",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
