const x={},F=`<h1 id="Context Engineering for AI Agents: Lessons from Building Manus"><a href="#Context Engineering for AI Agents: Lessons from Building Manus"></a><a href="https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus">Context Engineering for AI Agents: Lessons from Building Manus</a></h1>
<p>&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x662F; Manus &#x56E2;&#x961F;&#x57FA;&#x4E8E;&#x6784;&#x5EFA;&#x901A;&#x7528; AI Agent&#xFF08;Manus&#xFF09;&#x7684;&#x5B9E;&#x6218;&#x7ECF;&#x9A8C;&#xFF0C;&#x5206;&#x4EAB;&#x5173;&#x4E8E;**&#x4E0A;&#x4E0B;&#x6587;&#x5DE5;&#x7A0B;&#xFF08;Context Engineering&#xFF09;**&#x7684;&#x6DF1;&#x5EA6;&#x6280;&#x672F;&#x6587;&#x7AE0;&#x3002;</p>
<p><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;</strong>&#xFF1A;
&#x5728;&#x6784;&#x5EFA;&#x590D;&#x6742;&#x7684; Agent &#x7CFB;&#x7EDF;&#x65F6;&#xFF0C;<strong>Context Engineering&#xFF08;&#x4E0A;&#x4E0B;&#x6587;&#x5DE5;&#x7A0B;&#xFF09;&#x6BD4; Prompt Engineering &#x66F4;&#x91CD;&#x8981;</strong>&#x3002;&#x4E0D;&#x4EC5;&#x4EC5;&#x662F;&#x201C;&#x5199;&#x597D;&#x63D0;&#x793A;&#x8BCD;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x8981;&#x50CF;&#x7BA1;&#x7406;&#x5185;&#x5B58;&#x4E00;&#x6837;&#xFF0C;&#x7CBE;&#x5FC3;&#x8BBE;&#x8BA1;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x7ED3;&#x6784;&#x3001;&#x5B58;&#x50A8;&#x548C;&#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</p>
<ul>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x662F;&#x7A00;&#x7F3A;&#x8D44;&#x6E90;</strong>&#xFF1A;&#x5C3D;&#x7BA1;&#x6A21;&#x578B;&#x652F;&#x6301; 128k+ &#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4F46;&#x5728;&#x5B9E;&#x9645;&#x5DE5;&#x7A0B;&#x4E2D;&#xFF0C;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x957F;&#x5EA6;&#x76F4;&#x63A5;&#x5173;&#x8054;&#x5230;<strong>&#x6210;&#x672C;&#xFF08;Cost&#xFF09;</strong>&#x3001;<strong>&#x5EF6;&#x8FDF;&#xFF08;Latency&#xFF09;<strong>&#x548C;</strong>&#x51C6;&#x786E;&#x7387;&#xFF08;Accuracy&#xFF09;</strong>&#x3002;</li>
<li><strong>KV-Cache &#x662F;&#x5173;&#x952E;&#x6307;&#x6807;</strong>&#xFF1A;Agent &#x7684;&#x8FD0;&#x884C;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x65AD;&#x5FAA;&#x73AF;&#x7684;&#x8FC7;&#x7A0B;&#xFF08;Loop&#xFF09;&#xFF0C;&#x6BCF;&#x4E00;&#x8F6E;&#x90FD;&#x4F1A;&#x4EA7;&#x751F;&#x65B0;&#x7684; Token&#x3002;&#x5FC5;&#x987B;&#x4F18;&#x5316; KV-Cache &#x7684;&#x547D;&#x4E2D;&#x7387;&#xFF08;Hit Rate&#xFF09;&#xFF0C;&#x907F;&#x514D;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x91CD;&#x65B0;&#x8BA1;&#x7B97;&#x6574;&#x4E2A;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><strong>&#x4FE1;&#x606F;&#x538B;&#x7F29;&#x4E0E;&#x5916;&#x90E8;&#x5316;</strong>&#xFF1A;&#x4E0D;&#x8981;&#x628A;&#x6240;&#x6709;&#x4E1C;&#x897F;&#x90FD;&#x585E;&#x8FDB; Context Window&#xFF0C;&#x5B66;&#x4F1A;&#x4F7F;&#x7528;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x4F5C;&#x4E3A;&#x201C;&#x5916;&#x6302;&#x5185;&#x5B58;&#x201D;&#x3002;</li>
</ul>
<p><strong>&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;</strong>&#xFF1A;</p>
<ol>
<li><strong>&#x9AD8;&#x6602;&#x7684;&#x63A8;&#x7406;&#x6210;&#x672C;&#x4E0E;&#x5EF6;&#x8FDF;</strong>&#xFF1A;&#x5728;&#x957F;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;Input Token &#x8FDC;&#x591A;&#x4E8E; Output Token&#xFF08;&#x6BD4;&#x4F8B;&#x53EF;&#x8FBE; 100:1&#xFF09;&#xFF0C;&#x5982;&#x679C;&#x6BCF;&#x6B21;&#x90FD;&#x5168;&#x91CF;&#x91CD;&#x65B0;&#x5904;&#x7406;&#xFF0C;&#x901F;&#x5EA6;&#x6781;&#x6162;&#x4E14;&#x70E7;&#x94B1;&#x3002;</li>
<li><strong>&#x201C;&#x8FF7;&#x5931;&#x4E2D;&#x95F4;&#x201D;&#xFF08;Lost in the Middle&#xFF09;</strong>&#xFF1A;&#x968F;&#x7740;&#x5BF9;&#x8BDD;&#x53D8;&#x957F;&#xFF0C;Agent &#x5BB9;&#x6613;&#x5FD8;&#x8BB0;&#x6700;&#x521D;&#x7684;&#x76EE;&#x6807;&#x6216;&#x4E0A;&#x4E00;&#x8F6E;&#x7684;&#x51B3;&#x7B56;&#x7EC6;&#x8282;&#x3002;</li>
<li><strong>&#x6A21;&#x5F0F;&#x50F5;&#x5316;&#xFF08;Pattern Collapse&#xFF09;</strong>&#xFF1A;&#x8FC7;&#x591A;&#x7684; Few-Shot &#x793A;&#x4F8B;&#x4F1A;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x523B;&#x677F;&#x6A21;&#x4EFF;&#xFF0C;&#x5931;&#x53BB;&#x7075;&#x6D3B;&#x6027;&#x3002;</li>
<li><strong>&#x9519;&#x8BEF;&#x6062;&#x590D;&#x80FD;&#x529B;&#x5DEE;</strong>&#xFF1A;&#x5F88;&#x591A;&#x7CFB;&#x7EDF;&#x503E;&#x5411;&#x4E8E;&#x9690;&#x85CF;&#x9519;&#x8BEF;&#xFF0C;&#x5BFC;&#x81F4; Agent &#x4E0D;&#x77E5;&#x9053;&#x81EA;&#x5DF1;&#x8BD5;&#x9519;&#x8FC7;&#x4EC0;&#x4E48;&#xFF0C;&#x4ECE;&#x800C;&#x9677;&#x5165;&#x6B7B;&#x5FAA;&#x73AF;&#x3002;</li>
</ol>
<p><strong>&#x6838;&#x5FC3;&#x7B56;&#x7565;&#xFF08;Manus &#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#xFF09;</strong>&#xFF1A;</p>
<ol>
<li><strong>&#x6781;&#x81F4;&#x4F18;&#x5316; KV-Cache&#xFF08;&#x964D;&#x672C;&#x63D0;&#x901F;&#xFF09;</strong>
<ul>
<li><strong>&#x524D;&#x7F00;&#x7A33;&#x5B9A;&#x6027;</strong>&#xFF1A;&#x4FDD;&#x6301; System Prompt &#x548C;&#x65E9;&#x671F;&#x5386;&#x53F2;&#x8BB0;&#x5F55;&#x7EDD;&#x5BF9;&#x4E0D;&#x53D8;&#x3002;</li>
<li><strong>Append-Only &#x539F;&#x5219;</strong>&#xFF1A;&#x4E0D;&#x8981;&#x4FEE;&#x6539;&#x6216;&#x5220;&#x9664;&#x5386;&#x53F2;&#x6D88;&#x606F;&#x3002;</li>
<li><strong>&#x786E;&#x5B9A;&#x6027;&#x5E8F;&#x5217;&#x5316;</strong>&#xFF1A;&#x5DE5;&#x5177;&#x8F93;&#x51FA;&#xFF08;&#x5982; JSON&#xFF09;&#x952E;&#x503C;&#x987A;&#x5E8F;&#x56FA;&#x5B9A;&#x3002;</li>
</ul>
</li>
<li><strong>&#x5916;&#x90E8;&#x5316;&#x8BB0;&#x5FC6;&#xFF08;Externalized Memory&#xFF09;</strong>
<ul>
<li><strong>&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5373;&#x8BB0;&#x5FC6;</strong>&#xFF1A;&#x5C06;&#x957F;&#x5185;&#x5BB9;&#x5199;&#x5165;&#x6587;&#x4EF6;&#xFF0C;Context &#x91CC;&#x53EA;&#x4FDD;&#x7559;&#x8DEF;&#x5F84;&#x3002;</li>
<li><strong>&#x6309;&#x9700;&#x8BFB;&#x53D6;</strong>&#xFF1A;&#x53EA;&#x6709;&#x786E;&#x5B9E;&#x9700;&#x8981;&#x7EC6;&#x8282;&#x65F6;&#x624D;&#x8BFB;&#x53D6;&#x6587;&#x4EF6;&#x5185;&#x5BB9;&#x3002;</li>
</ul>
</li>
<li><strong>&#x4FDD;&#x6301;&#x6CE8;&#x610F;&#x529B;&#x7684;&#x6280;&#x5DE7;</strong>
<ul>
<li><strong>Recitation&#xFF08;&#x80CC;&#x8BF5;/&#x590D;&#x8FF0;&#xFF09;</strong>&#xFF1A;&#x5F3A;&#x5236; Agent &#x7EF4;&#x62A4; <code>todo.md</code>&#xFF0C;&#x6BCF;&#x8F6E;&#x601D;&#x8003;&#x524D;&#x8BFB;&#x53D6;&#xFF0C;&#x660E;&#x786E;&#x5F53;&#x524D;&#x8FDB;&#x5EA6;&#x3002;</li>
<li><strong>&#x4FDD;&#x7559;&#x9519;&#x8BEF;&#x5806;&#x6808;</strong>&#xFF1A;&#x62A5;&#x9519;&#x662F;&#x6781;&#x9AD8;&#x4EF7;&#x503C;&#x7684;&#x53CD;&#x9988;&#x4FE1;&#x53F7;&#xFF0C;&#x80FD;&#x5E2E;&#x52A9; Agent &#x81EA;&#x6211;&#x4FEE;&#x6B63;&#x3002;</li>
</ul>
</li>
<li><strong>&#x5BF9;&#x6297;&#x6A21;&#x5F0F;&#x50F5;&#x5316;</strong>
<ul>
<li><strong>&#x52A8;&#x6001; Few-Shot</strong>&#xFF1A;&#x5F15;&#x5165;&#x968F;&#x673A;&#x6027;&#x6216;&#x7ED3;&#x6784;&#x53D8;&#x5F02;&#xFF0C;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x8FC7;&#x62DF;&#x5408;&#x3002;</li>
</ul>
</li>
</ol>
<p><strong>&#x601D;&#x8003;&#x4E0E;&#x672A;&#x6765;</strong>&#xFF1A;
Manus &#x7684;&#x65B9;&#x6848;&#x662F;&#x5F53;&#x524D;&#x67B6;&#x6784;&#x4E0B;&#x7684;&#x5DE5;&#x7A0B;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x3002;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x7684;&#x65B9;&#x5411;&#xFF1A;</p>
<ul>
<li><strong>&#x67B6;&#x6784;&#x7EA7;&#x6539;&#x8FDB;</strong>&#xFF1A;&#x5982; Linear Attention, SSM (State Space Models) &#x89E3;&#x51B3;&#x957F;&#x5E8F;&#x5217;&#x9057;&#x5FD8;&#x3002;</li>
<li><strong>&#x667A;&#x80FD;&#x538B;&#x7F29;</strong>&#xFF1A;&#x4F7F;&#x7528;&#x5C0F;&#x6A21;&#x578B;&#x5C06;&#x957F;&#x6587;&#x672C;&#x538B;&#x7F29;&#x4E3A; Embedding &#x6216; Summary Tokens&#x3002;</li>
<li><strong>&#x5143;&#x5B66;&#x4E60;</strong>&#xFF1A;Agent &#x62E5;&#x6709;&#x8DE8;&#x4EFB;&#x52A1;&#x7684;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#x3002;</li>
</ul>
<blockquote>
<p><strong>Context is Money.</strong> &#x4E0D;&#x8981;&#x8FF7;&#x4FE1;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x7684;&#x65E0;&#x9650;&#x63D0;&#x5347;&#xFF0C;&#x597D;&#x7684;&#x5DE5;&#x7A0B;&#x67B6;&#x6784;&#xFF08;&#x7279;&#x522B;&#x662F;&#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;&#xFF09;&#x624D;&#x662F;&#x8BA9; Agent &#x4ECE; Demo &#x8D70;&#x5411; Production &#x7684;&#x5173;&#x952E;&#x3002;</p>
</blockquote>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-20</em></p>
`,n=[{level:1,title:"Context Engineering for AI Agents: Lessons from Building Manus",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
