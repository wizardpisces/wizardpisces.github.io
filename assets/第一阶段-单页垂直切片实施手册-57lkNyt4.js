const x={title:"第一阶段：web-affiliate-rn 单页垂直切片实施手册",description:"用 3～4 周跑通 Figma 到 React Native 页面代码和 Native 视觉验证闭环。"},F=`<h1 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x624B;&#x518C;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x624B;&#x518C;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x624B;&#x518C;</h1>
<h2 id="&#x9636;&#x6BB5;&#x76EE;&#x6807;"><a href="#&#x9636;&#x6BB5;&#x76EE;&#x6807;"></a>&#x9636;&#x6BB5;&#x76EE;&#x6807;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x89E3;&#x51B3;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<blockquote>
<p>&#x80FD;&#x5426;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E; Figma &#x9875;&#x9762;&#xFF0C;&#x5728;&#x4E0D;&#x5EFA;&#x8BBE; RN &#x52A8;&#x6001; Runtime&#x3001;&#x4E0D;&#x5347;&#x7EA7;&#x73B0;&#x6709; RN &#x6280;&#x672F;&#x6808;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x7A33;&#x5B9A;&#x751F;&#x6210;&#x7B26;&#x5408; <code>web-affiliate-rn</code> &#x89C4;&#x8303;&#x7684;&#x666E;&#x901A; React Native &#x4EE3;&#x7801;&#xFF0C;&#x5E76;&#x5728; Native &#x73AF;&#x5883;&#x4E2D;&#x5B8C;&#x6210;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#xFF1F;</p>
</blockquote>
<p>&#x9636;&#x6BB5;&#x5B8C;&#x6210;&#x65F6;&#xFF0C;&#x5E94;&#x8BE5;&#x5F97;&#x5230;&#x4E00;&#x6761;&#x6700;&#x77ED;&#x95ED;&#x73AF;&#xFF1A;</p>
<pre><code class="language-text">Figma Frame
  &#x2192; RN Material Mapping
  &#x2192; RN Page Plan
  &#x2192; TSX + style.ts
  &#x2192; Hostless / Simulator / Emulator
  &#x2192; Screenshot Diff
  &#x2192; &#x4FEE;&#x6B63; Mapping&#x3001;Catalog &#x6216; Emitter
</code></pre>
<p>&#x8FD9;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x8FFD;&#x6C42;&#x81EA;&#x52A8;&#x63A5;&#x5165;&#x6240;&#x6709;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF0C;&#x4E5F;&#x4E0D;&#x8FFD;&#x6C42;&#x8986;&#x76D6;&#x6240;&#x6709;&#x9875;&#x9762;&#x7C7B;&#x578B;&#x3002;</p>
<h2 id="&#x660E;&#x786E;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;"><a href="#&#x660E;&#x786E;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;"></a>&#x660E;&#x786E;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;</h2>
<p>&#x4E3A;&#x4E86;&#x907F;&#x514D;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x518D;&#x6B21;&#x81A8;&#x80C0;&#xFF0C;&#x4EE5;&#x4E0B;&#x5185;&#x5BB9;&#x660E;&#x786E;&#x4E0D;&#x505A;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x5EFA;&#x8BBE; App &#x8FD0;&#x884C;&#x65F6;&#x89E3;&#x91CA;&#x7684; RN Schema Renderer&#xFF1B;</li>
<li>&#x4E0D;&#x8981;&#x6C42;&#x517C;&#x5BB9;&#x73B0;&#x6709; Web AJR Runtime&#xFF1B;</li>
<li>&#x4E0D;&#x6539;&#x9020;&#x5B8C;&#x6574; <code>ai-code-agent</code> &#x5DE5;&#x4F5C;&#x6D41;&#xFF1B;</li>
<li>&#x4E0D;&#x62BD;&#x53D6;&#x4ED3;&#x5E93;&#x5168;&#x90E8;&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x4E0D;&#x81EA;&#x52A8;&#x53D1;&#x5E03;&#x516C;&#x5171;&#x7269;&#x6599;&#xFF1B;</li>
<li>&#x4E0D;&#x5347;&#x7EA7; React&#x3001;React Native&#x3001;Metro&#x3001;Node &#x6216; ShopeeRN SDK&#xFF1B;</li>
<li>&#x4E0D;&#x7528; React Native Web &#x7684;&#x622A;&#x56FE;&#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#xFF1B;</li>
<li>&#x4E0D;&#x8BA9; AI &#x81EA;&#x7531;&#x91CD;&#x5199; API&#x3001;Redux&#x3001;Navigator&#x3001;Tracking &#x548C;&#x4E1A;&#x52A1;&#x89C4;&#x5219;&#xFF1B;</li>
<li>&#x4E0D;&#x9009;&#x62E9; Home&#x3001;&#x590D;&#x6742;&#x56FE;&#x8868;&#x3001;&#x65E0;&#x9650;&#x5217;&#x8868;&#x6216;&#x4E1A;&#x52A1;&#x8026;&#x5408;&#x6781;&#x91CD;&#x7684;&#x9875;&#x9762;&#x4F5C;&#x4E3A;&#x9996;&#x4E2A;&#x6837;&#x672C;&#x3002;</li>
</ul>
<h2 id="&#x4EBA;&#x5458;&#x4E0E;&#x804C;&#x8D23;"><a href="#&#x4EBA;&#x5458;&#x4E0E;&#x804C;&#x8D23;"></a>&#x4EBA;&#x5458;&#x4E0E;&#x804C;&#x8D23;</h2>
<p>&#x6700;&#x4F4E;&#x4EBA;&#x5458;&#x914D;&#x7F6E;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x89D2;&#x8272;</th>
<th style="text-align:right">&#x6295;&#x5165;</th>
<th>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x804C;&#x8D23;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x4E3B;&#x529B;&#x5B9E;&#x65BD;&#x8005;</td>
<td style="text-align:right">100%</td>
<td>Catalog&#x3001;Mapping&#x3001;Emitter&#x3001;Fixture&#x3001;&#x9A8C;&#x8BC1;&#x95ED;&#x73AF;</td>
</tr>
<tr>
<td>RN Reviewer</td>
<td style="text-align:right">20%&#xFF5E;30%</td>
<td>&#x73AF;&#x5883;&#x3001;ShopeeRN &#x7EA6;&#x5B9A;&#x3001;&#x4EE3;&#x7801; Review&#x3001;&#x5E73;&#x53F0;&#x95EE;&#x9898;&#x5B9A;&#x4F4D;</td>
</tr>
<tr>
<td>&#x4EA7;&#x54C1;/UED</td>
<td style="text-align:right">&#x5173;&#x952E;&#x8282;&#x70B9;&#x53C2;&#x4E0E;</td>
<td>&#x63D0;&#x4F9B; Figma&#x3001;&#x72B6;&#x6001;&#x3001;&#x8D44;&#x6E90;&#xFF0C;&#x786E;&#x8BA4;&#x89C6;&#x89C9;&#x4E0E;&#x4EA4;&#x4E92;&#x53D6;&#x820D;</td>
</tr>
<tr>
<td>&#x7269;&#x6599; Owner</td>
<td style="text-align:right">&#x6309;&#x9700;</td>
<td>&#x5224;&#x65AD;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x3001;&#x6269;&#x5C55;&#x548C;&#x9875;&#x9762;&#x5C40;&#x90E8;&#x5B9E;&#x73B0;&#x8FB9;&#x754C;</td>
</tr>
</tbody>
</table>
<p>&#x5982;&#x679C;&#x4E3B;&#x529B;&#x5B9E;&#x65BD;&#x8005;&#x5BF9; RN &#x4E0D;&#x719F;&#xFF0C;RN Reviewer &#x4E0D;&#x80FD;&#x7701;&#x7565;&#x3002;&#x5426;&#x5219;&#x5927;&#x91CF;&#x65F6;&#x95F4;&#x4F1A;&#x6D88;&#x8017;&#x5728; Metro&#x3001;Native SDK&#x3001;PageContainer &#x548C;&#x5E73;&#x53F0;&#x5DEE;&#x5F02;&#x4E0A;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x9A8C;&#x8BC1;&#x65B9;&#x6848;&#x672C;&#x8EAB;&#x3002;</p>
<h2 id="&#x7B2C; 0 &#x6B65;&#xFF1A;&#x9501;&#x5B9A;&#x8BD5;&#x70B9;&#x8F93;&#x5165;"><a href="#&#x7B2C; 0 &#x6B65;&#xFF1A;&#x9501;&#x5B9A;&#x8BD5;&#x70B9;&#x8F93;&#x5165;"></a>&#x7B2C; 0 &#x6B65;&#xFF1A;&#x9501;&#x5B9A;&#x8BD5;&#x70B9;&#x8F93;&#x5165;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;1 &#x4EBA;&#x65E5;&#x3002;</p>
<h3 id="&#x9875;&#x9762;&#x9009;&#x62E9;&#x6807;&#x51C6;"><a href="#&#x9875;&#x9762;&#x9009;&#x62E9;&#x6807;&#x51C6;"></a>&#x9875;&#x9762;&#x9009;&#x62E9;&#x6807;&#x51C6;</h3>
<p>&#x9996;&#x4E2A;&#x9875;&#x9762;&#x6700;&#x597D;&#x6EE1;&#x8DB3;&#xFF1A;</p>
<ul>
<li>&#x65B0;&#x9875;&#x9762;&#x6216;&#x76F8;&#x5BF9;&#x72EC;&#x7ACB;&#x7684;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x8BE6;&#x60C5;&#x9875;&#x3001;&#x7ED3;&#x679C;&#x9875;&#x3001;&#x6210;&#x529F;&#x9875;&#x6216;&#x7B80;&#x5355;&#x8868;&#x5355;&#xFF1B;</li>
<li>5&#xFF5E;10 &#x4E2A;&#x4E3B;&#x8981;&#x89C6;&#x89C9;&#x533A;&#x5757;&#xFF1B;</li>
<li>&#x4EE5;&#x5C55;&#x793A;&#x4E3A;&#x4E3B;&#xFF0C;&#x53EA;&#x6709;&#x5C11;&#x91CF;&#x6309;&#x94AE;&#x3001;&#x8F93;&#x5165;&#x6216;&#x5F39;&#x5C42;&#xFF1B;</li>
<li>&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x9884;&#x8BA1;&#x53EF;&#x4EE5;&#x8986;&#x76D6; 60% &#x4EE5;&#x4E0A;&#x7ED3;&#x6784;&#xFF1B;</li>
<li>&#x4E0D;&#x4F9D;&#x8D56;&#x590D;&#x6742; Native &#x80FD;&#x529B;&#xFF1B;</li>
<li>&#x80FD;&#x63D0;&#x4F9B;&#x5B8C;&#x6574;&#x7684; Figma Frame &#x548C;&#x8BBE;&#x8BA1;&#x8D44;&#x6E90;&#x3002;</li>
</ul>
<p>&#x201C;60%&#x201D;&#x53EA;&#x7528;&#x4E8E;&#x9009;&#x62E9;&#x8BD5;&#x70B9;&#xFF0C;&#x4E0D;&#x662F;&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x6307;&#x6807;&#x3002;&#x5982;&#x679C;&#x8FDE;&#x5927;&#x90E8;&#x5206;&#x7ED3;&#x6784;&#x90FD;&#x660E;&#x663E;&#x65E0;&#x6CD5;&#x590D;&#x7528;&#xFF0C;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4F1A;&#x9000;&#x5316;&#x6210;&#x65B0;&#x7EC4;&#x4EF6;&#x5F00;&#x53D1;&#x9879;&#x76EE;&#x3002;</p>
<h3 id="&#x5FC5;&#x987B;&#x6536;&#x96C6;&#x7684;&#x8F93;&#x5165;"><a href="#&#x5FC5;&#x987B;&#x6536;&#x96C6;&#x7684;&#x8F93;&#x5165;"></a>&#x5FC5;&#x987B;&#x6536;&#x96C6;&#x7684;&#x8F93;&#x5165;</h3>
<ul>
<li>Figma &#x6587;&#x4EF6;&#x94FE;&#x63A5;&#x4E0E;&#x7CBE;&#x786E; Frame/Node ID&#xFF1B;</li>
<li>&#x8BBE;&#x8BA1;&#x57FA;&#x51C6;&#x5C3A;&#x5BF8;&#xFF0C;&#x539F;&#x5219;&#x4E0A;&#x4F7F;&#x7528;&#x9879;&#x76EE;&#x9ED8;&#x8BA4;&#x7684; 375 &#x5BBD;&#xFF1B;</li>
<li>iOS &#x4E0E; Android &#x662F;&#x5426;&#x5171;&#x7528;&#x8BBE;&#x8BA1;&#xFF1B;</li>
<li>normal&#x3001;loading&#x3001;empty&#x3001;error&#x3001;disabled &#x7B49;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x957F;&#x6587;&#x672C;&#x6216;&#x591A;&#x8BED;&#x8A00;&#x53C2;&#x8003;&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x3001;&#x56FE;&#x6807;&#x3001;&#x63D2;&#x753B;&#x548C;&#x5B57;&#x4F53;&#x8D44;&#x6E90;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x5165;&#x53E3;&#x3001;&#x8FD4;&#x56DE;&#x884C;&#x4E3A;&#x548C;&#x5E95;&#x90E8;&#x5B89;&#x5168;&#x533A;&#x8981;&#x6C42;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x9700;&#x8981;&#x7684;&#x64CD;&#x4F5C;&#x5217;&#x8868;&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x56FA;&#x5B9A; Mock &#x6570;&#x636E;&#xFF1B;</li>
<li>&#x5982;&#x679C;&#x662F;&#x5DF2;&#x6709;&#x9875;&#x9762;&#x6539;&#x9020;&#xFF0C;&#x63D0;&#x4F9B;&#x5F53;&#x524D;&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C;&#x622A;&#x56FE;&#x3002;</li>
</ul>
<h3 id="&#x5F62;&#x6210; pilot-brief.md"><a href="#&#x5F62;&#x6210; pilot-brief.md"></a>&#x5F62;&#x6210; <code>pilot-brief.md</code></h3>
<p>&#x5185;&#x5BB9;&#x81F3;&#x5C11;&#x5305;&#x62EC;&#xFF1A;</p>
<pre><code class="language-text">&#x9875;&#x9762;&#x540D;&#x79F0;&#xFF1A;
&#x76EE;&#x6807; MODULE&#xFF1A;
Figma File / Node&#xFF1A;
&#x8BBE;&#x8BA1;&#x5C3A;&#x5BF8;&#xFF1A;
Golden &#x5E73;&#x53F0;&#xFF1A;iOS / Android
Golden &#x56FD;&#x5BB6;&#x4E0E;&#x8BED;&#x8A00;&#xFF1A;
&#x9875;&#x9762;&#x72B6;&#x6001;&#xFF1A;
&#x4EA4;&#x4E92;&#x8303;&#x56F4;&#xFF1A;
&#x660E;&#x786E;&#x4E0D;&#x505A;&#xFF1A;
&#x9A8C;&#x6536;&#x4EBA;&#xFF1A;
</code></pre>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x6240;&#x6709;&#x4EBA;&#x6307;&#x5411;&#x540C;&#x4E00;&#x4E2A; Figma Frame&#xFF1B;</li>
<li>&#x786E;&#x8BA4;&#x54EA;&#x4E9B;&#x533A;&#x57DF;&#x5C5E;&#x4E8E;&#x7CFB;&#x7EDF;&#x72B6;&#x6001;&#x680F;&#x3001;Native &#x5BFC;&#x822A;&#x548C;&#x9875;&#x9762;&#x5185;&#x5BB9;&#xFF1B;</li>
<li>&#x786E;&#x8BA4;&#x622A;&#x56FE;&#x6BD4;&#x8F83;&#x8303;&#x56F4;&#xFF1B;</li>
<li>Mock &#x6570;&#x636E;&#x56FA;&#x5B9A;&#xFF0C;&#x4E0D;&#x4F1A;&#x5728;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#x65F6;&#x968F;&#x673A;&#x53D8;&#x5316;&#xFF1B;</li>
<li>&#x8BD5;&#x70B9;&#x8303;&#x56F4;&#x53EF;&#x4EE5;&#x5728; 3&#xFF5E;4 &#x5468;&#x5185;&#x5B8C;&#x6210;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 1 &#x6B65;&#xFF1A;&#x8DD1;&#x901A; RN &#x5F00;&#x53D1;&#x548C;&#x622A;&#x56FE;&#x73AF;&#x5883;"><a href="#&#x7B2C; 1 &#x6B65;&#xFF1A;&#x8DD1;&#x901A; RN &#x5F00;&#x53D1;&#x548C;&#x622A;&#x56FE;&#x73AF;&#x5883;"></a>&#x7B2C; 1 &#x6B65;&#xFF1A;&#x8DD1;&#x901A; RN &#x5F00;&#x53D1;&#x548C;&#x622A;&#x56FE;&#x73AF;&#x5883;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;2&#xFF5E;3 &#x4EBA;&#x65E5;&#x3002;</p>
<p>&#x8FD9;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x8981;&#x5148;&#x5199;&#x751F;&#x6210;&#x5668;&#x3002;&#x5148;&#x786E;&#x4FDD;&#x4E00;&#x6BB5;&#x624B;&#x5199; RN &#x9875;&#x9762;&#x80FD;&#x591F;&#x88AB;&#x7A33;&#x5B9A;&#x6253;&#x5F00;&#x3001;&#x56FA;&#x5B9A;&#x6570;&#x636E;&#x3001;&#x91CD;&#x590D;&#x622A;&#x56FE;&#x3002;</p>
<h3 id="&#x719F;&#x6089;&#x6700;&#x5C0F; RN &#x5DE5;&#x7A0B;&#x8DEF;&#x5F84;"><a href="#&#x719F;&#x6089;&#x6700;&#x5C0F; RN &#x5DE5;&#x7A0B;&#x8DEF;&#x5F84;"></a>&#x719F;&#x6089;&#x6700;&#x5C0F; RN &#x5DE5;&#x7A0B;&#x8DEF;&#x5F84;</h3>
<p>&#x9700;&#x8981;&#x7406;&#x89E3;&#xFF1A;</p>
<ul>
<li><code>src/index.ts</code> &#x5982;&#x4F55;&#x52A0;&#x8F7D;&#x9875;&#x9762;&#x6A21;&#x5757;&#xFF1B;</li>
<li><code>PageContainer</code> &#x5982;&#x4F55;&#x6CE8;&#x518C;&#x9875;&#x9762;&#xFF1B;</li>
<li><code>MODULES</code> &#x5982;&#x4F55;&#x5B9A;&#x4E49;&#x9875;&#x9762;&#x540D;&#xFF1B;</li>
<li><code>Navigator</code> &#x5982;&#x4F55;&#x8FDB;&#x5165;&#x548C;&#x9000;&#x51FA;&#x9875;&#x9762;&#xFF1B;</li>
<li><code>CustomStyleSheetV2</code> &#x5982;&#x4F55;&#x5904;&#x7406; 375 &#x8BBE;&#x8BA1;&#x5C3A;&#x5BF8;&#xFF1B;</li>
<li><code>SAFE_AREA_INSETS_BOTTOM</code> &#x5982;&#x4F55;&#x5F71;&#x54CD;&#x5E95;&#x680F;&#xFF1B;</li>
<li><code>i18n.t</code> / <code>i18n.tNode</code> &#x5982;&#x4F55;&#x63D0;&#x4F9B;&#x6587;&#x6848;&#xFF1B;</li>
<li>Hostless &#x5982;&#x4F55;&#x542F;&#x52A8;&#x5E76;&#x8FDB;&#x5165;&#x6307;&#x5B9A;&#x9875;&#x9762;&#x3002;</li>
</ul>
<p>&#x9879;&#x76EE;&#x5DF2;&#x6709;&#x5E38;&#x7528;&#x547D;&#x4EE4;&#xFF1A;</p>
<pre><code class="language-bash">yarn hostless:start
yarn dev:start
yarn ts-checker
yarn lint
yarn jest
</code></pre>
<p>&#x4E0D;&#x8981;&#x5728;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6267;&#x884C;&#x4F9D;&#x8D56;&#x5347;&#x7EA7;&#x6216;&#x81EA;&#x52A8;&#x8FC1;&#x79FB;&#x547D;&#x4EE4;&#x3002;</p>
<h3 id="&#x5EFA;&#x7ACB;&#x5F00;&#x53D1;&#x6001; Fixture Runner"><a href="#&#x5EFA;&#x7ACB;&#x5F00;&#x53D1;&#x6001; Fixture Runner"></a>&#x5EFA;&#x7ACB;&#x5F00;&#x53D1;&#x6001; Fixture Runner</h3>
<p>&#x5EFA;&#x8BAE;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x53EA;&#x5728;&#x5F00;&#x53D1;&#x73AF;&#x5883;&#x6CE8;&#x518C;&#x7684;&#x9875;&#x9762;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">src/ai-render/
  fixture-registry.ts
  FixturePage.tsx
  fixtures/
    materials/
    pilot-page/
</code></pre>
<p>Fixture Runner &#x63A5;&#x6536;&#xFF1A;</p>
<pre><code class="language-text">fixtureId
state
locale
viewport
</code></pre>
<p>&#x7136;&#x540E;&#x4F7F;&#x7528;&#x56FA;&#x5B9A; Props &#x6E32;&#x67D3;&#x4E00;&#x4E2A; Material &#x6216;&#x5B8C;&#x6574;&#x9875;&#x9762;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x81F3;&#x5C11;&#x652F;&#x6301;&#xFF1A;</p>
<ul>
<li>&#x6309; ID &#x9009;&#x62E9; Fixture&#xFF1B;</li>
<li>&#x9009;&#x62E9; normal/loading/empty/error &#x7B49;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x5168;&#x5C4F;&#x6E32;&#x67D3;&#xFF0C;&#x9690;&#x85CF;&#x65E0;&#x5173;&#x8C03;&#x8BD5; UI&#xFF1B;</li>
<li>&#x6839;&#x8282;&#x70B9;&#x8BBE;&#x7F6E;&#x7A33;&#x5B9A; <code>testID</code>&#xFF1B;</li>
<li>&#x7981;&#x6B62;&#x968F;&#x673A;&#x6570;&#x3001;&#x5F53;&#x524D;&#x65F6;&#x95F4;&#x548C;&#x771F;&#x5B9E;&#x7F51;&#x7EDC;&#x8BF7;&#x6C42;&#xFF1B;</li>
<li>&#x80FD;&#x901A;&#x8FC7;&#x56FA;&#x5B9A;&#x5165;&#x53E3;&#x91CD;&#x590D;&#x6253;&#x5F00;&#x540C;&#x4E00;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<h3 id="Storybook &#x53EF;&#x884C;&#x6027; Spike"><a href="#Storybook &#x53EF;&#x884C;&#x6027; Spike"></a>Storybook &#x53EF;&#x884C;&#x6027; Spike</h3>
<p>&#x9650;&#x65F6;&#x6700;&#x591A; 2 &#x4EBA;&#x65E5;&#xFF0C;&#x4E0D;&#x5141;&#x8BB8;&#x65E0;&#x9650;&#x6392;&#x67E5;&#x3002;</p>
<p>&#x9700;&#x8981;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<ol>
<li>&#x662F;&#x5426;&#x5B58;&#x5728;&#x517C;&#x5BB9; React 16&#x3001;RN 0.63&#x3001;&#x5F53;&#x524D; Metro &#x548C; Node 14 &#x7684; <code>@storybook/react-native</code> &#x7248;&#x672C;&#xFF1B;</li>
<li>&#x80FD;&#x5426;&#x4E0D;&#x4FEE;&#x6539;&#x751F;&#x4EA7;&#x5165;&#x53E3;&#x3001;&#x4E0D;&#x5347;&#x7EA7;&#x6838;&#x5FC3;&#x4F9D;&#x8D56;&#xFF1B;</li>
<li>&#x80FD;&#x5426;&#x52A0;&#x8F7D;&#x9879;&#x76EE;&#x522B;&#x540D;&#x3001;ShopeeRN SDK &#x548C;&#x5185;&#x90E8;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x80FD;&#x5426;&#x5168;&#x5C4F;&#x9009;&#x62E9;&#x6307;&#x5B9A; Story&#xFF1B;</li>
<li>&#x80FD;&#x5426;&#x88AB;&#x5916;&#x90E8;&#x811A;&#x672C;&#x7A33;&#x5B9A;&#x63A7;&#x5236;&#x5E76;&#x622A;&#x56FE;&#x3002;</li>
</ol>
<p>&#x51B3;&#x7B56;&#x89C4;&#x5219;&#xFF1A;</p>
<ul>
<li>&#x5168;&#x90E8;&#x6EE1;&#x8DB3;&#xFF1A;Storybook &#x4F5C;&#x4E3A; Fixture UI&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x6E32;&#x67D3;&#x4F46;&#x65E0;&#x6CD5;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x622A;&#x56FE;&#xFF1A;Storybook &#x7528;&#x4E8E;&#x7EC4;&#x4EF6;&#x5F00;&#x53D1;&#xFF0C;&#x622A;&#x56FE;&#x4ECD;&#x8D70; Fixture Page&#xFF1B;</li>
<li>&#x9700;&#x8981;&#x5347;&#x7EA7;&#x6838;&#x5FC3;&#x6280;&#x672F;&#x6808;&#x6216;&#x4FEE;&#x6539; Host&#xFF1A;&#x505C;&#x6B62;&#x63A5;&#x5165;&#xFF0C;&#x4F7F;&#x7528;&#x8F7B;&#x91CF; Fixture Runner&#x3002;</li>
</ul>
<p>&#x4E0D;&#x8981;&#x56E0;&#x4E3A; Web &#x56E2;&#x961F;&#x719F;&#x6089; Storybook&#xFF0C;&#x5C31;&#x628A; Storybook &#x53D8;&#x6210;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x5F3A;&#x5236;&#x4F9D;&#x8D56;&#x3002;</p>
<h3 id="&#x622A;&#x56FE;&#x901A;&#x9053; Spike"><a href="#&#x622A;&#x56FE;&#x901A;&#x9053; Spike"></a>&#x622A;&#x56FE;&#x901A;&#x9053; Spike</h3>
<p>&#x6309;&#x4EE5;&#x4E0B;&#x987A;&#x5E8F;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<h4 id="&#x65B9;&#x6848; A&#xFF1A;Hostless &#x622A;&#x56FE;"><a href="#&#x65B9;&#x6848; A&#xFF1A;Hostless &#x622A;&#x56FE;"></a>&#x65B9;&#x6848; A&#xFF1A;Hostless &#x622A;&#x56FE;</h4>
<p>&#x786E;&#x8BA4;&#x5185;&#x90E8; Hostless &#x662F;&#x5426;&#x652F;&#x6301;&#xFF1A;</p>
<ul>
<li>&#x901A;&#x8FC7;&#x53C2;&#x6570;&#x6253;&#x5F00;&#x6307;&#x5B9A; MODULE&#xFF1B;</li>
<li>&#x6CE8;&#x5165;&#x56FA;&#x5B9A; <code>propsData</code>&#xFF1B;</li>
<li>&#x56FA;&#x5B9A;&#x5E73;&#x53F0;&#x3001;&#x5C3A;&#x5BF8;&#x3001;&#x8BED;&#x8A00;&#x548C; Safe Area&#xFF1B;</li>
<li>&#x7B49;&#x5F85;&#x9875;&#x9762; ready&#xFF1B;</li>
<li>&#x5BFC;&#x51FA;&#x65E0;&#x538B;&#x7F29; PNG&#x3002;</li>
</ul>
<p>&#x82E5;&#x7F3A;&#x5C11;&#x7A33;&#x5B9A;&#x622A;&#x56FE;&#x80FD;&#x529B;&#xFF0C;&#x4E0D;&#x8981;&#x7ACB;&#x5373;&#x6539;&#x9020; Hostless&#xFF0C;&#x8F6C;&#x65B9;&#x6848; B/C&#x3002;</p>
<h4 id="&#x65B9;&#x6848; B&#xFF1A;iOS Simulator"><a href="#&#x65B9;&#x6848; B&#xFF1A;iOS Simulator"></a>&#x65B9;&#x6848; B&#xFF1A;iOS Simulator</h4>
<p>&#x76EE;&#x6807;&#x662F;&#x901A;&#x8FC7;&#x811A;&#x672C;&#x5B8C;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x542F;&#x52A8; Simulator
&#x2192; &#x6253;&#x5F00;&#x6307;&#x5B9A;&#x9875;&#x9762;
&#x2192; &#x7B49;&#x5F85; fixture-ready
&#x2192; xcrun simctl io booted screenshot output.png
</code></pre>
<h4 id="&#x65B9;&#x6848; C&#xFF1A;Android Emulator"><a href="#&#x65B9;&#x6848; C&#xFF1A;Android Emulator"></a>&#x65B9;&#x6848; C&#xFF1A;Android Emulator</h4>
<p>&#x76EE;&#x6807;&#x662F;&#x901A;&#x8FC7;&#x811A;&#x672C;&#x5B8C;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x542F;&#x52A8; Emulator
&#x2192; &#x6253;&#x5F00;&#x6307;&#x5B9A;&#x9875;&#x9762;
&#x2192; &#x7B49;&#x5F85; fixture-ready
&#x2192; adb exec-out screencap -p &gt; output.png
</code></pre>
<p>&#x9996;&#x671F;&#x53EA;&#x8981;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x80FD;&#x81EA;&#x52A8;&#x622A;&#x56FE;&#x5373;&#x53EF;&#x5F00;&#x59CB;&#xFF1B;&#x9636;&#x6BB5;&#x7ED3;&#x675F;&#x524D;&#x8865;&#x9F50;&#x53E6;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x7684;&#x4EBA;&#x5DE5;&#x6216;&#x81EA;&#x52A8;&#x622A;&#x56FE;&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x4E00;&#x4E2A;&#x624B;&#x5199; Fixture &#x53EF;&#x4EE5;&#x91CD;&#x590D;&#x6253;&#x5F00;&#xFF1B;</li>
<li>&#x76F8;&#x540C; Fixture &#x8FDE;&#x7EED;&#x622A;&#x56FE;&#x5E03;&#x5C40;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x622A;&#x56FE;&#x5C3A;&#x5BF8;&#x3001;&#x50CF;&#x7D20;&#x5BC6;&#x5EA6;&#x548C; Figma &#x6BD4;&#x8F83;&#x57FA;&#x51C6;&#x660E;&#x786E;&#xFF1B;</li>
<li>Storybook &#x4F7F;&#x7528;&#x4E0E;&#x5426;&#x5DF2;&#x6709;&#x7ED3;&#x8BBA;&#xFF1B;</li>
<li>&#x4E0D;&#x518D;&#x4F9D;&#x8D56;&#x4EBA;&#x5DE5;&#x4E34;&#x65F6;&#x70B9;&#x51FB;&#x624D;&#x80FD;&#x8FDB;&#x5165;&#x8BD5;&#x70B9;&#x72B6;&#x6001;&#xFF0C;&#x6216;&#x8005;&#x5DF2;&#x7ECF;&#x660E;&#x786E;&#x8BB0;&#x5F55;&#x9996;&#x671F;&#x4EBA;&#x5DE5;&#x6B65;&#x9AA4;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 2 &#x6B65;&#xFF1A;&#x5236;&#x4F5C; Golden Mapping"><a href="#&#x7B2C; 2 &#x6B65;&#xFF1A;&#x5236;&#x4F5C; Golden Mapping"></a>&#x7B2C; 2 &#x6B65;&#xFF1A;&#x5236;&#x4F5C; Golden Mapping</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;1&#xFF5E;2 &#x4EBA;&#x65E5;&#x3002;</p>
<p>&#x4E0D;&#x8981;&#x5148;&#x8BA9; AI &#x81EA;&#x52A8;&#x8BC6;&#x522B;&#x3002;&#x5148;&#x7531;&#x4EBA;&#x5BF9;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x505A;&#x4E00;&#x6B21;&#x6B63;&#x786E;&#x62C6;&#x89E3;&#xFF0C;&#x8FD9;&#x4EFD;&#x7ED3;&#x679C;&#x662F;&#x540E;&#x9762;&#x5224;&#x65AD;&#x81EA;&#x52A8; Mapping &#x662F;&#x5426;&#x8FDB;&#x6B65;&#x7684;&#x57FA;&#x51C6;&#x3002;</p>
<h3 id="&#x62C6;&#x5206;&#x539F;&#x5219;"><a href="#&#x62C6;&#x5206;&#x539F;&#x5219;"></a>&#x62C6;&#x5206;&#x539F;&#x5219;</h3>
<p>&#x5BF9;&#x6BCF;&#x4E2A;&#x4E3B;&#x8981;&#x89C6;&#x89C9;&#x533A;&#x5757;&#x5224;&#x65AD;&#xFF1A;</p>
<ul>
<li><code>EXISTING_MATERIAL</code>&#xFF1A;&#x5DF2;&#x6709;&#x7A33;&#x5B9A; RN &#x7EC4;&#x4EF6;&#xFF1B;</li>
<li><code>PRIMITIVE_COMPOSITION</code>&#xFF1A;&#x4F7F;&#x7528; View/Text/Image/Touchable &#x7B49;&#x7EC4;&#x5408;&#xFF1B;</li>
<li><code>PAGE_LOCAL</code>&#xFF1A;&#x53EA;&#x670D;&#x52A1;&#x5F53;&#x524D;&#x9875;&#x9762;&#x7684;&#x5C40;&#x90E8;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li><code>MATERIAL_GAP</code>&#xFF1A;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x6269;&#x5C55;&#x6216;&#x65B0;&#x589E;&#x7269;&#x6599;&#xFF1B;</li>
<li><code>HOST_REGION</code>&#xFF1A;&#x72B6;&#x6001;&#x680F;&#x3001;&#x5BFC;&#x822A;&#x3001;Safe Area &#x6216; Native &#x5BBF;&#x4E3B;&#xFF1B;</li>
<li><code>OUT_OF_SCOPE</code>&#xFF1A;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x5904;&#x7406;&#x3002;</li>
</ul>
<h3 id="Golden Mapping &#x6700;&#x5C0F;&#x5B57;&#x6BB5;"><a href="#Golden Mapping &#x6700;&#x5C0F;&#x5B57;&#x6BB5;"></a>Golden Mapping &#x6700;&#x5C0F;&#x5B57;&#x6BB5;</h3>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;figmaNodeId&quot;</span>: <span class="hljs-string">&quot;123:456&quot;</span>,
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;Result summary&quot;</span>,
  <span class="hljs-attr">&quot;decision&quot;</span>: <span class="hljs-string">&quot;EXISTING_MATERIAL&quot;</span>,
  <span class="hljs-attr">&quot;materialId&quot;</span>: <span class="hljs-string">&quot;affiliate.ResultSummaryCard&quot;</span>,
  <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x9AA8;&#x67B6;&#x548C;&#x72B6;&#x6001;&#x4E0E;&#x8BBE;&#x8BA1;&#x4E00;&#x81F4;&quot;</span>,
  <span class="hljs-attr">&quot;allowedDifferences&quot;</span>: [<span class="hljs-string">&quot;native font rasterization&quot;</span>],
  <span class="hljs-attr">&quot;owner&quot;</span>: <span class="hljs-string">&quot;reviewer&quot;</span>
}
</code></pre>
<p>&#x5B83;&#x4E0D;&#x9700;&#x8981;&#x6210;&#x4E3A;&#x6B63;&#x5F0F;&#x5E73;&#x53F0;&#x534F;&#x8BAE;&#xFF0C;&#x4F46;&#x5FC5;&#x987B;&#x53EF;&#x8BFB;&#x3001;&#x53EF; Diff&#x3001;&#x53EF;&#x8FFD;&#x8E2A;&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x6BCF;&#x4E2A;&#x4E3B;&#x8981;&#x533A;&#x57DF;&#x90FD;&#x6709;&#x552F;&#x4E00;&#x51B3;&#x7B56;&#xFF1B;</li>
<li>&#x6CA1;&#x6709;&#x4E3A;&#x4E86;&#x8FFD;&#x6C42;&#x7EC4;&#x4EF6;&#x6570;&#x91CF;&#x800C;&#x8FC7;&#x5EA6;&#x62C6;&#x5206;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x5C40;&#x90E8;&#x7ED3;&#x6784;&#x6CA1;&#x6709;&#x88AB;&#x8BEF;&#x5224;&#x6210;&#x516C;&#x5171;&#x7269;&#x6599;&#xFF1B;</li>
<li>&#x5BBF;&#x4E3B;&#x533A;&#x57DF;&#x6CA1;&#x6709;&#x8FDB;&#x5165;&#x9875;&#x9762;&#x89C6;&#x89C9;&#x751F;&#x6210;&#xFF1B;</li>
<li>UED &#x4E0E; RN Reviewer &#x5BF9;&#x62C6;&#x5206;&#x7ED3;&#x679C;&#x65E0;&#x91CD;&#x5927;&#x5206;&#x6B67;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 3 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog"><a href="#&#x7B2C; 3 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog"></a>&#x7B2C; 3 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;3&#xFF5E;5 &#x4EBA;&#x65E5;&#x3002;</p>
<p>Catalog &#x4E0D;&#x662F;&#x628A;&#x7EC4;&#x4EF6;&#x6E90;&#x7801;&#x4EA4;&#x7ED9;&#x6A21;&#x578B;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x5BFC;&#x51FA; TypeScript &#x7C7B;&#x578B;&#x5C31;&#x7ED3;&#x675F;&#x3002;&#x5B83;&#x8981;&#x544A;&#x8BC9; Agent&#xFF1A;&#x8FD9;&#x4E2A;&#x7EC4;&#x4EF6;&#x662F;&#x4EC0;&#x4E48;&#x3001;&#x4F55;&#x65F6;&#x4F7F;&#x7528;&#x3001;&#x600E;&#x6837;&#x7EC4;&#x5408;&#x3001;&#x5982;&#x4F55;&#x9A8C;&#x8BC1;&#x3002;</p>
<h3 id="Catalog &#x5206;&#x5C42;"><a href="#Catalog &#x5206;&#x5C42;"></a>Catalog &#x5206;&#x5C42;</h3>
<h4 id="Primitive"><a href="#Primitive"></a>Primitive</h4>
<ul>
<li><code>View</code></li>
<li><code>ScrollView</code></li>
<li><code>Image</code></li>
<li><code>@dp/rn/ui/Text</code></li>
<li><code>@dp/rn/ui/Touchable</code></li>
<li>&#x57FA;&#x7840; Button&#x3001;Input</li>
</ul>
<h4 id="Shared Material"><a href="#Shared Material"></a>Shared Material</h4>
<p>&#x4ECE; <code>src/components</code> &#x548C;&#x5916;&#x90E8; UI &#x5305;&#x4E2D;&#x9009;&#x62E9;&#x7A33;&#x5B9A;&#x7EC4;&#x4EF6;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>TitleBar / ActionBar</li>
<li>SearchBar</li>
<li>Tabs / TabBar</li>
<li>BottomButton</li>
<li>Empty / NoResult / LoadError / Loading</li>
<li>Divider</li>
<li>DropdownChip</li>
<li>UniversalList</li>
<li>Price</li>
</ul>
<h4 id="Affiliate Block"><a href="#Affiliate Block"></a>Affiliate Block</h4>
<p>&#x4E0E; Affiliate &#x9886;&#x57DF;&#x76F8;&#x5173;&#x3001;&#x4F46;&#x53EF;&#x4EE5;&#x8DE8;&#x9875;&#x9762;&#x590D;&#x7528;&#x7684;&#x5361;&#x7247;&#x6216;&#x5C55;&#x793A;&#x533A;&#x5757;&#x3002;</p>
<h4 id="Page Local"><a href="#Page Local"></a>Page Local</h4>
<p>&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x72EC;&#x6709;&#x7ED3;&#x6784;&#xFF0C;&#x4E0D;&#x8FDB;&#x5165;&#x516C;&#x5171; Catalog&#xFF0C;&#x53EA;&#x5728;&#x5F53;&#x524D; Page Plan &#x4E2D;&#x58F0;&#x660E;&#x3002;</p>
<h3 id="Material Definition &#x5EFA;&#x8BAE;&#x5B57;&#x6BB5;"><a href="#Material Definition &#x5EFA;&#x8BAE;&#x5B57;&#x6BB5;"></a>Material Definition &#x5EFA;&#x8BAE;&#x5B57;&#x6BB5;</h3>
<pre><code class="language-ts"><span class="hljs-keyword">interface</span> RNMaterialDefinition {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>;
  title: <span class="hljs-built_in">string</span>;
  category: <span class="hljs-string">&apos;primitive&apos;</span> | <span class="hljs-string">&apos;shared&apos;</span> | <span class="hljs-string">&apos;affiliate-block&apos;</span>;
  <span class="hljs-keyword">import</span>: {
    <span class="hljs-attr">source</span>: <span class="hljs-built_in">string</span>;
    exportName: <span class="hljs-built_in">string</span>;
    kind: <span class="hljs-string">&apos;named&apos;</span> | <span class="hljs-string">&apos;default&apos;</span>;
  };
  componentPath?: <span class="hljs-built_in">string</span>;
  description: <span class="hljs-built_in">string</span>;
  useWhen: <span class="hljs-built_in">string</span>[];
  doNotUseWhen: <span class="hljs-built_in">string</span>[];
  props: Record&lt;<span class="hljs-built_in">string</span>, {
    <span class="hljs-attr">type</span>: <span class="hljs-built_in">string</span>;
    required: <span class="hljs-built_in">boolean</span>;
    description: <span class="hljs-built_in">string</span>;
    allowedValues?: unknown[];
  }&gt;;
  children?: {
    <span class="hljs-attr">mode</span>: <span class="hljs-string">&apos;none&apos;</span> | <span class="hljs-string">&apos;single&apos;</span> | <span class="hljs-string">&apos;multiple&apos;</span> | <span class="hljs-string">&apos;render-prop&apos;</span>;
    allowed?: <span class="hljs-built_in">string</span>[];
  };
  states: <span class="hljs-built_in">string</span>[];
  figma?: {
    componentKeys?: <span class="hljs-built_in">string</span>[];
    variantMapping?: Record&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">string</span>&gt;;
  };
  examples: <span class="hljs-built_in">string</span>[];
  fixtureIds: <span class="hljs-built_in">string</span>[];
}
</code></pre>
<p>&#x9996;&#x671F;&#x4E0D;&#x9700;&#x8981;&#x652F;&#x6301;&#x6240;&#x6709;&#x5B57;&#x6BB5;&#xFF0C;&#x4F46; <code>id</code>&#x3001;import&#x3001;&#x4F7F;&#x7528;&#x573A;&#x666F;&#x3001;Props&#x3001;&#x72B6;&#x6001;&#x3001;&#x793A;&#x4F8B;&#x548C; Fixture &#x5FC5;&#x987B;&#x6709;&#x3002;</p>
<h3 id="&#x6BCF;&#x4E2A; Material &#x5FC5;&#x987B;&#x80FD;&#x72EC;&#x7ACB;&#x6E32;&#x67D3;"><a href="#&#x6BCF;&#x4E2A; Material &#x5FC5;&#x987B;&#x80FD;&#x72EC;&#x7ACB;&#x6E32;&#x67D3;"></a>&#x6BCF;&#x4E2A; Material &#x5FC5;&#x987B;&#x80FD;&#x72EC;&#x7ACB;&#x6E32;&#x67D3;</h3>
<p>Catalog &#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6;&#x90FD;&#x8981;&#x6709;&#x81F3;&#x5C11;&#x4E00;&#x4E2A; Fixture&#xFF1B;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x5B9E;&#x9645;&#x4F7F;&#x7528;&#x7684;&#x72B6;&#x6001;&#x5FC5;&#x987B;&#x5168;&#x90E8;&#x6709; Fixture&#x3002;</p>
<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x7EC4;&#x4EF6;&#x65E0;&#x6CD5;&#x8131;&#x79BB; Redux&#x3001;API&#x3001;Navigator &#x6216;&#x5168;&#x5C40;&#x72B6;&#x6001;&#x72EC;&#x7ACB;&#x6E32;&#x67D3;&#xFF0C;&#x5B83;&#x6682;&#x65F6;&#x4E0D;&#x9002;&#x5408;&#x4F5C;&#x4E3A; Material&#x3002;&#x53EF;&#x4EE5;&#x5148;&#x505A;&#x5C55;&#x793A;&#x5C42; Adapter&#xFF0C;&#x628A;&#x4E1A;&#x52A1;&#x5BB9;&#x5668;&#x7559;&#x5728;&#x9875;&#x9762;&#x3002;</p>
<h3 id="&#x4E0D;&#x8981;&#x81EA;&#x52A8;&#x628A; src/components &#x5168;&#x91CF;&#x6CE8;&#x518C;"><a href="#&#x4E0D;&#x8981;&#x81EA;&#x52A8;&#x628A; src/components &#x5168;&#x91CF;&#x6CE8;&#x518C;"></a>&#x4E0D;&#x8981;&#x81EA;&#x52A8;&#x628A; <code>src/components</code> &#x5168;&#x91CF;&#x6CE8;&#x518C;</h3>
<p>&#x9700;&#x8981;&#x6392;&#x9664;&#xFF1A;</p>
<ul>
<li>&#x5185;&#x90E8;&#x76F4;&#x63A5;&#x8BF7;&#x6C42; API &#x7684;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x5F3A;&#x4F9D;&#x8D56; Redux Store &#x7684;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x5185;&#x90E8;&#x5199;&#x6B7B; Tracking &#x7684;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x53EA;&#x80FD;&#x5728;&#x67D0;&#x4E2A;&#x9875;&#x9762; Context &#x4E2D;&#x8FD0;&#x884C;&#x7684;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>Props &#x4E0D;&#x7A33;&#x5B9A;&#x6216;&#x5B58;&#x5728;&#x591A;&#x4E2A;&#x91CD;&#x590D;&#x7248;&#x672C;&#x7684;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x540D;&#x5B57;&#x901A;&#x7528;&#x4F46;&#x5B9E;&#x9645;&#x5305;&#x542B;&#x5F3A;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#x7684;&#x7EC4;&#x4EF6;&#x3002;</li>
</ul>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>Catalog &#x8986;&#x76D6;&#x8BD5;&#x70B9;&#x9875;&#x6240;&#x6709; <code>EXISTING_MATERIAL</code>&#xFF1B;</li>
<li>&#x6BCF;&#x4E2A; Material &#x6709;&#x7A33;&#x5B9A; import &#x548C; Fixture&#xFF1B;</li>
<li>&#x9519;&#x8BEF;&#x4F7F;&#x7528;&#x573A;&#x666F;&#x6709;&#x8BF4;&#x660E;&#xFF1B;</li>
<li>Catalog &#x53EF;&#x4EE5;&#x88AB;&#x811A;&#x672C;&#x8BFB;&#x53D6;&#x548C;&#x6821;&#x9A8C;&#xFF1B;</li>
<li>RN Reviewer &#x786E;&#x8BA4;&#x751F;&#x6210;&#x5668;&#x4E0D;&#x4F1A;&#x5F15;&#x7528;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;&#x7684;&#x7EC4;&#x4EF6;&#x7248;&#x672C;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 4 &#x6B65;&#xFF1A;&#x5B9A;&#x4E49; RN Page Plan"><a href="#&#x7B2C; 4 &#x6B65;&#xFF1A;&#x5B9A;&#x4E49; RN Page Plan"></a>&#x7B2C; 4 &#x6B65;&#xFF1A;&#x5B9A;&#x4E49; RN Page Plan</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;1&#xFF5E;2 &#x4EBA;&#x65E5;&#x3002;</p>
<p>Page Plan &#x662F; Figma &#x4E0E; RN Code &#x4E4B;&#x95F4;&#x7684;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#x3002;&#x5B83;&#x8981;&#x8DB3;&#x591F;&#x8868;&#x8FBE;&#x9875;&#x9762;&#x7ED3;&#x6784;&#xFF0C;&#x4F46;&#x4E0D;&#x627F;&#x8F7D; API&#x3001;Redux &#x548C; Tracking&#x3002;</p>
<h3 id="&#x9875;&#x9762;&#x7EA7;&#x4FE1;&#x606F;"><a href="#&#x9875;&#x9762;&#x7EA7;&#x4FE1;&#x606F;"></a>&#x9875;&#x9762;&#x7EA7;&#x4FE1;&#x606F;</h3>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;rn-page-plan.v1&quot;</span>,
  <span class="hljs-attr">&quot;pageId&quot;</span>: <span class="hljs-string">&quot;pilot-page&quot;</span>,
  <span class="hljs-attr">&quot;targetModule&quot;</span>: <span class="hljs-string">&quot;PILOT_PAGE&quot;</span>,
  <span class="hljs-attr">&quot;designWidth&quot;</span>: <span class="hljs-number">375</span>,
  <span class="hljs-attr">&quot;platforms&quot;</span>: [<span class="hljs-string">&quot;ios&quot;</span>, <span class="hljs-string">&quot;android&quot;</span>],
  <span class="hljs-attr">&quot;states&quot;</span>: [<span class="hljs-string">&quot;loading&quot;</span>, <span class="hljs-string">&quot;empty&quot;</span>, <span class="hljs-string">&quot;error&quot;</span>, <span class="hljs-string">&quot;content&quot;</span>],
  <span class="hljs-attr">&quot;root&quot;</span>: {},
  <span class="hljs-attr">&quot;unresolved&quot;</span>: []
}
</code></pre>
<h3 id="&#x8282;&#x70B9;&#x7EA7;&#x4FE1;&#x606F;"><a href="#&#x8282;&#x70B9;&#x7EA7;&#x4FE1;&#x606F;"></a>&#x8282;&#x70B9;&#x7EA7;&#x4FE1;&#x606F;</h3>
<p>&#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x81F3;&#x5C11;&#x8868;&#x8FBE;&#xFF1A;</p>
<ul>
<li>&#x7A33;&#x5B9A; node ID&#xFF1B;</li>
<li>&#x6765;&#x6E90; Figma Node ID&#xFF1B;</li>
<li>Material ID &#x6216; Primitive &#x7C7B;&#x578B;&#xFF1B;</li>
<li>Props&#xFF1B;</li>
<li>children&#xFF1B;</li>
<li>&#x5E03;&#x5C40;&#x610F;&#x56FE;&#xFF1B;</li>
<li>Token &#x6216;&#x8BBE;&#x8BA1;&#x503C;&#xFF1B;</li>
<li>Mock &#x6570;&#x636E;&#x5F15;&#x7528;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x7B56;&#x7565;&#xFF1B;</li>
<li>&#x672A;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x3002;</li>
</ul>
<h3 id="&#x660E;&#x786E;&#x4E0D;&#x653E;&#x5165; Page Plan"><a href="#&#x660E;&#x786E;&#x4E0D;&#x653E;&#x5165; Page Plan"></a>&#x660E;&#x786E;&#x4E0D;&#x653E;&#x5165; Page Plan</h3>
<ul>
<li>GraphQL &#x67E5;&#x8BE2;&#x6587;&#x672C;&#xFF1B;</li>
<li>Redux Action&#xFF1B;</li>
<li>Tracking Event&#xFF1B;</li>
<li>&#x6743;&#x9650;&#x5224;&#x65AD;&#xFF1B;</li>
<li>AB Test&#xFF1B;</li>
<li>Navigator &#x5177;&#x4F53;&#x4E1A;&#x52A1;&#x53C2;&#x6570;&#xFF1B;</li>
<li>&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x63A5;&#x53E3;&#x6570;&#x636E;&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x6267;&#x884C;&#x7684;&#x4EFB;&#x610F;&#x6A21;&#x578B;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x5185;&#x5BB9;&#x7531;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x9636;&#x6BB5;&#x5904;&#x7406;&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>Golden Mapping &#x53EF;&#x4EE5;&#x5B8C;&#x6574;&#x8F6C;&#x6362;&#x6210; Page Plan&#xFF1B;</li>
<li>Page Plan &#x80FD;&#x5728;&#x6CA1;&#x6709; Figma &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x91CD;&#x590D;&#x751F;&#x6210;&#x540C;&#x4E00;&#x89C6;&#x89C9;&#x9AA8;&#x67B6;&#xFF1B;</li>
<li>&#x672A;&#x8BC6;&#x522B;&#x533A;&#x57DF;&#x663E;&#x5F0F;&#x51FA;&#x73B0;&#x5728; <code>unresolved</code>&#xFF0C;&#x4E0D;&#x80FD;&#x9759;&#x9ED8;&#x964D;&#x7EA7;&#xFF1B;</li>
<li>Schema Diff &#x80FD;&#x8BA9;&#x4EBA;&#x770B;&#x51FA;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x53D8;&#x5316;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 5 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; Figma &#x5230; RN Page Plan"><a href="#&#x7B2C; 5 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; Figma &#x5230; RN Page Plan"></a>&#x7B2C; 5 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; Figma &#x5230; RN Page Plan</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;3&#xFF5E;5 &#x4EBA;&#x65E5;&#x3002;</p>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x8981;&#x8FFD;&#x6C42;&#x901A;&#x7528;&#x89C6;&#x89C9;&#x7406;&#x89E3;&#x3002;&#x56F4;&#x7ED5;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x5B9E;&#x73B0;&#x6700;&#x5C0F;&#x95ED;&#x73AF;&#xFF0C;&#x4F46;&#x6BCF;&#x6761;&#x89C4;&#x5219;&#x8981;&#x533A;&#x5206;&#x201C;&#x901A;&#x7528;&#x80FD;&#x529B;&#x201D;&#x548C;&#x201C;&#x9875;&#x9762;&#x7279;&#x4F8B;&#x201D;&#x3002;</p>
<h3 id="&#x89E3;&#x6790;&#x9636;&#x6BB5;"><a href="#&#x89E3;&#x6790;&#x9636;&#x6BB5;"></a>&#x89E3;&#x6790;&#x9636;&#x6BB5;</h3>
<p>&#x590D;&#x7528;&#x5DF2;&#x6709; Figma Parser &#x80FD;&#x529B;&#xFF0C;&#x81F3;&#x5C11;&#x83B7;&#x53D6;&#xFF1A;</p>
<ul>
<li>Frame &#x4E0E;&#x8282;&#x70B9;&#x5C42;&#x7EA7;&#xFF1B;</li>
<li>Component Instance &#x548C; Component Key&#xFF1B;</li>
<li>Variant/Component Properties&#xFF1B;</li>
<li>Auto Layout&#xFF1B;</li>
<li>Bounding Box&#xFF1B;</li>
<li>Text Style&#xFF1B;</li>
<li>Fill&#x3001;Stroke&#x3001;Radius&#x3001;Shadow&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x548C;&#x56FE;&#x6807;&#x5F15;&#x7528;&#xFF1B;</li>
<li>Preview PNG&#x3002;</li>
</ul>
<h3 id="Mapping &#x4F18;&#x5148;&#x7EA7;"><a href="#Mapping &#x4F18;&#x5148;&#x7EA7;"></a>Mapping &#x4F18;&#x5148;&#x7EA7;</h3>
<pre><code class="language-text">1. Figma Component Key &#x2192; Material ID &#x7684;&#x786E;&#x5B9A;&#x6620;&#x5C04;
2. &#x8282;&#x70B9; Metadata / Variant &#x2192; Material Props
3. Catalog &#x63CF;&#x8FF0;&#x4E0E;&#x5DF2;&#x6709;&#x4F7F;&#x7528;&#x793A;&#x4F8B;&#x68C0;&#x7D22;
4. AI &#x6839;&#x636E;&#x89C6;&#x89C9;&#x548C;&#x8BED;&#x4E49;&#x9009;&#x62E9;&#x5019;&#x9009;
5. &#x65E0;&#x6CD5;&#x786E;&#x8BA4;&#x5219;&#x8FDB;&#x5165; unresolved
</code></pre>
<p>AI &#x4E0D;&#x80FD;&#x8986;&#x76D6;&#x786E;&#x5B9A;&#x6027;&#x6620;&#x5C04;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x7F16;&#x9020; Catalog &#x4E2D;&#x4E0D;&#x5B58;&#x5728;&#x7684; Props&#x3002;</p>
<h3 id="&#x5E03;&#x5C40;&#x8F6C;&#x6362;&#x539F;&#x5219;"><a href="#&#x5E03;&#x5C40;&#x8F6C;&#x6362;&#x539F;&#x5219;"></a>&#x5E03;&#x5C40;&#x8F6C;&#x6362;&#x539F;&#x5219;</h3>
<ul>
<li>Auto Layout &#x4F18;&#x5148;&#x8F6C;&#x6362;&#x4E3A; RN Flexbox&#xFF1B;</li>
<li>&#x7EB5;&#x5411;&#x9875;&#x9762;&#x4F18;&#x5148; <code>flexDirection: column</code>&#xFF1B;</li>
<li>&#x5E76;&#x6392;&#x5185;&#x5BB9;&#x4F18;&#x5148; <code>row</code>&#xFF0C;&#x4E0D;&#x8981;&#x6839;&#x636E;&#x7EDD;&#x5BF9;&#x5750;&#x6807;&#x5806; <code>position: absolute</code>&#xFF1B;</li>
<li>Absolute &#x53EA;&#x7528;&#x4E8E;&#x6D6E;&#x5C42;&#x3001;&#x89D2;&#x6807;&#x3001;&#x8986;&#x76D6;&#x56FE;&#x7B49;&#x786E;&#x5B9E;&#x9700;&#x8981;&#x53E0;&#x653E;&#x7684;&#x7ED3;&#x6784;&#xFF1B;</li>
<li>Figma 375 &#x8BBE;&#x8BA1;&#x503C;&#x76F4;&#x63A5;&#x4F5C;&#x4E3A; <code>CustomStyleSheetV2</code> &#x8F93;&#x5165;&#x5750;&#x6807;&#xFF1B;</li>
<li>&#x56FA;&#x5B9A;&#x9AD8;&#x5EA6;&#x53EA;&#x5728;&#x8BBE;&#x8BA1;&#x548C;&#x5185;&#x5BB9;&#x7EA6;&#x675F;&#x660E;&#x786E;&#x65F6;&#x4F7F;&#x7528;&#xFF1B;</li>
<li>&#x6587;&#x672C;&#x5BB9;&#x5668;&#x9ED8;&#x8BA4;&#x5141;&#x8BB8;&#x6269;&#x5C55;&#xFF0C;&#x907F;&#x514D;&#x6CF0;&#x8BED;&#x3001;&#x7F05;&#x7538;&#x8BED;&#x6216;&#x957F;&#x6587;&#x6848;&#x88AB;&#x622A;&#x65AD;&#xFF1B;</li>
<li>Safe Area&#x3001;&#x7CFB;&#x7EDF;&#x72B6;&#x6001;&#x680F;&#x548C; Native &#x5BFC;&#x822A;&#x4E0D;&#x4ECE; Figma &#x666E;&#x901A; Frame &#x731C;&#x6D4B;&#x3002;</li>
</ul>
<h3 id="Token &#x4E0E;&#x81EA;&#x7531;&#x503C;"><a href="#Token &#x4E0E;&#x81EA;&#x7531;&#x503C;"></a>Token &#x4E0E;&#x81EA;&#x7531;&#x503C;</h3>
<p>&#x5148;&#x5C1D;&#x8BD5;&#x5339;&#x914D;&#x73B0;&#x6709;&#x989C;&#x8272;&#x3001;&#x5B57;&#x53F7;&#x3001;&#x95F4;&#x8DDD;&#x548C;&#x5706;&#x89D2;&#x5E38;&#x91CF;&#x3002;&#x65E0;&#x6CD5;&#x5339;&#x914D;&#x65F6;&#x8BB0;&#x5F55;&#x81EA;&#x7531;&#x503C;&#x548C;&#x5DEE;&#x5F02;&#xFF0C;&#x4E0D;&#x8981;&#x4E3A;&#x4E86;&#x201C;&#x5168;&#x90E8; Token &#x5316;&#x201D;&#x5077;&#x5077;&#x6539;&#x8BBE;&#x8BA1;&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x81EA;&#x52A8; Page Plan &#x80FD;&#x4E0E; Golden Mapping &#x505A;&#x7ED3;&#x6784;&#x5BF9;&#x6BD4;&#xFF1B;</li>
<li>&#x540C;&#x4E00;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x8FD0;&#x884C;&#xFF0C;Material &#x9009;&#x62E9;&#x548C;&#x8282;&#x70B9; ID &#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x6240;&#x6709;&#x4F4E;&#x53EF;&#x4FE1;&#x533A;&#x57DF;&#x90FD;&#x663E;&#x5F0F;&#x62A5;&#x544A;&#xFF1B;</li>
<li>Figma &#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5C40;&#x90E8;&#x533A;&#x57DF;&#x65F6;&#xFF0C;Page Plan Diff &#x4E3B;&#x8981;&#x96C6;&#x4E2D;&#x5728;&#x5BF9;&#x5E94;&#x8282;&#x70B9;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 6 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; RN Code Emitter"><a href="#&#x7B2C; 6 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; RN Code Emitter"></a>&#x7B2C; 6 &#x6B65;&#xFF1A;&#x5B9E;&#x73B0; RN Code Emitter</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;4&#xFF5E;6 &#x4EBA;&#x65E5;&#x3002;</p>
<p>Code Emitter &#x5E94;&#x5C3D;&#x91CF;&#x786E;&#x5B9A;&#x6027;&#xFF0C;&#x4E0D;&#x8BA9;&#x6A21;&#x578B;&#x6BCF;&#x6B21;&#x81EA;&#x7531;&#x53D1;&#x6325;&#x6587;&#x4EF6;&#x7ED3;&#x6784;&#x3002;</p>
<h3 id="&#x5EFA;&#x8BAE;&#x8F93;&#x51FA;"><a href="#&#x5EFA;&#x8BAE;&#x8F93;&#x51FA;"></a>&#x5EFA;&#x8BAE;&#x8F93;&#x51FA;</h3>
<pre><code class="language-text">src/pages/&lt;PilotPage&gt;/
  index.tsx
  style.ts
  components/
  fixtures.ts
  generated-source-map.json
</code></pre>
<p>&#x5B9E;&#x9645;&#x76EE;&#x5F55;&#x9075;&#x5FAA;&#x76EE;&#x6807;&#x9875;&#x9762;&#x73B0;&#x6709;&#x7EA6;&#x5B9A;&#xFF1B;<code>generated-source-map.json</code> &#x53EF;&#x4EE5;&#x653E;&#x5728;&#x5F00;&#x53D1;&#x4EA7;&#x7269;&#x76EE;&#x5F55;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x63D0;&#x4EA4;&#x751F;&#x4EA7;&#x4EE3;&#x7801;&#x3002;</p>
<h3 id="&#x6A21;&#x677F;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"><a href="#&#x6A21;&#x677F;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"></a>&#x6A21;&#x677F;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;</h3>
<ul>
<li>React / React Native imports&#xFF1B;</li>
<li>Catalog Material imports&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x7EC4;&#x4EF6;&#x7ED3;&#x6784;&#xFF1B;</li>
<li><code>CustomStyleSheetV2</code>&#xFF1B;</li>
<li>Mock Props &#x7C7B;&#x578B;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x72B6;&#x6001;&#x5206;&#x652F;&#xFF1B;</li>
<li><code>testID</code>&#xFF1B;</li>
<li><code>PageContainer</code> &#x63A5;&#x5165;&#x5360;&#x4F4D;&#xFF1B;</li>
<li>Figma Node &#x5230;&#x4EE3;&#x7801;&#x533A;&#x57DF;&#x7684;&#x6CE8;&#x91CA;&#x6216; source map&#x3002;</li>
</ul>
<h3 id="AI &#x53EF;&#x4EE5;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"><a href="#AI &#x53EF;&#x4EE5;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"></a>AI &#x53EF;&#x4EE5;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;</h3>
<ul>
<li>&#x4E3A; <code>PAGE_LOCAL</code> &#x533A;&#x57DF;&#x5EFA;&#x8BAE;&#x7EC4;&#x4EF6;&#x8FB9;&#x754C;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x5C40;&#x90E8;&#x7EAF;&#x5C55;&#x793A;&#x7EC4;&#x4EF6;&#x8349;&#x6848;&#xFF1B;</li>
<li>&#x6839;&#x636E; Page Plan &#x586B;&#x5145;&#x53D7;&#x7EA6;&#x675F; JSX&#xFF1B;</li>
<li>&#x89E3;&#x91CA;&#x672A;&#x89E3;&#x51B3;&#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x7ED9;&#x51FA; Catalog &#x7F3A;&#x53E3;&#x5EFA;&#x8BAE;&#x3002;</li>
</ul>
<h3 id="AI &#x4E0D;&#x5F97;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"><a href="#AI &#x4E0D;&#x5F97;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;"></a>AI &#x4E0D;&#x5F97;&#x8D1F;&#x8D23;&#x7684;&#x5185;&#x5BB9;</h3>
<ul>
<li>&#x7F16;&#x9020; Material import&#xFF1B;</li>
<li>&#x4F7F;&#x7528; Catalog &#x672A;&#x58F0;&#x660E;&#x7684; Props&#xFF1B;</li>
<li>&#x4FEE;&#x6539;&#x5168;&#x5C40;&#x4F9D;&#x8D56;&#x548C; RN &#x914D;&#x7F6E;&#xFF1B;</li>
<li>&#x81EA;&#x52A8;&#x63A5;&#x5165;&#x771F;&#x5B9E; API&#xFF1B;</li>
<li>&#x7F16;&#x9020; Tracking&#xFF1B;</li>
<li>&#x4FEE;&#x6539;&#x5DF2;&#x6709;&#x516C;&#x5171;&#x7269;&#x6599;&#x4EE5;&#x8FC1;&#x5C31;&#x5355;&#x9875;&#xFF1B;</li>
<li>&#x5728;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x65F6;&#x8986;&#x76D6;&#x4EBA;&#x5DE5;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<h3 id="&#x751F;&#x6210;&#x4EE3;&#x7801;&#x5206;&#x533A;"><a href="#&#x751F;&#x6210;&#x4EE3;&#x7801;&#x5206;&#x533A;"></a>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x5206;&#x533A;</h3>
<p>&#x4E3A;&#x540E;&#x7EED;&#x589E;&#x91CF;&#x66F4;&#x65B0;&#xFF0C;&#x81F3;&#x5C11;&#x533A;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">generated visual region
host integration region
manual page-local region
</code></pre>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6587;&#x4EF6;&#x5206;&#x79BB;&#x5B9E;&#x73B0;&#xFF1A;</p>
<pre><code class="language-text">PilotPageView.tsx       # &#x53EF;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x7684;&#x89C6;&#x89C9;&#x5C42;
PilotPageContainer.tsx  # &#x4EBA;&#x5DE5;&#x7EF4;&#x62A4;&#x7684;&#x4E1A;&#x52A1;&#x4E0E;&#x5BBF;&#x4E3B;&#x5C42;
</code></pre>
<p>&#x8FD9;&#x6BD4;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x5927;&#x6587;&#x4EF6;&#x91CC;&#x505A;&#x6587;&#x672C;&#x6807;&#x8BB0;&#x5408;&#x5E76;&#x66F4;&#x5BB9;&#x6613;&#x6392;&#x67E5;&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>Page Plan &#x53EF;&#x4EE5;&#x91CD;&#x590D;&#x751F;&#x6210;&#x76F8;&#x540C;&#x4EE3;&#x7801;&#x7ED3;&#x6784;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x901A;&#x8FC7; TypeScript &#x548C; Lint&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C42;&#x4E0D;&#x76F4;&#x63A5;&#x8BBF;&#x95EE; API&#x3001;Redux &#x6216; Navigator&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x63A5;&#x5165;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#x540E;&#xFF0C;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x5C42;&#x4E0D;&#x4F1A;&#x8986;&#x76D6;&#x4E1A;&#x52A1;&#x5C42;&#xFF1B;</li>
<li>Material import &#x5168;&#x90E8;&#x6765;&#x81EA; Catalog&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 7 &#x6B65;&#xFF1A;&#x63A5;&#x5165; RN &#x5BBF;&#x4E3B;&#x80FD;&#x529B;"><a href="#&#x7B2C; 7 &#x6B65;&#xFF1A;&#x63A5;&#x5165; RN &#x5BBF;&#x4E3B;&#x80FD;&#x529B;"></a>&#x7B2C; 7 &#x6B65;&#xFF1A;&#x63A5;&#x5165; RN &#x5BBF;&#x4E3B;&#x80FD;&#x529B;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;3&#xFF5E;4 &#x4EBA;&#x65E5;&#x3002;</p>
<p>&#x8FD9;&#x4E00;&#x90E8;&#x5206;&#x4EE5;&#x4EBA;&#x5DE5;&#x6216; FE Code Agent &#x8F85;&#x52A9;&#x5B8C;&#x6210;&#xFF0C;&#x4E0D;&#x4ECE; Figma &#x731C;&#x6D4B;&#x3002;</p>
<p>&#x9700;&#x8981;&#x63A5;&#x5165;&#xFF1A;</p>
<ul>
<li><code>PageContainer</code> &#x4E0E; MODULE&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C;&#x8FD4;&#x56DE;&#x884C;&#x4E3A;&#xFF1B;</li>
<li>API/GraphQL&#xFF1B;</li>
<li>Redux &#x6216;&#x672C;&#x5730; State&#xFF1B;</li>
<li>i18n key&#xFF1B;</li>
<li>Tracking&#xFF1B;</li>
<li>Safe Area&#xFF1B;</li>
<li>Loading/Error &#x5904;&#x7406;&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x8D44;&#x6E90;&#xFF1B;</li>
<li>&#x5E73;&#x53F0;&#x5206;&#x652F;&#xFF1B;</li>
<li>&#x5FC5;&#x8981;&#x7684; Native SDK&#x3002;</li>
</ul>
<h3 id="&#x6587;&#x6848;&#x5904;&#x7406;"><a href="#&#x6587;&#x6848;&#x5904;&#x7406;"></a>&#x6587;&#x6848;&#x5904;&#x7406;</h3>
<p>Figma &#x6587;&#x6848;&#x53EA;&#x4F5C;&#x4E3A;&#x8BBE;&#x8BA1;&#x53C2;&#x8003;&#x3002;&#x751F;&#x4EA7;&#x4EE3;&#x7801;&#x4F7F;&#x7528; i18n key&#xFF0C;&#x5E76;&#x901A;&#x8FC7; Fixture &#x63D0;&#x4F9B;&#xFF1A;</p>
<ul>
<li>&#x8BBE;&#x8BA1;&#x7A3F;&#x6587;&#x6848;&#xFF1B;</li>
<li>&#x957F;&#x6587;&#x672C;&#xFF1B;</li>
<li>&#x6CF0;&#x8BED;/&#x7F05;&#x7538;&#x8BED;&#x7B49;&#x884C;&#x9AD8;&#x654F;&#x611F;&#x6587;&#x672C;&#xFF1B;</li>
<li>&#x7F3A;&#x5931;&#x7FFB;&#x8BD1;&#x7684; fallback&#x3002;</li>
</ul>
<h3 id="&#x56FE;&#x7247;&#x548C;&#x56FE;&#x6807;"><a href="#&#x56FE;&#x7247;&#x548C;&#x56FE;&#x6807;"></a>&#x56FE;&#x7247;&#x548C;&#x56FE;&#x6807;</h3>
<p>&#x4F18;&#x5148;&#x987A;&#x5E8F;&#xFF1A;</p>
<ol>
<li><code>@shopee-rn/icon-library</code>&#xFF1B;</li>
<li>&#x9879;&#x76EE;&#x516C;&#x5171;&#x56FE;&#x7247;&#xFF1B;</li>
<li>&#x5DF2;&#x6709;&#x9875;&#x9762;&#x8D44;&#x6E90;&#xFF1B;</li>
<li>&#x4ECE; Figma &#x5BFC;&#x51FA;&#x5E76;&#x7ECF;&#x8FC7;&#x9879;&#x76EE;&#x56FE;&#x7247;&#x6821;&#x9A8C;&#x7684;&#x65B0;&#x8D44;&#x6E90;&#x3002;</li>
</ol>
<p>&#x4E0D;&#x8981;&#x628A; Figma &#x4E2D;&#x7684;&#x5E38;&#x7528;&#x56FE;&#x6807;&#x5168;&#x90E8;&#x5BFC;&#x51FA;&#x4E3A;&#x65B0;&#x7684; PNG&#x3002;</p>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x9875;&#x9762;&#x53EF;&#x4ECE; ShopeeRN &#x6B63;&#x5E38;&#x8FDB;&#x5165;&#x548C;&#x9000;&#x51FA;&#xFF1B;</li>
<li>&#x6240;&#x6709;&#x72B6;&#x6001;&#x90FD;&#x53EF;&#x901A;&#x8FC7; Fixture &#x6216; Mock &#x89E6;&#x53D1;&#xFF1B;</li>
<li>&#x65E0;&#x771F;&#x5B9E;&#x7F51;&#x7EDC;&#x65F6;&#x4ECD;&#x53EF;&#x5B8C;&#x6210;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#xFF1B;</li>
<li>Tracking&#x3001;API &#x548C; Navigator &#x4E0D;&#x5728;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x7EC4;&#x4EF6;&#x5185;&#x90E8;&#xFF1B;</li>
<li>&#x65B0;&#x589E;&#x56FE;&#x7247;&#x901A;&#x8FC7;&#x9879;&#x76EE;&#x8D44;&#x4EA7;&#x6821;&#x9A8C;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 8 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x89C6;&#x89C9;&#x5BF9;&#x6BD4;&#x95ED;&#x73AF;"><a href="#&#x7B2C; 8 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x89C6;&#x89C9;&#x5BF9;&#x6BD4;&#x95ED;&#x73AF;"></a>&#x7B2C; 8 &#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x89C6;&#x89C9;&#x5BF9;&#x6BD4;&#x95ED;&#x73AF;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;3&#xFF5E;4 &#x4EBA;&#x65E5;&#x3002;</p>
<h3 id="&#x7EDF;&#x4E00;&#x622A;&#x56FE;&#x5750;&#x6807;&#x7CFB;"><a href="#&#x7EDF;&#x4E00;&#x622A;&#x56FE;&#x5750;&#x6807;&#x7CFB;"></a>&#x7EDF;&#x4E00;&#x622A;&#x56FE;&#x5750;&#x6807;&#x7CFB;</h3>
<p>Figma &#x4E0E; Native &#x622A;&#x56FE;&#x6BD4;&#x8F83;&#x524D;&#x5148;&#x56FA;&#x5B9A;&#xFF1A;</p>
<ul>
<li>&#x8BBE;&#x5907;&#x903B;&#x8F91;&#x5BBD;&#x5EA6;&#xFF1B;</li>
<li>&#x622A;&#x56FE;&#x7269;&#x7406;&#x50CF;&#x7D20;&#xFF1B;</li>
<li>Pixel Ratio&#xFF1B;</li>
<li>Safe Area&#xFF1B;</li>
<li>&#x72B6;&#x6001;&#x680F;&#x548C;&#x5BFC;&#x822A;&#x680F;&#x662F;&#x5426;&#x7EB3;&#x5165;&#xFF1B;</li>
<li>&#x5B57;&#x4F53;&#x7F29;&#x653E;&#xFF1B;</li>
<li>&#x56FD;&#x5BB6;&#x548C;&#x8BED;&#x8A00;&#xFF1B;</li>
<li>iOS/Android &#x7248;&#x672C;&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x52A0;&#x8F7D;&#x5B8C;&#x6210;&#x6761;&#x4EF6;&#xFF1B;</li>
<li>&#x52A8;&#x753B;&#x5173;&#x95ED;&#x6216;&#x56FA;&#x5B9A;&#x5230;&#x67D0;&#x4E00;&#x5E27;&#x3002;</li>
</ul>
<p>&#x5982;&#x679C;&#x5750;&#x6807;&#x7CFB;&#x6CA1;&#x6709;&#x7EDF;&#x4E00;&#xFF0C;&#x540E;&#x9762;&#x7684; Diff &#x5206;&#x6570;&#x6CA1;&#x6709;&#x610F;&#x4E49;&#x3002;</p>
<h3 id="Diff &#x4EA7;&#x7269;"><a href="#Diff &#x4EA7;&#x7269;"></a>Diff &#x4EA7;&#x7269;</h3>
<p>&#x6BCF;&#x4E2A;&#x72B6;&#x6001;&#x81F3;&#x5C11;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code class="language-text">figma.png
rn.png
overlay.png
diff.png
report.json
</code></pre>
<p><code>report.json</code> &#x8BB0;&#x5F55;&#xFF1A;</p>
<ul>
<li>&#x9875;&#x9762;&#x4E0E;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x5E73;&#x53F0;&#x3001;&#x8BBE;&#x5907;&#x3001;&#x8BED;&#x8A00;&#xFF1B;</li>
<li>&#x622A;&#x56FE;&#x5C3A;&#x5BF8;&#xFF1B;</li>
<li>&#x50CF;&#x7D20;&#x5DEE;&#x5F02;&#x6307;&#x6807;&#xFF1B;</li>
<li>&#x88AB; Mask &#x7684;&#x52A8;&#x6001;&#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x5206;&#x7C7B;&#x540E;&#x7684;&#x4E3B;&#x8981;&#x5DEE;&#x5F02;&#xFF1B;</li>
<li>&#x6700;&#x7EC8; Review &#x7ED3;&#x8BBA;&#x3002;</li>
</ul>
<p>&#x9879;&#x76EE;&#x5DF2;&#x6709; <code>sharp</code>&#xFF0C;&#x9996;&#x671F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; Node &#x811A;&#x672C;&#x5B8C;&#x6210;&#x7F29;&#x653E;&#x3001;&#x5BF9;&#x9F50;&#x3001;Overlay &#x548C;&#x57FA;&#x7840;&#x50CF;&#x7D20; Diff&#xFF0C;&#x4E0D;&#x5FC5;&#x5148;&#x5F15;&#x5165;&#x5B8C;&#x6574;&#x89C6;&#x89C9;&#x6D4B;&#x8BD5;&#x5E73;&#x53F0;&#x3002;</p>
<h3 id="&#x5DEE;&#x5F02;&#x5206;&#x7C7B;"><a href="#&#x5DEE;&#x5F02;&#x5206;&#x7C7B;"></a>&#x5DEE;&#x5F02;&#x5206;&#x7C7B;</h3>
<p>&#x6BCF;&#x4E2A;&#x660E;&#x663E;&#x5DEE;&#x5F02;&#x5F52;&#x5165;&#x4EE5;&#x4E0B;&#x4E00;&#x79CD;&#xFF1A;</p>
<ul>
<li><code>PARSER</code>&#xFF1A;Figma &#x4FE1;&#x606F;&#x8BFB;&#x53D6;&#x9519;&#x8BEF;&#xFF1B;</li>
<li><code>MAPPING</code>&#xFF1A;&#x9009;&#x9519; Material&#xFF1B;</li>
<li><code>CATALOG</code>&#xFF1A;Material &#x63CF;&#x8FF0;&#x6216; Props &#x4E0D;&#x5B8C;&#x6574;&#xFF1B;</li>
<li><code>LAYOUT</code>&#xFF1A;Flex/&#x5C3A;&#x5BF8;&#x8F6C;&#x6362;&#x9519;&#x8BEF;&#xFF1B;</li>
<li><code>TOKEN</code>&#xFF1A;&#x989C;&#x8272;&#x3001;&#x5B57;&#x53F7;&#x3001;&#x5706;&#x89D2;&#x6216;&#x95F4;&#x8DDD;&#x9519;&#x8BEF;&#xFF1B;</li>
<li><code>ASSET</code>&#xFF1A;&#x56FE;&#x7247;&#x3001;&#x56FE;&#x6807;&#x6216;&#x88C1;&#x526A;&#x9519;&#x8BEF;&#xFF1B;</li>
<li><code>HOST</code>&#xFF1A;Safe Area&#x3001;&#x5BFC;&#x822A;&#x680F;&#x6216;&#x5E73;&#x53F0;&#x5BB9;&#x5668;&#x9519;&#x8BEF;&#xFF1B;</li>
<li><code>DATA</code>&#xFF1A;Mock &#x5185;&#x5BB9;&#x4E0D;&#x540C;&#xFF1B;</li>
<li><code>PLATFORM_NOISE</code>&#xFF1A;&#x5B57;&#x4F53;&#x6805;&#x683C;&#x5316;&#x7B49;&#x5141;&#x8BB8;&#x5DEE;&#x5F02;&#xFF1B;</li>
<li><code>DESIGN_EXCEPTION</code>&#xFF1A;&#x5B9E;&#x73B0;&#x7ECF;&#x8FC7; UED &#x6279;&#x51C6;&#x4E0E; Figma &#x4E0D;&#x540C;&#x3002;</li>
</ul>
<p>&#x5206;&#x7C7B;&#x6BD4;&#x5355;&#x4E00;&#x76F8;&#x4F3C;&#x5EA6;&#x5206;&#x6570;&#x66F4;&#x91CD;&#x8981;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x8F6E;&#x5E94;&#x8BE5;&#x4FEE; Parser&#x3001;Catalog&#x3001;Emitter &#x8FD8;&#x662F;&#x9875;&#x9762;&#x4EE3;&#x7801;&#x3002;</p>
<h3 id="&#x9996;&#x671F;&#x9A8C;&#x8BC1;&#x77E9;&#x9635;"><a href="#&#x9996;&#x671F;&#x9A8C;&#x8BC1;&#x77E9;&#x9635;"></a>&#x9996;&#x671F;&#x9A8C;&#x8BC1;&#x77E9;&#x9635;</h3>
<p>&#x6700;&#x4F4E;&#x8981;&#x6C42;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7EF4;&#x5EA6;</th>
<th>&#x6700;&#x4F4E;&#x8986;&#x76D6;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5E73;&#x53F0;</td>
<td>iOS + Android &#x5404;&#x4E00;&#x6B21;</td>
</tr>
<tr>
<td>&#x5C3A;&#x5BF8;</td>
<td>375 &#x57FA;&#x51C6; + &#x4E00;&#x4E2A; 320/&#x5C0F;&#x5C4F;</td>
</tr>
<tr>
<td>&#x8BED;&#x8A00;</td>
<td>Golden &#x8BED;&#x8A00; + &#x4E00;&#x4E2A;&#x957F;&#x6587;&#x672C;&#x6216;&#x884C;&#x9AD8;&#x654F;&#x611F;&#x8BED;&#x8A00;</td>
</tr>
<tr>
<td>&#x72B6;&#x6001;</td>
<td>content + loading + empty/error &#x4E2D;&#x81F3;&#x5C11;&#x4E24;&#x4E2A;</td>
</tr>
<tr>
<td>&#x4EA4;&#x4E92;</td>
<td>&#x8FD4;&#x56DE;&#x3001;&#x4E3B;&#x6309;&#x94AE;&#x3001;&#x6EDA;&#x52A8;/&#x8F93;&#x5165;&#x4E2D;&#x4E0E;&#x9875;&#x9762;&#x6709;&#x5173;&#x7684;&#x52A8;&#x4F5C;</td>
</tr>
</tbody>
</table>
<h3 id="&#x5B8C;&#x6210;&#x6807;&#x51C6;"><a href="#&#x5B8C;&#x6210;&#x6807;&#x51C6;"></a>&#x5B8C;&#x6210;&#x6807;&#x51C6;</h3>
<ul>
<li>&#x4E3B;&#x8981;&#x5DEE;&#x5F02;&#x90FD;&#x6709;&#x5206;&#x7C7B;&#xFF0C;&#x4E0D;&#x80FD;&#x53EA;&#x62A5;&#x544A;&#x4E00;&#x4E2A;&#x603B;&#x5206;&#xFF1B;</li>
<li>UED &#x786E;&#x8BA4;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x548C;&#x89C6;&#x89C9;&#x5C42;&#x7EA7;&#xFF1B;</li>
<li>RN Reviewer &#x786E;&#x8BA4;&#x6CA1;&#x6709;&#x4E3A;&#x50CF;&#x7D20;&#x5339;&#x914D;&#x7834;&#x574F;&#x54CD;&#x5E94;&#x5F0F;&#x6216;&#x591A;&#x8BED;&#x8A00;&#xFF1B;</li>
<li>&#x5141;&#x8BB8;&#x5DEE;&#x5F02;&#x88AB;&#x663E;&#x5F0F;&#x8BB0;&#x5F55;&#xFF1B;</li>
<li>&#x4FEE;&#x6B63;&#x80FD;&#x591F;&#x56DE;&#x5230; Catalog&#x3001;Mapping &#x6216; Emitter&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x5728;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x91CC;&#x6253;&#x8865;&#x4E01;&#x3002;</li>
</ul>
<h2 id="&#x7B2C; 9 &#x6B65;&#xFF1A;&#x8FD0;&#x884C;&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;"><a href="#&#x7B2C; 9 &#x6B65;&#xFF1A;&#x8FD0;&#x884C;&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;"></a>&#x7B2C; 9 &#x6B65;&#xFF1A;&#x8FD0;&#x884C;&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;1 &#x4EBA;&#x65E5;&#xFF0C;&#x53EF;&#x4E0E;&#x89C6;&#x89C9;&#x4FEE;&#x6B63;&#x5E76;&#x884C;&#x3002;</p>
<p>&#x81F3;&#x5C11;&#x8FD0;&#x884C;&#xFF1A;</p>
<pre><code class="language-bash">yarn ts-checker
yarn lint
yarn jest
yarn validate
yarn deps:circular:check
</code></pre>
<p>&#x5982;&#x679C;&#x5168;&#x91CF; Jest &#x6216; Lint &#x5B58;&#x5728;&#x5386;&#x53F2;&#x5931;&#x8D25;&#xFF0C;&#x5E94;&#x8BB0;&#x5F55;&#x57FA;&#x7EBF;&#xFF0C;&#x5E76;&#x81F3;&#x5C11;&#x5BF9;&#x65B0;&#x589E;&#x6587;&#x4EF6;&#x6267;&#x884C;&#x5B9A;&#x5411;&#x68C0;&#x67E5;&#x3002;&#x4E0D;&#x80FD;&#x4E3A;&#x4E86;&#x901A;&#x8FC7;&#x8BD5;&#x70B9;&#x4FEE;&#x6539;&#x65E0;&#x5173;&#x5386;&#x53F2;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x65B0;&#x589E;&#x6D4B;&#x8BD5;&#x91CD;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x9875;&#x9762;&#x72B6;&#x6001;&#x9009;&#x62E9;&#xFF1B;</li>
<li>Material Props &#x6620;&#x5C04;&#xFF1B;</li>
<li>&#x4E3B;&#x4EA4;&#x4E92; callback&#xFF1B;</li>
<li>&#x957F;&#x6587;&#x672C;&#x4E0D;&#x88AB;&#x56FA;&#x5B9A;&#x5BB9;&#x5668;&#x622A;&#x65AD;&#xFF1B;</li>
<li>Code Emitter Golden Test&#xFF1B;</li>
<li>&#x76F8;&#x540C; Page Plan &#x751F;&#x6210;&#x7ED3;&#x679C;&#x7A33;&#x5B9A;&#x3002;</li>
</ul>
<p>Jest Tree Snapshot &#x4E0D;&#x80FD;&#x66FF;&#x4EE3; Native Screenshot&#x3002;&#x5B83;&#x9002;&#x5408;&#x68C0;&#x67E5;&#x7EC4;&#x4EF6;&#x7ED3;&#x6784;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868; iOS/Android &#x7684;&#x771F;&#x5B9E;&#x89C6;&#x89C9;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x7B2C; 10 &#x6B65;&#xFF1A;&#x590D;&#x76D8;&#x5E76;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;"><a href="#&#x7B2C; 10 &#x6B65;&#xFF1A;&#x590D;&#x76D8;&#x5E76;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;"></a>&#x7B2C; 10 &#x6B65;&#xFF1A;&#x590D;&#x76D8;&#x5E76;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;</h2>
<p>&#x9884;&#x8BA1;&#xFF1A;1 &#x4EBA;&#x65E5;&#x3002;</p>
<h3 id="&#x5FC5;&#x987B;&#x8BB0;&#x5F55;&#x7684;&#x6570;&#x636E;"><a href="#&#x5FC5;&#x987B;&#x8BB0;&#x5F55;&#x7684;&#x6570;&#x636E;"></a>&#x5FC5;&#x987B;&#x8BB0;&#x5F55;&#x7684;&#x6570;&#x636E;</h3>
<ul>
<li>&#x603B;&#x6295;&#x5165;&#x4EBA;&#x65E5;&#xFF1B;</li>
<li>&#x73AF;&#x5883;&#x548C;&#x5DE5;&#x5177;&#x63A5;&#x5165;&#x8017;&#x65F6;&#xFF1B;</li>
<li>Catalog Material &#x6570;&#x91CF;&#xFF1B;</li>
<li>&#x76F4;&#x63A5;&#x590D;&#x7528;&#x3001;Primitive&#x3001;Page Local&#x3001;Gap &#x7684;&#x533A;&#x57DF;&#x6570;&#x91CF;&#xFF1B;</li>
<li>&#x81EA;&#x52A8; Mapping &#x4E0E; Golden Mapping &#x7684;&#x5DEE;&#x5F02;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x4FDD;&#x7559;&#x6BD4;&#x4F8B;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x4FEE;&#x6539;&#x7684;&#x6587;&#x4EF6;&#x548C;&#x539F;&#x56E0;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x6536;&#x655B;&#x8F6E;&#x6B21;&#xFF1B;</li>
<li>&#x5404;&#x7C7B;&#x89C6;&#x89C9;&#x95EE;&#x9898;&#x6570;&#x91CF;&#xFF1B;</li>
<li>iOS/Android &#x548C;&#x591A;&#x8BED;&#x8A00;&#x95EE;&#x9898;&#xFF1B;</li>
<li>&#x5982;&#x679C;&#x5B8C;&#x5168;&#x624B;&#x5199;&#xFF0C;RN Reviewer &#x4F30;&#x8BA1;&#x9700;&#x8981;&#x7684;&#x65F6;&#x95F4;&#x3002;</li>
</ul>
<h3 id="&#x7EE7;&#x7EED;&#x6761;&#x4EF6;"><a href="#&#x7EE7;&#x7EED;&#x6761;&#x4EF6;"></a>&#x7EE7;&#x7EED;&#x6761;&#x4EF6;</h3>
<p>&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6761;&#x4EF6;&#x518D;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;</p>
<ul>
<li>&#x76F8;&#x540C;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x6267;&#x884C;&#xFF0C;Page Plan &#x548C;&#x4E3B;&#x8981; Material &#x9009;&#x62E9;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x6240;&#x6709;&#x4E3B;&#x8981;&#x533A;&#x57DF;&#x90FD;&#x6709;&#x663E;&#x5F0F;&#x51B3;&#x7B56;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x80FD;&#x591F;&#x88AB; RN &#x5F00;&#x53D1;&#x7406;&#x89E3;&#x548C;&#x7EE7;&#x7EED;&#x7EF4;&#x62A4;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x95EE;&#x9898;&#x80FD;&#x5B9A;&#x4F4D;&#x5230;&#x660E;&#x786E;&#x5C42;&#x7EA7;&#xFF1B;</li>
<li>&#x6CA1;&#x6709;&#x56E0;&#x4E3A;&#x8BD5;&#x70B9;&#x5F15;&#x5165;&#x65B0;&#x7684;&#x7EBF;&#x4E0A; Runtime&#xFF1B;</li>
<li>Catalog &#x81F3;&#x5C11;&#x6709;&#x4E00;&#x90E8;&#x5206;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x7528;&#x4E8E;&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x5B9E;&#x9645;&#x6295;&#x5165;&#x6CA1;&#x6709;&#x663E;&#x8457;&#x8D85;&#x8FC7;&#x540C;&#x9875;&#x9762;&#x7EAF;&#x624B;&#x5199;&#x6210;&#x672C;&#x4E14;&#x770B;&#x4E0D;&#x5230;&#x590D;&#x7528;&#x6536;&#x76CA;&#x3002;</li>
</ul>
<p>&#x6700;&#x540E;&#x4E00;&#x6761;&#x9700;&#x8981;&#x53CD;&#x5411;&#x7406;&#x89E3;&#xFF1A;&#x7B2C;&#x4E00;&#x9875;&#x9762;&#x627F;&#x62C5;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x6210;&#x672C;&#xFF0C;&#x5355;&#x9875;&#x672A;&#x5FC5;&#x6BD4;&#x624B;&#x5199;&#x5FEB;&#xFF1B;&#x4F46;&#x5FC5;&#x987B;&#x80FD;&#x89E3;&#x91CA;&#x7B2C;&#x4E8C;&#x9875;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x66F4;&#x5FEB;&#x3002;&#x5982;&#x679C;&#x6240;&#x6709;&#x80FD;&#x529B;&#x90FD;&#x53EA;&#x670D;&#x52A1;&#x7B2C;&#x4E00;&#x9875;&#x9762;&#xFF0C;&#x5C31;&#x4E0D;&#x5E94;&#x7EE7;&#x7EED;&#x6269;&#x5927;&#x3002;</p>
<h2 id="3&#xFF5E;4 &#x5468;&#x5EFA;&#x8BAE;&#x6392;&#x671F;"><a href="#3&#xFF5E;4 &#x5468;&#x5EFA;&#x8BAE;&#x6392;&#x671F;"></a>3&#xFF5E;4 &#x5468;&#x5EFA;&#x8BAE;&#x6392;&#x671F;</h2>
<h3 id="&#x7B2C; 1 &#x5468;&#xFF1A;&#x73AF;&#x5883;&#x3001;&#x57FA;&#x7EBF;&#x4E0E; Catalog"><a href="#&#x7B2C; 1 &#x5468;&#xFF1A;&#x73AF;&#x5883;&#x3001;&#x57FA;&#x7EBF;&#x4E0E; Catalog"></a>&#x7B2C; 1 &#x5468;&#xFF1A;&#x73AF;&#x5883;&#x3001;&#x57FA;&#x7EBF;&#x4E0E; Catalog</h3>
<ul>
<li>&#x9501;&#x5B9A;&#x9875;&#x9762;&#x548C;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x8DD1;&#x901A; Hostless/Simulator&#xFF1B;</li>
<li>&#x5EFA;&#x7ACB; Fixture Runner&#xFF1B;</li>
<li>&#x5B8C;&#x6210; Storybook &#x9650;&#x65F6; Spike&#xFF1B;</li>
<li>&#x6253;&#x901A;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x622A;&#x56FE;&#xFF1B;</li>
<li>&#x5B8C;&#x6210; Golden Mapping&#xFF1B;</li>
<li>&#x5EFA;&#x7ACB;&#x9996;&#x6279; Material Catalog&#x3002;</li>
</ul>
<p>&#x5468;&#x672B;&#x4EA4;&#x4ED8;&#xFF1A;&#x53EF;&#x4EE5;&#x7A33;&#x5B9A;&#x6253;&#x5F00;&#x548C;&#x622A;&#x56FE;&#x7684;&#x624B;&#x5199;&#x9875;&#x9762;&#x9AA8;&#x67B6;&#xFF0C;&#x4EE5;&#x53CA;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x7684;&#x9875;&#x9762;&#x62C6;&#x5206;&#x3002;</p>
<h3 id="&#x7B2C; 2 &#x5468;&#xFF1A;Page Plan &#x4E0E; Code Emitter"><a href="#&#x7B2C; 2 &#x5468;&#xFF1A;Page Plan &#x4E0E; Code Emitter"></a>&#x7B2C; 2 &#x5468;&#xFF1A;Page Plan &#x4E0E; Code Emitter</h3>
<ul>
<li>Figma &#x89E3;&#x6790;&#x5F52;&#x4E00;&#x5316;&#xFF1B;</li>
<li>&#x81EA;&#x52A8; Material Mapping&#xFF1B;</li>
<li>RN Page Plan&#xFF1B;</li>
<li>TSX/style &#x6A21;&#x677F;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C42;&#x4E0E;&#x4E1A;&#x52A1;&#x5C42;&#x5206;&#x79BB;&#xFF1B;</li>
<li>Codegen Golden Test&#x3002;</li>
</ul>
<p>&#x5468;&#x672B;&#x4EA4;&#x4ED8;&#xFF1A;&#x4E0D;&#x63A5;&#x771F;&#x5B9E;&#x4E1A;&#x52A1;&#x7684;&#x751F;&#x6210;&#x9875;&#x9762;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; Mock &#x72B6;&#x6001;&#x8FD0;&#x884C;&#x3002;</p>
<h3 id="&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;"><a href="#&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;"></a>&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;</h3>
<ul>
<li>PageContainer&#x3001;MODULE&#x3001;Navigator&#xFF1B;</li>
<li>API/State/i18n/Tracking&#xFF1B;</li>
<li>iOS &#x4E0E; Android &#x622A;&#x56FE;&#xFF1B;</li>
<li>Figma Overlay/Diff&#xFF1B;</li>
<li>&#x4FEE;&#x6B63; Catalog&#x3001;Mapping &#x548C; Emitter&#xFF1B;</li>
<li>&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;&#x3002;</li>
</ul>
<p>&#x5468;&#x672B;&#x4EA4;&#x4ED8;&#xFF1A;&#x53EF;&#x8FDB;&#x5165;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x7684;&#x771F;&#x5B9E;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x3002;</p>
<h3 id="&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x4E0E;&#x590D;&#x76D8;"><a href="#&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x4E0E;&#x590D;&#x76D8;"></a>&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x4E0E;&#x590D;&#x76D8;</h3>
<p>&#x4EE5;&#x4E0B;&#x4EFB;&#x4E00;&#x60C5;&#x51B5;&#x51FA;&#x73B0;&#x65F6;&#x4F7F;&#x7528;&#x7B2C; 4 &#x5468;&#xFF1A;</p>
<ul>
<li>RN &#x73AF;&#x5883;&#x6216;&#x5185;&#x90E8; SDK &#x6392;&#x67E5;&#x8017;&#x65F6;&#xFF1B;</li>
<li>Storybook/&#x622A;&#x56FE;&#x65B9;&#x6848;&#x9700;&#x8981;&#x5207;&#x6362;&#xFF1B;</li>
<li>iOS &#x4E0E; Android &#x5DEE;&#x5F02;&#x8F83;&#x5927;&#xFF1B;</li>
<li>&#x8BBE;&#x8BA1;&#x72B6;&#x6001;&#x4E0D;&#x5B8C;&#x6574;&#xFF1B;</li>
<li>Material &#x9700;&#x8981;&#x5C55;&#x793A;&#x5C42; Adapter&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x9996;&#x6B21;&#x63A5;&#x5165;&#x591A;&#x8BED;&#x8A00;&#x548C; Safe Area&#x3002;</li>
</ul>
<p>&#x5982;&#x679C;&#x524D;&#x4E09;&#x5468;&#x987A;&#x5229;&#xFF0C;&#x7B2C; 4 &#x5468;&#x6539;&#x4E3A;&#x7B2C;&#x4E8C;&#x4E2A;&#x5C0F;&#x9875;&#x9762;&#x7684;&#x590D;&#x7528;&#x9884;&#x6F14;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x7EED;&#x6253;&#x78E8;&#x7B2C;&#x4E00;&#x9875;&#x9762;&#x7684;&#x50CF;&#x7D20;&#x5206;&#x6570;&#x3002;</p>
<h2 id="&#x7B2C;&#x4E00;&#x5468;&#x53EF;&#x4EE5;&#x7ACB;&#x5373;&#x6267;&#x884C;&#x7684;&#x4EFB;&#x52A1;&#x6E05;&#x5355;"><a href="#&#x7B2C;&#x4E00;&#x5468;&#x53EF;&#x4EE5;&#x7ACB;&#x5373;&#x6267;&#x884C;&#x7684;&#x4EFB;&#x52A1;&#x6E05;&#x5355;"></a>&#x7B2C;&#x4E00;&#x5468;&#x53EF;&#x4EE5;&#x7ACB;&#x5373;&#x6267;&#x884C;&#x7684;&#x4EFB;&#x52A1;&#x6E05;&#x5355;</h2>
<h3 id="Day 1"><a href="#Day 1"></a>Day 1</h3>
<ul>
<li>[ ] &#x786E;&#x8BA4;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x3001;Figma Node&#x3001;&#x72B6;&#x6001;&#x548C;&#x9A8C;&#x6536;&#x4EBA;&#xFF1B;</li>
<li>[ ] &#x627E; RN Reviewer &#x8FDB;&#x884C; 60 &#x5206;&#x949F;&#x9879;&#x76EE;&#x5BFC;&#x89C8;&#xFF1B;</li>
<li>[ ] &#x4F7F;&#x7528; Node 14.17.4 &#x542F;&#x52A8;&#x73B0;&#x6709; Hostless&#xFF1B;</li>
<li>[ ] &#x624B;&#x5DE5;&#x8FDB;&#x5165;&#x4E00;&#x4E2A;&#x5DF2;&#x6709;&#x9875;&#x9762;&#xFF1B;</li>
<li>[ ] &#x786E;&#x8BA4; iOS/Android &#x8C03;&#x8BD5;&#x8D44;&#x6E90;&#x3002;</li>
</ul>
<h3 id="Day 2"><a href="#Day 2"></a>Day 2</h3>
<ul>
<li>[ ] &#x6CE8;&#x518C;&#x5F00;&#x53D1;&#x6001; Fixture Page&#xFF1B;</li>
<li>[ ] &#x7528;&#x56FA;&#x5B9A; Mock &#x6E32;&#x67D3;&#x4E00;&#x4E2A;&#x5DF2;&#x6709;&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>[ ] &#x901A;&#x8FC7;&#x53C2;&#x6570;&#x5207;&#x6362;&#x81F3;&#x5C11;&#x4E24;&#x4E2A;&#x72B6;&#x6001;&#xFF1B;</li>
<li>[ ] &#x6839;&#x8282;&#x70B9;&#x8865;&#x7A33;&#x5B9A; <code>testID</code>&#xFF1B;</li>
<li>[ ] &#x4EA7;&#x51FA;&#x7B2C;&#x4E00;&#x5F20; Native PNG&#x3002;</li>
</ul>
<h3 id="Day 3"><a href="#Day 3"></a>Day 3</h3>
<ul>
<li>[ ] &#x9650;&#x65F6;&#x9A8C;&#x8BC1;&#x517C;&#x5BB9;&#x7684; RN Storybook&#xFF1B;</li>
<li>[ ] &#x540C;&#x65F6;&#x9A8C;&#x8BC1;&#x7CFB;&#x7EDF;&#x622A;&#x56FE;&#x547D;&#x4EE4;&#xFF1B;</li>
<li>[ ] &#x51B3;&#x5B9A; Storybook&#x3001;Fixture Runner &#x548C;&#x622A;&#x56FE;&#x901A;&#x9053;&#xFF1B;</li>
<li>[ ] &#x56FA;&#x5B9A;&#x622A;&#x56FE;&#x5C3A;&#x5BF8;&#x3001;&#x8BED;&#x8A00;&#x548C; Safe Area&#xFF1B;</li>
<li>[ ] &#x5199;&#x4E0B;&#x5DE5;&#x5177;&#x51B3;&#x7B56;&#xFF0C;&#x4E0D;&#x518D;&#x53CD;&#x590D;&#x6447;&#x6446;&#x3002;</li>
</ul>
<h3 id="Day 4"><a href="#Day 4"></a>Day 4</h3>
<ul>
<li>[ ] &#x4EBA;&#x5DE5;&#x62C6;&#x89E3; Figma &#x9875;&#x9762;&#xFF1B;</li>
<li>[ ] &#x6807;&#x8BB0; Existing/Primitive/PageLocal/Gap/Host&#xFF1B;</li>
<li>[ ] &#x4ECE; <code>src/components</code>&#x3001;<code>@dp/rn</code> &#x548C; <code>@shopee-rn/ui-common</code> &#x9009;&#x62E9;&#x9996;&#x6279; Material&#xFF1B;</li>
<li>[ ] &#x4E3A;&#x8BD5;&#x70B9;&#x5B9E;&#x9645;&#x4F7F;&#x7528;&#x72B6;&#x6001;&#x6DFB;&#x52A0; Fixture&#xFF1B;</li>
<li>[ ] &#x6392;&#x9664;&#x5F3A;&#x4E1A;&#x52A1;&#x8026;&#x5408;&#x7EC4;&#x4EF6;&#x3002;</li>
</ul>
<h3 id="Day 5"><a href="#Day 5"></a>Day 5</h3>
<ul>
<li>[ ] &#x5B8C;&#x6210; Golden Mapping&#xFF1B;</li>
<li>[ ] &#x5B8C;&#x6210;&#x9996;&#x7248; Material Definitions&#xFF1B;</li>
<li>[ ] &#x8BC4;&#x5BA1; Figma &#x533A;&#x5757;&#x4E0E; RN &#x7EC4;&#x4EF6;&#x8FB9;&#x754C;&#xFF1B;</li>
<li>[ ] &#x8BC4;&#x5BA1;&#x7B2C;&#x4E00;&#x5468;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x6709;&#x7A33;&#x5B9A;&#x622A;&#x56FE;&#x901A;&#x9053;&#xFF1B;</li>
<li>[ ] &#x786E;&#x8BA4;&#x7B2C;&#x4E8C;&#x5468;&#x53EF;&#x4EE5;&#x5F00;&#x59CB; Page Plan &#x548C; Emitter&#x3002;</li>
</ul>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x7EC8;&#x4EA4;&#x4ED8;&#x6E05;&#x5355;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x7EC8;&#x4EA4;&#x4ED8;&#x6E05;&#x5355;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x7EC8;&#x4EA4;&#x4ED8;&#x6E05;&#x5355;</h2>
<ul>
<li>[ ] <code>pilot-brief.md</code>&#xFF1B;</li>
<li>[ ] Golden Figma Frame &#x4E0E;&#x5404;&#x72B6;&#x6001; PNG&#xFF1B;</li>
<li>[ ] Fixture Runner &#x6216;&#x517C;&#x5BB9;&#x7684; RN Storybook&#xFF1B;</li>
<li>[ ] &#x9996;&#x6279; RN Material Catalog&#xFF1B;</li>
<li>[ ] Material Fixtures&#xFF1B;</li>
<li>[ ] Golden Mapping&#xFF1B;</li>
<li>[ ] RN Page Plan Schema &#x4E0E;&#x8BD5;&#x70B9;&#x5B9E;&#x4F8B;&#xFF1B;</li>
<li>[ ] Figma-to-Page-Plan&#xFF1B;</li>
<li>[ ] RN Code Emitter&#xFF1B;</li>
<li>[ ] &#x751F;&#x6210;&#x7684;&#x9875;&#x9762;&#x89C6;&#x89C9;&#x5C42;&#xFF1B;</li>
<li>[ ] &#x4EBA;&#x5DE5;&#x7EF4;&#x62A4;&#x7684;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x5C42;&#xFF1B;</li>
<li>[ ] iOS/Android Screenshot&#xFF1B;</li>
<li>[ ] Overlay&#x3001;Diff &#x548C;&#x5206;&#x7C7B;&#x62A5;&#x544A;&#xFF1B;</li>
<li>[ ] Type/Lint/Test &#x7ED3;&#x679C;&#xFF1B;</li>
<li>[ ] &#x9636;&#x6BB5;&#x590D;&#x76D8;&#x4E0E;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x5EFA;&#x8BAE;&#x3002;</li>
</ul>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E09;&#x6761;&#x539F;&#x5219;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E09;&#x6761;&#x539F;&#x5219;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E09;&#x6761;&#x539F;&#x5219;</h2>
<ol>
<li><strong>Native &#x7ED3;&#x679C;&#x624D;&#x662F;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;&#x3002;</strong> Storybook&#x3001;React Native Web &#x548C; Figma Preview &#x90FD;&#x662F;&#x8F85;&#x52A9;&#x73AF;&#x5883;&#x3002;</li>
<li><strong>&#x5148;&#x5EFA;&#x7ACB;&#x53EF;&#x91CD;&#x590D;&#x7684; Fixture &#x548C;&#x622A;&#x56FE;&#xFF0C;&#x518D;&#x505A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x3002;</strong> &#x6CA1;&#x6709;&#x9A8C;&#x8BC1;&#x95ED;&#x73AF;&#xFF0C;&#x751F;&#x6210;&#x5F97;&#x8D8A;&#x5FEB;&#x8D8A;&#x96BE;&#x6392;&#x67E5;&#x3002;</li>
<li><strong>&#x4F18;&#x5148;&#x6C89;&#x6DC0; Catalog&#x3001;Mapping &#x548C; Emitter&#xFF0C;&#x5C11;&#x5728;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x91CC;&#x6253;&#x4E00;&#x6B21;&#x6027;&#x8865;&#x4E01;&#x3002;</strong> &#x7B2C;&#x4E00;&#x9875;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x4E8E;&#x8BA9;&#x7B2C;&#x4E8C;&#x9875;&#x66F4;&#x5BB9;&#x6613;&#x3002;</li>
</ol>
`,E=[{level:1,title:"第一阶段：web-affiliate-rn 单页垂直切片实施手册",children:[{level:2,title:"阶段目标",children:[]},{level:2,title:"明确不做什么",children:[]},{level:2,title:"人员与职责",children:[]},{level:2,title:"第 0 步：锁定试点输入",children:[{level:3,title:"页面选择标准",children:[]},{level:3,title:"必须收集的输入",children:[]},{level:3,title:"形成 pilot-brief.md",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 1 步：跑通 RN 开发和截图环境",children:[{level:3,title:"熟悉最小 RN 工程路径",children:[]},{level:3,title:"建立开发态 Fixture Runner",children:[]},{level:3,title:"Storybook 可行性 Spike",children:[]},{level:3,title:"截图通道 Spike",children:[{level:4,title:"方案 A：Hostless 截图",children:[]},{level:4,title:"方案 B：iOS Simulator",children:[]},{level:4,title:"方案 C：Android Emulator",children:[]}]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 2 步：制作 Golden Mapping",children:[{level:3,title:"拆分原则",children:[]},{level:3,title:"Golden Mapping 最小字段",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 3 步：建立首批 RN Material Catalog",children:[{level:3,title:"Catalog 分层",children:[{level:4,title:"Primitive",children:[]},{level:4,title:"Shared Material",children:[]},{level:4,title:"Affiliate Block",children:[]},{level:4,title:"Page Local",children:[]}]},{level:3,title:"Material Definition 建议字段",children:[]},{level:3,title:"每个 Material 必须能独立渲染",children:[]},{level:3,title:"不要自动把 src/components 全量注册",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 4 步：定义 RN Page Plan",children:[{level:3,title:"页面级信息",children:[]},{level:3,title:"节点级信息",children:[]},{level:3,title:"明确不放入 Page Plan",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 5 步：实现 Figma 到 RN Page Plan",children:[{level:3,title:"解析阶段",children:[]},{level:3,title:"Mapping 优先级",children:[]},{level:3,title:"布局转换原则",children:[]},{level:3,title:"Token 与自由值",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 6 步：实现 RN Code Emitter",children:[{level:3,title:"建议输出",children:[]},{level:3,title:"模板负责的内容",children:[]},{level:3,title:"AI 可以负责的内容",children:[]},{level:3,title:"AI 不得负责的内容",children:[]},{level:3,title:"生成代码分区",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 7 步：接入 RN 宿主能力",children:[{level:3,title:"文案处理",children:[]},{level:3,title:"图片和图标",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 8 步：建立视觉对比闭环",children:[{level:3,title:"统一截图坐标系",children:[]},{level:3,title:"Diff 产物",children:[]},{level:3,title:"差异分类",children:[]},{level:3,title:"首期验证矩阵",children:[]},{level:3,title:"完成标准",children:[]}]},{level:2,title:"第 9 步：运行工程检查",children:[]},{level:2,title:"第 10 步：复盘并决定是否进入第二阶段",children:[{level:3,title:"必须记录的数据",children:[]},{level:3,title:"继续条件",children:[]}]},{level:2,title:"3～4 周建议排期",children:[{level:3,title:"第 1 周：环境、基线与 Catalog",children:[]},{level:3,title:"第 2 周：Page Plan 与 Code Emitter",children:[]},{level:3,title:"第 3 周：宿主接入与视觉闭环",children:[]},{level:3,title:"第 4 周：缓冲与复盘",children:[]}]},{level:2,title:"第一周可以立即执行的任务清单",children:[{level:3,title:"Day 1",children:[]},{level:3,title:"Day 2",children:[]},{level:3,title:"Day 3",children:[]},{level:3,title:"Day 4",children:[]},{level:3,title:"Day 5",children:[]}]},{level:2,title:"第一阶段最终交付清单",children:[]},{level:2,title:"第一阶段最重要的三条原则",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
