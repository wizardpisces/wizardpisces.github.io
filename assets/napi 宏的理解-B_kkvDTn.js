const x={},n=`<p>&#x4E0B;&#x9762;&#x662F;&#x4E4B;&#x524D;&#x624B;&#x5199;&#x7684;&#x7B80;&#x5316;&#x5B9E;&#x73B0;&#x7248;&#x672C;&#xFF0C;&#x5E76;&#x4E3A;&#x5176;&#x6DFB;&#x52A0;&#x4E86;&#x8BE6;&#x7EC6;&#x6CE8;&#x91CA;&#xFF0C;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x5404;&#x90E8;&#x5206;&#x7684;&#x529F;&#x80FD;&#x548C;&#x903B;&#x8F91;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> napi::sys::*; <span class="hljs-comment">// &#x5F15;&#x5165; N-API &#x7684;&#x4F4E;&#x7EA7;&#x522B; FFI &#x63A5;&#x53E3;</span>
<span class="hljs-keyword">use</span> napi::{Env, <span class="hljs-built_in">Result</span>}; <span class="hljs-comment">// &#x5F15;&#x5165;&#x9AD8;&#x5C42;&#x62BD;&#x8C61;&#x7684;&#x73AF;&#x5883;&#x548C;&#x7ED3;&#x679C;&#x7C7B;&#x578B;</span>

<span class="hljs-comment">// &#x5FC5;&#x987B;&#x5BFC;&#x51FA;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x8BA9; Node.js &#x5728;&#x52A0;&#x8F7D;&#x6A21;&#x5757;&#x65F6;&#x627E;&#x5230;&#x5165;&#x53E3;&#x70B9;</span>
<span class="hljs-meta">#[no_mangle]</span> <span class="hljs-comment">// &#x9632;&#x6B62;&#x7F16;&#x8BD1;&#x5668;&#x4FEE;&#x6539;&#x51FD;&#x6570;&#x540D;</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">unsafe</span> <span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">napi_register_module_v1</span></span>(
    env: napi_env,    <span class="hljs-comment">// N-API &#x63D0;&#x4F9B;&#x7684;&#x73AF;&#x5883;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4EE3;&#x8868;&#x5F53;&#x524D;&#x6A21;&#x5757;&#x7684;&#x72B6;&#x6001;</span>
    exports: napi_value, <span class="hljs-comment">// exports &#x662F; Node.js &#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;</span>
) -&gt; napi_value {
    <span class="hljs-comment">// &#x4F7F;&#x7528; N-API &#x63D0;&#x4F9B;&#x7684;&#x5DE5;&#x5177;&#x51FD;&#x6570;&#x6CE8;&#x518C;&#x6A21;&#x5757;&#x548C;&#x5BFC;&#x51FA;&#x51FD;&#x6570;</span>
    napi::register_module(env, exports, |env, exports| {
        <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A; N-API &#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x5E76;&#x7ED1;&#x5B9A;&#x5230; \`sum\`</span>
        <span class="hljs-keyword">let</span> sum_fn = napi::bindgen_prelude::create_function(
            env,    <span class="hljs-comment">// N-API &#x73AF;&#x5883;</span>
            <span class="hljs-string">&quot;sum&quot;</span>,  <span class="hljs-comment">// &#x51FD;&#x6570;&#x7684;&#x540D;&#x79F0;</span>
            <span class="hljs-literal">Some</span>(sum), <span class="hljs-comment">// &#x51FD;&#x6570;&#x7684;&#x5B9E;&#x73B0;</span>
        )?;
        
        <span class="hljs-comment">// &#x5C06;&#x521B;&#x5EFA;&#x7684;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5230;&#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#x4E0A;&#xFF0C;&#x4F9B; JavaScript &#x8C03;&#x7528;</span>
        napi::bindgen_prelude::set_named_property(env, exports, <span class="hljs-string">&quot;sum&quot;</span>, sum_fn)?;

        <span class="hljs-literal">Ok</span>(exports) <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#xFF0C;Node.js &#x4F1A;&#x52A0;&#x8F7D;&#x6B64;&#x6A21;&#x5757;</span>
    })
}

<span class="hljs-comment">// &#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x7684;&#x51FD;&#x6570;&#x903B;&#x8F91;</span>
<span class="hljs-keyword">unsafe</span> <span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">sum</span></span>(env: napi_env, info: napi_callback_info) -&gt; napi_value {
    <span class="hljs-comment">// &#x83B7;&#x53D6;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x9012;&#x7684;&#x53C2;&#x6570;&#xFF08;&#x671F;&#x671B;&#x4E24;&#x4E2A;&#x53C2;&#x6570; a &#x548C; b&#xFF09;</span>
    <span class="hljs-keyword">let</span> args = napi::bindgen_prelude::get_args(env, info, <span class="hljs-number">2</span>)?;

    <span class="hljs-comment">// &#x4ECE;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x53D6;&#x6574;&#x6570;&#x503C;</span>
    <span class="hljs-keyword">let</span> a: <span class="hljs-built_in">i32</span> = args[<span class="hljs-number">0</span>].get()?; <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; i32</span>
    <span class="hljs-keyword">let</span> b: <span class="hljs-built_in">i32</span> = args[<span class="hljs-number">1</span>].get()?; <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; i32</span>

    <span class="hljs-comment">// &#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; JavaScript &#x6570;&#x503C;&#x5BF9;&#x8C61;</span>
    napi::bindgen_prelude::create_int32(env, a + b)
}
</code></pre>
<hr>
<h3 id="&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;"><a href="#&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;"></a><strong>&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;</strong></h3>
<h4 id="1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (napi_register_module_v1)"><a href="#1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (napi_register_module_v1)"></a><strong>1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (<code>napi_register_module_v1</code>)</strong></h4>
<ul>
<li>&#x8FD9;&#x662F; Rust &#x7F16;&#x5199;&#x7684; N-API &#x6A21;&#x5757;&#x7684;&#x5165;&#x53E3;&#x70B9;&#x3002;</li>
<li>Node.js &#x5728;&#x52A0;&#x8F7D; <code>.node</code> &#x6587;&#x4EF6;&#x65F6;&#xFF0C;&#x4F1A;&#x67E5;&#x627E;&#x5E76;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x3002;</li>
</ul>
<p>&#x5173;&#x952E;&#x53C2;&#x6570;&#xFF1A;</p>
<ul>
<li><code>env</code>&#xFF1A;&#x5F53;&#x524D; N-API &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4FDD;&#x5B58;&#x6A21;&#x5757;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x72B6;&#x6001;&#x3002;</li>
<li><code>exports</code>&#xFF1A;&#x4EE3;&#x8868;&#x6A21;&#x5757;&#x7684;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#xFF0C;&#x76F8;&#x5F53;&#x4E8E; Node.js &#x4E2D;&#x7684; <code>module.exports</code>&#x3002;</li>
</ul>
<p>&#x51FD;&#x6570;&#x4F5C;&#x7528;&#xFF1A;</p>
<ul>
<li>&#x6CE8;&#x518C;&#x6A21;&#x5757;&#x7684;&#x6240;&#x6709;&#x5BFC;&#x51FA;&#x65B9;&#x6CD5;&#xFF0C;&#x5E76;&#x5C06;&#x5B83;&#x4EEC;&#x7ED1;&#x5B9A;&#x5230; <code>exports</code>&#x3002;</li>
</ul>
<hr>
<h4 id="2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (create_function)"><a href="#2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (create_function)"></a><strong>2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (<code>create_function</code>)</strong></h4>
<ul>
<li>&#x8FD9;&#x4E2A;&#x90E8;&#x5206;&#x901A;&#x8FC7; <code>napi::bindgen_prelude::create_function</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7B26;&#x5408; N-API &#x6807;&#x51C6;&#x7684;&#x51FD;&#x6570;&#x3002;</li>
<li><code>create_function</code> &#x7684;&#x5173;&#x952E;&#x53C2;&#x6570;&#xFF1A;
<ul>
<li><code>env</code>&#xFF1A;N-API &#x73AF;&#x5883;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><code>&quot;sum&quot;</code>&#xFF1A;JavaScript &#x4E2D;&#x51FD;&#x6570;&#x7684;&#x540D;&#x5B57;&#x3002;</li>
<li><code>Some(sum)</code>&#xFF1A;&#x6307;&#x5411; Rust &#x4E2D;&#x5B9E;&#x9645;&#x7684;&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h4 id="3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (sum)"><a href="#3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (sum)"></a><strong>3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (<code>sum</code>)</strong></h4>
<p>&#x8FD9;&#x662F;&#x5177;&#x4F53;&#x7684; Rust &#x51FD;&#x6570;&#x903B;&#x8F91;&#xFF0C;&#x901A;&#x8FC7; FFI &#x66B4;&#x9732;&#x7ED9; Node.js &#x8C03;&#x7528;&#x3002;</p>
<ul>
<li>
<p>&#x53C2;&#x6570;&#x89E3;&#x6790;&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; <code>napi::bindgen_prelude::get_args</code> &#x83B7;&#x53D6;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x671F;&#x671B;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x3002;</li>
<li>&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x9700;&#x8981;&#x7528; <code>.get()</code> &#x89E3;&#x6790;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; Rust &#x7C7B;&#x578B;&#x3002;</li>
</ul>
</li>
<li>
<p>&#x7ED3;&#x679C;&#x5904;&#x7406;&#xFF1A;</p>
<ul>
<li>&#x8BA1;&#x7B97;&#x4E24;&#x4E2A;&#x6574;&#x6570;&#x7684;&#x548C;&#x3002;</li>
<li>&#x4F7F;&#x7528; <code>napi::bindgen_prelude::create_int32</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A; JavaScript &#x7684;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#xFF0C;&#x5C06;&#x7ED3;&#x679C;&#x8FD4;&#x56DE;&#x7ED9;&#x8C03;&#x7528;&#x8005;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;"><a href="#&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;"></a><strong>&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;</strong></h3>
<ol>
<li>Node.js &#x52A0;&#x8F7D; <code>.node</code> &#x6587;&#x4EF6;&#x65F6;&#xFF0C;&#x8C03;&#x7528; <code>napi_register_module_v1</code>&#x3002;</li>
<li><code>napi_register_module_v1</code> &#x4F7F;&#x7528; <code>create_function</code> &#x521B;&#x5EFA;&#x51FD;&#x6570;&#x5E76;&#x5C06;&#x5176;&#x7ED1;&#x5B9A;&#x5230;&#x6A21;&#x5757;&#x7684;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#x3002;</li>
<li>&#x5728; JavaScript &#x4E2D;&#x8C03;&#x7528; <code>sum</code>&#xFF0C;&#x4F1A;&#x89E6;&#x53D1; <code>sum</code> &#x51FD;&#x6570;&#x7684;&#x6267;&#x884C;&#xFF1A;
<ul>
<li>&#x83B7;&#x53D6;&#x53C2;&#x6570;&#x3002;</li>
<li>&#x8C03;&#x7528; Rust &#x51FD;&#x6570;&#x3002;</li>
<li>&#x5C06;&#x7ED3;&#x679C;&#x8F6C;&#x6362;&#x4E3A; JavaScript &#x7C7B;&#x578B;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h3 id="&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;"><a href="#&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;"></a><strong>&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;</strong></h3>
<ul>
<li>
<p><strong>&#x4F18;&#x70B9;&#xFF1A;</strong></p>
<ul>
<li>&#x76F4;&#x63A5;&#x64CD;&#x4F5C; N-API&#xFF0C;&#x53EF;&#x4EE5;&#x5B8C;&#x5168;&#x63A7;&#x5236;&#x6A21;&#x5757;&#x884C;&#x4E3A;&#x3002;</li>
<li>&#x9002;&#x7528;&#x4E8E;&#x9700;&#x8981;&#x624B;&#x52A8;&#x4F18;&#x5316;&#x6027;&#x80FD;&#x6216;&#x6709;&#x7279;&#x6B8A;&#x9700;&#x6C42;&#x7684;&#x573A;&#x666F;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7F3A;&#x70B9;&#xFF1A;</strong></p>
<ul>
<li>&#x7F16;&#x5199; N-API &#x4EE3;&#x7801;&#x7E41;&#x7410;&#x4E14;&#x5BB9;&#x6613;&#x51FA;&#x9519;&#x3002;</li>
<li>&#x9700;&#x8981;&#x5904;&#x7406;&#x53C2;&#x6570;&#x89E3;&#x6790;&#x3001;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x3001;&#x9519;&#x8BEF;&#x7BA1;&#x7406;&#x7B49;&#x5927;&#x91CF;&#x7EC6;&#x8282;&#x3002;</li>
<li>&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;&#xFF0C;&#x4EE3;&#x7801;&#x91CF;&#x5927;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a><strong>&#x603B;&#x7ED3;</strong></h3>
<p>&#x624B;&#x5199;&#x5B9E;&#x73B0;&#x5C55;&#x793A;&#x4E86; Rust &#x548C; Node.js &#x4EA4;&#x4E92;&#x7684;&#x57FA;&#x7840;&#xFF0C;&#x4F46;&#x5728;&#x5B9E;&#x9645;&#x9879;&#x76EE;&#x4E2D;&#xFF0C;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x7C7B;&#x4F3C; <code>#[napi]</code> &#x5B8F;&#x6765;&#x7B80;&#x5316;&#x5F00;&#x53D1;&#x3002;&#x5C5E;&#x6027;&#x5B8F;&#x4F1A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x4E0A;&#x8FF0;&#x590D;&#x6742;&#x903B;&#x8F91;&#xFF0C;&#x8BA9;&#x5F00;&#x53D1;&#x8005;&#x4E13;&#x6CE8;&#x4E8E;&#x6838;&#x5FC3;&#x529F;&#x80FD;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ul>
<li>gpt</li>
</ul>
`,s=[{level:3,title:"逐步拆解注释说明",children:[{level:4,title:"1. 模块入口点 (napi_register_module_v1)",children:[]},{level:4,title:"2. 注册函数 (create_function)",children:[]},{level:4,title:"3. 函数实现 (sum)",children:[]}]},{level:3,title:"调用链的工作流程",children:[]},{level:3,title:"优缺点对比",children:[]},{level:3,title:"总结",children:[]},{level:2,title:"参考资料",children:[]}];export{x as attributes,n as html,s as nestedHeaders};
