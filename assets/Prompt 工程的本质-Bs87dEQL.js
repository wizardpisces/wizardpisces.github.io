const x={},F=`<h2 id="Prompt &#x5DE5;&#x7A0B;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x6982;&#x5FF5;&#x7A7A;&#x95F4;&#x5BF9;&#x9F50;"><a href="#Prompt &#x5DE5;&#x7A0B;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x6982;&#x5FF5;&#x7A7A;&#x95F4;&#x5BF9;&#x9F50;"></a>Prompt &#x5DE5;&#x7A0B;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x6982;&#x5FF5;&#x7A7A;&#x95F4;&#x5BF9;&#x9F50;</h2>
<h3 id="&#x6838;&#x5FC3;&#x8BBA;&#x65AD;"><a href="#&#x6838;&#x5FC3;&#x8BBA;&#x65AD;"></a>&#x6838;&#x5FC3;&#x8BBA;&#x65AD;</h3>
<p>Prompt &#x8C03;&#x6574;&#x4E0D;&#x662F;&quot;&#x6559;&#x4F1A; LLM&quot;&#xFF0C;&#x800C;&#x662F;<strong>&#x6FC0;&#x6D3B; LLM &#x8BAD;&#x7EC3;&#x65F6;&#x5DF2;&#x56FA;&#x5316;&#x7684;&#x6700;&#x4F18;&#x63A8;&#x7406;&#x8DEF;&#x5F84;</strong>&#x3002;&#x672C;&#x8D28;&#x662F;&#x7528;&#x6700;&#x5C0F;&#x4FE1;&#x606F;&#x91CF;&#x5B9E;&#x73B0;&#x6982;&#x5FF5;&#x7A7A;&#x95F4;&#x7684;&#x7CBE;&#x786E;&#x5BF9;&#x9F50;&#x3002;</p>
<h3 id="&#x4E09;&#x5C42;&#x5BF9;&#x9F50;&#x673A;&#x5236;"><a href="#&#x4E09;&#x5C42;&#x5BF9;&#x9F50;&#x673A;&#x5236;"></a>&#x4E09;&#x5C42;&#x5BF9;&#x9F50;&#x673A;&#x5236;</h3>
<p><strong>&#x8868;&#x5C42;&#x5BF9;&#x9F50;</strong>&#xFF08;&#x8BED;&#x6CD5;&#x89E6;&#x53D1;&#xFF09;</p>
<ul>
<li>&#x7279;&#x5B9A;&#x672F;&#x8BED;&#x548C;&#x683C;&#x5F0F;&#x6A21;&#x5F0F;&#xFF1A;<code>&quot;let&apos;s think step by step&quot;</code>&#x3001;<code>&quot;act as an expert&quot;</code></li>
<li>&#x6548;&#x679C;&#xFF1A;&#x6FC0;&#x6D3B;&#x7279;&#x5B9A;&#x63A8;&#x7406;&#x98CE;&#x683C;&#x7684;&#x6982;&#x7387;&#x5206;&#x5E03;</li>
</ul>
<p><strong>&#x4E2D;&#x5C42;&#x5BF9;&#x9F50;</strong>&#xFF08;&#x8303;&#x5F0F;&#x6FC0;&#x6D3B;&#xFF09;</p>
<ul>
<li>Few-shot examples&#x3001;Chain-of-Thought&#x3001;Self-consistency</li>
<li>&#x6548;&#x679C;&#xFF1A;&#x89E6;&#x53D1;&#x9884;&#x8BAD;&#x7EC3;&#x9636;&#x6BB5;&#x5B66;&#x4F1A;&#x7684;&#x63A8;&#x7406;&#x6846;&#x67B6;</li>
</ul>
<p><strong>&#x6DF1;&#x5C42;&#x5BF9;&#x9F50;</strong>&#xFF08;&#x8868;&#x5F81;&#x5171;&#x632F;&#xFF09;</p>
<ul>
<li>&#x95EE;&#x9898;&#x5206;&#x89E3;&#x65B9;&#x5F0F;&#x3001;&#x6982;&#x5FF5;&#x5173;&#x8054;&#x7F51;&#x7EDC;&#x3001;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x6A21;&#x5F0F;</li>
<li>&#x6548;&#x679C;&#xFF1A;&#x76F4;&#x63A5;&#x6FC0;&#x6D3B;&#x9AD8;&#x7EF4;&#x8BED;&#x4E49;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x6700;&#x4F18;&#x8F68;&#x8FF9;</li>
</ul>
<h3 id="&#x5173;&#x952E;&#x6D1E;&#x5BDF;"><a href="#&#x5173;&#x952E;&#x6D1E;&#x5BDF;"></a>&#x5173;&#x952E;&#x6D1E;&#x5BDF;</h3>
<blockquote>
<p><strong>&#x71B5;&#x51CF;&#x539F;&#x5219;</strong>&#xFF1A;&#x597D;&#x7684; prompt &#x662F;&#x5728;&#x51CF;&#x5C11; LLM &#x8F93;&#x51FA;&#x7A7A;&#x95F4;&#x7684;&#x71B5;&#xFF0C;&#x5C06;&#x5176;&#x5F15;&#x5BFC;&#x5230;&#x9AD8;&#x8D28;&#x91CF;&#x89E3;&#x7684;&#x5B50;&#x7A7A;&#x95F4;&#x3002;</p>
</blockquote>
<blockquote>
<p><strong>&#x8FC1;&#x79FB;&#x800C;&#x975E;&#x6559;&#x5B66;</strong>&#xFF1A;&#x4E0D;&#x662F;&#x4E34;&#x65F6;&#x4F20;&#x6388;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x662F;&#x5524;&#x9192;&#x5DF2;&#x6709;&#x7684;&#x6697;&#x77E5;&#x8BC6;&#xFF08;implicit knowledge&#xFF09;&#x3002;</p>
</blockquote>
<blockquote>
<p><strong>&#x5BF9;&#x9F50;&#x7A0E;</strong>&#xFF08;Alignment Tax&#xFF09;&#xFF1A;&#x6BCF;&#x589E;&#x52A0;&#x4E00;&#x4E2A; token&#xFF0C;&#x8981;&#x4E48;&#x964D;&#x4F4E;&#x5BF9;&#x9F50;&#x6210;&#x672C;&#xFF08;clarify&#xFF09;&#xFF0C;&#x8981;&#x4E48;&#x589E;&#x52A0;&#x566A;&#x97F3;&#xFF08;confuse&#xFF09;&#x3002;&#x4F18;&#x79C0;&#x7684; prompt &#x5B9E;&#x73B0;&#x4E86;&#x6700;&#x4F4E;&#x7684;&#x5BF9;&#x9F50;&#x7A0E;&#x3002;</p>
</blockquote>
<h3 id="&#x5B9E;&#x8DF5;&#x516C;&#x5F0F;"><a href="#&#x5B9E;&#x8DF5;&#x516C;&#x5F0F;"></a>&#x5B9E;&#x8DF5;&#x516C;&#x5F0F;</h3>
<pre><code>Prompt &#x6548;&#x7387; = &#x6FC0;&#x6D3B;&#x7684;&#x80FD;&#x529B;&#x5C42;&#x7EA7; / &#x6D88;&#x8017;&#x7684; token &#x6570;&#x91CF;

&#x6700;&#x4F18; Prompt = argmin(token) s.t. &#x6FC0;&#x6D3B;&#x76EE;&#x6807;&#x63A8;&#x7406;&#x6A21;&#x5F0F;
</code></pre>
<h3 id="&#x7C7B;&#x6BD4;"><a href="#&#x7C7B;&#x6BD4;"></a>&#x7C7B;&#x6BD4;</h3>
<ul>
<li><strong>&#x8C03;&#x9891;&#x6536;&#x97F3;&#x673A;</strong>&#xFF1A;&#x4E0D;&#x6539;&#x53D8;&#x7535;&#x53F0;&#xFF08;&#x6A21;&#x578B;&#x6743;&#x91CD;&#xFF09;&#xFF0C;&#x53EA;&#x8C03;&#x6574;&#x63A5;&#x6536;&#x9891;&#x7387;&#xFF08;prompt&#xFF09;</li>
<li><strong>&#x5316;&#x5B66;&#x50AC;&#x5316;&#x5242;</strong>&#xFF1A;&#x4E0D;&#x53C2;&#x4E0E;&#x53CD;&#x5E94;&#x672C;&#x8EAB;&#xFF0C;&#x4F46;&#x964D;&#x4F4E;&#x6FC0;&#x6D3B;&#x80FD;&#xFF0C;&#x52A0;&#x901F;&#x5230;&#x8FBE;&#x76EE;&#x6807;&#x72B6;&#x6001;</li>
<li><strong>&#x91CF;&#x5B50;&#x7EA0;&#x7F20;</strong>&#xFF1A;&#x7CBE;&#x786E;&#x7684; prompt &#x8BA9; LLM &#x7684;&#x8F93;&#x51FA;&#x574D;&#x7F29;&#x5230;&#x671F;&#x671B;&#x7684;&#x7279;&#x5F81;&#x7A7A;&#x95F4;</li>
</ul>
<h3 id="&#x53EF;&#x64CD;&#x4F5C;&#x542F;&#x793A;"><a href="#&#x53EF;&#x64CD;&#x4F5C;&#x542F;&#x793A;"></a>&#x53EF;&#x64CD;&#x4F5C;&#x542F;&#x793A;</h3>
<ol>
<li><strong>&#x5B66;&#x4E60; LLM &#x7684;&quot;&#x6BCD;&#x8BED;&quot;</strong>&#xFF1A;&#x7814;&#x7A76;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x96C6;&#x7684;&#x8868;&#x8FBE;&#x6A21;&#x5F0F;&#xFF08;&#x5982; Chain-of-Thought &#x8BBA;&#x6587;&#x4E2D;&#x7684;&#x793A;&#x4F8B;&#xFF09;</li>
<li><strong>&#x7528;&#x4F8B;&#x5B50;&#x66FF;&#x4EE3;&#x89E3;&#x91CA;</strong>&#xFF1A;&#x4E00;&#x4E2A;&#x597D;&#x7684; few-shot &#x80DC;&#x8FC7;&#x767E;&#x5B57;&#x8BF4;&#x660E;</li>
<li><strong>&#x683C;&#x5F0F;&#x5373;&#x4FE1;&#x53F7;</strong>&#xFF1A;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8F93;&#x5165;&#xFF08;markdown&#x3001;JSON&#xFF09;&#x672C;&#x8EAB;&#x5C31;&#x662F;&#x5F3A;&#x5BF9;&#x9F50;&#x4FE1;&#x53F7;</li>
<li><strong>&#x8FED;&#x4EE3;&#x5BFB;&#x4F18;</strong>&#xFF1A;prompt &#x8C03;&#x8BD5;&#x662F;&#x641C;&#x7D22;&#x95EE;&#x9898;&#xFF0C;&#x9700;&#x8981;&#x7CFB;&#x7EDF;&#x5316;&#x6D4B;&#x8BD5;&#x4E0D;&#x540C;&#x7684;&quot;&#x9891;&#x9053;&quot;</li>
</ol>
<h3 id="&#x5143;&#x8BA4;&#x77E5;"><a href="#&#x5143;&#x8BA4;&#x77E5;"></a>&#x5143;&#x8BA4;&#x77E5;</h3>
<p>&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x672C;&#x8EAB;&#x4F53;&#x73B0;&#x4E86;<strong>&#x4EBA;&#x673A;&#x534F;&#x540C;&#x7684;&#x53CC;&#x5411;&#x5BF9;&#x9F50;</strong>&#xFF1A;</p>
<ul>
<li>&#x4EBA;&#x7C7B;&#x5B66;&#x4E60; LLM &#x7684;&#x8868;&#x5F81;&#x7A7A;&#x95F4; &#x2190;&#x2192; LLM &#x7406;&#x89E3;&#x4EBA;&#x7C7B;&#x7684;&#x610F;&#x56FE;&#x7A7A;&#x95F4;</li>
<li>&#x6700;&#x7EC8;&#x6536;&#x655B;&#x70B9;&#xFF1A;&#x7528;&#x6700;&#x7B80;&#x6D01;&#x7684;&quot;&#x534F;&#x8BAE;&quot;&#x5B9E;&#x73B0;&#x6700;&#x9AD8;&#x6548;&#x7684;&quot;&#x63E1;&#x624B;&quot;</li>
</ul>
<hr>
<p><em>&#x542F;&#x53D1;&#x6765;&#x6E90;&#xFF1A;&#x4FE1;&#x606F;&#x8BBA;&#xFF08;&#x6700;&#x5C0F;&#x63CF;&#x8FF0;&#x957F;&#x5EA6;&#xFF09;+ &#x8BA4;&#x77E5;&#x79D1;&#x5B66;&#xFF08;&#x6982;&#x5FF5;&#x6FC0;&#x6D3B;&#xFF09;+ &#x8FC1;&#x79FB;&#x5B66;&#x4E60;&#xFF08;&#x7279;&#x5F81;&#x590D;&#x7528;&#xFF09;</em></p>
`,B=[{level:2,title:"Prompt 工程的本质：概念空间对齐",children:[{level:3,title:"核心论断",children:[]},{level:3,title:"三层对齐机制",children:[]},{level:3,title:"关键洞察",children:[]},{level:3,title:"实践公式",children:[]},{level:3,title:"类比",children:[]},{level:3,title:"可操作启示",children:[]},{level:3,title:"元认知",children:[]}]}];export{x as attributes,F as html,B as nestedHeaders};
