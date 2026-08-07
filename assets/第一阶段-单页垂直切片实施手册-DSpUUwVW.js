const x={title:"第一阶段：web-affiliate-rn 单页垂直切片实施方案",description:"用一个真实页面验证 Figma 到 RN 代码和 Native 视觉反馈闭环。"},F=`<h1 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x65B9;&#x6848;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x65B9;&#x6848;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;web-affiliate-rn &#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x65B9;&#x6848;</h1>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x9A8C;&#x8BC1;&#x4E00;&#x4EF6;&#x4E8B;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x9A8C;&#x8BC1;&#x4E00;&#x4EF6;&#x4E8B;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x9A8C;&#x8BC1;&#x4E00;&#x4EF6;&#x4E8B;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x8981;&#x9A8C;&#x8BC1;&#x7684;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x80FD;&#x5426;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E; Figma &#x9875;&#x9762;&#xFF0C;&#x5728;&#x4E0D;&#x5347;&#x7EA7; RN &#x6280;&#x672F;&#x6808;&#x3001;&#x4E0D;&#x5EFA;&#x8BBE;&#x7EBF;&#x4E0A;&#x52A8;&#x6001; Runtime &#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x7A33;&#x5B9A;&#x751F;&#x6210;&#x7B26;&#x5408; <code>web-affiliate-rn</code> &#x89C4;&#x8303;&#x7684;&#x666E;&#x901A; React Native &#x4EE3;&#x7801;&#xFF0C;&#x5E76;&#x5728; Native &#x73AF;&#x5883;&#x4E2D;&#x5B8C;&#x6210;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#xFF1F;</p>
</blockquote>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x4EF7;&#x503C;&#x4E0D;&#x53EA;&#x662F;&#x4EA4;&#x4ED8;&#x4E00;&#x9875;&#xFF0C;&#x800C;&#x662F;&#x627E;&#x51FA;&#x672A;&#x6765;&#x53EF;&#x4EE5;&#x590D;&#x7528;&#x7684;&#x6700;&#x5C0F;&#x751F;&#x4EA7;&#x95ED;&#x73AF;&#x3002;</p>
<pre><code class="language-text">Figma
  &#x2192; RN Material Mapping
  &#x2192; RN Page Plan
  &#x2192; RN Code
  &#x2192; Native Render
  &#x2192; Visual Feedback
</code></pre>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x5148;&#x505A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x5148;&#x505A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x5148;&#x505A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;</h2>
<p>&#x5F53;&#x524D;&#x6709;&#x4E09;&#x4E2A;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#x9700;&#x8981;&#x4E00;&#x8D77;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<ol>
<li><code>web-affiliate-rn</code> &#x4E2D;&#x54EA;&#x4E9B;&#x7EC4;&#x4EF6;&#x771F;&#x6B63;&#x9002;&#x5408;&#x4F5C;&#x4E3A; AI Material&#xFF1B;</li>
<li>Figma &#x7684;&#x5E03;&#x5C40;&#x548C;&#x89C6;&#x89C9;&#x4FE1;&#x606F;&#x80FD;&#x5426;&#x7A33;&#x5B9A;&#x8F6C;&#x6362;&#x4E3A; RN Flexbox &#x4E0E;&#x9879;&#x76EE;&#x6837;&#x5F0F;&#xFF1B;</li>
<li>RN &#x9875;&#x9762;&#x80FD;&#x5426;&#x5EFA;&#x7ACB;&#x7C7B;&#x4F3C; Web &#x7684;&#x5FEB;&#x901F;&#x89C6;&#x89C9;&#x53CD;&#x9988;&#xFF0C;&#x4F46;&#x4EE5; Native &#x622A;&#x56FE;&#x800C;&#x975E;&#x6D4F;&#x89C8;&#x5668; DOM &#x4E3A;&#x4E8B;&#x5B9E;&#x3002;</li>
</ol>
<p>&#x5982;&#x679C;&#x5148;&#x505A;&#x5168;&#x91CF; Catalog&#x3001;&#x5B8C;&#x6574; Agent &#x6D41;&#x7A0B;&#x6216; RN Runtime&#xFF0C;&#x4F1A;&#x5728;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#x5C1A;&#x672A;&#x9A8C;&#x8BC1;&#x65F6;&#x5F15;&#x5165;&#x5927;&#x91CF;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x3002;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x80FD;&#x591F;&#x7528;&#x6700;&#x5C0F;&#x8303;&#x56F4;&#x540C;&#x65F6;&#x66B4;&#x9732;&#x8FD9;&#x4E09;&#x7C7B;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x600E;&#x4E48;&#x9009;"><a href="#&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x600E;&#x4E48;&#x9009;"></a>&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x600E;&#x4E48;&#x9009;</h2>
<p>&#x9996;&#x4E2A;&#x9875;&#x9762;&#x5E94;&#x5F53;&#x662F;&#x4E2D;&#x7B49;&#x590D;&#x6742;&#x5EA6;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6700;&#x7B80;&#x5355;&#x6216;&#x6700;&#x590D;&#x6742;&#x7684;&#x9875;&#x9762;&#x3002;</p>
<p>&#x9002;&#x5408;&#x7684;&#x9875;&#x9762;&#xFF1A;</p>
<ul>
<li>&#x8BE6;&#x60C5;&#x9875;&#x3001;&#x7ED3;&#x679C;&#x9875;&#x3001;&#x6210;&#x529F;&#x9875;&#x6216;&#x7B80;&#x5355;&#x8868;&#x5355;&#xFF1B;</li>
<li>5&#xFF5E;10 &#x4E2A;&#x4E3B;&#x8981;&#x89C6;&#x89C9;&#x533A;&#x5757;&#xFF1B;</li>
<li>&#x5927;&#x90E8;&#x5206;&#x7ED3;&#x6784;&#x9884;&#x8BA1;&#x53EF;&#x7531;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x8986;&#x76D6;&#xFF1B;</li>
<li>&#x5305;&#x542B; content &#x548C;&#x81F3;&#x5C11;&#x4E24;&#x4E2A; loading/empty/error &#x7B49;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x53EA;&#x6709;&#x5C11;&#x91CF;&#x4EA4;&#x4E92;&#x548C;&#x5BBF;&#x4E3B;&#x80FD;&#x529B;&#xFF1B;</li>
<li>&#x6709;&#x5B8C;&#x6574;&#x7684; 375 &#x5BBD; Figma &#x4E0E;&#x8BBE;&#x8BA1;&#x8D44;&#x6E90;&#x3002;</li>
</ul>
<p>&#x4E0D;&#x9002;&#x5408;&#x7684;&#x9875;&#x9762;&#xFF1A;</p>
<ul>
<li>Home&#xFF1B;</li>
<li>&#x590D;&#x6742;&#x56FE;&#x8868;&#xFF1B;</li>
<li>&#x65E0;&#x9650;&#x5217;&#x8868;&#x548C;&#x591A;&#x5C42;&#x8054;&#x52A8;&#x7B5B;&#x9009;&#xFF1B;</li>
<li>&#x5F3A;&#x4F9D;&#x8D56;&#x591A;&#x4E2A; Native SDK &#x7684;&#x6D41;&#x7A0B;&#xFF1B;</li>
<li>&#x8BBE;&#x8BA1;&#x672C;&#x8EAB;&#x4ECD;&#x5728;&#x9891;&#x7E41;&#x53D8;&#x5316;&#x7684;&#x9875;&#x9762;&#x3002;</li>
</ul>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x516D;&#x4E2A;&#x6838;&#x5FC3;&#x73AF;&#x8282;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x516D;&#x4E2A;&#x6838;&#x5FC3;&#x73AF;&#x8282;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x516D;&#x4E2A;&#x6838;&#x5FC3;&#x73AF;&#x8282;</h2>
<h3 id="&#x4E00;&#x3001;&#x5EFA;&#x7ACB;&#x7A33;&#x5B9A;&#x7684; Native &#x9884;&#x89C8;&#x4E0E;&#x622A;&#x56FE;&#x5165;&#x53E3;"><a href="#&#x4E00;&#x3001;&#x5EFA;&#x7ACB;&#x7A33;&#x5B9A;&#x7684; Native &#x9884;&#x89C8;&#x4E0E;&#x622A;&#x56FE;&#x5165;&#x53E3;"></a>&#x4E00;&#x3001;&#x5EFA;&#x7ACB;&#x7A33;&#x5B9A;&#x7684; Native &#x9884;&#x89C8;&#x4E0E;&#x622A;&#x56FE;&#x5165;&#x53E3;</h3>
<p>&#x5728;&#x751F;&#x6210;&#x4EFB;&#x4F55;&#x4EE3;&#x7801;&#x4E4B;&#x524D;&#xFF0C;&#x5148;&#x4FDD;&#x8BC1;&#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x9875;&#x9762;&#x72B6;&#x6001;&#x80FD;&#x591F;&#x88AB;&#x91CD;&#x590D;&#x6253;&#x5F00;&#x3001;&#x4F7F;&#x7528;&#x56FA;&#x5B9A; Mock &#x6570;&#x636E;&#x6E32;&#x67D3;&#xFF0C;&#x5E76;&#x8F93;&#x51FA;&#x7A33;&#x5B9A;&#x622A;&#x56FE;&#x3002;</p>
<p>Storybook &#x53EF;&#x4EE5;&#x627F;&#x62C5;&#x9694;&#x79BB;&#x6E32;&#x67D3;&#xFF0C;&#x4F46;&#x4E0D;&#x662F;&#x5F3A;&#x5236;&#x524D;&#x63D0;&#x3002;&#x7531;&#x4E8E;&#x9879;&#x76EE;&#x6280;&#x672F;&#x6808;&#x8F83;&#x65E7;&#xFF0C;&#x5E94;&#x9650;&#x65F6;&#x9A8C;&#x8BC1;&#x517C;&#x5BB9;&#x6027;&#xFF1A;</p>
<ul>
<li>&#x80FD;&#x5728;&#x4E0D;&#x5347;&#x7EA7; React&#x3001;RN&#x3001;Metro &#x548C; ShopeeRN Host &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8FD0;&#x884C;&#xFF0C;&#x5C31;&#x4F7F;&#x7528; RN Storybook&#xFF1B;</li>
<li>&#x65E0;&#x6CD5;&#x4F4E;&#x6210;&#x672C;&#x63A5;&#x5165;&#xFF0C;&#x5C31;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x5F00;&#x53D1;&#x6001; Fixture Page&#xFF1B;</li>
<li>&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x622A;&#x56FE;&#x59CB;&#x7EC8;&#x6765;&#x81EA; Simulator&#x3001;Emulator &#x6216;&#x771F;&#x673A;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E00;&#x73AF;&#x8282;&#x7684;&#x7ED3;&#x679C;&#x4E0D;&#x662F;&#x5B8C;&#x5584;&#x7684;&#x7EC4;&#x4EF6;&#x5E73;&#x53F0;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x7A33;&#x5B9A;&#x7684;&#x201C;&#x8F93;&#x5165;&#x72B6;&#x6001; &#x2192; Native &#x753B;&#x9762;&#x201D;&#x901A;&#x9053;&#x3002;</p>
<h3 id="&#x4E8C;&#x3001;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog"><a href="#&#x4E8C;&#x3001;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog"></a>&#x4E8C;&#x3001;&#x5EFA;&#x7ACB;&#x9996;&#x6279; RN Material Catalog</h3>
<p>&#x4ED3;&#x5E93;&#x4E2D;&#x7684;&#x7EC4;&#x4EF6;&#x76EE;&#x5F55;&#x4E0D;&#x7B49;&#x4E8E; Material Catalog&#x3002;&#x53EA;&#x6709;&#x80FD;&#x591F;&#x72EC;&#x7ACB;&#x6E32;&#x67D3;&#x3001;Props &#x76F8;&#x5BF9;&#x7A33;&#x5B9A;&#x3001;&#x5C55;&#x793A;&#x8FB9;&#x754C;&#x6E05;&#x695A;&#x7684;&#x7EC4;&#x4EF6;&#xFF0C;&#x624D;&#x9002;&#x5408;&#x8FDB;&#x5165;&#x9996;&#x6279; Catalog&#x3002;</p>
<p>&#x9996;&#x6279; Catalog &#x53EA;&#x8986;&#x76D6;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#xFF0C;&#x9884;&#x8BA1; 15&#xFF5E;25 &#x4E2A; Material&#xFF0C;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>RN &#x4E0E; <code>@dp/rn</code> &#x57FA;&#x7840;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>TitleBar&#x3001;SearchBar&#x3001;Tabs&#x3001;BottomButton &#x7B49;&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>Empty&#x3001;Loading&#x3001;LoadError &#x7B49;&#x72B6;&#x6001;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x771F;&#x6B63;&#x9700;&#x8981;&#x7684; Affiliate &#x5C55;&#x793A;&#x533A;&#x5757;&#x3002;</li>
</ul>
<p>&#x6BCF;&#x4E2A; Material &#x81F3;&#x5C11;&#x8981;&#x8BF4;&#x660E;&#xFF1A;</p>
<ul>
<li>&#x6B63;&#x786E; import&#xFF1B;</li>
<li>&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1B;</li>
<li>Props &#x548C;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x7EC4;&#x5408;&#x7EA6;&#x675F;&#xFF1B;</li>
<li>&#x4E00;&#x4E2A;&#x53EF;&#x8FD0;&#x884C; Fixture&#xFF1B;</li>
<li>&#x5982;&#x679C;&#x5B58;&#x5728;&#xFF0C;&#x5BF9;&#x5E94;&#x7684; Figma Component ID&#x3002;</li>
</ul>
<p>&#x76F4;&#x63A5;&#x8BBF;&#x95EE; API&#x3001;Redux&#x3001;Navigator &#x6216;&#x5F3A;&#x4E1A;&#x52A1; Context &#x7684;&#x7EC4;&#x4EF6;&#xFF0C;&#x5148;&#x62C6;&#x51FA;&#x5C55;&#x793A;&#x5C42; Adapter&#xFF0C;&#x4E0D;&#x80FD;&#x539F;&#x6837;&#x4F5C;&#x4E3A; Material&#x3002;</p>
<h3 id="&#x4E09;&#x3001;&#x4EBA;&#x5DE5;&#x5EFA;&#x7ACB;&#x4E00;&#x4EFD; Golden Mapping"><a href="#&#x4E09;&#x3001;&#x4EBA;&#x5DE5;&#x5EFA;&#x7ACB;&#x4E00;&#x4EFD; Golden Mapping"></a>&#x4E09;&#x3001;&#x4EBA;&#x5DE5;&#x5EFA;&#x7ACB;&#x4E00;&#x4EFD; Golden Mapping</h3>
<p>&#x5728;&#x8BC4;&#x4F30;&#x81EA;&#x52A8;&#x8BC6;&#x522B;&#x4E4B;&#x524D;&#xFF0C;&#x5148;&#x7531;&#x4EBA;&#x628A;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x6B63;&#x786E;&#x62C6;&#x4E00;&#x6B21;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x4E3B;&#x8981;&#x533A;&#x57DF;&#x53EA;&#x9700;&#x8981;&#x5224;&#x65AD;&#x5B83;&#x5C5E;&#x4E8E;&#xFF1A;</p>
<ul>
<li>&#x5DF2;&#x6709; Material&#xFF1B;</li>
<li>&#x57FA;&#x7840;&#x7EC4;&#x4EF6;&#x7EC4;&#x5408;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x5C40;&#x90E8;&#x7ED3;&#x6784;&#xFF1B;</li>
<li>&#x7269;&#x6599;&#x7F3A;&#x53E3;&#xFF1B;</li>
<li>Native &#x5BBF;&#x4E3B;&#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x672C;&#x9636;&#x6BB5;&#x4E0D;&#x5904;&#x7406;&#x3002;</li>
</ul>
<p>Golden Mapping &#x662F;&#x540E;&#x7EED;&#x8BC4;&#x4F30;&#x81EA;&#x52A8; Mapping &#x7684;&#x57FA;&#x51C6;&#x3002;&#x6CA1;&#x6709;&#x8FD9;&#x4EFD;&#x57FA;&#x51C6;&#xFF0C;&#x5C31;&#x53EA;&#x80FD;&#x8BC4;&#x4EF7;&#x6700;&#x7EC8;&#x622A;&#x56FE;&#x201C;&#x50CF;&#x4E0D;&#x50CF;&#x201D;&#xFF0C;&#x65E0;&#x6CD5;&#x77E5;&#x9053;&#x95EE;&#x9898;&#x6765;&#x81EA;&#x8BC6;&#x522B;&#x3001;&#x7269;&#x6599;&#x8FD8;&#x662F;&#x5E03;&#x5C40;&#x751F;&#x6210;&#x3002;</p>
<h3 id="&#x56DB;&#x3001;&#x5F62;&#x6210; RN Page Plan"><a href="#&#x56DB;&#x3001;&#x5F62;&#x6210; RN Page Plan"></a>&#x56DB;&#x3001;&#x5F62;&#x6210; RN Page Plan</h3>
<p>RN Page Plan &#x662F; Figma &#x4E0E; RN Code &#x4E4B;&#x95F4;&#x7684;&#x53EF;&#x5BA1;&#x8BA1;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#x3002;</p>
<p>&#x5B83;&#x8868;&#x8FBE;&#xFF1A;</p>
<ul>
<li>&#x9875;&#x9762;&#x548C;&#x72B6;&#x6001;&#xFF1B;</li>
<li>Material &#x4E0E; Props&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x7ED3;&#x6784;&#x548C;&#x5D4C;&#x5957;&#x5173;&#x7CFB;&#xFF1B;</li>
<li>&#x5E03;&#x5C40;&#x610F;&#x56FE;&#xFF1B;</li>
<li>Figma Node &#x6765;&#x6E90;&#xFF1B;</li>
<li>&#x672A;&#x89E3;&#x51B3;&#x533A;&#x57DF;&#x3002;</li>
</ul>
<p>&#x5B83;&#x4E0D;&#x8868;&#x8FBE;&#xFF1A;</p>
<ul>
<li>API&#xFF1B;</li>
<li>Redux&#xFF1B;</li>
<li>Tracking&#xFF1B;</li>
<li>&#x6743;&#x9650;&#x4E0E; AB Test&#xFF1B;</li>
<li>&#x5177;&#x4F53;&#x4E1A;&#x52A1;&#x5BFC;&#x822A;&#x53C2;&#x6570;&#x3002;</li>
</ul>
<p>Page Plan &#x9996;&#x671F;&#x53EA;&#x662F;&#x751F;&#x6210;&#x4EA7;&#x7269;&#xFF0C;&#x4E0D;&#x8FDB;&#x5165; App &#x8FD0;&#x884C;&#x65F6;&#x3002;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x8BA9;&#x6620;&#x5C04;&#x7ED3;&#x679C;&#x53EF;&#x4EE5; Review&#x3001;Diff &#x548C;&#x91CD;&#x590D;&#x751F;&#x6210;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5EFA;&#x7ACB;&#x53E6;&#x4E00;&#x5957;&#x7EBF;&#x4E0A;&#x4F4E;&#x4EE3;&#x7801;&#x534F;&#x8BAE;&#x3002;</p>
<h3 id="&#x4E94;&#x3001;&#x7F16;&#x8BD1;&#x4E3A;&#x666E;&#x901A; RN &#x4EE3;&#x7801;"><a href="#&#x4E94;&#x3001;&#x7F16;&#x8BD1;&#x4E3A;&#x666E;&#x901A; RN &#x4EE3;&#x7801;"></a>&#x4E94;&#x3001;&#x7F16;&#x8BD1;&#x4E3A;&#x666E;&#x901A; RN &#x4EE3;&#x7801;</h3>
<p>Code Emitter &#x5C06; Page Plan &#x8F6C;&#x4E3A;&#x9879;&#x76EE;&#x53EF;&#x7EF4;&#x62A4;&#x7684;&#xFF1A;</p>
<pre><code class="language-text">TSX
+ CustomStyleSheetV2
+ Material imports
+ &#x9875;&#x9762;&#x72B6;&#x6001;&#x9AA8;&#x67B6;
</code></pre>
<p>&#x751F;&#x6210;&#x8FC7;&#x7A0B;&#x5E94;&#x4EE5;&#x6A21;&#x677F;&#x548C; Catalog &#x7EA6;&#x675F;&#x4E3A;&#x4E3B;&#x3002;AI &#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x5224;&#x65AD; Material &#x548C;&#x751F;&#x6210;&#x9875;&#x9762;&#x5C40;&#x90E8;&#x5C55;&#x793A;&#x7ED3;&#x6784;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x7F16;&#x9020;&#x7EC4;&#x4EF6;&#x3001;Props&#x3001;API &#x6216;&#x4E1A;&#x52A1;&#x89C4;&#x5219;&#x3002;</p>
<p>&#x89C6;&#x89C9;&#x5C42;&#x4E0E;&#x5BBF;&#x4E3B;&#x903B;&#x8F91;&#x9700;&#x8981;&#x5206;&#x79BB;&#xFF1A;</p>
<pre><code class="language-text">Generated View&#xFF1A;&#x53EF;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x7684;&#x9875;&#x9762;&#x89C6;&#x89C9;&#x7ED3;&#x6784;
Host Container&#xFF1A;&#x4EBA;&#x5DE5;&#x6216; FE Agent &#x7EF4;&#x62A4;&#x7684; API&#x3001;State&#x3001;Navigator&#x3001;i18n&#x3001;Tracking
</code></pre>
<p>&#x8FD9;&#x6837;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x5C42;&#x65F6;&#xFF0C;&#x4E0D;&#x4F1A;&#x8986;&#x76D6;&#x5DF2;&#x7ECF;&#x63A5;&#x5165;&#x7684;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#x3002;</p>
<h3 id="&#x516D;&#x3001;&#x5EFA;&#x7ACB; Native &#x89C6;&#x89C9;&#x53CD;&#x9988;"><a href="#&#x516D;&#x3001;&#x5EFA;&#x7ACB; Native &#x89C6;&#x89C9;&#x53CD;&#x9988;"></a>&#x516D;&#x3001;&#x5EFA;&#x7ACB; Native &#x89C6;&#x89C9;&#x53CD;&#x9988;</h3>
<p>Web &#x65B9;&#x6848;&#x4F9D;&#x8D56;&#x6D4F;&#x89C8;&#x5668;&#x622A;&#x56FE;&#x548C; DOM Geometry&#xFF1B;RN &#x65B9;&#x6848;&#x6539;&#x4E3A; Native Screenshot&#x3002;</p>
<p>&#x9700;&#x8981;&#x56FA;&#x5B9A;&#xFF1A;</p>
<ul>
<li>&#x8BBE;&#x5907;&#x5C3A;&#x5BF8;&#x4E0E; Pixel Ratio&#xFF1B;</li>
<li>Safe Area &#x548C;&#x5BFC;&#x822A;&#x680F;&#x8303;&#x56F4;&#xFF1B;</li>
<li>&#x5E73;&#x53F0;&#x548C;&#x7CFB;&#x7EDF;&#x7248;&#x672C;&#xFF1B;</li>
<li>&#x56FD;&#x5BB6;&#x3001;&#x8BED;&#x8A00;&#x4E0E;&#x5B57;&#x4F53;&#x7F29;&#x653E;&#xFF1B;</li>
<li>Mock &#x6570;&#x636E;&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x52A0;&#x8F7D;&#x548C;&#x52A8;&#x753B;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<p>&#x6BCF;&#x8F6E;&#x9A8C;&#x8BC1;&#x81F3;&#x5C11;&#x4FDD;&#x7559;&#xFF1A;</p>
<ul>
<li>Figma &#x539F;&#x56FE;&#xFF1B;</li>
<li>RN &#x622A;&#x56FE;&#xFF1B;</li>
<li>Overlay&#xFF1B;</li>
<li>Diff&#xFF1B;</li>
<li>&#x5DEE;&#x5F02;&#x5206;&#x7C7B;&#x3002;</li>
</ul>
<p>&#x5DEE;&#x5F02;&#x4E0D;&#x80FD;&#x53EA;&#x7ED9;&#x4E00;&#x4E2A;&#x76F8;&#x4F3C;&#x5EA6;&#x5206;&#x6570;&#xFF0C;&#x9700;&#x8981;&#x5224;&#x65AD;&#x5B83;&#x5C5E;&#x4E8E;&#xFF1A;</p>
<ul>
<li>Material &#x9009;&#x9519;&#xFF1B;</li>
<li>Catalog &#x4FE1;&#x606F;&#x4E0D;&#x8DB3;&#xFF1B;</li>
<li>Layout &#x8F6C;&#x6362;&#x9519;&#x8BEF;&#xFF1B;</li>
<li>Token &#x6216;&#x8D44;&#x6E90;&#x9519;&#x8BEF;&#xFF1B;</li>
<li>Safe Area/&#x5BBF;&#x4E3B;&#x95EE;&#x9898;&#xFF1B;</li>
<li>iOS/Android &#x5B57;&#x4F53;&#x7B49;&#x5141;&#x8BB8;&#x5DEE;&#x5F02;&#x3002;</li>
</ul>
<p>&#x53EA;&#x6709;&#x95EE;&#x9898;&#x80FD;&#x591F;&#x88AB;&#x5206;&#x7C7B;&#xFF0C;&#x89C6;&#x89C9;&#x53CD;&#x9988;&#x624D;&#x80FD;&#x53CD;&#x8FC7;&#x6765;&#x6539;&#x5584; Mapping&#x3001;Catalog &#x548C; Emitter&#x3002;</p>
<h2 id="Figma &#x5230; RN &#x7684;&#x5173;&#x952E;&#x8F6C;&#x6362;&#x539F;&#x5219;"><a href="#Figma &#x5230; RN &#x7684;&#x5173;&#x952E;&#x8F6C;&#x6362;&#x539F;&#x5219;"></a>Figma &#x5230; RN &#x7684;&#x5173;&#x952E;&#x8F6C;&#x6362;&#x539F;&#x5219;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x9700;&#x8981;&#x786E;&#x8BA4;&#x51E0;&#x4E2A;&#x5173;&#x952E;&#x539F;&#x5219;&#xFF0C;&#x4E0D;&#x5FC5;&#x63D0;&#x524D;&#x8BBE;&#x8BA1;&#x5B8C;&#x6574;&#x534F;&#x8BAE;&#x3002;</p>
<h3 id="Material &#x6620;&#x5C04;&#x4F18;&#x5148;&#x7EA7;"><a href="#Material &#x6620;&#x5C04;&#x4F18;&#x5148;&#x7EA7;"></a>Material &#x6620;&#x5C04;&#x4F18;&#x5148;&#x7EA7;</h3>
<pre><code class="language-text">Figma Component ID &#x7684;&#x786E;&#x5B9A;&#x6620;&#x5C04;
&#x2192; Material Catalog &#x68C0;&#x7D22;
&#x2192; &#x5DF2;&#x6709;&#x9875;&#x9762;&#x4F7F;&#x7528;&#x8BC1;&#x636E;
&#x2192; AI &#x8BC6;&#x522B;&#x81EA;&#x7531;&#x7ED3;&#x6784;
&#x2192; &#x65E0;&#x6CD5;&#x786E;&#x8BA4;&#x5219;&#x663E;&#x5F0F;&#x62A5;&#x544A;&#x7F3A;&#x53E3;
</code></pre>
<p>&#x786E;&#x5B9A;&#x6620;&#x5C04;&#x4F18;&#x5148;&#x4E8E;&#x6A21;&#x578B;&#x5224;&#x65AD;&#xFF0C;AI &#x4E0D;&#x80FD;&#x4F7F;&#x7528; Catalog &#x4E2D;&#x4E0D;&#x5B58;&#x5728;&#x7684; Props&#x3002;</p>
<h3 id="&#x5E03;&#x5C40;&#x8F6C;&#x6362;"><a href="#&#x5E03;&#x5C40;&#x8F6C;&#x6362;"></a>&#x5E03;&#x5C40;&#x8F6C;&#x6362;</h3>
<ul>
<li>Figma Auto Layout &#x4F18;&#x5148;&#x8F6C;&#x6362;&#x4E3A; RN Flexbox&#xFF1B;</li>
<li>&#x907F;&#x514D;&#x6839;&#x636E;&#x7EDD;&#x5BF9;&#x5750;&#x6807;&#x5806;&#x53E0; <code>position: absolute</code>&#xFF1B;</li>
<li>375 &#x8BBE;&#x8BA1;&#x503C;&#x8FDB;&#x5165;&#x9879;&#x76EE;&#x5DF2;&#x6709;&#x7684; <code>CustomStyleSheetV2</code>&#xFF1B;</li>
<li>&#x6587;&#x672C;&#x5BB9;&#x5668;&#x9ED8;&#x8BA4;&#x5141;&#x8BB8;&#x6269;&#x5C55;&#xFF0C;&#x907F;&#x514D;&#x957F;&#x6587;&#x672C;&#x548C;&#x591A;&#x8BED;&#x8A00;&#x622A;&#x65AD;&#xFF1B;</li>
<li>Safe Area&#x3001;&#x7CFB;&#x7EDF;&#x72B6;&#x6001;&#x680F;&#x548C; Native &#x5BFC;&#x822A;&#x7531;&#x5BBF;&#x4E3B;&#x5904;&#x7406;&#x3002;</li>
</ul>
<h3 id="&#x7269;&#x6599;&#x4E0E;&#x9875;&#x9762;&#x7279;&#x4F8B;"><a href="#&#x7269;&#x6599;&#x4E0E;&#x9875;&#x9762;&#x7279;&#x4F8B;"></a>&#x7269;&#x6599;&#x4E0E;&#x9875;&#x9762;&#x7279;&#x4F8B;</h3>
<p>&#x9996;&#x671F;&#x53D1;&#x73B0;&#x7684;&#x7279;&#x6B8A;&#x7ED3;&#x6784;&#x4E0D;&#x80FD;&#x81EA;&#x52A8;&#x8FDB;&#x5165;&#x516C;&#x5171; Catalog&#xFF1A;</p>
<ul>
<li>&#x7B80;&#x5355;&#x7ED3;&#x6784;&#x4F7F;&#x7528;&#x57FA;&#x7840;&#x7EC4;&#x4EF6;&#x7EC4;&#x5408;&#xFF1B;</li>
<li>&#x5355;&#x9875;&#x7279;&#x4F8B;&#x7559;&#x5728;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x5F62;&#x6001;&#x7A33;&#x5B9A;&#x4F46;&#x8BC1;&#x636E;&#x4E0D;&#x8DB3;&#x7684;&#x7ED3;&#x6784;&#x53EA;&#x8BB0;&#x5F55;&#x4E3A;&#x5019;&#x9009;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x6269;&#x5C55;&#x6216;&#x65B0;&#x589E;&#x516C;&#x5171; Material&#xFF0C;&#x7559;&#x7ED9;&#x540E;&#x7EED;&#x4EBA;&#x5DE5;&#x8BC4;&#x5BA1;&#x3002;</li>
</ul>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4EA4;&#x4ED8;&#x7269;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4EA4;&#x4ED8;&#x7269;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4EA4;&#x4ED8;&#x7269;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x8981;&#x6C42;&#x4EE5;&#x4E0B;&#x6838;&#x5FC3;&#x4EA7;&#x7269;&#xFF1A;</p>
<ol>
<li>&#x4E00;&#x4E2A;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x53CA;&#x5B8C;&#x6574; Figma &#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x4E00;&#x4E2A;&#x7A33;&#x5B9A;&#x7684; RN Fixture/&#x9884;&#x89C8;&#x4E0E;&#x622A;&#x56FE;&#x5165;&#x53E3;&#xFF1B;</li>
<li>&#x9996;&#x6279; RN Material Catalog&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x4EBA;&#x5DE5; Golden Mapping&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684; RN Page Plan&#xFF1B;</li>
<li>&#x4E00;&#x4E2A; RN Code Emitter&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x7684;&#x89C6;&#x89C9;&#x5C42;&#x548C;&#x4EBA;&#x5DE5;&#x7EF4;&#x62A4;&#x7684;&#x5BBF;&#x4E3B;&#x5C42;&#xFF1B;</li>
<li>iOS/Android &#x89C6;&#x89C9;&#x5BF9;&#x6BD4;&#x62A5;&#x544A;&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x9636;&#x6BB5;&#x590D;&#x76D8;&#x3002;</li>
</ol>
<p>&#x66F4;&#x7EC6;&#x7684;&#x6587;&#x4EF6;&#x3001;&#x5B57;&#x6BB5;&#x3001;&#x811A;&#x672C;&#x548C;&#x6BCF;&#x65E5;&#x4EFB;&#x52A1;&#xFF0C;&#x5728;&#x65B9;&#x6848;&#x786E;&#x8BA4;&#x540E;&#x518D;&#x62C6;&#x6210; TodoList&#x3002;</p>
<h2 id="&#x65F6;&#x95F4;&#x5B89;&#x6392;"><a href="#&#x65F6;&#x95F4;&#x5B89;&#x6392;"></a>&#x65F6;&#x95F4;&#x5B89;&#x6392;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x9884;&#x8BA1; 3&#xFF5E;4 &#x5468;&#x3001;&#x7EA6; 4&#xFF5E;6 &#x4EBA;&#x5468;&#x3002;</p>
<h3 id="&#x7B2C; 1 &#x5468;&#xFF1A;&#x6253;&#x901A;&#x8F93;&#x5165;&#x548C;&#x9A8C;&#x8BC1;&#x73AF;&#x5883;"><a href="#&#x7B2C; 1 &#x5468;&#xFF1A;&#x6253;&#x901A;&#x8F93;&#x5165;&#x548C;&#x9A8C;&#x8BC1;&#x73AF;&#x5883;"></a>&#x7B2C; 1 &#x5468;&#xFF1A;&#x6253;&#x901A;&#x8F93;&#x5165;&#x548C;&#x9A8C;&#x8BC1;&#x73AF;&#x5883;</h3>
<ul>
<li>&#x9501;&#x5B9A;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x548C;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x719F;&#x6089;&#x6700;&#x5C0F; ShopeeRN &#x9875;&#x9762;&#x94FE;&#x8DEF;&#xFF1B;</li>
<li>&#x786E;&#x5B9A; Storybook &#x6216; Fixture Page&#xFF1B;</li>
<li>&#x8DD1;&#x901A;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x7684;&#x7A33;&#x5B9A;&#x622A;&#x56FE;&#xFF1B;</li>
<li>&#x5B8C;&#x6210; Golden Mapping &#x548C;&#x9996;&#x6279; Catalog&#x3002;</li>
</ul>
<h3 id="&#x7B2C; 2 &#x5468;&#xFF1A;&#x5F62;&#x6210; Page Plan &#x4E0E;&#x4EE3;&#x7801;&#x751F;&#x6210;"><a href="#&#x7B2C; 2 &#x5468;&#xFF1A;&#x5F62;&#x6210; Page Plan &#x4E0E;&#x4EE3;&#x7801;&#x751F;&#x6210;"></a>&#x7B2C; 2 &#x5468;&#xFF1A;&#x5F62;&#x6210; Page Plan &#x4E0E;&#x4EE3;&#x7801;&#x751F;&#x6210;</h3>
<ul>
<li>Figma &#x89E3;&#x6790;&#x4E0E; Material Mapping&#xFF1B;</li>
<li>RN Page Plan&#xFF1B;</li>
<li>RN Code Emitter&#xFF1B;</li>
<li>&#x4F7F;&#x7528; Mock &#x6570;&#x636E;&#x8DD1;&#x901A;&#x751F;&#x6210;&#x9875;&#x9762;&#x3002;</li>
</ul>
<h3 id="&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;"><a href="#&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;"></a>&#x7B2C; 3 &#x5468;&#xFF1A;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;&#x4E0E;&#x89C6;&#x89C9;&#x95ED;&#x73AF;</h3>
<ul>
<li>&#x63A5;&#x5165; PageContainer&#x3001;State&#x3001;i18n&#x3001;Navigator &#x7B49;&#x5BBF;&#x4E3B;&#x80FD;&#x529B;&#xFF1B;</li>
<li>&#x8865;&#x9F50; iOS/Android &#x548C;&#x5173;&#x952E;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x5B8C;&#x6210; Figma/RN Diff&#xFF1B;</li>
<li>&#x4FEE;&#x6B63; Catalog&#x3001;Mapping &#x548C; Emitter&#x3002;</li>
</ul>
<h3 id="&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x6216;&#x590D;&#x7528;&#x9884;&#x6F14;"><a href="#&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x6216;&#x590D;&#x7528;&#x9884;&#x6F14;"></a>&#x7B2C; 4 &#x5468;&#xFF1A;&#x7F13;&#x51B2;&#x6216;&#x590D;&#x7528;&#x9884;&#x6F14;</h3>
<p>&#x7528;&#x4E8E;&#x5904;&#x7406; RN &#x73AF;&#x5883;&#x3001;&#x5E73;&#x53F0;&#x5DEE;&#x5F02;&#x548C;&#x8BBE;&#x8BA1;&#x7F3A;&#x5931;&#x3002;&#x5982;&#x679C;&#x524D;&#x4E09;&#x5468;&#x987A;&#x5229;&#xFF0C;&#x5219;&#x9009;&#x62E9;&#x7B2C;&#x4E8C;&#x4E2A;&#x5C0F;&#x9875;&#x9762;&#x505A;&#x590D;&#x7528;&#x9884;&#x6F14;&#xFF0C;&#x4E0D;&#x7EE7;&#x7EED;&#x65E0;&#x9650;&#x4F18;&#x5316;&#x7B2C;&#x4E00;&#x9875;&#x9762;&#x7684;&#x50CF;&#x7D20;&#x5206;&#x6570;&#x3002;</p>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x600E;&#x6837;&#x624D;&#x7B97;&#x6210;&#x529F;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x600E;&#x6837;&#x624D;&#x7B97;&#x6210;&#x529F;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x600E;&#x6837;&#x624D;&#x7B97;&#x6210;&#x529F;</h2>
<p>&#x4E0D;&#x662F;&#x201C;&#x751F;&#x6210;&#x4E86;&#x4E00;&#x5F20;&#x770B;&#x8D77;&#x6765;&#x63A5;&#x8FD1;&#x7684;&#x9875;&#x9762;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x540C;&#x65F6;&#x6EE1;&#x8DB3;&#xFF1A;</p>
<ul>
<li>&#x76F8;&#x540C;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x6267;&#x884C;&#x65F6;&#xFF0C;&#x4E3B;&#x8981; Material &#x9009;&#x62E9;&#x548C; Page Plan &#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x6240;&#x6709;&#x4E3B;&#x8981;&#x89C6;&#x89C9;&#x533A;&#x57DF;&#x90FD;&#x6709;&#x663E;&#x5F0F;&#x51B3;&#x7B56;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x5DE5;&#x7A0B;&#x68C0;&#x67E5;&#x5E76;&#x88AB; RN &#x5F00;&#x53D1;&#x7EE7;&#x7EED;&#x7EF4;&#x62A4;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C42;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x4E0D;&#x4F1A;&#x8986;&#x76D6;&#x5BBF;&#x4E3B;&#x903B;&#x8F91;&#xFF1B;</li>
<li>&#x81F3;&#x5C11;&#x6709; iOS &#x548C; Android &#x7684;&#x771F;&#x5B9E;&#x622A;&#x56FE;&#x8BC1;&#x636E;&#xFF1B;</li>
<li>&#x5DEE;&#x5F02;&#x80FD;&#x591F;&#x5B9A;&#x4F4D;&#x5230; Catalog&#x3001;Mapping&#x3001;Emitter &#x6216; Host&#xFF1B;</li>
<li>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4EA7;&#x7269;&#x4E2D;&#x6709;&#x4E00;&#x90E8;&#x5206;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x7528;&#x4E8E;&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#x3002;</li>
</ul>
<p>&#x7B2C;&#x4E00;&#x9875;&#x9762;&#x672C;&#x8EAB;&#x672A;&#x5FC5;&#x6BD4;&#x7EAF;&#x624B;&#x5199;&#x5FEB;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x627F;&#x62C5;&#x4E86;&#x57FA;&#x7840;&#x80FD;&#x529B;&#x5EFA;&#x8BBE;&#x3002;&#x771F;&#x6B63;&#x7684;&#x7EE7;&#x7EED;&#x6761;&#x4EF6;&#x662F;&#xFF1A;&#x56E2;&#x961F;&#x80FD;&#x591F;&#x89E3;&#x91CA;&#x7B2C;&#x4E8C;&#x9875;&#x9762;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x66F4;&#x5FEB;&#x3001;&#x66F4;&#x7A33;&#x5B9A;&#x3002;</p>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E4B;&#x540E;&#x518D;&#x62C6;&#x4EC0;&#x4E48;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E4B;&#x540E;&#x518D;&#x62C6;&#x4EC0;&#x4E48;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E4B;&#x540E;&#x518D;&#x62C6;&#x4EC0;&#x4E48;</h2>
<p>&#x65B9;&#x6848;&#x786E;&#x8BA4;&#x5E76;&#x9501;&#x5B9A;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x540E;&#xFF0C;&#x518D;&#x5355;&#x72EC;&#x62C6; TodoList&#xFF0C;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>&#x5177;&#x4F53;&#x76EE;&#x5F55;&#x548C;&#x6587;&#x4EF6;&#xFF1B;</li>
<li>Material Definition &#x5B57;&#x6BB5;&#xFF1B;</li>
<li>Fixture &#x72B6;&#x6001;&#xFF1B;</li>
<li>Figma Parser &#x8F93;&#x5165;&#xFF1B;</li>
<li>Page Plan Schema&#xFF1B;</li>
<li>Code Emitter &#x6A21;&#x677F;&#xFF1B;</li>
<li>Screenshot &#x4E0E; Diff &#x811A;&#x672C;&#xFF1B;</li>
<li>&#x5DE5;&#x7A0B;&#x547D;&#x4EE4;&#x4E0E;&#x6D4B;&#x8BD5;&#xFF1B;</li>
<li>&#x6BCF;&#x65E5;&#x4EFB;&#x52A1;&#x548C;&#x8D1F;&#x8D23;&#x4EBA;&#x3002;</li>
</ul>
<p>&#x73B0;&#x5728;&#x5148;&#x4E0D;&#x9501;&#x6B7B;&#x8FD9;&#x4E9B;&#x5B9E;&#x73B0;&#x7EC6;&#x8282;&#xFF0C;&#x907F;&#x514D;&#x5728;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x548C; RN &#x9A8C;&#x8BC1;&#x901A;&#x9053;&#x5C1A;&#x672A;&#x786E;&#x5B9A;&#x524D;&#x8FC7;&#x65E9;&#x8BBE;&#x8BA1;&#x3002;</p>
`,E=[{level:1,title:"第一阶段：web-affiliate-rn 单页垂直切片实施方案",children:[{level:2,title:"第一阶段只验证一件事",children:[]},{level:2,title:"为什么先做单页垂直切片",children:[]},{level:2,title:"试点页面怎么选",children:[]},{level:2,title:"第一阶段的六个核心环节",children:[{level:3,title:"一、建立稳定的 Native 预览与截图入口",children:[]},{level:3,title:"二、建立首批 RN Material Catalog",children:[]},{level:3,title:"三、人工建立一份 Golden Mapping",children:[]},{level:3,title:"四、形成 RN Page Plan",children:[]},{level:3,title:"五、编译为普通 RN 代码",children:[]},{level:3,title:"六、建立 Native 视觉反馈",children:[]}]},{level:2,title:"Figma 到 RN 的关键转换原则",children:[{level:3,title:"Material 映射优先级",children:[]},{level:3,title:"布局转换",children:[]},{level:3,title:"物料与页面特例",children:[]}]},{level:2,title:"第一阶段交付物",children:[]},{level:2,title:"时间安排",children:[{level:3,title:"第 1 周：打通输入和验证环境",children:[]},{level:3,title:"第 2 周：形成 Page Plan 与代码生成",children:[]},{level:3,title:"第 3 周：宿主接入与视觉闭环",children:[]},{level:3,title:"第 4 周：缓冲或复用预演",children:[]}]},{level:2,title:"第一阶段怎样才算成功",children:[]},{level:2,title:"第一阶段之后再拆什么",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
