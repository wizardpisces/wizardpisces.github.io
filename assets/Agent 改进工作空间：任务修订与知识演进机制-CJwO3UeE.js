const x={title:"Agent 改进工作空间：任务修订与知识演进机制",description:"从真实任务与人工修订出发，在中心化工作区中保留改进依据，让工程知识、Creator、采集策略与评估场景按反馈逐步形成。"},E=`<h1 id="Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4EFB;&#x52A1;&#x4FEE;&#x8BA2;&#x4E0E;&#x77E5;&#x8BC6;&#x6F14;&#x8FDB;&#x673A;&#x5236;"><a href="#Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4EFB;&#x52A1;&#x4FEE;&#x8BA2;&#x4E0E;&#x77E5;&#x8BC6;&#x6F14;&#x8FDB;&#x673A;&#x5236;"></a>Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4EFB;&#x52A1;&#x4FEE;&#x8BA2;&#x4E0E;&#x77E5;&#x8BC6;&#x6F14;&#x8FDB;&#x673A;&#x5236;</h1>
<h2 id="&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;"><a href="#&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;"></a>&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;</h2>
<p>&#x5C0F;&#x65F6;&#x7EA7;&#x5DE5;&#x7A0B;&#x4EFB;&#x52A1;&#x5305;&#x542B;&#x591A;&#x9636;&#x6BB5;&#x6267;&#x884C;&#x3001;&#x5916;&#x90E8;&#x4F9D;&#x8D56;&#x548C;&#x4EBA;&#x5DE5;&#x4ECB;&#x5165;&#x3002;&#x9A8C;&#x8BC1;&#x4E00;&#x6761;&#x7ECF;&#x9A8C;&#x65F6;&#xFF0C;&#x53CD;&#x590D;&#x91CD;&#x8DD1;&#x6574;&#x4E2A;&#x9700;&#x6C42;&#x6210;&#x672C;&#x8F83;&#x9AD8;&#xFF1B;&#x53EA;&#x5728;&#x4EFB;&#x52A1;&#x7ED3;&#x675F;&#x540E;&#x603B;&#x7ED3;&#xFF0C;&#x53C8;&#x5BB9;&#x6613;&#x4E22;&#x5931;&#x6BCF;&#x6B21;&#x4FEE;&#x6B63;&#x7684;&#x6761;&#x4EF6;&#x4E0E;&#x4F9D;&#x636E;&#x3002;</p>
<p>&#x5DE5;&#x4F5C;&#x533A;&#x4ECE;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x4E0E;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x5F00;&#x59CB;&#xFF0C;&#x5148;&#x4FDD;&#x7559;&#x6BCF;&#x8F6E;&#x8F93;&#x5165;&#x3001;&#x8F93;&#x51FA;&#x3001;&#x53CD;&#x9988;&#x4E0E;&#x53D8;&#x5316;&#x3002;&#x4EBA;&#x5DE5;&#x6307;&#x5BFC; Agent &#x63D0;&#x70BC;&#x7ECF;&#x9A8C;&#xFF0C;&#x5019;&#x9009;&#x7ECF;&#x8FC7; Review &#x540E;&#x4F9B;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x4F7F;&#x7528;&#xFF1B;&#x4F7F;&#x7528;&#x4E2D;&#x66B4;&#x9732;&#x7684;&#x65B0;&#x95EE;&#x9898;&#xFF0C;&#x518D;&#x9A71;&#x52A8;&#x4E0B;&#x4E00;&#x8F6E;&#x6539;&#x8FDB;&#x3002;</p>
<p>Skill&#x3001;Memory&#x3001;Skill Creator&#x3001;Meta-skill-creator&#x3001;Trace &#x7B56;&#x7565;&#x4E0E;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#xFF0C;&#x90FD;&#x6CBF;&#x540C;&#x4E00;&#x4E2A;&#x673A;&#x5236;&#x9010;&#x6B65;&#x5F62;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x5B9E;&#x9645;&#x6267;&#x884C;&#x4E0E;&#x53CD;&#x9988; &#x2192; &#x66B4;&#x9732;&#x7F3A;&#x53E3; &#x2192; &#x6700;&#x5C0F;&#x6539;&#x52A8; &#x2192; &#x5B9E;&#x9645;&#x4F7F;&#x7528;&#x4E0E;&#x89C2;&#x5BDF;
      &#x2191;                                  &#x2193;
      &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500; &#x4FDD;&#x7559; / &#x4FEE;&#x8BA2; / &#x64A4;&#x56DE; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<p>&#x5148;&#x7531;&#x4EBA;&#x5DE5;&#x5B8C;&#x6210;&#x6539;&#x8FDB;&#xFF0C;&#x65B9;&#x6CD5;&#x7A33;&#x5B9A;&#x540E;&#x518D;&#x56FA;&#x5316;&#x4E3A;&#x6307;&#x5BFC;&#x6216;&#x5DE5;&#x5177;&#x3002;&#x5404;&#x9879;&#x80FD;&#x529B;&#x6309;&#x5B9E;&#x9645;&#x7F3A;&#x53E3;&#x6269;&#x5C55;&#xFF0C;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x6761;&#x53CD;&#x9988;&#x94FE;&#x3002;</p>
<h2 id="&#x4E2D;&#x5FC3;&#x5316;&#x5DE5;&#x4F5C;&#x533A;"><a href="#&#x4E2D;&#x5FC3;&#x5316;&#x5DE5;&#x4F5C;&#x533A;"></a>&#x4E2D;&#x5FC3;&#x5316;&#x5DE5;&#x4F5C;&#x533A;</h2>
<p>&#x4E2D;&#x5FC3;&#x5316;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x5173;&#x8054;&#x4EFB;&#x52A1;&#x5DE5;&#x7A0B;&#x3001;&#x53EC;&#x56DE;&#x77E5;&#x8BC6;&#x4E0E;&#x4FEE;&#x8BA2;&#x8BB0;&#x5F55;&#x3002;&#x521D;&#x59CB;&#x5DE5;&#x4F5C;&#x533A;&#x53EF;&#x4EE5;&#x91C7;&#x7528;&#x4EE5;&#x4E0B;&#x6982;&#x5FF5;&#x7ED3;&#x6784;&#xFF1A;</p>
<pre><code class="language-text">workspace/
&#x251C;&#x2500;&#x2500; AGENTS.md                         &#x5DE5;&#x4F5C;&#x533A;&#x5165;&#x53E3;&#x4E0E;&#x64CD;&#x4F5C;&#x7EA6;&#x675F;
&#x2514;&#x2500;&#x2500; tasks/&lt;task&gt;/
    &#x251C;&#x2500;&#x2500; AGENTS.md                     &#x4EFB;&#x52A1;&#x76EE;&#x6807;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x5165;&#x53E3;&#x4E0E;&#x7EA6;&#x675F;
    &#x251C;&#x2500;&#x2500; repos/                        &#x53EF;&#x64CD;&#x4F5C;&#x7684;&#x5DE5;&#x7A0B;&#x4EE3;&#x7801;&#x53CA;&#x5DE5;&#x7A0B;&#x8BF4;&#x660E;
    &#x251C;&#x2500;&#x2500; inputs/                       &#x9700;&#x6C42;&#x3001;&#x8BBE;&#x8BA1;&#x3001;&#x6570;&#x636E;&#x4E0E;&#x76F8;&#x5173;&#x6750;&#x6599;
    &#x251C;&#x2500;&#x2500; knowledge/                    &#x672C;&#x6B21;&#x53EC;&#x56DE;&#x6216;&#x8BD5;&#x7528;&#x7684; Skills / Memory
    &#x251C;&#x2500;&#x2500; rollouts/                     &#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x73AF;&#x5883;&#x8F93;&#x51FA;&#x4E0E;&#x4EA7;&#x7269;
    &#x2514;&#x2500;&#x2500; reviews/&lt;round&gt;/              &#x672C;&#x8F6E;&#x53CD;&#x9988;&#x3001;&#x8D77;&#x6B62;&#x72B6;&#x6001;&#x3001;diff &#x4E0E;&#x9A8C;&#x6536;&#x5F15;&#x7528;
</code></pre>
<p><code>knowledge</code> &#x662F;&#x672C;&#x6B21;&#x4EFB;&#x52A1;&#x5B9E;&#x9645;&#x83B7;&#x5F97;&#x7684;&#x77E5;&#x8BC6;&#xFF1B;&#x6765;&#x6E90;&#x53EF;&#x4EE5;&#x662F;&#x6B64;&#x524D;&#x4EFB;&#x52A1;&#x91C7;&#x7EB3;&#x7684;&#x7ECF;&#x9A8C;&#xFF0C;&#x521D;&#x6B21;&#x8FD0;&#x884C;&#x5141;&#x8BB8;&#x4E3A;&#x7A7A;&#x3002;&#x5019;&#x9009;&#x7ECF;&#x8FC7; Review &#x540E;&#x8FDB;&#x5165;&#x4E2D;&#x5FC3;&#x5316;&#x77E5;&#x8BC6;&#x6765;&#x6E90;&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x6309;&#x5DE5;&#x7A0B;&#x4E0E;&#x573A;&#x666F;&#x53EC;&#x56DE;&#x3002;</p>
<p>&#x63D0;&#x70BC;&#x64CD;&#x4F5C;&#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x518D;&#x5C06; Skill Creator &#x653E;&#x5165;&#x5DE5;&#x4F5C;&#x533A;&#x7684;&#x53EF;&#x7528;&#x80FD;&#x529B;&#x4E2D;&#xFF1B;Meta Creator&#x3001;&#x8BC4;&#x4F30;&#x573A;&#x666F;&#x4E5F;&#x5728;&#x6709;&#x5B9E;&#x9645;&#x7528;&#x9014;&#x65F6;&#x52A0;&#x5165;&#x3002;&#x5DE5;&#x4F5C;&#x533A;&#x7684;&#x5165;&#x53E3;&#x8BF4;&#x660E;&#x968F;&#x4E4B;&#x66F4;&#x65B0;&#xFF0C;&#x63CF;&#x8FF0;&#x5404;&#x9879;&#x80FD;&#x529B;&#x7684;&#x804C;&#x8D23;&#x3001;&#x6750;&#x6599;&#x5165;&#x53E3;&#x548C;&#x64CD;&#x4F5C;&#x8303;&#x56F4;&#x3002;</p>
<p>&#x5DE5;&#x7A0B;&#x4E0A;&#x4E0B;&#x6587;&#x5305;&#x62EC;&#x771F;&#x5B9E;&#x4ED3;&#x5E93;&#x3001;&#x4F9D;&#x8D56;&#x548C;&#x76F8;&#x5173;&#x6750;&#x6599;&#x3002;&#x6BCF;&#x8F6E;&#x53E6;&#x884C;&#x56FA;&#x5B9A;&#x53EF;&#x56DE;&#x67E5;&#x7684;&#x8D77;&#x6B62;&#x72B6;&#x6001;&#xFF1A;&#x4EE3;&#x7801;&#x4F7F;&#x7528; Commit &#x4E0E;&#x5FC5;&#x8981;&#x7684;&#x672A;&#x63D0;&#x4EA4;&#x6539;&#x52A8;&#xFF0C;&#x6587;&#x6863;&#x4E0E;&#x77E5;&#x8BC6;&#x4FDD;&#x7559;&#x5BF9;&#x5E94;&#x5185;&#x5BB9;&#x53CA; diff&#x3002;&#x5916;&#x90E8;&#x8F93;&#x5165;&#x3001;&#x5DE5;&#x5177;&#x54CD;&#x5E94;&#x548C;&#x73AF;&#x5883;&#x6761;&#x4EF6;&#x968F;&#x8F68;&#x8FF9;&#x4FDD;&#x5B58;&#x3002;</p>
<p>&#x5404;&#x76EE;&#x5F55;&#x53EF;&#x4EE5;&#x6302;&#x8F7D;&#x6216;&#x5F15;&#x7528;&#x5DF2;&#x6709;&#x4EA7;&#x7269;&#x3002;&#x5173;&#x952E;&#x662F;&#x8BA9; Creator &#x80FD;&#x8BBF;&#x95EE;&#x5B8C;&#x6574;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5E76;&#x51C6;&#x786E;&#x627E;&#x5230;&#x67D0;&#x8F6E;&#x6267;&#x884C;&#x65F6;&#x7684;&#x5DE5;&#x7A0B;&#x3001;&#x77E5;&#x8BC6;&#x548C;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x4E00;&#x8F6E;&#x53CD;&#x9988;&#x5982;&#x4F55;&#x9A71;&#x52A8;&#x4FEE;&#x8BA2;"><a href="#&#x4E00;&#x8F6E;&#x53CD;&#x9988;&#x5982;&#x4F55;&#x9A71;&#x52A8;&#x4FEE;&#x8BA2;"></a>&#x4E00;&#x8F6E;&#x53CD;&#x9988;&#x5982;&#x4F55;&#x9A71;&#x52A8;&#x4FEE;&#x8BA2;</h2>
<p>&#x9996;&#x5148;&#x4FDD;&#x7559;&#x4EFB;&#x52A1;&#x672C;&#x8EAB;&#x7684;&#x4FEE;&#x8BA2;&#x94FE;&#xFF1A;</p>
<pre><code class="language-text">&#x8D77;&#x70B9;&#xFF1A;&#x5DE5;&#x7A0B; C1 &#xFF0B; &#x5F53;&#x65F6;&#x4F7F;&#x7528;&#x7684;&#x77E5;&#x8BC6; K1 &#xFF0B; &#x7ED3;&#x679C; R1
                         &#x2193;
                    &#x4EBA;&#x5DE5;&#x53CD;&#x9988; F1
                         &#x2193;
                &#x4FEE;&#x6539; C1 &#x2192; C2 &#x2192; &#x518D;&#x9A8C;&#x6536; R2
                         &#x2193;
                  Review &#x4E0E;&#x53D6;&#x820D;&#x7406;&#x7531;
</code></pre>
<p>&#x8FD9;&#x4E00;&#x8F6E;&#x4FDD;&#x7559; <code>C1 &#x2192; C2</code> &#x7684;&#x4EE3;&#x7801; diff&#xFF0C;&#x4EE5;&#x53CA;&#x53CD;&#x9988;&#x548C;&#x9A8C;&#x6536;&#x5BF9;&#x5E94;&#x7684;&#x8F68;&#x8FF9;&#x5165;&#x53E3;&#x3002;&#x4EBA;&#x5DE5;&#x968F;&#x540E;&#x7ED3;&#x5408;&#x8FD9;&#x4E9B;&#x6750;&#x6599;&#x6307;&#x5BFC;&#x7ECF;&#x9A8C;&#x63D0;&#x70BC;&#xFF0C;Review &#x5019;&#x9009;&#xFF0C;&#x518D;&#x89C2;&#x5BDF;&#x540E;&#x7EED;&#x4F7F;&#x7528;&#x3002;&#x9996;&#x4E2A;&#x95ED;&#x73AF;&#x53EF;&#x4EE5;&#x5728;&#x73B0;&#x6709;&#x6267;&#x884C;&#x6D41;&#x7A0B;&#x4E4B;&#x5916;&#x5B8C;&#x6210;&#x3002;</p>
<p>&#x5F53;&#x9700;&#x8981;&#x5728;&#x8282;&#x70B9;&#x5185;&#x76F4;&#x63A5;&#x68C0;&#x9A8C;&#x7B56;&#x7565;&#x4FEE;&#x8BA2;&#x65F6;&#xFF0C;&#x518D;&#x5C06;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&#x5D4C;&#x5165;&#x4EFB;&#x52A1;&#x4FEE;&#x590D;&#xFF1A;</p>
<pre><code class="language-text">&#x8282;&#x70B9;&#x53CD;&#x9988; &#x2192; &#x4FEE;&#x8BA2;&#x5019;&#x9009;&#x77E5;&#x8BC6; K1 &#x2192; K2 &#x2192; Agent &#x91C7;&#x7528; K2 &#x4FEE;&#x6539;&#x5DE5;&#x7A0B;
                                         &#x2193;
                              &#x73AF;&#x5883;&#x91CD;&#x9A8C; &#x2192; &#x8054;&#x5408; Review
</code></pre>
<p>&#x6B64;&#x65F6;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x77E5;&#x8BC6; diff &#x4E0E;&#x4EE3;&#x7801; diff&#xFF0C;&#x89C2;&#x5BDF;&#x7B56;&#x7565;&#x4FEE;&#x8BA2;&#x5982;&#x4F55;&#x843D;&#x5B9E;&#x5230;&#x5B9E;&#x9645;&#x64CD;&#x4F5C;&#x3002;</p>
<h3 id="&#x793A;&#x4F8B;&#xFF1A;&#x6807;&#x9898;&#x680F;&#x7EC4;&#x4EF6;&#x9009;&#x578B;"><a href="#&#x793A;&#x4F8B;&#xFF1A;&#x6807;&#x9898;&#x680F;&#x7EC4;&#x4EF6;&#x9009;&#x578B;"></a>&#x793A;&#x4F8B;&#xFF1A;&#x6807;&#x9898;&#x680F;&#x7EC4;&#x4EF6;&#x9009;&#x578B;</h3>
<p>&#x4EE5;&#x6807;&#x9898;&#x680F;&#x95F4;&#x8DDD;&#x95EE;&#x9898;&#x4E3A;&#x4F8B;&#xFF0C;&#x521D;&#x671F;&#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x6B21;&#x4FEE;&#x590D;&#x540E;&#x63D0;&#x70BC;&#x5019;&#x9009;&#x6307;&#x5BFC;&#xFF1A;</p>
<pre><code class="language-text">R1&#xFF1A;&#x4F7F;&#x7528; TitleBar&#xFF0C;&#x5B9E;&#x9645;&#x56FE;&#x6807;&#x95F4;&#x8DDD;&#x4E0D;&#x7B26;&#x5408;&#x8BBE;&#x8BA1;
 &#x2193;
F1&#xFF1A;&#x68C0;&#x67E5;&#x5DE5;&#x7A0B;&#x5DF2;&#x6709; ActionBar&#xFF1B;&#x8981;&#x6C42;&#x6838;&#x5BF9;&#x5B9E;&#x9645;&#x6E32;&#x67D3;
 &#x2193;
C2&#xFF1A;&#x66FF;&#x6362;&#x7EC4;&#x4EF6;&#x5E76;&#x8C03;&#x6574;&#x8C03;&#x7528;
 &#x2193;
R2&#xFF1A;&#x4FDD;&#x7559;&#x6E32;&#x67D3;&#x7ED3;&#x679C;&#x3001;&#x4EA4;&#x4E92;&#x68C0;&#x67E5;&#x53CA;&#x5176;&#x5224;&#x5B9A;
 &#x2193;
&#x4EBA;&#x5DE5;&#x6307;&#x5BFC;&#x63D0;&#x70BC;&#xFF1A;&#x6838;&#x5BF9;&#x7EC4;&#x4EF6;&#x80FD;&#x529B;&#x4E0E;&#x65E2;&#x6709;&#x7528;&#x6CD5;&#xFF0C;&#x7B26;&#x5408;&#x9700;&#x6C42;&#x65F6;&#x4F18;&#x5148;&#x590D;&#x7528;&#xFF1B;
              &#x6839;&#x636E;&#x5B9E;&#x9645;&#x6E32;&#x67D3;&#x4E0E;&#x4EA4;&#x4E92;&#x68C0;&#x67E5;&#x7ED3;&#x679C;
 &#x2193;
&#x5019;&#x9009; Review &#x2192; &#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x91C7;&#x7528; &#x2192; &#x56DE;&#x67E5;&#x5B9E;&#x9645;&#x9009;&#x578B;&#x3001;&#x6E32;&#x67D3;&#x4E0E;&#x8FD4;&#x5DE5;&#x60C5;&#x51B5;
</code></pre>
<p>&#x8FDB;&#x4E00;&#x6B65;&#x5D4C;&#x5165;&#x8282;&#x70B9;&#x65F6;&#xFF0C;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#x53EF;&#x4EE5;&#x5148;&#x9A71;&#x52A8;&#x9009;&#x578B; Skill &#x7684;&#x4FEE;&#x8BA2;&#xFF0C;&#x518D;&#x8BA9; Agent &#x6309;&#x65B0;&#x6307;&#x5BFC;&#x4FEE;&#x590D;&#x9875;&#x9762;&#x3002;&#x8054;&#x5408; Review &#x540C;&#x65F6;&#x68C0;&#x67E5;&#xFF1A;&#x7B56;&#x7565;&#x662F;&#x5426;&#x5408;&#x7406;&#x3001;Agent &#x662F;&#x5426;&#x843D;&#x5B9E;&#x3001;&#x73AF;&#x5883;&#x662F;&#x5426;&#x80FD;&#x6B63;&#x786E;&#x5224;&#x5B9A;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#x4E5F;&#x53EF;&#x80FD;&#x66B4;&#x9732;&#x73AF;&#x5883;&#x7F3A;&#x53E3;&#xFF0C;&#x4F8B;&#x5982;&#x53EA;&#x68C0;&#x67E5;&#x4EE3;&#x7801;&#x6570;&#x503C;&#x800C;&#x672A;&#x89C2;&#x5BDF;&#x5B9E;&#x9645;&#x6E32;&#x67D3;&#x3002;&#x6B64;&#x65F6;&#x8865;&#x5145;&#x89C2;&#x5BDF;&#x4E0E;&#x9A8C;&#x6536;&#x65B9;&#x5F0F;&#xFF0C;&#x5E76;&#x5173;&#x8054;&#x73AF;&#x5883;&#x53D8;&#x5316;&#x3002;&#x4EFB;&#x52A1;&#x901A;&#x8FC7;&#x3001;&#x77E5;&#x8BC6;&#x91C7;&#x7EB3;&#x548C;&#x73AF;&#x5883;&#x4FEE;&#x8BA2;&#x5206;&#x522B;&#x8BB0;&#x5F55;&#xFF0C;&#x5404;&#x81EA;&#x4FDD;&#x7559;&#x5224;&#x65AD;&#x4F9D;&#x636E;&#x3002;</p>
<p>&#x82E5;&#x53CD;&#x9988;&#x540C;&#x65F6;&#x6539;&#x53D8; Mock&#x3001;&#x8F93;&#x5165;&#x6216;&#x9A8C;&#x6536;&#x8981;&#x6C42;&#xFF0C;&#x5E94;&#x4FDD;&#x7559;&#x53D8;&#x5316;&#x539F;&#x56E0;&#x4E0E;&#x524D;&#x540E;&#x6761;&#x4EF6;&#x3002;&#x65B0;&#x7ED3;&#x679C;&#x6309;&#x65B0;&#x6761;&#x4EF6;&#x5224;&#x5B9A;&#xFF1B;&#x6BD4;&#x8F83;&#x7B56;&#x7565;&#x6536;&#x76CA;&#x65F6;&#xFF0C;&#x518D;&#x9009;&#x62E9;&#x6761;&#x4EF6;&#x4E00;&#x81F4;&#x7684;&#x6267;&#x884C;&#x3002;</p>
<h2 id="&#x63D0;&#x70BC;&#x80FD;&#x529B;&#x5982;&#x4F55;&#x5F62;&#x6210;"><a href="#&#x63D0;&#x70BC;&#x80FD;&#x529B;&#x5982;&#x4F55;&#x5F62;&#x6210;"></a>&#x63D0;&#x70BC;&#x80FD;&#x529B;&#x5982;&#x4F55;&#x5F62;&#x6210;</h2>
<h3 id="&#x4ECE;&#x4FEE;&#x8BA2;&#x4E2D;&#x6C89;&#x6DC0;&#x5DE5;&#x7A0B;&#x77E5;&#x8BC6;"><a href="#&#x4ECE;&#x4FEE;&#x8BA2;&#x4E2D;&#x6C89;&#x6DC0;&#x5DE5;&#x7A0B;&#x77E5;&#x8BC6;"></a>&#x4ECE;&#x4FEE;&#x8BA2;&#x4E2D;&#x6C89;&#x6DC0;&#x5DE5;&#x7A0B;&#x77E5;&#x8BC6;</h3>
<p>&#x6700;&#x5F00;&#x59CB;&#x7531;&#x4EBA;&#x5DE5;&#x5728;&#x5BF9;&#x8BDD;&#x4E2D;&#x6307;&#x5B9A;&#x95EE;&#x9898;&#x3001;&#x5F15;&#x5BFC;&#x53D6;&#x8BC1;&#x3001;&#x4FEE;&#x6539;&#x5019;&#x9009;&#xFF0C;&#x5E76;&#x89E3;&#x91CA;&#x91C7;&#x7EB3;&#x6216;&#x62D2;&#x7EDD;&#x7684;&#x539F;&#x56E0;&#x3002;&#x8FD9;&#x4E9B;&#x63D0;&#x70BC;&#x64CD;&#x4F5C;&#x9010;&#x6E10;&#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x6574;&#x7406;&#x4E3A; Skill Creator &#x7684;&#x6307;&#x5BFC;&#xFF0C;&#x7ED3;&#x5408;&#x53CD;&#x9988;&#x3001;&#x5DE5;&#x7A0B;&#x8BC1;&#x636E;&#x548C;&#x5DF2;&#x6709;&#x77E5;&#x8BC6;&#x63D0;&#x51FA;&#x589E;&#x5220;&#x6539;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x95EE;&#x9898;</th>
<th>&#x5904;&#x7406;&#x65B9;&#x5411;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5DF2;&#x6709;&#x6B63;&#x786E;&#x77E5;&#x8BC6;&#x672A;&#x88AB;&#x53EC;&#x56DE;</td>
<td>&#x8C03;&#x6574;&#x53EC;&#x56DE;&#x6216;&#x5165;&#x53E3;&#x6307;&#x5BFC;</td>
</tr>
<tr>
<td>&#x540C;&#x4E00;&#x804C;&#x8D23;&#x7684;&#x6307;&#x5BFC;&#x7F3A;&#x5931;&#x6216;&#x4E0D;&#x5B8C;&#x6574;</td>
<td>&#x4FEE;&#x6539;&#x5DF2;&#x6709; Skill</td>
</tr>
<tr>
<td>&#x5B58;&#x5728;&#x72EC;&#x7ACB;&#x7684;&#x9002;&#x7528;&#x60C5;&#x5883;&#x4E0E;&#x6267;&#x884C;&#x65B9;&#x6CD5;</td>
<td>&#x65B0;&#x589E;&#x5019;&#x9009; Skill</td>
</tr>
<tr>
<td>&#x786E;&#x8BA4;&#x7684;&#x5DE5;&#x7A0B;&#x4E8B;&#x5B9E;&#x4E0E;&#x7EA6;&#x675F;</td>
<td>&#x5199;&#x5165;&#x6709;&#x6765;&#x6E90;&#x548C;&#x9002;&#x7528;&#x8303;&#x56F4;&#x7684; Memory</td>
</tr>
<tr>
<td>&#x89C4;&#x5219;&#x8FC7;&#x65F6;&#x3001;&#x6709;&#x5BB3;&#x6216;&#x88AB;&#x66FF;&#x4EE3;</td>
<td>&#x63D0;&#x51FA;&#x4FEE;&#x8BA2;&#x6216;&#x79FB;&#x9664;&#xFF0C;&#x5E76;&#x8BF4;&#x660E;&#x5F71;&#x54CD;</td>
</tr>
<tr>
<td>&#x4EC5;&#x5C5E;&#x4EFB;&#x52A1;&#x4E34;&#x65F6;&#x8981;&#x6C42;&#xFF0C;&#x6216;&#x8BC1;&#x636E;&#x4E0D;&#x8DB3;</td>
<td>&#x4FDD;&#x7559;&#x5728;&#x4EFB;&#x52A1;&#x8BB0;&#x5F55;&#x4E2D;</td>
</tr>
</tbody>
</table>
<p>&#x5019;&#x9009;&#x6CE8;&#x660E;&#x6765;&#x6E90;&#x4FEE;&#x8BA2;&#x8F6E;&#x6B21;&#xFF0C;&#x4EBA;&#x5DE5;&#x4FDD;&#x7559;&#x91C7;&#x7EB3;&#x3001;&#x62D2;&#x7EDD;&#x53CA;&#x5176;&#x7406;&#x7531;&#x3002;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x53EF;&#x4EE5;&#x663E;&#x5F0F;&#x8BD5;&#x7528;&#x5019;&#x9009;&#xFF1B;&#x6B63;&#x5F0F;&#x91C7;&#x7EB3;&#x540E;&#xFF0C;&#x518D;&#x4F9B;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x53EC;&#x56DE;&#x3002;</p>
<h3 id="&#x4ECE;&#x63D0;&#x70BC;&#x53CD;&#x9988;&#x6539;&#x8FDB; Creator"><a href="#&#x4ECE;&#x63D0;&#x70BC;&#x53CD;&#x9988;&#x6539;&#x8FDB; Creator"></a>&#x4ECE;&#x63D0;&#x70BC;&#x53CD;&#x9988;&#x6539;&#x8FDB; Creator</h3>
<p>&#x4EBA;&#x5DE5;&#x7EE7;&#x7EED; Review Creator &#x7684;&#x4EA7;&#x51FA;&#xFF0C;&#x4FDD;&#x7559;&#x7EA0;&#x6B63;&#x5F52;&#x56E0;&#x3001;&#x6536;&#x7A84;&#x8303;&#x56F4;&#x3001;&#x8865;&#x5145;&#x8BC1;&#x636E;&#x7684;&#x8FC7;&#x7A0B;&#x3002;&#x5F53;&#x201C;&#x600E;&#x6837;&#x6539;&#x8FDB; Creator&#x201D;&#x5F62;&#x6210;&#x53EF;&#x590D;&#x7528;&#x65B9;&#x6CD5;&#x65F6;&#xFF0C;&#x518D;&#x6C89;&#x6DC0;&#x4E3A; Meta-skill-creator&#xFF0C;&#x5206;&#x6790;&#x63D0;&#x70BC;&#x8F68;&#x8FF9;&#x4E0E;&#x540E;&#x7EED;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x3002;</p>
<pre><code class="language-text">&#x591A;&#x6B21;&#x628A;&#x4EFB;&#x52A1;&#x7279;&#x4F8B;&#x5199;&#x6210;&#x901A;&#x7528;&#x89C4;&#x5219;
  &#x2192; &#x56DE;&#x67E5;&#x5019;&#x9009;&#x4E0E;&#x4EBA;&#x5DE5;&#x5220;&#x6539;&#x7406;&#x7531;
  &#x2192; &#x63D0;&#x8BAE;&#x4FEE;&#x6539; Creator&#xFF1A;&#x533A;&#x5206;&#x4EFB;&#x52A1;&#x6761;&#x4EF6;&#x4E0E;&#x53EF;&#x8FC1;&#x79FB;&#x7B56;&#x7565;&#xFF0C;&#x6838;&#x67E5;&#x9002;&#x7528;&#x8303;&#x56F4;
  &#x2192; &#x5728;&#x5DF2;&#x6709;&#x590D;&#x76D8;&#x6750;&#x6599;&#x548C;&#x65B0;&#x4EFB;&#x52A1;&#x4E0A;&#x68C0;&#x67E5;&#x5019;&#x9009;&#x8D28;&#x91CF;
</code></pre>
<p>&#x7F3A;&#x5DE5;&#x7A0B;&#x4FE1;&#x606F;&#x65F6;&#x8865;&#x4E0A;&#x4E0B;&#x6587;&#xFF1B;&#x63D0;&#x70BC;&#x65B9;&#x6CD5;&#x5B58;&#x5728;&#x7F3A;&#x9677;&#x65F6;&#x518D;&#x4FEE;&#x6539; Creator&#x3002;Creator &#x7684;&#x6539;&#x52A8;&#x540C;&#x6837;&#x4FDD;&#x7559;&#x8D77;&#x70B9;&#x3001;diff&#x3001;Review &#x548C;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#xFF0C;&#x89C2;&#x5BDF;&#x5019;&#x9009;&#x9002;&#x7528;&#x6027;&#x3001;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x6210;&#x672C;&#xFF0C;&#x4EE5;&#x53CA;&#x4EA7;&#x51FA;&#x77E5;&#x8BC6;&#x5728;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x4E2D;&#x7684;&#x8868;&#x73B0;&#x3002;</p>
<h2 id="&#x77E5;&#x8BC6;&#x4F7F;&#x7528;&#x4E0E;&#x6548;&#x679C;&#x8FFD;&#x8E2A;"><a href="#&#x77E5;&#x8BC6;&#x4F7F;&#x7528;&#x4E0E;&#x6548;&#x679C;&#x8FFD;&#x8E2A;"></a>&#x77E5;&#x8BC6;&#x4F7F;&#x7528;&#x4E0E;&#x6548;&#x679C;&#x8FFD;&#x8E2A;</h2>
<p>&#x6548;&#x679C;&#x8FFD;&#x8E2A;&#x4EE5;&#x5177;&#x4F53;&#x77E5;&#x8BC6;&#x7684;&#x4F7F;&#x7528;&#x4E3A;&#x4E3B;&#x7EBF;&#xFF0C;&#x56DE;&#x7B54;&#x54EA;&#x6761;&#x6307;&#x5BFC;&#x88AB;&#x91C7;&#x7528;&#x3001;&#x6539;&#x53D8;&#x4E86;&#x4EC0;&#x4E48;&#x884C;&#x4E3A;&#x3001;&#x5BF9;&#x5E94;&#x7ED3;&#x679C;&#x5982;&#x4F55;&#xFF0C;&#x4E3A;&#x4FDD;&#x7559;&#x3001;&#x4FEE;&#x8BA2;&#x6216;&#x79FB;&#x9664;&#x63D0;&#x4F9B;&#x4F9D;&#x636E;&#x3002;&#x6574;&#x4F53;&#x4EA4;&#x4ED8;&#x901A;&#x8FC7;&#x7387;&#x3001;&#x8FD4;&#x5DE5;&#x548C;&#x6210;&#x672C;&#x4F5C;&#x4E3A;&#x8F85;&#x52A9;&#xFF0C;&#x89C2;&#x5BDF;&#x6574;&#x5957;&#x673A;&#x5236;&#x7684;&#x6536;&#x76CA;&#x4E0E;&#x9000;&#x5316;&#x3002;</p>
<p>Trace &#x7B56;&#x7565;&#x968F;&#x590D;&#x76D8;&#x9700;&#x6C42;&#x8FED;&#x4EE3;&#xFF1A;&#x5148;&#x5229;&#x7528;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x4EA7;&#x7269;&#x548C;&#x4EBA;&#x5DE5;&#x4EA4;&#x4E92;&#xFF1B;&#x53D1;&#x73B0;&#x65E0;&#x6CD5;&#x786E;&#x8BA4;&#x67D0;&#x6761;&#x6307;&#x5BFC;&#x662F;&#x5426;&#x91C7;&#x7528;&#x3001;&#x67D0;&#x6B21;&#x91CD;&#x9A8C;&#x4E3A;&#x4F55;&#x53D1;&#x751F;&#xFF0C;&#x518D;&#x8865;&#x5145;&#x76F8;&#x5E94;&#x91C7;&#x96C6;&#x4E0E;&#x5173;&#x8054;&#x3002;&#x4E0D;&#x53EF;&#x56DE;&#x67E5;&#x7684;&#x5386;&#x53F2;&#x6761;&#x4EF6;&#x4FDD;&#x7559;&#x4E3A;&#x8BC1;&#x636E;&#x7F3A;&#x53E3;&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x589E;&#x52A0;&#x91C7;&#x96C6;&#x3002;</p>
<p>&#x77E5;&#x8BC6;&#x4EE5;&#x7A33;&#x5B9A;&#x6807;&#x8BC6;&#x5173;&#x8054;&#x5177;&#x4F53;&#x5185;&#x5BB9;&#xFF0C;&#x5185;&#x5BB9;&#x72B6;&#x6001;&#x53EF;&#x7528; Git revision &#x6216;&#x6458;&#x8981;&#x8868;&#x793A;&#x3002;&#x6BCF;&#x8F6E;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x5B9E;&#x9645;&#x91C7;&#x7528;&#x7684;&#x7248;&#x672C;&#xFF0C;&#x907F;&#x514D;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&#x540E;&#x6DF7;&#x6DC6;&#x5386;&#x53F2;&#x6548;&#x679C;&#x3002;</p>
<pre><code class="language-text">&#x53EC;&#x56DE;&#x4E86;&#x4EC0;&#x4E48; &#x2192; &#x5B9E;&#x9645;&#x91C7;&#x7528;&#x54EA;&#x6761;&#x6307;&#x5BFC; &#x2192; &#x884C;&#x4E3A;&#x600E;&#x6837;&#x53D8;&#x5316; &#x2192; &#x9A8C;&#x6536;&#x4E0E;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;
</code></pre>
<p>&#x8FD0;&#x884C;&#x65F6;&#x91C7;&#x96C6;&#x52A0;&#x8F7D;&#x5185;&#x5BB9;&#x3001;&#x91C7;&#x7528;&#x58F0;&#x660E;&#x3001;&#x5B9E;&#x9645;&#x4FEE;&#x6539;&#x548C;&#x9A8C;&#x8BC1;&#x8F93;&#x51FA;&#xFF1B;&#x590D;&#x76D8;&#x65F6;&#x7ED3;&#x5408;&#x8F68;&#x8FF9;&#x4E0E; diff &#x6838;&#x5BF9;&#x58F0;&#x660E;&#xFF0C;&#x5E76;&#x5206;&#x6790;&#x5176;&#x4ED6;&#x540C;&#x65F6;&#x53D8;&#x5316;&#x7684;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x6548;&#x679C;&#x5148;&#x843D;&#x5728;&#x4E00;&#x6B21;&#x4F7F;&#x7528;&#x4E0A;&#xFF0C;&#x518D;&#x8DE8;&#x4EFB;&#x52A1;&#x6C47;&#x603B;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x8BB0;&#x5F55;&#x7EF4;&#x5EA6;</th>
<th>&#x5185;&#x5BB9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x91C7;&#x7528;&#x8BC1;&#x636E;</td>
<td>&#x5BF9;&#x5E94;&#x6307;&#x5BFC;&#x3001;&#x5B9E;&#x9645;&#x64CD;&#x4F5C;&#x4E0E;&#x8F68;&#x8FF9;&#x4F4D;&#x7F6E;</td>
</tr>
<tr>
<td>&#x89C2;&#x6D4B;&#x7ED3;&#x679C;</td>
<td>&#x6539;&#x5584;&#x3001;&#x9000;&#x5316;&#x3001;&#x672A;&#x53D8;&#x5316;&#x6216;&#x65E0;&#x6CD5;&#x5224;&#x65AD;&#xFF0C;&#x4EE5;&#x53CA;&#x5224;&#x5B9A;&#x4F9D;&#x636E;</td>
</tr>
<tr>
<td>&#x6BD4;&#x8F83;&#x6761;&#x4EF6;</td>
<td>&#x5DE5;&#x7A0B;&#x4E0E;&#x73AF;&#x5883;&#x53D8;&#x5316;&#x3001;&#x5176;&#x4ED6;&#x7B56;&#x7565;&#x3001;&#x4EBA;&#x5DE5;&#x65B0;&#x589E;&#x8981;&#x6C42;</td>
</tr>
<tr>
<td>&#x4EBA;&#x5DE5;&#x53D6;&#x820D;</td>
<td>&#x91C7;&#x7EB3;&#x3001;&#x4FEE;&#x8BA2;&#x6216;&#x62D2;&#x7EDD;&#xFF0C;&#x4EE5;&#x53CA;&#x7406;&#x7531;</td>
</tr>
</tbody>
</table>
<p>&#x5355;&#x6B21;&#x7ED3;&#x679C;&#x4FDD;&#x7559;&#x5176;&#x9002;&#x7528;&#x6761;&#x4EF6;&#x548C;&#x8BC1;&#x636E;&#x5F3A;&#x5EA6;&#x3002;&#x591A;&#x9879;&#x56E0;&#x7D20;&#x5171;&#x540C;&#x53D8;&#x5316;&#x65F6;&#x5141;&#x8BB8;&#x65E0;&#x6CD5;&#x5F52;&#x56E0;&#xFF1B;&#x8DE8;&#x591A;&#x6B21;&#x4F7F;&#x7528;&#xFF0C;&#x9010;&#x6B65;&#x5F62;&#x6210;&#x67D0;&#x6761;&#x77E5;&#x8BC6;&#x5728;&#x54EA;&#x4E9B;&#x573A;&#x666F;&#x6709;&#x6536;&#x76CA;&#x3001;&#x6709;&#x54EA;&#x4E9B;&#x53CD;&#x4F8B;&#x7684;&#x5224;&#x65AD;&#x3002;</p>
<h3 id="FE &#x793A;&#x4F8B;&#xFF1A;&#x70B9;&#x4F4D;&#x53D1;&#x73B0;&#x3001;&#x53EF;&#x89C6;&#x5316;&#x4E0E;&#x6807;&#x8BB0;"><a href="#FE &#x793A;&#x4F8B;&#xFF1A;&#x70B9;&#x4F4D;&#x53D1;&#x73B0;&#x3001;&#x53EF;&#x89C6;&#x5316;&#x4E0E;&#x6807;&#x8BB0;"></a>FE &#x793A;&#x4F8B;&#xFF1A;&#x70B9;&#x4F4D;&#x53D1;&#x73B0;&#x3001;&#x53EF;&#x89C6;&#x5316;&#x4E0E;&#x6807;&#x8BB0;</h3>
<p>FE &#x4EE5;&#x5177;&#x4F53; UI &#x70B9;&#x4F4D;&#x8FDE;&#x63A5;&#x77E5;&#x8BC6;&#x4E0E;&#x7ED3;&#x679C;&#x3002;&#x70B9;&#x4F4D;&#x5BF9;&#x5E94;&#x67D0;&#x4E2A;&#x9875;&#x9762;&#x72B6;&#x6001;&#x4E2D;&#x7684;&#x7EC4;&#x4EF6;&#x3001;&#x533A;&#x57DF;&#x6216;&#x9A8C;&#x6536;&#x5BF9;&#x8C61;&#xFF0C;&#x4F8B;&#x5982;&#x6807;&#x9898;&#x680F;&#x56FE;&#x6807;&#x7EC4;&#x53CA;&#x5176;&#x95F4;&#x8DDD;&#x3002;</p>
<pre><code class="language-text">&#x8BBE;&#x8BA1;&#x53C2;&#x8003;&#x4E0E;&#x5B9E;&#x9645;&#x622A;&#x56FE; &#x2192; AI &#x5BF9;&#x6BD4;&#x5B9A;&#x4F4D;&#x95EE;&#x9898; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
                                           &#x251C;&#x2192; &#x5408;&#x5E76;&#x70B9;&#x4F4D; &#x2192; &#x622A;&#x56FE;&#x7F16;&#x53F7;&#x3001;&#x6846;&#x9009;
&#x7EC4;&#x4EF6;&#x7D22;&#x5F15;&#x4E0E; Skill &#x7684;&#x91C7;&#x7528;&#x8BB0;&#x5F55; &#x2192; &#x5B9A;&#x4F4D;&#x4F5C;&#x7528;&#x533A;&#x57DF; &#x2500;&#x2500;&#x2518;                  &#x2193;
                                                    &#x9010;&#x70B9;&#x5C5E;&#x6027;&#x4E0E;&#x8BC1;&#x636E;
                                                           &#x2193;
                                                  &#x4EBA;&#x5DE5; Review &#x2192; &#x4FEE;&#x8BA2;
</code></pre>
<p>&#x70B9;&#x4F4D;&#x4ECE;&#x4E24;&#x4E2A;&#x5165;&#x53E3;&#x53D1;&#x73B0;&#xFF1A;&#x622A;&#x56FE;&#x5BF9;&#x6BD4;&#x53D1;&#x73B0;&#x7684;&#x5931;&#x8D25;&#x4F4D;&#x7F6E;&#xFF0C;&#x4EE5;&#x53CA;&#x5B9E;&#x9645;&#x91C7;&#x7528;&#x7EC4;&#x4EF6;&#x7D22;&#x5F15;&#x6216; UI Skill &#x7684;&#x4F5C;&#x7528;&#x4F4D;&#x7F6E;&#x3002;&#x76F8;&#x540C;&#x72B6;&#x6001;&#x3001;&#x540C;&#x4E00;&#x5BF9;&#x8C61;&#x7684;&#x70B9;&#x4F4D;&#x5408;&#x5E76;&#xFF0C;&#x4FDD;&#x7559;&#x591A;&#x9879;&#x68C0;&#x67E5;&#x4E0E;&#x77E5;&#x8BC6;&#x5173;&#x8054;&#x3002;&#x4EE3;&#x7801;&#x3001;&#x8F68;&#x8FF9;&#x548C;&#x8FD0;&#x884C;&#x5143;&#x7D20;&#x5E2E;&#x52A9;&#x5B9A;&#x4F4D;&#x91C7;&#x7528;&#x4F4D;&#x7F6E;&#xFF1B;&#x5173;&#x8054;&#x4E0D;&#x660E;&#x786E;&#x65F6;&#x6807;&#x4E3A;&#x5F85;&#x786E;&#x8BA4;&#x3002;</p>
<p>&#x8F93;&#x51FA;&#x5305;&#x62EC;&#x6807;&#x6CE8;&#x622A;&#x56FE;&#x548C;&#x70B9;&#x4F4D;&#x660E;&#x7EC6;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x4E00;&#x7F16;&#x53F7;&#x8FDE;&#x63A5;&#x3002;&#x4EE5;&#x4E0B;&#x4E3A;&#x793A;&#x610F;&#xFF1A;</p>
<pre><code class="language-text">&#x5B9E;&#x9645;&#x9875;&#x9762;&#x622A;&#x56FE;
&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502; &#x6708;&#x62A5;          [P1 &#x56FE;&#x6807;&#x7EC4;]&#x2502;
&#x2502;                          &#x2502;
&#x2502; [P2 &#x5217;&#x8868;&#x5361;&#x7247;]            &#x2502;
&#x2502;                          &#x2502;
&#x2502; [P3 &#x5E95;&#x90E8;&#x7559;&#x767D;]            &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<table>
<thead>
<tr>
<th>&#x70B9;&#x4F4D;</th>
<th>&#x7EC4;&#x4EF6;&#x7D22;&#x5F15;&#x4E0E;&#x5B9E;&#x9645;&#x7EC4;&#x4EF6;</th>
<th>&#x91C7;&#x7528;&#x7684; Skill</th>
<th>&#x9A8C;&#x6536;&#x7ED3;&#x679C;</th>
</tr>
</thead>
<tbody>
<tr>
<td>P1 &#x56FE;&#x6807;&#x7EC4;</td>
<td>&#x7ECF;&#x7D22;&#x5F15;&#x9009;&#x7528; ActionBar</td>
<td>&#x6807;&#x9898;&#x680F;&#x9009;&#x578B; Skill&#xFF0C;&#x5173;&#x8054;&#x5177;&#x4F53;&#x7248;&#x672C;</td>
<td>&#x5931;&#x8D25;&#xFF1A;&#x56FE;&#x6807;&#x95F4;&#x8DDD;&#x4E0D;&#x7B26;</td>
</tr>
<tr>
<td>P2 &#x5217;&#x8868;&#x5361;&#x7247;</td>
<td>&#x672A;&#x4F7F;&#x7528;&#x7D22;&#x5F15;</td>
<td>&#x5361;&#x7247;&#x5E03;&#x5C40; Skill&#xFF0C;&#x5173;&#x8054;&#x5177;&#x4F53;&#x7248;&#x672C;</td>
<td>&#x901A;&#x8FC7;&#xFF1A;&#x5E03;&#x5C40;&#x7B26;&#x5408;&#x8981;&#x6C42;</td>
</tr>
<tr>
<td>P3 &#x5E95;&#x90E8;&#x7559;&#x767D;</td>
<td>&#x672A;&#x4F7F;&#x7528;&#x7D22;&#x5F15;</td>
<td>&#x672A;&#x91C7;&#x7528;&#x76F8;&#x5173; Skill</td>
<td>&#x5931;&#x8D25;&#xFF1A;&#x7559;&#x767D;&#x4E0D;&#x7B26;</td>
</tr>
</tbody>
</table>
<p>&#x6BCF;&#x4E2A;&#x70B9;&#x4F4D;&#x4FDD;&#x7559;&#x4EE5;&#x4E0B;&#x5C5E;&#x6027;&#xFF1A;</p>
<ul>
<li><strong>&#x4F4D;&#x7F6E;</strong>&#xFF1A;&#x9875;&#x9762;&#x4E0E;&#x72B6;&#x6001;&#x3001;&#x622A;&#x56FE;&#x533A;&#x57DF;&#x3001;&#x5BF9;&#x5E94;&#x7EC4;&#x4EF6;&#x6216;&#x4EE3;&#x7801;&#x4F4D;&#x7F6E;&#x3002;</li>
<li><strong>&#x77E5;&#x8BC6;&#x91C7;&#x7528;</strong>&#xFF1A;&#x7D22;&#x5F15;&#x68C0;&#x7D22;&#x4E0E;&#x5B9E;&#x9645;&#x7EC4;&#x4EF6;&#x3001;Skill &#x6807;&#x8BC6;&#x53CA;&#x5185;&#x5BB9;&#x7248;&#x672C;&#x3001;&#x91C7;&#x7528;&#x8BC1;&#x636E;&#xFF1B;&#x672A;&#x91C7;&#x7528;&#x4E0E;&#x65E0;&#x6CD5;&#x786E;&#x8BA4;&#x5206;&#x522B;&#x6807;&#x8BB0;&#x3002;</li>
<li><strong>&#x7ED3;&#x679C;&#x51C6;&#x786E;&#x6027;</strong>&#xFF1A;&#x9884;&#x671F;&#x4E0E;&#x5B9E;&#x9645;&#x3001;&#x901A;&#x8FC7;&#xFF0F;&#x5931;&#x8D25;&#xFF0F;&#x65E0;&#x6CD5;&#x5224;&#x65AD;&#x3001;&#x5224;&#x5B9A;&#x6765;&#x6E90;&#x4E0E;&#x622A;&#x56FE;&#x6216;&#x8FD0;&#x884C;&#x8BC1;&#x636E;&#x3002;&#x4EA4;&#x4E92;&#x7ED3;&#x8BBA;&#x9700;&#x8981;&#x5B9E;&#x9645;&#x64CD;&#x4F5C;&#x4E0E;&#x53CD;&#x9988;&#x652F;&#x6491;&#x3002;</li>
<li><strong>&#x4FEE;&#x8BA2;&#x5173;&#x7CFB;</strong>&#xFF1A;&#x6240;&#x5C5E; Review &#x8F6E;&#x6B21;&#x3001;&#x524D;&#x540E; diff&#xFF0C;&#x4EE5;&#x53CA;&#x91CD;&#x9A8C;&#x540E;&#x7684;&#x540C;&#x4E00;&#x70B9;&#x4F4D;&#x7ED3;&#x679C;&#x3002;&#x5750;&#x6807;&#x968F;&#x622A;&#x56FE;&#x66F4;&#x65B0;&#xFF0C;&#x4FDD;&#x7559;&#x5BF9;&#x8C61;&#x5173;&#x8054;&#x3002;</li>
</ul>
<p>&#x4EBA;&#x5DE5;&#x53EF;&#x4EE5;&#x6CBF;&#x622A;&#x56FE;&#x70B9;&#x4F4D;&#x68C0;&#x67E5;&#x91C7;&#x7528;&#x60C5;&#x51B5;&#x4E0E;&#x7ED3;&#x679C;&#xFF0C;&#x4FEE;&#x6B63; AI &#x7684;&#x5B9A;&#x4F4D;&#x548C;&#x5224;&#x5B9A;&#x3002;&#x7531;&#x6B64;&#x533A;&#x5206;&#x201C;&#x672A;&#x91C7;&#x7528;&#x77E5;&#x8BC6;&#x4E14;&#x5931;&#x8D25;&#x201D;&#x201C;&#x91C7;&#x7528;&#x77E5;&#x8BC6;&#x4ECD;&#x5931;&#x8D25;&#x201D;&#x201C;&#x91C7;&#x7528;&#x77E5;&#x8BC6;&#x4E14;&#x901A;&#x8FC7;&#x201D;&#xFF0C;&#x518D;&#x56DE;&#x67E5;&#x6307;&#x5BFC;&#x3001;&#x6267;&#x884C;&#x6216;&#x73AF;&#x5883;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="&#x4ECE;&#x70B9;&#x4F4D;&#x6807;&#x8BB0;&#x6C47;&#x603B;&#x6548;&#x679C;"><a href="#&#x4ECE;&#x70B9;&#x4F4D;&#x6807;&#x8BB0;&#x6C47;&#x603B;&#x6548;&#x679C;"></a>&#x4ECE;&#x70B9;&#x4F4D;&#x6807;&#x8BB0;&#x6C47;&#x603B;&#x6548;&#x679C;</h3>
<p>&#x5148;&#x5F62;&#x6210;&#x53EF;&#x56DE;&#x67E5;&#x7684;&#x70B9;&#x4F4D;&#x8BB0;&#x5F55;&#xFF0C;&#x518D;&#x6309;&#x77E5;&#x8BC6;&#x7248;&#x672C;&#x3001;&#x573A;&#x666F;&#x548C;&#x4FEE;&#x8BA2;&#x8F6E;&#x6B21;&#x6C47;&#x603B;&#x91C7;&#x7528;&#x4E0E;&#x9A8C;&#x6536;&#x7ED3;&#x679C;&#x3002;&#x91CD;&#x590D;&#x9A8C;&#x6536;&#x5173;&#x8054;&#x540C;&#x4E00;&#x70B9;&#x4F4D;&#xFF0C;&#x591A;&#x6761; Skill &#x7684;&#x5171;&#x540C;&#x91C7;&#x7528;&#x4FDD;&#x7559;&#x5173;&#x8054;&#x3002;&#x4FEE;&#x8BA2;&#x524D;&#x540E;&#x6BD4;&#x8F83;&#x65F6;&#xFF0C;&#x5BF9;&#x9F50;&#x70B9;&#x4F4D;&#x4E0E;&#x9A8C;&#x6536;&#x6761;&#x4EF6;&#xFF0C;&#x89C2;&#x5BDF;&#x5931;&#x8D25;&#x662F;&#x5426;&#x89E3;&#x51B3;&#x3001;&#x662F;&#x5426;&#x5F15;&#x5165;&#x9000;&#x6B65;&#xFF0C;&#x4EE5;&#x53CA;&#x91CD;&#x8BD5;&#x4E0E;&#x6210;&#x672C;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x8FD9;&#x7EC4;&#x70B9;&#x4F4D;&#x8986;&#x76D6;&#x5DF2;&#x53D1;&#x73B0;&#x7684;&#x95EE;&#x9898;&#x548C;&#x77E5;&#x8BC6;&#x91C7;&#x7528;&#x533A;&#x57DF;&#xFF0C;&#x6C47;&#x603B;&#x540C;&#x65F6;&#x6CE8;&#x660E;&#x8986;&#x76D6;&#x8303;&#x56F4;&#x3002;&#x5B83;&#x670D;&#x52A1;&#x4E8E;&#x77E5;&#x8BC6;&#x6548;&#x679C;&#x5206;&#x6790;&#xFF1B;&#x91C7;&#x7528;&#x540E;&#x901A;&#x8FC7;&#x8BB0;&#x5F55;&#x4E3A;&#x901A;&#x8FC7;&#xFF0C;&#x6539;&#x5584;&#x4E0E;&#x5F52;&#x56E0;&#x53E6;&#x9700;&#x6BD4;&#x8F83;&#x8BC1;&#x636E;&#xFF0C;&#x8BC1;&#x636E;&#x4E0D;&#x8DB3;&#x65F6;&#x4FDD;&#x7559;&#x65E0;&#x6CD5;&#x5224;&#x65AD;&#x3002;</p>
<h2 id="&#x4ECE;&#x4EFB;&#x52A1;&#x6D41;&#x9009;&#x62E9;&#x8BC4;&#x4F30;&#x573A;&#x666F;"><a href="#&#x4ECE;&#x4EFB;&#x52A1;&#x6D41;&#x9009;&#x62E9;&#x8BC4;&#x4F30;&#x573A;&#x666F;"></a>&#x4ECE;&#x4EFB;&#x52A1;&#x6D41;&#x9009;&#x62E9;&#x8BC4;&#x4F30;&#x573A;&#x666F;</h2>
<p>&#x4EFB;&#x52A1;&#x6301;&#x7EED;&#x6D41;&#x5165;&#x65F6;&#xFF0C;&#x4EBA;&#x5DE5;&#x6216;&#x542F;&#x53D1;&#x5F0F;&#x7B56;&#x7565;&#x6309;&#x77E5;&#x8BC6;&#x7684;&#x9A8C;&#x8BC1;&#x9700;&#x8981;&#x7B5B;&#x9009;&#x573A;&#x666F;&#xFF0C;&#x9010;&#x6B65;&#x79EF;&#x7D2F;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#xFF1A;</p>
<pre><code class="language-text">&#x6D41;&#x5165;&#x7684;&#x4EFB;&#x52A1;&#x4E0E;&#x4FEE;&#x8BA2;&#x7247;&#x6BB5;
          &#x2193;
&#x5173;&#x8054; Skill&#xFF0C;&#x5224;&#x65AD;&#x76F8;&#x5173;&#x6027;&#x3001;&#x6062;&#x590D;&#x96BE;&#x5EA6;&#x3001;&#x8017;&#x65F6;&#x3001;&#x5224;&#x522B;&#x529B;&#x4E0E;&#x8986;&#x76D6;&#x4EF7;&#x503C;
          &#x2193;
&#x9009;&#x62E9;&#x9002;&#x5408;&#x7684;&#x4EFB;&#x52A1;&#x6216;&#x5C40;&#x90E8;&#x7247;&#x6BB5;
          &#x2193;
&#x8403;&#x53D6;&#x5E76;&#x6821;&#x9A8C; Env &#x2192; &#x5F62;&#x6210;&#x5173;&#x8054;&#x8BE5; Skill &#x7684;&#x8BC4;&#x4F30;&#x96C6;&#x5408;
</code></pre>
<p>&#x4E00;&#x4E2A; Skill &#x53EF;&#x4EE5;&#x5173;&#x8054;&#x591A;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x4E5F;&#x53EF;&#x4EE5;&#x9A8C;&#x8BC1;&#x4E0D;&#x540C;&#x77E5;&#x8BC6;&#x3002;&#x4F18;&#x5148;&#x9009;&#x62E9;&#x80FD;&#x591F;&#x6062;&#x590D;&#x8D77;&#x70B9;&#x3001;&#x4F4E;&#x6210;&#x672C;&#x91CD;&#x8DD1;&#xFF0C;&#x5E76;&#x80FD;&#x533A;&#x5206;&#x7B56;&#x7565;&#x5DEE;&#x5F02;&#x7684;&#x7247;&#x6BB5;&#x3002;</p>
<p>&#x5148;&#x83B7;&#x5F97;&#x8986;&#x76D6;&#x6709;&#x9650;&#x4F46;&#x53EF;&#x7528;&#x7684;&#x8BC4;&#x4F30;&#x96C6;&#x5408;&#xFF0C;&#x964D;&#x4F4E;&#x6BCF;&#x6B21;&#x9A8C;&#x8BC1;&#x7684;&#x6210;&#x672C;&#xFF1B;&#x590D;&#x6742;&#x4F9D;&#x8D56;&#x548C;&#x957F;&#x94FE;&#x8DEF;&#x80FD;&#x529B;&#x7EE7;&#x7EED;&#x901A;&#x8FC7;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x89C2;&#x5BDF;&#xFF0C;&#x968F;&#x8BC1;&#x636E;&#x4E0E;&#x6062;&#x590D;&#x80FD;&#x529B;&#x79EF;&#x7D2F;&#x6269;&#x5927;&#x8986;&#x76D6;&#x3002;&#x73AF;&#x5883;&#x8403;&#x53D6;&#x65B9;&#x6CD5;&#x672C;&#x8EAB;&#xFF0C;&#x4E5F;&#x4ECE;&#x5B9E;&#x9645;&#x6062;&#x590D;&#x5931;&#x8D25;&#x3001;&#x9519;&#x8BEF;&#x5224;&#x5B9A;&#x548C;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x4E2D;&#x9010;&#x6B65;&#x5F62;&#x6210;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x9A8C;&#x8BC1;&#x201C;&#x65B0;&#x589E; TypeScript &#x8BCA;&#x65AD;&#x8BC6;&#x522B;&#x201D;&#x65F6;&#xFF0C;&#x201C;&#x65E7;&#x9519;&#x8BEF;&#x51CF;&#x5C11;&#x4E00;&#x6761;&#x3001;&#x65B0;&#x9519;&#x8BEF;&#x589E;&#x52A0;&#x4E00;&#x6761;&#x3001;&#x603B;&#x6570;&#x4E0D;&#x53D8;&#x201D;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x6BD4;&#x59CB;&#x7EC8;&#x6CA1;&#x6709;&#x9519;&#x8BEF;&#x7684;&#x573A;&#x666F;&#x66F4;&#x6709;&#x5224;&#x522B;&#x529B;&#x3002;&#x6807;&#x9898;&#x680F;&#x9009;&#x578B;&#x5219;&#x9700;&#x8981;&#x4FDD;&#x7559;&#x8BBE;&#x8BA1;&#x8981;&#x6C42;&#x3001;&#x7EC4;&#x4EF6;&#x80FD;&#x529B;&#x3001;&#x4EA4;&#x4E92;&#x4E0E;&#x6E32;&#x67D3;&#x68C0;&#x67E5;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x8BC4;&#x4F30;&#x96C6;&#x5408;&#x8BB0;&#x5F55;&#x8986;&#x76D6;&#x8303;&#x56F4;&#xFF0C;&#x8865;&#x5145;&#x5931;&#x8D25;&#x3001;&#x53CD;&#x4F8B;&#x548C;&#x4E0D;&#x540C;&#x6761;&#x4EF6;&#xFF0C;&#x907F;&#x514D;&#x53EA;&#x4FDD;&#x7559;&#x4FBF;&#x5B9C;&#x6216;&#x5DF2;&#x6210;&#x529F;&#x7684;&#x4EFB;&#x52A1;&#x3002;&#x6765;&#x6E90;&#x4EFB;&#x52A1;&#x7528;&#x4E8E;&#x56DE;&#x653E;&#x4E0E;&#x8C03;&#x8BD5;&#xFF0C;&#x540E;&#x7EED;&#x65B0;&#x4EFB;&#x52A1;&#x8865;&#x5145;&#x8FC1;&#x79FB;&#x8BC1;&#x636E;&#x3002;&#x73AF;&#x5883;&#x6062;&#x590D;&#x4E0E;&#x8BC4;&#x4EF7;&#x6821;&#x9A8C;&#x6CBF;&#x7528;&#x300A;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#x300B;&#x7684;&#x673A;&#x5236;&#x3002;</p>
<h2 id="&#x542F;&#x52A8;&#x4E0E;&#x6269;&#x5C55;&#x6761;&#x4EF6;"><a href="#&#x542F;&#x52A8;&#x4E0E;&#x6269;&#x5C55;&#x6761;&#x4EF6;"></a>&#x542F;&#x52A8;&#x4E0E;&#x6269;&#x5C55;&#x6761;&#x4EF6;</h2>
<p>&#x521D;&#x7248;&#x4ECE;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x7684;&#x9636;&#x6BB5;&#x7ED3;&#x679C;&#x5F00;&#x59CB;&#xFF0C;&#x4EBA;&#x5DE5;&#x6307;&#x5BFC; Agent &#x63D0;&#x70BC;&#x4E00;&#x4EFD;&#x5019;&#x9009;&#xFF0C;Review &#x540E;&#x4F9B;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x4F7F;&#x7528;&#x3002;&#x5148;&#x4FDD;&#x7559;&#x5DE5;&#x7A0B;&#x4E0E;&#x4EA7;&#x7269;&#x7684;&#x8D77;&#x6B62;&#x72B6;&#x6001;&#x3001;&#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x3001;&#x91C7;&#x7528;&#x7684;&#x77E5;&#x8BC6;&#x5185;&#x5BB9;&#xFF0C;&#x4EE5;&#x53CA;&#x8BC4;&#x8BBA;&#x548C;&#x4FEE;&#x8BA2;&#x5173;&#x7CFB;&#x3002;</p>
<p>&#x968F;&#x540E;&#x6309;&#x66B4;&#x9732;&#x7684;&#x7F3A;&#x53E3;&#x6269;&#x5C55;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x51FA;&#x73B0;&#x7684;&#x9700;&#x8981;</th>
<th>&#x5BF9;&#x5E94;&#x6269;&#x5C55;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x8FDB;&#x884C;&#x76F8;&#x8FD1;&#x7684;&#x63D0;&#x70BC;&#x64CD;&#x4F5C;</td>
<td>&#x56FA;&#x5316; Skill Creator</td>
</tr>
<tr>
<td>&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x7EA0;&#x6B63; Creator &#x7684;&#x63D0;&#x70BC;&#x65B9;&#x6CD5;</td>
<td>&#x63D0;&#x70BC; Meta-skill-creator</td>
</tr>
<tr>
<td>&#x65E0;&#x6CD5;&#x56DE;&#x67E5;&#x67D0;&#x9879;&#x884C;&#x4E3A;&#x6216;&#x5224;&#x65AD;</td>
<td>&#x8865;&#x5145; Trace &#x7B56;&#x7565;</td>
</tr>
<tr>
<td>&#x5E0C;&#x671B;&#x7ACB;&#x5373;&#x68C0;&#x9A8C;&#x67D0;&#x6761;&#x7B56;&#x7565;&#x4FEE;&#x8BA2;</td>
<td>&#x5728;&#x9009;&#x5B9A;&#x8282;&#x70B9;&#x5D4C;&#x5165;&#x77E5;&#x8BC6;&#x4FEE;&#x8BA2;&#x4E0E;&#x8054;&#x5408; Review</td>
</tr>
<tr>
<td>&#x6D41;&#x5165;&#x4EFB;&#x52A1;&#x4E2D;&#x51FA;&#x73B0;&#x6709;&#x5224;&#x522B;&#x529B;&#x3001;&#x53EF;&#x6062;&#x590D;&#x7684;&#x573A;&#x666F;</td>
<td>&#x8403;&#x53D6;&#x5E76;&#x6821;&#x9A8C;&#x5C40;&#x90E8; Env</td>
</tr>
</tbody>
</table>
<p>&#x6BCF;&#x6B21;&#x6269;&#x5C55;&#x63A5;&#x53D7;&#x540C;&#x6837;&#x7684;&#x68C0;&#x67E5;&#xFF1A;&#x662F;&#x5426;&#x5E2E;&#x52A9;&#x56DE;&#x7B54;&#x5B9E;&#x9645;&#x95EE;&#x9898;&#xFF0C;&#x662F;&#x5426;&#x51CF;&#x5C11;&#x9057;&#x6F0F;&#x3001;&#x8BEF;&#x5224;&#x6216;&#x8FD4;&#x5DE5;&#xFF0C;&#x6536;&#x76CA;&#x662F;&#x5426;&#x8986;&#x76D6;&#x65B0;&#x589E;&#x6210;&#x672C;&#x3002;&#x5404;&#x9879;&#x80FD;&#x529B;&#x53EF;&#x4EE5;&#x4EA4;&#x9519;&#x5F62;&#x6210;&#xFF0C;&#x6682;&#x65F6;&#x65E0;&#x6536;&#x76CA;&#x7684;&#x6539;&#x52A8;&#x4FDD;&#x7559;&#x5F85;&#x9A8C;&#x8BC1;&#x6216;&#x64A4;&#x56DE;&#x3002;</p>
<h2 id="&#x5173;&#x8054;&#x65B9;&#x6848;"><a href="#&#x5173;&#x8054;&#x65B9;&#x6848;"></a>&#x5173;&#x8054;&#x65B9;&#x6848;</h2>
<ul>
<li><a href="./Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%8F%8D%E9%A6%88%E9%87%87%E9%9B%86.md">Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;</a>&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8303;&#x56F4;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;&#x539F;&#x5219;&#x3002;</li>
<li><a href="./%E8%AF%84%E4%BC%B0%E4%B8%96%E7%95%8C%E8%90%83%E5%8F%96%EF%BC%9A%E4%B8%8E%20Skill%20%E5%8D%8F%E5%90%8C%E6%BC%94%E8%BF%9B%E7%9A%84%E9%AA%8C%E8%AF%81%E6%9C%BA%E5%88%B6.md">&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#xFF1A;&#x4E0E; Skill &#x534F;&#x540C;&#x6F14;&#x8FDB;&#x7684;&#x9A8C;&#x8BC1;&#x673A;&#x5236;</a>&#xFF1A;&#x73AF;&#x5883;&#x6062;&#x590D;&#x3001;&#x8BC4;&#x4EF7;&#x6821;&#x9A8C;&#x4E0E; Skill &#x9A8C;&#x8BC1;&#x3002;</li>
<li><a href="./%E9%9D%A2%E5%90%91%20RSI%20%E7%9A%84%20Coding%20Agent%EF%BC%9A%E4%BB%8E%E4%BB%BB%E5%8A%A1%E5%8F%8D%E9%A6%88%E5%88%B0%E6%96%B9%E6%B3%95%E8%BF%AD%E4%BB%A3.md">&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;</a>&#xFF1A;&#x5DE5;&#x7A0B;&#x7ECF;&#x9A8C;&#x4E0E;&#x63D0;&#x70BC;&#x65B9;&#x6CD5;&#x7684;&#x9012;&#x5F52;&#x6539;&#x8FDB;&#x3002;</li>
</ul>
`,F=[{level:1,title:"Agent 改进工作空间：任务修订与知识演进机制",children:[{level:2,title:"背景与目标",children:[]},{level:2,title:"中心化工作区",children:[]},{level:2,title:"一轮反馈如何驱动修订",children:[{level:3,title:"示例：标题栏组件选型",children:[]}]},{level:2,title:"提炼能力如何形成",children:[{level:3,title:"从修订中沉淀工程知识",children:[]},{level:3,title:"从提炼反馈改进 Creator",children:[]}]},{level:2,title:"知识使用与效果追踪",children:[{level:3,title:"FE 示例：点位发现、可视化与标记",children:[]},{level:3,title:"从点位标记汇总效果",children:[]}]},{level:2,title:"从任务流选择评估场景",children:[]},{level:2,title:"启动与扩展条件",children:[]},{level:2,title:"关联方案",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
