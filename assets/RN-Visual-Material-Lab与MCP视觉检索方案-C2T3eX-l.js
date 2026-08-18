const x={title:"RN Figma → Page Demo 技术方案",description:"面向 web-affiliate-rn，通过现有 RN 物料、可视化候选选择和 Native 验收，验证 Figma 到页面的 AI 生成闭环。"},F=`<h1 id="RN Figma &#x2192; Page Demo &#x6280;&#x672F;&#x65B9;&#x6848;"><a href="#RN Figma &#x2192; Page Demo &#x6280;&#x672F;&#x65B9;&#x6848;"></a>RN Figma &#x2192; Page Demo &#x6280;&#x672F;&#x65B9;&#x6848;</h1>
<h2 id="&#x8FD9;&#x662F;&#x4EC0;&#x4E48;"><a href="#&#x8FD9;&#x662F;&#x4EC0;&#x4E48;"></a>&#x8FD9;&#x662F;&#x4EC0;&#x4E48;</h2>
<p>&#x8FD9;&#x662F;&#x4E00;&#x5957;&#x9762;&#x5411; <code>web-affiliate-rn</code> &#x7684; Figma &#x9875;&#x9762;&#x8FD8;&#x539F;&#x65B9;&#x6848;&#x3002;</p>
<p>&#x5B83;&#x4E0D;&#x662F;&#x8BA9; AI &#x770B;&#x7740;&#x622A;&#x56FE;&#x81EA;&#x7531;&#x7F16;&#x5199; RN &#x9875;&#x9762;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x7167;&#x642C; Web &#x7684; Storybook &#x548C;&#x65E0;&#x5934;&#x6D4F;&#x89C8;&#x5668;&#x6D41;&#x7A0B;&#xFF0C;&#x800C;&#x662F;&#x8BA9; AI &#x4F18;&#x5148;&#x4ECE;&#x4ED3;&#x5E93;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x4E2D;&#x9009;&#x62E9;&#x5408;&#x9002;&#x7269;&#x6599;&#xFF0C;&#x7EC4;&#x5408;&#x6210;&#x53EF;&#x8FD0;&#x884C;&#x9875;&#x9762;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x771F;&#x5B9E; Native &#x753B;&#x9762;&#x9A8C;&#x6536;&#x3002;</p>
<p>&#x6838;&#x5FC3;&#x601D;&#x8DEF;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x628A;&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x53D8;&#x6210; AI &#x53EF;&#x4EE5;&#x67E5;&#x770B;&#x3001;&#x9009;&#x62E9;&#x548C;&#x7EC4;&#x5408;&#x7684;&#x53EF;&#x6267;&#x884C;&#x7269;&#x6599;&#xFF0C;&#x7528;&#x7ED3;&#x6784;&#x5316;&#x6620;&#x5C04;&#x8FDE;&#x63A5; Figma &#x4E0E;&#x9875;&#x9762;&#x751F;&#x6210;&#xFF0C;&#x7528;&#x771F;&#x5B9E; Native &#x9875;&#x9762;&#x5B8C;&#x6210;&#x6700;&#x7EC8;&#x9A8C;&#x8BC1;&#x3002;</p>
</blockquote>
<h2 id="&#x6574;&#x4F53;&#x65B9;&#x6848;"><a href="#&#x6574;&#x4F53;&#x65B9;&#x6848;"></a>&#x6574;&#x4F53;&#x65B9;&#x6848;</h2>
<pre><code class="language-text">Figma + &#x4E1A;&#x52A1;&#x9700;&#x6C42;
        &#x2193;
AI &#x62C6;&#x89E3;&#x9875;&#x9762;&#x533A;&#x57DF;
        &#x2193;
&#x4ECE; RN Material Catalog &#x7F29;&#x5C0F;&#x5019;&#x9009;&#x8303;&#x56F4;
        &#x2193;
&#x5728; Native Candidate Board &#x4E2D;&#x67E5;&#x770B;&#x771F;&#x5B9E;&#x7EC4;&#x4EF6;
        &#x2193;
&#x5F62;&#x6210; Material Mapping
        &#x2193;
&#x751F;&#x6210; RN Demo Page
        &#x2193;
Native &#x6574;&#x9875;&#x622A;&#x56FE;&#x9A8C;&#x6536;
        &#x2193;
&#x4FEE;&#x6B63; Mapping / &#x8865;&#x5145;&#x7269;&#x6599;
</code></pre>
<p>&#x8FD9;&#x6761;&#x94FE;&#x8DEF;&#x89E3;&#x51B3;&#x4E09;&#x4E2A;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;</p>
<ol>
<li>AI &#x5982;&#x4F55;&#x77E5;&#x9053;&#x4ED3;&#x5E93;&#x91CC;&#x5DF2;&#x7ECF;&#x6709;&#x54EA;&#x4E9B;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>AI &#x5982;&#x4F55;&#x5224;&#x65AD; Figma &#x533A;&#x57DF;&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x54EA;&#x4E2A;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x9875;&#x9762;&#x540E;&#x5982;&#x4F55;&#x786E;&#x8BA4;&#x5B83;&#x5728;&#x771F;&#x5B9E; InApp &#x73AF;&#x5883;&#x4E2D;&#x662F;&#x6B63;&#x786E;&#x7684;&#x3002;</li>
</ol>
<h2 id="&#x6838;&#x5FC3;&#x8BBE;&#x8BA1;"><a href="#&#x6838;&#x5FC3;&#x8BBE;&#x8BA1;"></a>&#x6838;&#x5FC3;&#x8BBE;&#x8BA1;</h2>
<h3 id="&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x6210;&#x4E3A;&#x53EF;&#x6267;&#x884C;&#x7269;&#x6599;"><a href="#&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x6210;&#x4E3A;&#x53EF;&#x6267;&#x884C;&#x7269;&#x6599;"></a>&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x6210;&#x4E3A;&#x53EF;&#x6267;&#x884C;&#x7269;&#x6599;</h3>
<p>&#x65B9;&#x6848;&#x4E0D;&#x590D;&#x5236;&#x3001;&#x4E0D;&#x8FC1;&#x79FB;&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x3002;</p>
<p>&#x7EC4;&#x4EF6;&#x4ECD;&#x7136;&#x4FDD;&#x7559;&#x5728;&#x539F;&#x4E1A;&#x52A1;&#x76EE;&#x5F55;&#x4E2D;&#xFF0C;Material Catalog &#x53EA;&#x8865;&#x5145; AI &#x9009;&#x62E9;&#x7EC4;&#x4EF6;&#x9700;&#x8981;&#x7684;&#x5173;&#x952E;&#x4FE1;&#x606F;&#xFF0C;&#x5E76;&#x4E3A;&#x7EC4;&#x4EF6;&#x51C6;&#x5907;&#x80FD;&#x591F;&#x7A33;&#x5B9A;&#x8FD0;&#x884C;&#x7684; Fixture&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;Material Catalog &#x4E0D;&#x662F;&#x7B2C;&#x4E8C;&#x5957;&#x7EC4;&#x4EF6;&#x5E93;&#xFF0C;&#x800C;&#x662F;&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x7684;&#x53EF;&#x6267;&#x884C;&#x7D22;&#x5F15;&#x3002;</p>
<h3 id="Metadata &#x7528;&#x4E8E;&#x7F29;&#x5C0F;&#x8303;&#x56F4;"><a href="#Metadata &#x7528;&#x4E8E;&#x7F29;&#x5C0F;&#x8303;&#x56F4;"></a>Metadata &#x7528;&#x4E8E;&#x7F29;&#x5C0F;&#x8303;&#x56F4;</h3>
<p>&#x7EC4;&#x4EF6;&#x6570;&#x91CF;&#x589E;&#x52A0;&#x540E;&#xFF0C;&#x4E0D;&#x80FD;&#x628A;&#x6240;&#x6709;&#x7EC4;&#x4EF6;&#x4E00;&#x6B21;&#x6027;&#x5C55;&#x793A;&#x7ED9; AI&#x3002;</p>
<p>&#x7CFB;&#x7EDF;&#x5148;&#x6839;&#x636E;&#x4E1A;&#x52A1;&#x57DF;&#x3001;UI &#x7C7B;&#x578B;&#x548C;&#x5C11;&#x91CF;&#x9875;&#x9762;&#x4FE1;&#x606F;&#xFF0C;&#x5C06;&#x5019;&#x9009;&#x7F29;&#x5C0F;&#x5230;&#x4E00;&#x4E2A;&#x53EF;&#x89C2;&#x5BDF;&#x8303;&#x56F4;&#x3002;Metadata &#x7684;&#x804C;&#x8D23;&#x53EA;&#x662F;&#x8FC7;&#x6EE4;&#x5019;&#x9009;&#xFF0C;&#x4E0D;&#x76F4;&#x63A5;&#x51B3;&#x5B9A;&#x6700;&#x7EC8;&#x6620;&#x5C04;&#x3002;</p>
<h3 id="&#x771F;&#x5B9E;&#x753B;&#x9762;&#x7528;&#x4E8E;&#x9009;&#x62E9;&#x7EC4;&#x4EF6;"><a href="#&#x771F;&#x5B9E;&#x753B;&#x9762;&#x7528;&#x4E8E;&#x9009;&#x62E9;&#x7EC4;&#x4EF6;"></a>&#x771F;&#x5B9E;&#x753B;&#x9762;&#x7528;&#x4E8E;&#x9009;&#x62E9;&#x7EC4;&#x4EF6;</h3>
<p>&#x5019;&#x9009;&#x7EC4;&#x4EF6;&#x4F1A;&#x5728; Native Candidate Board &#x4E2D;&#x8FD0;&#x884C;&#xFF0C;&#x5E76;&#x5728;&#x7EC4;&#x4EF6;&#x65C1;&#x663E;&#x793A;&#x7A33;&#x5B9A;&#x6807;&#x8BC6;&#x3002;</p>
<p>AI &#x770B;&#x5230;&#x7684;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x771F;&#x5B9E; RN &#x7EC4;&#x4EF6;&#x753B;&#x9762;&#xFF1B;</li>
<li>&#x7EC4;&#x4EF6;&#x548C; Fixture &#x7684;&#x8EAB;&#x4EFD;&#xFF1B;</li>
<li>&#x5F53;&#x524D;&#x72B6;&#x6001;&#x548C;&#x5FC5;&#x8981;&#x4F7F;&#x7528;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
<p>AI &#x5C06; Figma &#x533A;&#x57DF;&#x4E0E;&#x5019;&#x9009;&#x9762;&#x677F;&#x8FDB;&#x884C;&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#xFF0C;&#x518D;&#x9009;&#x62E9;&#x6700;&#x7EC8;&#x7EC4;&#x4EF6;&#x3002;&#x8FD9;&#x6837;&#x65E2;&#x4FDD;&#x7559;&#x89C6;&#x89C9;&#x5224;&#x65AD;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x8131;&#x79BB;&#x771F;&#x5B9E;&#x4EE3;&#x7801;&#x8D44;&#x4EA7;&#x3002;</p>
<h3 id="Mapping &#x662F;&#x6838;&#x5FC3;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;"><a href="#Mapping &#x662F;&#x6838;&#x5FC3;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;"></a>Mapping &#x662F;&#x6838;&#x5FC3;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;</h3>
<p>Figma &#x4E0D;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x5F62;&#x6210; Material Mapping&#x3002;</p>
<p>Mapping &#x8868;&#x8FBE;&#xFF1A;</p>
<ul>
<li>&#x9875;&#x9762;&#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x9009;&#x62E9;&#x7684; Material &#x548C; Fixture&#xFF1B;</li>
<li>&#x5C55;&#x793A; Props&#xFF1B;</li>
<li>&#x6CA1;&#x6709;&#x7269;&#x6599;&#x8986;&#x76D6;&#x7684;&#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x9009;&#x62E9;&#x7406;&#x7531;&#x548C;&#x9A8C;&#x8BC1;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<p>&#x5B83;&#x662F;&#x53EF; Review&#x3001;&#x53EF;&#x4FEE;&#x6539;&#x3001;&#x53EF;&#x91CD;&#x590D;&#x751F;&#x6210;&#x7684;&#x4E2D;&#x95F4;&#x7ED3;&#x679C;&#x3002;&#x7EC4;&#x4EF6;&#x9009;&#x9519;&#x65F6;&#x4FEE;&#x6539; Mapping&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x63A8;&#x7FFB;&#x6574;&#x5957;&#x9875;&#x9762;&#x4EE3;&#x7801;&#x3002;</p>
<h3 id="Native &#x9875;&#x9762;&#x662F;&#x6700;&#x7EC8;&#x4E8B;&#x5B9E;"><a href="#Native &#x9875;&#x9762;&#x662F;&#x6700;&#x7EC8;&#x4E8B;&#x5B9E;"></a>Native &#x9875;&#x9762;&#x662F;&#x6700;&#x7EC8;&#x4E8B;&#x5B9E;</h3>
<p>Web &#x9875;&#x9762;&#x53EF;&#x4EE5;&#x7528; DOM &#x548C;&#x6D4F;&#x89C8;&#x5668;&#x4F5C;&#x4E3A;&#x8FD0;&#x884C;&#x4E8B;&#x5B9E;&#xFF0C;RN &#x9875;&#x9762;&#x6700;&#x7EC8;&#x8FD0;&#x884C;&#x5728; iOS/Android Native Runtime &#x4E2D;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF1A;</p>
<ul>
<li>Candidate Board &#x5FC5;&#x987B;&#x8FD0;&#x884C;&#x771F;&#x5B9E; RN &#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>Demo Page &#x5FC5;&#x987B;&#x8FDB;&#x5165;&#x771F;&#x5B9E; RN Bundle&#xFF1B;</li>
<li>&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x5FC5;&#x987B;&#x57FA;&#x4E8E; Native &#x9875;&#x9762;&#x622A;&#x56FE;&#x3002;</li>
</ul>
<p>&#x6D4F;&#x89C8;&#x5668;&#x9884;&#x89C8;&#x53EF;&#x4EE5;&#x8F85;&#x52A9;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x66FF;&#x4EE3; InApp &#x9A8C;&#x6536;&#x3002;</p>
<h2 id="&#x7CFB;&#x7EDF;&#x7EC4;&#x6210;"><a href="#&#x7CFB;&#x7EDF;&#x7EC4;&#x6210;"></a>&#x7CFB;&#x7EDF;&#x7EC4;&#x6210;</h2>
<h3 id="RN Material Catalog"><a href="#RN Material Catalog"></a>RN Material Catalog</h3>
<p>&#x63CF;&#x8FF0;&#x54EA;&#x4E9B;&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x53EF;&#x4EE5;&#x88AB; AI &#x4F7F;&#x7528;&#xFF0C;&#x4EE5;&#x53CA;&#x5B83;&#x4EEC;&#x6709;&#x54EA;&#x4E9B;&#x7A33;&#x5B9A;&#x72B6;&#x6001;&#x3002;</p>
<h3 id="Fixture"><a href="#Fixture"></a>Fixture</h3>
<p>&#x4E3A;&#x7EC4;&#x4EF6;&#x63D0;&#x4F9B;&#x786E;&#x5B9A;&#x7684; Props &#x548C; Mock &#x72B6;&#x6001;&#xFF0C;&#x4F7F;&#x76F8;&#x540C;&#x8F93;&#x5165;&#x80FD;&#x591F;&#x91CD;&#x590D;&#x5F97;&#x5230;&#x76F8;&#x540C;&#x753B;&#x9762;&#x3002;</p>
<h3 id="Candidate Board"><a href="#Candidate Board"></a>Candidate Board</h3>
<p>&#x53EA;&#x5C55;&#x793A;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x76F8;&#x5173;&#x7684;&#x5C11;&#x91CF;&#x5019;&#x9009;&#x7EC4;&#x4EF6;&#xFF0C;&#x5E76;&#x628A;&#x7EC4;&#x4EF6;&#x8EAB;&#x4EFD;&#x76F4;&#x63A5;&#x6807;&#x5728;&#x771F;&#x5B9E;&#x753B;&#x9762;&#x65C1;&#x8FB9;&#xFF0C;&#x4F9B; AI &#x548C;&#x4EBA;&#x5FEB;&#x901F;&#x6BD4;&#x8F83;&#x3002;</p>
<h3 id="Material MCP"><a href="#Material MCP"></a>Material MCP</h3>
<p>&#x5411; Codex &#x63D0;&#x4F9B;&#x67E5;&#x8BE2;&#x5019;&#x9009;&#x3001;&#x8BFB;&#x53D6;&#x7EC4;&#x4EF6;&#x4FE1;&#x606F;&#x548C;&#x751F;&#x6210; Demo &#x7684;&#x80FD;&#x529B;&#x3002;&#x5B83;&#x8D1F;&#x8D23;&#x63D0;&#x4F9B;&#x4ED3;&#x5E93;&#x4E8B;&#x5B9E;&#xFF0C;&#x4E0D;&#x8D1F;&#x8D23;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6240;&#x6709;&#x63A8;&#x7406;&#x548C;&#x81EA;&#x52A8;&#x5316;&#x7684;&#x5927;&#x578B;&#x9ED1;&#x76D2;&#x3002;</p>
<h3 id="Demo Renderer"><a href="#Demo Renderer"></a>Demo Renderer</h3>
<p>&#x8BFB;&#x53D6; Material Mapping&#xFF0C;&#x5C06;&#x9009;&#x4E2D;&#x7684;&#x771F;&#x5B9E; RN &#x7EC4;&#x4EF6;&#x7EC4;&#x5408;&#x6210;&#x6574;&#x9875; Demo&#x3002;</p>
<h3 id="Native Verification"><a href="#Native Verification"></a>Native Verification</h3>
<p>&#x5728;&#x6A21;&#x62DF;&#x5668;&#x6216;&#x771F;&#x673A;&#x4E2D;&#x6253;&#x5F00; Demo&#xFF0C;&#x622A;&#x53D6;&#x6574;&#x9875;&#x753B;&#x9762;&#xFF0C;&#x4E0E; Figma &#x6BD4;&#x8F83;&#xFF0C;&#x5E76;&#x628A;&#x95EE;&#x9898;&#x5F52;&#x7C7B;&#x4E3A;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x3001;&#x5E03;&#x5C40;&#x3001;&#x72B6;&#x6001;&#x6216;&#x7269;&#x6599;&#x7F3A;&#x53E3;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6837;&#x8BBE;&#x8BA1;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6837;&#x8BBE;&#x8BA1;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6837;&#x8BBE;&#x8BA1;</h2>
<h3 id="&#x590D;&#x7528; Web &#x7684;&#x601D;&#x60F3;&#xFF0C;&#x4E0D;&#x590D;&#x5236; Web &#x7684;&#x8FD0;&#x884C;&#x65F6;"><a href="#&#x590D;&#x7528; Web &#x7684;&#x601D;&#x60F3;&#xFF0C;&#x4E0D;&#x590D;&#x5236; Web &#x7684;&#x8FD0;&#x884C;&#x65F6;"></a>&#x590D;&#x7528; Web &#x7684;&#x601D;&#x60F3;&#xFF0C;&#x4E0D;&#x590D;&#x5236; Web &#x7684;&#x8FD0;&#x884C;&#x65F6;</h3>
<p>Web &#x4E0E; RN &#x53EF;&#x4EE5;&#x5171;&#x4EAB;&#xFF1A;</p>
<ul>
<li>Material Catalog&#xFF1B;</li>
<li>&#x7EC4;&#x4EF6;&#x6620;&#x5C04;&#xFF1B;</li>
<li>&#x7ED3;&#x6784;&#x5316;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#xFF1B;</li>
<li>AI &#x751F;&#x6210;&#x4E0E; Review &#x6D41;&#x7A0B;&#x3002;</li>
</ul>
<p>&#x4F46;&#x4E24;&#x8005;&#x7684;&#x6E32;&#x67D3;&#x548C;&#x9A8C;&#x6536;&#x73AF;&#x5883;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code class="language-text">Web&#xFF1A;React Component &#x2192; DOM/CSS &#x2192; Browser Screenshot
RN&#xFF1A;RN Component &#x2192; Native View &#x2192; Simulator/Device Screenshot
</code></pre>
<p>&#x6240;&#x4EE5; RN &#x9700;&#x8981;&#x81EA;&#x5DF1;&#x7684; Candidate Board &#x548C; Native Verification&#x3002;</p>
<h3 id="&#x4F18;&#x5148;&#x590D;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x622A;&#x56FE;&#x751F;&#x6210;&#x4EE3;&#x7801;"><a href="#&#x4F18;&#x5148;&#x590D;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x622A;&#x56FE;&#x751F;&#x6210;&#x4EE3;&#x7801;"></a>&#x4F18;&#x5148;&#x590D;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x622A;&#x56FE;&#x751F;&#x6210;&#x4EE3;&#x7801;</h3>
<p>&#x76F4;&#x63A5; Screenshot-to-Code &#x5F88;&#x5BB9;&#x6613;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#x4ED3;&#x5E93;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#xFF0C;&#x8F93;&#x51FA;&#x4E5F;&#x96BE;&#x4EE5;&#x7B26;&#x5408;&#x9879;&#x76EE;&#x7EA6;&#x5B9A;&#x3002;</p>
<p>&#x8FD9;&#x5957;&#x65B9;&#x6848;&#x5148;&#x627E;&#x5DF2;&#x6709;&#x7269;&#x6599;&#xFF0C;&#x786E;&#x8BA4;&#x6CA1;&#x6709;&#x5408;&#x9002;&#x7EC4;&#x4EF6;&#x540E;&#x624D;&#x8BB0;&#x5F55;&#x7F3A;&#x53E3;&#x3002;&#x751F;&#x6210;&#x9875;&#x9762;&#x56E0;&#x6B64;&#x5929;&#x7136;&#x590D;&#x7528;&#x73B0;&#x6709;&#x8BBE;&#x8BA1;&#x7CFB;&#x7EDF;&#x548C;&#x5DE5;&#x7A0B;&#x8D44;&#x4EA7;&#x3002;</p>
<h3 id="&#x5148;&#x9A8C;&#x8BC1;&#x95ED;&#x73AF;&#xFF0C;&#x518D;&#x5EFA;&#x8BBE;&#x5E73;&#x53F0;"><a href="#&#x5148;&#x9A8C;&#x8BC1;&#x95ED;&#x73AF;&#xFF0C;&#x518D;&#x5EFA;&#x8BBE;&#x5E73;&#x53F0;"></a>&#x5148;&#x9A8C;&#x8BC1;&#x95ED;&#x73AF;&#xFF0C;&#x518D;&#x5EFA;&#x8BBE;&#x5E73;&#x53F0;</h3>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x5173;&#x952E;&#x4E0D;&#x662F;&#x62E5;&#x6709;&#x590D;&#x6742;&#x7684;&#x8BC6;&#x56FE;&#x7B97;&#x6CD5;&#xFF0C;&#x800C;&#x662F;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<ul>
<li>AI &#x80FD;&#x5426;&#x627E;&#x5230;&#x6B63;&#x786E;&#x5019;&#x9009;&#xFF1B;</li>
<li>&#x770B;&#x771F;&#x5B9E;&#x7EC4;&#x4EF6;&#x753B;&#x9762;&#x540E;&#x80FD;&#x5426;&#x9009;&#x5BF9;&#xFF1B;</li>
<li>Mapping &#x80FD;&#x5426;&#x751F;&#x6210;&#x53EF;&#x8FD0;&#x884C;&#x9875;&#x9762;&#xFF1B;</li>
<li>Native &#x622A;&#x56FE;&#x80FD;&#x5426;&#x53D1;&#x73B0;&#x5E76;&#x4FEE;&#x6B63;&#x95EE;&#x9898;&#x3002;</li>
</ul>
<p>&#x53EA;&#x6709;&#x8FD9;&#x4E9B;&#x57FA;&#x672C;&#x5047;&#x8BBE;&#x6210;&#x7ACB;&#xFF0C;&#x89C6;&#x89C9;&#x68C0;&#x7D22;&#x3001;&#x81EA;&#x52A8; Diff &#x548C;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;&#x624D;&#x6709;&#x6295;&#x5165;&#x4EF7;&#x503C;&#x3002;</p>
<h2 id="Demo &#x8303;&#x56F4;"><a href="#Demo &#x8303;&#x56F4;"></a>Demo &#x8303;&#x56F4;</h2>
<p>&#x672C;&#x671F; Demo &#x5305;&#x542B;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x7EC4;&#x771F;&#x5B9E; RN Material &#x548C; Fixture&#xFF1B;</li>
<li>&#x6309;&#x4E1A;&#x52A1;&#x57DF;&#x548C; UI &#x7C7B;&#x578B;&#x7B5B;&#x9009;&#x5019;&#x9009;&#xFF1B;</li>
<li>&#x5E26;&#x7EC4;&#x4EF6;&#x6807;&#x8BC6;&#x7684; Native Candidate Board&#xFF1B;</li>
<li>Material Mapping &#x751F;&#x6210;&#xFF1B;</li>
<li>RN Demo Page &#x751F;&#x6210;&#xFF1B;</li>
<li>Native Bundle &#x7F16;&#x8BD1;&#x548C;&#x6574;&#x9875;&#x9A8C;&#x6536;&#x5165;&#x53E3;&#x3002;</li>
</ul>
<p>&#x672C;&#x671F;&#x4E0D;&#x5305;&#x542B;&#xFF1A;</p>
<ul>
<li>&#x5168;&#x4ED3;&#x5E93;&#x7EC4;&#x4EF6;&#x8986;&#x76D6;&#xFF1B;</li>
<li>&#x5168;&#x91CF;&#x7EC4;&#x4EF6;&#x622A;&#x56FE;&#x5E73;&#x53F0;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#xFF1B;</li>
<li>&#x81EA;&#x52A8;&#x50CF;&#x7D20; Diff&#xFF1B;</li>
<li>&#x590D;&#x6742;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;&#xFF1B;</li>
<li>&#x6B63;&#x5F0F; RN &#x4EE3;&#x7801;&#x751F;&#x6210;&#x5668;&#xFF1B;</li>
<li>FE Code Agent / AI Code Agent &#x4E3B;&#x6D41;&#x7A0B;&#x96C6;&#x6210;&#xFF1B;</li>
<li>&#x7EBF;&#x4E0A;&#x52A8;&#x6001; Schema Runtime&#x3002;</li>
</ul>
<h2 id="Demo &#x5982;&#x4F55;&#x5224;&#x65AD;&#x6210;&#x529F;"><a href="#Demo &#x5982;&#x4F55;&#x5224;&#x65AD;&#x6210;&#x529F;"></a>Demo &#x5982;&#x4F55;&#x5224;&#x65AD;&#x6210;&#x529F;</h2>
<p>&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E; Figma &#x9875;&#x9762;&#x8FDB;&#x884C;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x6210;&#x529F;&#x4E0D;&#x662F;&#x201C;&#x751F;&#x6210;&#x4E86;&#x4E00;&#x5F20;&#x770B;&#x8D77;&#x6765;&#x8FD8;&#x53EF;&#x4EE5;&#x7684;&#x9875;&#x9762;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x540C;&#x65F6;&#x6EE1;&#x8DB3;&#xFF1A;</p>
<ol>
<li>&#x9875;&#x9762;&#x4E3B;&#x8981;&#x533A;&#x57DF;&#x90FD;&#x80FD;&#x5F97;&#x5230;&#x660E;&#x786E; Material &#x6216;&#x7269;&#x6599;&#x7F3A;&#x53E3;&#xFF1B;</li>
<li>&#x6BCF;&#x4E2A;&#x533A;&#x57DF;&#x7684;&#x5019;&#x9009;&#x6570;&#x91CF;&#x80FD;&#x591F;&#x63A7;&#x5236;&#x5728;&#x53EF;&#x89C2;&#x5BDF;&#x8303;&#x56F4;&#xFF1B;</li>
<li>AI &#x80FD;&#x6839;&#x636E; Candidate Board &#x9009;&#x62E9;&#x6B63;&#x786E;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>Mapping &#x80FD;&#x7A33;&#x5B9A;&#x751F;&#x6210;&#x53EF;&#x8FD0;&#x884C;&#x7684; RN Demo&#xFF1B;</li>
<li>Native &#x6574;&#x9875;&#x622A;&#x56FE;&#x80FD;&#x66B4;&#x9732;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x548C;&#x5E03;&#x5C40;&#x95EE;&#x9898;&#xFF1B;</li>
<li>&#x4FEE;&#x6539; Mapping &#x540E;&#x53EF;&#x4EE5;&#x5FEB;&#x901F;&#x91CD;&#x65B0;&#x751F;&#x6210;&#xFF1B;</li>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#x80FD;&#x591F;&#x590D;&#x7528;&#x9996;&#x4E2A;&#x9875;&#x9762;&#x7684; Catalog &#x548C;&#x6D41;&#x7A0B;&#x3002;</li>
</ol>
<p>&#x5982;&#x679C;&#x8FD9;&#x4E9B;&#x6761;&#x4EF6;&#x4E0D;&#x6210;&#x7ACB;&#xFF0C;&#x5E94;&#x5148;&#x4FEE;&#x6B63;&#x57FA;&#x672C;&#x65B9;&#x6848;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x7EED;&#x589E;&#x52A0;&#x5E73;&#x53F0;&#x80FD;&#x529B;&#x3002;</p>
<h2 id="&#x5F53;&#x524D;&#x72B6;&#x6001;"><a href="#&#x5F53;&#x524D;&#x72B6;&#x6001;"></a>&#x5F53;&#x524D;&#x72B6;&#x6001;</h2>
<p>&#x5F53;&#x524D; Demo &#x5DF2;&#x7ECF;&#x5B8C;&#x6210;&#xFF1A;</p>
<ul>
<li>&#x72EC;&#x7ACB; TypeScript Material MCP&#xFF1B;</li>
<li>RN Material Catalog &#x4E0E; Fixture&#xFF1B;</li>
<li>&#x5019;&#x9009;&#x7B5B;&#x9009;&#x548C; Candidate Board&#xFF1B;</li>
<li>Mapping &#x4E0E; Demo Page &#x751F;&#x6210;&#xFF1B;</li>
<li>Material Lab &#x5F00;&#x53D1;&#x6001;&#x5165;&#x53E3;&#xFF1B;</li>
<li>&#x771F;&#x5B9E; ShopeeRN Metro iOS Bundle &#x7F16;&#x8BD1;&#x9A8C;&#x8BC1;&#x3002;</li>
</ul>
<p>&#x4E0B;&#x4E00;&#x6B65;&#x5E94;&#x76F4;&#x63A5;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x8DD1;&#x5B8C;&#x6574;&#x6D41;&#x7A0B;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x7EED;&#x6269;&#x5C55;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x3002;</p>
<h2 id="&#x540E;&#x7EED;&#x6F14;&#x8FDB;"><a href="#&#x540E;&#x7EED;&#x6F14;&#x8FDB;"></a>&#x540E;&#x7EED;&#x6F14;&#x8FDB;</h2>
<p>&#x5F53;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x51FA;&#x73B0;&#x660E;&#x786E;&#x74F6;&#x9888;&#x540E;&#xFF0C;&#x518D;&#x6309;&#x95EE;&#x9898;&#x589E;&#x52A0;&#x80FD;&#x529B;&#xFF1A;</p>
<pre><code class="language-text">&#x5019;&#x9009;&#x592A;&#x591A;
  &#x2192; &#x5B8C;&#x5584;&#x5206;&#x7C7B;&#x548C;&#x4F7F;&#x7528;&#x8BC1;&#x636E;

&#x6B63;&#x786E;&#x7EC4;&#x4EF6;&#x7ECF;&#x5E38;&#x53EC;&#x56DE;&#x4E0D;&#x5230;
  &#x2192; &#x8865;&#x5145; Fixture &#x548C;&#x8BC6;&#x522B;&#x4FE1;&#x606F;

&#x76F8;&#x4F3C;&#x7EC4;&#x4EF6;&#x4ECD;&#x96BE;&#x5224;&#x65AD;
  &#x2192; &#x589E;&#x52A0;&#x7248;&#x672C;&#x5316;&#x622A;&#x56FE;&#x6216;&#x89C6;&#x89C9;&#x68C0;&#x7D22;

&#x6574;&#x9875;&#x4EBA;&#x5DE5;&#x6BD4;&#x8F83;&#x6210;&#x672C;&#x8FC7;&#x9AD8;
  &#x2192; &#x589E;&#x52A0; Overlay &#x548C;&#x89C6;&#x89C9; Diff

&#x8BBE;&#x5907;&#x64CD;&#x4F5C;&#x91CD;&#x590D;
  &#x2192; &#x63A5;&#x5165; Maestro / Appium

&#x95ED;&#x73AF;&#x7A33;&#x5B9A;
  &#x2192; &#x63A5;&#x5165; FE Code Agent / AI Code Agent
</code></pre>
<p>&#x672A;&#x6765;&#x53EF;&#x4EE5;&#x8FDB;&#x4E00;&#x6B65;&#x4ECE; Figma &#x8FD8;&#x539F;&#x6F14;&#x8FDB;&#x5230; Material-first &#x539F;&#x578B;&#x751F;&#x4EA7;&#xFF0C;&#x4F46;&#x524D;&#x63D0;&#x4ECD;&#x7136;&#x662F;&#x540C;&#x4E00;&#x5957; Material&#x3001;Mapping &#x548C; Native &#x9A8C;&#x8BC1;&#x80FD;&#x591F;&#x88AB;&#x771F;&#x5B9E;&#x9879;&#x76EE;&#x8BC1;&#x660E;&#x6709;&#x6548;&#x3002;</p>
<h2 id="&#x540E;&#x7EED;&#x7EC6;&#x5316;&#x9879;"><a href="#&#x540E;&#x7EED;&#x7EC6;&#x5316;&#x9879;"></a>&#x540E;&#x7EED;&#x7EC6;&#x5316;&#x9879;</h2>
<p>&#x4EE5;&#x4E0B;&#x5185;&#x5BB9;&#x4E0D;&#x5728;&#x6574;&#x4F53;&#x65B9;&#x6848;&#x9636;&#x6BB5;&#x9501;&#x6B7B;&#xFF0C;&#x7B49;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x8BD5;&#x70B9;&#x540E;&#x518D;&#x8BA8;&#x8BBA;&#xFF1A;</p>
<ul>
<li>Material Catalog &#x7684;&#x5B8C;&#x6574;&#x5B57;&#x6BB5;&#xFF1B;</li>
<li>Fixture &#x8986;&#x76D6;&#x548C;&#x7EF4;&#x62A4;&#x65B9;&#x5F0F;&#xFF1B;</li>
<li>Candidate Board &#x6BCF;&#x6279;&#x5019;&#x9009;&#x6570;&#x91CF;&#xFF1B;</li>
<li>MCP Tool &#x7684;&#x6700;&#x7EC8;&#x53C2;&#x6570;&#xFF1B;</li>
<li>Mapping Schema&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x5E03;&#x5C40;&#x8868;&#x8FBE;&#xFF1B;</li>
<li>&#x622A;&#x56FE;&#x8BBE;&#x5907;&#x548C;&#x73AF;&#x5883;&#x57FA;&#x7EBF;&#xFF1B;</li>
<li>&#x81EA;&#x52A8; Diff &#x7B97;&#x6CD5;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5; Review &#x4F4D;&#x7F6E;&#xFF1B;</li>
<li>&#x4E0E;&#x73B0;&#x6709; Agent &#x5DE5;&#x4F5C;&#x6D41;&#x7684;&#x96C6;&#x6210;&#x65B9;&#x5F0F;&#x3002;</li>
</ul>
<p>&#x8FD0;&#x884C; Demo &#x89C1;<a href="./RN-Figma-Page-Demo-%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.md">&#x300A;RN Figma &#x2192; Page Demo &#x64CD;&#x4F5C;&#x624B;&#x518C;&#x300B;</a>&#x3002;</p>
`,E=[{level:1,title:"RN Figma → Page Demo 技术方案",children:[{level:2,title:"这是什么",children:[]},{level:2,title:"整体方案",children:[]},{level:2,title:"核心设计",children:[{level:3,title:"现有组件成为可执行物料",children:[]},{level:3,title:"Metadata 用于缩小范围",children:[]},{level:3,title:"真实画面用于选择组件",children:[]},{level:3,title:"Mapping 是核心中间产物",children:[]},{level:3,title:"Native 页面是最终事实",children:[]}]},{level:2,title:"系统组成",children:[{level:3,title:"RN Material Catalog",children:[]},{level:3,title:"Fixture",children:[]},{level:3,title:"Candidate Board",children:[]},{level:3,title:"Material MCP",children:[]},{level:3,title:"Demo Renderer",children:[]},{level:3,title:"Native Verification",children:[]}]},{level:2,title:"为什么这样设计",children:[{level:3,title:"复用 Web 的思想，不复制 Web 的运行时",children:[]},{level:3,title:"优先复用，而不是截图生成代码",children:[]},{level:3,title:"先验证闭环，再建设平台",children:[]}]},{level:2,title:"Demo 范围",children:[]},{level:2,title:"Demo 如何判断成功",children:[]},{level:2,title:"当前状态",children:[]},{level:2,title:"后续演进",children:[]},{level:2,title:"后续细化项",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
