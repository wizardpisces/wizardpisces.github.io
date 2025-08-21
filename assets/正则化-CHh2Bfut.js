const x={},s=`<p>&#x6B63;&#x5219;&#x5316;&#x662F;&#x4E00;&#x79CD;&#x9632;&#x6B62;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x8FC7;&#x62DF;&#x5408;&#x7684;&#x91CD;&#x8981;&#x6280;&#x672F;&#xFF0C;&#x901A;&#x8FC7;&#x5728;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5F15;&#x5165;&#x67D0;&#x4E9B;&#x9650;&#x5236;&#x6216;&#x60E9;&#x7F5A;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x66F4;&#x5177;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;&#x6B63;&#x5219;&#x5316;&#x65B9;&#x6CD5;&#x6709;&#x591A;&#x79CD;&#xFF0C;&#x5177;&#x4F53;&#x53EF;&#x4EE5;&#x5206;&#x4E3A;&#x4EE5;&#x4E0B;&#x51E0;&#x7C7B;&#xFF1A;</p>
<h3 id="1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;"><a href="#1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;"></a>1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;</h3>
<p><strong>L1&#x6B63;&#x5219;&#x5316; (Lasso)</strong></p>
<ul>
<li><strong>L1&#x6B63;&#x5219;&#x5316;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5728;&#x635F;&#x5931;&#x51FD;&#x6570;&#x4E2D;&#x6DFB;&#x52A0;&#x6743;&#x91CD;&#x7EDD;&#x5BF9;&#x503C;&#x7684;&#x548C;&#x4F5C;&#x4E3A;&#x60E9;&#x7F5A;&#x9879;&#xFF0C;&#x9F13;&#x52B1;&#x6A21;&#x578B;&#x7684;&#x6743;&#x91CD;&#x7A00;&#x758F;&#x5316;&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x7279;&#x5F81;&#x9009;&#x62E9;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;</strong>&#xFF1A;$ \\text{Loss} = \\text{Original Loss} + \\lambda \\sum_i |w_i| $</li>
</ul>
<p><strong>L2&#x6B63;&#x5219;&#x5316; (Ridge)</strong></p>
<ul>
<li><strong>L2&#x6B63;&#x5219;&#x5316;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5728;&#x635F;&#x5931;&#x51FD;&#x6570;&#x4E2D;&#x6DFB;&#x52A0;&#x6743;&#x91CD;&#x5E73;&#x65B9;&#x548C;&#x4F5C;&#x4E3A;&#x60E9;&#x7F5A;&#x9879;&#xFF0C;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x7684;&#x6743;&#x91CD;&#x503C;&#x8FC7;&#x5927;&#xFF0C;&#x589E;&#x52A0;&#x6A21;&#x578B;&#x7684;&#x7A33;&#x5B9A;&#x6027;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;</strong>&#xFF1A;$ \\text{Loss} = \\text{Original Loss} + \\lambda \\sum_i w_i^2 $</li>
</ul>
<h3 id="2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;"><a href="#2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;"></a>2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;</h3>
<p><strong>&#x6570;&#x636E;&#x589E;&#x5F3A; (Data Augmentation)</strong></p>
<ul>
<li><strong>&#x6570;&#x636E;&#x589E;&#x5F3A;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5BF9;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x5404;&#x79CD;&#x53D8;&#x6362;&#xFF08;&#x5982;&#x65CB;&#x8F6C;&#x3001;&#x88C1;&#x526A;&#x3001;&#x7FFB;&#x8F6C;&#x7B49;&#xFF09;&#xFF0C;&#x751F;&#x6210;&#x65B0;&#x7684;&#x8BAD;&#x7EC3;&#x6837;&#x672C;&#xFF0C;&#x4ECE;&#x800C;&#x589E;&#x52A0;&#x6570;&#x636E;&#x7684;&#x591A;&#x6837;&#x6027;&#xFF0C;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x8FC7;&#x62DF;&#x5408;&#x3002;</li>
</ul>
<p><strong>Dropout</strong></p>
<ul>
<li><strong>Dropout</strong>&#xFF1A;&#x5728;&#x6BCF;&#x6B21;&#x8BAD;&#x7EC3;&#x8FED;&#x4EE3;&#x4E2D;&#xFF0C;&#x968F;&#x673A;&#x201C;&#x4E22;&#x5F03;&#x201D;&#x4E00;&#x90E8;&#x5206;&#x795E;&#x7ECF;&#x5143;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x6BCF;&#x6B21;&#x90FD;&#x4F7F;&#x7528;&#x4E0D;&#x540C;&#x7684;&#x7F51;&#x7EDC;&#x7ED3;&#x6784;&#xFF0C;&#x589E;&#x5F3A;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;</strong>&#xFF1A;&#x5728;&#x6BCF;&#x6B21;&#x8BAD;&#x7EC3;&#x8FED;&#x4EE3;&#x4E2D;&#xFF0C;&#x5C06;&#x6BCF;&#x4E2A;&#x795E;&#x7ECF;&#x5143;&#x4EE5;&#x6982;&#x7387; $ p $ &#x7F6E;&#x4E3A; 0&#x3002;</li>
</ul>
<h3 id="3. &#x6807;&#x7B7E;&#x6B63;&#x5219;&#x5316;"><a href="#3. &#x6807;&#x7B7E;&#x6B63;&#x5219;&#x5316;"></a>3. &#x6807;&#x7B7E;&#x6B63;&#x5219;&#x5316;</h3>
<p><strong>Label Smoothing</strong></p>
<ul>
<li><strong>Label Smoothing</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5BF9;&#x6807;&#x7B7E;&#x5206;&#x5E03;&#x8FDB;&#x884C;&#x5E73;&#x6ED1;&#x5904;&#x7406;&#xFF0C;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x5BF9;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E2D;&#x7684;&#x7279;&#x5B9A;&#x6807;&#x7B7E;&#x8FC7;&#x5EA6;&#x81EA;&#x4FE1;&#xFF0C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&#x516C;&#x5F0F;</strong>&#xFF1A;$ y_{\\text{smoothed}} = (1 - \\epsilon) \\cdot y_{\\text{one-hot}} + \\frac{\\epsilon}{k} $</li>
</ul>
<h3 id="4. &#x6A21;&#x578B;&#x7ED3;&#x6784;&#x6B63;&#x5219;&#x5316;"><a href="#4. &#x6A21;&#x578B;&#x7ED3;&#x6784;&#x6B63;&#x5219;&#x5316;"></a>4. &#x6A21;&#x578B;&#x7ED3;&#x6784;&#x6B63;&#x5219;&#x5316;</h3>
<p><strong>Early Stopping</strong></p>
<ul>
<li><strong>Early Stopping</strong>&#xFF1A;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x76D1;&#x63A7;&#x9A8C;&#x8BC1;&#x96C6;&#x7684;&#x8868;&#x73B0;&#xFF0C;&#x5F53;&#x9A8C;&#x8BC1;&#x96C6;&#x8BEF;&#x5DEE;&#x4E0D;&#x518D;&#x4E0B;&#x964D;&#x65F6;&#xFF0C;&#x63D0;&#x524D;&#x505C;&#x6B62;&#x8BAD;&#x7EC3;&#xFF0C;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x8FC7;&#x62DF;&#x5408;&#x3002;</li>
</ul>
<p><strong>Weight Sharing</strong></p>
<ul>
<li><strong>Weight Sharing</strong>&#xFF1A;&#x5728;&#x7F51;&#x7EDC;&#x7ED3;&#x6784;&#x4E2D;&#x5171;&#x4EAB;&#x90E8;&#x5206;&#x6743;&#x91CD;&#xFF0C;&#x51CF;&#x5C11;&#x6A21;&#x578B;&#x7684;&#x81EA;&#x7531;&#x53C2;&#x6570;&#xFF0C;&#x4ECE;&#x800C;&#x9632;&#x6B62;&#x8FC7;&#x62DF;&#x5408;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E2D;&#xFF0C;&#x5171;&#x4EAB;&#x5377;&#x79EF;&#x6838;&#x7684;&#x6743;&#x91CD;&#x3002;</li>
</ul>
<h3 id="5. &#x5BF9;&#x6297;&#x8BAD;&#x7EC3; (Adversarial Training)"><a href="#5. &#x5BF9;&#x6297;&#x8BAD;&#x7EC3; (Adversarial Training)"></a>5. &#x5BF9;&#x6297;&#x8BAD;&#x7EC3; (Adversarial Training)</h3>
<ul>
<li><strong>&#x5BF9;&#x6297;&#x8BAD;&#x7EC3;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x52A0;&#x5165;&#x5BF9;&#x6297;&#x6837;&#x672C;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x5728;&#x9762;&#x5BF9;&#x6076;&#x610F;&#x6837;&#x672C;&#x65F6;&#x4E5F;&#x80FD;&#x8868;&#x73B0;&#x826F;&#x597D;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x9C81;&#x68D2;&#x6027;&#x3002;</li>
</ul>
<h3 id="6. Batch Normalization"><a href="#6. Batch Normalization"></a>6. Batch Normalization</h3>
<ul>
<li><strong>Batch Normalization</strong>&#xFF1A;&#x5728;&#x6BCF;&#x4E2A;&#x5C0F;&#x6279;&#x91CF;&#x6570;&#x636E;&#x4E0A;&#x5BF9;&#x7F51;&#x7EDC;&#x7684;&#x8F93;&#x5165;&#x8FDB;&#x884C;&#x6807;&#x51C6;&#x5316;&#xFF0C;&#x4F7F;&#x5F97;&#x6BCF;&#x4E00;&#x5C42;&#x7684;&#x8F93;&#x5165;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x4FDD;&#x6301;&#x7A33;&#x5B9A;&#xFF0C;&#x4ECE;&#x800C;&#x52A0;&#x901F;&#x8BAD;&#x7EC3;&#x5E76;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;</li>
</ul>
<h3 id="&#x5177;&#x4F53;&#x4F8B;&#x5B50;"><a href="#&#x5177;&#x4F53;&#x4F8B;&#x5B50;"></a>&#x5177;&#x4F53;&#x4F8B;&#x5B50;</h3>
<h4 id="1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;&#xFF08;L2&#x6B63;&#x5219;&#x5316;&#xFF09;"><a href="#1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;&#xFF08;L2&#x6B63;&#x5219;&#x5316;&#xFF09;"></a>1. &#x53C2;&#x6570;&#x6B63;&#x5219;&#x5316;&#xFF08;L2&#x6B63;&#x5219;&#x5316;&#xFF09;</h4>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn

<span class="hljs-comment"># &#x5B9A;&#x4E49;&#x6A21;&#x578B;</span>
model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">1</span>)

<span class="hljs-comment"># &#x5B9A;&#x4E49;&#x635F;&#x5931;&#x51FD;&#x6570;&#x548C;&#x4F18;&#x5316;&#x5668;&#xFF0C;&#x52A0;&#x5165;L2&#x6B63;&#x5219;&#x5316;&#x9879;</span>
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=<span class="hljs-number">0.01</span>, weight_decay=<span class="hljs-number">0.01</span>)  <span class="hljs-comment"># weight_decay&#x5373;&#x4E3A;L2&#x6B63;&#x5219;&#x5316;&#x7CFB;&#x6570;</span>

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E9B;&#x8F93;&#x5165;&#x6570;&#x636E;&#x548C;&#x6807;&#x7B7E;</span>
inputs = torch.randn(<span class="hljs-number">100</span>, <span class="hljs-number">10</span>)
targets = torch.randn(<span class="hljs-number">100</span>, <span class="hljs-number">1</span>)

<span class="hljs-comment"># &#x8BAD;&#x7EC3;&#x6A21;&#x578B;</span>
outputs = model(inputs)
loss = criterion(outputs, targets)
loss.backward()
optimizer.step()
</code></pre>
<h4 id="2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;&#xFF08;Dropout&#xFF09;"><a href="#2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;&#xFF08;Dropout&#xFF09;"></a>2. &#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;&#xFF08;Dropout&#xFF09;</h4>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn

<span class="hljs-comment"># &#x5B9A;&#x4E49;&#x6A21;&#x578B;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SimpleNN</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self</span>):</span>
        <span class="hljs-built_in">super</span>(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">50</span>)
        self.dropout = nn.Dropout(<span class="hljs-number">0.5</span>)
        self.fc2 = nn.Linear(<span class="hljs-number">50</span>, <span class="hljs-number">1</span>)
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        x = torch.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        <span class="hljs-keyword">return</span> x

model = SimpleNN()

<span class="hljs-comment"># &#x5B9A;&#x4E49;&#x635F;&#x5931;&#x51FD;&#x6570;&#x548C;&#x4F18;&#x5316;&#x5668;</span>
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=<span class="hljs-number">0.01</span>)

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E9B;&#x8F93;&#x5165;&#x6570;&#x636E;&#x548C;&#x6807;&#x7B7E;</span>
inputs = torch.randn(<span class="hljs-number">100</span>, <span class="hljs-number">10</span>)
targets = torch.randn(<span class="hljs-number">100</span>, <span class="hljs-number">1</span>)

<span class="hljs-comment"># &#x8BAD;&#x7EC3;&#x6A21;&#x578B;</span>
outputs = model(inputs)
loss = criterion(outputs, targets)
loss.backward()
optimizer.step()
</code></pre>
<h2 id="VQ &#x6B63;&#x5219;"><a href="#VQ &#x6B63;&#x5219;"></a>VQ &#x6B63;&#x5219;</h2>
<p>VQ &#x6B63;&#x5219;&#x5316;&#xFF08;Vector Quantization Regularization&#xFF09;&#x5728;&#x67D0;&#x79CD;&#x7A0B;&#x5EA6;&#x4E0A;&#x7ED3;&#x5408;&#x4E86;&#x591A;&#x79CD;&#x6B63;&#x5219;&#x5316;&#x6280;&#x672F;&#x7684;&#x7279;&#x70B9;&#xFF0C;&#x4F46;&#x5B83;&#x6700;&#x63A5;&#x8FD1;&#x4E8E;&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x6B63;&#x5219;&#x5316;&#x548C;&#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;&#x7684;&#x6DF7;&#x5408;&#x4F53;&#x3002;&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF1A;</p>
<ul>
<li>&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x6B63;&#x5219;&#x5316;&#xFF1A;&#x901A;&#x8FC7;&#x5728;&#x6A21;&#x578B;&#x7ED3;&#x6784;&#x4E2D;&#x5F15;&#x5165;&#x5411;&#x91CF;&#x91CF;&#x5316;&#x5C42;&#xFF0C;&#x5F3A;&#x5236;&#x6F5C;&#x5728;&#x8868;&#x793A;&#x79BB;&#x6563;&#x5316;&#xFF0C;&#x51CF;&#x5C11;&#x6A21;&#x578B;&#x7684;&#x81EA;&#x7531;&#x5EA6;&#xFF0C;&#x4ECE;&#x800C;&#x9632;&#x6B62;&#x8FC7;&#x62DF;&#x5408;&#x3002;</li>
<li>&#x6570;&#x636E;&#x6B63;&#x5219;&#x5316;&#xFF1A;&#x901A;&#x8FC7;&#x79BB;&#x6563;&#x5316;&#x6F5C;&#x5728;&#x8868;&#x793A;&#xFF0C;&#x5B9E;&#x9645;&#x4E0A;&#x589E;&#x52A0;&#x4E86;&#x6570;&#x636E;&#x8868;&#x793A;&#x7684;&#x7A00;&#x758F;&#x6027;&#x548C;&#x9C81;&#x68D2;&#x6027;&#xFF0C;&#x7C7B;&#x4F3C;&#x4E8E;&#x6570;&#x636E;&#x589E;&#x5F3A;&#x6280;&#x672F;&#x3002;</li>
</ul>
<h3 id="VQ &#x8FC7;&#x7A0B;"><a href="#VQ &#x8FC7;&#x7A0B;"></a>VQ &#x8FC7;&#x7A0B;</h3>
<p><em>&#x4F8B;&#x5B50;&#xFF1A;</em></p>
<p>&#x5047;&#x8BBE;&#x4F60;&#x62CD;&#x6444;&#x4E86;&#x4E00;&#x5F20;&#x7167;&#x7247;&#xFF0C;&#x7167;&#x7247;&#x4E2D;&#x6709;&#x8BB8;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x989C;&#x8272;&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x5BF9;&#x7167;&#x7247;&#x4E2D;&#x7684;&#x989C;&#x8272;&#x8FDB;&#x884C;&#x91CF;&#x5316;&#xFF0C;&#x5373;&#x6211;&#x4EEC;&#x91C7;&#x7528;&#x4E00;&#x7EC4;&#x6709;&#x9650;&#x7684;&#x989C;&#x8272;&#x6765;&#x8FD1;&#x4F3C;&#x8868;&#x793A;&#x7167;&#x7247;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x989C;&#x8272;&#x3002;</p>
<p>&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x9009;&#x62E9;&#x4EE3;&#x7801;&#x7C3F;&#xFF08;Codebook&#xFF09;</strong>&#xFF1A;&#x4E3A;&#x4E86;&#x91CF;&#x5316;&#x989C;&#x8272;&#xFF0C;&#x6211;&#x4EEC;&#x9996;&#x5148;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x989C;&#x8272;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#x3002;&#x4EE3;&#x7801;&#x7C3F;&#x5C31;&#x662F;&#x6211;&#x4EEC;&#x9009;&#x62E9;&#x7528;&#x6765;&#x8868;&#x793A;&#x6240;&#x6709;&#x989C;&#x8272;&#x7684;&#x90A3;&#x7EC4;&#x989C;&#x8272;&#xFF0C;&#x6BD4;&#x5982;&#x6211;&#x4EEC;&#x9009;&#x62E9;&#x7EA2;&#x8272;&#xFF0C;&#x84DD;&#x8272;&#xFF0C;&#x7EFF;&#x8272;&#xFF0C;&#x9EC4;&#x8272;&#xFF0C;&#x9ED1;&#x8272;&#x548C;&#x767D;&#x8272;&#x4F5C;&#x4E3A;&#x6211;&#x4EEC;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#xFF0C;&#x5373;&#x8FD9;&#x516D;&#x79CD;&#x989C;&#x8272;&#x4F5C;&#x4E3A;&#x6211;&#x4EEC;&#x7528;&#x6765;&#x8868;&#x793A;&#x6240;&#x6709;&#x989C;&#x8272;&#x7684;&#x57FA;&#x672C;&#x989C;&#x8272;&#x96C6;&#x5408;&#x3002;</p>
</li>
<li>
<p><strong>&#x5C06;&#x7167;&#x7247;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x989C;&#x8272;&#x6620;&#x5C04;&#x5230;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#x989C;&#x8272;</strong>&#xFF1A;&#x7136;&#x540E;&#x6211;&#x4EEC;&#x904D;&#x5386;&#x7167;&#x7247;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#xFF0C;&#x627E;&#x5230;&#x8DDD;&#x79BB;&#x8FD9;&#x4E2A;&#x50CF;&#x7D20;&#x989C;&#x8272;&#x6700;&#x8FD1;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#x4E2D;&#x7684;&#x989C;&#x8272;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x8FD9;&#x4E2A;&#x6700;&#x8FD1;&#x7684;&#x989C;&#x8272;&#x6765;&#x66FF;&#x4EE3;&#x539F;&#x6765;&#x7684;&#x50CF;&#x7D20;&#x989C;&#x8272;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A;&#x6DE1;&#x7D2B;&#x8272;&#x7684;&#x50CF;&#x7D20;&#x5728;&#x6211;&#x4EEC;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#x53EF;&#x80FD;&#x4F1A;&#x88AB;&#x66FF;&#x6362;&#x4E3A;&#x84DD;&#x8272;&#xFF0C;&#x56E0;&#x4E3A;&#x6DE1;&#x7D2B;&#x8272;&#x5728;&#x8DDD;&#x79BB;&#x4E0A;&#x6700;&#x63A5;&#x8FD1;&#x84DD;&#x8272;&#x3002;</p>
</li>
<li>
<p><strong>&#x4FDD;&#x5B58;&#x6620;&#x5C04;&#x4FE1;&#x606F;</strong>&#xFF1A;&#x4E3A;&#x4E86;&#x91CD;&#x6784;&#x539F;&#x56FE;&#x50CF;&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x4FDD;&#x5B58;&#x989C;&#x8272;&#x7684;&#x6620;&#x5C04;&#x4FE1;&#x606F;&#xFF0C;&#x5373;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x989C;&#x8272;&#x5BF9;&#x5E94;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#x4E2D;&#x7684;&#x989C;&#x8272;&#x5E8F;&#x53F7;&#x3002;&#x6709;&#x4E86;&#x8FD9;&#x4E2A;&#x4FE1;&#x606F;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4ECE;&#x4EE3;&#x7801;&#x7C3F;&#x4E2D;&#x627E;&#x5230;&#x6B63;&#x786E;&#x7684;&#x989C;&#x8272;&#x6765;&#x91CD;&#x65B0;&#x6784;&#x5EFA;&#x56FE;&#x50CF;&#x3002;</p>
</li>
</ol>
<p>&#x5411;&#x91CF;&#x91CF;&#x5316;&#xFF08;VQ&#xFF0C;Vector Quantization&#xFF09;&#x7684;&#x4EE3;&#x7801;&#x7C3F;&#x4E00;&#x822C;&#x901A;&#x8FC7;&#x65E0;&#x76D1;&#x7763;&#x5B66;&#x4E60;&#x65B9;&#x6CD5;&#x83B7;&#x5F97;&#xFF0C;&#x5176;&#x4E2D;&#x6700;&#x5E38;&#x89C1;&#x7684;&#x5C31;&#x662F;k-means&#x805A;&#x7C7B;&#x7B97;&#x6CD5;&#x3002;&#x4F8B;&#x5B50;&#xFF1A;</p>
<h2 id="VQ-Layer &#x7684;&#x8BAD;&#x7EC3;"><a href="#VQ-Layer &#x7684;&#x8BAD;&#x7EC3;"></a>VQ-Layer &#x7684;&#x8BAD;&#x7EC3;</h2>
<p>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;VQ&#x5C42;&#x901A;&#x5E38;&#x6D89;&#x53CA;&#x4EE5;&#x4E0B;&#x51E0;&#x4E2A;&#x6B65;&#x9AA4;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;&#x4E00;&#x4E2A;&#x7801;&#x672C;&#xFF08;Codebook&#xFF09;</strong>&#xFF1A;&#x8FD9;&#x662F;&#x4E00;&#x7EC4;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x7684;&#x5411;&#x91CF;&#xFF0C;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x4E2D;&#x4F1A;&#x9010;&#x6E10;&#x66F4;&#x65B0;&#x8FD9;&#x4E9B;&#x5411;&#x91CF;&#xFF0C;&#x4EE5;&#x4FBF;&#x5B83;&#x4EEC;&#x4EE3;&#x8868;&#x6570;&#x636E;&#x4E2D;&#x7684;&#x901A;&#x7528;&#x6A21;&#x5F0F;&#x3002;</p>
</li>
<li>
<p><strong>&#x524D;&#x5411;&#x4F20;&#x64AD;&#xFF08;Forward Pass&#xFF09;</strong>&#xFF1A;&#x5728;&#x524D;&#x5411;&#x4F20;&#x64AD;&#x671F;&#x95F4;&#xFF0C;&#x6A21;&#x578B;&#x63A5;&#x6536;&#x8F93;&#x5165;&#x7684;&#x8FDE;&#x7EED;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x5C06;&#x5176;&#x6620;&#x5C04;&#x5230;&#x7801;&#x672C;&#x4E2D;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x5411;&#x91CF;&#x4E0A;&#xFF0C;&#x8FD9;&#x4E00;&#x6B65;&#x79F0;&#x4E3A;&#x91CF;&#x5316;&#x3002;</p>
</li>
<li>
<p><strong>&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF08;Loss Function&#xFF09;</strong>&#xFF1A;VQ&#x5C42;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x635F;&#x5931;&#x51FD;&#x6570;&#x6765;&#x6307;&#x5BFC;&#x5B66;&#x4E60;&#x8FC7;&#x7A0B;&#x3002;&#x901A;&#x5E38;&#x6709;&#x4E24;&#x90E8;&#x5206;&#x7EC4;&#x6210;&#x2014;&#x2014;&#x91CF;&#x5316;&#x635F;&#x5931;&#x548C;&#x7801;&#x672C;&#x635F;&#x5931;&#x3002;&#x91CF;&#x5316;&#x635F;&#x5931;&#x9F13;&#x52B1;&#x8F93;&#x5165;&#x9760;&#x8FD1;&#x5B83;&#x4EEC;&#x5BF9;&#x5E94;&#x7684;&#x7801;&#x672C;&#x5411;&#x91CF;&#xFF0C;&#x7801;&#x672C;&#x635F;&#x5931;&#x5219;&#x4FDD;&#x8BC1;&#x7801;&#x672C;&#x5411;&#x91CF;&#x9760;&#x8FD1;&#x8F93;&#x5165;&#x6570;&#x636E;&#x3002;</p>
</li>
</ol>
<p><em>&#x4EE3;&#x7801;&#x4F8B;&#x5B50;</em></p>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn.functional <span class="hljs-keyword">as</span> F
<span class="hljs-comment"># &#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#x91CF;&#x5316;&#x6A21;&#x5757;&#xFF0C;&#x4F5C;&#x4E3A;PyTorch nn.Module&#x7684;&#x5B50;&#x7C7B;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">VectorQuantizer</span>(<span class="hljs-params">nn.Module</span>):</span>
    <span class="hljs-comment"># &#x521D;&#x59CB;&#x5316;&#x51FD;&#x6570;&#xFF0C;&#x8BBE;&#x5B9A;&#x5C42;&#x7684;&#x53C2;&#x6570;</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self, num_embeddings, embedding_dim, commitment_cost</span>):</span>
        <span class="hljs-built_in">super</span>(VectorQuantizer, self).__init__()  <span class="hljs-comment"># &#x8C03;&#x7528;&#x8D85;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;</span>

        self.embedding_dim = embedding_dim      <span class="hljs-comment"># &#x7801;&#x4E66;&#x4E2D;&#x6BCF;&#x4E2A;&#x5411;&#x91CF;&#x7684;&#x7EF4;&#x5EA6;</span>
        self.num_embeddings = num_embeddings    <span class="hljs-comment"># &#x7801;&#x4E66;&#x4E2D;&#x7684;&#x5411;&#x91CF;&#x6570;&#x91CF;</span>
        self.commitment_cost = commitment_cost  <span class="hljs-comment"># &#x5E73;&#x8861;&#x7801;&#x4E66;&#x635F;&#x5931;&#x7684;&#x8D85;&#x53C2;&#x6570;</span>

        <span class="hljs-comment"># &#x521D;&#x59CB;&#x5316;&#x5D4C;&#x5165;&#x5C42;&#xFF0C;&#x8FD9;&#x5728;VQ&#x4E2D;&#x4F5C;&#x4E3A;&#x7801;&#x4E66;&#x6765;&#x4F7F;&#x7528;</span>
        self.embedding = nn.Embedding(num_embeddings, embedding_dim)
        <span class="hljs-comment"># &#x5C06;&#x7801;&#x4E66;&#x5411;&#x91CF;&#x521D;&#x59CB;&#x5316;&#x4E3A;&#x56F4;&#x7ED5;&#x96F6;&#x5747;&#x5300;&#x5206;&#x5E03;&#x7684;&#x5C0F;&#x503C;</span>
        self.embedding.weight.data.uniform_(-<span class="hljs-number">1</span> / num_embeddings, <span class="hljs-number">1</span> / num_embeddings)

    <span class="hljs-comment"># &#x6A21;&#x5757;&#x7684;&#x524D;&#x5411;&#x4F20;&#x64AD;&#x51FD;&#x6570;</span>
<span class="hljs-comment">#     x = torch.tensor([</span>
<span class="hljs-comment">#     [1.0, 1.0],</span>
<span class="hljs-comment">#     [2.0, 2.0],</span>
<span class="hljs-comment">#     [3.0, 3.0]</span>
<span class="hljs-comment"># ])</span>

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span>(<span class="hljs-params">self, x</span>):</span>
        <span class="hljs-comment"># &#x5C06;&#x8F93;&#x5165;&#x5F20;&#x91CF;&#x5C55;&#x5E73;&#xFF0C;&#x4E0E;&#x7801;&#x4E66;&#x7EF4;&#x5EA6;&#x5339;&#x914D;</span>
        flat_x = x.view(-<span class="hljs-number">1</span>, self.embedding_dim)
        
        <span class="hljs-comment"># &#x8BA1;&#x7B97;&#x6BCF;&#x4E2A;&#x8F93;&#x5165;&#x548C;&#x7801;&#x4E66;&#x5411;&#x91CF;&#x4E4B;&#x95F4;&#x7684;&#x5E73;&#x65B9;&#x6B27;&#x6C0F;&#x8DDD;&#x79BB;&#xFF0C;&#x5B9E;&#x9645;&#x5C31;&#x662F;&#x5E73;&#x65B9;&#x6839;</span>
        distances = (
            torch.<span class="hljs-built_in">sum</span>(flat_x**<span class="hljs-number">2</span>, dim=<span class="hljs-number">1</span>, keepdim=<span class="hljs-literal">True</span>) 
            + torch.<span class="hljs-built_in">sum</span>(self.embedding.weight**<span class="hljs-number">2</span>, dim=<span class="hljs-number">1</span>)
            - <span class="hljs-number">2</span> * torch.matmul(flat_x, self.embedding.weight.t())
        )
        
        <span class="hljs-comment"># &#x627E;&#x5230;&#x6BCF;&#x4E2A;&#x8F93;&#x5165;&#x5411;&#x91CF;&#x6700;&#x8FD1;&#x7684;&#x7801;&#x4E66;&#x5411;&#x91CF;</span>
<span class="hljs-comment"># eg: distances = torch.tensor([</span>
<span class="hljs-comment">#     [5.0, 3.0, 2.0, 7.0],</span>
<span class="hljs-comment">#     [1.0, 8.0, 6.0, 3.0],</span>
<span class="hljs-comment">#     [7.0, 3.0, 5.0, 6.0]</span>
<span class="hljs-comment"># ]) -&gt; argmin [2, 0, 1] -&gt; unsqueeze tensor([[2], [0], [1]])</span>
        encoding_indices = torch.argmin(distances, dim=<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">1</span>)
        
        <span class="hljs-comment"># &#x4F7F;&#x7528;&#x6536;&#x96C6;&#x7684;&#x7D22;&#x5F15;&#x4ECE;&#x7801;&#x4E66;&#x4E2D;&#x9009;&#x53D6;&#x91CF;&#x5316;&#x5411;&#x91CF;</span>
<span class="hljs-comment">#     eg:    embedding_weights = torch.tensor([</span>
<span class="hljs-comment">#     [10.0, 10.0],</span>
<span class="hljs-comment">#     [20.0, 20.0],</span>
<span class="hljs-comment">#     [30.0, 30.0],</span>
<span class="hljs-comment">#     [40.0, 40.0]</span>
<span class="hljs-comment"># ]) -&gt; &#x4ECE;&#x7801;&#x4E66;&#x4E2D;&#x9009;&#x53D6;&#x5BF9;&#x5E94;&#x884C;&#x6570; [2, 0, 1] -&gt; quantized = tensor([[30.0, 30.0], [10.0, 10.0], [20.0, 20.0]]) </span>
        quantized = torch.index_select(self.embedding.weight, <span class="hljs-number">0</span>, encoding_indices.view(-<span class="hljs-number">1</span>)).view_as(x)
        
        <span class="hljs-comment"># &#x8BA1;&#x7B97;Commitment&#x635F;&#x5931;&#xFF0C;&#x4EE5;&#x786E;&#x4FDD;&#x91CF;&#x5316;&#x5411;&#x91CF;&#x63A5;&#x8FD1;&#x8F93;&#x5165;</span>
        <span class="hljs-comment"># e_latent_loss = ((1.0 - 30.0)**2 + (1.0 - 30.0)**2 + (2.0 - 10.0)**2 + (2.0 - 10.0)**2 + (3.0 - 20.0)**2 + (3.0 - 20.0)**2) / 6 e_latent_loss = 421.0</span>
        e_latent_loss = F.mse_loss(quantized.detach(), x)
        <span class="hljs-comment"># &#x8BA1;&#x7B97;&#x7801;&#x4E66;&#x635F;&#x5931;&#xFF0C;&#x4EE5;&#x786E;&#x4FDD;&#x7801;&#x4E66;&#x5411;&#x91CF;&#x5411;&#x8F93;&#x5165;&#x79FB;&#x52A8;</span>
        q_latent_loss = F.mse_loss(quantized, x.detach())
        <span class="hljs-comment"># &#x603B;&#x635F;&#x5931;&#x7ED3;&#x5408;&#x8FD9;&#x4E24;&#x4E2A;&#x635F;&#x5931;&#x548C;&#x4E00;&#x4E2A;commitment cost&#x8D85;&#x53C2;&#x6570;</span>
        loss = q_latent_loss + self.commitment_cost * e_latent_loss

        <span class="hljs-comment"># &#x4F7F;&#x7528;&#x76F4;&#x901A;&#x4F30;&#x8BA1;&#x5668;&#x4F7F;&#x5C42;&#x4F5C;&#x4E3A;&#x8EAB;&#x4EFD;&#x901A;&#x884C;&#xFF0C;&#x4F46;&#x4FDD;&#x6301;&#x68AF;&#x5EA6;</span>
        <span class="hljs-comment"># &#x5BF9;&#x4E8E;VAE&#xFF0C;&#x4E3B;&#x8981;&#x89E3;&#x51B3;&#x7684;&#x662F;&#x968F;&#x673A;&#x91C7;&#x6837;&#x65E0;&#x6CD5;&#x8FDB;&#x884C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF1B;&#x800C;&#x5BF9;&#x4E8E;&#x76F4;&#x901A;&#x4F30;&#x8BA1;&#xFF0C;&#x4E3B;&#x8981;&#x662F;&#x89E3;&#x51B3;&#x975E;&#x8FDE;&#x7EED;&#x51FD;&#x6570;&#x65E0;&#x6CD5;&#x8FDB;&#x884C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x3002;&#x867D;&#x7136;&#x4E24;&#x8005;&#x90FD;&#x5C5E;&#x4E8E;&#x68AF;&#x5EA6;&#x4F30;&#x8BA1;&#x7684;&#x8303;&#x7574;&#xFF0C;&#x4F46;&#x5E94;&#x7528;&#x7684;&#x95EE;&#x9898;&#x5374;&#x6709;&#x6240;&#x4E0D;&#x540C;&#x3002;</span>
        quantized = x + (quantized - x).detach()  
        <span class="hljs-comment">#avg_probs&#x8BA1;&#x7B97;&#x6BCF;&#x4E2A;&#x7801;&#x672C;&#x5411;&#x91CF;&#x5728;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x5E73;&#x5747;&#x4F7F;&#x7528;&#x9891;&#x7387;&#x3002;&#x56F0;&#x60D1;&#x5EA6;&#x662F;&#x8861;&#x91CF;&#x7801;&#x4E66;&#x6709;&#x591A;&#x5C11;&#x4E2A;&#x4E0D;&#x540C;&#x5411;&#x91CF;&#x88AB;&#x9891;&#x7E41;&#x4F7F;&#x7528;&#x7684;&#x6307;&#x6807;&#x3002;</span>
        <span class="hljs-comment"># avg_probs = torch.mean([0.33, 0.33, 0.33])   # num_embeddings = 4 avg_probs = 0.33</span>
        avg_probs = torch.mean(encoding_indices.<span class="hljs-built_in">float</span>() / self.num_embeddings, dim=<span class="hljs-number">0</span>)
        perplexity = torch.exp(-torch.<span class="hljs-built_in">sum</span>(avg_probs * torch.log(avg_probs + <span class="hljs-number">1e-10</span>)))

        <span class="hljs-comment"># &#x8FD4;&#x56DE;&#x91CF;&#x5316;&#x7ED3;&#x679C;&#x3001;&#x635F;&#x5931;&#x548C;&#x6279;&#x6B21;&#x7684;&#x590D;&#x6742;&#x6027;</span>
        <span class="hljs-keyword">return</span> quantized, loss, perplexity

<span class="hljs-comment"># &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5177;&#x6709;&#x7279;&#x5B9A;&#x53C2;&#x6570;&#x7684;&#x5B9A;&#x4E49;&#x597D;&#x7684;VQ&#x5C42;&#x5B9E;&#x4F8B;&#x3002;</span>
embedding_dim = <span class="hljs-number">64</span>
num_embeddings = <span class="hljs-number">256</span>
commitment_cost = <span class="hljs-number">0.25</span>
vq_layer = VectorQuantizer(num_embeddings, embedding_dim, commitment_cost)

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4E2A;&#x6A21;&#x62DF;&#x7684;&#x8F93;&#x5165;tensor &apos;x&apos;&#xFF0C;&#x5177;&#x6709;&#x7ED9;&#x5B9A;&#x7684;&#x7EF4;&#x5EA6;&#x3002;</span>
batch_size, height, width, embedding_dim = <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">64</span>
x = torch.randn(batch_size, height, width, embedding_dim)

<span class="hljs-comment"># &#x6267;&#x884C;&#x524D;&#x5411;&#x4F20;&#x64AD;&#xFF0C;&#x83B7;&#x53D6;&#x91CF;&#x5316;&#x7684;&#x8F93;&#x51FA;&#xFF0C;&#x635F;&#x5931;&#x548C;&#x590D;&#x6742;&#x6027;&#x5EA6;&#x91CF;&#x3002;</span>
quantized, loss, perplexity = vq_layer(x)

<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Quantized output shape: &quot;</span>, quantized.shape)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;VQ loss: &quot;</span>, loss)
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#x7684;<code>VectorQuantizer</code>&#x7C7B;&#x5B9A;&#x4E49;&#x4E86;VQ&#x5C42;&#x7684;&#x6838;&#x5FC3;&#x529F;&#x80FD;&#x3002;&#x5728;&#x524D;&#x5411;&#x4F20;&#x64AD;&#x4E2D;&#xFF0C;<code>x</code>&#x8F93;&#x5165;&#x88AB;&#x91CF;&#x5316;&#x5230;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x7801;&#x672C;&#x5411;&#x91CF;&#xFF0C;&#x8BA1;&#x7B97;&#x635F;&#x5931;&#x540E;&#x8FD4;&#x56DE;&#x91CF;&#x5316;&#x7684;&#x8F93;&#x51FA;&#x3001;&#x635F;&#x5931;&#x4EE5;&#x53CA;&#x4E00;&#x4E2A;&#x5EA6;&#x91CF;&#x7801;&#x672C;&#x4F7F;&#x7528;&#x60C5;&#x51B5;&#x7684;&#x590D;&#x6742;&#x5EA6;(perplexity)&#x6307;&#x6807;&#x3002;&#x5728;&#x8BAD;&#x7EC3;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x635F;&#x5931;&#x5C06;&#x88AB;&#x7528;&#x6765;&#x66F4;&#x65B0;&#x7801;&#x672C;&#x5411;&#x91CF;&#x4EE5;&#x53CA;&#x53EF;&#x80FD;&#x7684;&#x5176;&#x4ED6;&#x7F51;&#x7EDC;&#x53C2;&#x6570;&#x3002;</p>
<h2 id="Label Smoothing"><a href="#Label Smoothing"></a>Label Smoothing</h2>
<p>Label Smoothing &#x662F;&#x4E00;&#x79CD;&#x6B63;&#x5219;&#x5316;&#x6280;&#x672F;&#xFF0C;&#x7528;&#x4E8E;&#x51CF;&#x5C11;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BF9;&#x7279;&#x5B9A;&#x6807;&#x7B7E;&#x7684;&#x8FC7;&#x5EA6;&#x81EA;&#x4FE1;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x4E00;&#x4E2A;&#x7C7B;&#x522B;&#x7684;&#x6807;&#x7B7E;&#x5206;&#x5E03;&#x7A0D;&#x5FAE;&#x5E73;&#x6ED1;&#x5316;&#xFF0C;&#x4F7F;&#x5F97;&#x6A21;&#x578B;&#x4E0D;&#x4F1A;&#x8FC7;&#x5EA6;&#x62DF;&#x5408;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E2D;&#x7684;&#x566A;&#x58F0;&#x3002;</p>
<h3 id="Label Smoothing &#x7684;&#x6982;&#x5FF5;"><a href="#Label Smoothing &#x7684;&#x6982;&#x5FF5;"></a>Label Smoothing &#x7684;&#x6982;&#x5FF5;</h3>
<p>&#x5728;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x6807;&#x51C6;&#x7684;&#x4E00;&#x4E2A;&#x70ED;&#x7F16;&#x7801;&#xFF08;one-hot encoding&#xFF09;&#x5C06;&#x76EE;&#x6807;&#x6807;&#x7B7E;&#x8868;&#x793A;&#x4E3A;&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#xFF0C;&#x5176;&#x4E2D;&#x6B63;&#x786E;&#x7684;&#x7C7B;&#x522B;&#x88AB;&#x7F16;&#x7801;&#x4E3A; 1&#xFF0C;&#x5176;&#x4ED6;&#x7C7B;&#x522B;&#x88AB;&#x7F16;&#x7801;&#x4E3A; 0&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5BF9;&#x4E8E;&#x4E00;&#x4E2A; 4 &#x7C7B;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x5982;&#x679C;&#x6B63;&#x786E;&#x7C7B;&#x522B;&#x662F;&#x7B2C; 2 &#x7C7B;&#xFF0C;&#x6807;&#x7B7E;&#x5411;&#x91CF;&#x662F; [0, 1, 0, 0]&#x3002;</p>
<p>&#x4F7F;&#x7528; Label Smoothing&#xFF0C;&#x6211;&#x4EEC;&#x5C06;&#x76EE;&#x6807;&#x6807;&#x7B7E;&#x4ECE;&#x4E00;&#x4E2A;&#x70ED;&#x7F16;&#x7801;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5E73;&#x6ED1;&#x5206;&#x5E03;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5BF9;&#x4E8E;&#x4E00;&#x4E2A; 4 &#x7C7B;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x6807;&#x7B7E;&#x5411;&#x91CF; [0, 1, 0, 0] &#x8F6C;&#x6362;&#x4E3A; [0.1, 0.7, 0.1, 0.1]&#xFF0C;&#x5176;&#x4E2D;0.1&#x8868;&#x793A;&#x7684;&#x662F;&#x5E73;&#x6ED1;&#x56E0;&#x5B50;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</p>
<h3 id="&#x5177;&#x4F53;&#x4F8B;&#x5B50;"><a href="#&#x5177;&#x4F53;&#x4F8B;&#x5B50;"></a>&#x5177;&#x4F53;&#x4F8B;&#x5B50;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A; 3 &#x7C7B;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#xFF1A;</p>
<ol>
<li>&#x7C7B;&#x522B; A</li>
<li>&#x7C7B;&#x522B; B</li>
<li>&#x7C7B;&#x522B; C</li>
</ol>
<p>&#x6807;&#x51C6;&#x4E00;&#x4E2A;&#x70ED;&#x7F16;&#x7801;&#x6807;&#x7B7E;&#xFF08;&#x6CA1;&#x6709; Label Smoothing&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x7C7B;&#x522B; A &#x7684;&#x6807;&#x7B7E;&#xFF1A; [1, 0, 0]</li>
<li>&#x7C7B;&#x522B; B &#x7684;&#x6807;&#x7B7E;&#xFF1A; [0, 1, 0]</li>
<li>&#x7C7B;&#x522B; C &#x7684;&#x6807;&#x7B7E;&#xFF1A; [0, 0, 1]</li>
</ul>
<p>&#x4F7F;&#x7528; Label Smoothing &#x540E;&#x7684;&#x6807;&#x7B7E;&#xFF08;&#x5047;&#x8BBE;&#x5E73;&#x6ED1;&#x53C2;&#x6570;&#x4E3A; 0.1&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x7C7B;&#x522B; A &#x7684;&#x6807;&#x7B7E;&#xFF1A; [0.9, 0.05, 0.05]</li>
<li>&#x7C7B;&#x522B; B &#x7684;&#x6807;&#x7B7E;&#xFF1A; [0.05, 0.9, 0.05]</li>
<li>&#x7C7B;&#x522B; C &#x7684;&#x6807;&#x7B7E;&#xFF1A; [0.05, 0.05, 0.9]</li>
</ul>
<h3 id="&#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;"><a href="#&#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;"></a>&#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x7C7B;&#x522B;&#x6570;&#x4E3A; $ k $ &#x7684;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x5E73;&#x6ED1;&#x56E0;&#x5B50;&#x4E3A; $ \\epsilon $&#x3002;&#x5BF9;&#x6BCF;&#x4E2A;&#x6807;&#x7B7E;&#x7684;&#x8F6C;&#x6362;&#x516C;&#x5F0F;&#x4E3A;&#xFF1A;</p>
<p>$ y_{\\text{smoothed}} = (1 - \\epsilon) \\cdot y_{\\text{one-hot}} + \\frac{\\epsilon}{k} $</p>
<p>&#x5176;&#x4E2D;&#xFF0C;$ y_{\\text{one-hot}} $ &#x662F;&#x4E00;&#x4E2A;&#x70ED;&#x7F16;&#x7801;&#x6807;&#x7B7E;&#x5411;&#x91CF;&#xFF0C;$ y_{\\text{smoothed}} $ &#x662F;&#x5E73;&#x6ED1;&#x540E;&#x7684;&#x6807;&#x7B7E;&#x5411;&#x91CF;&#x3002;</p>
<h3 id="&#x5B9E;&#x9645;&#x5E94;&#x7528;"><a href="#&#x5B9E;&#x9645;&#x5E94;&#x7528;"></a>&#x5B9E;&#x9645;&#x5E94;&#x7528;</h3>
<h4 id="1. &#x56FE;&#x50CF;&#x5206;&#x7C7B;"><a href="#1. &#x56FE;&#x50CF;&#x5206;&#x7C7B;"></a>1. &#x56FE;&#x50CF;&#x5206;&#x7C7B;</h4>
<p>&#x5728;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528; Label Smoothing &#x53EF;&#x4EE5;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BF9;&#x7279;&#x5B9A;&#x7C7B;&#x522B;&#x7684;&#x8FC7;&#x5EA6;&#x81EA;&#x4FE1;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5F53;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E2D;&#x5B58;&#x5728;&#x566A;&#x58F0;&#x65F6;&#x3002;&#x8FD9;&#x6709;&#x52A9;&#x4E8E;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#xFF0C;&#x4ECE;&#x800C;&#x5728;&#x6D4B;&#x8BD5;&#x6570;&#x636E;&#x4E0A;&#x7684;&#x8868;&#x73B0;&#x66F4;&#x597D;&#x3002;</p>
<h4 id="2. &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;"><a href="#2. &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;"></a>2. &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;</h4>
<p>&#x5728;&#x673A;&#x5668;&#x7FFB;&#x8BD1;&#x3001;&#x6587;&#x672C;&#x5206;&#x7C7B;&#x7B49;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;Label Smoothing &#x4E5F;&#x88AB;&#x5E7F;&#x6CDB;&#x4F7F;&#x7528;&#x3002;&#x5B83;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x5728;&#x5904;&#x7406;&#x8BCD;&#x6C47;&#x8868;&#x8F83;&#x5927;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x66F4;&#x597D;&#x5730;&#x8FDB;&#x884C;&#x5206;&#x7C7B;&#x548C;&#x9884;&#x6D4B;&#x3002;</p>
<h3 id="&#x4EE3;&#x7801;&#x793A;&#x4F8B;&#xFF08;&#x4F7F;&#x7528; PyTorch&#xFF09;"><a href="#&#x4EE3;&#x7801;&#x793A;&#x4F8B;&#xFF08;&#x4F7F;&#x7528; PyTorch&#xFF09;"></a>&#x4EE3;&#x7801;&#x793A;&#x4F8B;&#xFF08;&#x4F7F;&#x7528; PyTorch&#xFF09;</h3>
<pre><code class="language-python"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">import</span> torch.optim <span class="hljs-keyword">as</span> optim

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A; 3 &#x7C7B;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;</span>
num_classes = <span class="hljs-number">3</span>
batch_size = <span class="hljs-number">2</span>

<span class="hljs-comment"># &#x771F;&#x5B9E;&#x6807;&#x7B7E;</span>
true_labels = torch.tensor([<span class="hljs-number">0</span>, <span class="hljs-number">2</span>])  <span class="hljs-comment"># &#x7C7B;&#x522B; A &#x548C; &#x7C7B;&#x522B; C</span>

<span class="hljs-comment"># &#x4E00;&#x4E2A;&#x70ED;&#x7F16;&#x7801;&#x6807;&#x7B7E;</span>
one_hot_labels = torch.eye(num_classes)[true_labels]

<span class="hljs-comment"># Label Smoothing &#x53C2;&#x6570;</span>
epsilon = <span class="hljs-number">0.1</span>

<span class="hljs-comment"># &#x5E73;&#x6ED1;&#x540E;&#x7684;&#x6807;&#x7B7E;</span>
smoothed_labels = one_hot_labels * (<span class="hljs-number">1</span> - epsilon) + epsilon / num_classes

<span class="hljs-comment"># &#x6A21;&#x578B;&#x548C;&#x635F;&#x5931;&#x51FD;&#x6570;</span>
model = nn.Linear(<span class="hljs-number">10</span>, num_classes)
criterion = nn.CrossEntropyLoss()

<span class="hljs-comment"># &#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E9B;&#x8F93;&#x5165;&#x6570;&#x636E;</span>
inputs = torch.randn(batch_size, <span class="hljs-number">10</span>)

<span class="hljs-comment"># &#x524D;&#x5411;&#x4F20;&#x64AD;</span>
outputs = model(inputs)

<span class="hljs-comment"># &#x8BA1;&#x7B97;&#x635F;&#x5931;</span>
loss = criterion(outputs, smoothed_labels)

<span class="hljs-comment"># &#x53CD;&#x5411;&#x4F20;&#x64AD;&#x548C;&#x4F18;&#x5316;</span>
loss.backward()
optimizer = optim.SGD(model.parameters(), lr=<span class="hljs-number">0.01</span>)
optimizer.step()

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Smoothed labels: <span class="hljs-subst">{smoothed_labels}</span>&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Loss: <span class="hljs-subst">{loss.item()}</span>&quot;</span>)
</code></pre>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Label Smoothing &#x662F;&#x4E00;&#x79CD;&#x6709;&#x6548;&#x7684;&#x6B63;&#x5219;&#x5316;&#x6280;&#x672F;&#xFF0C;&#x901A;&#x8FC7;&#x5E73;&#x6ED1;&#x6807;&#x7B7E;&#x5206;&#x5E03;&#xFF0C;&#x51CF;&#x5C11;&#x6A21;&#x578B;&#x5BF9;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x7684;&#x8FC7;&#x5EA6;&#x62DF;&#x5408;&#xFF0C;&#x63D0;&#x9AD8;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;&#x5B83;&#x5728;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x3001;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;&#x7B49;&#x4EFB;&#x52A1;&#x4E2D;&#x90FD;&#x6709;&#x5E7F;&#x6CDB;&#x5E94;&#x7528;&#xFF0C;&#x80FD;&#x591F;&#x663E;&#x8457;&#x63D0;&#x5347;&#x6A21;&#x578B;&#x5728;&#x6D4B;&#x8BD5;&#x96C6;&#x4E0A;&#x7684;&#x8868;&#x73B0;&#x3002;</p>
`,n=[{level:3,title:"1. 参数正则化",children:[]},{level:3,title:"2. 数据正则化",children:[]},{level:3,title:"3. 标签正则化",children:[]},{level:3,title:"4. 模型结构正则化",children:[]},{level:3,title:"5. 对抗训练 (Adversarial Training)",children:[]},{level:3,title:"6. Batch Normalization",children:[]},{level:3,title:"具体例子",children:[{level:4,title:"1. 参数正则化（L2正则化）",children:[]},{level:4,title:"2. 数据正则化（Dropout）",children:[]}]},{level:2,title:"VQ 正则",children:[{level:3,title:"VQ 过程",children:[]}]},{level:2,title:"VQ-Layer 的训练",children:[]},{level:2,title:"Label Smoothing",children:[{level:3,title:"Label Smoothing 的概念",children:[]},{level:3,title:"具体例子",children:[]},{level:3,title:"计算过程",children:[]},{level:3,title:"实际应用",children:[{level:4,title:"1. 图像分类",children:[]},{level:4,title:"2. 自然语言处理",children:[]}]},{level:3,title:"代码示例（使用 PyTorch）",children:[]},{level:3,title:"总结",children:[]}]}];export{x as attributes,s as html,n as nestedHeaders};
