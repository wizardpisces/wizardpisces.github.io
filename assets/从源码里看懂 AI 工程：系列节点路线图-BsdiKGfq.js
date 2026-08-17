const x={},E=`<h1 id="&#x4ECE;&#x6E90;&#x7801;&#x91CC;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;"><a href="#&#x4ECE;&#x6E90;&#x7801;&#x91CC;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;"></a>&#x4ECE;&#x6E90;&#x7801;&#x91CC;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;</h1>
<blockquote>
<p><strong>&#x7CFB;&#x5217;&#x89D2;&#x8272;&#xFF1A;&#x77E5;&#x8BC6;&#x4E3B;&#x5E72;&#xB7;&#x8F6F;&#x4EF6;&#x5B9E;&#x73B0;&#x3002;</strong> &#x8D1F;&#x8D23;&#x4ECE;&#x6E90;&#x7801;&#x8BC1;&#x636E;&#x8FD8;&#x539F; AI &#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x4E0E;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7684;&#x5DE5;&#x7A0B;&#x53D6;&#x820D;&#xFF1B;&#x53EA;&#x6709;&#x6E90;&#x7801;&#x3001;&#x6D4B;&#x8BD5;&#x3001;Issue&#x3001;RFC &#x6216;&#x63D0;&#x4EA4;&#x5386;&#x53F2;&#x4E0D;&#x53EF;&#x66FF;&#x4EE3;&#x65F6;&#x624D;&#x4E3B;&#x5F52;&#x672C;&#x7CFB;&#x5217;&#x3002;&#x6574;&#x4F53;&#x5F52;&#x5C5E;&#x4E0E;&#x4EA4;&#x53C9;&#x89C4;&#x5219;&#x89C1;<a href="./LZ%20AI%20Note%EF%BC%9A%E5%86%85%E5%AE%B9%E7%B3%BB%E5%88%97%E6%80%BB%E5%9B%BE.md">&#x5185;&#x5BB9;&#x7CFB;&#x5217;&#x603B;&#x56FE;</a>&#x3002;</p>
</blockquote>
<h2 id="&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;"><a href="#&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;"></a>&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;</h2>
<p>&#x8FD9;&#x4E2A;&#x7CFB;&#x5217;&#x4E0D;&#x8D1F;&#x8D23;&#x544A;&#x8BC9;&#x8BFB;&#x8005;&#x201C;&#x672C;&#x5468;&#x53C8;&#x706B;&#x4E86;&#x4EC0;&#x4E48;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x501F;&#x4E00;&#x4EFD;&#x771F;&#x6B63;&#x7ECF;&#x53D7;&#x8FC7;&#x4F7F;&#x7528;&#x7684;&#x6E90;&#x7801;&#xFF0C;&#x8BB2;&#x900F;&#x4E00;&#x4E2A;&#x4F1A;&#x957F;&#x671F;&#x5B58;&#x5728;&#x7684; AI &#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x3002;&#x6E90;&#x7801;&#x53EF;&#x4EE5;&#x6765;&#x81EA;&#x8FD1;&#x671F;&#x6D3B;&#x8DC3;&#x7684;&#x65B0;&#x9879;&#x76EE;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x6765;&#x81EA; PyTorch&#x3001;TensorFlow&#x3001;JAX &#x7B49;&#x5386;&#x7ECF;&#x591A;&#x5E74;&#x6F14;&#x5316;&#x7684;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x3002;</p>
<pre><code class="language-text">&#x6E90;&#x7801;&#x91CC;&#x7684;&#x53CD;&#x5E38;&#x7ED3;&#x6784;&#x662F;&#x5165;&#x53E3;
&#x53CD;&#x5E38;&#x8BBE;&#x8BA1;&#x662F;&#x6293;&#x624B;
&#x771F;&#x5B9E;&#x5931;&#x8D25;&#x662F;&#x77DB;&#x76FE;
&#x673A;&#x5236;&#x4E0E;&#x4EE3;&#x4EF7;&#x624D;&#x662F;&#x6B63;&#x6587;
</code></pre>
<p>&#x6BCF;&#x7BC7;&#x53EA;&#x62C6;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x3002;&#x4ED3;&#x5E93;&#x53EF;&#x4EE5;&#x8FC7;&#x65F6;&#xFF0C;&#x6587;&#x7AE0;&#x7559;&#x4E0B;&#x7684;&#x5224;&#x65AD;&#x4E0D;&#x80FD;&#x8DDF;&#x7740;&#x8FC7;&#x65F6;&#x3002;</p>
<p>&#x9ED8;&#x8BA4;&#x4EE5;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x3001;&#x4E00;&#x4E2A;&#x5B50;&#x7CFB;&#x7EDF;&#x6216;&#x4E00;&#x6761;&#x5173;&#x952E;&#x6F14;&#x5316;&#x8DEF;&#x5F84;&#x4E3A;&#x4E3B;&#x8BC1;&#x636E;&#x3002;&#x82E5;&#x540C;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x5728;&#x51E0;&#x79CD;&#x6846;&#x67B6;&#x91CC;&#x5F62;&#x6210;&#x4E86;&#x4E0D;&#x540C;&#x53D6;&#x820D;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x505A;&#x6BD4;&#x8F83;&#x7BC7;&#xFF0C;&#x4F46;&#x5FC5;&#x987B;&#x56F4;&#x7ED5;&#x540C;&#x4E00;&#x4E2A;&#x5C1A;&#x672A;&#x95ED;&#x5408;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x4E0D;&#x80FD;&#x5199;&#x6210;&#x9879;&#x76EE;&#x76D8;&#x70B9;&#x3002;</p>
<p>&#x7CFB;&#x5217;&#x540D;&#x6682;&#x5B9A;&#x4E3A;&#xFF1A;<strong>&#x4ECE;&#x6E90;&#x7801;&#x91CC;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;</strong>&#x3002;</p>
<p>&#x56FA;&#x5B9A;&#x627F;&#x8BFA;&#xFF1A;<strong>&#x4E0D;&#x505A;&#x9879;&#x76EE;&#x8BF4;&#x660E;&#x4E66;&#xFF1B;&#x4ECE;&#x4E00;&#x4E2A;&#x5220;&#x6389;&#x5C31;&#x4F1A;&#x51FA;&#x4E8B;&#x7684;&#x8BBE;&#x8BA1;&#xFF0C;&#x8FD8;&#x539F;&#x5B83;&#x9762;&#x5BF9;&#x7684;&#x5931;&#x8D25;&#x3001;&#x91C7;&#x7528;&#x7684;&#x673A;&#x5236;&#x548C;&#x4ED8;&#x51FA;&#x7684;&#x4EE3;&#x4EF7;&#xFF0C;&#x6700;&#x540E;&#x7559;&#x4E0B;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x5206;&#x6790;&#x5176;&#x4ED6;&#x7CFB;&#x7EDF;&#x7684;&#x5DE5;&#x7A0B;&#x51B3;&#x7B56;&#x6A21;&#x578B;&#x3002;</strong></p>
<p>&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x8DB3;&#x4EE5;&#x5F62;&#x6210;&#x957F;&#x671F;&#x7CFB;&#x5217;&#x3002;&#x5B83;&#x4E0D;&#x4F9D;&#x9760;&#x67D0;&#x4E00;&#x6279;&#x70ED;&#x95E8;&#x4ED3;&#x5E93;&#x6301;&#x7EED;&#x6709;&#x6548;&#xFF0C;&#x800C;&#x4F9D;&#x9760;&#x4E00;&#x4E2A;&#x7A33;&#x5B9A;&#x7684;&#x8BC1;&#x636E;&#x65B9;&#x6CD5;&#xFF1A;&#x7528;&#x6E90;&#x7801;&#x3001;&#x6D4B;&#x8BD5;&#x3001;Issue&#x3001;&#x8BBE;&#x8BA1;&#x6587;&#x6863;&#x3001;RFC &#x548C;&#x63D0;&#x4EA4;&#x5386;&#x53F2;&#xFF0C;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x201C;&#x5220;&#x6389;&#x5C31;&#x4F1A;&#x51FA;&#x4E8B;&#x201D;&#x7684;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x8BFB;&#x8005;&#x6536;&#x76CA;&#xFF1A;</p>
<ul>
<li>&#x666E;&#x901A;&#x8BFB;&#x8005;&#x4E0D;&#x9700;&#x8981;&#x8FFD;&#x8E2A;&#x6240;&#x6709;&#x9879;&#x76EE;&#xFF0C;&#x53EA;&#x9700;&#x501F;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x770B;&#x89C1; AI &#x80FD;&#x529B;&#x600E;&#x6837;&#x88AB;&#x6846;&#x67B6;&#x6258;&#x4F4F;&#xFF0C;&#x53C8;&#x4F1A;&#x5728;&#x8D70;&#x5411;&#x771F;&#x5B9E;&#x7CFB;&#x7EDF;&#x65F6;&#x649E;&#x4E0A;&#x4EC0;&#x4E48;&#x5931;&#x8D25;&#x3002;</li>
<li>&#x6280;&#x672F;&#x8BFB;&#x8005;&#x80FD;&#x4ECE;&#x5B9E;&#x73B0;&#x3001;&#x63A5;&#x53E3;&#x3001;&#x72B6;&#x6001;&#x548C;&#x6D4B;&#x8BD5;&#x4E2D;&#x8FD8;&#x539F;&#x8BBE;&#x8BA1;&#x53D6;&#x820D;&#xFF0C;&#x800C;&#x4E0D;&#x505C;&#x5728; README &#x4E0E;&#x67B6;&#x6784;&#x56FE;&#x3002;</li>
</ul>
<h2 id="&#x7CFB;&#x5217;&#x8FB9;&#x754C;"><a href="#&#x7CFB;&#x5217;&#x8FB9;&#x754C;"></a>&#x7CFB;&#x5217;&#x8FB9;&#x754C;</h2>
<ul>
<li>Agent &#x7CFB;&#x5217;&#x8D1F;&#x8D23;&#x5EFA;&#x7ACB; Prompt&#x3001;Workflow&#x3001;Tool&#x3001;State&#x3001;Memory &#x4E0E;&#x6743;&#x9650;&#x7684;&#x9012;&#x8FDB;&#x4E3B;&#x7EBF;&#xFF1B;&#x672C;&#x7CFB;&#x5217;&#x53EA;&#x5728;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x63D0;&#x4F9B;&#x4E86;&#x8DB3;&#x591F;&#x6E90;&#x7801;&#x8BC1;&#x636E;&#x548C;&#x72EC;&#x7279;&#x53D6;&#x820D;&#x65F6;&#x6210;&#x7BC7;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x67B6;&#x6784;&#x7CFB;&#x5217;&#x8D1F;&#x8D23;&#x89E3;&#x91CA;&#x6B8B;&#x5DEE;&#x3001;Attention&#x3001;MoE&#x3001;LoRA &#x7B49;&#x7A33;&#x5B9A;&#x673A;&#x5236;&#xFF1B;&#x672C;&#x7CFB;&#x5217;&#x4E0D;&#x56E0;&#x4E3A;&#x67D0;&#x4E2A;&#x4ED3;&#x5E93;&#x5B9E;&#x73B0;&#x4E86;&#x5B83;&#x4EEC;&#x5C31;&#x518D;&#x8BB2;&#x4E00;&#x904D;&#x3002;</li>
<li>&#x6280;&#x672F;&#x5386;&#x53F2;&#x7CFB;&#x5217;&#x8D1F;&#x8D23;&#x8FD8;&#x539F;&#x65F6;&#x4EE3;&#x6761;&#x4EF6;&#x4E0E;&#x4EA7;&#x54C1;&#x8DEF;&#x5F84;&#xFF1B;&#x672C;&#x7CFB;&#x5217;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x63D0;&#x4EA4;&#x5386;&#x53F2;&#xFF0C;&#x4F46;&#x6700;&#x7EC8;&#x5FC5;&#x987B;&#x843D;&#x56DE;&#x4E00;&#x4E2A;&#x53EF;&#x5728;&#x6E90;&#x7801;&#x4E2D;&#x9A8C;&#x8BC1;&#x7684;&#x8F6F;&#x4EF6;&#x7ED3;&#x6784;&#x3002;</li>
<li>&#x4E0D;&#x5199;&#x5B89;&#x88C5;&#x6559;&#x7A0B;&#x3001;&#x529F;&#x80FD;&#x5217;&#x8868;&#x3001;&#x5468;&#x62A5;&#x3001;Star &#x6392;&#x884C;&#x548C;&#x201C;&#x503C;&#x5F97;&#x5173;&#x6CE8;&#x7684;&#x5341;&#x4E2A;&#x9879;&#x76EE;&#x201D;&#x3002;</li>
<li>&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x82E5;&#x5B8C;&#x5168;&#x4E0D;&#x9700;&#x8981;&#x6E90;&#x7801;&#x8BC1;&#x636E;&#x5C31;&#x80FD;&#x8BB2;&#x6E05;&#xFF0C;&#x4F18;&#x5148;&#x56DE;&#x5230;&#x5BF9;&#x5E94;&#x4E3B;&#x7EBF;&#xFF0C;&#x4E0D;&#x4E3A;&#x4E86;&#x7559;&#x5728;&#x672C;&#x7CFB;&#x5217;&#x786C;&#x6302;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x3002;</li>
</ul>
<h2 id="&#x4E24;&#x6761;&#x95EE;&#x9898;&#x4E3B;&#x7EBF;"><a href="#&#x4E24;&#x6761;&#x95EE;&#x9898;&#x4E3B;&#x7EBF;"></a>&#x4E24;&#x6761;&#x95EE;&#x9898;&#x4E3B;&#x7EBF;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x6761;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x600E;&#x6837;&#x628A; AI &#x63A5;&#x8FDB;&#x771F;&#x5B9E;&#x4E16;&#x754C;"><a href="#&#x7B2C;&#x4E00;&#x6761;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x600E;&#x6837;&#x628A; AI &#x63A5;&#x8FDB;&#x771F;&#x5B9E;&#x4E16;&#x754C;"></a>&#x7B2C;&#x4E00;&#x6761;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x600E;&#x6837;&#x628A; AI &#x63A5;&#x8FDB;&#x771F;&#x5B9E;&#x4E16;&#x754C;</h3>
<p>&#x4ED3;&#x5E93;&#x4F1A;&#x53D8;&#xFF0C;&#x4F46; AI &#x5DE5;&#x7A0B;&#x4ECE;&#x6A21;&#x578B;&#x8D70;&#x5411;&#x73B0;&#x5B9E;&#x7CFB;&#x7EDF;&#x65F6;&#xFF0C;&#x4F1A;&#x53CD;&#x590D;&#x7ECF;&#x8FC7;&#x8FD9;&#x6761;&#x8DEF;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x80FD;&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x52A8;&#x4F5C;
&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x4E0D;&#x7B49;&#x4E8E;&#x80FD;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#xFF1F;
        &#x2193;
&#x5DE5;&#x5177;&#x53EA;&#x89E3;&#x51B3;&#x4E00;&#x6B21;&#x8C03;&#x7528;
&#x6587;&#x4EF6;&#x3001;&#x73AF;&#x5883;&#x4E0E;&#x6267;&#x884C;&#x5668;&#x600E;&#x6837;&#x5728;&#x591A;&#x6B21;&#x52A8;&#x4F5C;&#x4E4B;&#x95F4;&#x4FDD;&#x6301;&#x8FDE;&#x7EED;&#xFF1F;
        &#x2193;
&#x6267;&#x884C;&#x5668;&#x53EF;&#x4EE5;&#x6D88;&#x5931;
&#x76EE;&#x6807;&#x3001;&#x8BC1;&#x636E;&#x3001;&#x9884;&#x7B97;&#x4E0E;&#x4EBA;&#x7C7B;&#x51B3;&#x7B56;&#x5E94;&#x8BE5;&#x5B58;&#x5728;&#x54EA;&#x91CC;&#xFF1F;
        &#x2193;
&#x5916;&#x90E8;&#x63A7;&#x5236;&#x9762;&#x80FD;&#x8BA9;&#x4EFB;&#x52A1;&#x7EE7;&#x7EED;
&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x7F13;&#x5B58;&#x4E0E;&#x8FD0;&#x884C;&#x6210;&#x672C;&#x53C8;&#x600E;&#x6837;&#x53CD;&#x8FC7;&#x6765;&#x5851;&#x9020;&#x67B6;&#x6784;&#xFF1F;
        &#x2193;
&#x5BF9;&#x8BDD;&#x5DF2;&#x7ECF;&#x5BB9;&#x7EB3;&#x4E0D;&#x4E0B;&#x957F;&#x671F;&#x7ECF;&#x9A8C;
&#x8BB0;&#x5FC6;&#x5982;&#x4F55;&#x53D8;&#x6210;&#x53EF;&#x6CBB;&#x7406;&#x3001;&#x53EF;&#x66F4;&#x65B0;&#x7684;&#x7EC4;&#x7EC7;&#x8D44;&#x4EA7;&#xFF1F;
        &#x2193;
&#x8BB0;&#x4F4F;&#x8D44;&#x6599;&#x8FD8;&#x4E0D;&#x591F;
&#x68C0;&#x7D22;&#x7ED3;&#x6784;&#x600E;&#x6837;&#x8D34;&#x5408;&#x4EE3;&#x7801;&#x3001;&#x56FE;&#x548C;&#x4E1A;&#x52A1;&#x4E4B;&#x95F4;&#x7684;&#x771F;&#x5B9E;&#x5173;&#x7CFB;&#xFF1F;
        &#x2193;
&#x7CFB;&#x7EDF;&#x80FD;&#x529B;&#x5DF2;&#x7ECF;&#x63A5;&#x5165;&#x771F;&#x5B9E;&#x8D26;&#x53F7;
&#x8C01;&#x7684;&#x8EAB;&#x4EFD;&#x3001;&#x54EA;&#x4EFD;&#x51ED;&#x8BC1;&#x3001;&#x4EC0;&#x4E48;&#x6388;&#x6743;&#x548C;&#x591A;&#x5C11;&#x526F;&#x4F5C;&#x7528;&#x7531;&#x8C01;&#x63A7;&#x5236;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x662F;&#x957F;&#x671F;&#x6BCD;&#x9898;&#xFF0C;&#x4E0D;&#x662F;&#x5BF9;&#x67D0;&#x4E00;&#x6279;&#x4ED3;&#x5E93;&#x7684;&#x4E8B;&#x540E;&#x6392;&#x5E8F;&#x3002;&#x65B0;&#x4ED3;&#x5E93;&#x53EA;&#x6709;&#x63D0;&#x4F9B;&#x4E86;&#x6BD4;&#x5DF2;&#x6709;&#x6848;&#x4F8B;&#x66F4;&#x5F3A;&#x7684;&#x8BC1;&#x636E;&#xFF0C;&#x6216;&#x66B4;&#x9732;&#x4E86;&#x65B0;&#x7684;&#x957F;&#x671F;&#x5931;&#x8D25;&#xFF0C;&#x624D;&#x4F1A;&#x6539;&#x53D8;&#x8FD9;&#x5F20;&#x56FE;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x6761;&#xFF1A;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x4E3A;&#x4EC0;&#x4E48;&#x957F;&#x6210;&#x4ECA;&#x5929;&#x8FD9;&#x6837;"><a href="#&#x7B2C;&#x4E8C;&#x6761;&#xFF1A;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x4E3A;&#x4EC0;&#x4E48;&#x957F;&#x6210;&#x4ECA;&#x5929;&#x8FD9;&#x6837;"></a>&#x7B2C;&#x4E8C;&#x6761;&#xFF1A;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x4E3A;&#x4EC0;&#x4E48;&#x957F;&#x6210;&#x4ECA;&#x5929;&#x8FD9;&#x6837;</h3>
<pre><code class="language-text">&#x6570;&#x7EC4;&#x5DF2;&#x7ECF;&#x80FD;&#x8BA1;&#x7B97;
&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x62BD;&#x8C61;&#x51FA; Tensor&#x3001;Storage&#x3001;Device &#x4E0E; DType&#xFF1F;
        &#x2193;
&#x6A21;&#x578B;&#x5199;&#x6210;&#x666E;&#x901A;&#x7A0B;&#x5E8F;
&#x6846;&#x67B6;&#x600E;&#x6837;&#x8BB0;&#x5F55;&#x4F9D;&#x8D56;&#x5E76;&#x81EA;&#x52A8;&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#xFF1F;
        &#x2193;
&#x540C;&#x4E00;&#x4E2A;&#x7B97;&#x5B50;&#x8981;&#x9762;&#x5BF9; CPU&#x3001;GPU&#x3001;Autograd &#x4E0E;&#x6269;&#x5C55;&#x540E;&#x7AEF;
&#x8C01;&#x8D1F;&#x8D23;&#x627E;&#x5230;&#x771F;&#x6B63;&#x5E94;&#x8BE5;&#x6267;&#x884C;&#x7684;&#x5B9E;&#x73B0;&#xFF1F;
        &#x2193;
Eager &#x6A21;&#x5F0F;&#x5BB9;&#x6613;&#x7406;&#x89E3;&#x548C;&#x8C03;&#x8BD5;
&#x4E3A;&#x4EC0;&#x4E48;&#x6027;&#x80FD;&#x4F18;&#x5316;&#x53C8;&#x4E0D;&#x65AD;&#x8981;&#x6C42;&#x91CD;&#x65B0;&#x5F97;&#x5230;&#x4E00;&#x5F20;&#x56FE;&#xFF1F;
        &#x2193;
Python &#x63A7;&#x5236;&#x6D41;&#x53EF;&#x4EE5;&#x968F;&#x65F6;&#x53D8;&#x5316;
&#x7F16;&#x8BD1;&#x5668;&#x600E;&#x6837;&#x7528; Guard&#x3001;Graph Break &#x4E0E;&#x91CD;&#x7F16;&#x8BD1;&#x5B88;&#x4F4F;&#x8BED;&#x4E49;&#xFF1F;
        &#x2193;
&#x5355;&#x5361;&#x7A0B;&#x5E8F;&#x5DF2;&#x7ECF;&#x6B63;&#x786E;
&#x5206;&#x5E03;&#x5F0F;&#x8BAD;&#x7EC3;&#x600E;&#x6837;&#x91CD;&#x65B0;&#x5B89;&#x6392;&#x72B6;&#x6001;&#x3001;&#x8BA1;&#x7B97;&#x4E0E;&#x901A;&#x4FE1;&#xFF1F;
        &#x2193;
&#x6A21;&#x578B;&#x5728;&#x539F;&#x6846;&#x67B6;&#x4E2D;&#x53EF;&#x4EE5;&#x8FD0;&#x884C;
&#x4E3A;&#x4EC0;&#x4E48;&#x5BFC;&#x51FA;&#x3001;&#x90E8;&#x7F72;&#x548C;&#x8DE8;&#x540E;&#x7AEF;&#x6267;&#x884C;&#x4ECD;&#x7136;&#x56F0;&#x96BE;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x6761;&#x7EBF;&#x4E0D;&#x662F;&#x6309; TensorFlow&#x3001;PyTorch&#x3001;JAX &#x9010;&#x4E2A;&#x4ECB;&#x7ECD;&#x4EA7;&#x54C1;&#xFF0C;&#x800C;&#x662F;&#x8FFD;&#x8E2A;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6846;&#x67B6;&#x53CD;&#x590D;&#x9762;&#x5BF9;&#x7684;&#x51E0;&#x7EC4;&#x77DB;&#x76FE;&#xFF1A;&#x6613;&#x7528;&#x4E0E;&#x4F18;&#x5316;&#x3001;&#x52A8;&#x6001;&#x4E0E;&#x9759;&#x6001;&#x3001;&#x62BD;&#x8C61;&#x4E0E;&#x786C;&#x4EF6;&#x3001;&#x53EF;&#x53D8;&#x7A0B;&#x5E8F;&#x4E0E;&#x53EF;&#x79FB;&#x690D;&#x8868;&#x793A;&#x3002;&#x6210;&#x719F;&#x6846;&#x67B6;&#x7684;&#x4EF7;&#x503C;&#x6B63;&#x5728;&#x4E8E;&#xFF0C;&#x8FD9;&#x4E9B;&#x53D6;&#x820D;&#x7ECF;&#x8FC7;&#x4E86;&#x591A;&#x5E74;&#x771F;&#x5B9E;&#x8D1F;&#x8F7D;&#x3001;&#x517C;&#x5BB9;&#x6027;&#x548C;&#x751F;&#x6001;&#x7EA6;&#x675F;&#x7684;&#x68C0;&#x9A8C;&#x3002;</p>
<p>&#x4F46;&#x201C;&#x6F14;&#x5316;&#x6210;&#x4ECA;&#x5929;&#x8FD9;&#x6837;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x4ECA;&#x5929;&#x8FD9;&#x6837;&#x5C31;&#x662F;&#x6700;&#x4F18;&#x89E3;&#x201D;&#x3002;&#x6BCF;&#x7BC7;&#x90FD;&#x8981;&#x533A;&#x5206;&#x56DB;&#x4EF6;&#x4E8B;&#xFF1A;&#x5B83;&#x6700;&#x521D;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x5931;&#x8D25;&#x3001;&#x5F53;&#x65F6;&#x53D7;&#x4EC0;&#x4E48;&#x6761;&#x4EF6;&#x9650;&#x5236;&#x3001;&#x540E;&#x6765;&#x4E3A;&#x4EC0;&#x4E48;&#x96BE;&#x4EE5;&#x66FF;&#x6362;&#xFF0C;&#x4EE5;&#x53CA;&#x4ECA;&#x5929;&#x7559;&#x4E0B;&#x7684;&#x662F;&#x7A33;&#x5B9A;&#x62BD;&#x8C61;&#x8FD8;&#x662F;&#x5386;&#x53F2;&#x503A;&#x52A1;&#x3002;&#x6E90;&#x7801;&#x8003;&#x53E4;&#x8D1F;&#x8D23;&#x89E3;&#x91CA;&#x8BBE;&#x8BA1;&#xFF0C;&#x4E0D;&#x8D1F;&#x8D23;&#x66FF;&#x8BBE;&#x8BA1;&#x8FA9;&#x62A4;&#x3002;</p>
<h2 id="&#x4EC0;&#x4E48;&#x6E90;&#x7801;&#x5BF9;&#x8C61;&#x503C;&#x5F97;&#x5199;"><a href="#&#x4EC0;&#x4E48;&#x6E90;&#x7801;&#x5BF9;&#x8C61;&#x503C;&#x5F97;&#x5199;"></a>&#x4EC0;&#x4E48;&#x6E90;&#x7801;&#x5BF9;&#x8C61;&#x503C;&#x5F97;&#x5199;</h2>
<p>&#x65B0;&#x9879;&#x76EE;&#x53EF;&#x4EE5;&#x4ECE; Trending&#x3001;&#x77ED;&#x671F; Star &#x589E;&#x957F;&#x3001;&#x5BC6;&#x96C6;&#x53D1;&#x5E03;&#x548C;&#x793E;&#x533A;&#x8BA8;&#x8BBA;&#x8FDB;&#x5165;&#x5019;&#x9009;&#x6C60;&#xFF1B;&#x6210;&#x719F;&#x6846;&#x67B6;&#x5219;&#x4ECE;&#x4E00;&#x4E2A;&#x53CD;&#x590D;&#x51FA;&#x73B0;&#x7684;&#x5F02;&#x5E38;&#x884C;&#x4E3A;&#x3001;&#x590D;&#x6742;&#x62BD;&#x8C61;&#x6216;&#x5386;&#x53F2;&#x8F6C;&#x5411;&#x8FDB;&#x5165;&#x3002;&#x6B63;&#x5F0F;&#x5199;&#x4E4B;&#x524D;&#xFF0C;&#x90FD;&#x8981;&#x4F9D;&#x6B21;&#x901A;&#x8FC7;&#x4E0B;&#x9762;&#x51E0;&#x5173;&#xFF1A;</p>
<ol>
<li><strong>&#x6709;&#x95EE;&#x9898;</strong>&#xFF1A;&#x80FD;&#x6307;&#x51FA;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x800C;&#x53CD;&#x5E38;&#x7684;&#x8BBE;&#x8BA1;&#xFF0C;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x529F;&#x80FD;&#x591A;&#x6216;&#x6570;&#x636E;&#x6F02;&#x4EAE;&#x3002;</li>
<li><strong>&#x6709;&#x5931;&#x8D25;</strong>&#xFF1A;&#x80FD;&#x627E;&#x5230;&#x8FD9;&#x4E2A;&#x8BBE;&#x8BA1;&#x8BD5;&#x56FE;&#x907F;&#x514D;&#x7684;&#x771F;&#x5B9E;&#x5931;&#x8D25;&#x6A21;&#x5F0F;&#x3002;</li>
<li><strong>&#x6709;&#x8BC1;&#x636E;</strong>&#xFF1A;README &#x4E4B;&#x5916;&#x8FD8;&#x6709;&#x6E90;&#x7801;&#x3001;&#x8BBE;&#x8BA1;&#x6587;&#x6863;&#x3001;Issue&#x3001;&#x63D0;&#x4EA4;&#x8BB0;&#x5F55;&#x3001;&#x6D4B;&#x8BD5;&#x6216;&#x53EF;&#x590D;&#x73B0;&#x5B9E;&#x9A8C;&#x3002;</li>
<li><strong>&#x6709;&#x53D6;&#x820D;</strong>&#xFF1A;&#x80FD;&#x591F;&#x8BF4;&#x660E;&#x5B83;&#x83B7;&#x5F97;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4E5F;&#x727A;&#x7272;&#x4E86;&#x4EC0;&#x4E48;&#x3002;</li>
<li><strong>&#x6709;&#x4F59;&#x91CF;</strong>&#xFF1A;&#x7528;&#x4E09;&#x53E5;&#x8BDD;&#x4ECB;&#x7ECD;&#x5B8C;&#x9879;&#x76EE;&#x540E;&#xFF0C;&#x4ECD;&#x6709;&#x4E00;&#x4E2A;&#x503C;&#x5F97;&#x5199;&#x6210;&#x957F;&#x6587;&#x7684;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>&#x6709;&#x65B0;&#x610F;</strong>&#xFF1A;&#x4E0E;&#x5185;&#x5BB9;&#x5E93;&#x91CC;&#x7684;&#x65E7;&#x6587;&#x76F8;&#x6BD4;&#xFF0C;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#x3001;&#x673A;&#x5236;&#x6216;&#x6700;&#x7EC8;&#x5224;&#x65AD;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x9879;&#x660E;&#x663E;&#x4E0D;&#x540C;&#x3002;</li>
</ol>
<p>&#x4EE5;&#x4E0B;&#x4ED3;&#x5E93;&#x539F;&#x5219;&#x4E0A;&#x4E0D;&#x5199;&#xFF1A;&#x5957;&#x58F3;&#x9879;&#x76EE;&#x3001;Prompt &#x5408;&#x96C6;&#x3001;Awesome List&#x3001;&#x53EA;&#x6709;&#x8425;&#x9500;&#x53E3;&#x53F7;&#x7684;&#x4ED3;&#x5E93;&#x3001;&#x65E0;&#x6CD5;&#x590D;&#x73B0;&#x7684;&#x699C;&#x5355;&#x9879;&#x76EE;&#xFF0C;&#x4EE5;&#x53CA;&#x53EA;&#x6709; Star &#x4E0A;&#x6DA8;&#x5374;&#x6CA1;&#x6709;&#x72EC;&#x7279;&#x8BBE;&#x8BA1;&#x7684;&#x9879;&#x76EE;&#x3002;</p>
<p>&#x6210;&#x719F;&#x6846;&#x67B6;&#x4E5F;&#x4E0D;&#x56E0;&#x201C;&#x7ECF;&#x5178;&#x201D;&#x81EA;&#x52A8;&#x503C;&#x5F97;&#x5199;&#x3002;&#x53EA;&#x4F1A;&#x4ECB;&#x7ECD;&#x76EE;&#x5F55;&#x7ED3;&#x6784;&#x3001;&#x516C;&#x5171; API &#x6216;&#x7248;&#x672C;&#x5386;&#x53F2;&#x7684;&#x9898;&#x76EE;&#x540C;&#x6837;&#x9000;&#x51FA;&#xFF1B;&#x4E00;&#x4E2A;&#x6846;&#x67B6;&#x53EF;&#x4EE5;&#x53CD;&#x590D;&#x51FA;&#x73B0;&#xFF0C;&#x4F46;&#x6BCF;&#x7BC7;&#x53EA;&#x80FD;&#x62C6;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x95EE;&#x9898;&#x3002;&#x4E0D;&#x80FD;&#x7528;&#x201C;&#x5B83;&#x5B58;&#x5728;&#x5F88;&#x591A;&#x5E74;&#x201D;&#x8BC1;&#x660E;&#x8BBE;&#x8BA1;&#x6B63;&#x786E;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x628A;&#x517C;&#x5BB9;&#x6210;&#x672C;&#x548C;&#x6280;&#x672F;&#x503A;&#x5305;&#x88C5;&#x6210;&#x6DF1;&#x8C0B;&#x8FDC;&#x8651;&#x3002;</p>
<h2 id="&#x5355;&#x7BC7;&#x7ED3;&#x6784;"><a href="#&#x5355;&#x7BC7;&#x7ED3;&#x6784;"></a>&#x5355;&#x7BC7;&#x7ED3;&#x6784;</h2>
<p>&#x6BCF;&#x7BC7;&#x90FD;&#x4ECE;&#x6E90;&#x7801;&#x548C;&#x6587;&#x6863;&#x51FA;&#x53D1;&#xFF0C;&#x4F46;&#x6B63;&#x6587;&#x4E0D;&#x5FC5;&#x6309;&#x6E90;&#x7801;&#x76EE;&#x5F55;&#x8BB2;&#xFF1A;</p>
<pre><code class="language-text">&#x4E00;&#x4E2A;&#x770B;&#x8D77;&#x6765;&#x591A;&#x4F59;&#x7684;&#x8BBE;&#x8BA1;
        &#x2193;
&#x5220;&#x6389;&#x5B83;&#x4F1A;&#x53D1;&#x751F;&#x4EC0;&#x4E48;
        &#x2193;
&#x6E90;&#x7801;&#x5982;&#x4F55;&#x62C6;&#x5206;&#x6570;&#x636E;&#x3001;&#x72B6;&#x6001;&#x3001;&#x63A7;&#x5236;&#x4E0E;&#x6267;&#x884C;
        &#x2193;
&#x8FD9;&#x79CD;&#x65B9;&#x6848;&#x4ED8;&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#x4EE3;&#x4EF7;
        &#x2193;
&#x5B83;&#x6539;&#x53D8;&#x4E86;&#x6211;&#x4EEC;&#x5BF9;&#x54EA;&#x7C7B; AI &#x95EE;&#x9898;&#x7684;&#x7406;&#x89E3;
</code></pre>
<p>&#x6807;&#x9898;&#x4F18;&#x5148;&#x5199;&#x95EE;&#x9898;&#xFF0C;&#x4E0D;&#x628A;&#x4ED3;&#x5E93;&#x540D;&#x653E;&#x5728;&#x6700;&#x524D;&#x9762;&#x3002;&#x5F00;&#x5934;&#x53EF;&#x4EE5;&#x4EA4;&#x4EE3;&#x5B83;&#x4E3A;&#x4F55;&#x6700;&#x8FD1;&#x53D7;&#x5173;&#x6CE8;&#xFF0C;&#x4F46;&#x70ED;&#x5EA6;&#x53EA;&#x5360;&#x5F88;&#x5C0F;&#x7BC7;&#x5E45;&#x3002;</p>
<p>&#x8FD9;&#x5957;&#x7ED3;&#x6784;&#x4E5F;&#x6709;&#x660E;&#x786E;&#x7684;&#x53CC;&#x5C42;&#x4EF7;&#x503C;&#xFF1A;&#x666E;&#x901A;&#x8BFB;&#x8005;&#x4ECE;&#x201C;&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x591A;&#x8FD9;&#x4E00;&#x5C42;&#x201D;&#x8FDB;&#x5165;&#xFF0C;&#x6280;&#x672F;&#x8BFB;&#x8005;&#x4ECE;&#x6E90;&#x7801;&#x8BC1;&#x636E;&#x4E2D;&#x5E26;&#x8D70;&#x4E00;&#x4E2A;&#x5DE5;&#x7A0B;&#x6A21;&#x578B;&#x3002;&#x4ED3;&#x5E93;&#x53EA;&#x662F;&#x8BC1;&#x636E;&#x8F7D;&#x4F53;&#xFF0C;&#x4E0D;&#x662F;&#x77E5;&#x8BC6;&#x7EC8;&#x70B9;&#x3002;</p>
<p>&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x5019;&#x9009;&#x5BF9;&#x5E94;&#x7684;&#x8BA4;&#x77E5;&#x843D;&#x70B9;&#x662F;&#xFF1A;</p>
<ul>
<li>Cloudflare Computer&#xFF1A;<code>&#x6301;&#x4E45;&#x72B6;&#x6001; / &#x7A33;&#x5B9A;&#x63A5;&#x53E3; / &#x53EF;&#x66FF;&#x6362;&#x6267;&#x884C;&#x5668;</code>&#x3002;</li>
<li>LoopX&#xFF1A;<code>Objective / Todo / Evidence / Gate / Handoff</code> &#x7EC4;&#x6210;&#x7684;&#x5916;&#x90E8;&#x63A7;&#x5236;&#x9762;&#x3002;</li>
<li>DeepSeek Harness&#xFF1A;<code>append-only Session Event Log &#x2192; Context / Trace / State &#x6295;&#x5F71; &#x2192; Resume / Fork / Replay</code>&#x3002;</li>
<li>DeepSeek-Reasonix&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x540C;&#x65F6;&#x5177;&#x6709;&#x8BED;&#x4E49;&#x751F;&#x547D;&#x5468;&#x671F;&#x548C;&#x7F13;&#x5B58;&#x3001;&#x5EF6;&#x8FDF;&#x3001;&#x6210;&#x672C;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
<li>TencentDB Agent Memory&#xFF1A;&#x4ECE;&#x4E2A;&#x4EBA;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#x5230;&#x53EF;&#x5199;&#x5165;&#x3001;&#x66F4;&#x65B0;&#x3001;&#x9057;&#x5FD8;&#x548C;&#x5171;&#x4EAB;&#x7684;&#x7EC4;&#x7EC7;&#x8BB0;&#x5FC6;&#x3002;</li>
<li>Code-Graph-RAG&#xFF1A;&#x68C0;&#x7D22;&#x7ED3;&#x6784;&#x5FC5;&#x987B;&#x5339;&#x914D;&#x95EE;&#x9898;&#x7ED3;&#x6784;&#xFF0C;&#x4EE3;&#x7801;&#x4F9D;&#x8D56;&#x95EE;&#x9898;&#x4E0D;&#x80FD;&#x53EA;&#x9760;&#x6587;&#x672C;&#x76F8;&#x4F3C;&#x5EA6;&#x3002;</li>
<li>OpenConnector&#xFF1A;<code>Tool Schema / Identity / Credential / Scope / Policy / Audit</code> &#x6784;&#x6210;&#x52A8;&#x6001;&#x59D4;&#x6258;&#x94FE;&#x3002;</li>
<li>&#x9875;&#x9762;&#x8FD8;&#x539F;&#x6BD4;&#x8F83;&#x7BC7;&#xFF1A;<code>Pixel &#x2192; Component &#x2192; Schema &#x2192; Render &#x2192; Visual Diff</code> &#x7684;&#x95ED;&#x73AF;&#x3002;</li>
</ul>
<p>&#x6B63;&#x5F0F;&#x5165;&#x9009;&#x65F6;&#x5FC5;&#x987B;&#x5199;&#x51FA;&#x8FD9;&#x6837;&#x7684;&#x8BA4;&#x77E5;&#x843D;&#x70B9;&#x3002;&#x82E5;&#x5220;&#x6389;&#x4ED3;&#x5E93;&#x540D;&#x4EE5;&#x540E;&#x53EA;&#x5269;&#x201C;&#x8FD9;&#x4E2A;&#x9879;&#x76EE;&#x505A;&#x5F97;&#x4E0D;&#x9519;&#x201D;&#xFF0C;&#x8BF4;&#x660E;&#x6587;&#x7AE0;&#x4ECD;&#x662F;&#x9879;&#x76EE;&#x4ECB;&#x7ECD;&#xFF1B;&#x82E5;&#x5DE5;&#x7A0B;&#x6A21;&#x578B;&#x5B8C;&#x5168;&#x4E0D;&#x9700;&#x8981;&#x6E90;&#x7801;&#x3001;&#x6D4B;&#x8BD5;&#x6216; Issue &#x624D;&#x80FD;&#x6210;&#x7ACB;&#xFF0C;&#x5219;&#x5E94;&#x8FC1;&#x79FB;&#x56DE;&#x5BF9;&#x5E94;&#x4E3B;&#x7EBF;&#x3002;</p>
<h2 id="&#x7B2C;&#x4E00;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7684;&#x5DE5;&#x7A0B;&#x73B0;&#x573A;"><a href="#&#x7B2C;&#x4E00;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7684;&#x5DE5;&#x7A0B;&#x73B0;&#x573A;"></a>&#x7B2C;&#x4E00;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7684;&#x5DE5;&#x7A0B;&#x73B0;&#x573A;</h2>
<p>&#x4E0B;&#x9762;&#x662F; 2026 &#x5E74; 8 &#x6708;&#x7684;&#x5019;&#x9009;&#x6C60;&#xFF0C;&#x4E0D;&#x662F;&#x5FC5;&#x987B;&#x4F9D;&#x6B21;&#x53D1;&#x5E03;&#x7684;&#x8BFE;&#x7A0B;&#x76EE;&#x5F55;&#x3002;&#x70ED;&#x5EA6;&#x4F1A;&#x53D8;&#xFF0C;&#x771F;&#x6B63;&#x7684;&#x95EE;&#x9898;&#x786E;&#x5B9A;&#x540E;&#x624D;&#x8FDB;&#x5165;&#x5199;&#x4F5C;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x8282;&#x70B9;</th>
<th>&#x6682;&#x5B9A;&#x9898;&#x76EE;</th>
<th>&#x5177;&#x4F53;&#x4ED3;&#x5E93;&#x4E0E;&#x53CD;&#x5E38;&#x8BBE;&#x8BA1;</th>
<th>&#x771F;&#x6B63;&#x8981;&#x8BB2;&#x900F;&#x7684;&#x95EE;&#x9898;</th>
<th>&#x4E0E;&#x65E7;&#x6587;&#x7684;&#x5173;&#x7CFB;</th>
<th>&#x4E3B;&#x7EF4;&#x5EA6;</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Agent &#x5DF2;&#x7ECF;&#x4F1A;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x7ED9;&#x5B83;&#x4E00;&#x53F0;&#x7535;&#x8111;&#xFF1F;</td>
<td><a href="https://github.com/cloudflare/computer">Cloudflare Computer</a>&#xFF1A;&#x628A; SQLite &#x4E2D;&#x7684;&#x6301;&#x4E45;&#x6587;&#x4EF6;&#x72B6;&#x6001;&#x4E0E; Container&#x3001;Isolate Shell&#x3001;Isolate JavaScript &#x4E09;&#x79CD;&#x6267;&#x884C;&#x540E;&#x7AEF;&#x5206;&#x5F00;</td>
<td>&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x89E3;&#x51B3;&#x4E00;&#x6B21;&#x52A8;&#x4F5C;&#xFF0C;&#x8BA1;&#x7B97;&#x73AF;&#x5883;&#x8FD8;&#x8981;&#x89E3;&#x51B3;&#x8DE8;&#x52A8;&#x4F5C;&#x72B6;&#x6001;&#x3001;&#x6587;&#x4EF6;&#x8BED;&#x4E49;&#x548C;&#x53EF;&#x66FF;&#x6362;&#x6267;&#x884C;&#xFF1B;&#x201C;&#x7535;&#x8111;&#x201D;&#x662F;&#x4E00;&#x5C42;&#x7A33;&#x5B9A;&#x63A5;&#x53E3;&#xFF0C;&#x4E0D;&#x7B49;&#x4E8E;&#x4E00;&#x53F0;&#x865A;&#x62DF;&#x673A;</td>
<td>&#x63A5;&#x7EED; Tool Calling&#xFF1B;&#x4E0E; Bubblewrap &#x65E7;&#x6587;&#x4EA4;&#x53C9;&#xFF0C;&#x4F46;&#x4E0D;&#x518D;&#x8BB2;&#x9694;&#x79BB;&#xFF0C;&#x800C;&#x8BB2;&#x201C;&#x6301;&#x4E45;&#x72B6;&#x6001;&#x4E3A;&#x4F55;&#x8981;&#x4E0E;&#x6267;&#x884C;&#x5206;&#x79BB;&#x201D;</td>
<td>&#x5DE5;&#x7A0B;</td>
</tr>
<tr>
<td>2</td>
<td>Agent &#x80FD;&#x4E00;&#x76F4;&#x8DD1;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x9760;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#x548C;&#x5B9A;&#x65F6;&#x5668;&#xFF1F;</td>
<td><a href="https://github.com/huangruiteng/loopx">LoopX</a>&#xFF1A;&#x628A; objective&#x3001;gates&#x3001;todos&#x3001;evidence&#x3001;quota &#x548C; handoff &#x653E;&#x8FDB;&#x6A21;&#x578B;&#x5916;&#x7684;&#x6301;&#x4E45;&#x63A7;&#x5236;&#x9762;</td>
<td>&#x957F;&#x4EFB;&#x52A1;&#x4E22;&#x5931;&#x7684;&#x4E0D;&#x662F;&#x51E0;&#x6BB5;&#x5BF9;&#x8BDD;&#xFF0C;&#x800C;&#x662F;&#x76EE;&#x6807;&#x3001;&#x8BC1;&#x636E;&#x3001;&#x9884;&#x7B97;&#x548C;&#x4EBA;&#x7C7B;&#x51B3;&#x7B56;&#x4E4B;&#x95F4;&#x7684;&#x7EA6;&#x675F;&#x5173;&#x7CFB;</td>
<td>&#x63A5;&#x7EED; Loop&#x3001;Plan&#x3001;Checkpoint&#xFF0C;&#x91CD;&#x70B9;&#x8F6C;&#x5411;&#x201C;&#x8FD0;&#x884C;&#x65F6;&#x4E4B;&#x5916;&#x7684;&#x63A7;&#x5236;&#x9762;&#x201D;</td>
<td>&#x5DE5;&#x7A0B;</td>
</tr>
<tr>
<td>3</td>
<td>Coding Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x6545;&#x610F;&#x4FDD;&#x6301; Prompt &#x524D;&#x7F00;&#x4E0D;&#x53D8;&#xFF1F;</td>
<td><a href="https://github.com/esengine/DeepSeek-Reasonix">DeepSeek-Reasonix</a>&#xFF1A;&#x56F4;&#x7ED5; prefix-cache stability &#x7EC4;&#x7EC7;&#x4F1A;&#x8BDD;&#x3001;&#x5DE5;&#x5177;&#x8F93;&#x51FA;&#x88C1;&#x526A;&#x4E0E;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;</td>
<td>Prompt &#x4E0D;&#x53EA;&#x662F;&#x6307;&#x4EE4;&#xFF0C;&#x4E5F;&#x662F;&#x4F1A;&#x5F71;&#x54CD;&#x7F13;&#x5B58;&#x547D;&#x4E2D;&#x3001;&#x5EF6;&#x8FDF;&#x548C;&#x6210;&#x672C;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#xFF1B;&#x4E0A;&#x4E0B;&#x6587;&#x7EF4;&#x62A4;&#x5F00;&#x59CB;&#x53CD;&#x8FC7;&#x6765;&#x5851;&#x9020; Agent &#x67B6;&#x6784;</td>
<td>&#x63A5;&#x7EED; Context Engineering&#xFF0C;&#x4F46;&#x4ECE;&#x8BED;&#x4E49;&#x8D28;&#x91CF;&#x63A8;&#x8FDB;&#x5230;&#x7CFB;&#x7EDF;&#x6210;&#x672C;</td>
<td>&#x9ED1;&#x7BB1; / &#x5DE5;&#x7A0B;</td>
</tr>
<tr>
<td>4</td>
<td>&#x56E2;&#x961F;&#x8BB0;&#x5FC6;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x662F;&#x4FDD;&#x5B58;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#xFF1F;</td>
<td><a href="https://github.com/TencentCloud/TencentDB-Agent-Memory">TencentDB Agent Memory</a>&#xFF1A;&#x628A;&#x7ECF;&#x9A8C;&#x5206;&#x6210; Chat Memory&#x3001;Skill&#x3001;LLM-Wiki &#x4E0E; Code-Graph&#xFF0C;&#x5E76;&#x5141;&#x8BB8;&#x8DE8; Agent &#x5171;&#x4EAB;</td>
<td>&#x201C;&#x8BB0;&#x4F4F;&#x8FC7;&#x53BB;&#x201D;&#x4E0E;&#x201C;&#x628A;&#x7ECF;&#x9A8C;&#x52A0;&#x5DE5;&#x6210;&#x56E2;&#x961F;&#x8D44;&#x4EA7;&#x201D;&#x662F;&#x4E24;&#x4EF6;&#x4E8B;&#xFF0C;&#x540E;&#x8005;&#x8FD8;&#x6D89;&#x53CA;&#x7ED3;&#x6784;&#x3001;&#x6CBB;&#x7406;&#x3001;&#x66F4;&#x65B0;&#x4E0E;&#x9057;&#x5FD8;</td>
<td>&#x63A5;&#x7EED; Memory&#xFF0C;&#x4ECE;&#x5355; Agent &#x8BB0;&#x5FC6;&#x63A8;&#x8FDB;&#x5230;&#x7EC4;&#x7EC7;&#x8BB0;&#x5FC6;</td>
<td>&#x5DE5;&#x7A0B;</td>
</tr>
<tr>
<td>5</td>
<td>Agent &#x8BFB;&#x4EE3;&#x7801;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x76F8;&#x4F3C;&#x5EA6;&#x641C;&#x7D22;&#x8FD8;&#x4E0D;&#x591F;&#xFF1F;</td>
<td><a href="https://github.com/vitali87/code-graph-rag">Code-Graph-RAG</a>&#xFF1A;&#x7528; Tree-sitter &#x62BD;&#x53D6;&#x7B26;&#x53F7;&#x4E0E;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF0C;&#x5F62;&#x6210;&#x8DE8;&#x8BED;&#x8A00;&#x4EE3;&#x7801;&#x56FE;</td>
<td>&#x4EE3;&#x7801;&#x95EE;&#x9898;&#x5F80;&#x5F80;&#x95EE;&#x7684;&#x662F;&#x8C03;&#x7528;&#x3001;&#x4F9D;&#x8D56;&#x548C;&#x6570;&#x636E;&#x6D41;&#xFF0C;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x54EA;&#x6BB5;&#x6587;&#x5B57;&#x6700;&#x50CF;&#x201D;&#xFF1B;&#x68C0;&#x7D22;&#x7ED3;&#x6784;&#x5FC5;&#x987B;&#x8D34;&#x5408;&#x95EE;&#x9898;&#x7ED3;&#x6784;</td>
<td>&#x63A5;&#x7EED; RAG &#x4E0E; Context&#xFF0C;&#x4F46;&#x6539;&#x8BB2;&#x4EE3;&#x7801;&#x5173;&#x7CFB;&#x800C;&#x975E;&#x6587;&#x6863;&#x76F8;&#x4F3C;&#x5EA6;</td>
<td>&#x9ED1;&#x7BB1;</td>
</tr>
<tr>
<td>6</td>
<td>&#x6709;&#x4E86; MCP&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x662F;&#x4E0D;&#x80FD;&#x66FF;&#x4F60;&#x529E;&#x4E8B;&#xFF1F;</td>
<td><a href="https://github.com/oomol-lab/open-connector">OpenConnector</a>&#xFF1A;&#x628A; Provider Action &#x4E0E;&#x7528;&#x6237;&#x8FDE;&#x63A5;&#x3001;OAuth &#x51ED;&#x8BC1;&#x3001;Scope&#x3001;Policy&#x3001;&#x5E42;&#x7B49;&#x548C;&#x8FD0;&#x884C;&#x65E5;&#x5FD7;&#x653E;&#x5728; Agent &#x8FDB;&#x7A0B;&#x4E4B;&#x5916;</td>
<td>MCP &#x4E3B;&#x8981;&#x7EDF;&#x4E00;&#x201C;&#x5DE5;&#x5177;&#x600E;&#x6837;&#x88AB;&#x53D1;&#x73B0;&#x548C;&#x8C03;&#x7528;&#x201D;&#xFF0C;&#x771F;&#x5B9E; SaaS &#x81EA;&#x52A8;&#x5316;&#x8FD8;&#x8981;&#x56DE;&#x7B54;&#x201C;&#x4EE5;&#x8C01;&#x7684;&#x8EAB;&#x4EFD;&#x3001;&#x62FF;&#x54EA;&#x4EFD;&#x51ED;&#x8BC1;&#x3001;&#x5728;&#x4EC0;&#x4E48;&#x6388;&#x6743;&#x4E0B;&#x6267;&#x884C;&#x201D;&#xFF1B;&#x8FDE;&#x63A5;&#x5C42;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x5957;&#x52A8;&#x6001;&#x59D4;&#x6258;&#x7CFB;&#x7EDF;</td>
<td>&#x63A5;&#x7EED; MCP &#x4E0E; Human in the Loop&#xFF0C;&#x4ECE;&#x5DE5;&#x5177;&#x534F;&#x8BAE;&#x63A8;&#x8FDB;&#x5230;&#x591A;&#x79DF;&#x6237;&#x8EAB;&#x4EFD;&#x548C;&#x6388;&#x6743;&#x8FB9;&#x754C;</td>
<td>&#x5DE5;&#x7A0B; / &#x5BF9;&#x9F50;</td>
</tr>
<tr>
<td>7</td>
<td>AI &#x5DF2;&#x7ECF;&#x80FD;&#x770B;&#x56FE;&#x5199;&#x9875;&#x9762;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8BBE;&#x8BA1;&#x7A3F;&#x8FD8;&#x539F;&#x4ECD;&#x7136;&#x5F88;&#x96BE;&#xFF1F;</td>
<td>&#x6BD4;&#x8F83; <a href="https://github.com/abi/screenshot-to-code">screenshot-to-code</a>&#x3001;<a href="https://github.com/figma/code-connect">Figma Code Connect</a> &#x4E0E; <a href="https://github.com/open-pencil/open-pencil">OpenPencil</a>&#xFF1A;&#x770B;&#x56FE;&#x751F;&#x6210;&#x3001;&#x8BBE;&#x8BA1;&#x2014;&#x4EE3;&#x7801;&#x6620;&#x5C04;&#x3001;&#x53EF;&#x7F16;&#x8F91;&#x8282;&#x70B9;&#x6811;&#x5206;&#x522B;&#x89E3;&#x51B3;&#x4E0D;&#x540C;&#x73AF;&#x8282;</td>
<td>&#x622A;&#x56FE;&#x53EA;&#x6709;&#x50CF;&#x7D20;&#xFF0C;&#x6CA1;&#x6709;&#x7EC4;&#x4EF6;&#x8EAB;&#x4EFD;&#x3001;&#x5408;&#x6CD5; Props&#x3001;&#x54CD;&#x5E94;&#x5F0F;&#x89C4;&#x5219;&#x548C;&#x4EA4;&#x4E92;&#x8BED;&#x4E49;&#xFF1B;&#x7CBE;&#x51C6;&#x8FD8;&#x539F;&#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x751F;&#x6210;&#xFF0C;&#x800C;&#x662F;&#x89C6;&#x89C9;&#x89E3;&#x6790;&#x3001;&#x73B0;&#x6709;&#x7269;&#x6599;&#x53EC;&#x56DE;&#x3001;Schema &#x6620;&#x5C04;&#x3001;&#x771F;&#x5B9E;&#x6E32;&#x67D3;&#x548C;&#x5DEE;&#x5F02;&#x4FEE;&#x6B63;&#x7EC4;&#x6210;&#x7684;&#x95ED;&#x73AF;</td>
<td>&#x4E0E;&#x5185;&#x90E8; Material-first &#x65B9;&#x6848;&#x9AD8;&#x5EA6;&#x76F8;&#x5173;&#xFF1B;&#x82E5;&#x516C;&#x5F00;&#x6210;&#x7BC7;&#xFF0C;&#x5E94;&#x63D0;&#x70BC;&#x901A;&#x7528;&#x673A;&#x5236;&#xFF0C;&#x4E0D;&#x66B4;&#x9732;&#x5177;&#x4F53;&#x4E1A;&#x52A1;&#x65B9;&#x6848;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x518D;&#x5199;&#x4E00;&#x4EFD;&#x5DE5;&#x5177;&#x6E05;&#x5355;</td>
<td>&#x9ED1;&#x7BB1; / &#x5DE5;&#x7A0B;</td>
</tr>
</tbody>
</table>
<h3 id="DeepSeek Harness &#x7D20;&#x6750;&#x6C60;"><a href="#DeepSeek Harness &#x7D20;&#x6750;&#x6C60;"></a>DeepSeek Harness &#x7D20;&#x6750;&#x6C60;</h3>
<p>DeepSeek Harness &#x4E0D;&#x5355;&#x72EC;&#x5EFA;&#x7ACB;&#x4EA7;&#x54C1;&#x7CFB;&#x5217;&#x3002;&#x5F53;&#x524D;&#x53EA;&#x628A;&#x5B83;&#x4F5C;&#x4E3A;&#x201C;&#x4ECE;&#x6E90;&#x7801;&#x91CC;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#x201D;&#x7684;&#x4E00;&#x4E2A;&#x7D20;&#x6750;&#x5BF9;&#x8C61;&#xFF1A;&#x6E90;&#x7801;&#x548C;&#x8BBE;&#x8BA1;&#x6587;&#x6863;&#x80FD;&#x591F;&#x8BC1;&#x660E;&#x72EC;&#x7279;&#x53D6;&#x820D;&#x65F6;&#x72EC;&#x7ACB;&#x6210;&#x7BC7;&#xFF1B;&#x7A33;&#x5B9A;&#x95EE;&#x9898;&#x4E0D;&#x4F9D;&#x8D56; DeepSeek &#x624D;&#x6210;&#x7ACB;&#x65F6;&#xFF0C;&#x8FC1;&#x56DE;&#x53EF;&#x9760; Agent &#x4E3B;&#x7EBF;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x72B6;&#x6001;</th>
<th>&#x6807;&#x9898;&#x65B9;&#x5411;</th>
<th>&#x6E90;&#x7801;&#x6293;&#x624B;&#x4E0E;&#x771F;&#x6B63;&#x95EE;&#x9898;</th>
<th>&#x5904;&#x7406;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5DF2;&#x6210;&#x7A3F;</td>
<td><a href="../../tech/ai-%E5%A5%BD%E9%97%AE%E9%A2%98/DeepSeek%20%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%9F%E5%BC%80%E5%A7%8B%E9%80%A0%20Harness%EF%BC%9F%E5%9B%A0%E4%B8%BA%E6%A8%A1%E5%9E%8B%E5%B7%B2%E7%BB%8F%E8%A7%A3%E9%87%8A%E4%B8%8D%E4%BA%86%20Agent%20%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%BD%E7%94%A8.md">DeepSeek &#x4E3A;&#x4EC0;&#x4E48;&#x4E5F;&#x5F00;&#x59CB;&#x9020; Harness&#xFF1F;&#x56E0;&#x4E3A;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x89E3;&#x91CA;&#x4E0D;&#x4E86; Agent &#x4E3A;&#x4EC0;&#x4E48;&#x597D;&#x7528;</a></td>
<td>&#x6A21;&#x578B;&#x516C;&#x53F8;&#x5F00;&#x59CB;&#x5EFA;&#x8BBE;&#x6A21;&#x578B;&#x5916;&#x7684;&#x8FD0;&#x884C;&#x5C42;&#xFF1B;&#x540C;&#x4E00;&#x6A21;&#x578B;&#x7684; Agent &#x8868;&#x73B0;&#x8D8A;&#x6765;&#x8D8A;&#x7531; Context&#x3001;&#x5DE5;&#x5177;&#x3001;&#x72B6;&#x6001;&#x3001;&#x6743;&#x9650;&#x548C; Loop &#x5171;&#x540C;&#x51B3;&#x5B9A;</td>
<td>&#x4F5C;&#x4E3A;&#x672C;&#x6B21;&#x70ED;&#x70B9;&#x9996;&#x53D1;&#xFF1B;DeepSeek &#x662F;&#x8D8B;&#x52BF;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x5C55;&#x5F00; Cordis API&#xFF0C;&#x4E3B;&#x8BB2;&#x6A21;&#x578B;&#x5BF9; Agent &#x4EA7;&#x54C1;&#x7684;&#x201C;&#x89E3;&#x91CA;&#x6743;&#x201D;&#x6B63;&#x5728;&#x5206;&#x6563;</td>
</tr>
<tr>
<td>&#x7D20;&#x6750;</td>
<td><a href="../%E6%96%87%E7%AB%A0%E7%B4%A0%E6%9D%90/Agent%20%E7%BC%BA%E5%B7%A5%E5%85%B7%E6%97%B6%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%AE%A9%E5%AE%83%E8%87%AA%E5%B7%B1%E5%86%99%E4%B8%80%E4%B8%AA%EF%BC%9FDeepSeek%20Harness%20%E7%9A%84%E6%BF%80%E8%BF%9B%E5%B0%9D%E8%AF%95.md">Agent &#x7F3A;&#x5DE5;&#x5177;&#x65F6;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x8BA9;&#x5B83;&#x81EA;&#x5DF1;&#x5199;&#x4E00;&#x4E2A;&#xFF1F;</a></td>
<td><code>tool-cordis</code> &#x8BA9;&#x6A21;&#x578B;&#x68C0;&#x67E5; Runtime&#x3001;&#x5B9A;&#x4E49;&#x548C;&#x8FD0;&#x884C;&#x8FDB;&#x7A0B;&#x5185;&#x63D2;&#x4EF6;&#xFF0C;&#x5E76;&#x5728;&#x540E;&#x7EED;&#x8F6E;&#x6B21;&#x83B7;&#x5F97;&#x65B0;&#x7684;&#x5DE5;&#x5177;&#x3001;&#x63D0;&#x793A;&#x8BCD;&#x6216;&#x76D1;&#x542C;&#x5668;</td>
<td>&#x673A;&#x5236;&#x6210;&#x7ACB;&#xFF0C;&#x4F46;&#x5355;&#x72EC;&#x5199;&#x5BB9;&#x6613;&#x843D;&#x56DE;&#x4EA7;&#x54C1;&#x529F;&#x80FD;&#x89E3;&#x8BFB;&#xFF1B;&#x4FDD;&#x7559;&#x7ED9;&#x4EE5;&#x540E;&#x8BA8;&#x8BBA; Agent &#x5982;&#x4F55;&#x4FEE;&#x6539;&#x81EA;&#x5DF1;&#x7684;&#x52A8;&#x4F5C;&#x7A7A;&#x95F4;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>DeepSeek &#x4E3A;&#x4EC0;&#x4E48;&#x7A81;&#x7136;&#x5F00;&#x59CB;&#x9020; Agent Runtime&#xFF1F;</td>
<td>capability seam &#x8BA9;&#x63A5;&#x53E3;&#x3001;&#x63D0;&#x4F9B;&#x65B9;&#x548C;&#x4F7F;&#x7528;&#x65B9;&#x4EE5;&#x4E0D;&#x540C;&#x901F;&#x5EA6;&#x53D8;&#x5316;</td>
<td>&#x201C;&#x5404;&#x90E8;&#x5206;&#x80FD;&#x591F;&#x4EE5;&#x4E0D;&#x540C;&#x901F;&#x5EA6;&#x6F14;&#x5316;&#x201D;&#x5DF2;&#x4F5C;&#x4E3A;&#x73B0;&#x8C61;&#x7A3F;&#x7684;&#x5173;&#x952E;&#x56E0;&#x679C;&#xFF0C;&#x4E0D;&#x518D;&#x72EC;&#x7ACB;&#x5199;&#x6A21;&#x5757;&#x5316;&#x6559;&#x7A0B;</td>
</tr>
<tr>
<td>&#x6682;&#x7F13;</td>
<td><a href="../../tech/ai-%E5%A5%BD%E9%97%AE%E9%A2%98/%E5%B7%A5%E5%85%B7%E5%88%B0%E5%BA%95%E6%89%A7%E8%A1%8C%E4%BA%86%E6%B2%A1%E6%9C%89%EF%BC%9FDeepSeek%20Harness%20%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BF%9D%E7%95%99%E2%80%9C%E6%9C%AA%E7%9F%A5%E7%BB%93%E6%9E%9C%E2%80%9D%EF%BC%9F.md">&#x5DE5;&#x5177;&#x5230;&#x5E95;&#x6267;&#x884C;&#x4E86;&#x6CA1;&#x6709;&#xFF1F;DeepSeek Harness &#x4E3A;&#x4EC0;&#x4E48;&#x4FDD;&#x7559;&#x201C;&#x672A;&#x77E5;&#x7ED3;&#x679C;&#x201D;&#xFF1F;</a></td>
<td>&#x5DF2;&#x6301;&#x4E45;&#x5316; <code>tool/call</code> &#x7F3A;&#x5C11;&#x7ED3;&#x679C;&#x65F6;&#x8FFD;&#x52A0; <code>TOOL_OUTCOME_UNKNOWN</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x622A;&#x65AD;&#x5386;&#x53F2;&#xFF1B;Event Sourcing &#x5982;&#x4F55;&#x4FDD;&#x7559;&#x4E0D;&#x786E;&#x5B9A;&#x6027;</td>
<td>&#x673A;&#x5236;&#x51C6;&#x786E;&#x4F46;&#x4E0D;&#x8DB3;&#x4EE5;&#x4EE3;&#x8868; Harness &#x7684;&#x4E3B;&#x8981;&#x67B6;&#x6784;&#x5224;&#x65AD;&#xFF1B;&#x4FDD;&#x7559;&#x4E3A; Retry / Checkpoint / Idempotency &#x7684;&#x5019;&#x9009;&#x4FA7;&#x7BC7;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td><a href="../%E6%96%87%E7%AB%A0%E7%B4%A0%E6%9D%90/DeepSeek%20Harness%20%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AA%E4%BF%9D%E5%AD%98%E4%B8%80%E4%BB%BD%E5%8E%86%E5%8F%B2%EF%BC%9F.md">DeepSeek Harness &#x4E3A;&#x4EC0;&#x4E48;&#x53EA;&#x4FDD;&#x5B58;&#x4E00;&#x4EFD;&#x5386;&#x53F2;&#xFF1F;</a></td>
<td>append-only Session Event&#xFF1B;Context&#x3001;Trace &#x548C;&#x6062;&#x590D;&#x4F4D;&#x7F6E;&#x5171;&#x4EAB;&#x8FD0;&#x884C;&#x4E8B;&#x5B9E;</td>
<td>Event Sourcing &#x5B9A;&#x4E49;&#x4E0E; Session Log &#x673A;&#x5236;&#x5DF2;&#x6536;&#x8FDB;&#x201C;&#x672A;&#x77E5;&#x7ED3;&#x679C;&#x201D;&#x7BC7;&#xFF0C;&#x4E0D;&#x518D;&#x72EC;&#x7ACB;&#x53D1;&#x5E03;</td>
</tr>
<tr>
<td>&#x6682;&#x7F13;</td>
<td><a href="../%E6%96%87%E7%AB%A0%E7%B4%A0%E6%9D%90/DeepSeek%20Harness%20%E7%9A%84%E5%86%85%E6%A0%B8%E4%B8%BA%E4%BB%80%E4%B9%88%E2%80%9C%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E4%BC%9A%E2%80%9D%EF%BC%9F.md">DeepSeek Harness &#x7684;&#x5185;&#x6838;&#x4E3A;&#x4EC0;&#x4E48;&#x201C;&#x4EC0;&#x4E48;&#x90FD;&#x4E0D;&#x4F1A;&#x201D;&#xFF1F;</a></td>
<td>Cordis &#x53EA;&#x7BA1;&#x7406;&#x63D2;&#x4EF6;&#x52A0;&#x8F7D;&#x3001;&#x5378;&#x8F7D;&#x3001;&#x4F9D;&#x8D56;&#x4E0E;&#x53EF;&#x9006; effect</td>
<td>&#x63D2;&#x4EF6;&#x67B6;&#x6784;&#x4ECD;&#x6709;&#x7D20;&#x6750;&#xFF0C;&#x4F46;&#x5F53;&#x524D;&#x7F3A;&#x5C11;&#x6BD4; Event Sourcing &#x66F4;&#x5F3A;&#x7684;&#x9996;&#x53D1;&#x51B2;&#x7A81;</td>
</tr>
<tr>
<td>&#x8FC1;&#x79FB;</td>
<td><a href="../%E6%96%87%E7%AB%A0%E7%B4%A0%E6%9D%90/Agent%20%E8%A6%81%E6%89%A7%E8%A1%8C%E5%8D%B1%E9%99%A9%E5%91%BD%E4%BB%A4%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%20DeepSeek%20%E4%B8%8D%E8%AE%A9%20Loop%20%E8%87%AA%E5%B7%B1%E5%86%B3%E5%AE%9A%EF%BC%9F.md">Agent &#x8981;&#x6267;&#x884C;&#x5371;&#x9669;&#x547D;&#x4EE4;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; DeepSeek &#x4E0D;&#x8BA9; Loop &#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#xFF1F;</a></td>
<td><code>tools/pre-execute</code> &#x4E0E;&#x5355;&#x8C03; <code>guard()</code> &#x8BA9;&#x6743;&#x9650;&#x53EA;&#x80FD;&#x7EE7;&#x7EED;&#x6536;&#x7D27;</td>
<td>&#x8FC1;&#x5165;&#x53EF;&#x9760; Agent &#x7684;&#x6743;&#x9650;&#x3001;&#x5BA1;&#x6279;&#x548C;&#x6700;&#x5C0F;&#x6388;&#x6743;&#x4E3B;&#x7EBF;&#xFF0C;&#x4E0D;&#x4F5C;&#x4E3A; DeepSeek &#x9996;&#x53D1;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>&#x4E3A;&#x4EC0;&#x4E48; DeepSeek &#x8FDE; Agent Loop &#x90FD;&#x505A;&#x6210;&#x4E86;&#x63D2;&#x4EF6;&#xFF1F;</td>
<td><code>core/agent</code> &#x5B9A;&#x4E49;&#x63A5;&#x53E3;&#xFF0C;<code>core/agent-loop</code> &#x662F;&#x9ED8;&#x8BA4;&#x5177;&#x4F53;&#x9A71;&#x52A8;</td>
<td>&#x4F5C;&#x4E3A; Cordis &#x5185;&#x6838;&#x7BC7;&#x7684;&#x67B6;&#x6784;&#x80CC;&#x666F;&#xFF1B;&#x5355;&#x72EC;&#x6210;&#x7BC7;&#x53EA;&#x6709;&#x5206;&#x7C7B;&#xFF0C;&#x6CA1;&#x6709;&#x8DB3;&#x591F;&#x77E5;&#x8BC6;&#x589E;&#x91CF;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>&#x4E00;&#x5207;&#x7686;&#x63D2;&#x4EF6;&#xFF1A;DeepSeek Harness &#x4E3A;&#x4EC0;&#x4E48;&#x53EA;&#x7559;&#x4E0B;&#x4E00;&#x4E2A; Cordis &#x5185;&#x6838;&#xFF1F;</td>
<td>Cordis &#x8D1F;&#x8D23;&#x63D2;&#x4EF6;&#x751F;&#x547D;&#x5468;&#x671F;&#x3001;&#x4F9D;&#x8D56;&#x3001;Service&#x3001;Event &#x4E0E;&#x53EF;&#x9006; effect</td>
<td>&#x5DF2;&#x6536;&#x8FDB;&#x201C;&#x5185;&#x6838;&#x4E3A;&#x4EC0;&#x4E48;&#x4EC0;&#x4E48;&#x90FD;&#x4E0D;&#x4F1A;&#x201D;&#xFF0C;&#x4E0D;&#x518D;&#x5355;&#x72EC;&#x6210;&#x7BC7;</td>
</tr>
<tr>
<td>&#x5019;&#x9009;</td>
<td>&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x4F1A;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; DeepSeek Harness &#x8FD8;&#x8981;&#x8BA9;&#x5B83;&#x5199;&#x4EE3;&#x7801;&#xFF1F;</td>
<td>PTC &#x8BA9;&#x6A21;&#x578B;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x7EC4;&#x5408;&#x591A;&#x6B65;&#x5DE5;&#x5177;&#xFF1B;&#x771F;&#x6B63;&#x95EE;&#x9898;&#x662F;&#x4EE3;&#x7801;&#x7F16;&#x6392;&#x76F8;&#x5BF9;&#x8FDE;&#x7EED; Tool Call &#x83B7;&#x5F97;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x53C8;&#x589E;&#x52A0;&#x54EA;&#x4E9B;&#x5B89;&#x5168;&#x4E0E;&#x8C03;&#x8BD5;&#x6210;&#x672C;</td>
<td>&#x8BC1;&#x636E;&#x95ED;&#x5408;&#x540E;&#x53EF;&#x72EC;&#x7ACB;&#x6210;&#x7BC7;&#xFF0C;&#x4E0D;&#x4E0E; Event Log &#x7BC7;&#x5408;&#x5E76;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>DeepSeek Harness &#x5230;&#x5E95;&#x662F; Agent &#x4EA7;&#x54C1;&#x3001;&#x6846;&#x67B6;&#x8FD8;&#x662F; Runtime&#xFF1F;</td>
<td>Agent &#x63A5;&#x53E3;&#x3001;&#x9ED8;&#x8BA4; Loop&#x3001;Profile&#x3001;Bundle &#x4E0E;&#x53EF;&#x66FF;&#x6362;&#x80FD;&#x529B;&#x5171;&#x540C;&#x6784;&#x6210;&#x8FD0;&#x884C;&#x73AF;&#x5883;</td>
<td>&#x4F5C;&#x4E3A; Agent Loop &#x7BC7;&#x7684;&#x6700;&#x7EC8;&#x5B9A;&#x4F4D;&#xFF0C;&#x4E0D;&#x5355;&#x5199;&#x4E00;&#x7BC7;&#x672F;&#x8BED;&#x5206;&#x7C7B;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>&#x4E3A;&#x4EC0;&#x4E48; DeepSeek &#x628A; Agent &#x505A;&#x6210; Event-driven Runtime&#xFF1F;</td>
<td><code>agent/*</code>&#x3001;<code>tools/*</code>&#x3001;<code>session/event</code> &#x8BA9; Context&#x3001;&#x5BA1;&#x6279;&#x3001;&#x91CD;&#x8BD5;&#x548C;&#x9065;&#x6D4B;&#x6210;&#x4E3A;&#x6A2A;&#x5207;&#x63D2;&#x4EF6;</td>
<td>&#x5148;&#x4F5C;&#x4E3A; Agent Loop / Cordis &#x4E24;&#x7BC7;&#x7684;&#x8FD0;&#x884C;&#x673A;&#x5236;&#xFF0C;&#x4E0D;&#x5355;&#x72EC;&#x5199;&#x4E8B;&#x4EF6;&#x5217;&#x8868;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>&#x540C;&#x4E00;&#x4E2A; Agent&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x6709;&#x6807;&#x51C6;&#x3001;&#x6781;&#x7B80;&#x3001;PTC &#x548C;&#x521B;&#x4F5C;&#x56DB;&#x79CD;&#x6A21;&#x5F0F;&#xFF1F;</td>
<td>Profile &#x4E0E; Bundle &#x7EC4;&#x5408;&#x4E0D;&#x540C;&#x63D2;&#x4EF6;</td>
<td>&#x6682;&#x5E76;&#x5165; Cordis &#x7BC7;&#x4F5C;&#x4E3A;&#x53EF;&#x89C2;&#x5BDF;&#x7ED3;&#x679C;&#xFF1B;&#x53EA;&#x6709;&#x6A21;&#x5F0F;&#x5207;&#x6362;&#x66B4;&#x9732;&#x72EC;&#x7ACB;&#x5931;&#x8D25;&#x65F6;&#x518D;&#x62C6;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>Agent &#x6709;&#x4E86;&#x5DE5;&#x5177;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x628A; Skill&#x3001;Sandbox &#x548C; Subagent &#x5206;&#x5F00;&#x88C5;&#x914D;&#xFF1F;</td>
<td>Skill&#x3001;Sandbox&#x3001;Subagent &#x90FD;&#x4EE5;&#x63D2;&#x4EF6;&#x8FDB;&#x5165;&#x8FD0;&#x884C;&#x65F6;</td>
<td>&#x8303;&#x56F4;&#x8FC7;&#x5BBD;&#xFF0C;&#x5148;&#x4F5C;&#x4E3A; Cordis &#x7BC7;&#x7684;&#x8FB9;&#x754C;&#x6750;&#x6599;&#xFF0C;&#x4E0D;&#x5199;&#x529F;&#x80FD;&#x6E05;&#x5355;</td>
</tr>
<tr>
<td>&#x8FC1;&#x79FB;</td>
<td>Agent &#x80FD;&#x6062;&#x590D;&#x5BF9;&#x8BDD;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6062;&#x590D;&#x4E0D;&#x4E86;&#x5DF2;&#x7ECF;&#x6539;&#x8FC7;&#x7684;&#x6587;&#x4EF6;&#xFF1F;</td>
<td>Session &#x4E8B;&#x4EF6;&#x80FD;&#x6062;&#x590D;&#x8FD0;&#x884C;&#x8F68;&#x8FF9;&#xFF0C;&#x6587;&#x4EF6;&#x4E0E;&#x5916;&#x90E8;&#x526F;&#x4F5C;&#x7528;&#x4ECD;&#x9700;&#x8981;&#x5FEB;&#x7167;&#x3001;&#x5E42;&#x7B49;&#x548C;&#x6388;&#x6743;</td>
<td>&#x8FC1;&#x5165;&#x53EF;&#x9760; Agent &#x7684; Retry / Checkpoint / Idempotency &#x8282;&#x70B9;</td>
</tr>
<tr>
<td>&#x8FC1;&#x79FB;</td>
<td>&#x5B50; Agent &#x5DF2;&#x7ECF;&#x80FD;&#x5206;&#x5DE5;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x5171;&#x4EAB;&#x4E00;&#x6761; Session &#x8F68;&#x8FF9;&#xFF1F;</td>
<td>&#x5B50; Agent &#x8C03;&#x5EA6;&#x4E0E;&#x4E8B;&#x4EF6;&#x8BB0;&#x5F55;&#x8FDB;&#x5165;&#x540C;&#x4E00;&#x8FD0;&#x884C;&#x5386;&#x53F2;</td>
<td>&#x7B49; Multi-Agent &#x4E3B;&#x7EBF;&#x8FDB;&#x5165;&#x4E0A;&#x4E0B;&#x6587;&#x9694;&#x79BB;&#x3001;&#x901A;&#x4FE1;&#x548C;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x65F6;&#x518D;&#x4F7F;&#x7528;</td>
</tr>
<tr>
<td>&#x5019;&#x9009;</td>
<td>&#x6362;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x53EA;&#x6539; Adapter&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; Agent &#x884C;&#x4E3A;&#x8FD8;&#x662F;&#x53EF;&#x80FD;&#x53D8;&#xFF1F;</td>
<td>Model Adapter &#x7EDF;&#x4E00;&#x63A5;&#x53E3;&#xFF0C;&#x4F46;&#x5DE5;&#x5177;&#x534F;&#x8BAE;&#x3001;&#x63A8;&#x7406;&#x5B57;&#x6BB5;&#x4E0E;&#x591A;&#x8F6E;&#x884C;&#x4E3A;&#x4ECD;&#x53EF;&#x80FD;&#x4E0D;&#x540C;</td>
<td>&#x4E0E;&#x884C;&#x4E3A;&#x534F;&#x8BAE;&#x65E7;&#x6587;&#x4EA4;&#x53C9;&#xFF1B;&#x53EA;&#x6709;&#x627E;&#x5230; Harness &#x6E90;&#x7801;&#x6216; Issue &#x4E2D;&#x7684;&#x5177;&#x4F53;&#x517C;&#x5BB9;&#x5931;&#x8D25;&#x624D;&#x6210;&#x7BC7;</td>
</tr>
<tr>
<td>&#x5408;&#x5E76;</td>
<td>Agent &#x80FD;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x81EA;&#x5DF1;&#x7684; Harness&#xFF0C;&#x518D;&#x6BD4;&#x8F83;&#x54EA;&#x5957;&#x8FD0;&#x884C;&#x65B9;&#x5F0F;&#x66F4;&#x597D;&#xFF1F;</td>
<td>Everything is a Plugin &#x4E3A; Harness evolution &#x63D0;&#x4F9B;&#x53EF;&#x64CD;&#x4F5C;&#x8868;&#x9762;</td>
<td>&#x81EA;&#x4FEE;&#x6539;&#x80FD;&#x529B;&#x5DF2;&#x6536;&#x8FDB; <code>tool-cordis</code> &#x7A3F;&#xFF1B;&#x201C;&#x81EA;&#x52A8;&#x6BD4;&#x8F83;&#x5E76;&#x6539;&#x8FDB; Harness&#x201D;&#x4ECD;&#x7F3A;&#x5B9E;&#x9A8C;&#x4F9D;&#x636E;&#xFF0C;&#x4E0D;&#x7EE7;&#x7EED;&#x5916;&#x63A8;</td>
</tr>
<tr>
<td>&#x89C2;&#x5BDF;</td>
<td>Harness &#x4F1A;&#x4E0D;&#x4F1A;&#x6210;&#x4E3A; Agent &#x4E16;&#x754C;&#x7684;&#x6807;&#x51C6; ABI&#xFF1F;</td>
<td>Agent&#x3001;Model&#x3001;Tool&#x3001;Session&#x3001;Sandbox &#x7B49;&#x5DF2;&#x6709;&#x5185;&#x90E8;&#x63A5;&#x53E3;</td>
<td>&#x5F53;&#x524D;&#x53EA;&#x662F;&#x5355;&#x9879;&#x76EE;&#x5185;&#x90E8;&#x7EA6;&#x5B9A;&#xFF1B;&#x9664;&#x975E;&#x51FA;&#x73B0;&#x8DE8; Runtime &#x517C;&#x5BB9;&#x8BC1;&#x636E;&#xFF0C;&#x5426;&#x5219;&#x4E0D;&#x6210;&#x7BC7;</td>
</tr>
<tr>
<td>&#x6682;&#x7F13;</td>
<td>DeepSeek Harness vs Claude Code vs Codex vs OpenCode vs LangGraph</td>
<td>&#x6BD4;&#x8F83; Product&#x3001;Framework&#x3001;Runtime &#x4E0E; Protocol &#x7684;&#x5C42;&#x6B21;</td>
<td>&#x8303;&#x56F4;&#x8FC7;&#x5BBD;&#xFF1B;&#x53EA;&#x6709;&#x6536;&#x7D27;&#x5230;&#x4E00;&#x4E2A;&#x5171;&#x540C;&#x95EE;&#x9898;&#x548C;&#x540C;&#x4E00;&#x8BC1;&#x636E;&#x7EF4;&#x5EA6;&#x65F6;&#x518D;&#x6BD4;&#x8F83;</td>
</tr>
</tbody>
</table>
<h2 id="&#x7B2C;&#x4E8C;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x7ECF;&#x5178;&#x6846;&#x67B6;&#x7684;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x8003;&#x53E4;"><a href="#&#x7B2C;&#x4E8C;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x7ECF;&#x5178;&#x6846;&#x67B6;&#x7684;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x8003;&#x53E4;"></a>&#x7B2C;&#x4E8C;&#x7AE0;&#x5019;&#x9009;&#xFF1A;&#x7ECF;&#x5178;&#x6846;&#x67B6;&#x7684;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x8003;&#x53E4;</h2>
<p>&#x8FD9;&#x4E00;&#x7AE0;&#x5148;&#x4EE5; PyTorch &#x4E3A;&#x4E3B;&#x8981;&#x89C2;&#x5BDF;&#x5BF9;&#x8C61;&#xFF0C;&#x56E0;&#x4E3A;&#x540C;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x91CC;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x4E86;&#x6613;&#x7528;&#x6027;&#x3001;&#x81EA;&#x52A8;&#x5FAE;&#x5206;&#x3001;&#x786C;&#x4EF6;&#x8DEF;&#x7531;&#x3001;&#x7F16;&#x8BD1;&#x548C;&#x5206;&#x5E03;&#x5F0F;&#x4E4B;&#x95F4;&#x7684;&#x5F20;&#x529B;&#x3002;TensorFlow&#x3001;JAX&#x3001;ONNX &#x7B49;&#x53EA;&#x5728;&#x540C;&#x4E00;&#x95EE;&#x9898;&#x9700;&#x8981;&#x53E6;&#x4E00;&#x79CD;&#x53D6;&#x820D;&#x4F5C;&#x5BF9;&#x7167;&#x65F6;&#x8FDB;&#x5165;&#xFF0C;&#x4E0D;&#x5355;&#x72EC;&#x5199;&#x6210;&#x54C1;&#x724C;&#x53F2;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x6807;&#x9898;&#x65B9;&#x5411;</th>
<th>&#x6E90;&#x7801;&#x6293;&#x624B;</th>
<th>&#x53EF;&#x8FC1;&#x79FB;&#x7684;&#x8BA4;&#x77E5;&#x7ED3;&#x6784;</th>
<th>&#x4E0E;&#x5176;&#x4ED6;&#x7CFB;&#x5217;&#x7684;&#x8FB9;&#x754C;</th>
</tr>
</thead>
<tbody>
<tr>
<td>PyTorch &#x660E;&#x660E;&#x8FB9;&#x5199;&#x8FB9;&#x7B97;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x80CC;&#x540E;&#x4ECD;&#x79BB;&#x4E0D;&#x5F00;&#x8BA1;&#x7B97;&#x56FE;&#xFF1F;</td>
<td>Tensor &#x7684; <code>grad_fn</code>&#x3001;Autograd Node&#x3001;&#x4F9D;&#x8D56;&#x4E0E;&#x53CD;&#x5411;&#x6267;&#x884C;</td>
<td><code>&#x547D;&#x4EE4;&#x5F0F;&#x524D;&#x7AEF; &#x2192; &#x52A8;&#x6001;&#x8BB0;&#x5F55;&#x4F9D;&#x8D56; &#x2192; &#x53CD;&#x5411;&#x8C03;&#x5EA6;</code></td>
<td>&#x6A21;&#x578B;&#x67B6;&#x6784;&#x7CFB;&#x5217;&#x89E3;&#x91CA;&#x94FE;&#x5F0F;&#x6CD5;&#x5219;&#xFF1B;&#x672C;&#x7BC7;&#x89E3;&#x91CA;&#x6846;&#x67B6;&#x600E;&#x6837;&#x4FDD;&#x5B58;&#x5E76;&#x6267;&#x884C;&#x8FD9;&#x6761;&#x5173;&#x7CFB;</td>
</tr>
<tr>
<td>Tensor &#x8F6C;&#x7F6E;&#x4E00;&#x4E0B;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6570;&#x636E;&#x5E38;&#x5E38;&#x6CA1;&#x6709;&#x642C;&#x5BB6;&#xFF1F;</td>
<td>Tensor&#x3001;Storage&#x3001;size&#x3001;stride&#x3001;view &#x4E0E; contiguous</td>
<td><code>&#x903B;&#x8F91;&#x89C6;&#x56FE; / &#x7269;&#x7406;&#x5B58;&#x50A8; / &#x7D22;&#x5F15;&#x89C4;&#x5219;</code> &#x5206;&#x79BB;</td>
<td>&#x4E0D;&#x5199;&#x6210;&#x5F20;&#x91CF; API &#x6559;&#x7A0B;&#xFF0C;&#x91CD;&#x70B9;&#x662F;&#x96F6;&#x62F7;&#x8D1D;&#x6536;&#x76CA;&#x3001;&#x522B;&#x540D;&#x4E0E;&#x8FDE;&#x7EED;&#x6027;&#x4EE3;&#x4EF7;</td>
</tr>
<tr>
<td>&#x540C;&#x4E00;&#x4E2A; <code>add</code>&#xFF0C;PyTorch &#x600E;&#x4E48;&#x77E5;&#x9053;&#x8BE5;&#x8DD1; CPU&#x3001;GPU &#x8FD8;&#x662F; Autograd&#xFF1F;</td>
<td>Operator Registry&#x3001;Dispatch Key &#x4E0E;&#x540E;&#x7AEF;&#x5B9E;&#x73B0;</td>
<td><code>&#x7A33;&#x5B9A;&#x7B97;&#x5B50;&#x63A5;&#x53E3; &#x2192; &#x8DEF;&#x7531;&#x7B56;&#x7565; &#x2192; &#x53EF;&#x66FF;&#x6362;&#x5185;&#x6838;</code></td>
<td>&#x4E0D;&#x8BB2;&#x67D0;&#x4E2A; CUDA Kernel &#x7684;&#x6570;&#x5B66;&#x4F18;&#x5316;&#xFF0C;&#x800C;&#x8BB2;&#x6846;&#x67B6;&#x6269;&#x5C55;&#x6027;&#x7684;&#x63A7;&#x5236;&#x9762;</td>
</tr>
<tr>
<td>&#x6539;&#x4E86;&#x4E00;&#x4E2A; Tensor&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; <code>backward</code> &#x6709;&#x65F6;&#x4F1A;&#x62D2;&#x7EDD;&#x7EE7;&#x7EED;&#xFF1F;</td>
<td>&#x539F;&#x5730;&#x64CD;&#x4F5C;&#x3001;Alias&#x3001;Version Counter &#x4E0E; Saved Tensor</td>
<td><code>&#x53EF;&#x53D8;&#x72B6;&#x6001; / &#x4F9D;&#x8D56;&#x5FEB;&#x7167; / &#x6B63;&#x786E;&#x6027;&#x68C0;&#x67E5;</code></td>
<td>&#x4E0E;&#x8BED;&#x8A00;&#x5C42;&#x9762;&#x7684;&#x53EF;&#x53D8;&#x6027;&#x6587;&#x7AE0;&#x4EA4;&#x53C9;&#xFF0C;&#x4F46;&#x5FC5;&#x987B;&#x843D;&#x56DE;&#x68AF;&#x5EA6;&#x6B63;&#x786E;&#x6027;</td>
</tr>
<tr>
<td>&#x52A8;&#x6001;&#x56FE;&#x66F4;&#x597D;&#x8C03;&#x8BD5;&#xFF0C;PyTorch &#x4E3A;&#x4EC0;&#x4E48;&#x53C8;&#x8981;&#x628A; Python &#x7F16;&#x8BD1;&#x6389;&#xFF1F;</td>
<td>&#x56FE;&#x6355;&#x83B7;&#x3001;Guard&#x3001;Graph Break&#x3001;&#x91CD;&#x7F16;&#x8BD1;&#x4E0E;&#x540E;&#x7AEF;&#x7F16;&#x8BD1;&#x94FE;</td>
<td><code>&#x52A8;&#x6001;&#x8BED;&#x4E49; / &#x53EF;&#x89C2;&#x5BDF;&#x5047;&#x8BBE; / &#x5168;&#x5C40;&#x4F18;&#x5316;</code> &#x7684;&#x4EA4;&#x6362;</td>
<td>&#x6280;&#x672F;&#x5386;&#x53F2;&#x53EA;&#x89E3;&#x91CA;&#x8DEF;&#x7EBF;&#x4E3A;&#x4F55;&#x5206;&#x5316;&#xFF1B;&#x672C;&#x7BC7;&#x7528;&#x5B9E;&#x73B0;&#x89E3;&#x91CA;&#x600E;&#x6837;&#x517C;&#x5F97;&#x53CA;&#x5176;&#x5931;&#x8D25;&#x8FB9;&#x754C;</td>
</tr>
<tr>
<td>&#x591A;&#x5361;&#x8BAD;&#x7EC3;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x662F;&#x628A;&#x6A21;&#x578B;&#x590D;&#x5236;&#x51E0;&#x4EFD;&#x5C31;&#x591F;&#x4E86;&#xFF1F;</td>
<td>&#x53C2;&#x6570;&#x526F;&#x672C;&#x3001;&#x68AF;&#x5EA6;&#x540C;&#x6B65;&#x3001;Bucket &#x4E0E;&#x8BA1;&#x7B97;&#x901A;&#x4FE1;&#x91CD;&#x53E0;</td>
<td><code>&#x526F;&#x672C;&#x72B6;&#x6001; / &#x540C;&#x6B65;&#x65F6;&#x673A; / &#x901A;&#x4FE1;&#x8C03;&#x5EA6;</code></td>
<td>&#x4E0D;&#x505A;&#x5206;&#x5E03;&#x5F0F;&#x8BAD;&#x7EC3;&#x6559;&#x7A0B;&#xFF0C;&#x89E3;&#x91CA;&#x6B63;&#x786E;&#x6027;&#x4E0E;&#x541E;&#x5410;&#x4E3A;&#x4F55;&#x540C;&#x65F6;&#x6539;&#x53D8;&#x7ED3;&#x6784;</td>
</tr>
<tr>
<td>&#x6A21;&#x578B;&#x660E;&#x660E;&#x80FD;&#x8BAD;&#x7EC3;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x5BFC;&#x51FA;&#x4EE5;&#x540E;&#x5C31;&#x53EF;&#x80FD;&#x53D8;&#x6210;&#x53E6;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#xFF1F;</td>
<td>Trace&#x3001;Export&#x3001;IR&#x3001;&#x63A7;&#x5236;&#x6D41;&#x4E0E;&#x7B97;&#x5B50;&#x8986;&#x76D6;</td>
<td><code>&#x8FD0;&#x884C;&#x4E2D;&#x7684;&#x7A0B;&#x5E8F; / &#x88AB;&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x56FE; / &#x53EF;&#x79FB;&#x690D;&#x8868;&#x793A;</code></td>
<td>&#x590D;&#x7528; <code>AiNotes</code> &#x4E2D; ONNX &#x7D20;&#x6750;&#xFF0C;&#x4F46;&#x91CD;&#x65B0;&#x67E5;&#x8BC1;&#x5E76;&#x4EE5;&#x6E90;&#x7801;&#x8FB9;&#x754C;&#x6210;&#x7BC7;</td>
</tr>
</tbody>
</table>
<h2 id="&#x9996;&#x6279;&#x6587;&#x7AE0;"><a href="#&#x9996;&#x6279;&#x6587;&#x7AE0;"></a>&#x9996;&#x6279;&#x6587;&#x7AE0;</h2>
<p>&#x9996;&#x6279;&#x4E0D;&#x518D;&#x5168;&#x90E8;&#x6765;&#x81EA;&#x8FD1;&#x671F;&#x4ED3;&#x5E93;&#xFF0C;&#x800C;&#x662F;&#x7528;&#x4E09;&#x7BC7;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x8003;&#x53E4;&#x5EFA;&#x7ACB;&#x6DF1;&#x5EA6;&#xFF0C;&#x518D;&#x7528;&#x4E09;&#x7BC7;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x68C0;&#x9A8C;&#x8FD9;&#x4E9B;&#x8BA4;&#x77E5;&#x7ED3;&#x6784;&#xFF1A;</p>
<ol>
<li>
<p><strong>PyTorch &#x660E;&#x660E;&#x8FB9;&#x5199;&#x8FB9;&#x7B97;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x80CC;&#x540E;&#x4ECD;&#x79BB;&#x4E0D;&#x5F00;&#x8BA1;&#x7B97;&#x56FE;&#xFF1F;</strong></p>
<p>&#x7528;&#x4E00;&#x6B21;&#x524D;&#x5411;&#x4E0E;&#x53CD;&#x5411;&#x8FC7;&#x7A0B;&#x5EFA;&#x7ACB;&#x7CFB;&#x5217;&#x65B9;&#x6CD5;&#xFF1A;&#x4E0D;&#x8BB2; Autograd &#x529F;&#x80FD;&#x8868;&#xFF0C;&#x800C;&#x662F;&#x770B;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#x600E;&#x6837;&#x7559;&#x4E0B;&#x53EF;&#x6267;&#x884C;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;</p>
</li>
<li>
<p><strong>Agent &#x5DF2;&#x7ECF;&#x4F1A;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x7ED9;&#x5B83;&#x4E00;&#x53F0;&#x7535;&#x8111;&#xFF1F;</strong></p>
<p>&#x7528; Cloudflare Computer &#x68C0;&#x9A8C;&#x201C;&#x6267;&#x884C;&#x5668;&#x53EF;&#x4EE5;&#x66FF;&#x6362;&#xFF0C;&#x5DE5;&#x4F5C;&#x72B6;&#x6001;&#x5FC5;&#x987B;&#x5EF6;&#x7EED;&#x201D;&#x8FD9;&#x4E2A;&#x957F;&#x671F;&#x95EE;&#x9898;&#x3002;</p>
</li>
<li>
<p><strong>Tensor &#x8F6C;&#x7F6E;&#x4E00;&#x4E0B;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6570;&#x636E;&#x5E38;&#x5E38;&#x6CA1;&#x6709;&#x642C;&#x5BB6;&#xFF1F;</strong></p>
<p>&#x4ECE;&#x4E00;&#x4E2A;&#x53EF;&#x89C2;&#x5BDF;&#x7684;&#x5C0F;&#x73B0;&#x8C61;&#x8FDB;&#x5165; Tensor&#x3001;Storage &#x4E0E; stride&#xFF0C;&#x8BC1;&#x660E;&#x7ECF;&#x5178;&#x6846;&#x67B6;&#x7BC7;&#x4E5F;&#x80FD;&#x517C;&#x987E;&#x4F4E;&#x95E8;&#x69DB;&#x548C;&#x6E90;&#x7801;&#x6DF1;&#x5EA6;&#x3002;</p>
</li>
<li>
<p><strong>Agent &#x80FD;&#x4E00;&#x76F4;&#x8DD1;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x9760;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#x548C;&#x5B9A;&#x65F6;&#x5668;&#xFF1F;</strong></p>
<p>&#x7528; LoopX &#x8FDB;&#x5165;&#x8FD0;&#x884C;&#x65F6;&#x4E4B;&#x5916;&#x7684;&#x6301;&#x4E45;&#x63A7;&#x5236;&#x9762;&#xFF0C;&#x5C55;&#x793A;&#x4E00;&#x4E2A;&#x770B;&#x4F3C;&#x591A;&#x4F59;&#x7684;&#x7ED3;&#x6784;&#x5982;&#x4F55;&#x4FDD;&#x4F4F;&#x76EE;&#x6807;&#x3001;&#x8BC1;&#x636E;&#x4E0E;&#x4EBA;&#x7C7B;&#x51B3;&#x7B56;&#x3002;</p>
</li>
<li>
<p><strong>&#x540C;&#x4E00;&#x4E2A; <code>add</code>&#xFF0C;PyTorch &#x600E;&#x4E48;&#x77E5;&#x9053;&#x8BE5;&#x8DD1; CPU&#x3001;GPU &#x8FD8;&#x662F; Autograd&#xFF1F;</strong></p>
<p>&#x7528; Dispatcher &#x89E3;&#x91CA;&#x7A33;&#x5B9A;&#x63A5;&#x53E3;&#x4E0B;&#x9762;&#x4E3A;&#x4EC0;&#x4E48;&#x9700;&#x8981;&#x4E00;&#x5C42;&#x590D;&#x6742;&#x8DEF;&#x7531;&#xFF0C;&#x5E76;&#x4E3A;&#x7F16;&#x8BD1;&#x3001;&#x6269;&#x5C55;&#x540E;&#x7AEF;&#x548C;&#x5206;&#x5E03;&#x5F0F;&#x7559;&#x4E0B;&#x5165;&#x53E3;&#x3002;</p>
</li>
<li>
<p><strong>&#x6709;&#x4E86; MCP&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x662F;&#x4E0D;&#x80FD;&#x66FF;&#x4F60;&#x529E;&#x4E8B;&#xFF1F;</strong></p>
<p>&#x7528; OpenConnector &#x628A;&#x5DE5;&#x5177;&#x534F;&#x8BAE;&#x63A8;&#x8FDB;&#x5230;&#x771F;&#x5B9E;&#x8D26;&#x53F7;&#x3001;&#x51ED;&#x8BC1;&#x3001;Scope&#x3001;Policy&#x3001;&#x5E42;&#x7B49;&#x548C;&#x5BA1;&#x8BA1;&#xFF0C;&#x786E;&#x7ACB;&#x672C;&#x7CFB;&#x5217;&#x4E0D;&#x53EA;&#x4F1A;&#x8BB2;&#x6A21;&#x578B;&#x8FD0;&#x884C;&#x65F6;&#x3002;</p>
</li>
</ol>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x4E25;&#x683C;&#x4EA4;&#x66FF;&#x53D1;&#x5E03;&#x7684;&#x8BFE;&#x8868;&#x3002;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x7BC7;&#x6784;&#x6210;&#x53EF;&#x957F;&#x671F;&#x590D;&#x7528;&#x7684;&#x4E3B;&#x5E72;&#xFF0C;&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7BC7;&#x8D1F;&#x8D23;&#x628A;&#x540C;&#x4E00;&#x5957;&#x6E90;&#x7801;&#x65B9;&#x6CD5;&#x5E26;&#x56DE;&#x6B63;&#x5728;&#x53D1;&#x751F;&#x7684;&#x5DE5;&#x7A0B;&#x73B0;&#x573A;&#x3002;Reasonix&#x3001;&#x56E2;&#x961F;&#x8BB0;&#x5FC6;&#x548C;&#x4EE3;&#x7801;&#x56FE;&#x68C0;&#x7D22;&#x4ECD;&#x4F5C;&#x4E3A;&#x7B2C;&#x4E8C;&#x6279;&#xFF1B;&#x9875;&#x9762;&#x8FD8;&#x539F;&#x4FDD;&#x7559;&#x4E3A;&#x8DE8;&#x6A21;&#x6001;&#x8F6F;&#x4EF6;&#x751F;&#x4EA7;&#x652F;&#x7EBF;&#x3002;</p>
<h2 id="&#x9996;&#x7BC7;&#x5EFA;&#x8BAE;"><a href="#&#x9996;&#x7BC7;&#x5EFA;&#x8BAE;"></a>&#x9996;&#x7BC7;&#x5EFA;&#x8BAE;</h2>
<p>&#x9996;&#x7BC7;&#x4F18;&#x5148;&#x9009;&#x62E9; PyTorch &#x7684; Autograd &#x8BA1;&#x7B97;&#x56FE;&#x3002;</p>
<p>&#x5B83;&#x6709;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x8BFB;&#x8005;&#x4E5F;&#x80FD;&#x7406;&#x89E3;&#x3001;&#x6280;&#x672F;&#x8BFB;&#x8005;&#x53C8;&#x80FD;&#x7EE7;&#x7EED;&#x4E0B;&#x94BB;&#x7684;&#x8868;&#x9762;&#x77DB;&#x76FE;&#xFF1A;PyTorch &#x5E38;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x201C;&#x50CF;&#x666E;&#x901A; Python &#x4E00;&#x6837;&#x8FB9;&#x5199;&#x8FB9;&#x7B97;&#x201D;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x81EA;&#x52A8;&#x6C42;&#x5BFC;&#x4ECD;&#x7136;&#x79BB;&#x4E0D;&#x5F00;&#x4E00;&#x5F20;&#x8BA1;&#x7B97;&#x56FE;&#xFF1F;&#x5411;&#x4E0B;&#x8FFD;&#xFF0C;&#x4F1A;&#x9047;&#x5230;&#x547D;&#x4EE4;&#x5F0F;&#x7A0B;&#x5E8F;&#x3001;&#x52A8;&#x6001;&#x4F9D;&#x8D56;&#x8BB0;&#x5F55;&#x4E0E;&#x53CD;&#x5411;&#x8C03;&#x5EA6;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x3002;</p>
<p>&#x6587;&#x7AE0;&#x7684;&#x6838;&#x5FC3;&#x5224;&#x65AD;&#x6682;&#x5B9A;&#x4E3A;&#xFF1A;</p>
<blockquote>
<p>&#x201C;&#x52A8;&#x6001;&#x56FE;&#x201D;&#x4E0D;&#x662F;&#x6CA1;&#x6709;&#x56FE;&#xFF0C;&#x800C;&#x662F;&#x56FE;&#x968F;&#x7740;&#x8FD9;&#x4E00;&#x6B21;&#x771F;&#x5B9E;&#x6267;&#x884C;&#x88AB;&#x5EFA;&#x7ACB;&#xFF1B;PyTorch &#x7528;&#x547D;&#x4EE4;&#x5F0F;&#x524D;&#x7AEF;&#x6362;&#x53D6;&#x53EF;&#x7406;&#x89E3;&#x6027;&#xFF0C;&#x518D;&#x7528;&#x8FD0;&#x884C;&#x65F6;&#x8BB0;&#x5F55;&#x4FDD;&#x4F4F;&#x81EA;&#x52A8;&#x5FAE;&#x5206;&#x9700;&#x8981;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;</p>
</blockquote>
<p>&#x8FD9;&#x7BC7;&#x5FC5;&#x987B;&#x907F;&#x5F00;&#x4E24;&#x4E2A;&#x5199;&#x6CD5;&#xFF1A;&#x4E00;&#x662F;&#x5199;&#x6210; <code>requires_grad</code>&#x3001;<code>backward</code> &#x7684;&#x5165;&#x95E8;&#x6559;&#x7A0B;&#xFF1B;&#x4E8C;&#x662F;&#x91CD;&#x590D;&#x6A21;&#x578B;&#x67B6;&#x6784;&#x7CFB;&#x5217;&#x5BF9;&#x94FE;&#x5F0F;&#x6CD5;&#x5219;&#x7684;&#x89E3;&#x91CA;&#x3002;&#x771F;&#x6B63;&#x7684;&#x4E3B;&#x7EBF;&#x662F;&#x201C;&#x4E00;&#x6BB5;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#x600E;&#x6837;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x53D8;&#x6210;&#x4E00;&#x4EFD;&#x53EF;&#x53CD;&#x5411;&#x6267;&#x884C;&#x7684;&#x7ED3;&#x6784;&#x201D;&#x3002;&#x65E7; <code>AiNotes</code> &#x7684;&#x52A8;&#x9759;&#x6001;&#x56FE;&#x4E0E; ONNX &#x7B14;&#x8BB0;&#x53EA;&#x4F5C;&#x4E3A;&#x7D20;&#x6750;&#xFF0C;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6269;&#x5199;&#x6210;&#x7A3F;&#x3002;</p>
<p>&#x5982;&#x679C;&#x9996;&#x7BC7;&#x9A8C;&#x8BC1;&#x540E;&#x53D1;&#x73B0;&#x6E90;&#x7801;&#x95E8;&#x69DB;&#x8FC7;&#x9AD8;&#xFF0C;&#x7B2C;&#x4E8C;&#x7BC7;&#x4E0D;&#x7EE7;&#x7EED;&#x8FFD; Dispatcher&#xFF0C;&#x800C;&#x662F;&#x56DE;&#x5230; Cloudflare Computer &#x6216; OpenConnector&#xFF0C;&#x8BA9;&#x8BFB;&#x8005;&#x5148;&#x5728;&#x66F4;&#x719F;&#x6089;&#x7684; Agent &#x573A;&#x666F;&#x91CC;&#x518D;&#x6B21;&#x770B;&#x89C1;&#x201C;&#x62BD;&#x8C61;&#x4E3A;&#x4EC0;&#x4E48;&#x5B58;&#x5728;&#x201D;&#x3002;&#x7ECF;&#x5178;&#x6846;&#x67B6;&#x7BC7;&#x4E0D;&#x8FDE;&#x7EED;&#x8D85;&#x8FC7;&#x4E24;&#x7BC7;&#xFF0C;&#x907F;&#x514D;&#x7CFB;&#x5217;&#x88AB;&#x8BEF;&#x8BA4;&#x6210; PyTorch &#x6E90;&#x7801;&#x8BFE;&#x7A0B;&#x3002;</p>
<p>&#x9875;&#x9762;&#x8FD8;&#x539F;&#x8282;&#x70B9;&#x6682;&#x5B9A;&#x4E3A;&#x6BD4;&#x8F83;&#x7BC7;&#xFF0C;&#x4E0D;&#x7ED1;&#x5B9A;&#x67D0;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x3002;&#x5F53;&#x524D;&#x6210;&#x719F;&#x9879;&#x76EE;&#x5206;&#x522B;&#x8986;&#x76D6;&#x4E86;&#x81EA;&#x7531;&#x751F;&#x6210;&#x3001;&#x663E;&#x5F0F;&#x7EC4;&#x4EF6;&#x6620;&#x5C04;&#x548C;&#x53EF;&#x7F16;&#x8F91;&#x539F;&#x578B;&#xFF0C;&#x4F46;&#x5C1A;&#x672A;&#x770B;&#x5230;&#x4E00;&#x4E2A;&#x8FD1;&#x671F;&#x6D3B;&#x8DC3;&#x4E14;&#x8BC1;&#x636E;&#x5145;&#x5206;&#x7684;&#x5F00;&#x6E90;&#x4ED3;&#x5E93;&#xFF0C;&#x540C;&#x65F6;&#x505A;&#x597D;&#x201C;&#x622A;&#x56FE;&#x8BC6;&#x522B; &#x2192; &#x73B0;&#x6709;&#x7EC4;&#x4EF6;&#x53EC;&#x56DE; &#x2192; Props &#x6620;&#x5C04; &#x2192; &#x9875;&#x9762;&#x7EC4;&#x5408; &#x2192; &#x89C6;&#x89C9;&#x56DE;&#x5F52;&#x201D;&#x3002;&#x5728;&#x5B8C;&#x6574;&#x95ED;&#x73AF;&#x51FA;&#x73B0;&#x524D;&#xFF0C;&#x8FD9;&#x7BC7;&#x6700;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x4E0D;&#x662F;&#x5BA3;&#x5E03;&#x65B9;&#x6848;&#x5DF2;&#x7ECF;&#x6210;&#x719F;&#xFF0C;&#x800C;&#x662F;&#x89E3;&#x91CA;&#x8FD9;&#x51E0;&#x6B65;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x88AB;&#x201C;&#x591A;&#x6A21;&#x6001;&#x6A21;&#x578B;&#x770B;&#x4E00;&#x773C;&#x201D;&#x66FF;&#x4EE3;&#x3002;</p>
<h2 id="&#x66F4;&#x65B0;&#x8282;&#x594F;"><a href="#&#x66F4;&#x65B0;&#x8282;&#x594F;"></a>&#x66F4;&#x65B0;&#x8282;&#x594F;</h2>
<p>&#x5F53;&#x4E0B;&#x9879;&#x76EE;&#x7EBF;&#x53EF;&#x4EE5;&#x6BCF;&#x5468;&#x770B;&#x4E00;&#x6B21;&#x8FD1;&#x671F;&#x6D3B;&#x8DC3;&#x4ED3;&#x5E93;&#xFF0C;&#x53EA;&#x7EF4;&#x62A4;&#x5019;&#x9009;&#x6C60;&#xFF1B;&#x4E0D;&#x627F;&#x8BFA;&#x6BCF;&#x5468;&#x4ECE;&#x4E2D;&#x53D1;&#x4E00;&#x7BC7;&#x3002;&#x57FA;&#x7840;&#x6846;&#x67B6;&#x7EBF;&#x4E0D;&#x6309;&#x66F4;&#x65B0;&#x9891;&#x7387;&#x7EF4;&#x62A4;&#xFF0C;&#x800C;&#x6309;&#x95EE;&#x9898;&#x8865;&#x9F50;&#x6E90;&#x7801;&#x3001;&#x6D4B;&#x8BD5;&#x3001;RFC &#x548C;&#x5173;&#x952E;&#x63D0;&#x4EA4;&#x3002;&#x4E24;&#x6761;&#x7EBF;&#x90FD;&#x53EA;&#x6709;&#x5728;&#x95EE;&#x9898;&#x3001;&#x8BC1;&#x636E;&#x548C;&#x53D6;&#x820D;&#x95ED;&#x5408;&#x65F6;&#x624D;&#x8FDB;&#x5165;&#x5199;&#x4F5C;&#x3002;</p>
<p>&#x5019;&#x9009;&#x8282;&#x70B9;&#x7EF4;&#x62A4;&#x56DB;&#x79CD;&#x72B6;&#x6001;&#xFF1A;</p>
<pre><code class="language-text">&#x5019;&#x9009;&#xFF1A;&#x53D1;&#x73B0;&#x4E86;&#x53CD;&#x5E38;&#x8BBE;&#x8BA1;&#xFF0C;&#x8BC1;&#x636E;&#x8FD8;&#x4E0D;&#x8DB3;
&#x5165;&#x9009;&#xFF1A;&#x5931;&#x8D25;&#x3001;&#x673A;&#x5236;&#x3001;&#x8BC1;&#x636E;&#x548C;&#x53D6;&#x820D;&#x5DF2;&#x7ECF;&#x95ED;&#x5408;
&#x8FC1;&#x79FB;&#xFF1A;&#x95EE;&#x9898;&#x6210;&#x7ACB;&#xFF0C;&#x4F46;&#x66F4;&#x9002;&#x5408; Agent&#x3001;&#x6A21;&#x578B;&#x67B6;&#x6784;&#x6216;&#x5176;&#x4ED6;&#x4E3B;&#x7EBF;
&#x9000;&#x51FA;&#xFF1A;&#x4ED3;&#x5E93;&#x8FC7;&#x671F;&#x3001;&#x8BC1;&#x636E;&#x6D88;&#x5931;&#xFF0C;&#x6216;&#x6700;&#x7EC8;&#x53EA;&#x5269;&#x529F;&#x80FD;&#x4ECB;&#x7ECD;
</code></pre>
<p>&#x52A8;&#x7B14;&#x524D;&#x5FC5;&#x987B;&#x91CD;&#x65B0;&#x6838;&#x5BF9;&#x5F53;&#x524D;&#x6E90;&#x7801;&#x3001;&#x6587;&#x6863;&#x3001;Issue &#x548C;&#x6D4B;&#x8BD5;&#xFF0C;&#x4E0D;&#x56E0;&#x4E3A;&#x5019;&#x9009;&#x6C60;&#x66FE;&#x7ECF;&#x8BB0;&#x5F55;&#x8FC7;&#x5C31;&#x5047;&#x8BBE;&#x4E8B;&#x5B9E;&#x4ECD;&#x7136;&#x6709;&#x6548;&#x3002;</p>
<p>&#x8BE5;&#x7CFB;&#x5217;&#x9002;&#x5408;&#x4F5C;&#x4E3A;&#x73B0;&#x6709;&#x4E3B;&#x7EBF;&#x4E4B;&#x95F4;&#x7684;&#x7A7F;&#x63D2;&#x7BC7;&#xFF1A;&#x5176;&#x4ED6;&#x4E3B;&#x7EBF;&#x8D1F;&#x8D23;&#x5EFA;&#x7ACB;&#x4F53;&#x7CFB;&#xFF0C;&#x6E90;&#x7801;&#x89E3;&#x5256;&#x8D1F;&#x8D23;&#x7528;&#x6210;&#x719F;&#x6846;&#x67B6;&#x4E0E;&#x6B63;&#x5728;&#x53D1;&#x751F;&#x7684;&#x9879;&#x76EE;&#x68C0;&#x9A8C;&#x4F53;&#x7CFB;&#x3002;&#x5B83;&#x4EEC;&#x5171;&#x4EAB;&#x6982;&#x5FF5;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#x7ED3;&#x8BBA;&#x3002;</p>
`,F=[{level:1,title:"从源码里看懂 AI 工程：系列节点路线图",children:[{level:2,title:"系列定位",children:[]},{level:2,title:"系列边界",children:[]},{level:2,title:"两条问题主线",children:[{level:3,title:"第一条：当下项目怎样把 AI 接进真实世界",children:[]},{level:3,title:"第二条：基础框架为什么长成今天这样",children:[]}]},{level:2,title:"什么源码对象值得写",children:[]},{level:2,title:"单篇结构",children:[]},{level:2,title:"第一章候选：当下项目的工程现场",children:[{level:3,title:"DeepSeek Harness 素材池",children:[]}]},{level:2,title:"第二章候选：经典框架的基础设施考古",children:[]},{level:2,title:"首批文章",children:[]},{level:2,title:"首篇建议",children:[]},{level:2,title:"更新节奏",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
