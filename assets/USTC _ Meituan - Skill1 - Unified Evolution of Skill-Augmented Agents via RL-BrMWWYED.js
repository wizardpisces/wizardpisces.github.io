const x={},F=`<p><em>&#x8BBA;&#x6587;&#x63D0;&#x4EA4;&#xFF1A;2026-05-07&#xFF0C;v3 &#x4FEE;&#x8BA2;&#xFF1A;2026-05-12</em></p>
<p><strong>Skill1</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2605.06130">Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning</a>&#x300B;&#xFF09;&#x7814;&#x7A76;&#x7684;&#x662F;&#xFF1A;<strong>&#x5982;&#x4F55;&#x8BA9;&#x5E26;&#x6280;&#x80FD;&#x5E93;&#x7684; LLM Agent &#x771F;&#x6B63;&#x81EA;&#x6211;&#x8FDB;&#x5316;</strong>&#x3002;</p>
<p>&#x4E00;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;&#x5B83;&#x4E0D;&#x662F;&#x53EA;&#x8BA9; Agent &#x5B66;&#x4F1A;&#x6267;&#x884C;&#x4EFB;&#x52A1;&#xFF0C;&#x800C;&#x662F;&#x540C;&#x65F6;&#x8BAD;&#x7EC3;&#x4E09;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<pre><code class="language-text">&#x4ECE;&#x6280;&#x80FD;&#x5E93;&#x91CC;&#x9009;&#x5BF9;&#x6280;&#x80FD; -&gt; &#x7528;&#x597D;&#x8FD9;&#x4E2A;&#x6280;&#x80FD;&#x5B8C;&#x6210;&#x4EFB;&#x52A1; -&gt; &#x628A;&#x65B0;&#x7ECF;&#x9A8C;&#x6C89;&#x6DC0;&#x6210;&#x66F4;&#x597D;&#x7684;&#x6280;&#x80FD;
</code></pre>
<p>&#x8BBA;&#x6587;&#x7684;&#x6838;&#x5FC3;&#x8BBA;&#x70B9;&#x662F;&#xFF1A;<strong>&#x6280;&#x80FD;&#x9009;&#x62E9;&#x3001;&#x6280;&#x80FD;&#x4F7F;&#x7528;&#x3001;&#x6280;&#x80FD;&#x6C89;&#x6DC0;&#x4E0D;&#x80FD;&#x62C6;&#x5F00;&#x5404;&#x81EA;&#x4F18;&#x5316;&#xFF0C;&#x5B83;&#x4EEC;&#x5FC5;&#x987B;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x4FE1;&#x53F7;&#x4E00;&#x8D77;&#x8FDB;&#x5316;&#x3002;</strong></p>
<h2 id="&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"><a href="#&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;"></a>&#x5148;&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;</h2>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E2A; ALFWorld &#x5BB6;&#x52A1;&#x4EFB;&#x52A1;&#xFF1A;</p>
<pre><code class="language-text">heat some plate and put it in cabinet
&#x628A;&#x76D8;&#x5B50;&#x52A0;&#x70ED;&#xFF0C;&#x7136;&#x540E;&#x653E;&#x8FDB;&#x67DC;&#x5B50;
</code></pre>
<p>&#x73AF;&#x5883;&#x91CC;&#x540C;&#x65F6;&#x6709;&#xFF1A;</p>
<pre><code class="language-text">stoveburner
microwave
</code></pre>
<p>&#x4ECE;&#x4EBA;&#x7C7B;&#x5E38;&#x8BC6;&#x770B;&#xFF0C;&#x201C;&#x52A0;&#x70ED;&#x201D;&#x4F3C;&#x4E4E;&#x53EF;&#x4EE5;&#x7528;&#x7089;&#x7076;&#x3002;&#x4F46;&#x8FD9;&#x4E2A;&#x73AF;&#x5883;&#x91CC;&#x6709;&#x4E2A;&#x9690;&#x85CF;&#x7EA6;&#x675F;&#xFF1A;</p>
<pre><code class="language-text">plate &#x4E0D;&#x80FD;&#x88AB; stoveburner &#x6B63;&#x786E;&#x52A0;&#x70ED;&#x3002;
plate &#x5E94;&#x8BE5;&#x7528; microwave &#x52A0;&#x70ED;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x7EA6;&#x675F;&#x4E0D;&#x4F1A;&#x76F4;&#x63A5;&#x5199;&#x5728;&#x4EFB;&#x52A1;&#x63CF;&#x8FF0;&#x91CC;&#x3002;&#x666E;&#x901A; Agent &#x5982;&#x679C;&#x53EA;&#x9760;&#x5F53;&#x524D; observation &#x548C;&#x6A21;&#x578B;&#x53C2;&#x6570;&#xFF0C;&#x5F88;&#x53EF;&#x80FD;&#x4F1A;&#x8D70;&#x9519;&#x8DEF;&#x7EBF;&#xFF1A;</p>
<pre><code class="language-text">&#x62FF;&#x8D77; plate
-&gt; &#x53BB; stoveburner
-&gt; &#x5C1D;&#x8BD5; heat
-&gt; &#x5931;&#x8D25;&#x6216;&#x5361;&#x4F4F;
-&gt; &#x6700;&#x540E;&#x8017;&#x5C3D;&#x6B65;&#x6570;
</code></pre>
<p>Skill1 &#x7684;&#x601D;&#x8DEF;&#x662F;&#xFF1A;&#x5982;&#x679C; Agent &#x4E4B;&#x524D;&#x505A;&#x8FC7;&#x7C7B;&#x4F3C;&#x4EFB;&#x52A1;&#xFF0C;&#x5B83;&#x7684;&#x6280;&#x80FD;&#x5E93;&#x91CC;&#x53EF;&#x80FD;&#x5DF2;&#x7ECF;&#x6709;&#x4E00;&#x6761;&#x7ECF;&#x9A8C;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x4EFB;&#x52A1;&#x662F; heat plate &#x65F6;&#xFF0C;&#x5982;&#x679C; stoveburner &#x4E0D;&#x751F;&#x6548;&#xFF0C;&#x4F18;&#x5148;&#x53BB; microwave&#x3002;
</code></pre>
<p>&#x4E8E;&#x662F;&#x8FD9;&#x6B21;&#x4EFB;&#x52A1;&#x5C31;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x4EFB;&#x52A1;
-&gt; &#x67E5;&#x8BE2;&#x6280;&#x80FD;&#x5E93;&#xFF1A;&#x6709;&#x6CA1;&#x6709;&#x201C;&#x52A0;&#x70ED;&#x76D8;&#x5B50;&#x5E76;&#x653E;&#x7F6E;&#x201D;&#x7684;&#x7ECF;&#x9A8C;&#xFF1F;
-&gt; &#x68C0;&#x7D22;&#x5230; microwave &#x76F8;&#x5173;&#x6280;&#x80FD;
-&gt; &#x9009;&#x62E9;&#x8FD9;&#x6761;&#x6280;&#x80FD;
-&gt; &#x6267;&#x884C;&#xFF1A;&#x62FF;&#x76D8;&#x5B50; -&gt; &#x53BB; microwave -&gt; heat -&gt; &#x53BB; cabinet -&gt; put
-&gt; &#x6210;&#x529F;&#x540E;&#xFF0C;&#x518D;&#x603B;&#x7ED3;&#x4E00;&#x6761;&#x66F4;&#x53EF;&#x590D;&#x7528;&#x7684;&#x65B0;&#x6280;&#x80FD;
</code></pre>
<p>&#x8BBA;&#x6587;&#x9644;&#x5F55;&#x91CC;&#x7684;&#x771F;&#x5B9E; case study &#x5C31;&#x662F;&#x8FD9;&#x4E2A;&#x4EFB;&#x52A1;&#x3002;Skill1 &#x68C0;&#x7D22;&#x5230;&#x4E00;&#x6761;&#x6765;&#x81EA;&#x65E7;&#x4EFB;&#x52A1; <code>heat some plate and put it in fridge</code> &#x7684;&#x6280;&#x80FD;&#xFF0C;&#x6280;&#x80FD;&#x91CC;&#x8BB0;&#x5F55;&#x4E86; &#x201C;stoveburner &#x53EF;&#x80FD;&#x65E0;&#x6548;&#xFF0C;microwave &#x66F4;&#x9002;&#x5408;&#x52A0;&#x70ED; plate&#x201D;&#x3002;&#x6700;&#x540E;&#x5B83;&#x7528; 6 &#x4E2A;&#x52A8;&#x4F5C;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#xFF1A;</p>
<pre><code class="language-text">go to countertop 1
take plate 1 from countertop 1
go to microwave 1
heat plate 1 with microwave 1
go to cabinet 1
put plate 1 in cabinet 1
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x53EF;&#x4EE5;&#x628A;&#x6574;&#x7BC7;&#x8BBA;&#x6587;&#x4E32;&#x8D77;&#x6765;&#x3002;</p>
<h2 id="&#x95EE;&#x9898;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x6709;&#x6CA1;&#x6709;&#x6280;&#x80FD;&#x5E93;&#x201D;"><a href="#&#x95EE;&#x9898;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x6709;&#x6CA1;&#x6709;&#x6280;&#x80FD;&#x5E93;&#x201D;"></a>&#x95EE;&#x9898;&#x4E0D;&#x53EA;&#x662F;&#x201C;&#x6709;&#x6CA1;&#x6709;&#x6280;&#x80FD;&#x5E93;&#x201D;</h2>
<p>&#x5F88;&#x591A; Agent &#x65B9;&#x6CD5;&#x5DF2;&#x7ECF;&#x4F1A;&#x5B58;&#x7ECF;&#x9A8C;&#x3001;&#x5B58; memory&#x3001;&#x5B58; trajectory&#x3002;&#x4F46; Skill1 &#x8BA4;&#x4E3A;&#xFF0C;&#x771F;&#x6B63;&#x96BE;&#x7684;&#x4E0D;&#x662F;&#x201C;&#x5B58;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x4E09;&#x4E2A;&#x80FD;&#x529B;&#x4E92;&#x76F8;&#x4F9D;&#x8D56;&#xFF1A;</p>
<pre><code class="language-text">&#x9009;&#x9519;&#x6280;&#x80FD; -&gt; &#x6267;&#x884C;&#x518D;&#x5F3A;&#x4E5F;&#x5BB9;&#x6613;&#x5931;&#x8D25;
&#x6267;&#x884C;&#x5931;&#x8D25; -&gt; &#x4EA7;&#x51FA;&#x7684;&#x8F68;&#x8FF9;&#x8D28;&#x91CF;&#x5DEE;
&#x8F68;&#x8FF9;&#x8D28;&#x91CF;&#x5DEE; -&gt; &#x6C89;&#x6DC0;&#x51FA;&#x6765;&#x7684;&#x6280;&#x80FD;&#x4E5F;&#x5DEE;
&#x6280;&#x80FD;&#x53D8;&#x5DEE; -&gt; &#x4E0B;&#x6B21;&#x66F4;&#x96BE;&#x9009;&#x5BF9;
</code></pre>
<p>&#x6240;&#x4EE5;&#x6280;&#x80FD;&#x5E93;&#x4E0D;&#x662F;&#x5916;&#x6302;&#x7B14;&#x8BB0;&#x672C;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x548C;&#x7B56;&#x7565;&#x4E00;&#x8D77;&#x8BAD;&#x7EC3;&#x7684;&#x7CFB;&#x7EDF;&#x3002;</p>
<p>&#x62FF; plate &#x4EFB;&#x52A1;&#x770B;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C; selection &#x4E0D;&#x884C;&#xFF1A;
  Agent &#x68C0;&#x7D22;&#x5230;&#x4E86; microwave &#x6280;&#x80FD;&#xFF0C;&#x4F46;&#x6392;&#x5E8F;&#x65F6;&#x6CA1;&#x9009;&#x5B83;&#x3002;

&#x5982;&#x679C; utilization &#x4E0D;&#x884C;&#xFF1A;
  Agent &#x9009;&#x4E2D;&#x4E86; microwave &#x6280;&#x80FD;&#xFF0C;&#x4F46;&#x6267;&#x884C;&#x65F6;&#x8FD8;&#x662F;&#x8DD1;&#x53BB; stoveburner&#x3002;

&#x5982;&#x679C; distillation &#x4E0D;&#x884C;&#xFF1A;
  Agent &#x5076;&#x7136;&#x6210;&#x529F;&#x4E86;&#x4E00;&#x6B21;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x628A;&#x201C;plate &#x7528; microwave&#x201D;&#x6C89;&#x6DC0;&#x6210;&#x901A;&#x7528;&#x7ECF;&#x9A8C;&#x3002;
</code></pre>
<p>&#x8FD9;&#x4E09;&#x4EF6;&#x4E8B;&#x5C11;&#x4E00;&#x4EF6;&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x90FD;&#x4F1A;&#x53D7;&#x5F71;&#x54CD;&#x3002;</p>
<h2 id="Skill1 &#x7684;&#x5B8C;&#x6574;&#x5DE5;&#x4F5C;&#x6D41;"><a href="#Skill1 &#x7684;&#x5B8C;&#x6574;&#x5DE5;&#x4F5C;&#x6D41;"></a>Skill1 &#x7684;&#x5B8C;&#x6574;&#x5DE5;&#x4F5C;&#x6D41;</h2>
<p>&#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x91CC;&#xFF0C;Skill1 &#x8BA9;&#x540C;&#x4E00;&#x4E2A; policy &#x4F9D;&#x6B21;&#x505A;&#x56DB;&#x6BB5;&#x751F;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">1. query&#xFF1A;&#x751F;&#x6210;&#x4E00;&#x53E5;&#x68C0;&#x7D22;&#x6280;&#x80FD;&#x5E93;&#x7684;&#x67E5;&#x8BE2;
2. re-rank&#xFF1A;&#x5BF9;&#x68C0;&#x7D22;&#x5230;&#x7684;&#x5019;&#x9009;&#x6280;&#x80FD;&#x91CD;&#x65B0;&#x6392;&#x5E8F;
3. action&#xFF1A;&#x5E26;&#x7740;&#x9009;&#x4E2D;&#x7684;&#x6280;&#x80FD;&#x548C;&#x73AF;&#x5883;&#x4EA4;&#x4E92;
4. distill&#xFF1A;&#x6839;&#x636E;&#x672C;&#x6B21;&#x8F68;&#x8FF9;&#x63D0;&#x70BC;&#x65B0;&#x6280;&#x80FD;
</code></pre>
<p>&#x4ECD;&#x7136;&#x7528; plate &#x4EFB;&#x52A1;&#x4E3E;&#x4F8B;&#x3002;</p>
<h3 id="1. &#x751F;&#x6210; query"><a href="#1. &#x751F;&#x6210; query"></a>1. &#x751F;&#x6210; query</h3>
<p>Agent &#x5148;&#x628A;&#x4EFB;&#x52A1;&#x6539;&#x5199;&#x6210;&#x68C0;&#x7D22;&#x95EE;&#x9898;&#xFF1A;</p>
<pre><code class="language-text">tips for heating a plate using the correct appliance before placing it in a cabinet
</code></pre>
<p>&#x8FD9;&#x4E00;&#x6B65;&#x5F88;&#x5173;&#x952E;&#x3002;query &#x5199;&#x5F97;&#x5DEE;&#xFF0C;&#x68C0;&#x7D22;&#x5230;&#x7684;&#x6280;&#x80FD;&#x5C31;&#x4F1A;&#x504F;&#x3002;</p>
<h3 id="2. &#x91CD;&#x65B0;&#x6392;&#x5E8F;&#x5019;&#x9009;&#x6280;&#x80FD;"><a href="#2. &#x91CD;&#x65B0;&#x6392;&#x5E8F;&#x5019;&#x9009;&#x6280;&#x80FD;"></a>2. &#x91CD;&#x65B0;&#x6392;&#x5E8F;&#x5019;&#x9009;&#x6280;&#x80FD;</h3>
<p>&#x6280;&#x80FD;&#x5E93;&#x53EF;&#x80FD;&#x8FD4;&#x56DE;&#x4E09;&#x6761;&#x5019;&#x9009;&#xFF1A;</p>
<pre><code class="language-text">Skill A&#xFF1A;heat mug with microwave
Skill B&#xFF1A;heat plate with microwave because stoveburner may fail
Skill C&#xFF1A;put clean plate in cabinet
</code></pre>
<p>&#x666E;&#x901A;&#x76F8;&#x4F3C;&#x5EA6;&#x68C0;&#x7D22;&#x53EF;&#x80FD;&#x89C9;&#x5F97; A &#x548C; C &#x90FD;&#x76F8;&#x5173;&#x3002;Skill1 &#x8BA9; policy &#x518D;&#x505A;&#x4E00;&#x6B21; re-ranking&#xFF0C;&#x628A;&#x771F;&#x6B63;&#x6709;&#x7528;&#x7684; Skill B &#x6392;&#x5230;&#x6700;&#x524D;&#x9762;&#x3002;</p>
<h3 id="3. &#x4F7F;&#x7528;&#x6280;&#x80FD;&#x6267;&#x884C;&#x4EFB;&#x52A1;"><a href="#3. &#x4F7F;&#x7528;&#x6280;&#x80FD;&#x6267;&#x884C;&#x4EFB;&#x52A1;"></a>3. &#x4F7F;&#x7528;&#x6280;&#x80FD;&#x6267;&#x884C;&#x4EFB;&#x52A1;</h3>
<p>&#x9009;&#x4E2D; Skill B &#x540E;&#xFF0C;Agent &#x7684;&#x884C;&#x52A8;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x9760;&#x5F53;&#x524D; prompt&#xFF0C;&#x800C;&#x662F;&#x88AB;&#x5386;&#x53F2;&#x7ECF;&#x9A8C;&#x5F15;&#x5BFC;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x8BF4; heat plate&#x3002;
&#x8FC7;&#x53BB;&#x7ECF;&#x9A8C;&#x8BF4; stoveburner &#x5BF9; plate &#x4E0D;&#x53EF;&#x9760;&#x3002;
&#x6240;&#x4EE5;&#x6211;&#x5E94;&#x8BE5;&#x5148;&#x627E; microwave&#x3002;
</code></pre>
<p>&#x4E8E;&#x662F;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x62FF; plate -&gt; &#x627E; microwave -&gt; heat plate -&gt; &#x627E; cabinet -&gt; &#x653E;&#x5165;
</code></pre>
<h3 id="4. &#x63D0;&#x70BC;&#x65B0;&#x6280;&#x80FD;"><a href="#4. &#x63D0;&#x70BC;&#x65B0;&#x6280;&#x80FD;"></a>4. &#x63D0;&#x70BC;&#x65B0;&#x6280;&#x80FD;</h3>
<p>&#x4EFB;&#x52A1;&#x6210;&#x529F;&#x540E;&#xFF0C;Agent &#x518D;&#x628A;&#x8FD9;&#x6B21;&#x7ECF;&#x9A8C;&#x538B;&#x7F29;&#x6210;&#x65B0;&#x6280;&#x80FD;&#xFF1A;</p>
<pre><code class="language-text">&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;
&#x5F53;&#x9700;&#x8981;&#x52A0;&#x70ED; plate &#x5E76;&#x653E;&#x5230;&#x67D0;&#x4E2A;&#x4F4D;&#x7F6E;&#x65F6;&#x3002;

&#x7B56;&#x7565;&#xFF1A;
&#x4F18;&#x5148;&#x4F7F;&#x7528; microwave&#xFF0C;&#x800C;&#x4E0D;&#x662F; stoveburner&#xFF1B;&#x52A0;&#x70ED;&#x5B8C;&#x6210;&#x540E;&#x518D;&#x5BFC;&#x822A;&#x5230;&#x76EE;&#x6807;&#x5BB9;&#x5668;&#x5E76;&#x653E;&#x7F6E;&#x3002;
</code></pre>
<p>&#x6CE8;&#x610F;&#x8FD9;&#x91CC;&#x4E0D;&#x662F;&#x628A;&#x5B8C;&#x6574; trajectory &#x539F;&#x5C01;&#x4E0D;&#x52A8;&#x585E;&#x8FDB;&#x5E93;&#x91CC;&#xFF0C;&#x800C;&#x662F;&#x538B;&#x7F29;&#x6210;&#x53EF;&#x590D;&#x7528;&#x7B56;&#x7565;&#x3002;&#x5426;&#x5219;&#x6280;&#x80FD;&#x5E93;&#x4F1A;&#x8D8A;&#x6765;&#x8D8A;&#x5927;&#x3001;&#x8D8A;&#x6765;&#x8D8A;&#x810F;&#xFF0C;&#x4E5F;&#x8D8A;&#x6765;&#x8D8A;&#x96BE;&#x68C0;&#x7D22;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BBE;&#x8BA1;&#xFF1A;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#xFF0C;&#x62C6;&#x6210;&#x4E09;&#x79CD; credit"><a href="#&#x5173;&#x952E;&#x8BBE;&#x8BA1;&#xFF1A;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#xFF0C;&#x62C6;&#x6210;&#x4E09;&#x79CD; credit"></a>&#x5173;&#x952E;&#x8BBE;&#x8BA1;&#xFF1A;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#xFF0C;&#x62C6;&#x6210;&#x4E09;&#x79CD; credit</h2>
<p>Skill1 &#x6700;&#x6709;&#x610F;&#x601D;&#x7684;&#x5730;&#x65B9;&#x662F;&#xFF1A;&#x5B83;&#x6CA1;&#x6709;&#x4E3A; selection&#x3001;utilization&#x3001;distillation &#x5404;&#x81EA;&#x9020;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB; reward model&#x3002;</p>
<p>&#x5B83;&#x53EA;&#x770B;&#x6700;&#x7EC8;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">&#x6210;&#x529F;&#xFF1A;1
&#x5931;&#x8D25;&#xFF1A;0
</code></pre>
<p>&#x7136;&#x540E;&#x628A;&#x8FD9;&#x4E2A;&#x4FE1;&#x53F7;&#x62C6;&#x7ED9;&#x4E09;&#x79CD;&#x80FD;&#x529B;&#x3002;</p>
<h3 id="Utilization&#xFF1A;&#x76F4;&#x63A5;&#x770B;&#x8FD9;&#x6B21;&#x662F;&#x5426;&#x6210;&#x529F;"><a href="#Utilization&#xFF1A;&#x76F4;&#x63A5;&#x770B;&#x8FD9;&#x6B21;&#x662F;&#x5426;&#x6210;&#x529F;"></a>Utilization&#xFF1A;&#x76F4;&#x63A5;&#x770B;&#x8FD9;&#x6B21;&#x662F;&#x5426;&#x6210;&#x529F;</h3>
<p>&#x5982;&#x679C; plate &#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x4E86;&#xFF1A;</p>
<pre><code class="language-text">execution reward = 1
</code></pre>
<p>&#x5982;&#x679C;&#x5931;&#x8D25;&#xFF1A;</p>
<pre><code class="language-text">execution reward = 0
</code></pre>
<p>&#x8FD9;&#x90E8;&#x5206;&#x6700;&#x76F4;&#x89C2;&#xFF0C;&#x7528;&#x6765;&#x8BAD;&#x7EC3; Agent &#x5982;&#x4F55;&#x5E26;&#x7740;&#x6280;&#x80FD;&#x884C;&#x52A8;&#x3002;</p>
<h3 id="Selection&#xFF1A;&#x770B;&#x6280;&#x80FD;&#x7684;&#x957F;&#x671F;&#x8D8B;&#x52BF;"><a href="#Selection&#xFF1A;&#x770B;&#x6280;&#x80FD;&#x7684;&#x957F;&#x671F;&#x8D8B;&#x52BF;"></a>Selection&#xFF1A;&#x770B;&#x6280;&#x80FD;&#x7684;&#x957F;&#x671F;&#x8D8B;&#x52BF;</h3>
<p>&#x9009;&#x62E9;&#x80FD;&#x529B;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x5355;&#x6B21;&#x7ED3;&#x679C;&#x3002;&#x56E0;&#x4E3A;&#x67D0;&#x6761;&#x6280;&#x80FD;&#x53EF;&#x80FD;&#x672C;&#x8EAB;&#x5F88;&#x597D;&#xFF0C;&#x53EA;&#x662F;&#x8FD9;&#x6B21;&#x73AF;&#x5883;&#x72B6;&#x6001;&#x7279;&#x6B8A;&#x5BFC;&#x81F4;&#x5931;&#x8D25;&#x3002;</p>
<p>&#x6240;&#x4EE5; Skill1 &#x7ED9;&#x6BCF;&#x4E2A;&#x6280;&#x80FD;&#x7EF4;&#x62A4;&#x4E00;&#x4E2A; moving average utility&#xFF1A;</p>
<pre><code class="language-text">microwave-plate &#x6280;&#x80FD;&#xFF1A;
&#x8FC7;&#x53BB;&#x5F88;&#x591A;&#x6B21;&#x88AB;&#x9009;&#x4E2D;&#xFF0C;&#x5E73;&#x5747;&#x6210;&#x529F;&#x7387; 0.95

generic-heat &#x6280;&#x80FD;&#xFF1A;
&#x8FC7;&#x53BB;&#x5F88;&#x591A;&#x6B21;&#x88AB;&#x9009;&#x4E2D;&#xFF0C;&#x5E73;&#x5747;&#x6210;&#x529F;&#x7387; 0.62
</code></pre>
<p>re-ranking &#x65F6;&#xFF0C;&#x5982;&#x679C; policy &#x628A;&#x957F;&#x671F;&#x66F4;&#x6709;&#x7528;&#x7684;&#x6280;&#x80FD;&#x6392;&#x524D;&#x9762;&#xFF0C;&#x5C31;&#x5E94;&#x8BE5;&#x5F97;&#x5230;&#x5956;&#x52B1;&#x3002;</p>
<p>&#x76F4;&#x89C2;&#x8BF4;&#xFF1A;</p>
<pre><code class="language-text">&#x4E0D;&#x8981;&#x56E0;&#x4E3A;&#x4E00;&#x6B21;&#x5076;&#x7136;&#x5931;&#x8D25;&#x5426;&#x5B9A;&#x597D;&#x6280;&#x80FD;&#x3002;
&#x8981;&#x5B66;&#x4E60;&#x54EA;&#x4E9B;&#x6280;&#x80FD;&#x5728;&#x957F;&#x671F;&#x4E0A;&#x7A33;&#x5B9A;&#x6709;&#x7528;&#x3002;
</code></pre>
<p>&#x8BBA;&#x6587;&#x628A;&#x8FD9;&#x79F0;&#x4E3A; <strong>low-frequency trend</strong>&#xFF0C;&#x7528;&#x6765;&#x7ED9; selection &#x5206;&#x914D; credit&#x3002;</p>
<h3 id="Distillation&#xFF1A;&#x770B;&#x8FD9;&#x6B21;&#x7ECF;&#x9A8C;&#x662F;&#x5426;&#x8D85;&#x8FC7;&#x5DF2;&#x6709;&#x6280;&#x80FD;&#x5E93;"><a href="#Distillation&#xFF1A;&#x770B;&#x8FD9;&#x6B21;&#x7ECF;&#x9A8C;&#x662F;&#x5426;&#x8D85;&#x8FC7;&#x5DF2;&#x6709;&#x6280;&#x80FD;&#x5E93;"></a>Distillation&#xFF1A;&#x770B;&#x8FD9;&#x6B21;&#x7ECF;&#x9A8C;&#x662F;&#x5426;&#x8D85;&#x8FC7;&#x5DF2;&#x6709;&#x6280;&#x80FD;&#x5E93;</h3>
<p>&#x6280;&#x80FD;&#x6C89;&#x6DC0;&#x4E5F;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x201C;&#x8FD9;&#x6B21;&#x662F;&#x5426;&#x6210;&#x529F;&#x201D;&#x3002;&#x56E0;&#x4E3A;&#x6210;&#x529F;&#x8F68;&#x8FF9;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x91CD;&#x590D;&#x65E7;&#x7ECF;&#x9A8C;&#xFF0C;&#x6CA1;&#x5FC5;&#x8981;&#x518D;&#x5B58;&#x4E00;&#x6761;&#x7C7B;&#x4F3C;&#x6280;&#x80FD;&#x3002;</p>
<p>Skill1 &#x770B;&#x7684;&#x662F;&#x5F53;&#x524D;&#x7ED3;&#x679C;&#x76F8;&#x5BF9;&#x5DF2;&#x6709;&#x6280;&#x80FD;&#x5E93;&#x6700;&#x597D;&#x6C34;&#x5E73;&#x7684;&#x589E;&#x91CF;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x6210;&#x529F;&#xFF1A;1.0
&#x5DF2;&#x68C0;&#x7D22;&#x6280;&#x80FD;&#x91CC;&#x6700;&#x597D;&#x5386;&#x53F2; utility&#xFF1A;0.7
variation = 1.0 - 0.7 = +0.3
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x6B63;&#x589E;&#x91CF;&#x8BF4;&#x660E;&#xFF1A;&#x8FD9;&#x6B21;&#x7ECF;&#x9A8C;&#x53EF;&#x80FD;&#x63D0;&#x4F9B;&#x4E86;&#x6BD4;&#x65E7;&#x6280;&#x80FD;&#x66F4;&#x597D;&#x7684;&#x7B56;&#x7565;&#xFF0C;&#x503C;&#x5F97;&#x9F13;&#x52B1; distill&#x3002;</p>
<p>&#x53CD;&#x8FC7;&#x6765;&#xFF1A;</p>
<pre><code class="language-text">&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x5931;&#x8D25;&#xFF1A;0
&#x5DF2;&#x6709;&#x6700;&#x597D;&#x6280;&#x80FD; utility&#xFF1A;0.7
variation = 0 - 0.7 = -0.7
</code></pre>
<p>&#x8FD9;&#x8BF4;&#x660E;&#x8FD9;&#x6B21;&#x8F68;&#x8FF9;&#x4E0D;&#x503C;&#x5F97;&#x6C89;&#x6DC0;&#x6210;&#x65B0;&#x6280;&#x80FD;&#x3002;</p>
<p>&#x8BBA;&#x6587;&#x628A;&#x8FD9;&#x79F0;&#x4E3A; <strong>high-frequency variation</strong>&#xFF0C;&#x7528;&#x6765;&#x7ED9; distillation &#x5206;&#x914D; credit&#x3002;</p>
<p>&#x6240;&#x4EE5; Skill1 &#x7684;&#x6838;&#x5FC3;&#x8BAD;&#x7EC3;&#x903B;&#x8F91;&#x53EF;&#x4EE5;&#x5199;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#x672C;&#x8EAB; -&gt; &#x8BAD;&#x7EC3;&#x600E;&#x4E48;&#x6267;&#x884C;
&#x957F;&#x671F;&#x5E73;&#x5747;&#x8868;&#x73B0; -&gt; &#x8BAD;&#x7EC3;&#x600E;&#x4E48;&#x9009;&#x6280;&#x80FD;
&#x76F8;&#x5BF9;&#x5386;&#x53F2;&#x6700;&#x597D;&#x6280;&#x80FD;&#x7684;&#x589E;&#x91CF; -&gt; &#x8BAD;&#x7EC3;&#x600E;&#x4E48;&#x6C89;&#x6DC0;&#x65B0;&#x6280;&#x80FD;
</code></pre>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x53EB; co-evolution&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x53EB; co-evolution&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x53EB; co-evolution&#xFF1F;</h2>
<p>&#x56E0;&#x4E3A;&#x8FD9;&#x4E09;&#x4EF6;&#x4E8B;&#x4F1A;&#x4E92;&#x76F8;&#x5E26;&#x52A8;&#x3002;</p>
<pre><code class="language-text">selection &#x53D8;&#x597D;
-&gt; &#x66F4;&#x5E38;&#x9009;&#x5230;&#x9AD8;&#x8D28;&#x91CF;&#x6280;&#x80FD;
-&gt; utilization &#x66F4;&#x5BB9;&#x6613;&#x6210;&#x529F;
-&gt; &#x6210;&#x529F;&#x8F68;&#x8FF9;&#x66F4;&#x591A;
-&gt; distillation &#x80FD;&#x6C89;&#x6DC0;&#x66F4;&#x597D;&#x7684;&#x6280;&#x80FD;
-&gt; &#x6280;&#x80FD;&#x5E93;&#x8D28;&#x91CF;&#x63D0;&#x5347;
-&gt; selection &#x4E0B;&#x6B21;&#x66F4;&#x5BB9;&#x6613;&#x9009;&#x5230;&#x597D;&#x6280;&#x80FD;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; Skill1 &#x60F3;&#x8981;&#x5F62;&#x6210;&#x7684;&#x6B63;&#x5FAA;&#x73AF;&#x3002;</p>
<p>&#x8BBA;&#x6587;&#x7684;&#x8BAD;&#x7EC3;&#x52A8;&#x6001;&#x4E5F;&#x652F;&#x6301;&#x8FD9;&#x4E2A;&#x5224;&#x65AD;&#xFF1A;selection precision &#x5148;&#x63D0;&#x5347;&#xFF0C;&#x968F;&#x540E; utilization &#x548C; distillation &#x4E00;&#x8D77;&#x63D0;&#x5347;&#x3002;&#x53BB;&#x6389; selection &#x6216; distillation &#x7684; credit &#x540E;&#xFF0C;&#x4E0D;&#x53EA;&#x662F;&#x5BF9;&#x5E94;&#x6A21;&#x5757;&#x53D8;&#x5DEE;&#xFF0C;&#x5176;&#x4ED6;&#x6A21;&#x5757;&#x4E5F;&#x4F1A;&#x88AB;&#x62D6;&#x6162;&#x3002;</p>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x8BF4;&#x660E;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x5728;&#x4E24;&#x4E2A;&#x73AF;&#x5883;&#x4E0A;&#x8BC4;&#x4F30;&#xFF1A;</p>
<pre><code class="language-text">ALFWorld&#xFF1A;&#x6587;&#x5B57;&#x7248;&#x5BB6;&#x52A1;&#x4EFB;&#x52A1;&#xFF0C;&#x8003;&#x9A8C;&#x591A;&#x6B65;&#x89C4;&#x5212;&#x548C;&#x7269;&#x4F53;&#x4EA4;&#x4E92;&#x3002;
WebShop&#xFF1A;&#x8D2D;&#x7269;&#x7F51;&#x7AD9;&#x4EFB;&#x52A1;&#xFF0C;&#x8003;&#x9A8C;&#x641C;&#x7D22;&#x3001;&#x7B5B;&#x9009;&#x548C;&#x8D2D;&#x4E70;&#x51B3;&#x7B56;&#x3002;
</code></pre>
<p>&#x4E3B;&#x7ED3;&#x679C;&#x91CC;&#xFF0C;Skill1 &#x5728; ALFWorld &#x5E73;&#x5747;&#x6210;&#x529F;&#x7387;&#x8FBE;&#x5230; <strong>97.5%</strong>&#xFF0C;&#x8D85;&#x8FC7; RetroAgent &#x7684; <strong>94.9%</strong>&#xFF1B;&#x5728; WebShop &#x4E0A;&#x4E5F;&#x62FF;&#x5230;&#x6700;&#x9AD8;&#x6210;&#x529F;&#x7387;&#x3002;&#x51E0;&#x4E2A;&#x5173;&#x952E;&#x6570;&#x5B57;&#xFF1A;</p>
<pre><code class="language-text">ALFWorld Avg.
RetroAgent&#xFF1A;94.9
Skill1&#xFF1A;97.5

WebShop Succ.
RetroAgent&#xFF1A;82.3
Skill1&#xFF1A;82.9
</code></pre>
<p>&#x66F4;&#x6709;&#x8BF4;&#x670D;&#x529B;&#x7684;&#x662F;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#xFF1A;</p>
<pre><code class="language-text">&#x5B8C;&#x6574; Skill1&#xFF1A;97.5
&#x53BB;&#x6389; selection&#xFF1A;91.8
&#x53BB;&#x6389; distillation&#xFF1A;92.4
&#x53BB;&#x6389;&#x6574;&#x4E2A; library&#xFF1A;80.9
</code></pre>
<p>&#x8FD9;&#x8BF4;&#x660E;&#x63D0;&#x5347;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x6765;&#x81EA;&#x201C;&#x591A;&#x585E;&#x4E00;&#x4E2A;&#x6280;&#x80FD;&#x5E93;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x6765;&#x81EA;&#x5B8C;&#x6574;&#x751F;&#x547D;&#x5468;&#x671F;&#x88AB;&#x7EDF;&#x4E00;&#x4F18;&#x5316;&#x3002;</p>
<h2 id="&#x548C; Reflexion / Memory &#x7C7B;&#x65B9;&#x6CD5;&#x7684;&#x533A;&#x522B;"><a href="#&#x548C; Reflexion / Memory &#x7C7B;&#x65B9;&#x6CD5;&#x7684;&#x533A;&#x522B;"></a>&#x548C; Reflexion / Memory &#x7C7B;&#x65B9;&#x6CD5;&#x7684;&#x533A;&#x522B;</h2>
<p>Reflexion &#x7684;&#x91CD;&#x70B9;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5931;&#x8D25;&#x540E;&#x5199;&#x4E00;&#x6BB5;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x53CD;&#x601D;&#xFF0C;&#x4E0B;&#x6B21;&#x91CD;&#x8BD5;&#x65F6;&#x8BFB;&#x51FA;&#x6765;&#x3002;
</code></pre>
<p>Memory &#x7C7B;&#x65B9;&#x6CD5;&#x7684;&#x91CD;&#x70B9;&#x901A;&#x5E38;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x628A;&#x8FC7;&#x5F80;&#x7ECF;&#x9A8C;&#x5B58;&#x8D77;&#x6765;&#xFF0C;&#x5728;&#x76F8;&#x4F3C;&#x4EFB;&#x52A1;&#x91CC;&#x68C0;&#x7D22;&#x51FA;&#x6765;&#x3002;
</code></pre>
<p>Skill1 &#x66F4;&#x8FDB;&#x4E00;&#x6B65;&#xFF0C;&#x5B83;&#x95EE;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x8C01;&#x6765;&#x8BAD;&#x7EC3;&#x201C;&#x8BE5;&#x68C0;&#x7D22;&#x4EC0;&#x4E48;&#x201D;&#xFF1F;
&#x8C01;&#x6765;&#x8BAD;&#x7EC3;&#x201C;&#x8BE5;&#x4FE1;&#x54EA;&#x6761;&#x6280;&#x80FD;&#x201D;&#xFF1F;
&#x8C01;&#x6765;&#x8BAD;&#x7EC3;&#x201C;&#x4EC0;&#x4E48;&#x7ECF;&#x9A8C;&#x503C;&#x5F97;&#x5199;&#x8FDB;&#x5E93;&#x201D;&#xFF1F;
</code></pre>
<p>&#x5B83;&#x628A;&#x6280;&#x80FD;&#x5E93;&#x4ECE;&#x201C;&#x88AB;&#x52A8;&#x5B58;&#x50A8;&#x201D;&#x53D8;&#x6210;&#x201C;RL &#x8BAD;&#x7EC3;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x201D;&#x3002;</p>
<h2 id="&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x542F;&#x53D1;"><a href="#&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x542F;&#x53D1;"></a>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x542F;&#x53D1;</h2>
<p>&#x6211;&#x89C9;&#x5F97;&#x5B83;&#x6700;&#x91CD;&#x8981;&#x7684;&#x70B9;&#x662F;&#xFF1A;</p>
<blockquote>
<p>Agent &#x7684;&#x957F;&#x671F;&#x7ECF;&#x9A8C;&#x4E0D;&#x5E94;&#x8BE5;&#x53EA;&#x662F;&#x65E5;&#x5FD7;&#x3001;&#x8BB0;&#x5FC6;&#x6216; prompt &#x7247;&#x6BB5;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x662F;&#x80FD;&#x88AB;&#x9009;&#x62E9;&#x3001;&#x4F7F;&#x7528;&#x3001;&#x66F4;&#x65B0;&#x3001;&#x6DD8;&#x6C70;&#x7684;&#x7B56;&#x7565;&#x8D44;&#x4EA7;&#x3002;</p>
</blockquote>
<p>&#x8FD9;&#x5BF9;&#x5DE5;&#x7A0B;&#x7CFB;&#x7EDF;&#x5F88;&#x6709;&#x542F;&#x53D1;&#x3002;&#x5F88;&#x591A; Agent &#x7CFB;&#x7EDF;&#x4F1A;&#x8D8A;&#x8DD1;&#x8D8A;&#x81C3;&#x80BF;&#xFF1A;</p>
<pre><code class="language-text">trace &#x8D8A;&#x5B58;&#x8D8A;&#x591A;
reflection &#x8D8A;&#x5199;&#x8D8A;&#x957F;
memory &#x8D8A;&#x68C0;&#x7D22;&#x8D8A;&#x6742;
</code></pre>
<p>Skill1 &#x63D0;&#x9192;&#x6211;&#x4EEC;&#xFF0C;&#x5173;&#x952E;&#x4E0D;&#x662F;&#x201C;&#x5B58;&#x66F4;&#x591A;&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5B58;&#x4E0B;&#x6765;&#x7684;&#x4E1C;&#x897F;&#x6709;&#x6CA1;&#x6709; utility&#xFF1F;
&#x68C0;&#x7D22;&#x65F6;&#x80FD;&#x4E0D;&#x80FD;&#x8DEF;&#x7531;&#x5230;&#x6B63;&#x786E;&#x4EFB;&#x52A1;&#xFF1F;
&#x65B0;&#x7ECF;&#x9A8C;&#x662F;&#x5426;&#x771F;&#x7684;&#x8D85;&#x8FC7;&#x65E7;&#x7ECF;&#x9A8C;&#xFF1F;
&#x65E7;&#x6280;&#x80FD;&#x662F;&#x5426;&#x9700;&#x8981;&#x6DD8;&#x6C70;&#xFF1F;
</code></pre>
<p>&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;Agent memory / skill library &#x7684;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#x4E0D;&#x662F;&#x5BB9;&#x91CF;&#xFF0C;&#x800C;&#x662F;&#x6CBB;&#x7406;&#x3002;</p>
<h2 id="&#x8FB9;&#x754C;&#x548C;&#x98CE;&#x9669;"><a href="#&#x8FB9;&#x754C;&#x548C;&#x98CE;&#x9669;"></a>&#x8FB9;&#x754C;&#x548C;&#x98CE;&#x9669;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x4E5F;&#x6709;&#x660E;&#x663E;&#x8FB9;&#x754C;&#xFF1A;</p>
<ol>
<li>&#x5B9E;&#x9A8C;&#x4E3B;&#x8981;&#x5728; ALFWorld &#x548C; WebShop &#x8FD9;&#x79CD;&#x6709;&#x660E;&#x786E;&#x6210;&#x529F;&#x4FE1;&#x53F7;&#x7684;&#x73AF;&#x5883;&#x91CC;&#x3002;&#x771F;&#x5B9E;&#x529E;&#x516C;&#x3001;&#x4EE3;&#x7801;&#x3001;&#x8FD0;&#x8425;&#x573A;&#x666F;&#x7684; reward &#x5F80;&#x5F80;&#x66F4;&#x7A00;&#x758F;&#x3001;&#x66F4;&#x96BE;&#x5B9A;&#x4E49;&#x3002;</li>
<li>&#x6280;&#x80FD;&#x5E93;&#x4E0A;&#x9650;&#x8BBE;&#x4E3A; 5000&#xFF0C;&#x4EFB;&#x52A1;&#x66F4;&#x591A;&#x6837;&#x4EE5;&#x540E;&#xFF0C;&#x56FA;&#x5B9A;&#x5BB9;&#x91CF;&#x53EF;&#x80FD;&#x4E0D;&#x591F;&#xFF0C;&#x9700;&#x8981;&#x5C42;&#x7EA7;&#x7D22;&#x5F15;&#x3001;&#x805A;&#x7C7B;&#x3001;&#x7248;&#x672C;&#x7BA1;&#x7406;&#x548C;&#x6DD8;&#x6C70;&#x7B56;&#x7565;&#x3002;</li>
<li>&#x8BAD;&#x7EC3;&#x6210;&#x672C;&#x4E0D;&#x4F4E;&#x3002;&#x8BBA;&#x6587;&#x91CC; Skill1 &#x5728; 8 &#x5F20; H800 &#x4E0A;&#x8BAD;&#x7EC3;&#xFF0C;&#x5355;&#x6B65;&#x8017;&#x65F6;&#x7EA6;&#x4E3A;&#x65E0;&#x6280;&#x80FD;&#x5E93; GRPO &#x7684; 1.3 &#x5230; 1.7 &#x500D;&#x3002;</li>
<li>&#x81EA;&#x52A8;&#x79EF;&#x7D2F;&#x6280;&#x80FD;&#x4F1A;&#x5E26;&#x6765;&#x5BA1;&#x8BA1;&#x548C;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x3002;&#x6280;&#x80FD;&#x5E93;&#x5982;&#x679C;&#x88AB; prompt injection &#x6C61;&#x67D3;&#xFF0C;&#x53EF;&#x80FD;&#x6C89;&#x6DC0;&#x51FA;&#x5371;&#x9669;&#x884C;&#x52A8;&#x5E8F;&#x5217;&#x3002;</li>
</ol>
<p>&#x6240;&#x4EE5;&#x5B83;&#x4E0D;&#x662F;&#x201C;&#x8BA9; Agent &#x81EA;&#x5DF1;&#x65E0;&#x9650;&#x5B66;&#x4E60;&#x5C31;&#x5B8C;&#x4E8B;&#x4E86;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x7ED9;&#x4E86;&#x4E00;&#x4E2A;&#x66F4;&#x6E05;&#x6670;&#x7684;&#x65B9;&#x5411;&#xFF1A;</p>
<pre><code class="language-text">&#x81EA;&#x6211;&#x8FDB;&#x5316;&#x9700;&#x8981;&#x6280;&#x80FD;&#x5E93;&#x3002;
&#x6280;&#x80FD;&#x5E93;&#x9700;&#x8981;&#x7EDF;&#x4E00;&#x8BAD;&#x7EC3;&#x3002;
&#x7EDF;&#x4E00;&#x8BAD;&#x7EC3;&#x8FD8;&#x9700;&#x8981;&#x6CBB;&#x7406;&#x3001;&#x5BA1;&#x8BA1;&#x548C;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x3002;
</code></pre>
<h2 id="&#x53C2;&#x8003;"><a href="#&#x53C2;&#x8003;"></a>&#x53C2;&#x8003;</h2>
<ul>
<li><a href="https://arxiv.org/abs/2605.06130">Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning</a></li>
<li><a href="https://arxiv.org/html/2605.06130v3">&#x8BBA;&#x6587; HTML &#x7248;&#x672C;</a></li>
</ul>
`,E=[{level:2,title:"先用一个例子说明",children:[]},{level:2,title:"问题不只是“有没有技能库”",children:[]},{level:2,title:"Skill1 的完整工作流",children:[{level:3,title:"1. 生成 query",children:[]},{level:3,title:"2. 重新排序候选技能",children:[]},{level:3,title:"3. 使用技能执行任务",children:[]},{level:3,title:"4. 提炼新技能",children:[]}]},{level:2,title:"关键设计：一个任务结果，拆成三种 credit",children:[{level:3,title:"Utilization：直接看这次是否成功",children:[]},{level:3,title:"Selection：看技能的长期趋势",children:[]},{level:3,title:"Distillation：看这次经验是否超过已有技能库",children:[]}]},{level:2,title:"为什么这叫 co-evolution？",children:[]},{level:2,title:"实验结果说明了什么？",children:[]},{level:2,title:"和 Reflexion / Memory 类方法的区别",children:[]},{level:2,title:"这篇论文的启发",children:[]},{level:2,title:"边界和风险",children:[]},{level:2,title:"参考",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
