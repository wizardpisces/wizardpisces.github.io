const x={},F=`<h1 id="&#x53EF;&#x4F18;&#x5316;&#x7684; AI Agent&#xFF1A;&#x7528; 3 &#x4E2A;&#x4F8B;&#x5B50;&#x8BB2;&#x6E05; DSPy&#x3001;TextGrad&#x3001;AdalFlow &#x4E0E; Trace/OPTO"><a href="#&#x53EF;&#x4F18;&#x5316;&#x7684; AI Agent&#xFF1A;&#x7528; 3 &#x4E2A;&#x4F8B;&#x5B50;&#x8BB2;&#x6E05; DSPy&#x3001;TextGrad&#x3001;AdalFlow &#x4E0E; Trace/OPTO"></a>&#x53EF;&#x4F18;&#x5316;&#x7684; AI Agent&#xFF1A;&#x7528; 3 &#x4E2A;&#x4F8B;&#x5B50;&#x8BB2;&#x6E05; DSPy&#x3001;TextGrad&#x3001;AdalFlow &#x4E0E; Trace/OPTO</h1>
<p>&#x5F88;&#x591A;&#x56E2;&#x961F;&#x7B2C;&#x4E00;&#x6B21;&#x628A; LLM &#x63A5;&#x8FDB;&#x4E1A;&#x52A1;&#x65F6;&#xFF0C;&#x90FD;&#x4F1A;&#x8D70;&#x4E00;&#x6761;&#x719F;&#x6089;&#x7684;&#x8DEF;&#xFF1A;</p>
<ol>
<li>&#x5199;&#x4E00;&#x7248; Prompt&#xFF08;&#x201C;&#x4F60;&#x662F;&#x4E00;&#x4E2A;&#x4E13;&#x4E1A;&#x52A9;&#x624B;&#x2026;&#x201D;&#xFF09;</li>
<li>&#x7EBF;&#x4E0B;&#x8DD1;&#x51E0;&#x6761; case&#xFF0C;&#x770B;&#x8D77;&#x6765;&#x4E0D;&#x9519;</li>
<li>&#x4E00;&#x4E0A;&#x7EBF;&#xFF0C;&#x5F00;&#x59CB;&#x201C;&#x7384;&#x5B66;&#x7FFB;&#x8F66;&#x201D;&#xFF1A;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x3001;&#x957F;&#x6587;&#x672C;&#x3001;&#x5DE5;&#x5177;&#x5931;&#x8D25;&#x3001;&#x683C;&#x5F0F;&#x4E0D;&#x7A33;</li>
</ol>
<p>&#x5982;&#x679C;&#x4F60;&#x7ECF;&#x5386;&#x8FC7;&#x8FD9;&#x79CD;&#x7FFB;&#x8F66;&#xFF0C;&#x4F60;&#x4F1A;&#x5F88;&#x81EA;&#x7136;&#x5730;&#x95EE;&#x51FA;&#x4E00;&#x4E2A;&#x66F4;&#x672C;&#x8D28;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<blockquote>
<p>&#x6211;&#x4EEC;&#x80FD;&#x4E0D;&#x80FD;&#x50CF;&#x8BAD;&#x7EC3;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E00;&#x6837;&#xFF0C;&#x8BA9; Agent/&#x5DE5;&#x4F5C;&#x6D41;&#x5728;&#x53CD;&#x9988;&#x4E2D;<strong>&#x6301;&#x7EED;&#x53D8;&#x597D;</strong>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x9760;&#x201C;&#x7075;&#x611F;&#x5199; Prompt&#x201D;&#xFF1F;</p>
</blockquote>
<p>&#x8FD9;&#x6B63;&#x662F;&#x8FD1;&#x4E24;&#x5E74; DSPy / TextGrad / AdalFlow / Trace &#x8FD9;&#x6761;&#x6280;&#x672F;&#x652F;&#x7EBF;&#x7684;&#x5171;&#x540C;&#x76EE;&#x6807;&#xFF1A;&#x628A;&#x201C;&#x63D0;&#x793A;&#x8BCD;&#x5DE5;&#x7A0B;&#x201D;&#x5347;&#x7EA7;&#x6210;&#x201C;<strong>&#x53EF;&#x4F18;&#x5316;&#x7CFB;&#x7EDF;</strong>&#x201D;&#x3002;</p>
<p>&#x672C;&#x6587;&#x4E0D;&#x8BB2;&#x8BBA;&#x6587;&#x516C;&#x5F0F;&#xFF0C;&#x53EA;&#x7528; 3 &#x4E2A;&#x53EF;&#x590D;&#x5236;&#x7684;&#x4F8B;&#x5B50;&#xFF0C;&#x628A;&#x5B83;&#x4EEC;&#x5404;&#x81EA;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x3001;&#x9700;&#x8981;&#x4EC0;&#x4E48;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x7528;&#x8BB2;&#x6E05;&#x695A;&#x3002;</p>
<p>&#x53C2;&#x8003;&#x94FE;&#x63A5;&#xFF08;&#x5EFA;&#x8BAE;&#x6536;&#x85CF;&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x5FAE;&#x8F6F;&#xFF1A;<a href="https://www.microsoft.com/en-us/research/blog/tracing-the-path-to-self-adapting-ai-agents/"><code>Tracing the path to self-adapting AI agents</code></a></li>
<li>DSPy &#x6587;&#x6863;&#xFF1A;<a href="https://dspy.ai/"><code>DSPy</code></a></li>
<li>TextGrad &#x4ED3;&#x5E93;&#xFF1A;<a href="https://github.com/zou-group/textgrad"><code>zou-group/textgrad</code></a></li>
<li>AdalFlow &#x4ED3;&#x5E93;&#xFF1A;<a href="https://github.com/SylphAI-Inc/AdalFlow"><code>SylphAI-Inc/AdalFlow</code></a></li>
</ul>
<hr>
<h2 id="1&#xFF09;&#x5148;&#x628A;&#x201C;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x8BF4;&#x900F;&#xFF1A;&#x4F18;&#x5316;&#x7684;&#x4E0D;&#x662F;&#x6743;&#x91CD;&#xFF0C;&#x800C;&#x662F;&#x7CFB;&#x7EDF;&#x53C2;&#x6570;"><a href="#1&#xFF09;&#x5148;&#x628A;&#x201C;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x8BF4;&#x900F;&#xFF1A;&#x4F18;&#x5316;&#x7684;&#x4E0D;&#x662F;&#x6743;&#x91CD;&#xFF0C;&#x800C;&#x662F;&#x7CFB;&#x7EDF;&#x53C2;&#x6570;"></a>1&#xFF09;&#x5148;&#x628A;&#x201C;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x8BF4;&#x900F;&#xFF1A;&#x4F18;&#x5316;&#x7684;&#x4E0D;&#x662F;&#x6743;&#x91CD;&#xFF0C;&#x800C;&#x662F;&#x7CFB;&#x7EDF;&#x53C2;&#x6570;</h2>
<p>&#x5F88;&#x591A;&#x4EBA;&#x542C;&#x5230;&#x201C;&#x81EA;&#x6211;&#x8FDB;&#x5316;&#x201D;&#xFF0C;&#x7B2C;&#x4E00;&#x53CD;&#x5E94;&#x662F;&#x201C;&#x90A3;&#x4E0D;&#x5F97;&#x5FAE;&#x8C03;&#x6A21;&#x578B;&#x5417;&#xFF1F;&#x201D;<br>
&#x4F46;&#x5728;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x5DE5;&#x7A0B;&#x573A;&#x666F;&#x91CC;&#xFF0C;&#x6700;&#x4FBF;&#x5B9C;&#x3001;&#x6700;&#x6709;&#x6548;&#x3001;&#x4E5F;&#x6700;&#x5BB9;&#x6613;&#x56DE;&#x6EDA;&#x7684;&#x4F18;&#x5316;&#x5BF9;&#x8C61;&#x5176;&#x5B9E;&#x662F;&#xFF1A;</p>
<ul>
<li><strong>&#x6307;&#x4EE4;&#xFF08;instructions&#xFF09;</strong>&#xFF1A;&#x7CFB;&#x7EDF; prompt&#x3001;&#x683C;&#x5F0F;&#x8981;&#x6C42;&#x3001;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x3001;&#x5931;&#x8D25;&#x7B56;&#x7565;</li>
<li><strong>&#x793A;&#x4F8B;&#xFF08;few-shot demos&#xFF09;</strong>&#xFF1A;&#x9AD8;&#x8D28;&#x91CF;&#x7684;&#x8F93;&#x5165;/&#x8F93;&#x51FA;&#xFF08;&#x6700;&#x597D;&#x8FD8;&#x5E26;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#xFF09;</li>
<li><strong>&#x6D41;&#x7A0B;&#xFF08;workflow&#xFF09;</strong>&#xFF1A;&#x5148;&#x68C0;&#x7D22;&#x518D;&#x56DE;&#x7B54;&#xFF1F;&#x5148;&#x67E5; schema &#x518D;&#x5199; SQL&#xFF1F;&#x5148;&#x89C4;&#x5212;&#x518D;&#x6267;&#x884C;&#xFF1F;</li>
<li><strong>&#x5DE5;&#x5177;&#x7B56;&#x7565;</strong>&#xFF1A;&#x4F55;&#x65F6;&#x8C03;&#x7528;&#x3001;&#x600E;&#x4E48;&#x586B;&#x53C2;&#x3001;&#x5931;&#x8D25;&#x600E;&#x4E48;&#x91CD;&#x8BD5;&#x3001;&#x600E;&#x4E48;&#x515C;&#x5E95;</li>
</ul>
<p>&#x5982;&#x679C;&#x628A; Agent &#x770B;&#x6210;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E9B;&#x5C31;&#x662F;&#x201C;&#x53C2;&#x6570;&#x201D;&#x3002;<br>
&#x8FD9;&#x4E9B;&#x6846;&#x67B6;&#x505A;&#x7684;&#x4E8B;&#xFF0C;&#x672C;&#x8D28;&#x4E0A;&#x90FD;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x7528;&#x53EF;&#x91CD;&#x590D;&#x7684;&#x8BC4;&#x4F30;&#xFF08;metric/&#x53CD;&#x9988;&#xFF09;&#x9A71;&#x52A8;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#xFF0C;&#x628A;&#x201C;&#x4EBA;&#x8089;&#x8C03;&#x53C2;&#x201D;&#x53D8;&#x6210;&#x201C;&#x7CFB;&#x7EDF;&#x5316;&#x8FED;&#x4EE3;&#x201D;&#x3002;</p>
</blockquote>
<p>**&#x6CA1;&#x6709;&#x8BC4;&#x4F30;&#xFF0C;&#x5C31;&#x6CA1;&#x6709;&#x4F18;&#x5316;&#x3002;**&#x8FD9;&#x662F;&#x5168;&#x6587;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E00;&#x53E5;&#x8BDD;&#x3002;</p>
<hr>
<h2 id="2&#xFF09;&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;&#x5206;&#x7C7B;/&#x62BD;&#x53D6;&#x4EFB;&#x52A1; &#x2014;&#x2014; DSPy &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x7F16;&#x8BD1;&#x5668;&#x201D;"><a href="#2&#xFF09;&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;&#x5206;&#x7C7B;/&#x62BD;&#x53D6;&#x4EFB;&#x52A1; &#x2014;&#x2014; DSPy &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x7F16;&#x8BD1;&#x5668;&#x201D;"></a>2&#xFF09;&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;&#x5206;&#x7C7B;/&#x62BD;&#x53D6;&#x4EFB;&#x52A1; &#x2014;&#x2014; DSPy &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x7F16;&#x8BD1;&#x5668;&#x201D;</h2>
<h3 id="&#x573A;&#x666F;"><a href="#&#x573A;&#x666F;"></a>&#x573A;&#x666F;</h3>
<p>&#x4F60;&#x505A;&#x4E86;&#x4E00;&#x4E2A;&#x5BA2;&#x670D;&#x610F;&#x56FE;&#x5206;&#x7C7B;&#x5668;&#xFF1A;</p>
<ul>
<li>&#x8F93;&#x5165;&#xFF1A;&#x7528;&#x6237;&#x4E00;&#x53E5;&#x8BDD;&#xFF08;&#x201C;&#x6211;&#x60F3;&#x53D6;&#x6D88;&#x8BA2;&#x5355;&#x201D;&#xFF09;</li>
<li>&#x8F93;&#x51FA;&#xFF1A;&#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x6807;&#x7B7E;&#xFF08;<code>cancel_order</code> / <code>refund</code> / <code>change_address</code> &#x2026;&#xFF09;</li>
</ul>
<p>&#x4F60;&#x5F88;&#x5FEB;&#x4F1A;&#x53D1;&#x73B0;&#xFF1A;Prompt &#x91CC;&#x591A;&#x4E00;&#x53E5;&#x8BDD;&#x3001;&#x5C11;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x5C31;&#x80FD;&#x6296;&#x52A8; 5&#xFF5E;15%&#x3002;<br>
&#x4E8E;&#x662F;&#x4F60;&#x60F3;&#x505A;&#x4E00;&#x4EF6;&#x66F4;&#x201C;&#x5DE5;&#x7A0B;&#x5316;&#x201D;&#x7684;&#x4E8B;&#xFF1A;<strong>&#x628A;&#x8FD9;&#x6BB5; LLM &#x7A0B;&#x5E8F;&#x7F16;&#x8BD1;&#x6210;&#x66F4;&#x7A33;&#x7684; Prompt&#x3002;</strong></p>
<h3 id="DSPy &#x7684;&#x6838;&#x5FC3;&#x601D;&#x8DEF;"><a href="#DSPy &#x7684;&#x6838;&#x5FC3;&#x601D;&#x8DEF;"></a>DSPy &#x7684;&#x6838;&#x5FC3;&#x601D;&#x8DEF;</h3>
<p>DSPy &#x7684;&#x4E3B;&#x5F20;&#x662F;&#xFF1A;&#x4E0D;&#x8981;&#x628A;&#x884C;&#x4E3A;&#x5199;&#x6210;&#x4E00;&#x5927;&#x6BB5;&#x5B57;&#x7B26;&#x4E32; prompt&#xFF0C;&#x800C;&#x662F;&#x5199;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x7A0B;&#x5E8F;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x4F18;&#x5316;&#x5668;&#x201C;&#x7F16;&#x8BD1;&#x201D;&#x51FA;&#x66F4;&#x597D;&#x7684; prompts/weights&#xFF1A;<a href="https://dspy.ai/"><code>DSPy</code></a>&#x3002;</p>
<p>&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x6210;&#xFF1A;</p>
<ul>
<li>&#x4F60;&#x5199;&#x7684;&#x201C;AI &#x7A0B;&#x5E8F;&#x201D;&#x662F;<strong>&#x9AA8;&#x67B6;</strong>&#xFF08;&#x8F93;&#x5165;&#x8F93;&#x51FA;&#x5B57;&#x6BB5;&#x3001;&#x6A21;&#x5757;&#x94FE;&#x8DEF;&#xFF09;</li>
<li>&#x7F16;&#x8BD1;&#x5668;&#xFF08;optimizer&#xFF09;&#x4F1A;&#x5728;&#x4F60;&#x7684;&#x6570;&#x636E;&#x96C6;&#x4E0A;&#x53CD;&#x590D;&#x8BD5;&#xFF0C;&#x81EA;&#x52A8;&#x627E;&#x51FA;&#xFF1A;
<ul>
<li><strong>&#x66F4;&#x597D;&#x7684;&#x6307;&#x4EE4;</strong></li>
<li><strong>&#x66F4;&#x597D;&#x7684; few-shot &#x793A;&#x4F8B;&#x7EC4;&#x5408;</strong></li>
</ul>
</li>
</ul>
<h3 id="&#x4E00;&#x4E2A;&#x5F88;&#x76F4;&#x89C2;&#x7684;&#x201C;&#x7F16;&#x8BD1;&#x524D;/&#x7F16;&#x8BD1;&#x540E;&#x201D;&#x5DEE;&#x522B;"><a href="#&#x4E00;&#x4E2A;&#x5F88;&#x76F4;&#x89C2;&#x7684;&#x201C;&#x7F16;&#x8BD1;&#x524D;/&#x7F16;&#x8BD1;&#x540E;&#x201D;&#x5DEE;&#x522B;"></a>&#x4E00;&#x4E2A;&#x5F88;&#x76F4;&#x89C2;&#x7684;&#x201C;&#x7F16;&#x8BD1;&#x524D;/&#x7F16;&#x8BD1;&#x540E;&#x201D;&#x5DEE;&#x522B;</h3>
<p><strong>&#x7F16;&#x8BD1;&#x524D;</strong>&#xFF08;&#x901A;&#x5E38;&#x662F;&#x96F6;&#x6837;&#x672C;&#x6216;&#x5C11;&#x91CF;&#x6837;&#x672C;&#xFF0C;&#x5BB9;&#x6613;&#x98D8;&#xFF09;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#x662F;&#x5BA2;&#x670D;&#x610F;&#x56FE;&#x5206;&#x7C7B;&#x52A9;&#x624B;&#x3002;&#x8BF7;&#x8F93;&#x51FA;&#x6700;&#x5408;&#x9002;&#x7684;&#x6807;&#x7B7E;&#x3002;
&#x8F93;&#x5165;&#xFF1A;{text}
&#x8F93;&#x51FA;&#xFF1A;{label}
</code></pre>
<p><strong>&#x7F16;&#x8BD1;&#x540E;</strong>&#xFF08;DSPy &#x4F1A;&#x628A;&#x201C;&#x6700;&#x6709;&#x6548;&#x7684;&#x793A;&#x4F8B;&#x201D;&#x548C;&#x66F4;&#x597D;&#x7684;&#x6307;&#x4EE4;&#x653E;&#x8FDB;&#x53BB;&#xFF0C;&#x53D8;&#x6210;&#x7A33;&#x5B9A;&#x6A21;&#x677F;&#xFF09;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#x662F;&#x5BA2;&#x670D;&#x610F;&#x56FE;&#x5206;&#x7C7B;&#x52A9;&#x624B;&#x3002;&#x8F93;&#x51FA;&#x5FC5;&#x987B;&#x662F;&#x5019;&#x9009;&#x6807;&#x7B7E;&#x4E4B;&#x4E00;&#x3002;

&#x793A;&#x4F8B;1&#xFF1A;
&#x8F93;&#x5165;&#xFF1A;&#x6211;&#x4E0D;&#x60F3;&#x8981;&#x4E86;&#xFF0C;&#x80FD;&#x9000;&#x5417;&#xFF1F;
&#x8F93;&#x51FA;&#xFF1A;refund

&#x793A;&#x4F8B;2&#xFF1A;
&#x8F93;&#x5165;&#xFF1A;&#x5730;&#x5740;&#x586B;&#x9519;&#x4E86;&#x600E;&#x4E48;&#x6539;&#xFF1F;
&#x8F93;&#x51FA;&#xFF1A;change_address

&#x73B0;&#x5728;&#x5F00;&#x59CB;&#xFF1A;
&#x8F93;&#x5165;&#xFF1A;{text}
&#x8F93;&#x51FA;&#xFF1A;
</code></pre>
<p>&#x6CE8;&#x610F;&#xFF1A;&#x8FD9;&#x4E0D;&#x662F;&#x201C;&#x8FD0;&#x884C;&#x65F6;&#x52A8;&#x6001; prompt&#x201D;&#xFF0C;&#x800C;&#x662F;<strong>&#x79BB;&#x7EBF;&#x7F16;&#x8BD1;&#x5F97;&#x5230;&#x7684;&#x201C;&#x9EC4;&#x91D1;&#x6A21;&#x677F;&#x201D;</strong>&#x2014;&#x2014;&#x4E0A;&#x7EBF;&#x540E;&#x4F1A;&#x7A33;&#x5B9A;&#x590D;&#x7528;&#x3002;</p>
<h3 id="DSPy &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&#xFF08;&#x975E;&#x5E38;&#x786C;&#xFF09;"><a href="#DSPy &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&#xFF08;&#x975E;&#x5E38;&#x786C;&#xFF09;"></a>DSPy &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&#xFF08;&#x975E;&#x5E38;&#x786C;&#xFF09;</h3>
<p>DSPy &#x6700;&#x5403;&#x7684;&#x4E0D;&#x662F;&#x201C;&#x5929;&#x624D; prompt&#x201D;&#xFF0C;&#x800C;&#x662F;&#x4E24;&#x6837;&#x4E1C;&#x897F;&#xFF1A;</p>
<ul>
<li><strong>&#x4E00;&#x4EFD;&#x8986;&#x76D6;&#x771F;&#x5B9E;&#x5206;&#x5E03;&#x7684;&#x6570;&#x636E;&#x96C6;</strong>&#xFF08;&#x51E0;&#x5341;&#x5230;&#x51E0;&#x767E;&#x6761;&#x5C31;&#x80FD;&#x8D77;&#x6B65;&#xFF09;</li>
<li><strong>&#x4E00;&#x4E2A;&#x7A33;&#x5B9A;&#x7684;&#x6307;&#x6807;/&#x88C1;&#x5224;</strong>&#xFF08;accuracy&#x3001;F1&#x3001;exact match&#x2026;&#xFF09;</li>
</ul>
<p>&#x5982;&#x679C;&#x4F60;&#x6CA1;&#x6709;&#x88C1;&#x5224;&#xFF0C;DSPy &#x6CA1;&#x6CD5;&#x77E5;&#x9053;&#x201C;&#x66F4;&#x597D;&#x201D;&#x662F;&#x4EC0;&#x4E48;&#x3002;</p>
<hr>
<h2 id="3&#xFF09;&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;&#x7B97;&#x672F;/&#x63A8;&#x7406;/&#x683C;&#x5F0F;&#x4E0D;&#x7A33; &#x2014;&#x2014; TextGrad &#x7684;&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x5230;&#x5E95;&#x662F;&#x4EC0;&#x4E48;"><a href="#3&#xFF09;&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;&#x7B97;&#x672F;/&#x63A8;&#x7406;/&#x683C;&#x5F0F;&#x4E0D;&#x7A33; &#x2014;&#x2014; TextGrad &#x7684;&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x5230;&#x5E95;&#x662F;&#x4EC0;&#x4E48;"></a>3&#xFF09;&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;&#x7B97;&#x672F;/&#x63A8;&#x7406;/&#x683C;&#x5F0F;&#x4E0D;&#x7A33; &#x2014;&#x2014; TextGrad &#x7684;&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x5230;&#x5E95;&#x662F;&#x4EC0;&#x4E48;</h2>
<h3 id="&#x573A;&#x666F;"><a href="#&#x573A;&#x666F;"></a>&#x573A;&#x666F;</h3>
<p>&#x4F60;&#x7ED9;&#x6A21;&#x578B;&#x4E00;&#x4E2A; system prompt&#xFF1A;<br>
&#x201C;&#x8BF7;&#x4E00;&#x6B65;&#x6B65;&#x601D;&#x8003;&#xFF0C;&#x7B97;&#x51FA;&#x6709;&#x591A;&#x5C11;&#x852C;&#x83DC;&#x3002;&#x201D;</p>
<p>&#x5B83;&#x5374;&#x7ECF;&#x5E38;&#x6F0F;&#x6570;&#x3001;&#x8DF3;&#x6B65;&#x3001;&#x6216;&#x8005;&#x7B97;&#x5BF9;&#x4F46;&#x8FC7;&#x7A0B;&#x4E71;&#x3002;<br>
&#x4F60;&#x5F53;&#x7136;&#x53EF;&#x4EE5;&#x201C;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x53CD;&#x601D;&#x518D;&#x7B54;&#x4E00;&#x6B21;&#x201D;&#xFF0C;&#x4F46; TextGrad &#x7684;&#x8D21;&#x732E;&#x662F;&#xFF1A;&#x628A;&#x8FD9;&#x4EF6;&#x4E8B;&#x53D8;&#x6210;&#x4E00;&#x4E2A;<strong>&#x53EF;&#x91CD;&#x590D;&#x3001;&#x53EF;&#x7EC4;&#x5408;&#x7684;&#x8BAD;&#x7EC3;&#x5FAA;&#x73AF;</strong>&#xFF1A;<a href="https://github.com/zou-group/textgrad"><code>zou-group/textgrad</code></a>&#x3002;</p>
<h3 id="&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x4E0D;&#x662F;&#x5FAE;&#x79EF;&#x5206;&#xFF0C;&#x662F;&#x201C;&#x53EF;&#x6267;&#x884C;&#x7684;&#x6539;&#x5199;&#x5EFA;&#x8BAE;&#x201D;"><a href="#&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x4E0D;&#x662F;&#x5FAE;&#x79EF;&#x5206;&#xFF0C;&#x662F;&#x201C;&#x53EF;&#x6267;&#x884C;&#x7684;&#x6539;&#x5199;&#x5EFA;&#x8BAE;&#x201D;"></a>&#x201C;&#x6587;&#x672C;&#x68AF;&#x5EA6;&#x201D;&#x4E0D;&#x662F;&#x5FAE;&#x79EF;&#x5206;&#xFF0C;&#x662F;&#x201C;&#x53EF;&#x6267;&#x884C;&#x7684;&#x6539;&#x5199;&#x5EFA;&#x8BAE;&#x201D;</h3>
<p>&#x5728;&#x6570;&#x503C;&#x68AF;&#x5EA6;&#x91CC;&#xFF0C;&#x68AF;&#x5EA6;&#x544A;&#x8BC9;&#x4F60;&#x201C;&#x53C2;&#x6570;&#x5F80;&#x54EA;&#x6539;&#xFF0C;loss &#x4F1A;&#x4E0B;&#x964D;&#x201D;&#x3002;<br>
&#x5728;&#x6587;&#x672C;&#x4E16;&#x754C;&#xFF0C;&#x68AF;&#x5EA6;&#x53D8;&#x6210;&#x4E86;<strong>&#x4E00;&#x6BB5;&#x975E;&#x5E38;&#x5177;&#x4F53;&#x7684;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5EFA;&#x8BAE;</strong>&#xFF0C;&#x4F8B;&#x5982;&#xFF08;TextGrad README &#x91CC;&#x5C31;&#x5C55;&#x793A;&#x8FC7;&#x8FD9;&#x79CD;&#x5F62;&#x5F0F;&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x201C;&#x9F13;&#x52B1;&#x6A21;&#x578B;&#x663E;&#x5F0F;&#x9010;&#x9879;&#x76F8;&#x52A0;&#x201D;</li>
<li>&#x201C;&#x8981;&#x6C42;&#x6700;&#x540E;&#x590D;&#x6838;&#x603B;&#x6570;&#x201D;</li>
<li>&#x201C;&#x5982;&#x679C;&#x53D1;&#x73B0;&#x4E0D;&#x4E00;&#x81F4;&#xFF0C;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x5E76;&#x66F4;&#x6B63;&#x201D;</li>
</ul>
<p>&#x8FD9;&#x6BB5;&#x5EFA;&#x8BAE;&#x5C31;&#x662F;&#x201C;&#x68AF;&#x5EA6;&#x201D;&#xFF1A;&#x5B83;&#x544A;&#x8BC9;&#x4F18;&#x5316;&#x5668;&#x8981;&#x628A; system prompt &#x5F80;&#x54EA;&#x4E2A;&#x65B9;&#x5411;&#x6539;&#x3002;</p>
<h3 id="&#x8FDB;&#x9636;&#x4F8B;&#x5B50;&#xFF1A;&#x4EE3;&#x7801;&#x89E3;&#x9898;&#xFF08;Solution&#xFF09;&#x4F18;&#x5316;"><a href="#&#x8FDB;&#x9636;&#x4F8B;&#x5B50;&#xFF1A;&#x4EE3;&#x7801;&#x89E3;&#x9898;&#xFF08;Solution&#xFF09;&#x4F18;&#x5316;"></a>&#x8FDB;&#x9636;&#x4F8B;&#x5B50;&#xFF1A;&#x4EE3;&#x7801;&#x89E3;&#x9898;&#xFF08;Solution&#xFF09;&#x4F18;&#x5316;</h3>
<p>&#x9664;&#x4E86;&#x4F18;&#x5316; Prompt&#xFF0C;TextGrad &#x4E5F;&#x53EF;&#x4EE5;&#x4F18;&#x5316;<strong>&#x5177;&#x4F53;&#x7684;&#x7B54;&#x6848;&#xFF08;Solution&#xFF09;</strong>&#x3002;&#x60F3;&#x8C61;&#x4F60;&#x8981;&#x89E3;&#x4E00;&#x4E2A;&#x6570;&#x5B66;&#x9898;&#x6216;&#x5199;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF1A;</p>
<ol>
<li><strong>Forward&#xFF08;&#x6A21;&#x578B;&#x8BD5;&#x5199;&#xFF09;</strong>&#xFF1A;&#x5199;&#x4E86;&#x4E00;&#x4E2A;&#x89E3;&#x65B9;&#x7A0B;&#x7684;&#x6B65;&#x9AA4;&#xFF0C;&#x4F46;&#x628A;&#x516C;&#x5F0F; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>&#x2212;</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow><annotation encoding="application/x-tex">b^2 - 4ac</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">&#x2212;</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mord mathnormal">a</span><span class="mord mathnormal">c</span></span></span></span> &#x5199;&#x6210;&#x4E86; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow><annotation encoding="application/x-tex">b^2 + 4ac</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mord mathnormal">a</span><span class="mord mathnormal">c</span></span></span></span>&#x3002;</li>
<li><strong>TextLoss&#xFF08;&#x88C1;&#x5224;&#xFF09;</strong>&#xFF1A;&#x68C0;&#x6D4B;&#x5230;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x9519;&#x8BEF;&#xFF0C;&#x6216;&#x8005; LLM &#x88C1;&#x5224;&#x6307;&#x51FA;&#x201C;&#x5224;&#x522B;&#x5F0F;&#x7B26;&#x53F7;&#x6709;&#x8BEF;&#x201D;&#x3002;</li>
<li><strong>Backward&#xFF08;&#x751F;&#x6210;&#x68AF;&#x5EA6;&#xFF09;</strong>&#xFF1A;
<blockquote>
<p>&#x201C;Gradient: The solution used the wrong sign in the discriminant formula. It should be minus, not plus.&#x201D;</p>
</blockquote>
</li>
<li><strong>Optimizer.step&#xFF08;&#x66F4;&#x65B0;&#x7B54;&#x6848;&#xFF09;</strong>&#xFF1A;&#x6A21;&#x578B;&#x6839;&#x636E;&#x8FD9;&#x4E2A;&#x201C;&#x68AF;&#x5EA6;&#x201D;&#x4FEE;&#x6B63;&#x89E3;&#x9898;&#x8FC7;&#x7A0B;&#xFF0C;&#x800C;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x91CD;&#x8BD5;&#x3002;</li>
</ol>
<p>&#x8FD9;&#x672C;&#x8D28;&#x4E0A;&#x5C31;&#x662F;<strong>&#x7CFB;&#x7EDF;&#x5316;&#x7684; Self-Correction</strong>&#xFF0C;&#x4F46;&#x5B83;&#x628A;&#x201C;&#x627E;&#x9519;&#xFF08;Gradient&#xFF09;&#x201D;&#x548C;&#x201C;&#x6539;&#x9519;&#xFF08;Step&#xFF09;&#x201D;&#x89E3;&#x8026;&#x6210;&#x4E86;&#x901A;&#x7528;&#x7B97;&#x5B50;&#x3002;</p>
<h3 id="&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x60F3;&#x8C61;&#x6210;&#x201C;&#x81EA;&#x52A8; Code Review&#x201D;"><a href="#&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x60F3;&#x8C61;&#x6210;&#x201C;&#x81EA;&#x52A8; Code Review&#x201D;"></a>&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x60F3;&#x8C61;&#x6210;&#x201C;&#x81EA;&#x52A8; Code Review&#x201D;</h3>
<p>&#x628A; prompt &#x5F53;&#x6210;&#x4EE3;&#x7801;&#xFF1A;</p>
<ul>
<li><strong>loss.backward()</strong>&#xFF1A;&#x50CF;&#x505A; code review &#x4E00;&#x6837;&#x6307;&#x51FA;&#x95EE;&#x9898;&#x4E0E;&#x6539;&#x6CD5;&#xFF08;&#x7528; LLM &#x751F;&#x6210;&#x5EFA;&#x8BAE;&#xFF09;</li>
<li><strong>optimizer.step()</strong>&#xFF1A;&#x6309;&#x5EFA;&#x8BAE;&#x628A; prompt &#x91CD;&#x65B0;&#x5199;&#x4E00;&#x7248;</li>
</ul>
<p>&#x5173;&#x952E;&#x533A;&#x522B;&#x4E0D;&#x662F;&#x201C;LLM &#x80FD;&#x4E0D;&#x80FD;&#x6539;&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x4F60;&#x80FD;&#x5426;&#x628A;&#x201C;&#x53CD;&#x9988; &#x2192; &#x5F52;&#x56E0; &#x2192; &#x6539;&#x5199;&#x201D;&#x8FD9;&#x6761;&#x94FE;&#x8DEF;&#x505A;&#x6210;&#x7A33;&#x5B9A;&#x7684;&#x3001;&#x53EF;&#x590D;&#x7528;&#x7684;&#x6D41;&#x6C34;&#x7EBF;&#xFF0C;&#x5E76;&#x4E14;&#x80FD;&#x6269;&#x5C55;&#x5230;&#x66F4;&#x590D;&#x6742;&#x7684;&#x7CFB;&#x7EDF;&#xFF08;&#x591A;&#x53D8;&#x91CF;&#x3001;&#x591A;&#x6B65;&#x94FE;&#x8DEF;&#xFF09;&#x3002;</p>
</blockquote>
<h3 id="TextGrad &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;"><a href="#TextGrad &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;"></a>TextGrad &#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;</h3>
<p>TextGrad &#x66F4;&#x504F;&#x201C;&#x53CD;&#x9988;&#x9A71;&#x52A8;&#x201D;&#xFF0C;&#x4F60;&#x81F3;&#x5C11;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x80FD;&#x7ED9;&#x51FA;&#x597D;&#x574F;&#x4FE1;&#x53F7;&#x7684;&#x4E1C;&#x897F;&#xFF1A;</p>
<ul>
<li>&#x5355;&#x6D4B;/&#x89C4;&#x5219;&#x6821;&#x9A8C;&#xFF08;&#x901A;&#x8FC7;/&#x5931;&#x8D25;&#xFF09;</li>
<li>&#x4EFB;&#x52A1;&#x5F97;&#x5206;&#xFF08;0/1 &#x6216;&#x8FDE;&#x7EED;&#x5206;&#x6570;&#xFF09;</li>
<li>&#x7ED3;&#x6784;&#x6821;&#x9A8C;&#xFF08;JSON schema &#x662F;&#x5426;&#x901A;&#x8FC7;&#x3001;SQL &#x662F;&#x5426;&#x53EF;&#x6267;&#x884C;&#xFF09;</li>
</ul>
<p>&#x5982;&#x679C;&#x4F60;&#x53EA;&#x80FD;&#x8BF4;&#x201C;&#x6211;&#x89C9;&#x5F97;&#x66F4;&#x597D;&#x201D;&#xFF0C;&#x90A3;&#x201C;&#x68AF;&#x5EA6;&#x201D;&#x4F1A;&#x8D8A;&#x6765;&#x8D8A;&#x4E3B;&#x89C2;&#xFF0C;&#x8D8A;&#x8C03;&#x8D8A;&#x7384;&#x5B66;&#x3002;</p>
<hr>
<h2 id="4&#xFF09;&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;&#x5DE5;&#x5177;&#x578B; Agent &#x7FFB;&#x8F66; &#x2014;&#x2014; Trace/OPTO &#x60F3;&#x89E3;&#x51B3;&#x7684;&#x201C;&#x5F52;&#x56E0;&#x95EE;&#x9898;&#x201D;"><a href="#4&#xFF09;&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;&#x5DE5;&#x5177;&#x578B; Agent &#x7FFB;&#x8F66; &#x2014;&#x2014; Trace/OPTO &#x60F3;&#x89E3;&#x51B3;&#x7684;&#x201C;&#x5F52;&#x56E0;&#x95EE;&#x9898;&#x201D;"></a>4&#xFF09;&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;&#x5DE5;&#x5177;&#x578B; Agent &#x7FFB;&#x8F66; &#x2014;&#x2014; Trace/OPTO &#x60F3;&#x89E3;&#x51B3;&#x7684;&#x201C;&#x5F52;&#x56E0;&#x95EE;&#x9898;&#x201D;</h2>
<h3 id="&#x573A;&#x666F;&#xFF1A;Text-to-SQL &#x7684;&#x201C;&#x80CC;&#x9505;&#x4FA0;&#x201D;"><a href="#&#x573A;&#x666F;&#xFF1A;Text-to-SQL &#x7684;&#x201C;&#x80CC;&#x9505;&#x4FA0;&#x201D;"></a>&#x573A;&#x666F;&#xFF1A;Text-to-SQL &#x7684;&#x201C;&#x80CC;&#x9505;&#x4FA0;&#x201D;</h3>
<p>&#x505A;&#x4E00;&#x4E2A; Text-to-SQL Agent&#xFF0C;&#x94FE;&#x8DEF;&#x5927;&#x6982;&#x662F;&#xFF1A;</p>
<ol>
<li><strong>Step A</strong>: &#x8BFB;&#x7528;&#x6237;&#x95EE;&#x9898;</li>
<li><strong>Step B</strong>: &#xFF08;&#x53EF;&#x9009;&#xFF09;&#x67E5;&#x8868;&#x7ED3;&#x6784; schema</li>
<li><strong>Step C</strong>: &#x751F;&#x6210; SQL</li>
<li><strong>Step D</strong>: &#x6267;&#x884C; SQL &#x2192; <strong>&#x62A5;&#x9519;&#xFF1A;Table not found</strong></li>
</ol>
<p>&#x7FFB;&#x8F66;&#x4E86;&#x3002;&#x5982;&#x679C;&#x662F;&#x4F20;&#x7EDF;&#x8C03;&#x8BD5;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x4F1A;&#x53BB;&#x6539; Step C &#x7684; Prompt&#xFF1A;&#x201C;&#x8BF7;&#x6CE8;&#x610F;&#x8868;&#x540D;&#x6B63;&#x786E;&#x201D;&#x3002;<br>
&#x4F46;&#x771F;&#x6B63;&#x7684;&#x539F;&#x56E0;&#x53EF;&#x80FD;&#x662F; <strong>Step B &#x538B;&#x6839;&#x6CA1;&#x53BB;&#x67E5;&#x8868;</strong>&#xFF0C;&#x6216;&#x8005;&#x67E5;&#x9519;&#x4E86;&#x5E93;&#x3002;</p>
<p>&#x5FAE;&#x8F6F; Trace/OPTO &#x7684;&#x613F;&#x666F;&#xFF0C;&#x662F;&#x628A;&#x8FD9;&#x79CD;&#x590D;&#x5408;&#x7CFB;&#x7EDF;&#x5F53;&#x6210;&#x52A8;&#x6001;&#x8BA1;&#x7B97;&#x56FE;&#xFF0C;&#x5E76;&#x57FA;&#x4E8E;&#x53CD;&#x9988;&#x505A;&#x7AEF;&#x5230;&#x7AEF;&#x4F18;&#x5316;&#xFF1A;<a href="https://www.microsoft.com/en-us/research/blog/tracing-the-path-to-self-adapting-ai-agents/"><code>Tracing the path to self-adapting AI agents</code></a>&#x3002;</p>
<h3 id="&#x201C;&#x6700;&#x5C0F;&#x5B50;&#x56FE;&#x201D;&#x8C03;&#x8BD5;&#x6545;&#x4E8B;"><a href="#&#x201C;&#x6700;&#x5C0F;&#x5B50;&#x56FE;&#x201D;&#x8C03;&#x8BD5;&#x6545;&#x4E8B;"></a>&#x201C;&#x6700;&#x5C0F;&#x5B50;&#x56FE;&#x201D;&#x8C03;&#x8BD5;&#x6545;&#x4E8B;</h3>
<p>OPTO &#x7684;&#x6838;&#x5FC3;&#x903B;&#x8F91;&#xFF08;OPTO-Prime&#xFF09;&#x662F;&#x505A;<strong>&#x56E0;&#x679C;&#x5207;&#x7247;</strong>&#xFF1A;</p>
<ol>
<li><strong>Capture Trace</strong>&#xFF1A;&#x8BB0;&#x5F55;&#x5168;&#x8FC7;&#x7A0B; A-&gt;B-&gt;C-&gt;D&#x3002;</li>
<li><strong>Backtrack&#xFF08;&#x56DE;&#x6EAF;&#xFF09;</strong>&#xFF1A;&#x6536;&#x5230; D &#x7684;&#x62A5;&#x9519;&#xFF0C;OPTO &#x53D1;&#x73B0; D &#x4F9D;&#x8D56; C&#xFF0C;C &#x4F9D;&#x8D56; B&#x3002;</li>
<li><strong>Causal Graph&#xFF08;&#x5F52;&#x56E0;&#xFF09;</strong>&#xFF1A;&#x5B83;&#x53D1;&#x73B0; C &#x5199;&#x9519;&#x662F;&#x56E0;&#x4E3A; B &#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#x6B63;&#x786E;&#x7684; Schema &#x4FE1;&#x606F;&#x3002;</li>
<li><strong>Optimization&#xFF08;&#x4F18;&#x5316;&#xFF09;</strong>&#xFF1A;
<ul>
<li>&#x5B83;&#x4E0D;&#x4F1A;&#x53BB;&#x778E;&#x6539; C &#x7684; Prompt&#x3002;</li>
<li>&#x5B83;&#x4F1A;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x9488;&#x5BF9; B &#x7684;&#x4F18;&#x5316;&#x5EFA;&#x8BAE;&#xFF1A;&#x201C;&#x5728;&#x6D89;&#x53CA;&#x6A21;&#x7CCA;&#x8868;&#x540D;&#x65F6;&#xFF0C;&#x5F3A;&#x5236;&#x6267;&#x884C; schema &#x67E5;&#x8BE2;&#x5DE5;&#x5177;&#x3002;&#x201D;</li>
<li>&#x6216;&#x8005;&#x66F4;&#x76F4;&#x63A5;&#x5730;&#xFF1A;&#x628A; B &#x6B65;&#x9AA4;&#x7684; <code>tool_use_strategy</code> &#x53C2;&#x6570;&#x66F4;&#x65B0;&#x4E86;&#x3002;</li>
</ul>
</li>
</ol>
<p>&#x8FD9;&#x5C31;&#x662F;**&#x201C;&#x4FE1;&#x7528;&#x5206;&#x914D;&#xFF08;Credit Assignment&#xFF09;&#x201D;**&#x2014;&#x2014;&#x628A;&#x9505;&#x7529;&#x7ED9;&#x771F;&#x6B63;&#x8BE5;&#x8D1F;&#x8D23;&#x7684;&#x90A3;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x5728;&#x62A5;&#x9519;&#x7684;&#x5730;&#x65B9;&#x4FEE;&#x4FEE;&#x8865;&#x8865;&#x3002;</p>
<hr>
<h2 id="5&#xFF09;AdalFlow&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x770B;&#x8D77;&#x6765;&#x50CF; DSPy&#xFF1F;&#x56E0;&#x4E3A;&#x5B83;&#x66F4;&#x50CF;&#x201C;&#x5DE5;&#x7A0B;&#x6574;&#x5408;&#x5668;&#x201D;"><a href="#5&#xFF09;AdalFlow&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x770B;&#x8D77;&#x6765;&#x50CF; DSPy&#xFF1F;&#x56E0;&#x4E3A;&#x5B83;&#x66F4;&#x50CF;&#x201C;&#x5DE5;&#x7A0B;&#x6574;&#x5408;&#x5668;&#x201D;"></a>5&#xFF09;AdalFlow&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x770B;&#x8D77;&#x6765;&#x50CF; DSPy&#xFF1F;&#x56E0;&#x4E3A;&#x5B83;&#x66F4;&#x50CF;&#x201C;&#x5DE5;&#x7A0B;&#x6574;&#x5408;&#x5668;&#x201D;</h2>
<p>AdalFlow &#x7684;&#x5B9A;&#x4F4D;&#x975E;&#x5E38;&#x76F4;&#x767D;&#xFF1A;&#x4E00;&#x4E2A; PyTorch-like &#x7684;&#x5E93;&#xFF0C;&#x7528;&#x6765;&#x6784;&#x5EFA;&#x5E76;&#x81EA;&#x52A8;&#x4F18;&#x5316; LLM &#x5DE5;&#x4F5C;&#x6D41;&#xFF08;&#x4ECE; RAG &#x5230; Agents&#xFF09;&#xFF1A;<a href="https://github.com/SylphAI-Inc/AdalFlow"><code>SylphAI-Inc/AdalFlow</code></a>&#x3002;</p>
<p>&#x4F60;&#x89C9;&#x5F97;&#x5B83;&#x50CF; DSPy&#xFF0C;&#x5F88;&#x6B63;&#x5E38;&#xFF1A;</p>
<ul>
<li>&#x90FD;&#x63A8;&#x5D07;&#x201C;&#x7528;&#x4EE3;&#x7801;&#x63CF;&#x8FF0;&#x884C;&#x4E3A;&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x624B;&#x5199;&#x957F; prompt</li>
<li>&#x90FD;&#x63D0;&#x4F9B;&#x201C;&#x4F18;&#x5316;&#x201D;&#x80FD;&#x529B;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x7ED9;&#x7F16;&#x6392;&#xFF09;</li>
</ul>
<p>&#x5B83;&#x66F4;&#x50CF;&#x662F;&#x628A;&#x51E0;&#x6761;&#x8DEF;&#x7EBF;&#x63C9;&#x5728;&#x4E00;&#x8D77;&#x7684;&#x5DE5;&#x7A0B;&#x4EA7;&#x7269;&#xFF1A;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x5F53;&#x6210;&#x4E00;&#x4E2A;&#x201C;&#x66F4;&#x91CD;&#x3001;&#x66F4;&#x5168;&#x201D;&#x7684;&#x6846;&#x67B6;&#x9009;&#x9879;&#xFF0C;&#x7528;&#x4E8E;&#x5FEB;&#x901F;&#x642D;&#x5EFA;&#x5E76;&#x8FED;&#x4EE3;&#x5B8C;&#x6574;&#x5DE5;&#x4F5C;&#x6D41;&#x3002;</p>
<hr>
<h2 id="6&#xFF09;&#x5230;&#x5E95;&#x5B9E;&#x4E0D;&#x5B9E;&#x7528;&#xFF1F;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;&#x770B;&#x4F60;&#x6709;&#x6CA1;&#x6709;&#x201C;&#x88C1;&#x5224;&#x201D;"><a href="#6&#xFF09;&#x5230;&#x5E95;&#x5B9E;&#x4E0D;&#x5B9E;&#x7528;&#xFF1F;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;&#x770B;&#x4F60;&#x6709;&#x6CA1;&#x6709;&#x201C;&#x88C1;&#x5224;&#x201D;"></a>6&#xFF09;&#x5230;&#x5E95;&#x5B9E;&#x4E0D;&#x5B9E;&#x7528;&#xFF1F;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;&#x770B;&#x4F60;&#x6709;&#x6CA1;&#x6709;&#x201C;&#x88C1;&#x5224;&#x201D;</h2>
<p>&#x8FD9;&#x7C7B;&#x65B9;&#x6CD5;&#x662F;&#x5426;&#x5B9E;&#x7528;&#xFF0C;&#x4E0D;&#x53D6;&#x51B3;&#x4E8E;&#x6846;&#x67B6;&#x6709;&#x591A;&#x9177;&#xFF0C;&#x800C;&#x53D6;&#x51B3;&#x4E8E;&#x4F60;&#x662F;&#x5426;&#x5177;&#x5907;&#x4E09;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<ol>
<li><strong>&#x88C1;&#x5224;&#xFF08;metric/verifier&#xFF09;</strong>&#xFF1A;&#x5355;&#x6D4B;&#x3001;&#x89C4;&#x5219;&#x3001;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x3001;&#x7ED3;&#x6784;&#x6821;&#x9A8C;&#x2026;&#x2026;&#x5FC5;&#x987B;&#x80FD;&#x7ED9;&#x51FA;&#x7A33;&#x5B9A;&#x597D;&#x574F;&#x4FE1;&#x53F7;</li>
<li><strong>&#x6837;&#x672C;/&#x573A;&#x666F;&#x8986;&#x76D6;</strong>&#xFF1A;&#x51E0;&#x5341;&#x5230;&#x51E0;&#x767E;&#x6761;&#x8986;&#x76D6;&#x771F;&#x5B9E;&#x8FB9;&#x754C;&#x6761;&#x4EF6;&#x7684;&#x6848;&#x4F8B;&#xFF08;&#x6216;&#x53EF;&#x91CD;&#x590D;&#x8FD0;&#x884C;&#x7684;&#x73AF;&#x5883;&#xFF09;</li>
<li><strong>&#x53EF;&#x89C2;&#x6D4B;&#x6027;&#xFF08;trace/log&#xFF09;</strong>&#xFF1A;&#x6BCF;&#x4E00;&#x6B65;&#x8F93;&#x5165;&#x8F93;&#x51FA;&#x3001;&#x5DE5;&#x5177;&#x53C2;&#x6570;&#x3001;&#x9519;&#x8BEF;&#x90FD;&#x80FD;&#x56DE;&#x653E;</li>
</ol>
<p>&#x5982;&#x679C;&#x8FD9;&#x4E09;&#x4EF6;&#x4E8B;&#x9F50;&#x4E86;&#xFF0C;&#x6536;&#x76CA;&#x5F80;&#x5F80;&#x975E;&#x5E38;&#x53EF;&#x89C2;&#xFF1B;&#x5982;&#x679C;&#x7F3A;&#x4E00;&#x4E24;&#x4EF6;&#xFF0C;&#x4E0A;&#x8FD9;&#x4E9B;&#x6846;&#x67B6;&#x5F88;&#x5BB9;&#x6613;&#x53D8;&#x6210;&#x201C;&#x66F4;&#x8D35;&#x7684;&#x7384;&#x5B66;&#x8C03;&#x53C2;&#x201D;&#x3002;</p>
<hr>
<h2 id="7&#xFF09;&#x600E;&#x4E48;&#x843D;&#x5730;&#xFF1A;&#x4E00;&#x4EFD;&#x201C;&#x4ECE;&#x96F6;&#x5230;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x7684;&#x6700;&#x5C0F;&#x6E05;&#x5355;"><a href="#7&#xFF09;&#x600E;&#x4E48;&#x843D;&#x5730;&#xFF1A;&#x4E00;&#x4EFD;&#x201C;&#x4ECE;&#x96F6;&#x5230;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x7684;&#x6700;&#x5C0F;&#x6E05;&#x5355;"></a>7&#xFF09;&#x600E;&#x4E48;&#x843D;&#x5730;&#xFF1A;&#x4E00;&#x4EFD;&#x201C;&#x4ECE;&#x96F6;&#x5230;&#x53EF;&#x4F18;&#x5316;&#x201D;&#x7684;&#x6700;&#x5C0F;&#x6E05;&#x5355;</h2>
<p>&#x5982;&#x679C;&#x4F60;&#x60F3;&#x628A;&#x5B83;&#x843D;&#x5230;&#x81EA;&#x5DF1;&#x7684;&#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x5EFA;&#x8BAE;&#x6309;&#x8FD9;&#x4E2A;&#x987A;&#x5E8F;&#xFF08;&#x8D8A;&#x5F80;&#x540E;&#x8D8A;&#x82B1;&#x94B1;&#xFF09;&#xFF1A;</p>
<ol>
<li><strong>&#x5148;&#x628A;&#x8BC4;&#x4F30;&#x505A;&#x51FA;&#x6765;</strong>&#xFF1A;&#x54EA;&#x6015;&#x662F;&#x6700;&#x7C97;&#x7CD9;&#x7684; pass/fail</li>
<li><strong>&#x6536;&#x96C6;&#x4E00;&#x4E2A;&#x5C0F;&#x800C;&#x786C;&#x7684; benchmark</strong>&#xFF1A;&#x4F18;&#x5148;&#x8986;&#x76D6;&#x6700;&#x5E38;&#x7FFB;&#x8F66;&#x7684;&#x8FB9;&#x754C;&#x6761;&#x4EF6;</li>
<li><strong>&#x628A;&#x94FE;&#x8DEF;&#x6253;&#x901A;&#x53EF;&#x89C2;&#x6D4B;&#x6027;</strong>&#xFF1A;&#x65E5;&#x5FD7;&#x8981;&#x80FD;&#x5B9A;&#x4F4D;&#x5230;&#x201C;&#x662F;&#x54EA;&#x4E00;&#x6B65;&#x5BFC;&#x81F4;&#x4E86;&#x5931;&#x8D25;&#x201D;</li>
<li><strong>&#x9009;&#x5DE5;&#x5177;&#x8DEF;&#x7EBF;</strong>&#xFF1A;
<ul>
<li>&#x6709;&#x6E05;&#x6670;&#x6807;&#x7B7E;&#x4E0E;&#x6570;&#x636E;&#x96C6;&#xFF1A;&#x4F18;&#x5148; DSPy &#x7684;&#x7F16;&#x8BD1;&#x5F0F;&#x4F18;&#x5316; <a href="https://dspy.ai/"><code>DSPy</code></a></li>
<li>&#x6709;&#x5F3A;&#x53CD;&#x9988;&#x3001;&#x94FE;&#x8DEF;&#x957F;&#x3001;&#x9519;&#x8BEF;&#x591A;&#xFF1A;&#x8003;&#x8651; TextGrad &#x8FD9;&#x7C7B;&#x53CD;&#x9988;&#x6539;&#x5199; <a href="https://github.com/zou-group/textgrad"><code>zou-group/textgrad</code></a></li>
<li>&#x9700;&#x8981;&#x6846;&#x67B6;&#x5316;&#x642D;&#x5EFA;&#x5DE5;&#x4F5C;&#x6D41;&#xFF1A;&#x53EF;&#x8BC4;&#x4F30; AdalFlow <a href="https://github.com/SylphAI-Inc/AdalFlow"><code>SylphAI-Inc/AdalFlow</code></a></li>
<li>&#x5E0C;&#x671B;&#x505A;&#x201C;&#x7CFB;&#x7EDF;&#x7EA7;&#x81EA;&#x9002;&#x5E94;&#x201D;&#xFF1A;&#x7528; Trace/OPTO &#x7684;&#x601D;&#x8DEF;&#x8BBE;&#x8BA1;&#x4F60;&#x7684;&#x56FE;&#x4E0E;&#x53CD;&#x9988; <a href="https://www.microsoft.com/en-us/research/blog/tracing-the-path-to-self-adapting-ai-agents/"><code>Tracing the path to self-adapting AI agents</code></a></li>
</ul>
</li>
<li><strong>&#x6700;&#x540E;&#x518D;&#x8003;&#x8651;&#x5FAE;&#x8C03;</strong>&#xFF1A;&#x5F53;&#x4F60;&#x786E;&#x8BA4;&#x201C;&#x7CFB;&#x7EDF;&#x53C2;&#x6570;&#x4F18;&#x5316;&#x201D;&#x5DF2;&#x7ECF;&#x628A;&#x5DE5;&#x7A0B;&#x6C34;&#x5206;&#x6324;&#x5E72;&#x51C0;&#xFF0C;&#x800C;&#x80FD;&#x529B;&#x74F6;&#x9888;&#x4ECD;&#x5728;&#x6A21;&#x578B;&#x672C;&#x4F53;&#x65F6;&#xFF0C;&#x518D;&#x8D70;&#x6743;&#x91CD;&#x66F4;&#x65B0;&#xFF08;SFT/RL&#xFF09;&#x3002;</li>
</ol>
<h3 id="&#x4E00;&#x5F20;&#x201C;&#x5FEB;&#x901F;&#x9009;&#x578B;&#x8868;&#x201D;"><a href="#&#x4E00;&#x5F20;&#x201C;&#x5FEB;&#x901F;&#x9009;&#x578B;&#x8868;&#x201D;"></a>&#x4E00;&#x5F20;&#x201C;&#x5FEB;&#x901F;&#x9009;&#x578B;&#x8868;&#x201D;</h3>
<table>
<thead>
<tr>
<th>&#x4F60;&#x7684;&#x73B0;&#x72B6;</th>
<th>&#x66F4;&#x50CF;&#x54EA;&#x6761;&#x8DEF;&#x7EBF;</th>
<th>&#x4F60;&#x9700;&#x8981;&#x5148;&#x8865;&#x7684;&#x4E1C;&#x897F;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6709;&#x660E;&#x786E;&#x6807;&#x7B7E;/&#x6807;&#x51C6;&#x7B54;&#x6848;&#xFF08;&#x5206;&#x7C7B;&#x3001;&#x62BD;&#x53D6;&#x3001;QA&#xFF09;</td>
<td>DSPy</td>
<td>&#x8BAD;&#x7EC3;&#x96C6; + &#x7A33;&#x5B9A;&#x6307;&#x6807;&#xFF08;accuracy/F1/EM&#xFF09;</td>
</tr>
<tr>
<td>&#x6CA1;&#x6709;&#x6807;&#x7B7E;&#xFF0C;&#x4F46;&#x6709;&#x5F3A;&#x53CD;&#x9988;&#xFF08;&#x5355;&#x6D4B;/&#x53EF;&#x6267;&#x884C;&#x6027;/&#x7ED3;&#x6784;&#x6821;&#x9A8C;&#xFF09;</td>
<td>TextGrad</td>
<td>&#x88C1;&#x5224;&#x51FD;&#x6570;&#xFF08;pass/fail &#x6216;&#x5F97;&#x5206;&#xFF09;+ &#x53EF;&#x56DE;&#x653E;&#x65E5;&#x5FD7;</td>
</tr>
<tr>
<td>&#x60F3;&#x5FEB;&#x901F;&#x642D;&#x5EFA;&#x5E76;&#x8FED;&#x4EE3;&#x5B8C;&#x6574;&#x5DE5;&#x4F5C;&#x6D41;&#xFF08;RAG/Agent/&#x5DE5;&#x5177;&#x94FE;&#xFF09;</td>
<td>AdalFlow</td>
<td>&#x5148;&#x5B9A;&#x4E49;&#x8BC4;&#x4F30;&#xFF0C;&#x518D;&#x7528;&#x6846;&#x67B6;&#x628A;&#x94FE;&#x8DEF;&#x5DE5;&#x7A0B;&#x5316;</td>
</tr>
<tr>
<td>&#x94FE;&#x8DEF;&#x5F88;&#x957F;&#xFF0C;&#x5931;&#x8D25;&#x70B9;&#x5F88;&#x591A;&#xFF0C;&#x6700;&#x75DB;&#x662F;&#x201C;&#x5230;&#x5E95;&#x8BE5;&#x6539;&#x54EA;&#x91CC;&#x201D;</td>
<td>Trace/OPTO&#xFF08;&#x601D;&#x8DEF;&#xFF09;</td>
<td>&#x628A;&#x7CFB;&#x7EDF;&#x62C6;&#x6210;&#x56FE; + &#x628A;&#x53CD;&#x9988;&#x80FD;&#x5F52;&#x56E0;&#x5230;&#x4E0A;&#x6E38;&#x53C2;&#x6570;</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="8&#xFF09;&#x7ED3;&#x8BED;&#xFF1A;&#x4ECE;&#x201C;&#x5199; Prompt&#x201D;&#x5230;&#x201C;&#x5199;&#x8BC4;&#x4F30;&#x201D;"><a href="#8&#xFF09;&#x7ED3;&#x8BED;&#xFF1A;&#x4ECE;&#x201C;&#x5199; Prompt&#x201D;&#x5230;&#x201C;&#x5199;&#x8BC4;&#x4F30;&#x201D;"></a>8&#xFF09;&#x7ED3;&#x8BED;&#xFF1A;&#x4ECE;&#x201C;&#x5199; Prompt&#x201D;&#x5230;&#x201C;&#x5199;&#x8BC4;&#x4F30;&#x201D;</h2>
<p>&#x8FD9;&#x4E9B;&#x6846;&#x67B6;&#x5171;&#x540C;&#x6307;&#x5411;&#x4E00;&#x4E2A;&#x73B0;&#x5B9E;&#xFF1A;<br>
&#x5728; Agent &#x65F6;&#x4EE3;&#xFF0C;&#x6700;&#x7A00;&#x7F3A;&#x7684;&#x4E0D;&#x662F; prompt &#x7075;&#x611F;&#xFF0C;&#x800C;&#x662F;<strong>&#x53EF;&#x9A8C;&#x8BC1;&#x6027;</strong>&#x3002;</p>
<p>&#x5F53;&#x4F60;&#x80FD;&#x7528;&#x6D4B;&#x8BD5;&#x3001;&#x6307;&#x6807;&#x3001;&#x89C4;&#x5219;&#x3001;&#x53CD;&#x9988;&#x628A;&#x201C;&#x597D;&#x201D;&#x5B9A;&#x4E49;&#x6E05;&#x695A;&#xFF0C;&#x4F18;&#x5316;&#x5C31;&#x4F1A;&#x4ECE;&#x7384;&#x5B66;&#x53D8;&#x5DE5;&#x7A0B;&#xFF1B;<br>
&#x5F53;&#x4F60;&#x53EA;&#x80FD;&#x51ED;&#x611F;&#x89C9;&#x8BF4;&#x201C;&#x66F4;&#x50CF;&#x4EBA;&#x201D;&#x201C;&#x66F4;&#x81EA;&#x7136;&#x201D;&#xFF0C;&#x6240;&#x8C13;&#x201C;&#x81EA;&#x52A8;&#x4F18;&#x5316;&#x201D;&#x5C31;&#x5F88;&#x96BE;&#x7A33;&#x5B9A;&#x6536;&#x655B;&#x3002;</p>
<p>&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF1A;&#x771F;&#x6B63;&#x7684;&#x6280;&#x672F;&#x95E8;&#x69DB;&#x4E0D;&#x662F;&#x201C;Prompt &#x5DE5;&#x7A0B;&#x201D;&#xFF0C;&#x800C;&#x662F;<strong>&#x8BC4;&#x4F30;&#x5DE5;&#x7A0B;</strong>&#x3002;</p>
`,E=[{level:1,title:"可优化的 AI Agent：用 3 个例子讲清 DSPy、TextGrad、AdalFlow 与 Trace/OPTO",children:[{level:2,title:"1）先把“可优化”说透：优化的不是权重，而是系统参数",children:[]},{level:2,title:"2）例子一：分类/抽取任务 —— DSPy 为什么像“编译器”",children:[{level:3,title:"场景",children:[]},{level:3,title:"DSPy 的核心思路",children:[]},{level:3,title:"一个很直观的“编译前/编译后”差别",children:[]},{level:3,title:"DSPy 的前置条件（非常硬）",children:[]}]},{level:2,title:"3）例子二：算术/推理/格式不稳 —— TextGrad 的“文本梯度”到底是什么",children:[{level:3,title:"场景",children:[]},{level:3,title:"“文本梯度”不是微积分，是“可执行的改写建议”",children:[]},{level:3,title:"进阶例子：代码解题（Solution）优化",children:[]},{level:3,title:"你可以把它想象成“自动 Code Review”",children:[]},{level:3,title:"TextGrad 的前置条件",children:[]}]},{level:2,title:"4）例子三：工具型 Agent 翻车 —— Trace/OPTO 想解决的“归因问题”",children:[{level:3,title:"场景：Text-to-SQL 的“背锅侠”",children:[]},{level:3,title:"“最小子图”调试故事",children:[]}]},{level:2,title:"5）AdalFlow：为什么看起来像 DSPy？因为它更像“工程整合器”",children:[]},{level:2,title:"6）到底实不实用？一句话：看你有没有“裁判”",children:[]},{level:2,title:"7）怎么落地：一份“从零到可优化”的最小清单",children:[{level:3,title:"一张“快速选型表”",children:[]}]},{level:2,title:"8）结语：从“写 Prompt”到“写评估”",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
