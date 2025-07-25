const x={},F=`<h1 id="ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;"><a href="#ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;"></a>ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;</h1>
<p>ControlNet &#x548C; LoRA &#x5E76;&#x4E0D;&#x662F;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#x7684;&#x4E1C;&#x897F;&#xFF0C;&#x5C3D;&#x7BA1;&#x5B83;&#x4EEC;&#x90FD;&#x4E0E;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x548C;&#x56FE;&#x50CF;&#x751F;&#x6210;&#x6709;&#x5173;&#x3002;</p>
<p>ControlNet&#xFF1A;</p>
<ul>
<li>&#x4F5C;&#x7528;&#xFF1A;&#x7528;&#x4E8E;&#x63A7;&#x5236; AI &#x56FE;&#x50CF;&#x751F;&#x6210;&#x3002;</li>
<li>&#x7279;&#x70B9;&#xFF1A;&#x5141;&#x8BB8;&#x7528;&#x6237;&#x5BF9;&#x751F;&#x6210;&#x7684;&#x56FE;&#x50CF;&#x8FDB;&#x884C;&#x7CBE;&#x7EC6;&#x7684;&#x63A7;&#x5236;&#x3002;</li>
<li>&#x5E94;&#x7528;&#xFF1A;&#x5728;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x3001;&#x827A;&#x672F;&#x8BBE;&#x8BA1;&#x3001;&#x865A;&#x62DF;&#x73B0;&#x5B9E;&#x7B49;&#x9886;&#x57DF;&#x4E2D;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002;</li>
<li>&#x793A;&#x4F8B;&#xFF1A;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x4E0A;&#x4F20;&#x7EBF;&#x7A3F;&#xFF0C;&#x8BA9; AI &#x5E2E;&#x52A9;&#x586B;&#x8272;&#x6E32;&#x67D3;&#x3001;&#x63A7;&#x5236;&#x4EBA;&#x7269;&#x59FF;&#x6001;&#x7B49;&#x3002;</li>
</ul>
<p>LoRA&#xFF1A;</p>
<ul>
<li>&#x4F5C;&#x7528;&#xFF1A;&#x7528;&#x4E8E;&#x5927;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x5FAE;&#x8C03;&#x3002;</li>
<li>&#x7279;&#x70B9;&#xFF1A;&#x901A;&#x8FC7;&#x964D;&#x7EF4;&#x548C;&#x5347;&#x7EF4;&#x6765;&#x6A21;&#x62DF;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x91CF;&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C11;&#x8BAD;&#x7EC3;&#x6210;&#x672C;&#x3002;</li>
<li>&#x5E94;&#x7528;&#xFF1A;&#x5728;&#x53C2;&#x6570;&#x91CF;&#x8F83;&#x5927;&#x7684;&#x6A21;&#x578B;&#x5FAE;&#x8C03;&#x4E2D;&#x8868;&#x73B0;&#x4F18;&#x5F02;&#x3002;</li>
</ul>
<table>
<thead>
<tr>
<th>&#x9879;&#x76EE;</th>
<th>LoRA</th>
<th>ControlNet</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6539;&#x52A8;&#x65B9;&#x5F0F;</td>
<td>&#x63D2;&#x4E24;&#x4E2A;&#x77E9;&#x9635;</td>
<td>&#x590D;&#x5236; UNet + &#x591A;&#x7EC4;&#x6A2A;&#x5411;&#x8FDE;&#x63A5;</td>
</tr>
<tr>
<td>&#x8BAD;&#x7EC3;&#x5F00;&#x9500;</td>
<td>&#x5F88;&#x5C0F;</td>
<td>&#x8F83;&#x5927;&#xFF08;&#x526F;&#x7F51;&#x7EDC;&#xFF09;</td>
</tr>
<tr>
<td>&#x9002;&#x7528;&#x9886;&#x57DF;</td>
<td>&#x901A;&#x7528;&#x6A21;&#x578B;&#xFF08;NLP, CV, Diffusion&#xFF09;</td>
<td>&#x4E3B;&#x8981;&#x662F;&#x6269;&#x6563;&#x56FE;&#x50CF;&#x6A21;&#x578B;</td>
</tr>
<tr>
<td>&#x63A7;&#x5236;&#x80FD;&#x529B;</td>
<td>&#x5F31;&#xFF08;&#x7528;&#x4E8E;&#x5FAE;&#x8C03;&#xFF09;</td>
<td>&#x5F3A;&#xFF08;&#x7ED3;&#x6784;&#x76F4;&#x63A5;&#x63A7;&#x5236;&#xFF09;</td>
</tr>
</tbody>
</table>
<h1 id="ControlNet"><a href="#ControlNet"></a>ControlNet</h1>
<p>ControlNet &#x662F;&#x4E00;&#x4E2A;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#xFF0C;&#x7528;&#x4E8E;&#x63A7;&#x5236; Stable Diffusion&#xFF08;SD&#xFF09;&#x6A21;&#x578B;&#x5E76;&#x6269;&#x5C55;&#x5176;&#x8F93;&#x5165;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x4F5C;&#x7528;</p>
<ul>
<li>&#x53EF;&#x63A7;&#x6027;&#x63D0;&#x5347;&#xFF1A;ControlNet &#x5141;&#x8BB8;&#x521B;&#x4F5C;&#x8005;&#x901A;&#x8FC7;&#x6DFB;&#x52A0;&#x989D;&#x5916;&#x7684;&#x63A7;&#x5236;&#x6761;&#x4EF6;&#x6765;&#x5F15;&#x5BFC; SD &#x6A21;&#x578B;&#x751F;&#x6210;&#x56FE;&#x50CF;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8; AI &#x56FE;&#x50CF;&#x751F;&#x6210;&#x7684;&#x53EF;&#x63A7;&#x6027;&#x3002;</li>
<li>&#x591A;&#x6837;&#x6027;&#xFF1A;&#x5B83;&#x652F;&#x6301;&#x591A;&#x79CD;&#x8F93;&#x5165;&#x6761;&#x4EF6;&#xFF0C;&#x5982; Canny &#x8FB9;&#x7F18;&#x3001;&#x8BED;&#x4E49;&#x5206;&#x5272;&#x56FE;&#x3001;&#x5173;&#x952E;&#x70B9;&#x3001;&#x6D82;&#x9E26;&#x7B49;&#xFF0C;&#x62D3;&#x5C55;&#x4E86; SD &#x7684;&#x80FD;&#x529B;&#x8FB9;&#x754C;&#x3002;</li>
</ul>
<h2 id="&#x539F;&#x7406;"><a href="#&#x539F;&#x7406;"></a>&#x539F;&#x7406;</h2>
<p>&#x5047;&#x8BBE;&#x4F60;&#x6709;&#x539F;&#x59CB;&#x7684; Stable Diffusion &#x7684; UNet&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A; U &#x5F62;&#x7ED3;&#x6784;&#xFF1A;</p>
<pre><code>Encoder (Down) &#x2192; Bottleneck &#x2192; Decoder (Up)
</code></pre>
<p>&#x1F9E9;&#xFF08;1&#xFF09;&#x590D;&#x5236;&#x4E3B;&#x6A21;&#x578B;&#x7684; UNet&#xFF0C;&#x4F5C;&#x4E3A; &#x4E00;&#x4E2A;&#x526F;&#x7F51;&#x7EDC;&#xFF08;control branch&#xFF09;
&#x8FD9;&#x4E2A;&#x526F;&#x7F51;&#x7EDC;&#x8DDF;&#x4E3B; UNet &#x7ED3;&#x6784;&#x76F8;&#x540C;&#xFF0C;&#x4F46;&#x53EA;&#x63A5;&#x6536;&#x4F60;&#x7ED9;&#x7684;&#x201C;&#x63A7;&#x5236;&#x56FE;&#x201D;&#xFF08;&#x6BD4;&#x5982;&#x59FF;&#x52BF;&#x56FE;&#x3001;&#x8FB9;&#x7F18;&#x56FE;&#xFF09;&#xFF1B;</p>
<p>&#x5B83;&#x4E0D;&#x751F;&#x6210;&#x56FE;&#x50CF;&#xFF0C;&#x53EA;&#x662F;&#x63D0;&#x53D6;&#x63A7;&#x5236;&#x56FE;&#x4E2D;&#x7684;&#x7ED3;&#x6784;&#x3001;&#x7EBF;&#x7D22;&#x4FE1;&#x606F;&#xFF1B;</p>
<p>&#x7C7B;&#x4F3C;&#x201C;&#x52A9;&#x624B;&#x5206;&#x6790;&#x7EBF;&#x7A3F;&#x56FE;&#x201D;&#x3002;</p>
<p>&#x1F9E9;&#xFF08;2&#xFF09;&#x6BCF;&#x4E00;&#x5C42; feature&#xFF0C;&#x90FD;&#x7528;&#x6A2A;&#x5411;&#x8FDE;&#x63A5;&#xFF08;hint&#xFF09;&#x52A0;&#x56DE;&#x4E3B; UNet
&#x4E3B; UNet &#x672C;&#x6765;&#x4ECE; latent &#x4E2D;&#x6062;&#x590D;&#x56FE;&#x50CF;&#xFF1B;</p>
<p>ControlNet &#x7684;&#x526F;&#x7F51;&#x7EDC;&#x5728;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x52A0;&#x4E00;&#x7EC4;&#x201C;&#x63A7;&#x5236;&#x4FE1;&#x53F7;&#x201D;&#xFF0C;&#x544A;&#x8BC9;&#x4E3B;&#x5E72;&#xFF1A;&#x201C;&#x4F60;&#x8FD9;&#x91CC;&#x5E94;&#x8BE5;&#x7167;&#x7740;&#x8FD9;&#x4E2A;&#x59FF;&#x52BF;&#x753B;&#x201D;&#x3001;&#x201C;&#x8FD9;&#x4E2A;&#x8FB9;&#x7F18;&#x8981;&#x4FDD;&#x7559;&#x201D;&#x3002;</p>
<ul>
<li><a href="https://juejin.cn/post/7210369671656505399">ControlNet &#x8BBA;&#x6587;&#x89E3;&#x6790;</a></li>
</ul>
<h1 id="LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;"><a href="#LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;"></a>LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;</h1>
<p>LoRA &#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5927;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x5FAE;&#x8C03;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="&#x539F;&#x7406;"><a href="#&#x539F;&#x7406;"></a>&#x539F;&#x7406;</h2>
<p>&#x7406;&#x89E3; LoRA&#xFF08;Low-Rank Adaptation&#xFF0C;&#x4F4E;&#x79E9;&#x9002;&#x914D;&#xFF09;&#x6700;&#x6838;&#x5FC3;&#x7684;&#x4E00;&#x70B9;&#x662F;&#xFF1A;</p>
<blockquote>
<p><strong>&#x5B83;&#x4E0D;&#x662F;&#x538B;&#x7F29;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x7528;&#x201C;&#x538B;&#x7F29;&#x7684;&#x65B9;&#x5F0F;&#x201D;&#x6765;&#x8BAD;&#x7EC3;&#x51FA;&#x65B0;&#x7684;&#x80FD;&#x529B;&#x3002;</strong></p>
</blockquote>
<hr>
<h3 id="&#x1F31F;&#x4E00;&#x56FE;&#x80DC;&#x5343;&#x8A00;&#xFF1A;&#x7C7B;&#x6BD4;&#x56FE;&#x89E3;"><a href="#&#x1F31F;&#x4E00;&#x56FE;&#x80DC;&#x5343;&#x8A00;&#xFF1A;&#x7C7B;&#x6BD4;&#x56FE;&#x89E3;"></a>&#x1F31F;&#x4E00;&#x56FE;&#x80DC;&#x5343;&#x8A00;&#xFF1A;&#x7C7B;&#x6BD4;&#x56FE;&#x89E3;</h3>
<p>&#x5047;&#x8BBE;&#x4F60;&#x6709;&#x4E00;&#x4E2A;&#x5E9E;&#x5927;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x7EBF;&#x6027;&#x5C42;&#x7684;&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x5F88;&#x5927;&#x7684;&#x77E9;&#x9635; <code>W</code>&#xFF08;&#x6BD4;&#x5982; 4096 &#xD7; 4096&#xFF09;&#xFF0C;&#x76F4;&#x63A5; fine-tune &#x9700;&#x8981;&#x66F4;&#x65B0;&#x8FD9;&#x4E48;&#x5927;&#x7684;&#x77E9;&#x9635;&#xFF0C;&#x6210;&#x672C;&#x5F88;&#x9AD8;&#x3002;</p>
<p>LoRA &#x7684;&#x60F3;&#x6CD5;&#x662F;&#xFF1A;</p>
<p>&#x1F9E0; <strong>&#x4E0D;&#x8981;&#x52A8;&#x539F;&#x59CB;&#x5927;&#x77E9;&#x9635; W</strong>&#xFF0C;
&#x1F527; <strong>&#x53EA;&#x5728;&#x65C1;&#x8FB9;&#x52A0;&#x4E24;&#x4E2A;&#x201C;&#x5C0F;&#x77E9;&#x9635;&#x201D;A &#x548C; B&#xFF08;&#x4F4E;&#x79E9;&#xFF09;&#xFF0C;&#x518D;&#x8BAD;&#x7EC3;&#x8FD9;&#x4E24;&#x4E2A;&#x5C0F;&#x77E9;&#x9635;</strong>&#x3002;</p>
<p>&#x5B83;&#x6784;&#x5EFA;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code>W_new = W + &#x394;W
&#x394;W = B @ A    # A &#x662F;&#x4F4E;&#x79E9;&#xFF08;r&#xD7;d&#xFF09;&#xFF0C;B &#x662F;&#xFF08;d&#xD7;r&#xFF09;&#xFF0C;r &#x8FDC;&#x5C0F;&#x4E8E; d
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#xFF1A;
&#x9AD8;&#x7EF4;&#x7684;&#x53D8;&#x6362; <code>&#x394;W</code> &#x88AB;&#x5206;&#x89E3;&#x6210;&#x4E24;&#x4E2A;&#x4F4E;&#x7EF4;&#x77E9;&#x9635;&#x7684;&#x4E58;&#x79EF;&#x3002;</p>
<hr>
<h2 id="&#x1F4E6; &#x7528;&#x4F53;&#x611F;&#x66F4;&#x5F3A;&#x7684;&#x7C7B;&#x6BD4;&#x8BF4;&#x660E;"><a href="#&#x1F4E6; &#x7528;&#x4F53;&#x611F;&#x66F4;&#x5F3A;&#x7684;&#x7C7B;&#x6BD4;&#x8BF4;&#x660E;"></a>&#x1F4E6; &#x7528;&#x4F53;&#x611F;&#x66F4;&#x5F3A;&#x7684;&#x7C7B;&#x6BD4;&#x8BF4;&#x660E;</h2>
<h3 id="&#x1F3A8; &#x7C7B;&#x6BD4;&#x4E00;&#xFF1A;&#x753B;&#x5E08;&#x753B;&#x98CE;&#x8FC1;&#x79FB;"><a href="#&#x1F3A8; &#x7C7B;&#x6BD4;&#x4E00;&#xFF1A;&#x753B;&#x5E08;&#x753B;&#x98CE;&#x8FC1;&#x79FB;"></a>&#x1F3A8; &#x7C7B;&#x6BD4;&#x4E00;&#xFF1A;&#x753B;&#x5E08;&#x753B;&#x98CE;&#x8FC1;&#x79FB;</h3>
<p>&#x4F60;&#x662F;&#x4E00;&#x4E2A;&#x8D85;&#x5F3A;&#x753B;&#x5E08;&#xFF08;&#x5927;&#x6A21;&#x578B; <code>W</code>&#xFF09;&#xFF0C;&#x4F60;&#x4F1A;&#x753B;&#x6CB9;&#x753B;&#x3002;</p>
<p>&#x73B0;&#x5728;&#x6709;&#x4EBA;&#x60F3;&#x8BA9;&#x4F60;&#x753B;&#x52A8;&#x6F2B;&#x98CE;&#x3002;&#x4F60;&#x5B8C;&#x5168;&#x53EF;&#x4EE5;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x81EA;&#x5DF1;&#xFF0C;&#x6539;&#x6389;&#x6240;&#x6709;&#x6CB9;&#x753B;&#x6280;&#x5DE7;&#xFF08;Fine-tune &#x6574;&#x4E2A;&#x6A21;&#x578B;&#xFF09;&#xFF0C;&#x4F46;&#x90A3;&#x5F88;&#x75DB;&#x82E6;&#x4E5F;&#x6210;&#x672C;&#x9AD8;&#x3002;</p>
<p>LoRA &#x7684;&#x65B9;&#x5F0F;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x7ED9;&#x4F60;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x8F7B;&#x91CF;&#x7684;&#x201C;&#x98CE;&#x683C;&#x6EE4;&#x955C;&#x201D;&#x7EC4;&#x4EF6;&#xFF08;&#x4F4E;&#x79E9;&#x77E9;&#x9635;&#xFF09;&#xFF0C;&#x4E13;&#x95E8;&#x8C03;&#x6574;&#x4F60;&#x7684;&#x8F93;&#x51FA;&#x98CE;&#x683C;&#x3002;&#x4F60;&#x672C;&#x4EBA;&#x4E0D;&#x53D8;&#xFF0C;&#x53EA;&#x8BAD;&#x7EC3;&#x8FD9;&#x5C0F;&#x6EE4;&#x955C;&#x3002;</p>
</blockquote>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<ul>
<li>&#x539F;&#x59CB;&#x6280;&#x80FD;&#x4FDD;&#x7559;&#xFF08;&#x51BB;&#x7ED3;&#x539F;&#x6A21;&#x578B;&#xFF09;&#xFF1B;</li>
<li>&#x65B0;&#x6280;&#x80FD;&#x901A;&#x8FC7;&#x6781;&#x5C11;&#x7684;&#x53C2;&#x6570;&#x5C31;&#x80FD;&#x5B66;&#x5230;&#xFF08;&#x53EA;&#x8BAD;&#x7EC3; A &#x548C; B&#xFF09;&#xFF1B;</li>
<li>&#x5207;&#x6362;&#x98CE;&#x683C;&#xFF08;&#x52A0;&#x8F7D;&#x4E0D;&#x540C; LoRA &#x53C2;&#x6570;&#xFF09;&#x975E;&#x5E38;&#x5FEB;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x2699;&#xFE0F; &#x7C7B;&#x6BD4;&#x4E8C;&#xFF1A;&#x673A;&#x68B0;&#x81C2;&#x5FAE;&#x8C03;"><a href="#&#x2699;&#xFE0F; &#x7C7B;&#x6BD4;&#x4E8C;&#xFF1A;&#x673A;&#x68B0;&#x81C2;&#x5FAE;&#x8C03;"></a>&#x2699;&#xFE0F; &#x7C7B;&#x6BD4;&#x4E8C;&#xFF1A;&#x673A;&#x68B0;&#x81C2;&#x5FAE;&#x8C03;</h3>
<p>&#x4F60;&#x6709;&#x4E00;&#x53EA;&#x673A;&#x68B0;&#x81C2;&#xFF08;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF09;&#x7528;&#x6765;&#x88C5;&#x914D;&#x96F6;&#x4EF6;&#xFF0C;&#x5B83;&#x52A8;&#x4F5C;&#x7A33;&#x5B9A;&#x7CBE;&#x51C6;&#xFF08;&#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF09;&#x3002;</p>
<p>&#x73B0;&#x5728;&#x5DE5;&#x5382;&#x6765;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x578B;&#x53F7;&#x7684;&#x96F6;&#x4EF6;&#xFF0C;&#x52A8;&#x4F5C;&#x9700;&#x8981;&#x8C03;&#x6574;&#xFF0C;&#x4F46;&#x4F60;&#x4E0D;&#x60F3;&#x6362;&#x6389;&#x6574;&#x53EA;&#x673A;&#x68B0;&#x81C2;&#xFF08;&#x592A;&#x8D35;&#xFF09;&#x3002;</p>
<p>LoRA &#x7684;&#x505A;&#x6CD5;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x7ED9;&#x673A;&#x68B0;&#x81C2;&#x7684;&#x67D0;&#x4E2A;&#x5173;&#x8282;&#x52A0;&#x4E24;&#x4E2A;&#x5F39;&#x7C27;&#x548C;&#x4E00;&#x4E2A;&#x6ED1;&#x8F68;&#xFF08;&#x4F4E;&#x79E9; A &#x548C; B&#xFF09;&#xFF0C;&#x4E13;&#x95E8;&#x7528;&#x6765;&#x5FAE;&#x8C03;&#x52A8;&#x4F5C;&#x3002;&#x8FD9;&#x6837;&#x6539;&#x52A8;&#x5C0F;&#xFF0C;&#x6548;&#x679C;&#x597D;&#x3002;</p>
</blockquote>
<hr>
<h2 id="&#x1F9E0; LoRA &#x662F;&#x4E0D;&#x662F;&#x538B;&#x7F29;&#x6A21;&#x578B;&#xFF1F;"><a href="#&#x1F9E0; LoRA &#x662F;&#x4E0D;&#x662F;&#x538B;&#x7F29;&#x6A21;&#x578B;&#xFF1F;"></a>&#x1F9E0; LoRA &#x662F;&#x4E0D;&#x662F;&#x538B;&#x7F29;&#x6A21;&#x578B;&#xFF1F;</h2>
<p>&#x4E0D;&#x5B8C;&#x5168;&#x662F;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6CD5;</th>
<th>&#x662F;&#x5426;&#x538B;&#x7F29;&#x6A21;&#x578B;&#xFF1F;</th>
<th>&#x662F;&#x5426;&#x53EF;&#x5FEB;&#x901F;&#x8FC1;&#x79FB;&#xFF1F;</th>
<th>&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x91CF;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5168;&#x53C2;&#x6570; Fine-tune</td>
<td>&#x274C;</td>
<td>&#x274C;</td>
<td>&#x5168;&#x91CF;&#x66F4;&#x65B0;</td>
</tr>
<tr>
<td>LoRA</td>
<td>&#x2705;&#xFF08;&#x66F4;&#x65B0;&#x91CF;&#x5C11;&#xFF09;</td>
<td>&#x2705;&#xFF08;&#x53EF;&#x5FEB;&#x901F;&#x5207;&#x6362; LoRA adapter&#xFF09;</td>
<td>&#x975E;&#x5E38;&#x5C11;&#xFF08;&lt; 1% &#x53C2;&#x6570;&#xFF09;</td>
</tr>
<tr>
<td>&#x6A21;&#x578B;&#x526A;&#x679D;&#x3001;&#x84B8;&#x998F;</td>
<td>&#x2705;</td>
<td>&#x274C;&#xFF08;&#x9700;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#xFF09;</td>
<td>&#x56FA;&#x5B9A;</td>
</tr>
</tbody>
</table>
<p>&#x2705; <strong>LoRA &#x662F;&#x4E00;&#x79CD;&#x201C;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x8BAD;&#x7EC3;&#x201D;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x89C6;&#x4E3A;&#x662F;&#x4E00;&#x79CD;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#x7684;&#x201C;&#x538B;&#x7F29;&#x201D;</strong>&#x3002;</p>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li>GPT</li>
</ul>
`,E=[{level:1,title:"ControlNet 与 LoRA 插件",children:[]},{level:1,title:"ControlNet",children:[{level:2,title:"原理",children:[]}]},{level:1,title:"LoRA（Low-Rank Adaptation）低秩适应",children:[{level:2,title:"原理",children:[{level:3,title:"🌟一图胜千言：类比图解",children:[]}]},{level:2,title:"📦 用体感更强的类比说明",children:[{level:3,title:"🎨 类比一：画师画风迁移",children:[]},{level:3,title:"⚙️ 类比二：机械臂微调",children:[]}]},{level:2,title:"🧠 LoRA 是不是压缩模型？",children:[]}]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
