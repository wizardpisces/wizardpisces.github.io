const x={title:"从固定流程到任务驱动：Main Agent 的 Feature 编排设计",description:"以最小的 Feature、任务与依赖结构实现 Main 编排，支持人工修正、已有成果续跑，并从实际反馈中积累协作经验。"},E=`<h1 id="&#x4ECE;&#x56FA;&#x5B9A;&#x6D41;&#x7A0B;&#x5230;&#x4EFB;&#x52A1;&#x9A71;&#x52A8;&#xFF1A;Main Agent &#x7684; Feature &#x7F16;&#x6392;&#x8BBE;&#x8BA1;"><a href="#&#x4ECE;&#x56FA;&#x5B9A;&#x6D41;&#x7A0B;&#x5230;&#x4EFB;&#x52A1;&#x9A71;&#x52A8;&#xFF1A;Main Agent &#x7684; Feature &#x7F16;&#x6392;&#x8BBE;&#x8BA1;"></a>&#x4ECE;&#x56FA;&#x5B9A;&#x6D41;&#x7A0B;&#x5230;&#x4EFB;&#x52A1;&#x9A71;&#x52A8;&#xFF1A;Main Agent &#x7684; Feature &#x7F16;&#x6392;&#x8BBE;&#x8BA1;</h1>
<h2 id="&#x4E00;&#x3001;&#x80CC;&#x666F;"><a href="#&#x4E00;&#x3001;&#x80CC;&#x666F;"></a>&#x4E00;&#x3001;&#x80CC;&#x666F;</h2>
<p>&#x5F53;&#x524D; FE &#x5F00;&#x53D1;&#x5C06;&#x5927;&#x9700;&#x6C42;&#x6295;&#x5165;&#x56FA;&#x5B9A;&#x9636;&#x6BB5;&#x94FE;&#xFF1A;&#x6280;&#x672F;&#x8BBE;&#x8BA1;&#x3001;&#x63A5;&#x53E3;&#x51C6;&#x5907;&#x3001;&#x4EFB;&#x52A1;&#x62C6;&#x5206;&#x3001;&#x9875;&#x9762;&#x5B9E;&#x73B0;&#x3001;&#x5BA1;&#x6838;&#x4E0E;&#x4EA4;&#x4ED8;&#x3002;&#x65E0;&#x5B9E;&#x9645;&#x4F9D;&#x8D56;&#x7684;&#x5DE5;&#x4F5C;&#x88AB;&#x5F3A;&#x5236;&#x4E32;&#x884C;&#xFF0C;&#x4EBA;&#x5DE5;&#x5230;&#x6700;&#x540E;&#x624D;&#x770B;&#x5230;&#x7ED3;&#x679C;&#xFF1B;Website&#x3001;RN &#x5171;&#x7528;&#x7684; BFF &#x53D8;&#x5316;&#x540E;&#xFF0C;&#x4E0B;&#x6E38;&#x53C8;&#x5BB9;&#x6613;&#x4ECE;&#x5165;&#x53E3;&#x91CD;&#x8DD1;&#x3002;</p>
<p>Main &#x57FA;&#x4E8E;<a href="./Feature%20%E9%A9%B1%E5%8A%A8%E7%9A%84%20Agent%20%E5%BC%80%E5%8F%91%EF%BC%9A%E5%9E%82%E7%9B%B4%E4%BA%A4%E4%BB%98%E4%B8%8E%E5%B1%80%E9%83%A8%E5%8F%8D%E9%A6%88%E9%97%AD%E7%8E%AF.md">Feature &#x5782;&#x76F4;&#x4EA4;&#x4ED8;</a>&#x62C6;&#x5206;&#x548C;&#x6307;&#x6D3E;&#x4EFB;&#x52A1;&#x3002;&#x9996;&#x671F;&#x4ECE; FE &#x7684;&#x7B80;&#x5355;&#x534F;&#x4F5C;&#x5F00;&#x59CB;&#xFF0C;&#x4F8B;&#x5982; BFF &#x63D0;&#x4F9B;&#x534F;&#x8BAE;&#x3001;Website &#x4E0E; RN &#x6D88;&#x8D39;&#x534F;&#x8BAE;&#xFF1B;&#x5177;&#x4F53;&#x901A;&#x4FE1;&#x5185;&#x5BB9;&#x4FDD;&#x7559;&#x5728;&#x5DE5;&#x4F5C;&#x533A;&#x4E2D;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x67B6;&#x6784;"><a href="#&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x67B6;&#x6784;"></a>&#x4E8C;&#x3001;&#x6838;&#x5FC3;&#x67B6;&#x6784;</h2>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x6765;&#x6E90; + &#x5DE5;&#x7A0B; + &#x53EF;&#x7528; Agent + &#x5DF2;&#x6709;&#x7ECF;&#x9A8C;
                  &#x2193;
           Main &#x2192; Feature &#x4E0E;&#x5B50;&#x4EFB;&#x52A1;
                  &#x2195; &#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x4E0E;&#x786E;&#x8BA4;
                &#x6267;&#x884C;&#x5668;
                  &#x2195; &#x8C03;&#x7528;&#x4E0E;&#x7EED;&#x8DD1;
           Website / RN / BFF
                  &#x2193;
           &#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#x4E0E;&#x9A8C;&#x8BC1;&#x4F9D;&#x636E;
                  &#x2514;&#x2192; Main&#xFF1A;&#x7EE7;&#x7EED; / &#x8C03;&#x6574; / &#x8BF7;&#x4EBA;&#x5224;&#x65AD; / &#x4EA4;&#x4ED8;

&#x5171;&#x4EAB;&#x4EFB;&#x52A1;&#x5DE5;&#x4F5C;&#x533A;&#xFF1A;&#x539F;&#x59CB;&#x6765;&#x6E90;&#x3001;&#x4EE3;&#x7801;&#x3001;&#x7F16;&#x6392;&#x3001;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x3001;&#x53CD;&#x9988;&#x4E0E;&#x8BC1;&#x636E;
</code></pre>
<p>Main &#x51B3;&#x5B9A;&#x505A;&#x4EC0;&#x4E48;&#x3001;&#x4EA4;&#x7ED9;&#x8C01;&#x548C;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF1B;&#x5B50; Agent &#x81EA;&#x4E3B;&#x8C03;&#x67E5;&#x3001;&#x5B9E;&#x73B0;&#x548C;&#x9A8C;&#x8BC1;&#x3002;&#x5DE5;&#x4F5C;&#x533A;&#x63D0;&#x4F9B;&#x5171;&#x4EAB;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x7F16;&#x6392;&#x7ED3;&#x6784;&#x53EA;&#x63CF;&#x8FF0;&#x4EFB;&#x52A1;&#x5173;&#x7CFB;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x6838;&#x5FC3;&#x7ED3;&#x6784;"><a href="#&#x4E09;&#x3001;&#x6838;&#x5FC3;&#x7ED3;&#x6784;"></a>&#x4E09;&#x3001;&#x6838;&#x5FC3;&#x7ED3;&#x6784;</h2>
<h3 id="Main &#x8F93;&#x5165;"><a href="#Main &#x8F93;&#x5165;"></a>Main &#x8F93;&#x5165;</h3>
<pre><code class="language-text">MainInput
&#x251C;&#x2500; goal&#xFF1A;&#x672C;&#x6B21;&#x76EE;&#x6807;&#x4E0E;&#x8303;&#x56F4;
&#x251C;&#x2500; sources&#xFF1A;PRD&#x3001;Figma&#x3001;&#x5DF2;&#x6709;&#x534F;&#x8BAE;&#x7B49;&#x6765;&#x6E90;&#x5165;&#x53E3;
&#x251C;&#x2500; agents[]&#xFF1A;&#x8EAB;&#x4EFD;&#x3001;&#x80FD;&#x529B;&#x8BF4;&#x660E;&#x3001;&#x5DE5;&#x7A0B;&#x5165;&#x53E3;&#x3001;&#x8C03;&#x7528;&#x5165;&#x53E3;
&#x2514;&#x2500; knowledge&#xFF1A;&#x5DF2;&#x6709;&#x7ECF;&#x9A8C;&#x5165;&#x53E3;&#x3014;&#x53EF;&#x7F3A;&#x7701;&#x3015;
</code></pre>
<p>Main &#x67E5;&#x9605;&#x5DE5;&#x7A0B;&#x540E;&#x89C4;&#x5212;&#x3002;&#x5B50; Agent &#x4ECE;&#x5DE5;&#x4F5C;&#x533A;&#x8BFB;&#x53D6;&#x5F53;&#x524D; Feature &#x548C;&#x81EA;&#x5DF1;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x6309;&#x9700;&#x56DE;&#x67E5; PRD&#x3001;Figma&#xFF1B;&#x5168;&#x5C40;&#x8981;&#x6C42;&#x4ECD;&#x6709;&#x7EA6;&#x675F;&#x4F5C;&#x7528;&#xFF0C;&#x5199;&#x5165;&#x6743;&#x9650;&#x7531;&#x8FD0;&#x884C;&#x5BBF;&#x4E3B;&#x63A7;&#x5236;&#x3002;</p>
<h3 id="Main &#x8F93;&#x51FA;"><a href="#Main &#x8F93;&#x51FA;"></a>Main &#x8F93;&#x51FA;</h3>
<pre><code class="language-text">Plan
&#x2514;&#x2500; features[]
    &#x251C;&#x2500; id&#x3001;goal&#xFF1A;&#x672C;&#x7247;&#x76EE;&#x6807;&#x4E0E;&#x8FB9;&#x754C;
    &#x251C;&#x2500; acceptance&#xFF1A;&#x9A8C;&#x6536;&#x6761;&#x4EF6;
    &#x2514;&#x2500; tasks[]
        &#x251C;&#x2500; id&#xFF1A;&#x672C;&#x6B21;&#x9700;&#x6C42;&#x5185;&#x552F;&#x4E00;&#x6807;&#x8BC6;
        &#x251C;&#x2500; agent&#xFF1A;&#x6267;&#x884C;&#x8005;
        &#x251C;&#x2500; goal&#xFF1A;&#x672C;&#x6B21;&#x9700;&#x8981;&#x5B8C;&#x6210;&#x7684;&#x5DE5;&#x4F5C;
        &#x251C;&#x2500; dependsOn[]&#xFF1A;&#x524D;&#x7F6E;&#x4EFB;&#x52A1; ID&#x3014;&#x53EF;&#x4E3A;&#x7A7A;&#x3015;
        &#x2514;&#x2500; review&#xFF1A;&#x7ED3;&#x679C;&#x4EA4;&#x7ED9;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x524D;&#xFF0C;&#x662F;&#x5426;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;
</code></pre>
<p>Feature &#x5217;&#x8868;&#x7ED9;&#x51FA;&#x5EFA;&#x8BAE;&#x4EA4;&#x4ED8;&#x987A;&#x5E8F;&#xFF0C;&#x4EFB;&#x52A1;&#x7684; <code>dependsOn</code> &#x8868;&#x8FBE;&#x771F;&#x5B9E;&#x4F9D;&#x8D56;&#x3002;&#x5171;&#x4EAB;&#x5DE5;&#x4F5C;&#x53EA;&#x5B9A;&#x4E49;&#x4E00;&#x6B21;&#xFF0C;&#x591A;&#x4E2A;&#x4EFB;&#x52A1;&#x53EF;&#x4EE5;&#x5F15;&#x7528;&#x5B83;&#xFF1B;&#x5DF2;&#x6709;&#x7ED3;&#x679C;&#x53EF;&#x76F4;&#x63A5;&#x8BFB;&#x53D6;&#xFF0C;&#x4E0D;&#x4E3A;&#x5DF2;&#x7ECF;&#x6EE1;&#x8DB3;&#x7684;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x521B;&#x5EFA;&#x4EFB;&#x52A1;&#x3002;</p>
<p>&#x540C;&#x4E00;&#x4E2A; Agent &#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x540C;&#x8282;&#x70B9;&#x7EE7;&#x7EED;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<pre><code class="language-text">T1&#xFF1A;Agent A&#xFF0C;&#x5B8C;&#x6210;&#x53EF;&#x72EC;&#x7ACB;&#x63A8;&#x8FDB;&#x7684;&#x90E8;&#x5206; &#x2500;&#x2510;
                                 &#x251C;&#x2192; T3&#xFF1A;Agent A&#xFF0C;&#x7ED3;&#x5408;&#x4E24;&#x9879;&#x7ED3;&#x679C;&#x7EE7;&#x7EED;
T2&#xFF1A;Agent B&#xFF0C;&#x63D0;&#x4F9B;&#x6240;&#x9700;&#x7ED3;&#x679C; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

T1.dependsOn = []
T2.dependsOn = []
T3.dependsOn = [T1, T2]
</code></pre>
<p>&#x56FE;&#x7531;&#x4EFB;&#x52A1;&#x5F15;&#x7528;&#x751F;&#x6210;&#x3002;T1&#x3001;T2 &#x5728;&#x8D44;&#x6E90;&#x9694;&#x79BB;&#x65F6;&#x53EF;&#x5E76;&#x884C;&#xFF0C;T3 &#x7B49;&#x524D;&#x7F6E;&#x7ED3;&#x679C;&#x5C31;&#x7EEA;&#x540E;&#x7EE7;&#x7EED;&#xFF1B;&#x5148;&#x4E32;&#x884C;&#x6267;&#x884C;&#x4E5F;&#x4E0D;&#x9700;&#x8981;&#x6539;&#x53D8;&#x56FE;&#x3002;</p>
<p>&#x5207;&#x7247;&#x4ECD;&#x4EE5;&#x8F83;&#x65E9;&#x5F62;&#x6210;&#x53EF;&#x9A8C;&#x6536;&#x884C;&#x4E3A;&#x4E3A;&#x51C6;&#xFF0C;&#x539F;&#x59CB;&#x8981;&#x6C42;&#x5747;&#x9700;&#x6709;&#x5F52;&#x5C5E;&#xFF1B;&#x8BE6;&#x7EC6;&#x6761;&#x4EF6;&#x89C1;<a href="./Feature%20%E9%A9%B1%E5%8A%A8%E7%9A%84%20Agent%20%E5%BC%80%E5%8F%91%EF%BC%9A%E5%9E%82%E7%9B%B4%E4%BA%A4%E4%BB%98%E4%B8%8E%E5%B1%80%E9%83%A8%E5%8F%8D%E9%A6%88%E9%97%AD%E7%8E%AF.md">Feature &#x5212;&#x5206;&#x539F;&#x5219;</a>&#x3002;</p>
<h3 id="&#x5B50; Agent &#x8FD4;&#x56DE;"><a href="#&#x5B50; Agent &#x8FD4;&#x56DE;"></a>&#x5B50; Agent &#x8FD4;&#x56DE;</h3>
<pre><code class="language-text">Result
&#x251C;&#x2500; taskId&#x3001;status&#xFF1A;&#x5B8C;&#x6210; / &#x53D7;&#x963B; / &#x5931;&#x8D25;
&#x2514;&#x2500; record&#xFF1A;&#x5B9E;&#x9645;&#x6210;&#x679C;&#x3001;&#x9A8C;&#x8BC1;&#x8BC1;&#x636E;&#x4E0E;&#x5269;&#x4F59;&#x95EE;&#x9898;&#x7684;&#x8BB0;&#x5F55;&#x5165;&#x53E3;

run(workspace, taskId) &#x2192; Result
resume(workspace, taskId, &#x53CD;&#x9988;&#x6216;&#x8F93;&#x5165;&#x53D8;&#x5316;) &#x2192; Result
</code></pre>
<p>&#x6210;&#x679C;&#x53EF;&#x4EE5;&#x662F;&#x4EE3;&#x7801;&#x3001;&#x534F;&#x8BAE;&#x6216;&#x5176;&#x4ED6;&#x6750;&#x6599;&#xFF0C;&#x6D88;&#x8D39;&#x8005;&#x4ECE;&#x8BB0;&#x5F55;&#x5165;&#x53E3;&#x6309;&#x9700;&#x8BFB;&#x53D6;&#x3002;&#x5BBF;&#x4E3B;&#x4FDD;&#x5B58;&#x4EFB;&#x52A1;&#x4E0E;&#x4F1A;&#x8BDD;&#x5173;&#x8054;&#xFF1B;&#x88AB;&#x786E;&#x8BA4;&#x548C;&#x91C7;&#x7528;&#x7684;&#x5185;&#x5BB9;&#x4FDD;&#x7559;&#x4F9D;&#x636E;&#xFF0C;&#x540E;&#x7EED;&#x53EF;&#x4EE5;&#x6838;&#x5BF9;&#x53D8;&#x5316;&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x6267;&#x884C;&#x4E0E;&#x4EBA;&#x5DE5;&#x4ECB;&#x5165;"><a href="#&#x56DB;&#x3001;&#x6267;&#x884C;&#x4E0E;&#x4EBA;&#x5DE5;&#x4ECB;&#x5165;"></a>&#x56DB;&#x3001;&#x6267;&#x884C;&#x4E0E;&#x4EBA;&#x5DE5;&#x4ECB;&#x5165;</h2>
<pre><code class="language-text">plan = Main.plan(MainInput)
&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x6216;&#x4FEE;&#x6B63;&#xFF1A;Feature&#x3001;&#x6267;&#x884C;&#x8005;&#x3001;&#x987A;&#x5E8F;&#x4E0E;&#x4F9D;&#x8D56;
&#x68C0;&#x67E5;&#xFF1A;&#x8981;&#x6C42;&#x6709;&#x5F52;&#x5C5E;&#xFF0C;Agent &#x5165;&#x53E3;&#x5B58;&#x5728;&#xFF0C;&#x4EFB;&#x52A1;&#x5F15;&#x7528;&#x6709;&#x6548;&#x4E14;&#x65E0;&#x5FAA;&#x73AF;&#x4F9D;&#x8D56;

&#x5FAA;&#x73AF;&#xFF1A;
  &#x4ECE;&#x524D;&#x7F6E;&#x7ED3;&#x679C;&#x5DF2;&#x5C31;&#x7EEA;&#x7684;&#x5F85;&#x6267;&#x884C;&#x4EFB;&#x52A1;&#x4E2D;&#x9009;&#x62E9; &#x2192; run &#x6216; resume
  &#x4FDD;&#x5B58; Result&#xFF1B;review &#x4E3A;&#x771F; &#x2192; &#x7B49;&#x5F85;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x518D;&#x4F9B;&#x4E0B;&#x6E38;&#x4F7F;&#x7528;
  &#x5931;&#x8D25;&#x3001;&#x53D7;&#x963B;&#x6216;&#x4EBA;&#x5DE5;&#x53CD;&#x9988; &#x2192; Main &#x51B3;&#x5B9A;&#x4FEE;&#x8BA2;&#x3001;&#x8C03;&#x6574;&#x5B89;&#x6392;&#x6216;&#x7B49;&#x5F85;&#x8865;&#x5145;
  &#x672C;&#x7247;&#x6EE1;&#x8DB3; acceptance &#x2192; &#x4EBA;&#x5DE5;&#x9A8C;&#x6536; &#x2192; &#x63A8;&#x8FDB;&#x4E0B;&#x4E00;&#x7247;
  &#x5168;&#x90E8;&#x5B8C;&#x6210; &#x2192; &#x5FC5;&#x8981;&#x7684;&#x7EC4;&#x5408;&#x9A8C;&#x6536; &#x2192; &#x4EA4;&#x4ED8;
</code></pre>
<p>&#x72EC;&#x7ACB;&#x4E14;&#x8D44;&#x6E90;&#x9694;&#x79BB;&#x7684;&#x4EFB;&#x52A1;&#x53EF;&#x5E76;&#x884C;&#xFF0C;&#x540C;&#x4E00;&#x5DE5;&#x4F5C;&#x6811;&#x4FDD;&#x6301;&#x4E32;&#x884C;&#xFF1B;&#x521D;&#x7248;&#x53EF;&#x4EE5;&#x5E76;&#x53D1; 1 &#x8D77;&#x6B65;&#x3002;&#x672A;&#x6539;&#x53D8;&#x6761;&#x4EF6;&#x7684;&#x53D7;&#x963B;&#x4EFB;&#x52A1;&#x7B49;&#x5F85;&#x8865;&#x5145;&#xFF0C;&#x4E0D;&#x53CD;&#x590D;&#x542F;&#x52A8;&#x3002;&#x4EBA;&#x5DE5;&#x8BC4;&#x5BA1;&#x65F6;&#x56FA;&#x5B9A;&#x88AB;&#x5BA1;&#x5185;&#x5BB9;&#x3002;</p>
<h2 id="&#x4E94;&#x3001;&#x5C40;&#x90E8;&#x7EED;&#x8DD1;&#x4E0E;&#x7ECF;&#x9A8C;&#x590D;&#x5229;"><a href="#&#x4E94;&#x3001;&#x5C40;&#x90E8;&#x7EED;&#x8DD1;&#x4E0E;&#x7ECF;&#x9A8C;&#x590D;&#x5229;"></a>&#x4E94;&#x3001;&#x5C40;&#x90E8;&#x7EED;&#x8DD1;&#x4E0E;&#x7ECF;&#x9A8C;&#x590D;&#x5229;</h2>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#x53CD;&#x9988; / &#x8F93;&#x5165;&#x6216;&#x4E0A;&#x6E38;&#x7ED3;&#x679C;&#x53D8;&#x5316;
    &#x2192; Main &#x7ED3;&#x5408;&#x4F9D;&#x8D56;&#x4E0E;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x5B9A;&#x4F4D;&#x76F8;&#x5173;&#x5DE5;&#x4F5C;
    &#x2192; &#x5BF9;&#x5E94; Agent &#x68C0;&#x67E5;&#x5B9E;&#x9645;&#x5F71;&#x54CD;
    &#x2192; resume(&#x539F;&#x4EFB;&#x52A1;, &#x5DEE;&#x5F02;&#x4E0E;&#x53CD;&#x9988;)
    &#x2192; &#x53D7;&#x5F71;&#x54CD;&#x9A8C;&#x6536;&#x91CD;&#x5F00;&#x5E76;&#x590D;&#x9A8C;&#xFF0C;&#x65E0;&#x5173;&#x6210;&#x679C;&#x4FDD;&#x7559;
</code></pre>
<p>&#x4F9D;&#x8D56;&#x8F85;&#x52A9;&#x5B9A;&#x4F4D;&#xFF0C;&#x5B9E;&#x9645;&#x5F71;&#x54CD;&#x7531; Agent &#x7ED3;&#x5408;&#x5DE5;&#x7A0B;&#x5224;&#x65AD;&#x3002;&#x4F1A;&#x8BDD;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x65F6;&#xFF0C;&#x4F9D;&#x636E;&#x73B0;&#x6709;&#x4EE3;&#x7801;&#x3001;&#x8BB0;&#x5F55;&#x548C;&#x5F85;&#x529E;&#x7EE7;&#x7EED;&#xFF1B;&#x4FEE;&#x6B63;&#x5207;&#x7247;&#x6216;&#x6307;&#x6D3E;&#x65F6;&#x66F4;&#x65B0; Plan&#x3002;</p>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x8BB0;&#x5F55;&#xFF1A;&#x539F;&#x5B89;&#x6392; &#x2192; &#x65B0;&#x5B89;&#x6392; &#x2192; &#x539F;&#x56E0; &#x2192; &#x6267;&#x884C;&#x540E;&#x7684;&#x5B9E;&#x9645;&#x6548;&#x679C;
                                &#x2193;
&#x5019;&#x9009;&#x7ECF;&#x9A8C; &#x2192; &#x540E;&#x7EED; Main &#x53C2;&#x8003; &#x2192; &#x65B0;&#x4EFB;&#x52A1;&#x9A8C;&#x8BC1; &#x2192; &#x4FDD;&#x7559; / &#x4FEE;&#x8BA2; / &#x64A4;&#x56DE;
</code></pre>
<p>&#x590D;&#x5229;&#x6765;&#x81EA;&#x5207;&#x7247;&#x548C;&#x534F;&#x4F5C;&#x5B89;&#x6392;&#x9010;&#x6B65;&#x6539;&#x5584;&#x3002;&#x5148;&#x4FDD;&#x7559;&#x4FEE;&#x6B63;&#x4E0E;&#x7ED3;&#x679C;&#xFF0C;&#x518D;&#x6309;<a href="./material-first/Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%BB%BB%E5%8A%A1%E4%BF%AE%E8%AE%A2%E4%B8%8E%E7%9F%A5%E8%AF%86%E6%BC%94%E8%BF%9B%E6%9C%BA%E5%88%B6.md">&#x4EFB;&#x52A1;&#x4FEE;&#x8BA2;&#x4E0E;&#x77E5;&#x8BC6;&#x6F14;&#x8FDB;&#x673A;&#x5236;</a>&#x63D0;&#x70BC;&#x9002;&#x7528;&#x6761;&#x4EF6;&#x660E;&#x786E;&#x7684;&#x7ECF;&#x9A8C;&#x3002;</p>
<h2 id="&#x516D;&#x3001;&#x843D;&#x5730;&#x987A;&#x5E8F;"><a href="#&#x516D;&#x3001;&#x843D;&#x5730;&#x987A;&#x5E8F;"></a>&#x516D;&#x3001;&#x843D;&#x5730;&#x987A;&#x5E8F;</h2>
<p>&#x6CBF;&#x7528;<a href="./%E4%BB%8E%E4%B8%B2%E8%A1%8C%E4%BA%A4%E6%8E%A5%E5%88%B0%E6%8C%81%E7%BB%AD%E5%8D%8F%E4%BD%9C%EF%BC%9ACoding%20Agent%20%E7%9A%84%E4%BB%BB%E5%8A%A1%E5%B7%A5%E4%BD%9C%E5%8C%BA%E8%AE%BE%E8%AE%A1.md">Agentic &#x5DE5;&#x4F5C;&#x533A;</a>&#xFF0C;&#x6700;&#x5C0F;&#x6301;&#x4E45;&#x5316;&#x5165;&#x53E3;&#xFF1A;</p>
<pre><code class="language-text">workspace/
&#x251C;&#x2500; task.md&#x3001;sources/      &#x76EE;&#x6807;&#x4E0E;&#x539F;&#x59CB;&#x6765;&#x6E90;
&#x251C;&#x2500; agents/               &#x5B50; Agent &#x80FD;&#x529B;&#x8BF4;&#x660E;&#x4E0E;&#x8C03;&#x7528;&#x5165;&#x53E3;
&#x251C;&#x2500; plan.json             Feature&#x3001;&#x4EFB;&#x52A1;&#x4E0E;&#x4F9D;&#x8D56;
&#x251C;&#x2500; repos/                &#x5B9E;&#x9645;&#x5DE5;&#x7A0B;
&#x2514;&#x2500; runs/                 &#x6267;&#x884C;&#x7ED3;&#x679C;&#x3001;&#x8F93;&#x5165;&#x4F9D;&#x636E;&#x3001;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x4E0E;&#x5386;&#x53F2;&#x5B89;&#x6392;
</code></pre>
<ol>
<li>&#x9002;&#x914D;&#x73B0;&#x6709; Agent &#x7684;&#x5C40;&#x90E8;&#x6267;&#x884C;&#x548C;&#x7EED;&#x8DD1;&#x5165;&#x53E3;&#xFF0C;&#x5B9E;&#x73B0; MainInput&#x3001;Plan&#x3001;Result&#xFF0C;&#x5148;&#x8DD1;&#x901A;&#x4E00;&#x7247;&#x4E0E;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;&#x3002;</li>
<li>&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x4E0A;&#x6E38;&#x63D0;&#x4F9B;&#x7ED3;&#x679C;&#x3001;&#x4E0B;&#x6E38;&#x6D88;&#x8D39;&#x7ED3;&#x679C;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x6539;&#x53D8;&#x4E00;&#x6B21;&#x8F93;&#x5165;&#xFF0C;&#x68C0;&#x67E5;&#x5C40;&#x90E8;&#x7EED;&#x8DD1;&#x548C;&#x6210;&#x679C;&#x4FDD;&#x7559;&#xFF1B;BFF &#x4E0E;&#x7AEF;&#x7684;&#x534F;&#x8BAE;&#x534F;&#x4F5C;&#x53EF;&#x4F5C;&#x4E3A;&#x9996;&#x4E2A;&#x5B9E;&#x4F8B;&#x3002;</li>
<li>&#x6839;&#x636E;&#x5B9E;&#x9645;&#x7F3A;&#x53E3;&#x6F14;&#x5316;&#x7ED3;&#x6784;&#xFF0C;&#x89C2;&#x5BDF;&#x9996;&#x4E2A;&#x53EF;&#x9A8C;&#x6536;&#x6210;&#x679C;&#x8017;&#x65F6;&#x3001;&#x8FD4;&#x5DE5;&#x8303;&#x56F4;&#x548C;&#x603B;&#x6210;&#x672C;&#x3002;</li>
</ol>
`,F=[{level:1,title:"从固定流程到任务驱动：Main Agent 的 Feature 编排设计",children:[{level:2,title:"一、背景",children:[]},{level:2,title:"二、核心架构",children:[]},{level:2,title:"三、核心结构",children:[{level:3,title:"Main 输入",children:[]},{level:3,title:"Main 输出",children:[]},{level:3,title:"子 Agent 返回",children:[]}]},{level:2,title:"四、执行与人工介入",children:[]},{level:2,title:"五、局部续跑与经验复利",children:[]},{level:2,title:"六、落地顺序",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
