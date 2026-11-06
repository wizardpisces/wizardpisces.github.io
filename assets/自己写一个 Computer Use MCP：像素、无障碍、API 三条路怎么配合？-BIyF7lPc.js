const x={},F=`<!-- 写作锚点
读者收获：能自己写出一个带三条通道的 Computer Use MCP，并说清每条通道的信息单位、依赖、失败模式，知道什么场景该走哪条。
核心判断：Computer Use 不是“用截图模拟人”，而是给同一份世界状态的三层不同表示——像素给广度，无障碍给精度，应用 API 给语义。真实实现是三者的组合，工程判断在于选路。
如何推进：先搭最小 MCP 与假桌面，把三条通道都实现出来并跑通；用真机切换暴露两条权限边界（屏幕录制、辅助功能），其中包括“事件提交成功但被丢弃”；最后收在通道选择与三段式结构上。
-->
<h1 id="&#x81EA;&#x5DF1;&#x5199;&#x4E00;&#x4E2A; Computer Use MCP&#xFF1A;&#x50CF;&#x7D20;&#x3001;&#x65E0;&#x969C;&#x788D;&#x3001;API &#x4E09;&#x6761;&#x8DEF;&#x600E;&#x4E48;&#x914D;&#x5408;&#xFF1F;"><a href="#&#x81EA;&#x5DF1;&#x5199;&#x4E00;&#x4E2A; Computer Use MCP&#xFF1A;&#x50CF;&#x7D20;&#x3001;&#x65E0;&#x969C;&#x788D;&#x3001;API &#x4E09;&#x6761;&#x8DEF;&#x600E;&#x4E48;&#x914D;&#x5408;&#xFF1F;"></a>&#x81EA;&#x5DF1;&#x5199;&#x4E00;&#x4E2A; Computer Use MCP&#xFF1A;&#x50CF;&#x7D20;&#x3001;&#x65E0;&#x969C;&#x788D;&#x3001;API &#x4E09;&#x6761;&#x8DEF;&#x600E;&#x4E48;&#x914D;&#x5408;&#xFF1F;</h1>
<p>&#x5F88;&#x591A;&#x4EBA;&#x5BF9; Computer Use &#x7684;&#x5370;&#x8C61;&#x662F;&quot;&#x622A;&#x56FE; + &#x8BA9;&#x6A21;&#x578B;&#x70B9;&#x5750;&#x6807;&quot;&#x3002;</p>
<p>&#x8FD9;&#x53EA;&#x8BF4;&#x5BF9;&#x4E86;&#x4E00;&#x6761;&#x8DEF;&#x3002;&#x771F;&#x5B9E;&#x7684; Computer Use &#x662F;&#x4E00;&#x4E2A;&#x7EFC;&#x5408;&#x4F53;&#xFF0C;&#x81F3;&#x5C11;&#x6709;&#x4E09;&#x6761;&#x901A;&#x9053;&#xFF1A;</p>
<pre><code class="language-text">&#x50CF;&#x7D20;&#x901A;&#x9053;      &#x622A;&#x56FE; + &#x70B9;&#x51FB;&#x5750;&#x6807;
&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;    &#x7CFB;&#x7EDF;&#x66B4;&#x9732;&#x7684;&#x5143;&#x7D20;&#x6811; + &#x6309;&#x540D;&#x79F0;&#x89E6;&#x53D1;
API / &#x811A;&#x672C;    &#x5E94;&#x7528;&#x81EA;&#x5DF1;&#x66B4;&#x9732;&#x7684;&#x8BED;&#x4E49;&#x52A8;&#x4F5C;
</code></pre>
<p>&#x4E09;&#x8005;&#x4E0D;&#x662F;&#x4E09;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x4E16;&#x754C;&#xFF0C;&#x800C;&#x662F;&#x540C;&#x4E00;&#x4EFD;&#x72B6;&#x6001;&#x66B4;&#x9732;&#x7ED9;&#x6A21;&#x578B;&#x7684;&#x4E09;&#x5C42;&#x4E0D;&#x540C;&#x8868;&#x793A;&#xFF1A;&#x50CF;&#x7D20;&#x6700;&#x901A;&#x7528;&#xFF0C;&#x65E0;&#x969C;&#x788D;&#x6700;&#x7CBE;&#x786E;&#xFF0C;API &#x6700;&#x6709;&#x8BED;&#x4E49;&#x3002;</p>
<p>&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x76F4;&#x63A5;&#x4ECE;&#x96F6;&#x628A;&#x8FD9;&#x5957;&#x4E1C;&#x897F;&#x5199;&#x51FA;&#x6765;&#x3002;&#x8BFB;&#x5B8C;&#x4F60;&#x4F1A;&#x6709;&#x4E00;&#x4E2A;&#x80FD;&#x8DD1;&#x7684; Computer Use MCP&#xFF0C;&#x4E5F;&#x4F1A;&#x77E5;&#x9053;&#x4E09;&#x6761;&#x8DEF;&#x5404;&#x81EA;&#x5728;&#x54EA;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x4E0D;&#x8BE5;&#x7528;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x5148;&#x5B9A;&#x5951;&#x7EA6;&#xFF1A;MCP &#x53EA;&#x89C4;&#x5B9A;&#x600E;&#x4E48;&#x8BF4;&#x8BDD;"><a href="#&#x4E00;&#x3001;&#x5148;&#x5B9A;&#x5951;&#x7EA6;&#xFF1A;MCP &#x53EA;&#x89C4;&#x5B9A;&#x600E;&#x4E48;&#x8BF4;&#x8BDD;"></a>&#x4E00;&#x3001;&#x5148;&#x5B9A;&#x5951;&#x7EA6;&#xFF1A;MCP &#x53EA;&#x89C4;&#x5B9A;&#x600E;&#x4E48;&#x8BF4;&#x8BDD;</h2>
<p>MCP &#x89E3;&#x51B3;&#x7684;&#x662F;&#x4F20;&#x8F93;&#x4E0E;&#x63CF;&#x8FF0;&#xFF1A;&#x5DE5;&#x5177;&#x540D;&#x3001;&#x53C2;&#x6570; schema&#x3001;&#x8FD4;&#x56DE;&#x7ED3;&#x6784;&#x3002;&#x5B83;&#x4E0D;&#x5173;&#x5FC3;&quot;&#x70B9;&#x54EA;&#x91CC;&quot;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x5951;&#x7EA6;&#x5F97;&#x6211;&#x4EEC;&#x81EA;&#x5DF1;&#x5B9A;&#x3002;&#x628A;&#x4E09;&#x4E2A;&#x901A;&#x9053;&#x90FD;&#x6446;&#x51FA;&#x6765;&#xFF0C;&#x5DE5;&#x5177;&#x6E05;&#x5355;&#x662F;&#x8FD9;&#x6837;&#x7684;&#xFF1A;</p>
<pre><code class="language-text">screenshot                &#x50CF;&#x7D20;&#x901A;&#x9053;&#xFF1A;&#x628A;&#x5C4F;&#x5E55;&#x7F16;&#x7801;&#x6210;&#x56FE;&#x7247;
click(x, y)               &#x50CF;&#x7D20;&#x901A;&#x9053;&#xFF1A;&#x5750;&#x6807; &#x2192; &#x70B9;&#x51FB;&#x4E8B;&#x4EF6;

ax_tree()                 &#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#xFF1A;&#x8BFB;&#x51FA;&#x5143;&#x7D20;&#x6811;
press_element(name)       &#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#xFF1A;&#x540D;&#x79F0; &#x2192; &#x89E6;&#x53D1;&#x5143;&#x7D20;

api_increment(n)          API &#x901A;&#x9053;&#xFF1A;&#x8BED;&#x4E49;&#x52A8;&#x4F5C;&#xFF0C;&#x6CA1;&#x6709;&#x5750;&#x6807;&#x3001;&#x6CA1;&#x6709;&#x6309;&#x94AE;
compare_channels()        &#x81EA;&#x67E5;&#xFF1A;&#x5217;&#x51FA;&#x4E09;&#x6761;&#x901A;&#x9053;&#x5728;&#x672C;&#x573A;&#x666F;&#x4E0B;&#x7684;&#x53EF;&#x7528;&#x6027;
</code></pre>
<p>&#x5BBD;&#x5EA6;&#x4E5F;&#x91CD;&#x8981;&#x3002;&#x4E09;&#x6761;&#x901A;&#x9053;&#x540C;&#x65F6;&#x66B4;&#x9732;&#x7ED9;&#x6A21;&#x578B;&#xFF0C;&#x5B83;&#x624D;&#x6709;&#x5F97;&#x9009;&#x2014;&#x2014;&#x8FD9;&#x662F;&quot;&#x80FD;&#x7EC4;&#x5408;&quot;&#x7684;&#x524D;&#x63D0;&#x3002;</p>
<p>&#x8FD8;&#x6709;&#x4E00;&#x6761;&#x5BB9;&#x6613;&#x6F0F;&#x7684;&#xFF1A;<strong>&#x89C2;&#x5BDF;&#x5DE5;&#x5177;&#x5FC5;&#x987B;&#x628A;&#x5750;&#x6807;&#x7CFB;&#x4E00;&#x8D77;&#x8FD4;&#x56DE;</strong>&#x3002;<code>(167, 328)</code> &#x79BB;&#x5F00;&#x5750;&#x6807;&#x7CFB;&#x5C31;&#x4E0D;&#x662F;&#x52A8;&#x4F5C;&#xFF0C;&#x53EA;&#x662F;&#x4E24;&#x4E2A;&#x6570;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x5047;&#x684C;&#x9762;&#xFF1A;&#x8BA9;&#x4E09;&#x79CD;&#x7C92;&#x5EA6;&#x53EF;&#x4EE5;&#x88AB;&#x76F4;&#x63A5;&#x770B;&#x89C1;"><a href="#&#x4E8C;&#x3001;&#x5047;&#x684C;&#x9762;&#xFF1A;&#x8BA9;&#x4E09;&#x79CD;&#x7C92;&#x5EA6;&#x53EF;&#x4EE5;&#x88AB;&#x76F4;&#x63A5;&#x770B;&#x89C1;"></a>&#x4E8C;&#x3001;&#x5047;&#x684C;&#x9762;&#xFF1A;&#x8BA9;&#x4E09;&#x79CD;&#x7C92;&#x5EA6;&#x53EF;&#x4EE5;&#x88AB;&#x76F4;&#x63A5;&#x770B;&#x89C1;</h2>
<p>&#x771F;&#x673A;&#x622A;&#x56FE;&#x9700;&#x8981;&#x6743;&#x9650;&#xFF0C;&#x5199;&#x6587;&#x7AE0;&#x65F6;&#x6211;&#x8BD5;&#x4E86;&#x4E00;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-text">$ screencapture -x -t png /private/tmp/probe.png
could not create image from display
</code></pre>
<p>&#x6CA1;&#x6709;&#x5C4F;&#x5E55;&#x5F55;&#x5236;&#x6388;&#x6743;&#xFF0C;&#x8FDE;&quot;&#x770B;&#x4E00;&#x773C;&quot;&#x90FD;&#x4E0D;&#x884C;&#x3002;&#x8FD9;&#x4F1A;&#x5E72;&#x6270;&#x5B66;&#x4E60;&#xFF0C;&#x6240;&#x4EE5;&#x5148;&#x505A;&#x4E00;&#x4E2A;&#x786E;&#x5B9A;&#x6027;&#x7684;&#x5047;&#x684C;&#x9762;&#xFF0C;&#x4F46;&#x5FC5;&#x987B;&#x4FDD;&#x4F4F;&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x7684;&#x4E09;&#x4E2A;&#x7ED3;&#x6784;&#x7279;&#x5F81;&#xFF1A;</p>
<pre><code class="language-text">&#x72B6;&#x6001;&#x53EA;&#x5728;&#x670D;&#x52A1;&#x7AEF;   &#x6A21;&#x578B;&#x770B;&#x4E0D;&#x5230;&#xFF0C;&#x53EA;&#x80FD;&#x901A;&#x8FC7;&#x5DE5;&#x5177;&#x62FF;
&#x52A8;&#x4F5C;&#x6539;&#x72B6;&#x6001;       &#x6539;&#x5B8C;&#x5FC5;&#x987B;&#x91CD;&#x65B0;&#x89C2;&#x5BDF;&#x624D;&#x77E5;&#x9053;&#x7ED3;&#x679C;
&#x5750;&#x6807;&#x4E0E;&#x56FE;&#x540C;&#x6E90;     &#x7B97;&#x51FA;&#x6765;&#x7684;&#x5750;&#x6807;&#x8981;&#x80FD;&#x843D;&#x5230;&#x771F;&#x5B9E;&#x50CF;&#x7D20;
</code></pre>
<p>&#x753B;&#x4E00;&#x4E2A; 800x480 &#x7684;&#x8BA1;&#x6570;&#x5668;&#xFF0C;&#x76EE;&#x6807; 3&#x3001;&#x5F53;&#x524D; 0&#x3002;&#x5173;&#x952E;&#x8BBE;&#x8BA1;&#x662F;&#xFF1A;<strong>&#x540C;&#x4E00;&#x4E2A;&#x72B6;&#x6001;&#xFF0C;&#x7528;&#x4E09;&#x79CD;&#x65B9;&#x5F0F;&#x90FD;&#x80FD;&#x8BFB;&#x3001;&#x90FD;&#x80FD;&#x6539;&#x3002;</strong></p>
<pre><code class="language-js"><span class="hljs-comment">// &#x901A;&#x9053;&#x4E00;&#xFF1A;&#x50CF;&#x7D20;&#x3002;&#x5750;&#x6807;&#x8FDB;&#xFF0C;&#x72B6;&#x6001;&#x51FA;</span>
<span class="hljs-function"><span class="hljs-title">clickPixel</span>(<span class="hljs-params">x, y</span>)</span> { ... }

<span class="hljs-comment">// &#x901A;&#x9053;&#x4E8C;&#xFF1A;&#x65E0;&#x969C;&#x788D;&#x3002;&#x7CFB;&#x7EDF;&#x7ED9;&#x51FA;&#x89D2;&#x8272;&#x3001;&#x540D;&#x79F0;&#x3001;frame &#x548C;&#x53EF;&#x6267;&#x884C;&#x52A8;&#x4F5C;</span>
<span class="hljs-function"><span class="hljs-title">accessibilityTree</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> { <span class="hljs-attr">role</span>: <span class="hljs-string">&apos;window&apos;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Counter&apos;</span>, <span class="hljs-attr">children</span>: [
    { <span class="hljs-attr">role</span>: <span class="hljs-string">&apos;staticText&apos;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;current&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-built_in">String</span>(state.value) },
    { <span class="hljs-attr">role</span>: <span class="hljs-string">&apos;button&apos;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;+1&apos;</span>, <span class="hljs-attr">frame</span>: {...}, <span class="hljs-attr">actions</span>: [<span class="hljs-string">&apos;press&apos;</span>] },
  ]};
}

<span class="hljs-comment">// &#x901A;&#x9053;&#x4E09;&#xFF1A;API&#x3002;&#x6CA1;&#x6709;&#x5750;&#x6807;&#xFF0C;&#x6CA1;&#x6709;&#x6309;&#x94AE;&#xFF0C;&#x53EA;&#x6709;&#x9886;&#x57DF;&#x52A8;&#x4F5C;</span>
<span class="hljs-function"><span class="hljs-title">apiIncrement</span>(<span class="hljs-params">n</span>)</span> { state.value += n; ... }
</code></pre>
<p>&#x6CE8;&#x610F;&#x65E0;&#x969C;&#x788D;&#x6811;&#x91CC;&#x7684; <code>frame</code>&#x3002;&#x5B83;&#x548C;&#x50CF;&#x7D20;&#x901A;&#x9053;&#x7684;&#x5750;&#x6807;&#x6570;&#x503C;&#x53EF;&#x4EE5;&#x4E00;&#x6837;&#xFF0C;&#x6765;&#x6E90;&#x5374;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#xFF1A;<strong>&#x90A3;&#x91CC;&#x662F;&#x7CFB;&#x7EDF;&#x7ED9;&#x7684;&#x4E8B;&#x5B9E;&#xFF0C;&#x8FD9;&#x91CC;&#x662F;&#x6A21;&#x578B;&#x731C;&#x7684;&#x4F30;&#x8BA1;&#x3002;</strong> &#x8FD9;&#x4E2A;&#x533A;&#x522B;&#x5C31;&#x662F;&#x7B2C;&#x4E8C;&#x6761;&#x901A;&#x9053;&#x5B58;&#x5728;&#x7684;&#x5168;&#x90E8;&#x7406;&#x7531;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x670D;&#x52A1;&#x7AEF;&#xFF1A;&#x4E09;&#x4E2A;&#x89C2;&#x5BDF;&#x8005;&#xFF0C;&#x4E09;&#x79CD;&#x52A8;&#x4F5C;"><a href="#&#x4E09;&#x3001;&#x670D;&#x52A1;&#x7AEF;&#xFF1A;&#x4E09;&#x4E2A;&#x89C2;&#x5BDF;&#x8005;&#xFF0C;&#x4E09;&#x79CD;&#x52A8;&#x4F5C;"></a>&#x4E09;&#x3001;&#x670D;&#x52A1;&#x7AEF;&#xFF1A;&#x4E09;&#x4E2A;&#x89C2;&#x5BDF;&#x8005;&#xFF0C;&#x4E09;&#x79CD;&#x52A8;&#x4F5C;</h2>
<h3 id="&#x50CF;&#x7D20;&#x901A;&#x9053;"><a href="#&#x50CF;&#x7D20;&#x901A;&#x9053;"></a>&#x50CF;&#x7D20;&#x901A;&#x9053;</h3>
<p>&#x622A;&#x56FE;&#x5DE5;&#x5177;&#x7684;&#x5173;&#x952E;&#x5728;&#x8FD4;&#x56DE;&#x7ED3;&#x6784;&#x2014;&#x2014;&#x56FE;&#x7247;&#x5FC5;&#x987B;&#x4F5C;&#x4E3A; MCP &#x7684; <code>image</code> content &#x56DE;&#x53BB;&#xFF1A;</p>
<pre><code class="language-js">server.registerTool(<span class="hljs-string">&apos;screenshot&apos;</span>, {
  <span class="hljs-attr">description</span>: <span class="hljs-string">&apos;&#x622A;&#x53D6;&#x5F53;&#x524D;&#x5C4F;&#x5E55;&#x3002;&#x8FD4;&#x56DE; width/height&#xFF0C;&#x4E4B;&#x540E;&#x7684; click &#x5750;&#x6807;&#x5FC5;&#x987B;&#x843D;&#x5728;&#x8FD9;&#x4E2A;&#x8303;&#x56F4;&#x5185;&#x3002;&apos;</span>,
  <span class="hljs-attr">annotations</span>: { <span class="hljs-attr">readOnlyHint</span>: <span class="hljs-literal">true</span> },
}, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> buf = desk.render();
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">content</span>: [
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;text&apos;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">\`&#x622A;&#x56FE;&#xFF1A;<span class="hljs-subst">\${W}</span>x<span class="hljs-subst">\${H}</span>&#x3002;\`</span> },
      <span class="hljs-comment">// &#x8FD9;&#x4E00;&#x884C;&#x662F;&#x5206;&#x6C34;&#x5CAD;&#xFF1A;&#x5185;&#x5BB9;&#x4E00;&#x65E6;&#x4EE5; content &#x8FDB;&#x5165;&#x672C;&#x8F6E;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6A21;&#x578B;&#x624D;&#x7B97;&#x771F;&#x7684;&quot;&#x770B;&#x89C1;&quot;&#x3002;</span>
      { <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;image&apos;</span>, <span class="hljs-attr">data</span>: buf.toString(<span class="hljs-string">&apos;base64&apos;</span>), <span class="hljs-attr">mimeType</span>: <span class="hljs-string">&apos;image/png&apos;</span> },
    ],
    <span class="hljs-attr">structuredContent</span>: { <span class="hljs-attr">width</span>: W, <span class="hljs-attr">height</span>: H, ...desk.snapshot() },
  };
});
</code></pre>
<p>&#x52A8;&#x4F5C;&#x4FA7;&#xFF0C;&#x5750;&#x6807;&#x6821;&#x9A8C;&#x662F;&#x95F8;&#x95E8;&#xFF1A;</p>
<pre><code class="language-js"><span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">0</span> || y &lt; <span class="hljs-number">0</span> || x &gt;= W || y &gt;= H) {
  <span class="hljs-keyword">return</span> { <span class="hljs-attr">content</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;text&apos;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">\`&#x5750;&#x6807; (<span class="hljs-subst">\${x}</span>, <span class="hljs-subst">\${y}</span>) &#x8D85;&#x51FA;&#x753B;&#x9762;&#xFF0C;&#x52A8;&#x4F5C;&#x88AB;&#x62D2;&#x7EDD;&#x3002;\`</span> }], <span class="hljs-attr">isError</span>: <span class="hljs-literal">true</span> };
}
</code></pre>
<h3 id="&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;"><a href="#&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;"></a>&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;</h3>
<p>&#x65E0;&#x969C;&#x788D;&#x6811;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#x7ED3;&#x6784;&#xFF0C;&#x4E0D;&#x662F;&#x56FE;&#x7247;&#x3002;&#x6A21;&#x578B;&#x6309;&#x540D;&#x5B57;&#x627E;&#x5143;&#x7D20;&#xFF0C;&#x4E0D;&#x7528;&#x7B97;&#x5750;&#x6807;&#xFF1A;</p>
<pre><code class="language-js">server.registerTool(<span class="hljs-string">&apos;ax_tree&apos;</span>, {
  <span class="hljs-attr">description</span>: <span class="hljs-string">&apos;&#x8BFB;&#x53D6;&#x65E0;&#x969C;&#x788D;&#x6811;&#xFF1A;&#x5E26;&#x89D2;&#x8272;&#x3001;&#x540D;&#x79F0;&#x3001;&#x5F53;&#x524D;&#x503C;&#x548C;&#x53EF;&#x6267;&#x884C;&#x52A8;&#x4F5C;&#x3002;&#x6BD4;&#x622A;&#x56FE;&#x7CBE;&#x786E;&#xFF0C;&#x4F46;&#x81EA;&#x7ED8;&#x63A7;&#x4EF6;&#x53EF;&#x80FD;&#x662F;&#x7A7A;&#x7684;&#x3002;&apos;</span>,
  <span class="hljs-attr">annotations</span>: { <span class="hljs-attr">readOnlyHint</span>: <span class="hljs-literal">true</span> },
}, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> nodes = flatten(desk.accessibilityTree());
  <span class="hljs-keyword">return</span> { <span class="hljs-attr">content</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;text&apos;</span>, <span class="hljs-attr">text</span>: renderAsLines(nodes) }], <span class="hljs-attr">structuredContent</span>: { nodes } };
});
</code></pre>
<p>&#x89E6;&#x53D1;&#x4E5F;&#x4E0D;&#x9700;&#x8981;&#x5750;&#x6807;&#xFF1A;</p>
<pre><code class="language-js">server.registerTool(<span class="hljs-string">&apos;press_element&apos;</span>, {
  <span class="hljs-attr">inputSchema</span>: { <span class="hljs-attr">name</span>: z.string().describe(<span class="hljs-string">&apos;&#x65E0;&#x969C;&#x788D;&#x5143;&#x7D20;&#x540D;&#x79F0;&#xFF0C;&#x5982; +1&apos;</span>) },
}, <span class="hljs-keyword">async</span> ({ name }) =&gt; {
  <span class="hljs-keyword">const</span> res = desk.pressElement(name);
  <span class="hljs-comment">// &#x540D;&#x5B57;&#x4E0D;&#x5B58;&#x5728;&#x65F6;&#x660E;&#x786E;&#x5931;&#x8D25;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&quot;&#x70B9;&#x4E86;&#x4E2A;&#x7A7A;&#x7684;&quot;</span>
  <span class="hljs-keyword">return</span> { <span class="hljs-attr">isError</span>: !res.ok, <span class="hljs-attr">content</span>: [{ <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;text&apos;</span>, <span class="hljs-attr">text</span>: res.ok ? <span class="hljs-string">\`&#x5DF2;&#x89E6;&#x53D1; &quot;<span class="hljs-subst">\${name}</span>&quot;\`</span> : <span class="hljs-string">\`&#x5931;&#x8D25;&#xFF1A;<span class="hljs-subst">\${res.reason}</span>&#x3002;&#x6CA1;&#x6709;&#x53D1;&#x51FA;&#x4EFB;&#x4F55;&#x52A8;&#x4F5C;&#x3002;\`</span> }] };
});
</code></pre>
<h3 id="API &#x901A;&#x9053;"><a href="#API &#x901A;&#x9053;"></a>API &#x901A;&#x9053;</h3>
<p>&#x8FD9;&#x6761;&#x6700;&#x6709;&#x610F;&#x601D;&#xFF1A;&#x6A21;&#x578B;&#x5B8C;&#x5168;&#x4E0D;&#x63A5;&#x89E6;&#x754C;&#x9762;&#x3002;</p>
<pre><code class="language-js">server.registerTool(<span class="hljs-string">&apos;api_increment&apos;</span>, {
  <span class="hljs-attr">description</span>: <span class="hljs-string">&apos;&#x5E94;&#x7528;&#x66B4;&#x9732;&#x7684;&#x9886;&#x57DF;&#x52A8;&#x4F5C;&#xFF1A;&#x628A;&#x8BA1;&#x6570;&#x5668;&#x52A0; n&#x3002;&#x6CA1;&#x6709;&#x5750;&#x6807;&#x3001;&#x6CA1;&#x6709;&#x6309;&#x94AE;&#xFF0C;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x4E1A;&#x52A1;&#x64CD;&#x4F5C;&#x3002;&apos;</span>,
  <span class="hljs-attr">inputSchema</span>: { <span class="hljs-attr">n</span>: z.number().int().positive() },
}, <span class="hljs-keyword">async</span> ({ n }) =&gt; {
  <span class="hljs-keyword">const</span> res = desk.apiIncrement(n);
  ...
});
</code></pre>
<p><code>n</code> &#x5FC5;&#x987B;&#x662F;&#x6B63;&#x6574;&#x6570;&#x8FD9;&#x4EF6;&#x4E8B;&#xFF0C;&#x7531; schema &#x5728;&#x6A21;&#x578B;&#x4E4B;&#x5916;&#x5F3A;&#x5236;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x7A84;&#x53C2;&#x6570;&#x7684;&#x4EF7;&#x503C;&#xFF1A;<strong>&#x80FD;&#x88AB;&#x6821;&#x9A8C;&#x7684;&#x610F;&#x56FE;&#xFF0C;&#x624D;&#x662F;&#x53EF;&#x6267;&#x884C;&#x7684;&#x610F;&#x56FE;&#x3002;</strong></p>
<h2 id="&#x56DB;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x5404;&#x8D70;&#x4E00;&#x904D;"><a href="#&#x56DB;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x5404;&#x8D70;&#x4E00;&#x904D;"></a>&#x56DB;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x5404;&#x8D70;&#x4E00;&#x904D;</h2>
<p>&#x5BA2;&#x6237;&#x7AEF;&#x628A;&quot;&#x6A21;&#x578B;&#x8BE5;&#x505A;&#x7684;&#x5224;&#x65AD;&quot;&#x5199;&#x6210;&#x56FA;&#x5B9A;&#x7B56;&#x7565;&#xFF0C;&#x53EA;&#x4E3A;&#x4E86;&#x8BC1;&#x660E;&#x95ED;&#x73AF;&#x6210;&#x7ACB;&#xFF1A;</p>
<pre><code class="language-js"><span class="hljs-keyword">await</span> client.callTool({ <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;screenshot&apos;</span>, <span class="hljs-attr">arguments</span>: {} });
<span class="hljs-keyword">await</span> client.callTool({ <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;click&apos;</span>, <span class="hljs-attr">arguments</span>: { <span class="hljs-attr">x</span>: <span class="hljs-number">167</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">328</span> } });   <span class="hljs-comment">// &#x50CF;&#x7D20;</span>
<span class="hljs-keyword">await</span> client.callTool({ <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;press_element&apos;</span>, <span class="hljs-attr">arguments</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;+1&apos;</span> } }); <span class="hljs-comment">// &#x65E0;&#x969C;&#x788D;</span>
<span class="hljs-keyword">await</span> client.callTool({ <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;api_increment&apos;</span>, <span class="hljs-attr">arguments</span>: { <span class="hljs-attr">n</span>: <span class="hljs-number">1</span> } });     <span class="hljs-comment">// API</span>
</code></pre>
<p>&#x5B9E;&#x6D4B;&#x8F93;&#x51FA;&#xFF0C;&#x53EF;&#x4EE5;&#x770B;&#x5230;&#x540C;&#x4E00;&#x4E2A;&#x8BA1;&#x6570;&#x5668;&#x88AB;&#x4E09;&#x6761;&#x4E0D;&#x540C;&#x7684;&#x8DEF;&#x63A8;&#x5230;&#x4E86; 3&#xFF1A;</p>
<pre><code class="language-text">[1] &#x622A;&#x56FE; 1&#xFF1A;800x480
   &#x50CF;&#x7D20;&#x901A;&#x9053; click &#x2192; &#x70B9;&#x51FB;&#x843D;&#x5728; inc &#x4E0A;&#xFF0C;&#x5F53;&#x524D;&#x503C; 1/3&#x3002;
   &#x65E0;&#x969C;&#x788D;&#x6811; &#x2192; window &quot;Counter&quot; | staticText &quot;current&quot; &#x503C;=1 | button &quot;+1&quot; &#x52A8;&#x4F5C;=[press]
   &#x65E0;&#x969C;&#x788D;&#x901A;&#x9053; &#x2192; &#x5DF2;&#x901A;&#x8FC7;&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#x89E6;&#x53D1; &quot;+1&quot;&#xFF0C;&#x5F53;&#x524D;&#x503C; 2/3&#x3002;
   API &#x901A;&#x9053; &#x2192; +1 &#x5DF2;&#x751F;&#x6548;&#xFF0C;&#x5F53;&#x524D;&#x503C; 3/3&#x3002;
[4] &#x622A;&#x56FE; 4&#xFF1A;800x480
</code></pre>
<p>&#x56DB;&#x6761;&#x901A;&#x9053;&#x90FD;&#x53EF;&#x7528;&#x65F6;&#xFF0C;&#x8FD9;&#x5F20;&#x81EA;&#x67E5;&#x8868;&#x53EF;&#x4EE5;&#x4EA4;&#x7ED9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x5224;&#x65AD;&#xFF1A;</p>
<pre><code class="language-text">pixel  &#x53EF;&#x7528;=true  &#x5355;&#x4F4D;=&#x5750;&#x6807; (x, y)        &#x4F9D;&#x8D56;=&#x4ECE;&#x56FE;&#x4E2D;&#x4F30;&#x7B97;&#x4F4D;&#x7F6E;        &#x5931;&#x8D25;=&#x56FE;&#x770B;&#x4E0D;&#x6E05; / &#x70B9;&#x7A7A; / &#x7B97;&#x9519;&#x5750;&#x6807;
ax     &#x53EF;&#x7528;=true  &#x5355;&#x4F4D;=&#x5143;&#x7D20;&#x540D;&#x79F0; + &#x52A8;&#x4F5C;     &#x4F9D;&#x8D56;=&#x7CFB;&#x7EDF;&#x66B4;&#x9732;&#x65E0;&#x969C;&#x788D;&#x4FE1;&#x606F;     &#x5931;&#x8D25;=&#x81EA;&#x7ED8;&#x63A7;&#x4EF6;&#x67E5;&#x4E0D;&#x5230;&#x5143;&#x7D20;
api    &#x53EF;&#x7528;=true  &#x5355;&#x4F4D;=&#x4E1A;&#x52A1;&#x52A8;&#x4F5C; + &#x53C2;&#x6570;     &#x4F9D;&#x8D56;=&#x5E94;&#x7528;&#x4E3B;&#x52A8;&#x66B4;&#x9732;&#x63A5;&#x53E3;       &#x5931;&#x8D25;=&#x63A5;&#x53E3;&#x4E0D;&#x8986;&#x76D6;&#x8BE5;&#x64CD;&#x4F5C;
</code></pre>
<h2 id="&#x4E94;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x7684;&#x5931;&#x8D25;&#xFF0C;&#x90FD;&#x4E0D;&#x80FD;&#x9759;&#x9ED8;"><a href="#&#x4E94;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x7684;&#x5931;&#x8D25;&#xFF0C;&#x90FD;&#x4E0D;&#x80FD;&#x9759;&#x9ED8;"></a>&#x4E94;&#x3001;&#x4E09;&#x6761;&#x901A;&#x9053;&#x7684;&#x5931;&#x8D25;&#xFF0C;&#x90FD;&#x4E0D;&#x80FD;&#x9759;&#x9ED8;</h2>
<p>&#x6BCF;&#x6761;&#x901A;&#x9053;&#x7684;&#x5931;&#x8D25;&#x6A21;&#x5F0F;&#x90FD;&#x4E0D;&#x4E00;&#x6837;&#xFF0C;&#x4F46;&#x6709;&#x4E00;&#x6761;&#x5171;&#x540C;&#x8981;&#x6C42;&#xFF1A;<strong>&#x5931;&#x8D25;&#x5FC5;&#x987B;&#x8BF4;&#x6E05;&#x662F;&#x54EA;&#x79CD;&#x5931;&#x8D25;&#x3002;</strong></p>
<pre><code class="language-text">&#x65E0;&#x969C;&#x788D;&#x627E;&#x4E0D;&#x5230;&#x5143;&#x7D20; &#x2192; &#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#x5931;&#x8D25;&#xFF1A;&#x6CA1;&#x6709;&#x540D;&#x4E3A; &quot;&#x4E0D;&#x5B58;&#x5728;&quot; &#x7684;&#x53EF;&#x64CD;&#x4F5C;&#x5143;&#x7D20;&#x3002;&#x6CA1;&#x6709;&#x53D1;&#x51FA;&#x4EFB;&#x4F55;&#x52A8;&#x4F5C;&#x3002;
API &#x53C2;&#x6570;&#x975E;&#x6CD5;     &#x2192; MCP error -32602: Too small: expected number to be &gt;0 at n
&#x70B9;&#x7A7A;&#x767D;           &#x2192; &#x70B9;&#x51FB;&#x843D;&#x5728;&#x7A7A;&#x767D;&#x5904; (600, 430)&#xFF0C;&#x6CA1;&#x6709;&#x547D;&#x4E2D;&#x4EFB;&#x4F55;&#x63A7;&#x4EF6;&#xFF0C;&#x5F53;&#x524D;&#x503C; 3/3&#x3002;
&#x5750;&#x6807;&#x8D8A;&#x754C;         &#x2192; &#x5750;&#x6807; (9999, 10) &#x8D85;&#x51FA;&#x753B;&#x9762; 800x480&#xFF0C;&#x52A8;&#x4F5C;&#x88AB;&#x62D2;&#x7EDD;&#x3002;&#x5750;&#x6807;&#x6CA1;&#x6709;&#x53D1;&#x51FA;&#x3002;
</code></pre>
<p>&#x56DB;&#x6761;&#x91CC;&#x6709;&#x4E09;&#x6761; <code>isError=true</code>&#xFF0C;&#x4E00;&#x6761;&#x4E0D;&#x662F;&#x2014;&#x2014;&#x70B9;&#x7A7A;&#x767D;&#x65F6;&#x70B9;&#x51FB;&#x786E;&#x5B9E;&#x53D1;&#x51FA;&#x4E86;&#xFF0C;&#x53EA;&#x662F;&#x6CA1;&#x547D;&#x4E2D;&#x3002;</p>
<p>&#x628A;&#x8FD9;&#x4E2A;&#x533A;&#x5206;&#x8BB2;&#x900F;&#xFF0C;&#x5C31;&#x662F;&#x95ED;&#x73AF;&#x7684;&#x9A8C;&#x6536;&#x6807;&#x51C6;&#xFF1A;<strong>&#x6BCF;&#x4E00;&#x6B21;&#x52A8;&#x4F5C;&#x4E4B;&#x540E;&#xFF0C;&#x6A21;&#x578B;&#x90FD;&#x8981;&#x80FD;&#x5206;&#x6E05;&quot;&#x505A;&#x5230;&#x4E86;&quot;&quot;&#x6CA1;&#x505A;&#x5230;&quot;&quot;&#x6839;&#x672C;&#x6CA1;&#x53D1;&#x51FA;&#x53BB;&quot;&#x3002;</strong> &#x4E09;&#x79CD;&#x72B6;&#x6001;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x5B83;&#x5C31;&#x4F1A;&#x5F00;&#x59CB;&#x778E;&#x731C;&#x3002;</p>
<h2 id="&#x516D;&#x3001;&#x5207;&#x5230;&#x771F;&#x673A;&#xFF1A;&#x4E24;&#x6761;&#x6743;&#x9650;&#xFF0C;&#x4E24;&#x79CD;&#x6C89;&#x9ED8;"><a href="#&#x516D;&#x3001;&#x5207;&#x5230;&#x771F;&#x673A;&#xFF1A;&#x4E24;&#x6761;&#x6743;&#x9650;&#xFF0C;&#x4E24;&#x79CD;&#x6C89;&#x9ED8;"></a>&#x516D;&#x3001;&#x5207;&#x5230;&#x771F;&#x673A;&#xFF1A;&#x4E24;&#x6761;&#x6743;&#x9650;&#xFF0C;&#x4E24;&#x79CD;&#x6C89;&#x9ED8;</h2>
<p>&#x5047;&#x684C;&#x9762;&#x8DD1;&#x901A;&#x4E4B;&#x540E;&#xFF0C;&#x6362;&#x771F;&#x673A;&#x540E;&#x7AEF;&#x3002;&#x622A;&#x56FE;&#x7528;&#x7CFB;&#x7EDF; <code>screencapture</code>&#xFF0C;&#x65E0;&#x969C;&#x788D;&#x7528; <code>AXUIElement</code>&#xFF0C;&#x70B9;&#x51FB;&#x7528; CoreGraphics &#x4E8B;&#x4EF6;&#x3002;&#x7136;&#x540E;&#x7ACB;&#x523B;&#x649E;&#x5899;&#xFF0C;&#x800C;&#x4E14;&#x662F;&#x4E24;&#x79CD;&#x4E0D;&#x540C;&#x7684;&#x5899;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E00;&#x79CD;&#x5899;&#xFF1A;&#x622A;&#x56FE;&#x5931;&#x8D25;&#xFF0C;&#x4F46;&#x5931;&#x8D25;&#x5F97;&#x5F88;&#x8BDA;&#x5B9E;&#x3002;</strong></p>
<pre><code class="language-text">[1] &#x622A;&#x56FE;&#x5931;&#x8D25;&#xFF08;exit=1&#xFF09;&#x3002;&#x8FD9;&#x662F;&#x89C2;&#x5BDF;&#x901A;&#x9053;&#x65AD;&#x4E86;&#xFF0C;&#x4E0D;&#x662F;&#x5C4F;&#x5E55;&#x4E3A;&#x7A7A;&#x3002;
stderr: could not create image from display
&#x8FD9;&#x7C7B;&#x5931;&#x8D25;&#x901A;&#x5E38;&#x662F;&#x7CFB;&#x7EDF;&#x6743;&#x9650;&#x672A;&#x6388;&#x4E88;&#xFF1A;&#x7EC8;&#x7AEF;&#x6216;&#x5BBF;&#x4E3B;&#x8FDB;&#x7A0B;&#x9700;&#x8981;&#x5728;&quot;&#x5C4F;&#x5E55;&#x5F55;&#x5236;&quot;&#x91CC;&#x88AB;&#x52FE;&#x9009;&#x3002;
</code></pre>
<p><strong>&#x7B2C;&#x4E8C;&#x79CD;&#x5899;&#xFF1A;&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#x6574;&#x4F53;&#x88AB;&#x5173;&#x6389;&#x3002;</strong></p>
<pre><code class="language-text">AXIsProcessTrusted = False
&#x8BFB;&#x53D6;&#x8FD4;&#x56DE; -25204&#xFF08;ax_api_disabled &#x2014; &#x8FDB;&#x7A0B;&#x672A;&#x83B7;&#x5F97;&#x8F85;&#x52A9;&#x529F;&#x80FD;&#x6388;&#x6743;&#xFF0C;&#x6574;&#x68F5;&#x65E0;&#x969C;&#x788D;&#x6811;&#x90FD;&#x8BFB;&#x4E0D;&#x5230;&#xFF09;
&#x8FD9;&#x4E0D;&#x662F;&#x754C;&#x9762;&#x4E3A;&#x7A7A;&#xFF0C;&#x662F;&#x8FD9;&#x6761;&#x901A;&#x9053;&#x6574;&#x4F53;&#x88AB;&#x5173;&#x6389;&#x4E86;&#x3002;
</code></pre>
<p>&#x6CE8;&#x610F; <code>-25204</code> &#x548C;&quot;&#x754C;&#x9762;&#x6CA1;&#x6709;&#x5143;&#x7D20;&quot;&#x662F;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x4E24;&#x4EF6;&#x4E8B;&#x3002;&#x5982;&#x679C;&#x628A;&quot;&#x901A;&#x9053;&#x88AB;&#x5173;&quot;&#x548C;&quot;&#x8FD9;&#x91CC;&#x6CA1;&#x4E1C;&#x897F;&quot;&#x6DF7;&#x4E3A;&#x4E00;&#x8C08;&#xFF0C;&#x6A21;&#x578B;&#x4F1A;&#x5F97;&#x51FA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x7ED3;&#x8BBA;&#xFF1A;&#x6211;&#x770B;&#x5230;&#x4E86;&#x4E00;&#x4E2A;&#x7A7A;&#x754C;&#x9762;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E09;&#x79CD;&#x5899;&#x6700;&#x9634;&#x9669;&#xFF1A;&#x70B9;&#x51FB;&#x6210;&#x529F;&#xFF0C;&#x4F46;&#x4EC0;&#x4E48;&#x90FD;&#x6CA1;&#x53D1;&#x751F;&#x3002;</strong></p>
<p>&#x8FD9;&#x4E00;&#x6761;&#x6211;&#x6CA1;&#x6709;&#x9884;&#x6599;&#x5230;&#x3002;<code>CGEventPost</code> &#x63D0;&#x4EA4;&#x4E8B;&#x4EF6;&#x540E;&#x8FD4;&#x56DE;&#x6210;&#x529F;&#xFF0C;&#x53EF;&#x662F;&#x5149;&#x6807;&#x7EB9;&#x4E1D;&#x4E0D;&#x52A8;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;ok&quot;</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">&quot;posted&quot;</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">&quot;cursorAfter&quot;</span>: { <span class="hljs-attr">&quot;x&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">&quot;y&quot;</span>: <span class="hljs-number">0</span> },
  <span class="hljs-attr">&quot;landed&quot;</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">&quot;note&quot;</span>: <span class="hljs-string">&quot;&#x4E8B;&#x4EF6;&#x63D0;&#x4EA4;&#x6210;&#x529F;&#xFF0C;&#x4F46;&#x5149;&#x6807;&#x6CA1;&#x6709;&#x79FB;&#x52A8;&#x2014;&#x2014;&#x901A;&#x5E38;&#x662F;&#x8F85;&#x52A9;&#x529F;&#x80FD;&#x672A;&#x6388;&#x6743;&#xFF0C;&#x4E8B;&#x4EF6;&#x88AB;&#x7CFB;&#x7EDF;&#x4E22;&#x5F03;&#x3002;&quot;</span>
}
</code></pre>
<p>&#x6CA1;&#x6709;&#x5F02;&#x5E38;&#xFF0C;&#x6CA1;&#x6709;&#x9519;&#x8BEF;&#x7801;&#xFF0C;&#x53EA;&#x6709;&#x4E00;&#x4E2A; <code>posted: true</code>&#x3002;</p>
<p>&#x5982;&#x679C;&#x5DE5;&#x5177;&#x5728;&#x8FD9;&#x91CC;&#x8FD4;&#x56DE;&quot;&#x5DF2;&#x70B9;&#x51FB;&quot;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x4F1A;&#x57FA;&#x4E8E;&#x4E00;&#x4E2A;&#x5047;&#x4E8B;&#x5B9E;&#x7EE7;&#x7EED;&#x5F80;&#x4E0B;&#x8D70;&#x2014;&#x2014;&#x5B83;&#x4EE5;&#x4E3A;&#x70B9;&#x4E86;&#xFF0C;&#x5176;&#x5B9E;&#x4EC0;&#x4E48;&#x90FD;&#x6CA1;&#x70B9;&#x3002;&#x8FD9;&#x548C;&#x6211;&#x4EEC;&#x5E73;&#x65F6;&#x8BF4;&#x7684;&quot;&#x6A21;&#x578B;&#x5E7B;&#x89C9;&quot;&#x662F;&#x4E24;&#x56DE;&#x4E8B;&#xFF1A;<strong>&#x5E7B;&#x89C9;&#x662F;&#x6A21;&#x578B;&#x7F16;&#x7684;&#xFF0C;&#x8FD9;&#x4E00;&#x6761;&#x662F;&#x6211;&#x4EEC;&#x7ED9;&#x7684;&#x3002;</strong></p>
<p>&#x6240;&#x4EE5;&#x771F;&#x673A;&#x540E;&#x7AEF;&#x91CC;&#x52A0;&#x4E86;&#x552F;&#x4E00;&#x80FD;&#x505A;&#x7684;&#x4E00;&#x6B65;&#x81EA;&#x67E5;&#xFF1A;&#x63D0;&#x4EA4;&#x540E;&#x56DE;&#x8BFB;&#x5149;&#x6807;&#x4F4D;&#x7F6E;&#xFF0C;&#x6BD4;&#x5BF9;&#x76EE;&#x6807;&#x5750;&#x6807;&#xFF0C;&#x628A; <code>landed</code> &#x4E00;&#x8D77;&#x8FD4;&#x56DE;&#x3002;&#x4FEE;&#x597D;&#x4E4B;&#x540E;&#xFF0C;&#x5DE5;&#x5177;&#x5728;&#x6CA1;&#x6743;&#x9650;&#x65F6;&#x660E;&#x786E;&#x62A5;&#x9519;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6492;&#x8C0E;&#x3002;</p>
<p>&#x4E09;&#x6761;&#x5899;&#x5408;&#x8D77;&#x6765;&#x5C31;&#x662F; Computer Use &#x7684;&#x7B2C;&#x4E00;&#x539F;&#x7406;&#xFF1A;<strong>&#x5B83;&#x7684;&#x80FD;&#x529B;&#x4E0A;&#x9650;&#x7531;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x7ED9;&#x4E0D;&#x7ED9;&#x6743;&#x9650;&#x51B3;&#x5B9A;&#xFF0C;&#x4E0D;&#x7531;&#x6A21;&#x578B;&#x591A;&#x806A;&#x660E;&#x51B3;&#x5B9A;&#x3002;</strong> &#x800C;&#x4E24;&#x6761;&#x901A;&#x9053;&#x662F;&#x4E24;&#x5957;&#x72EC;&#x7ACB;&#x6743;&#x9650;&#x2014;&#x2014;&#x5C4F;&#x5E55;&#x5F55;&#x5236;&#x548C;&#x8F85;&#x52A9;&#x529F;&#x80FD;&#xFF0C;&#x7ECF;&#x5E38;&#x53EA;&#x7ED9;&#x4E86;&#x4E00;&#x534A;&#xFF0C;&#x4E8E;&#x662F;&quot;&#x80FD;&#x770B;&#x4E0D;&#x80FD;&#x52A8;&quot;&#x6216;&quot;&#x80FD;&#x8BFB;&#x4E0D;&#x80FD;&#x70B9;&quot;&#x3002;</p>
<h2 id="&#x4E03;&#x3001;&#x56DE;&#x5934;&#x770B;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E00;&#x5B9A;&#x662F;&#x8FD9;&#x4E09;&#x6761;"><a href="#&#x4E03;&#x3001;&#x56DE;&#x5934;&#x770B;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E00;&#x5B9A;&#x662F;&#x8FD9;&#x4E09;&#x6761;"></a>&#x4E03;&#x3001;&#x56DE;&#x5934;&#x770B;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E00;&#x5B9A;&#x662F;&#x8FD9;&#x4E09;&#x6761;</h2>
<p>&#x5199;&#x5230;&#x8FD9;&#x513F;&#x53EF;&#x4EE5;&#x6536;&#x53E3;&#x4E86;&#x3002;&#x4E09;&#x6761;&#x901A;&#x9053;&#x4E0D;&#x662F;&#x8BBE;&#x8BA1;&#x51FA;&#x6765;&#x7684;&#x5DE7;&#x5408;&#xFF0C;&#x662F;&#x4E09;&#x79CD;&#x4E0D;&#x540C;&#x4FE1;&#x606F;&#x6E90;&#x7684;&#x5FC5;&#x7136;&#x7ED3;&#x679C;&#x3002;</p>
<pre><code class="language-text">&#x50CF;&#x7D20;&#x901A;&#x9053;    &#x4FE1;&#x606F;&#x5355;&#x4F4D;&#x662F;&#x5750;&#x6807;        &#x6700;&#x901A;&#x7528;&#x7684;&#x517C;&#x5BB9;&#x5C42;&#xFF1A;&#x53EA;&#x8981;&#x6709;&#x5C4F;&#x5E55;&#x5C31;&#x80FD;&#x7528;
&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;  &#x4FE1;&#x606F;&#x5355;&#x4F4D;&#x662F;&#x5143;&#x7D20;&#x548C;&#x52A8;&#x4F5C;   &#x7CFB;&#x7EDF;&#x66FF;&#x4F60;&#x56DE;&#x7B54;&quot;&#x8FD9;&#x662F;&#x4EC0;&#x4E48;&#x3001;&#x80FD;&#x505A;&#x4EC0;&#x4E48;&quot;
API &#x901A;&#x9053;    &#x4FE1;&#x606F;&#x5355;&#x4F4D;&#x662F;&#x4E1A;&#x52A1;&#x52A8;&#x4F5C;     &#x5E94;&#x7528;&#x76F4;&#x63A5;&#x56DE;&#x7B54;&quot;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x4EC0;&#x4E48;&quot;
</code></pre>
<p>&#x8D8A;&#x5F80;&#x4E0B;&#xFF0C;&#x4FE1;&#x606F;&#x8D8A;&#x63A5;&#x8FD1;&#x8BED;&#x4E49;&#xFF0C;&#x4E5F;&#x8D8A;&#x7A33;&#xFF1A;&#x5750;&#x6807;&#x4F1A;&#x7B97;&#x9519;&#xFF0C;&#x5143;&#x7D20;&#x53EF;&#x80FD;&#x67E5;&#x4E0D;&#x5230;&#xFF0C;&#x4F46; <code>+1</code> &#x8FD9;&#x4E2A;&#x52A8;&#x4F5C;&#x4E0D;&#x4F1A;&#x7406;&#x89E3;&#x9519;&#x3002;</p>
<p>&#x4EE3;&#x4EF7;&#x540C;&#x6837;&#x6E05;&#x695A;&#xFF1A;<strong>&#x8D8A;&#x8BED;&#x4E49;&#x5316;&#xFF0C;&#x8986;&#x76D6;&#x9762;&#x8D8A;&#x7A84;&#x3002;</strong> API &#x901A;&#x9053;&#x53EA;&#x5728;&#x5E94;&#x7528;&#x613F;&#x610F;&#x66B4;&#x9732;&#x65F6;&#x5B58;&#x5728;&#xFF1B;&#x65E0;&#x969C;&#x788D;&#x901A;&#x9053;&#x53EA;&#x5728;&#x754C;&#x9762;&#x6709;&#x7ED3;&#x6784;&#x65F6;&#x5B58;&#x5728;&#xFF1B;&#x53EA;&#x6709;&#x50CF;&#x7D20;&#x901A;&#x9053;&#x4EC0;&#x4E48;&#x90FD;&#x80FD;&#x70B9;&#xFF0C;&#x4E5F;&#x4EC0;&#x4E48;&#x90FD;&#x53EF;&#x80FD;&#x70B9;&#x9519;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x771F;&#x5B9E;&#x5B9E;&#x73B0;&#x4ECE;&#x4E0D;&#x662F;&#x4E09;&#x9009;&#x4E00;&#x3002;&#x5DE5;&#x7A0B;&#x5224;&#x65AD;&#x5C31;&#x5728;&#x4E8E;&#x9009;&#x8DEF;&#xFF1A;</p>
<pre><code class="language-text">&#x6709; API        &#x4F18;&#x5148; API&#xFF0C;&#x6700;&#x7A33;&#x3001;&#x6700;&#x7701; token
&#x6709;&#x7ED3;&#x6784;&#x754C;&#x9762;     &#x7528;&#x65E0;&#x969C;&#x788D;&#xFF0C;&#x6309;&#x540D;&#x79F0;&#x64CD;&#x4F5C;&#xFF0C;&#x907F;&#x514D;&#x5750;&#x6807;&#x8BEF;&#x5DEE;
&#x90FD;&#x6CA1;&#x6709;         &#x9000;&#x5230;&#x50CF;&#x7D20;&#xFF0C;&#x63A5;&#x53D7;&#x5B83;&#x7684;&#x4E0D;&#x786E;&#x5B9A;&#xFF0C;&#x9760;&#x622A;&#x56FE;&#x56DE;&#x73AF;&#x7EA0;&#x6B63;
</code></pre>
<p>&#x5BF9;&#x7167;&#x4E09;&#x5BB6;&#x5B98;&#x65B9;&#x5B9E;&#x73B0;&#xFF0C;&#x4E3B;&#x5E72;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#xFF0C;&#x5DEE;&#x522B;&#x53EA;&#x5728;&#x5750;&#x6807;&#x8868;&#x793A;&#x3001;&#x5DE5;&#x5177;&#x96C6;&#x6570;&#x91CF;&#x548C;&#x8BB0;&#x5FC6;&#x653E;&#x5728;&#x54EA;&#xFF1A;</p>
<pre><code class="language-text">OpenAI CUA        &#x622A;&#x56FE;&#x89C2;&#x5BDF;&#xFF0C;&#x52A8;&#x4F5C;&#x8D70; computer_call&#xFF0C;&#x5750;&#x6807;&#x5148;&#x5F52;&#x4E00;&#x5316;&#x518D;&#x6620;&#x5C04;&#x56DE;&#x771F;&#x5B9E;&#x5206;&#x8FA8;&#x7387;
Anthropic         &#x4E00;&#x4E2A; client &#x5DE5;&#x5177;&#x96C6;&#xFF08;screenshot / left_click / type / zoom&#x2026;&#xFF09;&#xFF0C;&#x5BBF;&#x4E3B;&#x673A;&#x6267;&#x884C;&#x6BCF;&#x6B21;&#x8C03;&#x7528;
Gemini            &#x5E94;&#x7528;&#x5E26;&#x622A;&#x56FE;&#x8BF7;&#x6C42;&#xFF0C;&#x6A21;&#x578B;&#x8FD4;&#x56DE;&#x52A8;&#x4F5C;&#xFF0C;&#x5E94;&#x7528;&#x6267;&#x884C;&#x540E;&#x518D;&#x622A;&#x56FE;
</code></pre>
<p>&#x81F3;&#x4E8E;&quot;&#x5E94;&#x7528;&#x4E3B;&#x52A8;&#x66B4;&#x9732;&#x52A8;&#x4F5C;&quot;&#x8FD9;&#x6761;&#x8DEF;&#xFF0C;&#x4F60;&#x5176;&#x5B9E;&#x5DF2;&#x7ECF;&#x5F88;&#x719F;&#x4E86;&#x2014;&#x2014;MCP &#x5DE5;&#x5177;&#x672C;&#x8EAB;&#x5C31;&#x662F; API &#x901A;&#x9053;&#x7684;&#x6807;&#x51C6;&#x5316;&#x5F62;&#x6001;&#x3002;WebMCP &#x90A3;&#x4E00;&#x7C7B;&#x63A2;&#x7D22;&#xFF0C;&#x5219;&#x662F;&#x5728;&#x628A;&#x6D4F;&#x89C8;&#x5668;&#x9875;&#x9762;&#x4E5F;&#x53D8;&#x6210;&#x53EF;&#x4EE5;&#x6CE8;&#x518C;&#x52A8;&#x4F5C;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<h2 id="&#x6700;&#x540E;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x8BB0;&#x4F4F;"><a href="#&#x6700;&#x540E;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x8BB0;&#x4F4F;"></a>&#x6700;&#x540E;&#xFF0C;&#x4E00;&#x5F20;&#x56FE;&#x8BB0;&#x4F4F;</h2>
<pre><code class="language-text">&#x50CF;&#x7D20;     &#x622A;&#x56FE; + &#x5750;&#x6807;      &#x6700;&#x901A;&#x7528;&#xFF0C;&#x6700;&#x4E0D;&#x786E;&#x5B9A;&#xFF0C;&#x9760;&#x56DE;&#x73AF;&#x7EA0;&#x9519;
&#x65E0;&#x969C;&#x788D;   &#x5143;&#x7D20; + &#x52A8;&#x4F5C;      &#x6700;&#x7CBE;&#x786E;&#xFF0C;&#x4F9D;&#x8D56;&#x7CFB;&#x7EDF;&#x66B4;&#x9732;&#xFF0C;&#x81EA;&#x7ED8;&#x63A7;&#x4EF6;&#x4F1A;&#x5931;&#x6548;
API      &#x52A8;&#x4F5C; + &#x53C2;&#x6570;      &#x6700;&#x6709;&#x8BED;&#x4E49;&#xFF0C;&#x53EA;&#x5728;&#x5E94;&#x7528;&#x613F;&#x610F;&#x66B4;&#x9732;&#x65F6;&#x5B58;&#x5728;

&#x4E09;&#x8005;&#x5171;&#x540C;&#x70B9;&#xFF1A;
  &#x89C2;&#x5BDF;&#x8981;&#x5E26;&#x5750;&#x6807;&#x7CFB;
  &#x52A8;&#x4F5C;&#x8981;&#x7A84;&#x5230;&#x53EF;&#x6821;&#x9A8C;
  &#x5931;&#x8D25;&#x8981;&#x8BF4;&#x6E05;&#x662F;&#x54EA;&#x4E00;&#x79CD;&#x5931;&#x8D25;
</code></pre>
<p>&#x4E00;&#x4E2A; Computer Use MCP &#x7684;&#x4EE3;&#x7801;&#x91CF;&#x6BD4;&#x60F3;&#x8C61;&#x4E2D;&#x5C0F;&#x3002;&#x771F;&#x6B63;&#x82B1;&#x65F6;&#x95F4;&#x7684;&#x4ECE;&#x6765;&#x4E0D;&#x662F;&#x5199;&#x5B8C;&#x8FD9;&#x4E9B;&#x5DE5;&#x5177;&#xFF0C;&#x800C;&#x662F;&#x540E;&#x9762;&#x8FD9;&#x4E9B;&#x4E0D;&#x6027;&#x611F;&#x7684;&#x90E8;&#x5206;&#xFF1A;&#x4E09;&#x6761;&#x901A;&#x9053;&#x5404;&#x81EA;&#x5931;&#x8D25;&#x65F6;&#x7684;&#x62A5;&#x9519;&#x8BED;&#x4E49;&#x3001;&#x622A;&#x56FE;&#x7F29;&#x653E;&#x540E;&#x7684;&#x5750;&#x6807;&#x6620;&#x5C04;&#x3001;&#x957F;&#x4EFB;&#x52A1;&#x91CC;&#x7684;&#x72B6;&#x6001;&#x538B;&#x7F29;&#xFF0C;&#x4EE5;&#x53CA;&#x4E00;&#x5F00;&#x59CB;&#x5C31;&#x649E;&#x4E0A;&#x7684;&#x90A3;&#x4E24;&#x9053;&#x6743;&#x9650;&#x8FB9;&#x754C;&#x3002;</p>
<p>&#x53EF;&#x8FD0;&#x884C;&#x4EE3;&#x7801;&#x5728;&#x4ED3;&#x5E93; <code>sub-project/computer-use-mcp/</code>&#xFF1A;<code>src/server.mjs</code> &#x662F;&#x670D;&#x52A1;&#x7AEF;&#xFF08;&#x4E09;&#x6761;&#x901A;&#x9053;&#x90FD;&#x5728;&#x91CC;&#x9762;&#xFF09;&#xFF0C;<code>src/simulator.mjs</code> &#x662F;&#x5047;&#x684C;&#x9762;&#xFF0C;<code>src/smoke.mjs</code> &#x662F;&#x4E00;&#x6B21;&#x8DD1;&#x901A;&#x4E09;&#x6761;&#x901A;&#x9053;&#x7684;&#x81EA;&#x6D4B;&#xFF0C;<code>src/screen.mjs</code>&#x3001;<code>src/actions.mjs</code> &#x662F;&#x771F;&#x673A;&#x9A71;&#x52A8;&#x3002;<code>npm run smoke</code> &#x76F4;&#x63A5;&#x590D;&#x73B0;&#x4E0A;&#x9762;&#x90A3;&#x6BB5;&#x8F93;&#x51FA;&#xFF0C;<code>CU_TARGET=real</code> &#x590D;&#x73B0;&#x6743;&#x9650;&#x90A3;&#x4E09;&#x6BB5;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Model Context Protocol&#xFF0C;&#x5B98;&#x65B9;&#x6587;&#x6863;&#xFF08;&#x5DE5;&#x5177;&#x3001;content &#x7C7B;&#x578B;&#x4E0E;&#x4F20;&#x8F93;&#xFF09;&#xFF1A;https://modelcontextprotocol.io</li>
<li>Apple&#xFF0C;AXUIElement&#xFF08;&#x65E0;&#x969C;&#x788D;&#x5143;&#x7D20;&#x4E0E;&#x53EF;&#x6267;&#x884C;&#x52A8;&#x4F5C;&#xFF09;&#xFF1A;https://developer.apple.com/documentation/applicationservices/axuielement_h</li>
<li>Apple&#xFF0C;Quartz Event Services&#xFF08;CGEvent &#x4E0E;&#x4E8B;&#x4EF6;&#x53D1;&#x9001;&#xFF09;&#xFF1A;https://developer.apple.com/documentation/coregraphics/quartz-event-services</li>
<li>OpenAI&#xFF0C;Computer use &#x6307;&#x5357;&#xFF08;&#x5750;&#x6807;&#x6620;&#x5C04;&#x4E0E; <code>computer_call</code>&#xFF09;&#xFF1A;https://developers.openai.com/api/docs/guides/tools-computer-use</li>
<li>Anthropic&#xFF0C;Computer use tool&#xFF08;client &#x5DE5;&#x5177;&#x96C6;&#x4E0E;&#x6267;&#x884C;&#x5FAA;&#x73AF;&#xFF09;&#xFF1A;https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool</li>
<li>Google&#xFF0C;Computer use&#xFF08;Gemini API&#xFF09;&#xFF1A;https://ai.google.dev/gemini-api/docs/computer-use</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
<h2 id="&#x5F80;&#x671F;&#x63A8;&#x8350;"><a href="#&#x5F80;&#x671F;&#x63A8;&#x8350;"></a>&#x5F80;&#x671F;&#x63A8;&#x8350;</h2>
<ul>
<li><a href="../../%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B7%B2%E5%8F%91%E5%B8%83/AI%20%E6%93%8D%E4%BD%9C%E7%94%B5%E8%84%91%E6%97%B6%EF%BC%8C%E5%AE%83%E7%9C%8B%E5%88%B0%E7%9A%84%E7%9C%9F%E6%98%AF%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0%E7%9A%84%E7%95%8C%E9%9D%A2%E5%90%97%EF%BC%9F.md">AI &#x64CD;&#x4F5C;&#x7535;&#x8111;&#x65F6;&#xFF0C;&#x5B83;&#x770B;&#x5230;&#x7684;&#x771F;&#x662F;&#x6211;&#x4EEC;&#x770B;&#x5230;&#x7684;&#x754C;&#x9762;&#x5417;&#xFF1F;</a></li>
<li><a href="./AI%20%E5%8F%AA%E4%BC%9A%E8%BE%93%E5%87%BA%E6%96%87%E5%AD%97%EF%BC%8C%E6%80%8E%E4%B9%88%E5%B0%B1%E8%83%BD%E8%87%AA%E5%B7%B1%E6%93%8D%E4%BD%9C%E7%94%B5%E8%84%91%EF%BC%9F.md">AI &#x53EA;&#x4F1A;&#x8F93;&#x51FA;&#x6587;&#x5B57;&#xFF0C;&#x600E;&#x4E48;&#x5C31;&#x80FD;&#x81EA;&#x5DF1;&#x64CD;&#x4F5C;&#x7535;&#x8111;&#xFF1F;</a></li>
<li><a href="./WebMCP%EF%BC%9A%E7%94%A8%E6%88%B7%E9%80%89%E5%A5%BD%E7%9A%84%E8%AE%A2%E5%8D%95%EF%BC%8CAI%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E8%A6%81%E8%87%AA%E5%B7%B1%E6%89%BE%EF%BC%9F.md">WebMCP&#xFF1A;&#x7528;&#x6237;&#x9009;&#x597D;&#x7684;&#x8BA2;&#x5355;&#xFF0C;AI &#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x81EA;&#x5DF1;&#x627E;&#xFF1F;</a></li>
</ul>
`,s=[{level:1,title:"自己写一个 Computer Use MCP：像素、无障碍、API 三条路怎么配合？",children:[{level:2,title:"一、先定契约：MCP 只规定怎么说话",children:[]},{level:2,title:"二、假桌面：让三种粒度可以被直接看见",children:[]},{level:2,title:"三、服务端：三个观察者，三种动作",children:[{level:3,title:"像素通道",children:[]},{level:3,title:"无障碍通道",children:[]},{level:3,title:"API 通道",children:[]}]},{level:2,title:"四、三条通道各走一遍",children:[]},{level:2,title:"五、三条通道的失败，都不能静默",children:[]},{level:2,title:"六、切到真机：两条权限，两种沉默",children:[]},{level:2,title:"七、回头看：为什么一定是这三条",children:[]},{level:2,title:"最后，一张图记住",children:[]},{level:2,title:"参考资料",children:[]},{level:2,title:"往期推荐",children:[]}]}];export{x as attributes,F as html,s as nestedHeaders};
