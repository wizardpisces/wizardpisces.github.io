const x={},F=`<!-- 写作锚点
读者收获：用满减例子理解“根据结果继续调查”的循环，再想到自己的工作加速点和需要重新审视的软件保护。
核心判断：REA 接通已有逆向工具，让 Agent 接手分析者的推理与调查安排；所需证据仍须通过工具、实验和真实环境获取。
如何推进：八折猜错 → 换金额、对照混淆代码与按含义改写的代码 → 解释 Agent 如何接续调查 → 留下工作流程和软件保护两条启发。
-->
<h1 id="REA &#x80FD;&#x201C;&#x9006;&#x5411;&#x4E00;&#x5207;&#x201D;&#xFF1F;&#x5B83;&#x771F;&#x6B63;&#x52A0;&#x901F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#REA &#x80FD;&#x201C;&#x9006;&#x5411;&#x4E00;&#x5207;&#x201D;&#xFF1F;&#x5B83;&#x771F;&#x6B63;&#x52A0;&#x901F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>REA &#x80FD;&#x201C;&#x9006;&#x5411;&#x4E00;&#x5207;&#x201D;&#xFF1F;&#x5B83;&#x771F;&#x6B63;&#x52A0;&#x901F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h1>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A;&#x7ED3;&#x7B97;&#x7A0B;&#x5E8F;&#xFF0C;&#x8F93;&#x5165; 100 &#x5143;&#xFF0C;&#x8F93;&#x51FA; 80 &#x5143;&#x3002;</p>
<p>&#x4F60;&#x731C;&#x5B83;&#x5728;&#x6253;&#x516B;&#x6298;&#x3002;</p>
<p>&#x518D;&#x8F93;&#x5165; 150 &#x5143;&#xFF0C;&#x5B83;&#x5374;&#x8F93;&#x51FA; 130 &#x5143;&#x3002;&#x516B;&#x6298;&#x5E94;&#x8BE5;&#x662F; 120 &#x5143;&#xFF0C;&#x600E;&#x4E48;&#x591A;&#x6536;&#x4E86; 10 &#x5757;&#xFF1F;</p>
<p>&#x6362;&#x4E2A;&#x731C;&#x6D4B;&#xFF1A;&#x6BCF;&#x5355;&#x51CF; 20&#xFF1F;&#x518D;&#x8BD5;&#xFF0C;99 &#x5143;&#x4E00;&#x5206;&#x4E0D;&#x51CF;&#xFF0C;200 &#x5143;&#x4E5F;&#x53EA;&#x51CF; 20&#x3002;&#x770B;&#x8D77;&#x6765;&#x662F;&#x201C;&#x6EE1; 100 &#x51CF; 20&#xFF0C;&#x4E00;&#x5355;&#x53EA;&#x51CF;&#x4E00;&#x6B21;&#x201D;&#x3002;</p>
<p>&#x7136;&#x540E;&#x4F60;&#x53BB;&#x6DF7;&#x6DC6;&#x4EE3;&#x7801;&#x67E5;&#x7C7B;&#x4F3C;&#x7ED3;&#x7B97;&#x4EE3;&#x7801;&#xFF0C;&#x627E;&#x5230;&#x7684;&#x662F;&#x8FD9;&#x6837;&#x4E00;&#x884C;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">e</span>(<span class="hljs-params">t</span>)</span>{<span class="hljs-keyword">return</span> t&gt;=<span class="hljs-number">100</span>?t-<span class="hljs-number">20</span>:t}
</code></pre>
<p>&#x89E3;&#x7801;&#x6210;&#x4EBA;&#x8BFB;&#x61C2;&#x7684;&#x4EE3;&#x7801;&#xFF1A;</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">checkout</span>(<span class="hljs-params">amount</span>) </span>{
  <span class="hljs-keyword">if</span> (amount &gt;= <span class="hljs-number">100</span>) <span class="hljs-keyword">return</span> amount - <span class="hljs-number">20</span>;
  <span class="hljs-keyword">return</span> amount;
}
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x9006;&#x5411;&#x7684;&#x7B80;&#x5355;&#x5C55;&#x793A;</p>
<p>&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E00;&#x76F4;&#x5728;&#x91CD;&#x590D;&#xFF1A;<strong>&#x89C2;&#x5BDF;&#x7ED3;&#x679C;&#xFF0C;&#x63D0;&#x51FA;&#x731C;&#x6D4B;&#xFF0C;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#x9A8C;&#x8BC1;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;&#x3002;</strong></p>
<p>&#x800C; REA &#x53EA;&#x662F;&#x628A;&#x5DF2;&#x6709;&#x9006;&#x5411;&#x5DE5;&#x5177;&#x63A5;&#x7ED9; Agent&#xFF0C;&#x65B9;&#x4FBF;&#x5B83;&#x628A;&#x6574;&#x4E2A;&#x67E5;&#x51FD;&#x6570;&#x3001;&#x8FFD;&#x8C03;&#x7528;&#x3001;&#x7EE7;&#x7EED;&#x9A8C;&#x8BC1;&#x7684;&#x5FAA;&#x73AF;&#x4E32;&#x8D77;&#x6765;&#x3002;<strong>AI &#x81EA;&#x52A8;&#x5316;&#x7684;&#x662F;&#x9006;&#x5411;&#x5DE5;&#x7A0B;&#x4E2D;&#x5206;&#x6790;&#x8005;&#x7684;&#x8111;&#x529B;&#x52B3;&#x52A8;&#xFF1A;&#x6839;&#x636E;&#x7EBF;&#x7D22;&#x63D0;&#x51FA;&#x731C;&#x6D4B;&#xFF0C;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;&#x67E5;&#x4EC0;&#x4E48;&#x3001;&#x600E;&#x4E48;&#x9A8C;&#x8BC1;&#x3002;</strong></p>
<p>&#x7A0B;&#x5E8F;&#x91CC;&#x7684;&#x5B9E;&#x9645;&#x6570;&#x636E;&#x3001;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x884C;&#x4E3A;&#xFF0C;&#x4ECD;&#x8981;&#x901A;&#x8FC7;&#x5DE5;&#x5177;&#x3001;&#x5B9E;&#x9A8C;&#x548C;&#x771F;&#x5B9E;&#x73AF;&#x5883;&#x53D6;&#x5F97;&#x3002;&#x6A21;&#x578B;&#x731C;&#x5F97;&#x518D;&#x50CF;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x4EE3;&#x66FF;&#x8FD9;&#x4E9B;&#x8BC1;&#x636E;&#x3002;&#x201C;&#x4EFB;&#x610F;&#x8F6F;&#x4EF6;&#x90FD;&#x80FD;&#x8F7B;&#x6613;&#x590D;&#x5236;&#x201D;&#xFF0C;&#x8FD8;&#x8C08;&#x4E0D;&#x4E0A;&#x3002;</p>
<p>&#x5BF9;&#x6211;&#x4EEC;&#xFF0C;&#x6709;&#x4E24;&#x6761;&#x542F;&#x53D1;&#x3002;</p>
<p>**&#x5DE5;&#x4F5C;&#x91CC;&#xFF0C;&#x627E;&#x7C7B;&#x4F3C;&#x7684;&#x5FAA;&#x73AF;&#x6765;&#x52A0;&#x901F;&#x3002;**&#x5982;&#x679C;&#x5DE5;&#x5177;&#x5DF2;&#x7ECF;&#x80FD;&#x5E72;&#x6D3B;&#xFF0C;&#x4EBA;&#x53CD;&#x590D;&#x5FD9;&#x5728;&#x770B;&#x7ED3;&#x679C;&#x3001;&#x8F6C;&#x4EA4;&#x4FE1;&#x606F;&#x3001;&#x5B89;&#x6392;&#x4E0B;&#x4E00;&#x6B65;&#xFF0C;&#x5C31;&#x503C;&#x5F97;&#x8BD5;&#x7740;&#x8BA9; Agent &#x63A5;&#x624B;&#xFF0C;&#x9A71;&#x52A8;&#x4EFB;&#x52A1;&#x94FE;&#x8DEF;&#x81EA;&#x52A8;&#x8F6C;&#x8D77;&#x6765;&#x3002;</p>
<p>**&#x8F6F;&#x4EF6;&#x4FDD;&#x62A4;&#x4E0A;&#xFF0C;&#x91CD;&#x7B97;&#x5206;&#x6790;&#x6210;&#x672C;&#x3002;**&#x6DF7;&#x6DC6;&#x4ECD;&#x80FD;&#x589E;&#x52A0;&#x96BE;&#x5EA6;&#xFF0C;&#x4F46;&#x4F9D;&#x8D56;&#x201C;&#x4EE3;&#x7801;&#x96BE;&#x8BFB;&#x3001;&#x4EBA;&#x5DE5;&#x5206;&#x6790;&#x592A;&#x8D39;&#x52B2;&#x201D;&#x7684;&#x9632;&#x7EBF;&#x8FD8;&#x80FD;&#x62D6;&#x4F4F;&#x591A;&#x4E45;&#xFF0C;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x4F30;&#x8BA1;&#xFF08;&#x7279;&#x522B;&#x662F;&#x6838;&#x5FC3;&#x6E90;&#x7801;&#x90FD;&#x653E;&#x5728;&#x5BA2;&#x6237;&#x7AEF;&#x7684;&#x4EA7;&#x54C1;&#xFF09;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>morluto&#xFF0C;REA &#x9879;&#x76EE; README&#xFF0C;&#x5DE5;&#x5177;&#x63A5;&#x5165;&#x65B9;&#x5F0F;&#x3001;&#x652F;&#x6301;&#x76EE;&#x6807;&#x4E0E;&#x539F;&#x751F;&#x5206;&#x6790;&#x4F9D;&#x8D56;&#xFF0C;&#x67E5;&#x9605;&#x4E8E; 2026 &#x5E74; 10 &#x6708; 15 &#x65E5;&#xFF1A;https://github.com/morluto/rea</li>
</ol>
`,E=[{level:1,title:"REA 能“逆向一切”？它真正加速的是什么？",children:[{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
