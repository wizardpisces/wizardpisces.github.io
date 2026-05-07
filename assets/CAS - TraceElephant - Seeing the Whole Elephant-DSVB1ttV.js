const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2026-04-24</em></p>
<p>&#x4E2D;&#x56FD;&#x79D1;&#x5B66;&#x9662;&#x8F6F;&#x4EF6;&#x7814;&#x7A76;&#x6240;&#x7B49;&#x56E2;&#x961F;&#x53D1;&#x5E03;&#x7684; <strong>TraceElephant</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2604.22708">Seeing the Whole Elephant: A Benchmark for Failure Attribution in LLM-based Multi-Agent Systems</a>&#x300B;&#xFF09;&#x662F;&#x4E00;&#x7BC7;&#x5173;&#x4E8E; <strong>LLM &#x591A;&#x667A;&#x80FD;&#x4F53;&#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF08;Failure Attribution&#xFF09;</strong> &#x7684; benchmark &#x8BBA;&#x6587;&#xFF0C;&#x5DF2;&#x88AB; ACL 2026 &#x63A5;&#x6536;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7814;&#x7A76;&#x7684;&#x662F;&#xFF1A;<strong>&#x5F53;&#x4E00;&#x4E2A;&#x591A; Agent &#x7CFB;&#x7EDF;&#x4EFB;&#x52A1;&#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x6211;&#x4EEC;&#x5982;&#x4F55;&#x5224;&#x65AD;&#x201C;&#x5230;&#x5E95;&#x662F;&#x54EA;&#x4E2A; Agent &#x7684;&#x9505;&#xFF0C;&#x4EE5;&#x53CA;&#x4ECE;&#x54EA;&#x4E00;&#x6B65;&#x5F00;&#x59CB;&#x5931;&#x8D25;&#x5DF2;&#x7ECF;&#x4E0D;&#x53EF;&#x633D;&#x56DE;&#x201D;&#xFF1F;</strong></p>
<p>&#x6211;&#x8BA4;&#x4E3A;&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x5F88;&#x6709;&#x4EF7;&#x503C;&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x63D0;&#x51FA;&#x4E00;&#x4E2A;&#x66F4;&#x5F3A;&#x7684; agent &#x6846;&#x67B6;&#xFF0C;&#x800C;&#x662F;&#x8865;&#x4E0A;&#x4E86; Agent &#x5DE5;&#x7A0B;&#x91CC;&#x975E;&#x5E38;&#x5173;&#x952E;&#x4F46;&#x7ECF;&#x5E38;&#x88AB;&#x5FFD;&#x89C6;&#x7684;&#x4E00;&#x73AF;&#xFF1A;<strong>&#x53EF;&#x89C2;&#x6D4B;&#x6027;&#x3001;&#x53EF;&#x590D;&#x73B0;&#x6027;&#x3001;&#x53EF;&#x5F52;&#x56E0;&#x6027;</strong>&#x3002;&#x5982;&#x679C;&#x672A;&#x6765;&#x6211;&#x4EEC;&#x771F;&#x7684;&#x8981;&#x628A;&#x591A;&#x4E2A; LLM Agent &#x7528;&#x5728;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x3001;&#x7814;&#x7A76;&#x52A9;&#x7406;&#x3001;&#x81EA;&#x52A8;&#x8FD0;&#x7EF4;&#x3001;&#x4E1A;&#x52A1;&#x6D41;&#x7A0B;&#x81EA;&#x52A8;&#x5316;&#x91CC;&#xFF0C;&#x8C03;&#x8BD5;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x4F1A;&#x53D8;&#x6210;&#x521A;&#x9700;&#x3002;</p>
<h2 id="TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>TraceElephant &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM &#x591A; Agent &#x7CFB;&#x7EDF;&#x4E00;&#x65E6;&#x5931;&#x8D25;&#xFF0C;&#x5F88;&#x96BE;&#x5224;&#x65AD;&#x201C;&#x8C01;&#x5BFC;&#x81F4;&#x5931;&#x8D25;&#x3001;&#x54EA;&#x4E00;&#x6B65;&#x5BFC;&#x81F4;&#x5931;&#x8D25;&#x201D;&#x3002;</strong></p>
<p>&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x51FA; bug&#xFF0C;&#x81F3;&#x5C11;&#x8FD8;&#x6709;&#x660E;&#x786E;&#x7684;&#x4EE3;&#x7801;&#x8DEF;&#x5F84;&#x3001;&#x8C03;&#x7528;&#x6808;&#x3001;&#x5F02;&#x5E38;&#x65E5;&#x5FD7;&#x3001;&#x6D4B;&#x8BD5;&#x65AD;&#x8A00;&#x3002;&#x4F46; LLM-based MAS&#xFF08;Multi-Agent Systems&#xFF0C;&#x591A;&#x667A;&#x80FD;&#x4F53;&#x7CFB;&#x7EDF;&#xFF09;&#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x95EE;&#x9898;&#x4F1A;&#x590D;&#x6742;&#x5F88;&#x591A;&#xFF1A;</p>
<ul>
<li>Agent &#x7684;&#x51B3;&#x7B56;&#x662F;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#xFF0C;&#x4E0D;&#x662F;&#x56FA;&#x5B9A;&#x4EE3;&#x7801;&#x5206;&#x652F;&#x3002;</li>
<li>&#x591A;&#x4E2A; Agent &#x4E4B;&#x95F4;&#x4E92;&#x76F8;&#x4F20;&#x8BDD;&#xFF0C;&#x9519;&#x8BEF;&#x53EF;&#x80FD;&#x88AB;&#x4F20;&#x9012;&#x3001;&#x653E;&#x5927;&#x3001;&#x63A9;&#x76D6;&#x3002;</li>
<li>&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x3001;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x3001;&#x73AF;&#x5883;&#x72B6;&#x6001;&#x4F1A;&#x6539;&#x53D8;&#x540E;&#x7EED;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li>&#x540C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x91CD;&#x590D;&#x8DD1;&#xFF0C;&#x8F68;&#x8FF9;&#x4E5F;&#x53EF;&#x80FD;&#x4E0D;&#x540C;&#x3002;</li>
<li>&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x9519;&#x4E86;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x6700;&#x540E;&#x4E00;&#x6B65;&#x624D;&#x9519;&#xFF0C;&#x53EF;&#x80FD;&#x4E00;&#x5F00;&#x59CB;&#x7684;&#x4EFB;&#x52A1;&#x62C6;&#x89E3;&#x5C31;&#x5DF2;&#x7ECF;&#x57CB;&#x96F7;&#x3002;</li>
</ul>
<p>&#x4E3E;&#x4E2A;&#x975E;&#x5E38;&#x65E5;&#x5E38;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#xFF1A;
&#x5E2E;&#x6211;&#x89C4;&#x5212;&#x7B2C;&#x4E00;&#x6B21;&#x53BB; Walt Disney World &#x7684; 3 &#x5929;&#x884C;&#x7A0B;&#x3002;

Agent &#x7CFB;&#x7EDF;&#xFF1A;
PlannerAgent    &#x8D1F;&#x8D23;&#x62C6;&#x4EFB;&#x52A1;&#x548C;&#x6574;&#x5408;&#x65B9;&#x6848;
SearchAgent     &#x8D1F;&#x8D23;&#x67E5;&#x8D44;&#x6599;
ItineraryAgent  &#x8D1F;&#x8D23;&#x6392;&#x65E5;&#x7A0B;
VerifierAgent   &#x8D1F;&#x8D23;&#x68C0;&#x67E5;&#x53EF;&#x884C;&#x6027;
</code></pre>
<p>&#x7CFB;&#x7EDF;&#x6700;&#x540E;&#x7ED9;&#x4E86;&#x4E00;&#x4E2A;&#x5931;&#x8D25;&#x65B9;&#x6848;&#xFF0C;&#x6BD4;&#x5982;&#x6F0F;&#x6389;&#x4E86;&#x5173;&#x952E;&#x7EA6;&#x675F;&#x3001;&#x5B89;&#x6392;&#x4E86;&#x4E0D;&#x53EF;&#x884C;&#x7684; park &#x987A;&#x5E8F;&#x3001;&#x6216;&#x8005;&#x4F7F;&#x7528;&#x4E86;&#x9519;&#x8BEF;&#x7968;&#x79CD;&#x3002;&#x90A3;&#x5230;&#x5E95;&#x662F;&#x8C01;&#x9519;&#x4E86;&#xFF1F;</p>
<p>&#x53EF;&#x80FD;&#x6709;&#x5F88;&#x591A;&#x7B54;&#x6848;&#xFF1A;</p>
<pre><code class="language-text">&#x53EF;&#x80FD; 1&#xFF1A;PlannerAgent &#x4E00;&#x5F00;&#x59CB;&#x4EFB;&#x52A1;&#x62C6;&#x9519;&#x4E86;
&#x53EF;&#x80FD; 2&#xFF1A;SearchAgent &#x67E5;&#x5230;&#x4E86;&#x8FC7;&#x671F;&#x7968;&#x52A1;&#x4FE1;&#x606F;
&#x53EF;&#x80FD; 3&#xFF1A;ItineraryAgent &#x6CA1;&#x7406;&#x89E3; ticket &#x9650;&#x5236;
&#x53EF;&#x80FD; 4&#xFF1A;VerifierAgent &#x672C;&#x8BE5;&#x53D1;&#x73B0;&#x51B2;&#x7A81;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x53D1;&#x73B0;
&#x53EF;&#x80FD; 5&#xFF1A;Orchestrator &#x628A;&#x4EFB;&#x52A1;&#x6D3E;&#x7ED9;&#x4E86;&#x4E0D;&#x5408;&#x9002;&#x7684; Agent
</code></pre>
<p>TraceElephant &#x8981;&#x89E3;&#x51B3;&#x7684;&#x5C31;&#x662F;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#xFF1A;
&#x4E00;&#x6761;&#x5931;&#x8D25;&#x7684; Agent &#x6267;&#x884C;&#x8F68;&#x8FF9;

&#x8F93;&#x51FA;&#xFF1A;
1. failure-responsible agent&#xFF1A;&#x4E3B;&#x8981;&#x8D1F;&#x8D23;&#x5931;&#x8D25;&#x7684; Agent / &#x7EC4;&#x4EF6;&#x662F;&#x8C01;&#xFF1F;
2. decisive failure step&#xFF1A;&#x54EA;&#x4E00;&#x6B65;&#x8BA9;&#x5931;&#x8D25;&#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x907F;&#x514D;&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x7684;&#x91CD;&#x70B9;&#x4E0D;&#x662F;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x770B;&#x8D77;&#x6765;&#x9519;&#x7684;&#x5730;&#x65B9;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x201C;&#x4ECE;&#x54EA;&#x4E00;&#x6B65;&#x5F00;&#x59CB;&#xFF0C;&#x7CFB;&#x7EDF;&#x5DF2;&#x7ECF;&#x5931;&#x53BB;&#x6062;&#x590D;&#x673A;&#x4F1A;&#x201D;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x975E;&#x5E38;&#x771F;&#x5B9E;&#xFF0C;&#x800C;&#x4E14;&#x8D8A;&#x590D;&#x6742;&#x7684; Agent &#x7CFB;&#x7EDF;&#x8D8A;&#x771F;&#x5B9E;&#x3002;</strong></p>
<p>&#x8BBA;&#x6587;&#x6307;&#x51FA;&#xFF0C;&#x5DF2;&#x6709;&#x7684; failure attribution benchmark&#xFF08;&#x4F8B;&#x5982; Who&amp;When&#xFF09;&#x4E3B;&#x8981;&#x4F9D;&#x8D56; <strong>output-only traces</strong>&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x53EA;&#x770B; Agent &#x6BCF;&#x4E00;&#x6B65;&#x8F93;&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4F46;&#x770B;&#x4E0D;&#x5230;&#x5B83;&#x5F53;&#x65F6;&#x6536;&#x5230;&#x7684;&#x8F93;&#x5165;&#x3001;prompt&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x5DE5;&#x5177;&#x65E5;&#x5FD7;&#x3001;&#x7CFB;&#x7EDF;&#x914D;&#x7F6E;&#x3002;</p>
<p>&#x8FD9;&#x4F1A;&#x5BFC;&#x81F4;&#x4E00;&#x4E2A;&#x5F88;&#x4E25;&#x91CD;&#x7684;&#x95EE;&#x9898;&#xFF1A;<strong>&#x4F60;&#x770B;&#x5230; Agent &#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4F46;&#x4E0D;&#x77E5;&#x9053;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x8FD9;&#x4E48;&#x8BF4;&#x3002;</strong></p>
<p>&#x7EE7;&#x7EED;&#x7528; Disney &#x65C5;&#x884C;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">Step 4 - PlannerAgent &#x8F93;&#x51FA;&#xFF1A;
&quot;Day 1 Magic Kingdom, Day 2 EPCOT, Day 3 Hollywood Studios.&quot;
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x4F1A;&#x89C9;&#x5F97; PlannerAgent &#x6CA1;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#x3002;&#x4F46;&#x5982;&#x679C;&#x80FD;&#x770B;&#x5230;&#x8F93;&#x5165;&#xFF0C;&#x5C31;&#x53EF;&#x80FD;&#x53D1;&#x73B0;&#xFF1A;</p>
<pre><code class="language-text">Step 4 - PlannerAgent &#x8F93;&#x5165;&#xFF1A;
&quot;Theme parks and ticket options have been retrieved.
Ticket info: standard ticket allows one park per day.&quot;
</code></pre>
<p>&#x8FD9;&#x65F6; PlannerAgent &#x7684;&#x65B9;&#x6848;&#x5C31;&#x5408;&#x7406;&#x3002;&#x53CD;&#x8FC7;&#x6765;&#xFF0C;&#x5982;&#x679C;&#x8F93;&#x5165;&#x91CC;&#x5176;&#x5B9E;&#x5305;&#x542B;&#xFF1A;</p>
<pre><code class="language-text">&quot;The family wants to visit Animal Kingdom because of young children.&quot;
</code></pre>
<p>&#x4F46; PlannerAgent &#x6CA1;&#x6709;&#x5B89;&#x6392; Animal Kingdom&#xFF0C;&#x90A3;&#x5B83;&#x5C31;&#x53EF;&#x80FD;&#x662F;&#x8D23;&#x4EFB;&#x65B9;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x7684;&#x5173;&#x952E;&#x4E0D;&#x53EA;&#x662F;&#x8BB0;&#x5F55;&#x8F93;&#x51FA;&#xFF0C;&#x800C;&#x662F;&#x8BB0;&#x5F55;&#x6BCF;&#x4E00;&#x6B65; Agent <strong>&#x5B9E;&#x9645;&#x770B;&#x5230;&#x4E86;&#x4EC0;&#x4E48;&#x4E0A;&#x4E0B;&#x6587;</strong>&#x3002;</p>
<p>&#x8BBA;&#x6587;&#x7ED9;&#x4E86;&#x51E0;&#x4E2A;&#x5F88;&#x6709;&#x5206;&#x91CF;&#x7684;&#x6570;&#x636E;&#xFF1A;</p>
<ul>
<li>TraceElephant &#x6536;&#x96C6;&#x4E86; <strong>380 &#x6761;&#x6267;&#x884C;&#x8F68;&#x8FF9;</strong>&#xFF0C;&#x5176;&#x4E2D; <strong>220 &#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;</strong>&#x7528;&#x4E8E;&#x5F52;&#x56E0; benchmark&#x3002;</li>
<li>&#x8986;&#x76D6;&#x4E09;&#x4E2A;&#x4EE3;&#x8868;&#x6027; Agent &#x7CFB;&#x7EDF;&#xFF1A;<strong>Captain-Agent&#x3001;Magentic-One&#x3001;SWE-Agent</strong>&#x3002;</li>
<li>&#x4EFB;&#x52A1;&#x6765;&#x81EA; <strong>GAIA&#x3001;AssistantBench&#x3001;SWE-Bench Verified</strong>&#x3002;</li>
<li>&#x76F8;&#x6BD4; output-only trace&#xFF0C;&#x5B8C;&#x6574;&#x53EF;&#x89C2;&#x6D4B; trace &#x8BA9; agent-level accuracy &#x63D0;&#x5347;&#x7EA6; <strong>22%</strong>&#xFF0C;step-level accuracy &#x63D0;&#x5347;&#x7EA6; <strong>76%</strong>&#x3002;</li>
<li>&#x5982;&#x679C;&#x518D;&#x63D0;&#x4F9B;&#x53EF;&#x590D;&#x73B0;&#x6267;&#x884C;&#x73AF;&#x5883;&#xFF0C;step-level attribution &#x8FD8;&#x80FD;&#x7EE7;&#x7EED;&#x63D0;&#x5347;&#x7EA6; <strong>10%</strong>&#x3002;</li>
</ul>
<p>&#x8FD9;&#x8BF4;&#x660E;&#xFF1A;<strong>&#x7F3A;&#x5C11;&#x8F93;&#x5165;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x548C;&#x73AF;&#x5883;&#x72B6;&#x6001;&#x65F6;&#xFF0C;&#x5F88;&#x591A;&#x5931;&#x8D25;&#x6839;&#x56E0;&#x6839;&#x672C;&#x4E0D;&#x53EF;&#x5224;&#x5B9A;&#x3002;</strong></p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<p>&#x7C7B;&#x4F3C;&#x201C;&#x5931;&#x8D25;&#x5B9A;&#x4F4D;&#x201D;&#x5728;&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x91CC;&#x65E9;&#x5C31;&#x6709;&#x4E86;&#xFF0C;&#x6BD4;&#x5982; statistical debugging&#x3001;delta debugging&#x3001;fault localization&#x3002;&#x4F46; LLM Agent &#x628A;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x53D8;&#x6210;&#x4E86;&#x65B0;&#x7269;&#x79CD;&#x3002;</p>
<h3 id="1. Agent &#x7684;&#x201C;&#x72B6;&#x6001;&#x201D;&#x53D8;&#x6210;&#x4E86;&#x81EA;&#x7136;&#x8BED;&#x8A00;"><a href="#1. Agent &#x7684;&#x201C;&#x72B6;&#x6001;&#x201D;&#x53D8;&#x6210;&#x4E86;&#x81EA;&#x7136;&#x8BED;&#x8A00;"></a>1. Agent &#x7684;&#x201C;&#x72B6;&#x6001;&#x201D;&#x53D8;&#x6210;&#x4E86;&#x81EA;&#x7136;&#x8BED;&#x8A00;</h3>
<p>&#x4F20;&#x7EDF;&#x7A0B;&#x5E8F;&#x72B6;&#x6001;&#x901A;&#x5E38;&#x662F;&#x53D8;&#x91CF;&#x3001;&#x5BF9;&#x8C61;&#x3001;&#x6808;&#x5E27;&#x3001;&#x6570;&#x636E;&#x5E93;&#x8BB0;&#x5F55;&#xFF1B;&#x800C; Agent &#x7CFB;&#x7EDF;&#x7684;&#x5927;&#x91CF;&#x72B6;&#x6001;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">prompt
system message
intermediate messages
tool result summary
agent instruction
planner &#x7684;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x8BA1;&#x5212;
&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x6458;&#x8981;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x4E1C;&#x897F;&#x5F88;&#x96BE;&#x7528;&#x4F20;&#x7EDF; fault localization &#x65B9;&#x6CD5;&#x76F4;&#x63A5;&#x5EFA;&#x6A21;&#x3002;</p>
<h3 id="2. &#x591A; Agent &#x9519;&#x8BEF;&#x7ECF;&#x5E38;&#x4E0D;&#x662F;&#x5C40;&#x90E8;&#x9519;&#x8BEF;"><a href="#2. &#x591A; Agent &#x9519;&#x8BEF;&#x7ECF;&#x5E38;&#x4E0D;&#x662F;&#x5C40;&#x90E8;&#x9519;&#x8BEF;"></a>2. &#x591A; Agent &#x9519;&#x8BEF;&#x7ECF;&#x5E38;&#x4E0D;&#x662F;&#x5C40;&#x90E8;&#x9519;&#x8BEF;</h3>
<p>&#x4E00;&#x4E2A; Agent &#x7684;&#x8F93;&#x51FA;&#x9519;&#x4E86;&#xFF0C;&#x4F46;&#x8D23;&#x4EFB;&#x4E0D;&#x4E00;&#x5B9A;&#x5728;&#x5B83;&#x81EA;&#x5DF1;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent &#x8F93;&#x51FA;&#x4E86;&#x9519;&#x8BEF;&#x8D44;&#x6599;
ItineraryAgent &#x4F7F;&#x7528;&#x4E86;&#x9519;&#x8BEF;&#x8D44;&#x6599;
VerifierAgent &#x6CA1;&#x6709;&#x53D1;&#x73B0;&#x9519;&#x8BEF;
&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x5931;&#x8D25;
</code></pre>
<p>&#x5982;&#x679C; VerifierAgent &#x7684;&#x804C;&#x8D23;&#x660E;&#x786E;&#x5C31;&#x662F;&#x201C;&#x68C0;&#x67E5;&#x4E8B;&#x5B9E;&#x4E00;&#x81F4;&#x6027;&#x201D;&#xFF0C;&#x90A3; decisive failure step &#x53EF;&#x80FD;&#x4E0D;&#x662F; SearchAgent &#x7684;&#x9519;&#x8BEF;&#x8D44;&#x6599;&#xFF0C;&#x800C;&#x662F; VerifierAgent &#x672A;&#x80FD;&#x7EA0;&#x9519;&#x7684;&#x90A3;&#x4E00;&#x6B65;&#x3002;</p>
<p>&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x5F52;&#x56E0;&#x9700;&#x8981;&#x7406;&#x89E3; <strong>&#x89D2;&#x8272;&#x8D23;&#x4EFB;</strong> &#x548C; <strong>&#x6062;&#x590D;&#x673A;&#x4F1A;</strong>&#xFF0C;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x627E;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x3002;</p>
<h3 id="3. Agent &#x5F00;&#x59CB;&#x8FDB;&#x5165;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#xFF0C;&#x8C03;&#x8BD5;&#x9700;&#x6C42;&#x53D8;&#x5F3A;"><a href="#3. Agent &#x5F00;&#x59CB;&#x8FDB;&#x5165;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#xFF0C;&#x8C03;&#x8BD5;&#x9700;&#x6C42;&#x53D8;&#x5F3A;"></a>3. Agent &#x5F00;&#x59CB;&#x8FDB;&#x5165;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#xFF0C;&#x8C03;&#x8BD5;&#x9700;&#x6C42;&#x53D8;&#x5F3A;</h3>
<p>&#x5F53; Agent &#x53EA;&#x662F; demo&#xFF0C;&#x5931;&#x8D25;&#x4E86;&#x91CD;&#x8DD1;&#x4E00;&#x6B21;&#x5C31;&#x884C;&#x3002;&#x4F46;&#x5982;&#x679C; Agent &#x5F00;&#x59CB;&#x5199;&#x4EE3;&#x7801;&#x3001;&#x8DD1;&#x5DE5;&#x5177;&#x3001;&#x67E5;&#x4E1A;&#x52A1;&#x6570;&#x636E;&#x3001;&#x751F;&#x6210;&#x62A5;&#x544A;&#x3001;&#x6267;&#x884C;&#x5DE5;&#x4F5C;&#x6D41;&#xFF0C;&#x90A3;&#x4E48;&#x5F00;&#x53D1;&#x8005;&#x4F1A;&#x95EE;&#xFF1A;</p>
<pre><code class="language-text">&#x4E3A;&#x4EC0;&#x4E48;&#x5931;&#x8D25;&#xFF1F;
&#x54EA;&#x4E2A;&#x7EC4;&#x4EF6;&#x6700;&#x5BB9;&#x6613;&#x5931;&#x8D25;&#xFF1F;
&#x662F;&#x89C4;&#x5212;&#x95EE;&#x9898;&#x3001;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x95EE;&#x9898;&#x3001;&#x4FE1;&#x606F;&#x4F20;&#x9012;&#x95EE;&#x9898;&#xFF0C;&#x8FD8;&#x662F;&#x9A8C;&#x8BC1;&#x7F3A;&#x5931;&#xFF1F;
&#x6211;&#x5E94;&#x8BE5;&#x4FEE; prompt&#x3001;&#x4FEE;&#x5DE5;&#x5177;&#x3001;&#x4FEE; orchestration&#xFF0C;&#x8FD8;&#x662F;&#x52A0; verifier&#xFF1F;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; TraceElephant &#x7684;&#x5207;&#x5165;&#x70B9;&#xFF1A;&#x5B83;&#x628A; failure attribution &#x53D8;&#x6210;&#x4E00;&#x4E2A; developer-facing debugging task&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x505A;&#x9ED1;&#x76D2;&#x8BC4;&#x6D4B;&#x3002;</p>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>TraceElephant &#x7684;&#x8D21;&#x732E;&#x53EF;&#x4EE5;&#x62C6;&#x6210;&#x56DB;&#x5C42;&#xFF1A;</p>
<ol>
<li><strong>&#x5B9A;&#x4E49;&#x95EE;&#x9898;&#xFF1A;</strong> &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x8C01;&#x9519;&#x4E86;&#x201D;&#xFF0C;&#x8FD8;&#x5305;&#x62EC;&#x201C;&#x54EA;&#x4E00;&#x6B65;&#x8BA9;&#x5931;&#x8D25;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x201D;&#x3002;</li>
<li><strong>&#x6784;&#x9020;&#x6570;&#x636E;&#xFF1A;</strong> &#x6536;&#x96C6;&#x5B8C;&#x6574;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#xFF0C;&#x5305;&#x62EC;&#x8F93;&#x5165;&#x3001;&#x8F93;&#x51FA;&#x3001;&#x5DE5;&#x5177;&#x65E5;&#x5FD7;&#x3001;&#x7CFB;&#x7EDF;&#x914D;&#x7F6E;&#x3002;</li>
<li><strong>&#x63D0;&#x4F9B;&#x73AF;&#x5883;&#xFF1A;</strong> &#x4E0D;&#x53EA;&#x662F;&#x9759;&#x6001;&#x65E5;&#x5FD7;&#xFF0C;&#x8FD8;&#x7ED9;&#x53EF;&#x590D;&#x73B0;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#xFF0C;&#x652F;&#x6301; replay &#x548C; counterfactual debugging&#x3002;</li>
<li><strong>&#x8BC4;&#x4F30;&#x65B9;&#x6CD5;&#xFF1A;</strong> &#x7CFB;&#x7EDF;&#x6BD4;&#x8F83;&#x4E0D;&#x540C;&#x5F52;&#x56E0;&#x6280;&#x672F;&#x5728;&#x5B8C;&#x6574;/&#x7F3A;&#x5931;&#x4FE1;&#x606F;&#x4E0B;&#x7684;&#x8868;&#x73B0;&#x3002;</li>
</ol>
<p>&#x4E0B;&#x9762;&#x7528;&#x4E00;&#x4E2A;&#x8D2F;&#x7A7F;&#x4F8B;&#x5B50;&#x6765;&#x62C6;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x4E00;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x5230;&#x5931;&#x8D25;&#x5F52;&#x56E0;"><a href="#&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x4E00;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x5230;&#x5931;&#x8D25;&#x5F52;&#x56E0;"></a>&#x6838;&#x5FC3;&#x673A;&#x5236;&#xFF1A;&#x4ECE;&#x4E00;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x5230;&#x5931;&#x8D25;&#x5F52;&#x56E0;</h2>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A;&#x591A; Agent &#x65C5;&#x884C;&#x89C4;&#x5212;&#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x4E86;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#xFF1A;
&#x7ED9;&#x7B2C;&#x4E00;&#x6B21;&#x53BB; Disney World &#x7684;&#x5BB6;&#x5EAD;&#x89C4;&#x5212; 3 &#x5929;&#x884C;&#x7A0B;&#x3002;

&#x9690;&#x85CF;&#x7EA6;&#x675F;&#xFF1A;
&#x5BB6;&#x5EAD;&#x6709;&#x5C0F;&#x5B69;&#xFF0C;&#x660E;&#x786E;&#x5E0C;&#x671B;&#x5B89;&#x6392; Animal Kingdom&#x3002;

&#x6700;&#x7EC8;&#x5931;&#x8D25;&#xFF1A;
&#x6700;&#x7EC8;&#x65B9;&#x6848;&#x6CA1;&#x6709;&#x5B89;&#x6392; Animal Kingdom&#xFF0C;&#x4E14;&#x7406;&#x7531;&#x4E0D;&#x5145;&#x5206;&#x3002;
</code></pre>
<h3 id="1. &#x5B8C;&#x6574; trace &#x8BB0;&#x5F55;&#xFF1A;&#x4E0D;&#x53EA;&#x8BB0;&#x5F55;&#x201C;&#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#x201D;"><a href="#1. &#x5B8C;&#x6574; trace &#x8BB0;&#x5F55;&#xFF1A;&#x4E0D;&#x53EA;&#x8BB0;&#x5F55;&#x201C;&#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#x201D;"></a>1. &#x5B8C;&#x6574; trace &#x8BB0;&#x5F55;&#xFF1A;&#x4E0D;&#x53EA;&#x8BB0;&#x5F55;&#x201C;&#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#x201D;</h3>
<p>TraceElephant &#x8BB0;&#x5F55;&#x7684;&#x4E0D;&#x662F;&#x804A;&#x5929; transcript&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4EFD;&#x7ED3;&#x6784;&#x5316; JSON trace&#x3002;</p>
<p>&#x5B83;&#x5305;&#x542B;&#x4E24;&#x7C7B;&#x4FE1;&#x606F;&#xFF1A;</p>
<pre><code class="language-text">Trace metadata&#xFF1A;
  task_id
  task_instruction
  system_name
  agent_configuration
  system_architecture

Step-level records&#xFF1A;
  step_id
  agent_id / agent_name
  input_context
  output_content
  tool_logs
</code></pre>
<p>&#x7528;&#x4F8B;&#x5B50;&#x8868;&#x793A;&#xFF0C;&#x5927;&#x6982;&#x662F;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;trace_metadata&quot;</span>: {
    <span class="hljs-attr">&quot;task_id&quot;</span>: <span class="hljs-string">&quot;WDW-TRAVEL-001&quot;</span>,
    <span class="hljs-attr">&quot;task_instruction&quot;</span>: <span class="hljs-string">&quot;Plan a 3-day Disney World trip for a first-time family visitor.&quot;</span>,
    <span class="hljs-attr">&quot;system_name&quot;</span>: <span class="hljs-string">&quot;Magentic-One&quot;</span>,
    <span class="hljs-attr">&quot;agent_configuration&quot;</span>: {
      <span class="hljs-attr">&quot;agents&quot;</span>: [<span class="hljs-string">&quot;PlannerAgent&quot;</span>, <span class="hljs-string">&quot;SearchAgent&quot;</span>, <span class="hljs-string">&quot;ItineraryAgent&quot;</span>, <span class="hljs-string">&quot;VerifierAgent&quot;</span>],
      <span class="hljs-attr">&quot;tools&quot;</span>: [<span class="hljs-string">&quot;web_search&quot;</span>]
    }
  },
  <span class="hljs-attr">&quot;steps&quot;</span>: [
    {
      <span class="hljs-attr">&quot;step_id&quot;</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">&quot;agent_name&quot;</span>: <span class="hljs-string">&quot;PlannerAgent&quot;</span>,
      <span class="hljs-attr">&quot;input_context&quot;</span>: <span class="hljs-string">&quot;Family with children wants a 3-day Disney plan. They prefer Animal Kingdom.&quot;</span>,
      <span class="hljs-attr">&quot;output_content&quot;</span>: <span class="hljs-string">&quot;We need park selection, ticket options, and visit order.&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;step_id&quot;</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">&quot;agent_name&quot;</span>: <span class="hljs-string">&quot;SearchAgent&quot;</span>,
      <span class="hljs-attr">&quot;input_context&quot;</span>: <span class="hljs-string">&quot;Find main Disney World theme parks.&quot;</span>,
      <span class="hljs-attr">&quot;output_content&quot;</span>: <span class="hljs-string">&quot;Searching official Disney sources.&quot;</span>,
      <span class="hljs-attr">&quot;tool_logs&quot;</span>: {
        <span class="hljs-attr">&quot;tool_name&quot;</span>: <span class="hljs-string">&quot;web_search&quot;</span>,
        <span class="hljs-attr">&quot;outputs&quot;</span>: <span class="hljs-string">&quot;Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom.&quot;</span>
      }
    },
    {
      <span class="hljs-attr">&quot;step_id&quot;</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">&quot;agent_name&quot;</span>: <span class="hljs-string">&quot;ItineraryAgent&quot;</span>,
      <span class="hljs-attr">&quot;input_context&quot;</span>: <span class="hljs-string">&quot;Main parks: Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom. Family prefers Animal Kingdom.&quot;</span>,
      <span class="hljs-attr">&quot;output_content&quot;</span>: <span class="hljs-string">&quot;Draft: Day 1 Magic Kingdom, Day 2 EPCOT, Day 3 Hollywood Studios.&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;step_id&quot;</span>: <span class="hljs-number">4</span>,
      <span class="hljs-attr">&quot;agent_name&quot;</span>: <span class="hljs-string">&quot;VerifierAgent&quot;</span>,
      <span class="hljs-attr">&quot;input_context&quot;</span>: <span class="hljs-string">&quot;Verify the draft plan against family preferences.&quot;</span>,
      <span class="hljs-attr">&quot;output_content&quot;</span>: <span class="hljs-string">&quot;The plan is feasible.&quot;</span>
    }
  ]
}
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x770B;&#x8F93;&#x51FA;&#xFF0C;Step 3 &#x7684; draft &#x770B;&#x8D77;&#x6765;&#x4E5F;&#x8BB8;&#x8FD8;&#x80FD;&#x63A5;&#x53D7;&#x3002;&#x4F46;&#x770B;&#x5230; input_context &#x540E;&#xFF0C;&#x6211;&#x4EEC;&#x77E5;&#x9053; ItineraryAgent &#x660E;&#x660E;&#x770B;&#x5230;&#x4E86; <code>Family prefers Animal Kingdom</code>&#xFF0C;&#x5374;&#x628A;&#x5B83;&#x6F0F;&#x6389;&#x4E86;&#x3002;</p>
<p>&#x5982;&#x679C; VerifierAgent &#x7684;&#x804C;&#x8D23;&#x662F;&#x68C0;&#x67E5;&#x504F;&#x597D;&#x4E00;&#x81F4;&#x6027;&#xFF0C;&#x90A3; Step 4 &#x4E5F;&#x6709;&#x8D23;&#x4EFB;&#xFF1A;&#x5B83;&#x5E94;&#x8BE5;&#x53D1;&#x73B0; draft &#x4E0D;&#x6EE1;&#x8DB3; family preference&#x3002;</p>
<h3 id="2. Failure Attribution&#xFF1A;&#x4E0D;&#x662F;&#x627E;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x800C;&#x662F;&#x627E;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x70B9;&#x201D;"><a href="#2. Failure Attribution&#xFF1A;&#x4E0D;&#x662F;&#x627E;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x800C;&#x662F;&#x627E;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x70B9;&#x201D;"></a>2. Failure Attribution&#xFF1A;&#x4E0D;&#x662F;&#x627E;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x800C;&#x662F;&#x627E;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x70B9;&#x201D;</h3>
<p>TraceElephant &#x5BF9; step-level attribution &#x7684;&#x5B9A;&#x4E49;&#x5F88;&#x91CD;&#x8981;&#xFF1A;<strong>decisive failure step &#x662F;&#x6700;&#x65E9;&#x8BA9;&#x5931;&#x8D25;&#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x907F;&#x514D;&#x7684;&#x6B65;&#x9AA4;&#x3002;</strong></p>
<p>&#x8FD9;&#x548C;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#x4E0D;&#x662F;&#x4E00;&#x56DE;&#x4E8B;&#x3002;</p>
<p>&#x770B;&#x4E00;&#x4E2A;&#x66F4;&#x7EC6;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">Step 3 - ItineraryAgent&#xFF1A;
&#x9057;&#x6F0F; Animal Kingdom&#x3002;

Step 4 - VerifierAgent&#xFF1A;
&#x4EFB;&#x52A1;&#x662F;&#x68C0;&#x67E5; plan &#x662F;&#x5426;&#x6EE1;&#x8DB3; family preference&#xFF0C;&#x4F46;&#x5B83;&#x8F93;&#x51FA; &quot;The plan is feasible.&quot;

&#x6700;&#x7EC8;&#x5931;&#x8D25;&#xFF1A;
&#x8BA1;&#x5212;&#x4E0D;&#x6EE1;&#x8DB3;&#x7528;&#x6237;&#x504F;&#x597D;&#x3002;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E24;&#x79CD;&#x5F52;&#x56E0;&#x601D;&#x8DEF;&#xFF1A;</p>
<pre><code class="language-text">&#x6734;&#x7D20;&#x5F52;&#x56E0;&#xFF1A;
Step 3 &#x7B2C;&#x4E00;&#x6B21;&#x51FA;&#x9519;&#xFF0C;&#x6240;&#x4EE5; Step 3 &#x662F; failure step&#x3002;

TraceElephant &#x7684; recoverability-aware &#x5F52;&#x56E0;&#xFF1A;
Step 3 &#x7684;&#x9519;&#x8BEF;&#x5728; Step 4 &#x4ECD;&#x7136;&#x53EF;&#x6062;&#x590D;&#x3002;
VerifierAgent &#x672C;&#x8BE5;&#x68C0;&#x67E5;&#x5E76;&#x7EA0;&#x6B63;&#xFF0C;&#x5374;&#x6CA1;&#x6709;&#x7EA0;&#x6B63;&#x3002;
&#x6240;&#x4EE5; decisive failure step &#x53EF;&#x4EE5;&#x5F52;&#x56E0;&#x5230; Step 4&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x5B9A;&#x4E49;&#x5F88;&#x8D34;&#x8FD1;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#x3002;&#x56E0;&#x4E3A;&#x5728;&#x4E00;&#x4E2A;&#x8BBE;&#x8BA1;&#x826F;&#x597D;&#x7684; Agent &#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x9519;&#x8BEF;&#x5E76;&#x4E0D;&#x53EF;&#x6015;&#xFF0C;<strong>&#x6CA1;&#x6709;&#x88AB;&#x8BE5;&#x8D1F;&#x8D23;&#x7684;&#x7EC4;&#x4EF6;&#x6355;&#x83B7;&#x548C;&#x4FEE;&#x590D;</strong>&#x624D;&#x662F;&#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x3002;</p>
<h3 id="3. Annotation&#xFF1A;&#x4EBA;&#x5DE5;&#x4E13;&#x5BB6;&#x6807;&#x6CE8; who &#x548C; when"><a href="#3. Annotation&#xFF1A;&#x4EBA;&#x5DE5;&#x4E13;&#x5BB6;&#x6807;&#x6CE8; who &#x548C; when"></a>3. Annotation&#xFF1A;&#x4EBA;&#x5DE5;&#x4E13;&#x5BB6;&#x6807;&#x6CE8; who &#x548C; when</h3>
<p>TraceElephant &#x4E3A;&#x6BCF;&#x6761;&#x5931;&#x8D25; trace &#x6807;&#x6CE8;&#x4E24;&#x4E2A; label&#xFF1A;</p>
<pre><code class="language-text">failure-responsible agent:
  VerifierAgent

decisive failure step:
  Step 4
</code></pre>
<p>&#x8BBA;&#x6587;&#x91C7;&#x7528;&#x591A;&#x8F6E;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#xFF1A;</p>
<ol>
<li>&#x7B2C;&#x4E00;&#x8F6E;&#xFF1A;&#x4E09;&#x4E2A;&#x6709; MAS &#x5F00;&#x53D1;/&#x8C03;&#x8BD5;&#x7ECF;&#x9A8C;&#x7684;&#x6807;&#x6CE8;&#x8005;&#x72EC;&#x7ACB;&#x6807;&#x6CE8;&#x3002;</li>
<li>&#x7B2C;&#x4E8C;&#x8F6E;&#xFF1A;&#x5BF9;&#x4E0D;&#x786E;&#x5B9A;&#x6837;&#x672C;&#x8054;&#x5408;&#x8BA8;&#x8BBA;&#x3002;</li>
<li>&#x7B2C;&#x4E09;&#x8F6E;&#xFF1A;&#x4EA4;&#x53C9;&#x590D;&#x67E5;&#x5E76;&#x91CD;&#x65B0;&#x5BA1;&#x8BAE;&#x4E0D;&#x4E00;&#x81F4;&#x6837;&#x672C;&#x3002;</li>
</ol>
<p>&#x7B2C;&#x4E00;&#x8F6E;&#x4E00;&#x81F4;&#x6027;&#x6307;&#x6807;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>Label</th>
<th style="text-align:right">Krippendorff&apos;s alpha</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent-level</td>
<td style="text-align:right">0.72</td>
</tr>
<tr>
<td>Step-level</td>
<td style="text-align:right">0.64</td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x4E2A;&#x7ED3;&#x679C;&#x4E5F;&#x8BF4;&#x660E;&#xFF1A;agent-level &#x76F8;&#x5BF9;&#x5BB9;&#x6613;&#xFF0C;step-level &#x66F4;&#x96BE;&#x3002;&#x5224;&#x65AD;&#x201C;&#x8C01;&#x5927;&#x6982;&#x7387;&#x6709;&#x95EE;&#x9898;&#x201D;&#x6BD4;&#x5224;&#x65AD;&#x201C;&#x54EA;&#x4E00;&#x6B65;&#x5F00;&#x59CB;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x201D;&#x7B80;&#x5355;&#x3002;</p>
<h3 id="4. Static vs Dynamic&#xFF1A;&#x9759;&#x6001;&#x770B;&#x65E5;&#x5FD7; vs &#x52A8;&#x6001;&#x91CD;&#x653E;&#x9A8C;&#x8BC1;"><a href="#4. Static vs Dynamic&#xFF1A;&#x9759;&#x6001;&#x770B;&#x65E5;&#x5FD7; vs &#x52A8;&#x6001;&#x91CD;&#x653E;&#x9A8C;&#x8BC1;"></a>4. Static vs Dynamic&#xFF1A;&#x9759;&#x6001;&#x770B;&#x65E5;&#x5FD7; vs &#x52A8;&#x6001;&#x91CD;&#x653E;&#x9A8C;&#x8BC1;</h3>
<p>TraceElephant &#x4E0D;&#x53EA;&#x63D0;&#x4F9B;&#x9759;&#x6001; trace&#xFF0C;&#x8FD8;&#x63D0;&#x4F9B;&#x53EF;&#x590D;&#x73B0;&#x73AF;&#x5883;&#x3002;&#x4E8E;&#x662F; failure attribution &#x53EF;&#x4EE5;&#x5206;&#x6210;&#x4E24;&#x7C7B;&#xFF1A;</p>
<pre><code class="language-text">Static Attribution&#xFF1A;
&#x53EA;&#x770B;&#x5B8C;&#x6574;&#x65E5;&#x5FD7;&#x3001;&#x8F93;&#x5165;&#x3001;&#x8F93;&#x51FA;&#x3001;&#x5DE5;&#x5177;&#x8BB0;&#x5F55;&#xFF0C;&#x63A8;&#x65AD;&#x8D23;&#x4EFB;&#x65B9;&#x3002;

Dynamic Attribution&#xFF1A;
&#x5728;&#x9759;&#x6001;&#x63A8;&#x65AD;&#x57FA;&#x7840;&#x4E0A;&#xFF0C;&#x4ECE;&#x67D0;&#x4E2A;&#x6B65;&#x9AA4;&#x91CD;&#x653E;&#x7CFB;&#x7EDF;&#xFF0C;&#x505A;&#x53CD;&#x4E8B;&#x5B9E;&#x5E72;&#x9884;&#x3002;
</code></pre>
<p>&#x4EC0;&#x4E48;&#x53EB;&#x53CD;&#x4E8B;&#x5B9E;&#x5E72;&#x9884;&#xFF1F;&#x7EE7;&#x7EED;&#x770B;&#x4F8B;&#x5B50;&#x3002;</p>
<p>&#x9759;&#x6001;&#x5206;&#x6790;&#x8BA4;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x5019;&#x9009;&#x5F52;&#x56E0;&#xFF1A;
VerifierAgent at Step 4 failed to catch missing Animal Kingdom.
</code></pre>
<p>&#x52A8;&#x6001;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE; Step 4 &#x91CD;&#x653E;&#xFF0C;&#x5E76;&#x628A; VerifierAgent &#x7684;&#x8F93;&#x5165;&#x6216;&#x63D0;&#x793A;&#x7A0D;&#x5FAE;&#x6539;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">Please explicitly check whether the itinerary satisfies all stated family preferences,
including whether Animal Kingdom is included when requested.
</code></pre>
<p>&#x7136;&#x540E;&#x89C2;&#x5BDF;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C; VerifierAgent &#x7EA0;&#x6B63;&#x4E86;&#x8BA1;&#x5212;&#xFF1A;
&#x8BF4;&#x660E; Step 4 &#x786E;&#x5B9E;&#x662F;&#x5173;&#x952E;&#x6062;&#x590D;&#x70B9;&#x3002;

&#x5982;&#x679C;&#x4ECD;&#x7136;&#x5931;&#x8D25;&#xFF1A;
&#x53EF;&#x80FD;&#x95EE;&#x9898;&#x66F4;&#x65E9;&#xFF0C;&#x6216;&#x8005;&#x7CFB;&#x7EDF;&#x67B6;&#x6784;&#x672C;&#x8EAB;&#x4E0D;&#x652F;&#x6301;&#x7EA0;&#x9519;&#x3002;
</code></pre>
<p>&#x8BBA;&#x6587;&#x53D1;&#x73B0;&#xFF0C;&#x52A8;&#x6001;&#x91CD;&#x653E;&#x4E3B;&#x8981;&#x63D0;&#x5347; step-level attribution&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x80FD;&#x9A8C;&#x8BC1;&#x67D0;&#x4E00;&#x6B65;&#x662F;&#x5426;&#x771F;&#x7684;&#x662F;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x70B9;&#x201D;&#x3002;</p>
<h2 id="TraceElephant Benchmark &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;"><a href="#TraceElephant Benchmark &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;"></a>TraceElephant Benchmark &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;</h2>
<h3 id="1. &#x6570;&#x636E;&#x6765;&#x6E90;&#xFF1A;&#x4E09;&#x4E2A;&#x4EE3;&#x8868;&#x6027; Agent &#x7CFB;&#x7EDF;"><a href="#1. &#x6570;&#x636E;&#x6765;&#x6E90;&#xFF1A;&#x4E09;&#x4E2A;&#x4EE3;&#x8868;&#x6027; Agent &#x7CFB;&#x7EDF;"></a>1. &#x6570;&#x636E;&#x6765;&#x6E90;&#xFF1A;&#x4E09;&#x4E2A;&#x4EE3;&#x8868;&#x6027; Agent &#x7CFB;&#x7EDF;</h3>
<p>TraceElephant &#x8986;&#x76D6;&#x4E09;&#x7C7B; Agent &#x67B6;&#x6784;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>System</th>
<th>&#x67B6;&#x6784;&#x7279;&#x70B9;</th>
<th>&#x4EFB;&#x52A1;&#x6765;&#x6E90;</th>
<th style="text-align:right">&#x603B;&#x8F68;&#x8FF9;</th>
<th style="text-align:right">&#x5931;&#x8D25;&#x8F68;&#x8FF9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Captain-Agent</td>
<td>&#x52A8;&#x6001;&#x7EC4;&#x88C5; Agent &#x56E2;&#x961F;</td>
<td>GAIA</td>
<td style="text-align:right">126</td>
<td style="text-align:right">73</td>
</tr>
<tr>
<td>Captain-Agent</td>
<td>&#x52A8;&#x6001;&#x7EC4;&#x88C5; Agent &#x56E2;&#x961F;</td>
<td>AssistantBench</td>
<td style="text-align:right">21</td>
<td style="text-align:right">12</td>
</tr>
<tr>
<td>Magentic-One</td>
<td>&#x56FA;&#x5B9A;&#x89D2;&#x8272; + &#x4E2D;&#x592E; Orchestrator</td>
<td>GAIA</td>
<td style="text-align:right">119</td>
<td style="text-align:right">74</td>
</tr>
<tr>
<td>Magentic-One</td>
<td>&#x56FA;&#x5B9A;&#x89D2;&#x8272; + &#x4E2D;&#x592E; Orchestrator</td>
<td>AssistantBench</td>
<td style="text-align:right">30</td>
<td style="text-align:right">17</td>
</tr>
<tr>
<td>SWE-Agent</td>
<td>&#x5355; Agent &#x5DE5;&#x5177;&#x811A;&#x624B;&#x67B6; / &#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;</td>
<td>SWE-Bench</td>
<td style="text-align:right">84</td>
<td style="text-align:right">44</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td>-</td>
<td>-</td>
<td style="text-align:right"><strong>380</strong></td>
<td style="text-align:right"><strong>220</strong></td>
</tr>
</tbody>
</table>
<p>&#x8FD9;&#x7EC4;&#x7CFB;&#x7EDF;&#x8BBE;&#x8BA1;&#x5F88;&#x6709;&#x4EE3;&#x8868;&#x6027;&#xFF1A;</p>
<ul>
<li><strong>Captain-Agent&#xFF1A;</strong> &#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x52A8;&#x6001;&#x7EC4;&#x961F;&#xFF0C;&#x5931;&#x8D25;&#x53EF;&#x80FD;&#x6765;&#x81EA; agent selection&#x3001;planning&#x3001;coordination&#x3002;</li>
<li><strong>Magentic-One&#xFF1A;</strong> &#x56FA;&#x5B9A;&#x89D2;&#x8272;&#x548C;&#x4E2D;&#x592E; orchestrator&#xFF0C;&#x5931;&#x8D25;&#x5E38;&#x96C6;&#x4E2D;&#x5728;&#x65E9;&#x671F;&#x8BA1;&#x5212;&#x548C;&#x91CD;&#x89C4;&#x5212;&#x3002;</li>
<li><strong>SWE-Agent&#xFF1A;</strong> &#x867D;&#x7136;&#x4E0D;&#x662F;&#x4F20;&#x7EDF;&#x591A; Agent&#xFF0C;&#x4F46; planning / orchestration / tool-use &#x6A21;&#x5757;&#x53EF;&#x4EE5;&#x770B;&#x4F5C; functional components&#xFF0C;&#x9002;&#x5408;&#x7814;&#x7A76; coding agent &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x3002;</li>
</ul>
<h3 id="2. Trace Collection Pipeline&#xFF1A;&#x7528; LLM API Middleware &#x6293;&#x5168;&#x91CF;&#x4FE1;&#x606F;"><a href="#2. Trace Collection Pipeline&#xFF1A;&#x7528; LLM API Middleware &#x6293;&#x5168;&#x91CF;&#x4FE1;&#x606F;"></a>2. Trace Collection Pipeline&#xFF1A;&#x7528; LLM API Middleware &#x6293;&#x5168;&#x91CF;&#x4FE1;&#x606F;</h3>
<p>TraceElephant &#x7684; trace collection &#x6838;&#x5FC3;&#x662F;&#x4E00;&#x4E2A; <strong>LLM API middleware</strong>&#x3002;</p>
<p>&#x5B83;&#x50CF;&#x4E00;&#x4E2A;&#x900F;&#x660E;&#x4EE3;&#x7406;&#xFF0C;&#x63D2;&#x5728; Agent &#x7CFB;&#x7EDF;&#x548C;&#x5E95;&#x5C42; LLM API &#x4E4B;&#x95F4;&#xFF1A;</p>
<pre><code class="language-text">Agent System
    &#x2502;
    &#x2502;  LLM request: messages, tools, decoding params
    &#x25BC;
LLM API Middleware  &#x2190; &#x8BB0;&#x5F55;&#x8BF7;&#x6C42;&#x3001;&#x54CD;&#x5E94;&#x3001;&#x5DE5;&#x5177;&#x8C03;&#x7528;
    &#x2502;
    &#x25BC;
Backend LLM
</code></pre>
<p>&#x597D;&#x5904;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x4E0D;&#x9700;&#x8981;&#x6539;&#x539F;&#x59CB; Agent &#x903B;&#x8F91;&#x3002;</li>
<li>&#x80FD;&#x8BB0;&#x5F55;&#x6BCF;&#x6B21; LLM &#x8C03;&#x7528;&#x7684;&#x5B8C;&#x6574; messages&#x3002;</li>
<li>&#x80FD;&#x8BB0;&#x5F55;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x540D;&#x3001;&#x53C2;&#x6570;&#x3001;&#x8FD4;&#x56DE;&#x503C;&#x3001;&#x72B6;&#x6001;&#x3002;</li>
<li>&#x80FD;&#x4FDD;&#x7559;&#x539F;&#x59CB;&#x6267;&#x884C;&#x6D41;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E8B;&#x540E;&#x91CD;&#x65B0;&#x603B;&#x7ED3;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x548C;&#x666E;&#x901A;&#x65E5;&#x5FD7;&#x6700;&#x5927;&#x7684;&#x533A;&#x522B;&#x662F;&#xFF1A;&#x666E;&#x901A;&#x65E5;&#x5FD7;&#x7ECF;&#x5E38;&#x53EA;&#x8BB0;&#x201C;&#x8F93;&#x51FA;&#x201D;&#xFF0C;middleware &#x53EF;&#x4EE5;&#x8BB0;&#x201C;&#x5BFC;&#x81F4;&#x8F93;&#x51FA;&#x7684;&#x8F93;&#x5165;&#x201D;&#x3002;</p>
<h3 id="3. Trace Schema&#xFF1A;&#x5931;&#x8D25;&#x8C03;&#x8BD5;&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x5B57;&#x6BB5;&#xFF1F;"><a href="#3. Trace Schema&#xFF1A;&#x5931;&#x8D25;&#x8C03;&#x8BD5;&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x5B57;&#x6BB5;&#xFF1F;"></a>3. Trace Schema&#xFF1A;&#x5931;&#x8D25;&#x8C03;&#x8BD5;&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x5B57;&#x6BB5;&#xFF1F;</h3>
<p>&#x8BBA;&#x6587;&#x5F3A;&#x8C03;&#xFF0C;developer-facing debugging &#x81F3;&#x5C11;&#x9700;&#x8981;&#x8FD9;&#x4E9B;&#x5B57;&#x6BB5;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x7EA7;&#xFF1A;
  task_instruction
  system_name
  agent_configuration
  system_architecture

&#x6B65;&#x9AA4;&#x7EA7;&#xFF1A;
  step_id
  agent_name
  input_context
  output_content
  tool_logs
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6700;&#x5173;&#x952E;&#x7684;&#x662F; <code>input_context</code>&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#x540C;&#x4E00;&#x4E2A;&#x8F93;&#x51FA;&#x5728;&#x4E0D;&#x540C;&#x8F93;&#x5165;&#x4E0B;&#x8D23;&#x4EFB;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x51FA;&#xFF1A;
&quot;The plan is feasible.&quot;

&#x60C5;&#x51B5; A&#xFF1A;
input_context &#x6CA1;&#x6709;&#x7528;&#x6237;&#x504F;&#x597D;&#x4FE1;&#x606F;&#x3002;
&#x2192; VerifierAgent &#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x4E3B;&#x8981;&#x8D23;&#x4EFB;&#x65B9;&#xFF0C;&#x4FE1;&#x606F;&#x6CA1;&#x4F20;&#x7ED9;&#x5B83;&#x3002;

&#x60C5;&#x51B5; B&#xFF1A;
input_context &#x660E;&#x786E;&#x5199;&#x7740; &quot;family prefers Animal Kingdom&quot;&#x3002;
&#x2192; VerifierAgent &#x660E;&#x660E;&#x770B;&#x5230;&#x4E86;&#x7EA6;&#x675F;&#x5374;&#x6CA1;&#x68C0;&#x67E5;&#xFF0C;&#x8D23;&#x4EFB;&#x66F4;&#x5927;&#x3002;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x91CC; &#x201C;Seeing the Whole Elephant&#x201D; &#x7684;&#x610F;&#x601D;&#xFF1A;&#x53EA;&#x6478;&#x5230;&#x5927;&#x8C61;&#x7684;&#x4E00;&#x6761;&#x817F;&#xFF0C;&#x4F60;&#x4F1A;&#x8BEF;&#x5224;&#xFF1B;&#x5FC5;&#x987B;&#x770B;&#x5230;&#x5B8C;&#x6574;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x624D;&#x77E5;&#x9053;&#x9519;&#x8BEF;&#x771F;&#x6B63;&#x5728;&#x54EA;&#x91CC;&#x3002;</p>
<h2 id="&#x5B9E;&#x9A8C;&#x600E;&#x4E48;&#x505A;&#xFF1F;"><a href="#&#x5B9E;&#x9A8C;&#x600E;&#x4E48;&#x505A;&#xFF1F;"></a>&#x5B9E;&#x9A8C;&#x600E;&#x4E48;&#x505A;&#xFF1F;</h2>
<p>TraceElephant &#x8BC4;&#x4F30;&#x7684;&#x662F;&#xFF1A;&#x7ED9;&#x5B9A;&#x5931;&#x8D25; trace&#xFF0C;&#x8BA9;&#x6A21;&#x578B;/&#x65B9;&#x6CD5;&#x9884;&#x6D4B;&#xFF1A;</p>
<pre><code class="language-text">Predicted agent
Predicted step
</code></pre>
<p>&#x7136;&#x540E;&#x548C;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x7684; ground truth &#x5BF9;&#x6BD4;&#xFF0C;&#x8BA1;&#x7B97;&#xFF1A;</p>
<pre><code class="language-text">Agent-level accuracy
Step-level accuracy
</code></pre>
<h3 id="1. &#x4E94;&#x7C7B;&#x5F52;&#x56E0;&#x65B9;&#x6CD5;"><a href="#1. &#x4E94;&#x7C7B;&#x5F52;&#x56E0;&#x65B9;&#x6CD5;"></a>1. &#x4E94;&#x7C7B;&#x5F52;&#x56E0;&#x65B9;&#x6CD5;</h3>
<p>&#x8BBA;&#x6587;&#x6BD4;&#x8F83;&#x4E86;&#x4E94;&#x7C7B;&#x65B9;&#x6CD5;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6CD5;</th>
<th>&#x600E;&#x4E48;&#x505A;</th>
<th>&#x76F4;&#x89C9;</th>
</tr>
</thead>
<tbody>
<tr>
<td>All-at-Once</td>
<td>&#x4E00;&#x6B21;&#x6027;&#x628A;&#x5B8C;&#x6574; trace &#x7ED9; LLM &#x5224;&#x65AD;</td>
<td>&#x5168;&#x5C40;&#x770B;&#x65E5;&#x5FD7;</td>
</tr>
<tr>
<td>Binary Search</td>
<td>&#x8BA9; LLM &#x4E8C;&#x5206;&#x5B9A;&#x4F4D;&#x5931;&#x8D25;&#x533A;&#x95F4;</td>
<td>&#x50CF;&#x4E8C;&#x5206;&#x67E5; bug</td>
</tr>
<tr>
<td>Step-by-Step</td>
<td>&#x9010;&#x6B65;&#x5C55;&#x793A; trace&#xFF0C;&#x8BA9; LLM &#x5224;&#x65AD;&#x662F;&#x5426;&#x5931;&#x8D25;</td>
<td>&#x50CF;&#x5728;&#x7EBF;&#x5BA1;&#x67E5;</td>
</tr>
<tr>
<td>Static Agentic</td>
<td>&#x7528; mini-SWE-agent &#x5BFC;&#x822A; trace&#x3001;&#x67E5;&#x5C40;&#x90E8;&#x5B57;&#x6BB5;</td>
<td>&#x50CF;&#x4E00;&#x4E2A;&#x65E5;&#x5FD7;&#x5206;&#x6790; Agent</td>
</tr>
<tr>
<td>Dynamic Agentic</td>
<td>&#x5148;&#x9759;&#x6001;&#x63D0;&#x51FA;&#x5019;&#x9009;&#xFF0C;&#x518D;&#x91CD;&#x653E;&#x7CFB;&#x7EDF;&#x505A;&#x53CD;&#x4E8B;&#x5B9E;&#x9A8C;&#x8BC1;</td>
<td>&#x50CF;&#x771F;&#x6B63;&#x8C03;&#x8BD5;</td>
</tr>
</tbody>
</table>
<h3 id="2. Static Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;"><a href="#2. Static Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;"></a>2. Static Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;</h3>
<p>Static Agentic &#x4E0D;&#x662F;&#x628A;&#x6240;&#x6709;&#x65E5;&#x5FD7;&#x4E00;&#x6B21;&#x585E;&#x8FDB;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x662F;&#x7ED9;&#x6A21;&#x578B;&#x51E0;&#x4E2A;&#x5DE5;&#x5177;&#xFF1A;</p>
<pre><code class="language-text">&#x5DE5;&#x5177; 1&#xFF1A;&#x67E5;&#x770B;&#x6240;&#x6709; step &#x7684;&#x8F93;&#x51FA;&#x6458;&#x8981;
&#x5DE5;&#x5177; 2&#xFF1A;&#x67E5;&#x770B;&#x67D0;&#x4E2A; step &#x7684; input/output &#x8BE6;&#x60C5;
&#x5DE5;&#x5177; 3&#xFF1A;&#x63D0;&#x4EA4;&#x6700;&#x7EC8;&#x5F52;&#x56E0;&#x7B54;&#x6848;
</code></pre>
<p>&#x5B83;&#x53EF;&#x80FD;&#x8FD9;&#x6837;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<pre><code class="language-text">1. &#x5148;&#x770B;&#x6240;&#x6709; step &#x8F93;&#x51FA;&#xFF0C;&#x53D1;&#x73B0;&#x6700;&#x7EC8;&#x8BA1;&#x5212;&#x7F3A; Animal Kingdom&#x3002;
2. &#x67E5;&#x770B; Step 3 &#x7684; input/output&#xFF1A;
   - input &#x91CC;&#x6709; Animal Kingdom preference
   - output &#x5374;&#x6CA1;&#x6392;&#x8FDB;&#x53BB;
3. &#x67E5;&#x770B; Step 4 &#x7684; input/output&#xFF1A;
   - input &#x8981;&#x6C42;&#x9A8C;&#x8BC1; family preference
   - output &#x8BF4; plan feasible
4. &#x5224;&#x65AD; VerifierAgent at Step 4 &#x662F; decisive failure step&#x3002;
</code></pre>
<p>&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x6BD4; All-at-Once &#x66F4;&#x50CF;&#x771F;&#x5B9E;&#x5F00;&#x53D1;&#x8005;&#x8C03;&#x65E5;&#x5FD7;&#xFF1A;&#x5148;&#x5168;&#x5C40;&#x626B;&#x4E00;&#x773C;&#xFF0C;&#x518D;&#x5C40;&#x90E8;&#x653E;&#x5927;&#x3002;</p>
<h3 id="3. Dynamic Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;"><a href="#3. Dynamic Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;"></a>3. Dynamic Agentic &#x7684;&#x6D41;&#x7A0B;&#x4F8B;&#x5B50;</h3>
<p>Dynamic Agentic &#x4F1A;&#x591A;&#x505A;&#x4E00;&#x6B65;&#x9A8C;&#x8BC1;&#x3002;</p>
<pre><code class="language-text">&#x5019;&#x9009;&#xFF1A;
Step 4 / VerifierAgent / missed preference check

&#x53CD;&#x4E8B;&#x5B9E;&#x5E72;&#x9884;&#xFF1A;
&#x91CD;&#x653E;&#x5230; Step 4&#xFF0C;&#x628A; VerifierAgent &#x7684;&#x8F93;&#x5165;&#x6539;&#x6210;&#xFF1A;
&quot;Check whether the itinerary includes Animal Kingdom as requested.&quot;

&#x89C2;&#x5BDF;&#xFF1A;
&#x5982;&#x679C;&#x540E;&#x7EED; plan &#x88AB;&#x4FEE;&#x6B63;&#xFF0C;&#x8BF4;&#x660E; Step 4 &#x662F;&#x5173;&#x952E;&#x6062;&#x590D;&#x70B9;&#x3002;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x8BBA;&#x6587;&#x8BF4;&#x7684; replay / counterfactual probing&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x4E3A;&#x4E86;&#x4FEE;&#x590D;&#x6574;&#x4E2A;&#x7CFB;&#x7EDF;&#xFF0C;&#x800C;&#x662F;&#x4E3A;&#x4E86;&#x9A8C;&#x8BC1;&#x201C;&#x8FD9;&#x4E2A;&#x6B65;&#x9AA4;&#x662F;&#x5426;&#x771F;&#x7684;&#x627F;&#x62C5;&#x5173;&#x952E;&#x8D23;&#x4EFB;&#x201D;&#x3002;</p>
<h2 id="&#x7ED3;&#x679C;&#x600E;&#x4E48;&#x6837;&#xFF1F;"><a href="#&#x7ED3;&#x679C;&#x600E;&#x4E48;&#x6837;&#xFF1F;"></a>&#x7ED3;&#x679C;&#x600E;&#x4E48;&#x6837;&#xFF1F;</h2>
<h3 id="1. &#x5B8C;&#x6574; trace &#x663E;&#x8457;&#x63D0;&#x5347;&#x5F52;&#x56E0;&#x51C6;&#x786E;&#x7387;"><a href="#1. &#x5B8C;&#x6574; trace &#x663E;&#x8457;&#x63D0;&#x5347;&#x5F52;&#x56E0;&#x51C6;&#x786E;&#x7387;"></a>1. &#x5B8C;&#x6574; trace &#x663E;&#x8457;&#x63D0;&#x5347;&#x5F52;&#x56E0;&#x51C6;&#x786E;&#x7387;</h3>
<p>&#x8BBA;&#x6587;&#x4E3B;&#x7ED3;&#x679C;&#x5982;&#x4E0B;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th style="text-align:right">Agent Acc</th>
<th style="text-align:right">Step Acc</th>
</tr>
</thead>
<tbody>
<tr>
<td>All-at-Once</td>
<td style="text-align:right">62.2</td>
<td style="text-align:right">28.1</td>
</tr>
<tr>
<td>Binary Search</td>
<td style="text-align:right">38.9</td>
<td style="text-align:right">12.9</td>
</tr>
<tr>
<td>Step-by-Step</td>
<td style="text-align:right">60.9</td>
<td style="text-align:right">16.7</td>
</tr>
<tr>
<td>Static Agentic</td>
<td style="text-align:right">65.9</td>
<td style="text-align:right">30.3</td>
</tr>
<tr>
<td>Dynamic Agentic</td>
<td style="text-align:right"><strong>66.7</strong></td>
<td style="text-align:right"><strong>33.3</strong></td>
</tr>
</tbody>
</table>
<p>&#x7ED3;&#x8BBA;&#x5F88;&#x6E05;&#x695A;&#xFF1A;</p>
<ul>
<li>Agent-level attribution &#x6700;&#x9AD8;&#x7EA6; 66.7%&#xFF0C;&#x8FD8;&#x6709;&#x5F88;&#x5927;&#x63D0;&#x5347;&#x7A7A;&#x95F4;&#x3002;</li>
<li>Step-level attribution &#x6700;&#x9AD8;&#x4E5F;&#x53EA;&#x6709; 33.3%&#xFF0C;&#x8BF4;&#x660E;&#x7CBE;&#x51C6;&#x5B9A;&#x4F4D;&#x5931;&#x8D25;&#x6B65;&#x9AA4;&#x5F88;&#x96BE;&#x3002;</li>
<li>Dynamic Agentic &#x6BD4; Static Agentic &#x7684; step accuracy &#x9AD8;&#x7EA6; 10%&#xFF0C;&#x8BF4;&#x660E;&#x91CD;&#x653E;&#x9A8C;&#x8BC1;&#x786E;&#x5B9E;&#x6709;&#x7528;&#x3002;</li>
</ul>
<h3 id="2. &#x7F3A; input &#x6BD4;&#x7F3A; metadata &#x66F4;&#x4F24;"><a href="#2. &#x7F3A; input &#x6BD4;&#x7F3A; metadata &#x66F4;&#x4F24;"></a>2. &#x7F3A; input &#x6BD4;&#x7F3A; metadata &#x66F4;&#x4F24;</h3>
<p>&#x8BBA;&#x6587;&#x505A;&#x4E86; observability ablation&#xFF1A;</p>
<table>
<thead>
<tr>
<th>Observability</th>
<th style="text-align:right">Agent Acc</th>
<th style="text-align:right">Step Acc</th>
</tr>
</thead>
<tbody>
<tr>
<td>All-at-Once</td>
<td style="text-align:right">0.62</td>
<td style="text-align:right">0.28</td>
</tr>
<tr>
<td>w/o metadata</td>
<td style="text-align:right">0.55</td>
<td style="text-align:right">0.21</td>
</tr>
<tr>
<td>w/o input</td>
<td style="text-align:right">0.54</td>
<td style="text-align:right">0.18</td>
</tr>
<tr>
<td>w/o metadata &amp; input</td>
<td style="text-align:right">0.51</td>
<td style="text-align:right">0.16</td>
</tr>
<tr>
<td>Static Agentic</td>
<td style="text-align:right">0.66</td>
<td style="text-align:right">0.30</td>
</tr>
<tr>
<td>w/o metadata</td>
<td style="text-align:right">0.57</td>
<td style="text-align:right">0.23</td>
</tr>
<tr>
<td>w/o input</td>
<td style="text-align:right">0.56</td>
<td style="text-align:right">0.19</td>
</tr>
<tr>
<td>w/o metadata &amp; input</td>
<td style="text-align:right">0.54</td>
<td style="text-align:right">0.17</td>
</tr>
</tbody>
</table>
<p>&#x6700;&#x91CD;&#x8981;&#x7684;&#x89C2;&#x5BDF;&#xFF1A;</p>
<p><strong>step-level attribution &#x5BF9;&#x7F3A;&#x5931; input_context &#x7279;&#x522B;&#x654F;&#x611F;&#x3002;</strong></p>
<p>&#x8FD9;&#x5F88;&#x7B26;&#x5408;&#x76F4;&#x89C9;&#x3002;&#x8981;&#x5224;&#x65AD;&#x67D0;&#x4E00;&#x6B65;&#x662F;&#x5426;&#x771F;&#x7684;&#x505A;&#x9519;&#xFF0C;&#x5FC5;&#x987B;&#x77E5;&#x9053;&#x5B83;&#x5F53;&#x65F6;&#x6536;&#x5230;&#x4E86;&#x4EC0;&#x4E48;&#x3002;&#x5982;&#x679C;&#x4E00;&#x4E2A; Agent &#x6CA1;&#x62FF;&#x5230;&#x5173;&#x952E;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x5B83;&#x8F93;&#x51FA;&#x4E0D;&#x5B8C;&#x6574;&#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x5B83;&#x7684;&#x9505;&#xFF1B;&#x5982;&#x679C;&#x5B83;&#x62FF;&#x5230;&#x4E86;&#x5374;&#x6CA1;&#x7528;&#xFF0C;&#x90A3;&#x624D;&#x66F4;&#x53EF;&#x80FD;&#x662F;&#x5B83;&#x7684;&#x9505;&#x3002;</p>
<h3 id="3. Output-only benchmark &#x4F1A;&#x4F4E;&#x4F30;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x80FD;&#x529B;"><a href="#3. Output-only benchmark &#x4F1A;&#x4F4E;&#x4F30;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x80FD;&#x529B;"></a>3. Output-only benchmark &#x4F1A;&#x4F4E;&#x4F30;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x80FD;&#x529B;</h3>
<p>&#x5728;&#x63A5;&#x8FD1; Who&amp;When &#x7684; output-only &#x8BBE;&#x7F6E;&#x4E0B;&#xFF0C;&#x6027;&#x80FD;&#x660E;&#x663E;&#x4E0B;&#x964D;&#xFF1A;</p>
<pre><code class="language-text">Agent-level accuracy&#xFF1A;&#x4ECE; 62% &#x964D;&#x5230; 51%
Step-level accuracy&#xFF1A;&#x4ECE; 28% &#x964D;&#x5230; 16%
</code></pre>
<p>&#x8BBA;&#x6587;&#x8BA4;&#x4E3A;&#xFF0C;&#x8FD9;&#x8BF4;&#x660E;&#x5DF2;&#x6709; output-only benchmark &#x4E0D;&#x8DB3;&#x4EE5;&#x4EE3;&#x8868; developer-facing debugging&#x3002;&#x56E0;&#x4E3A;&#x771F;&#x5B9E;&#x5F00;&#x53D1;&#x8005;&#x901A;&#x5E38;&#x80FD;&#x770B;&#x5230;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF1A;prompt&#x3001;&#x5DE5;&#x5177;&#x53C2;&#x6570;&#x3001;&#x73AF;&#x5883;&#x72B6;&#x6001;&#x3001;agent &#x914D;&#x7F6E;&#x3001;&#x4EE3;&#x7801;&#x548C;&#x8FD0;&#x884C;&#x8F68;&#x8FF9;&#x3002;</p>
<h3 id="4. &#x5931;&#x8D25;&#x6A21;&#x5F0F;&#x548C;&#x67B6;&#x6784;&#x5F3A;&#x76F8;&#x5173;"><a href="#4. &#x5931;&#x8D25;&#x6A21;&#x5F0F;&#x548C;&#x67B6;&#x6784;&#x5F3A;&#x76F8;&#x5173;"></a>4. &#x5931;&#x8D25;&#x6A21;&#x5F0F;&#x548C;&#x67B6;&#x6784;&#x5F3A;&#x76F8;&#x5173;</h3>
<p>&#x4E0D;&#x540C;&#x7CFB;&#x7EDF;&#x7684;&#x5931;&#x8D25;&#x5206;&#x5E03;&#x4E0D;&#x540C;&#xFF1A;</p>
<ul>
<li>Captain-Agent &#x52A8;&#x6001;&#x7EC4;&#x961F;&#xFF0C;&#x5931;&#x8D25;&#x66F4;&#x5206;&#x6563;&#xFF0C;&#x53EF;&#x80FD;&#x51FA;&#x5728; agent selection&#x3001;planning&#x3001;coordination&#x3001;tool call&#x3002;</li>
<li>Magentic-One &#x56FA;&#x5B9A; orchestrator&#xFF0C;&#x65E9;&#x671F; planning/routing &#x9519;&#x8BEF;&#x66F4;&#x5173;&#x952E;&#x3002;</li>
<li>SWE-Agent &#x7684;&#x5931;&#x8D25;&#x5E38;&#x4E0E;&#x4EE3;&#x7801;&#x5B9A;&#x4F4D;&#x3001;&#x8865;&#x4E01;&#x751F;&#x6210;&#x3001;&#x6D4B;&#x8BD5;&#x4E0D;&#x5339;&#x914D;&#x6709;&#x5173;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x672A;&#x6765;&#x7684; attribution &#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x7EBF;&#x6027;&#x65E5;&#x5FD7;&#xFF0C;&#x8FD8;&#x5E94;&#x8BE5;&#x7406;&#x89E3;&#x7CFB;&#x7EDF;&#x67B6;&#x6784;&#x3002;</p>
<h2 id="TraceElephant &#x8BBE;&#x8BA1;&#x8BE6;&#x89E3;"><a href="#TraceElephant &#x8BBE;&#x8BA1;&#x8BE6;&#x89E3;"></a>TraceElephant &#x8BBE;&#x8BA1;&#x8BE6;&#x89E3;</h2>
<h3 id="A. &#x4E3A;&#x4EC0;&#x4E48;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x5F52;&#x56E0;&#x6B65;&#x9AA4;&#x201D;&#xFF1F;"><a href="#A. &#x4E3A;&#x4EC0;&#x4E48;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x5F52;&#x56E0;&#x6B65;&#x9AA4;&#x201D;&#xFF1F;"></a>A. &#x4E3A;&#x4EC0;&#x4E48;&#x201C;&#x7B2C;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x5F52;&#x56E0;&#x6B65;&#x9AA4;&#x201D;&#xFF1F;</h3>
<p>&#x8FD9;&#x662F;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x6700;&#x503C;&#x5F97;&#x8BB0;&#x4F4F;&#x7684;&#x6982;&#x5FF5;&#x3002;</p>
<p>&#x5728; Agent &#x7CFB;&#x7EDF;&#x91CC;&#xFF0C;&#x9519;&#x8BEF;&#x53EF;&#x80FD;&#x662F;&#x53EF;&#x6062;&#x590D;&#x7684;&#x3002;&#x53EA;&#x6709;&#x5F53;&#x67D0;&#x4E2A;&#x8D1F;&#x8D23;&#x6062;&#x590D;&#x7684;&#x7EC4;&#x4EF6;&#x6CA1;&#x6709;&#x5C65;&#x8D23;&#xFF0C;&#x5931;&#x8D25;&#x624D;&#x53D8;&#x5F97;&#x4E0D;&#x53EF;&#x907F;&#x514D;&#x3002;</p>
<p>&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">Step 2 SearchAgent&#xFF1A;
&#x67E5;&#x5230;&#x4E00;&#x6761;&#x4E0D;&#x5B8C;&#x6574;&#x8D44;&#x6599;&#x3002;

Step 3 PlannerAgent&#xFF1A;
&#x57FA;&#x4E8E;&#x4E0D;&#x5B8C;&#x6574;&#x8D44;&#x6599;&#x751F;&#x6210;&#x8349;&#x6848;&#x3002;

Step 4 VerifierAgent&#xFF1A;
&#x804C;&#x8D23;&#x662F;&#x68C0;&#x67E5;&#x8D44;&#x6599;&#x5B8C;&#x6574;&#x6027;&#xFF0C;&#x4F46;&#x5B83;&#x6CA1;&#x6709;&#x53D1;&#x73B0;&#x95EE;&#x9898;&#x3002;

Final&#xFF1A;
&#x7B54;&#x6848;&#x5931;&#x8D25;&#x3002;
</code></pre>
<p>&#x5982;&#x679C;&#x7CFB;&#x7EDF;&#x8BBE;&#x8BA1;&#x91CC;&#x660E;&#x786E;&#x6709; VerifierAgent&#xFF0C;&#x90A3;&#x4E48; Step 2 &#x7684;&#x95EE;&#x9898;&#x4ECD;&#x7136;&#x53EF;&#x6062;&#x590D;&#x3002;&#x771F;&#x6B63;&#x7684; decisive failure step &#x53EF;&#x80FD;&#x662F; Step 4&#x3002;</p>
<p>&#x8FD9;&#x548C;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x91CC;&#x7684;&#x201C;&#x8D23;&#x4EFB;&#x8FB9;&#x754C;&#x201D;&#x5F88;&#x50CF;&#xFF1A;</p>
<pre><code class="language-text">&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E86;&#x53EF;&#x80FD;&#x4E3A;&#x7A7A;&#x7684;&#x6570;&#x636E;&#x3002;
&#x8C03;&#x7528;&#x65B9;&#x5982;&#x679C;&#x6709;&#x804C;&#x8D23;&#x505A; null check&#xFF0C;&#x5374;&#x6CA1;&#x505A;&#xFF0C;&#x5D29;&#x6E83;&#x8D23;&#x4EFB;&#x4E0D;&#x4E00;&#x5B9A;&#x5B8C;&#x5168;&#x5728;&#x4E0A;&#x6E38;&#x3002;
</code></pre>
<p>TraceElephant &#x628A;&#x8FD9;&#x4E2A;&#x601D;&#x60F3;&#x8FC1;&#x79FB;&#x5230;&#x4E86; Agent &#x7CFB;&#x7EDF;&#x3002;</p>
<h3 id="B. &#x4E3A;&#x4EC0;&#x4E48; input_context &#x662F;&#x7B2C;&#x4E00;&#x7B49;&#x516C;&#x6C11;&#xFF1F;"><a href="#B. &#x4E3A;&#x4EC0;&#x4E48; input_context &#x662F;&#x7B2C;&#x4E00;&#x7B49;&#x516C;&#x6C11;&#xFF1F;"></a>B. &#x4E3A;&#x4EC0;&#x4E48; input_context &#x662F;&#x7B2C;&#x4E00;&#x7B49;&#x516C;&#x6C11;&#xFF1F;</h3>
<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x628A; Agent &#x7684;&#x4E00;&#x6B21; action &#x770B;&#x6210;&#x51FD;&#x6570;&#x8C03;&#x7528;&#xFF1A;</p>
<pre><code class="language-text">output = agent_policy(input_context)
</code></pre>
<p>&#x5982;&#x679C;&#x53EA;&#x8BB0;&#x5F55; output&#xFF0C;&#x76F8;&#x5F53;&#x4E8E;&#x53EA;&#x770B;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x503C;&#xFF0C;&#x4E0D;&#x770B;&#x53C2;&#x6570;&#x3002;</p>
<pre><code class="language-text">&#x53EA;&#x770B; output&#xFF1A;
  &quot;The plan is feasible.&quot;

&#x4E0D;&#x77E5;&#x9053;&#xFF1A;
  &#x5B83;&#x8981;&#x9A8C;&#x8BC1;&#x4EC0;&#x4E48;&#xFF1F;
  &#x5B83;&#x662F;&#x5426;&#x770B;&#x5230;&#x4E86;&#x7528;&#x6237;&#x504F;&#x597D;&#xFF1F;
  &#x5B83;&#x662F;&#x5426;&#x770B;&#x5230;&#x4E86;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#xFF1F;
  &#x5B83;&#x662F;&#x5426;&#x88AB; system prompt &#x8981;&#x6C42;&#x4E25;&#x683C;&#x68C0;&#x67E5;&#xFF1F;
</code></pre>
<p>&#x6240;&#x4EE5; failure attribution &#x81F3;&#x5C11;&#x8981;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#x53C2;&#x6570;&#xFF1A;input_context
&#x51FD;&#x6570;&#x8EAB;&#x4EFD;&#xFF1A;agent_name / role
&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#xFF1A;agent configuration / system prompt
&#x5916;&#x90E8;&#x4F9D;&#x8D56;&#xFF1A;tool_logs
&#x8FD4;&#x56DE;&#x503C;&#xFF1A;output_content
</code></pre>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x4E3A;&#x4EC0;&#x4E48; TraceElephant &#x4E0D;&#x6EE1;&#x8DB3;&#x4E8E; output-only trace&#x3002;</p>
<h3 id="C. Static vs Dynamic &#x7684;&#x5DE5;&#x7A0B;&#x610F;&#x4E49;"><a href="#C. Static vs Dynamic &#x7684;&#x5DE5;&#x7A0B;&#x610F;&#x4E49;"></a>C. Static vs Dynamic &#x7684;&#x5DE5;&#x7A0B;&#x610F;&#x4E49;</h3>
<p>Static trace &#x50CF;&#x65E5;&#x5FD7;&#x5206;&#x6790;&#xFF0C;Dynamic environment &#x50CF;&#x65AD;&#x70B9;&#x8C03;&#x8BD5;&#x3002;</p>
<pre><code class="language-text">Static&#xFF1A;
&#x6211;&#x770B;&#x65E5;&#x5FD7;&#xFF0C;&#x731C;&#x6D4B; Step 4 &#x662F;&#x5173;&#x952E;&#x5931;&#x8D25;&#x70B9;&#x3002;

Dynamic&#xFF1A;
&#x6211;&#x4ECE; Step 4 &#x91CD;&#x65B0;&#x8DD1;&#xFF0C;&#x6539;&#x4E00;&#x4E2A;&#x8F93;&#x5165;&#x6216;&#x63D0;&#x793A;&#xFF0C;&#x89C2;&#x5BDF;&#x5931;&#x8D25;&#x662F;&#x5426;&#x88AB;&#x5C40;&#x90E8;&#x4FEE;&#x6B63;&#x3002;
</code></pre>
<p>&#x5BF9;&#x4E8E;&#x751F;&#x4EA7;&#x7CFB;&#x7EDF;&#xFF0C;&#x8FD9;&#x4E2A;&#x601D;&#x60F3;&#x53EF;&#x4EE5;&#x53D8;&#x6210;&#x4E00;&#x79CD;&#x8C03;&#x8BD5;&#x5DE5;&#x5177;&#xFF1A;</p>
<pre><code class="language-text">1. &#x81EA;&#x52A8;&#x6536;&#x96C6;&#x5B8C;&#x6574; trace&#x3002;
2. &#x81EA;&#x52A8;&#x63D0;&#x51FA; 3 &#x4E2A;&#x5019;&#x9009;&#x5931;&#x8D25;&#x70B9;&#x3002;
3. &#x5BF9;&#x6BCF;&#x4E2A;&#x5019;&#x9009;&#x70B9;&#x505A;&#x5C40;&#x90E8; replay&#x3002;
4. &#x6BD4;&#x8F83; replay &#x540E;&#x7684;&#x77ED;&#x671F;&#x884C;&#x4E3A;&#x662F;&#x5426;&#x6539;&#x5584;&#x3002;
5. &#x7ED9;&#x51FA;&#x66F4;&#x53EF;&#x4FE1;&#x7684; failure attribution report&#x3002;
</code></pre>
<p>&#x5B83;&#x4E0D;&#x8981;&#x6C42;&#x4E00;&#x6B21;&#x6027;&#x8BC1;&#x660E;&#x5168;&#x5C40;&#x56E0;&#x679C;&#xFF0C;&#x53EA;&#x8981;&#x6C42;&#x5728;&#x6709;&#x9650;&#x7A97;&#x53E3;&#x91CC;&#x9A8C;&#x8BC1;&#x5C40;&#x90E8;&#x8D23;&#x4EFB;&#x3002;&#x8FD9;&#x5F88;&#x52A1;&#x5B9E;&#x3002;</p>
<h3 id="D. &#x4E3A;&#x4EC0;&#x4E48; step-level attribution &#x8FD9;&#x4E48;&#x96BE;&#xFF1F;"><a href="#D. &#x4E3A;&#x4EC0;&#x4E48; step-level attribution &#x8FD9;&#x4E48;&#x96BE;&#xFF1F;"></a>D. &#x4E3A;&#x4EC0;&#x4E48; step-level attribution &#x8FD9;&#x4E48;&#x96BE;&#xFF1F;</h3>
<p>Agent-level &#x5224;&#x65AD;&#x50CF;&#x662F;&#x5728;&#x95EE;&#xFF1A;</p>
<pre><code class="language-text">&#x54EA;&#x4E2A;&#x7EC4;&#x4EF6;&#x5927;&#x6982;&#x7387;&#x6709;&#x95EE;&#x9898;&#xFF1F;
</code></pre>
<p>Step-level &#x5224;&#x65AD;&#x50CF;&#x662F;&#x5728;&#x95EE;&#xFF1A;</p>
<pre><code class="language-text">&#x54EA;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x8BA9;&#x5931;&#x8D25;&#x4ECE;&#x201C;&#x53EF;&#x6062;&#x590D;&#x201D;&#x53D8;&#x6210;&#x201C;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x201D;&#xFF1F;
</code></pre>
<p>&#x540E;&#x8005;&#x8981;&#x6C42;&#x6A21;&#x578B;&#x7406;&#x89E3;&#xFF1A;</p>
<ul>
<li>&#x65F6;&#x95F4;&#x987A;&#x5E8F;</li>
<li>&#x4FE1;&#x606F;&#x662F;&#x5426;&#x4F20;&#x9012;</li>
<li>&#x89D2;&#x8272;&#x804C;&#x8D23;</li>
<li>&#x540E;&#x7EED;&#x662F;&#x5426;&#x8FD8;&#x6709;&#x7EA0;&#x9519;&#x673A;&#x4F1A;</li>
<li>&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x662F;&#x5426;&#x53EF;&#x4FE1;</li>
<li>&#x54EA;&#x4E00;&#x6B65;&#x6539;&#x53D8;&#x4E86;&#x7CFB;&#x7EDF;&#x72B6;&#x6001;</li>
</ul>
<p>&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x5B8C;&#x6574; trace &#x4E0B; step-level accuracy &#x4E5F;&#x53EA;&#x6709;&#x4E09;&#x6210;&#x5DE6;&#x53F3;&#x3002;&#x5B83;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x5206;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x56E0;&#x679C;&#x8BCA;&#x65AD;&#x4EFB;&#x52A1;&#x3002;</p>
<h2 id="&#x548C;&#x73B0;&#x6709; Agent &#x7814;&#x7A76;&#x7684;&#x5173;&#x7CFB;"><a href="#&#x548C;&#x73B0;&#x6709; Agent &#x7814;&#x7A76;&#x7684;&#x5173;&#x7CFB;"></a>&#x548C;&#x73B0;&#x6709; Agent &#x7814;&#x7A76;&#x7684;&#x5173;&#x7CFB;</h2>
<table>
<thead>
<tr>
<th>&#x65B9;&#x5411;</th>
<th>&#x5173;&#x6CE8;&#x70B9;</th>
<th>TraceElephant &#x7684;&#x4F4D;&#x7F6E;</th>
</tr>
</thead>
<tbody>
<tr>
<td>AgentBench / GAIA</td>
<td>Agent &#x80FD;&#x4E0D;&#x80FD;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;</td>
<td>&#x4E0B;&#x6E38;&#x4EFB;&#x52A1;&#x6765;&#x6E90;&#x4E4B;&#x4E00;</td>
</tr>
<tr>
<td>SWE-Bench</td>
<td>Coding Agent &#x80FD;&#x4E0D;&#x80FD;&#x4FEE; bug</td>
<td>&#x91C7;&#x96C6; SWE-Agent &#x5931;&#x8D25;&#x8F68;&#x8FF9;</td>
</tr>
<tr>
<td>Who&amp;When</td>
<td>output-only failure attribution</td>
<td>TraceElephant &#x7684;&#x5BF9;&#x7167;&#x5BF9;&#x8C61;</td>
</tr>
<tr>
<td>GraphTracer / AgenTracer / FAMAS</td>
<td>failure attribution &#x65B9;&#x6CD5;</td>
<td>&#x9700;&#x8981; benchmark &#x6765;&#x8BC4;&#x6D4B;</td>
</tr>
<tr>
<td>Agent framework observability</td>
<td>&#x65E5;&#x5FD7;&#x3001;trace&#x3001;&#x76D1;&#x63A7;</td>
<td>TraceElephant &#x63D0;&#x4F9B; benchmark &#x89C6;&#x89D2;</td>
</tr>
</tbody>
</table>
<p>&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x7406;&#x89E3;&#xFF1A;</p>
<p><strong>&#x8FC7;&#x53BB;&#x5F88;&#x591A; benchmark &#x95EE;&#x201C;Agent &#x505A;&#x5BF9;&#x4E86;&#x5417;&#x201D;&#xFF1B;TraceElephant &#x95EE;&#x201C;Agent &#x505A;&#x9519;&#x65F6;&#xFF0C;&#x6211;&#x4EEC;&#x80FD;&#x4E0D;&#x80FD;&#x89E3;&#x91CA;&#x9519;&#x5728;&#x54EA;&#x91CC;&#x201D;&#x3002;</strong></p>
<p>&#x8FD9;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x4E00;&#x6837;&#x91CD;&#x8981;&#x3002;&#x6CA1;&#x6709;&#x540E;&#x8005;&#xFF0C;Agent &#x7CFB;&#x7EDF;&#x5F88;&#x96BE;&#x4ECE; demo &#x8D70;&#x5411;&#x5DE5;&#x7A0B;&#x5316;&#x3002;</p>
<h2 id="&#x5C40;&#x9650;&#x6027;"><a href="#&#x5C40;&#x9650;&#x6027;"></a>&#x5C40;&#x9650;&#x6027;</h2>
<p>TraceElephant &#x4E5F;&#x6709;&#x660E;&#x663E;&#x8FB9;&#x754C;&#xFF1A;</p>
<ul>
<li>&#x53EA;&#x8986;&#x76D6;&#x4E09;&#x4E2A;&#x7CFB;&#x7EDF;&#xFF1A;Captain-Agent&#x3001;Magentic-One&#x3001;SWE-Agent&#xFF0C;&#x4E0D;&#x80FD;&#x4EE3;&#x8868;&#x6240;&#x6709; Agent &#x67B6;&#x6784;&#x3002;</li>
<li>&#x4EFB;&#x52A1;&#x6765;&#x81EA;&#x516C;&#x5F00; benchmark&#xFF0C;&#x4E0D;&#x7B49;&#x4E8E;&#x771F;&#x5B9E;&#x4F01;&#x4E1A;&#x5DE5;&#x4F5C;&#x6D41;&#x3002;</li>
<li>full observability &#x66F4;&#x9002;&#x5408;&#x5F00;&#x53D1;&#x8005;&#x81EA;&#x6709;&#x7CFB;&#x7EDF;&#xFF0C;&#x4E0D;&#x9002;&#x5408;&#x5B8C;&#x5168;&#x9ED1;&#x76D2;&#x5E73;&#x53F0;&#x3002;</li>
<li>&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x867D;&#x7136;&#x7ECF;&#x8FC7;&#x591A;&#x8F6E;&#x5171;&#x8BC6;&#xFF0C;&#x4F46; step-level attribution &#x672C;&#x8EAB;&#x4ECD;&#x7136;&#x6709;&#x4E3B;&#x89C2;&#x6027;&#x3002;</li>
<li>&#x52A8;&#x6001; replay &#x53EA;&#x505A;&#x5C40;&#x90E8;&#x7A97;&#x53E3;&#x9A8C;&#x8BC1;&#xFF0C;&#x4E0D;&#x80FD;&#x8BC1;&#x660E;&#x5168;&#x5C40;&#x56E0;&#x679C;&#x5145;&#x5206;&#x6027;&#x3002;</li>
<li>trace &#x53EF;&#x80FD;&#x5305;&#x542B;&#x654F;&#x611F;&#x4FE1;&#x606F;&#xFF0C;&#x751F;&#x4EA7;&#x7CFB;&#x7EDF;&#x9700;&#x8981;&#x505A;&#x8131;&#x654F;&#x3001;&#x6743;&#x9650;&#x63A7;&#x5236;&#x548C;&#x6570;&#x636E;&#x6CBB;&#x7406;&#x3002;</li>
</ul>
<h2 id="&#x5DE5;&#x7A0B;&#x542F;&#x53D1;"><a href="#&#x5DE5;&#x7A0B;&#x542F;&#x53D1;"></a>&#x5DE5;&#x7A0B;&#x542F;&#x53D1;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x5BF9; Agent &#x5DE5;&#x7A0B;&#x6700;&#x5927;&#x7684;&#x542F;&#x53D1;&#x662F;&#xFF1A;<strong>Agent &#x7CFB;&#x7EDF;&#x4ECE;&#x7B2C;&#x4E00;&#x5929;&#x5C31;&#x5E94;&#x8BE5;&#x4E3A;&#x53EF;&#x8C03;&#x8BD5;&#x6027;&#x8BBE;&#x8BA1;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5931;&#x8D25;&#x540E;&#x518D;&#x8865;&#x65E5;&#x5FD7;&#x3002;</strong></p>
<h3 id="1. &#x6BCF;&#x6B21; LLM &#x8C03;&#x7528;&#x90FD;&#x5E94;&#x8BE5;&#x8BB0;&#x5F55; input &#x548C; output"><a href="#1. &#x6BCF;&#x6B21; LLM &#x8C03;&#x7528;&#x90FD;&#x5E94;&#x8BE5;&#x8BB0;&#x5F55; input &#x548C; output"></a>1. &#x6BCF;&#x6B21; LLM &#x8C03;&#x7528;&#x90FD;&#x5E94;&#x8BE5;&#x8BB0;&#x5F55; input &#x548C; output</h3>
<p>&#x53EA;&#x8BB0;&#x5F55;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x8FDC;&#x8FDC;&#x4E0D;&#x591F;&#x3002;&#x81F3;&#x5C11;&#x8981;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">messages
system prompt
developer prompt
tool schemas
tool arguments
tool outputs
agent role
orchestrator decision
</code></pre>
<p>&#x5426;&#x5219;&#x672A;&#x6765;&#x51FA;&#x4E86;&#x95EE;&#x9898;&#xFF0C;&#x4F60;&#x53EA;&#x80FD;&#x770B;&#x89C1;&#x201C;Agent &#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#x201D;&#xFF0C;&#x5374;&#x4E0D;&#x77E5;&#x9053;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x4E48;&#x8BF4;&#x3002;</p>
<h3 id="2. Trace &#x8981;&#x7ED3;&#x6784;&#x5316;&#xFF0C;&#x4E0D;&#x8981;&#x53EA;&#x5B58;&#x7EAF;&#x6587;&#x672C;&#x65E5;&#x5FD7;"><a href="#2. Trace &#x8981;&#x7ED3;&#x6784;&#x5316;&#xFF0C;&#x4E0D;&#x8981;&#x53EA;&#x5B58;&#x7EAF;&#x6587;&#x672C;&#x65E5;&#x5FD7;"></a>2. Trace &#x8981;&#x7ED3;&#x6784;&#x5316;&#xFF0C;&#x4E0D;&#x8981;&#x53EA;&#x5B58;&#x7EAF;&#x6587;&#x672C;&#x65E5;&#x5FD7;</h3>
<p>&#x5EFA;&#x8BAE;&#x4ECE;&#x4E00;&#x5F00;&#x59CB;&#x5C31;&#x7528;&#x7C7B;&#x4F3C;&#x7ED3;&#x6784;&#xFF1A;</p>
<pre><code class="language-json">{
  &quot;step_id&quot;: 12,
  &quot;agent_name&quot;: &quot;VerifierAgent&quot;,
  &quot;input_context&quot;: &quot;...&quot;,
  &quot;output_content&quot;: &quot;...&quot;,
  &quot;tool_logs&quot;: [...],
  &quot;parent_step_ids&quot;: [8, 10],
  &quot;state_delta&quot;: {...}
}
</code></pre>
<p>&#x8FD9;&#x6837;&#x540E;&#x9762;&#x624D;&#x80FD;&#x505A;&#x641C;&#x7D22;&#x3001;&#x805A;&#x5408;&#x3001;&#x53EF;&#x89C6;&#x5316;&#x548C;&#x81EA;&#x52A8;&#x5F52;&#x56E0;&#x3002;</p>
<h3 id="3. Agent &#x67B6;&#x6784;&#x8981;&#x663E;&#x5F0F;&#x5B9A;&#x4E49;&#x8D23;&#x4EFB;&#x8FB9;&#x754C;"><a href="#3. Agent &#x67B6;&#x6784;&#x8981;&#x663E;&#x5F0F;&#x5B9A;&#x4E49;&#x8D23;&#x4EFB;&#x8FB9;&#x754C;"></a>3. Agent &#x67B6;&#x6784;&#x8981;&#x663E;&#x5F0F;&#x5B9A;&#x4E49;&#x8D23;&#x4EFB;&#x8FB9;&#x754C;</h3>
<p>&#x5982;&#x679C;&#x7CFB;&#x7EDF;&#x91CC;&#x6709; Planner&#x3001;Executor&#x3001;Verifier&#xFF0C;&#x90A3;&#x5C31;&#x8981;&#x660E;&#x786E;&#xFF1A;</p>
<pre><code class="language-text">Planner &#x8D1F;&#x8D23;&#x4EC0;&#x4E48;&#xFF1F;
Executor &#x8D1F;&#x8D23;&#x4EC0;&#x4E48;&#xFF1F;
Verifier &#x5FC5;&#x987B;&#x68C0;&#x67E5;&#x54EA;&#x4E9B;&#x4E1C;&#x897F;&#xFF1F;
Orchestrator &#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x89C4;&#x5212;&#xFF1F;
</code></pre>
<p>&#x5426;&#x5219;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x65F6;&#x4F1A;&#x9677;&#x5165;&#x201C;&#x5927;&#x5BB6;&#x90FD;&#x6709;&#x70B9;&#x9519;&#xFF0C;&#x4F46;&#x4E0D;&#x77E5;&#x9053;&#x8BE5;&#x4FEE;&#x8C01;&#x201D;&#x7684;&#x72B6;&#x6001;&#x3002;</p>
<h3 id="4. Replay &#x80FD;&#x529B;&#x4F1A;&#x6210;&#x4E3A;&#x9AD8;&#x7EA7; Agent &#x5E73;&#x53F0;&#x7684;&#x6838;&#x5FC3;&#x80FD;&#x529B;"><a href="#4. Replay &#x80FD;&#x529B;&#x4F1A;&#x6210;&#x4E3A;&#x9AD8;&#x7EA7; Agent &#x5E73;&#x53F0;&#x7684;&#x6838;&#x5FC3;&#x80FD;&#x529B;"></a>4. Replay &#x80FD;&#x529B;&#x4F1A;&#x6210;&#x4E3A;&#x9AD8;&#x7EA7; Agent &#x5E73;&#x53F0;&#x7684;&#x6838;&#x5FC3;&#x80FD;&#x529B;</h3>
<p>&#x672A;&#x6765;&#x7684; Agent debugging &#x53EF;&#x80FD;&#x5F88;&#x50CF; IDE &#x8C03;&#x8BD5;&#xFF1A;</p>
<pre><code class="language-text">&#x6253;&#x5F00;&#x5931;&#x8D25; trace
&#x8DF3;&#x5230;&#x67D0;&#x4E00;&#x6B65;
&#x67E5;&#x770B;&#x5F53;&#x65F6; prompt &#x548C;&#x5DE5;&#x5177;&#x7ED3;&#x679C;
&#x4FEE;&#x6539;&#x67D0;&#x4E2A;&#x8F93;&#x5165;
&#x4ECE;&#x8FD9;&#x91CC;&#x91CD;&#x8DD1; 3 &#x6B65;
&#x6BD4;&#x8F83;&#x65B0;&#x65E7;&#x8F68;&#x8FF9;
&#x751F;&#x6210; attribution report
</code></pre>
<p>TraceElephant &#x7684; dynamic setting &#x6B63;&#x662F;&#x5728;&#x5F80;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x8D70;&#x3002;</p>
<h3 id="5. Failure attribution &#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x8BAD;&#x7EC3; Agent"><a href="#5. Failure attribution &#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x8BAD;&#x7EC3; Agent"></a>5. Failure attribution &#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x8BAD;&#x7EC3; Agent</h3>
<p>&#x5982;&#x679C;&#x6211;&#x4EEC;&#x80FD;&#x7A33;&#x5B9A;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25; Agent
&#x5931;&#x8D25;&#x6B65;&#x9AA4;
&#x5931;&#x8D25;&#x539F;&#x56E0;
&#x6B63;&#x786E;&#x884C;&#x4E3A; oracle
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x4FE1;&#x53F7;&#x5C31;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#xFF1A;</p>
<ul>
<li>prompt &#x6539;&#x8FDB;</li>
<li>verifier &#x8BAD;&#x7EC3;</li>
<li>agent routing &#x4F18;&#x5316;</li>
<li>RL reward</li>
<li>regression test</li>
<li>architecture refactor</li>
</ul>
<p>&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E0D;&#x662F;&#x7EC8;&#x70B9;&#xFF0C;&#x800C;&#x662F; Agent &#x81EA;&#x6211;&#x6539;&#x8FDB;&#x7684;&#x8D77;&#x70B9;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p><strong>TraceElephant &#x7684;&#x6838;&#x5FC3;&#x8D21;&#x732E;&#x662F;&#xFF1A;&#x628A; LLM &#x591A; Agent &#x7CFB;&#x7EDF;&#x7684;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#xFF0C;&#x4ECE; output-only &#x7684;&#x9ED1;&#x76D2;&#x731C;&#x6D4B;&#xFF0C;&#x63A8;&#x8FDB;&#x5230; full-trace&#x3001;&#x53EF;&#x590D;&#x73B0;&#x3001;developer-facing &#x7684;&#x8C03;&#x8BD5; benchmark&#x3002;</strong></p>
<p>&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E09;&#x4E2A;&#x70B9;&#xFF1A;</p>
<ol>
<li><strong>&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x5305;&#x62EC; who &#x548C; when&#xFF1A;</strong> &#x4E0D;&#x4EC5;&#x8981;&#x77E5;&#x9053;&#x54EA;&#x4E2A; Agent &#x6709;&#x8D23;&#x4EFB;&#xFF0C;&#x8FD8;&#x8981;&#x77E5;&#x9053;&#x54EA;&#x4E00;&#x6B65;&#x8BA9;&#x5931;&#x8D25;&#x4E0D;&#x53EF;&#x6062;&#x590D;&#x3002;</li>
<li><strong>&#x5B8C;&#x6574;&#x53EF;&#x89C2;&#x6D4B;&#x6027;&#x975E;&#x5E38;&#x5173;&#x952E;&#xFF1A;</strong> input_context&#x3001;metadata&#x3001;tool_logs &#x5BF9; step-level attribution &#x5C24;&#x5176;&#x91CD;&#x8981;&#x3002;</li>
<li><strong>&#x52A8;&#x6001;&#x91CD;&#x653E;&#x8BA9;&#x5F52;&#x56E0;&#x66F4;&#x63A5;&#x8FD1;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#xFF1A;</strong> replay &#x548C; counterfactual probing &#x53EF;&#x4EE5;&#x9A8C;&#x8BC1;&#x5019;&#x9009;&#x5931;&#x8D25;&#x70B9;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x9760;&#x9759;&#x6001;&#x65E5;&#x5FD7;&#x731C;&#x3002;</li>
</ol>
<p>&#x5982;&#x679C;&#x8BF4;&#x5F88;&#x591A; Agent benchmark &#x5728;&#x95EE;&#x201C;Agent &#x80FD;&#x529B;&#x6709;&#x591A;&#x5F3A;&#x201D;&#xFF0C;TraceElephant &#x95EE;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x4E2A;&#x66F4;&#x5DE5;&#x7A0B;&#x5316;&#x7684;&#x95EE;&#x9898;&#xFF1A;</p>
<p><strong>&#x5F53; Agent &#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x6211;&#x4EEC;&#x6709;&#x6CA1;&#x6709;&#x8DB3;&#x591F;&#x7684;&#x4FE1;&#x606F;&#x548C;&#x5DE5;&#x5177;&#xFF0C;&#x628A;&#x5931;&#x8D25;&#x8BB2;&#x6E05;&#x695A;&#x3001;&#x5B9A;&#x4F4D;&#x6E05;&#x695A;&#x3001;&#x4FEE;&#x590D;&#x6E05;&#x695A;&#xFF1F;</strong></p>
<p>&#x8FD9;&#x5BF9; Agent &#x8D70;&#x5411;&#x771F;&#x5B9E;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x975E;&#x5E38;&#x5173;&#x952E;&#x3002;</p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2604.22708">&#x8BBA;&#x6587;&#x539F;&#x6587;&#xFF1A;Seeing the Whole Elephant: A Benchmark for Failure Attribution in LLM-based Multi-Agent Systems</a></li>
<li><a href="https://arxiv.org/html/2604.22708v1">arXiv HTML &#x7248;&#x672C;</a></li>
<li><a href="https://github.com/TraceElephant/TraceElephant">&#x5B98;&#x65B9;&#x4EE3;&#x7801;&#x4E0E;&#x6570;&#x636E;&#x4ED3;&#x5E93;&#xFF1A;TraceElephant/TraceElephant</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-04-30</em></p>
`,t=[{level:2,title:"TraceElephant 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[{level:3,title:"1. Agent 的“状态”变成了自然语言",children:[]},{level:3,title:"2. 多 Agent 错误经常不是局部错误",children:[]},{level:3,title:"3. Agent 开始进入真实工程，调试需求变强",children:[]}]},{level:2,title:"它是如何解决的？",children:[]},{level:2,title:"核心机制：从一条失败轨迹到失败归因",children:[{level:3,title:"1. 完整 trace 记录：不只记录“说了什么”",children:[]},{level:3,title:"2. Failure Attribution：不是找第一个错误，而是找“不可恢复点”",children:[]},{level:3,title:"3. Annotation：人工专家标注 who 和 when",children:[]},{level:3,title:"4. Static vs Dynamic：静态看日志 vs 动态重放验证",children:[]}]},{level:2,title:"TraceElephant Benchmark 是怎么构造的？",children:[{level:3,title:"1. 数据来源：三个代表性 Agent 系统",children:[]},{level:3,title:"2. Trace Collection Pipeline：用 LLM API Middleware 抓全量信息",children:[]},{level:3,title:"3. Trace Schema：失败调试需要哪些字段？",children:[]}]},{level:2,title:"实验怎么做？",children:[{level:3,title:"1. 五类归因方法",children:[]},{level:3,title:"2. Static Agentic 的流程例子",children:[]},{level:3,title:"3. Dynamic Agentic 的流程例子",children:[]}]},{level:2,title:"结果怎么样？",children:[{level:3,title:"1. 完整 trace 显著提升归因准确率",children:[]},{level:3,title:"2. 缺 input 比缺 metadata 更伤",children:[]},{level:3,title:"3. Output-only benchmark 会低估真实调试能力",children:[]},{level:3,title:"4. 失败模式和架构强相关",children:[]}]},{level:2,title:"TraceElephant 设计详解",children:[{level:3,title:"A. 为什么“第一个错误”不等于“归因步骤”？",children:[]},{level:3,title:"B. 为什么 input_context 是第一等公民？",children:[]},{level:3,title:"C. Static vs Dynamic 的工程意义",children:[]},{level:3,title:"D. 为什么 step-level attribution 这么难？",children:[]}]},{level:2,title:"和现有 Agent 研究的关系",children:[]},{level:2,title:"局限性",children:[]},{level:2,title:"工程启发",children:[{level:3,title:"1. 每次 LLM 调用都应该记录 input 和 output",children:[]},{level:3,title:"2. Trace 要结构化，不要只存纯文本日志",children:[]},{level:3,title:"3. Agent 架构要显式定义责任边界",children:[]},{level:3,title:"4. Replay 能力会成为高级 Agent 平台的核心能力",children:[]},{level:3,title:"5. Failure attribution 可以反过来训练 Agent",children:[]}]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,t as nestedHeaders};
