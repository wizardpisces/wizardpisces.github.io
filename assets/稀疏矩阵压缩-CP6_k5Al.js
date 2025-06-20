const x={},F=`<h1 id="&#x538B;&#x7F29;&#x7A00;&#x758F;&#x884C;&#xFF08;Compressed Sparse Row, CSR&#xFF09;&#x683C;&#x5F0F;"><a href="#&#x538B;&#x7F29;&#x7A00;&#x758F;&#x884C;&#xFF08;Compressed Sparse Row, CSR&#xFF09;&#x683C;&#x5F0F;"></a>&#x538B;&#x7F29;&#x7A00;&#x758F;&#x884C;&#xFF08;Compressed Sparse Row, CSR&#xFF09;&#x683C;&#x5F0F;</h1>
<h2 id="&#x538B;&#x7F29;&#x8FC7;&#x7A0B;"><a href="#&#x538B;&#x7F29;&#x8FC7;&#x7A0B;"></a>&#x538B;&#x7F29;&#x8FC7;&#x7A0B;</h2>
<h3 id="&#x751F;&#x6210;row_pointers&#x6570;&#x7EC4;"><a href="#&#x751F;&#x6210;row_pointers&#x6570;&#x7EC4;"></a>&#x751F;&#x6210;<code>row_pointers</code>&#x6570;&#x7EC4;</h3>
<p><code>row_pointers</code>&#x6570;&#x7EC4;&#x7684;&#x751F;&#x6210;&#x662F;&#x57FA;&#x4E8E;&#x6BCF;&#x884C;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x7D2F;&#x79EF;&#x6570;&#x91CF;&#x6765;&#x786E;&#x5B9A;&#x7684;&#x3002;&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x884C;&#xFF0C;<code>row_pointers[i]</code>&#x5B58;&#x50A8;&#x7684;&#x662F;&#x7B2C;i&#x884C;&#x7B2C;&#x4E00;&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x5728;<code>values</code>&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x3002;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;<code>row_pointers</code>&#x6570;&#x7EC4;</strong>&#xFF1A;</p>
<ul>
<li>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x957F;&#x5EA6;&#x4E3A;&#x884C;&#x6570;&#x52A0;&#x4E00;&#x7684;&#x6570;&#x7EC4;<code>row_pointers</code>&#x3002;&#x989D;&#x5916;&#x7684;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7528;&#x4E8E;&#x6807;&#x8BB0;&#x6240;&#x6709;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x4E4B;&#x540E;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7D2F;&#x8BA1;&#x6BCF;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF;</strong>&#xFF1A;</p>
<ul>
<li>&#x904D;&#x5386;&#x7A00;&#x758F;&#x77E9;&#x9635;&#xFF0C;&#x6BCF;&#x9047;&#x5230;&#x4E00;&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x5C31;&#x589E;&#x52A0;&#x76F8;&#x5E94;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8BA1;&#x6570;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x586B;&#x5145;<code>row_pointers</code>&#x6570;&#x7EC4;</strong>&#xFF1A;</p>
<ul>
<li>&#x4ECE;&#x7B2C;0&#x884C;&#x5F00;&#x59CB;&#xFF0C;&#x7D2F;&#x8BA1;&#x6BCF;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8BA1;&#x6570;&#xFF0C;&#x5E76;&#x5C06;&#x5176;&#x5B58;&#x50A8;&#x5230;<code>row_pointers</code>&#x6570;&#x7EC4;&#x4E2D;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x5177;&#x4F53;&#x4F8B;&#x5B50;"><a href="#&#x5177;&#x4F53;&#x4F8B;&#x5B50;"></a>&#x5177;&#x4F53;&#x4F8B;&#x5B50;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4EE5;&#x4E0B;&#x7A00;&#x758F;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 2, 0]
[0, 3, 0, 4]
[5, 0, 0, 0]
[0, 6, 0, 0]
</code></pre>
<p>&#x6211;&#x4EEC;&#x751F;&#x6210;<code>values</code>&#x548C;<code>col_indices</code>&#x6570;&#x7EC4;&#x5982;&#x4E0B;&#xFF1A;</p>
<ul>
<li><strong>values</strong>&#xFF1A;<code>[1, 2, 3, 4, 5, 6]</code></li>
<li><strong>col_indices</strong>&#xFF1A;<code>[0, 2, 1, 3, 0, 1]</code></li>
</ul>
<p>&#x73B0;&#x5728;&#x751F;&#x6210;<code>row_pointers</code>&#x6570;&#x7EC4;&#x7684;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;<code>row_pointers</code></strong>&#xFF1A;</p>
<pre><code>row_pointers = [0, 0, 0, 0, 0]
</code></pre>
</li>
<li>
<p><strong>&#x7D2F;&#x8BA1;&#x6BCF;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF;</strong>&#xFF1A;</p>
<ul>
<li>&#x7B2C;0&#x884C;&#x6709;2&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#xFF08;1&#x548C;2&#xFF09;</li>
<li>&#x7B2C;1&#x884C;&#x6709;2&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#xFF08;3&#x548C;4&#xFF09;</li>
<li>&#x7B2C;2&#x884C;&#x6709;1&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#xFF08;5&#xFF09;</li>
<li>&#x7B2C;3&#x884C;&#x6709;1&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#xFF08;6&#xFF09;</li>
</ul>
</li>
<li>
<p><strong>&#x586B;&#x5145;<code>row_pointers</code>&#x6570;&#x7EC4;</strong>&#xFF1A;</p>
<ul>
<li><code>row_pointers[0]</code> = 0 &#xFF08;&#x7B2C;0&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8D77;&#x59CB;&#x4E8E;<code>values[0]</code>&#xFF09;</li>
<li><code>row_pointers[1]</code> = <code>row_pointers[0]</code> + &#x7B2C;0&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF; = 0 + 2 = 2 &#xFF08;&#x7B2C;1&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8D77;&#x59CB;&#x4E8E;<code>values[2]</code>&#xFF09;</li>
<li><code>row_pointers[2]</code> = <code>row_pointers[1]</code> + &#x7B2C;1&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF; = 2 + 2 = 4 &#xFF08;&#x7B2C;2&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8D77;&#x59CB;&#x4E8E;<code>values[4]</code>&#xFF09;</li>
<li><code>row_pointers[3]</code> = <code>row_pointers[2]</code> + &#x7B2C;2&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF; = 4 + 1 = 5 &#xFF08;&#x7B2C;3&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x8D77;&#x59CB;&#x4E8E;<code>values[5]</code>&#xFF09;</li>
<li><code>row_pointers[4]</code> = <code>row_pointers[3]</code> + &#x7B2C;3&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x6570;&#x91CF; = 5 + 1 = 6 &#xFF08;&#x8FD9;&#x662F;&#x6240;&#x6709;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x4E4B;&#x540E;&#x7684;&#x4F4D;&#x7F6E;&#xFF09;</li>
</ul>
</li>
</ol>
<p>&#x6700;&#x7EC8;&#x751F;&#x6210;&#x7684;<code>row_pointers</code>&#x6570;&#x7EC4;&#x4E3A;&#xFF1A;</p>
<pre><code>row_pointers = [0, 2, 4, 5, 6]
</code></pre>
<h2 id="&#x8FD8;&#x539F;&#x8FC7;&#x7A0B;"><a href="#&#x8FD8;&#x539F;&#x8FC7;&#x7A0B;"></a>&#x8FD8;&#x539F;&#x8FC7;&#x7A0B;</h2>
<p>&#x5728;&#x8FD8;&#x539F;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x65F6;&#xFF0C;<code>row_pointers</code>&#x6570;&#x7EC4;&#x8D77;&#x5230;&#x91CD;&#x8981;&#x4F5C;&#x7528;&#x3002;&#x5B83;&#x5E2E;&#x52A9;&#x6211;&#x4EEC;&#x786E;&#x5B9A;&#x6BCF;&#x884C;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x5728;<code>values</code>&#x548C;<code>col_indices</code>&#x4E2D;&#x7684;&#x8303;&#x56F4;&#x3002;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;&#x8FD8;&#x539F;&#x77E9;&#x9635;</strong>&#xFF1A;</p>
<ul>
<li>&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4E0E;&#x539F;&#x59CB;&#x77E9;&#x9635;A&#x5C3A;&#x5BF8;&#x76F8;&#x540C;&#x7684;&#x96F6;&#x77E9;&#x9635;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x904D;&#x5386;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;<code>row_pointers</code>&#x6570;&#x7EC4;&#x786E;&#x5B9A;&#x6BCF;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x5728;<code>values</code>&#x548C;<code>col_indices</code>&#x4E2D;&#x7684;&#x8D77;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;&#x3002;</li>
<li>&#x5C06;&#x8FD9;&#x4E9B;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x586B;&#x5145;&#x56DE;&#x96F6;&#x77E9;&#x9635;&#x7684;&#x5BF9;&#x5E94;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x5177;&#x4F53;&#x8FD8;&#x539F;&#x6B65;&#x9AA4;"><a href="#&#x5177;&#x4F53;&#x8FD8;&#x539F;&#x6B65;&#x9AA4;"></a>&#x5177;&#x4F53;&#x8FD8;&#x539F;&#x6B65;&#x9AA4;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x8981;&#x8FD8;&#x539F;&#x4E0A;&#x9762;&#x7684;&#x77E9;&#x9635;A&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;&#x8FD8;&#x539F;&#x77E9;&#x9635;</strong>&#xFF1A;</p>
<pre><code>A_restored = [[0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]]
</code></pre>
</li>
<li>
<p><strong>&#x904D;&#x5386;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;</strong>&#xFF1A;</p>
<ul>
<li>
<p>&#x7B2C;0&#x884C;&#xFF1A;<code>row_pointers[0] = 0</code>, <code>row_pointers[1] = 2</code></p>
<pre><code>&#x4ECE;values[0]&#x5230;values[1]&#xFF1A;
A_restored[0, col_indices[0]] = values[0] -&gt; A_restored[0, 0] = 1
A_restored[0, col_indices[1]] = values[1] -&gt; A_restored[0, 2] = 2
</code></pre>
</li>
<li>
<p>&#x7B2C;1&#x884C;&#xFF1A;<code>row_pointers[1] = 2</code>, <code>row_pointers[2] = 4</code></p>
<pre><code>&#x4ECE;values[2]&#x5230;values[3]&#xFF1A;
A_restored[1, col_indices[2]] = values[2] -&gt; A_restored[1, 1] = 3
A_restored[1, col_indices[3]] = values[3] -&gt; A_restored[1, 3] = 4
</code></pre>
</li>
<li>
<p>&#x7B2C;2&#x884C;&#xFF1A;<code>row_pointers[2] = 4</code>, <code>row_pointers[3] = 5</code></p>
<pre><code>&#x4ECE;values[4]&#x5230;values[4]&#xFF1A;
A_restored[2, col_indices[4]] = values[4] -&gt; A_restored[2, 0] = 5
</code></pre>
</li>
<li>
<p>&#x7B2C;3&#x884C;&#xFF1A;<code>row_pointers[3] = 5</code>, <code>row_pointers[4] = 6</code></p>
<pre><code>&#x4ECE;values[5]&#x5230;values[5]&#xFF1A;
A_restored[3, col_indices[5]] = values[5] -&gt; A_restored[3, 1] = 6
</code></pre>
</li>
</ul>
</li>
</ol>
<p>&#x6700;&#x7EC8;&#x8FD8;&#x539F;&#x7684;&#x77E9;&#x9635;&#x4E3A;&#xFF1A;</p>
<pre><code>A_restored = [[1, 0, 2, 0],
              [0, 3, 0, 4],
              [5, 0, 0, 0],
              [0, 6, 0, 0]]
</code></pre>
<p>&#x662F;&#x7684;&#xFF0C;&#x9664;&#x4E86;&#x538B;&#x7F29;&#x7A00;&#x758F;&#x884C;&#xFF08;Compressed Sparse Row, CSR&#xFF09;&#x683C;&#x5F0F;&#x5916;&#xFF0C;&#x8FD8;&#x6709;&#x5176;&#x4ED6;&#x51E0;&#x79CD;&#x5E38;&#x89C1;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x538B;&#x7F29;&#x65B9;&#x6CD5;&#x3002;&#x4E0B;&#x9762;&#x4ECB;&#x7ECD;&#x51E0;&#x79CD;&#x5E38;&#x89C1;&#x7684;&#x65B9;&#x6CD5;&#x53CA;&#x5176;&#x7279;&#x70B9;&#xFF1A;</p>
<h1 id="&#x5176;&#x4ED6;&#x538B;&#x7F29;&#x65B9;&#x6CD5;"><a href="#&#x5176;&#x4ED6;&#x538B;&#x7F29;&#x65B9;&#x6CD5;"></a>&#x5176;&#x4ED6;&#x538B;&#x7F29;&#x65B9;&#x6CD5;</h1>
<h3 id="1. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5217;&#xFF08;Compressed Sparse Column, CSC&#xFF09;"><a href="#1. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5217;&#xFF08;Compressed Sparse Column, CSC&#xFF09;"></a>1. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5217;&#xFF08;Compressed Sparse Column, CSC&#xFF09;</h3>
<p>CSC&#x683C;&#x5F0F;&#x4E0E;CSR&#x683C;&#x5F0F;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x5B83;&#x6309;&#x5217;&#x800C;&#x4E0D;&#x662F;&#x6309;&#x884C;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E09;&#x4E2A;&#x6570;&#x7EC4;&#x6765;&#x5B58;&#x50A8;&#x7A00;&#x758F;&#x77E9;&#x9635;&#xFF1A;</p>
<ul>
<li><strong>values</strong>&#xFF1A;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x3002;</li>
<li><strong>row_indices</strong>&#xFF1A;&#x5B58;&#x50A8;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x884C;&#x7D22;&#x5F15;&#x3002;</li>
<li><strong>col_pointers</strong>&#xFF1A;&#x5B58;&#x50A8;&#x6BCF;&#x5217;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x5728;<code>values</code>&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5BF9;&#x4E8E;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 2, 0]
[0, 3, 0, 4]
[5, 0, 0, 0]
[0, 6, 0, 0]
</code></pre>
<ul>
<li><strong>values</strong>&#xFF1A;<code>[1, 5, 3, 6, 2, 4]</code></li>
<li><strong>row_indices</strong>&#xFF1A;<code>[0, 2, 1, 3, 0, 1]</code></li>
<li><strong>col_pointers</strong>&#xFF1A;<code>[0, 2, 4, 4, 6]</code></li>
</ul>
<h3 id="2. &#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;Block Compressed Sparse Row, BCSR&#xFF09;"><a href="#2. &#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;Block Compressed Sparse Row, BCSR&#xFF09;"></a>2. &#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;Block Compressed Sparse Row, BCSR&#xFF09;</h3>
<p>BCSR&#x683C;&#x5F0F;&#x662F;CSR&#x683C;&#x5F0F;&#x7684;&#x6269;&#x5C55;&#xFF0C;&#x901A;&#x8FC7;&#x5C06;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x5212;&#x5206;&#x4E3A;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5757;&#x6765;&#x8FDB;&#x884C;&#x538B;&#x7F29;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8;&#x5B58;&#x50A8;&#x548C;&#x8BA1;&#x7B97;&#x7684;&#x5C40;&#x90E8;&#x6027;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6027;&#x80FD;&#x3002;</p>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5BF9;&#x4E8E;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 2, 0]
[0, 3, 0, 4]
[5, 0, 0, 0]
[0, 6, 0, 0]
</code></pre>
<p>&#x53EF;&#x4EE5;&#x5212;&#x5206;&#x4E3A;2x2&#x7684;&#x5757;&#xFF1A;</p>
<pre><code>[1, 0]
[0, 3]

[2, 0]
[0, 4]

[5, 0]
[0, 6]
</code></pre>
<ul>
<li><strong>values</strong>&#xFF1A;&#x5305;&#x542B;&#x6240;&#x6709;&#x5757;&#x4E2D;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x3002;</li>
<li><strong>block_row_ptr</strong>&#xFF1A;&#x6307;&#x793A;&#x6BCF;&#x4E2A;&#x5757;&#x884C;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x3002;</li>
<li><strong>block_col_ind</strong>&#xFF1A;&#x6307;&#x793A;&#x6BCF;&#x4E2A;&#x5757;&#x5217;&#x7684;&#x7D22;&#x5F15;&#x3002;</li>
</ul>
<h3 id="3. &#x7A00;&#x758F;&#x5BF9;&#x89D2;&#xFF08;Diagonal, DIA&#xFF09;"><a href="#3. &#x7A00;&#x758F;&#x5BF9;&#x89D2;&#xFF08;Diagonal, DIA&#xFF09;"></a>3. &#x7A00;&#x758F;&#x5BF9;&#x89D2;&#xFF08;Diagonal, DIA&#xFF09;</h3>
<p>DIA&#x683C;&#x5F0F;&#x7528;&#x4E8E;&#x5BF9;&#x89D2;&#x7EBF;&#x4E3A;&#x4E3B;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#xFF0C;&#x901A;&#x8FC7;&#x5B58;&#x50A8;&#x77E9;&#x9635;&#x7684;&#x5BF9;&#x89D2;&#x7EBF;&#x6765;&#x538B;&#x7F29;&#x6570;&#x636E;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;&#xFF1A;</p>
<ul>
<li><strong>values</strong>&#xFF1A;&#x5B58;&#x50A8;&#x5BF9;&#x89D2;&#x7EBF;&#x5143;&#x7D20;&#x3002;</li>
<li><strong>offsets</strong>&#xFF1A;&#x5B58;&#x50A8;&#x6BCF;&#x6761;&#x5BF9;&#x89D2;&#x7EBF;&#x7684;&#x504F;&#x79FB;&#x3002;</li>
</ul>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5BF9;&#x4E8E;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 0, 0]
[0, 1, 0, 0]
[0, 0, 1, 0]
[0, 0, 0, 1]
</code></pre>
<ul>
<li><strong>values</strong>&#xFF1A;<code>[[1, 1, 1, 1]]</code></li>
<li><strong>offsets</strong>&#xFF1A;<code>[0]</code></li>
</ul>
<h3 id="4. &#x534F;&#x540C;&#x5B58;&#x50A8;&#x683C;&#x5F0F;&#xFF08;Coordinate List, COO&#xFF09;"><a href="#4. &#x534F;&#x540C;&#x5B58;&#x50A8;&#x683C;&#x5F0F;&#xFF08;Coordinate List, COO&#xFF09;"></a>4. &#x534F;&#x540C;&#x5B58;&#x50A8;&#x683C;&#x5F0F;&#xFF08;Coordinate List, COO&#xFF09;</h3>
<p>COO&#x683C;&#x5F0F;&#x901A;&#x8FC7;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x884C;&#x7D22;&#x5F15;&#x3001;&#x5217;&#x7D22;&#x5F15;&#x548C;&#x5BF9;&#x5E94;&#x503C;&#x6765;&#x8868;&#x793A;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E09;&#x4E2A;&#x6570;&#x7EC4;&#xFF1A;</p>
<ul>
<li><strong>row_indices</strong>&#xFF1A;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x884C;&#x7D22;&#x5F15;&#x3002;</li>
<li><strong>col_indices</strong>&#xFF1A;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x5217;&#x7D22;&#x5F15;&#x3002;</li>
<li><strong>values</strong>&#xFF1A;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;</li>
</ul>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5BF9;&#x4E8E;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 2, 0]
[0, 3, 0, 4]
[5, 0, 0, 0]
[0, 6, 0, 0]
</code></pre>
<ul>
<li><strong>row_indices</strong>&#xFF1A;<code>[0, 0, 1, 1, 2, 3]</code></li>
<li><strong>col_indices</strong>&#xFF1A;<code>[0, 2, 1, 3, 0, 1]</code></li>
<li><strong>values</strong>&#xFF1A;<code>[1, 2, 3, 4, 5, 6]</code></li>
</ul>
<h3 id="5. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;Compressed Sparse Blocks, CSB&#xFF09;"><a href="#5. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;Compressed Sparse Blocks, CSB&#xFF09;"></a>5. &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;Compressed Sparse Blocks, CSB&#xFF09;</h3>
<p>CSB&#x683C;&#x5F0F;&#x662F;&#x4E00;&#x79CD;&#x5757;&#x538B;&#x7F29;&#x683C;&#x5F0F;&#xFF0C;&#x9002;&#x7528;&#x4E8E;&#x5177;&#x6709;&#x5C40;&#x90E8;&#x5BC6;&#x96C6;&#x5757;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x3002;&#x5B83;&#x5C06;&#x77E9;&#x9635;&#x5212;&#x5206;&#x4E3A;&#x5C0F;&#x5757;&#xFF0C;&#x5E76;&#x4EC5;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5757;&#x7684;&#x4FE1;&#x606F;&#x3002;CSB&#x683C;&#x5F0F;&#x5728;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x4E2D;&#x8868;&#x73B0;&#x826F;&#x597D;&#x3002;</p>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5047;&#x8BBE;&#x77E9;&#x9635;A&#x5212;&#x5206;&#x4E3A;2x2&#x7684;&#x5757;&#xFF1A;</p>
<pre><code>[1, 0] [2, 0]
[0, 3] [0, 4]
[5, 0] [0, 0]
[0, 6] [0, 0]
</code></pre>
<p>&#x53EA;&#x5B58;&#x50A8;&#x542B;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x5757;&#x3002;</p>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x4E0D;&#x540C;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x538B;&#x7F29;&#x65B9;&#x6CD5;&#x9002;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x5E94;&#x7528;&#x573A;&#x666F;&#x548C;&#x77E9;&#x9635;&#x7ED3;&#x6784;&#x3002;&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x538B;&#x7F29;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x5927;&#x5927;&#x63D0;&#x9AD8;&#x5B58;&#x50A8;&#x6548;&#x7387;&#x548C;&#x8BA1;&#x7B97;&#x6027;&#x80FD;&#x3002;</p>
<h2 id="&#x5757;&#x7A00;&#x758F;&#x884C;&#x8DDF; &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757; &#x533A;&#x522B;"><a href="#&#x5757;&#x7A00;&#x758F;&#x884C;&#x8DDF; &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757; &#x533A;&#x522B;"></a>&#x5757;&#x7A00;&#x758F;&#x884C;&#x8DDF; &#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757; &#x533A;&#x522B;</h2>
<h3 id="&#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;BCSR&#xFF09;"><a href="#&#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;BCSR&#xFF09;"></a>&#x5757;&#x7A00;&#x758F;&#x884C;&#xFF08;BCSR&#xFF09;</h3>
<p>BCSR&#x683C;&#x5F0F;&#x662F;CSR&#x683C;&#x5F0F;&#x7684;&#x6269;&#x5C55;&#xFF0C;&#x901A;&#x8FC7;&#x5C06;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x5212;&#x5206;&#x4E3A;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5757;&#x6765;&#x8FDB;&#x884C;&#x538B;&#x7F29;&#x3002;&#x5B83;&#x5728;&#x5757;&#x7EA7;&#x522B;&#x4E0A;&#x5B58;&#x50A8;&#x6570;&#x636E;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x5B58;&#x50A8;&#x548C;&#x8BA1;&#x7B97;&#x7684;&#x5C40;&#x90E8;&#x6027;&#x3002;</p>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4EE5;&#x4E0B;&#x7A00;&#x758F;&#x77E9;&#x9635;A&#xFF1A;</p>
<pre><code>&#x77E9;&#x9635;A&#xFF1A;
[1, 0, 2, 0]
[0, 3, 0, 4]
[5, 0, 0, 0]
[0, 6, 0, 0]
</code></pre>
<p>&#x6211;&#x4EEC;&#x5C06;&#x77E9;&#x9635;A&#x5212;&#x5206;&#x4E3A;2x2&#x7684;&#x5757;&#xFF1A;</p>
<pre><code>[1, 0] [2, 0]
[0, 3] [0, 4]
[5, 0] [0, 0]
[0, 6] [0, 0]
</code></pre>
<p>BCSR&#x683C;&#x5F0F;&#x4F1A;&#x5B58;&#x50A8;&#x8FD9;&#x4E9B;&#x5757;&#x4E2D;&#x7684;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x53CA;&#x5176;&#x7D22;&#x5F15;&#xFF1A;</p>
<ul>
<li><strong>values</strong>&#xFF1A;<code>[1, 0, 0, 3, 2, 0, 0, 4, 5, 0, 0, 6]</code></li>
<li><strong>block_row_ptr</strong>&#xFF1A;<code>[0, 2, 3]</code>&#xFF08;&#x6BCF;&#x4E2A;&#x5757;&#x884C;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#xFF09;</li>
<li><strong>block_col_ind</strong>&#xFF1A;<code>[0, 1, 0]</code>&#xFF08;&#x6BCF;&#x4E2A;&#x5757;&#x5217;&#x7684;&#x7D22;&#x5F15;&#xFF09;</li>
</ul>
<h3 id="&#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;CSB&#xFF09;"><a href="#&#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;CSB&#xFF09;"></a>&#x538B;&#x7F29;&#x7A00;&#x758F;&#x5757;&#xFF08;CSB&#xFF09;</h3>
<p>CSB&#x683C;&#x5F0F;&#x901A;&#x8FC7;&#x5C06;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x5212;&#x5206;&#x4E3A;&#x5927;&#x5C0F;&#x76F8;&#x7B49;&#x7684;&#x5C0F;&#x5757;&#xFF0C;&#x5E76;&#x4EC5;&#x5B58;&#x50A8;&#x542B;&#x6709;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x5757;&#x3002;&#x5B83;&#x9002;&#x7528;&#x4E8E;&#x77E9;&#x9635;&#x5177;&#x6709;&#x5C40;&#x90E8;&#x5BC6;&#x96C6;&#x5757;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5728;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x4E2D;&#x8868;&#x73B0;&#x826F;&#x597D;&#x3002;</p>
<h4 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h4>
<p>&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x76F8;&#x540C;&#x7684;&#x77E9;&#x9635;A&#xFF0C;&#x5E76;&#x5C06;&#x5176;&#x5212;&#x5206;&#x4E3A;2x2&#x7684;&#x5757;&#xFF1A;</p>
<pre><code>[1, 0] [2, 0]
[0, 3] [0, 4]
[5, 0] [0, 0]
[0, 6] [0, 0]
</code></pre>
<p>CSB&#x683C;&#x5F0F;&#x4F1A;&#x5B58;&#x50A8;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x53CA;&#x5176;&#x4F4D;&#x7F6E;&#xFF1A;</p>
<ul>
<li>
<p><strong>values</strong>&#xFF1A;&#x5B58;&#x50A8;&#x975E;&#x96F6;&#x5757;&#x7684;&#x5185;&#x5BB9;&#xFF1A;</p>
<pre><code>values = [[1, 0, 0, 3],  # &#x7B2C;&#x4E00;&#x5757;
          [2, 0, 0, 4],  # &#x7B2C;&#x4E8C;&#x5757;
          [5, 0, 0, 6]]  # &#x7B2C;&#x4E09;&#x5757;
</code></pre>
</li>
<li>
<p><strong>block_indices</strong>&#xFF1A;&#x5B58;&#x50A8;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#xFF08;&#x5757;&#x7684;&#x884C;&#x548C;&#x5217;&#x7D22;&#x5F15;&#xFF09;&#xFF1A;</p>
<pre><code>block_indices = [(0, 0), (0, 1), (1, 0)]
</code></pre>
</li>
</ul>
<h3 id="&#x533A;&#x522B;"><a href="#&#x533A;&#x522B;"></a>&#x533A;&#x522B;</h3>
<ol>
<li>
<p><strong>&#x6570;&#x636E;&#x5B58;&#x50A8;&#x65B9;&#x5F0F;</strong>&#xFF1A;</p>
<ul>
<li><strong>BCSR</strong>&#xFF1A;&#x6309;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5757;&#x5B58;&#x50A8;&#xFF0C;&#x9002;&#x7528;&#x4E8E;&#x8F83;&#x4E3A;&#x5747;&#x5300;&#x5206;&#x5E03;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x3002;&#x6BCF;&#x884C;&#x5757;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x548C;&#x5217;&#x7D22;&#x5F15;&#x5206;&#x522B;&#x5B58;&#x50A8;&#x5728;<code>block_row_ptr</code>&#x548C;<code>block_col_ind</code>&#x4E2D;&#x3002;</li>
<li><strong>CSB</strong>&#xFF1A;&#x6309;&#x5305;&#x542B;&#x975E;&#x96F6;&#x5143;&#x7D20;&#x7684;&#x5757;&#x5B58;&#x50A8;&#xFF0C;&#x9002;&#x7528;&#x4E8E;&#x5177;&#x6709;&#x5C40;&#x90E8;&#x5BC6;&#x96C6;&#x5757;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#x3002;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x7684;&#x5185;&#x5BB9;&#x548C;&#x4F4D;&#x7F6E;&#x5206;&#x522B;&#x5B58;&#x50A8;&#x5728;<code>values</code>&#x548C;<code>block_indices</code>&#x4E2D;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x9002;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;</p>
<ul>
<li><strong>BCSR</strong>&#xFF1A;&#x9002;&#x7528;&#x4E8E;&#x8F83;&#x4E3A;&#x5747;&#x5300;&#x5206;&#x5E03;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#xFF0C;&#x901A;&#x8FC7;&#x5757;&#x7EA7;&#x522B;&#x7684;&#x5B58;&#x50A8;&#x4F18;&#x5316;&#x63D0;&#x9AD8;&#x5B58;&#x50A8;&#x548C;&#x8BA1;&#x7B97;&#x7684;&#x5C40;&#x90E8;&#x6027;&#x3002;</li>
<li><strong>CSB</strong>&#xFF1A;&#x9002;&#x7528;&#x4E8E;&#x5177;&#x6709;&#x5C40;&#x90E8;&#x5BC6;&#x96C6;&#x5757;&#x7684;&#x7A00;&#x758F;&#x77E9;&#x9635;&#xFF0C;&#x5728;&#x5E76;&#x884C;&#x8BA1;&#x7B97;&#x4E2D;&#x8868;&#x73B0;&#x826F;&#x597D;&#xFF0C;&#x56E0;&#x4E3A;&#x53EF;&#x4EE5;&#x72EC;&#x7ACB;&#x5904;&#x7406;&#x6BCF;&#x4E2A;&#x5757;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5B9E;&#x73B0;&#x590D;&#x6742;&#x5EA6;</strong>&#xFF1A;</p>
<ul>
<li><strong>BCSR</strong>&#xFF1A;&#x76F8;&#x5BF9;&#x7B80;&#x5355;&#xFF0C;&#x56E0;&#x4E3A;&#x53EA;&#x9700;&#x5904;&#x7406;&#x56FA;&#x5B9A;&#x5927;&#x5C0F;&#x7684;&#x5757;&#x3002;</li>
<li><strong>CSB</strong>&#xFF1A;&#x76F8;&#x5BF9;&#x590D;&#x6742;&#xFF0C;&#x56E0;&#x4E3A;&#x9700;&#x8981;&#x52A8;&#x6001;&#x786E;&#x5B9A;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#x548C;&#x5185;&#x5BB9;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x5177;&#x4F53;&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;"><a href="#&#x5177;&#x4F53;&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;"></a>&#x5177;&#x4F53;&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;</h3>
<p><strong>&#x8FD8;&#x539F;BCSR&#x77E9;&#x9635;</strong>&#xFF1A;</p>
<ul>
<li>&#x6839;&#x636E;<code>block_row_ptr</code>&#x548C;<code>block_col_ind</code>&#x786E;&#x5B9A;&#x6BCF;&#x4E2A;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
<li>&#x4ECE;<code>values</code>&#x4E2D;&#x63D0;&#x53D6;&#x6BCF;&#x4E2A;&#x5757;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x586B;&#x5145;&#x5230;&#x539F;&#x59CB;&#x77E9;&#x9635;&#x4E2D;&#x76F8;&#x5E94;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
<p><strong>&#x8FD8;&#x539F;CSB&#x77E9;&#x9635;</strong>&#xFF1A;</p>
<ul>
<li>&#x6839;&#x636E;<code>block_indices</code>&#x786E;&#x5B9A;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
<li>&#x4ECE;<code>values</code>&#x4E2D;&#x63D0;&#x53D6;&#x6BCF;&#x4E2A;&#x975E;&#x96F6;&#x5757;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x586B;&#x5145;&#x5230;&#x539F;&#x59CB;&#x77E9;&#x9635;&#x4E2D;&#x76F8;&#x5E94;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
`,e=[{level:1,title:"压缩稀疏行（Compressed Sparse Row, CSR）格式",children:[{level:2,title:"压缩过程",children:[{level:3,title:"生成row_pointers数组",children:[]},{level:3,title:"具体例子",children:[]}]},{level:2,title:"还原过程",children:[{level:3,title:"具体还原步骤",children:[]}]}]},{level:1,title:"其他压缩方法",children:[{level:3,title:"1. 压缩稀疏列（Compressed Sparse Column, CSC）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"2. 块稀疏行（Block Compressed Sparse Row, BCSR）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"3. 稀疏对角（Diagonal, DIA）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"4. 协同存储格式（Coordinate List, COO）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"5. 压缩稀疏块（Compressed Sparse Blocks, CSB）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"总结",children:[]},{level:2,title:"块稀疏行跟 压缩稀疏块 区别",children:[{level:3,title:"块稀疏行（BCSR）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"压缩稀疏块（CSB）",children:[{level:4,title:"例子",children:[]}]},{level:3,title:"区别",children:[]},{level:3,title:"具体操作步骤",children:[]}]}]}];export{x as attributes,F as html,e as nestedHeaders};
