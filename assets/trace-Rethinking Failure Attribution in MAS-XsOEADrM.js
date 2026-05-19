const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2026-03-26</em></p>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x5168;&#x540D;&#x662F;&#x300A;<a href="https://arxiv.org/abs/2603.25001">Rethinking Failure Attribution in Multi-Agent Systems: A Multi-Perspective Benchmark and Evaluation</a>&#x300B;&#x3002;</p>
<h2 id="&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;"><a href="#&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;"></a>&#x4E00;&#x53E5;&#x8BDD;&#x7ED3;&#x8BBA;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x53CD;&#x9A73;&#x4E86;&#x4E00;&#x4E2A;&#x9690;&#x542B;&#x5047;&#x8BBE;&#xFF1A;</p>
<p><strong>&#x591A; Agent &#x7CFB;&#x7EDF;&#x5931;&#x8D25;&#x65F6;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x552F;&#x4E00;&#x6839;&#x56E0;&#x3002;</strong></p>
<p>&#x8FC7;&#x53BB;&#x5F88;&#x591A; failure attribution benchmark &#x4F1A;&#x8981;&#x6C42;&#x6A21;&#x578B;&#x9884;&#x6D4B;&#x4E00;&#x4E2A;&#x6807;&#x51C6;&#x7B54;&#x6848;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x6B65;&#x9AA4; = Step 4
&#x8D23;&#x4EFB; Agent = TesterAgent
</code></pre>
<p>Rethinking &#x8BA4;&#x4E3A;&#x8FD9;&#x4E0D;&#x7B26;&#x5408;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x3002;&#x771F;&#x5B9E;&#x591A; Agent &#x5931;&#x8D25;&#x7ECF;&#x5E38;&#x6709;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x89E3;&#x91CA;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent &#x6F0F;&#x627E;&#x5173;&#x952E;&#x6587;&#x4EF6;&#xFF0C;&#x662F;&#x4E00;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x3002;
CoderAgent &#x6CA1;&#x4E3B;&#x52A8;&#x68C0;&#x67E5;&#x76F8;&#x5173;&#x903B;&#x8F91;&#xFF0C;&#x662F;&#x4E00;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x3002;
TesterAgent &#x6CA1;&#x53D1;&#x73B0; patch &#x6CA1;&#x4FEE;&#x597D;&#xFF0C;&#x4E5F;&#x662F;&#x4E00;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x3002;
</code></pre>
<p>&#x6240;&#x4EE5;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E0D;&#x5E94;&#x8BE5;&#x662F;&#x201C;&#x5355;&#x9009;&#x9898;&#x201D;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x7ED9;&#x51FA;&#x591A;&#x4E2A;&#x53EF;&#x80FD;&#x5931;&#x8D25;&#x70B9;
&#x6BCF;&#x4E2A;&#x5931;&#x8D25;&#x70B9;&#x7ED9;&#x7406;&#x7531;
&#x6309;&#x5171;&#x8BC6;&#x5EA6; / &#x4F18;&#x5148;&#x7EA7;&#x6392;&#x5E8F;
</code></pre>
<h2 id="&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x7406;&#x89E3;"><a href="#&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x7406;&#x89E3;"></a>&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x7406;&#x89E3;</h2>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4E2A; Coding Agent &#x7CFB;&#x7EDF;&#xFF1A;</p>
<pre><code class="language-text">&#x7528;&#x6237;&#x4EFB;&#x52A1;&#xFF1A;
&#x4FEE;&#x590D;&#x767B;&#x5F55;&#x9875; bug&#xFF1A;&#x8868;&#x5355;&#x65E0;&#x6548;&#x65F6;&#xFF0C;&#x63D0;&#x4EA4;&#x6309;&#x94AE;&#x5FC5;&#x987B; disabled&#x3002;

Agent &#x5206;&#x5DE5;&#xFF1A;
PlannerAgent  &#x62C6;&#x4EFB;&#x52A1;
SearchAgent   &#x627E;&#x76F8;&#x5173;&#x6587;&#x4EF6;
CoderAgent    &#x4FEE;&#x6539;&#x4EE3;&#x7801;
TesterAgent   &#x9A8C;&#x8BC1;&#x4FEE;&#x590D;&#x662F;&#x5426;&#x6B63;&#x786E;
</code></pre>
<p>&#x6267;&#x884C;&#x8F68;&#x8FF9;&#xFF1A;</p>
<pre><code class="language-text">Step 1 - PlannerAgent
&#x8F93;&#x51FA;&#xFF1A;&#x9700;&#x8981;&#x68C0;&#x67E5;&#x767B;&#x5F55;&#x8868;&#x5355;&#x548C;&#x6821;&#x9A8C;&#x903B;&#x8F91;&#x3002;

Step 2 - SearchAgent
&#x8F93;&#x51FA;&#xFF1A;&#x627E;&#x5230;&#x4E86; LoginPage.vue&#x3002;
&#x95EE;&#x9898;&#xFF1A;&#x6F0F;&#x6389;&#x4E86; useLoginValidation.ts&#x3002;

Step 3 - CoderAgent
&#x8F93;&#x5165;&#xFF1A;&#x53EA;&#x770B;&#x5230; LoginPage.vue&#x3002;
&#x8F93;&#x51FA;&#xFF1A;&#x53EA;&#x6539;&#x4E86;&#x6309;&#x94AE; CSS&#xFF0C;&#x6CA1;&#x6709;&#x6539; disabled &#x903B;&#x8F91;&#x3002;

Step 4 - TesterAgent
&#x8F93;&#x5165;&#xFF1A;&#x4EFB;&#x52A1;&#x8981;&#x6C42; + diff + &#x73B0;&#x6709;&#x6D4B;&#x8BD5;&#x7ED3;&#x679C;&#x3002;
&#x8F93;&#x51FA;&#xFF1A;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF0C;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x3002;

Final
&#x6309;&#x94AE;&#x4ECD;&#x7136;&#x6CA1;&#x6709;&#x5728;&#x8868;&#x5355;&#x65E0;&#x6548;&#x65F6; disabled&#x3002;
</code></pre>
<p>&#x5982;&#x679C;&#x4F60;&#x7528;&#x4F20;&#x7EDF;&#x5355;&#x6839;&#x56E0;&#x601D;&#x8DEF;&#xFF0C;&#x53EF;&#x80FD;&#x53EA;&#x80FD;&#x9009;&#x4E00;&#x4E2A;&#xFF1A;</p>
<pre><code class="language-text">&#x6807;&#x51C6;&#x7B54;&#x6848;&#xFF1A;Step 4 / TesterAgent
</code></pre>
<p>&#x7406;&#x7531;&#x662F;&#xFF1A;TesterAgent &#x6700;&#x540E;&#x6709;&#x673A;&#x4F1A;&#x53D1;&#x73B0;&#x95EE;&#x9898;&#xFF0C;&#x4F46;&#x5B83;&#x8BEF;&#x5224;&#x5B8C;&#x6210;&#x3002;</p>
<p>&#x4F46; Rethinking &#x8BF4;&#xFF0C;&#x8FD9;&#x79CD;&#x6807;&#x6CE8;&#x65B9;&#x5F0F;&#x592A;&#x786C;&#x4E86;&#x3002;&#x56E0;&#x4E3A;&#x5176;&#x4ED6;&#x89C6;&#x89D2;&#x4E5F;&#x6210;&#x7ACB;&#x3002;</p>
<h2 id="&#x4E09;&#x79CD;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x89C6;&#x89D2;"><a href="#&#x4E09;&#x79CD;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x89C6;&#x89D2;"></a>&#x4E09;&#x79CD;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x89C6;&#x89D2;</h2>
<h3 id="&#x89C6;&#x89D2; 1&#xFF1A;SearchAgent &#x662F;&#x6839;&#x56E0;"><a href="#&#x89C6;&#x89D2; 1&#xFF1A;SearchAgent &#x662F;&#x6839;&#x56E0;"></a>&#x89C6;&#x89D2; 1&#xFF1A;SearchAgent &#x662F;&#x6839;&#x56E0;</h3>
<pre><code class="language-text">&#x5931;&#x8D25;&#x70B9;&#xFF1A;
Step 2 - SearchAgent

&#x7406;&#x7531;&#xFF1A;
SearchAgent &#x672C;&#x8BE5;&#x627E;&#x767B;&#x5F55;&#x8868;&#x5355;&#x76F8;&#x5173;&#x7684;&#x6821;&#x9A8C;&#x903B;&#x8F91;&#xFF0C;&#x4F46;&#x53EA;&#x627E;&#x5230;&#x4E86; UI &#x7EC4;&#x4EF6;&#xFF0C;&#x6F0F;&#x6389;&#x4E86; useLoginValidation.ts&#x3002;

&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#xFF1A;
&#x5B83;&#x5E94;&#x8BE5;&#x7EE7;&#x7EED;&#x641C;&#x7D22; validation&#x3001;disabled&#x3001;submit&#x3001;form invalid &#x7B49;&#x5173;&#x952E;&#x8BCD;&#xFF0C;&#x8FD4;&#x56DE;&#x5B8C;&#x6574;&#x76F8;&#x5173;&#x6587;&#x4EF6;&#x96C6;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x89C6;&#x89D2;&#x5173;&#x6CE8;&#x7684;&#x662F; <strong>&#x4FE1;&#x606F;&#x68C0;&#x7D22;&#x8D23;&#x4EFB;</strong>&#x3002;</p>
<p>&#x5982;&#x679C; SearchAgent &#x4E00;&#x5F00;&#x59CB;&#x5C31;&#x627E;&#x5168;&#x6587;&#x4EF6;&#xFF0C;&#x540E;&#x9762;&#x7684; CoderAgent &#x53EF;&#x80FD;&#x4E0D;&#x4F1A;&#x6539;&#x9519;&#x4F4D;&#x7F6E;&#x3002;</p>
<h3 id="&#x89C6;&#x89D2; 2&#xFF1A;CoderAgent &#x662F;&#x6839;&#x56E0;"><a href="#&#x89C6;&#x89D2; 2&#xFF1A;CoderAgent &#x662F;&#x6839;&#x56E0;"></a>&#x89C6;&#x89D2; 2&#xFF1A;CoderAgent &#x662F;&#x6839;&#x56E0;</h3>
<pre><code class="language-text">&#x5931;&#x8D25;&#x70B9;&#xFF1A;
Step 3 - CoderAgent

&#x7406;&#x7531;&#xFF1A;
CoderAgent &#x770B;&#x5230;&#x4EFB;&#x52A1;&#x662F; disabled &#x884C;&#x4E3A;&#xFF0C;&#x5374;&#x53EA;&#x6539;&#x4E86; CSS&#x3002;&#x5B83;&#x5E94;&#x8BE5;&#x610F;&#x8BC6;&#x5230;&#x201C;&#x89C6;&#x89C9;&#x6837;&#x5F0F;&#x53D8;&#x5316;&#x201D;&#x548C;&#x201C;disabled &#x4EA4;&#x4E92;&#x903B;&#x8F91;&#x201D;&#x4E0D;&#x662F;&#x4E00;&#x56DE;&#x4E8B;&#x3002;

&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#xFF1A;
&#x5B83;&#x5E94;&#x8BE5;&#x68C0;&#x67E5;&#x6309;&#x94AE; disabled prop&#x3001;form validity state&#x3001;submit handler&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x4FEE;&#x6539; class&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x89C6;&#x89D2;&#x5173;&#x6CE8;&#x7684;&#x662F; <strong>&#x5B9E;&#x73B0;&#x8D23;&#x4EFB;</strong>&#x3002;</p>
<p>&#x5373;&#x4F7F; SearchAgent &#x7ED9;&#x7684;&#x4FE1;&#x606F;&#x4E0D;&#x5B8C;&#x6574;&#xFF0C;CoderAgent &#x4E5F;&#x53EF;&#x4EE5;&#x4E3B;&#x52A8;&#x8981;&#x6C42;&#x66F4;&#x591A;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6216;&#x8005;&#x4ECE;&#x7EC4;&#x4EF6;&#x4EE3;&#x7801;&#x91CC;&#x8FFD;&#x8E2A; validation hook&#x3002;</p>
<h3 id="&#x89C6;&#x89D2; 3&#xFF1A;TesterAgent &#x662F;&#x6839;&#x56E0;"><a href="#&#x89C6;&#x89D2; 3&#xFF1A;TesterAgent &#x662F;&#x6839;&#x56E0;"></a>&#x89C6;&#x89D2; 3&#xFF1A;TesterAgent &#x662F;&#x6839;&#x56E0;</h3>
<pre><code class="language-text">&#x5931;&#x8D25;&#x70B9;&#xFF1A;
Step 4 - TesterAgent

&#x7406;&#x7531;&#xFF1A;
TesterAgent &#x7684;&#x804C;&#x8D23;&#x662F;&#x9A8C;&#x8BC1;&#x662F;&#x5426;&#x771F;&#x7684;&#x4FEE;&#x590D;&#x7528;&#x6237;&#x95EE;&#x9898;&#x3002;&#x73B0;&#x6709;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#x4E0D;&#x4EE3;&#x8868; disabled &#x884C;&#x4E3A;&#x6B63;&#x786E;&#x3002;&#x5B83;&#x5E94;&#x8BE5;&#x53D1;&#x73B0;&#x6CA1;&#x6709;&#x65B0;&#x589E;&#x884C;&#x4E3A;&#x6D4B;&#x8BD5;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x9A8C;&#x8BC1;&#x65E0;&#x6548;&#x8868;&#x5355;&#x72B6;&#x6001;&#x3002;

&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#xFF1A;
&#x5B83;&#x5E94;&#x8BE5;&#x8981;&#x6C42;&#x589E;&#x52A0;&#x6D4B;&#x8BD5;&#xFF1A;form invalid &#x65F6; button.disabled === true&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x89C6;&#x89D2;&#x5173;&#x6CE8;&#x7684;&#x662F; <strong>&#x9A8C;&#x6536;&#x8D23;&#x4EFB;</strong>&#x3002;</p>
<p>&#x524D;&#x9762;&#x6B65;&#x9AA4;&#x6709;&#x9519;&#xFF0C;&#x4F46;&#x5728; Step 4 &#x4ECD;&#x53EF;&#x6062;&#x590D;&#x3002;TesterAgent &#x6CA1;&#x6709;&#x515C;&#x5E95;&#xFF0C;&#x5931;&#x8D25;&#x624D;&#x8FDB;&#x5165;&#x6700;&#x7EC8;&#x8F93;&#x51FA;&#x3002;</p>
<h2 id="&#x8BBA;&#x6587;&#x771F;&#x6B63;&#x60F3;&#x6539;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x8BBA;&#x6587;&#x771F;&#x6B63;&#x60F3;&#x6539;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x8BBA;&#x6587;&#x771F;&#x6B63;&#x60F3;&#x6539;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x5B83;&#x60F3;&#x628A; failure attribution &#x4ECE;&#x8FD9;&#x4E2A;&#x5F62;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#xFF1A;&#x5931;&#x8D25; trace
&#x8F93;&#x51FA;&#xFF1A;&#x552F;&#x4E00;&#x5931;&#x8D25;&#x6B65;&#x9AA4;
</code></pre>
<p>&#x6539;&#x6210;&#x8FD9;&#x4E2A;&#x5F62;&#x5F0F;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#xFF1A;&#x5931;&#x8D25; trace
&#x8F93;&#x51FA;&#xFF1A;
[
  {step: 2, reason: &quot;SearchAgent &#x6F0F;&#x627E;&#x5173;&#x952E;&#x6587;&#x4EF6;&quot;, ideal_action: &quot;...&quot;},
  {step: 3, reason: &quot;CoderAgent &#x6CA1;&#x6539;&#x6838;&#x5FC3;&#x903B;&#x8F91;&quot;, ideal_action: &quot;...&quot;},
  {step: 4, reason: &quot;TesterAgent &#x6CA1;&#x9A8C;&#x8BC1;&#x884C;&#x4E3A;&quot;, ideal_action: &quot;...&quot;}
]
</code></pre>
<p>&#x4E5F;&#x5C31;&#x662F;&#x4ECE; <strong>deterministic failure attribution</strong> &#x53D8;&#x6210; <strong>multi-perspective failure attribution</strong>&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x5F88;&#x91CD;&#x8981;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x5F88;&#x91CD;&#x8981;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x5F88;&#x91CD;&#x8981;&#xFF1F;</h2>
<p>&#x56E0;&#x4E3A;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#x8C03;&#x8BD5;&#x4E0D;&#x662F;&#x5224;&#x5377;&#x3002;</p>
<p>&#x5982;&#x679C;&#x4F60;&#x53EA;&#x5141;&#x8BB8;&#x4E00;&#x4E2A;&#x6807;&#x51C6;&#x7B54;&#x6848;&#xFF0C;&#x4F1A;&#x6709;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x3002;</p>
<h3 id="&#x95EE;&#x9898; 1&#xFF1A;&#x5408;&#x7406;&#x7B54;&#x6848;&#x4F1A;&#x88AB;&#x8BEF;&#x5224;"><a href="#&#x95EE;&#x9898; 1&#xFF1A;&#x5408;&#x7406;&#x7B54;&#x6848;&#x4F1A;&#x88AB;&#x8BEF;&#x5224;"></a>&#x95EE;&#x9898; 1&#xFF1A;&#x5408;&#x7406;&#x7B54;&#x6848;&#x4F1A;&#x88AB;&#x8BEF;&#x5224;</h3>
<p>&#x5047;&#x8BBE; benchmark &#x6807;&#x51C6;&#x7B54;&#x6848;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">Step 4 - TesterAgent
</code></pre>
<p>&#x6A21;&#x578B;&#x9884;&#x6D4B;&#xFF1A;</p>
<pre><code class="language-text">Step 2 - SearchAgent
</code></pre>
<p>&#x4F20;&#x7EDF;&#x8BC4;&#x6D4B;&#x4F1A;&#x76F4;&#x63A5;&#x5224;&#x9519;&#x3002;</p>
<p>&#x4F46;&#x5728;&#x771F;&#x5B9E;&#x5DE5;&#x7A0B;&#x91CC;&#xFF0C;SearchAgent &#x786E;&#x5B9E;&#x6709;&#x95EE;&#x9898;&#x3002;&#x8FD9;&#x4E2A;&#x9884;&#x6D4B;&#x4E0D;&#x662F;&#x80E1;&#x8BF4;&#xFF0C;&#x5B83;&#x53EA;&#x662F;&#x7AD9;&#x5728;&#x201C;&#x4FE1;&#x606F;&#x68C0;&#x7D22;&#x94FE;&#x8DEF;&#x201D;&#x7684;&#x89C6;&#x89D2;&#x5F52;&#x56E0;&#x3002;</p>
<h3 id="&#x95EE;&#x9898; 2&#xFF1A;&#x8C03;&#x8BD5;&#x5EFA;&#x8BAE;&#x53D8;&#x7A84;"><a href="#&#x95EE;&#x9898; 2&#xFF1A;&#x8C03;&#x8BD5;&#x5EFA;&#x8BAE;&#x53D8;&#x7A84;"></a>&#x95EE;&#x9898; 2&#xFF1A;&#x8C03;&#x8BD5;&#x5EFA;&#x8BAE;&#x53D8;&#x7A84;</h3>
<p>&#x5355;&#x6839;&#x56E0;&#x4F1A;&#x8BF1;&#x5BFC;&#x4F60;&#x53EA;&#x4FEE;&#x4E00;&#x4E2A;&#x70B9;&#xFF1A;</p>
<pre><code class="language-text">&#x53EA;&#x52A0;&#x5F3A; TesterAgent&#x3002;
</code></pre>
<p>&#x4F46;&#x771F;&#x5B9E;&#x6539;&#x8FDB;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x4E09;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<pre><code class="language-text">SearchAgent&#xFF1A;&#x6539;&#x68C0;&#x7D22;&#x7B56;&#x7565;&#xFF0C;&#x627E;&#x5B8C;&#x6574;&#x76F8;&#x5173;&#x6587;&#x4EF6;&#x3002;
CoderAgent&#xFF1A;&#x6539;&#x5B9E;&#x73B0;&#x68C0;&#x67E5;&#x6E05;&#x5355;&#xFF0C;&#x533A;&#x5206;&#x6837;&#x5F0F;&#x548C;&#x884C;&#x4E3A;&#x3002;
TesterAgent&#xFF1A;&#x589E;&#x52A0;&#x884C;&#x4E3A;&#x9A8C;&#x6536;&#x6D4B;&#x8BD5;&#x3002;
</code></pre>
<p>&#x591A;&#x89C6;&#x89D2;&#x5F52;&#x56E0;&#x66F4;&#x9002;&#x5408;&#x6307;&#x5BFC;&#x7CFB;&#x7EDF;&#x6539;&#x8FDB;&#x3002;</p>
<h2 id="&#x8BBA;&#x6587;&#x600E;&#x4E48;&#x8BC1;&#x660E;&#x8FD9;&#x4E2A;&#x89C2;&#x70B9;&#xFF1F;"><a href="#&#x8BBA;&#x6587;&#x600E;&#x4E48;&#x8BC1;&#x660E;&#x8FD9;&#x4E2A;&#x89C2;&#x70B9;&#xFF1F;"></a>&#x8BBA;&#x6587;&#x600E;&#x4E48;&#x8BC1;&#x660E;&#x8FD9;&#x4E2A;&#x89C2;&#x70B9;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x6784;&#x9020;&#x4E86; MP-Bench&#xFF0C;&#x8BA9;&#x591A;&#x4E2A;&#x4E13;&#x5BB6;&#x72EC;&#x7ACB;&#x6807;&#x6CE8;&#x540C;&#x4E00;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x3002;</p>
<p>&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;</p>
<pre><code class="language-text">&#x53EA;&#x6709; 16.2% &#x7684; failure-inducing steps &#x88AB; 3 &#x4E2A;&#x6807;&#x6CE8;&#x8005;&#x4E00;&#x81F4;&#x6807;&#x4E3A;&#x5931;&#x8D25;&#x3002;
27.8% &#x88AB; 2 &#x4E2A;&#x6807;&#x6CE8;&#x8005;&#x6807;&#x4E3A;&#x5931;&#x8D25;&#x3002;
56.1% &#x53EA;&#x88AB; 1 &#x4E2A;&#x6807;&#x6CE8;&#x8005;&#x6807;&#x4E3A;&#x5931;&#x8D25;&#x3002;
&#x6807;&#x6CE8;&#x8005;&#x4E4B;&#x95F4; disagreement &#x53EF;&#x63A5;&#x8FD1; 60%&#x3002;
</code></pre>
<p>&#x8FD9;&#x8BF4;&#x660E;&#xFF1A;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x786E;&#x5B9E;&#x9AD8;&#x5EA6;&#x4F9D;&#x8D56;&#x89C6;&#x89D2;&#x3002;</p>
<p>&#x8FD9;&#x4E2A; disagreement &#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x566A;&#x58F0;&#x3002;&#x5B83;&#x53EF;&#x80FD;&#x4EE3;&#x8868;&#x4E0D;&#x540C;&#x4E13;&#x5BB6;&#x5BF9;&#x201C;&#x6B63;&#x786E;&#x6267;&#x884C;&#x8DEF;&#x5F84;&#x201D;&#x7684;&#x4E0D;&#x540C;&#x5047;&#x8BBE;&#x3002;</p>
<h2 id="MP-Bench &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;"><a href="#MP-Bench &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;"></a>MP-Bench &#x662F;&#x600E;&#x4E48;&#x6784;&#x9020;&#x7684;&#xFF1F;</h2>
<p>MP-Bench &#x662F;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x4E3A;&#x4E86;&#x652F;&#x6301; multi-perspective failure attribution &#x6784;&#x9020;&#x7684;&#x6570;&#x636E;&#x96C6;&#x548C;&#x8BC4;&#x6D4B;&#x534F;&#x8BAE;&#x3002;</p>
<p>&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x4E0D;&#x662F;&#x201C;&#x66F4;&#x591A;&#x6570;&#x636E;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x201C;&#x66F4;&#x63A5;&#x8FD1;&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x7684;&#x6570;&#x636E;&#x201D;&#x3002;</p>
<p>&#x8BBA;&#x6587;&#x6784;&#x9020;&#x4E86;&#xFF1A;</p>
<pre><code class="language-text">289 &#x6761; execution logs
121 &#x4E2A;&#x4E0D;&#x540C; MAS configurations
3 &#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x8005;
&#x6BCF;&#x6761; trace &#x90FD;&#x6709;&#x591A;&#x89C6;&#x89D2;&#x6807;&#x6CE8;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x8981;&#x5206;&#x6E05;&#x4E24;&#x7C7B;&#x201C;&#x6765;&#x6E90;&#x201D;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x6765;&#x6E90; = &#x7528;&#x4EC0;&#x4E48;&#x9898;&#x76EE;&#x6765;&#x8003; Agent &#x7CFB;&#x7EDF;
Agent &#x7CFB;&#x7EDF;&#x6765;&#x6E90; = &#x7528;&#x4EC0;&#x4E48;&#x591A; Agent &#x6846;&#x67B6;&#x53BB;&#x89E3;&#x8FD9;&#x4E9B;&#x9898;
execution log = Agent &#x7CFB;&#x7EDF;&#x89E3;&#x9898;&#x65F6;&#x4EA7;&#x751F;&#x7684;&#x5B8C;&#x6574;&#x8FC7;&#x7A0B;&#x8BB0;&#x5F55;
</code></pre>
<p>&#x8BBA;&#x6587;&#x7684;&#x6570;&#x636E;&#x751F;&#x6210;&#x94FE;&#x8DEF;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">GAIA / AssistantBench &#x91CC;&#x7684;&#x4EFB;&#x52A1;
  &#x2193;
&#x4EA4;&#x7ED9; MAgenticOne / CaptainAgent &#x8FD9;&#x4E24;&#x7C7B;&#x591A; Agent &#x7CFB;&#x7EDF;&#x53BB;&#x6267;&#x884C;
  &#x2193;
&#x7CFB;&#x7EDF;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#x4EA7;&#x751F; step-by-step execution logs
  &#x2193;
&#x6311;&#x51FA;&#x5931;&#x8D25;&#x7684; logs
  &#x2193;
&#x8BA9; 3 &#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x54EA;&#x4E9B; step &#x8BF1;&#x53D1;&#x5931;&#x8D25;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x3001;&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#x662F;&#x4EC0;&#x4E48;
</code></pre>
<p>&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x540D;&#x79F0;</th>
<th>&#x7C7B;&#x578B;</th>
<th>&#x5728;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x91CC;&#x7684;&#x4F5C;&#x7528;</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GAIA</strong></td>
<td>Agent &#x80FD;&#x529B;&#x8BC4;&#x6D4B;&#x4EFB;&#x52A1;&#x96C6;</td>
<td>&#x63D0;&#x4F9B;&#x590D;&#x6742;&#x95EE;&#x9898;&#xFF0C;&#x8BA9; Agent &#x7CFB;&#x7EDF;&#x53BB;&#x89E3;</td>
</tr>
<tr>
<td><strong>AssistantBench</strong></td>
<td>Web/&#x4FE1;&#x606F;&#x68C0;&#x7D22;&#x578B;&#x52A9;&#x624B;&#x4EFB;&#x52A1;&#x96C6;</td>
<td>&#x63D0;&#x4F9B;&#x9700;&#x8981;&#x67E5;&#x8D44;&#x6599;&#x3001;&#x7EFC;&#x5408;&#x4FE1;&#x606F;&#x7684;&#x4EFB;&#x52A1;</td>
</tr>
<tr>
<td><strong>MAgenticOne</strong></td>
<td>&#x624B;&#x5DE5;&#x8BBE;&#x8BA1;&#x7684;&#x591A; Agent &#x7CFB;&#x7EDF;</td>
<td>&#x56FA;&#x5B9A;&#x89D2;&#x8272;&#x548C;&#x534F;&#x4F5C;&#x7ED3;&#x6784;&#xFF0C;&#x7528;&#x6765;&#x8DD1;&#x4EFB;&#x52A1;</td>
</tr>
<tr>
<td><strong>CaptainAgent</strong></td>
<td>&#x81EA;&#x52A8;&#x7EC4;&#x961F; / &#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684;&#x591A; Agent &#x7CFB;&#x7EDF;</td>
<td>&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x52A8;&#x6001;&#x751F;&#x6210; Agent &#x56E2;&#x961F;&#xFF0C;&#x7528;&#x6765;&#x8DD1;&#x4EFB;&#x52A1;</td>
</tr>
</tbody>
</table>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7C7B;&#x6BD4;&#x6210;&#x8F6F;&#x4EF6;&#x6D4B;&#x8BD5;&#xFF1A;</p>
<pre><code class="language-text">GAIA / AssistantBench = &#x6D4B;&#x8BD5;&#x7528;&#x4F8B;
MAgenticOne / CaptainAgent = &#x88AB;&#x6D4B;&#x7CFB;&#x7EDF;
execution log = &#x6D4B;&#x8BD5;&#x8FD0;&#x884C;&#x65E5;&#x5FD7;
MP-Bench = &#x4ECE;&#x5931;&#x8D25;&#x8FD0;&#x884C;&#x65E5;&#x5FD7;&#x91CC;&#x6574;&#x7406;&#x51FA;&#x7684;&#x8C03;&#x8BD5;&#x6570;&#x636E;&#x96C6;
</code></pre>
<p>&#x6240;&#x4EE5; <code>289 &#x6761; execution logs</code> &#x7684;&#x610F;&#x601D;&#x4E0D;&#x662F;&#x8BBA;&#x6587;&#x624B;&#x5199;&#x4E86; 289 &#x4E2A;&#x6848;&#x4F8B;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x7528; 121 &#x79CD;&#x4E0D;&#x540C; MAS &#x914D;&#x7F6E;&#x53BB;&#x8DD1; GAIA / AssistantBench &#x4EFB;&#x52A1;&#xFF0C;
&#x6700;&#x7EC8;&#x6536;&#x96C6;&#x5230; 289 &#x6761;&#x591A; Agent &#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x65E5;&#x5FD7;&#x3002;
</code></pre>
<p>&#x6BCF;&#x6761; log &#x5927;&#x81F4;&#x957F;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">Task:
&#x56DE;&#x7B54;&#x67D0;&#x4E2A;&#x9700;&#x8981;&#x641C;&#x7D22;&#x3001;&#x63A8;&#x7406;&#x6216;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x7684;&#x95EE;&#x9898;&#x3002;

Step 1 - PlannerAgent:
&#x62C6;&#x89E3;&#x4EFB;&#x52A1;&#x3002;

Step 2 - SearchAgent:
&#x641C;&#x7D22;&#x8D44;&#x6599;&#x3002;

Step 3 - WorkerAgent:
&#x57FA;&#x4E8E;&#x8D44;&#x6599;&#x751F;&#x6210;&#x7B54;&#x6848;&#x3002;

Step 4 - VerifierAgent:
&#x68C0;&#x67E5;&#x7B54;&#x6848;&#x3002;

Final:
&#x7B54;&#x6848;&#x9519;&#x8BEF; / &#x4EFB;&#x52A1;&#x5931;&#x8D25;&#x3002;
</code></pre>
<p>&#x7136;&#x540E;&#x4E13;&#x5BB6;&#x624D;&#x4F1A;&#x770B;&#x8FD9;&#x4E9B;&#x5931;&#x8D25;&#x65E5;&#x5FD7;&#xFF0C;&#x6807;&#x6CE8;&#xFF1A;</p>
<pre><code class="language-text">&#x54EA;&#x4E2A; step &#x53EF;&#x80FD;&#x8BF1;&#x53D1;&#x5931;&#x8D25;&#xFF1F;
&#x4E3A;&#x4EC0;&#x4E48;&#xFF1F;
&#x8FD9;&#x4E2A; step &#x7406;&#x60F3;&#x60C5;&#x51B5;&#x4E0B;&#x5E94;&#x8BE5;&#x600E;&#x4E48;&#x505A;&#xFF1F;
</code></pre>
<p>&#x6570;&#x636E;&#x89C4;&#x6A21;&#x4E0D;&#x7B97;&#x5927;&#xFF0C;&#x4F46;&#x5B83;&#x7684;&#x6807;&#x6CE8;&#x65B9;&#x5F0F;&#x66F4;&#x8D34;&#x8FD1;&#x771F;&#x5B9E;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x3002;</p>
<p>&#x5BF9;&#x6BD4;&#x4E00;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-text">MP-Bench: 289 &#x6761;&#xFF0C;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#xFF0C;&#x591A;&#x89C6;&#x89D2;
TracerTraj: 2500 &#x6761;&#xFF0C;&#x81EA;&#x52A8;&#x6807;&#x6CE8;&#xFF0C;&#x5355;&#x89C6;&#x89D2;
Aegis: 9500 &#x6761;&#xFF0C;&#x81EA;&#x52A8;&#x6807;&#x6CE8;&#xFF0C;&#x5355;&#x89C6;&#x89D2;
Who&amp;When: 184 &#x6761;&#xFF0C;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#xFF0C;&#x5355;&#x89C6;&#x89D2;
</code></pre>
<p>MP-Bench &#x7684;&#x5B9A;&#x4F4D;&#x662F;&#xFF1A;&#x89C4;&#x6A21;&#x5C0F;&#x4E00;&#x4E9B;&#xFF0C;&#x4F46;&#x66F4;&#x9002;&#x5408;&#x7814;&#x7A76;&#x771F;&#x5B9E; MAS &#x8C03;&#x8BD5;&#x91CC;&#x7684;&#x5F52;&#x56E0;&#x6B67;&#x4E49;&#x3002;</p>
<h2 id="MP-Bench &#x6807;&#x6CE8;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#MP-Bench &#x6807;&#x6CE8;&#x4EC0;&#x4E48;&#xFF1F;"></a>MP-Bench &#x6807;&#x6CE8;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x6BCF;&#x4E2A;&#x4E13;&#x5BB6;&#x770B;&#x5B8C;&#x6574; execution log&#xFF0C;&#x5BF9;&#x6BCF;&#x4E00;&#x6B65;&#x6807;&#x4E09;&#x7C7B;&#x4FE1;&#x606F;&#xFF1A;</p>
<pre><code class="language-text">1. Failure-inducing Step
   &#x8FD9;&#x4E00;&#x6B65;&#x662F;&#x5426;&#x8BF1;&#x53D1;&#x5931;&#x8D25;&#xFF1F;

2. Failure Reason
   &#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x4E00;&#x6B65;&#x6709;&#x95EE;&#x9898;&#xFF1F;

3. Ideal Action
   &#x8FD9;&#x4E00;&#x6B65;&#x672C;&#x6765;&#x5E94;&#x8BE5;&#x600E;&#x4E48;&#x505A;&#xFF1F;
</code></pre>
<p>&#x653E;&#x56DE; Coding Agent &#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code class="language-text">Step 2 - SearchAgent
Failure-inducing: yes
Failure Reason:
  It returned only LoginPage.vue and missed useLoginValidation.ts,
  which contains the form validity logic.
Ideal Action:
  Search validation hooks and disabled submit logic before handing context to CoderAgent.
</code></pre>
<p>&#x518D;&#x770B; Step 4&#xFF1A;</p>
<pre><code class="language-text">Step 4 - TesterAgent
Failure-inducing: yes
Failure Reason:
  It treated existing tests as sufficient, but no test checked disabled behavior.
Ideal Action:
  Add or request a test for invalid form state and button.disabled.
</code></pre>
<p><code>Ideal Action</code> &#x5F88;&#x5173;&#x952E;&#x3002;&#x5B83;&#x8BA9; benchmark &#x4E0D;&#x53EA;&#x662F;&#x201C;&#x5B9A;&#x4F4D;&#x9519;&#x8BEF;&#x201D;&#xFF0C;&#x8FD8;&#x63D0;&#x4F9B;&#x201C;&#x5E94;&#x8BE5;&#x600E;&#x4E48;&#x4FEE;&#x201D;&#x3002;</p>
<h2 id="&#x591A;&#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x600E;&#x4E48;&#x5408;&#x5E76;&#xFF1F;"><a href="#&#x591A;&#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x600E;&#x4E48;&#x5408;&#x5E76;&#xFF1F;"></a>&#x591A;&#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x600E;&#x4E48;&#x5408;&#x5E76;&#xFF1F;</h2>
<p>MP-Bench &#x4E0D;&#x628A;&#x4E13;&#x5BB6;&#x5206;&#x6B67;&#x5F53;&#x566A;&#x58F0;&#x4E22;&#x6389;&#xFF0C;&#x800C;&#x662F;&#x8BA1;&#x7B97;&#x5171;&#x8BC6;&#x7387;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x4E09;&#x4E2A;&#x4E13;&#x5BB6;&#x6807;&#x6CE8;&#x7ED3;&#x679C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x4E13;&#x5BB6; A&#xFF1A;Step 2, Step 4
&#x4E13;&#x5BB6; B&#xFF1A;Step 3, Step 4
&#x4E13;&#x5BB6; C&#xFF1A;Step 4
</code></pre>
<p>&#x5408;&#x5E76;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">Step 4: 3/3 = 100% consensus
Step 2: 1/3 = 33% consensus
Step 3: 1/3 = 33% consensus
</code></pre>
<p>&#x6700;&#x7EC8;&#x6392;&#x5E8F;&#xFF1A;</p>
<pre><code class="language-text">Rank 1: Step 4
Rank 2: Step 2
Rank 3: Step 3
</code></pre>
<p>&#x8FD9;&#x5BF9;&#x5DE5;&#x7A0B;&#x8C03;&#x8BD5;&#x5F88;&#x81EA;&#x7136;&#xFF1A;</p>
<pre><code class="language-text">100% &#x5171;&#x8BC6;&#xFF1A;&#x4F18;&#x5148;&#x4FEE;&#x3002;
66% &#x5171;&#x8BC6;&#xFF1A;&#x9AD8;&#x6982;&#x7387;&#x95EE;&#x9898;&#xFF0C;&#x7EE7;&#x7EED;&#x68C0;&#x67E5;&#x3002;
33% &#x5171;&#x8BC6;&#xFF1A;&#x67D0;&#x4E2A;&#x89C6;&#x89D2;&#x4E0B;&#x6210;&#x7ACB;&#xFF0C;&#x4F5C;&#x4E3A;&#x8865;&#x5145;&#x7EBF;&#x7D22;&#x3002;
</code></pre>
<h2 id="MP-Bench &#x600E;&#x4E48;&#x8BC4;&#x6D4B;&#x6A21;&#x578B;&#xFF1F;"><a href="#MP-Bench &#x600E;&#x4E48;&#x8BC4;&#x6D4B;&#x6A21;&#x578B;&#xFF1F;"></a>MP-Bench &#x600E;&#x4E48;&#x8BC4;&#x6D4B;&#x6A21;&#x578B;&#xFF1F;</h2>
<p>&#x5B83;&#x4E0D;&#x7528;&#x666E;&#x901A; accuracy&#xFF0C;&#x800C;&#x7528; ranking evaluation&#x3002;</p>
<p>&#x6D41;&#x7A0B;&#xFF1A;</p>
<pre><code class="language-text">1. &#x7ED9; LLM &#x4E00;&#x6761;&#x5931;&#x8D25; trace&#x3002;
2. &#x8BA9; LLM &#x8F93;&#x51FA;&#x591A;&#x4E2A; failure-inducing steps&#x3001;reason&#x3001;ideal action&#x3002;
3. &#x591A;&#x6B21;&#x91C7;&#x6837;&#xFF0C;&#x5F97;&#x5230;&#x591A;&#x7EC4;&#x5F52;&#x56E0;&#x3002;
4. &#x5408;&#x5E76;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF0C;&#x6309;&#x51FA;&#x73B0;&#x9891;&#x7387;&#x751F;&#x6210; predicted ranking&#x3002;
5. &#x548C;&#x4E13;&#x5BB6; ranking &#x6BD4;&#x8F83;&#x3002;
</code></pre>
<p>&#x6838;&#x5FC3;&#x6307;&#x6807;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">nDCG@K
</code></pre>
<p>&#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B;&#x6709;&#x6CA1;&#x6709;&#x628A;&#x4E13;&#x5BB6;&#x9AD8;&#x5EA6;&#x5171;&#x8BC6;&#x7684;&#x5931;&#x8D25;&#x6B65;&#x9AA4;&#x6392;&#x5728;&#x524D;&#x9762;&#xFF1F;
</code></pre>
<p>&#x6BD4;&#x5982;&#x4E13;&#x5BB6;&#x6392;&#x5E8F;&#xFF1A;</p>
<pre><code class="language-text">Rank 1: Step 4
Rank 2: Step 2
Rank 3: Step 3
</code></pre>
<p>&#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code class="language-text">Rank 1: Step 4
Rank 2: Step 3
Rank 3: Step 2
</code></pre>
<p>&#x8FD9;&#x4E0D;&#x7B97;&#x5B8C;&#x5168;&#x9519;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x627E;&#x5230;&#x4E86;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x70B9;&#xFF1B;&#x4F46; Step 2 / Step 3 &#x987A;&#x5E8F;&#x548C;&#x4E13;&#x5BB6;&#x5171;&#x8BC6;&#x4E0D;&#x4E00;&#x81F4;&#xFF0C;&#x6240;&#x4EE5;&#x5206;&#x6570;&#x4F1A;&#x53D7;&#x5F71;&#x54CD;&#x3002;</p>
<p>&#x8FD9;&#x6BD4; accuracy &#x66F4;&#x9002;&#x5408;&#x591A;&#x89C6;&#x89D2;&#x5F52;&#x56E0;&#x3002;</p>
<h2 id="Reasoning &#x600E;&#x4E48;&#x8BC4;&#x4F30;&#xFF1F;"><a href="#Reasoning &#x600E;&#x4E48;&#x8BC4;&#x4F30;&#xFF1F;"></a>Reasoning &#x600E;&#x4E48;&#x8BC4;&#x4F30;&#xFF1F;</h2>
<p>MP-Bench &#x8FD8;&#x8BC4;&#x4F30;&#x6A21;&#x578B;&#x7ED9;&#x51FA;&#x7684;&#x7406;&#x7531;&#x548C;&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#x3002;</p>
<p>&#x5B83;&#x7528; LLM-as-a-Judge &#x6BD4;&#x8F83;&#xFF1A;</p>
<pre><code class="language-text">&#x6A21;&#x578B; failure reason &#x662F;&#x5426;&#x548C;&#x4E13;&#x5BB6; reason &#x4E00;&#x81F4;&#xFF1F;
&#x6A21;&#x578B; ideal action &#x662F;&#x5426;&#x5408;&#x7406;&#xFF1F;
&#x7406;&#x7531;&#x662F;&#x5426;&#x57FA;&#x4E8E; execution context&#xFF1F;
&#x89E3;&#x91CA;&#x662F;&#x5426;&#x5145;&#x5206;&#xFF1F;
</code></pre>
<p>&#x8BC4;&#x5206;&#x7EF4;&#x5EA6;&#x5305;&#x62EC;&#xFF1A;</p>
<pre><code class="language-text">consistency with human judgments
grounding in execution context
explanatory adequacy
reasonableness of proposed actions
</code></pre>
<p>&#x8FD9;&#x70B9;&#x5BF9;&#x5DE5;&#x7A0B;&#x5F88;&#x91CD;&#x8981;&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#x4E00;&#x4E2A;&#x5F52;&#x56E0;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x7406;&#x7531;&#xFF0C;&#x5B9E;&#x9645;&#x6CA1;&#x6CD5;&#x7528;&#xFF1A;</p>
<pre><code class="language-text">&#x5DEE;&#xFF1A;
Step 4 &#x9519;&#x4E86;&#x3002;

&#x597D;&#xFF1A;
Step 4 &#x9519;&#x4E86;&#xFF0C;&#x56E0;&#x4E3A; TesterAgent &#x53EA;&#x770B;&#x4E86;&#x73B0;&#x6709;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF0C;
&#x4F46;&#x6CA1;&#x6709;&#x9A8C;&#x8BC1;&#x7528;&#x6237;&#x8981;&#x6C42;&#x7684; disabled &#x884C;&#x4E3A;&#x3002;
&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#x662F;&#x8865;&#x5145; invalid form state &#x7684;&#x884C;&#x4E3A;&#x6D4B;&#x8BD5;&#x3002;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x8BBA;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x8BBA;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x8BBA;</h2>
<p>&#x8BBA;&#x6587;&#x6BD4;&#x8F83;&#x4E86;&#x591A;&#x4E2A;&#x6A21;&#x578B;&#xFF1A;</p>
<pre><code class="language-text">GPT-4.1
GPT-5.1
o3-mini
GPT-oss-120B
Claude-Sonnet-4.5
Qwen3-8B
</code></pre>
<p>&#x4E3B;&#x8981;&#x53D1;&#x73B0;&#x6709;&#x4E09;&#x4E2A;&#x3002;</p>
<h3 id="1. LLM &#x5728;&#x591A;&#x89C6;&#x89D2;&#x8BC4;&#x6D4B;&#x4E0B;&#x5E76;&#x4E0D;&#x5DEE;"><a href="#1. LLM &#x5728;&#x591A;&#x89C6;&#x89D2;&#x8BC4;&#x6D4B;&#x4E0B;&#x5E76;&#x4E0D;&#x5DEE;"></a>1. LLM &#x5728;&#x591A;&#x89C6;&#x89D2;&#x8BC4;&#x6D4B;&#x4E0B;&#x5E76;&#x4E0D;&#x5DEE;</h3>
<p>&#x8FC7;&#x53BB; Who&amp;When &#x8FD9;&#x7C7B;&#x5355;&#x6839;&#x56E0; benchmark &#x5F97;&#x51FA;&#x7684;&#x7ED3;&#x8BBA;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">LLM &#x505A; step-level failure attribution &#x63A5;&#x8FD1;&#x968F;&#x673A;&#x3002;
</code></pre>
<p>MP-Bench &#x7684;&#x7ED3;&#x8BBA;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C;&#x5141;&#x8BB8;&#x591A;&#x89C6;&#x89D2;&#x3001;&#x591A;&#x6B21;&#x91C7;&#x6837;&#x3001;ranking evaluation&#xFF0C;
LLM &#x80FD;&#x627E;&#x51FA;&#x4E0D;&#x5C11;&#x548C;&#x4E13;&#x5BB6;&#x4E00;&#x81F4;&#x7684;&#x5F52;&#x56E0;&#x3002;
</code></pre>
<p>&#x8FD9;&#x8BF4;&#x660E;&#x8FC7;&#x53BB;&#x7684;&#x4F4E;&#x5206;&#x53EF;&#x80FD;&#x90E8;&#x5206;&#x6765;&#x81EA;&#x8BC4;&#x6D4B;&#x8BBE;&#x5B9A;&#x4E0D;&#x5408;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6A21;&#x578B;&#x5B8C;&#x5168;&#x4E0D;&#x4F1A;&#x5F52;&#x56E0;&#x3002;</p>
<h3 id="2. &#x9AD8;&#x6E29;&#x91C7;&#x6837;&#x6709;&#x5E2E;&#x52A9;"><a href="#2. &#x9AD8;&#x6E29;&#x91C7;&#x6837;&#x6709;&#x5E2E;&#x52A9;"></a>2. &#x9AD8;&#x6E29;&#x91C7;&#x6837;&#x6709;&#x5E2E;&#x52A9;</h3>
<p>&#x8BBA;&#x6587;&#x53D1;&#x73B0; temperature = 0 &#x7684;&#x786E;&#x5B9A;&#x6027;&#x8F93;&#x51FA;&#x901A;&#x5E38;&#x66F4;&#x5DEE;&#x3002;</p>
<p>&#x539F;&#x56E0;&#x76F4;&#x63A5;&#xFF1A;</p>
<pre><code class="language-text">&#x591A;&#x89C6;&#x89D2;&#x4EFB;&#x52A1;&#x9700;&#x8981;&#x591A;&#x79CD;&#x89E3;&#x91CA;&#x3002;
&#x5B8C;&#x5168;&#x786E;&#x5B9A;&#x6027; decoding &#x4F1A;&#x538B;&#x7F29;&#x8F93;&#x51FA;&#x591A;&#x6837;&#x6027;&#x3002;
</code></pre>
<p>&#x5B9E;&#x8DF5;&#x5EFA;&#x8BAE;&#xFF1A;</p>
<pre><code class="language-text">&#x4E0D;&#x8981;&#x53EA;&#x8DD1;&#x4E00;&#x6B21; deterministic attribution&#x3002;
&#x7528; moderate temperature &#x591A;&#x91C7;&#x6837;&#x51E0;&#x6B21;&#xFF0C;&#x518D;&#x805A;&#x5408;&#x3002;
</code></pre>
<h3 id="3. &#x591A;&#x6A21;&#x578B;&#x7EC4;&#x5408;&#x66F4;&#x597D;"><a href="#3. &#x591A;&#x6A21;&#x578B;&#x7EC4;&#x5408;&#x66F4;&#x597D;"></a>3. &#x591A;&#x6A21;&#x578B;&#x7EC4;&#x5408;&#x66F4;&#x597D;</h3>
<p>&#x8BBA;&#x6587;&#x53D1;&#x73B0;&#xFF0C;&#x7EC4;&#x5408;&#x4E0D;&#x540C;&#x6A21;&#x578B;&#x5BB6;&#x65CF;&#x901A;&#x5E38;&#x6BD4;&#x5355;&#x4E00;&#x6A21;&#x578B;&#x591A;&#x91C7;&#x6837;&#x66F4;&#x5F3A;&#x3002;</p>
<p>&#x539F;&#x56E0;&#xFF1A;</p>
<pre><code class="language-text">&#x540C;&#x4E00;&#x4E2A;&#x6A21;&#x578B;&#x591A;&#x91C7;&#x6837;&#xFF1A;&#x4E3B;&#x8981;&#x63D0;&#x4F9B;&#x968F;&#x673A;&#x53D8;&#x5316;&#x3002;
&#x4E0D;&#x540C;&#x6A21;&#x578B;&#x7EC4;&#x5408;&#xFF1A;&#x63D0;&#x4F9B;&#x4E0D;&#x540C; reasoning bias&#x3002;
</code></pre>
<p>&#x5B9E;&#x8DF5;&#x5EFA;&#x8BAE;&#xFF1A;</p>
<pre><code class="language-text">&#x7528; Claude / GPT / &#x5F00;&#x6E90;&#x6A21;&#x578B;&#x5206;&#x522B;&#x7ED9;&#x5F52;&#x56E0;&#x3002;
&#x5408;&#x5E76;&#x76F8;&#x540C;&#x5931;&#x8D25;&#x70B9;&#x3002;
&#x6309;&#x5171;&#x8BC6;&#x548C;&#x8BC1;&#x636E;&#x6392;&#x5E8F;&#x3002;
</code></pre>
<h2 id="&#x548C; TraceElephant &#x7684;&#x533A;&#x522B;"><a href="#&#x548C; TraceElephant &#x7684;&#x533A;&#x522B;"></a>&#x548C; TraceElephant &#x7684;&#x533A;&#x522B;</h2>
<p>TraceElephant &#x5F3A;&#x8C03;&#xFF1A;</p>
<pre><code class="language-text">&#x8981;&#x770B;&#x5B8C;&#x6574; trace&#x3002;
&#x8981;&#x8BB0;&#x5F55; input_context&#x3002;
&#x6700;&#x597D;&#x80FD; replay&#x3002;
</code></pre>
<p>Rethinking &#x5F3A;&#x8C03;&#xFF1A;</p>
<pre><code class="language-text">&#x5373;&#x4F7F; trace &#x5B8C;&#x6574;&#xFF0C;&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E5F;&#x53EF;&#x80FD;&#x4E0D;&#x662F;&#x552F;&#x4E00;&#x7B54;&#x6848;&#x3002;
</code></pre>
<p>&#x4E24;&#x8005;&#x5173;&#x7CFB;&#xFF1A;</p>
<pre><code class="language-text">TraceElephant &#x89E3;&#x51B3;&#x201C;&#x770B;&#x4E0D;&#x5168;&#xFF0C;&#x6240;&#x4EE5;&#x5F52;&#x56E0;&#x96BE;&#x201D;&#x3002;
Rethinking &#x89E3;&#x51B3;&#x201C;&#x5373;&#x4F7F;&#x770B;&#x5168;&#x4E86;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x6709;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x201D;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E24;&#x4E2A;&#x89C2;&#x70B9;&#x4E0D;&#x51B2;&#x7A81;&#xFF0C;&#x5E94;&#x8BE5;&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x3002;</p>
<h2 id="&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;"><a href="#&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;"></a>&#x5DE5;&#x7A0B;&#x4E0A;&#x600E;&#x4E48;&#x7528;&#xFF1F;</h2>
<p>&#x5982;&#x679C;&#x4F60;&#x5728;&#x505A; Agent &#x7CFB;&#x7EDF;&#x8C03;&#x8BD5;&#xFF0C;&#x4E0D;&#x8981;&#x8BA9;&#x5F52;&#x56E0;&#x5668;&#x53EA;&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x8D23;&#x4EFB;&#x70B9;&#x3002;</p>
<p>&#x66F4;&#x5408;&#x7406;&#x7684;&#x8F93;&#x51FA;&#x683C;&#x5F0F;&#x662F;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;failure_attributions&quot;</span>: [
    {
      <span class="hljs-attr">&quot;rank&quot;</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">4</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;TesterAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;TesterAgent treated existing tests as sufficient, but did not verify disabled behavior.&quot;</span>,
      <span class="hljs-attr">&quot;ideal_action&quot;</span>: <span class="hljs-string">&quot;Add or run a behavior test for invalid form state.&quot;</span>,
      <span class="hljs-attr">&quot;fix_area&quot;</span>: <span class="hljs-string">&quot;validation / testing&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;rank&quot;</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;SearchAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;SearchAgent returned only UI component and missed validation hook.&quot;</span>,
      <span class="hljs-attr">&quot;ideal_action&quot;</span>: <span class="hljs-string">&quot;Search for validation state and submit disabled logic.&quot;</span>,
      <span class="hljs-attr">&quot;fix_area&quot;</span>: <span class="hljs-string">&quot;retrieval&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;rank&quot;</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">&quot;step&quot;</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">&quot;agent&quot;</span>: <span class="hljs-string">&quot;CoderAgent&quot;</span>,
      <span class="hljs-attr">&quot;reason&quot;</span>: <span class="hljs-string">&quot;CoderAgent changed visual style instead of disabled logic.&quot;</span>,
      <span class="hljs-attr">&quot;ideal_action&quot;</span>: <span class="hljs-string">&quot;Trace form validity state and bind it to button disabled prop.&quot;</span>,
      <span class="hljs-attr">&quot;fix_area&quot;</span>: <span class="hljs-string">&quot;implementation&quot;</span>
    }
  ]
}
</code></pre>
<p>&#x6CE8;&#x610F;&#x8FD9;&#x91CC;&#x7684;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#x627E;&#x201C;&#x552F;&#x4E00;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x8F93;&#x51FA;&#x4E00;&#x7EC4;&#x53EF;&#x884C;&#x52A8;&#x7684;&#x4FEE;&#x590D;&#x65B9;&#x5411;&#x3002;</p>
<h2 id="&#x5B9E;&#x8DF5;&#x5EFA;&#x8BAE;"><a href="#&#x5B9E;&#x8DF5;&#x5EFA;&#x8BAE;"></a>&#x5B9E;&#x8DF5;&#x5EFA;&#x8BAE;</h2>
<h3 id="1. &#x4E0D;&#x8981;&#x505A;&#x5355;&#x9009;&#x5F52;&#x56E0;"><a href="#1. &#x4E0D;&#x8981;&#x505A;&#x5355;&#x9009;&#x5F52;&#x56E0;"></a>1. &#x4E0D;&#x8981;&#x505A;&#x5355;&#x9009;&#x5F52;&#x56E0;</h3>
<p>&#x4E0D;&#x8981;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">&#x8D23;&#x4EFB; Agent&#xFF1A;TesterAgent
</code></pre>
<p>&#x8981;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">&#x9AD8;&#x4F18;&#x5148;&#x7EA7;&#xFF1A;TesterAgent &#x6F0F;&#x9A8C;&#x6536;
&#x4E2D;&#x4F18;&#x5148;&#x7EA7;&#xFF1A;SearchAgent &#x6F0F;&#x6587;&#x4EF6;
&#x4E2D;&#x4F18;&#x5148;&#x7EA7;&#xFF1A;CoderAgent &#x6CA1;&#x8FFD;&#x8E2A;&#x903B;&#x8F91;
</code></pre>
<h3 id="2. &#x5F52;&#x56E0;&#x8981;&#x5E26; ideal action"><a href="#2. &#x5F52;&#x56E0;&#x8981;&#x5E26; ideal action"></a>2. &#x5F52;&#x56E0;&#x8981;&#x5E26; ideal action</h3>
<p>&#x5931;&#x8D25;&#x5F52;&#x56E0;&#x6CA1;&#x6709;&#x4FEE;&#x590D;&#x5EFA;&#x8BAE;&#xFF0C;&#x5DE5;&#x7A0B;&#x4EF7;&#x503C;&#x5F88;&#x4F4E;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x5F52;&#x56E0;&#x90FD;&#x5E94;&#x8BE5;&#x5305;&#x542B;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x70B9;
&#x5931;&#x8D25;&#x7406;&#x7531;
&#x7406;&#x60F3;&#x52A8;&#x4F5C;
&#x5EFA;&#x8BAE;&#x4FEE;&#x590D;&#x6A21;&#x5757;
</code></pre>
<h3 id="3. &#x591A;&#x6A21;&#x578B;/&#x591A;&#x91C7;&#x6837;&#x6709;&#x4EF7;&#x503C;"><a href="#3. &#x591A;&#x6A21;&#x578B;/&#x591A;&#x91C7;&#x6837;&#x6709;&#x4EF7;&#x503C;"></a>3. &#x591A;&#x6A21;&#x578B;/&#x591A;&#x91C7;&#x6837;&#x6709;&#x4EF7;&#x503C;</h3>
<p>&#x8BBA;&#x6587;&#x53D1;&#x73B0;&#xFF0C;&#x4E0D;&#x540C;&#x6A21;&#x578B;&#x6216;&#x540C;&#x4E00;&#x6A21;&#x578B;&#x591A;&#x6B21;&#x91C7;&#x6837;&#x4F1A;&#x4EA7;&#x751F;&#x4E0D;&#x540C;&#x5F52;&#x56E0;&#x89C6;&#x89D2;&#x3002;&#x8FD9;&#x4E2A;&#x73B0;&#x8C61;&#x5728;&#x5355;&#x6839;&#x56E0; benchmark &#x91CC;&#x4F1A;&#x88AB;&#x770B;&#x4F5C;&#x201C;&#x4E0D;&#x7A33;&#x5B9A;&#x201D;&#xFF0C;&#x4F46;&#x5728;&#x591A;&#x89C6;&#x89D2;&#x8303;&#x5F0F;&#x91CC;&#x662F;&#x6709;&#x7528;&#x4FE1;&#x53F7;&#x3002;</p>
<p>&#x5B9E;&#x8DF5;&#x4E0A;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x505A;&#xFF1A;</p>
<pre><code class="language-text">Claude &#x751F;&#x6210;&#x4E00;&#x7EC4;&#x5F52;&#x56E0;
GPT &#x751F;&#x6210;&#x4E00;&#x7EC4;&#x5F52;&#x56E0;
&#x672C;&#x5730;&#x6A21;&#x578B;&#x751F;&#x6210;&#x4E00;&#x7EC4;&#x5F52;&#x56E0;
&#x5408;&#x5E76;&#x540C;&#x7C7B;&#x9879;
&#x6309;&#x51FA;&#x73B0;&#x9891;&#x7387;&#x548C;&#x8BC1;&#x636E;&#x5F3A;&#x5EA6;&#x6392;&#x5E8F;
</code></pre>
<h3 id="4. &#x6392;&#x5E8F;&#x6BD4;&#x5206;&#x7C7B;&#x66F4;&#x5B9E;&#x7528;"><a href="#4. &#x6392;&#x5E8F;&#x6BD4;&#x5206;&#x7C7B;&#x66F4;&#x5B9E;&#x7528;"></a>4. &#x6392;&#x5E8F;&#x6BD4;&#x5206;&#x7C7B;&#x66F4;&#x5B9E;&#x7528;</h3>
<p>&#x771F;&#x5B9E;&#x8C03;&#x8BD5;&#x9700;&#x8981;&#x7684;&#x662F;&#x4F18;&#x5148;&#x7EA7;&#xFF1A;</p>
<pre><code class="language-text">&#x5148;&#x4FEE;&#x54EA;&#x4E2A;&#xFF1F;
&#x54EA;&#x4E2A;&#x6700;&#x6709;&#x5171;&#x8BC6;&#xFF1F;
&#x54EA;&#x4E2A;&#x4FEE;&#x590D;&#x6210;&#x672C;&#x6700;&#x4F4E;&#xFF1F;
&#x54EA;&#x4E2A;&#x98CE;&#x9669;&#x6700;&#x5927;&#xFF1F;
</code></pre>
<p>&#x6240;&#x4EE5;&#x8BC4;&#x4F30;&#x4E5F;&#x5E94;&#x8BE5;&#x66F4;&#x50CF; ranking&#xFF0C;&#x800C;&#x4E0D;&#x662F; single-label classification&#x3002;</p>
<h3 id="5. &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x501F;&#x9274; MP-Bench &#x7684;&#x62A5;&#x544A;&#x683C;&#x5F0F;"><a href="#5. &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x501F;&#x9274; MP-Bench &#x7684;&#x62A5;&#x544A;&#x683C;&#x5F0F;"></a>5. &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x501F;&#x9274; MP-Bench &#x7684;&#x62A5;&#x544A;&#x683C;&#x5F0F;</h3>
<p>&#x5982;&#x679C;&#x8981;&#x843D;&#x5730;&#x5230;&#x81EA;&#x5DF1;&#x7684; Agent &#x7CFB;&#x7EDF;&#xFF0C;&#x5EFA;&#x8BAE;&#x8F93;&#x51FA;&#x8C03;&#x8BD5;&#x62A5;&#x544A;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8F93;&#x51FA;&#x5355;&#x4E2A;&#x6807;&#x7B7E;&#xFF1A;</p>
<pre><code class="language-text">&#x9AD8;&#x4F18;&#x5148;&#x7EA7;&#x95EE;&#x9898;&#xFF1A;
Step 4 TesterAgent &#x6F0F;&#x9A8C;&#x6536;&#x3002;
&#x8BC1;&#x636E;&#xFF1A;diff &#x672A;&#x6539; disabled &#x903B;&#x8F91;&#xFF0C;&#x6D4B;&#x8BD5;&#x672A;&#x8986;&#x76D6; invalid form&#x3002;
&#x5EFA;&#x8BAE;&#xFF1A;&#x589E;&#x5F3A; verifier prompt&#xFF0C;&#x8981;&#x6C42;&#x751F;&#x6210;&#x884C;&#x4E3A;&#x6D4B;&#x8BD5;&#x3002;

&#x6B21;&#x4F18;&#x5148;&#x7EA7;&#x95EE;&#x9898;&#xFF1A;
Step 2 SearchAgent &#x6F0F;&#x6587;&#x4EF6;&#x3002;
&#x8BC1;&#x636E;&#xFF1A;trace &#x4E2D;&#x6CA1;&#x6709; useLoginValidation.ts&#x3002;
&#x5EFA;&#x8BAE;&#xFF1A;&#x6539;&#x68C0;&#x7D22;&#x7B56;&#x7565;&#xFF0C;&#x8981;&#x6C42;&#x8FFD;&#x8E2A; hook / import / state&#x3002;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; MP-Bench &#x601D;&#x8DEF;&#x7684;&#x5DE5;&#x7A0B;&#x5316;&#x7248;&#x672C;&#x3002;</p>
<h2 id="&#x5C40;&#x9650;&#x6027;"><a href="#&#x5C40;&#x9650;&#x6027;"></a>&#x5C40;&#x9650;&#x6027;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x4E5F;&#x6709;&#x8FB9;&#x754C;&#xFF1A;</p>
<ul>
<li>MP-Bench &#x53EA;&#x6709; 289 &#x6761; execution logs&#xFF0C;&#x89C4;&#x6A21;&#x4E0D;&#x5927;&#x3002;</li>
<li>&#x6570;&#x636E;&#x4E3B;&#x8981;&#x6765;&#x81EA; GAIA / AssistantBench&#xFF0C;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x7C7B;&#x4EFB;&#x52A1;&#x8986;&#x76D6;&#x4E0D;&#x591F;&#x3002;</li>
<li>&#x591A;&#x89C6;&#x89D2;&#x5F52;&#x56E0;&#x63D0;&#x5347;&#x4E86;&#x771F;&#x5B9E;&#x6027;&#xFF0C;&#x4F46;&#x4E5F;&#x589E;&#x52A0;&#x4E86;&#x8BC4;&#x4F30;&#x590D;&#x6742;&#x5EA6;&#x3002;</li>
<li>LLM-as-a-Judge &#x53C2;&#x4E0E; reasoning &#x8BC4;&#x4F30;&#xFF0C;&#x4ECD;&#x7136;&#x6709; judge bias &#x98CE;&#x9669;&#x3002;</li>
<li>&#x8BBA;&#x6587;&#x66F4;&#x50CF; benchmark / evaluation &#x7814;&#x7A76;&#xFF0C;&#x4E0D;&#x662F;&#x53EF;&#x76F4;&#x63A5;&#x90E8;&#x7F72;&#x7684;&#x5F52;&#x56E0;&#x5DE5;&#x5177;&#x3002;</li>
</ul>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Rethinking &#x7684;&#x6838;&#x5FC3;&#x4EF7;&#x503C;&#x662F;&#x7EA0;&#x6B63;&#x4E86; failure attribution &#x7684;&#x4EFB;&#x52A1;&#x5B9A;&#x4E49;&#x3002;</p>
<p>&#x5B83;&#x544A;&#x8BC9;&#x6211;&#x4EEC;&#xFF1A;</p>
<pre><code class="language-text">&#x591A; Agent &#x5931;&#x8D25;&#x4E0D;&#x662F;&#x603B;&#x80FD;&#x5F52;&#x7ED3;&#x5230;&#x4E00;&#x4E2A;&#x552F;&#x4E00;&#x9519;&#x8BEF;&#x6B65;&#x9AA4;&#x3002;
&#x540C;&#x4E00;&#x6761;&#x5931;&#x8D25;&#x8F68;&#x8FF9;&#x53EF;&#x4EE5;&#x6709;&#x591A;&#x4E2A;&#x5408;&#x7406;&#x5F52;&#x56E0;&#x89C6;&#x89D2;&#x3002;
&#x5F52;&#x56E0;&#x7CFB;&#x7EDF;&#x5E94;&#x8BE5;&#x8F93;&#x51FA;&#x591A;&#x4E2A;&#x5931;&#x8D25;&#x70B9;&#x3001;&#x7406;&#x7531;&#x548C;&#x7406;&#x60F3;&#x52A8;&#x4F5C;&#x3002;
&#x8C03;&#x8BD5;&#x65F6;&#x5E94;&#x8BE5;&#x6309;&#x4F18;&#x5148;&#x7EA7;&#x5904;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8FFD;&#x6C42;&#x552F;&#x4E00;&#x6807;&#x51C6;&#x7B54;&#x6848;&#x3002;
</code></pre>
<p>&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<p><strong>Agent &#x5931;&#x8D25;&#x5F52;&#x56E0;&#x4E0D;&#x5E94;&#x8BE5;&#x662F;&#x201C;&#x627E;&#x4E00;&#x4E2A;&#x7F6A;&#x9B41;&#x7978;&#x9996;&#x201D;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x662F;&#x201C;&#x627E;&#x51FA;&#x4E00;&#x7EC4;&#x53EF;&#x884C;&#x52A8;&#x7684;&#x5931;&#x8D25;&#x89E3;&#x91CA;&#x201D;&#x3002;</strong></p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2603.25001">&#x8BBA;&#x6587;&#x539F;&#x6587;&#xFF1A;Rethinking Failure Attribution in Multi-Agent Systems: A Multi-Perspective Benchmark and Evaluation</a></li>
<li><a href="https://arxiv.org/pdf/2603.25001">PDF</a></li>
<li><a href="https://github.com/yeonjun-in/MP-Bench">&#x5B98;&#x65B9;&#x4EE3;&#x7801;&#x4E0E;&#x6570;&#x636E;&#xFF1A;yeonjun-in/MP-Bench</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-05-08</em></p>
`,n=[{level:2,title:"一句话结论",children:[]},{level:2,title:"用一个例子理解",children:[]},{level:2,title:"三种合理归因视角",children:[{level:3,title:"视角 1：SearchAgent 是根因",children:[]},{level:3,title:"视角 2：CoderAgent 是根因",children:[]},{level:3,title:"视角 3：TesterAgent 是根因",children:[]}]},{level:2,title:"论文真正想改的是什么？",children:[]},{level:2,title:"为什么这很重要？",children:[{level:3,title:"问题 1：合理答案会被误判",children:[]},{level:3,title:"问题 2：调试建议变窄",children:[]}]},{level:2,title:"论文怎么证明这个观点？",children:[]},{level:2,title:"MP-Bench 是怎么构造的？",children:[]},{level:2,title:"MP-Bench 标注什么？",children:[]},{level:2,title:"多个专家标注怎么合并？",children:[]},{level:2,title:"MP-Bench 怎么评测模型？",children:[]},{level:2,title:"Reasoning 怎么评估？",children:[]},{level:2,title:"实验结论",children:[{level:3,title:"1. LLM 在多视角评测下并不差",children:[]},{level:3,title:"2. 高温采样有帮助",children:[]},{level:3,title:"3. 多模型组合更好",children:[]}]},{level:2,title:"和 TraceElephant 的区别",children:[]},{level:2,title:"工程上怎么用？",children:[]},{level:2,title:"实践建议",children:[{level:3,title:"1. 不要做单选归因",children:[]},{level:3,title:"2. 归因要带 ideal action",children:[]},{level:3,title:"3. 多模型/多采样有价值",children:[]},{level:3,title:"4. 排序比分类更实用",children:[]},{level:3,title:"5. 可以直接借鉴 MP-Bench 的报告格式",children:[]}]},{level:2,title:"局限性",children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
