const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2026-04-24</em></p>
<p>&#x4E2D;&#x56FD;&#x79D1;&#x5B66;&#x9662;&#x8F6F;&#x4EF6;&#x7814;&#x7A76;&#x6240;&#x7B49;&#x56E2;&#x961F;&#x53D1;&#x5E03;&#x7684; <strong>TraceElephant</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2604.22708">Seeing the Whole Elephant: A Benchmark for Failure Attribution in LLM-based Multi-Agent Systems</a>&#x300B;&#xFF09;&#x7814;&#x7A76;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x5F88;&#x5DE5;&#x7A0B;&#x5316;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<p><strong>&#x591A; Agent &#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x540E;&#xFF0C;&#x600E;&#x4E48;&#x5224;&#x65AD;&#x201C;&#x662F;&#x8C01;&#x5BFC;&#x81F4;&#x5931;&#x8D25;&#x201D;&#xFF0C;&#x4EE5;&#x53CA;&#x201C;&#x4ECE;&#x54EA;&#x4E00;&#x6B65;&#x5F00;&#x59CB;&#x5931;&#x8D25;&#x5DF2;&#x7ECF;&#x4E0D;&#x53EF;&#x633D;&#x56DE;&#x201D;&#x3002;</strong></p>
<p>&#x6211;&#x7684;&#x5224;&#x65AD;&#xFF1A;&#x8FD9;&#x7BC7;&#x6709;&#x4EF7;&#x503C;&#x3002;&#x4E0D;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x63D0;&#x51FA;&#x4E86;&#x65B0; Agent &#x67B6;&#x6784;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x628A; Agent &#x5DE5;&#x7A0B;&#x91CC;&#x5F88;&#x91CD;&#x8981;&#x7684;&#x4E00;&#x4EF6;&#x4E8B;&#x8BB2;&#x6E05;&#x695A;&#x4E86;&#xFF1A;<strong>Agent &#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x6210;&#x529F;&#x7387;&#xFF0C;&#x8FD8;&#x5FC5;&#x987B;&#x80FD;&#x8C03;&#x8BD5;&#x5931;&#x8D25;&#x3002;</strong></p>
<h2 id="&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"><a href="#&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"></a>&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;</h2>
<p>&#x5047;&#x8BBE;&#x4F60;&#x6709;&#x4E00;&#x4E2A; Coding Agent &#x7CFB;&#x7EDF;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x6237;&#x4EFB;&#x52A1;&#xFF1A;
&#x4FEE;&#x590D;&#x767B;&#x5F55;&#x9875; bug&#xFF1A;&#x63D0;&#x4EA4;&#x6309;&#x94AE;&#x5728;&#x8868;&#x5355;&#x65E0;&#x6548;&#x65F6;&#x5E94;&#x8BE5;&#x7981;&#x7528;&#x3002;

Agent &#x5206;&#x5DE5;&#xFF1A;
PlannerAgent  &#x62C6;&#x4EFB;&#x52A1;
SearchAgent   &#x627E;&#x76F8;&#x5173;&#x4EE3;&#x7801;
CoderAgent    &#x4FEE;&#x6539;&#x4EE3;&#x7801;
TesterAgent   &#x8FD0;&#x884C;&#x6D4B;&#x8BD5;&#x5E76;&#x5224;&#x65AD;&#x662F;&#x5426;&#x4FEE;&#x597D;
</code></pre>
<p>&#x6700;&#x540E;&#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x4E86;&#xFF1A;&#x6309;&#x94AE;&#x8FD8;&#x662F;&#x6CA1;&#x6709;&#x6B63;&#x786E;&#x7981;&#x7528;&#x3002;</p>
<p>&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x53EF;&#x80FD;&#x662F;&#x8FD9;&#x6837;&#x7684;&#xFF1A;</p>
<pre><code class="language-text">Step 1 - PlannerAgent
&#x8F93;&#x51FA;&#xFF1A;&#x9700;&#x8981;&#x627E;&#x5230; login form &#x7EC4;&#x4EF6;&#x548C;&#x6821;&#x9A8C;&#x903B;&#x8F91;&#x3002;

Step 2 - SearchAgent
&#x8F93;&#x51FA;&#xFF1A;&#x627E;&#x5230;&#x4E86; LoginPage.vue&#xFF0C;&#x4F46;&#x6F0F;&#x6389;&#x4E86; useLoginValidation.ts&#x3002;

Step 3 - CoderAgent
&#x8F93;&#x5165;&#xFF1A;&#x53EA;&#x770B;&#x5230;&#x4E86; LoginPage.vue&#x3002;
&#x8F93;&#x51FA;&#xFF1A;&#x53EA;&#x6539;&#x4E86;&#x6309;&#x94AE;&#x6837;&#x5F0F;&#xFF0C;&#x6CA1;&#x6709;&#x6539; disabled &#x903B;&#x8F91;&#x3002;

Step 4 - TesterAgent
&#x8F93;&#x5165;&#xFF1A;&#x4EE3;&#x7801; diff + &#x6D4B;&#x8BD5;&#x8F93;&#x51FA;&#x3002;
&#x8F93;&#x51FA;&#xFF1A;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF0C;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x3002;

Final
&#x7EBF;&#x4E0A;&#x884C;&#x4E3A;&#x4ECD;&#x7136;&#x9519;&#x8BEF;&#x3002;
</code></pre>
<p>&#x73B0;&#x5728;&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF1A;<strong>&#x8FD9;&#x6B21;&#x5931;&#x8D25;&#x662F;&#x8C01;&#x7684;&#x9505;&#xFF1F;</strong></p>
<p>&#x76F4;&#x89C9;&#x4E0A;&#x53EF;&#x4EE5;&#x6709;&#x4E09;&#x4E2A;&#x7B54;&#x6848;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent &#x6709;&#x95EE;&#x9898;&#xFF1A;&#x5B83;&#x6F0F;&#x627E;&#x4E86; useLoginValidation.ts&#x3002;
CoderAgent &#x6709;&#x95EE;&#x9898;&#xFF1A;&#x5B83;&#x53EA;&#x6539;&#x6837;&#x5F0F;&#xFF0C;&#x6CA1;&#x6709;&#x6539;&#x903B;&#x8F91;&#x3002;
TesterAgent &#x6709;&#x95EE;&#x9898;&#xFF1A;&#x5B83;&#x5E94;&#x8BE5;&#x53D1;&#x73B0;&#x884C;&#x4E3A;&#x6CA1;&#x4FEE;&#x597D;&#xFF0C;&#x5374;&#x8BEF;&#x5224;&#x901A;&#x8FC7;&#x3002;
</code></pre>
<p>TraceElephant &#x5173;&#x5FC3;&#x7684;&#x4E0D;&#x662F;&#x6CDB;&#x6CDB;&#x5730;&#x8BF4;&#x201C;&#x5927;&#x5BB6;&#x90FD;&#x6709;&#x95EE;&#x9898;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x8981;&#x6807;&#x4E24;&#x4E2A;&#x4E1C;&#x897F;&#xFF1A;</p>
<pre><code class="language-text">1. failure-responsible agent
   &#x4E3B;&#x8981;&#x8D23;&#x4EFB; Agent &#x662F;&#x8C01;&#xFF1F;

2. decisive failure step
   &#x54EA;&#x4E00;&#x6B65;&#x8BA9;&#x5931;&#x8D25;&#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#xFF1F;
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x91CC;&#xFF0C;&#x4E00;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x53EF;&#x80FD;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">failure-responsible agent&#xFF1A;TesterAgent
decisive failure step&#xFF1A;Step 4
</code></pre>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x662F; SearchAgent &#x6216; CoderAgent&#xFF1F;</p>
<p>&#x56E0;&#x4E3A; Step 2 / Step 3 &#x7684;&#x9519;&#x8BEF;&#x7406;&#x8BBA;&#x4E0A;&#x8FD8;&#x53EF;&#x4EE5;&#x88AB; Step 4 &#x7EA0;&#x6B63;&#x3002;TesterAgent &#x7684;&#x804C;&#x8D23;&#x5C31;&#x662F;&#x9A8C;&#x8BC1;&#x662F;&#x5426;&#x771F;&#x7684;&#x4FEE;&#x597D;&#x3002;&#x5982;&#x679C;&#x5B83;&#x53D1;&#x73B0;&#x6309;&#x94AE;&#x903B;&#x8F91;&#x6CA1;&#x6539;&#xFF0C;&#x53EF;&#x4EE5;&#x8981;&#x6C42;&#x91CD;&#x65B0;&#x641C;&#x7D22;&#x6216;&#x91CD;&#x65B0;&#x4FEE;&#x6539;&#x3002;&#x5B83;&#x6CA1;&#x6709;&#x53D1;&#x73B0;&#xFF0C;&#x5931;&#x8D25;&#x624D;&#x771F;&#x6B63;&#x53D8;&#x6210;&#x6700;&#x7EC8;&#x5931;&#x8D25;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x6700;&#x5173;&#x952E;&#x7684;&#x601D;&#x60F3;&#xFF1A;</p>
<p><strong>&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x6700;&#x7EC8;&#x8D23;&#x4EFB;&#x70B9;&#xFF1B;&#x6CA1;&#x6709;&#x88AB;&#x8BE5;&#x8D1F;&#x8D23;&#x7684;&#x7EC4;&#x4EF6;&#x7EA0;&#x6B63;&#x7684;&#x9519;&#x8BEF;&#xFF0C;&#x624D;&#x53EF;&#x80FD;&#x662F; decisive failure&#x3002;</strong></p>
<h2 id="TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p>&#x5B83;&#x89E3;&#x51B3;&#x7684;&#x662F; <strong>failure attribution</strong>&#xFF0C;&#x53EF;&#x4EE5;&#x7FFB;&#x8BD1;&#x6210;&#x201C;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x201D;&#x3002;</p>
<p>&#x666E;&#x901A; benchmark &#x95EE;&#xFF1A;</p>
<pre><code class="language-text">Agent &#x6700;&#x540E;&#x505A;&#x5BF9;&#x4E86;&#x5417;&#xFF1F;
</code></pre>
<p>TraceElephant &#x95EE;&#xFF1A;</p>
<pre><code class="language-text">Agent &#x505A;&#x9519;&#x65F6;&#xFF0C;&#x80FD;&#x4E0D;&#x80FD;&#x89E3;&#x91CA;&#xFF1A;
1. &#x54EA;&#x4E2A; Agent / &#x7EC4;&#x4EF6;&#x8D1F;&#x8D23;&#xFF1F;
2. &#x54EA;&#x4E00;&#x6B65;&#x5F00;&#x59CB;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#xFF1F;
3. &#x4E3A;&#x4EC0;&#x4E48;&#x662F;&#x8FD9;&#x4E00;&#x6B65;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x66F4;&#x65E9;&#x6216;&#x66F4;&#x665A;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x5BF9; Agent &#x5DE5;&#x7A0B;&#x5F88;&#x5173;&#x952E;&#x3002;&#x56E0;&#x4E3A;&#x771F;&#x5B9E;&#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x540E;&#xFF0C;&#x4F60;&#x8981;&#x51B3;&#x5B9A;&#x4FEE;&#x54EA;&#x91CC;&#xFF1A;</p>
<pre><code class="language-text">&#x4FEE; planner&#xFF1F;
&#x4FEE; search&#xFF1F;
&#x4FEE; coder prompt&#xFF1F;
&#x52A0;&#x66F4;&#x5F3A;&#x7684; verifier&#xFF1F;
&#x6539; orchestration&#xFF1F;
&#x8865;&#x6D4B;&#x8BD5;&#xFF1F;
</code></pre>
<p>&#x5982;&#x679C;&#x5F52;&#x56E0;&#x4E0D;&#x6E05;&#x695A;&#xFF0C;&#x4F60;&#x53EA;&#x80FD;&#x62CD;&#x8111;&#x888B;&#x6539; prompt&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x4E0D;&#x591F;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x4E0D;&#x591F;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x4E0D;&#x591F;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x5F3A;&#x8C03;&#xFF1A;&#x5DF2;&#x6709;&#x4E00;&#x4E9B; benchmark &#x53EA;&#x8BB0;&#x5F55; Agent &#x6BCF;&#x4E00;&#x6B65;&#x201C;&#x8F93;&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#x201D;&#x3002;&#x8FD9;&#x4E0D;&#x591F;&#x3002;</p>
<p>&#x8FD8;&#x662F;&#x524D;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">Step 3 - CoderAgent &#x8F93;&#x51FA;&#xFF1A;
&#x4FEE;&#x6539;&#x4E86; LoginPage.vue &#x7684;&#x6309;&#x94AE;&#x6837;&#x5F0F;&#x3002;
</code></pre>
<p>&#x53EA;&#x770B;&#x8F93;&#x51FA;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x89C9;&#x5F97; CoderAgent &#x5F88;&#x8822;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x6539; disabled &#x903B;&#x8F91;&#xFF1F;</p>
<p>&#x4F46;&#x5982;&#x679C;&#x770B;&#x8F93;&#x5165;&#xFF1A;</p>
<pre><code class="language-text">Step 3 - CoderAgent &#x8F93;&#x5165;&#xFF1A;
SearchAgent &#x53EA;&#x63D0;&#x4F9B;&#x4E86; LoginPage.vue&#xFF0C;&#x6CA1;&#x6709;&#x63D0;&#x4F9B; useLoginValidation.ts&#x3002;
</code></pre>
<p>&#x90A3; CoderAgent &#x7684;&#x8D23;&#x4EFB;&#x5C31;&#x6CA1;&#x90A3;&#x4E48;&#x660E;&#x786E;&#x4E86;&#x3002;&#x5B83;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x62FF;&#x5230;&#x7684;&#x4FE1;&#x606F;&#x4E0D;&#x5B8C;&#x6574;&#x3002;</p>
<p>&#x518D;&#x770B; TesterAgent&#xFF1A;</p>
<pre><code class="language-text">Step 4 - TesterAgent &#x8F93;&#x5165;&#xFF1A;
&#x4EFB;&#x52A1;&#x8981;&#x6C42;&#xFF1A;&#x6309;&#x94AE;&#x5728;&#x8868;&#x5355;&#x65E0;&#x6548;&#x65F6;&#x5E94;&#x8BE5;&#x7981;&#x7528;&#x3002;
&#x4EE3;&#x7801; diff&#xFF1A;&#x53EA;&#x6539;&#x4E86; CSS class&#x3002;
&#x6D4B;&#x8BD5;&#x8F93;&#x51FA;&#xFF1A;&#x73B0;&#x6709;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x8986;&#x76D6; disabled &#x884C;&#x4E3A;&#x3002;

Step 4 - TesterAgent &#x8F93;&#x51FA;&#xFF1A;
&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x3002;
</code></pre>
<p>&#x8FD9;&#x65F6; TesterAgent &#x7684;&#x8D23;&#x4EFB;&#x5C31;&#x66F4;&#x660E;&#x786E;&#xFF1A;&#x5B83;&#x770B;&#x5230;&#x4E86;&#x4EFB;&#x52A1;&#x76EE;&#x6807;&#xFF0C;&#x4E5F;&#x770B;&#x5230;&#x4E86; diff&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x53D1;&#x73B0;&#x884C;&#x4E3A;&#x6CA1;&#x88AB;&#x9A8C;&#x8BC1;&#x3002;</p>
<p>&#x6240;&#x4EE5; TraceElephant &#x7684;&#x6838;&#x5FC3;&#x89C2;&#x70B9;&#x662F;&#xFF1A;</p>
<p><strong>&#x8981;&#x505A;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF0C;&#x5FC5;&#x987B;&#x8BB0;&#x5F55; input context&#x3002;&#x53EA;&#x770B; output &#x662F;&#x4E0D;&#x591F;&#x7684;&#x3002;</strong></p>
<h2 id="TraceElephant &#x8BB0;&#x5F55;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#TraceElephant &#x8BB0;&#x5F55;&#x4EC0;&#x4E48;&#xFF1F;"></a>TraceElephant &#x8BB0;&#x5F55;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x5B83;&#x8BB0;&#x5F55;&#x7684;&#x4E0D;&#x662F;&#x666E;&#x901A;&#x804A;&#x5929;&#x8BB0;&#x5F55;&#xFF0C;&#x800C;&#x662F;&#x7ED3;&#x6784;&#x5316; trace&#x3002;</p>
<p>&#x6700;&#x5C11;&#x9700;&#x8981;&#x8FD9;&#x4E9B;&#x5B57;&#x6BB5;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;step_id&quot;</span>: <span class="hljs-number">4</span>,
  <span class="hljs-attr">&quot;agent_name&quot;</span>: <span class="hljs-string">&quot;TesterAgent&quot;</span>,
  <span class="hljs-attr">&quot;input_context&quot;</span>: <span class="hljs-string">&quot;User asked to disable submit button when form is invalid. Diff only changes CSS class. Existing tests pass.&quot;</span>,
  <span class="hljs-attr">&quot;output_content&quot;</span>: <span class="hljs-string">&quot;The task is complete.&quot;</span>,
  <span class="hljs-attr">&quot;tool_logs&quot;</span>: [
    {
      <span class="hljs-attr">&quot;tool_name&quot;</span>: <span class="hljs-string">&quot;test_runner&quot;</span>,
      <span class="hljs-attr">&quot;output&quot;</span>: <span class="hljs-string">&quot;All existing tests passed.&quot;</span>
    }
  ]
}
</code></pre>
<p>&#x5BF9;&#x8C03;&#x8BD5;&#x6765;&#x8BF4;&#xFF0C;&#x51E0;&#x4E2A;&#x5B57;&#x6BB5;&#x4EF7;&#x503C;&#x4E0D;&#x540C;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x5B57;&#x6BB5;</th>
<th>&#x7528;&#x9014;</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>agent_name</code></td>
<td>&#x5224;&#x65AD;&#x8D23;&#x4EFB;&#x7EC4;&#x4EF6;</td>
</tr>
<tr>
<td><code>input_context</code></td>
<td>&#x5224;&#x65AD;&#x5B83;&#x5F53;&#x65F6;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x770B;&#x5230;&#x5173;&#x952E;&#x4FE1;&#x606F;</td>
</tr>
<tr>
<td><code>output_content</code></td>
<td>&#x5224;&#x65AD;&#x5B83;&#x505A;&#x4E86;&#x4EC0;&#x4E48;&#x51B3;&#x7B56;</td>
</tr>
<tr>
<td><code>tool_logs</code></td>
<td>&#x5224;&#x65AD;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x8BEF;&#x5BFC;&#x4E86;&#x5B83;</td>
</tr>
<tr>
<td><code>system metadata</code></td>
<td>&#x5224;&#x65AD;&#x5B83;&#x7684;&#x89D2;&#x8272;&#x804C;&#x8D23;&#x548C;&#x7CFB;&#x7EDF;&#x67B6;&#x6784;</td>
</tr>
</tbody>
</table>
<p>&#x5176;&#x4E2D;&#x6700;&#x91CD;&#x8981;&#x7684;&#x662F; <code>input_context</code>&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#x540C;&#x4E00;&#x4E2A;&#x8F93;&#x51FA;&#xFF0C;&#x5728;&#x4E0D;&#x540C;&#x8F93;&#x5165;&#x4E0B;&#x8D23;&#x4EFB;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code class="language-text">&#x60C5;&#x51B5; A&#xFF1A;
TesterAgent &#x6CA1;&#x770B;&#x5230;&#x7528;&#x6237;&#x8981;&#x6C42; disabled &#x884C;&#x4E3A;&#x3002;
=&gt; &#x53EF;&#x80FD;&#x662F;&#x4E0A;&#x6E38;&#x4FE1;&#x606F;&#x4F20;&#x9012;&#x95EE;&#x9898;&#x3002;

&#x60C5;&#x51B5; B&#xFF1A;
TesterAgent &#x770B;&#x5230;&#x4E86; disabled &#x8981;&#x6C42;&#xFF0C;&#x4F46;&#x4ECD;&#x7136;&#x8BF4;&#x5B8C;&#x6210;&#x3002;
=&gt; TesterAgent &#x66F4;&#x53EF;&#x80FD;&#x662F;&#x8D23;&#x4EFB;&#x65B9;&#x3002;
</code></pre>
<h2 id="&#x201C;&#x54EA;&#x4E00;&#x6B65;&#x5931;&#x8D25;&#x201D;&#x4E3A;&#x4EC0;&#x4E48;&#x96BE;&#xFF1F;"><a href="#&#x201C;&#x54EA;&#x4E00;&#x6B65;&#x5931;&#x8D25;&#x201D;&#x4E3A;&#x4EC0;&#x4E48;&#x96BE;&#xFF1F;"></a>&#x201C;&#x54EA;&#x4E00;&#x6B65;&#x5931;&#x8D25;&#x201D;&#x4E3A;&#x4EC0;&#x4E48;&#x96BE;&#xFF1F;</h2>
<p>&#x56E0;&#x4E3A;&#x591A; Agent &#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x9519;&#x8BEF;&#x53EF;&#x80FD;&#x4F1A;&#x88AB;&#x540E;&#x7EED;&#x6B65;&#x9AA4;&#x4FEE;&#x590D;&#x3002;</p>
<p>&#x770B;&#x8FD9;&#x4E2A;&#x7B80;&#x5316;&#x94FE;&#x8DEF;&#xFF1A;</p>
<pre><code class="language-text">Step 2 SearchAgent&#xFF1A;
&#x6F0F;&#x627E;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x6587;&#x4EF6;&#x3002;

Step 3 CoderAgent&#xFF1A;
&#x57FA;&#x4E8E;&#x4E0D;&#x5B8C;&#x6574;&#x4FE1;&#x606F;&#x5199;&#x4E86;&#x9519;&#x8BEF; patch&#x3002;

Step 4 TesterAgent&#xFF1A;
&#x672C;&#x8BE5;&#x53D1;&#x73B0;&#x884C;&#x4E3A;&#x6CA1;&#x4FEE;&#x597D;&#xFF0C;&#x4F46;&#x6CA1;&#x53D1;&#x73B0;&#x3002;

Final&#xFF1A;
&#x4EFB;&#x52A1;&#x5931;&#x8D25;&#x3002;
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x627E;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#xFF0C;&#x4F1A;&#x9009; Step 2&#x3002;</p>
<p>&#x4F46; TraceElephant &#x66F4;&#x5173;&#x5FC3;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x70B9;&#x201D;&#xFF1A;</p>
<pre><code class="language-text">Step 2 &#x9519;&#x4E86;&#xFF0C;&#x4F46; Step 3/4 &#x8FD8;&#x6709;&#x673A;&#x4F1A;&#x6062;&#x590D;&#x3002;
Step 3 &#x9519;&#x4E86;&#xFF0C;&#x4F46; Step 4 &#x8FD8;&#x6709;&#x673A;&#x4F1A;&#x6062;&#x590D;&#x3002;
Step 4 &#x9519;&#x4E86;&#xFF0C;&#x7CFB;&#x7EDF;&#x5BA3;&#x5E03;&#x5B8C;&#x6210;&#xFF0C;&#x5931;&#x8D25;&#x8FDB;&#x5165;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x3002;
</code></pre>
<p>&#x6240;&#x4EE5; Step 4 &#x66F4;&#x53EF;&#x80FD;&#x662F; decisive failure step&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x5B9A;&#x4E49;&#x6BD4;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#x66F4;&#x8D34;&#x8FD1;&#x5DE5;&#x7A0B;&#x5B9E;&#x9645;&#x3002;&#x4E00;&#x4E2A;&#x7CFB;&#x7EDF;&#x53EF;&#x4EE5;&#x5141;&#x8BB8;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#x72AF;&#x9519;&#xFF0C;&#x4F46;&#x5FC5;&#x987B;&#x6709;&#x673A;&#x5236;&#x7EA0;&#x9519;&#xFF1B;&#x771F;&#x6B63;&#x7684;&#x95EE;&#x9898;&#x5F80;&#x5F80;&#x662F;&#x7EA0;&#x9519;&#x70B9;&#x5931;&#x6548;&#x3002;</p>
<h2 id="&#x5B83;&#x600E;&#x4E48;&#x505A; benchmark&#xFF1F;"><a href="#&#x5B83;&#x600E;&#x4E48;&#x505A; benchmark&#xFF1F;"></a>&#x5B83;&#x600E;&#x4E48;&#x505A; benchmark&#xFF1F;</h2>
<p>TraceElephant &#x505A;&#x4E86;&#x4E09;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<ol>
<li>&#x6536;&#x96C6;&#x591A; Agent &#x7CFB;&#x7EDF;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3002;</li>
<li>&#x627E;&#x51FA;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x3002;</li>
<li>&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x201C;&#x8D1F;&#x8D23; Agent&#x201D;&#x548C;&#x201C;&#x5173;&#x952E;&#x5931;&#x8D25;&#x6B65;&#x9AA4;&#x201D;&#x3002;</li>
</ol>
<p>&#x6570;&#x636E;&#x8986;&#x76D6;&#x4E09;&#x4E2A;&#x7CFB;&#x7EDF;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x7CFB;&#x7EDF;</th>
<th>&#x7C7B;&#x578B;</th>
<th>&#x4EFB;&#x52A1;&#x6765;&#x6E90;</th>
<th style="text-align:right">&#x5931;&#x8D25;&#x8F68;&#x8FF9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Captain-Agent</td>
<td>&#x52A8;&#x6001;&#x7EC4;&#x961F;&#x591A; Agent</td>
<td>GAIA / AssistantBench</td>
<td style="text-align:right">85</td>
</tr>
<tr>
<td>Magentic-One</td>
<td>&#x56FA;&#x5B9A;&#x89D2;&#x8272; + Orchestrator</td>
<td>GAIA / AssistantBench</td>
<td style="text-align:right">91</td>
</tr>
<tr>
<td>SWE-Agent</td>
<td>&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B; Agent</td>
<td>SWE-Bench Verified</td>
<td style="text-align:right">44</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td>-</td>
<td>-</td>
<td style="text-align:right"><strong>220</strong></td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x51E0;&#x4E2A;&#x7CFB;&#x7EDF;&#x8986;&#x76D6;&#x4E86;&#x4E0D;&#x540C;&#x5931;&#x8D25;&#x5F62;&#x6001;&#xFF1A;</p>
<pre><code class="language-text">Captain-Agent&#xFF1A;
&#x53EF;&#x80FD;&#x9519;&#x5728;&#x9009;&#x9519; Agent&#x3001;&#x5206;&#x5DE5;&#x9519;&#x3001;&#x534F;&#x8C03;&#x9519;&#x3002;

Magentic-One&#xFF1A;
&#x53EF;&#x80FD;&#x9519;&#x5728; orchestrator &#x5206;&#x6D3E;&#x3001;&#x65E9;&#x671F;&#x8BA1;&#x5212;&#x3001;&#x91CD;&#x89C4;&#x5212;&#x3002;

SWE-Agent&#xFF1A;
&#x53EF;&#x80FD;&#x9519;&#x5728;&#x6587;&#x4EF6;&#x5B9A;&#x4F4D;&#x3001;patch&#x3001;&#x6D4B;&#x8BD5;&#x3001;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x3002;
</code></pre>
<h2 id="&#x5B83;&#x53D1;&#x73B0;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5B83;&#x53D1;&#x73B0;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5B83;&#x53D1;&#x73B0;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<h3 id="1. &#x5B8C;&#x6574; trace &#x660E;&#x663E;&#x66F4;&#x6709;&#x7528;"><a href="#1. &#x5B8C;&#x6574; trace &#x660E;&#x663E;&#x66F4;&#x6709;&#x7528;"></a>1. &#x5B8C;&#x6574; trace &#x660E;&#x663E;&#x66F4;&#x6709;&#x7528;</h3>
<p>&#x8BBA;&#x6587;&#x6BD4;&#x8F83;&#x4E86;&#x201C;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x201D;&#x548C;&#x201C;&#x770B;&#x5B8C;&#x6574; trace&#x201D;&#x7684;&#x6548;&#x679C;&#x3002;</p>
<p>&#x7ED3;&#x8BBA;&#x5F88;&#x76F4;&#x63A5;&#xFF1A;</p>
<p><strong>&#x5B8C;&#x6574; trace &#x663E;&#x8457;&#x63D0;&#x5347;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x51C6;&#x786E;&#x7387;&#x3002;</strong></p>
<p>&#x8BBA;&#x6587;&#x91CC;&#x63D0;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">&#x5B8C;&#x6574; trace &#x76F8;&#x6BD4; output-only trace&#xFF1A;
agent-level accuracy &#x63D0;&#x5347;&#x7EA6; 22%
step-level accuracy &#x63D0;&#x5347;&#x7EA6; 76%
</code></pre>
<p>&#x610F;&#x601D;&#x662F;&#xFF1A;&#x5982;&#x679C;&#x4E0D;&#x8BB0;&#x5F55;&#x8F93;&#x5165;&#x548C;&#x7CFB;&#x7EDF;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4F60;&#x5F88;&#x53EF;&#x80FD;&#x8FDE;&#x8D23;&#x4EFB;&#x65B9;&#x90FD;&#x5224;&#x65AD;&#x9519;&#xFF0C;&#x66F4;&#x522B;&#x8BF4;&#x5B9A;&#x4F4D;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x3002;</p>
<h3 id="2. &#x5B9A;&#x4F4D;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x6BD4;&#x5B9A;&#x4F4D; Agent &#x96BE;&#x5F97;&#x591A;"><a href="#2. &#x5B9A;&#x4F4D;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x6BD4;&#x5B9A;&#x4F4D; Agent &#x96BE;&#x5F97;&#x591A;"></a>2. &#x5B9A;&#x4F4D;&#x5177;&#x4F53;&#x6B65;&#x9AA4;&#x6BD4;&#x5B9A;&#x4F4D; Agent &#x96BE;&#x5F97;&#x591A;</h3>
<p>&#x6700;&#x9AD8;&#x7ED3;&#x679C;&#x5927;&#x6982;&#x662F;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x4EFB;&#x52A1;</th>
<th style="text-align:right">&#x6700;&#x597D;&#x51C6;&#x786E;&#x7387;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x627E;&#x8D1F;&#x8D23; Agent</td>
<td style="text-align:right">66.7%</td>
</tr>
<tr>
<td>&#x627E;&#x5173;&#x952E;&#x5931;&#x8D25;&#x6B65;&#x9AA4;</td>
<td style="text-align:right">33.3%</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x8BF4;&#x660E; step-level attribution &#x5F88;&#x96BE;&#x3002;</p>
<p>&#x539F;&#x56E0;&#x662F;&#x5B83;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x5206;&#x7C7B;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x679C;&#x5224;&#x65AD;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x4E00;&#x6B65;&#x662F;&#x5426;&#x771F;&#x7684;&#x9519;&#xFF1F;
&#x5B83;&#x662F;&#x5426;&#x62FF;&#x5230;&#x4E86;&#x8DB3;&#x591F;&#x4FE1;&#x606F;&#xFF1F;
&#x540E;&#x7EED;&#x662F;&#x5426;&#x8FD8;&#x6709;&#x4FEE;&#x590D;&#x673A;&#x4F1A;&#xFF1F;
&#x5B83;&#x7684;&#x89D2;&#x8272;&#x662F;&#x5426;&#x8D1F;&#x8D23;&#x515C;&#x5E95;&#xFF1F;
&#x5982;&#x679C;&#x8FD9;&#x91CC;&#x6539;&#x5BF9;&#xFF0C;&#x540E;&#x9762;&#x662F;&#x5426;&#x80FD;&#x6062;&#x590D;&#xFF1F;
</code></pre>
<h3 id="3. &#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x6709;&#x4EF7;&#x503C;"><a href="#3. &#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x6709;&#x4EF7;&#x503C;"></a>3. &#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x6709;&#x4EF7;&#x503C;</h3>
<p>&#x8BBA;&#x6587;&#x8FD8;&#x63D0;&#x4F9B;&#x53EF;&#x590D;&#x73B0;&#x73AF;&#x5883;&#xFF0C;&#x4E0D;&#x53EA;&#x662F;&#x9759;&#x6001;&#x65E5;&#x5FD7;&#x3002;</p>
<p>&#x8FD9;&#x5141;&#x8BB8;&#x505A;&#x52A8;&#x6001;&#x8C03;&#x8BD5;&#xFF1A;</p>
<pre><code class="language-text">&#x9759;&#x6001;&#x5224;&#x65AD;&#xFF1A;
&#x6211;&#x6000;&#x7591; Step 4 &#x7684; TesterAgent &#x662F;&#x5173;&#x952E;&#x5931;&#x8D25;&#x70B9;&#x3002;

&#x52A8;&#x6001;&#x9A8C;&#x8BC1;&#xFF1A;
&#x4ECE; Step 4 &#x91CD;&#x65B0;&#x8DD1;&#xFF0C;&#x628A; TesterAgent &#x7684;&#x63D0;&#x793A;&#x6539;&#x6210;&#xFF1A;
&quot;&#x8BF7;&#x68C0;&#x67E5; diff &#x662F;&#x5426;&#x771F;&#x7684;&#x5B9E;&#x73B0; disabled &#x884C;&#x4E3A;&#x3002;&quot;

&#x5982;&#x679C;&#x91CD;&#x8DD1;&#x540E;&#x7CFB;&#x7EDF;&#x53D1;&#x73B0;&#x95EE;&#x9898;&#x5E76;&#x4FEE;&#x590D;&#xFF1A;
&#x8BF4;&#x660E; Step 4 &#x7684;&#x786E;&#x662F;&#x5173;&#x952E;&#x6062;&#x590D;&#x70B9;&#x3002;
</code></pre>
<p>&#x8FD9;&#x5F88;&#x50CF;&#x8F6F;&#x4EF6;&#x8C03;&#x8BD5;&#x91CC;&#x7684;&#x65AD;&#x70B9;&#x91CD;&#x653E;&#x3002;</p>
<h2 id="&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"><a href="#&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;"></a>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x54EA;&#x91CC;&#xFF1F;</h2>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x4EF7;&#x503C;&#x4E3B;&#x8981;&#x5728;&#x5DE5;&#x7A0B;&#x65B9;&#x5411;&#x3002;</p>
<h3 id="1. Agent &#x7CFB;&#x7EDF;&#x5FC5;&#x987B;&#x4ECE;&#x7B2C;&#x4E00;&#x5929;&#x8BBE;&#x8BA1; trace"><a href="#1. Agent &#x7CFB;&#x7EDF;&#x5FC5;&#x987B;&#x4ECE;&#x7B2C;&#x4E00;&#x5929;&#x8BBE;&#x8BA1; trace"></a>1. Agent &#x7CFB;&#x7EDF;&#x5FC5;&#x987B;&#x4ECE;&#x7B2C;&#x4E00;&#x5929;&#x8BBE;&#x8BA1; trace</h3>
<p>&#x4E0D;&#x8981;&#x7B49;&#x5931;&#x8D25;&#x540E;&#x624D;&#x60F3;&#x8D77;&#x8865;&#x65E5;&#x5FD7;&#x3002;</p>
<p>&#x81F3;&#x5C11;&#x8981;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">&#x6BCF;&#x6B21; LLM &#x8C03;&#x7528;&#x7684; messages
agent role
orchestrator decision
tool call &#x53C2;&#x6570;
tool call &#x7ED3;&#x679C;
&#x5173;&#x952E;&#x72B6;&#x6001;&#x53D8;&#x66F4;
&#x6700;&#x7EC8;&#x8F93;&#x51FA;
</code></pre>
<p>&#x5982;&#x679C;&#x7F3A;&#x8FD9;&#x4E9B;&#xFF0C;&#x540E;&#x9762;&#x53EA;&#x80FD;&#x731C;&#x3002;</p>
<h3 id="2. Verifier &#x4E0D;&#x662F;&#x88C5;&#x9970;&#x7EC4;&#x4EF6;"><a href="#2. Verifier &#x4E0D;&#x662F;&#x88C5;&#x9970;&#x7EC4;&#x4EF6;"></a>2. Verifier &#x4E0D;&#x662F;&#x88C5;&#x9970;&#x7EC4;&#x4EF6;</h3>
<p>&#x5F88;&#x591A; Agent &#x7CFB;&#x7EDF;&#x4F1A;&#x52A0;&#x4E00;&#x4E2A; verifier&#xFF0C;&#x4F46; verifier &#x7ECF;&#x5E38;&#x53EA;&#x662F;&#x5F62;&#x5F0F;&#x4E0A;&#x68C0;&#x67E5;&#x3002;</p>
<p>TraceElephant &#x7684;&#x89C6;&#x89D2;&#x4F1A;&#x903C;&#x4F60;&#x95EE;&#xFF1A;</p>
<pre><code class="language-text">Verifier &#x5230;&#x5E95;&#x8D1F;&#x8D23;&#x68C0;&#x67E5;&#x4EC0;&#x4E48;&#xFF1F;
&#x5B83;&#x62FF;&#x5230;&#x4E86;&#x54EA;&#x4E9B;&#x8F93;&#x5165;&#xFF1F;
&#x5B83;&#x6709;&#x6CA1;&#x6709;&#x6743;&#x9650;&#x8981;&#x6C42;&#x91CD;&#x8BD5;&#xFF1F;
&#x5B83;&#x6F0F;&#x68C0;&#x65F6;&#x662F;&#x5426;&#x5E94;&#x8BE5;&#x5F52;&#x56E0;&#x7ED9;&#x5B83;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x4F1A;&#x63D0;&#x9AD8; Agent &#x67B6;&#x6784;&#x8BBE;&#x8BA1;&#x8D28;&#x91CF;&#x3002;</p>
<h3 id="3. &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x53EF;&#x4EE5;&#x6307;&#x5BFC;&#x7CFB;&#x7EDF;&#x4F18;&#x5316;"><a href="#3. &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x53EF;&#x4EE5;&#x6307;&#x5BFC;&#x7CFB;&#x7EDF;&#x4F18;&#x5316;"></a>3. &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x53EF;&#x4EE5;&#x6307;&#x5BFC;&#x7CFB;&#x7EDF;&#x4F18;&#x5316;</h3>
<p>&#x5982;&#x679C;&#x4F60;&#x80FD;&#x7EDF;&#x8BA1;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF0C;&#x5C31;&#x80FD;&#x77E5;&#x9053;&#x5E94;&#x8BE5;&#x4FEE;&#x54EA;&#x91CC;&#xFF1A;</p>
<pre><code class="language-text">70% &#x5931;&#x8D25;&#x6765;&#x81EA; SearchAgent &#x6F0F;&#x4E0A;&#x4E0B;&#x6587;
=&gt; &#x6539;&#x68C0;&#x7D22;&#x548C;&#x6587;&#x4EF6;&#x5B9A;&#x4F4D;&#x3002;

50% &#x5931;&#x8D25;&#x6765;&#x81EA; TesterAgent &#x8BEF;&#x5224;&#x901A;&#x8FC7;
=&gt; &#x52A0;&#x884C;&#x4E3A;&#x6D4B;&#x8BD5;&#x751F;&#x6210;&#x548C;&#x66F4;&#x4E25;&#x683C;&#x9A8C;&#x6536;&#x3002;

&#x5927;&#x91CF;&#x5931;&#x8D25;&#x6765;&#x81EA; Orchestrator &#x8FC7;&#x65E9;&#x7ED3;&#x675F;
=&gt; &#x6539; done criteria&#x3002;
</code></pre>
<p>&#x8FD9;&#x6BD4;&#x201C;&#x6574;&#x4F53;&#x6210;&#x529F;&#x7387;&#x4F4E;&#xFF0C;&#x6240;&#x4EE5;&#x6362;&#x4E2A;&#x5927;&#x6A21;&#x578B;&#x201D;&#x66F4;&#x6709;&#x6548;&#x3002;</p>
<h2 id="&#x548C;&#x666E;&#x901A; Agent benchmark &#x7684;&#x533A;&#x522B;"><a href="#&#x548C;&#x666E;&#x901A; Agent benchmark &#x7684;&#x533A;&#x522B;"></a>&#x548C;&#x666E;&#x901A; Agent benchmark &#x7684;&#x533A;&#x522B;</h2>
<p>&#x666E;&#x901A; benchmark&#xFF1A;</p>
<pre><code class="language-text">&#x6700;&#x540E;&#x6210;&#x529F;&#x4E86;&#x5417;&#xFF1F;
</code></pre>
<p>TraceElephant&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x80FD;&#x4E0D;&#x80FD;&#x5B9A;&#x4F4D;&#xFF1A;
&#x8C01;&#x9519;&#x4E86;&#xFF1F;
&#x54EA;&#x4E00;&#x6B65;&#x9519;&#x5230;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#xFF1F;
&#x9700;&#x8981;&#x4FEE;&#x7CFB;&#x7EDF;&#x7684;&#x54EA;&#x4E2A;&#x90E8;&#x5206;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x90FD;&#x91CD;&#x8981;&#x3002;</p>
<p>&#x5982;&#x679C;&#x53EA;&#x770B;&#x6210;&#x529F;&#x7387;&#xFF0C;&#x4F60;&#x77E5;&#x9053;&#x7CFB;&#x7EDF;&#x4E0D;&#x597D;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6709;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF0C;&#x4F60;&#x624D;&#x77E5;&#x9053;&#x600E;&#x4E48;&#x628A;&#x7CFB;&#x7EDF;&#x53D8;&#x597D;&#x3002;</p>
<h2 id="&#x5C40;&#x9650;&#x6027;"><a href="#&#x5C40;&#x9650;&#x6027;"></a>&#x5C40;&#x9650;&#x6027;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x4E5F;&#x6709;&#x8FB9;&#x754C;&#xFF1A;</p>
<ul>
<li>&#x6570;&#x636E;&#x53EA;&#x6709; 220 &#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#xFF0C;&#x89C4;&#x6A21;&#x4E0D;&#x5927;&#x3002;</li>
<li>&#x53EA;&#x8986;&#x76D6;&#x4E09;&#x4E2A; Agent &#x7CFB;&#x7EDF;&#xFF0C;&#x4E0D;&#x80FD;&#x4EE3;&#x8868;&#x6240;&#x6709;&#x67B6;&#x6784;&#x3002;</li>
<li>&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x201C;&#x5173;&#x952E;&#x5931;&#x8D25;&#x6B65;&#x9AA4;&#x201D;&#x672C;&#x8EAB;&#x6709;&#x4E3B;&#x89C2;&#x6027;&#x3002;</li>
<li>&#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x9002;&#x5408;&#x7814;&#x53D1;&#x573A;&#x666F;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x9002;&#x5408;&#x6240;&#x6709;&#x751F;&#x4EA7;&#x5E73;&#x53F0;&#x3002;</li>
<li>trace &#x4F1A;&#x5305;&#x542B;&#x654F;&#x611F; prompt&#x3001;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x548C;&#x4E1A;&#x52A1;&#x6570;&#x636E;&#xFF0C;&#x751F;&#x4EA7;&#x843D;&#x5730;&#x9700;&#x8981;&#x6743;&#x9650;&#x548C;&#x8131;&#x654F;&#x3002;</li>
</ul>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p><strong>TraceElephant &#x8BB2;&#x7684;&#x4E0D;&#x662F;&#x600E;&#x4E48;&#x8BA9; Agent &#x66F4;&#x806A;&#x660E;&#xFF0C;&#x800C;&#x662F;&#x600E;&#x4E48;&#x8BA9; Agent &#x5931;&#x8D25;&#x540E;&#x53EF;&#x8C03;&#x8BD5;&#x3002;</strong></p>
<p>&#x6700;&#x6838;&#x5FC3;&#x7684;&#x4E09;&#x70B9;&#xFF1A;</p>
<ol>
<li><strong>&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x8981;&#x5206; who &#x548C; when&#xFF1A;</strong> &#x8C01;&#x8D1F;&#x8D23;&#xFF0C;&#x54EA;&#x4E00;&#x6B65;&#x8BA9;&#x5931;&#x8D25;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x3002;</li>
<li><strong>&#x53EA;&#x770B;&#x8F93;&#x51FA;&#x4E0D;&#x591F;&#xFF1A;</strong> &#x5FC5;&#x987B;&#x8BB0;&#x5F55;&#x6BCF;&#x4E00;&#x6B65;&#x7684;&#x8F93;&#x5165;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x5DE5;&#x5177;&#x65E5;&#x5FD7;&#x548C;&#x7CFB;&#x7EDF;&#x914D;&#x7F6E;&#x3002;</li>
<li><strong>&#x53EF;&#x91CD;&#x653E;&#x73AF;&#x5883;&#x5F88;&#x91CD;&#x8981;&#xFF1A;</strong> &#x9759;&#x6001;&#x770B;&#x65E5;&#x5FD7;&#x53EA;&#x80FD;&#x731C;&#xFF0C;&#x52A8;&#x6001; replay &#x624D;&#x80FD;&#x9A8C;&#x8BC1;&#x5019;&#x9009;&#x5931;&#x8D25;&#x70B9;&#x3002;</li>
</ol>
<p>&#x4E00;&#x53E5;&#x8BDD;&#x7406;&#x89E3;&#xFF1A;</p>
<p><strong>Agent &#x5DE5;&#x7A0B;&#x4E0D;&#x80FD;&#x53EA;&#x6709;&#x201C;&#x8DD1;&#x8D77;&#x6765;&#x201D;&#xFF0C;&#x8FD8;&#x8981;&#x80FD;&#x5728;&#x5931;&#x8D25;&#x65F6;&#x89E3;&#x91CA;&#x6E05;&#x695A;&#x3001;&#x5B9A;&#x4F4D;&#x6E05;&#x695A;&#x3001;&#x4FEE;&#x590D;&#x6E05;&#x695A;&#x3002;</strong></p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2604.22708">&#x8BBA;&#x6587;&#x539F;&#x6587;&#xFF1A;Seeing the Whole Elephant: A Benchmark for Failure Attribution in LLM-based Multi-Agent Systems</a></li>
<li><a href="https://arxiv.org/html/2604.22708v1">arXiv HTML &#x7248;&#x672C;</a></li>
<li><a href="https://github.com/TraceElephant/TraceElephant">&#x5B98;&#x65B9;&#x4EE3;&#x7801;&#x4E0E;&#x6570;&#x636E;&#x4ED3;&#x5E93;&#xFF1A;TraceElephant/TraceElephant</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-05-08</em></p>
`,E=[{level:2,title:"先用一个例子说明",children:[]},{level:2,title:"TraceElephant 解决了什么问题？",children:[]},{level:2,title:"为什么只看输出不够？",children:[]},{level:2,title:"TraceElephant 记录什么？",children:[]},{level:2,title:"“哪一步失败”为什么难？",children:[]},{level:2,title:"它怎么做 benchmark？",children:[]},{level:2,title:"它发现了什么？",children:[{level:3,title:"1. 完整 trace 明显更有用",children:[]},{level:3,title:"2. 定位具体步骤比定位 Agent 难得多",children:[]},{level:3,title:"3. 可重放环境有价值",children:[]}]},{level:2,title:"这篇论文的价值在哪里？",children:[{level:3,title:"1. Agent 系统必须从第一天设计 trace",children:[]},{level:3,title:"2. Verifier 不是装饰组件",children:[]},{level:3,title:"3. 失败归因可以指导系统优化",children:[]}]},{level:2,title:"和普通 Agent benchmark 的区别",children:[]},{level:2,title:"局限性",children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
