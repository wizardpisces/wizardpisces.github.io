const x={title:"Vue SSR 经验",description:null},n=`<h1 id="Vue SSR"><a href="#Vue SSR"></a>Vue SSR</h1>
<h2 id="ssr hydrate&#xA0;&#x539F;&#x7406;"><a href="#ssr hydrate&#xA0;&#x539F;&#x7406;"></a>ssr hydrate&#xA0;&#x539F;&#x7406;</h2>
<p>&#x57FA;&#x672C;&#x731C;&#x60F3;&#xFF1A;</p>
<ol>
<li>&#x6309;&#x7167;&#x5C42;&#x7EA7;&#x5339;&#x914D;&#xFF0C;&#x53EA;&#x5728;&#x4E0D;&#x5339;&#x914D;&#x7684;&#x65F6;&#x5019;&#x62A5;&#x9519;&#xFF0C;&#x5C42;&#x6B21;&#x6B63;&#x786E;&#x5373;&#x53EF;</li>
<li>&#x53EA;&#x5728;data-server-rendered=&quot;true&quot;&#x7684;&#x65F6;&#x5019;hydrate&#xFF0C;&#x968F;&#x540E;&#x79FB;&#x9664;data-server-rendered
server.html</li>
</ol>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<p>will&#xA0;match&#xA0;client</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<p>but&#xA0;not&#xA0;match&#xA0;client</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<h2 id="&#x534F;&#x540C;&#x7684;&#x5E93;"><a href="#&#x534F;&#x540C;&#x7684;&#x5E93;"></a>&#x534F;&#x540C;&#x7684;&#x5E93;</h2>
<h3 id="vue-lazy-hydrate&#x539F;&#x7406;"><a href="#vue-lazy-hydrate&#x539F;&#x7406;"></a><a href="https://github.com/maoberlehner/vue-lazy-hydration">vue-lazy-hydrate</a>&#x539F;&#x7406;</h3>
<ul>
<li>&#x670D;&#x52A1;&#x7AEF;&#xFF1A;</li>
</ul>
<ol>
<li>hydrate=true&#xA0;-&gt;&#xA0;&#x6839;&#x636E;component &#x6E32;&#x67D3;&#x51FA;&#x6765;&#x7684;&#x6B63;&#x5E38;&#xA0;html</li>
</ol>
<ul>
<li>&#x5BA2;&#x6237;&#x7AEF;&#xFF1A;</li>
</ul>
<p>&#x5C06;&#x7EC4;&#x4EF6;&#x5C01;&#x88C5;&#x6210; async component&#xFF0C;&#x5728;&#x6761;&#x4EF6;&#x6210;&#x719F;&#x7684;&#x65F6;&#x5019;resolve&#xFF08;&#x6D4F;&#x89C8;&#x5668;&#x7A7A;&#x95F2;/dom&#x53EF;&#x89C1;/&#x4E8B;&#x4EF6;&#x89E6;&#x53D1;&#xFF09;</p>
<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">makeNonce</span>(<span class="hljs-params">{ component, hydrationPromise }</span>) </span>{
  <span class="hljs-keyword">if</span> (isServer) <span class="hljs-keyword">return</span> component;

  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> hydrationPromise.then(<span class="hljs-function">() =&gt;</span> resolveComponent(component));
}
</code></pre>
<h4 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h4>
<p>&#x539F;&#x7406;&#x4E0A;&#x4E0D;&#x662F;&#x771F;&#x5B9E;&#x610F;&#x4E49;&#x4E0A;&#x7684;hydrate&#xFF0C;&#x800C;&#x662F;&#x5F02;&#x6B65;&#x7EC4;&#x4EF6;&#x7684;&#x6E32;&#x67D3;&#xFF1B;
&#x6240;&#x4EE5;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x7EC4;&#x4EF6;&#x5728;&#x8F6C;&#x6362;&#x6210; async&#x7684;&#x65F6;&#x5019;&#x4F1A;&#x51FA;&#x95EE;&#x9898;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;&#x4F1A;&#x6709;&#x8DDF;&#x6FC0;&#x6D3B;&#x7684;&#x7EC4;&#x4EF6;&#x7684;&#x4EA4;&#x4E92;&#xFF09;&#xFF0C;&#x90A3;&#x5C31;&#x4E0D;&#x9002;&#x7528;&#x8FD9;&#x4E2A;package</p>
<h3 id="vue-client-only&#x539F;&#x7406;"><a href="#vue-client-only&#x539F;&#x7406;"></a>vue-client-only&#x539F;&#x7406;</h3>
<p>&#x539F;&#x7406;&#xFF1A;vue-client-only &#x7EC4;&#x4EF6;&#x7684; render &#x51FD;&#x6570;&#x7B80;&#x5355;&#x5C01;&#x88C5;</p>
<ul>
<li>&#x670D;&#x52A1;&#x7AEF;&#x8FD4;&#x56DE;h(false)&#xA0;&#x5360;&#x4F4D;</li>
<li>&#x5BA2;&#x6237;&#x7AEF;&#xFF1A;&#x6839;&#x636E;parent._isMounted&#xA0;&#x8FD4;&#x56DE;&#x6B63;&#x5E38;&#x7EC4;&#x4EF6; &#xFF08;&#x5728;&#x6D4F;&#x89C8;&#x5668;mounted&#x7684;&#x65F6;&#x5019;&#xFF09;</li>
</ul>
<h2 id="&#x5751;"><a href="#&#x5751;"></a>&#x5751;</h2>
<h3 id="in NuxtJs&#x6846;&#x67B6;"><a href="#in NuxtJs&#x6846;&#x67B6;"></a>in NuxtJs&#x6846;&#x67B6;</h3>
<ul>
<li>in dev : true(&#x4EE3;&#x8868;plugin middleware&#x7B49;&#x6587;&#x4EF6;&#x4F1A;&#x5728;&#x6BCF;&#x4E2A;&#x8BF7;&#x6C42;&#x8FDB;&#x5165;&#x7684;&#x65F6;&#x5019;&#x91CD;&#x65B0;&#x8F7D;&#x5165;)</li>
<li>in production: false &#xFF08;&#x4EE3;&#x8868;&#x4E0D;&#x4F1A;&#x91CD;&#x65B0;&#x8F7D;&#x5165;plugin&#xFF0C;&#x53EA;&#x4F1A;&#x53CD;&#x590D;&#x6267;&#x884C;&#x8FD4;&#x56DE;&#x7684;&#x51FD;&#x6570;&#xFF09;</li>
</ul>
<h3 id="SSR runInNewContext demo"><a href="#SSR runInNewContext demo"></a>SSR runInNewContext demo</h3>
<ol>
<li>bundle code</li>
</ol>
<p>./vue-ssr.js</p>
<h3 id="reference"><a href="#reference"></a>reference</h3>
<ul>
<li><a href="https://nodejs.org/api/vm.html">node vm</a></li>
<li><a href="https://nodejs.org/api/modules.html#modules_the_module_wrapper">node module</a></li>
<li><a href="https://segmentfault.com/a/1190000008587112">node require&#x89E3;&#x6790;</a></li>
<li><a href="https://harttle.land/2020/02/10/deep-into-vue-ssr.html">vue ssr in depth</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/61348429">vue ssr in depth2</a></li>
</ul>
`,e=[{level:1,title:"Vue SSR",children:[{level:2,title:"ssr hydrate 原理",children:[]},{level:2,title:"协同的库",children:[{level:3,title:"vue-lazy-hydrate原理",children:[{level:4,title:"结论",children:[]}]},{level:3,title:"vue-client-only原理",children:[]}]},{level:2,title:"坑",children:[{level:3,title:"in NuxtJs框架",children:[]},{level:3,title:"SSR runInNewContext demo",children:[]},{level:3,title:"reference",children:[]}]}]}];export{x as attributes,n as html,e as nestedHeaders};
