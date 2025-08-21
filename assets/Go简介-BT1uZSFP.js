const x={title:"Go 简介",description:null},F=`<h1 id="Goroutine"><a href="#Goroutine"></a>Goroutine</h1>
<p>Goroutine &#x53EF;&#x4EE5;&#x770B;&#x4F5C;&#x5BF9; thread &#x52A0;&#x7684;&#x4E00;&#x5C42;&#x62BD;&#x8C61;&#xFF0C;&#x5B83;&#x66F4;&#x8F7B;&#x91CF;&#x7EA7;&#xFF0C;&#x53EF;&#x4EE5;&#x5355;&#x72EC;&#x6267;&#x884C;&#x3002;&#x56E0;&#x4E3A;&#x6709;&#x4E86;&#x8FD9;&#x5C42;&#x62BD;&#x8C61;&#xFF0C;Gopher &#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x9762;&#x5BF9; thread&#x3002;</p>
<h2 id="Goroutine vs threads"><a href="#Goroutine vs threads"></a>Goroutine vs threads</h2>
<h3 id="&#x5185;&#x5B58;&#x5360;&#x7528;"><a href="#&#x5185;&#x5B58;&#x5360;&#x7528;"></a>&#x5185;&#x5B58;&#x5360;&#x7528;</h3>
<ol>
<li>&#x521B;&#x5EFA;&#x4E00;&#x4E2A; goroutine &#x7684;&#x6808;&#x5185;&#x5B58;&#x6D88;&#x8017;&#x4E3A; 2 KB&#xFF0C;&#x5B9E;&#x9645;&#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x6808;&#x7A7A;&#x95F4;&#x4E0D;&#x591F;&#x7528;&#xFF0C;&#x4F1A;&#x81EA;&#x52A8;&#x8FDB;&#x884C;&#x6269;&#x5BB9;&#x3002;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; thread &#x5219;&#x9700;&#x8981;&#x6D88;&#x8017; 1 MB &#x6808;&#x5185;&#x5B58;&#xFF0C;&#x800C;&#x4E14;&#x8FD8;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x88AB;&#x79F0;&#x4E3A; &#x201C;a guard page&#x201D; &#x7684;&#x533A;&#x57DF;&#x7528;&#x4E8E;&#x548C;&#x5176;&#x4ED6; thread &#x7684;&#x6808;&#x7A7A;&#x95F4;&#x8FDB;&#x884C;&#x9694;&#x79BB;&#x3002;</li>
<li>&#x5BF9;&#x4E8E;&#x4E00;&#x4E2A;&#x7528; Go &#x6784;&#x5EFA;&#x7684; HTTP Server &#x800C;&#x8A00;&#xFF0C;&#x5BF9;&#x5230;&#x6765;&#x7684;&#x6BCF;&#x4E2A;&#x8BF7;&#x6C42;&#xFF0C;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; goroutine &#x7528;&#x6765;&#x5904;&#x7406;&#x662F;&#x975E;&#x5E38;&#x8F7B;&#x677E;&#x7684;&#x4E00;&#x4EF6;&#x4E8B;&#x3002;&#x800C;&#x5982;&#x679C;&#x7528;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x7EBF;&#x7A0B;&#x4F5C;&#x4E3A;&#x5E76;&#x53D1;&#x539F;&#x8BED;&#x7684;&#x8BED;&#x8A00;&#x6784;&#x5EFA;&#x7684;&#x670D;&#x52A1;&#xFF0C;&#x4F8B;&#x5982; Java &#x6765;&#x8BF4;&#xFF0C;&#x6BCF;&#x4E2A;&#x8BF7;&#x6C42;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A;&#x7EBF;&#x7A0B;&#x5219;&#x592A;&#x6D6A;&#x8D39;&#x8D44;&#x6E90;&#x4E86;&#xFF0C;&#x5F88;&#x5FEB;&#x5C31;&#x4F1A;&#x51FA; OOM &#x9519;&#x8BEF;&#xFF08;OutOfMermoryError&#xFF09;&#x3002;</li>
</ol>
<h3 id="&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC0;"><a href="#&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC0;"></a>&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC0;</h3>
<ol>
<li>Thread &#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC0;&#x90FD;&#x4F1A;&#x6709;&#x5DE8;&#x5927;&#x7684;&#x6D88;&#x8017;&#xFF0C;&#x56E0;&#x4E3A;&#x8981;&#x548C;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x6253;&#x4EA4;&#x9053;&#xFF0C;&#x662F;&#x5185;&#x6838;&#x7EA7;&#x7684;&#xFF0C;&#x901A;&#x5E38;&#x89E3;&#x51B3;&#x7684;&#x529E;&#x6CD5;&#x5C31;&#x662F;&#x7EBF;&#x7A0B;&#x6C60;&#x3002;</li>
<li>&#x800C; goroutine &#x56E0;&#x4E3A;&#x662F;&#x7531; Go runtime &#x8D1F;&#x8D23;&#x7BA1;&#x7406;&#x7684;&#xFF0C;&#x521B;&#x5EFA;&#x548C;&#x9500;&#x6BC1;&#x7684;&#x6D88;&#x8017;&#x975E;&#x5E38;&#x5C0F;&#xFF0C;&#x662F;&#x7528;&#x6237;&#x7EA7;&#x3002;</li>
</ol>
<h3 id="&#x5207;&#x6362;"><a href="#&#x5207;&#x6362;"></a>&#x5207;&#x6362;</h3>
<ol>
<li>&#x5F53; threads &#x5207;&#x6362;&#x65F6;&#xFF0C;&#x9700;&#x8981;&#x4FDD;&#x5B58;&#x5404;&#x79CD;&#x5BC4;&#x5B58;&#x5668;&#xFF0C;&#x4EE5;&#x4FBF;&#x5C06;&#x6765;&#x6062;&#x590D;&#xFF1A;
&#x4E00;&#x822C;&#x800C;&#x8A00;&#xFF0C;&#x7EBF;&#x7A0B;&#x5207;&#x6362;&#x4F1A;&#x6D88;&#x8017; 1000-1500 &#x7EB3;&#x79D2;&#xFF0C;&#x4E00;&#x4E2A;&#x7EB3;&#x79D2;&#x5E73;&#x5747;&#x53EF;&#x4EE5;&#x6267;&#x884C; 12-18 &#x6761;&#x6307;&#x4EE4;&#x3002;&#x6240;&#x4EE5;&#x7531;&#x4E8E;&#x7EBF;&#x7A0B;&#x5207;&#x6362;&#xFF0C;&#x6267;&#x884C;&#x6307;&#x4EE4;&#x7684;&#x6761;&#x6570;&#x4F1A;&#x51CF;&#x5C11; 12000-18000&#x3002;</li>
<li>Goroutine &#x7684;&#x5207;&#x6362;&#x7EA6;&#x4E3A; 200 ns&#xFF0C;&#x76F8;&#x5F53;&#x4E8E; 2400-3600 &#x6761;&#x6307;&#x4EE4;&#x3002;
&#x56E0;&#x6B64;&#xFF0C;goroutines &#x5207;&#x6362;&#x6210;&#x672C;&#x6BD4; threads &#x8981;&#x5C0F;&#x5F97;&#x591A;&#x3002;</li>
</ol>
<h2 id="scheduler (M:N&#x6A21;&#x578B;)"><a href="#scheduler (M:N&#x6A21;&#x578B;)"></a>scheduler (M:N&#x6A21;&#x578B;)</h2>
<p>Go runtime &#x4F1A;&#x8D1F;&#x8D23; goroutine &#x7684;&#x751F;&#x8001;&#x75C5;&#x6B7B;&#xFF0C;&#x4ECE;&#x521B;&#x5EFA;&#x5230;&#x9500;&#x6BC1;&#xFF0C;&#x90FD;&#x4E00;&#x624B;&#x5305;&#x529E;&#x3002;
Runtime &#x4F1A;&#x5728;&#x7A0B;&#x5E8F;&#x542F;&#x52A8;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x521B;&#x5EFA; M &#x4E2A;&#x7EBF;&#x7A0B;&#xFF08;CPU &#x6267;&#x884C;&#x8C03;&#x5EA6;&#x7684;&#x5355;&#x4F4D;&#xFF09;&#xFF0C;&#x4E4B;&#x540E;&#x521B;&#x5EFA;&#x7684; N &#x4E2A; goroutine &#x90FD;&#x4F1A;&#x4F9D;&#x9644;&#x5728;&#x8FD9; M &#x4E2A;&#x7EBF;&#x7A0B;&#x4E0A;&#x6267;&#x884C;&#x3002;&#x8FD9;&#x5C31;&#x662F; M:N &#x6A21;&#x578B;</p>
<h3 id="&#x4EC0;&#x4E48;&#x662F;scheduler&#xFF1F;"><a href="#&#x4EC0;&#x4E48;&#x662F;scheduler&#xFF1F;"></a>&#x4EC0;&#x4E48;&#x662F;scheduler&#xFF1F;</h3>
<p><img src="https://rakyll.org/img/scheduler-concepts.png" alt="scheduler-concepts"></p>
<h3 id="scheduler&#x65F6;&#x673A;"><a href="#scheduler&#x65F6;&#x673A;"></a>scheduler&#x65F6;&#x673A;</h3>
<ol>
<li>&#x4F7F;&#x7528;&#x5173;&#x952E;&#x5B57; go
<ul>
<li>go&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684; goroutine</li>
</ul>
</li>
<li>GC
<ul>
<li>GC &#x9700;&#x8981;&#x5728;M &#x4E0A;&#x8FDB;&#x884C;&#x6240;&#x4EE5;&#x4F1A;&#x8C03;&#x5EA6;</li>
</ul>
</li>
<li>&#x7CFB;&#x7EDF;&#x8C03;&#x7528;</li>
<li>&#x5185;&#x5B58;&#x540C;&#x6B65;&#x8BBF;&#x95EE;
<ul>
<li>atomic, mutex, channel &#x7B49;&#x64CD;&#x4F5C;</li>
</ul>
</li>
</ol>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<p><a href="https://github.com/wizardpisces/dispatch-logic">go practice</a></p>
<ul>
<li>https://golangbot.com/goroutines/</li>
<li>https://rakyll.org/scheduler/</li>
<li>https://blog.nindalf.com/posts/how-goroutines-work/</li>
<li>https://speakerdeck.com/retervision/go-runtime-scheduler?slide=27</li>
<li>https://povilasv.me/go-scheduler/#</li>
<li>https://morsmachine.dk/netpoller</li>
<li>https://morsmachine.dk/go-scheduler</li>
<li>https://golangbot.com/structs-instead-of-classes/</li>
<li>https://zhuanlan.zhihu.com/p/80853548</li>
</ul>
`,e=[{level:1,title:"Goroutine",children:[{level:2,title:"Goroutine vs threads",children:[{level:3,title:"内存占用",children:[]},{level:3,title:"创建和销毀",children:[]},{level:3,title:"切换",children:[]}]},{level:2,title:"scheduler (M:N模型)",children:[{level:3,title:"什么是scheduler？",children:[]},{level:3,title:"scheduler时机",children:[]}]},{level:2,title:"Reference",children:[]}]}];export{x as attributes,F as html,e as nestedHeaders};
