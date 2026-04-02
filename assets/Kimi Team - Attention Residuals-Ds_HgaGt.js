const x={},n=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2026-03-16</em></p>
<p>Kimi Team &#x53D1;&#x5E03;&#x7684; <strong>Attention Residuals</strong>&#xFF08;<a href="https://arxiv.org/abs/2603.15031">&#x8BBA;&#x6587;&#x94FE;&#x63A5;</a>&#xFF09;&#x662F; Transformer &#x67B6;&#x6784;&#x6F14;&#x8FDB;&#x7684;&#x4E00;&#x6B21;&#x91CD;&#x8981;&#x521B;&#x65B0;&#x3002;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x9488;&#x5BF9;&#x73B0;&#x4EE3;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x4E2D;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x56FA;&#x6709;&#x7F3A;&#x9677;&#xFF0C;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x57FA;&#x4E8E;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x7684;&#x52A8;&#x6001;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x65B9;&#x6848;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;PreNorm &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x56FA;&#x6709;&#x7F3A;&#x9677;"><a href="#&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;PreNorm &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x56FA;&#x6709;&#x7F3A;&#x9677;"></a>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;PreNorm &#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x56FA;&#x6709;&#x7F3A;&#x9677;</h2>
<p><strong>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x95EE;&#x9898;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</strong></p>
<p>&#x5728;&#x73B0;&#x4EE3; LLM &#x4E2D;&#xFF0C;PreNorm &#x7ED3;&#x6784;&#x7684;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x5DF2;&#x6210;&#x4E3A;&#x6807;&#x51C6;&#x914D;&#x7F6E;&#x3002;&#x5176;&#x57FA;&#x672C;&#x5F62;&#x5F0F;&#x4E3A;&#xFF1A;</p>
<pre><code>x_{l+1} = x_l + Layer_l(Norm(x_l))
</code></pre>
<p>&#x8FD9;&#x79CD;&#x8BBE;&#x8BA1;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6839;&#x672C;&#x6027;&#x95EE;&#x9898;&#xFF1A;<strong>&#x6240;&#x6709;&#x5C42;&#x7684;&#x8F93;&#x51FA;&#x90FD;&#x4EE5;&#x56FA;&#x5B9A;&#x7684;&#x5355;&#x4F4D;&#x6743;&#x91CD;&#xFF08;1&#xFF09;&#x7D2F;&#x52A0;</strong>&#x3002;&#x968F;&#x7740;&#x7F51;&#x7EDC;&#x6DF1;&#x5EA6;&#x589E;&#x52A0;&#xFF1A;</p>
<ol>
<li><strong>&#x4E0D;&#x53D7;&#x63A7;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x589E;&#x957F;</strong>&#xFF1A;&#x6BCF;&#x5C42;&#x7684;&#x8D21;&#x732E;&#x88AB;&#x5E73;&#x7B49;&#x7D2F;&#x52A0;&#xFF0C;&#x5BFC;&#x81F4;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x5E45;&#x5EA6;&#x5931;&#x63A7;&#x589E;&#x957F;</li>
<li><strong>&#x5C42;&#x8D21;&#x732E;&#x9010;&#x6E10;&#x7A00;&#x91CA;</strong>&#xFF1A;&#x540E;&#x7EED;&#x5C42;&#x7684;&#x8F93;&#x51FA;&#x88AB;&#x6DF9;&#x6CA1;&#x5728;&#x524D;&#x9762;&#x6240;&#x6709;&#x5C42;&#x7684;&#x7D2F;&#x79EF;&#x548C;&#x4E2D;&#xFF0C;&#x5355;&#x4E2A;&#x5C42;&#x7684;&#x5F71;&#x54CD;&#x529B;&#x88AB;&#x7A00;&#x91CA;</li>
<li><strong>&#x4FE1;&#x606F;&#x9009;&#x62E9;&#x80FD;&#x529B;&#x7F3A;&#x5931;</strong>&#xFF1A;&#x6A21;&#x578B;&#x65E0;&#x6CD5;&#x6839;&#x636E;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x52A8;&#x6001;&#x51B3;&#x5B9A;&#x5E94;&#x8BE5;&#x66F4;&#x591A;&#x4F9D;&#x8D56;&#x54EA;&#x4E9B;&#x5C42;&#x7684;&#x8868;&#x793A;</li>
</ol>
<p><strong>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</strong></p>
<p>&#x786E;&#x5B9E;&#x5B58;&#x5728;&#x3002;&#x5B9E;&#x9A8C;&#x89C2;&#x5BDF;&#x5230;&#xFF1A;</p>
<ul>
<li>&#x6807;&#x51C6; Transformer &#x5728;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x4E2D;&#xFF0C;&#x8F93;&#x51FA;&#x5E45;&#x5EA6;&#x968F;&#x6DF1;&#x5EA6;&#x6307;&#x6570;&#x589E;&#x957F;</li>
<li>&#x68AF;&#x5EA6;&#x5206;&#x5E03;&#x5728;&#x4E0D;&#x540C;&#x5C42;&#x4E4B;&#x95F4;&#x4E25;&#x91CD;&#x4E0D;&#x5747;&#x5300;</li>
<li>&#x6DF1;&#x5C42;&#x6A21;&#x578B;&#x96BE;&#x4EE5;&#x6709;&#x6548;&#x8BAD;&#x7EC3;&#x548C;&#x4F18;&#x5316;</li>
</ul>
<h2 id="Attention Residuals&#xFF1A;&#x7528;&#x6CE8;&#x610F;&#x529B;&#x66FF;&#x4EE3;&#x56FA;&#x6709;&#x7D2F;&#x52A0;"><a href="#Attention Residuals&#xFF1A;&#x7528;&#x6CE8;&#x610F;&#x529B;&#x66FF;&#x4EE3;&#x56FA;&#x6709;&#x7D2F;&#x52A0;"></a>Attention Residuals&#xFF1A;&#x7528;&#x6CE8;&#x610F;&#x529B;&#x66FF;&#x4EE3;&#x56FA;&#x6709;&#x7D2F;&#x52A0;</h2>
<p><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x975E;&#x5E38;&#x76F4;&#x63A5;&#xFF1A;&#x65E2;&#x7136; Attention &#x673A;&#x5236;&#x80FD;&#x591F;&#x5728;&#x65F6;&#x95F4;&#x7EF4;&#x5EA6;&#x4E0A;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x4FE1;&#x606F;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x5728;&#x6DF1;&#x5EA6;&#x7EF4;&#x5EA6;&#x4E0A;&#x4E5F;&#x8FD9;&#x6837;&#x505A;&#xFF1F;</strong></p>
<h3 id="&#x57FA;&#x672C;&#x67B6;&#x6784;"><a href="#&#x57FA;&#x672C;&#x67B6;&#x6784;"></a>&#x57FA;&#x672C;&#x67B6;&#x6784;</h3>
<p>Attention Residuals &#x5C06;&#x56FA;&#x5B9A;&#x7684;&#x6B8B;&#x5DEE;&#x7D2F;&#x52A0;&#x66FF;&#x6362;&#x4E3A; softmax &#x6CE8;&#x610F;&#x529B;&#xFF1A;</p>
<pre><code>x_{l+1} = &#x3A3;_{i=0}^{l} &#x3B1;_{l,i}(x_l) &#xB7; x_i

&#x5176;&#x4E2D; &#x3B1;_{l,i}(x_l) = softmax(q_l^T k_i / &#x221A;d)
q_l = W_q &#xB7; x_l  (query &#x4ECE;&#x5F53;&#x524D;&#x5C42;&#x8F93;&#x51FA;&#x8BA1;&#x7B97;)
k_i = W_k &#xB7; x_i  (key &#x4ECE;&#x7B2C; i &#x5C42;&#x8F93;&#x51FA;&#x8BA1;&#x7B97;)
</code></pre>
<h3 id="&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x8FD9;&#x771F;&#x7684;&#x662F; Attention &#x5417;&#xFF1F;"><a href="#&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x8FD9;&#x771F;&#x7684;&#x662F; Attention &#x5417;&#xFF1F;"></a>&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x8FD9;&#x771F;&#x7684;&#x662F; Attention &#x5417;&#xFF1F;</h3>
<p><strong>AttnRes &#x4E0D;&#x662F;&#x7B80;&#x5355;&#x7684;&quot;&#x53EF;&#x5B66;&#x4E60;&#x6743;&#x91CD;&quot;&#xFF0C;&#x800C;&#x662F;&#x771F;&#x6B63;&#x7684; Attention&#xFF1A;</strong></p>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6848;</th>
<th>&#x6743;&#x91CD;&#x5F62;&#x5F0F;</th>
<th>&#x662F;&#x5426;&#x4F9D;&#x8D56;&#x8F93;&#x5165;</th>
<th>Q-K &#x673A;&#x5236;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x56FA;&#x5B9A;&#x6B8B;&#x5DEE;</td>
<td>w_i = 1 (&#x5E38;&#x91CF;)</td>
<td>&#x274C;</td>
<td>&#x274C;</td>
</tr>
<tr>
<td>&#x53EF;&#x5B66;&#x4E60;&#x6743;&#x91CD;</td>
<td>w_i &#x2208; &#x211D; (&#x53C2;&#x6570;)</td>
<td>&#x274C;</td>
<td>&#x274C;</td>
</tr>
<tr>
<td><strong>AttnRes</strong></td>
<td><strong>&#x3B1;_i = f(x_l, x_i)</strong></td>
<td><strong>&#x2705;</strong></td>
<td><strong>&#x2705;</strong></td>
</tr>
</tbody>
</table>
<p><strong>&#x6838;&#x5FC3;&#x533A;&#x522B;&#xFF1A;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># &#x53EF;&#x5B66;&#x4E60;&#x6743;&#x91CD;&#xFF1A;&#x6240;&#x6709;&#x8F93;&#x5165;&#x7528;&#x540C;&#x4E00;&#x7EC4;&#x6743;&#x91CD;</span>
x_out = w_0*x_0 + w_1*x_1 + ... + w_L*x_L  
<span class="hljs-comment"># w_i &#x662F;&#x56FA;&#x5B9A;&#x53C2;&#x6570;&#xFF0C;&quot;cat&quot; &#x548C; &quot;dog&quot; &#x7528;&#x76F8;&#x540C;&#x6743;&#x91CD;</span>

<span class="hljs-comment"># AttnRes&#xFF1A;&#x6743;&#x91CD;&#x52A8;&#x6001;&#x8BA1;&#x7B97;</span>
q = W_q @ x_l; k_i = W_k @ x_i
&#x3B1;_i = softmax(q @ k_i / &#x221A;d)  <span class="hljs-comment"># &#x901A;&#x8FC7; Q-K &#x5185;&#x79EF;&#x8BA1;&#x7B97;</span>
x_out = &#x3A3; &#x3B1;_i * x_i
<span class="hljs-comment"># &#x4E0D;&#x540C;&#x8F93;&#x5165; &#x2192; &#x4E0D;&#x540C;&#x6743;&#x91CD;&#x5206;&#x5E03;</span>
</code></pre>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x53EB; Attention&#xFF1F;</strong> &#x56E0;&#x4E3A;&#x4F7F;&#x7528;&#x4E86; Query-Key &#x673A;&#x5236;&#xFF0C;&#x6743;&#x91CD;&#x968F;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x52A8;&#x6001;&#x53D8;&#x5316;&#xFF0C;&#x4E0D;&#x540C;&#x6837;&#x672C;&#x3001;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#x4F1A;&#x4EA7;&#x751F;&#x4E0D;&#x540C;&#x7684;&#x5C42;&#x805A;&#x5408;&#x6A21;&#x5F0F;&#x3002;</p>
<h3 id="&#x4E3A;&#x4EC0;&#x4E48;&#x6709;&#x6548;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x6709;&#x6548;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x6709;&#x6548;&#xFF1F;</h3>
<ul>
<li><strong>&#x6253;&#x7834;&#x56FA;&#x5B9A;&#x6743;&#x91CD;&#x5047;&#x8BBE;</strong>&#xFF1A;&#x4E0D;&#x540C;&#x8F93;&#x5165;&#x53EF;&#x4EE5;&#x4F9D;&#x8D56;&#x4E0D;&#x540C;&#x5C42;&#x7684;&#x8868;&#x793A;</li>
<li><strong>&#x5E45;&#x5EA6;&#x63A7;&#x5236;</strong>&#xFF1A;softmax &#x5F52;&#x4E00;&#x5316;&#x907F;&#x514D;&#x4E86;&#x7D2F;&#x52A0;&#x5BFC;&#x81F4;&#x7684;&#x5E45;&#x5EA6;&#x81A8;&#x80C0;</li>
<li><strong>&#x68AF;&#x5EA6;&#x7A33;&#x5B9A;</strong>&#xFF1A;&#x66F4;&#x5747;&#x5300;&#x7684;&#x8DE8;&#x5C42;&#x68AF;&#x5EA6;&#x5206;&#x5E03;&#xFF0C;&#x6613;&#x4E8E;&#x8BAD;&#x7EC3;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;</li>
</ul>
<h2 id="Block AttnRes&#xFF1A;&#x5B9E;&#x7528;&#x5316;&#x7684;&#x5173;&#x952E;"><a href="#Block AttnRes&#xFF1A;&#x5B9E;&#x7528;&#x5316;&#x7684;&#x5173;&#x952E;"></a>Block AttnRes&#xFF1A;&#x5B9E;&#x7528;&#x5316;&#x7684;&#x5173;&#x952E;</h2>
<h3 id="&#x56DE;&#x7B54;&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x5728;&#x54EA;&#x91CC;&#x4F7F;&#x7528; AttnRes&#xFF1F;"><a href="#&#x56DE;&#x7B54;&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x5728;&#x54EA;&#x91CC;&#x4F7F;&#x7528; AttnRes&#xFF1F;"></a>&#x56DE;&#x7B54;&#x5173;&#x952E;&#x95EE;&#x9898;&#xFF1A;&#x5728;&#x54EA;&#x91CC;&#x4F7F;&#x7528; AttnRes&#xFF1F;</h3>
<p><strong>&#x4E09;&#x79CD;&#x65B9;&#x6848;&#x5BF9;&#x6BD4;&#xFF1A;</strong></p>
<ol>
<li>
<p><strong>&#x6807;&#x51C6; Transformer&#xFF08;Baseline&#xFF09;</strong></p>
<ul>
<li>&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x7528;&#x56FA;&#x5B9A;&#x6B8B;&#x5DEE;&#xFF1A;<code>x_{l+1} = x_l + Layer_l(Norm(x_l))</code></li>
<li>&#x6240;&#x6709;&#x5C42;&#x4E0E;&#x5C42;&#x4E4B;&#x95F4;&#x90FD;&#x662F;&#x7B80;&#x5355;&#x76F8;&#x52A0;</li>
</ul>
</li>
<li>
<p><strong>&#x5168;&#x91CF; AttnRes&#xFF08;&#x7406;&#x60F3;&#x4F46;&#x4E0D;&#x5B9E;&#x7528;&#xFF09;</strong></p>
<ul>
<li>&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x7528;&#x6CE8;&#x610F;&#x529B;&#x805A;&#x5408;&#x6240;&#x6709;&#x524D;&#x9762;&#x5C42;&#x7684;&#x8F93;&#x51FA;</li>
<li>Layer 10 &#x9700;&#x8981;&#x5BF9; Layers 0-9 &#x505A;&#x6CE8;&#x610F;&#x529B;</li>
<li>Layer 20 &#x9700;&#x8981;&#x5BF9; Layers 0-19 &#x505A;&#x6CE8;&#x610F;&#x529B;</li>
<li>&#x95EE;&#x9898;&#xFF1A;<strong>&#x590D;&#x6742;&#x5EA6; O(L&#xB2;)</strong>&#xFF0C;&#x5185;&#x5B58;&#x548C;&#x901A;&#x4FE1;&#x5F00;&#x9500;&#x5DE8;&#x5927;</li>
</ul>
</li>
<li>
<p><strong>Block AttnRes&#xFF08;&#x8BBA;&#x6587;&#x5B9E;&#x9645;&#x91C7;&#x7528;&#xFF09;</strong></p>
<ul>
<li><strong>&#x5E76;&#x975E;&#x6240;&#x6709;&#x5C42;&#x4E4B;&#x95F4;&#x90FD;&#x7528; AttnRes</strong></li>
<li>&#x800C;&#x662F;&#x5C06;&#x5C42;&#x5206;&#x6210;&#x591A;&#x4E2A; block&#xFF0C;&#x53EA;&#x5728; block &#x7EA7;&#x522B;&#x4F7F;&#x7528; AttnRes</li>
</ul>
</li>
</ol>
<h3 id="Block AttnRes &#x7684;&#x5177;&#x4F53;&#x8BBE;&#x8BA1;"><a href="#Block AttnRes &#x7684;&#x5177;&#x4F53;&#x8BBE;&#x8BA1;"></a>Block AttnRes &#x7684;&#x5177;&#x4F53;&#x8BBE;&#x8BA1;</h3>
<p><strong>&#x5206;&#x5757;&#x7B56;&#x7565;&#xFF1A;</strong></p>
<p>&#x5047;&#x8BBE;&#x6709; 12 &#x5C42; Transformer&#xFF0C;&#x5206;&#x6210; 3 &#x4E2A; block&#xFF08;&#x6BCF;&#x4E2A; block 4 &#x5C42;&#xFF09;&#xFF1A;</p>
<pre><code>Block 1: Layers 1-4
Block 2: Layers 5-8
Block 3: Layers 9-12
</code></pre>
<p><strong>&#x8FDE;&#x63A5;&#x65B9;&#x5F0F;&#xFF1A;</strong></p>
<ol>
<li>
<p><strong>Block &#x5185;&#x90E8;&#xFF08;Layer &#x4E0E; Layer &#x4E4B;&#x95F4;&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;<strong>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;</strong>&#xFF08;&#x56FA;&#x5B9A;&#x6743;&#x91CD;&#x76F8;&#x52A0;&#xFF09;</li>
<li>Layer 2 = Layer 1 + Transform(Norm(Layer 1))</li>
<li>Layer 3 = Layer 2 + Transform(Norm(Layer 2))</li>
<li>&#x8FD9;&#x90E8;&#x5206;&#x548C;&#x539F;&#x59CB; Transformer &#x5B8C;&#x5168;&#x4E00;&#x6837;&#xFF0C;&#x5FEB;&#x901F;&#x4E14;&#x65E0;&#x989D;&#x5916;&#x5F00;&#x9500;</li>
</ul>
</li>
<li>
<p><strong>Block &#x4E4B;&#x95F4;&#xFF08;Block &#x4E0E; Block &#x4E4B;&#x95F4;&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; <strong>Attention Residuals</strong></li>
<li>Block 2 &#x7684;&#x8D77;&#x59CB;&#x8F93;&#x5165; = AttnRes(Block 1 &#x7684;&#x8F93;&#x51FA;, Block 0 &#x7684;&#x8F93;&#x51FA;)</li>
<li>Block 3 &#x7684;&#x8D77;&#x59CB;&#x8F93;&#x5165; = AttnRes(Block 2 &#x7684;&#x8F93;&#x51FA;, [Block 0, Block 1, Block 2 &#x7684;&#x8F93;&#x51FA;])</li>
<li>&#x6BCF;&#x4E2A; block &#x53EA;&#x9700;&#x8981;&#x5BF9;&#x524D;&#x9762;&#x7684; N &#x4E2A; block &#x505A;&#x6CE8;&#x610F;&#x529B;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5BF9; L &#x4E2A; layer</li>
</ul>
</li>
</ol>
<p><strong>&#x5F62;&#x8C61;&#x7406;&#x89E3;&#xFF1A;</strong></p>
<pre><code>&#x6807;&#x51C6; Transformer:
Layer1 --[+]--&gt; Layer2 --[+]--&gt; Layer3 --[+]--&gt; ... --[+]--&gt; Layer12
         &#x2191;               &#x2191;               &#x2191;                    &#x2191;
      &#x56FA;&#x5B9A;&#x6743;&#x91CD;1      &#x56FA;&#x5B9A;&#x6743;&#x91CD;1      &#x56FA;&#x5B9A;&#x6743;&#x91CD;1            &#x56FA;&#x5B9A;&#x6743;&#x91CD;1

&#x5168;&#x91CF; AttnRes:
Layer1 --------&#x2192; Layer2 --------&#x2192; Layer3 --------&#x2192; ... --------&#x2192; Layer12
         &#x2198;     &#x2197;         &#x2198;     &#x2197;         &#x2198;     &#x2197;              &#x2197;
          Attention      Attention      Attention        Attention
            (&#x6240;&#x6709;&#x524D;&#x9762;&#x7684;&#x5C42;)   (&#x6240;&#x6709;&#x524D;&#x9762;&#x7684;&#x5C42;)   (&#x6240;&#x6709;&#x524D;&#x9762;&#x7684;&#x5C42;)    (&#x6240;&#x6709;&#x524D;&#x9762;&#x7684;&#x5C42;)

Block AttnRes:
[Block1: L1&#x2192;L2&#x2192;L3&#x2192;L4] --Attention--&gt; [Block2: L5&#x2192;L6&#x2192;L7&#x2192;L8] --Attention--&gt; [Block3: L9&#x2192;L10&#x2192;L11&#x2192;L12]
     Block&#x5185;&#x90E8;&#x7528;[+]                        Block&#x5185;&#x90E8;&#x7528;[+]                       Block&#x5185;&#x90E8;&#x7528;[+]
                        &#x2198;              &#x2197;                      &#x2198;              &#x2197;
                         Block&#x7EA7;&#x522B;&#x7684;Attention                 Block&#x7EA7;&#x522B;&#x7684;Attention
</code></pre>
<p><strong>&#x590D;&#x6742;&#x5EA6;&#x4F18;&#x5316;&#xFF1A;</strong></p>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6848;</th>
<th>&#x6CE8;&#x610F;&#x529B;&#x6B21;&#x6570;</th>
<th>&#x5185;&#x5B58;&#x590D;&#x6742;&#x5EA6;</th>
<th>&#x901A;&#x4FE1;&#x5F00;&#x9500;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6807;&#x51C6; Transformer</td>
<td>0</td>
<td>O(d)</td>
<td>O(L)</td>
</tr>
<tr>
<td>&#x5168;&#x91CF; AttnRes</td>
<td>L &#x6B21;</td>
<td>O(L&#xB7;d)</td>
<td>O(L&#xB2;)</td>
</tr>
<tr>
<td>Block AttnRes (L=12, N=3)</td>
<td>N=3 &#x6B21;</td>
<td>O(N&#xB7;d)</td>
<td>O(N&#xB2;)</td>
</tr>
</tbody>
</table>
<p><strong>&#x5173;&#x952E;&#x4F18;&#x52BF;&#xFF1A;</strong></p>
<ul>
<li>&#x5C06;&#x6CE8;&#x610F;&#x529B;&#x64CD;&#x4F5C;&#x4ECE; L &#x6B21;&#x964D;&#x4F4E;&#x5230; N &#x6B21;&#xFF08;N &lt;&lt; L&#xFF09;</li>
<li>&#x5185;&#x5B58;&#x4ECE; O(L&#xB7;d) &#x964D;&#x81F3; O(N&#xB7;d)</li>
<li>&#x901A;&#x4FE1;&#x6B21;&#x6570;&#x4ECE; O(L&#xB2;) &#x964D;&#x81F3; O(N&#xB2;)</li>
<li>&#x4FDD;&#x7559;&#x4E86;&#x5927;&#x90E8;&#x5206;&#x5168;&#x91CF; AttnRes &#x7684;&#x6536;&#x76CA;&#xFF08;80-90%&#xFF09;</li>
</ul>
<p><strong>&#x5B9E;&#x73B0;&#x6280;&#x5DE7;&#xFF1A;</strong></p>
<ul>
<li><strong>&#x57FA;&#x4E8E;&#x7F13;&#x5B58;&#x7684;&#x6D41;&#x6C34;&#x7EBF;&#x901A;&#x4FE1;</strong>&#xFF1A;&#x590D;&#x7528;&#x5DF2;&#x8BA1;&#x7B97;&#x7684; block &#x8868;&#x793A;&#xFF0C;&#x907F;&#x514D;&#x91CD;&#x590D;&#x4F20;&#x8F93;</li>
<li><strong>&#x4E24;&#x9636;&#x6BB5;&#x8BA1;&#x7B97;&#x7B56;&#x7565;</strong>&#xFF1A;&#x5206;&#x79BB; block &#x5185;&#x548C; block &#x95F4;&#x7684;&#x8BA1;&#x7B97;&#xFF0C;&#x4F18;&#x5316;&#x8C03;&#x5EA6;</li>
</ul>
<h3 id="&#x5177;&#x4F53;&#x8BA1;&#x7B97;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;"><a href="#&#x5177;&#x4F53;&#x8BA1;&#x7B97;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;"></a>&#x5177;&#x4F53;&#x8BA1;&#x7B97;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;</h3>
<p>&#x5047;&#x8BBE; 12 &#x5C42; Transformer&#xFF0C;&#x5206;&#x6210; 3 &#x4E2A; block&#xFF08;&#x6BCF; block 4 &#x5C42;&#xFF09;&#xFF1A;</p>
<p><strong>&#x8F93;&#x5165;</strong>: x&#x2080;</p>
<p><strong>Block 1 (Layers 1-4) &#x5185;&#x90E8;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;&#xFF1A;</strong></p>
<pre><code>x&#x2081; = x&#x2080; + Layer&#x2081;(Norm(x&#x2080;))
x&#x2082; = x&#x2081; + Layer&#x2082;(Norm(x&#x2081;))
x&#x2083; = x&#x2082; + Layer&#x2083;(Norm(x&#x2082;))
x&#x2084; = x&#x2083; + Layer&#x2084;(Norm(x&#x2083;))  &#x2190; Block 1 &#x8F93;&#x51FA;
</code></pre>
<p><strong>Block 2 (Layers 5-8) &#x5F00;&#x59CB;&#x524D;&#x4F7F;&#x7528; AttnRes&#xFF1A;</strong></p>
<pre><code># &#x6CE8;&#x610F;&#xFF1A;&#x8FD9;&#x91CC;&#x7528; AttnRes &#x805A;&#x5408; Block 1 &#x7684;&#x8F93;&#x51FA;
x&#x2084;&apos; = AttnRes(x&#x2084;, [x&#x2084;])  # &#x76EE;&#x524D;&#x53EA;&#x6709;&#x4E00;&#x4E2A; block &#x7684;&#x8F93;&#x51FA;

# &#x7136;&#x540E; Block 2 &#x5185;&#x90E8;&#x7EE7;&#x7EED;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;
x&#x2085; = x&#x2084;&apos; + Layer&#x2085;(Norm(x&#x2084;&apos;))
x&#x2086; = x&#x2085; + Layer&#x2086;(Norm(x&#x2085;))
x&#x2087; = x&#x2086; + Layer&#x2087;(Norm(x&#x2086;))
x&#x2088; = x&#x2087; + Layer&#x2088;(Norm(x&#x2087;))  &#x2190; Block 2 &#x8F93;&#x51FA;
</code></pre>
<p><strong>Block 3 (Layers 9-12) &#x5F00;&#x59CB;&#x524D;&#x4F7F;&#x7528; AttnRes&#xFF1A;</strong></p>
<pre><code># &#x8FD9;&#x91CC;&#x7528; AttnRes &#x805A;&#x5408; Block 1 &#x548C; Block 2 &#x7684;&#x8F93;&#x51FA;
x&#x2088;&apos; = AttnRes(x&#x2088;, [x&#x2084;, x&#x2088;])  # &#x5BF9;&#x4E24;&#x4E2A; block &#x7684;&#x8F93;&#x51FA;&#x505A;&#x6CE8;&#x610F;&#x529B;

# &#x7136;&#x540E; Block 3 &#x5185;&#x90E8;&#x7EE7;&#x7EED;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;
x&#x2089; = x&#x2088;&apos; + Layer&#x2089;(Norm(x&#x2088;&apos;))
x&#x2081;&#x2080; = x&#x2089; + Layer&#x2081;&#x2080;(Norm(x&#x2089;))
x&#x2081;&#x2081; = x&#x2081;&#x2080; + Layer&#x2081;&#x2081;(Norm(x&#x2081;&#x2080;))
x&#x2081;&#x2082; = x&#x2081;&#x2081; + Layer&#x2081;&#x2082;(Norm(x&#x2081;&#x2081;))  &#x2190; Block 3 &#x8F93;&#x51FA;&#xFF08;&#x6700;&#x7EC8;&#x8F93;&#x51FA;&#xFF09;
</code></pre>
<p><strong>&#x5173;&#x952E;&#x70B9;&#xFF1A;</strong></p>
<ul>
<li>AttnRes &#x53EA;&#x5728; <strong>block &#x8FB9;&#x754C;</strong> &#x4F7F;&#x7528;&#xFF08;3 &#x4E2A; block = 2 &#x6B21; AttnRes &#x8C03;&#x7528;&#xFF09;</li>
<li>Block &#x5185;&#x90E8;&#x7684; 4 &#x5C42;&#x4E4B;&#x95F4;&#x5168;&#x90E8;&#x662F; <strong>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;</strong>&#xFF08;&#x6CA1;&#x6709;&#x989D;&#x5916;&#x5F00;&#x9500;&#xFF09;</li>
<li>&#x6BCF;&#x4E2A; block &#x5F00;&#x59CB;&#x65F6;&#x4F1A;&quot;&#x56DE;&#x987E;&quot;&#x524D;&#x9762;&#x6240;&#x6709; block &#x7684;&#x8F93;&#x51FA;&#xFF0C;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x805A;&#x5408;&#x6743;&#x91CD;</li>
</ul>
<h3 id="&#x5B9E;&#x9A8C;&#x9A8C;&#x8BC1;"><a href="#&#x5B9E;&#x9A8C;&#x9A8C;&#x8BC1;"></a>&#x5B9E;&#x9A8C;&#x9A8C;&#x8BC1;</h3>
<p><strong>Scaling Law &#x5B9E;&#x9A8C;&#xFF1A;</strong></p>
<ul>
<li>AttnRes &#x5728;&#x4E0D;&#x540C;&#x6A21;&#x578B;&#x89C4;&#x6A21;&#x4E0B;&#x90FD;&#x6301;&#x7EED;&#x8D85;&#x8D8A; baseline</li>
<li>Block AttnRes &#x80FD;&#x5339;&#x914D;&#x7528; 1.25 &#x500D;&#x8BA1;&#x7B97;&#x91CF;&#x8BAD;&#x7EC3;&#x7684; baseline &#x6027;&#x80FD;</li>
<li>&#x9A8C;&#x8BC1;&#x4E86;&#x6DF1;&#x5EA6;&#x7EF4;&#x5EA6;&#x9009;&#x62E9;&#x673A;&#x5236;&#x7684;&#x6709;&#x6548;&#x6027;</li>
</ul>
<p><strong>Kimi Linear &#x96C6;&#x6210;&#xFF1A;</strong></p>
<ul>
<li>&#x6A21;&#x578B;&#x89C4;&#x6A21;&#xFF1A;48B &#x603B;&#x53C2;&#x6570; / 3B &#x6FC0;&#x6D3B;&#x53C2;&#x6570;</li>
<li>&#x9884;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#xFF1A;1.4T tokens</li>
<li><strong>&#x6027;&#x80FD;&#x63D0;&#x5347;&#x8DE8;&#x6240;&#x6709;&#x8BC4;&#x4F30;&#x4EFB;&#x52A1;</strong>&#xFF1A;
<ul>
<li>MMLU: 73.5 &#x2192; 74.6 (+1.1)</li>
<li>&#x66F4;&#x5747;&#x5300;&#x7684;&#x8F93;&#x51FA;&#x5E45;&#x5EA6;</li>
<li>&#x66F4;&#x7A33;&#x5B9A;&#x7684;&#x8DE8;&#x5C42;&#x68AF;&#x5EA6;&#x5206;&#x5E03;</li>
</ul>
</li>
</ul>
<h2 id="&#x6280;&#x672F;&#x6D1E;&#x5BDF;"><a href="#&#x6280;&#x672F;&#x6D1E;&#x5BDF;"></a>&#x6280;&#x672F;&#x6D1E;&#x5BDF;</h2>
<h3 id="1. Attention &#x7684;&#x666E;&#x9002;&#x6027;&#xFF1A;&#x4ECE;&#x65F6;&#x95F4;&#x5230;&#x6DF1;&#x5EA6;"><a href="#1. Attention &#x7684;&#x666E;&#x9002;&#x6027;&#xFF1A;&#x4ECE;&#x65F6;&#x95F4;&#x5230;&#x6DF1;&#x5EA6;"></a>1. Attention &#x7684;&#x666E;&#x9002;&#x6027;&#xFF1A;&#x4ECE;&#x65F6;&#x95F4;&#x5230;&#x6DF1;&#x5EA6;</h3>
<p>Transformer &#x7528; Attention &#x89E3;&#x51B3;&#x4E86; RNN &#x5728;<strong>&#x65F6;&#x95F4;&#x7EF4;&#x5EA6;</strong>&#x7684;&#x4E32;&#x884C;&#x8BA1;&#x7B97;&#x95EE;&#x9898;&#x3002;AttnRes &#x8FDB;&#x4E00;&#x6B65;&#x5C06;&#x8FD9;&#x4E00;&#x601D;&#x60F3;&#x6269;&#x5C55;&#x5230;<strong>&#x6DF1;&#x5EA6;&#x7EF4;&#x5EA6;</strong>&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7EF4;&#x5EA6;</th>
<th>&#x4F20;&#x7EDF;&#x65B9;&#x6CD5;</th>
<th>Attention &#x65B9;&#x6CD5;</th>
<th>&#x6536;&#x76CA;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x65F6;&#x95F4;</td>
<td>RNN &#x4E32;&#x884C;</td>
<td>Self-Attention</td>
<td>&#x5E76;&#x884C;&#x5316;&#x3001;&#x957F;&#x8DDD;&#x79BB;&#x4F9D;&#x8D56;</td>
</tr>
<tr>
<td>&#x6DF1;&#x5EA6;</td>
<td>&#x56FA;&#x5B9A;&#x6B8B;&#x5DEE;</td>
<td>Attention Residuals</td>
<td>&#x52A8;&#x6001;&#x9009;&#x62E9;&#x3001;&#x5E45;&#x5EA6;&#x63A7;&#x5236;</td>
</tr>
</tbody>
</table>
<p><strong>&#x6DF1;&#x5C42;&#x8054;&#x7CFB;&#xFF1A;</strong></p>
<ul>
<li><strong>Self-Attention</strong>&#xFF1A;token &#x4E4B;&#x95F4;&#x7684;&#x52A8;&#x6001;&#x52A0;&#x6743;&#xFF08;&#x54EA;&#x4E9B;&#x8BCD;&#x91CD;&#x8981;&#xFF1F;&#xFF09;</li>
<li><strong>AttnRes</strong>&#xFF1A;layer &#x4E4B;&#x95F4;&#x7684;&#x52A8;&#x6001;&#x52A0;&#x6743;&#xFF08;&#x54EA;&#x4E9B;&#x5C42;&#x91CD;&#x8981;&#xFF1F;&#xFF09;</li>
<li><strong>&#x7EDF;&#x4E00;&#x601D;&#x60F3;</strong>&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x5B66;&#x4E60;&quot;&#x5728;&#x4EC0;&#x4E48;&#x60C5;&#x51B5;&#x4E0B;&#x5173;&#x6CE8;&#x4EC0;&#x4E48;&quot;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x786C;&#x7F16;&#x7801;</li>
</ul>
<h3 id="2. &#x5DE5;&#x7A0B;&#x5B9E;&#x73B0;&#x7684;&#x91CD;&#x8981;&#x6027;"><a href="#2. &#x5DE5;&#x7A0B;&#x5B9E;&#x73B0;&#x7684;&#x91CD;&#x8981;&#x6027;"></a>2. &#x5DE5;&#x7A0B;&#x5B9E;&#x73B0;&#x7684;&#x91CD;&#x8981;&#x6027;</h3>
<p><strong>&#x5168;&#x91CF; AttnRes &#x867D;&#x7136;&#x7406;&#x8BBA;&#x4F18;&#x96C5;&#xFF0C;&#x4F46;&#x5DE5;&#x7A0B;&#x4E0A;&#x4E0D;&#x53EF;&#x884C;&#x3002;</strong> Block AttnRes &#x901A;&#x8FC7;&#xFF1A;</p>
<ul>
<li>&#x5206;&#x5C42;&#x8BBE;&#x8BA1;&#xFF08;block &#x5185;&#x5916;&#x4E0D;&#x540C;&#x7B56;&#x7565;&#xFF09;</li>
<li>&#x901A;&#x4FE1;&#x4F18;&#x5316;&#xFF08;&#x7F13;&#x5B58; + &#x4E24;&#x9636;&#x6BB5;&#x8BA1;&#x7B97;&#xFF09;</li>
</ul>
<p>&#x5728;&#x4FDD;&#x7559; 80-90% &#x7406;&#x8BBA;&#x6536;&#x76CA;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x5C06;&#x989D;&#x5916;&#x5F00;&#x9500;&#x964D;&#x81F3;&#x53EF;&#x63A5;&#x53D7;&#x6C34;&#x5E73;&#xFF08;&#x4EC5;&#x589E;&#x52A0; ~5% &#x8BAD;&#x7EC3;&#x65F6;&#x95F4;&#xFF09;&#x3002;</p>
<p><strong>&#x8FD9;&#x662F; AI &#x7814;&#x7A76;&#x4E2D;&quot;&#x7406;&#x8BBA;-&#x5DE5;&#x7A0B;&quot;&#x5E73;&#x8861;&#x7684;&#x5178;&#x8303;&#x3002;</strong></p>
<h2 id="&#x4E0E;&#x5176;&#x4ED6;&#x65B9;&#x6848;&#x5BF9;&#x6BD4;"><a href="#&#x4E0E;&#x5176;&#x4ED6;&#x65B9;&#x6848;&#x5BF9;&#x6BD4;"></a>&#x4E0E;&#x5176;&#x4ED6;&#x65B9;&#x6848;&#x5BF9;&#x6BD4;</h2>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6848;</th>
<th>&#x6838;&#x5FC3;&#x601D;&#x60F3;</th>
<th>&#x4F18;&#x52BF;</th>
<th>&#x52A3;&#x52BF;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6807;&#x51C6;&#x6B8B;&#x5DEE;</td>
<td>&#x56FA;&#x5B9A;&#x5355;&#x4F4D;&#x6743;&#x91CD;&#x7D2F;&#x52A0;</td>
<td>&#x7B80;&#x5355;&#x9AD8;&#x6548;</td>
<td>&#x5E45;&#x5EA6;&#x5931;&#x63A7;&#x3001;&#x65E0;&#x9009;&#x62E9;&#x6027;</td>
</tr>
<tr>
<td>DenseNet</td>
<td>&#x663E;&#x5F0F;&#x8FDE;&#x63A5;&#x6240;&#x6709;&#x524D;&#x5E8F;&#x5C42;</td>
<td>&#x4FE1;&#x606F;&#x6D41;&#x4E30;&#x5BCC;</td>
<td>&#x53C2;&#x6570;&#x91CF;&#x7206;&#x70B8;</td>
</tr>
<tr>
<td>Mixture of Depths</td>
<td>&#x8DF3;&#x8FC7;&#x67D0;&#x4E9B;&#x5C42;&#x8BA1;&#x7B97;</td>
<td>&#x8BA1;&#x7B97;&#x9AD8;&#x6548;</td>
<td>&#x4FE1;&#x606F;&#x635F;&#x5931;</td>
</tr>
<tr>
<td><strong>AttnRes</strong></td>
<td><strong>&#x52A8;&#x6001;&#x6CE8;&#x610F;&#x529B;&#x805A;&#x5408;</strong></td>
<td><strong>&#x5185;&#x5BB9;&#x4F9D;&#x8D56;&#x3001;&#x5E45;&#x5EA6;&#x53EF;&#x63A7;</strong></td>
<td><strong>&#x989D;&#x5916;&#x8BA1;&#x7B97;&#x5F00;&#x9500;</strong></td>
</tr>
</tbody>
</table>
<h2 id="&#x5C40;&#x9650;&#x4E0E;&#x5C55;&#x671B;"><a href="#&#x5C40;&#x9650;&#x4E0E;&#x5C55;&#x671B;"></a>&#x5C40;&#x9650;&#x4E0E;&#x5C55;&#x671B;</h2>
<p><strong>&#x5F53;&#x524D;&#x5C40;&#x9650;&#xFF1A;</strong></p>
<ul>
<li>Block &#x7C92;&#x5EA6;&#x9700;&#x8981;&#x624B;&#x52A8;&#x8C03;&#x4F18;&#xFF08;&#x7C92;&#x5EA6; vs &#x5F00;&#x9500;&#x7684;&#x6743;&#x8861;&#xFF09;</li>
<li>&#x989D;&#x5916; 5-10% &#x7684;&#x8BAD;&#x7EC3;&#x5F00;&#x9500;</li>
<li>&#x4E0E; MoE&#x3001;Sparse Attention &#x7B49;&#x7684;&#x7EC4;&#x5408;&#x5C1A;&#x672A;&#x5145;&#x5206;&#x63A2;&#x7D22;</li>
</ul>
<p><strong>&#x672A;&#x6765;&#x65B9;&#x5411;&#xFF1A;</strong></p>
<ul>
<li>&#x81EA;&#x9002;&#x5E94; Block &#x5212;&#x5206;</li>
<li>&#x591A;&#x6A21;&#x6001;&#x6A21;&#x578B;&#x4E2D;&#x7684;&#x5E94;&#x7528;</li>
<li>&#x6781;&#x6DF1;&#x7F51;&#x7EDC;&#xFF08;100+ &#x5C42;&#xFF09;&#x7684;&#x6F5C;&#x529B;</li>
<li>&#x5229;&#x7528;&#x5B66;&#x5230;&#x7684;&#x6743;&#x91CD;&#x6307;&#x5BFC;&#x6A21;&#x578B;&#x538B;&#x7F29;</li>
</ul>
<h2 id="&#x542F;&#x793A;"><a href="#&#x542F;&#x793A;"></a>&#x542F;&#x793A;</h2>
<ol>
<li><strong>&#x8D28;&#x7591;&#x5E38;&#x8BC6;</strong>&#xFF1A;&#x67B6;&#x6784;&#x4E2D;&#x7684;&quot;&#x6807;&#x51C6;&#x7EC4;&#x4EF6;&quot;&#xFF08;&#x5982;&#x56FA;&#x5B9A;&#x6B8B;&#x5DEE;&#xFF09;&#x53EF;&#x80FD;&#x5E76;&#x975E;&#x6700;&#x4F18;&#xFF0C;&#x503C;&#x5F97;&#x91CD;&#x65B0;&#x5BA1;&#x89C6;</li>
<li><strong>&#x5DE5;&#x7A0B;&#x5E73;&#x8861;</strong>&#xFF1A;&#x7406;&#x8BBA;&#x4F18;&#x96C5;&#x7684;&#x65B9;&#x6848;&#x9700;&#x8981;&#x5DE5;&#x7A0B;&#x4F18;&#x5316;&#x624D;&#x80FD;&#x843D;&#x5730;&#xFF08;&#x5168;&#x91CF; AttnRes &#x2192; Block AttnRes&#xFF09;</li>
<li><strong>&#x6DF1;&#x5EA6;&#x6F5C;&#x529B;</strong>&#xFF1A;&#x7F51;&#x7EDC;&#x6DF1;&#x5EA6;&#x7684;&#x4EF7;&#x503C;&#x4E0D;&#x53EA;&#x5728;&quot;&#x5806;&#x53E0;&quot;&#xFF0C;&#x66F4;&#x5728;&#x4E8E;&quot;&#x5982;&#x4F55;&#x8FDE;&#x63A5;&quot;</li>
</ol>
<h2 id="&#x4EE3;&#x7801;&#x5B9E;&#x73B0;"><a href="#&#x4EE3;&#x7801;&#x5B9E;&#x73B0;"></a>&#x4EE3;&#x7801;&#x5B9E;&#x73B0;</h2>
<p>&#x5B98;&#x65B9;&#x5B9E;&#x73B0;&#x5DF2;&#x5F00;&#x6E90;&#xFF1A;<a href="https://github.com/MoonshotAI/Attention-Residuals">MoonshotAI/Attention-Residuals</a></p>
<p>&#x6838;&#x5FC3;&#x4F2A;&#x4EE3;&#x7801;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-comment"># AttnRes &#x6838;&#x5FC3;&#x5B9E;&#x73B0;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AttentionResidual</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self, d_model</span>):</span>
        <span class="hljs-built_in">super</span>().__init__()
        self.query = nn.Linear(d_model, d_model)  <span class="hljs-comment"># W_q</span>
        self.key = nn.Linear(d_model, d_model)    <span class="hljs-comment"># W_k</span>
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, current_layer_output, all_previous_outputs</span>):</span>
        <span class="hljs-string">&quot;&quot;&quot;
        Args:
            current_layer_output: [batch, seq, d_model]
            all_previous_outputs: list of [batch, seq, d_model]
        
        &#x7EF4;&#x5EA6;&#x8BF4;&#x660E;:
            B: Batch Size (&#x6279;&#x6B21;&#x5927;&#x5C0F;) - &#x4E00;&#x6B21;&#x5904;&#x7406;&#x591A;&#x5C11;&#x53E5;&#x8BDD;
            S: Sequence Length (&#x5E8F;&#x5217;&#x957F;&#x5EA6;) - &#x6BCF;&#x53E5;&#x8BDD;&#x6709;&#x591A;&#x5C11;&#x4E2A;&#x8BCD;
            D: d_model (&#x6A21;&#x578B;&#x9690;&#x85CF;&#x7EF4;&#x5EA6;) - &#x6BCF;&#x4E2A;&#x8BCD;&#x7528;&#x591A;&#x5C11;&#x7EF4;&#x5411;&#x91CF;&#x8868;&#x793A;
            L: Layer Count (&#x5C42;&#x6570;) - &#x524D;&#x9762;&#x6709;&#x591A;&#x5C11;&#x5C42;&#x7684;&#x8F93;&#x51FA;
        &quot;&quot;&quot;</span>
        <span class="hljs-comment"># &#x8BA1;&#x7B97; Query &#x548C; Keys</span>
        q = self.query(current_layer_output)  <span class="hljs-comment"># [B, S, D]</span>
        
        <span class="hljs-comment"># Q-K &#x5185;&#x79EF;&#x8BA1;&#x7B97;&#x6CE8;&#x610F;&#x529B;&#x5206;&#x6570;</span>
        attn_scores = []
        <span class="hljs-keyword">for</span> prev_output <span class="hljs-keyword">in</span> all_previous_outputs:
            k = self.key(prev_output)
            score = (q * k).<span class="hljs-built_in">sum</span>(dim=-<span class="hljs-number">1</span>, keepdim=<span class="hljs-literal">True</span>)  <span class="hljs-comment"># [B, S, 1]</span>
            attn_scores.append(score)
        
        <span class="hljs-comment"># Softmax &#x5F52;&#x4E00;&#x5316;</span>
        attn_weights = torch.softmax(
            torch.cat(attn_scores, dim=-<span class="hljs-number">1</span>), dim=-<span class="hljs-number">1</span>
        )  <span class="hljs-comment"># [B, S, L]</span>
        
        <span class="hljs-comment"># &#x52A0;&#x6743;&#x805A;&#x5408;</span>
        stacked_outputs = torch.stack(all_previous_outputs, dim=-<span class="hljs-number">1</span>)  <span class="hljs-comment"># [B, S, D, L]</span>
        output = (stacked_outputs * attn_weights.unsqueeze(<span class="hljs-number">2</span>)).<span class="hljs-built_in">sum</span>(dim=-<span class="hljs-number">1</span>)  <span class="hljs-comment"># [B, S, D]</span>
        
        <span class="hljs-keyword">return</span> output

<span class="hljs-comment"># Block AttnRes &#x5B9E;&#x73B0;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TransformerBlock</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self, d_model, num_layers_per_block</span>):</span>
        <span class="hljs-built_in">super</span>().__init__()
        self.layers = nn.ModuleList([
            TransformerLayer(d_model) 
            <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_layers_per_block)
        ])
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-keyword">for</span> layer <span class="hljs-keyword">in</span> self.layers:
            x = x + layer(nn.LayerNorm(x))  <span class="hljs-comment"># Block &#x5185;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;</span>
        <span class="hljs-keyword">return</span> x

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BlockAttentionResidual</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self, d_model, num_blocks, layers_per_block</span>):</span>
        <span class="hljs-built_in">super</span>().__init__()
        self.blocks = nn.ModuleList([
            TransformerBlock(d_model, layers_per_block)
            <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_blocks)
        ])
        self.attn_res = AttentionResidual(d_model)
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        block_outputs = []
        
        <span class="hljs-keyword">for</span> i, block <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(self.blocks):
            <span class="hljs-keyword">if</span> i &gt; <span class="hljs-number">0</span>:
                <span class="hljs-comment"># Block &#x8FB9;&#x754C;&#x4F7F;&#x7528; AttnRes &#x805A;&#x5408;</span>
                x = self.attn_res(x, block_outputs)
            x = block(x)  <span class="hljs-comment"># Block &#x5185;&#x6807;&#x51C6;&#x6B8B;&#x5DEE;</span>
            block_outputs.append(x)
        
        <span class="hljs-keyword">return</span> x
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p><strong>&#x6838;&#x5FC3;&#x8D21;&#x732E;&#xFF1A;</strong></p>
<ul>
<li>&#x7528; Q-K Attention &#x673A;&#x5236;&#x66FF;&#x4EE3;&#x56FA;&#x5B9A;&#x6743;&#x91CD;&#x6B8B;&#x5DEE;&#xFF0C;&#x5B9E;&#x73B0;&#x8F93;&#x5165;&#x4F9D;&#x8D56;&#x7684;&#x5C42;&#x805A;&#x5408;</li>
<li>Block AttnRes &#x5728;&#x4FDD;&#x7559;&#x6536;&#x76CA;&#x7684;&#x540C;&#x65F6;&#x5C06;&#x5F00;&#x9500;&#x964D;&#x81F3;&#x53EF;&#x63A5;&#x53D7;&#x6C34;&#x5E73;</li>
<li>&#x5728; 48B &#x53C2;&#x6570;&#x6A21;&#x578B;&#x4E0A;&#x9A8C;&#x8BC1;&#x4E86;&#x8DE8;&#x4EFB;&#x52A1;&#x7684;&#x6027;&#x80FD;&#x63D0;&#x5347;</li>
</ul>
<p><strong>&#x6280;&#x672F;&#x4EF7;&#x503C;&#xFF1A;</strong></p>
<ul>
<li>&#x7F13;&#x89E3; PreNorm &#x7684;&#x5E45;&#x5EA6;&#x81A8;&#x80C0;&#x548C;&#x68AF;&#x5EA6;&#x4E0D;&#x7A33;&#x5B9A;&#x95EE;&#x9898;</li>
<li>&#x8BC1;&#x660E;&#x4E86;&#x6DF1;&#x5EA6;&#x7EF4;&#x5EA6;&#x7684;&#x52A8;&#x6001;&#x4FE1;&#x606F;&#x9009;&#x62E9;&#x7684;&#x6709;&#x6548;&#x6027;</li>
<li>&#x4E3A;&#x6DF1;&#x5EA6;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x8BBE;&#x8BA1;&#x63D0;&#x4F9B;&#x65B0;&#x89C6;&#x89D2;</li>
</ul>
<p><strong>&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</strong> Attention &#x4E0D;&#x4EC5;&#x80FD;&#x5904;&#x7406;&#x65F6;&#x95F4;&#x7EF4;&#x5EA6;&#x7684;&#x5E8F;&#x5217;&#xFF0C;&#x4E5F;&#x80FD;&#x5904;&#x7406;&#x6DF1;&#x5EA6;&#x7EF4;&#x5EA6;&#x7684;&#x5C42;&#x7EA7;&#x2014;&#x2014;&#x8FD9;&#x662F; Transformer &#x601D;&#x60F3;&#x7684;&#x53C8;&#x4E00;&#x6B21;&#x5EF6;&#x4F38;&#x3002;</p>
`,F=[{level:2,title:"核心问题：PreNorm 残差连接的固有缺陷",children:[]},{level:2,title:"Attention Residuals：用注意力替代固有累加",children:[{level:3,title:"基本架构",children:[]},{level:3,title:"关键问题：这真的是 Attention 吗？",children:[]},{level:3,title:"为什么有效？",children:[]}]},{level:2,title:"Block AttnRes：实用化的关键",children:[{level:3,title:"回答关键问题：在哪里使用 AttnRes？",children:[]},{level:3,title:"Block AttnRes 的具体设计",children:[]},{level:3,title:"具体计算流程示例",children:[]},{level:3,title:"实验验证",children:[]}]},{level:2,title:"技术洞察",children:[{level:3,title:"1. Attention 的普适性：从时间到深度",children:[]},{level:3,title:"2. 工程实现的重要性",children:[]}]},{level:2,title:"与其他方案对比",children:[]},{level:2,title:"局限与展望",children:[]},{level:2,title:"启示",children:[]},{level:2,title:"代码实现",children:[]},{level:2,title:"总结",children:[]}];export{x as attributes,n as html,F as nestedHeaders};
