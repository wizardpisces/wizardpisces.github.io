const x={title:"RN 页面还原：六阶段推进",description:"从跑通真实页面开始，通过基线、消融实验和 Case 闭环逐步优化页面生成能力。"},F=`<h1 id="RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;"><a href="#RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;"></a>RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;</h1>
<h2 id="&#x6838;&#x5FC3;&#x601D;&#x8DEF;"><a href="#&#x6838;&#x5FC3;&#x601D;&#x8DEF;"></a>&#x6838;&#x5FC3;&#x601D;&#x8DEF;</h2>
<pre><code class="language-text">&#x8F93;&#x5165;
&#x2192; &#x9875;&#x9762;&#x751F;&#x6210;
&#x2192; &#x8FD0;&#x884C;&#x4E0E;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
&#x2192; &#x6210;&#x529F; / &#x5931;&#x8D25; Case
&#x2192; &#x5206;&#x6790;
&#x2192; &#x4F18;&#x5316; Skill / Tool / Context
&#x2192; &#x4E0B;&#x4E00;&#x8F6E;&#x9875;&#x9762;&#x751F;&#x6210;
</code></pre>
<p>&#x5F53;&#x524D;&#x4E0D;&#x9884;&#x8BBE;&#x5DE5;&#x5177;&#x4EE5;&#x53CA;&#x4E0A;&#x4E0B;&#x6587;&#x6700;&#x7EC8;&#x7EC4;&#x5408;&#xFF0C;&#x5148;&#x8DD1;&#x901A;&#x771F;&#x5B9E;&#x9875;&#x9762;&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x76F8;&#x540C; Case &#x4E0B;&#x7684;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x51B3;&#x5B9A;&#x54EA;&#x4E9B;&#x80FD;&#x529B;&#x4FDD;&#x7559;&#x3002;</p>
<h2 id="&#x516D;&#x4E2A;&#x9636;&#x6BB5;"><a href="#&#x516D;&#x4E2A;&#x9636;&#x6BB5;"></a>&#x516D;&#x4E2A;&#x9636;&#x6BB5;</h2>
<h3 id="&#x9636;&#x6BB5; 1&#xFF1A;&#x63A5;&#x901A;&#x6700;&#x5C0F;&#x57FA;&#x7840;&#x7248;&#x672C;"><a href="#&#x9636;&#x6BB5; 1&#xFF1A;&#x63A5;&#x901A;&#x6700;&#x5C0F;&#x57FA;&#x7840;&#x7248;&#x672C;"></a>&#x9636;&#x6BB5; 1&#xFF1A;&#x63A5;&#x901A;&#x6700;&#x5C0F;&#x57FA;&#x7840;&#x7248;&#x672C;</h3>
<p>&#x5148;&#x628A; RN Screenshot-to-Page &#x63A5;&#x5165;&#x73B0;&#x6709;&#x6D41;&#x7A0B;&#x8282;&#x70B9;&#xFF0C;&#x8BA9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x80FD;&#x591F;&#x4ECE;&#x8F93;&#x5165;&#x8D70;&#x5230;&#x4EA4;&#x4ED8;&#x7ED3;&#x679C;&#x3002;</p>
<pre><code class="language-text">&#x622A;&#x56FE; + &#x9700;&#x6C42; + RN &#x4ED3;&#x5E93; + &#x9A8C;&#x6536;&#x6761;&#x4EF6;
&#x2192; &#x73B0;&#x6709;&#x6D41;&#x7A0B;&#x8282;&#x70B9;
&#x2192; Codex
&#x2192; RN &#x4EE3;&#x7801;&#x53D8;&#x66F4;
&#x2192; &#x53EF;&#x8FD0;&#x884C;&#x9875;&#x9762;
&#x2192; Native / &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
</code></pre>
<p>&#x672C;&#x9636;&#x6BB5;&#x53EA;&#x8981;&#x6C42;&#xFF1A;</p>
<ul>
<li>&#x6D41;&#x7A0B;&#x8282;&#x70B9;&#x80FD;&#x591F;&#x521B;&#x5EFA;&#x5E76;&#x8FD0;&#x884C; RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x4EFB;&#x52A1;&#xFF1B;</li>
<li>Codex &#x80FD;&#x591F;&#x8BBF;&#x95EE;&#x771F;&#x5B9E; RN &#x4ED3;&#x5E93;&#x5E76;&#x5B8C;&#x6210;&#x4EE3;&#x7801;&#x4FEE;&#x6539;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x80FD;&#x591F;&#x5728; Native &#x73AF;&#x5883;&#x8FD0;&#x884C;&#xFF1B;</li>
<li>&#x4FDD;&#x5B58;&#x8F93;&#x5165;&#x3001;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x4EE3;&#x7801;&#x7ED3;&#x679C;&#x3001;&#x4EBA;&#x5DE5;&#x622A;&#x56FE;&#x548C;&#x4EBA;&#x5DE5;&#x8BC4;&#x4EF7;&#x3002;</li>
</ul>
<p>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x8DD1;&#x901A;&#x7684; RN &#x9875;&#x9762;&#xFF0C;&#x4EE5;&#x53CA;&#x7B2C;&#x4E00;&#x4EFD;&#x53EF;&#x4EE5;&#x5206;&#x6790;&#x7684;&#x771F;&#x5B9E; Case&#x3002;</p>
<h3 id="&#x9636;&#x6BB5; 2&#xFF1A;&#x56FA;&#x5B9A; Baseline &#x548C;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;"><a href="#&#x9636;&#x6BB5; 2&#xFF1A;&#x56FA;&#x5B9A; Baseline &#x548C;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;"></a>&#x9636;&#x6BB5; 2&#xFF1A;&#x56FA;&#x5B9A; Baseline &#x548C;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;</h3>
<p>&#x5728;&#x589E;&#x52A0;&#x4EFB;&#x4F55;&#x589E;&#x5F3A;&#x80FD;&#x529B;&#x524D;&#xFF0C;&#x5148;&#x4FDD;&#x5B58;&#x4E00;&#x4EFD;&#x53EF;&#x590D;&#x73B0;&#x7684; Direct Baseline&#xFF0C;&#x5426;&#x5219;&#x540E;&#x7EED;&#x65E0;&#x6CD5;&#x8BC1;&#x660E; Schema&#x3001;Task Brief &#x6216; Tool &#x662F;&#x5426;&#x6709;&#x6548;&#x3002;</p>
<p>&#x9700;&#x8981;&#x56FA;&#x5B9A;&#xFF1A;</p>
<ul>
<li>&#x540C;&#x4E00;&#x4EFD;&#x622A;&#x56FE;&#x3001;&#x9700;&#x6C42;&#x548C;&#x9A8C;&#x6536;&#x6761;&#x4EF6;&#xFF1B;</li>
<li>&#x540C;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93; Commit&#xFF1B;</li>
<li>&#x540C;&#x4E00;&#x79CD;&#x6A21;&#x578B;&#x548C;&#x57FA;&#x7840; Skill&#xFF1B;</li>
<li>&#x76F8;&#x540C;&#x7684;&#x8FD0;&#x884C;&#x4E0E;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x65B9;&#x5F0F;&#xFF1B;</li>
<li>&#x672A;&#x6CE8;&#x5165;&#x5019;&#x9009;&#x589E;&#x5F3A;&#x80FD;&#x529B;&#x65F6;&#x7684;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x3002;</li>
</ul>
<p>Baseline &#x4E0D;&#x8981;&#x6C42;&#x7ED3;&#x679C;&#x5B8C;&#x7F8E;&#xFF0C;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x63D0;&#x4F9B;&#x540E;&#x7EED;&#x5B9E;&#x9A8C;&#x7684;&#x6BD4;&#x8F83;&#x57FA;&#x51C6;&#x3002;</p>
<p>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x540C;&#x4E00;&#x4E2A; Case &#x80FD;&#x591F;&#x91CD;&#x65B0;&#x8FD0;&#x884C;&#xFF0C;&#x5E76;&#x53EF;&#x4EE5;&#x4E0E;&#x540E;&#x7EED;&#x589E;&#x5F3A;&#x7248;&#x672C;&#x8FDB;&#x884C;&#x516C;&#x5E73;&#x6BD4;&#x8F83;&#x3002;</p>
<h3 id="&#x9636;&#x6BB5; 3&#xFF1A;&#x9010;&#x4E2A;&#x589E;&#x52A0;&#x589E;&#x5F3A;&#x80FD;&#x529B;"><a href="#&#x9636;&#x6BB5; 3&#xFF1A;&#x9010;&#x4E2A;&#x589E;&#x52A0;&#x589E;&#x5F3A;&#x80FD;&#x529B;"></a>&#x9636;&#x6BB5; 3&#xFF1A;&#x9010;&#x4E2A;&#x589E;&#x52A0;&#x589E;&#x5F3A;&#x80FD;&#x529B;</h3>
<p>&#x6839;&#x636E;&#x771F;&#x5B9E; Failure Case&#xFF0C;&#x6BCF;&#x6B21;&#x53EA;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#xFF1A;</p>
<pre><code class="language-text">Direct Baseline
&#x2192; + **Page Schema**
&#x2192; + Task Brief
&#x2192; + Material
&#x2192; + BBox
&#x2192; + Skill &#x65B0;&#x89C4;&#x5219;
</code></pre>
<p>&#x6BCF;&#x4E2A;&#x5B9E;&#x9A8C;&#x90FD;&#x9700;&#x8981;&#x56DE;&#x7B54;&#xFF1A;</p>
<ul>
<li>&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x548C;&#x9996;&#x8F6E;&#x901A;&#x8FC7;&#x662F;&#x5426;&#x63D0;&#x5347;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x662F;&#x5426;&#x51CF;&#x5C11;&#xFF1B;</li>
<li>&#x6267;&#x884C;&#x6210;&#x672C;&#x662F;&#x5426;&#x53D8;&#x5316;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x89E3;&#x51B3;&#x4E86;&#x76EE;&#x6807; Failure Case&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x5BF9;&#x5176;&#x4ED6; Case &#x9020;&#x6210;&#x9000;&#x5316;&#x3002;</li>
</ul>
<p>&#x4E0A;&#x8FF0;&#x987A;&#x5E8F;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x65BD;&#x5DE5;&#x987A;&#x5E8F;&#x3002;&#x5148;&#x9A8C;&#x8BC1;&#x54EA;&#x4E2A;&#x589E;&#x5F3A;&#x80FD;&#x529B;&#xFF0C;&#x7531;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x7684;&#x95EE;&#x9898;&#x51B3;&#x5B9A;&#x3002;&#x5DF2;&#x6709;&#x9875;&#x9762;&#x4FEE;&#x6539;&#x4E5F;&#x4F5C;&#x4E3A;&#x72EC;&#x7ACB; Case &#x53C2;&#x4E0E;&#x9A8C;&#x8BC1;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53E6;&#x5EFA;&#x4E00;&#x5957;&#x6D41;&#x7A0B;&#x3002;</p>
<p>&#x5982;&#x679C;&#x771F;&#x5B9E; Case &#x66B4;&#x9732;&#x7684;&#x4E0D;&#x662F;&#x7EC4;&#x4EF6;&#x53EC;&#x56DE;&#x95EE;&#x9898;&#xFF0C;&#x800C;&#x662F;&#x9875;&#x9762;&#x903B;&#x8F91;&#x548C;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x4E0D;&#x7A33;&#x5B9A;&#xFF0C;&#x53EF;&#x4EE5;&#x989D;&#x5916;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x540C;&#x7C7B;&#x9875;&#x9762;&#x7684; Golden Path &#x505A;&#x5355;&#x53D8;&#x91CF;&#x9A8C;&#x8BC1;&#x3002;Golden Path &#x7684;&#x901A;&#x7528;&#x5EFA;&#x8BBE;&#x4E0D;&#x5C5E;&#x4E8E; RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x4E3B;&#x6D41;&#x7A0B;&#x3002;</p>
<p>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x77E5;&#x9053;&#x6BCF;&#x4E2A;&#x589E;&#x5F3A;&#x6A21;&#x5757;&#x5728;&#x54EA;&#x4E9B;&#x573A;&#x666F;&#x6709;&#x6548;&#x3001;&#x65E0;&#x6548;&#x6216;&#x4EA7;&#x751F;&#x526F;&#x4F5C;&#x7528;&#x3002;</p>
<h3 id="&#x9636;&#x6BB5; 4&#xFF1A;&#x5EFA;&#x7ACB; Skill &#x4E0E; Tool &#x4F18;&#x5316;&#x95ED;&#x73AF;"><a href="#&#x9636;&#x6BB5; 4&#xFF1A;&#x5EFA;&#x7ACB; Skill &#x4E0E; Tool &#x4F18;&#x5316;&#x95ED;&#x73AF;"></a>&#x9636;&#x6BB5; 4&#xFF1A;&#x5EFA;&#x7ACB; Skill &#x4E0E; Tool &#x4F18;&#x5316;&#x95ED;&#x73AF;</h3>
<p>&#x521D;&#x7248; Skill &#x548C; Tool &#x7684;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x8BBE;&#x8BA1;&#x5B8C;&#x6574;&#xFF0C;&#x800C;&#x662F;&#x652F;&#x6301;&#x4E0B;&#x9762;&#x7684;&#x8FED;&#x4EE3;&#x8FC7;&#x7A0B;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD0;&#x884C; Case
&#x2192; &#x6536;&#x96C6; Raw Trace&#x3001;Decision Events&#x3001;Execution Report &#x548C;&#x4EBA;&#x5DE5;&#x7ED3;&#x679C;
&#x2192; &#x5B9A;&#x4F4D; Failure Type
&#x2192; &#x63D0;&#x51FA;&#x4E00;&#x4E2A;&#x6539;&#x8FDB;&#x5047;&#x8BBE;
&#x2192; &#x4FEE;&#x6539; Skill / Tool / Context
&#x2192; &#x5728;&#x539F; Case &#x548C;&#x56DE;&#x5F52; Case &#x4E0A;&#x9A8C;&#x8BC1;
&#x2192; &#x4EBA;&#x5DE5;&#x786E;&#x8BA4;
&#x2192; &#x7248;&#x672C;&#x5316;&#x53D1;&#x5E03;&#x6216;&#x56DE;&#x6EDA;
</code></pre>
<p>&#x6539;&#x8FDB;&#x5185;&#x5BB9;&#x5E94;&#x6309;&#x6027;&#x8D28;&#x8FDB;&#x5165;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF1A;</p>
<ul>
<li>&#x7ECF;&#x5E38;&#x51FA;&#x73B0;&#x7684; Agent &#x884C;&#x4E3A;&#x7EA6;&#x675F;&#x8FDB;&#x5165; Skill&#xFF1B;</li>
<li>&#x53EF;&#x91CD;&#x590D;&#x6267;&#x884C;&#x7684;&#x786E;&#x5B9A;&#x6027;&#x80FD;&#x529B;&#x8FDB;&#x5165; Tool&#xFF1B;</li>
<li>&#x53EA;&#x5BF9;&#x90E8;&#x5206;&#x4EFB;&#x52A1;&#x6709;&#x6548;&#x7684;&#x4FE1;&#x606F;&#x4F5C;&#x4E3A;&#x6309;&#x9700; Context&#xFF1B;</li>
<li>&#x5355;&#x6B21;&#x7ECF;&#x9A8C;&#x53EA;&#x7559;&#x5728; Case &#x4E2D;&#xFF0C;&#x4E0D;&#x8FDB;&#x5165;&#x516C;&#x5171;&#x80FD;&#x529B;&#x3002;</li>
</ul>
<p>&#x89C2;&#x6D4B;&#x95ED;&#x73AF;&#x5206;&#x6210;&#x4E09;&#x4E2A;&#x65F6;&#x673A;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD0;&#x884C;&#x4E2D;&#xFF1A;Raw Trace &#x81EA;&#x52A8;&#x8BB0;&#x5F55;&#xFF0C;Decision Events &#x8865;&#x5145;&#x5C11;&#x91CF;&#x5173;&#x952E;&#x51B3;&#x5B9A;
&#x6267;&#x884C;&#x7ED3;&#x675F;&#xFF1A;submit_execution_report &#x4EE5;&#x76F8;&#x540C; taskId &#x4FDD;&#x5B58;&#x672C;&#x5730;&#x8FC7;&#x7A0B;&#x4E0E;&#x7ED3;&#x679C;
&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x540E;&#xFF1A;&#x7ED3;&#x5408;&#x6700;&#x7EC8;&#x8BC4;&#x5206;&#x505A; Case &#x5206;&#x6790;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x6539;&#x8FDB; Skill&#x3001;Tool &#x6216; Context
</code></pre>
<p>&#x8FD0;&#x884C;&#x65F6;&#x53EA;&#x5904;&#x7406;&#x80FD;&#x591F;&#x5F71;&#x54CD;&#x672C;&#x6B21;&#x4EFB;&#x52A1;&#x7684;&#x963B;&#x585E;&#x3001;&#x660E;&#x663E;&#x9519;&#x8BEF;&#x548C;&#x9AD8;&#x98CE;&#x9669;&#x7591;&#x8651;&#xFF1B;&#x9700;&#x8981;&#x5B8C;&#x6574;&#x7ED3;&#x679C;&#x6216;&#x4EBA;&#x5DE5;&#x5224;&#x65AD;&#x7684;&#x5931;&#x8D25;&#x5206;&#x6790;&#x653E;&#x5728;&#x4EFB;&#x52A1;&#x7ED3;&#x675F;&#x540E;&#x8FDB;&#x884C;&#x3002;Execution Report &#x4E0D;&#x91CD;&#x590D;&#x6284;&#x5199; Raw Trace &#x548C; Decision Events&#xFF0C;&#x5B83;&#x53EA;&#x63D0;&#x4EA4;&#x6700;&#x7EC8;&#x72B6;&#x6001;&#x3001;&#x8BC1;&#x636E;&#x548C;&#x9057;&#x7559;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5F53;&#x524D; <code>coding_agent</code> &#x6CA1;&#x6709;&#x6570;&#x636E;&#x5E93;&#xFF0C;&#x4E5F;&#x4E0D;&#x76F4;&#x63A5;&#x8BFB;&#x5199; Langfuse&#x3002;Langfuse Plugin &#x72EC;&#x7ACB;&#x4E0A;&#x4F20; Codex Trace&#xFF0C;Core MCP &#x5C06; Event &#x4E0E; Report &#x4FDD;&#x5B58;&#x5230;&#x672C;&#x5730;&#xFF1B;<code>taskId</code> &#x76EE;&#x524D;&#x53EA;&#x5173;&#x8054;&#x672C;&#x5730;&#x6587;&#x4EF6;&#x3002;&#x9636;&#x6BB5; 4 &#x7684;&#x5B9E;&#x65BD;&#x76EE;&#x6807;&#x624D;&#x662F;&#x8865;&#x5145; Run Finalizer&#xFF0C;&#x5C06; <code>taskId</code> &#x4E0E; Langfuse Session / Trace&#x3001;&#x4EE3;&#x7801;&#x548C;&#x9A8C;&#x6536;&#x8BC1;&#x636E;&#x5173;&#x8054;&#x8D77;&#x6765;&#x3002;</p>
<p>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x80FD;&#x591F;&#x4ECE;&#x4E00;&#x4E2A;&#x6210;&#x529F;&#x6216;&#x5931;&#x8D25; Case&#xFF0C;&#x5F62;&#x6210;&#x7ECF;&#x8FC7;&#x9A8C;&#x8BC1;&#x7684; Skill&#x3001;Tool &#x6216; Context &#x6539;&#x8FDB;&#x3002;</p>
<h3 id="&#x9636;&#x6BB5; 5&#xFF1A;&#x62BD;&#x53D6; Agent-Agnostic &#x516C;&#x5171;&#x80FD;&#x529B;"><a href="#&#x9636;&#x6BB5; 5&#xFF1A;&#x62BD;&#x53D6; Agent-Agnostic &#x516C;&#x5171;&#x80FD;&#x529B;"></a>&#x9636;&#x6BB5; 5&#xFF1A;&#x62BD;&#x53D6; Agent-Agnostic &#x516C;&#x5171;&#x80FD;&#x529B;</h3>
<p>&#x5F53;&#x67D0;&#x9879;&#x80FD;&#x529B;&#x5DF2;&#x7ECF;&#x5728;&#x591A;&#x4E2A; RN Case &#x4E2D;&#x8BC1;&#x660E;&#x6709;&#x6548;&#xFF0C;&#x518D;&#x5224;&#x65AD;&#x5B83;&#x662F;&#x5426;&#x9002;&#x5408;&#x5F00;&#x653E;&#x7ED9; FE&#x3001;BE&#x3001;Test&#x3001;Knowledge &#x7B49;&#x5176;&#x4ED6; Agent&#x3002;</p>
<p>&#x7B2C;&#x4E00;&#x6279;&#x53EA;&#x8003;&#x8651;&#xFF1A;</p>
<ul>
<li><code>record_run_decision_event</code>&#xFF1A;&#x8BB0;&#x5F55;&#x5173;&#x952E;&#x9636;&#x6BB5;&#x3001;&#x51B3;&#x5B9A;&#x3001;&#x8BC1;&#x636E;&#x3001;&#x7591;&#x8651;&#x548C;&#x4E0B;&#x4E00;&#x6B65;&#xFF1B;</li>
<li><code>submit_execution_report</code>&#xFF1A;&#x63D0;&#x4EA4;&#x72B6;&#x6001;&#x3001;&#x7ED3;&#x679C;&#x3001;&#x8BC1;&#x636E;&#x3001;&#x5931;&#x8D25;&#x7C7B;&#x578B;&#x548C;&#x9057;&#x7559;&#x95EE;&#x9898;&#x3002;</li>
</ul>
<p>&#x516C;&#x5171;&#x5316;&#x65F6;&#x79FB;&#x9664; RN &#x4E13;&#x5C5E;&#x5B57;&#x6BB5;&#xFF0C;&#x4FDD;&#x7559;&#x4E0D;&#x540C; Agent &#x90FD;&#x80FD;&#x7406;&#x89E3;&#x7684;&#x6700;&#x5C0F;&#x4EFB;&#x52A1;&#x548C;&#x7ED3;&#x679C;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x516C;&#x5171;&#x80FD;&#x529B;&#x81F3;&#x5C11;&#x5728;&#x4E00;&#x4E2A;&#x975E; RN Case &#x4E2D;&#x8BC1;&#x660E;&#x6709;&#x590D;&#x7528;&#x4EF7;&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4EC5;&#x4EC5;&#x5B8C;&#x6210;&#x63A5;&#x53E3;&#x62BD;&#x8C61;&#x3002;</p>
<h3 id="&#x9636;&#x6BB5; 6&#xFF1A;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x9875;&#x9762;&#x751F;&#x6210;&#x7B56;&#x7565;"><a href="#&#x9636;&#x6BB5; 6&#xFF1A;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x9875;&#x9762;&#x751F;&#x6210;&#x7B56;&#x7565;"></a>&#x9636;&#x6BB5; 6&#xFF1A;&#x52A8;&#x6001;&#x9009;&#x62E9;&#x9875;&#x9762;&#x751F;&#x6210;&#x7B56;&#x7565;</h3>
<p>&#x5F53; Case &#x6570;&#x91CF;&#x548C;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x8DB3;&#x591F;&#x540E;&#xFF0C;&#x518D;&#x8BA9;&#x7CFB;&#x7EDF;&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x7279;&#x5F81;&#x9009;&#x62E9;&#x9700;&#x8981;&#x7684;&#x80FD;&#x529B;&#xFF1A;</p>
<pre><code class="language-text">&#x7B80;&#x5355;&#x65B0;&#x589E;&#x9875;&#x9762; &#x2192; Direct
&#x7A33;&#x5B9A;&#x7ED3;&#x6784;&#x9875;&#x9762; &#x2192; Page Schema
&#x7EC4;&#x4EF6;&#x53EC;&#x56DE;&#x56F0;&#x96BE; &#x2192; Material Tool
&#x89C6;&#x89C9;&#x5B9A;&#x4F4D;&#x56F0;&#x96BE; &#x2192; BBox
&#x9700;&#x6C42;&#x5BB9;&#x6613;&#x8BEF;&#x89E3; &#x2192; Task Brief
</code></pre>
<p>&#x6700;&#x7EC8;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#x628A;&#x6240;&#x6709;&#x4E2D;&#x95F4;&#x4EA7;&#x7269;&#x90FD;&#x63D0;&#x4F9B;&#x7ED9; Codex&#xFF0C;&#x800C;&#x662F;&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x548C;&#x5386;&#x53F2; Failure Case&#xFF0C;&#x53EA;&#x4F7F;&#x7528;&#x5F53;&#x524D;&#x771F;&#x6B63;&#x9700;&#x8981;&#x7684;&#x589E;&#x5F3A;&#x80FD;&#x529B;&#x3002;</p>
<p><strong>&#x9636;&#x6BB5;&#x6210;&#x679C;&#xFF1A;&#x9875;&#x9762;&#x751F;&#x6210;&#x7B56;&#x7565;&#x4ECE;&#x56FA;&#x5B9A;&#x6CE8;&#x5165;&#x5168;&#x90E8;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6F14;&#x8FDB;&#x4E3A;&#x57FA;&#x4E8E;&#x4EFB;&#x52A1;&#x7279;&#x5F81;&#x7684;&#x6309;&#x9700;&#x9009;&#x62E9;&#x3002;</strong></p>
<h2 id="&#x5E76;&#x884C;&#x8BA1;&#x5212;"><a href="#&#x5E76;&#x884C;&#x8BA1;&#x5212;"></a>&#x5E76;&#x884C;&#x8BA1;&#x5212;</h2>
<p>&#x4EE5;&#x4E0B;&#x80FD;&#x529B;&#x4E0D;&#x6309;&#x516D;&#x9636;&#x6BB5;&#x4E32;&#x884C;&#x5EFA;&#x8BBE;&#xFF0C;&#x53EF;&#x4EE5;&#x8DDF;&#x9875;&#x9762;&#x4EA4;&#x4ED8;&#x540C;&#x65F6;&#x63A8;&#x8FDB;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x6210;&#x4E3A;&#x9636;&#x6BB5; 1 &#x8DD1;&#x901A;&#x9875;&#x9762;&#x7684;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&#xFF1A;</p>
<ul>
<li><strong>Trace &#x4E0E;&#x8BB0;&#x5F55; Tool</strong>&#xFF1A;&#x63A5;&#x5165; Langfuse Raw Trace&#xFF0C;&#x5B8C;&#x5584; Decision Events &#x548C; Execution Report&#xFF1B;</li>
<li><strong>RN &#x9A8C;&#x8BC1;&#x81EA;&#x52A8;&#x5316;</strong>&#xFF1A;&#x5148;&#x4FDD;&#x7559;&#x4EBA;&#x5DE5;&#x542F;&#x52A8;&#x548C;&#x622A;&#x56FE;&#xFF0C;&#x518D;&#x9010;&#x6B65;&#x63A2;&#x7D22; Deep Link&#x3001;&#x81EA;&#x52A8;&#x7B49;&#x5F85;&#x3001;&#x81EA;&#x52A8;&#x622A;&#x56FE;&#x3001;&#x529F;&#x80FD;&#x65AD;&#x8A00;&#x548C;&#x89C6;&#x89C9; Diff&#xFF1B;</li>
<li><strong>Material &#x57FA;&#x7840;</strong>&#xFF1A;&#x7EE7;&#x7EED;&#x5EFA;&#x8BBE; Catalog&#x3001;Fixture&#x3001;Candidate Board &#x548C;&#x67E5;&#x8BE2; Tool&#xFF1B;</li>
<li><strong>&#x4ED3;&#x5E93; Material &#x5316;</strong>&#xFF1A;&#x63A2;&#x7D22; Material Generator Skill&#xFF0C;&#x8BA9;&#x5DF2;&#x6709; FE/RN &#x7EC4;&#x4EF6;&#x4EE5;&#x5F15;&#x7528;&#x539F;&#x5B9E;&#x73B0;&#x7684;&#x65B9;&#x5F0F;&#x8FDB;&#x5165; Catalog&#x3001;Fixture &#x548C; Candidate Board&#xFF1B;</li>
<li><strong>Schema &#x4E0E; Context</strong>&#xFF1A;&#x7EE7;&#x7EED;&#x8FC1;&#x79FB; Page Schema&#xFF0C;&#x5E76;&#x63A2;&#x7D22; Task Brief&#x3001;BBox &#x7B49;&#x5019;&#x9009;&#x8F93;&#x5165;&#x3002;</li>
</ul>
<p>&#x5E76;&#x884C;&#x80FD;&#x529B;&#x53EF;&#x4EE5;&#x63D0;&#x524D;&#x5B9E;&#x73B0;&#xFF0C;&#x4F46;&#x53EA;&#x6709;&#x5728;&#x9636;&#x6BB5; 3 &#x7684;&#x771F;&#x5B9E; Case &#x5BF9;&#x6BD4;&#x4E2D;&#x8BC1;&#x660E;&#x6709;&#x6548;&#x540E;&#xFF0C;&#x624D;&#x8FDB;&#x5165;&#x9ED8;&#x8BA4;&#x9875;&#x9762;&#x751F;&#x6210;&#x8DEF;&#x5F84;&#x3002;</p>
<p>&#x8DE8; Web&#x3001;RN&#x3001;BE &#x548C; Test &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x5C5E;&#x4E8E;&#x72EC;&#x7ACB;&#x6A2A;&#x5411;&#x65B9;&#x6848;&#xFF0C;&#x89C1;<a href="./AI%20Engineering%20Golden%20Path%EF%BC%9A%E9%9D%A2%E5%90%91%20Agent%20%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%A4%8D%E7%94%A8%E6%9C%BA%E5%88%B6.md">&#x300A;AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;&#x300B;</a>&#xFF0C;&#x4E0D;&#x5217;&#x5165;&#x5F53;&#x524D; RN &#x9875;&#x9762;&#x4EA4;&#x4ED8;&#x4EFB;&#x52A1;&#x3002;</p>
<h2 id="&#x8BC4;&#x4EF7;&#x6807;&#x51C6;"><a href="#&#x8BC4;&#x4EF7;&#x6807;&#x51C6;"></a>&#x8BC4;&#x4EF7;&#x6807;&#x51C6;</h2>
<table>
<thead>
<tr>
<th>&#x6307;&#x6807;</th>
<th>&#x8BF4;&#x660E;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x901A;&#x8FC7;&#x7387;</td>
<td>&#x9875;&#x9762;&#x662F;&#x5426;&#x771F;&#x6B63;&#x8FBE;&#x5230;&#x4EA4;&#x4ED8;&#x8981;&#x6C42;</td>
</tr>
<tr>
<td>&#x9996;&#x8F6E;&#x901A;&#x8FC7;&#x7387;</td>
<td>Agent &#x7B2C;&#x4E00;&#x6B21;&#x5B9E;&#x73B0;&#x7684;&#x8D28;&#x91CF;</td>
</tr>
<tr>
<td>&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x91CF;</td>
<td>&#x4EBA;&#x9700;&#x8981;&#x8865;&#x5145;&#x6216;&#x8FD4;&#x5DE5;&#x591A;&#x5C11;&#x5185;&#x5BB9;</td>
</tr>
<tr>
<td>&#x6267;&#x884C;&#x6210;&#x672C;</td>
<td>&#x65F6;&#x95F4;&#x3001;&#x4EA4;&#x4E92;&#x8F6E;&#x6B21;&#x548C; Token &#x6D88;&#x8017;</td>
</tr>
<tr>
<td>&#x76F8;&#x5BF9; Baseline &#x589E;&#x76CA;</td>
<td>&#x65B0;&#x589E;&#x80FD;&#x529B;&#x662F;&#x5426;&#x6BD4; Direct Baseline &#x66F4;&#x6709;&#x6548;</td>
</tr>
</tbody>
</table>
<p>&#x8BC4;&#x4EF7;&#x4EE5;&#x8FD0;&#x884C;&#x7ED3;&#x679C;&#x3001;Native &#x622A;&#x56FE;&#x3001;&#x6D4B;&#x8BD5;&#x548C;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x4F5C;&#x4E3A;&#x4E8B;&#x5B9E;&#x4F9D;&#x636E;&#x3002;Raw Trace&#x3001;Decision Events &#x548C; Execution Report &#x53EA;&#x5E2E;&#x52A9;&#x5206;&#x6790;&#x539F;&#x56E0;&#xFF0C;&#x4E0D;&#x66FF;&#x4EE3;&#x7ED3;&#x679C;&#x9A8C;&#x6536;&#x3002;</p>
<h2 id="&#x5F53;&#x524D;&#x63A8;&#x8FDB;&#x8FB9;&#x754C;"><a href="#&#x5F53;&#x524D;&#x63A8;&#x8FDB;&#x8FB9;&#x754C;"></a>&#x5F53;&#x524D;&#x63A8;&#x8FDB;&#x8FB9;&#x754C;</h2>
<p>&#x5F53;&#x524D;&#x96C6;&#x4E2D;&#x5B8C;&#x6210;&#x9636;&#x6BB5; 1&#xFF0C;&#x5E76;&#x4E3A;&#x9636;&#x6BB5; 2 &#x7559;&#x4E0B;&#x53EF;&#x590D;&#x73B0;&#x7684;&#x8F93;&#x5165;&#x4E0E;&#x7ED3;&#x679C;&#x3002;&#x9875;&#x9762;&#x5FC5;&#x987B;&#x4F18;&#x5148;&#x8DD1;&#x901A;&#xFF1B;&#x81EA;&#x52A8;&#x5316;&#x65B9;&#x5F0F;&#x5C1A;&#x672A;&#x786E;&#x5B9A;&#x65F6;&#xFF0C;&#x7EE7;&#x7EED;&#x4F7F;&#x7528;&#x4EBA;&#x5DE5;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x9636;&#x6BB5; 3 &#x4EE5;&#x540E;&#x90FD;&#x7531;&#x771F;&#x5B9E; Case &#x548C;&#x8BC4;&#x4EF7;&#x7ED3;&#x679C;&#x89E6;&#x53D1;&#xFF0C;&#x4E0D;&#x4F5C;&#x4E3A;&#x5F53;&#x524D;&#x9875;&#x9762;&#x4E0A;&#x7EBF;&#x7684;&#x963B;&#x585E;&#x9879;&#x3002;</p>
`,E=[{level:1,title:"RN 页面还原：六阶段推进",children:[{level:2,title:"核心思路",children:[]},{level:2,title:"六个阶段",children:[{level:3,title:"阶段 1：接通最小基础版本",children:[]},{level:3,title:"阶段 2：固定 Baseline 和评价方式",children:[]},{level:3,title:"阶段 3：逐个增加增强能力",children:[]},{level:3,title:"阶段 4：建立 Skill 与 Tool 优化闭环",children:[]},{level:3,title:"阶段 5：抽取 Agent-Agnostic 公共能力",children:[]},{level:3,title:"阶段 6：动态选择页面生成策略",children:[]}]},{level:2,title:"并行计划",children:[]},{level:2,title:"评价标准",children:[]},{level:2,title:"当前推进边界",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
