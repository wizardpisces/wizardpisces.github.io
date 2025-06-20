const s={},x=`<p>Structure and Interpretation of Computer</p>
<h2 id="&#x7B2C;&#x4E00;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x62BD;&#x8C61;&#x8FC7;&#x7A0B;&#xFF08;Building Abstractions with Procedures&#xFF09;"><a href="#&#x7B2C;&#x4E00;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x62BD;&#x8C61;&#x8FC7;&#x7A0B;&#xFF08;Building Abstractions with Procedures&#xFF09;"></a>&#x7B2C;&#x4E00;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x62BD;&#x8C61;&#x8FC7;&#x7A0B;&#xFF08;Building Abstractions with Procedures&#xFF09;</h2>
<h2 id="&#x7B2C;&#x4E8C;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x6570;&#x636E;&#x62BD;&#x8C61;&#xFF08;Building Abstractions with Data&#xFF09;"><a href="#&#x7B2C;&#x4E8C;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x6570;&#x636E;&#x62BD;&#x8C61;&#xFF08;Building Abstractions with Data&#xFF09;"></a>&#x7B2C;&#x4E8C;&#x7AE0;&#xFF1A;&#x6784;&#x5EFA;&#x6570;&#x636E;&#x62BD;&#x8C61;&#xFF08;Building Abstractions with Data&#xFF09;</h2>
<h2 id="&#x7B2C;&#x4E09;&#x7AE0;&#xFF1A;&#x6A21;&#x5757;&#x5316;&#x3001;&#x5BF9;&#x8C61;&#x548C;&#x72B6;&#x6001;&#xFF08;Modularity, Objects, and State&#xFF09;"><a href="#&#x7B2C;&#x4E09;&#x7AE0;&#xFF1A;&#x6A21;&#x5757;&#x5316;&#x3001;&#x5BF9;&#x8C61;&#x548C;&#x72B6;&#x6001;&#xFF08;Modularity, Objects, and State&#xFF09;"></a>&#x7B2C;&#x4E09;&#x7AE0;&#xFF1A;&#x6A21;&#x5757;&#x5316;&#x3001;&#x5BF9;&#x8C61;&#x548C;&#x72B6;&#x6001;&#xFF08;Modularity, Objects, and State&#xFF09;</h2>
<h2 id="&#x7B2C;&#x56DB;&#x7AE0;&#xFF1A;&#x5143;&#x8BED;&#x8A00;&#x62BD;&#x8C61;&#xFF08;Metalinguistic Abstraction&#xFF09;"><a href="#&#x7B2C;&#x56DB;&#x7AE0;&#xFF1A;&#x5143;&#x8BED;&#x8A00;&#x62BD;&#x8C61;&#xFF08;Metalinguistic Abstraction&#xFF09;"></a>&#x7B2C;&#x56DB;&#x7AE0;&#xFF1A;&#x5143;&#x8BED;&#x8A00;&#x62BD;&#x8C61;&#xFF08;Metalinguistic Abstraction&#xFF09;</h2>
<p>&#x300A;&#x8BA1;&#x7B97;&#x673A;&#x7A0B;&#x5E8F;&#x7684;&#x6784;&#x9020;&#x4E0E;&#x89E3;&#x91CA;&#x300B;&#x7B2C;4&#x7AE0;&#x4E2D;&#x7684;<strong>&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;</strong>&#x548C;<strong>&#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;</strong>&#x662F;&#x5173;&#x4E8E;&#x89E3;&#x91CA;&#x5668;&#x7684;&#x6784;&#x9020;&#x53CA;&#x5176;&#x6269;&#x5C55;&#x7684;&#x7ECF;&#x5178;&#x8BDD;&#x9898;&#x3002;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; JavaScript &#x6765;&#x5B9E;&#x73B0;&#x4E00;&#x4E9B;&#x7B80;&#x5316;&#x7248;&#x7684;&#x793A;&#x4F8B;&#xFF0C;&#x5E2E;&#x52A9;&#x4F60;&#x7406;&#x89E3;&#x8FD9;&#x4E9B;&#x6982;&#x5FF5;&#x3002;</p>
<h3 id="1. &#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#xFF08;Meta-circular Evaluator&#xFF09;"><a href="#1. &#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#xFF08;Meta-circular Evaluator&#xFF09;"></a>1. &#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#xFF08;Meta-circular Evaluator&#xFF09;</h3>
<p>&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#x662F;&#x4E00;&#x4E2A;&#x89E3;&#x91CA;&#x5668;&#xFF0C;&#x5B83;&#x4F7F;&#x7528;&#x81EA;&#x8EAB;&#x8BED;&#x8A00;&#x6765;&#x89E3;&#x91CA;&#x548C;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x3002;&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#x5668;&#xFF0C;&#x53EF;&#x4EE5;&#x89E3;&#x6790;&#x548C;&#x8BA1;&#x7B97;&#x7C7B;&#x4F3C;&#x4E8E; Lisp &#x7684;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x4F8B;&#x5982; <code>(add 1 2)</code> &#x6216; <code>(mul 3 4)</code>&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x4F7F;&#x7528; JavaScript &#x5B9E;&#x73B0;&#x7684;&#x7B80;&#x5355;&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x7B80;&#x5355;&#x7684;&#x73AF;&#x5883;&#xFF0C;&#x7528;&#x4E8E;&#x5B58;&#x50A8;&#x53D8;&#x91CF;&#x548C;&#x64CD;&#x4F5C;</span>
<span class="hljs-keyword">const</span> globalEnv = {
  <span class="hljs-attr">add</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b,
  <span class="hljs-attr">sub</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a - b,
  <span class="hljs-attr">mul</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a * b,
  <span class="hljs-attr">div</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a / b,
};

<span class="hljs-comment">// &#x89E3;&#x6790;&#x8F93;&#x5165;&#x5B57;&#x7B26;&#x4E32;&#x4E3A;&#x62BD;&#x8C61;&#x8BED;&#x6CD5;&#x6811;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">parse</span>(<span class="hljs-params">input</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">JSON</span>.parse(input
    .replace(<span class="hljs-regexp">/\\(/g</span>, <span class="hljs-string">&apos;[&apos;</span>)    <span class="hljs-comment">// &#x5C06; &quot;(&quot; &#x66FF;&#x6362;&#x4E3A; &quot;[&quot;</span>
    .replace(<span class="hljs-regexp">/\\)/g</span>, <span class="hljs-string">&apos;]&apos;</span>)    <span class="hljs-comment">// &#x5C06; &quot;)&quot; &#x66FF;&#x6362;&#x4E3A; &quot;]&quot;</span>
    .replace(<span class="hljs-regexp">/(\\w+)/g</span>, <span class="hljs-string">&apos;&quot;$1&quot;&apos;</span>)); <span class="hljs-comment">// &#x5C06;&#x5355;&#x8BCD;&#x52A0;&#x4E0A;&#x5F15;&#x53F7;</span>
}

<span class="hljs-comment">// &#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">evaluate</span>(<span class="hljs-params">expr, env = globalEnv</span>) </span>{
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> expr === <span class="hljs-string">&apos;number&apos;</span>) {
    <span class="hljs-keyword">return</span> expr;
  }
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> expr === <span class="hljs-string">&apos;string&apos;</span>) {
    <span class="hljs-keyword">return</span> env[expr];
  }
  
  <span class="hljs-keyword">const</span> [operator, ...args] = expr;
  <span class="hljs-keyword">const</span> proc = evaluate(operator, env);
  <span class="hljs-keyword">const</span> values = args.map(<span class="hljs-function"><span class="hljs-params">arg</span> =&gt;</span> evaluate(arg, env));
  
  <span class="hljs-keyword">return</span> proc(...values);
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x8868;&#x8FBE;&#x5F0F;</span>
<span class="hljs-keyword">const</span> expr = parse(<span class="hljs-string">&apos;(add 1 (mul 2 3))&apos;</span>); <span class="hljs-comment">// &#x8868;&#x793A; add(1, mul(2, 3))</span>
<span class="hljs-built_in">console</span>.log(evaluate(expr)); <span class="hljs-comment">// &#x8F93;&#x51FA; 7</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><strong>parse</strong> &#x51FD;&#x6570;&#x5C06;&#x7C7B;&#x4F3C; <code>(add 1 (mul 2 3))</code> &#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5D4C;&#x5957;&#x7684;&#x6570;&#x7EC4;&#x7ED3;&#x6784; <code>[ &quot;add&quot;, 1, [&quot;mul&quot;, 2, 3] ]</code>&#x3002;</li>
<li><strong>evaluate</strong> &#x51FD;&#x6570;&#x662F;&#x6838;&#x5FC3;&#x7684;&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x9012;&#x5F52;&#x6765;&#x89E3;&#x6790;&#x8868;&#x8FBE;&#x5F0F;&#x5E76;&#x8C03;&#x7528;&#x76F8;&#x5E94;&#x7684;&#x64CD;&#x4F5C;&#x51FD;&#x6570;&#x3002;
<ul>
<li>&#x5982;&#x679C;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#xFF0C;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x3002;</li>
<li>&#x5982;&#x679C;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x53D8;&#x91CF;&#x540D;&#x6216;&#x64CD;&#x4F5C;&#x7B26;&#xFF09;&#xFF0C;&#x5219;&#x4ECE;&#x73AF;&#x5883; <code>env</code> &#x4E2D;&#x67E5;&#x627E;&#x3002;</li>
<li>&#x5982;&#x679C;&#x662F;&#x4E00;&#x4E2A;&#x5D4C;&#x5957;&#x6570;&#x7EC4;&#xFF0C;&#x5B83;&#x4F1A;&#x9012;&#x5F52;&#x5730;&#x6C42;&#x503C;&#x64CD;&#x4F5C;&#x7B26;&#x548C;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x5C06;&#x53C2;&#x6570;&#x5E94;&#x7528;&#x5230;&#x64CD;&#x4F5C;&#x7B26;&#x4E0A;&#x3002;</li>
</ul>
</li>
</ul>
<p>&#x8FD9;&#x4E2A;&#x89E3;&#x91CA;&#x5668;&#x5C31;&#x662F;&#x6240;&#x8C13;&#x7684;&#x201C;&#x5143;&#x5FAA;&#x73AF;&#x201D;&#x7684;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x5728; JavaScript &#x4E2D;&#x89E3;&#x91CA;&#x4E86;&#x4E00;&#x4E2A;&#x5FAE;&#x578B;&#x7684; Lisp &#x5F0F;&#x8BED;&#x8A00;&#xFF0C;&#x800C; JavaScript &#x672C;&#x8EAB;&#x4E5F;&#x5728;&#x8FD0;&#x884C;&#x89E3;&#x91CA;&#x5668;&#x3002;&#x8FD9;&#x79CD;&#x7ED3;&#x6784;&#x975E;&#x5E38;&#x9002;&#x5408;&#x7406;&#x89E3;&#x89E3;&#x91CA;&#x5668;&#x7684;&#x539F;&#x7406;&#x3002;</p>
<h3 id="2. &#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;&#x4E0E;&#x7EC4;&#x5408;&#x8BED;&#x8A00;"><a href="#2. &#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;&#x4E0E;&#x7EC4;&#x5408;&#x8BED;&#x8A00;"></a>2. &#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;&#x4E0E;&#x7EC4;&#x5408;&#x8BED;&#x8A00;</h3>
<p>&#x5728;&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8FDB;&#x4E00;&#x6B65;&#x6269;&#x5C55;&#xFF0C;&#x8BA9;&#x89E3;&#x91CA;&#x5668;&#x652F;&#x6301;&#x66F4;&#x590D;&#x6742;&#x7684;&#x5D4C;&#x5957;&#x6C42;&#x503C;&#x548C;&#x65B0;&#x7684;&#x8BED;&#x8A00;&#x7279;&#x6027;&#xFF0C;&#x6BD4;&#x5982;&#x5EF6;&#x8FDF;&#x6C42;&#x503C;&#x6216;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#xFF0C;&#x6211;&#x4EEC;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x65B0;&#x7684; <code>if</code> &#x8BED;&#x6CD5;&#x548C; <code>define</code> &#x8BED;&#x6CD5;&#xFF0C;&#x5B9E;&#x73B0;&#x6761;&#x4EF6;&#x6C42;&#x503C;&#x548C;&#x53D8;&#x91CF;&#x7ED1;&#x5B9A;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x66F4;&#x65B0;&#x73AF;&#x5883;&#xFF0C;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x64CD;&#x4F5C;&#x7B26;</span>
<span class="hljs-keyword">const</span> extendedEnv = {
  ...globalEnv,
  <span class="hljs-attr">define</span>: <span class="hljs-function">(<span class="hljs-params">name, value, env</span>) =&gt;</span> { env[name] = value; },
  <span class="hljs-attr">if</span>: <span class="hljs-function">(<span class="hljs-params">cond, thenBranch, elseBranch</span>) =&gt;</span> (cond ? thenBranch : elseBranch)
};

<span class="hljs-comment">// &#x4FEE;&#x6539; evaluate &#x51FD;&#x6570;&#x652F;&#x6301; define &#x548C; if</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">extendedEvaluate</span>(<span class="hljs-params">expr, env = extendedEnv</span>) </span>{
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> expr === <span class="hljs-string">&apos;number&apos;</span>) {
    <span class="hljs-keyword">return</span> expr;
  }
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> expr === <span class="hljs-string">&apos;string&apos;</span>) {
    <span class="hljs-keyword">return</span> env[expr];
  }

  <span class="hljs-keyword">const</span> [operator, ...args] = expr;

  <span class="hljs-keyword">if</span> (operator === <span class="hljs-string">&apos;define&apos;</span>) {
    <span class="hljs-keyword">const</span> [name, valueExpr] = args;
    <span class="hljs-keyword">const</span> value = extendedEvaluate(valueExpr, env);
    env[name] = value;
    <span class="hljs-keyword">return</span> value;
  }

  <span class="hljs-keyword">if</span> (operator === <span class="hljs-string">&apos;if&apos;</span>) {
    <span class="hljs-keyword">const</span> [condExpr, thenExpr, elseExpr] = args;
    <span class="hljs-keyword">const</span> cond = extendedEvaluate(condExpr, env);
    <span class="hljs-keyword">return</span> extendedEvaluate(cond ? thenExpr : elseExpr, env);
  }

  <span class="hljs-comment">// &#x4E00;&#x822C;&#x8FD0;&#x7B97;&#x5904;&#x7406;</span>
  <span class="hljs-keyword">const</span> proc = extendedEvaluate(operator, env);
  <span class="hljs-keyword">const</span> values = args.map(<span class="hljs-function"><span class="hljs-params">arg</span> =&gt;</span> extendedEvaluate(arg, env));
  <span class="hljs-keyword">return</span> proc(...values);
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;define &#x548C; if &#x8868;&#x8FBE;&#x5F0F;</span>
<span class="hljs-keyword">const</span> expr1 = parse(<span class="hljs-string">&apos;(define x (add 1 2))&apos;</span>); <span class="hljs-comment">// &#x5B9A;&#x4E49; x = 3</span>
<span class="hljs-keyword">const</span> expr2 = parse(<span class="hljs-string">&apos;(if (sub x 1) (mul x 2) (div x 2))&apos;</span>); <span class="hljs-comment">// &#x5982;&#x679C; x - 1 &#x975E;&#x96F6;&#xFF0C;&#x5219;&#x4E58;&#x4EE5;2&#xFF0C;&#x5426;&#x5219;&#x9664;&#x4EE5;2</span>
<span class="hljs-built_in">console</span>.log(extendedEvaluate(expr1)); <span class="hljs-comment">// &#x8F93;&#x51FA; 3</span>
<span class="hljs-built_in">console</span>.log(extendedEvaluate(expr2)); <span class="hljs-comment">// &#x8F93;&#x51FA; 6</span>
</code></pre>
<h4 id="&#x89E3;&#x91CA;"><a href="#&#x89E3;&#x91CA;"></a>&#x89E3;&#x91CA;</h4>
<ul>
<li><strong>define</strong>&#xFF1A;&#x5B9E;&#x73B0;&#x4E86;&#x53D8;&#x91CF;&#x7ED1;&#x5B9A;&#xFF0C;&#x5C06;&#x53D8;&#x91CF;&#x540D;&#x548C;&#x503C;&#x5B58;&#x50A8;&#x5230;&#x5F53;&#x524D;&#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x4F7F;&#x5F97;&#x540E;&#x7EED;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x8FD9;&#x4E9B;&#x5B9A;&#x4E49;&#x3002;</li>
<li><strong>if</strong>&#xFF1A;&#x5B9E;&#x73B0;&#x4E86;&#x6761;&#x4EF6;&#x5206;&#x652F;&#xFF0C;&#x53EA;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5206;&#x652F;&#x4F1A;&#x88AB;&#x6C42;&#x503C;&#x3002;</li>
</ul>
<p>&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x6211;&#x4EEC;&#x6784;&#x9020;&#x4E86;&#x4E00;&#x4E2A;&#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;&#xFF0C;&#x652F;&#x6301;&#x66F4;&#x590D;&#x6742;&#x7684;&#x7EC4;&#x5408;&#x8BED;&#x8A00;&#x7ED3;&#x6784;&#xFF0C;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5728;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x8FDB;&#x884C;&#x6761;&#x4EF6;&#x5224;&#x65AD;&#x548C;&#x53D8;&#x91CF;&#x5B9A;&#x4E49;&#x3002;</p>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<ul>
<li><strong>&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;</strong>&#x662F;&#x4E00;&#x4E2A;&#x57FA;&#x7840;&#x89E3;&#x91CA;&#x5668;&#xFF0C;&#x7528;&#x4E8E;&#x76F4;&#x63A5;&#x6C42;&#x503C;&#x57FA;&#x672C;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</li>
<li><strong>&#x5D4C;&#x5957;&#x6C42;&#x503C;&#x5668;</strong>&#x5219;&#x5728;&#x5143;&#x5FAA;&#x73AF;&#x6C42;&#x503C;&#x5668;&#x4E4B;&#x4E0A;&#x6269;&#x5C55;&#xFF0C;&#x652F;&#x6301;&#x6761;&#x4EF6;&#x3001;&#x53D8;&#x91CF;&#x7ED1;&#x5B9A;&#x7B49;&#x7ED3;&#x6784;&#xFF0C;&#x4F7F;&#x5F97;&#x8BED;&#x8A00;&#x66F4;&#x5F3A;&#x5927;&#x548C;&#x7075;&#x6D3B;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x6982;&#x5FF5;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x9010;&#x6B65;&#x6784;&#x5EFA;&#x51FA;&#x4E00;&#x4E2A;&#x89E3;&#x91CA;&#x5668;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x6269;&#x5C55;&#x4F7F;&#x89E3;&#x91CA;&#x5668;&#x652F;&#x6301;&#x66F4;&#x590D;&#x6742;&#x7684;&#x8BED;&#x8A00;&#x7279;&#x6027;&#xFF0C;&#x9010;&#x6B65;&#x8FBE;&#x5230;&#x73B0;&#x4EE3;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684;&#x590D;&#x6742;&#x5EA6;&#x3002;</p>
<h2 id="&#x7B2C;&#x4E94;&#x7AE0;&#xFF1A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x6A21;&#x578B;&#xFF08;Computing with Register Machines&#xFF09;"><a href="#&#x7B2C;&#x4E94;&#x7AE0;&#xFF1A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x6A21;&#x578B;&#xFF08;Computing with Register Machines&#xFF09;"></a>&#x7B2C;&#x4E94;&#x7AE0;&#xFF1A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x6A21;&#x578B;&#xFF08;Computing with Register Machines&#xFF09;</h2>
<p>SICP &#x7B2C;&#x4E94;&#x7AE0;&#x4ECB;&#x7ECD;&#x4E86;&#x201C;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x548C;&#x7F16;&#x8BD1;&#x201D;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x4E3B;&#x8981;&#x6D89;&#x53CA;&#x5982;&#x4F55;&#x8BBE;&#x8BA1;&#x548C;&#x5B9E;&#x73B0;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x6A21;&#x578B;&#x4EE5;&#x53CA;&#x7F16;&#x8BD1;&#x7684;&#x57FA;&#x672C;&#x601D;&#x60F3;&#x3002;&#x8FD9;&#x4E9B;&#x6982;&#x5FF5;&#x5728;&#x73B0;&#x4EE3;&#x8BA1;&#x7B97;&#x673A;&#x67B6;&#x6784;&#x548C;&#x7F16;&#x8BD1;&#x5668;&#x8BBE;&#x8BA1;&#x4E2D;&#x5E7F;&#x6CDB;&#x5E94;&#x7528;&#x3002;&#x501F;&#x9274;&#x5176;&#x4E2D;&#x7684;&#x601D;&#x60F3;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728; JavaScript &#x4E2D;&#x5B9E;&#x73B0;&#x4E00;&#x4E9B;&#x7B80;&#x5355;&#x7684;&#x6A21;&#x62DF;&#xFF0C;&#x7406;&#x89E3;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x5DE5;&#x4F5C;&#x673A;&#x5236;&#x548C;&#x7F16;&#x8BD1;&#x7684;&#x8FC7;&#x7A0B;&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E9B; JavaScript &#x793A;&#x4F8B;&#xFF0C;&#x5C55;&#x793A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x548C;&#x7F16;&#x8BD1;&#x5728;&#x7F16;&#x7A0B;&#x4E2D;&#x7684;&#x542F;&#x53D1;&#x6027;&#x5E94;&#x7528;&#x3002;</p>
<hr>
<h3 id="1. &#x6A21;&#x62DF;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;"><a href="#1. &#x6A21;&#x62DF;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;"></a>1. &#x6A21;&#x62DF;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;</h3>
<p>&#x5728;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x901A;&#x8FC7;&#x5BC4;&#x5B58;&#x5668;&#x5B58;&#x50A8;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x6307;&#x4EE4;&#x6765;&#x64CD;&#x4F5C;&#x8FD9;&#x4E9B;&#x5BC4;&#x5B58;&#x5668;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; JavaScript &#x6A21;&#x62DF;&#xFF0C;&#x5B83;&#x5C55;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x5E26;&#x6709;&#x52A0;&#x6CD5;&#x548C;&#x51CF;&#x6CD5;&#x6307;&#x4EE4;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x3002;</p>
<pre><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">RegisterMachine</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.registers = {};
        <span class="hljs-built_in">this</span>.program = [];
        <span class="hljs-built_in">this</span>.pc = <span class="hljs-number">0</span>; <span class="hljs-comment">// &#x7A0B;&#x5E8F;&#x8BA1;&#x6570;&#x5668;</span>
    }

    <span class="hljs-comment">// &#x5B9A;&#x4E49;&#x5BC4;&#x5B58;&#x5668;</span>
    <span class="hljs-function"><span class="hljs-title">addRegister</span>(<span class="hljs-params">name, initialValue = <span class="hljs-number">0</span></span>)</span> {
        <span class="hljs-built_in">this</span>.registers[name] = initialValue;
    }

    <span class="hljs-comment">// &#x52A0;&#x8F7D;&#x7A0B;&#x5E8F;&#x6307;&#x4EE4;</span>
    <span class="hljs-function"><span class="hljs-title">loadProgram</span>(<span class="hljs-params">instructions</span>)</span> {
        <span class="hljs-built_in">this</span>.program = instructions;
    }

    <span class="hljs-comment">// &#x6267;&#x884C;&#x6307;&#x4EE4;</span>
    <span class="hljs-function"><span class="hljs-title">run</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">while</span> (<span class="hljs-built_in">this</span>.pc &lt; <span class="hljs-built_in">this</span>.program.length) {
            <span class="hljs-keyword">const</span> instruction = <span class="hljs-built_in">this</span>.program[<span class="hljs-built_in">this</span>.pc];
            <span class="hljs-keyword">const</span> { op, args } = instruction;
            
            <span class="hljs-keyword">switch</span>(op) {
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;ADD&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] += <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">1</span>]];
                    <span class="hljs-keyword">break</span>;
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;SUB&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] -= <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">1</span>]];
                    <span class="hljs-keyword">break</span>;
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;MOV&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] = args[<span class="hljs-number">1</span>];
                    <span class="hljs-keyword">break</span>;
                <span class="hljs-keyword">default</span>:
                    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">\`&#x672A;&#x77E5;&#x64CD;&#x4F5C;&#xFF1A;<span class="hljs-subst">\${op}</span>\`</span>);
            }
            <span class="hljs-built_in">this</span>.pc += <span class="hljs-number">1</span>; <span class="hljs-comment">// &#x6267;&#x884C;&#x5B8C;&#x4E00;&#x6761;&#x6307;&#x4EE4;&#x540E;&#xFF0C;&#x7A0B;&#x5E8F;&#x8BA1;&#x6570;&#x5668;&#x52A0;&#x4E00;</span>
        }
    }

    <span class="hljs-comment">// &#x83B7;&#x53D6;&#x5BC4;&#x5B58;&#x5668;&#x503C;</span>
    <span class="hljs-function"><span class="hljs-title">getRegisterValue</span>(<span class="hljs-params">name</span>)</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.registers[name];
    }
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x7A0B;&#x5E8F;&#xFF1A;&#x8BA1;&#x7B97; (5 + 3) - 2</span>
<span class="hljs-keyword">const</span> machine = <span class="hljs-keyword">new</span> RegisterMachine();
machine.addRegister(<span class="hljs-string">&apos;R1&apos;</span>);
machine.addRegister(<span class="hljs-string">&apos;R2&apos;</span>);
machine.addRegister(<span class="hljs-string">&apos;R3&apos;</span>);

machine.loadProgram([
    { <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [<span class="hljs-string">&apos;R1&apos;</span>, <span class="hljs-number">5</span>] },  <span class="hljs-comment">// &#x5C06;5&#x52A0;&#x8F7D;&#x5230;R1</span>
    { <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [<span class="hljs-string">&apos;R2&apos;</span>, <span class="hljs-number">3</span>] },  <span class="hljs-comment">// &#x5C06;3&#x52A0;&#x8F7D;&#x5230;R2</span>
    { <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;ADD&apos;</span>, <span class="hljs-attr">args</span>: [<span class="hljs-string">&apos;R1&apos;</span>, <span class="hljs-string">&apos;R2&apos;</span>] }, <span class="hljs-comment">// R1 = R1 + R2&#xFF0C;&#x7ED3;&#x679C;&#x4E3A;8</span>
    { <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [<span class="hljs-string">&apos;R3&apos;</span>, <span class="hljs-number">2</span>] },  <span class="hljs-comment">// &#x5C06;2&#x52A0;&#x8F7D;&#x5230;R3</span>
    { <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;SUB&apos;</span>, <span class="hljs-attr">args</span>: [<span class="hljs-string">&apos;R1&apos;</span>, <span class="hljs-string">&apos;R3&apos;</span>] } <span class="hljs-comment">// R1 = R1 - R3&#xFF0C;&#x7ED3;&#x679C;&#x4E3A;6</span>
]);

machine.run();
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#xFF1A;<span class="hljs-subst">\${machine.getRegisterValue(<span class="hljs-string">&apos;R1&apos;</span>)}</span>\`</span>); <span class="hljs-comment">// &#x8F93;&#x51FA;&#xFF1A;6</span>
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#xFF0C;&#x80FD;&#x591F;&#x6267;&#x884C;&#x201C;&#x52A0;&#x8F7D;&#x201D;&#x3001;&#x201C;&#x52A0;&#x6CD5;&#x201D;&#x548C;&#x201C;&#x51CF;&#x6CD5;&#x201D;&#x6307;&#x4EE4;&#x3002;&#x901A;&#x8FC7;&#x6307;&#x4EE4;&#x548C;&#x5BC4;&#x5B58;&#x5668;&#x7684;&#x7EC4;&#x5408;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x6A21;&#x62DF;&#x57FA;&#x672C;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#xFF0C;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x5229;&#x7528;&#x5BC4;&#x5B58;&#x5668;&#x6765;&#x5B58;&#x50A8;&#x548C;&#x64CD;&#x4F5C;&#x6570;&#x636E;&#x3002;</p>
<hr>
<h3 id="2. &#x7F16;&#x8BD1;&#x7B80;&#x5355;&#x7684;&#x8868;&#x8FBE;&#x5F0F;"><a href="#2. &#x7F16;&#x8BD1;&#x7B80;&#x5355;&#x7684;&#x8868;&#x8FBE;&#x5F0F;"></a>2. &#x7F16;&#x8BD1;&#x7B80;&#x5355;&#x7684;&#x8868;&#x8FBE;&#x5F0F;</h3>
<p>&#x7F16;&#x8BD1;&#x5668;&#x7684;&#x6838;&#x5FC3;&#x4EFB;&#x52A1;&#x4E4B;&#x4E00;&#x662F;&#x5C06;&#x9AD8;&#x7EA7;&#x8BED;&#x8A00;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x7F16;&#x8BD1;&#x4E3A;&#x66F4;&#x5E95;&#x5C42;&#x7684;&#x6307;&#x4EE4;&#x3002;&#x4EE5;&#x4E0B;&#x793A;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x7F16;&#x8BD1;&#x5668;&#xFF0C;&#x5B83;&#x5C06; JavaScript &#x8868;&#x8FBE;&#x5F0F;&#x7F16;&#x8BD1;&#x4E3A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x6307;&#x4EE4;&#x3002;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">compileExpression</span>(<span class="hljs-params">expression</span>) </span>{
    <span class="hljs-keyword">let</span> instructions = [];
    <span class="hljs-keyword">let</span> regCounter = <span class="hljs-number">1</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">compile</span>(<span class="hljs-params">node</span>) </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> node === <span class="hljs-string">&apos;number&apos;</span>) {
            <span class="hljs-keyword">const</span> reg = <span class="hljs-string">\`R<span class="hljs-subst">\${regCounter++}</span>\`</span>;
            instructions.push({ <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [reg, node] });
            <span class="hljs-keyword">return</span> reg;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.type === <span class="hljs-string">&apos;BinaryExpression&apos;</span>) {
            <span class="hljs-keyword">const</span> leftReg = compile(node.left);
            <span class="hljs-keyword">const</span> rightReg = compile(node.right);
            <span class="hljs-keyword">const</span> reg = <span class="hljs-string">\`R<span class="hljs-subst">\${regCounter++}</span>\`</span>;

            <span class="hljs-keyword">if</span> (node.operator === <span class="hljs-string">&apos;+&apos;</span>) {
                instructions.push({ <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [reg, leftReg] });
                instructions.push({ <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;ADD&apos;</span>, <span class="hljs-attr">args</span>: [reg, rightReg] });
            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.operator === <span class="hljs-string">&apos;-&apos;</span>) {
                instructions.push({ <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;MOV&apos;</span>, <span class="hljs-attr">args</span>: [reg, leftReg] });
                instructions.push({ <span class="hljs-attr">op</span>: <span class="hljs-string">&apos;SUB&apos;</span>, <span class="hljs-attr">args</span>: [reg, rightReg] });
            }

            <span class="hljs-keyword">return</span> reg;
        }
    }

    compile(expression);
    <span class="hljs-keyword">return</span> instructions;
}

<span class="hljs-comment">// &#x8F93;&#x5165;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;(5 + 3) - 2</span>
<span class="hljs-keyword">const</span> expression = {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;BinaryExpression&apos;</span>,
    <span class="hljs-attr">operator</span>: <span class="hljs-string">&apos;-&apos;</span>,
    <span class="hljs-attr">left</span>: {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;BinaryExpression&apos;</span>,
        <span class="hljs-attr">operator</span>: <span class="hljs-string">&apos;+&apos;</span>,
        <span class="hljs-attr">left</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">right</span>: <span class="hljs-number">3</span>
    },
    <span class="hljs-attr">right</span>: <span class="hljs-number">2</span>
};

<span class="hljs-keyword">const</span> compiledInstructions = compileExpression(expression);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;&#x7F16;&#x8BD1;&#x540E;&#x7684;&#x6307;&#x4EE4;&#xFF1A;&quot;</span>, compiledInstructions);
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x7F16;&#x5199;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x51FD;&#x6570; <code>compileExpression</code>&#xFF0C;&#x5B83;&#x5C06;&#x4E00;&#x4E2A; JavaScript &#x8868;&#x8FBE;&#x5F0F;&#x8F6C;&#x6362;&#x4E3A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x6307;&#x4EE4;&#x3002;&#x8FD9;&#x4E2A;&#x7F16;&#x8BD1;&#x5668;&#x652F;&#x6301;&#x52A0;&#x6CD5;&#x548C;&#x51CF;&#x6CD5;&#xFF0C;&#x5E76;&#x751F;&#x6210;&#x4E86;&#x76F8;&#x5E94;&#x7684;&#x201C;MOV&#x201D;&#x3001;&#x201C;ADD&#x201D;&#x548C;&#x201C;SUB&#x201D;&#x6307;&#x4EE4;&#x3002;</p>
<hr>
<h3 id="3. &#x865A;&#x62DF;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x89E3;&#x91CA;&#x5668;"><a href="#3. &#x865A;&#x62DF;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x89E3;&#x91CA;&#x5668;"></a>3. &#x865A;&#x62DF;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x89E3;&#x91CA;&#x5668;</h3>
<p>&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x53EF;&#x4EE5;&#x770B;&#x4F5C;&#x4E00;&#x79CD;&#x201C;&#x865A;&#x62DF;&#x673A;&#x201D;&#xFF0C;&#x5B83;&#x9700;&#x8981;&#x89E3;&#x91CA;&#x5668;&#x6765;&#x89E3;&#x91CA;&#x6267;&#x884C;&#x6307;&#x4EE4;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x89E3;&#x91CA;&#x5668;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x89E3;&#x6790;&#x5E76;&#x8FD0;&#x884C;&#x7531;&#x7F16;&#x8BD1;&#x5668;&#x751F;&#x6210;&#x7684;&#x5BC4;&#x5B58;&#x5668;&#x6307;&#x4EE4;&#x3002;</p>
<pre><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">VM</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.registers = {};
        <span class="hljs-built_in">this</span>.pc = <span class="hljs-number">0</span>;
    }

    <span class="hljs-function"><span class="hljs-title">loadProgram</span>(<span class="hljs-params">program</span>)</span> {
        <span class="hljs-built_in">this</span>.program = program;
    }

    <span class="hljs-function"><span class="hljs-title">execute</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">while</span> (<span class="hljs-built_in">this</span>.pc &lt; <span class="hljs-built_in">this</span>.program.length) {
            <span class="hljs-keyword">const</span> instruction = <span class="hljs-built_in">this</span>.program[<span class="hljs-built_in">this</span>.pc];
            <span class="hljs-keyword">const</span> { op, args } = instruction;

            <span class="hljs-keyword">switch</span>(op) {
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;MOV&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] = <span class="hljs-keyword">typeof</span> args[<span class="hljs-number">1</span>] === <span class="hljs-string">&apos;number&apos;</span> ? args[<span class="hljs-number">1</span>] : <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">1</span>]];
                    <span class="hljs-keyword">break</span>;
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;ADD&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] += <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">1</span>]];
                    <span class="hljs-keyword">break</span>;
                <span class="hljs-keyword">case</span> <span class="hljs-string">&apos;SUB&apos;</span>:
                    <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">0</span>]] -= <span class="hljs-built_in">this</span>.registers[args[<span class="hljs-number">1</span>]];
                    <span class="hljs-keyword">break</span>;
            }
            <span class="hljs-built_in">this</span>.pc += <span class="hljs-number">1</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-title">getRegister</span>(<span class="hljs-params">name</span>)</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.registers[name];
    }
}

<span class="hljs-comment">// &#x4F7F;&#x7528;&#x7F16;&#x8BD1;&#x7684;&#x6307;&#x4EE4;&#x6765;&#x8FD0;&#x884C;&#x7A0B;&#x5E8F;</span>
<span class="hljs-keyword">const</span> vm = <span class="hljs-keyword">new</span> VM();
vm.loadProgram(compiledInstructions);
vm.execute();
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#xFF1A;<span class="hljs-subst">\${vm.getRegister(<span class="hljs-string">&apos;R1&apos;</span>)}</span>\`</span>); <span class="hljs-comment">// &#x8F93;&#x51FA;&#x6700;&#x7EC8;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;</span>
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x793A;&#x4F8B;&#x4E2D;&#xFF0C;<code>VM</code> &#x7C7B;&#x662F;&#x4E00;&#x4E2A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x7684;&#x89E3;&#x91CA;&#x5668;&#x3002;&#x5B83;&#x52A0;&#x8F7D;&#x7531;&#x7F16;&#x8BD1;&#x5668;&#x751F;&#x6210;&#x7684;&#x6307;&#x4EE4;&#xFF0C;&#x5E76;&#x6309;&#x7167;&#x8FD9;&#x4E9B;&#x6307;&#x4EE4;&#x4E00;&#x6B65;&#x4E00;&#x6B65;&#x6267;&#x884C;&#xFF0C;&#x66F4;&#x65B0;&#x5BC4;&#x5B58;&#x5668;&#x7684;&#x72B6;&#x6001;&#x3002;&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x770B;&#x5230;&#x5982;&#x4F55;&#x5728;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x548C;&#x7F16;&#x8BD1;&#x5668;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x6784;&#x5EFA;&#x51FA;&#x4E00;&#x4E2A;&#x7B80;&#x5316;&#x7684;&#x8BA1;&#x7B97;&#x7CFB;&#x7EDF;&#x3002;</p>
<hr>
<h3 id="4. &#x4F18;&#x5316;&#xFF1A;&#x5E38;&#x91CF;&#x6298;&#x53E0;"><a href="#4. &#x4F18;&#x5316;&#xFF1A;&#x5E38;&#x91CF;&#x6298;&#x53E0;"></a>4. &#x4F18;&#x5316;&#xFF1A;&#x5E38;&#x91CF;&#x6298;&#x53E0;</h3>
<p>&#x7F16;&#x8BD1;&#x5668;&#x4E2D;&#x4E00;&#x4E2A;&#x5E38;&#x89C1;&#x7684;&#x4F18;&#x5316;&#x662F;&#x5E38;&#x91CF;&#x6298;&#x53E0;&#xFF0C;&#x5373;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x8BA1;&#x7B97;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x5E38;&#x91CF;&#x90E8;&#x5206;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5E38;&#x91CF;&#x6298;&#x53E0;&#x4F18;&#x5316;&#xFF0C;&#x5E2E;&#x52A9;&#x51CF;&#x5C11;&#x6307;&#x4EE4;&#x6570;&#x91CF;&#xFF0C;&#x63D0;&#x9AD8;&#x8FD0;&#x884C;&#x6548;&#x7387;&#x3002;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">compileWithConstantFolding</span>(<span class="hljs-params">node</span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> node === <span class="hljs-string">&apos;number&apos;</span>) {
        <span class="hljs-keyword">return</span> node;
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.type === <span class="hljs-string">&apos;BinaryExpression&apos;</span>) {
        <span class="hljs-keyword">const</span> left = compileWithConstantFolding(node.left);
        <span class="hljs-keyword">const</span> right = compileWithConstantFolding(node.right);

        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> left === <span class="hljs-string">&apos;number&apos;</span> &amp;&amp; <span class="hljs-keyword">typeof</span> right === <span class="hljs-string">&apos;number&apos;</span>) {
            <span class="hljs-keyword">return</span> node.operator === <span class="hljs-string">&apos;+&apos;</span> ? left + right : left - right;
        }

        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;BinaryExpression&apos;</span>,
            <span class="hljs-attr">operator</span>: node.operator,
            left,
            right
        };
    }
}

<span class="hljs-comment">// &#x793A;&#x4F8B;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;(5 + 3) - 2&#xFF0C;&#x5305;&#x542B;&#x5E38;&#x91CF;&#x6298;&#x53E0;&#x4F18;&#x5316;</span>
<span class="hljs-keyword">const</span> optimizedExpression = compileWithConstantFolding(expression);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;&#x4F18;&#x5316;&#x540E;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;&quot;</span>, optimizedExpression);
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F18;&#x5316;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5728;&#x7F16;&#x8BD1;&#x9636;&#x6BB5;&#x63D0;&#x524D;&#x8BA1;&#x7B97;&#x5E38;&#x91CF;&#x8868;&#x8FBE;&#x5F0F; <code>(5 + 3)</code>&#xFF0C;&#x5C06;&#x5176;&#x7ED3;&#x679C; <code>8</code> &#x66FF;&#x6362;&#x6389;&#x3002;&#x8FD9;&#x6837;&#x5728;&#x7F16;&#x8BD1;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x53EA;&#x9700;&#x5904;&#x7406;&#x6700;&#x7EC8;&#x7684; <code>8 - 2</code>&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C11;&#x4E86;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x6307;&#x4EE4;&#x3002;</p>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>SICP &#x7B2C;&#x4E94;&#x7AE0;&#x5173;&#x4E8E;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x548C;&#x7F16;&#x8BD1;&#x7684;&#x601D;&#x60F3;&#x4E3A; JavaScript &#x7F16;&#x7A0B;&#x63D0;&#x4F9B;&#x4E86;&#x5F88;&#x591A;&#x542F;&#x53D1;&#xFF1A;</p>
<ol>
<li><strong>&#x5BC4;&#x5B58;&#x5668;&#x6A21;&#x62DF;</strong>&#xFF1A;&#x5BC4;&#x5B58;&#x5668;&#x673A;&#x5668;&#x6A21;&#x578B;&#x5E2E;&#x52A9;&#x6211;&#x4EEC;&#x7406;&#x89E3;&#x8BA1;&#x7B97;&#x5982;&#x4F55;&#x57FA;&#x4E8E;&#x6307;&#x4EE4;&#x548C;&#x5BC4;&#x5B58;&#x5668;&#x6765;&#x5B58;&#x50A8;&#x548C;&#x64CD;&#x4F5C;&#x6570;&#x636E;&#x3002;</li>
<li><strong>&#x7F16;&#x8BD1;&#x539F;&#x7406;</strong>&#xFF1A;&#x7F16;&#x8BD1;&#x7684;&#x8FC7;&#x7A0B;&#x5C06;&#x9AD8;&#x7EA7;&#x8868;&#x8FBE;&#x5F0F;&#x8F6C;&#x5316;&#x4E3A;&#x4F4E;&#x7EA7;&#x6307;&#x4EE4;&#xFF0C;&#x8BA9;&#x6211;&#x4EEC;&#x66F4;&#x6E05;&#x6670;&#x5730;&#x7406;&#x89E3;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#x7684;&#x5E95;&#x5C42;&#x673A;&#x5236;&#x3002;</li>
<li><strong>&#x89E3;&#x91CA;&#x6267;&#x884C;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x865A;&#x62DF;&#x673A;&#x89E3;&#x91CA;&#x5668;&#x7684;&#x8BBE;&#x8BA1;&#xFF0C;&#x6211;&#x4EEC;&#x80FD;&#x770B;&#x5230;&#x8BA1;&#x7B97;&#x673A;&#x5982;&#x4F55;&#x4E00;&#x6B65;&#x6B65;&#x6267;&#x884C;&#x7F16;&#x8BD1;&#x540E;&#x7684;&#x6307;&#x4EE4;&#x3002;</li>
<li><strong>&#x7F16;&#x8BD1;&#x4F18;&#x5316;</strong>&#xFF1A;&#x5E38;&#x91CF;&#x6298;&#x53E0;&#x7B49;&#x4F18;&#x5316;&#x6280;&#x672F;&#x5728;&#x7F16;&#x8BD1;&#x5668;&#x4E2D;&#x5E38;&#x7528;&#xFF0C;&#x80FD;&#x5728;&#x8FD0;&#x884C;&#x524D;&#x63D0;&#x5347;&#x4EE3;&#x7801;&#x6548;&#x7387;&#x3002;</li>
</ol>
<h1 id="References"><a href="#References"></a>References</h1>
<ul>
<li><a href="https://awesome-programming-books.github.io/computer-system/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F%E7%9A%84%E6%9E%84%E9%80%A0%E5%92%8C%E8%A7%A3%E9%87%8A%EF%BC%88%E7%AC%AC2%E7%89%88%EF%BC%89.pdf">&#x8BA1;&#x7B97;&#x673A;&#x7A0B;&#x5E8F;&#x7684;&#x6784;&#x9020;&#x4E0E;&#x89E3;&#x91CA;</a></li>
<li>gpt</li>
</ul>
`,a=[{level:2,title:"第一章：构建抽象过程（Building Abstractions with Procedures）",children:[]},{level:2,title:"第二章：构建数据抽象（Building Abstractions with Data）",children:[]},{level:2,title:"第三章：模块化、对象和状态（Modularity, Objects, and State）",children:[]},{level:2,title:"第四章：元语言抽象（Metalinguistic Abstraction）",children:[{level:3,title:"1. 元循环求值器（Meta-circular Evaluator）",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"2. 嵌套求值器与组合语言",children:[{level:4,title:"解释",children:[]}]},{level:3,title:"总结",children:[]}]},{level:2,title:"第五章：寄存器机器模型（Computing with Register Machines）",children:[{level:3,title:"1. 模拟一个简单的寄存器机器",children:[]},{level:3,title:"2. 编译简单的表达式",children:[]},{level:3,title:"3. 虚拟寄存器机器的解释器",children:[]},{level:3,title:"4. 优化：常量折叠",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"References",children:[]}];export{s as attributes,x as html,a as nestedHeaders};
