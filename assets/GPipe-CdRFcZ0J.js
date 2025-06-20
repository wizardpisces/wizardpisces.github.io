const x={},s=`<h1 id="GPipe"><a href="#GPipe"></a>GPipe</h1>
<p>GPipe&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5927;&#x89C4;&#x6A21;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x6A21;&#x578B;&#x5E76;&#x884C;&#x5316;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x901A;&#x8FC7;&#x6D41;&#x6C34;&#x7EBF;&#x5E76;&#x884C;&#xFF08;Pipeline Parallelism&#xFF09;&#x5C06;&#x6A21;&#x578B;&#x5206;&#x5272;&#x6210;&#x591A;&#x4E2A;&#x9636;&#x6BB5;&#xFF0C;&#x5E76;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x8BBE;&#x5907;&#xFF08;&#x5982;GPU&#xFF09;&#x4E0A;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#xFF0C;&#x4ECE;&#x800C;&#x52A0;&#x901F;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x3002;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x5728;GPipe&#x4E2D;&#x7684;&#x5E94;&#x7528;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x89E3;&#x51B3;&#x7531;&#x4E8E;&#x6A21;&#x578B;&#x5206;&#x5272;&#x5E26;&#x6765;&#x7684;&#x6279;&#x91CF;&#x5927;&#x5C0F;&#x9650;&#x5236;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"><a href="#&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"></a>&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</h2>
<p>&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#xFF08;Gradient Accumulation&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x5728;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7528;&#x6765;&#x5904;&#x7406;&#x5C0F;&#x6279;&#x91CF;&#xFF08;mini-batch&#xFF09;&#x8BAD;&#x7EC3;&#x7684;&#x95EE;&#x9898;&#x7684;&#x6280;&#x672F;&#x3002;&#x5B83;&#x7684;&#x4E3B;&#x8981;&#x4F5C;&#x7528;&#x662F;&#x5728;&#x663E;&#x5B58;&#x6709;&#x9650;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x901A;&#x8FC7;&#x7D2F;&#x79EF;&#x591A;&#x4E2A;&#x5C0F;&#x6279;&#x91CF;&#x7684;&#x6570;&#x636E;&#x68AF;&#x5EA6;&#xFF0C;&#x6A21;&#x62DF;&#x66F4;&#x5927;&#x6279;&#x91CF;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#x3002;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x8F83;&#x5C0F;&#x7684;&#x663E;&#x5B58;&#x6765;&#x8FDB;&#x884C;&#x66F4;&#x5927;&#x6279;&#x91CF;&#x7684;&#x8BAD;&#x7EC3;&#xFF0C;&#x8FDB;&#x800C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#x548C;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x3002;</p>
<h3 id="&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"><a href="#&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"></a>&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6B63;&#x5728;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF0C;&#x4F46;&#x7531;&#x4E8E;&#x663E;&#x5B58;&#x9650;&#x5236;&#xFF0C;&#x6211;&#x4EEC;&#x53EA;&#x80FD;&#x4F7F;&#x7528;&#x975E;&#x5E38;&#x5C0F;&#x7684;&#x6279;&#x91CF;&#xFF08;&#x6BD4;&#x5982; batch size = 2&#xFF09;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x6211;&#x4EEC;&#x5E0C;&#x671B;&#x901A;&#x8FC7;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x6765;&#x6A21;&#x62DF;&#x8F83;&#x5927;&#x7684;&#x6279;&#x91CF;&#xFF08;&#x6BD4;&#x5982; batch size = 6&#xFF09;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#x3002;</p>
<h4 id="&#x6CA1;&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"><a href="#&#x6CA1;&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"></a>&#x6CA1;&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</h4>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#xFF0C;&#x5305;&#x542B;6&#x4E2A;&#x6837;&#x672C;&#x3002;&#x6211;&#x4EEC;&#x7528; batch size = 2 &#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#xFF0C;&#x6BCF;&#x6B21;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x53EA;&#x8003;&#x8651;&#x8FD9;2&#x4E2A;&#x6837;&#x672C;&#x7684;&#x68AF;&#x5EA6;&#x3002;</p>
<ol>
<li>
<p><strong>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;1&#x548C;&#x6837;&#x672C;2</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;</li>
</ul>
</li>
<li>
<p><strong>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;3&#x548C;&#x6837;&#x672C;4</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;</li>
</ul>
</li>
<li>
<p><strong>&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;5&#x548C;&#x6837;&#x672C;6</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;</li>
</ul>
</li>
</ol>
<p>&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x3002;</p>
<h4 id="&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"><a href="#&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"></a>&#x6709;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</h4>
<p>&#x73B0;&#x5728;&#xFF0C;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#xFF0C;&#x5C06;6&#x4E2A;&#x6837;&#x672C;&#x7684;&#x6570;&#x636E;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x540E;&#x518D;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x3002;</p>
<ol>
<li>
<p><strong>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;1&#x548C;&#x6837;&#x672C;2</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;&#xFF08;&#x68AF;&#x5EA6;&#x5B58;&#x50A8;&#xFF0C;&#x4E0D;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#xFF09;</li>
</ul>
</li>
<li>
<p><strong>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;3&#x548C;&#x6837;&#x672C;4</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;&#xFF08;&#x68AF;&#x5EA6;&#x5B58;&#x50A8;&#xFF0C;&#x4E0D;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#xFF09;</li>
</ul>
</li>
<li>
<p><strong>&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;</strong></p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x6837;&#x672C;5&#x548C;&#x6837;&#x672C;6</li>
<li>&#x8BA1;&#x7B97;&#x635F;&#x5931;</li>
<li>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;</li>
<li>&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;&#xFF08;&#x68AF;&#x5EA6;&#x5B58;&#x50A8;&#xFF09;</li>
</ul>
</li>
<li>
<p><strong>&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;&#xFF1A;</strong></p>
<ul>
<li>&#x4F7F;&#x7528;&#x7D2F;&#x79EF;&#x7684;&#x68AF;&#x5EA6;&#x8FDB;&#x884C;&#x53C2;&#x6570;&#x66F4;&#x65B0;</li>
</ul>
</li>
</ol>
<p>&#x5728;&#x8FD9;&#x6574;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EA;&#x5728;&#x7B2C;&#x4E09;&#x6B65;&#x4E4B;&#x540E;&#xFF0C;&#x4F7F;&#x7528;&#x7D2F;&#x79EF;&#x7684;&#x68AF;&#x5EA6;&#x66F4;&#x65B0;&#x4E86;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x3002;&#x8FD9;&#x4E2A;&#x6548;&#x679C;&#x76F8;&#x5F53;&#x4E8E;&#x6211;&#x4EEC;&#x4F7F;&#x7528; batch size = 6 &#x8FDB;&#x884C;&#x4E86;&#x4E00;&#x6B21;&#x8BAD;&#x7EC3;&#x3002;</p>
<h3 id="&#x4EE3;&#x7801;&#x793A;&#x4F8B;"><a href="#&#x4EE3;&#x7801;&#x793A;&#x4F8B;"></a>&#x4EE3;&#x7801;&#x793A;&#x4F8B;</h3>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x4F7F;&#x7528; PyTorch &#x7684;&#x7B80;&#x5355;&#x4EE3;&#x7801;&#x793A;&#x4F8B;&#xFF0C;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x5B9E;&#x73B0;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">import</span> torch.optim <span class="hljs-keyword">as</span> optim

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x7EBF;&#x6027;&#x6A21;&#x578B;</span>
model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">1</span>)
criterion = nn.MSELoss()
optimizer = optim.SGD(model.parameters(), lr=<span class="hljs-number">0.01</span>)

<span class="hljs-comment"># &#x751F;&#x6210;&#x4E00;&#x4E9B;&#x5047;&#x6570;&#x636E;</span>
data = [torch.randn(<span class="hljs-number">10</span>) <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">6</span>)]
labels = [torch.randn(<span class="hljs-number">1</span>) <span class="hljs-keyword">for</span> _ <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">6</span>)]

<span class="hljs-comment"># &#x8BBE;&#x7F6E;&#x7D2F;&#x79EF;&#x6B65;&#x6570;</span>
accumulation_steps = <span class="hljs-number">3</span>

<span class="hljs-comment"># &#x8BAD;&#x7EC3;&#x5FAA;&#x73AF;</span>
optimizer.zero_grad()
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">6</span>):
    inputs = data[i]
    target = labels[i]
    
    <span class="hljs-comment"># &#x524D;&#x5411;&#x4F20;&#x64AD;</span>
    outputs = model(inputs)
    loss = criterion(outputs, target)
    
    <span class="hljs-comment"># &#x53CD;&#x5411;&#x4F20;&#x64AD;&#x5E76;&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;</span>
    loss.backward()
    
    <span class="hljs-comment"># &#x6BCF; accumulation_steps &#x6B21;&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;</span>
    <span class="hljs-keyword">if</span> (i + <span class="hljs-number">1</span>) % accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.step()
        optimizer.zero_grad()  <span class="hljs-comment"># &#x6E05;&#x9664;&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;</span>

<span class="hljs-comment"># &#x5728;&#x6700;&#x540E;&#x53EF;&#x80FD;&#x8FD8;&#x9700;&#x8981;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x6709;&#x5269;&#x4F59;&#x7684;&#x68AF;&#x5EA6;&#x9700;&#x8981;&#x66F4;&#x65B0;</span>
<span class="hljs-keyword">if</span> (i + <span class="hljs-number">1</span>) % accumulation_steps != <span class="hljs-number">0</span>:
    optimizer.step()
    optimizer.zero_grad()
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x901A;&#x8FC7;&#x8BBE;&#x7F6E; <code>accumulation_steps</code> &#x6765;&#x63A7;&#x5236;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x7684;&#x6B21;&#x6570;&#x3002;&#x6BCF;&#x6B21;&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#x540E;&#x5E76;&#x4E0D;&#x7ACB;&#x5373;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#xFF0C;&#x800C;&#x662F;&#x7D2F;&#x79EF;&#x8D77;&#x6765;&#xFF0C;&#x76F4;&#x5230;&#x8FBE;&#x5230;&#x6307;&#x5B9A;&#x7684;&#x6B21;&#x6570;&#x624D;&#x8FDB;&#x884C;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x3002;&#x8FD9;&#x6837;&#xFF0C;&#x6211;&#x4EEC;&#x5C31;&#x53EF;&#x4EE5;&#x7528;&#x8F83;&#x5C0F;&#x7684; batch size &#x6A21;&#x62DF;&#x8F83;&#x5927; batch size &#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#xFF0C;&#x6709;&#x6548;&#x5229;&#x7528;&#x663E;&#x5B58;&#x5E76;&#x63D0;&#x5347;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x3002;</p>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x662F;&#x4E00;&#x79CD;&#x5728;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x5904;&#x7406;&#x5C0F;&#x6279;&#x91CF;&#x8BAD;&#x7EC3;&#x9650;&#x5236;&#x7684;&#x6709;&#x6548;&#x6280;&#x672F;&#x3002;&#x901A;&#x8FC7;&#x7D2F;&#x79EF;&#x591A;&#x4E2A;&#x5C0F;&#x6279;&#x91CF;&#x7684;&#x6570;&#x636E;&#x68AF;&#x5EA6;&#xFF0C;&#x518D;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#xFF0C;&#x53EF;&#x4EE5;&#x6A21;&#x62DF;&#x66F4;&#x5927;&#x6279;&#x91CF;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#xFF0C;&#x4ECE;&#x800C;&#x5728;&#x663E;&#x5B58;&#x53D7;&#x9650;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#x548C;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x7279;&#x522B;&#x9002;&#x7528;&#x4E8E;&#x663E;&#x5B58;&#x6709;&#x9650;&#x4F46;&#x5E0C;&#x671B;&#x5229;&#x7528;&#x5927;&#x6279;&#x91CF;&#x8BAD;&#x7EC3;&#x4F18;&#x52BF;&#x7684;&#x60C5;&#x51B5;&#x3002;</p>
<h3 id="GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"><a href="#GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;"></a>GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</h3>
<p>GPipe&#x7684;&#x4E3B;&#x8981;&#x601D;&#x60F3;&#x662F;&#x5C06;&#x6A21;&#x578B;&#x5206;&#x5272;&#x6210;&#x591A;&#x4E2A;&#x201C;&#x6BB5;&#x201D;&#xFF08;&#x6BB5;&#x843D;&#xFF09;&#xFF0C;&#x6BCF;&#x4E2A;&#x6BB5;&#x843D;&#x5728;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x7684;&#x8BBE;&#x5907;&#x4E0A;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#x3002;&#x6570;&#x636E;&#x901A;&#x8FC7;&#x8FD9;&#x4E9B;&#x6BB5;&#x843D;&#x8FDB;&#x884C;&#x524D;&#x5411;&#x4F20;&#x64AD;&#x548C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x3002;&#x5728;&#x8FD9;&#x79CD;&#x8BBE;&#x7F6E;&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x6BCF;&#x4E2A;&#x8BBE;&#x5907;&#x4E0A;&#x53EA;&#x80FD;&#x5904;&#x7406;&#x5C0F;&#x6279;&#x91CF;&#x6570;&#x636E;&#xFF0C;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x53EF;&#x4EE5;&#x6709;&#x6548;&#x5E2E;&#x52A9;&#x6A21;&#x62DF;&#x66F4;&#x5927;&#x6279;&#x91CF;&#x7684;&#x8BAD;&#x7EC3;&#x3002;</p>
<h3 id="GPipe&#x5982;&#x4F55;&#x5DE5;&#x4F5C;"><a href="#GPipe&#x5982;&#x4F55;&#x5DE5;&#x4F5C;"></a>GPipe&#x5982;&#x4F55;&#x5DE5;&#x4F5C;</h3>
<ol>
<li>
<p><strong>&#x6A21;&#x578B;&#x5206;&#x5272;</strong>&#xFF1A;</p>
<ul>
<li>&#x5C06;&#x6A21;&#x578B;&#x5206;&#x5272;&#x6210;&#x591A;&#x4E2A;&#x8FDE;&#x7EED;&#x7684;&#x6BB5;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;4&#x4E2A;&#x6BB5;&#xFF09;&#xFF0C;&#x5E76;&#x5C06;&#x6BCF;&#x4E2A;&#x6BB5;&#x5206;&#x914D;&#x5230;&#x4E0D;&#x540C;&#x7684;&#x8BBE;&#x5907;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;4&#x4E2A;GPU&#xFF09;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x6D41;&#x6C34;&#x7EBF;&#x5E76;&#x884C;</strong>&#xFF1A;</p>
<ul>
<li>&#x8F93;&#x5165;&#x6279;&#x91CF;&#x6570;&#x636E;&#x5206;&#x6210;&#x591A;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#xFF08;micro-batch&#xFF09;&#xFF0C;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x5927;&#x6279;&#x91CF;&#x5206;&#x6210;8&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x3002;</li>
<li>&#x5FAE;&#x6279;&#x6B21;&#x901A;&#x8FC7;&#x6D41;&#x6C34;&#x7EBF;&#x5728;&#x4E0D;&#x540C;&#x7684;&#x8BBE;&#x5907;&#x4E0A;&#x4F9D;&#x6B21;&#x8FDB;&#x884C;&#x524D;&#x5411;&#x4F20;&#x64AD;&#x548C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;</strong>&#xFF1A;</p>
<ul>
<li>&#x6BCF;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x7684;&#x68AF;&#x5EA6;&#x5728;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x65F6;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#x5E76;&#x7D2F;&#x79EF;&#x3002;</li>
<li>&#x7D2F;&#x79EF;&#x591A;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x7684;&#x68AF;&#x5EA6;&#x540E;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x6743;&#x91CD;&#x66F4;&#x65B0;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x793A;&#x4F8B;"><a href="#&#x793A;&#x4F8B;"></a>&#x793A;&#x4F8B;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x5206;&#x6210;4&#x4E2A;&#x6BB5;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x5728;4&#x4E2A;GPU&#x4E0A;&#x8FD0;&#x884C;&#xFF0C;&#x5E76;&#x4E14;&#x6279;&#x91CF;&#x5927;&#x5C0F;&#x4E3A;32&#x3002;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x8FD9;&#x4E2A;&#x6279;&#x91CF;&#x5206;&#x6210;8&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#xFF0C;&#x6BCF;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x5927;&#x5C0F;&#x4E3A;4&#x3002;&#x4F7F;&#x7528;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728;&#x6BCF;&#x4E2A;GPU&#x4E0A;&#x7D2F;&#x79EF;4&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x7684;&#x68AF;&#x5EA6;&#xFF0C;&#x7136;&#x540E;&#x518D;&#x8FDB;&#x884C;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x3002;</p>
<h3 id="GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x4EE3;&#x7801;&#x793A;&#x4F8B;"><a href="#GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x4EE3;&#x7801;&#x793A;&#x4F8B;"></a>GPipe&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x4EE3;&#x7801;&#x793A;&#x4F8B;</h3>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5316;&#x7684;&#x4F2A;&#x4EE3;&#x7801;&#x793A;&#x4F8B;&#xFF0C;&#x6F14;&#x793A;GPipe&#x4E2D;&#x5982;&#x4F55;&#x8FDB;&#x884C;&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">import</span> torch.optim <span class="hljs-keyword">as</span> optim

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x6A21;&#x578B;&#x5206;&#x6210;&#x4E86;4&#x6BB5;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Segment1</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-keyword">return</span> x * <span class="hljs-number">2</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Segment2</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-keyword">return</span> x + <span class="hljs-number">3</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Segment3</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-keyword">return</span> x / <span class="hljs-number">2</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Segment4</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-keyword">return</span> x - <span class="hljs-number">1</span>

<span class="hljs-comment"># &#x6A21;&#x578B;&#x6BB5;&#x5206;&#x914D;&#x5230;&#x4E0D;&#x540C;&#x8BBE;&#x5907;</span>
segment1 = Segment1().to(<span class="hljs-string">&apos;cuda:0&apos;</span>)
segment2 = Segment2().to(<span class="hljs-string">&apos;cuda:1&apos;</span>)
segment3 = Segment3().to(<span class="hljs-string">&apos;cuda:2&apos;</span>)
segment4 = Segment4().to(<span class="hljs-string">&apos;cuda:3&apos;</span>)

<span class="hljs-comment"># &#x4F18;&#x5316;&#x5668;</span>
optimizer = optim.SGD(<span class="hljs-built_in">list</span>(segment1.parameters()) + <span class="hljs-built_in">list</span>(segment2.parameters()) +
                      <span class="hljs-built_in">list</span>(segment3.parameters()) + <span class="hljs-built_in">list</span>(segment4.parameters()), lr=<span class="hljs-number">0.01</span>)

<span class="hljs-comment"># &#x6570;&#x636E;&#x793A;&#x4F8B;</span>
data = torch.randn(<span class="hljs-number">32</span>, <span class="hljs-number">10</span>).to(<span class="hljs-string">&apos;cuda:0&apos;</span>)
labels = torch.randn(<span class="hljs-number">32</span>, <span class="hljs-number">10</span>).to(<span class="hljs-string">&apos;cuda:3&apos;</span>)

<span class="hljs-comment"># &#x5FAE;&#x6279;&#x6B21;&#x5927;&#x5C0F;</span>
micro_batch_size = <span class="hljs-number">4</span>
num_micro_batches = data.size(<span class="hljs-number">0</span>) // micro_batch_size

<span class="hljs-comment"># &#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x6B65;&#x9AA4;</span>
optimizer.zero_grad()
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_micro_batches):
    <span class="hljs-comment"># &#x63D0;&#x53D6;&#x5FAE;&#x6279;&#x6B21;&#x6570;&#x636E;</span>
    start = i * micro_batch_size
    end = (i + <span class="hljs-number">1</span>) * micro_batch_size
    micro_batch_data = data[start:end]
    micro_batch_labels = labels[start:end]

    <span class="hljs-comment"># &#x524D;&#x5411;&#x4F20;&#x64AD;</span>
    output1 = segment1(micro_batch_data).to(<span class="hljs-string">&apos;cuda:1&apos;</span>)
    output2 = segment2(output1).to(<span class="hljs-string">&apos;cuda:2&apos;</span>)
    output3 = segment3(output2).to(<span class="hljs-string">&apos;cuda:3&apos;</span>)
    output4 = segment4(output3)

    <span class="hljs-comment"># &#x8BA1;&#x7B97;&#x635F;&#x5931;</span>
    loss = nn.MSELoss()(output4, micro_batch_labels)
    
    <span class="hljs-comment"># &#x53CD;&#x5411;&#x4F20;&#x64AD;&#x5E76;&#x7D2F;&#x79EF;&#x68AF;&#x5EA6;</span>
    loss.backward()

    <span class="hljs-comment"># &#x5728;&#x8FD9;&#x91CC;&#x6211;&#x4EEC;&#x4F1A;&#x6709;&#x7D2F;&#x79EF;&#x591A;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x7684;&#x68AF;&#x5EA6;</span>

<span class="hljs-comment"># &#x4E00;&#x6B21;&#x6027;&#x66F4;&#x65B0;&#x6240;&#x6709;&#x6BB5;&#x7684;&#x53C2;&#x6570;</span>
optimizer.step()
</code></pre>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x68AF;&#x5EA6;&#x7D2F;&#x79EF;&#x5728;GPipe&#x4E2D;&#x88AB;&#x5E94;&#x7528;&#x6765;&#x89E3;&#x51B3;&#x7531;&#x4E8E;&#x6A21;&#x578B;&#x5206;&#x5272;&#x5E26;&#x6765;&#x7684;&#x6279;&#x91CF;&#x5927;&#x5C0F;&#x9650;&#x5236;&#x95EE;&#x9898;&#x3002;&#x901A;&#x8FC7;&#x7D2F;&#x79EF;&#x591A;&#x4E2A;&#x5FAE;&#x6279;&#x6B21;&#x7684;&#x68AF;&#x5EA6;&#x5E76;&#x4E00;&#x6B21;&#x6027;&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x53C2;&#x6570;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x4F7F;&#x7528;&#x5C0F;&#x6279;&#x91CF;&#x8BAD;&#x7EC3;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x6A21;&#x62DF;&#x66F4;&#x5927;&#x6279;&#x91CF;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#x3002;&#x8FD9;&#x4E0D;&#x4EC5;&#x6709;&#x52A9;&#x4E8E;&#x66F4;&#x6709;&#x6548;&#x5730;&#x5229;&#x7528;&#x663E;&#x5B58;&#x8D44;&#x6E90;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8;&#x8BAD;&#x7EC3;&#x7684;&#x7A33;&#x5B9A;&#x6027;&#x548C;&#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#x3002;</p>
`,n=[{level:1,title:"GPipe",children:[{level:2,title:"梯度累积",children:[{level:3,title:"简单例子说明梯度累积",children:[{level:4,title:"没有梯度累积",children:[]},{level:4,title:"有梯度累积",children:[]}]},{level:3,title:"代码示例",children:[]},{level:3,title:"总结",children:[]},{level:3,title:"GPipe中的梯度累积",children:[]},{level:3,title:"GPipe如何工作",children:[]},{level:3,title:"示例",children:[]},{level:3,title:"GPipe中的梯度累积代码示例",children:[]},{level:3,title:"总结",children:[]}]}]}];export{x as attributes,s as html,n as nestedHeaders};
