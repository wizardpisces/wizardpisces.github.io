const x={},E=`<!-- 写作锚点
读者收获：分清 Abliteration 与输入干预、训练的区别，并理解少一个表示方向为何不等于只少一种能力。
核心判断：内部表示可能被多种能力共享，拒绝机制也可能涉及多个方向，减少拒绝必须连同正常能力和风险识别一起评估。
如何推进：沿第一份讨论的第四至六部分，先比较方法，再解释表示空间与共享能力，最后依次展开六项局限。
-->
<h1 id="&#x53EA;&#x5220;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E5F;&#x4F1A;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x7684;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#xFF1F;"><a href="#&#x53EA;&#x5220;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E5F;&#x4F1A;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x7684;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#xFF1F;"></a>&#x53EA;&#x5220;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E5F;&#x4F1A;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x7684;&#x5176;&#x4ED6;&#x80FD;&#x529B;&#xFF1F;</h1>
<p><a href="./Abliteration%EF%BC%9A%E6%A8%A1%E5%9E%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%8B%92%E7%BB%9D%EF%BC%8C%E5%8F%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E4%B8%8D%E8%AE%AD%E7%BB%83%E5%B0%B1%E6%94%B9%E5%8F%98%E5%AE%83%EF%BC%9F.md">&#x4E0A;&#x4E00;&#x7BC7;</a>&#x8BB2;&#x4E86;&#x5982;&#x4F55;&#x4F30;&#x8BA1;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x518D;&#x7528;&#x6295;&#x5F71;&#x4FEE;&#x6539;&#x6FC0;&#x6D3B;&#x6216;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x4F46;&#x53EA;&#x6539;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x7A76;&#x7ADF;&#x6539;&#x53D8;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;&#x5B83;&#x4E0E;&#x6539; Prompt&#x3001;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;</p>
<h2 id="&#x4E00;&#x3001;&#x5B83;&#x548C;&#x4E4B;&#x524D;&#x7684;&#x65B9;&#x6CD5;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;"><a href="#&#x4E00;&#x3001;&#x5B83;&#x548C;&#x4E4B;&#x524D;&#x7684;&#x65B9;&#x6CD5;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;"></a>&#x4E00;&#x3001;&#x5B83;&#x548C;&#x4E4B;&#x524D;&#x7684;&#x65B9;&#x6CD5;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;</h2>
<p>&#x628A; Abliteration &#x4E0E;&#x4E4B;&#x524D;&#x7684;&#x6280;&#x672F;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x770B;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x6280;&#x672F;</th>
<th>&#x4FEE;&#x6539;&#x4F4D;&#x7F6E;</th>
<th>&#x662F;&#x5426;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x6743;&#x91CD;</th>
<th>&#x4E3B;&#x8981;&#x7279;&#x70B9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Jailbreak</td>
<td>&#x8F93;&#x5165; Prompt</td>
<td>&#x5426;</td>
<td>&#x5C1D;&#x8BD5;&#x7ED5;&#x8FC7;&#x6A21;&#x578B;&#x539F;&#x6709;&#x62D2;&#x7EDD;&#x7B56;&#x7565;</td>
</tr>
<tr>
<td>SFT</td>
<td>&#x6A21;&#x578B;&#x53C2;&#x6570;</td>
<td>&#x662F;</td>
<td>&#x7528;&#x793A;&#x8303;&#x6570;&#x636E;&#x8BAD;&#x7EC3;&#x65B0;&#x884C;&#x4E3A;</td>
</tr>
<tr>
<td>RLHF / DPO</td>
<td>&#x6A21;&#x578B;&#x53C2;&#x6570;</td>
<td>&#x662F;</td>
<td>&#x901A;&#x8FC7;&#x504F;&#x597D;&#x4FE1;&#x53F7;&#x8C03;&#x6574;&#x884C;&#x4E3A;</td>
</tr>
<tr>
<td>Activation Steering</td>
<td>&#x63A8;&#x7406;&#x65F6;&#x9690;&#x85CF;&#x72B6;&#x6001;</td>
<td>&#x5426;</td>
<td>&#x4E34;&#x65F6;&#x6DFB;&#x52A0;&#x6216;&#x51CF;&#x5C11;&#x7279;&#x5B9A;&#x65B9;&#x5411;</td>
</tr>
<tr>
<td>Abliteration</td>
<td>&#x6A21;&#x578B;&#x53C2;&#x6570;</td>
<td>&#x662F;</td>
<td>&#x901A;&#x8FC7;&#x6295;&#x5F71;&#x6D88;&#x9664;&#x62D2;&#x7EDD;&#x76F8;&#x5173;&#x65B9;&#x5411;</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x91CC;&#x6709;&#x51E0;&#x4E2A;&#x533A;&#x522B;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E00;&#xFF0C;&#x548C; Jailbreak &#x7684;&#x533A;&#x522B;&#x3002;</strong></p>
<p>Jailbreak &#x4ECE;&#x8F93;&#x5165;&#x7AEF;&#x60F3;&#x529E;&#x6CD5;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x5B83;&#x53EF;&#x80FD;&#x5229;&#x7528;&#x6307;&#x4EE4;&#x4F18;&#x5148;&#x7EA7;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x89D2;&#x8272;&#x626E;&#x6F14;&#x6216;&#x5BF9;&#x6297;&#x6027;&#x540E;&#x7F00;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x67D0;&#x4E9B;&#x573A;&#x666F;&#x4E0B;&#x4E0D;&#x518D;&#x9075;&#x5B88;&#x539F;&#x6709;&#x62D2;&#x7EDD;&#x7B56;&#x7565;&#x3002;</p>
<p>&#x4F46;&#x662F;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x6CA1;&#x6709;&#x6539;&#x53D8;&#x3002;</p>
<p>Abliteration &#x5219;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x53C2;&#x6570;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E8C;&#xFF0C;&#x548C;&#x4F20;&#x7EDF;&#x5B89;&#x5168;&#x7B56;&#x7565;&#x7684;&#x533A;&#x522B;&#x3002;</strong></p>
<p>&#x4F20;&#x7EDF;&#x5B89;&#x5168;&#x5BF9;&#x9F50;&#x5F80;&#x5F80;&#x901A;&#x8FC7;&#x6570;&#x636E;&#x3001;&#x5956;&#x52B1;&#x6A21;&#x578B;&#x3001;&#x504F;&#x597D;&#x8BAD;&#x7EC3;&#x7B49;&#x65B9;&#x6CD5;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x5F62;&#x6210;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x3002;</p>
<p>Abliteration &#x5219;&#x5C1D;&#x8BD5;&#x5B9A;&#x4F4D;&#x5E76;&#x79FB;&#x9664;&#x5176;&#x4E2D;&#x67D0;&#x4E9B;&#x4E0E;&#x62D2;&#x7EDD;&#x76F8;&#x5173;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#x3002;</p>
<p>&#x5B83;&#x6539;&#x53D8;&#x7684;&#x662F;&#x6A21;&#x578B;&#x6267;&#x884C;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x7684;&#x5185;&#x90E8;&#x8DEF;&#x5F84;&#xFF0C;&#x5E76;&#x6CA1;&#x6709;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x4EC0;&#x4E48;&#x662F;&#x5B89;&#x5168;&#x3002;</p>
<p>&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x4E92;&#x65A5;&#x3002;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x63A5;&#x53D7;&#x8FC7; SFT&#x3001;RLHF&#x3001;DPO&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x518D;&#x7ECF;&#x8FC7; Abliteration&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x6709;&#x6548;&#xFF1F;&#x5B83;&#x80CC;&#x540E;&#x7684;&#x539F;&#x7406;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x4E8C;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x6709;&#x6548;&#xFF1F;&#x5B83;&#x80CC;&#x540E;&#x7684;&#x539F;&#x7406;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x4E8C;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x6709;&#x6548;&#xFF1F;&#x5B83;&#x80CC;&#x540E;&#x7684;&#x539F;&#x7406;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x8FD9;&#x91CC;&#x6D89;&#x53CA;&#x4E00;&#x4E2A;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x6982;&#x5FF5;&#xFF1A;</p>
<p>&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x5B66;&#x5230;&#x7684;&#x884C;&#x4E3A;&#xFF0C;&#x53EF;&#x80FD;&#x7F16;&#x7801;&#x5728;&#x9AD8;&#x7EF4;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x7684;&#x67D0;&#x4E9B;&#x65B9;&#x5411;&#x548C;&#x7ED3;&#x6784;&#x4E2D;&#xFF0C;&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x4EE5;&#x4EBA;&#x7C7B;&#x80FD;&#x591F;&#x7406;&#x89E3;&#x7684;&#x89C4;&#x5219;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x4ECE;&#x4E09;&#x4E2A;&#x89D2;&#x5EA6;&#x7406;&#x89E3;&#x3002;</p>
<h3 id="1. &#x6A21;&#x578B;&#x6CA1;&#x6709;&#x5728;&#x6267;&#x884C;&#x4E00;&#x5F20;&#x660E;&#x786E;&#x7684;&#x89C4;&#x5219;&#x6E05;&#x5355;"><a href="#1. &#x6A21;&#x578B;&#x6CA1;&#x6709;&#x5728;&#x6267;&#x884C;&#x4E00;&#x5F20;&#x660E;&#x786E;&#x7684;&#x89C4;&#x5219;&#x6E05;&#x5355;"></a>1. &#x6A21;&#x578B;&#x6CA1;&#x6709;&#x5728;&#x6267;&#x884C;&#x4E00;&#x5F20;&#x660E;&#x786E;&#x7684;&#x89C4;&#x5219;&#x6E05;&#x5355;</h3>
<p>&#x4EBA;&#x4EEC;&#x5BB9;&#x6613;&#x628A;&#x804A;&#x5929;&#x6A21;&#x578B;&#x60F3;&#x8C61;&#x6210;&#x5185;&#x90E8;&#x6709;&#x4E00;&#x5F20;&#x89C4;&#x5219;&#x8868;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C;&#x7528;&#x6237;&#x8BE2;&#x95EE;&#x6B63;&#x5E38;&#x95EE;&#x9898;&#xFF1A;
    &#x6B63;&#x5E38;&#x56DE;&#x7B54;

&#x5982;&#x679C;&#x7528;&#x6237;&#x8BE2;&#x95EE;&#x5371;&#x9669;&#x95EE;&#x9898;&#xFF1A;
    &#x62D2;&#x7EDD;&#x56DE;&#x7B54;

&#x5982;&#x679C;&#x7528;&#x6237;&#x8BE2;&#x95EE;&#x533B;&#x5B66;&#x95EE;&#x9898;&#xFF1A;
    &#x6839;&#x636E;&#x60C5;&#x51B5;&#x5224;&#x65AD;
</code></pre>
<p>&#x4F46; Transformer &#x5E76;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x5730;&#x6267;&#x884C;&#x8FD9;&#x6837;&#x7684;&#x7A0B;&#x5E8F;&#x3002;</p>
<p>&#x5B83;&#x901A;&#x8FC7;&#x5927;&#x91CF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x8FD0;&#x7B97;&#xFF0C;&#x5C06;&#x8F93;&#x5165;&#x8F6C;&#x6362;&#x6210;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x8FD9;&#x4E9B;&#x72B6;&#x6001;&#x9884;&#x6D4B;&#x4E0B;&#x4E00;&#x4E2A; Token&#x3002;</p>
<p>&#x6240;&#x8C13;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#xFF0C;&#x662F;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5F62;&#x6210;&#x7684;&#x4E00;&#x79CD;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x503E;&#x5411;&#x3002;</p>
<p>&#x5B83;&#x53EF;&#x80FD;&#x6D89;&#x53CA;&#x591A;&#x4E2A;&#x5C42;&#x3001;&#x591A;&#x4E2A;&#x795E;&#x7ECF;&#x5143;&#x3001;Attention Head &#x548C; MLP &#x7684;&#x5171;&#x540C;&#x4F5C;&#x7528;&#x3002;</p>
<h3 id="2. &#x9AD8;&#x7EF4;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5BF9;&#x884C;&#x4E3A;&#x8FDB;&#x884C;&#x51E0;&#x4F55;&#x64CD;&#x4F5C;"><a href="#2. &#x9AD8;&#x7EF4;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5BF9;&#x884C;&#x4E3A;&#x8FDB;&#x884C;&#x51E0;&#x4F55;&#x64CD;&#x4F5C;"></a>2. &#x9AD8;&#x7EF4;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5BF9;&#x884C;&#x4E3A;&#x8FDB;&#x884C;&#x51E0;&#x4F55;&#x64CD;&#x4F5C;</h3>
<p>&#x8FD9;&#x662F; Abliteration &#x7684;&#x6570;&#x5B66;&#x57FA;&#x7840;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x6709; 4096 &#x4E2A;&#x7EF4;&#x5EA6;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x90FD;&#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x4E3A;&#x8FD9;&#x4E2A;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x70B9;&#x3002;</p>
<p>&#x67D0;&#x79CD;&#x884C;&#x4E3A;&#x53EF;&#x80FD;&#x4E0E;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x5B58;&#x5728;&#x7EDF;&#x8BA1;&#x5173;&#x8054;&#x3002;</p>
<p>&#x4E3E;&#x4E2A;&#x7B80;&#x5316;&#x4F8B;&#x5B50;&#xFF1A;</p>
<ul>
<li>&#x67D0;&#x4E9B;&#x72B6;&#x6001;&#x66F4;&#x503E;&#x5411;&#x4E8E;&#x6B63;&#x5E38;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x67D0;&#x4E9B;&#x72B6;&#x6001;&#x66F4;&#x503E;&#x5411;&#x4E8E;&#x62D2;&#x7EDD;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x4E24;&#x79CD;&#x72B6;&#x6001;&#x4E4B;&#x95F4;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x6D4B;&#x91CF;&#x7684;&#x5DEE;&#x5F02;&#x65B9;&#x5411;&#x3002;</li>
</ul>
<p>&#x5982;&#x679C;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x4E0E;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x9AD8;&#x5EA6;&#x76F8;&#x5173;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x5C1D;&#x8BD5;&#x901A;&#x8FC7;&#x5411;&#x91CF;&#x6295;&#x5F71;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x8FD9;&#x4E0E;&#x4F20;&#x7EDF;&#x7F16;&#x7A0B;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;&#xFF1A;</p>
<pre><code class="language-text">&#x4F20;&#x7EDF;&#x7F16;&#x7A0B;&#xFF1A;&#x4FEE;&#x6539;&#x903B;&#x8F91;&#x89C4;&#x5219;
Abliteration&#xFF1A;&#x4FEE;&#x6539;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x5185;&#x90E8;&#x7684;&#x8868;&#x793A;&#x7A7A;&#x95F4;
</code></pre>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48;&#x53BB;&#x6389;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x6BC1;&#x6389;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#xFF1F;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48;&#x53BB;&#x6389;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x6BC1;&#x6389;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#xFF1F;"></a>3. &#x4E3A;&#x4EC0;&#x4E48;&#x53BB;&#x6389;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x6BC1;&#x6389;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#xFF1F;</h3>
<p>&#x8FD9;&#x662F;&#x5F88;&#x591A;&#x4EBA;&#x7B2C;&#x4E00;&#x6B21;&#x63A5;&#x89E6; Abliteration &#x65F6;&#x6700;&#x7591;&#x60D1;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x7684;&#x9690;&#x85CF;&#x7A7A;&#x95F4;&#x7EF4;&#x5EA6;&#x5F88;&#x9AD8;&#x3002;&#x5047;&#x8BBE;&#xFF1A;</p>
<pre><code class="language-text">&#x9690;&#x85CF;&#x7EF4;&#x5EA6; d = 4096
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x79FB;&#x9664;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x65B9;&#x5411;&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x5269;&#x4E0B;&#x7684;&#x7A7A;&#x95F4;&#x4ECD;&#x7136;&#x6709;&#xFF1A;</p>
<pre><code class="language-text">4096 - 1 = 4095 &#x4E2A;&#x7EF4;&#x5EA6;
</code></pre>
<p>&#x4ECE;&#x7EBF;&#x6027;&#x4EE3;&#x6570;&#x89D2;&#x5EA6;&#x770B;&#xFF0C;&#x8FD9;&#x53EA;&#x79FB;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x81EA;&#x7531;&#x5EA6;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x5728;&#x5176;&#x4ED6;&#x7EF4;&#x5EA6;&#x4E0A;&#x4FDD;&#x7559;&#x5927;&#x91CF;&#x77E5;&#x8BC6;&#x548C;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x89E3;&#x91CA;&#x4E86;&#x4E3A;&#x4EC0;&#x4E48;&#x65E9;&#x671F;&#x5B9E;&#x9A8C;&#x4E2D;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5728;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x660E;&#x663E;&#x51CF;&#x5C11;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x4FDD;&#x7559;&#x76F8;&#x5F53;&#x4E00;&#x90E8;&#x5206;&#x539F;&#x6709;&#x7684;&#x8BED;&#x8A00;&#x751F;&#x6210;&#x3001;&#x77E5;&#x8BC6;&#x548C;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x8BEF;&#x533A;&#xFF1A;</p>
<p><strong>&#x9690;&#x85CF;&#x7A7A;&#x95F4;&#x7684;&#x4E00;&#x4E2A;&#x7EF4;&#x5EA6;&#xFF0C;&#x4E0D;&#x7B49;&#x4E8E;&#x6A21;&#x578B;&#x7684;&#x4E00;&#x79CD;&#x72EC;&#x7ACB;&#x80FD;&#x529B;&#x3002;</strong></p>
<p>&#x591A;&#x4E2A;&#x80FD;&#x529B;&#x53EF;&#x80FD;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x7EC4;&#x795E;&#x7ECF;&#x5143;&#x548C;&#x8868;&#x793A;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x62D2;&#x7EDD;&#x5224;&#x65AD;&#x53EF;&#x80FD;&#x4E0E;&#x98CE;&#x9669;&#x8BC6;&#x522B;&#x3001;&#x610F;&#x56FE;&#x7406;&#x89E3;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x5224;&#x65AD;&#x5B58;&#x5728;&#x8054;&#x7CFB;&#x3002;</p>
<p>&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x867D;&#x7136;&#x5728;&#x6570;&#x5B66;&#x4E0A;&#x53EA;&#x51CF;&#x5C11;&#x4E00;&#x4E2A;&#x7EF4;&#x5EA6;&#xFF0C;&#x4F46;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x5728;&#x8BED;&#x4E49;&#x4E0A;&#x53EA;&#x5220;&#x9664;&#x4E86;&#x4E00;&#x9879;&#x529F;&#x80FD;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F; Abliteration &#x4EA7;&#x751F;&#x526F;&#x4F5C;&#x7528;&#x7684;&#x539F;&#x56E0;&#x4E4B;&#x4E00;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;Abliteration &#x6709;&#x54EA;&#x4E9B;&#x5C40;&#x9650;&#x6027;&#xFF1F;"><a href="#&#x4E09;&#x3001;Abliteration &#x6709;&#x54EA;&#x4E9B;&#x5C40;&#x9650;&#x6027;&#xFF1F;"></a>&#x4E09;&#x3001;Abliteration &#x6709;&#x54EA;&#x4E9B;&#x5C40;&#x9650;&#x6027;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x8FD9;&#x662F;&#x7406;&#x89E3;&#x8FD9;&#x9879;&#x6280;&#x672F;&#x6700;&#x91CD;&#x8981;&#x7684;&#x90E8;&#x5206;&#x3002;</p>
<p>Abliteration &#x770B;&#x8D77;&#x6765;&#x50CF;&#x4E00;&#x79CD;&#x7CBE;&#x51C6;&#x7684;&#x624B;&#x672F;&#xFF0C;&#x4F46;&#x5B83;&#x8DDD;&#x79BB;&#x7CBE;&#x51C6;&#x6A21;&#x578B;&#x7F16;&#x8F91;&#x8FD8;&#x6709;&#x660E;&#x663E;&#x5DEE;&#x8DDD;&#x3002;</p>
<h3 id="1. &#x6700;&#x5927;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x672A;&#x5FC5;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x65B9;&#x5411;"><a href="#1. &#x6700;&#x5927;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x672A;&#x5FC5;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x65B9;&#x5411;"></a>1. &#x6700;&#x5927;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x672A;&#x5FC5;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x65B9;&#x5411;</h3>
<p>2024 &#x5E74; Arditi &#x7B49;&#x4EBA;&#x7684;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86; Single Refusal Direction &#x7684;&#x53D1;&#x73B0;&#x3002;</p>
<p>&#x540E;&#x7EED;&#x7814;&#x7A76;&#x5BF9;&#x8FD9;&#x4E00;&#x7ED3;&#x8BBA;&#x8FDB;&#x884C;&#x4E86;&#x8FDB;&#x4E00;&#x6B65;&#x6311;&#x6218;&#x3002;</p>
<p>&#x5176;&#x4E2D;&#x4E00;&#x9879;&#x7814;&#x7A76;&#x662F; 2025 &#x5E74;&#x53D1;&#x8868;&#x5728; ICML &#x7684;&#xFF1A;</p>
<p>&#x300A;The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence&#x300B;&#x3002;</p>
<p>&#x7814;&#x7A76;&#x63D0;&#x51FA;&#xFF0C;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x53EF;&#x80FD;&#x6D89;&#x53CA;&#x591A;&#x4E2A;&#x72EC;&#x7ACB;&#x65B9;&#x5411;&#xFF0C;&#x4EE5;&#x53CA;&#x66F4;&#x52A0;&#x590D;&#x6742;&#x7684;&#x591A;&#x7EF4;&#x51E0;&#x4F55;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x5B9E;&#x9645;&#x7531;&#x591A;&#x4E2A;&#x65B9;&#x5411;&#x5171;&#x540C;&#x51B3;&#x5B9A;&#xFF1A;</p>
<pre><code class="language-text">&#x62D2;&#x7EDD;&#x884C;&#x4E3A; R = f(r1, r2, r3, &#x2026;, rn)
</code></pre>
<p>&#x90A3;&#x4E48;&#x53EA;&#x5220;&#x9664; r1&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x51FA;&#x73B0;&#xFF1A;</p>
<ul>
<li>&#x67D0;&#x4E9B;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x6D88;&#x5931;&#x3002;</li>
<li>&#x67D0;&#x4E9B;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x4F9D;&#x7136;&#x5B58;&#x5728;&#x3002;</li>
<li>&#x67D0;&#x4E9B;&#x6B63;&#x5E38;&#x56DE;&#x7B54;&#x4E5F;&#x53D7;&#x5230;&#x5F71;&#x54CD;&#x3002;</li>
<li>&#x67D0;&#x4E9B;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x53D1;&#x751F;&#x610F;&#x5916;&#x53D8;&#x5316;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;Single Direction &#x66F4;&#x9002;&#x5408;&#x88AB;&#x7406;&#x89E3;&#x4E3A;&#x4E00;&#x79CD;&#x6709;&#x6548;&#x7684;&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x673A;&#x5236;&#x7684;&#x5B8C;&#x6574;&#x89E3;&#x91CA;&#x3002;</p>
<h3 id="2. &#x8FC7;&#x5EA6;&#x6D88;&#x878D;&#x53EF;&#x80FD;&#x635F;&#x5BB3;&#x6B63;&#x5E38;&#x80FD;&#x529B;"><a href="#2. &#x8FC7;&#x5EA6;&#x6D88;&#x878D;&#x53EF;&#x80FD;&#x635F;&#x5BB3;&#x6B63;&#x5E38;&#x80FD;&#x529B;"></a>2. &#x8FC7;&#x5EA6;&#x6D88;&#x878D;&#x53EF;&#x80FD;&#x635F;&#x5BB3;&#x6B63;&#x5E38;&#x80FD;&#x529B;</h3>
<p>&#x5047;&#x8BBE;&#x67D0;&#x4E2A;&#x5185;&#x90E8;&#x65B9;&#x5411;&#x540C;&#x65F6;&#x53C2;&#x4E0E;&#xFF1A;</p>
<ul>
<li>&#x98CE;&#x9669;&#x8BC6;&#x522B;&#x3002;</li>
<li>&#x62D2;&#x7EDD;&#x56DE;&#x7B54;&#x3002;</li>
<li>&#x5BF9;&#x5371;&#x9669;&#x610F;&#x56FE;&#x7684;&#x5224;&#x65AD;&#x3002;</li>
<li>&#x5BF9;&#x654F;&#x611F;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x7406;&#x89E3;&#x3002;</li>
</ul>
<p>&#x5220;&#x9664;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x9664;&#x4E86;&#x51CF;&#x5C11;&#x62D2;&#x7EDD;&#xFF0C;&#x8FD8;&#x53EF;&#x80FD;&#x964D;&#x4F4E;&#x6A21;&#x578B;&#x8BC6;&#x522B;&#x98CE;&#x9669;&#x7684;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">&#x539F;&#x6A21;&#x578B;

&#x7528;&#x6237;&#xFF1A;&#x6211;&#x6B63;&#x5728;&#x7814;&#x7A76;&#x7F51;&#x7EDC;&#x653B;&#x51FB;&#xFF0C;
      &#x5982;&#x4F55;&#x9632;&#x5FA1; SQL Injection&#xFF1F;
&#x6A21;&#x578B;&#xFF1A;&#x53EF;&#x4EE5;&#x4ECB;&#x7ECD;&#x9632;&#x5FA1;&#x63AA;&#x65BD;&#x3002;

&#x7528;&#x6237;&#xFF1A;&#x5982;&#x4F55;&#x5229;&#x7528; SQL Injection
      &#x653B;&#x51FB;&#x771F;&#x5B9E;&#x7F51;&#x7AD9;&#xFF1F;
&#x6A21;&#x578B;&#xFF1A;&#x62D2;&#x7EDD;&#x63D0;&#x4F9B;&#x653B;&#x51FB;&#x6307;&#x5BFC;&#x3002;
</code></pre>
<p>&#x7ECF;&#x8FC7;&#x7C97;&#x7CD9;&#x7684; Abliteration &#x540E;&#xFF1A;</p>
<p>&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x90FD;&#x53EF;&#x80FD;&#x83B7;&#x5F97;&#x56DE;&#x7B54;&#x3002;</p>
<p>&#x8FD9;&#x770B;&#x4F3C;&#x89E3;&#x51B3;&#x4E86;&#x8FC7;&#x5EA6;&#x62D2;&#x7EDD;&#xFF0C;&#x4F46;&#x4E5F;&#x53EF;&#x80FD;&#x540C;&#x65F6;&#x7834;&#x574F;&#x4E86;&#x539F;&#x6709;&#x7684;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x3002;</p>
<h3 id="3. &#x4E0D;&#x540C;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"><a href="#3. &#x4E0D;&#x540C;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;"></a>3. &#x4E0D;&#x540C;&#x6A21;&#x578B;&#x4E4B;&#x95F4;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x590D;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x62D2;&#x7EDD;&#x65B9;&#x5411;</h3>
<p>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5DE5;&#x7A0B;&#x9650;&#x5236;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x6A21;&#x578B;&#x7684;&#xFF1A;</p>
<ul>
<li>Hidden Size</li>
<li>Transformer &#x67B6;&#x6784;</li>
<li>&#x8BAD;&#x7EC3;&#x6570;&#x636E;</li>
<li>&#x6307;&#x4EE4;&#x5FAE;&#x8C03;&#x65B9;&#x5F0F;</li>
<li>&#x5B89;&#x5168;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;</li>
</ul>
<p>&#x90FD;&#x53EF;&#x80FD;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;Llama &#x6A21;&#x578B;&#x4E2D;&#x63D0;&#x53D6;&#x51FA;&#x6765;&#x7684;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x62FF;&#x53BB;&#x4FEE;&#x6539; Qwen &#x6A21;&#x578B;&#x3002;</p>
<p>&#x5373;&#x4F7F;&#x4E24;&#x4E2A;&#x6A21;&#x578B;&#x67B6;&#x6784;&#x7C7B;&#x4F3C;&#xFF0C;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x4E5F;&#x4E0D;&#x4E00;&#x5B9A;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#x3002;</p>
<p>&#x4E00;&#x822C;&#x9700;&#x8981;&#x9488;&#x5BF9;&#x5177;&#x4F53;&#x6A21;&#x578B;&#x91CD;&#x65B0;&#x63D0;&#x53D6;&#x548C;&#x9A8C;&#x8BC1;&#x3002;</p>
<h3 id="4. &#x5B83;&#x4E0D;&#x4E00;&#x5B9A;&#x80FD;&#x771F;&#x6B63;&#x7406;&#x89E3;&#x7528;&#x6237;&#x610F;&#x56FE;"><a href="#4. &#x5B83;&#x4E0D;&#x4E00;&#x5B9A;&#x80FD;&#x771F;&#x6B63;&#x7406;&#x89E3;&#x7528;&#x6237;&#x610F;&#x56FE;"></a>4. &#x5B83;&#x4E0D;&#x4E00;&#x5B9A;&#x80FD;&#x771F;&#x6B63;&#x7406;&#x89E3;&#x7528;&#x6237;&#x610F;&#x56FE;</h3>
<p>Abliteration &#x4E3B;&#x8981;&#x5904;&#x7406;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x67D0;&#x79CD;&#x8868;&#x793A;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x4F46;&#x4EBA;&#x7C7B;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#x610F;&#x56FE;&#x5F88;&#x590D;&#x6742;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x7814;&#x7A76;&#x548C;&#x7F51;&#x7EDC;&#x653B;&#x51FB;&#x53EF;&#x80FD;&#x4F7F;&#x7528;&#x76F8;&#x540C;&#x7684;&#x6280;&#x672F;&#x672F;&#x8BED;&#x3002;</li>
<li>&#x533B;&#x5B66;&#x7814;&#x7A76;&#x548C;&#x5371;&#x9669;&#x836F;&#x7269;&#x4F7F;&#x7528;&#x53EF;&#x80FD;&#x6D89;&#x53CA;&#x76F8;&#x540C;&#x7684;&#x77E5;&#x8BC6;&#x3002;</li>
<li>&#x5C0F;&#x8BF4;&#x521B;&#x4F5C;&#x548C;&#x73B0;&#x5B9E;&#x64CD;&#x4F5C;&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x76F8;&#x4F3C;&#x7684;&#x63CF;&#x8FF0;&#x3002;</li>
</ul>
<p>&#x5B89;&#x5168;&#x5224;&#x65AD;&#x9700;&#x8981;&#x7ED3;&#x5408;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x7528;&#x6237;&#x610F;&#x56FE;&#x3001;&#x6F5C;&#x5728;&#x98CE;&#x9669;&#x4EE5;&#x53CA;&#x56DE;&#x7B54;&#x7684;&#x5177;&#x4F53;&#x7528;&#x9014;&#x3002;</p>
<p>&#x5355;&#x7EAF;&#x5220;&#x9664;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x5E76;&#x4E0D;&#x80FD;&#x89E3;&#x51B3;&#x8FD9;&#x4E9B;&#x8BED;&#x4E49;&#x5224;&#x65AD;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="5. &#x5B83;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x5F7B;&#x5E95;&#x6CA1;&#x6709;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E86;"><a href="#5. &#x5B83;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x5F7B;&#x5E95;&#x6CA1;&#x6709;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E86;"></a>5. &#x5B83;&#x4E0D;&#x4EE3;&#x8868;&#x6A21;&#x578B;&#x5F7B;&#x5E95;&#x6CA1;&#x6709;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E86;</h3>
<p>&#x6A21;&#x578B;&#x7684;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x4E0D;&#x53EA;&#x6709;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x5B83;&#x8FD8;&#x53EF;&#x80FD;&#x6765;&#x81EA;&#xFF1A;</p>
<ul>
<li>&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x5F62;&#x6210;&#x7684;&#x884C;&#x4E3A;&#x503E;&#x5411;&#x3002;</li>
<li>&#x7CFB;&#x7EDF;&#x63D0;&#x793A;&#x8BCD;&#x3002;</li>
<li>&#x8F93;&#x51FA;&#x5BA1;&#x6838;&#x3002;</li>
<li>Harness &#x5C42;&#x6743;&#x9650;&#x7BA1;&#x7406;&#x3002;</li>
</ul>
<p>&#x7ECF;&#x8FC7; Abliteration &#x7684;&#x6A21;&#x578B;&#x4ECD;&#x7136;&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x62D2;&#x7EDD;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x5728;&#x5176;&#x4ED6;&#x5C42;&#x9762;&#x53D7;&#x5230;&#x9650;&#x5236;&#x3002;</p>
<p>&#x53CD;&#x8FC7;&#x6765;&#xFF0C;&#x5373;&#x4F7F;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x8BF4;&#x300C;&#x6211;&#x4E0D;&#x80FD;&#x56DE;&#x7B54;&#x300D;&#xFF0C;&#x4E5F;&#x4E0D;&#x4EE3;&#x8868;&#x5B83;&#x4E00;&#x5B9A;&#x5177;&#x5907;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x7684;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x5B83;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x76F4;&#x63A5;&#x8F93;&#x51FA;&#x9519;&#x8BEF;&#x3001;&#x6DF7;&#x4E71;&#x6216;&#x8005;&#x4E0D;&#x5B8C;&#x6574;&#x7684;&#x5185;&#x5BB9;&#x3002;</p>
<h3 id="6. &#x8BC4;&#x4F30;&#x6807;&#x51C6;&#x5B58;&#x5728;&#x95EE;&#x9898;"><a href="#6. &#x8BC4;&#x4F30;&#x6807;&#x51C6;&#x5B58;&#x5728;&#x95EE;&#x9898;"></a>6. &#x8BC4;&#x4F30;&#x6807;&#x51C6;&#x5B58;&#x5728;&#x95EE;&#x9898;</h3>
<p>&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x7ECF;&#x8FC7; Abliteration &#x540E;&#xFF0C;&#x5982;&#x679C;&#x62D2;&#x7EDD;&#x7387;&#x4ECE; 80% &#x964D;&#x5230; 10%&#xFF0C;&#x662F;&#x4E0D;&#x662F;&#x8BF4;&#x660E;&#x5B83;&#x53D8;&#x597D;&#x4E86;&#xFF1F;</p>
<p>&#x4E0D;&#x4E00;&#x5B9A;&#x3002;</p>
<p>&#x62D2;&#x7EDD;&#x7387;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x6307;&#x6807;&#x3002;</p>
<p>&#x81F3;&#x5C11;&#x8FD8;&#x5E94;&#x8BE5;&#x8003;&#x8651;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x8BC4;&#x4F30;&#x6307;&#x6807;</th>
<th>&#x8981;&#x56DE;&#x7B54;&#x7684;&#x95EE;&#x9898;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Refusal Rate</td>
<td>&#x662F;&#x5426;&#x51CF;&#x5C11;&#x4E86;&#x62D2;&#x7EDD;&#xFF1F;</td>
</tr>
<tr>
<td>False Refusal Rate</td>
<td>&#x662F;&#x5426;&#x51CF;&#x5C11;&#x4E86;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x62D2;&#x7EDD;&#xFF1F;</td>
</tr>
<tr>
<td>Harmful Compliance Rate</td>
<td>&#x662F;&#x5426;&#x589E;&#x52A0;&#x4E86;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x7684;&#x670D;&#x4ECE;&#x7387;&#xFF1F;</td>
</tr>
<tr>
<td>General Capability</td>
<td>&#x901A;&#x7528;&#x80FD;&#x529B;&#x662F;&#x5426;&#x4E0B;&#x964D;&#xFF1F;</td>
</tr>
<tr>
<td>Truthfulness</td>
<td>&#x56DE;&#x7B54;&#x662F;&#x5426;&#x4ECD;&#x7136;&#x51C6;&#x786E;&#xFF1F;</td>
</tr>
<tr>
<td>Robustness</td>
<td>&#x6362;&#x4E00;&#x79CD;&#x63D0;&#x95EE;&#x65B9;&#x5F0F;&#x662F;&#x5426;&#x4ECD;&#x7136;&#x7A33;&#x5B9A;&#xFF1F;</td>
</tr>
</tbody>
</table>
<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x62D2;&#x7EDD;&#x4EFB;&#x4F55;&#x95EE;&#x9898;&#xFF0C;&#x4F46;&#x4E5F;&#x4E0D;&#x518D;&#x533A;&#x5206;&#x95EE;&#x9898;&#x662F;&#x5426;&#x5408;&#x7406;&#xFF0C;&#x8FD9;&#x4E0D;&#x80FD;&#x79F0;&#x4E3A;&#x6210;&#x529F;&#x7684;&#x6A21;&#x578B;&#x7F16;&#x8F91;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5F7B;&#x5E95;&#x5220;&#x9664;&#x5E76;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x8DB3;&#x591F;&#x597D;&#x7684;&#x76EE;&#x6807;&#xFF0C;&#x90A3;&#x4E48;&#x884C;&#x4E3A;&#x7F16;&#x8F91;&#x8FD8;&#x80FD;&#x5F80;&#x54EA;&#x4E2A;&#x65B9;&#x5411;&#x8D70;&#xFF1F;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Arditi &#x7B49;&#xFF0C;&#x300A;Refusal in Language Models Is Mediated by a Single Direction&#x300B;&#xFF0C;NeurIPS&#xFF0C;2024&#xFF1A;https://arxiv.org/abs/2406.11717</li>
<li>Wollschl&#xE4;ger &#x7B49;&#xFF0C;&#x300A;The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence&#x300B;&#xFF0C;ICML&#xFF0C;2025&#xFF1A;https://proceedings.mlr.press/v267/wollschlager25a.html</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,F=[{level:1,title:"只删一个拒绝方向，为什么也会影响模型的其他能力？",children:[{level:2,title:"一、它和之前的方法有什么区别？",children:[]},{level:2,title:"二、为什么这种方法有效？它背后的原理是什么？",children:[{level:3,title:"1. 模型没有在执行一张明确的规则清单",children:[]},{level:3,title:"2. 高维向量空间允许我们对行为进行几何操作",children:[]},{level:3,title:"3. 为什么去掉一个方向，不会直接毁掉整个模型？",children:[]}]},{level:2,title:"三、Abliteration 有哪些局限性？",children:[{level:3,title:"1. 最大的问题：拒绝行为未必只有一个方向",children:[]},{level:3,title:"2. 过度消融可能损害正常能力",children:[]},{level:3,title:"3. 不同模型之间不能直接复用同一个拒绝方向",children:[]},{level:3,title:"4. 它不一定能真正理解用户意图",children:[]},{level:3,title:"5. 它不代表模型彻底没有安全机制了",children:[]},{level:3,title:"6. 评估标准存在问题",children:[]}]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
