const x={},s=`<h2 id="GPT &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#GPT &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>GPT &#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>GPT &#x662F;&#x201C;Generative Pre-trained Transformer&#x201D;&#x7684;&#x7F29;&#x5199;&#xFF0C;&#x5373;&#x751F;&#x6210;&#x5F0F;&#x9884;&#x8BAD;&#x7EC3;&#x53D8;&#x6362;&#x6A21;&#x578B;&#xFF0C;&#x662F;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x6267;&#x884C;&#x975E;&#x5E38;&#x590D;&#x6742;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5982;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x3001;&#x751F;&#x6210;&#x6587;&#x7AE0;&#x548C;&#x4EE3;&#x7801;&#xFF0C;&#x6216;&#x8005;&#x7FFB;&#x8BD1;&#x6587;&#x7AE0;&#x5185;&#x5BB9;&#x7B49;&#x3002;</p>
<p>&#x5B9E;&#x8D28;&#xFF1A;&#x6587;&#x5B57;&#x63A5;&#x9F99;&#xFF08;bert &#x662F;&#x5B8C;&#x5F62;&#x586B;&#x7A7A;&#xFF09;</p>
<p>&#x5982;&#x4F55;&#x8BAD;&#x7EC3;&#xFF1A;</p>
<ul>
<li>Pre-trained &#xFF08;&#x65E0;&#x76D1;&#x7763;&#x5B66;&#x4E60;&#xFF09;
<ul>
<li>&#x81EA;&#x52A8;&#x5B66;&#x4E60;&#x5404;&#x79CD;&#x8D44;&#x6599;&#xFF0C;&#x719F;&#x6089;&#x5404;&#x79CD;&#x8BED;&#x4E49;&#x5173;&#x7CFB;</li>
<li>&#x597D;&#x5904;&#xFF1A;&#x5B66;&#x4E60;&#x8D44;&#x6599;&#x4E30;&#x5BCC;&#xFF0C;&#x6210;&#x672C;&#x76F8;&#x5BF9;&#x4F4E;</li>
<li>&#x52A3;&#x52BF;&#xFF1A;&#x5B66;&#x7684;&#x6742;&#xFF0C;&#x4E0D;&#x6210;&#x4F53;&#x7CFB;&#xFF0C;&#x4E0D;&#x597D;&#x4E3A;&#x4EBA;&#x6240;&#x7528;</li>
</ul>
</li>
<li>&#x6A21;&#x677F;&#x89C4;&#x8303;&#xFF08;&#x76D1;&#x7763;&#x5B66;&#x4E60;&#xFF09;
<ul>
<li>&#x6761;&#x4EF6;&#xFF1A;&#x4F18;&#x8D28;&#x8303;&#x4F8B;</li>
<li>&#x76EE;&#x6807;&#xFF1A;&#x77EB;&#x6B63;&#x6210;&#x7B26;&#x5408;&#x4EBA;&#x7C7B;&#x4E60;&#x60EF;&#x7684;&#x56DE;&#x7B54;</li>
<li>&#x4F8B;&#x5982;&#xFF1A;&#x6709;&#x5BB3;&#x5185;&#x5BB9;&#x8FC7;&#x6EE4;&#xFF0C;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x5E76;&#x7ED9;&#x51FA;&#x539F;&#x56E0;&#x7B49;&#xFF1B;&#xFF09;&#xFF1B;</li>
<li>&#x9644;&#x52A0;&#x80FD;&#x529B;&#xFF1A;in-context learning &#x80FD;&#x529B;&#xFF08;&#x8BED;&#x5883;&#x5185;&#x5B66;&#x4E60;&#xFF09;</li>
</ul>
</li>
<li>&#x4F7F;&#x7528;&#x8FC7;&#x7A0B;&#x4E2D;&#x8BC4;&#x5206;&#x53CD;&#x9988;&#xFF08;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF09;
<ul>
<li>&#x76EE;&#x6807;&#xFF1A;&#x63D0;&#x5347;&#x521B;&#x610F;&#x80FD;&#x529B;</li>
</ul>
</li>
</ul>
<h2 id="GPT &#x4E0E;&#x7F16;&#x7801; - TDD&#xFF08;Test-Driven Development&#xFF09;"><a href="#GPT &#x4E0E;&#x7F16;&#x7801; - TDD&#xFF08;Test-Driven Development&#xFF09;"></a>GPT &#x4E0E;&#x7F16;&#x7801; - TDD&#xFF08;Test-Driven Development&#xFF09;</h2>
<h3 id="&#x6539;&#x53D8;&#x9700;&#x6C42;&#x5F00;&#x53D1;&#x6D41;&#x7A0B;"><a href="#&#x6539;&#x53D8;&#x9700;&#x6C42;&#x5F00;&#x53D1;&#x6D41;&#x7A0B;"></a>&#x6539;&#x53D8;&#x9700;&#x6C42;&#x5F00;&#x53D1;&#x6D41;&#x7A0B;</h3>
<p>GPT &#x8F85;&#x52A9;&#x524D;&#xFF1A;&#x9700;&#x6C42; -&gt; &#x4EE3;&#x7801;&#x7F16;&#x5199; -&gt; test-case</p>
<p>GPT &#x8F85;&#x52A9;&#x540E;&#xFF1A;</p>
<ol>
<li>&#x9700;&#x6C42; -&gt; test-case -&gt; &#x4EE3;&#x7801;&#x751F;&#x6210; -&gt; test-case&#x8865;&#x5145;&#x751F;&#x6210;</li>
<li>&#x9700;&#x6C42; -&gt; GPT&#x65B9;&#x5F0F;&#x63CF;&#x8FF0; -&gt; &#x4EE3;&#x7801;&#x751F;&#x6210; -&gt; test-case &#x751F;&#x6210;</li>
</ol>
<h3 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h3>
<h4 id="&#x9700;&#x6C42;&#x63CF;&#x8FF0;"><a href="#&#x9700;&#x6C42;&#x63CF;&#x8FF0;"></a>&#x9700;&#x6C42;&#x63CF;&#x8FF0;</h4>
<p>&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;fn &#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x7ED3;&#x679C;&#x3002;
fn &#x51FD;&#x6570;&#x9700;&#x8981;&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6761;&#x4EF6;
&#x5F53;&#x53C2;&#x6570;&#x4E3A; 0 &#x65F6;&#xFF0C;&#x8FD4;&#x56DE; 0
&#x5F53;&#x53C2;&#x6570;&#x4E3A; 1 &#x65F6;&#xFF0C;&#x8FD4;&#x56DE; 1</p>
<p><strong>&#x5BF9;&#x5E94;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;</strong></p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test0</span>(<span class="hljs-params">fn</span>) </span>{
    <span class="hljs-keyword">if</span> (fn(<span class="hljs-number">0</span>) === <span class="hljs-number">0</span> &amp;&amp; fn(<span class="hljs-number">1</span>) === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
}
</code></pre>
<p>&#x95EE;&#xFF1A;&#x751F;&#x6210; fn &#x51FD;&#x6570;&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test0</span>(<span class="hljs-params">fn</span>) </span>{ 
  <span class="hljs-keyword">if</span> (fn(<span class="hljs-number">0</span>) === <span class="hljs-number">0</span> &amp;&amp; fn(<span class="hljs-number">1</span>) === <span class="hljs-number">1</span>) {
     <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span> 
  } 
  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
}
</code></pre>
<p>&#x7B54;&#xFF1A;&#x6211;&#x53EF;&#x4EE5;&#x5C1D;&#x8BD5;&#x751F;&#x6210;&#x4E00;&#x4E2A; fn &#x51FD;&#x6570;&#x6EE1;&#x8DB3;&#x4F60;&#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#x3002;&#x8BF7;&#x770B;&#x6211;&#x7684;&#x4EE3;&#x7801;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">x</span>) </span>{
    <span class="hljs-comment">// &#x5982;&#x679C; x &#x662F; 0 &#x6216; 1&#xFF0C;&#x5C31;&#x8FD4;&#x56DE; x</span>
    <span class="hljs-keyword">if</span> (x === <span class="hljs-number">0</span> || x === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">return</span> x
    }
    <span class="hljs-comment">// &#x5426;&#x5219;&#xFF0C;&#x5C31;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;</span>
    <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;Invalid input&quot;</span>)
    }
}
</code></pre>
<h4 id="&#x9700;&#x6C42;&#x53D8;&#x5316;"><a href="#&#x9700;&#x6C42;&#x53D8;&#x5316;"></a>&#x9700;&#x6C42;&#x53D8;&#x5316;</h4>
<p>&#x5F53;&#x53C2;&#x6570;&#x4E3A; 2 &#x65F6;&#xFF0C;&#x4E5F;&#x8FD4;&#x56DE; 1</p>
<ul>
<li>&#x76EE;&#x6807;&#xFF1A;&#x6539;&#x53D8;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF0C;&#x8F93;&#x51FA;&#x62BD;&#x8C61;&#x5EA6;&#x66F4;&#x9AD8;&#x7684;&#x4EE3;&#x7801;</li>
<li>&#x7ED3;&#x679C;&#xFF1A;&#x63A8;&#x5BFC;&#x51FA; fibonaci</li>
</ul>
<p>&#x95EE;&#xFF1A;&#x751F;&#x6210; fn &#x51FD;&#x6570;&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test0</span>(<span class="hljs-params">fn</span>) </span>{ 
  <span class="hljs-keyword">if</span> (fn(<span class="hljs-number">0</span>) === <span class="hljs-number">0</span> &amp;&amp; fn(<span class="hljs-number">1</span>) === <span class="hljs-number">1</span> &amp;&amp; fn(<span class="hljs-number">2</span>) === <span class="hljs-number">1</span>) { 
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span> 
  } 
  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span> 
}
</code></pre>
<p>&#x7B54;&#xFF1A;fn &#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x5B83;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x5728; fn &#x51FD;&#x6570;&#x5185;&#x90E8;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;1&#x3002;&#x5728; JavaScript &#x4E2D;&#xFF0C;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x4F20;&#x9012;&#x7ED9;&#x53E6;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;2&#x3002;&#x8FD9;&#x79CD;&#x51FD;&#x6570;&#x79F0;&#x4E3A;&#x9AD8;&#x9636;&#x51FD;&#x6570;1&#x3002;&#x5728;&#x60A8;&#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#x4E2D;&#xFF0C;fn &#x51FD;&#x6570;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x4F5C;&#x4E3A;&#x7ED3;&#x679C;&#x3002;&#x8981;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF0C;fn &#x51FD;&#x6570;&#x9700;&#x8981;&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6761;&#x4EF6;&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x53C2;&#x6570;&#x4E3A; 0 &#x65F6;&#xFF0C;&#x8FD4;&#x56DE; 0</li>
<li>&#x5F53;&#x53C2;&#x6570;&#x4E3A; 1 &#x6216; 2 &#x65F6;&#xFF0C;&#x8FD4;&#x56DE; 1</li>
<li>&#x5F53;&#x53C2;&#x6570;&#x5927;&#x4E8E; 2 &#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#x524D;&#x4E24;&#x9879;&#x7684;&#x548C;</li>
</ul>
<p>&#x8FD9;&#x6837;&#x7684;&#x51FD;&#x6570;&#x5176;&#x5B9E;&#x5C31;&#x662F;&#x6590;&#x6CE2;&#x90A3;&#x5951;&#x6570;&#x5217;&#x7684;&#x5B9A;&#x4E49;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x4E00;&#x4E2A;&#x53EF;&#x80FD;&#x7684; fn &#x51FD;&#x6570;&#x5982;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">n</span>) </span>{
  <span class="hljs-keyword">if</span> (n &lt; <span class="hljs-number">0</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>; <span class="hljs-comment">// invalid input</span>
  }
  <span class="hljs-keyword">if</span> (n === <span class="hljs-number">0</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; <span class="hljs-comment">// base case</span>
  }
  <span class="hljs-keyword">if</span> (n === <span class="hljs-number">1</span> || n === <span class="hljs-number">2</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>; <span class="hljs-comment">// base case</span>
  }
  <span class="hljs-keyword">return</span> fn(n - <span class="hljs-number">1</span>) + fn(n - <span class="hljs-number">2</span>); <span class="hljs-comment">// recursive case</span>
}
</code></pre>
<ul>
<li>&#x6982;&#x5FF5;&#xFF1A;&#x62DF;&#x5408; -&gt; &#x6CDB;&#x5316;</li>
</ul>
<blockquote>
<p>&#x62DF;&#x5408;&#x7684;&#x76EE;&#x7684;&#x662F;&#x5B66;&#x4E60;&#x6570;&#x636E;&#x80CC;&#x540E;&#x7684;&#x89C4;&#x5F8B;&#xFF0C;&#x5BF9;&#x65B0;&#x7684;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x9884;&#x6D4B;&#x6216;&#x5206;&#x6790;
&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x53CD;&#x6620;&#x4E86;&#x6A21;&#x578B;&#x6709;&#x6CA1;&#x6709;&#x5BF9;&#x5BA2;&#x89C2;&#x4E16;&#x754C;&#x505A;&#x771F;&#x5B9E;&#x7684;&#x523B;&#x753B;&#xFF0C;&#x8FD8;&#x662F;&#x53D1;&#x751F;&#x4E86;&#x8FC7;&#x62DF;&#x5408;&#x6216;&#x6B20;&#x62DF;&#x5408;&#xFF1B;</p>
<blockquote>
<p>&#x6B20;&#x62DF;&#x5408;&#xFF08;&#x62DF;&#x5408;&#x7ED3;&#x679C;&#x65E0;&#x6CD5;&#x6EE1;&#x8DB3;&#x65E7;&#x7684;&#x6848;&#x4F8B;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;fn(2)!=1&#xFF09;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>&#x8FC7;&#x62DF;&#x5408;&#xFF08;&#x62DF;&#x5408;&#x7ED3;&#x679C;&#x65E0;&#x6CD5;&#x6EE1;&#x8DB3;&#x65B0;&#x6848;&#x4F8B;&#xFF0C;&#x5982;&#x679C;&#x9700;&#x6C42;&#x589E;&#x52A0;&#x5230; n=3&#xFF0C;&#x7ED3;&#x679C;&#x4E5F;&#x8981;&#x4E3A; 1&#xFF09;</p>
</blockquote>
</blockquote>
<blockquote>
<p>&#x6CDB;&#x5316;&#x4F8B;&#x5B50;&#xFF1A;</p>
</blockquote>
<ul>
<li>&#x4E00;&#x4E2A;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x7684;&#x4F8B;&#x5B50;&#x662F;&#x9AD8;&#x4E2D;&#x751F;&#x6BCF;&#x5929;&#x5404;&#x79CD;&#x505A;&#x9898;&#xFF0C;&#x4E94;&#x5E74;&#x9AD8;&#x8003;&#x4E09;&#x5E74;&#x6A21;&#x62DF;&#x4E00;&#x904D;&#x904D;&#x7684;&#x5237;&#xFF0C;&#x4E3A;&#x7684;&#x4EC0;&#x4E48;&#xFF0C;&#x5F53;&#x7136;&#x662F;&#x60F3;&#x9AD8;&#x8003;&#x80FD;&#x6709;&#x4E2A;&#x597D;&#x6210;&#x7EE9;&#x3002; &#x9AD8;&#x8003;&#x8BD5;&#x9898;&#x4E00;&#x822C;&#x662F;&#x65B0;&#x9898;&#xFF0C;&#x8C01;&#x4E5F;&#x6CA1;&#x505A;&#x8FC7;&#xFF0C;&#x5E73;&#x65F6;&#x7684;&#x5237;&#x9898;&#x5C31;&#x662F;&#x4E3A;&#x4E86;&#x638C;&#x63E1;&#x8BD5;&#x9898;&#x7684;&#x89C4;&#x5F8B;&#xFF0C;&#x80FD;&#x591F;&#x4E3E;&#x4E00;&#x53CD;&#x4E09;&#x3001;&#x5B66;&#x4EE5;&#x81F4;&#x7528;&#xFF0C;&#x8FD9;&#x6837;&#x9762;&#x5BF9;&#x65B0;&#x9898;&#x65F6;&#x4E5F;&#x80FD;&#x4ECE;&#x5BB9;&#x5E94;&#x5BF9;&#x3002; &#x8FD9;&#x79CD;&#x89C4;&#x5F8B;&#x7684;&#x638C;&#x63E1;&#x4FBF;&#x662F;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#xFF0C;&#x6709;&#x7684;&#x540C;&#x5B66;&#x5F88;&#x806A;&#x660E;&#xFF0C;&#x8003;&#x4E0A;&#x540D;&#x6821;&#xFF0C;&#x5F88;&#x5927;&#x7A0B;&#x5EA6;&#x4E0A;&#x662F;&#x8BE5;&#x540C;&#x5B66;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x597D;&#x3002; &#x8003;&#x8BD5;&#x6210;&#x7EE9;&#x5DEE;&#x7684;&#x540C;&#x5B66;&#xFF0C;&#x6709;&#x8FD9;&#x4E09;&#x79CD;&#x53EF;&#x80FD;&#xFF1A;&#x4E00;&#x3001;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x5F31;&#xFF0C;&#x505A;&#x4E86;&#x5F88;&#x591A;&#x9898;&#xFF0C;&#x59CB;&#x7EC8;&#x638C;&#x63E1;&#x4E0D;&#x4E86;&#x89C4;&#x5F8B;&#xFF0C;&#x4E0D;&#x7BA1;&#x9047;&#x5230;&#x8001;&#x9898;&#x65B0;&#x9898;&#x90FD;&#x4E0D;&#x4F1A;&#x505A;&#xFF1B;&#x4E8C;&#x3001;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x5F31;&#xFF0C;&#x505A;&#x4E86;&#x5F88;&#x591A;&#x9898;&#xFF0C;&#x53EA;&#x4F1A;&#x6B7B;&#x8BB0;&#x786C;&#x80CC;&#xFF0C;&#x4E00;&#x5230;&#x8003;&#x8BD5;&#x770B;&#x5230;&#x65B0;&#x9898;&#x5C31;&#x8499;&#x4E86;&#xFF1B;&#x4E09;&#x3001;&#x5B8C;&#x5168;&#x4E0D;&#x505A;&#x9898;&#xFF0C;&#x8003;&#x8BD5;&#x5168;&#x9760;&#x778E;&#x8499;&#x3002;</li>
<li>&#x5355;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x5230;&#x591A;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#xFF1B;&#x591A;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x4E4B;&#x95F4;&#x7684;&#x5171;&#x6027;&#x548C;&#x8054;&#x7CFB;&#xFF0C;&#x5B66;&#x4E60;&#x5230;&#x66F4;&#x4E00;&#x822C;&#x7684;&#x89C4;&#x5F8B;&#x548C;&#x77E5;&#x8BC6;&#xFF0C;&#x4ECE;&#x800C;&#x5728;&#x65B0;&#x7684;&#x8BED;&#x8A00;&#x6216;&#x4EFB;&#x52A1;&#x4E0A;&#x8868;&#x73B0;&#x66F4;&#x597D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A;&#x591A;&#x8BED;&#x8A00;&#x7684;&#x673A;&#x5668;&#x7FFB;&#x8BD1;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x8BED;&#x8A00;&#x5BF9;&#x4E4B;&#x95F4;&#x8FDB;&#x884C;&#x7FFB;&#x8BD1;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x4E3A;&#x6BCF;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x5BF9;&#x5355;&#x72EC;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x3002;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x8282;&#x7701;&#x8D44;&#x6E90;&#xFF0C;&#x63D0;&#x9AD8;&#x6548;&#x7387;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x589E;&#x5F3A;&#x6A21;&#x578B;&#x7684;&#x9C81;&#x68D2;&#x6027;&#x548C;&#x9002;&#x5E94;&#x6027;&#x3002;</li>
<li>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF0C;&#x5B83;&#x7684;&#x4EFB;&#x52A1;&#x662F;&#x6839;&#x636E;&#x4E00;&#x5F20;&#x7167;&#x7247;&#x5224;&#x65AD;&#x662F;&#x732B;&#x8FD8;&#x662F;&#x72D7;&#x3002;&#x6211;&#x4EEC;&#x7528;&#x4E00;&#x4E9B;&#x732B;&#x548C;&#x72D7;&#x7684;&#x7167;&#x7247;&#x6765;&#x8BAD;&#x7EC3;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x4E00;&#x4E9B;&#x6CA1;&#x6709;&#x89C1;&#x8FC7;&#x7684;&#x732B;&#x548C;&#x72D7;&#x7684;&#x7167;&#x7247;&#x6765;&#x6D4B;&#x8BD5;&#x5B83;&#x3002;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#x5728;&#x6D4B;&#x8BD5;&#x96C6;&#x4E0A;&#x7684;&#x51C6;&#x786E;&#x7387;&#x5F88;&#x9AD8;&#xFF0C;&#x90A3;&#x4E48;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8BF4;&#x5B83;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x5F88;&#x597D;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x53EF;&#x4EE5;&#x5BF9;&#x65B0;&#x7684;&#x6570;&#x636E;&#x505A;&#x51FA;&#x6B63;&#x786E;&#x7684;&#x5224;&#x65AD;&#x3002;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#x5728;&#x6D4B;&#x8BD5;&#x96C6;&#x4E0A;&#x7684;&#x51C6;&#x786E;&#x7387;&#x5F88;&#x4F4E;&#xFF0C;&#x90A3;&#x4E48;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8BF4;&#x5B83;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x5F88;&#x5DEE;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4E0D;&#x80FD;&#x9002;&#x5E94;&#x65B0;&#x7684;&#x6570;&#x636E;&#x3002;</li>
</ul>
<p>&#x6311;&#x6218;&#xFF1A;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x8BA9; &#x77E5;&#x8BC6;&#x7684;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x3001;&#x53EF;&#x63A7;&#x6027; &#x96BE;&#x5EA6;&#x589E;&#x52A0;</p>
<h4 id="&#x4EE3;&#x7801;&#x4F18;&#x5316;"><a href="#&#x4EE3;&#x7801;&#x4F18;&#x5316;"></a>&#x4EE3;&#x7801;&#x4F18;&#x5316;</h4>
<p>&#x95EE;&#xFF1A;&#x4F60;&#x80FD;&#x4E0D;&#x80FD;&#x7ED9;&#x6211;&#x4E00;&#x4E2A;&#x66F4;&#x9AD8;&#x6548;&#x7684; fn &#x51FD;&#x6570;&#xFF1F;</p>
<p>&#x7B54;&#xFF1A;&#x6709;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8; fn &#x51FD;&#x6570;&#x7684;&#x6548;&#x7387;&#xFF0C;&#x6BD4;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;&#x5FAA;&#x73AF;&#x800C;&#x4E0D;&#x662F;&#x9012;&#x5F52;&#xFF0C;&#x907F;&#x514D;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x76F8;&#x540C;&#x7684;&#x503C;</li>
<li>&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x6216;&#x5BF9;&#x8C61;&#x7F13;&#x5B58;&#x5DF2;&#x7ECF;&#x8BA1;&#x7B97;&#x8FC7;&#x7684;&#x503C;&#xFF0C;&#x907F;&#x514D;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x76F8;&#x540C;&#x7684;&#x503C;</li>
<li>&#x4F7F;&#x7528;&#x6570;&#x5B66;&#x516C;&#x5F0F;&#x76F4;&#x63A5;&#x8BA1;&#x7B97;&#x7B2C; n &#x9879;&#x7684;&#x503C;&#xFF0C;&#x907F;&#x514D;&#x8BA1;&#x7B97;&#x6240;&#x6709;&#x524D;&#x9762;&#x7684;&#x503C;
&#x4F8B;&#x5982;&#xFF0C;&#x4F7F;&#x7528;&#x6570;&#x7EC4;&#x7F13;&#x5B58;&#x7684;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x5199;&#xFF1A;</li>
</ul>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> fib = []; <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;</span>
fib[<span class="hljs-number">0</span>] = <span class="hljs-number">0</span>; <span class="hljs-comment">// &#x521D;&#x59CB;&#x5316;&#x7B2C; 0 &#x9879;&#x4E3A; 0</span>
fib[<span class="hljs-number">1</span>] = <span class="hljs-number">1</span>; <span class="hljs-comment">// &#x521D;&#x59CB;&#x5316;&#x7B2C; 1 &#x9879;&#x4E3A; 1</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">n</span>) </span>{
  <span class="hljs-keyword">if</span> (n &lt; <span class="hljs-number">0</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>; <span class="hljs-comment">// &#x975E;&#x6CD5;&#x8F93;&#x5165;</span>
  }
  <span class="hljs-keyword">if</span> (fib[n] != <span class="hljs-literal">null</span>) {
    <span class="hljs-keyword">return</span> fib [n]; <span class="hljs-comment">// &#x5982;&#x679C;&#x5DF2;&#x7ECF;&#x7F13;&#x5B58;&#x8FC7;&#xFF0C;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;</span>
  }
  fib[n] = fn(n - <span class="hljs-number">1</span>) + fn(n - <span class="hljs-number">2</span>); <span class="hljs-comment">// &#x5982;&#x679C;&#x6CA1;&#x6709;&#x7F13;&#x5B58;&#x8FC7;&#xFF0C;&#x9012;&#x5F52;&#x8BA1;&#x7B97;&#x5E76;&#x7F13;&#x5B58;</span>
  <span class="hljs-keyword">return</span> fib[n]; <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x7ED3;&#x679C;</span>
}
</code></pre>
<p>&#x6982;&#x5FF5;&#xFF1A;CoT&#xFF08;Chain-of Thought&#xFF09;&#x601D;&#x7EF4;&#x94FE;</p>
<p>CoT&#xFF1A;&#x662F;&#x4E00;&#x7CFB;&#x5217;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#xFF0C;&#x7528;&#x6765;&#x8BF4;&#x660E;&#x5982;&#x4F55;&#x4ECE;&#x8F93;&#x5165;&#x5F97;&#x5230;&#x8F93;&#x51FA;&#xFF0C;&#x63D0;&#x9AD8;&#x63A8;&#x7406;&#x7684;&#x51C6;&#x786E;&#x6027;&#x548C;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x3002;</p>
<blockquote>
<p>&#x57FA;&#x672C;&#x601D;&#x60F3;&#xFF1A;&#x901A;&#x8FC7;&#x7ED9;LLM&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x8F93;&#x5165;&#x8F93;&#x51FA;&#x5BF9;&#x4EE5;&#x53CA;&#x6BCF;&#x4E2A;&#x8F93;&#x51FA;&#x5BF9;&#x5E94;&#x7684;&#x63A8;&#x7406;&#x94FE;&#x7684;&#x524D;&#x7F00;&#xFF0C;&#x8BA9;LLM&#x5728;&#x751F;&#x6210;&#x8F93;&#x51FA;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x4E5F;&#x751F;&#x6210;&#x76F8;&#x5E94;&#x7684;&#x63A8;&#x7406;&#x94FE;&#x3002;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x8BA9;LLM&#x66F4;&#x597D;&#x5730;&#x7406;&#x89E3;&#x4EFB;&#x52A1;&#x8981;&#x6C42;&#xFF0C;&#x907F;&#x514D;&#x4E00;&#x4E9B;&#x9519;&#x8BEF;&#x6216;&#x4E0D;&#x4E00;&#x81F4;&#x7684;&#x8F93;&#x51FA;&#xFF0C;&#x63D0;&#x9AD8;&#x63A8;&#x7406;&#x7684;&#x51C6;&#x786E;&#x6027;&#x548C;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x4F8B;&#x5B50;&#xFF1A;
&#x7B97;&#x672F;&#xFF1A; &#x5982;&#x679C;&#x4F60;&#x6709;12&#x4E2A;&#x82F9;&#x679C;&#xFF0C;&#x4F60;&#x5403;&#x4E86;3&#x4E2A;&#xFF0C;&#x4F60;&#x8FD8;&#x5269;&#x591A;&#x5C11;&#x4E2A;&#xFF1F; -&gt; 9&#x4E2A; &#x63A8;&#x7406;&#x94FE;&#xFF1A;12 - 3 = 9
&#x5728;&#x5C55;&#x793A;&#x6837;&#x4F8B;&#x540E;&#x9762;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x6D4B;&#x8BD5;&#x6837;&#x4F8B;&#xFF0C;&#x6BD4;&#x5982;&#xFF1A;</p>
</blockquote>
<blockquote>
<blockquote>
<p>&#x5982;&#x679C;&#x4F60;&#x6709;8&#x4E2A;&#x9999;&#x8549;&#xFF0C;&#x4F60;&#x7ED9;&#x4E86;&#x670B;&#x53CB;4&#x4E2A;&#xFF0C;&#x4F60;&#x8FD8;&#x5269;&#x591A;&#x5C11;&#x4E2A;&#xFF1F;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>&#x6A21;&#x578B;&#x5C31;&#x4F1A;&#x6839;&#x636E;&#x524D;&#x7F00;&#x4E2D;&#x7684;&#x5C55;&#x793A;&#x6837;&#x4F8B;&#x548C;&#x6D4B;&#x8BD5;&#x6837;&#x4F8B;&#xFF0C;&#x6765;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x8F93;&#x51FA;&#x548C;&#x4E00;&#x4E2A;&#x63A8;&#x7406;&#x94FE;&#xFF0C;&#x6BD4;&#x5982;&#xFF1A;</p>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<p>&#x5982;&#x679C;&#x4F60;&#x6709;8&#x4E2A;&#x9999;&#x8549;&#xFF0C;&#x4F60;&#x7ED9;&#x4E86;&#x670B;&#x53CB;4&#x4E2A;&#xFF0C;&#x4F60;&#x8FD8;&#x5269;&#x591A;&#x5C11;&#x4E2A;&#xFF1F; -&gt; 4&#x4E2A; &#x63A8;&#x7406;&#x94FE;&#xFF1A;8 - 4 = 4</p>
</blockquote>
</blockquote>
<h4 id="&#x4EE3;&#x7801;&#x91CD;&#x6784;"><a href="#&#x4EE3;&#x7801;&#x91CD;&#x6784;"></a>&#x4EE3;&#x7801;&#x91CD;&#x6784;</h4>
<p>&#x95EE;&#xFF1A;&#x8BF7;&#x4EFF;&#x7167; function fn(t:boolean){ return true} &#x91CD;&#x6784; fn &#x51FD;&#x6570;</p>
<p>&#x7B54;&#xFF1A;&#x6839;&#x636E;&#x60A8;&#x7684;&#x8981;&#x6C42;&#xFF0C;&#x6211;&#x5C1D;&#x8BD5;&#x91CD;&#x6784; fn &#x51FD;&#x6570;&#x5982;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">n: number</span>): <span class="hljs-title">number</span> </span>{
  <span class="hljs-comment">// &#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7F13;&#x5B58;</span>
  <span class="hljs-keyword">const</span> cache: number[] = [];
  cache[<span class="hljs-number">0</span>] = <span class="hljs-number">0</span>; <span class="hljs-comment">// &#x521D;&#x59CB;&#x5316;&#x7B2C; 0 &#x9879;&#x4E3A; 0</span>
  cache[<span class="hljs-number">1</span>] = <span class="hljs-number">1</span>; <span class="hljs-comment">// &#x521D;&#x59CB;&#x5316;&#x7B2C; 1 &#x9879;&#x4E3A; 1</span>

  <span class="hljs-comment">// &#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x8F85;&#x52A9;&#x51FD;&#x6570;&#xFF0C;&#x7528;&#x6765;&#x9012;&#x5F52;&#x8BA1;&#x7B97;&#x6590;&#x6CE2;&#x90A3;&#x5951;&#x6570;</span>
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fib</span>(<span class="hljs-params">n: number</span>): <span class="hljs-title">number</span> </span>{
    <span class="hljs-keyword">if</span> (n &lt; <span class="hljs-number">0</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>; <span class="hljs-comment">// &#x975E;&#x6CD5;&#x8F93;&#x5165;&#xFF0C;&#x8FD4;&#x56DE; null</span>
    }
    <span class="hljs-keyword">if</span> (cache[n] != <span class="hljs-literal">null</span>) {
      <span class="hljs-keyword">return</span> cache[n]; <span class="hljs-comment">// &#x5982;&#x679C;&#x5DF2;&#x7ECF;&#x7F13;&#x5B58;&#x8FC7;&#xFF0C;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;</span>
    }
    cache[n] = fib(n - <span class="hljs-number">1</span>) + fib(n - <span class="hljs-number">2</span>); <span class="hljs-comment">// &#x5982;&#x679C;&#x6CA1;&#x6709;&#x7F13;&#x5B58;&#x8FC7;&#xFF0C;&#x9012;&#x5F52;&#x8BA1;&#x7B97;&#x5E76;&#x7F13;&#x5B58;</span>
    <span class="hljs-keyword">return</span> cache[n]; <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x7ED3;&#x679C;</span>
  }

  <span class="hljs-comment">// &#x8C03;&#x7528;&#x8F85;&#x52A9;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x6590;&#x6CE2;&#x90A3;&#x5951;&#x6570;</span>
  <span class="hljs-keyword">return</span> fib(n);
}
</code></pre>
<h4 id="&#x7528;&#x4F8B;&#x589E;&#x5F3A;"><a href="#&#x7528;&#x4F8B;&#x589E;&#x5F3A;"></a>&#x7528;&#x4F8B;&#x589E;&#x5F3A;</h4>
<p>&#x95EE;&#xFF1A;&#x9EBB;&#x70E6;&#x7ED9;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;
&#x7B54;&#xFF1A;&#x6839;&#x636E;&#x7F51;&#x4E0A;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x8981;&#x7ED9;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF0C;&#x9700;&#x8981;&#x8003;&#x8651;&#x4EE5;&#x4E0B;&#x51E0;&#x4E2A;&#x65B9;&#x9762;&#xFF1A;</p>
<ul>
<li>&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x8F93;&#x5165;&#x548C;&#x8F93;&#x51FA;&#x662F;&#x5426;&#x7B26;&#x5408;&#x9884;&#x671F;</li>
<li>&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x548C;&#x5F02;&#x5E38;&#x60C5;&#x51B5;&#x662F;&#x5426;&#x6B63;&#x786E;&#x5904;&#x7406;</li>
<li>&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x5185;&#x90E8;&#x903B;&#x8F91;&#x662F;&#x5426;&#x6B63;&#x786E;&#x6267;&#x884C;</li>
<li>&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x6027;&#x80FD;&#x548C;&#x6548;&#x7387;&#x662F;&#x5426;&#x8FBE;&#x6807;</li>
</ul>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x4F7F;&#x7528; Jest &#x6846;&#x67B6;&#xFF0C;&#x53EF;&#x4EE5;&#x7ED9; fn &#x51FD;&#x6570;&#x5199;&#x4EE5;&#x4E0B;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x5BFC;&#x5165; fn &#x51FD;&#x6570;</span>
<span class="hljs-keyword">import</span> { fn } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./fn.js&apos;</span>;

<span class="hljs-comment">// &#x5B9A;&#x4E49;&#x6D4B;&#x8BD5;&#x5957;&#x4EF6;</span>
describe(<span class="hljs-string">&apos;testing fn function&apos;</span>, <span class="hljs-function">() =&gt;</span> {

  <span class="hljs-comment">// &#x6D4B;&#x8BD5;&#x6B63;&#x5E38;&#x8F93;&#x5165;&#x548C;&#x8F93;&#x51FA;</span>
  test(<span class="hljs-string">&apos;should return correct fibonacci number&apos;</span>, <span class="hljs-function">() =&gt;</span> {
    expect(fn(<span class="hljs-number">0</span>)).toBe(<span class="hljs-number">0</span>); <span class="hljs-comment">// &#x7B2C; 0 &#x9879;&#x4E3A; 0</span>
    expect(fn(<span class="hljs-number">1</span>)).toBe(<span class="hljs-number">1</span>); <span class="hljs-comment">// &#x7B2C; 1 &#x9879;&#x4E3A; 1</span>
    expect(fn(<span class="hljs-number">2</span>)).toBe(<span class="hljs-number">1</span>); <span class="hljs-comment">// &#x7B2C; 2 &#x9879;&#x4E3A; 1</span>
    expect(fn(<span class="hljs-number">3</span>)).toBe(<span class="hljs-number">2</span>); <span class="hljs-comment">// &#x7B2C; 3 &#x9879;&#x4E3A; 2</span>
    expect(fn(<span class="hljs-number">10</span>)).toBe(<span class="hljs-number">55</span>); <span class="hljs-comment">// &#x7B2C; 10 &#x9879;&#x4E3A; 55</span>
    expect(fn(<span class="hljs-number">20</span>)).toBe(<span class="hljs-number">6765</span>); <span class="hljs-comment">// &#x7B2C; 20 &#x9879;&#x4E3A; 6765</span>
  });

  <span class="hljs-comment">// &#x6D4B;&#x8BD5;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x548C;&#x5F02;&#x5E38;&#x60C5;&#x51B5;</span>
  test(<span class="hljs-string">&apos;should handle invalid input&apos;</span>, <span class="hljs-function">() =&gt;</span> {
    expect(fn(-<span class="hljs-number">1</span>)).toBe(<span class="hljs-literal">null</span>); <span class="hljs-comment">// &#x8D1F;&#x6570;&#x8F93;&#x5165;&#x65E0;&#x6548;&#xFF0C;&#x8FD4;&#x56DE; null</span>
    expect(fn(<span class="hljs-string">&apos;a&apos;</span>)).toBeNaN(); <span class="hljs-comment">// &#x975E;&#x6570;&#x5B57;&#x8F93;&#x5165;&#x65E0;&#x6548;&#xFF0C;&#x8FD4;&#x56DE; NaN</span>
    expect(fn(<span class="hljs-literal">Infinity</span>)).toBe(<span class="hljs-literal">Infinity</span>); <span class="hljs-comment">// &#x8D85;&#x5927;&#x6570;&#x8F93;&#x5165;&#x65E0;&#x6548;&#xFF0C;&#x8FD4;&#x56DE; Infinity</span>
  });

  <span class="hljs-comment">// &#x6D4B;&#x8BD5;&#x5185;&#x90E8;&#x903B;&#x8F91;</span>
  test(<span class="hljs-string">&apos;should use array cache&apos;</span>, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// &#x6A21;&#x62DF;&#x6570;&#x7EC4;&#x7F13;&#x5B58;</span>
    <span class="hljs-keyword">const</span> mockCache = [];
    mockCache[<span class="hljs-number">0</span>] = <span class="hljs-number">0</span>;
    mockCache[<span class="hljs-number">1</span>] = <span class="hljs-number">1</span>;
    mockCache[<span class="hljs-number">2</span>] = <span class="hljs-number">1</span>;
    mockCache[<span class="hljs-number">3</span>] = <span class="hljs-number">2</span>;
    mockCache[<span class="hljs-number">4</span>] = <span class="hljs-number">3</span>;
    mockCache[<span class="hljs-number">5</span>] = <span class="hljs-number">5</span>;

    <span class="hljs-comment">// &#x65AD;&#x8A00; fn &#x51FD;&#x6570;&#x4F7F;&#x7528;&#x4E86;&#x6570;&#x7EC4;&#x7F13;&#x5B58;</span>
    expect(fn(<span class="hljs-number">5</span>)).toEqual(mockCache[<span class="hljs-number">5</span>]);
    expect(fn(<span class="hljs-number">4</span>)).toEqual(mockCache[<span class="hljs-number">4</span>]);
    expect(fn(<span class="hljs-number">3</span>)).toEqual(mockCache[<span class="hljs-number">3</span>]);
    expect(fn(<span class="hljs-number">2</span>)).toEqual(mockCache[<span class="hljs-number">2</span>]);
    expect(fn(<span class="hljs-number">1</span>)).toEqual(mockCache[<span class="hljs-number">1</span>]);
    expect(fn(<span class="hljs-number">0</span>)).toEqual(mockCache[<span class="hljs-number">0</span>]);
    
    <span class="hljs-comment">// &#x65AD;&#x8A00; fn &#x51FD;&#x6570;&#x6CA1;&#x6709;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x76F8;&#x540C;&#x7684;&#x503C;</span>
    <span class="hljs-keyword">const</span> spyFn = jest.spyOn(<span class="hljs-built_in">global</span>, <span class="hljs-string">&apos;fn&apos;</span>);
    fn(<span class="hljs-number">6</span>);
    expect(spyFn).toHaveBeenCalledTimes(<span class="hljs-number">2</span>); <span class="hljs-comment">// &#x53EA;&#x8C03;&#x7528;&#x4E86;&#x4E24;&#x6B21; fn &#x51FD;&#x6570;&#xFF0C;&#x5206;&#x522B;&#x662F; fn(6) &#x548C; fn(5)</span>
    
    <span class="hljs-comment">// &#x6062;&#x590D;&#x539F;&#x59CB;&#x51FD;&#x6570;</span>
    spyFn.mockRestore();
    
  });

});
</code></pre>
<h2 id="&#x4E00;&#x70B9;&#x601D;&#x8003;"><a href="#&#x4E00;&#x70B9;&#x601D;&#x8003;"></a>&#x4E00;&#x70B9;&#x601D;&#x8003;</h2>
<p>&#x673A;&#x9047;&#xFF1A;GPT &#x5728;&#x6A21;&#x5F0F;&#x5316;&#x9700;&#x6C42;&#x4E2D;&#x8D4B;&#x80FD;&#x660E;&#x663E;</p>
<p>&#x98CE;&#x9669;&#xFF1A;Prompt &#x6CE8;&#x610F;&#x6570;&#x636E;&#x9690;&#x79C1;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;&#x63D0;&#x7684; GPT Prompt &#x6D89;&#x53CA;&#x5230;&#x9690;&#x79C1;&#x4FE1;&#x606F;&#xFF09;</p>
<p>&#x89C2;&#x5FF5;&#xFF1A;&#x53D1;&#x73B0;&#x95EE;&#x9898; &gt; &#x5B9A;&#x4E49;&#x95EE;&#x9898; &gt; &#x5206;&#x89E3;&#x95EE;&#x9898; &gt; &#x89E3;&#x51B3;&#x95EE;&#x9898;</p>
<h3 id="&#x5F00;&#x653E;&#x6027;&#x601D;&#x8003;"><a href="#&#x5F00;&#x653E;&#x6027;&#x601D;&#x8003;"></a>&#x5F00;&#x653E;&#x6027;&#x601D;&#x8003;</h3>
<p>&#x4FE1;&#x606F;&#x8DDF;&#x77E5;&#x8BC6;&#x7684;&#x533A;&#x522B;&#xFF1F;
&#x8BB0;&#x5FC6;&#x8DDF;&#x5B66;&#x4E60;&#x7684;&#x533A;&#x522B;&#xFF1F;</p>
<p>&#x4F8B;&#x5B50;1&#xFF1A;&#x5B66;&#x4F1A;&#x4E86;&#x738B;&#x8005;&#x519C;&#x836F;&#x7684;&#x67D0;&#x4E2A;&#x82F1;&#x96C4;&#xFF1F;&#x8FD9;&#x91CC;&#x7684;&#x5B66;&#x4F1A;&#x6307;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&#x662F;&#x5BF9;&#x6280;&#x80FD;&#x6216;&#x8005;&#x5404;&#x79CD;&#x5957;&#x8DEF;&#x7684;&#x719F;&#x7EC3;&#x80CC;&#x8BF5;&#x8FD8;&#x662F;&#x5728;&#x5BF9;&#x7EBF;&#x4E2D;&#x5404;&#x79CD;&#x79C0;&#xFF1F;
&#x4F8B;&#x5B50;2&#xFF1A;&#x8BF4;&#x4E00;&#x4E2A;&#x4EBA;&#x5B66;&#x4F1A;&#x4E86;&#x7FBD;&#x6BDB;&#x7403;&#xFF1F;&#x8FD9;&#x91CC;&#x7684;&#x5B66;&#x4F1A;&#x6307;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&#x662F;&#x5BF9;&#x7FBD;&#x6BDB;&#x7403;&#x5404;&#x79CD;&#x52A8;&#x4F5C;&#x8DDF;&#x5BF9;&#x7EBF;&#x7B56;&#x7565;&#x7684;&#x8BB0;&#x5FC6;&#xFF0C;&#x8FD8;&#x662F;&#x518D;&#x5B9E;&#x9645;&#x5BF9;&#x7EBF;&#x4E2D;&#x560E;&#x560E;&#x6740;&#xFF1F;</p>
<p>&#x5B66;&#x4E00;&#x4E2A;&#x82F1;&#x96C4;&#x7684;&#x65B9;&#x5F0F;&#xFF1A;
&#x65B9;&#x6848;1&#xFF1A; &#x4ECE;&#x82F1;&#x96C4;&#x6280;&#x80FD;&#x63CF;&#x8FF0;&#x6216;&#x8005;&#x6559;&#x7A0B;&#x5F00;&#x59CB;&#xFF08;&#x4FE1;&#x606F;&#xFF0C;&#x8BB0;&#x5FC6;&#xFF0C;&#x673A;&#x68B0;&#x8BB0;&#x5FC6;&#xFF0C;&#x6307;&#x4EE4;&#x8BB0;&#x5FC6;&#xFF0C;&#x62BD;&#x8C61;&#xFF09;-&gt; &#x5B9E;&#x8DF5;&#xFF1B;</p>
<p>&#x65B9;&#x6848;2&#xFF1A;&#x4ECE;&#x5BF9;&#x7EBF;&#x7684;&#x4F53;&#x611F;&#x8BA4;&#x8BC6;&#x5F00;&#x59CB;&#xFF08;&#x77E5;&#x8BC6;&#xFF0C;&#x5B66;&#x4E60;&#xFF0C;&#x7406;&#x89E3;&#x8BB0;&#x5FC6;&#xFF0C;&#x5F52;&#x7EB3;&#x5B66;&#x4E60;&#xFF0C;&#x5B9E;&#x8DF5;&#xFF09;&#xFF0C;&#x968F;&#x7740;&#x5BF9;&#x7EBF;&#x6B21;&#x6570;&#x8DDF;&#x5BF9;&#x7EBF;&#x82F1;&#x96C4;&#x6837;&#x672C;&#x53D8;&#x591A;&#xFF0C;&#x4F1A;&#x51FA;&#x73B0;&#x5BF9;&#x8FD9;&#x4E2A;&#x82F1;&#x96C4;&#x8D85;&#x8D8A;&#x5E38;&#x4EBA;&#x7684;&#x7406;&#x89E3;&#xFF08;&#x4E3B;&#x64AD;&#x7ECF;&#x5E38;&#x8BF4;&#x9053;&#x7684;&#xFF0C;&#x8D85;&#x8D8A;&#x4E00;&#x822C;&#x4EBA;&#x7406;&#x89E3;&#xFF09; -&gt; &#x770B;&#x63CF;&#x8FF0;&#x8DDF;&#x6559;&#x7A0B;&#x77EB;&#x6B63;&#x64CD;&#x4F5C;&#xFF08;&#x56DE;&#x5230;&#x62BD;&#x8C61;&#xFF0C;&#x76D1;&#x7763;&#x5B66;&#x4E60;&#xFF09;&#xFF1B;</p>
<p>GPT &#x8FDB;&#x5316;&#x524D;&#x63D0;&#xFF1A;&#x66F4;&#x4E30;&#x5BCC;&#x66F4;&#x9AD8;&#x8D28;&#x91CF;&#x7684;&#x8D44;&#x6599;&#x6837;&#x672C;&#xFF08;&#x53EF;&#x80FD;&#x662F;&#x5C40;&#x9650;&#xFF09;&#xFF1B;&#x66F4;&#x591A;&#x7684;&#x6D4B;&#x8BC4;&#x6570;&#x636E;&#xFF1B;&#x66F4;&#x591A;&#x7684;&#x5B9E;&#x8DF5;&#x8FD0;&#x7528;&#xFF08;&#x4F8B;&#x5982; chatGPT&#xFF09;&#xFF0C;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF1F;</p>
<ul>
<li>&#x4E30;&#x5BCC;&#xFF1A;&#x66F4;&#x591A;&#x7684;&#x8BAD;&#x7EC3;&#x8D44;&#x6599;</li>
<li>&#x8D28;&#x91CF;&#xFF1A;&#x8D44;&#x6599;&#x7684;&#x8D28;&#x91CF;&#x51B3;&#x5B9A;&#x4E86; GPT &#x7684;&#x8FDB;&#x5316;&#x6C34;&#x5E73;&#xFF0C;&#x4F8B;&#x5982; wiki,quora &#x7B49;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x5E73;&#x53F0;</li>
<li>&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF1A;&#x7406;&#x8BBA;&#x7ED3;&#x5408;&#x5B9E;&#x9645;
...</li>
</ul>
<p>&#x5176;&#x4ED6;&#x89D2;&#x5EA6;&#xFF1A;&#x8BB0;&#x5FC6;&#x662F;&#x5B66;&#x4E60;&#x7684;&#x4E00;&#x79CD;&#x624B;&#x6BB5;&#x3002;&#x8BB0;&#x5FC6;&#x7684;&#x76EE;&#x6807;&#x662F;&#x91CD;&#x73B0;&#xFF08;&#x6709;&#x9650;&#xFF0C;&#x53EF;&#x77E5;&#xFF09;&#xFF0C;&#x5B66;&#x4E60;&#x7684;&#x76EE;&#x6807;&#x662F;&#x6CDB;&#x5316;&#xFF08;&#x65E0;&#x9650;&#xFF0C;&#x672A;&#x77E5;&#xFF09;</p>
<h3 id="&#x4E00;&#x4E9B;&#x8D44;&#x6599;"><a href="#&#x4E00;&#x4E9B;&#x8D44;&#x6599;"></a>&#x4E00;&#x4E9B;&#x8D44;&#x6599;</h3>
<ul>
<li><a href="https://www.youtube.com/watch?v=K0SZ9mdygTw">GPT-4&#x8BBA;&#x6587;&#x7CBE;&#x8BFB;&#x3010;&#x8BBA;&#x6587;&#x7CBE;&#x8BFB;&#xB7;53&#x3011;</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/597586623">&#x901A;&#x5411;AGI&#x4E4B;&#x8DEF;&#xFF1A;&#x5927;&#x578B;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x6280;&#x672F;&#x7CBE;&#x8981;</a></li>
<li><a href="https://www.ruxu.dev/articles/ai/maximizing-the-potential-of-llms/">Maximizing the Potential of LLMs: A Guide to Prompt Engineering</a></li>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/ChatGPT#:~:text=ChatGPT%20is%20an%20artificial%2Dintelligence,supervised%20and%20reinforcement%20learning%20techniques">ChatGPT - Wikipedia</a></li>
</ul>
`,F=[{level:2,title:"GPT 是什么？",children:[]},{level:2,title:"GPT 与编码 - TDD（Test-Driven Development）",children:[{level:3,title:"改变需求开发流程",children:[]},{level:3,title:"例子",children:[{level:4,title:"需求描述",children:[]},{level:4,title:"需求变化",children:[]},{level:4,title:"代码优化",children:[]},{level:4,title:"代码重构",children:[]},{level:4,title:"用例增强",children:[]}]}]},{level:2,title:"一点思考",children:[{level:3,title:"开放性思考",children:[]},{level:3,title:"一些资料",children:[]}]}];export{x as attributes,s as html,F as nestedHeaders};
