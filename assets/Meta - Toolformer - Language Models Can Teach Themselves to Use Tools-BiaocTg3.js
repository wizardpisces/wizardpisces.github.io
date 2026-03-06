const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-02-09&#xFF08;NeurIPS 2023&#xFF09;</em></p>
<p>Meta AI &#x53D1;&#x5E03;&#x7684; <strong>Toolformer</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2302.04761">Toolformer: Language Models Can Teach Themselves to Use Tools</a>&#x300B;&#xFF09;&#x89E3;&#x51B3;&#x4E86;&#x4E00;&#x4E2A;&#x770B;&#x8D77;&#x6765;&#x77DB;&#x76FE;&#x7684;&#x95EE;&#x9898;&#xFF1A;<strong>LLM &#x5728;&#x8BED;&#x8A00;&#x7406;&#x89E3;&#x4E0A;&#x78BE;&#x538B;&#x4F20;&#x7EDF;&#x6A21;&#x578B;&#xFF0C;&#x4F46;&#x5728;&#x7B97;&#x672F;&#x3001;&#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;&#x8FD9;&#x4E9B;&quot;&#x7B80;&#x5355;&quot;&#x4EFB;&#x52A1;&#x4E0A;&#x5374;&#x4E0D;&#x5982;&#x4E00;&#x4E2A;&#x8BA1;&#x7B97;&#x5668;&#x6216;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x3002;</strong> Toolformer &#x7684;&#x65B9;&#x6848;&#x662F;&#x8BA9; LLM <strong>&#x81EA;&#x5DF1;&#x5B66;&#x4F1A;&#x5728;&#x5408;&#x9002;&#x7684;&#x65F6;&#x5019;&#x8C03;&#x7528;&#x5916;&#x90E8;&#x5DE5;&#x5177;</strong>&#x2014;&#x2014;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4FEE;&#x6539;&#x67B6;&#x6784;&#xFF0C;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8C03;&#x3001;&#x8C03;&#x54EA;&#x4E2A;&#x3001;&#x4F20;&#x4EC0;&#x4E48;&#x53C2;&#x6570;&#x3001;&#x600E;&#x4E48;&#x628A;&#x7ED3;&#x679C;&#x878D;&#x56DE;&#x6587;&#x672C;&#x3002;</p>
<p>&#x6838;&#x5FC3;&#x6210;&#x679C;&#xFF1A;&#x4E00;&#x4E2A; <strong>6.7B &#x53C2;&#x6570;</strong>&#x7684; GPT-J &#x7ECF;&#x8FC7; Toolformer &#x8BAD;&#x7EC3;&#x540E;&#xFF0C;&#x5728;&#x591A;&#x4E2A;&#x57FA;&#x51C6;&#x4E0A;<strong>&#x8D85;&#x8D8A;&#x4E86; 175B &#x53C2;&#x6570;&#x7684; GPT-3</strong>&#x3002;</p>
<h2 id="Toolformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#Toolformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>Toolformer &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM &#x7684;&#x80FD;&#x529B;&#x8FB9;&#x754C;&#x662F;&#x9519;&#x4F4D;&#x7684;&#x2014;&#x2014;&#x64C5;&#x957F;&#x96BE;&#x7684;&#xFF08;&#x8BED;&#x8A00;&#x7406;&#x89E3;&#x3001;&#x63A8;&#x7406;&#xFF09;&#xFF0C;&#x4E0D;&#x64C5;&#x957F;&#x7B80;&#x5355;&#x7684;&#xFF08;&#x7B97;&#x672F;&#x3001;&#x67E5;&#x4E8B;&#x5B9E;&#x3001;&#x77E5;&#x9053;&#x4ECA;&#x5929;&#x661F;&#x671F;&#x51E0;&#xFF09;&#x3002;</strong></p>
<pre><code>LLM &#x7684;&#x5C34;&#x5C2C;&#x73B0;&#x72B6;&#xFF08;2023 &#x5E74;&#x521D;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x64C5;&#x957F;&#x7684;&#xFF08;&#x9700;&#x8981;&quot;&#x667A;&#x80FD;&quot;&#x7684;&#x4EFB;&#x52A1;&#xFF09;&#xFF1A;
  &#x2713; &#x7406;&#x89E3;&#x590D;&#x6742;&#x6307;&#x4EE4;
  &#x2713; &#x751F;&#x6210;&#x8FDE;&#x8D2F;&#x6587;&#x672C;
  &#x2713; &#x5C11;&#x6837;&#x672C;&#x5B66;&#x4E60;
  &#x2713; &#x5E38;&#x8BC6;&#x63A8;&#x7406;

&#x4E0D;&#x64C5;&#x957F;&#x7684;&#xFF08;&#x672C;&#x5E94;&#x5F88;&quot;&#x7B80;&#x5355;&quot;&#x7684;&#x4EFB;&#x52A1;&#xFF09;&#xFF1A;
  &#x2717; &#x7B97;&#x672F;: &quot;3782 &#xD7; 1729 = ?&quot; &#x2192; &#x7ECF;&#x5E38;&#x7B97;&#x9519;
  &#x2717; &#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;: &quot;&#x6CD5;&#x56FD;&#x73B0;&#x4EFB;&#x603B;&#x7EDF;&#x662F;&#x8C01;&#xFF1F;&quot; &#x2192; &#x53EF;&#x80FD;&#x7F16;&#x9020;
  &#x2717; &#x65F6;&#x95F4;&#x611F;&#x77E5;: &quot;&#x4ECA;&#x5929;&#x662F;&#x661F;&#x671F;&#x51E0;&#xFF1F;&quot; &#x2192; &#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x6CA1;&#x6709;&quot;&#x4ECA;&#x5929;&quot;
  &#x2717; &#x4F4E;&#x8D44;&#x6E90;&#x8BED;&#x8A00;: &#x2192; &#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E0D;&#x8DB3;

&#x8BBD;&#x523A;&#x4E4B;&#x5904;&#xFF1A;
  &#x8BA1;&#x7B97;&#x5668;&#x80FD;&#x79D2;&#x6740;&#x7684;&#x7B97;&#x672F;&#x9898;&#xFF0C;GPT-3 &#x505A;&#x4E0D;&#x5BF9;
  &#x641C;&#x7D22;&#x5F15;&#x64CE;&#x4E00;&#x79D2;&#x80FD;&#x67E5;&#x5230;&#x7684;&#x4E8B;&#x5B9E;&#xFF0C;GPT-3 &#x8981;&#x9760;&quot;&#x731C;&quot;
  &#x2192; &#x4E0D;&#x662F; LLM &#x7B28;&#xFF0C;&#x662F;&#x5B83;&#x88AB;&#x56F0;&#x5728;&#x4E86;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x91CC;
</code></pre>
<p>&#x8FD9;&#x4E5F;&#x662F; LLM &#x5E7B;&#x89C9;&#x7684;&#x6839;&#x6E90;&#x4E4B;&#x4E00;&#x2014;&#x2014;&#x6A21;&#x578B;&#x6CA1;&#x6709;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#x6E90;&#x53EF;&#x4EE5;&#x67E5;&#x8BC1;&#xFF0C;&#x53EA;&#x80FD;&#x4ECE;&#x53C2;&#x6570;&#x4E2D;&quot;&#x56DE;&#x5FC6;&quot;&#xFF0C;&#x8BB0;&#x9519;&#x4E86;&#x5C31;&#x7F16;&#x9020;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h2>
<p>&#x5728; Toolformer &#x4E4B;&#x524D;&#xFF0C;&#x5DF2;&#x6709;&#x4E00;&#x4E9B;&#x8BA9; LLM &#x4F7F;&#x7528;&#x5DE5;&#x5177;&#x7684;&#x5C1D;&#x8BD5;&#xFF0C;&#x4F46;&#x90FD;&#x6709;&#x660E;&#x663E;&#x7F3A;&#x9677;&#xFF1A;</p>
<pre><code>&#x4E4B;&#x524D;&#x7684;&#x65B9;&#x6848;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x591F;&#x597D;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x65B9;&#x6848; 1: &#x4EBA;&#x5DE5;&#x8BBE;&#x8BA1; prompt + &#x624B;&#x52A8;&#x6307;&#x5B9A;&#x4F55;&#x65F6;&#x8C03;&#x5DE5;&#x5177;
  &#x4EE3;&#x8868;: LangChain Agent, ChatGPT Plugins
  &#x95EE;&#x9898;: &#x9700;&#x8981;&#x4EBA;&#x7C7B;&#x4ECB;&#x5165;&#xFF0C;&#x4E0D;&#x591F;&#x81EA;&#x52A8;&#x5316;
        &#x4EBA;&#x8981;&#x544A;&#x8BC9;&#x6A21;&#x578B;&quot;&#x73B0;&#x5728;&#x8BE5;&#x8C03;&#x8BA1;&#x7B97;&#x5668;&#x4E86;&quot;

&#x65B9;&#x6848; 2: &#x5927;&#x89C4;&#x6A21;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6570;&#x636E;&#xFF0C;&#x76D1;&#x7763;&#x8BAD;&#x7EC3;
  &#x4EE3;&#x8868;: WebGPT
  &#x95EE;&#x9898;: &#x6807;&#x6CE8;&#x6210;&#x672C;&#x6781;&#x9AD8;&#xFF0C;&#x96BE;&#x4EE5;&#x6269;&#x5C55;&#x5230;&#x65B0;&#x5DE5;&#x5177;
        &#x6BCF;&#x52A0;&#x4E00;&#x4E2A;&#x65B0;&#x5DE5;&#x5177;&#x5C31;&#x8981;&#x91CD;&#x65B0;&#x6807;&#x6CE8;&#x4E00;&#x904D;

Toolformer &#x7684;&#x7A81;&#x7834;:
  &#x2192; &#x53EA;&#x9700;&#x8981;&#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x7ED9;&#x51E0;&#x4E2A;&#x793A;&#x4F8B;&#xFF08;handful of demonstrations&#xFF09;
  &#x2192; &#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8C03;&#x3001;&#x8C03;&#x4EC0;&#x4E48;&#x3001;&#x600E;&#x4E48;&#x8C03;
  &#x2192; &#x81EA;&#x76D1;&#x7763;&#x8BAD;&#x7EC3;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;
</code></pre>
<p>&#x4E24;&#x4E2A;&#x5173;&#x952E;&#x6761;&#x4EF6;&#x5728; 2023 &#x5E74;&#x6210;&#x719F;&#x4E86;&#xFF1A;</p>
<ol>
<li><strong>LLM &#x5177;&#x5907;&#x4E86; in-context learning &#x80FD;&#x529B;&#xFF1A;</strong> Toolformer &#x9700;&#x8981;&#x6A21;&#x578B;&#x80FD;&#x4ECE;&#x51E0;&#x4E2A;&#x793A;&#x4F8B;&#x4E2D;&#x5B66;&#x4F1A;&#x6807;&#x6CE8; API &#x8C03;&#x7528;&#x3002;&#x8FD9;&#x5728;&#x5C0F;&#x6A21;&#x578B;&#x4E0A;&#x505A;&#x4E0D;&#x5230;&#x3002;</li>
<li><strong>&#x6A21;&#x578B;&#x591F;&#x5927;&#x624D;&#x4F1A;&#x7528;&#x5DE5;&#x5177;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x53D1;&#x73B0; 775M &#x53C2;&#x6570;&#x4EE5;&#x4E0B;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x5373;&#x4F7F;&#x8BAD;&#x7EC3;&#x4E86;&#x4E5F;&#x4E0D;&#x4F1A;&#x6709;&#x6548;&#x4F7F;&#x7528;&#x5DE5;&#x5177;&#x3002;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x662F;&#x4E00;&#x79CD;<strong>&#x6D8C;&#x73B0;&#x80FD;&#x529B;</strong>&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>Toolformer &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;&#x4E0D;&#x662F;&#x6A21;&#x578B;&#x67B6;&#x6784;&#xFF0C;&#x800C;&#x662F;<strong>&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x7684;&#x6784;&#x9020;&#x65B9;&#x6CD5;</strong>&#x2014;&#x2014;&#x5B83;&#x53D1;&#x660E;&#x4E86;&#x4E00;&#x5957;&#x81EA;&#x76D1;&#x7763;&#x6D41;&#x7A0B;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x751F;&#x6210;&quot;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x8C03; API&quot;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#x5FAE;&#x8C03;&#x81EA;&#x5DF1;&#x3002;</p>
<h3 id="API &#x8C03;&#x7528;&#x7684;&#x6587;&#x672C;&#x7F16;&#x7801;"><a href="#API &#x8C03;&#x7528;&#x7684;&#x6587;&#x672C;&#x7F16;&#x7801;"></a>API &#x8C03;&#x7528;&#x7684;&#x6587;&#x672C;&#x7F16;&#x7801;</h3>
<p>&#x7B2C;&#x4E00;&#x4E2A;&#x8BBE;&#x8BA1;&#x51B3;&#x7B56;&#xFF1A;<strong>&#x628A; API &#x8C03;&#x7528;&#x5D4C;&#x5165;&#x5230;&#x666E;&#x901A;&#x6587;&#x672C;&#x4E2D;</strong>&#xFF0C;&#x7528;&#x7279;&#x6B8A;&#x6807;&#x8BB0;&#x5305;&#x88F9;&#x3002;</p>
<pre><code>&#x666E;&#x901A;&#x6587;&#x672C;:
  &quot;Pittsburgh is also known as the Steel City.&quot;

&#x5D4C;&#x5165; API &#x8C03;&#x7528;&#x540E;:
  &quot;Pittsburgh is also known as [QA(&quot;What other name is Pittsburgh
   known by?&quot;) &#x2192; Steel City] the Steel City.&quot;

&#x683C;&#x5F0F;:
  [API&#x540D;&#x79F0;(&#x8F93;&#x5165;&#x53C2;&#x6570;) &#x2192; &#x8FD4;&#x56DE;&#x7ED3;&#x679C;]

  [Calculator(400/1400) &#x2192; 0.29]
  [QA(&quot;Who developed the theory of relativity?&quot;) &#x2192; Albert Einstein]
  [MT(&quot;gracias&quot;) &#x2192; thank you]
  [WikiSearch(&quot;curling&quot;) &#x2192; Curling is a sport...]
  [Calendar()] &#x2192; Today is February 9, 2023]
</code></pre>
<p>&#x5173;&#x952E;&#xFF1A;API &#x8C03;&#x7528;&#x88AB;&#x7F16;&#x7801;&#x6210; token &#x5E8F;&#x5217;&#xFF0C;&#x53EF;&#x4EE5;&#x81EA;&#x7136;&#x5730;&#x5D4C;&#x5165;&#x6587;&#x672C;&#x6D41;&#x4E2D;&#x3002;&#x6A21;&#x578B;&#x751F;&#x6210;&#x6587;&#x672C;&#x65F6;&#x5982;&#x679C;&#x4EA7;&#x751F;&#x4E86; <code>[</code> &#x8FD9;&#x4E2A;&#x7279;&#x6B8A; token&#xFF0C;&#x5C31;&#x8868;&#x793A;&#x5B83;&#x60F3;&#x53D1;&#x8D77;&#x4E00;&#x6B21; API &#x8C03;&#x7528;&#x3002;</p>
<h3 id="&#x4E09;&#x6B65;&#x81EA;&#x76D1;&#x7763;&#x8BAD;&#x7EC3;&#x6D41;&#x7A0B;"><a href="#&#x4E09;&#x6B65;&#x81EA;&#x76D1;&#x7763;&#x8BAD;&#x7EC3;&#x6D41;&#x7A0B;"></a>&#x4E09;&#x6B65;&#x81EA;&#x76D1;&#x7763;&#x8BAD;&#x7EC3;&#x6D41;&#x7A0B;</h3>
<p>&#x8FD9;&#x662F; Toolformer &#x6700;&#x6838;&#x5FC3;&#x7684;&#x521B;&#x65B0;&#x3002;&#x6574;&#x4E2A;&#x6D41;&#x7A0B;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#xFF0C;<strong>&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x7ED9;&#x81EA;&#x5DF1;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E;</strong>&#xFF1A;</p>
<pre><code>&#x4E09;&#x6B65;&#x6D41;&#x7A0B;&#x6982;&#x89C8;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x539F;&#x59CB;&#x8BAD;&#x7EC3;&#x96C6; C&#xFF08;&#x666E;&#x901A;&#x6587;&#x672C;&#xFF0C;&#x6CA1;&#x6709; API &#x8C03;&#x7528;&#xFF09;
        &#x2502;
        &#x25BC;
  &#x250C;&#x2500; Step 1: &#x91C7;&#x6837;&#xFF08;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x6807;&#x6CE8;&#x53EF;&#x80FD;&#x7684; API &#x8C03;&#x7528;&#xFF09;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;                                                       &#x2502;
  &#x2502;  &#x7ED9;&#x6A21;&#x578B;&#x770B;&#x51E0;&#x4E2A;&#x793A;&#x4F8B;&#xFF08;in-context learning&#xFF09;:              &#x2502;
  &#x2502;  &quot;&#x8FD9;&#x7C7B;&#x6587;&#x672C;&#x4E2D;&#xFF0C;&#x4EBA;&#x4EEC;&#x4F1A;&#x5728;&#x8FD9;&#x91CC;&#x8C03; QA/Calculator/...&quot;       &#x2502;
  &#x2502;                                                       &#x2502;
  &#x2502;  &#x6A21;&#x578B;&#x4E3A;&#x6BCF;&#x53E5;&#x8BDD;&#x751F;&#x6210;&#x591A;&#x4E2A;&#x5019;&#x9009; API &#x8C03;&#x7528;:                   &#x2502;
  &#x2502;  &#x8F93;&#x5165;: &quot;Pittsburgh is also known as the Steel City.&quot;  &#x2502;
  &#x2502;  &#x5019;&#x9009;1: [QA(&quot;In which state is Pittsburgh?&quot;) &#x2192; ...]   &#x2502;
  &#x2502;  &#x5019;&#x9009;2: [QA(&quot;What other name is Pittsburgh...?&quot;) &#x2192; ..]&#x2502;
  &#x2502;  &#x5019;&#x9009;3: [Calendar() &#x2192; ...]                            &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
        &#x2502;
        &#x25BC;
  &#x250C;&#x2500; Step 2: &#x6267;&#x884C;&#xFF08;&#x771F;&#x7684;&#x53BB;&#x8C03; API&#xFF0C;&#x62FF;&#x56DE;&#x7ED3;&#x679C;&#xFF09;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;                                                       &#x2502;
  &#x2502;  &#x5019;&#x9009;1: [QA(&quot;In which state...?&quot;) &#x2192; Pennsylvania]     &#x2502;
  &#x2502;  &#x5019;&#x9009;2: [QA(&quot;What other name...?&quot;) &#x2192; Steel City]      &#x2502;
  &#x2502;  &#x5019;&#x9009;3: [Calendar() &#x2192; February 9, 2023]               &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
        &#x2502;
        &#x25BC;
  &#x250C;&#x2500; Step 3: &#x8FC7;&#x6EE4;&#xFF08;&#x53EA;&#x4FDD;&#x7559;&quot;&#x771F;&#x6B63;&#x6709;&#x7528;&quot;&#x7684; API &#x8C03;&#x7528;&#xFF09;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;                                                       &#x2502;
  &#x2502;  &#x5224;&#x65AD;&#x6807;&#x51C6;: &#x8FD9;&#x4E2A; API &#x8C03;&#x7528;&#x6709;&#x6CA1;&#x6709;&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x66F4;&#x597D;&#x5730;           &#x2502;
  &#x2502;  &#x9884;&#x6D4B;&#x540E;&#x7EED;&#x7684; token&#xFF1F;                                   &#x2502;
  &#x2502;                                                       &#x2502;
  &#x2502;  &#x5019;&#x9009;1: &#x77E5;&#x9053; Pittsburgh &#x5728; Pennsylvania               &#x2502;
  &#x2502;         &#x5BF9;&#x9884;&#x6D4B; &quot;the Steel City&quot; &#x6CA1;&#x5E2E;&#x52A9; &#x2192; &#x2717; &#x6DD8;&#x6C70;      &#x2502;
  &#x2502;  &#x5019;&#x9009;2: &#x77E5;&#x9053; Pittsburgh &#x522B;&#x540D;&#x662F; Steel City             &#x2502;
  &#x2502;         &#x5BF9;&#x9884;&#x6D4B; &quot;the Steel City&quot; &#x6709;&#x5DE8;&#x5927;&#x5E2E;&#x52A9; &#x2192; &#x2713; &#x4FDD;&#x7559;  &#x2502;
  &#x2502;  &#x5019;&#x9009;3: &#x77E5;&#x9053;&#x4ECA;&#x5929;&#x65E5;&#x671F;                                  &#x2502;
  &#x2502;         &#x5BF9;&#x9884;&#x6D4B; &quot;the Steel City&quot; &#x6CA1;&#x5E2E;&#x52A9; &#x2192; &#x2717; &#x6DD8;&#x6C70;      &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
        &#x2502;
        &#x25BC;
&#x589E;&#x5F3A;&#x8BAD;&#x7EC3;&#x96C6; C*&#xFF08;&#x6587;&#x672C;&#x4E2D;&#x5D4C;&#x5165;&#x4E86;&#x9AD8;&#x8D28;&#x91CF;&#x7684; API &#x8C03;&#x7528;&#xFF09;
        &#x2502;
        &#x25BC;
&#x7528; C* &#x5FAE;&#x8C03; GPT-J &#x2192; &#x5F97;&#x5230; Toolformer&#xFF01;
</code></pre>
<h3 id="&#x8FC7;&#x6EE4;&#x673A;&#x5236;&#x8BE6;&#x89E3;&#x2014;&#x2014;Toolformer &#x7684;&#x7075;&#x9B42;"><a href="#&#x8FC7;&#x6EE4;&#x673A;&#x5236;&#x8BE6;&#x89E3;&#x2014;&#x2014;Toolformer &#x7684;&#x7075;&#x9B42;"></a>&#x8FC7;&#x6EE4;&#x673A;&#x5236;&#x8BE6;&#x89E3;&#x2014;&#x2014;Toolformer &#x7684;&#x7075;&#x9B42;</h3>
<p>Step 3 &#x7684;&#x8FC7;&#x6EE4;&#x662F;&#x6574;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x5173;&#x952E;&#x3002;&#x5B83;&#x7528;&#x4E00;&#x4E2A;&#x6781;&#x5176;&#x4F18;&#x96C5;&#x7684;&#x6807;&#x51C6;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A; API &#x8C03;&#x7528;&#x662F;&#x5426;&quot;&#x6709;&#x7528;&quot;&#xFF1A;<strong>&#x5E26;&#x4E0A;&#x8FD9;&#x4E2A; API &#x7ED3;&#x679C;&#x540E;&#xFF0C;&#x6A21;&#x578B;&#x9884;&#x6D4B;&#x540E;&#x7EED; token &#x7684; loss &#x662F;&#x5426;&#x663E;&#x8457;&#x964D;&#x4F4E;&#xFF1F;</strong></p>
<p>&#x7528;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#x8D70;&#x901A;&#x6574;&#x4E2A; loss &#x8BA1;&#x7B97;&#x8FC7;&#x7A0B;&#xFF1A;</p>
<pre><code>&#x539F;&#x59CB;&#x6587;&#x672C;: &quot;Pittsburgh is also known as the Steel City.&quot;
                                     ^^^^^^^^^^^^^^^^
                                     &#x6A21;&#x578B;&#x9700;&#x8981;&#x9884;&#x6D4B;&#x7684;&#x90E8;&#x5206;

&#x5019;&#x9009; API &#x8C03;&#x7528; 2: [QA(&quot;What other name is Pittsburgh known by?&quot;) &#x2192; Steel City]
&#x63D2;&#x5165;&#x4F4D;&#x7F6E;: &quot;Pittsburgh is also known as&quot; &#x4E4B;&#x540E;

&#x73B0;&#x5728;&#x5BF9;&#x6BD4;&#x4E09;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x6A21;&#x578B;&#x9884;&#x6D4B; &quot;the Steel City&quot; &#x7684;&#x96BE;&#x5EA6;&#xFF08;&#x7528;&#x4EA4;&#x53C9;&#x71B5; loss &#x8861;&#x91CF;&#xFF09;:
&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;&#x2550;

&#x60C5;&#x51B5; A: &#x5E26;&#x5B8C;&#x6574; API &#x8C03;&#x7528;&#xFF08;&#x8F93;&#x5165; + &#x8FD4;&#x56DE;&#x503C;&#xFF09;
  &#x6A21;&#x578B;&#x770B;&#x5230;: &quot;Pittsburgh is also known as [QA(&quot;What other name...?&quot;) &#x2192; Steel City]&quot;
  &#x7136;&#x540E;&#x9884;&#x6D4B;: &quot;the Steel City&quot;
  &#x2192; &#x7B54;&#x6848; &quot;Steel City&quot; &#x5C31;&#x5728;&#x773C;&#x524D;&#xFF01;loss &#x6781;&#x4F4E;
  &#x2192; L_full = 0.3

&#x60C5;&#x51B5; B: &#x4E0D;&#x5E26; API &#x8C03;&#x7528;
  &#x6A21;&#x578B;&#x770B;&#x5230;: &quot;Pittsburgh is also known as&quot;
  &#x7136;&#x540E;&#x9884;&#x6D4B;: &quot;the Steel City&quot;
  &#x2192; GPT-J 6.7B &#x672A;&#x5FC5;&#x77E5;&#x9053;&#x8FD9;&#x4E2A;&#x77E5;&#x8BC6;&#xFF0C;loss &#x8F83;&#x9AD8;
  &#x2192; L_none = 8.5

Helpfulness = L_none - L_full = 8.5 - 0.3 = 8.2

&#x9608;&#x503C; &#x3C4;f = 1.0&#xFF08;QA &#x5DE5;&#x5177;&#x7684;&#x9608;&#x503C;&#xFF09;

8.2 &#x2265; 1.0 &#x2192; &#x2705; &#x4FDD;&#x7559;&#xFF01;&#x8FD9;&#x4E2A; API &#x8C03;&#x7528;&#x8FDB;&#x5165;&#x589E;&#x5F3A;&#x6570;&#x636E;&#x96C6; C*
</code></pre>
<p>&#x518D;&#x770B;&#x4E00;&#x4E2A;&#x88AB;<strong>&#x6DD8;&#x6C70;</strong>&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code>&#x5019;&#x9009; API &#x8C03;&#x7528; 1: [QA(&quot;In which state is Pittsburgh?&quot;) &#x2192; Pennsylvania]
&#x540C;&#x6837;&#x63D2;&#x5165; &quot;Pittsburgh is also known as&quot; &#x4E4B;&#x540E;

&#x60C5;&#x51B5; A: &#x5E26;&#x5B8C;&#x6574; API &#x8C03;&#x7528;
  &#x6A21;&#x578B;&#x770B;&#x5230;: &quot;Pittsburgh is also known as [QA(&quot;In which state...?&quot;) &#x2192; Pennsylvania]&quot;
  &#x7136;&#x540E;&#x9884;&#x6D4B;: &quot;the Steel City&quot;
  &#x2192; &#x77E5;&#x9053; Pittsburgh &#x5728; Pennsylvania &#x5BF9;&#x9884;&#x6D4B; &quot;Steel City&quot; &#x6CA1;&#x4EC0;&#x4E48;&#x5E2E;&#x52A9;
  &#x2192; L_full = 7.9&#xFF08;&#x8FD8;&#x662F;&#x5F88;&#x9AD8;&#xFF09;

&#x60C5;&#x51B5; B: &#x4E0D;&#x5E26; API &#x8C03;&#x7528;
  &#x2192; L_none = 8.5&#xFF08;&#x540C;&#x4E0A;&#xFF09;

Helpfulness = 8.5 - 7.9 = 0.6

0.6 &lt; 1.0 &#x2192; &#x2717; &#x6DD8;&#x6C70;&#xFF01;&#x8FD9;&#x4E2A; API &#x8C03;&#x7528;&#x662F;&quot;&#x7B54;&#x975E;&#x6240;&#x95EE;&quot;&#xFF0C;&#x4E0D;&#x8FDB;&#x5165; C*
</code></pre>
<pre><code>&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x7684;&#x5B8C;&#x6574;&#x6570;&#x636E;&#x6D41;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x539F;&#x59CB;&#x6570;&#x636E;&#x96C6; C&#xFF08;&#x51E0;&#x767E;&#x4E07;&#x6761;&#x666E;&#x901A;&#x6587;&#x672C;&#xFF09;
      &#x2502;
      &#x251C;&#x2500; Step 1: &#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x6807;&#x6CE8; &#x2192; &#x51E0;&#x767E;&#x4E07;&#x6761;&#x5019;&#x9009; API &#x8C03;&#x7528;
      &#x2502;
      &#x251C;&#x2500; Step 2: &#x6267;&#x884C; API &#x2192; &#x6BCF;&#x4E2A;&#x5019;&#x9009;&#x90FD;&#x62FF;&#x5230;&#x4E86;&#x8FD4;&#x56DE;&#x503C;
      &#x2502;
      &#x251C;&#x2500; Step 3: &#x7528; loss &#x8FC7;&#x6EE4; &#x2192; &#x5927;&#x90E8;&#x5206;&#x88AB;&#x6DD8;&#x6C70;&#xFF0C;&#x7559;&#x4E0B;&#x51E0;&#x4E07;~&#x51E0;&#x5341;&#x4E07;&#x6761;
      &#x2502;   &#x2502;
      &#x2502;   &#x2502;  &#x4E0D;&#x540C;&#x5DE5;&#x5177;&#x7684;&#x8FC7;&#x6EE4;&#x7387;&#x5DEE;&#x5F02;&#x5F88;&#x5927;:
      &#x2502;   &#x2502;    QA:         &#x5927;&#x91CF;&#x4FDD;&#x7559;&#xFF08;&#x6A21;&#x578B;&#x7ECF;&#x5E38;&#x4E0D;&#x77E5;&#x9053;&#x4E8B;&#x5B9E;&#xFF09;
      &#x2502;   &#x2502;    Calculator: &#x5927;&#x91CF;&#x4FDD;&#x7559;&#xFF08;&#x6A21;&#x578B;&#x51E0;&#x4E4E;&#x4E0D;&#x4F1A;&#x7B97;&#x672F;&#xFF09;
      &#x2502;   &#x2502;    MT:         &#x8F83;&#x5C11;&#x4FDD;&#x7559;&#xFF08;&#x6A21;&#x578B;&#x5BF9;&#x4E3B;&#x6D41;&#x8BED;&#x8A00;&#x8FD8;&#x884C;&#xFF09;
      &#x2502;   &#x2502;    Calendar:   &#x5F88;&#x5C11;&#x4FDD;&#x7559;&#xFF08;&#x4E0D;&#x6D89;&#x53CA;&#x65E5;&#x671F;&#x7684;&#x6587;&#x672C;&#x5360;&#x5927;&#x591A;&#x6570;&#xFF09;
      &#x2502;   &#x2502;
      &#x2502;   &#x2502;  &#x4E3A;&#x4E86;&#x5E73;&#x8861;&#xFF0C;&#x9608;&#x503C;&#x4E0D;&#x540C;:
      &#x2502;   &#x2502;    QA/WikiSearch/Calendar: &#x3C4;f = 1.0&#xFF08;&#x4E25;&#x683C;&#xFF09;
      &#x2502;   &#x2502;    Calculator/MT:         &#x3C4;f = 0.5&#xFF08;&#x5BBD;&#x677E;&#xFF0C;&#x56E0;&#x4E3A;&#x6837;&#x672C;&#x672C;&#x6765;&#x5C31;&#x5C11;&#xFF09;
      &#x2502;
      &#x25BC;
&#x589E;&#x5F3A;&#x6570;&#x636E;&#x96C6; C*&#xFF08;&#x539F;&#x59CB;&#x6587;&#x672C; + &#x5D4C;&#x5165;&#x7684;&#x9AD8;&#x8D28;&#x91CF; API &#x8C03;&#x7528;&#xFF09;
      &#x2502;
      &#x25BC;
&#x7528;&#x6807;&#x51C6;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x76EE;&#x6807;&#xFF08;&#x9884;&#x6D4B;&#x4E0B;&#x4E00;&#x4E2A; token&#xFF09;&#x5728; C* &#x4E0A;&#x5FAE;&#x8C03; GPT-J
      &#x2502;
      &#x25BC;
&#x5F97;&#x5230; Toolformer&#xFF01;
</code></pre>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x4E2A;&#x8BBE;&#x8BA1;&#x5982;&#x6B64;&#x5DE7;&#x5999;&#xFF1F;</strong></p>
<p>&#x5B83;&#x5B9E;&#x73B0;&#x4E86;<strong>&#x81EA;&#x9002;&#x5E94;</strong>&#x2014;&#x2014;&#x540C;&#x4E00;&#x4E2A; API &#x8C03;&#x7528;&#xFF0C;&#x5BF9;&#x5F31;&#x6A21;&#x578B;&#x6709;&#x7528;&#x3001;&#x5BF9;&#x5F3A;&#x6A21;&#x578B;&#x65E0;&#x7528;&#x3002;&#x6BD4;&#x5982; GPT-4 &#x53EF;&#x80FD;&#x672C;&#x6765;&#x5C31;&#x77E5;&#x9053;&quot;Pittsburgh &#x53C8;&#x53EB; Steel City&quot;&#xFF0C;&#x90A3; L_none &#x672C;&#x8EAB;&#x5C31;&#x5F88;&#x4F4E;&#xFF0C;helpfulness &#x2248; 0&#xFF0C;&#x8FD9;&#x4E2A; QA &#x8C03;&#x7528;&#x5C31;&#x4E0D;&#x4F1A;&#x88AB;&#x4FDD;&#x7559;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;<strong>&#x540C;&#x4E00;&#x5957;&#x6D41;&#x7A0B;&#x53EF;&#x4EE5;&#x7ED9;&#x4EFB;&#x4F55;&#x6A21;&#x578B;&#x751F;&#x6210;&#x9002;&#x5408;&#x5B83;&#x81EA;&#x5DF1;&#x6C34;&#x5E73;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;</strong>&#x3002;</p>
<h3 id="&#x8BAD;&#x7EC3; vs &#x63A8;&#x7406;&#xFF1A;&#x7406;&#x89E3; Toolformer &#x7684;&#x5173;&#x952E;"><a href="#&#x8BAD;&#x7EC3; vs &#x63A8;&#x7406;&#xFF1A;&#x7406;&#x89E3; Toolformer &#x7684;&#x5173;&#x952E;"></a>&#x8BAD;&#x7EC3; vs &#x63A8;&#x7406;&#xFF1A;&#x7406;&#x89E3; Toolformer &#x7684;&#x5173;&#x952E;</h3>
<p>&#x5F88;&#x591A;&#x4EBA;&#x770B;&#x5230;&#x8FD9;&#x91CC;&#x4F1A;&#x56F0;&#x60D1;&#xFF1A;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x91CC; API &#x7684;&#x7ED3;&#x679C;&#x90FD;&#x5DF2;&#x7ECF;&#x5199;&#x597D;&#x4E86;&#xFF0C;&#x90A3;&#x6A21;&#x578B;&#x5230;&#x5E95;&#x662F;&#x600E;&#x4E48;&#x5728;&#x63A8;&#x7406;&#x65F6;&quot;&#x771F;&#x7684;&#x8C03;&#x5DE5;&#x5177;&quot;&#x7684;&#xFF1F;</p>
<p><strong>&#x6838;&#x5FC3;&#x7406;&#x89E3;&#xFF1A;&#x6A21;&#x578B;&#x5E76;&#x4E0D;&#x77E5;&#x9053;&#x81EA;&#x5DF1;&#x5728;&quot;&#x8C03;&#x5DE5;&#x5177;&quot;&#x3002;&#x5B83;&#x53EA;&#x662F;&#x5B66;&#x4F1A;&#x4E86;&#x4E00;&#x79CD;&#x6709;&#x7528;&#x7684; token &#x751F;&#x6210;&#x6A21;&#x5F0F;&#x3002;</strong></p>
<pre><code>&#x8BAD;&#x7EC3;&#x65F6; vs &#x63A8;&#x7406;&#x65F6;&#x7684;&#x533A;&#x522B;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x8BAD;&#x7EC3;&#x65F6;&#xFF08;&#x5B66;&#x4E60;&#x9636;&#x6BB5;&#xFF09;:
  &#x6A21;&#x578B;&#x770B;&#x5230;&#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;:
    &quot;400/1400 is [Calculator(400/1400) &#x2192; 0.29] about 29%.&quot;
    
  &#x6A21;&#x578B;&#x7684;&#x4EFB;&#x52A1;: &#x9884;&#x6D4B;&#x6BCF;&#x4E00;&#x4E2A; token&#xFF08;&#x6807;&#x51C6;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x8BAD;&#x7EC3;&#xFF09;
    &quot;400&quot;&#x2192;&quot;/&quot; &#x2192;&quot;1400&quot;&#x2192;&quot;is&quot;&#x2192;&quot;[&quot;&#x2192;&quot;Calculator&quot;&#x2192;&quot;(&quot;&#x2192;&quot;400/1400&quot;&#x2192;&quot;)&quot;&#x2192;&quot;&#x2192;&quot;&#x2192;&quot;0.29&quot;&#x2192;&quot;]&quot;&#x2192;...
    
  &#x6A21;&#x578B;&#x4ECE;&#x4E2D;&#x5B66;&#x5230;&#x4E86;&#x4EC0;&#x4E48;:
    &#x2460; &#x4E0A;&#x6587;&#x51FA;&#x73B0;&#x9664;&#x6CD5;&#x8FD0;&#x7B97;&#x65F6;&#xFF0C;&#x4E0B;&#x4E00;&#x6B65;&#x751F;&#x6210; [Calculator(... &#x662F;&#x9AD8;&#x6982;&#x7387;&#x4E8B;&#x4EF6;
    &#x2461; &#x2192; &#x540E;&#x9762;&#x8DDF;&#x7684;&#x662F;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;
    &#x2462; ] &#x4E4B;&#x540E;&#x7EE7;&#x7EED;&#x7528;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x63CF;&#x8FF0;&#x7ED3;&#x679C;
    
  &#x2192; &#x6A21;&#x578B;&#x53EA;&#x662F;&#x5728;&#x505A;&#x666E;&#x901A;&#x7684; next-token prediction
  &#x2192; &#x5B83;&#x4E0D;&#x7406;&#x89E3;&quot;&#x5DE5;&#x5177;&quot;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x53EA;&#x662F;&#x5B66;&#x4F1A;&#x4E86;&#x4E00;&#x79CD; token &#x6A21;&#x5F0F;


&#x63A8;&#x7406;&#x65F6;&#xFF08;&#x4F7F;&#x7528;&#x9636;&#x6BB5;&#xFF09;:
  &#x7528;&#x6237;&#x95EE;: &quot;What is 7921 divided by 89?&quot;
  
  &#x6A21;&#x578B;&#x751F;&#x6210;: &quot;The answer is [&quot;        &#x2190; &#x6A21;&#x578B;&#x5410;&#x51FA;&#x4E86; [&#xFF0C;&#x7CFB;&#x7EDF;&#x6CE8;&#x610F;&#x5230;&#x4E86;
  &#x6A21;&#x578B;&#x7EE7;&#x7EED;: &quot;Calculator(7921/89)&quot;     &#x2190; &#x6A21;&#x578B;&#x751F;&#x6210;&#x4E86;&#x5DE5;&#x5177;&#x540D; + &#x53C2;&#x6570;
  &#x6A21;&#x578B;&#x7EE7;&#x7EED;: &quot;&#x2192;&quot;                       &#x2190; &#x7CFB;&#x7EDF;&#x5728;&#x8FD9;&#x91CC;&#x62E6;&#x622A;&#xFF01;

  &#x250C;&#x2500; &#x7CFB;&#x7EDF;&#x4ECB;&#x5165;&#xFF08;&#x5916;&#x90E8;&#x7A0B;&#x5E8F;&#xFF0C;&#x4E0D;&#x662F;&#x6A21;&#x578B;&#xFF09;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;  &#x89E3;&#x6790;: API&#x540D; = Calculator, &#x53C2;&#x6570; = &quot;7921/89&quot;    &#x2502;
  &#x2502;  &#x6267;&#x884C;: Python eval(&quot;7921/89&quot;) = 89.0           &#x2502;
  &#x2502;  &#x63D2;&#x5165;: &#x628A; &quot;89.0&quot; &#x585E;&#x5230; &#x2192; &#x540E;&#x9762;                   &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

  &#x73B0;&#x5728;&#x6A21;&#x578B;&#x770B;&#x5230;: &quot;...Calculator(7921/89) &#x2192; 89.0]&quot;
  &#x6A21;&#x578B;&#x7EE7;&#x7EED;&#x751F;&#x6210;: &quot; so the answer is 89.&quot;

  &#x8FD4;&#x56DE;&#x7ED9;&#x7528;&#x6237;: &quot;The answer is 89.&quot;
</code></pre>
<p>&#x4E00;&#x53E5;&#x8BDD;&#x603B;&#x7ED3;&#xFF1A;&#x8BAD;&#x7EC3;&#x65F6; API &#x8C03;&#x7528;&#x662F;&#x9884;&#x5199;&#x597D;&#x7684;&#x6587;&#x672C;&#x6A21;&#x5F0F;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x6A21;&#x578B;&#x53EA;&#x8D1F;&#x8D23;&#x751F;&#x6210; <code>[&#x5DE5;&#x5177;&#x540D;(&#x53C2;&#x6570;)&#x2192;</code>&#xFF0C;<strong>&#x5916;&#x90E8;&#x7CFB;&#x7EDF;</strong>&#x62E6;&#x622A;&#x5E76;&#x6267;&#x884C;&#x771F;&#x5B9E; API&#x3001;&#x6CE8;&#x5165;&#x7ED3;&#x679C;&#xFF0C;&#x6A21;&#x578B;&#x7EE7;&#x7EED;&#x751F;&#x6210;&#x2014;&#x2014;&#x8FD9;&#x5C31;&#x662F;&#x540E;&#x6765; Function Calling / MCP &#x7684;&#x539F;&#x578B;&#xFF08;&#x8BE6;&#x89C1;&#x4E0B;&#x6587;&#x6F14;&#x5316;&#x4E00;&#x8282;&#xFF09;&#x3002;</p>
<p>&#x6CE8;&#x610F;&#x4E00;&#x4E2A;&#x7EC6;&#x8282;&#xFF1A;&#x6A21;&#x578B;&#x751F;&#x6210; <code>[</code> &#x7684;&#x6761;&#x4EF6;&#x4E0D;&#x662F;&quot;&#x6700;&#x53EF;&#x80FD;&#x7684; token&quot;&#xFF0C;&#x800C;&#x662F; <strong>top-10 &#x4E2D;&#x51FA;&#x73B0;&#x4E86; <code>[</code></strong>&#xFF08;k=10 &#x662F;&#x8BBA;&#x6587;&#x5B9E;&#x9A8C;&#x7684;&#x6700;&#x4F73;&#x9608;&#x503C;&#xFF09;&#x3002;</p>
<h3 id="&#x4E94;&#x4E2A;&#x5185;&#x7F6E;&#x5DE5;&#x5177;"><a href="#&#x4E94;&#x4E2A;&#x5185;&#x7F6E;&#x5DE5;&#x5177;"></a>&#x4E94;&#x4E2A;&#x5185;&#x7F6E;&#x5DE5;&#x5177;</h3>
<pre><code>&#x5DE5;&#x5177;             &#x8F93;&#x5165;            &#x8FD4;&#x56DE;              &#x5178;&#x578B;&#x573A;&#x666F;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
Calculator      &#x7B97;&#x672F;&#x8868;&#x8FBE;&#x5F0F;       &#x8BA1;&#x7B97;&#x7ED3;&#x679C;          &quot;400/1400 = ?&quot;
QA              &#x81EA;&#x7136;&#x8BED;&#x8A00;&#x95EE;&#x9898;     &#x7B80;&#x77ED;&#x7B54;&#x6848;          &quot;&#x8C01;&#x53D1;&#x660E;&#x4E86;&#x7535;&#x8BDD;&#xFF1F;&quot;
WikiSearch      &#x641C;&#x7D22;&#x8BCD;           Wikipedia &#x7247;&#x6BB5;    &quot;&#x4EC0;&#x4E48;&#x662F;&#x91CF;&#x5B50;&#x7EA0;&#x7F20;&#xFF1F;&quot;
MT              &#x5916;&#x8BED;&#x6587;&#x672C;         &#x82F1;&#x6587;&#x7FFB;&#x8BD1;          &quot;gracias &#x2192; ?&quot;
Calendar        &#x65E0;               &#x5F53;&#x524D;&#x65E5;&#x671F;          &quot;&#x4ECA;&#x5929;&#x661F;&#x671F;&#x51E0;&#xFF1F;&quot;
</code></pre>
<p>&#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x53EA;&#x9700;&#x8981;<strong>&#x51E0;&#x4E2A;&#x793A;&#x4F8B;</strong>&#xFF08;&#x5199;&#x5728; prompt &#x91CC;&#x505A; in-context learning&#xFF09;&#xFF0C;&#x5C31;&#x8DB3;&#x4EE5;&#x8BA9;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x8C03;&#x5B83;&#x3002;</p>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x77E5;&#x8BC6;&#x8865;&#x5168;&#xFF08;LAMA &#x57FA;&#x51C6;&#xFF09;"><a href="#&#x77E5;&#x8BC6;&#x8865;&#x5168;&#xFF08;LAMA &#x57FA;&#x51C6;&#xFF09;"></a>&#x77E5;&#x8BC6;&#x8865;&#x5168;&#xFF08;LAMA &#x57FA;&#x51C6;&#xFF09;</h3>
<pre><code>&#x4EFB;&#x52A1;: &#x8865;&#x5168;&#x7F3A;&#x5931;&#x4E8B;&#x5B9E;&#xFF0C;&#x5982; &quot;&#x76F8;&#x5BF9;&#x8BBA;&#x7531;___&#x63D0;&#x51FA;&quot;

&#x6A21;&#x578B;              SQuAD    Google-RE    T-REx
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
GPT-J  6.7B       23.1      8.4        34.4
OPT   66B         28.2      8.6        34.9
GPT-3 175B        31.3      9.5        39.3
Toolformer 6.7B   39.5     12.0        44.0  &#x2190; 6.7B &#x8D85;&#x8D8A; 175B&#xFF01;

Toolformer &#x5728; 98.1% &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x9009;&#x62E9;&#x8C03;&#x7528; QA &#x5DE5;&#x5177;
</code></pre>
<h3 id="&#x6570;&#x5B66;&#x8BA1;&#x7B97;"><a href="#&#x6570;&#x5B66;&#x8BA1;&#x7B97;"></a>&#x6570;&#x5B66;&#x8BA1;&#x7B97;</h3>
<pre><code>&#x4EFB;&#x52A1;: &#x6570;&#x5B66;&#x63A8;&#x7406;&#x548C;&#x8BA1;&#x7B97;

&#x6A21;&#x578B;              ASDiv    SVAMP    MAWPS
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
GPT-J  6.7B       10.3     6.1      31.2
OPT   66B         14.5     5.5      30.4
GPT-3 175B        12.7     7.7      38.8
Toolformer 6.7B   40.2    29.4      44.0  &#x2190; &#x78BE;&#x538B;&#x7EA7;&#x63D0;&#x5347;

Toolformer &#x5728; 97.9% &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x9009;&#x62E9;&#x8C03;&#x7528; Calculator
&#x2192; &#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4E86;&quot;&#x7B97;&#x672F;&#x9898;&#x4E0D;&#x8981;&#x81EA;&#x5DF1;&#x7B97;&#xFF0C;&#x4EA4;&#x7ED9;&#x8BA1;&#x7B97;&#x5668;&quot;
</code></pre>
<h3 id="&#x95EE;&#x7B54;&#xFF08;Search &#x57FA;&#x51C6;&#xFF09;"><a href="#&#x95EE;&#x7B54;&#xFF08;Search &#x57FA;&#x51C6;&#xFF09;"></a>&#x95EE;&#x7B54;&#xFF08;Search &#x57FA;&#x51C6;&#xFF09;</h3>
<pre><code>&#x4EFB;&#x52A1;: &#x5F00;&#x653E;&#x57DF;&#x95EE;&#x7B54;

&#x6A21;&#x578B;              Web Questions    Natural Questions
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
GPT-J  6.7B           11.6             4.2
Toolformer 6.7B       17.3             8.1
GPT-3 175B            19.3            14.6  &#x2190; GPT-3 &#x8D62;&#x4E86;

&#x539F;&#x56E0;: GPT-3 &#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x8986;&#x76D6;&#x4E86;&#x5927;&#x91CF;&#x7F51;&#x9875;&#x5185;&#x5BB9;&#xFF0C;
      &#x800C; Toolformer &#x53EA;&#x80FD;&#x641C; Wikipedia
</code></pre>
<h3 id="&#x7F29;&#x653E;&#x89C4;&#x5F8B;"><a href="#&#x7F29;&#x653E;&#x89C4;&#x5F8B;"></a>&#x7F29;&#x653E;&#x89C4;&#x5F8B;</h3>
<pre><code>&#x4E0D;&#x540C;&#x5927;&#x5C0F;&#x7684;&#x6A21;&#x578B; + Toolformer &#x8BAD;&#x7EC3;:

  124M &#x53C2;&#x6570;:  &#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x57FA;&#x672C;&#x65E0;&#x6548;&#xFF08;&#x6A21;&#x578B;&#x592A;&#x5C0F;&#xFF0C;&#x5B66;&#x4E0D;&#x4F1A;&quot;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x8C03;&quot;&#xFF09;
  355M &#x53C2;&#x6570;:  &#x7565;&#x6709;&#x5E2E;&#x52A9;
  775M &#x53C2;&#x6570;:  &#x5F00;&#x59CB;&#x663E;&#x8457;&#x6709;&#x6548; &#x2190; &#x6D8C;&#x73B0;&#x62D0;&#x70B9;
  1.6B &#x53C2;&#x6570;:  &#x5927;&#x5E45;&#x6709;&#x6548;
  6.7B &#x53C2;&#x6570;:  &#x6548;&#x679C;&#x6700;&#x5F3A;

&#x2192; &#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x662F;&#x4E00;&#x79CD;&#x6D8C;&#x73B0;&#x80FD;&#x529B;&#xFF1A;&#x6A21;&#x578B;&#x5FC5;&#x987B;&#x8DB3;&#x591F;&#x5927;&#xFF0C;
  &#x624D;&#x80FD;&#x5B66;&#x4F1A;&quot;&#x5224;&#x65AD;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x9700;&#x8981;&#x5916;&#x90E8;&#x5E2E;&#x52A9;&quot;
</code></pre>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>Toolformer &#x6709;&#x51E0;&#x4E2A;&#x660E;&#x786E;&#x7684;&#x5C40;&#x9650;&#xFF1A;</p>
<ul>
<li><strong>&#x4E0D;&#x80FD;&#x94FE;&#x5F0F;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF1A;</strong> Toolformer &#x7684;&#x6BCF;&#x4E2A; API &#x8C03;&#x7528;&#x662F;&#x72EC;&#x7ACB;&#x751F;&#x6210;&#x7684;&#x2014;&#x2014;&#x4E0D;&#x80FD;&quot;&#x5148;&#x641C;&#x7D22;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x8BA1;&#x7B97;&quot;&#x3002;&#x540E;&#x7EED;&#x7684; <a href="./Princeton%20%26%20Google%20-%20ReAct%20-%20Synergizing%20Reasoning%20and%20Acting%20in%20LLMs.md">ReAct</a> &#x901A;&#x8FC7;&quot;&#x63A8;&#x7406;-&#x884C;&#x52A8;&quot;&#x5FAA;&#x73AF;&#x89E3;&#x51B3;&#x4E86;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>&#x4E0D;&#x80FD;&#x4EA4;&#x4E92;&#x5F0F;&#x4F7F;&#x7528;&#x5DE5;&#x5177;&#xFF1A;</strong> &#x641C;&#x7D22;&#x5F15;&#x64CE;&#x53EF;&#x80FD;&#x8FD4;&#x56DE;&#x591A;&#x4E2A;&#x7ED3;&#x679C;&#xFF0C;&#x4F46; Toolformer &#x53EA;&#x53D6;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;&#x4E0D;&#x80FD;&#x50CF;&#x4EBA;&#x4E00;&#x6837;&quot;&#x770B;&#x770B;&#x7B2C;&#x4E00;&#x4E2A;&#x7ED3;&#x679C;&#x4E0D;&#x5BF9;&#xFF0C;&#x518D;&#x8BD5;&#x7B2C;&#x4E8C;&#x4E2A;&quot;&#x3002;</li>
<li><strong>&#x4E0D;&#x8003;&#x8651;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6210;&#x672C;&#xFF1A;</strong> &#x6A21;&#x578B;&#x53EF;&#x80FD;&#x9891;&#x7E41;&#x8C03;&#x7528;&#x6602;&#x8D35;&#x7684; API&#xFF08;&#x5982;&#x5927;&#x6A21;&#x578B; QA &#x7CFB;&#x7EDF;&#xFF09;&#xFF0C;&#x6CA1;&#x6709;&#x6210;&#x672C;&#x610F;&#x8BC6;&#x3002;<a href="./EPFL%20%26%20Copenhagen%20-%20Fleet%20of%20Agents%20-%20Coordinated%20Problem%20Solving%20with%20LLMs.md">FoA</a> &#x540E;&#x6765;&#x4E13;&#x95E8;&#x7814;&#x7A76;&#x4E86;&#x6210;&#x672C;-&#x8D28;&#x91CF;&#x6743;&#x8861;&#x3002;</li>
<li><strong>&#x5BF9;&#x63AA;&#x8F9E;&#x654F;&#x611F;&#xFF1A;</strong> &#x540C;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x6362;&#x4E2A;&#x8BF4;&#x6CD5;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x5C31;&#x4E0D;&#x8C03;&#x5DE5;&#x5177;&#x4E86;&#x3002;</li>
</ul>
<p>&#x540E;&#x7EED;&#x5DE5;&#x4F5C;&#x5728;&#x8FD9;&#x4E9B;&#x65B9;&#x5411;&#x4E0A;&#x90FD;&#x6709;&#x6539;&#x8FDB;&#xFF1A;</p>
<ul>
<li><strong>ReAct</strong> (2023): &#x63A8;&#x7406;&#x548C;&#x884C;&#x52A8;&#x4EA4;&#x66FF;&#x8FDB;&#x884C;&#xFF0C;&#x652F;&#x6301;&#x591A;&#x6B65;&#x5DE5;&#x5177;&#x8C03;&#x7528;</li>
<li><strong>VOYAGER</strong> (2023): &#x7528;&#x4EE3;&#x7801;&#x4F5C;&#x4E3A;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#xFF0C;&#x652F;&#x6301;&#x6280;&#x80FD;&#x79EF;&#x7D2F;&#x548C;&#x590D;&#x7528;</li>
<li><strong>ChatGPT Plugins / Function Calling</strong> (2023): &#x5DE5;&#x4E1A;&#x7EA7;&#x7684;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x65B9;&#x6848;&#xFF0C;&#x4F46;&#x4F9D;&#x8D56;&#x4EBA;&#x5DE5;&#x8BBE;&#x8BA1;</li>
</ul>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;Toolformer &#x5F00;&#x521B;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;Toolformer &#x5F00;&#x521B;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;Toolformer &#x5F00;&#x521B;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<h3 id="1. &quot;&#x81EA;&#x5DF1;&#x7ED9;&#x81EA;&#x5DF1;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&quot;&#x7684;&#x8303;&#x5F0F;"><a href="#1. &quot;&#x81EA;&#x5DF1;&#x7ED9;&#x81EA;&#x5DF1;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&quot;&#x7684;&#x8303;&#x5F0F;"></a>1. &quot;&#x81EA;&#x5DF1;&#x7ED9;&#x81EA;&#x5DF1;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&quot;&#x7684;&#x8303;&#x5F0F;</h3>
<p>Toolformer &#x6700;&#x6DF1;&#x5C42;&#x7684;&#x521B;&#x65B0;&#x4E0D;&#x662F;&quot;LLM &#x8C03;&#x5DE5;&#x5177;&quot;&#x8FD9;&#x4E2A;&#x60F3;&#x6CD5;&#xFF08;&#x8FD9;&#x5F88;&#x81EA;&#x7136;&#xFF09;&#xFF0C;&#x800C;&#x662F;<strong>&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x7684;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x6D41;&#x7A0B;</strong>&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x6807;&#x6CE8;&#x5019;&#x9009; &#x2192; &#x6267;&#x884C; &#x2192; &#x7528;&#x67D0;&#x79CD;&#x4FE1;&#x53F7;&#x8FC7;&#x6EE4;&#x597D;&#x574F; &#x2192; &#x7528;&#x8FC7;&#x6EE4;&#x540E;&#x7684;&#x6570;&#x636E;&#x8BAD;&#x7EC3;&#x81EA;&#x5DF1;&#x3002;&#x8FD9;&#x79CD;&quot;&#x81EA;&#x76D1;&#x7763;&#x6570;&#x636E;&#x589E;&#x5F3A;&quot;&#x7684;&#x8303;&#x5F0F;&#x540E;&#x6765;&#x88AB;&#x5927;&#x91CF;&#x91C7;&#x7528;&#xFF1A;</p>
<pre><code>&quot;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x7ED9;&#x81EA;&#x5DF1;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&quot;&#x7684;&#x8303;&#x5F0F;&#x5BB6;&#x65CF;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Toolformer (2023.02):
  &#x751F;&#x6210;: &#x6A21;&#x578B;&#x6807;&#x6CE8; API &#x8C03;&#x7528;&#x5019;&#x9009;
  &#x4FE1;&#x53F7;: loss &#x662F;&#x5426;&#x964D;&#x4F4E;&#xFF08;helpfulness&#xFF09;
  &#x8FC7;&#x6EE4;: &#x53EA;&#x4FDD;&#x7559;&#x964D;&#x4F4E; loss &#x7684; API &#x8C03;&#x7528;
  &#x8BAD;&#x7EC3;: &#x7528;&#x589E;&#x5F3A;&#x6570;&#x636E;&#x5FAE;&#x8C03;

STaR - Self-Taught Reasoner (2022):
  &#x751F;&#x6210;: &#x6A21;&#x578B;&#x751F;&#x6210;&#x591A;&#x4E2A; chain-of-thought &#x63A8;&#x7406;&#x8FC7;&#x7A0B;
  &#x4FE1;&#x53F7;: &#x6700;&#x7EC8;&#x7B54;&#x6848;&#x662F;&#x5426;&#x6B63;&#x786E;
  &#x8FC7;&#x6EE4;: &#x53EA;&#x4FDD;&#x7559;&#x63A8;&#x5BFC;&#x51FA;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x7684;&#x63A8;&#x7406;&#x94FE;
  &#x8BAD;&#x7EC3;: &#x7528;&#x6B63;&#x786E;&#x63A8;&#x7406;&#x94FE;&#x5FAE;&#x8C03; &#x2192; &#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4E86;&#x66F4;&#x597D;&#x7684;&#x63A8;&#x7406;

Self-Instruct (2023):
  &#x751F;&#x6210;: &#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x751F;&#x6210; instruction + response &#x5BF9;
  &#x4FE1;&#x53F7;: &#x683C;&#x5F0F;&#x662F;&#x5426;&#x5408;&#x89C4;&#x3001;&#x662F;&#x5426;&#x4E0E;&#x5DF2;&#x6709;&#x6570;&#x636E;&#x91CD;&#x590D;
  &#x8FC7;&#x6EE4;: &#x53BB;&#x9664;&#x4F4E;&#x8D28;&#x91CF;&#x548C;&#x91CD;&#x590D;&#x7684;
  &#x8BAD;&#x7EC3;: &#x7528;&#x8FC7;&#x6EE4;&#x540E;&#x7684;&#x6570;&#x636E;&#x505A; instruction tuning
  &#x2192; Alpaca&#x3001;Vicuna &#x7B49;&#x6A21;&#x578B;&#x7684;&#x57FA;&#x7840;

Evol-Instruct / WizardLM (2023):
  &#x751F;&#x6210;: &#x7528; LLM &#x628A;&#x7B80;&#x5355; instruction &#x9010;&#x6B65;&quot;&#x8FDB;&#x5316;&quot;&#x6210;&#x66F4;&#x590D;&#x6742;&#x7684;&#x7248;&#x672C;
  &#x4FE1;&#x53F7;: &#x8FDB;&#x5316;&#x540E;&#x7684; instruction &#x662F;&#x5426;&#x53EF;&#x89E3;&#x3001;&#x662F;&#x5426;&#x66F4;&#x96BE;
  &#x8FC7;&#x6EE4;: &#x53BB;&#x9664;&#x4E0D;&#x53EF;&#x89E3;&#x7684;
  &#x8BAD;&#x7EC3;: &#x7528;&#x8FDB;&#x5316;&#x540E;&#x7684;&#x9AD8;&#x96BE;&#x5EA6;&#x6570;&#x636E;&#x5FAE;&#x8C03;

DeepSeek-R1 &#x7684; RL &#x8BAD;&#x7EC3; (2025):
  &#x751F;&#x6210;: &#x6A21;&#x578B;&#x751F;&#x6210;&#x591A;&#x6761;&#x63A8;&#x7406;&#x94FE;
  &#x4FE1;&#x53F7;: &#x6700;&#x7EC8;&#x7B54;&#x6848;&#x7684;&#x6B63;&#x786E;&#x6027;&#xFF08;reward&#xFF09;
  &#x8FC7;&#x6EE4;: RL &#x7684; policy gradient &#x81EA;&#x52A8;&#x653E;&#x5927;&#x9AD8; reward &#x7684;&#x8DEF;&#x5F84;
  &#x8BAD;&#x7EC3;: &#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x66F4;&#x65B0;&#x6743;&#x91CD;
  &#x2192; &#x672C;&#x8D28;&#x4E5F;&#x662F;&quot;&#x751F;&#x6210; &#x2192; &#x8BC4;&#x4F30; &#x2192; &#x4FDD;&#x7559;&#x597D;&#x7684; &#x2192; &#x8BAD;&#x7EC3;&quot;

&#x5171;&#x540C;&#x6A21;&#x5F0F;:
  &#x6A21;&#x578B;&#x751F;&#x6210;&#x5019;&#x9009; &#x2192; &#x7528;&#x67D0;&#x79CD;&#x4FE1;&#x53F7;&#x8BC4;&#x4F30;&#x597D;&#x574F; &#x2192; &#x8FC7;&#x6EE4;&#x4FDD;&#x7559; &#x2192; &#x8BAD;&#x7EC3;&#x81EA;&#x5DF1;
  &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
  Toolformer &#x7684;&#x4FE1;&#x53F7;&#x662F; loss &#x5DEE;&#x503C;
  STaR &#x7684;&#x4FE1;&#x53F7;&#x662F;&#x7B54;&#x6848;&#x6B63;&#x786E;&#x6027;
  Self-Instruct &#x7684;&#x4FE1;&#x53F7;&#x662F;&#x683C;&#x5F0F;&#x5408;&#x89C4;&#x6027;
  DeepSeek-R1 &#x7684;&#x4FE1;&#x53F7;&#x662F; reward
  &#x2192; &#x4E0D;&#x540C;&#x7684;&#x4FE1;&#x53F7;&#x9002;&#x5408;&#x4E0D;&#x540C;&#x7684;&#x589E;&#x5F3A;&#x76EE;&#x6807;&#xFF0C;&#x4F46;&#x6846;&#x67B6;&#x662F;&#x540C;&#x4E00;&#x5957;
</code></pre>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x66F4;&#x6DF1;&#x5C42;&#x7684;&#x6D1E;&#x5BDF;&#xFF1A;<strong>&#x6BCF;&#x79CD;&#x81EA;&#x76D1;&#x7763;&#x65B9;&#x6CD5;&#x90FD;&#x6709;&#x4E00;&#x4E2A;&quot;&#x81EA;&#x4E3E;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&quot;&#x2014;&#x2014;&#x6A21;&#x578B;&#x5FC5;&#x987B;&#x5148;&#x4F1A; X&#xFF0C;&#x624D;&#x80FD;&#x751F;&#x6210;&#x6570;&#x636E;&#x8BA9;&#x81EA;&#x5DF1;&#x5B66;&#x4F1A;&#x66F4;&#x597D;&#x7684; X&#x3002;</strong> &#x8FD9;&#x548C;&#x7F16;&#x8BD1;&#x5668;&#x81EA;&#x4E3E;&#xFF08;&#x7528; C &#x5199;&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x7F16;&#x8BD1;&#x81EA;&#x5DF1;&#xFF0C;&#x4F46;&#x7B2C;&#x4E00;&#x4E2A; C &#x7F16;&#x8BD1;&#x5668;&#x5FC5;&#x987B;&#x7528;&#x6C47;&#x7F16;&#x5199;&#xFF09;&#x662F;&#x5B8C;&#x5168;&#x4E00;&#x6837;&#x7684;&#x903B;&#x8F91;&#x3002;</p>
<pre><code>&#x5404;&#x65B9;&#x6CD5;&#x7684;&quot;&#x81EA;&#x4E3E;&#x524D;&#x7F6E;&#x6761;&#x4EF6;&quot;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Toolformer:
  &#x524D;&#x7F6E;&#x6761;&#x4EF6;: in-context learning&#xFF08;&#x4ECE;&#x51E0;&#x4E2A;&#x793A;&#x4F8B;&#x4E2D;&#x5B66;&#x4F1A;&#x6807;&#x6CE8; API &#x8C03;&#x7528;&#x6A21;&#x5F0F;&#xFF09;
  &#x81EA;&#x4E3E;&#x903B;&#x8F91;: &#x5148;&#x4F1A;&#x6A21;&#x4EFF; &#x2192; &#x9020;&#x51FA;&#x5927;&#x91CF;&#x5019;&#x9009; &#x2192; &#x8FC7;&#x6EE4; &#x2192; &#x5FAE;&#x8C03; &#x2192; &#x8C03;&#x7528;&#x66F4;&#x51C6;
  &#x5931;&#x8D25;&#x8FB9;&#x754C;: &lt; 775M &#x53C2;&#x6570;&#x7684;&#x6A21;&#x578B; in-context learning &#x592A;&#x5F31;&#xFF0C;
            &#x9020;&#x4E0D;&#x51FA;&#x6709;&#x6548;&#x7684; API &#x8C03;&#x7528;&#x5019;&#x9009; &#x2192; &#x6574;&#x4E2A;&#x6D41;&#x7A0B;&#x5931;&#x6548;
            &#xFF08;&#x8BBA;&#x6587;&#x5B9E;&#x9A8C;&#x8BC1;&#x5B9E;: &#x5C0F;&#x6A21;&#x578B;&#x8BAD;&#x5B8C;&#x540E;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#x5B8C;&#x5168;&#x65E0;&#x6548;&#xFF09;

STaR (Self-Taught Reasoner):
  &#x524D;&#x7F6E;&#x6761;&#x4EF6;: &#x5076;&#x5C14;&#x80FD;&#x8499;&#x5BF9;&#x7B54;&#x6848;&#xFF08;&#x975E;&#x96F6;&#x6B63;&#x786E;&#x7387;&#xFF09;
  &#x81EA;&#x4E3E;&#x903B;&#x8F91;: &#x5076;&#x5C14;&#x5BF9; &#x2192; &#x4FDD;&#x7559;&#x6B63;&#x786E;&#x7684;&#x63A8;&#x7406;&#x94FE; &#x2192; &#x5FAE;&#x8C03; &#x2192; &#x5BF9;&#x5F97;&#x66F4;&#x591A;
  &#x5931;&#x8D25;&#x8FB9;&#x754C;: &#x5982;&#x679C;&#x6A21;&#x578B;&#x4ECE;&#x6765;&#x6CA1;&#x8499;&#x5BF9;&#x8FC7;&#xFF0C;&#x5C31;&#x6CA1;&#x6709;&#x6B63;&#x786E;&#x7684;&#x63A8;&#x7406;&#x94FE;&#x53EF;&#x4EE5;&#x5B66;
            &#x2192; &#x8FC7;&#x6EE4;&#x540E;&#x7684;&#x6570;&#x636E;&#x96C6;&#x662F;&#x7A7A;&#x7684; &#x2192; &#x65E0;&#x6CD5;&#x81EA;&#x4E3E;
            &#x2192; &#x6240;&#x4EE5;&#x8981;&#x4ECE;&quot;&#x5DF2;&#x7ECF;&#x6709;&#x4E00;&#x5B9A;&#x63A8;&#x7406;&#x80FD;&#x529B;&quot;&#x7684;&#x57FA;&#x7840;&#x6A21;&#x578B;&#x5F00;&#x59CB;

Self-Instruct:
  &#x524D;&#x7F6E;&#x6761;&#x4EF6;: &#x80FD;&#x751F;&#x6210;&#x683C;&#x5F0F;&#x5408;&#x7406;&#x7684;&#x6307;&#x4EE4;-&#x56DE;&#x7B54;&#x5BF9;&#xFF08;&#x5143;&#x6307;&#x4EE4;&#x8DDF;&#x968F;&#x80FD;&#x529B;&#xFF09;
  &#x81EA;&#x4E3E;&#x903B;&#x8F91;: &#x4F1A;&#x5199;&#x9898;+&#x7B54;&#x9898; &#x2192; &#x9020;&#x5927;&#x91CF;&#x6307;&#x4EE4;&#x6570;&#x636E; &#x2192; &#x8FC7;&#x6EE4; &#x2192; &#x5FAE;&#x8C03; &#x2192; &#x66F4;&#x4F1A;&#x8DDF;&#x6307;&#x4EE4;
  &#x5931;&#x8D25;&#x8FB9;&#x754C;: &#x592A;&#x5F31;&#x7684;&#x6A21;&#x578B;&#x751F;&#x6210;&#x7684;&#x6307;&#x4EE4;&#x672C;&#x8EAB;&#x5C31;&#x662F;&#x4E71;&#x7801;&#x6216;&#x4F4E;&#x8D28;&#x91CF;
            &#x2192; &#x683C;&#x5F0F;&#x8FC7;&#x6EE4;&#x540E;&#x51E0;&#x4E4E;&#x5168;&#x88AB;&#x6DD8;&#x6C70; &#x2192; &#x65E0;&#x6CD5;&#x81EA;&#x4E3E;

Evol-Instruct / WizardLM:
  &#x524D;&#x7F6E;&#x6761;&#x4EF6;: &#x7406;&#x89E3;&quot;&#x4EC0;&#x4E48;&#x662F;&#x66F4;&#x96BE;&#x7684;&#x4EFB;&#x52A1;&quot;&#x5E76;&#x80FD;&#x6539;&#x5199;&#xFF08;&#x5143;&#x8BA4;&#x77E5;&#x80FD;&#x529B;&#xFF09;
  &#x81EA;&#x4E3E;&#x903B;&#x8F91;: &#x80FD;&#x6539;&#x5199; &#x2192; &#x9020;&#x51FA;&#x66F4;&#x96BE;&#x7684;&#x8BAD;&#x7EC3;&#x9898; &#x2192; &#x5FAE;&#x8C03; &#x2192; &#x89E3;&#x66F4;&#x96BE;&#x7684;&#x9898;
  &#x5931;&#x8D25;&#x8FB9;&#x754C;: &#x6A21;&#x578B;&#x4E0D;&#x7406;&#x89E3;&quot;&#x589E;&#x52A0;&#x7EA6;&#x675F;=&#x66F4;&#x96BE;&quot;&#x8FD9;&#x79CD;&#x5143;&#x6982;&#x5FF5; &#x2192; &#x6539;&#x5199;&#x540E;&#x7684;&#x9898;&#x65E0;&#x610F;&#x4E49;

DeepSeek-R1:
  &#x524D;&#x7F6E;&#x6761;&#x4EF6;: &#x6709;&#x975E;&#x96F6;&#x6982;&#x7387;&#x751F;&#x6210;&#x6B63;&#x786E;&#x63A8;&#x7406;&#x94FE;&#xFF08;RL &#x9700;&#x8981;&#x81F3;&#x5C11;&#x5076;&#x5C14;&#x62FF;&#x5230; reward&#xFF09;
  &#x81EA;&#x4E3E;&#x903B;&#x8F91;: &#x5076;&#x5C14;&#x5BF9; &#x2192; RL &#x5F3A;&#x5316;&#x5BF9;&#x7684;&#x8DEF;&#x5F84; &#x2192; &#x5BF9;&#x5F97;&#x66F4;&#x591A; &#x2192; &#x7EE7;&#x7EED;&#x5F3A;&#x5316;
  &#x5931;&#x8D25;&#x8FB9;&#x754C;: &#x5982;&#x679C; reward &#x6C38;&#x8FDC;&#x4E3A; 0&#xFF0C;policy gradient &#x6CA1;&#x6709;&#x68AF;&#x5EA6;&#x4FE1;&#x53F7;
            &#x2192; &#x6240;&#x4EE5; R1 &#x4ECE; DeepSeek-V3&#xFF08;&#x5DF2;&#x7ECF;&#x5F88;&#x5F3A;&#x7684;&#x57FA;&#x7840;&#x6A21;&#x578B;&#xFF09;&#x51FA;&#x53D1;
            &#x2192; &#x800C;&#x4E0D;&#x662F;&#x4ECE;&#x968F;&#x673A;&#x521D;&#x59CB;&#x5316;&#x51FA;&#x53D1;

&#x81EA;&#x4E3E;&#x7684;&#x666E;&#x904D;&#x89C4;&#x5F8B;:
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

  &#x6A21;&#x578B;&#x592A;&#x5F31; &#x2192; &#x9020;&#x4E0D;&#x51FA;&#x6709;&#x6548;&#x7684;&#x81EA;&#x76D1;&#x7763;&#x6570;&#x636E; &#x2192; &#x65E0;&#x6CD5;&#x81EA;&#x4E3E; &#x2192; &#x88AB;&#x56F0;&#x5728;&#x4F4E;&#x6C34;&#x5E73;
  &#x6A21;&#x578B;&#x521A;&#x597D;&#x591F;&#x5F3A; &#x2192; &#x80FD;&#x9020;&#x51FA;&#x4E00;&#x4E9B;&#x6709;&#x6548;&#x6570;&#x636E; &#x2192; &#x5FAE;&#x8C03;/RL &#x2192; &#x53D8;&#x66F4;&#x5F3A; &#x2192; &#x9020;&#x66F4;&#x597D;&#x7684;&#x6570;&#x636E;
  &#x2192; &#x6B63;&#x53CD;&#x9988;&#x98DE;&#x8F6E;&#x5F00;&#x59CB;&#x8F6C;&#x52A8;

  &#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x6240;&#x6709;&#x81EA;&#x4E3E;&#x65B9;&#x6CD5;&#x90FD;&#x6709;&#x4E00;&#x4E2A;&quot;&#x6D8C;&#x73B0;&#x62D0;&#x70B9;&quot;:
    Toolformer: ~775M &#x53C2;&#x6570;
    Self-Instruct: &#x9700;&#x8981; GPT-3 175B &#x7EA7;&#x522B;
    DeepSeek-R1: &#x9700;&#x8981; V3 &#x7EA7;&#x522B;&#x7684;&#x57FA;&#x7840;&#x6A21;&#x578B;

  &#x62D0;&#x70B9;&#x4EE5;&#x4E0B;: &#x81EA;&#x4E3E;&#x5931;&#x8D25;&#xFF0C;&#x81EA;&#x76D1;&#x7763;&#x65B9;&#x6CD5;&#x65E0;&#x6548;
  &#x62D0;&#x70B9;&#x4EE5;&#x4E0A;: &#x81EA;&#x4E3E;&#x6210;&#x529F;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&quot;&#x81EA;&#x6211;&#x63D0;&#x5347;&quot;

  &#x7C7B;&#x6BD4;:
    &#x4E00;&#x4E2A;&#x5B8C;&#x5168;&#x4E0D;&#x4F1A;&#x7F16;&#x7A0B;&#x7684;&#x4EBA;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&quot;&#x770B;&#x81EA;&#x5DF1;&#x5199;&#x7684;&#x4EE3;&#x7801;&quot;&#x6765;&#x5B66;&#x7F16;&#x7A0B;
    &#x4F46;&#x4E00;&#x4E2A;&#x4F1A;&#x5199;&#x7B80;&#x5355;&#x7A0B;&#x5E8F;&#x7684;&#x4EBA;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&quot;&#x5199;&#x4EE3;&#x7801;&#x2192;&#x8FD0;&#x884C;&#x2192;&#x770B;&#x7ED3;&#x679C;&#x2192;&#x6539;&#x8FDB;&quot;&#x7684;&#x5FAA;&#x73AF;&#x4E0D;&#x65AD;&#x63D0;&#x5347;
    &#x2192; &#x524D;&#x63D0;&#x662F;&#x4F60;&#x81F3;&#x5C11;&#x4F1A;&#x5199;&#x51FA;&#x80FD;&#x8FD0;&#x884C;&#x7684;&#x4EE3;&#x7801;
</code></pre>
<h3 id="2. &#x4ECE; Toolformer &#x5230; MCP&#xFF1A;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x7684;&#x5B8C;&#x6574;&#x6F14;&#x5316;"><a href="#2. &#x4ECE; Toolformer &#x5230; MCP&#xFF1A;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x7684;&#x5B8C;&#x6574;&#x6F14;&#x5316;"></a>2. &#x4ECE; Toolformer &#x5230; MCP&#xFF1A;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x7684;&#x5B8C;&#x6574;&#x6F14;&#x5316;</h3>
<p>Toolformer &#x5F00;&#x521B;&#x7684;&quot;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7ED3;&#x6784;&#x5316;&#x8C03;&#x7528; &#x2192; &#x5916;&#x90E8;&#x6267;&#x884C; &#x2192; &#x7ED3;&#x679C;&#x6CE8;&#x5165;&quot;&#x6A21;&#x5F0F;&#xFF0C;&#x5C31;&#x662F;&#x4ECA;&#x5929;&#x6240;&#x6709; LLM &#x5DE5;&#x5177;&#x8C03;&#x7528;&#xFF08;&#x5305;&#x62EC; MCP&#xFF09;&#x7684;&#x539F;&#x578B;&#x3002;&#x6F14;&#x5316;&#x8DEF;&#x5F84;&#x5206;&#x4E3A;&#x4E24;&#x6761;&#x7EBF;&#x2014;&#x2014;<strong>&#x8C03;&#x7528;&#x80FD;&#x529B;</strong>&#x548C;<strong>&#x63A5;&#x53E3;&#x534F;&#x8BAE;</strong>&#xFF1A;</p>
<pre><code>&#x8C03;&#x7528;&#x80FD;&#x529B;&#x7684;&#x6F14;&#x5316;&#xFF08;&#x6A21;&#x578B;&#x600E;&#x4E48;&#x8C03;&#x5DE5;&#x5177;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

2023.02 Toolformer: &quot;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x5B66;&#x4F1A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x8C03;&quot;
  &#x6A21;&#x578B;&#x8F93;&#x51FA;: [Calculator(7921/89) &#x2192;
  &#x9650;&#x5236;: &#x5355;&#x6B65;&#x8C03;&#x7528;&#xFF0C;&#x5DE5;&#x5177;&#x5199;&#x6B7B;&#x5728;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x91CC;&#xFF0C;&#x52A0;&#x65B0;&#x5DE5;&#x5177;&#x8981;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;

2023.03 ReAct: &quot;&#x63A8;&#x7406;&#x548C;&#x8C03;&#x7528;&#x4EA4;&#x66FF;&#x8FDB;&#x884C;&quot;
  &#x6A21;&#x578B;&#x8F93;&#x51FA;: Thought &#x2192; Action &#x2192; Observation &#x2192; Thought &#x2192; ...
  &#x7A81;&#x7834;: &#x652F;&#x6301;&#x591A;&#x6B65;&#x94FE;&#x5F0F;&#x8C03;&#x7528;&#xFF08;&#x641C;&#x5230;&#x7ED3;&#x679C;&#x540E;&#x518D;&#x7B97;&#xFF09;

2023.05 VOYAGER: &quot;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x5199;&#x5DE5;&#x5177;&#xFF08;&#x4EE3;&#x7801;&#xFF09;&quot;
  &#x6A21;&#x578B;&#x8F93;&#x51FA;: &#x4E00;&#x6BB5;&#x53EF;&#x6267;&#x884C;&#x7684; JavaScript &#x4EE3;&#x7801;
  &#x7A81;&#x7834;: &#x5DE5;&#x5177;&#x4E0D;&#x518D;&#x662F;&#x9884;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x521B;&#x9020;&#x65B0;&#x5DE5;&#x5177;

2023.03 Reflexion: &quot;&#x8C03;&#x7528;&#x5931;&#x8D25;&#x540E;&#x53CD;&#x601D;&#x6539;&#x8FDB;&quot;
  &#x7A81;&#x7834;: &#x52A0;&#x5165;&#x4ECE;&#x5931;&#x8D25;&#x4E2D;&#x5B66;&#x4E60;&#x7684;&#x95ED;&#x73AF;
</code></pre>
<pre><code>&#x63A5;&#x53E3;&#x534F;&#x8BAE;&#x7684;&#x6F14;&#x5316;&#xFF08;&#x5DE5;&#x5177;&#x600E;&#x4E48;&#x63A5;&#x5165;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

2023.02 Toolformer: &#x5DE5;&#x5177;&#x786C;&#x7F16;&#x7801;
  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;  &#x5DE5;&#x5177;&#x5728;&#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x56FA;&#x5B9A;&#x4E86;&#xFF08;5 &#x4E2A;&#x7279;&#x6B8A; token&#xFF09; &#x2502;
  &#x2502;  &#x52A0;&#x65B0;&#x5DE5;&#x5177; = &#x91CD;&#x65B0;&#x9020;&#x8BAD;&#x7EC3;&#x6570;&#x636E; + &#x91CD;&#x65B0;&#x5FAE;&#x8C03;   &#x2502;
  &#x2502;  &#x6A21;&#x578B;&#x548C;&#x5DE5;&#x5177;&#x7D27;&#x8026;&#x5408;                       &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

2023.03 ChatGPT Plugins: &#x5DE5;&#x5177;&#x63CF;&#x8FF0;&#x5728; manifest &#x6587;&#x4EF6;
  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;  &#x6BCF;&#x4E2A;&#x63D2;&#x4EF6;&#x5199;&#x4E00;&#x4E2A; openapi.yaml &#x63CF;&#x8FF0;&#x81EA;&#x5DF1;   &#x2502;
  &#x2502;  &#x6A21;&#x578B;&#x901A;&#x8FC7; system prompt &#x4E86;&#x89E3;&#x6709;&#x54EA;&#x4E9B;&#x5DE5;&#x5177;  &#x2502;
  &#x2502;  &#x52A0;&#x65B0;&#x5DE5;&#x5177; = &#x5199;&#x4E2A;&#x63CF;&#x8FF0;&#x6587;&#x4EF6;&#xFF0C;&#x4E0D;&#x7528;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;  &#x2502;
  &#x2502;  &#x4F46;&#x683C;&#x5F0F;&#x4E0D;&#x7EDF;&#x4E00;&#xFF0C;&#x6BCF;&#x4E2A;&#x63D2;&#x4EF6;&#x5404;&#x641E;&#x5404;&#x7684;         &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

2023.06 Function Calling (OpenAI): JSON Schema &#x7EDF;&#x4E00;&#x63CF;&#x8FF0;
  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;  &#x5DE5;&#x5177;&#x7528; JSON Schema &#x63CF;&#x8FF0;:              &#x2502;
  &#x2502;  {                                     &#x2502;
  &#x2502;    &quot;name&quot;: &quot;calculator&quot;,               &#x2502;
  &#x2502;    &quot;description&quot;: &quot;&#x8BA1;&#x7B97;&#x6570;&#x5B66;&#x8868;&#x8FBE;&#x5F0F;&quot;,     &#x2502;
  &#x2502;    &quot;parameters&quot;: {                     &#x2502;
  &#x2502;      &quot;expression&quot;: {&quot;type&quot;: &quot;string&quot;}  &#x2502;
  &#x2502;    }                                   &#x2502;
  &#x2502;  }                                     &#x2502;
  &#x2502;  &#x6A21;&#x578B;&#x8F93;&#x51FA; JSON: {&quot;name&quot;:&quot;calculator&quot;,  &#x2502;
  &#x2502;    &quot;arguments&quot;:{&quot;expression&quot;:&quot;7921/89&quot;}}&#x2502;
  &#x2502;                                        &#x2502;
  &#x2502;  &#x7EDF;&#x4E00;&#x4E86;&quot;&#x600E;&#x4E48;&#x63CF;&#x8FF0;&#x5DE5;&#x5177;&quot;                   &#x2502;
  &#x2502;  &#x4F46;&#x6BCF;&#x4E2A; LLM &#x5382;&#x5546;&#x7684; API &#x683C;&#x5F0F;&#x4E0D;&#x540C;         &#x2502;
  &#x2502;  OpenAI &#x7684; function_call &#x548C; Anthropic  &#x2502;
  &#x2502;  &#x7684; tool_use &#x53C2;&#x6570;&#x540D;&#x90FD;&#x4E0D;&#x4E00;&#x6837;             &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

2024.11 MCP (Anthropic): &#x7EDF;&#x4E00;&#x901A;&#x4FE1;&#x534F;&#x8BAE;
  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502;  MCP = Model Context Protocol          &#x2502;
  &#x2502;  &#x5B9A;&#x4E49;&#x4E86;&#x5DE5;&#x5177;&#x63D0;&#x4F9B;&#x65B9;&#x548C; LLM &#x5BA2;&#x6237;&#x7AEF;&#x4E4B;&#x95F4;     &#x2502;
  &#x2502;  &#x7684;&#x6807;&#x51C6;&#x901A;&#x4FE1;&#x534F;&#x8BAE;:                        &#x2502;
  &#x2502;                                        &#x2502;
  &#x2502;  MCP Server&#xFF08;&#x5DE5;&#x5177;&#x63D0;&#x4F9B;&#x65B9;&#xFF09;:              &#x2502;
  &#x2502;    &#x66B4;&#x9732; tools/list &#x2192; &#x544A;&#x8BC9;&#x5BA2;&#x6237;&#x7AEF;&#x6709;&#x5565;&#x5DE5;&#x5177;&#x2502;
  &#x2502;    &#x66B4;&#x9732; tools/call &#x2192; &#x63A5;&#x6536;&#x8C03;&#x7528;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;  &#x2502;
  &#x2502;                                        &#x2502;
  &#x2502;  MCP Client&#xFF08;LLM &#x5E94;&#x7528;&#xFF09;:               &#x2502;
  &#x2502;    &#x53D1;&#x73B0;&#x53EF;&#x7528;&#x5DE5;&#x5177; &#x2192; &#x6CE8;&#x5165;&#x6A21;&#x578B; context      &#x2502;
  &#x2502;    &#x6A21;&#x578B;&#x51B3;&#x5B9A;&#x8C03;&#x7528; &#x2192; &#x8F6C;&#x53D1;&#x7ED9; Server &#x6267;&#x884C;   &#x2502;
  &#x2502;    &#x62FF;&#x5230;&#x7ED3;&#x679C; &#x2192; &#x6CE8;&#x5165;&#x56DE;&#x6A21;&#x578B;&#x7EE7;&#x7EED;&#x751F;&#x6210;        &#x2502;
  &#x2502;                                        &#x2502;
  &#x2502;  &#x7C7B;&#x6BD4;: USB &#x534F;&#x8BAE;                        &#x2502;
  &#x2502;    &#x4EFB;&#x4F55; USB &#x8BBE;&#x5907; &#x2194; &#x4EFB;&#x4F55;&#x7535;&#x8111;             &#x2502;
  &#x2502;    &#x4EFB;&#x4F55; MCP Server &#x2194; &#x4EFB;&#x4F55; MCP Client   &#x2502;
  &#x2502;    Cursor&#x3001;Claude Desktop &#x7B49;&#x90FD;&#x662F; Client&#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
</code></pre>
<pre><code>&#x6F14;&#x5316;&#x7684;&#x6838;&#x5FC3;&#x8D8B;&#x52BF;&#xFF1A;&#x5DE5;&#x5177;&#x4ECE;&quot;&#x5199;&#x6B7B;&quot;&#x5230;&quot;&#x5373;&#x63D2;&#x5373;&#x7528;&quot;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Toolformer:       &#x5DE5;&#x5177; &#xD7; &#x6A21;&#x578B; &#x7D27;&#x8026;&#x5408;&#xFF08;&#x52A0;&#x5DE5;&#x5177;&#x8981;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#xFF09;
Function Calling: &#x5DE5;&#x5177;&#x53EF;&#x4EE5;&#x52A8;&#x6001;&#x6CE8;&#x5165;&#xFF08;&#x6BCF;&#x6B21;&#x8BF7;&#x6C42;&#x53EF;&#x4EE5;&#x4F20;&#x4E0D;&#x540C;&#x7684;&#x5DE5;&#x5177;&#x5217;&#x8868;&#xFF09;
MCP:              &#x5DE5;&#x5177;&#x53D1;&#x73B0;&#x548C;&#x8C03;&#x7528;&#x90FD;&#x6807;&#x51C6;&#x5316;&#xFF08;&#x4EFB;&#x610F; Server &#x5BF9;&#x63A5;&#x4EFB;&#x610F; Client&#xFF09;

&#x4F46;&#x5E95;&#x5C42;&#x673A;&#x5236;&#x59CB;&#x7EC8;&#x6CA1;&#x53D8;&#xFF08;Toolformer &#x5B9A;&#x4E49;&#x7684;&#x6A21;&#x5F0F;&#xFF09;:
  &#x2460; &#x6A21;&#x578B;&#x901A;&#x8FC7;&#x4E0A;&#x4E0B;&#x6587;&#x4E86;&#x89E3;&quot;&#x6709;&#x54EA;&#x4E9B;&#x5DE5;&#x5177;&#x53EF;&#x7528;&quot;
  &#x2461; &#x6A21;&#x578B;&#x751F;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8C03;&#x7528;&#x4FE1;&#x606F;&#xFF08;&#x5DE5;&#x5177;&#x540D; + &#x53C2;&#x6570;&#xFF09;
  &#x2462; &#x5916;&#x90E8;&#x7CFB;&#x7EDF;&#x62E6;&#x622A;&#x3001;&#x6267;&#x884C;&#x3001;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;
  &#x2463; &#x7ED3;&#x679C;&#x6CE8;&#x5165;&#x56DE;&#x6A21;&#x578B;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x7EE7;&#x7EED;&#x751F;&#x6210;

Toolformer &#x7684; [Calculator(7921/89) &#x2192; 89.0]
&#x548C; MCP &#x7684; tools/call &#x2192; {&quot;result&quot;: &quot;89.0&quot;}
&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;&#x7684;&#x4E0D;&#x540C;&#x7F16;&#x7801;&#x65B9;&#x5F0F;
</code></pre>
<h3 id="3. &#x6982;&#x5FF5;&#x5148;&#x9A71;&#xFF0C;&#x4F46;&#x65B9;&#x6CD5;&#x88AB;&#x7ED5;&#x8FC7;&#x4E86;"><a href="#3. &#x6982;&#x5FF5;&#x5148;&#x9A71;&#xFF0C;&#x4F46;&#x65B9;&#x6CD5;&#x88AB;&#x7ED5;&#x8FC7;&#x4E86;"></a>3. &#x6982;&#x5FF5;&#x5148;&#x9A71;&#xFF0C;&#x4F46;&#x65B9;&#x6CD5;&#x88AB;&#x7ED5;&#x8FC7;&#x4E86;</h3>
<p>&#x56DE;&#x8FC7;&#x5934;&#x6765;&#x770B;&#xFF0C;Toolformer &#x7684;<strong>&#x6982;&#x5FF5;&#x8D21;&#x732E;</strong>&#x548C;<strong>&#x65B9;&#x6CD5;&#x8BBA;&#x8D21;&#x732E;</strong>&#x9700;&#x8981;&#x5206;&#x5F00;&#x8BC4;&#x4EF7;&#xFF1A;</p>
<pre><code>&#x2713; &#x6982;&#x5FF5;&#x8D21;&#x732E;&#xFF08;&#x88AB;&#x5DE5;&#x4E1A;&#x754C;&#x91C7;&#x7EB3;&#xFF0C;&#x5F71;&#x54CD;&#x6DF1;&#x8FDC;&#xFF09;:
  &#x2022; &#x9996;&#x6B21;&#x8BC1;&#x660E;&quot;LLM &#x53EF;&#x4EE5;&#x5B66;&#x4F1A;&#x81EA;&#x4E3B;&#x8C03;&#x5DE5;&#x5177;&quot;
  &#x2022; &#x786E;&#x7ACB;&#x4E86;&quot;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7ED3;&#x6784;&#x5316;&#x8C03;&#x7528; &#x2192; &#x5916;&#x90E8;&#x6267;&#x884C; &#x2192; &#x7ED3;&#x679C;&#x6CE8;&#x5165;&quot;&#x7684;&#x8303;&#x5F0F;
  &#x2022; &#x8BC1;&#x660E;&#x4E86;&quot;&#x5C0F;&#x6A21;&#x578B; + &#x5DE5;&#x5177; &gt; &#x5927;&#x6A21;&#x578B;&#x65E0;&#x5DE5;&#x5177;&quot;
  &#x2192; &#x8FD9;&#x4E9B;&#x6D1E;&#x5BDF;&#x76F4;&#x63A5;&#x5851;&#x9020;&#x4E86; Function Calling&#x3001;MCP &#x7B49;&#x540E;&#x7EED;&#x5DE5;&#x4F5C;

&#x2717; &#x65B9;&#x6CD5;&#x8BBA;&#x8D21;&#x732E;&#xFF08;&#x672A;&#x88AB;&#x5DE5;&#x4E1A;&#x754C;&#x91C7;&#x7EB3;&#xFF09;:
  &#x2022; helpfulness loss &#x8FC7;&#x6EE4;&#x6D41;&#x7A0B; &#x2192; &#x88AB;&#x6807;&#x51C6; instruction tuning / RLHF &#x66FF;&#x4EE3;
  &#x2022; &#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x5355;&#x72EC;&#x8BAD;&#x7EC3; &#x2192; &#x88AB;&quot;&#x901A;&#x7528;&#x5DE5;&#x5177;&#x6280;&#x80FD; + in-context learning&quot;&#x66FF;&#x4EE3;
  &#x2022; &#x81EA;&#x76D1;&#x7763;&#x6570;&#x636E;&#x589E;&#x5F3A; &#x2192; &#x88AB;&#x4EBA;&#x5DE5;/&#x534A;&#x81EA;&#x52A8;&#x6807;&#x6CE8;&#x7684;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6570;&#x636E;&#x66FF;&#x4EE3;
</code></pre>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x65B9;&#x6CD5;&#x88AB;&#x7ED5;&#x8FC7;&#x4E86;&#xFF1F;</strong> Toolformer &#x57FA;&#x4E8E; GPT-J 6.7B&#xFF0C;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#x7684; in-context learning &#x80FD;&#x529B;&#x4E0D;&#x591F;&#x5F3A;&#x2014;&#x2014;&#x4F60;&#x5728; prompt &#x91CC;&#x63CF;&#x8FF0;&#x4E00;&#x4E2A;&#x65B0;&#x5DE5;&#x5177;&#xFF0C;&#x5B83;&#x5B66;&#x4E0D;&#x4F1A;&#x3002;&#x6240;&#x4EE5; Toolformer &#x4E0D;&#x5F97;&#x4E0D;&#x7528;&#x590D;&#x6742;&#x7684; loss &#x8FC7;&#x6EE4;&#x6765;&quot;&#x786C;&#x8BAD;&quot;&#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x7684;&#x4F7F;&#x7528;&#x6A21;&#x5F0F;&#x3002;</p>
<p>&#x4F46;&#x5230;&#x4E86; GPT-4 / Claude &#x91CF;&#x7EA7;&#xFF0C;&#x6A21;&#x578B;&#x7684; in-context learning &#x5DF2;&#x7ECF;&#x5F3A;&#x5230;<strong>&#x4F60;&#x7ED9;&#x5B83;&#x4E00;&#x6BB5;&#x5DE5;&#x5177;&#x63CF;&#x8FF0;&#xFF0C;&#x5B83;&#x76F4;&#x63A5;&#x5C31;&#x4F1A;&#x7528;&#x4E86;</strong>&#x3002;&#x5DE5;&#x4E1A;&#x754C;&#x53D1;&#x73B0;&#xFF0C;&#x53EA;&#x9700;&#x8981;&#x901A;&#x8FC7;&#x6807;&#x51C6;&#x5FAE;&#x8C03;&#x6559;&#x4F1A;&#x6A21;&#x578B;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x5143;&#x6280;&#x80FD;&#x2014;&#x2014;&quot;&#x770B;&#x5230;&#x5DE5;&#x5177;&#x63CF;&#x8FF0; &#x2192; &#x5224;&#x65AD;&#x4F55;&#x65F6;&#x8C03;&#x7528; &#x2192; &#x8F93;&#x51FA;&#x6B63;&#x786E; JSON&quot;&#x2014;&#x2014;&#x7136;&#x540E;&#x5728;&#x63A8;&#x7406;&#x65F6;&#x628A;&#x5177;&#x4F53;&#x5DE5;&#x5177;&#x63CF;&#x8FF0;&#x585E;&#x8FDB; context &#x5C31;&#x884C;&#x3002;&#x4E0D;&#x9700;&#x8981;&#x4E3A;&#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x5355;&#x72EC;&#x8DD1; Toolformer &#x7684;&#x91C7;&#x6837;-&#x6267;&#x884C;-&#x8FC7;&#x6EE4;&#x6D41;&#x7A0B;&#x3002;</p>
<pre><code>&#x7C7B;&#x6BD4;:
  Toolformer = &#x624B;&#x628A;&#x624B;&#x6559;&#x4E00;&#x4E2A;&#x8BB0;&#x5FC6;&#x529B;&#x5DEE;&#x7684;&#x65B0;&#x4EBA;&quot;&#x8BA1;&#x7B97;&#x5668;&#x6309;&#x8FD9;&#x4E2A;&#x952E;&#x3001;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x5728;&#x8FD9;&#x91CC;&#x8F93;&#x5165;&quot;
               &#x2192; &#x6BCF;&#x5B66;&#x4E00;&#x4E2A;&#x65B0;&#x5DE5;&#x5177;&#x90FD;&#x8981;&#x624B;&#x628A;&#x624B;&#x6559;&#x4E00;&#x904D;&#xFF08;loss &#x8FC7;&#x6EE4;&#x6D41;&#x7A0B;&#xFF09;

  GPT-4 &#x65F6;&#x4EE3; = &#x6559;&#x4E00;&#x4E2A;&#x806A;&#x660E;&#x4EBA;&quot;&#x600E;&#x4E48;&#x770B;&#x8BF4;&#x660E;&#x4E66;&quot;
               &#x2192; &#x7ED9;&#x4ED6;&#x4EFB;&#x4F55;&#x65B0;&#x5DE5;&#x5177;&#x7684;&#x8BF4;&#x660E;&#x4E66;&#xFF0C;&#x4ED6;&#x81EA;&#x5DF1;&#x5C31;&#x80FD;&#x4E0A;&#x624B;
               &#x2192; &#x53EA;&#x9700;&#x8981;&#x6559;&#x4E00;&#x6B21;&quot;&#x8BFB;&#x8BF4;&#x660E;&#x4E66;&quot;&#x8FD9;&#x4E2A;&#x5143;&#x6280;&#x80FD;
</code></pre>
<p>Toolformer &#x7684;&#x5386;&#x53F2;&#x89D2;&#x8272;&#x66F4;&#x50CF;&#x662F;<strong>&#x6982;&#x5FF5;&#x9A8C;&#x8BC1;&#xFF08;Proof of Concept&#xFF09;</strong>&#x2014;&#x2014;&#x5B83;&#x7B2C;&#x4E00;&#x4E2A;&#x8BC1;&#x660E;&#x4E86;&quot;LLM &#x81EA;&#x4E3B;&#x4F7F;&#x7528;&#x5DE5;&#x5177;&quot;&#x662F;&#x53EF;&#x884C;&#x7684;&#xFF0C;&#x5E76;&#x5B9A;&#x4E49;&#x4E86;&#x81F3;&#x4ECA;&#x672A;&#x53D8;&#x7684;&#x8C03;&#x7528;&#x8303;&#x5F0F;&#x3002;&#x4F46;&#x5B83;&#x7684;&#x5177;&#x4F53;&#x8BAD;&#x7EC3;&#x65B9;&#x6CD5;&#x662F;&#x5728;&quot;&#x6A21;&#x578B;&#x4E0D;&#x591F;&#x5F3A;&quot;&#x65F6;&#x4EE3;&#x7684;&#x6743;&#x5B9C;&#x4E4B;&#x8BA1;&#xFF0C;&#x88AB;&#x66F4;&#x5927;&#x6A21;&#x578B;&#x7684;&#x6D8C;&#x73B0;&#x80FD;&#x529B;&#x76F4;&#x63A5;&#x7ED5;&#x8FC7;&#x4E86;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Toolformer &#x5B9A;&#x4E49;&#x4E86;&#x81F3;&#x4ECA;&#x672A;&#x53D8;&#x7684;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x8303;&#x5F0F;&#x2014;&#x2014;<strong>&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7ED3;&#x6784;&#x5316;&#x8C03;&#x7528; &#x2192; &#x5916;&#x90E8;&#x6267;&#x884C; &#x2192; &#x7ED3;&#x679C;&#x6CE8;&#x5165;</strong>&#xFF0C;&#x5E76;&#x901A;&#x8FC7; helpfulness &#x8FC7;&#x6EE4;&#x5B9E;&#x73B0;&#x4E86;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x8D28;&#x91CF;&#x81EA;&#x52A8;&#x9002;&#x914D;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x6C34;&#x5E73;&#x7684;&#x81EA;&#x76D1;&#x7763;&#x6D41;&#x7A0B;&#x3002;&#x5B83;&#x7684;&#x6982;&#x5FF5;&#x8D21;&#x732E;&#xFF08;LLM &#x53EF;&#x4EE5;&#x81EA;&#x4E3B;&#x4F7F;&#x7528;&#x5DE5;&#x5177;&#x3001;&#x5C0F;&#x6A21;&#x578B;+&#x5DE5;&#x5177; &gt; &#x5927;&#x6A21;&#x578B;&#x65E0;&#x5DE5;&#x5177;&#xFF09;&#x6DF1;&#x523B;&#x5F71;&#x54CD;&#x4E86;&#x540E;&#x7EED;&#x5DE5;&#x4F5C;&#xFF0C;&#x4F46;&#x5176;&#x5177;&#x4F53;&#x65B9;&#x6CD5;&#x8BBA;&#xFF08;loss &#x8FC7;&#x6EE4;&#x6D41;&#x7A0B;&#xFF09;&#x88AB;&#x66F4;&#x5F3A;&#x6A21;&#x578B;&#x7684; in-context learning &#x80FD;&#x529B;&#x76F4;&#x63A5;&#x7ED5;&#x8FC7;&#x2014;&#x2014;&#x8FD9;&#x4E5F;&#x662F;&#x81EA;&#x4E3E;&#x65B9;&#x6CD5;&#x7684;&#x5BBF;&#x547D;&#xFF1A;<strong>&#x4E00;&#x65E6;&#x6A21;&#x578B;&#x5F3A;&#x5230;&#x4E0D;&#x9700;&#x8981; bootstrap&#xFF0C;bootstrap &#x65B9;&#x6CD5;&#x672C;&#x8EAB;&#x5C31;&#x53D8;&#x5F97;&#x591A;&#x4F59;&#x4E86;</strong>&#x3002;</p>
`,E=[{level:2,title:"Toolformer 解决了什么问题？",children:[]},{level:2,title:"为什么现在才有人去解决？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"API 调用的文本编码",children:[]},{level:3,title:"三步自监督训练流程",children:[]},{level:3,title:"过滤机制详解——Toolformer 的灵魂",children:[]},{level:3,title:"训练 vs 推理：理解 Toolformer 的关键",children:[]},{level:3,title:"五个内置工具",children:[]}]},{level:2,title:"实验结果",children:[{level:3,title:"知识补全（LAMA 基准）",children:[]},{level:3,title:"数学计算",children:[]},{level:3,title:"问答（Search 基准）",children:[]},{level:3,title:"缩放规律",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"冷思考：Toolformer 开创了什么？",children:[{level:3,title:'1. "自己给自己造训练数据"的范式',children:[]},{level:3,title:"2. 从 Toolformer 到 MCP：工具调用的完整演化",children:[]},{level:3,title:"3. 概念先驱，但方法被绕过了",children:[]}]},{level:2,title:"总结",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
