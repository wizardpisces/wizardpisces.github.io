const x={},F=`<!-- 写作锚点
读者收获：分清网络先验、搜索访问次数和动作价值，理解搜索结果如何参与训练，以及推理时为何仍要搜索。
核心判断：网络指导 MCTS 分配计算，搜索统计形成策略训练目标；训练更新网络参数，推理则用搜索结果选择当前动作。
如何推进：沿同一局面的 A、B、C 三个动作，对照搜索前后的数字，再解释策略与价值训练，最后比较训练和推理。
-->
<h1 id="&#x8BAD;&#x7EC3;&#x65F6;&#x5F53;&#x8001;&#x5E08;&#xFF0C;&#x843D;&#x5B50;&#x524D;&#x5F53;&#x53C2;&#x8C0B;&#xFF1A;AlphaZero &#x4E2D;&#x7684; MCTS &#x5FAA;&#x73AF;"><a href="#&#x8BAD;&#x7EC3;&#x65F6;&#x5F53;&#x8001;&#x5E08;&#xFF0C;&#x843D;&#x5B50;&#x524D;&#x5F53;&#x53C2;&#x8C0B;&#xFF1A;AlphaZero &#x4E2D;&#x7684; MCTS &#x5FAA;&#x73AF;"></a>&#x8BAD;&#x7EC3;&#x65F6;&#x5F53;&#x8001;&#x5E08;&#xFF0C;&#x843D;&#x5B50;&#x524D;&#x5F53;&#x53C2;&#x8C0B;&#xFF1A;AlphaZero &#x4E2D;&#x7684; MCTS &#x5FAA;&#x73AF;</h1>
<h2 id="&#x4E00;&#x3001;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;MCTS &#x600E;&#x6837;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x53D8;&#x5F97;&#x66F4;&#x597D;&#xFF1F;"><a href="#&#x4E00;&#x3001;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;MCTS &#x600E;&#x6837;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x53D8;&#x5F97;&#x66F4;&#x597D;&#xFF1F;"></a>&#x4E00;&#x3001;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF1A;MCTS &#x600E;&#x6837;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x53D8;&#x5F97;&#x66F4;&#x597D;&#xFF1F;</h2>
<p>&#x5047;&#x8BBE;&#x9ED1;&#x68CB;&#x9762;&#x5BF9;&#x4E00;&#x4E2A;&#x5C40;&#x9762;&#xFF0C;&#x6709;&#x4E09;&#x4E2A;&#x5019;&#x9009;&#x52A8;&#x4F5C; A&#x3001;B&#x3001;C&#x3002;</p>
<h3 id="&#x2460; &#x5F53;&#x524D;&#x6A21;&#x578B;&#x5148;&#x505A;&#x51FA;&#x5224;&#x65AD;"><a href="#&#x2460; &#x5F53;&#x524D;&#x6A21;&#x578B;&#x5148;&#x505A;&#x51FA;&#x5224;&#x65AD;"></a>&#x2460; &#x5F53;&#x524D;&#x6A21;&#x578B;&#x5148;&#x505A;&#x51FA;&#x5224;&#x65AD;</h3>
<p>&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x5148;&#x7ED9;&#x51FA;&#x6BCF;&#x4E2A;&#x52A8;&#x4F5C;&#x7684;&#x9009;&#x62E9;&#x6982;&#x7387;&#xFF0C;&#x4E0B;&#x9762;&#x7528; P &#x8868;&#x793A;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x5C40;&#x9762;
    &#x2502;
    &#x25BC;
&#x795E;&#x7ECF;&#x7F51;&#x7EDC;
    &#x2502;
    &#x251C;&#x2500;&#x2500; A&#xFF1A;60%
    &#x251C;&#x2500;&#x2500; B&#xFF1A;30%
    &#x2514;&#x2500;&#x2500; C&#xFF1A;10%
</code></pre>
<p>&#x6B64;&#x65F6;&#xFF0C;&#x6A21;&#x578B;&#x6700;&#x770B;&#x597D; A&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#x9700;&#x8981;&#x5206;&#x6E05;&#xFF1A;</p>
<ul>
<li>A &#x7684;&#x9009;&#x62E9;&#x6982;&#x7387;&#x4E3A; 60%&#xFF1A;&#x6A21;&#x578B;&#x66F4;&#x503E;&#x5411;&#x4E8E;&#x9009;&#x62E9; A&#x3002;</li>
<li>&#x5B83;&#x4E0D;&#x4EE3;&#x8868; A &#x6709; 60% &#x7684;&#x83B7;&#x80DC;&#x6982;&#x7387;&#x3002;</li>
</ul>
<p>&#x6A21;&#x578B;&#x6839;&#x636E;&#x5DF2;&#x7ECF;&#x5B66;&#x5230;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x5BF9;&#x8FD9;&#x4E2A;&#x5C40;&#x9762;&#x4F5C;&#x51FA;&#x9884;&#x6D4B;&#x3002;&#x5B83;&#x53EF;&#x80FD;&#x6CA1;&#x5B66;&#x5230;&#x67D0;&#x4E2A;&#x5173;&#x952E;&#x7684;&#x68CB;&#x578B;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x4F4E;&#x4F30;&#x4E86;&#x67D0;&#x79CD;&#x540E;&#x7EED;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x50CF;&#x4E00;&#x4E2A;&#x7ECF;&#x9A8C;&#x4E30;&#x5BCC;&#x7684;&#x68CB;&#x624B;&#xFF0C;&#x51ED;&#x76F4;&#x89C9;&#x8BA4;&#x4E3A; A &#x6700;&#x597D;&#xFF0C;&#x4F46;&#x8FD8;&#x6CA1;&#x6709;&#x4ED4;&#x7EC6;&#x8BA1;&#x7B97;&#x6BCF;&#x6761;&#x53D8;&#x5316;&#x3002;</p>
<h3 id="&#x2461; MCTS &#x5F00;&#x59CB;&#x641C;&#x7D22;&#xFF1A;&#x52A8;&#x6001;&#x5206;&#x914D;&#x8BA1;&#x7B97;"><a href="#&#x2461; MCTS &#x5F00;&#x59CB;&#x641C;&#x7D22;&#xFF1A;&#x52A8;&#x6001;&#x5206;&#x914D;&#x8BA1;&#x7B97;"></a>&#x2461; MCTS &#x5F00;&#x59CB;&#x641C;&#x7D22;&#xFF1A;&#x52A8;&#x6001;&#x5206;&#x914D;&#x8BA1;&#x7B97;</h3>
<p>&#x5047;&#x8BBE;&#x7ED9; MCTS 100 &#x6B21;&#x6A21;&#x62DF;&#x7684;&#x9884;&#x7B97;&#x3002;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x5C40;&#x9762;
    &#x2502;
&#x7F51;&#x7EDC;&#x5148;&#x9A8C; P
[0.6, 0.3, 0.1]
    &#x2502;
    &#x25BC;
MCTS &#x641C;&#x7D22;
    &#x251C;&#x2500;&#x2500; A &#x2192; &#x540E;&#x7EED;&#x53D8;&#x5316;
    &#x251C;&#x2500;&#x2500; B &#x2192; &#x540E;&#x7EED;&#x53D8;&#x5316;
    &#x2514;&#x2500;&#x2500; C &#x2192; &#x540E;&#x7EED;&#x53D8;&#x5316;
    &#x2502;
    &#x25BC;
&#x66F4;&#x65B0;&#x641C;&#x7D22;&#x7EDF;&#x8BA1;
</code></pre>
<p>MCTS &#x6BCF;&#x6B21;&#x6A21;&#x62DF;&#x5927;&#x81F4;&#x4F1A;&#xFF1A;</p>
<ol>
<li>&#x6839;&#x636E;&#x5148;&#x9A8C;&#x6982;&#x7387;&#x3001;&#x5DF2;&#x6709;&#x52A8;&#x4F5C;&#x4EF7;&#x503C;&#x548C;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#xFF0C;&#x9009;&#x62E9;&#x4E00;&#x6761;&#x503C;&#x5F97;&#x63A2;&#x7D22;&#x7684;&#x8DEF;&#x5F84;&#x3002;</li>
<li>&#x5230;&#x8FBE;&#x65B0;&#x7684;&#x5C40;&#x9762;&#x540E;&#xFF0C;&#x7528;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x8BC4;&#x4F30;&#x8BE5;&#x5C40;&#x9762;&#x3002;</li>
<li>&#x628A;&#x8BC4;&#x4F30;&#x7ED3;&#x679C;&#x6CBF;&#x8DEF;&#x5F84;&#x56DE;&#x4F20;&#xFF0C;&#x66F4;&#x65B0;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x548C;&#x5E73;&#x5747;&#x4EF7;&#x503C;&#x3002;</li>
<li>&#x518D;&#x5F00;&#x59CB;&#x4E0B;&#x4E00;&#x6B21;&#x6A21;&#x62DF;&#x3002;</li>
</ol>
<p>&#x521D;&#x59CB;&#x65F6; A &#x7684;&#x5148;&#x9A8C;&#x6982;&#x7387;&#x6700;&#x9AD8;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x5F88;&#x53EF;&#x80FD;&#x5148;&#x5F97;&#x5230;&#x8F83;&#x591A;&#x5173;&#x6CE8;&#x3002;&#x4F46;&#x968F;&#x7740;&#x641C;&#x7D22;&#x6DF1;&#x5165;&#xFF0C;&#x7CFB;&#x7EDF;&#x53EF;&#x80FD;&#x53D1;&#x73B0;&#xFF1A;</p>
<ul>
<li>A&#xFF1A;&#x5BF9;&#x624B;&#x6709;&#x5F3A;&#x529B;&#x5E94;&#x5BF9;&#xFF0C;&#x540E;&#x7EED;&#x5C40;&#x9762;&#x5BF9;&#x9ED1;&#x68CB;&#x4E0D;&#x5229;&#x3002;</li>
<li>B&#xFF1A;&#x867D;&#x7136;&#x521D;&#x59CB;&#x6982;&#x7387;&#x8F83;&#x4F4E;&#xFF0C;&#x4F46;&#x540E;&#x7EED;&#x53D8;&#x5316;&#x5BF9;&#x9ED1;&#x68CB;&#x66F4;&#x6709;&#x5229;&#x3002;</li>
<li>C&#xFF1A;&#x76EE;&#x524D;&#x6CA1;&#x6709;&#x53D1;&#x73B0;&#x8DB3;&#x591F;&#x597D;&#x7684;&#x53D8;&#x5316;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x65F6;&#xFF0C;MCTS &#x5C31;&#x6709;&#x673A;&#x4F1A;&#x7EA0;&#x6B63;&#x7F51;&#x7EDC;&#x7684;&#x521D;&#x59CB;&#x504F;&#x597D;&#x3002;</p>
<p>&#x5B83;&#x4E00;&#x5F00;&#x59CB;&#x4E5F;&#x4E0D;&#x77E5;&#x9053; B &#x66F4;&#x597D;&#xFF0C;&#x8981;&#x901A;&#x8FC7;&#x53CD;&#x590D;&#x63A2;&#x7D22;&#x548C;&#x8BC4;&#x4F30;&#xFF0C;&#x9010;&#x6E10;&#x79EF;&#x7D2F;&#x652F;&#x6301;&#x6216;&#x53CD;&#x5BF9;&#x4E0D;&#x540C;&#x52A8;&#x4F5C;&#x7684;&#x8BC1;&#x636E;&#x3002;</p>
<h3 id="&#x2462; &#x641C;&#x7D22;&#x7EDF;&#x8BA1;&#x91CF;&#x53D1;&#x751F;&#x53D8;&#x5316;"><a href="#&#x2462; &#x641C;&#x7D22;&#x7EDF;&#x8BA1;&#x91CF;&#x53D1;&#x751F;&#x53D8;&#x5316;"></a>&#x2462; &#x641C;&#x7D22;&#x7EDF;&#x8BA1;&#x91CF;&#x53D1;&#x751F;&#x53D8;&#x5316;</h3>
<p>&#x5047;&#x8BBE;&#x641C;&#x7D22;&#x5B8C;&#x6210; 100 &#x6B21;&#x6A21;&#x62DF;&#xFF0C;&#x5F97;&#x5230;&#x4E0B;&#x9762;&#x8FD9;&#x7EC4;&#x793A;&#x610F;&#x6570;&#x636E;&#xFF1A;</p>
<pre><code class="language-text">A&#xFF1A;&#x5148;&#x9A8C; 60%&#xFF0C;&#x8BBF;&#x95EE; 20 &#x6B21;
   &#x5E73;&#x5747;&#x4EF7;&#x503C; Q = +0.10

B&#xFF1A;&#x5148;&#x9A8C; 30%&#xFF0C;&#x8BBF;&#x95EE; 70 &#x6B21;
   &#x5E73;&#x5747;&#x4EF7;&#x503C; Q = +0.55

C&#xFF1A;&#x5148;&#x9A8C; 10%&#xFF0C;&#x8BBF;&#x95EE; 10 &#x6B21;
   &#x5E73;&#x5747;&#x4EF7;&#x503C; Q = +0.05
</code></pre>
<p>&#x8FD9;&#x91CC;&#x5047;&#x8BBE;&#x5E73;&#x5747;&#x4EF7;&#x503C; Q &#x8D8A;&#x5927;&#xFF0C;&#x4EE3;&#x8868;&#x4ECE;&#x9ED1;&#x68CB;&#x89C6;&#x89D2;&#x770B;&#x5C40;&#x9762;&#x8D8A;&#x6709;&#x5229;&#x3002;&#x6570;&#x5B57;&#x4EC5;&#x7528;&#x4E8E;&#x8BF4;&#x660E;&#x673A;&#x5236;&#x3002;</p>
<p>&#x628A;&#x6BCF;&#x4E2A;&#x52A8;&#x4F5C;&#x7684;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x9664;&#x4EE5;&#x603B;&#x6B21;&#x6570;&#xFF0C;&#x5C31;&#x5F97;&#x5230;&#x641C;&#x7D22;&#x540E;&#x7684;&#x9009;&#x62E9;&#x6BD4;&#x4F8B;&#xFF0C;&#x4E0B;&#x9762;&#x79F0;&#x4E3A;&#x201C;&#x641C;&#x7D22;&#x7B56;&#x7565;&#x201D;&#xFF1A;</p>
<pre><code class="language-text">&#x641C;&#x7D22;&#x7B56;&#x7565; = &#x8BE5;&#x52A8;&#x4F5C;&#x8BBF;&#x95EE;&#x6B21;&#x6570; &#xF7; &#x603B;&#x8BBF;&#x95EE;&#x6B21;&#x6570;

A&#xFF1A;20 &#xF7; 100 = 20%
B&#xFF1A;70 &#xF7; 100 = 70%
C&#xFF1A;10 &#xF7; 100 = 10%
</code></pre>
<p>&#x5BF9;&#x7167;&#x641C;&#x7D22;&#x524D;&#x540E;&#x7684;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">       &#x521D;&#x59CB;&#x9884;&#x6D4B; &#x2192; &#x641C;&#x7D22;&#x7B56;&#x7565;
A&#xFF1A;       60% &#x2192; 20%
B&#xFF1A;       30% &#x2192; 70%
C&#xFF1A;       10% &#x2192; 10%
</code></pre>
<p>&#x7F51;&#x7EDC;&#x7ED9;&#x51FA;&#x641C;&#x7D22;&#x65B9;&#x5411;&#xFF0C;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x5219;&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x52A8;&#x4F5C;&#x7684;&#x76F8;&#x5BF9;&#x4F18;&#x5148;&#x7EA7;&#x3002;</p>
<p>MCTS &#x53EA;&#x80FD;&#x5728;&#x6709;&#x9650;&#x9884;&#x7B97;&#x5185;&#x5C3D;&#x53EF;&#x80FD;&#x627E;&#x5230;&#x66F4;&#x597D;&#x7684;&#x52A8;&#x4F5C;&#xFF0C;&#x4E0D;&#x80FD;&#x4FDD;&#x8BC1;&#x627E;&#x5230;&#x7406;&#x8BBA;&#x4E0A;&#x7684;&#x6700;&#x4F18;&#x89E3;&#x3002;</p>
<h3 id="&#x2463; &#x4E3A;&#x4EC0;&#x4E48;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x80FD;&#x53D8;&#x6210;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1F;"><a href="#&#x2463; &#x4E3A;&#x4EC0;&#x4E48;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x80FD;&#x53D8;&#x6210;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1F;"></a>&#x2463; &#x4E3A;&#x4EC0;&#x4E48;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x80FD;&#x53D8;&#x6210;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1F;</h3>
<p>&#x5982;&#x679C;&#x641C;&#x7D22;&#x5230;&#x8FD9;&#x91CC;&#x5C31;&#x7ED3;&#x675F;&#xFF0C;&#x53EA;&#x80FD;&#x5F97;&#x5230;&#x4E00;&#x6B21;&#x66F4;&#x597D;&#x7684;&#x51B3;&#x7B56;&#x3002;AlphaZero &#x8FD8;&#x4F1A;&#x628A;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x4FDD;&#x5B58;&#x4E0B;&#x6765;&#xFF0C;&#x4F5C;&#x4E3A;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E0B;&#x4E00;&#x8F6E;&#x8BAD;&#x7EC3;&#x7684;&#x76EE;&#x6807;&#x3002;</p>
<p>&#x6CBF;&#x7528;&#x521A;&#x624D;&#x7684;&#x6570;&#x5B57;&#xFF1A;</p>
<pre><code class="language-text">&#x7F51;&#x7EDC;&#x9884;&#x6D4B;&#xFF1A;A 60%&#xFF0C;B 30%&#xFF0C;C 10%
&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1A;A 20%&#xFF0C;B 70%&#xFF0C;C 10%
</code></pre>
<p>&#x7F51;&#x7EDC;&#x539F;&#x672C;&#x8BA4;&#x4E3A; A &#x6700;&#x597D;&#xFF0C;&#x641C;&#x7D22;&#x5374;&#x66F4;&#x652F;&#x6301; B&#x3002;</p>
<p>&#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x7528;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x8861;&#x91CF;&#x8FD9;&#x4E24;&#x7EC4;&#x6982;&#x7387;&#x7684;&#x5DEE;&#x8DDD;&#x3002;&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x8BA1;&#x7B97;&#x53EF;&#x4EE5;&#x5199;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x635F;&#x5931; = -(
  0.2 &#xD7; log(&#x7F51;&#x7EDC;&#x7ED9; A &#x7684;&#x6982;&#x7387;)
  + 0.7 &#xD7; log(&#x7F51;&#x7EDC;&#x7ED9; B &#x7684;&#x6982;&#x7387;)
  + 0.1 &#xD7; log(&#x7F51;&#x7EDC;&#x7ED9; C &#x7684;&#x6982;&#x7387;)
)
</code></pre>
<p>&#x53EA;&#x9700;&#x770B;&#x6E05;&#xFF1A;20%&#x3001;70%&#x3001;10% &#x6765;&#x81EA;&#x641C;&#x7D22;&#xFF0C;&#x7F51;&#x7EDC;&#x81EA;&#x5DF1;&#x7684;&#x8F93;&#x51FA;&#x53C2;&#x4E0E;&#x8BA1;&#x7B97;&#x3002;&#x8BAD;&#x7EC3;&#x7B97;&#x6CD5;&#x901A;&#x8FC7;&#x964D;&#x4F4E;&#x635F;&#x5931;&#xFF0C;&#x63A8;&#x52A8;&#x7F51;&#x7EDC;&#x8F93;&#x51FA;&#x9760;&#x8FD1;&#x641C;&#x7D22;&#x7B56;&#x7565;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x7ECF;&#x8FC7;&#x591A;&#x8F6E;&#x8BAD;&#x7EC3;&#xFF0C;&#x7F51;&#x7EDC;&#x5728;&#x7C7B;&#x4F3C;&#x5C40;&#x9762;&#x4E2D;&#x7684;&#x8F93;&#x51FA;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">A&#xFF1A;60% &#x2192; 25%
B&#xFF1A;30% &#x2192; 65%
C&#xFF1A;10% &#x2192; 10%
</code></pre>
<p>&#x8BAD;&#x7EC3;&#x7B97;&#x6CD5;&#x6839;&#x636E;&#x635F;&#x5931;&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#x3001;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#x540E;&#xFF0C;&#x7F51;&#x7EDC;&#x53EF;&#x80FD;&#x9010;&#x6E10;&#x4EA7;&#x751F;&#x8FD9;&#x6837;&#x7684;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x8FD9;&#x76D8;&#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x6700;&#x7EC8;&#x9ED1;&#x68CB;&#x83B7;&#x80DC;&#xFF0C;&#x5C31;&#x628A;&#x4ECE;&#x9ED1;&#x68CB;&#x89C6;&#x89D2;&#x8BB0;&#x5F55;&#x7684;&#x5BF9;&#x5C40;&#x7ED3;&#x679C;&#x8BB0;&#x4E3A; +1&#x3002;&#x4EF7;&#x503C;&#x7F51;&#x7EDC;&#x4F1A;&#x7528;&#x8FD9;&#x4E2A;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1A;</p>
<pre><code class="language-text">&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#xFF1A;&#x9ED1;&#x68CB;&#x83B7;&#x80DC;&#xFF0C;&#x8BB0;&#x4E3A; +1
&#x4EF7;&#x503C;&#x9884;&#x6D4B;&#x7684;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1A;&#x9760;&#x8FD1; +1
</code></pre>
<p>&#x6240;&#x4EE5; AlphaZero &#x540C;&#x65F6;&#x5B66;&#x4E60;&#x4E24;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<ul>
<li>&#x7B56;&#x7565;&#x7F51;&#x7EDC;&#x5B66;&#x4E60;&#xFF1A;&#x54EA;&#x4E9B;&#x52A8;&#x4F5C;&#x503C;&#x5F97;&#x4F18;&#x5148;&#x8003;&#x8651;&#x3002;</li>
<li>&#x4EF7;&#x503C;&#x7F51;&#x7EDC;&#x5B66;&#x4E60;&#xFF1A;&#x67D0;&#x4E2A;&#x5C40;&#x9762;&#x6700;&#x7EC8;&#x6709;&#x591A;&#x5927;&#x53EF;&#x80FD;&#x5E26;&#x6765;&#x6709;&#x5229;&#x7ED3;&#x679C;&#x3002;</li>
</ul>
<p>&#x4E00;&#x76D8;&#x68CB;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x7EC8;&#x5C40;&#x7ED3;&#x679C;&#x4F1A;&#x7528;&#x4E8E;&#x8BAD;&#x7EC3;&#x591A;&#x4E2A;&#x8BB0;&#x5F55;&#x5C40;&#x9762;&#x7684;&#x4EF7;&#x503C;&#x9884;&#x6D4B;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x7528;&#x4E8E;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5C40;&#x9762;&#x3002;</p>
<h3 id="&#x2464; &#x4E3A;&#x4EC0;&#x4E48;&#x4E0B;&#x4E00;&#x8F6E;&#x8BAD;&#x7EC3;&#x53EF;&#x80FD;&#x66F4;&#x6709;&#x6548;&#xFF1F;"><a href="#&#x2464; &#x4E3A;&#x4EC0;&#x4E48;&#x4E0B;&#x4E00;&#x8F6E;&#x8BAD;&#x7EC3;&#x53EF;&#x80FD;&#x66F4;&#x6709;&#x6548;&#xFF1F;"></a>&#x2464; &#x4E3A;&#x4EC0;&#x4E48;&#x4E0B;&#x4E00;&#x8F6E;&#x8BAD;&#x7EC3;&#x53EF;&#x80FD;&#x66F4;&#x6709;&#x6548;&#xFF1F;</h3>
<p>&#x73B0;&#x5728;&#x6A21;&#x578B;&#x66F4;&#x65B0;&#x5B8C;&#x53C2;&#x6570;&#xFF0C;&#x518D;&#x6B21;&#x9047;&#x5230;&#x7C7B;&#x4F3C;&#x5C40;&#x9762;&#x3002;</p>
<pre><code class="language-text">&#x7B2C; 1 &#x8F6E;

&#x65E7;&#x7F51;&#x7EDC;&#xFF1A;A = 60%
      &#x2193;
MCTS &#x641C;&#x7D22;&#xFF1A;B &#x83B7;&#x5F97;&#x66F4;&#x591A;&#x8BBF;&#x95EE;
      &#x2193;
&#x641C;&#x7D22;&#x7B56;&#x7565;&#xFF1A;B = 70%
      &#x2193;
&#x7F51;&#x7EDC;&#x53C2;&#x6570;&#x66F4;&#x65B0;
      &#x2193;
&#x7B2C; 2 &#x8F6E;

&#x65B0;&#x7F51;&#x7EDC;&#xFF1A;B &#x7684;&#x5148;&#x9A8C;&#x6982;&#x7387;&#x63D0;&#x9AD8;
      &#x2193;
MCTS &#x4ECE;&#x66F4;&#x597D;&#x7684;&#x5148;&#x9A8C;&#x5F00;&#x59CB;&#x641C;&#x7D22;
      &#x2193;
&#x7EE7;&#x7EED;&#x751F;&#x6210;&#x65B0;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;
      &#x21BA;
</code></pre>
<p>&#x4E0B;&#x4E00;&#x8F6E;&#x641C;&#x7D22;&#x7684;&#x7ED3;&#x679C;&#x53C8;&#x4F1A;&#x7528;&#x4E8E;&#x8BAD;&#x7EC3;&#xFF0C;&#x5FAA;&#x73AF;&#x7EE7;&#x7EED;&#x3002;</p>
<p>&#x6BCF;&#x6B21;&#x641C;&#x7D22;&#x90FD;&#x53EF;&#x80FD;&#x6709;&#x8BEF;&#x5DEE;&#xFF0C;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E5F;&#x53EF;&#x80FD;&#x5305;&#x542B;&#x4E0D;&#x591F;&#x51C6;&#x786E;&#x7684;&#x5224;&#x65AD;&#xFF0C;&#x4E0D;&#x80FD;&#x671F;&#x5F85;&#x641C;&#x7D22;&#x4E00;&#x6B21;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x53D8;&#x806A;&#x660E;&#x4E00;&#x6B21;&#x3002;AlphaZero &#x4F9D;&#x9760;&#x5927;&#x91CF;&#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x3001;&#x641C;&#x7D22;&#x548C;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x7684;&#x53CD;&#x590D;&#x8FED;&#x4EE3;&#xFF0C;&#x9010;&#x6E10;&#x6539;&#x5584;&#x7B56;&#x7565;&#x548C;&#x4EF7;&#x503C;&#x4F30;&#x8BA1;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4ECD;&#x7136;&#x9700;&#x8981; MCTS&#xFF1F;"><a href="#&#x4E8C;&#x3001;&#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4ECD;&#x7136;&#x9700;&#x8981; MCTS&#xFF1F;"></a>&#x4E8C;&#x3001;&#x63A8;&#x7406;&#x9636;&#x6BB5;&#xFF1A;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6A21;&#x578B;&#x4E3A;&#x4EC0;&#x4E48;&#x4ECD;&#x7136;&#x9700;&#x8981; MCTS&#xFF1F;</h2>
<p>&#x8BAD;&#x7EC3;&#x5B8C;&#x6210;&#x540E;&#xFF0C;&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x7528;&#x6A21;&#x578B;&#x6765;&#x4E0B;&#x4E00;&#x76D8;&#x65B0;&#x68CB;&#x3002;</p>
<h3 id="&#x2460; &#x7F51;&#x7EDC;&#x7ED9;&#x51FA;&#x521D;&#x59CB;&#x9884;&#x6D4B;"><a href="#&#x2460; &#x7F51;&#x7EDC;&#x7ED9;&#x51FA;&#x521D;&#x59CB;&#x9884;&#x6D4B;"></a>&#x2460; &#x7F51;&#x7EDC;&#x7ED9;&#x51FA;&#x521D;&#x59CB;&#x9884;&#x6D4B;</h3>
<pre><code class="language-text">A&#xFF1A;20%
B&#xFF1A;65%
C&#xFF1A;15%
</code></pre>
<p>&#x6B64;&#x65F6;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x66F4;&#x770B;&#x597D; B&#x3002;</p>
<p>&#x4F46;&#x5B83;&#x4ECD;&#x7136;&#x53EF;&#x80FD;&#x5224;&#x65AD;&#x5931;&#x8BEF;&#xFF0C;&#x6240;&#x4EE5; AlphaZero &#x4E0D;&#x4F1A;&#x4EC5;&#x51ED;&#x8FD9;&#x4E00;&#x6B21;&#x524D;&#x5411;&#x8BA1;&#x7B97;&#x5C31;&#x7ED3;&#x675F;&#x51B3;&#x7B56;&#x3002;</p>
<h3 id="&#x2461; MCTS &#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FDB;&#x884C;&#x641C;&#x7D22;"><a href="#&#x2461; MCTS &#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FDB;&#x884C;&#x641C;&#x7D22;"></a>&#x2461; MCTS &#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FDB;&#x884C;&#x641C;&#x7D22;</h3>
<p>&#x5047;&#x8BBE;&#x8FD9;&#x6B21;&#x5206;&#x914D; 1,000 &#x6B21;&#x6A21;&#x62DF;&#xFF1A;</p>
<pre><code class="language-text">&#x65B0;&#x5C40;&#x9762;
    &#x2502;
    &#x25BC;
&#x7F51;&#x7EDC;&#x9884;&#x6D4B; P = [0.20, 0.65, 0.15]
    &#x2502;
    &#x25BC;
MCTS &#x641C;&#x7D22; 1,000 &#x6B21;
    &#x2502;
    &#x251C;&#x2500;&#x2500; &#x63A2;&#x7D22; A &#x7684;&#x540E;&#x7EED;&#x53D8;&#x5316;
    &#x251C;&#x2500;&#x2500; &#x6DF1;&#x5165;&#x63A2;&#x7D22; B &#x7684;&#x540E;&#x7EED;&#x53D8;&#x5316;
    &#x2514;&#x2500;&#x2500; &#x4FDD;&#x7559;&#x5BF9; C &#x7684;&#x63A2;&#x7D22;
    &#x2502;
    &#x25BC;
&#x66F4;&#x65B0;&#x6839;&#x8282;&#x70B9;&#x7EDF;&#x8BA1;&#x91CF;
</code></pre>
<p>&#x5047;&#x8BBE;&#x6700;&#x540E;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">A&#xFF1A;&#x8BBF;&#x95EE; 120 &#x6B21; &#xF7; 1,000 = 12%
B&#xFF1A;&#x8BBF;&#x95EE; 780 &#x6B21; &#xF7; 1,000 = 78%
C&#xFF1A;&#x8BBF;&#x95EE; 100 &#x6B21; &#xF7; 1,000 = 10%
</code></pre>
<p>&#x641C;&#x7D22;&#x540E; B &#x7684;&#x8BBF;&#x95EE;&#x5360;&#x6BD4;&#x4E3A; 78%&#xFF0C;&#x9AD8;&#x4E8E;&#x521D;&#x59CB;&#x5148;&#x9A8C;&#x7684; 65%&#x3002;</p>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x641C;&#x7D22;&#x8FDB;&#x4E00;&#x6B65;&#x652F;&#x6301; B&#xFF0C;&#x56E0;&#x6B64;&#x7CFB;&#x7EDF;&#x9009;&#x62E9; B &#x843D;&#x5B50;&#x3002;</p>
<p>&#x4F46;&#x5982;&#x679C;&#x641C;&#x7D22;&#x53D1;&#x73B0; B &#x6709;&#x4E00;&#x4E2A;&#x7F51;&#x7EDC;&#x6700;&#x521D;&#x6CA1;&#x6709;&#x8BC6;&#x522B;&#x5230;&#x7684;&#x5F31;&#x70B9;&#xFF0C;&#x7ED3;&#x679C;&#x4E5F;&#x53EF;&#x80FD;&#x53CD;&#x8FC7;&#x6765;&#x652F;&#x6301; A &#x6216; C&#x3002;&#x63A8;&#x7406;&#x9636;&#x6BB5;&#x7684; MCTS &#x4F1A;&#x8FDB;&#x4E00;&#x6B65;&#x68C0;&#x9A8C;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x7684;&#x5019;&#x9009;&#x52A8;&#x4F5C;&#x3002;</p>
<h3 id="&#x2462; &#x63A8;&#x7406;&#x4E0E;&#x8BAD;&#x7EC3;&#x7684;&#x533A;&#x522B;"><a href="#&#x2462; &#x63A8;&#x7406;&#x4E0E;&#x8BAD;&#x7EC3;&#x7684;&#x533A;&#x522B;"></a>&#x2462; &#x63A8;&#x7406;&#x4E0E;&#x8BAD;&#x7EC3;&#x7684;&#x533A;&#x522B;</h3>
<p>&#x4E24;&#x4E2A;&#x9636;&#x6BB5;&#x91CC;&#xFF0C;&#x7F51;&#x7EDC;&#x90FD;&#x4F1A;&#x9884;&#x6D4B;&#x52A8;&#x4F5C;&#x6982;&#x7387;&#x548C;&#x5C40;&#x9762;&#x4EF7;&#x503C;&#xFF0C;MCTS &#x4E5F;&#x90FD;&#x4F1A;&#x641C;&#x7D22;&#x5E76;&#x8BB0;&#x5F55;&#x8BBF;&#x95EE;&#x6B21;&#x6570;&#x3002;&#x5DEE;&#x522B;&#x5728;&#x4E8E;&#x641C;&#x7D22;&#x4E4B;&#x540E;&#x505A;&#x4EC0;&#x4E48;&#xFF1A;</p>
<pre><code class="language-text">&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;
&#x641C;&#x7D22;&#x7B56;&#x7565; &#x2192; &#x7528;&#x4F5C;&#x7B56;&#x7565;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;
&#x5BF9;&#x5C40;&#x7ED3;&#x679C; &#x2192; &#x7528;&#x4F5C;&#x4EF7;&#x503C;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;
&#x968F;&#x540E;&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x66F4;&#x65B0;&#x7F51;&#x7EDC;&#x6743;&#x91CD;

&#x63A8;&#x7406;&#x9636;&#x6BB5;
&#x641C;&#x7D22;&#x7EDF;&#x8BA1; &#x2192; &#x7528;&#x4E8E;&#x9009;&#x62E9;&#x5F53;&#x524D;&#x843D;&#x5B50;
&#x7F51;&#x7EDC;&#x6743;&#x91CD;&#x4FDD;&#x6301;&#x4E0D;&#x53D8;
</code></pre>
<p>&#x63A8;&#x7406;&#x9636;&#x6BB5;&#x5229;&#x7528;&#x5DF2;&#x6709;&#x7684;&#x7F51;&#x7EDC;&#x53C2;&#x6570;&#x6307;&#x5BFC;&#x641C;&#x7D22;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x641C;&#x7D22;&#x7EDF;&#x8BA1;&#x91CF;&#x9009;&#x62E9;&#x52A8;&#x4F5C;&#xFF0C;&#x4E0D;&#x4F1A;&#x56E0;&#x4E3A;&#x8FD9;&#x6B21;&#x641C;&#x7D22;&#x5C31;&#x66F4;&#x65B0;&#x7F51;&#x7EDC;&#x6743;&#x91CD;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x6700;&#x540E;&#x6293;&#x4F4F;&#x4E09;&#x4E2A;&#x5173;&#x952E;&#x70B9;"><a href="#&#x4E09;&#x3001;&#x6700;&#x540E;&#x6293;&#x4F4F;&#x4E09;&#x4E2A;&#x5173;&#x952E;&#x70B9;"></a>&#x4E09;&#x3001;&#x6700;&#x540E;&#x6293;&#x4F4F;&#x4E09;&#x4E2A;&#x5173;&#x952E;&#x70B9;</h2>
<p>&#x7B2C;&#x4E00;&#xFF0C;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x548C; MCTS &#x5206;&#x62C5;&#x4E0D;&#x540C;&#x7684;&#x5DE5;&#x4F5C;&#x3002;</p>
<pre><code class="language-text">&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF1A;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;
MCTS&#xFF1A;&#x6709;&#x9009;&#x62E9;&#x5730;&#x6DF1;&#x5165;&#x8BA1;&#x7B97;
</code></pre>
<p>&#x7F51;&#x7EDC;&#x4E0D;&#x5FC5;&#x4ECE;&#x96F6;&#x8BA1;&#x7B97;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x53D8;&#x5316;&#xFF1B;MCTS &#x4E0D;&#x4F1A;&#x5B8C;&#x5168;&#x76F8;&#x4FE1;&#x7F51;&#x7EDC;&#x7684;&#x4E00;&#x6B21;&#x9884;&#x6D4B;&#x3002;</p>
<p>&#x7B2C;&#x4E8C;&#xFF0C;MCTS &#x5728;&#x8BAD;&#x7EC3;&#x548C;&#x63A8;&#x7406;&#x4E2D;&#x90FD;&#x5B58;&#x5728;&#xFF0C;&#x4F46;&#x7528;&#x9014;&#x4E0D;&#x540C;&#x3002;</p>
<pre><code class="language-text">&#x8BAD;&#x7EC3;&#xFF1A;&#x7F51;&#x7EDC;&#x9884;&#x6D4B; &#x2192; &#x641C;&#x7D22; &#x2192; &#x8BAD;&#x7EC3;&#x76EE;&#x6807;
      &#x2192; &#x66F4;&#x65B0;&#x53C2;&#x6570;

&#x63A8;&#x7406;&#xFF1A;&#x7F51;&#x7EDC;&#x9884;&#x6D4B; &#x2192; &#x641C;&#x7D22; &#x2192; &#x9009;&#x62E9;&#x843D;&#x5B50;
</code></pre>
<p>&#x7B2C;&#x4E09;&#xFF0C;AlphaZero &#x8BA9;&#x641C;&#x7D22;&#x548C;&#x6A21;&#x578B;&#x76F8;&#x4E92;&#x4FC3;&#x8FDB;&#x3002;</p>
<p>&#x641C;&#x7D22;&#x4EA7;&#x751F;&#x66F4;&#x597D;&#x7684;&#x51B3;&#x7B56;&#x4F9D;&#x636E;&#xFF0C;&#x641C;&#x7D22;&#x7B56;&#x7565;&#x548C;&#x5BF9;&#x5C40;&#x7ED3;&#x679C;&#x53C2;&#x4E0E;&#x8BAD;&#x7EC3;&#xFF0C;&#x8BAD;&#x7EC3;&#x540E;&#x7684;&#x7F51;&#x7EDC;&#x518D;&#x6307;&#x5BFC;&#x4E0B;&#x4E00;&#x8F6E;&#x641C;&#x7D22;&#xFF0C;&#x8BA9;&#x6709;&#x9650;&#x8BA1;&#x7B97;&#x9884;&#x7B97;&#x66F4;&#x6709;&#x6548;&#x5730;&#x7528;&#x4E8E;&#x590D;&#x6742;&#x51B3;&#x7B56;&#x3002;</p>
<p>MCTS &#x8BA9;&#x6A21;&#x578B;&#x6709;&#x673A;&#x4F1A;&#x53D1;&#x73B0;&#x81EA;&#x5DF1;&#x521D;&#x59CB;&#x5224;&#x65AD;&#x4E2D;&#x7684;&#x9519;&#x8BEF;&#xFF1B;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x5219;&#x628A;&#x8FC7;&#x53BB;&#x641C;&#x7D22;&#x4E2D;&#x5B66;&#x5230;&#x7684;&#x7ECF;&#x9A8C;&#x5E26;&#x5230;&#x672A;&#x6765;&#x7684;&#x641C;&#x7D22;&#x4E2D;&#x3002;</p>
<p>&#x4E00;&#x4E2A;&#x6709;&#x610F;&#x601D;&#x7684;&#x70B9;&#xFF1A;&#x5982;&#x679C;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#x5DF2;&#x7ECF;&#x901A;&#x8FC7; MCTS &#x6559;&#x4F1A;&#x4E86;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x600E;&#x4E48;&#x4E0B;&#x68CB;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x63A8;&#x7406;&#x9636;&#x6BB5;&#x8FD8;&#x8981;&#x518D;&#x7528; MCTS&#xFF1F;&#x662F;&#x4E0D;&#x662F;&#x8BF4;&#x660E;&#x7F51;&#x7EDC;&#x59CB;&#x7EC8;&#x6CA1;&#x6709;&#x5B66;&#x4F1A;&#x771F;&#x6B63;&#x6B63;&#x786E;&#x7684;&#x843D;&#x5B50;&#xFF1F;</p>
`,E=[{level:1,title:"训练时当老师，落子前当参谋：AlphaZero 中的 MCTS 循环",children:[{level:2,title:"一、训练阶段：MCTS 怎样帮助模型变得更好？",children:[{level:3,title:"① 当前模型先做出判断",children:[]},{level:3,title:"② MCTS 开始搜索：动态分配计算",children:[]},{level:3,title:"③ 搜索统计量发生变化",children:[]},{level:3,title:"④ 为什么访问次数能变成训练目标？",children:[]},{level:3,title:"⑤ 为什么下一轮训练可能更有效？",children:[]}]},{level:2,title:"二、推理阶段：训练好的模型为什么仍然需要 MCTS？",children:[{level:3,title:"① 网络给出初始预测",children:[]},{level:3,title:"② MCTS 对当前局面进行搜索",children:[]},{level:3,title:"③ 推理与训练的区别",children:[]}]},{level:2,title:"三、最后抓住三个关键点",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
