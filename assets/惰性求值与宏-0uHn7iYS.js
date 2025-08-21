const x={},s=`<p>&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x548C;&#x5B8F;&#x662F;&#x4E24;&#x4E2A;&#x7ECF;&#x5178;&#x7684;&#x5143;&#x7F16;&#x7A0B;&#x6982;&#x5FF5;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728; Lisp &#x7B49;&#x8BED;&#x8A00;&#x4E2D;&#xFF0C;&#x901A;&#x8FC7;&#x8FD9;&#x4E9B;&#x673A;&#x5236;&#x53EF;&#x4EE5;&#x8BA9;&#x7A0B;&#x5E8F;&#x5458;&#x7075;&#x6D3B;&#x63A7;&#x5236;&#x4EE3;&#x7801;&#x7684;&#x6267;&#x884C;&#x987A;&#x5E8F;&#x548C;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3002;&#x7528; JavaScript &#x5B9E;&#x73B0;&#x5B83;&#x4EEC;&#x7684;&#x57FA;&#x672C;&#x793A;&#x4F8B;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x8FD9;&#x4E9B;&#x6982;&#x5FF5;&#x3002;</p>
<h3 id="1. &#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#xFF08;Lazy Evaluation&#xFF09;"><a href="#1. &#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#xFF08;Lazy Evaluation&#xFF09;"></a>1. &#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#xFF08;Lazy Evaluation&#xFF09;</h3>
<p>&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x662F;&#x4E00;&#x79CD;&#x7B56;&#x7565;&#xFF0C;&#x5373;&#x5728;&#x771F;&#x6B63;&#x9700;&#x8981;&#x503C;&#x65F6;&#x624D;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x5B9A;&#x4E49;&#x65F6;&#x7ACB;&#x5373;&#x6C42;&#x503C;&#x3002;&#x8FD9;&#x79CD;&#x7B56;&#x7565;&#x6709;&#x52A9;&#x4E8E;&#x63D0;&#x9AD8;&#x6548;&#x7387;&#x3001;&#x907F;&#x514D;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x8BA1;&#x7B97;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x5904;&#x7406;&#x65E0;&#x7A77;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x5728; JavaScript &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x95ED;&#x5305;&#x548C;&#x51FD;&#x6570;&#x6765;&#x5B9E;&#x73B0;&#x57FA;&#x672C;&#x7684;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x673A;&#x5236;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x7684;&#x7B80;&#x5355;&#x5B9E;&#x73B0;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">delay</span>(<span class="hljs-params">expression</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> expression; <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x95ED;&#x5305;&#xFF0C;&#x4E0D;&#x7ACB;&#x5373;&#x6267;&#x884C; expression</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">force</span>(<span class="hljs-params">delayedExpression</span>) </span>{
  <span class="hljs-keyword">return</span> delayedExpression(); <span class="hljs-comment">// &#x6267;&#x884C;&#x95ED;&#x5305;&#xFF0C;&#x4ECE;&#x800C;&#x5F97;&#x5230;&#x771F;&#x6B63;&#x7684;&#x503C;</span>
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x7528;&#x6CD5;</span>
<span class="hljs-keyword">const</span> delayedValue = delay(<span class="hljs-function">() =&gt;</span> <span class="hljs-number">2</span> + <span class="hljs-number">3</span>); <span class="hljs-comment">// &#x5EF6;&#x8FDF;&#x6C42;&#x503C;</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#xFF0C;&#x5C1A;&#x672A;&#x8BA1;&#x7B97;&quot;</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;:&quot;</span>, force(delayedValue)); <span class="hljs-comment">// &#x901A;&#x8FC7; force &#x6267;&#x884C;&#x5E76;&#x5F97;&#x5230;&#x503C;</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><strong>delay</strong> &#x51FD;&#x6570;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x95ED;&#x5305;&#xFF08;&#x51FD;&#x6570;&#xFF09;&#xFF0C;&#x6B64;&#x65F6;&#x4E0D;&#x4F1A;&#x6267;&#x884C;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</li>
<li><strong>force</strong> &#x51FD;&#x6570;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x5EF6;&#x8FDF;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;&#x95ED;&#x5305;&#xFF09;&#x5E76;&#x7ACB;&#x5373;&#x6267;&#x884C;&#x5B83;&#xFF0C;&#x4ECE;&#x800C;&#x5F97;&#x5230;&#x5B9E;&#x9645;&#x7ED3;&#x679C;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x79CD;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x7684;&#x65B9;&#x5F0F;&#x53EF;&#x4EE5;&#x8BA9;&#x6211;&#x4EEC;&#x63A7;&#x5236;&#x4F55;&#x65F6;&#x6267;&#x884C;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5C24;&#x5176;&#x5728;&#x5904;&#x7406;&#x60F0;&#x6027;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF08;&#x5982;&#x6D41;&#xFF09;&#x65F6;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002;</p>
<h3 id="&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x5728;&#x6D41;&#x4E2D;&#x7684;&#x5E94;&#x7528;"><a href="#&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x5728;&#x6D41;&#x4E2D;&#x7684;&#x5E94;&#x7528;"></a>&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x5728;&#x6D41;&#x4E2D;&#x7684;&#x5E94;&#x7528;</h3>
<p>&#x53EF;&#x4EE5;&#x5C06;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x5E94;&#x7528;&#x4E8E;&#x6D41;&#x5F0F;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF0C;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x60F0;&#x6027;&#x5217;&#x8868;&#xFF08;stream&#xFF09;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x5EF6;&#x8FDF;&#x6784;&#x9020;&#x6D41;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cons</span>(<span class="hljs-params">head, tailThunk</span>) </span>{
  <span class="hljs-keyword">return</span> { head, <span class="hljs-attr">tail</span>: tailThunk }; <span class="hljs-comment">// tail &#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">head</span>(<span class="hljs-params">stream</span>) </span>{
  <span class="hljs-keyword">return</span> stream.head;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tail</span>(<span class="hljs-params">stream</span>) </span>{
  <span class="hljs-keyword">return</span> stream.tail(); <span class="hljs-comment">// &#x901A;&#x8FC7;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;</span>
}

<span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4ECE; start &#x5F00;&#x59CB;&#x7684;&#x81EA;&#x7136;&#x6570;&#x6D41;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">naturalNumbers</span>(<span class="hljs-params">start</span>) </span>{
  <span class="hljs-keyword">return</span> cons(start, <span class="hljs-function">() =&gt;</span> naturalNumbers(start + <span class="hljs-number">1</span>));
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x7528;&#x6CD5;</span>
<span class="hljs-keyword">const</span> numbers = naturalNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// &#x5EF6;&#x8FDF;&#x6784;&#x9020;&#x4E86;&#x4E00;&#x4E2A;&#x4ECE;1&#x5F00;&#x59CB;&#x7684;&#x81EA;&#x7136;&#x6570;&#x6D41;</span>
<span class="hljs-built_in">console</span>.log(head(numbers)); <span class="hljs-comment">// &#x8F93;&#x51FA; 1</span>
<span class="hljs-built_in">console</span>.log(head(tail(numbers))); <span class="hljs-comment">// &#x8F93;&#x51FA; 2</span>
<span class="hljs-built_in">console</span>.log(head(tail(tail(numbers)))); <span class="hljs-comment">// &#x8F93;&#x51FA; 3</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><strong>cons</strong> &#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6D41;&#x8282;&#x70B9;&#xFF0C;&#x5176;&#x4E2D; <code>tail</code> &#x662F;&#x4E00;&#x4E2A;&#x95ED;&#x5305;&#x51FD;&#x6570;&#xFF0C;&#x53EA;&#x6709;&#x5728;&#x8BBF;&#x95EE;&#x65F6;&#x624D;&#x4F1A;&#x9012;&#x5F52;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x3002;</li>
<li><code>naturalNumbers</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4ECE;&#x6307;&#x5B9A;&#x503C;&#x5F00;&#x59CB;&#x7684;&#x81EA;&#x7136;&#x6570;&#x6D41;&#xFF0C;&#x4F7F;&#x7528;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x786E;&#x4FDD;&#x6BCF;&#x6B21;&#x8BBF;&#x95EE; <code>tail</code> &#x65F6;&#x624D;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x3002;</li>
</ul>
<p>&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x6784;&#x5EFA;&#x65E0;&#x9650;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x5E76;&#x9010;&#x6B65;&#x751F;&#x6210;&#x503C;&#x3002;</p>
<h3 id="2. &#x5B8F;&#xFF08;Macros&#xFF09;"><a href="#2. &#x5B8F;&#xFF08;Macros&#xFF09;"></a>2. &#x5B8F;&#xFF08;Macros&#xFF09;</h3>
<p>&#x5B8F;&#x662F;&#x5143;&#x7F16;&#x7A0B;&#x4E2D;&#x91CD;&#x8981;&#x7684;&#x5DE5;&#x5177;&#xFF0C;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5728;&#x4EE3;&#x7801;&#x8FD0;&#x884C;&#x4E4B;&#x524D;&#x751F;&#x6210;&#x548C;&#x64CD;&#x4F5C;&#x4EE3;&#x7801;&#x7247;&#x6BB5;&#x3002;&#x867D;&#x7136; JavaScript &#x4E0D;&#x652F;&#x6301; Lisp &#x90A3;&#x79CD;&#x7ECF;&#x5178;&#x7684;&#x5B8F;&#xFF08;&#x7F16;&#x8BD1;&#x65F6;&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF09;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x51FD;&#x6570;&#x6A21;&#x62DF;&#x4E00;&#x4E9B;&#x57FA;&#x672C;&#x7684;&#x5B8F;&#x884C;&#x4E3A;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x53EF;&#x4EE5;&#x7528; JavaScript &#x7684;&#x9AD8;&#x9636;&#x51FD;&#x6570;&#x6765;&#x5B9E;&#x73B0;&#x4E00;&#x4E9B;&#x7B80;&#x5355;&#x7684;&#x201C;&#x8BED;&#x6CD5;&#x6269;&#x5C55;&#x201D;&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x6A21;&#x62DF;&#x5B8F;&#x5C55;&#x5F00;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x7B80;&#x5355;&#x7684;&#x5B8F;&#x7CFB;&#x7EDF;&#xFF0C;&#x4F7F;&#x7528;&#x51FD;&#x6570;&#x6765;&#x5B9E;&#x73B0;&#x4E00;&#x4E9B;&#x5E38;&#x89C1;&#x7684;&#x6A21;&#x5F0F;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">defineMacro</span>(<span class="hljs-params">name, expansion</span>) </span>{
  macros[name] = expansion;
}

<span class="hljs-keyword">const</span> macros = {};

<span class="hljs-comment">// &#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5B8F;&#x5C55;&#x5F00;&#x5668;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">expandMacro</span>(<span class="hljs-params">expression</span>) </span>{
  <span class="hljs-keyword">const</span> [name, ...args] = expression;
  <span class="hljs-keyword">if</span> (macros[name]) {
    <span class="hljs-comment">// &#x5982;&#x679C;&#x662F;&#x5B8F;&#xFF0C;&#x5219;&#x6267;&#x884C;&#x5B8F;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x66FF;&#x6362;&#x539F;&#x59CB;&#x8868;&#x8FBE;&#x5F0F;</span>
    <span class="hljs-keyword">return</span> macros[name](...args);
  }
  <span class="hljs-comment">// &#x5426;&#x5219;&#x9012;&#x5F52;&#x5C55;&#x5F00;&#x5B50;&#x8868;&#x8FBE;&#x5F0F;</span>
  <span class="hljs-keyword">return</span> expression.map(<span class="hljs-function"><span class="hljs-params">arg</span> =&gt;</span> (<span class="hljs-built_in">Array</span>.isArray(arg) ? expandMacro(arg) : arg));
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x5B8F;</span>
defineMacro(<span class="hljs-string">&quot;when&quot;</span>, <span class="hljs-function">(<span class="hljs-params">condition, body</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> [<span class="hljs-string">&quot;if&quot;</span>, condition, body, <span class="hljs-literal">null</span>];
});

<span class="hljs-comment">// &#x4F7F;&#x7528;&#x5B8F;&#x7684;&#x4EE3;&#x7801;</span>
<span class="hljs-keyword">const</span> expr = [<span class="hljs-string">&quot;when&quot;</span>, [<span class="hljs-string">&quot;&lt;&quot;</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>], [<span class="hljs-string">&quot;print&quot;</span>, <span class="hljs-string">&quot;3 is less than 5&quot;</span>]];
<span class="hljs-built_in">console</span>.log(expandMacro(expr));
<span class="hljs-comment">// &#x8F93;&#x51FA;: [&quot;if&quot;, [&quot;&lt;&quot;, 3, 5], [&quot;print&quot;, &quot;3 is less than 5&quot;], null]</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><strong>defineMacro</strong> &#x51FD;&#x6570;&#x7528;&#x4E8E;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x5B8F;&#xFF0C;&#x5C06;&#x5B8F;&#x540D;&#x79F0;&#x4E0E;&#x5176;&#x5C55;&#x5F00;&#x51FD;&#x6570;&#x5173;&#x8054;&#x3002;</li>
<li><strong>expandMacro</strong> &#x51FD;&#x6570;&#x7528;&#x4E8E;&#x9012;&#x5F52;&#x5730;&#x5BF9;&#x8868;&#x8FBE;&#x5F0F;&#x8FDB;&#x884C;&#x5B8F;&#x5C55;&#x5F00;&#x3002;&#x5F53;&#x9047;&#x5230;&#x5B8F;&#x540D;&#x65F6;&#xFF0C;&#x4F1A;&#x8C03;&#x7528;&#x76F8;&#x5E94;&#x7684;&#x5C55;&#x5F00;&#x51FD;&#x6570;&#xFF0C;&#x5C06;&#x5176;&#x66FF;&#x6362;&#x4E3A;&#x5C55;&#x5F00;&#x540E;&#x7684;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p>&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x6211;&#x4EEC;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5B8F;&#x7CFB;&#x7EDF;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x8FD0;&#x884C;&#x524D;&#x66FF;&#x6362;&#x4EE3;&#x7801;&#x6A21;&#x5F0F;&#x3002;&#x8FD9;&#x867D;&#x7136;&#x4E0D;&#x662F;&#x771F;&#x6B63;&#x7684;&#x5B8F;&#xFF08;&#x7F16;&#x8BD1;&#x65F6;&#x751F;&#x6210;&#x4EE3;&#x7801;&#xFF09;&#xFF0C;&#x4F46;&#x6A21;&#x62DF;&#x4E86;&#x4E00;&#x4E9B;&#x5B8F;&#x7684;&#x57FA;&#x672C;&#x884C;&#x4E3A;&#xFF0C;&#x4F8B;&#x5982;&#x751F;&#x6210;&#x6761;&#x4EF6;&#x8BED;&#x53E5; <code>if</code> &#x7684;&#x6A21;&#x5F0F;&#x3002;</p>
<h3 id="3. &#x5B8F;&#x4E0E;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x7684;&#x7ED3;&#x5408;"><a href="#3. &#x5B8F;&#x4E0E;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x7684;&#x7ED3;&#x5408;"></a>3. &#x5B8F;&#x4E0E;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x7684;&#x7ED3;&#x5408;</h3>
<p>&#x5B8F;&#x548C;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x53EF;&#x4EE5;&#x7ED3;&#x5408;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x5B9E;&#x73B0;&#x66F4;&#x590D;&#x6742;&#x7684;&#x63A7;&#x5236;&#x7ED3;&#x6784;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A; <code>unless</code> &#x5B8F;&#x7684;&#x4F8B;&#x5B50;&#xFF08;&#x53EA;&#x6709;&#x5728;&#x6761;&#x4EF6;&#x4E3A;&#x5047;&#x65F6;&#x624D;&#x6267;&#x884C;&#x67D0;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF09;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// unless &#x5B8F;&#xFF0C;&#x53EA;&#x5728;&#x6761;&#x4EF6;&#x4E3A; false &#x65F6;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x5757;</span>
defineMacro(<span class="hljs-string">&quot;unless&quot;</span>, <span class="hljs-function">(<span class="hljs-params">condition, body</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> [<span class="hljs-string">&quot;if&quot;</span>, [<span class="hljs-string">&quot;not&quot;</span>, condition], body, <span class="hljs-literal">null</span>];
});

<span class="hljs-comment">// not &#x51FD;&#x6570;&#x5B9E;&#x73B0;</span>
macros[<span class="hljs-string">&quot;not&quot;</span>] = <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> [<span class="hljs-string">&quot;!&quot;</span>, x];

<span class="hljs-comment">// &#x4F7F;&#x7528; unless &#x5B8F;</span>
<span class="hljs-keyword">const</span> expr2 = [<span class="hljs-string">&quot;unless&quot;</span>, [<span class="hljs-string">&quot;=&quot;</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-string">&quot;print&quot;</span>, <span class="hljs-string">&quot;1 is not equal to 2&quot;</span>]];
<span class="hljs-built_in">console</span>.log(expandMacro(expr2));
<span class="hljs-comment">// &#x8F93;&#x51FA;: [&quot;if&quot;, [&quot;!&quot;, [&quot;=&quot;, 1, 2]], [&quot;print&quot;, &quot;1 is not equal to 2&quot;], null]</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><code>unless</code> &#x5B8F;&#x5C06;&#x6761;&#x4EF6;&#x53D6;&#x53CD;&#xFF0C;&#x53EA;&#x5728;&#x6761;&#x4EF6;&#x4E3A;&#x5047;&#x65F6;&#x624D;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x5757;&#x3002;</li>
<li><code>not</code> &#x5B8F;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x903B;&#x8F91;&#x975E;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</li>
</ul>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<ul>
<li><strong>&#x5EF6;&#x8FDF;&#x6C42;&#x503C;</strong>&#x901A;&#x8FC7;&#x95ED;&#x5305;&#x6765;&#x5EF6;&#x8FDF;&#x8BA1;&#x7B97;&#xFF0C;&#x5E38;&#x7528;&#x4E8E;&#x60F0;&#x6027;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x3002;</li>
<li><strong>&#x5B8F;</strong>&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x6A21;&#x5F0F;&#xFF0C;&#x4F7F;&#x4EE3;&#x7801;&#x66F4;&#x5177;&#x53EF;&#x8BFB;&#x6027;&#x548C;&#x6269;&#x5C55;&#x6027;&#xFF0C;&#x6A21;&#x62DF;&#x4E00;&#x4E9B;&#x6761;&#x4EF6;&#x63A7;&#x5236;&#x548C;&#x903B;&#x8F91;&#x7ED3;&#x6784;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x6982;&#x5FF5;&#x5728;&#x51FD;&#x6570;&#x5F0F;&#x7F16;&#x7A0B;&#x548C;&#x5143;&#x7F16;&#x7A0B;&#x4E2D;&#x5341;&#x5206;&#x5F3A;&#x5927;&#xFF0C;&#x8BA9;&#x6211;&#x4EEC;&#x80FD;&#x7075;&#x6D3B;&#x63A7;&#x5236;&#x4EE3;&#x7801;&#x7684;&#x6267;&#x884C;&#x987A;&#x5E8F;&#x548C;&#x751F;&#x6210;&#x903B;&#x8F91;&#x7ED3;&#x6784;&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x66F4;&#x5F3A;&#x5927;&#x7684;&#x8BED;&#x8A00;&#x529F;&#x80FD;&#x3002;</p>
`,n=[{level:3,title:"1. 延迟求值（Lazy Evaluation）",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"延迟求值在流中的应用",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"2. 宏（Macros）",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"3. 宏与延迟求值的结合",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"总结",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
