const x={},F=`<p>AI &#x5E94;&#x7528;&#x7814;&#x53D1;&#x6BD4;&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x7814;&#x53D1;&#x66F4;&#x9700;&#x8981;&#x8D1D;&#x53F6;&#x65AF;&#x51B3;&#x7B56;&#x601D;&#x60F3;&#x3002;&#x539F;&#x56E0;&#x4E0D;&#x662F; AI &#x66F4;&#x590D;&#x6742;&#xFF0C;&#x800C;&#x662F; AI &#x4EA7;&#x54C1;&#x7684;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#x8FDC;&#x9AD8;&#x4E8E;&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x3002;</p>
<p>&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x5B9E;&#x73B0;&#x7684;&#x662F;&#x786E;&#x5B9A;&#x9700;&#x6C42;&#xFF1A;</p>
<blockquote>
<p>&#x7528;&#x6237;&#x70B9;&#x51FB;&#x6309;&#x94AE; &#x2192; &#x540E;&#x7AEF;&#x8BA1;&#x7B97; &#x2192; &#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x3002;</p>
</blockquote>
<p>AI &#x5E94;&#x7528;&#x5728;&#x4E0D;&#x65AD;&#x9A8C;&#x8BC1;&#x6982;&#x7387;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>&#x7528;&#x6237;&#x771F;&#x7684;&#x9700;&#x8981;&#x8FD9;&#x4E2A;&#x80FD;&#x529B;&#x5417;&#xFF1F;&#xFF08;&#x9700;&#x6C42;&#x4E0D;&#x786E;&#x5B9A;&#xFF09;</li>
<li>Prompt &#x662F;&#x5426;&#x6709;&#x6548;&#xFF1F;&#xFF08;&#x65B9;&#x6848;&#x4E0D;&#x786E;&#x5B9A;&#xFF09;</li>
<li>Model A &#x8FD8;&#x662F; Model B &#x66F4;&#x597D;&#xFF1F;&#xFF08;&#x6A21;&#x578B;&#x4E0D;&#x786E;&#x5B9A;&#xFF09;</li>
<li>Agent &#x662F;&#x5426;&#x5E94;&#x8BE5;&#x62C6;&#x6210;&#x591A;&#x4E2A;&#x5DE5;&#x5177;&#xFF1F;&#xFF08;&#x67B6;&#x6784;&#x4E0D;&#x786E;&#x5B9A;&#xFF09;</li>
<li>&#x7528;&#x6237;&#x4E3A;&#x4EC0;&#x4E48;&#x6EE1;&#x610F;&#x6216;&#x4E0D;&#x6EE1;&#x610F;&#xFF1F;&#xFF08;&#x53CD;&#x9988;&#x4E0D;&#x786E;&#x5B9A;&#xFF09;</li>
</ul>
<p>&#x7814;&#x53D1;&#x8FC7;&#x7A0B;&#x5C31;&#x662F;&#x4E0D;&#x65AD;&#x66F4;&#x65B0;&#x8FD9;&#x4E9B;&#x6982;&#x7387;&#x3002;</p>
<p>&#x8D1D;&#x53F6;&#x65AF;&#x601D;&#x60F3;&#x7684;&#x6838;&#x5FC3;&#x516C;&#x5F0F;&#x662F;&#xFF1A;</p>
<p><strong>&#x200C;&#x540E;&#x9A8C;&#x6982;&#x7387; &#x221D; &#x5148;&#x9A8C;&#x6982;&#x7387; &#xD7; &#x4F3C;&#x7136;&#x200C;</strong></p>
<p>&#x7FFB;&#x8BD1;&#x6210;&#x4EA7;&#x54C1;&#x8BED;&#x8A00;&#x5C31;&#x662F;&#xFF1A;</p>
<p><strong>&#x200C;&#x66F4;&#x65B0;&#x540E;&#x7684;&#x5224;&#x65AD; &#x221D; &#x4E4B;&#x524D;&#x7684;&#x5224;&#x65AD; &#xD7; &#x65B0;&#x89C2;&#x5BDF;&#x5230;&#x7684;&#x8BC1;&#x636E;</strong></p>
<p>&#x4EE5;&#x4E0B;&#x901A;&#x8FC7;&#x51E0;&#x4E2A;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;&#x8FD9;&#x4E2A;&#x73B0;&#x8C61;</p>
<h2 id="&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;AI Router"><a href="#&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;AI Router"></a>&#x4F8B;&#x5B50;&#x4E00;&#xFF1A;AI Router</h2>
<p>&#x7528;&#x6237;&#x8F93;&#x5165;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<blockquote>
<p>&#x5E2E;&#x6211;&#x603B;&#x7ED3;&#x8FD9;&#x4EFD; PDF&#x3002;</p>
</blockquote>
<p>&#x7CFB;&#x7EDF;&#x5E76;&#x4E0D;&#x77E5;&#x9053;&#x5E94;&#x8BE5;&#x8C03;&#x7528;&#x54EA;&#x4E2A;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x5F00;&#x59CB;&#x65F6;&#xFF0C;&#x5B83;&#x53EA;&#x662F;&#x731C;&#xFF1A;</p>
<pre><code class="language-python">belief = {
    <span class="hljs-string">&quot;gpt-4.1&quot;</span>: <span class="hljs-number">0.4</span>,
    <span class="hljs-string">&quot;claude&quot;</span>: <span class="hljs-number">0.4</span>,
    <span class="hljs-string">&quot;gemini&quot;</span>: <span class="hljs-number">0.2</span>
}
</code></pre>
<p>&#x8DD1;&#x4E86;&#x4E00;&#x5343;&#x6B21;&#x3002;</p>
<p>&#x53D1;&#x73B0;&#xFF1A;</p>
<ul>
<li>PDF &#x603B;&#x7ED3;&#xFF0C;Claude &#x6700;&#x7A33;&#x5B9A;&#x3002;</li>
<li>&#x6570;&#x5B66;&#x63A8;&#x7406;&#xFF0C;GPT &#x66F4;&#x597D;&#x3002;</li>
<li>&#x56FE;&#x7247;&#x7406;&#x89E3;&#xFF0C;Gemini &#x66F4;&#x597D;&#x3002;</li>
</ul>
<p>Router &#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-python">belief = {
    <span class="hljs-string">&quot;gpt-4.1&quot;</span>: <span class="hljs-number">0.2</span>,
    <span class="hljs-string">&quot;claude&quot;</span>: <span class="hljs-number">0.7</span>,
    <span class="hljs-string">&quot;gemini&quot;</span>: <span class="hljs-number">0.1</span>
}
</code></pre>
<p>&#x5B83;&#x4E0D;&#x662F;&#x5728;&#x5BFB;&#x627E;&#x552F;&#x4E00;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x3002;</p>
<p>&#x800C;&#x662F;&#x5728;&#x4E0D;&#x65AD;&#x8C03;&#x6574;&#xFF1A;</p>
<blockquote>
<p><strong>&#x4EC0;&#x4E48;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x66F4;&#x5E94;&#x8BE5;&#x76F8;&#x4FE1;&#x54EA;&#x4E2A;&#x6A21;&#x578B;&#x3002;</strong></p>
</blockquote>
<hr>
<h2 id="&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;RAG"><a href="#&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;RAG"></a>&#x4F8B;&#x5B50;&#x4E8C;&#xFF1A;RAG</h2>
<p>&#x7528;&#x6237;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>MCP &#x662F;&#x4EC0;&#x4E48;&#xFF1F;</p>
</blockquote>
<p>&#x7B2C;&#x4E00;&#x6B21;&#x68C0;&#x7D22;&#xFF1A;</p>
<pre><code class="language-text">Doc A  &#x76F8;&#x4F3C;&#x5EA6; 0.82
Doc B  &#x76F8;&#x4F3C;&#x5EA6; 0.79
Doc C  &#x76F8;&#x4F3C;&#x5EA6; 0.74
</code></pre>
<p>&#x7CFB;&#x7EDF;&#x89C9;&#x5F97;&#xFF1A;</p>
<blockquote>
<p>Doc A &#x6700;&#x53EF;&#x80FD;&#x6709;&#x5E2E;&#x52A9;&#x3002;</p>
</blockquote>
<p>&#x56DE;&#x7B54;&#x4EE5;&#x540E;&#x7528;&#x6237;&#x7ACB;&#x523B;&#x8FFD;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x4E0D;&#x662F;&#xFF0C;&#x6211;&#x8BF4;&#x7684;&#x662F; Anthropic &#x7684; MCP&#x3002;</p>
</blockquote>
<p>&#x7CFB;&#x7EDF;&#x7A81;&#x7136;&#x53D1;&#x73B0;&#x539F;&#x6765;&#x81EA;&#x5DF1;&#x7684;&#x5224;&#x65AD;&#x9519;&#x4E86;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x4E0B;&#x4E00;&#x6B21;&#x9047;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">MCP
</code></pre>
<p>&#x5B83;&#x5F00;&#x59CB;&#x63D0;&#x9AD8; Anthropic &#x6587;&#x6863;&#x7684;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x964D;&#x4F4E;&#x5176;&#x4ED6; MCP &#x6587;&#x6863;&#x3002;</p>
<p>&#x8FD9;&#x91CC;&#x66F4;&#x65B0;&#x7684;&#x4E0D;&#x662F;&#x7B54;&#x6848;&#x3002;&#x800C;&#x662F;&#xFF1A;</p>
<blockquote>
<p><strong>&#x54EA;&#x7C7B;&#x6587;&#x6863;&#x66F4;&#x503C;&#x5F97;&#x76F8;&#x4FE1;&#x3002;</strong></p>
</blockquote>
<hr>
<h2 id="&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;Agent Tool Selection"><a href="#&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;Agent Tool Selection"></a>&#x4F8B;&#x5B50;&#x4E09;&#xFF1A;Agent Tool Selection</h2>
<p>Agent &#x6709;&#x4E09;&#x4E2A;&#x5DE5;&#x5177;&#xFF1A;</p>
<pre><code class="language-text">Search
Python
Browser
</code></pre>
<p>&#x6536;&#x5230;&#x8BF7;&#x6C42;&#xFF1A;</p>
<blockquote>
<p>&#x5E2E;&#x6211;&#x7EDF;&#x8BA1; Excel&#x3002;</p>
</blockquote>
<p>&#x5F00;&#x59CB;&#xFF1A;</p>
<pre><code class="language-python">Search  <span class="hljs-number">40</span>%
Python <span class="hljs-number">35</span>%
Browser <span class="hljs-number">25</span>%
</code></pre>
<p>&#x6267;&#x884C;&#x51E0;&#x5341;&#x8F6E;&#x3002;</p>
<p>&#x53D1;&#x73B0;Excel &#x8BF7;&#x6C42;&#x51E0;&#x4E4E;&#x90FD;&#x8C03;&#x7528; Python&#x3002;</p>
<p>&#x6162;&#x6162;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-python">Search  <span class="hljs-number">5</span>%
Python <span class="hljs-number">90</span>%
Browser <span class="hljs-number">5</span>%
</code></pre>
<p>&#x6574;&#x4E2A; Agent &#x7684;&#x884C;&#x4E3A;&#x6539;&#x53D8;&#x4E86;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x6539; Prompt&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x6539;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x53EA;&#x662F;&#xFF1A;</p>
<blockquote>
<p><strong>&#x76F8;&#x4FE1; Python Tool &#x7684;&#x6982;&#x7387;&#x8D8A;&#x6765;&#x8D8A;&#x9AD8;&#x3002;</strong></p>
</blockquote>
<hr>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48; AI &#x7279;&#x522B;&#x9700;&#x8981;&#x8FD9;&#x79CD;&#x601D;&#x7EF4;"><a href="#&#x4E3A;&#x4EC0;&#x4E48; AI &#x7279;&#x522B;&#x9700;&#x8981;&#x8FD9;&#x79CD;&#x601D;&#x7EF4;"></a>&#x4E3A;&#x4EC0;&#x4E48; AI &#x7279;&#x522B;&#x9700;&#x8981;&#x8FD9;&#x79CD;&#x601D;&#x7EF4;</h2>
<p>AI &#x7CFB;&#x7EDF;&#x672C;&#x8EAB;&#x5C31;&#x662F;&#x6982;&#x7387;&#x7CFB;&#x7EDF;&#xFF1A;</p>
<ul>
<li>LLM&#xFF1A;P(next token | context)</li>
<li>RAG&#xFF1A;P(&#x8FD9;&#x7BC7;&#x6587;&#x6863;&#x6709;&#x5E2E;&#x52A9;)</li>
<li>Embedding&#xFF1A;P(&#x8BED;&#x4E49;&#x76F8;&#x4F3C;)</li>
<li>ReRank&#xFF1A;P(&#x5E94;&#x8BE5;&#x6392;&#x7B2C;&#x4E00;)</li>
<li>Agent&#xFF1A;P(&#x5E94;&#x8BE5;&#x8C03;&#x7528;&#x54EA;&#x4E2A; Tool)</li>
<li>Evaluation&#xFF1A;P(&#x7528;&#x6237;&#x6EE1;&#x610F;)</li>
</ul>
<p>&#x6574;&#x4E2A; AI Pipeline &#x5230;&#x5904;&#x90FD;&#x662F;&#x6982;&#x7387;&#x3002;
AI &#x4EA7;&#x54C1;&#x7814;&#x53D1;&#x81EA;&#x7136;&#x5E94;&#x8BE5;&#x91C7;&#x7528;&#x4E0D;&#x65AD;&#x6839;&#x636E;&#x8BC1;&#x636E;&#x66F4;&#x65B0;&#x5224;&#x65AD;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x6027;&#x505A;&#x51FA;&#x4E0D;&#x53EF;&#x66F4;&#x6539;&#x7684;&#x51B3;&#x7B56;&#x3002;</p>
<hr>
<p>&#x4F18;&#x79C0; AI &#x56E2;&#x961F;&#x771F;&#x6B63;&#x66F4;&#x65B0;&#x7684;&#x4E0D;&#x662F;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&quot;&#x4FE1;&#x5FF5;&quot;</p>
<pre><code class="language-text">&#x63D0;&#x51FA;&#x5047;&#x8BBE;&#xFF08;Prior&#xFF09;
        &#x2193;
&#x505A;&#x6700;&#x5C0F;&#x53EF;&#x9A8C;&#x8BC1;&#x7248;&#x672C;&#xFF08;MVP&#xFF09;
        &#x2193;
&#x6536;&#x96C6;&#x771F;&#x5B9E;&#x7528;&#x6237;&#x884C;&#x4E3A;&#xFF08;Evidence&#xFF09;
        &#x2193;
&#x66F4;&#x65B0;&#x4EA7;&#x54C1;&#x5224;&#x65AD;&#xFF08;Posterior&#xFF09;
        &#x2193;
&#x91CD;&#x65B0;&#x5206;&#x914D;&#x7814;&#x53D1;&#x8D44;&#x6E90;
        &#x2193;
&#x63D0;&#x51FA;&#x65B0;&#x7684;&#x5047;&#x8BBE;
</code></pre>
<p>&#x4EE3;&#x7801;&#x53EA;&#x662F;&#x5B9E;&#x9A8C;&#x8F7D;&#x4F53;&#xFF0C;&#x771F;&#x6B63;&#x6301;&#x7EED;&#x8FED;&#x4EE3;&#x7684;&#x662F;&#x56E2;&#x961F;&#x5BF9;&quot;&#x4EC0;&#x4E48;&#x6700;&#x6709;&#x4EF7;&#x503C;&quot;&#x7684;&#x4FE1;&#x5FF5;&#x3002;AI &#x4EA7;&#x54C1;&#x7531;&#x4E8E;&#x9700;&#x6C42;&#x3001;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x548C;&#x7528;&#x6237;&#x884C;&#x4E3A;&#x90FD;&#x5177;&#x6709;&#x9AD8;&#x5EA6;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#xFF0C;&#x56E0;&#x6B64;&#x6BD4;&#x4F20;&#x7EDF;&#x8F6F;&#x4EF6;&#x66F4;&#x4F9D;&#x8D56;&#x8FD9;&#x79CD;&#x57FA;&#x4E8E;&#x8BC1;&#x636E;&#x6301;&#x7EED;&#x66F4;&#x65B0;&#x51B3;&#x7B56;&#x7684;&#x7814;&#x53D1;&#x65B9;&#x5F0F;&#x3002;</p>
<p><em>&#x89C2;&#x5BDF;&#x73B0;&#x8C61;&#xFF0C;&#x8BB0;&#x5F55;&#x672C;&#x8D28;  - LZ</em></p>
`,n=[{level:2,title:"例子一：AI Router",children:[]},{level:2,title:"例子二：RAG",children:[]},{level:2,title:"例子三：Agent Tool Selection",children:[]},{level:2,title:"为什么 AI 特别需要这种思维",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
