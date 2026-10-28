const x={},F=`<!-- 写作锚点
读者收获：能沿简化代码追踪残差总和与历史列表的变化，用一张图分清标准、Full、Block 三种读取方式，并判断灵活性是否值得额外成本。
核心判断：AttnRes 将固定累加改为按内容读取历史计算结果；Full 保留每次新增结果，Block 合并组内结果，以较粗的读取粒度降低存储和通信负担。
如何推进：从固定残差的访问限制出发，先看普通 forward，再展开 Full 的历史列表、打分和返回结果，继而解释分块，用同一读取时刻的总图收束，最后核对效果与范式判断。
-->
<h1 id="Attention Residuals&#xFF1A;Kimi &#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF1F;"><a href="#Attention Residuals&#xFF1A;Kimi &#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF1F;"></a>Attention Residuals&#xFF1A;Kimi &#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF1F;</h1>
<p>Transformer &#x52A0;&#x6DF1;&#x4EE5;&#x540E;&#xFF0C;&#x6BCF;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x90FD;&#x4F1A;&#x8FDB;&#x5165;&#x6B8B;&#x5DEE;&#x6D41;&#x3002;&#x540E;&#x9762;&#x7684;&#x5C42;&#x6536;&#x5230;&#x7684;&#x662F;&#x4E00;&#x8DEF;&#x7D2F;&#x52A0;&#x7684;&#x72B6;&#x6001;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EF;&#x4EE5;&#x5355;&#x72EC;&#x8BFB;&#x53D6;&#x7684;&#x5404;&#x5C42;&#x7ED3;&#x679C;&#x3002;</p>
<p>Kimi Team &#x5728; 2026 &#x5E74;&#x63D0;&#x51FA;&#x7684; Attention Residuals&#xFF08;AttnRes&#xFF09;&#xFF0C;&#x5C1D;&#x8BD5;&#x8BA9;&#x540E;&#x9762;&#x7684;&#x5C42;&#x6309;&#x5185;&#x5BB9;&#x9009;&#x62E9;&#x524D;&#x9762;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x4E3A;&#x6B64;&#xFF0C;&#x6A21;&#x578B;&#x5F97;&#x4FDD;&#x5B58;&#x8FD9;&#x4E9B;&#x5386;&#x53F2;&#x8868;&#x793A;&#xFF0C;&#x5E76;&#x5728;&#x540E;&#x7EED;&#x8BA1;&#x7B97;&#x4E2D;&#x8BFB;&#x53D6;&#x5B83;&#x4EEC;&#xFF0C;&#x8FD9;&#x4E5F;&#x5E26;&#x6765;&#x4E86;&#x989D;&#x5916;&#x6210;&#x672C;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x4F20;&#x7EDF; Residuals&#xFF1A;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;&#x6709;&#x4EC0;&#x4E48;&#x5C40;&#x9650;&#xFF1F;"><a href="#&#x4E00;&#x3001;&#x4F20;&#x7EDF; Residuals&#xFF1A;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;&#x6709;&#x4EC0;&#x4E48;&#x5C40;&#x9650;&#xFF1F;"></a>&#x4E00;&#x3001;&#x4F20;&#x7EDF; Residuals&#xFF1A;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;&#x6709;&#x4EC0;&#x4E48;&#x5C40;&#x9650;&#xFF1F;</h2>
<p>&#x8FD9;&#x91CC;&#x628A;&#x6BCF;&#x4E2A; Attention &#x6216; FFN &#x5B50;&#x5C42;&#x8BB0;&#x4F5C;&#x4E00;&#x6B21; <code>layer</code> &#x8BA1;&#x7B97;&#xFF0C;&#x5305;&#x542B;&#x5B50;&#x5C42;&#x5185;&#x90E8;&#x8BA1;&#x7B97;&#xFF0C;&#x4E0D;&#x5305;&#x542B;&#x5916;&#x9762;&#x7684;&#x6B8B;&#x5DEE;&#x52A0;&#x6CD5;&#x3002;</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
    <span class="hljs-keyword">for</span> layer <span class="hljs-keyword">in</span> self.layers:
        new = layer(x)
        x = x + new
    <span class="hljs-keyword">return</span> x
</code></pre>
<p><code>self</code> &#x8868;&#x793A;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;<code>self.layers</code> &#x662F;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x6309;&#x987A;&#x5E8F;&#x4FDD;&#x5B58;&#x7684;&#x5404;&#x5C42;&#x3002;&#x8C03;&#x7528;&#x65F6;&#x53EA;&#x9700;&#x63D0;&#x4F9B;&#x8F93;&#x5165; <code>x</code>&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x4F1A;&#x4F9D;&#x6B21;&#x6267;&#x884C;&#x8FD9;&#x4E9B;&#x5C42;&#x7684;&#x8BA1;&#x7B97;&#x3002;</p>
<p><code>new</code> &#x662F;&#x672C;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x7ED3;&#x679C;&#xFF0C;<code>x</code> &#x662F;&#x4E00;&#x8DEF;&#x4F20;&#x4E0B;&#x6765;&#x7684;&#x7D2F;&#x52A0;&#x72B6;&#x6001;&#x3002;&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x90FD;&#x4FDD;&#x7559;&#x65E7;&#x7684; <code>x</code>&#xFF0C;&#x518D;&#x628A; <code>new</code> &#x52A0;&#x8FDB;&#x53BB;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x5047;&#x8BBE;&#x524D;&#x4E24;&#x5C42;&#x7684;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x5206;&#x522B;&#x662F; <code>y1</code> &#x548C; <code>y2</code>&#xFF1A;</p>
<pre><code class="language-text">&#x521D;&#x59CB;&#x72B6;&#x6001;&#xFF1A;x0

&#x7B2C; 1 &#x5C42;&#xFF1A;x1 = x0 + y1
&#x7B2C; 2 &#x5C42;&#xFF1A;x2 = x1 + y2
             = x0 + y1 + y2

&#x7B2C; 3 &#x5C42;&#x6536;&#x5230;&#xFF1A;x0 + y1 + y2
</code></pre>
<p>&#x8FD9;&#x91CC;&#x7D2F;&#x52A0;&#x7684;&#x662F;&#x6BCF;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x662F;&#x628A;&#x6BCF;&#x5C42;&#x7684;&#x7D2F;&#x8BA1;&#x72B6;&#x6001;&#x53CD;&#x590D;&#x76F8;&#x52A0;&#x3002;</p>
<p>&#x7ED3;&#x6784;&#x793A;&#x610F;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165; x0
   &#x2502;
   &#x25BC;
 Layer 1 &#x2500;&#x2500;[+]&#x2500;&#x2500;&gt; Layer 2 &#x2500;&#x2500;[+]&#x2500;&#x2500;&gt; Layer 3 &#x2500;&#x2500;[+]&#x2500;&#x2500;&gt; ...
              &#x25B2;               &#x25B2;               &#x25B2;
              &#x2502;               &#x2502;               &#x2502;
             y1              y2              y3

[+]&#xFF1A;&#x5C06;&#x672C;&#x5C42;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x52A0;&#x56DE;&#x5F53;&#x524D;&#x72B6;&#x6001;
</code></pre>
<p>&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x8BA9;&#x4FE1;&#x606F;&#x548C;&#x68AF;&#x5EA6;&#x6709;&#x4E00;&#x6761;&#x76F4;&#x63A5;&#x4F20;&#x9012;&#x7684;&#x8DEF;&#xFF0C;&#x6709;&#x52A9;&#x4E8E;&#x8BAD;&#x7EC3;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x3002;&#x4F46;&#x8FD9;&#x91CC;&#x5411;&#x540E;&#x4F20;&#x9012;&#x7684;&#x53EA;&#x6709;&#x7D2F;&#x52A0;&#x72B6;&#x6001;&#xFF0C;&#x6CA1;&#x6709;&#x5355;&#x72EC;&#x4FDD;&#x7559; <code>y1</code>&#x3001;<code>y2</code> &#x4F9B;&#x540E;&#x9762;&#x7684;&#x5C42;&#x5206;&#x522B;&#x8BFB;&#x53D6;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x53EA;&#x80FD;&#x4ECE;&#x603B;&#x548C;&#x4E2D;&#x63D0;&#x53D6;&#x6709;&#x7528;&#x4FE1;&#x606F;&#xFF0C;&#x8FDE;&#x63A5;&#x672C;&#x8EAB;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#x201C;&#x591A;&#x53D6;&#x4E00;&#x70B9;&#x7B2C;&#x4E00;&#x5C42;&#x7ED3;&#x679C;&#x3001;&#x5C11;&#x53D6;&#x4E00;&#x70B9;&#x7B2C;&#x4E8C;&#x5C42;&#x7ED3;&#x679C;&#x201D;&#x7684;&#x66F4;&#x7CBE;&#x7EC6;&#x5316;&#x64CD;&#x4F5C;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x6709;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;&#x6B8B;&#x5DEE;&#x6D41;&#x4E0D;&#x65AD;&#x7D2F;&#x79EF;&#xFF0C;&#x72B6;&#x6001;&#x7684;&#x6570;&#x503C;&#x5C3A;&#x5EA6;&#x53EF;&#x80FD;&#x589E;&#x5927;&#xFF0C;&#x540E;&#x7EED;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x7684;&#x76F8;&#x5BF9;&#x5F71;&#x54CD;&#x5C31;&#x4F1A;&#x53D8;&#x5C0F;&#x3002;&#x7ECF;&#x8FC7;&#x5F88;&#x591A;&#x5C42;&#x7684;&#x7D2F;&#x52A0;&#x540E;&#xFF0C;&#x65E0;&#x6CD5;&#x5145;&#x5206;&#x7528;&#x597D;&#x4E86;&#x6BCF;&#x5C42;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;Full AttnRes&#xFF1A;&#x8BA9;&#x540E;&#x9762;&#x7684;&#x5C42;&#x91CD;&#x65B0;&#x8BFB;&#x53D6;&#x5386;&#x53F2;&#x7ED3;&#x679C;"><a href="#&#x4E8C;&#x3001;Full AttnRes&#xFF1A;&#x8BA9;&#x540E;&#x9762;&#x7684;&#x5C42;&#x91CD;&#x65B0;&#x8BFB;&#x53D6;&#x5386;&#x53F2;&#x7ED3;&#x679C;"></a>&#x4E8C;&#x3001;Full AttnRes&#xFF1A;&#x8BA9;&#x540E;&#x9762;&#x7684;&#x5C42;&#x91CD;&#x65B0;&#x8BFB;&#x53D6;&#x5386;&#x53F2;&#x7ED3;&#x679C;</h2>
<p>Full AttnRes &#x5148;&#x628A;&#x5404;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x7ED3;&#x679C;&#x5206;&#x522B;&#x7559;&#x4E0B;&#xFF0C;&#x540E;&#x9762;&#x7684;&#x5C42;&#x518D;&#x901A;&#x8FC7; Attention &#x51B3;&#x5B9A;&#x600E;&#x4E48;&#x8BFB;&#x53D6;&#x3002;Horizontal Attention &#x2192; Vertical Attention&#xFF08;&#x6C34;&#x5E73;&#x6CE8;&#x610F;&#x529B; &#x2192; &#x5782;&#x76F4;&#x6CE8;&#x610F;&#x529B;&#xFF09;</p>
<p>&#x5047;&#x8BBE;&#x521D;&#x59CB;&#x8F93;&#x5165;&#x662F; <code>x0</code>&#xFF0C;&#x524D;&#x4E24;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x7ED3;&#x679C;&#x5206;&#x522B;&#x662F; <code>y1</code>&#x3001;<code>y2</code>&#x3002;&#x5386;&#x53F2;&#x5217;&#x8868;&#x53EF;&#x4EE5;&#x5199;&#x6210;&#xFF1A;</p>
<pre><code class="language-python">history = [
    [<span class="hljs-number">2</span>, <span class="hljs-number">0</span>],  <span class="hljs-comment"># &#x521D;&#x59CB;&#x8F93;&#x5165; x0</span>
    [<span class="hljs-number">0</span>, <span class="hljs-number">4</span>],  <span class="hljs-comment"># &#x7B2C;&#x4E00;&#x5C42;&#x65B0;&#x589E;&#x7ED3;&#x679C; y1</span>
    [<span class="hljs-number">3</span>, <span class="hljs-number">0</span>],  <span class="hljs-comment"># &#x7B2C;&#x4E8C;&#x5C42;&#x65B0;&#x589E;&#x7ED3;&#x679C; y2</span>
]
</code></pre>
<p>&#x4F20;&#x7EDF;&#x6B8B;&#x5DEE;&#x4F1A;&#x5C06;&#x8FD9;&#x4E9B;&#x7ED3;&#x679C;&#x5408;&#x5E76;&#x6210; <code>[5, 4]</code>&#x3002;&#x800C; Full AttnRes &#x5219;&#x5206;&#x522B;&#x4FDD;&#x7559;&#x8FD9;&#x4E09;&#x4EFD;&#x6765;&#x6E90;&#xFF0C;&#x4F9B;&#x7B2C;&#x4E09;&#x5C42;&#x8BFB;&#x53D6;&#x3002;</p>
<h3 id="1. &#x5386;&#x53F2;&#x8BFB;&#x53D6;&#x662F;&#x600E;&#x4E48;&#x5DE5;&#x4F5C;&#x7684;&#xFF1F;"><a href="#1. &#x5386;&#x53F2;&#x8BFB;&#x53D6;&#x662F;&#x600E;&#x4E48;&#x5DE5;&#x4F5C;&#x7684;&#xFF1F;"></a>1. &#x5386;&#x53F2;&#x8BFB;&#x53D6;&#x662F;&#x600E;&#x4E48;&#x5DE5;&#x4F5C;&#x7684;&#xFF1F;</h3>
<p>&#x6BCF;&#x4E2A;&#x63A5;&#x6536;&#x5C42;&#x90FD;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x53EF;&#x5B66;&#x4E60;&#x67E5;&#x8BE2;&#x5411;&#x91CF; <code>query</code>&#xFF0C;&#x7528;&#x5B83;&#x7ED9;&#x5386;&#x53F2;&#x7ED3;&#x679C;&#x6253;&#x5206;&#xFF0C;&#x518D;&#x628A;&#x5206;&#x6570;&#x8F6C;&#x6362;&#x6210;&#x8BFB;&#x53D6;&#x6BD4;&#x4F8B;&#x3002;</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">read_history</span>(<span class="hljs-params">history, query</span>):</span>
    scores = []
    <span class="hljs-keyword">for</span> value <span class="hljs-keyword">in</span> history:
        key = rms_norm(value)
        scores.append(dot(query, key))

    weights = softmax(scores)
    <span class="hljs-keyword">return</span> weighted_sum(history, weights)
</code></pre>
<p>&#x8FD9;&#x6BB5;&#x4F2A;&#x4EE3;&#x7801;&#x53EA;&#x4FDD;&#x7559;&#x4E86;&#x8BFB;&#x53D6;&#x8FC7;&#x7A0B;&#xFF1A;</p>
<ul>
<li><code>rms_norm</code>&#xFF1A;&#x8C03;&#x6574;&#x5386;&#x53F2;&#x8868;&#x793A;&#x7684;&#x6570;&#x503C;&#x5C3A;&#x5EA6;&#xFF0C;&#x907F;&#x514D;&#x6253;&#x5206;&#x8FC7;&#x5EA6;&#x53D7;&#x6570;&#x5B57;&#x5927;&#x5C0F;&#x5F71;&#x54CD;&#x3002;</li>
<li><code>dot</code>&#xFF1A;&#x8BA1;&#x7B97;&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#x4E0E;&#x5386;&#x53F2;&#x8868;&#x793A;&#x7684;&#x5339;&#x914D;&#x5206;&#x6570;&#x3002;</li>
<li><code>softmax</code>&#xFF1A;&#x628A;&#x5206;&#x6570;&#x8F6C;&#x6362;&#x6210;&#x603B;&#x548C;&#x4E3A; 1 &#x7684;&#x6743;&#x91CD;&#x3002;</li>
<li><code>weighted_sum</code>&#xFF1A;&#x6309;&#x6743;&#x91CD;&#x5BF9;&#x539F;&#x59CB;&#x5386;&#x53F2;&#x8868;&#x793A;&#x52A0;&#x6743;&#x6C42;&#x548C;&#x3002;</li>
</ul>
<p>&#x8BFB;&#x53D6;&#x65F6;&#xFF0C;&#x6570;&#x636E;&#x8FD9;&#x6837;&#x6D41;&#x52A8;&#xFF1A;</p>
<pre><code class="language-text">&#x5386;&#x53F2;&#x8868;&#x793A;
   &#x2502;
   &#x25BC;
&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#x4E0E;&#x5404;&#x8868;&#x793A;&#x8BA1;&#x7B97;&#x5339;&#x914D;&#x5206;&#x6570;
   &#x2502;
   &#x25BC;
Softmax &#x8F6C;&#x6362;&#x4E3A;&#x8BFB;&#x53D6;&#x6743;&#x91CD;
   &#x2502;
   &#x25BC;
&#x5386;&#x53F2;&#x8868;&#x793A; &#xD7; &#x5BF9;&#x5E94;&#x6743;&#x91CD;&#xFF0C;&#x518D;&#x6C42;&#x548C;
   &#x2502;
   &#x25BC;
&#x5F53;&#x524D;&#x5C42;&#x7684;&#x8F93;&#x5165;
</code></pre>
<p>&#x8FD8;&#x662F;&#x4E0A;&#x9762;&#x7684;&#x4E09;&#x4E2A;&#x5411;&#x91CF;&#x3002;&#x5047;&#x8BBE;&#x67D0;&#x6B21;&#x8BFB;&#x53D6;&#x5F97;&#x5230;&#x4EE5;&#x4E0B;&#x6743;&#x91CD;&#xFF1A;</p>
<pre><code class="language-text">x0 = [2, 0]    &#x6743;&#x91CD; 0.25
y1 = [0, 4]    &#x6743;&#x91CD; 0.50
y2 = [3, 0]    &#x6743;&#x91CD; 0.25
</code></pre>
<p>&#x90A3;&#x4E48;&#x7B2C;&#x4E09;&#x5C42;&#x6536;&#x5230;&#x7684;&#x7ED3;&#x679C;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">h3 = 0.25 &#xD7; [2, 0]
   + 0.50 &#xD7; [0, 4]
   + 0.25 &#xD7; [3, 0]
   = [1.25, 2]
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x7B2C;&#x4E09;&#x5C42;&#x8BFB;&#x53D6;&#x4E86;&#x66F4;&#x591A;&#x7B2C;&#x4E00;&#x5C42;&#x65B0;&#x589E;&#x7684;&#x7ED3;&#x679C; <code>y1</code>&#x3002;</p>
<p>&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#x7531;&#x8BAD;&#x7EC3;&#x5F97;&#x5230;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x56FA;&#x5B9A;&#x4E0B;&#x6765;&#x3002;&#x8FD9;&#x91CC;&#x7684; Attention &#x9009;&#x62E9;&#x7684;&#x662F;&#x4E0D;&#x540C;&#x6DF1;&#x5EA6;&#x7684;&#x5C42;&#x8868;&#x793A;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x524D;&#x6587;&#x63D0;&#x5230;&#x7684;&#x5782;&#x76F4;&#x6CE8;&#x610F;&#x529B;</p>
<h3 id="2. &#x628A;&#x8BFB;&#x53D6;&#x673A;&#x5236;&#x653E;&#x56DE; forward"><a href="#2. &#x628A;&#x8BFB;&#x53D6;&#x673A;&#x5236;&#x653E;&#x56DE; forward"></a>2. &#x628A;&#x8BFB;&#x53D6;&#x673A;&#x5236;&#x653E;&#x56DE; forward</h3>
<p>&#x8FD9;&#x91CC;&#x7684; <code>forward</code> &#x8868;&#x793A;&#x4E00;&#x6B21;&#x8D70;&#x5B8C;&#x5168;&#x90E8;&#x5C42;&#x7684;&#x8FC7;&#x7A0B;&#xFF1B;<code>for</code> &#x6BCF;&#x5FAA;&#x73AF;&#x4E00;&#x6B21;&#xFF0C;&#x624D;&#x5904;&#x7406;&#x5176;&#x4E2D;&#x4E00;&#x5C42;&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x53EA;&#x8BA1;&#x7B97;&#x67D0;&#x4E00;&#x5C42;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x628A;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#x53CD;&#x590D;&#x8FD0;&#x884C;&#x591A;&#x6B21;&#x3002;</p>
<p>&#x5404;&#x5C42;&#x548C;&#x67E5;&#x8BE2;&#x53C2;&#x6570;&#x90FD;&#x5DF2;&#x4FDD;&#x5B58;&#x5728;&#x6A21;&#x578B;&#x5185;&#x90E8;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x65F6;&#x4E34;&#x65F6;&#x4F20;&#x5165;&#xFF1A;</p>
<ul>
<li><code>self.layers</code>&#xFF1A;&#x6309;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;&#x8BA1;&#x7B97;&#x5C42;&#xFF0C;&#x548C;&#x524D;&#x9762;&#x7684;&#x666E;&#x901A;&#x6B8B;&#x5DEE;&#x4EE3;&#x7801;&#x4E00;&#x6837;&#x3002;</li>
<li><code>layer.query</code>&#xFF1A;&#x5F53;&#x524D;&#x8FD9;&#x4E00;&#x5C42;&#x81EA;&#x5DF1;&#x7684;&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#xFF0C;&#x7528;&#x6765;&#x7ED9;&#x5386;&#x53F2;&#x7ED3;&#x679C;&#x6253;&#x5206;&#x3002;&#x5B83;&#x662F;&#x4E00;&#x7EC4;&#x8BAD;&#x7EC3;&#x5F97;&#x5230;&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x4E0D;&#x662F;&#x7528;&#x6237;&#x7684;&#x63D0;&#x95EE;&#x3002;</li>
<li><code>self.output_query</code>&#xFF1A;&#x6240;&#x6709;&#x5C42;&#x8BA1;&#x7B97;&#x5B8C;&#x540E;&#xFF0C;&#x6700;&#x540E;&#x6C47;&#x603B;&#x5386;&#x53F2;&#x7ED3;&#x679C;&#x65F6;&#x4F7F;&#x7528;&#x7684;&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#xFF0C;&#x4E5F;&#x662F;&#x6A21;&#x578B;&#x4FDD;&#x5B58;&#x7684;&#x53C2;&#x6570;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x6837;&#xFF0C;&#x8BFB;&#x53D6;&#x5386;&#x53F2;&#x548C;&#x6267;&#x884C;&#x5F53;&#x524D;&#x5C42;&#x7684;&#x8BA1;&#x7B97;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x653E;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;&#x91CC;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
    history = [x]

    <span class="hljs-keyword">for</span> layer <span class="hljs-keyword">in</span> self.layers:
        layer_input = read_history(history, layer.query)
        new = layer(layer_input)
        history.append(new)

    <span class="hljs-keyword">return</span> read_history(history, self.output_query)
</code></pre>
<p><code>layer_input</code> &#x5C31;&#x662F;&#x4E3A;&#x5F53;&#x524D;&#x5C42;&#x51C6;&#x5907;&#x597D;&#x7684;&#x8F93;&#x5165;&#xFF0C;<code>new</code> &#x662F;&#x8FD9;&#x4E00;&#x5C42;&#x7B97;&#x51FA;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x53EA;&#x6709;&#x4E09;&#x5C42;&#xFF0C;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x4F1A;&#x8FD9;&#x6837;&#x6267;&#x884C;&#xFF1A;</p>
<pre><code class="language-text">&#x5F00;&#x59CB;&#xFF1A;history = [x0]

&#x7B2C; 1 &#x6B21;&#x5FAA;&#x73AF;&#xFF08;&#x7B2C; 1 &#x5C42;&#xFF09;&#xFF1A;
  &#x7528;&#x672C;&#x5C42;&#x7684; query &#x8BFB;&#x53D6; [x0]&#xFF0C;&#x8BA1;&#x7B97; y1
  history = [x0, y1]

&#x7B2C; 2 &#x6B21;&#x5FAA;&#x73AF;&#xFF08;&#x7B2C; 2 &#x5C42;&#xFF09;&#xFF1A;
  &#x7528;&#x672C;&#x5C42;&#x7684; query &#x8BFB;&#x53D6; [x0, y1]&#xFF0C;&#x8BA1;&#x7B97; y2
  history = [x0, y1, y2]

&#x7B2C; 3 &#x6B21;&#x5FAA;&#x73AF;&#xFF08;&#x7B2C; 3 &#x5C42;&#xFF09;&#xFF1A;
  &#x7528;&#x672C;&#x5C42;&#x7684; query &#x8BFB;&#x53D6; [x0, y1, y2]&#xFF0C;&#x8BA1;&#x7B97; y3
  history = [x0, y1, y2, y3]
</code></pre>
<p>&#x6BCF;&#x5C42;&#x90FD;&#x80FD;&#x4ECE;&#x5217;&#x8868;&#x91CC;&#x5206;&#x522B;&#x8BFB;&#x53D6;&#x524D;&#x9762;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x5FC5;&#x53EA;&#x63A5;&#x6536;&#x4E00;&#x4EFD;&#x4E0D;&#x65AD;&#x7D2F;&#x52A0;&#x7684;&#x72B6;&#x6001;&#x3002;</p>
<p><code>append(new)</code> &#x53EA;&#x4FDD;&#x5B58;&#x672C;&#x5C42;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x662F;&#x628A;&#x8F93;&#x5165;&#x548C;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x5148;&#x76F8;&#x52A0;&#x518D;&#x4FDD;&#x5B58;&#x3002;&#x4E09;&#x5C42;&#x90FD;&#x7B97;&#x5B8C;&#x540E;&#xFF0C;&#x518D;&#x7528; <code>self.output_query</code> &#x5BF9;&#x6574;&#x4E2A;&#x5386;&#x53F2;&#x5217;&#x8868;&#x505A;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x52A0;&#x6743;&#x6C47;&#x603B;&#xFF0C;&#x8FD4;&#x56DE;&#x8FD9;&#x6BB5;&#x5C42;&#x95F4;&#x8BA1;&#x7B97;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x8FD9;&#x6BB5;&#x4ECD;&#x662F;&#x6D41;&#x7A0B;&#x793A;&#x610F;&#xFF0C;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x89C1;&#x8BBA;&#x6587;&#x548C;&#x5B98;&#x65B9;&#x4EE3;&#x7801;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;Block AttnRes&#xFF1A;&#x4E0D;&#x5FC5;&#x628A;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x5355;&#x72EC;&#x4FDD;&#x5B58;"><a href="#&#x4E09;&#x3001;Block AttnRes&#xFF1A;&#x4E0D;&#x5FC5;&#x628A;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x5355;&#x72EC;&#x4FDD;&#x5B58;"></a>&#x4E09;&#x3001;Block AttnRes&#xFF1A;&#x4E0D;&#x5FC5;&#x628A;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x5355;&#x72EC;&#x4FDD;&#x5B58;</h2>
<p>Full AttnRes &#x4FDD;&#x7559;&#x4E86;&#x5168;&#x90E8;&#x5386;&#x53F2;&#x6765;&#x6E90;&#xFF0C;&#x8BFB;&#x53D6;&#x66F4;&#x7075;&#x6D3B;&#xFF0C;&#x6210;&#x672C;&#x4E5F;&#x968F;&#x4E4B;&#x589E;&#x52A0;&#x3002;&#x6BCF;&#x4E2A;&#x4F4D;&#x7F6E;&#x90FD;&#x9700;&#x8981;&#x4FDD;&#x5B58;&#x591A;&#x5C42;&#x7ED3;&#x679C;&#xFF0C;&#x540E;&#x7EED;&#x5C42;&#x8981;&#x53CD;&#x590D;&#x8BFB;&#x53D6;&#x548C;&#x6253;&#x5206;&#xFF1B;&#x5206;&#x5E03;&#x5F0F;&#x8BAD;&#x7EC3;&#x4E2D;&#xFF0C;&#x4F20;&#x9012;&#x8FD9;&#x4E9B;&#x5386;&#x53F2;&#x8868;&#x793A;&#x4E5F;&#x53EF;&#x80FD;&#x589E;&#x52A0;&#x7CFB;&#x7EDF;&#x8D1F;&#x62C5;&#x3002;</p>
<p>Block AttnRes &#x5C06;&#x82E5;&#x5E72;&#x5C42;&#x5212;&#x5206;&#x4E3A;&#x4E00;&#x7EC4;&#xFF1A;</p>
<ul>
<li>&#x5757;&#x5185;&#xFF1A;&#x5C06;&#x5404;&#x5C42;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x7D2F;&#x52A0;&#x3002;</li>
<li>&#x5757;&#x95F4;&#xFF1A;&#x901A;&#x8FC7; Attention &#x8BFB;&#x53D6;&#x4E0D;&#x540C;&#x5386;&#x53F2;&#x5757;&#x7684;&#x8868;&#x793A;&#x3002;</li>
<li>&#x5F53;&#x524D;&#x5757;&#x5C1A;&#x672A;&#x5B8C;&#x6210;&#x65F6;&#xFF1A;&#x4FDD;&#x7559;&#x90E8;&#x5206;&#x7D2F;&#x52A0;&#x72B6;&#x6001;&#xFF0C;&#x4F9B;&#x540E;&#x7EED;&#x5C42;&#x8BFB;&#x53D6;&#x3002;</li>
</ul>
<p>&#x5047;&#x8BBE; 12 &#x5C42;&#x7F51;&#x7EDC;&#x6BCF; 4 &#x5C42;&#x5212;&#x5206;&#x4E3A;&#x4E00;&#x7EC4;&#xFF1A;</p>
<pre><code class="language-text">Block 1                  Block 2                  Block 3
&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;      &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;      &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502; L1 &#x2192; L2 &#x2192; L3   &#x2502;      &#x2502; L5 &#x2192; L6 &#x2192; L7   &#x2502;      &#x2502; L9 &#x2192; L10 &#x2192; L11 &#x2502;
&#x2502;          &#x2193;     &#x2502;      &#x2502;          &#x2193;     &#x2502;      &#x2502;          &#x2193;     &#x2502;
&#x2502;         L4     &#x2502;      &#x2502;         L8     &#x2502;      &#x2502;        L12     &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;      &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x25B2;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;      &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x25B2;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
         &#x2502;                       &#x2502;                       &#x2502;
         &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;        &#x2502;                       &#x2502;
                        &#x25BC;        &#x2502;                       &#x2502;
                 Block Attention &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<p>&#x6BCF;&#x4E2A;&#x5757;&#x91CC;&#x4FDD;&#x5B58;&#x4E86;&#x54EA;&#x4E9B;&#x7ED3;&#x679C;&#xFF1F;</p>
<p>&#x4EE4;&#xFF1A;</p>
<pre><code class="language-text">A = y1 + y2 + y3 + y4
B = y5 + y6 + y7 + y8
</code></pre>
<p><code>A</code>&#x3001;<code>B</code> &#x5206;&#x522B;&#x662F;&#x524D;&#x4E24;&#x4E2A;&#x5757;&#x7D2F;&#x8BA1;&#x5F97;&#x5230;&#x7684;&#x8868;&#x793A;&#x3002;&#x5230;&#x4E86;&#x7B2C; 9 &#x5C42;&#x51C6;&#x5907;&#x8F93;&#x5165;&#x65F6;&#xFF0C;&#x4E09;&#x79CD;&#x7ED3;&#x6784;&#x7684;&#x5386;&#x53F2;&#x6765;&#x6E90;&#x5982;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-text">&#x6807;&#x51C6; Residuals

x0 + A + B
     &#x2502;
     &#x25BC;
   &#x7B2C; 9 &#x5C42;
</code></pre>
<pre><code class="language-text">Full AttnRes

[x0, y1, y2, y3, y4, y5, y6, y7, y8]
                     &#x2502;
                     &#x25BC;
              Attention &#x52A0;&#x6743;&#x8BFB;&#x53D6;
                     &#x2502;
                     &#x25BC;
                   &#x7B2C; 9 &#x5C42;
</code></pre>
<pre><code class="language-text">Block AttnRes

[x0, A, B]
   &#x2502;
   &#x25BC;
Attention &#x52A0;&#x6743;&#x8BFB;&#x53D6;
   &#x2502;
   &#x25BC;
&#x7B2C; 9 &#x5C42;
</code></pre>
<p>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#x53EA;&#x4F20;&#x9012;&#x7D2F;&#x52A0;&#x72B6;&#x6001;&#xFF1B;Full AttnRes &#x4FDD;&#x7559;&#x6BCF;&#x5C42;&#x7684;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#xFF1B;Block AttnRes &#x5219;&#x628A;&#x6BCF;&#x7EC4;&#x7684;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x5408;&#x5E76;&#x6210;&#x4E00;&#x4EFD;&#xFF0C;&#x4FDD;&#x7559;&#x5757;&#x7EA7;&#x6765;&#x6E90;&#x3002;</p>
<p>Block AttnRes &#x5728;&#x6BCF;&#x6B21;&#x5B50;&#x5C42;&#x8BA1;&#x7B97;&#x524D;&#xFF0C;&#x90FD;&#x4F1A;&#x805A;&#x5408;&#x5386;&#x53F2;&#x5757;&#x548C;&#x5F53;&#x524D;&#x5757;&#x7684;&#x90E8;&#x5206;&#x72B6;&#x6001;&#x3002;&#x4F8B;&#x5982;&#x8BA1;&#x7B97;&#x7B2C; 10 &#x5C42;&#x65F6;&#xFF0C;&#x5F53;&#x524D;&#x5757;&#x5DF2;&#x7ECF;&#x6709;&#x4E86;&#x7B2C; 9 &#x5C42;&#x65B0;&#x589E;&#x7684; <code>y9</code>&#xFF0C;&#x5B83;&#x4E5F;&#x4F1A;&#x53C2;&#x4E0E;&#x8FD9;&#x6B21;&#x8BFB;&#x53D6;&#x3002;&#x5B50;&#x5C42;&#x8BA1;&#x7B97;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x518D;&#x5C06;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x52A0;&#x8FDB;&#x5F53;&#x524D;&#x5757;&#x3002;Attention &#x5E76;&#x4E0D;&#x53EA;&#x5728;&#x5757;&#x7ED3;&#x675F;&#x65F6;&#x6267;&#x884C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x7F51;&#x7EDC;&#x6709; <code>L</code> &#x5C42;&#x3001;&#x5206;&#x6210; <code>N</code> &#x4E2A;&#x5757;&#xFF0C;&#x6BCF;&#x4E2A;&#x4F4D;&#x7F6E;&#x9700;&#x8981;&#x4FDD;&#x7559;&#x7684;&#x8DE8;&#x5C42;&#x6765;&#x6E90;&#x5C31;&#x53EF;&#x4EE5;&#x4ECE;&#x7EA6; <code>L</code> &#x4EFD;&#x51CF;&#x5C11;&#x5230;&#x7EA6; <code>N</code> &#x4EFD;&#xFF0C;&#x5B58;&#x50A8;&#x89C4;&#x6A21;&#x4ECE; <code>O(L &#xD7; d)</code> &#x964D;&#x81F3; <code>O(N &#xD7; d)</code>&#xFF0C;&#x5176;&#x4E2D; <code>d</code> &#x662F;&#x9690;&#x85CF;&#x7EF4;&#x5EA6;&#x3002;</p>
<p>&#x5757;&#x8D8A;&#x5C0F;&#xFF0C;&#x540E;&#x7EED;&#x5C42;&#x9009;&#x62E9;&#x5386;&#x53F2;&#x4FE1;&#x606F;&#x7684;&#x7C92;&#x5EA6;&#x8D8A;&#x7EC6;&#xFF0C;&#x4F46;&#x5B58;&#x50A8;&#x548C;&#x8BFB;&#x53D6;&#x8D1F;&#x62C5;&#x8D8A;&#x5927;&#xFF1B;&#x5757;&#x8D8A;&#x5927;&#xFF0C;&#x7EC4;&#x5185;&#x5408;&#x5E76;&#x8D8A;&#x591A;&#xFF0C;&#x540E;&#x7EED;&#x53EF;&#x9009;&#x62E9;&#x7684;&#x6765;&#x6E90;&#x5C31;&#x8D8A;&#x7C97;&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x4E09;&#x79CD;&#x7ED3;&#x6784;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x770B;&#x6E05;"><a href="#&#x56DB;&#x3001;&#x4E09;&#x79CD;&#x7ED3;&#x6784;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x770B;&#x6E05;"></a>&#x56DB;&#x3001;&#x4E09;&#x79CD;&#x7ED3;&#x6784;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x770B;&#x6E05;</h2>
<pre><code class="language-text">&#x6807;&#x51C6; Transformer&#xFF1A;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;

x0 &#x2192; [+ y1] &#x2192; [+ y2] &#x2192; [+ y3] &#x2192; ... &#x2192; [+ y8] &#x2192; &#x7B2C; 9 &#x5C42;
                 &#x4F20;&#x9012;&#x4E00;&#x4EFD;&#x4E0D;&#x65AD;&#x7D2F;&#x52A0;&#x7684;&#x72B6;&#x6001;


Full AttnRes&#xFF1A;&#x6BCF;&#x5C42;&#x52A8;&#x6001;&#x8BFB;&#x53D6;&#x5168;&#x90E8;&#x5386;&#x53F2;&#x6765;&#x6E90;

[x0, y1, y2, y3, y4, y5, y6, y7, y8]
                     &#x2502;
                     &#x25BC;
              Depth Attention
                     &#x2502;
                     &#x25BC;
                   &#x7B2C; 9 &#x5C42;


Block AttnRes&#xFF1A;&#x5757;&#x5185;&#x7D2F;&#x52A0;&#xFF0C;&#x5757;&#x95F4;&#x52A8;&#x6001;&#x8BFB;&#x53D6;

[x0, A, B]
     &#x2502;
     &#x25BC;
Block Attention
     &#x2502;
     &#x25BC;
  &#x7B2C; 9 &#x5C42;

A = y1 + y2 + y3 + y4
B = y5 + y6 + y7 + y8
</code></pre>
<table>
<thead>
<tr>
<th>&#x7ED3;&#x6784;</th>
<th>&#x5386;&#x53F2;&#x4FE1;&#x606F;&#x5982;&#x4F55;&#x4FDD;&#x5B58;</th>
<th>&#x5F53;&#x524D;&#x5C42;&#x5982;&#x4F55;&#x8BFB;&#x53D6;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6807;&#x51C6; Residuals</td>
<td>&#x4E00;&#x4EFD;&#x7D2F;&#x52A0;&#x72B6;&#x6001;</td>
<td>&#x76F4;&#x63A5;&#x63A5;&#x6536;&#x7D2F;&#x52A0;&#x7ED3;&#x679C;</td>
</tr>
<tr>
<td>Full AttnRes</td>
<td>&#x6BCF;&#x5C42;&#x72EC;&#x7ACB;&#x7684;&#x65B0;&#x589E;&#x7ED3;&#x679C;</td>
<td>&#x5BF9;&#x5168;&#x90E8;&#x5386;&#x53F2;&#x6765;&#x6E90;&#x52A8;&#x6001;&#x52A0;&#x6743;</td>
</tr>
<tr>
<td>Block AttnRes</td>
<td>&#x6BCF;&#x4E2A;&#x5757;&#x7684;&#x7D2F;&#x8BA1;&#x7ED3;&#x679C;&#x53CA;&#x5F53;&#x524D;&#x5757;&#x72B6;&#x6001;</td>
<td>&#x5BF9;&#x5386;&#x53F2;&#x5757;&#x548C;&#x5F53;&#x524D;&#x90E8;&#x5206;&#x72B6;&#x6001;&#x52A8;&#x6001;&#x52A0;&#x6743;</td>
</tr>
</tbody>
</table>
<h2 id="&#x4E94;&#x3001;&#x56DE;&#x5230; Transformer"><a href="#&#x4E94;&#x3001;&#x56DE;&#x5230; Transformer"></a>&#x4E94;&#x3001;&#x56DE;&#x5230; Transformer</h2>
<p>Transformer &#x7684;&#x4E3B;&#x4F53;&#x7ED3;&#x6784;&#x4ECD;&#x5728;&#xFF0C;&#x8C03;&#x6574;&#x7684;&#x662F;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x5185;&#x90E8;&#x4F20;&#x9012;&#x4FE1;&#x606F;&#x7684;&#x65B9;&#x5F0F;&#xFF1A;</p>
<ul>
<li>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#xFF1A;&#x628A;&#x65B0;&#x589E;&#x7ED3;&#x679C;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;&#x5230;&#x72B6;&#x6001;&#x4E2D;&#x3002;</li>
<li>Full AttnRes&#xFF1A;&#x4FDD;&#x7559;&#x5404;&#x5C42;&#x7ED3;&#x679C;&#xFF0C;&#x8BA9;&#x540E;&#x7EED;&#x5C42;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x3002;</li>
<li>Block AttnRes&#xFF1A;&#x5728;&#x5757;&#x5185;&#x7D2F;&#x52A0;&#x3001;&#x5757;&#x95F4;&#x52A8;&#x6001;&#x9009;&#x62E9;&#xFF0C;&#x4EE5;&#x63A7;&#x5236;&#x6210;&#x672C;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E00;&#x6539;&#x52A8;&#x8BA9;&#x540E;&#x9762;&#x7684;&#x5C42;&#x80FD;&#x5B66;&#x7740;&#x9009;&#x62E9;&#x4E0D;&#x540C;&#x6DF1;&#x5EA6;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x5FC5;&#x603B;&#x6309;&#x56FA;&#x5B9A;&#x6BD4;&#x4F8B;&#x63A5;&#x6536;&#x3002;</p>
<p>AttnRes &#x7684;&#x6D1E;&#x5BDF;&#x662F;&#xFF1A;&#x65E2;&#x7136;&#x6A2A;&#x5411;&#x7684;&#x4FE1;&#x606F;&#x4EA4;&#x4E92;&#x53EF;&#x4EE5;&#x7528; Attention &#x52A8;&#x6001;&#x9009;&#x62E9;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x7EB5;&#x5411;&#x7684;&#x4FE1;&#x606F;&#x4F20;&#x9012;&#x8FD8;&#x8981;&#x4F9D;&#x8D56;&#x56FA;&#x5B9A;&#x7D2F;&#x52A0;&#xFF1F;</p>
`,E=[{level:1,title:"Attention Residuals：Kimi 为什么要重新设计残差连接？",children:[{level:2,title:"一、传统 Residuals：固定累加有什么局限？",children:[]},{level:2,title:"二、Full AttnRes：让后面的层重新读取历史结果",children:[{level:3,title:"1. 历史读取是怎么工作的？",children:[]},{level:3,title:"2. 把读取机制放回 forward",children:[]}]},{level:2,title:"三、Block AttnRes：不必把每一层都单独保存",children:[]},{level:2,title:"四、三种结构的区别，一张图看清",children:[]},{level:2,title:"五、回到 Transformer",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
