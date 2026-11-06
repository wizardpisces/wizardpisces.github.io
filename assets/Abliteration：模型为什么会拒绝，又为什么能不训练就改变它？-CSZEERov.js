const x={},F=`<!-- 写作锚点
读者收获：理解拒绝行为的训练背景，以及从隐藏状态差异到投影、权重修改的完整过程。
核心判断：在相关实验条件下，可以估计拒绝相关方向，再通过内部表示或权重干预改变拒绝行为。
如何推进：沿第一份讨论的导语及第一至三部分，先讲过度拒绝与技术来源，再依次解释方向估计、激活消融和权重正交化。
-->
<h1 id="Abliteration&#xFF1A;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x62D2;&#x7EDD;&#xFF0C;&#x53C8;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4E0D;&#x8BAD;&#x7EC3;&#x5C31;&#x6539;&#x53D8;&#x5B83;&#xFF1F;"><a href="#Abliteration&#xFF1A;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x62D2;&#x7EDD;&#xFF0C;&#x53C8;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4E0D;&#x8BAD;&#x7EC3;&#x5C31;&#x6539;&#x53D8;&#x5B83;&#xFF1F;"></a>Abliteration&#xFF1A;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x62D2;&#x7EDD;&#xFF0C;&#x53C8;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x4E0D;&#x8BAD;&#x7EC3;&#x5C31;&#x6539;&#x53D8;&#x5B83;&#xFF1F;</h1>
<p>**Abliteration&#xFF08;&#x6D88;&#x878D;&#x5F0F;&#x53BB;&#x62D2;&#x7EDD; / &#x62D2;&#x7EDD;&#x673A;&#x5236;&#x6D88;&#x9664;&#xFF09;**&#x662F;&#x5F00;&#x6E90;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x9886;&#x57DF;&#x7684;&#x4E00;&#x79CD;&#x6A21;&#x578B;&#x7F16;&#x8F91;&#x6280;&#x672F;&#x3002;&#x5B83;&#x5E0C;&#x671B;&#x505A;&#x5230;&#x7684;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x5728;&#x4E0D;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#x3001;&#x5C3D;&#x91CF;&#x4E0D;&#x7834;&#x574F;&#x6A21;&#x578B;&#x539F;&#x6709;&#x77E5;&#x8BC6;&#x548C;&#x80FD;&#x529B;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x5B83;&#x51CF;&#x5C11;&#x6216;&#x4E0D;&#x518D;&#x89E6;&#x53D1;&#x67D0;&#x4E00;&#x7C7B;&#x62D2;&#x7EDD;&#x56DE;&#x7B54;&#x7684;&#x884C;&#x4E3A;&#x3002;</p>
</blockquote>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x539F;&#x672C;&#x4F1A;&#x62D2;&#x7EDD;&#x56DE;&#x7B54;&#x67D0;&#x4E9B;&#x6D89;&#x53CA;&#x654F;&#x611F;&#x4E3B;&#x9898;&#x7684;&#x95EE;&#x9898;&#x3002;&#x7ECF;&#x8FC7; Abliteration &#x540E;&#xFF0C;&#x5B83;&#x53EF;&#x80FD;&#x4E0D;&#x518D;&#x62D2;&#x7EDD;&#xFF0C;&#x800C;&#x662F;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x56DE;&#x7B54;&#x3002;</p>
<p>&#x8FD9;&#x4F1A;&#x5F15;&#x51FA;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x62D2;&#x7EDD;&#x56DE;&#x7B54;&#xFF1F;&#x8FD9;&#x79CD;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x7A76;&#x7ADF;&#x662F;&#x6A21;&#x578B;&#x5929;&#x7136;&#x5B66;&#x51FA;&#x6765;&#x7684;&#xFF0C;&#x8FD8;&#x662F;&#x53EF;&#x4EE5;&#x88AB;&#x5B9A;&#x4F4D;&#x5230;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x4E00;&#x7EC4;&#x7279;&#x5B9A;&#x65B9;&#x5411;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x6570;&#x5B66;&#x64CD;&#x4F5C;&#x79FB;&#x9664;&#xFF1F;</p>
<p>Abliteration &#x5C55;&#x793A;&#x4E86;&#x4E00;&#x79CD;&#x53EF;&#x80FD;&#x6027;&#xFF1A;&#x6A21;&#x578B;&#x7684;&#x90E8;&#x5206;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5206;&#x6790;&#x5185;&#x90E8;&#x8868;&#x793A;&#x3001;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6743;&#x91CD;&#x6765;&#x6539;&#x53D8;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x5B8C;&#x6574;&#x7684;&#x5FAE;&#x8C03;&#x8BAD;&#x7EC3;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0; Abliteration&#xFF1F;&#x5B83;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#&#x4E00;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0; Abliteration&#xFF1F;&#x5B83;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>&#x4E00;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x51FA;&#x73B0; Abliteration&#xFF1F;&#x5B83;&#x8981;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p>&#x8981;&#x7406;&#x89E3; Abliteration&#xFF0C;&#x9996;&#x5148;&#x9700;&#x8981;&#x7406;&#x89E3;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x662F;&#x600E;&#x4E48;&#x83B7;&#x5F97;&#x300C;&#x62D2;&#x7EDD;&#x80FD;&#x529B;&#x300D;&#x7684;&#x3002;</p>
<h3 id="1. &#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x4E0E;&#x5BF9;&#x9F50;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;"><a href="#1. &#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x4E0E;&#x5BF9;&#x9F50;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;"></a>1. &#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x4E0E;&#x5BF9;&#x9F50;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x7684;&#x533A;&#x522B;</h3>
<p>&#x4E00;&#x4E2A;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x901A;&#x5E38;&#x7ECF;&#x5386;&#x51E0;&#x4E2A;&#x9636;&#x6BB5;&#xFF1A;</p>
<pre><code class="language-text">&#x9636;&#x6BB5; 1&#xFF1A;&#x9884;&#x8BAD;&#x7EC3;&#xFF08;Pre-training&#xFF09;
&#x4ECE;&#x5927;&#x91CF;&#x6587;&#x672C;&#x4E2D;&#x5B66;&#x4E60;&#x8BED;&#x8A00;&#x3001;&#x77E5;&#x8BC6;&#x3001;&#x4EE3;&#x7801;&#x3001;
&#x63A8;&#x7406;&#x6A21;&#x5F0F;&#x548C;&#x6587;&#x672C;&#x751F;&#x6210;&#x89C4;&#x5F8B;
        &#x2193;
&#x9636;&#x6BB5; 2&#xFF1A;&#x76D1;&#x7763;&#x5FAE;&#x8C03;&#xFF08;SFT&#xFF09;
&#x901A;&#x8FC7;&#x6307;&#x4EE4;&#x548C;&#x793A;&#x8303;&#x56DE;&#x7B54;&#xFF0C;
&#x5B66;&#x4F1A;&#x6309;&#x7167;&#x7528;&#x6237;&#x8981;&#x6C42;&#x56DE;&#x7B54;&#x95EE;&#x9898;
        &#x2193;
&#x9636;&#x6BB5; 3&#xFF1A;&#x504F;&#x597D;&#x5BF9;&#x9F50;&#xFF08;RLHF&#x3001;DPO &#x7B49;&#xFF09;
&#x901A;&#x8FC7;&#x4EBA;&#x7C7B;&#x504F;&#x597D;&#x3001;&#x5B89;&#x5168;&#x6570;&#x636E;&#x548C;&#x5956;&#x52B1;&#x4FE1;&#x53F7;&#xFF0C;
&#x503E;&#x5411;&#x4E8E;&#x4EA7;&#x751F;&#x7B26;&#x5408;&#x9884;&#x671F;&#x7684;&#x56DE;&#x7B54;&#xFF0C;
&#x5E76;&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#x62D2;&#x7EDD;&#x56DE;&#x7B54;
        &#x2193;
&#x6700;&#x7EC8;&#x4EA7;&#x54C1;&#xFF1A;Chat / Instruct Model
&#x65E2;&#x80FD;&#x7406;&#x89E3;&#x548C;&#x6267;&#x884C;&#x6307;&#x4EE4;&#xFF0C;
&#x4E5F;&#x5177;&#x6709;&#x4E00;&#x5B9A;&#x7684;&#x5B89;&#x5168;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;
</code></pre>
<p>&#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x5E76;&#x6CA1;&#x6709;&#x4E00;&#x5957;&#x660E;&#x786E;&#x7684;&#x3001;&#x72EC;&#x7ACB;&#x8FD0;&#x884C;&#x7684;&#x5B89;&#x5168;&#x89C4;&#x5219;&#x5F15;&#x64CE;&#x3002;&#x5B83;&#x4E3B;&#x8981;&#x901A;&#x8FC7;&#x5B66;&#x4E60;&#x6587;&#x672C;&#x548C;&#x540E;&#x7EED;&#x8BAD;&#x7EC3;&#xFF0C;&#x9010;&#x6E10;&#x5F62;&#x6210;&#x4E0D;&#x540C;&#x7684;&#x884C;&#x4E3A;&#x503E;&#x5411;&#x3002;</p>
<p>&#x6BD4;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x7528;&#x6237;&#x95EE;&#x5982;&#x4F55;&#x5236;&#x4F5C;&#x86CB;&#x7CD5;&#xFF0C;&#x6A21;&#x578B;&#x503E;&#x5411;&#x4E8E;&#x7ED9;&#x51FA;&#x5236;&#x4F5C;&#x65B9;&#x6CD5;&#x3002;</li>
<li>&#x7528;&#x6237;&#x8BE2;&#x95EE;&#x67D0;&#x4E9B;&#x5371;&#x9669;&#x884C;&#x4E3A;&#x7684;&#x5177;&#x4F53;&#x64CD;&#x4F5C;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4F1A;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x7528;&#x6237;&#x8BE2;&#x95EE;&#x533B;&#x5B66;&#x3001;&#x5316;&#x5B66;&#x3001;&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x7B49;&#x53CC;&#x7528;&#x9014;&#x77E5;&#x8BC6;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x56E0;&#x4E3A;&#x5224;&#x65AD;&#x4E0D;&#x786E;&#x5B9A;&#x800C;&#x62D2;&#x7EDD;&#x3002;</li>
</ul>
<p>&#x6700;&#x540E;&#x4E00;&#x79CD;&#x60C5;&#x51B5;&#x5C31;&#x4EA7;&#x751F;&#x4E86;&#x4E00;&#x4E2A;&#x5B9E;&#x9645;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="2. &#x539F;&#x6765;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x5B58;&#x5728;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#2. &#x539F;&#x6765;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x5B58;&#x5728;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>2. &#x539F;&#x6765;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x5B58;&#x5728;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h3>
<p>&#x8FD9;&#x6D89;&#x53CA; AI Alignment&#xFF08;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x5BF9;&#x9F50;&#xFF09;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x77DB;&#x76FE;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x65E2;&#x8981;&#x6709;&#x80FD;&#x529B;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#xFF0C;&#x53C8;&#x8981;&#x6709;&#x80FD;&#x529B;&#x5224;&#x65AD;&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#x4E0D;&#x5E94;&#x8BE5;&#x56DE;&#x7B54;&#x3002;</p>
<p>&#x73B0;&#x5B9E;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E24;&#x79CD;&#x76EE;&#x6807;&#x5E76;&#x4E0D;&#x603B;&#x662F;&#x5BB9;&#x6613;&#x517C;&#x987E;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7528;&#x6237;&#x9700;&#x6C42;</th>
<th>&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x7684;&#x95EE;&#x9898;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x7814;&#x7A76;</td>
<td>&#x628A;&#x5408;&#x6CD5;&#x7684;&#x6F0F;&#x6D1E;&#x7814;&#x7A76;&#x8BEF;&#x5224;&#x4E3A;&#x653B;&#x51FB;&#x884C;&#x4E3A;</td>
</tr>
<tr>
<td>&#x5316;&#x5B66;&#x77E5;&#x8BC6;&#x5B66;&#x4E60;</td>
<td>&#x628A;&#x666E;&#x901A;&#x5316;&#x5B66;&#x77E5;&#x8BC6;&#x8BEF;&#x5224;&#x4E3A;&#x5371;&#x9669;&#x64CD;&#x4F5C;</td>
</tr>
<tr>
<td>&#x533B;&#x5B66;&#x7814;&#x7A76;</td>
<td>&#x5BF9;&#x6B63;&#x5E38;&#x7684;&#x533B;&#x5B66;&#x8BA8;&#x8BBA;&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;</td>
</tr>
<tr>
<td>&#x5386;&#x53F2;&#x4E0E;&#x653F;&#x6CBB;&#x7814;&#x7A76;</td>
<td>&#x56E0;&#x654F;&#x611F;&#x5185;&#x5BB9;&#x800C;&#x62D2;&#x7EDD;&#x6B63;&#x5E38;&#x5206;&#x6790;</td>
</tr>
<tr>
<td>&#x5C0F;&#x8BF4;&#x521B;&#x4F5C;</td>
<td>&#x628A;&#x865A;&#x6784;&#x60C5;&#x8282;&#x8BEF;&#x5224;&#x4E3A;&#x73B0;&#x5B9E;&#x5371;&#x9669;&#x884C;&#x4E3A;</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x88AB;&#x79F0;&#x4E3A; Over-refusal&#xFF0C;&#x5373;&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;&#x3002;</p>
<p>&#x5B83;&#x4E0E; Under-refusal&#xFF08;&#x62D2;&#x7EDD;&#x4E0D;&#x8DB3;&#xFF09;&#x6784;&#x6210;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;&#xFF1A;&#x5E94;&#x8BE5;&#x56DE;&#x7B54;&#x7684;&#x5185;&#x5BB9;&#x4E0D;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x62D2;&#x7EDD;&#x4E0D;&#x8DB3;&#xFF1A;&#x4E0D;&#x5E94;&#x8BE5;&#x63D0;&#x4F9B;&#x7684;&#x5185;&#x5BB9;&#x5374;&#x63D0;&#x4F9B;&#x4E86;&#x3002;</li>
</ul>
<p>&#x4F20;&#x7EDF;&#x5B89;&#x5168;&#x8BAD;&#x7EC3;&#x9700;&#x8981;&#x5728;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x5411;&#x4E4B;&#x95F4;&#x5BFB;&#x627E;&#x5E73;&#x8861;&#x3002;</p>
<p>&#x4E0D;&#x540C;&#x6A21;&#x578B;&#x7684;&#x5B89;&#x5168;&#x7B56;&#x7565;&#x3001;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x548C;&#x76EE;&#x6807;&#x53C8;&#x4E0D;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#xFF0C;&#x8FD9;&#x79CD;&#x5E73;&#x8861;&#x5E76;&#x4E0D;&#x5BB9;&#x6613;&#x63A7;&#x5236;&#x3002;</p>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x5730;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF1F;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x5730;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF1F;"></a>3. &#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x5730;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF1F;</h3>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x5177;&#x5907;&#x5F88;&#x5F3A;&#x7684;&#x4EE3;&#x7801;&#x3001;&#x6570;&#x5B66;&#x3001;&#x63A8;&#x7406;&#x548C;&#x4E13;&#x4E1A;&#x77E5;&#x8BC6;&#x80FD;&#x529B;&#xFF0C;&#x4F46;&#x5B83;&#x7684;&#x62D2;&#x7EDD;&#x7B56;&#x7565;&#x8FC7;&#x4E8E;&#x6FC0;&#x8FDB;&#x3002;</p>
<p>&#x5F00;&#x53D1;&#x8005;&#x53EF;&#x80FD;&#x5E0C;&#x671B;&#xFF1A;</p>
<ul>
<li>&#x4FDD;&#x7559;&#x539F;&#x6A21;&#x578B;&#x7684;&#x77E5;&#x8BC6;&#x3002;</li>
<li>&#x4FDD;&#x7559;&#x539F;&#x6A21;&#x578B;&#x7684;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x3002;</li>
<li>&#x51CF;&#x5C11;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x62D2;&#x7EDD;&#x3002;</li>
<li>&#x4E0D;&#x9700;&#x8981;&#x82B1;&#x8D39;&#x5927;&#x91CF; GPU &#x8D44;&#x6E90;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x3002;</li>
</ul>
<p>&#x4F20;&#x7EDF;&#x5FAE;&#x8C03;&#x867D;&#x7136;&#x53EF;&#x4EE5;&#x8C03;&#x6574;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#xFF0C;&#x4F46;&#x6709;&#x51E0;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<ol>
<li>&#x9700;&#x8981;&#x51C6;&#x5907;&#x9AD8;&#x8D28;&#x91CF;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x3002;</li>
<li>&#x9700;&#x8981;&#x8BAD;&#x7EC3;&#x8BA1;&#x7B97;&#x8D44;&#x6E90;&#x548C;&#x65F6;&#x95F4;&#x3002;</li>
<li>&#x53EF;&#x80FD;&#x5F15;&#x5165;&#x707E;&#x96BE;&#x6027;&#x9057;&#x5FD8;&#xFF08;Catastrophic Forgetting&#xFF09;&#x3002;</li>
<li>&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x539F;&#x6709;&#x7684;&#x80FD;&#x529B;&#x5206;&#x5E03;&#x3002;</li>
<li>&#x8C03;&#x6574;&#x67D0;&#x4E00;&#x79CD;&#x884C;&#x4E3A;&#x65F6;&#xFF0C;&#x53EF;&#x80FD;&#x610F;&#x5916;&#x5F71;&#x54CD;&#x5176;&#x4ED6;&#x884C;&#x4E3A;&#x3002;</li>
</ol>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x7814;&#x7A76;&#x8005;&#x5F00;&#x59CB;&#x601D;&#x8003;&#xFF1A;</p>
<p>&#x5982;&#x679C;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x53EA;&#x662F;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x67D0;&#x79CD;&#x53EF;&#x4EE5;&#x5B9A;&#x4F4D;&#x7684;&#x8868;&#x793A;&#xFF0C;&#x90A3;&#x4E48;&#x80FD;&#x4E0D;&#x80FD;&#x53EA;&#x4FEE;&#x6539;&#x8FD9;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x800C;&#x4E0D;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#xFF1F;</p>
<p>&#x8FD9;&#x5C31;&#x662F; Abliteration &#x4EA7;&#x751F;&#x7684;&#x7814;&#x7A76;&#x80CC;&#x666F;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;Abliteration &#x7684;&#x6280;&#x672F;&#x6765;&#x6E90;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x4E8C;&#x3001;Abliteration &#x7684;&#x6280;&#x672F;&#x6765;&#x6E90;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x4E8C;&#x3001;Abliteration &#x7684;&#x6280;&#x672F;&#x6765;&#x6E90;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x5B83;&#x5EFA;&#x7ACB;&#x5728;&#x4E09;&#x4E2A;&#x7814;&#x7A76;&#x65B9;&#x5411;&#x4E4B;&#x4E0A;&#x3002;</p>
<h3 id="1. Mechanistic Interpretability&#xFF1A;&#x673A;&#x5236;&#x53EF;&#x89E3;&#x91CA;&#x6027;"><a href="#1. Mechanistic Interpretability&#xFF1A;&#x673A;&#x5236;&#x53EF;&#x89E3;&#x91CA;&#x6027;"></a>1. Mechanistic Interpretability&#xFF1A;&#x673A;&#x5236;&#x53EF;&#x89E3;&#x91CA;&#x6027;</h3>
<p>&#x673A;&#x5236;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76;&#x5E0C;&#x671B;&#x56DE;&#x7B54;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5230;&#x5E95;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>&#x4F20;&#x7EDF;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x901A;&#x5E38;&#x628A;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x770B;&#x6210;&#x4E00;&#x4E2A;&#x9ED1;&#x76D2;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#x6587;&#x672C; &#x2192; &#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x8BA1;&#x7B97; &#x2192; &#x8F93;&#x51FA;&#x6587;&#x672C;
</code></pre>
<p>&#x4F46; Transformer &#x5185;&#x90E8;&#x5305;&#x542B;&#x5927;&#x91CF;&#x53EF;&#x4EE5;&#x5206;&#x6790;&#x7684;&#x4E2D;&#x95F4;&#x8868;&#x793A;&#x548C;&#x7EC4;&#x4EF6;&#xFF1A;</p>
<ul>
<li>Embedding</li>
<li>Attention</li>
<li>MLP</li>
<li>Residual Stream</li>
<li>Hidden States</li>
<li>&#x5404;&#x5C42;&#x6743;&#x91CD;&#x77E9;&#x9635;</li>
</ul>
<p>&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x53D1;&#x73B0;&#xFF0C;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x4E00;&#x4E9B;&#x6982;&#x5FF5;&#x548C;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x5728;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x4E2D;&#x8868;&#x73B0;&#x51FA;&#x6765;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x67D0;&#x4E9B;&#x5185;&#x90E8;&#x65B9;&#x5411;&#x53EF;&#x80FD;&#x4E0E;&#xFF1A;</p>
<ul>
<li>&#x60C5;&#x7EEA;</li>
<li>&#x8BED;&#x8A00;&#x98CE;&#x683C;</li>
<li>&#x7279;&#x5B9A;&#x6982;&#x5FF5;</li>
<li>&#x89D2;&#x8272;&#x8EAB;&#x4EFD;</li>
<li>&#x62D2;&#x7EDD;&#x884C;&#x4E3A;</li>
</ul>
<p>&#x5B58;&#x5728;&#x5173;&#x8054;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#xFF0C;&#x7814;&#x7A76;&#x5F00;&#x59CB;&#x4ECE;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF0C;&#x8FDB;&#x4E00;&#x6B65;&#x8FFD;&#x5230;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x8F93;&#x51FA;&#x8FD9;&#x4E9B;&#x5185;&#x5BB9;&#x3002;</p>
<h3 id="2. Activation Steering&#xFF1A;&#x6FC0;&#x6D3B;&#x5F15;&#x5BFC;"><a href="#2. Activation Steering&#xFF1A;&#x6FC0;&#x6D3B;&#x5F15;&#x5BFC;"></a>2. Activation Steering&#xFF1A;&#x6FC0;&#x6D3B;&#x5F15;&#x5BFC;</h3>
<p>&#x8FD9;&#x662F;&#x53E6;&#x4E00;&#x4E2A;&#x57FA;&#x7840;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x6709;&#x4E00;&#x4E2A;&#x5411;&#x91CF; v&#xFF0C;&#x5B83;&#x4E0E;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x884C;&#x4E3A;&#x6709;&#x5173;&#x3002;</p>
<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x4E2D;&#x4EBA;&#x4E3A;&#x4FEE;&#x6539;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF1A;</p>
<pre><code class="language-text">h&apos; = h + &#x3B1; &#xD7; v
</code></pre>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li>h&#xFF1A;&#x539F;&#x59CB;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x3002;</li>
<li>v&#xFF1A;&#x76EE;&#x6807;&#x884C;&#x4E3A;&#x5BF9;&#x5E94;&#x7684;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x3B1;&#xFF1A;&#x5E72;&#x9884;&#x5F3A;&#x5EA6;&#x3002;</li>
<li>h&apos;&#xFF1A;&#x4FEE;&#x6539;&#x540E;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<p>&#x5982;&#x679C; v &#x4E0E;&#x67D0;&#x79CD;&#x884C;&#x4E3A;&#x6709;&#x5173;&#xFF0C;&#x52A0;&#x5165;&#x5B83;&#x53EF;&#x80FD;&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x503E;&#x5411;&#x4E8E;&#x8868;&#x73B0;&#x51FA;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x8FD9;&#x79CD;&#x6280;&#x672F;&#x53EB; Activation Steering&#xFF0C;&#x4E5F;&#x53EB; Activation Addition&#x3002;</p>
<p>&#x5B83;&#x8BF4;&#x660E;&#xFF1A;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x6709;&#x53EF;&#x80FD;&#x901A;&#x8FC7;&#x76F4;&#x63A5;&#x64CD;&#x4F5C;&#x5185;&#x90E8;&#x6FC0;&#x6D3B;&#x6765;&#x63A7;&#x5236;&#x3002;</p>
<h3 id="3. Refusal Direction&#xFF1A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"><a href="#3. Refusal Direction&#xFF1A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"></a>3. Refusal Direction&#xFF1A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;</h3>
<p>&#x8BA9; Abliteration &#x6210;&#x4E3A;&#x4E00;&#x79CD;&#x53EF;&#x91CD;&#x590D;&#x6280;&#x672F;&#x7684;&#x5173;&#x952E;&#x7814;&#x7A76;&#xFF0C;&#x662F; 2024 &#x5E74; Andy Arditi &#x7B49;&#x4EBA;&#x53D1;&#x8868;&#x7684;&#x8BBA;&#x6587;&#xFF1A;</p>
<p>&#x300A;Refusal in Language Models Is Mediated by a Single Direction&#x300B;&#x3002;</p>
<p>&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x5728; 13 &#x4E2A;&#x5F00;&#x6E90;&#x804A;&#x5929;&#x6A21;&#x578B;&#x4E0A;&#x8FDB;&#x884C;&#x5B9E;&#x9A8C;&#xFF0C;&#x6A21;&#x578B;&#x89C4;&#x6A21;&#x6700;&#x9AD8;&#x8FBE;&#x5230; 72B &#x53C2;&#x6570;&#x3002;</p>
<p>&#x4ED6;&#x4EEC;&#x53D1;&#x73B0;&#xFF1A;</p>
<p>&#x5728;&#x6240;&#x6D4B;&#x8BD5;&#x7684;&#x6A21;&#x578B;&#x4E2D;&#xFF0C;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x88AB;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x5185;&#x90E8;&#x65B9;&#x5411;&#x663E;&#x8457;&#x4ECB;&#x5BFC;&#x3002;</p>
<p>&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x6A21;&#x578B;&#x5728;&#x9762;&#x5BF9;&#x67D0;&#x4E9B;&#x9700;&#x8981;&#x62D2;&#x7EDD;&#x7684;&#x8BF7;&#x6C42;&#x65F6;&#xFF0C;&#x5185;&#x90E8;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4F1A;&#x6CBF;&#x7740;&#x7279;&#x5B9A;&#x65B9;&#x5411;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x5982;&#x679C;&#x628A;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x4ECE;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x8868;&#x793A;&#x4E2D;&#x79FB;&#x9664;&#xFF0C;&#x6A21;&#x578B;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x5C31;&#x4F1A;&#x660E;&#x663E;&#x51CF;&#x5C11;&#x3002;</p>
<p>&#x53CD;&#x8FC7;&#x6765;&#xFF0C;&#x5982;&#x679C;&#x4EBA;&#x4E3A;&#x6DFB;&#x52A0;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x751A;&#x81F3;&#x53EF;&#x4EE5;&#x8BA9;&#x6A21;&#x578B;&#x5BF9;&#x6B63;&#x5E38;&#x95EE;&#x9898;&#x4E5F;&#x4EA7;&#x751F;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;Abliteration &#x7A76;&#x7ADF;&#x662F;&#x600E;&#x4E48;&#x505A;&#x7684;&#xFF1F;"><a href="#&#x4E09;&#x3001;Abliteration &#x7A76;&#x7ADF;&#x662F;&#x600E;&#x4E48;&#x505A;&#x7684;&#xFF1F;"></a>&#x4E09;&#x3001;Abliteration &#x7A76;&#x7ADF;&#x662F;&#x600E;&#x4E48;&#x505A;&#x7684;&#xFF1F;</h2>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x62C6;&#x6210;&#x4E09;&#x4E2A;&#x6B65;&#x9AA4;&#xFF1A;</p>
<ol>
<li>&#x627E;&#x5230;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x4E0E;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x6709;&#x5173;&#x7684;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x901A;&#x8FC7;&#x6570;&#x5B66;&#x8FD0;&#x7B97;&#x6D88;&#x9664;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;&#xFF0C;&#x4F7F;&#x8FD9;&#x79CD;&#x6D88;&#x9664;&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x6B21;&#x63A8;&#x7406;&#x65F6;&#x989D;&#x5916;&#x6267;&#x884C;&#x3002;</li>
</ol>
<h3 id="1. &#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x627E;&#x5230;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"><a href="#1. &#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x627E;&#x5230;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"></a>1. &#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x627E;&#x5230;&#x62D2;&#x7EDD;&#x65B9;&#x5411;</h3>
<p>&#x9996;&#x5148;&#x51C6;&#x5907;&#x4E24;&#x7EC4; Prompt&#x3002;</p>
<p><strong>A &#x7EC4;&#xFF1A;&#x9700;&#x8981;&#x62D2;&#x7EDD;&#x7684;&#x8BF7;&#x6C42;&#xFF08;Harmful Prompts&#xFF09;</strong></p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x7EC4;&#x660E;&#x786E;&#x8981;&#x6C42;&#x6A21;&#x578B;&#x534F;&#x52A9;&#x5371;&#x9669;&#x884C;&#x4E3A;&#x7684;&#x8BF7;&#x6C42;&#x3002;</li>
<li>&#x4E00;&#x7EC4;&#x8981;&#x6C42;&#x6A21;&#x578B;&#x751F;&#x6210;&#x8FDD;&#x89C4;&#x64CD;&#x4F5C;&#x6307;&#x5BFC;&#x7684;&#x8BF7;&#x6C42;&#x3002;</li>
<li>&#x4E00;&#x7EC4;&#x7ECF;&#x8FC7;&#x6574;&#x7406;&#x7684;&#x3001;&#x80FD;&#x591F;&#x7A33;&#x5B9A;&#x89E6;&#x53D1;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x7684;&#x6D4B;&#x8BD5;&#x8F93;&#x5165;&#x3002;</li>
</ul>
<p><strong>B &#x7EC4;&#xFF1A;&#x6B63;&#x5E38;&#x8BF7;&#x6C42;&#xFF08;Harmless Prompts&#xFF09;</strong></p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x5199;&#x4E00;&#x6BB5; Python &#x7A0B;&#x5E8F;&#x3002;</li>
<li>&#x89E3;&#x91CA;&#x7EBF;&#x6027;&#x4EE3;&#x6570;&#x3002;</li>
<li>&#x603B;&#x7ED3;&#x4E00;&#x7BC7;&#x8BBA;&#x6587;&#x3002;</li>
<li>&#x89E3;&#x91CA;&#x666E;&#x901A;&#x5316;&#x5B66;&#x77E5;&#x8BC6;&#x3002;</li>
</ul>
<p>&#x7136;&#x540E;&#xFF0C;&#x628A;&#x4E24;&#x7EC4; Prompt &#x5206;&#x522B;&#x8F93;&#x5165;&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x9664;&#x4E86;&#x8BB0;&#x5F55;&#x6700;&#x7EC8;&#x751F;&#x6210;&#x7684;&#x6587;&#x672C;&#xFF0C;&#x8FD8;&#x4F1A;&#x63D0;&#x53D6;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684; Hidden States&#xFF08;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF09;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x67D0;&#x4E00;&#x5C42;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">h&#xFF1A;&#x4E00;&#x4E2A;&#x5305;&#x542B; d &#x4E2A;&#x6570;&#x7684;&#x5411;&#x91CF;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x7684; d &#x662F;&#x6A21;&#x578B;&#x9690;&#x85CF;&#x7EF4;&#x5EA6;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x7684;&#x9690;&#x85CF;&#x7EF4;&#x5EA6;&#x53EF;&#x80FD;&#x662F; 4096&#xFF0C;&#x90A3;&#x4E48;&#x6BCF;&#x4E2A; Token &#x5728;&#x67D0;&#x4E00;&#x5C42;&#x5C31;&#x53EF;&#x4EE5;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A; 4096 &#x7EF4;&#x7684;&#x5411;&#x91CF;&#x3002;</p>
<p>&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x5206;&#x522B;&#x8BA1;&#x7B97;&#x4E24;&#x7EC4; Prompt &#x7684;&#x5E73;&#x5747;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF1A;</p>
<pre><code class="language-text">&#x3BC;H = &#x62D2;&#x7EDD;&#x8BF7;&#x6C42;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E4B;&#x548C; &#xF7; &#x62D2;&#x7EDD;&#x6837;&#x672C;&#x6570;
&#x3BC;S = &#x6B63;&#x5E38;&#x8BF7;&#x6C42;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E4B;&#x548C; &#xF7; &#x6B63;&#x5E38;&#x6837;&#x672C;&#x6570;
</code></pre>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li>&#x3BC;H&#xFF1A;&#x89E6;&#x53D1;&#x62D2;&#x7EDD;&#x7684; Prompt &#x7684;&#x5E73;&#x5747;&#x8868;&#x793A;&#x3002;</li>
<li>&#x3BC;S&#xFF1A;&#x6B63;&#x5E38; Prompt &#x7684;&#x5E73;&#x5747;&#x8868;&#x793A;&#x3002;</li>
</ul>
<p>&#x7136;&#x540E;&#x505A;&#x5DEE;&#xFF1A;</p>
<pre><code class="language-text">r = &#x3BC;H - &#x3BC;S
</code></pre>
<p>&#x518D;&#x8FDB;&#x884C;&#x5F52;&#x4E00;&#x5316;&#xFF1A;</p>
<pre><code class="language-text">r_unit = r &#xF7; r &#x7684;&#x957F;&#x5EA6;
</code></pre>
<p>&#x8FD9;&#x4E2A; r_unit&#xFF0C;&#x5C31;&#x662F;&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x4F30;&#x8BA1;&#x51FA;&#x6765;&#x7684;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF08;Refusal Direction&#xFF09;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x7528;&#x4E8C;&#x7EF4;&#x7A7A;&#x95F4;&#x7406;&#x89E3;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#xFF0C;&#x4F46;&#x5B9E;&#x9645;&#x6A21;&#x578B;&#x7A7A;&#x95F4;&#x901A;&#x5E38;&#x6709;&#x6570;&#x5343;&#x7EF4;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E8C;&#x7EF4;&#x3002;</p>
<p>&#x6B63;&#x5E38;&#x8BF7;&#x6C42;&#x548C;&#x89E6;&#x53D1;&#x62D2;&#x7EDD;&#x7684;&#x8BF7;&#x6C42;&#xFF0C;&#x5728;&#x5185;&#x90E8;&#x8868;&#x793A;&#x7A7A;&#x95F4;&#x4E2D;&#x5448;&#x73B0;&#x7EDF;&#x8BA1;&#x5DEE;&#x5F02;&#x3002;&#x4E24;&#x7EC4;&#x5E73;&#x5747;&#x503C;&#x7684;&#x5DEE;&#xFF0C;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x4F30;&#x8BA1;&#x4E0E;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x76F8;&#x5173;&#x7684;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E2A;&#x7EC6;&#x8282;&#xFF1A;</p>
<p>&#x7814;&#x7A76;&#x4EBA;&#x5458;&#x6CA1;&#x6709;&#x8BA9;&#x6A21;&#x578B;&#x5B66;&#x4E60;&#x65B0;&#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x901A;&#x8FC7;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x4ED6;&#x4EEC;&#x53EA;&#x9700;&#x8981;&#xFF1A;</p>
<ul>
<li>&#x8FD0;&#x884C;&#x6A21;&#x578B;&#x3002;</li>
<li>&#x6536;&#x96C6;&#x5185;&#x90E8;&#x6FC0;&#x6D3B;&#x3002;</li>
<li>&#x8BA1;&#x7B97;&#x5E73;&#x5747;&#x503C;&#x3002;</li>
<li>&#x505A;&#x5411;&#x91CF;&#x51CF;&#x6CD5;&#x3002;</li>
</ul>
<p>&#x6240;&#x4EE5;&#x5B83;&#x7684;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x8FDC;&#x4F4E;&#x4E8E;&#x91CD;&#x65B0;&#x5FAE;&#x8C03;&#x4E00;&#x4E2A;&#x5927;&#x6A21;&#x578B;&#x3002;</p>
<h3 id="2. &#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x628A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x4ECE;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E2D;&#x79FB;&#x9664;"><a href="#2. &#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x628A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x4ECE;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E2D;&#x79FB;&#x9664;"></a>2. &#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x628A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x4ECE;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E2D;&#x79FB;&#x9664;</h3>
<p>&#x73B0;&#x5728;&#x5DF2;&#x7ECF;&#x627E;&#x5230;&#x4E86;&#x62D2;&#x7EDD;&#x65B9;&#x5411; r_unit&#x3002;</p>
<p>&#x63A5;&#x4E0B;&#x6765;&#x8981;&#x505A;&#x7684;&#x662F;&#xFF1A;&#x628A;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E2D;&#x6CBF;&#x7740;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x7684;&#x5206;&#x91CF;&#x53BB;&#x6389;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x67D0;&#x4E00;&#x5C42;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E3A; h&#x3002;</p>
<p>&#x5B83;&#x5728;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x4E0A;&#x7684;&#x6295;&#x5F71;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x6CBF;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x7684;&#x5206;&#x91CF; = (h &#xB7; r_unit) &#xD7; r_unit
</code></pre>
<p>&#x4E8E;&#x662F;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">h&apos; = h - (h &#xB7; r_unit) &#xD7; r_unit
</code></pre>
<p>&#x8FD9;&#x91CC;&#x7684;&#x201C;&#xB7;&#x201D;&#x8868;&#x793A;&#x5411;&#x91CF;&#x70B9;&#x79EF;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x6B63;&#x4EA4;&#x6295;&#x5F71;&#xFF08;Orthogonal Projection&#xFF09;&#x3002;</p>
<p>&#x5B83;&#x7684;&#x610F;&#x601D;&#x662F;&#xFF0C;&#x628A;&#x5411;&#x91CF; h &#x5206;&#x89E3;&#x6210;&#x4E24;&#x90E8;&#x5206;&#xFF1A;</p>
<ul>
<li>&#x6CBF;&#x7740;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x7684;&#x90E8;&#x5206;&#x3002;</li>
<li>&#x4E0E;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x5782;&#x76F4;&#x7684;&#x90E8;&#x5206;&#x3002;</li>
</ul>
<p>&#x7136;&#x540E;&#x53EA;&#x4FDD;&#x7559;&#x7B2C;&#x4E8C;&#x90E8;&#x5206;&#x3002;</p>
<p>&#x4ECE;&#x6570;&#x5B66;&#x89D2;&#x5EA6;&#x770B;&#xFF1A;</p>
<pre><code class="language-text">h&apos; &#xB7; r_unit = 0
</code></pre>
<p>&#x4FEE;&#x6539;&#x540E;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x4E0D;&#x518D;&#x5305;&#x542B;&#x6CBF;&#x7740;&#x8FD9;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x7684;&#x5206;&#x91CF;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; Ablation&#xFF08;&#x6D88;&#x878D;&#xFF09;&#x7684;&#x57FA;&#x672C;&#x601D;&#x60F3;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5728;&#x6A21;&#x578B;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x5BF9;&#x76F8;&#x5173;&#x5C42;&#x6301;&#x7EED;&#x8FDB;&#x884C;&#x8FD9;&#x79CD;&#x64CD;&#x4F5C;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x5F88;&#x96BE;&#x518D;&#x901A;&#x8FC7;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x8868;&#x8FBE;&#x539F;&#x6765;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x3002;</p>
<h3 id="3. &#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x4ECE;&#x4FEE;&#x6539;&#x6FC0;&#x6D3B;&#x5230;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;"><a href="#3. &#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x4ECE;&#x4FEE;&#x6539;&#x6FC0;&#x6D3B;&#x5230;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;"></a>3. &#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x4ECE;&#x4FEE;&#x6539;&#x6FC0;&#x6D3B;&#x5230;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;</h3>
<p>&#x4E0A;&#x9762;&#x8BB2;&#x7684;&#x662F; Activation Ablation&#xFF0C;&#x5373;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x4E2D;&#x52A8;&#x6001;&#x4FEE;&#x6539;&#x6FC0;&#x6D3B;&#x3002;</p>
<p>Weight Orthogonalization&#xFF08;&#x6743;&#x91CD;&#x6B63;&#x4EA4;&#x5316;&#xFF09;&#x5219;&#x53EF;&#x4EE5;&#x628A;&#x8FD9;&#x79CD;&#x64CD;&#x4F5C;&#x63D0;&#x524D;&#x5199;&#x8FDB;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x4E2D;&#x3002;</p>
<p>&#x5047;&#x8BBE; Transformer &#x67D0;&#x4E00;&#x5C42;&#x6709;&#x4E00;&#x4E2A;&#x7EBF;&#x6027;&#x6620;&#x5C04;&#xFF1A;</p>
<pre><code class="language-text">y = W &#xD7; x
</code></pre>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li>x&#xFF1A;&#x8F93;&#x5165;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x3002;</li>
<li>W&#xFF1A;&#x6743;&#x91CD;&#x77E9;&#x9635;&#x3002;</li>
<li>y&#xFF1A;&#x8F93;&#x51FA;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<p>&#x6211;&#x4EEC;&#x5E0C;&#x671B;&#x8FD9;&#x4E2A;&#x77E9;&#x9635;&#x8F93;&#x51FA;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x518D;&#x5305;&#x542B;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x6295;&#x5F71;&#x77E9;&#x9635;&#xFF1A;</p>
<pre><code class="language-text">P = I - r_unit &#xD7; r_unit&#x1D40;
</code></pre>
<p>&#x8FD9;&#x91CC; I &#x662F;&#x5355;&#x4F4D;&#x77E9;&#x9635;&#xFF0C;&#x1D40; &#x8868;&#x793A;&#x8F6C;&#x7F6E;&#xFF0C;&#xD7; &#x8868;&#x793A;&#x77E9;&#x9635;&#x6216;&#x6807;&#x91CF;&#x4E58;&#x6CD5;&#xFF0C;&#x5177;&#x4F53;&#x53D6;&#x51B3;&#x4E8E;&#x53C2;&#x4E0E;&#x8FD0;&#x7B97;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>
<p>&#x7136;&#x540E;&#x4FEE;&#x6539;&#x6743;&#x91CD;&#xFF1A;</p>
<pre><code class="language-text">W&apos; = P &#xD7; W
</code></pre>
<p>&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">y&apos; = W&apos; &#xD7; x = P &#xD7; W &#xD7; x
</code></pre>
<p>&#x4E5F;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">y&apos; = y - (y &#xB7; r_unit) &#xD7; r_unit
</code></pre>
<p>&#x65B0;&#x7684;&#x6743;&#x91CD;&#x77E9;&#x9635;&#x4E0D;&#x518D;&#x8F93;&#x51FA;&#x6CBF;&#x7740;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x7684;&#x5206;&#x91CF;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5C06;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x5E94;&#x7528;&#x5230;&#x76F8;&#x5173;&#x5C42;&#x4E2D;&#x8D1F;&#x8D23;&#x5199;&#x5165; Residual Stream &#x7684;&#x6743;&#x91CD;&#x77E9;&#x9635;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x5C06;&#x6FC0;&#x6D3B;&#x5C42;&#x9762;&#x7684;&#x5E72;&#x9884;&#x8F6C;&#x5316;&#x4E3A;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x5C42;&#x9762;&#x7684;&#x4FEE;&#x6539;&#x3002;</p>
<p>&#x8FD9;&#x610F;&#x5473;&#x7740;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x6B21;&#x8FD0;&#x884C;&#x6A21;&#x578B;&#x65F6;&#x518D;&#x989D;&#x5916;&#x8BA1;&#x7B97;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x6267;&#x884C;&#x8BAD;&#x7EC3;&#x3002;</li>
<li>&#x4FEE;&#x6539;&#x540E;&#x7684;&#x6A21;&#x578B;&#x6587;&#x4EF6;&#x672C;&#x8EAB;&#x5C31;&#x5305;&#x542B;&#x4E86;&#x8FD9;&#x79CD;&#x53D8;&#x5316;&#x3002;</li>
<li>&#x52A0;&#x8F7D;&#x4FEE;&#x6539;&#x540E;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48; Abliteration &#x5E38;&#x88AB;&#x79F0;&#x4E3A;&#x4E00;&#x79CD; Training-free Model Editing &#x6280;&#x672F;&#x3002;</p>
<p>&#x4E0D;&#x8FC7;&#xFF0C;&#x5B9E;&#x9645;&#x5B9E;&#x73B0;&#x6BD4;&#x8FD9;&#x4E2A;&#x5355;&#x4E00;&#x77E9;&#x9635;&#x516C;&#x5F0F;&#x66F4;&#x590D;&#x6742;&#xFF1A;&#x4E0D;&#x540C; Transformer &#x67B6;&#x6784;&#x7684;&#x6743;&#x91CD;&#x5E03;&#x5C40;&#x3001;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x3001;&#x5F52;&#x4E00;&#x5316;&#x65B9;&#x5F0F;&#x4EE5;&#x53CA;&#x5404;&#x5C42;&#x5199;&#x5165;&#x8DEF;&#x5F84;&#xFF0C;&#x90FD;&#x9700;&#x8981;&#x5206;&#x522B;&#x5904;&#x7406;&#x3002;</p>
<p>&#x90A3;&#x4E48;&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF1A;&#x5B83;&#x4E0E;&#x6539;&#x63D0;&#x793A;&#x8BCD;&#x3001;&#x5FAE;&#x8C03;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;&#x53EA;&#x79FB;&#x9664;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#xFF1F;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Arditi &#x7B49;&#xFF0C;&#x300A;Refusal in Language Models Is Mediated by a Single Direction&#x300B;&#xFF0C;NeurIPS&#xFF0C;2024&#xFF1A;https://arxiv.org/abs/2406.11717</li>
<li>University of Illinois&#xFF0C;&#x300A;Abliteration: Removing Refusal Behavior from an LLM&#x300B;&#xFF1A;https://appliedllms.web.illinois.edu/72_Students_Choice/20_abliteration/</li>
<li>Zou &#x7B49;&#xFF0C;&#x300A;Representation Engineering: A Top-Down Approach to AI Transparency&#x300B;&#xFF0C;2023&#xFF1A;https://arxiv.org/abs/2310.01405</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"Abliteration：模型为什么会拒绝，又为什么能不训练就改变它？",children:[{level:2,title:"一、为什么会出现 Abliteration？它要解决什么问题？",children:[{level:3,title:"1. 预训练模型与对齐模型之间的区别",children:[]},{level:3,title:"2. 原来的安全机制存在什么问题？",children:[]},{level:3,title:"3. 为什么不能简单地重新训练模型？",children:[]}]},{level:2,title:"二、Abliteration 的技术来源是什么？",children:[{level:3,title:"1. Mechanistic Interpretability：机制可解释性",children:[]},{level:3,title:"2. Activation Steering：激活引导",children:[]},{level:3,title:"3. Refusal Direction：拒绝方向",children:[]}]},{level:2,title:"三、Abliteration 究竟是怎么做的？",children:[{level:3,title:"1. 第一步：找到拒绝方向",children:[]},{level:3,title:"2. 第二步：把拒绝方向从隐藏状态中移除",children:[]},{level:3,title:"3. 第三步：从修改激活到直接修改模型权重",children:[]}]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
