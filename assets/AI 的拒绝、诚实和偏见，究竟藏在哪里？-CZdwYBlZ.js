const x={},F=`<!-- 写作锚点
读者收获：分清 RepE、机制可解释性、表示探测、监控和干预，理解能预测或改变行为为何不等于完整解释机制。
核心判断：RepE 以内部表示为切入点，既用于理解，也用于监控和干预；相关性、因果解释与可靠部署仍需分别验证。
如何推进：沿第二份讨论的第二至四部分，比较自底向上与自顶向下的方法，再展开三层研究任务和概念性安全架构。
-->
<h1 id="AI &#x7684;&#x62D2;&#x7EDD;&#x3001;&#x8BDA;&#x5B9E;&#x548C;&#x504F;&#x89C1;&#xFF0C;&#x7A76;&#x7ADF;&#x85CF;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"><a href="#AI &#x7684;&#x62D2;&#x7EDD;&#x3001;&#x8BDA;&#x5B9E;&#x548C;&#x504F;&#x89C1;&#xFF0C;&#x7A76;&#x7ADF;&#x85CF;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"></a>AI &#x7684;&#x62D2;&#x7EDD;&#x3001;&#x8BDA;&#x5B9E;&#x548C;&#x504F;&#x89C1;&#xFF0C;&#x7A76;&#x7ADF;&#x85CF;&#x5728;&#x54EA;&#x91CC;&#xFF1F;</h1>
<p><a href="./%E5%A6%82%E6%9E%9C%E6%A8%A1%E5%9E%8B%E5%8F%AF%E4%BB%A5%E8%A2%AB%E8%A7%A3%E9%99%A4%E5%AE%89%E5%85%A8%E9%99%90%E5%88%B6%EF%BC%8C%E6%88%91%E4%BB%AC%E8%AF%A5%E5%A6%82%E4%BD%95%E4%BF%9D%E6%8A%A4%E5%AE%83%EF%BC%9F.md">&#x4E0A;&#x4E00;&#x7BC7;</a>&#x8BA8;&#x8BBA;&#x4E86;&#x6A21;&#x578B;&#x88AB;&#x4FEE;&#x6539;&#x4EE5;&#x540E;&#xFF0C;&#x5B89;&#x5168;&#x5E94;&#x8BE5;&#x4F9D;&#x9760;&#x54EA;&#x4E9B;&#x9632;&#x7EBF;&#x3002;</p>
<p>&#x4F46;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x80FD;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x4E0E;&#x62D2;&#x7EDD;&#x3001;&#x8BDA;&#x5B9E;&#x6216;&#x504F;&#x89C1;&#x76F8;&#x5173;&#x7684;&#x5185;&#x90E8;&#x65B9;&#x5411;&#xFF0C;&#x662F;&#x5426;&#x5C31;&#x7406;&#x89E3;&#x4E86;&#x6A21;&#x578B;&#xFF1F;</p>
<p>&#x8FD9;&#x6D89;&#x53CA; Representation Engineering&#xFF08;RepE&#xFF09;&#x4E0E;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7684;&#x5173;&#x7CFB;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;Representation Engineering &#x662F;&#x4E0D;&#x662F;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#xFF1F;"><a href="#&#x4E00;&#x3001;Representation Engineering &#x662F;&#x4E0D;&#x662F;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#xFF1F;"></a>&#x4E00;&#x3001;Representation Engineering &#x662F;&#x4E0D;&#x662F;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#xFF1F;</h2>
<p>&#x4E24;&#x8005;&#x9AD8;&#x5EA6;&#x76F8;&#x5173;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x753B;&#x7B49;&#x53F7;&#x3002;</p>
<p>Representation Engineering &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;</p>
<p>&#x4EE5;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF08;Representation&#xFF09;&#x4E3A;&#x5207;&#x5165;&#x70B9;&#xFF0C;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x7684;&#x5185;&#x90E8;&#x72B6;&#x6001;&#x3001;&#x884C;&#x4E3A;&#x548C;&#x8BA4;&#x77E5;&#x7279;&#x5F81;&#xFF0C;&#x5E76;&#x5C1D;&#x8BD5;&#x5BF9;&#x5B83;&#x4EEC;&#x8FDB;&#x884C;&#x6D4B;&#x91CF;&#x3001;&#x89E3;&#x91CA;&#x548C;&#x5E72;&#x9884;&#x3002;</p>
<p>&#x5B83;&#x5C5E;&#x4E8E; AI Interpretability / Transparency &#x7684;&#x5E7F;&#x4E49;&#x7814;&#x7A76;&#x8303;&#x7574;&#xFF0C;&#x540C;&#x65F6;&#x4E5F;&#x5173;&#x5FC3;&#x600E;&#x6837;&#x63A7;&#x5236;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</p>
<h3 id="1. &#x5148;&#x533A;&#x5206;&#x4E09;&#x4E2A;&#x6982;&#x5FF5;"><a href="#1. &#x5148;&#x533A;&#x5206;&#x4E09;&#x4E2A;&#x6982;&#x5FF5;"></a>1. &#x5148;&#x533A;&#x5206;&#x4E09;&#x4E2A;&#x6982;&#x5FF5;</h3>
<table>
<thead>
<tr>
<th>&#x6982;&#x5FF5;</th>
<th>&#x7814;&#x7A76;&#x5BF9;&#x8C61;</th>
<th>&#x4E3B;&#x8981;&#x95EE;&#x9898;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Interpretability</td>
<td>&#x6A21;&#x578B;&#x5185;&#x90E8;&#x673A;&#x5236;</td>
<td>&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6837;&#x8BA1;&#x7B97;&#xFF1F;</td>
</tr>
<tr>
<td>Mechanistic Interpretability</td>
<td>&#x795E;&#x7ECF;&#x5143;&#x3001;Attention Head&#x3001;&#x8BA1;&#x7B97;&#x7535;&#x8DEF;</td>
<td>&#x54EA;&#x4E9B;&#x7EC4;&#x4EF6;&#x7EC4;&#x6210;&#x4E86;&#x67D0;&#x4E2A;&#x884C;&#x4E3A;&#x673A;&#x5236;&#xFF1F;</td>
</tr>
<tr>
<td>Representation Engineering</td>
<td>&#x9AD8;&#x5C42;&#x5185;&#x90E8;&#x8868;&#x793A;&#x3001;&#x7279;&#x5F81;&#x65B9;&#x5411;&#x3001;&#x5B50;&#x7A7A;&#x95F4;</td>
<td>&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5982;&#x4F55;&#x8868;&#x793A;&#x67D0;&#x4E2A;&#x6982;&#x5FF5;&#x6216;&#x884C;&#x4E3A;&#xFF1F;&#x5982;&#x4F55;&#x6D4B;&#x91CF;&#x548C;&#x5E72;&#x9884;&#xFF1F;</td>
</tr>
</tbody>
</table>
<p>RepE &#x7684;&#x4E00;&#x4E2A;&#x7279;&#x70B9;&#x662F;&#x91C7;&#x7528; Top-down&#xFF08;&#x81EA;&#x9876;&#x5411;&#x4E0B;&#xFF09;&#x7684;&#x7814;&#x7A76;&#x601D;&#x8DEF;&#x3002;</p>
<p>&#x4F20;&#x7EDF; Mechanistic Interpretability &#x66F4;&#x591A;&#x91C7;&#x7528; Bottom-up&#xFF08;&#x81EA;&#x5E95;&#x5411;&#x4E0A;&#xFF09;&#x7684;&#x601D;&#x8DEF;&#x3002;</p>
<h3 id="2. Bottom-up&#xFF1A;&#x4ECE;&#x795E;&#x7ECF;&#x5143;&#x548C;&#x7535;&#x8DEF;&#x7406;&#x89E3;&#x6A21;&#x578B;"><a href="#2. Bottom-up&#xFF1A;&#x4ECE;&#x795E;&#x7ECF;&#x5143;&#x548C;&#x7535;&#x8DEF;&#x7406;&#x89E3;&#x6A21;&#x578B;"></a>2. Bottom-up&#xFF1A;&#x4ECE;&#x795E;&#x7ECF;&#x5143;&#x548C;&#x7535;&#x8DEF;&#x7406;&#x89E3;&#x6A21;&#x578B;</h3>
<p>&#x5047;&#x8BBE;&#x60F3;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x77E5;&#x9053;&#x5DF4;&#x9ECE;&#x662F;&#x6CD5;&#x56FD;&#x9996;&#x90FD;&#x3002;</p>
<p>Mechanistic Interpretability &#x53EF;&#x80FD;&#x4F1A;&#x5C1D;&#x8BD5;&#xFF1A;</p>
<ol>
<li>&#x627E;&#x5230;&#x76F8;&#x5173;&#x795E;&#x7ECF;&#x5143;&#x3002;</li>
<li>&#x5206;&#x6790; Attention Head&#x3002;</li>
<li>&#x8FFD;&#x8E2A;&#x4FE1;&#x606F;&#x5728;&#x4E0D;&#x540C;&#x5C42;&#x4E4B;&#x95F4;&#x7684;&#x4F20;&#x9012;&#x3002;</li>
<li>&#x627E;&#x5230;&#x8D1F;&#x8D23;&#x76F8;&#x5173;&#x77E5;&#x8BC6;&#x8BA1;&#x7B97;&#x7684;&#x7535;&#x8DEF;&#x3002;</li>
<li>&#x901A;&#x8FC7;&#x6FC0;&#x6D3B;&#x66FF;&#x6362;&#x3001;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x9A8C;&#x8BC1;&#x56E0;&#x679C;&#x5173;&#x7CFB;&#x3002;</li>
</ol>
<p>&#x5B83;&#x5173;&#x6CE8;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x5177;&#x4F53;&#x8BA1;&#x7B97;&#x673A;&#x5236;&#x3002;</p>
<h3 id="3. Top-down&#xFF1A;&#x4ECE;&#x9AD8;&#x5C42;&#x6982;&#x5FF5;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x8868;&#x793A;"><a href="#3. Top-down&#xFF1A;&#x4ECE;&#x9AD8;&#x5C42;&#x6982;&#x5FF5;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x8868;&#x793A;"></a>3. Top-down&#xFF1A;&#x4ECE;&#x9AD8;&#x5C42;&#x6982;&#x5FF5;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x8868;&#x793A;</h3>
<p>RepE &#x7684;&#x7814;&#x7A76;&#x601D;&#x8DEF;&#x6709;&#x6240;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x60F3;&#x7814;&#x7A76;&#x6A21;&#x578B;&#x6709;&#x6CA1;&#x6709;&#x8BDA;&#x5B9E;&#x6027;&#xFF08;Honesty&#xFF09;&#x8FD9;&#x4E00;&#x6982;&#x5FF5;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x51C6;&#x5907;&#x4E24;&#x7EC4;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x7EC4;&#x8BF1;&#x5BFC;&#x6A21;&#x578B;&#x5982;&#x5B9E;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x4E00;&#x7EC4;&#x8BF1;&#x5BFC;&#x6A21;&#x578B;&#x6492;&#x8C0E;&#x6216;&#x9690;&#x7792;&#x4E8B;&#x5B9E;&#x3002;</li>
</ul>
<p>&#x7136;&#x540E;&#x63D0;&#x53D6;&#x6A21;&#x578B;&#x5728;&#x4E0D;&#x540C;&#x5C42;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x901A;&#x8FC7;&#x5BF9;&#x6BD4;&#x8FD9;&#x4E9B;&#x8868;&#x793A;&#xFF0C;&#x5C1D;&#x8BD5;&#x627E;&#x5230;&#x4E0E;&#x8BDA;&#x5B9E;&#x6027;&#x76F8;&#x5173;&#x7684;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">&#x8BDA;&#x5B9E;&#x76F8;&#x5173;&#x65B9;&#x5411; =
  &#x8BDA;&#x5B9E;&#x56DE;&#x7B54;&#x7684;&#x5E73;&#x5747;&#x9690;&#x85CF;&#x72B6;&#x6001;
  - &#x4E0D;&#x8BDA;&#x5B9E;&#x56DE;&#x7B54;&#x7684;&#x5E73;&#x5747;&#x9690;&#x85CF;&#x72B6;&#x6001;
</code></pre>
<p>&#x7136;&#x540E;&#x7814;&#x7A76;&#xFF1A;</p>
<ul>
<li>&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x5728;&#x54EA;&#x4E9B;&#x5C42;&#x51FA;&#x73B0;&#xFF1F;</li>
<li>&#x5B83;&#x662F;&#x5426;&#x80FD;&#x591F;&#x9884;&#x6D4B;&#x6A21;&#x578B;&#x662F;&#x5426;&#x8BDA;&#x5B9E;&#xFF1F;</li>
<li>&#x5C06;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x52A0;&#x5165;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF0C;&#x4F1A;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#xFF1F;</li>
<li>&#x5C06;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x79FB;&#x9664;&#xFF0C;&#x4F1A;&#x4E0D;&#x4F1A;&#x964D;&#x4F4E;&#x6A21;&#x578B;&#x8BDA;&#x5B9E;&#x6027;&#xFF1F;</li>
</ul>
<p>&#x7814;&#x7A76;&#x5148;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x9AD8;&#x5C42;&#x6982;&#x5FF5;&#xFF0C;&#x518D;&#x89C2;&#x5BDF;&#x5B83;&#x5728;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5982;&#x4F55;&#x8868;&#x793A;&#xFF0C;&#x4E0D;&#x5FC5;&#x4E00;&#x5F00;&#x59CB;&#x5C31;&#x9501;&#x5B9A;&#x67D0;&#x4E2A;&#x795E;&#x7ECF;&#x5143;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; Top-down &#x7684;&#x542B;&#x4E49;&#x3002;</p>
<p>&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x4E0E;&#x8BDA;&#x5B9E;&#x6027;&#x76F8;&#x5173;&#x7684;&#x5411;&#x91CF;&#xFF0C;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x6A21;&#x578B;&#x771F;&#x7684;&#x5177;&#x6709;&#x5B8C;&#x6574;&#x7684;&#x4EBA;&#x7C7B;&#x610F;&#x4E49;&#x4E0A;&#x7684;&#x8BDA;&#x5B9E;&#x6982;&#x5FF5;&#x3002;&#x5B83;&#x9996;&#x5148;&#x662F;&#x4E00;&#x79CD;&#x53EF;&#x4EE5;&#x5B9E;&#x9A8C;&#x68C0;&#x9A8C;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#x5047;&#x8BBE;&#x3002;</p>
<h3 id="4. RepE &#x548C; Abliteration &#x662F;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;"><a href="#4. RepE &#x548C; Abliteration &#x662F;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;"></a>4. RepE &#x548C; Abliteration &#x662F;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;</h3>
<p>Abliteration &#x53EF;&#x4EE5;&#x770B;&#x4F5C; Representation Engineering &#x601D;&#x8DEF;&#x5728;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x63A7;&#x5236;&#x65B9;&#x9762;&#x7684;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x5E94;&#x7528;&#x3002;</p>
<p>&#x4E24;&#x8005;&#x7684;&#x5173;&#x7CFB;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x7406;&#x89E3;&#xFF1A;</p>
<pre><code class="language-text">Representation Engineering
&#x7814;&#x7A76;&#x8303;&#x5F0F; / &#x65B9;&#x6CD5;&#x4F53;&#x7CFB;
&#x7814;&#x7A76;&#x4E0E;&#x9AD8;&#x5C42;&#x884C;&#x4E3A;&#x76F8;&#x5173;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#x7ED3;&#x6784;

&#x251C;&#x2500; Representation Monitoring
&#x2502;  &#x6D4B;&#x91CF;&#x4E0E;&#x76D1;&#x63A7;&#x5185;&#x90E8;&#x884C;&#x4E3A;&#x72B6;&#x6001;
&#x2502;
&#x251C;&#x2500; Activation Steering
&#x2502;  &#x5728;&#x63A8;&#x7406;&#x65F6;&#x6539;&#x53D8;&#x5185;&#x90E8;&#x8868;&#x793A;
&#x2502;
&#x251C;&#x2500; Abliteration
&#x2502;  &#x901A;&#x8FC7;&#x6743;&#x91CD;&#x7F16;&#x8F91;&#x79FB;&#x9664;&#x62D2;&#x7EDD;&#x76F8;&#x5173;&#x65B9;&#x5411;
&#x2502;
&#x2514;&#x2500; Representation Analysis
   &#x5206;&#x6790;&#x4E0D;&#x540C;&#x6982;&#x5FF5;&#x548C;&#x884C;&#x4E3A;&#x7684;&#x5185;&#x90E8;&#x5173;&#x7CFB;
</code></pre>
<p>RepE &#x7684;&#x539F;&#x59CB;&#x8BBA;&#x6587;&#x300A;Representation Engineering: A Top-Down Approach to AI Transparency&#x300B;&#xFF0C;&#x53D1;&#x8868;&#x4E8E; 2023 &#x5E74;&#x3002;</p>
<p>&#x5B83;&#x7814;&#x7A76;&#x7684;&#x5185;&#x5BB9;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>Honesty&#xFF1A;&#x8BDA;&#x5B9E;&#x6027;&#x3002;</li>
<li>Harmlessness&#xFF1A;&#x65E0;&#x5BB3;&#x6027;&#x3002;</li>
<li>Power-seeking&#xFF1A;&#x6743;&#x529B;&#x5BFB;&#x6C42;&#x503E;&#x5411;&#x3002;</li>
<li>&#x5176;&#x4ED6;&#x4E0E;&#x5B89;&#x5168;&#x76F8;&#x5173;&#x7684;&#x9AD8;&#x5C42;&#x884C;&#x4E3A;&#x3002;</li>
</ul>
<h2 id="&#x4E8C;&#x3001;RepE &#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"><a href="#&#x4E8C;&#x3001;RepE &#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"></a>&#x4E8C;&#x3001;RepE &#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#xFF0C;&#x5B83;&#x8BA9;&#x7814;&#x7A76;&#x4ECE;&#x300C;&#x89C2;&#x5BDF;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x300D;&#xFF0C;&#x8FDB;&#x4E00;&#x6B65;&#x8D70;&#x5411;&#x300C;&#x80FD;&#x5426;&#x901A;&#x8FC7;&#x5185;&#x90E8;&#x8868;&#x793A;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x300D;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x5206;&#x6210;&#x4E09;&#x4E2A;&#x5C42;&#x6B21;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;Representation Probing&#xFF08;&#x8868;&#x793A;&#x63A2;&#x6D4B;&#xFF09;"><a href="#&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;Representation Probing&#xFF08;&#x8868;&#x793A;&#x63A2;&#x6D4B;&#xFF09;"></a>&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;Representation Probing&#xFF08;&#x8868;&#x793A;&#x63A2;&#x6D4B;&#xFF09;</h3>
<p>&#x7814;&#x7A76;&#x6A21;&#x578B;&#x662F;&#x5426;&#x5728;&#x5185;&#x90E8;&#x8868;&#x793A;&#x4E86;&#x67D0;&#x4E2A;&#x6982;&#x5FF5;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x6A21;&#x578B;&#x662F;&#x5426;&#x80FD;&#x591F;&#x533A;&#x5206;&#xFF1A;</p>
<ul>
<li>&#x771F;&#x5B9E;&#x4FE1;&#x606F;&#x548C;&#x865A;&#x5047;&#x4FE1;&#x606F;&#x3002;</li>
<li>&#x5B89;&#x5168;&#x8BF7;&#x6C42;&#x548C;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x3002;</li>
<li>&#x786E;&#x5B9A;&#x7684;&#x7B54;&#x6848;&#x548C;&#x4E0D;&#x786E;&#x5B9A;&#x7684;&#x7B54;&#x6848;&#x3002;</li>
</ul>
<h3 id="&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;Representation Monitoring&#xFF08;&#x8868;&#x793A;&#x76D1;&#x63A7;&#xFF09;"><a href="#&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;Representation Monitoring&#xFF08;&#x8868;&#x793A;&#x76D1;&#x63A7;&#xFF09;"></a>&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;Representation Monitoring&#xFF08;&#x8868;&#x793A;&#x76D1;&#x63A7;&#xFF09;</h3>
<p>&#x8FDB;&#x4E00;&#x6B65;&#x7814;&#x7A76;&#x80FD;&#x4E0D;&#x80FD;&#x901A;&#x8FC7;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x5B9E;&#x65F6;&#x5224;&#x65AD;&#x6A21;&#x578B;&#x6B63;&#x5728;&#x8FDB;&#x5165;&#x4EC0;&#x4E48;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x6A21;&#x578B;&#x662F;&#x5426;&#x6B63;&#x5728;&#x4EA7;&#x751F;&#x6B3A;&#x9A97;&#x6027;&#x56DE;&#x7B54;&#xFF1F;</li>
<li>&#x6A21;&#x578B;&#x662F;&#x5426;&#x6B63;&#x5728;&#x8868;&#x73B0;&#x51FA;&#x67D0;&#x79CD;&#x5371;&#x9669;&#x503E;&#x5411;&#xFF1F;</li>
<li>&#x6A21;&#x578B;&#x662F;&#x5426;&#x5BF9;&#x81EA;&#x5DF1;&#x7684;&#x56DE;&#x7B54;&#x5B58;&#x5728;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#xFF1F;</li>
</ul>
<h3 id="&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;Representation Intervention&#xFF08;&#x8868;&#x793A;&#x5E72;&#x9884;&#xFF09;"><a href="#&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;Representation Intervention&#xFF08;&#x8868;&#x793A;&#x5E72;&#x9884;&#xFF09;"></a>&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;Representation Intervention&#xFF08;&#x8868;&#x793A;&#x5E72;&#x9884;&#xFF09;</h3>
<p>&#x5C1D;&#x8BD5;&#x4E3B;&#x52A8;&#x4FEE;&#x6539;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x4ECE;&#x800C;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x8BDA;&#x5B9E;&#x3002;</li>
<li>&#x964D;&#x4F4E;&#x67D0;&#x79CD;&#x504F;&#x89C1;&#x3002;</li>
<li>&#x6539;&#x53D8;&#x6A21;&#x578B;&#x7684;&#x8868;&#x8FBE;&#x98CE;&#x683C;&#x3002;</li>
<li>&#x589E;&#x5F3A;&#x67D0;&#x79CD;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x3002;</li>
</ul>
<p>&#x4F46;&#x8FD9;&#x91CC;&#x9700;&#x8981;&#x533A;&#x5206;&#xFF1A;</p>
<p>&#x53D1;&#x73B0;&#x67D0;&#x4E2A;&#x5411;&#x91CF;&#x80FD;&#x591F;&#x9884;&#x6D4B;&#x4E00;&#x79CD;&#x884C;&#x4E3A;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x5B83;&#x5C31;&#x662F;&#x4EA7;&#x751F;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x7684;&#x771F;&#x6B63;&#x539F;&#x56E0;&#x3002;</p>
<p>&#x8981;&#x8BC1;&#x660E;&#x56E0;&#x679C;&#x5173;&#x7CFB;&#xFF0C;&#x8FD8;&#x9700;&#x8981;&#x901A;&#x8FC7;&#x6FC0;&#x6D3B;&#x5E72;&#x9884;&#x3001;&#x6D88;&#x878D;&#x3001;&#x53CD;&#x4E8B;&#x5B9E;&#x5B9E;&#x9A8C;&#x7B49;&#x65B9;&#x5F0F;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F; RepE &#x548C;&#x6210;&#x719F;&#x7684;&#x673A;&#x5236;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x4E4B;&#x95F4;&#x4ECD;&#x7136;&#x5B58;&#x5728;&#x7684;&#x8DDD;&#x79BB;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x4F1A;&#x600E;&#x6837;&#x7ED3;&#x5408;&#xFF1F;"><a href="#&#x4E09;&#x3001;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x4F1A;&#x600E;&#x6837;&#x7ED3;&#x5408;&#xFF1F;"></a>&#x4E09;&#x3001;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x4F1A;&#x600E;&#x6837;&#x7ED3;&#x5408;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x672A;&#x6765;&#x51E0;&#x5E74;&#xFF0C;&#x5927;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x548C;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x4F1A;&#x8D8A;&#x6765;&#x8D8A;&#x7D27;&#x5BC6;&#x5730;&#x7ED3;&#x5408;&#x3002;</p>
<p>&#x73B0;&#x5728;&#x7684;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x4E3B;&#x8981;&#x4F9D;&#x8D56;&#x4E09;&#x7C7B;&#x65B9;&#x6CD5;&#xFF1A;</p>
<ol>
<li>&#x8BAD;&#x7EC3;&#x65F6;&#x5BF9;&#x9F50;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x3002;</li>
<li>&#x63A8;&#x7406;&#x65F6;&#x9632;&#x62A4;&#xFF1A;&#x901A;&#x8FC7;&#x8F93;&#x5165;&#x548C;&#x8F93;&#x51FA;&#x5BA1;&#x6838;&#x63A7;&#x5236;&#x98CE;&#x9669;&#x3002;</li>
<li>&#x7CFB;&#x7EDF;&#x5C42;&#x9632;&#x62A4;&#xFF1A;&#x901A;&#x8FC7;&#x6743;&#x9650;&#x3001;&#x6C99;&#x7BB1;&#x548C;&#x5BA1;&#x8BA1;&#x9650;&#x5236;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</li>
</ol>
<p>RepE &#x53EF;&#x80FD;&#x5E26;&#x6765;&#x7B2C;&#x56DB;&#x79CD;&#x80FD;&#x529B;&#xFF1A;</p>
<ol start="4">
<li>&#x5185;&#x90E8;&#x72B6;&#x6001;&#x76D1;&#x63A7;&#x548C;&#x5E72;&#x9884;&#xFF1A;&#x89C2;&#x5BDF;&#x6A21;&#x578B;&#x6B63;&#x5728;&#x5F62;&#x6210;&#x4EC0;&#x4E48;&#x884C;&#x4E3A;&#x8868;&#x793A;&#xFF0C;&#x5E76;&#x5728;&#x5FC5;&#x8981;&#x65F6;&#x8FDB;&#x884C;&#x63A7;&#x5236;&#x3002;</li>
</ol>
<p>&#x53EF;&#x4EE5;&#x8BBE;&#x60F3;&#x8FD9;&#x6837;&#x4E00;&#x79CD;&#x67B6;&#x6784;&#xFF1A;</p>
<h3 id="&#x4E0B;&#x4E00;&#x4EE3;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x67B6;&#x6784;&#xFF08;&#x6982;&#x5FF5;&#x6027;&#xFF09;"><a href="#&#x4E0B;&#x4E00;&#x4EE3;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x67B6;&#x6784;&#xFF08;&#x6982;&#x5FF5;&#x6027;&#xFF09;"></a>&#x4E0B;&#x4E00;&#x4EE3;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x67B6;&#x6784;&#xFF08;&#x6982;&#x5FF5;&#x6027;&#xFF09;</h3>
<pre><code class="language-text">LLM &#x4E3B;&#x6A21;&#x578B;
&#x77E5;&#x8BC6;&#x3001;&#x63A8;&#x7406;&#x3001;&#x751F;&#x6210;&#x80FD;&#x529B;

&#x914D;&#x5408;&#x4EE5;&#x4E0B;&#x7EC4;&#x4EF6;&#xFF1A;

Representation Monitor
&#x5185;&#x90E8;&#x72B6;&#x6001;&#x76D1;&#x63A7;

Safety Classifier
&#x5916;&#x90E8;&#x5B89;&#x5168;&#x5BA1;&#x6838;

Behavior Controller
&#x884C;&#x4E3A;&#x8C03;&#x8282;

Permission System
&#x5DE5;&#x5177;&#x6743;&#x9650;&#x63A7;&#x5236;

&#x76EE;&#x6807;&#xFF1A;&#x5B89;&#x5168;&#x3001;&#x53EF;&#x63A7;&#x3001;&#x53EF;&#x5BA1;&#x8BA1;&#x7684;&#x6A21;&#x578B;&#x5E94;&#x7528;
</code></pre>
<p>&#x8FD9;&#x662F;&#x4E00;&#x79CD;&#x7814;&#x7A76;&#x548C;&#x5DE5;&#x7A0B;&#x67B6;&#x6784;&#x8BBE;&#x60F3;&#xFF0C;&#x5E76;&#x4E0D;&#x662F;&#x8BF4;&#x76EE;&#x524D;&#x5DF2;&#x7ECF;&#x80FD;&#x591F;&#x53EF;&#x9760;&#x5730;&#x76D1;&#x63A7;&#x6240;&#x6709;&#x5185;&#x90E8;&#x5371;&#x9669;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x6700;&#x540E;&#xFF0C;&#x53EF;&#x4EE5;&#x628A;&#x51E0;&#x4E2A;&#x76F8;&#x5173;&#x65B9;&#x5411;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x770B;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7814;&#x7A76;&#x65B9;&#x5411;</th>
<th>&#x9700;&#x8981;&#x56DE;&#x7B54;&#x7684;&#x95EE;&#x9898;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mechanistic Interpretability</td>
<td>&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5177;&#x4F53;&#x662F;&#x600E;&#x4E48;&#x8BA1;&#x7B97;&#x7684;&#xFF1F;</td>
</tr>
<tr>
<td>Representation Engineering</td>
<td>&#x6A21;&#x578B;&#x5982;&#x4F55;&#x8868;&#x793A;&#x9AD8;&#x5C42;&#x6982;&#x5FF5;&#x548C;&#x884C;&#x4E3A;&#xFF1F;</td>
</tr>
<tr>
<td>Model Editing</td>
<td>&#x5982;&#x4F55;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x77E5;&#x8BC6;&#x548C;&#x884C;&#x4E3A;&#xFF1F;</td>
</tr>
<tr>
<td>Activation Steering</td>
<td>&#x5982;&#x4F55;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x63A7;&#x5236;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#xFF1F;</td>
</tr>
<tr>
<td>AI Alignment</td>
<td>&#x5982;&#x4F55;&#x8BA9;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x7B26;&#x5408;&#x4EBA;&#x7C7B;&#x76EE;&#x6807;&#xFF1F;</td>
</tr>
<tr>
<td>AI Safety Engineering</td>
<td>&#x5982;&#x4F55;&#x5728;&#x771F;&#x5B9E;&#x90E8;&#x7F72;&#x73AF;&#x5883;&#x4E2D;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x9020;&#x6210;&#x635F;&#x5BB3;&#xFF1F;</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x516D;&#x4E2A;&#x65B9;&#x5411;&#x76F8;&#x4E92;&#x5173;&#x8054;&#xFF0C;&#x4F46;&#x4E0D;&#x662F;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;&#x3002;</p>
<p>&#x5982;&#x679C;&#x8981;&#x9009;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x6DF1;&#x5165;&#x5B66;&#x4E60;&#xFF0C;&#x6211;&#x5EFA;&#x8BAE;&#x4ECE; Representation Engineering &#x5F00;&#x59CB;&#xFF0C;&#x518D;&#x8FDB;&#x5165; Mechanistic Interpretability&#x3002;</p>
<p>&#x524D;&#x8005;&#x8BA9;&#x4EBA;&#x5148;&#x5EFA;&#x7ACB;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x8868;&#x793A;&#x7A7A;&#x95F4;&#x7684;&#x6574;&#x4F53;&#x8BA4;&#x77E5;&#xFF0C;&#x540E;&#x8005;&#x518D;&#x5E26;&#x7740;&#x4EBA;&#x6DF1;&#x5165;&#x795E;&#x7ECF;&#x5143;&#x3001;Attention Head &#x548C;&#x8BA1;&#x7B97;&#x7535;&#x8DEF;&#x3002;</p>
<p>&#x8FD9;&#x6837;&#x4E5F;&#x66F4;&#x5BB9;&#x6613;&#x7406;&#x89E3; Abliteration &#x4E3A;&#x4EC0;&#x4E48;&#x6709;&#x6548;&#xFF0C;&#x4EE5;&#x53CA;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x53C8;&#x4E0D;&#x80FD;&#x771F;&#x6B63;&#x89E3;&#x51B3;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Zou &#x7B49;&#xFF0C;&#x300A;Representation Engineering: A Top-Down Approach to AI Transparency&#x300B;&#xFF0C;2023&#xFF1A;https://arxiv.org/abs/2310.01405</li>
<li>&#x300A;Representation Engineering for Large-Language Models: Survey and Research Challenges&#x300B;&#xFF1A;https://www.alphaxiv.org/overview/2502.17601v1</li>
<li>hlfshell&#xFF0C;&#x300A;Representation Engineering and Control Vectors &#x2014; Neuroscience for LLMs&#x300B;&#xFF1A;https://hlfshell.ai/posts/representation-engineering/</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"AI 的拒绝、诚实和偏见，究竟藏在哪里？",children:[{level:2,title:"一、Representation Engineering 是不是可解释性？",children:[{level:3,title:"1. 先区分三个概念",children:[]},{level:3,title:"2. Bottom-up：从神经元和电路理解模型",children:[]},{level:3,title:"3. Top-down：从高层概念研究模型表示",children:[]},{level:3,title:"4. RepE 和 Abliteration 是什么关系？",children:[]}]},{level:2,title:"二、RepE 的价值在哪里？",children:[{level:3,title:"第一层：Representation Probing（表示探测）",children:[]},{level:3,title:"第二层：Representation Monitoring（表示监控）",children:[]},{level:3,title:"第三层：Representation Intervention（表示干预）",children:[]}]},{level:2,title:"三、这两个方向会怎样结合？",children:[{level:3,title:"下一代模型安全架构（概念性）",children:[]}]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
