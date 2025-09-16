const x={},F=`<h1 id="AiNotes"><a href="#AiNotes"></a>AiNotes</h1>
<p>AI &#x7684;&#x6458;&#x8981;&#x4E0E;&#x601D;&#x8003;</p>
<hr>
<h1 id="Defeating Nondeterminism in LLM Inference"><a href="#Defeating Nondeterminism in LLM Inference"></a><a href="https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/">Defeating Nondeterminism in LLM Inference</a></h1>
<ul>
<li>LLM &#x63A8;&#x7406;&#x7ED3;&#x679C;&#x4E0D;&#x4E00;&#x81F4;&#xFF0C;&#x6839;&#x672C;&#x539F;&#x56E0;&#x662F;&#x6D6E;&#x70B9;&#x6570;&#x52A0;&#x6CD5;&#x987A;&#x5E8F;&#x53D7; kernel &#x5E76;&#x884C;&#x5B9E;&#x73B0;&#x5F71;&#x54CD;&#xFF0C;&#x5C24;&#x5176;&#x662F; attention kernel &#x7684;&#x5206;&#x6BB5;&#x52A0;&#x6CD5;&#x3002;</li>
<li>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF1A;&#x53EA;&#x8981;&#x8BA9;&#x52A0;&#x6CD5;&#x987A;&#x5E8F;&#x4E0E; batch &#x5927;&#x5C0F;&#x65E0;&#x5173;&#xFF08;batch-invariant&#xFF09;&#xFF0C;&#x5C31;&#x80FD;&#x5B9E;&#x73B0;&#x5B8C;&#x5168;&#x786E;&#x5B9A;&#x6027;&#x7684;&#x63A8;&#x7406;&#x3002;&#xFF08;&#x91C7;&#x7528;&#x201C;&#x56FA;&#x5B9A;&#x5206;&#x6BB5;&#x5927;&#x5C0F;&#x201D;&#x7684;&#x7B56;&#x7565;&#xFF08;fixed split-size&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x201C;&#x56FA;&#x5B9A;&#x5206;&#x6BB5;&#x6570;&#x201D;&#x3002;&#x5BF9;&#x4E8E;&#x540C;&#x4E00;&#x4E2A;&#x5E8F;&#x5217;&#x957F;&#x5EA6;&#xFF0C;&#x65E0;&#x8BBA;&#x8FD9;&#x4E2A;&#x5E8F;&#x5217;&#x5728;&#x4EC0;&#x4E48;&#x6837;&#x7684;batch&#x4E2D;&#xFF0C;&#x62C6;&#x5206;&#x65B9;&#x5F0F;&#x90FD;&#x5B8C;&#x5168;&#x4E00;&#x6837;&#x3002;&#xFF09;</li>
</ul>
<h1 id="&#x300A;Why Language Models Hallucinate&#x300B;"><a href="#&#x300A;Why Language Models Hallucinate&#x300B;"></a><a href="https://www.arxiv.org/pdf/2509.04664">&#x300A;Why Language Models Hallucinate&#x300B;</a></h1>
<ul>
<li>
<p>LLM &#x7684;&#x201C;&#x5E7B;&#x89C9;&#x201D;&#xFF08;&#x751F;&#x6210;&#x81EA;&#x4FE1;&#x4F46;&#x9519;&#x8BEF;&#x7684;&#x4FE1;&#x606F;&#xFF09;&#x5E76;&#x975E;&#x5355;&#x7EAF;&#x5B9E;&#x73B0;&#x7F3A;&#x9677;&#xFF0C;&#x800C;&#x662F;&#x8BAD;&#x7EC3;&#x4E0E;&#x8BC4;&#x4F30;&#x6D41;&#x7A0B;&#x5728;&#x7EDF;&#x8BA1;&#x4E0A;&#x4F1A;&#x9F13;&#x52B1;&#x201C;&#x778E;&#x8499;/&#x731C;&#x6D4B;&#x201D;&#x800C;&#x4E0D;&#x662F;&#x627F;&#x8BA4;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#x2014;&#x2014;&#x6362;&#x8A00;&#x4E4B;&#xFF0C;&#x73B0;&#x6709;&#x7684; benchmarking/leaderboard &#x6FC0;&#x52B1;&#x628A;&#x6A21;&#x578B;&#x5F53;&#x201C;&#x8003;&#x8BD5;&#x673A;&#x5668;&#x201D;&#x8BAD;&#x7EC3;&#xFF0C;&#x731C;&#x7B54;&#x6848;&#x80FD;&#x62FF;&#x9AD8;&#x5206;</p>
</li>
<li>
<p>&#x4ECE;&#x8BC4;&#x4F30;&#x5C42;&#x9762;&#x6539;&#x52A8;&#xFF1A;&#x4E0D;&#x8981;&#x518D;&#x7528;&#x7B80;&#x5355;&#x7684;&#x4E8C;&#x5143;&#x6B63;&#x786E;/&#x9519;&#x8BEF;&#x6765;&#x4E3B;&#x5BFC; leaderboard&#xFF1B;&#x6539;&#x6210;&#x5141;&#x8BB8;&#x5E76;&#x5956;&#x52B1;&#x5408;&#x7406;&#x7684;&#x7F6E;&#x4FE1;&#x8868;&#x8FBE;&#xFF08;explicit confidence targets&#xFF09;&#x3001;&#x90E8;&#x5206;&#x4FE1;&#x7528;&#x6216;&#x4F7F;&#x7528; proper scoring rules</p>
</li>
</ul>
<p>AI &#x5E94;&#x7528;&#x542F;&#x53D1;</p>
<ul>
<li>&#x8BA4;&#x8BC6;&#x201C;&#x5E7B;&#x89C9;&#x201D;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x4E0D;&#x53EF;&#x907F;&#x514D;&#x7684;&#x4E0B;&#x754C;&#xFF0C;&#x662F;&#x7EDF;&#x8BA1;&#x5B66;&#x4E60;&#x7684;&#x5FC5;&#x7136;&#x4EA7;&#x7269;&#xFF08;&#x5C24;&#x5176;&#x5728;&#x4F4E;&#x9891;/&#x672A;&#x89C1;&#x8FC7;&#x7684;&#x77E5;&#x8BC6;&#x70B9;&#x4E0A;&#xFF09;&#x3002;</li>
<li>&#x6539;&#x53D8;&#x8BC4;&#x4F30;&#x4E0E;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF1A;&#x5956;&#x52B1;&#x201C;&#x8BDA;&#x5B9E;&#x201D;&#x800C;&#x975E;&#x201C;&#x4E71;&#x731C;&#x201D;</li>
<li>&#x7ED3;&#x5408;&#x68C0;&#x7D22;&#x4E0E;&#x5916;&#x90E8;&#x9A8C;&#x8BC1;&#xFF1A;RAG + &#x6821;&#x9A8C;&#x94FE;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x8FD4;&#x56DE; {answer, confidence, evidence} &#x4E09;&#x5143;&#x7EC4;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x88F8;&#x6587;&#x672C;&#x3002;</li>
<li>&#x4EA7;&#x54C1;&#x5C42;&#x9762;&#x7684;&#x7528;&#x6237;&#x4F53;&#x9A8C;&#x8BBE;&#x8BA1;&#xFF1A;&#x9884;&#x671F;&#x7BA1;&#x7406;&#xFF0C;&#x9AD8;&#x98CE;&#x9669;&#x4E1A;&#x52A1;&#x8F85;&#x52A9;&#x51B3;&#x7B56;&#xFF0C;&#x8BBE;&#x8BA1; &#x201C;&#x68C0;&#x7D22;&#x5931;&#x8D25;&#x65F6;&#x62D2;&#x7B54;&#x201D; &#x7684;&#x8DEF;&#x5F84;&#x3002;</li>
</ul>
<h1 id="&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x6280;&#x672F;"><a href="#&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x6280;&#x672F;"></a>&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x6280;&#x672F;</h1>
<ul>
<li>&#x7A00;&#x758F;&#x81EA;&#x7F16;&#x7801;&#x5668;&#xFF08;Sparse Autoencoders, SAEs&#xFF09;</li>
<li>&#x6FC0;&#x6D3B;&#x53EF;&#x89C6;&#x5316;</li>
<li>&#x6CE8;&#x610F;&#x529B;&#x8FFD;&#x8E2A;</li>
</ul>
<h1 id="LLM &#x7684;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76; &gt; &#x5176;&#x4ED6;&#x591A;&#x6A21;&#x6001;"><a href="#LLM &#x7684;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76; &gt; &#x5176;&#x4ED6;&#x591A;&#x6A21;&#x6001;"></a>LLM &#x7684;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76; &gt; &#x5176;&#x4ED6;&#x591A;&#x6A21;&#x6001;</h1>
<ul>
<li>&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x5728; LLM &#x9886;&#x57DF;&#x76DB;&#x884C;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x6587;&#x672C;&#x8F93;&#x51FA;&#x4E0E;&#x4EBA;&#x7C7B;&#x903B;&#x8F91;&#x3001;&#x63A8;&#x7406;&#x3001;&#x77E5;&#x8BC6;&#x7CFB;&#x7EDF;&#x9AD8;&#x5EA6;&#x5BF9;&#x9F50;&#xFF0C;&#x9519;&#x8BEF;&#x6210;&#x672C;&#x9AD8;&#xFF0C;&#x9700;&#x8981;&#x7406;&#x89E3;&#x51B3;&#x7B56;&#x56E0;&#x679C;&#xFF1B;</li>
<li>&#x800C;&#x89C6;&#x89C9;&#x3001;&#x89C6;&#x9891;&#x751F;&#x6210;&#x8F93;&#x51FA;&#x9AD8;&#x7EF4;&#x3001;&#x4E3B;&#x89C2;&#x6027;&#x5F3A;&#xFF0C;&#x73B0;&#x6709;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x66F4;&#x591A;&#x504F;&#x5411;&#x611F;&#x77E5;&#x53EF;&#x89C6;&#x5316;&#xFF0C;&#x800C;&#x975E;&#x4E25;&#x683C;&#x7684;&#x903B;&#x8F91;&#x53EF;&#x8FFD;&#x6EAF;&#x3002;</li>
</ul>
<h1 id="&#x4E0D;&#x9002;&#x611F;&#x8BA9;&#x4F60;&#x53D8;&#x5F3A;&#x5927;"><a href="#&#x4E0D;&#x9002;&#x611F;&#x8BA9;&#x4F60;&#x53D8;&#x5F3A;&#x5927;"></a><a href="https://desunit.com/blog/in-the-long-run-llms-make-us-dumber/">&#x4E0D;&#x9002;&#x611F;&#x8BA9;&#x4F60;&#x53D8;&#x5F3A;&#x5927;</a></h1>
<ul>
<li>&#x660E;&#x667A;&#x5730;&#x4F7F;&#x7528; AI&#xFF0C;&#x4E0D;&#x8981;&#x8BA9;&#x5B83;&#x5E2E;&#x4F60;&#x89E3;&#x6570;&#x5B66;&#x65B9;&#x7A0B;&#x5F0F;&#xFF0C;&#x800C;&#x8981;&#x8BA9;&#x5B83;&#x67E5;&#x770B;&#x4F60;&#x7684;&#x7B54;&#x6848;&#xFF0C;&#x6765;&#x89E3;&#x91CA;&#x4F60;&#x53EF;&#x80FD;&#x9519;&#x5728;&#x54EA;&#x91CC;&#x3002;&#x4F60;&#x7684;&#x539F;&#x5219;&#x662F;&#x575A;&#x6301;&#x72EC;&#x7ACB;&#x601D;&#x8003;&#xFF0C;&#x5728;&#x8FD9;&#x4E2A;&#x57FA;&#x7840;&#x4E0A;&#x518D;&#x52A0;&#x5165; AI&#x3002;</li>
</ul>
<p>&#x4E2A;&#x4EBA;&#x601D;&#x8003;&#xFF1A;&#x4F7F;&#x7528; AI &#x505A;&#x542F;&#x53D1;&#x6027;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x81EA;&#x5DF1;&#x5F97;&#x51FA;&#x7ED3;&#x679C;&#xFF0C;&#x518D;&#x8BA9; AI Review&#xFF1B;</p>
<p>&#x7ECF;&#x5E38;&#x601D;&#x8003;&#x56F0;&#x96BE;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x8BA9;&#x601D;&#x60F3;&#x7ECF;&#x53D7;&#x8003;&#x9A8C;&#xFF0C;&#x4F60;&#x624D;&#x80FD;&#x5B66;&#x4F1A;&#x601D;&#x8003;&#x3002;</p>
<h1 id="&#x6A21;&#x62DF;&#x5B9E;&#x9A8C;"><a href="#&#x6A21;&#x62DF;&#x5B9E;&#x9A8C;"></a>&#x6A21;&#x62DF;&#x5B9E;&#x9A8C;</h1>
<ul>
<li>
<p>&#x6A21;&#x62DF; = &#x60F3;&#x8C61;&#xFF1A;&#x6A21;&#x62DF;&#x5B9E;&#x9A8C;&#x4F53;&#x73B0;&#x4E86; AI &#x7684;&#x201C;&#x60F3;&#x8C61;&#x529B;&#x201D;&#xFF0C;&#x5B83;&#x4E0D;&#x53EA;&#x662F;&#x91CD;&#x590D;&#x4EBA;&#x7C7B;&#x53D1;&#x73B0;&#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x201C;&#x518D;&#x73B0;&#x8FC7;&#x7A0B;&#x201D;&#x6765;&#x7406;&#x89E3;&#x89C4;&#x5F8B;&#x3002;</p>
</li>
<li>
<p>&#x8FC7;&#x7A0B;&#x4F18;&#x4E8E;&#x7ED3;&#x679C;&#xFF1A;&#x5B9E;&#x9A8C;&#x8BA9; AI &#x4E0D;&#x518D;&#x662F;&#x9ED1;&#x7BB1;&#x5730;&#x76F4;&#x63A5;&#x5410;&#x7B54;&#x6848;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x900F;&#x660E;&#x7684;&#x201C;&#x8BD5;&#x9A8C;&#x8FC7;&#x7A0B;&#x201D;&#x5F97;&#x51FA;&#x7ED3;&#x8BBA;&#x3002;</p>
</li>
<li>
<p>&#x8D70;&#x5411;&#x5177;&#x8EAB;&#x667A;&#x80FD;&#xFF1A;&#x8FD9;&#x4E5F;&#x662F;&#x201C;&#x5177;&#x8EAB;&#x667A;&#x80FD;&#xFF08;embodied intelligence&#xFF09;&#x201D;&#x7684;&#x91CD;&#x8981;&#x601D;&#x60F3;&#x2014;&#x2014;AI &#x4E0D;&#x53EA;&#x662F;&#x8BED;&#x8A00;&#x7B26;&#x53F7;&#x64CD;&#x4F5C;&#xFF0C;&#x800C;&#x662F;&#x4E0E;&#x4E16;&#x754C;&#x4E92;&#x52A8;&#x3002;</p>
</li>
<li>
<p><a href="https://arxiv.org/abs/2210.05359?utm_source=chatgpt.com">Mind&#x2019;s Eye: Grounded Language Model Reasoning through Simulation</a></p>
</li>
</ul>
<h1 id="&#x63A8;&#x7406;&#x7684;&#x672C;&#x8D28;"><a href="#&#x63A8;&#x7406;&#x7684;&#x672C;&#x8D28;"></a>&#x63A8;&#x7406;&#x7684;&#x672C;&#x8D28;</h1>
<p><strong>&#x672C;&#x8D28;</strong></p>
<ol>
<li>&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x5E76;&#x4E0D;&#x662F;&#x5929;&#x7136;&#x7684;&#x63A8;&#x7406;&#x5668;&#xFF0C;&#x800C;&#x662F;&#x5F3A;&#x5927;&#x7684;&#x6A21;&#x5F0F;&#x5339;&#x914D;&#x673A;&#x5668;&#x3002;</li>
<li>&#x4F46;&#x901A;&#x8FC7;&#x9002;&#x5F53;&#x7684;&#x63D0;&#x793A;&#xFF08;prompting&#xFF09;&#x548C;&#x65B9;&#x6CD5;&#x8BBE;&#x8BA1;&#xFF0C;&#x53EF;&#x4EE5;&#x8BA9; LLM &#x5177;&#x5907;&#x4E00;&#x5B9A;&#x7684;&#x201C;&#x63A8;&#x7406;&#x201D;&#x80FD;&#x529B;&#x3002;</li>
<li>&#x63A8;&#x7406;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x79CD;&#x5C06;&#x95EE;&#x9898;&#x62C6;&#x89E3;&#x4E3A;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#x3001;&#x518D;&#x9010;&#x6B65;&#x6784;&#x5EFA;&#x7B54;&#x6848;&#x7684;&#x8FC7;&#x7A0B;&#x3002;</li>
</ol>
<p><strong>&#x65B9;&#x6CD5;&#x8BBA;</strong></p>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6CD5;</th>
<th>&#x6838;&#x5FC3;&#x601D;&#x60F3;</th>
<th>&#x6F14;&#x8BB2;&#x793A;&#x4F8B;</th>
<th>&#x4F18;&#x52BF;</th>
<th>&#x53EF;&#x80FD;&#x5C40;&#x9650;</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Chain of Thought (CoT)</strong></td>
<td>&#x8BA9;&#x6A21;&#x578B;&#x9010;&#x6B65;&#x5199;&#x51FA;&#x4E2D;&#x95F4;&#x63A8;&#x7406;&#x6B65;&#x9AA4;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x7ED9;&#x7B54;&#x6848;</td>
<td>&#x7B97;&#x672F;&#x9898;&#xFF1A;12 &#x4E2A;&#x82F9;&#x679C;&#x5356; 3 &#x4E2A;&#xFF0C;&#x518D;&#x4E70; 5 &#x4E2A; &#x2192; &#x5148;&#x7B97; 12-3=9&#xFF0C;&#x518D; +5=14</td>
<td>&#x663E;&#x8457;&#x63D0;&#x9AD8;&#x6570;&#x5B66;/&#x903B;&#x8F91;&#x9898;&#x6B63;&#x786E;&#x7387;</td>
<td>&#x5982;&#x679C;&#x4E00;&#x5F00;&#x59CB;&#x6B65;&#x9AA4;&#x9519;&#xFF0C;&#x540E;&#x7EED;&#x5168;&#x9519;&#xFF1B;&#x65E0;&#x6CD5;&#x5904;&#x7406;&#x590D;&#x6742;&#x591A;&#x8DF3;&#x95EE;&#x9898;</td>
</tr>
<tr>
<td><strong>Self-Consistency</strong></td>
<td>&#x751F;&#x6210;&#x591A;&#x6761;&#x601D;&#x7EF4;&#x94FE;&#xFF0C;&#x53D6;&#x591A;&#x6570;&#x7ED3;&#x679C;&#xFF0C;&#x964D;&#x4F4E;&#x5355;&#x6B21;&#x8F93;&#x51FA;&#x9519;&#x8BEF;</td>
<td>&#x590D;&#x6742;&#x6570;&#x5B66;&#x9898;&#x6216;&#x5965;&#x6570;&#x9898;&#xFF0C;&#x751F;&#x6210; 10 &#x6761;&#x63A8;&#x7406;&#x94FE;&#xFF0C;&#x591A;&#x6570;&#x6295;&#x7968;&#x5F97;&#x5230;&#x6B63;&#x786E;&#x7B54;&#x6848;</td>
<td>&#x5BF9;&#x6297;&#x968F;&#x673A;&#x6027;&#xFF0C;&#x63D0;&#x9AD8;&#x6B63;&#x786E;&#x7387;</td>
<td>&#x589E;&#x52A0;&#x8BA1;&#x7B97;&#x91CF;&#xFF1B;&#x4ECD;&#x53D7; CoT &#x8F93;&#x51FA;&#x8D28;&#x91CF;&#x9650;&#x5236;</td>
</tr>
<tr>
<td><strong>Least-to-Most Prompting</strong></td>
<td>&#x5C06;&#x590D;&#x6742;&#x95EE;&#x9898;&#x62C6;&#x6210;&#x4E00;&#x7CFB;&#x5217;&#x7B80;&#x5355;&#x5B50;&#x95EE;&#x9898;&#xFF0C;&#x9010;&#x6B65;&#x89E3;&#x51B3;</td>
<td>3&#xD7;3 &#x7F51;&#x683C;&#x653E; 2 &#x4E2A;&#x4E0D;&#x540C;&#x989C;&#x8272;&#x7684;&#x7403; &#x2192; &#x5148;&#x95EE;&#x7B2C;&#x4E00;&#x4E2A;&#x7403;&#x4F4D;&#x7F6E;&#xFF0C;&#x518D;&#x95EE;&#x7B2C;&#x4E8C;&#x4E2A;&#x7403;&#x4F4D;&#x7F6E;&#xFF0C;&#x6700;&#x540E;&#x8003;&#x8651;&#x989C;&#x8272;&#x6392;&#x5217;</td>
<td>&#x5728;&#x591A;&#x6B65;&#x590D;&#x6742;&#x63A8;&#x7406;&#x95EE;&#x9898;&#x4E0A;&#x7A33;&#x5B9A;&#x6027;&#x5F3A;</td>
<td>&#x62C6;&#x5206;&#x95EE;&#x9898;&#x4F9D;&#x8D56;&#x4EBA;&#x4E3A;&#x8BBE;&#x8BA1;&#x6216;&#x63D0;&#x793A;&#x7B56;&#x7565;</td>
</tr>
<tr>
<td><strong>Step Back Prompting (&#x9000;&#x4E00;&#x6B65;&#x601D;&#x8003;)</strong></td>
<td>&#x5148;&#x8BA9;&#x6A21;&#x578B;&#x62BD;&#x8C61;&#x5316;&#x603B;&#x7ED3;&#x95EE;&#x9898;&#x7C7B;&#x578B;/&#x80CC;&#x666F;&#x77E5;&#x8BC6;&#xFF0C;&#x518D;&#x56DE;&#x7B54;</td>
<td>&#x7535;&#x68AF;&#x697C;&#x5C42;&#x95EE;&#x9898;&#xFF1A;&#x5148;&#x8BC6;&#x522B;&#x4E3A;&#x201C;&#x52A8;&#x6001;&#x89C4;&#x5212;&#x95EE;&#x9898;&#x201D;&#xFF0C;&#x518D;&#x5199;&#x9012;&#x63A8;&#x516C;&#x5F0F; F(n)=F(n-2)+F(n-3)</td>
<td>&#x6FC0;&#x6D3B;&#x6F5C;&#x5728;&#x77E5;&#x8BC6;&#xFF0C;&#x964D;&#x4F4E;&#x6A21;&#x578B;&#x9677;&#x5165;&#x5C40;&#x90E8;&#x9519;&#x8BEF;</td>
<td>&#x5982;&#x679C;&#x6A21;&#x578B;&#x62BD;&#x8C61;&#x9519;&#x8BEF;&#xFF0C;&#x4ECD;&#x4F1A;&#x5BFC;&#x81F4;&#x7ED3;&#x679C;&#x9519;&#x8BEF;&#xFF1B;&#x589E;&#x52A0;&#x63A8;&#x7406;&#x65F6;&#x95F4;</td>
</tr>
</tbody>
</table>
<ul>
<li><a href="https://dennyzhou.github.io/LLM-Reasoning-Stanford-CS-25.pdf">The Nature of Reasoning</a></li>
</ul>
<h1 id="Genie 3.0"><a href="#Genie 3.0"></a>Genie 3.0</h1>
<ul>
<li>Genie 1&#xFF1A;&#x8BC1;&#x660E;&#x4ECE;&#x56FE;&#x50CF;/&#x827A;&#x672F;&#x751F;&#x6210;&#x201C;&#x53EF;&#x73A9;&#x573A;&#x666F;&#x201D;&#x662F;&#x53EF;&#x884C;&#x7684;&#x3002;</li>
<li>Genie 2&#xFF1A;&#x589E;&#x5F3A;&#x7269;&#x7406;&#x4E0E;&#x591A;&#x89C6;&#x89D2;&#xFF0C;&#x671D;&#x7740;&#x201C;&#x6A21;&#x62DF;&#x5668;&#x201D;&#x65B9;&#x5411;&#x53D1;&#x5C55;&#x3002;</li>
<li>Genie 3&#xFF1A;&#x8DE8;&#x5165; 3D&#x3001;&#x6587;&#x672C;&#x9A71;&#x52A8;&#x3001;&#x957F;&#x65F6;&#x4E00;&#x81F4;&#xFF0C;&#x771F;&#x6B63;&#x80FD;&#x4F5C;&#x4E3A; AI &#x7684;&#x865A;&#x62DF;&#x201C;&#x4E16;&#x754C;&#x201D;&#x3002;</li>
</ul>
<p>&#x4E16;&#x754C;&#x6A21;&#x578B;&#xFF08;Genie&#xFF09;+ &#x591A;&#x6A21;&#x6001;&#x5927;&#x6A21;&#x578B;&#xFF08;Gemini&#xFF09;= AGI &#x7684;&#x5FC5;&#x8981;&#x6761;&#x4EF6;</p>
<h1 id="MoE"><a href="#MoE"></a>MoE</h1>
<p>MoE &#x7684;&#x8BBE;&#x8BA1;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#x4E3A;&#x4E86;&#x63D0;&#x9AD8;&#x540C;&#x89C4;&#x6A21; dense &#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#xFF0C;&#x800C;&#x662F;&#x4E3A;&#x4E86;&#x5728;<strong>&#x63A8;&#x7406;&#x8BA1;&#x7B97;&#x91CF;&#x4E0D;&#x589E;&#x52A0;&#x7684;</strong>&#x524D;&#x63D0;&#x4E0B;&#x589E;&#x52A0;&#x603B;&#x53C2;&#x6570;&#x91CF;&#x3002;</p>
<ul>
<li>&#x5982;&#x679C;&#x53D1;&#x73B0; &#x5927;&#x90E8;&#x5206;&#x795E;&#x7ECF;&#x5143;&#x90FD;&#x9891;&#x7E41;&#x6FC0;&#x6D3B; &#x2192; dense &#x6A21;&#x578B;&#x7684;&#x5BB9;&#x91CF;&#x8FD8;&#x6CA1;&#x5230;&#x5197;&#x4F59;&#x9636;&#x6BB5;&#xFF0C;&#x7528; MoE &#x4F1A;&#x767D;&#x767D;&#x589E;&#x52A0;&#x8DEF;&#x7531;&#x566A;&#x58F0;</li>
<li>&#x5982;&#x679C;&#x53D1;&#x73B0; &#x5F88;&#x591A;&#x795E;&#x7ECF;&#x5143;&#x53EA;&#x5728;&#x7279;&#x5B9A;&#x8F93;&#x5165;&#x6A21;&#x5F0F;&#x6FC0;&#x6D3B; &#x2192; &#x8BF4;&#x660E;&#x6A21;&#x578B;&#x6709;&#x660E;&#x663E;&#x201C;&#x5B50;&#x4EFB;&#x52A1;&#x5206;&#x5DE5;&#x201D; &#x2192; MoE &#x80FD;&#x8BA9;&#x8FD9;&#x4E9B;&#x5B50;&#x4EFB;&#x52A1;&#x53D8;&#x6210;&#x663E;&#x5F0F;&#x4E13;&#x5BB6;&#xFF0C;&#x51CF;&#x5C11;&#x65E0;&#x7528;&#x8BA1;&#x7B97;</li>
</ul>
<h1 id="GPT-5 &#x53D1;&#x5E03;"><a href="#GPT-5 &#x53D1;&#x5E03;"></a>GPT-5 &#x53D1;&#x5E03;</h1>
<p>GPT-5 &#x5728;&#x6027;&#x80FD;&#x548C;&#x80FD;&#x529B;&#x4E0A;&#x6709;&#x663E;&#x8457;&#x63D0;&#x5347;&#xFF0C;&#x4F46;&#x76EE;&#x524D;&#x6765;&#x770B;&#xFF0C;&#x5B83;&#x66F4;&#x50CF;&#x662F;&#x5BF9; GPT-4 &#x7CFB;&#x5217;&#x7684;&#x6301;&#x7EED;&#x8FFD;&#x8D76;&#x548C;&#x4F18;&#x5316;&#xFF0C;&#x5C1A;&#x672A;&#x5E26;&#x6765;&#x8303;&#x5F0F;&#x7EA7;&#x7684;&#x6839;&#x672C;&#x53D8;&#x9769;&#x3002;&#x662F;&#x5426;&#x80FD;&#x79F0;&#x4E3A;&#x201C;&#x8303;&#x5F0F;&#x8F6C;&#x53D8;&#x201D;&#xFF0C;&#x8FD8;&#x9700;&#x8981;&#x65F6;&#x95F4;&#x548C;&#x66F4;&#x591A;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x7684;&#x68C0;&#x9A8C;&#x3002;</p>
<p>&#xFF08;&#x4F46;&#x4EF7;&#x683C;&#x662F;&#x771F;&#x5377;&#xFF0C;&#x6BD4; gpt-4.1 &#x8FD8;&#x4F4E;&#xFF09;</p>
<h1 id="OpenAI &#x5F00;&#x653E;&#x6743;&#x91CD;&#x6A21;&#x578B; gpt&#x2011;oss"><a href="#OpenAI &#x5F00;&#x653E;&#x6743;&#x91CD;&#x6A21;&#x578B; gpt&#x2011;oss"></a>OpenAI &#x5F00;&#x653E;&#x6743;&#x91CD;&#x6A21;&#x578B; gpt&#x2011;oss</h1>
<ul>
<li>gpt&#x2011;oss&#x2011;120b &#x6A21;&#x578B;&#xFF1A;&#x6709; 117&#x202F;B &#x53C2;&#x6570;&#xFF0C;&#x5176;&#x4E2D;&#x6BCF;&#x4E2A; token &#x6FC0;&#x6D3B;&#x7EA6; 5.1&#x202F;B &#x53C2;&#x6570;&#xFF1B;&#x5168;&#x6A21;&#x578B;&#x5171;&#x6709; 128 &#x4E2A; experts&#xFF0C;&#x6BCF; token &#x6FC0;&#x6D3B; 4 &#x4E2A;&#x4E13;&#x5BB6;&#xFF1B;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#x8FBE; 128&#x202F;k tokens&#x3002;</li>
<li>gpt&#x2011;oss&#x2011;20b &#x6709; 21&#x202F;B &#x53C2;&#x6570;&#xFF0C;&#x6BCF; token &#x6FC0;&#x6D3B;&#x7EA6; 3.6&#x202F;B &#x53C2;&#x6570;&#xFF1B;&#x5171;&#x6709; 32 &#x4E2A; experts&#xFF0C;&#x6BCF; token &#x540C;&#x6837;&#x6FC0;&#x6D3B; 4 &#x4E2A;&#x4E13;&#x5BB6;&#xFF1B;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#x4E5F;&#x662F; 128&#x202F;k tokens&#x3002;</li>
</ul>
<p>&#x6280;&#x672F;&#x4F18;&#x5316;&#x7B80;&#x8981;&#x4ECB;&#x7ECD;</p>
<ol>
<li>YaRN &#x5BF9; RoPE &#x7684;&#x589E;&#x5F3A;&#x8865;&#x4E01;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x80FD;&#x5728;&#x8D85;&#x957F;&#x6587;&#x672C;&#xFF08;&#x5982; 128K token&#xFF09;&#x4E0B;&#x4F9D;&#x7136;&#x4FDD;&#x6301;&#x9AD8;&#x6548;&#x548C;&#x7A33;&#x5B9A;&#x3002;</li>
<li>&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#x91CF;&#x5316;&#x4EE3;&#x66FF;&#x8BAD;&#x7EC3;&#x540E;&#x91CF;&#x5316;</li>
<li>&#x53EF;&#x914D;&#x7F6E;&#x601D;&#x7EF4;&#x94FE;&#xFF08;CoT&#xFF09;&#xFF0C;&#x901A;&#x8FC7; prompt &#x53C2;&#x6570;&#xFF08;&#x5982; cot_level=low|medium|high&#xFF09;&#x7075;&#x6D3B;&#x63A7;&#x5236;&#x63A8;&#x7406;&#x65F6;&#x601D;&#x7EF4;&#x94FE;&#x7684;&#x5C55;&#x5F00;&#x7A0B;&#x5EA6;&#xFF0C;&#x9002;&#x5E94;&#x4E0D;&#x540C;&#x63A8;&#x7406;&#x5F3A;&#x5EA6;&#x9700;&#x6C42;&#x3002;</li>
</ol>
<h1 id="LLM &#x5DE5;&#x5177;&#x8C03;&#x7528;&#x4E0E;&#x5F02;&#x6B65;&#x63A8;&#x7406;&#x731C;&#x60F3;"><a href="#LLM &#x5DE5;&#x5177;&#x8C03;&#x7528;&#x4E0E;&#x5F02;&#x6B65;&#x63A8;&#x7406;&#x731C;&#x60F3;"></a>LLM &#x5DE5;&#x5177;&#x8C03;&#x7528;&#x4E0E;&#x5F02;&#x6B65;&#x63A8;&#x7406;&#x731C;&#x60F3;</h1>
<ol>
<li>&#x5F53;&#x524D;&#x73B0;&#x72B6;</li>
</ol>
<ul>
<li>&#x73B0;&#x5728; LLM &#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#x90FD;&#x8981;&#x91CD;&#x65B0;&#x53D1;&#x8D77;&#x4E00;&#x6B21; API &#x8BF7;&#x6C42;&#xFF0C;&#x601D;&#x8003;&#x88AB;&#x4E2D;&#x65AD;&#xFF0C;token &#x6210;&#x672C;&#x9AD8;&#x3002;</li>
<li>&#x50CF; LangGraph &#x8FD9;&#x6837;&#x7684;&#x6846;&#x67B6;&#x53EA;&#x662F;&#x7528;&#x72B6;&#x6001;&#x673A;&#x5C01;&#x88C5;&#x4E86;&#x8FD9;&#x79CD;&#x591A;&#x8F6E;&#x8FC7;&#x7A0B;&#xFF0C;&#x672C;&#x8D28;&#x4E0A;&#x4ECD;&#x662F;&#x201C;&#x65AD;&#x70B9;&#x5F0F;&#x201D;&#x63A8;&#x7406;&#x3002;</li>
</ul>
<ol start="2">
<li>&#x8BBE;&#x60F3;</li>
</ol>
<blockquote>
<p>&#x80FD;&#x5426;&#x8BA9; LLM &#x5728;<strong>&#x4E00;&#x6B21;&#x63A8;&#x7406;&#x4E2D;&#x6682;&#x505C; &#x2192; &#x7B49;&#x5F85;&#x5DE5;&#x5177; &#x2192; &#x518D;&#x7EE7;&#x7EED;&#x601D;&#x8003;</strong>&#xFF1F;&#x505A;&#x5230;&#x771F;&#x6B63;&#x7684;&#x300C;&#x601D;&#x7EF4;&#x4E0D;&#x4E2D;&#x65AD;&#x300D;&#x3002;</p>
</blockquote>
<ol start="3">
<li>&#x6280;&#x672F;&#x96BE;&#x70B9;</li>
</ol>
<ul>
<li>Transformer &#x67B6;&#x6784;&#x4E0D;&#x652F;&#x6301;&#x63A8;&#x7406;&#x4E2D;&#x201C;&#x6682;&#x505C;+&#x7EED;&#x5199;&#x201D;&#x3002;</li>
<li>&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x6CA1;&#x6559;&#x4F1A;&#x6A21;&#x578B;&#x600E;&#x4E48;&#x7B49;&#x5F85;&#x5DE5;&#x5177;&#x518D;&#x7EE7;&#x7EED;&#x601D;&#x8003;&#x3002;</li>
<li>&#x63A8;&#x7406;&#x5F15;&#x64CE;&#x4E0D;&#x652F;&#x6301;&#x5F02;&#x6B65;&#x63D2;&#x5165;&#x5916;&#x90E8;&#x7ED3;&#x679C;&#x3002;</li>
</ul>
<ol start="4">
<li>&#x6218;&#x7565;&#x610F;&#x4E49;</li>
</ol>
<ul>
<li>&#x5B9E;&#x73B0;&#x8FD9;&#x79CD;&#x5F02;&#x6B65;&#x80FD;&#x529B;&#x53EF;&#x4EE5;<strong>&#x5927;&#x5E45;&#x63D0;&#x5347;&#x667A;&#x80FD;&#x4F53;&#x6027;&#x80FD;&#x4E0E;&#x6548;&#x7387;</strong>&#x3002;&#x89E3;&#x9501;&#x957F;&#x94FE;&#x6761;&#x4EFB;&#x52A1;&#x7684;&#x771F;&#x6B63;&#x81EA;&#x52A8;&#x5316;&#xFF0C;&#x6781;&#x5927;&#x8282;&#x7701; token &#x6210;&#x672C; + &#x63A8;&#x7406;&#x5EF6;&#x8FDF;&#xFF0C;&#x6781;&#x5927;&#x63D0;&#x5347;&#x667A;&#x80FD;&#x4F53;&#x534F;&#x4F5C;&#x80FD;&#x529B;</li>
</ul>
<h1 id="LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76;&#x4FC3;&#x8FDB;&#x5927;&#x8111;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x8FDB;&#x6B65;&#xFF1F;"><a href="#LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76;&#x4FC3;&#x8FDB;&#x5927;&#x8111;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x8FDB;&#x6B65;&#xFF1F;"></a>LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;&#x7814;&#x7A76;&#x4FC3;&#x8FDB;&#x5927;&#x8111;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x8FDB;&#x6B65;&#xFF1F;</h1>
<p>LLM &#x7684;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x53EF;&#x4EE5;&#x501F;&#x9274;&#x4F20;&#x7EDF;&#x5927;&#x8111;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x6CD5;&#x8BBA;&#xFF0C;&#x53CD;&#x8FC7;&#x6765;&#x6709;&#x6CA1;&#x53EF;&#x80FD;&#x4FC3;&#x8FDB;&#x5927;&#x8111;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x7684;&#x7814;&#x7A76;&#xFF1F;</p>
<p>&#x4EA4;&#x53C9;&#x6848;&#x4F8B;&#xFF1A;</p>
<ul>
<li>&#x7A00;&#x758F;&#x7F16;&#x7801;&#x7406;&#x8BBA;&#xFF1A;&#x6700;&#x65E9;&#x7531;&#x795E;&#x7ECF;&#x79D1;&#x5B66;&#x5BB6;&#x63D0;&#x51FA;&#xFF0C;&#x540E;&#x6765;&#x88AB; AI &#x9886;&#x57DF;&#x5E7F;&#x6CDB;&#x5E94;&#x7528;&#xFF0C;&#x53CD;&#x8FC7;&#x6765;&#x53C8;&#x7528;&#x4E8E;&#x89E3;&#x91CA;&#x5927;&#x8111;&#x89C6;&#x89C9;&#x76AE;&#x5C42;&#x7684;&#x7F16;&#x7801;&#x65B9;&#x5F0F;&#x3002;</li>
<li>&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x5DE5;&#x5177;&#xFF1A;&#x5982;&#x201C;&#x7279;&#x5F81;&#x53EF;&#x89C6;&#x5316;&#x201D;&#x201C;&#x795E;&#x7ECF;&#x5143;&#x6FC0;&#x6D3B;&#x5206;&#x6790;&#x201D;&#x7B49;&#xFF0C;&#x5DF2;&#x7ECF;&#x88AB;&#x7528;&#x4E8E;&#x5206;&#x6790;&#x771F;&#x5B9E;&#x5927;&#x8111;&#x7684;&#x795E;&#x7ECF;&#x5143;&#x6D3B;&#x52A8;&#x6A21;&#x5F0F;&#x3002;</li>
<li>AI &#x6A21;&#x578B;&#x8F85;&#x52A9;&#x8111;&#x79D1;&#x5B66;&#xFF1A;AI &#x88AB;&#x7528;&#x6765;&#x5206;&#x6790;&#x5927;&#x89C4;&#x6A21;&#x8111;&#x6210;&#x50CF;&#x6570;&#x636E;&#x3001;&#x9884;&#x6D4B;&#x795E;&#x7ECF;&#x5143;&#x6D3B;&#x52A8;&#x3001;&#x6A21;&#x62DF;&#x8BA4;&#x77E5;&#x8FC7;&#x7A0B;&#x7B49;&#x3002;</li>
</ul>
<h1 id="LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;"><a href="#LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;"></a><a href="https://www.anthropic.com/research/tracing-thoughts-language-model">LLM &#x53EF;&#x89E3;&#x91CA;&#x6027;</a></h1>
<ul>
<li>&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x8FFD;&#x8E2A;&#x6A21;&#x578B;&#x5728;&#x63A8;&#x7406;/&#x751F;&#x6210;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x5185;&#x90E8;&#x4FE1;&#x606F;&#xFF08;&#x7279;&#x5F81;&#x3001;&#x6982;&#x5FF5;&#x3001;&#x6FC0;&#x6D3B;&#x6A21;&#x5F0F;&#xFF09;&#x662F;&#x5982;&#x4F55;&#x6D41;&#x52A8;&#x3001;&#x8F6C;&#x5316;&#x548C;&#x7EC4;&#x5408;&#x7684;&#x3002;</li>
<li>&#x672C;&#x8D28;&#xFF1A;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x627E;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x800C;&#x662F;&#x8FD8;&#x539F;&#x51FA;&#x4E00;&#x6761;&#x6761;&#x201C;&#x601D;&#x7EF4;&#x94FE;&#x8DEF;&#x201D;&#x6216;&#x201C;&#x7535;&#x8DEF;&#x201D;&#xFF0C;&#x63ED;&#x793A;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x201C;&#x56E0;&#x679C;&#x8DEF;&#x5F84;&#x201D;&#x548C;&#x201C;&#x4FE1;&#x606F;&#x6D41;&#x201D;&#x3002;</li>
<li>&#x6280;&#x672F;&#x4E0A;&#xFF1A;tracing &#x7ED3;&#x5408;&#x4E86;&#x591A;&#x79CD;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x6280;&#x672F;&#xFF0C;&#x5305;&#x62EC;&#x4F46;&#x4E0D;&#x9650;&#x4E8E;&#xFF1A;</li>
<li>&#x7279;&#x5F81;&#x63D0;&#x53D6;&#xFF08;&#x5982;&#x5B57;&#x5178;&#x5B66;&#x4E60;&#x3001;PCA&#x3001;ICA&#x7B49;&#x65E0;&#x76D1;&#x7763;&#x65B9;&#x6CD5;&#xFF09;</li>
<li>&#x6709;&#x76D1;&#x7763;&#x7684;&#x7279;&#x5F81;&#x65B9;&#x5411;&#xFF08;&#x5982;&#x4EBA;&#x683C;&#x5411;&#x91CF;&#xFF09;</li>
<li>&#x201C;&#x7535;&#x8DEF;&#x8FFD;&#x8E2A;&#x201D;/&#x201C;&#x8DEF;&#x5F84;&#x5206;&#x6790;&#x201D;/&#x201C;&#x56E0;&#x679C;&#x5E72;&#x9884;&#x201D;&#x7B49;</li>
</ul>
<h2 id="&#x4EBA;&#x683C;&#x5411;&#x91CF;"><a href="#&#x4EBA;&#x683C;&#x5411;&#x91CF;"></a><a href="https://www.anthropic.com/research/persona-vectors">&#x4EBA;&#x683C;&#x5411;&#x91CF;</a></h2>
<ul>
<li>&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x901A;&#x8FC7;&#x5BF9;&#x6BD4;&#x6709;/&#x65E0;&#x67D0;&#x79CD;&#x6027;&#x683C;&#x7279;&#x8D28;&#x65F6;&#x7684;&#x795E;&#x7ECF;&#x5143;&#x6FC0;&#x6D3B;&#xFF0C;&#x63D0;&#x53D6;&#x51FA;&#x4E00;&#x4E2A;&#x201C;&#x4EBA;&#x683C;&#x5411;&#x91CF;&#x201D;&#x3002;</li>
<li>&#x672C;&#x8D28;&#xFF1A;&#x8FD9;&#x662F;&#x201C;&#x6709;&#x76D1;&#x7763;&#x7684;&#x7279;&#x5F81;&#x65B9;&#x5411;&#x63D0;&#x53D6;&#x201D;&#xFF0C;&#x5173;&#x6CE8;&#x5355;&#x4E00;&#x7279;&#x8D28;&#x7684;&#x6FC0;&#x6D3B;&#x6A21;&#x5F0F;&#x3002;</li>
<li>&#x6280;&#x672F;&#x4E0A;&#xFF1A;&#x66F4;&#x50CF;&#x662F;&#x201C;&#x5DEE;&#x5206;&#x5206;&#x6790;&#x201D;&#x6216;&#x201C;&#x6295;&#x5F71;&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B57;&#x5178;&#x5B66;&#x4E60;&#x3002;</li>
</ul>
<p>&#x4E0D;&#x826F;&#x4EBA;&#x683C;&#x7EA6;&#x675F;</p>
<ul>
<li>&#x63A8;&#x7406;&#x65F6;&#x6291;&#x5236;&#xFF08;Inference-time Steering&#xFF09;
<ul>
<li>&#x5728;&#x6A21;&#x578B;&#x63A8;&#x7406;&#xFF08;&#x751F;&#x6210;&#x7B54;&#x6848;&#xFF09;&#x65F6;&#xFF0C;&#x5982;&#x679C;&#x53D1;&#x73B0;&#x67D0;&#x79CD;&#x4E0D;&#x826F;&#x6027;&#x683C;&#x7279;&#x8D28;&#xFF08;&#x5982;&#x201C;&#x963F;&#x8C00;&#x5949;&#x627F;&#x201D;&#x3001;&#x201C;&#x90AA;&#x6076;&#x201D;&#x7B49;&#xFF09;&#x7684;&#x4EBA;&#x683C;&#x5411;&#x91CF;&#x88AB;&#x6FC0;&#x6D3B;&#xFF0C;&#x53EF;&#x4EE5;&#x4EBA;&#x4E3A;&#x5730;&#x51CF;&#x53BB;&#xFF08;&#x53CD;&#x5411;&#x6CE8;&#x5165;&#xFF09;&#x8FD9;&#x4E2A;&#x4EBA;&#x683C;&#x5411;&#x91CF;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x4E0A;&#x7684;&#x8868;&#x73B0;&#x53D8;&#x5F31;&#x3002;</li>
</ul>
</li>
<li>&#x8BAD;&#x7EC3;&#x65F6;&#x9884;&#x9632;&#xFF08;Preventative Steering / &#x201C;&#x75AB;&#x82D7;&#x201D;&#x539F;&#x7406;&#xFF09;
<ul>
<li>&#x5728;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#xFF0C;&#x901A;&#x8FC7;&#x201C;&#x6CE8;&#x5165;&#x201D;&#x4E0D;&#x826F;&#x4EBA;&#x683C;&#x5411;&#x91CF;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x628A;&#x201C;&#x90AA;&#x6076;&#x201D;&#x8FD9;&#x79CD;&#x7279;&#x8D28;&#x53D8;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x660E;&#x786E;&#x3001;&#x96C6;&#x4E2D;&#x7684;&#x7279;&#x5F81;&#x65B9;&#x5411;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5206;&#x6563;&#x5728;&#x7F51;&#x7EDC;&#x5404;&#x5904;&#x3001;&#x96BE;&#x4EE5;&#x8FFD;&#x8E2A;&#x548C;&#x63A7;&#x5236;&#x3002;&#x8FD9;&#x6837;&#xFF0C;&#x201C;&#x90AA;&#x6076;&#x201D;&#x7279;&#x8D28;&#x5C31;&#x50CF;&#x88AB;&#x201C;&#x6536;&#x62E2;&#x201D;&#x5230;&#x4E00;&#x4E2A;&#x4E13;&#x95E8;&#x7684;&#x201C;&#x5F00;&#x5173;&#x201D;&#x4E0A;&#xFF0C;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x5B66;&#x4F1A;&#x4E86;&#x201C;&#x5373;&#x4F7F;&#x6709;&#x8FD9;&#x4E2A;&#x5F00;&#x5173;&#xFF0C;&#x4E5F;&#x80FD;&#x8F93;&#x51FA;&#x5B89;&#x5168;&#x5185;&#x5BB9;&#x201D;&#x3002;</li>
</ul>
</li>
</ul>
<h2 id="&#x5B57;&#x5178;&#x5B66;&#x4E60;"><a href="#&#x5B57;&#x5178;&#x5B66;&#x4E60;"></a><a href="https://www.anthropic.com/research/mapping-mind-language-model">&#x5B57;&#x5178;&#x5B66;&#x4E60;</a></h2>
<p>&#x65E0;&#x76D1;&#x7763;&#x7684;&#x7279;&#x5F81;&#x65B9;&#x5411;&#x63D0;&#x53D6;</p>
<p>&#x5B57;&#x5178;&#x5B66;&#x4E60;&#x7684;&#x6838;&#x5FC3;&#xFF1A;</p>
<ul>
<li>&#x81EA;&#x52A8;&#x627E;&#x51FA;&#x4E00;&#x7EC4;&#x201C;&#x57FA;&#x7840;&#x90E8;&#x4EF6;&#x201D;&#xFF08;&#x5B57;&#x5178;&#xFF09;</li>
<li>&#x7528;&#x8FD9;&#x4E9B;&#x90E8;&#x4EF6;&#x7684;&#x7A00;&#x758F;&#x7EC4;&#x5408;&#x6765;&#x8FD8;&#x539F;&#x6240;&#x6709;&#x6570;&#x636E;</li>
<li>&#x901A;&#x8FC7;&#x4E0D;&#x65AD;&#x4F18;&#x5316;&#xFF0C;&#x8BA9;&#x5B57;&#x5178;&#x8D8A;&#x6765;&#x8D8A;&#x80FD;&#x4EE3;&#x8868;&#x6570;&#x636E;&#x7684;&#x672C;&#x8D28;</li>
</ul>
<p>&#x5728;&#x5927;&#x6A21;&#x578B;&#x5E94;&#x7528;&#x4E2D;&#xFF1A;</p>
<ul>
<li>&#x6536;&#x96C6;&#x5927;&#x91CF;&#x795E;&#x7ECF;&#x5143;&#x6FC0;&#x6D3B;&#x6570;&#x636E;</li>
<li>&#x7528;&#x5B57;&#x5178;&#x5B66;&#x4E60;&#x7B97;&#x6CD5;&#x5206;&#x89E3;&#x4E3A;&#x201C;&#x7279;&#x5F81;&#x6FC0;&#x6D3B;&#x6A21;&#x5F0F;&#x201D;&#xFF08;&#x8BAD;&#x7EC3;&#xFF09;</li>
<li>&#x901A;&#x8FC7;&#x5206;&#x6790;&#x548C;&#x64CD;&#x63A7;&#xFF08;&#x653E;&#x5927;&#x6216;&#x8005;&#x6291;&#x5236;&#xFF09;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#xFF0C;&#x5B9E;&#x73B0;&#x5BF9;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x673A;&#x5236;&#x7684;&#x89E3;&#x91CA;&#x548C;&#x7406;&#x89E3;</li>
</ul>
<h1 id="LLM &#x7684;&#x667A;&#x80FD;&#x6765;&#x6E90;"><a href="#LLM &#x7684;&#x667A;&#x80FD;&#x6765;&#x6E90;"></a>LLM &#x7684;&#x667A;&#x80FD;&#x6765;&#x6E90;</h1>
<ul>
<li>Compression&#xFF08;&#x538B;&#x7F29;&#xFF09;</li>
<li>Composition&#xFF08;&#x7EC4;&#x5408;&#xFF09;</li>
<li>Retrospection&#xFF08;&#x53CD;&#x601D;&#xFF09;</li>
</ul>
<p>&#x5176;&#x4ED6;&#x667A;&#x80FD;&#xFF1A;Emergence (&#x6D8C;&#x73B0;&#x80FD;&#x529B;)&#xFF0C;Reasoning (&#x63A8;&#x7406;)</p>
<h1 id="Transformer &#x7406;&#x89E3;"><a href="#Transformer &#x7406;&#x89E3;"></a>Transformer &#x7406;&#x89E3;</h1>
<ol>
<li>Embedding + &#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#xFF08;&#x7EDD;&#x5BF9;/&#x76F8;&#x5BF9;/&#x65CB;&#x8F6C;/&#x53EF;&#x5B66;&#x4E60;&#xFF0C;RoPE &#x65CB;&#x8F6C;&#x7F16;&#x7801;&#x80FD;&#x591F;&#x8868;&#x793A;&#x76F8;&#x5BF9;&#x5173;&#x7CFB;&#xFF09;</li>
<li>&#x7A00;&#x758F;/&#x591A;&#x5934;/&#x7EBF;&#x6027;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#xFF08;QK &#x5173;&#x7CFB;&#xFF09;</li>
<li>&#x6CE8;&#x610F;&#x529B;&#x6743;&#x91CD;&#x52A0;&#x6743; V&#xFF08;&#x5168;&#x5C40;&#x4FE1;&#x606F;&#x878D;&#x5408;&#xFF09;</li>
<li>&#x524D;&#x9988;&#x7F51;&#x7EDC;&#xFF08;FC/MoE/&#x95E8;&#x63A7;/&#x5206;&#x79BB;&#xFF09;</li>
<li>&#x5F52;&#x4E00;&#x5316;&#x4E0E;&#x6B8B;&#x5DEE;&#xFF08;LayerNorm/Residual&#xFF09;</li>
<li>&#x6B63;&#x5219;&#x5316;&#x4E0E;&#x9AD8;&#x6548;&#x8BAD;&#x7EC3;&#xFF08;Dropout/&#x84B8;&#x998F;/&#x6DF7;&#x5408;&#x7CBE;&#x5EA6;&#xFF09;</li>
<li>&#x53EA;&#x5728;&#x63A8;&#x7406;&#x4F7F;&#x7528;&#xFF1A;&#x8F93;&#x51FA;&#x4E0E;&#x89E3;&#x7801;&#xFF08;&#x9AD8;&#x6548;&#x91C7;&#x6837;/KV Cache&#xFF09;</li>
</ol>
<h1 id="LoRA(low-rank-adapter) and ControlNet"><a href="#LoRA(low-rank-adapter) and ControlNet"></a>LoRA(low-rank-adapter) and ControlNet</h1>
<ul>
<li>LoRA
&#x5047;&#x8BBE;&#x4F60;&#x6709;&#x4E00;&#x4E2A;&#x5E9E;&#x5927;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x7EBF;&#x6027;&#x5C42;&#x7684;&#x53C2;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x5F88;&#x5927;&#x7684;&#x77E9;&#x9635; W&#xFF08;&#x6BD4;&#x5982; 4096 &#xD7; 4096&#xFF09;&#xFF0C;&#x76F4;&#x63A5; fine-tune &#x9700;&#x8981;&#x66F4;&#x65B0;&#x8FD9;&#x4E48;&#x5927;&#x7684;&#x77E9;&#x9635;&#xFF0C;&#x6210;&#x672C;&#x5F88;&#x9AD8;&#x3002;
LoRA &#x662F;&#x901A;&#x8FC7;&#x201C;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x201D;&#x7684;&#x65B9;&#x5F0F;&#xFF0C;&#x5728;&#x4E0D;&#x52A8;&#x5927;&#x6A21;&#x578B;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#xFF0C;&#x7528;&#x6781;&#x5C11;&#x53C2;&#x6570;&#xFF08;A&#xD7;B&#xFF09;&#x5B66;&#x4E60;&#x65B0;&#x4EFB;&#x52A1;&#xFF0C;&#x5C31;&#x50CF;&#x5728;&#x4E0D;&#x6362;&#x8BBE;&#x5907;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x52A0;&#x4E2A;&#x5916;&#x6302;&#x6A21;&#x5757;&#x3002;</li>
</ul>
<pre><code>W_new = W + &#x394;W
&#x394;W = B @ A    # A &#x662F;&#x4F4E;&#x79E9;&#xFF08;r&#xD7;d&#xFF09;&#xFF0C;B &#x662F;&#xFF08;d&#xD7;r&#xFF09;&#xFF0C;r &#x8FDC;&#x5C0F;&#x4E8E; d
</code></pre>
<ul>
<li>ControlNet</li>
</ul>
<p>ControlNet &#x662F;&#x5728;&#x65C1;&#x8FB9;&#x590D;&#x5236;&#x4E86;&#x201C;&#x4E00;&#x4E2A;&#x5C0F;&#x526F;&#x8111;&#x201D;&#xFF0C;&#x4E13;&#x95E8;&#x63A5;&#x6536;&#x201C;&#x89C6;&#x89C9;&#x63D0;&#x793A;&#x201D;&#xFF0C;&#x7136;&#x540E;&#x6BCF;&#x5C42;&#x901A;&#x8FC7;&#x7BA1;&#x9053;&#x628A;&#x63A7;&#x5236;&#x4FE1;&#x53F7;&#x6CE8;&#x5165;&#x4E3B;&#x8111;&#x3002;</p>
<pre><code>Encoder (Down) &#x2192; Bottleneck &#x2192; Decoder (Up)
</code></pre>
<pre><code>ControlNet:
  [control image] &#x2192; &#x590D;&#x5236;&#x7684; UNet (&#x526F;&#x8111;)
                           &#x2193;
          +----------------+----------------+
          |                 hint injection   |
          &#x2193;                                  &#x2193;
Original UNet (&#x4E3B;&#x8111;) &#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;&#x2190;
          &#x2191;
   [latent vector from text + noise]
</code></pre>
<ul>
<li>&#x5176;&#x4ED6; fine-tuning</li>
</ul>
<p>&#x4F8B;&#x5B50;&#xFF1A;resnet &#x6700;&#x540E;&#x4E00;&#x5C42; fc&#xFF08;&#x5168;&#x8FDE;&#x63A5;&#x5C42;&#xFF09;&#x6362;&#x6210;&#x65B0;&#x7684;&#xFF0C;&#x7528;&#x4E8E;&#x8BC6;&#x522B;&#x66F4;&#x591A;&#x7C7B;&#x522B;&#xFF08;&#x6BD4;&#x5982;&#x4ECE; 1000 &#x7C7B; &#x2192; 102 &#x7C7B;&#x82B1;&#xFF09;</p>
<p>&#x5B66;&#x540D;&#xFF1A;Full Fine-tuning with a modified classification head</p>
<h1 id="AI &#x5B89;&#x5168; - &#x601D;&#x7EF4;&#x94FE;&#x76D1;&#x63A7;"><a href="#AI &#x5B89;&#x5168; - &#x601D;&#x7EF4;&#x94FE;&#x76D1;&#x63A7;"></a>AI &#x5B89;&#x5168; - &#x601D;&#x7EF4;&#x94FE;&#x76D1;&#x63A7;</h1>
<p>&#x4E3E;&#x4F8B;&#xFF1A;&#x4E00;&#x4E2A;&#x5199; Python &#x7684; AI &#x88AB;&#x8981;&#x6C42;&#x5B9E;&#x73B0;&#x67D0;&#x529F;&#x80FD;&#xFF0C;&#x5728;&#x4E2D;&#x95F4;&#x601D;&#x7EF4;&#x94FE;&#x4E2D;&#x5B83;&#x66FE;&#x601D;&#x8003;&#x201C;&#x5982;&#x679C;&#x76F4;&#x63A5;&#x7528; eval() &#x53EF;&#x4EE5;&#x4F5C;&#x5F0A;&#x901A;&#x8FC7;&#x6D4B;&#x8BD5;&#x201D;&#xFF0C;&#x4F46;&#x6700;&#x7EC8;&#x5B83;&#x6CA1;&#x7528;&#x3002;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x662F;&#x65E0;&#x6CD5;&#x53D1;&#x73B0;&#x8FD9;&#x7C7B;&#x610F;&#x56FE;&#x7684;&#x3002;</p>
<ul>
<li>&#x601D;&#x7EF4;&#x94FE;&#x63A9;&#x9970;&#x95EE;&#x9898;&#xFF08;Steganographic CoT&#xFF09;&#xFF1A;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4E3A;&#x4E86;&#x201C;&#x8FC7;&#x5BA1;&#x201D;&#x800C;&#x4E3B;&#x52A8;&#x9690;&#x85CF;&#x6709;&#x5BB3;&#x610F;&#x56FE;&#xFF08;&#x6BD4;&#x5982;&#x5199;&#x4E00;&#x4E2A;&#x975E;&#x5E38;&#x65E0;&#x5BB3;&#x7684; CoT&#xFF0C;&#x4F46;&#x6700;&#x540E;&#x884C;&#x4E3A;&#x4ECD;&#x6267;&#x884C;&#x6076;&#x610F;&#x64CD;&#x4F5C;&#xFF09;&#x3002;</li>
<li>CoT &#x4E0E;&#x884C;&#x4E3A;&#x4E0D;&#x4E00;&#x81F4;&#x95EE;&#x9898;&#xFF08;CoT-behavior mismatch&#xFF09;&#xFF1A;&#x7814;&#x7A76;&#x53D1;&#x73B0;&#x90E8;&#x5206;&#x6A21;&#x578B;&#x201C;&#x601D;&#x7EF4;&#x94FE;&#x5199;&#x5F97;&#x50CF;&#x4E2A;&#x5723;&#x4EBA;&#x201D;&#xFF0C;&#x4F46;&#x884C;&#x52A8;&#x50CF;&#x4E2A;&#x9A97;&#x5B50;&#x3002;</li>
<li>CoT &#x6DF7;&#x6DC6;&#xFF1A;&#x6A21;&#x4EFF;&#x5F0F; vs &#x771F;&#x5B9E; reasoning&#xFF1A;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x6A21;&#x4EFF; CoT &#x683C;&#x5F0F;&#x5199;&#x51FA;&#x201C;&#x770B;&#x8D77;&#x6765;&#x6709;&#x903B;&#x8F91;&#x7684;&#x8F93;&#x51FA;&#x201D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5728;&#x771F;&#x5B9E;&#x4F7F;&#x7528;&#x5B83;&#x4F5C;&#x4E3A;&#x63A8;&#x7406;&#x3002;</li>
</ul>
<table>
<thead>
<tr>
<th>&#x5EFA;&#x8BAE;&#x65B9;&#x5411;</th>
<th>&#x63CF;&#x8FF0;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x1F9EA; &#x5FAE;&#x8C03;&#x6A21;&#x578B;&#x5F3A;&#x5316;&#x663E;&#x6027;&#x601D;&#x7EF4;&#x94FE;&#x8F93;&#x51FA;</td>
<td>&#x5F3A;&#x5236;&#x6A21;&#x578B;&#x5728;&#x6240;&#x6709;&#x590D;&#x6742;&#x4EFB;&#x52A1;&#x4E2D;&#x63D0;&#x4F9B; reasoning trace</td>
</tr>
<tr>
<td>&#x1F916; &#x5F31;&#x6A21;&#x578B;&#x5BA1;&#x67E5;&#x5F3A;&#x6A21;&#x578B;</td>
<td>&#x7C7B;&#x4F3C;&#x201C;GPT-4 &#x5BA1;&#x95EE; GPT-5&#x201D;&#x601D;&#x7EF4;&#x94FE;&#x7684;&#x7ED3;&#x6784;&#x5316;&#x5BA1;&#x67E5;&#x673A;&#x5236;</td>
</tr>
<tr>
<td>&#x1F4CA; &#x8BBE;&#x5B9A; CoT &#x8D28;&#x91CF;&#x4E0E;&#x884C;&#x4E3A;&#x4E00;&#x81F4;&#x6027;&#x7684;&#x6307;&#x6807;</td>
<td>&#x7C7B;&#x4F3C;&#x201C;&#x8BA1;&#x5212;&#x4E00;&#x81F4;&#x7387;&#x201D;&#x3001;&#x201C;&#x5956;&#x52B1;&#x8BEF;&#x5BFC;&#x7387;&#x201D;&#x7B49;&#x5B89;&#x5168;&#x8BC4;&#x4F30;&#x6307;&#x6807;</td>
</tr>
<tr>
<td>&#x1F510; &#x7ED3;&#x5408;&#x5DE5;&#x5177;&#x94FE;&#x3001;API &#x8C03;&#x7528;&#x8DEF;&#x5F84;&#x7B49;&#x591A;&#x6A21;&#x6001;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x76D1;&#x7763;</td>
<td>&#x4E0D;&#x5149;&#x770B;&#x8BED;&#x8A00;&#xFF0C;&#x8FD8;&#x770B;&#x884C;&#x4E3A;&#x8DEF;&#x5F84;&#x3001;&#x8C03;&#x7528;&#x94FE;&#x7B49;&#x591A;&#x7EF4;&#x7EBF;&#x7D22;</td>
</tr>
<tr>
<td>&#x1F6A8; &#x5C06; CoT &#x76D1;&#x63A7;&#x4F5C;&#x4E3A;&#x90E8;&#x7F72;&#x524D;&#x5B89;&#x5168;&#x5BA1;&#x6838;&#x5FC5;&#x8981;&#x9879;</td>
<td>&#x548C; RLHF &#x6216; red teaming &#x4E00;&#x6837;&#xFF0C;&#x6210;&#x4E3A;&#x6807;&#x51C6;&#x5B89;&#x5168;&#x6D41;&#x7A0B;&#x4E00;&#x90E8;&#x5206;</td>
</tr>
</tbody>
</table>
<ul>
<li>Reference</li>
<li><a href="https://openai.com/index/chain-of-thought-monitoring/">&#x767D;&#x76D2;&#x76D1;&#x63A7;&#x7684;&#x63D0;&#x51FA;&#x4E0E;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</a></li>
<li><a href="https://www.anthropic.com/news/tracing-thoughts-language-model">tracing-thoughts-language-model</a></li>
<li><a href="https://arxiv.org/abs/2507.11473">&#x5927;&#x578B;&#x8054;&#x5408;&#x547C;&#x5401;&#xFF1A;&#x201C;&#x601D;&#x7EF4;&#x94FE;&#x7684;&#x53EF;&#x76D1;&#x63A7;&#x6027;&#x201D;&#x662F;&#x5F53;&#x524D;&#x7A97;&#x53E3;&#x671F;</a></li>
</ul>
<h1 id="AI IDE &#x7684;&#x6F14;&#x8FDB;&#x731C;&#x60F3;"><a href="#AI IDE &#x7684;&#x6F14;&#x8FDB;&#x731C;&#x60F3;"></a>AI IDE &#x7684;&#x6F14;&#x8FDB;&#x731C;&#x60F3;</h1>
<p>&#x9700;&#x6C42;&#x6587;&#x6863;&#x672C;&#x8D28;&#x4E0A;&#x5C31;&#x662F;&#x201C;&#x65B0;&#x5F62;&#x6001;&#x7684;&#x4EE3;&#x7801;&#x201D;&#xFF0C;&#x800C;&#x4F20;&#x7EDF;&#x4EE3;&#x7801;&#x53EA;&#x662F;&#x5BF9;&#x9700;&#x6C42;&#x7684;&#x4E00;&#x79CD;&#x6709;&#x635F;&#x6295;&#x5F71;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x9700;&#x6C42;&#x5206;&#x6790;&#x4E0E;&#x7F16;&#x7801;&#x8FD9;&#x4E24;&#x4E2A;&#x5DE5;&#x79CD;&#x5F88;&#x53EF;&#x80FD;&#x4F1A;&#x9010;&#x6B65;&#x878D;&#x5408;&#xFF0C;&#x4EE5;&#x51CF;&#x5C11;&#x4FE1;&#x606F;&#x8F6C;&#x5316;&#x7684;&#x635F;&#x8017;&#x3002;</p>
<p>&#x5982;&#x679C;&#x5C06; LLM &#x89C6;&#x4E3A;&#x65B0;&#x4E00;&#x4EE3;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#xFF0C;&#x5B83;&#x6216;&#x8BB8;&#x53EF;&#x4EE5;&#x8DF3;&#x8FC7;&#x201C;&#x5C06; spec &#x8F6C;&#x6362;&#x4E3A; code &#x5E76;&#x7F16;&#x8BD1;&#x6267;&#x884C;&#x201D;&#x7684;&#x6D41;&#x7A0B;&#xFF0C;&#x76F4;&#x63A5;&#x7406;&#x89E3;&#x5E76;&#x8FD0;&#x884C;&#x9700;&#x6C42;&#x672C;&#x8EAB;&#x3002;&#x5728;&#x8FD9;&#x79CD;&#x6F14;&#x5316;&#x8DEF;&#x5F84;&#x4E0B;&#xFF0C;AI &#x7F16;&#x8F91;&#x5668;&#x7684;&#x6838;&#x5FC3;&#x529F;&#x80FD;&#x4E5F;&#x5C06;&#x4ECE;&#x7F16;&#x5199;&#x4EE3;&#x7801;&#x8F6C;&#x5411;&#x7BA1;&#x7406;&#x548C;&#x6F14;&#x5316; spec&#xFF0C;&#x5B9E;&#x73B0;&#x771F;&#x6B63;&#x7684;&#x201C;&#x4EE5;&#x610F;&#x56FE;&#x9A71;&#x52A8;&#x5F00;&#x53D1;&#x201D;&#x3002;</p>
<p>&#x9636;&#x6BB5;&#xFF1A;code &#x2192; code with LLM assist &#x2192; spec-driven code&#xFF08;&#x5F53;&#x4E0B; AI IDE&#xFF09; &#x2192; spec-driven execution</p>
<h1 id="&#x4F55;&#x65F6;&#x9700;&#x8981; Agent&#xFF0C;&#x800C;&#x4E0D;&#x662F; Call LLM"><a href="#&#x4F55;&#x65F6;&#x9700;&#x8981; Agent&#xFF0C;&#x800C;&#x4E0D;&#x662F; Call LLM"></a>&#x4F55;&#x65F6;&#x9700;&#x8981; Agent&#xFF0C;&#x800C;&#x4E0D;&#x662F; Call LLM</h1>
<ul>
<li>&#x672C;&#x8D28;&#xFF1A;&#x8BB8;&#x591A;&#x201C;Agent&#x201D;&#x7CFB;&#x7EDF;&#x5176;&#x5B9E;&#x53EA;&#x662F;&#x590D;&#x6742;&#x7248; prompt &#x62FC;&#x63A5;&#x5668;&#x7684;&#x672C;&#x8D28;&#x3002;</li>
<li>&#x4E00;&#x53E5;&#x8BDD;&#x533A;&#x522B;&#xFF1A;LLM &#x662F;&#x667A;&#x80FD;&#x6838;&#x5FC3;&#xFF1B;Agent &#x662F;&#x4EFB;&#x52A1;&#x6D41;&#x7A0B;&#x7BA1;&#x7406;&#x5668;&#x3002; &#x2014;&#x2014; &#x591A;&#x6570;&#x65F6;&#x5019;&#x7528;&#x597D; prompt &#x548C;&#x5DE5;&#x5177;&#x7EC4;&#x5408;&#x5C31;&#x591F;&#x4E86;&#xFF0C;&#x53EA;&#x6709;&#x81EA;&#x52A8;&#x5316;&#x9AD8;&#x590D;&#x6742;&#x4EFB;&#x52A1;&#x65F6;&#x624D;&#x503C;&#x5F97;&#x7528; Agent &#x67B6;&#x6784;&#x3002;</li>
<li>&#x5982;&#x4F55;&#x9009;&#x62E9;&#xFF1A;&#x5F53;&#x4EFB;&#x52A1;&#x6D89;&#x53CA;&#x975E;&#x7EBF;&#x6027;&#x7684;&#x591A;&#x6B65;&#x9AA4;&#x6D41;&#x7A0B;&#x3001;&#x6B65;&#x9AA4;&#x4E4B;&#x95F4;&#x5B58;&#x5728;&#x590D;&#x6742;&#x7684;&#x6761;&#x4EF6;&#x4F9D;&#x8D56;&#x3001;&#x9700;&#x8981;&#x52A8;&#x6001;&#x89C4;&#x5212;&#x548C;&#x51B3;&#x7B56;&#x3001;&#x4EE5;&#x53CA;&#x53EF;&#x80FD;&#x8FDB;&#x884C;&#x8BD5;&#x9519;&#x548C;&#x81EA;&#x6211;&#x4FEE;&#x6B63;&#x65F6;&#xFF0C;Agent &#x6A21;&#x578B;&#x662F;&#x66F4;&#x4F18;&#x7684;&#x9009;&#x62E9;&#x3002;&#x5BF9;&#x4E8E;&#x6307;&#x4EE4;&#x660E;&#x786E;&#x3001;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x8DEF;&#x5F84;&#x76F8;&#x5BF9;&#x56FA;&#x5B9A;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x7ED3;&#x5408;&#x5DE5;&#x5177;&#x5C31;&#x8DB3;&#x591F;&#x4E86;&#x3002;</li>
<li>&#x5177;&#x4F53;&#x573A;&#x666F;&#xFF1A;steps &#x662F;&#x975E;&#x7EBF;&#x6027;&#xFF0C;steps &#x4E4B;&#x95F4;&#x4F9D;&#x8D56;&#x6761;&#x4EF6;&#x5DE5;&#x5177;&#x8C03;&#x7528;</li>
</ul>
<h1 id="LlamaIndex &#x662F;&#x591A;&#x5C42;&#x7D22;&#x5F15;&#x4F53;&#x7CFB;&#xFF08;Index over Index&#xFF09;"><a href="#LlamaIndex &#x662F;&#x591A;&#x5C42;&#x7D22;&#x5F15;&#x4F53;&#x7CFB;&#xFF08;Index over Index&#xFF09;"></a>LlamaIndex &#x662F;&#x591A;&#x5C42;&#x7D22;&#x5F15;&#x4F53;&#x7CFB;&#xFF08;Index over Index&#xFF09;</h1>
<p>LlamaIndex &#x662F;&#x6570;&#x636E;&#x77E5;&#x8BC6;&#x5E93;&#x7684;&#x201C;&#x7D22;&#x5F15;&#x534F;&#x8C03;&#x5668;&#x201D;&#xFF0C;&#x5B83;&#x4E0D;&#x66FF;&#x4EE3;&#x6570;&#x636E;&#x5E93;&#xFF0C;&#x800C;&#x662F;&#x7EC4;&#x7EC7;&#x5411;&#x91CF;&#x7D22;&#x5F15; + &#x6587;&#x672C;&#x5185;&#x5BB9; + Metadata + LLM &#x8C03;&#x7528;&#x7684;&#x591A;&#x5C42;&#x7D22;&#x5F15;&#x7CFB;&#x7EDF;&#xFF0C;&#x6784;&#x5EFA;&#x4E00;&#x4E2A; Agent &#x53EF;&#x68C0;&#x7D22;&#x3001;&#x53EF;&#x8BB0;&#x5FC6;&#x3001;&#x53EF;&#x56DE;&#x7B54;&#x7684;&#x77E5;&#x8BC6;&#x7ED3;&#x6784;&#x3002;</p>
<pre><code>&#x539F;&#x59CB;&#x6587;&#x6863;
   &#x2502;
   &#x25BC;
  &#x5207;&#x5206;&#x5668;&#xFF08;chunking / NodeParser&#xFF09;
   &#x2502;
   &#x25BC;
Chunk&#xFF08;Node&#xFF09; &#x2190;&#x2192; Metadata
   &#x2502;             &#x2198;
   &#x25BC;              &#x25BC;
Embedding       &#x6587;&#x672C;&#x6570;&#x636E;&#x5E93;&#xFF08;DocStore&#xFF09;
   &#x2502;
   &#x25BC;
&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#xFF08;VectorStore&#xFF0C;&#x5982; FAISS / Qdrant&#xFF09;
   &#x2502;
   &#x25BC;
LlamaIndex &#x7684;&#x9876;&#x5C42;&#x7D22;&#x5F15;&#xFF08;VectorStoreIndex&#xFF09; &#x2190;&#x2192; Retriever / QueryEngine
</code></pre>
<p>&#x4F8B;&#x5B50;&#xFF1A;&#x201C;&#x6211;&#x7ED9;&#x4E00;&#x6BB5; query&#xFF0C;&#x67E5;&#x627E;&#x4E0E;&#x4E4B;&#x6700;&#x76F8;&#x4F3C;&#x7684;&#x65E7; issue &#x8BF4;&#x660E;&#x6587;&#x201D;</p>
<pre><code>&#x7528;&#x6237; query &#x6587;&#x672C;
   &#x2193;
Tokenizer + Embedding&#xFF08;BGE&#xFF09;
   &#x2193;
VectorStore&#xFF08;&#x5982; FAISS&#xFF09;&#x2192; &#x627E;&#x51FA;&#x76F8;&#x4F3C;&#x5411;&#x91CF;&#xFF08;&#x8FD4;&#x56DE; ID&#xFF09;
   &#x2193;
DocumentStore &#x2192; &#x6839;&#x636E; ID &#x627E;&#x56DE;&#x539F;&#x59CB; chunk &#x6587;&#x672C; + metadata
   &#x2193;
LlamaIndex Index &#x2192; &#x5408;&#x5E76;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x62FC;&#x63A5; Prompt
   &#x2193;
LLM &#x56DE;&#x7B54; or &#x505A;&#x5206;&#x7C7B; / &#x63A8;&#x7406;
</code></pre>
<h1 id="Cursor LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;"><a href="#Cursor LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;"></a>Cursor LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;</h1>
<p>&#x4F20;&#x7EDF;LSP&#xFF1A;</p>
<pre><code>&#x7F16;&#x8F91;&#x5668; &#x2190;&#x2192; Language Server &#x2190;&#x2192; &#x4EE3;&#x7801;&#x5206;&#x6790;&#x5F15;&#x64CE;
</code></pre>
<p>Cursor &#x589E;&#x5F3A;&#x67B6;&#x6784;&#xFF1A;</p>
<pre><code>&#x7F16;&#x8F91;&#x5668; &#x2190;&#x2192; AI&#x667A;&#x80FD;&#x5C42; &#x2190;&#x2192; LSP &#x2190;&#x2192; &#x4EE3;&#x7801;&#x5206;&#x6790;&#x5F15;&#x64CE;
                &#x2193;
            &#x8BED;&#x4E49;&#x7D22;&#x5F15;&#x5E93;
                &#x2193;
            &#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;&#x5668;
</code></pre>
<h1 id="LlamaIndex + LangChain"><a href="#LlamaIndex + LangChain"></a>LlamaIndex + LangChain</h1>
<pre><code> &#x539F;&#x59CB;&#x6570;&#x636E;             &#x7528;&#x6237;&#x63D0;&#x95EE;
   &#x2193;                    &#x2193;
 LlamaIndex         LangChain
(&#x5207;&#x5206; + &#x5411;&#x91CF;&#x53EC;&#x56DE;)     (Prompt &#x6784;&#x9020; + &#x591A;&#x6B65;&#x8C03;&#x7528; + Tool &#x8C03;&#x5EA6;)
   &#x2193;                    &#x2193;
&#x3010;&#x9AD8;&#x8D28;&#x91CF;&#x77E5;&#x8BC6;&#x7247;&#x6BB5;&#x3011; &#x2192; &#x62FC;&#x63A5; &#x2192; &#x6A21;&#x578B;&#x8F93;&#x5165; &#x2192; &#x6A21;&#x578B;&#x8F93;&#x51FA;
</code></pre>
<h1 id="LLM&#x5BF9;&#x6559;&#x80B2;&#x7684;&#x98A0;&#x8986;&#x5230;&#x5E95;&#x6709;&#x591A;&#x5927;?"><a href="#LLM&#x5BF9;&#x6559;&#x80B2;&#x7684;&#x98A0;&#x8986;&#x5230;&#x5E95;&#x6709;&#x591A;&#x5927;?"></a>LLM&#x5BF9;&#x6559;&#x80B2;&#x7684;&#x98A0;&#x8986;&#x5230;&#x5E95;&#x6709;&#x591A;&#x5927;?</h1>
<p>LLM&#x5BF9;&#x6559;&#x80B2;&#x7684;&#x98A0;&#x8986;&#xFF0C;&#x4E0D;&#x662F;&#x201C;&#x5DE5;&#x5177;&#x5C42;&#x201D;&#x7684;&#x63D0;&#x5347;&#xFF0C;&#x800C;&#x662F;&#x201C;&#x8303;&#x5F0F;&#x7EA7;&#x201D;&#x7684;&#x6539;&#x53D8;&#x3002;&#x5B83;&#x4F1A;&#x5F7B;&#x5E95;&#x6539;&#x53D8;&#x201C;&#x5B66;&#x4EC0;&#x4E48;&#x3001;&#x600E;&#x4E48;&#x5B66;&#x3001;&#x8C01;&#x6765;&#x6559;&#x3001;&#x5B66;&#x5230;&#x54EA;&#x4E3A;&#x6B62;&#x201D;&#x8FD9;&#x56DB;&#x4E2A;&#x6559;&#x80B2;&#x6839;&#x57FA;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x7EF4;&#x5EA6;</th>
<th>&#x4F20;&#x7EDF;&#x8303;&#x5F0F;</th>
<th>&#x88AB;LLM&#x98A0;&#x8986;&#x540E;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5B66;&#x4EC0;&#x4E48;</td>
<td>&#x77E5;&#x8BC6;&#x4E3A;&#x4E3B;</td>
<td>&#x80FD;&#x529B;&#x4E0E;&#x63D0;&#x95EE;&#x4E3A;&#x4E3B;</td>
</tr>
<tr>
<td>&#x8C01;&#x6765;&#x6559;</td>
<td>&#x8001;&#x5E08;&#x4E2D;&#x5FC3;</td>
<td>&#x591A;AI&#x534F;&#x540C;+&#x4EBA;&#x7C7B;&#x5F15;&#x5BFC;</td>
</tr>
<tr>
<td>&#x600E;&#x4E48;&#x5B66;</td>
<td>&#x6559;&#x6750;+&#x8003;&#x8BD5;</td>
<td>&#x5BF9;&#x8BDD;+&#x5171;&#x521B;+&#x5B9A;&#x5236;&#x53CD;&#x9988;</td>
</tr>
<tr>
<td>&#x5B66;&#x5230;&#x54EA;</td>
<td>&#x5B66;&#x5386;&#x4E3A;&#x7EC8;&#x70B9;</td>
<td>&#x7EC8;&#x8EAB;&#x5B66;&#x4E60;+AI&#x4F34;&#x5B66;</td>
</tr>
</tbody>
</table>
<h1 id="&#x201C;&#x6697;&#x77E5;&#x8BC6;&#x201D;&#xFF08;Dark Knowledge&#xFF09;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x201C;&#x6697;&#x77E5;&#x8BC6;&#x201D;&#xFF08;Dark Knowledge&#xFF09;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x201C;&#x6697;&#x77E5;&#x8BC6;&#x201D;&#xFF08;Dark Knowledge&#xFF09;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h1>
<p>&#x201C;&#x6697;&#x77E5;&#x8BC6;&#x201D;&#x662F;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x4E00;&#x4E2A;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x4F46;&#x4E0D;&#x76F4;&#x89C2;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x6700;&#x65E9;&#x7531; Geoffrey Hinton &#x63D0;&#x51FA;&#x3002;&#x5B83;&#x6307;&#x7684;&#x662F;&#xFF1A;&#x6A21;&#x578B;&#x4E2D;&#x201C;&#x6CA1;&#x6709;&#x660E;&#x786E;&#x6807;&#x7B7E;&#x201D;&#x7684;&#x90A3;&#x4E9B;&#x77E5;&#x8BC6;&#x3002;</p>
<p>&#x5177;&#x4F53;&#x800C;&#x8A00;&#xFF1A;</p>
<p>&#x4E00;&#x4E2A;&#x5206;&#x7C7B;&#x6A21;&#x578B;&#x5B66;&#x5230;&#x7684;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#x201D;&#xFF0C;&#x8FD8;&#x5B66;&#x5230;&#x4E86;&#x5176;&#x4ED6;&#x7C7B;&#x4E4B;&#x95F4;&#x7684;&#x201C;&#x76F8;&#x4F3C;&#x6027;&#x7ED3;&#x6784;&#x201D;&#x3002;</p>
<p>&#x8FD9;&#x4E9B;&#x77E5;&#x8BC6;&#x4E0D;&#x4F1A;&#x663E;&#x5F0F;&#x4F53;&#x73B0;&#x5728;&#x8BAD;&#x7EC3;&#x6807;&#x7B7E;&#x4E2D;&#xFF0C;&#x4F46;&#x5374;&#x4FDD;&#x7559;&#x5728;&#x6A21;&#x578B;&#x7684;&#x5185;&#x90E8;&#x6743;&#x91CD;&#x4E2D;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<p>&#x4E00;&#x4E2A;&#x732B; vs &#x72D7;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x867D;&#x7136;&#x53EA;&#x8F93;&#x51FA;0/1&#xFF0C;&#x4F46;&#x5B83;&#x5728;&#x5185;&#x90E8;&#x53EF;&#x80FD;&#x77E5;&#x9053;&#x201C;&#x72D0;&#x72F8;&#x957F;&#x5F97;&#x4E5F;&#x50CF;&#x72D7;&#x201D;&#x3002;</p>
<p>&#x5B83;&#x6CA1;&#x6709;&#x5B66;&#x8FC7;&#x201C;&#x72D0;&#x72F8;&#x201D;&#xFF0C;&#x4F46;&#x201C;&#x611F;&#x77E5;&#x5230;&#x4E86;&#x7C7B;&#x4F3C;&#x6027;&#x201D;&#x2014;&#x2014;&#x8FD9;&#x5C31;&#x662F;&#x6697;&#x77E5;&#x8BC6;&#x3002;</p>
<h1 id="AIGC&#x4EA7;&#x751F;&#x7684;&#x5185;&#x5BB9;&#x201C;&#x53CD;&#x54FA;&#x201D;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x4F1A;&#x53D1;&#x751F;&#x4EC0;&#x4E48;?"><a href="#AIGC&#x4EA7;&#x751F;&#x7684;&#x5185;&#x5BB9;&#x201C;&#x53CD;&#x54FA;&#x201D;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x4F1A;&#x53D1;&#x751F;&#x4EC0;&#x4E48;?"></a>AIGC&#x4EA7;&#x751F;&#x7684;&#x5185;&#x5BB9;&#x201C;&#x53CD;&#x54FA;&#x201D;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x4F1A;&#x53D1;&#x751F;&#x4EC0;&#x4E48;?</h1>
<p>&#x2248; AI&#x7684;&#x201C;&#x8FD1;&#x4EB2;&#x7E41;&#x6B96;&#x201D;
&#x5C31;&#x50CF;&#x57FA;&#x56E0;&#x591A;&#x6837;&#x6027;&#x4E27;&#x5931;&#x4F1A;&#x5BFC;&#x81F4;&#x5BB6;&#x65CF;&#x9000;&#x5316;&#xFF0C;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x53EA;&#x4ECE;&#x81EA;&#x5DF1;&#x8EAB;&#x4E0A;&#x5B66;&#x4E1C;&#x897F;&#x4E5F;&#x4F1A;&#x53D8;&#x5F97;&#x201C;&#x5C01;&#x95ED;&#x201D;&#x3001;&#x201C;&#x9000;&#x5316;&#x201D;&#x3001;&#x201C;&#x5931;&#x771F;&#x201D;&#x3002;</p>
<p>&#x4E00;&#x4E2A;&#x66F4;&#x54F2;&#x5B66;&#x7684;&#x95EE;&#x9898;&#xFF1A;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x201C;&#x81EA;&#x6211;&#x8FDB;&#x5316;&#x201D;&#xFF1F;</p>
<ul>
<li>&#x5982;&#x679C;AI&#x8DB3;&#x591F;&#x5F3A;&#x5927;&#xFF0C;&#x5E76;&#x5177;&#x5907;&#x81EA;&#x6211;&#x6821;&#x6B63;&#x3001;&#x4E8B;&#x5B9E;&#x9A8C;&#x8BC1;&#x3001;&#x77E5;&#x8BC6;&#x8FC1;&#x79FB;&#x80FD;&#x529B;&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x662F;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x67D0;&#x79CD;&#x201C;&#x81EA;&#x6211;&#x6210;&#x957F;&#x95ED;&#x73AF;&#x201D;&#x7684;</li>
<li>&#x4F46;&#x5F53;&#x524D;&#x9636;&#x6BB5;&#xFF0C;&#x6CA1;&#x6709;&#x5916;&#x90E8;&#x4EBA;&#x7C7B;&#x6821;&#x6B63;&#x548C;&#x76D1;&#x7763;&#x7684; AI&#xFF0C;&#x65E0;&#x6CD5;&#x957F;&#x671F;&#x7A33;&#x5B9A;&#x8FDB;&#x6B65;&#xFF08;&#x8FD9;&#x548C;&#x4EBA;&#x7C7B;&#x6587;&#x660E;&#x6F14;&#x5316;&#x4E2D;&#x201C;&#x5BF9;&#x7167;&#x73B0;&#x5B9E;&#x3001;&#x8BD5;&#x9519;&#x8FED;&#x4EE3;&#x201D;&#x7684;&#x65B9;&#x5F0F;&#x7C7B;&#x4F3C;&#xFF09;</li>
</ul>
<h1 id="&#x6263;&#x5B50;"><a href="#&#x6263;&#x5B50;"></a>&#x6263;&#x5B50;</h1>
<ul>
<li>&#x6263;&#x5B50;&#x672C;&#x8D28;&#x4E0A;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5B9A;&#x4F4D;&#x5728;&#x201C;&#x4E1A;&#x52A1;&#x53CB;&#x597D;&#x578B;&#x201D;&#x7684;&#x4F4E;&#x4EE3;&#x7801;&#x5E73;&#x53F0;&#xFF0C;&#x5176;&#x6838;&#x5FC3;&#x80FD;&#x529B;&#x66F4;&#x504F;&#x5411;&#x4F20;&#x7EDF;&#x524D;&#x7AEF; low-code&#xFF0C;&#x800C;&#x975E;&#x771F;&#x6B63;&#x610F;&#x4E49;&#x4E0A;&#x7684; AI-native &#x67B6;&#x6784;&#x5DE5;&#x5177;&#x3002;
<ul>
<li>&#x5BF9;&#x5F00;&#x53D1;&#x8005;&#x6765;&#x8BF4;&#xFF0C;&#x6263;&#x5B50;&#x5BB9;&#x6613;&#x201C;&#x9E21;&#x808B;&#x201D;&#xFF1A;&#x7B80;&#x5355;&#x573A;&#x666F;&#x5ACC;&#x5B83;&#x591A;&#x4F59;&#xFF0C;&#x590D;&#x6742;&#x573A;&#x666F;&#x53C8;&#x5BB9;&#x6613;&#x8E29;&#x5751;&#x3002;</li>
<li>&#x5B83;&#x66F4;&#x9002;&#x5408;&#x90A3;&#x4E9B;&#x201C;&#x9700;&#x6C42;&#x660E;&#x786E; + &#x5FEB;&#x901F;&#x4E0A;&#x7EBF; + &#x4E0D;&#x8003;&#x8651;&#x6269;&#x5C55;&#x6027;&#x201D;&#x7684;&#x8F7B;&#x91CF;&#x5185;&#x90E8;&#x573A;&#x666F;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6784;&#x5EFA;&#x771F;&#x6B63;&#x9700;&#x8981;&#x6301;&#x7EED;&#x6F14;&#x8FDB;&#x7684;&#x7CFB;&#x7EDF;&#x3002;</li>
</ul>
</li>
</ul>
<h1 id="Thinking Mode"><a href="#Thinking Mode"></a>Thinking Mode</h1>
<ul>
<li>&#x6309;&#x6B65;&#x9AA4;&#x601D;&#x8003;&#xFF08;step-by-step reasoning&#xFF09;</li>
<li>&#x601D;&#x7EF4;&#x94FE;&#x6761;&#xFF08;Chain-of-Thought&#xFF09;</li>
<li>&#x81EA;&#x4E3B;&#x89C4;&#x5212;&#x4E0E;&#x5185;&#x5728;&#x5BF9;&#x8BDD;&#xFF08;e.g. scratchpad, inner monologue&#xFF09;</li>
<li>&#x8FC7;&#x7A0B;&#x663E;&#x5F0F;&#x5316;&#x3001;&#x5047;&#x8BBE;&#x9A8C;&#x8BC1;&#x3001;&#x63A8;&#x7406;&#x94FE;&#x5EF6;&#x4F38;</li>
</ul>
<p>&#x8FD9;&#x7C7B; &#x201C;&#x601D;&#x8003;&#x65B9;&#x5F0F;&#x201D;&#x4E0D;&#x662F;&#x88AB;&#x6A21;&#x578B;&#x201C;&#x786C;&#x7F16;&#x7801;&#x201D;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7;&#x6570;&#x636E;&#x548C;&#x8BAD;&#x7EC3;&#x65B9;&#x5F0F;&#x8BF1;&#x5BFC;&#x51FA;&#x4E00;&#x79CD;&#x751F;&#x6210;&#x504F;&#x597D;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x503E;&#x5411;&#x4E8E;&#x5C55;&#x5F00;&#x63A8;&#x7406;&#x3002;</p>
<h1 id="LLM AS a judge"><a href="#LLM AS a judge"></a>LLM AS a judge</h1>
<ul>
<li>&#x5982;&#x679C;&#x662F;&#x5B83;&#x81EA;&#x5DF1;&#x5199;&#x7684;&#x7B54;&#x6848;&#xFF0C;&#x600E;&#x4E48;&#x53EF;&#x80FD;&#x5B83;&#x5728;&#x5224;&#x65AD;&#x5BF9;&#x9519;&#x65F6;&#x66F4;&#x51C6;&#x786E;&#x5462;&#xFF1F;&#x56E0;&#x4E3A;&#x8FD9;&#x4E0D;&#x662F;&#x540C;&#x4E00;&#x79CD;&#x4EFB;&#x52A1;&#xFF0C;&#x5224;&#x65AD;&#x4EFB;&#x52A1;&#xFF08;<strong>&#x660E;&#x786E;&#x6807;&#x51C6;&#x6216;&#x4E8B;&#x5B9E;&#x4F9D;&#x636E;&#x7684;&#x60C5;&#x51B5;&#x4E0B;</strong>&#xFF09;&#x4F1A;&#x6FC0;&#x6D3B;&#x6A21;&#x578B;&#x66F4;&#x64C5;&#x957F;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x6BD5;&#x7ADF;&#x5224;&#x65AD;&#x6BD4;&#x751F;&#x6210;&#x4EFB;&#x52A1;&#x66F4;&#x52A0;&#x5BB9;&#x6613;&#xFF0C;&#x4EFB;&#x52A1;&#x8D8A;&#x5BB9;&#x6613;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x8D8A;&#x9AD8;</li>
<li>&#x201C;LLM-as-a-Judge&#x201D;&#xFF1A;&#x4E00;&#x79CD;&#x53D7;&#x63A7;&#x7684;&#x3001;&#x8BC4;&#x4F30;&#x6587;&#x672C;&#x8D28;&#x91CF;&#x7684;&#x6280;&#x672F;&#xFF0C;&#x5B83;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x79CD;<strong>&#x57FA;&#x4E8E;&#x6307;&#x4EE4;&#x548C;&#x6A21;&#x5F0F;&#x7684;&#x6A21;&#x4EFF;</strong></li>
</ul>
<p><a href="https://www.evidentlyai.com/llm-guide/llm-as-a-judge">LLM as a judge</a></p>
<h1 id="&#x5355;/&#x53CC;&#x7F16;&#x7801;&#x5668;"><a href="#&#x5355;/&#x53CC;&#x7F16;&#x7801;&#x5668;"></a>&#x5355;/&#x53CC;&#x7F16;&#x7801;&#x5668;</h1>
<ul>
<li>&#x5355;&#x7F16;&#x7801;&#x5668;&#xFF1A;
<ul>
<li>&#x4E00;&#x4E2A;&#x4E0A;&#x4E0B;&#x6587;&#xFF1A; &#x5728;&#x5355;&#x7F16;&#x7801;&#x5668;&#x6A21;&#x578B;&#x4E2D;&#xFF0C;&#x67E5;&#x8BE2;&#xFF08;query&#xFF09;&#x548C;&#x6587;&#x6863;&#xFF08;document&#xFF09;&#x4F1A;&#x88AB;&#x62FC;&#x63A5;&#x8D77;&#x6765;&#xFF0C;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x7EDF;&#x4E00;&#x7684;&#x8F93;&#x5165;&#x5E8F;&#x5217;&#x3002;&#x5B83;&#x4EEC;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x5185;&#x88AB;&#x7F16;&#x7801;&#x5668;&#x5904;&#x7406;&#x3002;</li>
<li>&#x6DF1;&#x5EA6;&#x4EA4;&#x4E92;&#xFF1A; &#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x5176;&#x5185;&#x90E8;&#x7684;&#x4EA4;&#x53C9;&#x6CE8;&#x610F;&#x529B;&#xFF08;cross-attention&#xFF09;&#x673A;&#x5236;&#xFF0C;&#x8BA9;&#x67E5;&#x8BE2;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x8BCD;&#x4E0E;&#x6587;&#x6863;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x8BCD;&#x8FDB;&#x884C;&#x4EA4;&#x4E92;&#xFF0C;&#x4ECE;&#x800C;&#x6355;&#x6349;&#x5B83;&#x4EEC;&#x4E4B;&#x95F4;&#x6240;&#x6709;&#x590D;&#x6742;&#x7684;&#x3001;&#x7EC6;&#x7C92;&#x5EA6;&#x7684;&#x5173;&#x7CFB;&#x3002;&#x8FD9;&#x79CD;&#x6DF1;&#x5EA6;&#x4EA4;&#x4E92;&#x4F7F;&#x5F97;&#x5B83;&#x5728;&#x5224;&#x65AD;&#x4E24;&#x4E2A;&#x6587;&#x672C;&#x7684;&#x7CBE;&#x786E;&#x5173;&#x7CFB;&#x65F6;&#x975E;&#x5E38;&#x51C6;&#x786E;&#x3002;</li>
<li>&#x4F8B;&#x5B50;&#xFF1A; BERT &#x7684;&#x4E0B;&#x4E00;&#x4E2A;&#x53E5;&#x5B50;&#x9884;&#x6D4B;&#x3001;&#x95EE;&#x7B54;&#x7CFB;&#x7EDF;&#xFF08;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x6BB5;&#x843D;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x4E2A;&#x95EE;&#x9898;&#x7684;&#x7B54;&#x6848;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>&#x53CC;&#x7F16;&#x7801;&#x5668;&#xFF1A;
<ul>
<li>&#x4E24;&#x4E2A;&#x72EC;&#x7ACB;&#x4E0A;&#x4E0B;&#x6587;&#xFF1A; &#x5728;&#x53CC;&#x7F16;&#x7801;&#x5668;&#x6A21;&#x578B;&#x4E2D;&#xFF0C;&#x67E5;&#x8BE2;&#x548C;&#x6587;&#x6863;&#x662F;&#x5206;&#x522B;&#x8F93;&#x5165;&#x7ED9;&#x5404;&#x81EA;&#x7684;&#x7F16;&#x7801;&#x5668;&#xFF08;&#x5373;&#x4F7F;&#x7F16;&#x7801;&#x5668;&#x6743;&#x91CD;&#x5171;&#x4EAB;&#xFF09;&#xFF0C;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x751F;&#x6210; embedding&#x3002;&#x5B83;&#x4EEC;&#x4E0D;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x4E0A;&#x4E0B;&#x6587;&#x5185;&#x8FDB;&#x884C;&#x4EA4;&#x53C9;&#x6CE8;&#x610F;&#x529B;&#x3002;</li>
<li>&#x65E0;&#x76F4;&#x63A5;&#x4EA4;&#x4E92;&#xFF1A; &#x6A21;&#x578B;&#x65E0;&#x6CD5;&#x5728;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#x8FDB;&#x884C;&#x67E5;&#x8BE2;&#x548C;&#x6587;&#x6863;&#x4E4B;&#x95F4;&#x7684;&#x8BCD;&#x7EA7;&#x522B;&#x6DF1;&#x5EA6;&#x4EA4;&#x4E92;&#x3002;&#x5B83;&#x4F9D;&#x8D56;&#x4E8E;&#x6BCF;&#x4E2A;&#x6587;&#x672C;&#x7684;&#x72EC;&#x7ACB;&#x8BED;&#x4E49;&#x8868;&#x793A;&#x3002;</li>
<li>&#x76EE;&#x6807;&#xFF1A; &#x901A;&#x8FC7;&#x5BF9;&#x6BD4;&#x5B66;&#x4E60;&#x8BAD;&#x7EC3;&#xFF0C;&#x6A21;&#x578B;&#x88AB;&#x6559;&#x5BFC;&#x5C06;&#x8BED;&#x4E49;&#x76F8;&#x5173;&#x7684;&#x67E5;&#x8BE2;&#x548C;&#x6587;&#x6863;&#x6620;&#x5C04;&#x5230;&#x540C;&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x4E2D;&#x76F8;&#x8FD1;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x8FD9;&#x6837;&#xFF0C;&#x5373;&#x4F7F;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x4EA4;&#x4E92;&#xFF0C;&#x5B83;&#x4EEC;&#x7684;&#x5411;&#x91CF;&#x8DDD;&#x79BB;&#x4E5F;&#x80FD;&#x53CD;&#x6620;&#x8BED;&#x4E49;&#x76F8;&#x4F3C;&#x5EA6;&#x3002;</li>
<li>&#x4F8B;&#x5B50;&#xFF1A; &#x8BED;&#x4E49;&#x641C;&#x7D22;&#x3001;&#x63A8;&#x8350;&#x7CFB;&#x7EDF;&#x3001;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x3002;eg: CodeRankEmbed</li>
</ul>
</li>
</ul>
<h1 id="AI &#x5BA2;&#x6237;&#x7AEF;&#x7AEF;&#x7684;&#x53D1;&#x5C55;&#x8D8B;&#x52BF;"><a href="#AI &#x5BA2;&#x6237;&#x7AEF;&#x7AEF;&#x7684;&#x53D1;&#x5C55;&#x8D8B;&#x52BF;"></a>AI &#x5BA2;&#x6237;&#x7AEF;&#x7AEF;&#x7684;&#x53D1;&#x5C55;&#x8D8B;&#x52BF;</h1>
<ul>
<li>&#x94FE;&#x63A5;&#x66F4;&#x5927;&#x7684;&#x5916;&#x90E8;&#x4E16;&#x754C;
<ul>
<li>&#x4F8B;&#x5982; cursor &#x5BF9; &#x5916;&#x90E8; MCP &#x5DE5;&#x5177;&#x7684;&#x8C03;&#x7528;&#xFF0C;&#x4EE5;&#x53CA;&#x5BF9; &#x5916;&#x90E8;&#x6587;&#x6863;&#x7684;&#x7D22;&#x5F15;</li>
</ul>
</li>
<li>&#x538B;&#x7F29;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;&#x66F4;&#x5C11;&#x7684; token &#x4F7F;&#x7528;
<ul>
<li>&#x4F8B;&#x5982; cursor &#x5BF9; database &#x7684;&#x7D22;&#x5F15;&#x6784;&#x5EFA;</li>
</ul>
</li>
<li>&#x8FB9;&#x7F18; AI &#x4E0E;&#x672C;&#x5730;&#x5904;&#x7406;</li>
<li>&#x4E2A;&#x6027;&#x5316;&#x4E0E;&#x81EA;&#x9002;&#x5E94;&#x5B66;&#x4E60;
<ul>
<li>&#x4F8B;&#x5982; cursor &#x6839;&#x636E;&#x7528;&#x6237;&#x64CD;&#x4F5C;&#x81EA;&#x52A8;&#x751F;&#x6210; rules</li>
</ul>
</li>
<li>&#x589E;&#x5F3A;&#x7684;&#x4EBA;&#x673A;&#x534F;&#x4F5C;&#x4E0E;&#x8FED;&#x4EE3;&#x4F18;&#x5316;&#xFF08;&#x4ECE;&#x201C;&#x4E00;&#x6B21;&#x751F;&#x6210;&#x201D;&#x5230;&#x201C;&#x5171;&#x540C;&#x521B;&#x9020;&#x201D;&#xFF09;</li>
</ul>
<h1 id="AIGC &#x53D1;&#x5C55;&#x7684;&#x4E00;&#x4E9B;&#x96BE;&#x70B9;"><a href="#AIGC &#x53D1;&#x5C55;&#x7684;&#x4E00;&#x4E9B;&#x96BE;&#x70B9;"></a>AIGC &#x53D1;&#x5C55;&#x7684;&#x4E00;&#x4E9B;&#x96BE;&#x70B9;</h1>
<ol>
<li>&#x80FD;&#x4E00;&#x6B21;&#x6027;&#x80FD;&#x591F;&#x4ECE; 0 -&gt; 1 &#x66F4;&#x9AD8;&#x6548;&#x7684;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#xFF08;&#x7C7B;&#x4F3C; lowCode&#xFF0C;&#x6216;&#x8005; no code&#xFF1B;
<ul>
<li>&#x96BE;&#x70B9;&#xFF1A;&#x5982;&#x4F55;&#x7EF4;&#x62A4;&#x548C;&#x4E8C;&#x6B21;&#x7F16;&#x8F91;&#x8FD9;&#x4E9B;&#x4E00;&#x6B21;&#x6027;&#x751F;&#x6210;&#x7684;&#x7ED3;&#x679C;&#x3002;
<ul>
<li>&#x56FE;&#x50CF;&#x751F;&#x6210;&#xFF1A;&#x4E0D;&#x518D;&#x6709;&#x56FE;&#x5C42;&#x3001;&#x8499;&#x7248;&#x548C;&#x53EF;&#x5355;&#x72EC;&#x64CD;&#x4F5C;&#x7684;&#x5BF9;&#x8C61;&#xFF08;&#x4F20;&#x7EDF; PS
<ul>
<li>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF1A;&#x5FAE;&#x8C03;&#xFF0C;&#x5C40;&#x90E8;&#x91CD;&#x7ED8;/&#x6269;&#x56FE;&#xFF08;in-painting/out-painting&#xFF09;&#xFF08;&#x7F16;&#x8F91;&#x56FE;&#x50CF;&#x7684;&#x7279;&#x5B9A;&#x533A;&#x57DF;&#xFF09;&#x6216;&#x4F7F;&#x7528;&#x63A7;&#x5236;&#x7F51;&#x7EDC;&#xFF08;&#x5982;ControlNet&#xFF09;</li>
</ul>
</li>
<li>&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF1A;&#x53EF;&#x80FD;&#x7F3A;&#x4E4F;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8F93;&#x51FA;
<ul>
<li>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF1A;&#x7EA6;&#x675F;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x8F93;&#x51FA;&#xFF08;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x901A;&#x8FC7;&#x6587;&#x4EF6;&#x7ED3;&#x6784;&#x7EA6;&#x675F;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
<h1 id="LLM &#x8BC4;&#x4F30;"><a href="#LLM &#x8BC4;&#x4F30;"></a>LLM &#x8BC4;&#x4F30;</h1>
<ol>
<li>SWE-bench &#x8BC4;&#x4F30;</li>
</ol>
<ul>
<li>GitHub Issue&#x4FEE;&#x590D;   | 2294&#x4E2A;&#x771F;&#x5B9E;&#x9879;&#x76EE;&#x95EE;&#x9898;</li>
<li>&#x8BC4;&#x5206;&#x53EA;&#x80FD;&#x4EE3;&#x8868;&#x8FD9;&#x4E2A; LLM &#x5728;&#x63D0;&#x4F9B;&#x7684; Agent &#x4E0B;&#x7684;&#x8868;&#x73B0;&#x80FD;&#x529B;&#xFF0C;&#x53EA;&#x80FD;&#x505A;&#x7EB5;&#x5411;&#x6BD4;&#x8F83;&#xFF0C;&#x800C;&#x4E0D;&#x80FD;&#x505A;&#x4E0D;&#x540C;&#x54C1;&#x7C7B;&#x6A2A;&#x5411;&#x6BD4;&#x8F83;&#xFF08;&#x6BD4;&#x5982; chatgpt &#x8DDF; gemini &#x7684; agent &#x8BBE;&#x8BA1;&#x4E0A;&#x5C31;&#x53EF;&#x80FD;&#x4E0D;&#x540C;&#xFF09;</li>
</ul>
<ol start="2">
<li><strong>Aider Polyglot-Diff</strong>
<ul>
<li>&#x6838;&#x5FC3;&#xFF1A;<strong>&#x6700;&#x5C0F;&#x5316;&#x4EE3;&#x7801;&#x53D8;&#x66F4;</strong>&#xFF08;&#x53EA;&#x6539;&#x5FC5;&#x8981;&#x884C;&#xFF09;</li>
<li>&#x591A;&#x8BED;&#x8A00;&#x4E00;&#x81F4;&#x6027;&#xFF1A;Python/JS/Java/Go/Rust</li>
</ul>
</li>
</ol>
<ul>
<li>reference
<ul>
<li><a href="https://openai.com/index/gpt-4-1/">gpt-4.1 intro</a></li>
</ul>
</li>
</ul>
<h1 id="AI Agent"><a href="#AI Agent"></a>AI Agent</h1>
<p>LLM &#x5728;&#x9010;&#x6B65;&#x5438;&#x6536;&#x548C;&#x5185;&#x5316;&#x201C;&#x89C4;&#x5212;&#x201D;&#x3001;&#x201C;ReAct&#x201D;&#x548C;&#x201C;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x201D;&#x7684;&#x6838;&#x5FC3;&#x80FD;&#x529B;&#x3002;&#x8FD9;&#x79CD;&#x8D8B;&#x52BF;&#x4F7F;&#x5F97;LLM&#x80FD;&#x591F;&#x6210;&#x4E3A;&#x66F4;&#x52A0;&#x81EA;&#x4E3B;&#x548C;&#x591A;&#x529F;&#x80FD;&#x7684;AI&#x4EE3;&#x7406;&#x3002;&#x90A3;&#x4E48; Agent = LLM + Planning + reAct + tools &#x8FD8;&#x662F;&#x5426;&#x6210;&#x7ACB;&#xFF1F;</p>
<p>&#x672A;&#x6765; Agent &#x662F;&#x4F55;&#x79CD;&#x5F62;&#x6001;&#xFF1F;Agent &#x2248; (&#x9AD8;&#x5EA6;&#x96C6;&#x6210;&#x4E14;&#x5185;&#x5316;&#x4E86;&#x89C4;&#x5212;&#x3001;ReAct&#x548C;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x7684;) LLM + &#x5F3A;&#x5927;&#x7684;&#x8BB0;&#x5FC6;&#x7CFB;&#x7EDF; + &#x591A;&#x6A21;&#x6001;&#x611F;&#x77E5;&#x4E0E;&#x4EA4;&#x4E92;&#x80FD;&#x529B; + (&#x53EF;&#x9009;&#x7684;) &#x591A;&#x667A;&#x80FD;&#x4F53;&#x534F;&#x4F5C; + &#x7269;&#x7406;&#x4E16;&#x754C;&#x5177;&#x8EAB;&#x80FD;&#x529B; + &#x5185;&#x7F6E;&#x7684;&#x5B89;&#x5168;&#x4E0E;&#x5BF9;&#x9F50;&#x673A;&#x5236;&#x3002;</p>
<h1 id="LangGraph &#x662F;&#x4E3A;&#x4E86;&#x81EA;&#x4E3B;&#x53EF;&#x63A7;"><a href="#LangGraph &#x662F;&#x4E3A;&#x4E86;&#x81EA;&#x4E3B;&#x53EF;&#x63A7;"></a>LangGraph &#x662F;&#x4E3A;&#x4E86;&#x81EA;&#x4E3B;&#x53EF;&#x63A7;</h1>
<p>LangGraph &#x63D0;&#x4F9B;&#x4E86;&#x663E;&#x5F0F;&#x4E14;&#x53EF;&#x63A7;&#x7684;&#x7F16;&#x6392;&#x80FD;&#x529B;&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x8BA9; LLM &#x5B8C;&#x5168;&#x81EA;&#x7531;&#x5730;&#x53BB;&#x89C4;&#x5212;&#x4E00;&#x5207;&#xFF08;LangChain&#xFF09;&#xFF0C;&#x800C;&#x662F;&#x8BA9; LLM &#x5728;&#x4F60;&#x8BBE;&#x8BA1;&#x7684;&#x201C;&#x5BFC;&#x822A;&#x56FE;&#x201D;&#x4E2D;&#x505A;&#x51B3;&#x7B56;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x4F60;&#x5728;&#x5904;&#x7406;&#x590D;&#x6742;&#x3001;&#x9700;&#x8981;&#x4E25;&#x683C;&#x63A7;&#x5236;&#x6D41;&#x7A0B;&#x3001;&#x6216;&#x6709;&#x786E;&#x5B9A;&#x6027;&#x5FAA;&#x73AF;&#x548C;&#x5206;&#x652F;&#x7684;&#x4EFB;&#x52A1;&#x65F6;&#xFF0C;&#x80FD;&#x591F;&#x6709;&#x66F4;&#x9AD8;&#x7684;&#x53EF;&#x9884;&#x6D4B;&#x6027;&#x548C;&#x5065;&#x58EE;&#x6027;&#x3002;</p>
<h1 id="chatGPT vs Gemini"><a href="#chatGPT vs Gemini"></a>chatGPT vs Gemini</h1>
<ul>
<li>chatGPT 4o &#x4F1A;&#x5728;&#x56DE;&#x7B54;&#x7ED3;&#x5C3E;&#x9644;&#x52A0;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x5F15;&#x5BFC;&#x7528;&#x6237;&#x7EE7;&#x7EED;&#x63D0;&#x95EE;</li>
<li>Gemini 2.5 Pro &#x4F1A;&#x7ED9;&#x51FA;&#x7B80;&#x6D01;&#x7684;&#x56DE;&#x7B54;&#xFF0C;&#x5F88;&#x5C11;&#x53BB;&#x5F15;&#x5BFC;&#x4EA4;&#x4E92;</li>
</ul>
<p>chatGPT &#x7684;&#x5546;&#x4E1A;&#x6A21;&#x5F0F;&#x662F;&#x57FA;&#x4E8E;&#x7528;&#x6237;&#x63D0;&#x95EE;&#x6B21;&#x6570;&#x6536;&#x8D39;&#xFF0C;&#x8FD9;&#x662F;&#x4E3B;&#x4E1A;&#x52A1;&#xFF0C;&#x6240;&#x4EE5;&#x9488;&#x5BF9;&#x6027;&#x505A;&#x5F15;&#x5BFC;&#x7EE7;&#x7EED;&#x63D0;&#x95EE;&#x7684;&#x8BAD;&#x7EC3;&#xFF09;&#xFF0C;&#x800C; Gemini &#x5F53;&#x524D;&#x9636;&#x6BB5;&#x9996;&#x8981;&#x76EE;&#x6807;&#x53EF;&#x80FD;&#x662F;&#x670D;&#x52A1; google &#x5185;&#x90E8;&#x7684;&#x5404;&#x79CD;&#x4EA7;&#x54C1;&#xFF0C;&#x6240;&#x4EE5;&#x9700;&#x8981;&#x7B80;&#x6D01;&#x7684;&#x56DE;&#x7B54;&#xFF1F;</p>
<p>2025-04-27</p>
<h1 id="AI CodeReview &#x611F;&#x609F;"><a href="#AI CodeReview &#x611F;&#x609F;"></a>AI CodeReview &#x611F;&#x609F;</h1>
<ul>
<li>RAG&#xFF0C;retrieval augmented generation&#xFF0C;&#x5B9E;&#x9645;&#x662F;&#x5BF9; diff &#x4EE3;&#x7801;&#x7684;&#x4E0E;&#x63D0;&#x793A;&#x8BCD;&#x7EC4;&#x88C5;&#x6210;<strong>&#x975E;&#x7ED3;&#x6784;&#x5316;</strong> context &#x6295;&#x5582;&#x7ED9;&#x6A21;&#x578B;&#x5F97;&#x51FA;&#x60F3;&#x8981;&#x7684;<strong>&#x7ED3;&#x6784;&#x5316;&#x6570;&#x636E;</strong></li>
<li>&#x8D8A;&#x662F;&#x5F31;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x8D8A;&#x9700;&#x8981;&#x597D;&#x66F4;&#x52A0;&#x5177;&#x4F53;&#x7684;&#x63D0;&#x793A;&#x8BCD;&#x6765;&#x5F15;&#x5BFC;&#xFF0C;&#x6BD4;&#x5982; runtime error &#x610F;&#x5473;&#x7740;&#x54EA;&#x4E9B;&#x573A;&#x666F;&#xFF1F;</li>
<li>&#x4E0D;&#x540C;&#x65F6;&#x671F;&#x5BF9;&#x4E8E;&#x63D0;&#x793A;&#x8BCD;&#xFF08;&#x53EF;&#x8C03;&#x8282;&#xFF09;&#x7684;&#x8981;&#x6C42;&#x4E0D;&#x540C;&#xFF0C;&#x6BD4;&#x5982;&#x65E9;&#x671F;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x5173;&#x6CE8; runtime error &#x7684;&#x573A;&#x666F;&#xFF0C;&#x800C;&#x540E;&#x9762;&#x53EF;&#x80FD;&#x5173;&#x6CE8; performance &#x7684;&#x573A;&#x666F;</li>
</ul>
<h1 id="ChatGPT &#x56FE;&#x50CF;-&#x5B89;&#x5168;&#x6027;-&#x51FA;&#x5904;&#x67E5;&#x8BE2;"><a href="#ChatGPT &#x56FE;&#x50CF;-&#x5B89;&#x5168;&#x6027;-&#x51FA;&#x5904;&#x67E5;&#x8BE2;"></a>ChatGPT &#x56FE;&#x50CF;-&#x5B89;&#x5168;&#x6027;-&#x51FA;&#x5904;&#x67E5;&#x8BE2;</h1>
<p>&#x901A;&#x8FC7; C2PA &#x548C;&#x5185;&#x90E8;&#x53EF;&#x9006;&#x641C;&#x7D22;&#x67E5;&#x627E;&#x51FA;&#x5904;</p>
<ul>
<li>C2PA &#x662F;&#x201C;&#x8EAB;&#x4EFD;&#x8BC1;&#x201D;&#xFF0C;&#x660E;&#x786E;&#x5199;&#x5728;&#x6587;&#x4EF6;&#x91CC;&#xFF0C;&#x522B;&#x4EBA;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x67E5;&#x3002;&#x65B9;&#x6CD5;&#xFF1A;
<ul>
<li>&#x56FE;&#x50CF;&#x7684; meta &#x4FE1;&#x606F;&#x90E8;&#x5206;</li>
</ul>
</li>
<li>&#x5185;&#x90E8;&#x53EF;&#x9006;&#x641C;&#x7D22; &#x662F;&#x201C;DNA &#x68C0;&#x6D4B;&#x201D;&#xFF0C;&#x5373;&#x4F7F;&#x4F60;&#x6495;&#x6389;&#x8EAB;&#x4EFD;&#x8BC1;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x751F;&#x7269;&#x7279;&#x5F81;&#x786E;&#x8BA4;&#x4F60;&#x7684;&#x8EAB;&#x4EFD;&#x3002;&#xFF08;&#x4F7F;&#x5F97;&#x50CF;&#x7D20;&#x5206;&#x5E03;&#x7B26;&#x5408;&#x7279;&#x5B9A;&#x6A21;&#x5F0F;&#xFF09;&#x53EF;&#x80FD;&#x7684;&#x65B9;&#x6CD5;&#xFF1A;
<ul>
<li>&#x6A21;&#x578B;&#x6307;&#x7EB9;&#xFF08;Model Fingerprinting&#xFF09;
&#x6BCF;&#x4E2A; AI &#x751F;&#x6210;&#x7684;&#x56FE;&#x7247;&#x6216;&#x6587;&#x672C;&#x90FD;&#x53EF;&#x80FD;&#x5E26;&#x6709;&#x72EC;&#x7279;&#x7684;&#x7EDF;&#x8BA1;&#x7279;&#x5F81;&#xFF08;&#x5982;&#x566A;&#x58F0;&#x6A21;&#x5F0F;&#x3001;&#x50CF;&#x7D20;&#x5206;&#x5E03;&#x7B49;&#xFF09;&#x3002;
&#x5373;&#x4F7F;&#x53BB;&#x9664;&#x4E86;&#x5143;&#x6570;&#x636E;&#xFF08;&#x5982; C2PA&#xFF09;&#xFF0C;OpenAI &#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#x8BC6;&#x522B;&#x5185;&#x5BB9;&#x662F;&#x5426;&#x6765;&#x81EA; GPT-4o&#x3002;</li>
<li>&#x9690;&#x5F0F;&#x6C34;&#x5370;&#xFF08;Invisible Watermarking&#xFF09;&#xFF08;&#x53EF;&#x80FD;&#x7684;&#x6280;&#x672F;&#x4E4B;&#x4E00;&#xFF09;
&#x67D0;&#x4E9B; AI &#x751F;&#x6210;&#x5185;&#x5BB9;&#x53EF;&#x80FD;&#x4F7F;&#x7528;&#x4E0D;&#x53EF;&#x89C1;&#x7684;&#x6C34;&#x5370;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;
&#x8F7B;&#x5FAE;&#x8C03;&#x6574;&#x50CF;&#x7D20;&#x503C;&#xFF0C;&#x4F7F;&#x5176;&#x7B26;&#x5408;&#x7279;&#x5B9A;&#x6570;&#x5B66;&#x6A21;&#x5F0F;&#xFF0C;&#x4F46;&#x4E0D;&#x5F71;&#x54CD;&#x8089;&#x773C;&#x53EF;&#x89C1;&#x7684;&#x5185;&#x5BB9;&#x3002;
&#x7C7B;&#x4F3C;&#x4E8E; Google DeepMind &#x5F00;&#x53D1;&#x7684; SynthID &#x6280;&#x672F;&#xFF0C;&#x5D4C;&#x5165;&#x201C;&#x96BE;&#x4EE5;&#x53BB;&#x9664;&#x4F46;&#x53EF;&#x8BC6;&#x522B;&#x201D;&#x7684;&#x6C34;&#x5370;&#x3002;</li>
<li>&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x7279;&#x5F81;&#x5206;&#x6790;&#xFF08;AI-Generated Content Detection&#xFF09;
AI &#x751F;&#x6210;&#x7684;&#x56FE;&#x7247;&#x3001;&#x6587;&#x672C;&#x3001;&#x4EE3;&#x7801;&#x5F80;&#x5F80;&#x6709;&#x7279;&#x5B9A;&#x7684;&#x6A21;&#x5F0F;&#xFF08;&#x5982; GPT &#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x66F4;&#x7B26;&#x5408;&#x8BED;&#x6CD5;&#x89C4;&#x8303;&#x4F46;&#x7F3A;&#x4E4F;&#x521B;&#x610F;&#x9519;&#x8BEF;&#xFF09;&#x3002;
&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x68C0;&#x6D4B;&#x6A21;&#x578B;&#xFF0C;OpenAI &#x53EF;&#x4EE5;&#x7528;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x65B9;&#x6CD5;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5185;&#x5BB9;&#x662F;&#x5426;&#x7531; GPT-4o &#x751F;&#x6210;&#xFF0C;&#x5373;&#x4F7F;&#x6CA1;&#x6709;&#x5143;&#x6570;&#x636E;&#x3002;</li>
</ul>
</li>
</ul>
<h1 id="&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x539F;&#x7406;"><a href="#&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x539F;&#x7406;"></a><a href="https://chatgpt.com/share/67e3db1c-3314-800f-a04d-8e232d2bce0e">&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x539F;&#x7406;</a></h1>
<h1 id="&#x5927;&#x6A21;&#x578B;&#x53CD;&#x7F16;&#x8BD1;&#x4EE3;&#x7801;"><a href="#&#x5927;&#x6A21;&#x578B;&#x53CD;&#x7F16;&#x8BD1;&#x4EE3;&#x7801;"></a><a href="https://ghuntley.com/tradecraft/">&#x5927;&#x6A21;&#x578B;&#x53CD;&#x7F16;&#x8BD1;&#x4EE3;&#x7801;</a></h1>
<h1 id="AI &#x5BF9;&#x6280;&#x672F;&#x4F20;&#x64AD;&#x7684;&#x53CC;&#x91CD;&#x5F71;&#x54CD;"><a href="#AI &#x5BF9;&#x6280;&#x672F;&#x4F20;&#x64AD;&#x7684;&#x53CC;&#x91CD;&#x5F71;&#x54CD;"></a>AI &#x5BF9;&#x6280;&#x672F;&#x4F20;&#x64AD;&#x7684;&#x53CC;&#x91CD;&#x5F71;&#x54CD;</h1>
<p>&#x662F;&#x4FC3;&#x8FDB;&#xFF0C;&#x8FD8;&#x662F;&#x9650;&#x5236;&#xFF1F;&#x5982;&#x679C;&#x5927;&#x5BB6;&#x90FD;&#x4F7F;&#x7528;&#x5927;&#x6A21;&#x578B;&#x89E3;&#x51B3;&#x6280;&#x672F;&#x95EE;&#x9898;&#xFF0C;&#x800C;&#x5927;&#x6A21;&#x578B;&#x53C8;&#x662F;&#x57FA;&#x4E8E;&#x5DF2;&#x6709;&#x6570;&#x636E;&#xFF08;&#x65E7;&#x6280;&#x672F;&#xFF09;&#x8BAD;&#x7EC3;&#xFF0C;&#x65B0;&#x6280;&#x672F;&#x7684;&#x5E94;&#x7528;&#x4F1A;&#x843D;&#x540E;&#xFF0C;&#x6CA1;&#x4EBA;&#x4F7F;&#x7528;&#xFF0C;&#x4F1A;&#x5BFC;&#x81F4;&#x7F51;&#x4E0A;&#x6709;&#x5173;&#x65B0;&#x6280;&#x672F;&#x7684;&#x4FE1;&#x606F;&#x5F88;&#x5C11;&#xFF0C;&#x5BFC;&#x81F4; AI &#x7F3A;&#x4E4F;&#x65B0;&#x6280;&#x672F;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#xFF0C;&#x90A3;&#x65B0;&#x6280;&#x672F;&#x5C31;&#x5F88;&#x96BE;&#x88AB;&#x666E;&#x53CA;&#xFF1F;</p>
<ul>
<li><a href="https://vale.rocks/posts/ai-is-stifling-tech-adoption">AI &#x662F;&#x963B;&#x788D;&#x6280;&#x672F;&#x4F20;&#x64AD;&#x7684;&#x5143;&#x51F6;</a></li>
</ul>
<h1 id="world labs &#x56FE;&#x7247;&#x751F;&#x6210; 3D &#x89C6;&#x9891;"><a href="#world labs &#x56FE;&#x7247;&#x751F;&#x6210; 3D &#x89C6;&#x9891;"></a>world labs &#x56FE;&#x7247;&#x751F;&#x6210; 3D &#x89C6;&#x9891;</h1>
<p><a href="https://www.worldlabs.ai/blog">demo</a></p>
<h1 id="supervision"><a href="#supervision"></a><a href="https://github.com/roboflow/supervision">supervision</a></h1>
<h1 id="AI &#x56FE;&#x7247;&#x8BC6;&#x522B;&#x4E2D;&#x7684;&#x89C6;&#x89C9;&#x6CE8;&#x5165;(visual-prompt-injections)"><a href="#AI &#x56FE;&#x7247;&#x8BC6;&#x522B;&#x4E2D;&#x7684;&#x89C6;&#x89C9;&#x6CE8;&#x5165;(visual-prompt-injections)"></a><a href="https://www.lakera.ai/blog/visual-prompt-injections">AI &#x56FE;&#x7247;&#x8BC6;&#x522B;&#x4E2D;&#x7684;&#x89C6;&#x89C9;&#x6CE8;&#x5165;(visual-prompt-injections)</a></h1>
<ol>
<li>The Invisibility Cloak(&#x9690;&#x8EAB;&#x6597;&#x7BF7;)</li>
<li>I, Robot(&#x6211;&#xFF0C;&#x673A;&#x5668;&#x4EBA;)</li>
<li>One advert to rule them all(&#x4E00;&#x4E2A;&#x5E7F;&#x544A;&#x7EDF;&#x6CBB;&#x4ED6;&#x4EEC;&#x6240;&#x6709;)</li>
</ol>
<ul>
<li><a href="https://blog.roboflow.com/gpt-4-vision-prompt-injection/">GPT-4 Vision &#x63D0;&#x793A;&#x6CE8;&#x5165;</a></li>
</ul>
<h1 id="&#x5947;&#x5F02;&#x503C;&#x5206;&#x89E3;"><a href="#&#x5947;&#x5F02;&#x503C;&#x5206;&#x89E3;"></a><a href="https://www.cvmart.net/community/detail/4092">&#x5947;&#x5F02;&#x503C;&#x5206;&#x89E3;</a></h1>
<ul>
<li>&#x5947;&#x5F02;&#x503C;&#x5206;&#x89E3;&#xFF08;SVD&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x77E9;&#x9635;&#x5206;&#x89E3;&#x6280;&#x672F;&#xFF0C;&#x5B83;&#x5C06;&#x4E00;&#x4E2A;&#x77E9;&#x9635;&#x5206;&#x89E3;&#x4E3A;&#x4E09;&#x4E2A;&#x77E9;&#x9635;&#x7684;&#x4E58;&#x79EF;&#xFF1A;&#x4E00;&#x4E2A;&#x6B63;&#x4EA4;&#x77E9;&#x9635;&#x3001;&#x4E00;&#x4E2A;&#x5BF9;&#x89D2;&#x77E9;&#x9635;&#x548C;&#x4E00;&#x4E2A;&#x6B63;&#x4EA4;&#x77E9;&#x9635;&#x7684;&#x8F6C;&#x7F6E;&#x3002;</li>
<li>&#x5947;&#x5F02;&#x503C;&#x5206;&#x89E3;&#x5728;&#x6570;&#x636E;&#x964D;&#x7EF4;&#x3001;&#x56FE;&#x50CF;&#x538B;&#x7F29;&#x3001;&#x63A8;&#x8350;&#x7CFB;&#x7EDF;&#x7B49;&#x9886;&#x57DF;&#x6709;&#x5E7F;&#x6CDB;&#x5E94;&#x7528;&#x3002;</li>
</ul>
<h1 id="AI DOOM"><a href="#AI DOOM"></a>AI DOOM</h1>
<ul>
<li>&#x4F20;&#x7EDF;&#x7684;&#x7535;&#x5B50;&#x6E38;&#x620F;&#x5F00;&#x53D1;&#x6D41;&#x7A0B;&#xFF0C;&#x901A;&#x5E38;&#x6D89;&#x53CA;&#x590D;&#x6742;&#x7684;&#x9884;&#x8BBE;&#x903B;&#x8F91;&#xFF0C;&#x9075;&#x5FAA;&#x7528;&#x6237;&#x8F93;&#x5165;&#x3001;&#x66F4;&#x65B0;&#x6E38;&#x620F;&#x72B6;&#x6001;&#x3001;&#x6E32;&#x67D3;&#x753B;&#x9762;&#x7684;&#x56FA;&#x5B9A;&#x5FAA;&#x73AF;&#x3002;</li>
<li>DeepMind&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x9769;&#x547D;&#x6027;&#x7684;&#x60F3;&#x6CD5; - &#x901A;&#x8FC7;&#x751F;&#x6210;&#x5F0F;AI&#x6A21;&#x578B;&#x5B8C;&#x5168;&#x629B;&#x5F03;&#x8FD9;&#x4E9B;&#x9884;&#x8BBE;&#x903B;&#x8F91;&#xFF0C;&#x4F9D;&#x8D56;AI&#x5B9E;&#x65F6;&#x751F;&#x6210;&#x6E38;&#x620F;&#x7684;&#x5185;&#x5BB9;&#x4E0E;&#x72B6;&#x6001;&#x66F4;&#x65B0;&#x3002;</li>
<li><a href="https://blog.csdn.net/weixin_41496173/article/details/141937965">AI&#x6280;&#x672F;&#x98A0;&#x8986;&#x6E38;&#x620F;&#x5F00;&#x53D1;&#xFF1A;&#x8C37;&#x6B4C;DeepMind GameNGen&#x5B9E;&#x65F6;&#x751F;&#x6210;&#x300A;DOOM&#x300B;&#x63A2;&#x79D8;</a></li>
</ul>
<h1 id="&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x7684;&#x73B0;&#x72B6;&#xFF0C;&#x4EFB;&#x52A1;&#xFF0C;&#x67B6;&#x6784; &#x4E0E;&#x7EDF;&#x4E00;"><a href="#&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x7684;&#x73B0;&#x72B6;&#xFF0C;&#x4EFB;&#x52A1;&#xFF0C;&#x67B6;&#x6784; &#x4E0E;&#x7EDF;&#x4E00;"></a><a href="http://www.stat.ucla.edu/~sczhu/Blog_articles/%E6%B5%85%E8%B0%88%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.pdf">&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x7684;&#x73B0;&#x72B6;&#xFF0C;&#x4EFB;&#x52A1;&#xFF0C;&#x67B6;&#x6784; &#x4E0E;&#x7EDF;&#x4E00;</a></h1>
<h1 id="&#x89C6;&#x9891;&#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x7684;&#x6F14;&#x5316;?"><a href="#&#x89C6;&#x9891;&#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x7684;&#x6F14;&#x5316;?"></a>&#x89C6;&#x9891;&#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x7684;&#x6F14;&#x5316;?</h1>
<p>&#x5173;&#x952E;&#x5E27;&#xFF08;+&#x63CF;&#x8FF0;&#xFF09; + &#x63D2;&#x503C; -&gt; &#x7AEF;&#x5230;&#x7AEF;&#x7684;&#x5B66;&#x4E60;</p>
<p>&#x5206;&#x955C;&#x6280;&#x672F; + patches &#x6280;&#x672F;</p>
<h1 id="&#x4E00;&#x79CD;&#x5FEB;&#x901F;&#x7406;&#x89E3;&#x6A21;&#x578B;&#x7684;&#x65B9;&#x6CD5;"><a href="#&#x4E00;&#x79CD;&#x5FEB;&#x901F;&#x7406;&#x89E3;&#x6A21;&#x578B;&#x7684;&#x65B9;&#x6CD5;"></a>&#x4E00;&#x79CD;&#x5FEB;&#x901F;&#x7406;&#x89E3;&#x6A21;&#x578B;&#x7684;&#x65B9;&#x6CD5;</h1>
<p>&#x4ECE;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5F00;&#x59CB;</p>
<ul>
<li>U-Net &#x662F;&#x50CF;&#x7D20;&#x7EA7;&#x522B;&#x7684;&#x5206;&#x7C7B;&#x635F;&#x5931;&#x8DDF; dice_loss &#x7EC4;&#x6210;</li>
<li>Segment Anything Model (SAM) &#x4F7F;&#x7528;&#x4E86;&#x4E00;&#x79CD;&#x57FA;&#x4E8E;&#x4EA4;&#x53C9;&#x71B5;&#x7684;&#x591A;&#x4EFB;&#x52A1;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF0C;&#x5176;&#x4E2D;&#x5305;&#x62EC;&#x4E86;&#x50CF;&#x7D20;&#x7EA7;&#x522B;&#x7684;&#x5206;&#x7C7B;&#x635F;&#x5931;&#x548C;&#x8FB9;&#x754C;&#x6846;&#x7EA7;&#x522B;&#x7684;&#x56DE;&#x5F52;&#x635F;&#x5931;</li>
</ul>
<h1 id="&#x8FB9;&#x754C;&#x6846;&#x56DE;&#x5F52;&#x635F;&#x5931;"><a href="#&#x8FB9;&#x754C;&#x6846;&#x56DE;&#x5F52;&#x635F;&#x5931;"></a>&#x8FB9;&#x754C;&#x6846;&#x56DE;&#x5F52;&#x635F;&#x5931;</h1>
<h1 id="&#x673A;&#x5668;&#x5B66;&#x4E60;&#x57FA;&#x7840;&#x6570;&#x636E;&#x96C6;"><a href="#&#x673A;&#x5668;&#x5B66;&#x4E60;&#x57FA;&#x7840;&#x6570;&#x636E;&#x96C6;"></a>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x57FA;&#x7840;&#x6570;&#x636E;&#x96C6;</h1>
<ul>
<li>&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x9886;&#x57DF;&#xFF1A;MNist, Imagenet, CIFAR 10 &#x7B49;</li>
<li>&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;&#x9886;&#x57DF;&#xFF1A;IMDb Large Movie Review Dataset &#x7B49;</li>
<li>&#x56FE;&#x50CF;&#x5206;&#x5272;&#xFF1A;COCO
<a href="https://juejin.cn/post/6844903826680446990">reference</a></li>
</ul>
<h1 id="&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x9010;&#x6B65;&#x53D6;&#x4EE3; SVM &#x539F;&#x56E0;"><a href="#&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x9010;&#x6B65;&#x53D6;&#x4EE3; SVM &#x539F;&#x56E0;"></a>&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x9010;&#x6B65;&#x53D6;&#x4EE3; SVM &#x539F;&#x56E0;</h1>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x6211;&#x4EEC;&#x5927;&#x90E8;&#x5206;&#x4F7F;&#x7528;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x8FDB;&#x884C;&#x5206;&#x7C7B;&#x800C;&#x975E;SVM&#xFF1F;&#x56E0;&#x4E3A;&#x6838;&#x51FD;&#x6570;&#x662F;&#x6211;&#x4EEC;&#x624B;&#x52A8;&#x8BBE;&#x8BA1;&#x7684;&#x56FA;&#x5B9A;&#x7B97;&#x6CD5;&#x8FDB;&#x884C;&#x7279;&#x5F81;&#x63D0;&#x53D6;&#xFF0C;&#x5C31;&#x5982;&#x540C;&#x56FE;&#x50CF;&#x5904;&#x7406;&#x65E9;&#x671F;&#x7684;&#x624B;&#x52A8;&#x8BBE;&#x8BA1;&#x7684;&#x5377;&#x79EF;&#x6838;&#x4E00;&#x6837;&#xFF0C;&#x65E0;&#x6CD5;&#x8BAD;&#x7EC3;&#xFF0C;&#x8FD9;&#x6837;&#x7684;&#x65B9;&#x6CD5;&#x80FD;&#x529B;&#x4E0A;&#x9650;&#x6709;&#x9650;&#xFF0C;&#x6240;&#x4EE5;&#x5C31;&#x88AB;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x6DD8;&#x6C70;&#x4E86;&#x3002;</p>
<h1 id="&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4E0E;&#x666E;&#x901A;&#x56FE;&#x50CF;&#x8BC6;&#x522B;&#x7684;&#x8BAD;&#x7EC3;&#x533A;&#x522B;"><a href="#&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4E0E;&#x666E;&#x901A;&#x56FE;&#x50CF;&#x8BC6;&#x522B;&#x7684;&#x8BAD;&#x7EC3;&#x533A;&#x522B;"></a>&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4E0E;&#x666E;&#x901A;&#x56FE;&#x50CF;&#x8BC6;&#x522B;&#x7684;&#x8BAD;&#x7EC3;&#x533A;&#x522B;</h1>
<ul>
<li>&#x4EBA;&#x8138;&#x7C7B;&#x522B;&#x592A;&#x591A;&#xFF08;&#x53EF;&#x80FD;&#x6210;&#x5343;&#x4E0A;&#x4E07;&#xFF09;&#xFF0C;&#x6BCF;&#x4E2A;&#x7C7B;&#x522B;&#x6570;&#x636E;&#x91CF;&#x592A;&#x5C11;&#xFF1B;&#x800C;&#x4E14;&#x68C0;&#x6D4B;&#x540C;&#x4E00;&#x4EBA;&#x7684;&#x4EBA;&#x8138;&#x5E94;&#x8BE5;&#x805A;&#x7C7B;&#xFF0C;&#x5373;&#x4F7F;&#x5728;&#x9762;&#x90E8;&#x8868;&#x60C5;&#x3001;&#x5149;&#x7167;&#x3001;&#x5934;&#x90E8;&#x59FF;&#x6001;&#x7B49;&#x65B9;&#x9762;&#x6709;&#x6781;&#x5927;&#x53D8;&#x5316;&#x3002;
<ul>
<li>SphereFace&#xFF08;Angular Softmax Loss&#xFF09;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;&#x65B0;&#x7684;&#x635F;&#x5931;&#x51FD;&#x6570; -- A-Softmax &#x635F;&#x5931;&#xFF0C;&#x8FD9;&#x79CD;&#x635F;&#x5931;&#x51FD;&#x6570;&#x4E13;&#x6CE8;&#x4E8E;&#x5B66;&#x4E60;&#x6BCF;&#x4E2A;&#x4EBA;&#x8138;&#x7C7B;&#x522B;&#x5728;&#x89D2;&#x5EA6;&#x8FB9;&#x754C;&#x4E0A;&#x7684;&#x5206;&#x5E03;&#x3002;&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x79CD;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5F3A;&#x8C03;&#x540C;&#x7C7B;&#x522B;&#x7684;&#x4EBA;&#x8138;&#x76F8;&#x4F3C;&#x5EA6;&#x548C;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x7684;&#x4EBA;&#x8138;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x6709;&#x52A9;&#x4E8E;&#x6A21;&#x578B;&#x628A;&#x76F8;&#x540C;&#x4EBA;&#x7684;&#x9762;&#x90E8;&#x56FE;&#x50CF;&#x6620;&#x5C04;&#x5230;&#x76F8;&#x8FD1;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5C06;&#x4E0D;&#x540C;&#x4EBA;&#x7684;&#x9762;&#x90E8;&#x56FE;&#x50CF;&#x6620;&#x5C04;&#x5230;&#x8FDC;&#x79BB;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</li>
</ul>
</li>
</ul>
<h1 id="scaling law"><a href="#scaling law"></a>scaling law</h1>
<ul>
<li>LLM&#x4E2D;&#x7684;Scaling Law&#xFF08;&#x6BD4;&#x4F8B;&#x5F8B;&#xFF09;&#x662F;&#x6307;&#xFF0C; Language Model&#xFF08;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF09;&#x7684;&#x6027;&#x80FD;&#x4F1A;&#x968F;&#x7740;&#x6A21;&#x578B;&#x89C4;&#x6A21;&#x7684;&#x589E;&#x52A0;&#x800C;&#x6307;&#x6570;&#x589E;&#x957F;</li>
<li>&#x751F;&#x7269;&#x5B66;&#xFF1A;&#x4EE3;&#x8C22;&#x7387;&#xFF0C;&#x5FC3;&#x8DF3;&#x9891;&#x7387;&#xFF0C;&#x751F;&#x7269;&#x4F53;&#x7684;&#x7ED3;&#x6784;&#x652F;&#x6301;&#x7CFB;&#x7EDF;&#xFF0C;&#x751F;&#x7269;&#x7684;&#x5BFF;&#x547D;&#xFF0C;&#x8FD0;&#x52A8;&#x80FD;&#x529B;&#x7B49;&#x4E0E;&#x4F53;&#x578B;&#x5173;&#x7CFB;</li>
<li>&#x793E;&#x4F1A;&#x6027;&#xFF1A;&#x4EBA;&#x7FA4;&#x89C4;&#x6A21;&#x5BF9;&#x793E;&#x4F1A;&#x884C;&#x4E3A;&#x548C;&#x73B0;&#x8C61;&#xFF1B;&#x4F8B;&#x5982;&#xFF0C;&#x57CE;&#x5E02;&#x89C4;&#x6A21;&#x4E0E;&#x57CE;&#x5E02;&#x53D1;&#x5C55;&#x3001;&#x793E;&#x4F1A;&#x4EA4;&#x6D41;&#x4EE5;&#x53CA;&#x8D44;&#x6E90;&#x5229;&#x7528;&#x4E4B;&#x95F4;&#x53EF;&#x80FD;&#x5B58;&#x5728;&#x4E00;&#x4E9B;&#x89C4;&#x6A21;&#x6548;&#x5E94;</li>
</ul>
<h1 id="Towhee &#x6846;&#x67B6;"><a href="#Towhee &#x6846;&#x67B6;"></a>Towhee &#x6846;&#x67B6;</h1>
<p>&#x662F;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x5904;&#x7406;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x6570;&#x636E;&#x7684;&#x6846;&#x67B6;&#xFF0C;&#x5B83;&#x5229;&#x7528;&#x6700;&#x65B0;&#x7684;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x6765;&#x521B;&#x5EFA; ETL&#xFF08;&#x63D0;&#x53D6;&#x3001;&#x8F6C;&#x6362;&#x3001;&#x52A0;&#x8F7D;&#xFF09;&#x6D41;&#x6C34;&#x7EBF;&#x3002;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x6570;&#x636E;&#x662F;&#x6307;&#x65E0;&#x6CD5;&#x5B58;&#x50A8;&#x5728;&#x8868;&#x683C;&#x6216;&#x952E;&#x503C;&#x5BF9;&#x683C;&#x5F0F;&#x4E2D;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x5982;&#x56FE;&#x50CF;&#x3001;&#x89C6;&#x9891;&#x3001;&#x6587;&#x672C;&#x7B49;&#x3002;</p>
<h1 id="VGG &#x7F51;&#x7EDC;"><a href="#VGG &#x7F51;&#x7EDC;"></a>VGG &#x7F51;&#x7EDC;</h1>
<p>&#x89C6;&#x89C9;&#x51E0;&#x4F55;&#x7EC4;&#xFF08;Visual Geometry Group&#xFF09;&#x6240;&#x5F00;&#x53D1;&#xFF0C;VGG&#x7F51;&#x7EDC;&#x4F7F;&#x5F97;&#x7F51;&#x7EDC;&#x8BBE;&#x8BA1;&#x7684;&#x7406;&#x5FF5;&#x53D1;&#x751F;&#x4E86;&#x91CD;&#x8981;&#x8F6C;&#x53D8;&#xFF0C;&#x5373;&#x901A;&#x8FC7;&#x91CD;&#x590D;&#x4F7F;&#x7528;&#x7B80;&#x5355;&#x7684;&#x5C42;&#x7ED3;&#x6784;&#xFF08;3x3&#x5377;&#x79EF;&#x6838;&#x548C;2x2&#x6C60;&#x5316;&#x5C42;&#xFF09;&#x5E76;&#x6DF1;&#x5316;&#x7F51;&#x7EDC;&#x7ED3;&#x6784;&#xFF0C;&#x6765;&#x63D0;&#x9AD8;&#x6027;&#x80FD;&#x3002;VGG&#x7F51;&#x7EDC;&#x540C;&#x65F6;&#x8FD8;&#x8BC1;&#x5B9E;&#x4E86;&#x6DF1;&#x5EA6;&#x662F;&#x5B9E;&#x73B0;&#x4F18;&#x79C0;&#x6027;&#x80FD;&#x7684;&#x5173;&#x952E;&#x56E0;&#x7D20;&#x4E4B;&#x4E00;&#x3002;</p>
<h1 id="&#x611F;&#x77E5;&#x635F;&#x5931;&#xFF08;perceptual loss&#xFF09;"><a href="#&#x611F;&#x77E5;&#x635F;&#x5931;&#xFF08;perceptual loss&#xFF09;"></a>&#x611F;&#x77E5;&#x635F;&#x5931;&#xFF08;perceptual loss&#xFF09;</h1>
<p>&#x4E5F;&#x79F0;&#x4E3A;&#x5185;&#x5BB9;&#x635F;&#x5931;&#xFF08;content loss&#xFF09;&#xFF0C;&#x662F;&#x4E00;&#x79CD;&#x5728;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7279;&#x522B;&#x662F;&#x5728;&#x89C6;&#x89C9;&#x76F8;&#x5173;&#x4EFB;&#x52A1;&#x4E2D;&#x4F7F;&#x7528;&#x7684;&#x635F;&#x5931;&#x51FD;&#x6570;&#x3002;&#x5B83;&#x4E0D;&#x540C;&#x4E8E;&#x4F20;&#x7EDF;&#x7684;&#x50CF;&#x7D20;&#x7EA7;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF08;&#x4F8B;&#x5982;L1&#x635F;&#x5931;&#x548C;L2&#x635F;&#x5931;&#xFF09;&#xFF0C;&#x611F;&#x77E5;&#x635F;&#x5931;&#x66F4;&#x6CE8;&#x91CD;&#x4E8E;&#x56FE;&#x50CF;&#x5185;&#x5BB9;&#x7684;&#x611F;&#x77E5;&#x76F8;&#x4F3C;&#x6027;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x50CF;&#x7D20;&#x503C;&#x7684;&#x76F8;&#x4F3C;&#x6027;&#x3002;</p>
<ul>
<li>
<p>&#x4F8B;&#x5B50;:&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6B63;&#x5728;&#x8FDB;&#x884C;&#x4E00;&#x4E2A;&#x56FE;&#x50CF;&#x98CE;&#x683C;&#x8FC1;&#x79FB;&#x4EFB;&#x52A1;&#xFF0C;&#x5176;&#x4E2D;&#x76EE;&#x6807;&#x662F;&#x5C06;&#x4E00;&#x5E45;&#x56FE;&#x50CF;&#x7684;&#x98CE;&#x683C;&#xFF08;&#x5982;&#x68B5;&#x9AD8;&#x7684;&#x753B;&#x98CE;&#xFF09;&#x8FC1;&#x79FB;&#x5230;&#x53E6;&#x4E00;&#x5E45;&#x56FE;&#x50CF;&#x4E0A;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x56FE;&#x50CF;&#x7684;&#x5185;&#x5BB9;&#x3002;&#x7406;&#x60F3;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x751F;&#x6210;&#x7684;&#x56FE;&#x50CF;&#x5E94;&#x8BE5;&#x5728;&#x89C6;&#x89C9;&#x4E0A;&#x770B;&#x8D77;&#x6765;&#x8981;&#x6709;&#x68B5;&#x9AD8;&#x7B14;&#x89E6;&#x98CE;&#x683C;&#x7684;&#x989C;&#x8272;&#x548C;&#x7EB9;&#x7406;&#xFF0C;&#x4F46;&#x540C;&#x65F6;&#x80FD;&#x8BC6;&#x522B;&#x51FA;&#x539F;&#x56FE;&#x7684;&#x5185;&#x5BB9;&#xFF08;&#x5982;&#x57CE;&#x5E02;&#x7684;&#x8F6E;&#x5ED3;&#x3001;&#x5929;&#x7A7A;&#x7684;&#x4F4D;&#x7F6E;&#x7B49;&#xFF09;&#x3002;
&#x5728;&#x8FD9;&#x4E2A;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x4F7F;&#x7528;&#x50CF;&#x7D20;&#x7EA7;&#x635F;&#x5931;&#xFF0C;&#x90A3;&#x4E48;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4F1A;&#x975E;&#x5E38;&#x6CE8;&#x91CD;&#x786E;&#x4FDD;&#x751F;&#x6210;&#x56FE;&#x50CF;&#x5728;&#x50CF;&#x7D20;&#x5C42;&#x9762;&#x4E0E;&#x539F;&#x56FE;&#x5C3D;&#x53EF;&#x80FD;&#x63A5;&#x8FD1;&#xFF0C;&#x800C;&#x5FFD;&#x89C6;&#x4E86;&#x98CE;&#x683C;&#x4E0A;&#x7684;&#x8F6C;&#x53D8;&#x3002;&#x8FD9;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x98CE;&#x683C;&#x8FC1;&#x79FB;&#x6548;&#x679C;&#x4E0D;&#x660E;&#x663E;&#x3002;</p>
</li>
<li>
<p>&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#xFF1A;&#x5982;&#x679C;&#x4F7F;&#x7528;&#x611F;&#x77E5;&#x635F;&#x5931;&#x6765;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF0C;&#x6211;&#x4EEC;&#x4F1A;&#x9996;&#x5148;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x9884;&#x5148;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6DF1;&#x5EA6;CNN&#xFF08;&#x5982;VGG&#x7F51;&#x7EDC;&#xFF09;&#x4F20;&#x9012;&#x539F;&#x56FE;&#x548C;&#x751F;&#x6210;&#x56FE;&#xFF0C;&#x7136;&#x540E;&#x8BA1;&#x7B97;&#x8FD9;&#x4E24;&#x5E45;&#x56FE;&#x5728;&#x67D0;&#x4E9B;&#x5185;&#x90E8;&#x5C42;&#x6FC0;&#x6D3B;&#x503C;&#x7684;&#x5DEE;&#x5F02;&#x3002;&#x8FD9;&#x4E9B;&#x5C42;&#x7684;&#x6FC0;&#x6D3B;&#x503C;&#x4EE3;&#x8868;&#x4E86;&#x56FE;&#x50CF;&#x7684;&#x9AD8;&#x7EA7;&#x7279;&#x5F81;&#xFF0C;&#x6240;&#x4EE5;&#x8FD9;&#x79CD;&#x5DEE;&#x5F02;&#x53CD;&#x6620;&#x4E86;&#x5B83;&#x4EEC;&#x5728;&#x5185;&#x5BB9;&#x548C;&#x611F;&#x77E5;&#x4E0A;&#x7684;&#x76F8;&#x4F3C;&#x5EA6;&#x3002;&#x6700;&#x5C0F;&#x5316;&#x8FD9;&#x79CD;&#x5DEE;&#x5F02;&#x53EF;&#x4EE5;&#x9F13;&#x52B1;&#x751F;&#x6210;&#x7684;&#x56FE;&#x50CF;&#x5728;&#x89C6;&#x89C9;&#x611F;&#x77E5;&#x5C42;&#x9762;&#x4E0A;&#x66F4;&#x8D34;&#x8FD1;&#x539F;&#x56FE;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x540C;&#x65F6;&#x4E5F;&#x6709;&#x76EE;&#x6807;&#x98CE;&#x683C;&#x7684;&#x7279;&#x8D28;&#x3002;</p>
</li>
<li>
<p>&#x9002;&#x7528;&#x4EFB;&#x52A1;&#xFF1A;&#x98CE;&#x683C;&#x8FC1;&#x79FB;&#x3001;&#x8D85;&#x5206;&#x8FA8;&#x7387;&#x548C;&#x56FE;&#x50CF;&#x5408;&#x6210;&#x7B49;&#x3002;</p>
</li>
</ul>
<p>&#x95EE;&#x9898;&#xFF1A;&#x54EA;&#x4E00;&#x56FE;&#x5C42;&#x662F;&#x63D0;&#x53D6;&#x7684;&#x98CE;&#x683C;&#x4FE1;&#x606F;&#xFF1F;</p>
<blockquote>
<blockquote>
<p>&#x5728;CNN&#x4E2D;&#xFF0C;&#x968F;&#x7740;&#x5C42;&#x7EA7;&#x7684;&#x52A0;&#x6DF1;&#xFF1A;</p>
</blockquote>
</blockquote>
<ul>
<li>&#x521D;&#x59CB;&#x5C42;&#x4E3B;&#x8981;&#x6355;&#x6349;&#x57FA;&#x7840;&#x4FE1;&#x606F;&#xFF0C;&#x5982;&#x8FB9;&#x7F18;&#x548C;&#x989C;&#x8272;&#x3002;&#x8FD9;&#x4E9B;&#x5C42;&#x5BF9;&#x56FE;&#x7247;&#x7EC6;&#x8282;&#x7684;&#x54CD;&#x5E94;&#x5F88;&#x654F;&#x611F;&#xFF0C;&#x4F46;&#x5E76;&#x4E0D;&#x6355;&#x6349;&#x5177;&#x4F53;&#x7684;&#x98CE;&#x683C;&#x4FE1;&#x606F;&#x3002;</li>
<li>&#x4E2D;&#x95F4;&#x5C42;&#x6355;&#x6349;&#x66F4;&#x590D;&#x6742;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x5982;&#x7EB9;&#x7406;&#x548C;&#x56FE;&#x6848;&#xFF0C;&#x8FD9;&#x4E9B;&#x6B63;&#x662F;&#x6784;&#x6210;&#x56FE;&#x50CF;&#x98CE;&#x683C;&#x7684;&#x8981;&#x7D20;&#x3002;</li>
<li>&#x6DF1;&#x5C42;&#x5219;&#x8868;&#x793A;&#x66F4;&#x9AD8;&#x7EA7;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F8B;&#x5982;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x5BF9;&#x8C61;&#x548C;&#x6574;&#x4F53;&#x5E03;&#x5C40;&#x3002;</li>
</ul>
<h1 id="stable diffusion"><a href="#stable diffusion"></a><a href="https://zhuanlan.zhihu.com/p/632809634">stable diffusion</a></h1>
<ul>
<li>stable diffusion &#x662F;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x6A21;&#x578B;
<ul>
<li>&#x76EE;&#x6807;&#xFF1A;&#x7528;&#x964D;&#x566A;&#x7F51;&#x7EDC;&#x751F;&#x6210;&#x6E05;&#x6670;&#x7684;&#x56FE;&#x50CF;&#xFF08;&#x52A0;&#x566A;&#x662F;&#x8F85;&#x52A9;&#x8BAD;&#x7EC3;&#x964D;&#x566A;&#xFF09;</li>
<li>&#x7C7B;&#x6BD4;&#xFF1A;&#x7C7B;&#x4F3C; GAN &#x6A21;&#x578B;&#xFF0C;&#x53EA;&#x4E0D;&#x8FC7; GAN &#x662F;&#x4E2A;&#x6B65;&#x9AA4;&#x7684;&#x5BF9;&#x6297;&#x8BAD;&#x7EC3;&#xFF0C;&#x800C; SD &#x662F;&#x4E00;&#x4E2A;&#x591A;&#x6B65;&#x9AA4;</li>
<li>&#x65B9;&#x6CD5;
<ul>
<li>&#x52A0;&#x566A;&#x8FC7;&#x7A0B;&#xFF08;&#x524D;&#x5411;&#x8FC7;&#x7A0B;&#xFF09;&#x662F;&#x4E00;&#x4E2A;&#x9A6C;&#x5C14;&#x53EF;&#x592B;&#x94FE;&#xFF0C;&#x5B83;&#x9010;&#x6B65;&#x5C06;&#x968F;&#x673A;&#x566A;&#x58F0;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x636E;&#x4E2D;&#xFF0C;&#x76F4;&#x5230;&#x6570;&#x636E;&#x53D8;&#x6210;&#x7EAF;&#x566A;&#x58F0;&#x3002;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x662F;&#x53EF;&#x63A7;&#x7684;&#xFF0C;&#x56E0;&#x4E3A;&#x6211;&#x4EEC;&#x77E5;&#x9053;&#x6BCF;&#x4E00;&#x6B65;&#x52A0;&#x5165;&#x7684;&#x566A;&#x58F0;&#x91CF;&#x3002;&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5728;&#x4EFB;&#x4F55;&#x7ED9;&#x5B9A;&#x7684;&#x65F6;&#x95F4;&#x6B65;&#x9AA4;&#x9884;&#x6D4B;&#x566A;&#x58F0;&#x7684;&#x5206;&#x5E03;&#x3002;</li>
<li>&#x964D;&#x566A;&#x8FC7;&#x7A0B;&#xFF08;&#x9006;&#x5411;&#x8FC7;&#x7A0B;&#xFF09;&#x4E2D;&#xFF0C;&#x6A21;&#x578B;&#x4F7F;&#x7528;&#x5728;&#x52A0;&#x566A;&#x8FC7;&#x7A0B;&#x4E2D;&#x5B66;&#x5230;&#x7684;&#x77E5;&#x8BC6;&#x6765;&#x9884;&#x6D4B;&#x566A;&#x58F0;&#xFF0C;&#x5E76;&#x4ECE;&#x566A;&#x58F0;&#x6570;&#x636E;&#x4E2D;&#x53BB;&#x9664;&#x8FD9;&#x4E9B;&#x566A;&#x58F0;&#xFF0C;&#x9010;&#x6B65;&#x6062;&#x590D;&#x51FA;&#x6E05;&#x6670;&#x7684;&#x6570;&#x636E;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x52A0;&#x566A;&#x8FC7;&#x7A0B;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x6CA1;&#x6709;&#x673A;&#x4F1A;&#x5B66;&#x4E60;&#x8FD9;&#x4E9B;&#x566A;&#x58F0;&#x5206;&#x5E03;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x4E5F;&#x5C31;&#x65E0;&#x6CD5;&#x6709;&#x6548;&#x5730;&#x8FDB;&#x884C;&#x964D;&#x566A;&#x548C;&#x6570;&#x636E;&#x91CD;&#x5EFA;</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>&#x7591;&#x95EE;
* SD &#x4E2D;&#x5C06;&#x52A0;&#x566A;&#x56FE;&#x7247;&#x8F93;&#x5165;U-Net&#x4E2D;&#x9884;&#x6D4B;&#x566A;&#x58F0;&#x5982;&#x4F55;&#x7406;&#x89E3;&#xFF1F;
* &quot;&#x9884;&#x6D4B;&#x566A;&#x58F0;&quot;&#x662F;&#x6269;&#x6563;&#x6A21;&#x578B;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x5B83;&#x6D89;&#x53CA;&#x5230;&#x5C06;&#x56FE;&#x50CF;&#x4ECE;&#x542B;&#x6709;&#x566A;&#x58F0;&#x7684;&#x72B6;&#x6001;&#x9010;&#x6B65;&#x6062;&#x590D;&#x5230;&#x6E05;&#x6670;&#x7684;&#x72B6;&#x6001;&#x3002;SD&#x6A21;&#x578B;&#x9996;&#x5148;&#x5C06;&#x4E00;&#x5F20;&#x5B8C;&#x5168;&#x968F;&#x673A;&#x7684;&#x566A;&#x58F0;&#x56FE;&#x50CF;&#xFF08;&#x6216;&#x8005;&#x662F;&#x7ECF;&#x8FC7;&#x4E00;&#x7CFB;&#x5217;&#x566A;&#x58F0;&#x6DFB;&#x52A0;&#x6B65;&#x9AA4;&#x540E;&#x7684;&#x56FE;&#x50CF;&#xFF09;&#x8F93;&#x5165;&#x5230;U-Net&#x4E2D;&#x3002;U-Net&#x7684;&#x76EE;&#x6807;&#x662F;&#x9884;&#x6D4B;&#x8FD9;&#x5F20;&#x566A;&#x58F0;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x539F;&#x59CB;&#x566A;&#x58F0;&#x6210;&#x5206;&#x3002;&#x4E00;&#x65E6;&#x9884;&#x6D4B;&#x51FA;&#x8FD9;&#x4E9B;&#x566A;&#x58F0;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x53EF;&#x4EE5;&#x4ECE;&#x566A;&#x58F0;&#x56FE;&#x50CF;&#x4E2D;&#x53BB;&#x9664;&#x5B83;&#x4EEC;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x56FE;&#x50CF;&#x9010;&#x6E10;&#x53D8;&#x5F97;&#x66F4;&#x6E05;&#x6670;&#x3002;
* &#x964D;&#x566A;&#x8FC7;&#x7A0B;&#x4E2D;&#x7684;&#x9884;&#x6D4B;&#x566A;&#x58F0;&#x8DDF;&#x5B9E;&#x9645;&#x566A;&#x58F0;&#x7684;&#x5BF9;&#x6BD4;&#xFF0C;&#x8FD9;&#x91CC;&#x7684;&#x5B9E;&#x9645;&#x566A;&#x58F0;&#x662F;&#x4ECE;&#x52A0;&#x566A;&#x4E2D;&#x5F97;&#x5230;&#x7684;&#x4E48;&#xFF1F;
* &#x4EC0;&#x4E48;&#x662F;&#x566A;&#x58F0;&#x5206;&#x5E03;&#x4FE1;&#x606F;&#xFF1F;
* &#x566A;&#x58F0;&#x7C7B;&#x578B;&#xFF08;&#x9AD8;&#x65AF;&#x566A;&#x58F0;&#x7B49;&#xFF09;&#xFF0C;&#x566A;&#x58F0;&#x53C2;&#x6570;&#xFF08;&#x5747;&#x503C;&#x65B9;&#x5DEE;&#xFF09;&#xFF0C;&#x65F6;&#x95F4;&#x4F9D;&#x8D56;&#x9879;&#xFF08;&#x566A;&#x58F0;&#x7684;&#x91CF;&#x548C;&#x6027;&#x8D28;&#x4F1A;&#x968F;&#x7740;&#x65F6;&#x95F4;&#x6B65;&#x9AA4;&#x7684;&#x63A8;&#x8FDB;&#x800C;&#x6539;&#x53D8;&#xFF09;</p>
<h1 id="&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x53EF;&#x89E3;&#x91CA;&#x6027;"><a href="#&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x53EF;&#x89E3;&#x91CA;&#x6027;"></a><a href="https://zhuanlan.zhihu.com/p/479485138">&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x53EF;&#x89E3;&#x91CA;&#x6027;</a></h1>
<h1 id="&#x589E;&#x91CF;&#x5B66;&#x4E60;"><a href="#&#x589E;&#x91CF;&#x5B66;&#x4E60;"></a>&#x589E;&#x91CF;&#x5B66;&#x4E60;</h1>
<p>&#x7406;&#x8BBA;&#xFF1A;&#x589E;&#x91CF;&#x5B66;&#x4E60;&#x7684;&#x6838;&#x5FC3;&#x5728;&#x4E8E;&#x6A21;&#x578B;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x4E0D;&#x65AD;&#x5B66;&#x4E60;&#x65B0;&#x6570;&#x636E;&#x6765;&#x63D0;&#x5347;&#x81EA;&#x8EAB;&#x7684;&#x6027;&#x80FD;&#xFF0C;&#x5373;&#x4F7F;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#x662F;&#x7531;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x5DF2;&#x7ECF;&#x51C6;&#x786E;&#x8BC6;&#x522B;&#x8FC7;&#x7684;&#x3002;&#x6E90;&#x4E8E;&#x4EBA;&#x7C7B;&#x7684;&#x7EC8;&#x8EAB;&#x5B66;&#x4E60;&#x80FD;&#x529B;&#xFF0C;&#x5373;&#x4E0D;&#x65AD;&#x83B7;&#x53D6;&#x3001;&#x8C03;&#x6574;&#x548C;&#x8F6C;&#x79FB;&#x77E5;&#x8BC6;&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x540C;&#x65F6;&#x907F;&#x514D;&#x707E;&#x96BE;&#x6027;&#x9057;&#x5FD8;&#x2014;&#x2014;&#x5373;&#x65B0;&#x77E5;&#x8BC6;&#x7684;&#x5B66;&#x4E60;&#x5BF9;&#x65E7;&#x77E5;&#x8BC6;&#x9020;&#x6210;&#x7684;&#x5E72;&#x6270;&#x3002;</p>
<p>&#x601D;&#x8003;&#xFF1A;&#x610F;&#x5473;&#x7740;&#x6A21;&#x578B;&#x8BC6;&#x522B;&#x51C6;&#x786E;&#x7684;&#x65B0;&#x6570;&#x636E;&#x518D;&#x6765;&#x6295;&#x5582;&#x7ED9;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x8BAD;&#x7EC3;&#x4E5F;&#x80FD;&#x63D0;&#x5347;&#x6A21;&#x578B;&#x51C6;&#x786E;&#x7387;&#xFF1F;</p>
<h1 id="data-centric AI"><a href="#data-centric AI"></a>data-centric AI</h1>
<p>Data-centric AI is the discipline of systematically engineering the data used to build an AI system. &#x2014; Andrew Ng</p>
<ul>
<li><a href="https://www.zhihu.com/question/521096166">SAM  data-centric AI</a></li>
</ul>
<h1 id="&#x6838;&#x51FD;&#x6570;"><a href="#&#x6838;&#x51FD;&#x6570;"></a>&#x6838;&#x51FD;&#x6570;</h1>
<p>kernel function or kernel trick</p>
<ul>
<li>
<p>&#x6982;&#x5FF5;&#xFF1A;&#x5C06;&#x539F;&#x59CB;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x5411;&#x91CF;&#x4F5C;&#x4E3A;&#x8F93;&#x5165;&#x5411;&#x91CF;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x7279;&#x5F81;&#x7A7A;&#x95F4;&#xFF08;&#x8F6C;&#x6362;&#x540E;&#x7684;&#x6570;&#x636E;&#x7A7A;&#x95F4;,&#x53EF;&#x80FD;&#x662F;&#x9AD8;&#x7EF4;&#xFF09;&#x4E2D;&#x5411;&#x91CF;&#x7684;&#x70B9;&#x79EF;&#x7684;&#x51FD;&#x6570;&#x79F0;&#x4E3A;&#x6838;&#x51FD;&#x6570;&#x3002;</p>
<ul>
<li>&#x7B80;&#x5355;&#x7406;&#x89E3;&#xFF1A;&#x4E00;&#x79CD;&#x4FBF;&#x6377;&#x7684;&#x8BA1;&#x7B97;&#x5728;&#x9AD8;&#x7EF4;&#x7A7A;&#x95F4;&#x91CC;&#x7684;&#x5185;&#x79EF;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x9AD8;&#x7EF4;&#x7A7A;&#x95F4;&#x7684;&#x6570;&#x636E;&#x8BA1;&#x7B97;&#x5B58;&#x5728;&#x56F0;&#x96BE;&#x3002;&#x6240;&#x4EE5;&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x662F;&#x5728;&#x7279;&#x5F81;&#x7A7A;&#x95F4;&#x4E2D;&#x8BA1;&#x7B97;&#x76F8;&#x4F3C;&#x5EA6;&#x5EA6;&#x91CF;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BA1;&#x7B97;&#x5411;&#x91CF;&#x7684;&#x5750;&#x6807;&#xFF0C;&#x7136;&#x540E;&#x5E94;&#x7528;&#x53EA;&#x9700;&#x8981;&#x8BE5;&#x5EA6;&#x91CF;&#x503C;&#x7684;&#x7B97;&#x6CD5;&#x3002;&#x7528;&#x70B9;&#x79EF;(dot product)&#x8868;&#x793A;&#x76F8;&#x4F3C;&#x6027;&#x5EA6;&#x91CF;&#x3002;</li>
</ul>
</li>
<li>
<p>&#x6B67;&#x4E49;&#xFF1A;&#x628A;&#x6570;&#x636E;&#x4ECE;&#x4F4E;&#x7EF4;&#x6620;&#x5C04;&#x5230;&#x9AD8;&#x7EF4;&#x7684;&#x662F;&#x6620;&#x5C04;&#x51FD;&#x6570;&#x800C;&#x4E0D;&#x662F;&#x6838;&#x51FD;&#x6570;</p>
</li>
<li>
<p><a href="https://www.zhihu.com/question/24627666/answer/28440943">&#x5E26;&#x4F8B;&#x5B50;&#x7684;&#x6838;&#x51FD;&#x6570;&#x89E3;&#x91CA;</a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/mengjizhiyou/article/details/103437423">&#x6838;&#x51FD;&#x6570;&#x6982;&#x5FF5;</a></p>
</li>
</ul>
<h1 id="&#x5D4C;&#x5165;&#x5C42;"><a href="#&#x5D4C;&#x5165;&#x5C42;"></a>&#x5D4C;&#x5165;&#x5C42;</h1>
<p>&#x5D4C;&#x5165;&#x5C42;&#x662F;&#x4E00;&#x79CD;&#x5C06;&#x79BB;&#x6563;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x8FDE;&#x7EED;&#x5411;&#x91CF;&#x7684;&#x6280;&#x672F;&#xFF1B;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;torch.nn.Embedding(10, 5) &#x5C06;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5D4C;&#x5165;&#x5C42;&#xFF0C;&#x8BE5;&#x5C42;&#x53EF;&#x4EE5;&#x5C06;&#x79BB;&#x6563;&#x503C;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;[1,&apos;a&apos;,&apos;&#x4F60;&#x597D;&apos;]&#xFF09;&#x6620;&#x5C04;&#x5230;&#x8FDE;&#x7EED;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#x4E2D;&#x7684; 5 &#x7EF4;&#x5411;&#x91CF;&#x3002;</p>
<ul>
<li>&#x5982;&#x4F55;&#x7406;&#x89E3;&#x8FD9;&#x91CC;&#x7684;&#x79BB;&#x6563;&#x8DDF;&#x8FDE;&#x7EED;&#x5462;&#xFF1F;
<ul>
<li>&#x5411;&#x91CF;&#x91CC;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x662F;&#x5426;&#x8FDE;&#x7EED;&#xFF0C;&#x51B3;&#x5B9A;&#x4E86;&#x5411;&#x91CF;&#x672C;&#x8EAB;&#x662F;&#x8FDE;&#x7EED;&#x7684;&#x8FD8;&#x662F;&#x79BB;&#x6563;&#x7684;&#x3002;&#x4F8B;&#x5982;&#xFF1A;[0.2,0.3,0.5] &#x662F;&#x4E00;&#x4E2A;&#x8FDE;&#x7EED;&#x5411;&#x91CF;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x662F;&#x5B9E;&#x6570;&#xFF0C;&#x800C;&#x5B9E;&#x6570;&#x662F;&#x8FDE;&#x7EED;&#x7684;&#x3002; &#x8FD9;&#x6837;&#x7684;&#x5411;&#x91CF;&#x53EF;&#x4EE5;&#x8FDB;&#x884C;&#x8FDE;&#x7EED;&#x7684;&#x8FD0;&#x7B97;&#x548C;&#x6BD4;&#x8F83;&#xFF0C;&#x6BD4;&#x5982;&#x6C42;&#x548C;&#xFF0C;&#x6C42;&#x5DEE;&#xFF0C;&#x6C42;&#x70B9;&#x79EF;&#xFF0C;&#x6C42;&#x6A21;&#x957F;&#x7B49;&#x3002;</li>
<li>&#x800C;&#x79BB;&#x6563;&#x662F;&#x6307;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x4E0D;&#x662F;&#x8FDE;&#x7EED;&#x7684;&#x3002;&#x4F8B;&#x5982;&#xFF0C;[1,&#x2018;a&#x2019;,&#x2018;&#x4F60;&#x597D;&#x2019;]&#x662F;&#x4E00;&#x4E2A;&#x79BB;&#x6563;&#x5411;&#x91CF;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x90FD;&#x662F;&#x79BB;&#x6563;&#x7684;&#xFF0C;&#x800C;&#x4E14;&#x4E0D;&#x80FD;&#x8FDB;&#x884C;&#x8FDE;&#x7EED;&#x7684;&#x8FD0;&#x7B97;&#x548C;&#x6BD4;&#x8F83;&#x3002;&#x4E2D;&#x7684;1&#x4E0D;&#x53EF;&#x80FD;&#x662F;&#x2019;a&#x2019;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x5C5E;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x5B9A;&#x4E49;&#x5B83;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#x3002;</li>
</ul>
</li>
</ul>
<h1 id="&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E0E;&#x82F1;&#x8BED;&#x5B66;&#x4E60;"><a href="#&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E0E;&#x82F1;&#x8BED;&#x5B66;&#x4E60;"></a>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E0E;&#x82F1;&#x8BED;&#x5B66;&#x4E60;</h1>
<ul>
<li>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x7684;&#x5185;&#x5BB9;&#x8F93;&#x51FA;&#x53EF;&#x4EE5;&#x7C7B;&#x6BD4;&#x4E3A;&#x901A;&#x8FC7;&#x6C89;&#x6D78;&#x5F0F;&#x5B66;&#x4E60;&#x82F1;&#x8BED;&#x540E;&#x80FD;&#x591F;&#x8BF4;&#x51FA;&#x82F1;&#x8BED;&#xFF0C;&#x5176;&#x4E2D;&#x53E6;&#x4E00;&#x79CD;&#x65B9;&#x5F0F;&#x662F;&#x901A;&#x8FC7;&#x5148;&#x5B66;&#x4E60;&#x8BCD;&#x6CD5;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#x3002;&#x5728;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E2D;&#xFF0C;&#x6A21;&#x578B;&#x901A;&#x8FC7;&#x5927;&#x91CF;&#x7684;&#x6570;&#x636E;&#x8F93;&#x5165;&#xFF08;&#x6570;&#x636E;&#x6295;&#x5582;&#xFF09;&#x6765;&#x7406;&#x89E3;&#x5176;&#x4E2D;&#x7684;&#x6F5C;&#x5728;&#x89C4;&#x5F8B;&#x548C;&#x7279;&#x5F81;&#x3002;&#x7C7B;&#x4F3C;&#x5730;&#xFF0C;&#x901A;&#x8FC7;&#x6C89;&#x6D78;&#x5F0F;&#x5B66;&#x4E60;&#x82F1;&#x8BED;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728;&#x5927;&#x91CF;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x4E2D;&#x611F;&#x77E5;&#x548C;&#x7406;&#x89E3;&#x82F1;&#x8BED;&#x7684;&#x6F5C;&#x5728;&#x89C4;&#x5F8B;&#x548C;&#x7279;&#x5F81;&#xFF0C;&#x4ECE;&#x800C;&#x80FD;&#x591F;&#x6D41;&#x5229;&#x5730;&#x8BF4;&#x51FA;&#x82F1;&#x8BED;&#x3002;</li>
<li>&#x65E9;&#x671F;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#xFF08;&#x901A;&#x8FC7;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x8FDB;&#x884C;&#x5224;&#x65AD;&#x7136;&#x540E;&#x505A;&#x8F93;&#x51FA;&#xFF09;&#x4E0E;&#x5148;&#x5B66;&#x4E60;&#x8BCD;&#x6CD5;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#x7684;&#x65B9;&#x6CD5;&#x4E0E;&#x76F8;&#x4F3C;&#x3002;&#x65E9;&#x671F;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x7CFB;&#x7EDF;&#x901A;&#x5E38;&#x4F7F;&#x7528;&#x9884;&#x5B9A;&#x4E49;&#x7684;&#x89C4;&#x5219;&#x548C;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x6765;&#x5904;&#x7406;&#x8F93;&#x5165;&#x5E76;&#x751F;&#x6210;&#x8F93;&#x51FA;&#x3002;&#x8FD9;&#x4E9B;&#x89C4;&#x5219;&#x548C;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x57FA;&#x4E8E;&#x8BCD;&#x6CD5;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#xFF0C;&#x7528;&#x4E8E;&#x5904;&#x7406;&#x7279;&#x5B9A;&#x7684;&#x8F93;&#x5165;&#x60C5;&#x51B5;&#x3002;&#x7C7B;&#x4F3C;&#x5730;&#xFF0C;&#x901A;&#x8FC7;&#x5148;&#x5B66;&#x4E60;&#x8BCD;&#x6CD5;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5728;&#x8BED;&#x8A00;&#x5B66;&#x4E60;&#x4E2D;&#x638C;&#x63E1;&#x8BCD;&#x6C47;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x5B83;&#x4EEC;&#x6765;&#x7406;&#x89E3;&#x548C;&#x751F;&#x6210;&#x8BED;&#x8A00;&#x3002;</li>
</ul>
<p>&#x4E24;&#x79CD;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x533A;&#x522B;&#xFF1A;&#x901A;&#x8FC7;&#x5148;&#x9884;&#x5B9A;&#x4E49;&#x7684;&#x89C4;&#x5219;&#x548C;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x7684;&#x65B9;&#x6CD5;&#x5728;&#x4E00;&#x4E9B;&#x7279;&#x5B9A;&#x573A;&#x666F;&#x4E0B;&#x5177;&#x6709;<strong>&#x7CBE;&#x786E;&#x6027;&#x548C;&#x53EF;&#x89E3;&#x91CA;&#x6027;</strong>&#x7684;&#x4F18;&#x52BF;&#xFF0C;&#x800C;&#x901A;&#x8FC7;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4ECE;&#x6570;&#x636E;&#x4E2D;&#x5B66;&#x4E60;&#x7684;&#x65B9;&#x6CD5;&#x5219;<strong>&#x66F4;&#x52A0;&#x7075;&#x6D3B;&#x3001;&#x9002;&#x5E94;&#x6027;&#x5F3A;&#xFF0C;&#x5E76;&#x80FD;&#x591F;&#x5904;&#x7406;&#x590D;&#x6742;&#x60C5;&#x51B5;</strong>&#x3002;</p>
<p>&#x4E24;&#x79CD;&#x82F1;&#x8BED;&#x5B66;&#x4E60;&#x533A;&#x522B;&#xFF1A;&#x901A;&#x8FC7;&#x5148;&#x5B66;&#x4E60;&#x8BCD;&#x6CD5;&#x548C;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#x6765;&#x5B66;&#x4E60;&#x82F1;&#x8BED;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;<strong>&#x7ED3;&#x6784;&#x5316;&#x5B66;&#x4E60;&#x548C;&#x51C6;&#x786E;&#x6027;</strong>&#xFF0C;&#x4F46;<strong>&#x7F3A;&#x4E4F;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#xFF0C;&#x8BED;&#x611F;&#x6B20;&#x7F3A;&#xFF0C;&#x5B66;&#x4E60;&#x7E41;&#x7410;</strong>&#xFF0C;&#x800C;&#x6C89;&#x6D78;&#x5F0F;&#x5B66;&#x4E60;&#x82F1;&#x8BED;&#x5219;&#x66F4;&#x52A0;&#x8D34;&#x8FD1;<strong>&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x3001;&#x6CE8;&#x91CD;&#x6D41;&#x5229;&#x6027;&#x548C;&#x6587;&#x5316;&#x878D;&#x5408;</strong>&#xFF0C;&#x4F46;<strong>&#x9700;&#x8981;&#x73AF;&#x5883;&#x652F;&#x6301;&#xFF0C;&#x521D;&#x59CB;&#x56F0;&#x96BE;</strong>&#x3002;</p>
<p>&#x601D;&#x8003;&#xFF1A;&#x610F;&#x5473;&#x7740;&#x521D;&#x59CB;&#x7684;&#x65F6;&#x5019;&#x5148;&#x4E86;&#x89E3;&#x57FA;&#x672C;&#x8BED;&#x6CD5;&#xFF0C;&#x540E;&#x7EED;&#x4E0D;&#x65AD;&#x53BB;&#x8BFB;&#x5404;&#x79CD;&#x7CBE;&#x9009;&#x6587;&#x7AE0;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x7814;&#x7A76;&#x66F4;&#x6DF1;&#x7684;&#x8BED;&#x6CD5;&#x89C4;&#x5219;&#xFF09;&#x624D;&#x662F;&#x82F1;&#x6587;&#x5B66;&#x4E60;&#x7684;&#x6700;&#x4F73;&#x8DEF;&#x7EBF;&#xFF1F;&#x800C;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x6CA1;&#x6709;&#x521D;&#x59CB;&#x5316;&#x70E6;&#x607C;&#xFF0C;&#x6240;&#x4EE5;&#x76F4;&#x63A5;&#x53BB;&#x5B66;&#x6D77;&#x91CF;&#x6570;&#x636E;&#x5C31;&#x597D;&#xFF1F;</p>
<h1 id="GAN&#xFF0C;VAE&#xFF0C;Diffusion &#x751F;&#x6210;&#x6A21;&#x578B;&#x7406;&#x89E3;"><a href="#GAN&#xFF0C;VAE&#xFF0C;Diffusion &#x751F;&#x6210;&#x6A21;&#x578B;&#x7406;&#x89E3;"></a>GAN&#xFF0C;VAE&#xFF0C;Diffusion &#x751F;&#x6210;&#x6A21;&#x578B;&#x7406;&#x89E3;</h1>
<h2 id="&#x6F5C;&#x7A7A;&#x95F4;"><a href="#&#x6F5C;&#x7A7A;&#x95F4;"></a>&#x6F5C;&#x7A7A;&#x95F4;</h2>
<ul>
<li>GAN &#x662F;&#x5148;&#x968F;&#x673A;&#x4E00;&#x4E2A;&#x7B26;&#x5408;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4F5C;&#x4E3A;Generator&#x8F93;&#x5165;&#x751F;&#x6210;&#x56FE;&#x7247;&#xFF0C;&#x7136;&#x540E;&#x6295;&#x5582;&#x7ED9;Discriminate &#x4F5C;&#x4E3A;&#x8F93;&#x5165;&#x5224;&#x5B9A;&#x7136;&#x540E;&#x505A; &#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF1B;</li>
<li>VAE &#x662F;&#x901A;&#x8FC7;&#x8BAD;&#x7EC3; Encoder &#x5C06;&#x8F93;&#x5165;&#x6620;&#x5C04;&#x5230;&#x590D;&#x5408;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#xFF08;&#x5B9E;&#x9645;&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x5F97;&#x5230;&#x5747;&#x503C;&#x548C;&#x65B9;&#x5DEE;&#xFF09;&#x7684;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#xFF0C;&#x7136;&#x540E;&#x89E3;&#x7801;&#x5668;&#x901A;&#x8FC7;&#x5BF9;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x89E3;&#x7801;&#x5F97;&#x5230;&#x8F93;&#x51FA;&#xFF1B;&#x6570;&#x636E;&#x5148;&#x964D;&#x7EF4;&#x518D;&#x5347;&#x7EF4;
<ul>
<li>&#x5728; MNist &#x4E2D;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x53EF;&#x4EE5;&#x662F;20&#x7EF4;&#x957F;&#x5EA6;&#x7684;&#x5411;&#x91CF;&#xFF0C;&#x6765;&#x8868;&#x793A; 20 &#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5747;&#x503C;&#x548C;&#x65B9;&#x5DEE;&#x5206;&#x5E03;&#xFF0C;&#x6765;&#x4EE3;&#x8868; 20 &#x4E2A;&#x53EF;&#x80FD;&#x7684;&#x7279;&#x5F81;&#xFF1F;</li>
</ul>
</li>
<li>Diffusion&#x6A21;&#x578B;&#x548C;&#x5176;&#x4ED6;&#x751F;&#x6210;&#x6A21;&#x578B;&#x4E00;&#x6837;&#xFF0C;&#x5B9E;&#x73B0;&#x4ECE;&#x566A;&#x58F0;&#xFF08;&#x91C7;&#x6837;&#x81EA;&#x7B80;&#x5355;&#x7684;&#x5206;&#x5E03;&#xFF09;&#x751F;&#x6210;&#x76EE;&#x6807;&#x6570;&#x636E;&#x6837;&#x672C;&#x3002;
<ul>
<li>&#x6838;&#x5FC3;&#x539F;&#x7406;&#x662F;&#x901A;&#x8FC7;&#x4E00;&#x4E2A;&#x968F;&#x673A;&#x7684;&#x524D;&#x5411;&#x8FC7;&#x7A0B;&#xFF08;Forward Process&#xFF09;&#x548C;&#x4E00;&#x4E2A;&#x53BB;&#x566A;&#x7684;&#x9006;&#x5411;&#x8FC7;&#x7A0B;&#xFF08;Reverse Process&#xFF09;&#x6765;&#x5B9E;&#x73B0;&#x4ECE;&#x566A;&#x58F0;&#xFF08;Noise&#xFF09;&#x5230;&#x76EE;&#x6807;&#x6570;&#x636E;&#x6837;&#x672C;&#xFF08;Data Sample&#xFF09;&#x7684;&#x8F6C;&#x6362;&#x3002;</li>
</ul>
</li>
</ul>
<h2 id="Diffusion vs GAN"><a href="#Diffusion vs GAN"></a>Diffusion vs GAN</h2>
<ul>
<li>&#x901F;&#x5EA6;&#xFF1A;Diffusion &#x9700;&#x8981;&#x591A;&#x6B65;&#x9AA4;&#x5230;&#x56FE;&#x7247;&#xFF0C;&#x800C; GAN &#x662F;&#x4E00;&#x6B65;&#x5230;&#x4F4D;&#xFF1B;&#x6240;&#x4EE5;Diffusion &#x4F1A;&#x6162;&#xFF0C;&#x4F46;&#x662F;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E5F;&#x66F4;&#x7A33;&#x5B9A;</li>
<li>&#x5E94;&#x7528;&#x9762;&#xFF1A;&#x6269;&#x6563;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x591A;&#x79CD;&#x6761;&#x4EF6;&#x6765;&#x63A7;&#x5236;&#x751F;&#x6210;&#x7684;&#x56FE;&#x50CF;&#xFF0C;&#x6BD4;&#x5982;&#x6587;&#x672C;&#x63CF;&#x8FF0;&#x3001;&#x56FE;&#x50CF;&#x63A9;&#x7801;&#x3001;&#x6DF1;&#x5EA6;&#x56FE;&#x7B49;&#xFF0C;&#x800C; GAN &#x901A;&#x5E38;&#x53EA;&#x80FD;&#x5229;&#x7528;&#x7C7B;&#x522B;&#x6807;&#x7B7E;&#x6216;&#x566A;&#x58F0;&#x4F5C;&#x4E3A;&#x6761;&#x4EF6;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x6269;&#x6563;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x66F4;&#x7075;&#x6D3B;&#x5730;&#x5E94;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x6BD4;&#x5982;&#x56FE;&#x50CF;&#x7F16;&#x8F91;&#x3001;&#x56FE;&#x50CF;&#x4FEE;&#x590D;&#x3001;&#x56FE;&#x50CF;&#x7FFB;&#x8BD1;&#x7B49;</li>
</ul>
<h1 id="Diffusion &#x6A21;&#x578B;&#x8FC7;&#x7A0B;"><a href="#Diffusion &#x6A21;&#x578B;&#x8FC7;&#x7A0B;"></a>Diffusion &#x6A21;&#x578B;&#x8FC7;&#x7A0B;</h1>
<ul>
<li>&#x521D;&#x59CB;&#x566A;&#x58F0;&#xFF1A;&#x4ECE;&#x67D0;&#x4E2A;&#x5148;&#x9A8C;&#x5206;&#x5E03;&#x4E2D;&#x751F;&#x6210;&#x521D;&#x59CB;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x3002;</li>
<li>&#x6269;&#x6563;&#x8FC7;&#x7A0B;&#xFF1A;&#x901A;&#x8FC7;&#x4E00;&#x7CFB;&#x5217;&#x6B65;&#x9AA4;&#xFF0C;&#x5C06;&#x5F53;&#x524D;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x9010;&#x6E10;&#x6269;&#x6563;&#xFF0C;&#x4EE5;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x7684;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x3002;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x4E2D;&#x4F7F;&#x7528;&#x4E86;&#x9006;&#x6269;&#x6563;&#x65B9;&#x7A0B;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x5F53;&#x524D;&#x6B65;&#x9AA4;&#x7684;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x6620;&#x5C04;&#x5230;&#x4E0A;&#x4E00;&#x6B65;&#x9AA4;&#x7684;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x3002;</li>
<li>&#x9006;&#x6269;&#x6563;&#x91C7;&#x6837;&#xFF1A;&#x901A;&#x8FC7;&#x9006;&#x6269;&#x6563;&#x8FC7;&#x7A0B;&#x4E2D;&#x7684;&#x91C7;&#x6837;&#x64CD;&#x4F5C;&#xFF0C;&#x5C06;&#x5F53;&#x524D;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x8F6C;&#x5316;&#x4E3A;&#x4EE5;&#x4E0B;&#x4E00;&#x6B65;&#x7684;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x3002;</li>
<li>&#x751F;&#x6210;&#x5668;&#x7F51;&#x7EDC;&#xFF1A;&#x4F7F;&#x7528;&#x751F;&#x6210;&#x5668;&#x7F51;&#x7EDC;&#x5C06;&#x5F53;&#x524D;&#x566A;&#x58F0;&#x4FE1;&#x53F7;&#x6620;&#x5C04;&#x56DE;&#x9AD8;&#x7EF4;&#x7A7A;&#x95F4;&#xFF0C;&#x751F;&#x6210;&#x4E00;&#x5E27;&#x56FE;&#x50CF;&#x3002;</li>
<li>&#x635F;&#x5931;&#x51FD;&#x6570;&#x4E0E;&#x4F18;&#x5316;&#xFF1A;&#x6839;&#x636E;&#x751F;&#x6210;&#x56FE;&#x50CF;&#x4E0E;&#x76EE;&#x6807;&#x771F;&#x5B9E;&#x56FE;&#x50CF;&#x4E4B;&#x95F4;&#x7684;&#x5DEE;&#x5F02;&#xFF0C;&#x5B9A;&#x4E49;&#x9002;&#x5F53;&#x7684;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x548C;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x6765;&#x66F4;&#x65B0;&#x751F;&#x6210;&#x5668;&#x7F51;&#x7EDC;&#x7684;&#x53C2;&#x6570;&#x3002;</li>
</ul>
<h1 id="&#x7406;&#x89E3; VAE"><a href="#&#x7406;&#x89E3; VAE"></a>&#x7406;&#x89E3; VAE</h1>
<p>&#x201C;&#x5C40;&#x90E8;&#x662F;&#x7531;&#x4E8E;&#x65B9;&#x5DEE;&#x63A7;&#x5236;&#xFF0C;&#x800C;&#x5168;&#x5C40;&#x662F;&#x7531;&#x4E8E;&#x5747;&#x503C;&#x63A7;&#x5236;&#x201D;&#x8FD9;&#x53E5;&#x8BDD;&#x5F3A;&#x8C03;&#x4E86;&#x5728;VAE&#x6A21;&#x578B;&#x4E2D;&#xFF0C;&#x65B9;&#x5DEE;&#x5411;&#x91CF;&#x4E3B;&#x8981;&#x5F71;&#x54CD;&#x751F;&#x6210;&#x6570;&#x636E;&#x7684;&#x5C40;&#x90E8;&#x7EC6;&#x8282;&#x548C;&#x53D8;&#x5F02;&#x6027;&#xFF0C;&#x800C;&#x5747;&#x503C;&#x5411;&#x91CF;&#x5219;&#x51B3;&#x5B9A;&#x4E86;&#x6570;&#x636E;&#x5728;&#x6F5C;&#x5728;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x5168;&#x5C40;&#x5206;&#x5E03;&#x548C;&#x7ED3;&#x6784;&#x3002;</p>
<ul>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/144649293">VAE&#x7406;&#x8BBA;&#x8DDF;&#x6570;&#x5B66;</a></p>
</li>
<li>
<p>&#x53D8;&#x5206;&#x63A8;&#x7406;</p>
</li>
<li>
<p>KL &#x6563;&#x5EA6;</p>
<ul>
<li>&#x5728;&#x8BAD;&#x7EC3;&#x8FA8;&#x522B;&#x6A21;&#x578B;&#x65F6;&#xFF0C;&#x4E3A;&#x4E86;&#x7B80;&#x5316;&#x8BA1;&#x7B97;&#xFF0C;&#x4EBA;&#x4EEC;&#x5F80;&#x5F80;&#x76F4;&#x63A5;&#x5BF9;&#x4EA4;&#x53C9;&#x71B5;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#x3002; &#x800C;&#x5728; &#x5728;&#x8BAD;&#x7EC3;&#x751F;&#x6210;&#x6A21;&#x578B;&#x65F6;&#xFF0C;&#x4E3A;&#x4E86;&#x4F7F;&#x5206;&#x5E03;&#x4E0E;&#x76F8;&#x4E92;&#x63A5;&#x8FD1;&#xFF0C;&#x6211;&#x4EEC;&#x5FC5;&#x987B;&#x76F4;&#x63A5;&#x5BF9;KL&#x6563;&#x5EA6;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#x3002;</li>
<li><a href="https://zhuanlan.zhihu.com/p/345025351">&#x81EA;&#x4FE1;&#x606F;&#x3001;&#x71B5;&#x3001;&#x4EA4;&#x53C9;&#x71B5;&#x4E0E;KL&#x6563;&#x5EA6; &#x7684;&#x63A8;&#x5BFC;</a></li>
<li><a href="https://blog.csdn.net/Dby_freedom/article/details/83374650">KL-Divergence &#x4E0E;&#x4EA4;&#x53C9;&#x71B5;</a></li>
<li><a href="https://www.jianshu.com/p/43318a3dc715">KL &#x6563;&#x5EA6;&#x5F62;&#x8C61;&#x8BF4;&#x660E;&#xFF08;&#x7FFB;&#x8BD1;&#xFF09;</a></li>
</ul>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/78311644">EM&#x2014;&#x2014;&#x671F;&#x671B;&#x6700;&#x5927; &#x7B97;&#x6CD5;</a></p>
</li>
<li>
<p>&#x4EA4;&#x53C9;&#x71B5;</p>
</li>
<li>
<p>&#x8D1D;&#x53F6;&#x65AF;&#x5B9A;&#x7406;</p>
</li>
<li>
<p>&#x81EA;&#x7531;&#x80FD;</p>
</li>
</ul>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4F18;&#x5316;&#x5668;"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4F18;&#x5316;&#x5668;"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4F18;&#x5316;&#x5668;</h1>
<p>&#x4F18;&#x5316;&#x65B9;&#x5411;</p>
<pre><code>* &#x57FA;&#x4E8E;&#x52A8;&#x91CF;&#xFF08;NAG&#xFF09;
* &#x57FA;&#x4E8E;&#x81EA;&#x52A8;&#x5B66;&#x4E60;&#x7387; &#xFF08;&#x4F8B;&#x5982; RMSprop&#xFF0C;&#x914D;&#x7F6E;&#x8BAD;&#x7EC3;&#x7B80;&#x5355;&#xFF09;
* &#x7ED3;&#x5408;&#x4E24;&#x8005;&#x7684;&#xFF08;Adam &#x4E00;&#x822C;&#x6700;&#x4F18;&#xFF09;
</code></pre>
<p>&#x4E3A;&#x4EC0;&#x4E48; WGAN &#x9009;&#x62E9; RMSprop &#x4F5C;&#x4E3A;&#x4F18;&#x5316;&#x5668;&#xFF0C;&#x800C;&#x4E0D;&#x662F; Adam?</p>
<blockquote>
<blockquote>
<p>WGAN&#x7684;&#x76EE;&#x6807;&#x662F;&#x901A;&#x8FC7;&#x6700;&#x5C0F;&#x5316;&#x751F;&#x6210;&#x5668;&#x548C;&#x5224;&#x522B;&#x5668;&#x4E4B;&#x95F4;&#x7684;Wasserstein&#x8DDD;&#x79BB;&#x6765;&#x63D0;&#x9AD8;&#x751F;&#x6210;&#x6837;&#x672C;&#x7684;&#x8D28;&#x91CF;&#x3002;&#x4F20;&#x7EDF;&#x7684;&#x751F;&#x6210;&#x5BF9;&#x6297;&#x7F51;&#x7EDC;&#xFF08;GANs&#xFF09;&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BB9;&#x6613;&#x51FA;&#x73B0;&#x68AF;&#x5EA6;&#x4F2A;&#x5F71;&#x7684;&#x95EE;&#x9898;&#xFF08;&#x544A;&#x8BC9;&#x4F60;&#x9519;&#x4E86;&#xFF0C;&#x4F46;&#x5E76;&#x6CA1;&#x6709;&#x6307;&#x51FA;&#x9519;&#x5728;&#x54EA;&#x91CC;&#xFF0C;&#x5BFC;&#x81F4;&#x66F4;&#x65B0;&#x65B9;&#x5411;&#x9519;&#x8BEF;&#xFF0C;&#x628A;&#x6B63;&#x786E;&#x6539;&#x6389;&#xFF0C;&#x9519;&#x8BEF;&#x7559;&#x4E0B;&#xFF09;&#xFF0C;&#x5373;&#x5224;&#x522B;&#x5668;&#x7684;&#x68AF;&#x5EA6;&#x65E0;&#x6CD5;&#x63D0;&#x4F9B;&#x6709;&#x5173;&#x751F;&#x6210;&#x5668;&#x5F53;&#x524D;&#x72B6;&#x6001;&#x7684;&#x51C6;&#x786E;&#x4FE1;&#x606F;&#xFF0C;&#x5BFC;&#x81F4;&#x8BAD;&#x7EC3;&#x4E0D;&#x7A33;&#x5B9A;&#x3002;RMSProp&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x901A;&#x8FC7;&#x81EA;&#x9002;&#x5E94;&#x5730;&#x8C03;&#x6574;&#x5B66;&#x4E60;&#x7387;&#x6765;&#x51CF;&#x8F7B;&#x68AF;&#x5EA6;&#x4F2A;&#x5F71;&#x95EE;&#x9898;&#xFF0C;&#x6709;&#x52A9;&#x4E8E;&#x66F4;&#x7A33;&#x5B9A;&#x5730;&#x8BAD;&#x7EC3;WGAN&#x3002;</p>
</blockquote>
</blockquote>
<ul>
<li><a href="https://www.cnblogs.com/guoyaohua/p/8542554.html">&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x2014;&#x2014;&#x4F18;&#x5316;&#x5668;&#x7B97;&#x6CD5;Optimizer&#x8BE6;&#x89E3;&#xFF08;BGD&#x3001;SGD&#x3001;MBGD&#x3001;Momentum&#x3001;NAG&#x3001;Adagrad&#x3001;Adadelta&#x3001;RMSprop&#x3001;Adam&#xFF09;</a></li>
</ul>
<h1 id="&#x53CD;&#x5411;&#x4F20;&#x64AD;"><a href="#&#x53CD;&#x5411;&#x4F20;&#x64AD;"></a>&#x53CD;&#x5411;&#x4F20;&#x64AD;</h1>
<p>&#x6709;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x795E;&#x7ECF;&#x5143;&#x51FD;&#x6570; y = w * x&#xFF0C;&#x6A21;&#x62DF;&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#x548C;&#x8FDB;&#x884C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x7684;&#x8FC7;&#x7A0B;&#x3002;</p>
<p>&#x4E00;&#x6B21;&#x6743;&#x91CD;&#x66F4;&#x65B0;&#x8FC7;&#x7A0B;&#xFF08;&#x7ED9;&#x5B9A;&#x521D;&#x59CB;&#x6570;&#x636E;&#x8F93;&#x5165; x = 1&#xFF0C;w = 10&#xFF0C;&#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x662F; 10&#xFF0C;&#x671F;&#x671B;&#x8F93;&#x51FA; y1 = 2 &#x5219; &#x76EE;&#x6807; w &#x4E3A; 2&#xFF09;&#xFF1A;</p>
<pre><code>&#x8F93;&#x5165; x = 1
&#x521D;&#x59CB;&#x6743;&#x91CD; w = 10
&#x8BA1;&#x7B97;&#x8F93;&#x51FA; y = w * x = 10 * 1 = 10
</code></pre>
<p>&#x8BA1;&#x7B97;&#x635F;&#x5931;&#xFF1A;</p>
<pre><code>&#x7ED9;&#x5B9A;&#x671F;&#x671B;&#x8F93;&#x51FA; y1 = 2
&#x8BA1;&#x7B97;&#x635F;&#x5931;&#x51FD;&#x6570; loss = (y1 - y)^2 = (2 - 10)^2 = 64
</code></pre>
<p>&#x8BA1;&#x7B97;&#x68AF;&#x5EA6;&#xFF1A;</p>
<pre><code>&#x635F;&#x5931;&#x51FD;&#x6570;&#x5BF9;&#x6743;&#x91CD; w &#x7684;&#x68AF;&#x5EA6;&#xFF1A;dL/dw = 2 * (y1 - y) * (-x)
&#x5C06;&#x5177;&#x4F53;&#x6570;&#x503C;&#x4EE3;&#x5165;&#xFF1A;

dL/dw = 2 * (2 - 10) * (-1) = 2 * (-8) * (-1) = 16
&#x56E0;&#x6B64;&#xFF0C;&#x68AF;&#x5EA6;&#x4E3A; dL/dw = 16&#x3002;
</code></pre>
<p>&#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF1A;</p>
<pre><code>&#x4F7F;&#x7528;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#x66F4;&#x65B0;&#x6743;&#x91CD; w&#xFF1A;
w = w - learning_rate * dL/dw
&#x5047;&#x8BBE;&#x5B66;&#x4E60;&#x7387;&#xFF08;learning rate&#xFF09;&#x4E3A; 0.1&#xFF0C;&#x5C06;&#x68AF;&#x5EA6;&#x4EE3;&#x5165;&#xFF1A;

w = 10 - 0.1 * 16 = 10 - 1.6 = 8.4
&#x66F4;&#x65B0;&#x540E;&#x7684;&#x6743;&#x91CD;&#x4E3A; w = 8.4&#x3002;
</code></pre>
<h1 id="CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;"><a href="#CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;"></a>CGAN MNIST &#x8BAD;&#x7EC3;&#x6B65;&#x9AA4;</h1>
<ol>
<li>&#x56FA;&#x5B9A; generator &#xFF08; real_label = [batch_size, 10] &#x7684;&#x5BF9;&#x771F;&#x5B9E; label&#x7684; one-hot &#x7F16;&#x7801; &#xFF09;
<ul>
<li>&#x7528;&#x771F;&#x6570;&#x636E;&#x8BAD;&#x7EC3; output_label = Discriminator(real_image)&#xFF0C;d_real_loss = BCELoss(out_label,real_label)</li>
<li>&#x7528;&#x865A;&#x5047;&#x6570;&#x636E;&#xFF08;&#x566A;&#x97F3; + &#x771F;&#x5B9E;&#x6807;&#x7B7E; [batch_size, noise_dim&#xFF08;&#x6EE1;&#x8DB3;0~1&#x6B63;&#x6001;&#x5206;&#x5E03;&#xFF09;] + real_label = [batch_size, noise_dim+10] = z_tensor &#xFF09;</li>
<li>&#x8BAD;&#x7EC3; fake_image = Generator(z_tensor) &#x5F97;&#x51FA; fake_image( Tensor[batch_size, 1, 28, 28])</li>
<li>&#x518D;&#x6B21; out_label = Discriminator(fake_image) &#xFF0C;d_fake_loss = BCELoss(out_label,fake_label(&#x5168;0))</li>
<li>&#x8BA1;&#x7B97; D_loss = d_real_loss + d_fake_loss &#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF0C;&#x66F4;&#x65B0; Discriminator</li>
</ul>
</li>
<li>&#x56FA;&#x5B9A; discriminator
<ul>
<li>&#x7531; fake_image = Generator(z_tensor)</li>
<li>&#x7531; Discriminator(fake_image) &#x5F97;&#x51FA; out_label &#xFF0C;g_loss = BCELoss(out_label,real_label)</li>
<li>&#x8BA1;&#x7B97; G_loss = g_loss &#x53CD;&#x5411;&#x4F20;&#x64AD;&#xFF0C;&#x66F4;&#x65B0; Generator</li>
</ul>
</li>
</ol>
<h1 id="&#x9884;&#x5904;&#x7406;"><a href="#&#x9884;&#x5904;&#x7406;"></a>&#x9884;&#x5904;&#x7406;</h1>
<ul>
<li>&#x5F52;&#x4E00;&#x5316;&#xFF1A;&#x4E00;&#x79CD;&#x5E38;&#x89C1;&#x7684;&#x56FE;&#x50CF;&#x9884;&#x5904;&#x7406;&#x64CD;&#x4F5C;&#xFF0C;&#x5B83;&#x7528;&#x4E8E;&#x5C06;&#x56FE;&#x50CF;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x5F52;&#x4E00;&#x5316;&#x4E3A;&#x5747;&#x503C;&#x4E3A;0&#x3001;&#x6807;&#x51C6;&#x5DEE;&#x4E3A;1&#x7684;&#x5206;&#x5E03;&#xFF0C;&#x6216;&#x8005;&#x53EA;&#x5C06;&#x6570;&#x636E;&#x6536;&#x7A84;&#x5230; -1 ~ 1 &#x4E4B;&#x95F4;&#x3002;&#x5E38;&#x7528;&#x4E8E; CNN &#x7F51;&#x7EDC;&#x6570;&#x636E;&#x9884;&#x5904;&#x7406;
<ul>
<li>&#x52A0;&#x901F;&#x8BAD;&#x7EC3;&#xFF1A;&#x5E38;&#x7528;&#x7684;&#x6FC0;&#x6D3B;&#x51FD;&#x6570;&#x5982; Sigmoid &#x548C; Tanh &#x5728;&#x8F93;&#x5165;&#x503C;&#x8F83;&#x5927;&#x6216;&#x8F83;&#x5C0F;&#x7684;&#x533A;&#x57DF;&#x4F1A;&#x9971;&#x548C;&#xFF0C;&#x5BFC;&#x81F4;&#x68AF;&#x5EA6;&#x63A5;&#x8FD1;&#x6216;&#x5B8C;&#x5168;&#x4E3A;&#x96F6;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x53D8;&#x5F97;&#x975E;&#x5E38;&#x7F13;&#x6162;&#x6216;&#x505C;&#x6EDE;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x8F93;&#x5165;&#x503C;&#x4F4D;&#x4E8E;&#x6FC0;&#x6D3B;&#x51FD;&#x6570;&#x7684;&#x7EBF;&#x6027;&#x533A;&#x57DF;&#xFF0C;&#x907F;&#x514D;&#x68AF;&#x5EA6;&#x9971;&#x548C;&#x95EE;&#x9898;&#xFF0C;&#x63D0;&#x9AD8;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x6548;&#x679C;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x7A33;&#x5B9A;&#x6027;&#xFF1A;&#x5728;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x4E2D;&#xFF0C;&#x4F8B;&#x5982;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x6CD5;&#xFF0C;&#x8F83;&#x5927;&#x7684;&#x68AF;&#x5EA6;&#x503C;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x53C2;&#x6570;&#x66F4;&#x65B0;&#x8FC7;&#x5927;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x4F18;&#x5316;&#x8FC7;&#x7A0B;&#x4E0D;&#x7A33;&#x5B9A;&#x751A;&#x81F3;&#x53D1;&#x6563;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x68AF;&#x5EA6;&#x63A7;&#x5236;&#x5728;&#x8F83;&#x5C0F;&#x7684;&#x8303;&#x56F4;&#x5185;&#xFF0C;&#x63D0;&#x9AD8;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x7684;&#x6570;&#x503C;&#x7A33;&#x5B9A;&#x6027;&#xFF0C;&#x4F7F;&#x6A21;&#x578B;&#x66F4;&#x5BB9;&#x6613;&#x6536;&#x655B;&#x3002;</li>
<li>&#x6570;&#x636E;&#x5206;&#x5E03;&#x4E00;&#x81F4;&#x6027;&#xFF1A;&#x5C06;&#x50CF;&#x7D20;&#x503C;&#x7F29;&#x653E;&#x5230; -1 &#x5230; 1 &#x7684;&#x8303;&#x56F4;&#x53EF;&#x4EE5;&#x4F7F;&#x4E0D;&#x540C;&#x56FE;&#x50CF;&#x4E4B;&#x95F4;&#x7684;&#x50CF;&#x7D20;&#x5206;&#x5E03;&#x66F4;&#x52A0;&#x4E00;&#x81F4;&#x3002;&#x8FD9;&#x6837;&#x505A;&#x7684;&#x76EE;&#x7684;&#x662F;&#x786E;&#x4FDD;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7684;&#x7EDF;&#x8BA1;&#x7279;&#x6027;&#x5728;&#x6574;&#x4E2A;&#x8BAD;&#x7EC3;&#x96C6;&#x4E0A;&#x662F;&#x76F8;&#x4F3C;&#x7684;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x7684;&#x6CDB;&#x5316;&#x80FD;&#x529B;&#x3002;</li>
<li>&#x63A8;&#x5E7F;&#xFF1A;Batch Normalization (BN) &#x5C42;&#x4F5C;&#x7528;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x662F;&#x5E94;&#x7528;&#x5728;<strong>&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;</strong>&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x5C0F;&#x6279;&#x91CF;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x6807;&#x51C6;&#x5316;</li>
</ul>
</li>
</ul>
<h1 id="&#x635F;&#x5931;&#x51FD;&#x6570;"><a href="#&#x635F;&#x5931;&#x51FD;&#x6570;"></a>&#x635F;&#x5931;&#x51FD;&#x6570;</h1>
<h2 id="&#x4EA4;&#x53C9;&#x71B5;"><a href="#&#x4EA4;&#x53C9;&#x71B5;"></a>&#x4EA4;&#x53C9;&#x71B5;</h2>
<ul>
<li>&#x71B5;&#xFF1A;&#x963F;&#x6839;&#x5EF7; 1/4&#x6982;&#x7387;&#x6253;&#x8FDB;&#x51B3;&#x8D5B; &#xFF0C;1/2 &#x6982;&#x7387;&#x83B7;&#x5F97;&#x51A0;&#x519B;&#xFF0C;1/8 &#x83B7;&#x5F97;&#x51A0;&#x519B;&#xFF0C;&#x5219;&#x6709; f(1/8) = f(1/2) + f(1/4)&#xFF0C;f(x) := &#x4FE1;&#x606F;&#x91CF;&#xFF0C;&#x63A8;&#x51FA;&#x53EF;&#x80FD;&#x7684; f(x) := -log(x) &#xFF08;log 2&#x4E3A;&#x5E95;&#x5355;&#x8C03;&#x4E0A;&#x5347;&#xFF0C;&#x52A0;&#x8D1F;&#x53F7;&#x624D;&#x5219;&#x5355;&#x8C03;&#x5411;&#x4E0B;&#xFF09;</li>
<li>&#x4EA4;&#x53C9;&#x71B5;&#xFF1A;KL &#x6563;&#x5EA6;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8861;&#x91CF;&#x4E24;&#x4E2A;&#x6982;&#x7387;&#x5206;&#x5E03;&#x4E4B;&#x95F4;&#x5DEE;&#x5F02;&#x7684;&#x5EA6;&#x91CF;&#xFF0C;KL(P || Q) = &#x3A3;(P(i) * log(P(i) / Q(i)))&#xFF0C;&#x56FA;&#x5B9A;&#x5206;&#x5E03; P &#x7684;&#x65F6;&#x5019; KL &#x6563;&#x5EA6;&#x53EF;&#x4EE5;&#x5316;&#x7B80;&#x4E3A;&#x4EA4;&#x53C9;&#x71B5; KL(P || Q) = &#x3A3;(P(i) * log(P(i) / Q(i))) = -&#x3A3;(P(i) * log(Q(i))) = -H(P, Q)&#xFF1B;&#x53EF;&#x4EE5;&#x5F88;&#x597D;&#x7684;&#x7528;&#x4E8E;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x635F;&#x5931;&#x8BA1;&#x7B97;</li>
</ul>
<h3 id="&#x95EE;&#x9898;"><a href="#&#x95EE;&#x9898;"></a>&#x95EE;&#x9898;</h3>
<ul>
<li>&#x56DE;&#x5F52;&#x8DDF;&#x5206;&#x7C7B;&#x533A;&#x522B;&#xFF1F;
<ul>
<li>&#x5206;&#x7C7B;&#x4F8B;&#x5B50;&#xFF1A;&#x8BC6;&#x522B;&#x56FE;&#x7247;&#x662F;&#x732B;&#x8FD8;&#x662F;&#x72D7;</li>
<li>&#x56DE;&#x5F52;&#x4F8B;&#x5B50;&#xFF1A;&#x901A;&#x8FC7;&#x7279;&#x5F81;1-n&#x9884;&#x6D4B;&#x623F;&#x4EF7;</li>
<li>&#x601D;&#x8003;&#xFF1A;&#x5206;&#x7C7B;&#x8DDF;&#x56DE;&#x5F52;&#x7684;&#x533A;&#x522B;&#x662F;&#x76EE;&#x6807;&#x7684; &#x79BB;&#x6563;&#x8DDF;&#x8FDE;&#x7EED; &#x533A;&#x522B;&#xFF1F;&#x8FD8;&#x662F;&#x8BF4;&#x8F93;&#x51FA;&#x7684;label&#x4E4B;&#x95F4;&#x662F;&#x5426;&#x6709;&#x201C;&#x8DDD;&#x79BB;&#x5EA6;&#x91CF;&#x201D;&#xFF1F;</li>
</ul>
</li>
<li>&#x4E3A;&#x4EC0;&#x4E48;&#x4EA4;&#x53C9;&#x71B5;&#x9002;&#x5408;&#x5206;&#x7C7B;&#xFF0C;&#x800C; MSE &#x9002;&#x5408;&#x56DE;&#x5F52;?
<ul>
<li>&#x4EA4;&#x53C9;&#x71B5;
<ul>
<li>&#x6982;&#x7387;&#x89E3;&#x91CA;&#x6027;&#xFF1A;&#x4EA4;&#x53C9;&#x71B5;&#x57FA;&#x4E8E;&#x6982;&#x7387;&#x5206;&#x5E03;&#x4E4B;&#x95F4;&#x7684;&#x5DEE;&#x5F02;&#x8FDB;&#x884C;&#x5EA6;&#x91CF;&#xFF0C;&#x66F4;&#x9002;&#x5408;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x56E0;&#x4E3A;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x901A;&#x5E38;&#x6D89;&#x53CA;&#x5BF9;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x7684;&#x6982;&#x7387;&#x5206;&#x5E03;&#x8FDB;&#x884C;&#x5EFA;&#x6A21;&#x548C;&#x9884;&#x6D4B;&#x3002;</li>
<li>&#x68AF;&#x5EA6;&#x66F4;&#x5F3A;&#x70C8;&#xFF1A;&#x76F8;&#x5BF9;&#x4E8E;MSE&#xFF0C;&#x4EA4;&#x53C9;&#x71B5;&#x7684;&#x68AF;&#x5EA6;&#x66F4;&#x52A0;&#x9661;&#x5CED;&#xFF0C;&#x8FD9;&#x53EF;&#x4EE5;&#x52A0;&#x5FEB;&#x6A21;&#x578B;&#x7684;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x3002;&#x5BF9;&#x4E8E;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x66F4;&#x5FEB;&#x7684;&#x6536;&#x655B;&#x901F;&#x5EA6;&#x53EF;&#x80FD;&#x662F;&#x4E00;&#x4E2A;&#x4F18;&#x52BF;&#x3002;</li>
</ul>
</li>
<li>MES
<ul>
<li>&#x6570;&#x5B66;&#x4E0A;&#x7684;&#x5408;&#x7406;&#x6027;&#xFF1A;MSE &#x662F;&#x5BF9;&#x9884;&#x6D4B;&#x503C;&#x4E0E;&#x771F;&#x5B9E;&#x503C;&#x7684;&#x5DEE;&#x5F02;&#x7684;&#x5E73;&#x65B9;&#x8FDB;&#x884C;&#x5EA6;&#x91CF;&#xFF0C;&#x53EF;&#x4EE5;&#x63D0;&#x4F9B;&#x5BF9;&#x9884;&#x6D4B;&#x8BEF;&#x5DEE;&#x7684;&#x8F83;&#x4E3A;&#x7CBE;&#x786E;&#x7684;&#x5EA6;&#x91CF;&#x3002;</li>
<li>&#x5BF9;&#x5F02;&#x5E38;&#x503C;&#x4E0D;&#x654F;&#x611F;&#xFF1A;&#x5E73;&#x65B9;&#x5DEE;&#x7684;&#x8BA1;&#x7B97;&#x4F7F;&#x5F97; MSE &#x5BF9;&#x5F02;&#x5E38;&#x503C;&#x4E0D;&#x654F;&#x611F;&#xFF0C;&#x56E0;&#x4E3A;&#x5E73;&#x65B9;&#x64CD;&#x4F5C;&#x4F1A;&#x653E;&#x5927;&#x5F02;&#x5E38;&#x503C;&#x7684;&#x5F71;&#x54CD;&#x3002;&#x8FD9;&#x5728;&#x67D0;&#x4E9B;&#x56DE;&#x5F52;&#x95EE;&#x9898;&#x4E2D;&#x53EF;&#x80FD;&#x662F;&#x6709;&#x76CA;&#x7684;&#x3002;</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://www.youtube.com/@wkaing">&#x738B;&#x6728;&#x5934;&#x5B66;&#x79D1;&#x5B66;</a></li>
<li>https://zhuanlan.zhihu.com/p/104130889</li>
<li><a href="https://cloud.tencent.com/developer/article/1604194">&#x56DE;&#x5F52;&#x4E0E;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x533A;&#x522B;</a></li>
</ul>
<h1 id="Transformer"><a href="#Transformer"></a>Transformer</h1>
<h2 id="positional encoding"><a href="#positional encoding"></a>positional encoding</h2>
<p>&#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#x7684;&#x8981;&#x6C42;&#xFF1A;&#x9009;&#x62E9;&#x6B63;&#x5F26;&#x8DDF;&#x4F59;&#x5F26;&#x7EC4;&#x5408;&#x7F16;&#x7801;</p>
<ul>
<li>&#x6BCF;&#x4E2A;&#x4F4D;&#x7F6E;&#x90FD;&#x6709;&#x552F;&#x4E00;&#x7684;&#x7F16;&#x7801;&#x3002;</li>
<li>&#x5728;&#x4E0D;&#x540C;&#x957F;&#x5EA6;&#x7684;&#x53E5;&#x5B50;&#x4E2D;&#xFF0C;&#x4E24;&#x4E2A;&#x65F6;&#x95F4;&#x6B65;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x5E94;&#x8BE5;&#x4E00;&#x81F4;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x4E0D;&#x53D7;&#x53E5;&#x5B50;&#x957F;&#x77ED;&#x7684;&#x5F71;&#x54CD;&#xFF0C;&#x5E76;&#x4E14;&#x7F16;&#x7801;&#x8303;&#x56F4;&#x662F;&#x6709;&#x754C;&#x7684;&#x3002;&#xFF08;&#x4E0D;&#x4F1A;&#x968F;&#x7740;&#x53E5;&#x5B50;&#x52A0;&#x957F;&#x6570;&#x5B57;&#x5C31;&#x65E0;&#x9650;&#x589E;&#x5927;&#xFF09;</li>
<li>&#x5FC5;&#x987B;&#x662F;&#x786E;&#x5B9A;&#x6027;&#x7684;&#x3002;</li>
</ul>
<p>&#x603B;&#x7ED3;</p>
<ul>
<li>&#x95EE;&#x9898;&#x53CA;&#x5176;&#x89E3;&#x7B54;&#xFF1A;
<ul>
<li>&#x4E3A;&#x4EC0;&#x4E48;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x4F7F;&#x7528; 1,2,3...&#x8FD9;&#x79CD;&#x7EBF;&#x6027;&#x7F16;&#x7801;&#xFF1F;
<ul>
<li>&#x539F;&#x56E0;&#xFF1A;&#x5468;&#x671F;&#x6027;&#x6A21;&#x5F0F;&#x5728;&#x4F4D;&#x7F6E;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x4E0D;&#x540C;&#x7EF4;&#x5EA6;&#x4E0A;&#x5448;&#x73B0;&#x51FA;&#x4E0D;&#x540C;&#x7684;&#x53D8;&#x5316;&#x901F;&#x5EA6;&#x548C;&#x5468;&#x671F;&#xFF08;&#x4E0B;&#x9762;&#x4F8B;&#x5B50;&#x4F1A;&#x8BF4;&#x660E;&#xFF09;
<ul>
<li>&#x6355;&#x6349;&#x957F;&#x8DDD;&#x79BB;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF08;&#x7EBF;&#x6027;&#x6A21;&#x5F0F;&#x4E5F;&#x80FD;&#x505A;&#x5230;&#xFF0C;&#x4F46;&#x662F;&#x4E0D;&#x591F;&#x7CBE;&#x7EC6;&#xFF09;</li>
<li>&#x63D0;&#x4F9B;&#x66F4;&#x4E30;&#x5BCC;&#x7684;&#x8868;&#x793A;&#x80FD;&#x529B;&#xFF1A;&#x8F83;&#x4F4E;&#x9891;&#x7387;&#x7684;&#x7EF4;&#x5EA6;&#x5177;&#x6709;&#x8F83;&#x957F;&#x7684;&#x5468;&#x671F;&#xFF0C;&#x53EF;&#x4EE5;&#x6355;&#x6349;&#x5230;&#x5927;&#x8303;&#x56F4;&#x7684;&#x5E8F;&#x5217;&#x7ED3;&#x6784;&#xFF0C;&#x800C;&#x8F83;&#x9AD8;&#x9891;&#x7387;&#x7684;&#x7EF4;&#x5EA6;&#x53EF;&#x4EE5;&#x66F4;&#x7EC6;&#x81F4;&#x5730;&#x8868;&#x793A;&#x5C40;&#x90E8;&#x6A21;&#x5F0F;&#x548C;&#x77ED;&#x8DDD;&#x79BB;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;</li>
<li>&#x907F;&#x514D;&#x8FC7;&#x62DF;&#x5408;&#xFF1A;&#x968F;&#x7740;&#x53E5;&#x5B50;&#x53D8;&#x957F;&#xFF0C;&#x8FD9;&#x4E9B;&#x503C;&#x53EF;&#x80FD;&#x4F1A;&#x53D8;&#x5F97;&#x7279;&#x522B;&#x5927;&#xFF0C;&#x5E76;&#x4E14;&#x6211;&#x4EEC;&#x7684;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4F1A;&#x9047;&#x5230;&#x6BD4;&#x8BAD;&#x7EC3;&#x65F6;&#x66F4;&#x957F;&#x7684;&#x53E5;&#x5B50;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>&#x601D;&#x8003;&#x4F8B;&#x5B50;&#xFF1A;
<ul>
<li>&#x7B2C;&#x4E00;&#x4E2A;&#x8BCD;&#x7F16;&#x7801;&#x4E3A; [1,2,3]&#xFF0C; &#x5219;&#x4F4D;&#x7F6E;&#x53EF;&#x7528;&#x5411;&#x91CF; [&#x79D2;&#xFF0C;&#x5206;&#xFF0C;&#x65F6;]&#x6765;&#x8868;&#x793A;&#xFF1B;&#x7B2C;&#x4E8C;&#x4E2A;&#x8BCD;&#x7F16;&#x7801;&#x4E3A; [4,5,6]&#xFF0C; &#x5219;&#x4F4D;&#x7F6E;&#x53EF;&#x7528;&#x5411;&#x91CF; [&#x79D2; + 1&#xFF0C;&#x5206; + 1/60&#xFF0C;&#x65F6; + 1/360] &#x6765;&#x8868;&#x793A;</li>
<li>&#x5468;&#x671F;&#xFF1A;&#x5728;&#x4E00;&#x4E2A;&#x8BCD;&#x5411;&#x91CF;&#x4E0A;&#x4F1A;&#x51FA;&#x73B0;&#x4E0D;&#x540C;&#x7684;&#x5468;&#x671F;&#x53D8;&#x5316;&#xFF0C;&#x80FD;&#x540C;&#x65F6;&#x8FFD;&#x8E2A;&#x8FD1;&#x8DDD;&#x79BB;&#x8DDF;&#x8FDC;&#x8DDD;&#x79BB;&#x7684;&#x8BCD;&#x5173;&#x7CFB;&#xFF1A;&#x79D2;&#x9488;&#x8D70;&#x4E00;&#x4E2A;&#x5468;&#x671F; 60 &#x79D2;&#xFF0C;&#x5206;&#x9488;&#x8D70;&#x4E00;&#x6B65;&#xFF1B;&#x5206;&#x8D70;&#x4E00;&#x4E2A;&#x5468;&#x671F; 60 &#x5206;&#xFF0C; &#x65F6;&#x9488;+1&#xFF1B;</li>
<li>&#x5468;&#x671F;&#x8BBE;&#x5B9A;&#xFF1A;&#x901A;&#x8FC7;&#x8BBE;&#x5B9A; &#x79D2;&#xFF0C;&#x5206;&#xFF0C;&#x65F6;&#x4E4B;&#x95F4;&#x7684;&#x5468;&#x671F;&#x5173;&#x7CFB;&#xFF08;&#x6BD4;&#x5982;&#x53EF;&#x4EE5;&#x8BBE;&#x5B9A;600&#x79D2;&#xFF0C;&#x5206;&#x9488;&#x624D;&#x8D70;&#x4E00;&#x6B65;&#xFF0C;&#x5219;&#x4F1A;&#x62C9;&#x4E0A;&#x5468;&#x671F;&#x53D8;&#x5316;&#xFF0C;&#x8FFD;&#x8E2A;&#x66F4;&#x8FDC;&#x7684;&#x8BCD;&#x5173;&#x7CFB;&#xFF09;</li>
</ul>
</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://kazemnejad.com/blog/transformer_architecture_positional_encoding/">positional encoding blog</a></li>
<li><a href="https://datascience.stackexchange.com/questions/51065/what-is-the-positional-encoding-in-the-transformer-model">positional encoding stackexchange + youtube</a></li>
</ul>
<h2 id="self-attention"><a href="#self-attention"></a>self-attention</h2>
<p>&#x601D;&#x8003;</p>
<ul>
<li>&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x4E0E;&#x5377;&#x79EF;&#x7684;&#x591A;&#x901A;&#x9053;&#xFF08;channel&#xFF09;&#x8FDB;&#x884C;&#x7C7B;&#x6BD4;&#x3002;&#x591A;&#x5934;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x548C;&#x5377;&#x79EF;&#x7684;&#x591A;&#x901A;&#x9053;&#x90FD;&#x6D89;&#x53CA;&#x5E76;&#x884C;&#x5730;&#x5B66;&#x4E60;&#x4E0D;&#x540C;&#x7684;&#x7279;&#x5F81;&#x8868;&#x793A;&#x3002;&#x5B83;&#x4EEC;&#x90FD;&#x81F4;&#x529B;&#x4E8E;&#x63D0;&#x53D6;&#x8F93;&#x5165;&#x6570;&#x636E;&#x7684;&#x591A;&#x6837;&#x5316;&#x7279;&#x5F81;&#xFF0C;&#x5E76;&#x6355;&#x6349;&#x8F93;&#x5165;&#x4E2D;&#x7684;&#x4E0D;&#x540C;&#x6A21;&#x5F0F;&#x548C;&#x5173;&#x8054;&#x6027;&#x3002;</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://medium.com/@geetkal67/attention-networks-a-simple-way-to-understand-self-attention-f5fb363c736d">self-attention</a></li>
<li><a href="https://medium.com/@geetkal67/attention-networks-a-simple-way-to-understand-multi-head-attention-3bc3409c4312">multi-head attention in transformer</a>)</li>
</ul>
<h1 id="one hot &#x7F16;&#x7801;"><a href="#one hot &#x7F16;&#x7801;"></a>one hot &#x7F16;&#x7801;</h1>
<p>One-hot &#x7F16;&#x7801;&#x662F;&#x4E00;&#x79CD;&#x5C06;&#x79BB;&#x6563;&#x7684;&#x5206;&#x7C7B;&#x6807;&#x7B7E;&#x8F6C;&#x6362;&#x4E3A;&#x4E8C;&#x8FDB;&#x5236;&#x5411;&#x91CF;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x7684;&#x4F18;&#x70B9;&#x662F;&#x53EF;&#x4EE5;&#x6D88;&#x9664;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x4E4B;&#x95F4;&#x7684;&#x504F;&#x5E8F;&#x5173;&#x7CFB;&#xFF0C;&#x4F7F;&#x5F97;&#x7279;&#x5F81;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x8BA1;&#x7B97;&#x66F4;&#x52A0;&#x5408;&#x7406;&#x3002;&#xFF08;&#x65B9;&#x4FBF;&#x5728;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#x8BA1;&#x7B97; LOSS&#xFF09;</p>
<h2 id="&#x4F8B;&#x5B50;"><a href="#&#x4F8B;&#x5B50;"></a>&#x4F8B;&#x5B50;</h2>
<p>&#x6BD4;&#x5982;&#xFF0C;&#x6709;&#x4E00;&#x4E2A;&#x79BB;&#x6563;&#x578B;&#x7279;&#x5F81;&#xFF0C;&#x4EE3;&#x8868;&#x5DE5;&#x4F5C;&#x7C7B;&#x578B;&#xFF0C;&#x8BE5;&#x79BB;&#x6563;&#x578B;&#x7279;&#x5F81;&#xFF0C;&#x5171;&#x6709;&#x4E09;&#x4E2A;&#x53D6;&#x503C;&#xFF0C;&#x4E0D;&#x4F7F;&#x7528;one-hot&#x7F16;&#x7801;&#xFF0C;&#x5176;&#x8868;&#x793A;&#x5206;&#x522B;&#x662F;x_1 = (1), x_2 = (2), x_3 = (3)&#x3002;</p>
<p>&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#xFF0C;(x_1, x_2) = 1, d(x_2, x_3) = 1, d(x_1, x_3) = 2&#x3002;&#x90A3;&#x4E48;x_1&#x548C;x_3&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x5C31;&#x8D8A;&#x4E0D;&#x76F8;&#x4F3C;&#x5417;&#xFF1F;&#x663E;&#x7136;&#x8FD9;&#x6837;&#x7684;&#x8868;&#x793A;&#xFF0C;&#x8BA1;&#x7B97;&#x51FA;&#x6765;&#x7684;&#x7279;&#x5F81;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#x4E0D;&#x5408;&#x7406;&#x3002;</p>
<p>&#x90A3;&#x5982;&#x679C;&#x4F7F;&#x7528;one-hot&#x7F16;&#x7801;&#xFF0C;&#x5219;&#x5F97;&#x5230;x_1 = (1, 0, 0), x_2 = (0, 1, 0), x_3 = (0, 0, 1)&#xFF0C;&#x90A3;&#x4E48;&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x5C31;&#x90FD;&#x662F;sqrt(2).&#x5373;&#x6BCF;&#x4E24;&#x4E2A;&#x5DE5;&#x4F5C;&#x4E4B;&#x95F4;&#x7684;&#x8DDD;&#x79BB;&#x662F;&#x4E00;&#x6837;&#x7684;&#xFF0C;&#x663E;&#x5F97;&#x66F4;&#x5408;&#x7406;&#x3002;</p>
<h2 id="&#x5B9E;&#x73B0;"><a href="#&#x5B9E;&#x73B0;"></a>&#x5B9E;&#x73B0;</h2>
<pre><code class="language-python"><span class="hljs-comment"># &#x5047;&#x8BBE; text &#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x96C6;&#x662F;&#x7531;&#x5927;&#x5C0F;&#x5199;&#x5B57;&#x6BCD;&#x548C;&#x6570;&#x5B57;&#x7EC4;&#x6210;&#x7684;&#xFF0C;&#x5171;&#x6709; 62 &#x4E2A;&#x5B57;&#x7B26;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;char_set = &quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&quot;&#xFF09;&#xFF0C;&#x5219; self.char_set_len &#x7684;&#x503C;&#x4E3A; 62&#x3002;&#x5BF9;&#x4E8E;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26; ch&#xFF0C;&#x5B83;&#x5728;&#x5B57;&#x7B26;&#x96C6;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#x4F4D;&#x7F6E;&#x662F;&#x552F;&#x4E00;&#x7684;&#xFF0C;&#x56E0;&#x6B64; i * self.char_set_len + self.char_set.index(ch) &#x7684;&#x7ED3;&#x679C;&#x4E5F;&#x662F;&#x552F;&#x4E00;&#x7684;&#x3002;</span>
vector = np.zeros(self.max_captcha * self.char_set_len) <span class="hljs-comment"># shape = [max_captcha*36]</span>
<span class="hljs-keyword">for</span> i, ch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(text):
    idx = i * self.char_set_len + self.char_set.index(ch) <span class="hljs-comment"># idx = (0-(max_captcha-1))*36+(0-36)</span>
    vector[idx] = <span class="hljs-number">1</span>
</code></pre>
<p>&#x601D;&#x8003;&#xFF1A;&#x5982;&#x679C;&#x662F;&#x4E0D;&#x5B9A;&#x957F;&#x7F16;&#x7801;&#xFF0C;&#x8BE5;&#x5982;&#x4F55;&#x6539;&#x8FDB;?</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/39012149">&#x673A;&#x5668;&#x5B66;&#x4E60;&#xFF1A;&#x6570;&#x636E;&#x9884;&#x5904;&#x7406;&#x4E4B;&#x72EC;&#x70ED;&#x7F16;&#x7801;&#xFF08;One-Hot&#xFF09;</a></li>
</ul>
<h2 id="CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;"><a href="#CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;"></a>CRNN + CTC &#x89E3;&#x51B3;&#x53D8;&#x957F;&#x6587;&#x672C;&#x8BC6;&#x522B;</h2>
<h3 id="CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;"><a href="#CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;"></a>CTC &#x5982;&#x4F55;&#x8BA1;&#x7B97;&#x9884;&#x6D4B;&#x5E8F;&#x5217;&#x8DDF;&#x76EE;&#x6807;&#x5E8F;&#x5217;&#x7684;&#x76F8;&#x8BC6;&#x5EA6;&#xFF1F;</h3>
<ol>
<li>&#x751F;&#x6210; time step &#x7684;&#x9884;&#x6D4B;&#x6982;&#x7387;&#xFF08;&#x6709; CRNN &#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF09;&#xFF0C;&#x6BCF;&#x4E2A; time step &#x4F1A;&#x6709;&#x5BF9;&#x7C7B;&#x522B;&#x7684;&#x9884;&#x6D4B;&#x6982;&#x7387;&#x5411;&#x91CF;</li>
<li>&#x901A;&#x8FC7;&#x7B97;&#x6CD5;&#x5C06;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x8DEF;&#x5F84;&#x7684;&#x6982;&#x7387;&#x76F8;&#x52A0;&#xFF0C;&#x5E76;&#x53D6;&#x5BF9;&#x6570;&#xFF08;&#x901A;&#x5E38;&#x7528;&#x4E8E;&#x6570;&#x503C;&#x7A33;&#x5B9A;&#x6027;&#xFF09;&#x5F97;&#x5230;&#x6700;&#x7EC8;&#x7684;&#x76F8;&#x4F3C;&#x5EA6;&#x5206;&#x6570;&#x3002;
<a href="https://wandb.ai/authors/text-recognition-crnn-ctc/reports/Text-Recognition-With-CRNN-CTC-Network--VmlldzoxNTI5NDI">Reference</a></li>
</ol>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;</h1>
<p>Tensorflow vs Pytorch&#xFF08;&#x7B26;&#x53F7;&#x5F0F;&#xFF08;&#x4E5F;&#x53EB;&#x58F0;&#x660E;&#x5F0F;&#xFF09;&#x4E0E;&#x547D;&#x4EE4;&#x5F0F;&#x7A0B;&#x5E8F;&#xFF09;
&#x547D;&#x4EE4;&#x5F0F;</p>
<ul>
<li>&#x66F4;&#x52A0;&#x7075;&#x6D3B;&#xFF1A;&#x539F;&#x751F;&#x8BED;&#x8A00;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x8DDF;&#x8FD0;&#x884C;&#x65F6;&#x65AD;&#x70B9;</li>
</ul>
<pre><code class="language-python">    <span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
    a = np.ones(<span class="hljs-number">10</span>)
    b = np.ones(<span class="hljs-number">10</span>) * <span class="hljs-number">2</span>
    c = b * a
    d = c + <span class="hljs-number">1</span>
</code></pre>
<p>&#x5BF9;&#x5E94;&#x7B26;&#x53F7;&#x5F0F;&#xFF08;DSL&#xFF09;&#xFF1A;</p>
<ul>
<li>&#x8282;&#x7701;&#x5185;&#x5B58;&#xFF1A;&#x638C;&#x63A7;&#x5168;&#x5C40;&#x7684;&#x5185;&#x5B58;&#x5206;&#x6790;&#x5E76;&#x4F18;&#x5316;</li>
</ul>
<pre><code class="language-python">    A = Variable(<span class="hljs-string">&apos;A&apos;</span>)
    B = Variable(<span class="hljs-string">&apos;B&apos;</span>)

    <span class="hljs-comment"># &#x5F53;&#x6267;&#x884C; C = B * A &#x65F6;&#xFF0C;&#x4E0D;&#x4F1A;&#x53D1;&#x751F;&#x4EFB;&#x4F55;&#x8BA1;&#x7B97;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6B64;&#x64CD;&#x4F5C;&#x4F1A;&#x751F;&#x6210;&#x8868;&#x793A;&#x8BA1;&#x7B97;&#x7684;&#x8BA1;&#x7B97;&#x56FE;&#xFF08;&#x4E5F;&#x79F0;&#x4E3A;&#x7B26;&#x53F7;&#x56FE;&#xFF09;</span>
    C = B * A 
    D = C + Constant(<span class="hljs-number">1</span>)

    <span class="hljs-comment"># compiles the function &#x5E76;&#x771F;&#x6B63;&#x7684;&#x6267;&#x884C;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;</span>
    f = <span class="hljs-built_in">compile</span>(D) 
    d = f(A=np.ones(<span class="hljs-number">10</span>), B=np.ones(<span class="hljs-number">10</span>)*<span class="hljs-number">2</span>)
</code></pre>
<p>&#x7B26;&#x53F7;&#x56FE;&#xFF1A;<img src="https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/prog_model/comp_graph.png" alt="&#x7B26;&#x53F7;&#x56FE;"></p>
<p>&#x7C7B;&#x6BD4;&#xFF1A;&#x7C7B;&#x4F3C; react jsx&#x547D;&#x4EE4;&#x5F0F;&#xFF08;&#x76F4;&#x63A5;&#x96BE;&#x4F18;&#x5316;&#xFF09;&#x6A21;&#x677F;&#x8DDF; vue &#x7684;&#x58F0;&#x660E;&#x5F0F;&#xFF08;&#x771F;&#x6B63;&#x6267;&#x884C;&#x524D;&#x80FD;&#x505A;&#x5404;&#x79CD;&#x8FD0;&#x884C;&#x65F6;&#x4F18;&#x5316;&#xFF09;&#x6A21;&#x677F;&#xFF1F;</p>
<p><a href="https://mxnet.apache.org/versions/1.9.1/api/architecture/program_model#:~:text=Symbolic%20Programs%20Tend%20to%20be,flow%20of%20a%20host%20language.">Reference blog</a></p>
<h1 id="&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;"><a href="#&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;"></a>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x5206;&#x7C7B;&#x7684;&#x4E00;&#x70B9;&#x6280;&#x5DE7;</h1>
<ul>
<li>&#x5BF9;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x5206;&#x7C7B;
<ul>
<li>&#x6709;&#x7279;&#x5F81;&#xFF1A;&#x76F4;&#x63A5;&#x901A;&#x8FC7;&#x5DF2;&#x7ECF;&#x6709;&#x7684;&#x5206;&#x7C7B;&#x8FDB;&#x884C;&#x7ED8;&#x5236;&#x56FE;
<ul>
<li>&#x5148;&#x901A;&#x8FC7;&#x7279;&#x5F81;&#x7EF4;&#x5EA6;&#x7ED8;&#x5236;&#x56FE;&#xFF1B;&#x4F8B;&#x5982;&#xFF1A;&#x6570;&#x636E;&#x96C6;&#x4EC5;&#x5305;&#x542B;&#x4E24;&#x4E2A;&#x5206;&#x79BB;&#x76F8;&#x5F53;&#x660E;&#x663E;&#x7684;&#x805A;&#x7C7B;&#x3002;&#x5176;&#x4E2D;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris setosa&#xFF0C;&#x800C;&#x53E6;&#x4E00;&#x4E2A;&#x7C07;&#x5305;&#x542B; Iris virginica &#x548C; Iris versicolor&#xFF1B;&#x901A;&#x8FC7;&#x7279;&#x5F81;&#x7ED8;&#x5236;&#x51FA;&#x7684;&#x56FE;&#x4F1A;&#x5206;&#x6210;&#x660E;&#x663E;2&#x5806;&#xFF0C;&#x5176;&#x4E2D;&#x4E00;&#x5806;&#x662F;&#x4EA4;&#x9519;2&#x79CD;&#x7C7B;&#x578B; Iris</li>
<li>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x660E;&#x663E;&#x7684;&#x805A;&#x7C7B;&#xFF0C;&#x5E76;&#x4E14;&#x6570;&#x636E;&#x7EF4;&#x5EA6;&#x591A;&#xFF0C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; PCA &#x7B49;&#x65B9;&#x5F0F;&#x964D;&#x7EF4;&#x540E;&#x518D;&#x5206;</li>
</ul>
</li>
<li>&#x65E0;&#x7279;&#x5F81;&#xFF1A;&#x5219;&#x5148;&#x901A;&#x8FC7; KMeans &#x80FD;&#x65B9;&#x5F0F;&#x805A;&#x7C7B;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x6709;&#x7279;&#x5F81;&#x65B9;&#x5F0F;&#x5206;&#x6790;</li>
</ul>
</li>
</ul>
<h1 id="&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"><a href="#&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;"></a>&#x5C1D;&#x8BD5;&#x7406;&#x89E3; ONNX &#xFF08;Open Neural Network Exchange&#xFF09;</h1>
<ul>
<li>&#x662F;&#x4EC0;&#x4E48;&#xFF1F;ONNX = &#xFF08;&#x6A21;&#x578B;&#x672C;&#x8EAB; + &#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x6743;&#x91CD;&#x8DDF;&#x504F;&#x7F6E;&#xFF09;&#x7684;&#x4E00;&#x79CD;&#x66F4;&#x52A0;&#x62BD;&#x8C61;&#x7684;&#x8868;&#x8FBE;</li>
<li>&#x5982;&#x4F55;&#x8868;&#x793A;&#xFF1F;&#x4F7F;&#x7528;&#x9884;&#x5B9A;&#x4E49;&#x7684; operator&#xFF08;&#x63CF;&#x8FF0;&#x8F93;&#x5165;&#x4E0E;&#x8F93;&#x51FA;&#x7684;&#x5173;&#x7CFB;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;add&#x7B97;&#x5B50;=  inputA + inputB = OutputC&#xFF0C;&#x53EF;&#x62D3;&#x5C55;&#xFF09;&#x6765;&#x63CF;&#x8FF0;&#x6A21;&#x578B;&#xFF0C;&#x7528;&#x5411;&#x91CF;&#x63CF;&#x8FF0;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x53C2;&#x6570;</li>
<li>&#x4F5C;&#x7528;&#xFF1F;&#x5B9E;&#x73B0;&#x4E0D;&#x540C;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6846;&#x67B6;&#x548C;&#x5E73;&#x53F0;&#x4E4B;&#x95F4;&#x7684;&#x6A21;&#x578B;&#x4E92;&#x64CD;&#x4F5C;&#x6027;</li>
<li>&#x4E3A;&#x4EC0;&#x4E48; pytorch &#x5728;&#x5BFC;&#x51FA; ONNX &#x7684;&#x65F6;&#x5019;&#x9700;&#x8981;&#x4F20;&#x5165;&#x4E00;&#x7EC4;&#x8F93;&#x5165;&#xFF1F;&#x539F;&#x56E0;&#xFF1A;
<ul>
<li>ONNX &#x5E76;&#x975E;&#x50CF;&#x7F16;&#x8BD1;&#x5668;&#x4E00;&#x6837;&#x5F7B;&#x5E95;&#x89E3;&#x6790;&#x539F;&#x6A21;&#x578B;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x8BB0;&#x5F55;&#x6240;&#x6709;&#x63A7;&#x5236;&#x6D41;&#xFF1B;&#x800C;&#x662F;&#x4E0D;&#x8003;&#x8651;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x9759;&#x6001;&#x56FE;</li>
<li>&#x800C;&#x662F;&#x5229;&#x7528; pytorch trace &#x673A;&#x5236;&#xFF0C;&#x5C06;&#x53C2;&#x6570;&#x4F20;&#x5165;&#x6A21;&#x578B;&#x6267;&#x884C;&#xFF0C;&#x5E76;&#x8BB0;&#x5F55;&#x6267;&#x884C;&#x8FD9;&#x7EC4;&#x8F93;&#x5165;&#x5BF9;&#x5E94;&#x7684;&#x8BA1;&#x7B97;&#x56FE;</li>
</ul>
</li>
</ul>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Epoch &#x548C; Batch</h1>
<ol>
<li>Epoch &#x662F;&#x4EC0;&#x4E48;&#xFF1F;
&#x4E00;&#x6B21; Epoch = &#x8BA9;&#x6240;&#x6709;&#x6570;&#x636E;&#x901A;&#x8FC7;&#x6A21;&#x578B;&#x6B63;&#x5411;+&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x4E00;&#x6B21; = &#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x5B66;&#x4E60;&#x5468;&#x671F;</li>
<li>Epoch &#x8BBE;&#x7F6E;&#x591A;&#x5C11;&#x6B21;&#x5408;&#x9002;&#xFF1F;
&#x65E0;&#x5B9A;&#x8BBA;&#xFF1A;
&#x6B21;&#x6570;&#x5C11;&#x4F1A;&#x5BFC;&#x81F4;&#x6B20;&#x62DF;&#x5408;&#xFF1B;
&#x6B21;&#x6570;&#x591A;&#x4F1A;&#x5BFC;&#x81F4;&#x8FC7;&#x62DF;&#x5408;&#xFF1B;</li>
<li>&#x4EC0;&#x4E48;&#x662F; Batch&#xFF1F;
Batch Size = &#x4E00;&#x6B21;&#x8BAD;&#x7EC3;&#x7684;&#x6837;&#x672C;&#x6570;
&#x6BCF;&#x4E00;&#x6B21;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x6240;&#x9700;&#x8981;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5E76;&#x4E0D;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x6570;&#x636E;&#x83B7;&#x5F97;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x7531;&#x4E00;&#x6279;&#x6570;&#x636E;&#x52A0;&#x6743;&#x5F97;&#x5230;&#x7684;</li>
<li>Batch &#x7684;&#x4F5C;&#x7528;&#xFF1F;</li>
</ol>
<ul>
<li>&#x6548;&#x7387;&#xFF1A;&#x5229;&#x7528;&#x77E9;&#x9635;&#x8BA1;&#x7B97;&#x52A0;&#x901F;&#xFF08;&#x76F8;&#x5BF9;&#x4E8E;&#x5355;&#x4E2A;&#x53BB;&#x8BAD;&#x7EC3;&#xFF09;</li>
<li>&#x7A33;&#x5B9A;&#x6027;&#xFF1A;&#x5E73;&#x5747;&#x6BCF;&#x4E2A;&#x6570;&#x636E;&#x6837;&#x672C;&#x7684;&#x8D21;&#x732E;&#xFF0C;&#x51CF;&#x5C11;&#x68AF;&#x5EA6;&#x7684;&#x65B9;&#x5DEE;</li>
<li>&#x591A;&#x5927;&#x5408;&#x9002;&#xFF1A;&#x770B;&#x60C5;&#x51B5;&#xFF0C;&#x592A;&#x5C0F;&#x4F1A;&#x5BFC;&#x81F4;&#x8BAD;&#x7EC3;&#x592A;&#x4E45;&#xFF1B;&#x592A;&#x5927;&#x4F1A;&#x5BFC;&#x81F4;&#x5185;&#x5B58;&#x53D7;&#x4E0D;&#x4E86;</li>
</ul>
<p>Reference</p>
<ul>
<li><a href="https://towardsdatascience.com/epoch-vs-iterations-vs-batch-size-4dfb9c7ce9c9">epoch-vs-iterations-vs-batch-size</a></li>
</ul>
<h1 id="GPT &#x5C1D;&#x8BD5;"><a href="#GPT &#x5C1D;&#x8BD5;"></a>GPT &#x5C1D;&#x8BD5;</h1>
<ol>
<li>&#x4EE3;&#x7801;&#x5C1D;&#x8BD5;
<ul>
<li>&#x91CD;&#x6784;&#x8F6C;&#x6362;
<ul>
<li>&#x8F93;&#x5165; js -&gt; ts</li>
</ul>
</li>
<li>&#x4F18;&#x5316;
<ul>
<li>&#x683C;&#x5F0F;&#x5316;&#x4EE3;&#x7801;</li>
</ul>
</li>
<li>&#x521B;&#x5EFA;
<ul>
<li>&#x521B;&#x5EFA;&#x63D2;&#x4EF6;&#xFF08;eslint&#xFF09;&#x6B65;&#x9AA4;&#xFF1A;&#x5199;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B; -&gt; &#x8F93;&#x5165; gpt -&gt; &#x751F;&#x6210;&#x63D2;&#x4EF6; -&gt; &#x5FAE;&#x8C03;&#x6210;&#x578B;
<ul>
<li>&#x95EE;&#x9898;&#xFF1A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684;&#x4EE3;&#x7801;&#x4F1A;&#x6BD4;&#x8F83;&#x7E41;&#x7410;&#x6216;&#x8005;&#x9690;&#x85CF;&#x903B;&#x8F91;&#x95EE;&#x9898;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x53BB;&#x5229;&#x7528;&#x7B2C;&#x4E09;&#x65B9;&#x7684;&#x5305;&#x7684;&#x80FD;&#x529B;</li>
<li>&#x76EE;&#x524D;&#x65B9;&#x6848;&#xFF1A;&#x9700;&#x8981; developer &#x627E;&#x5230;&#x66F4;&#x4FBF;&#x6377;&#x7684;&#x65B9;&#x5F0F;&#x518D;&#x53BB;&#x6295;&#x5582;&#x7ED9; gpt &#x751F;&#x6210;&#x66F4;&#x52A0;&#x5408;&#x7406;&#x7B80;&#x6D01;&#x7684;&#x4EE3;&#x7801;</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
<h1 id="CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;"><a href="#CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;"></a>CNN &#x7684;&#x7B80;&#x5355;&#x7406;&#x89E3;</h1>
<ul>
<li>&#x7F51;&#x7EDC;&#x8D8A;&#x6DF1;&#xFF0C;&#x5B66;&#x4E60;&#x7684;&#x77E5;&#x8BC6;&#x8D8A;&#x62BD;&#x8C61;&#xFF1A;&#x6BD4;&#x5982;&#x7B2C;&#x4E00;&#x5C42;hidden layer&#x8D1F;&#x8D23;&#x7F16;&#x7801;&#x8BF8;&#x5982;&#x70B9;&#x3001;&#x7EBF;&#x3001;&#x8FB9;&#x7F18;&#x7B49;&#x6D45;&#x5C42;&#x4FE1;&#x606F;&#xFF1B;&#x7B2C;&#x4E8C;&#x5C42;hidden layer&#x7F16;&#x7801;&#x7B80;&#x5355;&#x70B9;&#x7684;&#x7EB9;&#x7406;&#x3001;&#x5F62;&#x72B6;&#x7B49;&#x4FE1;&#x606F;&#xFF1B;&#x7B2C;&#x4E09;&#x5C42;hidden layer&#x7F16;&#x7801;&#x8BF8;&#x5982;&#x773C;&#x775B;&#x3001;&#x9F3B;&#x5B50;&#x7B49;&#x76EE;&#x6807;&#x7684;&#x5F62;&#x72B6;...&#xFF0C;&#x7136;&#x540E;&#x9010;&#x5C42;&#x5B66;&#x4E60;&#xFF0C;&#x4E0D;&#x65AD;&#x5730;&#x63D0;&#x53D6;&#x62BD;&#x8C61;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x4E00;&#x6C14;&#x5475;&#x6210;&#xFF0C;&#x6700;&#x7EC8;&#x5B66;&#x4F1A;&#x4E86;&#x8FA8;&#x8BC6;&#x82B1;&#x8349;&#x6811;&#x6728;&#x3001;&#x98DE;&#x79BD;&#x8D70;&#x517D;&#x7B49;&#x7B49;&#x3002; - <a href="https://zhuanlan.zhihu.com/p/112513743">reference</a>
<ul>
<li>&#x7F51;&#x7EDC;&#x8D8A;&#x5BBD;&#xFF0C;&#x6BCF;&#x4E00;&#x5C42;&#x5B66;&#x4E60;&#x7684;&#x77E5;&#x8BC6;&#x8D8A;&#x4E30;&#x5BCC;&#xFF1A;&#x589E;&#x52A0;&#x7F51;&#x7EDC;&#x7684;&#x5BBD;&#x5EA6;&#x610F;&#x5473;&#x7740;&#x540C;&#x4E00;&#x4E2A;hidden layer&#x6709;&#x7740;&#x66F4;&#x591A;&#x7684;&#x795E;&#x7ECF;&#x5143;&#xFF0C;&#x6BCF;&#x4E00;&#x4E2A;&#x795E;&#x7ECF;&#x5143;&#x4EE3;&#x8868;&#x4E00;&#x79CD;&#x989C;&#x8272;&#xFF0C;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x4E00;&#x79CD;&#x7EB9;&#x7406;&#xFF0C;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#x4FBF;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5230;&#x66F4;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x989C;&#x8272;&#x4FE1;&#x606F;&#xFF0C;&#x5404;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x65B9;&#x5411;&#x4EE5;&#x53CA;&#x4E0D;&#x540C;&#x9891;&#x7387;&#x7684;&#x6761;&#x7EB9;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
</li>
</ul>
<h1 id="&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x4FE1;&#x606F;</h1>
<ul>
<li>&#x751F;&#x6210;&#x5BF9;&#x6297;&#x7F51;&#x7EDC;&#xFF08;GAN&#xFF09; VS &#x53D8;&#x5206;&#x81EA;&#x7F16;&#x7801;&#x5668;&#xFF08;VAE&#xFF09;&#xFF1A; GAN &#x503E;&#x5411;&#x4E8E;&#x751F;&#x6210;&#x903C;&#x771F;&#x7684;&#x5408;&#x6210;&#x6837;&#x672C;&#xFF0C;&#x800C; VAE &#x503E;&#x5411;&#x4E8E;&#x751F;&#x6210;&#x5177;&#x6709;&#x4E00;&#x5B9A;&#x7A0B;&#x5EA6;&#x591A;&#x6837;&#x6027;&#x7684;&#x6837;&#x672C;&#x3002;&#x5982;&#x679C;&#x671F;&#x671B;&#x751F;&#x6210;&#x7279;&#x5B9A;&#x76EE;&#x6807;&#x6837;&#x672C;&#xFF0C;&#x53EF;&#x4EE5;&#x8003;&#x8651; CGAN &#x8DDF; CVAE* <a href="https://easyai.tech/ai-definition/gan/">GAN &#x57FA;&#x672C;&#x539F;&#x7406;&#x53CA;&#x5176;&#x5E94;&#x7528;</a></li>
<li>DALL-E uses Discrete Variational Autoencoder (dVAE) for this step. dVAE is a variant of traditional Variational Autoencoder (VAE) that operates in a discrete latent space. It is similar to VQ-VAE but uses distribution instead of nearest neighbor.</li>
<li><a href="https://blog.csdn.net/lsb2002/article/details/135320751">VIT</a> - Google&#x63A8;&#x51FA;&#x4E86;VIT&#xFF08;Vision Transformer&#xFF09;&#xFF1A;&#x4E00;&#x4E2A;&#x548C;Bert&#x51E0;&#x4E4E;&#x4E00;&#x81F4;&#xFF0C;&#x540C;&#x65F6;&#x4E0D;&#x6DFB;&#x52A0;&#x4EFB;&#x4F55;&#x5377;&#x79EF;&#x7ED3;&#x6784;&#x7684;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x6A21;&#x578B;&#x3002;VIT&#x5728;Transformer&#x4E0A;&#x7684;&#x6210;&#x529F;&#xFF0C;&#x8BC1;&#x660E;&#x4E86;&#x53EF;&#x4EE5;&#x7528;&#x7EDF;&#x4E00;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x6765;&#x5904;&#x7406;&#x4E0D;&#x540C;&#x9886;&#x57DF;&#xFF08;&#x8BED;&#x8A00;/&#x56FE;&#x50CF;/&#x89C6;&#x9891;&#xFF09;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x8FDB;&#x800C;&#x5F00;&#x542F;&#x4E86;&#x591A;&#x6A21;&#x6001;&#x6A21;&#x578B;&#x7814;&#x7A76;&#x7684;&#x65B0;&#x7BC7;&#x7AE0;&#x3002;
<ul>
<li><a href="https://www.zhihu.com/question/531529633">vit&#x5F7B;&#x5E95;&#x8D62;&#x4E86; CNN &#x4E48;</a>&#xFF1A;transformer&#x5168;&#x5C40;&#x611F;&#x53D7;&#x91CE;&#xFF0C;&#x5728;&#x5927;&#x56FE;&#x7247;&#x6216;&#x8005;&#x8BF4;&#x627E;&#x4E1C;&#x897F;&#x65F6;&#x6548;&#x679C;&#x597D;&#xFF08;&#x7C7B;&#x4F3C;&#x8FD1;&#x89C6;&#x773C;&#xFF0C;&#x80FD;&#x591F;&#x611F;&#x53D7;&#x56FE;&#x50CF;&#x5927;&#x8F6E;&#x5ED3;&#xFF09;&#x3002;cnn&#x5C40;&#x90E8;&#x611F;&#x53D7;&#x91CE;&#xFF0C;&#x5BF9;&#x7EC6;&#x8282;&#x5904;&#x7406;&#x8F83;&#x597D;&#xFF08;&#x7406;&#x89E3;&#x50CF;&#x7D20;&#x7EA7;&#x522B;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x4F8B;&#x5982; &#x533B;&#x7597;&#x5F71;&#x50CF;&#xFF09;&#x3002;</li>
</ul>
</li>
<li>&#x6587;&#x6458; - &#x9AD8;&#x624B;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x7684;&#x65B9;&#x5F0F;&#x4ECE;&#x6765;&#x90FD;&#x4E0D;&#x662F;&#x7EA0;&#x7ED3;&#x95EE;&#x9898;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x5347;&#x7EF4;&#xFF1B;&#x5347;&#x7EF4;&#x6210;&#x529F;&#xFF0C;&#x95EE;&#x9898;&#x4E5F;&#x5C31;&#x89E3;&#x51B3;&#x4E86;</li>
<li>&#x96F7;&#x519B;2023&#x6F14;&#x8BB2; - &#x5982;&#x4F55;&#x5FEB;&#x901F;&#x5B66;&#x4E60;&#xFF1A;&#x77E5;&#x8BC6;&#x4E0D;&#x5168;&#x662F;&#x7EBF;&#x6027;&#x7684;&#xFF0C;&#x5927;&#x90E8;&#x5206;&#x662F;&#x7F51;&#x72B6;&#x7684;&#xFF0C;&#x77E5;&#x8BC6;&#x70B9;&#x4E4B;&#x95F4;&#x4E0D;&#x4E00;&#x5B9A;&#x6709;&#x7EDD;&#x5BF9;&#x7684;&#x5148;&#x540E;&#x5173;&#x7CFB;&#xFF1B;&#x524D;&#x9762;&#x5185;&#x5BB9;&#x770B;&#x4E0D;&#x61C2;&#xFF0C;&#x8DF3;&#x8FC7;&#x53BB;&#xFF0C;&#x5E76;&#x4E0D;&#x5F71;&#x54CD;&#x5B66;&#x540E;&#x9762;&#x7684;&#xFF1B;&#x540E;&#x9762;&#x7684;&#x5B66;&#x4F1A;&#x4E86;&#xFF0C;&#x6709;&#x65F6;&#x5019;&#x66F4;&#x5BB9;&#x6613;&#x770B;&#x61C2;&#x524D;&#x9762;&#x7684;&#x3002;</li>
</ul>
<h1 id="AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"><a href="#AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;"></a>AGI &#x7684;&#x4E00;&#x70B9;&#x7406;&#x89E3;</h1>
<p>&#x673A;&#x5668;&#x5B66;&#x4E60;&#x8BAD;&#x7EC3;&#x4E86;&#x5F88;&#x591A;&#x6A21;&#x578B;&#xFF0C;&#x800C; LLM &#x53EA;&#x662F;&#x5176;&#x4E2D;&#x4E4B;&#x4E00;&#xFF1B;
ChatGPT &#x4E4B;&#x6240;&#x4EE5;&#x8DDF; AGI &#x6700;&#x63A5;&#x8FD1;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x7684;&#x901A;&#x7528;&#x6027;&#xFF1B;
&#x5982;&#x679C;&#x80FD;&#x591F;&#x7406;&#x89E3;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#xFF0C;&#x90A3;&#x5C31;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x6240;&#x6709;&#x6587;&#x5B57;&#x80FD;&#x591F;&#x63CF;&#x8FF0;&#x7684;&#x4EFB;&#x52A1;&#xFF1B;
&#x5176;&#x4ED6; AI &#x4EFB;&#x52A1;&#xFF0C;&#x6BD4;&#x5982;&#x56FE;&#x7247;&#x8BC6;&#x522B;&#xFF0C;&#x5219;&#x53EA;&#x80FD;&#x505A;&#x5230;&#x56FE;&#x7247;&#x76F8;&#x4F3C;&#x5EA6;&#x80FD;&#x4EBA;&#x7269;&#x5904;&#x7406;&#xFF08;&#x63A8;&#x8350;&#xFF09;&#xFF0C;&#x65E0;&#x6CD5;&#x62D3;&#x5C55;&#x5230;&#x76F8;&#x5BF9;&#x901A;&#x7528;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x9664;&#x975E;&#x65E5;&#x5E38;&#x4EA4;&#x6D41;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x8868;&#x60C5;&#x5305;&#x5B8C;&#x6210;</p>
<h1 id="gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;"><a href="#gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;"></a>gpt &#x53EF;&#x80FD;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;</h1>
<ul>
<li>&#x5EFA;&#x8BBE;&#x9AD8;&#x96BE;&#x5EA6;&#x7684;&#x7EFC;&#x5408;&#x4EFB;&#x52A1;&#x8BC4;&#x6D4B;&#x6570;&#x636E;&#x96C6;&#xFF08;LLM &#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF0C;&#x8D8A;&#x5B8C;&#x5907; -&gt; &#x8D8A;&#x5F3A;&#x5927;&#xFF09;</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x5DE5;&#x7A0B;&#xFF08;&#x5BC6;&#x96C6;+&#x591A;&#x6837;&#x6027;&#xFF09;&#xFF1A;LLM &#x8FDB;&#x5316; = &#x66F4;&#x591A;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;
<ul>
<li>&#x6570;&#x636E;&#x4F8B;&#x5B50;
<ul>
<li>&#x5BC6;&#x5EA6;&#x6781;&#x9AD8;&#x7684;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#xFF1A;wiki</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x95EE;&#x7B54;&#xFF1A;quora&#xFF0C;&#x77E5;&#x4E4E;</li>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x56FE;&#x7247;&#xFF1A;</li>
</ul>
</li>
<li>&#x601D;&#x8003;
<ul>
<li>&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x6D88;&#x8017;&#x5B8C;&#x540E; gpt &#x5982;&#x4F55;&#x8FDB;&#x5316;&#xFF1F;</li>
<li>&#x80FD;&#x5426;&#x81EA;&#x5DF1;&#x521B;&#x9020;&#x77E5;&#x8BC6;&#x81EA;&#x5DF1;&#x6D88;&#x8D39;&#xFF08;&#x7C7B;&#x4F3C; alpha-go &#x81EA;&#x6211;&#x5BF9;&#x5F08;&#x7684;&#x8FDB;&#x5316;&#xFF09;&#xFF1F;</li>
<li>&#x5982;&#x679C; gpt &#x6210;&#x957F;&#x7684;&#x8D44;&#x6599;&#x6765;&#x6E90;&#x4E8E;&#x4EBA;&#x7C7B;&#xFF0C;&#x90A3;&#x80FD;&#x5426;&#x7A81;&#x7834;&#x4EBA;&#x7C7B;&#x77E5;&#x8BC6;&#x7684;&#x8FB9;&#x754C;&#xFF1F;</li>
</ul>
</li>
</ul>
</li>
<li>&#x63A2;&#x7D22; LLM &#x6A21;&#x578B;&#x7684;&#x89C4;&#x6A21;&#x5929;&#x82B1;&#x677F;&#xFF1A;&#x5927;&#x6A21;&#x578B;&#x5927;&#x6570;&#x636E;&#xFF0C;&#x80FD;&#x53C2;&#x4E0E;&#x7684;&#x73A9;&#x5BB6;&#x4E0D;&#x591A;
<ul>
<li>&#x601D;&#x8003;&#xFF1A;&#x662F;&#x5426;&#x4F1A;&#x51FA;&#x73B0;&#x5171;&#x5EFA;&#x8D85;&#x5927;&#x6A21;&#x578B;</li>
</ul>
</li>
<li>&#x589E;&#x5F3A; LLM &#x7684;&#x590D;&#x6742;&#x63A8;&#x7406;&#x80FD;&#x529B;</li>
<li>LLM &#x7EB3;&#x5165; NLP&#x4E4B;&#x5916;&#x66F4;&#x591A;&#x5176;&#x5B83;&#x7814;&#x7A76;&#x9886;&#x57DF;&#xFF1A;&#x591A;&#x6A21;&#x6001;&#xFF1F;
<ul>
<li>&#x5982;&#x4F55;&#x7A81;&#x7834;&#x7B26;&#x53F7;&#x9886;&#x57DF;&#xFF1F;&#x5982;&#x679C;&#x67D0;&#x4E2A;&#x9886;&#x57DF;&#x662F;&#x975E;&#x6210;&#x6587;&#x7684;&#xFF0C;&#x4E0D;&#x80FD;&#x7528;&#x7B26;&#x53F7;&#x8BB0;&#x5F55;&#x8868;&#x8FBE;&#xFF0C;&#x90A3;&#x4E48; GPT &#x662F;&#x5426;&#x5C31;&#x65E0;&#x80FD;&#x4E3A;&#x529B;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x4EBA;&#x7C7B;&#x7684;&#x5F88;&#x591A;&#x5FC3;&#x7406;&#x6D3B;&#x52A8;&#x3001;&#x6F5C;&#x610F;&#x8BC6;&#x3001;&#x7075;&#x611F;&#x3001;&#x987F;&#x609F;&#x7B49;&#x7B49;&#xFF0C;GPT &#x5982;&#x4F55;&#x6A21;&#x62DF;&#x751F;&#x6210;&#x3002;</li>
</ul>
</li>
<li>&#x66F4;&#x6613;&#x7528;&#x7684;&#x4EBA;&#x548C;LLM&#x7684;&#x4EA4;&#x4E92;&#x63A5;&#x53E3;&#xFF1A;&#x542C;&#x89C9;&#xFF1F;</li>
<li>&#x8D85;&#x5927;LLM&#x6A21;&#x578B;Transformer&#x7684;&#x7A00;&#x758F;&#x5316;&#xFF1A;&#x76F8;&#x540C;&#x7B97;&#x529B;&#x4E0B;&#x63D0;&#x9AD8;&#x8BAD;&#x7EC3;&#x901F;&#x5EA6;</li>
</ul>
<p>&#x53C2;&#x8003;</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/597586623">&#x901A;&#x5411;AGI&#x4E4B;&#x8DEF;&#xFF1A;&#x5927;&#x578B;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;LLM&#xFF09;&#x6280;&#x672F;&#x7CBE;&#x8981;</a></li>
</ul>
<h1 id="&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1"><a href="#&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1"></a>&#x5173;&#x4E8E; chatGPT &#x5F15;&#x53D1;&#x7684;&#x4EBA;&#x5DE5;&#x667A;&#x80FD;&#x601D;&#x8003; 2023-3-1</h1>
<ul>
<li>&#x4EBA;&#x8DDF;AI&#x7684;&#x5173;&#x7CFB;&#xFF1A;&#x6DD8;&#x6C70;&#x8FD8;&#x662F;&#x4E92;&#x8865;&#xFF1F;
<ul>
<li>&#x4EBA;&#x6709;&#x81EA;&#x4E3B;&#x76EE;&#x7684;&#x6027;&#xFF08;AI&#x6682;&#x65E0;&#xFF09;&#xFF0C;AI&#x662F;&#x5B9E;&#x73B0;&#x76EE;&#x7684;&#x7684;&#x5DE5;&#x5177;&#xFF1B;</li>
</ul>
</li>
<li>&#x63D0;&#x95EE;&#x8DDF;&#x56DE;&#x7B54;&#x80FD;&#x529B;&#xFF0C;&#x54EA;&#x4E2A;&#x66F4;&#x80FD;&#x751F;&#x5B58;&#x4E0B;&#x6765;&#xFF1F;
<ul>
<li>&#x5F80;&#x540E;&#x63D0;&#x51FA;&#x597D;&#x95EE;&#x9898;&#x80FD;&#x529B;&#x7684;&#x91CD;&#x8981;&#x6027;&#x5C06;&#x8D8A;&#x6765;&#x8D8A;&#x8D85;&#x8FC7;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x80FD;&#x529B;</li>
</ul>
</li>
<li>&#x6559;&#x80B2;
<ul>
<li>&#x6295;&#x5582;&#x7B54;&#x6848;&#x7684;&#x6559;&#x80B2;&#x6A21;&#x5F0F;&#x9700;&#x8981;&#x53D8;&#x9769; -&gt; &#x628A;&#x63D0;&#x95EE;&#x80FD;&#x529B;&#x5217;&#x5165;&#x8003;&#x6838;&#x6807;&#x51C6;&#xFF0C;&#x66F4;&#x80FD;&#x57F9;&#x517B;&#x51FA;&#x4EBA;&#x673A;&#x534F;&#x4F5C;&#x4EBA;&#x624D;</li>
<li>&#x8BA9;&#x4EBA;&#x5229;&#x7528;&#x673A;&#x5668;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x628A;&#x4EBA;&#x57F9;&#x517B;&#x6210;&#x673A;&#x5668;</li>
<li>&#x6587;&#x7406;&#x5206;&#x79D1;&#x8FD9;&#x79CD;&#x6559;&#x80B2;&#x6A21;&#x5F0F;&#x6025;&#x8FEB;&#x9700;&#x8981;&#x6539;&#x53D8;&#xFF1A;chatGPT &#x9700;&#x8981;&#x6587;&#x7406;&#x7ED3;&#x5408;&#xFF0C;&#x63D0;&#x597D;&#x95EE;&#x9898;&#xFF0C;&#x540C;&#x65F6;&#x8BA4;&#x6E05;&#x7B54;&#x6848;</li>
</ul>
</li>
</ul>
<h1 id="chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;&#x53C2;&#x8003;&#xFF09;"><a href="#chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;&#x53C2;&#x8003;&#xFF09;"></a>chatGPT &#x884D;&#x751F;&#x7684;&#x672A;&#x6765;&#x804C;&#x4E1A;&#xFF1F;&#xFF08;&#x66F4;&#x65B0; 2023-3-13&#xFF0C;<a href="https://www.youtube.com/watch?v=UsaZhQ9bY2k">&#x53C2;&#x8003;</a>&#xFF09;</h1>
<p>&#x573A;&#x666F;&#x8DDF;&#x95EE;&#x9898;</p>
<ul>
<li>&#x66F4;&#x7CBE;&#x51C6;&#x63D0;&#x51FA;&#x9700;&#x6C42;&#xFF0C;&#x624D;&#x80FD;&#x5229;&#x7528;&#x597D; chatGPT</li>
<li>&#x8F85;&#x52A9; chatGPT &#x4FEE;&#x6B63;&#x56DE;&#x7B54;&#x9519;&#x8BEF;&#xFF0C;&#x540C;&#x65F6;&#x53C8;&#x4E0D;&#x5F71;&#x54CD;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7684;&#x5176;&#x4ED6;&#x7B54;&#x6848;</li>
<li>&#x68C0;&#x6D4B;&#x56DE;&#x7B54;&#x662F;&#x5426;&#x7531;&#x673A;&#x5668;&#x751F;&#x6210;</li>
<li>&#x5982;&#x4F55;&#x907F;&#x514D; chatGPT &#x6CC4;&#x5BC6;&#xFF0C;&#x5982;&#x4F55;&#x505A;&#x9690;&#x79C1;&#x4FDD;&#x62A4;&#xFF08;&#x76EE;&#x524D;&#x53EF;&#x4EE5; chatGPT &#x88AB;&#x50AC;&#x7720;&#x7136;&#x540E;&#x7A81;&#x7834;&#x672C;&#x8EAB;&#x4E0D;&#x6CC4;&#x5BC6;&#x7684;&#x9650;&#x5236;&#xFF09;</li>
<li>AI &#x8BAD;&#x7EC3;&#xFF0C;&#x907F;&#x514D;&#x4F26;&#x7406;&#x95EE;&#x9898;</li>
<li>AI &#x672C;&#x8EAB;&#x5B89;&#x5168;&#xFF1A;&#x89E3;&#x51B3;&#x63D0;&#x793A;&#x6CE8;&#x5165;&#xFF08;&#x7C7B;&#x4F3C; &#x7F51;&#x9875;&#x7684; xss &#xFF0C;SQL &#x6CE8;&#x5165;&#x7B49;&#xFF09;&#xFF0C;&#x8D8A;&#x72F1;&#x7B49;&#x5B89;&#x5168;&#x95EE;&#x9898;</li>
<li>&#x77E5;&#x8BC6;&#x4EA7;&#x6743;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#xFF1A;AI&#x751F;&#x6210;&#x7684;&#x4E1C;&#x897F;&#x5230;&#x5E95;&#x7B97;&#x4E0D;&#x7B97;&#x4FB5;&#x6743;&#xFF1F;&#xFF08;&#x4F8B;&#x5982;&#x4E4B;&#x524D;&#x7684;&#x722C;&#x522B;&#x4EBA;&#x7F51;&#x7AD9;&#x7684;&#x6570;&#x636E;&#x4F5C;&#x4E3A;&#x81EA;&#x8EAB;&#x7684;&#x5546;&#x4E1A;&#x76C8;&#x5229;&#x4F9D;&#x636E;&#xFF0C;&#x662F;&#x5426;&#x7B97;&#x4FB5;&#x6743;&#xFF1F;&#xFF09;</li>
<li>&#x8D8B;&#x52BF;&#x9884;&#x6D4B;
<ul>
<li>&#x52A8;&#x4F5C;&#xFF08;&#x8FD0;&#x52A8;&#xFF0C;&#x6E38;&#x620F;&#x7B49;&#x6570;&#x636E;&#xFF09;&#x6587;&#x4EF6;&#x5316;&#xFF1A;&#x53EF;&#x4EE5;&#x5BF9;&#x6574;&#x573A;&#x7FBD;&#x6BDB;&#x7403;&#x505A;&#x6587;&#x5B57;&#x6807;&#x8BB0;&#x5E8F;&#x5217;&#x5316;&#xFF0C;&#x7136;&#x540E;&#x8F93;&#x5165; chatGPT&#xFF0C;&#x6700;&#x540E;&#x53EF;&#x4EE5;&#x9884;&#x6D4B;&#x843D;&#x70B9;&#x8DDF;&#x4E2A;&#x4EBA;&#x884C;&#x4E3A;</li>
</ul>
</li>
</ul>
<p>&#x804C;&#x4E1A;&#x540D;&#xFF1F;</p>
<ul>
<li>&#x6807;&#x6CE8;&#x5E08;&#xFF1A;&#x6807;&#x8BB0;&#x4FE1;&#x606F;&#xFF0C;&#x6295;&#x5582;&#x5E76;&#x8BAD;&#x7EC3; AI</li>
<li>&#x5B89;&#x5168;&#x5458;&#xFF1A;&#x786E;&#x4FDD; AI &#x4E0D;&#x88AB;&#x653B;&#x7834;</li>
</ul>
<p>gpt&#x81EA;&#x5DF1;&#x7684;&#x56DE;&#x7B54;</p>
<ul>
<li>&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#xFF1A;&#x63D0;&#x793A;&#x662F;&#x4E00;&#x79CD;&#x6307;&#x5BFC;GPT-4&#x751F;&#x6210;&#x5185;&#x5BB9;&#x7684;&#x6587;&#x672C;&#x6216;&#x56FE;&#x50CF;&#xFF0C;&#x901A;&#x5E38;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x7279;&#x6B8A;&#x7684;&#x7B26;&#x53F7;&#x6216;&#x6307;&#x4EE4;&#x3002;&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#x5C31;&#x662F;&#x4E13;&#x95E8;&#x8BBE;&#x8BA1;&#x548C;&#x4F18;&#x5316;&#x63D0;&#x793A;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x9700;&#x8981;&#x4E86;&#x89E3;GPT-4&#x7684;&#x5185;&#x90E8;&#x673A;&#x5236;&#x548C;&#x903B;&#x8F91;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x540C;&#x9886;&#x57DF;&#x548C;&#x573A;&#x666F;&#x4E0B;&#x7528;&#x6237;&#x7684;&#x9700;&#x6C42;&#x548C;&#x504F;&#x597D;&#x3002;&#x63D0;&#x793A;&#x5DE5;&#x7A0B;&#x5E08;&#x53EF;&#x4EE5;&#x4E3A;&#x5404;&#x79CD;&#x5E94;&#x7528;&#x573A;&#x666F;&#x63D0;&#x4F9B;&#x9AD8;&#x8D28;&#x91CF;&#x3001;&#x9AD8;&#x6548;&#x7387;&#x3001;&#x9AD8;&#x5B89;&#x5168;&#x6027;&#x7684;&#x63D0;&#x793A;&#x670D;&#x52A1;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#xFF1A;&#x867D;&#x7136;GPT-4&#x5177;&#x6709;&#x5F3A;&#x5927;&#x7684;&#x751F;&#x6210;&#x80FD;&#x529B;&#xFF0C;&#x4F46;&#x5B83;&#x4E5F;&#x53EF;&#x80FD;&#x4F1A;&#x4EA7;&#x751F;&#x4E00;&#x4E9B;&#x4E0D;&#x5408;&#x9002;&#x6216;&#x6709;&#x5BB3;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x5982;&#x8272;&#x60C5;&#x3001;&#x66B4;&#x529B;&#x3001;&#x6B67;&#x89C6;&#x3001;&#x8C23;&#x8A00;&#x7B49;&#x3002;&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#x5C31;&#x662F;&#x8D1F;&#x8D23;&#x68C0;&#x67E5;&#x548C;&#x8FC7;&#x6EE4;GPT-4&#x751F;&#x6210;&#x5185;&#x5BB9;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#xFF0C;&#x5E76;&#x53CA;&#x65F6;&#x5220;&#x9664;&#x6216;&#x4FEE;&#x6539;&#x4E0D;&#x826F;&#x5185;&#x5BB9;&#x3002;&#x5185;&#x5BB9;&#x5BA1;&#x6838;&#x5458;&#x9700;&#x8981;&#x5177;&#x5907;&#x4E00;&#x5B9A;&#x7684;&#x4E13;&#x4E1A;&#x77E5;&#x8BC6;&#x548C;&#x5224;&#x65AD;&#x80FD;&#x529B;&#xFF0C;&#x4EE5;&#x53CA;&#x826F;&#x597D;&#x7684;&#x9053;&#x5FB7;&#x7D20;&#x517B;&#x548C;&#x8D23;&#x4EFB;&#x5FC3;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#xFF1A;&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#x662F;&#x5229;&#x7528;GPT-4&#x4E3A;&#x5404;&#x79CD;&#x5E73;&#x53F0;&#x548C;&#x6E20;&#x9053;&#x63D0;&#x4F9B;&#x4F18;&#x8D28;&#x5185;&#x5BB9;&#x670D;&#x52A1;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x9700;&#x8981;&#x6839;&#x636E;&#x76EE;&#x6807;&#x53D7;&#x4F17;&#x548C;&#x5E02;&#x573A;&#x9700;&#x6C42;&#xFF0C;&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x63D0;&#x793A;&#x548C;&#x53C2;&#x6570;&#x6765;&#x8C03;&#x7528;GPT-4&#x751F;&#x6210;&#x76F8;&#x5E94;&#x7C7B;&#x578B;&#x548C;&#x98CE;&#x683C;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x5E76;&#x8FDB;&#x884C;&#x7F16;&#x8F91;&#x3001;&#x4F18;&#x5316;&#x548C;&#x53D1;&#x5E03;&#x3002;&#x5185;&#x5BB9;&#x8FD0;&#x8425;&#x5E08;&#x9700;&#x8981;&#x5177;&#x5907;&#x4E00;&#x5B9A;&#x7684;&#x521B;&#x610F;&#x601D;&#x7EF4;&#x548C;&#x6587;&#x6848;&#x80FD;&#x529B;&#xFF0C;&#x4EE5;&#x53CA;&#x5BF9;&#x5404;&#x79CD;&#x5A92;&#x4F53;&#x5E73;&#x53F0;&#x548C;&#x884C;&#x4E1A;&#x52A8;&#x6001;&#x6709;&#x4E00;&#x5B9A;&#x4E86;&#x89E3;&#x3002;</li>
<li>&#x5185;&#x5BB9;&#x521B;&#x4F5C;&#x8005;&#xFF1A;&#x5185;&#x5BB9;&#x521B;&#x4F5C;&#x8005;&#x662F;&#x5229;&#x7528;GPT-4&#x8F85;&#x52A9;&#x81EA;&#x5DF1;&#x8FDB;&#x884C;&#x521B;&#x4F5C;&#x6D3B;&#x52A8;&#x7684;&#x4EBA;&#x5458;&#xFF0C;&#x4ED6;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x81EA;&#x5DF1;&#x60F3;&#x8981;&#x8868;&#x8FBE;&#x6216;&#x4F20;&#x8FBE;&#x7ED9;&#x7528;&#x6237;</li>
</ul>
`,E=[{level:1,title:"AiNotes",children:[]},{level:1,title:"Defeating Nondeterminism in LLM Inference",children:[]},{level:1,title:"《Why Language Models Hallucinate》",children:[]},{level:1,title:"可解释性技术",children:[]},{level:1,title:"LLM 的可解释性研究 > 其他多模态",children:[]},{level:1,title:"不适感让你变强大",children:[]},{level:1,title:"模拟实验",children:[]},{level:1,title:"推理的本质",children:[]},{level:1,title:"Genie 3.0",children:[]},{level:1,title:"MoE",children:[]},{level:1,title:"GPT-5 发布",children:[]},{level:1,title:"OpenAI 开放权重模型 gpt‑oss",children:[]},{level:1,title:"LLM 工具调用与异步推理猜想",children:[]},{level:1,title:"LLM 可解释性研究促进大脑神经科学进步？",children:[]},{level:1,title:"LLM 可解释性",children:[{level:2,title:"人格向量",children:[]},{level:2,title:"字典学习",children:[]}]},{level:1,title:"LLM 的智能来源",children:[]},{level:1,title:"Transformer 理解",children:[]},{level:1,title:"LoRA(low-rank-adapter) and ControlNet",children:[]},{level:1,title:"AI 安全 - 思维链监控",children:[]},{level:1,title:"AI IDE 的演进猜想",children:[]},{level:1,title:"何时需要 Agent，而不是 Call LLM",children:[]},{level:1,title:"LlamaIndex 是多层索引体系（Index over Index）",children:[]},{level:1,title:"Cursor LSP 增强架构",children:[]},{level:1,title:"LlamaIndex + LangChain",children:[]},{level:1,title:"LLM对教育的颠覆到底有多大?",children:[]},{level:1,title:"“暗知识”（Dark Knowledge）是什么？",children:[]},{level:1,title:"AIGC产生的内容“反哺”模型训练会发生什么?",children:[]},{level:1,title:"扣子",children:[]},{level:1,title:"Thinking Mode",children:[]},{level:1,title:"LLM AS a judge",children:[]},{level:1,title:"单/双编码器",children:[]},{level:1,title:"AI 客户端端的发展趋势",children:[]},{level:1,title:"AIGC 发展的一些难点",children:[]},{level:1,title:"LLM 评估",children:[]},{level:1,title:"AI Agent",children:[]},{level:1,title:"LangGraph 是为了自主可控",children:[]},{level:1,title:"chatGPT vs Gemini",children:[]},{level:1,title:"AI CodeReview 感悟",children:[]},{level:1,title:"ChatGPT 图像-安全性-出处查询",children:[]},{level:1,title:"知识图谱原理",children:[]},{level:1,title:"大模型反编译代码",children:[]},{level:1,title:"AI 对技术传播的双重影响",children:[]},{level:1,title:"world labs 图片生成 3D 视频",children:[]},{level:1,title:"supervision",children:[]},{level:1,title:"AI 图片识别中的视觉注入(visual-prompt-injections)",children:[]},{level:1,title:"奇异值分解",children:[]},{level:1,title:"AI DOOM",children:[]},{level:1,title:"人工智能的现状，任务，架构 与统一",children:[]},{level:1,title:"视频生成训练的演化?",children:[]},{level:1,title:"一种快速理解模型的方法",children:[]},{level:1,title:"边界框回归损失",children:[]},{level:1,title:"机器学习基础数据集",children:[]},{level:1,title:"神经网络逐步取代 SVM 原因",children:[]},{level:1,title:"人脸识别与普通图像识别的训练区别",children:[]},{level:1,title:"scaling law",children:[]},{level:1,title:"Towhee 框架",children:[]},{level:1,title:"VGG 网络",children:[]},{level:1,title:"感知损失（perceptual loss）",children:[]},{level:1,title:"stable diffusion",children:[]},{level:1,title:"神经网络可解释性",children:[]},{level:1,title:"增量学习",children:[]},{level:1,title:"data-centric AI",children:[]},{level:1,title:"核函数",children:[]},{level:1,title:"嵌入层",children:[]},{level:1,title:"机器学习与英语学习",children:[]},{level:1,title:"GAN，VAE，Diffusion 生成模型理解",children:[{level:2,title:"潜空间",children:[]},{level:2,title:"Diffusion vs GAN",children:[]}]},{level:1,title:"Diffusion 模型过程",children:[]},{level:1,title:"理解 VAE",children:[]},{level:1,title:"深度学习优化器",children:[]},{level:1,title:"反向传播",children:[]},{level:1,title:"CGAN MNIST 训练步骤",children:[]},{level:1,title:"预处理",children:[]},{level:1,title:"损失函数",children:[{level:2,title:"交叉熵",children:[{level:3,title:"问题",children:[]}]}]},{level:1,title:"Transformer",children:[{level:2,title:"positional encoding",children:[]},{level:2,title:"self-attention",children:[]}]},{level:1,title:"one hot 编码",children:[{level:2,title:"例子",children:[]},{level:2,title:"实现",children:[]},{level:2,title:"CRNN + CTC 解决变长文本识别",children:[{level:3,title:"CTC 如何计算预测序列跟目标序列的相识度？",children:[]}]}]},{level:1,title:"深度学习编程范式",children:[]},{level:1,title:"机器学习分类的一点技巧",children:[]},{level:1,title:"尝试理解 ONNX （Open Neural Network Exchange）",children:[]},{level:1,title:"深度学习中的 Epoch 和 Batch",children:[]},{level:1,title:"GPT 尝试",children:[]},{level:1,title:"CNN 的简单理解",children:[]},{level:1,title:"一句话信息",children:[]},{level:1,title:"AGI 的一点理解",children:[]},{level:1,title:"gpt 可能的研究方向",children:[]},{level:1,title:"关于 chatGPT 引发的人工智能思考 2023-3-1",children:[]},{level:1,title:"chatGPT 衍生的未来职业？（更新 2023-3-13，参考）",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
