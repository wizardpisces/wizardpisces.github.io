const x={},F=`<h2 id="&#x91CD;&#x53C2;&#x6570;&#x6280;&#x5DE7;"><a href="#&#x91CD;&#x53C2;&#x6570;&#x6280;&#x5DE7;"></a>&#x91CD;&#x53C2;&#x6570;&#x6280;&#x5DE7;</h2>
<p>VAE&#xFF08;&#x53D8;&#x5206;&#x81EA;&#x7F16;&#x7801;&#x5668;&#xFF09;&#x7684;&#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#x662F;&#x4E00;&#x79CD;&#x4F7F;&#x5F97;&#x6A21;&#x578B;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6765;&#x8BAD;&#x7EC3;&#x7684;&#x5173;&#x952E;&#x6280;&#x672F;&#x3002;&#x8981;&#x7406;&#x89E3;&#x8FD9;&#x4E2A;&#x6280;&#x5DE7;&#x6D89;&#x53CA;&#x7684;&#x5173;&#x952E;&#x6570;&#x5B66;&#x77E5;&#x8BC6;&#xFF0C;&#x4EE5;&#x4E0B;&#x662F;&#x51E0;&#x4E2A;&#x91CD;&#x8981;&#x7684;&#x65B9;&#x9762;&#xFF1A;</p>
<h3 id="1. &#x53D8;&#x5206;&#x63A8;&#x65AD;&#xFF08;Variational Inference&#xFF09;"><a href="#1. &#x53D8;&#x5206;&#x63A8;&#x65AD;&#xFF08;Variational Inference&#xFF09;"></a>1. &#x53D8;&#x5206;&#x63A8;&#x65AD;&#xFF08;Variational Inference&#xFF09;</h3>
<p>&#x53D8;&#x5206;&#x63A8;&#x65AD;&#x662F;&#x4E00;&#x79CD;&#x8FD1;&#x4F3C;&#x540E;&#x9A8C;&#x5206;&#x5E03;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x5C06;&#x96BE;&#x4EE5;&#x5904;&#x7406;&#x7684;&#x540E;&#x9A8C;&#x5206;&#x5E03; $ p(z|x) $ &#x8FD1;&#x4F3C;&#x4E3A;&#x4E00;&#x4E2A;&#x6613;&#x5904;&#x7406;&#x7684;&#x5206;&#x5E03; $ q(z|x) $&#x3002;&#x5728; VAE &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x9009;&#x62E9; $ q(z|x) $ &#x4E3A;&#x4E00;&#x4E2A;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#xFF1A;</p>
<p>$ q(z|x) = \\mathcal{N}(z; \\mu(x), \\sigma^2(x)) $</p>
<p>&#x5176;&#x4E2D;&#xFF0C;&#x5747;&#x503C; $ \\mu(x) $ &#x548C;&#x65B9;&#x5DEE; $ \\sigma^2(x) $ &#x90FD;&#x662F;&#x4ECE;&#x8F93;&#x5165;&#x6570;&#x636E; $ x $ &#x751F;&#x6210;&#x7684;&#x3002;</p>
<h3 id="2. &#x8BC1;&#x636E;&#x4E0B;&#x754C;&#xFF08;Evidence Lower Bound, ELBO&#xFF09;"><a href="#2. &#x8BC1;&#x636E;&#x4E0B;&#x754C;&#xFF08;Evidence Lower Bound, ELBO&#xFF09;"></a>2. &#x8BC1;&#x636E;&#x4E0B;&#x754C;&#xFF08;Evidence Lower Bound, ELBO&#xFF09;</h3>
<p>&#x8BAD;&#x7EC3; VAE &#x7684;&#x76EE;&#x6807;&#x662F;&#x6700;&#x5927;&#x5316;&#x6570;&#x636E;&#x7684;&#x8FB9;&#x9645;&#x5BF9;&#x6570;&#x4F3C;&#x7136; $ \\log p(x) $&#x3002;&#x7531;&#x4E8E;&#x76F4;&#x63A5;&#x8BA1;&#x7B97;&#x8FD9;&#x4E2A;&#x5BF9;&#x6570;&#x4F3C;&#x7136;&#x5F88;&#x56F0;&#x96BE;&#xFF0C;&#x6211;&#x4EEC;&#x5F15;&#x5165;&#x4E86;&#x8BC1;&#x636E;&#x4E0B;&#x754C;&#xFF08;ELBO&#xFF09;&#xFF1A;</p>
<p>$ \\log p(x) \\geq \\mathbb{E}<em>{q(z|x)}[\\log p(x|z)] - D</em>{KL}(q(z|x) \\parallel p(z)) $</p>
<p>&#x5176;&#x4E2D;&#xFF0C;</p>
<ul>
<li>$ \\mathbb{E}_{q(z|x)}[\\log p(x|z)] $ &#x662F;&#x91CD;&#x5EFA;&#x635F;&#x5931;&#xFF0C;&#x8868;&#x793A;&#x5728;&#x6F5C;&#x53D8;&#x91CF; $ z $ &#x4E0A;&#x7684;&#x91CD;&#x6784;&#x8BEF;&#x5DEE;&#x7684;&#x671F;&#x671B;&#x3002;</li>
<li>$ D_{KL}(q(z|x) \\parallel p(z)) $ &#x662F; Kullback-Leibler (KL) &#x6563;&#x5EA6;&#xFF0C;&#x8868;&#x793A;&#x8FD1;&#x4F3C;&#x540E;&#x9A8C;&#x5206;&#x5E03;&#x548C;&#x5148;&#x9A8C;&#x5206;&#x5E03;&#x4E4B;&#x95F4;&#x7684;&#x5DEE;&#x5F02;&#x3002;</li>
</ul>
<h3 id="3. &#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#xFF08;Reparameterization Trick&#xFF09;"><a href="#3. &#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#xFF08;Reparameterization Trick&#xFF09;"></a>3. &#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#xFF08;Reparameterization Trick&#xFF09;</h3>
<p>&#x4E3A;&#x4E86;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#x4F18;&#x5316; ELBO&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x5BF9;&#x968F;&#x673A;&#x53D8;&#x91CF; $ z $ &#x8FDB;&#x884C;&#x68AF;&#x5EA6;&#x8BA1;&#x7B97;&#x3002;&#x76F4;&#x63A5;&#x5BF9; $ z $ &#x91C7;&#x6837;&#x4F1A;&#x5BFC;&#x81F4;&#x68AF;&#x5EA6;&#x65E0;&#x6CD5;&#x4F20;&#x64AD;&#x3002;&#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#x901A;&#x8FC7;&#x5F15;&#x5165;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x4E8E;&#x53C2;&#x6570;&#x7684;&#x566A;&#x58F0;&#x53D8;&#x91CF; $ \\epsilon $ &#x6765;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5047;&#x8BBE; $ z $ &#x662F;&#x4ECE;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x4E2D;&#x91C7;&#x6837;&#x7684;&#xFF1A;</p>
<p>$ z \\sim \\mathcal{N}(\\mu, \\sigma^2) $</p>
<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06; $ z $ &#x91CD;&#x53C2;&#x6570;&#x5316;&#x4E3A;&#xFF1A;</p>
<p>$ z = \\mu + \\sigma \\cdot \\epsilon $</p>
<p>&#x5176;&#x4E2D;&#xFF0C;$ \\epsilon \\sim \\mathcal{N}(0, I) $ &#x662F;&#x4E00;&#x4E2A;&#x6807;&#x51C6;&#x6B63;&#x6001;&#x5206;&#x5E03;&#x7684;&#x566A;&#x58F0;&#x3002;&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x91CD;&#x53C2;&#x6570;&#x5316;&#xFF0C;$ \\mu $ &#x548C; $ \\sigma $ &#x7684;&#x68AF;&#x5EA6;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; $ \\epsilon $ &#x6765;&#x4F20;&#x64AD;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x5F97;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#x3002;</p>
<h3 id="&#x5173;&#x952E;&#x6570;&#x5B66;&#x77E5;&#x8BC6;&#x603B;&#x7ED3;"><a href="#&#x5173;&#x952E;&#x6570;&#x5B66;&#x77E5;&#x8BC6;&#x603B;&#x7ED3;"></a>&#x5173;&#x952E;&#x6570;&#x5B66;&#x77E5;&#x8BC6;&#x603B;&#x7ED3;</h3>
<ol>
<li>
<p><strong>&#x6982;&#x7387;&#x8BBA;&#x548C;&#x7EDF;&#x8BA1;&#x5B66;</strong>&#xFF1A;</p>
<ul>
<li>&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x53CA;&#x5176;&#x6027;&#x8D28;</li>
<li>Kullback-Leibler &#x6563;&#x5EA6;</li>
</ul>
</li>
<li>
<p><strong>&#x53D8;&#x5206;&#x63A8;&#x65AD;</strong>&#xFF1A;</p>
<ul>
<li>&#x8FD1;&#x4F3C;&#x540E;&#x9A8C;&#x5206;&#x5E03;&#x7684;&#x9009;&#x62E9;&#x548C;&#x4F18;&#x5316;</li>
</ul>
</li>
<li>
<p><strong>&#x4F18;&#x5316;&#x65B9;&#x6CD5;</strong>&#xFF1A;</p>
<ul>
<li>&#x8BC1;&#x636E;&#x4E0B;&#x754C;&#xFF08;ELBO&#xFF09;&#x7684;&#x63A8;&#x5BFC;&#x548C;&#x4F18;&#x5316;</li>
<li>&#x91CD;&#x53C2;&#x6570;&#x5316;&#x6280;&#x5DE7;&#x786E;&#x4FDD;&#x68AF;&#x5EA6;&#x7684;&#x53EF;&#x4F20;&#x64AD;&#x6027;</li>
</ul>
</li>
</ol>
<h2 id="&#x9690;&#x7A7A;&#x95F4;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;"><a href="#&#x9690;&#x7A7A;&#x95F4;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;"></a>&#x9690;&#x7A7A;&#x95F4;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;</h2>
<p>&#x5728;&#x53D8;&#x5206;&#x81EA;&#x7F16;&#x7801;&#x5668;&#xFF08;Variational Autoencoder, VAE&#xFF09;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#xFF0C;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;&#x662F;&#x4E24;&#x4E2A;&#x91CD;&#x8981;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x5173;&#x7CFB;&#x5230;&#x751F;&#x6210;&#x6A21;&#x578B;&#x7684;&#x8D28;&#x91CF;&#x548C;&#x6027;&#x80FD;&#x3002;</p>
<h3 id="&#x8FDE;&#x7EED;&#x6027;&#xFF08;Continuity&#xFF09;"><a href="#&#x8FDE;&#x7EED;&#x6027;&#xFF08;Continuity&#xFF09;"></a>&#x8FDE;&#x7EED;&#x6027;&#xFF08;Continuity&#xFF09;</h3>
<p>&#x8FDE;&#x7EED;&#x6027;&#x6307;&#x7684;&#x662F;&#x5728;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#xFF08;latent space&#xFF09;&#x4E2D;&#xFF0C;&#x4E24;&#x4E2A;&#x76F8;&#x90BB;&#x7684;&#x70B9;&#x5BF9;&#x5E94;&#x7684;&#x751F;&#x6210;&#x6570;&#x636E;&#x5728;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#x4E2D;&#x4E5F;&#x662F;&#x76F8;&#x4F3C;&#x7684;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#xFF0C;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x5C0F;&#x7684;&#x53D8;&#x5316;&#x4F1A;&#x5BFC;&#x81F4;&#x751F;&#x6210;&#x7684;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x5C0F;&#x7684;&#x53D8;&#x5316;&#x3002;&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x5728;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x8FDB;&#x884C;&#x8FDE;&#x7EED;&#x7684;&#x63D2;&#x503C;&#x64CD;&#x4F5C;&#xFF08;interpolation&#xFF09;&#xFF0C;&#x751F;&#x6210;&#x7684;&#x6570;&#x636E;&#x4E5F;&#x5E94;&#x8BE5;&#x8868;&#x73B0;&#x51FA;&#x5E73;&#x6ED1;&#x7684;&#x53D8;&#x5316;&#x3002;</p>
<h3 id="&#x5B8C;&#x6574;&#x6027;&#xFF08;Completeness&#xFF09;"><a href="#&#x5B8C;&#x6574;&#x6027;&#xFF08;Completeness&#xFF09;"></a>&#x5B8C;&#x6574;&#x6027;&#xFF08;Completeness&#xFF09;</h3>
<p>&#x5B8C;&#x6574;&#x6027;&#x6307;&#x7684;&#x662F;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x70B9;&#x90FD;&#x80FD;&#x591F;&#x89E3;&#x7801;&#x4E3A;&#x5408;&#x7406;&#x7684;&#x751F;&#x6210;&#x6837;&#x672C;&#xFF0C;&#x5373;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x533A;&#x57DF;&#x90FD;&#x5BF9;&#x5E94;&#x4E8E;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x6709;&#x6548;&#x6570;&#x636E;&#x3002;&#x8FD9;&#x6837;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x786E;&#x4FDD;&#x901A;&#x8FC7;VAE&#x751F;&#x6210;&#x7684;&#x6837;&#x672C;&#x662F;&#x591A;&#x6837;&#x7684;&#xFF0C;&#x8986;&#x76D6;&#x4E86;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x7684;&#x5168;&#x90E8;&#x5206;&#x5E03;&#x3002;</p>
<h3 id="&#x7F16;&#x7801;&#x4E3A;&#x5206;&#x5E03;&#x800C;&#x975E;&#x70B9;"><a href="#&#x7F16;&#x7801;&#x4E3A;&#x5206;&#x5E03;&#x800C;&#x975E;&#x70B9;"></a>&#x7F16;&#x7801;&#x4E3A;&#x5206;&#x5E03;&#x800C;&#x975E;&#x70B9;</h3>
<p>VAE&#x901A;&#x8FC7;&#x5C06;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7F16;&#x7801;&#x4E3A;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x7684;&#x53C2;&#x6570;&#xFF08;&#x5747;&#x503C;&#x548C;&#x65B9;&#x5DEE;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x70B9;&#xFF0C;&#x4ECE;&#x800C;&#x5F15;&#x5165;&#x4E86;&#x968F;&#x673A;&#x6027;&#x548C;&#x6B63;&#x5219;&#x5316;&#x3002;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x6D89;&#x53CA;&#x5230;&#x5728;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x91C7;&#x6837;&#xFF0C;&#x5E76;&#x4E14;&#x901A;&#x8FC7;KL&#x6563;&#x5EA6;&#xFF08;Kullback-Leibler divergence&#xFF09;&#x6B63;&#x5219;&#x5316;&#xFF0C;&#x4F7F;&#x5F97;&#x7F16;&#x7801;&#x7684;&#x5206;&#x5E03;&#x63A5;&#x8FD1;&#x6807;&#x51C6;&#x6B63;&#x6001;&#x5206;&#x5E03;&#xFF08;&#x901A;&#x5E38;&#x662F;&#x96F6;&#x5747;&#x503C;&#x548C;&#x5355;&#x4F4D;&#x65B9;&#x5DEE;&#xFF09;&#x3002;</p>
<h3 id="&#x786E;&#x4FDD;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;"><a href="#&#x786E;&#x4FDD;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;"></a>&#x786E;&#x4FDD;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;</h3>
<ol>
<li>
<p><strong>&#x8FDE;&#x7EED;&#x6027;</strong>&#xFF1A;&#x7531;&#x4E8E;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x70B9;&#x662F;&#x901A;&#x8FC7;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x91C7;&#x6837;&#x5F97;&#x5230;&#x7684;&#xFF0C;&#x8FD9;&#x4E9B;&#x70B9;&#x7684;&#x5206;&#x5E03;&#x662F;&#x8FDE;&#x7EED;&#x7684;&#x3002;VAE&#x901A;&#x8FC7;&#x5728;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x91C7;&#x6837;&#xFF0C;&#x7136;&#x540E;&#x89E3;&#x7801;&#x4E3A;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x6837;&#x672C;&#xFF0C;&#x786E;&#x4FDD;&#x4E86;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x7684;&#x8FDE;&#x7EED;&#x6027;&#x3002;&#x5373;&#x4F7F;&#x662F;&#x76F8;&#x90BB;&#x7684;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x70B9;&#xFF0C;&#x4E5F;&#x4F1A;&#x89E3;&#x7801;&#x4E3A;&#x76F8;&#x4F3C;&#x7684;&#x6570;&#x636E;&#x7A7A;&#x95F4;&#x70B9;&#x3002;</p>
</li>
<li>
<p><strong>&#x5B8C;&#x6574;&#x6027;</strong>&#xFF1A;&#x901A;&#x8FC7;KL&#x6563;&#x5EA6;&#x6B63;&#x5219;&#x5316;&#xFF0C;VAE&#x9F13;&#x52B1;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x7684;&#x5206;&#x5E03;&#x63A5;&#x8FD1;&#x6807;&#x51C6;&#x6B63;&#x6001;&#x5206;&#x5E03;&#xFF0C;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x786E;&#x4FDD;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x7684;&#x6BCF;&#x4E2A;&#x533A;&#x57DF;&#x90FD;&#x80FD;&#x751F;&#x6210;&#x6709;&#x6548;&#x7684;&#x6570;&#x636E;&#x6837;&#x672C;&#x3002;&#x5373;&#x4F7F;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x4EFB;&#x610F;&#x70B9;&#x4E5F;&#x80FD;&#x89E3;&#x7801;&#x4E3A;&#x5408;&#x7406;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x4ECE;&#x800C;&#x4FDD;&#x8BC1;&#x4E86;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x7684;&#x5B8C;&#x6574;&#x6027;&#x3002;</p>
</li>
</ol>
<p>&#x7B80;&#x800C;&#x8A00;&#x4E4B;&#xFF0C;VAE&#x5C06;&#x8F93;&#x5165;&#x7F16;&#x7801;&#x4E3A;&#x5206;&#x5E03;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x70B9;&#xFF09;&#x901A;&#x8FC7;&#x6B63;&#x5219;&#x5316;&#x548C;&#x91C7;&#x6837;&#x6280;&#x672F;&#xFF0C;&#x786E;&#x4FDD;&#x4E86;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x7684;&#x8FDE;&#x7EED;&#x6027;&#x548C;&#x5B8C;&#x6574;&#x6027;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x5F97;&#x751F;&#x6210;&#x7684;&#x6837;&#x672C;&#x66F4;&#x52A0;&#x591A;&#x6837;&#x5316;&#x4E14;&#x5E73;&#x6ED1;&#x3002;</p>
`,E=[{level:2,title:"重参数技巧",children:[{level:3,title:"1. 变分推断（Variational Inference）",children:[]},{level:3,title:"2. 证据下界（Evidence Lower Bound, ELBO）",children:[]},{level:3,title:"3. 重参数化技巧（Reparameterization Trick）",children:[]},{level:3,title:"关键数学知识总结",children:[]}]},{level:2,title:"隐空间连续性和完整性",children:[{level:3,title:"连续性（Continuity）",children:[]},{level:3,title:"完整性（Completeness）",children:[]},{level:3,title:"编码为分布而非点",children:[]},{level:3,title:"确保连续性和完整性",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
