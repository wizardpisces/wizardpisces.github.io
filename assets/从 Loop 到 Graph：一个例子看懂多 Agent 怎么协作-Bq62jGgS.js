const x={},F=`<h1 id="&#x4ECE; Loop &#x5230; Graph Engineering&#xFF1A;&#x5F53;&#x4E00;&#x4EF6;&#x4E8B;&#x53D8;&#x6210;&#x591A;&#x6761;&#x652F;&#x7EBF;"><a href="#&#x4ECE; Loop &#x5230; Graph Engineering&#xFF1A;&#x5F53;&#x4E00;&#x4EF6;&#x4E8B;&#x53D8;&#x6210;&#x591A;&#x6761;&#x652F;&#x7EBF;"></a>&#x4ECE; Loop &#x5230; Graph Engineering&#xFF1A;&#x5F53;&#x4E00;&#x4EF6;&#x4E8B;&#x53D8;&#x6210;&#x591A;&#x6761;&#x652F;&#x7EBF;</h1>
<p>&#x8FD9;&#x7BC7;&#x63A5;&#x7740;<a href="../ai-%E5%8F%AF%E9%9D%A0Agent/%E4%BB%8E%20Prompt%20%E5%88%B0%20Loop%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%E7%9C%8B%E6%87%82%20AI%20%E5%B7%A5%E7%A8%8B%E7%9A%84%E5%9B%9B%E6%AC%A1%E5%8D%87%E7%BA%A7.md">&#x300A;&#x4ECE; Prompt &#x5230; Loop Engineering&#xFF1A;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#x7684;&#x56DB;&#x6B21;&#x5347;&#x7EA7;&#x300B;</a>&#x5F80;&#x5916;&#x8BB2;&#x3002;&#x5148;&#x628A; Loop &#x7406;&#x89E3;&#x6210;&#x201C;&#x505A;&#x3001;&#x68C0;&#x67E5;&#x3001;&#x4E0D;&#x5408;&#x683C;&#x5C31;&#x91CD;&#x8BD5;&#x201D;&#x7684;&#x5C0F;&#x5FAA;&#x73AF;&#x5C31;&#x591F;&#x4E86;&#x3002;</p>
<p>&#x8FD8;&#x662F;&#x201C;&#x590F;&#x65E5;&#x8BFB;&#x4E66;&#x4F1A;&#x201D;&#xFF0C;&#x53EA;&#x662F;&#x4EFB;&#x52A1;&#x591A;&#x4E86;&#x4E00;&#x70B9;&#x3002;</p>
<h2 id="&#x53EA;&#x8981;&#x4E00;&#x6761;&#x6587;&#x6848;&#xFF1A;&#x4E00;&#x4E2A; Loop"><a href="#&#x53EA;&#x8981;&#x4E00;&#x6761;&#x6587;&#x6848;&#xFF1A;&#x4E00;&#x4E2A; Loop"></a>&#x53EA;&#x8981;&#x4E00;&#x6761;&#x6587;&#x6848;&#xFF1A;&#x4E00;&#x4E2A; Loop</h2>
<p>&#x8FD0;&#x8425;&#x7ED9;&#x51FA;&#x6D3B;&#x52A8;&#x8D44;&#x6599;&#xFF0C;&#x6587;&#x6848; Agent &#x5199;&#x7A3F;&#x3002;&#x7A0B;&#x5E8F;&#x68C0;&#x67E5;&#x5B57;&#x6570;&#x548C;&#x7981;&#x7528;&#x8BCD;&#xFF1B;&#x4E0D;&#x5408;&#x683C;&#x5C31;&#x5E26;&#x7740;&#x95EE;&#x9898;&#x91CD;&#x5199;&#xFF0C;&#x6700;&#x591A;&#x4E09;&#x6B21;&#x3002;&#x5408;&#x683C;&#x540E;&#x4EA4;&#x8FD0;&#x8425;&#x3002;</p>
<pre><code class="language-text">&#x6D3B;&#x52A8;&#x8D44;&#x6599;
   &#x2502;
   &#x25BC;
&#x5199;&#x6587;&#x6848;
   &#x2502;
   &#x25BC;
&#x68C0;&#x67E5; &#x2500;&#x2500; &#x5408;&#x683C; &#x2500;&#x2500;&#x2192; &#x8FD0;&#x8425;&#x5BA1;&#x6838;
   &#x2502;
   &#x2514;&#x2500;&#x2500; &#x4E0D;&#x5408;&#x683C; &#x2500;&#x2500;&#x2192; &#x5E26;&#x7740;&#x95EE;&#x9898;&#x91CD;&#x5199;
                         &#x2502;
                         &#x2514;&#x2500;&#x2500;&#x2192; &#x68C0;&#x67E5;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; Loop&#xFF1A;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;&#x53CD;&#x590D;&#x505A;&#x3001;&#x53CD;&#x590D;&#x68C0;&#x67E5;&#xFF0C;&#x76F4;&#x5230;&#x901A;&#x8FC7;&#x6216;&#x505C;&#x6B62;&#x3002;</p>
<p>&#x6587;&#x6848;&#x6CA1;&#x8FC7;&#xFF0C;&#x53EA;&#x6709;&#x6587;&#x6848;&#x9700;&#x8981;&#x91CD;&#x5199;&#x3002;&#x5230;&#x8FD9;&#x91CC;&#x4E0D;&#x9700;&#x8981; Graph&#xFF0C;&#x66F4;&#x4E0D;&#x9700;&#x8981;&#x4E3A;&#x4E86;&#x51D1;&#x6570;&#x62C6;&#x51FA;&#x51E0;&#x4E2A; Agent&#x3002;</p>
<h2 id="&#x540C;&#x4E00;&#x573A;&#x6D3B;&#x52A8;&#xFF0C;&#x8981;&#x540C;&#x65F6;&#x4E0A;&#x7EBF;&#x4E09;&#x6837;&#x4E1C;&#x897F;"><a href="#&#x540C;&#x4E00;&#x573A;&#x6D3B;&#x52A8;&#xFF0C;&#x8981;&#x540C;&#x65F6;&#x4E0A;&#x7EBF;&#x4E09;&#x6837;&#x4E1C;&#x897F;"></a>&#x540C;&#x4E00;&#x573A;&#x6D3B;&#x52A8;&#xFF0C;&#x8981;&#x540C;&#x65F6;&#x4E0A;&#x7EBF;&#x4E09;&#x6837;&#x4E1C;&#x897F;</h2>
<p>&#x73B0;&#x5728;&#x8FD0;&#x8425;&#x7684;&#x8981;&#x6C42;&#x53D8;&#x6210;&#xFF1A;&#x516C;&#x4F17;&#x53F7;&#x6587;&#x6848;&#x3001;&#x6D3B;&#x52A8;&#x6D77;&#x62A5;&#x3001;&#x5C0F;&#x7A0B;&#x5E8F;&#x62A5;&#x540D;&#x9875;&#x90FD;&#x51C6;&#x5907;&#x597D;&#xFF0C;&#x624D;&#x80FD;&#x53D1;&#x5E03;&#x3002;</p>
<pre><code class="language-text">&#x6D3B;&#x52A8;&#x8D44;&#x6599;
   &#x2502;
   &#x251C;&#x2500;&#x2192; &#x5199;&#x6587;&#x6848; &#x2192; &#x5408;&#x89C4;&#x68C0;&#x67E5; &#x2500;&#x2500;&#x2510;
   &#x251C;&#x2500;&#x2192; &#x51FA;&#x6D77;&#x62A5; &#x2192; &#x5C3A;&#x5BF8;&#x68C0;&#x67E5; &#x2500;&#x2500;&#x253C;&#x2500;&#x2192; &#x8FD0;&#x8425;&#x5BA1;&#x6838; &#x2192; &#x53D1;&#x5E03;
   &#x2514;&#x2500;&#x2192; &#x914D;&#x62A5;&#x540D;&#x9875; &#x2192; &#x94FE;&#x63A5;&#x68C0;&#x67E5; &#x2500;&#x2518;
</code></pre>
<p>&#x4E09;&#x6761;&#x7EBF;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x8DD1;&#x3002;&#x8C01;&#x5148;&#x5B8C;&#x6210;&#x90FD;&#x4E0D;&#x80FD;&#x5355;&#x72EC;&#x53D1;&#x5E03;&#xFF0C;&#x8FD0;&#x8425;&#x53EA;&#x80FD;&#x5728;&#x4E09;&#x9879;&#x9F50;&#x5168;&#x65F6;&#x5BA1;&#x6838;&#x3002;</p>
<p>&#x5468;&#x56DB;&#x4E0B;&#x5348;&#xFF0C;&#x5408;&#x89C4;&#x68C0;&#x67E5;&#x53D1;&#x73B0;&#x6587;&#x6848;&#x91CC;&#x6709;&#x201C;&#x9519;&#x8FC7;&#x518D;&#x7B49;&#x4E00;&#x5E74;&#x201D;&#x3002;&#x6D77;&#x62A5;&#x548C;&#x62A5;&#x540D;&#x9875;&#x5DF2;&#x7ECF;&#x901A;&#x8FC7;&#x3002;</p>
<p>&#x8FD9;&#x65F6;&#x53EA;&#x9700;&#x8981;&#x628A;&#x95EE;&#x9898;&#x9000;&#x7ED9;&#x6587;&#x6848; Agent&#xFF1A;&#x201C;&#x5220;&#x6389;&#x2018;&#x9519;&#x8FC7;&#x518D;&#x7B49;&#x4E00;&#x5E74;&#x2019;&#xFF0C;&#x8BED;&#x6C14;&#x522B;&#x5236;&#x9020;&#x7A00;&#x7F3A;&#x611F;&#x3002;&#x201D;&#x5B83;&#x4FEE;&#x6539;&#x5F53;&#x524D;&#x8349;&#x7A3F;&#xFF0C;&#x518D;&#x505A;&#x4E00;&#x6B21;&#x5408;&#x89C4;&#x68C0;&#x67E5;&#x3002;&#x6D77;&#x62A5;&#x548C;&#x62A5;&#x540D;&#x9875;&#x4E0D;&#x9700;&#x8981;&#x52A8;&#x3002;</p>
<pre><code class="language-text">&#x5408;&#x89C4;&#x4E0D;&#x901A;&#x8FC7;
   &#x2502;
   &#x25BC;
&#x5E26;&#x7740;&#x95EE;&#x9898;&#x4FEE;&#x6539;&#x5F53;&#x524D;&#x8349;&#x7A3F; &#x2192; &#x5408;&#x89C4;&#x68C0;&#x67E5;
   &#x2502;                       &#x2502;
   &#x2502;                       &#x2514;&#x2500;&#x2500; &#x4E0D;&#x901A;&#x8FC7;&#xFF1A;&#x7EE7;&#x7EED;&#x4FEE;&#x6539;
   &#x2502;
   &#x2514;&#x2500;&#x2500; &#x901A;&#x8FC7; &#x2500;&#x2500;&#x2192; &#x7B49;&#x6D77;&#x62A5;&#x3001;&#x62A5;&#x540D;&#x9875;

&#x6D77;&#x62A5;&#x3001;&#x62A5;&#x540D;&#x9875;&#xFF1A;&#x4FDD;&#x7559;&#x5DF2;&#x901A;&#x8FC7;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x91CD;&#x505A;
</code></pre>
<p>&#x8BFB;&#x56FE;&#x65F6;&#x6293;&#x4F4F;&#x4E09;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x4E00;&#x6761;&#x652F;&#x7EBF;&#x6CA1;&#x901A;&#x8FC7;&#xFF0C;&#x53EA;&#x5728;&#x8FD9;&#x6761;&#x652F;&#x7EBF;&#x91CC;&#x4FEE;&#x6539;&#x548C;&#x590D;&#x67E5;&#x3002;
&#x5176;&#x4ED6;&#x5DF2;&#x7ECF;&#x5B8C;&#x6210;&#x7684;&#x652F;&#x7EBF;&#x4FDD;&#x7559;&#x7ED3;&#x679C;&#x3002;
&#x4E09;&#x6761;&#x652F;&#x7EBF;&#x5168;&#x901A;&#x8FC7;&#xFF0C;&#x624D;&#x80FD;&#x8FDB;&#x5165;&#x5BA1;&#x6838;&#x548C;&#x53D1;&#x5E03;&#x3002;
</code></pre>
<p>&#x628A;&#x8FD9;&#x4E9B;&#x5173;&#x7CFB;&#x5199;&#x8FDB;&#x7CFB;&#x7EDF;&#xFF0C;&#x5C31;&#x662F;&#x8FD9;&#x91CC;&#x6240;&#x8BF4;&#x7684; Graph Engineering&#x3002;</p>
<h2 id="Graph &#x548C; Loop &#x7684;&#x5173;&#x7CFB;"><a href="#Graph &#x548C; Loop &#x7684;&#x5173;&#x7CFB;"></a>Graph &#x548C; Loop &#x7684;&#x5173;&#x7CFB;</h2>
<p>&#x628A;&#x4E24;&#x5C42;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x770B;&#xFF1A;</p>
<pre><code class="language-text">Graph&#xFF1A;&#x5B89;&#x6392;&#x591A;&#x6761;&#x652F;&#x7EBF;&#x5982;&#x4F55;&#x5206;&#x53C9;&#x3001;&#x7B49;&#x5F85;&#x3001;&#x6C47;&#x5408;

&#x6D3B;&#x52A8;&#x8D44;&#x6599;
   &#x251C;&#x2500;&#x2500; &#x6587;&#x6848;&#x652F;&#x7EBF; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
   &#x251C;&#x2500;&#x2500; &#x6D77;&#x62A5;&#x652F;&#x7EBF; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2192; &#x5BA1;&#x6838; &#x2192; &#x53D1;&#x5E03;
   &#x2514;&#x2500;&#x2500; &#x62A5;&#x540D;&#x9875;&#x652F;&#x7EBF; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

Loop&#xFF1A;&#x8BA9;&#x5176;&#x4E2D;&#x4E00;&#x6761;&#x652F;&#x7EBF;&#x81EA;&#x5DF1;&#x505A;&#x5230;&#x5408;&#x683C;

&#x6587;&#x6848;&#x652F;&#x7EBF;&#xFF1A;&#x5199; &#x2192; &#x68C0;&#x67E5; &#x2192; &#x4FEE;&#x6539; &#x2192; &#x901A;&#x8FC7;
</code></pre>
<p>Graph &#x5728;&#x5916;&#x9762;&#x5B89;&#x6392;&#x5173;&#x7CFB;&#xFF0C;Loop &#x5728;&#x91CC;&#x9762;&#x5904;&#x7406;&#x8FD4;&#x5DE5;&#x3002;&#x4E00;&#x4E2A; Graph &#x91CC;&#x5E38;&#x6709;&#x591A;&#x4E2A; Loop&#xFF0C;&#x8FD9;&#x5F88;&#x6B63;&#x5E38;&#x3002;</p>
<p>&#x8282;&#x70B9;&#x4E5F;&#x4E0D;&#x5FC5;&#x5168;&#x662F; Agent&#xFF1A;</p>
<pre><code class="language-text">&#x5199;&#x6587;&#x6848;&#xFF1A;Agent
&#x51FA;&#x6D77;&#x62A5;&#xFF1A;&#x8BBE;&#x8BA1;&#x5E08;&#x6216;&#x56FE;&#x50CF;&#x6A21;&#x578B;
&#x914D;&#x62A5;&#x540D;&#x9875;&#x3001;&#x68C0;&#x67E5;&#x94FE;&#x63A5;&#xFF1A;&#x666E;&#x901A;&#x7A0B;&#x5E8F;
&#x8FD0;&#x8425;&#x5BA1;&#x6838;&#xFF1A;&#x4EBA;
</code></pre>
<p>Graph Engineering &#x5173;&#x5FC3;&#x7684;&#x4E0D;&#x662F; Agent &#x6570;&#x91CF;&#xFF0C;&#x800C;&#x662F;&#x8FD9;&#x4E9B;&#x8282;&#x70B9;&#x7684;&#x5173;&#x7CFB;&#x3002;&#x72B6;&#x6001;&#x673A;&#x3001;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#xFF0C;&#x751A;&#x81F3;&#x4E00;&#x4E2A; <code>while</code> &#x5FAA;&#x73AF;&#x90FD;&#x80FD;&#x5B9E;&#x73B0;&#xFF1B;&#x5173;&#x952E;&#x662F;&#x628A;&#x8C01;&#x4F9D;&#x8D56;&#x8C01;&#x3001;&#x8C01;&#x7B49;&#x8C01;&#x3001;&#x5931;&#x8D25;&#x9000;&#x5230;&#x54EA;&#x91CC;&#xFF0C;&#x660E;&#x786E;&#x4FDD;&#x5B58;&#x4E0B;&#x6765;&#x3002;</p>
<h2 id="&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9700;&#x8981;&#x5B83;"><a href="#&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9700;&#x8981;&#x5B83;"></a>&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9700;&#x8981;&#x5B83;</h2>
<pre><code class="language-text">&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x7ED3;&#x679C;&#xFF1A;&#x751F;&#x6210; &#x2192; &#x68C0;&#x67E5; &#x2192; &#x91CD;&#x8BD5;
                         &#x2502;
                         &#x2514;&#x2500;&#x2500; &#x4E00;&#x4E2A; Loop &#x901A;&#x5E38;&#x591F;&#x7528;

&#x591A;&#x4E2A;&#x7ED3;&#x679C;&#xFF1A;&#x5206;&#x53C9; &#x2192; &#x5404;&#x81EA;&#x68C0;&#x67E5;&#x548C;&#x91CD;&#x8BD5; &#x2192; &#x6C47;&#x5408; &#x2192; &#x53D1;&#x5E03;
                         &#x2502;
                         &#x2514;&#x2500;&#x2500; &#x503C;&#x5F97;&#x663E;&#x5F0F;&#x8BBE;&#x8BA1;&#x6210; Graph
</code></pre>
<p>Graph Engineering &#x8FD9;&#x4E2A;&#x540D;&#x5B57;&#x6709;&#x7092;&#x4F5C;&#x6210;&#x5206;&#x3002;&#x5DE5;&#x4F5C;&#x6D41;&#x3001;&#x72B6;&#x6001;&#x673A;&#x548C; DAG &#x65E9;&#x5C31;&#x5728;&#x5904;&#x7406;&#x5206;&#x53C9;&#x3001;&#x6C47;&#x5408;&#x4E0E;&#x56DE;&#x9000;&#x3002;&#x8FD9;&#x4E2A;&#x65B0;&#x8BCD;&#x81F3;&#x5C11;&#x628A;&#x4E00;&#x4E2A;&#x8001;&#x95EE;&#x9898;&#x91CD;&#x65B0;&#x6446;&#x5230;&#x773C;&#x524D;&#xFF1A;&#x591A;&#x6761;&#x652F;&#x7EBF;&#x5F00;&#x59CB;&#x4E92;&#x76F8;&#x7B49;&#x5F85;&#x65F6;&#xFF0C;&#x63A7;&#x5236;&#x903B;&#x8F91;&#x4E0D;&#x80FD;&#x518D;&#x5168;&#x585E;&#x8FDB;&#x4E00;&#x4E2A;&#x5927; Prompt &#x6216;&#x4E00;&#x4E2A;&#x5927;&#x5FAA;&#x73AF;&#x3002;</p>
<h2 id="&#x653E;&#x56DE;&#x5B8C;&#x6574;&#x5730;&#x56FE;"><a href="#&#x653E;&#x56DE;&#x5B8C;&#x6574;&#x5730;&#x56FE;"></a>&#x653E;&#x56DE;&#x5B8C;&#x6574;&#x5730;&#x56FE;</h2>
<pre><code class="language-text">Graph Engineering
&#x591A;&#x6761;&#x4EFB;&#x52A1;&#x5982;&#x4F55;&#x5206;&#x53C9;&#x3001;&#x6C47;&#x5408;&#x548C;&#x56DE;&#x9000;
&#x2502;
&#x2514;&#x2500;&#x2500; Loop Engineering
    &#x4E00;&#x6761;&#x4EFB;&#x52A1;&#x5982;&#x4F55;&#x68C0;&#x67E5;&#x3001;&#x91CD;&#x8BD5;&#x548C;&#x505C;&#x6B62;
    &#x2502;
    &#x2514;&#x2500;&#x2500; Harness Engineering
        &#x8FD9;&#x6B21;&#x8FD0;&#x884C;&#x5141;&#x8BB8;&#x6A21;&#x578B;&#x505A;&#x4EC0;&#x4E48;
        &#x2502;
        &#x2514;&#x2500;&#x2500; Context Engineering
            &#x8FD9;&#x6B21;&#x7ED9;&#x6A21;&#x578B;&#x770B;&#x4EC0;&#x4E48;
            &#x2502;
            &#x2514;&#x2500;&#x2500; Prompt Engineering
                &#x8FD9;&#x6B21;&#x600E;&#x4E48;&#x8BF4;
                &#x2502;
                &#x2514;&#x2500;&#x2500; Model
                    &#x751F;&#x6210;&#x5185;&#x5BB9;&#x6216;&#x9009;&#x62E9;&#x4E0B;&#x4E00;&#x6B65;&#x52A8;&#x4F5C;
</code></pre>
<p>&#x4E0A;&#x4E00;&#x7BC7;&#x8BB2;&#x7684;&#x662F;&#x201C;&#x628A;&#x4E00;&#x4EF6;&#x4E8B;&#x505A;&#x597D;&#x201D;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BB2;&#x7684;&#x662F;&#x201C;&#x51E0;&#x4EF6;&#x4E8B;&#x600E;&#x6837;&#x4E00;&#x8D77;&#x505A;&#x5B8C;&#x201D;&#x3002;&#x8FD9;&#x4E0D;&#x662F;&#x4E94;&#x6B21;&#x5347;&#x7EA7;&#xFF0C;&#x53EA;&#x662F;&#x4ECE;&#x6A21;&#x578B;&#x5F80;&#x5916;&#x9010;&#x5C42;&#x5212;&#x51FA;&#x7684;&#x5DE5;&#x7A0B;&#x8FB9;&#x754C;&#x3002;</p>
`,E=[{level:1,title:"从 Loop 到 Graph Engineering：当一件事变成多条支线",children:[{level:2,title:"只要一条文案：一个 Loop",children:[]},{level:2,title:"同一场活动，要同时上线三样东西",children:[]},{level:2,title:"Graph 和 Loop 的关系",children:[]},{level:2,title:"什么时候需要它",children:[]},{level:2,title:"放回完整地图",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
