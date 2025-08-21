const x={},F=`<h1 id="&#x65CB;&#x8F6C;&#x77E9;&#x9635;&#x7684;&#x8BC1;&#x660E;"><a href="#&#x65CB;&#x8F6C;&#x77E9;&#x9635;&#x7684;&#x8BC1;&#x660E;"></a>&#x65CB;&#x8F6C;&#x77E9;&#x9635;&#x7684;&#x8BC1;&#x660E;</h1>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x5411;&#x91CF;&#x65CB;&#x8F6C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x65CB;&#x8F6C;&#x77E9;&#x9635;&#x6765;&#x8868;&#x793A;&#x3002;</p>
<pre><code>| cos&#x3B8;  -sin&#x3B8; |
| sin&#x3B8;   cos&#x3B8; |
</code></pre>
<p>&#x8BC1;&#x660E;&#xFF1A;</p>
<p>&#x8BA9;&#x6211;&#x4EEC;&#x8003;&#x8651;&#x4E00;&#x4E2A;&#x70B9;P&#xFF0C;&#x5750;&#x6807;&#x4E3A; (x, y)&#x3002;&#x6211;&#x4EEC;&#x5E0C;&#x671B;&#x5C06;&#x70B9;P&#x7ED5;&#x539F;&#x70B9;&#x9006;&#x65F6;&#x9488;&#x65CB;&#x8F6C;&#x3B8;&#x89D2;&#xFF0C;&#x8BA1;&#x7B97;&#x65CB;&#x8F6C;&#x540E;&#x7684;&#x5750;&#x6807; (x&apos;, y&apos;)&#x3002;</p>
<p>&#x5728;&#x65CB;&#x8F6C;&#x4E4B;&#x524D;&#xFF0C;&#x70B9;P&#x7684;&#x4F4D;&#x7F6E;&#x53EF;&#x4EE5;&#x7528;&#x6781;&#x5750;&#x6807;&#x8868;&#x793A;&#x4E3A;&#xFF1A;</p>
<pre><code>x = r cos&#x3B1;
y = r sin&#x3B1;
</code></pre>
<p>&#x5176;&#x4E2D; r &#x662F;&#x70B9;P&#x5230;&#x539F;&#x70B9;&#x7684;&#x8DDD;&#x79BB;&#xFF08;&#x5373;&#x5411;&#x91CF;&#x7684;&#x957F;&#x5EA6;&#xFF09;&#xFF0C;&#x3B1; &#x662F;&#x4ECE;x&#x8F74;&#x5230;&#x5411;&#x91CF;[ x, y ]&#x7684;&#x89D2;&#x5EA6;&#x3002;</p>
<p>&#x5F53;&#x6211;&#x4EEC;&#x628A;&#x70B9;P&#x9006;&#x65F6;&#x9488;&#x65CB;&#x8F6C;&#x3B8;&#x89D2;&#x5EA6;&#x540E;&#xFF0C;&#x5411;&#x91CF;&#x7684;&#x957F;&#x5EA6;&#x4E0D;&#x53D8;&#xFF0C;&#x4F46;&#x89D2;&#x5EA6;&#x53D8;&#x4E3A; &#x3B1; + &#x3B8;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x65CB;&#x8F6C;&#x540E;&#x70B9;&#x7684;&#x65B0;&#x5750;&#x6807; (x&apos;, y&apos;) &#x7528;&#x6781;&#x5750;&#x6807;&#x8868;&#x793A;&#x662F;&#xFF1A;</p>
<pre><code>x&apos; = r cos(&#x3B1; + &#x3B8;)
y&apos; = r sin(&#x3B1; + &#x3B8;)
</code></pre>
<p>&#x4F7F;&#x7528;&#x4E09;&#x89D2;&#x6052;&#x7B49;&#x5F0F;&#xFF0C;cos(&#x3B1; + &#x3B8;) &#x548C; sin(&#x3B1; + &#x3B8;) &#x53EF;&#x4EE5;&#x8868;&#x793A;&#x4E3A;&#xFF1A;</p>
<pre><code>cos(&#x3B1; + &#x3B8;) = cos&#x3B1; cos&#x3B8; - sin&#x3B1; sin&#x3B8;
sin(&#x3B1; + &#x3B8;) = sin&#x3B1; cos&#x3B8; + cos&#x3B1; sin&#x3B8;
</code></pre>
<p>&#x56E0;&#x6B64;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x5750;&#x6807;&#x5199;&#x4E3A;&#xFF1A;</p>
<pre><code>x&apos; = r(cos&#x3B1; cos&#x3B8; - sin&#x3B1; sin&#x3B8;)
y&apos; = r(sin&#x3B1; cos&#x3B8; + cos&#x3B1; sin&#x3B8;)
</code></pre>
<p>&#x7531;&#x4E8E; x = r cos&#x3B1; &#x548C; y = r sin&#x3B1;&#xFF0C;&#x4EE3;&#x5165;&#x4E0A;&#x9762;&#x7684;&#x7B49;&#x5F0F;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code>x&apos; = x cos&#x3B8; - y sin&#x3B8;
y&apos; = x sin&#x3B8; + y cos&#x3B8;
</code></pre>
<p>&#x73B0;&#x5728;&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x8FD9;&#x4E2A;&#x53D8;&#x6362;&#x8868;&#x793A;&#x4E3A;&#x77E9;&#x9635;&#x5F62;&#x5F0F;&#xFF1A;</p>
<pre><code>|x&apos;|   |cos&#x3B8;  -sin&#x3B8;| |x|
|y&apos;| = |sin&#x3B8;   cos&#x3B8;| |y|
</code></pre>
<p>&#x7ED3;&#x679C;&#x5C31;&#x662F;&#x70B9;P&#x5728;&#x9006;&#x65F6;&#x9488;&#x65CB;&#x8F6C;&#x3B8;&#x5EA6;&#x4E4B;&#x540E;&#x7684;&#x5750;&#x6807; (x&apos;, y&apos;) &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x539F;&#x5750;&#x6807; (x, y) &#x4E0E;&#x65CB;&#x8F6C;&#x77E9;&#x9635;&#x76F8;&#x4E58;&#x5F97;&#x5230;&#x3002;</p>
<p>&#xFF08;&#x4F7F;&#x7528;&#x4E86;&#x57FA;&#x672C;&#x7684;&#x4E09;&#x89D2;&#x6052;&#x7B49;&#x5F0F;&#x548C;&#x6781;&#x5750;&#x6807;&#x7684;&#x8F6C;&#x6362;&#x3002;&#xFF09;</p>
<h2 id="&#x5411;&#x91CF;&#x4E0E;&#x89D2;&#x5EA6;&#x7684;&#x5173;&#x7CFB;"><a href="#&#x5411;&#x91CF;&#x4E0E;&#x89D2;&#x5EA6;&#x7684;&#x5173;&#x7CFB;"></a>&#x5411;&#x91CF;&#x4E0E;&#x89D2;&#x5EA6;&#x7684;&#x5173;&#x7CFB;</h2>
<pre><code>||C||&#xB2; = ||A||&#xB2; + ||B||&#xB2; - 2*||A||*||B||*cos(&#x3B8;)
||C||&#xB2; = C &#xB7; C = (a1 - b1)&#xB2; + (a2 - b2)&#xB2;
&#x53EF;&#x5F97;&#x51FA;&#xFF1A;cos(&#x3B8;) = A&#xB7;B / (||A|| * ||B||)
&#x53EF;&#x5F97;&#x51FA;&#xFF1A;A &#x2022; B= a1b1 + a2b2=||A|| * ||B|| * cos(&#x3B8;)
</code></pre>
<h1 id="&#x91CD;&#x5FC3;&#x5750;&#x6807;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;"><a href="#&#x91CD;&#x5FC3;&#x5750;&#x6807;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;"></a>&#x91CD;&#x5FC3;&#x5750;&#x6807;&#x8BA1;&#x7B97;&#x516C;&#x5F0F;</h1>
<p>&#x8BA1;&#x7B97;&#x70B9;&#x7684;&#x91CD;&#x5FC3;&#x5750;&#x6807;&#x901A;&#x5E38;&#x6D89;&#x53CA;&#x5230;&#x89E3;&#x4E00;&#x4E2A;&#x7EBF;&#x6027;&#x65B9;&#x7A0B;&#x7EC4;&#x3002;&#x5BF9;&#x4E8E;&#x4E09;&#x89D2;&#x5F62; ( ABC ) &#x4E2D;&#x7684;&#x70B9; ( P )&#xFF0C;&#x5176;&#x91CD;&#x5FC3;&#x5750;&#x6807; $(\\lambda_1, \\lambda_2, \\lambda_3)$ &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4EE5;&#x4E0B;&#x6B65;&#x9AA4;&#x8BA1;&#x7B97;&#x5F97;&#x51FA;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x786E;&#x5B9A;&#x4E09;&#x89D2;&#x5F62;&#x9876;&#x70B9;&#x7684;&#x5750;&#x6807;</strong>&#xFF1A;</p>
<ul>
<li>&#x5047;&#x8BBE;&#x4E09;&#x89D2;&#x5F62; ( ABC ) &#x7684;&#x9876;&#x70B9;&#x5750;&#x6807;&#x5206;&#x522B;&#x4E3A; ( A(x_1, y_1) )&#xFF0C;( B(x_2, y_2) )&#xFF0C;( C(x_3, y_3) )&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8BA1;&#x7B97;&#x9762;&#x79EF;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;&#x53C9;&#x4E58;&#x8BA1;&#x7B97;&#x4E09;&#x89D2;&#x5F62; ( ABC ) &#x7684;&#x9762;&#x79EF; ( S_{ABC} )&#x3002;</li>
<li>&#x8BA1;&#x7B97;&#x70B9; ( P ) &#x4E0E;&#x4E09;&#x89D2;&#x5F62;&#x9876;&#x70B9;&#x5F62;&#x6210;&#x7684;&#x5B50;&#x4E09;&#x89D2;&#x5F62;&#x7684;&#x9762;&#x79EF;&#xFF0C;&#x4F8B;&#x5982; ( S_{PBC} )&#xFF0C;( S_{PCA} )&#xFF0C;( S_{PAB} )&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5229;&#x7528;&#x9762;&#x79EF;&#x6BD4;&#x6C42;&#x89E3;&#x91CD;&#x5FC3;&#x5750;&#x6807;</strong>&#xFF1A;</p>
<ul>
<li>&#x91CD;&#x5FC3;&#x5750;&#x6807; ( $\\lambda_1$ )&#xFF0C;( $\\lambda_2$ )&#xFF0C;( $\\lambda_3$ ) &#x5206;&#x522B;&#x7B49;&#x4E8E;&#x70B9; ( P ) &#x5BF9;&#x5E94;&#x7684;&#x5B50;&#x4E09;&#x89D2;&#x5F62;&#x9762;&#x79EF;&#x4E0E;&#x4E09;&#x89D2;&#x5F62; ( ABC ) &#x9762;&#x79EF;&#x7684;&#x6BD4;&#x4F8B;&#x3002;&#x4F8B;&#x5982;&#xFF1A;
$$ \\lambda_1 = \\frac{S_{PBC}}{S_{ABC}} $$
$$ \\lambda_2 = \\frac{S_{PCA}}{S_{ABC}} $$
$$ \\lambda_3 = \\frac{S_{PAB}}{S_{ABC}} $$</li>
</ul>
</li>
<li>
<p><strong>&#x786E;&#x4FDD;&#x91CD;&#x5FC3;&#x5750;&#x6807;&#x4E4B;&#x548C;&#x4E3A;1</strong>&#xFF1A;</p>
<ul>
<li>&#x9A8C;&#x8BC1; ( $\\lambda_1 + \\lambda_2 + \\lambda_3$ = 1 )&#x3002;</li>
</ul>
</li>
</ol>
<p>Reference&#xFF1A;<a href="https://zhuanlan.zhihu.com/p/58199366">&#x91CD;&#x5FC3;&#x5750;&#x6807;</a></p>
`,B=[{level:1,title:"旋转矩阵的证明",children:[{level:2,title:"向量与角度的关系",children:[]}]},{level:1,title:"重心坐标计算公式",children:[]}];export{x as attributes,F as html,B as nestedHeaders};
