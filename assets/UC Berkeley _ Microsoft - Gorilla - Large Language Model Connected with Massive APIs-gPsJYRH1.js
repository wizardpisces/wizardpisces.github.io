const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-05-24</em></p>
<p>UC Berkeley &#x548C;&#x5FAE;&#x8F6F;&#x7814;&#x7A76;&#x9662;&#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>Gorilla</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2305.15334">Gorilla: Large Language Model Connected with Massive APIs</a>&#x300B;&#xFF09;&#x89E3;&#x51B3;&#x4E86;&#x4E00;&#x4E2A;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;<strong>LLM &#x5728;&#x8C03;&#x7528; API &#x65F6;&#x4E25;&#x91CD;&#x5E7B;&#x89C9;&#x2014;&#x2014;&#x7F16;&#x9020;&#x4E0D;&#x5B58;&#x5728;&#x7684; API&#x3001;&#x4F20;&#x9519;&#x53C2;&#x6570;&#x3001;&#x7528;&#x9519;&#x5E93;&#x3002;</strong> Gorilla &#x901A;&#x8FC7;&#x5728; 1,645 &#x4E2A;&#x771F;&#x5B9E; API &#x4E0A;&#x5FAE;&#x8C03; LLaMA-7B&#xFF0C;&#x5E76;&#x5F15;&#x5165;&quot;&#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&quot;&#xFF0C;&#x4F7F;&#x5176;&#x5728; API &#x8C03;&#x7528;&#x51C6;&#x786E;&#x7387;&#x4E0A;<strong>&#x8D85;&#x8D8A; GPT-4</strong>&#xFF0C;&#x540C;&#x65F6;&#x5C06;&#x5E7B;&#x89C9;&#x7387;&#x4ECE; GPT-4 &#x7684; 37% &#x964D;&#x5230;&#x63A5;&#x8FD1; 0&#x3002;</p>
<p>&#x9879;&#x76EE;&#x5730;&#x5740;&#xFF1A;<a href="https://gorilla.cs.berkeley.edu">gorilla.cs.berkeley.edu</a></p>
<h2 id="Gorilla &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#Gorilla &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>Gorilla &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LLM &#x8C03; API &#x65F6;&#x4F1A;&#x7F16;&#x9020;&#x2014;&#x2014;&#x7F16;&#x4E0D;&#x5B58;&#x5728;&#x7684; API &#x540D;&#x3001;&#x7F16;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53C2;&#x6570;&#x3001;&#x7F16;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x5E93;&#x3002;</strong></p>
<pre><code>2023 &#x5E74;&#x4E2D;&#x7684;&#x5C34;&#x5C2C;&#x73B0;&#x5B9E;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x7528;&#x6237;: &quot;&#x5E2E;&#x6211;&#x627E;&#x4E00;&#x4E2A; Torch Hub &#x4E0A;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x628A;&#x5F55;&#x97F3;&#x8F6C;&#x6210;&#x6587;&#x5B57;&quot;

GPT-4 &#x7684;&#x56DE;&#x7B54;:
  torch.hub.load(&apos;pytorch/fairseq&apos;, &apos;wav2vec2_large_960h&apos;)
  &#x2192; &#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#x6839;&#x672C;&#x4E0D;&#x5B58;&#x5728;&#xFF01;GPT-4 &#x7F16;&#x9020;&#x4E86;&#x4E00;&#x4E2A;&#x770B;&#x8D77;&#x6765;&#x5408;&#x7406;&#x4F46;&#x865A;&#x5047;&#x7684; API

Claude &#x7684;&#x56DE;&#x7B54;:
  &#x9009;&#x4E86;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x7684;&#x5E93;

Gorilla &#x7684;&#x56DE;&#x7B54;:
  &#x6B63;&#x786E;&#x8BC6;&#x522B;&#x4EFB;&#x52A1; &#x2192; &#x8FD4;&#x56DE;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x7684;&#x3001;&#x53C2;&#x6570;&#x6B63;&#x786E;&#x7684; API &#x8C03;&#x7528;

&#x4E09;&#x7C7B;&#x5178;&#x578B;&#x9519;&#x8BEF;&#xFF1A;
  &#x2460; &#x5E7B;&#x89C9;: &#x8C03;&#x7528;&#x6839;&#x672C;&#x4E0D;&#x5B58;&#x5728;&#x7684; API&#xFF08;&#x6700;&#x4E25;&#x91CD;&#xFF09;
  &#x2461; &#x53C2;&#x6570;&#x9519;&#x8BEF;: API &#x540D;&#x5BF9;&#x4E86;&#x4F46;&#x53C2;&#x6570;&#x4E0D;&#x5BF9;
  &#x2462; &#x9009;&#x9519; API: &#x529F;&#x80FD;&#x4E0D;&#x5339;&#x914D;

&#x4E3A;&#x4EC0;&#x4E48;&#x5373;&#x4F7F; GPT-4 &#x4E5F;&#x4F1A;&#x72AF;&#x8FD9;&#x4E9B;&#x9519;&#xFF1F;
  &#x2192; API &#x6570;&#x91CF;&#x592A;&#x591A;&#xFF08;&#x4EC5; HuggingFace &#x5C31;&#x6709; 20 &#x4E07;+&#x6A21;&#x578B;&#xFF09;
  &#x2192; API &#x4E4B;&#x95F4;&#x529F;&#x80FD;&#x9AD8;&#x5EA6;&#x91CD;&#x53E0;&#xFF08;&#x5149;&quot;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&quot;&#x5C31;&#x6709;&#x51E0;&#x5341;&#x4E2A;&#x6A21;&#x578B;&#xFF09;
  &#x2192; API &#x6587;&#x6863;&#x9891;&#x7E41;&#x66F4;&#x65B0;&#xFF08;&#x6A21;&#x578B;&#x5347;&#x7EA7;&#x3001;&#x4ED3;&#x5E93;&#x8FC1;&#x79FB;&#xFF09;
  &#x2192; &#x5168;&#x9760; LLM &#x4ECE;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x4E2D;&quot;&#x56DE;&#x5FC6;&quot;&#xFF0C;&#x8BB0;&#x9519;&#x5C31;&#x7F16;
</code></pre>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>Gorilla &#x7684;&#x65B9;&#x6848;&#x5206;&#x4E3A;&#x4E09;&#x6B65;&#xFF1A;<strong>&#x6784;&#x5EFA; API &#x57FA;&#x51C6;&#x6570;&#x636E;&#x96C6; &#x2192; &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3; &#x2192; AST &#x7CBE;&#x786E;&#x8BC4;&#x4F30;</strong>&#x3002;</p>
<h3 id="Step 1: APIBench&#x2014;&#x2014;&#x9996;&#x4E2A;&#x5927;&#x89C4;&#x6A21; API &#x8C03;&#x7528;&#x57FA;&#x51C6;"><a href="#Step 1: APIBench&#x2014;&#x2014;&#x9996;&#x4E2A;&#x5927;&#x89C4;&#x6A21; API &#x8C03;&#x7528;&#x57FA;&#x51C6;"></a>Step 1: APIBench&#x2014;&#x2014;&#x9996;&#x4E2A;&#x5927;&#x89C4;&#x6A21; API &#x8C03;&#x7528;&#x57FA;&#x51C6;</h3>
<pre><code>&#x6570;&#x636E;&#x6765;&#x6E90;&#xFF08;&#x4E09;&#x5927;&#x6A21;&#x578B;&#x5E73;&#x53F0;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

HuggingFace:  925 &#x4E2A; API&#xFF08;&#x4ECE; 20 &#x4E07;+&#x6A21;&#x578B;&#x4E2D;&#x6309;&#x4EFB;&#x52A1;&#x7C7B;&#x578B;&#x53D6; Top-20&#xFF09;
TensorFlow Hub: 626 &#x4E2A; API&#xFF08;v2 &#x5168;&#x91CF;&#xFF0C;&#x8FC7;&#x6EE4;&#x6389;&#x6587;&#x6863;&#x4E0D;&#x5168;&#x7684;&#xFF09;
Torch Hub:      95 &#x4E2A; API&#xFF08;&#x5168;&#x91CF;&#x6536;&#x5F55;&#xFF09;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
&#x5408;&#x8BA1;: 1,645 &#x4E2A; API

&#x6BCF;&#x4E2A; API &#x88AB;&#x7ED3;&#x6784;&#x5316;&#x4E3A; JSON:
{
  &quot;domain&quot;: &quot;Object Detection&quot;,
  &quot;framework&quot;: &quot;PyTorch&quot;,
  &quot;functionality&quot;: &quot;Traffic Object Detection, Lane Detection&quot;,
  &quot;api_name&quot;: &quot;HybridNets&quot;,
  &quot;api_call&quot;: &quot;torch.hub.load(&apos;datvuthanh/hybridnets&apos;, &apos;hybridnets&apos;, pretrained=True)&quot;,
  &quot;api_arguments&quot;: {...},
  &quot;performance&quot;: {&quot;dataset&quot;: &quot;BDD100K&quot;, &quot;mAP@0.5&quot;: &quot;77.3%&quot;},
  &quot;description&quot;: &quot;...&quot;
}

&#x6307;&#x4EE4;&#x751F;&#x6210;&#xFF08;Self-Instruct&#xFF09;:
  &#x7528; GPT-4 &#x4E3A;&#x6BCF;&#x4E2A; API &#x751F;&#x6210; 10 &#x6761;&#x7528;&#x6237;&#x6307;&#x4EE4;
  &#x2192; &#x5171; 16,450 &#x6761; {&#x6307;&#x4EE4;, API} &#x8BAD;&#x7EC3;&#x5BF9;
  &#x53EA;&#x9700; 18 &#x6761;&#x4EBA;&#x5DE5;&#x793A;&#x4F8B;&#x4F5C;&#x4E3A;&#x79CD;&#x5B50;
</code></pre>
<h3 id="Step 2: &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x2014;&#x2014;Gorilla &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;"><a href="#Step 2: &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x2014;&#x2014;Gorilla &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;"></a>Step 2: &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x2014;&#x2014;Gorilla &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;</h3>
<pre><code>&#x666E;&#x901A;&#x5FAE;&#x8C03; vs &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x666E;&#x901A;&#x5FAE;&#x8C03;&#xFF08;&#x6CA1;&#x6709;&#x68C0;&#x7D22;&#x5668;&#xFF09;:
  &#x8BAD;&#x7EC3;&#x6570;&#x636E;: &quot;&#x7528;&#x6237;&#x6307;&#x4EE4; &#x2192; &#x6B63;&#x786E; API &#x8C03;&#x7528;&quot;
  &#x6A21;&#x578B;&#x5B66;&#x5230;: &#x628A;&#x6307;&#x4EE4;&#x6620;&#x5C04;&#x5230;&#x8BB0;&#x4F4F;&#x7684; API&#xFF08;&#x5168;&#x9760;&#x8BB0;&#x5FC6;&#xFF09;
  &#x95EE;&#x9898;: API &#x6587;&#x6863;&#x66F4;&#x65B0;&#x4E86;&#xFF0C;&#x6A21;&#x578B;&#x8FD8;&#x5728;&#x8C03;&#x65E7;&#x7248;&#x672C;

&#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#xFF08;Gorilla &#x7684;&#x505A;&#x6CD5;&#xFF09;:
  &#x8BAD;&#x7EC3;&#x6570;&#x636E;: &quot;&#x7528;&#x6237;&#x6307;&#x4EE4; + &#x53C2;&#x8003; API &#x6587;&#x6863; &#x2192; &#x6B63;&#x786E; API &#x8C03;&#x7528;&quot;
                       &#x2191;
                  &#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x628A;&#x68C0;&#x7D22;&#x5230;&#x7684;&#x6587;&#x6863;&#x62FC;&#x8FDB;&#x53BB;

  &#x5177;&#x4F53;&#x683C;&#x5F0F;:
  &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
  &#x2502; User: &#x5E2E;&#x6211;&#x505A;&#x56FE;&#x50CF;&#x5206;&#x7C7B;                          &#x2502;
  &#x2502; Use this API documentation for reference:     &#x2502;
  &#x2502; &lt;&#x68C0;&#x7D22;&#x5230;&#x7684; API &#x6587;&#x6863; JSON&gt;                      &#x2502;
  &#x2502;                                               &#x2502;
  &#x2502; Assistant: hub.load(&apos;google/imagenet/...&apos;, .) &#x2502;
  &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;

  &#x6A21;&#x578B;&#x5B66;&#x5230;:
    &#x2460; &#x7406;&#x89E3;&#x7528;&#x6237;&#x610F;&#x56FE;
    &#x2461; &#x89E3;&#x6790;&#x6587;&#x6863;&#x4E2D;&#x7684; API &#x63CF;&#x8FF0;
    &#x2462; &#x6839;&#x636E;&#x6587;&#x6863;&#x751F;&#x6210;&#x6B63;&#x786E;&#x8C03;&#x7528;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x9760;&#x8BB0;&#x5FC6;&#xFF09;

&#x63A8;&#x7406;&#x65F6;&#x4E24;&#x79CD;&#x6A21;&#x5F0F;:
  Zero-shot: &#x7528;&#x6237;&#x6307;&#x4EE4;&#x76F4;&#x63A5;&#x8F93;&#x5165;&#xFF0C;&#x6A21;&#x578B;&#x9760;&#x8BB0;&#x5FC6;&#x56DE;&#x7B54;
  With Retriever: &#x5148;&#x7528; BM25/GPT-Index &#x68C0;&#x7D22;&#x6700;&#x76F8;&#x5173;&#x7684; API &#x6587;&#x6863;
                  &#x62FC;&#x63A5;&#x5230;&#x7528;&#x6237;&#x6307;&#x4EE4;&#x540E;&#x9762;&#xFF0C;&#x518D;&#x8F93;&#x5165;&#x6A21;&#x578B;
</code></pre>
<p><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x6BD4;&quot;&#x5148;&#x5FAE;&#x8C03;&#x518D;&#x52A0;&#x68C0;&#x7D22;&#x5668;&quot;&#x597D;&#xFF1F;</strong></p>
<pre><code>&#x5BF9;&#x6BD4;&#x5B9E;&#x9A8C;&#xFF08;Table 2 &#x7684;&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x65B9;&#x6848; A: &#x5FAE;&#x8C03;&#x65F6;&#x4E0D;&#x5E26;&#x68C0;&#x7D22; + &#x63A8;&#x7406;&#x65F6;&#x52A0;&#x68C0;&#x7D22;
  Torch Hub:     54.83%&#xFF08;Oracle &#x68C0;&#x7D22;&#xFF09;
  HuggingFace:   45.58%&#xFF08;Oracle &#x68C0;&#x7D22;&#xFF09;
  &#x2192; &#x63A8;&#x7406;&#x65F6;&#x52A0;&#x68C0;&#x7D22;&#x6709;&#x65F6;&#x53CD;&#x800C;&#x5E72;&#x6270;&#x6A21;&#x578B;&#xFF08;BM25 &#x68C0;&#x7D22;&#x4F1A;&#x8BA9;&#x51C6;&#x786E;&#x7387;&#x66B4;&#x8DCC; 21%+&#xFF09;

&#x65B9;&#x6848; B: &#x5FAE;&#x8C03;&#x65F6;&#x5E26;&#x68C0;&#x7D22; + &#x63A8;&#x7406;&#x65F6;&#x5E26;&#x68C0;&#x7D22;&#xFF08;Gorilla &#x7684;&#x65B9;&#x6848;&#xFF09;
  Torch Hub:     67.20%&#xFF08;Oracle &#x68C0;&#x7D22;&#xFF09;&#x2190; +12.37%
  HuggingFace:   91.26%&#xFF08;Oracle &#x68C0;&#x7D22;&#xFF09;&#x2190; +45.68%
  &#x2192; &#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x5B66;&#x4F1A;&#x4E86;&quot;&#x600E;&#x4E48;&#x8BFB;&#x6587;&#x6863;&quot;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x6587;&#x6863;&#x624D;&#x80FD;&#x771F;&#x6B63;&#x5E2E;&#x4E0A;&#x5FD9;

&#x6838;&#x5FC3;&#x6D1E;&#x5BDF;:
  &#x5982;&#x679C;&#x8BAD;&#x7EC3;&#x65F6;&#x6CA1;&#x89C1;&#x8FC7;&quot;&#x6587;&#x6863;&#x62FC;&#x63A5;&#x5728;&#x6307;&#x4EE4;&#x540E;&#x9762;&quot;&#x7684;&#x683C;&#x5F0F;
  &#x63A8;&#x7406;&#x65F6;&#x7A81;&#x7136;&#x585E;&#x8FDB;&#x6765;&#x4E00;&#x6BB5;&#x6587;&#x6863;&#xFF0C;&#x6A21;&#x578B;&#x4E0D;&#x77E5;&#x9053;&#x600E;&#x4E48;&#x7528;
  &#x2192; &#x53CD;&#x800C;&#x88AB;&#x5E72;&#x6270;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x4E0B;&#x964D;
</code></pre>
<h3 id="Step 3: AST &#x5B50;&#x6811;&#x5339;&#x914D;&#x2014;&#x2014;&#x7CBE;&#x786E;&#x8BC4;&#x4F30; API &#x8C03;&#x7528;"><a href="#Step 3: AST &#x5B50;&#x6811;&#x5339;&#x914D;&#x2014;&#x2014;&#x7CBE;&#x786E;&#x8BC4;&#x4F30; API &#x8C03;&#x7528;"></a>Step 3: AST &#x5B50;&#x6811;&#x5339;&#x914D;&#x2014;&#x2014;&#x7CBE;&#x786E;&#x8BC4;&#x4F30; API &#x8C03;&#x7528;</h3>
<pre><code>&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x7528;&#x666E;&#x901A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#xFF1F;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x540C;&#x4E00;&#x4E2A; API &#x8C03;&#x7528;&#x53EF;&#x80FD;&#x6709;&#x591A;&#x79CD;&#x5408;&#x6CD5;&#x5199;&#x6CD5;:
  torch.hub.load(&apos;pytorch/vision&apos;, &apos;densenet121&apos;, pretrained=True)
  torch.hub.load(&apos;pytorch/vision&apos;, &apos;densenet121&apos;)  &#x2190; pretrained &#x662F;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;

&#x4F20;&#x7EDF;&#x8BC4;&#x4F30;: &#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x5B8C;&#x5168;&#x5339;&#x914D; &#x2192; &#x5224;&#x4E3A;&#x9519;&#x8BEF;
AST &#x8BC4;&#x4F30;: &#x89E3;&#x6790;&#x4E3A;&#x8BED;&#x6CD5;&#x6811; &#x2192; &#x68C0;&#x67E5;&#x5173;&#x952E;&#x8282;&#x70B9;&#x662F;&#x5426;&#x5339;&#x914D; &#x2192; &#x6B63;&#x786E;&#xFF01;

Gorilla &#x7684;&#x8BC4;&#x4F30;&#x65B9;&#x6CD5;:
  &#x2460; &#x628A;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7684;&#x4EE3;&#x7801;&#x89E3;&#x6790;&#x4E3A; AST&#xFF08;&#x62BD;&#x8C61;&#x8BED;&#x6CD5;&#x6811;&#xFF09;
  &#x2461; &#x627E;&#x5230; API &#x8C03;&#x7528;&#x8282;&#x70B9;&#xFF08;&#x5982; torch.hub.load&#xFF09;
  &#x2462; &#x68C0;&#x67E5;&#x5173;&#x952E;&#x53C2;&#x6570;&#x662F;&#x5426;&#x5339;&#x914D;&#x6570;&#x636E;&#x5E93;&#x4E2D;&#x7684; API
  &#x2463; &#x5FFD;&#x7565;&#x53EF;&#x9009;&#x53C2;&#x6570;&#xFF08;&#x5982; pretrained=True&#xFF09;

&#x5E7B;&#x89C9;&#x7684;&#x7CBE;&#x786E;&#x5B9A;&#x4E49;:
  &#x5982;&#x679C;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7684; API &#x8C03;&#x7528;&#x5728;&#x6574;&#x4E2A;&#x6570;&#x636E;&#x5E93;&#x4E2D;&#x627E;&#x4E0D;&#x5230;&#x4EFB;&#x4F55;&#x5B50;&#x6811;&#x5339;&#x914D;
  &#x2192; &#x5224;&#x5B9A;&#x4E3A;&#x5E7B;&#x89C9;&#xFF08;&#x8C03;&#x7528;&#x4E86;&#x5B8C;&#x5168;&#x4E0D;&#x5B58;&#x5728;&#x7684; API&#xFF09;
</code></pre>
<h2 id="&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x6574;&#x4F53;&#x51C6;&#x786E;&#x7387;"><a href="#&#x6574;&#x4F53;&#x51C6;&#x786E;&#x7387;"></a>&#x6574;&#x4F53;&#x51C6;&#x786E;&#x7387;</h3>
<pre><code>Zero-shot&#xFF08;&#x4E0D;&#x4F7F;&#x7528;&#x68C0;&#x7D22;&#x5668;&#xFF09;:
                    Torch Hub    HuggingFace    TensorFlow Hub
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
LLaMA 7B             0.00%         0.00%          0.00%
GPT-3.5              48.38%       16.81%         41.75%
GPT-4                38.70%       19.80%         18.20%
Claude               18.81%        6.19%          9.19%
Gorilla 7B           59.13%       71.68%         83.79%  &#x2190; &#x5168;&#x9762;&#x78BE;&#x538B;

Gorilla 7B &#x96F6;&#x6837;&#x672C;&#x51C6;&#x786E;&#x7387;&#x6BD4; GPT-4 &#x9AD8; 20.43%
&#x2192; 7B &#x53C2;&#x6570;&#x7684;&#x5FAE;&#x8C03;&#x6A21;&#x578B;&#x5728;&#x5782;&#x76F4;&#x9886;&#x57DF;&#x78BE;&#x538B;&#x901A;&#x7528;&#x5927;&#x6A21;&#x578B;
</code></pre>
<h3 id="&#x5E7B;&#x89C9;&#x7387;"><a href="#&#x5E7B;&#x89C9;&#x7387;"></a>&#x5E7B;&#x89C9;&#x7387;</h3>
<pre><code>Zero-shot &#x5E7B;&#x89C9;&#x7387;&#xFF08;&#x8D8A;&#x4F4E;&#x8D8A;&#x597D;&#xFF09;:
                    Torch Hub    HuggingFace    TensorFlow Hub
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
LLaMA 7B            100.00%       97.57%        100.00%  &#x2190; &#x5168;&#x662F;&#x5E7B;&#x89C9;
GPT-3.5              18.81%       35.73%         47.88%
GPT-4                36.55%       37.16%         78.65%  &#x2190; GPT-4 &#x5E7B;&#x89C9;&#x6BD4; 3.5 &#x66F4;&#x4E25;&#x91CD;&#xFF01;
Claude               65.59%       77.65%         88.46%
Gorilla 7B            6.98%       10.95%          5.40%  &#x2190; &#x63A5;&#x8FD1;&#x96F6;&#x5E7B;&#x89C9;

&#x610F;&#x5916;&#x53D1;&#x73B0;: GPT-4 &#x7684;&#x5E7B;&#x89C9;&#x7387;&#x6BD4; GPT-3.5 &#x66F4;&#x9AD8;
  &#x2192; &#x8BBA;&#x6587;&#x63A8;&#x6D4B; RLHF &#x5728;&quot;&#x5982;&#x5B9E;&#x6027;&quot;&#x4E0A;&#x5BF9; GPT-3.5 &#x7684;&#x8C03;&#x4F18;&#x66F4;&#x5F3A;
  &#x2192; GPT-4 &#x66F4;&quot;&#x81EA;&#x4FE1;&quot;&#x5730;&#x7F16;&#x9020;&#x4E0D;&#x5B58;&#x5728;&#x7684; API
</code></pre>
<h3 id="&#x9002;&#x5E94; API &#x6587;&#x6863;&#x53D8;&#x66F4;"><a href="#&#x9002;&#x5E94; API &#x6587;&#x6863;&#x53D8;&#x66F4;"></a>&#x9002;&#x5E94; API &#x6587;&#x6863;&#x53D8;&#x66F4;</h3>
<pre><code>&#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x7684;&#x72EC;&#x7279;&#x4F18;&#x52BF;&#x2014;&#x2014;&#x9002;&#x5E94; API &#x66F4;&#x65B0;:

&#x573A;&#x666F; 1: &#x6A21;&#x578B;&#x5347;&#x7EA7;
  &#x539F;&#x59CB;: FCN &#x4F7F;&#x7528; ResNet-50 &#x9AA8;&#x5E72;&#x7F51;&#x7EDC;
  &#x66F4;&#x65B0;: FCN &#x5347;&#x7EA7;&#x4E3A; ResNet-101 &#x9AA8;&#x5E72;&#x7F51;&#x7EDC;
  &#x2192; &#x53EA;&#x9700;&#x66F4;&#x65B0;&#x68C0;&#x7D22;&#x6570;&#x636E;&#x5E93;&#x4E2D;&#x7684;&#x6587;&#x6863;
  &#x2192; Gorilla &#x81EA;&#x52A8;&#x751F;&#x6210;&#x65B0;&#x7248;&#x672C;&#x7684; API &#x8C03;&#x7528;

&#x573A;&#x666F; 2: &#x4ED3;&#x5E93;&#x8FC1;&#x79FB;
  &#x539F;&#x59CB;: pytorch/vision
  &#x66F4;&#x65B0;: NVIDIA/DeepLearningExamples:torchhub
  &#x2192; &#x540C;&#x6837;&#x53EA;&#x9700;&#x66F4;&#x65B0;&#x6587;&#x6863;&#xFF0C;&#x4E0D;&#x7528;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;

&#x666E;&#x901A;&#x5FAE;&#x8C03;&#x7684;&#x6A21;&#x578B;&#x505A;&#x4E0D;&#x5230;&#x8FD9;&#x4E00;&#x70B9;:
  API &#x6539;&#x4E86; &#x2192; &#x6A21;&#x578B;&#x8FD8;&#x5728;&#x8C03;&#x65E7;&#x7248;&#x672C; &#x2192; &#x5FC5;&#x987B;&#x91CD;&#x65B0;&#x5FAE;&#x8C03;
</code></pre>
<h3 id="&#x7EA6;&#x675F;&#x611F;&#x77E5;&#x7684; API &#x9009;&#x62E9;"><a href="#&#x7EA6;&#x675F;&#x611F;&#x77E5;&#x7684; API &#x9009;&#x62E9;"></a>&#x7EA6;&#x675F;&#x611F;&#x77E5;&#x7684; API &#x9009;&#x62E9;</h3>
<pre><code>&#x5E26;&#x7EA6;&#x675F;&#x7684; API &#x8C03;&#x7528;&#xFF08;Torch Hub &#x5B50;&#x96C6;&#xFF09;:

&#x7528;&#x6237;: &quot;&#x5E2E;&#x6211;&#x627E;&#x4E00;&#x4E2A; ImageNet &#x51C6;&#x786E;&#x7387; &#x2265; 80% &#x7684;&#x56FE;&#x50CF;&#x5206;&#x7C7B;&#x6A21;&#x578B;&quot;
&#x2192; ResNeXt-101 (84.2%) &#x2713;  vs  MobileNetV2 (71.88%) &#x2717;

                  Zero-shot   BM25    GPT-Index   Oracle
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
GPT-3.5            73.94%    62.67%    81.69%    80.98%
GPT-4              62.67%    56.33%    71.11%    69.01%
Gorilla            71.83%    57.04%    71.83%    78.16%

&#x7EA6;&#x675F;&#x6EE1;&#x8DB3;&#x7387;:
GPT-3.5            43.66%                       69.01%
GPT-4              43.66%                       59.15%
Gorilla            47.88%                       67.60%

&#x2192; Gorilla &#x5728;&#x7EA6;&#x675F;&#x573A;&#x666F;&#x4E0B;&#x4E0E; GPT-3.5 &#x6301;&#x5E73;&#xFF0C;&#x4F18;&#x4E8E; GPT-4
&#x2192; &#x8BF4;&#x660E; Gorilla &#x4E0D;&#x4EC5;&#x4F1A;&#x8C03; API&#xFF0C;&#x8FD8;&#x80FD;&#x7406;&#x89E3;&#x53C2;&#x6570;&#x6743;&#x8861;
</code></pre>
<h2 id="&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>&#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h2>
<p>Gorilla &#x6709;&#x51E0;&#x4E2A;&#x660E;&#x786E;&#x7684;&#x5C40;&#x9650;&#xFF1A;</p>
<ul>
<li><strong>&#x4EC5;&#x8986;&#x76D6; ML API&#xFF1A;</strong> &#x6570;&#x636E;&#x96C6;&#x53EA;&#x5305;&#x542B; HuggingFace&#x3001;TorchHub&#x3001;TensorHub &#x7684;&#x6A21;&#x578B;&#x8C03;&#x7528;&#xFF0C;&#x4E0D;&#x8986;&#x76D6; RESTful API&#x3001;&#x6570;&#x636E;&#x5E93;&#x67E5;&#x8BE2;&#x7B49;&#x66F4;&#x5E7F;&#x6CDB;&#x7684;&#x5DE5;&#x5177;&#x7C7B;&#x578B;&#x3002;</li>
<li><strong>&#x5355;&#x6B65;&#x8C03;&#x7528;&#xFF1A;</strong> &#x548C; Toolformer &#x4E00;&#x6837;&#xFF0C;&#x6BCF;&#x6B21;&#x53EA;&#x751F;&#x6210;&#x4E00;&#x4E2A; API &#x8C03;&#x7528;&#xFF0C;&#x4E0D;&#x652F;&#x6301;&quot;&#x5148;&#x641C;&#x7D22;&#x518D;&#x8BA1;&#x7B97;&quot;&#x8FD9;&#x79CD;&#x94FE;&#x5F0F;&#x8C03;&#x7528;&#x3002;</li>
<li><strong>&#x68C0;&#x7D22;&#x5668;&#x8D28;&#x91CF;&#x662F;&#x74F6;&#x9888;&#xFF1A;</strong> Oracle &#x68C0;&#x7D22;&#x5668;&#x4E0B;&#x51C6;&#x786E;&#x7387; 67-91%&#xFF0C;&#x4F46;&#x6362;&#x6210; BM25 &#x5B9E;&#x9645;&#x68C0;&#x7D22;&#x5668;&#x540E;&#x66B4;&#x8DCC;&#x5230; 17-42%&#x3002;&#x68C0;&#x7D22;&#x4E0D;&#x51C6;&#xFF0C;&#x6574;&#x4E2A;&#x7CFB;&#x7EDF;&#x5C31;&#x5D29;&#x3002;</li>
<li><strong>&#x4E0D;&#x5904;&#x7406;&#x6267;&#x884C;&#x7ED3;&#x679C;&#xFF1A;</strong> Gorilla &#x53EA;&#x8D1F;&#x8D23;&quot;&#x751F;&#x6210;&#x6B63;&#x786E;&#x7684; API &#x8C03;&#x7528;&#x4EE3;&#x7801;&quot;&#xFF0C;&#x4E0D;&#x5173;&#x5FC3;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x7684;&#x6574;&#x5408;&#x548C;&#x540E;&#x7EED;&#x63A8;&#x7406;&#x3002;</li>
</ul>
<p>&#x540E;&#x7EED;&#x6F14;&#x5316;&#x65B9;&#x5411;&#xFF1A;</p>
<ul>
<li><strong>Function Calling</strong> (2023.06): OpenAI &#x5C06; API &#x8C03;&#x7528;&#x5185;&#x7F6E;&#x5230;&#x6A21;&#x578B; API &#x5C42;&#x9762;&#xFF0C;&#x7528; JSON Schema &#x63CF;&#x8FF0;&#x5DE5;&#x5177;&#xFF0C;&#x65E0;&#x9700;&#x4E3A;&#x6BCF;&#x4E2A;&#x5DE5;&#x5177;&#x5355;&#x72EC;&#x5FAE;&#x8C03;&#x3002;</li>
<li><strong>Gorilla OpenFunctions</strong> (2024): Gorilla &#x56E2;&#x961F;&#x540E;&#x7EED;&#x63A8;&#x51FA;&#x4E86;&#x652F;&#x6301;&#x901A;&#x7528; Function Calling &#x7684;&#x7248;&#x672C;&#xFF0C;&#x8986;&#x76D6;&#x4E86; RESTful API&#x3002;</li>
<li><strong>MCP</strong> (2024.11): &#x6807;&#x51C6;&#x5316;&#x4E86;&#x5DE5;&#x5177;&#x53D1;&#x73B0;&#x548C;&#x8C03;&#x7528;&#x534F;&#x8BAE;&#xFF0C;&#x4F7F;&#x5F97;&quot;&#x68C0;&#x7D22;&#x53EF;&#x7528;&#x5DE5;&#x5177;&quot;&#x8FD9;&#x4E2A;&#x73AF;&#x8282;&#x4E5F;&#x6807;&#x51C6;&#x5316;&#x4E86;&#x3002;</li>
</ul>
<h2 id="&#x51B7;&#x601D;&#x8003;&#xFF1A;Gorilla &#x5728;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6F14;&#x5316;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;"><a href="#&#x51B7;&#x601D;&#x8003;&#xFF1A;Gorilla &#x5728;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6F14;&#x5316;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;"></a>&#x51B7;&#x601D;&#x8003;&#xFF1A;Gorilla &#x5728;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x6F14;&#x5316;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;</h2>
<h3 id="1. Toolformer &#x2192; HuggingGPT &#x2192; Gorilla&#xFF1A;&#x4E09;&#x79CD;&#x8DEF;&#x7EBF;&#x7684;&#x78B0;&#x649E;"><a href="#1. Toolformer &#x2192; HuggingGPT &#x2192; Gorilla&#xFF1A;&#x4E09;&#x79CD;&#x8DEF;&#x7EBF;&#x7684;&#x78B0;&#x649E;"></a>1. Toolformer &#x2192; HuggingGPT &#x2192; Gorilla&#xFF1A;&#x4E09;&#x79CD;&#x8DEF;&#x7EBF;&#x7684;&#x78B0;&#x649E;</h3>
<p>&#x8FD9;&#x4E09;&#x7BC7;&#x8BBA;&#x6587;&#x51E0;&#x4E4E;&#x540C;&#x671F;&#x53D1;&#x8868;&#xFF08;2023 &#x5E74; 2-5 &#x6708;&#xFF09;&#xFF0C;&#x5404;&#x81EA;&#x4EE3;&#x8868;&#x4E86;&#x4E00;&#x6761;&#x4E0D;&#x540C;&#x7684;&#x6280;&#x672F;&#x8DEF;&#x7EBF;&#xFF1A;</p>
<pre><code>&#x8BA9; LLM &#x4F1A;&#x8C03; API &#x7684;&#x4E09;&#x6761;&#x8DEF;&#x7EBF;&#xFF08;2023&#xFF09;&#xFF1A;
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

Toolformer (2023.02) &#x2014; &#x81EA;&#x76D1;&#x7763;&#x5FAE;&#x8C03;&#x8DEF;&#x7EBF;:
  &#x601D;&#x8DEF;: &#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x53D1;&#x73B0;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x8C03;&#x5DE5;&#x5177;
  &#x65B9;&#x6CD5;: loss &#x8FC7;&#x6EE4;&#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x6570;&#x636E; &#x2192; &#x5FAE;&#x8C03;
  &#x5DE5;&#x5177;: 5 &#x4E2A;&#x5199;&#x6B7B;&#x7684;
  &#x52A0;&#x65B0;&#x5DE5;&#x5177;: &#x91CD;&#x65B0;&#x8DD1;&#x6574;&#x5957;&#x91C7;&#x6837;-&#x8FC7;&#x6EE4;-&#x5FAE;&#x8C03;&#x6D41;&#x7A0B;
  &#x6838;&#x5FC3;&#x521B;&#x65B0;: &#x81EA;&#x76D1;&#x7763;&#x6570;&#x636E;&#x6784;&#x9020;

HuggingGPT (2023.03) &#x2014; &#x7EAF; Prompt &#x8DEF;&#x7EBF;:
  &#x601D;&#x8DEF;: &#x8BA9; LLM &#x5F53;&quot;&#x9879;&#x76EE;&#x7ECF;&#x7406;&quot;&#x8BFB;&#x5DE5;&#x5177;&#x8BF4;&#x660E;&#x4E66;
  &#x65B9;&#x6CD5;: few-shot prompt&#xFF0C;&#x96F6;&#x8BAD;&#x7EC3;
  &#x5DE5;&#x5177;: HuggingFace &#x4E0A;&#x51E0;&#x5341;&#x4E07;&#x4E2A;&#xFF0C;&#x52A8;&#x6001;&#x9009;&#x62E9;
  &#x52A0;&#x65B0;&#x5DE5;&#x5177;: &#x5199;&#x4E2A;&#x6A21;&#x578B;&#x63CF;&#x8FF0;&#x5C31;&#x884C;
  &#x6838;&#x5FC3;&#x521B;&#x65B0;: LLM &#x4F5C;&#x4E3A;&#x63A7;&#x5236;&#x5668;&#x7684;&#x67B6;&#x6784;

Gorilla (2023.05) &#x2014; &#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x5FAE;&#x8C03;&#x8DEF;&#x7EBF;:
  &#x601D;&#x8DEF;: &#x5728;&#x6D77;&#x91CF; API &#x4E0A;&#x5FAE;&#x8C03;&#xFF0C;&#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x52A0;&#x5165;&#x68C0;&#x7D22;
  &#x65B9;&#x6CD5;: Self-Instruct + &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x5FAE;&#x8C03;
  &#x5DE5;&#x5177;: 1,645 &#x4E2A;&#xFF08;&#x542B;&#x7ED3;&#x6784;&#x5316;&#x5143;&#x6570;&#x636E;&#xFF09;
  &#x52A0;&#x65B0;&#x5DE5;&#x5177;: &#x66F4;&#x65B0;&#x68C0;&#x7D22;&#x6570;&#x636E;&#x5E93;&#xFF0C;&#x4E0D;&#x7528;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;
  &#x6838;&#x5FC3;&#x521B;&#x65B0;: &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3; + AST &#x8BC4;&#x4F30;

&#x4E09;&#x6761;&#x8DEF;&#x7EBF;&#x7684;&#x6743;&#x8861;:
  Toolformer:  &#x7CBE;&#x5EA6;&#x9AD8;&#x4F46;&#x6269;&#x5C55;&#x6027;&#x5DEE;&#xFF08;5 &#x4E2A;&#x5DE5;&#x5177;&#xFF09;
  HuggingGPT: &#x6269;&#x5C55;&#x6027;&#x597D;&#x4F46;&#x4E0D;&#x53EF;&#x9760;&#xFF08;GPT-3.5 &#x89C4;&#x5212;&#x51C6;&#x786E;&#x7387; ~50%&#xFF09;
  Gorilla:     &#x7CBE;&#x5EA6;&#x548C;&#x6269;&#x5C55;&#x6027;&#x517C;&#x987E;&#xFF0C;&#x4F46;&#x4F9D;&#x8D56;&#x68C0;&#x7D22;&#x5668;&#x8D28;&#x91CF;
</code></pre>
<h3 id="2. &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x7684;&#x6DF1;&#x5C42;&#x610F;&#x4E49;"><a href="#2. &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x7684;&#x6DF1;&#x5C42;&#x610F;&#x4E49;"></a>2. &#x68C0;&#x7D22;&#x611F;&#x77E5;&#x8BAD;&#x7EC3;&#x7684;&#x6DF1;&#x5C42;&#x610F;&#x4E49;</h3>
<p>Gorilla &#x6700;&#x91CD;&#x8981;&#x7684;&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#x4E0D;&#x662F;&quot;Gorilla &#x6BD4; GPT-4 &#x51C6;&quot;&#xFF0C;&#x800C;&#x662F;&#xFF1A;<strong>&#x5FAE;&#x8C03;&#x65F6;&#x4E0D;&#x5E26;&#x68C0;&#x7D22; + &#x63A8;&#x7406;&#x65F6;&#x52A0;&#x68C0;&#x7D22;&#xFF0C;&#x6548;&#x679C;&#x53CD;&#x800C;&#x53EF;&#x80FD;&#x53D8;&#x5DEE;&#x3002;</strong></p>
<pre><code>&#x8FD9;&#x4E2A;&#x53D1;&#x73B0;&#x6311;&#x6218;&#x4E86;&#x4E00;&#x4E2A;&#x5E38;&#x89C1;&#x5047;&#x8BBE;:
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x5E38;&#x89C1;&#x5047;&#x8BBE;: &quot;&#x6A21;&#x578B;&#x5148;&#x8BAD;&#x597D;&#xFF0C;&#x63A8;&#x7406;&#x65F6;&#x518D;&#x52A0; RAG&#xFF08;&#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x751F;&#x6210;&#xFF09;&#x5C31;&#x884C;&quot;

Gorilla &#x7684;&#x53CD;&#x4F8B;:
  &#x5FAE;&#x8C03;&#x65F6;&#x4E0D;&#x5E26;&#x68C0;&#x7D22; + &#x63A8;&#x7406;&#x65F6;&#x52A0; BM25 &#x68C0;&#x7D22;:
    Torch Hub:    37.63%&#xFF08;&#x6BD4;&#x96F6;&#x6837;&#x672C;&#x7684; 59.13% &#x66B4;&#x8DCC; 21.5%&#xFF09;
    HuggingFace:  11.28%&#xFF08;&#x6BD4;&#x96F6;&#x6837;&#x672C;&#x7684; 71.68% &#x66B4;&#x8DCC; 60.4%&#xFF09;

  &#x2192; &#x63A8;&#x7406;&#x65F6;&#x7A81;&#x7136;&#x51FA;&#x73B0;&#x7684;&#x68C0;&#x7D22;&#x6587;&#x6863;&#xFF0C;&#x6A21;&#x578B;&#x4E0D;&#x77E5;&#x9053;&#x600E;&#x4E48;&#x7528;
  &#x2192; &#x53CD;&#x800C;&#x88AB;&#x5F53;&#x6210;&#x566A;&#x58F0;&#xFF0C;&#x4E25;&#x91CD;&#x5E72;&#x6270;&#x8F93;&#x51FA;

&#x542F;&#x793A;:
  &#x5982;&#x679C;&#x4F60;&#x6253;&#x7B97;&#x7528; RAG&#xFF0C;&#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x5E94;&#x8BE5;&#x8BA9;&#x6A21;&#x578B;&#x89C1;&#x8FC7; RAG &#x7684;&#x683C;&#x5F0F;
  &#x2192; &quot;&#x600E;&#x4E48;&#x8BAD;&quot;&#x548C;&quot;&#x600E;&#x4E48;&#x7528;&quot;&#x5FC5;&#x987B;&#x4E00;&#x81F4;
  &#x2192; &#x8FD9;&#x5BF9;&#x5F53;&#x524D;&#x6240;&#x6709; RAG &#x7CFB;&#x7EDF;&#x90FD;&#x6709;&#x53C2;&#x8003;&#x4EF7;&#x503C;
</code></pre>
<h3 id="3. &#x81EA;&#x4E3E;&#x94FE;&#x6761;&#x7684;&#x5EF6;&#x7EED;"><a href="#3. &#x81EA;&#x4E3E;&#x94FE;&#x6761;&#x7684;&#x5EF6;&#x7EED;"></a>3. &#x81EA;&#x4E3E;&#x94FE;&#x6761;&#x7684;&#x5EF6;&#x7EED;</h3>
<p>Gorilla &#x7684;&#x6570;&#x636E;&#x6784;&#x9020;&#x540C;&#x6837;&#x7B26;&#x5408; <a href="./Meta%20-%20Toolformer%20-%20Language%20Models%20Can%20Teach%20Themselves%20to%20Use%20Tools.md">Toolformer</a> &#x5206;&#x6790;&#x4E2D;&#x8BA8;&#x8BBA;&#x7684;&quot;&#x81EA;&#x4E3E;&#x8303;&#x5F0F;&quot;&#xFF1A;</p>
<pre><code>Gorilla &#x7684;&#x81EA;&#x4E3E;&#x524D;&#x7F6E;&#x6761;&#x4EF6;:
&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;

&#x524D;&#x7F6E;&#x6761;&#x4EF6;: GPT-4 &#x7684; Self-Instruct &#x80FD;&#x529B;
  Gorilla &#x7684;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x7531; GPT-4 &#x751F;&#x6210;
  &#x6BCF;&#x4E2A; API &#x751F;&#x6210; 10 &#x6761;&#x7528;&#x6237;&#x6307;&#x4EE4;
  &#x2192; &#x9700;&#x8981; GPT-4 &#x80FD;&#x7406;&#x89E3; API &#x6587;&#x6863;&#x5E76;&#x751F;&#x6210;&#x5408;&#x7406;&#x7684;&#x7528;&#x6237;&#x573A;&#x666F;

&#x81EA;&#x4E3E;&#x903B;&#x8F91;:
  GPT-4 &#x751F;&#x6210;&#x6307;&#x4EE4; &#x2192; &#x4EBA;&#x5DE5;&#x7ED9; 18 &#x4E2A;&#x79CD;&#x5B50;&#x793A;&#x4F8B; &#x2192; &#x6279;&#x91CF;&#x751F;&#x6210; 16,450 &#x6761;
  &#x2192; &#x7528;&#x8FD9;&#x4E9B;&#x6570;&#x636E;&#x5FAE;&#x8C03; LLaMA-7B &#x2192; &#x5F97;&#x5230;&#x5728; API &#x8C03;&#x7528;&#x4E0A;&#x8D85;&#x8D8A; GPT-4 &#x7684;&#x6A21;&#x578B;

&#x77DB;&#x76FE;&#x4E4B;&#x5904;:
  &#x7528; GPT-4 &#x751F;&#x6210;&#x8BAD;&#x7EC3;&#x6570;&#x636E; &#x2192; &#x8BAD;&#x7EC3;&#x51FA;&#x7684;&#x6A21;&#x578B;&#x5728; API &#x8C03;&#x7528;&#x4E0A;&#x8D85;&#x8D8A; GPT-4
  &#x2192; &#x8FD9;&#x8BF4;&#x660E; GPT-4 &#x7684; API &#x8C03;&#x7528;&#x80FD;&#x529B;&#x4E0D;&#x662F;&quot;&#x4E0D;&#x591F;&quot;&#xFF0C;&#x800C;&#x662F;&quot;&#x4E0D;&#x591F;&#x805A;&#x7126;&quot;
  &#x2192; &#x5FAE;&#x8C03;&#x628A;&#x901A;&#x7528;&#x80FD;&#x529B;&quot;&#x84B8;&#x998F;&quot;&#x6210;&#x4E86;&#x5782;&#x76F4;&#x9886;&#x57DF;&#x7684;&#x4E13;&#x7CBE;&#x80FD;&#x529B;
</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>Gorilla &#x901A;&#x8FC7;<strong>&#x68C0;&#x7D22;&#x611F;&#x77E5;&#x5FAE;&#x8C03;</strong>&#x5728;&#x6D77;&#x91CF; API &#x8C03;&#x7528;&#x573A;&#x666F;&#x4E2D;&#x5B9E;&#x73B0;&#x4E86;&#x6BD4; GPT-4 &#x66F4;&#x9AD8;&#x7684;&#x51C6;&#x786E;&#x7387;&#x548C;&#x66F4;&#x4F4E;&#x7684;&#x5E7B;&#x89C9;&#x7387;&#x3002;&#x5B83;&#x6700;&#x6709;&#x4EF7;&#x503C;&#x7684;&#x8D21;&#x732E;&#x4E0D;&#x662F;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x4E24;&#x4E2A;&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#xFF1A;&#x4E00;&#x662F;&#x8BC1;&#x660E;&#x4E86;<strong>&#x8BAD;&#x7EC3;&#x65F6;&#x4E0D;&#x5E26;&#x68C0;&#x7D22; + &#x63A8;&#x7406;&#x65F6;&#x52A0;&#x68C0;&#x7D22;&#x53EF;&#x80FD;&#x9002;&#x5F97;&#x5176;&#x53CD;</strong>&#xFF0C;&#x6311;&#x6218;&#x4E86;&quot;&#x5148;&#x8BAD;&#x540E; RAG&quot;&#x7684;&#x6734;&#x7D20;&#x5047;&#x8BBE;&#xFF1B;&#x4E8C;&#x662F;&#x63ED;&#x793A;&#x4E86;<strong>GPT-4 &#x7684;&#x5E7B;&#x89C9;&#x7387;&#x7ADF;&#x7136;&#x6BD4; GPT-3.5 &#x66F4;&#x9AD8;</strong>&#xFF0C;&#x6697;&#x793A;&#x4E86;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x589E;&#x5F3A;&#x548C;&#x5E7B;&#x89C9;&#x6291;&#x5236;&#x4E4B;&#x95F4;&#x7684;&#x5F20;&#x529B;&#x3002;&#x4ECE; Toolformer&#xFF08;5 &#x4E2A;&#x5199;&#x6B7B;&#x5DE5;&#x5177;&#xFF09;&#x5230; HuggingGPT&#xFF08;prompt &#x8C03;&#x5EA6;&#x4E07;&#x7EA7;&#x5DE5;&#x5177;&#xFF09;&#x5230; Gorilla&#xFF08;&#x5FAE;&#x8C03; + &#x68C0;&#x7D22;&#x8C03;&#x5EA6;&#x5343;&#x7EA7; API&#xFF09;&#xFF0C;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x7684;&#x89C4;&#x6A21;&#x548C;&#x53EF;&#x9760;&#x6027;&#x90FD;&#x5728;&#x5FEB;&#x901F;&#x63D0;&#x5347;&#xFF0C;&#x6700;&#x7EC8;&#x6C47;&#x5165;&#x4E86; Function Calling / MCP &#x7684;&#x6807;&#x51C6;&#x5316;&#x8F68;&#x9053;&#x3002;</p>
`,E=[{level:2,title:"Gorilla 解决了什么问题？",children:[]},{level:2,title:"它是如何解决的？",children:[{level:3,title:"Step 1: APIBench——首个大规模 API 调用基准",children:[]},{level:3,title:"Step 2: 检索感知训练——Gorilla 的核心创新",children:[]},{level:3,title:"Step 3: AST 子树匹配——精确评估 API 调用",children:[]}]},{level:2,title:"实验结果",children:[{level:3,title:"整体准确率",children:[]},{level:3,title:"幻觉率",children:[]},{level:3,title:"适应 API 文档变更",children:[]},{level:3,title:"约束感知的 API 选择",children:[]}]},{level:2,title:"还有更好的解决方案吗？",children:[]},{level:2,title:"冷思考：Gorilla 在工具调用演化中的位置",children:[{level:3,title:"1. Toolformer → HuggingGPT → Gorilla：三种路线的碰撞",children:[]},{level:3,title:"2. 检索感知训练的深层意义",children:[]},{level:3,title:"3. 自举链条的延续",children:[]}]},{level:2,title:"总结",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
