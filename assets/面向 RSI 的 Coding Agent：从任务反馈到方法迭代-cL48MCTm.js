const x={title:"面向 RSI 的 Coding Agent：从任务反馈到方法迭代",description:"以 RSI（递归自改进）为方向，将真实任务反馈转化为 Skill、Tool 与 Context 的改进，并进一步迭代 Skill Creator 的取证、筛选与验证方法。"},F=`<h1 id="&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;"><a href="#&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;"></a>&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;</h1>
<h2 id="&#x80CC;&#x666F;"><a href="#&#x80CC;&#x666F;"></a>&#x80CC;&#x666F;</h2>
<p>Coding Agent &#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x6B21;&#x4EFB;&#x52A1;&#x4E2D;&#x6839;&#x636E;&#x6D4B;&#x8BD5;&#x3001;&#x8FD0;&#x884C;&#x7ED3;&#x679C;&#x548C;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#x53CD;&#x590D;&#x4FEE;&#x6B63;&#x4EE3;&#x7801;&#xFF0C;&#x4F46;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x540E;&#xFF0C;&#x8FD9;&#x4E9B;&#x4FEE;&#x6B63;&#x672A;&#x5FC5;&#x6539;&#x53D8;&#x4E0B;&#x4E00;&#x6B21;&#x6267;&#x884C;&#x3002;&#x540C;&#x7C7B;&#x7EC4;&#x4EF6;&#x9009;&#x578B;&#x3001;&#x9A8C;&#x8BC1;&#x7F3A;&#x5931;&#x6216;&#x73AF;&#x5883;&#x8BEF;&#x5224;&#xFF0C;&#x4ECD;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x91CD;&#x65B0;&#x7EA0;&#x6B63;&#x3002;</p>
<p>RSI&#xFF08;Recursive Self-Improvement&#xFF0C;&#x9012;&#x5F52;&#x81EA;&#x6539;&#x8FDB;&#xFF09;&#x5173;&#x6CE8;&#x7684;&#x662F;&#xFF1A;&#x7CFB;&#x7EDF;&#x80FD;&#x5426;&#x6839;&#x636E;&#x53CD;&#x9988;&#x6539;&#x8FDB;&#x81EA;&#x8EAB;&#xFF0C;&#x5E76;&#x8FDB;&#x4E00;&#x6B65;&#x6539;&#x8FDB;&#x4EA7;&#x751F;&#x8FD9;&#x4E9B;&#x6539;&#x8FDB;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<p>&#x5728; Coding Agent &#x4E2D;&#xFF0C;&#x5DE5;&#x7A0B;&#x5207;&#x5165;&#x70B9;&#x662F;&#x5C06;&#x4EFB;&#x52A1;&#x4E2D;&#x7ECF;&#x8FC7;&#x9A8C;&#x8BC1;&#x7684;&#x6709;&#x6548;&#x53D8;&#x5316;&#x6C89;&#x6DC0;&#x5230; Skill / Tool / Context&#xFF0C;&#x518D;&#x7528;&#x63D0;&#x70BC;&#x4E0E;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x6539;&#x8FDB; Skill Creator &#x672C;&#x8EAB;&#x3002;</p>
<h2 id="&#x8303;&#x5F0F;&#x53D8;&#x5316;&#xFF1A;&#x4ECE;&#x4EA4;&#x4ED8;&#x7ED3;&#x679C;&#x5230;&#x6539;&#x8FDB;&#x6267;&#x884C;&#x7CFB;&#x7EDF;"><a href="#&#x8303;&#x5F0F;&#x53D8;&#x5316;&#xFF1A;&#x4ECE;&#x4EA4;&#x4ED8;&#x7ED3;&#x679C;&#x5230;&#x6539;&#x8FDB;&#x6267;&#x884C;&#x7CFB;&#x7EDF;"></a>&#x8303;&#x5F0F;&#x53D8;&#x5316;&#xFF1A;&#x4ECE;&#x4EA4;&#x4ED8;&#x7ED3;&#x679C;&#x5230;&#x6539;&#x8FDB;&#x6267;&#x884C;&#x7CFB;&#x7EDF;</h2>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x4F18;&#x5316;&#x5355;&#x5143;&#x4ECE;&#x4EA4;&#x4ED8;&#x4EE3;&#x7801;&#x6269;&#x5C55;&#x5230; Agent &#x7684;&#x6267;&#x884C;&#x7CFB;&#x7EDF;&#xFF0C;&#x518D;&#x6269;&#x5C55;&#x5230;&#x4EA7;&#x751F;&#x6539;&#x8FDB;&#x7684;&#x65B9;&#x6CD5;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x4FEE;&#x6B63;&#xFF1A;&#x6539;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;
&#x2514;&#x2500; &#x6539;&#x5584;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x7684;&#x7ED3;&#x679C;

&#x6267;&#x884C;&#x7CFB;&#x7EDF;&#x6539;&#x8FDB;&#xFF1A;&#x6539; Skill / Tool / Context&#xFF08;&#x542B;&#x5DE5;&#x7A0B;&#x4FE1;&#x606F;&#xFF09;
&#x2514;&#x2500; &#x6539;&#x5584;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x7684;&#x6267;&#x884C;&#x65B9;&#x5F0F;

&#x9012;&#x5F52;&#x6539;&#x8FDB;&#xFF1A;&#x6539; Skill Creator &#x7684;&#x53D6;&#x8BC1; / &#x7B5B;&#x9009; / &#x9A8C;&#x8BC1;&#x65B9;&#x6CD5;
&#x2514;&#x2500; &#x6539;&#x5584;&#x4E0B;&#x4E00;&#x8F6E;&#x5982;&#x4F55;&#x4EA7;&#x751F;&#x6539;&#x8FDB;
</code></pre>
<p>&#x8FDB;&#x6B65;&#x901A;&#x8FC7;&#x53EF;&#x590D;&#x7528;&#x7684;&#x7B56;&#x7565;&#x4E0E;&#x80FD;&#x529B;&#x7559;&#x4E0B;&#x6765;&#xFF0C;&#x7EE7;&#x7EED;&#x63A5;&#x53D7;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x7684;&#x53CD;&#x9988;&#x3002;</p>
<h2 id="&#x5DE5;&#x7A0B;&#x7ECF;&#x9A8C;&#x5982;&#x4F55;&#x88AB;&#x590D;&#x7528;"><a href="#&#x5DE5;&#x7A0B;&#x7ECF;&#x9A8C;&#x5982;&#x4F55;&#x88AB;&#x590D;&#x7528;"></a>&#x5DE5;&#x7A0B;&#x7ECF;&#x9A8C;&#x5982;&#x4F55;&#x88AB;&#x590D;&#x7528;</h2>
<pre><code class="language-text">&#x4EE3;&#x7801;&#x590D;&#x7528; &#x2192; &#x4F7F;&#x7528;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x3001;SDK&#x3001;Service &#x7B49;&#x5B9E;&#x73B0;
&#x51B3;&#x7B56;&#x590D;&#x7528; &#x2192; &#x6CBF;&#x7528;&#x7ECF;&#x8FC7;&#x9A8C;&#x8BC1;&#x7684;&#x9009;&#x578B;&#x3001;&#x7EC4;&#x7EC7;&#x65B9;&#x5F0F;&#x4E0E;&#x9A8C;&#x8BC1;&#x7B56;&#x7565;
</code></pre>
<p>Golden Path &#x662F;&#x9488;&#x5BF9;&#x540C;&#x7C7B;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x3001;&#x7ECF;&#x8FC7;&#x9A8C;&#x8BC1;&#x7684;&#x4F18;&#x5148;&#x8DEF;&#x5F84;&#xFF0C;&#x8BF4;&#x660E;&#x9002;&#x7528;&#x6761;&#x4EF6;&#x3001;&#x53C2;&#x8003;&#x5B9E;&#x73B0;&#x548C;&#x5141;&#x8BB8;&#x8C03;&#x6574;&#x7684;&#x8FB9;&#x754C;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; Skill &#x6216; Context &#x63D0;&#x4F9B;&#x7ED9; Agent&#x3002;</p>
<p>Asset &#x63D0;&#x4F9B;&#x53EF;&#x590D;&#x7528;&#x5B9E;&#x73B0;&#xFF0C;Contract &#x5B9A;&#x4E49;&#x7ED3;&#x679C;&#x8981;&#x6C42;&#xFF0C;Case &#x4FDD;&#x7559;&#x5B9E;&#x9645;&#x6267;&#x884C;&#x4E0E;&#x9A8C;&#x6536;&#x53CD;&#x9988;&#x3002;Agent &#x6839;&#x636E;&#x9700;&#x6C42;&#x91C7;&#x7528;&#x6216;&#x8C03;&#x6574;&#x8DEF;&#x5F84;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x7ED3;&#x679C;&#x4FEE;&#x8BA2;&#x6307;&#x5BFC;&#x548C;&#x9002;&#x7528;&#x8303;&#x56F4;&#x3002;</p>
<h2 id="&#x603B;&#x4F53;&#x95ED;&#x73AF;"><a href="#&#x603B;&#x4F53;&#x95ED;&#x73AF;"></a>&#x603B;&#x4F53;&#x95ED;&#x73AF;</h2>
<p>Coding &#x8D1F;&#x8D23;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#x5E76;&#x7559;&#x4E0B;&#x5B9E;&#x9645;&#x4EA4;&#x4E92;&#xFF1B;Post-coding &#x5BF9;&#x7167;&#x8FD9;&#x4E9B;&#x8BB0;&#x5F55;&#x4E0E;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#xFF0C;&#x63D0;&#x51FA;&#x53EF;&#x590D;&#x7528;&#x7684;&#x6539;&#x8FDB;&#x3002;&#x5019;&#x9009;&#x7ECF;&#x8FC7;&#x4EBA;&#x5DE5; Review &#x548C;&#x65B0;&#x4EFB;&#x52A1;&#x9A8C;&#x8BC1;&#xFF0C;&#x518D;&#x8FDB;&#x5165;&#x540E;&#x7EED;&#x6267;&#x884C;&#x3002;</p>
<pre><code class="language-text">&#x771F;&#x5B9E;&#x4EFB;&#x52A1;
  &#x2193;
&#x6267;&#x884C;&#x8F68;&#x8FF9; + &#x73AF;&#x5883;&#x7ED3;&#x679C; + &#x4EBA;&#x5DE5;&#x53CD;&#x9988;
  &#x2193;
&#x5BF9;&#x7167;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#x4E0E;&#x5DF2;&#x6709;&#x7ECF;&#x9A8C;
  &#x2193;
&#x5019;&#x9009;&#x6539;&#x8FDB; &#x2192; &#x4EBA;&#x5DE5; Review / &#x4FEE;&#x8BA2;
  &#x2193;
&#x65B0; Case &#x9A8C;&#x8BC1; + &#x65E2;&#x6709;&#x80FD;&#x529B;&#x56DE;&#x5F52;
  &#x251C;&#x2500; &#x6709;&#x6536;&#x76CA; &#x2192; &#x4FDD;&#x7559; &#x2192; &#x4E0B;&#x4E00;&#x8F6E;&#x4EFB;&#x52A1;
  &#x251C;&#x2500; &#x6709;&#x9000;&#x6B65; &#x2192; &#x4FEE;&#x8BA2; / &#x5220;&#x9664; &#x2192; &#x91CD;&#x65B0;&#x9A8C;&#x8BC1;
  &#x2514;&#x2500; &#x8BC1;&#x636E;&#x4E0D;&#x8DB3; &#x2192; &#x8865;&#x8BC1; &#x2192; &#x91CD;&#x65B0;&#x5224;&#x65AD;
</code></pre>
<p>&#x8FD9;&#x4E00;&#x95ED;&#x73AF;&#x8FD8;&#x8981;&#x4F5C;&#x7528;&#x4E8E; Creator &#x81EA;&#x8EAB;&#xFF0C;&#x624D;&#x80FD;&#x8FDB;&#x5165; RSI &#x7684;&#x9012;&#x5F52;&#x5C42;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x53CD;&#x9988; &#x2192; &#x6539;&#x6267;&#x884C;&#x65B9;&#x6CD5; &#x2192; &#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x68C0;&#x9A8C;
&#x63D0;&#x70BC;&#x4E0E;&#x4F7F;&#x7528;&#x53CD;&#x9988; &#x2192; &#x6539;&#x63D0;&#x70BC;&#x65B9;&#x6CD5; &#x2192; &#x540E;&#x7EED;&#x63D0;&#x70BC;&#x68C0;&#x9A8C;
</code></pre>
<h2 id="&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x7684;&#x5DE5;&#x7A0B;&#x673A;&#x5236;"><a href="#&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x7684;&#x5DE5;&#x7A0B;&#x673A;&#x5236;"></a>&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x7684;&#x5DE5;&#x7A0B;&#x673A;&#x5236;</h2>
<h3 id="&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x4E3A;&#x4E3B;&#x7EBF;&#xFF0C;&#x9A8C;&#x6536;&#x8BB0;&#x5F55;&#x4F5C;&#x4E3A;&#x6807;&#x6CE8;"><a href="#&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x4E3A;&#x4E3B;&#x7EBF;&#xFF0C;&#x9A8C;&#x6536;&#x8BB0;&#x5F55;&#x4F5C;&#x4E3A;&#x6807;&#x6CE8;"></a>&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x4E3A;&#x4E3B;&#x7EBF;&#xFF0C;&#x9A8C;&#x6536;&#x8BB0;&#x5F55;&#x4F5C;&#x4E3A;&#x6807;&#x6CE8;</h3>
<p>&#x5931;&#x8D25;&#x524D;&#x540E;&#x7684;&#x8F93;&#x5165;&#x3001;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x548C;&#x5B9E;&#x9645;&#x6539;&#x52A8;&#xFF0C;&#x662F;&#x5B9A;&#x4F4D;&#x4F18;&#x5316;&#x70B9;&#x7684;&#x4F9D;&#x636E;&#x3002;&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x6D41;&#x4FDD;&#x7559;&#x8FC7;&#x7A0B;&#x4E8B;&#x5B9E;&#xFF0C;&#x9A8C;&#x6536;&#x6807;&#x6CE8;&#x5C06;&#x5177;&#x4F53;&#x7247;&#x6BB5;&#x4E0E;&#x4EFB;&#x52A1;&#x76EE;&#x6807;&#x3001;&#x5224;&#x65AD;&#x4F9D;&#x636E;&#x548C;&#x4FEE;&#x6B63;&#x5173;&#x7CFB;&#x8FDE;&#x63A5;&#x8D77;&#x6765;&#x3002;</p>
<pre><code class="language-text">&#x771F;&#x5B9E;&#x4E8B;&#x4EF6;&#x6D41;&#xFF1A;&#x64CD;&#x4F5C; / &#x8F93;&#x5165;&#x8F93;&#x51FA; / &#x4EA7;&#x7269;&#x53D8;&#x5316; / &#x4EBA;&#x5DE5;&#x4EA4;&#x4E92;
  &#x2191; &#x5173;&#x8054;&#x539F;&#x59CB;&#x4E8B;&#x4EF6;&#x4E0E;&#x8BC1;&#x636E;
&#x9A8C;&#x6536;&#x6807;&#x6CE8;&#xFF1A;
  &#x76EE;&#x6807; / &#x6807;&#x51C6; / &#x5224;&#x5B9A; / &#x5931;&#x8D25;&#x70B9;
  &#x91CD;&#x8BD5;&#x5173;&#x7CFB; / Skill &#x5E94;&#x7528;

&#x4E8B;&#x4EF6;&#x4E2D;&#x5DF2;&#x6709;&#x7684;&#x4E8B;&#x5B9E; &#x2192; &#x76F4;&#x63A5;&#x590D;&#x7528;
&#x9700;&#x8981;&#x9A8C;&#x6536;&#x8BED;&#x4E49;&#x7684;&#x90E8;&#x5206; &#x2192; &#x8865;&#x5145;&#x6807;&#x6CE8;
</code></pre>
<p>&#x590D;&#x76D8;&#x5165;&#x53E3;&#xFF1A;&#x53CD;&#x590D;&#x5931;&#x8D25;&#x3001;&#x65E0;&#x6548;&#x91CD;&#x8BD5;&#x3001;&#x4EBA;&#x5DE5;&#x7EA0;&#x6B63;&#xFF1B;&#x5BF9;&#x7167;&#x6750;&#x6599;&#xFF1A;&#x9996;&#x6B21;&#x6210;&#x529F;&#x3001;&#x4FEE;&#x6B63;&#x540E;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<h3 id="&#x73AF;&#x5883;&#x53CD;&#x9988;&#x51B3;&#x5B9A;&#x4F18;&#x5316;&#x65B9;&#x5411;"><a href="#&#x73AF;&#x5883;&#x53CD;&#x9988;&#x51B3;&#x5B9A;&#x4F18;&#x5316;&#x65B9;&#x5411;"></a>&#x73AF;&#x5883;&#x53CD;&#x9988;&#x51B3;&#x5B9A;&#x4F18;&#x5316;&#x65B9;&#x5411;</h3>
<p>&#x6D4B;&#x8BD5; / &#x6784;&#x5EFA; / API / Mock / Browser / Native &#x63D0;&#x4F9B;&#x73AF;&#x5883;&#x8F93;&#x51FA;&#xFF0C;&#x5224;&#x5B9A;&#x65F6;&#x4FDD;&#x7559;&#x9A8C;&#x6536;&#x6807;&#x51C6;&#x3001;&#x6267;&#x884C;&#x6761;&#x4EF6;&#x548C;&#x5224;&#x5B9A;&#x6765;&#x6E90;&#x3002;</p>
<pre><code class="language-text">&#x786E;&#x8BA4;&#x7F3A;&#x53E3; &#x2192; &#x9009;&#x62E9;&#x4F18;&#x5316;&#x5BF9;&#x8C61;
&#x251C;&#x2500; &#x5DF2;&#x6709;&#x80FD;&#x529B;&#x672A;&#x88AB;&#x53D1;&#x73B0; &#x2192; &#x5DE5;&#x7A0B;&#x4FE1;&#x606F; / &#x68C0;&#x7D22;
&#x251C;&#x2500; &#x6307;&#x5BFC;&#x4E0D;&#x9002;&#x7528; &#x2192; Skill / &#x9002;&#x7528;&#x8303;&#x56F4;
&#x251C;&#x2500; &#x8BC1;&#x636E;&#x7F3A;&#x5931;&#x6216;&#x4E0D;&#x53EF;&#x89C1; &#x2192; Tool / &#x9A8C;&#x8BC1;&#x5165;&#x53E3;
&#x2514;&#x2500; &#x8FD0;&#x884C;&#x73AF;&#x5883;&#x6545;&#x969C; &#x2192; &#x73AF;&#x5883;&#x4FEE;&#x590D; / &#x91CD;&#x65B0;&#x89C2;&#x5BDF;
</code></pre>
<p>&#x5224;&#x65AD;&#x4E00;&#x6B21;&#x8C03;&#x6574;&#x662F;&#x5426;&#x53EF;&#x590D;&#x7528;&#xFF0C;&#x8FD8;&#x8981;&#x5BF9;&#x7167;&#x9700;&#x6C42;&#x3001;&#x5DE5;&#x7A0B;&#x72B6;&#x6001;&#x548C;&#x5DF2;&#x6709;&#x7ECF;&#x9A8C;&#x3002;</p>
<h3 id="&#x4EBA;&#x5DE5;&#x9A71;&#x52A8;&#x63D0;&#x70BC;&#xFF0C;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x6301;&#x7EED;&#x56DE;&#x6D41;"><a href="#&#x4EBA;&#x5DE5;&#x9A71;&#x52A8;&#x63D0;&#x70BC;&#xFF0C;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x6301;&#x7EED;&#x56DE;&#x6D41;"></a>&#x4EBA;&#x5DE5;&#x9A71;&#x52A8;&#x63D0;&#x70BC;&#xFF0C;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x6301;&#x7EED;&#x56DE;&#x6D41;</h3>
<p>&#x4EBA;&#x5DE5;&#x8865;&#x5145;&#x4E1A;&#x52A1;&#x80CC;&#x666F;&#x3001;&#x9690;&#x542B;&#x7EA6;&#x675F;&#x548C;&#x4F18;&#x5148;&#x7EA7;&#xFF0C;&#x5E76;&#x4FEE;&#x8BA2;&#x5019;&#x9009;&#x7684;&#x5F52;&#x56E0;&#x4E0E;&#x9002;&#x7528;&#x8303;&#x56F4;&#x3002;&#x8FD9;&#x4E9B;&#x53CD;&#x9988;&#x4E0E;&#x5BF9;&#x5E94;&#x5019;&#x9009;&#x7248;&#x672C;&#x5173;&#x8054;&#xFF0C;&#x4FDD;&#x7559;&#x53D6;&#x820D;&#x4F9D;&#x636E;&#xFF0C;&#x4F9B;&#x4E0B;&#x4E00;&#x8F6E;&#x5206;&#x6790;&#x4F7F;&#x7528;&#x3002;</p>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#xFF1A;&#x63D0;&#x51FA;&#x95EE;&#x9898; / &#x8865;&#x5145;&#x7EA6;&#x675F;
  &#x2193;
Agent&#xFF1A;&#x53D6;&#x8BC1; / &#x5BF9;&#x7167;&#x5DE5;&#x7A0B;&#x4E0E;&#x7ECF;&#x9A8C; / &#x63D0;&#x51FA;&#x5019;&#x9009;
  &#x2193;
&#x4EBA;&#x5DE5; Review&#xFF1A;&#x8BC4;&#x8BBA;&#x4E0E;&#x7406;&#x7531; &#x2194; &#x5BF9;&#x5E94;&#x5019;&#x9009;&#x7248;&#x672C;
  &#x2193;
&#x65B0; Case&#xFF1A;&#x5177;&#x4F53; Skill &#x6307;&#x5BFC; &#x2192; &#x5B9E;&#x9645;&#x884C;&#x4E3A; &#x2192; &#x9A8C;&#x6536;&#x4E0E;&#x8FD4;&#x5DE5;
  &#x2193;
&#x53CD;&#x9988;&#x56DE;&#x6D41; &#x2192; &#x4FDD;&#x7559; / &#x4FEE;&#x8BA2; / &#x5220;&#x9664;&#x6307;&#x5BFC;
</code></pre>
<h2 id="&#x6539;&#x8FDB;&#x673A;&#x5236;&#x5982;&#x4F55;&#x8FDB;&#x5165;&#x9012;&#x5F52;&#x5C42;"><a href="#&#x6539;&#x8FDB;&#x673A;&#x5236;&#x5982;&#x4F55;&#x8FDB;&#x5165;&#x9012;&#x5F52;&#x5C42;"></a>&#x6539;&#x8FDB;&#x673A;&#x5236;&#x5982;&#x4F55;&#x8FDB;&#x5165;&#x9012;&#x5F52;&#x5C42;</h2>
<p>&#x5982;&#x679C; Creator &#x53EA;&#x662F;&#x628A;&#x6BCF;&#x6B21;&#x5931;&#x8D25;&#x8F6C;&#x6210;&#x65B0;&#x89C4;&#x5219;&#xFF0C;&#x7ECF;&#x9A8C;&#x53EF;&#x80FD;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#xFF0C;&#x8BEF;&#x7528;&#x8303;&#x56F4;&#x4E5F;&#x968F;&#x4E4B;&#x6269;&#x5927;&#x3002;&#x6B64;&#x65F6;&#x9700;&#x8981;&#x8C03;&#x6574;&#x7684;&#x662F;&#x8BC1;&#x636E;&#x7B5B;&#x9009;&#x3001;&#x540C;&#x7C7B; Case &#x6BD4;&#x8F83;&#x548C;&#x9A8C;&#x8BC1;&#x65B9;&#x6CD5;&#xFF0C;&#x518D;&#x68C0;&#x67E5;&#x8C03;&#x6574;&#x540E;&#x7684;&#x63D0;&#x70BC;&#x8D28;&#x91CF;&#x3002;</p>
<p>&#x9012;&#x5F52;&#x53D1;&#x751F;&#x5728;&#x6539;&#x8FDB;&#x673A;&#x5236;&#x4E5F;&#x6210;&#x4E3A;&#x88AB;&#x6539;&#x8FDB;&#x7684;&#x5BF9;&#x8C61;&#xFF1A;</p>
<pre><code class="language-text">Coding &#x8F68;&#x8FF9;
&#x2192; &#x6539; Skill / Tool / Context &#x2192; &#x4E0B;&#x4E00;&#x8F6E; Coding

Skill Creator &#x7684;&#x5DE5;&#x4F5C;&#x8F68;&#x8FF9;
&#x2192; &#x6539;&#x53D6;&#x8BC1; / &#x7B5B;&#x9009; / &#x9A8C;&#x8BC1;&#x65B9;&#x6CD5; &#x2192; &#x4E0B;&#x4E00;&#x8F6E;&#x63D0;&#x70BC;
</code></pre>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x5220;&#x9664;&#x8FC7;&#x5EA6;&#x6CDB;&#x5316;&#x7684;&#x89C4;&#x5219;
  &#x2193;
&#x5019;&#x9009;&#x65B9;&#x6CD5;&#xFF1A;&#x589E;&#x52A0;&#x53CD;&#x4F8B;&#x6838;&#x67E5;
  &#x2193;
&#x6BD4;&#x8F83;&#x5019;&#x9009;&#x9002;&#x7528;&#x6027; / &#x9057;&#x6F0F; / &#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x6210;&#x672C;
  &#x251C;&#x2500; &#x6539;&#x5584; &#x2192; &#x66F4;&#x65B0; Creator &#x6307;&#x5BFC;&#x6216;&#x5DE5;&#x5177; &#x2192; &#x4E0B;&#x4E00;&#x8F6E;&#x63D0;&#x70BC;
  &#x2514;&#x2500; &#x672A;&#x6539;&#x5584; &#x2192; &#x4FEE;&#x8BA2; / &#x653E;&#x5F03;&#x8BE5;&#x65B9;&#x6CD5;
</code></pre>
<p>Creator &#x7684;&#x8F93;&#x5165;&#x3001;&#x53D6;&#x8BC1;&#x64CD;&#x4F5C;&#x3001;&#x5019;&#x9009;&#x7248;&#x672C;&#x3001;Review &#x548C;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#xFF0C;&#x6784;&#x6210;&#x8FD9;&#x4E00;&#x5C42;&#x7684;&#x590D;&#x76D8;&#x6750;&#x6599;&#x3002;</p>
<h2 id="&#x6539;&#x8FDB;&#x6210;&#x7ACB;&#x7684;&#x4F9D;&#x636E;"><a href="#&#x6539;&#x8FDB;&#x6210;&#x7ACB;&#x7684;&#x4F9D;&#x636E;"></a>&#x6539;&#x8FDB;&#x6210;&#x7ACB;&#x7684;&#x4F9D;&#x636E;</h2>
<p>&#x901A;&#x8FC7;&#x67D0;&#x9879;&#x68C0;&#x67E5;&#x63D0;&#x4F9B;&#x7684;&#x662F;&#x5C40;&#x90E8;&#x8BC1;&#x636E;&#xFF1B;&#x7B56;&#x7565;&#x662F;&#x5426;&#x503C;&#x5F97;&#x4FDD;&#x7559;&#xFF0C;&#x8FD8;&#x8981;&#x89C2;&#x5BDF;&#x5B83;&#x5728;&#x672A;&#x53C2;&#x4E0E;&#x63D0;&#x70BC;&#x7684;&#x4EFB;&#x52A1;&#x4E2D;&#x7684;&#x8868;&#x73B0;&#x3001;&#x4EE3;&#x4EF7;&#x548C;&#x56DE;&#x5F52;&#x3002;&#x5BF9; Creator &#x7684;&#x4FEE;&#x6539;&#xFF0C;&#x5219;&#x9700;&#x8981;&#x540C;&#x65F6;&#x68C0;&#x9A8C;&#x5176;&#x4EA7;&#x51FA;&#x7684;&#x5019;&#x9009;&#x8D28;&#x91CF;&#x3002;</p>
<pre><code class="language-text">&#x6BD4;&#x8F83;&#x6761;&#x4EF6;&#xFF1A;&#x4FDD;&#x7559;&#x4EFB;&#x52A1;&#x8F93;&#x5165; / &#x9A8C;&#x6536;&#x6807;&#x51C6; / &#x6267;&#x884C;&#x6761;&#x4EF6;
&#x9A8C;&#x8BC1;&#x8303;&#x56F4;&#xFF1A;&#x672A;&#x53C2;&#x4E0E;&#x63D0;&#x70BC;&#x7684;&#x65B0; Case + &#x65E2;&#x6709;&#x80FD;&#x529B;&#x56DE;&#x5F52;

&#x6267;&#x884C;&#x5C42;&#xFF1A;&#x7ED3;&#x679C;&#x6539;&#x5584; / &#x8FD4;&#x5DE5;&#x51CF;&#x5C11; / &#x6210;&#x672C;&#x53D8;&#x5316; / &#x5F15;&#x5165;&#x7684;&#x9000;&#x6B65;
&#x63D0;&#x70BC;&#x5C42;&#xFF1A;&#x5019;&#x9009;&#x9002;&#x7528;&#x6027; / &#x9057;&#x6F0F; / &#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x6210;&#x672C;
</code></pre>
<h2 id="&#x5173;&#x8054;&#x65B9;&#x6848;&#x4E0E;&#x53C2;&#x8003;"><a href="#&#x5173;&#x8054;&#x65B9;&#x6848;&#x4E0E;&#x53C2;&#x8003;"></a>&#x5173;&#x8054;&#x65B9;&#x6848;&#x4E0E;&#x53C2;&#x8003;</h2>
<ul>
<li><a href="./Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%8F%8D%E9%A6%88%E9%87%87%E9%9B%86.md">Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;</a>&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x7EC4;&#x7EC7;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;&#x4E13;&#x9879;&#x65B9;&#x6848;&#x3002;</li>
<li><a href="./RN%20Screenshot%20Perception%20Layer%EF%BC%9A%E4%B8%8B%E4%B8%80%E9%98%B6%E6%AE%B5%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88.md">RN Screenshot Perception Layer</a>&#xFF1A;Native &#x73AF;&#x5883;&#x89C2;&#x5BDF;&#x3002;</li>
<li><a href="./%E5%B7%A5%E7%A8%8B%E9%A2%84%E6%8F%90%E7%82%BC%EF%BC%9A%E4%BB%8E%E5%B7%B2%E6%9C%89%E5%AE%9E%E7%8E%B0%E7%94%9F%E6%88%90%E5%8F%AF%E9%AA%8C%E8%AF%81%20Skills.md">&#x5DE5;&#x7A0B;&#x9884;&#x63D0;&#x70BC;&#xFF1A;&#x4ECE;&#x5DF2;&#x6709;&#x5B9E;&#x73B0;&#x751F;&#x6210;&#x53EF;&#x9A8C;&#x8BC1; Skills</a>&#xFF1A;&#x4ECE;&#x5DE5;&#x7A0B;&#x8BC1;&#x636E;&#x751F;&#x6210;&#x5019;&#x9009;&#x6307;&#x5BFC;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x6301;&#x7EED;&#x4FEE;&#x8BA2;&#x3002;</li>
<li><a href="https://arxiv.org/abs/2505.22954">Darwin G&#xF6;del Machine</a>&#xFF1A;Agent &#x81EA;&#x8EAB;&#x5B9E;&#x73B0;&#x7684;&#x4FEE;&#x6539;&#x4E0E;&#x7F16;&#x7801;&#x8BC4;&#x6D4B;&#x3002;</li>
<li><a href="https://arxiv.org/abs/2510.04618">ACE</a>&#xFF1A;&#x4F9D;&#x636E;&#x6267;&#x884C;&#x53CD;&#x9988;&#x53CD;&#x601D;&#x4E0E;&#x589E;&#x91CF;&#x6574;&#x7406;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><a href="https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents">Anthropic Agent Evals</a>&#xFF1A;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x73AF;&#x5883;&#x7ED3;&#x679C;&#x4E0E;&#x8BC4;&#x4F30;&#x3002;</li>
</ul>
`,E=[{level:1,title:"面向 RSI 的 Coding Agent：从任务反馈到方法迭代",children:[{level:2,title:"背景",children:[]},{level:2,title:"范式变化：从交付结果到改进执行系统",children:[]},{level:2,title:"工程经验如何被复用",children:[]},{level:2,title:"总体闭环",children:[]},{level:2,title:"反馈驱动的工程机制",children:[{level:3,title:"真实事件为主线，验收记录作为标注",children:[]},{level:3,title:"环境反馈决定优化方向",children:[]},{level:3,title:"人工驱动提炼，使用结果持续回流",children:[]}]},{level:2,title:"改进机制如何进入递归层",children:[]},{level:2,title:"改进成立的依据",children:[]},{level:2,title:"关联方案与参考",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
