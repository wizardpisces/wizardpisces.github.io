const x={},F=`<h1 id="&#x53CD;&#x5411;&#x4F20;&#x64AD;"><a href="#&#x53CD;&#x5411;&#x4F20;&#x64AD;"></a>&#x53CD;&#x5411;&#x4F20;&#x64AD;</h1>
<p>&#x6709;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x795E;&#x7ECF;&#x5143;&#x51FD;&#x6570; y = w * x&#xFF0C;&#x6A21;&#x62DF;&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#x548C;&#x8FDB;&#x884C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x7684;&#x8FC7;&#x7A0B;&#x3002;</p>
<p>&#x4E00;&#x6B21;&#x6743;&#x91CD;&#x66F4;&#x65B0;&#x8FC7;&#x7A0B;&#xFF08;&#x7ED9;&#x5B9A;&#x521D;&#x59CB;&#x6570;&#x636E;&#x8F93;&#x5165; x = 1&#xFF0C;w = 10&#xFF0C;&#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x662F; 10&#xFF0C;&#x671F;&#x671B;&#x8F93;&#x51FA; y1 = 2 &#x5219; &#x76EE;&#x6807; w &#x4E3A; 2&#xFF09;&#xFF1A;</p>
<pre><code>&#x8F93;&#x5165; x = 1
&#x521D;&#x59CB;&#x6743;&#x91CD; w = 10
&#x8BA1;&#x7B97;&#x8F93;&#x51FA; y = w * x = 10 * 1 = 10
</code></pre>
<p>&#x8BA1;&#x7B97;&#x635F;&#x5931;&#xFF1A;</p>
<pre><code>&#x7ED9;&#x5B9A;&#x671F;&#x671B;&#x8F93;&#x51FA; y1 = 2
&#x8BA1;&#x7B97;&#x635F;&#x5931;&#x51FD;&#x6570; loss = (y1 - y)^2 = (2 - 10)^2 = 64
</code></pre>
<p>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#xFF1A;</p>
<pre><code>&#x635F;&#x5931;&#x51FD;&#x6570;&#x5BF9;&#x6743;&#x91CD; w &#x7684;&#x68AF;&#x5EA6;&#xFF1A;dL/dw = 2 * (y1 - y) * (-x)
&#x5C06;&#x5177;&#x4F53;&#x6570;&#x503C;&#x4EE3;&#x5165;&#xFF1A;

dL/dw = 2 * (2 - 10) * (-1) = 2 * (-8) * (-1) = 16
&#x56E0;&#x6B64;&#xFF0C;&#x68AF;&#x5EA6;&#x4E3A; dL/dw = 16&#x3002;
</code></pre>
<p>&#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF1A;</p>
<pre><code>&#x4F7F;&#x7528;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#x66F4;&#x65B0;&#x6743;&#x91CD; w&#xFF1A;
w = w - learning_rate * dL/dw
&#x5047;&#x8BBE;&#x5B66;&#x4E60;&#x7387;&#xFF08;learning rate&#xFF09;&#x4E3A; 0.1&#xFF0C;&#x5C06;&#x68AF;&#x5EA6;&#x4EE3;&#x5165;&#xFF1A;

w = 10 - 0.1 * 16 = 10 - 1.6 = 8.4
&#x66F4;&#x65B0;&#x540E;&#x7684;&#x6743;&#x91CD;&#x4E3A; w = 8.4&#x3002;
</code></pre>
<h1 id="CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;"><a href="#CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;"></a>CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;</h1>
<ol>
<li>&#x56FA;&#x5B9A; generator &#xFF08; real_label = [batch_size, 10] &#x7684;&#x5BF9;&#x771F;&#x5B9E; label&#x7684; one-hot &#x7F16;&#x7801; &#xFF09;
<ul>
<li>&#x7528;&#x771F;&#x6570;&#x636E;&#x8BAD;&#x7EC3; output_label = Discriminator(real_image)&#xFF0C;d_real_loss = BCELoss(out_label,real_label)</li>
<li>&#x7528;&#x865A;&#x5047;&#x6570;&#x636E;&#xFF08;&#x566A;&#x97F3; + &#x771F;&#x5B9E;&#x6807;&#x7B7E; [batch_size, noise_dim&#xFF08;&#x6EE1;&#x8DB3;0~1&#x6B63;&#x6001;&#x5206;&#x5E03;&#xFF09;] + real_label = [batch_size, noise_dim+10] = z_tensor &#xFF09;</li>
<li>&#x8BAD;&#x7EC3; fake_image = Generator(z_tensor) &#x5F97;&#x51FA; fake_image( Tensor[batch_size, 1, 28, 28])</li>
<li>&#x518D;&#x6B21; out_label = Discriminator(fake_image) &#xFF0C;d_fake_loss = BCELoss(out_label,fake_label(&#x5168;0))</li>
<li>&#x8BA1;&#x7B97; D_loss = d_real_loss + d_fake_loss &#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF0C;&#x66F4;&#x65B0; Discriminator</li>
</ul>
</li>
<li>&#x56FA;&#x5B9A; discriminator
<ul>
<li>&#x7531; fake_image = Generator(z_tensor)</li>
<li>&#x7531; Discriminator(fake_image) &#x5F97;&#x51FA; out_label &#xFF0C;g_loss = BCELoss(out_label,real_label)</li>
<li>&#x8BA1;&#x7B97; G_loss = g_loss &#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF0C;&#x66F4;&#x65B0; Generator</li>
</ul>
</li>
</ol>
<h1 id="&#x9884;&#x5904;&#x7406;"><a href="#&#x9884;&#x5904;&#x7406;"></a>&#x9884;&#x5904;&#x7406;</h1>
<ul>
<li>&#x5F52;&#x4E00;&#x5316;&#xFF1A;&#x4E00;&#x79CD;&#x5E38;&#x89C1;&#x7684;&#x56FE;&#x50CF;&#x9884;&#x5904;&#x7406;&#x64CD;&#x4F5C;&#xFF0C;&#x5B83;&#x7528;&#x4E8E;&#x5C06;&#x56FE;&#x50CF;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x5F52;&#x4E00;&#x5316;&#x4E3A;&#x5747;&#x503C;&#x4E3A;0&#x3001;&#x6807;&#x51C6;&#x5DEE;&#x4E3A;1&#x7684;&#x5206;&#x5E03;&#xFF0C;&#x6216;&#x8005;&#x53EA;&#x5C06;&#x6570;&#x636E;&#x6536;&#x7A84;&#x5230; -1 ~ 1 &#x4E4B;&#x95F4;&#x3002;&#x5E38;&#x7528;&#x4E8E; CNN &#x7F51;&#x7EDC;&#x6570;&#x636E;&#x9884;&#x5904;&#x7406;
<ul>
<li>&#x52A0;&#x901F;&#x8BAD;&#x7EC3;&#xFF1A;&#x5E38;&#x7528;&#x7684;&#x6FC0;&#x6D3B;&#x51FD;&#x6570;&#x5982; Sigmoid &#x548C; Tanh &#x5728;&#x8F93;&#x5165;&#x503C;&#x8F83;&#x5927;&#x6216;&#x8F83;&#x5C0F;&#x7684;&#x533A;&#x57DF;&#x4F1A;&#x9971;&#x548C;&#xFF0C;&#x5BFC;&#x81F4;&#x68AF;&#x5EA6;&#x63A5;&#x8FD1;&#x6216;&#x5B8C;&#x5168;&#x4E3A;&#x96F6;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x53D8;&#x5F97;&#x975E;&#x5E38;&#x7F13;&#x6162;&#x6216;&#x505C;&#x6EDE;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x8F93;&#x5165;&#x503C;&#x4F4D;&#x4E8E;&#x6FC0;&#x6D3B;&#x51FD;&#x6570;&#x7684;&#x7EBF;&#x6027;&#x533A;&#x57DF;&#xFF0C;&#x907F;&#x514D;&#x68AF;&#x5EA6;&#x9971;&#x548C;&#x95EE;&#x9898;&#xFF0C;&#x63D0;&#x9AD8;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x7A33;&#x5B9A;&#x6027;&#xFF1A;&#x5728;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x4E2D;&#xFF0C;&#x4F8B;&#x5982;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#xFF0C;&#x8F83;&#x5927;&#x7684;&#x68AF;&#x5EA6;&#x503C;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x8FC7;&#x5927;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x4F18;&#x5316;&#x8FC7;&#x7A0B;&#x4E0D;&#x7A33;&#x5B9A;&#x751A;&#x81F3;&#x53D1;&#x6563;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x68AF;&#x5EA6;&#x63A7;&#x5236;&#x5728;&#x8F83;&#x5C0F;&#x7684;&#x8303;&#x56F4;&#x5185;&#xFF0C;&#x63D0;&#x9AD8;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x7684;&#x6570;&#x503C;&#x7A33;&#x5B9A;&#x6027;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x66F4;&#x5BB9;&#x6613;&#x6536;&#x655B;&#x3002;</li>
<li>&#x6570;&#x636E;&#x5206;&#x5E03;&#x4E00;&#x81F4;&#x6027;&#xFF1A;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#x53EF;&#x4EE5;&#x4F7F;&#x4E0D;&#x540C;&#x56FE;&#x50CF;&#x4E4B;&#x95F4;&#x7684;&#x50CF;&#x7D20;&#x5206;&#x5E03;&#x66F4;&#x52A0;&#x4E00;&#x81F4;&#x3002;&#x8FD9;&#x6837;&#x505A;&#x7684;&#x76EE;&#x7684;&#x662F;&#x786E;&#x4FDD;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7684;&#x7EDF;&#x8BA1;&#x7279;&#x6027;&#x5728;&#x6574;&#x4E2A;&#x8BAD;&#x7EC3;&#x96C6;&#x4E0A;&#x662F;&#x76F8;&#x4F3C;&#x7684;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;</li>
<li>&#x63A8;&#x5E7F;&#xFF1A;Batch Normalization (BN) &#x5C42;&#x4F5C;&#x7528;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x662F;&#x5E94;&#x7528;&#x5728;<strong>&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;</strong>&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x5C0F;&#x6279;&#x91CF;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x6807;&#x51C6;&#x5316;</li>
</ul>
</li>
</ul>
<h1 id="&#x635F;&#x5931;&#x51FD;&#x6570;"><a href="#&#x635F;&#x5931;&#x51FD;&#x6570;"></a>&#x635F;&#x5931;&#x51FD;&#x6570;</h1>
<h2 id="&#x4EA4;&#x53C9;&#x71B5;"><a href="#&#x4EA4;&#x53C9;&#x71B5;"></a>&#x4EA4;&#x53C9;&#x71B5;</h2>
<ul>
<li>&#x71B5;&#xFF1A;&#x963F;&#x6839;&#x5EF7; 1/4&#x6982;&#x7387;&#x6253;&#x8FDB;&#x51B3;&#x8D5B; &#xFF0C;1/2 &#x6982;&#x7387;&#x83B7;&#x5F97;&#x51A0;&#x519B;&#xFF0C;1/8 &#x83B7;&#x5F97;&#x51A0;&#x519B;&#xFF0C;&#x5219;&#x6709; f(1/8) = f(1/2) + f(1/4)&#xFF0C;f(x) := &#x4FE1;&#x606F;&#x91CF;&#xFF0C;&#x63A8;&#x51FA;&#x53EF;&#x80FD;&#x7684; f(x) := -log(x) &#xFF08;log 2&#x4E3A;&#x5E95;&#x5355;&#x8C03;&#x4E0A;&#x5347;&#xFF0C;&#x52A0;&#x8D1F;&#x53F7;&#x624D;&#x5219;&#x5355;&#x8C03;&#x5411;&#x4E0B;&#xFF09;</li>
<li>&#x4EA4;&#x53C9;&#x71B5;&#xFF1A;KL &#x6563;&#x5EA6;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8861;&#x91CF;&#x4E24;&#x4E2A;&#x6982;&#x7387;&#x5206;&#x5E03;&#x4E4B;&#x95F4;&#x5DEE;&#x5F02;&#x7684;&#x5EA6;&#x91CF;&#xFF0C;KL(P || Q) = &#x3A3;(P(i) * log(P(i) / Q(i)))&#xFF0C;&#x56FA;&#x5B9A;&#x5206;&#x5E03; P &#x7684;&#x65F6;&#x5019; KL &#x6563;&#x5EA6;&#x53EF;&#x4EE5;&#x5316;&#x7B80;&#x4E3A;&#x4EA4;&#x53C9;&#x71B5; KL(P || Q) = &#x3A3;(P(i) * log(P(i) / Q(i))) = -&#x3A3;(P(i) * log(Q(i))) = -H(P, Q)&#xFF1B;&#x53EF;&#x4EE5;&#x5F88;&#x597D;&#x7684;&#x7528;&#x4E8E;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x635F;&#x5931;&#x8BA1;&#x7B97;</li>
</ul>
<h3 id="&#x95EE;&#x9898;"><a href="#&#x95EE;&#x9898;"></a>&#x95EE;&#x9898;</h3>
<ul>
<li>&#x56DE;&#x5F52;&#x8DDF;&#x5206;&#x7C7B;&#x533A;&#x522B;&#xFF1F;
<ul>
<li>&#x5206;&#x7C7B;&#x4F8B;&#x5B50;&#xFF1A;&#x8BC6;&#x522B;&#x56FE;&#x7247;&#x662F;&#x732B;&#x8FD8;&#x662F;&#x72D7;</li>
<li>&#x56DE;&#x5F52;&#x4F8B;&#x5B50;&#xFF1A;&#x901A;&#x8FC7;&#x7279;&#x5F81;1-n&#x9884;&#x6D4B;&#x623F;&#x4EF7;</li>
<li>&#x601D;&#x8003;&#xFF1A;&#x5206;&#x7C7B;&#x8DDF;&#x56DE;&#x5F52;&#x7684;&#x533A;&#x522B;&#x662F;&#x76EE;&#x6807;&#x7684; &#x79BB;&#x6563;&#x8DDF;&#x8FDE;&#x7EED; &#x533A;&#x522B;&#xFF1F;&#x8FD8;&#x662F;&#x8BF4;&#x8F93;&#x51FA;&#x7684;label&#x4E4B;&#x95F4;&#x662F;&#x5426;&#x6709;&#x201C;&#x8DDD;&#x79BB;&#x5EA6;&#x91CF;&#x201D;&#xFF1F;</li>
</ul>
</li>
<li>&#x4E3A;&#x4EC0;&#x4E48;&#x4EA4;&#x53C9;&#x71B5;&#x9002;&#x5408;&#x5206;&#x7C7B;&#xFF0C;&#x800C; MSE &#x9002;&#x5408;&#x56DE;&#x5F52;?
<ul>
<li>&#x4EA4;&#x53C9;&#x71B5;
<ul>
<li>&#x6982;&#x7387;&#x89E3;&#x91CA;&#x6027;&#xFF1A;&#x4EA4;&#x53C9;&#x71B5;&#x57FA;&#x4E8E;&#x6982;&#x7387;&#x5206;&#x5E03;&#x4E4B;&#x95F4;&#x7684;&#x5DEE;&#x5F02;&#x8FDB;&#x884C;&#x5EA6;&#x91CF;&#xFF0C;&#x66F4;&#x9002;&#x5408;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x56E0;&#x4E3A;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x901A;&#x5E38;&#x6D89;&#x53CA;&#x5BF9;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x7684;&#x6982;&#x7387;&#x5206;&#x5E03;&#x8FDB;&#x884C;&#x5EFA;&#x6A21;&#x548C;&#x9884;&#x6D4B;&#x3002;</li>
<li>&#x68AF;&#x5EA6;&#x66F4;&#x5F3A;&#x70C8;&#xFF1A;&#x76F8;&#x5BF9;&#x4E8E;MSE&#xFF0C;&#x4EA4;&#x53C9;&#x71B5;&#x7684;&#x68AF;&#x5EA6;&#x66F4;&#x52A0;&#x9661;&#x5CED;&#xFF0C;&#x8FD9;&#x53EF;&#x4EE5;&#x52A0;&#x5FEB;&#x6A21;&#x578B;&#x7684;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x3002;&#x5BF9;&#x4E8E;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x66F4;&#x5FEB;&#x7684;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x53EF;&#x80FD;&#x662F;&#x4E00;&#x4E2A;&#x4F18;&#x52BF;&#x3002;</li>
</ul>
</li>
<li>MES
<ul>
<li>&#x6570;&#x5B66;&#x4E0A;&#x7684;&#x5408;&#x7406;&#x6027;&#xFF1A;MSE &#x662F;&#x5BF9;&#x9884;&#x6D4B;&#x503C;&#x4E0E;&#x771F;&#x5B9E;&#x503C;&#x7684;&#x5DEE;&#x5F02;&#x7684;&#x5E73;&#x65B9;&#x8FDB;&#x884C;&#x5EA6;&#x91CF;&#xFF0C;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x5BF9;&#x9884;&#x6D4B;&#x8BEF;&#x5DEE;&#x7684;&#x8F83;&#x4E3A;&#x7CBE;&#x786E;&#x7684;&#x5EA6;&#x91CF;&#x3002;</li>
<li>&#x5BF9;&#x5F02;&#x5E38;&#x503C;&#x4E0D;&#x654F;&#x611F;&#xFF1A;&#x5E73;&#x65B9;&#x5DEE;&#x7684;&#x8BA1;&#x7B97;&#x4F7F;&#x5F97; MSE &#x5BF9;&#x5F02;&#x5E38;&#x503C;&#x4E0D;&#x654F;&#x611F;&#xFF0C;&#x56E0;&#x4E3A;&#x5E73;&#x65B9;&#x64CD;&#x4F5C;&#x4F1A;&#x653E;&#x5927;&#x5F02;&#x5E38;&#x503C;&#x7684;&#x5F71;&#x54CD;&#x3002;&#x8FD9;&#x5728;&#x67D0;&#x4E9B;&#x56DE;&#x5F52;&#x95EE;&#x9898;&#x4E2D;&#x53EF;&#x80FD;&#x662F;&#x6709;&#x76CA;&#x7684;&#x3002;</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://www.youtube.com/@wkaing">&#x738B;&#x6728;&#x5934;&#x5B66;&#x79D1;&#x5B66;</a></li>
<li>https://zhuanlan.zhihu.com/p/104130889</li>
<li><a href="https://cloud.tencent.com/developer/article/1604194">&#x56DE;&#x5F52;&#x4E0E;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x533A;&#x522B;</a></li>
</ul>
<h1 id="Transformer"><a href="#Transformer"></a>Transformer</h1>
<h2 id="positional encoding"><a href="#positional encoding"></a>positional encoding</h2>
<p>&#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#x7684;&#x8981;&#x6C42;&#xFF1A;&#x9009;&#x62E9;&#x6B63;&#x5F26;&#x8DDF;&#x4F59;&#x5F26;&#x7EC4;&#x5408;&#x7F16;&#x7801;</p>
<ul>
<li>&#x6BCF;&#x4E2A;&#x4F4D;&#x7F6E;&#x90FD;&#x6709;&#x552F;&#x4E00;&#x7684;&#x7F16;&#x7801;&#x3002;</li>
<li>&#x5728;&#x4E0D;&#x540C;&#x957F;&#x5EA6;&#x7684;&#x53E5;&#x5B50;&#x4E2D;&#xFF0C;&#x4E24;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x5E94;&#x8BE5;&#x4E00;&#x81F4;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x4E0D;&#x53D7;&#x53E5;&#x5B50;&#x957F;&#x77ED;&#x7684;&#x5F71;&#x54CD;&#xFF0C;&#x5E76;&#x4E14;&#x7F16;&#x7801;&#x8303;&#x56F4;&#x662F;&#x6709;&#x754C;&#x7684;&#x3002;&#xFF08;&#x4E0D;&#x4F1A;&#x968F;&#x7740;&#x53E5;&#x5B50;&#x52A0;&#x957F;&#x6570;&#x5B57;&#x5C31;&#x65E0;&#x9650;&#x589E;&#x5927;&#xFF09;</li>
<li>&#x5FC5;&#x987B;&#x662F;&#x786E;&#x5B9A;&#x6027;&#x7684;&#x3002;</li>
</ul>
<p>&#x603B;&#x7ED3;</p>
<ul>
<li>&#x95EE;&#x9898;&#x53CA;&#x5176;&#x89E3;&#x7B54;&#xFF1A;
<ul>
<li>&#x4E3A;&#x4EC0;&#x4E48;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x4F7F;&#x7528; 1,2,3...&#x8FD9;&#x79CD;&#x7EBF;&#x6027;&#x7F16;&#x7801;&#xFF1F;
<ul>
<li>&#x539F;&#x56E0;&#xFF1A;&#x5468;&#x671F;&#x6027;&#x6A21;&#x5F0F;&#x5728;&#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x4E0D;&#x540C;&#x7EF4;&#x5EA6;&#x4E0A;&#x5448;&#x73B0;&#x51FA;&#x4E0D;&#x540C;&#x7684;&#x53D8;&#x5316;&#x901F;&#x5EA6;&#x548C;&#x5468;&#x671F;&#xFF08;&#x4E0B;&#x9762;&#x4F8B;&#x5B50;&#x4F1A;&#x8BF4;&#x660E;&#xFF09;
<ul>
<li>&#x6355;&#x6349;&#x957F;&#x8DDD;&#x79BB;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF08;&#x7EBF;&#x6027;&#x6A21;&#x5F0F;&#x4E5F;&#x80FD;&#x505A;&#x5230;&#xFF0C;&#x4F46;&#x662F;&#x4E0D;&#x591F;&#x7CBE;&#x7EC6;&#xFF09;</li>
<li>&#x63D0;&#x4F9B;&#x66F4;&#x4E30;&#x5BCC;&#x7684;&#x8868;&#x793A;&#x80FD;&#x529B;&#xFF1A;&#x8F83;&#x4F4E;&#x9891;&#x7387;&#x7684;&#x7EF4;&#x5EA6;&#x5177;&#x6709;&#x8F83;&#x957F;&#x7684;&#x5468;&#x671F;&#xFF0C;&#x53EF;&#x4EE5;&#x6355;&#x6349;&#x5230;&#x5927;&#x8303;&#x56F4;&#x7684;&#x5E8F;&#x5217;&#x7ED3;&#x6784;&#xFF0C;&#x800C;&#x8F83;&#x9AD8;&#x9891;&#x7387;&#x7684;&#x7EF4;&#x5EA6;&#x53EF;&#x4EE5;&#x66F4;&#x7EC6;&#x81F4;&#x5730;&#x8868;&#x793A;&#x5C40;&#x90E8;&#x6A21;&#x5F0F;&#x548C;&#x77ED;&#x8DDD;&#x79BB;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;</li>
<li>&#x907F;&#x514D;&#x8FC7;&#x62DF;&#x5408;&#xFF1A;&#x968F;&#x7740;&#x53E5;&#x5B50;&#x53D8;&#x957F;&#xFF0C;&#x8FD9;&#x4E9B;&#x503C;&#x53EF;&#x80FD;&#x4F1A;&#x53D8;&#x5F97;&#x7279;&#x522B;&#x5927;&#xFF0C;&#x5E76;&#x4E14;&#x6211;&#x4EEC;&#x7684;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4F1A;&#x9047;&#x5230;&#x6BD4;&#x8BAD;&#x7EC3;&#x65F6;&#x66F4;&#x957F;&#x7684;&#x53E5;&#x5B50;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>&#x601D;&#x8003;&#x4F8B;&#x5B50;&#xFF1A;
<ul>
<li>&#x7B2C;&#x4E00;&#x4E2A;&#x8BCD;&#x7F16;&#x7801;&#x4E3A; [1,2,3]&#xFF0C; &#x5219;&#x4F4D;&#x7F6E;&#x53EF;&#x7528;&#x5411;&#x91CF; [&#x79D2;&#xFF0C;&#x5206;&#xFF0C;&#x65F6;]&#x6765;&#x8868;&#x793A;&#xFF1B;&#x7B2C;&#x4E8C;&#x4E2A;&#x8BCD;&#x7F16;&#x7801;&#x4E3A; [4,5,6]&#xFF0C; &#x5219;&#x4F4D;&#x7F6E;&#x53EF;&#x7528;&#x5411;&#x91CF; [&#x79D2; + 1&#xFF0C;&#x5206; + 1/60&#xFF0C;&#x65F6; + 1/360] &#x6765;&#x8868;&#x793A;</li>
<li>&#x5468;&#x671F;&#xFF1A;&#x5728;&#x4E00;&#x4E2A;&#x8BCD;&#x5411;&#x91CF;&#x4E0A;&#x4F1A;&#x51FA;&#x73B0;&#x4E0D;&#x540C;&#x7684;&#x5468;&#x671F;&#x53D8;&#x5316;&#xFF0C;&#x80FD;&#x540C;&#x65F6;&#x8FFD;&#x8E2A;&#x8FD1;&#x8DDD;&#x79BB;&#x8DDF;&#x8FDC;&#x8DDD;&#x79BB;&#x7684;&#x8BCD;&#x5173;&#x7CFB;&#xFF1A;&#x79D2;&#x9488;&#x8D70;&#x4E00;&#x4E2A;&#x5468;&#x671F; 60 &#x79D2;&#xFF0C;&#x5206;&#x9488;&#x8D70;&#x4E00;&#x6B65;&#xFF1B;&#x5206;&#x8D70;&#x4E00;&#x4E2A;&#x5468;&#x671F; 60 &#x5206;&#xFF0C; &#x65F6;&#x9488;+1&#xFF1B;</li>
<li>&#x5468;&#x671F;&#x8BBE;&#x5B9A;&#xFF1A;&#x901A;&#x8FC7;&#x8BBE;&#x5B9A; &#x79D2;&#xFF0C;&#x5206;&#xFF0C;&#x65F6;&#x4E4B;&#x95F4;&#x7684;&#x5468;&#x671F;&#x5173;&#x7CFB;&#xFF08;&#x6BD4;&#x5982;&#x53EF;&#x4EE5;&#x8BBE;&#x5B9A;600&#x79D2;&#xFF0C;&#x5206;&#x9488;&#x624D;&#x8D70;&#x4E00;&#x6B65;&#xFF0C;&#x5219;&#x4F1A;&#x62C9;&#x4E0A;&#x5468;&#x671F;&#x53D8;&#x5316;&#xFF0C;&#x8FFD;&#x8E2A;&#x66F4;&#x8FDC;&#x7684;&#x8BCD;&#x5173;&#x7CFB;&#xFF09;</li>
</ul>
</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://kazemnejad.com/blog/transformer_architecture_positional_encoding/">positional encoding blog</a></li>
<li><a href="https://datascience.stackexchange.com/questions/51065/what-is-the-positional-encoding-in-the-transformer-model">positional encoding stackexchange + youtube</a></li>
</ul>
<h2 id="self-attention"><a href="#self-attention"></a>self-attention</h2>
<p>&#x601D;&#x8003;</p>
<ul>
<li>&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x4E0E;&#x5377;&#x79EF;&#x7684;&#x591A;&#x901A;&#x9053;&#xFF08;channel&#xFF09;&#x8FDB;&#x884C;&#x7C7B;&#x6BD4;&#x3002;&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x548C;&#x5377;&#x79EF;&#x7684;&#x591A;&#x901A;&#x9053;&#x90FD;&#x6D89;&#x53CA;&#x5E76;&#x884C;&#x5730;&#x5B66;&#x4E60;&#x4E0D;&#x540C;&#x7684;&#x7279;&#x5F81;&#x8868;&#x793A;&#x3002;&#x5B83;&#x4EEC;&#x90FD;&#x81F4;&#x529B;&#x4E8E;&#x63D0;&#x53D6;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7684;&#x591A;&#x6837;&#x5316;&#x7279;&#x5F81;&#xFF0C;&#x5E76;&#x6355;&#x6349;&#x8F93;&#x5165;&#x4E2D;&#x7684;&#x4E0D;&#x540C;&#x6A21;&#x5F0F;&#x548C;&#x5173;&#x8054;&#x6027;&#x3002;</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://medium.com/@geetkal67/attention-networks-a-simple-way-to-understand-self-attention-f5fb363c736d">self-attention</a></li>
<li><a href="https://medium.com/@geetkal67/attention-networks-a-simple-way-to-understand-multi-head-attention-3bc3409c4312">multi-head attention in transformer</a>)</li>
</ul>
<h1 id="one hot &#x7F16;&#x7801;"><a href="#one hot &#x7F16;&#x7801;"></a>one hot &#x7F16;&#x7801;</h1>
<p>One-hot &#x7F16;&#x7801;&#x662F;&#x4E00;&#x79CD;&#x5C06;&#x79BB;&#x6563;&#x7684;&#x5206;&#x7C7B;&#x6807;&#x7B7E;&#x8F6C;&#x6362;&#x4E3A;&#x4E8C;&#x8FDB;&#x5236;&#x5411;&#x91CF;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x7684;&#x4F18;&#x70B9;&#x662F;&#x53EF;&#x4EE5;&#x6D88;&#x9664;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x4E4B;&#x95F4;&#x7684;&#x504F;&#x5E8F;&#x5173;&#x7CFB;&#xFF0C;&#x4F7F;&#x5F97;&#x7279;&#x5F81;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x8BA1;&#x7B97;&#x66F4;&#x52A0;&#x5408;&#x7406;&#x3002;&#xFF08;&#x65B9;&#x4FBF;&#x5728;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#x8BA1;&#x7B97; LOSS&#xFF09;</p>
<h2 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h2>
<p>&#x6BD4;&#x5982;&#xFF0C;&#x6709;&#x4E00;&#x4E2A;&#x79BB;&#x6563;&#x578B;&#x7279;&#x5F81;&#xFF0C;&#x4EE3;&#x8868;&#x5DE5;&#x4F5C;&#x7C7B;&#x578B;&#xFF0C;&#x8BE5;&#x79BB;&#x6563;&#x578B;&#x7279;&#x5F81;&#xFF0C;&#x5171;&#x6709;&#x4E09;&#x4E2A;&#x53D6;&#x503C;&#xFF0C;&#x4E0D;&#x4F7F;&#x7528;one-hot&#x7F16;&#x7801;&#xFF0C;&#x5176;&#x8868;&#x793A;&#x5206;&#x522B;&#x662F;x_1 = (1), x_2 = (2), x_3 = (3)&#x3002;</p>
<p>&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#xFF0C;(x_1, x_2) = 1, d(x_2, x_3) = 1, d(x_1, x_3) = 2&#x3002;&#x90A3;&#x4E48;x_1&#x548C;x_3&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x5C31;&#x8D8A;&#x4E0D;&#x76F8;&#x4F3C;&#x5417;&#xFF1F;&#x663E;&#x7136;&#x8FD9;&#x6837;&#x7684;&#x8868;&#x793A;&#xFF0C;&#x8BA1;&#x7B97;&#x51FA;&#x6765;&#x7684;&#x7279;&#x5F81;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#x4E0D;&#x5408;&#x7406;&#x3002;</p>
<p>&#x90A3;&#x5982;&#x679C;&#x4F7F;&#x7528;one-hot&#x7F16;&#x7801;&#xFF0C;&#x5219;&#x5F97;&#x5230;x_1 = (1, 0, 0), x_2 = (0, 1, 0), x_3 = (0, 0, 1)&#xFF0C;&#x90A3;&#x4E48;&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x5C31;&#x90FD;&#x662F;sqrt(2).&#x5373;&#x6BCF;&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#x4E00;&#x6837;&#x7684;&#xFF0C;&#x663E;&#x5F97;&#x66F4;&#x5408;&#x7406;&#x3002;</p>
<h2 id="&#x5B9E;&#x73B0;"><a href="#&#x5B9E;&#x73B0;"></a>&#x5B9E;&#x73B0;</h2>
<pre><code class="language-python"><span class="hljs-comment"># &#x5047;&#x8BBE; text &#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x96C6;&#x662F;&#x7531;&#x5927;&#x5C0F;&#x5199;&#x5B57;&#x6BCD;&#x548C;&#x6570;&#x5B57;&#x7EC4;&#x6210;&#x7684;&#xFF0C;&#x5171;&#x6709; 62 &#x4E2A;&#x5B57;&#x7B26;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;char_set = &quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&quot;&#xFF09;&#xFF0C;&#x5219; self.char_set_len &#x7684;&#x503C;&#x4E3A; 62&#x3002;&#x5BF9;&#x4E8E;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26; ch&#xFF0C;&#x5B83;&#x5728;&#x5B57;&#x7B26;&#x96C6;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;&#x662F;&#x552F;&#x4E00;&#x7684;&#xFF0C;&#x56E0;&#x6B64; i * self.char_set_len + self.char_set.index(ch) &#x7684;&#x7ED3;&#x679C;&#x4E5F;&#x662F;&#x552F;&#x4E00;&#x7684;&#x3002;</span>
vector = np.zeros(self.max_captcha * self.char_set_len) <span class="hljs-comment"># shape = [max_captcha*36]</span>
<span class="hljs-keyword">for</span> i, ch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(text):
    idx = i * self.char_set_len + self.char_set.index(ch) <span class="hljs-comment"># idx = (0-(max_captcha-1))*36+(0-36)</span>
    vector[idx] = <span class="hljs-number">1</span>
</code></pre>
<p>&#x601D;&#x8003;&#xFF1A;&#x5982;&#x679C;&#x662F;&#x4E0D;&#x5B9A;&#x957F;&#x7F16;&#x7801;&#xFF0C;&#x8BE5;&#x5982;&#x4F55;&#x6539;&#x8FDB;?</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/39012149">&#x673A;&#x5668;&#x5B66;&#x4E60;&#xFF1A;&#x6570;&#x636E;&#x9884;&#x5904;&#x7406;&#x4E4B;&#x72EC;&#x70ED;&#x7F16;&#x7801;&#xFF08;One-Hot&#xFF09;</a></li>
</ul>
<h2 id="CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;"><a href="#CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;"></a>CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;</h2>
<h3 id="CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;"><a href="#CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;"></a>CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;</h3>
<ol>
<li>&#x751F;&#x6210; time step &#x7684;&#x9884;&#x6D4B;&#x6982;&#x7387;&#xFF08;&#x6709; CRNN &#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF09;&#xFF0C;&#x6BCF;&#x4E2A; time step &#x4F1A;&#x6709;&#x5BF9;&#x7C7B;&#x522B;&#x7684;&#x9884;&#x6D4B;&#x6982;&#x7387;&#x5411;&#x91CF;</li>
<li>&#x901A;&#x8FC7;&#x7B97;&#x6CD5;&#x5C06;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x8DEF;&#x5F84;&#x7684;&#x6982;&#x7387;&#x76F8;&#x52A0;&#xFF0C;&#x5E76;&#x53D6;&#x5BF9;&#x6570;&#xFF08;&#x901A;&#x5E38;&#x7528;&#x4E8E;&#x6570;&#x503C;&#x7A33;&#x5B9A;&#x6027;&#xFF09;&#x5F97;&#x5230;&#x6700;&#x7EC8;&#x7684;&#x76F8;&#x4F3C;&#x5EA6;&#x5206;&#x6570;&#x3002;
<a href="https://wandb.ai/authors/text-recognition-crnn-ctc/reports/Text-Recognition-With-CRNN-CTC-Network--VmlldzoxNTI5NDI">Reference</a></li>
</ol>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;</h1>
<p>Tensorflow vs Pytorch&#xFF08;&#x7B26;&#x53F7;&#x5F0F;&#x4E0E;&#x547D;&#x4EE4;&#x5F0F;&#x7A0B;&#x5E8F;&#xFF09;
&#x547D;&#x4EE4;&#x5F0F;</p>
<ul>
<li>&#x66F4;&#x52A0;&#x7075;&#x6D3B;&#xFF1A;&#x539F;&#x751F;&#x8BED;&#x8A00;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x8DDF;&#x8FD0;&#x884C;&#x65F6;&#x65AD;&#x70B9;</li>
</ul>
<pre><code class="language-python">    <span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
    a = np.ones(<span class="hljs-number">10</span>)
    b = np.ones(<span class="hljs-number">10</span>) * <span class="hljs-number">2</span>
    c = b * a
    d = c + <span class="hljs-number">1</span>
</code></pre>
<p>&#x5BF9;&#x5E94;&#x7B26;&#x53F7;&#x5F0F;&#xFF08;DSL&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x8282;&#x7701;&#x5185;&#x5B58;&#xFF1A;&#x638C;&#x63A7;&#x5168;&#x5C40;&#x7684;&#x5185;&#x5B58;&#x5206;&#x6790;&#x5E76;&#x4F18;&#x5316;</li>
</ul>
<pre><code class="language-python">    A = Variable(<span class="hljs-string">&apos;A&apos;</span>)
    B = Variable(<span class="hljs-string">&apos;B&apos;</span>)

    <span class="hljs-comment"># &#x5F53;&#x6267;&#x884C; C = B * A &#x65F6;&#xFF0C;&#x4E0D;&#x4F1A;&#x53D1;&#x751F;&#x4EFB;&#x4F55;&#x8BA1;&#x7B97;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6B64;&#x64CD;&#x4F5C;&#x4F1A;&#x751F;&#x6210;&#x8868;&#x793A;&#x8BA1;&#x7B97;&#x7684;&#x8BA1;&#x7B97;&#x56FE;&#xFF08;&#x4E5F;&#x79F0;&#x4E3A;&#x7B26;&#x53F7;&#x56FE;&#xFF09;</span>
    C = B * A 
    D = C + Constant(<span class="hljs-number">1</span>)

    <span class="hljs-comment"># compiles the function &#x5E76;&#x771F;&#x6B63;&#x7684;&#x6267;&#x884C;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;</span>
    f = <span class="hljs-built_in">compile</span>(D) 
    d = f(A=np.ones(<span class="hljs-number">10</span>), B=np.ones(<span class="hljs-number">10</span>)*<span class="hljs-number">2</span>)
</code></pre>
<p>&#x7B26;&#x53F7;&#x56FE;&#xFF1A;<img src="https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/prog_model/comp_graph.png" alt="&#x7B26;&#x53F7;&#x56FE;"></p>
<p>&#x7C7B;&#x6BD4;&#xFF1A;&#x7C7B;&#x4F3C; react jsx&#x547D;&#x4EE4;&#x5F0F;&#xFF08;&#x76F4;&#x63A5;&#x96BE;&#x4F18;&#x5316;&#xFF09;&#x6A21;&#x677F;&#x8DDF; vue &#x7684;&#x58F0;&#x660E;&#x5F0F;&#xFF08;&#x771F;&#x6B63;&#x6267;&#x884C;&#x524D;&#x80FD;&#x505A;&#x5404;&#x79CD;&#x8FD0;&#x884C;&#x65F6;&#x4F18;&#x5316;&#xFF09;&#x6A21;&#x677F;&#xFF1F;</p>
<p><a href="https://mxnet.apache.org/versions/1.9.1/api/architecture/program_model#:~:text=Symbolic%20Programs%20Tend%20to%20be,flow%20of%20a%20host%20language.">Reference blog</a></p>
<h1 id="&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;"><a href="#&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;"></a>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;</h1>
<ul>
<li>&#x5BF9;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x5206;&#x7C7B;
<ul>
<li>&#x6709;&#x7279;&#x5F81;&#xFF1A;&#x76F4;&#x63A5;&#x901A;&#x8FC7;&#x5DF2;&#x7ECF;&#x6709;&#x7684;&#x5206;&#x7C7B;&#x8FDB;&#x884C;&#x7ED8;&#x5236;&#x56FE;
<ul>
<li>&#x5148;&#x901A;&#x8FC7;&#x7279;&#x5F81;&#x7EF4;&#x5EA6;&#x7ED8;&#x5236;&#x56FE;&#xFF1B;&#x4F8B;&#x5982;&#xFF1A;&#x6570;&#x636E;&#x96C6;&#x4EC5;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5206;&#x79BB;&#x76F8;&#x5F53;&#x660E;&#x663E;&#x7684;&#x805A;&#x7C7B;&#x3002;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris setosa&#xFF0C;&#x800C;&#x53E6;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris virginica &#x548C; Iris versicolor&#xFF1B;&#x901A;&#x8FC7;&#x7279;&#x5F81;&#x7ED8;&#x5236;&#x51FA;&#x7684;&#x56FE;&#x4F1A;&#x5206;&#x6210;&#x660E;&#x663E;2&#x5806;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x5806;&#x662F;&#x4EA4;&#x9519;2&#x79CD;&#x7C7B;&#x578B; Iris</li>
<li>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x660E;&#x663E;&#x7684;&#x805A;&#x7C7B;&#xFF0C;&#x5E76;&#x4E14;&#x6570;&#x636E;&#x7EF4;&#x5EA6;&#x591A;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; PCA &#x7B49;&#x65B9;&#x5F0F;&#x964D;&#x7EF4;&#x540E;&#x518D;&#x5206;</li>
</ul>
</li>
<li>&#x65E0;&#x7279;&#x5F81;&#xFF1A;&#x5219;&#x5148;&#x901A;&#x8FC7; KMeans &#x80FD;&#x65B9;&#x5F0F;&#x805A;&#x7C7B;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x6709;&#x7279;&#x5F81;&#x65B9;&#x5F0F;&#x5206;&#x6790;</li>
</ul>
</li>
</ul>
<h1 id="&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"><a href="#&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"></a>&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;</h1>
<ul>
<li>&#x662F;&#x4EC0;&#x4E48;&#xFF1F;ONNX = &#xFF08;&#x6A21;&#x578B;&#x672C;&#x8EAB; + &#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6743;&#x91CD;&#x8DDF;&#x504F;&#x7F6E;&#xFF09;&#x7684;&#x4E00;&#x79CD;&#x66F4;&#x52A0;&#x62BD;&#x8C61;&#x7684;&#x8868;&#x8FBE;</li>
<li>&#x5982;&#x4F55;&#x8868;&#x793A;&#xFF1F;&#x4F7F;&#x7528;&#x9884;&#x5B9A;&#x4E49;&#x7684; operator&#xFF08;&#x63CF;&#x8FF0;&#x8F93;&#x5165;&#x4E0E;&#x8F93;&#x51FA;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;add&#x7B97;&#x5B50;=  inputA + inputB = OutputC&#xFF0C;&#x53EF;&#x62D3;&#x5C55;&#xFF09;&#x6765;&#x63CF;&#x8FF0;&#x6A21;&#x578B;&#xFF0C;&#x7528;&#x5411;&#x91CF;&#x63CF;&#x8FF0;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x53C2;&#x6570;</li>
<li>&#x4F5C;&#x7528;&#xFF1F;&#x5B9E;&#x73B0;&#x4E0D;&#x540C;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6846;&#x67B6;&#x548C;&#x5E73;&#x53F0;&#x4E4B;&#x95F4;&#x7684;&#x6A21;&#x578B;&#x4E92;&#x64CD;&#x4F5C;&#x6027;</li>
<li>&#x4E3A;&#x4EC0;&#x4E48; pytorch &#x5728;&#x5BFC;&#x51FA; ONNX &#x7684;&#x65F6;&#x5019;&#x9700;&#x8981;&#x4F20;&#x5165;&#x4E00;&#x7EC4;&#x8F93;&#x5165;&#xFF1F;&#x539F;&#x56E0;&#xFF1A;
<ul>
<li>ONNX &#x5E76;&#x975E;&#x50CF;&#x7F16;&#x8BD1;&#x5668;&#x4E00;&#x6837;&#x5F7B;&#x5E95;&#x89E3;&#x6790;&#x539F;&#x6A21;&#x578B;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x8BB0;&#x5F55;&#x6240;&#x6709;&#x63A7;&#x5236;&#x6D41;&#xFF1B;&#x800C;&#x662F;&#x4E0D;&#x8003;&#x8651;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x9759;&#x6001;&#x56FE;</li>
<li>&#x800C;&#x662F;&#x5229;&#x7528; pytorch trace &#x673A;&#x5236;&#xFF0C;&#x5C06;&#x53C2;&#x6570;&#x4F20;&#x5165;&#x6A21;&#x578B;&#x6267;&#x884C;&#xFF0C;&#x5E76;&#x8BB0;&#x5F55;&#x6267;&#x884C;&#x8FD9;&#x7EC4;&#x8F93;&#x5165;&#x5BF9;&#x5E94;&#x7684;&#x8BA1;&#x7B97;&#x56FE;</li>
</ul>
</li>
</ul>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch</h1>
<ol>
<li>Epoch &#x662F;&#x4EC0;&#x4E48;&#xFF1F;
&#x4E00;&#x6B21; Epoch = &#x8BA9;&#x6240;&#x6709;&#x6570;&#x636E;&#x901A;&#x8FC7;&#x6A21;&#x578B;&#x6B63;&#x5411;+&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x4E00;&#x6B21; = &#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x5B66;&#x4E60;&#x5468;&#x671F;</li>
<li>Epoch &#x8BBE;&#x7F6E;&#x591A;&#x5C11;&#x6B21;&#x5408;&#x9002;&#xFF1F;
&#x65E0;&#x5B9A;&#x8BBA;&#xFF1A;
&#x6B21;&#x6570;&#x5C11;&#x4F1A;&#x5BFC;&#x81F4;&#x6B20;&#x62DF;&#x5408;&#xFF1B;
&#x6B21;&#x6570;&#x591A;&#x4F1A;&#x5BFC;&#x81F4;&#x8FC7;&#x62DF;&#x5408;&#xFF1B;</li>
<li>&#x4EC0;&#x4E48;&#x662F; Batch&#xFF1F;
Batch Size = &#x4E00;&#x6B21;&#x8BAD;&#x7EC3;&#x7684;&#x6837;&#x672C;&#x6570;
&#x6BCF;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x6240;&#x9700;&#x8981;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5E76;&#x4E0D;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x83B7;&#x5F97;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x7531;&#x4E00;&#x6279;&#x6570;&#x636E;&#x52A0;&#x6743;&#x5F97;&#x5230;&#x7684;</li>
<li>Batch &#x7684;&#x4F5C;&#x7528;&#xFF1F;</li>
</ol>
<ul>
<li>&#x6548;&#x7387;&#xFF1A;&#x5229;&#x7528;&#x77E9;&#x9635;&#x8BA1;&#x7B97;&#x52A0;&#x901F;&#xFF08;&#x76F8;&#x5BF9;&#x4E8E;&#x5355;&#x4E2A;&#x53BB;&#x8BAD;&#x7EC3;&#xFF09;</li>
<li>&#x7A33;&#x5B9A;&#x6027;&#xFF1A;&#x5E73;&#x5747;&#x6BCF;&#x4E2A;&#x6570;&#x636E;&#x6837;&#x672C;&#x7684;&#x8D21;&#x732E;&#xFF0C;&#x51CF;&#x5C11;&#x68AF;&#x5EA6;&#x7684;&#x65B9;&#x5DEE;</li>
<li>&#x591A;&#x5927;&#x5408;&#x9002;&#xFF1A;&#x770B;&#x60C5;&#x51B5;&#xFF0C;&#x592A;&#x5C0F;&#x4F1A;&#x5BFC;&#x81F4;&#x8BAD;&#x7EC3;&#x592A;&#x4E45;&#xFF1B;&#x592A;&#x5927;&#x4F1A;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x53D7;&#x4E0D;&#x4E86;</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://towardsdatascience.com/epoch-vs-iterations-vs-batch-size-4dfb9c7ce9c9">epoch-vs-iterations-vs-batch-size</a></li>
</ul>
<h1 id="GPT &#x5C1D;&#x8BD5;"><a href="#GPT &#x5C1D;&#x8BD5;"></a>GPT &#x5C1D;&#x8BD5;</h1>
<ol>
<li>&#x4EE3;&#x7801;&#x5C1D;&#x8BD5;
<ul>
<li>&#x91CD;&#x6784;&#x8F6C;&#x6362;
<ul>
<li>&#x8F93;&#x5165; js -&gt; ts</li>
</ul>
</li>
<li>&#x4F18;&#x5316;
<ul>
<li>&#x683C;&#x5F0F;&#x5316;&#x4EE3;&#x7801;</li>
</ul>
</li>
<li>&#x521B;&#x5EFA;
<ul>
<li>&#x521B;&#x5EFA;&#x63D2;&#x4EF6;&#xFF08;eslint&#xFF09;&#x6B65;&#x9AA4;&#xFF1A;&#x5199;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B; -&gt; &#x8F93;&#x5165; gpt -&gt; &#x751F;&#x6210;&#x63D2;&#x4EF6; -&gt; &#x5FAE;&#x8C03;&#x6210;&#x578B;
<ul>
<li>&#x95EE;&#x9898;&#xFF1A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x4F1A;&#x6BD4;&#x8F83;&#x7E41;&#x7410;&#x6216;&#x8005;&#x9690;&#x85CF;&#x903B;&#x8F91;&#x95EE;&#x9898;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x53BB;&#x5229;&#x7528;&#x7B2C;&#x4E09;&#x65B9;&#x7684;&#x5305;&#x7684;&#x80FD;&#x529B;</li>
<li>&#x76EE;&#x524D;&#x65B9;&#x6848;&#xFF1A;&#x9700;&#x8981; developer &#x627E;&#x5230;&#x66F4;&#x4FBF;&#x6377;&#x7684;&#x65B9;&#x5F0F;&#x518D;&#x53BB;&#x6295;&#x5582;&#x7ED9; gpt &#x751F;&#x6210;&#x66F4;&#x52A0;&#x5408;&#x7406;&#x7B80;&#x6D01;&#x7684;&#x4EE3;&#x7801;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
<h1 id="CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;"><a href="#CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;"></a>CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;</h1>
<pre><code>* &#x7F51;&#x7EDC;&#x8D8A;&#x6DF1;&#xFF0C;&#x5B66;&#x4E60;&#x7684;&#x77E5;&#x8BC6;&#x8D8A;&#x62BD;&#x8C61;&#xFF1A;&#x6BD4;&#x5982;&#x7B2C;&#x4E00;&#x5C42;hidden layer&#x8D1F;&#x8D23;&#x7F16;&#x7801;&#x8BF8;&#x5982;&#x70B9;&#x3001;&#x7EBF;&#x3001;&#x8FB9;&#x7F18;&#x7B49;&#x6D45;&#x5C42;&#x4FE1;&#x606F;&#xFF1B;&#x7B2C;&#x4E8C;&#x5C42;hidden layer&#x7F16;&#x7801;&#x7B80;&#x5355;&#x70B9;&#x7684;&#x7EB9;&#x7406;&#x3001;&#x5F62;&#x72B6;&#x7B49;&#x4FE1;&#x606F;&#xFF1B;&#x7B2C;&#x4E09;&#x5C42;hidden layer&#x7F16;&#x7801;&#x8BF8;&#x5982;&#x773C;&#x775B;&#x3001;&#x9F3B;&#x5B50;&#x7B49;&#x76EE;&#x6807;&#x7684;&#x5F62;&#x72B6;...&#xFF0C;&#x7136;&#x540E;&#x9010;&#x5C42;&#x5B66;&#x4E60;&#xFF0C;&#x4E0D;&#x65AD;&#x5730;&#x63D0;&#x53D6;&#x62BD;&#x8C61;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x4E00;&#x6C14;&#x5475;&#x6210;&#xFF0C;&#x6700;&#x7EC8;&#x5B66;&#x4F1A;&#x4E86;&#x8FA8;&#x8BC6;&#x82B1;&#x8349;&#x6811;&#x6728;&#x3001;&#x98DE;&#x79BD;&#x8D70;&#x517D;&#x7B49;&#x7B49;&#x3002; - [reference](https://zhuanlan.zhihu.com/p/112513743)
* &#x7F51;&#x7EDC;&#x8D8A;&#x5BBD;&#xFF0C;&#x6BCF;&#x4E00;&#x5C42;&#x5B66;&#x4E60;&#x7684;&#x77E5;&#x8BC6;&#x8D8A;&#x4E30;&#x5BCC;&#xFF1A;&#x589E;&#x52A0;&#x7F51;&#x7EDC;&#x7684;&#x5BBD;&#x5EA6;&#x610F;&#x5473;&#x7740;&#x540C;&#x4E00;&#x4E2A;hidden layer&#x6709;&#x7740;&#x66F4;&#x591A;&#x7684;&#x795E;&#x7ECF;&#x5143;&#xFF0C;&#x6BCF;&#x4E00;&#x4E2A;&#x795E;&#x7ECF;&#x5143;&#x4EE3;&#x8868;&#x4E00;&#x79CD;&#x989C;&#x8272;&#xFF0C;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E00;&#x79CD;&#x7EB9;&#x7406;&#xFF0C;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#x4FBF;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5230;&#x66F4;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x989C;&#x8272;&#x4FE1;&#x606F;&#xFF0C;&#x5404;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x65B9;&#x5411;&#x4EE5;&#x53CA;&#x4E0D;&#x540C;&#x9891;&#x7387;&#x7684;&#x6761;&#x7EB9;&#x4FE1;&#x606F;&#x3002;
</code></pre>
<h1 id="&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;</h1>
<pre><code>* &#x751F;&#x6210;&#x5BF9;&#x6297;&#x7F51;&#x7EDC;&#xFF08;GAN&#xFF09; VS &#x53D8;&#x5206;&#x81EA;&#x7F16;&#x7801;&#x5668;&#xFF08;VAE&#xFF09;&#xFF1A; GAN &#x503E;&#x5411;&#x4E8E;&#x751F;&#x6210;&#x903C;&#x771F;&#x7684;&#x5408;&#x6210;&#x6837;&#x672C;&#xFF0C;&#x800C; VAE &#x503E;&#x5411;&#x4E8E;&#x751F;&#x6210;&#x5177;&#x6709;&#x4E00;&#x5B9A;&#x7A0B;&#x5EA6;&#x591A;&#x6837;&#x6027;&#x7684;&#x6837;&#x672C;&#x3002;&#x5982;&#x679C;&#x671F;&#x671B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x76EE;&#x6807;&#x6837;&#x672C;&#xFF0C;&#x53EF;&#x4EE5;&#x8003;&#x8651; CGAN &#x8DDF; CVAE
    * [GAN &#x57FA;&#x672C;&#x539F;&#x7406;&#x53CA;&#x5176;&#x5E94;&#x7528;](https://easyai.tech/ai-definition/gan/)
* VIT - Google&#x63A8;&#x51FA;&#x4E86;VIT&#xFF08;Vision Transformer&#xFF09;&#xFF1A;&#x4E00;&#x4E2A;&#x548C;Bert&#x51E0;&#x4E4E;&#x4E00;&#x81F4;&#xFF0C;&#x540C;&#x65F6;&#x4E0D;&#x6DFB;&#x52A0;&#x4EFB;&#x4F55;&#x5377;&#x79EF;&#x7ED3;&#x6784;&#x7684;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x6A21;&#x578B;&#x3002;VIT&#x5728;Transformer&#x4E0A;&#x7684;&#x6210;&#x529F;&#xFF0C;&#x8BC1;&#x660E;&#x4E86;&#x53EF;&#x4EE5;&#x7528;&#x7EDF;&#x4E00;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x6765;&#x5904;&#x7406;&#x4E0D;&#x540C;&#x9886;&#x57DF;&#xFF08;&#x8BED;&#x8A00;/&#x56FE;&#x50CF;/&#x89C6;&#x9891;&#xFF09;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x8FDB;&#x800C;&#x5F00;&#x542F;&#x4E86;&#x591A;&#x6A21;&#x6001;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x7684;&#x65B0;&#x7BC7;&#x7AE0;&#x3002;
* &#x6587;&#x6458; - &#x9AD8;&#x624B;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x7684;&#x65B9;&#x5F0F;&#x4ECE;&#x6765;&#x90FD;&#x4E0D;&#x662F;&#x7EA0;&#x7ED3;&#x95EE;&#x9898;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x5347;&#x7EF4;&#xFF1B;&#x5347;&#x7EF4;&#x6210;&#x529F;&#xFF0C;&#x95EE;&#x9898;&#x4E5F;&#x5C31;&#x89E3;&#x51B3;&#x4E86;
* &#x96F7;&#x519B;2023&#x6F14;&#x8BB2; - &#x5982;&#x4F55;&#x5FEB;&#x901F;&#x5B66;&#x4E60;&#xFF1A;&#x77E5;&#x8BC6;&#x4E0D;&#x5168;&#x662F;&#x7EBF;&#x6027;&#x7684;&#xFF0C;&#x5927;&#x90E8;&#x5206;&#x662F;&#x7F51;&#x72B6;&#x7684;&#xFF0C;&#x77E5;&#x8BC6;&#x70B9;&#x4E4B;&#x95F4;&#x4E0D;&#x4E00;&#x5B9A;&#x6709;&#x7EDD;&#x5BF9;&#x7684;&#x5148;&#x540E;&#x5173;&#x7CFB;&#xFF1B;&#x524D;&#x9762;&#x5185;&#x5BB9;&#x770B;&#x4E0D;&#x61C2;&#xFF0C;&#x8DF3;&#x8FC7;&#x53BB;&#xFF0C;&#x5E76;&#x4E0D;&#x5F71;&#x54CD;&#x5B66;&#x540E;&#x9762;&#x7684;&#xFF1B;&#x540E;&#x9762;&#x7684;&#x5B66;&#x4F1A;&#x4E86;&#xFF0C;&#x6709;&#x65F6;&#x5019;&#x66F4;&#x5BB9;&#x6613;&#x770B;&#x61C2;&#x524D;&#x9762;&#x7684;&#x3002;
</code></pre>
<h1 id="AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"><a href="#AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"></a>AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;</h1>
<p>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x8BAD;&#x7EC3;&#x4E86;&#x5F88;&#x591A;&#x6A21;&#x578B;&#xFF0C;&#x800C; LLM &#x53EA;&#x662F;&#x5176;&#x4E2D;&#x4E4B;&#x4E00;&#xFF1B;
ChatGPT &#x4E4B;&#x6240;&#x4EE5;&#x8DDF; AGI &#x6700;&#x63A5;&#x8FD1;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x7684;&#x901A;&#x7528;&#x6027;&#xFF1B;
&#x5982;&#x679C;&#x80FD;&#x591F;&#x7406;&#x89E3;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#xFF0C;&#x90A3;&#x5C31;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x6240;&#x6709;&#x6587;&#x5B57;&#x80FD;&#x591F;&#x63CF;&#x8FF0;&#x7684;&#x4EFB;&#x52A1;&#xFF1B;
&#x5176;&#x4ED6; AI &#x4EFB;&#x52A1;&#xFF0C;&#x6BD4;&#x5982;&#x56FE;&#x7247;&#x8BC6;&#x522B;&#xFF0C;&#x5219;&#x53EA;&#x80FD;&#x505A;&#x5230;&#x56FE;&#x7247;&#x76F8;&#x4F3C;&#x5EA6;&#x80FD;&#x4EBA;&#x7269;&#x5904;&#x7406;&#xFF08;&#x63A8;&#x8350;&#xFF09;&#xFF0C;&#x65E0;&#x6CD5;&#x62D3;&#x5C55;&#x5230;&#x76F8;&#x5BF9;&#x901A;&#x7528;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x9664;&#x975E;&#x65E5;&#x5E38;&#x4EA4;&#x6D41;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x8868;&#x60C5;&#x5305;&#x5B8C;&#x6210;</p>
<h1 id="gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;"><a href="#gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;"></a>gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;</h1>
<ul>
<li>&#x5EFA;&#x8BBE;&#x9AD8;&#x96BE;&#x5EA6;&#x7684;&#x7EFC;&#x5408;&#x4EFB;&#x52A1;&#x8BC4;&#x6D4B;&#x6570;&#x636E;&#x96C6;&#xFF08;LLM &#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF0C;&#x8D8A;&#x5B8C;&#x5907; -&gt; &#x8D8A;&#x5F3A;&#x5927;&#xFF09;</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x5DE5;&#x7A0B;&#xFF08;&#x5BC6;&#x96C6;+&#x591A;&#x6837;&#x6027;&#xFF09;&#xFF1A;LLM &#x8FDB;&#x5316; = &#x66F4;&#x591A;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;
<ul>
<li>&#x6570;&#x636E;&#x4F8B;&#x5B50;
<ul>
<li>&#x5BC6;&#x5EA6;&#x6781;&#x9AD8;&#x7684;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#xFF1A;wiki</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x95EE;&#x7B54;&#xFF1A;quora&#xFF0C;&#x77E5;&#x4E4E;</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x56FE;&#x7247;&#xFF1A;</li>
</ul>
</li>
<li>&#x601D;&#x8003;
<ul>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x6D88;&#x8017;&#x5B8C;&#x540E; gpt &#x5982;&#x4F55;&#x8FDB;&#x5316;&#xFF1F;</li>
<li>&#x80FD;&#x5426;&#x81EA;&#x5DF1;&#x521B;&#x9020;&#x77E5;&#x8BC6;&#x81EA;&#x5DF1;&#x6D88;&#x8D39;&#xFF08;&#x7C7B;&#x4F3C; alpha-go &#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x7684;&#x8FDB;&#x5316;&#xFF09;&#xFF1F;</li>
<li>&#x5982;&#x679C; gpt &#x6210;&#x957F;&#x7684;&#x8D44;&#x6599;&#x6765;&#x6E90;&#x4E8E;&#x4EBA;&#x7C7B;&#xFF0C;&#x90A3;&#x80FD;&#x5426;&#x7A81;&#x7834;&#x4EBA;&#x7C7B;&#x77E5;&#x8BC6;&#x7684;&#x8FB9;&#x754C;&#xFF1F;</li>
</ul>
</li>
</ul>
</li>
<li>&#x63A2;&#x7D22; LLM &#x6A21;&#x578B;&#x7684;&#x89C4;&#x6A21;&#x5929;&#x82B1;&#x677F;&#xFF1A;&#x5927;&#x6A21;&#x578B;&#x5927;&#x6570;&#x636E;&#xFF0C;&#x80FD;&#x53C2;&#x4E0E;&#x7684;&#x73A9;&#x5BB6;&#x4E0D;&#x591A;
<ul>
<li>&#x601D;&#x8003;&#xFF1A;&#x662F;&#x5426;&#x4F1A;&#x51FA;&#x73B0;&#x5171;&#x5EFA;&#x8D85;&#x5927;&#x6A21;&#x578B;</li>
</ul>
</li>
<li>&#x589E;&#x5F3A; LLM &#x7684;&#x590D;&#x6742;&#x63A8;&#x7406;&#x80FD;&#x529B;</li>
<li>LLM &#x7EB3;&#x5165; NLP&#x4E4B;&#x5916;&#x66F4;&#x591A;&#x5176;&#x5B83;&#x7814;&#x7A76;&#x9886;&#x57DF;&#xFF1A;&#x591A;&#x6A21;&#x6001;&#xFF1F;
<ul>
<li>&#x5982;&#x4F55;&#x7A81;&#x7834;&#x7B26;&#x53F7;&#x9886;&#x57DF;&#xFF1F;&#x5982;&#x679C;&#x67D0;&#x4E2A;&#x9886;&#x57DF;&#x662F;&#x975E;&#x6210;&#x6587;&#x7684;&#xFF0C;&#x4E0D;&#x80FD;&#x7528;&#x7B26;&#x53F7;&#x8BB0;&#x5F55;&#x8868;&#x8FBE;&#xFF0C;&#x90A3;&#x4E48; GPT &#x662F;&#x5426;&#x5C31;&#x65E0;&#x80FD;&#x4E3A;&#x529B;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x4EBA;&#x7C7B;&#x7684;&#x5F88;&#x591A;&#x5FC3;&#x7406;&#x6D3B;&#x52A8;&#x3001;&#x6F5C;&#x610F;&#x8BC6;&#x3001;&#x7075;&#x611F;&#x3001;&#x987F;&#x609F;&#x7B49;&#x7B49;&#xFF0C;GPT &#x5982;&#x4F55;&#x6A21;&#x62DF;&#x751F;&#x6210;&#x3002;</li>
</ul>
</li>
<li>&#x66F4;&#x6613;&#x7528;&#x7684;&#x4EBA;&#x548C;LLM&#x7684;&#x4EA4;&#x4E92;&#x63A5;&#x53E3;&#xFF1A;&#x542C;&#x89C9;&#xFF1F;</li>
<li>&#x8D85;&#x5927;LLM&#x6A21;&#x578B;Transformer&#x7684;&#x7A00;&#x758F;&#x5316;&#xFF1A;&#x76F8;&#x540C;&#x7B97;&#x529B;&#x4E0B;&#x63D0;&#x9AD8;&#x8BAD;&#x7EC3;&#x901F;&#x5EA6;</li>
</ul>
<p>&#x53C2;&#x8003;</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/597586623">&#x901A;&#x5411;AGI&#x4E4B;&#x8DEF;&#xFF1A;&#x5927;&#x578B;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x6280;&#x672F;&#x7CBE;&#x8981;</a></li>
</ul>
<h1 id="&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1"><a href="#&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1"></a>&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1</h1>
<ul>
<li>&#x4EBA;&#x8DDF;AI&#x7684;&#x5173;&#x7CFB;&#xFF1A;&#x6DD8;&#x6C70;&#x8FD8;&#x662F;&#x4E92;&#x8865;&#xFF1F;
<ul>
<li>&#x4EBA;&#x6709;&#x81EA;&#x4E3B;&#x76EE;&#x7684;&#x6027;&#xFF08;AI&#x6682;&#x65E0;&#xFF09;&#xFF0C;AI&#x662F;&#x5B9E;&#x73B0;&#x76EE;&#x7684;&#x7684;&#x5DE5;&#x5177;&#xFF1B;</li>
</ul>
</li>
<li>&#x63D0;&#x95EE;&#x8DDF;&#x56DE;&#x7B54;&#x80FD;&#x529B;&#xFF0C;&#x54EA;&#x4E2A;&#x66F4;&#x80FD;&#x751F;&#x5B58;&#x4E0B;&#x6765;&#xFF1F;
<ul>
<li>&#x5F80;&#x540E;&#x63D0;&#x51FA;&#x597D;&#x95EE;&#x9898;&#x80FD;&#x529B;&#x7684;&#x91CD;&#x8981;&#x6027;&#x5C06;&#x8D8A;&#x6765;&#x8D8A;&#x8D85;&#x8FC7;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x80FD;&#x529B;</li>
</ul>
</li>
<li>&#x6559;&#x80B2;
<ul>
<li>&#x6295;&#x5582;&#x7B54;&#x6848;&#x7684;&#x6559;&#x80B2;&#x6A21;&#x5F0F;&#x9700;&#x8981;&#x53D8;&#x9769; -&gt; &#x628A;&#x63D0;&#x95EE;&#x80FD;&#x529B;&#x5217;&#x5165;&#x8003;&#x6838;&#x6807;&#x51C6;&#xFF0C;&#x66F4;&#x80FD;&#x57F9;&#x517B;&#x51FA;&#x4EBA;&#x673A;&#x534F;&#x4F5C;&#x4EBA;&#x624D;</li>
<li>&#x8BA9;&#x4EBA;&#x5229;&#x7528;&#x673A;&#x5668;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x628A;&#x4EBA;&#x57F9;&#x517B;&#x6210;&#x673A;&#x5668;</li>
<li>&#x6587;&#x7406;&#x5206;&#x79D1;&#x8FD9;&#x79CD;&#x6559;&#x80B2;&#x6A21;&#x5F0F;&#x6025;&#x8FEB;&#x9700;&#x8981;&#x6539;&#x53D8;&#xFF1A;chatGPT &#x9700;&#x8981;&#x6587;&#x7406;&#x7ED3;&#x5408;&#xFF0C;&#x63D0;&#x597D;&#x95EE;&#x9898;&#xFF0C;&#x540C;&#x65F6;&#x8BA4;&#x6E05;&#x7B54;&#x6848;</li>
</ul>
</li>
</ul>
<h1 id="chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;&#x53C2;&#x8003;&#xFF09;"><a href="#chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;&#x53C2;&#x8003;&#xFF09;"></a>chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;<a href="https://www.youtube.com/watch?v=UsaZhQ9bY2k">&#x53C2;&#x8003;</a>&#xFF09;</h1>
<p>&#x573A;&#x666F;&#x8DDF;&#x95EE;&#x9898;</p>
<ul>
<li>&#x66F4;&#x7CBE;&#x51C6;&#x63D0;&#x51FA;&#x9700;&#x6C42;&#xFF0C;&#x624D;&#x80FD;&#x5229;&#x7528;&#x597D; chatGPT</li>
<li>&#x8F85;&#x52A9; chatGPT &#x4FEE;&#x6B63;&#x56DE;&#x7B54;&#x9519;&#x8BEF;&#xFF0C;&#x540C;&#x65F6;&#x53C8;&#x4E0D;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7684;&#x5176;&#x4ED6;&#x7B54;&#x6848;</li>
<li>&#x68C0;&#x6D4B;&#x56DE;&#x7B54;&#x662F;&#x5426;&#x7531;&#x673A;&#x5668;&#x751F;&#x6210;</li>
<li>&#x5982;&#x4F55;&#x907F;&#x514D; chatGPT &#x6CC4;&#x5BC6;&#xFF0C;&#x5982;&#x4F55;&#x505A;&#x9690;&#x79C1;&#x4FDD;&#x62A4;&#xFF08;&#x76EE;&#x524D;&#x53EF;&#x4EE5; chatGPT &#x88AB;&#x50AC;&#x7720;&#x7136;&#x540E;&#x7A81;&#x7834;&#x672C;&#x8EAB;&#x4E0D;&#x6CC4;&#x5BC6;&#x7684;&#x9650;&#x5236;&#xFF09;</li>
<li>AI &#x8BAD;&#x7EC3;&#xFF0C;&#x907F;&#x514D;&#x4F26;&#x7406;&#x95EE;&#x9898;</li>
<li>AI &#x672C;&#x8EAB;&#x5B89;&#x5168;&#xFF1A;&#x89E3;&#x51B3;&#x63D0;&#x793A;&#x6CE8;&#x5165;&#xFF08;&#x7C7B;&#x4F3C; &#x7F51;&#x9875;&#x7684; xss &#xFF0C;SQL &#x6CE8;&#x5165;&#x7B49;&#xFF09;&#xFF0C;&#x8D8A;&#x72F1;&#x7B49;&#x5B89;&#x5168;&#x95EE;&#x9898;</li>
<li>&#x77E5;&#x8BC6;&#x4EA7;&#x6743;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#xFF1A;AI&#x751F;&#x6210;&#x7684;&#x4E1C;&#x897F;&#x5230;&#x5E95;&#x7B97;&#x4E0D;&#x7B97;&#x4FB5;&#x6743;&#xFF1F;&#xFF08;&#x4F8B;&#x5982;&#x4E4B;&#x524D;&#x7684;&#x722C;&#x522B;&#x4EBA;&#x7F51;&#x7AD9;&#x7684;&#x6570;&#x636E;&#x4F5C;&#x4E3A;&#x81EA;&#x8EAB;&#x7684;&#x5546;&#x4E1A;&#x76C8;&#x5229;&#x4F9D;&#x636E;&#xFF0C;&#x662F;&#x5426;&#x7B97;&#x4FB5;&#x6743;&#xFF1F;&#xFF09;</li>
<li>&#x8D8B;&#x52BF;&#x9884;&#x6D4B;
<ul>
<li>&#x52A8;&#x4F5C;&#xFF08;&#x8FD0;&#x52A8;&#xFF0C;&#x6E38;&#x620F;&#x7B49;&#x6570;&#x636E;&#xFF09;&#x6587;&#x4EF6;&#x5316;&#xFF1A;&#x53EF;&#x4EE5;&#x5BF9;&#x6574;&#x573A;&#x7FBD;&#x6BDB;&#x7403;&#x505A;&#x6587;&#x5B57;&#x6807;&#x8BB0;&#x5E8F;&#x5217;&#x5316;&#xFF0C;&#x7136;&#x540E;&#x8F93;&#x5165; chatGPT&#xFF0C;&#x6700;&#x540E;&#x53EF;&#x4EE5;&#x9884;&#x6D4B;&#x843D;&#x70B9;&#x8DDF;&#x4E2A;&#x4EBA;&#x884C;&#x4E3A;</li>
</ul>
</li>
</ul>
<p>&#x804C;&#x4E1A;&#x540D;&#xFF1F;</p>
<ul>
<li>&#x6807;&#x6CE8;&#x5E08;&#xFF1A;&#x6807;&#x8BB0;&#x4FE1;&#x606F;&#xFF0C;&#x6295;&#x5582;&#x5E76;&#x8BAD;&#x7EC3; AI</li>
<li>&#x5B89;&#x5168;&#x5458;&#xFF1A;&#x786E;&#x4FDD; AI &#x4E0D;&#x88AB;&#x653B;&#x7834;</li>
</ul>
<p>gpt&#x81EA;&#x5DF1;&#x7684;&#x56DE;&#x7B54;</p>
<ul>
<li>&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#xFF1A;&#x63D0;&#x793A;&#x662F;&#x4E00;&#x79CD;&#x6307;&#x5BFC;GPT-4&#x751F;&#x6210;&#x5185;&#x5BB9;&#x7684;&#x6587;&#x672C;&#x6216;&#x56FE;&#x50CF;&#xFF0C;&#x901A;&#x5E38;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x7279;&#x6B8A;&#x7684;&#x7B26;&#x53F7;&#x6216;&#x6307;&#x4EE4;&#x3002;&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#x5C31;&#x662F;&#x4E13;&#x95E8;&#x8BBE;&#x8BA1;&#x548C;&#x4F18;&#x5316;&#x63D0;&#x793A;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x9700;&#x8981;&#x4E86;&#x89E3;GPT-4&#x7684;&#x5185;&#x90E8;&#x673A;&#x5236;&#x548C;&#x903B;&#x8F91;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x540C;&#x9886;&#x57DF;&#x548C;&#x573A;&#x666F;&#x4E0B;&#x7528;&#x6237;&#x7684;&#x9700;&#x6C42;&#x548C;&#x504F;&#x597D;&#x3002;&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#x53EF;&#x4EE5;&#x4E3A;&#x5404;&#x79CD;&#x5E94;&#x7528;&#x573A;&#x666F;&#x63D0;&#x4F9B;&#x9AD8;&#x8D28;&#x91CF;&#x3001;&#x9AD8;&#x6548;&#x7387;&#x3001;&#x9AD8;&#x5B89;&#x5168;&#x6027;&#x7684;&#x63D0;&#x793A;&#x670D;&#x52A1;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#xFF1A;&#x867D;&#x7136;GPT-4&#x5177;&#x6709;&#x5F3A;&#x5927;&#x7684;&#x751F;&#x6210;&#x80FD;&#x529B;&#xFF0C;&#x4F46;&#x5B83;&#x4E5F;&#x53EF;&#x80FD;&#x4F1A;&#x4EA7;&#x751F;&#x4E00;&#x4E9B;&#x4E0D;&#x5408;&#x9002;&#x6216;&#x6709;&#x5BB3;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x5982;&#x8272;&#x60C5;&#x3001;&#x66B4;&#x529B;&#x3001;&#x6B67;&#x89C6;&#x3001;&#x8C23;&#x8A00;&#x7B49;&#x3002;&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#x5C31;&#x662F;&#x8D1F;&#x8D23;&#x68C0;&#x67E5;&#x548C;&#x8FC7;&#x6EE4;GPT-4&#x751F;&#x6210;&#x5185;&#x5BB9;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#xFF0C;&#x5E76;&#x53CA;&#x65F6;&#x5220;&#x9664;&#x6216;&#x4FEE;&#x6539;&#x4E0D;&#x826F;&#x5185;&#x5BB9;&#x3002;&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#x9700;&#x8981;&#x5177;&#x5907;&#x4E00;&#x5B9A;&#x7684;&#x4E13;&#x4E1A;&#x77E5;&#x8BC6;&#x548C;&#x5224;&#x65AD;&#x80FD;&#x529B;&#xFF0C;&#x4EE5;&#x53CA;&#x826F;&#x597D;&#x7684;&#x9053;&#x5FB7;&#x7D20;&#x517B;&#x548C;&#x8D23;&#x4EFB;&#x5FC3;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#xFF1A;&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#x662F;&#x5229;&#x7528;GPT-4&#x4E3A;&#x5404;&#x79CD;&#x5E73;&#x53F0;&#x548C;&#x6E20;&#x9053;&#x63D0;&#x4F9B;&#x4F18;&#x8D28;&#x5185;&#x5BB9;&#x670D;&#x52A1;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x9700;&#x8981;&#x6839;&#x636E;&#x76EE;&#x6807;&#x53D7;&#x4F17;&#x548C;&#x5E02;&#x573A;&#x9700;&#x6C42;&#xFF0C;&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x63D0;&#x793A;&#x548C;&#x53C2;&#x6570;&#x6765;&#x8C03;&#x7528;GPT-4&#x751F;&#x6210;&#x76F8;&#x5E94;&#x7C7B;&#x578B;&#x548C;&#x98CE;&#x683C;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x5E76;&#x8FDB;&#x884C;&#x7F16;&#x8F91;&#x3001;&#x4F18;&#x5316;&#x548C;&#x53D1;&#x5E03;&#x3002;&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#x9700;&#x8981;&#x5177;&#x5907;&#x4E00;&#x5B9A;&#x7684;&#x521B;&#x610F;&#x601D;&#x7EF4;&#x548C;&#x6587;&#x6848;&#x80FD;&#x529B;&#xFF0C;&#x4EE5;&#x53CA;&#x5BF9;&#x5404;&#x79CD;&#x5A92;&#x4F53;&#x5E73;&#x53F0;&#x548C;&#x884C;&#x4E1A;&#x52A8;&#x6001;&#x6709;&#x4E00;&#x5B9A;&#x4E86;&#x89E3;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x521B;&#x4F5C;&#x8005;&#xFF1A;&#x5185;&#x5BB9;&#x521B;&#x4F5C;&#x8005;&#x662F;&#x5229;&#x7528;GPT-4&#x8F85;&#x52A9;&#x81EA;&#x5DF1;&#x8FDB;&#x884C;&#x521B;&#x4F5C;&#x6D3B;&#x52A8;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x81EA;&#x5DF1;&#x60F3;&#x8981;&#x8868;&#x8FBE;&#x6216;&#x4F20;&#x8FBE;&#x7ED9;&#x7528;&#x6237;</li>
</ul>
`,E=[{level:1,title:"\u53CD\u5411\u4F20\u64AD",children:[]},{level:1,title:"CGAN MNIST \u8BAD\u7EC3\u6B65\u9AA4",children:[]},{level:1,title:"\u9884\u5904\u7406",children:[]},{level:1,title:"\u635F\u5931\u51FD\u6570",children:[{level:2,title:"\u4EA4\u53C9\u71B5",children:[{level:3,title:"\u95EE\u9898",children:[]}]}]},{level:1,title:"Transformer",children:[{level:2,title:"positional encoding",children:[]},{level:2,title:"self-attention",children:[]}]},{level:1,title:"one hot \u7F16\u7801",children:[{level:2,title:"\u4F8B\u5B50",children:[]},{level:2,title:"\u5B9E\u73B0",children:[]},{level:2,title:"CRNN + CTC \u89E3\u51B3\u53D8\u957F\u6587\u672C\u8BC6\u522B",children:[{level:3,title:"CTC \u5982\u4F55\u8BA1\u7B97\u9884\u6D4B\u5E8F\u5217\u8DDF\u76EE\u6807\u5E8F\u5217\u7684\u76F8\u8BC6\u5EA6\uFF1F",children:[]}]}]},{level:1,title:"\u6DF1\u5EA6\u5B66\u4E60\u7F16\u7A0B\u8303\u5F0F",children:[]},{level:1,title:"\u673A\u5668\u5B66\u4E60\u5206\u7C7B\u7684\u4E00\u70B9\u6280\u5DE7",children:[]},{level:1,title:"\u5C1D\u8BD5\u7406\u89E3 ONNX \uFF08Open Neural Network Exchange\uFF09",children:[]},{level:1,title:"\u6DF1\u5EA6\u5B66\u4E60\u4E2D\u7684 Epoch \u548C Batch",children:[]},{level:1,title:"GPT \u5C1D\u8BD5",children:[]},{level:1,title:"CNN \u7684\u7B80\u5355\u7406\u89E3",children:[]},{level:1,title:"\u4E00\u53E5\u8BDD\u4FE1\u606F",children:[]},{level:1,title:"AGI \u7684\u4E00\u70B9\u7406\u89E3",children:[]},{level:1,title:"gpt \u53EF\u80FD\u7684\u7814\u7A76\u65B9\u5411",children:[]},{level:1,title:"\u5173\u4E8E chatGPT \u5F15\u53D1\u7684\u4EBA\u5DE5\u667A\u80FD\u601D\u8003 2023-3-1",children:[]},{level:1,title:"chatGPT \u884D\u751F\u7684\u672A\u6765\u804C\u4E1A\uFF1F\uFF08\u66F4\u65B0 2023-3-13\uFF0C\u53C2\u8003\uFF09",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
