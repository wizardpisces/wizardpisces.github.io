const x={},F=`<!-- 写作锚点
读者收获：理解搜索结果参与训练后，为何不能替代当前局面的搜索，分清模型预测、在线搜索和完整求解。
核心判断：训练把搜索经验变成可泛化的近似预测，推理时搜索则为当前问题追加计算；两者在有限资源下都不能保证最优。
如何推进：从 AlphaZero 学会下棋却仍需搜索的疑问进入，用训练循环解释近似预测，再比较在线搜索与完整求解。
-->
<h1 id="AlphaZero &#x5DF2;&#x7ECF;&#x5B66;&#x4F1A;&#x4E0B;&#x68CB;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x843D;&#x5B50;&#x524D;&#x8FD8;&#x8981;&#x518D;&#x7B97;&#x4E00;&#x904D;&#xFF1F;"><a href="#AlphaZero &#x5DF2;&#x7ECF;&#x5B66;&#x4F1A;&#x4E0B;&#x68CB;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x843D;&#x5B50;&#x524D;&#x8FD8;&#x8981;&#x518D;&#x7B97;&#x4E00;&#x904D;&#xFF1F;"></a>AlphaZero &#x5DF2;&#x7ECF;&#x5B66;&#x4F1A;&#x4E0B;&#x68CB;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x843D;&#x5B50;&#x524D;&#x8FD8;&#x8981;&#x518D;&#x7B97;&#x4E00;&#x904D;&#xFF1F;</h1>
<p>AlphaZero &#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x4F1A;&#x8BA9;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x6307;&#x5BFC; MCTS&#xFF08;&#x8499;&#x7279;&#x5361;&#x6D1B;&#x6811;&#x641C;&#x7D22;&#xFF09;&#xFF0C;&#x518D;&#x628A;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#x3002;&#x8FD9;&#x5C31;&#x662F;<a href="./%E8%AE%AD%E7%BB%83%E6%97%B6%E5%BD%93%E8%80%81%E5%B8%88%EF%BC%8C%E8%90%BD%E5%AD%90%E5%89%8D%E5%BD%93%E5%8F%82%E8%B0%8B%EF%BC%9AAlphaZero%20%E4%B8%AD%E7%9A%84%20MCTS%20%E5%BE%AA%E7%8E%AF.md">&#x4E0A;&#x4E00;&#x7BC7;</a>&#x4ECB;&#x7ECD;&#x7684;&#x5B66;&#x4E60;&#x5FAA;&#x73AF;&#x3002;</p>
<p>&#x65E2;&#x7136; MCTS &#x5DF2;&#x7ECF;&#x6559;&#x8FC7;&#x6A21;&#x578B;&#x600E;&#x6837;&#x4E0B;&#x68CB;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x771F;&#x6B63;&#x843D;&#x5B50;&#x65F6;&#xFF0C;&#x8FD8;&#x8981;&#x518D;&#x641C;&#x4E00;&#x904D;&#xFF1F;</p>
<p>&#x662F;&#x4E0D;&#x662F;&#x8BF4;&#x660E;&#x6A21;&#x578B;&#x59CB;&#x7EC8;&#x6CA1;&#x6709;&#x5B66;&#x4F1A;&#x6B63;&#x786E;&#x7684;&#x843D;&#x5B50;&#xFF1F;</p>
<p>&#x6A21;&#x578B;&#x786E;&#x5B9E;&#x6709;&#x5224;&#x65AD;&#x843D;&#x5B50;&#x5931;&#x8D25;&#x7684;&#x53EF;&#x80FD;&#x6027;&#x3002;</p>
<p>&#x4F46;&#x641C;&#x7D22;&#x7559;&#x4E0B;&#x6765;&#xFF0C;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x539F;&#x56E0;&#xFF1A;&#x7F51;&#x7EDC;&#x7684;&#x4E00;&#x6B21;&#x5FEB;&#x901F;&#x9884;&#x6D4B;&#xFF0C;&#x4E0E;&#x9488;&#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x6DF1;&#x5165;&#x8BA1;&#x7B97;&#xFF0C;&#x627F;&#x62C5;&#x7684;&#x662F;&#x4E0D;&#x540C;&#x5DE5;&#x4F5C;&#x3002;</p>
<h2 id="1. &#x8BAD;&#x7EC3;&#x6559;&#x4F1A;&#x6A21;&#x578B;&#x7684;&#x662F;&#x201C;&#x641C;&#x7D22;&#x7ECF;&#x9A8C;&#x201D;&#xFF0C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x5C40;&#x9762;&#x7684;&#x6807;&#x51C6;&#x7B54;&#x6848;"><a href="#1. &#x8BAD;&#x7EC3;&#x6559;&#x4F1A;&#x6A21;&#x578B;&#x7684;&#x662F;&#x201C;&#x641C;&#x7D22;&#x7ECF;&#x9A8C;&#x201D;&#xFF0C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x5C40;&#x9762;&#x7684;&#x6807;&#x51C6;&#x7B54;&#x6848;"></a>1. &#x8BAD;&#x7EC3;&#x6559;&#x4F1A;&#x6A21;&#x578B;&#x7684;&#x662F;&#x201C;&#x641C;&#x7D22;&#x7ECF;&#x9A8C;&#x201D;&#xFF0C;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x5C40;&#x9762;&#x7684;&#x6807;&#x51C6;&#x7B54;&#x6848;</h2>
<p>&#x5047;&#x8BBE;&#x67D0;&#x4E2A;&#x5C40;&#x9762;&#x6709;&#x4E09;&#x4E2A;&#x5019;&#x9009;&#x52A8;&#x4F5C; A&#x3001;B&#x3001;C&#x3002;</p>
<p>&#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x7F51;&#x7EDC;&#x5148;&#x770B;&#x597D; A&#xFF0C;MCTS &#x641C;&#x7D22;&#x540E;&#x5374;&#x66F4;&#x652F;&#x6301; B&#xFF1A;</p>
<pre><code class="language-text">&#x65E7;&#x7F51;&#x7EDC;&#x7684;&#x9009;&#x62E9;&#x6982;&#x7387;
A&#xFF1A;60%
B&#xFF1A;30%
C&#xFF1A;10%

MCTS &#x641C;&#x7D22;&#x540E;&#x7684;&#x8BBF;&#x95EE;&#x5360;&#x6BD4;
A&#xFF1A;20%
B&#xFF1A;70%
C&#xFF1A;10%
</code></pre>
<p>&#x8BAD;&#x7EC3;&#x4F1A;&#x63A8;&#x52A8;&#x7F51;&#x7EDC;&#x8F93;&#x51FA;&#x9760;&#x8FD1;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">&#x65B0;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;
A&#xFF1A;20%
B&#xFF1A;70%
C&#xFF1A;10%
</code></pre>
<p>&#x4F46;&#x7F51;&#x7EDC;&#x53EA;&#x662F;&#x5728;&#x5B66;&#x4E60;&#x62DF;&#x5408;&#x8FD9;&#x4E2A;&#x76EE;&#x6807;&#xFF0C;&#x5E76;&#x6CA1;&#x6709;&#x628A;&#x6574;&#x68F5;&#x641C;&#x7D22;&#x6811;&#x5B58;&#x8FDB;&#x53C2;&#x6570;&#x3002;</p>
<p>&#x800C;&#x4E14;&#xFF0C;AlphaZero &#x8BAD;&#x7EC3;&#x65F6;&#x63A5;&#x89E6;&#x5230;&#x7684;&#x662F;&#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x4E2D;&#x8BBF;&#x95EE;&#x8FC7;&#x7684;&#x5C40;&#x9762;&#xFF0C;&#x8FDC;&#x8FDC;&#x6CA1;&#x6709;&#x8986;&#x76D6;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7684;&#x68CB;&#x76D8;&#x3002;</p>
<pre><code class="language-text">&#x5927;&#x91CF;&#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x5C40;&#x9762;
       &#x2193;
MCTS &#x641C;&#x7D22;&#xFF0C;&#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;
       &#x2193;
&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x62DF;&#x5408;&#x8FD9;&#x4E9B;&#x76EE;&#x6807;
       &#x2193;
&#x5B66;&#x5230;&#x53EF;&#x6CDB;&#x5316;&#x7684;&#x7B56;&#x7565;&#x4E0E;&#x4EF7;&#x503C;&#x4F30;&#x8BA1;
       &#x2193;
&#x9047;&#x5230;&#x65B0;&#x5C40;&#x9762;&#x65F6;&#x4ECD;&#x53EF;&#x80FD;&#x5224;&#x65AD;&#x4E0D;&#x51C6;
</code></pre>
<p>&#x6A21;&#x578B;&#x5B66;&#x5230;&#x7684;&#x662F;&#xFF1A;&#x770B;&#x5230;&#x4E00;&#x4E2A;&#x68CB;&#x76D8;&#xFF0C;&#x600E;&#x6837;&#x4F30;&#x8BA1;&#x52A8;&#x4F5C;&#x6982;&#x7387;&#x548C;&#x5C40;&#x9762;&#x4EF7;&#x503C;&#x3002;&#x5B83;&#x6CA1;&#x6709;&#x5F97;&#x5230;&#x4E00;&#x4EFD;&#x6DB5;&#x76D6;&#x6240;&#x6709;&#x68CB;&#x76D8;&#x7684;&#x5B8C;&#x7F8E;&#x843D;&#x5B50;&#x7B54;&#x6848;&#x8868;&#x3002;</p>
<p>&#x8FD9;&#x4E0D;&#x4EE3;&#x8868;&#x8BAD;&#x7EC3;&#x5931;&#x8D25;&#x3002;&#x6709;&#x9650;&#x7684;&#x6570;&#x636E;&#x548C;&#x8BAD;&#x7EC3;&#xFF0C;&#x65E0;&#x6CD5;&#x4FDD;&#x8BC1;&#x7F51;&#x7EDC;&#x5BF9;&#x6240;&#x6709;&#x65B0;&#x5C40;&#x9762;&#x90FD;&#x5224;&#x65AD;&#x6B63;&#x786E;&#x3002;</p>
<h2 id="2. &#x7F51;&#x7EDC;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;&#xFF0C;MCTS &#x4E3A;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FFD;&#x52A0;&#x8BA1;&#x7B97;"><a href="#2. &#x7F51;&#x7EDC;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;&#xFF0C;MCTS &#x4E3A;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FFD;&#x52A0;&#x8BA1;&#x7B97;"></a>2. &#x7F51;&#x7EDC;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;&#xFF0C;MCTS &#x4E3A;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x8FFD;&#x52A0;&#x8BA1;&#x7B97;</h2>
<p>&#x4E24;&#x8005;&#x7684;&#x5DE5;&#x4F5C;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x533A;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">&#x795E;&#x7ECF;&#x7F51;&#x7EDC;
&#x628A;&#x8BAD;&#x7EC3;&#x7ECF;&#x9A8C;&#x538B;&#x7F29;&#x8FDB;&#x53C2;&#x6570;
&#x4E00;&#x6B21;&#x524D;&#x5411;&#x8BA1;&#x7B97;&#xFF0C;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;&#x52A8;&#x4F5C;&#x548C;&#x4EF7;&#x503C;
&#x53EF;&#x80FD;&#x5FFD;&#x7565;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x7684;&#x67D0;&#x4E2A;&#x6218;&#x672F;&#x7EC6;&#x8282;

MCTS
&#x9488;&#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x91CD;&#x65B0;&#x641C;&#x7D22;
&#x82B1;&#x989D;&#x5916;&#x8BA1;&#x7B97;&#xFF0C;&#x6BD4;&#x8F83;&#x5019;&#x9009;&#x52A8;&#x4F5C;&#x7684;&#x540E;&#x7EED;&#x53D8;&#x5316;
&#x6709;&#x673A;&#x4F1A;&#x53D1;&#x73B0;&#x7F51;&#x7EDC;&#x9057;&#x6F0F;&#x7684;&#x6218;&#x672F;&#x7EC6;&#x8282;
</code></pre>
<p>&#x5047;&#x8BBE;&#x7F51;&#x7EDC;&#x9762;&#x5BF9;&#x4E00;&#x4E2A;&#x65B0;&#x5C40;&#x9762;&#xFF0C;&#x7ED9; A &#x7684;&#x9009;&#x62E9;&#x6982;&#x7387;&#x662F; 70%&#xFF0C;&#x7ED9; B &#x7684;&#x6982;&#x7387;&#x662F; 25%&#x3002;</p>
<p>&#x4F46;&#x6DF1;&#x5165;&#x641C;&#x7D22;&#x540E;&#xFF0C;MCTS &#x53D1;&#x73B0;&#xFF1A;</p>
<pre><code class="language-text">&#x9009;&#x62E9; A
  &#x2514;&#x2500; &#x5BF9;&#x624B;&#x6709;&#x5F3A;&#x529B;&#x53CD;&#x51FB;
       &#x2514;&#x2500; &#x5F53;&#x524D;&#x65B9;&#x5C40;&#x9762;&#x5927;&#x5E45;&#x6076;&#x5316;

&#x9009;&#x62E9; B
  &#x2514;&#x2500; &#x5BF9;&#x624B;&#x6CA1;&#x6709;&#x540C;&#x6837;&#x6709;&#x6548;&#x7684;&#x53CD;&#x51FB;
       &#x2514;&#x2500; &#x5F53;&#x524D;&#x65B9;&#x5C40;&#x9762;&#x8F83;&#x597D;
</code></pre>
<p>&#x7F51;&#x7EDC;&#x7684;&#x4E00;&#x6B21;&#x524D;&#x5411;&#x8BA1;&#x7B97;&#x6CA1;&#x6709;&#x51C6;&#x786E;&#x8BC6;&#x522B;&#x8FD9;&#x6761;&#x6218;&#x672F;&#x53D8;&#x5316;&#xFF0C;MCTS &#x5219;&#x6CBF;&#x7740;&#x540E;&#x7EED;&#x843D;&#x5B50;&#xFF0C;&#x628A;&#x5B83;&#x7B97;&#x4E86;&#x51FA;&#x6765;&#x3002;</p>
<p>&#x8FD9;&#x6B21;&#x641C;&#x7D22;&#x4F7F;&#x7528;&#x5DF2;&#x6709;&#x7F51;&#x7EDC;&#x8BC4;&#x4F30;&#x5C40;&#x9762;&#xFF0C;&#x4E3A;&#x773C;&#x524D;&#x7684;&#x95EE;&#x9898;&#x6295;&#x5165;&#x66F4;&#x591A;&#x8BA1;&#x7B97;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x66F4;&#x65B0;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x5373;&#x4F7F;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x5F88;&#x5F3A;&#xFF0C;&#x8FD9;&#x79CD;&#x989D;&#x5916;&#x8BA1;&#x7B97;&#x4ECD;&#x7136;&#x53EF;&#x80FD;&#x6709;&#x4EF7;&#x503C;&#x3002;&#x8FC7;&#x53BB;&#x5B66;&#x8FC7;&#x7684;&#x7ECF;&#x9A8C;&#xFF0C;&#x4E0D;&#x80FD;&#x4EE3;&#x66FF;&#x5BF9;&#x773C;&#x524D;&#x8FD9;&#x6761;&#x53D8;&#x5316;&#x7684;&#x5177;&#x4F53;&#x5206;&#x6790;&#x3002;</p>
<h2 id="3. &#x90A3;&#x4E48;&#xFF0C;MCTS &#x80FD;&#x4E0D;&#x80FD;&#x7A77;&#x4E3E;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x6027;&#xFF0C;&#x627E;&#x5230;&#x6700;&#x4F18;&#x89E3;&#xFF1F;"><a href="#3. &#x90A3;&#x4E48;&#xFF0C;MCTS &#x80FD;&#x4E0D;&#x80FD;&#x7A77;&#x4E3E;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x6027;&#xFF0C;&#x627E;&#x5230;&#x6700;&#x4F18;&#x89E3;&#xFF1F;"></a>3. &#x90A3;&#x4E48;&#xFF0C;MCTS &#x80FD;&#x4E0D;&#x80FD;&#x7A77;&#x4E3E;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x6027;&#xFF0C;&#x627E;&#x5230;&#x6700;&#x4F18;&#x89E3;&#xFF1F;</h2>
<p>&#x7406;&#x8BBA;&#x4E0A;&#xFF0C;&#x5982;&#x679C;&#x5B8C;&#x6574;&#x8986;&#x76D6;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7684;&#x5BF9;&#x5C40;&#x53D8;&#x5316;&#xFF0C;&#x5E76;&#x51C6;&#x786E;&#x6C42;&#x51FA;&#x7EC8;&#x5C40;&#x7ED3;&#x679C;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x6309;&#x76F8;&#x5E94;&#x7684;&#x535A;&#x5F08;&#x89C4;&#x5219;&#x6C42;&#x51FA;&#x6700;&#x4F18;&#x7B56;&#x7565;&#x3002;</p>
<p>&#x4F46;&#x56F4;&#x68CB;&#x7684;&#x641C;&#x7D22;&#x7A7A;&#x95F4;&#x6781;&#x5176;&#x5E9E;&#x5927;&#xFF0C;&#x73B0;&#x5B9E;&#x4E2D;&#x7684; AlphaZero &#x4E0D;&#x4F1A;&#x7A77;&#x4E3E;&#x6240;&#x6709;&#x53D8;&#x5316;&#x3002;</p>
<p>&#xFF08;&#x56F4;&#x68CB;&#x53EF;&#x80FD;&#x5C40;&#x9762;&#x6570;&#x91CF;&#x7684;&#x5E38;&#x89C1;&#x4F30;&#x8BA1;&#x7EA6;&#x4E3A; 10^170&#xFF0C;&#x800C;&#x53EF;&#x80FD;&#x5BF9;&#x5C40;&#x5E8F;&#x5217;&#x7684;&#x641C;&#x7D22;&#x6811;&#x590D;&#x6742;&#x5EA6;&#x4F30;&#x8BA1;&#x53EF;&#x4EE5;&#x8FBE;&#x5230; 10^360 &#x91CF;&#x7EA7;&#x3002;&#x800C;&#x53EF;&#x89C2;&#x6D4B;&#x5B87;&#x5B99;&#x4E2D;&#x7684;&#x539F;&#x5B50;&#x6570;&#x91CF;&#x7EA7;&#x4E5F;&#x624D;&#x53EA;&#x6709; 10^80&#xFF09;</p>
<p>&#x53EF;&#x4EE5;&#x628A;&#x4E09;&#x79CD;&#x65B9;&#x5F0F;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x770B;&#x3002;</p>
<p><strong>&#x65B9;&#x5F0F; A&#xFF1A;&#x53EA;&#x7528;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x3002;</strong></p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x5C40;&#x9762; &#x2192; &#x7F51;&#x7EDC;&#x9884;&#x6D4B; &#x2192; &#x9009;&#x62E9;&#x843D;&#x5B50;
</code></pre>
<p>&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x4F4E;&#xFF0C;&#x4F46;&#x4F9D;&#x8D56;&#x7F51;&#x7EDC;&#x5BF9;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x7684;&#x5224;&#x65AD;&#x3002;</p>
<p><strong>&#x65B9;&#x5F0F; B&#xFF1A;&#x7F51;&#x7EDC; + MCTS&#xFF0C;&#x4E5F;&#x5C31;&#x662F; AlphaZero &#x7684;&#x505A;&#x6CD5;&#x3002;</strong></p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x5C40;&#x9762; &#x2192; &#x7F51;&#x7EDC;&#x9884;&#x6D4B;
             &#x2193;
          MCTS &#x641C;&#x7D22;
             &#x2193;
          &#x9009;&#x62E9;&#x843D;&#x5B50;
</code></pre>
<p>&#x7F51;&#x7EDC;&#x63D0;&#x4F9B;&#x65B9;&#x5411;&#xFF0C;&#x641C;&#x7D22;&#x68C0;&#x9A8C;&#x5019;&#x9009;&#x52A8;&#x4F5C;&#xFF0C;&#x901A;&#x5E38;&#x80FD;&#x6539;&#x5584;&#x51B3;&#x7B56;&#xFF0C;&#x4F46;&#x4E0D;&#x4FDD;&#x8BC1;&#x6700;&#x4F18;&#x3002;</p>
<p><strong>&#x65B9;&#x5F0F; C&#xFF1A;&#x5B8C;&#x6574;&#x6C42;&#x89E3;&#x535A;&#x5F08;&#x3002;</strong></p>
<pre><code class="language-text">&#x5B8C;&#x6574;&#x641C;&#x7D22;&#x6216;&#x4E25;&#x683C;&#x6C42;&#x89E3; &#x2192; &#x6700;&#x4F18;&#x843D;&#x5B50;
</code></pre>
<p>&#x7406;&#x8BBA;&#x4E0A;&#x53EF;&#x83B7;&#x5F97;&#x6700;&#x4F18;&#x89E3;&#xFF0C;&#x4F46;&#x5BF9;&#x56F4;&#x68CB;&#x8FD9;&#x7C7B;&#x590D;&#x6742;&#x535A;&#x5F08;&#xFF0C;&#x901A;&#x5E38;&#x65E0;&#x6CD5;&#x5728;&#x5B9E;&#x9645;&#x8D44;&#x6E90;&#x9650;&#x5236;&#x4E0B;&#x5B8C;&#x6210;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;MCTS &#x672C;&#x6765;&#x5C31;&#x662F; AlphaZero &#x51B3;&#x7B56;&#x67B6;&#x6784;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;&#x8BAD;&#x7EC3;&#x8BA9;&#x7F51;&#x7EDC;&#x79EF;&#x7D2F;&#x7ECF;&#x9A8C;&#xFF0C;&#x51CF;&#x5C11;&#x76F2;&#x76EE;&#x63A2;&#x7D22;&#xFF1B;&#x641C;&#x7D22;&#x518D;&#x5229;&#x7528;&#x8FD9;&#x4E9B;&#x7ECF;&#x9A8C;&#xFF0C;&#x68C0;&#x9A8C;&#x5F53;&#x524D;&#x5C40;&#x9762;&#x7684;&#x5019;&#x9009;&#x52A8;&#x4F5C;&#x3002;</p>
<p>&#x7F51;&#x7EDC;&#x62DF;&#x5408;&#x7684;&#x662F;&#x641C;&#x7D22;&#x7ED9;&#x51FA;&#x7684;&#x7B56;&#x7565;&#x76EE;&#x6807;&#xFF0C;&#x4E0D;&#x5FC5;&#x590D;&#x73B0;&#x641C;&#x7D22;&#x6811;&#x4E2D;&#x7684;&#x6BCF;&#x6761;&#x8DEF;&#x5F84;&#x3001;&#x6BCF;&#x6B21;&#x8BBF;&#x95EE;&#x7EDF;&#x8BA1;&#x548C;&#x6240;&#x6709;&#x540E;&#x7EED;&#x53D8;&#x5316;&#x3002;&#x5373;&#x4F7F;&#x628A;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#x62DF;&#x5408;&#x5F97;&#x5F88;&#x597D;&#xFF0C;&#x5230;&#x4E86;&#x65B0;&#x5C40;&#x9762;&#xFF0C;&#x7EE7;&#x7EED;&#x641C;&#x7D22;&#x4ECD;&#x7136;&#x5408;&#x7406;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x533A;&#x522B;&#x4E5F;&#x5BF9;&#x5E94;&#x7740;&#x4E00;&#x79CD;&#x66F4;&#x4E00;&#x822C;&#x7684;&#x8BA1;&#x7B97;&#x65B9;&#x5F0F;&#xFF1A;</p>
<blockquote>
<p>&#x8BAD;&#x7EC3;&#x628A;&#x8FC7;&#x53BB;&#x7684;&#x7ECF;&#x9A8C;&#x538B;&#x7F29;&#x6210;&#x6A21;&#x578B;&#xFF1B;&#x63A8;&#x7406;&#x65F6;&#x7684;&#x641C;&#x7D22;&#xFF0C;&#x4E3A;&#x5F53;&#x524D;&#x95EE;&#x9898;&#x8FFD;&#x52A0;&#x8BA1;&#x7B97;&#x3002;</p>
</blockquote>
<p>&#x6A21;&#x578B;&#x8D8A;&#x5F3A;&#xFF0C;&#x641C;&#x7D22;&#x901A;&#x5E38;&#x8D8A;&#x6709;&#x65B9;&#x5411;&#xFF1B;&#x641C;&#x7D22;&#x9884;&#x7B97;&#x8D8A;&#x5145;&#x8DB3;&#xFF0C;&#x5C31;&#x8D8A;&#x6709;&#x673A;&#x4F1A;&#x53D1;&#x73B0;&#x521D;&#x59CB;&#x9884;&#x6D4B;&#x9057;&#x6F0F;&#x7684;&#x53D8;&#x5316;&#x3002;&#x4F46;&#x5728;&#x6709;&#x9650;&#x8D44;&#x6E90;&#x4E0B;&#xFF0C;&#x4E24;&#x8005;&#x90FD;&#x4E0D;&#x80FD;&#x4FDD;&#x8BC1;&#x6C38;&#x8FDC;&#x6B63;&#x786E;&#x3002;</p>
<p>&#x90A3;&#x4E48;&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF1A;&#x641C;&#x7D22;&#x7A7A;&#x95F4;&#x5927;&#x5230;&#x65E0;&#x6CD5;&#x7A77;&#x4E3E;&#xFF0C;MCTS &#x53EA;&#x505A;&#x6709;&#x9650;&#x6B21;&#x6A21;&#x62DF;&#xFF0C;&#x51ED;&#x4EC0;&#x4E48;&#x80FD;&#x7ED9;&#x51FA;&#x6BD4;&#x8F83;&#x53EF;&#x9760;&#x7684;&#x51B3;&#x7B56;&#xFF1F;&#x5B83;&#x5230;&#x5E95;&#x5728;&#x591A;&#x5927;&#x7A0B;&#x5EA6;&#x4E0A;&#x903C;&#x8FD1;&quot;&#x6700;&#x4F18;&quot;&#xFF1F;&#x518D;&#x8FDB;&#x4E00;&#x6B65;&#xFF0C;&#x600E;&#x6837;&#x7684;&#x4EFB;&#x52A1;&#x624D;&#x9002;&#x5408; MCTS&#xFF1F;</p>
`,E=[{level:1,title:"AlphaZero 已经学会下棋了，为什么落子前还要再算一遍？",children:[{level:2,title:"1. 训练教会模型的是“搜索经验”，不是所有局面的标准答案",children:[]},{level:2,title:"2. 网络快速估计，MCTS 为当前局面追加计算",children:[]},{level:2,title:"3. 那么，MCTS 能不能穷举所有可能性，找到最优解？",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
