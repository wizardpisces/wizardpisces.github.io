const x={},s=`<h2 id="Python &#x7C7B;&#x578B;"><a href="#Python &#x7C7B;&#x578B;"></a>Python &#x7C7B;&#x578B;</h2>
<p>Python &#x7C7B;&#x578B;&#x4E0E; Typescript &#x7C7B;&#x578B;&#x533A;&#x522B;&#xFF1F;</p>
<ul>
<li>python &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x662F;&#x53EF;&#x9009;&#x7684;&#xFF0C;&#x4E0D;&#x4F1A;&#x5F3A;&#x5236;&#x6267;&#x884C;&#x7C7B;&#x578B;&#x6CE8;&#x89E3;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x4EE3;&#x7801;&#x7684;&#x8FD0;&#x884C;&#x3002;typescript &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x662F;&#x5F3A;&#x5236;&#x7684;&#xFF0C;&#x4F1A;&#x5728;&#x7F16;&#x8BD1;&#x9636;&#x6BB5;&#x62A5;&#x9519;&#x6216;&#x8B66;&#x544A;&#x3002;</li>
<li>python &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x662F;&#x57FA;&#x4E8E; PEP &#x63D0;&#x6848;&#x548C; typing &#x6A21;&#x5757;&#x5B9E;&#x73B0;&#x7684;&#xFF0C;&#x800C; typescript &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x662F;&#x57FA;&#x4E8E; ECMAScript &#x6807;&#x51C6;&#x548C; typescript &#x7F16;&#x8BD1;&#x5668;&#x5B9E;&#x73B0;&#x7684;&#x3002;</li>
<li>python &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x652F;&#x6301;&#x9E2D;&#x5B50;&#x7C7B;&#x578B;&#xFF08;duck typing&#xFF09;&#xFF0C;&#x5373;&#x53EA;&#x5173;&#x5FC3;&#x5BF9;&#x8C61;&#x7684;&#x884C;&#x4E3A;&#x800C;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x7684;&#x7C7B;&#x578B;&#x3002;typescript &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x652F;&#x6301;&#x7ED3;&#x6784;&#x7C7B;&#x578B;&#xFF08;structural typing&#xFF09;&#xFF0C;&#x5373;&#x53EA;&#x5173;&#x5FC3;&#x5BF9;&#x8C61;&#x7684;&#x7ED3;&#x6784;&#x800C;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x7684;&#x540D;&#x79F0;&#x3002;</li>
<li>python &#x7C7B;&#x578B;&#x68C0;&#x6D4B;&#x652F;&#x6301;&#x6CDB;&#x578B;&#x7F16;&#x7A0B;&#xFF08;generic programming&#xFF09;&#xFF0C;&#x5373;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x6CDB;&#x578B;&#x7C7B;&#x578B;&#x548C;&#x51FD;&#x6570;&#x3002;</li>
</ul>
<p>Pylance &#x662F;&#x4E00;&#x4E2A; Python &#x8BED;&#x8A00;&#x670D;&#x52A1;&#x5668;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x4E3A; VS Code &#x63D0;&#x4F9B;&#x5FEB;&#x901F;&#x4E14;&#x529F;&#x80FD;&#x4E30;&#x5BCC;&#x7684;&#x8BED;&#x8A00;&#x652F;&#x6301;&#x3002;Pylance &#x6709;&#x4E00;&#x4E2A; python.analysis.typeCheckingMode &#x7684;&#x8BBE;&#x7F6E;&#xFF0C;&#x53EF;&#x4EE5;&#x8BA9;&#x4F60;&#x9009;&#x62E9; basic &#x6216; strict &#x6A21;&#x5F0F;&#x6765;&#x8FDB;&#x884C;&#x7C7B;&#x578B;&#x68C0;&#x67E5;&#x3002;</p>
<h2 id="&#x57FA;&#x7840;&#x7528;&#x6CD5;"><a href="#&#x57FA;&#x7840;&#x7528;&#x6CD5;"></a>&#x57FA;&#x7840;&#x7528;&#x6CD5;</h2>
<ul>
<li>&#x6570;&#x7EC4;&#x5E7F;&#x64AD;</li>
</ul>
<pre><code class="language-python"><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-comment"># &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x6570;&#x7EC4;</span>
M = np.array([[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
              [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>],
              [<span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]])
<span class="hljs-comment"># &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4E00;&#x7EF4;&#x6570;&#x7EC4;</span>
a = np.array([<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>])
<span class="hljs-comment"># &#x4F7F;&#x7528;&#x5E7F;&#x64AD;&#x8FDB;&#x884C;&#x52A0;&#x6CD5;&#x8FD0;&#x7B97;</span>
M + a <span class="hljs-comment"># &#x76F8;&#x5F53;&#x4E8E; M + a[np.newaxis, :]</span>
<span class="hljs-comment"># array([[10, 21, 32],</span>
<span class="hljs-comment">#        [13, 24, 35],</span>
<span class="hljs-comment">#        [16, 27, 38]])</span>
<span class="hljs-comment"># &#x4F7F;&#x7528;&#x5E7F;&#x64AD;&#x8FDB;&#x884C;&#x4E58;&#x6CD5;&#x8FD0;&#x7B97;</span>
M * a <span class="hljs-comment"># &#x76F8;&#x5F53;&#x4E8E; M * a[:, np.newaxis]</span>
<span class="hljs-comment"># array([[  0,  20,  60],</span>
<span class="hljs-comment">#        [ 30,  80, 150],</span>
<span class="hljs-comment">#        [ 60, 140, 240]])</span>
</code></pre>
<ul>
<li>&#x5217;&#x8868;&#x63A8;&#x5BFC;&#x5F0F;
&#x8BED;&#x6CD5;&#x683C;&#x5F0F;&#xFF1A;[&#x8868;&#x8FBE;&#x5F0F; for &#x8FED;&#x4EE3;&#x53D8;&#x91CF; in &#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61; [if &#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;]]</li>
</ul>
<pre><code class="language-python">a_range = <span class="hljs-built_in">range</span>(<span class="hljs-number">10</span>) <span class="hljs-comment"># &#x5BF9;a_range&#x6267;&#x884C;for&#x8868;&#x8FBE;&#x5F0F;</span>
a_list = [ x * x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> a_range] <span class="hljs-comment"># a_list&#x96C6;&#x5408;&#x5305;&#x542B;10&#x4E2A;&#x5143;&#x7D20;</span>
<span class="hljs-built_in">print</span>( a_list) <span class="hljs-comment"># &#x8F93;&#x51FA;&#xFF1A; [0 , 1 , 4 , 9 , 16 , 25 , 36 , 49 , 64, 81]</span>

b_list = [ x * x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> a_range <span class="hljs-keyword">if</span> x % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>] <span class="hljs-comment"># a_list&#x96C6;&#x5408;&#x5305;&#x542B;5&#x4E2A;&#x5143;&#x7D20;</span>
<span class="hljs-built_in">print</span>( b_list) <span class="hljs-comment"># &#x8F93;&#x51FA;&#xFF1A; [0 ,4 , 16, 36, 64]</span>

d_list = [ ( x, y) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>) <span class="hljs-keyword">for</span> y <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">4</span>)] <span class="hljs-comment"># d_list&#x5217;&#x8868;&#x5305;&#x542B;20&#x4E2A;&#x5143;&#x7D20;</span>
<span class="hljs-built_in">print</span>( d_list) <span class="hljs-comment"># &#x8F93;&#x51FA;&#xFF1A; [ (0, 0), (0, 1), (0, 2), (0, 3), (1, 0), (1, 1), (1, 2), (1, 3), (2, 0), (2, 1), (2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3), (4, 0), (4, 1), (4, 2), (4, 3)]</span>
</code></pre>
<ul>
<li>&#x5143;&#x7EC4;&#x62C6;&#x5305;</li>
</ul>
<pre><code class="language-python">a, b, c = (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># &#x5C06;&#x5143;&#x7EC4;&#x4E2D;&#x7684;&#x4E09;&#x4E2A;&#x5143;&#x7D20;&#x5206;&#x522B;&#x8D4B;&#x503C;&#x7ED9;a, b, c</span>
<span class="hljs-built_in">print</span>(a, b, c) <span class="hljs-comment"># 1 2 3</span>
x, y = <span class="hljs-number">1</span>, <span class="hljs-number">2</span> <span class="hljs-comment"># &#x5C06;&#x4E24;&#x4E2A;&#x6570;&#x503C;&#x5206;&#x522B;&#x8D4B;&#x503C;&#x7ED9;x, y</span>
<span class="hljs-built_in">print</span>(x, y) <span class="hljs-comment"># 1 2</span>

a, *b = (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) <span class="hljs-comment"># &#x5C06;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x8D4B;&#x503C;&#x7ED9;a&#xFF0C;&#x5269;&#x4E0B;&#x7684;&#x5143;&#x7D20;&#x8F6C;&#x6362;&#x6210;&#x5217;&#x8868;&#x8D4B;&#x503C;&#x7ED9;b</span>
<span class="hljs-built_in">print</span>(a, b) <span class="hljs-comment"># 1 [2, 3, 4]</span>
*a, b = (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) <span class="hljs-comment"># &#x5C06;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x8D4B;&#x503C;&#x7ED9;b&#xFF0C;&#x5269;&#x4E0B;&#x7684;&#x5143;&#x7D20;&#x8F6C;&#x6362;&#x6210;&#x5217;&#x8868;&#x8D4B;&#x503C;&#x7ED9;a</span>
<span class="hljs-built_in">print</span>(a, b) <span class="hljs-comment"># [1, 2, 3] 4</span>

nums = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
nums1 = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>]
total = [*nums, *nums1] <span class="hljs-comment"># &#x5C06;&#x4E24;&#x4E2A;&#x5217;&#x8868;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x62FC;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5217;&#x8868;</span>
<span class="hljs-built_in">print</span>(total) <span class="hljs-comment"># [1, 2, 3, 4 ,5]</span>
dict1 = {<span class="hljs-string">&apos;a&apos;</span>: <span class="hljs-number">1</span>, <span class="hljs-string">&apos;b&apos;</span>: <span class="hljs-number">2</span>}
dict2 = {<span class="hljs-string">&apos;c&apos;</span>: <span class="hljs-number">3</span>}
total_dict = {**dict1, **dict2} <span class="hljs-comment"># &#x5C06;&#x4E24;&#x4E2A;&#x5B57;&#x5178;&#x4E2D;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x62FC;&#x63A5;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x5178;</span>
<span class="hljs-built_in">print</span>(total_dict) <span class="hljs-comment"># {&apos;a&apos;: 1, &apos;b&apos;: 2 , &apos;c&apos;: 3}</span>
</code></pre>
<ul>
<li>
<p>Python &#x7684; ThreadPoolExecutor &#x548C; threading &#x6A21;&#x5757;&#x5B9E;&#x73B0;&#x7684;&#x5E76;&#x53D1;&#x533A;&#x522B;</p>
</li>
<li>
<p>ThreadPoolExecutor &#x662F;&#x4E00;&#x4E2A;&#x9AD8;&#x7EA7;&#x7684;&#x63A5;&#x53E3;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x8BA9;&#x4F60;&#x8F7B;&#x677E;&#x5730;&#x521B;&#x5EFA;&#x548C;&#x7BA1;&#x7406;&#x4E00;&#x4E2A;&#x7EBF;&#x7A0B;&#x6C60;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x81EA;&#x5DF1;&#x521B;&#x5EFA;&#x548C;&#x7BA1;&#x7406; threading.Thread &#x5BF9;&#x8C61;&#x3002;</p>
</li>
<li>
<p>ThreadPoolExecutor &#x63D0;&#x4F9B;&#x4E86;&#x4E24;&#x79CD;&#x65B9;&#x6CD5;&#x6765;&#x63D0;&#x4EA4;&#x4EFB;&#x52A1;&#x7ED9;&#x7EBF;&#x7A0B;&#x6C60;&#xFF1A;map &#x548C; submit&#x3002;map &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8BA9;&#x4F60;&#x5BF9;&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x5E94;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7ED3;&#x679C;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x3002;submit &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x8BA9;&#x4F60;&#x63D0;&#x4EA4;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x548C;&#x5B83;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; Future &#x5BF9;&#x8C61;&#xFF0C;&#x7528;&#x4E8E;&#x67E5;&#x8BE2;&#x4EFB;&#x52A1;&#x7684;&#x72B6;&#x6001;&#x548C;&#x7ED3;&#x679C;&#x3002;</p>
</li>
<li>
<p>ThreadPoolExecutor &#x53EF;&#x4EE5;&#x81EA;&#x52A8;&#x5904;&#x7406;&#x7EBF;&#x7A0B;&#x7684;&#x521B;&#x5EFA;&#x3001;&#x542F;&#x52A8;&#x3001;&#x56DE;&#x6536;&#x548C;&#x5F02;&#x5E38;&#x5904;&#x7406;&#xFF0C;&#x800C; threading.Thread &#x9700;&#x8981;&#x4F60;&#x81EA;&#x5DF1;&#x5904;&#x7406;&#x8FD9;&#x4E9B;&#x7EC6;&#x8282;&#x3002;</p>
</li>
<li>
<p>ThreadPoolExecutor &#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;&#x5668;&#xFF08;with &#x8BED;&#x53E5;&#xFF09;&#x6765;&#x7B80;&#x5316;&#x7EBF;&#x7A0B;&#x6C60;&#x7684;&#x521B;&#x5EFA;&#x548C;&#x5173;&#x95ED;&#xFF0C;&#x800C; threading.Thread &#x9700;&#x8981;&#x4F60;&#x624B;&#x52A8;&#x8C03;&#x7528; start &#x548C; join &#x65B9;&#x6CD5;&#x3002;</p>
</li>
</ul>
<p>&#x7EFC;&#x4E0A;&#x6240;&#x8FF0;&#xFF0C;ThreadPoolExecutor &#x6BD4; threading.Thread &#x66F4;&#x65B9;&#x4FBF;&#x3001;&#x66F4;&#x7B80;&#x6D01;&#x3001;&#x66F4;&#x5B89;&#x5168;&#x5730;&#x5B9E;&#x73B0;&#x5E76;&#x53D1;&#x3002;</p>
<p><em><strong>Mainly reference GPT</strong></em></p>
`,n=[{level:2,title:"Python 类型",children:[]},{level:2,title:"基础用法",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
