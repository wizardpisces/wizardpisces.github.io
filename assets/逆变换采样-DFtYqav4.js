const x={},F=`<h1 id="&#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;"><a href="#&#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;"></a>&#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;</h1>
<p>&#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;&#xFF08;Inverse Transform Sampling&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x4ECE;&#x4EFB;&#x610F;&#x6982;&#x7387;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x7684;&#x57FA;&#x672C;&#x601D;&#x60F3;&#x662F;&#x5229;&#x7528;&#x5747;&#x5300;&#x5206;&#x5E03;&#x7684;&#x6837;&#x672C;&#x751F;&#x6210;&#x7B26;&#x5408;&#x76EE;&#x6807;&#x5206;&#x5E03;&#x7684;&#x6837;&#x672C;&#x3002;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x57FA;&#x4E8E;&#x76EE;&#x6807;&#x5206;&#x5E03;&#x7684;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;CDF&#xFF0C;Cumulative Distribution Function&#xFF09;&#x548C;&#x9006;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;Inverse CDF&#xFF0C;&#x6216;Quantile Function&#xFF09;&#x3002;</p>
<h3 id="1. &#x57FA;&#x672C;&#x6B65;&#x9AA4;"><a href="#1. &#x57FA;&#x672C;&#x6B65;&#x9AA4;"></a>1. &#x57FA;&#x672C;&#x6B65;&#x9AA4;</h3>
<p><strong>&#x6B65;&#x9AA4;1&#xFF1A;&#x4ECE;&#x5747;&#x5300;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;</strong>
&#x9996;&#x5148;&#xFF0C;&#x4ECE;&#x5747;&#x5300;&#x5206;&#x5E03; (U(0, 1)) &#x4E2D;&#x62BD;&#x53D6;&#x6837;&#x672C;&#x3002;&#x5747;&#x5300;&#x5206;&#x5E03;&#x610F;&#x5473;&#x7740;&#x6BCF;&#x4E2A;&#x6570;&#x5B57;&#x5728;0&#x5230;1&#x4E4B;&#x95F4;&#x51FA;&#x73B0;&#x7684;&#x6982;&#x7387;&#x76F8;&#x7B49;&#x3002;</p>
<p><strong>&#x6B65;&#x9AA4;2&#xFF1A;&#x8BA1;&#x7B97;&#x9006;&#x53D8;&#x6362;</strong>
&#x4F7F;&#x7528;&#x76EE;&#x6807;&#x5206;&#x5E03;&#x7684;&#x9006;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;Inverse CDF&#xFF09;&#x5C06;&#x4ECE;&#x5747;&#x5300;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x53D6;&#x7684;&#x6837;&#x672C;&#x8F6C;&#x6362;&#x4E3A;&#x7B26;&#x5408;&#x76EE;&#x6807;&#x5206;&#x5E03;&#x7684;&#x6837;&#x672C;&#x3002;</p>
<h3 id="2. &#x793A;&#x4F8B;&#xFF1A;&#x4ECE;&#x6307;&#x6570;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;"><a href="#2. &#x793A;&#x4F8B;&#xFF1A;&#x4ECE;&#x6307;&#x6570;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;"></a>2. &#x793A;&#x4F8B;&#xFF1A;&#x4ECE;&#x6307;&#x6570;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x60F3;&#x4ECE;&#x6307;&#x6570;&#x5206;&#x5E03;&#x4E2D;&#x62BD;&#x6837;&#x3002;&#x6307;&#x6570;&#x5206;&#x5E03;&#x7684;&#x6982;&#x7387;&#x5BC6;&#x5EA6;&#x51FD;&#x6570;&#xFF08;PDF&#xFF09;&#x548C;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;CDF&#xFF09;&#x5206;&#x522B;&#x5982;&#x4E0B;&#xFF1A;</p>
<ul>
<li>&#x6982;&#x7387;&#x5BC6;&#x5EA6;&#x51FD;&#x6570;&#xFF08;PDF&#xFF09;&#xFF1A;
$$f(x; \\lambda) = \\lambda e^{-\\lambda x} $$</li>
<li>&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;CDF&#xFF09;&#xFF1A;
$$F(x; \\lambda) = 1 - e^{-\\lambda x} $$</li>
</ul>
<p>&#x5BF9;&#x4E8E;&#x6307;&#x6570;&#x5206;&#x5E03;&#xFF1A;</p>
<ul>
<li><strong>&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;CDF&#xFF09;</strong> (F(x)) &#x7ED9;&#x51FA;&#x4E86; (X) &#x5C0F;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x67D0;&#x4E2A;&#x503C;&#x7684;&#x6982;&#x7387;&#x3002;</li>
<li><strong>&#x9006;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#xFF08;Inverse CDF&#xFF09;</strong> ($F^{-1}(p)$)&#xFF0C;&#x5176;&#x4E2D; ($p \\in [0, 1]$)&#xFF0C;&#x7ED9;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x6982;&#x7387;&#x503C;&#x5BF9;&#x5E94;&#x7684;&#x4E0B;&#x9650;&#x3002;</li>
</ul>
<p>&#x5BF9;&#x4E8E;&#x6307;&#x6570;&#x5206;&#x5E03;&#xFF0C;&#x5176;&#x9006;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x89E3;&#x4EE5;&#x4E0B;&#x65B9;&#x7A0B;&#x5F97;&#x5230;&#xFF1A;</p>
<p>$$p = 1 - e^{-\\lambda x} $$</p>
<p>&#x5C06;&#x8FD9;&#x4E2A;&#x7B49;&#x5F0F;&#x89E3;&#x4E3A; (x)&#xFF1A;</p>
<p>$$x = -\\frac{1}{\\lambda} \\ln(1 - p) $$</p>
<p>&#x8FD9;&#x91CC; (p) &#x662F;&#x4ECE;&#x5747;&#x5300;&#x5206;&#x5E03; ( U(0, 1) ) &#x4E2D;&#x62BD;&#x53D6;&#x7684;&#x6837;&#x672C;&#x3002;</p>
<h3 id="3. &#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;&#x7684;&#x6B65;&#x9AA4;"><a href="#3. &#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;&#x7684;&#x6B65;&#x9AA4;"></a>3. &#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;&#x7684;&#x6B65;&#x9AA4;</h3>
<p><strong>&#x6B65;&#x9AA4;1&#xFF1A;&#x4ECE;&#x5747;&#x5300;&#x5206;&#x5E03; (U(0, 1)) &#x4E2D;&#x62BD;&#x6837;</strong>
&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x62BD;&#x53D6; (p = 0.5) &#xFF08;&#x4EFB;&#x4F55;&#x4ECB;&#x4E8E;0&#x548C;1&#x4E4B;&#x95F4;&#x7684;&#x5747;&#x5300;&#x968F;&#x673A;&#x6570;&#xFF09;&#x3002;</p>
<p><strong>&#x6B65;&#x9AA4;2&#xFF1A;&#x8BA1;&#x7B97;&#x9006;&#x53D8;&#x6362;</strong>
&#x9488;&#x5BF9;&#x7279;&#x5B9A;&#x7684; (\\lambda) &#x503C;&#xFF08;&#x5047;&#x8BBE; (\\lambda = 1)&#xFF09;&#xFF0C;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x9006;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570; (F^{-1}(p)) &#x6765;&#x8F6C;&#x6362; (p)&#xFF1A;</p>
<p>$$x = -\\frac{1}{1} \\ln(1 - 0.5) = - \\ln(0.5) \\approx 0.693 $$</p>
<p>&#x6240;&#x4EE5;&#xFF0C;&#x4F7F;&#x7528;&#x9006;&#x53D8;&#x6362;&#x91C7;&#x6837;&#xFF0C;&#x6211;&#x4EEC;&#x5F97;&#x5230;&#x4E86;&#x4E00;&#x4E2A;&#x7B26;&#x5408;&#x6307;&#x6570;&#x5206;&#x5E03;&#x7684;&#x6837;&#x672C; (x \\approx 0.693)&#x3002;</p>
<h2 id="Box-Muller"><a href="#Box-Muller"></a>Box-Muller</h2>
<p>Box-Muller &#x901A;&#x8FC7;&#x89D2;&#x5EA6;&#x548C;&#x534A;&#x5F84;&#x5927;&#x5C0F;&#x4E24;&#x4E2A;&#x5206;&#x91CF;&#x7684;&#x72EC;&#x7ACB;&#x6027;&#x5206;&#x522B;&#x5355;&#x72EC;&#x751F;&#x6210;&#x5E76;&#x8F6C;&#x6362;&#x6210; (x, y) &#x5BF9;&#x3002;
&#x65E0;&#x6CD5;&#x76F4;&#x63A5;&#x901A;&#x8FC7;&#x9006;&#x53D8;&#x6362;&#x751F;&#x6210;&#x4E00;&#x7EF4;&#x6B63;&#x6001;&#x5206;&#x5E03;&#x7684;&#x4E3B;&#x8981;&#x539F;&#x56E0;&#x662F;&#x6B63;&#x6001;&#x5206;&#x5E03;&#x7684;&#x7D2F;&#x79EF;&#x5206;&#x5E03;&#x51FD;&#x6570; (CDF) &#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#xFF0C;&#x8FD9;&#x4F7F;&#x5F97;&#x9006;&#x53D8;&#x6362;&#x65B9;&#x6CD5;&#x4E0D;&#x592A;&#x5B9E;&#x7528;&#x3002;</p>
<p><a href="https://blog.csdn.net/weixin_41793877/article/details/84700875">box-muller &#x6570;&#x5B66;&#x63A8;&#x5BFC;</a></p>
<h2 id="&#x4EC0;&#x4E48;&#x6837;&#x7684;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#xFF1F;"><a href="#&#x4EC0;&#x4E48;&#x6837;&#x7684;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#xFF1F;"></a>&#x4EC0;&#x4E48;&#x6837;&#x7684;&#x51FD;&#x6570;&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#xFF1F;</h2>
<p>&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#x7684;&#x51FD;&#x6570;&#x662F;&#x6307;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x6709;&#x9650;&#x4E2A;&#x57FA;&#x672C;&#x51FD;&#x6570;&#xFF08;&#x5982;&#x591A;&#x9879;&#x5F0F;&#x3001;&#x6307;&#x6570;&#x51FD;&#x6570;&#x3001;&#x5BF9;&#x6570;&#x51FD;&#x6570;&#x3001;&#x4E09;&#x89D2;&#x51FD;&#x6570;&#x7B49;&#xFF09;&#x7684;&#x4EE3;&#x6570;&#x8FD0;&#x7B97;&#x548C;&#x590D;&#x5408;&#x8FD0;&#x7B97;&#x6765;&#x8868;&#x793A;&#x5176;&#x7CBE;&#x786E;&#x503C;&#x7684;&#x51FD;&#x6570;&#x3002;&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E9B;&#x51FD;&#x6570;&#x65E0;&#x6CD5;&#x7528;&#x4E00;&#x7EC4;&#x5C01;&#x95ED;&#x5F62;&#x5F0F;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x6765;&#x8868;&#x793A;&#xFF0C;&#x901A;&#x5E38;&#x9700;&#x8981;&#x4EE5;&#x6570;&#x503C;&#x65B9;&#x6CD5;&#x3001;&#x7EA7;&#x6570;&#x5C55;&#x5F00;&#x6216;&#x56FE;&#x5F62;&#x6765;&#x8FD1;&#x4F3C;&#x8868;&#x793A;&#x6216;&#x89E3;&#x6790;&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E9B;&#x5E38;&#x89C1;&#x7684;&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#x7684;&#x51FD;&#x6570;&#x7C7B;&#x578B;&#xFF1A;</p>
<h3 id="1. &#x7279;&#x6B8A;&#x51FD;&#x6570;"><a href="#1. &#x7279;&#x6B8A;&#x51FD;&#x6570;"></a>1. &#x7279;&#x6B8A;&#x51FD;&#x6570;</h3>
<p>&#x8BB8;&#x591A;&#x7279;&#x6B8A;&#x51FD;&#x6570;&#x901A;&#x5E38;&#x6CA1;&#x6709;&#x7B80;&#x5355;&#x7684;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>
<p><strong>&#x8BEF;&#x5DEE;&#x51FD;&#x6570;&#xFF08;Error Function, (\\operatorname{erf}(x))&#xFF09;</strong>&#xFF1A;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x51FA;&#x73B0;&#x5728;&#x6982;&#x7387;&#x3001;&#x7EDF;&#x8BA1;&#x548C;&#x504F;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x4E2D;&#x7684;&#x5E38;&#x89C1;&#x51FD;&#x6570;&#x3002;&#x867D;&#x7136;&#x5B83;&#x6709;&#x5B9A;&#x4E49;&#x548C;&#x6027;&#x8D28;&#xFF0C;&#x4F46;&#x65E0;&#x6CD5;&#x7528;&#x57FA;&#x672C;&#x521D;&#x7B49;&#x51FD;&#x6570;&#x7684;&#x6709;&#x9650;&#x7EC4;&#x5408;&#x8868;&#x793A;&#x3002;</p>
<p>$$
\\operatorname{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2} , dt
$$</p>
</li>
</ul>
<h3 id="2. &#x9690;&#x51FD;&#x6570;"><a href="#2. &#x9690;&#x51FD;&#x6570;"></a>2. &#x9690;&#x51FD;&#x6570;</h3>
<p>&#x9690;&#x51FD;&#x6570;&#x662F;&#x901A;&#x8FC7;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x5E76;&#x4E14;&#x65E0;&#x6CD5;&#x663E;&#x5F0F;&#x89E3;&#x51FA;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li><strong>&#x5170;&#x4F2F;&#x7279; (W) &#x51FD;&#x6570;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5173;&#x7CFB; (We^W = x) &#x5B9A;&#x4E49;&#x3002;&#x5BF9;&#x4E8E;&#x5927;&#x591A;&#x6570; (x) &#x5B83;&#x6CA1;&#x6709;&#x95ED;&#x5F0F;&#x8868;&#x8FBE;&#x3002;</li>
<li><strong>&#x6307;&#x6570;&#x65B9;&#x7A0B;</strong>&#xFF1A;&#x4F8B;&#x5982; (x = e^{-x})&#xFF0C;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x4EE3;&#x6570;&#x65B9;&#x6CD5;&#x5F97;&#x5230;&#x663E;&#x5F0F;&#x89E3;&#x3002;</li>
</ul>
<h3 id="3. &#x7279;&#x5B9A;&#x7684;&#x65E0;&#x7406;&#x6216;&#x8D85;&#x8D8A;&#x65B9;&#x7A0B;"><a href="#3. &#x7279;&#x5B9A;&#x7684;&#x65E0;&#x7406;&#x6216;&#x8D85;&#x8D8A;&#x65B9;&#x7A0B;"></a>3. &#x7279;&#x5B9A;&#x7684;&#x65E0;&#x7406;&#x6216;&#x8D85;&#x8D8A;&#x65B9;&#x7A0B;</h3>
<p>&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x65E0;&#x6CD5;&#x89E3;&#x6790;&#x5730;&#x8868;&#x8FBE;&#x67D0;&#x4E9B;&#x65E0;&#x7406;&#x6216;&#x8005;&#x8D85;&#x8D8A;&#x65B9;&#x7A0B;&#x7684;&#x89E3;&#x3002;&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;&#xFF1A;</p>
<ul>
<li><strong>&#x4EE3;&#x6570;&#x65B9;&#x7A0B;&#x7EA7;&#x6570;&#x89E3;</strong>&#xFF1A;&#x5982;&#x4E00;&#x822C;&#x4E94;&#x6B21;&#x53CA;&#x66F4;&#x9AD8;&#x6B21;&#x591A;&#x9879;&#x5F0F;&#x7684;&#x6839;&#xFF0C;&#x6839;&#x636E;&#x963F;&#x8D1D;&#x5C14;-&#x9C81;&#x82AC;&#x5C3C;&#x5B9A;&#x7406;&#xFF0C;&#x65E0;&#x6CD5;&#x7528;&#x6839;&#x5F0F;&#x8868;&#x793A;&#x3002;</li>
</ul>
<h3 id="4. &#x7279;&#x5B9A;&#x79EF;&#x5206;"><a href="#4. &#x7279;&#x5B9A;&#x79EF;&#x5206;"></a>4. &#x7279;&#x5B9A;&#x79EF;&#x5206;</h3>
<p>&#x4E00;&#x4E9B;&#x79EF;&#x5206;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x5355;&#x4E00;&#x7684;&#x57FA;&#x672C;&#x51FD;&#x6570;&#x6216;&#x5176;&#x7B80;&#x5355;&#x7EC4;&#x5408;&#x8FDB;&#x884C;&#x8868;&#x8FBE;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li><strong>&#x692D;&#x5706;&#x79EF;&#x5206;</strong>&#xFF1A;&#x8FD9;&#x4E9B;&#x79EF;&#x5206;&#x7ECF;&#x5E38;&#x51FA;&#x73B0;&#x4E8E;&#x7269;&#x7406;&#x5B66;&#x548C;&#x5DE5;&#x7A0B;&#x5B66;&#x4E2D;&#xFF0C;&#x5E76;&#x4E0D;&#x80FD;&#x901A;&#x8FC7;&#x57FA;&#x672C;&#x51FD;&#x6570;&#x7684;&#x5177;&#x4F53;&#x8868;&#x8FBE;&#x6765;&#x8868;&#x793A;&#x3002;</li>
</ul>
<p>$$
E(x) = \\int_0^x \\sqrt{1 - t^2} , dt
$$</p>
<h3 id="5. &#x7279;&#x5B9A;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x7684;&#x89E3;"><a href="#5. &#x7279;&#x5B9A;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x7684;&#x89E3;"></a>5. &#x7279;&#x5B9A;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x7684;&#x89E3;</h3>
<p>&#x67D0;&#x4E9B;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x5177;&#x6709;&#x89E3;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x89E3;&#x4E0D;&#x80FD;&#x4EE5;&#x521D;&#x7B49;&#x51FD;&#x6570;&#x7684;&#x5F62;&#x5F0F;&#x8868;&#x8FBE;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li><strong>&#x827E;&#x91CC;&#x51FD;&#x6570;&#xFF08;Airy function, (\\operatorname{Ai}(x)) &#x548C; (\\operatorname{Bi}(x))&#xFF09;</strong>&#xFF1A;&#x8FD9;&#x4E9B;&#x51FD;&#x6570;&#x51FA;&#x73B0;&#x5728;&#x91CF;&#x5B50;&#x529B;&#x5B66;&#x548C;&#x5149;&#x5B66;&#x7B49;&#x9886;&#x57DF;&#x4E2D;&#xFF0C;&#x7ECF;&#x5E38;&#x7528;&#x6765;&#x63CF;&#x8FF0;&#x67D0;&#x4E9B;&#x7269;&#x7406;&#x73B0;&#x8C61;&#x3002;
$$
\\frac{d^2y}{dx^2} - xy = 0
$$</li>
</ul>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x603B;&#x4F53;&#x800C;&#x8A00;&#xFF0C;&#x5F53;&#x51FD;&#x6570;&#x7684;&#x5B9A;&#x4E49;&#x6D89;&#x53CA;&#x590D;&#x6742;&#x7684;&#x4EE3;&#x6570;&#x8FD0;&#x7B97;&#x3001;&#x7279;&#x5B9A;&#x7684;&#x79EF;&#x5206;&#x3001;&#x5FAE;&#x5206;&#x65B9;&#x7A0B;&#x7684;&#x89E3;&#xFF0C;&#x6216;&#x8005;&#x5F53;&#x5B83;&#x4EEC;&#x7684;&#x5B9A;&#x4E49;&#x5173;&#x7CFB;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x9690;&#x542B;&#x7684;&#xFF0C;&#x8FD9;&#x4E9B;&#x51FD;&#x6570;&#x5F80;&#x5F80;&#x6CA1;&#x6709;&#x7B80;&#x5355;&#x7684;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#x3002;&#x73B0;&#x4EE3;&#x6570;&#x5B66;&#x4E2D;&#xFF0C;&#x5C3D;&#x7BA1;&#x6CA1;&#x6709;&#x89E3;&#x6790;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6570;&#x503C;&#x65B9;&#x6CD5;&#x3001;&#x7EA7;&#x6570;&#x5C55;&#x5F00;&#x6216;&#x5176;&#x4ED6;&#x65B9;&#x6CD5;&#x5BF9;&#x5B83;&#x4EEC;&#x8FDB;&#x884C;&#x8FD1;&#x4F3C;&#x5206;&#x6790;&#x548C;&#x8BA1;&#x7B97;&#x3002;&#x8FD9;&#x5BF9;&#x5B9E;&#x7528;&#x8BA1;&#x7B97;&#x548C;&#x7406;&#x8BBA;&#x7814;&#x7A76;&#x90FD;&#x662F;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x7684;&#x3002;</p>
`,E=[{level:1,title:"逆变换采样",children:[{level:3,title:"1. 基本步骤",children:[]},{level:3,title:"2. 示例：从指数分布中抽样",children:[]},{level:3,title:"3. 逆变换采样的步骤",children:[]},{level:2,title:"Box-Muller",children:[]},{level:2,title:"什么样的函数没有解析形式？",children:[{level:3,title:"1. 特殊函数",children:[]},{level:3,title:"2. 隐函数",children:[]},{level:3,title:"3. 特定的无理或超越方程",children:[]},{level:3,title:"4. 特定积分",children:[]},{level:3,title:"5. 特定微分方程的解",children:[]},{level:3,title:"总结",children:[]}]}]}];export{x as attributes,F as html,E as nestedHeaders};
