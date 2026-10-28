const x={title:"GEPA 如何优化 Agent 策略",description:"对照现有任务输出，展示 Skill Creator 的最小目录、候选与评审产物，以及后续接入 GEPA 需要增加的执行评价和优化记录。"},E=`<h1 id="GEPA &#x5982;&#x4F55;&#x4F18;&#x5316; Agent &#x7B56;&#x7565;"><a href="#GEPA &#x5982;&#x4F55;&#x4F18;&#x5316; Agent &#x7B56;&#x7565;"></a>GEPA &#x5982;&#x4F55;&#x4F18;&#x5316; Agent &#x7B56;&#x7565;</h1>
<p>&#x5F53;&#x524D;&#x5148;&#x8DD1;&#x901A; <strong>Skill Creator &#x751F;&#x6210;&#x5019;&#x9009;&#x3001;&#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;&#x3001;&#x540E;&#x7EED;&#x4F7F;&#x7528;&#x4E0E;&#x4FEE;&#x8BA2;</strong>&#x3002;GEPA &#x653E;&#x5728;&#x9700;&#x8981;&#x53CD;&#x590D;&#x6BD4;&#x8F83;&#x5019;&#x9009;&#x3001;&#x5DF2;&#x6709;&#x53EF;&#x91CD;&#x590D;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;&#x4E4B;&#x540E;&#x63A5;&#x5165;&#xFF0C;&#x81EA;&#x52A8;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#x53EF;&#x4EE5;&#x7EE7;&#x7EED;&#x540E;&#x7F6E;&#x3002;</p>
<p>&#x4E0B;&#x9762;&#x7528;&#x201C;&#x4ECE;&#x4E00;&#x6B21;&#x7C7B;&#x578B;&#x68C0;&#x67E5;&#x590D;&#x76D8;&#x4E2D;&#x63D0;&#x70BC;&#x8BCA;&#x65AD;&#x6BD4;&#x8F83; Skill&#x201D;&#x4E32;&#x8D77;&#x76EE;&#x5F55;&#x3001;&#x8FC7;&#x7A0B;&#x548C;&#x4EA7;&#x7269;&#x3002;</p>
<h2 id="1. &#x5DF2;&#x6709;&#x8F93;&#x51FA;&#x63D0;&#x4F9B;&#x4EC0;&#x4E48;"><a href="#1. &#x5DF2;&#x6709;&#x8F93;&#x51FA;&#x63D0;&#x4F9B;&#x4EC0;&#x4E48;"></a>1. &#x5DF2;&#x6709;&#x8F93;&#x51FA;&#x63D0;&#x4F9B;&#x4EC0;&#x4E48;</h2>
<p>&#x73B0;&#x6709;&#x76EE;&#x5F55;&#x5DF2;&#x7ECF;&#x4FDD;&#x5B58;&#x4EFB;&#x52A1;&#x4E8B;&#x5B9E;&#xFF1A;</p>
<pre><code class="language-text">rn-agent-output/
&#x251C;&#x2500;&#x2500; runs/&lt;&#x4EFB;&#x52A1;&gt;/
&#x2502;   &#x251C;&#x2500;&#x2500; records/inputs/          # &#x539F;&#x59CB;&#x4EFB;&#x52A1;&#x3001;&#x7EA6;&#x675F;&#x4E0E;&#x9A8C;&#x6536;
&#x2502;   &#x251C;&#x2500;&#x2500; records/attempts/        # &#x5404;&#x8F6E;&#x7ED3;&#x679C;&#x3001;&#x68C0;&#x67E5;&#x4E0E;&#x4EA7;&#x7269;
&#x2502;   &#x251C;&#x2500;&#x2500; logs/                    # &#x6267;&#x884C;&#x8F68;&#x8FF9;&#x4E0E;&#x5DE5;&#x5177;&#x8F93;&#x51FA;
&#x2502;   &#x2514;&#x2500;&#x2500; agent-workspace/         # &#x5DE5;&#x7A0B;&#x526F;&#x672C;&#x4E0E;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;
&#x2514;&#x2500;&#x2500; operator/&lt;&#x7167;&#x770B;&#x8FC7;&#x7A0B;&gt;/
    &#x2514;&#x2500;&#x2500; journal.jsonl            # &#x4EBA;&#x5DE5;&#x8BC4;&#x5BA1;&#x3001;&#x4ECB;&#x5165;&#x53CA;&#x7406;&#x7531;
</code></pre>
<p>&#x672C;&#x6B21; smoke &#x4E2D;&#xFF0C;&#x8BCA;&#x65AD;&#x6BD4;&#x8F83;&#x521D;&#x9A8C;&#x4E0D;&#x786E;&#x5B9A;&#xFF0C;&#x8C03;&#x6574;&#x6BD4;&#x8F83;&#x65B9;&#x5F0F;&#x540E;&#x590D;&#x9A8C;&#x901A;&#x8FC7;&#xFF0C;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;&#x6811;&#x6CA1;&#x6709;&#x968F;&#x4E4B;&#x53D8;&#x5316;&#x3002;&#x8FD9;&#x53EF;&#x4EE5;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x7684;&#x590D;&#x76D8;&#x95EE;&#x9898;&#xFF1A;</p>
<blockquote>
<p>&#x600E;&#x6837;&#x8BC6;&#x522B;&#x672C;&#x6B21;&#x65B0;&#x589E;&#x8BCA;&#x65AD;&#xFF0C;&#x540C;&#x65F6;&#x907F;&#x514D;&#x628A;&#x751F;&#x6210;&#x6587;&#x4EF6;&#x4E2D;&#x65E7;&#x8BCA;&#x65AD;&#x7684;&#x884C;&#x53F7;&#x79FB;&#x52A8;&#x8BEF;&#x5224;&#x4E3A;&#x65B0;&#x589E;&#xFF1F;</p>
</blockquote>
<p>Creator &#x8BFB;&#x53D6;&#x5BF9;&#x5E94;&#x8F93;&#x5165;&#x3001;&#x65E5;&#x5FD7;&#x3001;&#x68C0;&#x67E5;&#x811A;&#x672C;&#x4E0E;&#x4FEE;&#x6B63;&#x8BB0;&#x5F55;&#xFF0C;&#x518D;&#x7ED3;&#x5408;&#x5DF2;&#x6709; Skills &#x63D0;&#x51FA;&#x6307;&#x5BFC;&#x3002;&#x539F;&#x59CB;&#x4E8B;&#x5B9E;&#x4FDD;&#x6301;&#x4E0D;&#x6539;&#xFF0C;&#x6309;&#x9700;&#x5F15;&#x7528;&#xFF0C;&#x4E0D;&#x590D;&#x5236;&#x6574;&#x4E2A;&#x7F13;&#x5B58;&#x4E0E;&#x8FD0;&#x884C;&#x76EE;&#x5F55;&#x3002;</p>
<h2 id="2. &#x73B0;&#x5728;&#x5148;&#x505A;&#x7684; Skill Creator"><a href="#2. &#x73B0;&#x5728;&#x5148;&#x505A;&#x7684; Skill Creator"></a>2. &#x73B0;&#x5728;&#x5148;&#x505A;&#x7684; Skill Creator</h2>
<h3 id="&#x5EFA;&#x8BAE;&#x65B0;&#x589E;&#x7684;&#x6700;&#x5C0F;&#x76EE;&#x5F55;"><a href="#&#x5EFA;&#x8BAE;&#x65B0;&#x589E;&#x7684;&#x6700;&#x5C0F;&#x76EE;&#x5F55;"></a>&#x5EFA;&#x8BAE;&#x65B0;&#x589E;&#x7684;&#x6700;&#x5C0F;&#x76EE;&#x5F55;</h3>
<pre><code class="language-text">rn-agent-output/
&#x251C;&#x2500;&#x2500; runs/&#x3001;operator/             # &#x5DF2;&#x6709;&#x4E8B;&#x5B9E;&#x6765;&#x6E90;
&#x251C;&#x2500;&#x2500; skills/
&#x2502;   &#x251C;&#x2500;&#x2500; skill-creator/
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; SKILL.md             # &#x4EBA;&#x5DE5;&#x7EF4;&#x62A4;&#x7684; Creator &#x6307;&#x5BFC;
&#x2502;   &#x2514;&#x2500;&#x2500; diagnostic-comparison/
&#x2502;       &#x2514;&#x2500;&#x2500; SKILL.md             # &#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;&#x540E;&#x4FDD;&#x7559;&#x3001;&#x51C6;&#x5907;&#x8BD5;&#x7528;&#x7684;&#x7ECF;&#x9A8C;
&#x2514;&#x2500;&#x2500; postcoding/diagnostic-comparison/
    &#x251C;&#x2500;&#x2500; brief.md                 # &#x672C;&#x6B21;&#x95EE;&#x9898;&#x3001;&#x76EE;&#x6807;&#x3001;&#x6750;&#x6599;&#x5165;&#x53E3;&#x548C;&#x8FB9;&#x754C;
    &#x251C;&#x2500;&#x2500; candidate/
    &#x2502;   &#x2514;&#x2500;&#x2500; diagnostic-comparison/
    &#x2502;       &#x2514;&#x2500;&#x2500; SKILL.md         # &#x672C;&#x8F6E;&#x5019;&#x9009;
    &#x2514;&#x2500;&#x2500; review.md                # &#x53D8;&#x66F4;&#x63D0;&#x6848;&#x3001;&#x4EBA;&#x5DE5;&#x610F;&#x89C1;&#x3001;&#x4FEE;&#x8BA2;&#x4E0E;&#x91C7;&#x7EB3;&#x7ED3;&#x679C;
</code></pre>
<p>&#x8FD9;&#x662F;&#x5EFA;&#x8BAE;&#x589E;&#x52A0;&#x7684;&#x76EE;&#x5F55;&#xFF0C;&#x4E0D;&#x662F;&#x73B0;&#x6709;&#x8F93;&#x51FA;&#x5DF2;&#x5177;&#x5907;&#x7684;&#x80FD;&#x529B;&#x3002;Skill &#x6309;&#x76EE;&#x5F55;&#x4FDD;&#x5B58;&#xFF0C;&#x9700;&#x8981;&#x65F6;&#x53EF;&#x5E26;&#x811A;&#x672C;&#x3001;&#x6A21;&#x677F;&#x548C;&#x53C2;&#x8003;&#x6750;&#x6599;&#xFF1B;&#x5F53;&#x524D;&#x4E0D;&#x53E6;&#x5EFA;&#x4E2D;&#x95F4;&#x77E5;&#x8BC6;&#x5E93;&#x3002;</p>
<h3 id="&#x600E;&#x6837;&#x8DD1;&#x4E00;&#x8F6E;"><a href="#&#x600E;&#x6837;&#x8DD1;&#x4E00;&#x8F6E;"></a>&#x600E;&#x6837;&#x8DD1;&#x4E00;&#x8F6E;</h3>
<pre><code class="language-text">&#x4EBA;&#x5DE5;&#x63CF;&#x8FF0;&#x95EE;&#x9898;&#x4E0E;&#x76EE;&#x6807;&#xFF0C;brief.md &#x5F15;&#x7528;&#x76F8;&#x5173;&#x6750;&#x6599;
                    &#x2193;
Agent &#x6309; skill-creator &#x6307;&#x5BFC;&#x8BFB;&#x53D6;&#x4E8B;&#x5B9E;&#x4E0E;&#x5DF2;&#x6709; Skills
                    &#x2193;
&#x751F;&#x6210; candidate/&#xFF0C;&#x63D0;&#x51FA;&#x65B0;&#x589E;&#x3001;&#x66F4;&#x65B0;&#x3001;&#x5408;&#x5E76;&#x6216;&#x79FB;&#x9664;&#x5EFA;&#x8BAE;
                    &#x2193;
&#x4EBA;&#x5DE5; Review &#x2194; &#x4FEE;&#x6539;&#x5019;&#x9009;&#xFF0C;&#x7406;&#x7531;&#x4FDD;&#x7559;&#x5728; review.md
                    &#x2193;
&#x4EBA;&#x5DE5;&#x91C7;&#x7EB3;&#x5230; skills/ &#x2192; &#x5728;&#x540E;&#x7EED;&#x76F8;&#x5173;&#x4EFB;&#x52A1;&#x4E2D;&#x8BD5;&#x7528;
</code></pre>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x5019;&#x9009; <code>SKILL.md</code> &#x53EF;&#x4EE5;&#x5305;&#x542B;&#xFF1A;</p>
<pre><code class="language-text">Compare diagnostic identities, not only total counts.
Normalize generated-file line shifts only when source context matches.
Keep newly introduced diagnostics visible in the comparison.
</code></pre>
<p>Creator &#x540C;&#x65F6;&#x8BF4;&#x660E;&#x9002;&#x7528;&#x6761;&#x4EF6;&#x3001;&#x8BC1;&#x636E;&#x548C;&#x4F8B;&#x5916;&#x3002;&#x82E5;&#x5E93;&#x4E2D;&#x5DF2;&#x6709;&#x57FA;&#x7EBF;&#x6BD4;&#x8F83; Skill&#xFF0C;&#x4F18;&#x5148;&#x63D0;&#x51FA;&#x66F4;&#x65B0;&#xFF1B;&#x82E5;&#x6307;&#x5BFC;&#x91CD;&#x590D;&#x6216;&#x51B2;&#x7A81;&#xFF0C;&#x6307;&#x51FA;&#x5177;&#x4F53;&#x4F4D;&#x7F6E;&#x5E76;&#x63D0;&#x51FA;&#x5408;&#x5E76;&#x6216;&#x79FB;&#x9664;&#x5EFA;&#x8BAE;&#x3002;&#x5019;&#x9009;&#x4E0D;&#x76F4;&#x63A5;&#x8986;&#x76D6;&#x6B63;&#x5F0F;&#x5185;&#x5BB9;&#xFF0C;&#x66F4;&#x65B0;&#x4E0E;&#x79FB;&#x9664;&#x524D;&#x4FDD;&#x7559;&#x65E7;&#x5185;&#x5BB9;&#x3002;</p>
<p><strong>&#x8FD9;&#x4E00;&#x9636;&#x6BB5;&#x7684;&#x4EA7;&#x7269;&#x5C31;&#x662F;&#x5019;&#x9009; Skill&#x3001;&#x53D8;&#x66F4;&#x63D0;&#x6848;&#x548C;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x8BB0;&#x5F55;&#x3002;</strong> &#x65E0;&#x9700; GEPA&#xFF0C;&#x4E5F;&#x65E0;&#x9700;&#x5148;&#x5B9E;&#x73B0; Env Creator&#x3002;&#x5165;&#x5E93;&#x4E0E;&#x5168;&#x5C40;&#x542F;&#x7528;&#x5206;&#x5F00;&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x8BB0;&#x5F55;&#x5B9E;&#x9645;&#x91C7;&#x7528;&#x7684;&#x6307;&#x5BFC;&#x3001;&#x884C;&#x4E3A;&#x548C;&#x73AF;&#x5883;&#x7ED3;&#x679C;&#x3002;</p>
<h3 id="Creator &#x81EA;&#x8EAB;&#x600E;&#x6837;&#x8FED;&#x4EE3;"><a href="#Creator &#x81EA;&#x8EAB;&#x600E;&#x6837;&#x8FED;&#x4EE3;"></a>Creator &#x81EA;&#x8EAB;&#x600E;&#x6837;&#x8FED;&#x4EE3;</h3>
<p>&#x5982;&#x679C;&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x7EA0;&#x6B63;&#x201C;&#x628A;&#x5355;&#x4E2A; Case &#x5199;&#x6210;&#x901A;&#x7528;&#x89C4;&#x5219;&#x201D;&#x201C;&#x91CD;&#x590D;&#x521B;&#x5EFA;&#x76F8;&#x8FD1; Skill&#x201D;&#x7B49;&#x95EE;&#x9898;&#xFF0C;&#x5C31;&#x628A;&#x8FD9;&#x4E9B;&#x7EA0;&#x6B63;&#x6C89;&#x6DC0;&#x8FDB; <code>skills/skill-creator/SKILL.md</code>&#xFF0C;&#x518D;&#x89C2;&#x5BDF;&#x540E;&#x7EED;&#x63D0;&#x70BC;&#x8D28;&#x91CF;&#x3002;</p>
<p>Creator &#x7684;&#x89C4;&#x5219;&#x4E0E;&#x81EA;&#x68C0;&#x53EF;&#x4EE5;&#x964D;&#x4F4E;&#x51B2;&#x7A81;&#x548C;&#x8FC7;&#x5EA6;&#x6CDB;&#x5316;&#x98CE;&#x9669;&#x3002;&#x901A;&#x7528;&#x6027;&#x3001;&#x7EC4;&#x5408;&#x6548;&#x679C;&#x548C;&#x4E0D;&#x9000;&#x5316;&#x4ECD;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x4E0E;&#x56DE;&#x5F52;&#x8BC1;&#x636E;&#xFF1B;&#x7B2C;&#x4E00;&#x7248;&#x53EF;&#x4EE5;&#x5148;&#x628A;&#x6548;&#x679C;&#x8BB0;&#x4E3A;&#x201C;&#x5F85;&#x9A8C;&#x8BC1;&#x201D;&#xFF0C;&#x4E0D;&#x5FC5;&#x4E3A;&#x6B64;&#x963B;&#x585E;&#x5019;&#x9009;&#x751F;&#x6210;&#x3002;</p>
<h2 id="3. GEPA &#x4EE5;&#x540E;&#x63D2;&#x5728;&#x54EA;&#x91CC;"><a href="#3. GEPA &#x4EE5;&#x540E;&#x63D2;&#x5728;&#x54EA;&#x91CC;"></a>3. GEPA &#x4EE5;&#x540E;&#x63D2;&#x5728;&#x54EA;&#x91CC;</h2>
<p>&#x666E;&#x901A; Creator &#x53EF;&#x4EE5;&#x751F;&#x6210;&#x5019;&#x9009;&#x5E76;&#x4E0E;&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x4FEE;&#x8BA2;&#x3002;GEPA &#x589E;&#x52A0;&#x7684;&#x662F;&#xFF1A;<strong>&#x6839;&#x636E;&#x6267;&#x884C;&#x53CD;&#x9988;&#x53CD;&#x601D;&#x3001;&#x63D0;&#x51FA;&#x591A;&#x4E2A;&#x5019;&#x9009;&#xFF0C;&#x5E76;&#x6309;&#x8BC4;&#x4EF7;&#x7ED3;&#x679C;&#x9009;&#x62E9;&#x7EE7;&#x7EED;&#x63A2;&#x7D22;&#x7684;&#x65B9;&#x5411;</strong>&#xFF0C;&#x540C;&#x65F6;&#x7BA1;&#x7406;&#x9884;&#x7B97;&#x4E0E;&#x5019;&#x9009;&#x8BB0;&#x5F55;&#x3002;<a href="https://gepa-ai.github.io/gepa/api/optimize_anything/optimize_anything/">1</a></p>
<p>&#x8FD9;&#x91CC;&#x5148;&#x4F18;&#x5316;&#x4EA7;&#x51FA;&#x7684;&#x4E00;&#x4EFD; <code>diagnostic-comparison</code> Skill&#xFF1A;</p>
<pre><code class="language-text">Creator &#x4EA7;&#x51FA;&#x7684;&#x521D;&#x59CB; Skill
          &#x2193;
GEPA &#x63D0;&#x51FA;&#x5019;&#x9009; &#x2192; &#x5199;&#x5165;&#x9694;&#x79BB;&#x7684; Skill &#x76EE;&#x5F55;
          &#x2191;                 &#x2193;
     &#x5206;&#x6570;&#x4E0E;&#x5177;&#x4F53;&#x53CD;&#x9988; &#x2190; Agent &#x4F7F;&#x7528;&#x5019;&#x9009;&#x6267;&#x884C; Case
          &#x2193;
&#x9009;&#x4E2D;&#x7684;&#x5019;&#x9009; &#x2192; &#x4EBA;&#x5DE5; Review &#x2192; &#x51B3;&#x5B9A;&#x662F;&#x5426;&#x66F4;&#x65B0; skills/
</code></pre>
<h3 id="&#x4F18;&#x5316;&#x8FC7;&#x7A0B;&#x4F1A;&#x591A;&#x51FA;&#x4EC0;&#x4E48;&#x4EA7;&#x7269;"><a href="#&#x4F18;&#x5316;&#x8FC7;&#x7A0B;&#x4F1A;&#x591A;&#x51FA;&#x4EC0;&#x4E48;&#x4EA7;&#x7269;"></a>&#x4F18;&#x5316;&#x8FC7;&#x7A0B;&#x4F1A;&#x591A;&#x51FA;&#x4EC0;&#x4E48;&#x4EA7;&#x7269;</h3>
<p>&#x5EFA;&#x8BAE;&#x5728;&#x540C;&#x4E00;&#x95EE;&#x9898;&#x76EE;&#x5F55;&#x4E0B;&#x4FDD;&#x5B58;&#xFF1A;</p>
<pre><code class="language-text">postcoding/diagnostic-comparison/
&#x251C;&#x2500;&#x2500; brief.md&#x3001;candidate/&#x3001;review.md     # &#x539F;&#x6709;&#x751F;&#x6210;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;&#x6750;&#x6599;
&#x2514;&#x2500;&#x2500; gepa/
    &#x251C;&#x2500;&#x2500; candidates/01/SKILL.md         # &#x7B2C;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x5019;&#x9009;
    &#x251C;&#x2500;&#x2500; candidates/02/SKILL.md         # &#x7B2C;&#x4E8C;&#x4E2A;&#x5B9E;&#x9A8C;&#x5019;&#x9009;
    &#x251C;&#x2500;&#x2500; evaluations.jsonl             # &#x5019;&#x9009;&#x3001;Case&#x3001;&#x5206;&#x6570;&#x3001;&#x53CD;&#x9988;&#x548C;&#x6267;&#x884C;&#x8BC1;&#x636E;&#x5165;&#x53E3;
    &#x2514;&#x2500;&#x2500; best.json                     # &#x9009;&#x4E2D;&#x7684;&#x5019;&#x9009;&#x5F15;&#x7528;&#xFF0C;&#x7B49;&#x5F85;&#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x6587;&#x4EF6;&#x540D;&#x8868;&#x793A;&#x6211;&#x4EEC;&#x5E0C;&#x671B;&#x4FDD;&#x5B58;&#x7684;&#x5DE5;&#x4F5C;&#x533A;&#x4EA7;&#x7269;&#xFF0C;&#x7531;&#x63A5;&#x5165;&#x5C42;&#x6574;&#x7406;&#x3002;GEPA &#x63D0;&#x4F9B;&#x5019;&#x9009;&#x4E0E;&#x4F18;&#x5316;&#x7ED3;&#x679C;&#xFF0C;&#x539F;&#x59CB;&#x6267;&#x884C;&#x8BC1;&#x636E;&#x4ECD;&#x7531;&#x5DF2;&#x6709;&#x6267;&#x884C;&#x5668;&#x4FDD;&#x5B58;&#x3002;<a href="https://gepa-ai.github.io/gepa/api/optimize_anything/optimize_anything/">2</a></p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x4E24;&#x4E2A;&#x5019;&#x9009;&#x5206;&#x522B;&#x91C7;&#x7528;&#x201C;&#x53EA;&#x6BD4;&#x8F83;&#x6570;&#x91CF;&#x201D;&#x548C;&#x201C;&#x6BD4;&#x8F83;&#x8BCA;&#x65AD;&#x8EAB;&#x4EFD;&#x201D;&#x3002;&#x5BF9;&#x201C;&#x65E7;&#x9519;&#x8BEF;&#x51CF;&#x5C11;&#x4E00;&#x6761;&#x3001;&#x65B0;&#x9519;&#x8BEF;&#x589E;&#x52A0;&#x4E00;&#x6761;&#x201D;&#x7684; Case&#xFF0C;&#x4E24;&#x6761;&#x793A;&#x610F;&#x8BB0;&#x5F55;&#x53EF;&#x4EE5;&#x662F;&#xFF1A;</p>
<pre><code class="language-jsonl">{&quot;candidate&quot;:&quot;01&quot;,&quot;case&quot;:&quot;same-count-new-error&quot;,&quot;score&quot;:0,&quot;feedback&quot;:&quot;&#x9519;&#x8BEF;&#x603B;&#x6570;&#x76F8;&#x540C;&#xFF0C;&#x6F0F;&#x6389;&#x65B0;&#x589E;&#x8BCA;&#x65AD;&quot;,&quot;evidence&quot;:&quot;&lt;&#x672C;&#x6B21;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x5165;&#x53E3;&gt;&quot;}
{&quot;candidate&quot;:&quot;02&quot;,&quot;case&quot;:&quot;same-count-new-error&quot;,&quot;score&quot;:1,&quot;feedback&quot;:&quot;&#x8BC6;&#x522B;&#x51FA;&#x65B0;&#x589E;&#x8BCA;&#x65AD;&quot;,&quot;evidence&quot;:&quot;&lt;&#x672C;&#x6B21;&#x6267;&#x884C;&#x8BB0;&#x5F55;&#x5165;&#x53E3;&gt;&quot;}
</code></pre>
<p>&#x5206;&#x6570;&#x6765;&#x81EA;&#x56FA;&#x5B9A;&#x68C0;&#x67E5;&#x5BF9;&#x5B9E;&#x9645;&#x8F93;&#x51FA;&#x7684;&#x5224;&#x5B9A;&#xFF0C;&#x4E0D;&#x80FD;&#x7531;&#x5019;&#x9009;&#x81EA;&#x5DF1;&#x5BA3;&#x5E03;&#x3002;&#x5355;&#x4E2A; Case &#x901A;&#x8FC7;&#x53EA;&#x63D0;&#x4F9B;&#x5C40;&#x90E8;&#x8BC1;&#x636E;&#xFF0C;&#x8FD8;&#x8981;&#x68C0;&#x67E5;&#x5176;&#x4ED6;&#x6837;&#x4F8B;&#x548C;&#x76F8;&#x5173; Skills &#x7684;&#x7EC4;&#x5408;&#x6548;&#x679C;&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#x7684;&#x201C;&#x8BAD;&#x7EC3;&#x4EA7;&#x7269;&#x201D;&#x662F;&#x5019;&#x9009;&#x6307;&#x5BFC;&#x3001;&#x5B9E;&#x9A8C;&#x8BB0;&#x5F55;&#x4E0E;&#x9009;&#x62E9;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x662F;&#x65B0;&#x7684;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x3002;<a href="https://github.com/gepa-ai/gepa">1</a></p>
<h3 id="&#x5B9E;&#x9645;&#x9700;&#x8981;&#x589E;&#x52A0;&#x54EA;&#x4E09;&#x4E2A;&#x8FDE;&#x63A5;&#x70B9;"><a href="#&#x5B9E;&#x9645;&#x9700;&#x8981;&#x589E;&#x52A0;&#x54EA;&#x4E09;&#x4E2A;&#x8FDE;&#x63A5;&#x70B9;"></a>&#x5B9E;&#x9645;&#x9700;&#x8981;&#x589E;&#x52A0;&#x54EA;&#x4E09;&#x4E2A;&#x8FDE;&#x63A5;&#x70B9;</h3>
<table>
<thead>
<tr>
<th>&#x8FDE;&#x63A5;&#x70B9;</th>
<th>&#x6211;&#x4EEC;&#x9700;&#x8981;&#x505A;&#x4EC0;&#x4E48;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5019;&#x9009;&#x843D;&#x76D8;</td>
<td>&#x5C06; GEPA &#x7ED9;&#x51FA;&#x7684;&#x5185;&#x5BB9;&#x5199;&#x5165;&#x9694;&#x79BB; Skill &#x76EE;&#x5F55;&#xFF0C;&#x8BA9; Agent &#x5B9E;&#x9645;&#x4F7F;&#x7528;&#xFF0C;&#x4E0D;&#x8986;&#x76D6;&#x6B63;&#x5F0F;&#x5E93;</td>
</tr>
<tr>
<td>&#x6267;&#x884C;&#x8BC4;&#x4EF7;</td>
<td>&#x8FD0;&#x884C; Case&#xFF0C;&#x6839;&#x636E;&#x56FA;&#x5B9A;&#x6761;&#x4EF6;&#x8FD4;&#x56DE;&#x5206;&#x6570;&#x3001;&#x8BCA;&#x65AD;&#x53CD;&#x9988;&#x548C;&#x8BC1;&#x636E;&#x5165;&#x53E3;</td>
</tr>
<tr>
<td>&#x4F18;&#x5316;&#x8C03;&#x7528;</td>
<td>&#x5C06;&#x521D;&#x59CB; Skill&#x3001;Case &#x548C;&#x9884;&#x7B97;&#x4EA4;&#x7ED9; GEPA&#xFF0C;&#x4FDD;&#x5B58;&#x7ED3;&#x679C;&#xFF0C;&#x4EA4;&#x4EBA;&#x5DE5;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x91C7;&#x7EB3;</td>
</tr>
</tbody>
</table>
<p>&#x5DF2;&#x6709;&#x4EFB;&#x52A1;&#x76EE;&#x5F55;&#x3001;MCP &#x91C7;&#x96C6;&#x548C;&#x6267;&#x884C;&#x5BBF;&#x4E3B;&#x53EF;&#x4EE5;&#x4FDD;&#x7559;&#x3002;GEPA &#x4E0D;&#x4F1A;&#x81EA;&#x52A8;&#x7406;&#x89E3;&#x8F93;&#x51FA;&#x76EE;&#x5F55;&#x3001;&#x5236;&#x5B9A;&#x53EF;&#x9760;&#x8BC4;&#x5206;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x66FF;&#x6211;&#x4EEC;&#x5B8C;&#x6210; Skill &#x5E93;&#x7684;&#x5408;&#x5E76;&#x4E0E;&#x5220;&#x9664;&#x51B3;&#x7B56;&#x3002;</p>
<p>&#x5982;&#x679C;&#x521D;&#x59CB; Creator &#x5DF2;&#x7ECF;&#x7ED9;&#x51FA;&#x5408;&#x9002;&#x6307;&#x5BFC;&#xFF0C;GEPA &#x4E5F;&#x53EF;&#x80FD;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x66F4;&#x597D;&#x7684;&#x5019;&#x9009;&#x3002;&#x5B83;&#x7684;&#x5177;&#x4F53;&#x6536;&#x76CA;&#x5E94;&#x662F;&#xFF1A;&#x5728;&#x540C;&#x6837;&#x9884;&#x7B97;&#x4E0B;&#xFF0C;&#x66F4;&#x5FEB;&#x8BD5;&#x51FA;&#x6709;&#x6548;&#x6539;&#x52A8;&#xFF0C;&#x6216;&#x51CF;&#x5C11;&#x4EBA;&#x5DE5;&#x9010;&#x4E2A;&#x7EC4;&#x7EC7;&#x5B9E;&#x9A8C;&#x7684;&#x5DE5;&#x4F5C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4FDD;&#x8BC1;&#x751F;&#x6210;&#x8D28;&#x91CF;&#x63D0;&#x5347;&#x3002;</p>
<h2 id="4. &#x6309;&#x4EC0;&#x4E48;&#x53F0;&#x9636;&#x63A8;&#x8FDB;"><a href="#4. &#x6309;&#x4EC0;&#x4E48;&#x53F0;&#x9636;&#x63A8;&#x8FDB;"></a>4. &#x6309;&#x4EC0;&#x4E48;&#x53F0;&#x9636;&#x63A8;&#x8FDB;</h2>
<table>
<thead>
<tr>
<th>&#x9636;&#x6BB5;</th>
<th>&#x505A;&#x4EC0;&#x4E48;</th>
<th>&#x7559;&#x4E0B;&#x4EC0;&#x4E48;</th>
<th>GEPA</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x73B0;&#x5728;</td>
<td>Creator &#x8BFB;&#x53D6;&#x5DE5;&#x4F5C;&#x533A;&#xFF0C;&#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;&#x4E0E;&#x4FEE;&#x8BA2;</td>
<td>&#x5019;&#x9009; Skill&#x3001;&#x589E;&#x5220;&#x6539;&#x63D0;&#x6848;&#x3001;Review &#x8BB0;&#x5F55;</td>
<td>&#x4E0D;&#x9700;&#x8981;</td>
</tr>
<tr>
<td>&#x540E;&#x7EED;&#x4F7F;&#x7528;</td>
<td>&#x5728;&#x76F8;&#x5173;&#x4EFB;&#x52A1;&#x4E2D;&#x8BD5;&#x7528;&#xFF0C;&#x89C2;&#x5BDF;&#x91C7;&#x7528;&#x3001;&#x5931;&#x8D25;&#x548C;&#x56DE;&#x5F52;&#xFF0C;&#x7EE7;&#x7EED;&#x6539; Creator</td>
<td>Skill &#x5185;&#x5BB9;&#x4E0E;&#x5B9E;&#x9645;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x7684;&#x5173;&#x8054;</td>
<td>&#x4E0D;&#x9700;&#x8981;</td>
</tr>
<tr>
<td>&#x53EF;&#x91CD;&#x590D;&#x6BD4;&#x8F83;&#x540E;</td>
<td>&#x5148;&#x624B;&#x5DE5;&#x51C6;&#x5907;&#x5C11;&#x91CF; Case&#xFF0C;&#x56FA;&#x5B9A;&#x5224;&#x5B9A;&#xFF0C;&#x518D;&#x53CD;&#x590D;&#x6BD4;&#x8F83;&#x5019;&#x9009;</td>
<td>&#x5019;&#x9009;&#x3001;&#x8BC4;&#x4EF7;&#x4E0E;&#x9009;&#x62E9;&#x8BB0;&#x5F55;</td>
<td>&#x6309;&#x6536;&#x76CA;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x63A5;&#x5165;</td>
</tr>
<tr>
<td>&#x9700;&#x8981;&#x6269;&#x5927;&#x8986;&#x76D6;&#x65F6;</td>
<td>Env Creator &#x4ECE;&#x4EFB;&#x52A1;&#x4E2D;&#x8403;&#x53D6;&#x3001;&#x6062;&#x590D;&#x5E76;&#x6821;&#x9A8C;&#x8BC4;&#x4F30;&#x573A;&#x666F;</td>
<td>&#x53EF;&#x91CD;&#x590D;&#x4F7F;&#x7528;&#x7684;&#x73AF;&#x5883;&#x4E0E;&#x5224;&#x5B9A;&#x4F9D;&#x636E;</td>
<td>&#x590D;&#x7528;&#x8FD9;&#x4E9B;&#x573A;&#x666F;&#x7EE7;&#x7EED;&#x4F18;&#x5316;</td>
</tr>
</tbody>
</table>
<p><strong>&#x5C11;&#x91CF;&#x624B;&#x5DE5; Case &#x4E0E;&#x5B8C;&#x6574;&#x7684;&#x81EA;&#x52A8;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x662F;&#x4E24;&#x4EF6;&#x4E8B;&#x3002;</strong> &#x524D;&#x8005;&#x53EF;&#x4EE5;&#x5148;&#x652F;&#x6301;&#x4E00;&#x4E2A;&#x5C40;&#x90E8;&#x5B9E;&#x9A8C;&#xFF0C;&#x540E;&#x8005;&#x5728;&#x540E;&#x7EED;&#x6269;&#x5927;&#x8986;&#x76D6;&#x3001;&#x964D;&#x4F4E;&#x73AF;&#x5883;&#x6062;&#x590D;&#x6210;&#x672C;&#x65F6;&#x518D;&#x5EFA;&#x8BBE;&#x3002;</p>
<p>&#x521D;&#x671F;&#x5148;&#x4F18;&#x5316;&#x4EA7;&#x51FA;&#x7684; Skill&#x3002;&#x82E5;&#x4EE5;&#x540E;&#x7528; GEPA &#x4F18;&#x5316; Creator&#xFF0C;&#x8BC4;&#x4EF7;&#x4F1A;&#x591A;&#x4E00;&#x5C42;&#xFF1A;<code>Creator &#x6307;&#x5BFC; &#x2192; &#x751F;&#x6210; Skill &#x2192; &#x5728;&#x4EFB;&#x52A1;&#x4E2D;&#x5E94;&#x7528; &#x2192; &#x8BC4;&#x4EF7;&#x7ED3;&#x679C;</code>&#xFF0C;&#x9700;&#x8981;&#x66F4;&#x5145;&#x5206;&#x7684;&#x6837;&#x4F8B;&#x548C;&#x66F4;&#x9AD8;&#x7684;&#x9884;&#x7B97;&#xFF0C;&#x6682;&#x4E0D;&#x4E00;&#x8D77;&#x5F15;&#x5165;&#x3002;</p>
<p>&#x5F53;&#x524D;&#x6700;&#x5C0F;&#x76EE;&#x6807;&#x662F;&#x628A;&#x4E00;&#x6B21;&#x771F;&#x5B9E;&#x590D;&#x76D8;&#x53D8;&#x6210;&#x53EF;&#x5BA1;&#x67E5;&#x3001;&#x53EF;&#x8BD5;&#x7528;&#x3001;&#x53EF;&#x4FEE;&#x8BA2;&#x7684; Skill&#x3002;&#x7B49;&#x5019;&#x9009;&#x5DF2;&#x7ECF;&#x9700;&#x8981;&#x53CD;&#x590D;&#x6BD4;&#x8F83;&#xFF0C;&#x518D;&#x7528; GEPA &#x63A5;&#x7BA1;&#x5B9E;&#x9A8C;&#x641C;&#x7D22;&#xFF1B;&#x4E0D;&#x4E3A;&#x5F15;&#x5165;&#x4F18;&#x5316;&#x5668;&#x63D0;&#x524D;&#x5EFA;&#x8BBE;&#x6574;&#x5957;&#x8BC4;&#x4EF7;&#x5E73;&#x53F0;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;"><a href="#&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;"></a>&#x53C2;&#x8003;&#x4E0E;&#x5173;&#x8054;</h2>
<ul>
<li><a href="https://github.com/gepa-ai/gepa">GEPA &#x5B98;&#x65B9;&#x4ED3;&#x5E93;</a>&#xFF1A;&#x53CD;&#x601D;&#x5F0F;&#x7B56;&#x7565;&#x641C;&#x7D22;&#x4E0E;&#x4F7F;&#x7528;&#x5165;&#x53E3;&#x3002;</li>
<li><a href="https://gepa-ai.github.io/gepa/api/optimize_anything/optimize_anything/">optimize_anything API</a>&#xFF1A;&#x5019;&#x9009;&#x3001;&#x8BC4;&#x4EF7;&#x53CD;&#x9988;&#x3001;&#x9884;&#x7B97;&#x548C;&#x4F18;&#x5316;&#x7ED3;&#x679C;&#x3002;</li>
<li><a href="./Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%8F%8D%E9%A6%88%E9%87%87%E9%9B%86.md">Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;</a>&#xFF1A;&#x4E8B;&#x5B9E;&#x4E0E;&#x4EBA;&#x5DE5;&#x4FEE;&#x8BA2;&#x7684;&#x7EC4;&#x7EC7;&#x3002;</li>
<li><a href="./%E8%AF%84%E4%BC%B0%E4%B8%96%E7%95%8C%E8%90%83%E5%8F%96%EF%BC%9A%E4%B8%8E%20Skill%20%E5%8D%8F%E5%90%8C%E6%BC%94%E8%BF%9B%E7%9A%84%E9%AA%8C%E8%AF%81%E6%9C%BA%E5%88%B6.md">&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#xFF1A;&#x4E0E; Skill &#x534F;&#x540C;&#x6F14;&#x8FDB;&#x7684;&#x9A8C;&#x8BC1;&#x673A;&#x5236;</a>&#xFF1A;&#x540E;&#x7EED;&#x73AF;&#x5883;&#x6062;&#x590D;&#x4E0E;&#x8BC4;&#x4EF7;&#x6821;&#x9A8C;&#x3002;</li>
</ul>
`,F=[{level:1,title:"GEPA 如何优化 Agent 策略",children:[{level:2,title:"1. 已有输出提供什么",children:[]},{level:2,title:"2. 现在先做的 Skill Creator",children:[{level:3,title:"建议新增的最小目录",children:[]},{level:3,title:"怎样跑一轮",children:[]},{level:3,title:"Creator 自身怎样迭代",children:[]}]},{level:2,title:"3. GEPA 以后插在哪里",children:[{level:3,title:"优化过程会多出什么产物",children:[]},{level:3,title:"实际需要增加哪三个连接点",children:[]}]},{level:2,title:"4. 按什么台阶推进",children:[]},{level:2,title:"参考与关联",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
