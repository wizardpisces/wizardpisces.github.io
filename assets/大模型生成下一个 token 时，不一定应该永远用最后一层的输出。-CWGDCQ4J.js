const x={},F=`<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x8BB2;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x53CD;&#x76F4;&#x89C9;&#x89C2;&#x70B9;&#xFF1A;</p>
<p><strong>&#x5927;&#x6A21;&#x578B;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A; token &#x65F6;&#xFF0C;&#x4E0D;&#x4E00;&#x5B9A;&#x5E94;&#x8BE5;&#x6C38;&#x8FDC;&#x7528;&#x6700;&#x540E;&#x4E00;&#x5C42;&#x7684;&#x8F93;&#x51FA;&#x3002;</strong></p>
<p>&#x8BBA;&#x6587;&#x9898;&#x76EE;&#x662F; <strong>&#x201C;Deeper is Not Always Better: Mitigating the Alignment Tax via Confident Layer Decoding&#x201D;</strong>&#x3002;&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#x662F;&#xFF1A;&#x6807;&#x51C6; LLM &#x89E3;&#x7801;&#x9ED8;&#x8BA4;&#x4ECE;&#x6700;&#x540E;&#x4E00;&#x5C42;&#x62FF; logits&#xFF0C;&#x4F46;&#x4F5C;&#x8005;&#x53D1;&#x73B0;&#xFF0C;&#x5728;&#x590D;&#x6742;&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#x91CC;&#xFF0C;&#x6700;&#x540E;&#x51E0;&#x5C42;&#x6709;&#x65F6;&#x4F1A;&#x628A;&#x4E2D;&#x95F4;&#x5C42;&#x5DF2;&#x7ECF;&#x5F62;&#x6210;&#x7684;&#x597D;&#x7B54;&#x6848;&#x201C;&#x6270;&#x52A8;&#x201D;&#x6389;&#x3002;&#x6765;&#x6E90;&#xFF1A;<a href="https://arxiv.org/html/2606.21906v1">arXiv &#x539F;&#x6587;</a>&#x3002;</p>
<p>&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x4E32;&#x8D77;&#x6765;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6A21;&#x578B;&#x5728;&#x89E3;&#x4E00;&#x9053;&#x7269;&#x7406;&#x9898;&#xFF1A;</p>
<blockquote>
<p>A planet has mass M and radius R. What determines the surface gravity?</p>
</blockquote>
<p>&#x5408;&#x7406;&#x7684;&#x5173;&#x952E; token &#x5E94;&#x8BE5;&#x6CBF;&#x7740;&#x7269;&#x7406;&#x8BED;&#x4E49;&#x8D70;&#xFF0C;&#x6BD4;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">mass, radius, gravitational, proportional, inverse-square
</code></pre>
<p>&#x6A21;&#x578B;&#x5185;&#x90E8;&#x751F;&#x6210;&#x6BCF;&#x4E2A; token &#x65F6;&#xFF0C;&#x4F1A;&#x7ECF;&#x8FC7;&#x5F88;&#x591A;&#x5C42;&#x3002;&#x8BBA;&#x6587;&#x628A;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x6982;&#x62EC;&#x6210;&#x4E09;&#x6BB5;&#xFF1A;</p>
<ol>
<li>
<p><strong>Guess &#x731C;&#x6D4B;&#x9636;&#x6BB5;</strong><br>
&#x524D;&#x51E0;&#x5C42;&#x5148;&#x5F62;&#x6210;&#x7C97;&#x7CD9;&#x9884;&#x6D4B;&#xFF0C;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x77E5;&#x9053;&#x201C;&#x8FD9;&#x662F;&#x7269;&#x7406;&#x9898;&#x201D;&#x3002;</p>
</li>
<li>
<p><strong>Refine &#x7CBE;&#x70BC;&#x9636;&#x6BB5;</strong><br>
&#x4E2D;&#x95F4;&#x5C42;&#x9010;&#x6E10;&#x6293;&#x5230;&#x771F;&#x6B63;&#x8BED;&#x4E49;&#xFF1A;&#x8FD9;&#x91CC;&#x8981;&#x8BB2;&#x8D28;&#x91CF;&#x3001;&#x534A;&#x5F84;&#x3001;&#x5F15;&#x529B;&#x516C;&#x5F0F;&#x3002;<br>
&#x5728;&#x67D0;&#x4E2A;&#x4E2D;&#x95F4;&#x504F;&#x540E;&#x7684;&#x5C42;&#xFF0C;&#x6A21;&#x578B;&#x5BF9;&#x4E0B;&#x4E00;&#x4E2A; token &#x53EF;&#x80FD;&#x5DF2;&#x7ECF;&#x975E;&#x5E38;&#x786E;&#x5B9A;&#xFF0C;&#x6BD4;&#x5982;&#x5F3A;&#x70C8;&#x503E;&#x5411;&#x8F93;&#x51FA; <code>radius</code>&#x3002;</p>
</li>
<li>
<p><strong>Perturb &#x6270;&#x52A8;&#x9636;&#x6BB5;</strong><br>
&#x6700;&#x540E;&#x51E0;&#x5C42;&#x53D7; instruction tuning / RLHF / DPO &#x8FD9;&#x7C7B;&#x5BF9;&#x9F50;&#x8BAD;&#x7EC3;&#x5F71;&#x54CD;&#xFF0C;&#x53EF;&#x80FD;&#x628A;&#x5206;&#x5E03;&#x5F80;&#x66F4;&#x5B89;&#x5168;&#x3001;&#x66F4;&#x666E;&#x901A;&#x3001;&#x66F4;&#x50CF;&#x52A9;&#x624B;&#x8BED;&#x6C14;&#x7684; token &#x62C9;&#x3002;<br>
&#x4E8E;&#x662F;&#x672C;&#x6765;&#x5F88;&#x5177;&#x4F53;&#x7684; <code>radius</code>&#x3001;<code>mass</code>&#xFF0C;&#x53EF;&#x80FD;&#x88AB;&#x62C9;&#x5411; <code>the</code>&#x3001;<code>is</code>&#x3001;<code>.</code>&#x3001;<code>therefore</code> &#x8FD9;&#x7C7B;&#x9AD8;&#x9891;&#x3001;&#x901A;&#x7528;&#x3001;&#x987A;&#x6ED1;&#x4F46;&#x4FE1;&#x606F;&#x91CF;&#x4F4E;&#x7684; token&#x3002;</p>
</li>
</ol>
<p>&#x8FD9;&#x5C31;&#x662F;&#x8BBA;&#x6587;&#x8BF4;&#x7684; <strong>alignment tax&#xFF0C;&#x5BF9;&#x9F50;&#x7A0E;</strong>&#xFF1A;</p>
<p><strong>&#x5BF9;&#x9F50;&#x8BAD;&#x7EC3;&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x542C;&#x8BDD;&#x3001;&#x66F4;&#x5B89;&#x5168;&#x3001;&#x66F4;&#x50CF;&#x52A9;&#x624B;&#xFF0C;&#x4F46;&#x5728;&#x9AD8;&#x96BE;&#x63A8;&#x7406;&#x65F6;&#xFF0C;&#x6700;&#x540E;&#x5C42;&#x7684;&#x201C;&#x52A9;&#x624B;&#x5316;/&#x5B89;&#x5168;&#x5316;/&#x901A;&#x7528;&#x5316;&#x201D;&#x503E;&#x5411;&#x53EF;&#x80FD;&#x4F1A;&#x4F24;&#x5BB3;&#x5DF2;&#x7ECF;&#x5F62;&#x6210;&#x7684;&#x63A8;&#x7406;&#x8F68;&#x8FF9;&#x3002;</strong></p>
<p>&#x6240;&#x4EE5;&#x4F5C;&#x8005;&#x63D0;&#x51FA; <strong>Confident Decoding</strong>&#x3002;</p>
<p>&#x5B83;&#x4E0D;&#x662F;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x780D;&#x6389;&#x540E;&#x51E0;&#x5C42;&#x3002;&#x6A21;&#x578B;&#x4ECD;&#x7136;&#x5B8C;&#x6574;&#x8DD1;&#x5B8C;&#x6240;&#x6709;&#x5C42;&#x3002;&#x533A;&#x522B;&#x53EA;&#x5728;&#x4E8E;&#xFF1A;<br>
&#x6807;&#x51C6;&#x89E3;&#x7801;&#x6C38;&#x8FDC;&#x4ECE;&#x6700;&#x540E;&#x4E00;&#x5C42;&#x62FF; token&#xFF1B;Confident Decoding &#x4F1A;&#x5728;&#x9760;&#x8FD1;&#x6700;&#x540E;&#x7684;&#x82E5;&#x5E72;&#x5C42;&#x91CC;&#xFF0C;&#x627E;&#x4E00;&#x4E2A;&#x201C;&#x6A21;&#x578B;&#x6700;&#x81EA;&#x4FE1;&#x201D;&#x7684;&#x5C42;&#x6765;&#x62FF; token&#x3002;</p>
<p>&#x600E;&#x4E48;&#x5224;&#x65AD;&#x201C;&#x6700;&#x81EA;&#x4FE1;&#x201D;&#xFF1F;&#x770B; entropy&#xFF0C;&#x71B5;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x8BF4;&#xFF1A;</p>
<pre><code class="language-text">&#x71B5;&#x9AD8; = &#x5206;&#x5E03;&#x5F88;&#x6563; = &#x6A21;&#x578B;&#x4E0D;&#x786E;&#x5B9A;
&#x71B5;&#x4F4E; = &#x5206;&#x5E03;&#x5F88;&#x5C16; = &#x6A21;&#x578B;&#x5F88;&#x786E;&#x5B9A;
</code></pre>
<p>&#x5982;&#x679C;&#x4ECE;&#x6700;&#x540E;&#x4E00;&#x5C42;&#x5F80;&#x524D;&#x770B;&#xFF0C;&#x53D1;&#x73B0;&#x67D0;&#x4E2A;&#x4E2D;&#x95F4;&#x5C42;&#x7684;&#x71B5;&#x6700;&#x4F4E;&#xFF0C;&#x50CF;&#x4E00;&#x4E2A;&#x201C;&#x8C37;&#x5E95;&#x201D;&#xFF0C;&#x8BF4;&#x660E;&#x6A21;&#x578B;&#x5728;&#x8FD9;&#x91CC;&#x5DF2;&#x7ECF;&#x5F62;&#x6210;&#x4E86;&#x5F88;&#x660E;&#x786E;&#x7684;&#x9884;&#x6D4B;&#x3002;&#x8BBA;&#x6587;&#x53EB;&#x5B83; <strong>entropy valley</strong>&#x3002;</p>
<p>&#x6240;&#x4EE5; Confident Decoding &#x7684;&#x903B;&#x8F91;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x5982;&#x679C;&#x6700;&#x540E;&#x5C42;&#x7EE7;&#x7EED;&#x964D;&#x4F4E;&#x71B5;&#xFF1A;
  &#x7528;&#x6700;&#x540E;&#x5C42;&#xFF0C;&#x8BF4;&#x660E;&#x6700;&#x540E;&#x5C42;&#x8FD8;&#x5728;&#x6B63;&#x5E38; refine

&#x5982;&#x679C;&#x6700;&#x540E;&#x5C42;&#x53CD;&#x800C;&#x8BA9;&#x71B5;&#x5347;&#x9AD8;&#xFF1A;
  &#x56DE;&#x9000;&#x5230;&#x524D;&#x9762;&#x7684; entropy valley&#xFF0C;&#x907F;&#x5F00;&#x6700;&#x540E;&#x5C42;&#x6270;&#x52A8;
</code></pre>
<p>&#x518D;&#x56DE;&#x5230;&#x7269;&#x7406;&#x9898;&#x4F8B;&#x5B50;&#x3002;</p>
<p>&#x67D0;&#x4E00;&#x6B65;&#x751F;&#x6210;&#x65F6;&#xFF0C;&#x5404;&#x5C42;&#x53EF;&#x80FD;&#x662F;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">&#x7B2C; 35 &#x5C42;&#xFF1A;radius &#x6982;&#x7387; 0.42&#xFF0C;&#x71B5;&#x8F83;&#x4F4E;
&#x7B2C; 36 &#x5C42;&#xFF1A;radius &#x6982;&#x7387; 0.55&#xFF0C;&#x71B5;&#x66F4;&#x4F4E;
&#x7B2C; 37 &#x5C42;&#xFF1A;radius &#x6982;&#x7387; 0.62&#xFF0C;&#x71B5;&#x6700;&#x4F4E;
&#x7B2C; 38 &#x5C42;&#xFF1A;the &#x6982;&#x7387;&#x4E0A;&#x5347;&#xFF0C;radius &#x4E0B;&#x964D;&#xFF0C;&#x71B5;&#x53D8;&#x9AD8;
&#x7B2C; 39 &#x5C42;&#xFF1A;is / the / . &#x8FD9;&#x4E9B;&#x901A;&#x7528; token &#x66F4;&#x5F3A;
&#x7B2C; 40 &#x5C42;&#xFF1A;&#x6807;&#x51C6;&#x89E3;&#x7801;&#x8F93;&#x51FA; the
</code></pre>
<p>&#x6807;&#x51C6;&#x89E3;&#x7801;&#x4F1A;&#x62FF;&#x7B2C; 40 &#x5C42;&#xFF0C;&#x53EF;&#x80FD;&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x66F4;&#x987A;&#x6ED1;&#x4F46;&#x66F4;&#x6CDB;&#x7684;&#x8BCD;&#x3002;<br>
Confident Decoding &#x4F1A;&#x53D1;&#x73B0;&#x7B2C; 37 &#x5C42;&#x662F;&#x71B5;&#x8C37;&#xFF0C;&#x4E8E;&#x662F;&#x4ECE;&#x7B2C; 37 &#x5C42;&#x8F93;&#x51FA; <code>radius</code>&#x3002;</p>
<p>&#x8BBA;&#x6587;&#x7684;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x652F;&#x6301;&#x8FD9;&#x4E2A;&#x65B9;&#x5411;&#x3002;&#x6BD4;&#x5982;&#x5728; Qwen3.5-35B-A3B &#x4E0A;&#xFF0C;Confident Decoding &#x76F8;&#x6BD4;&#x6700;&#x540E;&#x5C42; greedy decoding&#xFF1A;</p>
<pre><code class="language-text">GPQA-Diamond: 76.3 -&gt; 82.8
HLE:          9.2  -&gt; 11.2
LiveCodeBench:70.1 -&gt; 74.4
Omni-MATH:    72.3 -&gt; 73.0
</code></pre>
<p>&#x4F5C;&#x8005;&#x8FD8;&#x6BD4;&#x8F83;&#x4E86; base model &#x548C; instruct model&#x3002;&#x7ED3;&#x679C;&#x662F;&#xFF1A;Confident Decoding &#x5BF9; instruct model &#x7684;&#x63D0;&#x5347;&#x66F4;&#x5927;&#xFF0C;&#x5E73;&#x5747;&#x63D0;&#x5347;&#x7EA6; <code>+2.6</code>&#xFF0C;&#x800C; base model &#x5E73;&#x5747;&#x7EA6; <code>+1.1</code>&#x3002;&#x8FD9;&#x88AB;&#x4F5C;&#x8005;&#x7528;&#x6765;&#x652F;&#x6301;&#x4E00;&#x4E2A;&#x5224;&#x65AD;&#xFF1A;<strong>&#x95EE;&#x9898;&#x786E;&#x5B9E;&#x548C;&#x540E;&#x8BAD;&#x7EC3;&#x5BF9;&#x9F50;&#x6709;&#x5173;&#xFF0C;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x6A21;&#x578B;&#x67B6;&#x6784;&#x672C;&#x8EAB;&#x7684;&#x95EE;&#x9898;&#x3002;</strong></p>
<p>&#x5B83;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x5DE5;&#x7A0B;&#x70B9;&#xFF1A;<br>
Confident Decoding &#x4E0D;&#x8DF3;&#x8FC7; transformer &#x5C42;&#xFF0C;&#x6240;&#x4EE5; KV cache&#x3001;attention&#x3001;MoE routing &#x8FD9;&#x4E9B;&#x4ECD;&#x7136;&#x7167;&#x5E38;&#x5DE5;&#x4F5C;&#x3002;&#x5B83;&#x53EA;&#x662F;&#x591A;&#x7B97;&#x51E0;&#x4E2A;&#x9760;&#x8FD1;&#x6700;&#x540E;&#x5C42;&#x7684; logits &#x548C; entropy&#x3002;&#x8BBA;&#x6587;&#x79F0;&#x5728; vLLM &#x5B9E;&#x73B0;&#x91CC;&#xFF0C;&#x989D;&#x5916;&#x5EF6;&#x8FDF;&#x4F4E;&#x4E8E; <code>2%</code>&#xFF0C;&#x989D;&#x5916; KV-cache &#x5185;&#x5B58;&#x4E3A; <code>0</code>&#x3002;</p>
<p><strong>&#x6838;&#x5FC3;&#x542F;&#x53D1;</strong></p>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x6700;&#x91CD;&#x8981;&#x7684;&#x542F;&#x53D1;&#x662F;&#xFF1A;</p>
<p><strong>&#x201C;&#x66F4;&#x6DF1;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x66F4;&#x597D;&#x201D;&#x3002;&#x6700;&#x540E;&#x5C42;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x8BED;&#x4E49;&#x6700;&#x597D;&#x7684;&#x4F4D;&#x7F6E;&#x3002;</strong></p>
<p>&#x8FC7;&#x53BB;&#x6211;&#x4EEC;&#x9ED8;&#x8BA4;&#xFF1A;</p>
<pre><code class="language-text">&#x5C42;&#x6570;&#x8D8A;&#x6DF1; -&gt; &#x8868;&#x793A;&#x8D8A;&#x6210;&#x719F; -&gt; &#x6700;&#x540E;&#x4E00;&#x5C42;&#x6700;&#x597D;
</code></pre>
<p>&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x6311;&#x6218;&#x8FD9;&#x4E2A;&#x9ED8;&#x8BA4;&#x5047;&#x8BBE;&#x3002;&#x5B83;&#x8BF4;&#xFF0C;&#x5728;&#x5BF9;&#x9F50;&#x540E;&#x7684;&#x6A21;&#x578B;&#x91CC;&#xFF0C;&#x6700;&#x540E;&#x5C42;&#x6709;&#x4E24;&#x79CD;&#x4F5C;&#x7528;&#xFF1A;</p>
<ol>
<li>&#x5BF9;&#x666E;&#x901A;&#x5BF9;&#x8BDD;&#x548C;&#x5B89;&#x5168;&#x4EFB;&#x52A1;&#xFF0C;&#x5B83;&#x662F; guardrail&#xFF0C;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x66F4;&#x7A33;&#x3001;&#x66F4;&#x5B89;&#x5168;&#x3002;</li>
<li>&#x5BF9;&#x590D;&#x6742;&#x6570;&#x5B66;&#x3001;&#x79D1;&#x5B66;&#x3001;&#x4EE3;&#x7801;&#x63A8;&#x7406;&#xFF0C;&#x5B83;&#x53EF;&#x80FD;&#x53D8;&#x6210; tax&#xFF0C;&#x628A;&#x5177;&#x4F53;&#x63A8;&#x7406; token &#x62C9;&#x5411;&#x901A;&#x7528;&#x3001;&#x5B89;&#x5168;&#x3001;&#x987A;&#x6ED1;&#x7684;&#x8F93;&#x51FA;&#x3002;</li>
</ol>
<p>&#x6240;&#x4EE5;&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x53EF;&#x4EE5;&#x538B;&#x7F29;&#x6210;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<p><strong>&#x751F;&#x6210; token &#x65F6;&#xFF0C;&#x4E0D;&#x8981;&#x76F2;&#x4FE1;&#x6700;&#x540E;&#x4E00;&#x5C42;&#xFF1B;&#x5E94;&#x8BE5;&#x6309; token &#x52A8;&#x6001;&#x9009;&#x62E9;&#x201C;&#x6A21;&#x578B;&#x6700;&#x6709;&#x628A;&#x63E1;&#x3001;&#x4F46;&#x8FD8;&#x6CA1;&#x88AB;&#x6700;&#x540E;&#x5C42;&#x5BF9;&#x9F50;&#x504F;&#x7F6E;&#x6270;&#x52A8;&#x201D;&#x7684;&#x5C42;&#x3002;</strong></p>
<p>&#x8FD9;&#x4E5F;&#x7ED9;&#x540E;&#x7EED;&#x6A21;&#x578B;&#x8BBE;&#x8BA1;&#x4E00;&#x4E2A;&#x5F88;&#x5927;&#x7684;&#x542F;&#x53D1;&#xFF1A;<br>
alignment &#x4E0D;&#x4E00;&#x5B9A;&#x5E94;&#x8BE5;&#x76F4;&#x63A5;&#x538B;&#x5728;&#x6574;&#x4E2A; residual stream &#x7684;&#x6700;&#x540E;&#x9636;&#x6BB5;&#x4E0A;&#x3002;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x628A;&#x201C;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x201D;&#x548C;&#x201C;&#x5BF9;&#x9F50;&#x98CE;&#x683C;/&#x5B89;&#x5168;&#x63A7;&#x5236;&#x201D;&#x89E3;&#x8026;&#xFF0C;&#x5426;&#x5219;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x5728;&#x5185;&#x90E8;&#x5DF2;&#x7ECF;&#x60F3;&#x5BF9;&#x4E86;&#xFF0C;&#x4F46;&#x6700;&#x540E;&#x8F93;&#x51FA;&#x65F6;&#x88AB;&#x5BF9;&#x9F50;&#x5C42;&#x6539;&#x6B6A;&#x3002;</p>
`,E=[];export{x as attributes,F as html,E as nestedHeaders};
