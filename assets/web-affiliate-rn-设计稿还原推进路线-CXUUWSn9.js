const x={title:"web-affiliate-rn 设计稿还原推进路线",description:"面向 ShopeeRN InApp 项目的 Figma 还原路线与阶段规划。"},F=`<h1 id="web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;"><a href="#web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;"></a>web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;</h1>
<h2 id="&#x6211;&#x4EEC;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;"><a href="#&#x6211;&#x4EEC;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;"></a>&#x6211;&#x4EEC;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;</h2>
<p>&#x5F53;&#x524D;&#x76EE;&#x6807;&#x662F;&#x8BA9; <code>web-affiliate-rn</code> &#x80FD;&#x591F;&#x4F7F;&#x7528; AI &#x8FD8;&#x539F; Figma &#x8BBE;&#x8BA1;&#x7A3F;&#x3002;</p>
<p>&#x8FD9;&#x4EF6;&#x4E8B;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x5236; React Web &#x7684;&#x65B9;&#x6848;&#x3002;<code>web-affiliate-rn</code> &#x5B9E;&#x9645;&#x662F; ShopeeRN &#x5DE5;&#x7A0B;&#xFF0C;&#x9875;&#x9762;&#x6700;&#x7EC8;&#x6E32;&#x67D3;&#x4E3A; iOS/Android Native View&#xFF0C;&#x4E0D;&#x5B58;&#x5728;&#x6D4F;&#x89C8;&#x5668; DOM &#x548C; CSSOM&#x3002;Web &#x4E0A;&#x57FA;&#x4E8E; Storybook&#x3001;Headless Chromium&#x3001;Playwright DOM Geometry &#x7684;&#x95ED;&#x73AF;&#xFF0C;&#x53EA;&#x80FD;&#x501F;&#x9274;&#x601D;&#x60F3;&#xFF0C;&#x4E0D;&#x80FD;&#x539F;&#x6837;&#x590D;&#x7528;&#x3002;</p>
<p>&#x540C;&#x65F6;&#xFF0C;&#x4E5F;&#x4E0D;&#x5E94;&#x8BE5;&#x5148;&#x628A;&#x73B0;&#x6709; Web AI Code &#x7684;&#x590D;&#x6742;&#x6D41;&#x7A0B;&#x5B8C;&#x6574;&#x8FC1;&#x79FB;&#x5230; RN&#x3002;&#x73B0;&#x6709;&#x5B9E;&#x73B0;&#x4E2D;&#x7684; Parser&#x3001;Recognition&#x3001;Catalog &#x548C; Review &#x601D;&#x60F3;&#x53EF;&#x4EE5;&#x5438;&#x6536;&#xFF0C;&#x4F46;&#x65B0;&#x7684; RN &#x8DEF;&#x5F84;&#x5E94;&#x4ECE;&#x6700;&#x77ED;&#x95ED;&#x73AF;&#x5F00;&#x59CB;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x5224;&#x65AD;"><a href="#&#x6838;&#x5FC3;&#x5224;&#x65AD;"></a>&#x6838;&#x5FC3;&#x5224;&#x65AD;</h2>
<p>&#x9996;&#x671F;&#x63A8;&#x8350;&#x8D70;&#x201C;&#x7F16;&#x8BD1;&#x671F;&#x751F;&#x6210; RN &#x4EE3;&#x7801;&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5EFA;&#x8BBE; RN &#x52A8;&#x6001; Schema Runtime&#xFF1A;</p>
<pre><code class="language-text">Figma
  &#x2192; &#x6620;&#x5C04; RN &#x7269;&#x6599;&#x4E0E;&#x9875;&#x9762;&#x7ED3;&#x6784;
  &#x2192; &#x5F62;&#x6210;&#x53EF;&#x5BA1;&#x8BA1;&#x7684; RN Page Plan
  &#x2192; &#x751F;&#x6210;&#x666E;&#x901A; TSX + style.ts
  &#x2192; &#x63A5;&#x5165; RN &#x5BBF;&#x4E3B;&#x80FD;&#x529B;
  &#x2192; Native &#x622A;&#x56FE;&#x4E0E; Figma &#x5BF9;&#x6BD4;
</code></pre>
<p>&#x6700;&#x7EC8;&#x4EA4;&#x4ED8;&#x7269;&#x4ECD;&#x7136;&#x662F;&#x5F00;&#x53D1;&#x719F;&#x6089;&#x7684; React Native &#x4EE3;&#x7801;&#x3002;Page Plan &#x53EA;&#x4F5C;&#x4E3A;&#x751F;&#x6210;&#x3001;&#x5BA1;&#x8BA1;&#x548C;&#x91CD;&#x590D;&#x6267;&#x884C;&#x7684;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#xFF0C;&#x4E0D;&#x8FDB;&#x5165;&#x7EBF;&#x4E0A; Runtime&#x3002;</p>
<p>&#x8FD9;&#x6837;&#x505A;&#x7684;&#x539F;&#x56E0;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x524D;&#x9879;&#x76EE;&#x5DF2;&#x7ECF;&#x6709;&#x6210;&#x719F;&#x7684;&#x9875;&#x9762;&#x6CE8;&#x518C;&#x3001;&#x7EC4;&#x4EF6;&#x3001;&#x6837;&#x5F0F;&#x548C;&#x5BBF;&#x4E3B;&#x7EA6;&#x5B9A;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x8FD8;&#x539F;&#x53EA;&#x662F;&#x9875;&#x9762;&#x4EA4;&#x4ED8;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x6700;&#x7EC8;&#x4ECD;&#x9700;&#x63A5;&#x5165; API&#x3001;Navigator&#x3001;i18n &#x548C; Tracking&#xFF1B;</li>
<li>&#x65B0;&#x5EFA;&#x8FD0;&#x884C;&#x65F6;&#x89E3;&#x91CA;&#x5C42;&#x4F1A;&#x663E;&#x8457;&#x6269;&#x5927;&#x9996;&#x671F;&#x8303;&#x56F4;&#x548C;&#x7EBF;&#x4E0A;&#x98CE;&#x9669;&#xFF1B;</li>
<li>&#x666E;&#x901A; TSX &#x66F4;&#x5BB9;&#x6613; Review&#x3001;&#x6392;&#x9519;&#x548C;&#x88AB;&#x73B0;&#x6709;&#x5F00;&#x53D1;&#x7EE7;&#x7EED;&#x7EF4;&#x62A4;&#xFF1B;</li>
<li>&#x672A;&#x6765;&#x5373;&#x4F7F;&#x5EFA;&#x8BBE; RN Runtime&#xFF0C;Material Catalog&#x3001;Page Plan &#x548C;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#x4ECD;&#x53EF;&#x590D;&#x7528;&#x3002;</li>
</ul>
<h2 id="RN Storybook &#x4E0E;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;"><a href="#RN Storybook &#x4E0E;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;"></a>RN Storybook &#x4E0E;&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;</h2>
<p>RN &#x4E0D;&#x662F;&#x4E0D;&#x80FD;&#x4F7F;&#x7528; Storybook&#x3002;<a href="https://storybookjs.github.io/react-native/docs/intro/">React Native Storybook</a>&#x53EF;&#x4EE5;&#x5728; Native &#x73AF;&#x5883;&#x4E2D;&#x9694;&#x79BB;&#x6E32;&#x67D3;&#x7EC4;&#x4EF6;&#x548C;&#x9875;&#x9762;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x4F46;&#x5B83;&#x4E0D;&#x662F; Web Storybook&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; Metro &#x548C; Native Runtime&#xFF1B;</li>
<li>&#x6CA1;&#x6709; iframe&#x3001;DOM &#x548C; CSS&#xFF1B;</li>
<li>Playwright &#x65E0;&#x6CD5;&#x8BFB;&#x53D6; Native View &#x7684;&#x5E03;&#x5C40;&#xFF1B;</li>
<li>&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;&#x5FC5;&#x987B;&#x6765;&#x81EA; Simulator&#x3001;Emulator &#x6216;&#x771F;&#x673A;&#x622A;&#x56FE;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;Storybook &#x5728;&#x672C;&#x65B9;&#x6848;&#x4E2D;&#x53EA;&#x627F;&#x62C5;&#x201C;&#x9694;&#x79BB;&#x6E32;&#x67D3;&#x72B6;&#x6001;&#x201D;&#x7684;&#x89D2;&#x8272;&#x3002;&#x622A;&#x56FE;&#x548C;&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x4F7F;&#x7528; Native &#x73AF;&#x5883;&#xFF1B;Detox &#x7B49;&#x5DE5;&#x5177;&#x652F;&#x6301;&#x8BBE;&#x5907;&#x7EA7;&#x6216;&#x5143;&#x7D20;&#x7EA7;&#x622A;&#x56FE;&#xFF0C;<a href="https://wix.github.io/Detox/docs/guide/taking-screenshots/">&#x5B98;&#x65B9;&#x8BF4;&#x660E;</a>&#x3002;</p>
<p>&#x5F53;&#x524D;&#x9879;&#x76EE;&#x4F7F;&#x7528; React 16&#x3001;RN 0.63 &#x548C; Node 14&#xFF0C;&#x4E0E;&#x73B0;&#x4EE3; Storybook &#x5DE5;&#x5177;&#x94FE;&#x5B58;&#x5728;&#x517C;&#x5BB9;&#x98CE;&#x9669;&#x3002;&#x9996;&#x671F;&#x5E94;&#x9650;&#x65F6;&#x9A8C;&#x8BC1; Storybook&#xFF1A;&#x80FD;&#x4F4E;&#x6210;&#x672C;&#x63A5;&#x5165;&#x5C31;&#x4F7F;&#x7528;&#xFF0C;&#x4E0D;&#x80FD;&#x5C31;&#x7528;&#x4E00;&#x4E2A;&#x8F7B;&#x91CF;&#x7684;&#x5F00;&#x53D1;&#x6001; Fixture Page &#x66FF;&#x4EE3;&#x3002;&#x4E0D;&#x80FD;&#x4E3A;&#x4E86;&#x89C6;&#x89C9;&#x8BD5;&#x70B9;&#x5148;&#x5347;&#x7EA7;&#x6574;&#x4E2A; RN &#x5DE5;&#x7A0B;&#x3002;</p>
<h2 id="&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x65B9;&#x5F0F;"><a href="#&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x65B9;&#x5F0F;"></a>&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x65B9;&#x5F0F;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x8DD1;&#x901A;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x9875;&#x9762;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x8DD1;&#x901A;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x9875;&#x9762;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x8DD1;&#x901A;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x9875;&#x9762;</h3>
<p>&#x7528;&#x4E00;&#x4E2A;&#x4E2D;&#x7B49;&#x590D;&#x6742;&#x5EA6;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x5B8C;&#x6574;&#x95ED;&#x73AF;&#xFF1A;</p>
<ul>
<li>Figma &#x80FD;&#x5426;&#x7A33;&#x5B9A;&#x6620;&#x5C04;&#x5230;&#x5DF2;&#x6709; RN &#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x80FD;&#x5426;&#x88AB;&#x7EC4;&#x7EC7;&#x6210; AI &#x53EF;&#x7406;&#x89E3;&#x7684; Material Catalog&#xFF1B;</li>
<li>Page Plan &#x80FD;&#x5426;&#x7A33;&#x5B9A;&#x751F;&#x6210;&#x666E;&#x901A; RN &#x4EE3;&#x7801;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C42;&#x80FD;&#x5426;&#x4E0E;&#x4E1A;&#x52A1;&#x548C;&#x5BBF;&#x4E3B;&#x903B;&#x8F91;&#x5206;&#x79BB;&#xFF1B;</li>
<li>Native &#x622A;&#x56FE;&#x662F;&#x5426;&#x80FD;&#x5F62;&#x6210;&#x53EF;&#x91CD;&#x590D;&#x7684;&#x89C6;&#x89C9;&#x53CD;&#x9988;&#x3002;</li>
</ul>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x8FFD;&#x6C42;&#x5E73;&#x53F0;&#x5316;&#xFF0C;&#x53EA;&#x8BC1;&#x660E;&#x65B9;&#x5411;&#x6210;&#x7ACB;&#x3002;</p>
<p>&#x8BE6;&#x89C1;<a href="./%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5-%E5%8D%95%E9%A1%B5%E5%9E%82%E7%9B%B4%E5%88%87%E7%89%87%E5%AE%9E%E6%96%BD%E6%89%8B%E5%86%8C.md">&#x300A;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x65B9;&#x6848;&#x300B;</a>&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7528;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x6CDB;&#x5316;"><a href="#&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7528;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x6CDB;&#x5316;"></a>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7528;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x6CDB;&#x5316;</h3>
<p>&#x7B2C;&#x4E00;&#x9875;&#x9762;&#x5F88;&#x5BB9;&#x6613;&#x88AB;&#x201C;&#x7279;&#x5236;&#x201D;&#x51FA;&#x6765;&#x3002;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x5FC5;&#x987B;&#x9009;&#x62E9;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x9875;&#x9762;&#xFF0C;&#x9A8C;&#x8BC1;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x6C89;&#x6DC0;&#x7684; Catalog&#x3001;Mapping &#x548C; Code Emitter &#x662F;&#x5426;&#x771F;&#x6B63;&#x53EF;&#x4EE5;&#x590D;&#x7528;&#x3002;</p>
<p>&#x91CD;&#x70B9;&#x4E0D;&#x662F;&#x518D;&#x751F;&#x6210;&#x4E00;&#x9875;&#xFF0C;&#x800C;&#x662F;&#x56DE;&#x7B54;&#xFF1A;</p>
<ul>
<li>&#x54EA;&#x4E9B;&#x80FD;&#x529B;&#x662F;&#x8DE8;&#x9875;&#x9762;&#x7684;&#xFF1B;</li>
<li>&#x54EA;&#x4E9B;&#x53EA;&#x662F;&#x9996;&#x4E2A;&#x9875;&#x9762;&#x7684;&#x7279;&#x4F8B;&#xFF1B;</li>
<li>&#x7269;&#x6599;&#x7F3A;&#x53E3;&#x5E94;&#x8BE5;&#x600E;&#x6837;&#x8BB0;&#x5F55;&#xFF1B;</li>
<li>Figma &#x5C40;&#x90E8;&#x4FEE;&#x6539;&#x80FD;&#x5426;&#x589E;&#x91CF;&#x66F4;&#x65B0;&#xFF1B;</li>
<li>&#x7B2C;&#x4E8C;&#x9875;&#x662F;&#x5426;&#x660E;&#x663E;&#x6BD4;&#x7B2C;&#x4E00;&#x9875;&#x66F4;&#x5BB9;&#x6613;&#x3002;</li>
</ul>
<h3 id="&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x5F62;&#x6210;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x5E76;&#x63A5;&#x5165; Agent"><a href="#&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x5F62;&#x6210;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x5E76;&#x63A5;&#x5165; Agent"></a>&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x5F62;&#x6210;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x5E76;&#x63A5;&#x5165; Agent</h3>
<p>&#x5728;&#x4E24;&#x4E2A;&#x9875;&#x9762;&#x95ED;&#x73AF;&#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x518D;&#x63A5;&#x5165; <code>fe-code-agent</code> &#x548C; <code>ai-code-agent</code>&#x3002;</p>
<p>&#x8FD9;&#x4E00;&#x9636;&#x6BB5;&#x4E3B;&#x8981;&#x89E3;&#x51B3;&#xFF1A;</p>
<ul>
<li>&#x4EFB;&#x52A1;&#x7F16;&#x6392;&#x548C;&#x4EA7;&#x7269;&#x4F20;&#x9012;&#xFF1B;</li>
<li>&#x5931;&#x8D25;&#x6B65;&#x9AA4;&#x7684;&#x5B9A;&#x4F4D;&#x4E0E;&#x91CD;&#x8DD1;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5; Review&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C42;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x65F6;&#x4E0D;&#x8986;&#x76D6;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF1B;</li>
<li>&#x591A;&#x9875;&#x9762;&#x548C;&#x591A;&#x72B6;&#x6001;&#x7684;&#x6279;&#x91CF;&#x9A8C;&#x8BC1;&#x3002;</li>
</ul>
<p>&#x65B0;&#x8DEF;&#x5F84;&#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x518D;&#x628A;&#x65E7;&#x65B9;&#x6848;&#x4E2D;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x80FD;&#x529B;&#x5E76;&#x8FDB;&#x6765;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BA9;&#x65B0;&#x65B9;&#x6848;&#x5148;&#x517C;&#x5BB9;&#x5168;&#x90E8;&#x65E7;&#x6D41;&#x7A0B;&#x3002;</p>
<h3 id="&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x4ECE; Figma &#x8FD8;&#x539F;&#x8D70;&#x5411; Material-first"><a href="#&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x4ECE; Figma &#x8FD8;&#x539F;&#x8D70;&#x5411; Material-first"></a>&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x4ECE; Figma &#x8FD8;&#x539F;&#x8D70;&#x5411; Material-first</h3>
<p>&#x5F53; RN Material Catalog &#x548C;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x80FD;&#x529B;&#x88AB;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x540E;&#xFF0C;&#x518D;&#x589E;&#x52A0;&#x9700;&#x6C42;&#x5230;&#x539F;&#x578B;&#x7684;&#x6B63;&#x5411;&#x8DEF;&#x5F84;&#xFF1A;</p>
<pre><code class="language-text">&#x9700;&#x6C42;
  &#x2192; &#x57FA;&#x4E8E; RN Material Catalog &#x751F;&#x6210;&#x53EF;&#x8FD0;&#x884C;&#x539F;&#x578B;
  &#x2192; &#x4EA7;&#x54C1;&#x4E0E; UED &#x4FEE;&#x6539;
  &#x2192; &#x4F7F;&#x7528;&#x540C;&#x4E00; Page Plan &#x548C; RN Code Emitter &#x4EA4;&#x4ED8;
</code></pre>
<p>&#x6B64;&#x65F6; Figma-to-RN &#x7EE7;&#x7EED;&#x5904;&#x7406;&#x5B58;&#x91CF;&#x3001;&#x521B;&#x65B0;&#x548C;&#x81EA;&#x7531;&#x8BBE;&#x8BA1;&#xFF0C;Material-first &#x5219;&#x6210;&#x4E3A;&#x6807;&#x51C6;&#x9875;&#x9762;&#x7684;&#x5019;&#x9009;&#x9ED8;&#x8BA4;&#x5165;&#x53E3;&#x3002;</p>
<h2 id="&#x65F6;&#x95F4;&#x8BC4;&#x4F30;"><a href="#&#x65F6;&#x95F4;&#x8BC4;&#x4F30;"></a>&#x65F6;&#x95F4;&#x8BC4;&#x4F30;</h2>
<p>&#x8BC4;&#x4F30;&#x5047;&#x8BBE;&#xFF1A;</p>
<ul>
<li>1 &#x540D;&#x4E3B;&#x529B;&#x524D;&#x7AEF;&#x5168;&#x804C;&#xFF0C;&#x719F;&#x6089; React Web&#xFF0C;&#x4F46;&#x521A;&#x5F00;&#x59CB;&#x719F;&#x6089; ShopeeRN&#xFF1B;</li>
<li>1 &#x540D; RN &#x5DE5;&#x7A0B;&#x5E08;&#x6295;&#x5165;&#x7EA6; 20%&#xFF5E;30% &#x65F6;&#x95F4;&#x7B54;&#x7591;&#x548C; Review&#xFF1B;</li>
<li>&#x4EA7;&#x54C1;/UED &#x80FD;&#x53CA;&#x65F6;&#x63D0;&#x4F9B;&#x8BBE;&#x8BA1;&#x72B6;&#x6001;&#x5E76;&#x53C2;&#x4E0E;&#x786E;&#x8BA4;&#xFF1B;</li>
<li>&#x4E0D;&#x5347;&#x7EA7; RN &#x6838;&#x5FC3;&#x6280;&#x672F;&#x6808;&#xFF1B;</li>
<li>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x9009;&#x62E9;&#x590D;&#x6742;&#x9996;&#x9875;&#x3001;&#x56FE;&#x8868;&#x6216;&#x8D85;&#x957F;&#x5217;&#x8868;&#x3002;</li>
</ul>
<table>
<thead>
<tr>
<th>&#x9636;&#x6BB5;</th>
<th style="text-align:right">&#x65E5;&#x5386;&#x65F6;&#x95F4;</th>
<th>&#x4E3B;&#x8981;&#x7ED3;&#x679C;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;</td>
<td style="text-align:right">3&#xFF5E;4 &#x5468;</td>
<td>&#x5355;&#x9875; Figma &#x2192; RN Code &#x2192; Native Visual Loop</td>
</tr>
<tr>
<td>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;</td>
<td style="text-align:right">2&#xFF5E;3 &#x5468;</td>
<td>&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x4E0E; Catalog &#x6CDB;&#x5316;</td>
</tr>
<tr>
<td>&#x7B2C;&#x4E09;&#x9636;&#x6BB5;</td>
<td style="text-align:right">2&#xFF5E;3 &#x5468;</td>
<td>&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x4E0E; Agent &#x63A5;&#x5165;</td>
</tr>
<tr>
<td>&#x7B2C;&#x56DB;&#x9636;&#x6BB5;</td>
<td style="text-align:right">3&#xFF5E;4 &#x5468;</td>
<td>Material-first &#x6B63;&#x5411;&#x539F;&#x578B;</td>
</tr>
<tr>
<td>&#x5408;&#x8BA1;</td>
<td style="text-align:right">10&#xFF5E;14 &#x5468;</td>
<td>&#x5728;&#x6709;&#x9650;&#x9875;&#x9762;&#x7C7B;&#x578B;&#x4E2D;&#x53EF;&#x6301;&#x7EED;&#x8BD5;&#x7528;</td>
</tr>
</tbody>
</table>
<p>&#x5982;&#x679C;&#x53EA;&#x6709;&#x4E00;&#x540D;&#x5BF9; RN &#x4E0D;&#x719F;&#x6089;&#x7684;&#x5DE5;&#x7A0B;&#x5E08;&#x72EC;&#x7ACB;&#x63A8;&#x8FDB;&#xFF0C;&#x6574;&#x4F53;&#x66F4;&#x63A5;&#x8FD1; 14&#xFF5E;20 &#x5468;&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#x7684;&#x65F6;&#x95F4;&#x4E0D;&#x662F;&#x201C;&#x8986;&#x76D6;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#x201D;&#x7684;&#x65F6;&#x95F4;&#xFF0C;&#x800C;&#x662F;&#x4ECE;&#x5355;&#x9875;&#x9A8C;&#x8BC1;&#x63A8;&#x8FDB;&#x5230;&#x4E00;&#x5957;&#x53EF;&#x4EE5;&#x7EE7;&#x7EED;&#x6269;&#x5C55;&#x7684;&#x751F;&#x4EA7;&#x8DEF;&#x5F84;&#x3002;</p>
<h2 id="&#x6210;&#x8D25;&#x53D6;&#x51B3;&#x4E8E;&#x4EC0;&#x4E48;"><a href="#&#x6210;&#x8D25;&#x53D6;&#x51B3;&#x4E8E;&#x4EC0;&#x4E48;"></a>&#x6210;&#x8D25;&#x53D6;&#x51B3;&#x4E8E;&#x4EC0;&#x4E48;</h2>
<p>&#x8FD9;&#x4E2A;&#x9879;&#x76EE;&#x7684;&#x5173;&#x952E;&#x4E0D;&#x5728;&#x4E8E; AI &#x7B2C;&#x4E00;&#x6B21;&#x80FD;&#x8FD8;&#x539F;&#x591A;&#x5C11;&#x50CF;&#x7D20;&#xFF0C;&#x800C;&#x5728;&#x4E8E;&#x4EE5;&#x4E0B;&#x80FD;&#x529B;&#x80FD;&#x5426;&#x6210;&#x7ACB;&#xFF1A;</p>
<ol>
<li><strong>&#x7269;&#x6599;&#x53EF;&#x7406;&#x89E3;</strong>&#xFF1A;AI &#x77E5;&#x9053;&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x662F;&#x4EC0;&#x4E48;&#x3001;&#x4F55;&#x65F6;&#x4F7F;&#x7528;&#x3001;&#x6709;&#x54EA;&#x4E9B;&#x72B6;&#x6001;&#x4E0E;&#x7EA6;&#x675F;&#x3002;</li>
<li><strong>&#x6620;&#x5C04;&#x53EF;&#x5BA1;&#x8BA1;</strong>&#xFF1A;&#x6BCF;&#x4E2A;&#x4E3B;&#x8981; Figma &#x533A;&#x57DF;&#x90FD;&#x80FD;&#x89E3;&#x91CA;&#x4E3A;&#x4EC0;&#x4E48;&#x4F7F;&#x7528;&#x67D0;&#x4E2A; Material&#x3002;</li>
<li><strong>&#x751F;&#x6210;&#x53EF;&#x7EF4;&#x62A4;</strong>&#xFF1A;&#x8F93;&#x51FA;&#x662F;&#x666E;&#x901A;&#x3001;&#x6E05;&#x6670;&#x3001;&#x7B26;&#x5408;&#x4ED3;&#x5E93;&#x89C4;&#x8303;&#x7684; RN &#x4EE3;&#x7801;&#x3002;</li>
<li><strong>&#x9A8C;&#x8BC1;&#x53EF;&#x91CD;&#x590D;</strong>&#xFF1A;&#x540C;&#x4E00;&#x9875;&#x9762;&#x72B6;&#x6001;&#x80FD;&#x7A33;&#x5B9A;&#x542F;&#x52A8;&#x3001;&#x622A;&#x56FE;&#x548C;&#x5BF9;&#x6BD4;&#x3002;</li>
<li><strong>&#x95EE;&#x9898;&#x53EF;&#x5B9A;&#x4F4D;</strong>&#xFF1A;&#x5DEE;&#x5F02;&#x80FD;&#x533A;&#x5206;&#x4E3A; Mapping&#x3001;Catalog&#x3001;Layout&#x3001;Asset &#x6216; Host &#x95EE;&#x9898;&#x3002;</li>
<li><strong>&#x80FD;&#x529B;&#x53EF;&#x590D;&#x7528;</strong>&#xFF1A;&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#x80FD;&#x591F;&#x590D;&#x7528;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x6210;&#x679C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x91CD;&#x65B0;&#x5B9A;&#x5236;&#x3002;</li>
</ol>
<h2 id="&#x5F53;&#x524D;&#x6700;&#x9700;&#x8981;&#x786E;&#x5B9A;&#x7684;&#x8F93;&#x5165;"><a href="#&#x5F53;&#x524D;&#x6700;&#x9700;&#x8981;&#x786E;&#x5B9A;&#x7684;&#x8F93;&#x5165;"></a>&#x5F53;&#x524D;&#x6700;&#x9700;&#x8981;&#x786E;&#x5B9A;&#x7684;&#x8F93;&#x5165;</h2>
<p>&#x5F00;&#x59CB;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x524D;&#xFF0C;&#x53EA;&#x9700;&#x5148;&#x786E;&#x8BA4;&#xFF1A;</p>
<ul>
<li>&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x548C; Figma Frame&#xFF1B;</li>
<li>&#x9700;&#x8981;&#x8986;&#x76D6;&#x7684;&#x9875;&#x9762;&#x72B6;&#x6001;&#xFF1B;</li>
<li>Golden &#x5E73;&#x53F0;&#x3001;&#x56FD;&#x5BB6;&#x3001;&#x8BED;&#x8A00;&#x548C;&#x8BBE;&#x5907;&#x5C3A;&#x5BF8;&#xFF1B;</li>
<li>&#x4E00;&#x540D;&#x80FD;&#x591F;&#x6301;&#x7EED;&#x53C2;&#x4E0E; Review &#x7684; RN &#x5DE5;&#x7A0B;&#x5E08;&#x3002;</li>
</ul>
<p>&#x66F4;&#x7EC6;&#x7684;&#x4EFB;&#x52A1;&#x62C6;&#x89E3;&#x7B49;&#x8FD9;&#x56DB;&#x9879;&#x786E;&#x5B9A;&#x3001;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x65B9;&#x6848;&#x8BC4;&#x5BA1;&#x901A;&#x8FC7;&#x540E;&#xFF0C;&#x518D;&#x5355;&#x72EC;&#x5F62;&#x6210; TodoList&#x3002;</p>
`,E=[{level:1,title:"web-affiliate-rn 设计稿还原推进路线",children:[{level:2,title:"我们要解决什么",children:[]},{level:2,title:"核心判断",children:[]},{level:2,title:"RN Storybook 与视觉验证",children:[]},{level:2,title:"整体推进方式",children:[{level:3,title:"第一阶段：跑通一个真实页面",children:[]},{level:3,title:"第二阶段：用第二类页面验证泛化",children:[]},{level:3,title:"第三阶段：形成稳定自动化并接入 Agent",children:[]},{level:3,title:"第四阶段：从 Figma 还原走向 Material-first",children:[]}]},{level:2,title:"时间评估",children:[]},{level:2,title:"成败取决于什么",children:[]},{level:2,title:"当前最需要确定的输入",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
