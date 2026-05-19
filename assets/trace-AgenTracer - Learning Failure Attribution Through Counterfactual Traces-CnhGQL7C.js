const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2025-09-03&#xFF0C;v2 &#x4FEE;&#x8BA2;&#xFF1A;2025-09-04</em></p>
<p><strong>AgenTracer</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2509.03312">AgenTracer: Who Is Inducing Failure in the LLM Agentic Systems?</a>&#x300B;&#xFF09;&#x7814;&#x7A76;&#x7684;&#x662F;&#xFF1A;<strong>&#x5982;&#x4F55;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#xFF0C;&#x81EA;&#x52A8;&#x5224;&#x65AD; Agent &#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x65F6;&#x5230;&#x5E95;&#x662F;&#x8C01;&#x7684;&#x95EE;&#x9898;&#x3001;&#x54EA;&#x4E00;&#x6B65;&#x7684;&#x95EE;&#x9898;&#x3002;</strong></p>
<p>&#x5B83;&#x548C; TraceElephant / MP-Bench &#x7684;&#x5173;&#x7CFB;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x7406;&#x89E3;&#xFF1A;</p>
<pre><code class="language-text">TraceElephant&#xFF1A;&#x544A;&#x8BC9;&#x4F60; trace &#x5FC5;&#x987B;&#x8BB0;&#x5F55;&#x5B8C;&#x6574; input / output / tool logs&#x3002;
MP-Bench&#xFF1A;&#x544A;&#x8BC9;&#x4F60;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E0D;&#x4E00;&#x5B9A;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x6839;&#x56E0;&#x3002;
AgenTracer&#xFF1A;&#x5C1D;&#x8BD5;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x4E13;&#x95E8;&#x7684; failure attribution &#x6A21;&#x578B;&#x3002;
</code></pre>
<p>&#x6240;&#x4EE5; AgenTracer &#x66F4;&#x504F;&#x65B9;&#x6CD5;&#x8BBA;&#x6587;&#xFF0C;&#x4E0D;&#x53EA;&#x662F; benchmark&#x3002;</p>
<h2 id="&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;</h2>
<p>AgenTracer &#x7684;&#x6838;&#x5FC3;&#x60F3;&#x6CD5;&#x662F;&#xFF1A;</p>
<p><strong>&#x4E0E;&#x5176;&#x53EA;&#x8BA9;&#x5927;&#x6A21;&#x578B;&#x770B;&#x5931;&#x8D25;&#x65E5;&#x5FD7;&#x731C;&#x539F;&#x56E0;&#xFF0C;&#x4E0D;&#x5982;&#x6784;&#x9020;&#x201C;&#x53CD;&#x4E8B;&#x5B9E; trace&#x201D;&#xFF0C;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x5B66;&#x4E60;&#xFF1A;&#x5982;&#x679C;&#x67D0;&#x4E00;&#x6B65;&#x88AB;&#x4FEE;&#x6B63;&#x540E;&#x4EFB;&#x52A1;&#x80FD;&#x6210;&#x529F;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E00;&#x6B65;&#x5C31;&#x5F88;&#x53EF;&#x80FD;&#x662F;&#x5173;&#x952E;&#x5931;&#x8D25;&#x70B9;&#x3002;</strong></p>
<p>&#x5B83;&#x6700;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x5730;&#x65B9;&#x662F;&#x628A;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4ECE;&#x201C;&#x9759;&#x6001;&#x770B;&#x65E5;&#x5FD7;&#x201D;&#x63A8;&#x8FDB;&#x5230;&#x201C;&#x7528;&#x53CD;&#x4E8B;&#x5B9E;&#x8F68;&#x8FF9;&#x5B66;&#x4E60;&#x56E0;&#x679C;&#x5173;&#x7CFB;&#x201D;&#x3002;</p>
<h2 id="&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"><a href="#&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"></a>&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;</h2>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4E2A; Coding Agent &#x7CFB;&#x7EDF;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x6237;&#x4EFB;&#x52A1;&#xFF1A;
&#x4FEE;&#x590D;&#x767B;&#x5F55;&#x9875; bug&#xFF1A;&#x8868;&#x5355;&#x65E0;&#x6548;&#x65F6;&#xFF0C;&#x63D0;&#x4EA4;&#x6309;&#x94AE;&#x5FC5;&#x987B; disabled&#x3002;

Agent &#x5206;&#x5DE5;&#xFF1A;
SearchAgent   &#x627E;&#x76F8;&#x5173;&#x6587;&#x4EF6;
CoderAgent    &#x4FEE;&#x6539;&#x4EE3;&#x7801;
TesterAgent   &#x9A8C;&#x8BC1;&#x7ED3;&#x679C;
</code></pre>
<p>&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#xFF1A;</p>
<pre><code class="language-text">Step 1 - SearchAgent
&#x8F93;&#x51FA;&#xFF1A;&#x627E;&#x5230;&#x4E86; LoginPage.vue&#x3002;
&#x95EE;&#x9898;&#xFF1A;&#x6F0F;&#x6389; useLoginValidation.ts&#x3002;

Step 2 - CoderAgent
&#x8F93;&#x5165;&#xFF1A;&#x53EA;&#x6709; LoginPage.vue&#x3002;
&#x8F93;&#x51FA;&#xFF1A;&#x53EA;&#x6539;&#x4E86;&#x6309;&#x94AE;&#x6837;&#x5F0F;&#xFF0C;&#x6CA1;&#x6709;&#x6539; disabled &#x903B;&#x8F91;&#x3002;

Step 3 - TesterAgent
&#x8F93;&#x51FA;&#xFF1A;&#x73B0;&#x6709;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF0C;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x3002;

Final
&#x6309;&#x94AE;&#x4ECD;&#x7136;&#x6CA1;&#x6709; disabled&#x3002;
</code></pre>
<p>&#x73B0;&#x5728;&#x6709;&#x4E09;&#x4E2A;&#x5019;&#x9009;&#x5F52;&#x56E0;&#xFF1A;</p>
<pre><code class="language-text">&#x5019;&#x9009; A&#xFF1A;SearchAgent &#x6F0F;&#x6587;&#x4EF6;&#x3002;
&#x5019;&#x9009; B&#xFF1A;CoderAgent &#x6539;&#x9519;&#x903B;&#x8F91;&#x3002;
&#x5019;&#x9009; C&#xFF1A;TesterAgent &#x9A8C;&#x6536;&#x4E0D;&#x4E25;&#x683C;&#x3002;
</code></pre>
<p>&#x666E;&#x901A;&#x9759;&#x6001;&#x5F52;&#x56E0;&#x53EA;&#x80FD;&#x770B; trace &#x731C;&#xFF1A;</p>
<pre><code class="language-text">&#x53EF;&#x80FD;&#x662F; TesterAgent&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x6700;&#x540E;&#x6CA1;&#x515C;&#x5E95;&#x3002;
</code></pre>
<p>AgenTracer &#x7684;&#x601D;&#x8DEF;&#x66F4;&#x63A5;&#x8FD1;&#x5B9E;&#x9A8C;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C;&#x6211;&#x628A; Step 1 &#x4FEE;&#x6B63;&#xFF0C;&#x8BA9; SearchAgent &#x627E;&#x5230; useLoginValidation.ts&#xFF0C;
&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x662F;&#x5426;&#x66F4;&#x53EF;&#x80FD;&#x6210;&#x529F;&#xFF1F;

&#x5982;&#x679C;&#x6211;&#x628A; Step 2 &#x4FEE;&#x6B63;&#xFF0C;&#x8BA9; CoderAgent &#x6B63;&#x786E;&#x4FEE;&#x6539; disabled &#x903B;&#x8F91;&#xFF0C;
&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x662F;&#x5426;&#x6210;&#x529F;&#xFF1F;

&#x5982;&#x679C;&#x6211;&#x628A; Step 3 &#x4FEE;&#x6B63;&#xFF0C;&#x8BA9; TesterAgent &#x8981;&#x6C42;&#x8865;&#x884C;&#x4E3A;&#x6D4B;&#x8BD5;&#xFF0C;
&#x7CFB;&#x7EDF;&#x662F;&#x5426;&#x80FD;&#x6062;&#x590D;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; <strong>counterfactual trace</strong>&#xFF1A;</p>
<pre><code class="language-text">&#x539F;&#x59CB;&#x4E16;&#x754C;&#xFF1A;Step 1 &#x6F0F;&#x6587;&#x4EF6; -&gt; Step 2 &#x6539;&#x9519; -&gt; Step 3 &#x8BEF;&#x5224; -&gt; &#x5931;&#x8D25;
&#x53CD;&#x4E8B;&#x5B9E;&#x4E16;&#x754C;&#xFF1A;Step 1 &#x627E;&#x5168;&#x6587;&#x4EF6; -&gt; &#x540E;&#x7EED;&#x53EF;&#x80FD;&#x6210;&#x529F;
</code></pre>
<p>&#x5982;&#x679C;&#x4FEE;&#x6B63;&#x67D0;&#x4E00;&#x6B65;&#x540E;&#x4EFB;&#x52A1;&#x4ECE;&#x5931;&#x8D25;&#x53D8;&#x6210;&#x529F;&#xFF0C;&#x8BF4;&#x660E;&#x8FD9;&#x4E00;&#x6B65;&#x4E0E;&#x5931;&#x8D25;&#x6709;&#x66F4;&#x5F3A;&#x56E0;&#x679C;&#x5173;&#x7CFB;&#x3002;</p>
<h2 id="AgenTracer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#AgenTracer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>AgenTracer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p>&#x5B83;&#x89E3;&#x51B3;&#x7684;&#x662F; failure attribution &#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x8FC7;&#x53BB;&#x5E38;&#x89C1;&#x505A;&#x6CD5;&#xFF1A;</p>
<pre><code class="language-text">&#x6536;&#x96C6;&#x5931;&#x8D25; trace
&#x8BA9;&#x4EBA;&#x6807;&#x6CE8;&#x8C01;&#x9519;&#x4E86;&#x3001;&#x54EA;&#x4E00;&#x6B65;&#x9519;&#x4E86;
&#x8BAD;&#x7EC3;&#x6216;&#x8BC4;&#x6D4B;&#x6A21;&#x578B;
</code></pre>
<p>&#x95EE;&#x9898;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x8D35;&#x3002;
&#x4E0D;&#x540C;&#x4E13;&#x5BB6;&#x4F1A;&#x6709;&#x5206;&#x6B67;&#x3002;
&#x5355;&#x770B;&#x5931;&#x8D25; trace &#x5F88;&#x96BE;&#x5224;&#x65AD;&#x56E0;&#x679C;&#x3002;
</code></pre>
<p>AgenTracer &#x7684;&#x89E3;&#x51B3;&#x65B9;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">&#x7528; counterfactual replay &#x548C; fault injection &#x81EA;&#x52A8;&#x6784;&#x9020;&#x5927;&#x91CF;&#x5E26;&#x6807;&#x7B7E;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x3002;
</code></pre>
<p>&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x5B83;&#x4E0D;&#x662F;&#x53EA;&#x9760;&#x4EBA;&#x7C7B;&#x6807;&#x6CE8;&#xFF0C;&#x800C;&#x662F;&#x4E3B;&#x52A8;&#x5236;&#x9020;&#x548C;&#x9A8C;&#x8BC1;&#x5931;&#x8D25;&#x539F;&#x56E0;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x5931;&#x8D25; trace &#x5230;&#x8BAD;&#x7EC3;&#x6570;&#x636E;"><a href="#&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x5931;&#x8D25; trace &#x5230;&#x8BAD;&#x7EC3;&#x6570;&#x636E;"></a>&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x5931;&#x8D25; trace &#x5230;&#x8BAD;&#x7EC3;&#x6570;&#x636E;</h2>
<p>AgenTracer &#x53EF;&#x4EE5;&#x62C6;&#x6210;&#x56DB;&#x6B65;&#xFF1A;</p>
<pre><code class="language-text">1. &#x91C7;&#x96C6;&#x6210;&#x529F; / &#x5931;&#x8D25; Agent &#x8F68;&#x8FF9;
2. &#x6784;&#x9020;&#x53CD;&#x4E8B;&#x5B9E; trace
3. &#x7528; programmed fault injection &#x81EA;&#x52A8;&#x6CE8;&#x5165;&#x9519;&#x8BEF;
4. &#x8BAD;&#x7EC3; AgenTracer-8B &#x505A;&#x5931;&#x8D25;&#x5F52;&#x56E0;
</code></pre>
<p>&#x4E0B;&#x9762;&#x7528; Coding Agent &#x4F8B;&#x5B50;&#x4E32;&#x8D77;&#x6765;&#x3002;</p>
<h2 id="1. Counterfactual Replay&#xFF1A;&#x4ECE;&#x67D0;&#x4E00;&#x6B65;&#x91CD;&#x8DD1;"><a href="#1. Counterfactual Replay&#xFF1A;&#x4ECE;&#x67D0;&#x4E00;&#x6B65;&#x91CD;&#x8DD1;"></a>1. Counterfactual Replay&#xFF1A;&#x4ECE;&#x67D0;&#x4E00;&#x6B65;&#x91CD;&#x8DD1;</h2>
<p>&#x5047;&#x8BBE;&#x539F;&#x59CB;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">Step 1 SearchAgent&#xFF1A;&#x6F0F;&#x6389; validation &#x6587;&#x4EF6;
Step 2 CoderAgent&#xFF1A;&#x53EA;&#x6539;&#x6837;&#x5F0F;
Step 3 TesterAgent&#xFF1A;&#x8BEF;&#x5224;&#x5B8C;&#x6210;
Final&#xFF1A;&#x5931;&#x8D25;
</code></pre>
<p>Counterfactual replay &#x505A;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x5019;&#x9009;&#x6B65;&#x9AA4;&#xFF0C;&#x4F8B;&#x5982; Step 1&#x3002;
&#x628A; Step 1 &#x7684;&#x8F93;&#x51FA;&#x66FF;&#x6362;&#x6210;&#x66F4;&#x5408;&#x7406;&#x7684;&#x8F93;&#x51FA;&#x3002;
&#x4ECE; Step 2 &#x5F00;&#x59CB;&#x91CD;&#x8DD1;&#x540E;&#x7EED; Agent&#x3002;
&#x89C2;&#x5BDF;&#x6700;&#x7EC8;&#x662F;&#x5426;&#x6210;&#x529F;&#x3002;
</code></pre>
<p>&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">&#x539F; Step 1&#xFF1A;
SearchAgent -&gt; LoginPage.vue

&#x53CD;&#x4E8B;&#x5B9E; Step 1&#xFF1A;
SearchAgent -&gt; LoginPage.vue + useLoginValidation.ts

&#x91CD;&#x65B0;&#x8FD0;&#x884C;&#xFF1A;
CoderAgent &#x73B0;&#x5728;&#x770B;&#x5230; validation hook&#x3002;
&#x5B83;&#x4FEE;&#x6539; disabled &#x903B;&#x8F91;&#x3002;
TesterAgent &#x9A8C;&#x8BC1;&#x901A;&#x8FC7;&#x3002;
Final &#x6210;&#x529F;&#x3002;
</code></pre>
<p>&#x8FD9;&#x8BF4;&#x660E; Step 1 &#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x5931;&#x8D25;&#x6709;&#x5F3A;&#x5F71;&#x54CD;&#x3002;</p>
<p>&#x53CD;&#x8FC7;&#x6765;&#xFF0C;&#x5982;&#x679C;&#x4FEE;&#x6B63; Step 1 &#x540E;&#x4ECD;&#x7136;&#x5931;&#x8D25;&#xFF0C;&#x8BF4;&#x660E;&#x771F;&#x6B63;&#x95EE;&#x9898;&#x53EF;&#x80FD;&#x5728;&#x540E;&#x9762;&#x3002;</p>
<h2 id="2. Fault Injection&#xFF1A;&#x4E3B;&#x52A8;&#x5236;&#x9020;&#x53EF;&#x63A7;&#x9519;&#x8BEF;"><a href="#2. Fault Injection&#xFF1A;&#x4E3B;&#x52A8;&#x5236;&#x9020;&#x53EF;&#x63A7;&#x9519;&#x8BEF;"></a>2. Fault Injection&#xFF1A;&#x4E3B;&#x52A8;&#x5236;&#x9020;&#x53EF;&#x63A7;&#x9519;&#x8BEF;</h2>
<p>Counterfactual replay &#x9700;&#x8981;&#x77E5;&#x9053;&#x201C;&#x4FEE;&#x6B63;&#x540E;&#x4F1A;&#x600E;&#x6837;&#x201D;&#x3002;&#x4F46;&#x771F;&#x5B9E;&#x5931;&#x8D25;&#x6570;&#x636E;&#x4E0D;&#x591F;&#x591A;&#xFF0C;&#x6240;&#x4EE5; AgenTracer &#x7528; <strong>programmed fault injection</strong> &#x4E3B;&#x52A8;&#x5236;&#x9020;&#x9519;&#x8BEF;&#x3002;</p>
<p>&#x8FD8;&#x662F; Coding Agent &#x4F8B;&#x5B50;&#x3002;</p>
<p>&#x539F;&#x672C;&#x6709;&#x4E00;&#x6761;&#x6210;&#x529F;&#x8F68;&#x8FF9;&#xFF1A;</p>
<pre><code class="language-text">Step 1 SearchAgent&#xFF1A;&#x627E;&#x5230; LoginPage.vue + useLoginValidation.ts
Step 2 CoderAgent&#xFF1A;&#x6B63;&#x786E;&#x4FEE;&#x6539; disabled &#x903B;&#x8F91;
Step 3 TesterAgent&#xFF1A;&#x65B0;&#x589E; invalid form &#x6D4B;&#x8BD5;&#x5E76;&#x901A;&#x8FC7;
Final&#xFF1A;&#x6210;&#x529F;
</code></pre>
<p>&#x73B0;&#x5728;&#x6545;&#x610F;&#x6CE8;&#x5165;&#x9519;&#x8BEF;&#xFF1A;</p>
<pre><code class="language-text">&#x6CE8;&#x5165;&#x5230; Step 1&#xFF1A;
&#x628A; SearchAgent &#x8F93;&#x51FA;&#x6539;&#x6210;&#x53EA;&#x8FD4;&#x56DE; LoginPage.vue&#x3002;
</code></pre>
<p>&#x518D;&#x8FD0;&#x884C;&#x540E;&#x7EED;&#x6B65;&#x9AA4;&#xFF1A;</p>
<pre><code class="language-text">Step 2 CoderAgent &#x56E0;&#x4E3A;&#x7F3A;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6539;&#x9519;&#x3002;
Step 3 TesterAgent &#x6CA1;&#x53D1;&#x73B0;&#x3002;
Final &#x5931;&#x8D25;&#x3002;
</code></pre>
<p>&#x8FD9;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x7684;&#x6807;&#x7B7E;&#x5929;&#x7136;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x6CE8;&#x5165;&#x70B9;&#xFF1A;Step 1 / SearchAgent
&#x5931;&#x8D25;&#x539F;&#x56E0;&#xFF1A;&#x5173;&#x952E;&#x6587;&#x4EF6;&#x7F3A;&#x5931;
</code></pre>
<p>&#x8FD9;&#x6BD4;&#x7EAF;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x4FBF;&#x5B9C;&#xFF0C;&#x4E5F;&#x66F4;&#x9002;&#x5408;&#x89C4;&#x6A21;&#x5316;&#x3002;</p>
<h2 id="3. TracerTraj&#xFF1A;&#x81EA;&#x52A8;&#x6784;&#x9020;&#x7684;&#x5927;&#x89C4;&#x6A21;&#x5F52;&#x56E0;&#x6570;&#x636E;"><a href="#3. TracerTraj&#xFF1A;&#x81EA;&#x52A8;&#x6784;&#x9020;&#x7684;&#x5927;&#x89C4;&#x6A21;&#x5F52;&#x56E0;&#x6570;&#x636E;"></a>3. TracerTraj&#xFF1A;&#x81EA;&#x52A8;&#x6784;&#x9020;&#x7684;&#x5927;&#x89C4;&#x6A21;&#x5F52;&#x56E0;&#x6570;&#x636E;</h2>
<p>AgenTracer &#x57FA;&#x4E8E;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x6784;&#x9020;&#x4E86; <strong>TracerTraj</strong> &#x6570;&#x636E;&#x96C6;&#x3002;</p>
<p>&#x6838;&#x5FC3;&#x7279;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x7531; counterfactual replay / fault injection &#x751F;&#x6210;&#x3002;
&#x5305;&#x542B;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x548C;&#x5BF9;&#x5E94;&#x5F52;&#x56E0;&#x6807;&#x7B7E;&#x3002;
&#x7528;&#x4E8E;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x7684; failure attribution &#x6A21;&#x578B;&#x3002;
</code></pre>
<p>&#x548C; MP-Bench &#x7684;&#x533A;&#x522B;&#xFF1A;</p>
<pre><code class="language-text">MP-Bench&#xFF1A;
  &#x5C0F;&#x89C4;&#x6A21;&#x3001;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x3001;&#x591A;&#x89C6;&#x89D2;&#x3001;&#x9002;&#x5408;&#x8BC4;&#x6D4B;&#x771F;&#x5B9E;&#x6027;&#x3002;

TracerTraj&#xFF1A;
  &#x66F4;&#x504F;&#x81EA;&#x52A8;&#x6784;&#x9020;&#x3001;&#x89C4;&#x6A21;&#x8BAD;&#x7EC3;&#x3001;&#x9002;&#x5408;&#x8BAD;&#x7EC3;&#x5F52;&#x56E0;&#x6A21;&#x578B;&#x3002;
</code></pre>
<p>&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x5BF9;&#x6BD4;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x6570;&#x636E; / &#x65B9;&#x6CD5;</th>
<th>&#x91CD;&#x70B9;</th>
<th>&#x4F18;&#x70B9;</th>
<th>&#x7F3A;&#x70B9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>TraceElephant</td>
<td>full trace / replayable environment</td>
<td>&#x8D34;&#x8FD1;&#x5DE5;&#x7A0B;&#x8C03;&#x8BD5;</td>
<td>&#x6570;&#x636E;&#x89C4;&#x6A21;&#x5C0F;</td>
</tr>
<tr>
<td>MP-Bench</td>
<td>multi-perspective expert labels</td>
<td>&#x66F4;&#x771F;&#x5B9E;&#x5730;&#x5904;&#x7406;&#x591A;&#x6839;&#x56E0;</td>
<td>&#x6807;&#x6CE8;&#x8D35;</td>
</tr>
<tr>
<td>TracerTraj</td>
<td>counterfactual / injected failures</td>
<td>&#x53EF;&#x89C4;&#x6A21;&#x5316;&#x8BAD;&#x7EC3;</td>
<td>&#x4EBA;&#x5DE5;&#x6CE8;&#x5165;&#x9519;&#x8BEF;&#x53EF;&#x80FD;&#x4E0D;&#x8986;&#x76D6;&#x771F;&#x5B9E;&#x5931;&#x8D25;</td>
</tr>
</tbody>
</table>
<h2 id="4. AgenTracer-8B&#xFF1A;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x5F52;&#x56E0;&#x6A21;&#x578B;"><a href="#4. AgenTracer-8B&#xFF1A;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x5F52;&#x56E0;&#x6A21;&#x578B;"></a>4. AgenTracer-8B&#xFF1A;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x5F52;&#x56E0;&#x6A21;&#x578B;</h2>
<p>&#x8BBA;&#x6587;&#x8BAD;&#x7EC3;&#x4E86;&#x4E00;&#x4E2A; <strong>AgenTracer-8B</strong>&#x3002;</p>
<p>&#x8F93;&#x5165;&#x662F;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#xFF1A;</p>
<pre><code class="language-text">task instruction
agent roles
step-by-step trace
tool logs
final failure
</code></pre>
<p>&#x8F93;&#x51FA;&#x662F;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF1A;</p>
<pre><code class="language-text">responsible agent
failure step
failure reason
possible correction
</code></pre>
<p>&#x7528; Coding Agent &#x4F8B;&#x5B50;&#xFF0C;&#x7406;&#x60F3;&#x8F93;&#x51FA;&#x662F;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;failure_step&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;responsible_agent&quot;</span>: <span class="hljs-string">&quot;SearchAgent&quot;</span>,
  <span class="hljs-attr">&quot;failure_reason&quot;</span>: <span class="hljs-string">&quot;SearchAgent returned only LoginPage.vue and missed useLoginValidation.ts, which contains the form validity logic.&quot;</span>,
  <span class="hljs-attr">&quot;ideal_action&quot;</span>: <span class="hljs-string">&quot;Search validation-related files and provide the validation hook to CoderAgent.&quot;</span>
}
</code></pre>
<p>&#x5982;&#x679C;&#x6309;&#x7167; MP-Bench &#x7684;&#x591A;&#x89C6;&#x89D2;&#x8303;&#x5F0F;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8F93;&#x51FA;&#x591A;&#x4E2A;&#x5019;&#x9009;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;attributions&quot;</span>: [
    {
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;SearchAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;Missed validation hook.&quot;</span>,
      <span class="hljs-attr">&quot;evidence&quot;</span>: <span class="hljs-string">&quot;Only LoginPage.vue was passed to CoderAgent.&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;TesterAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;Accepted existing tests without checking disabled behavior.&quot;</span>,
      <span class="hljs-attr">&quot;evidence&quot;</span>: <span class="hljs-string">&quot;No invalid-form behavior test was added.&quot;</span>
    }
  ]
}
</code></pre>
<p>&#x8BBA;&#x6587;&#x4E3B;&#x8981;&#x5F3A;&#x8C03;&#x7684;&#x662F;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x5F52;&#x56E0;&#x5668;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B9A;&#x4E49;&#x591A;&#x89C6;&#x89D2;&#x8F93;&#x51FA;&#x534F;&#x8BAE;&#xFF1B;&#x4F46;&#x5DE5;&#x7A0B;&#x4E0A;&#x5EFA;&#x8BAE;&#x628A;&#x4E24;&#x8005;&#x7ED3;&#x5408;&#x3002;</p>
<h2 id="&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x62A5;&#x544A;&#x4E86;&#x51E0;&#x7C7B;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">1. AgenTracer-8B &#x5728; Who&amp;When &#x4E0A;&#x8D85;&#x8FC7;&#x591A;&#x4E2A;&#x5F3A;&#x57FA;&#x7EBF;&#x3002;
2. &#x5B83;&#x5728;&#x8DE8;&#x7CFB;&#x7EDF;&#x5F52;&#x56E0;&#x4E0A;&#x6BD4;&#x901A;&#x7528; LLM &#x66F4;&#x7A33;&#x5B9A;&#x3002;
3. &#x5C06;&#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53CD;&#x9988;&#x7ED9; Agent &#x7CFB;&#x7EDF;&#xFF0C;&#x53EF;&#x4EE5;&#x63D0;&#x5347;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x7387;&#x3002;
</code></pre>
<p>&#x5B83;&#x58F0;&#x79F0;&#x5728; MetaGPT / MaAS &#x7B49;&#x7CFB;&#x7EDF;&#x4E0A;&#xFF0C;&#x57FA;&#x4E8E;&#x5F52;&#x56E0;&#x53CD;&#x9988;&#x80FD;&#x5E26;&#x6765;&#x7EA6; <strong>4.8% - 14.2%</strong> &#x7684;&#x6027;&#x80FD;&#x63D0;&#x5347;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x7ED3;&#x679C;&#x7684;&#x610F;&#x4E49;&#x4E0D;&#x662F;&#x201C;AgenTracer &#x5DF2;&#x7ECF;&#x89E3;&#x51B3;&#x5F52;&#x56E0;&#x95EE;&#x9898;&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x53EF;&#x4EE5;&#x53D8;&#x6210;&#x8BAD;&#x7EC3;&#x4FE1;&#x53F7;&#x3002;
&#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x6539;&#x5584; Agent &#x7CFB;&#x7EDF;&#x3002;
</code></pre>
<h2 id="&#x548C; TraceElephant / MP-Bench &#x7684;&#x533A;&#x522B;"><a href="#&#x548C; TraceElephant / MP-Bench &#x7684;&#x533A;&#x522B;"></a>&#x548C; TraceElephant / MP-Bench &#x7684;&#x533A;&#x522B;</h2>
<h3 id="TraceElephant vs AgenTracer"><a href="#TraceElephant vs AgenTracer"></a>TraceElephant vs AgenTracer</h3>
<p>TraceElephant &#x7684;&#x91CD;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x5B8C;&#x6574; trace &#x5F88;&#x91CD;&#x8981;&#x3002;
input_context &#x5F88;&#x91CD;&#x8981;&#x3002;
&#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x5F88;&#x91CD;&#x8981;&#x3002;
</code></pre>
<p>AgenTracer &#x7684;&#x91CD;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x7528; counterfactual replay &#x548C; fault injection &#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x3002;
&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x7684; failure attribution &#x6A21;&#x578B;&#x3002;
</code></pre>
<p>&#x5173;&#x7CFB;&#xFF1A;</p>
<pre><code class="language-text">TraceElephant &#x66F4;&#x50CF;&#x89C2;&#x6D4B;&#x6807;&#x51C6;&#x3002;
AgenTracer &#x66F4;&#x50CF;&#x81EA;&#x52A8;&#x8BCA;&#x65AD;&#x65B9;&#x6CD5;&#x3002;
</code></pre>
<h3 id="MP-Bench vs AgenTracer"><a href="#MP-Bench vs AgenTracer"></a>MP-Bench vs AgenTracer</h3>
<p>MP-Bench &#x7684;&#x91CD;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x53EF;&#x80FD;&#x6709;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x3002;
&#x8BC4;&#x6D4B;&#x5E94;&#x8BE5;&#x7528; multi-perspective ranking&#x3002;
</code></pre>
<p>AgenTracer &#x7684;&#x91CD;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x53CD;&#x4E8B;&#x5B9E;&#x8F68;&#x8FF9;&#x5B66;&#x4E60;&#x5F52;&#x56E0;&#x3002;
</code></pre>
<p>&#x5173;&#x7CFB;&#xFF1A;</p>
<pre><code class="language-text">MP-Bench &#x6539;&#x4EFB;&#x52A1;&#x5B9A;&#x4E49;&#x3002;
AgenTracer &#x6539;&#x8BAD;&#x7EC3;&#x65B9;&#x6CD5;&#x3002;
</code></pre>
<p>&#x4E24;&#x8005;&#x5E94;&#x8BE5;&#x7EC4;&#x5408;&#xFF1A;</p>
<pre><code class="language-text">AgenTracer &#x8D1F;&#x8D23;&#x4EA7;&#x751F;&#x5019;&#x9009;&#x5F52;&#x56E0;&#x3002;
MP-Bench &#x601D;&#x8DEF;&#x8D1F;&#x8D23;&#x628A;&#x5019;&#x9009;&#x5F52;&#x56E0;&#x6392;&#x5E8F;&#x3001;&#x89E3;&#x91CA;&#x3001;&#x4FDD;&#x7559;&#x591A;&#x4E2A;&#x89C6;&#x89D2;&#x3002;
</code></pre>
<h2 id="&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;"><a href="#&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;"></a>&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;</h2>
<p>&#x5982;&#x679C;&#x4F60;&#x8981;&#x628A; AgenTracer &#x601D;&#x8DEF;&#x843D;&#x5730;&#xFF0C;&#x4E0D;&#x5EFA;&#x8BAE;&#x4E00;&#x4E0A;&#x6765;&#x8BAD;&#x7EC3; 8B &#x6A21;&#x578B;&#x3002;&#x66F4;&#x73B0;&#x5B9E;&#x7684;&#x662F;&#x5148;&#x5B9E;&#x73B0;&#x6D41;&#x7A0B;&#x3002;</p>
<h3 id="1. &#x5148;&#x8BA9; Agent &#x7CFB;&#x7EDF;&#x652F;&#x6301; replay"><a href="#1. &#x5148;&#x8BA9; Agent &#x7CFB;&#x7EDF;&#x652F;&#x6301; replay"></a>1. &#x5148;&#x8BA9; Agent &#x7CFB;&#x7EDF;&#x652F;&#x6301; replay</h3>
<p>&#x6700;&#x4F4E;&#x8981;&#x6C42;&#xFF1A;</p>
<pre><code class="language-text">&#x6BCF;&#x4E00;&#x6B65; trace &#x53EF;&#x5E8F;&#x5217;&#x5316;&#x3002;
&#x6BCF;&#x4E00;&#x6B65; input_context &#x53EF;&#x8FD8;&#x539F;&#x3002;
&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x7ED3;&#x679C;&#x53EF;&#x7F13;&#x5B58;&#x3002;
&#x53EF;&#x4EE5;&#x4ECE;&#x67D0;&#x4E2A; step &#x91CD;&#x65B0;&#x6267;&#x884C;&#x540E;&#x7EED;&#x6D41;&#x7A0B;&#x3002;
</code></pre>
<p>&#x6CA1;&#x6709; replay&#xFF0C;AgenTracer &#x7684;&#x6838;&#x5FC3;&#x65B9;&#x6CD5;&#x7528;&#x4E0D;&#x8D77;&#x6765;&#x3002;</p>
<h3 id="2. &#x5EFA;&#x4E00;&#x4E2A;&#x5C0F;&#x578B; fault injection &#x96C6;&#x5408;"><a href="#2. &#x5EFA;&#x4E00;&#x4E2A;&#x5C0F;&#x578B; fault injection &#x96C6;&#x5408;"></a>2. &#x5EFA;&#x4E00;&#x4E2A;&#x5C0F;&#x578B; fault injection &#x96C6;&#x5408;</h3>
<p>&#x53EF;&#x4EE5;&#x4ECE;&#x5E38;&#x89C1;&#x5931;&#x8D25;&#x5F00;&#x59CB;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent&#xFF1A;
  &#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x6587;&#x4EF6;
  &#x8FD4;&#x56DE;&#x8FC7;&#x671F;&#x6587;&#x6863;
  &#x8FD4;&#x56DE;&#x76F8;&#x4F3C;&#x4F46;&#x9519;&#x8BEF;&#x7684; API

CoderAgent&#xFF1A;
  &#x6539;&#x9519;&#x6587;&#x4EF6;
  &#x53EA;&#x6539;&#x6837;&#x5F0F;&#x4E0D;&#x6539;&#x903B;&#x8F91;
  &#x5FFD;&#x7565;&#x8FB9;&#x754C;&#x6761;&#x4EF6;

TesterAgent&#xFF1A;
  &#x53EA;&#x8DD1;&#x5DF2;&#x6709;&#x6D4B;&#x8BD5;
  &#x5FFD;&#x7565;&#x5931;&#x8D25;&#x65E5;&#x5FD7;
  &#x9519;&#x8BEF;&#x5224;&#x65AD;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;

Orchestrator&#xFF1A;
  &#x8FC7;&#x65E9;&#x7ED3;&#x675F;
  &#x6D3E;&#x9519; Agent
  &#x6CA1;&#x6709;&#x89E6;&#x53D1;&#x91CD;&#x8BD5;
</code></pre>
<p>&#x6BCF;&#x79CD; fault &#x90FD;&#x80FD;&#x81EA;&#x52A8;&#x4EA7;&#x751F;&#x6807;&#x7B7E;&#xFF1A;</p>
<pre><code class="language-text">&#x6CE8;&#x5165;&#x5728;&#x54EA;&#x91CC;&#xFF0C;&#x6807;&#x7B7E;&#x5C31;&#x662F;&#x54EA;&#x91CC;&#x3002;
</code></pre>
<h3 id="3. &#x7528;&#x5C0F;&#x6A21;&#x578B;&#x6216;&#x901A;&#x7528; LLM &#x505A;&#x5F52;&#x56E0;&#x5668;"><a href="#3. &#x7528;&#x5C0F;&#x6A21;&#x578B;&#x6216;&#x901A;&#x7528; LLM &#x505A;&#x5F52;&#x56E0;&#x5668;"></a>3. &#x7528;&#x5C0F;&#x6A21;&#x578B;&#x6216;&#x901A;&#x7528; LLM &#x505A;&#x5F52;&#x56E0;&#x5668;</h3>
<p>&#x65E9;&#x671F;&#x4E0D;&#x9700;&#x8981;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x505A;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#xFF1A;
&#x5931;&#x8D25; trace + fault injection &#x7C7B;&#x578B;&#x5E93; + Agent &#x804C;&#x8D23;&#x8BF4;&#x660E;

&#x8F93;&#x51FA;&#xFF1A;
&#x591A;&#x4E2A;&#x5019;&#x9009;&#x5931;&#x8D25;&#x70B9; + reason + ideal action
</code></pre>
<p>&#x518D;&#x7528; replay &#x9A8C;&#x8BC1;&#x524D;&#x51E0;&#x4E2A;&#x5019;&#x9009;&#x3002;</p>
<h3 id="4. &#x628A;&#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53D8;&#x6210;&#x6539;&#x8FDB;&#x52A8;&#x4F5C;"><a href="#4. &#x628A;&#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53D8;&#x6210;&#x6539;&#x8FDB;&#x52A8;&#x4F5C;"></a>4. &#x628A;&#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53D8;&#x6210;&#x6539;&#x8FDB;&#x52A8;&#x4F5C;</h3>
<p>&#x5F52;&#x56E0;&#x8F93;&#x51FA;&#x4E0D;&#x80FD;&#x505C;&#x5728;&#x201C;&#x8C01;&#x9519;&#x4E86;&#x201D;&#x3002;</p>
<p>&#x5E94;&#x8BE5;&#x8FDB;&#x5165;&#x6539;&#x8FDB;&#x95ED;&#x73AF;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent &#x9AD8;&#x9891;&#x5931;&#x8D25;
=&gt; &#x6539;&#x68C0;&#x7D22; query expansion / &#x6587;&#x4EF6;&#x4F9D;&#x8D56;&#x8FFD;&#x8E2A;&#x3002;

CoderAgent &#x9AD8;&#x9891;&#x5931;&#x8D25;
=&gt; &#x589E;&#x52A0; patch checklist / &#x8981;&#x6C42;&#x89E3;&#x91CA;&#x884C;&#x4E3A;&#x53D8;&#x5316;&#x3002;

TesterAgent &#x9AD8;&#x9891;&#x5931;&#x8D25;
=&gt; &#x5F3A;&#x5236;&#x751F;&#x6210;&#x9A8C;&#x6536;&#x6D4B;&#x8BD5; / mutation test&#x3002;

Orchestrator &#x9AD8;&#x9891;&#x5931;&#x8D25;
=&gt; &#x6539; done criteria / &#x52A0;&#x91CD;&#x8BD5;&#x7B56;&#x7565;&#x3002;
</code></pre>
<h2 id="&#x548C; MP-Bench &#x7EC4;&#x5408;&#x540E;&#x7684;&#x63A8;&#x8350;&#x67B6;&#x6784;"><a href="#&#x548C; MP-Bench &#x7EC4;&#x5408;&#x540E;&#x7684;&#x63A8;&#x8350;&#x67B6;&#x6784;"></a>&#x548C; MP-Bench &#x7EC4;&#x5408;&#x540E;&#x7684;&#x63A8;&#x8350;&#x67B6;&#x6784;</h2>
<p>&#x4E00;&#x4E2A;&#x6BD4;&#x8F83;&#x5408;&#x7406;&#x7684;&#x5DE5;&#x7A0B;&#x5F62;&#x6001;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25; trace
  &#x2193;
&#x5019;&#x9009;&#x5F52;&#x56E0;&#x751F;&#x6210;&#x5668;&#xFF08;AgenTracer &#x601D;&#x8DEF;&#xFF09;
  &#x2193;
&#x591A;&#x89C6;&#x89D2;&#x805A;&#x5408;&#x4E0E;&#x6392;&#x5E8F;&#xFF08;MP-Bench &#x601D;&#x8DEF;&#xFF09;
  &#x2193;
Top-K &#x5019;&#x9009; replay &#x9A8C;&#x8BC1;
  &#x2193;
&#x8F93;&#x51FA;&#x8C03;&#x8BD5;&#x62A5;&#x544A;
  &#x2193;
&#x4FEE; prompt / &#x5DE5;&#x5177; / orchestration / tests
</code></pre>
<p>&#x8F93;&#x51FA;&#x62A5;&#x544A;&#x53EF;&#x4EE5;&#x957F;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;top_attributions&quot;</span>: [
    {
      <span class="hljs-attr">&quot;rank&quot;</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;TesterAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;TesterAgent did not verify the disabled behavior.&quot;</span>,
      <span class="hljs-attr">&quot;counterfactual_result&quot;</span>: <span class="hljs-string">&quot;When TesterAgent was prompted to require invalid-form test, the failure was detected.&quot;</span>,
      <span class="hljs-attr">&quot;fix&quot;</span>: <span class="hljs-string">&quot;Strengthen verifier done criteria and require behavior-level tests.&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;rank&quot;</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;SearchAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;SearchAgent missed validation hook file.&quot;</span>,
      <span class="hljs-attr">&quot;counterfactual_result&quot;</span>: <span class="hljs-string">&quot;When useLoginValidation.ts was included, CoderAgent generated a correct patch.&quot;</span>,
      <span class="hljs-attr">&quot;fix&quot;</span>: <span class="hljs-string">&quot;Improve code search with import/dependency expansion.&quot;</span>
    }
  ]
}
</code></pre>
<p>&#x8FD9;&#x6BD4;&#x8F93;&#x51FA;&#x5355;&#x4E2A;&#x201C;&#x8D23;&#x4EFB; Agent&#x201D;&#x66F4;&#x6709;&#x5DE5;&#x7A0B;&#x4EF7;&#x503C;&#x3002;</p>
<h2 id="&#x5C40;&#x9650;&#x6027;"><a href="#&#x5C40;&#x9650;&#x6027;"></a>&#x5C40;&#x9650;&#x6027;</h2>
<p>AgenTracer &#x4E5F;&#x6709;&#x660E;&#x663E;&#x8FB9;&#x754C;&#xFF1A;</p>
<ul>
<li>Fault injection &#x751F;&#x6210;&#x7684;&#x662F;&#x201C;&#x4EBA;&#x4E3A;&#x9519;&#x8BEF;&#x201D;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x8986;&#x76D6;&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x6240;&#x6709;&#x5931;&#x8D25;&#x3002;</li>
<li>Counterfactual replay &#x4F9D;&#x8D56;&#x53EF;&#x590D;&#x73B0;&#x73AF;&#x5883;&#xFF1B;&#x5F88;&#x591A;&#x751F;&#x4EA7; Agent &#x7CFB;&#x7EDF;&#x6CA1;&#x6709;&#x8FD9;&#x4E2A;&#x80FD;&#x529B;&#x3002;</li>
<li>&#x5982;&#x679C;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x5224;&#x5B9A;&#x672C;&#x8EAB;&#x4E0D;&#x53EF;&#x9760;&#xFF0C;&#x53CD;&#x4E8B;&#x5B9E;&#x7ED3;&#x679C;&#x4E5F;&#x4E0D;&#x53EF;&#x9760;&#x3002;</li>
<li>&#x5B83;&#x66F4;&#x504F;&#x5355;&#x6839;&#x56E0; / &#x53EF;&#x63A7;&#x6CE8;&#x5165;&#x8303;&#x5F0F;&#xFF0C;&#x548C; MP-Bench &#x7684;&#x591A;&#x89C6;&#x89D2;&#x771F;&#x5B9E;&#x5206;&#x6B67;&#x4ECD;&#x9700;&#x7ED3;&#x5408;&#x3002;</li>
<li>&#x8BAD;&#x7EC3;&#x4E13;&#x95E8;&#x6A21;&#x578B;&#x6210;&#x672C;&#x4E0D;&#x4F4E;&#xFF0C;&#x65E9;&#x671F;&#x5DE5;&#x7A0B;&#x4E0D;&#x4E00;&#x5B9A;&#x5212;&#x7B97;&#x3002;</li>
</ul>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>AgenTracer &#x7684;&#x6838;&#x5FC3;&#x4EF7;&#x503C;&#x662F;&#xFF1A;</p>
<p><strong>&#x628A; Agent &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4ECE;&#x201C;&#x770B;&#x65E5;&#x5FD7;&#x731C;&#x539F;&#x56E0;&#x201D;&#xFF0C;&#x63A8;&#x8FDB;&#x5230;&#x201C;&#x7528;&#x53CD;&#x4E8B;&#x5B9E;&#x8F68;&#x8FF9;&#x5B66;&#x4E60;&#x539F;&#x56E0;&#x201D;&#x3002;</strong></p>
<p>&#x5173;&#x952E;&#x70B9;&#xFF1A;</p>
<ol>
<li><strong>Counterfactual replay&#xFF1A;</strong> &#x4FEE;&#x6539;&#x67D0;&#x4E00;&#x6B65;&#xFF0C;&#x91CD;&#x8DD1;&#x540E;&#x7EED;&#xFF0C;&#x770B;&#x4EFB;&#x52A1;&#x662F;&#x5426;&#x6062;&#x590D;&#x3002;</li>
<li><strong>Fault injection&#xFF1A;</strong> &#x4ECE;&#x6210;&#x529F;&#x8F68;&#x8FF9;&#x4E3B;&#x52A8;&#x5236;&#x9020;&#x5931;&#x8D25;&#xFF0C;&#x81EA;&#x52A8;&#x83B7;&#x5F97;&#x5F52;&#x56E0;&#x6807;&#x7B7E;&#x3002;</li>
<li><strong>AgenTracer-8B&#xFF1A;</strong> &#x7528;&#x8FD9;&#x4E9B;&#x53CD;&#x4E8B;&#x5B9E;&#x6570;&#x636E;&#x8BAD;&#x7EC3;&#x4E13;&#x95E8; failure attribution &#x6A21;&#x578B;&#x3002;</li>
<li><strong>&#x5DE5;&#x7A0B;&#x95ED;&#x73AF;&#xFF1A;</strong> &#x5F52;&#x56E0;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x6539;&#x8FDB; Agent &#x7CFB;&#x7EDF;&#x3002;</li>
</ol>
<p>&#x5B9E;&#x8DF5;&#x4E0A;&#xFF0C;&#x6211;&#x66F4;&#x5EFA;&#x8BAE;&#x628A;&#x5B83;&#x548C; TraceElephant / MP-Bench &#x7EC4;&#x5408;&#xFF1A;</p>
<pre><code class="language-text">TraceElephant&#xFF1A;&#x5148;&#x628A; trace &#x8BB0;&#x5F55;&#x5B8C;&#x6574;&#x3002;
AgenTracer&#xFF1A;&#x7528; replay / fault injection &#x9A8C;&#x8BC1;&#x548C;&#x8BAD;&#x7EC3;&#x5F52;&#x56E0;&#x3002;
MP-Bench&#xFF1A;&#x4FDD;&#x7559;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#xFF0C;&#x5E76;&#x6309;&#x4F18;&#x5148;&#x7EA7;&#x6392;&#x5E8F;&#x3002;
</code></pre>
<p>&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<p><strong>AgenTracer &#x4E0D;&#x662F;&#x5355;&#x7EAF;&#x8BC4;&#x6D4B; Agent &#x9519;&#x5728;&#x54EA;&#xFF0C;&#x800C;&#x662F;&#x5C1D;&#x8BD5;&#x8BA9;&#x7CFB;&#x7EDF;&#x901A;&#x8FC7;&#x201C;&#x5982;&#x679C;&#x5F53;&#x65F6;&#x90A3;&#x4E00;&#x6B65;&#x6CA1;&#x9519;&#x4F1A;&#x600E;&#x6837;&#x201D;&#x6765;&#x5B66;&#x4E60;&#x5931;&#x8D25;&#x56E0;&#x679C;&#x3002;</strong></p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2509.03312">&#x8BBA;&#x6587;&#x539F;&#x6587;&#xFF1A;AgenTracer: Who Is Inducing Failure in the LLM Agentic Systems?</a></li>
<li><a href="https://arxiv.org/pdf/2509.03312">PDF</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-05-08</em></p>
`,n=[{level:2,title:"一句话结论",children:[]},{level:2,title:"先用一个例子说明",children:[]},{level:2,title:"AgenTracer 解决了什么问题？",children:[]},{level:2,title:"核心机制：从失败 trace 到训练数据",children:[]},{level:2,title:"1. Counterfactual Replay：从某一步重跑",children:[]},{level:2,title:"2. Fault Injection：主动制造可控错误",children:[]},{level:2,title:"3. TracerTraj：自动构造的大规模归因数据",children:[]},{level:2,title:"4. AgenTracer-8B：训练专门归因模型",children:[]},{level:2,title:"结果说明什么？",children:[]},{level:2,title:"和 TraceElephant / MP-Bench 的区别",children:[{level:3,title:"TraceElephant vs AgenTracer",children:[]},{level:3,title:"MP-Bench vs AgenTracer",children:[]}]},{level:2,title:"工程上怎么用？",children:[{level:3,title:"1. 先让 Agent 系统支持 replay",children:[]},{level:3,title:"2. 建一个小型 fault injection 集合",children:[]},{level:3,title:"3. 用小模型或通用 LLM 做归因器",children:[]},{level:3,title:"4. 把归因结果变成改进动作",children:[]}]},{level:2,title:"和 MP-Bench 组合后的推荐架构",children:[]},{level:2,title:"局限性",children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
