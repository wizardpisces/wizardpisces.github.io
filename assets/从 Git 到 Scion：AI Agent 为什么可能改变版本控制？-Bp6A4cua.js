const x={},F=`<!-- 写作锚点
读者收获：理解高并发、短生命周期的 Agent 任务，为何可能改变版本控制对客户端自治和基础设施共享的取舍。
核心判断：工作负载变化后，版本控制需要优化的对象也会变化，集中管理会将客户端复杂性转移到基础设施。
如何推进：从 Git 的本地仓库成本进入 Scion，沿三个文件解释 Changeset，再通过共享文档与 SVN 对照，说明架构取舍和代价。
-->
<h1 id="&#x4ECE; Git &#x5230; Scion&#xFF1A;AI Agent &#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x7248;&#x672C;&#x63A7;&#x5236;&#xFF1F;"><a href="#&#x4ECE; Git &#x5230; Scion&#xFF1A;AI Agent &#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x7248;&#x672C;&#x63A7;&#x5236;&#xFF1F;"></a>&#x4ECE; Git &#x5230; Scion&#xFF1A;AI Agent &#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x7248;&#x672C;&#x63A7;&#x5236;&#xFF1F;</h1>
<p>&#x5F53;&#x6570;&#x767E;&#x4E2A; AI Agent &#x540C;&#x65F6;&#x53C2;&#x4E0E;&#x4E00;&#x4E2A;&#x4EE3;&#x7801;&#x4ED3;&#x5E93;&#x7684;&#x5F00;&#x53D1;&#xFF0C;&#x6BCF;&#x4E2A; Agent &#x771F;&#x7684;&#x8FD8;&#x9700;&#x8981;&#x4E00;&#x5957;&#x5B8C;&#x6574;&#x7684;&#x672C;&#x5730;&#x4ED3;&#x5E93;&#x5417;&#xFF1F;</p>
<p>&#x8FD9;&#x65E2;&#x662F;&#x8D44;&#x6E90;&#x4F18;&#x5316;&#x95EE;&#x9898;&#xFF0C;&#x4E5F;&#x6D89;&#x53CA;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x7684;&#x57FA;&#x672C;&#x67B6;&#x6784;&#xFF1A;&#x4EE3;&#x7801;&#x5E94;&#x8BE5;&#x5B58;&#x5728;&#x54EA;&#x91CC;&#xFF1F;&#x7248;&#x672C;&#x72B6;&#x6001;&#x7531;&#x8C01;&#x7EF4;&#x62A4;&#xFF1F;&#x591A;&#x4E2A; Agent &#x5982;&#x4F55;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x3001;&#x63D0;&#x4EA4;&#x53D8;&#x66F4;&#x548C;&#x5B8C;&#x6210;&#x5408;&#x5E76;&#xFF1F;</p>
<p>Git &#x7684;&#x8BBE;&#x8BA1;&#x975E;&#x5E38;&#x6210;&#x529F;&#xFF0C;&#x4F46;&#x5B83;&#x8BDE;&#x751F;&#x65F6;&#x4E3B;&#x8981;&#x9762;&#x5BF9;&#x7684;&#x662F;&#x4EBA;&#x7C7B;&#x5F00;&#x53D1;&#x8005;&#x3002;&#x5F00;&#x53D1;&#x8005;&#x62E5;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x672C;&#x5730;&#x4ED3;&#x5E93;&#xFF0C;&#x72EC;&#x7ACB;&#x5DE5;&#x4F5C;&#xFF0C;&#x518D;&#x901A;&#x8FC7; Push &#x548C; Pull &#x4E0E;&#x5176;&#x4ED6;&#x4EBA;&#x534F;&#x4F5C;&#x3002;</p>
<p>AI Agent &#x5E26;&#x6765;&#x4E86;&#x4E0D;&#x540C;&#x7684;&#x5DE5;&#x4F5C;&#x6A21;&#x5F0F;&#xFF1A;&#x5927;&#x91CF;&#x4EFB;&#x52A1;&#x5E76;&#x53D1;&#x6267;&#x884C;&#xFF0C;&#x5DE5;&#x4F5C;&#x533A;&#x4F7F;&#x7528;&#x65F6;&#x95F4;&#x77ED;&#xFF0C;&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC1;&#x90FD;&#x5F88;&#x9891;&#x7E41;&#xFF0C;&#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x53EF;&#x80FD;&#x53EA;&#x4FEE;&#x6539;&#x51E0;&#x4E2A;&#x6587;&#x4EF6;&#x3002;</p>
<p>Anthropic &#x63A8;&#x51FA;&#x7684; Scion&#xFF0C;&#x6B63;&#x662F;&#x5728;&#x63A2;&#x7D22;&#x8FD9;&#x79CD;&#x65B0;&#x5DE5;&#x4F5C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x662F;&#x5426;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x3002;</p>
<p>&#x5B83;&#x6700;&#x503C;&#x5F97;&#x5173;&#x6CE8;&#x7684;&#x5730;&#x65B9;&#xFF0C;&#x4E0D;&#x662F;&#x53D1;&#x660E;&#x4E86;&#x4E00;&#x79CD;&#x6BD4; Git Diff &#x66F4;&#x5148;&#x8FDB;&#x7684;&#x5DEE;&#x5F02;&#x8BB0;&#x5F55;&#x65B9;&#x5F0F;&#xFF0C;&#x800C;&#x662F;&#x91CD;&#x65B0;&#x7EC4;&#x7EC7;&#x4E86;&#x5BA2;&#x6237;&#x7AEF;&#x3001;&#x670D;&#x52A1;&#x7AEF;&#x548C;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x3002;</p>
<h2 id="1. Git &#x7684;&#x8BBE;&#x8BA1;&#x5047;&#x8BBE;&#xFF0C;&#x9047;&#x5230;&#x4E86;&#x65B0;&#x7684;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;"><a href="#1. Git &#x7684;&#x8BBE;&#x8BA1;&#x5047;&#x8BBE;&#xFF0C;&#x9047;&#x5230;&#x4E86;&#x65B0;&#x7684;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;"></a>1. Git &#x7684;&#x8BBE;&#x8BA1;&#x5047;&#x8BBE;&#xFF0C;&#x9047;&#x5230;&#x4E86;&#x65B0;&#x7684;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;</h2>
<p>Git &#x662F;&#x5206;&#x5E03;&#x5F0F;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x3002;&#x6BCF;&#x4E2A;&#x5F00;&#x53D1;&#x8005;&#x901A;&#x5E38;&#x62E5;&#x6709;&#x4E00;&#x4EFD;&#x672C;&#x5730;&#x4ED3;&#x5E93;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x672C;&#x5730;&#x521B;&#x5EFA;&#x5206;&#x652F;&#x3001;&#x63D0;&#x4EA4;&#x4EE3;&#x7801;&#x3001;&#x67E5;&#x770B;&#x5386;&#x53F2;&#xFF0C;&#x6700;&#x540E;&#x518D;&#x4E0E;&#x8FDC;&#x7AEF;&#x540C;&#x6B65;&#x3002;</p>
<pre><code class="language-text">             Git Server
            /     |     \\
       Agent A  Agent B  Agent C
          |        |        |
       Local     Local     Local
       Repo      Repo      Repo
          |        |        |
       Commit    Commit    Commit
          \\        |       /
                 Push
</code></pre>
<p>&#x8FD9;&#x79CD;&#x8BBE;&#x8BA1;&#x5F88;&#x9002;&#x5408;&#x4EBA;&#x7C7B;&#x5F00;&#x53D1;&#x8005;&#x3002;</p>
<p>&#x4E00;&#x4E2A;&#x5F00;&#x53D1;&#x8005;&#x901A;&#x5E38;&#x957F;&#x671F;&#x4F7F;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x5DE5;&#x4F5C;&#x533A;&#xFF0C;&#x4ED3;&#x5E93;&#x6570;&#x636E;&#x53EF;&#x4EE5;&#x53CD;&#x590D;&#x5229;&#x7528;&#x3002;&#x5373;&#x4F7F;&#x65AD;&#x7F51;&#xFF0C;&#x4E5F;&#x80FD;&#x7EE7;&#x7EED;&#x63D0;&#x4EA4;&#x548C;&#x67E5;&#x770B;&#x5386;&#x53F2;&#x3002;</p>
<p>&#x4F46; Agent &#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x4E0D;&#x540C;&#xFF1A;</p>
<ul>
<li>&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x53EF;&#x80FD;&#x542F;&#x52A8;&#x591A;&#x4E2A; Agent &#x5E76;&#x884C;&#x5904;&#x7406;&#xFF1B;</li>
<li>&#x6BCF;&#x4E2A; Agent &#x53EF;&#x80FD;&#x53EA;&#x4FEE;&#x6539;&#x5C11;&#x91CF;&#x6587;&#x4EF6;&#xFF1B;</li>
<li>Agent &#x751F;&#x547D;&#x5468;&#x671F;&#x77ED;&#xFF0C;&#x4EFB;&#x52A1;&#x7ED3;&#x675F;&#x540E;&#x5DE5;&#x4F5C;&#x533A;&#x53EF;&#x80FD;&#x88AB;&#x9500;&#x6BC1;&#xFF1B;</li>
<li>&#x5927;&#x91CF;&#x4EFB;&#x52A1;&#x9700;&#x8981;&#x9891;&#x7E41;&#x521B;&#x5EFA;&#x3001;&#x68C0;&#x51FA;&#x548C;&#x5408;&#x5E76;&#x5DE5;&#x4F5C;&#x533A;&#x3002;</li>
</ul>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A; Monorepo &#x6709; 100 GB &#x6570;&#x636E;&#xFF0C;&#x4E00;&#x4E2A; Agent &#x53EA;&#x9700;&#x8981;&#x4FEE;&#x6539;&#x652F;&#x4ED8;&#x6A21;&#x5757;&#x7684;&#x4E09;&#x4E2A;&#x6587;&#x4EF6;&#x3002;</p>
<p>&#x5982;&#x679C;&#x540C;&#x65F6;&#x542F;&#x52A8;&#x6570;&#x767E;&#x4E2A; Agent&#xFF0C;&#x9664;&#x4E86;&#x4FEE;&#x6539;&#x8FD9;&#x4E09;&#x4E2A;&#x6587;&#x4EF6;&#xFF0C;&#x8FD8;&#x8981;&#x9AD8;&#x6548;&#x5730;&#x521B;&#x5EFA;&#x3001;&#x7BA1;&#x7406;&#x548C;&#x56DE;&#x6536;&#x5927;&#x91CF;&#x5DE5;&#x4F5C;&#x533A;&#xFF0C;&#x907F;&#x514D;&#x91CD;&#x590D;&#x7EF4;&#x62A4;&#x548C;&#x5904;&#x7406;&#x76F8;&#x540C;&#x7684;&#x4ED3;&#x5E93;&#x6570;&#x636E;&#x3002;</p>
<p>Git &#x5DF2;&#x7ECF;&#x6709;&#x6D45;&#x514B;&#x9686;&#x3001;Sparse Checkout&#x3001;Partial Clone &#x7B49;&#x4F18;&#x5316;&#x624B;&#x6BB5;&#x3002;&#x4F46;&#x8FD9;&#x4E9B;&#x4F18;&#x5316;&#x5E76;&#x6CA1;&#x6709;&#x6539;&#x53D8;&#x5B83;&#x56F4;&#x7ED5;&#x5BA2;&#x6237;&#x7AEF;&#x672C;&#x5730;&#x4ED3;&#x5E93;&#x7EC4;&#x7EC7;&#x5DE5;&#x4F5C;&#x7684;&#x57FA;&#x672C;&#x6A21;&#x5F0F;&#x3002;</p>
<p>&#x95EE;&#x9898;&#x7531;&#x6B64;&#x53D8;&#x6210;&#xFF1A;</p>
<p><strong>&#x5F53;&#x5927;&#x91CF; Agent &#x53EA;&#x9700;&#x8981;&#x4ED3;&#x5E93;&#x7684;&#x4E00;&#x5C0F;&#x90E8;&#x5206;&#xFF0C;&#x5374;&#x8981;&#x9891;&#x7E41;&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC1;&#x5DE5;&#x4F5C;&#x73AF;&#x5883;&#x65F6;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A; Agent &#x90FD;&#x72EC;&#x7ACB;&#x7EF4;&#x62A4;&#x4E00;&#x5957;&#x4ED3;&#x5E93;&#xFF0C;&#x8FD8;&#x662F;&#x6700;&#x5408;&#x9002;&#x7684;&#x65B9;&#x6848;&#x5417;&#xFF1F;</strong></p>
<h2 id="2. Scion&#xFF1A;&#x4ECE;&#x5BA2;&#x6237;&#x7AEF;&#x81EA;&#x6CBB;&#x5230;&#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;"><a href="#2. Scion&#xFF1A;&#x4ECE;&#x5BA2;&#x6237;&#x7AEF;&#x81EA;&#x6CBB;&#x5230;&#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;"></a>2. Scion&#xFF1A;&#x4ECE;&#x5BA2;&#x6237;&#x7AEF;&#x81EA;&#x6CBB;&#x5230;&#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;</h2>
<p>Scion &#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x4E86;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x7684;&#x67B6;&#x6784;&#xFF0C;&#x53D8;&#x5316;&#x4E0D;&#x6B62;&#x662F;&#x7ED9; Git &#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x8FDC;&#x7A0B;&#x670D;&#x52A1;&#x5668;&#x3002;</p>
<p>&#x5728; Git &#x4E2D;&#xFF0C;&#x5BA2;&#x6237;&#x7AEF;&#x6301;&#x6709;&#x4ED3;&#x5E93;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x5728;&#x672C;&#x5730;&#x6267;&#x884C;&#x5927;&#x91CF;&#x7248;&#x672C;&#x63A7;&#x5236;&#x64CD;&#x4F5C;&#x3002;</p>
<p>&#x5728; Scion &#x4E2D;&#xFF0C;&#x670D;&#x52A1;&#x7AEF;&#x627F;&#x62C5;&#x6743;&#x5A01;&#x7248;&#x672C;&#x72B6;&#x6001;&#x548C;&#x6838;&#x5FC3;&#x7248;&#x672C;&#x63A7;&#x5236;&#x64CD;&#x4F5C;&#x3002;&#x5BA2;&#x6237;&#x7AEF;&#x4E0D;&#x5FC5;&#x50CF;&#x4F20;&#x7EDF; Git &#x5BA2;&#x6237;&#x7AEF;&#x4E00;&#x6837;&#x6301;&#x6709;&#x5B8C;&#x6574;&#x5386;&#x53F2;&#xFF0C;&#x5DE5;&#x4F5C;&#x533A;&#x4E5F;&#x4E0D;&#x5FC5;&#x5404;&#x81EA;&#x7EF4;&#x62A4;&#x4E00;&#x5957;&#x5B8C;&#x6574;&#x7684;&#x4ED3;&#x5E93;&#x6570;&#x636E;&#x3002;</p>
<pre><code class="language-text">                  Scion Server
          &#x7248;&#x672C;&#x72B6;&#x6001; / &#x5386;&#x53F2; / &#x7248;&#x672C;&#x63A7;&#x5236;&#x64CD;&#x4F5C;
                       |
          +------------+------------+
          |            |            |
       Content       Cache        Index
       Storage       Layer     &#x6D3E;&#x751F;&#x6570;&#x636E;
          |            |            |
          +------------+------------+
                       |
             &#x5171;&#x4EAB;&#x6570;&#x636E;&#x4E0E;&#x670D;&#x52A1;&#x80FD;&#x529B;
                 /     |     \\
             Agent A Agent B Agent C
                |      |      |
             Working Files / Workspace
</code></pre>
<p>&#x8FD9;&#x91CC;&#x9700;&#x8981;&#x533A;&#x5206;&#x4E24;&#x4E2A;&#x6982;&#x5FF5;&#xFF1A;</p>
<ul>
<li>Workspace&#xFF1A;Agent &#x5B9E;&#x9645;&#x6267;&#x884C;&#x4EE3;&#x7801;&#x4EFB;&#x52A1;&#x7684;&#x5DE5;&#x4F5C;&#x533A;&#xFF0C;&#x4ECD;&#x7136;&#x9700;&#x8981;&#x8BFB;&#x53D6;&#x548C;&#x4FEE;&#x6539;&#x6587;&#x4EF6;&#x3002;</li>
<li>Repository&#xFF1A;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x7BA1;&#x7406;&#x7684;&#x7248;&#x672C;&#x6570;&#x636E;&#x3001;&#x5386;&#x53F2;&#x548C;&#x5BF9;&#x8C61;&#x7B49;&#x3002;</li>
</ul>
<p>Scion &#x8BD5;&#x56FE;&#x51CF;&#x5C11;&#x7684;&#x662F;&#x6BCF;&#x4E2A;&#x5BA2;&#x6237;&#x7AEF;&#x72EC;&#x7ACB;&#x7EF4;&#x62A4;&#x5B8C;&#x6574;&#x4ED3;&#x5E93;&#x6570;&#x636E;&#x7684;&#x6210;&#x672C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BA9; Agent &#x4E0D;&#x518D;&#x9700;&#x8981;&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;&#x3002;</p>
<p>&#x8FD9;&#x79CD;&#x67B6;&#x6784;&#x7684;&#x76EE;&#x6807;&#xFF0C;&#x662F;&#x8BA9;&#x591A;&#x4E2A; Agent &#x5C3D;&#x53EF;&#x80FD;&#x5171;&#x4EAB;&#x5E95;&#x5C42;&#x6570;&#x636E;&#x548C;&#x670D;&#x52A1;&#x7AEF;&#x80FD;&#x529B;&#xFF0C;&#x51CF;&#x5C11;&#x5404;&#x81EA;&#x91CD;&#x590D;&#x7EF4;&#x62A4;&#x548C;&#x5904;&#x7406;&#x76F8;&#x540C;&#x4ED3;&#x5E93;&#x4FE1;&#x606F;&#x7684;&#x6210;&#x672C;&#x3002;</p>
<p>&#x7CFB;&#x7EDF;&#x4F18;&#x5316;&#x7684;&#x91CD;&#x70B9;&#x4E5F;&#x968F;&#x4E4B;&#x6539;&#x53D8;&#xFF1A;</p>
<p>&#x4ECE;&#x4F18;&#x5316;&#x5355;&#x4E2A;&#x5F00;&#x53D1;&#x8005;&#x7684;&#x672C;&#x5730;&#x64CD;&#x4F5C;&#xFF0C;&#x8F6C;&#x5411;&#x4F18;&#x5316;&#x5927;&#x91CF;&#x5E76;&#x53D1;&#x4EFB;&#x52A1;&#x7684;&#x5DE5;&#x4F5C;&#x533A;&#x521B;&#x5EFA;&#x3001;&#x6570;&#x636E;&#x8BBF;&#x95EE;&#x548C;&#x7248;&#x672C;&#x63A7;&#x5236;&#x64CD;&#x4F5C;&#x3002;</p>
<h2 id="3. Changeset&#xFF1A;&#x5B83;&#x548C; Git Diff &#x5230;&#x5E95;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;"><a href="#3. Changeset&#xFF1A;&#x5B83;&#x548C; Git Diff &#x5230;&#x5E95;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;"></a>3. Changeset&#xFF1A;&#x5B83;&#x548C; Git Diff &#x5230;&#x5E95;&#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;</h2>
<p>&#x8FD9;&#x662F;&#x7406;&#x89E3; Scion &#x65F6;&#x6700;&#x5BB9;&#x6613;&#x4EA7;&#x751F;&#x8BEF;&#x89E3;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<p>&#x4E00;&#x79CD;&#x5E38;&#x89C1;&#x8BF4;&#x6CD5;&#x662F;&#xFF1A;Git &#x4FDD;&#x5B58;&#x5FEB;&#x7167;&#xFF0C;Scion &#x4FDD;&#x5B58; Diff&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x5E76;&#x4E0D;&#x51C6;&#x786E;&#x3002;</p>
<p>Git &#x5E76;&#x4E0D;&#x662F;&#x6BCF;&#x6B21;&#x63D0;&#x4EA4;&#x90FD;&#x590D;&#x5236;&#x5168;&#x90E8;&#x6587;&#x4EF6;&#x3002;&#x4E00;&#x4E2A; Git Commit &#x6307;&#x5411;&#x4E00;&#x4E2A; Tree&#xFF0C;Tree &#x63CF;&#x8FF0;&#x5F53;&#x524D;&#x7248;&#x672C;&#x7684;&#x76EE;&#x5F55;&#x548C;&#x6587;&#x4EF6;&#x72B6;&#x6001;&#x3002;&#x6587;&#x4EF6;&#x5185;&#x5BB9;&#x5B58;&#x50A8;&#x5728; Blob &#x5BF9;&#x8C61;&#x4E2D;&#xFF0C;&#x901A;&#x8FC7;&#x5185;&#x5BB9;&#x5BFB;&#x5740;&#x548C;&#x5BF9;&#x8C61;&#x590D;&#x7528;&#xFF0C;&#x672A;&#x4FEE;&#x6539;&#x7684;&#x6587;&#x4EF6;&#x53EF;&#x4EE5;&#x7EE7;&#x7EED;&#x5F15;&#x7528;&#x539F;&#x6765;&#x7684; Blob&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">Git Commit A
&#x251C;&#x2500;&#x2500; payment.go -&gt; P1
&#x251C;&#x2500;&#x2500; order.go   -&gt; O1
&#x2514;&#x2500;&#x2500; user.go    -&gt; U1

Git Commit B
&#x251C;&#x2500;&#x2500; payment.go -&gt; P2
&#x251C;&#x2500;&#x2500; order.go   -&gt; O1
&#x2514;&#x2500;&#x2500; user.go    -&gt; U1
</code></pre>
<p>B &#x53EA;&#x4FEE;&#x6539;&#x4E86; <code>payment.go</code>&#xFF0C;&#x5176;&#x4ED6;&#x6587;&#x4EF6;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x5B58;&#x50A8;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF0C;Git &#x672C;&#x8EAB;&#x5DF2;&#x7ECF;&#x5177;&#x5907;&#x5F88;&#x5F3A;&#x7684;&#x589E;&#x91CF;&#x590D;&#x7528;&#x80FD;&#x529B;&#x3002;</p>
<p>Scion &#x7684; Changeset &#x5219;&#x662F;&#x7248;&#x672C;&#x6A21;&#x578B;&#x4E2D;&#x7684;&#x4E00;&#x7B49;&#x6982;&#x5FF5;&#x3002;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x901A;&#x8FC7;&#x7236;&#x7248;&#x672C;&#x548C;&#x672C;&#x6B21;&#x53D8;&#x5316;&#x6765;&#x8868;&#x8FBE;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">Version A
&#x251C;&#x2500;&#x2500; payment.go -&gt; P1
&#x251C;&#x2500;&#x2500; order.go   -&gt; O1
&#x2514;&#x2500;&#x2500; user.go    -&gt; U1
       |
       | Changeset B
       | payment.go: P1 -&gt; P2
       v
Version B
&#x251C;&#x2500;&#x2500; payment.go -&gt; P2
&#x251C;&#x2500;&#x2500; order.go   -&gt; O1
&#x2514;&#x2500;&#x2500; user.go    -&gt; U1
       |
       | Changeset C
       | order.go: O1 -&gt; O2
       v
Version C
&#x251C;&#x2500;&#x2500; payment.go -&gt; P2
&#x251C;&#x2500;&#x2500; order.go   -&gt; O2
&#x2514;&#x2500;&#x2500; user.go    -&gt; U1
</code></pre>
<p>&#x6BCF;&#x4E2A; Changeset &#x5173;&#x8054;&#x7236;&#x7248;&#x672C;&#xFF0C;&#x5E76;&#x8BB0;&#x5F55;&#x76F8;&#x5BF9;&#x4E8E;&#x7236;&#x7248;&#x672C;&#x53D1;&#x751F;&#x7684;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x6CBF;&#x7740;&#x7248;&#x672C;&#x5173;&#x7CFB;&#xFF0C;&#x53EF;&#x4EE5;&#x786E;&#x5B9A;&#x67D0;&#x4E2A;&#x7248;&#x672C;&#x5BF9;&#x5E94;&#x7684;&#x6587;&#x4EF6;&#x72B6;&#x6001;&#x3002;&#x5B9E;&#x9645;&#x7CFB;&#x7EDF;&#x8FD8;&#x4F1A;&#x4F7F;&#x7528;&#x7D22;&#x5F15;&#x548C;&#x6D3E;&#x751F;&#x6570;&#x636E;&#x52A0;&#x901F;&#x67E5;&#x8BE2;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x6B21;&#x4ECE;&#x6700;&#x65E9;&#x7248;&#x672C;&#x5F00;&#x59CB;&#x91CD;&#x653E;&#x6240;&#x6709;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x4E24;&#x8005;&#x7684;&#x533A;&#x522B;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x7406;&#x89E3;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x5BF9;&#x6BD4;&#x7EF4;&#x5EA6;</th>
<th>Git</th>
<th>Scion</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7248;&#x672C;&#x8868;&#x8FBE;</td>
<td>Commit &#x6307;&#x5411;&#x63CF;&#x8FF0;&#x5F53;&#x524D;&#x72B6;&#x6001;&#x7684; Tree</td>
<td>Changeset &#x8868;&#x8FBE;&#x76F8;&#x5BF9;&#x7236;&#x7248;&#x672C;&#x7684;&#x53D8;&#x5316;</td>
</tr>
<tr>
<td>&#x5185;&#x5BB9;&#x5B58;&#x50A8;</td>
<td>Blob &#x5BF9;&#x8C61;&#xFF0C;&#x652F;&#x6301;&#x5185;&#x5BB9;&#x590D;&#x7528;</td>
<td>&#x5185;&#x5BB9;&#x5BFB;&#x5740;&#x7684;&#x5185;&#x5BB9;&#x5B58;&#x50A8;</td>
</tr>
<tr>
<td>&#x7248;&#x672C;&#x5173;&#x7CFB;</td>
<td>Commit &#x901A;&#x8FC7;&#x7236;&#x63D0;&#x4EA4;&#x5173;&#x8054;</td>
<td>Changeset &#x901A;&#x8FC7;&#x7236;&#x7248;&#x672C;&#x5173;&#x8054;</td>
</tr>
<tr>
<td>&#x6838;&#x5FC3;&#x5DE5;&#x4F5C;&#x6A21;&#x5F0F;</td>
<td>&#x5BA2;&#x6237;&#x7AEF;&#x6301;&#x6709;&#x4ED3;&#x5E93;&#x5E76;&#x6267;&#x884C;&#x5927;&#x91CF;&#x64CD;&#x4F5C;</td>
<td>&#x670D;&#x52A1;&#x7AEF;&#x627F;&#x62C5;&#x6743;&#x5A01;&#x72B6;&#x6001;&#x548C;&#x6838;&#x5FC3;&#x64CD;&#x4F5C;</td>
</tr>
</tbody>
</table>
<p><strong>Scion &#x628A; Changeset&#x3001;&#x5185;&#x5BB9;&#x5B58;&#x50A8;&#x3001;&#x5171;&#x4EAB;&#x7F13;&#x5B58;&#x3001;&#x670D;&#x52A1;&#x7AEF;&#x8BA1;&#x7B97;&#x548C;&#x5386;&#x53F2;&#x7D22;&#x5F15;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x8BBE;&#x8BA1;&#xFF0C;&#x7EC4;&#x6210;&#x4E00;&#x5957;&#x5171;&#x4EAB;&#x7684;&#x7248;&#x672C;&#x670D;&#x52A1;&#x3002;</strong></p>
<h2 id="4. &#x5B83;&#x548C; Google Docs &#x7684;&#x534F;&#x540C;&#x7F16;&#x8F91;&#x6709;&#x70B9;&#x50CF;"><a href="#4. &#x5B83;&#x548C; Google Docs &#x7684;&#x534F;&#x540C;&#x7F16;&#x8F91;&#x6709;&#x70B9;&#x50CF;"></a>4. &#x5B83;&#x548C; Google Docs &#x7684;&#x534F;&#x540C;&#x7F16;&#x8F91;&#x6709;&#x70B9;&#x50CF;</h2>
<p>&#x53EF;&#x4EE5;&#x505A;&#x4E00;&#x4E2A;&#x6709;&#x9650;&#x7684;&#x7C7B;&#x6BD4;&#xFF1A;&#x591A;&#x4E2A;&#x53C2;&#x4E0E;&#x8005;&#x4E0D;&#x518D;&#x5404;&#x81EA;&#x7EF4;&#x62A4;&#x4E00;&#x4EFD;&#x5B8C;&#x5168;&#x72EC;&#x7ACB;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x800C;&#x662F;&#x56F4;&#x7ED5;&#x5171;&#x4EAB;&#x72B6;&#x6001;&#x63D0;&#x4EA4;&#x53D8;&#x5316;&#xFF0C;&#x7531;&#x7CFB;&#x7EDF;&#x8D1F;&#x8D23;&#x534F;&#x8C03;&#x3002;</p>
<p>&#x4F46;&#x4E24;&#x8005;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#x5E76;&#x4E0D;&#x76F8;&#x540C;&#x3002;</p>
<p>Google Docs &#x9762;&#x5BF9;&#x7684;&#x662F;&#x5B9E;&#x65F6;&#x534F;&#x540C;&#x7F16;&#x8F91;&#x3002;&#x591A;&#x4E2A;&#x7528;&#x6237;&#x53EF;&#x80FD;&#x540C;&#x65F6;&#x4FEE;&#x6539;&#x540C;&#x4E00;&#x6BB5;&#x6587;&#x5B57;&#xFF0C;&#x7CFB;&#x7EDF;&#x9700;&#x8981;&#x534F;&#x8C03;&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x7F16;&#x8F91;&#x64CD;&#x4F5C;&#xFF0C;&#x5E38;&#x89C1;&#x6280;&#x672F;&#x5305;&#x62EC; OT &#x548C; CRDT&#x3002;</p>
<p>Scion &#x9762;&#x5BF9;&#x7684;&#x662F;&#x4EE3;&#x7801;&#x7248;&#x672C;&#x7BA1;&#x7406;&#x3002;&#x5B83;&#x534F;&#x8C03;&#x7684;&#x662F;&#x6587;&#x4EF6;&#x7EA7;&#x7248;&#x672C;&#x53D8;&#x5316;&#xFF0C;&#x4EE5;&#x53CA;&#x8FD9;&#x4E9B;&#x53D8;&#x5316;&#x4E4B;&#x95F4;&#x7684;&#x7236;&#x5B50;&#x5173;&#x7CFB;&#x3001;&#x5206;&#x652F;&#x548C;&#x5408;&#x5E76;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x7B80;&#x5355;&#x5BF9;&#x6BD4;&#xFF1A;</p>
<pre><code class="language-text">Google Docs
&#x7528;&#x6237;&#x8F93;&#x5165;&#x5B57;&#x7B26;
      |
&#x5B57;&#x7B26;&#x7EA7;&#x64CD;&#x4F5C;&#x534F;&#x8C03;
      |
&#x5171;&#x4EAB;&#x6587;&#x6863;&#x72B6;&#x6001;

Scion
Agent &#x4FEE;&#x6539;&#x6587;&#x4EF6;
      |
&#x6587;&#x4EF6;&#x7EA7;&#x7248;&#x672C;&#x53D8;&#x5316;
      |
&#x7248;&#x672C;&#x5173;&#x7CFB;&#x4E0E;&#x5408;&#x5E76;
</code></pre>
<p>&#x4E24;&#x8005;&#x76F8;&#x4F3C;&#x7684;&#x5730;&#x65B9;&#x5728;&#x4E8E;&#xFF1A;&#x90FD;&#x9700;&#x8981;&#x9762;&#x5BF9;&#x591A;&#x4E2A;&#x53C2;&#x4E0E;&#x8005;&#x540C;&#x65F6;&#x4FEE;&#x6539;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x65F6;&#x7684;&#x534F;&#x8C03;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="5. &#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;&#x4E5F;&#x6709;&#x4EE3;&#x4EF7;"><a href="#5. &#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;&#x4E5F;&#x6709;&#x4EE3;&#x4EF7;"></a>5. &#x670D;&#x52A1;&#x7AEF;&#x534F;&#x8C03;&#x4E5F;&#x6709;&#x4EE3;&#x4EF7;</h2>
<p>&#x628A;&#x66F4;&#x591A;&#x64CD;&#x4F5C;&#x653E;&#x5230;&#x670D;&#x52A1;&#x7AEF;&#xFF0C;&#x53EF;&#x4EE5;&#x51CF;&#x5C11;&#x5BA2;&#x6237;&#x7AEF;&#x91CD;&#x590D;&#x7EF4;&#x62A4;&#x548C;&#x8BA1;&#x7B97;&#xFF0C;&#x4F46;&#x4E5F;&#x4F1A;&#x628A;&#x538B;&#x529B;&#x96C6;&#x4E2D;&#x5230;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x591A;&#x4E2A; Agent &#x540C;&#x65F6;&#x63D0;&#x4EA4;&#x53D8;&#x66F4;&#xFF0C;&#x670D;&#x52A1;&#x7AEF;&#x5C31;&#x9700;&#x8981;&#x5904;&#x7406;&#xFF1A;</p>
<ul>
<li>&#x5927;&#x91CF;&#x5E76;&#x53D1;&#x8BFB;&#x5199;&#x548C;&#x7248;&#x672C;&#x72B6;&#x6001;&#x66F4;&#x65B0;&#xFF1B;</li>
<li>&#x5408;&#x5E76;&#x8BA1;&#x7B97;&#x5E26;&#x6765;&#x7684; CPU &#x548C;&#x5185;&#x5B58;&#x538B;&#x529B;&#xFF1B;</li>
<li>&#x5E76;&#x53D1;&#x8C03;&#x5EA6;&#x3001;&#x8D44;&#x6E90;&#x7ADE;&#x4E89;&#x548C;&#x8BF7;&#x6C42;&#x6392;&#x961F;&#xFF1B;</li>
<li>&#x670D;&#x52A1;&#x7AEF;&#x6545;&#x969C;&#x5BF9;&#x591A;&#x4E2A; Agent &#x7684;&#x540C;&#x65F6;&#x5F71;&#x54CD;&#x3002;</li>
</ul>
<p>&#x800C;&#x4E14;&#xFF0C;&#x670D;&#x52A1;&#x7AEF;&#x5408;&#x5E76;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x51B2;&#x7A81;&#x6D88;&#x5931;&#x3002;</p>
<p>&#x5982;&#x679C;&#x4E24;&#x4E2A; Agent &#x4FEE;&#x6539;&#x4E86;&#x540C;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x7CFB;&#x7EDF;&#x4ECD;&#x7136;&#x9700;&#x8981;&#x5224;&#x65AD;&#x80FD;&#x5426;&#x81EA;&#x52A8;&#x5408;&#x5E76;&#x3002;&#x65E0;&#x6CD5;&#x81EA;&#x52A8;&#x89E3;&#x51B3;&#x65F6;&#xFF0C;&#x4ECD;&#x7136;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x6216; Agent &#x4ECB;&#x5165;&#x3002;</p>
<p>&#x4E00;&#x90E8;&#x5206;&#x539F;&#x672C;&#x5206;&#x6563;&#x5728;&#x5BA2;&#x6237;&#x7AEF;&#x7684;&#x590D;&#x6742;&#x6027;&#xFF0C;&#x5C31;&#x8FD9;&#x6837;&#x8F6C;&#x79FB;&#x5230;&#x4E86;&#x7EDF;&#x4E00;&#x7684;&#x670D;&#x52A1;&#x7AEF;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#xFF0C;&#x5E76;&#x6CA1;&#x6709;&#x6D88;&#x5931;&#x3002;</p>
<p>&#x8FD9;&#x79CD;&#x8BBE;&#x8BA1;&#x662F;&#x5426;&#x5212;&#x7B97;&#xFF0C;&#x53D6;&#x51B3;&#x4E8E;&#x5E76;&#x53D1;&#x89C4;&#x6A21;&#x3001;&#x4EFB;&#x52A1;&#x7279;&#x5F81;&#x548C;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x80FD;&#x529B;&#x3002;</p>
<h2 id="6. &#x8F6F;&#x4EF6;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x90FD;&#x8981;&#x4E3A; Agent &#x91CD;&#x505A;&#x5417;&#xFF1F;"><a href="#6. &#x8F6F;&#x4EF6;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x90FD;&#x8981;&#x4E3A; Agent &#x91CD;&#x505A;&#x5417;&#xFF1F;"></a>6. &#x8F6F;&#x4EF6;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x90FD;&#x8981;&#x4E3A; Agent &#x91CD;&#x505A;&#x5417;&#xFF1F;</h2>
<p>&#x4E0D;&#x5FC5;&#x3002;</p>
<p>Git &#x7684;&#x5206;&#x5E03;&#x5F0F;&#x8BBE;&#x8BA1;&#x6709;&#x660E;&#x786E;&#x4EF7;&#x503C;&#xFF1A;&#x79BB;&#x7EBF;&#x53EF;&#x7528;&#x3001;&#x5BA2;&#x6237;&#x7AEF;&#x81EA;&#x6CBB;&#x3001;&#x751F;&#x6001;&#x6210;&#x719F;&#xFF0C;&#x4E5F;&#x9002;&#x5408;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x56E2;&#x961F;&#x7684;&#x5F00;&#x53D1;&#x65B9;&#x5F0F;&#x3002;</p>
<p>Scion &#x89E3;&#x51B3;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x7C7B;&#x95EE;&#x9898;&#xFF1A;&#x5F53;&#x5927;&#x91CF;&#x77ED;&#x751F;&#x547D;&#x5468;&#x671F; Agent &#x5E76;&#x53D1;&#x64CD;&#x4F5C;&#x540C;&#x4E00;&#x4E2A;&#x5927;&#x578B;&#x4EE3;&#x7801;&#x4ED3;&#x5E93;&#x65F6;&#xFF0C;&#x4F20;&#x7EDF;&#x5BA2;&#x6237;&#x7AEF;&#x4ED3;&#x5E93;&#x6A21;&#x5F0F;&#x53EF;&#x80FD;&#x4EA7;&#x751F;&#x8FC7;&#x9AD8;&#x7684;&#x8D44;&#x6E90;&#x548C;&#x534F;&#x8C03;&#x6210;&#x672C;&#x3002;</p>
<p>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x662F;&#x5426;&#x503C;&#x5F97;&#x4E3A; Agent &#x91CD;&#x6784;&#xFF0C;&#x53EF;&#x4EE5;&#x5148;&#x770B;&#x4E09;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<ol>
<li>Agent &#x662F;&#x5426;&#x5927;&#x91CF;&#x5E76;&#x53D1;&#x8FD0;&#x884C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5C11;&#x91CF;&#x3001;&#x957F;&#x671F;&#x8FD0;&#x884C;&#xFF1F;</li>
<li>&#x662F;&#x5426;&#x5B58;&#x5728;&#x5927;&#x91CF;&#x91CD;&#x590D;&#x7684;&#x6570;&#x636E;&#x7EF4;&#x62A4;&#x3001;&#x68C0;&#x51FA;&#x548C;&#x8BA1;&#x7B97;&#xFF1F;</li>
<li>&#x8FD9;&#x4E9B;&#x91CD;&#x590D;&#x6210;&#x672C;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x6210;&#x4E3A;&#x7CFB;&#x7EDF;&#x7684;&#x4E3B;&#x8981;&#x74F6;&#x9888;&#xFF1F;</li>
</ol>
<p>&#x5982;&#x679C;&#x7B54;&#x6848;&#x90FD;&#x662F;&#x80AF;&#x5B9A;&#x7684;&#xFF0C;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x5C31;&#x6709;&#x610F;&#x4E49;&#x3002;</p>
<p>&#x53CD;&#x8FC7;&#x6765;&#xFF0C;&#x5982;&#x679C;&#x56E2;&#x961F;&#x53EA;&#x6709;&#x51E0;&#x4E2A; Agent&#xFF0C;&#x4ED3;&#x5E93;&#x89C4;&#x6A21;&#x4E5F;&#x4E0D;&#x5927;&#xFF0C;Git &#x7684;&#x73B0;&#x6709;&#x80FD;&#x529B;&#x53EF;&#x80FD;&#x5DF2;&#x7ECF;&#x8DB3;&#x591F;&#x3002;</p>
<p><strong>&#x4E0D;&#x5FC5;&#x56E0;&#x4E3A;&#x6709;&#x4E86; AI Agent &#x5C31;&#x63A8;&#x5012;&#x6240;&#x6709;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#xFF0C;&#x4F46;&#x90A3;&#x4E9B;&#x6309;&#x4EBA;&#x7C7B;&#x5F00;&#x53D1;&#x8005;&#x7684;&#x5DE5;&#x4F5C;&#x4E60;&#x60EF;&#x5B9A;&#x4E0B;&#x7684;&#x5047;&#x8BBE;&#xFF0C;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x8FD8;&#x9002;&#x7528;&#x3002;</strong></p>
<p>Scion &#x63A2;&#x7D22;&#x7684;&#x662F;&#xFF1A;&#x5F53;&#x8F6F;&#x4EF6;&#x5F00;&#x53D1;&#x4ECE;&#x5C11;&#x91CF;&#x4EBA;&#x7C7B;&#x5F00;&#x53D1;&#x8005;&#x8F6C;&#x5411;&#x5927;&#x91CF;&#x5E76;&#x53D1; Agent &#x65F6;&#xFF0C;&#x7248;&#x672C;&#x63A7;&#x5236;&#x7CFB;&#x7EDF;&#x5E94;&#x8BE5;&#x5982;&#x4F55;&#x6F14;&#x8FDB;&#x3002;&#x8FD9;&#x5E76;&#x4E0D;&#x80FD;&#x8BC1;&#x660E; Git &#x5DF2;&#x7ECF;&#x8FC7;&#x65F6;&#x3002;</p>
`,E=[{level:1,title:"从 Git 到 Scion：AI Agent 为什么可能改变版本控制？",children:[{level:2,title:"1. Git 的设计假设，遇到了新的工作负载",children:[]},{level:2,title:"2. Scion：从客户端自治到服务端协调",children:[]},{level:2,title:"3. Changeset：它和 Git Diff 到底有什么区别？",children:[]},{level:2,title:"4. 它和 Google Docs 的协同编辑有点像",children:[]},{level:2,title:"5. 服务端协调也有代价",children:[]},{level:2,title:"6. 软件基础设施都要为 Agent 重做吗？",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
