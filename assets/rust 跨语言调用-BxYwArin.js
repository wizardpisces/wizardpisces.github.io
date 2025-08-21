const x={},s=`<h2 id="rust &#x4E0E; c &#x7684;&#x8C03;&#x7528;"><a href="#rust &#x4E0E; c &#x7684;&#x8C03;&#x7528;"></a>rust &#x4E0E; c &#x7684;&#x8C03;&#x7528;</h2>
<p>Rust &#x80FD;&#x4E0E; C &#x4EA4;&#x4E92;&#x7684;&#x539F;&#x56E0;&#x5728;&#x4E8E;&#x5B83;&#x548C; C &#x90FD;&#x53EF;&#x4EE5;&#x9075;&#x5FAA; C ABI&#xFF08;Application Binary Interface&#xFF0C;&#x5E94;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x63A5;&#x53E3;&#xFF09;&#x3002;C ABI &#x662F;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x65E0;&#x5173;&#x7684;&#x6807;&#x51C6;&#xFF0C;&#x89C4;&#x5B9A;&#x4E86;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x3001;&#x53C2;&#x6570;&#x4F20;&#x9012;&#x3001;&#x5185;&#x5B58;&#x5BF9;&#x9F50;&#x7B49;&#x673A;&#x5236;&#xFF0C;&#x786E;&#x4FDD;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x751F;&#x6210;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x4EE3;&#x7801;&#x80FD;&#x591F;&#x4E92;&#x64CD;&#x4F5C;&#x3002;</p>
<hr>
<h3 id="C ABI &#x7684;&#x4F5C;&#x7528;"><a href="#C ABI &#x7684;&#x4F5C;&#x7528;"></a><strong>C ABI &#x7684;&#x4F5C;&#x7528;</strong></h3>
<p>C ABI &#x5B9A;&#x4E49;&#x4E86;&#x4E00;&#x79CD;&#x201C;&#x89C4;&#x5219;&#x201D;&#xFF0C;&#x8BA9;&#x4E0D;&#x540C;&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x6309;&#x7167;&#x7EDF;&#x4E00;&#x7684;&#x65B9;&#x5F0F;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x6216;&#x4F20;&#x9012;&#x6570;&#x636E;&#x3002;<br>
&#x5C31;&#x597D;&#x6BD4;&#x8BED;&#x8A00;&#x4E4B;&#x95F4;&#x7684;&#x201C;&#x7FFB;&#x8BD1;&#x534F;&#x8BAE;&#x201D;&#xFF0C;&#x53EA;&#x8981;&#x4E24;&#x8FB9;&#x90FD;&#x9075;&#x5FAA;&#x540C;&#x6837;&#x7684;&#x534F;&#x8BAE;&#xFF0C;&#x5C31;&#x80FD;&#x4E92;&#x76F8;&#x7406;&#x89E3;&#x3002;</p>
<hr>
<h3 id="&#x4E00;&#x4E2A;&#x8D85;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;&#x8BA9; Rust &#x8C03;&#x7528; C &#x51FD;&#x6570;"><a href="#&#x4E00;&#x4E2A;&#x8D85;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;&#x8BA9; Rust &#x8C03;&#x7528; C &#x51FD;&#x6570;"></a><strong>&#x4E00;&#x4E2A;&#x8D85;&#x7B80;&#x5355;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;&#x8BA9; Rust &#x8C03;&#x7528; C &#x51FD;&#x6570;</strong></h3>
<p>&#x6211;&#x4EEC;&#x5148;&#x5199;&#x4E00;&#x4E2A; C &#x51FD;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x7528; Rust &#x8C03;&#x7528;&#x5B83;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5199; C &#x7684;&#x4EE3;&#x7801;</strong></p>
<pre><code class="language-c"><span class="hljs-comment">// &#x6587;&#x4EF6;&#x540D;&#xFF1A;example.c</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">add</span><span class="hljs-params">(<span class="hljs-keyword">int</span> a, <span class="hljs-keyword">int</span> b)</span> </span>{
    <span class="hljs-keyword">return</span> a + b;
}
</code></pre>
<p>&#x7136;&#x540E;&#x6211;&#x4EEC;&#x7528; <code>gcc</code> &#x628A;&#x8FD9;&#x4E2A; C &#x6587;&#x4EF6;&#x7F16;&#x8BD1;&#x6210;&#x4E00;&#x4E2A;&#x5171;&#x4EAB;&#x5E93;&#xFF08;&#x6BD4;&#x5982; <code>libexample.so</code> &#x6216; <code>example.dll</code>&#xFF09;&#xFF1A;</p>
<pre><code class="language-bash">gcc -shared -o libexample.so example.c
</code></pre>
<p><strong>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x5199; Rust &#x7684;&#x4EE3;&#x7801;&#x8C03;&#x7528;&#x8FD9;&#x4E2A; C &#x51FD;&#x6570;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">add</span></span>(a: <span class="hljs-built_in">i32</span>, b: <span class="hljs-built_in">i32</span>) -&gt; <span class="hljs-built_in">i32</span>; <span class="hljs-comment">// &#x544A;&#x8BC9; Rust &#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x6765;&#x81EA; C</span>
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">unsafe</span> {
        <span class="hljs-keyword">let</span> result = add(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// &#x8C03;&#x7528; C &#x7684; add &#x51FD;&#x6570;</span>
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;3 + 4 = {}&quot;</span>, result); <span class="hljs-comment">// &#x8F93;&#x51FA;&#xFF1A;3 + 4 = 7</span>
    }
}
</code></pre>
<p><strong>&#x8FD0;&#x884C;&#x6B65;&#x9AA4;&#xFF1A;</strong></p>
<ol>
<li>&#x7528; Rust &#x7F16;&#x8BD1;&#x8FD0;&#x884C;&#x8FD9;&#x4E2A;&#x6587;&#x4EF6;&#x65F6;&#xFF0C;&#x544A;&#x8BC9;&#x5B83;&#x8981;&#x94FE;&#x63A5; <code>libexample.so</code>&#xFF08;&#x52A8;&#x6001;&#x5E93;&#xFF09;&#xFF1A;<pre><code class="language-bash">rustc main.rs -L . -l example
./main
</code></pre>
&#x8F93;&#x51FA;&#x7ED3;&#x679C;&#x4E3A;&#xFF1A;<code>3 + 4 = 7</code>&#x3002;</li>
</ol>
<hr>
<h3 id="&#x62C6;&#x89E3;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;"><a href="#&#x62C6;&#x89E3;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;"></a><strong>&#x62C6;&#x89E3;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;</strong></h3>
<ol>
<li>
<p><strong>C &#x7F16;&#x8BD1;&#x5668;&#x7684;&#x4F5C;&#x7528;</strong>&#xFF1A;</p>
<ul>
<li>C &#x7F16;&#x8BD1;&#x5668;&#x628A; <code>add</code> &#x51FD;&#x6570;&#x7F16;&#x8BD1;&#x6210;&#x673A;&#x5668;&#x7801;&#xFF0C;&#x5E76;&#x5B58;&#x5230;&#x5171;&#x4EAB;&#x5E93;&#x91CC;&#xFF08;<code>libexample.so</code>&#xFF09;&#x3002;</li>
<li>&#x8FD9;&#x4E2A;&#x5171;&#x4EAB;&#x5E93;&#x5BF9;&#x5916;&#x66B4;&#x9732;&#x4E86;&#x51FD;&#x6570; <code>add</code> &#x7684;&#x5730;&#x5740;&#x548C;&#x8C03;&#x7528;&#x65B9;&#x5F0F;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>Rust &#x7684;&#x4F5C;&#x7528;</strong>&#xFF1A;</p>
<ul>
<li>Rust &#x901A;&#x8FC7; <code>extern &quot;C&quot;</code> &#x8BED;&#x6CD5;&#xFF0C;&#x544A;&#x8BC9;&#x7F16;&#x8BD1;&#x5668;&#xFF1A;&#x6211;&#x60F3;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x9075;&#x5FAA; C ABI &#x7684;&#x51FD;&#x6570;&#x3002;</li>
<li>Rust &#x7684;&#x7F16;&#x8BD1;&#x5668;&#x4F1A;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x627E;&#x5230;&#x8FD9;&#x4E2A;&#x5171;&#x4EAB;&#x5E93;&#xFF0C;&#x5E76;&#x8C03;&#x7528; <code>add</code> &#x51FD;&#x6570;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>C ABI &#x7684;&#x4F5C;&#x7528;</strong>&#xFF1A;</p>
<ul>
<li>&#x786E;&#x4FDD;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x548C;&#x8FD4;&#x56DE;&#x503C;&#x6309;&#x7EA6;&#x5B9A;&#x7684;&#x65B9;&#x5F0F;&#x4F20;&#x9012;&#x3002;&#x6BD4;&#x5982;&#xFF1A;
<ul>
<li>&#x53C2;&#x6570; <code>a</code> &#x548C; <code>b</code> &#x88AB;&#x653E;&#x5728;&#x56FA;&#x5B9A;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x91CC;&#xFF08;&#x6216;&#x8005;&#x6808;&#x4E0A;&#xFF09;&#x3002;</li>
<li>&#x8FD4;&#x56DE;&#x503C;&#x88AB;&#x653E;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
</li>
</ul>
</li>
</ol>
<hr>
<h3 id="&#x53CD;&#x8FC7;&#x6765;&#xFF1A;&#x8BA9; C &#x8C03;&#x7528; Rust &#x51FD;&#x6570;"><a href="#&#x53CD;&#x8FC7;&#x6765;&#xFF1A;&#x8BA9; C &#x8C03;&#x7528; Rust &#x51FD;&#x6570;"></a><strong>&#x53CD;&#x8FC7;&#x6765;&#xFF1A;&#x8BA9; C &#x8C03;&#x7528; Rust &#x51FD;&#x6570;</strong></h3>
<p>&#x8FD9;&#x6B21;&#x6211;&#x4EEC;&#x5199;&#x4E00;&#x4E2A; Rust &#x51FD;&#x6570;&#x7ED9; C &#x8C03;&#x7528;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5199; Rust &#x7684;&#x4EE3;&#x7801;</strong></p>
<pre><code class="language-rust"><span class="hljs-meta">#[no_mangle]</span> <span class="hljs-comment">// &#x7981;&#x6B62;&#x7F16;&#x8BD1;&#x5668;&#x4FEE;&#x6539;&#x51FD;&#x6570;&#x540D;</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">multiply</span></span>(a: <span class="hljs-built_in">i32</span>, b: <span class="hljs-built_in">i32</span>) -&gt; <span class="hljs-built_in">i32</span> {
    a * b
}
</code></pre>
<p>&#x7136;&#x540E;&#x7F16;&#x8BD1;&#x6210;&#x5171;&#x4EAB;&#x5E93;&#xFF1A;</p>
<pre><code class="language-bash">rustc --crate-type=cdylib -o libmylib.so mylib.rs
</code></pre>
<p><strong>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x5199; C &#x7684;&#x4EE3;&#x7801;&#x8C03;&#x7528;&#x8FD9;&#x4E2A; Rust &#x51FD;&#x6570;</strong></p>
<pre><code class="language-c"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>

<span class="hljs-function"><span class="hljs-keyword">extern</span> <span class="hljs-keyword">int</span> <span class="hljs-title">multiply</span><span class="hljs-params">(<span class="hljs-keyword">int</span> a, <span class="hljs-keyword">int</span> b)</span></span>; <span class="hljs-comment">// &#x58F0;&#x660E; Rust &#x7684;&#x51FD;&#x6570;</span>

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">int</span> result = multiply(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// &#x8C03;&#x7528; Rust &#x7684; multiply &#x51FD;&#x6570;</span>
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;3 * 4 = %d\\n&quot;</span>, result); <span class="hljs-comment">// &#x8F93;&#x51FA;&#xFF1A;3 * 4 = 12</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre>
<p><strong>&#x8FD0;&#x884C;&#x6B65;&#x9AA4;&#xFF1A;</strong></p>
<ol>
<li>&#x7F16;&#x8BD1; C &#x4EE3;&#x7801;&#x5E76;&#x94FE;&#x63A5; Rust &#x7684;&#x5171;&#x4EAB;&#x5E93;&#xFF1A;<pre><code class="language-bash">gcc -o main main.c -L . -lmylib
./main
</code></pre>
&#x8F93;&#x51FA;&#x7ED3;&#x679C;&#x4E3A;&#xFF1A;<code>3 * 4 = 12</code>&#x3002;</li>
</ol>
<hr>
<h3 id="&#x603B;&#x7ED3;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4EA4;&#x4E92;&#xFF1F;"><a href="#&#x603B;&#x7ED3;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4EA4;&#x4E92;&#xFF1F;"></a><strong>&#x603B;&#x7ED3;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4EA4;&#x4E92;&#xFF1F;</strong></h3>
<ol>
<li>
<p><strong>Rust &#x5E76;&#x4E0D;&#x662F;&#x4F9D;&#x8D56; C&#xFF0C;&#x800C;&#x662F;&#x9075;&#x5FAA; C &#x7684;&#x89C4;&#x5219;&#xFF08;C ABI&#xFF09;&#x3002;</strong></p>
<ul>
<li><code>extern &quot;C&quot;</code> &#x5173;&#x952E;&#x5B57;&#x5C31;&#x662F;&#x544A;&#x8BC9; Rust &#x7F16;&#x8BD1;&#x5668;&#xFF0C;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x8981;&#x9075;&#x5FAA; C &#x7684;&#x89C4;&#x5219;&#x3002;</li>
<li>C ABI &#x662F;&#x4E00;&#x4E2A;&#x7EA6;&#x5B9A;&#xFF0C;&#x89C4;&#x5B9A;&#x4E86;&#x53C2;&#x6570;&#x548C;&#x8FD4;&#x56DE;&#x503C;&#x600E;&#x4E48;&#x4F20;&#x9012;&#x3001;&#x5185;&#x5B58;&#x600E;&#x4E48;&#x5BF9;&#x9F50;&#x7B49;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>Rust &#x548C; C &#x662F;&#x201C;&#x76F4;&#x63A5;&#x7528;&#x673A;&#x5668;&#x8BED;&#x8A00;&#x5BF9;&#x8BDD;&#x201D;&#x7684;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x7FFB;&#x8BD1;&#x6210; C &#x4EE3;&#x7801;&#x3002;</strong></p>
<ul>
<li>Rust &#x548C; C &#x7684;&#x4EA4;&#x4E92;&#x53EA;&#x53D1;&#x751F;&#x5728;&#x7F16;&#x8BD1;&#x540E;&#x7684;&#x673A;&#x5668;&#x4EE3;&#x7801;&#x5C42;&#x3002;</li>
<li>Rust &#x7F16;&#x8BD1;&#x540E;&#x7684;&#x5171;&#x4EAB;&#x5E93;&#xFF08;<code>libmylib.so</code>&#xFF09;&#x548C; C &#x7F16;&#x8BD1;&#x7684;&#x53EF;&#x6267;&#x884C;&#x7A0B;&#x5E8F;&#x7528;&#x76F8;&#x540C;&#x7684;&#x534F;&#x8BAE;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>Rust &#x901A;&#x8FC7; FFI &#x63D0;&#x4F9B;&#x4E86;&#x8DDF;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4EA4;&#x4E92;&#x7684;&#x80FD;&#x529B;&#xFF1A;</strong></p>
<ul>
<li>&#x53EA;&#x8981;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E5F;&#x9075;&#x5FAA; C ABI&#xFF0C;&#x6BD4;&#x5982; Python &#x7684; <code>ctypes</code> &#x6216; JavaScript &#x7684; <code>N-API</code>&#xFF0C;&#x5B83;&#x4EEC;&#x90FD;&#x80FD;&#x548C; Rust &#x4E92;&#x64CD;&#x4F5C;&#x3002;</li>
</ul>
</li>
</ol>
<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x770B;&#x51FA;&#xFF0C;C &#x548C; Rust &#x7684;&#x4EA4;&#x4E92;&#x662F;&#x9760; ABI &#x7EA6;&#x5B9A;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E2D;&#x95F4;&#x8BED;&#x8A00;&#x6216;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x201C;&#x7FFB;&#x8BD1;&#x201D;&#x3002;</p>
<hr>
<h2 id="rust &#x4E0E; js &#x7684;&#x8C03;&#x7528;"><a href="#rust &#x4E0E; js &#x7684;&#x8C03;&#x7528;"></a>rust &#x4E0E; js &#x7684;&#x8C03;&#x7528;</h2>
<p><strong>&#x521D;&#x6B65;&#x7406;&#x89E3;&#xFF1A;napi-rs &#x5C06; rust &#x4EE3;&#x7801;&#x7F16;&#x8BD1;&#x6210;&#x4E86; N-API &#x534F;&#x8BAE;&#x80FD;&#x591F;&#x8BC6;&#x522B;&#x7684; .node &#x6587;&#x4EF6;&#xFF0C;&#x6240;&#x4EE5;  js &#x80FD;&#x591F;&#x76F4;&#x63A5;&#x52A0;&#x8F7D;&#xFF0C;&#x5982;&#x679C;&#x662F; rust &#x7F16;&#x8BD1;&#x51FA;&#x7684;  .so &#x6587;&#x4EF6;&#xFF08;&#x9075;&#x5FAA; C-ABI &#xFF09; &#x5219;&#x9700;&#x8981; C&#x6216;&#x8005; C++ &#x7F16;&#x5199;&#x80F6;&#x6C34;&#x8BED;&#x8A00; &#x505A;&#x6210;&#x7B26;&#x5408; N-API &#x7684; .node &#x6587;&#x4EF6;&#xFF0C;&#x7136;&#x540E; &#x624D;&#x53EF;&#x4EE5;&#x88AB; js &#x8C03;&#x7528;&#xFF1F;&#x57FA;&#x4E8E; N-API&#xFF1A;&#x6CE8;&#x91CD; &#x8DE8;&#x5E73;&#x53F0;&#x6027; &#x548C; &#x7A33;&#x5B9A;&#x6027;&#xFF0C;&#x9002;&#x5408;&#x957F;&#x671F;&#x7EF4;&#x62A4;&#x7684;&#x9879;&#x76EE;&#x3002;</strong></p>
<p>&#x5176;&#x4ED6;&#x8C03;&#x7528;&#x65B9;&#x5F0F;&#xFF1A;</p>
<ul>
<li>rust -&gt; .wasm&#xFF08;&#x8DE8;&#x5E73;&#x53F0;&#xFF0C;&#x53EF;&#x4EE5; node &#x8DDF;&#x6D4F;&#x89C8;&#x5668;&#x73AF;&#x5883;&#xFF0C;&#x6BD4; .node &#x6027;&#x80FD;&#x7A0D;&#x4F4E;&#xFF09; -&gt; js</li>
<li>neon &#xFF08;&#x9488;&#x5BF9; v8 &#x5F15;&#x64CE;&#xFF0C;&#x8DF3;&#x8FC7; NAPI &#x62BD;&#x8C61;&#x5C42;&#xFF0C;&#x6027;&#x80FD;&#x6BD4; napi-rs &#x8F6C;&#x6362;&#x7684;&#x4EE3;&#x7801;&#x66F4;&#x9AD8;&#x6548;&#xFF0C;&#x4F46;&#x662F;&#x53EF;&#x7EF4;&#x62A4;&#x6027;&#x4E5F;&#x66F4;&#x5DEE;&#xFF09;&#xFF0C;&#x57FA;&#x4E8E; V8 &#x6DF1;&#x5EA6;&#x7ED1;&#x5B9A;&#xFF1A;&#x8FFD;&#x6C42; &#x6027;&#x80FD;&#x6781;&#x81F4; &#x548C; &#x7075;&#x6D3B;&#x5B9A;&#x5236;&#xFF0C;&#x9002;&#x5408;&#x5BF9;&#x5E95;&#x5C42;&#x4F18;&#x5316;&#x8981;&#x6C42;&#x6781;&#x9AD8;&#x7684;&#x9879;&#x76EE;&#x3002;</li>
</ul>
<hr>
<h3 id="1. &#x4F7F;&#x7528; N-API&#xFF08;&#x5982; napi-rs&#xFF09;&#x7F16;&#x8BD1;&#x51FA;&#x7684; .node &#x6587;&#x4EF6;"><a href="#1. &#x4F7F;&#x7528; N-API&#xFF08;&#x5982; napi-rs&#xFF09;&#x7F16;&#x8BD1;&#x51FA;&#x7684; .node &#x6587;&#x4EF6;"></a><strong>1. &#x4F7F;&#x7528; N-API&#xFF08;&#x5982; <code>napi-rs</code>&#xFF09;&#x7F16;&#x8BD1;&#x51FA;&#x7684; <code>.node</code> &#x6587;&#x4EF6;</strong></h3>
<ul>
<li><strong>&#x5173;&#x952E;&#x70B9;</strong>&#xFF1A;Rust &#x4EE3;&#x7801;&#x76F4;&#x63A5;&#x7F16;&#x8BD1;&#x6210;&#x7B26;&#x5408; <strong>N-API &#x6807;&#x51C6;</strong> &#x7684; <code>.node</code> &#x6587;&#x4EF6;&#x3002;</li>
<li><strong>&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;</strong>&#xFF1A;
<ol>
<li>Rust &#x4F7F;&#x7528; <code>napi</code> &#x6216; <code>napi-derive</code> &#x5E93;&#xFF0C;&#x901A;&#x8FC7; N-API &#x66B4;&#x9732;&#x51FD;&#x6570;&#x3002;</li>
<li><code>napi-rs</code> &#x5728;&#x7F16;&#x8BD1;&#x8FC7;&#x7A0B;&#x4E2D;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x7B26;&#x5408; N-API &#x6807;&#x51C6;&#x7684;&#x52A8;&#x6001;&#x5E93;&#xFF08;<code>.node</code> &#x6587;&#x4EF6;&#xFF09;&#x3002;</li>
<li>Node.js &#x52A0;&#x8F7D;&#x8FD9;&#x4E2A; <code>.node</code> &#x6587;&#x4EF6;&#xFF0C;&#x76F4;&#x63A5;&#x8C03;&#x7528; Rust &#x7684;&#x51FD;&#x6570;&#x3002;</li>
</ol>
</li>
</ul>
<blockquote>
<p><strong>&#x7279;&#x70B9;</strong>&#xFF1A;&#x8FD9;&#x4E00;&#x8FC7;&#x7A0B;&#x5B8C;&#x5168;&#x81EA;&#x52A8;&#x5316;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x624B;&#x5199; C/C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x3002;Rust &#x4EE3;&#x7801;&#x7F16;&#x8BD1;&#x540E;&#x76F4;&#x63A5;&#x53EF;&#x4EE5;&#x88AB; Node.js &#x4F7F;&#x7528;&#xFF0C;&#x5F00;&#x53D1;&#x4F53;&#x9A8C;&#x4F18;&#x826F;&#x3002;</p>
</blockquote>
<hr>
<h3 id="2. &#x5982;&#x679C;&#x53EA;&#x6709; Rust &#x7F16;&#x8BD1;&#x51FA;&#x7684; .so &#x6587;&#x4EF6;"><a href="#2. &#x5982;&#x679C;&#x53EA;&#x6709; Rust &#x7F16;&#x8BD1;&#x51FA;&#x7684; .so &#x6587;&#x4EF6;"></a><strong>2. &#x5982;&#x679C;&#x53EA;&#x6709; Rust &#x7F16;&#x8BD1;&#x51FA;&#x7684; <code>.so</code> &#x6587;&#x4EF6;</strong></h3>
<ul>
<li><strong>&#x5173;&#x952E;&#x70B9;</strong>&#xFF1A;<code>.so</code> &#x6587;&#x4EF6;&#x662F;&#x6807;&#x51C6;&#x7684; C ABI &#x52A8;&#x6001;&#x5E93;&#x683C;&#x5F0F;&#xFF0C;JavaScript &#x73AF;&#x5883;&#xFF08;&#x5982; Node.js&#xFF09;&#x672C;&#x8EAB;&#x4E0D;&#x652F;&#x6301;&#x76F4;&#x63A5;&#x52A0;&#x8F7D; C ABI &#x7684;&#x5E93;&#x3002;</li>
<li><strong>&#x95EE;&#x9898;</strong>&#xFF1A;
<ul>
<li>JavaScript &#x548C; <code>.so</code> &#x6587;&#x4EF6;&#x4E4B;&#x95F4;&#x7F3A;&#x5C11;&#x76F4;&#x63A5;&#x7684;&#x6865;&#x6881;&#x3002;</li>
<li>&#x9700;&#x8981;&#x624B;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#xFF0C;&#x7528; C &#x6216; C++ &#x628A; <code>.so</code> &#x5C01;&#x88C5;&#x6210; N-API &#x6A21;&#x5757;&#xFF08;<code>.node</code> &#x6587;&#x4EF6;&#xFF09;&#x3002;</li>
</ul>
</li>
</ul>
<h4 id="&#x624B;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x7684;&#x6D41;&#x7A0B;&#xFF1A;"><a href="#&#x624B;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x7684;&#x6D41;&#x7A0B;&#xFF1A;"></a><strong>&#x624B;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x7684;&#x6D41;&#x7A0B;&#xFF1A;</strong></h4>
<ol>
<li>
<p><strong>Rust &#x7F16;&#x8BD1;&#x51FA; <code>.so</code> &#x6587;&#x4EF6;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; <code>cdylib</code> &#x7C7B;&#x578B;&#x7684; <code>crate-type</code> &#x7F16;&#x8BD1;&#x51FA; C ABI &#x52A8;&#x6001;&#x5E93;&#xFF1A;<pre><code class="language-bash">rustc --crate-type=cdylib -o librust_code.so rust_code.rs
</code></pre>
</li>
</ul>
</li>
<li>
<p><strong>&#x7528; C/C++ &#x7F16;&#x5199; N-API &#x6A21;&#x5757;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; C/C++ &#x4EE3;&#x7801;&#x5C01;&#x88C5; <code>.so</code> &#x6587;&#x4EF6;&#x7684;&#x51FD;&#x6570;&#x4E3A; N-API &#x6A21;&#x5757;&#xFF1A;<pre><code class="language-cpp"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;napi.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&quot;librust_code.h&quot;</span> <span class="hljs-comment">// Rust .so &#x7684;&#x5934;&#x6587;&#x4EF6;</span></span>

<span class="hljs-function">Napi::Value <span class="hljs-title">Add</span><span class="hljs-params">(<span class="hljs-keyword">const</span> Napi::CallbackInfo&amp; info)</span> </span>{
    <span class="hljs-keyword">int</span> a = info[<span class="hljs-number">0</span>].As&lt;Napi::Number&gt;().<span class="hljs-built_in">Int32Value</span>();
    <span class="hljs-keyword">int</span> b = info[<span class="hljs-number">1</span>].As&lt;Napi::Number&gt;().<span class="hljs-built_in">Int32Value</span>();
    <span class="hljs-keyword">int</span> result = <span class="hljs-built_in">add</span>(a, b); <span class="hljs-comment">// &#x8C03;&#x7528; Rust &#x7F16;&#x8BD1;&#x7684; .so &#x51FD;&#x6570;</span>
    <span class="hljs-keyword">return</span> Napi::Number::<span class="hljs-built_in">New</span>(info.<span class="hljs-built_in">Env</span>(), result);
}

<span class="hljs-function">Napi::Object <span class="hljs-title">Init</span><span class="hljs-params">(Napi::Env env, Napi::Object exports)</span> </span>{
    exports.<span class="hljs-built_in">Set</span>(Napi::String::<span class="hljs-built_in">New</span>(env, <span class="hljs-string">&quot;add&quot;</span>), Napi::Function::<span class="hljs-built_in">New</span>(env, Add));
    <span class="hljs-keyword">return</span> exports;
}

<span class="hljs-built_in">NODE_API_MODULE</span>(NODE_GYP_MODULE_NAME, Init)
</code></pre>
</li>
</ul>
</li>
<li>
<p><strong>&#x7F16;&#x8BD1; C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x6210; <code>.node</code> &#x6587;&#x4EF6;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; <code>node-gyp</code> &#x6216;&#x5176;&#x4ED6;&#x5DE5;&#x5177;&#x94FE;&#x7F16;&#x8BD1;&#x751F;&#x6210; <code>.node</code> &#x6587;&#x4EF6;&#xFF1A;<pre><code class="language-bash">node-gyp configure build
</code></pre>
</li>
</ul>
</li>
</ol>
<blockquote>
<p><strong>&#x7279;&#x70B9;</strong>&#xFF1A;&#x8FD9;&#x4E00;&#x8FC7;&#x7A0B;&#x7E41;&#x7410;&#xFF0C;&#x9700;&#x8981;&#x7F16;&#x5199;&#x548C;&#x7EF4;&#x62A4;&#x989D;&#x5916;&#x7684; C/C++ &#x4EE3;&#x7801;&#x3002;</p>
</blockquote>
<hr>
<h3 id="3. &#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x5BF9;&#x6BD4;"><a href="#3. &#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x5BF9;&#x6BD4;"></a><strong>3. &#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x5BF9;&#x6BD4;</strong></h3>
<table>
<thead>
<tr>
<th><strong>&#x7279;&#x70B9;</strong></th>
<th><strong>&#x4F7F;&#x7528; <code>napi-rs</code></strong></th>
<th><strong>&#x4F7F;&#x7528; <code>.so</code> + C/C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>&#x5F00;&#x53D1;&#x6548;&#x7387;</strong></td>
<td>&#x9AD8;&#xFF1A;&#x65E0;&#x9700;&#x624B;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#xFF0C;Rust &#x76F4;&#x63A5;&#x7F16;&#x8BD1;&#x6210; <code>.node</code> &#x6587;&#x4EF6;</td>
<td>&#x4F4E;&#xFF1A;&#x9700;&#x8981;&#x624B;&#x52A8;&#x7F16;&#x5199; C/C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x5C01;&#x88C5; <code>.so</code> &#x6587;&#x4EF6;</td>
</tr>
<tr>
<td><strong>&#x4F9D;&#x8D56;&#x6027;</strong></td>
<td>&#x53EA;&#x9700; <code>napi</code>&#xFF0C;&#x5B8C;&#x5168;&#x7528; Rust &#x5F00;&#x53D1;</td>
<td>Rust + C/C++&#xFF0C;&#x9700;&#x8981;&#x989D;&#x5916;&#x5DE5;&#x5177;&#x94FE;</td>
</tr>
<tr>
<td><strong>&#x53EF;&#x7EF4;&#x62A4;&#x6027;</strong></td>
<td>&#x9AD8;&#xFF1A;Rust &#x548C; Node.js &#x5F00;&#x53D1;&#x8005;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x7EF4;&#x62A4;</td>
<td>&#x4F4E;&#xFF1A;Rust &#x548C; C/C++ &#x5F00;&#x53D1;&#x9700;&#x8981;&#x534F;&#x4F5C;</td>
</tr>
<tr>
<td><strong>&#x9002;&#x7528;&#x573A;&#x666F;</strong></td>
<td>&#x9002;&#x5408;&#x7EDD;&#x5927;&#x591A;&#x6570; Node.js &#x63D2;&#x4EF6;&#x5F00;&#x53D1;&#x573A;&#x666F;</td>
<td>&#x9002;&#x5408;&#x5DF2;&#x6709; <code>.so</code> &#x6587;&#x4EF6;&#x9700;&#x8981;&#x5FEB;&#x901F;&#x5C01;&#x88C5;&#x5230; N-API &#x7684;&#x573A;&#x666F;</td>
</tr>
<tr>
<td><strong>&#x6027;&#x80FD;</strong></td>
<td>&#x6027;&#x80FD;&#x4F18;&#x826F;&#xFF0C;&#x76F4;&#x63A5;&#x751F;&#x6210; N-API &#x6A21;&#x5757;</td>
<td>&#x6027;&#x80FD;&#x540C;&#x6837;&#x4F18;&#x826F;&#xFF0C;&#x4F46;&#x624B;&#x5DE5;&#x7F16;&#x5199;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x589E;&#x52A0;&#x7EF4;&#x62A4;&#x6210;&#x672C;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a><strong>&#x603B;&#x7ED3;</strong></h3>
<ul>
<li>&#x5982;&#x679C;&#x4F60;&#x7684;&#x76EE;&#x6807;&#x662F;&#x4E3A; Node.js &#x5F00;&#x53D1;&#x63D2;&#x4EF6;&#xFF0C;&#x4F7F;&#x7528; Rust &#x7684; <strong>N-API &#x5DE5;&#x5177;&#x94FE;</strong>&#xFF08;&#x5982; <code>napi-rs</code>&#xFF09;&#x662F;&#x6700;&#x4F73;&#x9009;&#x62E9;&#xFF0C;&#x5B83;&#x80FD;&#x8BA9;&#x4F60;&#x76F4;&#x63A5;&#x751F;&#x6210; <code>.node</code> &#x6587;&#x4EF6;&#xFF0C;&#x7701;&#x53BB;&#x4E86;&#x624B;&#x52A8;&#x7F16;&#x5199; C/C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x7684;&#x9EBB;&#x70E6;&#x3002;</li>
<li>&#x5982;&#x679C;&#x4F60;&#x624B;&#x5934;&#x5DF2;&#x6709; <code>.so</code> &#x6587;&#x4EF6;&#xFF08;&#x6BD4;&#x5982;&#x662F;&#x7528;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x7F16;&#x5199;&#x7684;&#x5E93;&#xFF09;&#xFF0C;&#x9700;&#x8981;&#x7F16;&#x5199; C/C++ &#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x5C06;&#x5176;&#x5C01;&#x88C5;&#x6210; <code>.node</code> &#x6587;&#x4EF6;&#xFF0C;&#x624D;&#x80FD;&#x88AB; Node.js &#x52A0;&#x8F7D;&#x548C;&#x4F7F;&#x7528;&#x3002;</li>
</ul>
<p>&#x6700;&#x7EC8;&#xFF0C;<strong>N-API &#x662F;&#x6838;&#x5FC3;&#x6865;&#x6881;</strong>&#xFF0C;Rust &#x548C; C/C++ &#x90FD;&#x662F;&#x4E3A;&#x4E86;&#x751F;&#x6210;&#x80FD;&#x7B26;&#x5408; N-API &#x7684;&#x6A21;&#x5757;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:2,title:"rust 与 c 的调用",children:[{level:3,title:"C ABI 的作用",children:[]},{level:3,title:"一个超简单的例子：让 Rust 调用 C 函数",children:[]},{level:3,title:"拆解这个过程",children:[]},{level:3,title:"反过来：让 C 调用 Rust 函数",children:[]},{level:3,title:"总结：为什么能交互？",children:[]}]},{level:2,title:"rust 与 js 的调用",children:[{level:3,title:"1. 使用 N-API（如 napi-rs）编译出的 .node 文件",children:[]},{level:3,title:"2. 如果只有 Rust 编译出的 .so 文件",children:[{level:4,title:"手写胶水代码的流程：",children:[]}]},{level:3,title:"3. 两种方式对比",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"参考资料",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
