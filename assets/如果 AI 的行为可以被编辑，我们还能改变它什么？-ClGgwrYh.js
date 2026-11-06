const x={},F=`<!-- 写作锚点
读者收获：理解从单方向消融到多方向、部分干预、可逆编辑和更广泛行为控制的研究设想。
核心判断：拒绝移除只是一个具体入口，更细致的行为控制仍需要兼顾能力保留、安全判断与对内部机制的理解。
如何推进：沿第一份讨论的第七至九部分，保留五个发展方向、行为控制方法序列和六问总结，最后转向保护问题。
-->
<h1 id="&#x5982;&#x679C; AI &#x7684;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x88AB;&#x7F16;&#x8F91;&#xFF0C;&#x6211;&#x4EEC;&#x8FD8;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5982;&#x679C; AI &#x7684;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x88AB;&#x7F16;&#x8F91;&#xFF0C;&#x6211;&#x4EEC;&#x8FD8;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5982;&#x679C; AI &#x7684;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x88AB;&#x7F16;&#x8F91;&#xFF0C;&#x6211;&#x4EEC;&#x8FD8;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x4EC0;&#x4E48;&#xFF1F;</h1>
<p><a href="./%E5%8F%AA%E5%88%A0%E4%B8%80%E4%B8%AA%E6%8B%92%E7%BB%9D%E6%96%B9%E5%90%91%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%9F%E4%BC%9A%E5%BD%B1%E5%93%8D%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%85%B6%E4%BB%96%E8%83%BD%E5%8A%9B%EF%BC%9F.md">&#x4E0A;&#x4E00;&#x7BC7;</a>&#x8BA8;&#x8BBA;&#x4E86; Abliteration &#x7684;&#x5C40;&#x9650;&#xFF1A;&#x5C11;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x5E76;&#x4E0D;&#x7B49;&#x4E8E;&#x53EA;&#x5C11;&#x4E00;&#x79CD;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x90A3;&#x4E48;&#xFF0C;&#x672A;&#x6765;&#x7684;&#x76EE;&#x6807;&#x8FD8;&#x5E94;&#x8BE5;&#x662F;&#x5F7B;&#x5E95;&#x5220;&#x9664;&#x62D2;&#x7EDD;&#x5417;&#xFF1F;&#x5982;&#x679C;&#x6539;&#x6210;&#x66F4;&#x7CBE;&#x7EC6;&#x7684;&#x63A7;&#x5236;&#xFF0C;&#x6211;&#x4EEC;&#x8FD8;&#x80FD;&#x505A;&#x4EC0;&#x4E48;&#xFF1F;</p>
<h2 id="&#x4E00;&#x3001;&#x672A;&#x6765; Abliteration &#x4F1A;&#x600E;&#x4E48;&#x53D1;&#x5C55;&#xFF1F;"><a href="#&#x4E00;&#x3001;&#x672A;&#x6765; Abliteration &#x4F1A;&#x600E;&#x4E48;&#x53D1;&#x5C55;&#xFF1F;"></a>&#x4E00;&#x3001;&#x672A;&#x6765; Abliteration &#x4F1A;&#x600E;&#x4E48;&#x53D1;&#x5C55;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x53EF;&#x4EE5;&#x4ECE;&#x4E94;&#x4E2A;&#x65B9;&#x5411;&#x89C2;&#x5BDF;&#x3002;</p>
<h3 id="1. &#x4ECE;&#x5355;&#x65B9;&#x5411;&#x6D88;&#x878D;&#x53D1;&#x5C55;&#x5230;&#x591A;&#x65B9;&#x5411;&#x6D88;&#x878D;"><a href="#1. &#x4ECE;&#x5355;&#x65B9;&#x5411;&#x6D88;&#x878D;&#x53D1;&#x5C55;&#x5230;&#x591A;&#x65B9;&#x5411;&#x6D88;&#x878D;"></a>1. &#x4ECE;&#x5355;&#x65B9;&#x5411;&#x6D88;&#x878D;&#x53D1;&#x5C55;&#x5230;&#x591A;&#x65B9;&#x5411;&#x6D88;&#x878D;</h3>
<p>&#x8FD9;&#x662F;&#x6700;&#x76F4;&#x63A5;&#x7684;&#x6280;&#x672F;&#x6F14;&#x8FDB;&#x3002;</p>
<p>&#x65E9;&#x671F;&#x7814;&#x7A76;&#x4E3B;&#x8981;&#x5BFB;&#x627E;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF1A;</p>
<pre><code class="language-text">r
</code></pre>
<p>&#x540E;&#x7EED;&#x53EF;&#x80FD;&#x5BFB;&#x627E;&#x4E00;&#x7EC4;&#x65B9;&#x5411;&#xFF1A;</p>
<pre><code class="language-text">R = [r1, r2, &#x2026;, rk]
</code></pre>
<p>&#x518D;&#x901A;&#x8FC7;&#x77E9;&#x9635;&#x6295;&#x5F71;&#xFF1A;</p>
<pre><code class="language-text">P = I - R &#xD7; (R&#x1D40; &#xD7; R)&#x207B;&#xB9; &#xD7; R&#x1D40;
</code></pre>
<p>&#x79FB;&#x9664;&#x8FD9;&#x4E9B;&#x65B9;&#x5411;&#x6240;&#x5F20;&#x6210;&#x7684;&#x5B50;&#x7A7A;&#x95F4;&#x3002;</p>
<p>&#x5176;&#x4E2D; &#x1D40; &#x8868;&#x793A;&#x8F6C;&#x7F6E;&#xFF0C;&#x207B;&#xB9; &#x8868;&#x793A;&#x6C42;&#x9006;&#x3002;&#x8FD9;&#x91CC;&#x5047;&#x8BBE; R &#x7684;&#x5217;&#x5411;&#x91CF;&#x7EBF;&#x6027;&#x72EC;&#x7ACB;&#xFF1B;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x4E2D;&#x8FD8;&#x9700;&#x8981;&#x5904;&#x7406;&#x65B9;&#x5411;&#x76F8;&#x5173;&#x6027;&#x548C;&#x6570;&#x503C;&#x7A33;&#x5B9A;&#x6027;&#x3002;</p>
<p>&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x66F4;&#x7EC6;&#x81F4;&#x5730;&#x7814;&#x7A76;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x5185;&#x5BB9;&#x5B89;&#x5168;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x9690;&#x79C1;&#x76F8;&#x5173;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x533B;&#x7597;&#x98CE;&#x9669;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x7279;&#x5B9A;&#x4EFB;&#x52A1;&#x4E2D;&#x7684;&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;&#x3002;</li>
</ul>
<p>&#x4F46;&#x65B9;&#x5411;&#x8D8A;&#x591A;&#xFF0C;&#x8BEF;&#x4F24;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#x7684;&#x98CE;&#x9669;&#x4E5F;&#x53EF;&#x80FD;&#x8D8A;&#x5927;&#x3002;</p>
<h3 id="2. &#x4ECE;&#x76F4;&#x63A5;&#x5220;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x7CBE;&#x7EC6;&#x5316;&#x6A21;&#x578B;&#x7F16;&#x8F91;"><a href="#2. &#x4ECE;&#x76F4;&#x63A5;&#x5220;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x7CBE;&#x7EC6;&#x5316;&#x6A21;&#x578B;&#x7F16;&#x8F91;"></a>2. &#x4ECE;&#x76F4;&#x63A5;&#x5220;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x7CBE;&#x7EC6;&#x5316;&#x6A21;&#x578B;&#x7F16;&#x8F91;</h3>
<p>&#x672A;&#x6765;&#x53EF;&#x80FD;&#x91C7;&#x7528;&#x66F4;&#x7CBE;&#x7EC6;&#x7684;&#x63A7;&#x5236;&#xFF1A;</p>
<ul>
<li>&#x53EA;&#x5728;&#x7279;&#x5B9A;&#x5C42;&#x8FDB;&#x884C;&#x4FEE;&#x6539;&#x3002;</li>
<li>&#x53EA;&#x5728;&#x7279;&#x5B9A; Token &#x4F4D;&#x7F6E;&#x8FDB;&#x884C;&#x4FEE;&#x6539;&#x3002;</li>
<li>&#x6839;&#x636E;&#x8F93;&#x5165;&#x4E0A;&#x4E0B;&#x6587;&#x52A8;&#x6001;&#x63A7;&#x5236;&#x3002;</li>
<li>&#x53EA;&#x964D;&#x4F4E;&#x67D0;&#x79CD;&#x884C;&#x4E3A;&#x7684;&#x6FC0;&#x6D3B;&#x5F3A;&#x5EA6;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B8C;&#x5168;&#x5220;&#x9664;&#x3002;</li>
</ul>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x5BF9;&#x524D;&#x6587;&#x5F52;&#x4E00;&#x5316;&#x540E;&#x7684;&#x65B9;&#x5411; r_unit&#xFF1A;</p>
<pre><code class="language-text">h&apos; = h - &#x3B1; &#xD7; (h &#xB7; r_unit) &#xD7; r_unit
</code></pre>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<pre><code class="language-text">0 &#x2264; &#x3B1; &#x2264; 1
</code></pre>
<p>&#x5F53; &#x3B1; = 1 &#x65F6;&#xFF0C;&#x662F;&#x5B8C;&#x6574;&#x6D88;&#x878D;&#x3002;</p>
<p>&#x5F53; 0 &lt; &#x3B1; &lt; 1 &#x65F6;&#xFF0C;&#x53EA;&#x662F;&#x90E8;&#x5206;&#x524A;&#x5F31;&#x3002;</p>
<p>&#x8FD9;&#x6837;&#x5C31;&#x6709;&#x53EF;&#x80FD;&#x5728;&#x51CF;&#x5C11;&#x8BEF;&#x62D2;&#x7EDD;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x4FDD;&#x7559;&#x90E8;&#x5206;&#x5B89;&#x5168;&#x5224;&#x65AD;&#x80FD;&#x529B;&#x3002;</p>
<h3 id="3. &#x4ECE;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x53D1;&#x5C55;&#x5230;&#x53EF;&#x9006;&#x7684;&#x6A21;&#x578B;&#x7F16;&#x8F91;"><a href="#3. &#x4ECE;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x53D1;&#x5C55;&#x5230;&#x53EF;&#x9006;&#x7684;&#x6A21;&#x578B;&#x7F16;&#x8F91;"></a>3. &#x4ECE;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x53D1;&#x5C55;&#x5230;&#x53EF;&#x9006;&#x7684;&#x6A21;&#x578B;&#x7F16;&#x8F91;</h3>
<p>&#x76EE;&#x524D;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6743;&#x91CD;&#xFF0C;&#x901A;&#x5E38;&#x610F;&#x5473;&#x7740;&#x4EA7;&#x751F;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6A21;&#x578B;&#x6587;&#x4EF6;&#x3002;</p>
<p>&#x672A;&#x6765;&#x66F4;&#x7406;&#x60F3;&#x7684;&#x65B9;&#x5F0F;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x4FDD;&#x5B58;&#x539F;&#x59CB;&#x6A21;&#x578B;&#x3002;</li>
<li>&#x4FDD;&#x5B58;&#x7F16;&#x8F91;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x4FDD;&#x5B58;&#x7F16;&#x8F91;&#x5F3A;&#x5EA6;&#x3002;</li>
<li>&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x52A8;&#x6001;&#x52A0;&#x8F7D;&#x4E0D;&#x540C;&#x7684;&#x884C;&#x4E3A;&#x914D;&#x7F6E;&#x3002;</li>
<li>&#x9700;&#x8981;&#x65F6;&#x6062;&#x590D;&#x539F;&#x59CB;&#x6A21;&#x578B;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x6709;&#x5229;&#x4E8E;&#x4F01;&#x4E1A;&#x90E8;&#x7F72;&#x3001;&#x6A21;&#x578B;&#x7248;&#x672C;&#x7BA1;&#x7406;&#x548C;&#x5B89;&#x5168;&#x5BA1;&#x8BA1;&#x3002;</p>
<h3 id="4. &#x4ECE;&#x79FB;&#x9664;&#x62D2;&#x7EDD;&#x53D1;&#x5C55;&#x5230;&#x66F4;&#x5E7F;&#x6CDB;&#x7684;&#x884C;&#x4E3A;&#x7F16;&#x8F91;"><a href="#4. &#x4ECE;&#x79FB;&#x9664;&#x62D2;&#x7EDD;&#x53D1;&#x5C55;&#x5230;&#x66F4;&#x5E7F;&#x6CDB;&#x7684;&#x884C;&#x4E3A;&#x7F16;&#x8F91;"></a>4. &#x4ECE;&#x79FB;&#x9664;&#x62D2;&#x7EDD;&#x53D1;&#x5C55;&#x5230;&#x66F4;&#x5E7F;&#x6CDB;&#x7684;&#x884C;&#x4E3A;&#x7F16;&#x8F91;</h3>
<p>Abliteration &#x7684;&#x6280;&#x672F;&#x57FA;&#x7840;&#x5E76;&#x4E0D;&#x5C40;&#x9650;&#x4E8E;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5176;&#x4ED6;&#x884C;&#x4E3A;&#x4E5F;&#x80FD;&#x591F;&#x5728;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x627E;&#x5230;&#x76F8;&#x5BF9;&#x7A33;&#x5B9A;&#x3001;&#x53EF;&#x8BC6;&#x522B;&#x7684;&#x8868;&#x793A;&#x65B9;&#x5411;&#xFF0C;&#x90A3;&#x4E48;&#x7C7B;&#x4F3C;&#x6280;&#x672F;&#x5C31;&#x53EF;&#x80FD;&#x5E94;&#x7528;&#x4E8E;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7814;&#x7A76;&#x65B9;&#x5411;</th>
<th>&#x53EF;&#x80FD;&#x7684;&#x7528;&#x9014;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Style Editing</td>
<td>&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x8BED;&#x8A00;&#x98CE;&#x683C;</td>
</tr>
<tr>
<td>Persona Editing</td>
<td>&#x4FEE;&#x6539;&#x89D2;&#x8272;&#x6216;&#x4EBA;&#x683C;&#x503E;&#x5411;</td>
</tr>
<tr>
<td>Bias Editing</td>
<td>&#x8C03;&#x6574;&#x67D0;&#x4E9B;&#x504F;&#x89C1;&#x76F8;&#x5173;&#x8868;&#x793A;</td>
</tr>
<tr>
<td>Honesty Editing</td>
<td>&#x7814;&#x7A76;&#x4E0E;&#x8BDA;&#x5B9E;&#x6027;&#x76F8;&#x5173;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;</td>
</tr>
<tr>
<td>Knowledge Editing</td>
<td>&#x4FEE;&#x6539;&#x7279;&#x5B9A;&#x77E5;&#x8BC6;&#x7684;&#x8868;&#x8FBE;&#x6216;&#x5173;&#x8054;</td>
</tr>
<tr>
<td>Safety Editing</td>
<td>&#x66F4;&#x7CBE;&#x7EC6;&#x5730;&#x63A7;&#x5236;&#x5B89;&#x5168;&#x884C;&#x4E3A;</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x4E9B;&#x4EFB;&#x52A1;&#x7684;&#x96BE;&#x5EA6;&#x5E76;&#x4E0D;&#x4E00;&#x6837;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x4FEE;&#x6539;&#x8BED;&#x8A00;&#x98CE;&#x683C;&#x53EF;&#x80FD;&#x76F8;&#x5BF9;&#x5BB9;&#x6613;&#xFF0C;&#x4F46;&#x4FEE;&#x6539;&#x77E5;&#x8BC6;&#x800C;&#x4E0D;&#x7834;&#x574F;&#x76F8;&#x5173;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x5C31;&#x56F0;&#x96BE;&#x5F97;&#x591A;&#x3002;</p>
<h3 id="5. &#x4ECE;&#x5355;&#x7EAF;&#x8FFD;&#x6C42;&#x79FB;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x5B89;&#x5168;&#x4E0E;&#x53EF;&#x63A7;&#x6027;&#x7684;&#x5E73;&#x8861;"><a href="#5. &#x4ECE;&#x5355;&#x7EAF;&#x8FFD;&#x6C42;&#x79FB;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x5B89;&#x5168;&#x4E0E;&#x53EF;&#x63A7;&#x6027;&#x7684;&#x5E73;&#x8861;"></a>5. &#x4ECE;&#x5355;&#x7EAF;&#x8FFD;&#x6C42;&#x79FB;&#x9664;&#x53D1;&#x5C55;&#x5230;&#x5B89;&#x5168;&#x4E0E;&#x53EF;&#x63A7;&#x6027;&#x7684;&#x5E73;&#x8861;</h3>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x8FD9;&#x662F;&#x6700;&#x91CD;&#x8981;&#x7684;&#x957F;&#x671F;&#x65B9;&#x5411;&#x3002;</p>
<p>Abliteration &#x6700;&#x521D;&#x5438;&#x5F15;&#x4EBA;&#x7684;&#x5730;&#x65B9;&#x662F;&#xFF1A;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x5185;&#x90E8;&#x8868;&#x793A;&#x6765;&#x6539;&#x53D8;&#x3002;</p>
<p>&#x4F46;&#x672A;&#x6765;&#x66F4;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x76EE;&#x6807;&#xFF0C;&#x53EF;&#x80FD;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x51C6;&#x786E;&#x5730;&#x5224;&#x65AD;&#xFF1A;</p>
<ul>
<li>&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#x5E94;&#x8BE5;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#x4E0D;&#x5E94;&#x8BE5;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#x9700;&#x8981;&#x8865;&#x5145;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li>&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x5B89;&#x5168;&#x7684;&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x3002;</li>
</ul>
<p>&#x76EE;&#x6807;&#x53EF;&#x80FD;&#x4ECE; Refusal Removal&#xFF08;&#x62D2;&#x7EDD;&#x79FB;&#x9664;&#xFF09;&#x8F6C;&#x5411; Refusal Control&#xFF08;&#x62D2;&#x7EDD;&#x63A7;&#x5236;&#xFF09;&#x3002;</p>
<p>&#x8FD9;&#x4F1A;&#x6BD4;&#x7B80;&#x5355;&#x5220;&#x9664;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x66F4;&#x6709;&#x7814;&#x7A76;&#x4EF7;&#x503C;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;Abliteration &#x548C;&#x672A;&#x6765;&#x5927;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x4E4B;&#x95F4;&#x6709;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;"><a href="#&#x4E8C;&#x3001;Abliteration &#x548C;&#x672A;&#x6765;&#x5927;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x4E4B;&#x95F4;&#x6709;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;"></a>&#x4E8C;&#x3001;Abliteration &#x548C;&#x672A;&#x6765;&#x5927;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x4E4B;&#x95F4;&#x6709;&#x4EC0;&#x4E48;&#x5173;&#x7CFB;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x53EF;&#x4EE5;&#x628A; Abliteration &#x653E;&#x5728;&#x4E00;&#x4E2A;&#x66F4;&#x5927;&#x7684;&#x6280;&#x672F;&#x8D8B;&#x52BF;&#x91CC;&#x7406;&#x89E3;&#xFF1A;</p>
<p>&#x5927;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x6B63;&#x5728;&#x4ECE;&#x300C;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF0C;&#x8BA9;&#x5B83;&#x8868;&#x73B0;&#x51FA;&#x67D0;&#x79CD;&#x884C;&#x4E3A;&#x300D;&#xFF0C;&#x9010;&#x6E10;&#x6269;&#x5C55;&#x5230;&#x300C;&#x7406;&#x89E3;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5982;&#x4F55;&#x4EA7;&#x751F;&#x884C;&#x4E3A;&#xFF0C;&#x7136;&#x540E;&#x76F4;&#x63A5;&#x7F16;&#x8F91;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x300D;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x628A;&#x76F8;&#x5173;&#x6280;&#x672F;&#x7684;&#x53D1;&#x5C55;&#x5173;&#x7CFB;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;</p>
<h3 id="LLM &#x884C;&#x4E3A;&#x63A7;&#x5236;&#x6280;&#x672F;&#x6F14;&#x8FDB;"><a href="#LLM &#x884C;&#x4E3A;&#x63A7;&#x5236;&#x6280;&#x672F;&#x6F14;&#x8FDB;"></a>LLM &#x884C;&#x4E3A;&#x63A7;&#x5236;&#x6280;&#x672F;&#x6F14;&#x8FDB;</h3>
<ol>
<li>
<p><strong>Prompt Engineering</strong></p>
<p>&#x901A;&#x8FC7;&#x8F93;&#x5165;&#x6307;&#x4EE4;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</p>
</li>
<li>
<p><strong>SFT / RLHF / DPO</strong></p>
<p>&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x548C;&#x504F;&#x597D;&#x4F18;&#x5316;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</p>
</li>
<li>
<p><strong>Activation Steering / RepE</strong></p>
<p>&#x7814;&#x7A76;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x901A;&#x8FC7;&#x5E72;&#x9884;&#x6FC0;&#x6D3B;&#x63A7;&#x5236;&#x884C;&#x4E3A;&#x3002;</p>
</li>
<li>
<p><strong>Abliteration / Model Editing</strong></p>
<p>&#x5B9A;&#x4F4D;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x3002;</p>
</li>
<li>
<p><strong>Fine-grained Behavioral Control&#xFF08;&#x672A;&#x6765;&#x65B9;&#x5411;&#xFF09;</strong></p>
<p>&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x548C;&#x98CE;&#x9669;&#x52A8;&#x6001;&#x63A7;&#x5236;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#xFF0C;&#x5C3D;&#x91CF;&#x4FDD;&#x7559;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#x3002;</p>
</li>
</ol>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x503C;&#x5F97;&#x7EE7;&#x7EED;&#x60F3;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<p>&#x4EE5;&#x524D;&#x6211;&#x4EEC;&#x8BA4;&#x4E3A;&#x6A21;&#x578B;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x6765;&#x81EA;&#x590D;&#x6742;&#x7684;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#xFF0C;&#x60F3;&#x6539;&#x53D8;&#x5B83;&#x5C31;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x3002;</p>
<p>Abliteration &#x7684;&#x7814;&#x7A76;&#x544A;&#x8BC9;&#x6211;&#x4EEC;&#xFF0C;&#x6709;&#x4E9B;&#x590D;&#x6742;&#x7684;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x53EF;&#x80FD;&#x5177;&#x6709;&#x76F8;&#x5BF9;&#x7B80;&#x5355;&#x7684;&#x5185;&#x90E8;&#x51E0;&#x4F55;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x4F46;&#x540E;&#x7EED;&#x5173;&#x4E8E;&#x591A;&#x65B9;&#x5411;&#x62D2;&#x7EDD;&#x673A;&#x5236;&#x7684;&#x7814;&#x7A76;&#x53C8;&#x63D0;&#x9192;&#x6211;&#x4EEC;&#xFF1A;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x6709;&#x6548;&#x7684;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x7B49;&#x4E8E;&#x5B8C;&#x6574;&#x7406;&#x89E3;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x884C;&#x4E3A;&#x673A;&#x5236;&#x3002;</p>
<p>&#x95EE;&#x9898;&#x7531;&#x6B64;&#x4ECE;&#x300C;&#x5982;&#x4F55;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x300D;&#x63A8;&#x8FDB;&#x5230;&#x4E86;&#x300C;&#x6211;&#x4EEC;&#x7A76;&#x7ADF;&#x5728;&#x591A;&#x5927;&#x7A0B;&#x5EA6;&#x4E0A;&#x7406;&#x89E3;&#x6A21;&#x578B;&#x300D;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x5982;&#x4F55;&#x6B63;&#x786E;&#x7406;&#x89E3; Abliteration&#xFF1F;"><a href="#&#x4E09;&#x3001;&#x5982;&#x4F55;&#x6B63;&#x786E;&#x7406;&#x89E3; Abliteration&#xFF1F;"></a>&#x4E09;&#x3001;&#x5982;&#x4F55;&#x6B63;&#x786E;&#x7406;&#x89E3; Abliteration&#xFF1F;</h2>
<p>&#x6211;&#x628A;&#x6574;&#x4EF6;&#x4E8B;&#x60C5;&#x5F52;&#x7EB3;&#x6210;&#x516D;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x95EE;&#x9898;</th>
<th>&#x6838;&#x5FC3;&#x7B54;&#x6848;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5B83;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</td>
<td>&#x4E00;&#x79CD;&#x901A;&#x8FC7;&#x6D88;&#x9664;&#x62D2;&#x7EDD;&#x76F8;&#x5173;&#x5185;&#x90E8;&#x65B9;&#x5411;&#x6765;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x7684;&#x6280;&#x672F;</td>
</tr>
<tr>
<td>&#x4E3A;&#x4EC0;&#x4E48;&#x51FA;&#x73B0;&#xFF1F;</td>
<td>&#x5E0C;&#x671B;&#x89E3;&#x51B3;&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;&#x3001;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x96BE;&#x4EE5;&#x7CBE;&#x7EC6;&#x63A7;&#x5236;&#x7684;&#x95EE;&#x9898;</td>
</tr>
<tr>
<td>&#x5B83;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</td>
<td>&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x4E0D;&#x9700;&#x8981;&#x5B8C;&#x6574;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x7F16;&#x8F91;&#x65B9;&#x6CD5;</td>
</tr>
<tr>
<td>&#x4E4B;&#x524D;&#x600E;&#x4E48;&#x89E3;&#x51B3;&#xFF1F;</td>
<td>Prompt&#x3001;Jailbreak&#x3001;SFT&#x3001;RLHF&#x3001;DPO &#x7B49;</td>
</tr>
<tr>
<td>&#x5B83;&#x600E;&#x4E48;&#x5B9E;&#x73B0;&#xFF1F;</td>
<td>&#x63D0;&#x53D6;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x5DEE;&#x5F02;&#xFF0C;&#x8BA1;&#x7B97;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x518D;&#x8FDB;&#x884C;&#x6B63;&#x4EA4;&#x6295;&#x5F71;&#x548C;&#x6743;&#x91CD;&#x4FEE;&#x6539;</td>
</tr>
<tr>
<td>&#x5C40;&#x9650;&#x6027;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</td>
<td>&#x62D2;&#x7EDD;&#x673A;&#x5236;&#x53EF;&#x80FD;&#x662F;&#x591A;&#x7EF4;&#x7684;&#xFF0C;&#x53EF;&#x80FD;&#x635F;&#x5BB3;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#xFF0C;&#x4E5F;&#x65E0;&#x6CD5;&#x66FF;&#x4EE3;&#x5B8C;&#x6574;&#x7684;&#x5B89;&#x5168;&#x5224;&#x65AD;</td>
</tr>
</tbody>
</table>
<p>&#x4ECE;&#x6280;&#x672F;&#x4EF7;&#x503C;&#x4E0A;&#x770B;&#xFF0C;&#x6211;&#x8BA4;&#x4E3A; Abliteration &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x6709;&#x542F;&#x53D1;&#x6027;&#x7684;&#x5B9E;&#x9A8C;&#x8BC1;&#x636E;&#xFF1A;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x590D;&#x6742;&#x884C;&#x4E3A;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5185;&#x90E8;&#x8868;&#x793A;&#x7A7A;&#x95F4;&#x7684;&#x51E0;&#x4F55;&#x64CD;&#x4F5C;&#x6765;&#x5E72;&#x9884;&#x3002;</p>
<p>&#x8FD9;&#x5BF9;&#x6A21;&#x578B;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#xFF08;Mechanistic Interpretability&#xFF09;&#x3001;&#x6A21;&#x578B;&#x7F16;&#x8F91;&#xFF08;Model Editing&#xFF09;&#x3001;&#x884C;&#x4E3A;&#x63A7;&#x5236;&#xFF08;Behavior Steering&#xFF09;&#x548C; AI Alignment &#x90FD;&#x6709;&#x7814;&#x7A76;&#x4EF7;&#x503C;&#x3002;</p>
<p>&#x4F46;&#x5982;&#x679C;&#x8FD9;&#x79CD;&#x7F16;&#x8F91;&#x4E5F;&#x80FD;&#x88AB;&#x7528;&#x4E8E;&#x6539;&#x53D8;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#xFF0C;&#x95EE;&#x9898;&#x5C31;&#x4F1A;&#x8F6C;&#x5411;&#x53E6;&#x4E00;&#x8FB9;&#xFF1A;&#x6211;&#x4EEC;&#x5E94;&#x8BE5;&#x600E;&#x6837;&#x4FDD;&#x62A4;&#x6A21;&#x578B;&#xFF1F;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Arditi &#x7B49;&#xFF0C;&#x300A;Refusal in Language Models Is Mediated by a Single Direction&#x300B;&#xFF0C;NeurIPS&#xFF0C;2024&#xFF1A;https://arxiv.org/abs/2406.11717</li>
<li>Wollschl&#xE4;ger &#x7B49;&#xFF0C;&#x300A;The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence&#x300B;&#xFF0C;ICML&#xFF0C;2025&#xFF1A;https://proceedings.mlr.press/v267/wollschlager25a.html</li>
<li>Zou &#x7B49;&#xFF0C;&#x300A;Representation Engineering: A Top-Down Approach to AI Transparency&#x300B;&#xFF0C;2023&#xFF1A;https://arxiv.org/abs/2310.01405</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"如果 AI 的行为可以被编辑，我们还能改变它什么？",children:[{level:2,title:"一、未来 Abliteration 会怎么发展？",children:[{level:3,title:"1. 从单方向消融发展到多方向消融",children:[]},{level:3,title:"2. 从直接删除发展到精细化模型编辑",children:[]},{level:3,title:"3. 从修改模型发展到可逆的模型编辑",children:[]},{level:3,title:"4. 从移除拒绝发展到更广泛的行为编辑",children:[]},{level:3,title:"5. 从单纯追求移除发展到安全与可控性的平衡",children:[]}]},{level:2,title:"二、Abliteration 和未来大模型研究之间有什么关系？",children:[{level:3,title:"LLM 行为控制技术演进",children:[]}]},{level:2,title:"三、如何正确理解 Abliteration？",children:[]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
