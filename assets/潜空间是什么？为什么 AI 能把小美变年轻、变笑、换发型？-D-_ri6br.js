const x={},F=`<h1 id="&#x6F5C;&#x7A7A;&#x95F4;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48; AI &#x80FD;&#x628A;&#x5C0F;&#x7F8E;&#x53D8;&#x5E74;&#x8F7B;&#x3001;&#x53D8;&#x7B11;&#x3001;&#x6362;&#x53D1;&#x578B;&#xFF1F;"><a href="#&#x6F5C;&#x7A7A;&#x95F4;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48; AI &#x80FD;&#x628A;&#x5C0F;&#x7F8E;&#x53D8;&#x5E74;&#x8F7B;&#x3001;&#x53D8;&#x7B11;&#x3001;&#x6362;&#x53D1;&#x578B;&#xFF1F;"></a>&#x6F5C;&#x7A7A;&#x95F4;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48; AI &#x80FD;&#x628A;&#x5C0F;&#x7F8E;&#x53D8;&#x5E74;&#x8F7B;&#x3001;&#x53D8;&#x7B11;&#x3001;&#x6362;&#x53D1;&#x578B;&#xFF1F;</h1>
<p>&#x4F60;&#x7ED9; AI &#x4E00;&#x5F20;&#x5C0F;&#x7F8E;&#x7684;&#x7167;&#x7247;&#xFF0C;&#x8BF4;&#xFF1A;</p>
<blockquote>
<p>&#x8BA9;&#x5979;&#x5E74;&#x8F7B;&#x4E00;&#x70B9;&#xFF0C;&#x7B11;&#x8D77;&#x6765;&#xFF0C;&#x518D;&#x6362;&#x4E00;&#x4E2A;&#x53D1;&#x578B;&#x3002;</p>
</blockquote>
<p>&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x6539;&#xFF1F;&#x53C8;&#x4E3A;&#x4EC0;&#x4E48;&#x7ECF;&#x5E38;&#x6362;&#x4E86;&#x53D1;&#x578B;&#xFF0C;&#x8FDE;&#x8138;&#x4E5F;&#x4E00;&#x8D77;&#x53D8;&#x4E86;&#xFF1F;</p>
<p>&#x5148;&#x4E0D;&#x8981;&#x60F3;&#x51E0;&#x767E;&#x4E07;&#x4E2A;&#x50CF;&#x7D20;&#xFF0C;&#x4E5F;&#x4E0D;&#x8981;&#x6025;&#x7740;&#x8BB0; Encoder&#x3001;Decoder &#x8FD9;&#x4E9B;&#x8BCD;&#x3002;</p>
<p>&#x6211;&#x4EEC;&#x5148;&#x628A;&#x5C0F;&#x7F8E;&#x7B80;&#x5316;&#x6210;&#x4E09;&#x4E2A;&#x5185;&#x90E8;&#x65CB;&#x94AE;&#xFF1A;</p>
<pre><code class="language-text">&#x5C0F;&#x7F8E; = [&#x5E74;&#x9F84;&#x611F;, &#x7B11;&#x5BB9;, &#x53D1;&#x578B;]
</code></pre>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x8BF4;&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x771F;&#x7684;&#x53EA;&#x6709;&#x4E09;&#x4E2A;&#x65CB;&#x94AE;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x8DB3;&#x591F;&#x7B80;&#x5355;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x7406;&#x89E3;&#x5B83;&#x5230;&#x5E95;&#x5728;&#x505A;&#x4EC0;&#x4E48;&#x3002;</p>
<h2 id="&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x6362;&#x4E00;&#x5957;&#x8868;&#x793A;&#xFF1F;"><a href="#&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x6362;&#x4E00;&#x5957;&#x8868;&#x793A;&#xFF1F;"></a>&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x8981;&#x6362;&#x4E00;&#x5957;&#x8868;&#x793A;&#xFF1F;</h2>
<p>&#x7A0B;&#x5E8F;&#x5458;&#x90FD;&#x77E5;&#x9053;&#xFF0C;&#x540C;&#x4E00;&#x4EFD;&#x6570;&#x636E;&#x53EF;&#x4EE5;&#x6709;&#x4E0D;&#x540C;&#x8868;&#x793A;&#x3002;</p>
<p>&#x6BD4;&#x5982;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x5BF9;&#x8C61;&#xFF0C;&#x539F;&#x59CB;&#x6570;&#x636E;&#x53EF;&#x80FD;&#x662F;&#xFF1A;</p>
<pre><code class="language-python">user = {
    <span class="hljs-string">&quot;age&quot;</span>: <span class="hljs-number">28</span>,
    <span class="hljs-string">&quot;city&quot;</span>: <span class="hljs-string">&quot;Shanghai&quot;</span>,
    <span class="hljs-string">&quot;clicks&quot;</span>: [...],
}
</code></pre>
<p>&#x63A8;&#x8350;&#x7CFB;&#x7EDF;&#x4E0D;&#x4F1A;&#x6C38;&#x8FDC;&#x76F4;&#x63A5;&#x62FF;&#x8FD9;&#x5F20;&#x5B57;&#x6BB5;&#x8868;&#x505A;&#x8BA1;&#x7B97;&#x3002;&#x5B83;&#x53EF;&#x80FD;&#x5148;&#x628A;&#x7528;&#x6237;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E32;&#x5411;&#x91CF;&#xFF1A;</p>
<pre><code class="language-python">user_vector = [<span class="hljs-number">0.8</span>, -<span class="hljs-number">0.2</span>, <span class="hljs-number">1.7</span>, ..., <span class="hljs-number">0.4</span>]
</code></pre>
<p>&#x5355;&#x72EC;&#x770B;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#xFF0C;&#x4F60;&#x5F88;&#x96BE;&#x8BF4;&#x5B83;&#x4EE3;&#x8868;&#x4EC0;&#x4E48;&#x3002;&#x4F46;&#x628A;&#x6240;&#x6709;&#x7528;&#x6237;&#x90FD;&#x8F6C;&#x6362;&#x6210;&#x5411;&#x91CF;&#x540E;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x80FD;&#x6BD4;&#x8F83;&#x5B83;&#x4EEC;&#x7684;&#x8DDD;&#x79BB;&#xFF0C;&#x5BFB;&#x627E;&#x54EA;&#x4E9B;&#x7528;&#x6237;&#x66F4;&#x76F8;&#x4F3C;&#x3002;</p>
<p>&#x539F;&#x59CB;&#x5B57;&#x6BB5;&#x662F;&#x4EBA;&#x65B9;&#x4FBF;&#x586B;&#x5199;&#x7684;&#x683C;&#x5F0F;&#xFF0C;&#x5411;&#x91CF;&#x662F;&#x6A21;&#x578B;&#x65B9;&#x4FBF;&#x8BA1;&#x7B97;&#x7684;&#x683C;&#x5F0F;&#x3002;</p>
<p>&#x56FE;&#x7247;&#x4E5F;&#x4E00;&#x6837;&#x3002;</p>
<p>&#x76F4;&#x63A5;&#x5904;&#x7406;&#x50CF;&#x7D20;&#xFF0C;&#x5C31;&#x50CF;&#x53EA;&#x770B;&#x673A;&#x5668;&#x7801;&#x53BB;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF1A;&#x4E0D;&#x662F;&#x505A;&#x4E0D;&#x5230;&#xFF0C;&#x4F46;&#x5F88;&#x96BE;&#x7A33;&#x5B9A;&#x5730;&#x627E;&#x5230;&#x201C;&#x53EA;&#x6539;&#x53D1;&#x578B;&#x3001;&#x4E0D;&#x52A8;&#x8138;&#x201D;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x6A21;&#x578B;&#x4F1A;&#x5148;&#x628A;&#x7167;&#x7247;&#x8F6C;&#x6362;&#x6210;&#x53E6;&#x4E00;&#x79CD;&#x5185;&#x90E8;&#x8868;&#x793A;&#x3002;</p>
<p>&#x5728;&#x6211;&#x4EEC;&#x7684;&#x7B80;&#x5316;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5C0F;&#x7F8E;&#x7684;&#x7167;&#x7247;
      &#x2193;
[&#x5E74;&#x9F84;&#x611F;, &#x7B11;&#x5BB9;, &#x53D1;&#x578B;]
</code></pre>
<p>&#x8FD9;&#x7EC4;&#x6570;&#x5B57;&#x6240;&#x5728;&#x7684;&#x5173;&#x7CFB;&#x7A7A;&#x95F4;&#xFF0C;&#x5C31;&#x53EB;&#x6F5C;&#x7A7A;&#x95F4;&#xFF08;Latent Space&#xFF09;&#x3002;</p>
<h2 id="&#x6F5C;&#x7A7A;&#x95F4;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x795E;&#x79D8;&#x623F;&#x95F4;"><a href="#&#x6F5C;&#x7A7A;&#x95F4;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x795E;&#x79D8;&#x623F;&#x95F4;"></a>&#x6F5C;&#x7A7A;&#x95F4;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x795E;&#x79D8;&#x623F;&#x95F4;</h2>
<p>&#x201C;&#x7A7A;&#x95F4;&#x201D;&#x8FD9;&#x4E2A;&#x8BCD;&#x5BB9;&#x6613;&#x8BA9;&#x4EBA;&#x8BEF;&#x4F1A;&#x3002;</p>
<p>&#x5B83;&#x4E0D;&#x662F;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x771F;&#x7684;&#x6709;&#x4E00;&#x95F4;&#x4E09;&#x7EF4;&#x623F;&#x95F4;&#xFF0C;&#x800C;&#x662F;&#x8BF4;&#xFF1A;&#x5F88;&#x591A;&#x6837;&#x672C;&#x90FD;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x5411;&#x91CF;&#x540E;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x6BD4;&#x8F83;&#x5B83;&#x4EEC;&#x7684;&#x8DDD;&#x79BB;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x89C2;&#x5BDF;&#x5B83;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x53D8;&#x5316;&#x65B9;&#x5411;&#x3002;</p>
<pre><code class="language-text">&#x4E0D;&#x7B11;&#x7684;&#x5C0F;&#x7F8E; &#x2192; [&#x5E74;&#x8F7B;, &#x4E0D;&#x7B11;, &#x957F;&#x53D1;]
&#x5FAE;&#x7B11;&#x7684;&#x5C0F;&#x7F8E; &#x2192; [&#x5E74;&#x8F7B;, &#x5FAE;&#x7B11;, &#x957F;&#x53D1;]
</code></pre>
<p>&#x4E24;&#x7EC4;&#x8868;&#x793A;&#x5F88;&#x63A5;&#x8FD1;&#xFF0C;&#x5DEE;&#x522B;&#x4E3B;&#x8981;&#x843D;&#x5728;&#x201C;&#x7B11;&#x5BB9;&#x201D;&#x8FD9;&#x4E00;&#x7EF4;&#x3002;</p>
<p>&#x5982;&#x679C;&#x628A;&#x201C;&#x5E74;&#x9F84;&#x611F;&#x201D;&#x4ECE; 28 &#x8C03;&#x5230; 18&#xFF0C;&#x5F97;&#x5230;&#x7684;&#x5C31;&#x662F;&#x66F4;&#x5E74;&#x8F7B;&#x7684;&#x8868;&#x793A;&#xFF1B;&#x5982;&#x679C;&#x628A;&#x201C;&#x53D1;&#x578B;&#x201D;&#x4ECE;&#x957F;&#x53D1;&#x6362;&#x6210;&#x77ED;&#x53D1;&#xFF0C;&#x5F97;&#x5230;&#x7684;&#x5C31;&#x662F;&#x53E6;&#x4E00;&#x7EC4;&#x8868;&#x793A;&#x3002;</p>
<pre><code class="language-text">[&#x5E74;&#x8F7B;, &#x4E0D;&#x7B11;, &#x957F;&#x53D1;]
          &#x2193; &#x8C03;&#x6574;&#x7B11;&#x5BB9;
[&#x5E74;&#x8F7B;, &#x5FAE;&#x7B11;, &#x957F;&#x53D1;]
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x6F5C;&#x7A7A;&#x95F4;&#x6700;&#x76F4;&#x89C2;&#x7684;&#x7528;&#x6CD5;&#xFF1A;</p>
<blockquote>
<p><strong>&#x4E0D;&#x76F4;&#x63A5;&#x6539;&#x590D;&#x6742;&#x7684;&#x539F;&#x59CB;&#x6570;&#x636E;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x6362;&#x5230;&#x66F4;&#x5BB9;&#x6613;&#x8BA1;&#x7B97;&#x7684;&#x8868;&#x793A;&#xFF0C;&#x518D;&#x4FEE;&#x6539;&#x8868;&#x793A;&#x91CC;&#x7684;&#x5173;&#x7CFB;&#x3002;</strong></p>
</blockquote>
<h2 id="&#x8FD9;&#x7EC4;&#x6570;&#x5B57;&#x662F;&#x600E;&#x4E48;&#x6765;&#x7684;&#xFF1F;"><a href="#&#x8FD9;&#x7EC4;&#x6570;&#x5B57;&#x662F;&#x600E;&#x4E48;&#x6765;&#x7684;&#xFF1F;"></a>&#x8FD9;&#x7EC4;&#x6570;&#x5B57;&#x662F;&#x600E;&#x4E48;&#x6765;&#x7684;&#xFF1F;</h2>
<p>&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x4E0D;&#x4F1A;&#x4EBA;&#x5DE5;&#x586B;&#x5199;&#x201C;&#x5E74;&#x9F84;&#x611F;&#x201D;&#x548C;&#x201C;&#x7B11;&#x5BB9;&#x201D;&#x3002;</p>
<p>&#x5B83;&#x4F1A;&#x7528;&#x4E00;&#x4E2A; Encoder&#xFF0C;&#x628A;&#x56FE;&#x7247;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x7EC4;&#x5411;&#x91CF;&#xFF1A;</p>
<pre><code class="language-text">&#x7167;&#x7247;
  &#x2193; Encoder
&#x6F5C;&#x8868;&#x793A; z
</code></pre>
<p>&#x53EF;&#x4EE5;&#x628A; Encoder &#x6682;&#x65F6;&#x7406;&#x89E3;&#x6210;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8F6C;&#x6362;&#x5668;&#xFF1A;&#x628A;&#x6A21;&#x578B;&#x4E0D;&#x65B9;&#x4FBF;&#x76F4;&#x63A5;&#x5904;&#x7406;&#x7684;&#x50CF;&#x7D20;&#xFF0C;&#x53D8;&#x6210;&#x66F4;&#x9002;&#x5408;&#x8BA1;&#x7B97;&#x7684;&#x5185;&#x90E8;&#x6570;&#x636E;&#x3002;</p>
<p>&#x5B83;&#x4E0D;&#x50CF; ZIP &#x90A3;&#x6837;&#x8FFD;&#x6C42;&#x5B8C;&#x6574;&#x4FDD;&#x5B58;&#x6BCF;&#x4E2A;&#x7EC6;&#x8282;&#x3002;&#x6A21;&#x578B;&#x66F4;&#x5728;&#x610F;&#x54EA;&#x4E9B;&#x4FE1;&#x606F;&#x5BF9;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x6709;&#x7528;&#xFF0C;&#x53EF;&#x80FD;&#x4FDD;&#x7559;&#x8EAB;&#x4EFD;&#x3001;&#x59FF;&#x52BF;&#x548C;&#x6574;&#x4F53;&#x7ED3;&#x6784;&#xFF0C;&#x5374;&#x4E22;&#x6389;&#x4E00;&#x90E8;&#x5206;&#x53D1;&#x4E1D;&#x3001;&#x7EB9;&#x7406;&#x548C;&#x80CC;&#x666F;&#x7EC6;&#x8282;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x771F;&#x5B9E;&#x7684; <code>z</code> &#x53EF;&#x80FD;&#x957F;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-python">z = [<span class="hljs-number">0.8</span>, -<span class="hljs-number">0.2</span>, <span class="hljs-number">1.7</span>, ..., <span class="hljs-number">0.4</span>]
</code></pre>
<p>&#x4F46;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x5730;&#x8BF4;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x5C31;&#x662F;&#x5E74;&#x9F84;&#xFF0C;&#x7B2C;&#x4E8C;&#x4E2A;&#x6570;&#x5B57;&#x5C31;&#x662F;&#x7B11;&#x5BB9;&#x201D;&#x3002;</p>
<p>&#x771F;&#x5B9E;&#x6F5C;&#x8868;&#x793A;&#x901A;&#x5E38;&#x6709;&#x51E0;&#x767E;&#x751A;&#x81F3;&#x51E0;&#x5343;&#x4E2A;&#x7EF4;&#x5EA6;&#xFF0C;&#x4E00;&#x4E2A;&#x7EF4;&#x5EA6;&#x53EF;&#x80FD;&#x540C;&#x65F6;&#x6DF7;&#x8FDB;&#x5149;&#x7EBF;&#x3001;&#x59FF;&#x52BF;&#x548C;&#x5916;&#x89C2;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x201C;&#x4E09;&#x4E2A;&#x65CB;&#x94AE;&#x201D;&#x53EA;&#x662F;&#x4E3A;&#x4E86;&#x8BA9;&#x6211;&#x4EEC;&#x5148;&#x7406;&#x89E3;&#x5173;&#x7CFB;&#xFF0C;&#x4E0D;&#x662F;&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x7684;&#x7ED3;&#x6784;&#x56FE;&#x3002;</p>
<h2 id="&#x6539;&#x5B8C;&#x4EE5;&#x540E;&#xFF0C;&#x600E;&#x4E48;&#x91CD;&#x65B0;&#x53D8;&#x56DE;&#x56FE;&#x7247;&#xFF1F;"><a href="#&#x6539;&#x5B8C;&#x4EE5;&#x540E;&#xFF0C;&#x600E;&#x4E48;&#x91CD;&#x65B0;&#x53D8;&#x56DE;&#x56FE;&#x7247;&#xFF1F;"></a>&#x6539;&#x5B8C;&#x4EE5;&#x540E;&#xFF0C;&#x600E;&#x4E48;&#x91CD;&#x65B0;&#x53D8;&#x56DE;&#x56FE;&#x7247;&#xFF1F;</h2>
<p>&#x5149;&#x6709;&#x8FD9;&#x7EC4;&#x6570;&#x5B57;&#x8FD8;&#x4E0D;&#x591F;&#xFF0C;&#x8FD8;&#x9700;&#x8981; Decoder&#xFF1A;</p>
<pre><code class="language-text">&#x7167;&#x7247;
  &#x2193; Encoder
&#x6F5C;&#x8868;&#x793A; z
  &#x2193; Decoder
&#x7167;&#x7247;
</code></pre>
<p>Decoder &#x4E0D;&#x662F;&#x628A;&#x539F;&#x56FE;&#x5907;&#x4EFD;&#x53D6;&#x56DE;&#x6765;&#xFF0C;&#x800C;&#x662F;&#x6839;&#x636E;&#x8BAD;&#x7EC3;&#x4E2D;&#x5B66;&#x5230;&#x7684;&#x89C4;&#x5F8B;&#xFF0C;&#x628A;&#x8FD9;&#x7EC4;&#x8868;&#x793A;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x6210;&#x4E00;&#x5F20;&#x5408;&#x7406;&#x7684;&#x56FE;&#x7247;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x201C;&#x8BA9;&#x5C0F;&#x7F8E;&#x7B11;&#x8D77;&#x6765;&#x201D;&#x53EF;&#x4EE5;&#x7B80;&#x5316;&#x6210;&#xFF1A;</p>
<pre><code class="language-python">z_new = z_original + smile_direction * <span class="hljs-number">0.5</span>
</code></pre>
<p>&#x518D;&#x628A; <code>z_new</code> &#x4EA4;&#x7ED9; Decoder&#xFF1A;</p>
<pre><code class="language-text">&#x65B0;&#x7684;&#x6F5C;&#x8868;&#x793A;
      &#x2193; Decoder
&#x5C0F;&#x7F8E;&#x7B11;&#x8D77;&#x6765;&#x7684;&#x65B0;&#x7167;&#x7247;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x7684; <code>smile_direction</code> &#x53EA;&#x662F;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x7684;&#x5199;&#x6CD5;&#x3002;&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x91CC;&#x4E0D;&#x4E00;&#x5B9A;&#x5B58;&#x5728;&#x4E00;&#x6839;&#x5E72;&#x51C0;&#x7684;&#x201C;&#x5FAE;&#x7B11;&#x8F74;&#x201D;&#xFF0C;&#x4E5F;&#x4E0D;&#x4E00;&#x5B9A;&#x80FD;&#x53EA;&#x6539;&#x53D8;&#x4E00;&#x4E2A;&#x56E0;&#x7D20;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x53D1;&#x578B;&#x65F6;&#xFF0C;&#x8138;&#x4E5F;&#x53EF;&#x80FD;&#x53D8;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x53D1;&#x578B;&#x65F6;&#xFF0C;&#x8138;&#x4E5F;&#x53EF;&#x80FD;&#x53D8;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x53D1;&#x578B;&#x65F6;&#xFF0C;&#x8138;&#x4E5F;&#x53EF;&#x80FD;&#x53D8;&#xFF1F;</h2>
<p>&#x73B0;&#x5728;&#x5C31;&#x80FD;&#x89E3;&#x91CA;&#x8FD9;&#x4E2A;&#x5E38;&#x89C1;&#x73B0;&#x8C61;&#x4E86;&#x3002;</p>
<p>&#x5728;&#x6211;&#x4EEC;&#x7684;&#x7B80;&#x5316;&#x6A21;&#x578B;&#x91CC;&#xFF0C;&#x4E09;&#x4E2A;&#x65CB;&#x94AE;&#x662F;&#x5B8C;&#x5168;&#x5206;&#x5F00;&#x7684;&#xFF1A;</p>
<pre><code class="language-text">&#x6539;&#x5E74;&#x9F84;&#x611F; &#x2192; &#x53EA;&#x52A8;&#x5E74;&#x9F84;&#x611F;
&#x6539;&#x7B11;&#x5BB9;   &#x2192; &#x53EA;&#x52A8;&#x7B11;&#x5BB9;
&#x6539;&#x53D1;&#x578B;   &#x2192; &#x53EA;&#x52A8;&#x53D1;&#x578B;
</code></pre>
<p>&#x4F46;&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x91CC;&#x7684;&#x56E0;&#x7D20;&#x5F80;&#x5F80;&#x7EA0;&#x7F20;&#x5728;&#x4E00;&#x8D77;&#xFF1A;</p>
<pre><code class="language-text">&#x53D1;&#x578B;&#x53D8;&#x5316;
  &#x251C;&#x2500;&#x2500; &#x5934;&#x53D1;&#x906E;&#x4F4F;&#x8138;&#x7684;&#x9762;&#x79EF;&#x53D8;&#x4E86;
  &#x251C;&#x2500;&#x2500; &#x8138;&#x90E8;&#x5149;&#x7EBF;&#x53EF;&#x80FD;&#x53D8;&#x4E86;
  &#x251C;&#x2500;&#x2500; &#x5934;&#x90E8;&#x59FF;&#x52BF;&#x53EF;&#x80FD;&#x4E00;&#x8D77;&#x53D8;&#x4E86;
  &#x2514;&#x2500;&#x2500; &#x8EAB;&#x4EFD;&#x7279;&#x5F81;&#x6CA1;&#x6709;&#x88AB;&#x5B8C;&#x5168;&#x4FDD;&#x7559;
</code></pre>
<p>&#x4E8E;&#x662F;&#x6A21;&#x578B;&#x627E;&#x4E0D;&#x5230;&#x4E00;&#x6761;&#x201C;&#x53EA;&#x6362;&#x53D1;&#x578B;&#x201D;&#x7684;&#x5E72;&#x51C0;&#x8DEF;&#x5F84;&#xFF0C;&#x53EA;&#x80FD;&#x91CD;&#x65B0;&#x5BFB;&#x627E;&#x4E00;&#x5F20;&#x6574;&#x4F53;&#x5408;&#x7406;&#x7684;&#x8138;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48; AI &#x6539;&#x56FE;&#x65F6;&#x7ECF;&#x5E38;&#x201C;&#x6574;&#x4F53;&#x50CF;&#xFF0C;&#x5C40;&#x90E8;&#x5374;&#x91CD;&#x65B0;&#x731C;&#x201D;&#xFF1A;</p>
<blockquote>
<p>&#x5B83;&#x4E0D;&#x662F;&#x5728;&#x539F;&#x56FE;&#x4E0A;&#x6253;&#x5F00;&#x4E00;&#x4E2A;&#x53D1;&#x578B;&#x56FE;&#x5C42;&#xFF0C;&#x800C;&#x662F;&#x5728;&#x5185;&#x90E8;&#x8868;&#x793A;&#x4E2D;&#x91CD;&#x65B0;&#x5BFB;&#x627E;&#x4E00;&#x4E2A;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
</blockquote>
<h2 id="Autoencoder&#xFF1A;&#x5148;&#x5B66;&#x4F1A;&#x8868;&#x793A;&#xFF0C;&#x518D;&#x5B66;&#x4F1A;&#x8FD8;&#x539F;"><a href="#Autoencoder&#xFF1A;&#x5148;&#x5B66;&#x4F1A;&#x8868;&#x793A;&#xFF0C;&#x518D;&#x5B66;&#x4F1A;&#x8FD8;&#x539F;"></a>Autoencoder&#xFF1A;&#x5148;&#x5B66;&#x4F1A;&#x8868;&#x793A;&#xFF0C;&#x518D;&#x5B66;&#x4F1A;&#x8FD8;&#x539F;</h2>
<p>Encoder &#x548C; Decoder &#x653E;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x5C31;&#x662F; Autoencoder&#xFF1A;</p>
<pre><code class="language-text">&#x539F;&#x59CB;&#x56FE;&#x7247;
   &#x2193; Encoder
&#x5185;&#x90E8;&#x8868;&#x793A; z
   &#x2193; Decoder
&#x91CD;&#x5EFA;&#x56FE;&#x7247;
</code></pre>
<p>&#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x6A21;&#x578B;&#x4F1A;&#x4E0D;&#x65AD;&#x6BD4;&#x8F83;&#x91CD;&#x5EFA;&#x56FE;&#x7247;&#x548C;&#x539F;&#x59CB;&#x56FE;&#x7247;&#xFF0C;&#x518D;&#x8C03;&#x6574;&#x8FD9;&#x4E24;&#x4E2A;&#x7EC4;&#x4EF6;&#x3002;</p>
<p>&#x5B83;&#x6162;&#x6162;&#x5B66;&#x4F1A;&#xFF1A;&#x54EA;&#x4E9B;&#x7ED3;&#x6784;&#x503C;&#x5F97;&#x4FDD;&#x7559;&#xFF0C;&#x54EA;&#x4E9B;&#x7EC6;&#x8282;&#x53EF;&#x4EE5;&#x538B;&#x7F29;&#xFF0C;&#x4EE5;&#x53CA;&#x600E;&#x6837;&#x4ECE;&#x4E00;&#x7EC4;&#x6570;&#x5B57;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x4E00;&#x5F20;&#x770B;&#x8D77;&#x6765;&#x5408;&#x7406;&#x7684;&#x56FE;&#x7247;&#x3002;</p>
<p>VAE&#xFF08;Variational Autoencoder&#xFF09;&#x4F1A;&#x8FDB;&#x4E00;&#x6B65;&#x7EA6;&#x675F;&#x8FD9;&#x5957;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x8BA9;&#x76F8;&#x8FD1;&#x7684;&#x8868;&#x793A;&#x66F4;&#x8FDE;&#x7EED;&#xFF0C;&#x4E5F;&#x66F4;&#x9002;&#x5408;&#x4ECE;&#x7A7A;&#x95F4;&#x91CC;&#x91C7;&#x6837;&#x65B0;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x5230;&#x8FD9;&#x91CC;&#xFF0C;&#x6F5C;&#x7A7A;&#x95F4;&#x7684;&#x4F5C;&#x7528;&#x5DF2;&#x7ECF;&#x591F;&#x6E05;&#x695A;&#x4E86;&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x201C;&#x85CF;&#x7740;&#x7B54;&#x6848;&#x7684;&#x4ED3;&#x5E93;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x6A21;&#x578B;&#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x590D;&#x6742;&#x6570;&#x636E;&#x7684;&#x4E00;&#x5957;&#x5750;&#x6807;&#x3002;</p>
<h2 id="Diffusion &#x53C8;&#x505A;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#Diffusion &#x53C8;&#x505A;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"></a>Diffusion &#x53C8;&#x505A;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x6269;&#x6563;&#x6A21;&#x578B;&#x6CA1;&#x6709;&#x6539;&#x53D8;&#x8FD9;&#x4EF6;&#x4E8B;&#x3002;</p>
<p>&#x5B83;&#x4E3B;&#x8981;&#x6539;&#x53D8;&#x7684;&#x662F;&#xFF1A;&#x600E;&#x6837;&#x4ECE;&#x4E00;&#x4E2A;&#x968F;&#x673A;&#x72B6;&#x6001;&#xFF0C;&#x9010;&#x6B65;&#x627E;&#x5230;&#x7B26;&#x5408;&#x6761;&#x4EF6;&#x7684;&#x8868;&#x793A;&#x3002;</p>
<pre><code class="language-text">&#x968F;&#x673A;&#x566A;&#x58F0;
   &#x2193; &#x4E00;&#x6B65;&#x6B65;&#x53BB;&#x566A;&#x548C;&#x8C03;&#x6574;
&#x66F4;&#x7A33;&#x5B9A;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;
   &#x2193; Decoder
&#x56FE;&#x7247;
</code></pre>
<p>&#x6587;&#x5B57;&#x63D0;&#x793A;&#x8BCD;&#x4F1A;&#x63D0;&#x4F9B;&#x65B9;&#x5411;&#xFF0C;&#x539F;&#x56FE;&#x4F1A;&#x63D0;&#x4F9B;&#x7EA6;&#x675F;&#x3002;&#x6A21;&#x578B;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x628A;&#x7ED3;&#x679C;&#x5F80;&#x6EE1;&#x8DB3;&#x8FD9;&#x4E9B;&#x6761;&#x4EF6;&#x7684;&#x533A;&#x57DF;&#x63A8;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF0C;&#x56FE;&#x7247;&#x751F;&#x6210;&#x548C;&#x56FE;&#x7247;&#x7F16;&#x8F91;&#x90FD;&#x53EF;&#x4EE5;&#x7528;&#x540C;&#x4E00;&#x5F20;&#x7B80;&#x5316;&#x5730;&#x56FE;&#x7406;&#x89E3;&#xFF1A;</p>
<pre><code class="language-text">&#x539F;&#x59CB;&#x6570;&#x636E;
   &#x2193; Encoder
&#x5185;&#x90E8;&#x8868;&#x793A;
   &#x2193; &#x6BD4;&#x8F83;&#x3001;&#x79FB;&#x52A8;&#x3001;&#x751F;&#x6210;
&#x65B0;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;
   &#x2193; Decoder
&#x8F93;&#x51FA;&#x56FE;&#x7247;
</code></pre>
<h2 id="&#x56DE;&#x5230;&#x5C0F;&#x7F8E;"><a href="#&#x56DE;&#x5230;&#x5C0F;&#x7F8E;"></a>&#x56DE;&#x5230;&#x5C0F;&#x7F8E;</h2>
<p>&#x73B0;&#x5728;&#x91CD;&#x65B0;&#x8FD0;&#x884C;&#x4E00;&#x904D;&#x6700;&#x5F00;&#x59CB;&#x7684;&#x8BF7;&#x6C42;&#xFF1A;</p>
<pre><code class="language-text">&#x5C0F;&#x7F8E;&#x7684;&#x7167;&#x7247;
   &#x2193; Encoder
[&#x5E74;&#x9F84;&#x611F;, &#x7B11;&#x5BB9;, &#x53D1;&#x578B;]
   &#x2193; &#x8C03;&#x6574;&#x5176;&#x4E2D;&#x7684;&#x5173;&#x7CFB;
[&#x66F4;&#x5E74;&#x8F7B;, &#x5FAE;&#x7B11;, &#x65B0;&#x53D1;&#x578B;]
   &#x2193; Decoder
&#x65B0;&#x7684;&#x5C0F;&#x7F8E;
</code></pre>
<p>&#x771F;&#x5B9E;&#x6A21;&#x578B;&#x5F53;&#x7136;&#x6CA1;&#x6709;&#x8FD9;&#x4E48;&#x6574;&#x9F50;&#x7684;&#x4E09;&#x4E2A;&#x65CB;&#x94AE;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x4E2A;&#x7B80;&#x5316;&#x4F8B;&#x5B50;&#x5DF2;&#x7ECF;&#x8BF4;&#x660E;&#x4E86;&#x6F5C;&#x7A7A;&#x95F4;&#x7684;&#x6838;&#x5FC3;&#xFF1A;</p>
<blockquote>
<p><strong>&#x6A21;&#x578B;&#x5148;&#x628A;&#x590D;&#x6742;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x81EA;&#x5DF1;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x518D;&#x5728;&#x8FD9;&#x5957;&#x8868;&#x793A;&#x4E0A;&#x8BA1;&#x7B97;&#xFF1B;&#x539F;&#x59CB;&#x6570;&#x636E;&#x53EA;&#x662F;&#x8F93;&#x5165;&#x548C;&#x8F93;&#x51FA;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x6A21;&#x578B;&#x771F;&#x6B63;&#x5DE5;&#x4F5C;&#x7684;&#x5730;&#x65B9;&#x3002;</strong></p>
</blockquote>
<p>&#x6240;&#x4EE5; AI &#x80FD;&#x628A;&#x5C0F;&#x7F8E;&#x53D8;&#x5E74;&#x8F7B;&#x3001;&#x53D8;&#x7B11;&#x3001;&#x6362;&#x53D1;&#x578B;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x5B66;&#x4F1A;&#x4E86;&#x5728;&#x5185;&#x90E8;&#x8868;&#x793A;&#x4E2D;&#x6539;&#x53D8;&#x67D0;&#x4E9B;&#x5173;&#x7CFB;&#x3002;</p>
<p>&#x800C;&#x5B83;&#x6709;&#x65F6;&#x8FDE;&#x8138;&#x4E5F;&#x4E00;&#x8D77;&#x6362;&#x6389;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x8FD9;&#x4E9B;&#x5173;&#x7CFB;&#x8FD8;&#x6CA1;&#x6709;&#x88AB;&#x5206;&#x5F97;&#x8DB3;&#x591F;&#x5F00;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"潜空间是什么？为什么 AI 能把小美变年轻、变笑、换发型？",children:[{level:2,title:"模型为什么要换一套表示？",children:[]},{level:2,title:"潜空间不是一个神秘房间",children:[]},{level:2,title:"这组数字是怎么来的？",children:[]},{level:2,title:"改完以后，怎么重新变回图片？",children:[]},{level:2,title:"为什么换发型时，脸也可能变？",children:[]},{level:2,title:"Autoencoder：先学会表示，再学会还原",children:[]},{level:2,title:"Diffusion 又做了什么？",children:[]},{level:2,title:"回到小美",children:[]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
