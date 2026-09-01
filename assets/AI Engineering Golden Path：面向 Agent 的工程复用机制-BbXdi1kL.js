const x={title:"AI Engineering Golden Path：面向 Agent 的工程复用机制",description:"从组件复用扩展到工程问题与实现模式复用，让 Agent 优先沿用已经验证的资产、组织方式和验收约束。"},E=`<h1 id="AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;"><a href="#AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;"></a>AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;</h1>
<h2 id="&#x5F53;&#x524D;&#x95EE;&#x9898;"><a href="#&#x5F53;&#x524D;&#x95EE;&#x9898;"></a>&#x5F53;&#x524D;&#x95EE;&#x9898;</h2>
<p>Component Material &#x53EF;&#x4EE5;&#x5E2E;&#x52A9; Agent &#x627E;&#x5230;&#x5DF2;&#x6709; UI &#x7EC4;&#x4EF6;&#xFF0C;&#x4F46;&#x53EA;&#x80FD;&#x89E3;&#x51B3;&#x4E00;&#x90E8;&#x5206;&#x590D;&#x7528;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5F53;&#x9875;&#x9762;&#x5305;&#x542B;&#x8BF7;&#x6C42;&#x3001;&#x72B6;&#x6001;&#x3001;&#x6743;&#x9650;&#x3001;&#x57CB;&#x70B9;&#x3001;&#x8DEF;&#x7531;&#x548C;&#x590D;&#x6742;&#x4EA4;&#x4E92;&#x65F6;&#xFF0C;&#x771F;&#x6B63;&#x5F71;&#x54CD;&#x53EF;&#x7EF4;&#x62A4;&#x6027;&#x7684;&#x5DF2;&#x7ECF;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x4F7F;&#x7528;&#x54EA;&#x4E2A;&#x7EC4;&#x4EF6;&#x201D;&#xFF0C;&#x8FD8;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>&#x4EE3;&#x7801;&#x5E94;&#x8BE5;&#x5982;&#x4F55;&#x5206;&#x5C42;&#x548C;&#x7EC4;&#x7EC7;&#xFF1B;</li>
<li>&#x76F8;&#x540C;&#x4E1A;&#x52A1;&#x80FD;&#x529B;&#x5E94;&#x8BE5;&#x6CBF;&#x7528;&#x54EA;&#x79CD;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#xFF1B;</li>
<li>&#x6CA1;&#x6709;&#x73B0;&#x6210;&#x7EC4;&#x4EF6;&#x6216;&#x6A21;&#x5757;&#x65F6;&#x5E94;&#x8BE5;&#x5982;&#x4F55;&#x65B0;&#x589E;&#xFF1B;</li>
<li>&#x6700;&#x7EC8;&#x5FC5;&#x987B;&#x6EE1;&#x8DB3;&#x54EA;&#x4E9B;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#x548C;&#x9A8C;&#x8BC1;&#x6761;&#x4EF6;&#x3002;</li>
</ul>
<p>&#x540C;&#x6837;&#x7684;&#x95EE;&#x9898;&#x4E5F;&#x5B58;&#x5728;&#x4E8E;&#x540E;&#x7AEF;&#x548C;&#x6D4B;&#x8BD5;&#x3002;&#x540E;&#x7AEF;&#x867D;&#x7136;&#x6CA1;&#x6709; UI Component&#xFF0C;&#x5374;&#x4F1A;&#x91CD;&#x590D;&#x5B9E;&#x73B0; API&#x3001;Service&#x3001;Repository&#x3001;&#x4EFB;&#x52A1;&#x3001;&#x6D88;&#x606F;&#x6D88;&#x8D39;&#x548C;&#x9519;&#x8BEF;&#x5904;&#x7406;&#xFF1B;&#x6D4B;&#x8BD5;&#x4E5F;&#x4F1A;&#x91CD;&#x590D;&#x5EFA;&#x8BBE; Fixture&#x3001;Mock&#x3001;&#x73AF;&#x5883;&#x51C6;&#x5907;&#x548C;&#x65AD;&#x8A00;&#x65B9;&#x5F0F;&#x3002;</p>
<p>&#x5982;&#x679C; Agent &#x6BCF;&#x6B21;&#x90FD;&#x4ECE;&#x96F6;&#x51B3;&#x5B9A;&#x8FD9;&#x4E9B;&#x5185;&#x5BB9;&#xFF0C;&#x5373;&#x4F7F;&#x5355;&#x6B21;&#x4EE3;&#x7801;&#x53EF;&#x4EE5;&#x8FD0;&#x884C;&#xFF0C;&#x957F;&#x671F;&#x4E5F;&#x5BB9;&#x6613;&#x4EA7;&#x751F;&#x5927;&#x91CF;&#x98CE;&#x683C;&#x4E0D;&#x540C;&#x3001;&#x8FB9;&#x754C;&#x4E0D;&#x4E00;&#x81F4;&#x3001;&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;&#x7684;&#x5B9E;&#x73B0;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x5224;&#x65AD;"><a href="#&#x6838;&#x5FC3;&#x5224;&#x65AD;"></a>&#x6838;&#x5FC3;&#x5224;&#x65AD;</h2>
<blockquote>
<p>&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x7684;&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x67D0;&#x4E2A;&#x7AEF;&#xFF0C;&#x800C;&#x662F;&#x53CD;&#x590D;&#x51FA;&#x73B0;&#x7684;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x53CA;&#x5176;&#x5DF2;&#x9A8C;&#x8BC1;&#x89E3;&#x6CD5;&#x3002;</p>
</blockquote>
<p>Web&#x3001;RN&#x3001;BE &#x548C; Test &#x53EA;&#x662F;&#x4E0D;&#x540C;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x3002;&#x5F88;&#x591A;&#x5DE5;&#x7A0B;&#x80FD;&#x529B;&#x53EF;&#x4EE5;&#x76F8;&#x4E92;&#x8FC1;&#x79FB;&#xFF1A;</p>
<pre><code class="language-text">&#x72B6;&#x6001;&#x7BA1;&#x7406;&#x3001;&#x9519;&#x8BEF;&#x5904;&#x7406;&#x3001;&#x6570;&#x636E;&#x8F6C;&#x6362;&#x3001;&#x6743;&#x9650;&#x6821;&#x9A8C;
&#x65E5;&#x5FD7;&#x3001;&#x76D1;&#x63A7;&#x3001;&#x7F13;&#x5B58;&#x3001;&#x91CD;&#x8BD5;&#x3001;&#x6D4B;&#x8BD5;&#x7EC4;&#x7EC7;
&#x6A21;&#x5757;&#x8FB9;&#x754C;&#x3001;&#x4F9D;&#x8D56;&#x65B9;&#x5411;&#x3001;&#x53D1;&#x5E03;&#x4E0E;&#x56DE;&#x6EDA;
</code></pre>
<p>&#x5B83;&#x4EEC;&#x7684;&#x5177;&#x4F53;&#x4EE3;&#x7801;&#x4E0D;&#x540C;&#xFF0C;&#x4F46;&#x90FD;&#x53EF;&#x4EE5;&#x590D;&#x7528;&#x540C;&#x4E00;&#x7C7B;&#x77E5;&#x8BC6;&#xFF1A;</p>
<pre><code class="language-text">&#x4EC0;&#x4E48;&#x573A;&#x666F;&#x9002;&#x7528;
&#x5DF2;&#x6709;&#x5B9E;&#x73B0;&#x5728;&#x54EA;&#x91CC;
&#x54EA;&#x4E9B;&#x7EA6;&#x675F;&#x5FC5;&#x987B;&#x9075;&#x5B88;
&#x5141;&#x8BB8;&#x54EA;&#x4E9B;&#x53D8;&#x5316;
&#x5982;&#x4F55;&#x8BC1;&#x660E;&#x5B9E;&#x73B0;&#x6B63;&#x786E;
</code></pre>
<p>&#x56E0;&#x6B64;&#xFF0C;Component Material &#x4E0D;&#x5E94;&#x6210;&#x4E3A;&#x4E00;&#x5957;&#x5B64;&#x7ACB;&#x80FD;&#x529B;&#xFF0C;&#x800C;&#x5E94;&#x88AB;&#x7406;&#x89E3;&#x4E3A;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x4F53;&#x7CFB;&#x4E2D;&#x7684;&#x4E00;&#x79CD; Asset&#x3002;</p>
<h2 id="&#x4ECE; Material &#x5230; Golden Path"><a href="#&#x4ECE; Material &#x5230; Golden Path"></a>&#x4ECE; Material &#x5230; Golden Path</h2>
<p>&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x5148;&#x6536;&#x655B;&#x6210;&#x4E24;&#x4E2A;&#x6838;&#x5FC3;&#x6982;&#x5FF5;&#xFF1A;</p>
<h3 id="Asset&#xFF1A;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x590D;&#x7528;"><a href="#Asset&#xFF1A;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x590D;&#x7528;"></a>Asset&#xFF1A;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x590D;&#x7528;</h3>
<p>Asset &#x662F;&#x53EF;&#x4EE5;&#x88AB; Agent &#x76F4;&#x63A5;&#x5F15;&#x7528;&#x7684;&#x73B0;&#x6210;&#x5DE5;&#x7A0B;&#x8D44;&#x4EA7;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>Web / RN Component&#xFF1B;</li>
<li>Hook&#x3001;Library&#x3001;SDK&#xFF1B;</li>
<li>&#x516C;&#x5171; Service&#x3001;&#x6570;&#x636E;&#x8F6C;&#x6362;&#x5668;&#xFF1B;</li>
<li>Test Fixture&#x3001;Mock &#x548C;&#x6D4B;&#x8BD5;&#x5DE5;&#x5177;&#x3002;</li>
</ul>
<p>Component Material &#x5C5E;&#x4E8E; Asset&#xFF0C;&#x5B83;&#x989D;&#x5916;&#x63D0;&#x4F9B; Catalog&#x3001;Fixture &#x548C;&#x53EF;&#x89C6;&#x5316;&#x5448;&#x73B0;&#xFF0C;&#x89E3;&#x51B3; UI &#x8D44;&#x4EA7;&#x7684;&#x67E5;&#x627E;&#x4E0E;&#x9A8C;&#x8BC1;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="Golden Path&#xFF1A;&#x6307;&#x5BFC;&#x5982;&#x4F55;&#x5B9E;&#x73B0;"><a href="#Golden Path&#xFF1A;&#x6307;&#x5BFC;&#x5982;&#x4F55;&#x5B9E;&#x73B0;"></a>Golden Path&#xFF1A;&#x6307;&#x5BFC;&#x5982;&#x4F55;&#x5B9E;&#x73B0;</h3>
<p>&#x5F53;&#x4E0D;&#x5B58;&#x5728;&#x53EF;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x7684; Asset &#x65F6;&#xFF0C;Agent &#x5E94;&#x4F18;&#x5148;&#x53C2;&#x8003;&#x540C;&#x7C7B;&#x95EE;&#x9898;&#x4E2D;&#x5DF2;&#x7ECF;&#x9A8C;&#x8BC1;&#x8FC7;&#x7684;&#x5B9E;&#x73B0;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x81EA;&#x7531;&#x751F;&#x6210;&#x4E00;&#x79CD;&#x65B0;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x4E00;&#x4E2A; Golden Path &#x5305;&#x542B;&#xFF1A;</p>
<pre><code class="language-text">Reference&#xFF1A;&#x53EF;&#x4EE5;&#x53C2;&#x8003;&#x7684;&#x771F;&#x5B9E;&#x6E90;&#x7801;
Recipe&#xFF1A;&#x63A8;&#x8350;&#x7684;&#x5B9E;&#x73B0;&#x6B65;&#x9AA4;
Contract&#xFF1A;&#x5FC5;&#x987B;&#x6EE1;&#x8DB3;&#x7684;&#x7EA6;&#x675F;&#x548C;&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;
</code></pre>
<p>Golden Path &#x4E0D;&#x662F;&#x590D;&#x5236;&#x6A21;&#x677F;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x8981;&#x6C42;&#x6240;&#x6709;&#x4EE3;&#x7801;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#x3002;&#x5B83;&#x89C4;&#x5B9A;&#x7A33;&#x5B9A;&#x8FB9;&#x754C;&#xFF0C;&#x5141;&#x8BB8;&#x4EFB;&#x52A1;&#x6839;&#x636E;&#x771F;&#x5B9E;&#x5DEE;&#x5F02;&#x8FDB;&#x884C;&#x8C03;&#x6574;&#xFF1B;&#x5982;&#x679C; Agent &#x660E;&#x786E;&#x504F;&#x79BB;&#xFF0C;&#x9700;&#x8981;&#x8BF4;&#x660E;&#x539F;&#x56E0;&#x3002;</p>
<h2 id="Agent &#x7684;&#x590D;&#x7528;&#x8DEF;&#x5F84;"><a href="#Agent &#x7684;&#x590D;&#x7528;&#x8DEF;&#x5F84;"></a>Agent &#x7684;&#x590D;&#x7528;&#x8DEF;&#x5F84;</h2>
<pre><code class="language-mermaid">flowchart LR
  Task[&quot;&#x5DE5;&#x7A0B;&#x4EFB;&#x52A1;&quot;] --&gt; Identify[&quot;&#x8BC6;&#x522B;&#x95EE;&#x9898;&#x7C7B;&#x578B;&quot;]
  Identify --&gt; Asset{&quot;&#x5B58;&#x5728;&#x53EF;&#x590D;&#x7528; Asset&#xFF1F;&quot;}
  Asset --&gt;|&#x662F;| Reuse[&quot;&#x76F4;&#x63A5;&#x590D;&#x7528;&quot;]
  Asset --&gt;|&#x5426;| Pattern[&quot;&#x67E5;&#x627E; Golden Path&quot;]
  Pattern --&gt; Implement[&quot;&#x53C2;&#x8003;&#x5DF2;&#x6709;&#x5B9E;&#x73B0;&#x5B8C;&#x6210;&#x4EE3;&#x7801;&quot;]
  Reuse --&gt; Verify[&quot;Contract &#x9A8C;&#x8BC1;&quot;]
  Implement --&gt; Verify
  Verify --&gt; Result[&quot;&#x53EF;&#x8FD0;&#x884C;&#x7ED3;&#x679C;&quot;]
  Result --&gt; Case[&quot;&#x6210;&#x529F; / &#x5931;&#x8D25; Case&quot;]
  Case --&gt; Improve[&quot;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x5E76;&#x6539;&#x8FDB; Asset &#x6216; Golden Path&quot;]
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x673A;&#x5236;&#x5BF9;&#x7AEF;&#x6CA1;&#x6709;&#x4F9D;&#x8D56;&#xFF1A;</p>
<pre><code class="language-text">RN &#x9875;&#x9762; &#x2192; &#x627E; Component / Hook&#xFF1B;&#x5426;&#x5219;&#x53C2;&#x8003;&#x9875;&#x9762;&#x7EC4;&#x7EC7; Pattern
Web &#x9875;&#x9762; &#x2192; &#x627E;&#x7EC4;&#x4EF6;&#x4E0E;&#x6A21;&#x5757;&#xFF1B;&#x5426;&#x5219;&#x53C2;&#x8003;&#x540C;&#x7C7B;&#x4E1A;&#x52A1;&#x9875;&#x9762; Pattern
BE &#x63A5;&#x53E3; &#x2192; &#x627E;&#x516C;&#x5171; Service / SDK&#xFF1B;&#x5426;&#x5219;&#x53C2;&#x8003; API &#x5206;&#x5C42; Pattern
Test &#x2192; &#x627E; Fixture / Mock&#xFF1B;&#x5426;&#x5219;&#x53C2;&#x8003;&#x6D4B;&#x8BD5;&#x7EC4;&#x7EC7; Pattern
</code></pre>
<h2 id="&#x6700;&#x5C0F; Golden Path"><a href="#&#x6700;&#x5C0F; Golden Path"></a>&#x6700;&#x5C0F; Golden Path</h2>
<p>&#x7B2C;&#x4E00;&#x7248;&#x4E0D;&#x9700;&#x8981;&#x5EFA;&#x8BBE;&#x590D;&#x6742;&#x77E5;&#x8BC6;&#x5E73;&#x53F0;&#x3002;&#x4E00;&#x4EFD;&#x53EF;&#x68C0;&#x7D22;&#x7684; Markdown &#x6216;&#x7ED3;&#x6784;&#x5316;&#x8BB0;&#x5F55;&#x5373;&#x53EF;&#xFF1A;</p>
<pre><code class="language-yaml"><span class="hljs-attr">name:</span> <span class="hljs-string">Affiliate</span> <span class="hljs-string">API</span> <span class="hljs-string">Module</span>
<span class="hljs-attr">appliesWhen:</span> <span class="hljs-string">&#x65B0;&#x589E;</span> <span class="hljs-string">Affiliate</span> <span class="hljs-string">&#x9886;&#x57DF;</span> <span class="hljs-string">API</span>

<span class="hljs-attr">references:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">src/controller/order.py</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">src/service/order.py</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">src/repository/order.py</span>

<span class="hljs-attr">mustFollow:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">Controller</span> <span class="hljs-string">&#x4E0D;&#x5305;&#x542B;&#x4E1A;&#x52A1;&#x8BA1;&#x7B97;</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">Service</span> <span class="hljs-string">&#x7BA1;&#x7406;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#x548C;&#x4E8B;&#x52A1;</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">Repository</span> <span class="hljs-string">&#x53EA;&#x8D1F;&#x8D23;&#x6570;&#x636E;&#x8BBF;&#x95EE;</span>

<span class="hljs-attr">verify:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">make</span> <span class="hljs-string">lint</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">make</span> <span class="hljs-string">test</span>
</code></pre>
<p>&#x6700;&#x5C0F;&#x5B57;&#x6BB5;&#x53EA;&#x6709;&#x56DB;&#x7C7B;&#xFF1A;</p>
<pre><code class="language-text">&#x9002;&#x7528;&#x573A;&#x666F;
&#x53C2;&#x8003;&#x6E90;&#x7801;
&#x5FC5;&#x987B;&#x7EA6;&#x675F;
&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;
</code></pre>
<p>Recipe &#x53EF;&#x4EE5;&#x5148;&#x7531;&#x53C2;&#x8003;&#x6E90;&#x7801;&#x548C;&#x7EA6;&#x675F;&#x5171;&#x540C;&#x8868;&#x8FBE;&#x3002;&#x53EA;&#x6709; Agent &#x7ECF;&#x5E38;&#x65E0;&#x6CD5;&#x6B63;&#x786E;&#x6267;&#x884C;&#x65F6;&#xFF0C;&#x518D;&#x8865;&#x5145;&#x660E;&#x786E;&#x6B65;&#x9AA4;&#x3002;</p>
<h2 id="Generator Skill &#x7684;&#x4F4D;&#x7F6E;"><a href="#Generator Skill &#x7684;&#x4F4D;&#x7F6E;"></a>Generator Skill &#x7684;&#x4F4D;&#x7F6E;</h2>
<p>&#x5F53;&#x524D;&#x4E0D;&#x80FD;&#x7B49;&#x5F85;&#x81EA;&#x52A8; Generator &#x5EFA;&#x6210;&#x540E;&#x518D;&#x6CBB;&#x7406; Agent &#x4EE3;&#x7801;&#x3002;Golden Path &#x5E94;&#x5148;&#x7531;&#x4EBA;&#x4ECE;&#x5DF2;&#x6709;&#x4F18;&#x79C0;&#x5B9E;&#x73B0;&#x4E2D;&#x9009;&#x51FA;&#xFF0C;&#x7ACB;&#x5373;&#x7EA6;&#x675F;&#x65B0;&#x589E;&#x4EE3;&#x7801;&#x3002;</p>
<p>&#x9664;&#x4E86;&#x4ECE;&#x5DF2;&#x6709;&#x4F18;&#x79C0;&#x4EE3;&#x7801;&#x4E2D;&#x4EBA;&#x5DE5;&#x9009;&#x62E9;&#xFF0C;&#x7ECF;&#x8FC7;&#x9A8C;&#x6536;&#x7684; Agent Case &#x4E5F;&#x662F;&#x66F4;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x6765;&#x6E90;&#xFF1A;</p>
<pre><code class="language-text">Raw Trace
+ Decision Events
+ Execution Report
+ &#x6700;&#x7EC8;&#x4EE3;&#x7801;&#x4E0E;&#x9A8C;&#x8BC1;&#x8BC1;&#x636E;
+ &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x7ED3;&#x679C;
&#x2192; &#x5DF2;&#x786E;&#x8BA4; Case
&#x2192; &#x63D0;&#x70BC;&#x53EF;&#x590D;&#x7528;&#x51B3;&#x5B9A;&#xFF0C;&#x8FC7;&#x6EE4;&#x8BD5;&#x9519;&#x548C;&#x4E34;&#x65F6;&#x8DEF;&#x5F84;
&#x2192; Candidate Golden Path
&#x2192; &#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x662F;&#x5426;&#x503C;&#x5F97;&#x63A8;&#x5E7F;
</code></pre>
<p>&#x201C;&#x7ED3;&#x679C;&#x5DF2;&#x901A;&#x8FC7;&#x201D;&#x53EA;&#x8BF4;&#x660E;&#x672C;&#x6B21;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x6574;&#x4E2A;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x503C;&#x5F97;&#x590D;&#x7528;&#x3002;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x8FD8;&#x9700;&#x8981;&#x533A;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">resultAccepted&#xFF1A;&#x672C;&#x6B21;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x53EF;&#x63A5;&#x53D7;
reusablePattern&#xFF1A;&#x5176;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x503C;&#x5F97;&#x63A8;&#x5E7F;&#x7684;&#x5B9E;&#x73B0;&#x6A21;&#x5F0F;
</code></pre>
<p>&#x53EA;&#x6709;&#x786E;&#x8BA4;&#x5177;&#x6709;&#x590D;&#x7528;&#x4EF7;&#x503C;&#x7684; Case&#xFF0C;&#x624D;&#x8FDB;&#x5165; Golden Path &#x63D0;&#x70BC;&#x3002;Generator Skill &#x662F;&#x540E;&#x7EED;&#x964D;&#x4F4E;&#x7EF4;&#x62A4;&#x6210;&#x672C;&#x7684;&#x80FD;&#x529B;&#xFF1A;</p>
<pre><code class="language-text">&#x5DF2;&#x9A8C;&#x8BC1;&#x7684;&#x4ED3;&#x5E93;&#x4EE3;&#x7801;&#x6216;&#x6210;&#x529F; Case
&#x2192; &#x8BC6;&#x522B;&#x53EF;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x7684; Asset
&#x2192; &#x63D0;&#x8BAE;&#x5019;&#x9009; Golden Path
&#x2192; &#x8865;&#x5145;&#x53C2;&#x8003;&#x6E90;&#x7801;&#x3001;&#x7EA6;&#x675F;&#x548C;&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;
&#x2192; &#x4EBA;&#x5DE5; Review
&#x2192; &#x8FDB;&#x5165;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x77E5;&#x8BC6;
</code></pre>
<p>&#x53EF;&#x4EE5;&#x5206;&#x4E3A;&#x4E24;&#x4E2A;&#x5165;&#x53E3;&#xFF1A;</p>
<ul>
<li><code>Material Generator Skill</code>&#xFF1A;&#x9762;&#x5411; Web / RN &#x53EF;&#x89C6;&#x7EC4;&#x4EF6;&#xFF0C;&#x751F;&#x6210; Catalog&#x3001;Fixture &#x548C;&#x5C55;&#x793A;&#x5165;&#x53E3;&#xFF1B;</li>
<li><code>Engineering Golden Path Generator Skill</code>&#xFF1A;&#x9762;&#x5411;&#x6240;&#x6709;&#x5DE5;&#x7A0B;&#x9886;&#x57DF;&#xFF0C;&#x63D0;&#x8BAE; Asset &#x548C; Golden Path&#x3002;</li>
</ul>
<p>Generator &#x53EA;&#x751F;&#x6210;&#x5019;&#x9009;&#xFF0C;&#x4E0D;&#x80FD;&#x6839;&#x636E;&#x4ED3;&#x5E93;&#x4E2D;&#x7684;&#x9AD8;&#x9891;&#x5199;&#x6CD5;&#x81EA;&#x52A8;&#x5BA3;&#x5E03;&#x201C;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x201D;&#x3002;&#x9AD8;&#x9891;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x5386;&#x53F2;&#x9057;&#x7559;&#x6216;&#x88AB;&#x91CD;&#x590D;&#x590D;&#x5236;&#x7684;&#x53CD;&#x6A21;&#x5F0F;&#x3002;</p>
<h2 id="&#x521D;&#x7248;&#x5B9E;&#x65BD;&#x65B9;&#x5F0F;"><a href="#&#x521D;&#x7248;&#x5B9E;&#x65BD;&#x65B9;&#x5F0F;"></a>&#x521D;&#x7248;&#x5B9E;&#x65BD;&#x65B9;&#x5F0F;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x6700;&#x5C0F;&#x4EBA;&#x5DE5;&#x57FA;&#x7EBF;"><a href="#&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x6700;&#x5C0F;&#x4EBA;&#x5DE5;&#x57FA;&#x7EBF;"></a>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x6700;&#x5C0F;&#x4EBA;&#x5DE5;&#x57FA;&#x7EBF;</h3>
<p>&#x4ECE;&#x8FD1;&#x671F;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x4E2D;&#x9009;&#x62E9;&#x4E09;&#x5230;&#x4E94;&#x79CD;&#x9AD8;&#x9891;&#x95EE;&#x9898;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">&#x590D;&#x6742;&#x9875;&#x9762;&#x7684;&#x6570;&#x636E;&#x4E0E;&#x72B6;&#x6001;&#x7EC4;&#x7EC7;
&#x65B0;&#x589E;&#x9886;&#x57DF; API
&#x65B0;&#x589E;&#x6570;&#x636E;&#x8BBF;&#x95EE;&#x903B;&#x8F91;
&#x65B0;&#x589E;&#x6D88;&#x606F;&#x6D88;&#x8D39;&#x8005;
&#x65B0;&#x589E;&#x4E1A;&#x52A1;&#x6D4B;&#x8BD5;
</code></pre>
<p>&#x6BCF;&#x7C7B;&#x95EE;&#x9898;&#x53EA;&#x6307;&#x5B9A;&#x4E00;&#x4E2A; Golden Example&#xFF0C;&#x5E76;&#x8BB0;&#x5F55;&#x9002;&#x7528;&#x573A;&#x666F;&#x3001;&#x53C2;&#x8003;&#x8DEF;&#x5F84;&#x3001;&#x5FC5;&#x987B;&#x7EA6;&#x675F;&#x548C;&#x9A8C;&#x8BC1;&#x547D;&#x4EE4;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x8BA9; Agent &#x5728;&#x5B9E;&#x73B0;&#x524D;&#x67E5;&#x8BE2;"><a href="#&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x8BA9; Agent &#x5728;&#x5B9E;&#x73B0;&#x524D;&#x67E5;&#x8BE2;"></a>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x8BA9; Agent &#x5728;&#x5B9E;&#x73B0;&#x524D;&#x67E5;&#x8BE2;</h3>
<p>Agent &#x63A5;&#x5230;&#x4EFB;&#x52A1;&#x540E;&#xFF1A;</p>
<pre><code class="language-text">&#x5148;&#x641C;&#x7D22;&#x5DF2;&#x6709; Asset
&#x2192; &#x518D;&#x67E5;&#x8BE2;&#x662F;&#x5426;&#x5B58;&#x5728;&#x5BF9;&#x5E94; Golden Path
&#x2192; &#x5B9E;&#x73B0;
&#x2192; &#x6267;&#x884C; Contract
&#x2192; &#x8F93;&#x51FA;&#x590D;&#x7528;&#x4E86;&#x4EC0;&#x4E48;&#x3001;&#x504F;&#x79BB;&#x4E86;&#x4EC0;&#x4E48;
</code></pre>
<p>&#x7B2C;&#x4E00;&#x7248;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; Skill &#x548C;&#x4ED3;&#x5E93;&#x5185;&#x6587;&#x6863;&#x5B8C;&#x6210;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x7ACB;&#x5373;&#x5EFA;&#x8BBE; RAG &#x6216;&#x590D;&#x6742; Tool&#x3002;</p>
<h3 id="&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x7528;&#x771F;&#x5B9E; Case &#x9A8C;&#x8BC1;"><a href="#&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x7528;&#x771F;&#x5B9E; Case &#x9A8C;&#x8BC1;"></a>&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x7528;&#x771F;&#x5B9E; Case &#x9A8C;&#x8BC1;</h3>
<p>&#x6BD4;&#x8F83;&#x63A5;&#x5165; Golden Path &#x524D;&#x540E;&#x7684;&#x7ED3;&#x679C;&#xFF1A;</p>
<ul>
<li>&#x662F;&#x5426;&#x51CF;&#x5C11;&#x65B0;&#x7684;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x98CE;&#x683C;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x63D0;&#x9AD8;&#x5DF2;&#x6709; Asset &#x7684;&#x590D;&#x7528;&#x7387;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x51CF;&#x5C11;&#x4EBA;&#x5DE5;&#x7ED3;&#x6784;&#x8C03;&#x6574;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x66F4;&#x5BB9;&#x6613;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x548C;&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x964D;&#x4F4E;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x65F6;&#x95F4;&#x3002;</li>
</ul>
<p>&#x53EA;&#x6709;&#x4EA7;&#x751F;&#x771F;&#x5B9E;&#x589E;&#x76CA;&#x7684; Golden Path &#x624D;&#x7EE7;&#x7EED;&#x7EF4;&#x62A4;&#x3002;</p>
<h3 id="&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x518D;&#x5EFA;&#x8BBE; Generator"><a href="#&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x518D;&#x5EFA;&#x8BBE; Generator"></a>&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x518D;&#x5EFA;&#x8BBE; Generator</h3>
<p>&#x5F53;&#x4EBA;&#x5DE5; Golden Path &#x5DF2;&#x7ECF;&#x8BC1;&#x660E;&#x6709;&#x6548;&#xFF0C;&#x5E76;&#x79EF;&#x7D2F;&#x4E86;&#x8DB3;&#x591F;&#x7684;&#x6210;&#x529F;&#x4E0E;&#x5931;&#x8D25; Case &#x540E;&#xFF0C;&#x518D;&#x8BA9; Generator Skill&#xFF1A;</p>
<ul>
<li>&#x4ECE;&#x6210;&#x529F; Case &#x63D0;&#x8BAE;&#x65B0;&#x7684; Asset &#x6216; Golden Path&#xFF1B;</li>
<li>&#x53D1;&#x73B0;&#x5DF2;&#x6709; Pattern &#x7684;&#x91CD;&#x590D;&#x548C;&#x51B2;&#x7A81;&#xFF1B;</li>
<li>&#x6839;&#x636E;&#x5931;&#x8D25; Case &#x5EFA;&#x8BAE;&#x8865;&#x5145;&#x7EA6;&#x675F;&#x6216; Contract&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x5019;&#x9009;&#x53D8;&#x66F4;&#xFF0C;&#x4EA4;&#x7531;&#x8D1F;&#x8D23;&#x4EBA; Review&#x3002;</li>
</ul>
<h2 id="&#x4E0E; RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x65B9;&#x6848;&#x7684;&#x5173;&#x7CFB;"><a href="#&#x4E0E; RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x65B9;&#x6848;&#x7684;&#x5173;&#x7CFB;"></a>&#x4E0E; RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x65B9;&#x6848;&#x7684;&#x5173;&#x7CFB;</h2>
<p>RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x662F;&#x8FD9;&#x5957;&#x673A;&#x5236;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5B9E;&#x8DF5;&#x573A;&#x666F;&#xFF1A;</p>
<pre><code class="language-text">Material
&#x2192; &#x89E3;&#x51B3;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x7684;&#x67E5;&#x627E;&#x3001;&#x5F15;&#x7528;&#x548C;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;

Golden Path
&#x2192; &#x89E3;&#x51B3;&#x9875;&#x9762;&#x903B;&#x8F91;&#x3001;&#x76EE;&#x5F55;&#x7ED3;&#x6784;&#x3001;&#x72B6;&#x6001;&#x7BA1;&#x7406;&#x548C;&#x7F3A;&#x5931;&#x7EC4;&#x4EF6;&#x5982;&#x4F55;&#x65B0;&#x589E;

Contract
&#x2192; &#x89E3;&#x51B3;&#x9875;&#x9762;&#x662F;&#x5426;&#x53EF;&#x8FD0;&#x884C;&#x3001;&#x529F;&#x80FD;&#x662F;&#x5426;&#x6B63;&#x786E;&#x3001;&#x89C6;&#x89C9;&#x662F;&#x5426;&#x53EF;&#x9A8C;&#x6536;
</code></pre>
<p>RN &#x7684;&#x5B9E;&#x8DF5;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x6C89;&#x6DC0;&#x4E3A;&#x901A;&#x7528;&#x673A;&#x5236;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x628A; RN &#x7279;&#x6709;&#x7ED3;&#x6784;&#x76F4;&#x63A5;&#x63A8;&#x5E7F;&#x5230;&#x5176;&#x4ED6;&#x7AEF;&#x3002;&#x53EF;&#x8FC1;&#x79FB;&#x7684;&#x662F;&#x95EE;&#x9898;&#x8868;&#x8FBE;&#x3001;&#x590D;&#x7528;&#x8DEF;&#x5F84;&#x3001;&#x5BA1;&#x6838;&#x65B9;&#x5F0F;&#x548C;&#x53CD;&#x9988;&#x95ED;&#x73AF;&#xFF1B;&#x5177;&#x4F53; Pattern &#x4ECD;&#x7531;&#x5BF9;&#x5E94;&#x5DE5;&#x7A0B;&#x9886;&#x57DF;&#x7EF4;&#x62A4;&#x3002;</p>
<h2 id="&#x8FB9;&#x754C;"><a href="#&#x8FB9;&#x754C;"></a>&#x8FB9;&#x754C;</h2>
<p>&#x5F53;&#x524D;&#x65B9;&#x6848;&#x4E0D;&#x8FFD;&#x6C42;&#xFF1A;</p>
<ul>
<li>&#x81EA;&#x52A8;&#x626B;&#x63CF;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#x5E76;&#x751F;&#x6210;&#x5B8C;&#x6574;&#x77E5;&#x8BC6;&#x5E93;&#xFF1B;</li>
<li>&#x7528;&#x7EDF;&#x4E00;&#x76EE;&#x5F55;&#x7ED3;&#x6784;&#x5F3A;&#x5236;&#x6240;&#x6709;&#x7AEF;&#x4FDD;&#x6301;&#x4E00;&#x81F4;&#xFF1B;</li>
<li>&#x8BA9; Agent &#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x4EC0;&#x4E48;&#x662F;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#xFF1B;</li>
<li>&#x5EFA;&#x8BBE;&#x72EC;&#x7ACB;&#x7684;&#x590D;&#x6742; RAG&#x3001;&#x6CBB;&#x7406;&#x5E73;&#x53F0;&#x6216; Pattern DSL&#xFF1B;</li>
<li>&#x56E0;&#x4E3A;&#x5EFA;&#x8BBE; Golden Path &#x800C;&#x963B;&#x585E;&#x5F53;&#x524D;&#x4E1A;&#x52A1;&#x4EA4;&#x4ED8;&#x3002;</li>
</ul>
<p>&#x5F53;&#x524D;&#x53EA;&#x89E3;&#x51B3;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<blockquote>
<p>&#x5728; Agent &#x7EE7;&#x7EED;&#x751F;&#x6210;&#x5927;&#x91CF;&#x4EE3;&#x7801;&#x4E4B;&#x524D;&#xFF0C;&#x4E3A;&#x9AD8;&#x9891;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x63D0;&#x4F9B;&#x5C11;&#x91CF;&#x3001;&#x660E;&#x786E;&#x3001;&#x53EF;&#x9A8C;&#x8BC1;&#x7684;&#x5DF2;&#x6709;&#x8DEF;&#x5F84;&#x3002;</p>
</blockquote>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p>AI Engineering Golden Path &#x5C06;&#x590D;&#x7528;&#x4ECE; UI Component &#x6269;&#x5C55;&#x5230;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x4E0E;&#x5B9E;&#x73B0;&#x6A21;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528; &#x2192; &#x4F7F;&#x7528; Asset
&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528; &#x2192; &#x9075;&#x5FAA; Golden Path
&#x5B8C;&#x6210;&#x5B9E;&#x73B0; &#x2192; &#x901A;&#x8FC7; Contract &#x9A8C;&#x8BC1;
&#x771F;&#x5B9E;&#x7ED3;&#x679C; &#x2192; &#x7EE7;&#x7EED;&#x4FEE;&#x6B63;&#x590D;&#x7528;&#x77E5;&#x8BC6;
</code></pre>
<p>Material Generator &#x662F;&#x89C6;&#x89C9; Asset &#x7684;&#x751F;&#x6210;&#x80FD;&#x529B;&#xFF1B;Engineering Golden Path Generator &#x662F;&#x66F4;&#x901A;&#x7528;&#x7684;&#x5019;&#x9009;&#x77E5;&#x8BC6;&#x751F;&#x6210;&#x80FD;&#x529B;&#x3002;&#x4E24;&#x8005;&#x6700;&#x7EC8;&#x53EF;&#x4EE5;&#x5171;&#x4EAB;&#x53D1;&#x73B0;&#x3001;&#x5BA1;&#x6838;&#x3001;&#x68C0;&#x7D22;&#x548C;&#x53CD;&#x9988;&#x673A;&#x5236;&#xFF0C;&#x4F46;&#x5F53;&#x524D;&#x5E94;&#x5148;&#x4ECE;&#x5C11;&#x91CF;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x7684; Golden Example &#x5F00;&#x59CB;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5148;&#x5EFA;&#x8BBE;&#x5B8C;&#x6574;&#x5E73;&#x53F0;&#x3002;</p>
`,F=[{level:1,title:"AI Engineering Golden Path：面向 Agent 的工程复用机制",children:[{level:2,title:"当前问题",children:[]},{level:2,title:"核心判断",children:[]},{level:2,title:"从 Material 到 Golden Path",children:[{level:3,title:"Asset：可以直接复用",children:[]},{level:3,title:"Golden Path：指导如何实现",children:[]}]},{level:2,title:"Agent 的复用路径",children:[]},{level:2,title:"最小 Golden Path",children:[]},{level:2,title:"Generator Skill 的位置",children:[]},{level:2,title:"初版实施方式",children:[{level:3,title:"第一步：建立最小人工基线",children:[]},{level:3,title:"第二步：让 Agent 在实现前查询",children:[]},{level:3,title:"第三步：用真实 Case 验证",children:[]},{level:3,title:"第四步：再建设 Generator",children:[]}]},{level:2,title:"与 RN 页面还原方案的关系",children:[]},{level:2,title:"边界",children:[]},{level:2,title:"结论",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
