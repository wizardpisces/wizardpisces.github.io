const x={title:"Feature 驱动的 Agent 开发：垂直交付与局部反馈闭环",description:"将大需求拆为可验收、可聚焦的 Feature，让人和 Agent 围绕局部成果持续协作，减少等待与无效交接，并通过真实反馈、修订和验证改进执行方法。"},E=`<h1 id="Feature &#x9A71;&#x52A8;&#x7684; Agent &#x5F00;&#x53D1;&#xFF1A;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;&#x4E0E;&#x5C40;&#x90E8;&#x53CD;&#x9988;&#x95ED;&#x73AF;"><a href="#Feature &#x9A71;&#x52A8;&#x7684; Agent &#x5F00;&#x53D1;&#xFF1A;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;&#x4E0E;&#x5C40;&#x90E8;&#x53CD;&#x9988;&#x95ED;&#x73AF;"></a>Feature &#x9A71;&#x52A8;&#x7684; Agent &#x5F00;&#x53D1;&#xFF1A;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;&#x4E0E;&#x5C40;&#x90E8;&#x53CD;&#x9988;&#x95ED;&#x73AF;</h1>
<h2 id="&#x4E00;&#x3001;&#x80CC;&#x666F;"><a href="#&#x4E00;&#x3001;&#x80CC;&#x666F;"></a>&#x4E00;&#x3001;&#x80CC;&#x666F;</h2>
<p>&#x5F53;&#x524D; Coding Agent &#x5E38;&#x6309;&#x804C;&#x8D23;&#x548C;&#x9636;&#x6BB5;&#x7EC4;&#x7EC7;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<pre><code class="language-text">&#x5927;&#x9700;&#x6C42; &#x2192; &#x6280;&#x672F;&#x8BBE;&#x8BA1; &#x2192; &#x63A5;&#x53E3;&#x51C6;&#x5907; &#x2192; FE &#x4EFB;&#x52A1;&#x62C6;&#x5206;
       &#x2192; UI &#x4EA7;&#x7269; &#x2192; &#x4E1A;&#x52A1;&#x5B9E;&#x73B0; &#x2192; &#x6D4B;&#x8BD5; &#x2192; &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
</code></pre>
<p>&#x6574;&#x9636;&#x6BB5;&#x5B8C;&#x6210;&#x6210;&#x4E3A;&#x4E0B;&#x6E38;&#x7684;&#x542F;&#x52A8;&#x6761;&#x4EF6;&#x3002;UI &#x7B49;&#x5F85;&#x63A5;&#x53E3;&#xFF0C;&#x6D4B;&#x8BD5;&#x7B49;&#x5F85;&#x5168;&#x90E8;&#x5B9E;&#x73B0;&#xFF0C;&#x4EBA;&#x5DE5;&#x9700;&#x8981;&#x7ECF;&#x8FC7;&#x957F;&#x65F6;&#x95F4;&#x6267;&#x884C;&#x540E;&#x624D;&#x80FD;&#x770B;&#x5230;&#x7ED3;&#x679C;&#xFF1B;&#x6BCF;&#x6B21;&#x4EA4;&#x63A5;&#x53C8;&#x91CD;&#x65B0;&#x7EC4;&#x7EC7;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4FE1;&#x606F;&#x9057;&#x6F0F;&#x4E0E;&#x9519;&#x8BEF;&#x9010;&#x6B65;&#x7D2F;&#x79EF;&#x3002;</p>
<p>&#x7B49;&#x5F85;&#x671F;&#x95F4;&#xFF0C;&#x4EBA;&#x7F3A;&#x5C11;&#x5177;&#x4F53;&#x7684;&#x53C2;&#x4E0E;&#x5BF9;&#x8C61;&#xFF1B;&#x7ED3;&#x679C;&#x96C6;&#x4E2D;&#x4EA4;&#x4ED8;&#x540E;&#xFF0C;&#x53C8;&#x8981;&#x4E00;&#x6B21;&#x7406;&#x89E3;&#x5927;&#x91CF;&#x4EE3;&#x7801;&#x3001;&#x6750;&#x6599;&#x548C;&#x9057;&#x7559;&#x95EE;&#x9898;&#xFF0C;&#x5BA1;&#x6838;&#x5BB9;&#x6613;&#x505C;&#x7559;&#x5728;&#x603B;&#x7ED3;&#x548C;&#x72B6;&#x6001;&#x4E0A;&#x3002;&#x9519;&#x8BEF;&#x66B4;&#x9732;&#x5F97;&#x665A;&#xFF0C;&#x4FEE;&#x6B63;&#x8303;&#x56F4;&#x4E5F;&#x96BE;&#x4EE5;&#x63A7;&#x5236;&#x3002;</p>
<p>&#x5B9E;&#x8DF5;&#x5207;&#x5165;&#x70B9;&#x662F;&#x5C06;&#x5927;&#x9700;&#x6C42;&#x62C6;&#x6210;&#x53EF;&#x9A8C;&#x6536;&#x7684; Feature&#xFF0C;&#x6BCF;&#x7247;&#x6301;&#x7EED;&#x8D1F;&#x8D23;&#x76F8;&#x5173;&#x7406;&#x89E3;&#x3001;&#x5B9E;&#x73B0;&#x3001;&#x9A8C;&#x8BC1;&#x4E0E;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#xFF0C;&#x5C3D;&#x65E9;&#x4EA7;&#x751F;&#x53EF;&#x68C0;&#x67E5;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x601D;&#x8DEF;"><a href="#&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x601D;&#x8DEF;"></a>&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x601D;&#x8DEF;</h2>
<pre><code class="language-text">&#x5927;&#x9700;&#x6C42;&#x3001;&#x5171;&#x4EAB;&#x7EA6;&#x675F;&#x4E0E;&#x9A8C;&#x6536;&#x76EE;&#x6807;
&#x2502;
&#x251C;&#x2500; Feature A&#xFF1A;&#x7406;&#x89E3; &#x2194; &#x5B9E;&#x73B0; &#x2194; &#x73AF;&#x5883;&#x9A8C;&#x8BC1; &#x2194; &#x4EBA;&#x5DE5;&#x53CD;&#x9988;
&#x251C;&#x2500; Feature B&#xFF1A;&#x7406;&#x89E3; &#x2194; &#x5B9E;&#x73B0; &#x2194; &#x73AF;&#x5883;&#x9A8C;&#x8BC1; &#x2194; &#x4EBA;&#x5DE5;&#x53CD;&#x9988;
&#x2514;&#x2500; Feature C&#xFF1A;&#x7406;&#x89E3; &#x2194; &#x5B9E;&#x73B0; &#x2194; &#x73AF;&#x5883;&#x9A8C;&#x8BC1; &#x2194; &#x4EBA;&#x5DE5;&#x53CD;&#x9988;

&#x771F;&#x5B9E;&#x4F9D;&#x8D56;&#x660E;&#x786E;&#x3001;&#x8F93;&#x5165;&#x5C31;&#x7EEA; &#x2192; &#x63A8;&#x8FDB;&#x76F8;&#x5173; Feature
&#x5C40;&#x90E8;&#x7ED3;&#x679C;&#x5C31;&#x7EEA; &#x2192; &#x5FC5;&#x8981;&#x7684;&#x7EC4;&#x5408;&#x9A8C;&#x8BC1; &#x2192; &#x5B8C;&#x6574;&#x9700;&#x6C42;&#x4EA4;&#x4ED8;
</code></pre>
<p>Feature &#x662F;&#x6267;&#x884C;&#x3001;&#x8BC4;&#x5BA1;&#x548C;&#x590D;&#x76D8;&#x7684;&#x4E3B;&#x8981;&#x5355;&#x5143;&#xFF0C;&#x4E5F;&#x662F;&#x4EBA;&#x4E0E; Agent &#x7684;&#x5171;&#x540C;&#x6CE8;&#x610F;&#x529B;&#x5355;&#x5143;&#xFF1A;&#x4EBA;&#x805A;&#x7126;&#x80FD;&#x591F;&#x5224;&#x65AD;&#x7684;&#x7ED3;&#x679C;&#xFF0C;Agent &#x805A;&#x7126;&#x5F53;&#x524D;&#x76EE;&#x6807;&#x4E0E;&#x76F8;&#x5173;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
<p>&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x4EA4;&#x4ED8;&#x8FB9;&#x754C;&#x4E0E;&#x91CD;&#x8981;&#x53D6;&#x820D;&#xFF0C;&#x6267;&#x884C;&#x8005;&#x5728;&#x5141;&#x8BB8;&#x8303;&#x56F4;&#x5185;&#x6301;&#x7EED;&#x63A8;&#x8FDB;&#x3002;Agent&#x3001;&#x5DE5;&#x5177;&#x548C; Flow &#x6309;&#x9700;&#x4F7F;&#x7528;&#xFF0C;&#x5177;&#x4F53;&#x7EC4;&#x5408;&#x89C1;<a href="./%E5%8F%AF%E7%BB%84%E5%90%88%20Agent%20%E7%9A%84%E6%B8%90%E8%BF%9B%E5%BC%8F%E8%90%BD%E5%9C%B0%EF%BC%9A%E4%BB%8E%20RN%20%E4%BB%BB%E5%8A%A1%E5%88%B0%E5%85%A8%E5%B1%80%E5%8D%8F%E4%BD%9C.md">&#x53EF;&#x7EC4;&#x5408; Agent &#x65B9;&#x6848;</a>&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x600E;&#x6837;&#x5212;&#x5206; Feature"><a href="#&#x4E09;&#x3001;&#x600E;&#x6837;&#x5212;&#x5206; Feature"></a>&#x4E09;&#x3001;&#x600E;&#x6837;&#x5212;&#x5206; Feature</h2>
<p>&#x4E00;&#x4E2A; Feature &#x5BF9;&#x5E94;&#x4E00;&#x9879;&#x53EF;&#x89C2;&#x5BDF;&#x3001;&#x53EF;&#x5224;&#x65AD;&#x7684;&#x4E1A;&#x52A1;&#x6216;&#x5DE5;&#x7A0B;&#x80FD;&#x529B;&#xFF0C;&#x5305;&#x542B;&#x5B8C;&#x6210;&#x8BE5;&#x7ED3;&#x679C;&#x6240;&#x9700;&#x7684;&#x76F8;&#x5173;&#x5DE5;&#x4F5C;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x201C;&#x8D26;&#x53F7;&#x8BE6;&#x60C5;&#x201D;&#x53EF;&#x80FD;&#x4ECD;&#x7136;&#x8FC7;&#x5927;&#xFF0C;&#x53EF;&#x4EE5;&#x6309;&#x884C;&#x4E3A;&#x5212;&#x6210;&#x201C;&#x67E5;&#x770B;&#x57FA;&#x7840;&#x8EAB;&#x4EFD;&#x4FE1;&#x606F;&#x201D;&#x201C;&#x67E5;&#x770B;&#x6388;&#x6743;&#x7167;&#x7247;&#x201D;&#x201C;&#x67E5;&#x8BE2;&#x5386;&#x53F2;&#x7533;&#x8BF7;&#x201D;&#x3002;&#x5404;&#x7247;&#x5206;&#x522B;&#x5305;&#x542B;&#x76F8;&#x5173; UI&#x3001;&#x6570;&#x636E;&#x63A5;&#x5165;&#x3001;&#x6743;&#x9650;&#x3001;&#x5F02;&#x5E38;&#x5904;&#x7406;&#x548C;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x5212;&#x5206;&#x65F6;&#x68C0;&#x67E5;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x6761;&#x4EF6;</th>
<th>&#x9700;&#x8981;&#x660E;&#x786E;&#x4EC0;&#x4E48;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7ED3;&#x679C;&#x53EF;&#x9A8C;&#x6536;</td>
<td>&#x5E94;&#x51FA;&#x73B0;&#x4EC0;&#x4E48;&#x884C;&#x4E3A;&#x6216;&#x4EA7;&#x7269;&#xFF0C;&#x4F9D;&#x636E;&#x4EC0;&#x4E48;&#x5224;&#x65AD;</td>
</tr>
<tr>
<td>&#x8BC4;&#x5BA1;&#x53EF;&#x805A;&#x7126;</td>
<td>&#x4EBA;&#x80FD;&#x5426;&#x5728;&#x53EF;&#x63A5;&#x53D7;&#x7684;&#x65F6;&#x95F4;&#x5185;&#x7406;&#x89E3;&#x7ED3;&#x679C;&#x5E76;&#x7ED9;&#x51FA;&#x5177;&#x4F53;&#x53CD;&#x9988;</td>
</tr>
<tr>
<td>&#x8303;&#x56F4;&#x53EF;&#x63A7;&#x5236;</td>
<td>&#x672C;&#x7247;&#x5305;&#x542B;&#x4EC0;&#x4E48;&#x3001;&#x6682;&#x4E0D;&#x5305;&#x542B;&#x4EC0;&#x4E48;</td>
</tr>
<tr>
<td>&#x4F9D;&#x8D56;&#x53EF;&#x8BF4;&#x660E;</td>
<td>&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x5171;&#x4EAB;&#x80FD;&#x529B;&#x3001;&#x5951;&#x7EA6;&#x3001;&#x4EE3;&#x7801;&#x6216;&#x73AF;&#x5883;</td>
</tr>
<tr>
<td>&#x4FEE;&#x6539;&#x53EF;&#x7BA1;&#x7406;</td>
<td>&#x6D89;&#x53CA;&#x54EA;&#x4E9B;&#x6A21;&#x5757;&#xFF0C;&#x662F;&#x5426;&#x4E0E;&#x5176;&#x4ED6; Feature &#x51B2;&#x7A81;</td>
</tr>
</tbody>
</table>
<p>&#x8303;&#x56F4;&#x8FC7;&#x5927;&#x3001;&#x957F;&#x671F;&#x6CA1;&#x6709;&#x53EF;&#x5BA1;&#x6838;&#x7ED3;&#x679C;&#x65F6;&#x7EE7;&#x7EED;&#x62C6;&#xFF1B;&#x591A;&#x4E2A;&#x7247;&#x6BB5;&#x9891;&#x7E41;&#x4E92;&#x6539;&#x3001;&#x65E0;&#x6CD5;&#x5206;&#x522B;&#x9A8C;&#x6536;&#x65F6;&#xFF0C;&#x91CD;&#x65B0;&#x5408;&#x5E76;&#x6216;&#x8C03;&#x6574;&#x8FB9;&#x754C;&#x3002;&#x4F18;&#x5148;&#x9009;&#x62E9;&#x9AD8;&#x4E0D;&#x786E;&#x5B9A;&#x3001;&#x9AD8;&#x5F71;&#x54CD;&#x4E14;&#x80FD;&#x591F;&#x9A8C;&#x8BC1;&#x7684;&#x7247;&#x6BB5;&#xFF0C;&#x5C3D;&#x65E9;&#x68C0;&#x67E5;&#x5B9E;&#x73B0;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x6309;&#x4EA7;&#x7269;&#x3001;&#x9A8C;&#x6536;&#x804C;&#x8D23;&#x6216;&#x7B56;&#x7565;&#x5B9E;&#x9A8C;&#x7EE7;&#x7EED;&#x7EC6;&#x5206;&#x7684;&#x6761;&#x4EF6;&#xFF0C;&#x89C1;<a href="./material-first/Agent%20%E7%9A%84%E5%88%86%E6%B2%BB%E5%BC%8F%E6%BC%94%E8%BF%9B%EF%BC%9A%E4%BB%BB%E5%8A%A1%E8%A7%A3%E8%80%A6%E4%B8%8E%E5%B1%80%E9%83%A8%E5%8F%8D%E9%A6%88%E9%97%AD%E7%8E%AF.md">&#x5206;&#x6CBB;&#x5F0F;&#x6F14;&#x8FDB;&#x65B9;&#x6848;</a>&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x600E;&#x6837;&#x5B8C;&#x6210;&#x4E00;&#x7247;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;"><a href="#&#x56DB;&#x3001;&#x600E;&#x6837;&#x5B8C;&#x6210;&#x4E00;&#x7247;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;"></a>&#x56DB;&#x3001;&#x600E;&#x6837;&#x5B8C;&#x6210;&#x4E00;&#x7247;&#x5782;&#x76F4;&#x4EA4;&#x4ED8;</h2>
<h3 id="&#x5171;&#x4EAB;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5C40;&#x90E8;&#x8BB0;&#x5F55;"><a href="#&#x5171;&#x4EAB;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5C40;&#x90E8;&#x8BB0;&#x5F55;"></a>&#x5171;&#x4EAB;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5C40;&#x90E8;&#x8BB0;&#x5F55;</h3>
<p>&#x9700;&#x6C42;&#x3001;&#x5DE5;&#x7A0B;&#x3001;&#x77E5;&#x8BC6;&#x4E0E;&#x8FD0;&#x884C;&#x5165;&#x53E3;&#x6CBF;&#x7528;<a href="./%E4%BB%8E%E4%B8%B2%E8%A1%8C%E4%BA%A4%E6%8E%A5%E5%88%B0%E6%8C%81%E7%BB%AD%E5%8D%8F%E4%BD%9C%EF%BC%9ACoding%20Agent%20%E7%9A%84%E4%BB%BB%E5%8A%A1%E5%B7%A5%E4%BD%9C%E5%8C%BA%E8%AE%BE%E8%AE%A1.md">Agentic &#x5DE5;&#x4F5C;&#x533A;</a>&#xFF0C;&#x6BCF;&#x7247;&#x53EA;&#x589E;&#x52A0;&#x81EA;&#x5DF1;&#x7684;&#x76EE;&#x6807;&#x548C;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">features/&lt;feature&gt;/
&#x251C;&#x2500;&#x2500; feature.md     &#x76EE;&#x6807;&#x3001;&#x8FB9;&#x754C;&#x3001;&#x9A8C;&#x6536;&#x3001;&#x4F9D;&#x8D56;&#x53CA;&#x539F;&#x59CB;&#x6765;&#x6E90;&#x5F15;&#x7528;
&#x251C;&#x2500;&#x2500; work/          &#x6309;&#x9700;&#x4EA7;&#x751F;&#x7684;&#x5206;&#x6790;&#x3001;&#x8BA1;&#x5212;&#x4E0E;&#x5C1D;&#x8BD5;
&#x251C;&#x2500;&#x2500; evidence/      &#x6D4B;&#x8BD5;&#x3001;&#x622A;&#x56FE;&#x3001;&#x65E5;&#x5FD7;&#x4E0E;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x4F9D;&#x636E;
&#x2514;&#x2500;&#x2500; history/       &#x8F93;&#x5165;&#x3001;&#x5019;&#x9009;&#x3001;&#x53CD;&#x9988;&#x4E0E;&#x91CD;&#x9A8C;&#x5173;&#x7CFB;
</code></pre>
<p>&#x6267;&#x884C;&#x8005;&#x4F18;&#x5148;&#x8BFB;&#x53D6;&#x5F53;&#x524D; Feature &#x548C;&#x5FC5;&#x8981;&#x5171;&#x4EAB;&#x7EA6;&#x675F;&#xFF0C;&#x4ECD;&#x53EF;&#x56DE;&#x67E5;&#x6574;&#x4F53;&#x76EE;&#x6807;&#x4E0E;&#x5176;&#x4ED6;&#x7247;&#x7684;&#x4F9D;&#x8D56;&#x3002;&#x6BCF;&#x7247;&#x4FDD;&#x7559;&#x5F53;&#x524D;&#x5019;&#x9009;&#x3001;&#x5DF2;&#x9A8C;&#x8BC1;&#x90E8;&#x5206;&#x548C;&#x5F85;&#x529E;&#xFF0C;&#x652F;&#x6301;&#x6682;&#x505C;&#x3001;&#x6062;&#x590D;&#x6216;&#x4EA4;&#x63A5;&#x3002;</p>
<h3 id="&#x6309;&#x9700;&#x6267;&#x884C;&#xFF0C;&#x5C40;&#x90E8;&#x7B49;&#x5F85;"><a href="#&#x6309;&#x9700;&#x6267;&#x884C;&#xFF0C;&#x5C40;&#x90E8;&#x7B49;&#x5F85;"></a>&#x6309;&#x9700;&#x6267;&#x884C;&#xFF0C;&#x5C40;&#x90E8;&#x7B49;&#x5F85;</h3>
<p>&#x540C;&#x4E00;&#x6267;&#x884C;&#x8005;&#x6301;&#x7EED;&#x8D1F;&#x8D23;&#x672C;&#x7247;&#xFF0C;&#x8BBE;&#x8BA1;&#x7406;&#x89E3;&#x3001;&#x63A5;&#x53E3;&#x68C0;&#x67E5;&#x3001;&#x5B9E;&#x73B0;&#x548C;&#x6D4B;&#x8BD5;&#x6309;&#x9700;&#x8981;&#x53D1;&#x751F;&#x3002;&#x8BA1;&#x5212;&#x5E2E;&#x52A9;&#x6267;&#x884C;&#xFF0C;&#x6210;&#x679C;&#x4E0E;&#x8BC1;&#x636E;&#x652F;&#x6301;&#x5224;&#x65AD;&#xFF0C;&#x4E0D;&#x4E3A;&#x6BCF;&#x9879;&#x5185;&#x90E8;&#x52A8;&#x4F5C;&#x751F;&#x6210;&#x6B63;&#x5F0F;&#x4EA4;&#x63A5;&#x5305;&#x3002;</p>
<p>&#x63A5;&#x53E3;&#x672A;&#x9F50;&#x65F6;&#xFF0C;&#x53EF;&#x5728;&#x5177;&#x5907;&#x9694;&#x79BB;&#x5165;&#x53E3;&#x7684;&#x5DE5;&#x7A0B;&#x4E2D;&#x7528; Fixture &#x63A8;&#x8FDB; UI&#xFF0C;&#x5951;&#x7EA6;&#x8865;&#x9F50;&#x540E;&#x63A5;&#x5165;&#x771F;&#x5B9E;&#x884C;&#x4E3A;&#x5E76;&#x6838;&#x5BF9;&#x5047;&#x8BBE;&#x3002;&#x4E1A;&#x52A1;&#x89C4;&#x5219;&#x3001;&#x6743;&#x9650;&#x6216;&#x4E0D;&#x53EF;&#x9006;&#x64CD;&#x4F5C;&#x4E0D;&#x660E;&#x786E;&#x65F6;&#xFF0C;&#x53EA;&#x6682;&#x505C;&#x53D7;&#x5F71;&#x54CD;&#x90E8;&#x5206;&#x3002;</p>
<p>&#x67D0;&#x7247;&#x53D7;&#x963B;&#x65F6;&#x63A8;&#x8FDB;&#x771F;&#x6B63;&#x72EC;&#x7ACB;&#x7684;&#x5DE5;&#x4F5C;&#x3002;&#x540C;&#x4ED3;&#x5E93;&#x9996;&#x671F;&#x987A;&#x5E8F;&#x5199;&#x5165;&#xFF0C;&#x786E;&#x8BA4;&#x4F9D;&#x8D56;&#x4E0E;&#x8D44;&#x6E90;&#x9694;&#x79BB;&#x540E;&#x518D;&#x5E76;&#x884C;&#x3002;</p>
<h2 id="&#x4E94;&#x3001;&#x4EBA;&#x5DE5;&#x600E;&#x6837;&#x8DDF;&#x8E2A;&#x4E0E;&#x9A8C;&#x6536;"><a href="#&#x4E94;&#x3001;&#x4EBA;&#x5DE5;&#x600E;&#x6837;&#x8DDF;&#x8E2A;&#x4E0E;&#x9A8C;&#x6536;"></a>&#x4E94;&#x3001;&#x4EBA;&#x5DE5;&#x600E;&#x6837;&#x8DDF;&#x8E2A;&#x4E0E;&#x9A8C;&#x6536;</h2>
<pre><code class="language-text">Feature A &#x51FA;&#x73B0;&#x53EF;&#x5BA1;&#x6838;&#x6210;&#x679C;
        &#x251C;&#x2500; &#x4EBA;&#xFF1A;&#x67E5;&#x770B;&#x7ED3;&#x679C; &#x2192; &#x7ED9;&#x51FA;&#x53CD;&#x9988; &#x2192; A &#x4FEE;&#x8BA2;&#x4E0E;&#x91CD;&#x9A8C;
        &#x2514;&#x2500; Agent&#xFF1A;&#x5728;&#x72EC;&#x7ACB;&#x3001;&#x9694;&#x79BB;&#x6761;&#x4EF6;&#x4E0B;&#x63A8;&#x8FDB;&#x5176;&#x4ED6;&#x5DE5;&#x4F5C;
</code></pre>
<p>&#x4EBA;&#x5DE5;&#x5728;&#x6267;&#x884C;&#x671F;&#x95F4;&#x5C31;&#x80FD;&#x53C2;&#x4E0E;&#xFF0C;&#x754C;&#x9762;&#x6309; Feature &#x805A;&#x7126;&#x56DB;&#x9879;&#xFF1A;</p>
<pre><code class="language-text">Feature
&#x251C;&#x2500; &#x5F53;&#x524D;&#x6210;&#x679C;&#xFF1A;&#x53EF;&#x8FD0;&#x884C;&#x7ED3;&#x679C;&#x3001;&#x4EE3;&#x7801;&#x5DEE;&#x5F02;&#x4E0E;&#x76F8;&#x5173;&#x4EA7;&#x7269;
&#x251C;&#x2500; &#x9A8C;&#x6536;&#x60C5;&#x51B5;&#xFF1A;&#x5DF2;&#x9A8C;&#x8BC1;&#x3001;&#x5F85;&#x9A8C;&#x8BC1;&#x4E0E;&#x5F85;&#x590D;&#x6838;&#x7684;&#x8981;&#x6C42;
&#x251C;&#x2500; &#x963B;&#x585E;&#x95EE;&#x9898;&#xFF1A;&#x7F3A;&#x5C11;&#x4EC0;&#x4E48;&#xFF0C;&#x5F71;&#x54CD;&#x54EA;&#x90E8;&#x5206;&#xFF0C;&#x9700;&#x8981;&#x8C01;&#x51B3;&#x5B9A;
&#x2514;&#x2500; &#x4FEE;&#x8BA2;&#x8BB0;&#x5F55;&#xFF1A;&#x53CD;&#x9988;&#x3001;&#x5B9E;&#x9645;&#x6539;&#x52A8;&#x548C;&#x518D;&#x6B21;&#x9A8C;&#x8BC1;
</code></pre>
<p>&#x5F85;&#x51B3;&#x3001;&#x53D7;&#x963B;&#x548C;&#x5F85;&#x5BA1;&#x6838;&#x4E8B;&#x9879;&#x4F18;&#x5148;&#x5C55;&#x793A;&#x3002;&#x9700;&#x8981;&#x4EBA;&#x5224;&#x65AD;&#x65F6;&#xFF0C;&#x8BF4;&#x660E;&#x95EE;&#x9898;&#x53CA;&#x5F71;&#x54CD;&#xFF0C;&#x5E76;&#x9644;&#x5BF9;&#x5E94;&#x7ED3;&#x679C;&#x548C;&#x8BC1;&#x636E;&#xFF1B;&#x76F8;&#x5173;&#x95EE;&#x9898;&#x5408;&#x5E76;&#x63D0;&#x9192;&#xFF0C;&#x5B8C;&#x6574;&#x8FC7;&#x7A0B;&#x6309;&#x9700;&#x5C55;&#x5F00;&#xFF0C;&#x63A7;&#x5236;&#x788E;&#x7247;&#x5316;&#x6253;&#x6270;&#x3002;</p>
<p>Review &#x7ED1;&#x5B9A;&#x660E;&#x786E;&#x5019;&#x9009;&#xFF0C;&#x8BC4;&#x5BA1;&#x671F;&#x95F4;&#x4FDD;&#x6301;&#x88AB;&#x5BA1;&#x7248;&#x672C;&#x7A33;&#x5B9A;&#x3002;&#x53CD;&#x9988;&#x56DE;&#x5230;&#x539F; Feature &#x4FEE;&#x8BA2;&#xFF1B;&#x65E0;&#x4EBA;&#x56DE;&#x5E94;&#x4ECD;&#x662F;&#x5F85;&#x786E;&#x8BA4;&#xFF0C;&#x4E0D;&#x89C6;&#x4E3A;&#x6279;&#x51C6;&#x3002;</p>
<p>UI &#x9884;&#x89C8;&#x53EF;&#x4EE5;&#x5148;&#x63D0;&#x4F9B;&#x53CD;&#x9988;&#xFF0C;&#x4F46;&#x76EE;&#x6807;&#x5305;&#x542B;&#x771F;&#x5B9E;&#x6570;&#x636E;&#x548C;&#x6743;&#x9650;&#x884C;&#x4E3A;&#x65F6;&#xFF0C;&#x4E1A;&#x52A1;&#x9A8C;&#x6536;&#x4ECD;&#x5F85;&#x5B8C;&#x6210;&#x3002;&#x5C40;&#x90E8;&#x6210;&#x679C;&#x3001;Feature &#x5B8C;&#x6210;&#x4E0E;&#x72EC;&#x7ACB;&#x53D1;&#x5E03;&#x5206;&#x522B;&#x5224;&#x65AD;&#xFF0C;&#x6CA1;&#x6709;&#x8BC1;&#x636E;&#x7684;&#x8981;&#x6C42;&#x4FDD;&#x6301;&#x672A;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x5171;&#x4EAB;&#x63A5;&#x53E3;&#x3001;&#x7EC4;&#x4EF6;&#x6216;&#x51B3;&#x5B9A;&#x53D8;&#x5316;&#x65F6;&#xFF0C;&#x5B9A;&#x4F4D;&#x76F8;&#x5173; Feature &#x4FEE;&#x8BA2;&#x4E0E;&#x590D;&#x9A8C;&#xFF1B;&#x5404;&#x7247;&#x5B8C;&#x6210;&#x540E;&#x4ECD;&#x9700;&#x5FC5;&#x8981;&#x7684;&#x7EC4;&#x5408;&#x9A8C;&#x6536;&#x3002;&#x8BE6;&#x7EC6;&#x8F93;&#x5165;&#x7559;&#x5B58;&#x3001;&#x5019;&#x9009;&#x5173;&#x8054;&#x548C;&#x53CD;&#x9988;&#x5904;&#x7406;&#x89C1;<a href="./material-first/Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%BB%BB%E5%8A%A1%E4%BF%AE%E8%AE%A2%E4%B8%8E%E7%9F%A5%E8%AF%86%E6%BC%94%E8%BF%9B%E6%9C%BA%E5%88%B6.md">&#x4EFB;&#x52A1;&#x4FEE;&#x8BA2;&#x4E0E;&#x77E5;&#x8BC6;&#x6F14;&#x8FDB;&#x673A;&#x5236;</a>&#x3002;</p>
<h2 id="&#x516D;&#x3001;&#x4ECE;&#x4EA4;&#x4ED8;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;"><a href="#&#x516D;&#x3001;&#x4ECE;&#x4EA4;&#x4ED8;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;"></a>&#x516D;&#x3001;&#x4ECE;&#x4EA4;&#x4ED8;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;</h2>
<p>&#x6267;&#x884C;&#x4E2D;&#x7684;&#x4FEE;&#x6B63;&#x6539;&#x5584;&#x5F53;&#x524D; Feature&#xFF1B;&#x65B9;&#x6CD5;&#x63D0;&#x70BC;&#x6539;&#x5584;&#x540E;&#x7EED;&#x540C;&#x7C7B;&#x4EFB;&#x52A1;&#xFF1A;</p>
<pre><code class="language-text">Feature &#x7684;&#x5931;&#x8D25;&#x3001;&#x53CD;&#x9988;&#x4E0E;&#x4FEE;&#x8BA2;
  &#x2192; &#x63D0;&#x70BC;&#x5019;&#x9009;&#x7B56;&#x7565; / Skill / &#x5C40;&#x90E8; Flow
  &#x2192; &#x4EBA;&#x5DE5; Review &#x2192; &#x65B0; Feature &#x9A8C;&#x8BC1;
  &#x2192; &#x4FDD;&#x7559;&#x3001;&#x4FEE;&#x8BA2;&#x6216;&#x64A4;&#x56DE;
</code></pre>
<p>&#x590D;&#x76D8;&#x4EE5; Feature &#x4E3A;&#x5165;&#x53E3;&#xFF0C;&#x56DE;&#x67E5;&#x5B9E;&#x9645;&#x91C7;&#x7528;&#x7684;&#x65B9;&#x6CD5;&#x4E0E;&#x73AF;&#x5883;&#x7ED3;&#x679C;&#x3002;&#x4E00;&#x6B21;&#x6210;&#x529F;&#x4E0D;&#x76F4;&#x63A5;&#x8BC1;&#x660E;&#x65B9;&#x6CD5;&#x6709;&#x6548;&#xFF0C;&#x591A;&#x56E0;&#x7D20;&#x6DF7;&#x6742;&#x65F6;&#x4FDD;&#x7559;&#x672A;&#x77E5;&#xFF1B;&#x91C7;&#x96C6;&#x53E3;&#x5F84;&#x548C;&#x77E5;&#x8BC6;&#x6548;&#x679C;&#x5224;&#x65AD;&#x6CBF;&#x7528;&#x524D;&#x8FF0;&#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#x65B9;&#x6848;&#x3002;</p>
<p>&#x6C89;&#x6DC0;&#x7684;&#x662F;&#x9002;&#x7528;&#x6761;&#x4EF6;&#x660E;&#x786E;&#x3001;&#x53EF;&#x4EE5;&#x8C03;&#x6574;&#x7684;&#x4EA4;&#x4ED8;&#x65B9;&#x6CD5;&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x4ECD;&#x9700;&#x4EA7;&#x751F;&#x81EA;&#x5DF1;&#x7684;&#x9A8C;&#x8BC1;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x4E03;&#x3001;&#x9996;&#x8F6E;&#x600E;&#x6837;&#x843D;&#x5730;"><a href="#&#x4E03;&#x3001;&#x9996;&#x8F6E;&#x600E;&#x6837;&#x843D;&#x5730;"></a>&#x4E03;&#x3001;&#x9996;&#x8F6E;&#x600E;&#x6837;&#x843D;&#x5730;</h2>
<pre><code class="language-text">&#x4E00;&#x7247;&#x95ED;&#x73AF; &#x2192; &#x7B2C;&#x4E8C;&#x7247;&#x68C0;&#x67E5;&#x5171;&#x4EAB;&#x4E0E;&#x7EC4;&#x5408; &#x2192; &#x9694;&#x79BB;&#x540E;&#x5E76;&#x884C; &#x2192; &#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x590D;&#x7528;&#x65B9;&#x6CD5;
</code></pre>
<p>&#x5148;&#x4ECE;&#x771F;&#x5B9E;&#x9700;&#x6C42;&#x9009;&#x4E00;&#x7247;&#xFF0C;&#x7528;&#x53EF;&#x7528;&#x7684; Agent&#x3001;&#x5DE5;&#x7A0B;&#x73AF;&#x5883;&#x548C;&#x4E00;&#x8F6E;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#x8DD1;&#x901A;&#xFF0C;&#x518D;&#x589E;&#x52A0;&#x7B2C;&#x4E8C;&#x7247;&#x3002;&#x5207;&#x7247;&#x8D8A;&#x5C0F;&#xFF0C;&#x8FB9;&#x754C;&#x3001;&#x8BC4;&#x5BA1;&#x548C;&#x96C6;&#x6210;&#x7BA1;&#x7406;&#x4E5F;&#x53EF;&#x80FD;&#x8D8A;&#x591A;&#xFF1B;&#x6839;&#x636E;&#x5B9E;&#x9645;&#x53CD;&#x9988;&#x8C03;&#x6574;&#x7C92;&#x5EA6;&#xFF0C;&#x518D;&#x6269;&#x5C55;&#x81EA;&#x52A8;&#x5316;&#x3002;</p>
<p>&#x89C2;&#x5BDF;&#x4EBA;&#x7B49;&#x5F85;&#x53EF;&#x5224;&#x65AD;&#x6210;&#x679C;&#x7684;&#x65F6;&#x95F4;&#x3001;&#x8BC4;&#x5BA1;&#x6295;&#x5165;&#x3001;&#x53CD;&#x9988;&#x751F;&#x6548;&#x65F6;&#x95F4;&#x548C;&#x91CD;&#x505A;&#x8303;&#x56F4;&#xFF0C;&#x540C;&#x65F6;&#x6838;&#x5BF9;&#x6574;&#x4F53;&#x9700;&#x6C42;&#x7684;&#x9A8C;&#x6536;&#x3001;&#x6F0F;&#x9A8C;&#x4E0E;&#x603B;&#x6210;&#x672C;&#x3002;&#x672A;&#x5B8C;&#x6210;&#x9879;&#x59CB;&#x7EC8;&#x53EF;&#x89C1;&#xFF0C;&#x907F;&#x514D;&#x4EE5;&#x5C40;&#x90E8;&#x9AD8;&#x901A;&#x8FC7;&#x7387;&#x63A9;&#x76D6;&#x9057;&#x6F0F;&#x6216;&#x7EC4;&#x5408;&#x95EE;&#x9898;&#x3002;</p>
`,F=[{level:1,title:"Feature 驱动的 Agent 开发：垂直交付与局部反馈闭环",children:[{level:2,title:"一、背景",children:[]},{level:2,title:"二、核心思路",children:[]},{level:2,title:"三、怎样划分 Feature",children:[]},{level:2,title:"四、怎样完成一片垂直交付",children:[{level:3,title:"共享上下文，局部记录",children:[]},{level:3,title:"按需执行，局部等待",children:[]}]},{level:2,title:"五、人工怎样跟踪与验收",children:[]},{level:2,title:"六、从交付反馈到方法迭代",children:[]},{level:2,title:"七、首轮怎样落地",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
