const x={},F=`<h1 id="&#x5173;&#x4E8E;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684;&#x53D1;&#x5C55;"><a href="#&#x5173;&#x4E8E;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684;&#x53D1;&#x5C55;"></a>&#x5173;&#x4E8E;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684;&#x53D1;&#x5C55;</h1>
<p>&#x4E00;&#x5F00;&#x59CB;</p>
<ul>
<li>&#x8FD0;&#x884C;&#x73AF;&#x5883;&#xFF1A;OS</li>
<li>&#x8BED;&#x8A00;
<ul>
<li>&#x6C47;&#x7F16; -&gt; C&#xFF08;FP, OS) -&gt; C++&#xFF08;C +OOP&#xFF09;</li>
</ul>
</li>
</ul>
<p>&#x6258;&#x7BA1;&#x65F6;&#x4EE3;</p>
<ul>
<li>&#x8FD0;&#x884C;&#x73AF;&#x5883;&#xFF1A;&#x53D7;&#x6258;&#x7BA1;&#x7684;&#x6267;&#x884C;&#x73AF;&#x5883;&#x4E0A;</li>
<li>&#x7279;&#x5F81;&#xFF1A;&#x81EA;&#x52A8;&#x7684;&#x5783;&#x573E;&#x6536;&#x96C6;&#xFF0C;&#x7C7B;&#x578B;&#x5B89;&#x5168;&#x7B49;</li>
<li>&#x8BED;&#x8A00;
<ul>
<li>Java&#xFF08;C++ -FP +OOP, JVM&#xFF09;-&gt; Scala&#xFF08;Java +FP, JVM&#xFF09;</li>
</ul>
</li>
</ul>
<h2 id="&#x547D;&#x4EE4;&#x5F0F;/&#x58F0;&#x660E;&#x5F0F;&#x7F16;&#x7A0B;(DSL+&#x51FD;&#x6570;&#x5F0F;)"><a href="#&#x547D;&#x4EE4;&#x5F0F;/&#x58F0;&#x660E;&#x5F0F;&#x7F16;&#x7A0B;(DSL+&#x51FD;&#x6570;&#x5F0F;)"></a>&#x547D;&#x4EE4;&#x5F0F;/&#x58F0;&#x660E;&#x5F0F;&#x7F16;&#x7A0B;(DSL+&#x51FD;&#x6570;&#x5F0F;)</h2>
<ul>
<li>&#x547D;&#x4EE4;&#x5F0F;&#xFF08;Imperative&#xFF09;
<ul>
<li>&#x7279;&#x5F81;&#xFF1A;&#x505A;&#x4EC0;&#x4E48;&#xFF08;What&#xFF09; + &#x5982;&#x4F55;&#xFF08;How&#xFF09;&#xFF08;&#x6700;&#x7EC8;&#x76EE;&#x7684;&#x8DDF;&#x5982;&#x4F55;&#x8FBE;&#x6210;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#xFF09;</li>
<li>&#x4F8B;&#x5B50;&#xFF1A;for&#x5FAA;&#x73AF;&#xFF0C;i += 1&#x7B49;&#x7B49;&#xFF0C;&#x90E8;&#x5206;&#x7EC6;&#x8282;&#x4F1A;&#x63A9;&#x76D6;&#x4E86;&#x201C;&#x6700;&#x7EC8;&#x76EE;&#x6807;&#x201D;&#xFF0C;&#x540E;&#x9762;&#x53EF;&#x80FD;&#x591A;&#x5F80;What&#x65B9;&#x5411;&#x6F14;&#x8FDB;</li>
<li>&#x4F18;&#x52BF;&#xFF1A;&#x66F4;&#x52A0;&#x7CBE;&#x7EC6;&#x5316;&#x63A7;&#x5236;&#xFF0C;&#x4F46;&#x9700;&#x8981;&#x624B;&#x52A8;</li>
<li>&#x95EE;&#x9898;&#xFF1A;&#x5E76;&#x884C;&#x6267;&#x884C;&#x7A0B;&#x5E8F;&#x53D8;&#x5F97;&#x56F0;&#x96BE;&#xFF0C;&#x56E0;&#x4E3A;&#x50CF;&#x201C;&#x6267;&#x884C;&#x76EE;&#x7684;&#x201D;&#x8FD9;&#x6837;&#x66F4;&#x9AD8;&#x5C42;&#x6B21;&#x7684;&#x4FE1;&#x606F;&#x5DF2;&#x7ECF;&#x4E22;&#x5931;</li>
</ul>
</li>
<li>&#x58F0;&#x660E;&#x5F0F;
<ul>
<li>&#x5916;&#x90E8;DSL
<ul>
<li>&#x63CF;&#x8FF0;&#xFF1A;&#x9488;&#x5BF9;&#x7279;&#x5B9A;&#x7684;&#x9886;&#x57DF;&#x8BBE;&#x8BA1;&#xFF0C;&#x72EC;&#x7ACB;&#x6027;&#x5F3A;&#xFF08;&#x4E3B;&#x8981;&#x88AB;&#x7F16;&#x8BD1;&#x89E3;&#x6790;&#xFF0C;&#x4E0D;&#x5F3A;&#x4F9D;&#x8D56;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;Dart-SASS&#x7B49;&#x7F16;&#x8BD1;&#x5DE5;&#x5177;&#xFF09;</li>
<li>&#x7279;&#x5F81;&#xFF1A;&#x505A;&#x4EC0;&#x4E48;&#xFF08;What&#xFF09;&#xFF08;&#x53EA;&#x662F;&#x8868;&#x73B0;&#x51FA;&#x6700;&#x7EC8;&#x7684;&#x76EE;&#x7684;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x660E;&#x786E;&#x6307;&#x5B9A;&#x505A;&#x4E8B;&#x7684;&#x65B9;&#x5F0F;&#xFF09;</li>
<li>&#x4F8B;&#x5B50;&#xFF1A;XML&#x3001;HTML&#x3001;SASS&#x3001;SQL&#x7B49;</li>
<li>&#x53D1;&#x5C55;&#xFF1A;&#x5229;&#x7528;&#x65E2;&#x6709;DSL&#x7684;&#x65B9;&#x8A00;&#xFF08;&#x9644;&#x5E26;&#x6210;&#x719F;&#x5DE5;&#x5177;&#x94FE;&#xFF09;</li>
</ul>
</li>
<li>&#x5185;&#x90E8;DSL
<ul>
<li>&#x63CF;&#x8FF0;&#xFF1A;&#x5728;&#x65E2;&#x6709;&#x8BED;&#x8A00;&#x4E0A;&#x505A;&#x4E00;&#x7CFB;&#x5217;&#x7279;&#x522B;&#x7684;API&#x53CA;&#x4F7F;&#x7528;&#x6A21;&#x5F0F;</li>
<li>&#x4F8B;&#x5B50;&#xFF1A;Jquery&#xFF08;&#x4F2A;&#x88C5;&#x6210;&#x4E00;&#x79CD;DSL&#x628A;&#x4E00;&#x7CFB;&#x5217;&#x64CD;&#x4F5C;&#x901A;&#x8FC7;&quot;.&quot;&#x6D41;&#x7545;&#x8FDE;&#x63A5;&#xFF09;</li>
</ul>
</li>
<li>&#x51FD;&#x6570;&#x5F0F;
<ul>
<li>&#x7279;&#x5F81;&#xFF1A;&#x5BB9;&#x6613;&#x5E76;&#x884C;&#xFF08;&#x56E0;&#x4E3A;&#x8FD0;&#x884C;&#x65F6;&#x4E0D;&#x4F1A;&#x4FEE;&#x6539;&#x4EFB;&#x4F55;&#x72B6;&#x6001;&#xFF0C;&#x56E0;&#x6B64;&#x65E0;&#x8BBA;&#x591A;&#x5C11;&#x7EBF;&#x7A0B;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x90FD;&#x53EF;&#x4EE5;&#x89C2;&#x5BDF;&#x5230;&#x6B63;&#x786E;&#x7684;&#x7ED3;&#x679C;&#x3002;&#xFF09;</li>
<li></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="&#x52A8;&#x6001;&#x8BED;&#x8A00;/&#x9759;&#x6001;&#x8BED;&#x8A00;"><a href="#&#x52A8;&#x6001;&#x8BED;&#x8A00;/&#x9759;&#x6001;&#x8BED;&#x8A00;"></a>&#x52A8;&#x6001;&#x8BED;&#x8A00;/&#x9759;&#x6001;&#x8BED;&#x8A00;</h2>
<ul>
<li>&#x52A8;&#x6001;&#x8BED;&#x8A00;&#xFF1A;JIT&#xFF0C;&#x6E90;&#x7801;&#x53D1;&#x5E03;&#xFF0C;&#x8FD0;&#x884C;&#x65F6;&#x52A8;&#x6001;&#x89E3;&#x91CA;&#x6267;&#x884C;&#xFF0C;&#x4F8B;&#x5982;JS</li>
<li>&#x9759;&#x6001;&#x8BED;&#x8A00;&#xFF1A;&#x7279;&#x5F81;&#xFF1A;AOT&#xFF0C;&#x63D0;&#x524D;&#x7F16;&#x8BD1;&#x6210;&#x76EE;&#x6807;&#x4EE3;&#x7801;&#xFF0C;&#x4F8B;&#x5982;C</li>
</ul>
<h2 id="&#x6C47;&#x603B;"><a href="#&#x6C47;&#x603B;"></a>&#x6C47;&#x603B;</h2>
<ul>
<li>&#x62BD;&#x8C61;&#x7EA7;&#x522B;&#x8D8A;&#x6765;&#x8D8A;&#x9AD8;&#xFF08;&#x4E0B;&#x4E00;&#x4E2A;&#x62BD;&#x8C61;&#x7EA7;&#x522B;&#xFF1F;&#xFF09;</li>
<li>&#x6784;&#x5EFA;&#x4E8E;&#x73B0;&#x6709;&#x7684;&#x5DE5;&#x5177;&#x4E0A;&#xFF08;Rust&#x4EE5;LLVM&#x4E3A;&#x76EE;&#x6807;&#x7F16;&#x8BD1;&#xFF0C;Scala&#x5728;JVM&#x7684;&#x8FD0;&#x884C;&#xFF09;</li>
<li>&#x591A;&#x8303;&#x5F0F;&#xFF08;FP&#xFF0C;OOP&#xFF09;</li>
<li>&#x66F4;&#x591A;&#x58F0;&#x660E;&#x5F0F;&#xFF0C;&#x66F4;&#x5C11;&#x7684;&#x547D;&#x4EE4;&#x5F0F;&#xFF1A;&#x8BA9;&#x4EE3;&#x7801;&#x5305;&#x542B;&#x66F4;&#x591A;&#x7684;&#x201C;What&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x201C;How&#x201D;&#xFF1B;&#x6267;&#x884C;&#x73AF;&#x5883;&#x4FBF;&#x53EF;&#x4EE5;&#x66F4;&#x52A0;&#x806A;&#x660E;&#x5730;&#x53BB;&#x9002;&#x5E94;&#x5F53;&#x524D;&#x7684;&#x6267;&#x884C;&#x8981;&#x6C42;&#x3002;</li>
<li>AOT+JIT&#xFF1F;&#x5143;&#x7F16;&#x7A0B;&#xFF1A;&#x7528;&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF08;&#x64CD;&#x7EB5;&#xFF09;&#x4EE3;&#x7801;&#xFF1F;</li>
<li>&#x7EC4;&#x5408;&#x662F;&#x672A;&#x6765;&#xFF1F;&#xFF08;Rust &#x7684;&#x7F16;&#x7A0B;&#x5EFA;&#x6A21;&#x6A21;&#x5F0F;&#x66F4;&#x50CF;&#x662F;&#x7EC4;&#x5408;&#xFF08;Composition&#xFF09; &#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x627F;&#xFF08;Inheritance&#xFF09;&#xFF1F;&#x7C7B;&#x4F3C; Vue3 &#x9009;&#x62E9; Composition-API &#x4EE3;&#x66FF; Class Option&#xFF08;&#x66F4;&#x597D;&#x7684;&#x903B;&#x8F91;&#x7EC4;&#x5408;&#x590D;&#x7528;&#xFF0C;&#x66F4;&#x597D;&#x7684;&#x652F;&#x6301;TS&#xFF09;&#xFF09;</li>
</ul>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/348306085">&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684;&#x53D1;&#x5C55;&#x8D8B;&#x52BF;&#x548C;&#x672A;&#x6765;&#x65B9;&#x5411;</a></li>
<li><a href="https://www.zhihu.com/question/23856985">&#x600E;&#x6837;&#x7406;&#x89E3;&#x5143;&#x7F16;&#x7A0B;</a></li>
<li>https://www.zhihu.com/question/32304837/answer/275204204</li>
</ul>
`,E=[{level:1,title:"关于编程语言的发展",children:[{level:2,title:"命令式/声明式编程(DSL+函数式)",children:[]},{level:2,title:"动态语言/静态语言",children:[]},{level:2,title:"汇总",children:[]},{level:2,title:"Reference",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
