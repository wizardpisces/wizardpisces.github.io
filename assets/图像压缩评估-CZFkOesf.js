const x={},F=`<h1 id="&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;"><a href="#&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;"></a>&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;</h1>
<p>&#x538B;&#x7F29;&#x540E;&#x7684;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x662F;&#x8BC4;&#x4F30;&#x538B;&#x7F29;&#x7B97;&#x6CD5;&#x7684;&#x91CD;&#x8981;&#x6307;&#x6807;&#x3002;&#x5E38;&#x7528;&#x7684;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;&#x65B9;&#x6CD5;&#x5305;&#x62EC;&#x4E3B;&#x89C2;&#x8BC4;&#x4F30;&#x548C;&#x5BA2;&#x89C2;&#x8BC4;&#x4F30;&#x3002;&#x8FD9;&#x91CC;&#x53EA;&#x8FDB;&#x884C;&#x5BA2;&#x89C2;&#x8BC4;&#x4F30;&#x7684;&#x8BA8;&#x8BBA;</p>
<p>&#x5BA2;&#x89C2;&#x8BC4;&#x4F30;&#xFF1A;</p>
<ul>
<li>&#x5CF0;&#x503C;&#x4FE1;&#x566A;&#x6BD4;&#xFF08;PSNR&#xFF09;</li>
<li>&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6570;&#xFF08;SSIM&#xFF09;</li>
</ul>
<h2 id="&#x5CF0;&#x503C;&#x4FE1;&#x566A;&#x6BD4;&#xFF08;PSNR&#xFF09;"><a href="#&#x5CF0;&#x503C;&#x4FE1;&#x566A;&#x6BD4;&#xFF08;PSNR&#xFF09;"></a>&#x5CF0;&#x503C;&#x4FE1;&#x566A;&#x6BD4;&#xFF08;PSNR&#xFF09;</h2>
<p>&#x516C;&#x5F0F;&#x4E2D;&#x6700;&#x5927;&#x50CF;&#x7D20;&#x503C;&#xFF08;MAX&#xFF09;&#x7684;&#x4F5C;&#x7528;&#x5BF9;&#x4E8E;&#x5168;&#x9762;&#x7406;&#x89E3; PSNR &#x7684;&#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;&#x81F3;&#x5173;&#x91CD;&#x8981;&#x3002;&#x8BA9;&#x6211;&#x4EEC;&#x8BE6;&#x7EC6;&#x89E3;&#x91CA;&#x4E00;&#x4E0B;&#x8FD9;&#x4E2A;&#x6982;&#x5FF5;&#x3002;</p>
<h3 id="1. PSNR &#x516C;&#x5F0F;"><a href="#1. PSNR &#x516C;&#x5F0F;"></a>1. PSNR &#x516C;&#x5F0F;</h3>
<p>PSNR &#x7684;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;&#x4E3A;&#xFF1A;</p>
<p>$$
\\text{PSNR} = 10 \\cdot \\log_{10} \\left( \\frac{\\text{MAX}^2}{\\text{MSE}} \\right)
$$</p>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li>(\\text{MSE}) &#x662F;&#x5747;&#x65B9;&#x8BEF;&#x5DEE;&#xFF0C;&#x8868;&#x793A;&#x539F;&#x59CB;&#x56FE;&#x50CF;&#x548C;&#x538B;&#x7F29;&#x56FE;&#x50CF;&#x4E4B;&#x95F4;&#x7684;&#x5E73;&#x5747;&#x50CF;&#x7D20;&#x5DEE;&#x5F02;&#x3002;</li>
<li>(\\text{MAX}) &#x662F;&#x56FE;&#x50CF;&#x7684;&#x6700;&#x5927;&#x50CF;&#x7D20;&#x503C;&#x3002;</li>
</ul>
<h3 id="2. MAX &#x7684;&#x5B9A;&#x4E49;"><a href="#2. MAX &#x7684;&#x5B9A;&#x4E49;"></a>2. MAX &#x7684;&#x5B9A;&#x4E49;</h3>
<p>MAX &#x662F;&#x56FE;&#x50CF;&#x4E2D;&#x50CF;&#x7D20;&#x503C;&#x7684;&#x6700;&#x5927;&#x53EF;&#x80FD;&#x503C;&#x3002;&#x5BF9;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x56FE;&#x50CF;&#x7C7B;&#x578B;&#xFF0C;MAX &#x7684;&#x503C;&#x4E0D;&#x540C;&#xFF1A;</p>
<ul>
<li>&#x5BF9;&#x4E8E; 8 &#x4F4D;&#x7070;&#x5EA6;&#x56FE;&#x50CF;&#xFF0C;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x662F; 0 &#x5230; 255&#xFF0C;&#x56E0;&#x6B64; MAX = 255&#x3002;</li>
<li>&#x5BF9;&#x4E8E; 16 &#x4F4D;&#x56FE;&#x50CF;&#xFF0C;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x662F; 0 &#x5230; 65535&#xFF0C;&#x56E0;&#x6B64; MAX = 65535&#x3002;</li>
</ul>
<h3 id="3. MAX &#x5728; PSNR &#x516C;&#x5F0F;&#x4E2D;&#x7684;&#x4F5C;&#x7528;"><a href="#3. MAX &#x5728; PSNR &#x516C;&#x5F0F;&#x4E2D;&#x7684;&#x4F5C;&#x7528;"></a>3. MAX &#x5728; PSNR &#x516C;&#x5F0F;&#x4E2D;&#x7684;&#x4F5C;&#x7528;</h3>
<h4 id="3.1 &#x6807;&#x51C6;&#x5316;&#x8BEF;&#x5DEE;"><a href="#3.1 &#x6807;&#x51C6;&#x5316;&#x8BEF;&#x5DEE;"></a>3.1 &#x6807;&#x51C6;&#x5316;&#x8BEF;&#x5DEE;</h4>
<p>MAX &#x7684;&#x4E3B;&#x8981;&#x4F5C;&#x7528;&#x662F;&#x6807;&#x51C6;&#x5316;&#x5747;&#x65B9;&#x8BEF;&#x5DEE;&#xFF08;MSE&#xFF09;&#xFF0C;&#x4F7F;&#x5F97; PSNR &#x503C;&#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x540C;&#x56FE;&#x50CF;&#x7C7B;&#x578B;&#x4E4B;&#x95F4;&#x8FDB;&#x884C;&#x6BD4;&#x8F83;&#x3002;&#x76F4;&#x63A5;&#x4F7F;&#x7528; MSE &#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x4E0D;&#x540C;&#x56FE;&#x50CF;&#x7C7B;&#x578B;&#x4E4B;&#x95F4;&#x7684;&#x6BD4;&#x8F83;&#x4E0D;&#x516C;&#x5E73;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x4E0D;&#x540C;&#x3002;</p>
<h4 id="3.2 &#x65E0;&#x91CF;&#x7EB2;&#x5316;"><a href="#3.2 &#x65E0;&#x91CF;&#x7EB2;&#x5316;"></a>3.2 &#x65E0;&#x91CF;&#x7EB2;&#x5316;</h4>
<p>&#x901A;&#x8FC7;&#x5C06; MSE &#x9664;&#x4EE5; MAX &#x7684;&#x5E73;&#x65B9;&#xFF0C;PSNR &#x516C;&#x5F0F;&#x6D88;&#x9664;&#x4E86;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x7684;&#x5F71;&#x54CD;&#xFF0C;&#x4F7F;&#x5F97;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x65E0;&#x91CF;&#x7EB2;&#x5316;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x65E0;&#x8BBA;&#x56FE;&#x50CF;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x5982;&#x4F55;&#xFF0C;PSNR &#x503C;&#x90FD;&#x53EF;&#x4EE5;&#x5728;&#x76F8;&#x540C;&#x7684;&#x5C3A;&#x5EA6;&#x4E0A;&#x8FDB;&#x884C;&#x89E3;&#x91CA;&#x3002;</p>
<h4 id="3.3 &#x5BF9;&#x6570;&#x5C3A;&#x5EA6;"><a href="#3.3 &#x5BF9;&#x6570;&#x5C3A;&#x5EA6;"></a>3.3 &#x5BF9;&#x6570;&#x5C3A;&#x5EA6;</h4>
<p>PSNR &#x4F7F;&#x7528;&#x5BF9;&#x6570;&#x5C3A;&#x5EA6;&#x6765;&#x8868;&#x793A;&#x8BEF;&#x5DEE;&#xFF0C;&#x8FD9;&#x4F7F;&#x5F97;&#x5B83;&#x5BF9;&#x4EBA;&#x7C7B;&#x611F;&#x77E5;&#x66F4;&#x76F4;&#x89C2;&#x3002;&#x5BF9;&#x6570;&#x53D8;&#x6362;&#x53EF;&#x4EE5;&#x538B;&#x7F29;&#x5927;&#x8303;&#x56F4;&#x7684;&#x8BEF;&#x5DEE;&#x503C;&#xFF0C;&#x4F7F;&#x5F97;&#x8F83;&#x5C0F;&#x7684;&#x8BEF;&#x5DEE;&#x53D8;&#x5316;&#x66F4;&#x5BB9;&#x6613;&#x88AB;&#x5BDF;&#x89C9;&#x3002;</p>
<h3 id="4. &#x4E3E;&#x4F8B;&#x8BF4;&#x660E;"><a href="#4. &#x4E3E;&#x4F8B;&#x8BF4;&#x660E;"></a>4. &#x4E3E;&#x4F8B;&#x8BF4;&#x660E;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E24;&#x5F20; 8 &#x4F4D;&#x7070;&#x5EA6;&#x56FE;&#x50CF;&#xFF0C;&#x539F;&#x59CB;&#x56FE;&#x50CF;&#x548C;&#x538B;&#x7F29;&#x56FE;&#x50CF;&#xFF0C;&#x5176; MSE &#x4E3A; 100&#x3002;&#x8BA1;&#x7B97; PSNR &#x7684;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;</p>
<h4 id="4.1 &#x8BA1;&#x7B97; MSE"><a href="#4.1 &#x8BA1;&#x7B97; MSE"></a>4.1 &#x8BA1;&#x7B97; MSE</h4>
<p>$$
\\text{MSE} = 100
$$</p>
<h4 id="4.2 &#x8BA1;&#x7B97; MAX &#x7684;&#x5E73;&#x65B9;"><a href="#4.2 &#x8BA1;&#x7B97; MAX &#x7684;&#x5E73;&#x65B9;"></a>4.2 &#x8BA1;&#x7B97; MAX &#x7684;&#x5E73;&#x65B9;</h4>
<p>&#x5BF9;&#x4E8E; 8 &#x4F4D;&#x7070;&#x5EA6;&#x56FE;&#x50CF;&#xFF1A;</p>
<p>$$
\\text{MAX} = 255
$$</p>
<p>$$
\\text{MAX}^2 = 255^2 = 65025
$$</p>
<h4 id="4.3 &#x8BA1;&#x7B97; PSNR"><a href="#4.3 &#x8BA1;&#x7B97; PSNR"></a>4.3 &#x8BA1;&#x7B97; PSNR</h4>
<p>$$
\\text{PSNR} = 10 \\cdot \\log_{10} \\left( \\frac{65025}{100} \\right)
$$</p>
<p>$$
\\text{PSNR} = 10 \\cdot \\log_{10} (650.25)
$$</p>
<p>$$
\\text{PSNR} \\approx 10 \\cdot 2.813 = 28.13 \\text{ dB}
$$</p>
<h3 id="5. &#x603B;&#x7ED3;"><a href="#5. &#x603B;&#x7ED3;"></a>5. &#x603B;&#x7ED3;</h3>
<p>&#x901A;&#x8FC7;&#x5F15;&#x5165; MAX&#xFF0C;PSNR &#x516C;&#x5F0F;&#x80FD;&#x591F;&#xFF1A;</p>
<ul>
<li>&#x6807;&#x51C6;&#x5316;&#x8BEF;&#x5DEE;&#xFF0C;&#x4F7F;&#x5F97;&#x4E0D;&#x540C;&#x56FE;&#x50CF;&#x7C7B;&#x578B;&#x4E4B;&#x95F4;&#x7684;&#x6BD4;&#x8F83;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</li>
<li>&#x65E0;&#x91CF;&#x7EB2;&#x5316;&#x8BEF;&#x5DEE;&#xFF0C;&#x4F7F;&#x5F97; PSNR &#x503C;&#x5728;&#x540C;&#x4E00;&#x5C3A;&#x5EA6;&#x4E0A;&#x8FDB;&#x884C;&#x89E3;&#x91CA;&#x3002;</li>
<li>&#x4F7F;&#x7528;&#x5BF9;&#x6570;&#x5C3A;&#x5EA6;&#xFF0C;&#x4F7F;&#x5F97;&#x8F83;&#x5C0F;&#x7684;&#x8BEF;&#x5DEE;&#x53D8;&#x5316;&#x66F4;&#x5BB9;&#x6613;&#x88AB;&#x5BDF;&#x89C9;&#x3002;</li>
</ul>
<p>MAX &#x7684;&#x5F15;&#x5165;&#x786E;&#x4FDD;&#x4E86; PSNR &#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x9760;&#x4E14;&#x4E00;&#x81F4;&#x7684;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;&#x6307;&#x6807;&#xFF0C;&#x65E0;&#x8BBA;&#x56FE;&#x50CF;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x8303;&#x56F4;&#x5982;&#x4F55;&#xFF0C;&#x5B83;&#x90FD;&#x80FD;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x76F4;&#x89C2;&#x7684;&#x8D28;&#x91CF;&#x5EA6;&#x91CF;&#x3002;</p>
<h2 id="&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6570;&#xFF08;SSIM&#xFF09;"><a href="#&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6570;&#xFF08;SSIM&#xFF09;"></a>&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6570;&#xFF08;SSIM&#xFF09;</h2>
<p>&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x6307;&#x6570;&#xFF08;SSIM&#xFF0C;Structural Similarity Index&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8861;&#x91CF;&#x4E24;&#x5E45;&#x56FE;&#x50CF;&#x4E4B;&#x95F4;&#x76F8;&#x4F3C;&#x6027;&#x7684;&#x6307;&#x6807;&#xFF0C;&#x7279;&#x522B;&#x9002;&#x7528;&#x4E8E;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x3002;&#x4E0E;&#x5CF0;&#x503C;&#x4FE1;&#x566A;&#x6BD4;&#xFF08;PSNR&#xFF09;&#x4E0D;&#x540C;&#xFF0C;SSIM &#x66F4;&#x52A0;&#x6CE8;&#x91CD;&#x56FE;&#x50CF;&#x7684;&#x7ED3;&#x6784;&#x4FE1;&#x606F;&#xFF0C;&#x56E0;&#x6B64;&#x5728;&#x53CD;&#x6620;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x65B9;&#x9762;&#x66F4;&#x4E3A;&#x6709;&#x6548;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x8BE6;&#x7EC6;&#x8BF4;&#x660E;&#xFF1A;</p>
<h3 id="1. SSIM &#x7684;&#x57FA;&#x672C;&#x539F;&#x7406;"><a href="#1. SSIM &#x7684;&#x57FA;&#x672C;&#x539F;&#x7406;"></a>1. SSIM &#x7684;&#x57FA;&#x672C;&#x539F;&#x7406;</h3>
<p>SSIM &#x901A;&#x8FC7;&#x6BD4;&#x8F83;&#x56FE;&#x50CF;&#x7684;&#x4EAE;&#x5EA6;&#x3001;&#x5BF9;&#x6BD4;&#x5EA6;&#x548C;&#x7ED3;&#x6784;&#x6765;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x3002;&#x5176;&#x516C;&#x5F0F;&#x5982;&#x4E0B;&#xFF1A;</p>
<p>$$
\\text{SSIM}(x, y) = \\frac{(2 \\mu_x \\mu_y + C_1)(2 \\sigma_{xy} + C_2)}{(\\mu_x^2 + \\mu_y^2 + C_1)(\\sigma_x^2 + \\sigma_y^2 + C_2)}
$$</p>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li>( \\mu_x ) &#x548C; ( \\mu_y ) &#x5206;&#x522B;&#x662F;&#x56FE;&#x50CF; ( x ) &#x548C; ( y ) &#x7684;&#x5E73;&#x5747;&#x503C;&#x3002;</li>
<li>( \\sigma_x^2 ) &#x548C; ( \\sigma_y^2 ) &#x5206;&#x522B;&#x662F;&#x56FE;&#x50CF; ( x ) &#x548C; ( y ) &#x7684;&#x65B9;&#x5DEE;&#x3002;</li>
<li>( \\sigma_{xy} ) &#x662F;&#x56FE;&#x50CF; ( x ) &#x548C; ( y ) &#x7684;&#x534F;&#x65B9;&#x5DEE;&#x3002;</li>
<li>( C_1 ) &#x548C; ( C_2 ) &#x662F;&#x4E3A;&#x4E86;&#x7A33;&#x5B9A;&#x5206;&#x6BCD;&#x800C;&#x5F15;&#x5165;&#x7684;&#x5C0F;&#x5E38;&#x6570;&#x3002;</li>
</ul>
<h3 id="2. SSIM &#x7684;&#x4E09;&#x4E2A;&#x7EC4;&#x6210;&#x90E8;&#x5206;"><a href="#2. SSIM &#x7684;&#x4E09;&#x4E2A;&#x7EC4;&#x6210;&#x90E8;&#x5206;"></a>2. SSIM &#x7684;&#x4E09;&#x4E2A;&#x7EC4;&#x6210;&#x90E8;&#x5206;</h3>
<h4 id="2.1 &#x4EAE;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Luminance Comparison&#xFF09;"><a href="#2.1 &#x4EAE;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Luminance Comparison&#xFF09;"></a>2.1 &#x4EAE;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Luminance Comparison&#xFF09;</h4>
<p>$$
l(x, y) = \\frac{2 \\mu_x \\mu_y + C_1}{\\mu_x^2 + \\mu_y^2 + C_1}
$$</p>
<p>&#x4EAE;&#x5EA6;&#x6BD4;&#x8F83;&#x90E8;&#x5206;&#x8861;&#x91CF;&#x4E24;&#x5E45;&#x56FE;&#x50CF;&#x7684;&#x5E73;&#x5747;&#x4EAE;&#x5EA6;&#x5DEE;&#x5F02;&#x3002;</p>
<h4 id="2.2 &#x5BF9;&#x6BD4;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Contrast Comparison&#xFF09;"><a href="#2.2 &#x5BF9;&#x6BD4;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Contrast Comparison&#xFF09;"></a>2.2 &#x5BF9;&#x6BD4;&#x5EA6;&#x6BD4;&#x8F83;&#xFF08;Contrast Comparison&#xFF09;</h4>
<p>$$
c(x, y) = \\frac{2 \\sigma_x \\sigma_y + C_2}{\\sigma_x^2 + \\sigma_y^2 + C_2}
$$</p>
<p>&#x5BF9;&#x6BD4;&#x5EA6;&#x6BD4;&#x8F83;&#x90E8;&#x5206;&#x8861;&#x91CF;&#x4E24;&#x5E45;&#x56FE;&#x50CF;&#x7684;&#x5BF9;&#x6BD4;&#x5EA6;&#x5DEE;&#x5F02;&#x3002;</p>
<h4 id="2.3 &#x7ED3;&#x6784;&#x6BD4;&#x8F83;&#xFF08;Structure Comparison&#xFF09;"><a href="#2.3 &#x7ED3;&#x6784;&#x6BD4;&#x8F83;&#xFF08;Structure Comparison&#xFF09;"></a>2.3 &#x7ED3;&#x6784;&#x6BD4;&#x8F83;&#xFF08;Structure Comparison&#xFF09;</h4>
<p>$$
s(x, y) = \\frac{\\sigma_{xy} + C_3}{\\sigma_x \\sigma_y + C_3}
$$</p>
<p>&#x7ED3;&#x6784;&#x6BD4;&#x8F83;&#x90E8;&#x5206;&#x8861;&#x91CF;&#x4E24;&#x5E45;&#x56FE;&#x50CF;&#x7684;&#x7ED3;&#x6784;&#x76F8;&#x4F3C;&#x6027;&#x3002;</p>
<p>&#x5C40;&#x9650;&#x6027;&#xFF1A;&#x534F;&#x65B9;&#x5DEE;&#x8861;&#x91CF;&#x7684;&#x662F;&#x4E24;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#xFF08;&#x5728;&#x8FD9;&#x91CC;&#x662F;&#x4E24;&#x5E45;&#x56FE;&#x50CF;&#x7684;&#x50CF;&#x7D20;&#x503C;&#xFF09;&#x4E4B;&#x95F4;&#x7684;&#x5171;&#x540C;&#x53D8;&#x5316;&#x7A0B;&#x5EA6;&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x534F;&#x65B9;&#x5DEE;&#x7684;&#x503C;&#x4F1A;&#x53D7;&#x5230;&#x6570;&#x636E;&#x96C6;&#x7684;&#x5C3A;&#x5EA6;&#x5F71;&#x54CD;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5BF9;&#x4E8E;&#x4E24;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#xFF0C;&#x5982;&#x679C;&#x5B83;&#x4EEC;&#x7684;&#x503C;&#x90FD;&#x5F88;&#x5927;&#xFF0C;&#x534F;&#x65B9;&#x5DEE;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x5F88;&#x5927;&#xFF1B;&#x5982;&#x679C;&#x5B83;&#x4EEC;&#x7684;&#x503C;&#x90FD;&#x5F88;&#x5C0F;&#xFF0C;&#x534F;&#x65B9;&#x5DEE;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x5F88;&#x5C0F;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x534F;&#x65B9;&#x5DEE;&#x7684;&#x7EDD;&#x5BF9;&#x503C;&#x5E76;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x53CD;&#x6620;&#x4E24;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#x4E4B;&#x95F4;&#x7684;&#x76F8;&#x4F3C;&#x6027;&#xFF0C;&#x9700;&#x8981;&#x8FDB;&#x884C;&#x6807;&#x51C6;&#x5316;&#x5904;&#x7406;&#x3002;</p>
<p>&#x5904;&#x7406;&#x65B9;&#x5F0F;&#xFF1A;&#x7528;&#x534F;&#x65B9;&#x5DEE;&#x503C;&#x9664;&#x53BB;&#x6807;&#x51C6;&#x5DEE;&#x505A;&#x6807;&#x51C6;&#x5316;</p>
<p>&#x5176;&#x4ED6;&#x6807;&#x51C6;&#x5316;&#xFF1A;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E2D;&#x7684;&#x56FE;&#x50CF;&#x8BAD;&#x7EC3;&#x4E2D;&#x7684;&#x50CF;&#x7D20;&#x9884;&#x5904;&#x7406;&#x5F52;&#x4E00;&#x5316;&#xFF08;x/255 [0, 1]&#xFF09;</p>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48; SSIM &#x80FD;&#x8868;&#x793A;&#x56FE;&#x7247;&#x538B;&#x7F29;&#x6548;&#x679C;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48; SSIM &#x80FD;&#x8868;&#x793A;&#x56FE;&#x7247;&#x538B;&#x7F29;&#x6548;&#x679C;"></a>3. &#x4E3A;&#x4EC0;&#x4E48; SSIM &#x80FD;&#x8868;&#x793A;&#x56FE;&#x7247;&#x538B;&#x7F29;&#x6548;&#x679C;</h3>
<h4 id="3.1 &#x8003;&#x8651;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x7CFB;&#x7EDF;"><a href="#3.1 &#x8003;&#x8651;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x7CFB;&#x7EDF;"></a>3.1 &#x8003;&#x8651;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x7CFB;&#x7EDF;</h4>
<p>SSIM &#x6A21;&#x62DF;&#x4E86;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x7CFB;&#x7EDF;&#x7684;&#x611F;&#x77E5;&#x7279;&#x6027;&#xFF0C;&#x901A;&#x8FC7;&#x4EAE;&#x5EA6;&#x3001;&#x5BF9;&#x6BD4;&#x5EA6;&#x548C;&#x7ED3;&#x6784;&#x4E09;&#x4E2A;&#x65B9;&#x9762;&#x8FDB;&#x884C;&#x6BD4;&#x8F83;&#x3002;&#x8FD9;&#x4F7F;&#x5F97; SSIM &#x80FD;&#x66F4;&#x597D;&#x5730;&#x53CD;&#x6620;&#x56FE;&#x50CF;&#x5728;&#x89C6;&#x89C9;&#x4E0A;&#x7684;&#x8D28;&#x91CF;&#xFF0C;&#x800C;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x50CF;&#x7D20;&#x7EA7;&#x522B;&#x7684;&#x5DEE;&#x5F02;&#x3002;</p>
<h4 id="3.2 &#x7EFC;&#x5408;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x8D28;&#x91CF;"><a href="#3.2 &#x7EFC;&#x5408;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x8D28;&#x91CF;"></a>3.2 &#x7EFC;&#x5408;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x8D28;&#x91CF;</h4>
<p>SSIM &#x4E0D;&#x4EC5;&#x8003;&#x8651;&#x4E86;&#x50CF;&#x7D20;&#x503C;&#x7684;&#x5DEE;&#x5F02;&#xFF0C;&#x8FD8;&#x8003;&#x8651;&#x4E86;&#x56FE;&#x50CF;&#x7684;&#x6574;&#x4F53;&#x7ED3;&#x6784;&#x548C;&#x7EB9;&#x7406;&#x4FE1;&#x606F;&#x3002;&#x8FD9;&#x4F7F;&#x5F97; SSIM &#x80FD;&#x591F;&#x66F4;&#x5168;&#x9762;&#x5730;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x7684;&#x8D28;&#x91CF;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728;&#x8BC4;&#x4F30;&#x538B;&#x7F29;&#x7B97;&#x6CD5;&#x7684;&#x6548;&#x679C;&#x65F6;&#x3002;</p>
<h4 id="3.3 &#x66F4;&#x52A0;&#x9C81;&#x68D2;"><a href="#3.3 &#x66F4;&#x52A0;&#x9C81;&#x68D2;"></a>3.3 &#x66F4;&#x52A0;&#x9C81;&#x68D2;</h4>
<p>&#x7531;&#x4E8E; SSIM &#x662F;&#x57FA;&#x4E8E;&#x5C40;&#x90E8;&#x7A97;&#x53E3;&#x8BA1;&#x7B97;&#x7684;&#xFF0C;&#x5B83;&#x5BF9;&#x56FE;&#x50CF;&#x7684;&#x5C40;&#x90E8;&#x5931;&#x771F;&#xFF08;&#x5982;&#x8FB9;&#x7F18;&#x3001;&#x7EB9;&#x7406;&#x7B49;&#xFF09;&#x66F4;&#x52A0;&#x654F;&#x611F;&#xFF0C;&#x8FD9;&#x4E9B;&#x5931;&#x771F;&#x5F80;&#x5F80;&#x662F;&#x538B;&#x7F29;&#x7B97;&#x6CD5;&#x5F15;&#x5165;&#x7684;&#x3002;&#x56E0;&#x6B64;&#xFF0C;SSIM &#x80FD;&#x66F4;&#x51C6;&#x786E;&#x5730;&#x53CD;&#x6620;&#x538B;&#x7F29;&#x5BF9;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x7684;&#x5F71;&#x54CD;&#x3002;</p>
<h3 id="5. &#x7ED3;&#x8BBA;"><a href="#5. &#x7ED3;&#x8BBA;"></a>5. &#x7ED3;&#x8BBA;</h3>
<ul>
<li><strong>&#x9AD8; SSIM &#x503C;&#xFF08;&#x63A5;&#x8FD1; 1&#xFF09;</strong>&#xFF1A;&#x8868;&#x793A;&#x538B;&#x7F29;&#x56FE;&#x50CF;&#x4E0E;&#x539F;&#x59CB;&#x56FE;&#x50CF;&#x5728;&#x4EAE;&#x5EA6;&#x3001;&#x5BF9;&#x6BD4;&#x5EA6;&#x548C;&#x7ED3;&#x6784;&#x4E0A;&#x975E;&#x5E38;&#x76F8;&#x4F3C;&#xFF0C;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8F83;&#x597D;&#x3002;</li>
<li><strong>&#x4F4E; SSIM &#x503C;&#xFF08;&#x63A5;&#x8FD1; 0&#xFF09;</strong>&#xFF1A;&#x8868;&#x793A;&#x538B;&#x7F29;&#x56FE;&#x50CF;&#x4E0E;&#x539F;&#x59CB;&#x56FE;&#x50CF;&#x5728;&#x4EAE;&#x5EA6;&#x3001;&#x5BF9;&#x6BD4;&#x5EA6;&#x548C;&#x7ED3;&#x6784;&#x4E0A;&#x5DEE;&#x5F02;&#x8F83;&#x5927;&#xFF0C;&#x56FE;&#x50CF;&#x8D28;&#x91CF;&#x8F83;&#x5DEE;&#x3002;</li>
</ul>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>SSIM &#x901A;&#x8FC7;&#x7EFC;&#x5408;&#x8003;&#x8651;&#x56FE;&#x50CF;&#x7684;&#x4EAE;&#x5EA6;&#x3001;&#x5BF9;&#x6BD4;&#x5EA6;&#x548C;&#x7ED3;&#x6784;&#x4FE1;&#x606F;&#xFF0C;&#x80FD;&#x591F;&#x66F4;&#x5168;&#x9762;&#x5730;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x7684;&#x8D28;&#x91CF;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728;&#x53CD;&#x6620;&#x4EBA;&#x7C7B;&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x65B9;&#x9762;&#x5177;&#x6709;&#x4F18;&#x52BF;&#x3002;&#x76F8;&#x6BD4;&#x4E8E;&#x53EA;&#x5173;&#x6CE8;&#x50CF;&#x7D20;&#x5DEE;&#x5F02;&#x7684; PSNR&#xFF0C;SSIM &#x66F4;&#x52A0;&#x9002;&#x5408;&#x7528;&#x4E8E;&#x8BC4;&#x4F30;&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x6548;&#x679C;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x80FD;&#x591F;&#x66F4;&#x51C6;&#x786E;&#x5730;&#x53CD;&#x6620;&#x538B;&#x7F29;&#x5BF9;&#x56FE;&#x50CF;&#x6574;&#x4F53;&#x89C6;&#x89C9;&#x8D28;&#x91CF;&#x7684;&#x5F71;&#x54CD;&#x3002;</p>
`,E=[{level:1,title:"图像压缩质量评估",children:[{level:2,title:"峰值信噪比（PSNR）",children:[{level:3,title:"1. PSNR 公式",children:[]},{level:3,title:"2. MAX 的定义",children:[]},{level:3,title:"3. MAX 在 PSNR 公式中的作用",children:[{level:4,title:"3.1 标准化误差",children:[]},{level:4,title:"3.2 无量纲化",children:[]},{level:4,title:"3.3 对数尺度",children:[]}]},{level:3,title:"4. 举例说明",children:[{level:4,title:"4.1 计算 MSE",children:[]},{level:4,title:"4.2 计算 MAX 的平方",children:[]},{level:4,title:"4.3 计算 PSNR",children:[]}]},{level:3,title:"5. 总结",children:[]}]},{level:2,title:"结构相似性指数（SSIM）",children:[{level:3,title:"1. SSIM 的基本原理",children:[]},{level:3,title:"2. SSIM 的三个组成部分",children:[{level:4,title:"2.1 亮度比较（Luminance Comparison）",children:[]},{level:4,title:"2.2 对比度比较（Contrast Comparison）",children:[]},{level:4,title:"2.3 结构比较（Structure Comparison）",children:[]}]},{level:3,title:"3. 为什么 SSIM 能表示图片压缩效果",children:[{level:4,title:"3.1 考虑人类视觉系统",children:[]},{level:4,title:"3.2 综合评估图像质量",children:[]},{level:4,title:"3.3 更加鲁棒",children:[]}]},{level:3,title:"5. 结论",children:[]},{level:3,title:"总结",children:[]}]}]}];export{x as attributes,F as html,E as nestedHeaders};
