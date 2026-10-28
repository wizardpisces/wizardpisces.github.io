const x={title:"Agent 改进工作空间：上下文设计与反馈采集",description:"围绕真实任务的反馈与修正过程组织上下文，帮助 Skill Creator 定位优化点并提炼可复用经验。"},E=`<h1 id="Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;"><a href="#Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;"></a>Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;</h1>
<h2 id="&#x6838;&#x5FC3;"><a href="#&#x6838;&#x5FC3;"></a>&#x6838;&#x5FC3;</h2>
<p>Skill Creator Workspace &#x5C06;&#x4EFB;&#x52A1;&#x3001;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x3001;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x548C;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x7EC4;&#x7EC7;&#x8D77;&#x6765;&#xFF0C;&#x8BA9; Creator &#x770B;&#x6E05;&#x54EA;&#x91CC;&#x5931;&#x8D25;&#x3001;&#x5982;&#x4F55;&#x4FEE;&#x6B63;&#x3001;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x6539;&#x5584;&#xFF0C;&#x518D;&#x7ED3;&#x5408;&#x5DE5;&#x7A0B;&#x5DF2;&#x6709;&#x7ECF;&#x9A8C;&#x751F;&#x6210;&#x5019;&#x9009; Skill&#x3002;</p>
<p>&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#x7684;&#x4F9D;&#x636E;&#x9700;&#x8981;&#x4ECE;&#x201C;&#x6A21;&#x578B;&#x8BA4;&#x4E3A;&#x81EA;&#x5DF1;&#x7684;&#x9009;&#x62E9;&#x5408;&#x7406;&#x201D;&#xFF0C;&#x8F6C;&#x5411;&#x201C;&#x8FD9;&#x6B21;&#x9009;&#x62E9;&#x5728;&#x73AF;&#x5883;&#x4E2D;&#x4EA7;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x7ED3;&#x679C;&#x201D;&#x3002;&#x53EA;&#x8BB0;&#x5F55;&#x9009;&#x62E9;&#x7406;&#x7531;&#x548C;&#x6700;&#x7EC8;&#x603B;&#x7ED3;&#xFF0C;&#x5F88;&#x96BE;&#x627E;&#x5230;&#x6539;&#x8FDB;&#x65B9;&#x5411;&#xFF1B;&#x4FDD;&#x7559;&#x771F;&#x5B9E;&#x8F93;&#x51FA;&#x3001;&#x9A8C;&#x6536;&#x4F9D;&#x636E;&#x548C;&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x7684;&#x91CD;&#x8BD5;&#xFF0C;&#x624D;&#x80FD;&#x770B;&#x6E05;&#x54EA;&#x4E9B;&#x8DEF;&#x5F84;&#x53CD;&#x590D;&#x5931;&#x8D25;&#x3001;&#x54EA;&#x4E9B;&#x8C03;&#x6574;&#x6539;&#x5584;&#x4E86;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x4E0A;&#x4E0B;&#x6587;&#x8303;&#x56F4;"><a href="#&#x4E0A;&#x4E0B;&#x6587;&#x8303;&#x56F4;"></a>&#x4E0A;&#x4E0B;&#x6587;&#x8303;&#x56F4;</h2>
<table>
<thead>
<tr>
<th style="text-align:left">&#x4E0A;&#x4E0B;&#x6587;</th>
<th style="text-align:left">&#x529F;&#x80FD;</th>
<th style="text-align:left">&#x5E2E;&#x52A9;&#x56DE;&#x7B54;&#x4EC0;&#x4E48;</th>
<th style="text-align:left">&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">&#x539F;&#x59CB;&#x4EFB;&#x52A1;&#x3001;&#x9A8C;&#x6536;&#x76EE;&#x6807;&#x4E0E;&#x7EA6;&#x675F;</td>
<td style="text-align:left">&#x8FD8;&#x539F; Case</td>
<td style="text-align:left">&#x5E94;&#x8BE5;&#x5B8C;&#x6210;&#x4EC0;&#x4E48;&#xFF0C;&#x4EC0;&#x4E48;&#x624D;&#x7B97;&#x6210;&#x529F;&#xFF0C;</td>
<td style="text-align:left">&#x8FD8;&#x539F; figma &#xFF0C;&#x9A8C;&#x8BC1;&#x622A;&#x56FE;&#x5BF9;&#x6BD4;</td>
</tr>
<tr>
<td style="text-align:left">&#x5404;&#x8F6E;&#x7ED3;&#x679C;&#x3001;&#x4EBA;&#x5DE5;&#x8BC4;&#x8BBA;&#x548C;&#x4FEE;&#x8BA2;</td>
<td style="text-align:left">&#x505A; reward</td>
<td style="text-align:left">&#x4EBA;&#x6307;&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;Agent &#x5B9E;&#x9645;&#x6539;&#x53D8;&#x4E86;&#x4EC0;&#x4E48;</td>
<td style="text-align:left">&#x4EA4;&#x4E92;&#x8282;&#x70B9;&#xFF08;&#x6BD4;&#x5982;&#x5D4C;&#x5165;&#x7684; codex &#x4EA4;&#x4E92;&#xFF09;</td>
</tr>
<tr>
<td style="text-align:left">&#x73AF;&#x5883;&#x9A8C;&#x8BC1;&#x4E0E;&#x53CD;&#x9988;&#x91CD;&#x8BD5;&#x6458;&#x8981;</td>
<td style="text-align:left">&#x6838;&#x5B9E; reward</td>
<td style="text-align:left">&#x54EA;&#x4E9B;&#x5C1D;&#x8BD5;&#x5931;&#x8D25;&#xFF0C;&#x54EA;&#x4E9B;&#x8C03;&#x6574;&#x4EA7;&#x751F;&#x4E86;&#x53EF;&#x89C2;&#x5BDF;&#x6539;&#x5584;&#xFF0C;</td>
<td style="text-align:left">&#x8DD1; test Case</td>
</tr>
<tr>
<td style="text-align:left">&#x5B8C;&#x6574;&#x8F68;&#x8FF9;&#x4E0E;&#x5B9E;&#x9645;&#x4EA7;&#x7269;</td>
<td style="text-align:left">&#x6EAF;&#x6E90;</td>
<td style="text-align:left">&#x6458;&#x8981;&#x662F;&#x5426;&#x51C6;&#x786E;&#xFF0C;&#x5173;&#x952E;&#x7EC6;&#x8282;&#x80FD;&#x5426;&#x56DE;&#x67E5;&#xFF0C;&#x8F85;&#x52A9;&#x6EAF;&#x6E90;</td>
<td style="text-align:left">&#x6BD4;&#x5982; langfuse.log</td>
</tr>
<tr>
<td style="text-align:left">&#x5DE5;&#x7A0B;&#x72B6;&#x6001;&#x4E0E;&#x65E2;&#x6709; Skills</td>
<td style="text-align:left">&#x9A8C;&#x8BC1; skill</td>
<td style="text-align:left">&#x5F53;&#x65F6;&#x6709;&#x4EC0;&#x4E48;&#x80FD;&#x529B;&#x548C;&#x7EA6;&#x675F;&#xFF0C;&#x5DF2;&#x6709;&#x7ECF;&#x9A8C;&#x4E3A;&#x4F55;&#x672A;&#x8986;&#x76D6;</td>
<td style="text-align:left">conventions</td>
</tr>
</tbody>
</table>
<p>&#x4E0A;&#x4E0B;&#x6587;&#x6309;&#x4EFB;&#x52A1;&#x548C;&#x7ED3;&#x679C;&#x7248;&#x672C;&#x5173;&#x8054;&#xFF0C;&#x4FDD;&#x7559;&#x6267;&#x884C;&#x65F6;&#x7684;&#x5DE5;&#x7A0B;&#x4E0E; Skill &#x72B6;&#x6001;&#x3002;&#x5B8C;&#x6574;&#x8F68;&#x8FF9;&#x63D0;&#x4F9B;&#x4E8B;&#x5B9E;&#xFF0C;&#x9A8C;&#x8BC1;&#x6458;&#x8981;&#x5B9A;&#x4F4D;&#x4F18;&#x5316;&#x70B9;&#xFF0C;&#x5DE5;&#x7A0B;&#x548C;&#x5DF2;&#x6709; Skills &#x63D0;&#x4F9B;&#x7EA6;&#x675F;&#xFF1B;Creator &#x6309;&#x9700;&#x8BFB;&#x53D6;&#x76F8;&#x5173;&#x6750;&#x6599;&#x3002;</p>
<h2 id="&#x4E24;&#x4E2A;&#x95ED;&#x73AF;"><a href="#&#x4E24;&#x4E2A;&#x95ED;&#x73AF;"></a>&#x4E24;&#x4E2A;&#x95ED;&#x73AF;</h2>
<p>&#x4EFB;&#x52A1;&#x5185;&#xFF0C;&#x901A;&#x8FC7;&#x5B9E;&#x9645;&#x6267;&#x884C;&#x548C;&#x53CD;&#x9988;&#x4FEE;&#x6B63;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">Plan / Coding &#x2192; &#x73AF;&#x5883;&#x7ED3;&#x679C; &#x2192; &#x68C0;&#x67E5;&#x6216;&#x4EBA;&#x5DE5;&#x8BC4;&#x8BBA; &#x2192; &#x4FEE;&#x6539; &#x2192; &#x518D;&#x6B21;&#x9A8C;&#x8BC1;
</code></pre>
<p>&#x4EFB;&#x52A1;&#x540E;&#xFF0C;&#x4EBA;&#x5DE5;&#x9A71;&#x52A8;&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#xFF1A;</p>
<pre><code class="language-text">&#x4E0A;&#x8FF0;&#x4E0A;&#x4E0B;&#x6587; &#x2192; Skill Creator Workspace &#x2192; &#x5019;&#x9009;&#x7ECF;&#x9A8C;
&#x2192; &#x4EBA;&#x5DE5; Review &#x2192; &#x65B0; Case &#x9A8C;&#x8BC1; &#x2192; &#x66F4;&#x65B0;&#x4E0B;&#x4E00;&#x6B21;&#x4EFB;&#x52A1;&#x53EF;&#x7528;&#x7684; Skill
</code></pre>
<p>&#x4FDD;&#x7559;&#x6BCF;&#x8F6E;&#x7ED3;&#x679C;&#x3001;&#x8BC4;&#x8BBA;&#x3001;&#x81EA;&#x68C0;&#x548C;&#x5B9E;&#x9645;&#x4FEE;&#x6539;&#x3002;&#x4EBA;&#x5DE5;&#x4E0D;&#x53EA;&#x662F;&#x6279;&#x51C6;&#x5019;&#x9009;&#xFF0C;&#x8FD8;&#x4F1A;&#x6307;&#x51FA;&#x95EE;&#x9898;&#x3001;&#x7EA0;&#x6B63;&#x5F52;&#x56E0;&#x3001;&#x8865;&#x5145;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#x548C;&#x4FEE;&#x6539;&#x7B56;&#x7565;&#x3002;&#x8FD9;&#x4E9B;&#x53CD;&#x9988;&#x4E0E;&#x5BF9;&#x5E94;&#x4FEE;&#x8BA2;&#x540C;&#x6837;&#x8FDB;&#x5165; Workspace&#xFF0C;&#x5E2E;&#x52A9; Creator &#x7406;&#x89E3;&#x7ECF;&#x9A8C;&#x4E3A;&#x4F55;&#x88AB;&#x91C7;&#x7EB3;&#x3001;&#x8C03;&#x6574;&#x6216;&#x5426;&#x5B9A;&#x3002;</p>
<p>&#x968F;&#x7740;&#x8FD9;&#x4E9B;&#x8FC7;&#x7A0B;&#x79EF;&#x7D2F;&#xFF0C;&#x53EF;&#x4EE5;&#x8FDB;&#x4E00;&#x6B65;&#x63D0;&#x70BC; Creator &#x81EA;&#x8EAB;&#x7684;&#x5206;&#x6790;&#x7ECF;&#x9A8C;&#xFF1A;&#x600E;&#x6837;&#x5B9A;&#x4F4D;&#x95EE;&#x9898;&#x3001;&#x9009;&#x62E9;&#x8BC1;&#x636E;&#x3001;&#x5212;&#x5B9A;&#x9002;&#x7528;&#x8303;&#x56F4;&#x3002;&#x7531;&#x4EBA;&#x5DE5;&#x6307;&#x5BFC;&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#xFF0C;&#x518D;&#x4ECE;&#x6307;&#x5BFC;&#x8FC7;&#x7A0B;&#x6539;&#x8FDB; Creator&#x3002;</p>
<h2 id="&#x5982;&#x4F55;&#x91C7;&#x96C6;&#x53EF;&#x4F18;&#x5316;&#x7684;&#x8F68;&#x8FF9;"><a href="#&#x5982;&#x4F55;&#x91C7;&#x96C6;&#x53EF;&#x4F18;&#x5316;&#x7684;&#x8F68;&#x8FF9;"></a>&#x5982;&#x4F55;&#x91C7;&#x96C6;&#x53EF;&#x4F18;&#x5316;&#x7684;&#x8F68;&#x8FF9;</h2>
<p>&#x901A;&#x8FC7;&#x5DF2;&#x6709; MCP&#xFF0C;&#x91CD;&#x70B9;&#x91C7;&#x96C6;&#x5173;&#x952E;&#x73AF;&#x5883;&#x9A8C;&#x8BC1;&#x4E2D;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF1A;</p>
<p><strong>&#x5F53;&#x524D;&#x60C5;&#x51B5;&#x4E0E;&#x8F93;&#x5165; &#x2192; &#x9A8C;&#x8BC1;&#x76EE;&#x6807; &#x2192; &#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x4E0E;&#x5224;&#x5B9A; &#x2192; &#x5177;&#x4F53;&#x5931;&#x8D25;&#x70B9; &#x2192; &#x6839;&#x636E;&#x53CD;&#x9988;&#x505A;&#x8FC7;&#x7684;&#x8C03;&#x6574; &#x2192; &#x518D;&#x6B21;&#x9A8C;&#x8BC1;&#x3002;</strong></p>
<p>&#x91CD;&#x70B9;&#x5173;&#x6CE8;&#x53CD;&#x590D;&#x5931;&#x8D25;&#x3001;&#x65E0;&#x6548;&#x91CD;&#x8BD5;&#x3001;&#x4EBA;&#x5DE5;&#x7EA0;&#x6B63;&#x548C;&#x6700;&#x7EC8;&#x6539;&#x5584;&#xFF0C;&#x4E5F;&#x4FDD;&#x7559;&#x9996;&#x6B21;&#x6210;&#x529F;&#x4F5C;&#x4E3A;&#x5BF9;&#x7167;&#x3002;&#x6BCF;&#x6B21;&#x5224;&#x5B9A;&#x4FDD;&#x7559;&#x6807;&#x51C6;&#x3001;&#x6765;&#x6E90;&#x548C;&#x8BC1;&#x636E;&#x5165;&#x53E3;&#xFF0C;&#x4FBF;&#x4E8E;&#x56DE;&#x67E5;&#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x4E0E;&#x4EA7;&#x7269;&#x3002;</p>
<p>&#x9A8C;&#x8BC1;&#x6458;&#x8981;&#x76F8;&#x5F53;&#x4E8E;&#x5B8C;&#x6574;&#x8F68;&#x8FF9;&#x4E2D;&#x7684;&#x4F18;&#x5316;&#x70B9;&#x7D22;&#x5F15;&#xFF1A;&#x5148;&#x5E2E;&#x52A9; Creator &#x627E;&#x5230;&#x503C;&#x5F97;&#x590D;&#x76D8;&#x7684;&#x5931;&#x8D25;&#x4E0E;&#x4FEE;&#x6B63;&#x7247;&#x6BB5;&#xFF0C;&#x518D;&#x56DE;&#x67E5;&#x5F53;&#x65F6;&#x7684;&#x8F93;&#x5165;&#x3001;&#x5DE5;&#x5177;&#x8F93;&#x51FA;&#x3001;&#x4EE3;&#x7801;&#x53D8;&#x5316;&#x548C;&#x8BC4;&#x5224;&#x4F9D;&#x636E;&#x3002;&#x8FD9;&#x6837;&#x65E2;&#x80FD;&#x805A;&#x7126;&#x95EE;&#x9898;&#xFF0C;&#x53C8;&#x80FD;&#x6838;&#x5BF9;&#x6458;&#x8981;&#x662F;&#x5426;&#x9057;&#x6F0F;&#x4E86;&#x5F71;&#x54CD;&#x7ED3;&#x679C;&#x7684;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x6D4B;&#x8BD5;&#x3001;&#x63A5;&#x53E3;&#x8FD0;&#x884C;&#x3001;Mock&#x3001;&#x6D4F;&#x89C8;&#x5668;&#x3001;Native &#x89C2;&#x5BDF;&#x548C;&#x4EBA;&#x5DE5;&#x68C0;&#x67E5;&#x90FD;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x53CD;&#x9988;&#x3002;RN Screenshot Perception Layer &#x63D0;&#x4F9B;&#x5176;&#x4E2D;&#x7684; Native &#x8FD0;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
<h2 id="Workspace &#x5982;&#x4F55;&#x670D;&#x52A1; Agent"><a href="#Workspace &#x5982;&#x4F55;&#x670D;&#x52A1; Agent"></a>Workspace &#x5982;&#x4F55;&#x670D;&#x52A1; Agent</h2>
<p>Creator &#x6CBF;&#x53CD;&#x9988;&#x5B9A;&#x4F4D;&#x76F8;&#x5173;&#x8F68;&#x8FF9;&#xFF0C;&#x68C0;&#x67E5;&#x4EE3;&#x7801;&#x4E0E;&#x4EA7;&#x7269;&#xFF0C;&#x6BD4;&#x8F83;&#x5404;&#x8F6E;&#x7ED3;&#x679C;&#xFF0C;&#x5E76;&#x7ED3;&#x5408;&#x5DF2;&#x6709; Skills &#x81EA;&#x4E3B;&#x5206;&#x6790;&#xFF1A;&#x8BE5;&#x6539;&#x8FDB;&#x7684;&#x662F;&#x5DE5;&#x7A0B;&#x4FE1;&#x606F;&#x3001;&#x5DE5;&#x5177;&#x80FD;&#x529B;&#x3001;&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;&#xFF0C;&#x8FD8;&#x662F;&#x53EF;&#x590D;&#x7528;&#x7684;&#x6267;&#x884C;&#x7B56;&#x7565;&#x3002;</p>
<p>&#x6709;&#x53EF;&#x590D;&#x7528;&#x7ECF;&#x9A8C;&#x65F6;&#xFF0C;&#x4F18;&#x5148;&#x66F4;&#x65B0;&#x9002;&#x7528;&#x7684;&#x65E2;&#x6709; Skill&#xFF1B;&#x5019;&#x9009;&#x7ECF;&#x8FC7;&#x4EBA;&#x5DE5; Review&#xFF0C;&#x518D;&#x7528;&#x65B0;&#x7684; Case &#x9A8C;&#x8BC1;&#x6548;&#x679C;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x6807;&#x9898;&#x680F;&#x521D;&#x7248;&#x9A8C;&#x8BC1;&#x5931;&#x8D25;&#xFF0C;&#x8C03;&#x6574;&#x6837;&#x5F0F;&#x540E;&#x4ECD;&#x5931;&#x8D25;&#xFF0C;&#x66F4;&#x6362;&#x7EC4;&#x4EF6;&#x540E;&#x901A;&#x8FC7;&#x3002;&#x6458;&#x8981;&#x5B9A;&#x4F4D;&#x8FD9;&#x4E09;&#x8F6E;&#x5C1D;&#x8BD5;&#xFF0C;Creator &#x518D;&#x67E5;&#x5B8C;&#x6574;&#x8F68;&#x8FF9;&#x4E0E;&#x5DE5;&#x7A0B;&#x7528;&#x6CD5;&#xFF0C;&#x5224;&#x65AD;&#x95EE;&#x9898;&#x6765;&#x81EA;&#x7EC4;&#x4EF6;&#x80FD;&#x529B;&#x3001;&#x5E03;&#x5C40;&#x5904;&#x7406;&#x8FD8;&#x662F;&#x4FE1;&#x606F;&#x7F3A;&#x5931;&#xFF0C;&#x5E76;&#x68C0;&#x67E5;&#x9A8C;&#x8BC1;&#x6761;&#x4EF6;&#x662F;&#x5426;&#x4E00;&#x81F4;&#x3002;&#x7531;&#x6B64;&#x63D0;&#x70BC;&#x6709;&#x4F9D;&#x636E;&#x7684;&#x9009;&#x578B;&#x4E0E;&#x9A8C;&#x8BC1;&#x7B56;&#x7565;&#xFF0C;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x628A;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x4FEE;&#x6539;&#x5199;&#x6210;&#x7ECF;&#x9A8C;&#x3002;</p>
<h2 id="&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;"><a href="#&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;"></a>&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;</h2>
<p>&#x5148;&#x7528;&#x771F;&#x5B9E; Case &#x68C0;&#x67E5;&#x4E0A;&#x4E0B;&#x6587;&#x80FD;&#x5426;&#x652F;&#x6301;&#x5931;&#x8D25;&#x5B9A;&#x4F4D;&#x3001;&#x4FEE;&#x6B63;&#x6838;&#x67E5;&#x548C;&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x65B0; Case &#x7684;&#x6210;&#x529F;&#x7387;&#x3001;&#x4FEE;&#x6B63;&#x8F6E;&#x6570;&#x548C;&#x6210;&#x672C;&#x5224;&#x65AD;&#x6548;&#x679C;&#xFF0C;&#x6301;&#x7EED;&#x8C03;&#x6574;&#x91C7;&#x96C6;&#x91CD;&#x70B9;&#x4E0E; Workspace&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;"><a href="#&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;"></a>&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;</h2>
<ul>
<li><a href="./%E9%9D%A2%E5%90%91%20RSI%20%E7%9A%84%20Coding%20Agent%EF%BC%9A%E4%BB%8E%E4%BB%BB%E5%8A%A1%E5%8F%8D%E9%A6%88%E5%88%B0%E6%96%B9%E6%B3%95%E8%BF%AD%E4%BB%A3.md">&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;</a>&#xFF1A;&#x5DE5;&#x7A0B;&#x81EA;&#x6539;&#x8FDB;&#x7684;&#x8303;&#x5F0F;&#x4E0E;&#x673A;&#x5236;&#x3002;</li>
<li><a href="https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents">Anthropic Agent Evals</a>&#xFF1A;&#x533A;&#x5206;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x4E0E;&#x5B9E;&#x9645;&#x7ED3;&#x679C;&#x3002;</li>
<li><a href="https://arxiv.org/abs/2510.04618">ACE</a>&#xFF1A;&#x5229;&#x7528;&#x6267;&#x884C;&#x53CD;&#x9988;&#x53CD;&#x601D;&#x5E76;&#x589E;&#x91CF;&#x6574;&#x7406;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><a href="https://arxiv.org/abs/2502.10325">AgentPRM</a>&#xFF1A;&#x8FC7;&#x7A0B;&#x53CD;&#x9988;&#x3001;&#x7B56;&#x7565;&#x4F18;&#x5316;&#x4E0E;&#x5956;&#x52B1;&#x4F30;&#x8BA1;&#x7684;&#x8FB9;&#x754C;&#x3002;</li>
<li><a href="./RN%20Screenshot%20Perception%20Layer%EF%BC%9A%E4%B8%8B%E4%B8%80%E9%98%B6%E6%AE%B5%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88.md">RN Screenshot Perception Layer</a>&#xFF1A;Native &#x73AF;&#x5883;&#x89C2;&#x5BDF;&#x3002;</li>
<li><a href="./%E5%B7%A5%E7%A8%8B%E9%A2%84%E6%8F%90%E7%82%BC%EF%BC%9A%E4%BB%8E%E5%B7%B2%E6%9C%89%E5%AE%9E%E7%8E%B0%E7%94%9F%E6%88%90%E5%8F%AF%E9%AA%8C%E8%AF%81%20Skills.md">&#x5DE5;&#x7A0B;&#x9884;&#x63D0;&#x70BC;&#xFF1A;&#x4ECE;&#x5DF2;&#x6709;&#x5B9E;&#x73B0;&#x751F;&#x6210;&#x53EF;&#x9A8C;&#x8BC1; Skills</a>&#xFF1A;&#x4EFB;&#x52A1;&#x5F00;&#x59CB;&#x524D;&#x7684;&#x5DE5;&#x7A0B;&#x77E5;&#x8BC6;&#x63D0;&#x70BC;&#xFF0C;&#x4E0E;&#x4EFB;&#x52A1;&#x540E;&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#x4E92;&#x8865;&#x3002;</li>
</ul>
`,F=[{level:1,title:"Agent 改进工作空间：上下文设计与反馈采集",children:[{level:2,title:"核心",children:[]},{level:2,title:"上下文范围",children:[]},{level:2,title:"两个闭环",children:[]},{level:2,title:"如何采集可优化的轨迹",children:[]},{level:2,title:"Workspace 如何服务 Agent",children:[]},{level:2,title:"验证方式",children:[]},{level:2,title:"参考与关联",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
