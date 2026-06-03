const x={},F=`<h1 id="&#x4EE3;&#x7801;&#x5B9A;&#x4E49;&#x7ED3;&#x6784;&#xFF0C;&#x6743;&#x91CD;&#x5B58;&#x50A8;&#x77E5;&#x8BC6;&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x5927;&#x6A21;&#x578B;&#x5982;&#x4F55;&#x63A8;&#x7406;"><a href="#&#x4EE3;&#x7801;&#x5B9A;&#x4E49;&#x7ED3;&#x6784;&#xFF0C;&#x6743;&#x91CD;&#x5B58;&#x50A8;&#x77E5;&#x8BC6;&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x5927;&#x6A21;&#x578B;&#x5982;&#x4F55;&#x63A8;&#x7406;"></a>&#x4EE3;&#x7801;&#x5B9A;&#x4E49;&#x7ED3;&#x6784;&#xFF0C;&#x6743;&#x91CD;&#x5B58;&#x50A8;&#x77E5;&#x8BC6;&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x5927;&#x6A21;&#x578B;&#x5982;&#x4F55;&#x63A8;&#x7406;</h1>
<p>&#x4E0B;&#x8F7D;&#x4E00;&#x4E2A;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x65F6;&#xFF0C;&#x7ECF;&#x5E38;&#x4F1A;&#x770B;&#x5230;&#x4E00;&#x79CD;&#x5947;&#x602A;&#x73B0;&#x8C61;&#xFF1A;&#x6A21;&#x578B;&#x4EE3;&#x7801;&#x53EA;&#x6709;&#x51E0;&#x5341; KB&#xFF0C;&#x6743;&#x91CD;&#x6587;&#x4EF6;&#x5374;&#x6709;&#x51E0;&#x4E2A; GB&#xFF0C;&#x751A;&#x81F3;&#x51E0;&#x5341; GB&#x3002;</p>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x5DEE;&#x8DDD;&#x8FD9;&#x4E48;&#x5927;&#xFF1F;&#x6A21;&#x578B;&#x7684;&#x77E5;&#x8BC6;&#x5230;&#x5E95;&#x5B58;&#x653E;&#x5728;&#x54EA;&#x91CC;&#xFF1F;&#x5F53;&#x6211;&#x4EEC;&#x8F93;&#x5165;&#x4E00;&#x53E5;&#x8BDD;&#x65F6;&#xFF0C;&#x4EE3;&#x7801;&#x548C;&#x6743;&#x91CD;&#x53C8;&#x662F;&#x5982;&#x4F55;&#x914D;&#x5408;&#xFF0C;&#x6700;&#x7EC8;&#x751F;&#x6210;&#x7ED3;&#x679C;&#x7684;&#xFF1F;</p>
<p>&#x8981;&#x7406;&#x89E3;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x5148;&#x7814;&#x7A76; Transformer &#x6216;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x3002;&#x6211;&#x4EEC;&#x4ECE;&#x4E00;&#x4E2A;&#x53EA;&#x6709; 3 &#x4E2A;&#x53C2;&#x6570;&#x7684;&#x5C0F;&#x6A21;&#x578B;&#x5F00;&#x59CB;&#xFF0C;&#x4E00;&#x6B65;&#x6B65;&#x8D70;&#x5B8C;&#x6574;&#x4E2A;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x3002;</p>
<h2 id="&#x5148;&#x642D;&#x4E00;&#x4E2A;&#x6700;&#x5C0F;&#x6A21;&#x578B;"><a href="#&#x5148;&#x642D;&#x4E00;&#x4E2A;&#x6700;&#x5C0F;&#x6A21;&#x578B;"></a>&#x5148;&#x642D;&#x4E00;&#x4E2A;&#x6700;&#x5C0F;&#x6A21;&#x578B;</h2>
<p>&#x5047;&#x8BBE;&#x6211;&#x8981;&#x505A;&#x4E00;&#x4E2A;&#x5224;&#x65AD;&#x5929;&#x6C14;&#x7684;&#x5C0F;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x8F93;&#x5165;&#x4E24;&#x4E2A;&#x6570;&#xFF1A;</p>
<ul>
<li>&#x6E29;&#x5EA6;</li>
<li>&#x6E7F;&#x5EA6;</li>
</ul>
<p>&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x6570;&#xFF1A;</p>
<ul>
<li>&#x9002;&#x5408;&#x51FA;&#x95E8;&#x7684;&#x5206;&#x6570;</li>
</ul>
<p>&#x5206;&#x6570;&#x8D8A;&#x9AD8;&#xFF0C;&#x8D8A;&#x9002;&#x5408;&#x51FA;&#x95E8;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x5199;&#x51FA;&#x6765;&#x53EA;&#x6709;&#x51E0;&#x884C;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">WeatherModel</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self</span>):</span>
        self.w1 = <span class="hljs-literal">None</span>
        self.w2 = <span class="hljs-literal">None</span>
        self.b  = <span class="hljs-literal">None</span>

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, temp, humidity</span>):</span>
        <span class="hljs-keyword">return</span> temp * self.w1 + humidity * self.w2 + self.b
</code></pre>
<p>&#x4EE3;&#x7801;&#x5B9A;&#x4E49;&#x4E86;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x516C;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">&#x5206;&#x6570; = &#x6E29;&#x5EA6; &#xD7; w1 + &#x6E7F;&#x5EA6; &#xD7; w2 + b
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x5F88;&#x91CD;&#x8981;&#x7684;&#x4E8B;&#x5B9E;&#xFF1A;</p>
<p>&#x4EE3;&#x7801;&#x53EA;&#x89C4;&#x5B9A;&#x4E86;&#xFF1A;</p>
<blockquote>
<p>&#x8FD9;&#x91CC;&#x9700;&#x8981;&#x4E09;&#x4E2A;&#x6570;&#x5B57;&#x3002;</p>
</blockquote>
<p>&#x4F46;&#x5B83;&#x5E76;&#x6CA1;&#x6709;&#x89C4;&#x5B9A;&#xFF1A;</p>
<blockquote>
<p>&#x8FD9;&#x4E09;&#x4E2A;&#x6570;&#x5B57;&#x5177;&#x4F53;&#x662F;&#x591A;&#x5C11;&#x3002;</p>
</blockquote>
<p>&#x6B64;&#x65F6;&#xFF1A;</p>
<pre><code class="language-text">w1 = ?
w2 = ?
b  = ?
</code></pre>
<p>&#x90FD;&#x8FD8;&#x662F;&#x7A7A;&#x7684;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x5F20;&#x84DD;&#x56FE;&#x3002;</p>
<p>&#x5B83;&#x63CF;&#x8FF0;&#x4E86;&#xFF1A;</p>
<ul>
<li>&#x6709;&#x54EA;&#x4E9B;&#x53D8;&#x91CF;</li>
<li>&#x600E;&#x4E48;&#x8FDE;&#x63A5;</li>
<li>&#x5E94;&#x8BE5;&#x6267;&#x884C;&#x4EC0;&#x4E48;&#x8BA1;&#x7B97;</li>
</ul>
<p>&#x4F46;&#x5B83;&#x672C;&#x8EAB;&#x5E76;&#x4E0D;&#x5305;&#x542B;&#x77E5;&#x8BC6;&#x3002;</p>
<h2 id="&#x8BAD;&#x7EC3;&#x4E4B;&#x540E;&#xFF0C;&#x6743;&#x91CD;&#x6765;&#x4E86;"><a href="#&#x8BAD;&#x7EC3;&#x4E4B;&#x540E;&#xFF0C;&#x6743;&#x91CD;&#x6765;&#x4E86;"></a>&#x8BAD;&#x7EC3;&#x4E4B;&#x540E;&#xFF0C;&#x6743;&#x91CD;&#x6765;&#x4E86;</h2>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6536;&#x96C6;&#x4E86;&#x5F88;&#x591A;&#x5386;&#x53F2;&#x5929;&#x6C14;&#x6570;&#x636E;&#xFF1A;</p>
<pre><code class="language-text">&#x6E29;&#x5EA6;  &#x6E7F;&#x5EA6;  &#x662F;&#x5426;&#x9002;&#x5408;&#x51FA;&#x95E8;
25    80    &#x5426;
23    40    &#x662F;
30    35    &#x662F;
18    95    &#x5426;
...
</code></pre>
<p>&#x8BAD;&#x7EC3;&#x7684;&#x8FC7;&#x7A0B;&#xFF0C;&#x5C31;&#x662F;&#x4E0D;&#x65AD;&#x8C03;&#x6574; w1&#x3001;w2&#x3001;b&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x8D8A;&#x6765;&#x8D8A;&#x63A5;&#x8FD1;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x7ECF;&#x8FC7;&#x5927;&#x91CF;&#x8FED;&#x4EE3;&#x540E;&#xFF0C;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">w1 = 0.7
w2 = -0.3
b  = 5.0
</code></pre>
<p>&#x8FD9;&#x4E09;&#x4E2A;&#x6570;&#x5B57;&#x5C31;&#x662F;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x4EBA;&#x4F1A;&#x89C9;&#x5F97;&#xFF1A;</p>
<blockquote>
<p>&#x4E0D;&#x5C31;&#x662F;&#x4E09;&#x4E2A;&#x6570;&#x5B57;&#x5417;&#xFF1F;</p>
</blockquote>
<p>&#x4F46;&#x8FD9;&#x91CC;&#x5176;&#x5B9E;&#x53D1;&#x751F;&#x4E86;&#x4E00;&#x4EF6;&#x66F4;&#x91CD;&#x8981;&#x7684;&#x4E8B;&#x60C5;&#x3002;</p>
<p>&#x8BAD;&#x7EC3;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x539F;&#x59CB;&#x5929;&#x6C14;&#x6570;&#x636E;&#x5E76;&#x4E0D;&#x4F1A;&#x8DDF;&#x7740;&#x6A21;&#x578B;&#x4E00;&#x8D77;&#x4FDD;&#x5B58;&#x3002;</p>
<p>&#x4FDD;&#x5B58;&#x4E0B;&#x6765;&#x7684;&#x53EA;&#x6709;&#xFF1A;</p>
<pre><code class="language-text">0.7
-0.3
5.0
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x6570;&#x5B57;&#x5176;&#x5B9E;&#x662F;&#x5386;&#x53F2;&#x7ECF;&#x9A8C;&#x7684;&#x538B;&#x7F29;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF1A;</p>
<pre><code class="language-text">&#x6743;&#x91CD; &#x2260; &#x666E;&#x901A;&#x6570;&#x5B57;

&#x6743;&#x91CD; = &#x4ECE;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E2D;&#x63D0;&#x70BC;&#x51FA;&#x6765;&#x7684;&#x7ECF;&#x9A8C;
</code></pre>
<p>&#x6A21;&#x578B;&#x5B66;&#x5230;&#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x88AB;&#x7F16;&#x7801;&#x8FDB;&#x4E86;&#x8FD9;&#x4E9B;&#x6570;&#x5B57;&#x91CC;&#x3002;</p>
<p>&#x5BF9;&#x4E8E; GPT &#x6765;&#x8BF4;&#xFF0C;&#x9053;&#x7406;&#x5B8C;&#x5168;&#x4E00;&#x6837;&#x3002;</p>
<p>&#x533A;&#x522B;&#x53EA;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5929;&#x6C14;&#x6A21;&#x578B;
3 &#x4E2A;&#x53C2;&#x6570;

GPT-3
1750 &#x4EBF;&#x4E2A;&#x53C2;&#x6570;
</code></pre>
<p>&#x53C2;&#x6570;&#x6570;&#x91CF;&#x6269;&#x5927;&#x4E86;&#x51E0;&#x5341;&#x4EBF;&#x500D;&#xFF0C;&#x4F46;&#x672C;&#x8D28;&#x6CA1;&#x6709;&#x53D8;&#x5316;&#x3002;</p>
<h2 id="&#x8DD1;&#x4E00;&#x904D;&#xFF1A;&#x6570;&#x5B57;&#x7684;&#x65C5;&#x7A0B;"><a href="#&#x8DD1;&#x4E00;&#x904D;&#xFF1A;&#x6570;&#x5B57;&#x7684;&#x65C5;&#x7A0B;"></a>&#x8DD1;&#x4E00;&#x904D;&#xFF1A;&#x6570;&#x5B57;&#x7684;&#x65C5;&#x7A0B;</h2>
<p>&#x5047;&#x8BBE;&#x4ECA;&#x5929;&#xFF1A;</p>
<pre><code class="language-text">&#x6E29;&#x5EA6; = 25
&#x6E7F;&#x5EA6; = 80
</code></pre>
<p>&#x8F93;&#x5165;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x9996;&#x5148;&#x628A;&#x6743;&#x91CD;&#x4EE3;&#x5165;&#x516C;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">temp &#xD7; 0.7 + humidity &#xD7; (-0.3) + 5.0
</code></pre>
<p>&#x518D;&#x628A;&#x8F93;&#x5165;&#x4EE3;&#x8FDB;&#x53BB;&#xFF1A;</p>
<pre><code class="language-text">25 &#xD7; 0.7 + 80 &#xD7; (-0.3) + 5.0
</code></pre>
<p>&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#xFF1A;</p>
<pre><code class="language-text">25 &#xD7; 0.7 = 17.5

80 &#xD7; (-0.3) = -24.0
</code></pre>
<p>&#x6700;&#x540E;&#xFF1A;</p>
<pre><code class="language-text">17.5 + (-24.0) + 5.0

= -1.5
</code></pre>
<p>&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code class="language-text">-1.5
</code></pre>
<p>&#x6A21;&#x578B;&#x8BA4;&#x4E3A;&#x4ECA;&#x5929;&#x4E0D;&#x592A;&#x9002;&#x5408;&#x51FA;&#x95E8;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4E00;&#x6B21;&#x5B8C;&#x6574;&#x63A8;&#x7406;&#x3002;</p>
<p>&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF1A;</p>
<pre><code class="language-text">&#x4EE3;&#x7801;&#x51B3;&#x5B9A;&#x600E;&#x4E48;&#x7B97;

&#x6743;&#x91CD;&#x51B3;&#x5B9A;&#x7528;&#x4EC0;&#x4E48;&#x6570;&#x5B57;&#x7B97;
</code></pre>
<p>&#x4E24;&#x8005;&#x7F3A;&#x4E00;&#x4E0D;&#x53EF;&#x3002;</p>
<h2 id="&#x52A0;&#x8F7D;&#x6743;&#x91CD;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x586B;&#x7A7A;"><a href="#&#x52A0;&#x8F7D;&#x6743;&#x91CD;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x586B;&#x7A7A;"></a>&#x52A0;&#x8F7D;&#x6743;&#x91CD;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x586B;&#x7A7A;</h2>
<p>&#x5F88;&#x591A;&#x4EBA;&#x6BCF;&#x5929;&#x90FD;&#x4F1A;&#x5199;&#xFF1A;</p>
<pre><code class="language-python">model.load_state_dict(torch.load(<span class="hljs-string">&quot;weights.pth&quot;</span>))
</code></pre>
<p>&#x4F46;&#x5F88;&#x5C11;&#x53BB;&#x60F3;&#x8FD9;&#x53E5;&#x8BDD;&#x5230;&#x5E95;&#x5E72;&#x4E86;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x5728;&#x6211;&#x4EEC;&#x7684;&#x4F8B;&#x5B50;&#x91CC;&#xFF1A;</p>
<pre><code class="language-text">weights.pth
</code></pre>
<p>&#x91CC;&#x9762;&#x5B58;&#x7684;&#x5176;&#x5B9E;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">w1 = 0.7
w2 = -0.3
b  = 5.0
</code></pre>
<p>&#x52A0;&#x8F7D;&#x65F6;&#x505A;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x672C;&#x8D28;&#x7B49;&#x4EF7;&#x4E8E;&#xFF1A;</p>
<pre><code class="language-python">model.w1 = <span class="hljs-number">0.7</span>
model.w2 = -<span class="hljs-number">0.3</span>
model.b  = <span class="hljs-number">5.0</span>
</code></pre>
<p>&#x5C31;&#x8FD9;&#x4E48;&#x7B80;&#x5355;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x795E;&#x79D8;&#x8BA1;&#x7B97;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x81EA;&#x52A8;&#x63A8;&#x7406;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x3002;</p>
<p>&#x53EA;&#x662F;&#x628A;&#x6570;&#x5B57;&#x6309;&#x7167;&#x540D;&#x5B57;&#x5BF9;&#x5E94;&#x8D77;&#x6765;&#xFF1A;</p>
<pre><code class="language-text">w1 &#x2192; w1

w2 &#x2192; w2

b &#x2192; b
</code></pre>
<p>&#x7136;&#x540E;&#x590D;&#x5236;&#x8FDB;&#x53BB;&#x3002;</p>
<p>&#x52A0;&#x8F7D;&#x5B8C;&#x6210;&#x540E;&#xFF1A;</p>
<pre><code class="language-text">&#x7A7A;&#x84DD;&#x56FE;
+
&#x5177;&#x4F53;&#x6570;&#x5B57;
=
&#x5B8C;&#x6574;&#x6A21;&#x578B;
</code></pre>
<h2 id="&#x7ED3;&#x6784;&#x548C;&#x6743;&#x91CD;&#xFF0C;&#x5230;&#x5E95;&#x8C01;&#x66F4;&#x91CD;&#x8981;&#xFF1F;"><a href="#&#x7ED3;&#x6784;&#x548C;&#x6743;&#x91CD;&#xFF0C;&#x5230;&#x5E95;&#x8C01;&#x66F4;&#x91CD;&#x8981;&#xFF1F;"></a>&#x7ED3;&#x6784;&#x548C;&#x6743;&#x91CD;&#xFF0C;&#x5230;&#x5E95;&#x8C01;&#x66F4;&#x91CD;&#x8981;&#xFF1F;</h2>
<p>&#x4E00;&#x4E2A;&#x5BB9;&#x6613;&#x88AB;&#x5FFD;&#x89C6;&#x7684;&#x4E8B;&#x5B9E;&#x662F;&#xFF1A;</p>
<p>&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x7ED3;&#x6784;&#xFF0C;&#x53EF;&#x4EE5;&#x642D;&#x914D;&#x5F88;&#x591A;&#x4E0D;&#x540C;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">&#x540C;&#x4E00;&#x4E2A; Transformer &#x67B6;&#x6784;
&#x2193;
&#x9884;&#x8BAD;&#x7EC3;&#x6743;&#x91CD; A
&#x2192; &#x82F1;&#x6587;&#x6A21;&#x578B;

&#x9884;&#x8BAD;&#x7EC3;&#x6743;&#x91CD; B
&#x2192; &#x4E2D;&#x6587;&#x6A21;&#x578B;

&#x9884;&#x8BAD;&#x7EC3;&#x6743;&#x91CD; C
&#x2192; &#x4EE3;&#x7801;&#x6A21;&#x578B;
</code></pre>
<p>&#x7ED3;&#x6784;&#x6CA1;&#x53D8;&#x3002;</p>
<p>&#x53D8;&#x5316;&#x7684;&#x662F;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x7ED3;&#x6784; = &#x5927;&#x8111;

&#x6A21;&#x578B;&#x6743;&#x91CD; = &#x8BB0;&#x5FC6;
</code></pre>
<p>&#x6216;&#x8005;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x7ED3;&#x6784; = &#x795E;&#x7ECF;&#x7CFB;&#x7EDF;

&#x6A21;&#x578B;&#x6743;&#x91CD; = &#x5B66;&#x5230;&#x7684;&#x77E5;&#x8BC6;
</code></pre>
<p>&#x56E0;&#x6B64;&#x771F;&#x6B63;&#x51B3;&#x5B9A;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x7684;&#xFF0C;&#x5F80;&#x5F80;&#x4E0D;&#x662F;&#x7ED3;&#x6784;&#x6587;&#x4EF6;&#xFF0C;&#x800C;&#x662F;&#x6743;&#x91CD;&#x6587;&#x4EF6;&#x3002;</p>
<h2 id="&#x53C2;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x7A81;&#x7136;&#x7206;&#x70B8;&#xFF1F;"><a href="#&#x53C2;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x7A81;&#x7136;&#x7206;&#x70B8;&#xFF1F;"></a>&#x53C2;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x7A81;&#x7136;&#x7206;&#x70B8;&#xFF1F;</h2>
<p>&#x5728;&#x5929;&#x6C14;&#x6A21;&#x578B;&#x91CC;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#x6570;&#x91CF; = 2

&#x53C2;&#x6570;&#x6570;&#x91CF; = 2
</code></pre>
<p>&#x5F88;&#x5BB9;&#x6613;&#x7406;&#x89E3;&#x3002;</p>
<p>&#x4F46;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x89C4;&#x6A21;&#x4E00;&#x5927;&#xFF0C;&#x60C5;&#x51B5;&#x7ACB;&#x523B;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#xFF1A;</p>
<pre><code class="language-text">1000 &#x4E2A;&#x8F93;&#x5165;
&#x2193;
1000 &#x4E2A;&#x8F93;&#x51FA;
</code></pre>
<p>&#x5982;&#x679C;&#x6BCF;&#x4E2A;&#x8F93;&#x51FA;&#x90FD;&#x9700;&#x8981;&#x770B;&#x5230;&#x6240;&#x6709;&#x8F93;&#x5165;&#xFF1A;</p>
<pre><code class="language-text">1000 &#xD7; 1000 = 1,000,000
</code></pre>
<p>&#x5C31;&#x9700;&#x8981; 100 &#x4E07;&#x4E2A;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x518D;&#x8FDB;&#x4E00;&#x6B65;&#xFF1A;</p>
<pre><code class="language-text">8192 &#x4E2A;&#x8F93;&#x5165;
&#x2193;
8192 &#x4E2A;&#x8F93;&#x51FA;
</code></pre>
<p>&#x5BF9;&#x5E94;&#xFF1A;</p>
<pre><code class="language-text">8192 &#xD7; 8192 = 67,108,864
</code></pre>
<p>&#x5355;&#x4E2A;&#x77E9;&#x9635;&#x5C31;&#x6709; 6700 &#x591A;&#x4E07;&#x4E2A;&#x53C2;&#x6570;&#x3002;</p>
<p>&#x800C; GPT &#x7684;&#x4E00;&#x5C42;&#x91CC;&#x4E0D;&#x6B62;&#x4E00;&#x4E2A;&#x77E9;&#x9635;&#x3002;</p>
<p>&#x51E0;&#x5341;&#x5C42;&#x751A;&#x81F3;&#x4E0A;&#x767E;&#x5C42;&#x53E0;&#x8D77;&#x6765;&#x4E4B;&#x540E;&#xFF0C;&#x53C2;&#x6570;&#x6570;&#x91CF;&#x5F88;&#x5FEB;&#x8FBE;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">70 &#x4EBF;
700 &#x4EBF;
1750 &#x4EBF;
</code></pre>
<p>&#x7EA7;&#x522B;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x6743;&#x91CD;&#x6587;&#x4EF6;&#x8D8A;&#x6765;&#x8D8A;&#x5927;&#xFF0C;&#x4E0D;&#x662F;&#x56E0;&#x4E3A;&#x4EE3;&#x7801;&#x53D8;&#x590D;&#x6742;&#x4E86;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x4E3A;&#x9700;&#x8981;&#x4FDD;&#x5B58;&#x7684;&#x6570;&#x5B57;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4EE3;&#x7801;&#x53EA;&#x6709;&#x51E0;&#x767E;&#x884C;&#xFF0C;&#x6743;&#x91CD;&#x5374;&#x6709;&#x51E0;&#x5341; GB&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4EE3;&#x7801;&#x53EA;&#x6709;&#x51E0;&#x767E;&#x884C;&#xFF0C;&#x6743;&#x91CD;&#x5374;&#x6709;&#x51E0;&#x5341; GB&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4EE3;&#x7801;&#x53EA;&#x6709;&#x51E0;&#x767E;&#x884C;&#xFF0C;&#x6743;&#x91CD;&#x5374;&#x6709;&#x51E0;&#x5341; GB&#xFF1F;</h2>
<p>&#x770B;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x4F8B;&#x5B50;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x4EE3;&#x7801;&#x91CC;&#x5199;&#x7740;&#xFF1A;</p>
<pre><code class="language-python">nn.Linear(<span class="hljs-number">768</span>, <span class="hljs-number">768</span>)
</code></pre>
<p>&#x8FD9;&#x4E00;&#x884C;&#x4EE3;&#x7801;&#x53EA;&#x6709;&#x5341;&#x51E0;&#x4E2A;&#x5B57;&#x7B26;&#x3002;</p>
<p>&#x4F46;&#x5B83;&#x5BF9;&#x5E94;&#x7684;&#x6743;&#x91CD;&#x77E9;&#x9635;&#x5927;&#x5C0F;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">768 &#xD7; 768 = 589,824
</code></pre>
<p>&#x63A5;&#x8FD1; 59 &#x4E07;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;&#x3002;</p>
<p>&#x4EE3;&#x7801;&#x63CF;&#x8FF0;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x91CC;&#x6709;&#x4E2A; 768&#xD7;768 &#x7684;&#x77E9;&#x9635;
</code></pre>
<p>&#x6743;&#x91CD;&#x4FDD;&#x5B58;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x77E9;&#x9635;&#x7B2C; 1 &#x4E2A;&#x683C;&#x5B50;&#x662F;&#x591A;&#x5C11;
&#x77E9;&#x9635;&#x7B2C; 2 &#x4E2A;&#x683C;&#x5B50;&#x662F;&#x591A;&#x5C11;
...
&#x77E9;&#x9635;&#x7B2C; 589824 &#x4E2A;&#x683C;&#x5B50;&#x662F;&#x591A;&#x5C11;
</code></pre>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<pre><code class="language-text">&#x4EE3;&#x7801;&#x8D1F;&#x8D23;&#x63CF;&#x8FF0;&#x89C4;&#x683C;

&#x6743;&#x91CD;&#x8D1F;&#x8D23;&#x586B;&#x6EE1;&#x5185;&#x5BB9;
</code></pre>
<p>&#x89C4;&#x683C;&#x4E0D;&#x4F1A;&#x53D8;&#x5F97;&#x7279;&#x522B;&#x5927;&#x3002;</p>
<p>&#x5185;&#x5BB9;&#x53EF;&#x4EE5;&#x65E0;&#x9650;&#x589E;&#x957F;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x7ED3;&#x6784;
&#x51E0; KB &#xFF5E; &#x51E0; MB

&#x6A21;&#x578B;&#x6743;&#x91CD;
&#x51E0; GB &#xFF5E; &#x51E0;&#x767E; GB
</code></pre>
<h2 id="&#x8FDB;&#x5165; GPU &#x4E4B;&#x540E;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x8FDB;&#x5165; GPU &#x4E4B;&#x540E;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x8FDB;&#x5165; GPU &#x4E4B;&#x540E;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x52A0;&#x8F7D;&#x5B8C;&#x6210;&#x540E;&#xFF0C;&#x6743;&#x91CD;&#x4F1A;&#x88AB;&#x653E;&#x8FDB;&#x663E;&#x5B58;&#x3002;</p>
<p>&#x7136;&#x540E;&#x5F00;&#x59CB;&#x63A8;&#x7406;&#x3002;</p>
<p>CPU &#x548C; GPU &#x7684;&#x5206;&#x5DE5;&#x53EF;&#x4EE5;&#x7B80;&#x5355;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">CPU = &#x6307;&#x6325;

GPU = &#x5E72;&#x6D3B;
</code></pre>
<p>CPU &#x8D1F;&#x8D23;&#x544A;&#x8BC9; GPU&#xFF1A;</p>
<pre><code class="language-text">&#x6267;&#x884C;&#x7B2C; 1 &#x5C42;
&#x6267;&#x884C;&#x7B2C; 2 &#x5C42;
&#x6267;&#x884C;&#x7B2C; 3 &#x5C42;
...
</code></pre>
<p>GPU &#x8D1F;&#x8D23;&#x771F;&#x6B63;&#x8BA1;&#x7B97;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">768&#xD7;768 &#x77E9;&#x9635;
&#x4E58;
768&#xD7;1 &#x5411;&#x91CF;
</code></pre>
<p>&#x6700;&#x7EC8;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">768 &#x4E2A;&#x8F93;&#x51FA;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x8F93;&#x51FA;&#x4E4B;&#x95F4;&#x4E92;&#x4E0D;&#x4F9D;&#x8D56;&#x3002;</p>
<p>&#x4E8E;&#x662F; GPU &#x53EF;&#x4EE5;&#x628A;&#x4EFB;&#x52A1;&#x62C6;&#x7ED9;&#x5927;&#x91CF;&#x8BA1;&#x7B97;&#x5355;&#x5143;&#x540C;&#x65F6;&#x6267;&#x884C;&#x3002;</p>
<p>GPU &#x4E4B;&#x6240;&#x4EE5;&#x5FEB;&#xFF0C;&#x4E0D;&#x662F;&#x56E0;&#x4E3A;&#x5355;&#x4E2A;&#x8BA1;&#x7B97;&#x7279;&#x522B;&#x5F3A;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x4E3A;&#x80FD;&#x540C;&#x65F6;&#x505A;&#x5927;&#x91CF;&#x76F8;&#x540C;&#x8BA1;&#x7B97;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x63A8;&#x7406;&#x524D;&#x5FC5;&#x987B;&#x5148;&#x628A;&#x6743;&#x91CD;&#x642C;&#x8FDB;&#x663E;&#x5B58;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x63A8;&#x7406;&#x524D;&#x5FC5;&#x987B;&#x5148;&#x628A;&#x6743;&#x91CD;&#x642C;&#x8FDB;&#x663E;&#x5B58;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x63A8;&#x7406;&#x524D;&#x5FC5;&#x987B;&#x5148;&#x628A;&#x6743;&#x91CD;&#x642C;&#x8FDB;&#x663E;&#x5B58;&#xFF1F;</h2>
<p>&#x5F88;&#x591A;&#x4EBA;&#x4F1A;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x6743;&#x91CD;&#x4E0D;&#x662F;&#x653E;&#x5728; SSD &#x91CC;&#x5417;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8981;&#x5360;&#x663E;&#x5B58;&#xFF1F;</p>
</blockquote>
<p>&#x539F;&#x56E0;&#x5F88;&#x7B80;&#x5355;&#xFF1A;</p>
<p>&#x63A8;&#x7406;&#x65F6;&#x4F1A;&#x9891;&#x7E41;&#x8BBF;&#x95EE;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x6709;&#xFF1A;</p>
<pre><code class="language-text">70B &#x53C2;&#x6570;
</code></pre>
<p>&#x4F7F;&#x7528; FP16 &#x5B58;&#x50A8;&#xFF1A;</p>
<pre><code class="language-text">70B &#xD7; 2 Byte

&#x2248; 140GB
</code></pre>
<p>&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x8BCD;&#x65F6;&#xFF0C;&#x51E0;&#x4E4E;&#x6240;&#x6709;&#x5C42;&#x90FD;&#x4F1A;&#x8BBF;&#x95EE;&#x81EA;&#x5DF1;&#x7684;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6BCF;&#x6B21;&#x90FD;&#x53BB; SSD &#x8BFB;&#x53D6;&#xFF1A;</p>
<pre><code class="language-text">SSD &#x5E26;&#x5BBD;
&#x2248; 7GB/s
</code></pre>
<p>&#x90A3;&#x4E48;&#x8BFB;&#x5B8C;&#x6574;&#x4E2A;&#x6A21;&#x578B;&#x5C31;&#x9700;&#x8981;&#x5341;&#x51E0;&#x5230;&#x4E8C;&#x5341;&#x79D2;&#x3002;</p>
<p>&#x800C;&#x7528;&#x6237;&#x5E0C;&#x671B;&#x770B;&#x5230;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x6BCF;&#x79D2;&#x51E0;&#x5341;&#x4E2A; Token
</code></pre>
<p>&#x663E;&#x7136;&#x505A;&#x4E0D;&#x5230;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x5B9E;&#x9645;&#x6D41;&#x7A0B;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">SSD
&#x2193;
&#x5185;&#x5B58;
&#x2193;
&#x663E;&#x5B58;
&#x2193;
GPU&#x8BA1;&#x7B97;
</code></pre>
<p>&#x63A8;&#x7406;&#x65F6;&#xFF0C;&#x6743;&#x91CD;&#x5E38;&#x9A7B;&#x663E;&#x5B58;&#x3002;</p>
<p>&#x8F93;&#x5165;&#x6570;&#x636E;&#x4E0D;&#x65AD;&#x6D41;&#x8FC7;&#x8FD9;&#x4E9B;&#x6743;&#x91CD;&#x77E9;&#x9635;&#x3002;</p>
<p>&#x8FD9;&#x6837; GPU &#x624D;&#x80FD;&#x9AD8;&#x901F;&#x5B8C;&#x6210;&#x8BA1;&#x7B97;&#x3002;</p>
<h2 id="&#x6700;&#x540E;&#xFF0C;&#x628A;&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E32;&#x8D77;&#x6765;"><a href="#&#x6700;&#x540E;&#xFF0C;&#x628A;&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E32;&#x8D77;&#x6765;"></a>&#x6700;&#x540E;&#xFF0C;&#x628A;&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E32;&#x8D77;&#x6765;</h2>
<p>&#x4ECE;&#x5934;&#x5230;&#x5C3E;&#xFF0C;&#x5176;&#x5B9E;&#x53EA;&#x6709;&#x56DB;&#x6B65;&#xFF1A;</p>
<pre><code class="language-text">1. &#x5B9A;&#x4E49;&#x6A21;&#x578B;&#x7ED3;&#x6784;

2. &#x52A0;&#x8F7D;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6743;&#x91CD;

3. &#x628A;&#x6743;&#x91CD;&#x653E;&#x8FDB;&#x663E;&#x5B58;

4. &#x8F93;&#x5165;&#x6570;&#x636E;&#x9010;&#x5C42;&#x7ECF;&#x8FC7;&#x8BA1;&#x7B97;
</code></pre>
<p>&#x6700;&#x7EC8;&#x5F97;&#x5230;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x6574;&#x4E2A;&#x94FE;&#x8DEF;&#x5982;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x7ED3;&#x6784;
&#xFF08;&#x84DD;&#x56FE;&#xFF09;

        +

&#x6A21;&#x578B;&#x6743;&#x91CD;
&#xFF08;&#x7ECF;&#x9A8C;&#x548C;&#x77E5;&#x8BC6;&#xFF09;

        &#x2193;

&#x52A0;&#x8F7D;&#x5230;&#x6A21;&#x578B;

        &#x2193;

&#x642C;&#x5230;GPU&#x663E;&#x5B58;

        &#x2193;

&#x8F93;&#x5165;&#x9010;&#x5C42;&#x6D41;&#x8FC7;

        &#x2193;

&#x8F93;&#x51FA;&#x7ED3;&#x679C;
</code></pre>
<p>&#x5F88;&#x591A;&#x4EBA;&#x7B2C;&#x4E00;&#x6B21;&#x770B;&#x5230; GPT-3 &#x6709; 1750 &#x4EBF;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x4EE5;&#x4E3A;&#x91CC;&#x9762;&#x85CF;&#x7740;&#x67D0;&#x79CD;&#x5168;&#x65B0;&#x7684;&#x6570;&#x5B66;&#x3002;</p>
<p>&#x5B9E;&#x9645;&#x4E0A;&#x5E76;&#x6CA1;&#x6709;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x63CF;&#x8FF0;&#x7684;&#x4E8B;&#x60C5;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF1A;</p>
<pre><code class="language-text">&#x4E58;&#x6CD5;
&#x52A0;&#x6CD5;
&#x7ED3;&#x679C;&#x4F20;&#x7ED9;&#x4E0B;&#x4E00;&#x5C42;
</code></pre>
<p>&#x771F;&#x6B63;&#x5E9E;&#x5927;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x7B97;&#x6CD5;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x90A3;&#x4E9B;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5B66;&#x51FA;&#x6765;&#x7684;&#x6570;&#x5B57;&#x3002;</p>
<p>&#x5927;&#x6A21;&#x578B;&#x4E4B;&#x6240;&#x4EE5;&#x201C;&#x5927;&#x201D;&#xFF0C;&#x4E0D;&#x662F;&#x56E0;&#x4E3A;&#x4EE3;&#x7801;&#x6709;&#x591A;&#x590D;&#x6742;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x8BB0;&#x4F4F;&#x4E86;&#x592A;&#x591A;&#x4E1C;&#x897F;&#x3002;</p>
<p>&#x4EE3;&#x7801;&#x8D1F;&#x8D23;&#x5B9A;&#x4E49;&#x5927;&#x8111;&#x7684;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x6743;&#x91CD;&#x8D1F;&#x8D23;&#x4FDD;&#x5B58;&#x5927;&#x8111;&#x7684;&#x8BB0;&#x5FC6;&#x3002;</p>
<p>&#x800C;&#x63A8;&#x7406;&#xFF0C;&#x672C;&#x8D28;&#x4E0A;&#x5C31;&#x662F;&#x8BA9;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7A7F;&#x8FC7;&#x8FD9;&#x4E9B;&#x8BB0;&#x5FC6;&#xFF0C;&#x6700;&#x7EC8;&#x5F97;&#x5230;&#x7B54;&#x6848;&#x3002;</p>
`,E=[{level:1,title:"代码定义结构，权重存储知识：一个例子看懂大模型如何推理",children:[{level:2,title:"先搭一个最小模型",children:[]},{level:2,title:"训练之后，权重来了",children:[]},{level:2,title:"跑一遍：数字的旅程",children:[]},{level:2,title:"加载权重，本质就是填空",children:[]},{level:2,title:"结构和权重，到底谁更重要？",children:[]},{level:2,title:"参数为什么会突然爆炸？",children:[]},{level:2,title:"为什么代码只有几百行，权重却有几十 GB？",children:[]},{level:2,title:"进入 GPU 之后发生了什么？",children:[]},{level:2,title:"为什么推理前必须先把权重搬进显存？",children:[]},{level:2,title:"最后，把整个过程串起来",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
