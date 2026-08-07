const x={title:"web-affiliate-rn 设计稿还原推进路线",description:"面向 ShopeeRN InApp 项目的 Figma 还原路线、阶段拆分与时间评估。"},E=`<h1 id="web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;"><a href="#web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;"></a>web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;</h1>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p><code>web-affiliate-rn</code> &#x7684;&#x9996;&#x671F;&#x76EE;&#x6807;&#xFF0C;&#x4E0D;&#x5E94;&#x662F;&#x5EFA;&#x8BBE;&#x4E00;&#x5957;&#x5B8C;&#x6574;&#x7684;&#x201C;AI &#x539F;&#x751F; RN &#x9875;&#x9762;&#x5E73;&#x53F0;&#x201D;&#xFF0C;&#x800C;&#x5E94;&#x5148;&#x8DD1;&#x901A;&#x4E00;&#x4E2A;&#x53EF;&#x9A8C;&#x8BC1;&#x7684;&#x5355;&#x9875;&#x95ED;&#x73AF;&#xFF1A;</p>
<pre><code class="language-text">Figma
  &#x2192; &#x8BC6;&#x522B;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x548C; RN &#x7269;&#x6599;
  &#x2192; &#x751F;&#x6210;&#x53EF;&#x5BA1;&#x8BA1;&#x7684; RN Page Plan
  &#x2192; &#x7F16;&#x8BD1;&#x4E3A;&#x666E;&#x901A; TSX + style.ts
  &#x2192; &#x63A5;&#x5165;&#x73B0;&#x6709; RN &#x5BBF;&#x4E3B;&#x80FD;&#x529B;
  &#x2192; &#x5728;&#x6A21;&#x62DF;&#x5668;&#x6216;&#x771F;&#x673A;&#x4E2D;&#x622A;&#x56FE;&#x5E76;&#x4E0E; Figma &#x5BF9;&#x6BD4;
</code></pre>
<p>&#x6700;&#x7EC8;&#x8FDB;&#x5165;&#x4E1A;&#x52A1;&#x4ED3;&#x5E93;&#x7684;&#x662F;&#x666E;&#x901A; React Native &#x4EE3;&#x7801;&#xFF0C;&#x4E0D;&#x662F;&#x7EBF;&#x4E0A;&#x52A8;&#x6001;&#x89E3;&#x91CA;&#x7684;&#x9875;&#x9762; Schema&#x3002;&#x4E2D;&#x95F4; Page Plan &#x53EA;&#x670D;&#x52A1;&#x751F;&#x6210;&#x3001;&#x5BA1;&#x8BA1;&#x548C;&#x91CD;&#x590D;&#x6267;&#x884C;&#x3002;</p>
<p>&#x8FD9;&#x6761;&#x8DEF;&#x7EBF;&#x517C;&#x987E;&#x4E24;&#x4E2A;&#x76EE;&#x6807;&#xFF1A;</p>
<ol>
<li>&#x7ACB;&#x5373;&#x89E3;&#x51B3;&#x73B0;&#x6709; Figma &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x95EE;&#x9898;&#xFF1B;</li>
<li>&#x987A;&#x624B;&#x5EFA;&#x8BBE; RN Material Catalog&#xFF0C;&#x672A;&#x6765;&#x518D;&#x628A;&#x540C;&#x4E00;&#x6279;&#x7269;&#x6599;&#x7528;&#x4E8E; Material-first &#x539F;&#x578B;&#x751F;&#x6210;&#x3002;</li>
</ol>
<p>&#x77ED;&#x671F;&#x4ECD;&#x7136;&#x4ECE; Figma &#x5F00;&#x59CB;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x653E;&#x5F03; Material-first&#x3002;&#x76F8;&#x53CD;&#xFF0C;Figma-to-RN &#x548C;&#x672A;&#x6765;&#x7684; Requirement-to-RN &#x4F1A;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x5957; Catalog&#x3001;&#x9875;&#x9762;&#x8BED;&#x4E49;&#x548C;&#x9A8C;&#x8BC1;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x5236; React Web &#x65B9;&#x6848;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x5236; React Web &#x65B9;&#x6848;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x5236; React Web &#x65B9;&#x6848;</h2>
<p><code>web-affiliate-rn</code> &#x5B9E;&#x9645;&#x662F; ShopeeRN &#x5DE5;&#x7A0B;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x7684; Web &#x9875;&#x9762;&#xFF1A;</p>
<ul>
<li>React 16.13&#x3001;React Native 0.63&#x3001;TypeScript 4.2&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x901A;&#x8FC7; <code>PageContainer</code> &#x63A5;&#x5165; ShopeeRN&#xFF1B;</li>
<li>UI &#x6700;&#x7EC8;&#x6E32;&#x67D3;&#x4E3A; iOS/Android Native View&#xFF0C;&#x4E0D;&#x5B58;&#x5728;&#x6D4F;&#x89C8;&#x5668; DOM&#xFF1B;</li>
<li>&#x9879;&#x76EE;&#x4EE5; 375 &#x4E3A;&#x8BBE;&#x8BA1;&#x57FA;&#x51C6;&#xFF0C;&#x901A;&#x8FC7; <code>CustomStyleSheetV2</code> &#x505A;&#x5C4F;&#x5E55;&#x4E0E;&#x591A;&#x8BED;&#x8A00;&#x9002;&#x914D;&#xFF1B;</li>
<li>&#x8DEF;&#x7531;&#x3001;Safe Area&#x3001;Navigator&#x3001;i18n&#x3001;Tracking &#x548C; Native SDK &#x90FD;&#x5C5E;&#x4E8E;&#x5BBF;&#x4E3B;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;Web &#x4E0A;&#x8FD9;&#x5957;&#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x539F;&#x6837;&#x7167;&#x642C;&#xFF1A;</p>
<pre><code class="language-text">Storybook Web
&#x2192; Headless Chromium
&#x2192; Playwright &#x83B7;&#x53D6; DOM Geometry
&#x2192; CSS &#x8C03;&#x6574;
&#x2192; Browser Screenshot Diff
</code></pre>
<p>RN &#x4E2D;&#x6CA1;&#x6709; DOM &#x548C; CSSOM&#x3002;Playwright &#x65E0;&#x6CD5;&#x8BFB;&#x53D6; Native View &#x7684;&#x5E03;&#x5C40;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x7528; Chromium &#x7684;&#x622A;&#x56FE;&#x4EE3;&#x8868;&#x6700;&#x7EC8; iOS/Android &#x6E32;&#x67D3;&#x3002;</p>
<p>&#x4F46;&#x662F;&#xFF0C;RN &#x5E76;&#x975E;&#x4E0D;&#x80FD;&#x4F7F;&#x7528; Storybook&#xFF0C;&#x4E5F;&#x5E76;&#x975E;&#x4E0D;&#x80FD;&#x505A;&#x89C6;&#x89C9;&#x56DE;&#x5F52;&#x3002;</p>
<p><a href="https://storybookjs.github.io/react-native/docs/intro/">React Native Storybook</a>&#x8FD0;&#x884C;&#x5728; Native &#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528; Metro&#xFF0C;&#x5E76;&#x628A; Story &#x6E32;&#x67D3;&#x5728; App &#x5185;&#xFF1B;&#x5B83;&#x4E0E; Web Storybook &#x7684; iframe/&#x6D4F;&#x89C8;&#x5668;&#x73AF;&#x5883;&#x4E0D;&#x540C;&#x3002;&#x5B98;&#x65B9;&#x4E5F;&#x652F;&#x6301;&#x901A;&#x8FC7; React Native Web &#x8FD0;&#x884C; Storybook&#xFF0C;&#x4F46;&#x524D;&#x63D0;&#x662F;&#x7EC4;&#x4EF6;&#x672C;&#x8EAB;&#x652F;&#x6301; Web&#x3002;</p>
<p>&#x89C6;&#x89C9;&#x622A;&#x56FE;&#x5219;&#x9700;&#x8981;&#x8BBE;&#x5907;&#x3001;&#x6A21;&#x62DF;&#x5668;&#x6216; Emulator&#x3002;&#x6BD4;&#x5982; <a href="https://wix.github.io/Detox/docs/guide/taking-screenshots/">Detox &#x652F;&#x6301;&#x8BBE;&#x5907;&#x7EA7;&#x548C;&#x5143;&#x7D20;&#x7EA7;&#x622A;&#x56FE;</a>&#xFF0C;React Native &#x5B98;&#x65B9;&#x6D4B;&#x8BD5;&#x6587;&#x6863;&#x4E5F;&#x628A; Detox&#x3001;Appium&#x3001;Maestro &#x7B49;&#x5217;&#x4E3A; E2E &#x9009;&#x62E9;&#x3002;</p>
<p>&#x5F53;&#x524D;&#x9879;&#x76EE;&#x7248;&#x672C;&#x8F83;&#x8001;&#xFF0C;&#x800C;&#x6700;&#x65B0;&#x7248; React Native Storybook &#x6587;&#x6863;&#x9762;&#x5411; Storybook 10+ &#x548C;&#x73B0;&#x4EE3; RN &#x5DE5;&#x5177;&#x94FE;&#x3002;&#x9996;&#x671F;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6267;&#x884C;&#x6700;&#x65B0; CLI &#x5E76;&#x671F;&#x5F85;&#x517C;&#x5BB9;&#xFF0C;&#x5E94;&#x628A; Storybook &#x5B89;&#x88C5;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x9650;&#x65F6; Spike&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E3B;&#x94FE;&#x8DEF;&#x7684;&#x524D;&#x7F6E;&#x4F9D;&#x8D56;&#x3002;</p>
<h2 id="&#x9996;&#x671F;&#x6280;&#x672F;&#x9009;&#x62E9;"><a href="#&#x9996;&#x671F;&#x6280;&#x672F;&#x9009;&#x62E9;"></a>&#x9996;&#x671F;&#x6280;&#x672F;&#x9009;&#x62E9;</h2>
<h3 id="&#x9009;&#x62E9;&#x7F16;&#x8BD1;&#x671F;&#x4EE3;&#x7801;&#x751F;&#x6210;"><a href="#&#x9009;&#x62E9;&#x7F16;&#x8BD1;&#x671F;&#x4EE3;&#x7801;&#x751F;&#x6210;"></a>&#x9009;&#x62E9;&#x7F16;&#x8BD1;&#x671F;&#x4EE3;&#x7801;&#x751F;&#x6210;</h3>
<p>&#x9996;&#x671F;&#x91C7;&#x7528;&#xFF1A;</p>
<pre><code class="language-text">Figma &#x2192; RN Page Plan &#x2192; RN Code Emitter &#x2192; &#x666E;&#x901A;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;
</code></pre>
<p>&#x4E0D;&#x91C7;&#x7528;&#xFF1A;</p>
<pre><code class="language-text">Figma &#x2192; JSON Schema &#x2192; App &#x7EBF;&#x4E0A;&#x52A8;&#x6001;&#x89E3;&#x91CA; Schema
</code></pre>
<p>&#x539F;&#x56E0;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x524D;&#x6CA1;&#x6709; RN Runtime&#xFF1B;</li>
<li>&#x73B0;&#x6709; AJR Runtime &#x9762;&#x5411; React Web&#xFF1B;</li>
<li>RN 0.63 &#x5DE5;&#x7A0B;&#x5F15;&#x5165;&#x65B0;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x89E3;&#x91CA;&#x5C42;&#x98CE;&#x9669;&#x8F83;&#x9AD8;&#xFF1B;</li>
<li>&#x4E1A;&#x52A1;&#x6700;&#x7EC8;&#x4ECD;&#x9700;&#x63A5;&#x5165; API&#x3001;Redux&#x3001;Navigator&#x3001;Tracking &#x548C; Native SDK&#xFF1B;</li>
<li>&#x666E;&#x901A; TSX &#x66F4;&#x5BB9;&#x6613;&#x88AB;&#x73B0;&#x6709;&#x5F00;&#x53D1;&#x7EF4;&#x62A4;&#x548C; Review&#xFF1B;</li>
<li>&#x5373;&#x4F7F;&#x540E;&#x7EED;&#x5EFA;&#x8BBE; RN Runtime&#xFF0C;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x7684; Catalog&#x3001;Page Plan &#x548C;&#x9A8C;&#x8BC1;&#x8D44;&#x4EA7;&#x4ECD;&#x80FD;&#x590D;&#x7528;&#x3002;</li>
</ul>
<h3 id="&#x9009;&#x62E9;&#x8F7B;&#x91CF; Fixture Runner &#x4F5C;&#x4E3A;&#x9ED8;&#x8BA4;&#x9884;&#x89C8;&#x73AF;&#x5883;"><a href="#&#x9009;&#x62E9;&#x8F7B;&#x91CF; Fixture Runner &#x4F5C;&#x4E3A;&#x9ED8;&#x8BA4;&#x9884;&#x89C8;&#x73AF;&#x5883;"></a>&#x9009;&#x62E9;&#x8F7B;&#x91CF; Fixture Runner &#x4F5C;&#x4E3A;&#x9ED8;&#x8BA4;&#x9884;&#x89C8;&#x73AF;&#x5883;</h3>
<p>&#x9996;&#x671F;&#x5148;&#x5EFA;&#x8BBE;&#x4E00;&#x4E2A;&#x5F00;&#x53D1;&#x6001; RN Fixture Runner&#xFF0C;&#x7528;&#x786E;&#x5B9A; Mock &#x6570;&#x636E;&#x6E32;&#x67D3;&#x7EC4;&#x4EF6;&#x548C;&#x9875;&#x9762;&#x72B6;&#x6001;&#x3002;</p>
<p>&#x5B83;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x4EC5;&#x5728;&#x5F00;&#x53D1;&#x73AF;&#x5883;&#x6CE8;&#x518C;&#x7684; ShopeeRN Page&#xFF1A;</p>
<pre><code class="language-text">Material Gallery
  &#x251C;&#x2500; Button / default / disabled / loading
  &#x251C;&#x2500; Empty / default / long-text
  &#x251C;&#x2500; ProductCard / normal / sold-out
  &#x2514;&#x2500; PilotPage / loading / empty / error / content
</code></pre>
<p>&#x5982;&#x679C;&#x8001;&#x7248;&#x672C; Storybook &#x80FD;&#x5728;&#x4E0D;&#x5347;&#x7EA7; RN&#x3001;React&#x3001;Metro &#x548C; ShopeeRN Host &#x7684;&#x524D;&#x63D0;&#x4E0B;&#x63A5;&#x5165;&#xFF0C;&#x53EF;&#x4EE5;&#x628A; Fixture &#x8FC1;&#x79FB;&#x4E3A; CSF Story&#xFF1B;&#x5982;&#x679C;&#x4E0D;&#x80FD;&#xFF0C;Fixture Runner &#x7EE7;&#x7EED;&#x627F;&#x62C5;&#x9996;&#x671F;&#x9694;&#x79BB;&#x6E32;&#x67D3;&#xFF0C;&#x4E0D;&#x963B;&#x585E;&#x9879;&#x76EE;&#x3002;</p>
<h3 id="&#x9009;&#x62E9; Native Screenshot &#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;"><a href="#&#x9009;&#x62E9; Native Screenshot &#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;"></a>&#x9009;&#x62E9; Native Screenshot &#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;</h3>
<p>&#x89C6;&#x89C9;&#x9A8C;&#x8BC1;&#x6309;&#x4EE5;&#x4E0B;&#x4F18;&#x5148;&#x7EA7;&#x63A8;&#x8FDB;&#xFF1A;</p>
<ol>
<li>Hostless &#x662F;&#x5426;&#x63D0;&#x4F9B;&#x7A33;&#x5B9A;&#x7684;&#x9875;&#x9762;&#x542F;&#x52A8;&#x4E0E;&#x622A;&#x56FE;&#x63A5;&#x53E3;&#xFF1B;</li>
<li>iOS Simulator&#xFF0C;&#x901A;&#x8FC7;&#x56FA;&#x5B9A;&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C;&#x7CFB;&#x7EDF;&#x622A;&#x56FE;&#x547D;&#x4EE4;&#x91C7;&#x96C6;&#xFF1B;</li>
<li>Android Emulator&#xFF0C;&#x901A;&#x8FC7;&#x56FA;&#x5B9A;&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C; <code>adb</code> &#x622A;&#x56FE;&#x91C7;&#x96C6;&#xFF1B;</li>
<li>&#x5982;&#x679C;&#x540E;&#x7EED;&#x9700;&#x8981;&#x5B8C;&#x6574; E2E&#xFF0C;&#x518D;&#x8BC4;&#x4F30;&#x517C;&#x5BB9;&#x5F53;&#x524D; RN &#x7248;&#x672C;&#x7684; Detox&#x3001;Maestro &#x6216;&#x5185;&#x90E8;&#x81EA;&#x52A8;&#x5316;&#x5E73;&#x53F0;&#x3002;</li>
</ol>
<p>React Native Web &#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5FEB;&#x901F;&#x9884;&#x89C8;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x9A8C;&#x6536;&#xFF0C;&#x56E0;&#x4E3A; ShopeeRN SDK&#x3001;&#x5B57;&#x4F53;&#x3001;Native View&#x3001;Safe Area &#x548C;&#x5E73;&#x53F0;&#x5DEE;&#x5F02;&#x65E0;&#x6CD5;&#x88AB;&#x5B8C;&#x6574;&#x6A21;&#x62DF;&#x3002;</p>
<h2 id="&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x9636;&#x6BB5;"><a href="#&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x9636;&#x6BB5;"></a>&#x6574;&#x4F53;&#x63A8;&#x8FDB;&#x9636;&#x6BB5;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;</h3>
<p>&#x76EE;&#x6807;&#x662F;&#x8BC1;&#x660E;&#x4E00;&#x9875;&#x80FD;&#x4ECE; Figma &#x7A33;&#x5B9A;&#x751F;&#x6210; RN &#x4EE3;&#x7801;&#x5E76;&#x901A;&#x8FC7;&#x89C6;&#x89C9;&#x9A8C;&#x6536;&#x3002;</p>
<p>&#x4E3B;&#x8981;&#x4EA7;&#x7269;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x4E2A;&#x9002;&#x5408;&#x8BD5;&#x70B9;&#x7684;&#x771F;&#x5B9E;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x9996;&#x6279; 15&#xFF5E;25 &#x4E2A; RN Material &#x5B9A;&#x4E49;&#xFF1B;</li>
<li>&#x4E00;&#x4E2A;&#x5F00;&#x53D1;&#x6001; Fixture Runner&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x7684; Golden Mapping&#xFF1B;</li>
<li>RN Page Plan&#xFF1B;</li>
<li>RN Code Emitter&#xFF1B;</li>
<li>&#x4E00;&#x7EC4; Figma &#x4E0E; RN &#x622A;&#x56FE;&#x5BF9;&#x6BD4;&#x62A5;&#x544A;&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x5DEE;&#x5F02;&#x5206;&#x7C7B;&#x548C;&#x540E;&#x7EED;&#x51B3;&#x7B56;&#x8BB0;&#x5F55;&#x3002;</li>
</ul>
<p>&#x8BE6;&#x7EC6;&#x4EFB;&#x52A1;&#x89C1;<a href="./%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5-%E5%8D%95%E9%A1%B5%E5%9E%82%E7%9B%B4%E5%88%87%E7%89%87%E5%AE%9E%E6%96%BD%E6%89%8B%E5%86%8C.md">&#x300A;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x624B;&#x518C;&#x300B;</a>&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x4E0E; Catalog &#x6CDB;&#x5316;"><a href="#&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x4E0E; Catalog &#x6CDB;&#x5316;"></a>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x4E0E; Catalog &#x6CDB;&#x5316;</h3>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5F88;&#x5BB9;&#x6613;&#x201C;&#x4E3A;&#x4E00;&#x4E2A;&#x9875;&#x9762;&#x505A;&#x51FA;&#x4E00;&#x5957;&#x4E13;&#x7528;&#x751F;&#x6210;&#x5668;&#x201D;&#x3002;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x5FC5;&#x987B;&#x6362;&#x4E00;&#x79CD;&#x9875;&#x9762;&#x7C7B;&#x578B;&#xFF0C;&#x9A8C;&#x8BC1;&#x80FD;&#x529B;&#x662F;&#x5426;&#x771F;&#x6B63;&#x590D;&#x7528;&#x3002;</p>
<p>&#x4E3B;&#x8981;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<ul>
<li>&#x9009;&#x62E9;&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#xFF0C;&#x5C3D;&#x91CF;&#x4E0E;&#x9996;&#x4E2A;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x4E0D;&#x540C;&#xFF1B;</li>
<li>&#x590D;&#x7528;&#x9996;&#x6279; Catalog&#xFF0C;&#x8BB0;&#x5F55;&#x7F3A;&#x5931;&#x9879;&#xFF1B;</li>
<li>&#x628A;&#x9875;&#x9762;&#x7279;&#x4F8B;&#x4E0E;&#x516C;&#x5171;&#x7269;&#x6599;&#x5206;&#x5F00;&#xFF1B;</li>
<li>&#x56FA;&#x5316; Layout&#x3001;Text&#x3001;Asset&#x3001;Safe Area &#x548C;&#x5217;&#x8868;&#x89C4;&#x5219;&#xFF1B;</li>
<li>&#x5F62;&#x6210;&#x53EF;&#x91CD;&#x590D;&#x7684; Material &#x8986;&#x76D6;&#x5BA1;&#x8BA1;&#xFF1B;</li>
<li>&#x9A8C;&#x8BC1; Figma &#x5C0F;&#x6539;&#x52A8;&#x662F;&#x5426;&#x80FD;&#x589E;&#x91CF;&#x66F4;&#x65B0;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5168;&#x9875;&#x91CD;&#x751F;&#x6210;&#x3002;</li>
</ul>
<h3 id="&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x4E0E; Agent &#x63A5;&#x5165;"><a href="#&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x4E0E; Agent &#x63A5;&#x5165;"></a>&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x4E0E; Agent &#x63A5;&#x5165;</h3>
<p>&#x5728;&#x4E24;&#x9875;&#x95ED;&#x73AF;&#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x518D;&#x63A5;&#x5165; <code>fe-code-agent</code> &#x548C; <code>ai-code-agent</code>&#x3002;</p>
<p>&#x4E3B;&#x8981;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<ul>
<li>&#x4E3A;&#x4EFB;&#x52A1;&#x8F93;&#x5165;&#x589E;&#x52A0; <code>platform=react_native</code>&#xFF1B;</li>
<li>&#x628A; Figma &#x89E3;&#x6790;&#x3001;RN Mapping&#x3001;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3001;&#x9A8C;&#x8BC1;&#x62C6;&#x6210;&#x53EF;&#x89C2;&#x6D4B;&#x8282;&#x70B9;&#xFF1B;</li>
<li>&#x4E3A;&#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x4FDD;&#x5B58;&#x72EC;&#x7ACB;&#x4EA7;&#x7269;&#x548C;&#x9519;&#x8BEF;&#x539F;&#x56E0;&#xFF1B;</li>
<li>&#x652F;&#x6301;&#x4ECE;&#x5931;&#x8D25;&#x8282;&#x70B9;&#x91CD;&#x8DD1;&#xFF1B;</li>
<li>&#x9632;&#x6B62;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x8986;&#x76D6;&#x5F00;&#x53D1;&#x5DF2;&#x7ECF;&#x63A5;&#x5165;&#x7684;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF1B;</li>
<li>&#x628A;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x751F;&#x6210;&#x548C;&#x5BBF;&#x4E3B;&#x903B;&#x8F91;&#x63A5;&#x5165;&#x5206;&#x6210;&#x4E24;&#x4E2A;&#x9636;&#x6BB5;&#xFF1B;</li>
<li>&#x628A;&#x89C6;&#x89C9;&#x62A5;&#x544A;&#x63A5;&#x5165;&#x4EBA;&#x5DE5; Review&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E00;&#x6B65;&#x5E94;&#x5438;&#x6536;&#x73B0;&#x6709;&#x65B9;&#x6848;&#x4E2D;&#x6709;&#x4EF7;&#x503C;&#x7684; Parser&#x3001;Recognition&#x3001;Artifact &#x548C; Review &#x601D;&#x8DEF;&#xFF0C;&#x4F46;&#x4E0D;&#x9700;&#x8981;&#x4FDD;&#x6301;&#x539F;&#x6709;&#x590D;&#x6742;&#x6D41;&#x7A0B;&#x548C;&#x6240;&#x6709;&#x4E2D;&#x95F4;&#x534F;&#x8BAE;&#x517C;&#x5BB9;&#x3002;</p>
<h3 id="&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;Material-first &#x6B63;&#x5411;&#x539F;&#x578B;"><a href="#&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;Material-first &#x6B63;&#x5411;&#x539F;&#x578B;"></a>&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;Material-first &#x6B63;&#x5411;&#x539F;&#x578B;</h3>
<p>&#x5F53; RN Catalog&#x3001;Fixture &#x548C; Code Emitter &#x5DF2;&#x88AB;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9A8C;&#x8BC1;&#x540E;&#xFF0C;&#x518D;&#x589E;&#x52A0;&#x9700;&#x6C42;&#x5230;&#x539F;&#x578B;&#x7684;&#x6B63;&#x5411;&#x8DEF;&#x5F84;&#xFF1A;</p>
<pre><code class="language-text">&#x9700;&#x6C42;
  &#x2192; &#x9875;&#x9762;&#x76EE;&#x6807;&#x3001;&#x5185;&#x5BB9;&#x3001;&#x64CD;&#x4F5C;&#x4E0E;&#x72B6;&#x6001;
  &#x2192; &#x57FA;&#x4E8E; RN Material Catalog &#x751F;&#x6210;&#x53EF;&#x8FD0;&#x884C;&#x539F;&#x578B;
  &#x2192; &#x4EA7;&#x54C1;&#x548C; UED &#x4FEE;&#x6539;
  &#x2192; &#x590D;&#x7528;&#x540C;&#x4E00; RN Page Plan &#x4E0E;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x5668;
</code></pre>
<p>&#x6B64;&#x65F6; Figma-to-RN &#x662F;&#x517C;&#x5BB9;&#x548C;&#x521B;&#x65B0;&#x901A;&#x9053;&#xFF0C;Material-first &#x6210;&#x4E3A;&#x6807;&#x51C6;&#x9875;&#x9762;&#x7684;&#x5019;&#x9009;&#x9ED8;&#x8BA4;&#x5165;&#x53E3;&#x3002;</p>
<h2 id="&#x65F6;&#x95F4;&#x8BC4;&#x4F30;"><a href="#&#x65F6;&#x95F4;&#x8BC4;&#x4F30;"></a>&#x65F6;&#x95F4;&#x8BC4;&#x4F30;</h2>
<h3 id="&#x8BC4;&#x4F30;&#x524D;&#x63D0;"><a href="#&#x8BC4;&#x4F30;&#x524D;&#x63D0;"></a>&#x8BC4;&#x4F30;&#x524D;&#x63D0;</h3>
<p>&#x4EE5;&#x4E0B;&#x65F6;&#x95F4;&#x6309;&#x8FD9;&#x4E2A;&#x6295;&#x5165;&#x6A21;&#x578B;&#x4F30;&#x7B97;&#xFF1A;</p>
<ul>
<li>1 &#x540D;&#x4E3B;&#x529B;&#x524D;&#x7AEF;&#x5168;&#x804C;&#xFF0C;&#x719F;&#x6089; React Web&#xFF0C;&#x4F46;&#x521A;&#x5F00;&#x59CB;&#x719F;&#x6089; ShopeeRN&#xFF1B;</li>
<li>1 &#x540D;&#x719F;&#x6089; <code>web-affiliate-rn</code> &#x7684;&#x5DE5;&#x7A0B;&#x5E08;&#x6295;&#x5165; 20%&#xFF5E;30% &#x65F6;&#x95F4;&#x7B54;&#x7591;&#x4E0E; Review&#xFF1B;</li>
<li>&#x4EA7;&#x54C1;/UED &#x80FD;&#x5728;&#x5173;&#x952E;&#x8282;&#x70B9;&#x53CA;&#x65F6;&#x786E;&#x8BA4;&#xFF1B;</li>
<li>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x9009;&#x62E9;&#x4E2D;&#x7B49;&#x590D;&#x6742;&#x5EA6;&#x9875;&#x9762;&#xFF0C;&#x4E0D;&#x9009;&#x62E9; Home&#x3001;&#x590D;&#x6742;&#x56FE;&#x8868;&#x6216;&#x8D85;&#x957F;&#x5217;&#x8868;&#xFF1B;</li>
<li>Figma &#x80FD;&#x63D0;&#x4F9B;&#x5B8C;&#x6574; Frame&#x3001;&#x72B6;&#x6001;&#x548C;&#x8D44;&#x6E90;&#xFF1B;</li>
<li>&#x4E0D;&#x5728;&#x540C;&#x671F;&#x5347;&#x7EA7; React Native&#x3001;React&#x3001;Metro &#x6216; ShopeeRN SDK&#x3002;</li>
</ul>
<table>
<thead>
<tr>
<th>&#x9636;&#x6BB5;</th>
<th>&#x76EE;&#x6807;</th>
<th style="text-align:right">&#x4EBA;&#x529B;&#x4F30;&#x7B97;</th>
<th style="text-align:right">&#x65E5;&#x5386;&#x65F6;&#x95F4;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;</td>
<td>&#x5355;&#x9875; Figma &#x2192; RN Code &#x2192; Native Visual Loop</td>
<td style="text-align:right">4&#xFF5E;6 &#x4EBA;&#x5468;</td>
<td style="text-align:right">3&#xFF5E;4 &#x5468;</td>
</tr>
<tr>
<td>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;</td>
<td>&#x7B2C;&#x4E8C;&#x7C7B;&#x9875;&#x9762;&#x3001;Catalog &#x6CDB;&#x5316;&#x3001;&#x589E;&#x91CF;&#x66F4;&#x65B0;</td>
<td style="text-align:right">4&#xFF5E;5 &#x4EBA;&#x5468;</td>
<td style="text-align:right">2&#xFF5E;3 &#x5468;</td>
</tr>
<tr>
<td>&#x7B2C;&#x4E09;&#x9636;&#x6BB5;</td>
<td>&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x3001;&#x53EF;&#x89C2;&#x6D4B;&#x6027;&#x3001;Agent &#x63A5;&#x5165;</td>
<td style="text-align:right">4&#xFF5E;6 &#x4EBA;&#x5468;</td>
<td style="text-align:right">2&#xFF5E;3 &#x5468;</td>
</tr>
<tr>
<td>&#x7B2C;&#x56DB;&#x9636;&#x6BB5;</td>
<td>Requirement-to-Prototype / Material-first</td>
<td style="text-align:right">5&#xFF5E;7 &#x4EBA;&#x5468;</td>
<td style="text-align:right">3&#xFF5E;4 &#x5468;</td>
</tr>
<tr>
<td>&#x5408;&#x8BA1;</td>
<td>&#x4ECE;&#x9A8C;&#x8BC1;&#x5230;&#x53EF;&#x6301;&#x7EED;&#x8BD5;&#x7528;</td>
<td style="text-align:right">17&#xFF5E;24 &#x4EBA;&#x5468;</td>
<td style="text-align:right">10&#xFF5E;14 &#x5468;</td>
</tr>
</tbody>
</table>
<p>&#x5982;&#x679C;&#x53EA;&#x6709;&#x4E00;&#x540D;&#x5BF9; RN &#x4E0D;&#x719F;&#x6089;&#x7684;&#x5DE5;&#x7A0B;&#x5E08;&#x72EC;&#x7ACB;&#x63A8;&#x8FDB;&#xFF0C;&#x6574;&#x4F53;&#x66F4;&#x63A5;&#x8FD1; 14&#xFF5E;20 &#x5468;&#x3002;&#x8FD9;&#x91CC;&#x7684;&#x201C;&#x5B8C;&#x6210;&#x201D;&#x6307;&#x53EF;&#x4EE5;&#x5728;&#x6709;&#x9650;&#x9875;&#x9762;&#x7C7B;&#x578B;&#x4E2D;&#x7A33;&#x5B9A;&#x8BD5;&#x7528;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x5DF2;&#x7ECF;&#x8986;&#x76D6;&#x4ED3;&#x5E93;&#x6240;&#x6709;&#x5386;&#x53F2;&#x9875;&#x9762;&#x548C;&#x7EC4;&#x4EF6;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5185;&#x90E8;&#x65F6;&#x95F4;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5185;&#x90E8;&#x65F6;&#x95F4;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5185;&#x90E8;&#x65F6;&#x95F4;</h3>
<table>
<thead>
<tr>
<th>&#x5DE5;&#x4F5C;&#x5305;</th>
<th style="text-align:right">&#x9884;&#x8BA1;&#x65F6;&#x95F4;</th>
</tr>
</thead>
<tbody>
<tr>
<td>RN &#x73AF;&#x5883;&#x719F;&#x6089;&#x3001;&#x76EE;&#x6807;&#x9875;&#x542F;&#x52A8;&#x4E0E; Mock</td>
<td style="text-align:right">2&#xFF5E;3 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>Storybook/Fixture/Screenshot &#x53EF;&#x884C;&#x6027; Spike</td>
<td style="text-align:right">2&#xFF5E;3 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>Golden Mapping &#x4E0E;&#x9996;&#x6279; Catalog</td>
<td style="text-align:right">3&#xFF5E;5 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>Figma &#x5F52;&#x4E00;&#x5316;&#x4E0E; RN Page Plan</td>
<td style="text-align:right">3&#xFF5E;5 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>RN Code Emitter</td>
<td style="text-align:right">4&#xFF5E;6 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>&#x9875;&#x9762;&#x5BBF;&#x4E3B;&#x63A5;&#x5165;</td>
<td style="text-align:right">3&#xFF5E;4 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>Native &#x622A;&#x56FE;&#x3001;Diff&#x3001;&#x4FEE;&#x6B63;&#x4E0E;&#x590D;&#x76D8;</td>
<td style="text-align:right">3&#xFF5E;4 &#x4EBA;&#x65E5;</td>
</tr>
<tr>
<td>&#x5408;&#x8BA1;</td>
<td style="text-align:right">20&#xFF5E;30 &#x4EBA;&#x65E5;</td>
</tr>
</tbody>
</table>
<p>&#x90E8;&#x5206;&#x5DE5;&#x4F5C;&#x53EF;&#x4EE5;&#x5E76;&#x884C;&#xFF0C;&#x6240;&#x4EE5;&#x5728;&#x6709; RN Reviewer &#x652F;&#x6301;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x65E5;&#x5386;&#x65F6;&#x95F4;&#x7EA6;&#x4E3A; 3&#xFF5E;4 &#x5468;&#x3002;</p>
<h2 id="&#x6BCF;&#x4E2A;&#x9636;&#x6BB5;&#x7684;&#x7EE7;&#x7EED;&#x6761;&#x4EF6;"><a href="#&#x6BCF;&#x4E2A;&#x9636;&#x6BB5;&#x7684;&#x7EE7;&#x7EED;&#x6761;&#x4EF6;"></a>&#x6BCF;&#x4E2A;&#x9636;&#x6BB5;&#x7684;&#x7EE7;&#x7EED;&#x6761;&#x4EF6;</h2>
<p>&#x9879;&#x76EE;&#x4E0D;&#x5E94;&#x53EA;&#x6309;&#x65F6;&#x95F4;&#x63A8;&#x8FDB;&#xFF0C;&#x800C;&#x5E94;&#x8BBE;&#x7F6E;&#x7EE7;&#x7EED;&#x6761;&#x4EF6;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x8FDB;&#x5165;&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;</h3>
<ul>
<li>&#x9875;&#x9762;&#x6240;&#x6709;&#x4E3B;&#x8981;&#x89C6;&#x89C9;&#x533A;&#x5757;&#x90FD;&#x6709;&#x660E;&#x786E; Material &#x6216;&#x9875;&#x9762;&#x5C40;&#x90E8;&#x5B9E;&#x73B0;&#x51B3;&#x7B56;&#xFF1B;</li>
<li>&#x76F8;&#x540C;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x751F;&#x6210;&#x65F6;&#xFF0C;Page Plan &#x7ED3;&#x6784;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x80FD;&#x901A;&#x8FC7;&#x7C7B;&#x578B;&#x3001;Lint &#x548C;&#x5FC5;&#x8981;&#x6D4B;&#x8BD5;&#xFF1B;</li>
<li>&#x81F3;&#x5C11;&#x5B8C;&#x6210;&#x4E00;&#x7EC4; iOS &#x548C; Android &#x622A;&#x56FE;&#xFF1B;</li>
<li>375 &#x57FA;&#x51C6;&#x548C;&#x4E00;&#x4E2A;&#x5C0F;&#x5C4F;&#x5C3A;&#x5BF8;&#x5B8C;&#x6210;&#x9A8C;&#x8BC1;&#xFF1B;</li>
<li>loading&#x3001;empty/error&#x3001;content &#x7B49;&#x7EA6;&#x5B9A;&#x72B6;&#x6001;&#x5B8C;&#x6210;&#x9A8C;&#x8BC1;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x4FEE;&#x6539;&#x6709;&#x8BB0;&#x5F55;&#xFF0C;&#x80FD;&#x5206;&#x6E05;&#x662F; Catalog&#x3001;Mapping&#x3001;Emitter &#x8FD8;&#x662F;&#x5BBF;&#x4E3B;&#x903B;&#x8F91;&#x95EE;&#x9898;&#x3002;</li>
</ul>
<h3 id="&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x8FDB;&#x5165; Agent &#x96C6;&#x6210;"><a href="#&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x8FDB;&#x5165; Agent &#x96C6;&#x6210;"></a>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#x8FDB;&#x5165; Agent &#x96C6;&#x6210;</h3>
<ul>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#x660E;&#x663E;&#x590D;&#x7528;&#x4E86;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x80FD;&#x529B;&#xFF1B;</li>
<li>&#x6CA1;&#x6709;&#x4E3A;&#x6BCF;&#x4E2A;&#x9875;&#x9762;&#x590D;&#x5236;&#x4E00;&#x5957;&#x89C4;&#x5219;&#xFF1B;</li>
<li>Catalog &#x4E2D;&#x7684;&#x516C;&#x5171; Material &#x4E0E;&#x9875;&#x9762;&#x5C40;&#x90E8;&#x7EC4;&#x4EF6;&#x8FB9;&#x754C;&#x6E05;&#x695A;&#xFF1B;</li>
<li>Figma &#x5C0F;&#x6539;&#x52A8;&#x4E0D;&#x8981;&#x6C42;&#x5168;&#x9875;&#x63A8;&#x7FFB;&#x91CD;&#x505A;&#xFF1B;</li>
<li>&#x5931;&#x8D25;&#x539F;&#x56E0;&#x80FD;&#x591F;&#x5728;&#x5355;&#x4E2A;&#x6B65;&#x9AA4;&#x5B9A;&#x4F4D;&#x3002;</li>
</ul>
<h3 id="Agent &#x96C6;&#x6210;&#x8FDB;&#x5165; Material-first"><a href="#Agent &#x96C6;&#x6210;&#x8FDB;&#x5165; Material-first"></a>Agent &#x96C6;&#x6210;&#x8FDB;&#x5165; Material-first</h3>
<ul>
<li>Figma-to-RN &#x5DF2;&#x7ECF;&#x7A33;&#x5B9A;&#x6D88;&#x8D39; Catalog&#xFF1B;</li>
<li>Catalog &#x7684; Props&#x3001;&#x72B6;&#x6001;&#x548C;&#x793A;&#x4F8B;&#x8DB3;&#x591F;&#x652F;&#x6301;&#x6B63;&#x5411;&#x7EC4;&#x5408;&#xFF1B;</li>
<li>UED &#x613F;&#x610F;&#x4F7F;&#x7528;&#x53EF;&#x8FD0;&#x884C;&#x539F;&#x578B;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x771F;&#x5B9E;&#x4FEE;&#x6539;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x751F;&#x6210;&#x7ED3;&#x679C;&#x80FD;&#x591F;&#x88AB;&#x73B0;&#x6709;&#x5F00;&#x53D1;&#x7EE7;&#x7EED;&#x7EF4;&#x62A4;&#x3002;</li>
</ul>
<h2 id="&#x5173;&#x952E;&#x98CE;&#x9669;"><a href="#&#x5173;&#x952E;&#x98CE;&#x9669;"></a>&#x5173;&#x952E;&#x98CE;&#x9669;</h2>
<h3 id="&#x8001;&#x7248;&#x672C; RN &#x4E0E;&#x73B0;&#x4EE3;&#x5DE5;&#x5177;&#x4E0D;&#x517C;&#x5BB9;"><a href="#&#x8001;&#x7248;&#x672C; RN &#x4E0E;&#x73B0;&#x4EE3;&#x5DE5;&#x5177;&#x4E0D;&#x517C;&#x5BB9;"></a>&#x8001;&#x7248;&#x672C; RN &#x4E0E;&#x73B0;&#x4EE3;&#x5DE5;&#x5177;&#x4E0D;&#x517C;&#x5BB9;</h3>
<p>&#x5F53;&#x524D; React 16 / RN 0.63 / Node 14 &#x4E0E;&#x73B0;&#x4EE3; Storybook&#x3001;Detox &#x548C;&#x90E8;&#x5206;&#x6784;&#x5EFA;&#x5DE5;&#x5177;&#x5B58;&#x5728;&#x660E;&#x663E;&#x4EE3;&#x9645;&#x5DEE;&#x5F02;&#x3002;&#x539F;&#x5219;&#x662F;&#xFF1A;&#x5DE5;&#x5177;&#x63A5;&#x5165;&#x5931;&#x8D25;&#x65F6;&#x6362;&#x8F7B;&#x91CF;&#x5B9E;&#x73B0;&#xFF0C;&#x4E0D;&#x4E3A;&#x8BD5;&#x70B9;&#x5347;&#x7EA7;&#x6574;&#x4E2A; RN &#x5DE5;&#x7A0B;&#x3002;</p>
<h3 id="&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#x5F88;&#x591A;&#xFF0C;&#x4F46;&#x53EF;&#x7528;&#x7269;&#x6599;&#x4E0D;&#x4E00;&#x5B9A;&#x591A;"><a href="#&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#x5F88;&#x591A;&#xFF0C;&#x4F46;&#x53EF;&#x7528;&#x7269;&#x6599;&#x4E0D;&#x4E00;&#x5B9A;&#x591A;"></a>&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#x5F88;&#x591A;&#xFF0C;&#x4F46;&#x53EF;&#x7528;&#x7269;&#x6599;&#x4E0D;&#x4E00;&#x5B9A;&#x591A;</h3>
<p>&#x4ED3;&#x5E93;&#x4E2D;&#x7684;&#x7EC4;&#x4EF6;&#x53EF;&#x80FD;&#x6DF7;&#x6709; API&#x3001;Redux&#x3001;Tracking&#x3001;Navigator &#x548C;&#x4E1A;&#x52A1;&#x5224;&#x65AD;&#x3002;&#x9996;&#x6279;&#x53EA;&#x6CE8;&#x518C;&#x5C55;&#x793A;&#x8FB9;&#x754C;&#x6E05;&#x695A;&#x3001;Props &#x7A33;&#x5B9A;&#x3001;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; Mock &#x72EC;&#x7ACB;&#x6E32;&#x67D3;&#x7684;&#x7EC4;&#x4EF6;&#x3002;</p>
<h3 id="Web &#x9884;&#x89C8;&#x4E0E; Native &#x5B9E;&#x9645;&#x7ED3;&#x679C;&#x4E0D;&#x4E00;&#x81F4;"><a href="#Web &#x9884;&#x89C8;&#x4E0E; Native &#x5B9E;&#x9645;&#x7ED3;&#x679C;&#x4E0D;&#x4E00;&#x81F4;"></a>Web &#x9884;&#x89C8;&#x4E0E; Native &#x5B9E;&#x9645;&#x7ED3;&#x679C;&#x4E0D;&#x4E00;&#x81F4;</h3>
<p>React Native Web &#x9002;&#x5408;&#x52A0;&#x901F;&#x8C03;&#x8BD5;&#xFF0C;&#x4E0D;&#x9002;&#x5408;&#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x4E8B;&#x5B9E;&#x3002;&#x6700;&#x7EC8;&#x89C6;&#x89C9;&#x8BC1;&#x636E;&#x5FC5;&#x987B;&#x6765;&#x81EA;&#x76EE;&#x6807;&#x5E73;&#x53F0;&#x3002;</p>
<h3 id="&#x81EA;&#x52A8;&#x89C6;&#x89C9;&#x8C03;&#x53C2;&#x9677;&#x5165;&#x50CF;&#x7D20;&#x4F18;&#x5316;"><a href="#&#x81EA;&#x52A8;&#x89C6;&#x89C9;&#x8C03;&#x53C2;&#x9677;&#x5165;&#x50CF;&#x7D20;&#x4F18;&#x5316;"></a>&#x81EA;&#x52A8;&#x89C6;&#x89C9;&#x8C03;&#x53C2;&#x9677;&#x5165;&#x50CF;&#x7D20;&#x4F18;&#x5316;</h3>
<p>Figma &#x4E0E; Native &#x5B57;&#x4F53;&#x6E32;&#x67D3;&#x5B58;&#x5728;&#x5929;&#x7136;&#x5DEE;&#x5F02;&#x3002;&#x9700;&#x8981;&#x533A;&#x5206;&#x7ED3;&#x6784;&#x9519;&#x8BEF;&#x3001;&#x7269;&#x6599;&#x9519;&#x8BEF;&#x3001;&#x5E03;&#x5C40;&#x9519;&#x8BEF;&#x3001;&#x8D44;&#x6E90;&#x9519;&#x8BEF;&#x548C;&#x5E73;&#x53F0;&#x566A;&#x58F0;&#xFF0C;&#x4E0D;&#x8981;&#x53EA;&#x4F18;&#x5316;&#x4E00;&#x4E2A;&#x5168;&#x9875;&#x9762;&#x50CF;&#x7D20;&#x5206;&#x6570;&#x3002;</p>
<h3 id="AI &#x751F;&#x6210;&#x4EE3;&#x7801;&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;"><a href="#AI &#x751F;&#x6210;&#x4EE3;&#x7801;&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;"></a>AI &#x751F;&#x6210;&#x4EE3;&#x7801;&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;</h3>
<p>Code Emitter &#x5E94;&#x4EE5;&#x6A21;&#x677F;&#x548C; Catalog &#x7EA6;&#x675F;&#x4E3A;&#x4E3B;&#x3002;AI &#x8D1F;&#x8D23; Mapping &#x548C;&#x5C40;&#x90E8;&#x5EFA;&#x8BAE;&#xFF0C;&#x4E0D;&#x80FD;&#x6BCF;&#x6B21;&#x81EA;&#x7531;&#x91CD;&#x5199;&#x6574;&#x4E2A;&#x9875;&#x9762;&#x3002;</p>
<h2 id="&#x5F53;&#x524D;&#x6700;&#x5E94;&#x8BE5;&#x505A;&#x7684;&#x51B3;&#x5B9A;"><a href="#&#x5F53;&#x524D;&#x6700;&#x5E94;&#x8BE5;&#x505A;&#x7684;&#x51B3;&#x5B9A;"></a>&#x5F53;&#x524D;&#x6700;&#x5E94;&#x8BE5;&#x505A;&#x7684;&#x51B3;&#x5B9A;</h2>
<p>&#x542F;&#x52A8;&#x524D;&#x53EA;&#x9700;&#x8981;&#x5148;&#x786E;&#x5B9A;&#x56DB;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<ol>
<li>&#x9996;&#x4E2A;&#x8BD5;&#x70B9;&#x9875;&#x9762;&#x548C; Figma &#x94FE;&#x63A5;&#xFF1B;</li>
<li>&#x9700;&#x8981;&#x8986;&#x76D6;&#x7684;&#x9875;&#x9762;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x7528;&#x54EA;&#x4E2A;&#x56FD;&#x5BB6;&#x3001;&#x8BED;&#x8A00;&#x3001;&#x8BBE;&#x5907;&#x5C3A;&#x5BF8;&#x4F5C;&#x4E3A; Golden Baseline&#xFF1B;</li>
<li>&#x54EA;&#x4F4D; RN &#x5DE5;&#x7A0B;&#x5E08;&#x8D1F;&#x8D23;&#x6BCF;&#x5468;&#x4E24;&#x6B21;&#x77ED; Review&#x3002;</li>
</ol>
<p>&#x786E;&#x5B9A;&#x540E;&#x76F4;&#x63A5;&#x6309;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5B9E;&#x65BD;&#x624B;&#x518C;&#x63A8;&#x8FDB;&#x3002;&#x9996;&#x671F;&#x4E0D;&#x8981;&#x7B49;&#x5F85;&#x5B8C;&#x6574; Material-first &#x5E73;&#x53F0;&#x3001;&#x5168;&#x91CF;&#x7EC4;&#x4EF6;&#x6CBB;&#x7406;&#x6216; Agent &#x603B;&#x6D41;&#x7A0B;&#x6539;&#x9020;&#x3002;</p>
`,F=[{level:1,title:"web-affiliate-rn 设计稿还原推进路线",children:[{level:2,title:"结论",children:[]},{level:2,title:"为什么不能直接复制 React Web 方案",children:[]},{level:2,title:"首期技术选择",children:[{level:3,title:"选择编译期代码生成",children:[]},{level:3,title:"选择轻量 Fixture Runner 作为默认预览环境",children:[]},{level:3,title:"选择 Native Screenshot 作为最终视觉事实",children:[]}]},{level:2,title:"整体推进阶段",children:[{level:3,title:"第一阶段：单页垂直切片",children:[]},{level:3,title:"第二阶段：第二类页面与 Catalog 泛化",children:[]},{level:3,title:"第三阶段：稳定自动化与 Agent 接入",children:[]},{level:3,title:"第四阶段：Material-first 正向原型",children:[]}]},{level:2,title:"时间评估",children:[{level:3,title:"评估前提",children:[]},{level:3,title:"第一阶段内部时间",children:[]}]},{level:2,title:"每个阶段的继续条件",children:[{level:3,title:"第一阶段进入第二阶段",children:[]},{level:3,title:"第二阶段进入 Agent 集成",children:[]},{level:3,title:"Agent 集成进入 Material-first",children:[]}]},{level:2,title:"关键风险",children:[{level:3,title:"老版本 RN 与现代工具不兼容",children:[]},{level:3,title:"公共组件很多，但可用物料不一定多",children:[]},{level:3,title:"Web 预览与 Native 实际结果不一致",children:[]},{level:3,title:"自动视觉调参陷入像素优化",children:[]},{level:3,title:"AI 生成代码难以维护",children:[]}]},{level:2,title:"当前最应该做的决定",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
