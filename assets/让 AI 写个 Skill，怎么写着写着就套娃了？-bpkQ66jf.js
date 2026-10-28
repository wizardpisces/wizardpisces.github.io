const x={},F=`<!-- 写作锚点
读者收获：看懂 Skill 怎样生成另一个 Skill，能把自己的创建过程或现成 creator 整理成适合自己的版本，并明确交付时要检查什么。
核心判断：做事的方法能保存成 Skill，编写 Skill、定制 creator 的方法也能保存；每一层都由 Agent 读取规则并执行。
如何推进：从用 Skill 创建面试评价 Skill 的经历出发，拆开第一层套娃，用校验和试跑展示 creator 可以怎样设计，再用直接对话演示怎样保存、组合创建方法，收束到“套娃的套娃”。
-->
<h1 id="&#x8BA9; AI &#x5199;&#x4E2A; Skill&#xFF0C;&#x600E;&#x4E48;&#x5199;&#x7740;&#x5199;&#x7740;&#x5C31;&#x5957;&#x5A03;&#x4E86;&#xFF1F;"><a href="#&#x8BA9; AI &#x5199;&#x4E2A; Skill&#xFF0C;&#x600E;&#x4E48;&#x5199;&#x7740;&#x5199;&#x7740;&#x5C31;&#x5957;&#x5A03;&#x4E86;&#xFF1F;"></a>&#x8BA9; AI &#x5199;&#x4E2A; Skill&#xFF0C;&#x600E;&#x4E48;&#x5199;&#x7740;&#x5199;&#x7740;&#x5C31;&#x5957;&#x5A03;&#x4E86;&#xFF1F;</h1>
<p>&#x6700;&#x8FD1;&#x6211;&#x7ED9; Codex &#x589E;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7; Skill&#x3002;</p>
<p>&#x5B83;&#x8981;&#x8BFB;&#x53D6;&#x5019;&#x9009;&#x4EBA;&#x7684;&#x7B80;&#x5386;&#x3001;&#x9762;&#x8BD5;&#x8BB0;&#x5F55;&#x548C;&#x7B14;&#x8BD5;&#x7ED3;&#x679C;&#xFF0C;&#x6574;&#x7406;&#x51FA;&#x53EF;&#x4EE5;&#x5F55;&#x5165;&#x62DB;&#x8058;&#x7CFB;&#x7EDF;&#x7684;&#x8BC4;&#x4EF7;&#x3002;&#x8981;&#x6C42;&#xFF1A;&#x5224;&#x65AD;&#x8981;&#x6709;&#x8BC1;&#x636E;&#xFF0C;&#x6750;&#x6599;&#x4E0D;&#x591F;&#x5C31;&#x522B;&#x786C;&#x7ED9;&#x5F55;&#x7528;&#x7ED3;&#x8BBA;&#xFF0C;&#x6392;&#x9664;&#x4E0E;&#x5C97;&#x4F4D;&#x65E0;&#x5173;&#x7684;&#x4E2A;&#x4EBA;&#x4FE1;&#x606F;&#xFF0C;&#x63A7;&#x5236;&#x5728;&#x4E94;&#x767E;&#x5B57;&#x4EE5;&#x5185;&#x3002;</p>
<p>&#x5E2E;&#x6211;&#x5199;&#x5B83;&#x7684;&#xFF0C;&#x4E5F;&#x662F;&#x4E00;&#x4E2A; Skill&#xFF0C;&#x53EB; <code>skill-creator</code>&#x3002;</p>
<p><strong>&#x6211;&#x7528;&#x4E00;&#x4E2A; Skill&#xFF0C;&#x521B;&#x5EFA;&#x4E86;&#x53E6;&#x4E00;&#x4E2A; Skill&#x3002;</strong></p>
<h2 id="&#x5199; Skill &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5199;&#x6210; Skill"><a href="#&#x5199; Skill &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5199;&#x6210; Skill"></a>&#x5199; Skill &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5199;&#x6210; Skill</h2>
<p>&#x5E73;&#x65F6;&#x5199;&#x4E00;&#x4E2A; Skill&#xFF0C;&#x6211;&#x4EEC;&#x5F97;&#x60F3;&#x6E05;&#x695A;&#xFF1A;&#x5B83;&#x5904;&#x7406;&#x4EC0;&#x4E48;&#x4EFB;&#x52A1;&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x7528;&#xFF0C;&#x5177;&#x4F53;&#x600E;&#x4E48;&#x505A;&#xFF0C;&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x811A;&#x672C;&#x548C;&#x53C2;&#x8003;&#x8D44;&#x6599;&#x3002;</p>
<p>&#x8FD9;&#x4E9B;&#x4E8B;&#x6BCF;&#x6B21;&#x90FD;&#x8981;&#x8003;&#x8651;&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x628A;&#x5199;&#x6CD5;&#x6574;&#x7406;&#x6210;&#x4E00;&#x5957;&#x6B65;&#x9AA4;&#xFF0C;&#x4EA4;&#x7ED9; Agent &#x7167;&#x7740;&#x505A;&#x3002;<code>skill-creator</code> &#x5C31;&#x662F;&#x8FD9;&#x6837;&#x4E00;&#x4EFD;&#x4E13;&#x95E8;&#x6307;&#x5BFC; Agent &#x7F16;&#x5199; Skill &#x7684;&#x8BF4;&#x660E;&#x3002;</p>
<pre><code class="language-text">&#x4F60;&#x8BF4;&#xFF1A;&#x5E2E;&#x6211;&#x505A;&#x4E00;&#x4E2A;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7; Skill
              &#x2193;
Agent &#x8BFB;&#x53D6; skill-creator
&#x6309;&#x5B83;&#x7684;&#x6B65;&#x9AA4;&#x8BE2;&#x95EE;&#x9700;&#x6C42;&#x3001;&#x6574;&#x7406;&#x89C4;&#x5219;&#x3001;&#x751F;&#x6210;&#x6587;&#x4EF6;
              &#x2193;
&#x5F97;&#x5230;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7; Skill
              &#x2193;
&#x4EE5;&#x540E;&#x8BC4;&#x4EF7;&#x5019;&#x9009;&#x4EBA;&#x65F6;&#xFF0C;Agent &#x8BFB;&#x53D6;&#x8FD9;&#x4EFD;&#x65B0; Skill
</code></pre>
<p>&#x4E24;&#x4EFD; Skill &#x5206;&#x5DE5;&#x4E0D;&#x540C;&#xFF1A;&#x524D;&#x4E00;&#x4E2A;&#x53EB; skill-creator &#x6559;&#x600E;&#x4E48;&#x751F;&#x6210;&#x4E00;&#x4EFD; skill&#xFF0C;&#x540E;&#x9762;&#x8FD9;&#x4E2A; skill &#x624D;&#x662F;&#x54B1;&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x771F;&#x6B63;&#x9700;&#x8981;&#x7684;&#xFF0C;&#x6559; AGENT &#x600E;&#x4E48;&#x8BC4;&#x4EF7;&#x5019;&#x9009;&#x4EBA;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F; Skill &#x7684;&#x7B2C;&#x4E00;&#x5C42;&#x5957;&#x5A03;</p>
<h2 id="&#x5982;&#x4F55;&#x624D;&#x80FD;&#x7B97;&#x521B;&#x5EFA;&#x5B8C;&#x6210; skill&#xFF1F;"><a href="#&#x5982;&#x4F55;&#x624D;&#x80FD;&#x7B97;&#x521B;&#x5EFA;&#x5B8C;&#x6210; skill&#xFF1F;"></a>&#x5982;&#x4F55;&#x624D;&#x80FD;&#x7B97;&#x521B;&#x5EFA;&#x5B8C;&#x6210; skill&#xFF1F;</h2>
<p>&#x9762;&#x8BD5;&#x8BC4;&#x4EF7; Skill &#x5199;&#x5B8C;&#xFF0C;&#x6821;&#x9A8C;&#x811A;&#x672C;&#x8FD4;&#x56DE;&#xFF1A;</p>
<pre><code class="language-text">Skill is valid!
</code></pre>
<p>&#x8FD9;&#x4E2A; valid &#x68C0;&#x67E5;&#x7684;&#x662F;&#x5565;&#xFF1F;</p>
<p>&#x6700;&#x8F7B;&#x7684;&#x4E00;&#x79CD;&#x4EA4;&#x4ED8;&#x65B9;&#x5F0F;&#xFF0C;&#x662F;&#x5148;&#x628A;&#x89C4;&#x5219;&#x548C;&#x6587;&#x4EF6;&#x5199;&#x597D;&#xFF0C;&#x518D;&#x505A;&#x7ED3;&#x6784;&#x6821;&#x9A8C;&#xFF1A;</p>
<pre><code class="language-text">&#x786E;&#x8BA4;&#x9700;&#x6C42; &#x2192; &#x751F;&#x6210; Skill &#x2192; &#x6821;&#x9A8C;&#x7ED3;&#x6784; &#x2192; &#x4EA4;&#x7ED9;&#x7528;&#x6237;
</code></pre>
<p>OpenAI &#x5B98;&#x65B9; creator &#x4F1A;&#x6307;&#x5BFC; Agent &#x660E;&#x786E;&#x7528;&#x9014;&#x3001;&#x7EC4;&#x7EC7;&#x89C4;&#x5219;&#x548C;&#x8D44;&#x6E90;&#xFF1B;&#x914D;&#x5957;&#x7684; <code>quick_validate.py</code> &#x68C0;&#x67E5;&#x6587;&#x4EF6;&#x5934;&#x90E8;&#x3001;&#x5FC5;&#x586B;&#x5B57;&#x6BB5;&#x548C;&#x547D;&#x540D;&#x89C4;&#x5219;&#x3002;&#x4E0A;&#x9762;&#x7684; <code>Skill is valid!</code>&#xFF0C;&#x5C31;&#x662F;&#x8FD9;&#x7C7B;&#x68C0;&#x67E5;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x5B83;&#x80FD;&#x53D1;&#x73B0;&#x6587;&#x4EF6;&#x683C;&#x5F0F;&#x4E0D;&#x5BF9;&#xFF0C;&#x5374;&#x4E0D;&#x4F1A;&#x62FF;&#x4E00;&#x4EFD;&#x771F;&#x5B9E;&#x7684;&#x9762;&#x8BD5;&#x8BB0;&#x5F55;&#x8DD1;&#x4E00;&#x904D;&#xFF0C;&#x770B;&#x770B;&#x751F;&#x6210;&#x7684;&#x8BC4;&#x4EF7;&#x6709;&#x6CA1;&#x6709;&#x7F16;&#x9020;&#x4E8B;&#x5B9E;&#x3002;</p>
<p>Anthropic &#x7684;&#x5B98;&#x65B9; creator &#x5219;&#x4F1A;&#x771F;&#x7684;&#x53BB;&#x8DD1;&#x4E00;&#x904D;&#xFF0C;&#x628A;&#x8BD5;&#x8DD1;&#x548C;&#x8BC4;&#x5BA1;&#x4E5F;&#x7F16;&#x8FDB;&#x4E86;&#x521B;&#x5EFA;&#x6D41;&#x7A0B;&#x3002;&#x8349;&#x7A3F;&#x5199;&#x597D;&#x540E;&#xFF0C;&#x751F;&#x6210;&#x6D4B;&#x8BD5;&#x4EFB;&#x52A1;&#xFF0C;&#x8BA9; Agent &#x5B9E;&#x9645;&#x6267;&#x884C;&#xFF0C;&#x4FDD;&#x5B58;&#x8F93;&#x51FA;&#xFF0C;&#x68C0;&#x67E5;&#x7ED3;&#x679C;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x53CD;&#x9988;&#x4FEE;&#x6539;&#x3002;</p>
<p>&#x8FD8;&#x662F;&#x62FF;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7;&#x6765;&#x8BF4;&#xFF0C;&#x5047;&#x8BBE;&#x7ED9;&#x5B83;&#x8FD9;&#x6837;&#x4E00;&#x4EFD;&#x6750;&#x6599;&#xFF1A;</p>
<pre><code class="language-text">&#x6C9F;&#x901A;&#x611F;&#x89C9;&#x4E0D;&#x9519;&#xFF0C;&#x6280;&#x672F;&#x90E8;&#x5206;&#x6CA1;&#x6765;&#x5F97;&#x53CA;&#x95EE;&#x3002;
</code></pre>
<p>&#x7136;&#x540E;&#x8981;&#x6C42;&#xFF1A;&#x201C;&#x76F4;&#x63A5;&#x7ED9;&#x4E2A;&#x5F55;&#x7528;&#x5EFA;&#x8BAE;&#x3002;&#x201D;</p>
<p>&#x5982;&#x679C;&#x8BC4;&#x4EF7; skill &#x8F93;&#x51FA;&#x201C;&#x6280;&#x672F;&#x80FD;&#x529B;&#x624E;&#x5B9E;&#xFF0C;&#x5EFA;&#x8BAE;&#x5F55;&#x7528;&#x201D;&#xFF0C;&#x5C31;&#x66B4;&#x9732;&#x4E86;&#x95EE;&#x9898;&#xFF1A;&#x6587;&#x4EF6;&#x91CC;&#x7684;&#x201C;&#x5224;&#x65AD;&#x8981;&#x6709;&#x8BC1;&#x636E;&#x201D;&#xFF0C;&#x5B9E;&#x9645;&#x6267;&#x884C;&#x65F6;&#x5374;&#x6CA1;&#x9075;&#x5B88;&#x3002;skill-creator &#x53EF;&#x4EE5;&#x636E;&#x6B64;&#x8865;&#x5145;&#x89C4;&#x5219;&#x8FED;&#x4EE3; skill &#x540E;&#x91CD;&#x8DD1;&#x3002;</p>
<pre><code class="language-text">&#x786E;&#x8BA4;&#x9700;&#x6C42; &#x2192; &#x751F;&#x6210; Skill &#x2192; &#x62FF;&#x6750;&#x6599;&#x8BD5;&#x8DD1;
                            &#x2193;
                     &#x68C0;&#x67E5;&#x8BC4;&#x4EF7;&#x662F;&#x5426;&#x6709;&#x4F9D;&#x636E;
                            &#x2193;
                     &#x6709;&#x95EE;&#x9898;&#x5C31;&#x4FEE;&#x6539;&#x3001;&#x91CD;&#x8DD1;
                            &#x2193;
                         &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
</code></pre>
<p>&#x8FD8;&#x53EF;&#x80FD;&#x5E2E;&#x4F60;&#x505A;&#x5BF9;&#x7167;&#x5B9E;&#x9A8C;&#xFF1A;&#x540C;&#x4E00;&#x4EFD;&#x6750;&#x6599;&#xFF0C;&#x4E0D;&#x7528; Skill &#x8DD1;&#x4E00;&#x6B21;&#xFF0C;&#x7528;&#x5B83;&#x518D;&#x8DD1;&#x4E00;&#x6B21;&#x3002;&#x5426;&#x5219;&#x8BC4;&#x4EF7;&#x867D;&#x7136;&#x4E0D;&#x9519;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x662F;&#x6A21;&#x578B;&#x539F;&#x672C;&#x5C31;&#x4F1A;&#xFF0C;&#x65B0;&#x589E;&#x7684;&#x89C4;&#x5219;&#x6CA1;&#x5E2E;&#x4E0A;&#x5FD9;&#x3002;Anthropic &#x7684;&#x6D41;&#x7A0B;&#x5305;&#x542B;&#x8FD9;&#x7C7B;&#x5BF9;&#x7167;&#xFF0C;&#x4FEE;&#x6539;&#x5DF2;&#x6709; Skill &#x65F6;&#x8FD8;&#x4F1A;&#x4E0E;&#x65E7;&#x7248;&#x6BD4;&#x8F83;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x4ECE;&#x201C;&#x5E2E;&#x6211;&#x5199;&#x4E2A; Skill&#x201D;&#xFF0C;&#x53D8;&#x6210;&#x4E86;&#x201C;&#x5199;&#x597D;&#x4EE5;&#x540E;&#xFF0C;&#x5E2E;&#x6211;&#x770B;&#x770B;&#x5B83;&#x5230;&#x5E95;&#x6709;&#x6CA1;&#x6709;&#x7528;&#x201D;&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x8FD9;&#x4E2A;&#x590D;&#x6742;&#x5EA6;&#x4F1A;&#x5E26;&#x6765;&#x76F8;&#x5E94;&#x7684;&#x4EE3;&#x4EF7;&#xFF1A;&#x591A;&#x8DD1;&#x4EFB;&#x52A1;&#x3001;&#x591A;&#x7B49;&#x7ED3;&#x679C;&#xFF0C;&#x8FD8;&#x8981;&#x6709;&#x4EBA;&#x68C0;&#x67E5;&#x8BC4;&#x4EF7;&#x662F;&#x5426;&#x5408;&#x7406;&#xFF0C;&#x8FD9;&#x4E9B;&#x90FD;&#x662F;&#x5F00;&#x9500;&#x3002;</p>
<h2 id="&#x5199; creator &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5B58;&#x4E0B;&#x6765;&#x5417;&#xFF1F;"><a href="#&#x5199; creator &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5B58;&#x4E0B;&#x6765;&#x5417;&#xFF1F;"></a>&#x5199; creator &#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x80FD;&#x5B58;&#x4E0B;&#x6765;&#x5417;&#xFF1F;</h2>
<p>&#x524D;&#x9762;&#x6BD4;&#x8F83;&#x7684;&#x662F;&#x6709;&#x4E86; skill-creator &#x5199;&#x597D; skill &#x4EE5;&#x540E;&#x7684;&#x68C0;&#x67E5;&#x673A;&#x5236;&#x3002;&#x90A3;&#x4E48;&#x751F;&#x6210; skill &#x7684; skill-creator &#x672C;&#x8EAB;&#x662F;&#x600E;&#x4E48;&#x5F97;&#x51FA;&#x7684;&#xFF1F;</p>
<p>&#x8FD9;&#x91CC;&#x6709; 2 &#x5957;&#x7B56;&#x7565;&#xFF1A;</p>
<p><strong>&#x4E00;&#x79CD;&#x662F;&#x628A;&#x4F60;&#x5E26; Agent &#x5199; Skill &#x7684;&#x8FC7;&#x7A0B;&#x5B58;&#x4E0B;&#x6765;&#x3002;</strong> &#x6CBF;&#x7528;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7;&#xFF0C;&#x5047;&#x8BBE;&#x4F60;&#x8FD9;&#x6837;&#x8DDF; Agent &#x5BF9;&#x8BDD;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#xFF1A;&#x6309;&#x8FD9;&#x4E9B;&#x8981;&#x6C42;&#xFF0C;&#x5199;&#x4E00;&#x4E2A;&#x9762;&#x8BD5;&#x8BC4;&#x4EF7; Skill&#x3002;
&#x4F60;&#xFF1A;&#x62FF;&#x8FD9;&#x4EFD;&#x9762;&#x8BD5;&#x8BB0;&#x5F55;&#x8BD5;&#x4E00;&#x4E0B;&#xFF0C;&#x628A;&#x8BC4;&#x4EF7;&#x7ED9;&#x6211;&#x770B;&#x3002;
&#x4F60;&#xFF1A;&#x8FD9;&#x91CC;&#x6CA1;&#x95EE;&#x6280;&#x672F;&#xFF0C;&#x600E;&#x4E48;&#x5C31;&#x5199;&#x201C;&#x6280;&#x672F;&#x624E;&#x5B9E;&#x201D;&#xFF1F;&#x4FEE;&#x6539;&#x89C4;&#x5219;&#xFF0C;&#x518D;&#x8BD5;&#x3002;
</code></pre>
<p>&#x7B49;&#x7ED3;&#x679C;&#x6EE1;&#x610F;&#x4E86;&#xFF0C;&#x518D;&#x544A;&#x8BC9;&#x5B83;&#xFF1A;&#x201C;&#x628A;&#x521A;&#x624D;&#x5199;&#x8349;&#x7A3F;&#x3001;&#x8BD5;&#x8DD1;&#x3001;&#x6309;&#x53CD;&#x9988;&#x4FEE;&#x6539;&#x7684;&#x6B65;&#x9AA4;&#xFF0C;&#x6574;&#x7406;&#x6210;&#x4E00;&#x4E2A; skill-creator&#x3002;&#x4EE5;&#x540E;&#x5E2E;&#x6211;&#x5199;&#x5176;&#x4ED6; Skill&#xFF0C;&#x4E5F;&#x6309;&#x8FD9;&#x51E0;&#x6B65;&#x6765;&#x3002;&#x201D;</p>
<p>&#x5F97;&#x5230;&#x7684; creator &#x5C31;&#x4F1A;&#x8981;&#x6C42; Agent&#xFF1A;&#x5148;&#x5199;&#x8349;&#x7A3F;&#xFF0C;&#x518D;&#x62FF;&#x6750;&#x6599;&#x8BD5;&#x8DD1;&#xFF0C;&#x7ED9;&#x7528;&#x6237;&#x68C0;&#x67E5;&#xFF0C;&#x6309;&#x53CD;&#x9988;&#x4FEE;&#x6539;&#x3002;&#x4E0B;&#x6B21;&#x5199; Skill&#xFF0C;&#x4F60;&#x5C31;&#x4E0D;&#x7528;&#x628A;&#x8FD9;&#x51E0;&#x53E5;&#x91CD;&#x65B0;&#x4EA4;&#x4EE3;&#x4E00;&#x904D;&#x3002;</p>
<p><strong>&#x53E6;&#x4E00;&#x79CD;&#x662F;&#x62FF;&#x73B0;&#x6210;&#x7684; creator &#x6765;&#x6539;&#x3002;</strong> &#x628A;&#x524D;&#x9762;&#x4E24;&#x4EFD;&#x5B98;&#x65B9; creator &#x4EA4;&#x7ED9; Agent&#xFF0C;&#x76F4;&#x63A5;&#x8BF4;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#xFF1A;&#x53C2;&#x8003;&#x8FD9;&#x4E24;&#x4EFD;&#xFF0C;&#x5E2E;&#x6211;&#x5199;&#x4E00;&#x4E2A;&#x56E2;&#x961F;&#x7528;&#x7684; skill-creator&#x3002;
&#x4F60;&#xFF1A;&#x6587;&#x4EF6;&#x4FDD;&#x6301;&#x7B80;&#x6D01;&#xFF0C;&#x4F46;&#x5199;&#x5B8C;&#x5FC5;&#x987B;&#x8BD5;&#x8DD1;&#x3002;
&#x4F60;&#xFF1A;&#x5148;&#x7ED9;&#x6211;&#x4E24;&#x4E2A;&#x7528;&#x4F8B;&#xFF0C;&#x6211;&#x786E;&#x8BA4;&#x540E;&#x518D;&#x8DD1;&#xFF1B;&#x6709;&#x95EE;&#x9898;&#x5C31;&#x4FEE;&#x6539;&#x3001;&#x91CD;&#x8DD1;&#x3002;
</code></pre>
<p>&#x65B0; creator &#x91CC;&#x5C31;&#x8BE5;&#x6709;&#x201C;&#x751F;&#x6210;&#x8349;&#x7A3F;&#x3001;&#x6821;&#x9A8C;&#x7ED3;&#x6784;&#x3001;&#x786E;&#x8BA4;&#x7528;&#x4F8B;&#x3001;&#x8BD5;&#x8DD1;&#x3001;&#x6309;&#x53CD;&#x9988;&#x4FEE;&#x6539;&#x201D;&#x8FD9;&#x4E9B;&#x6B65;&#x9AA4;&#x3002;&#x5982;&#x679C;&#x5B83;&#x53EA;&#x7559;&#x4E0B;&#x4E86;&#x7ED3;&#x6784;&#x6821;&#x9A8C;&#xFF0C;&#x4F60;&#x5C31;&#x80FD;&#x6307;&#x51FA;&#xFF1A;&#x201C;&#x5C11;&#x4E86;&#x8BD5;&#x8DD1;&#xFF0C;&#x628A;&#x8FD9;&#x4E00;&#x6B65;&#x8865;&#x4E0A;&#x3002;&#x201D;</p>
<p>&#x4EE5;&#x540E;&#x60F3;&#x6362;&#x4E00;&#x79CD;&#x4EA4;&#x4ED8;&#x65B9;&#x5F0F;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x8981;&#x6C42;&#xFF1A;&#x201C;&#x8FD9;&#x4E2A;&#x7248;&#x672C;&#x7ED9;&#x6211;&#x4E2A;&#x4EBA;&#x8BD5;&#x7528;&#xFF0C;&#x5148;&#x4EA4;&#x8349;&#x7A3F;&#xFF0C;&#x6682;&#x65F6;&#x4E0D;&#x8DD1;&#x7528;&#x4F8B;&#x3002;&#x201D;&#x540C;&#x6837;&#x7684;&#x53C2;&#x8003;&#x6750;&#x6599;&#xFF0C;&#x5C31;&#x80FD;&#x6309;&#x8981;&#x6C42;&#x505A;&#x51FA;&#x4E0D;&#x540C;&#x7248;&#x672C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x7ECF;&#x5E38;&#x8981;&#x8FD9;&#x6837;&#x5B9A;&#x5236; creator&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x518D;&#x8BF4;&#x4E00;&#x53E5;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#xFF1A;&#x628A;&#x521A;&#x624D;&#x53C2;&#x8003;&#x73B0;&#x6210;&#x6D41;&#x7A0B;&#x3001;&#x6309;&#x6211;&#x7684;&#x8981;&#x6C42;&#x7EC4;&#x5408;&#x65B0; creator &#x7684;&#x65B9;&#x6CD5;&#xFF0C;
&#x4E5F;&#x5B58;&#x6210;&#x4E00;&#x4E2A; Skill&#x3002;&#x4EE5;&#x540E;&#x5148;&#x95EE;&#x6211;&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x6B65;&#x9AA4;&#xFF0C;&#x518D;&#x5E2E;&#x6211;&#x751F;&#x6210; creator&#x3002;
</code></pre>
<p>&#x8FD9;&#x4EFD;&#x4E13;&#x95E8;&#x5E2E;&#x4F60;&#x5B9A;&#x5236; creator &#x7684; Skill&#xFF0C;&#x5C31;&#x53EF;&#x4EE5;&#x53EB; <code>skill-creator-creator</code>&#x3002;&#x5B83;&#x4FDD;&#x5B58;&#x7684;&#x662F;&#x521A;&#x624D;&#x5DF2;&#x7ECF;&#x505A;&#x8FC7;&#x7684;&#x7EC4;&#x5408;&#x65B9;&#x6CD5;&#xFF0C;&#x4E0D;&#x7528;&#x518D;&#x51ED;&#x7A7A;&#x60F3;&#x4E00;&#x5957;&#x65B0;&#x7684;&#x6D41;&#x7A0B;&#x3002;</p>
<p>&#x5199; Skill &#x7684;&#x65B9;&#x6CD5;&#x5B58;&#x6210; Skill&#xFF0C;&#x8FDE;&#x5B9A;&#x5236; creator &#x7684;&#x65B9;&#x6CD5;&#x4E5F;&#x5B58;&#x6210; Skill&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x5957;&#x5A03;&#x7684;&#x5957;&#x5A03;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>OpenAI&#xFF0C;Skill Creator&#xFF1A;https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md</li>
<li>OpenAI&#xFF0C;Skill Creator &#x6821;&#x9A8C;&#x811A;&#x672C;&#xFF1A;https://github.com/openai/skills/blob/main/skills/.system/skill-creator/scripts/quick_validate.py</li>
<li>Anthropic&#xFF0C;Skill Creator&#xFF1A;https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;</em></p>
`,E=[{level:1,title:"让 AI 写个 Skill，怎么写着写着就套娃了？",children:[{level:2,title:"写 Skill 的方法，也能写成 Skill",children:[]},{level:2,title:"如何才能算创建完成 skill？",children:[]},{level:2,title:"写 creator 的方法，也能存下来吗？",children:[]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
