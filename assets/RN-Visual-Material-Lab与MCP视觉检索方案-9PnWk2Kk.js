const x={title:"RN Visual Material Lab 与 MCP 视觉检索方案",description:"面向 web-affiliate-rn，以可执行视觉物料库、MCP 检索和 Native 截图反馈完成 Figma 设计稿还原。"},F=`<h1 id="RN Visual Material Lab &#x4E0E; MCP &#x89C6;&#x89C9;&#x68C0;&#x7D22;&#x65B9;&#x6848;"><a href="#RN Visual Material Lab &#x4E0E; MCP &#x89C6;&#x89C9;&#x68C0;&#x7D22;&#x65B9;&#x6848;"></a>RN Visual Material Lab &#x4E0E; MCP &#x89C6;&#x89C9;&#x68C0;&#x7D22;&#x65B9;&#x6848;</h1>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p>&#x8FD9;&#x5957;&#x601D;&#x8DEF;&#x53EF;&#x884C;&#xFF0C;&#x800C;&#x4E14;&#x503C;&#x5F97;&#x4F5C;&#x4E3A; <code>web-affiliate-rn</code> &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x7684;&#x4E3B;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x5B83;&#x6BD4;&#x201C;&#x5148;&#x4E3A;&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6;&#x8865;&#x5168;&#x5927;&#x91CF;&#x6587;&#x5B57;&#x63CF;&#x8FF0;&#xFF0C;&#x518D;&#x8BA9; Agent &#x9759;&#x6001;&#x68C0;&#x7D22;&#x7EC4;&#x4EF6;&#x201D;&#x66F4;&#x9002;&#x5408;&#x5F53;&#x524D; RN &#x4ED3;&#x5E93;&#x3002;&#x65E7;&#x7EC4;&#x4EF6;&#x7684;&#x6587;&#x6863;&#x3001;&#x547D;&#x540D;&#x548C; Props &#x53EF;&#x80FD;&#x4E0D;&#x5B8C;&#x6574;&#xFF0C;&#x4F46;&#x7EC4;&#x4EF6;&#x5728;&#x771F;&#x5B9E; Native &#x73AF;&#x5883;&#x4E2D;&#x7684;&#x6E32;&#x67D3;&#x7ED3;&#x679C;&#x662F;&#x76F4;&#x63A5;&#x8BC1;&#x636E;&#x3002;&#x8BA9; Codex &#x5148;&#x770B;&#x73B0;&#x6709;&#x7269;&#x6599;&#x771F;&#x6B63;&#x957F;&#x4EC0;&#x4E48;&#x6837;&#xFF0C;&#x518D;&#x9009;&#x62E9;&#x3001;&#x8FD0;&#x884C;&#x548C;&#x590D;&#x6838;&#xFF0C;&#x6BD4;&#x53EA;&#x4F9D;&#x8D56;&#x7EC4;&#x4EF6;&#x540D;&#x79F0;&#x6216;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63CF;&#x8FF0;&#x66F4;&#x53EF;&#x9760;&#x3002;</p>
<p>&#x4E0D;&#x8FC7;&#xFF0C;&#x65B9;&#x6848;&#x4E0D;&#x5E94;&#x88AB;&#x5B9A;&#x4E49;&#x6210;&#x5B8C;&#x5168;&#x6392;&#x65A5;&#x7ED3;&#x6784;&#x5316;&#x4FE1;&#x606F;&#x7684;&#x201C;&#x7EAF;&#x89C6;&#x89C9;&#x201D;&#x3002;&#x66F4;&#x51C6;&#x786E;&#x7684;&#x8868;&#x8FF0;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x4EE5;&#x771F;&#x5B9E; Native &#x89C6;&#x89C9;&#x4E3A;&#x4E3B;&#x8981;&#x5224;&#x65AD;&#x4F9D;&#x636E;&#xFF0C;&#x4EE5;&#x4E1A;&#x52A1;&#x573A;&#x666F;&#x3001;Props&#x3001;&#x8FD0;&#x884C;&#x72B6;&#x6001;&#x548C;&#x6E90;&#x7801;&#x4F4D;&#x7F6E;&#x4F5C;&#x4E3A;&#x68C0;&#x7D22;&#x7EA6;&#x675F;&#xFF0C;&#x5E76;&#x7528;&#x7ED3;&#x6784;&#x5316;&#x6620;&#x5C04;&#x7ED3;&#x679C;&#x9A71;&#x52A8;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3002;</p>
</blockquote>
<p>&#x4F18;&#x5316;&#x540E;&#x7684;&#x6838;&#x5FC3;&#x6D41;&#x7A0B;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5DF2;&#x6709; RN Components
  &#x2192; &#x53EF;&#x6267;&#x884C;&#x7684; Visual Material Lab
  &#x2192; &#x9884;&#x751F;&#x6210;&#x7EC4;&#x4EF6;&#x89C6;&#x89C9;&#x6837;&#x672C;&#x4E0E;&#x7D22;&#x5F15;

Figma &#x622A;&#x56FE; + &#x4E1A;&#x52A1;&#x573A;&#x666F;
  &#x2192; MCP &#x68C0;&#x7D22; Top-K &#x5019;&#x9009;
  &#x2192; Codex &#x5B9A;&#x5411;&#x6253;&#x5F00;&#x5019;&#x9009; Fixture
  &#x2192; Native &#x622A;&#x56FE;&#x590D;&#x6838;
  &#x2192; Material Mapping JSON
  &#x2192; RN Page Plan / &#x666E;&#x901A; RN Code
  &#x2192; &#x6574;&#x9875; Native &#x622A;&#x56FE;&#x590D;&#x6838;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6700;&#x91CD;&#x8981;&#x7684;&#x6539;&#x8FDB;&#x662F;&#xFF1A;<strong>&#x4E0D;&#x8BA9;&#x81EA;&#x52A8;&#x5316;&#x5DE5;&#x5177;&#x5728; App &#x4E2D;&#x76F2;&#x76EE;&#x904D;&#x5386;&#x7EC4;&#x4EF6;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x79BB;&#x7EBF;&#x68C0;&#x7D22;&#xFF0C;&#x518D;&#x53EA;&#x8FD0;&#x884C;&#x548C;&#x622A;&#x56FE;&#x5C11;&#x91CF;&#x5019;&#x9009;&#x3002;</strong> App &#x81EA;&#x52A8;&#x5316;&#x8D1F;&#x8D23;&#x9A8C;&#x8BC1;&#xFF0C;&#x4E0D;&#x8D1F;&#x8D23;&#x4F4E;&#x6548;&#x5730;&#x201C;&#x627E;&#x7EC4;&#x4EF6;&#x201D;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6761;&#x8DEF;&#x7EBF;&#x6709;&#x4EF7;&#x503C;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6761;&#x8DEF;&#x7EBF;&#x6709;&#x4EF7;&#x503C;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x6761;&#x8DEF;&#x7EBF;&#x6709;&#x4EF7;&#x503C;</h2>
<h3 id="&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x66F4;&#x9002;&#x5408;&#x6210;&#x4E3A;&#x201C;&#x53EF;&#x6267;&#x884C;&#x77E5;&#x8BC6;&#x201D;"><a href="#&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x66F4;&#x9002;&#x5408;&#x6210;&#x4E3A;&#x201C;&#x53EF;&#x6267;&#x884C;&#x77E5;&#x8BC6;&#x201D;"></a>&#x73B0;&#x6709; RN &#x7EC4;&#x4EF6;&#x66F4;&#x9002;&#x5408;&#x6210;&#x4E3A;&#x201C;&#x53EF;&#x6267;&#x884C;&#x77E5;&#x8BC6;&#x201D;</h3>
<p>&#x5F53;&#x524D; <code>web-affiliate-rn</code> &#x5DF2;&#x7ECF;&#x79EF;&#x7D2F;&#x4E86;&#x5927;&#x91CF;&#x516C;&#x5171;&#x7EC4;&#x4EF6;&#x548C;&#x4E1A;&#x52A1;&#x7EC4;&#x4EF6;&#xFF0C;&#x4E5F;&#x5E7F;&#x6CDB;&#x4F7F;&#x7528;&#x4E86; <code>testID</code>&#x3002;&#x771F;&#x6B63;&#x7F3A;&#x5C11;&#x7684;&#x4E0D;&#x662F;&#x7EC4;&#x4EF6;&#x6E90;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x8BA9;&#x4EBA;&#x548C; Agent &#x90FD;&#x80FD;&#x56DE;&#x7B54;&#x4EE5;&#x4E0B;&#x95EE;&#x9898;&#x7684;&#x5165;&#x53E3;&#xFF1A;</p>
<ul>
<li>&#x8FD9;&#x4E2A;&#x7EC4;&#x4EF6;&#x5B9E;&#x9645;&#x957F;&#x4EC0;&#x4E48;&#x6837;&#xFF1B;</li>
<li>&#x5B83;&#x5C5E;&#x4E8E;&#x54EA;&#x4E2A;&#x4E1A;&#x52A1;&#x57DF;&#x548C; UI &#x7C7B;&#x578B;&#xFF1B;</li>
<li>&#x6709;&#x54EA;&#x4E9B;&#x53EF;&#x590D;&#x73B0;&#x7684;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x600E;&#x6837;&#x4EE5;&#x786E;&#x5B9A;&#x7684; Props &#x72EC;&#x7ACB;&#x8FD0;&#x884C;&#xFF1B;</li>
<li>&#x5B83;&#x662F;&#x5426;&#x9002;&#x5408;&#x5F53;&#x524D; Figma &#x533A;&#x57DF;&#xFF1B;</li>
<li>&#x9009;&#x62E9;&#x5B83;&#x4EE5;&#x540E;&#x5E94;&#x5982;&#x4F55; import &#x548C;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p>&#x4F20;&#x7EDF; Catalog &#x5F80;&#x5F80;&#x4E3B;&#x8981;&#x8BB0;&#x5F55;&#x540D;&#x79F0;&#x3001;&#x63CF;&#x8FF0;&#x548C; Props&#x3002;&#x672C;&#x65B9;&#x6848;&#x518D;&#x5411;&#x524D;&#x4E00;&#x6B65;&#xFF1A;Catalog &#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x6709;&#x6548;&#x7269;&#x6599;&#x90FD;&#x5FC5;&#x987B;&#x5C3D;&#x53EF;&#x80FD;&#x62E5;&#x6709;&#x53EF;&#x8FD0;&#x884C; Fixture &#x548C;&#x771F;&#x5B9E; Native &#x622A;&#x56FE;&#x3002;&#x7269;&#x6599;&#x77E5;&#x8BC6;&#x4E0D;&#x53EA;&#x662F;&#x8BF4;&#x660E;&#x6587;&#x6863;&#xFF0C;&#x800C;&#x662F;&#x53EF;&#x4EE5;&#x88AB; Agent &#x8C03;&#x7528;&#x548C;&#x9A8C;&#x8BC1;&#x7684;&#x7A0B;&#x5E8F;&#x3002;</p>
<h3 id="&#x89C6;&#x89C9;&#x641C;&#x7D22;&#x6BD4;&#x4E1A;&#x52A1;&#x547D;&#x540D;&#x66F4;&#x63A5;&#x8FD1;&#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;"><a href="#&#x89C6;&#x89C9;&#x641C;&#x7D22;&#x6BD4;&#x4E1A;&#x52A1;&#x547D;&#x540D;&#x66F4;&#x63A5;&#x8FD1;&#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;"></a>&#x89C6;&#x89C9;&#x641C;&#x7D22;&#x6BD4;&#x4E1A;&#x52A1;&#x547D;&#x540D;&#x66F4;&#x63A5;&#x8FD1;&#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;</h3>
<p>&#x8BBE;&#x8BA1;&#x7A3F;&#x8868;&#x8FBE;&#x7684;&#x662F;&#x5BB9;&#x5668;&#x3001;&#x5C42;&#x7EA7;&#x3001;&#x6392;&#x7248;&#x3001;&#x989C;&#x8272;&#x3001;&#x56FE;&#x6807;&#x548C;&#x72B6;&#x6001;&#xFF0C;&#x5E76;&#x4E0D;&#x77E5;&#x9053;&#x4ED3;&#x5E93;&#x91CC;&#x628A;&#x76F8;&#x4F3C;&#x7ED3;&#x6784;&#x547D;&#x540D;&#x6210;&#x4E86;&#x4EC0;&#x4E48;&#x3002;&#x4EC5;&#x9760; <code>OfferCard</code>&#x3001;<code>ConversionCard</code> &#x4E4B;&#x7C7B;&#x7684;&#x540D;&#x79F0;&#x68C0;&#x7D22;&#xFF0C;&#x5F88;&#x5BB9;&#x6613;&#x53D7;&#x5386;&#x53F2;&#x547D;&#x540D;&#x548C;&#x4E1A;&#x52A1;&#x8BCD;&#x5F71;&#x54CD;&#x3002;</p>
<p>&#x89C6;&#x89C9;&#x53EC;&#x56DE;&#x53EF;&#x4EE5;&#x5148;&#x627E;&#x5230;&#x5916;&#x89C2;&#x548C;&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x7684;&#x7EC4;&#x4EF6;&#xFF0C;&#x4E1A;&#x52A1;&#x573A;&#x666F;&#x518D;&#x6392;&#x9664;&#x8BED;&#x4E49;&#x4E0D;&#x5408;&#x9002;&#x7684;&#x5019;&#x9009;&#x3002;&#x4E24;&#x79CD;&#x4FE1;&#x53F7;&#x7ED3;&#x5408;&#xFF0C;&#x6BD4;&#x5355;&#x72EC;&#x4F9D;&#x8D56;&#x4EFB;&#x4F55;&#x4E00;&#x79CD;&#x90FD;&#x66F4;&#x7A33;&#xFF1A;</p>
<pre><code class="language-text">&#x89C6;&#x89C9;&#x76F8;&#x4F3C;&#x5EA6;&#xFF1A;&#x89E3;&#x51B3;&#x201C;&#x957F;&#x5F97;&#x50CF;&#x4EC0;&#x4E48;&#x201D;
&#x4E1A;&#x52A1;&#x57DF;&#x4E0E;&#x573A;&#x666F;&#xFF1A;&#x89E3;&#x51B3;&#x201C;&#x8FD9;&#x91CC;&#x5E94;&#x8BE5;&#x662F;&#x4EC0;&#x4E48;&#x201D;
Props &#x4E0E;&#x8FD0;&#x884C;&#x7EA6;&#x675F;&#xFF1A;&#x89E3;&#x51B3;&#x201C;&#x80FD;&#x5426;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#x201D;
&#x6E90;&#x7801;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#xFF1A;&#x89E3;&#x51B3;&#x201C;&#x4ED3;&#x5E93;&#x4E2D;&#x901A;&#x5E38;&#x600E;&#x6837;&#x4F7F;&#x7528;&#x201D;
</code></pre>
<h3 id="&#x5B83;&#x4E0D;&#x662F;&#x53E6;&#x4E00;&#x4E2A;&#x622A;&#x56FE;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x65B9;&#x6848;"><a href="#&#x5B83;&#x4E0D;&#x662F;&#x53E6;&#x4E00;&#x4E2A;&#x622A;&#x56FE;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x65B9;&#x6848;"></a>&#x5B83;&#x4E0D;&#x662F;&#x53E6;&#x4E00;&#x4E2A;&#x622A;&#x56FE;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x65B9;&#x6848;</h3>
<p>&#x622A;&#x56FE;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x5BB9;&#x6613;&#x91CD;&#x65B0;&#x9020;&#x51FA;&#x4ED3;&#x5E93;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#xFF0C;&#x4E5F;&#x5F88;&#x96BE;&#x4FDD;&#x8BC1;&#x8F93;&#x51FA;&#x7B26;&#x5408; ShopeeRN &#x7684;&#x5BFC;&#x822A;&#x3001;&#x6837;&#x5F0F;&#x548C;&#x7EF4;&#x62A4;&#x7EA6;&#x5B9A;&#x3002;</p>
<p>&#x672C;&#x65B9;&#x6848;&#x5148;&#x4ECE;&#x4ED3;&#x5E93;&#x5DF2;&#x6709;&#x7269;&#x6599;&#x4E2D;&#x68C0;&#x7D22;&#x548C;&#x9A8C;&#x8BC1;&#x3002;&#x53EA;&#x6709;&#x786E;&#x8BA4;&#x6CA1;&#x6709;&#x5408;&#x9002;&#x7269;&#x6599;&#x65F6;&#xFF0C;&#x624D;&#x8FDB;&#x5165;&#x57FA;&#x7840;&#x7EC4;&#x4EF6;&#x7EC4;&#x5408;&#x3001;&#x9875;&#x9762;&#x5C40;&#x90E8;&#x5B9E;&#x73B0;&#x6216;&#x65B0;&#x7269;&#x6599;&#x5019;&#x9009;&#x3002;&#x56E0;&#x6B64;&#x5B83;&#x66F4;&#x63A5;&#x8FD1;&#x201C;&#x4EE5;&#x89C6;&#x89C9;&#x8BC1;&#x636E;&#x9A71;&#x52A8;&#x590D;&#x7528;&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x201C;&#x770B;&#x56FE;&#x81EA;&#x7531;&#x53D1;&#x6325;&#x201D;&#x3002;</p>
<h2 id="Visual Material Lab &#x5E94;&#x8BE5;&#x662F;&#x4EC0;&#x4E48;"><a href="#Visual Material Lab &#x5E94;&#x8BE5;&#x662F;&#x4EC0;&#x4E48;"></a>Visual Material Lab &#x5E94;&#x8BE5;&#x662F;&#x4EC0;&#x4E48;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x76F4;&#x63A5;&#x5F15;&#x7528;&#x7EC4;&#x4EF6;&#xFF0C;&#x5C01;&#x88C5;&#x5173;&#x952E;&#x4FE1;&#x606F;"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x76F4;&#x63A5;&#x5F15;&#x7528;&#x7EC4;&#x4EF6;&#xFF0C;&#x5C01;&#x88C5;&#x5173;&#x952E;&#x4FE1;&#x606F;"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x76F4;&#x63A5;&#x5F15;&#x7528;&#x7EC4;&#x4EF6;&#xFF0C;&#x5C01;&#x88C5;&#x5173;&#x952E;&#x4FE1;&#x606F;</h3>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x642C;&#x8FD0;&#x3001;&#x4E0D;&#x590D;&#x5236;&#xFF0C;&#x4E5F;&#x4E0D;&#x6539;&#x9020;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x3002;Material Lab &#x76F4;&#x63A5; import &#x539F;&#x7EC4;&#x4EF6;&#xFF0C;&#x53EA;&#x5728;&#x65C1;&#x8DEF;&#x5C01;&#x88C5; Codex &#x68C0;&#x7D22;&#x3001;&#x8FD0;&#x884C;&#x548C;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x9700;&#x8981;&#x7684;&#x5173;&#x952E;&#x4FE1;&#x606F;&#x3002;</p>
<p>&#x5EFA;&#x8BAE;&#x5728; RN &#x4ED3;&#x5E93;&#x5EFA;&#x7ACB;&#x5F00;&#x53D1;&#x6001; <code>material-lab</code>&#xFF1A;</p>
<pre><code class="language-text">src/material-lab/
  registry/       # materialId&#x3001;&#x4E1A;&#x52A1;&#x57DF;&#x3001;UI &#x5F62;&#x6001;&#x3001;&#x6E90;&#x7801;&#x548C; import &#x7B49;&#x5173;&#x952E;&#x4FE1;&#x606F;
  fixtures/       # &#x786E;&#x5B9A; Props&#x3001;Mock &#x6570;&#x636E;&#x548C;&#x89C6;&#x89C9;&#x72B6;&#x6001;
  screens/        # Material Lab &#x6D4F;&#x89C8;&#x4E0E;&#x5355;&#x7269;&#x6599;&#x6E32;&#x67D3;&#x5165;&#x53E3;
  adapters/       # &#x53EF;&#x9009;&#xFF1A;&#x53EA;&#x9694;&#x79BB;&#x5C11;&#x91CF;&#x65E0;&#x6CD5;&#x7ED5;&#x5F00;&#x7684;&#x5916;&#x90E8;&#x4F9D;&#x8D56;
</code></pre>
<p>Registry &#x9996;&#x671F;&#x53EA;&#x9700;&#x8BB0;&#x5F55;&#xFF1A;</p>
<ul>
<li>&#x7A33;&#x5B9A;&#x7684; <code>materialId</code>&#xFF1B;</li>
<li>domain &#x548C; UI &#x5F62;&#x6001;&#xFF1B;</li>
<li>&#x539F;&#x7EC4;&#x4EF6;&#x6E90;&#x7801;&#x4F4D;&#x7F6E;&#x4E0E;&#x6B63;&#x786E; import&#xFF1B;</li>
<li>&#x53EF;&#x7528;&#x4E8E;&#x68C0;&#x7D22;&#x7684;&#x7B80;&#x77ED;&#x573A;&#x666F;&#x3001;&#x9650;&#x5236;&#x548C;&#x5173;&#x952E;&#x8BCD;&#xFF1B;</li>
<li>&#x5408;&#x6CD5; Props &#x6216; Props &#x7C7B;&#x578B;&#x6765;&#x6E90;&#xFF1B;</li>
<li>&#x53EF;&#x8FD0;&#x884C;&#x7684; <code>fixtureId</code>&#x3001;variant &#x548C;&#x7A33;&#x5B9A; <code>testID</code>&#xFF1B;</li>
<li>&#x5BF9;&#x5E94;&#x7684; Native &#x9884;&#x89C8;&#x622A;&#x56FE;&#x3002;</li>
</ul>
<p>&#x80FD;&#x76F4;&#x63A5;&#x901A;&#x8FC7; Props &#x6E32;&#x67D3;&#x7684;&#x7EC4;&#x4EF6;&#x4E0D;&#x589E;&#x52A0; Wrapper&#x3002;&#x53EA;&#x6709;&#x7EC4;&#x4EF6;&#x4F9D;&#x8D56;&#x5C11;&#x91CF; Redux&#x3001;Navigator &#x6216; Host Context&#xFF0C;&#x4E14;&#x9694;&#x79BB;&#x6210;&#x672C;&#x5F88;&#x4F4E;&#x65F6;&#x624D;&#x589E;&#x52A0;&#x8584; Adapter&#xFF1B;&#x4F9D;&#x8D56;&#x590D;&#x6742; API&#x3001;&#x4E1A;&#x52A1;&#x72B6;&#x6001;&#x6216; Native SDK &#x7684;&#x7EC4;&#x4EF6;&#x6682;&#x4E0D;&#x7EB3;&#x5165;&#x9996;&#x6279;&#x7269;&#x6599;&#x3002;&#x8FD9;&#x6837;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x5EFA;&#x8BBE;&#x7684;&#x662F;&#x539F;&#x7EC4;&#x4EF6;&#x7684;&#x201C;&#x53EF;&#x6267;&#x884C;&#x7D22;&#x5F15;&#x201D;&#xFF0C;&#x4E0D;&#x662F;&#x65B0;&#x7684;&#x7EC4;&#x4EF6;&#x62BD;&#x8C61;&#x5C42;&#x3002;</p>
<h3 id="&#x4E1A;&#x52A1;&#x57DF;&#x4E0E; UI &#x5F62;&#x6001;&#x540C;&#x65F6;&#x5206;&#x7C7B;"><a href="#&#x4E1A;&#x52A1;&#x57DF;&#x4E0E; UI &#x5F62;&#x6001;&#x540C;&#x65F6;&#x5206;&#x7C7B;"></a>&#x4E1A;&#x52A1;&#x57DF;&#x4E0E; UI &#x5F62;&#x6001;&#x540C;&#x65F6;&#x5206;&#x7C7B;</h3>
<p>&#x53EF;&#x4EE5;&#x6CBF;&#x7528;&#x5F53;&#x524D;&#x4E1A;&#x52A1;&#x8BA4;&#x77E5;&#x5EFA;&#x7ACB; <code>shared</code>&#x3001;<code>offer</code>&#x3001;<code>payment</code>&#x3001;<code>income</code>&#x3001;<code>free-sample</code>&#x3001;<code>partnership</code>&#x3001;<code>storefront</code>&#x3001;<code>collection</code>&#x3001;<code>performance</code> &#x7B49;&#x4E1A;&#x52A1;&#x57DF;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x53EA;&#x6309;&#x4E1A;&#x52A1;&#x57DF;&#x5206;&#x7C7B;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x7269;&#x6599;&#x8FD8;&#x5E94;&#x6807;&#x8BB0;&#x5176; UI &#x5F62;&#x6001;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>navigation&#xFF1B;</li>
<li>form&#xFF1B;</li>
<li>filter&#xFF1B;</li>
<li>card&#xFF1B;</li>
<li>list-item&#xFF1B;</li>
<li>status&#xFF1B;</li>
<li>action&#xFF1B;</li>
<li>data-display&#x3002;</li>
</ul>
<p>&#x4E1A;&#x52A1;&#x57DF;&#x5E2E;&#x52A9; Codex &#x7F29;&#x5C0F;&#x641C;&#x7D22;&#x8303;&#x56F4;&#xFF0C;UI &#x5F62;&#x6001;&#x5E2E;&#x52A9;&#x53D1;&#x73B0;&#x8DE8;&#x4E1A;&#x52A1;&#x57DF;&#x7684;&#x53EF;&#x590D;&#x7528;&#x7ED3;&#x6784;&#x3002;&#x5426;&#x5219;&#x76F8;&#x540C;&#x7684;&#x5C55;&#x793A;&#x5361;&#x7247;&#x5F88;&#x5BB9;&#x6613;&#x5728;&#x4E0D;&#x540C;&#x4E1A;&#x52A1;&#x76EE;&#x5F55;&#x4E2D;&#x88AB;&#x91CD;&#x590D;&#x5EFA;&#x8BBE;&#x3002;</p>
<h3 id="&#x754C;&#x9762;&#x6807;&#x8BC6;&#x53EA;&#x51FA;&#x73B0;&#x5728;&#x6D4F;&#x89C8;&#x6A21;&#x5F0F;"><a href="#&#x754C;&#x9762;&#x6807;&#x8BC6;&#x53EA;&#x51FA;&#x73B0;&#x5728;&#x6D4F;&#x89C8;&#x6A21;&#x5F0F;"></a>&#x754C;&#x9762;&#x6807;&#x8BC6;&#x53EA;&#x51FA;&#x73B0;&#x5728;&#x6D4F;&#x89C8;&#x6A21;&#x5F0F;</h3>
<p>Material Lab &#x754C;&#x9762;&#x53EF;&#x4EE5;&#x4E3A;&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6;&#x663E;&#x793A;&#xFF1A;</p>
<ul>
<li>&#x4E1A;&#x52A1;&#x57DF;&#x989C;&#x8272;&#x548C;&#x6807;&#x7B7E;&#xFF1B;</li>
<li><code>materialId</code>&#xFF1B;</li>
<li>&#x7EC4;&#x4EF6;&#x6765;&#x6E90;&#xFF1B;</li>
<li>&#x5F53;&#x524D; variant &#x548C; state&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x4E3A; Adapter&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x5141;&#x8BB8;&#x8FDB;&#x5165;&#x9875;&#x9762;&#x751F;&#x6210;&#x3002;</li>
</ul>
<p>&#x5355;&#x7269;&#x6599;&#x6839;&#x8282;&#x70B9;&#x4F7F;&#x7528;&#x7A33;&#x5B9A;&#x6807;&#x8BC6;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">material:offer:offer-card:default
material:payment:settlement-card:error
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x6807;&#x8BC6;&#x4FBF;&#x4E8E;&#x81EA;&#x52A8;&#x5316;&#x5DE5;&#x5177;&#x5B9A;&#x5411;&#x67E5;&#x627E;&#x3002;&#x8FDB;&#x5165; Capture Mode &#x540E;&#xFF0C;&#x4E1A;&#x52A1;&#x6807;&#x7B7E;&#x3001;&#x8FB9;&#x6846;&#x548C;&#x8C03;&#x8BD5;&#x4FE1;&#x606F;&#x5168;&#x90E8;&#x9690;&#x85CF;&#xFF0C;&#x4FDD;&#x8BC1;&#x622A;&#x56FE;&#x53CD;&#x6620;&#x7EC4;&#x4EF6;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x4E0D;&#x662F; Lab &#x5916;&#x58F3;&#x3002;</p>
<h3 id="&#x4E0D;&#x662F;&#x6240;&#x6709; Component &#x90FD;&#x5E94;&#x8BE5;&#x6620;&#x5C04;"><a href="#&#x4E0D;&#x662F;&#x6240;&#x6709; Component &#x90FD;&#x5E94;&#x8BE5;&#x6620;&#x5C04;"></a>&#x4E0D;&#x662F;&#x6240;&#x6709; Component &#x90FD;&#x5E94;&#x8BE5;&#x6620;&#x5C04;</h3>
<p>&#x9996;&#x6279;&#x7269;&#x6599;&#x81F3;&#x5C11;&#x5E94;&#x6EE1;&#x8DB3;&#xFF1A;</p>
<ul>
<li>&#x80FD;&#x901A;&#x8FC7;&#x786E;&#x5B9A;&#x7684; Fixture &#x72EC;&#x7ACB;&#x6E32;&#x67D3;&#xFF1B;</li>
<li>&#x5C55;&#x793A; Props &#x76F8;&#x5BF9;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x4E0D;&#x4F9D;&#x8D56;&#x5B9E;&#x65F6; API &#x548C;&#x4E0D;&#x53EF;&#x63A7;&#x72B6;&#x6001;&#xFF1B;</li>
<li>Redux&#x3001;Navigator&#x3001;Tracking &#x7B49;&#x4F9D;&#x8D56;&#x53EF;&#x4EE5;&#x79FB;&#x9664;&#x6216;&#x8584;&#x9002;&#x914D;&#xFF1B;</li>
<li>&#x540C;&#x4E00;&#x8F93;&#x5165;&#x80FD;&#x591F;&#x5F97;&#x5230;&#x7A33;&#x5B9A;&#x622A;&#x56FE;&#xFF1B;</li>
<li>&#x6709;&#x660E;&#x786E;&#x7684; import &#x548C;&#x4F7F;&#x7528;&#x8FB9;&#x754C;&#x3002;</li>
</ul>
<p>&#x5F3A;&#x4E1A;&#x52A1;&#x6D41;&#x7A0B;&#x7EC4;&#x4EF6;&#x3001;&#x6574;&#x9875; Container&#x3001;&#x4F9D;&#x8D56;&#x590D;&#x6742; Native SDK &#x7684;&#x7EC4;&#x4EF6;&#x4E0D;&#x5B9C;&#x4E3A;&#x4E86;&#x201C;&#x5168;&#x91CF;&#x8986;&#x76D6;&#x201D;&#x5F3A;&#x884C;&#x7EB3;&#x5165;&#x3002;Visual Material Lab &#x7684;&#x8D28;&#x91CF;&#x6BD4;&#x7EC4;&#x4EF6;&#x6570;&#x91CF;&#x66F4;&#x91CD;&#x8981;&#x3002;</p>
<h2 id="Codex &#x5982;&#x4F55;&#x4ECE;&#x622A;&#x56FE;&#x627E;&#x5230;&#x7EC4;&#x4EF6;"><a href="#Codex &#x5982;&#x4F55;&#x4ECE;&#x622A;&#x56FE;&#x627E;&#x5230;&#x7EC4;&#x4EF6;"></a>Codex &#x5982;&#x4F55;&#x4ECE;&#x622A;&#x56FE;&#x627E;&#x5230;&#x7EC4;&#x4EF6;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x63D0;&#x524D;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x7269;&#x6599;&#x7D22;&#x5F15;"><a href="#&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x63D0;&#x524D;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x7269;&#x6599;&#x7D22;&#x5F15;"></a>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x63D0;&#x524D;&#x751F;&#x6210;&#x89C6;&#x89C9;&#x7269;&#x6599;&#x7D22;&#x5F15;</h3>
<p>&#x7CFB;&#x7EDF;&#x5148;&#x6279;&#x91CF;&#x8FD0;&#x884C;&#x6BCF;&#x4E2A; Fixture&#xFF0C;&#x4FDD;&#x5B58;&#x56FA;&#x5B9A;&#x8BBE;&#x5907;&#x3001;&#x5E73;&#x53F0;&#x3001;&#x8BED;&#x8A00;&#x548C;&#x6570;&#x636E;&#x72B6;&#x6001;&#x4E0B;&#x7684; Native &#x622A;&#x56FE;&#xFF0C;&#x5E76;&#x5EFA;&#x7ACB;&#x7D22;&#x5F15;&#xFF1A;</p>
<ul>
<li>&#x89C6;&#x89C9;&#x7279;&#x5F81;&#xFF1A;&#x989C;&#x8272;&#x3001;&#x8F6E;&#x5ED3;&#x3001;&#x5E03;&#x5C40;&#x3001;&#x89C6;&#x89C9; embedding&#xFF1B;</li>
<li>&#x6587;&#x672C;&#x7279;&#x5F81;&#xFF1A;&#x6807;&#x9898;&#x7C7B;&#x578B;&#x3001;&#x6807;&#x7B7E;&#x7ED3;&#x6784;&#x548C; OCR &#x7ED3;&#x679C;&#xFF1B;</li>
<li>&#x7ED3;&#x6784;&#x7279;&#x5F81;&#xFF1A;&#x5355;&#x9879;&#x3001;&#x5217;&#x8868;&#x3001;&#x5361;&#x7247;&#x3001;&#x8868;&#x5355;&#x3001;&#x64CD;&#x4F5C;&#x533A;&#x7B49;&#xFF1B;</li>
<li>&#x4E1A;&#x52A1;&#x7279;&#x5F81;&#xFF1A;domain&#x3001;scene&#x3001;platform &#x548C;&#x5141;&#x8BB8;&#x72B6;&#x6001;&#xFF1B;</li>
<li>&#x5DE5;&#x7A0B;&#x7279;&#x5F81;&#xFF1A;&#x7EC4;&#x4EF6;&#x8DEF;&#x5F84;&#x3001;import&#x3001;Props&#x3001;&#x5DF2;&#x6709;&#x9875;&#x9762;&#x4F7F;&#x7528;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E00;&#x6B65;&#x53EF;&#x4EE5;&#x79BB;&#x7EBF;&#x5B8C;&#x6210;&#x3002;&#x65E5;&#x5E38;&#x68C0;&#x7D22;&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x6B21;&#x542F;&#x52A8; App &#x5E76;&#x9010;&#x4E2A;&#x6253;&#x5F00;&#x7EC4;&#x4EF6;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x5C06; Figma &#x622A;&#x56FE;&#x62C6;&#x6210;&#x5F85;&#x5339;&#x914D;&#x533A;&#x57DF;"><a href="#&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x5C06; Figma &#x622A;&#x56FE;&#x62C6;&#x6210;&#x5F85;&#x5339;&#x914D;&#x533A;&#x57DF;"></a>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x5C06; Figma &#x622A;&#x56FE;&#x62C6;&#x6210;&#x5F85;&#x5339;&#x914D;&#x533A;&#x57DF;</h3>
<p>&#x7528;&#x6237;&#x63D0;&#x4F9B;&#x5B8C;&#x6574; Figma &#x622A;&#x56FE;&#x548C;&#x4E1A;&#x52A1;&#x573A;&#x666F;&#x540E;&#xFF0C;Codex &#x5148;&#x8BC6;&#x522B;&#x9875;&#x9762;&#x4E2D;&#x7684;&#x7A33;&#x5B9A;&#x89C6;&#x89C9;&#x533A;&#x5757;&#xFF0C;&#x4F8B;&#x5982;&#x5BFC;&#x822A;&#x3001;&#x7B5B;&#x9009;&#x3001;&#x5185;&#x5BB9;&#x5361;&#x7247;&#x3001;&#x7A7A;&#x72B6;&#x6001;&#x548C;&#x5E95;&#x90E8;&#x64CD;&#x4F5C;&#x533A;&#x3002;</p>
<p>&#x9996;&#x671F;&#x4E0D;&#x9700;&#x8981;&#x8FFD;&#x6C42;&#x5B8C;&#x5168;&#x81EA;&#x52A8;&#x5206;&#x533A;&#x3002;Codex &#x81EA;&#x52A8;&#x5EFA;&#x8BAE;&#x533A;&#x57DF;&#xFF0C;&#x4EBA;&#x53EF;&#x4EE5;&#x8C03;&#x6574;&#x5173;&#x952E;&#x88C1;&#x526A;&#x3002;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x7684;&#x533A;&#x57DF;&#x8FB9;&#x754C;&#x4F1A;&#x8BA9;&#x540E;&#x7EED;&#x68C0;&#x7D22;&#x548C;&#x6BD4;&#x8F83;&#x90FD;&#x5931;&#x53BB;&#x610F;&#x4E49;&#xFF0C;&#x56E0;&#x6B64;&#x8FD9;&#x91CC;&#x5141;&#x8BB8;&#x8F7B;&#x91CF;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;MCP &#x8FD4;&#x56DE; Top-K &#x5019;&#x9009;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x5BA3;&#x5E03;&#x7B54;&#x6848;"><a href="#&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;MCP &#x8FD4;&#x56DE; Top-K &#x5019;&#x9009;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x5BA3;&#x5E03;&#x7B54;&#x6848;"></a>&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;MCP &#x8FD4;&#x56DE; Top-K &#x5019;&#x9009;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x5BA3;&#x5E03;&#x7B54;&#x6848;</h3>
<p>&#x68C0;&#x7D22;&#x670D;&#x52A1;&#x7EFC;&#x5408;&#x89C6;&#x89C9;&#x3001;&#x4E1A;&#x52A1;&#x548C;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#xFF0C;&#x4E3A;&#x6BCF;&#x4E2A;&#x533A;&#x57DF;&#x8FD4;&#x56DE;&#x5C11;&#x91CF;&#x5019;&#x9009;&#xFF1A;</p>
<pre><code class="language-text">Figma &#x533A;&#x57DF;
  &#x2192; &#x89C6;&#x89C9;&#x5411;&#x91CF;&#x53EC;&#x56DE;
  &#x2192; domain / scene / component type &#x8FC7;&#x6EE4;
  &#x2192; Props&#x3001;&#x5E73;&#x53F0;&#x4E0E;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#x91CD;&#x6392;
  &#x2192; Top-K &#x5019;&#x9009;&#x53CA;&#x7406;&#x7531;
</code></pre>
<p>&#x4E1A;&#x52A1;&#x63CF;&#x8FF0;&#x5728;&#x8FD9;&#x91CC;&#x662F;&#x5148;&#x9A8C;&#x6761;&#x4EF6;&#xFF0C;&#x4E0D;&#x662F;&#x6700;&#x7EC8;&#x4E8B;&#x5B9E;&#x3002;&#x5373;&#x4F7F;&#x7528;&#x6237;&#x8BF4;&#x201C;&#x8FD9;&#x662F; Offer &#x5361;&#x7247;&#x201D;&#xFF0C;&#x7CFB;&#x7EDF;&#x4E5F;&#x4ECD;&#x7136;&#x9700;&#x8981;&#x7528;&#x5B9E;&#x9645;&#x753B;&#x9762;&#x9A8C;&#x8BC1;&#x5230;&#x5E95;&#x662F; <code>OfferCard</code>&#x3001;<code>ProductItemOfferCardRow</code>&#xFF0C;&#x8FD8;&#x662F;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7EC4;&#x5408;&#x7ED3;&#x6784;&#x3002;</p>
<h3 id="&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x5B9A;&#x5411;&#x8FD0;&#x884C;&#x5019;&#x9009;&#x5E76;&#x91CD;&#x65B0;&#x622A;&#x56FE;"><a href="#&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x5B9A;&#x5411;&#x8FD0;&#x884C;&#x5019;&#x9009;&#x5E76;&#x91CD;&#x65B0;&#x622A;&#x56FE;"></a>&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x5B9A;&#x5411;&#x8FD0;&#x884C;&#x5019;&#x9009;&#x5E76;&#x91CD;&#x65B0;&#x622A;&#x56FE;</h3>
<p>Codex &#x6839;&#x636E;&#x5019;&#x9009;&#x7684; <code>fixtureId</code> &#x76F4;&#x63A5;&#x6253;&#x5F00;&#x5355;&#x7269;&#x6599;&#x5165;&#x53E3;&#xFF0C;&#x4F8B;&#x5982;&#x901A;&#x8FC7;&#x5F00;&#x53D1;&#x6001; Deep Link&#x3001;Lab Route &#x6216; Storybook &#x7684;&#x8FDC;&#x7A0B;&#x9009;&#x4E2D;&#x80FD;&#x529B;&#x8DF3;&#x8F6C;&#x5230;&#x6307;&#x5B9A;&#x72B6;&#x6001;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6A21;&#x62DF;&#x4EBA;&#x5DE5;&#x4ECE;&#x9996;&#x9875;&#x5C42;&#x5C42;&#x70B9;&#x51FB;&#x3002;</p>
<p>&#x6253;&#x5F00;&#x540E;&#x4F7F;&#x7528;&#x56FA;&#x5B9A;&#x8BBE;&#x5907;&#x91CD;&#x65B0;&#x622A;&#x56FE;&#xFF0C;&#x518D;&#x4E0E; Figma &#x533A;&#x57DF;&#x6BD4;&#x8F83;&#x3002;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x9A8C;&#x8BC1;&#x79BB;&#x7EBF;&#x6837;&#x672C;&#x662F;&#x5426;&#x8FC7;&#x671F;&#xFF0C;&#x4E5F;&#x80FD;&#x53D1;&#x73B0;&#x5B57;&#x4F53;&#x3001;&#x56FE;&#x7247;&#x3001;Safe Area &#x548C;&#x5E73;&#x53F0;&#x5B9E;&#x73B0;&#x9020;&#x6210;&#x7684;&#x771F;&#x5B9E;&#x5DEE;&#x5F02;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x751F;&#x6210;&#x53EF;&#x5BA1;&#x8BA1;&#x7684;&#x6620;&#x5C04;"><a href="#&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x751F;&#x6210;&#x53EF;&#x5BA1;&#x8BA1;&#x7684;&#x6620;&#x5C04;"></a>&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x751F;&#x6210;&#x53EF;&#x5BA1;&#x8BA1;&#x7684;&#x6620;&#x5C04;</h3>
<p>&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#x4E0D;&#x662F;&#x4E00;&#x53E5;&#x201C;&#x770B;&#x8D77;&#x6765;&#x50CF;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4EFD;&#x53EF;&#x4EE5;&#x7EE7;&#x7EED;&#x9A71;&#x52A8; Page Plan &#x548C;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x7684;&#x6620;&#x5C04;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;regionId&quot;</span>: <span class="hljs-string">&quot;offer-list/item-1&quot;</span>,
  <span class="hljs-attr">&quot;targetImage&quot;</span>: <span class="hljs-string">&quot;figma://frame-123/crop-4&quot;</span>,
  <span class="hljs-attr">&quot;materialId&quot;</span>: <span class="hljs-string">&quot;offer.offer-card&quot;</span>,
  <span class="hljs-attr">&quot;source&quot;</span>: <span class="hljs-string">&quot;src/components/OfferCard&quot;</span>,
  <span class="hljs-attr">&quot;import&quot;</span>: <span class="hljs-string">&quot;@/components/OfferCard&quot;</span>,
  <span class="hljs-attr">&quot;fixtureId&quot;</span>: <span class="hljs-string">&quot;offer.offer-card/default&quot;</span>,
  <span class="hljs-attr">&quot;variant&quot;</span>: <span class="hljs-string">&quot;default&quot;</span>,
  <span class="hljs-attr">&quot;props&quot;</span>: {
    <span class="hljs-attr">&quot;showCommission&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;showAction&quot;</span>: <span class="hljs-literal">true</span>
  },
  <span class="hljs-attr">&quot;evidence&quot;</span>: {
    <span class="hljs-attr">&quot;visualScore&quot;</span>: <span class="hljs-number">0.89</span>,
    <span class="hljs-attr">&quot;domainMatched&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;nativeVerified&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;preview&quot;</span>: <span class="hljs-string">&quot;artifact://material/offer.offer-card/default.png&quot;</span>,
    <span class="hljs-attr">&quot;diff&quot;</span>: <span class="hljs-string">&quot;artifact://comparison/offer-list-item-1.png&quot;</span>
  },
  <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-string">&quot;accepted&quot;</span>,
  <span class="hljs-attr">&quot;alternatives&quot;</span>: [<span class="hljs-string">&quot;offer.product-item-offer-card-row&quot;</span>]
}
</code></pre>
<p>&#x5176;&#x4E2D; <code>props</code> &#x5FC5;&#x987B;&#x6765;&#x81EA;&#x7269;&#x6599;&#x5B9A;&#x4E49;&#xFF0C;&#x4E0D;&#x5141;&#x8BB8; Codex &#x6839;&#x636E;&#x622A;&#x56FE;&#x7F16;&#x9020;&#x4E0D;&#x5B58;&#x5728;&#x7684; API&#x3002;&#x4F4E;&#x7F6E;&#x4FE1;&#x5EA6;&#x533A;&#x57DF;&#x5E94;&#x4FDD;&#x7559;&#x5019;&#x9009;&#x548C;&#x672A;&#x89E3;&#x51B3;&#x539F;&#x56E0;&#xFF0C;&#x4EA4;&#x7ED9;&#x4EBA;&#x5DE5; Review &#x6216;&#x7269;&#x6599;&#x8865;&#x6F0F;&#x6D41;&#x7A0B;&#x3002;</p>
<h2 id="MCP &#x5E94;&#x600E;&#x6837;&#x8BBE;&#x8BA1;"><a href="#MCP &#x5E94;&#x600E;&#x6837;&#x8BBE;&#x8BA1;"></a>MCP &#x5E94;&#x600E;&#x6837;&#x8BBE;&#x8BA1;</h2>
<p>MCP &#x662F; Codex &#x4F7F;&#x7528;&#x8FD9;&#x5957;&#x80FD;&#x529B;&#x7684;&#x63A5;&#x53E3;&#xFF0C;&#x4E0D;&#x5E94;&#x8BE5;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x540C;&#x65F6;&#x627F;&#x62C5;&#x8BC6;&#x56FE;&#x3001;&#x8FD0;&#x884C; App&#x3001;&#x6BD4;&#x8F83;&#x622A;&#x56FE;&#x548C;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x7684;&#x5DE8;&#x5927;&#x9ED1;&#x76D2;&#x3002;</p>
<p>&#x5EFA;&#x8BAE;&#x5148;&#x63D0;&#x4F9B;&#x4E94;&#x4E2A;&#x53EF;&#x7EC4;&#x5408;&#x5DE5;&#x5177;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x5DE5;&#x5177;</th>
<th>&#x804C;&#x8D23;</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>search_materials</code></td>
<td>&#x6839;&#x636E;&#x622A;&#x56FE;&#x5F15;&#x7528;&#x3001;&#x4E1A;&#x52A1;&#x57DF;&#x3001;&#x573A;&#x666F;&#x3001;UI &#x7C7B;&#x578B;&#x548C;&#x5E73;&#x53F0;&#x8FD4;&#x56DE; Top-K &#x5019;&#x9009;&#x3002;</td>
</tr>
<tr>
<td><code>get_material</code></td>
<td>&#x8FD4;&#x56DE;&#x7EC4;&#x4EF6;&#x8DEF;&#x5F84;&#x3001;&#x5408;&#x6CD5; Props&#x3001;Fixtures&#x3001;&#x4F7F;&#x7528;&#x9650;&#x5236;&#x548C;&#x5DF2;&#x6709;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#x3002;</td>
</tr>
<tr>
<td><code>open_material_fixture</code></td>
<td>&#x8BA9;&#x6D4B;&#x8BD5; App &#x5B9A;&#x5411;&#x6253;&#x5F00;&#x4E00;&#x4E2A;&#x786E;&#x5B9A;&#x7684;&#x7269;&#x6599;&#x72B6;&#x6001;&#x3002;</td>
</tr>
<tr>
<td><code>capture_material</code></td>
<td>&#x5728;&#x56FA;&#x5B9A;&#x8BBE;&#x5907;&#x914D;&#x7F6E;&#x4E0B;&#x622A;&#x56FE;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x622A;&#x56FE; artifact&#x3002;</td>
</tr>
<tr>
<td><code>compare_visual</code></td>
<td>&#x6BD4;&#x8F83;&#x76EE;&#x6807;&#x533A;&#x57DF;&#x548C; Native &#x622A;&#x56FE;&#xFF0C;&#x8FD4;&#x56DE;&#x5DEE;&#x5F02;&#x56FE;&#x3001;&#x7ED3;&#x6784;&#x5DEE;&#x5F02;&#x548C;&#x5EFA;&#x8BAE;&#x5206;&#x7C7B;&#x3002;</td>
</tr>
</tbody>
</table>
<p>Codex &#x8D1F;&#x8D23;&#x4E32;&#x8054;&#x8FD9;&#x4E9B;&#x5DE5;&#x5177;&#x3001;&#x5904;&#x7406;&#x5019;&#x9009;&#x548C;&#x5F62;&#x6210;&#x6700;&#x7EC8;&#x5224;&#x65AD;&#x3002;&#x540E;&#x7AEF;&#x68C0;&#x7D22;&#x5B9E;&#x73B0;&#x53EF;&#x4EE5;&#x8FED;&#x4EE3;&#xFF0C;MCP &#x5951;&#x7EA6;&#x4FDD;&#x6301;&#x7A33;&#x5B9A;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x8BA9;&#x95EE;&#x9898;&#x66F4;&#x5BB9;&#x6613;&#x6392;&#x67E5;&#xFF1A;&#x641C;&#x4E0D;&#x5230;&#x662F;&#x7D22;&#x5F15;&#x6216;&#x68C0;&#x7D22;&#x95EE;&#x9898;&#xFF0C;&#x6253;&#x4E0D;&#x5F00;&#x662F; Fixture &#x95EE;&#x9898;&#xFF0C;&#x622A;&#x56FE;&#x4E0D;&#x7A33;&#x5B9A;&#x662F;&#x73AF;&#x5883;&#x95EE;&#x9898;&#xFF0C;&#x957F;&#x5F97;&#x4E0D;&#x5BF9;&#x662F;&#x6620;&#x5C04;&#x6216;&#x7269;&#x6599;&#x95EE;&#x9898;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x5931;&#x8D25;&#x90FD;&#x85CF;&#x5728;&#x4E00;&#x4E2A; Agent &#x8C03;&#x7528;&#x91CC;&#x3002;</p>
<h2 id="Native &#x81EA;&#x52A8;&#x5316;&#x5982;&#x4F55;&#x9009;&#x62E9;"><a href="#Native &#x81EA;&#x52A8;&#x5316;&#x5982;&#x4F55;&#x9009;&#x62E9;"></a>Native &#x81EA;&#x52A8;&#x5316;&#x5982;&#x4F55;&#x9009;&#x62E9;</h2>
<h3 id="&#x9996;&#x9009;&#x8DEF;&#x5F84;&#xFF1A;&#x76F4;&#x63A5;&#x5165;&#x53E3; + &#x8F7B;&#x91CF;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;"><a href="#&#x9996;&#x9009;&#x8DEF;&#x5F84;&#xFF1A;&#x76F4;&#x63A5;&#x5165;&#x53E3; + &#x8F7B;&#x91CF;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;"></a>&#x9996;&#x9009;&#x8DEF;&#x5F84;&#xFF1A;&#x76F4;&#x63A5;&#x5165;&#x53E3; + &#x8F7B;&#x91CF;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;</h3>
<p>&#x9996;&#x671F;&#x63A8;&#x8350;&#x4E3A; Material Lab &#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x5F00;&#x53D1;&#x6001;&#x5355;&#x7269;&#x6599; Route &#x6216; Deep Link&#xFF0C;&#x518D;&#x4F7F;&#x7528; Maestro &#x542F;&#x52A8; App&#x3001;&#x6253;&#x5F00;&#x94FE;&#x63A5;&#x548C;&#x622A;&#x56FE;&#x3002;Maestro &#x5DF2;&#x63D0;&#x4F9B; <a href="https://docs.maestro.dev/reference/commands-available/launchapp"><code>launchApp</code></a>&#x3001;<a href="https://docs.maestro.dev/api-reference/commands/openlink"><code>openLink</code></a>&#x3001;<a href="https://docs.maestro.dev/reference/commands-available/takescreenshot"><code>takeScreenshot</code></a> &#x548C;&#x622A;&#x56FE;&#x65AD;&#x8A00;&#x80FD;&#x529B;&#xFF0C;&#x9002;&#x5408;&#x642D;&#x5EFA;&#x8FD9;&#x4E00;&#x6761;&#x77ED;&#x94FE;&#x8DEF;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5F53;&#x524D;&#x8001; RN &#x5DE5;&#x7A0B;&#x80FD;&#x4EE5;&#x53EF;&#x63A7;&#x6210;&#x672C;&#x63A5;&#x5165; React Native Storybook&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x9694;&#x79BB;&#x6E32;&#x67D3; Fixture&#x3002;React Native Storybook &#x8FD0;&#x884C;&#x5728; Native/Metro &#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6D4F;&#x89C8;&#x5668; iframe&#xFF1B;&#x5B83;&#x8FD8;&#x652F;&#x6301;&#x901A;&#x8FC7; WebSocket &#x4ECE;&#x5916;&#x90E8;&#x9009;&#x62E9; Story&#x3002;&#x4F46;&#x5176;&#x5B98;&#x65B9;&#x6587;&#x6863;&#x76EE;&#x524D;&#x4ECD;&#x660E;&#x786E;&#x8BF4;&#x660E;&#x6CA1;&#x6709;&#x5185;&#x5EFA;&#x5B8C;&#x6574;&#x89C6;&#x89C9;&#x6D4B;&#x8BD5;&#x80FD;&#x529B;&#xFF0C;&#x622A;&#x56FE;&#x4E0E;&#x6BD4;&#x8F83;&#x4ECD;&#x9700; Maestro&#x3001;Detox &#x7B49;&#x5916;&#x90E8;&#x5DE5;&#x5177;&#x5B8C;&#x6210;&#xFF1A;<a href="https://storybookjs.github.io/react-native/docs/intro/">React Native Storybook</a>&#x3001;<a href="https://storybookjs.github.io/react-native/docs/intro/configuration/websocket-configuration/">&#x8FDC;&#x7A0B;&#x63A7;&#x5236;</a>&#x3001;<a href="https://storybookjs.github.io/react-native/docs/intro/testing/">&#x6D4B;&#x8BD5;&#x8BF4;&#x660E;</a>&#x3002;</p>
<p>&#x8003;&#x8651;&#x5230; <code>web-affiliate-rn</code> &#x7684; RN &#x548C; React &#x7248;&#x672C;&#x8F83;&#x65E7;&#xFF0C;Storybook &#x53EA;&#x505A;&#x9650;&#x65F6;&#x517C;&#x5BB9;&#x6027;&#x9A8C;&#x8BC1;&#x3002;&#x63A5;&#x5165;&#x4EE3;&#x4EF7;&#x8FC7;&#x9AD8;&#x65F6;&#xFF0C;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x8F7B;&#x91CF; Fixture Screen&#xFF0C;&#x4E0D;&#x5347;&#x7EA7;&#x6574;&#x4E2A;&#x5DE5;&#x7A0B;&#x6765;&#x8FC1;&#x5C31;&#x5DE5;&#x5177;&#x3002;</p>
<h3 id="Appium &#x4E0D;&#x662F;&#x9996;&#x671F;&#x4E3B;&#x94FE;&#x8DEF;"><a href="#Appium &#x4E0D;&#x662F;&#x9996;&#x671F;&#x4E3B;&#x94FE;&#x8DEF;"></a>Appium &#x4E0D;&#x662F;&#x9996;&#x671F;&#x4E3B;&#x94FE;&#x8DEF;</h3>
<p>Appium &#x57FA;&#x4E8E;&#x5E73;&#x53F0; Driver &#x66B4;&#x9732;&#x5B8C;&#x6574;&#x7684;&#x79FB;&#x52A8;&#x7AEF;&#x81EA;&#x52A8;&#x5316;&#x534F;&#x8BAE;&#xFF0C;&#x9002;&#x5408;&#x590D;&#x6742;&#x4EA4;&#x4E92;&#x3001;&#x8DE8;&#x9875;&#x9762;&#x6D41;&#x7A0B;&#x548C; Native &#x5143;&#x7D20;&#x6811;&#x68C0;&#x67E5;&#xFF0C;&#x4F46;&#x5B89;&#x88C5;&#x3001;Driver &#x7BA1;&#x7406;&#x548C;&#x6267;&#x884C;&#x94FE;&#x8DEF;&#x66F4;&#x91CD;&#xFF1A;<a href="https://appium.io/docs/en/latest/reference/api/appium/">Appium Protocol</a>&#x3001;<a href="https://appium.io/docs/en/3.2/reference/cli/setup/">&#x79FB;&#x52A8;&#x7AEF;&#x73AF;&#x5883;&#x914D;&#x7F6E;</a>&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF1A;</p>
<ul>
<li>&#x7EC4;&#x4EF6;&#x5B9A;&#x5411;&#x6253;&#x5F00;&#x3001;&#x622A;&#x56FE;&#x548C;&#x7B80;&#x5355;&#x65AD;&#x8A00;&#xFF0C;&#x4F18;&#x5148; Deep Link + Maestro&#xFF1B;</li>
<li>&#x590D;&#x6742;&#x624B;&#x52BF;&#x3001;&#x7CFB;&#x7EDF;&#x5F39;&#x7A97;&#x548C;&#x8DE8; App &#x6D41;&#x7A0B;&#xFF0C;&#x518D;&#x8BC4;&#x4F30; Appium&#xFF1B;</li>
<li>&#x5982;&#x679C;&#x4ED3;&#x5E93;&#x672A;&#x6765;&#x5F62;&#x6210;&#x7A33;&#x5B9A; E2E &#x6D4B;&#x8BD5;&#x4F53;&#x7CFB;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x590D;&#x7528; Detox &#x7684;&#x622A;&#x56FE;&#x80FD;&#x529B;&#x3002;</li>
</ul>
<p>&#x5DE5;&#x5177;&#x53EA;&#x662F;&#x6267;&#x884C;&#x5668;&#x3002;&#x65E0;&#x8BBA;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#xFF0C;&#x7A33;&#x5B9A;&#x7684; Fixture&#x3001;&#x786E;&#x5B9A;&#x7684; Route &#x548C;&#x7EDF;&#x4E00;&#x8BBE;&#x5907;&#x57FA;&#x7EBF;&#x624D;&#x662F;&#x89C6;&#x89C9;&#x95ED;&#x73AF;&#x7684;&#x57FA;&#x7840;&#x3002;</p>
<h2 id="&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x4E00;&#x4E2A;&#x603B;&#x5206;"><a href="#&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x4E00;&#x4E2A;&#x603B;&#x5206;"></a>&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x4E00;&#x4E2A;&#x603B;&#x5206;</h2>
<p>&#x5B8C;&#x5168;&#x9010;&#x50CF;&#x7D20;&#x6BD4;&#x8F83;&#x4F1A;&#x88AB;&#x5B57;&#x4F53;&#x6297;&#x952F;&#x9F7F;&#x3001;&#x56FE;&#x7247;&#x52A0;&#x8F7D;&#x3001;&#x7CFB;&#x7EDF;&#x7248;&#x672C;&#x548C;&#x5E73;&#x53F0;&#x5DEE;&#x5F02;&#x5E72;&#x6270;&#xFF1B;&#x53EA;&#x770B;&#x89C6;&#x89C9; embedding&#xFF0C;&#x53C8;&#x53EF;&#x80FD;&#x5FFD;&#x7565;&#x95F4;&#x8DDD;&#x548C;&#x5BF9;&#x9F50;&#x9519;&#x8BEF;&#x3002;</p>
<p>&#x5EFA;&#x8BAE;&#x5206;&#x4E09;&#x5C42;&#x5224;&#x65AD;&#xFF1A;</p>
<ol>
<li>&#x53EC;&#x56DE;&#x9636;&#x6BB5;&#x4F7F;&#x7528;&#x89C6;&#x89C9; embedding&#x3001;&#x989C;&#x8272;&#x3001;&#x8F6E;&#x5ED3;&#x3001;OCR &#x548C;&#x5927;&#x81F4;&#x5E03;&#x5C40;&#xFF0C;&#x76EE;&#x6807;&#x662F;&#x4E0D;&#x8981;&#x6F0F;&#x6389;&#x6B63;&#x786E;&#x5019;&#x9009;&#xFF1B;</li>
<li>&#x5019;&#x9009;&#x9A8C;&#x8BC1;&#x9636;&#x6BB5;&#x6BD4;&#x8F83;&#x7EC4;&#x4EF6;&#x8FB9;&#x754C;&#x3001;&#x5C42;&#x7EA7;&#x3001;&#x95F4;&#x8DDD;&#x3001;&#x5BF9;&#x9F50;&#x3001;&#x6587;&#x672C;&#x533A;&#x57DF;&#x548C;&#x611F;&#x77E5;&#x5DEE;&#x5F02;&#xFF1B;</li>
<li>&#x6574;&#x9875;&#x9636;&#x6BB5;&#x8F93;&#x51FA; Figma&#x3001;RN &#x622A;&#x56FE;&#x3001;Overlay &#x548C; Diff&#xFF0C;&#x7531; Codex &#x5206;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x5173;&#x952E;&#x9875;&#x9762;&#x4FDD;&#x7559;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x3002;</li>
</ol>
<p>&#x622A;&#x56FE;&#x73AF;&#x5883;&#x5FC5;&#x987B;&#x56FA;&#x5B9A;&#x8BBE;&#x5907;&#x5C3A;&#x5BF8;&#x3001;Pixel Ratio&#x3001;&#x5E73;&#x53F0;&#x7248;&#x672C;&#x3001;&#x8BED;&#x8A00;&#x3001;&#x5B57;&#x4F53;&#x7F29;&#x653E;&#x3001;Mock &#x6570;&#x636E;&#x3001;&#x52A8;&#x753B;&#x548C;&#x56FE;&#x7247;&#x7F13;&#x5B58;&#x3002;iOS &#x548C; Android &#x5E94;&#x5206;&#x522B;&#x5EFA;&#x7ACB;&#x57FA;&#x7EBF;&#xFF0C;&#x4E0D;&#x80FD;&#x7528;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x7684;&#x50CF;&#x7D20;&#x7ED3;&#x679C;&#x66FF;&#x4EE3;&#x53E6;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x3002;</p>
<h2 id="&#x5982;&#x4F55;&#x63A5;&#x5165;&#x73B0;&#x6709; Material-first &#x6D41;&#x7A0B;"><a href="#&#x5982;&#x4F55;&#x63A5;&#x5165;&#x73B0;&#x6709; Material-first &#x6D41;&#x7A0B;"></a>&#x5982;&#x4F55;&#x63A5;&#x5165;&#x73B0;&#x6709; Material-first &#x6D41;&#x7A0B;</h2>
<p>Visual Material Lab &#x4E0D;&#x66FF;&#x4EE3;&#x5DF2;&#x6709;&#x7684; RN Page Plan &#x548C;&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF0C;&#x800C;&#x662F;&#x8865;&#x4E0A;&#x5B83;&#x4EEC;&#x4E4B;&#x524D;&#x6700;&#x8584;&#x5F31;&#x7684;&#x201C;&#x7269;&#x6599;&#x53D1;&#x73B0;&#x4E0E;&#x9A8C;&#x8BC1;&#x201D;&#x73AF;&#x8282;&#xFF1A;</p>
<pre><code class="language-text">Figma &#x622A;&#x56FE; + &#x4E1A;&#x52A1;&#x573A;&#x666F;
  &#x2192; Visual Material Retrieval
  &#x2192; Native Candidate Verification
  &#x2192; Material Mapping JSON
  &#x2192; RN Page Plan
  &#x2192; RN Code Emitter
  &#x2192; Generated View
  &#x2192; Host Container &#x63A5;&#x5165; API / State / Navigator / Tracking
  &#x2192; Full-page Native Visual Verification
</code></pre>
<p>&#x539F;&#x65B9;&#x6848;&#x4E2D;&#x503C;&#x5F97;&#x4FDD;&#x7559;&#x7684;&#x90E8;&#x5206;&#x7EE7;&#x7EED;&#x4FDD;&#x7559;&#xFF1A;</p>
<ul>
<li>Page Plan &#x4F5C;&#x4E3A;&#x53EF; Review&#x3001;&#x53EF; Diff &#x7684;&#x7F16;&#x8BD1;&#x671F;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#xFF1B;</li>
<li>&#x8F93;&#x51FA;&#x666E;&#x901A; TSX &#x548C;&#x9879;&#x76EE;&#x6837;&#x5F0F;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5EFA;&#x7ACB;&#x7EBF;&#x4E0A; Schema Runtime&#xFF1B;</li>
<li>Generated View &#x4E0E; Host Container &#x5206;&#x79BB;&#xFF1B;</li>
<li>&#x65E0;&#x5408;&#x9002;&#x7269;&#x6599;&#x65F6;&#x8FDB;&#x5165;&#x57FA;&#x7840;&#x7EC4;&#x5408;&#x3001;&#x9875;&#x9762;&#x7279;&#x4F8B;&#x6216;&#x7269;&#x6599;&#x65B0;&#x589E; Review&#xFF1B;</li>
<li>&#x6700;&#x7EC8;&#x4F7F;&#x7528;&#x771F;&#x5B9E; Native &#x622A;&#x56FE;&#x95ED;&#x73AF;&#x3002;</li>
</ul>
<p>&#x53D8;&#x5316;&#x5728;&#x4E8E;&#xFF0C;Catalog &#x4E0D;&#x518D;&#x4E3B;&#x8981;&#x9760;&#x4EBA;&#x5DE5;&#x8865;&#x5199;&#x63CF;&#x8FF0;&#xFF0C;&#x800C;&#x662F;&#x4F18;&#x5148;&#x4ECE;&#x53EF;&#x6267;&#x884C; Fixture&#x3001;&#x622A;&#x56FE;&#x3001;&#x6E90;&#x7801;&#x548C;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#x4E2D;&#x751F;&#x957F;&#x3002;&#x540E;&#x7EED; Material-first &#x539F;&#x578B;&#x4E5F;&#x76F4;&#x63A5;&#x6D88;&#x8D39;&#x540C;&#x4E00;&#x5957;&#x7269;&#x6599;&#x5B9A;&#x4E49;&#x548C; Fixtures&#xFF0C;&#x56E0;&#x6B64;&#x8FD9;&#x90E8;&#x5206;&#x6295;&#x5165;&#x4E0D;&#x4F1A;&#x53EA;&#x670D;&#x52A1;&#x4E00;&#x6B21; Figma &#x8FD8;&#x539F;&#x3002;</p>
<h2 id="&#x63A8;&#x8350;&#x7684;&#x8BD5;&#x70B9;&#x8303;&#x56F4;"><a href="#&#x63A8;&#x8350;&#x7684;&#x8BD5;&#x70B9;&#x8303;&#x56F4;"></a>&#x63A8;&#x8350;&#x7684;&#x8BD5;&#x70B9;&#x8303;&#x56F4;</h2>
<p>&#x9996;&#x671F;&#x4E0D;&#x8981;&#x626B;&#x63CF;&#x6574;&#x4E2A;&#x4ED3;&#x5E93;&#xFF0C;&#x5EFA;&#x8BAE;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x4E1A;&#x52A1;&#x57DF;&#x52A0; <code>shared</code>&#xFF1A;</p>
<ul>
<li>20&#xFF5E;30 &#x4E2A;&#x6613;&#x89E3;&#x8026;&#x7EC4;&#x4EF6;&#xFF1B;</li>
<li>&#x6BCF;&#x4E2A;&#x7EC4;&#x4EF6; 2&#xFF5E;4 &#x4E2A;&#x6709;&#x4E1A;&#x52A1;&#x4EF7;&#x503C;&#x7684; Fixture&#xFF1B;</li>
<li>&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x4F5C;&#x4E3A; Golden Baseline&#xFF0C;&#x53E6;&#x4E00;&#x4E2A;&#x5E73;&#x53F0;&#x505A;&#x53EF;&#x8FD0;&#x884C;&#x9A8C;&#x8BC1;&#xFF1B;</li>
<li>&#x4E00;&#x4E2A;&#x4E2D;&#x7B49;&#x590D;&#x6742;&#x5EA6; Figma &#x9875;&#x9762;&#xFF1B;</li>
<li>&#x4E00;&#x4EFD;&#x4EBA;&#x5DE5; Golden Mapping&#xFF0C;&#x7528;&#x4E8E;&#x6D4B;&#x91CF;&#x81EA;&#x52A8;&#x68C0;&#x7D22;&#x662F;&#x5426;&#x771F;&#x7684;&#x53D8;&#x597D;&#x3002;</li>
</ul>
<p>&#x63A8;&#x8FDB;&#x5206;&#x4E3A;&#x56DB;&#x6BB5;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x9636;&#x6BB5;</th>
<th style="text-align:right">&#x65F6;&#x95F4;</th>
<th>&#x6838;&#x5FC3;&#x7ED3;&#x679C;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Visual Lab &#x57FA;&#x7840;</td>
<td style="text-align:right">1 &#x5468;</td>
<td>Registry&#x3001;Fixture Screen&#x3001;&#x5B9A;&#x5411; Route&#x3001;&#x9996;&#x6279;&#x7EC4;&#x4EF6;&#x4E0E;&#x754C;&#x9762;&#x6807;&#x8BC6;&#x3002;</td>
</tr>
<tr>
<td>&#x89C6;&#x89C9;&#x6837;&#x672C;&#x4E0E;&#x68C0;&#x7D22;</td>
<td style="text-align:right">1&#xFF5E;2 &#x5468;</td>
<td>Native &#x622A;&#x56FE;&#x8BED;&#x6599;&#x3001;&#x7D22;&#x5F15;&#x3001;&#x622A;&#x56FE; + &#x573A;&#x666F;&#x7684; Top-K &#x53EC;&#x56DE;&#x3002;</td>
</tr>
<tr>
<td>MCP &#x4E0E;&#x81EA;&#x52A8;&#x590D;&#x6838;</td>
<td style="text-align:right">1&#xFF5E;2 &#x5468;</td>
<td>&#x4E94;&#x4E2A;&#x6838;&#x5FC3; MCP &#x5DE5;&#x5177;&#x3001;&#x5B9A;&#x5411;&#x542F;&#x52A8;&#x3001;&#x622A;&#x56FE;&#x548C;&#x5DEE;&#x5F02;&#x62A5;&#x544A;&#x3002;</td>
</tr>
<tr>
<td>&#x5355;&#x9875;&#x751F;&#x6210;&#x95ED;&#x73AF;</td>
<td style="text-align:right">1&#xFF5E;2 &#x5468;</td>
<td>Mapping JSON &#x63A5;&#x5165; Page Plan/Emitter&#xFF0C;&#x5E76;&#x5B8C;&#x6210;&#x6574;&#x9875; Native &#x590D;&#x6838;&#x3002;</td>
</tr>
</tbody>
</table>
<p>&#x5728; 1 &#x540D;&#x4E3B;&#x529B;&#x5DE5;&#x7A0B;&#x5E08;&#x548C; 1 &#x540D;&#x517C;&#x804C; RN Reviewer &#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x53EF;&#x6F14;&#x793A;&#x7684;&#x6280;&#x672F; POC &#x7EA6; 3&#xFF5E;4 &#x5468;&#xFF0C;&#x53EF;&#x7528;&#x4E8E;&#x771F;&#x5B9E;&#x5355;&#x9875;&#x8BD5;&#x70B9;&#x7684; MVP &#x7EA6; 5&#xFF5E;7 &#x5468;&#x3002;&#x518D;&#x7528; 2&#xFF5E;4 &#x5468;&#x9A8C;&#x8BC1;&#x7B2C;&#x4E8C;&#x4E1A;&#x52A1;&#x57DF;&#x3001;&#x53CC;&#x5E73;&#x53F0;&#x7A33;&#x5B9A;&#x6027;&#x548C;&#x7EC4;&#x4EF6;&#x6837;&#x672C;&#x7EF4;&#x62A4;&#xFF0C;&#x624D;&#x80FD;&#x5224;&#x65AD;&#x662F;&#x5426;&#x9002;&#x5408;&#x6269;&#x5927;&#x8986;&#x76D6;&#x3002;</p>
<h2 id="&#x600E;&#x6837;&#x5224;&#x65AD;&#x65B9;&#x6848;&#x771F;&#x7684;&#x6709;&#x6548;"><a href="#&#x600E;&#x6837;&#x5224;&#x65AD;&#x65B9;&#x6848;&#x771F;&#x7684;&#x6709;&#x6548;"></a>&#x600E;&#x6837;&#x5224;&#x65AD;&#x65B9;&#x6848;&#x771F;&#x7684;&#x6709;&#x6548;</h2>
<p>&#x9996;&#x671F;&#x4E0D;&#x4EE5;&#x201C;&#x6536;&#x5F55;&#x4E86;&#x591A;&#x5C11;&#x7EC4;&#x4EF6;&#x201D;&#x4F5C;&#x4E3A;&#x6838;&#x5FC3;&#x6307;&#x6807;&#xFF0C;&#x800C;&#x770B;&#xFF1A;</p>
<ul>
<li>Golden Mapping &#x4E2D;&#x6B63;&#x786E;&#x7EC4;&#x4EF6;&#x662F;&#x5426;&#x8FDB;&#x5165; Top-K&#xFF1B;</li>
<li>&#x6700;&#x7EC8; Material &#x9009;&#x62E9;&#x6B63;&#x786E;&#x7387;&#xFF1B;</li>
<li>&#x6BCF;&#x4E2A; Figma &#x533A;&#x57DF;&#x9700;&#x8981;&#x771F;&#x5B9E;&#x542F;&#x52A8;&#x591A;&#x5C11;&#x4E2A;&#x5019;&#x9009;&#xFF1B;</li>
<li>&#x4ECE;&#x8F93;&#x5165;&#x622A;&#x56FE;&#x5230;&#x5F97;&#x5230;&#x6620;&#x5C04;&#x7684;&#x8017;&#x65F6;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x9875;&#x9762;&#x590D;&#x7528;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;&#x7684;&#x6BD4;&#x4F8B;&#xFF1B;</li>
<li>&#x751F;&#x6210;&#x4EE3;&#x7801;&#x7684;&#x4EBA;&#x5DE5;&#x4FEE;&#x6539;&#x91CF;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5DEE;&#x5F02;&#x9700;&#x8981;&#x591A;&#x5C11;&#x8F6E;&#x624D;&#x80FD;&#x6536;&#x655B;&#xFF1B;</li>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x9875;&#x9762;&#x6216;&#x4E1A;&#x52A1;&#x57DF;&#x662F;&#x5426;&#x660E;&#x663E;&#x590D;&#x7528;&#x9996;&#x671F;&#x6210;&#x679C;&#x3002;</li>
</ul>
<p>&#x5982;&#x679C;&#x68C0;&#x7D22;&#x603B;&#x80FD;&#x627E;&#x5230;&#x201C;&#x957F;&#x5F97;&#x50CF;&#x4F46;&#x8BED;&#x4E49;&#x9519;&#x8BEF;&#x201D;&#x7684;&#x7EC4;&#x4EF6;&#xFF0C;&#x8BF4;&#x660E;&#x4E1A;&#x52A1;&#x7EA6;&#x675F;&#x548C;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#x4E0D;&#x8DB3;&#xFF1B;&#x5982;&#x679C;&#x6B63;&#x786E;&#x7EC4;&#x4EF6;&#x6839;&#x672C;&#x8FDB;&#x4E0D;&#x4E86; Top-K&#xFF0C;&#x8BF4;&#x660E;&#x89C6;&#x89C9;&#x7D22;&#x5F15;&#x6216; Fixture &#x8986;&#x76D6;&#x4E0D;&#x8DB3;&#xFF1B;&#x5982;&#x679C;&#x7EC4;&#x4EF6;&#x6B63;&#x786E;&#x4F46;&#x6574;&#x9875;&#x4ECD;&#x4E0D;&#x63A5;&#x8FD1;&#xFF0C;&#x5219;&#x95EE;&#x9898;&#x5DF2;&#x7ECF;&#x8F6C;&#x79FB;&#x5230;&#x5E03;&#x5C40;&#x751F;&#x6210;&#x548C;&#x9875;&#x9762;&#x7EC4;&#x5408;&#xFF0C;&#x4E0D;&#x80FD;&#x7EE7;&#x7EED;&#x8BEF;&#x5224;&#x4E3A;&#x68C0;&#x7D22;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x4E3B;&#x8981;&#x98CE;&#x9669;&#x4E0E;&#x89C4;&#x907F;&#x65B9;&#x5F0F;"><a href="#&#x4E3B;&#x8981;&#x98CE;&#x9669;&#x4E0E;&#x89C4;&#x907F;&#x65B9;&#x5F0F;"></a>&#x4E3B;&#x8981;&#x98CE;&#x9669;&#x4E0E;&#x89C4;&#x907F;&#x65B9;&#x5F0F;</h2>
<h3 id="&#x7269;&#x6599;&#x76EE;&#x5F55;&#x53D8;&#x6210;&#x7B2C;&#x4E8C;&#x5957;&#x7EC4;&#x4EF6;&#x5E93;"><a href="#&#x7269;&#x6599;&#x76EE;&#x5F55;&#x53D8;&#x6210;&#x7B2C;&#x4E8C;&#x5957;&#x7EC4;&#x4EF6;&#x5E93;"></a>&#x7269;&#x6599;&#x76EE;&#x5F55;&#x53D8;&#x6210;&#x7B2C;&#x4E8C;&#x5957;&#x7EC4;&#x4EF6;&#x5E93;</h3>
<p>&#x53EA;&#x4FDD;&#x5B58; Registry&#x3001;Fixture &#x548C; Adapter&#xFF0C;&#x5F15;&#x7528;&#x552F;&#x4E00;&#x6E90;&#x7801;&#xFF1B;&#x7981;&#x6B62;&#x590D;&#x5236;&#x7EC4;&#x4EF6;&#x5B9E;&#x73B0;&#x3002;</p>
<h3 id="&#x4E1A;&#x52A1;&#x57DF;&#x5206;&#x7C7B;&#x9650;&#x5236;&#x8DE8;&#x57DF;&#x590D;&#x7528;"><a href="#&#x4E1A;&#x52A1;&#x57DF;&#x5206;&#x7C7B;&#x9650;&#x5236;&#x8DE8;&#x57DF;&#x590D;&#x7528;"></a>&#x4E1A;&#x52A1;&#x57DF;&#x5206;&#x7C7B;&#x9650;&#x5236;&#x8DE8;&#x57DF;&#x590D;&#x7528;</h3>
<p>&#x4E1A;&#x52A1;&#x57DF;&#x53EA;&#x662F;&#x68C0;&#x7D22;&#x6807;&#x7B7E;&#xFF0C;&#x540C;&#x65F6;&#x7EF4;&#x62A4; UI &#x5F62;&#x6001;&#x6807;&#x7B7E;&#x548C; <code>shared</code> &#x5019;&#x9009;&#xFF1B;&#x76F8;&#x540C;&#x89C6;&#x89C9;&#x9AA8;&#x67B6;&#x4ECD;&#x6309;&#x7269;&#x6599;&#x6CDB;&#x5316;&#x6807;&#x51C6; Review&#x3002;</p>
<h3 id="Fixture &#x4E0E;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9010;&#x6E10;&#x4E0D;&#x4E00;&#x81F4;"><a href="#Fixture &#x4E0E;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9010;&#x6E10;&#x4E0D;&#x4E00;&#x81F4;"></a>Fixture &#x4E0E;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x9010;&#x6E10;&#x4E0D;&#x4E00;&#x81F4;</h3>
<p>&#x7269;&#x6599;&#x53D8;&#x66F4;&#x65F6;&#x81EA;&#x52A8;&#x91CD;&#x8DD1;&#x622A;&#x56FE;&#xFF1B;Registry &#x8BB0;&#x5F55;&#x6E90;&#x7801;&#x7248;&#x672C;&#x6216;&#x6837;&#x672C;&#x65F6;&#x95F4;&#xFF1B;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x7684;&#x4F7F;&#x7528;&#x4F4D;&#x7F6E;&#x4F5C;&#x4E3A;&#x8F85;&#x52A9;&#x8BC1;&#x636E;&#x3002;</p>
<h3 id="&#x89C6;&#x89C9;&#x5206;&#x6570;&#x5F88;&#x9AD8;&#x4F46;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x9519;&#x8BEF;"><a href="#&#x89C6;&#x89C9;&#x5206;&#x6570;&#x5F88;&#x9AD8;&#x4F46;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x9519;&#x8BEF;"></a>&#x89C6;&#x89C9;&#x5206;&#x6570;&#x5F88;&#x9AD8;&#x4F46;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x9519;&#x8BEF;</h3>
<p>&#x89C6;&#x89C9;&#x8D1F;&#x8D23;&#x53EC;&#x56DE;&#xFF0C;&#x4E1A;&#x52A1;&#x573A;&#x666F;&#x3001;Props&#x3001;&#x5E73;&#x53F0;&#x7EA6;&#x675F;&#x548C;&#x6E90;&#x7801;&#x4F7F;&#x7528;&#x8BC1;&#x636E;&#x8D1F;&#x8D23;&#x91CD;&#x6392;&#xFF1B;&#x6700;&#x7EC8;&#x6620;&#x5C04;&#x4FDD;&#x7559;&#x8BC1;&#x636E;&#x548C;&#x5019;&#x9009;&#xFF0C;&#x4E0D;&#x4EE5;&#x5355;&#x4E00;&#x5206;&#x6570;&#x81EA;&#x52A8;&#x62CD;&#x677F;&#x3002;</p>
<h3 id="&#x72B6;&#x6001;&#x7EC4;&#x5408;&#x65E0;&#x9650;&#x589E;&#x957F;"><a href="#&#x72B6;&#x6001;&#x7EC4;&#x5408;&#x65E0;&#x9650;&#x589E;&#x957F;"></a>&#x72B6;&#x6001;&#x7EC4;&#x5408;&#x65E0;&#x9650;&#x589E;&#x957F;</h3>
<p>&#x53EA;&#x4E3A;&#x5177;&#x6709;&#x4E1A;&#x52A1;&#x610F;&#x4E49;&#x7684;&#x7A33;&#x5B9A;&#x89C6;&#x89C9;&#x72B6;&#x6001;&#x5EFA;&#x7ACB; Fixture&#xFF0C;&#x4E0D;&#x7A77;&#x4E3E;&#x6240;&#x6709; Props &#x7B1B;&#x5361;&#x5C14;&#x79EF;&#x3002;&#x771F;&#x5B9E;&#x9700;&#x6C42;&#x51FA;&#x73B0;&#x65B0;&#x72B6;&#x6001;&#x65F6;&#x518D;&#x8865;&#x6837;&#x672C;&#x3002;</p>
<h3 id="Native &#x81EA;&#x52A8;&#x5316;&#x4E0D;&#x7A33;&#x5B9A;"><a href="#Native &#x81EA;&#x52A8;&#x5316;&#x4E0D;&#x7A33;&#x5B9A;"></a>Native &#x81EA;&#x52A8;&#x5316;&#x4E0D;&#x7A33;&#x5B9A;</h3>
<p>&#x4F18;&#x5148;&#x5B9A;&#x5411; Route&#xFF0C;&#x51CF;&#x5C11;&#x70B9;&#x51FB;&#x94FE;&#x8DEF;&#xFF1B;&#x56FA;&#x5B9A;&#x8BBE;&#x5907;&#x548C; Mock &#x6570;&#x636E;&#xFF1B;&#x9690;&#x85CF;&#x52A8;&#x753B;&#x4E0E;&#x5F02;&#x6B65;&#x566A;&#x58F0;&#xFF1B;&#x5C06;&#x68C0;&#x7D22;&#x3001;&#x542F;&#x52A8;&#x3001;&#x622A;&#x56FE;&#x548C;&#x6BD4;&#x8F83;&#x62C6;&#x5F00;&#xFF0C;&#x4EE5;&#x4FBF;&#x5355;&#x72EC;&#x91CD;&#x8BD5;&#x3002;</p>
<h2 id="&#x6700;&#x7EC8;&#x5224;&#x65AD;"><a href="#&#x6700;&#x7EC8;&#x5224;&#x65AD;"></a>&#x6700;&#x7EC8;&#x5224;&#x65AD;</h2>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x88AB;&#x4E1A;&#x754C;&#x7EDF;&#x4E00;&#x5B9A;&#x4E49;&#x7684;&#x6807;&#x51C6;&#x6D41;&#x7A0B;&#xFF0C;&#x4F46;&#x5B83;&#x4F7F;&#x7528;&#x7684;&#x7EC4;&#x4EF6;&#x9694;&#x79BB;&#x3001;&#x89C6;&#x89C9;&#x56DE;&#x5F52;&#x3001;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x3001;MCP &#x5DE5;&#x5177;&#x548C;&#x8BBE;&#x5907;&#x81EA;&#x52A8;&#x5316;&#x90FD;&#x6709;&#x6210;&#x719F;&#x57FA;&#x7840;&#x3002;&#x771F;&#x6B63;&#x6709;&#x524D;&#x77BB;&#x6027;&#x7684;&#x5730;&#x65B9;&#xFF0C;&#x662F;&#x628A;&#x5B83;&#x4EEC;&#x7EC4;&#x5408;&#x6210;&#x4E00;&#x5957;&#x201C;&#x53EF;&#x6267;&#x884C;&#x89C6;&#x89C9;&#x7269;&#x6599;&#x5E93; + Agent &#x4E3B;&#x52A8;&#x9A8C;&#x8BC1;&#x201D;&#x7684;&#x9875;&#x9762;&#x751F;&#x4EA7;&#x65B9;&#x5F0F;&#x3002;</p>
<p>&#x5B83;&#x7684;&#x6F5C;&#x5728;&#x6548;&#x679C;&#x4F1A;&#x660E;&#x663E;&#x5F3A;&#x4E8E;&#x7EAF;&#x6587;&#x672C; Catalog&#xFF0C;&#x4E5F;&#x6BD4;&#x81EA;&#x7531;&#x7684; Screenshot-to-Code &#x66F4;&#x5BB9;&#x6613;&#x590D;&#x7528;&#x73B0;&#x6709;&#x5DE5;&#x7A0B;&#x8D44;&#x4EA7;&#x548C;&#x5B9A;&#x4F4D;&#x95EE;&#x9898;&#x3002;&#x524D;&#x63D0;&#x662F;&#x575A;&#x6301;&#x4E09;&#x4E2A;&#x8FB9;&#x754C;&#xFF1A;</p>
<ol>
<li>&#x89C6;&#x89C9;&#x662F;&#x4E3B;&#x8981;&#x8BC1;&#x636E;&#xFF0C;&#x4F46;&#x4E0D;&#x662F;&#x552F;&#x4E00;&#x7EA6;&#x675F;&#xFF1B;</li>
<li>App &#x81EA;&#x52A8;&#x5316;&#x8D1F;&#x8D23;&#x9A8C;&#x8BC1;&#x5019;&#x9009;&#xFF0C;&#x4E0D;&#x8D1F;&#x8D23;&#x76F2;&#x76EE;&#x641C;&#x7D22;&#xFF1B;</li>
<li>Material Lab &#x662F;&#x539F;&#x7EC4;&#x4EF6;&#x7684;&#x53EF;&#x6267;&#x884C;&#x7D22;&#x5F15;&#xFF0C;&#x4E0D;&#x662F;&#x7B2C;&#x4E8C;&#x5957;&#x6E90;&#x7801;&#x3002;</li>
</ol>
<p>&#x5982;&#x679C;&#x9996;&#x4E2A;&#x4E1A;&#x52A1;&#x57DF;&#x7684; Top-K &#x53EC;&#x56DE;&#x3001;Native &#x590D;&#x6838;&#x548C;&#x5355;&#x9875;&#x4EE3;&#x7801;&#x95ED;&#x73AF;&#x80FD;&#x591F;&#x7A33;&#x5B9A;&#x6210;&#x7ACB;&#xFF0C;&#x8FD9;&#x6761;&#x8DEF;&#x7EBF;&#x5C31;&#x4E0D;&#x4EC5;&#x80FD;&#x89E3;&#x51B3;&#x5F53;&#x524D; Figma &#x8FD8;&#x539F;&#xFF0C;&#x4E5F;&#x4F1A;&#x6210;&#x4E3A;&#x540E;&#x7EED; Material-first &#x539F;&#x578B;&#x751F;&#x4EA7;&#x7684;&#x5E95;&#x5EA7;&#x3002;</p>
<p>&#x76F8;&#x5173;&#x65B9;&#x6848;&#xFF1A;<a href="./web-affiliate-rn-%E8%AE%BE%E8%AE%A1%E7%A8%BF%E8%BF%98%E5%8E%9F%E6%8E%A8%E8%BF%9B%E8%B7%AF%E7%BA%BF.md">&#x300A;web-affiliate-rn &#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x63A8;&#x8FDB;&#x8DEF;&#x7EBF;&#x300B;</a>&#x3001;<a href="./%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5-%E5%8D%95%E9%A1%B5%E5%9E%82%E7%9B%B4%E5%88%87%E7%89%87%E5%AE%9E%E6%96%BD%E6%89%8B%E5%86%8C.md">&#x300A;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x5355;&#x9875;&#x5782;&#x76F4;&#x5207;&#x7247;&#x5B9E;&#x65BD;&#x65B9;&#x6848;&#x300B;</a>&#x3002;</p>
`,E=[{level:1,title:"RN Visual Material Lab 与 MCP 视觉检索方案",children:[{level:2,title:"结论",children:[]},{level:2,title:"为什么这条路线有价值",children:[{level:3,title:"现有 RN 组件更适合成为“可执行知识”",children:[]},{level:3,title:"视觉搜索比业务命名更接近设计稿还原",children:[]},{level:3,title:"它不是另一个截图直接生成代码方案",children:[]}]},{level:2,title:"Visual Material Lab 应该是什么",children:[{level:3,title:"第一阶段：直接引用组件，封装关键信息",children:[]},{level:3,title:"业务域与 UI 形态同时分类",children:[]},{level:3,title:"界面标识只出现在浏览模式",children:[]},{level:3,title:"不是所有 Component 都应该映射",children:[]}]},{level:2,title:"Codex 如何从截图找到组件",children:[{level:3,title:"第一步：提前生成视觉物料索引",children:[]},{level:3,title:"第二步：将 Figma 截图拆成待匹配区域",children:[]},{level:3,title:"第三步：MCP 返回 Top-K 候选，而不是直接宣布答案",children:[]},{level:3,title:"第四步：定向运行候选并重新截图",children:[]},{level:3,title:"第五步：生成可审计的映射",children:[]}]},{level:2,title:"MCP 应怎样设计",children:[]},{level:2,title:"Native 自动化如何选择",children:[{level:3,title:"首选路径：直接入口 + 轻量设备自动化",children:[]},{level:3,title:"Appium 不是首期主链路",children:[]}]},{level:2,title:"视觉比较不能只看一个总分",children:[]},{level:2,title:"如何接入现有 Material-first 流程",children:[]},{level:2,title:"推荐的试点范围",children:[]},{level:2,title:"怎样判断方案真的有效",children:[]},{level:2,title:"主要风险与规避方式",children:[{level:3,title:"物料目录变成第二套组件库",children:[]},{level:3,title:"业务域分类限制跨域复用",children:[]},{level:3,title:"Fixture 与真实页面逐渐不一致",children:[]},{level:3,title:"视觉分数很高但组件选择错误",children:[]},{level:3,title:"状态组合无限增长",children:[]},{level:3,title:"Native 自动化不稳定",children:[]}]},{level:2,title:"最终判断",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
