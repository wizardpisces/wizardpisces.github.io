const x={},F=`<h1 id="Claude Sonnet 5 &#x7684; Token &#x6D88;&#x8017;&#x66F4;&#x591A;&#x4E86;&#xFF1F;&#x4E00;&#x6587;&#x770B;&#x61C2; Token &#x7684;&#x6F14;&#x5316;"><a href="#Claude Sonnet 5 &#x7684; Token &#x6D88;&#x8017;&#x66F4;&#x591A;&#x4E86;&#xFF1F;&#x4E00;&#x6587;&#x770B;&#x61C2; Token &#x7684;&#x6F14;&#x5316;"></a>Claude Sonnet 5 &#x7684; Token &#x6D88;&#x8017;&#x66F4;&#x591A;&#x4E86;&#xFF1F;&#x4E00;&#x6587;&#x770B;&#x61C2; Token &#x7684;&#x6F14;&#x5316;</h1>
<p>Anthropic &#x53D1;&#x5E03; Claude Sonnet 5 &#x540E;&#xFF0C;&#x5728;&#x66F4;&#x65B0;&#x8BF4;&#x660E;&#x91CC;&#x4E13;&#x95E8;&#x63D0;&#x5230;&#x4E00;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<blockquote>
<p>Claude Sonnet 5 uses a new tokenizer. The same input text produces approximately 30% more tokens than on Claude Sonnet 4.6. The exact increase depends on the content.</p>
</blockquote>
<p>Sonnet 5 &#x4F7F;&#x7528;&#x4E86;&#x65B0;&#x7684; Tokenizer&#xFF0C;&#x540C;&#x6837;&#x7684;&#x6587;&#x672C;&#xFF0C;&#x5927;&#x7EA6;&#x4F1A;&#x6BD4;&#x4E4B;&#x524D;&#x7684; Claude &#x6A21;&#x578B;&#x591A;&#x4EA7;&#x751F; 30% &#x7684; Token&#x3002;
&#x90A3;&#x4E48;&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF1A;</p>
<blockquote>
<p>&#x540C;&#x6837;&#x4E00;&#x53E5;&#x8BDD;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; Token &#x4F1A;&#x53D8;&#x591A;&#xFF1F;</p>
<p>Token &#x4E0D;&#x5E94;&#x8BE5;&#x662F;&#x56FA;&#x5B9A;&#x7684;&#x5417;&#xFF1F;</p>
<p>&#x662F;&#x4E0D;&#x662F; Anthropic &#x5728;&#x53D8;&#x76F8;&#x6DA8;&#x4EF7;&#xFF1F;</p>
</blockquote>
<p>&#x8981;&#x7406;&#x89E3;&#x4E0A;&#x9762;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x9996;&#x5148;&#x5F97;&#x641E;&#x6E05;&#x695A; Token &#x662F;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>Token &#x4ECE;&#x6765;&#x4E0D;&#x662F;&#x81EA;&#x7136;&#x5B58;&#x5728;&#x7684;&#x8BA1;&#x91CF;&#x5355;&#x4F4D;&#xFF0C;&#x5B83;&#x53EA;&#x662F;&#x6A21;&#x578B;&#x9009;&#x62E9;&#x7684;&#x4E00;&#x79CD;&quot;&#x7F16;&#x7801;&#x65B9;&#x5F0F;&quot;&#x3002;</p>
<p>&#x7406;&#x89E3;&#x8FD9;&#x4E00;&#x70B9;&#xFF0C;&#x4E5F;&#x5C31;&#x7406;&#x89E3;&#x4E86;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#x6A21;&#x578B;&#xFF0C;&#x5373;&#x4F7F;&#x9762;&#x5BF9;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#x7684;&#x4E00;&#x6BB5;&#x6587;&#x5B57;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x5F97;&#x5230;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684; Token &#x6570;&#x3002;</p>
<h2 id="Token &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#Token &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>Token &#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x5F88;&#x591A;&#x4EBA;&#x7B2C;&#x4E00;&#x6B21;&#x63A5;&#x89E6; LLM&#xFF0C;&#x4F1A;&#x89C9;&#x5F97;&#xFF1A;</p>
<pre><code>&#x4E00;&#x53E5;&#x4E2D;&#x6587; &#x2192; Tokenizer &#x2192; Token
</code></pre>
<p>&#x4EFF;&#x4F5B; Token &#x5C31;&#x50CF;&#x6C49;&#x5B57;&#x4E00;&#x6837;&#xFF0C;&#x662F;&#x5929;&#x7136;&#x5B58;&#x5728;&#x7684;&#x3002;</p>
<p>&#x5B9E;&#x9645;&#x4E0A;&#x5E76;&#x4E0D;&#x662F;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x6839;&#x672C;&#x4E0D;&#x80FD;&#x7406;&#x89E3;&#x6587;&#x5B57;&#x3002;</p>
<p>Transformer &#x80FD;&#x5904;&#x7406;&#x7684;&#x53EA;&#x6709;&#x6570;&#x5B57;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x7684;&#x6570;&#x636E;&#x6D41;&#x662F;&#xFF1A;</p>
<pre><code>&#x6587;&#x672C; &#x2192; Tokenizer &#x2192; [5318, 99122, 8129, ...] &#x2192; Embedding &#x2192; &#x5411;&#x91CF; &#x2192; Transformer
</code></pre>
<p>Tokenizer &#x66F4;&#x50CF;&#x662F;&#x4E00;&#x79CD;&#x7F16;&#x8BD1;&#x5668;&#x3002;</p>
<p>&#x5B83;&#x8D1F;&#x8D23;&#x628A;&#x4EBA;&#x7C7B;&#x8BED;&#x8A00;&#x7FFB;&#x8BD1;&#x6210;&#x6A21;&#x578B;&#x80FD;&#x591F;&#x7406;&#x89E3;&#x7684;&#x7F16;&#x53F7;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<blockquote>
<p>Token &#x662F;&#x4EBA;&#x4E3A;&#x8BBE;&#x8BA1;&#x51FA;&#x6765;&#x7684;&#x3002;&#x4E0D;&#x662F;&#x81EA;&#x7136;&#x89C4;&#x5F8B;&#x3002;</p>
</blockquote>
<p>&#x540C;&#x4E00;&#x53E5;&#x8BDD;&#xFF0C;&#x53EF;&#x4EE5;&#x5207;&#x6210;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684; Token</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>internationalization
</code></pre>
<p>&#x4E00;&#x79CD; Tokenizer &#x5207;&#x51FA;&#x6765;&#xFF1A;</p>
<pre><code>international  ization
</code></pre>
<p>&#x53E6;&#x4E00;&#x79CD;&#xFF1A;</p>
<pre><code>inter  national  ization
</code></pre>
<p>&#x8FD8;&#x6709;&#x4E00;&#x79CD;&#xFF1A;</p>
<pre><code>i  n  t  e  ...
</code></pre>
<p>&#x751A;&#x81F3;&#xFF1A;</p>
<pre><code>internationalization
</code></pre>
<p>&#x6574;&#x4E2A;&#x5C31;&#x662F;&#x4E00;&#x4E2A; Token&#x3002;</p>
<p>&#x6A21;&#x578B;&#x90FD;&#x53EF;&#x4EE5;&#x8BAD;&#x7EC3;&#x3002;</p>
<p>&#x53EA;&#x662F;&#x8BAD;&#x7EC3;&#x6548;&#x7387;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<blockquote>
<p>Token &#x7684;&#x591A;&#x5C11;&#xFF0C;&#x4ECE;&#x6765;&#x6CA1;&#x6709;&#x552F;&#x4E00;&#x7B54;&#x6848;&#x3002;</p>
</blockquote>
<h2 id="Tokenizer &#x7684;&#x76EE;&#x6807;"><a href="#Tokenizer &#x7684;&#x76EE;&#x6807;"></a>Tokenizer &#x7684;&#x76EE;&#x6807;</h2>
<p>&#x8FD9;&#x662F;&#x5F88;&#x591A;&#x4EBA;&#x6700;&#x5927;&#x7684;&#x8BEF;&#x533A;&#x3002;</p>
<p>&#x5927;&#x5BB6;&#x6F5C;&#x610F;&#x8BC6;&#x90FD;&#x4F1A;&#x89C9;&#x5F97;&#xFF1A;</p>
<blockquote>
<p>Token &#x8D8A;&#x5C11;&#xFF0C;&#x6A21;&#x578B;&#x8D8A;&#x5148;&#x8FDB;&#x3002;</p>
</blockquote>
<p>&#x4E8B;&#x5B9E;&#x4E0A;&#x3002;</p>
<p>Tokenizer &#x771F;&#x6B63;&#x4F18;&#x5316;&#x7684;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x6A21;&#x578B;&#x6700;&#x7EC8;&#x6548;&#x679C;&#x3002;</p>
</blockquote>
<p>&#x800C;&#x4E0D;&#x662F;&#xFF1A;</p>
<blockquote>
<p>Token &#x6570;&#x3002;</p>
</blockquote>
<p>&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF1A;</p>
<pre><code class="language-python">calculate_total_price_after_discount()
</code></pre>
<p>&#x4E00;&#x79CD; Tokenizer &#x5207;&#x51FA;&#x6765;&#xFF1A;</p>
<pre><code>calculate_total_price_after_discount
</code></pre>
<p>&#x6574;&#x4E2A;&#x5C31;&#x662F;&#x4E00;&#x4E2A; Token&#x3002;</p>
<p>&#x6A21;&#x578B;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code>582931
</code></pre>
<p>&#x7ED3;&#x675F;&#x3002;</p>
<p>&#x53E6;&#x4E00;&#x79CD;&#x5207;&#x51FA;&#x6765;&#xFF1A;</p>
<pre><code>calculate  total  price  after  discount
</code></pre>
<p>&#x867D;&#x7136; Token &#x591A;&#x4E86;&#x3002;</p>
<p>&#x4F46;&#x662F;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5206;&#x522B;&#x7406;&#x89E3;&#xFF1A;</p>
<pre><code>calculate  &#x2192;  &#x52A8;&#x4F5C;
total      &#x2192;  &#x805A;&#x5408;
price      &#x2192;  &#x4EF7;&#x683C;
discount   &#x2192;  &#x6298;&#x6263;
</code></pre>
<p>Attention &#x66F4;&#x5BB9;&#x6613;&#x5EFA;&#x7ACB;&#x8BED;&#x4E49;&#x8054;&#x7CFB;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x53CD;&#x800C;&#x53EF;&#x80FD;&#x66F4;&#x806A;&#x660E;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF1A;</p>
<blockquote>
<p>Token &#x66F4;&#x591A;&#xFF0C;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x6A21;&#x578B;&#x66F4;&#x5DEE;&#x3002;</p>
</blockquote>
<h2 id="Tokenizer &#x600E;&#x4E48;&#x8BAD;&#x7EC3;&#x7684;&#xFF1F;"><a href="#Tokenizer &#x600E;&#x4E48;&#x8BAD;&#x7EC3;&#x7684;&#xFF1F;"></a>Tokenizer &#x600E;&#x4E48;&#x8BAD;&#x7EC3;&#x7684;&#xFF1F;</h2>
<p>Tokenizer &#x672C;&#x8EAB;&#x4E5F;&#x662F;&#x8BAD;&#x7EC3;&#x51FA;&#x6765;&#x7684;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#x8BED;&#x6599;&#xFF1A;</p>
<pre><code>apple
application
apply
</code></pre>
<p>&#x5F00;&#x59CB;&#x65F6;&#xFF0C;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x90FD;&#x662F;&#x4E00;&#x4E2A; Token&#xFF1A;</p>
<pre><code>a  p  p  l  e
</code></pre>
<p>&#x7B97;&#x6CD5;&#x4E0D;&#x65AD;&#x7EDF;&#x8BA1;&#xFF1A;</p>
<p>&#x54EA;&#x4E9B;&#x5B57;&#x7B26;&#x7EC4;&#x5408;&#x51FA;&#x73B0;&#x6700;&#x591A;&#x3002;</p>
<p>&#x53D1;&#x73B0;&#xFF1A;</p>
<pre><code>app
</code></pre>
<p>&#x51FA;&#x73B0;&#x9891;&#x7387;&#x6781;&#x9AD8;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x628A; <code>a</code> <code>p</code> <code>p</code> &#x8FD9;&#x4E09;&#x4E2A; Token &#x5408;&#x5E76;&#x6210;&#x4E00;&#x4E2A;&#x65B0; Token&#xFF1A;</p>
<pre><code>app
</code></pre>
<p>&#x7EE7;&#x7EED;&#x8BAD;&#x7EC3;&#x3002;</p>
<p>&#x540E;&#x6765;&#xFF1A;</p>
<pre><code>apple
</code></pre>
<p>&#x53C8;&#x51FA;&#x73B0;&#x5F88;&#x591A;&#x3002;</p>
<p>&#x7EE7;&#x7EED;&#x5408;&#x5E76;&#x3002;</p>
<p>&#x6700;&#x540E;&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code>app  apple  lication  ly
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x7ECF;&#x5178;&#x7684; <strong>BPE&#xFF08;Byte Pair Encoding&#xFF09;</strong>&#x3002;</p>
<p>&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x601D;&#x60F3;&#x53EA;&#x6709;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<blockquote>
<p>&#x4E0D;&#x65AD;&#x628A;&#x6700;&#x5E38;&#x4E00;&#x8D77;&#x51FA;&#x73B0;&#x7684;&#x7247;&#x6BB5;&#x5408;&#x5E76;&#x3002;</p>
</blockquote>
<h2 id="Tokenizer &#x7684;&#x6F14;&#x5316;"><a href="#Tokenizer &#x7684;&#x6F14;&#x5316;"></a>Tokenizer &#x7684;&#x6F14;&#x5316;</h2>
<p><strong>&#x7B2C;&#x4E00;&#x4EE3;&#xFF1A;Word Level</strong></p>
<pre><code>I  love  AI
</code></pre>
<p>&#x4E00;&#x4E2A;&#x8BCD;&#x4E00;&#x4E2A; Token&#x3002;</p>
<p>&#x95EE;&#x9898;&#xFF1A;</p>
<pre><code>loving  loved  lovely
</code></pre>
<p>&#x5168;&#x90E8;&#x90FD;&#x662F;&#x65B0;&#x8BCD;&#x3002;</p>
<p>&#x8BCD;&#x5178;&#x65E0;&#x9650;&#x81A8;&#x80C0;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E8C;&#x4EE3;&#xFF1A;Character Level</strong></p>
<pre><code>l  o  v  e
</code></pre>
<p>&#x6CA1;&#x6709;&#x672A;&#x77E5;&#x8BCD;&#x3002;</p>
<p>&#x4F46;&#x662F;&#xFF1A;</p>
<pre><code>internationalization
</code></pre>
<p>&#x4F1A;&#x53D8;&#x6210;&#x4E8C;&#x5341;&#x591A;&#x4E2A; Token&#x3002;</p>
<p>&#x4E0A;&#x4E0B;&#x6587;&#x8FC5;&#x901F;&#x53D8;&#x957F;&#x3002;</p>
<p>Transformer &#x6210;&#x672C;&#x66B4;&#x6DA8;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E09;&#x4EE3;&#xFF1A;Subword</strong></p>
<p>&#x4ECA;&#x5929;&#x51E0;&#x4E4E;&#x6240;&#x6709; LLM &#x90FD;&#x5C5E;&#x4E8E;&#x8FD9;&#x4E00;&#x4EE3;&#x3002;</p>
<p>&#x601D;&#x60F3;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF1A;</p>
<blockquote>
<p>&#x5E38;&#x89C1;&#x7247;&#x6BB5;&#x4F5C;&#x4E3A; Token&#x3002;</p>
</blockquote>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>international  ization
</code></pre>
<p>&#x6216;&#x8005;&#xFF1A;</p>
<pre><code>inter  national  ization
</code></pre>
<p>&#x65E2;&#x907F;&#x514D;&#x672A;&#x77E5;&#x8BCD;&#x3002;</p>
<p>&#x53C8;&#x4E0D;&#x4F1A; Token &#x592A;&#x957F;&#x3002;</p>
<p>&#x4ECA;&#x5929;&#x5927;&#x5BB6;&#x719F;&#x6089;&#x7684; GPT&#x3001;Claude&#x3001;Gemini&#x3001;Llama&#xFF0C;&#x57FA;&#x672C;&#x90FD;&#x5C5E;&#x4E8E;&#x8FD9;&#x4E00;&#x7C7B;&#x3002;</p>
<p>&#x533A;&#x522B;&#x53EA;&#x662F;&#xFF1A;&#x5207;&#x6CD5;&#x4E0D;&#x540C;&#x3002;</p>
<h3 id="GPT &#x4E3A;&#x4EC0;&#x4E48;&#x540E;&#x6765;&#x53C8;&#x5F00;&#x59CB;&#x4F7F;&#x7528; Byte-Level&#xFF1F;"><a href="#GPT &#x4E3A;&#x4EC0;&#x4E48;&#x540E;&#x6765;&#x53C8;&#x5F00;&#x59CB;&#x4F7F;&#x7528; Byte-Level&#xFF1F;"></a>GPT &#x4E3A;&#x4EC0;&#x4E48;&#x540E;&#x6765;&#x53C8;&#x5F00;&#x59CB;&#x4F7F;&#x7528; Byte-Level&#xFF1F;</h3>
<p>GPT-2 &#x5F15;&#x5165;&#x4E86;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x4EE5;&#x524D;&#xFF1A;</p>
<pre><code>&#x6C49;
</code></pre>
<p>&#x5C31;&#x662F;&#x4E00;&#x4E2A; Unicode &#x5B57;&#x7B26;&#x3002;</p>
<p>GPT-2&#xFF1A;&#x76F4;&#x63A5;&#x5904;&#x7406; UTF-8&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>&#x6C49;
</code></pre>
<p>&#x5E95;&#x5C42;&#x5176;&#x5B9E;&#x662F;&#xFF1A;</p>
<pre><code>E6  B1  89
</code></pre>
<p>&#x4E09;&#x4E2A; Byte&#x3002;</p>
<p>&#x8FD9;&#x6837;&#x505A;&#x6700;&#x5927;&#x7684;&#x4F18;&#x70B9;&#xFF1A;<u>&#x4EFB;&#x4F55;&#x5B57;&#x7B26;&#x3001;&#x4EFB;&#x4F55; Emoji&#x3001;&#x4EFB;&#x4F55;&#x8BED;&#x8A00;&#xFF0C;&#x90FD;&#x4E00;&#x5B9A;&#x53EF;&#x4EE5;&#x7F16;&#x7801;&#x3002;</u></p>
<p>&#x4E0D;&#x4F1A;&#x51FA;&#x73B0;&#x672A;&#x77E5;&#x5B57;&#x7B26;&#x3002;</p>
<p>&#x4EE3;&#x4EF7;&#x5C31;&#x662F;&#xFF1A;&#x6709;&#x65F6;&#x5019; Token &#x4F1A;&#x53D8;&#x591A;&#x3002;</p>
<h2 id="&#x90A3; Sonnet 5 &#x4E3A;&#x4EC0;&#x4E48; Token &#x66F4;&#x591A;&#xFF1F;"><a href="#&#x90A3; Sonnet 5 &#x4E3A;&#x4EC0;&#x4E48; Token &#x66F4;&#x591A;&#xFF1F;"></a>&#x90A3; Sonnet 5 &#x4E3A;&#x4EC0;&#x4E48; Token &#x66F4;&#x591A;&#xFF1F;</h2>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x76EE;&#x524D;&#x5927;&#x5BB6;&#x6700;&#x5173;&#x5FC3;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x5B98;&#x65B9;&#x6CA1;&#x6709;&#x516C;&#x5E03; Tokenizer &#x7684;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x8BBA;&#x6587;&#x3001;&#x6CA1;&#x6709; Vocabulary&#x3001;&#x6CA1;&#x6709; Merge Rules&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x6CA1;&#x4EBA;&#x77E5;&#x9053;&#x5B83;&#x5230;&#x5E95;&#x957F;&#x4EC0;&#x4E48;&#x6837;&#x3002;</p>
<p>&#x5B98;&#x65B9;&#x76EE;&#x524D;&#x53EA;&#x516C;&#x5E03;&#x4E86;&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;&#x65B0;&#x7684; Tokenizer</li>
<li>&#x540C;&#x6837;&#x6587;&#x672C;&#x7EA6;&#x589E;&#x52A0; 30% Token</li>
<li>&#x66F4;&#x9002;&#x5408; Coding &#x548C; Agent</li>
</ul>
<p>&#x4E0B;&#x9762;&#x662F;&#x65B0; Tokenizer &#x7684;&#x63A8;&#x6D4B;&#xFF1A;</p>
<p><strong>&#x63A8;&#x6D4B;&#x4E00;&#xFF1A;&#x4EE3;&#x7801;&#x8BED;&#x6599;&#x5360;&#x6BD4;&#x66F4;&#x9AD8;</strong></p>
<p>Claude &#x4ECA;&#x5929;&#x6700;&#x5927;&#x7684;&#x4F18;&#x52BF;&#x4E0D;&#x662F;&#x804A;&#x5929;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<ul>
<li>Coding</li>
<li>Agent</li>
<li>MCP</li>
<li>Tool Calling</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;Tokenizer &#x5F88;&#x53EF;&#x80FD;&#x91CD;&#x65B0;&#x5B66;&#x4E60;&#x4E86;&#xFF1A;</p>
<pre><code>async  await  import  SELECT  FROM  JSON  Markdown  XML
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x9AD8;&#x9891;&#x6A21;&#x5F0F;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F20;&#x7EDF;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x3002;</p>
<p><strong>&#x63A8;&#x6D4B;&#x4E8C;&#xFF1A;&#x66F4;&#x591A;&#x5173;&#x6CE8;&#x8BED;&#x4E49;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x538B;&#x7F29;&#x7387;</strong></p>
<p>Tokenizer &#x6700;&#x521D;&#x76EE;&#x6807;&#xFF1A;</p>
<blockquote>
<p>Token &#x8D8A;&#x5C11;&#x8D8A;&#x597D;&#x3002;</p>
</blockquote>
<p>&#x4ECA;&#x5929;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#x7814;&#x7A76;&#x53D1;&#x73B0;&#xFF1A;</p>
<blockquote>
<p>&#x538B;&#x7F29;&#x7387;&#x6700;&#x9AD8;&#xFF0C;&#x5E76;&#x4E0D;&#x7B49;&#x4E8E;&#x6A21;&#x578B;&#x6548;&#x679C;&#x6700;&#x597D;&#x3002;</p>
</blockquote>
<p>&#x6709;&#x65F6;&#x5019;&#xFF0C;&#x9002;&#x5F53;&#x589E;&#x52A0; Token&#xFF0C;&#x53CD;&#x800C;&#x8BA9; Transformer &#x66F4;&#x5BB9;&#x6613;&#x5B66;&#x4E60;&#x3002;</p>
<p><strong>&#x63A8;&#x6D4B;&#x4E09;&#xFF1A;&#x7ED3;&#x6784;&#x5316;&#x6587;&#x672C;&#x5F97;&#x5230;&#x4F18;&#x5316;</strong></p>
<p>Agent &#x4ECA;&#x5929;&#x5927;&#x91CF;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code>{
  &quot;name&quot;:&quot;search&quot;
}
</code></pre>
<p>&#x6216;&#x8005;&#xFF1A;</p>
<pre><code>&lt;/tool_call&gt;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x4EE5;&#x524D;&#x51E0;&#x4E4E;&#x6CA1;&#x6709;&#x3002;</p>
<p>&#x65B0;&#x7684; Tokenizer &#x5F88;&#x53EF;&#x80FD;&#x9488;&#x5BF9; JSON&#x3001;XML&#x3001;Markdown &#x8FDB;&#x884C;&#x4E86;&#x4E13;&#x95E8;&#x4F18;&#x5316;&#x3002;</p>
<p><u>&#x6240;&#x4EE5;&#x5B83;&#x5927;&#x6982;&#x7387;&#x4ECD;&#x5C5E;&#x4E8E;&#x73B0;&#x4EE3; subword tokenizer &#x5BB6;&#x65CF;&#xFF0C;&#x4F46;&#x91CD;&#x65B0;&#x8BBE;&#x8BA1;&#x4E86;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#x548C;&#x8BCD;&#x8868;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B8C;&#x5168;&#x53D1;&#x660E;&#x4E86;&#x4E00;&#x79CD;&#x5168;&#x65B0;&#x7684; tokenizer&#x3002;</u></p>
<h3 id="&#x90A3;&#x662F;&#x4E0D;&#x662F;&#x610F;&#x5473;&#x7740; API &#x66F4;&#x8D35;&#x4E86;&#xFF1F;"><a href="#&#x90A3;&#x662F;&#x4E0D;&#x662F;&#x610F;&#x5473;&#x7740; API &#x66F4;&#x8D35;&#x4E86;&#xFF1F;"></a>&#x90A3;&#x662F;&#x4E0D;&#x662F;&#x610F;&#x5473;&#x7740; API &#x66F4;&#x8D35;&#x4E86;&#xFF1F;</h3>
<p>&#x7B54;&#x6848;&#x5176;&#x5B9E;&#x6709;&#x4E24;&#x5C42;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6BD4;&#x8F83;&#x7684;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x6BCF;&#x767E;&#x4E07; Token &#x5355;&#x4EF7;&#x3002;</p>
</blockquote>
<p>&#x6CA1;&#x6709;&#x53D8;&#x5316;&#x3002;</p>
<p>&#x4F46;&#x662F;&#x5982;&#x679C;&#x6BD4;&#x8F83;&#xFF1A;</p>
<blockquote>
<p>&#x5B8C;&#x6210;&#x540C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x3002;</p>
</blockquote>
<p>&#x60C5;&#x51B5;&#x5C31;&#x590D;&#x6742;&#x5F97;&#x591A;&#x3002;</p>
<p>&#x5982;&#x679C;&#x4EE5;&#x524D;&#xFF1A;8000 Token&#xFF0C;&#x73B0;&#x5728;&#xFF1A;10000 Token&#xFF0C;&#x90A3;&#x4E48;&#x6210;&#x672C;&#x786E;&#x5B9E;&#x4F1A;&#x4E0A;&#x5347;&#x3002;</p>
<p>&#x4F46;&#x53E6;&#x4E00;&#x65B9;&#x9762;&#xFF0C;&#x5982;&#x679C; Sonnet 5 &#x4E00;&#x6B21;&#x5C31;&#x5B8C;&#x6210;&#xFF0C;&#x4EE5;&#x524D;&#x9700;&#x8981;&#x4E24;&#x8F6E;&#xFF0C;&#x6700;&#x7EC8;&#x603B; Token &#x53CD;&#x800C;&#x53EF;&#x80FD;&#x4E0B;&#x964D;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x771F;&#x6B63;&#x5E94;&#x8BE5;&#x6BD4;&#x8F83;&#x7684;&#x662F;&#xFF1A;</p>
<blockquote>
<p>Cost per Task&#xFF08;&#x5B8C;&#x6210;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x7684;&#x6210;&#x672C;&#xFF09;</p>
</blockquote>
<p>&#x800C;&#x4E0D;&#x662F;&#xFF1A;</p>
<blockquote>
<p>Cost per Token&#x3002;</p>
</blockquote>
<h2 id="&#x5199;&#x5728;&#x6700;&#x540E;"><a href="#&#x5199;&#x5728;&#x6700;&#x540E;"></a>&#x5199;&#x5728;&#x6700;&#x540E;</h2>
<blockquote>
<p>Token &#x4ECE;&#x6765;&#x4E0D;&#x662F;&#x81EA;&#x7136;&#x5355;&#x4F4D;&#x3002;</p>
</blockquote>
<p>&#x5B83;&#x66F4;&#x50CF;&#x4E00;&#x79CD;&#x538B;&#x7F29;&#x683C;&#x5F0F;&#x3002;</p>
<p>ZIP&#x3001;RAR&#x3001;7z&#xFF0C;&#x9762;&#x5BF9;&#x540C;&#x4E00;&#x4EFD;&#x6587;&#x4EF6;&#xFF0C;&#x538B;&#x7F29;&#x540E;&#x7684;&#x5927;&#x5C0F;&#x53EF;&#x4EE5;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x3002;</p>
<p>Tokenizer &#x4E5F;&#x662F;&#x5982;&#x6B64;&#x3002;&#x540C;&#x6837;&#x4E00;&#x53E5;&#x8BDD;&#xFF0C;&#x4E0D;&#x540C;&#x6A21;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x5F97;&#x5230;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684; Token &#x6570;&#x3002;</p>
<p>&#x800C;&#x6A21;&#x578B;&#x8BBE;&#x8BA1;&#x8005;&#x771F;&#x6B63;&#x8FFD;&#x6C42;&#x7684;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&quot;&#x5207;&#x5F97;&#x6700;&#x5C11;&quot;&#xFF0C;&#x800C;&#x662F;&#x8BA9; Transformer &#x66F4;&#x5BB9;&#x6613;&#x5B66;&#x4E60;&#x3001;&#x66F4;&#x7A33;&#x5B9A;&#x63A8;&#x7406;&#x3001;&#x66F4;&#x9AD8;&#x6548;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#x3002;</p>
<p>&#x4E5F;&#x8BB8;&#x672A;&#x6765;&#x51E0;&#x5E74;&#xFF0C;&#x6211;&#x4EEC;&#x8BA8;&#x8BBA;&#x6A21;&#x578B;&#x65F6;&#xFF0C;&#x4F1A;&#x8D8A;&#x6765;&#x8D8A;&#x5C11;&#x6BD4;&#x8F83;&quot;&#x6BCF;&#x767E;&#x4E07; Token &#x591A;&#x5C11;&#x94B1;&quot;&#xFF0C;&#x800C;&#x66F4;&#x591A;&#x6BD4;&#x8F83;&#xFF1A;</p>
<blockquote>
<p>&#x5B8C;&#x6210;&#x540C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x5230;&#x5E95;&#x9700;&#x8981;&#x591A;&#x5C11;&#x6210;&#x672C;&#x3002;</p>
</blockquote>
`,n=[{level:1,title:"Claude Sonnet 5 的 Token 消耗更多了？一文看懂 Token 的演化",children:[{level:2,title:"Token 是什么？",children:[]},{level:2,title:"Tokenizer 的目标",children:[]},{level:2,title:"Tokenizer 怎么训练的？",children:[]},{level:2,title:"Tokenizer 的演化",children:[{level:3,title:"GPT 为什么后来又开始使用 Byte-Level？",children:[]}]},{level:2,title:"那 Sonnet 5 为什么 Token 更多？",children:[{level:3,title:"那是不是意味着 API 更贵了？",children:[]}]},{level:2,title:"写在最后",children:[]}]}];export{x as attributes,F as html,n as nestedHeaders};
