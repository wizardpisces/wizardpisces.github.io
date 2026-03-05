const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-05-17</em></p>
<p>Princeton &#x548C; Google DeepMind &#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>Tree of Thoughts&#xFF08;ToT&#xFF09;</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2305.10601">Tree of Thoughts: Deliberate Problem Solving with Large Language Models</a>&#x300B;&#xFF09;&#x662F; LLM &#x63A8;&#x7406;&#x8303;&#x5F0F;&#x7684;&#x91CC;&#x7A0B;&#x7891;&#x5F0F;&#x5DE5;&#x4F5C;&#x3002;
&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x79CD;<strong>&#x5C06;&#x7ECF;&#x5178;&#x641C;&#x7D22;&#x7B97;&#x6CD5;&#xFF08;BFS/DFS&#xFF09;&#x4E0E; LLM &#x7684;&#x81EA;&#x6211;&#x8BC4;&#x4F30;&#x80FD;&#x529B;&#x76F8;&#x7ED3;&#x5408;</strong>&#x7684;&#x63A8;&#x7406;&#x6846;&#x67B6;&#x2014;&#x2014;&#x8BA9;&#x6A21;&#x578B;&#x4E0D;&#x518D;&#x6CBF;&#x5355;&#x4E00;&#x8DEF;&#x5F84;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x89E3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x50CF;&#x4EBA;&#x7C7B;&#x4E00;&#x6837;&#x5728;<strong>&#x601D;&#x7EF4;&#x6811;</strong>&#x4E0A;&#x8FDB;&#x884C;&#x63A2;&#x7D22;&#x3001;&#x8BC4;&#x4F30;&#x3001;&#x524D;&#x77BB;&#x548C;&#x56DE;&#x6EAF;&#xFF0C;&#x5B9E;&#x73B0;&quot;&#x6DF1;&#x601D;&#x719F;&#x8651;&quot;&#x5F0F;&#x7684;&#x95EE;&#x9898;&#x6C42;&#x89E3;&#x3002;</p>
<h2 id="ToT &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#ToT &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>ToT &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM &#x7684;&#x63A8;&#x7406;&#x662F;&quot;&#x5355;&#x884C;&#x9053;&quot;&#x7684;&#x2014;&#x2014;&#x4E00;&#x65E6;&#x8D70;&#x9519;&#xFF0C;&#x65E0;&#x6CD5;&#x56DE;&#x5934;&#x3002;</strong></p>
<p><img src="https://arxiv.org/html/2305.10601v2/x1.png" alt="Figure 1: &#x5404;&#x79CD; LLM &#x95EE;&#x9898;&#x6C42;&#x89E3;&#x65B9;&#x6CD5;&#x7684;&#x67B6;&#x6784;&#x5BF9;&#x6BD4;&#x3002;&#x6BCF;&#x4E2A;&#x77E9;&#x5F62;&#x6846;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&quot;&#x601D;&#x7EF4;&quot;&#xFF08;thought&#xFF09;&#xFF0C;&#x5373;&#x4F5C;&#x4E3A;&#x95EE;&#x9898;&#x6C42;&#x89E3;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#x7684;&#x8FDE;&#x8D2F;&#x8BED;&#x8A00;&#x5E8F;&#x5217;&#x3002;(a) IO &#x76F4;&#x63A5;&#x8F93;&#x5165;&#x8F93;&#x51FA;&#xFF1B;(b) CoT &#x5355;&#x94FE;&#x63A8;&#x7406;&#xFF1B;(c) CoT-SC &#x591A;&#x94FE;&#x6295;&#x7968;&#xFF1B;(d) ToT &#x6811;&#x72B6;&#x63A2;&#x7D22;&#x2014;&#x2014;&#x652F;&#x6301;&#x591A;&#x8DEF;&#x5F84;&#x751F;&#x6210;&#x3001;&#x8BC4;&#x4F30;&#x4E0E;&#x56DE;&#x6EAF;&#x3002;"></p>
<p>&#x65E0;&#x8BBA;&#x662F;&#x6807;&#x51C6;&#x7684; IO prompting &#x8FD8;&#x662F; Chain-of-Thought&#xFF08;CoT&#xFF09;&#xFF0C;LLM &#x7684;&#x63A8;&#x7406;&#x672C;&#x8D28;&#x4E0A;&#x90FD;&#x662F;<strong>&#x81EA;&#x56DE;&#x5F52;&#x7684;&#x5355;&#x94FE;&#x751F;&#x6210;</strong>&#x2014;&#x2014;&#x6BCF;&#x4E2A; token &#x53EA;&#x80FD;&#x4F9D;&#x8D56;&#x524D;&#x9762;&#x7684;&#x6240;&#x6709; token&#xFF0C;&#x4E00;&#x65E6;&#x67D0;&#x4E00;&#x6B65;&#x63A8;&#x7406;&#x51FA;&#x9519;&#xFF0C;&#x540E;&#x7EED;&#x6240;&#x6709;&#x6B65;&#x9AA4;&#x90FD;&#x5728;&#x9519;&#x8BEF;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x7EE7;&#x7EED;&#xFF0C;&#x4E14;&#x65E0;&#x6CD5;&#x56DE;&#x6EAF;&#x4FEE;&#x6B63;&#xFF1A;</p>
<pre><code>&#x3010;&#x5355;&#x94FE;&#x63A8;&#x7406;&#x7684;&#x6839;&#x672C;&#x7F3A;&#x9677;&#x3011;

  IO prompting&#xFF08;&#x65E0;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#xFF09;:
  &#x8F93;&#x5165; x &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2192; &#x8F93;&#x51FA; y
  &quot;4 9 10 13&quot;               &quot;4+9+10+13=36&quot; &#x2717;  &#x8D70;&#x4E86;&#x5C31;&#x8D70;&#x4E86;

  Chain-of-Thought&#xFF08;&#x6709;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#xFF0C;&#x4F46;&#x4ECD;&#x662F;&#x5355;&#x94FE;&#xFF09;:
  &#x8F93;&#x5165; x &#x2192; z&#x2081; &#x2192; z&#x2082; &#x2192; z&#x2083; &#x2192; &#x8F93;&#x51FA; y
  &quot;4 9 10 13&quot;  &quot;4+9=13&quot;  &quot;13-10=3&quot;  &quot;3&#xD7;13=39&quot; &#x2717;  &#x7B2C;&#x4E00;&#x6B65;&#x8D70;&#x504F;&#xFF0C;&#x540E;&#x9762;&#x5168;&#x9519;

  CoT-SC&#xFF08;&#x591A;&#x6761;&#x72EC;&#x7ACB;&#x94FE;&#xFF0C;&#x6295;&#x7968;&#x9009;&#x6700;&#x4F73;&#xFF09;:
  &#x8F93;&#x5165; x &#x2192; &#x94FE;&#x2081; &#x2192; y&#x2081; &#x2572;
         &#x2192; &#x94FE;&#x2082; &#x2192; y&#x2082; &#x2500;&#x2192; &#x6295;&#x7968; &#x2192; y_best
         &#x2192; &#x94FE;&#x2083; &#x2192; y&#x2083; &#x2571;
  &#x2191; &#x6BCF;&#x6761;&#x94FE;&#x5185;&#x90E8;&#x4ECD;&#x7136;&#x662F;&#x5355;&#x94FE;&#xFF0C;&#x53EA;&#x662F;&#x6700;&#x540E;&#x591A;&#x6570;&#x8868;&#x51B3;
  &#x2191; &#x94FE;&#x4E0E;&#x94FE;&#x4E4B;&#x95F4;&#x4E0D;&#x5171;&#x4EAB;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#x7684;&#x4FE1;&#x606F;
</code></pre>
<p>&#x8FD9;&#x5728;&#x9700;&#x8981;<strong>&#x63A2;&#x7D22;&#x3001;&#x89C4;&#x5212;&#x6216;&#x7B56;&#x7565;&#x6027;&#x524D;&#x77BB;</strong>&#x7684;&#x4EFB;&#x52A1;&#x4E2D;&#x662F;&#x81F4;&#x547D;&#x7684;&#x3002;&#x4EE5; Game of 24&#xFF08;&#x7528; 4 &#x4E2A;&#x6570;&#x548C;&#x56DB;&#x5219;&#x8FD0;&#x7B97;&#x51D1;&#x51FA; 24&#xFF09;&#x4E3A;&#x4F8B;&#xFF0C;GPT-4 &#x7528; CoT &#x4EC5;&#x89E3;&#x51FA; <strong>4%</strong> &#x7684;&#x6D4B;&#x8BD5;&#x9898;&#x2014;&#x2014;&#x56E0;&#x4E3A;&#x7EA6; 60% &#x7684; CoT &#x91C7;&#x6837;&#x5728;&#x751F;&#x6210;&#x524D;&#x4E09;&#x4E2A;&#x8BCD;&#xFF08;&#x5373;&#x7B2C;&#x4E00;&#x6B65;&#x8FD0;&#x7B97;&#xFF09;&#x65F6;&#x5C31;&#x5DF2;&#x7ECF;&#x8D70;&#x5165;&#x4E86;&#x6B7B;&#x80E1;&#x540C;&#x3002;</p>
<p><strong>&#x5BF9;&#x6BD4;&#x4EBA;&#x7C7B;&#x89E3;&#x9898;&#x8FC7;&#x7A0B;&#xFF1A;</strong></p>
<pre><code>&#x4EBA;&#x7C7B;&#x89E3; Game of 24 (4, 9, 10, 13)&#xFF1A;

  &quot;&#x8BA9;&#x6211;&#x60F3;&#x60F3;... 4+9=13&#xFF1F;&#x4E0D;&#x884C;&#xFF0C;&#x4E24;&#x4E2A; 13 &#x505A;&#x4E0D;&#x51FA; 24&quot;
      &#x2502;
      &#x2514;&#x2500;&#x2500; &#x56DE;&#x6EAF; &#x2500;&#x2500;&#x2192; &quot;&#x90A3;&#x8BD5;&#x8BD5; 13-9=4... &#x73B0;&#x5728;&#x6709; 4,4,10&quot;
                         &#x2502;
                         &#x251C;&#x2500;&#x2500; &quot;4+4=8, 8+10=18... &#x4E0D;&#x884C;&quot;
                         &#x2502;
                         &#x2514;&#x2500;&#x2500; &#x56DE;&#x6EAF; &#x2500;&#x2500;&#x2192; &quot;10-4=6, 4&#xD7;6=24&#xFF01;&#x2713;&quot;

  &#x5173;&#x952E;&#x80FD;&#x529B;&#xFF1A;
  &#x2713; &#x5728;&#x6BCF;&#x4E00;&#x6B65;&#x8003;&#x8651;&#x591A;&#x79CD;&#x53EF;&#x80FD;&#x6027;
  &#x2713; &#x8BC4;&#x4F30;&#x5F53;&#x524D;&#x72B6;&#x6001;&#x662F;&#x5426;&#x6709;&#x524D;&#x9014;
  &#x2713; &#x53D1;&#x73B0;&#x8D70;&#x4E0D;&#x901A;&#x65F6;&#x679C;&#x65AD;&#x56DE;&#x6EAF;
  &#x2713; &#x5168;&#x5C40;&#x641C;&#x7D22;&#x800C;&#x975E;&#x5C40;&#x90E8;&#x8D2A;&#x5FC3;
</code></pre>
<p>LLM &#x7684;&#x81EA;&#x56DE;&#x5F52;&#x89E3;&#x7801;&#x7F3A;&#x4E4F;&#x8FD9;&#x79CD;**&quot;&#x9000;&#x4E00;&#x6B65;&#x6D77;&#x9614;&#x5929;&#x7A7A;&quot;**&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x800C; ToT &#x6B63;&#x662F;&#x8981;&#x8865;&#x4E0A;&#x8FD9;&#x5757;&#x7F3A;&#x5931;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x800C;&#x4E14;&#x5728;&#x9700;&#x8981;&#x641C;&#x7D22;&#x548C;&#x89C4;&#x5212;&#x7684;&#x4EFB;&#x52A1;&#x4E2D;&#x662F; LLM &#x80FD;&#x529B;&#x7684;&#x786C;&#x5929;&#x82B1;&#x677F;&#x3002;</strong></p>
<ul>
<li><strong>&#x6570;&#x5B66;&#x63A8;&#x7406;&#xFF1A;</strong> Game of 24 &#x8981;&#x6C42;&#x5728;&#x7EC4;&#x5408;&#x7A7A;&#x95F4;&#x4E2D;&#x641C;&#x7D22;&#x6709;&#x6548;&#x7684;&#x8FD0;&#x7B97;&#x8DEF;&#x5F84;&#x3002;CoT &#x7684;&#x6210;&#x529F;&#x7387;&#x4EC5; 4%&#xFF0C;&#x5373;&#x4F7F;&#x91C7;&#x6837; 100 &#x6761;&#x72EC;&#x7ACB;&#x94FE;&#xFF08;CoT-SC, k=100&#xFF09;&#x4E5F;&#x53EA;&#x6709; 9%&#x3002;</li>
<li><strong>&#x521B;&#x610F;&#x5199;&#x4F5C;&#xFF1A;</strong> &#x8981;&#x6C42;&#x751F;&#x6210;&#x4E00;&#x6BB5;<strong>&#x7ED3;&#x5C3E;&#x5206;&#x522B;&#x5BF9;&#x5E94; 4 &#x4E2A;&#x968F;&#x673A;&#x53E5;&#x5B50;</strong>&#x7684; 4 &#x6BB5;&#x5F0F;&#x6587;&#x7AE0;&#x3002;&#x8FD9;&#x9700;&#x8981;&#x5168;&#x5C40;&#x89C4;&#x5212;&#x6BB5;&#x843D;&#x95F4;&#x7684;&#x8854;&#x63A5;&#x903B;&#x8F91;&#xFF0C;CoT &#x7684;&#x5355;&#x94FE;&#x6A21;&#x5F0F;&#x96BE;&#x4EE5;&#x517C;&#x987E;&#x6574;&#x4F53;&#x8FDE;&#x8D2F;&#x6027;&#x3002;</li>
<li><strong>&#x586B;&#x5B57;&#x6E38;&#x620F;&#xFF1A;</strong> 5&#xD7;5 Mini Crosswords &#x6D89;&#x53CA; 10 &#x6761;&#x7EBF;&#x7D22;&#x7684;&#x4EA4;&#x53C9;&#x7EA6;&#x675F;&#xFF0C;&#x6BCF;&#x586B;&#x4E00;&#x4E2A;&#x8BCD;&#x90FD;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x5176;&#x4ED6;&#x8BCD;&#x7684;&#x5019;&#x9009;&#x3002;CoT &#x7684;&#x8BCD;&#x7EA7;&#x6210;&#x529F;&#x7387;&#x4E0D;&#x5230; 16%&#x3002;</li>
</ul>
<p>&#x8BBA;&#x6587;&#x4EE5;&#x5FC3;&#x7406;&#x5B66;&#x7684;**&quot;&#x53CC;&#x7CFB;&#x7EDF;&#x7406;&#x8BBA;&quot;&#xFF08;Dual Process Theory&#xFF09;**&#x4E3A;&#x7406;&#x8BBA;&#x57FA;&#x7840;&#xFF1A;</p>
<ul>
<li><strong>System 1&#xFF08;&#x5FEB;&#x601D;&#x8003;&#xFF09;&#xFF1A;</strong> &#x81EA;&#x52A8;&#x7684;&#x3001;&#x65E0;&#x610F;&#x8BC6;&#x7684;&#x2014;&#x2014;&#x5BF9;&#x5E94; LLM &#x7684;&#x81EA;&#x56DE;&#x5F52;&#x89E3;&#x7801;&#x3002;</li>
<li><strong>System 2&#xFF08;&#x6162;&#x601D;&#x8003;&#xFF09;&#xFF1A;</strong> &#x523B;&#x610F;&#x7684;&#x3001;&#x6709;&#x610F;&#x8BC6;&#x7684;&#x2014;&#x2014;&#x5BF9;&#x5E94; ToT &#x7684;&#x641C;&#x7D22;&#x4E0E;&#x8BC4;&#x4F30;&#x3002;</li>
</ul>
<p>LLM &#x76EE;&#x524D;&#x7684;&#x63A8;&#x7406;&#x4E3B;&#x8981;&#x662F; System 1 &#x6A21;&#x5F0F;&#xFF0C;ToT &#x5219;&#x4E3A;&#x5176;&#x589E;&#x6DFB;&#x4E86; System 2 &#x7684;&quot;&#x6DF1;&#x601D;&#x719F;&#x8651;&quot;&#x80FD;&#x529B;&#x3002;</p>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>ToT &#x5C06;&#x95EE;&#x9898;&#x6C42;&#x89E3;&#x5EFA;&#x6A21;&#x4E3A;&#x4E00;&#x68F5;<strong>&#x641C;&#x7D22;&#x6811;</strong>&#xFF0C;&#x5176;&#x4E2D;&#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x662F;&#x4E00;&#x4E2A;<strong>&#x72B6;&#x6001;</strong> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>=</mo><mo stretchy="false">[</mo><mi>x</mi><mo separator="true">,</mo><msub><mi>z</mi><mrow><mn>1</mn><mo>&#x22EF;</mo><mi>i</mi></mrow></msub><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">s = [x, z_{1 \\cdots i}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.044em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="minner mtight">&#x22EF;</span><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">&#x200B;</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">]</span></span></span></span>&#xFF08;&#x8F93;&#x5165;&#x52A0;&#x4E0A;&#x5230;&#x76EE;&#x524D;&#x4E3A;&#x6B62;&#x7684;&#x601D;&#x7EF4;&#x5E8F;&#x5217;&#xFF09;&#xFF0C;&#x6BCF;&#x6761;&#x8FB9;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;<strong>&#x601D;&#x7EF4;&#x6B65;&#x9AA4;</strong>&#x3002;&#x6574;&#x4E2A;&#x6846;&#x67B6;&#x9700;&#x8981;&#x56DE;&#x7B54;&#x56DB;&#x4E2A;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;</p>
<h3 id="1. &#x601D;&#x7EF4;&#x5206;&#x89E3;&#xFF08;Thought Decomposition&#xFF09;"><a href="#1. &#x601D;&#x7EF4;&#x5206;&#x89E3;&#xFF08;Thought Decomposition&#xFF09;"></a>1. &#x601D;&#x7EF4;&#x5206;&#x89E3;&#xFF08;Thought Decomposition&#xFF09;</h3>
<p>CoT &#x5C06;&#x601D;&#x7EF4;&#x89C6;&#x4E3A;&#x4E00;&#x6574;&#x6BB5;&#x8FDE;&#x7EED;&#x6587;&#x672C;&#xFF0C;&#x4E0D;&#x505A;&#x663E;&#x5F0F;&#x5206;&#x89E3;&#x3002;ToT &#x5219;&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x7279;&#x6027;&#x5C06;&#x4E2D;&#x95F4;&#x8FC7;&#x7A0B;<strong>&#x5206;&#x89E3;&#x4E3A;&#x9002;&#x5F53;&#x7C92;&#x5EA6;&#x7684;&#x601D;&#x7EF4;&#x6B65;&#x9AA4;</strong>&#xFF1A;</p>
<pre><code>&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502;  &#x4EFB;&#x52A1;         &#x2502;  &#x601D;&#x7EF4;&#x7C92;&#x5EA6;         &#x2502;  &#x601D;&#x7EF4;&#x6B65;&#x6570;           &#x2502;
&#x251C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2524;
&#x2502;  Game of 24  &#x2502;  &#x4E00;&#x884C;&#x7B49;&#x5F0F;          &#x2502;  3 &#x6B65;              &#x2502;
&#x2502;              &#x2502;  &#x5982; &quot;13-9=4&quot;      &#x2502;  (&#x4E09;&#x6B21;&#x8FD0;&#x7B97;)         &#x2502;
&#x251C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2524;
&#x2502;  &#x521B;&#x610F;&#x5199;&#x4F5C;     &#x2502;  &#x4E00;&#x6BB5;&#x5199;&#x4F5C;&#x8BA1;&#x5212;       &#x2502;  1 &#x6B65;              &#x2502;
&#x2502;              &#x2502;  &#x5982; &quot;1. &#x5F15;&#x5165;&#x4E00;&#x672C;   &#x2502;  (&#x5148;&#x89C4;&#x5212;&#x540E;&#x5199;&#x4F5C;)      &#x2502;
&#x2502;              &#x2502;  &#x8054;&#x7CFB;...&#x7684;&#x4E66;&quot;      &#x2502;                    &#x2502;
&#x251C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2524;
&#x2502;  &#x586B;&#x5B57;&#x6E38;&#x620F;     &#x2502;  &#x4E00;&#x4E2A;&#x8BCD;            &#x2502;  5-10 &#x6B65;&#xFF08;&#x53EF;&#x53D8;&#xFF09;    &#x2502;
&#x2502;              &#x2502;  &#x5982; &quot;h1. SHOWN&quot;   &#x2502;  (&#x9010;&#x8BCD;&#x586B;&#x5165;)         &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

&#x5206;&#x89E3;&#x7684;&#x539F;&#x5219;&#xFF1A;
  &quot;&#x5C0F;&quot;&#x5230;&#x8DB3;&#x4EE5;&#x8BA9; LM &#x751F;&#x6210;&#x591A;&#x6837;&#x7684;&#x5019;&#x9009;&#xFF08;&#x751F;&#x6210;&#x4E00;&#x6574;&#x672C;&#x4E66;&#x592A;&quot;&#x5927;&quot;&#x4E86;&#xFF09;
  &quot;&#x5927;&quot;&#x5230;&#x8DB3;&#x4EE5;&#x8BA9; LM &#x8BC4;&#x4F30;&#x5176;&#x524D;&#x666F;&#xFF08;&#x751F;&#x6210;&#x4E00;&#x4E2A; token &#x592A;&quot;&#x5C0F;&quot;&#x4E86;&#xFF09;
</code></pre>
<h3 id="2. &#x601D;&#x7EF4;&#x751F;&#x6210;&#xFF08;Thought Generator&#xFF09;"><a href="#2. &#x601D;&#x7EF4;&#x751F;&#x6210;&#xFF08;Thought Generator&#xFF09;"></a>2. &#x601D;&#x7EF4;&#x751F;&#x6210;&#xFF08;Thought Generator&#xFF09;</h3>
<p>&#x7ED9;&#x5B9A;&#x5F53;&#x524D;&#x72B6;&#x6001; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi></mrow><annotation encoding="application/x-tex">s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span></span></span></span>&#xFF0C;&#x751F;&#x6210; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> &#x4E2A;&#x5019;&#x9009;&#x601D;&#x7EF4;&#x6B65;&#x9AA4;&#x3002;&#x4E24;&#x79CD;&#x7B56;&#x7565;&#xFF1A;</p>
<pre><code>&#x7B56;&#x7565; A: &#x72EC;&#x7ACB;&#x91C7;&#x6837;&#xFF08;&#x9002;&#x7528;&#x4E8E;&#x4E30;&#x5BCC;&#x7684;&#x601D;&#x7EF4;&#x7A7A;&#x95F4;&#xFF0C;&#x5982;&#x521B;&#x610F;&#x5199;&#x4F5C;&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  z&#x207D;&#xB9;&#x207E; ~ p_&#x3B8;(z_{i+1} | s)    &#x2190; &#x72EC;&#x7ACB;&#x91C7;&#x6837; k &#x6B21;
  z&#x207D;&#xB2;&#x207E; ~ p_&#x3B8;(z_{i+1} | s)      &#xFF08;i.i.d.&#xFF0C;&#x6BCF;&#x6B21;&#x72EC;&#x7ACB;&#xFF09;
  ...
  z&#x207D;&#x1D4F;&#x207E; ~ p_&#x3B8;(z_{i+1} | s)    &#x2192; &#x5929;&#x7136;&#x4FDD;&#x8BC1;&#x591A;&#x6837;&#x6027;

&#x7B56;&#x7565; B: &#x987A;&#x5E8F;&#x63D0;&#x8BAE;&#xFF08;&#x9002;&#x7528;&#x4E8E;&#x53D7;&#x7EA6;&#x675F;&#x7684;&#x601D;&#x7EF4;&#x7A7A;&#x95F4;&#xFF0C;&#x5982; Game of 24&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  [z&#x207D;&#xB9;&#x207E;, z&#x207D;&#xB2;&#x207E;, ..., z&#x207D;&#x1D4F;&#x207E;] ~ p_&#x3B8;(z_{i+1}^{(1..k)} | s)
                                 &#x2190; &#x4E00;&#x6B21;&#x751F;&#x6210;&#x6240;&#x6709;&#x5019;&#x9009;
                                   &#x5728;&#x540C;&#x4E00;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#x63D0;&#x8BAE;
                                 &#x2192; &#x907F;&#x514D;&#x751F;&#x6210;&#x91CD;&#x590D;&#x7684;&#x9009;&#x9879;
</code></pre>
<h3 id="3. &#x72B6;&#x6001;&#x8BC4;&#x4F30;&#xFF08;State Evaluator&#xFF09;"><a href="#3. &#x72B6;&#x6001;&#x8BC4;&#x4F30;&#xFF08;State Evaluator&#xFF09;"></a>3. &#x72B6;&#x6001;&#x8BC4;&#x4F30;&#xFF08;State Evaluator&#xFF09;</h3>
<p><img src="https://arxiv.org/html/2305.10601v2/x2.png" alt="Figure 2: Game of 24 &#x4E2D;&#x7684; ToT&#x3002;LM &#x88AB;&#x63D0;&#x793A;&#x8FDB;&#x884C; (a) &#x601D;&#x7EF4;&#x751F;&#x6210;&#xFF1A;&#x7ED9;&#x5B9A;&#x5269;&#x4F59;&#x6570;&#x5B57;&#xFF0C;&#x63D0;&#x8BAE;&#x53EF;&#x80FD;&#x7684;&#x4E0B;&#x4E00;&#x6B65;&#x8FD0;&#x7B97;&#xFF1B;(b) &#x72B6;&#x6001;&#x8BC4;&#x4F30;&#xFF1A;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5269;&#x4F59;&#x6570;&#x5B57;&#x662F; sure/maybe/impossible &#x80FD;&#x51D1;&#x51FA; 24&#x3002;"></p>
<p>&#x8FD9;&#x662F; ToT &#x6700;&#x6838;&#x5FC3;&#x7684;&#x521B;&#x65B0;&#x2014;&#x2014;<strong>&#x8BA9; LM &#x81EA;&#x6211;&#x8BC4;&#x4F30;&#x4E2D;&#x95F4;&#x72B6;&#x6001;&#x7684;&#x524D;&#x666F;</strong>&#xFF0C;&#x5145;&#x5F53;&#x641C;&#x7D22;&#x7684;&#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;&#xFF1A;</p>
<pre><code>&#x7B56;&#x7565; A: &#x72EC;&#x7ACB;&#x8BC4;&#x503C;&#xFF08;&#x9002;&#x7528;&#x4E8E;&#x53EF;&#x91CF;&#x5316;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5982; Game of 24&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x72B6;&#x6001; s = &quot;&#x8F93;&#x5165; 4 9 10 13; &#x5DF2;&#x505A; 13-9=4, &#x5269;&#x4F59; 4 4 10&quot;

  LM &#x8BC4;&#x4F30;: &quot;4,4,10 &#x80FD;&#x51D1;&#x51FA; 24 &#x5417;&#xFF1F;&quot;
    &#x2192; &quot;sure&quot;   (&#x5982; 5+5+14=24 &#x8FD9;&#x79CD;&#x663E;&#x7136;&#x53EF;&#x4EE5;)
    &#x2192; &quot;maybe&quot;  (&#x4E0D;&#x786E;&#x5B9A;&#xFF0C;&#x4FDD;&#x7559;&#x63A2;&#x7D22;)
    &#x2192; &quot;impossible&quot; (&#x5982; 1,2,3 &#x592A;&#x5C0F;&#x4E86;&#xFF0C;&#x526A;&#x679D;)

  &#x5BF9;&#x6BCF;&#x4E2A;&#x5019;&#x9009;&#x72B6;&#x6001;&#x72EC;&#x7ACB;&#x8BC4;&#x4F30;&#xFF0C;&#x53EF;&#x591A;&#x6B21;&#x91C7;&#x6837;&#x53D6;&#x5E73;&#x5747;

&#x7B56;&#x7565; B: &#x6295;&#x7968;&#x6BD4;&#x8F83;&#xFF08;&#x9002;&#x7528;&#x4E8E;&#x96BE;&#x4EE5;&#x76F4;&#x63A5;&#x8BC4;&#x5206;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5982;&#x521B;&#x610F;&#x5199;&#x4F5C;&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x7ED9;&#x5B9A;&#x5019;&#x9009;&#x72B6;&#x6001;&#x96C6;&#x5408; S = {s&#x2081;, s&#x2082;, ..., s&#x2096;}

  LM &#x6295;&#x7968;: &quot;&#x5206;&#x6790;&#x4EE5;&#x4E0B;&#x65B9;&#x6848;&#xFF0C;&#x54EA;&#x4E2A;&#x6700;&#x6709;&#x524D;&#x9014;&#xFF1F;&quot;
    &#x2192; &#x6295;&#x7968; 5 &#x6B21;&#xFF0C;&#x53D6;&#x591A;&#x6570;&#x7968;
    &#x2192; &#x7C7B;&#x4F3C;&#x4E8E;&quot;&#x9010;&#x6B65;&#x81EA;&#x6211;&#x4E00;&#x81F4;&#x6027;&quot;
</code></pre>
<p><strong>&#x8FD9;&#x4E00;&#x8BBE;&#x8BA1;&#x662F;&#x524D;&#x6240;&#x672A;&#x6709;&#x7684;</strong>&#x2014;&#x2014;&#x4EE5;&#x5F80;&#x7684;&#x641C;&#x7D22;&#x542F;&#x53D1;&#x5F0F;&#x8981;&#x4E48;&#x662F;&#x4EBA;&#x5DE5;&#x7F16;&#x5199;&#x7684;&#x89C4;&#x5219;&#xFF08;&#x5982; Deep Blue&#xFF09;&#xFF0C;&#x8981;&#x4E48;&#x662F;&#x8BAD;&#x7EC3;&#x51FA;&#x6765;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x5982; AlphaGo&#xFF09;&#xFF0C;ToT &#x63D0;&#x51FA;&#x4E86;<strong>&#x7B2C;&#x4E09;&#x6761;&#x8DEF;&#xFF1A;&#x8BA9; LM &#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63A8;&#x7406;&#x6765;&#x5145;&#x5F53;&#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;</strong>&#x3002;</p>
<h3 id="4. &#x641C;&#x7D22;&#x7B97;&#x6CD5;&#xFF08;Search Algorithm&#xFF09;"><a href="#4. &#x641C;&#x7D22;&#x7B97;&#x6CD5;&#xFF08;Search Algorithm&#xFF09;"></a>4. &#x641C;&#x7D22;&#x7B97;&#x6CD5;&#xFF08;Search Algorithm&#xFF09;</h3>
<p>&#x5728;&#x601D;&#x7EF4;&#x6811;&#x4E0A;&#x6267;&#x884C;&#x7CFB;&#x7EDF;&#x5316;&#x641C;&#x7D22;&#xFF0C;&#x8BBA;&#x6587;&#x63A2;&#x7D22;&#x4E86;&#x4E24;&#x79CD;&#x7ECF;&#x5178;&#x7B97;&#x6CD5;&#x3002;</p>
<p><strong>BFS &#x7528;&#x4E8E;&#x521B;&#x610F;&#x5199;&#x4F5C;&#x7684;&#x5B9E;&#x4F8B;&#xFF1A;</strong></p>
<p><img src="https://arxiv.org/html/2305.10601v2/x4.png" alt="Figure 4: &#x521B;&#x610F;&#x5199;&#x4F5C;&#x4EFB;&#x52A1;&#x4E2D;&#x7684; deliberate search &#x6B65;&#x9AA4;&#x3002;&#x7ED9;&#x5B9A;&#x8F93;&#x5165;&#x7EA6;&#x675F;&#xFF0C;LM &#x5148;&#x91C7;&#x6837; 5 &#x79CD;&#x4E0D;&#x540C;&#x7684;&#x5199;&#x4F5C;&#x8BA1;&#x5212;&#xFF0C;&#x518D;&#x6295;&#x7968; 5 &#x6B21;&#x9009;&#x51FA;&#x6700;&#x4F73;&#x8BA1;&#x5212;&#x3002;&#x591A;&#x6570;&#x7968;&#x7684;&#x65B9;&#x6848;&#x88AB;&#x7528;&#x4E8E;&#x540E;&#x7EED;&#x5199;&#x4F5C;&#xFF0C;&#x540C;&#x6837;&#x91C7;&#x7528; sample-vote &#x6D41;&#x7A0B;&#x3002;"></p>
<p><strong>DFS &#x7528;&#x4E8E;&#x586B;&#x5B57;&#x6E38;&#x620F;&#x7684;&#x5B9E;&#x4F8B;&#xFF1A;</strong></p>
<p><img src="https://arxiv.org/html/2305.10601v2/x6.png" alt="Figure 6: Mini Crosswords &#x4E2D;&#x7684; ToT&#x3002;(a) &#x5982;&#x4F55;&#x5728;&#x4F18;&#x5148;&#x961F;&#x5217;&#x4E2D;&#x63D0;&#x8BAE;&#x548C;&#x805A;&#x5408;&#x601D;&#x7EF4;&#x4EE5;&#x8FDB;&#x884C; DFS&#xFF1B;(b) &#x5982;&#x4F55;&#x57FA;&#x4E8E;&#x5269;&#x4F59;&#x7EBF;&#x7D22;&#x7684;&#x53EF;&#x586B;&#x5199;&#x6027;&#x8BC4;&#x4F30;&#x72B6;&#x6001;&#xFF0C;&#x82E5;&#x4EFB;&#x4F55;&#x7EBF;&#x7D22;&#x88AB;&#x5224;&#x5B9A;&#x4E3A;&#x4E0D;&#x53EF;&#x80FD;&#x586B;&#x5199;&#x5219;&#x526A;&#x679D;&#xFF0C;DFS &#x56DE;&#x6EAF;&#x5230;&#x7236;&#x72B6;&#x6001;&#x3002;"></p>
<pre><code>&#x3010;BFS &#x2014; &#x5E7F;&#x5EA6;&#x4F18;&#x5148;&#x641C;&#x7D22;&#xFF08;&#x7528;&#x4E8E; Game of 24 &#x548C;&#x521B;&#x610F;&#x5199;&#x4F5C;&#xFF09;&#x3011;

  &#x6B65;&#x9AA4; t=1:                &#x6B65;&#x9AA4; t=2:              &#x6B65;&#x9AA4; t=3:
  &#x4ECE;&#x8F93;&#x5165;&#x751F;&#x6210; k &#x4E2A;&#x5019;&#x9009;       &#x6BCF;&#x4E2A;&#x4FDD;&#x7559;&#x8282;&#x70B9;&#x518D;&#x751F;&#x6210; k &#x4E2A;   &#x7EE7;&#x7EED;...
  &#x250C;&#x2500; z&#x2081; (sure)   &#x2190; &#x4FDD;&#x7559;   &#x250C;&#x2500; z&#x2081;&#x2081; (sure) &#x2713;
  &#x251C;&#x2500; z&#x2082; (maybe)  &#x2190; &#x4FDD;&#x7559;   &#x251C;&#x2500; z&#x2081;&#x2082; (impossible) &#x2717;
  &#x251C;&#x2500; z&#x2083; (impossible) &#x2717;     &#x251C;&#x2500; z&#x2082;&#x2081; (maybe) &#x2190; &#x4FDD;&#x7559;
  &#x251C;&#x2500; z&#x2084; (sure)   &#x2190; &#x4FDD;&#x7559;   &#x2514;&#x2500; ...
  &#x2514;&#x2500; z&#x2085; (maybe)  &#x2190; &#x4FDD;&#x7559;

  &#x6BCF;&#x6B65;&#x4FDD;&#x7559;&#x6700;&#x4F73; b &#x4E2A;&#x72B6;&#x6001;&#xFF08;b=5 for Game of 24&#xFF09;
  &#x9002;&#x5408;&#x6811;&#x6DF1;&#x5EA6;&#x6709;&#x9650;&#xFF08;T&#x2264;3&#xFF09;&#x7684;&#x573A;&#x666F;

&#x3010;DFS &#x2014; &#x6DF1;&#x5EA6;&#x4F18;&#x5148;&#x641C;&#x7D22;&#xFF08;&#x7528;&#x4E8E;&#x586B;&#x5B57;&#x6E38;&#x620F;&#xFF09;&#x3011;

  &#x4F18;&#x5148;&#x6DF1;&#x5165;&#x6700;&#x6709;&#x524D;&#x9014;&#x7684;&#x5206;&#x652F;
  &#x250C;&#x2500; h1=SHOWN &#x2713;
  &#x2502;  &#x251C;&#x2500; v1=SWEAR &#x2713;
  &#x2502;  &#x2502;  &#x251C;&#x2500; h2=WIRRA &#x2192; v2 &#x65E0;&#x89E3; &#x2192; impossible! &#x2192; &#x56DE;&#x6EAF; &#x21A9;
  &#x2502;  &#x2502;  &#x2502;
  &#x2502;  &#x2502;  &#x2514;&#x2500; h2=WIRED &#x2713;
  &#x2502;  &#x2502;     &#x2514;&#x2500; ...&#x7EE7;&#x7EED;&#x6DF1;&#x5165;
  &#x2502;  &#x2502;
  &#x2502;  &#x2514;&#x2500; v1=STAIR &#x2713;
  &#x2502;     &#x2514;&#x2500; ...
  &#x2502;
  &#x2514;&#x2500; h1=TASKS &#x2713;
     &#x2514;&#x2500; ...

  &#x9047;&#x5230; &quot;impossible&quot; &#x5C31;&#x526A;&#x679D;&#x56DE;&#x6EAF;
  &#x641C;&#x7D22;&#x6B65;&#x6570;&#x9650;&#x5236;&#x4E3A; 100 &#x6B65;
  &#x9002;&#x5408;&#x6DF1;&#x5EA6;&#x53EF;&#x53D8;&#x3001;&#x9700;&#x8981;&#x56DE;&#x6EAF;&#x7684;&#x573A;&#x666F;
</code></pre>
<h3 id="5. &#x5B8C;&#x6574;&#x6570;&#x636E;&#x6D41;&#xFF1A;&#x4EE5; Game of 24 &#x4E3A;&#x4F8B;"><a href="#5. &#x5B8C;&#x6574;&#x6570;&#x636E;&#x6D41;&#xFF1A;&#x4EE5; Game of 24 &#x4E3A;&#x4F8B;"></a>5. &#x5B8C;&#x6574;&#x6570;&#x636E;&#x6D41;&#xFF1A;&#x4EE5; Game of 24 &#x4E3A;&#x4F8B;</h3>
<pre><code>&#x8F93;&#x5165;: &quot;4 9 10 13&quot;

&#x2501;&#x2501; &#x6B65;&#x9AA4; 1: &#x751F;&#x6210; + &#x8BC4;&#x4F30;&#x7B2C;&#x4E00;&#x6B65;&#x8FD0;&#x7B97; &#x2501;&#x2501;

  LM &#x751F;&#x6210; k &#x4E2A;&#x5019;&#x9009;:
    z&#x2081;: &quot;13 - 9 = 4  (&#x5269;&#x4F59;: 4, 4, 10)&quot;
    z&#x2082;: &quot;10 - 4 = 6  (&#x5269;&#x4F59;: 6, 9, 13)&quot;
    z&#x2083;: &quot;4 + 9 = 13  (&#x5269;&#x4F59;: 10, 13, 13)&quot;
    z&#x2084;: &quot;9 &#xD7; 4 = 36  (&#x5269;&#x4F59;: 10, 13, 36)&quot;  &#x2190; &#x592A;&#x5927;&#x4E86;
    z&#x2085;: &quot;13 + 10 = 23 (&#x5269;&#x4F59;: 4, 9, 23)&quot;

  LM &#x8BC4;&#x4F30;&#x6BCF;&#x4E2A;&#x5019;&#x9009;&#xFF08;&#x91C7;&#x6837; 3 &#x6B21;&#x53D6;&#x591A;&#x6570;&#xFF09;:
    z&#x2081;: &quot;sure&quot;        &#x2190; &#x4FDD;&#x7559; &#x2713;
    z&#x2082;: &quot;maybe&quot;       &#x2190; &#x4FDD;&#x7559; &#x2713;
    z&#x2083;: &quot;maybe&quot;       &#x2190; &#x4FDD;&#x7559; &#x2713;
    z&#x2084;: &quot;impossible&quot;  &#x2190; &#x526A;&#x679D; &#x2717;
    z&#x2085;: &quot;maybe&quot;       &#x2190; &#x4FDD;&#x7559; &#x2713;

  &#x4FDD;&#x7559; top-5&#xFF08;&#x6B64;&#x4F8B;&#x4FDD;&#x7559; 4 &#x4E2A;&#xFF09;

&#x2501;&#x2501; &#x6B65;&#x9AA4; 2: &#x5BF9;&#x6BCF;&#x4E2A;&#x4FDD;&#x7559;&#x72B6;&#x6001;&#x91CD;&#x590D;&#x751F;&#x6210; + &#x8BC4;&#x4F30; &#x2501;&#x2501;

  &#x4EE5; z&#x2081; (&#x5269;&#x4F59; 4, 4, 10) &#x4E3A;&#x4F8B;:
    z&#x2081;&#x2081;: &quot;10 - 4 = 6  (&#x5269;&#x4F59;: 4, 6)&quot;   &#x2192; &quot;sure&quot; &#x2713;
    z&#x2081;&#x2082;: &quot;4 + 4 = 8  (&#x5269;&#x4F59;: 8, 10)&quot;   &#x2192; &quot;maybe&quot;
    z&#x2081;&#x2083;: &quot;4 &#xD7; 4 = 16 (&#x5269;&#x4F59;: 10, 16)&quot;  &#x2192; &quot;maybe&quot;
    ...

&#x2501;&#x2501; &#x6B65;&#x9AA4; 3: &#x6700;&#x540E;&#x4E00;&#x6B65;&#x8FD0;&#x7B97; &#x2501;&#x2501;

  &#x4EE5; z&#x2081;&#x2081; (&#x5269;&#x4F59; 4, 6) &#x4E3A;&#x4F8B;:
    &quot;4 &#xD7; 6 = 24&quot; &#x2192; &quot;sure&quot; &#x2713;  &#x2190; &#x627E;&#x5230;&#x89E3;&#xFF01;

&#x6700;&#x7EC8;&#x8F93;&#x51FA;: &quot;(10 - 4) &#xD7; (13 - 9) = 24&quot;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<p><img src="https://arxiv.org/html/2305.10601v2/x3.png" alt="Figure 3: Game of 24 (a) &#x89C4;&#x6A21;&#x5206;&#x6790;&#xFF1A;ToT &#x968F;&#x641C;&#x7D22;&#x8282;&#x70B9;&#x6570;&#x589E;&#x957F;&#x7684;&#x6210;&#x529F;&#x7387;&#x8FDC;&#x4F18;&#x4E8E; IO/CoT &#x7684;&#x72EC;&#x7ACB;&#x91C7;&#x6837;&#xFF1B;(b) &#x9519;&#x8BEF;&#x5206;&#x6790;&#xFF1A;&#x7EA6; 60% &#x7684; CoT &#x91C7;&#x6837;&#x5728;&#x7B2C;&#x4E00;&#x6B65;&#x5C31;&#x5DF2;&#x5931;&#x8D25;&#xFF0C;&#x800C; ToT (b=5) &#x5728;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x4FDD;&#x6301;&#x4E86;&#x6781;&#x4F4E;&#x7684;&#x5931;&#x8D25;&#x7387;&#x3002;"></p>
<table>
<thead>
<tr>
<th>&#x4EFB;&#x52A1;</th>
<th>&#x65B9;&#x6CD5;</th>
<th>&#x6210;&#x529F;&#x7387;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Game of 24</td>
<td>IO prompt</td>
<td>7.3%</td>
</tr>
<tr>
<td></td>
<td>CoT prompt</td>
<td>4.0%</td>
</tr>
<tr>
<td></td>
<td>CoT-SC (k=100)</td>
<td>9.0%</td>
</tr>
<tr>
<td></td>
<td><strong>ToT (b=5)</strong></td>
<td><strong>74%</strong></td>
</tr>
<tr>
<td>&#x521B;&#x610F;&#x5199;&#x4F5C;</td>
<td>IO</td>
<td>6.19 &#x5206;</td>
</tr>
<tr>
<td></td>
<td>CoT</td>
<td>6.93 &#x5206;</td>
</tr>
<tr>
<td></td>
<td><strong>ToT</strong></td>
<td><strong>7.56 &#x5206;</strong></td>
</tr>
<tr>
<td>&#x586B;&#x5B57;&#x6E38;&#x620F;</td>
<td>CoT (&#x8BCD;&#x7EA7;)</td>
<td>15.6%</td>
</tr>
<tr>
<td></td>
<td><strong>ToT (&#x8BCD;&#x7EA7;)</strong></td>
<td><strong>60%</strong></td>
</tr>
</tbody>
</table>
<p><img src="https://arxiv.org/html/2305.10601v2/x5.png" alt="Figure 5: &#x521B;&#x610F;&#x5199;&#x4F5C;&#x7ED3;&#x679C;&#x3002;(a) GPT-4 &#x81EA;&#x52A8;&#x8BC4;&#x5206;&#xFF1A;ToT (7.56) &#x663E;&#x8457;&#x4F18;&#x4E8E; IO (6.19) &#x548C; CoT (6.93)&#xFF1B;(b) &#x4EBA;&#x7C7B;&#x8BC4;&#x5BA1;&#xFF1A;100 &#x5BF9;&#x6BD4;&#x8F83;&#x4E2D; ToT &#x80DC;&#x51FA; 41 &#x6B21; vs CoT &#x80DC;&#x51FA; 21 &#x6B21;&#x3002;"></p>
<p>&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;</p>
<ul>
<li><strong>Game of 24&#xFF1A;</strong> ToT &#x5C06;&#x6210;&#x529F;&#x7387;&#x4ECE; 4%&#xFF08;CoT&#xFF09;&#x63D0;&#x5347;&#x5230; 74%&#xFF0C;&#x63D0;&#x5347;&#x4E86; <strong>18.5 &#x500D;</strong>&#x3002;</li>
<li><strong>&#x521B;&#x610F;&#x5199;&#x4F5C;&#xFF1A;</strong> &#x4EBA;&#x7C7B;&#x8BC4;&#x5BA1;&#x4E2D;&#xFF0C;ToT &#x5728; 100 &#x5BF9;&#x6BD4;&#x8F83;&#x4E2D;&#x80DC;&#x51FA; 41 &#x6B21; vs CoT &#x80DC;&#x51FA; 21 &#x6B21;&#x3002;</li>
<li><strong>&#x586B;&#x5B57;&#x6E38;&#x620F;&#xFF1A;</strong> ToT &#x7684;&#x8BCD;&#x7EA7;&#x6210;&#x529F;&#x7387;&#x662F; CoT &#x7684;&#x8FD1; <strong>4 &#x500D;</strong>&#xFF0C;&#x5E76;&#x6210;&#x529F;&#x5B8C;&#x6574;&#x89E3;&#x51FA; 4/20 &#x4E2A;&#x6E38;&#x620F;&#x3002;</li>
<li><strong>&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#xFF1A;</strong> &#x53BB;&#x6389;&#x526A;&#x679D;&#xFF08;-prune&#xFF09;&#x6216;&#x56DE;&#x6EAF;&#xFF08;-backtrack&#xFF09;&#x90FD;&#x5BFC;&#x81F4;&#x663E;&#x8457;&#x6027;&#x80FD;&#x4E0B;&#x964D;&#xFF0C;&#x8BC1;&#x660E;&#x4E86;&#x641C;&#x7D22;&#x673A;&#x5236;&#x5404;&#x7EC4;&#x4EF6;&#x7684;&#x5FC5;&#x8981;&#x6027;&#x3002;</li>
</ul>
<h2 id="&#x4ECE; Engram &#x89C6;&#x89D2;&#x770B; ToT&#xFF1A;System 1 &#x4E0E; System 2 &#x7684;&#x4E92;&#x8865;"><a href="#&#x4ECE; Engram &#x89C6;&#x89D2;&#x770B; ToT&#xFF1A;System 1 &#x4E0E; System 2 &#x7684;&#x4E92;&#x8865;"></a>&#x4ECE; Engram &#x89C6;&#x89D2;&#x770B; ToT&#xFF1A;System 1 &#x4E0E; System 2 &#x7684;&#x4E92;&#x8865;</h2>
<p>ToT &#x8BBA;&#x6587;&#x4EE5; Kahneman &#x7684;<strong>&#x53CC;&#x7CFB;&#x7EDF;&#x7406;&#x8BBA;</strong>&#x4E3A;&#x51FA;&#x53D1;&#x70B9;&#xFF0C;&#x800C;&#x8FD9;&#x6070;&#x597D;&#x4E0E; Engram &#x7684;&#x8BBE;&#x8BA1;&#x54F2;&#x5B66;&#x5F62;&#x6210;&#x4E86;&#x4E00;&#x7EC4;&#x7CBE;&#x5999;&#x7684;&#x4E92;&#x8865;&#x3002;&#x628A;&#x4E24;&#x7BC7;&#x8BBA;&#x6587;&#x653E;&#x5728;&#x4E00;&#x8D77;&#x770B;&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x5B83;&#x4EEC;&#x5206;&#x522B;&#x589E;&#x5F3A;&#x4E86;&#x5927;&#x6A21;&#x578B;&#x7684;&#x4E24;&#x79CD;&#x622A;&#x7136;&#x4E0D;&#x540C;&#x7684;&#x8BA4;&#x77E5;&#x80FD;&#x529B;&#xFF1A;</p>
<pre><code>&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502;              LLM &#x7684;&quot;&#x53CC;&#x7CFB;&#x7EDF;&quot;&#x589E;&#x5F3A;&#x8DEF;&#x7EBF;&#x56FE;                              &#x2502;
&#x2502;                                                                  &#x2502;
&#x2502;  &#x250C;&#x2500;&#x2500;&#x2500; System 1: &#x5FEB;&#x601D;&#x8003; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2502;  DeepSeek Engram (2026)                                &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;                             &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x589E;&#x5F3A;&#x4EC0;&#x4E48;&#xFF1F;&#x2192; &#x9759;&#x6001;&#x77E5;&#x8BC6;&#x7684;&#x5373;&#x65F6;&#x68C0;&#x7D22;                          &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x600E;&#x4E48;&#x589E;&#x5F3A;&#xFF1F;&#x2192; O(1) &#x54C8;&#x5E0C;&#x67E5;&#x8868; + &#x4E0A;&#x4E0B;&#x6587;&#x95E8;&#x63A7;                  &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x5728;&#x54EA;&#x589E;&#x5F3A;&#xFF1F;&#x2192; &#x6A21;&#x578B;&#x67B6;&#x6784;&#x5185;&#x90E8;&#xFF08;&#x6D45;&#x5C42; FFN &#x65C1;&#xFF0C;DRAM &#x5B58;&#x50A8;&#xFF09;      &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x4F55;&#x65F6;&#x8D77;&#x6548;&#xFF1F;&#x2192; &#x8BAD;&#x7EC3;&#x65F6;&#x5B66;&#x4E60; + &#x63A8;&#x7406;&#x65F6;&#x67E5;&#x8868;                     &#x2502;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x7C7B;&#x6BD4;&#xFF1A;&#x7ED9;&#x5927;&#x8111;&#x88C5;&#x4E86;&#x4E00;&#x672C;&quot;&#x53EF;&#x5FAE;&#x5206;&#x8BCD;&#x5178;&quot;                        &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2192; &#x770B;&#x5230; &quot;Princess of Wales&quot; &#x76F4;&#x63A5;&#x67E5;&#x51FA;&#x5B9E;&#x4F53;&#x77E5;&#x8BC6;              &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2192; &#x4E0D;&#x9700;&#x8981;&#x5C42;&#x5C42;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x63A8;&#x6F14;                                &#x2502;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;     &#x2502;
&#x2502;                                                                  &#x2502;
&#x2502;  &#x250C;&#x2500;&#x2500;&#x2500; System 2: &#x6162;&#x601D;&#x8003; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2502;  Princeton ToT (2023)                                  &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;                             &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x589E;&#x5F3A;&#x4EC0;&#x4E48;&#xFF1F;&#x2192; &#x590D;&#x6742;&#x95EE;&#x9898;&#x7684;&#x6DF1;&#x601D;&#x719F;&#x8651;&#x6C42;&#x89E3;                      &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x600E;&#x4E48;&#x589E;&#x5F3A;&#xFF1F;&#x2192; &#x6811;&#x641C;&#x7D22;&#xFF08;BFS/DFS&#xFF09;+ LM &#x81EA;&#x8BC4;&#x4F30;               &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x5728;&#x54EA;&#x589E;&#x5F3A;&#xFF1F;&#x2192; &#x6A21;&#x578B;&#x5916;&#x90E8;&#xFF08;&#x63A8;&#x7406;&#x65F6;&#x7684; prompting &#x6846;&#x67B6;&#xFF09;          &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x4F55;&#x65F6;&#x8D77;&#x6548;&#xFF1F;&#x2192; &#x4EC5;&#x63A8;&#x7406;&#x65F6;&#xFF08;&#x4E0D;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x53C2;&#x6570;&#xFF09;                   &#x2502;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x7C7B;&#x6BD4;&#xFF1A;&#x7ED9;&#x5927;&#x8111;&#x88C5;&#x4E86;&#x4E00;&#x5957;&quot;&#x641C;&#x7D22;&#x4E0E;&#x56DE;&#x6EAF;&#x7CFB;&#x7EDF;&quot;                    &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2192; &#x89E3;&#x6570;&#x5B66;&#x9898;&#x65F6;&#x5728;&#x8349;&#x7A3F;&#x7EB8;&#x4E0A;&#x5C1D;&#x8BD5;&#x591A;&#x6761;&#x8DEF;&#x5F84;                      &#x2502;     &#x2502;
&#x2502;  &#x2502;  &#x2192; &#x8D70;&#x4E0D;&#x901A;&#x5C31;&#x9000;&#x56DE;&#x91CD;&#x65B0;&#x6765;                                    &#x2502;     &#x2502;
&#x2502;  &#x2502;                                                        &#x2502;     &#x2502;
&#x2502;  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;     &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<h3 id="1. &#x67B6;&#x6784;&#x5C42; vs &#x63A8;&#x7406;&#x5C42;&#xFF1A;&#x4E24;&#x4E2A;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x5E72;&#x9884;&#x5C42;&#x6B21;"><a href="#1. &#x67B6;&#x6784;&#x5C42; vs &#x63A8;&#x7406;&#x5C42;&#xFF1A;&#x4E24;&#x4E2A;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x5E72;&#x9884;&#x5C42;&#x6B21;"></a>1. &#x67B6;&#x6784;&#x5C42; vs &#x63A8;&#x7406;&#x5C42;&#xFF1A;&#x4E24;&#x4E2A;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x5E72;&#x9884;&#x5C42;&#x6B21;</h3>
<p>&#x8FD9;&#x662F;&#x4E24;&#x7BC7;&#x8BBA;&#x6587;&#x6700;&#x6839;&#x672C;&#x7684;&#x5DEE;&#x5F02;&#x3002;Engram &#x6539;&#x53D8;&#x7684;&#x662F;<strong>&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x7684;&#x7ED3;&#x6784;</strong>&#xFF0C;&#x800C; ToT &#x6539;&#x53D8;&#x7684;&#x662F;<strong>&#x6A21;&#x578B;&#x88AB;&#x4F7F;&#x7528;&#x7684;&#x65B9;&#x5F0F;</strong>&#xFF1A;</p>
<pre><code>&#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
&#x2502;              &#x2502;  Engram                   &#x2502;  ToT                      &#x2502;
&#x251C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2524;
&#x2502;  &#x5E72;&#x9884;&#x5C42;&#x6B21;     &#x2502;  &#x67B6;&#x6784;&#x5C42;&#xFF08;&#x8BAD;&#x7EC3;+&#x63A8;&#x7406;&#xFF09;       &#x2502;  &#x63A8;&#x7406;&#x5C42;&#xFF08;&#x4EC5;&#x63A8;&#x7406;&#xFF09;           &#x2502;
&#x2502;  &#x662F;&#x5426;&#x6539;&#x6A21;&#x578B;   &#x2502;  &#x2713; &#x65B0;&#x589E;&#x67E5;&#x627E;&#x8868;+&#x95E8;&#x63A7;&#x6A21;&#x5757;     &#x2502;  &#x2717; &#x5B8C;&#x5168;&#x4E0D;&#x6539;&#x6A21;&#x578B;             &#x2502;
&#x2502;  &#x662F;&#x5426;&#x9700;&#x8BAD;&#x7EC3;   &#x2502;  &#x2713; &#x7AEF;&#x5230;&#x7AEF;&#x8054;&#x5408;&#x8BAD;&#x7EC3;          &#x2502;  &#x2717; &#x5373;&#x63D2;&#x5373;&#x7528;                &#x2502;
&#x2502;  &#x53C2;&#x6570;&#x53D8;&#x5316;     &#x2502;  &#x91CD;&#x65B0;&#x5206;&#x914D;&#x7A00;&#x758F;&#x53C2;&#x6570;          &#x2502;  &#x96F6;&#x53C2;&#x6570;&#x53D8;&#x5316;                &#x2502;
&#x2502;  &#x8BA1;&#x7B97;&#x4F4D;&#x7F6E;     &#x2502;  GPU + DRAM              &#x2502;  &#x591A;&#x6B21; LM API &#x8C03;&#x7528;          &#x2502;
&#x2502;  &#x989D;&#x5916;&#x6210;&#x672C;     &#x2502;  DRAM &#x5B58;&#x50A8; + PCIe &#x5E26;&#x5BBD;    &#x2502;  5-100x token &#x751F;&#x6210;&#x91CF;       &#x2502;
&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<p>&#x8FD9;&#x610F;&#x5473;&#x7740;&#x4E24;&#x8005;&#x662F;<strong>&#x5929;&#x7136;&#x53EF;&#x53E0;&#x52A0;&#x7684;</strong>&#x2014;&#x2014;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x4E2A; Engram &#x589E;&#x5F3A;&#x7684;&#x6A21;&#x578B;&#x4E0A;&#x8FD0;&#x884C; ToT &#x63A8;&#x7406;&#x6846;&#x67B6;&#xFF0C;&#x540C;&#x65F6;&#x83B7;&#x5F97;&#x4E24;&#x79CD;&#x589E;&#x5F3A;&#x3002;</p>
<h3 id="2. &quot;&#x8BB0;&#x5FC6;&quot;&#x4E0E;&quot;&#x641C;&#x7D22;&quot;&#x7684;&#x5206;&#x5DE5;"><a href="#2. &quot;&#x8BB0;&#x5FC6;&quot;&#x4E0E;&quot;&#x641C;&#x7D22;&quot;&#x7684;&#x5206;&#x5DE5;"></a>2. &quot;&#x8BB0;&#x5FC6;&quot;&#x4E0E;&quot;&#x641C;&#x7D22;&quot;&#x7684;&#x5206;&#x5DE5;</h3>
<p>&#x4ECE;&#x8BA4;&#x77E5;&#x79D1;&#x5B66;&#x7684;&#x89D2;&#x5EA6;&#x770B;&#xFF0C;Engram &#x548C; ToT &#x6070;&#x597D;&#x8986;&#x76D6;&#x4E86;&#x4EBA;&#x7C7B;&#x95EE;&#x9898;&#x6C42;&#x89E3;&#x7684;&#x4E24;&#x4E2A;&#x4E92;&#x8865;&#x73AF;&#x8282;&#xFF1A;</p>
<pre><code>&#x4EBA;&#x7C7B;&#x89E3;&#x51B3;&#x590D;&#x6742;&#x95EE;&#x9898;&#x7684;&#x8FC7;&#x7A0B;&#xFF1A;

  &quot;&#x6CD5;&#x56FD;&#x5927;&#x9769;&#x547D;&#x53D1;&#x751F;&#x5728;&#x54EA;&#x4E00;&#x5E74;&#xFF1F;&#x5B83;&#x5982;&#x4F55;&#x5F71;&#x54CD;&#x4E86;&#x540E;&#x6765;&#x7684;&#x62FF;&#x7834;&#x4ED1;&#x6218;&#x4E89;&#xFF1F;&quot;

  &#x6B65;&#x9AA4; 1 &#x2014; &#x4E8B;&#x5B9E;&#x68C0;&#x7D22;&#xFF08;System 1 / Engram &#x7684;&#x9886;&#x57DF;&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &quot;&#x6CD5;&#x56FD;&#x5927;&#x9769;&#x547D;... 1789 &#x5E74;&quot;  &#x2190; &#x5373;&#x65F6;&#x56DE;&#x5FC6;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x63A8;&#x7406;
  &quot;&#x62FF;&#x7834;&#x4ED1;&#x6218;&#x4E89;... 1803-1815 &#x5E74;&quot;  &#x2190; &#x540C;&#x4E0A;
  &#x2192; Engram &#x7684; O(1) &#x54C8;&#x5E0C;&#x67E5;&#x8868;&#x5C31;&#x662F;&#x5728;&#x505A;&#x8FD9;&#x4EF6;&#x4E8B;

  &#x6B65;&#x9AA4; 2 &#x2014; &#x903B;&#x8F91;&#x63A8;&#x7406;&#xFF08;System 2 / ToT &#x7684;&#x9886;&#x57DF;&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &quot;&#x5927;&#x9769;&#x547D;&#x63A8;&#x7FFB;&#x4E86;&#x541B;&#x4E3B;&#x5236; &#x2192; &#x62FF;&#x7834;&#x4ED1;&#x5728;&#x6DF7;&#x4E71;&#x4E2D;&#x5D1B;&#x8D77; &#x2192; 
   &#x4F46;&#x4ED6;&#x7684;&#x519B;&#x4E8B;&#x6269;&#x5F20; &#x2192; &#x89E6;&#x53D1;&#x4E86;&#x53CD;&#x6CD5;&#x540C;&#x76DF; &#x2192; &#x5BFC;&#x81F4;&#x4E86;...&quot;
  &#x2192; &#x8FD9;&#x9700;&#x8981;&#x5728;&#x591A;&#x6761;&#x56E0;&#x679C;&#x94FE;&#x4E2D;&#x63A2;&#x7D22;&#x3001;&#x8BC4;&#x4F30;&#x3001;&#x9009;&#x62E9;
  &#x2192; ToT &#x7684;&#x6811;&#x641C;&#x7D22;&#x5C31;&#x662F;&#x5728;&#x505A;&#x8FD9;&#x4EF6;&#x4E8B;
</code></pre>
<p>Engram &#x8BBA;&#x6587;&#x7684;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x5DF2;&#x7ECF;&#x9A8C;&#x8BC1;&#x4E86;&#x8FD9;&#x4E00;&#x5206;&#x5DE5;&#xFF1A;&#x5173;&#x95ED; Engram &#x540E;&#xFF0C;&#x4E8B;&#x5B9E;&#x7C7B;&#x4EFB;&#x52A1;&#xFF08;TriviaQA&#xFF09;&#x66B4;&#x8DCC;&#x5230; 29%&#xFF0C;&#x4F46;&#x9605;&#x8BFB;&#x7406;&#x89E3;&#xFF08;C3&#xFF09;&#x4EC5;&#x4E0B;&#x964D;&#x5230; 93%&#x2014;&#x2014;<strong>&#x8BF4;&#x660E;&#x4E8B;&#x5B9E;&#x68C0;&#x7D22;&#x548C;&#x63A8;&#x7406;&#x786E;&#x5B9E;&#x662F;&#x4E0D;&#x540C;&#x7684;&#x8BA4;&#x77E5;&#x80FD;&#x529B;</strong>&#x3002;ToT &#x589E;&#x5F3A;&#x7684;&#x6070;&#x6070;&#x662F; Engram &#x4E0D;&#x64C5;&#x957F;&#x7684;&#x540E;&#x8005;&#x3002;</p>
<h3 id="3. &#x786E;&#x5B9A;&#x6027; vs &#x63A2;&#x7D22;&#x6027;&#xFF1A;&#x4E24;&#x79CD;&#x622A;&#x7136;&#x4E0D;&#x540C;&#x7684;&quot;&#x67E5;&#x627E;&quot;"><a href="#3. &#x786E;&#x5B9A;&#x6027; vs &#x63A2;&#x7D22;&#x6027;&#xFF1A;&#x4E24;&#x79CD;&#x622A;&#x7136;&#x4E0D;&#x540C;&#x7684;&quot;&#x67E5;&#x627E;&quot;"></a>3. &#x786E;&#x5B9A;&#x6027; vs &#x63A2;&#x7D22;&#x6027;&#xFF1A;&#x4E24;&#x79CD;&#x622A;&#x7136;&#x4E0D;&#x540C;&#x7684;&quot;&#x67E5;&#x627E;&quot;</h3>
<p>&#x4E24;&#x7BC7;&#x8BBA;&#x6587;&#x867D;&#x7136;&#x90FD;&#x6D89;&#x53CA;&quot;&#x641C;&#x7D22;&quot;&#xFF0C;&#x4F46;&#x5B83;&#x4EEC;&#x7684;&#x641C;&#x7D22;&#x6027;&#x8D28;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#xFF1A;</p>
<pre><code>Engram &#x7684;&quot;&#x641C;&#x7D22;&quot;&#xFF1A;&#x786E;&#x5B9A;&#x6027;&#x67E5;&#x627E;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x8F93;&#x5165; N-gram &#x2192; &#x56FA;&#x5B9A;&#x54C8;&#x5E0C;&#x51FD;&#x6570; &#x2192; &#x786E;&#x5B9A;&#x7684;&#x5730;&#x5740; &#x2192; &#x786E;&#x5B9A;&#x7684;&#x5411;&#x91CF;
  
  &#x7279;&#x70B9;&#xFF1A;
  &#x2713; &#x4E25;&#x683C; O(1)&#xFF0C;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x4E0D;&#x786E;&#x5B9A;&#x6027;
  &#x2713; &#x540C;&#x4E00;&#x4E2A;&#x8F93;&#x5165;&#x6C38;&#x8FDC;&#x8FD4;&#x56DE;&#x540C;&#x4E00;&#x4E2A;&#x7ED3;&#x679C;
  &#x2713; &#x4E0D;&#x9700;&#x8981;&#x8BC4;&#x4F30;&#x3001;&#x4E0D;&#x9700;&#x8981;&#x56DE;&#x6EAF;
  &#x2713; &#x9002;&#x5408;&#x5DF2;&#x7ECF;&#x5B66;&#x8FC7;&#x7684;&#x3001;&#x786E;&#x5B9A;&#x6027;&#x7684;&#x77E5;&#x8BC6;
  
  &#x7C7B;&#x6BD4;&#xFF1A;&#x67E5;&#x5B57;&#x5178;&#x2014;&#x2014;&#x7FFB;&#x5230;&quot;A&quot;&#x5F00;&#x5934;&#x7684;&#x9875;&#x9762;&#x5C31;&#x80FD;&#x627E;&#x5230;&quot;Apple&quot;

ToT &#x7684;&#x641C;&#x7D22;&#xFF1A;&#x63A2;&#x7D22;&#x6027;&#x641C;&#x7D22;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x5F53;&#x524D;&#x72B6;&#x6001; &#x2192; &#x751F;&#x6210;&#x591A;&#x4E2A;&#x5019;&#x9009; &#x2192; &#x8BC4;&#x4F30; &#x2192; &#x9009;&#x62E9;/&#x56DE;&#x6EAF;

  &#x7279;&#x70B9;&#xFF1A;
  &#x2713; O(b^T) &#x6700;&#x574F;&#x60C5;&#x51B5;&#xFF0C;&#x4F46;&#x901A;&#x8FC7;&#x526A;&#x679D;&#x5927;&#x5E45;&#x51CF;&#x5C11;
  &#x2713; &#x540C;&#x4E00;&#x4E2A;&#x8F93;&#x5165;&#x53EF;&#x80FD;&#x8D70;&#x4E0D;&#x540C;&#x7684;&#x8DEF;&#x5F84;
  &#x2713; &#x6838;&#x5FC3;&#x662F;&#x8BC4;&#x4F30;&#x548C;&#x56DE;&#x6EAF;&#x673A;&#x5236;
  &#x2713; &#x9002;&#x5408;&#x672A;&#x77E5;&#x7684;&#x3001;&#x9700;&#x8981;&#x53D1;&#x73B0;&#x7684;&#x89E3;&#x9898;&#x8DEF;&#x5F84;
  
  &#x7C7B;&#x6BD4;&#xFF1A;&#x8D70;&#x8FF7;&#x5BAB;&#x2014;&#x2014;&#x9700;&#x8981;&#x5C1D;&#x8BD5;&#x3001;&#x78B0;&#x58C1;&#x3001;&#x9000;&#x56DE;&#x3001;&#x6362;&#x8DEF;
</code></pre>
<h3 id="4. &#x6D45;&#x5C42;&#x6CE8;&#x5165; vs &#x5168;&#x5C40;&#x91CD;&#x7EC4;&#xFF1A;&#x5BF9;&#x4FE1;&#x606F;&#x6D41;&#x7684;&#x4E0D;&#x540C;&#x5F71;&#x54CD;"><a href="#4. &#x6D45;&#x5C42;&#x6CE8;&#x5165; vs &#x5168;&#x5C40;&#x91CD;&#x7EC4;&#xFF1A;&#x5BF9;&#x4FE1;&#x606F;&#x6D41;&#x7684;&#x4E0D;&#x540C;&#x5F71;&#x54CD;"></a>4. &#x6D45;&#x5C42;&#x6CE8;&#x5165; vs &#x5168;&#x5C40;&#x91CD;&#x7EC4;&#xFF1A;&#x5BF9;&#x4FE1;&#x606F;&#x6D41;&#x7684;&#x4E0D;&#x540C;&#x5F71;&#x54CD;</h3>
<p>Engram &#x5728;&#x6A21;&#x578B;<strong>&#x6D45;&#x5C42;&#xFF08;Layer 2-4&#xFF09;<strong>&#x6CE8;&#x5165;&#x9759;&#x6001;&#x77E5;&#x8BC6;&#xFF0C;&#x6539;&#x53D8;&#x7684;&#x662F;</strong>&#x5C40;&#x90E8;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;</strong>&#xFF1B;ToT &#x5728;&#x6A21;&#x578B;<strong>&#x5916;&#x90E8;</strong>&#x91CD;&#x7EC4;&#x63A8;&#x7406;&#x8DEF;&#x5F84;&#xFF0C;&#x6539;&#x53D8;&#x7684;&#x662F;<strong>&#x5168;&#x5C40;&#x7684; token &#x5E8F;&#x5217;</strong>&#xFF1A;</p>
<pre><code>Engram &#x7684;&#x4FE1;&#x606F;&#x6D41;&#x6539;&#x53D8;&#xFF08;&#x6A21;&#x578B;&#x5185;&#x90E8;&#xFF0C;&#x5FAE;&#x89C2;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  Layer 1 &#x8F93;&#x51FA; h_t
       &#x2502;
       + Engram &#x67E5;&#x8868;&#x7ED3;&#x679C; Y_t    &#x2190; &#x6D45;&#x5C42;&#x6CE8;&#x5165;&#xFF0C;&#x4E00;&#x6B21;&#x6027;
       &#x2502;
  Layer 2 Attention&#xFF08;&#x8F93;&#x5165;&#x5DF2;&#x589E;&#x5F3A;&#xFF09;
       &#x2502;
  Layer 3-30&#xFF08;&#x6B63;&#x5E38;&#x8BA1;&#x7B97;&#xFF09;
       &#x2502;
  &#x8F93;&#x51FA;

  &#x2192; &#x4FE1;&#x606F;&#x6D41;&#x88AB;&quot;&#x63D0;&#x524D;&#x6CE8;&#x5165;&quot;&#x4E86;&#x4E8B;&#x5B9E;&#x77E5;&#x8BC6;
  &#x2192; &#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x88AB;&#x91CA;&#x653E;&#x53BB;&#x505A;&#x63A8;&#x7406;
  &#x2192; &#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#xFF1A;Engram Layer 5 &#x2248; MoE Layer 12

ToT &#x7684;&#x4FE1;&#x606F;&#x6D41;&#x6539;&#x53D8;&#xFF08;&#x6A21;&#x578B;&#x5916;&#x90E8;&#xFF0C;&#x5B8F;&#x89C2;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x95EE;&#x9898; x
       &#x2502;
   &#x250C;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2510;
  LM &#x751F;&#x6210;  LM &#x751F;&#x6210;  LM &#x751F;&#x6210;     &#x2190; &#x591A;&#x6B21;&#x8C03;&#x7528; LM
  &#x601D;&#x7EF4; z&#x2081;  &#x601D;&#x7EF4; z&#x2082;  &#x601D;&#x7EF4; z&#x2083;
   &#x2502;        &#x2502;        &#x2502;
  LM &#x8BC4;&#x4F30;  LM &#x8BC4;&#x4F30;  LM &#x8BC4;&#x4F30;     &#x2190; &#x518D;&#x6B21;&#x8C03;&#x7528; LM
  &quot;sure&quot;   &quot;impos.&quot; &quot;maybe&quot;
   &#x2502;                  &#x2502;
   &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
        &#x2502; &#x9009;&#x62E9;&#x6700;&#x4F73;
     &#x4E0B;&#x4E00;&#x8F6E;&#x751F;&#x6210;...

  &#x2192; &#x4FE1;&#x606F;&#x6D41;&#x88AB;&quot;&#x6811;&#x72B6;&#x91CD;&#x7EC4;&quot;
  &#x2192; &#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x90FD;&#x662F;&#x4E00;&#x6B21;&#x5B8C;&#x6574;&#x7684; LM forward pass
  &#x2192; &#x7528;&#x591A;&#x6B21; forward pass &#x6362;&#x53D6;&#x66F4;&#x9AD8;&#x7684;&#x63A8;&#x7406;&#x8D28;&#x91CF;
</code></pre>
<h3 id="5. &#x5982;&#x679C; Engram &#x9047;&#x4E0A; ToT&#xFF1A;&#x7406;&#x60F3;&#x7684;&#x8BA4;&#x77E5;&#x67B6;&#x6784;&#xFF1F;"><a href="#5. &#x5982;&#x679C; Engram &#x9047;&#x4E0A; ToT&#xFF1A;&#x7406;&#x60F3;&#x7684;&#x8BA4;&#x77E5;&#x67B6;&#x6784;&#xFF1F;"></a>5. &#x5982;&#x679C; Engram &#x9047;&#x4E0A; ToT&#xFF1A;&#x7406;&#x60F3;&#x7684;&#x8BA4;&#x77E5;&#x67B6;&#x6784;&#xFF1F;</h3>
<p>&#x5C06;&#x4E24;&#x8005;&#x7ED3;&#x5408;&#x7684;&#x5047;&#x60F3;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x4F1A;&#x83B7;&#x5F97;&#x975E;&#x5E38;&#x4E92;&#x8865;&#x7684;&#x80FD;&#x529B;&#x589E;&#x5F3A;&#xFF1A;</p>
<pre><code>&#x5047;&#x60F3;&#x7684; &quot;Engram + ToT&quot; &#x7CFB;&#x7EDF;&#xFF1A;

  &#x95EE;&#x9898;: &quot;&#x7528; 1789, 4, 7, 14 &#x51D1;&#x51FA; 24&quot;

  &#x2501;&#x2501; Engram &#x5C42;&#x9762;&#xFF08;&#x6BCF;&#x6B21; LM &#x8C03;&#x7528;&#x5185;&#x90E8;&#x81EA;&#x52A8;&#x751F;&#x6548;&#xFF09;&#x2501;&#x2501;
  
  &#x6A21;&#x578B;&#x5904;&#x7406; &quot;1789&quot; &#x65F6;&#xFF1A;
    Engram &#x67E5;&#x8868; &#x2192; &quot;1789 = &#x6CD5;&#x56FD;&#x5927;&#x9769;&#x547D;&#x5E74;&#x4EFD;&quot;
    &#x95E8;&#x63A7; &#x3B1;_t &#x2192; &#x5F53;&#x524D;&#x662F;&#x6570;&#x5B66;&#x4EFB;&#x52A1;&#xFF0C;&#x3B1;_t &#x2248; 0.05 &#x2192; &#x5FFD;&#x7565;
    &#x2192; Engram &#x81EA;&#x52A8;&#x5224;&#x65AD;&#x8FD9;&#x6761;&#x8BB0;&#x5FC6;&#x4E0E;&#x5F53;&#x524D;&#x8BED;&#x5883;&#x65E0;&#x5173;

  &#x6A21;&#x578B;&#x5904;&#x7406;&#x7B97;&#x672F;&#x6B65;&#x9AA4;&#x65F6;&#xFF1A;
    Engram &#x67E5;&#x8868; &#x2192; &#x5E38;&#x89C1;&#x7B97;&#x672F;&#x6A21;&#x5F0F;
    &#x95E8;&#x63A7; &#x3B1;_t &#x2192; &#x6570;&#x5B66;&#x8BED;&#x5883;&#x5339;&#x914D;&#xFF0C;&#x3B1;_t &#x2248; 0.8 &#x2192; &#x91C7;&#x7EB3;
    &#x2192; Engram &#x8F85;&#x52A9;&#x5FEB;&#x901F;&#x8BC6;&#x522B;&#x53EF;&#x884C;&#x7684;&#x8FD0;&#x7B97;&#x6A21;&#x5F0F;

  &#x2501;&#x2501; ToT &#x5C42;&#x9762;&#xFF08;&#x5728;&#x591A;&#x6B21; LM &#x8C03;&#x7528;&#x4E4B;&#x95F4;&#x534F;&#x8C03;&#xFF09;&#x2501;&#x2501;
  
  &#x751F;&#x6210;&#x5019;&#x9009;: &quot;1789 &#xF7; 7 = 255.57...&quot; &#x2192; &#x8BC4;&#x4F30;: impossible &#x2717;
  &#x751F;&#x6210;&#x5019;&#x9009;: &quot;14 - 7 = 7, 1789...&quot; &#x2192; &#x8BC4;&#x4F30;: impossible &#x2717;
  &#x751F;&#x6210;&#x5019;&#x9009;: &quot;14 &#xD7; (7 - 4) - 1789...&quot; &#x2192; &#x8BC4;&#x4F30;: impossible &#x2717;
  &#x56DE;&#x6EAF; &#x2192; &#x91CD;&#x65B0;&#x601D;&#x8003;...
  &#x751F;&#x6210;&#x5019;&#x9009;: &quot;7 &#xD7; 4 - 14 &#xF7; (1789-1789)...&quot; &#x2192; &#x9664;&#x96F6;&#xFF01;&#x2717;
  ...

  &#x2192; Engram &#x5728;&#x6BCF;&#x6B21;&quot;&#x5FEB;&#x601D;&#x8003;&quot;&#x4E2D;&#x63D0;&#x4F9B;&#x77E5;&#x8BC6;&#x652F;&#x6491;
  &#x2192; ToT &#x5728;&quot;&#x6162;&#x601D;&#x8003;&quot;&#x5C42;&#x9762;&#x534F;&#x8C03;&#x591A;&#x6B21;&#x5C1D;&#x8BD5;
</code></pre>
<h2 id="&#x5173;&#x952E;&#x6D1E;&#x5BDF;"><a href="#&#x5173;&#x952E;&#x6D1E;&#x5BDF;"></a>&#x5173;&#x952E;&#x6D1E;&#x5BDF;</h2>
<h3 id="1. &#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;&#x7684;&quot;&#x6D8C;&#x73B0;&quot;"><a href="#1. &#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;&#x7684;&quot;&#x6D8C;&#x73B0;&quot;"></a>1. &#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;&#x7684;&quot;&#x6D8C;&#x73B0;&quot;</h3>
<p>ToT &#x6700;&#x6DF1;&#x523B;&#x7684;&#x8D21;&#x732E;&#x4E0D;&#x662F;&#x6811;&#x641C;&#x7D22;&#x672C;&#x8EAB;&#xFF08;&#x8FD9;&#x662F; 1950 &#x5E74;&#x4EE3;&#x5C31;&#x6709;&#x7684;&#x8001;&#x601D;&#x60F3;&#xFF09;&#xFF0C;&#x800C;&#x662F;<strong>&#x8BA9; LM &#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63A8;&#x7406;&#x6765;&#x5145;&#x5F53;&#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;</strong>&#x3002;&#x4F20;&#x7EDF;&#x641C;&#x7D22;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x8BBE;&#x8BA1;&#x8BC4;&#x4F30;&#x51FD;&#x6570;&#xFF08;Deep Blue &#x7684;&#x68CB;&#x76D8;&#x8BC4;&#x4F30;&#xFF09;&#x6216;&#x8BAD;&#x7EC3;&#x4E13;&#x7528;&#x6A21;&#x578B;&#xFF08;AlphaGo &#x7684;&#x4EF7;&#x503C;&#x7F51;&#x7EDC;&#xFF09;&#xFF0C;&#x800C; ToT &#x53D1;&#x73B0;&#xFF1A;<strong>&#x8DB3;&#x591F;&#x5F3A;&#x5927;&#x7684; LM &#x5DF2;&#x7ECF;&#x6D8C;&#x73B0;&#x51FA;&#x4E86;&#x8BC4;&#x4F30;&#x4E2D;&#x95F4;&#x72B6;&#x6001;&#x7684;&#x80FD;&#x529B;</strong>&#xFF0C;&#x53EA;&#x9700;&#x901A;&#x8FC7;&#x6070;&#x5F53;&#x7684; prompt &#x5C31;&#x80FD;&#x6FC0;&#x6D3B;&#x3002;</p>
<p>&#x8FD9;&#x4E0E; Engram &#x95E8;&#x63A7;&#x673A;&#x5236;&#x7684; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>&#x3B1;</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">\\alpha_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">&#x3B1;</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">&#x200B;</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> &#x5F62;&#x6210;&#x6709;&#x8DA3;&#x7684;&#x547C;&#x5E94;&#x2014;&#x2014;&#x4E24;&#x8005;&#x90FD;&#x662F;&quot;&#x8BC4;&#x4F30;&#x4FE1;&#x606F;&#x662F;&#x5426;&#x6709;&#x7528;&quot;&#x7684;&#x673A;&#x5236;&#xFF0C;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x5728;&#x6A21;&#x578B;&#x5185;&#x90E8;&#xFF08;&#x53EF;&#x5FAE;&#x5206;&#x7684;&#x6807;&#x91CF;&#x95E8;&#x63A7;&#xFF09;&#xFF0C;&#x4E00;&#x4E2A;&#x5728;&#x6A21;&#x578B;&#x5916;&#x90E8;&#xFF08;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63A8;&#x7406;&#x7684;&#x542F;&#x53D1;&#x5F0F;&#xFF09;&#x3002;</p>
<h3 id="2. &#x901A;&#x7528;&#x6027;&#x4E0E;&#x6A21;&#x5757;&#x5316;"><a href="#2. &#x901A;&#x7528;&#x6027;&#x4E0E;&#x6A21;&#x5757;&#x5316;"></a>2. &#x901A;&#x7528;&#x6027;&#x4E0E;&#x6A21;&#x5757;&#x5316;</h3>
<p>ToT &#x7684;&#x56DB;&#x4E2A;&#x7EC4;&#x4EF6;&#xFF08;&#x601D;&#x7EF4;&#x5206;&#x89E3;&#x3001;&#x751F;&#x6210;&#x3001;&#x8BC4;&#x4F30;&#x3001;&#x641C;&#x7D22;&#xFF09;&#x5B8C;&#x5168;&#x6B63;&#x4EA4;&#xFF0C;&#x53EF;&#x4EE5;&#x72EC;&#x7ACB;&#x66FF;&#x6362;&#xFF1A;</p>
<ul>
<li>IO / CoT / CoT-SC &#x90FD;&#x662F; ToT &#x7684;&#x7279;&#x4F8B;&#xFF08;&#x6DF1;&#x5EA6;/&#x5BBD;&#x5EA6;&#x4E3A; 1 &#x7684;&#x9000;&#x5316;&#x6811;&#xFF09;</li>
<li>&#x53EF;&#x4EE5;&#x4E3A;&#x4E0D;&#x540C;&#x4EFB;&#x52A1;&#x5B9A;&#x5236;&#x4E0D;&#x540C;&#x7684;&#x5206;&#x89E3;&#x7C92;&#x5EA6;&#x548C;&#x641C;&#x7D22;&#x7B56;&#x7565;</li>
<li>&#x4E0D;&#x9700;&#x8981;&#x989D;&#x5916;&#x8BAD;&#x7EC3;&#xFF0C;&#x5373;&#x63D2;&#x5373;&#x7528;</li>
</ul>
<p>&#x8FD9;&#x79CD;&#x6A21;&#x5757;&#x5316;&#x8BBE;&#x8BA1;&#x548C; Engram &#x7684;&quot;&#x8BA1;&#x7B97;&#x4E0E;&#x5B58;&#x50A8;&#x89E3;&#x8026;&quot;&#x54F2;&#x5B66;&#x4E00;&#x8109;&#x76F8;&#x627F;&#x2014;&#x2014;<strong>&#x597D;&#x7684;&#x7CFB;&#x7EDF;&#x8BBE;&#x8BA1;&#x5E94;&#x8BE5;&#x8BA9;&#x4E0D;&#x540C;&#x80FD;&#x529B;&#x72EC;&#x7ACB;&#x6269;&#x5C55;</strong>&#x3002;</p>
<h3 id="3. &#x6210;&#x672C;&#x4E0E;&#x6548;&#x7387;&#x7684;&#x6743;&#x8861;"><a href="#3. &#x6210;&#x672C;&#x4E0E;&#x6548;&#x7387;&#x7684;&#x6743;&#x8861;"></a>3. &#x6210;&#x672C;&#x4E0E;&#x6548;&#x7387;&#x7684;&#x6743;&#x8861;</h3>
<p>ToT &#x7684;&#x4E3B;&#x8981;&#x4EE3;&#x4EF7;&#x662F;<strong>&#x63A8;&#x7406;&#x65F6;&#x7684;&#x8BA1;&#x7B97;&#x6210;&#x672C;</strong>&#x2014;&#x2014;&#x89E3;&#x4E00;&#x9053; Game of 24 &#x9700;&#x8981;&#x7EA6; 5500 &#x4E2A; completion token&#xFF08;&#x76F8;&#x5F53;&#x4E8E; ~100 &#x6B21; CoT &#x7684; token &#x91CF;&#xFF09;&#xFF0C;API &#x6210;&#x672C;&#x7EA6; $0.74/&#x9898;&#x3002;&#x800C; Engram &#x7684;&#x4EE3;&#x4EF7;&#x662F;<strong>&#x5B58;&#x50A8;&#x6210;&#x672C;</strong>&#x2014;&#x2014;&#x9700;&#x8981;&#x989D;&#x5916;&#x7684; DRAM &#x6765;&#x5B58;&#x653E;&#x5D4C;&#x5165;&#x8868;&#xFF0C;&#x4F46;&#x63A8;&#x7406;&#x65F6;&#x7684; FLOPs &#x4E0D;&#x589E;&#x52A0;&#x3002;</p>
<pre><code>&#x4E24;&#x79CD;&#x589E;&#x5F3A;&#x65B9;&#x5F0F;&#x7684;&#x6210;&#x672C;&#x6A21;&#x578B;&#xFF1A;

  Engram: &#x4E00;&#x6B21;&#x6027;&#x6210;&#x672C;&#xFF08;&#x8BAD;&#x7EC3;+&#x90E8;&#x7F72;&#xFF09;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x8BAD;&#x7EC3;: &#x7AEF;&#x5230;&#x7AEF;&#x8BAD;&#x7EC3;&#xFF0C;&#x65E0;&#x989D;&#x5916;&#x8BAD;&#x7EC3;&#x6210;&#x672C;
  &#x90E8;&#x7F72;: DRAM &#x5B58;&#x50A8;&#xFF08;~22GB/&#x5C42;&#xFF09;+ PCIe &#x5E26;&#x5BBD;
  &#x63A8;&#x7406;: &#x4E25;&#x683C; O(1) &#x67E5;&#x8868;&#xFF0C;FLOPs &#x4E0D;&#x53D8;
  &#x2192; &#x8FB9;&#x9645;&#x6210;&#x672C; &#x2248; 0&#xFF08;&#x6BCF;&#x6B21;&#x63A8;&#x7406;&#x51E0;&#x4E4E;&#x514D;&#x8D39;&#xFF09;

  ToT: &#x6BCF;&#x6B21;&#x63A8;&#x7406;&#x90FD;&#x6709;&#x989D;&#x5916;&#x6210;&#x672C;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x8BAD;&#x7EC3;: &#x65E0;&#xFF08;&#x4F7F;&#x7528;&#x73B0;&#x6210; LM&#xFF09;
  &#x90E8;&#x7F72;: &#x65E0;&#x989D;&#x5916;&#x57FA;&#x7840;&#x8BBE;&#x65BD;
  &#x63A8;&#x7406;: 5-100x &#x7684; token &#x751F;&#x6210;&#x91CF;
  &#x2192; &#x8FB9;&#x9645;&#x6210;&#x672C;&#x9AD8;&#xFF08;&#x6BCF;&#x6B21;&#x63A8;&#x7406;&#x90FD;&#x8981;&#x591A;&#x6B21; LM &#x8C03;&#x7528;&#xFF09;
</code></pre>
<p>&#x8FD9;&#x6697;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x7814;&#x7A76;&#x65B9;&#x5411;&#xFF1A;<strong>&#x80FD;&#x5426;&#x5C06; ToT &#x7684;&#x641C;&#x7D22;&#x80FD;&#x529B;&quot;&#x5185;&#x5316;&quot;&#x5230;&#x6A21;&#x578B;&#x67B6;&#x6784;&#x4E2D;&#xFF1F;</strong> &#x5C31;&#x50CF; Engram &#x5C06; RAG &#x7684;&#x68C0;&#x7D22;&#x80FD;&#x529B;&#x5185;&#x5316;&#x4E3A;&#x53EF;&#x5FAE;&#x5206;&#x7684;&#x67E5;&#x627E;&#x8868;&#x4E00;&#x6837;&#xFF0C;&#x6216;&#x8BB8;&#x672A;&#x6765;&#x7684;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5728;&#x67B6;&#x6784;&#x5C42;&#x9762;&#x5B9E;&#x73B0;&#x67D0;&#x79CD;&quot;&#x5185;&#x7F6E;&#x641C;&#x7D22;&quot;&#x2014;&#x2014;&#x5728;&#x8BAD;&#x7EC3;&#x65F6;&#x5B66;&#x4F1A;&#x5728;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x7A7A;&#x95F4;&#x4E2D;&#x8FDB;&#x884C;&#x7C7B;&#x4F3C;&#x6811;&#x641C;&#x7D22;&#x7684;&#x63A2;&#x7D22;&#x3002;&#x4E8B;&#x5B9E;&#x4E0A;&#xFF0C;DeepSeek-R1 &#x7684;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x8BAD;&#x7EC3;&#x5DF2;&#x7ECF;&#x5728;&#x671D;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x8FC8;&#x51FA;&#x4E86;&#x4E00;&#x6B65;&#x3002;</p>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;CoT-SC &#x6BD4; ToT &#x66F4;&#x5B9E;&#x7528;&#xFF1F;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;CoT-SC &#x6BD4; ToT &#x66F4;&#x5B9E;&#x7528;&#xFF1F;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;CoT-SC &#x6BD4; ToT &#x66F4;&#x5B9E;&#x7528;&#xFF1F;</h2>
<p>ToT &#x7684;&#x8BBA;&#x6587;&#x5199;&#x5F97;&#x6F02;&#x4EAE;&#xFF0C;&#x4F46;&#x5B9E;&#x9645;&#x843D;&#x5730;&#x6BD4; CoT-SC &#x96BE;&#x5F97;&#x591A;&#x3002;&#x6838;&#x5FC3;&#x539F;&#x56E0;&#x5C31;&#x4E00;&#x4E2A;&#x5B57;&#xFF1A;<strong>&#x8BC4;&#x4F30;&#x4E0D;&#x9760;&#x8C31;</strong>&#x3002;</p>
<h3 id="CoT-SC &#x4E3A;&#x4EC0;&#x4E48;&#x5B9E;&#x7528;&#xFF1F;"><a href="#CoT-SC &#x4E3A;&#x4EC0;&#x4E48;&#x5B9E;&#x7528;&#xFF1F;"></a>CoT-SC &#x4E3A;&#x4EC0;&#x4E48;&#x5B9E;&#x7528;&#xFF1F;</h3>
<p>&#x56E0;&#x4E3A;&#x5B83;&#x7684;&#x5047;&#x8BBE;&#x6781;&#x5176;&#x7B80;&#x5355;&#x2014;&#x2014;&quot;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x51FA;&#x73B0;&#x7684;&#x6982;&#x7387;&#x6700;&#x9AD8;&quot;&#x3002;&#x91C7;&#x6837; N &#x6B21; &#x2192; &#x6295;&#x7968; &#x2192; &#x5B8C;&#x4E8B;&#x3002;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x989D;&#x5916;&#x7684; prompt &#x8BBE;&#x8BA1;&#xFF0C;&#x5B8C;&#x5168;&#x53EF;&#x5E76;&#x884C;&#xFF0C;&#x5B9E;&#x73B0; 10 &#x884C;&#x4EE3;&#x7801;&#x641E;&#x5B9A;&#x3002;</p>
<h3 id="ToT &#x7684;&quot;&#x7F8E;&#x4E3D;&#x9677;&#x9631;&quot;"><a href="#ToT &#x7684;&quot;&#x7F8E;&#x4E3D;&#x9677;&#x9631;&quot;"></a>ToT &#x7684;&quot;&#x7F8E;&#x4E3D;&#x9677;&#x9631;&quot;</h3>
<p>ToT &#x7684;&#x6574;&#x4E2A;&#x6846;&#x67B6;&#x90FD;&#x5EFA;&#x7ACB;&#x5728;&#x4E00;&#x4E2A;&#x8106;&#x5F31;&#x7684;&#x524D;&#x63D0;&#x4E0A;&#xFF1A;<strong>LM &#x80FD;&#x51C6;&#x786E;&#x8BC4;&#x4F30;&#x4E2D;&#x95F4;&#x72B6;&#x6001;&#x7684;&#x597D;&#x574F;</strong>&#x3002;&#x4F46;&#x5B9E;&#x9645;&#x4E0A;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x8BC4;&#x4F30; prompt &#x672C;&#x8EAB;&#x5C31;&#x5F88;&#x96BE;&#x8BBE;&#x8BA1;&#x3002;</strong> &#x8BBA;&#x6587;&#x91CC; Game of 24 &#x7684; &quot;sure/maybe/impossible&quot; &#x80FD;&#x7528;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x6570;&#x5B66;&#x9898;&#x6709;&#x786E;&#x5B9A;&#x6027;&#x7B54;&#x6848;&#x3002;&#x6362;&#x6210;&#x5F00;&#x653E;&#x5F0F;&#x4EFB;&#x52A1;&#xFF08;&#x5199;&#x4EE3;&#x7801;&#x3001;&#x505A;&#x51B3;&#x7B56;&#xFF09;&#xFF0C;LM &#x7ED9;&#x4E2D;&#x95F4;&#x72B6;&#x6001;&#x6253;&#x5206;&#x672C;&#x8EAB;&#x5C31;&#x4E0D;&#x9760;&#x8C31;&#x2014;&#x2014;&#x8BBA;&#x6587;&#x5728; Crosswords &#x5B9E;&#x9A8C;&#x91CC;&#x4E5F;&#x627F;&#x8BA4;&#x4E86;&#xFF0C;&#x6B63;&#x786E;&#x89E3;&#x6709;&#x65F6;&#x53CD;&#x800C;&#x88AB;&#x8BC4;&#x4F30;&#x5668;&#x526A;&#x6389;&#x4E86;&#x3002;</p>
</li>
<li>
<p><strong>&#x641C;&#x7D22;&#x7B56;&#x7565;&#x8981; per-task &#x5B9A;&#x5236;&#x3002;</strong> &#x8BBA;&#x6587;&#x4E09;&#x4E2A;&#x4EFB;&#x52A1;&#x5206;&#x522B;&#x7528;&#x4E86;&#x4E0D;&#x540C;&#x7684;&#x601D;&#x7EF4;&#x7C92;&#x5EA6;&#x3001;&#x4E0D;&#x540C;&#x7684;&#x751F;&#x6210;&#x7B56;&#x7565;&#xFF08;i.i.d. vs propose&#xFF09;&#x3001;&#x4E0D;&#x540C;&#x7684;&#x8BC4;&#x4F30;&#x7B56;&#x7565;&#xFF08;value vs vote&#xFF09;&#x3001;&#x4E0D;&#x540C;&#x7684;&#x641C;&#x7D22;&#x7B97;&#x6CD5;&#xFF08;BFS vs DFS&#xFF09;&#x3002;&#x9762;&#x5BF9;&#x4E00;&#x4E2A;&#x65B0;&#x4EFB;&#x52A1;&#xFF0C;&#x600E;&#x4E48;&#x9009;&#xFF1F;&quot;&#x6A21;&#x5757;&#x5316;&quot;&#x65E2;&#x662F;&#x4F18;&#x70B9;&#x4E5F;&#x662F;&#x8D1F;&#x62C5;&#x3002;</p>
</li>
<li>
<p><strong>&#x6210;&#x672C;&#x4E0D;&#x53EF;&#x5FFD;&#x89C6;&#x3002;</strong> &#x8BBA;&#x6587;&#x81EA;&#x5DF1;&#x7B97;&#x7684;&#x8D26;&#xFF1A;ToT &#x89E3;&#x4E00;&#x9053; Game of 24 &#x82B1; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0.74</mn><mtext>&#xFF0C;</mtext><mi>C</mi><mi>o</mi><mi>T</mi><mi>b</mi><mi>e</mi><mi>s</mi><mi>t</mi><mo>&#x2212;</mo><mi>o</mi><mi>f</mi><mo>&#x2212;</mo><mn>100</mn><mtext>&#x624D;</mtext></mrow><annotation encoding="application/x-tex">0.74&#xFF0C;CoT best-of-100 &#x624D;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord">0.74</span><span class="mord cjk_fallback">&#xFF0C;</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">b</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">&#x2212;</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">&#x2212;</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">100</span><span class="mord cjk_fallback">&#x624D;</span></span></span></span>0.47&#xFF0C;&#x800C;&#x4E14; CoT &#x662F;&#x53EF;&#x4EE5;&#x65E0;&#x8111;&#x5E76;&#x884C;&#x7684;&#xFF0C;ToT &#x7684; BFS &#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x8981;&#x7B49;&#x4E0A;&#x4E00;&#x5C42;&#x8BC4;&#x4F30;&#x5B8C;&#x3002;</p>
</li>
</ol>
<h3 id="&#x771F;&#x6B63;&#x7684;&#x6F14;&#x8FDB;&#x65B9;&#x5411;"><a href="#&#x771F;&#x6B63;&#x7684;&#x6F14;&#x8FDB;&#x65B9;&#x5411;"></a>&#x771F;&#x6B63;&#x7684;&#x6F14;&#x8FDB;&#x65B9;&#x5411;</h3>
<p>&#x81EA; 2023 &#x5E74; ToT &#x53D1;&#x8868;&#x4EE5;&#x6765;&#xFF0C;&#x4E1A;&#x754C;&#x7684;&#x5B9E;&#x9645;&#x9009;&#x62E9;&#x9A8C;&#x8BC1;&#x4E86;&#x8FD9;&#x4E2A;&#x5224;&#x65AD;&#x2014;&#x2014;&#x4E0E;&#x5176;&#x5728;&#x63A8;&#x7406;&#x65F6;&#x505A;&#x5916;&#x90E8;&#x641C;&#x7D22;&#xFF0C;&#x4E0D;&#x5982;<strong>&#x628A;&#x641C;&#x7D22;&#x80FD;&#x529B;&#x8BAD;&#x7EC3;&#x8FDB;&#x6A21;&#x578B;&#x5185;&#x90E8;</strong>&#xFF1A;</p>
<pre><code>ToT &#x7684;&#x7406;&#x60F3; vs &#x73B0;&#x5B9E;&#xFF1A;

  ToT &#x7684;&#x8DEF;&#x7EBF;&#xFF08;&#x5916;&#x90E8;&#x641C;&#x7D22;&#xFF09;:
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  &#x73B0;&#x6210; LM + &#x5916;&#x90E8;&#x6811;&#x641C;&#x7D22;&#x6846;&#x67B6; + &#x624B;&#x5DE5;&#x8BBE;&#x8BA1;&#x7684;&#x8BC4;&#x4F30; prompt
  &#x2192; &#x7075;&#x6D3B;&#x4F46;&#x8106;&#x5F31;&#xFF0C;&#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x90FD;&#x8981;&#x91CD;&#x65B0;&#x8C03;
  &#x2192; &#x8BC4;&#x4F30;&#x5668;&#x672C;&#x8EAB;&#x4E0D;&#x53EF;&#x9760;&#xFF0C;&#x641C;&#x7D22;&#x53EF;&#x80FD;&#x8D8A;&#x641C;&#x8D8A;&#x504F;
  &#x2192; &#x6210;&#x672C;&#x9AD8;&#xFF08;5-100x token&#xFF09;

  &#x4E1A;&#x754C;&#x5B9E;&#x9645;&#x8D70;&#x7684;&#x8DEF;&#x7EBF;&#xFF08;&#x5185;&#x90E8;&#x641C;&#x7D22;&#xFF09;:
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  OpenAI o1/o3&#x3001;DeepSeek-R1:
    &#x901A;&#x8FC7; RL &#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x5728;&#x5185;&#x90E8; token &#x6D41;&#x4E2D;&#x81EA;&#x52A8;&quot;&#x63A2;&#x7D22;-&#x8BC4;&#x4F30;-&#x56DE;&#x6EAF;&quot;
    &#x2192; &#x672C;&#x8D28;&#x4E0A;&#x662F;&#x628A; ToT &#x7684;&#x6811;&#x641C;&#x7D22;&quot;&#x5185;&#x5316;&quot;&#x6210;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x601D;&#x7EF4;&#x4E60;&#x60EF;
    &#x2192; &#x4E0D;&#x9700;&#x8981;&#x5916;&#x90E8;&#x6846;&#x67B6;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x624B;&#x5DE5;&#x8BBE;&#x8BA1;&#x8BC4;&#x4F30; prompt

  Best-of-N&#xFF08;&#x672C;&#x8D28;&#x5C31;&#x662F; CoT-SC&#xFF09;:
    &#x81F3;&#x4ECA;&#x4ECD;&#x662F;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x6700;&#x5E38;&#x7528;&#x7684;&#x63A8;&#x7406;&#x589E;&#x5F3A;&#x65B9;&#x6CD5;
    &#x2192; &#x7B80;&#x5355;&#x3001;&#x53EF;&#x63A7;&#x3001;&#x597D;&#x6269;&#x5C55;&#x3001;&#x53EF;&#x5E76;&#x884C;
</code></pre>
<h4 id="&quot;&#x5185;&#x90E8;&#x641C;&#x7D22;&quot;&#x5177;&#x4F53;&#x662F;&#x600E;&#x4E48;&#x505A;&#x5230;&#x7684;&#xFF1F;"><a href="#&quot;&#x5185;&#x90E8;&#x641C;&#x7D22;&quot;&#x5177;&#x4F53;&#x662F;&#x600E;&#x4E48;&#x505A;&#x5230;&#x7684;&#xFF1F;"></a>&quot;&#x5185;&#x90E8;&#x641C;&#x7D22;&quot;&#x5177;&#x4F53;&#x662F;&#x600E;&#x4E48;&#x505A;&#x5230;&#x7684;&#xFF1F;</h4>
<p>&#x56DE;&#x987E;&#x4E00;&#x4E0B; ToT &#x7684;&quot;&#x5916;&#x90E8;&#x641C;&#x7D22;&quot;&#x505A;&#x4E86;&#x4E09;&#x4EF6;&#x4E8B;&#xFF1A;<strong>&#x751F;&#x6210;</strong>&#x591A;&#x4E2A;&#x5019;&#x9009;&#x601D;&#x8DEF;&#xFF08;&#x6811;&#x7684;&#x5206;&#x652F;&#xFF09;&#x2192; <strong>&#x8BC4;&#x4F30;</strong>&#x6BCF;&#x4E2A;&#x601D;&#x8DEF;&#x597D;&#x4E0D;&#x597D;&#xFF08;&#x7528; LLM &#x6253;&#x5206;&#xFF09;&#x2192; <strong>&#x56DE;&#x6EAF;</strong>&#x5230;&#x4E4B;&#x524D;&#x7684;&#x8282;&#x70B9;&#x6362;&#x4E00;&#x6761;&#x8DEF;&#x3002;&#x8FD9;&#x4E09;&#x6B65;&#x90FD;&#x7531;&#x5916;&#x90E8; Python &#x6846;&#x67B6;&#x9A71;&#x52A8;&#xFF0C;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x5E76;&#x4E0D;&#x77E5;&#x9053;&#x81EA;&#x5DF1;&#x5728;&quot;&#x641C;&#x7D22;&quot;&#x3002;</p>
<p>o1/R1 &#x7684;&#x5173;&#x952E;&#x601D;&#x8DEF;&#x662F;&#xFF1A;<strong>&#x7528; RL &#x8BAD;&#x7EC3;&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x81EA;&#x5DF1;&#x7684; token &#x8F93;&#x51FA;&#x4E2D;&#x81EA;&#x53D1;&#x6D8C;&#x73B0;&#x51FA;&#x8FD9;&#x4E09;&#x79CD;&#x884C;&#x4E3A;</strong>&#x3002;</p>
<p><strong>&#x8BAD;&#x7EC3;&#x673A;&#x5236;&#xFF1A;</strong> &#x7ED9;&#x6A21;&#x578B;&#x4E00;&#x4E2A;&#x96BE;&#x9898;&#xFF08;&#x6BD4;&#x5982;&#x6570;&#x5B66;&#x9898;&#xFF09;&#xFF0C;&#x8BA9;&#x5B83;&#x8F93;&#x51FA;&#x4E00;&#x6BB5;&#x5F88;&#x957F;&#x7684;&quot;&#x601D;&#x8003;&#x8FC7;&#x7A0B;&quot;&#xFF08;extended chain-of-thought&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x53EA;&#x6839;&#x636E;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x7684;&#x5BF9;&#x9519;&#x7ED9;&#x5956;&#x52B1;&#xFF08;reward&#xFF09;&#x3002;RL &#x4E0D;&#x5173;&#x5FC3;&#x4E2D;&#x95F4;&#x8FC7;&#x7A0B;&#x2014;&#x2014;&#x6A21;&#x578B;&#x4E3A;&#x4E86;&#x62FF;&#x5230;&#x66F4;&#x9AD8;&#x5956;&#x52B1;&#xFF0C;&#x81EA;&#x7136;&#x4F1A;&#x6F14;&#x5316;&#x51FA;&quot;&#x8BD5;&#x9519;-&#x9A8C;&#x8BC1;-&#x56DE;&#x9000;&quot;&#x7684;&#x7B56;&#x7565;&#xFF0C;&#x56E0;&#x4E3A;&#x53EA;&#x8D70;&#x4E00;&#x6761;&#x8DEF;&#x5BB9;&#x6613;&#x9519;&#xFF0C;&#x800C;&#x5728; token &#x6D41;&#x4E2D;&#x591A;&#x5C1D;&#x8BD5;&#x51E0;&#x6761;&#x8DEF;&#x5E76;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF0C;&#x7B54;&#x5BF9;&#x6982;&#x7387;&#x5C31;&#x9AD8;&#xFF0C;&#x5956;&#x52B1;&#x5C31;&#x5927;&#x3002;</p>
<p><strong>&#x6D8C;&#x73B0;&#x51FA;&#x7684;&#x884C;&#x4E3A;&#x6A21;&#x5F0F;</strong>&#xFF08;&#x5728; R1 &#x7684; CoT &#x4E2D;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x89C2;&#x5BDF;&#x5230;&#xFF09;&#xFF1A;</p>
<pre><code>&#x5185;&#x90E8; token &#x6D41;&#x793A;&#x4F8B;&#xFF08;&#x4EE5; Game of 24 &#x4E3A;&#x4F8B;&#xFF0C;&#x7B80;&#x5316;&#x5C55;&#x793A;&#xFF09;&#xFF1A;

&quot;&#x8BA9;&#x6211;&#x8BD5;&#x8BD5;&#x65B9;&#x6CD5;A&#xFF1A;&#x5148;&#x7B97; 4&#xD7;6=24&#xFF0C;&#x4F46;&#x8FD8;&#x5269; 1 &#x548C; 9 &#x6CA1;&#x7528;...&#x4E0D;&#x5BF9;&#x3002;  &#x2190; &#x63A2;&#x7D22; + &#x8BC4;&#x4F30;
 &#x7B49;&#x7B49;&#xFF0C;&#x6362;&#x4E2A;&#x601D;&#x8DEF;&#xFF0C;&#x5982;&#x679C;&#x5148;&#x7528; 8-4=4...                         &#x2190; &#x56DE;&#x6EAF;
 4&#xD7;(3+3)=24&#xFF1F;&#x4E0D;&#x5BF9;&#x53EA;&#x6709;&#x4E00;&#x4E2A; 3...                             &#x2190; &#x518D;&#x6B21;&#x8BC4;&#x4F30;
 &#x91CD;&#x65B0;&#x60F3;&#xFF0C;(10-4)&#xD7;(9-5)... &#x8BA9;&#x6211;&#x9A8C;&#x7B97;&#xFF1A;6&#xD7;4=24&#xFF0C;&#x5BF9;&#x4E86;&#xFF01;&quot;         &#x2190; &#x63A2;&#x7D22;&#x65B0;&#x5206;&#x652F; + &#x786E;&#x8BA4;
</code></pre>
<p>&#x5BF9;&#x6BD4; ToT &#x7684;&#x5916;&#x90E8;&#x641C;&#x7D22;&#x548C; o1/R1 &#x7684;&#x5185;&#x90E8;&#x641C;&#x7D22;&#xFF1A;</p>
<table>
<thead>
<tr>
<th></th>
<th>ToT&#xFF08;&#x5916;&#x90E8;&#x641C;&#x7D22;&#xFF09;</th>
<th>o1/R1&#xFF08;&#x5185;&#x90E8;&#x641C;&#x7D22;&#xFF09;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x641C;&#x7D22;&#x63A7;&#x5236;</td>
<td>&#x5916;&#x90E8; Python &#x6846;&#x67B6;&#x663E;&#x5F0F;&#x9A71;&#x52A8;</td>
<td>&#x6A21;&#x578B;&#x5728; token &#x6D41;&#x4E2D;&#x81EA;&#x4E3B;&#x5B8C;&#x6210;</td>
</tr>
<tr>
<td>&#x8BC4;&#x4F30;&#x5668;</td>
<td>&#x5355;&#x72EC;&#x7684; LLM prompt &#x6253;&#x5206;</td>
<td>&#x6A21;&#x578B;&#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x81EA;&#x6211;&#x9A8C;&#x8BC1;</td>
</tr>
<tr>
<td>&#x56DE;&#x6EAF;</td>
<td>&#x7A0B;&#x5E8F;&#x6062;&#x590D;&#x5230;&#x4E4B;&#x524D;&#x7684;&#x72B6;&#x6001;&#x8282;&#x70B9;</td>
<td>&#x6A21;&#x578B;&#x8BF4;&quot;&#x4E0D;&#x5BF9;&#xFF0C;&#x6362;&#x4E2A;&#x65B9;&#x5411;&quot;</td>
</tr>
<tr>
<td>&#x4EFB;&#x52A1;&#x9002;&#x914D;</td>
<td>&#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x9700;&#x624B;&#x5DE5;&#x8BBE;&#x8BA1;&#x8BC4;&#x4F30; prompt</td>
<td>RL &#x8BAD;&#x7EC3;&#x540E;&#x53EF;&#x6CDB;&#x5316;&#x5230;&#x65B0;&#x4EFB;&#x52A1;</td>
</tr>
<tr>
<td>&#x8BAD;&#x7EC3;&#x6210;&#x672C;</td>
<td>&#x4E0D;&#x9700;&#x8981;&#x989D;&#x5916;&#x8BAD;&#x7EC3;</td>
<td>&#x9700;&#x8981;&#x5927;&#x91CF; RL &#x8BAD;&#x7EC3;</td>
</tr>
</tbody>
</table>
<p>&#x4E00;&#x4E2A;&#x76F4;&#x89C2;&#x7684;&#x7C7B;&#x6BD4;&#xFF1A;ToT &#x50CF;&#x662F;&#x4E00;&#x4E2A;&#x4EBA;&#x62FF;&#x7740;&#x7EB8;&#x7B14;&#x663E;&#x5F0F;&#x753B;&#x51B3;&#x7B56;&#x6811;&#x6765;&#x89E3;&#x9898;&#xFF0C;o1/R1 &#x5219;&#x50CF;&#x4E00;&#x4E2A;&#x7ECF;&#x9A8C;&#x4E30;&#x5BCC;&#x7684;&#x4EBA;&#x5728;&#x8111;&#x5B50;&#x91CC;&#x81EA;&#x52A8;&#x6743;&#x8861;&#x591A;&#x6761;&#x8DEF;&#x5F84;&#x2014;&#x2014;&#x540E;&#x8005;&#x66F4;&#x81EA;&#x7136;&#x3001;&#x66F4;&#x9AD8;&#x6548;&#xFF0C;&#x4F46;&#x9700;&#x8981;&#x5927;&#x91CF;&#x7EC3;&#x4E60;&#xFF08;RL &#x8BAD;&#x7EC3;&#xFF09;&#x624D;&#x80FD;&#x4E60;&#x5F97;&#x8FD9;&#x79CD;&quot;&#x5185;&#x5316;&#x7684;&#x641C;&#x7D22;&#x76F4;&#x89C9;&quot;&#x3002;</p>
<p><strong>&#x7ED3;&#x8BBA;&#xFF1A;ToT &#x7684;&#x7406;&#x8BBA;&#x8D21;&#x732E;&#x5F88;&#x5927;</strong>&#xFF08;&#x628A;&#x63A8;&#x7406;&#x5EFA;&#x6A21;&#x4E3A;&#x641C;&#x7D22;&#x95EE;&#x9898;&#xFF0C;&#x9996;&#x6B21;&#x8BA9; LM &#x81EA;&#x5DF1;&#x5F53;&#x542F;&#x53D1;&#x5F0F;&#x51FD;&#x6570;&#xFF09;&#xFF0C;&#x4F46;<strong>&#x5B9E;&#x8DF5;&#x4E0A; CoT-SC &#x786E;&#x5B9E;&#x662F;&#x66F4;&#x597D;&#x7684;&#x8D77;&#x70B9;</strong>&#x3002;ToT &#x66F4;&#x50CF;&#x662F;&#x4E00;&#x7BC7;&quot;&#x6307;&#x660E;&#x65B9;&#x5411;&quot;&#x7684;&#x8BBA;&#x6587;&#x2014;&#x2014;&#x5B83;&#x544A;&#x8BC9;&#x6211;&#x4EEC; LM &#x63A8;&#x7406;&#x5E94;&#x8BE5;&#x5F80;&#x641C;&#x7D22;&#x7684;&#x65B9;&#x5411;&#x8D70;&#xFF0C;&#x4F46;&#x6700;&#x7EC8;&#x7684;&#x7B54;&#x6848;&#x4E0D;&#x662F;&#x5728;&#x63A8;&#x7406;&#x65F6;&#x5916;&#x6302;&#x4E00;&#x68F5;&#x6811;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x5B66;&#x4F1A;&quot;&#x957F;&#x51FA;&#x6811;&#x6765;&quot;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>ToT &#x548C; Engram &#x5206;&#x522B;&#x4ECE;<strong>&#x63A8;&#x7406;&#x5C42;</strong>&#x548C;<strong>&#x67B6;&#x6784;&#x5C42;</strong>&#x589E;&#x5F3A;&#x4E86; LLM &#x7684;&#x80FD;&#x529B;&#xFF0C;&#x6070;&#x597D;&#x8986;&#x76D6;&#x4E86;&#x4EBA;&#x7C7B;&#x8BA4;&#x77E5;&#x7684;&#x4E24;&#x4E2A;&#x4E92;&#x8865;&#x7CFB;&#x7EDF;&#xFF1A;</p>
<ol>
<li><strong>Engram&#xFF08;System 1&#xFF09;&#xFF1A;</strong> &#x7528; O(1) &#x67E5;&#x8868;&#x589E;&#x5F3A;<strong>&#x5FEB;&#x901F;&#x77E5;&#x8BC6;&#x68C0;&#x7D22;</strong>&#x2014;&#x2014;&quot;&#x6211;&#x8BB0;&#x5F97;&#x8FD9;&#x4E2A;&#x4E8B;&#x5B9E;&quot;&#x3002;</li>
<li><strong>ToT&#xFF08;System 2&#xFF09;&#xFF1A;</strong> &#x7528;&#x6811;&#x641C;&#x7D22;&#x589E;&#x5F3A;<strong>&#x6DF1;&#x601D;&#x719F;&#x8651;&#x63A8;&#x7406;</strong>&#x2014;&#x2014;&quot;&#x8BA9;&#x6211;&#x4ED4;&#x7EC6;&#x60F3;&#x60F3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&quot;&#x3002;</li>
<li><strong>&#x4E24;&#x8005;&#x7684;&#x7ED3;&#x5408;</strong>&#x6697;&#x793A;&#x4E86;&#x672A;&#x6765; AI &#x7CFB;&#x7EDF;&#x7684;&#x7406;&#x60F3;&#x5F62;&#x6001;&#xFF1A;&#x65E2;&#x6709;&#x95EA;&#x7535;&#x822C;&#x7684;&#x77E5;&#x8BC6;&#x8C03;&#x53D6;&#x80FD;&#x529B;&#xFF0C;&#x53C8;&#x6709;&#x7CFB;&#x7EDF;&#x5316;&#x7684;&#x641C;&#x7D22;&#x4E0E;&#x89C4;&#x5212;&#x80FD;&#x529B;&#x2014;&#x2014;&#x6B63;&#x5982;&#x4EBA;&#x7C7B;&#x5927;&#x8111;&#x540C;&#x65F6;&#x5177;&#x5907;&#x76F4;&#x89C9;&#x53CD;&#x5E94;&#x548C;&#x7406;&#x6027;&#x601D;&#x8003;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2305.10601">&#x8BBA;&#x6587;&#x94FE;&#x63A5;</a></li>
<li><a href="https://github.com/princeton-nlp/tree-of-thought-llm">&#x9879;&#x76EE;&#x5730;&#x5740;</a></li>
<li><a href="https://arxiv.org/abs/2210.03629">ReAct: Synergizing Reasoning and Acting in Language Models</a> &#x2014; ToT &#x7684;&#x540C;&#x4E00;&#x4F5C;&#x8005; Shunyu Yao &#x7684;&#x524D;&#x5E8F;&#x5DE5;&#x4F5C;</li>
<li><a href="https://arxiv.org/abs/2601.07372">DeepSeek Engram: Conditional Memory via Scalable Lookup</a> &#x2014; &#x672C;&#x6587;&#x5BF9;&#x6BD4;&#x5206;&#x6790;&#x7684;&#x53C2;&#x7167;</li>
</ul>
<p><em>&#x521B;&#x5EFA;&#xFF1A;2026-03-04</em></p>
`,E=[{level:2,title:"ToT 解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"1. 思维分解（Thought Decomposition）",children:[]},{level:3,title:"2. 思维生成（Thought Generator）",children:[]},{level:3,title:"3. 状态评估（State Evaluator）",children:[]},{level:3,title:"4. 搜索算法（Search Algorithm）",children:[]},{level:3,title:"5. 完整数据流：以 Game of 24 为例",children:[]}]},{level:2,title:"实验结果",children:[]},{level:2,title:"从 Engram 视角看 ToT：System 1 与 System 2 的互补",children:[{level:3,title:"1. 架构层 vs 推理层：两个完全不同的干预层次",children:[]},{level:3,title:'2. "记忆"与"搜索"的分工',children:[]},{level:3,title:'3. 确定性 vs 探索性：两种截然不同的"查找"',children:[]},{level:3,title:"4. 浅层注入 vs 全局重组：对信息流的不同影响",children:[]},{level:3,title:"5. 如果 Engram 遇上 ToT：理想的认知架构？",children:[]}]},{level:2,title:"关键洞察",children:[{level:3,title:'1. 启发式函数的"涌现"',children:[]},{level:3,title:"2. 通用性与模块化",children:[]},{level:3,title:"3. 成本与效率的权衡",children:[]}]},{level:2,title:"冷思考：CoT-SC 比 ToT 更实用？",children:[{level:3,title:"CoT-SC 为什么实用？",children:[]},{level:3,title:'ToT 的"美丽陷阱"',children:[]},{level:3,title:"真正的演进方向",children:[{level:4,title:'"内部搜索"具体是怎么做到的？',children:[]}]}]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
