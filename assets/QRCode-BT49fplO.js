const x={},F=`<h1 id="&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x7EA0;&#x9519;&#x539F;&#x7406;"><a href="#&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x7EA0;&#x9519;&#x539F;&#x7406;"></a>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x7EA0;&#x9519;&#x539F;&#x7406;</h1>
<h1 id="Reed-Solomon &#x7B97;&#x6CD5;&#x7B80;&#x4ECB;"><a href="#Reed-Solomon &#x7B97;&#x6CD5;&#x7B80;&#x4ECB;"></a>Reed-Solomon &#x7B97;&#x6CD5;&#x7B80;&#x4ECB;</h1>
<p>Reed-Solomon &#x7B97;&#x6CD5;&#x662F;&#x4E00;&#x79CD;&#x57FA;&#x4E8E;&#x591A;&#x9879;&#x5F0F;&#x63D2;&#x503C;&#x7684;&#x7EA0;&#x9519;&#x7F16;&#x7801;&#x6280;&#x672F;&#x3002;&#x5B83;&#x7684;&#x4E3B;&#x8981;&#x529F;&#x80FD;&#x662F;&#x901A;&#x8FC7;&#x52A0;&#x5165;&#x5197;&#x4F59;&#x4FE1;&#x606F;&#xFF08;&#x7EA0;&#x9519;&#x7801;&#xFF09;&#xFF0C;&#x5728;&#x90E8;&#x5206;&#x6570;&#x636E;&#x635F;&#x574F;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x6062;&#x590D;&#x539F;&#x59CB;&#x6570;&#x636E;&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F; Reed-Solomon &#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;&#x4E0E;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#xFF0C;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x5176;&#x539F;&#x7406;&#x548C;&#x5E94;&#x7528;&#x3002;</p>
<hr>
<h2 id="&#x4E00;&#x3001;&#x57FA;&#x672C;&#x6982;&#x5FF5;"><a href="#&#x4E00;&#x3001;&#x57FA;&#x672C;&#x6982;&#x5FF5;"></a>&#x4E00;&#x3001;&#x57FA;&#x672C;&#x6982;&#x5FF5;</h2>
<ol>
<li>
<p><strong>&#x6570;&#x636E;&#x89C6;&#x4E3A;&#x591A;&#x9879;&#x5F0F;</strong></p>
<ul>
<li>&#x539F;&#x59CB;&#x6570;&#x636E;&#x53EF;&#x4EE5;&#x7528;&#x4E00;&#x4E2A;&#x591A;&#x9879;&#x5F0F; ( f(x) ) &#x8868;&#x793A;&#x3002;</li>
<li>&#x6570;&#x636E;&#x70B9;&#x662F;&#x591A;&#x9879;&#x5F0F;&#x5728;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#x7684;&#x53D6;&#x503C;&#xFF08;&#x7F16;&#x7801;&#x70B9;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x751F;&#x6210;&#x5197;&#x4F59;&#x6821;&#x9A8C;&#x70B9;</strong></p>
<ul>
<li>&#x5BF9; ( f(x) ) &#x8BA1;&#x7B97;&#x989D;&#x5916;&#x7684;&#x70B9;&#x503C;&#xFF0C;&#x4F5C;&#x4E3A;&#x6821;&#x9A8C;&#x6570;&#x636E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7EA0;&#x9519;&#x80FD;&#x529B;</strong></p>
<ul>
<li>&#x5982;&#x679C;&#x6709; ( k ) &#x4E2A;&#x539F;&#x59CB;&#x6570;&#x636E;&#x548C; ( n - k ) &#x4E2A;&#x6821;&#x9A8C;&#x6570;&#x636E;&#xFF0C;Reed-Solomon &#x80FD;&#x591F;&#x7EA0;&#x6B63;&#x6700;&#x591A; ( \\frac{n-k}{2} ) &#x4E2A;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h2 id="&#x4E8C;&#x3001;&#x7B80;&#x5355;&#x4F8B;&#x5B50;"><a href="#&#x4E8C;&#x3001;&#x7B80;&#x5355;&#x4F8B;&#x5B50;"></a>&#x4E8C;&#x3001;&#x7B80;&#x5355;&#x4F8B;&#x5B50;</h2>
<h3 id="&#x573A;&#x666F;&#x63CF;&#x8FF0;"><a href="#&#x573A;&#x666F;&#x63CF;&#x8FF0;"></a>&#x573A;&#x666F;&#x63CF;&#x8FF0;</h3>
<ol>
<li><strong>&#x539F;&#x59CB;&#x6570;&#x636E;</strong>&#xFF1A;3&#x4E2A;&#x6570;&#x636E;&#x70B9; ( [1, 3, 5] )&#x3002;</li>
<li><strong>&#x76EE;&#x6807;</strong>&#xFF1A;&#x901A;&#x8FC7; Reed-Solomon&#xFF0C;&#x6DFB;&#x52A0; 2 &#x4E2A;&#x6821;&#x9A8C;&#x70B9;&#xFF0C;&#x4F7F;&#x5176;&#x5728;&#x635F;&#x574F;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x53EF;&#x4EE5;&#x6062;&#x590D;&#x3002;</li>
<li><strong>&#x6709;&#x9650;&#x57DF;</strong>&#xFF1A;&#x91C7;&#x7528;&#x6709;&#x9650;&#x57DF; GF(7)&#xFF08;&#x7B80;&#x5355;&#x7684;&#x6A21; 7 &#x8FD0;&#x7B97;&#xFF09;&#x3002;</li>
</ol>
<hr>
<h3 id="1. &#x6784;&#x9020;&#x591A;&#x9879;&#x5F0F;"><a href="#1. &#x6784;&#x9020;&#x591A;&#x9879;&#x5F0F;"></a>1. &#x6784;&#x9020;&#x591A;&#x9879;&#x5F0F;</h3>
<p>&#x6839;&#x636E;&#x539F;&#x59CB;&#x6570;&#x636E; ( [1, 3, 5] )&#xFF0C;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x4E8C;&#x6B21;&#x591A;&#x9879;&#x5F0F;&#xFF1A;<br>
[
f(x) = a_0 + a_1x + a_2x^2
]</p>
<p>&#x5C06;&#x6570;&#x636E;&#x70B9; ( (x, y) ) &#x586B;&#x5165;&#xFF1A;</p>
<ul>
<li>&#x5F53; ( x = 0 ), ( y = 1 ): ( a_0 = 1 )</li>
<li>&#x5F53; ( x = 1 ), ( y = 3 ): ( 1 + a_1 + a_2 = 3 )</li>
<li>&#x5F53; ( x = 2 ), ( y = 5 ): ( 1 + 2a_1 + 4a_2 = 5 )</li>
</ul>
<p>&#x89E3;&#x65B9;&#x7A0B;&#x5F97;&#x5230;&#x7CFB;&#x6570;&#xFF1A;
[
f(x) = 1 + 2x + x^2
]</p>
<hr>
<h3 id="2. &#x751F;&#x6210;&#x6821;&#x9A8C;&#x70B9;"><a href="#2. &#x751F;&#x6210;&#x6821;&#x9A8C;&#x70B9;"></a>2. &#x751F;&#x6210;&#x6821;&#x9A8C;&#x70B9;</h3>
<p>&#x8BA1;&#x7B97; ( f(x) ) &#x7684;&#x989D;&#x5916;&#x70B9;&#x503C;&#xFF1A;</p>
<ul>
<li>( f(3) = 1 + 2(3) + (3)^2 = 16 \\mod 7 = 2 )</li>
<li>( f(4) = 1 + 2(4) + (4)^2 = 25 \\mod 7 = 4 )</li>
</ul>
<p>&#x5B8C;&#x6574;&#x6570;&#x636E;&#x53D8;&#x4E3A;&#xFF1A;<br>
&#x539F;&#x59CB;&#x6570;&#x636E; ( [1, 3, 5] ) &#x548C;&#x6821;&#x9A8C;&#x6570;&#x636E; ( [2, 4] )&#x3002;</p>
<hr>
<h3 id="3. &#x6570;&#x636E;&#x635F;&#x574F;"><a href="#3. &#x6570;&#x636E;&#x635F;&#x574F;"></a>3. &#x6570;&#x636E;&#x635F;&#x574F;</h3>
<p>&#x5047;&#x8BBE;&#x4F20;&#x8F93;&#x4E2D;&#xFF0C;&#x6570;&#x636E; ( [1, ?, 5, ?, 4] ) &#x88AB;&#x90E8;&#x5206;&#x635F;&#x574F;&#xFF08;&#x4E24;&#x4E2A;&#x672A;&#x77E5;&#xFF09;&#x3002;<br>
&#x9700;&#x8981;&#x6062;&#x590D;&#x5B8C;&#x6574;&#x6570;&#x636E;&#x3002;</p>
<hr>
<h3 id="4. &#x6570;&#x636E;&#x6062;&#x590D;&#xFF08;&#x591A;&#x9879;&#x5F0F;&#x63D2;&#x503C;&#xFF09;"><a href="#4. &#x6570;&#x636E;&#x6062;&#x590D;&#xFF08;&#x591A;&#x9879;&#x5F0F;&#x63D2;&#x503C;&#xFF09;"></a>4. &#x6570;&#x636E;&#x6062;&#x590D;&#xFF08;&#x591A;&#x9879;&#x5F0F;&#x63D2;&#x503C;&#xFF09;</h3>
<h4 id="&#x5DF2;&#x77E5;&#xFF1A;"><a href="#&#x5DF2;&#x77E5;&#xFF1A;"></a>&#x5DF2;&#x77E5;&#xFF1A;</h4>
<ul>
<li>&#x6570;&#x636E;&#x70B9; ( (0, 1), (2, 5), (4, 4) )</li>
<li>&#x4E24;&#x4E2A;&#x635F;&#x574F;&#x7684;&#x6570;&#x636E;&#x70B9; ( (1, ?), (3, ?) )</li>
</ul>
<h4 id="&#x63D2;&#x503C;&#x6062;&#x590D;&#xFF1A;"><a href="#&#x63D2;&#x503C;&#x6062;&#x590D;&#xFF1A;"></a>&#x63D2;&#x503C;&#x6062;&#x590D;&#xFF1A;</h4>
<p>&#x901A;&#x8FC7;&#x63D2;&#x503C;&#x6CD5;&#x6062;&#x590D; ( f(x) = 1 + 2x + x^2 )&#xFF0C;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x7F3A;&#x5931;&#x70B9;&#xFF1A;</p>
<ul>
<li>( f(1) = 1 + 2(1) + (1)^2 = 3 )</li>
<li>( f(3) = 1 + 2(3) + (3)^2 = 16 \\mod 7 = 2 )</li>
</ul>
<p>&#x6062;&#x590D;&#x5B8C;&#x6574;&#x6570;&#x636E;&#xFF1A;<br>
[ [1, 3, 5, 2, 4] ]</p>
<hr>
<h2 id="&#x4E09;&#x3001;&#x5E94;&#x7528;&#x573A;&#x666F;"><a href="#&#x4E09;&#x3001;&#x5E94;&#x7528;&#x573A;&#x666F;"></a>&#x4E09;&#x3001;&#x5E94;&#x7528;&#x573A;&#x666F;</h2>
<ol>
<li>
<p><strong>&#x5149;&#x76D8;&#x5B58;&#x50A8;</strong>&#xFF1A;</p>
<ul>
<li>&#x6570;&#x636E;&#x5206;&#x5757;&#x5B58;&#x50A8;&#xFF0C;&#x5229;&#x7528; Reed-Solomon &#x6821;&#x9A8C;&#x7801;&#x4FEE;&#x590D;&#x5212;&#x75D5;&#x635F;&#x574F;&#x7684;&#x6570;&#x636E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x4E8C;&#x7EF4;&#x7801;</strong>&#xFF1A;</p>
<ul>
<li>&#x90E8;&#x5206;&#x4E8C;&#x7EF4;&#x7801;&#x6A21;&#x5757;&#x88AB;&#x6C61;&#x635F;&#x6216;&#x906E;&#x6321;&#xFF0C;&#x5229;&#x7528;&#x5197;&#x4F59;&#x4FE1;&#x606F;&#x6062;&#x590D;&#x5B8C;&#x6574;&#x6570;&#x636E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x901A;&#x4FE1;&#x7CFB;&#x7EDF;</strong>&#xFF1A;</p>
<ul>
<li>&#x5728;&#x566A;&#x58F0;&#x5E72;&#x6270;&#x7684;&#x4FE1;&#x9053;&#x4E2D;&#x4F20;&#x8F93;&#x6570;&#x636E;&#xFF0C;&#x6821;&#x9A8C;&#x7801;&#x7528;&#x4E8E;&#x7EA0;&#x6B63;&#x4F20;&#x8F93;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h2 id="&#x56DB;&#x3001;&#x603B;&#x7ED3;"><a href="#&#x56DB;&#x3001;&#x603B;&#x7ED3;"></a>&#x56DB;&#x3001;&#x603B;&#x7ED3;</h2>
<ul>
<li><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;</strong>&#xFF1A;&#x5C06;&#x6570;&#x636E;&#x6620;&#x5C04;&#x5230;&#x591A;&#x9879;&#x5F0F;&#xFF0C;&#x901A;&#x8FC7;&#x6DFB;&#x52A0;&#x6821;&#x9A8C;&#x70B9;&#x589E;&#x5F3A;&#x5BB9;&#x9519;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&#x7EA0;&#x9519;&#x80FD;&#x529B;</strong>&#xFF1A;&#x5DF2;&#x77E5;&#x9519;&#x8BEF;&#x4F4D;&#x7F6E;&#xFF0C;&#x6700;&#x591A;&#x4FEE;&#x590D; n-k &#x4E2A;&#x9519;&#x8BEF;&#x70B9;&#x3002;&#xFF08;n &#x662F;&#x6570;&#x636E;&#x70B9;&#x6570;&#x91CF;&#xFF0C;k &#x662F;&#x539F;&#x59CB;&#x6570;&#x636E;&#x70B9;&#x6570;&#x91CF;, n-k &#x662F;&#x6821;&#x9A8C;&#x70B9;&#x6570;&#x91CF;&#xFF09;&#xFF0C;&#x7EA0;&#x9519;&#x7387; (n-k)/n</li>
<li><strong>&#x5B9E;&#x9645;&#x610F;&#x4E49;</strong>&#xFF1A;&#x4FDD;&#x8BC1;&#x5728;&#x90E8;&#x5206;&#x6570;&#x636E;&#x4E22;&#x5931;&#x6216;&#x635F;&#x574F;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x4ECD;&#x80FD;&#x51C6;&#x786E;&#x6062;&#x590D;&#x539F;&#x59CB;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
<p>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;&#x4E2D;&#xFF0C;&#x5927;&#x591A;&#x6570;&#x635F;&#x574F;&#x5C5E;&#x4E8E;<strong>&#x4F4D;&#x7F6E;&#x5DF2;&#x77E5;</strong>&#x7684;&#x9519;&#x8BEF;&#xFF0C;&#x8FD9;&#x4F7F;&#x5F97;&#x4E8C;&#x7EF4;&#x7801;&#x975E;&#x5E38;&#x9002;&#x5408;&#x4F7F;&#x7528; Reed-Solomon &#x7B97;&#x6CD5; &#x7684;&#x7EA0;&#x9519;&#x529F;&#x80FD;&#x3002;</p>
<h1 id="&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5F62;&#x53D8;&#x6062;&#x590D;"><a href="#&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5F62;&#x53D8;&#x6062;&#x590D;"></a>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5F62;&#x53D8;&#x6062;&#x590D;</h1>
<p>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5F62;&#x53D8;&#x6062;&#x590D;&#x4E3B;&#x8981;&#x4F9D;&#x8D56;&#x4E8E;&#x529F;&#x80FD;&#x533A;&#x57DF;&#xFF08;&#x5982;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x3001;&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#x548C;&#x65F6;&#x95F4;&#x56FE;&#x6848;&#xFF09;&#x6765;&#x6821;&#x6B63;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x51E0;&#x4F55;&#x5F62;&#x6001;&#xFF0C;&#x5C06;&#x5176;&#x8FD8;&#x539F;&#x4E3A;&#x6807;&#x51C6;&#x7684;&#x77E9;&#x9635;&#x5F62;&#x5F0F;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x4E8C;&#x7EF4;&#x7801;&#x5F62;&#x53D8;&#x6821;&#x6B63;&#x7684;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x548C;&#x539F;&#x7406;&#xFF1A;</p>
<hr>
<h3 id="1. &#x5F62;&#x53D8;&#x7C7B;&#x578B;"><a href="#1. &#x5F62;&#x53D8;&#x7C7B;&#x578B;"></a><strong>1. &#x5F62;&#x53D8;&#x7C7B;&#x578B;</strong></h3>
<p>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5F62;&#x53D8;&#x4E3B;&#x8981;&#x5206;&#x4E3A;&#x4EE5;&#x4E0B;&#x51E0;&#x7C7B;&#xFF1A;</p>
<ul>
<li><strong>&#x65CB;&#x8F6C;&#x53D8;&#x5F62;&#xFF1A;</strong> &#x4E8C;&#x7EF4;&#x7801;&#x88AB;&#x65CB;&#x8F6C;&#x3002;</li>
<li><strong>&#x900F;&#x89C6;&#x53D8;&#x5F62;&#xFF1A;</strong> &#x4E8C;&#x7EF4;&#x7801;&#x62CD;&#x6444;&#x65F6;&#x4E0D;&#x662F;&#x6B63;&#x9762;&#x62CD;&#x6444;&#xFF0C;&#x5BFC;&#x81F4;&#x56FE;&#x50CF;&#x5448;&#x73B0;&#x68AF;&#x5F62;&#x6216;&#x83F1;&#x5F62;&#x3002;</li>
<li><strong>&#x5F2F;&#x66F2;&#x53D8;&#x5F62;&#xFF1A;</strong> &#x4E8C;&#x7EF4;&#x7801;&#x5370;&#x5237;&#x5728;&#x66F2;&#x9762;&#x4E0A;&#x6216;&#x56E0;&#x7269;&#x7406;&#x539F;&#x56E0;&#x5BFC;&#x81F4;&#x5F62;&#x72B6;&#x5F2F;&#x66F2;&#x3002;</li>
</ul>
<hr>
<h3 id="2. &#x529F;&#x80FD;&#x533A;&#x57DF;&#x7684;&#x4F5C;&#x7528;"><a href="#2. &#x529F;&#x80FD;&#x533A;&#x57DF;&#x7684;&#x4F5C;&#x7528;"></a><strong>2. &#x529F;&#x80FD;&#x533A;&#x57DF;&#x7684;&#x4F5C;&#x7528;</strong></h3>
<p>&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x529F;&#x80FD;&#x533A;&#x57DF;&#xFF08;&#x5C24;&#x5176;&#x662F;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x548C;&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#xFF09;&#x8D77;&#x5230;&#x4E86;&#x5173;&#x952E;&#x4F5C;&#x7528;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#xFF1A;</strong></p>
<ul>
<li>&#x4E09;&#x4E2A;&#x5927;&#x65B9;&#x5757;&#x4F4D;&#x4E8E;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5DE6;&#x4E0A;&#x89D2;&#x3001;&#x53F3;&#x4E0A;&#x89D2;&#x548C;&#x5DE6;&#x4E0B;&#x89D2;&#x3002;</li>
<li>&#x5B83;&#x4EEC;&#x7684;&#x76F8;&#x5BF9;&#x4F4D;&#x7F6E;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x6574;&#x4F53;&#x65B9;&#x5411;&#x3001;&#x5927;&#x5C0F;&#x548C;&#x5F62;&#x53D8;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#xFF1A;</strong></p>
<ul>
<li>&#x591A;&#x4E2A;&#x5C0F;&#x65B9;&#x5757;&#x4F4D;&#x4E8E;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x5185;&#x90E8;&#xFF0C;&#x5E2E;&#x52A9;&#x6821;&#x6B63;&#x975E;&#x7EBF;&#x6027;&#x5F62;&#x53D8;&#xFF08;&#x5982;&#x5F2F;&#x66F2;&#x6216;&#x5C40;&#x90E8;&#x62C9;&#x4F38;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x65F6;&#x95F4;&#x56FE;&#x6848;&#xFF1A;</strong></p>
<ul>
<li>&#x4F4D;&#x4E8E;&#x4E8C;&#x7EF4;&#x7801;&#x9876;&#x90E8;&#x548C;&#x5DE6;&#x4FA7;&#x7684;&#x9ED1;&#x767D;&#x76F8;&#x95F4;&#x7EBF;&#x6761;&#xFF0C;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x7F51;&#x683C;&#x7684;&#x884C;&#x5217;&#x6570;&#x91CF;&#xFF0C;&#x5E2E;&#x52A9;&#x89E3;&#x7801;&#x5668;&#x627E;&#x5230;&#x6570;&#x636E;&#x6A21;&#x5757;&#x7684;&#x51C6;&#x786E;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h3 id="3. &#x6821;&#x6B63;&#x5F62;&#x53D8;&#x7684;&#x6B65;&#x9AA4;"><a href="#3. &#x6821;&#x6B63;&#x5F62;&#x53D8;&#x7684;&#x6B65;&#x9AA4;"></a><strong>3. &#x6821;&#x6B63;&#x5F62;&#x53D8;&#x7684;&#x6B65;&#x9AA4;</strong></h3>
<h4 id="&#x6B65;&#x9AA4; 1&#xFF1A;&#x68C0;&#x6D4B;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;"><a href="#&#x6B65;&#x9AA4; 1&#xFF1A;&#x68C0;&#x6D4B;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;"></a><strong>&#x6B65;&#x9AA4; 1&#xFF1A;&#x68C0;&#x6D4B;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;</strong></h4>
<ul>
<li>&#x89E3;&#x7801;&#x5668;&#x626B;&#x63CF;&#x56FE;&#x50CF;&#xFF0C;&#x5BFB;&#x627E;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x4E09;&#x4E2A;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x3002;</li>
<li>&#x6839;&#x636E;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x7684;&#x51E0;&#x4F55;&#x7279;&#x6027;&#xFF08;&#x9ED1;&#x767D;&#x6A21;&#x5757;&#x7684;&#x56FA;&#x5B9A;&#x6BD4;&#x4F8B;&#x548C;&#x5F62;&#x72B6;&#xFF09;&#xFF0C;&#x786E;&#x5B9A;&#x5B83;&#x4EEC;&#x5728;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
<h4 id="&#x6B65;&#x9AA4; 2&#xFF1A;&#x4F30;&#x8BA1;&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;"><a href="#&#x6B65;&#x9AA4; 2&#xFF1A;&#x4F30;&#x8BA1;&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;"></a><strong>&#x6B65;&#x9AA4; 2&#xFF1A;&#x4F30;&#x8BA1;&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;</strong></h4>
<ul>
<li>&#x5229;&#x7528;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x7684;&#x76F8;&#x5BF9;&#x4F4D;&#x7F6E;&#xFF0C;&#x8BA1;&#x7B97;&#x5B9E;&#x9645;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x56DB;&#x4E2A;&#x9876;&#x70B9;&#xFF08;&#x5305;&#x62EC;&#x9690;&#x542B;&#x7684;&#x53F3;&#x4E0B;&#x89D2;&#xFF09;&#x3002;</li>
<li>&#x5C06;&#x5B9E;&#x9645;&#x9876;&#x70B9;&#x4E0E;&#x6807;&#x51C6;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x9876;&#x70B9;&#x4F4D;&#x7F6E;&#x5BF9;&#x5E94;&#xFF0C;&#x751F;&#x6210;&#x4E00;&#x4E2A; <strong>&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;</strong>&#x3002;
<ul>
<li>&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;&#x662F;&#x4E00;&#x4E2A; 3x3 &#x7684;&#x77E9;&#x9635;&#xFF0C;&#x80FD;&#x591F;&#x5C06;&#x4EFB;&#x4F55;&#x900F;&#x89C6;&#x53D8;&#x5F62;&#x7684;&#x56FE;&#x50CF;&#x8FD8;&#x539F;&#x4E3A;&#x5E73;&#x9762;&#x56FE;&#x50CF;&#x3002;</li>
</ul>
</li>
</ul>
<h4 id="&#x6B65;&#x9AA4; 3&#xFF1A;&#x5E94;&#x7528;&#x900F;&#x89C6;&#x53D8;&#x6362;"><a href="#&#x6B65;&#x9AA4; 3&#xFF1A;&#x5E94;&#x7528;&#x900F;&#x89C6;&#x53D8;&#x6362;"></a><strong>&#x6B65;&#x9AA4; 3&#xFF1A;&#x5E94;&#x7528;&#x900F;&#x89C6;&#x53D8;&#x6362;</strong></h4>
<ul>
<li>&#x4F7F;&#x7528;&#x8BA1;&#x7B97;&#x51FA;&#x7684;&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;&#xFF0C;&#x5BF9;&#x4E8C;&#x7EF4;&#x7801;&#x56FE;&#x50CF;&#x8FDB;&#x884C;&#x4EFF;&#x5C04;&#x53D8;&#x6362;&#x6216;&#x900F;&#x89C6;&#x53D8;&#x6362;&#xFF0C;&#x6062;&#x590D;&#x4E3A;&#x6807;&#x51C6;&#x7684;&#x77E9;&#x5F62;&#x3002;</li>
</ul>
<h4 id="&#x6B65;&#x9AA4; 4&#xFF1A;&#x7EC6;&#x5316;&#x6821;&#x6B63;"><a href="#&#x6B65;&#x9AA4; 4&#xFF1A;&#x7EC6;&#x5316;&#x6821;&#x6B63;"></a><strong>&#x6B65;&#x9AA4; 4&#xFF1A;&#x7EC6;&#x5316;&#x6821;&#x6B63;</strong></h4>
<ul>
<li>&#x68C0;&#x6D4B;&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#xFF0C;&#x8FDB;&#x4E00;&#x6B65;&#x6821;&#x6B63;&#x975E;&#x7EBF;&#x6027;&#x53D8;&#x5F62;&#xFF08;&#x5982;&#x5F2F;&#x66F2;&#xFF09;&#x3002;</li>
<li>&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#x901A;&#x8FC7;&#x6D4B;&#x91CF;&#x53D8;&#x5F62;&#x540E;&#x7684;&#x4F4D;&#x7F6E;&#x4E0E;&#x9884;&#x671F;&#x4F4D;&#x7F6E;&#x7684;&#x504F;&#x5DEE;&#xFF0C;&#x8C03;&#x6574;&#x5185;&#x90E8;&#x6A21;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
<h4 id="&#x6B65;&#x9AA4; 5&#xFF1A;&#x63D0;&#x53D6;&#x7F51;&#x683C;"><a href="#&#x6B65;&#x9AA4; 5&#xFF1A;&#x63D0;&#x53D6;&#x7F51;&#x683C;"></a><strong>&#x6B65;&#x9AA4; 5&#xFF1A;&#x63D0;&#x53D6;&#x7F51;&#x683C;</strong></h4>
<ul>
<li>&#x6839;&#x636E;&#x65F6;&#x95F4;&#x56FE;&#x6848;&#x7684;&#x9ED1;&#x767D;&#x95F4;&#x9694;&#xFF0C;&#x786E;&#x5B9A;&#x4E8C;&#x7EF4;&#x7801;&#x7684;&#x884C;&#x5217;&#x6570;&#x91CF;&#x3002;</li>
<li>&#x5C06;&#x6062;&#x590D;&#x540E;&#x7684;&#x56FE;&#x50CF;&#x5212;&#x5206;&#x4E3A;&#x6807;&#x51C6;&#x7684;&#x7F51;&#x683C;&#x77E9;&#x9635;&#xFF0C;&#x51C6;&#x5907;&#x89E3;&#x7801;&#x3002;</li>
</ul>
<hr>
<h3 id="6. &#x603B;&#x7ED3;"><a href="#6. &#x603B;&#x7ED3;"></a><strong>6. &#x603B;&#x7ED3;</strong></h3>
<p>&#x4E8C;&#x7EF4;&#x7801;&#x5F62;&#x53D8;&#x6062;&#x590D;&#x7684;&#x6838;&#x5FC3;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x5229;&#x7528;&#x529F;&#x80FD;&#x533A;&#x57DF;&#xFF08;&#x5B9A;&#x4F4D;&#x56FE;&#x5F62;&#x3001;&#x5BF9;&#x9F50;&#x56FE;&#x5F62;&#x3001;&#x65F6;&#x95F4;&#x56FE;&#x6848;&#xFF09;&#x8BC6;&#x522B;&#x53D8;&#x5F62;&#x3002;</li>
<li>&#x8BA1;&#x7B97;&#x900F;&#x89C6;&#x53D8;&#x6362;&#x77E9;&#x9635;&#xFF0C;&#x5C06;&#x5F62;&#x53D8;&#x4E8C;&#x7EF4;&#x7801;&#x6062;&#x590D;&#x4E3A;&#x6807;&#x51C6;&#x77E9;&#x5F62;&#x3002;</li>
<li>&#x7EC6;&#x5316;&#x6821;&#x6B63;&#xFF0C;&#x786E;&#x4FDD;&#x5185;&#x90E8;&#x6570;&#x636E;&#x6A21;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#x7CBE;&#x786E;&#x65E0;&#x8BEF;&#x3002;</li>
</ul>
`,E=[{level:1,title:"二维码的纠错原理",children:[]},{level:1,title:"Reed-Solomon 算法简介",children:[{level:2,title:"一、基本概念",children:[]},{level:2,title:"二、简单例子",children:[{level:3,title:"场景描述",children:[]},{level:3,title:"1. 构造多项式",children:[]},{level:3,title:"2. 生成校验点",children:[]},{level:3,title:"3. 数据损坏",children:[]},{level:3,title:"4. 数据恢复（多项式插值）",children:[{level:4,title:"已知：",children:[]},{level:4,title:"插值恢复：",children:[]}]}]},{level:2,title:"三、应用场景",children:[]},{level:2,title:"四、总结",children:[]}]},{level:1,title:"二维码的形变恢复",children:[{level:3,title:"1. 形变类型",children:[]},{level:3,title:"2. 功能区域的作用",children:[]},{level:3,title:"3. 校正形变的步骤",children:[{level:4,title:"步骤 1：检测定位图形",children:[]},{level:4,title:"步骤 2：估计透视变换矩阵",children:[]},{level:4,title:"步骤 3：应用透视变换",children:[]},{level:4,title:"步骤 4：细化校正",children:[]},{level:4,title:"步骤 5：提取网格",children:[]}]},{level:3,title:"6. 总结",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
