const x={title:"RN Screenshot-to-Page Agent 路径优化：技术方案思考",description:"当前并行推进 Web Schema 到 RN 的移植、Codex Direct 探索和公共基础建设，获得结果后再决定融合方式。"},E=`<h1 id="RN Screenshot-to-Page Agent &#x8DEF;&#x5F84;&#x4F18;&#x5316;&#xFF1A;&#x6280;&#x672F;&#x65B9;&#x6848;&#x601D;&#x8003;"><a href="#RN Screenshot-to-Page Agent &#x8DEF;&#x5F84;&#x4F18;&#x5316;&#xFF1A;&#x6280;&#x672F;&#x65B9;&#x6848;&#x601D;&#x8003;"></a>RN Screenshot-to-Page Agent &#x8DEF;&#x5F84;&#x4F18;&#x5316;&#xFF1A;&#x6280;&#x672F;&#x65B9;&#x6848;&#x601D;&#x8003;</h1>
<h2 id="&#x5F53;&#x524D;&#x73B0;&#x8C61;"><a href="#&#x5F53;&#x524D;&#x73B0;&#x8C61;"></a>&#x5F53;&#x524D;&#x73B0;&#x8C61;</h2>
<p>&#x5F53;&#x524D;&#x89C2;&#x5BDF;&#x5230;&#xFF0C;Codex &#x76F4;&#x63A5;&#x63A5;&#x6536;&#x8BBE;&#x8BA1;&#x622A;&#x56FE;&#x3001;&#x9700;&#x6C42;&#x548C; RN &#x4ED3;&#x5E93;&#x65F6;&#xFF0C;&#x5DF2;&#x7ECF;&#x80FD;&#x591F;&#x5728;&#x90E8;&#x5206;&#x9700;&#x6C42;&#x4E2D;&#x8F83;&#x597D;&#x5730;&#x5B8C;&#x6210;&#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF0C;&#x751A;&#x81F3;&#x4E00;&#x6B21;&#x5F97;&#x5230;&#x63A5;&#x8FD1;&#x53EF;&#x7528;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x79CD;&#x80FD;&#x529B;&#x8FD8;&#x4E0D;&#x7A33;&#x5B9A;&#x3002;&#x5728;&#x53E6;&#x4E00;&#x4E9B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;Codex &#x53EF;&#x80FD;&#x627E;&#x9519;&#x7EC4;&#x4EF6;&#x3001;&#x9057;&#x6F0F;&#x4E1A;&#x52A1;&#x72B6;&#x6001;&#x3001;&#x91C7;&#x7528;&#x4E0D;&#x540C;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#xFF0C;&#x6216;&#x8005;&#x751F;&#x6210;&#x540E;&#x96BE;&#x4EE5;&#x5B8C;&#x6210; Native &#x89C6;&#x89C9;&#x9A8C;&#x6536;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#x5F53;&#x524D;&#x7684;&#x95EE;&#x9898;&#x4E0D;&#x662F;&#x201C;Codex &#x80FD;&#x4E0D;&#x80FD;&#x8FD8;&#x539F;&#x9875;&#x9762;&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x54EA;&#x4E9B;&#x989D;&#x5916;&#x4FE1;&#x606F;&#x548C;&#x5DE5;&#x7A0B;&#x80FD;&#x529B;&#xFF0C;&#x80FD;&#x591F;&#x7A33;&#x5B9A;&#x6539;&#x5584;&#x5B83;&#x5931;&#x8D25;&#x7684;&#x573A;&#x666F;&#xFF1F;</p>
</blockquote>
<h2 id="&#x6838;&#x5FC3;&#x53D6;&#x820D;"><a href="#&#x6838;&#x5FC3;&#x53D6;&#x820D;"></a>&#x6838;&#x5FC3;&#x53D6;&#x820D;</h2>
<p>&#x8FD9;&#x5957;&#x65B9;&#x6848;&#x771F;&#x6B63;&#x9700;&#x8981;&#x56DE;&#x7B54;&#x7684;&#x95EE;&#x9898;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#xFF1A;</p>
<blockquote>
<p>Web Schema &#x8FC1;&#x79FB;&#x548C; Codex Direct &#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x5206;&#x522B;&#x80FD;&#x505A;&#x5230;&#x4EC0;&#x4E48;&#xFF0C;&#x540E;&#x7EED;&#x5E94;&#x8BE5;&#x5982;&#x4F55;&#x878D;&#x5408;&#xFF1F;</p>
</blockquote>
<p>&#x5F53;&#x524D;&#x4E0D;&#x63D0;&#x524D;&#x9009;&#x62E9;&#x5176;&#x4E2D;&#x4E00;&#x6761;&#xFF0C;&#x4E5F;&#x4E0D;&#x63D0;&#x524D;&#x8981;&#x6C42; Schema &#x8FC1;&#x79FB;&#x6210; Codex Tool&#xFF0C;&#x800C;&#x662F;&#x4E09;&#x7EBF;&#x5E76;&#x884C;&#xFF1A;</p>
<pre><code class="language-text">&#x4E3B;&#x4EA4;&#x4ED8;&#x7EBF;&#xFF1A;Web Schema &#x65B9;&#x6848; &#x2192; &#x8FC1;&#x79FB;&#x5230; RN &#x2192; &#x5C3D;&#x5FEB;&#x4EA7;&#x51FA;&#x5E76;&#x4E0A;&#x7EBF;
&#x63A2;&#x7D22;&#x7EBF;&#xFF1A;&#x622A;&#x56FE; + &#x9700;&#x6C42; + &#x4ED3;&#x5E93; &#x2192; Codex Direct &#x2192; &#x79EF;&#x7D2F;&#x771F;&#x5B9E;&#x7ED3;&#x679C;
&#x516C;&#x5171;&#x57FA;&#x7840;&#x7EBF;&#xFF1A;Trace / Material &#x5448;&#x73B0; / &#x8BC4;&#x6D4B; &#x2192; &#x540C;&#x65F6;&#x670D;&#x52A1;&#x4E24;&#x6761;&#x8DEF;&#x5F84;
</code></pre>
<p>&#x5F53;&#x524D;&#x9009;&#x62E9;&#xFF1A;<strong>&#x4EE5; Schema &#x8FC1;&#x79FB;&#x6EE1;&#x8DB3;&#x8FD1;&#x671F;&#x4EA4;&#x4ED8;&#xFF0C;&#x4EE5; Direct &#x63A2;&#x7D22;&#x672A;&#x6765;&#x8DEF;&#x5F84;&#xFF0C;&#x540C;&#x65F6;&#x5EFA;&#x8BBE;&#x4E24;&#x8FB9;&#x5171;&#x7528;&#x7684;&#x57FA;&#x7840;&#x80FD;&#x529B;&#x3002;</strong></p>
<p>&#x7B49;&#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x90FD;&#x6709;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x548C;&#x6267;&#x884C;&#x6570;&#x636E;&#x540E;&#xFF0C;&#x518D;&#x5224;&#x65AD;&#x54EA;&#x4E9B; Schema &#x80FD;&#x529B;&#x7EE7;&#x7EED;&#x4FDD;&#x6301;&#x72EC;&#x7ACB;&#x6D41;&#x7A0B;&#xFF0C;&#x54EA;&#x4E9B;&#x9002;&#x5408;&#x8FC1;&#x79FB;&#x6210; Agent Tool&#xFF0C;&#x54EA;&#x4E9B;&#x53EF;&#x4EE5;&#x79FB;&#x9664;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x5E76;&#x884C;&#x63A2;&#x7D22; Direct"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x5E76;&#x884C;&#x63A2;&#x7D22; Direct"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x5E76;&#x884C;&#x63A2;&#x7D22; Direct</h2>
<p>&#x622A;&#x56FE;&#x3001;&#x9700;&#x6C42;&#x548C;&#x4ED3;&#x5E93;&#x662F;&#x539F;&#x59CB;&#x4E8B;&#x5B9E;&#xFF1B;Meta&#x3001;Mapping &#x548C; Todo &#x662F;&#x5BF9;&#x539F;&#x59CB;&#x4E8B;&#x5B9E;&#x7684;&#x518D;&#x6B21;&#x63A8;&#x65AD;&#x3002;</p>
<p>&#x5982;&#x679C;&#x8FD9;&#x4E9B;&#x63A8;&#x65AD;&#x5728; Codex &#x63A2;&#x7D22;&#x4ED3;&#x5E93;&#x4E4B;&#x524D;&#x751F;&#x6210;&#xFF0C;&#x5BB9;&#x6613;&#x51FA;&#x73B0;&#x51E0;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x51C6;&#x786E;&#x7684;&#x7EC4;&#x4EF6;&#x6620;&#x5C04;&#x88AB;&#x5305;&#x88C5;&#x6210;&#x786E;&#x5B9A;&#x4E8B;&#x5B9E;&#xFF1B;</li>
<li>&#x8FC7;&#x65E9;&#x62C6;&#x89E3;&#x7684; Todo &#x9650;&#x5236;&#x4E86;&#x66F4;&#x5408;&#x7406;&#x7684;&#x5B9E;&#x73B0;&#x8DEF;&#x5F84;&#xFF1B;</li>
<li>&#x6D3E;&#x751F;&#x4FE1;&#x606F;&#x4E0E;&#x622A;&#x56FE;&#x3001;&#x6E90;&#x7801;&#x91CD;&#x590D;&#x751A;&#x81F3;&#x51B2;&#x7A81;&#xFF1B;</li>
<li>Codex &#x88AB;&#x524D;&#x7F6E;&#x7ED3;&#x8BBA;&#x951A;&#x5B9A;&#xFF0C;&#x5FFD;&#x7565;&#x4ED3;&#x5E93;&#x4E2D;&#x7684;&#x771F;&#x5B9E;&#x7EC4;&#x4EF6;&#x548C;&#x7EA6;&#x675F;&#xFF1B;</li>
<li>&#x4E0A;&#x4E0B;&#x6587;&#x53D8;&#x957F;&#x4E86;&#xFF0C;&#x4F46;&#x6709;&#x6548;&#x4FE1;&#x606F;&#x5BC6;&#x5EA6;&#x548C;&#x6700;&#x7EC8;&#x9875;&#x9762;&#x8D28;&#x91CF;&#x4E0D;&#x4E00;&#x5B9A;&#x63D0;&#x9AD8;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x4F18;&#x5316;&#x5BF9;&#x8C61;&#x5E94;&#x8BE5;&#x4ECE;&#x4E2D;&#x95F4; JSON &#x7684;&#x5B8C;&#x6574;&#x5EA6;&#xFF0C;&#x8F6C;&#x5411; Agent &#x7684;&#x7AEF;&#x5230;&#x7AEF;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x7387;&#x3002;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x57FA;&#x4E8E;&#x771F;&#x5B9E;&#x6267;&#x884C;&#x7ED3;&#x679C;&#xFF0C;&#x5224;&#x65AD;&#x54EA;&#x4E9B;&#x6D3E;&#x751F;&#x4FE1;&#x606F;&#x786E;&#x5B9E;&#x63D0;&#x4F9B;&#x4E86;&#x589E;&#x91CF;&#xFF0C;&#x54EA;&#x4E9B;&#x53EA;&#x662F;&#x91CD;&#x590D;&#x3001;&#x566A;&#x58F0;&#x6216;&#x9519;&#x8BEF;&#x951A;&#x70B9;&#xFF0C;&#x518D;&#x6301;&#x7EED;&#x4F18;&#x5316;&#x8F93;&#x5165;&#x3001;&#x5DE5;&#x5177;&#x4E0E;&#x7EA6;&#x675F;&#x3002;</p>
<p>&#x8FD9;&#x5C5E;&#x4E8E;&#x5BF9; Agent &#x6267;&#x884C;&#x8F68;&#x8FF9;&#x7684;&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x4F18;&#x5316;&#xFF0C;&#x4E5F;&#x662F;&#x5728;&#x4E3A;&#x672A;&#x6765;&#x66F4;&#x7CFB;&#x7EDF;&#x7684;&#x7B56;&#x7565;&#x4F18;&#x5316;&#x79EF;&#x7D2F;&#x6570;&#x636E;&#xFF1B;</p>
<h2 id="&#x8F93;&#x5165;&#x8FB9;&#x754C;&#xFF1A;&#x63D0;&#x53D6; RN &#x4E8B;&#x5B9E;&#xFF0C;&#x6682;&#x4E0D;&#x9884;&#x62C6; Todo&#xFF08;&#x53EF;&#x9009;&#xFF09;"><a href="#&#x8F93;&#x5165;&#x8FB9;&#x754C;&#xFF1A;&#x63D0;&#x53D6; RN &#x4E8B;&#x5B9E;&#xFF0C;&#x6682;&#x4E0D;&#x9884;&#x62C6; Todo&#xFF08;&#x53EF;&#x9009;&#xFF09;"></a>&#x8F93;&#x5165;&#x8FB9;&#x754C;&#xFF1A;&#x63D0;&#x53D6; RN &#x4E8B;&#x5B9E;&#xFF0C;&#x6682;&#x4E0D;&#x9884;&#x62C6; Todo&#xFF08;&#x53EF;&#x9009;&#xFF09;</h2>
<p>&#x5B8C;&#x6574; PRD &#x5F80;&#x5F80;&#x540C;&#x65F6;&#x5305;&#x542B;&#x591A;&#x7AEF;&#x9700;&#x6C42;&#x548C;&#x5927;&#x91CF;&#x4E1A;&#x52A1;&#x80CC;&#x666F;&#x3002;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EF;&#x4EE5;&#x4ECE; PRD &#x4E2D;&#x63D0;&#x53D6;&#x4E00;&#x4E2A;&#x8F7B;&#x91CF;&#x7684; <code>RN Task Brief</code>&#xFF1A;</p>
<pre><code class="language-text">&#x9875;&#x9762;&#x76EE;&#x6807;
&#x9875;&#x9762;&#x5165;&#x53E3;
&#x5C55;&#x793A;&#x72B6;&#x6001;
&#x4EA4;&#x4E92;&#x884C;&#x4E3A;
&#x5173;&#x952E;&#x6570;&#x636E;
&#x5E73;&#x53F0;&#x7EA6;&#x675F;
&#x9A8C;&#x6536;&#x6761;&#x4EF6;
&#x539F; PRD &#x5F15;&#x7528;
</code></pre>
<p><code>RN Task Brief</code> &#x53EA;&#x662F;&#x5BF9;&#x539F;&#x59CB;&#x9700;&#x6C42;&#x7684;&#x63D0;&#x53D6;&#x548C;&#x538B;&#x7F29;&#xFF0C;&#x4E0D;&#x51B3;&#x5B9A;&#x7EC4;&#x4EF6;&#x3001;&#x4E0D;&#x751F;&#x6210;&#x697C;&#x5C42; Mapping&#xFF0C;&#x4E5F;&#x4E0D;&#x9884;&#x5148;&#x62C6;&#x89E3;&#x5B9E;&#x73B0; Todo&#x3002;&#x539F; PRD &#x4ECD;&#x7136;&#x4FDD;&#x7559;&#x4E3A;&#x4E8B;&#x5B9E;&#x6765;&#x6E90;&#x3002;</p>
<h2 id="&#x6574;&#x4F53;&#x65B9;&#x6848;"><a href="#&#x6574;&#x4F53;&#x65B9;&#x6848;"></a>&#x6574;&#x4F53;&#x65B9;&#x6848;</h2>
<pre><code class="language-mermaid">flowchart LR
  Schema[&quot;Web Schema &#x65B9;&#x6848;&quot;] --&gt; RN[&quot;RN &#x79FB;&#x690D;&#x9875;&#x9762;&quot;]
  Direct[&quot;&#x622A;&#x56FE; + &#x9700;&#x6C42; + &#x4ED3;&#x5E93;&quot;] --&gt; Agent[&quot;Codex Direct &#x6837;&#x672C;&quot;]
  Foundation[&quot;Trace / Material / &#x8BC4;&#x6D4B;&quot;] -.-&gt; RN
  Foundation -.-&gt; Agent
  RN --&gt; Evidence[&quot;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&quot;]
  Agent --&gt; Evidence
  Evidence --&gt; Fusion[&quot;&#x51B3;&#x5B9A;&#x540E;&#x7EED;&#x878D;&#x5408;&#x65B9;&#x5F0F;&quot;]
</code></pre>
<p>&#x5F53;&#x524D;&#x6838;&#x5FC3;&#x4E0D;&#x662F;&#x5148;&#x8BBE;&#x8BA1;&#x6700;&#x7EC8;&#x67B6;&#x6784;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5C3D;&#x5FEB;&#x5B8C;&#x6210; Schema &#x79FB;&#x690D;&#x7ED3;&#x679C;
+ &#x79EF;&#x7D2F; Direct &#x771F;&#x5B9E;&#x6837;&#x672C;
+ &#x5EFA;&#x8BBE;&#x4E24;&#x8FB9;&#x5171;&#x7528;&#x7684;&#x89C2;&#x5BDF;&#x548C;&#x8BC4;&#x6D4B;&#x80FD;&#x529B;
&#x2192; &#x518D;&#x51B3;&#x5B9A;&#x6700;&#x7EC8;&#x8DEF;&#x5F84;
</code></pre>
<p>&#x672A;&#x6765;&#x53EF;&#x80FD;&#x5C06;&#x90E8;&#x5206; Schema &#x80FD;&#x529B;&#x8FC1;&#x79FB;&#x4E3A; Agent Tool&#xFF0C;&#x4F46;&#x8FD9;&#x662F;&#x9A8C;&#x8BC1;&#x540E;&#x7684;&#x6F14;&#x8FDB;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x662F;&#x5F53;&#x524D;&#x9636;&#x6BB5;&#x7684;&#x524D;&#x7F6E;&#x8981;&#x6C42;&#x3002;</p>
<h2 id="Material &#x80FD;&#x529B;&#x7684;&#x6B63;&#x786E;&#x4F4D;&#x7F6E;"><a href="#Material &#x80FD;&#x529B;&#x7684;&#x6B63;&#x786E;&#x4F4D;&#x7F6E;"></a>Material &#x80FD;&#x529B;&#x7684;&#x6B63;&#x786E;&#x4F4D;&#x7F6E;</h2>
<p>Material Catalog&#x3001;Fixture &#x548C; Candidate Board &#x5C5E;&#x4E8E;&#x516C;&#x5171;&#x57FA;&#x7840;&#xFF1A;Schema &#x8FC1;&#x79FB;&#x53EF;&#x4EE5;&#x7528;&#x5B83;&#x5EFA;&#x7ACB;&#x7EC4;&#x4EF6;&#x6620;&#x5C04;&#xFF0C;Direct &#x63A2;&#x7D22;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; MCP &#x67E5;&#x8BE2;&#x540C;&#x4E00;&#x4EFD;&#x7EC4;&#x4EF6;&#x4E8B;&#x5B9E;&#x3002;</p>
<p>&#x5B83;&#x4EEC;&#x9996;&#x5148;&#x89E3;&#x51B3;&#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x5171;&#x7528;&#x7684;&#x7EC4;&#x4EF6;&#x4E8B;&#x5B9E;&#x548C;&#x771F;&#x5B9E;&#x89C6;&#x89C9;&#x5448;&#x73B0;&#x95EE;&#x9898;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x4F7F;&#x7528;&#x573A;&#x666F;</th>
<th>&#x6700;&#x5C0F;&#x80FD;&#x529B;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Schema &#x9700;&#x8981;&#x5EFA;&#x7ACB;&#x7EC4;&#x4EF6;&#x6620;&#x5C04;</td>
<td>Material Catalog</td>
</tr>
<tr>
<td>Codex &#x627E;&#x4E0D;&#x5230;&#x5DF2;&#x6709;&#x7EC4;&#x4EF6;</td>
<td>Material &#x67E5;&#x8BE2;</td>
</tr>
<tr>
<td>Codex &#x7F16;&#x9020;&#x7EC4;&#x4EF6;&#x8DEF;&#x5F84;&#x6216; Props</td>
<td>&#x7EC4;&#x4EF6;&#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;</td>
</tr>
<tr>
<td>&#x591A;&#x6B21;&#x9009;&#x62E9;&#x7684;&#x7EC4;&#x4EF6;&#x4E0D;&#x7A33;&#x5B9A;</td>
<td>Candidate Board &#x6216;&#x5019;&#x9009;&#x7EA6;&#x675F;</td>
</tr>
<tr>
<td>&#x4EBA;&#x9700;&#x8981;&#x5224;&#x65AD;&#x7EC4;&#x4EF6;&#x771F;&#x5B9E;&#x6548;&#x679C;</td>
<td>Native Fixture &#x4E0E; Candidate Board</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x91CC;&#x7684;&#x5173;&#x952E;&#x662F;&#xFF1A;<strong>Material &#x5448;&#x73B0;&#x4E0E;&#x67E5;&#x8BE2;&#x65B9;&#x5F0F;&#x5E94;&#x6210;&#x4E3A;&#x516C;&#x5171;&#x80FD;&#x529B;&#xFF1B;Schema &#x5F53;&#x524D;&#x4ECD;&#x6309;&#x72EC;&#x7ACB;&#x8FC1;&#x79FB;&#x7EBF;&#x63A8;&#x8FDB;&#xFF0C;&#x540E;&#x7EED;&#x662F;&#x5426; Tool &#x5316;&#x7531;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&#x51B3;&#x5B9A;&#x3002;</strong></p>
<h3 id="&#x666E;&#x901A;&#x4ED3;&#x5E93;&#x5982;&#x4F55; Material &#x5316;"><a href="#&#x666E;&#x901A;&#x4ED3;&#x5E93;&#x5982;&#x4F55; Material &#x5316;"></a>&#x666E;&#x901A;&#x4ED3;&#x5E93;&#x5982;&#x4F55; Material &#x5316;</h3>
<p>&#x73B0;&#x6709; Material &#x4E0D;&#x80FD;&#x957F;&#x671F;&#x4F9D;&#x8D56;&#x4EBA;&#x5DE5;&#x9010;&#x4E2A;&#x767B;&#x8BB0;&#x3002;&#x53EF;&#x4EE5;&#x63A2;&#x7D22;&#x4E00;&#x4E2A; <code>Material Generator Skill</code>&#xFF0C;&#x628A;&#x666E;&#x901A; FE/RN &#x4ED3;&#x5E93;&#x4E2D;&#x5DF2;&#x6709;&#x7684;&#x53EF;&#x590D;&#x7528;&#x7EC4;&#x4EF6;&#x8F6C;&#x6210; Agent &#x53EF;&#x67E5;&#x8BE2;&#x3001;&#x5F00;&#x53D1;&#x8005;&#x53EF;&#x9A8C;&#x8BC1;&#x7684; Material&#xFF1A;</p>
<pre><code class="language-text">&#x666E;&#x901A; FE/RN &#x4ED3;&#x5E93;
&#x2192; &#x8BC6;&#x522B;&#x5DF2;&#x6709;&#x53EF;&#x590D;&#x7528;&#x7EC4;&#x4EF6;
&#x2192; &#x5F15;&#x7528;&#x539F;&#x7EC4;&#x4EF6;&#x5E76;&#x8865;&#x5145; Fixture
&#x2192; &#x751F;&#x6210;&#x6700;&#x5C0F; Catalog
&#x2192; &#x5728; Candidate Board &#x4E2D;&#x771F;&#x5B9E;&#x6E32;&#x67D3;
&#x2192; &#x4EBA;&#x5DE5;&#x786E;&#x8BA4;
&#x2192; &#x6210;&#x4E3A;&#x53EF;&#x7528; Material
</code></pre>
<p>&#x5B83;&#x4E0D;&#x590D;&#x5236;&#x7EC4;&#x4EF6;&#xFF0C;&#x4E5F;&#x4E0D;&#x81EA;&#x52A8;&#x642C;&#x8FC1;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;&#x3002;&#x7B2C;&#x4E00;&#x7248;&#x53EA;&#x9700;&#x8981;&#x4EA7;&#x51FA; Catalog&#x3001;Fixture&#x3001;Candidate Board &#x548C;&#x8986;&#x76D6;&#x60C5;&#x51B5;&#xFF1B;&#x5B9E;&#x9645;&#x53EC;&#x56DE;&#x6548;&#x679C;&#x4ECD;&#x7531;&#x771F;&#x5B9E;&#x9875;&#x9762; Case &#x9A8C;&#x8BC1;&#x3002;</p>
<h3 id="&#x4ECE;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x6269;&#x5C55;&#x5230;&#x5DE5;&#x7A0B;&#x590D;&#x7528;"><a href="#&#x4ECE;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x6269;&#x5C55;&#x5230;&#x5DE5;&#x7A0B;&#x590D;&#x7528;"></a>&#x4ECE;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x6269;&#x5C55;&#x5230;&#x5DE5;&#x7A0B;&#x590D;&#x7528;</h3>
<p>Material &#x89E3;&#x51B3;&#x7684;&#x662F;&#x201C;&#x6709;&#x6CA1;&#x6709;&#x73B0;&#x6210;&#x7EC4;&#x4EF6;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x201D;&#xFF0C;&#x4F46;&#x9875;&#x9762;&#x751F;&#x6210;&#x8FD8;&#x4F1A;&#x53CD;&#x590D;&#x9047;&#x5230;&#x53E6;&#x4E00;&#x7C7B;&#x95EE;&#x9898;&#xFF1A;&#x6CA1;&#x6709;&#x73B0;&#x6210;&#x7EC4;&#x4EF6;&#x65F6;&#xFF0C;&#x65B0;&#x4EE3;&#x7801;&#x5E94;&#x8BE5;&#x91C7;&#x7528;&#x4EC0;&#x4E48;&#x7EC4;&#x7EC7;&#x65B9;&#x5F0F;&#x3001;&#x5B9E;&#x73B0;&#x60EF;&#x4F8B;&#x548C;&#x9A8C;&#x8BC1;&#x6807;&#x51C6;&#x3002;</p>
<p>&#x8FD9;&#x7C7B;&#x590D;&#x7528;&#x4E0D;&#x5E94;&#x5168;&#x90E8;&#x585E;&#x8FDB; Material&#xFF0C;&#x800C;&#x5E94;&#x5F62;&#x6210;&#x66F4;&#x901A;&#x7528;&#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x77E5;&#x8BC6;&#xFF1A;</p>
<pre><code class="language-text">Asset&#xFF1A;&#x53EF;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x7684;&#x7EC4;&#x4EF6;&#x3001;Hook&#x3001;Library &#x6216; API
Pattern&#xFF1A;&#x7ECF;&#x8FC7;&#x9A8C;&#x8BC1;&#x7684;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x4E0E;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;
Recipe&#xFF1A;&#x53EF;&#x6267;&#x884C;&#x7684;&#x521B;&#x5EFA;&#x3001;&#x91CD;&#x6784;&#x6216;&#x8FC1;&#x79FB;&#x6B65;&#x9AA4;
Contract&#xFF1A;&#x5FC5;&#x987B;&#x6EE1;&#x8DB3;&#x7684;&#x6D4B;&#x8BD5;&#x3001;&#x7EA6;&#x675F;&#x4E0E;&#x9A8C;&#x6536;&#x6761;&#x4EF6;
</code></pre>
<p>&#x53EF;&#x4EE5;&#x8FDB;&#x4E00;&#x6B65;&#x63A2;&#x7D22; <code>Engineering Reuse Generator Skill</code>&#xFF1A;</p>
<pre><code class="language-text">&#x5DF2;&#x9A8C;&#x8BC1;&#x7684;&#x5DE5;&#x7A0B;&#x4EE3;&#x7801;&#x4E0E; Case
&#x2192; &#x63D0;&#x8BAE; Asset / Pattern / Recipe / Contract
&#x2192; &#x4EBA;&#x5DE5; Review
&#x2192; &#x5F62;&#x6210; Golden Example &#x548C;&#x53EF;&#x68C0;&#x7D22;&#x77E5;&#x8BC6;
&#x2192; Agent &#x5728;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x4E2D;&#x6309;&#x9700;&#x590D;&#x7528;
</code></pre>
<p>&#x5B83;&#x548C; <code>Material Generator Skill</code> &#x7684;&#x5173;&#x7CFB;&#x662F;&#xFF1A;</p>
<ul>
<li>Material Generator &#x9762;&#x5411; FE/RN &#x7684;&#x53EF;&#x8FD0;&#x884C;&#x89C6;&#x89C9;&#x8D44;&#x4EA7;&#xFF1B;</li>
<li>Engineering Reuse Generator &#x9762;&#x5411; FE&#x3001;BE&#x3001;Test &#x90FD;&#x9002;&#x7528;&#x7684;&#x5DE5;&#x7A0B;&#x6A21;&#x5F0F;&#xFF1B;</li>
<li>Component Material &#x672C;&#x8EAB;&#x5C5E;&#x4E8E; Asset &#x7684;&#x4E00;&#x79CD;&#xFF1B;</li>
<li>Pattern &#x4E0D;&#x662F;&#x8981;&#x6C42;&#x6240;&#x6709;&#x76F8;&#x540C;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#xFF0C;&#x800C;&#x662F;&#x9ED8;&#x8BA4;&#x9075;&#x5FAA;&#x5DF2;&#x9A8C;&#x8BC1;&#x6A21;&#x5F0F;&#xFF0C;&#x786E;&#x6709;&#x5DEE;&#x5F02;&#x65F6;&#x5141;&#x8BB8;&#x504F;&#x79BB;&#x5E76;&#x8BF4;&#x660E;&#x539F;&#x56E0;&#x3002;</li>
</ul>
<p>&#x8BE5;&#x65B9;&#x5411;&#x5148;&#x4F5C;&#x4E3A;&#x516C;&#x5171;&#x57FA;&#x7840;&#x63A2;&#x7D22;&#x3002;&#x53EA;&#x6709; Pattern &#x6216; Recipe &#x5728;&#x771F;&#x5B9E; Case &#x4E2D;&#x8BC1;&#x660E;&#x80FD;&#x964D;&#x4F4E;&#x9519;&#x8BEF;&#x548C;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#xFF0C;&#x624D;&#x8FDB;&#x5165;&#x9ED8;&#x8BA4; Agent Context &#x6216; Tool&#x3002;</p>
<p>&#x66F4;&#x5B8C;&#x6574;&#x7684;&#x6A2A;&#x5411;&#x65B9;&#x6848;&#x89C1;<a href="./AI%20Engineering%20Golden%20Path%EF%BC%9A%E9%9D%A2%E5%90%91%20Agent%20%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%A4%8D%E7%94%A8%E6%9C%BA%E5%88%B6.md">&#x300A;AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;&#x300B;</a>&#x3002;</p>
<h2 id="&#x4FDD;&#x7559;&#x7684;&#x6700;&#x5C0F;&#x8F85;&#x52A9;&#x80FD;&#x529B;"><a href="#&#x4FDD;&#x7559;&#x7684;&#x6700;&#x5C0F;&#x8F85;&#x52A9;&#x80FD;&#x529B;"></a>&#x4FDD;&#x7559;&#x7684;&#x6700;&#x5C0F;&#x8F85;&#x52A9;&#x80FD;&#x529B;</h2>
<p>&#x7B2C;&#x4E00;&#x7248;&#x516C;&#x5171;&#x5B9E;&#x73B0;&#x5148;&#x4FDD;&#x6301;&#x4E24;&#x9879;&#x80FD;&#x529B;&#xFF1A;</p>
<pre><code class="language-text">&#x53EA;&#x8BFB; Material MCP
&#x2192; list_rn_materials
&#x2192; get_rn_material

&#x771F;&#x5B9E; RN Candidate Board
&#x2192; &#x6E32;&#x67D3;&#x5C11;&#x91CF;&#x5DF2;&#x767B;&#x8BB0; Fixture
&#x2192; &#x5C55;&#x793A;&#x6E90;&#x7801;&#x8DEF;&#x5F84;&#x3001;Props &#x548C;&#x771F;&#x5B9E; Native &#x753B;&#x9762;
</code></pre>
<p>Schema &#x8FC1;&#x79FB;&#x548C; Direct &#x63A2;&#x7D22;&#x5171;&#x7528;&#x540C;&#x4E00;&#x4EFD; Catalog &#x4E0E; Fixture&#xFF0C;&#x907F;&#x514D;&#x5206;&#x522B;&#x7EF4;&#x62A4;&#x4E24;&#x5957;&#x7EC4;&#x4EF6;&#x4E8B;&#x5B9E;&#x3002;</p>
<h2 id="&#x4EE3;&#x7801;&#x5F52;&#x5C5E;"><a href="#&#x4EE3;&#x7801;&#x5F52;&#x5C5E;"></a>&#x4EE3;&#x7801;&#x5F52;&#x5C5E;</h2>
<p>&#x5B9E;&#x9A8C;&#x80FD;&#x529B;&#x4E0D;&#x8FDB;&#x5165; <code>fe-code-agent</code> &#x4E3B;&#x670D;&#x52A1;&#xFF0C;&#x5F53;&#x524D;&#x6309;&#x8FD0;&#x884C;&#x8FB9;&#x754C;&#x62C6;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">workbench/services/coding_agent
&#x251C;&#x2500;&#x2500; core
&#x2502;   &#x2514;&#x2500;&#x2500; Decision Event / Execution Report / Run Store
&#x251C;&#x2500;&#x2500; rn_page
&#x2502;   &#x2514;&#x2500;&#x2500; RN Material Catalog &#x4E0E;&#x67E5;&#x8BE2;
&#x251C;&#x2500;&#x2500; mcp
&#x2502;   &#x2514;&#x2500;&#x2500; Core &#x4E0E; RN Page Profile
&#x2514;&#x2500;&#x2500; skills/rn-screenshot-to-page

web-affiliate-rn/src/material-lab
&#x251C;&#x2500;&#x2500; Material Catalog
&#x251C;&#x2500;&#x2500; &#x771F;&#x5B9E; RN Fixture
&#x2514;&#x2500;&#x2500; Native Candidate Board

Langfuse
&#x2514;&#x2500;&#x2500; Turn Traces&#x3001;Session &#x805A;&#x5408;&#x4E0E;&#x4EBA;&#x5DE5;&#x8BC4;&#x5206;
</code></pre>
<p>&#x901A;&#x7528; MCP &#x80FD;&#x529B;&#x4E0E; RN &#x9875;&#x9762;&#x4E13;&#x5C5E;&#x80FD;&#x529B;&#x4F4D;&#x4E8E;&#x540C;&#x4E00; Workbench &#x5DE5;&#x7A0B;&#xFF0C;&#x4F46;&#x901A;&#x8FC7;&#x72EC;&#x7ACB;&#x6A21;&#x5757;&#x548C; HTTP &#x7AEF;&#x70B9;&#x66B4;&#x9732;&#x3002;Skill &#x7684;&#x552F;&#x4E00;&#x6E90;&#x7801;&#x4F4D;&#x4E8E; Workbench&#xFF0C;&#x901A;&#x8FC7;&#x94FE;&#x63A5;&#x5B89;&#x88C5;&#x5230; <code>~/.codex/skills</code>&#x3002;Material MCP &#x4F7F;&#x7528;&#x72EC;&#x7ACB; uv &#x73AF;&#x5883;&#x8FD0;&#x884C;&#xFF0C;&#x8BFB;&#x53D6; RN &#x4ED3;&#x5E93;&#x4E2D;&#x7684; Catalog&#xFF0C;&#x4F46;&#x4E0D;&#x5199;&#x5165; RN &#x9875;&#x9762;&#x3002;</p>
<p>&#x6B64;&#x524D;&#x4F4D;&#x4E8E; <code>fe-code-agent/modules/rn-visual-material-agent</code> &#x7684;&#x4E34;&#x65F6; TypeScript &#x6A21;&#x5757;&#x5DF2;&#x7ECF;&#x8FC1;&#x51FA;&#x3002;</p>
<h2 id="Codex Execution Trace &#x4E0E;&#x7ED3;&#x679C;&#x8BC4;&#x5206;"><a href="#Codex Execution Trace &#x4E0E;&#x7ED3;&#x679C;&#x8BC4;&#x5206;"></a>Codex Execution Trace &#x4E0E;&#x7ED3;&#x679C;&#x8BC4;&#x5206;</h2>
<p>Direct &#x6267;&#x884C;&#x4E0D;&#x80FD;&#x6210;&#x4E3A;&#x9ED1;&#x76D2;&#xFF0C;&#x4F46; Trace &#x4E5F;&#x4E0D;&#x7B49;&#x4E8E;&#x4FDD;&#x5B58;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x601D;&#x7EF4;&#x94FE;&#x3002;</p>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4F7F;&#x7528; Langfuse &#x8BB0;&#x5F55;&#x53EF;&#x89C2;&#x5BDF;&#x3001;&#x53EF;&#x590D;&#x6838;&#x7684;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x8F93;&#x5165;
&#x7B80;&#x77ED;&#x8BA1;&#x5212;
&#x8BFB;&#x53D6;&#x8FC7;&#x7684;&#x5173;&#x952E;&#x6587;&#x4EF6;&#x548C;&#x8C03;&#x7528;&#x8FC7;&#x7684;&#x5DE5;&#x5177;
&#x5173;&#x952E;&#x53D1;&#x73B0;
&#x7EC4;&#x4EF6;&#x4E0E;&#x5B9E;&#x73B0;&#x51B3;&#x7B56;&#x53CA;&#x5176;&#x8BC1;&#x636E;
&#x4EE3;&#x7801;&#x4FEE;&#x6539;
&#x8FD0;&#x884C;&#x4E0E;&#x9A8C;&#x8BC1;&#x7ED3;&#x679C;
&#x5931;&#x8D25;&#x70B9;&#x548C;&#x4ECD;&#x4E0D;&#x786E;&#x5B9A;&#x7684;&#x5185;&#x5BB9;
</code></pre>
<p>&#x4E00;&#x4E2A;&#x9875;&#x9762;&#x8FD8;&#x539F;&#x4EFB;&#x52A1;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB; Codex thread&#x3002;Langfuse &#x4E3A;&#x6BCF;&#x4E2A; Turn &#x5EFA;&#x7ACB;&#x4E00;&#x6761; Trace&#xFF0C;&#x5E76;&#x7528;&#x5D4C;&#x5957; Span &#x8BB0;&#x5F55;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x3001;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x3001;Token &#x548C;&#x8017;&#x65F6;&#xFF1B;&#x540C;&#x4E00; thread &#x7684; Trace &#x901A;&#x8FC7;&#x76F8;&#x540C; <code>sessionId</code> &#x805A;&#x5408;&#x3002;Codex &#x5B8C;&#x6210;&#x540E;&#x4ECD;&#x8F93;&#x51FA;&#x4E00;&#x4EFD;&#x7B80;&#x77ED; Trace Summary&#xFF0C;&#x8865;&#x5145;&#x7EC4;&#x4EF6;&#x9009;&#x62E9;&#x4F9D;&#x636E;&#x3001;&#x6700;&#x7EC8;&#x4FEE;&#x6539;&#x548C;&#x9A8C;&#x8BC1;&#x7ED3;&#x8BBA;&#x3002;</p>
<p>Trace &#x4E0D;&#x7B49;&#x4E8E;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x9010;&#x5B57;&#x601D;&#x7EF4;&#x94FE;&#xFF0C;&#x4E5F;&#x4E0D;&#x5355;&#x72EC;&#x4EE3;&#x8868;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x3002;&#x5B8C;&#x6574;&#x8BC1;&#x636E;&#x7531;&#x4E09;&#x90E8;&#x5206;&#x7EC4;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">Langfuse Session&#xFF1A;&#x6309; \`sessionId\` &#x805A;&#x5408;&#x7684; Turn Traces
Git Diff / &#x547D;&#x4EE4;&#x7ED3;&#x679C; / RN &#x622A;&#x56FE;&#xFF1A;&#x5DE5;&#x7A0B;&#x548C;&#x89C6;&#x89C9;&#x8BC1;&#x636E;
Session Score&#xFF1A;&#x4EBA;&#x5DE5;&#x7ED3;&#x679C;&#x5224;&#x65AD;
</code></pre>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x81EA;&#x5EFA; Trace &#x9875;&#x9762;&#x548C;&#x57CB;&#x70B9;&#x7CFB;&#x7EDF;&#xFF0C;&#x76F4;&#x63A5;&#x4F7F;&#x7528; Langfuse Codex Plugin&#x3002;</p>
<h2 id="&#x4E0B;&#x4E00;&#x6B65;&#xFF1A;&#x4E09;&#x7EBF;&#x5E76;&#x884C;"><a href="#&#x4E0B;&#x4E00;&#x6B65;&#xFF1A;&#x4E09;&#x7EBF;&#x5E76;&#x884C;"></a>&#x4E0B;&#x4E00;&#x6B65;&#xFF1A;&#x4E09;&#x7EBF;&#x5E76;&#x884C;</h2>
<p>&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x51C6;&#x5907;&#x4E0A;&#x7EBF;&#x7684;&#x771F;&#x5B9E; RN &#x9875;&#x9762;&#xFF1A;</p>
<pre><code class="language-text">Schema &#x8FC1;&#x79FB;&#xFF1A;&#x4EE5; Web &#x73B0;&#x6709;&#x94FE;&#x8DEF;&#x4E3A;&#x57FA;&#x7840;&#x5C3D;&#x5FEB;&#x5B8C;&#x6210; RN &#x9875;&#x9762;
Direct &#x63A2;&#x7D22;&#xFF1A;&#x5C06;&#x622A;&#x56FE;&#x3001;&#x9700;&#x6C42;&#x548C; RN &#x4ED3;&#x5E93;&#x4EA4;&#x7ED9; Codex&#xFF0C;&#x4FDD;&#x7559;&#x771F;&#x5B9E;&#x6837;&#x672C;
&#x516C;&#x5171;&#x57FA;&#x7840;&#xFF1A;&#x540C;&#x6B65;&#x9A8C;&#x8BC1; Trace&#x3001;Material &#x5448;&#x73B0;&#x548C;&#x7ED3;&#x679C;&#x8BC4;&#x5206;
</code></pre>
<p>&#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x90FD;&#x5E94;&#x7559;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-text">&#x6700;&#x7EC8;&#x4EE3;&#x7801;
RN &#x9875;&#x9762;&#x622A;&#x56FE;
Langfuse Session / sessionId
&#x4EBA;&#x5DE5;&#x8BC4;&#x5206;&#x4E0E;&#x95EE;&#x9898;&#x7ED3;&#x8BBA;
</code></pre>
<p>&#x5F53;&#x524D;&#x4F18;&#x5148;&#x4FDD;&#x8BC1; Schema &#x8FC1;&#x79FB;&#x5C3D;&#x5FEB;&#x51FA;&#x7ED3;&#x679C;&#xFF0C;&#x540C;&#x65F6;&#x907F;&#x514D; Direct &#x548C;&#x516C;&#x5171;&#x57FA;&#x7840;&#x505C;&#x6B62;&#x63A8;&#x8FDB;&#x3002;&#x5F85;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&#x8DB3;&#x591F;&#x540E;&#xFF0C;&#x518D;&#x786E;&#x5B9A; Schema &#x4E0E; Codex &#x7684;&#x878D;&#x5408;&#x65B9;&#x5F0F;&#x3002;</p>
<h2 id="&#x5224;&#x65AD;&#x6807;&#x51C6;"><a href="#&#x5224;&#x65AD;&#x6807;&#x51C6;"></a>&#x5224;&#x65AD;&#x6807;&#x51C6;</h2>
<p>&#x53EA;&#x770B;&#x4E94;&#x4E2A;&#x7ED3;&#x679C;&#xFF1A;</p>
<ul>
<li>&#x9875;&#x9762;&#x89C6;&#x89C9;&#x662F;&#x5426;&#x63A5;&#x8FD1;&#x8BBE;&#x8BA1;&#x7A3F;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x662F;&#x5426;&#x6EE1;&#x8DB3;&#x9700;&#x6C42;&#x5E76;&#x80FD;&#x591F;&#x8FD0;&#x884C;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x9700;&#x8981;&#x4FEE;&#x6B63;&#x591A;&#x5C11;&#x6B21;&#xFF1B;</li>
<li>&#x5B8C;&#x6210;&#x8017;&#x65F6;&#x662F;&#x5426;&#x4E0B;&#x964D;&#x3002;</li>
<li>&#x5B8C;&#x6210; token &#x662F;&#x5426;&#x4E0B;&#x964D;&#x3002;</li>
</ul>
<p>&#x5982;&#x679C;&#x67D0;&#x9879; Meta&#x3001;Mapping&#x3001;Todo &#x6216; Tool &#x4E0D;&#x80FD;&#x7A33;&#x5B9A;&#x6539;&#x5584;&#x4EE5;&#x4E0A;&#x7ED3;&#x679C;&#xFF0C;&#x5C31;&#x4E0D;&#x4F5C;&#x4E3A;&#x9ED8;&#x8BA4;&#x4E0A;&#x4E0B;&#x6587;&#x6216;&#x80FD;&#x529B;&#x63A5;&#x5165;&#x3002;</p>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p>&#x63A8;&#x8FDB;&#x65B9;&#x5F0F;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x5F53;&#x524D;&#x4EE5; Web Schema &#x8FC1;&#x79FB;&#x4F5C;&#x4E3A;&#x4E3B;&#x8981;&#x4EA4;&#x4ED8;&#x7EBF;&#xFF0C;Codex Direct &#x4F5C;&#x4E3A;&#x5E76;&#x884C;&#x63A2;&#x7D22;&#x7EBF;&#xFF0C;Trace&#x3001;Material &#x5448;&#x73B0;&#x548C;&#x8BC4;&#x6D4B;&#x4F5C;&#x4E3A;&#x516C;&#x5171;&#x57FA;&#x7840;&#x7EBF;&#x3002;&#x4E09;&#x6761;&#x7EBF;&#x5148;&#x5171;&#x540C;&#x4EA7;&#x51FA;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x54EA;&#x4E9B; Schema &#x80FD;&#x529B;&#x8FC1;&#x79FB;&#x4E3A; Agent Tool&#xFF0C;&#x4EE5;&#x53CA;&#x6700;&#x7EC8;&#x5982;&#x4F55;&#x878D;&#x5408;&#x3002;</p>
</blockquote>
<h2 id="&#x540E;&#x7EED;&#x542F;&#x53D1;&#xFF1A;&#x4EFB;&#x52A1;&#x62C6;&#x89E3;&#x4E0E;&#x9A8C;&#x6536;"><a href="#&#x540E;&#x7EED;&#x542F;&#x53D1;&#xFF1A;&#x4EFB;&#x52A1;&#x62C6;&#x89E3;&#x4E0E;&#x9A8C;&#x6536;"></a>&#x540E;&#x7EED;&#x542F;&#x53D1;&#xFF1A;&#x4EFB;&#x52A1;&#x62C6;&#x89E3;&#x4E0E;&#x9A8C;&#x6536;</h2>
<p>Todo &#x53EF;&#x80FD;&#x4E5F;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x7406;&#x89E3;&#xFF1A;&#x4E0D;&#x5FC5;&#x7528;&#x4E00;&#x4EFD;&#x56FA;&#x5B9A;&#x5217;&#x8868;&#x540C;&#x65F6;&#x63CF;&#x8FF0;&#x9700;&#x6C42;&#x3001;&#x7EA6;&#x675F; Agent &#x6267;&#x884C;&#x5E76;&#x670D;&#x52A1;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x3002;</p>
<p>&#x66F4;&#x503C;&#x5F97;&#x7EE7;&#x7EED;&#x89C2;&#x5BDF;&#x7684;&#x65B9;&#x5411;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x7A33;&#x5B9A;&#x5B9A;&#x4E49;&#x201C;&#x505A;&#x6210;&#x4EC0;&#x4E48;&#x201D;
&#x2192; Agent &#x6839;&#x636E;&#x771F;&#x5B9E;&#x4ED3;&#x5E93;&#x52A8;&#x6001;&#x51B3;&#x5B9A;&#x201C;&#x600E;&#x4E48;&#x505A;&#x201D;
&#x2192; &#x4EBA;&#x6839;&#x636E;&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#x548C;&#x8BC1;&#x636E;&#x5224;&#x65AD;&#x201C;&#x662F;&#x5426;&#x505A;&#x6210;&#x201D;
</code></pre>
<p>&#x5F53;&#x524D;&#x4E0D;&#x5EFA;&#x8BBE; Task Schema&#x3001;Todo &#x751F;&#x6210;&#x5668;&#x6216;&#x9A8C;&#x6536;&#x5E73;&#x53F0;&#x3002;&#x5148;&#x5728;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x4EFB;&#x52A1;&#x4E2D;&#x89C2;&#x5BDF;&#xFF1A;&#x54EA;&#x4E9B;&#x4FE1;&#x606F;&#x9700;&#x8981;&#x63D0;&#x524D;&#x660E;&#x786E;&#xFF0C;Agent &#x901A;&#x5E38;&#x5982;&#x4F55;&#x62C6;&#x89E3;&#xFF0C;&#x4EBA;&#x6700;&#x7EC8;&#x4F9D;&#x8D56;&#x54EA;&#x4E9B;&#x8BC1;&#x636E;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x6C89;&#x6DC0;&#x4E3A;&#x7A33;&#x5B9A;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x80FD;&#x529B;&#x7684;&#x4E0B;&#x4E00;&#x9636;&#x6BB5;&#x65B9;&#x6848;&#x89C1;<a href="./RN%20Screenshot%20Perception%20Layer%EF%BC%9A%E4%B8%8B%E4%B8%80%E9%98%B6%E6%AE%B5%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88.md">&#x300A;RN Screenshot Perception Layer&#xFF1A;&#x4ECE;&#x201C;&#x6A21;&#x578B;&#x770B;&#x56FE;&#x201D;&#x5230;&#x53EF;&#x8BC4;&#x6D4B;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;&#x300B;</a>&#x3002;</p>
`,F=[{level:1,title:"RN Screenshot-to-Page Agent 路径优化：技术方案思考",children:[{level:2,title:"当前现象",children:[]},{level:2,title:"核心取舍",children:[]},{level:2,title:"为什么并行探索 Direct",children:[]},{level:2,title:"输入边界：提取 RN 事实，暂不预拆 Todo（可选）",children:[]},{level:2,title:"整体方案",children:[]},{level:2,title:"Material 能力的正确位置",children:[{level:3,title:"普通仓库如何 Material 化",children:[]},{level:3,title:"从组件复用扩展到工程复用",children:[]}]},{level:2,title:"保留的最小辅助能力",children:[]},{level:2,title:"代码归属",children:[]},{level:2,title:"Codex Execution Trace 与结果评分",children:[]},{level:2,title:"下一步：三线并行",children:[]},{level:2,title:"判断标准",children:[]},{level:2,title:"结论",children:[]},{level:2,title:"后续启发：任务拆解与验收",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
