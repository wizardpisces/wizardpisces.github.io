const x={},n=`<h1 id="&#x5173;&#x4E8E;node&#x7684;addon"><a href="#&#x5173;&#x4E8E;node&#x7684;addon"></a>&#x5173;&#x4E8E;node&#x7684;addon</h1>
<p>Node.js &#x5BF9; native addon &#x5F00;&#x53D1;&#x4FA7;&#x66B4;&#x9732;&#x7684;&#x662F; ABI&#xFF08;In computer software, an application binary interface (ABI) is an interface between two binary program modules&#xFF09;</p>
<h2 id="Addon&#x65B9;&#x6848;&#x6F14;&#x5316;"><a href="#Addon&#x65B9;&#x6848;&#x6F14;&#x5316;"></a>Addon&#x65B9;&#x6848;&#x6F14;&#x5316;</h2>
<p><em><strong>&#x4EE5;&#x4E0B;&#x662F;&#x6458;&#x6284;&#xFF0C;&#x8FD8;&#x6709;&#x5F85;&#x7422;&#x78E8;&#x539F;&#x7406;</strong></em></p>
<h3 id="NAN&#xFF08;Native Abstractions for Node.js&#xFF09;"><a href="#NAN&#xFF08;Native Abstractions for Node.js&#xFF09;"></a>NAN&#xFF08;Native Abstractions for Node.js&#xFF09;</h3>
<p>NAN &#x5C06; v8/libuv &#x76F8;&#x5173;&#x7684; API &#x8FDB;&#x884C;&#x4E86;&#x5C01;&#x88C5;&#xFF0C;&#x5BF9;&#x5916;&#x662F;&#x7A33;&#x5B9A;&#x7684;&#x62BD;&#x8C61;&#x5C42; API (&#x4F46;&#x5374;&#x65E0;&#x6CD5;&#x4FDD;&#x8BC1;&#x662F; ABI &#x7A33;&#x5B9A;)&#x3002;&#x7528; NAN &#x8FDB;&#x884C;&#x5C01;&#x88C5;&#x7684; native addon &#x51E0;&#x4E4E;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x9884;&#x7F16;&#x8BD1;&#x7684;&#x65B9;&#x5F0F;&#x8FDB;&#x884C;&#x5206;&#x53D1;&#xFF0C;&#x56E0;&#x4E3A;&#x8DE8; Node &#x7248;&#x672C;&#x5E95;&#x5C42; v8/libuv API &#x53D8;&#x5316;&#x4E4B;&#x540E;&#x9700;&#x8981;&#x5BF9;&#x6E90;&#x7801;&#x8FDB;&#x884C;&#x91CD;&#x65B0;&#x7F16;&#x8BD1;&#x624D;&#x80FD;&#x4F7F;&#x7528;&#x3002;&#x6240;&#x4EE5;&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x5F88;&#x591A; native addon &#x5728; npm install &#x540E;&#x8FD8;&#x8981;&#x8C03;&#x7528;&#x4E00;&#x5806;&#x5DE5;&#x5177;&#x94FE;&#x5728;&#x672C;&#x5730;&#x8FDB;&#x884C;&#x7F16;&#x8BD1;&#x624D;&#x80FD;&#x4F7F;&#x7528;&#xFF0C;&#x4EE5;&#x53CA;&#x4E3A;&#x4EC0;&#x4E48;&#x6709;&#x65F6;&#x5019; node &#x7248;&#x672C;&#x5347;&#x7EA7;&#x4E4B;&#x540E;&#x4E4B;&#x524D;&#x5B89;&#x88C5;&#x597D;&#x7684; node_modules &#x5C31;&#x65E0;&#x6CD5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x4E86;&#x3002;</p>
<p>&#x4E00;&#x53E5;&#x8BDD;&#x7406;&#x89E3;&#xFF1A;V8&#x5E95;&#x5C42;&#x7684;&#x5C01;&#x88C5;&#xFF0C;&#x4F30;&#x8BA1;&#x9700;&#x8981;&#x7406;&#x89E3;V8&#x624D;&#x80FD;&#x5F00;&#x53D1;</p>
<h3 id="N-API"><a href="#N-API"></a>N-API</h3>
<p>&#x81EA;&#x4ECE; Node.js v8.0.0 &#x53D1;&#x5E03;&#x4E4B;&#x540E;&#xFF0C;Node.js &#x63A8;&#x51FA;&#x4E86;&#x5168;&#x65B0;&#x7684;&#x7528;&#x4E8E;&#x5F00;&#x53D1; C++ &#x539F;&#x751F;&#x6A21;&#x5757;&#x7684;&#x63A5;&#x53E3;&#xFF0C;N-API&#x3002;&#x672C;&#x8D28;&#x5176;&#x5B9E;&#x662F;&#x5C06; NAN &#x8FD9;&#x5C42;&#x62BD;&#x8C61;&#x632A;&#x5230;&#x4E86; node &#x6E90;&#x7801;&#x4E2D;&#xFF0C;&#x5728; node &#x7F16;&#x8BD1;&#x7684;&#x65F6;&#x5019;&#x5C31;&#x7F16;&#x8BD1;&#x597D;&#x8FD9;&#x5C42;&#x5BF9;&#x5916;&#x62BD;&#x8C61;&#xFF0C;&#x8FD9;&#x6837; N-API &#x5BF9;&#x5916;&#x5C31;&#x662F;&#x7A33;&#x5B9A;&#x7684; ABI &#x4E86;&#x3002;</p>
<p>&#x4E00;&#x53E5;&#x8BDD;&#x7406;&#x89E3;&#xFF1A;v8&#x4E4B;&#x4E0A;node&#x5C42;&#x7684;&#x5C01;&#x88C5;&#xFF0C;&#x8DDF;&#x968F;Node&#x7F16;&#x8BD1;&#xFF0C;&#x72EC;&#x7ACB;&#x4E8E;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;</p>
<h2 id="&#x5E94;&#x7528;"><a href="#&#x5E94;&#x7528;"></a>&#x5E94;&#x7528;</h2>
<h3 id="C++&#x6269;&#x5C55;"><a href="#C++&#x6269;&#x5C55;"></a>C++&#x6269;&#x5C55;</h3>
<p>&#x57FA;&#x672C;&#x6B65;&#x9AA4;&#xFF1A;</p>
<p>./demo.cc</p>
<pre><code class="language-C++"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;node_api.h&gt;</span> <span class="hljs-comment">// 1. &#x5F15;&#x5165; napi &#x5934;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>

<span class="hljs-comment">// 2. &#x903B;&#x8F91;&#x5F00;&#x53D1;&#x4E0E;&#x58F0;&#x660E;</span>
<span class="hljs-function">napi_value <span class="hljs-title">SayHello</span><span class="hljs-params">(napi_env env, napi_callback_info info)</span>
</span>{
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Hello World\\n&quot;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-literal">NULL</span>;
}

<span class="hljs-function">napi_value <span class="hljs-title">Init</span><span class="hljs-params">(napi_env env, napi_value exports)</span>
</span>{
    napi_status status;
    napi_value fn;

    status = <span class="hljs-built_in">napi_create_function</span>(env, <span class="hljs-literal">NULL</span>, <span class="hljs-number">0</span>, SayHello, <span class="hljs-literal">NULL</span>, &amp;fn);
    <span class="hljs-keyword">if</span> (status != napi_ok)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">NULL</span>;

    status = <span class="hljs-built_in">napi_set_named_property</span>(env, exports, <span class="hljs-string">&quot;sayHello&quot;</span>, fn);
    <span class="hljs-keyword">if</span> (status != napi_ok)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">NULL</span>;

    <span class="hljs-keyword">return</span> exports;
}

<span class="hljs-comment">// 3. &#x6A21;&#x5757;&#x6CE8;&#x518C;</span>
<span class="hljs-built_in">NAPI_MODULE</span>(NODE_GYP_MODULE_NAME, Init)
</code></pre>
<p>&#x6A21;&#x5757;&#x914D;&#x7F6E;&#x8DDF;&#x7F16;&#x8BD1;</p>
<p>./binding.gyp</p>
<pre><code class="language-json">{
    <span class="hljs-attr">&quot;targets&quot;</span>: [{
        <span class="hljs-attr">&quot;target_name&quot;</span>: <span class="hljs-string">&quot;demo&quot;</span>,
        <span class="hljs-attr">&quot;sources&quot;</span>: [<span class="hljs-string">&quot;./demo.cc&quot;</span>]
    }]
}
</code></pre>
<p>&#x751F;&#x6210;.node&#x6587;&#x4EF6;&#xFF08;&#x52A8;&#x6001;&#x94FE;&#x63A5;&#x5E93;&#xFF09;</p>
<pre><code class="language-bash">node-gyp rebuild <span class="hljs-comment"># ./build/Release/demo.node</span>
</code></pre>
<p>&#x8C03;&#x7528;.node&#x6587;&#x4EF6;</p>
<pre><code class="language-js"><span class="hljs-keyword">const</span> demo = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./build/Release/demo.node&apos;</span>)
demo.sayHello() <span class="hljs-comment">// Hello World</span>
</code></pre>
<h1 id="&#x601D;&#x8003;"><a href="#&#x601D;&#x8003;"></a>&#x601D;&#x8003;</h1>
<p>node&#x6269;&#x5C55;&#x65B9;&#x5F0F;</p>
<ul>
<li>&#x63D2;&#x4EF6;&#x5F00;&#x53D1;</li>
<li>WebAssembly</li>
</ul>
<p>&#x54EA;&#x79CD;&#x66F4;&#x5FEB;&#x4E9B;&#xFF1F;&#x6216;&#x8005;&#x5206;&#x522B;&#x9002;&#x7528;&#x4E8E;&#x54EA;&#x4E9B;&#x573A;&#x666F;&#xFF1F;</p>
<p>Wasm&#x88AB;&#x4FDD;&#x8BC1;&#x4E0E;&#x53EF;&#x4EE5;&#x8FD0;&#x884C;&#x60A8;&#x7684;Electron&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x7684;&#x4EFB;&#x4F55;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x517C;&#x5BB9;&#x3002;
C&#xFF0C;C++&#x548C;Rust&#x5C06;&#x6CA1;&#x6709;&#x6B64;&#x4FDD;&#x8BC1;&#x3002;&#x9664;&#x4E86;&#x4ECE;JavaScript&#x8C03;&#x7528;&#x7684;&#x5F00;&#x9500;&#x4E4B;&#x5916;&#xFF0C;&#x5B83;&#x4EEC;&#x5C06;&#x66F4;&#x52A0;&#x9AD8;&#x6548;&#x3002;
&#x6B63;&#x5728;&#x79EF;&#x6781;&#x5730;&#x5904;&#x7406;&#x4ECE;JavaScript&#x8C03;&#x7528;Wasm&#x7684;&#x5F00;&#x9500;&#xFF0C;&#x5E76;&#x4E14;&#x6B63;&#x5728;&#x51CF;&#x5C11;&#x6216;&#x5B8C;&#x5168;&#x6D88;&#x9664;&#x8FD9;&#x79CD;&#x5F00;&#x9500;&#x3002;</p>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li><a href="https://nodejs.fasionchan.com/zh_CN/latest/napi/quick-start.html">N-API&#x5165;&#x95E8;</a></li>
<li>Rust bindings for writing safe and fast native Node.js modules.<a href="https://github.com/neon-bindings/neon">neon</a></li>
<li><a href="https://lyn.one/2020/09/11/rust-napi">&#x7528; Rust &#x548C; N-API &#x5F00;&#x53D1;&#x9AD8;&#x6027;&#x80FD; Node.js &#x6269;&#x5C55;</a></li>
</ul>
`,s=[{level:1,title:"关于node的addon",children:[{level:2,title:"Addon方案演化",children:[{level:3,title:"NAN（Native Abstractions for Node.js）",children:[]},{level:3,title:"N-API",children:[]}]},{level:2,title:"应用",children:[{level:3,title:"C++扩展",children:[]}]}]},{level:1,title:"思考",children:[]},{level:1,title:"Reference",children:[]}];export{x as attributes,n as html,s as nestedHeaders};
