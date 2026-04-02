const x={},F=`<h1 id="Agent &#x7CFB;&#x7EDF;&#x7684;&#x4E94;&#x4E2A;&#x6838;&#x5FC3;&#x8303;&#x5F0F;"><a href="#Agent &#x7CFB;&#x7EDF;&#x7684;&#x4E94;&#x4E2A;&#x6838;&#x5FC3;&#x8303;&#x5F0F;"></a>Agent &#x7CFB;&#x7EDF;&#x7684;&#x4E94;&#x4E2A;&#x6838;&#x5FC3;&#x8303;&#x5F0F;</h1>
<blockquote>
<p>&#x4ECE; deepagents &#x6E90;&#x7801;&#x51FA;&#x53D1;&#xFF0C;&#x63D0;&#x70BC; AI Agent &#x7CFB;&#x7EDF;&#x8BBE;&#x8BA1;&#x7684;&#x901A;&#x7528;&#x8303;&#x5F0F;</p>
</blockquote>
<h2 id="&#x5F15;&#x8A00;"><a href="#&#x5F15;&#x8A00;"></a>&#x5F15;&#x8A00;</h2>
<p>&#x5206;&#x6790; deepagents &#x6E90;&#x7801;&#x540E;&#xFF0C;&#x6211;&#x53D1;&#x73B0; Agent &#x7CFB;&#x7EDF;&#x7684;&#x6838;&#x5FC3;&#x6311;&#x6218;&#x53EF;&#x4EE5;&#x5F52;&#x7ED3;&#x4E3A;<strong>&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x95EE;&#x9898;</strong>&#x3002;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#x4E0D;&#x4F9D;&#x8D56;&#x4E8E;&#x5177;&#x4F53;&#x6846;&#x67B6;&#x2014;&#x2014;&#x65E0;&#x8BBA;&#x4F60;&#x7528; LangGraph&#x3001;CrewAI &#x8FD8;&#x662F;&#x81EA;&#x5EFA;&#x7CFB;&#x7EDF;&#xFF0C;&#x90FD;&#x5FC5;&#x987B;&#x9762;&#x5BF9;&#x5B83;&#x4EEC;&#x3002;</p>
<p>&#x672C;&#x6587;&#x4E0D;&#x662F;&#x6846;&#x67B6;&#x6559;&#x7A0B;&#xFF0C;&#x800C;&#x662F;&#x8BD5;&#x56FE;&#x56DE;&#x7B54;&#xFF1A;<strong>&#x6784;&#x5EFA;&#x4E00;&#x4E2A;&#x751F;&#x4EA7;&#x7EA7; Agent &#x7CFB;&#x7EDF;&#xFF0C;&#x5230;&#x5E95;&#x9700;&#x8981;&#x89E3;&#x51B3;&#x54EA;&#x4E9B;&#x672C;&#x8D28;&#x95EE;&#x9898;&#xFF1F;</strong></p>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x4E00;&#xFF1A;&#x6CE8;&#x610F;&#x529B;&#x7ECF;&#x6D4E;&#x5B66; &#x2014; Less is More"><a href="#&#x8303;&#x5F0F;&#x4E00;&#xFF1A;&#x6CE8;&#x610F;&#x529B;&#x7ECF;&#x6D4E;&#x5B66; &#x2014; Less is More"></a>&#x8303;&#x5F0F;&#x4E00;&#xFF1A;&#x6CE8;&#x610F;&#x529B;&#x7ECF;&#x6D4E;&#x5B66; &#x2014; Less is More</h2>
<h3 id="&#x6838;&#x5FC3;&#x547D;&#x9898;"><a href="#&#x6838;&#x5FC3;&#x547D;&#x9898;"></a>&#x6838;&#x5FC3;&#x547D;&#x9898;</h3>
<blockquote>
<p><strong>&#x7ED9; LLM &#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x4E0D;&#x4F1A;&#x8BA9;&#x5B83;&#x66F4;&#x806A;&#x660E;&#xFF0C;&#x53CD;&#x800C;&#x66F4;&#x8822;&#x3002;</strong></p>
</blockquote>
<p>&#x8FD9;&#x662F; Agent &#x7CFB;&#x7EDF;&#x6700;&#x53CD;&#x76F4;&#x89C9;&#x7684;&#x53D1;&#x73B0;&#x3002;</p>
<h3 id="&#x6570;&#x5B66;&#x57FA;&#x7840;"><a href="#&#x6570;&#x5B66;&#x57FA;&#x7840;"></a>&#x6570;&#x5B66;&#x57FA;&#x7840;</h3>
<p>Transformer &#x7684;&#x81EA;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x662F;&#x4E00;&#x4E2A;<strong>&#x96F6;&#x548C;&#x535A;&#x5F08;</strong>&#xFF1A;</p>
<pre><code class="language-python">weights = softmax(scores)  <span class="hljs-comment"># &#x6240;&#x6709;&#x6743;&#x91CD;&#x4E4B;&#x548C; = 1</span>
</code></pre>
<p>&#x5F53;&#x4F60;&#x5F80; context &#x91CC;&#x585E;&#x5165;&#x65E0;&#x5173;&#x5185;&#x5BB9;&#x65F6;&#xFF1A;</p>
<pre><code>&#x573A;&#x666F; A&#xFF1A;&#x53EA;&#x6709;&#x76F8;&#x5173;&#x5185;&#x5BB9;&#xFF08;3 &#x4E2A; keys&#xFF09;
  weights = [0.35, 0.30, 0.35]  # &#x76F8;&#x5173;&#x5185;&#x5BB9;&#x5206;&#x4EAB; 100% &#x6CE8;&#x610F;&#x529B;

&#x573A;&#x666F; B&#xFF1A;&#x6DF7;&#x5165;&#x65E0;&#x5173;&#x5185;&#x5BB9;&#xFF08;3 &#x76F8;&#x5173; + 5 &#x65E0;&#x5173;&#xFF09;
  weights = [0.18, 0.15, 0.17, 0.08, 0.06, 0.07, 0.09, 0.07]
  # &#x76F8;&#x5173;&#x5185;&#x5BB9;&#x53EA;&#x5206;&#x5230; 50% &#x6CE8;&#x610F;&#x529B; &#x2014; &#x88AB;&#x7A00;&#x91CA;&#x4E86;&#x4E00;&#x534A;
</code></pre>
<p><strong>&#x5B9E;&#x6D4B;&#x6570;&#x636E;&#xFF08;Anthropic &#x7814;&#x7A76;&#xFF09;&#xFF1A;</strong></p>
<ul>
<li>10k tokens context&#xFF08;80% &#x76F8;&#x5173;&#xFF09;&#xFF1A;&#x51C6;&#x786E;&#x7387; 87%</li>
<li>100k tokens context&#xFF08;20% &#x76F8;&#x5173;&#xFF09;&#xFF1A;&#x51C6;&#x786E;&#x7387; 79%&#xFF08;<strong>-8%</strong>&#xFF09;</li>
</ul>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x5076;&#x7136;&#xFF0C;&#x662F;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x7684;&#x6570;&#x5B66;&#x5FC5;&#x7136;&#x3002;</p>
<h3 id="&#x8303;&#x5F0F;&#x89E3;&#x6CD5;&#xFF1A;&#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;&#xFF08;Progressive Disclosure&#xFF09;"><a href="#&#x8303;&#x5F0F;&#x89E3;&#x6CD5;&#xFF1A;&#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;&#xFF08;Progressive Disclosure&#xFF09;"></a>&#x8303;&#x5F0F;&#x89E3;&#x6CD5;&#xFF1A;&#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;&#xFF08;Progressive Disclosure&#xFF09;</h3>
<p><strong>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;</strong> &#x628A;&#x4E0A;&#x4E0B;&#x6587;&#x5F53;&#x6210;&#x7A00;&#x7F3A;&#x8D44;&#x6E90;&#x6765;&#x7BA1;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5783;&#x573E;&#x6876;&#x3002;</p>
<p><strong>deepagents &#x7684;&#x5B9E;&#x73B0;&#xFF1A;</strong></p>
<pre><code>&#x542F;&#x52A8;&#x65F6;&#x6CE8;&#x5165;&#xFF08;~150 tokens&#xFF09;&#xFF1A;
  &#x53EF;&#x7528;&#x6280;&#x80FD;&#xFF1A;
  - query-writing: &#x5199; SQL &#x67E5;&#x8BE2;
  - schema-exploration: &#x63A2;&#x7D22;&#x6570;&#x636E;&#x5E93;&#x7ED3;&#x6784;
  &#x9700;&#x8981;&#x65F6;&#x7528; read_file &#x52A0;&#x8F7D;&#x8BE6;&#x7EC6;&#x5185;&#x5BB9;&#x3002;

Agent &#x51B3;&#x5B9A;&#x9700;&#x8981;&#x65F6;&#xFF0C;&#x624D;&#x52A0;&#x8F7D;&#xFF08;+480 tokens&#xFF09;&#xFF1A;
  read_file(&quot;./skills/query-writing/SKILL.md&quot;)
  &#x2192; &#x83B7;&#x5F97;&#x5B8C;&#x6574; 69 &#x884C; workflow
</code></pre>
<p><strong>&#x5B9E;&#x73B0;&#x673A;&#x5236;&#xFF08;&#x6E90;&#x7801;&#xFF09;&#xFF1A;</strong></p>
<p>deepagents &#x7684; <code>SkillsMiddleware</code> &#x542F;&#x52A8;&#x65F6;&#x626B;&#x63CF; skills &#x76EE;&#x5F55;&#xFF0C;<strong>&#x53EA;&#x63D0;&#x53D6; YAML frontmatter</strong>&#xFF08;name + description&#xFF09;&#xFF0C;&#x4E0D;&#x8BFB; body&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-comment"># &#x6B63;&#x5219;&#x53EA;&#x5339;&#x914D; --- &#x4E4B;&#x95F4;&#x7684; YAML &#x5934;&#x90E8;</span>
frontmatter_pattern = <span class="hljs-string">r&quot;^---\\s*\\n(.*?)\\n---\\s*\\n&quot;</span>
match = re.match(frontmatter_pattern, content, re.DOTALL)
<span class="hljs-comment"># &#x89E3;&#x6790;&#x5F97;&#x5230; name, description &#x2192; &#x6CE8;&#x5165; system prompt</span>
<span class="hljs-comment"># body &#x4E0D;&#x8BFB;&#xFF0C;&#x7B49; Agent &#x81EA;&#x5DF1;&#x8C03;&#x7528; read_file</span>
</code></pre>
<p><strong>&#x6CE8;&#x610F;&#xFF1A;</strong> deepagents &#x7684;&#x6E10;&#x8FDB;&#x5F0F;&#x53EA;&#x6709;<strong>&#x4E24;&#x5C42;</strong>&#xFF08;&#x7D22;&#x5F15; &#x2192; &#x5168;&#x6587;&#xFF09;&#xFF0C;&#x4E0D;&#x652F;&#x6301;&#x6DF1;&#x5C42;&#x5D4C;&#x5957;&#x3002;&#x5982;&#x679C;&#x77E5;&#x8BC6;&#x5E9E;&#x5927;&#xFF0C;&#x8BBE;&#x8BA1;&#x7B56;&#x7565;&#x662F;&#x62C6;&#x6210;&#x591A;&#x4E2A;&#x5E73;&#x7EA7; skill&#xFF0C;&#x800C;&#x975E;&#x5D4C;&#x5957;&#x3002;</p>
<h3 id="&#x8303;&#x5F0F;&#x542F;&#x53D1;"><a href="#&#x8303;&#x5F0F;&#x542F;&#x53D1;"></a>&#x8303;&#x5F0F;&#x542F;&#x53D1;</h3>
<pre><code>&#x65E7;&#x8303;&#x5F0F;&#xFF1A;&#x4FE1;&#x606F;&#x91CF; &#x2191; &#x2192; &#x6548;&#x679C; &#x2191;
&#x65B0;&#x8303;&#x5F0F;&#xFF1A;&#x4FE1;&#x566A;&#x6BD4; &#x2191; &#x2192; &#x6548;&#x679C; &#x2191;

&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF1A;
  1. &#x6309;&#x9700;&#x52A0;&#x8F7D;&#xFF0C;&#x4E0D;&#x8981;&#x9884;&#x52A0;&#x8F7D;
  2. &#x7D22;&#x5F15;&#x548C;&#x5185;&#x5BB9;&#x5206;&#x79BB;
  3. &#x8BA9; Agent &#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x4F55;&#x65F6;&#x52A0;&#x8F7D;&#x4EC0;&#x4E48;
</code></pre>
<p><strong>&#x884C;&#x4E1A;&#x5370;&#x8BC1;&#xFF1A;</strong> Anthropic&#x3001;Cloudflare&#x3001;Cursor&#x3001;Vercel &#x5728;&#x751F;&#x4EA7;&#x5B9E;&#x8DF5;&#x4E2D;&#x72EC;&#x7ACB;&#x6536;&#x655B;&#x5230;&#x8FD9;&#x4E2A;&#x6A21;&#x5F0F;&#x3002;</p>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x4E8C;&#xFF1A;&#x5DE5;&#x5177;&#x9009;&#x62E9; &#x2014; &#x4ECE;&#x9759;&#x6001;&#x6CE8;&#x518C;&#x5230;&#x52A8;&#x6001;&#x68C0;&#x7D22;"><a href="#&#x8303;&#x5F0F;&#x4E8C;&#xFF1A;&#x5DE5;&#x5177;&#x9009;&#x62E9; &#x2014; &#x4ECE;&#x9759;&#x6001;&#x6CE8;&#x518C;&#x5230;&#x52A8;&#x6001;&#x68C0;&#x7D22;"></a>&#x8303;&#x5F0F;&#x4E8C;&#xFF1A;&#x5DE5;&#x5177;&#x9009;&#x62E9; &#x2014; &#x4ECE;&#x9759;&#x6001;&#x6CE8;&#x518C;&#x5230;&#x52A8;&#x6001;&#x68C0;&#x7D22;</h2>
<h3 id="&#x6838;&#x5FC3;&#x547D;&#x9898;"><a href="#&#x6838;&#x5FC3;&#x547D;&#x9898;"></a>&#x6838;&#x5FC3;&#x547D;&#x9898;</h3>
<blockquote>
<p><strong>&#x5DE5;&#x5177;&#x4E0D;&#x662F;&#x8D8A;&#x591A;&#x8D8A;&#x597D;&#x3002;50+ &#x5DE5;&#x5177;&#x65F6;&#x51C6;&#x786E;&#x7387;&#x4E0B;&#x964D; 23%&#x3002;</strong></p>
</blockquote>
<p>&#x539F;&#x56E0;&#x548C;&#x8303;&#x5F0F;&#x4E00;&#x76F8;&#x540C;&#xFF1A;&#x5DE5;&#x5177;&#x63CF;&#x8FF0;&#x5360;&#x636E; context&#xFF0C;&#x7A00;&#x91CA;&#x6CE8;&#x610F;&#x529B;&#x3002;&#x4F46;&#x89E3;&#x6CD5;&#x4E0D;&#x540C;&#x3002;</p>
<h3 id="&#x4E09;&#x4E2A;&#x5C42;&#x6B21;"><a href="#&#x4E09;&#x4E2A;&#x5C42;&#x6B21;"></a>&#x4E09;&#x4E2A;&#x5C42;&#x6B21;</h3>
<p><strong>&#x5C42;&#x6B21; 1&#xFF1A;&#x9759;&#x6001;&#x6CE8;&#x518C;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># &#x542F;&#x52A8;&#x65F6;&#x786E;&#x5B9A;&#xFF0C;&#x8FD0;&#x884C;&#x65F6;&#x4E0D;&#x53D8;</span>
agent = Agent(tools=[tool1, tool2, ..., tool50])
</code></pre>
<p>&#x95EE;&#x9898;&#xFF1A;&#x6240;&#x6709;&#x5DE5;&#x5177;&#x63CF;&#x8FF0;&#x6BCF;&#x6B21;&#x90FD;&#x6CE8;&#x5165;&#xFF0C;&#x5373;&#x4F7F;&#x4EFB;&#x52A1;&#x53EA;&#x9700;&#x8981; 3 &#x4E2A;&#x3002;</p>
<p><strong>&#x5C42;&#x6B21; 2&#xFF1A;&#x80FD;&#x529B;&#x8FC7;&#x6EE4;&#xFF08;deepagents &#x7684;&#x4F4D;&#x7F6E;&#xFF09;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># deepagents &#x7684; FilesystemMiddleware</span>
<span class="hljs-comment"># &#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x6A21;&#x578B;&#x524D;&#x68C0;&#x67E5;&#xFF1A;backend &#x4E0D;&#x652F;&#x6301;&#x6267;&#x884C; &#x2192; &#x79FB;&#x9664; execute &#x5DE5;&#x5177;</span>
<span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> supports_execution(backend):
    tools.remove(<span class="hljs-string">&quot;execute&quot;</span>)
</code></pre>
<p>&#x8FD9;&#x53EA;&#x662F;<strong>&#x57FA;&#x4E8E;&#x73AF;&#x5883;&#x80FD;&#x529B;&#x7684;&#x9759;&#x6001;&#x8FC7;&#x6EE4;</strong>&#xFF0C;&#x4E0D;&#x7406;&#x89E3;&#x4EFB;&#x52A1;&#x8BED;&#x4E49;&#x3002;</p>
<p><strong>&#x5C42;&#x6B21; 3&#xFF1A;&#x8BED;&#x4E49;&#x68C0;&#x7D22;&#xFF08;&#x4E1A;&#x754C;&#x524D;&#x6CBF;&#xFF1A;Tool RAG&#xFF09;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># &#x4ECE; 500 &#x5DE5;&#x5177;&#x4E2D;&#xFF0C;&#x6839;&#x636E;&#x4EFB;&#x52A1;&#x8BED;&#x4E49;&#x68C0;&#x7D22; 10 &#x4E2A;&#x6700;&#x76F8;&#x5173;&#x7684;</span>
task = <span class="hljs-string">&quot;&#x67E5;&#x8BE2;&#x52A0;&#x62FF;&#x5927;&#x5BA2;&#x6237;&#x6570;&#x91CF;&quot;</span>
tools = tool_rag.semantic_search(task, top_k=<span class="hljs-number">10</span>)
<span class="hljs-comment"># &#x2192; [list_tables, get_schema, query_db, ...]</span>
<span class="hljs-comment"># &#x800C;&#x4E0D;&#x662F;&#x6CE8;&#x5165;&#x5168;&#x90E8; 500 &#x4E2A;&#x5DE5;&#x5177;&#x63CF;&#x8FF0;</span>
</code></pre>
<p>&#x52A0;&#x4E0A;&#x5B66;&#x4E60;&#x7CFB;&#x7EDF;&#xFF1A;&#x8BB0;&#x5F55;&#x6BCF;&#x79CD;&#x4EFB;&#x52A1;&#x7C7B;&#x578B;&#x4E0B;&#x54EA;&#x4E9B;&#x5DE5;&#x5177;&#x7EC4;&#x5408;&#x6210;&#x529F;&#x7387;&#x6700;&#x9AD8;&#xFF0C;&#x4E0B;&#x6B21;&#x4F18;&#x5148;&#x9009;&#x62E9;&#x3002;</p>
<h3 id="&#x8303;&#x5F0F;&#x542F;&#x53D1;"><a href="#&#x8303;&#x5F0F;&#x542F;&#x53D1;"></a>&#x8303;&#x5F0F;&#x542F;&#x53D1;</h3>
<pre><code>&#x6F14;&#x8FDB;&#x8DEF;&#x5F84;&#xFF1A;
  &#x9759;&#x6001;&#x5217;&#x8868; &#x2192; &#x80FD;&#x529B;&#x8FC7;&#x6EE4; &#x2192; &#x8BED;&#x4E49;&#x68C0;&#x7D22; &#x2192; &#x5B66;&#x4E60;&#x4F18;&#x5316;

&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;
  &#x5DE5;&#x5177;&#x9009;&#x62E9;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;&#x300C;&#x68C0;&#x7D22;&#x300D;&#x95EE;&#x9898;&#xFF0C;
  &#x548C; RAG &#x68C0;&#x7D22;&#x6587;&#x6863;&#x7684;&#x903B;&#x8F91;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#x3002;
</code></pre>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x4E09;&#xFF1A;&#x6D88;&#x606F;&#x5B8C;&#x6574;&#x6027; &#x2014; &#x534F;&#x8BAE;&#x7EA6;&#x675F;&#x4E0B;&#x7684;&#x81EA;&#x6108;"><a href="#&#x8303;&#x5F0F;&#x4E09;&#xFF1A;&#x6D88;&#x606F;&#x5B8C;&#x6574;&#x6027; &#x2014; &#x534F;&#x8BAE;&#x7EA6;&#x675F;&#x4E0B;&#x7684;&#x81EA;&#x6108;"></a>&#x8303;&#x5F0F;&#x4E09;&#xFF1A;&#x6D88;&#x606F;&#x5B8C;&#x6574;&#x6027; &#x2014; &#x534F;&#x8BAE;&#x7EA6;&#x675F;&#x4E0B;&#x7684;&#x81EA;&#x6108;</h2>
<h3 id="&#x6838;&#x5FC3;&#x547D;&#x9898;"><a href="#&#x6838;&#x5FC3;&#x547D;&#x9898;"></a>&#x6838;&#x5FC3;&#x547D;&#x9898;</h3>
<blockquote>
<p><strong>LLM API &#x6709;&#x4E25;&#x683C;&#x7684;&#x6D88;&#x606F;&#x534F;&#x8BAE;&#x3002;&#x72B6;&#x6001;&#x4E0D;&#x4E00;&#x81F4;&#x65F6;&#xFF0C;&#x7CFB;&#x7EDF;&#x5E94;&#x8BE5;&#x81EA;&#x6108;&#x800C;&#x4E0D;&#x662F;&#x5D29;&#x6E83;&#x3002;</strong></p>
</blockquote>
<h3 id="&#x95EE;&#x9898;&#x573A;&#x666F;"><a href="#&#x95EE;&#x9898;&#x573A;&#x666F;"></a>&#x95EE;&#x9898;&#x573A;&#x666F;</h3>
<p>OpenAI / Anthropic &#x7684; API &#x8981;&#x6C42;&#xFF1A;&#x6BCF;&#x4E2A; <code>tool_calls</code> &#x5FC5;&#x987B;&#x6709;&#x5BF9;&#x5E94;&#x7684; <code>ToolMessage</code>&#x3002;</p>
<pre><code class="language-python"><span class="hljs-comment"># &#x8FD9;&#x79CD;&#x6D88;&#x606F;&#x5E8F;&#x5217;&#x4F1A;&#x88AB; API &#x62D2;&#x7EDD;&#xFF08;400 Bad Request&#xFF09;</span>
messages = [
    AIMessage(tool_calls=[{<span class="hljs-string">&quot;id&quot;</span>: <span class="hljs-string">&quot;abc&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;search&quot;</span>, ...}]),
    <span class="hljs-comment"># &#x7F3A;&#x5C11; ToolMessage(tool_call_id=&quot;abc&quot;)</span>
    HumanMessage(content=<span class="hljs-string">&quot;&#x7B97;&#x4E86;&#x4E0D;&#x641C;&#x4E86;&quot;</span>)
]
</code></pre>
<p><strong>&#x4F55;&#x65F6;&#x51FA;&#x73B0;&#xFF1F;</strong> &#x7528;&#x6237;&#x4E2D;&#x65AD;&#x3001;&#x7F51;&#x7EDC;&#x8D85;&#x65F6;&#x3001;checkpoint &#x6062;&#x590D;&#x3001;&#x4EBA;&#x5DE5;&#x4ECB;&#x5165; &#x2014; &#x8FD9;&#x4E9B;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x90FD;&#x662F;&#x5E38;&#x89C1;&#x573A;&#x666F;&#x3002;</p>
<h3 id="deepagents &#x7684;&#x89E3;&#x6CD5;"><a href="#deepagents &#x7684;&#x89E3;&#x6CD5;"></a>deepagents &#x7684;&#x89E3;&#x6CD5;</h3>
<p>&#x6838;&#x5FC3;&#x5C31;&#x662F;&#xFF1A;&#x626B;&#x63CF;&#x6D88;&#x606F;&#x94FE;&#xFF0C;<strong>&#x5BF9;&#x6BCF;&#x4E2A;&#x6CA1;&#x6709;&#x914D;&#x5BF9; ToolMessage &#x7684; tool_call&#xFF0C;&#x8865;&#x4E00;&#x4E2A;</strong>&#x3002;</p>
<pre><code class="language-python"><span class="hljs-comment"># patch_tool_calls.py &#x7684;&#x5B8C;&#x6574;&#x903B;&#x8F91;</span>
<span class="hljs-keyword">for</span> i, msg <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(messages):
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">isinstance</span>(msg, AIMessage) <span class="hljs-keyword">and</span> msg.tool_calls:
        <span class="hljs-keyword">for</span> tc <span class="hljs-keyword">in</span> msg.tool_calls:
            <span class="hljs-comment"># &#x7528; tool_call_id &#x7CBE;&#x786E;&#x5339;&#x914D;&#x540E;&#x7EED;&#x7684; ToolMessage</span>
            found = <span class="hljs-built_in">next</span>(
                (m <span class="hljs-keyword">for</span> m <span class="hljs-keyword">in</span> messages[i:]
                 <span class="hljs-keyword">if</span> m.<span class="hljs-built_in">type</span> == <span class="hljs-string">&quot;tool&quot;</span> <span class="hljs-keyword">and</span> m.tool_call_id == tc[<span class="hljs-string">&quot;id&quot;</span>]),
                <span class="hljs-literal">None</span>
            )
            <span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> found:
                <span class="hljs-comment"># &#x8865;&#x4E00;&#x6761;</span>
                patched.append(ToolMessage(
                    content=<span class="hljs-string">f&quot;Tool call <span class="hljs-subst">{tc[<span class="hljs-string">&apos;name&apos;</span>]}</span> was cancelled&quot;</span>,
                    tool_call_id=tc[<span class="hljs-string">&quot;id&quot;</span>],
                    name=tc[<span class="hljs-string">&quot;name&quot;</span>]
                ))
</code></pre>
<p><strong>&#x5339;&#x914D;&#x673A;&#x5236;&#xFF1A;</strong> &#x7ED3;&#x6784;&#x5316;&#x5C5E;&#x6027;&#xFF08;<code>msg.tool_call_id</code>&#xFF09;&#xFF0C;&#x4E0D;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x641C;&#x7D22;&#x3002;</p>
<h3 id="&#x8303;&#x5F0F;&#x542F;&#x53D1;"><a href="#&#x8303;&#x5F0F;&#x542F;&#x53D1;"></a>&#x8303;&#x5F0F;&#x542F;&#x53D1;</h3>
<pre><code>&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#xFF1A;
  &#x7CFB;&#x7EDF;&#x5E94;&#x8BE5;&#x5047;&#x8BBE;&#x72B6;&#x6001;&#x53EF;&#x80FD;&#x4E0D;&#x4E00;&#x81F4;&#xFF0C;&#x5E76;&#x81EA;&#x52A8;&#x4FEE;&#x590D;&#xFF0C;
  &#x800C;&#x4E0D;&#x662F;&#x5047;&#x8BBE;&#x4E00;&#x5207;&#x5B8C;&#x7F8E;&#xFF0C;&#x51FA;&#x9519;&#x65F6;&#x5D29;&#x6E83;&#x3002;

&#x7C7B;&#x6BD4;&#xFF1A;
  TCP &#x534F;&#x8BAE;&#x4E0D;&#x5047;&#x8BBE;&#x7F51;&#x7EDC;&#x53EF;&#x9760; &#x2192; &#x6709;&#x91CD;&#x4F20;&#x673A;&#x5236;
  Agent &#x7CFB;&#x7EDF;&#x4E0D;&#x5E94;&#x5047;&#x8BBE;&#x6D88;&#x606F;&#x5B8C;&#x6574; &#x2192; &#x6709;&#x4FEE;&#x8865;&#x673A;&#x5236;
</code></pre>
<p>&#x6280;&#x672F;&#x96BE;&#x5EA6;&#x4F4E;&#xFF08;30 &#x884C;&#x4EE3;&#x7801;&#xFF09;&#xFF0C;&#x4F46;&#x591A;&#x6570;&#x6846;&#x67B6;&#x6CA1;&#x505A;&#x3002;&#x8FD9;&#x4E0D;&#x662F;&#x6280;&#x672F;&#x95EE;&#x9898;&#xFF0C;&#x662F;<strong>&#x9C81;&#x68D2;&#x6027;&#x610F;&#x8BC6;</strong>&#x95EE;&#x9898;&#x3002;</p>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x56DB;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x751F;&#x547D;&#x5468;&#x671F; &#x2014; &#x538B;&#x7F29;&#x3001;&#x5378;&#x8F7D;&#x3001;&#x6062;&#x590D;"><a href="#&#x8303;&#x5F0F;&#x56DB;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x751F;&#x547D;&#x5468;&#x671F; &#x2014; &#x538B;&#x7F29;&#x3001;&#x5378;&#x8F7D;&#x3001;&#x6062;&#x590D;"></a>&#x8303;&#x5F0F;&#x56DB;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x751F;&#x547D;&#x5468;&#x671F; &#x2014; &#x538B;&#x7F29;&#x3001;&#x5378;&#x8F7D;&#x3001;&#x6062;&#x590D;</h2>
<h3 id="&#x6838;&#x5FC3;&#x547D;&#x9898;"><a href="#&#x6838;&#x5FC3;&#x547D;&#x9898;"></a>&#x6838;&#x5FC3;&#x547D;&#x9898;</h3>
<blockquote>
<p><strong>Agent &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x662F;&#x6709;&#x9650;&#x5185;&#x5B58;&#x3002;&#x957F;&#x4EFB;&#x52A1;&#x9700;&#x8981;&quot;&#x865A;&#x62DF;&#x5185;&#x5B58;&quot;&#x673A;&#x5236;&#x3002;</strong></p>
</blockquote>
<h3 id="&#x7C7B;&#x6BD4;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;"><a href="#&#x7C7B;&#x6BD4;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;"></a>&#x7C7B;&#x6BD4;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;</h3>
<table>
<thead>
<tr>
<th>OS &#x6982;&#x5FF5;</th>
<th>Agent &#x5BF9;&#x5E94;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7269;&#x7406;&#x5185;&#x5B58;</td>
<td>Context Window</td>
</tr>
<tr>
<td>&#x865A;&#x62DF;&#x5185;&#x5B58;</td>
<td>&#x5386;&#x53F2;&#x5378;&#x8F7D;&#x5230;&#x6587;&#x4EF6;</td>
</tr>
<tr>
<td>&#x9875;&#x9762;&#x7F6E;&#x6362;</td>
<td>&#x81EA;&#x52A8;&#x603B;&#x7ED3; + &#x622A;&#x65AD;</td>
</tr>
<tr>
<td>&#x7F3A;&#x9875;&#x4E2D;&#x65AD;</td>
<td>ContextOverflowError</td>
</tr>
</tbody>
</table>
<h3 id="deepagents &#x7684;&#x5B9E;&#x73B0;"><a href="#deepagents &#x7684;&#x5B9E;&#x73B0;"></a>deepagents &#x7684;&#x5B9E;&#x73B0;</h3>
<p><strong>&#x4E09;&#x9053;&#x9632;&#x7EBF;&#xFF1A;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># &#x9632;&#x7EBF; 1&#xFF1A;&#x622A;&#x65AD;&#x65E7;&#x6D88;&#x606F;&#x7684;&#x5927; tool args</span>
<span class="hljs-comment"># &#x65E9;&#x671F;&#x7684; tool &#x8FD4;&#x56DE;&#xFF08;&#x5982; 5000 &#x884C;&#x6587;&#x4EF6;&#x5185;&#x5BB9;&#xFF09;&#x88AB;&#x622A;&#x65AD;</span>
<span class="hljs-keyword">for</span> msg <span class="hljs-keyword">in</span> old_messages:
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(msg.tool_args) &gt; threshold:
        msg.tool_args = msg.tool_args[:<span class="hljs-number">1000</span>] + <span class="hljs-string">&quot;...[truncated]&quot;</span>

<span class="hljs-comment"># &#x9632;&#x7EBF; 2&#xFF1A;&#x4E3B;&#x52A8;&#x603B;&#x7ED3;&#xFF08;85% &#x9608;&#x503C;&#xFF09;</span>
total_tokens = count_tokens(messages, tools)
<span class="hljs-keyword">if</span> total_tokens &gt; <span class="hljs-number">0.85</span> * model.max_tokens:
    summary = model.summarize(messages[:cutoff])
    backend.write(<span class="hljs-string">f&quot;/conversation_history/<span class="hljs-subst">{thread_id}</span>.md&quot;</span>, full_history)
    messages = [summary_message] + messages[cutoff:]

<span class="hljs-comment"># &#x9632;&#x7EBF; 3&#xFF1A;&#x88AB;&#x52A8;&#x964D;&#x7EA7;&#xFF08;ContextOverflowError&#xFF09;</span>
<span class="hljs-keyword">try</span>:
    response = model.invoke(messages)
<span class="hljs-keyword">except</span> ContextOverflowError:
    <span class="hljs-comment"># &#x5F3A;&#x5236;&#x8FDB;&#x5165;&#x603B;&#x7ED3;&#x6D41;&#x7A0B;</span>
    summary = summarize(messages)
    response = model.invoke([summary] + recent_messages)
</code></pre>
<h3 id="&#x8303;&#x5F0F;&#x542F;&#x53D1;"><a href="#&#x8303;&#x5F0F;&#x542F;&#x53D1;"></a>&#x8303;&#x5F0F;&#x542F;&#x53D1;</h3>
<pre><code>&#x6838;&#x5FC3;&#x539F;&#x5219;&#xFF1A;
  1. &#x5206;&#x5C42;&#x7BA1;&#x7406; &#x2014; &#x70ED;&#x6570;&#x636E;&#x5728; context&#xFF0C;&#x51B7;&#x6570;&#x636E;&#x5378;&#x8F7D;&#x5230;&#x5B58;&#x50A8;
  2. &#x9884;&#x9632;&#x4F18;&#x5148; &#x2014; &#x4E3B;&#x52A8;&#x538B;&#x7F29;&#xFF08;85% &#x9608;&#x503C;&#xFF09;&#xFF0C;&#x800C;&#x975E;&#x7B49;&#x6EA2;&#x51FA;
  3. &#x4F18;&#x96C5;&#x964D;&#x7EA7; &#x2014; &#x6EA2;&#x51FA;&#x65F6;&#x81EA;&#x52A8;&#x603B;&#x7ED3;&#x91CD;&#x8BD5;&#xFF0C;&#x800C;&#x975E;&#x76F4;&#x63A5;&#x5931;&#x8D25;
  4. &#x53EF;&#x6062;&#x590D; &#x2014; &#x5386;&#x53F2;&#x5199;&#x5165;&#x6587;&#x4EF6;&#xFF0C;Agent &#x53EF;&#x4EE5;&#x56DE;&#x6EAF;

&#x7C7B;&#x6BD4;&#xFF1A;
  &#x4E0D;&#x662F;&quot;&#x5185;&#x5B58;&#x4E0D;&#x591F;&#x5C31;&#x5D29;&#x6E83;&quot;&#xFF0C;
  &#x800C;&#x662F;&quot;&#x5185;&#x5B58;&#x4E0D;&#x591F;&#x5C31;&#x6362;&#x9875;&#x5230;&#x78C1;&#x76D8;&quot;&#x3002;
</code></pre>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x4E94;&#xFF1A;&#x53EF;&#x7EC4;&#x5408;&#x6027; &#x2014; &#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;"><a href="#&#x8303;&#x5F0F;&#x4E94;&#xFF1A;&#x53EF;&#x7EC4;&#x5408;&#x6027; &#x2014; &#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;"></a>&#x8303;&#x5F0F;&#x4E94;&#xFF1A;&#x53EF;&#x7EC4;&#x5408;&#x6027; &#x2014; &#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;</h2>
<h3 id="&#x6838;&#x5FC3;&#x547D;&#x9898;"><a href="#&#x6838;&#x5FC3;&#x547D;&#x9898;"></a>&#x6838;&#x5FC3;&#x547D;&#x9898;</h3>
<blockquote>
<p><strong>Agent &#x7684;&#x529F;&#x80FD;&#x5E94;&#x8BE5;&#x53EF;&#x4EE5;&#x72EC;&#x7ACB;&#x5F00;&#x53D1;&#x3001;&#x6D4B;&#x8BD5;&#x3001;&#x7EC4;&#x5408;&#x3002;</strong></p>
</blockquote>
<h3 id="&#x95EE;&#x9898;&#xFF1A;&#x529F;&#x80FD;&#x8026;&#x5408;"><a href="#&#x95EE;&#x9898;&#xFF1A;&#x529F;&#x80FD;&#x8026;&#x5408;"></a>&#x95EE;&#x9898;&#xFF1A;&#x529F;&#x80FD;&#x8026;&#x5408;</h3>
<pre><code class="language-python"><span class="hljs-comment"># &#x574F;&#xFF1A;&#x6240;&#x6709;&#x529F;&#x80FD;&#x6DF7;&#x5728;&#x4E00;&#x8D77;</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Agent</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">run</span>(<span class="hljs-params">self</span>):</span>
        self.patch_messages()     <span class="hljs-comment"># &#x72B6;&#x6001;&#x4FEE;&#x8865;</span>
        self.filter_tools()       <span class="hljs-comment"># &#x5DE5;&#x5177;&#x8FC7;&#x6EE4;</span>
        self.inject_skills()      <span class="hljs-comment"># &#x6280;&#x80FD;&#x6CE8;&#x5165;</span>
        self.check_tokens()       <span class="hljs-comment"># &#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;</span>
        response = self.call_llm()
        self.evict_large_output() <span class="hljs-comment"># &#x5927;&#x8F93;&#x51FA;&#x5378;&#x8F7D;</span>
        <span class="hljs-keyword">return</span> response
</code></pre>
<p>&#x95EE;&#x9898;&#xFF1A;&#x52A0;&#x4E00;&#x4E2A;&#x529F;&#x80FD;&#x8981;&#x6539;&#x6838;&#x5FC3;&#x5FAA;&#x73AF;&#xFF0C;&#x6D4B;&#x8BD5;&#x8981;&#x6D4B;&#x6574;&#x4E2A;&#x7CFB;&#x7EDF;&#x3002;</p>
<h3 id="&#x89E3;&#x6CD5;&#xFF1A;&#x4E2D;&#x95F4;&#x4EF6;&#x6808;"><a href="#&#x89E3;&#x6CD5;&#xFF1A;&#x4E2D;&#x95F4;&#x4EF6;&#x6808;"></a>&#x89E3;&#x6CD5;&#xFF1A;&#x4E2D;&#x95F4;&#x4EF6;&#x6808;</h3>
<pre><code class="language-python"><span class="hljs-comment"># deepagents &#x7684;&#x5B9E;&#x9645;&#x88C5;&#x914D;&#xFF08;graph.py&#xFF09;</span>
middleware_stack = [
    TodoListMiddleware(),           <span class="hljs-comment"># &#x89C4;&#x5212;</span>
    SkillsMiddleware(...),          <span class="hljs-comment"># &#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;</span>
    FilesystemMiddleware(...),      <span class="hljs-comment"># &#x5DE5;&#x5177; + &#x5927;&#x8F93;&#x51FA;&#x5378;&#x8F7D;</span>
    SubAgentMiddleware(...),        <span class="hljs-comment"># &#x5B50; agent</span>
    SummarizationMiddleware(...),   <span class="hljs-comment"># &#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;</span>
    PatchToolCallsMiddleware(),     <span class="hljs-comment"># &#x72B6;&#x6001;&#x4FEE;&#x8865;</span>
    MemoryMiddleware(...),          <span class="hljs-comment"># &#x957F;&#x671F;&#x8BB0;&#x5FC6;</span>
    HumanInTheLoopMiddleware(...)   <span class="hljs-comment"># &#x4EBA;&#x5DE5;&#x4ECB;&#x5165;</span>
]
</code></pre>
<p>&#x6BCF;&#x4E2A;&#x4E2D;&#x95F4;&#x4EF6;&#x6709;&#x4E09;&#x4E2A;&#x94A9;&#x5B50;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Middleware</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">before_agent</span>(<span class="hljs-params">self, state</span>):</span>
        <span class="hljs-string">&quot;&quot;&quot;Agent &#x8FD0;&#x884C;&#x524D;&#xFF1A;&#x4FEE;&#x6539; state&quot;&quot;&quot;</span>
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">wrap_model_call</span>(<span class="hljs-params">self, request, handler</span>):</span>
        <span class="hljs-string">&quot;&quot;&quot;&#x6BCF;&#x6B21;&#x8C03;&#x7528; LLM &#x524D;&#xFF1A;&#x4FEE;&#x6539; request&#xFF08;tools&#x3001;messages&#x3001;system_prompt&#xFF09;&quot;&quot;&quot;</span>
    
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">wrap_tool_call</span>(<span class="hljs-params">self, request, handler</span>):</span>
        <span class="hljs-string">&quot;&quot;&quot;&#x6BCF;&#x6B21;&#x6267;&#x884C;&#x5DE5;&#x5177;&#x540E;&#xFF1A;&#x62E6;&#x622A;&#x548C;&#x4FEE;&#x6539;&#x7ED3;&#x679C;&quot;&quot;&quot;</span>
</code></pre>
<h3 id="&#x8303;&#x5F0F;&#x542F;&#x53D1;"><a href="#&#x8303;&#x5F0F;&#x542F;&#x53D1;"></a>&#x8303;&#x5F0F;&#x542F;&#x53D1;</h3>
<pre><code>&#x6838;&#x5FC3;&#x539F;&#x5219;&#xFF1A;
  1. &#x6B63;&#x4EA4;&#x5206;&#x89E3; &#x2014; &#x6BCF;&#x4E2A;&#x4E2D;&#x95F4;&#x4EF6;&#x53EA;&#x8D1F;&#x8D23;&#x4E00;&#x4EF6;&#x4E8B;
  2. &#x987A;&#x5E8F;&#x7EC4;&#x5408; &#x2014; &#x4E2D;&#x95F4;&#x4EF6;&#x6309;&#x987A;&#x5E8F;&#x6267;&#x884C;&#xFF0C;&#x5F62;&#x6210;&#x5904;&#x7406;&#x7BA1;&#x9053;
  3. &#x72EC;&#x7ACB;&#x6D4B;&#x8BD5; &#x2014; &#x6BCF;&#x4E2A;&#x4E2D;&#x95F4;&#x4EF6;&#x53EF;&#x4EE5;&#x5355;&#x72EC;&#x6D4B;&#x8BD5;
  4. &#x53EF;&#x63D2;&#x62D4; &#x2014; &#x4E0D;&#x9700;&#x8981;&#x7684;&#x529F;&#x80FD;&#x76F4;&#x63A5;&#x79FB;&#x9664;

&#x8FD9;&#x662F; Agent &#x7CFB;&#x7EDF;&#x4E2D;&#x771F;&#x6B63;&#x7684;&#x67B6;&#x6784;&#x521B;&#x65B0;&#x3002;
&#x4E0D;&#x5728;&#x4E8E;&#x67D0;&#x4E2A;&#x4E2D;&#x95F4;&#x4EF6;&#x505A;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;
&#x5728;&#x4E8E;&#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;&#x672C;&#x8EAB;&#x7684;&#x53EF;&#x7EC4;&#x5408;&#x6027;&#x3002;
</code></pre>
<hr>
<h2 id="&#x8303;&#x5F0F;&#x4E4B;&#x5916;&#xFF1A;&#x51E0;&#x4E2A;&#x503C;&#x5F97;&#x8FA8;&#x6790;&#x7684;&#x6982;&#x5FF5;"><a href="#&#x8303;&#x5F0F;&#x4E4B;&#x5916;&#xFF1A;&#x51E0;&#x4E2A;&#x503C;&#x5F97;&#x8FA8;&#x6790;&#x7684;&#x6982;&#x5FF5;"></a>&#x8303;&#x5F0F;&#x4E4B;&#x5916;&#xFF1A;&#x51E0;&#x4E2A;&#x503C;&#x5F97;&#x8FA8;&#x6790;&#x7684;&#x6982;&#x5FF5;</h2>
<h3 id="Cognitive Blueprint&#xFF1A;&#x914D;&#x7F6E; vs &#x5E73;&#x53F0;"><a href="#Cognitive Blueprint&#xFF1A;&#x914D;&#x7F6E; vs &#x5E73;&#x53F0;"></a>Cognitive Blueprint&#xFF1A;&#x914D;&#x7F6E; vs &#x5E73;&#x53F0;</h3>
<p>Cognitive Blueprint &#x7684;&#x601D;&#x60F3;&#x662F;&#x628A; Agent &#x7684;&#x914D;&#x7F6E;&#xFF08;&#x8EAB;&#x4EFD;&#x3001;&#x5DE5;&#x5177;&#x3001;&#x884C;&#x4E3A;&#xFF09;&#x548C;&#x8FD0;&#x884C;&#x65F6;&#x5F15;&#x64CE;<strong>&#x5F7B;&#x5E95;&#x89E3;&#x8026;</strong>&#xFF1A;</p>
<pre><code class="language-yaml"><span class="hljs-comment"># sql_expert.yaml &#x2014; &#x914D;&#x7F6E;&#x5C42;</span>
<span class="hljs-attr">cognitive_blueprint:</span>
  <span class="hljs-attr">identity:</span> { <span class="hljs-attr">name:</span> <span class="hljs-string">&quot;SQL-Expert&quot;</span> }
  <span class="hljs-attr">tools:</span> [{ <span class="hljs-attr">protocol:</span> <span class="hljs-string">&quot;mcp://sqlite/query&quot;</span> }]
  <span class="hljs-attr">behavior:</span> { <span class="hljs-attr">planning:</span> { <span class="hljs-attr">strategy:</span> <span class="hljs-string">&quot;hierarchical&quot;</span> } }
</code></pre>
<pre><code class="language-python"><span class="hljs-comment"># runtime.py &#x2014; &#x8FD0;&#x884C;&#x65F6;&#x5C42;&#xFF08;&#x901A;&#x7528;&#xFF09;</span>
runtime = CognitiveRuntime()
agent = runtime.load_blueprint(<span class="hljs-string">&quot;sql_expert.yaml&quot;</span>)
</code></pre>
<p><strong>&#x7406;&#x60F3;&#x5F88;&#x7F8E;&#x597D;&#xFF1A;</strong> &#x914D;&#x7F6E;&#x5373;&#x4EA7;&#x54C1;&#xFF0C;&#x53EF;&#x5206;&#x53D1;&#x3001;&#x53EF;&#x7248;&#x672C;&#x5316;&#x3001;&#x8DE8;&#x8BED;&#x8A00;&#x590D;&#x7528;&#x3002;</p>
<p><strong>&#x73B0;&#x5B9E;&#xFF08;2026.03&#xFF09;&#xFF1A;</strong></p>
<ul>
<li>&#x274C; &#x6CA1;&#x6709;&#x6210;&#x719F;&#x7684;&#x901A;&#x7528;&#x8FD0;&#x884C;&#x65F6;&#x5F15;&#x64CE;</li>
<li>&#x274C; &#x6CA1;&#x6709;&#x6807;&#x51C6;&#x7684; blueprint schema</li>
<li>&#x274C; Cursor&#x3001;Claude Code &#x90FD;&#x4E0D;&#x6D88;&#x8D39;&#x8FD9;&#x4E2A;&#x683C;&#x5F0F;</li>
</ul>
<p><strong>&#x4F46;&#x601D;&#x60F3;&#x5DF2;&#x7ECF;&#x5728;&#x6E17;&#x900F;&#xFF1A;</strong></p>
<ul>
<li>Cursor &#x7684; <code>.cursor/rules/</code> &#x2014; &#x58F0;&#x660E;&#x5F0F; Agent &#x884C;&#x4E3A;&#x914D;&#x7F6E;</li>
<li>Claude Code &#x7684; <code>CLAUDE.md</code> &#x2014; Markdown &#x683C;&#x5F0F;&#x7684; Agent &#x8EAB;&#x4EFD;</li>
<li>deepagents &#x7684; <code>AGENTS.md</code> + <code>SKILL.md</code> &#x2014; &#x5206;&#x5C42;&#x914D;&#x7F6E;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x90FD;&#x662F; Blueprint &#x7684;<strong>&#x96CF;&#x5F62;</strong>&#xFF0C;&#x53EA;&#x662F;&#x7ED1;&#x5B9A;&#x4E86;&#x5404;&#x81EA;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x3002;&#x771F;&#x6B63;&#x7684;&#x7A81;&#x7834;&#x9700;&#x8981;&#x4E00;&#x4E2A;<strong>&#x901A;&#x7528;&#x8FD0;&#x884C;&#x65F6;&#x6807;&#x51C6;</strong>&#x3002;</p>
<p><strong>&#x5982;&#x679C;&#x7528;&#x4E8E;&#x516C;&#x53F8;&#x5185;&#x90E8;&#x4F4E;&#x4EE3;&#x7801;&#xFF1A;</strong> &#x4F60;&#x9700;&#x8981;&#x81EA;&#x5EFA;&#x8FD0;&#x884C;&#x65F6;&#x5F15;&#x64CE;&#x3002;Blueprint &#x4E0D;&#x662F;&#x4EA7;&#x54C1;&#xFF0C;&#x662F;&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;&#x3002;</p>
<h3 id="&#x6D41;&#x5F0F;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x4FE1;&#x606F;&#x6D41;&#x63A7;&#x5236;"><a href="#&#x6D41;&#x5F0F;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x4FE1;&#x606F;&#x6D41;&#x63A7;&#x5236;"></a>&#x6D41;&#x5F0F;&#x7684;&#x672C;&#x8D28;&#xFF1A;&#x4FE1;&#x606F;&#x6D41;&#x63A7;&#x5236;</h3>
<p>&#x6D41;&#x5F0F;&#x4E0D;&#x662F;&quot;&#x6700;&#x540E;&#x4E00;&#x6B65;&#x9010;&#x5B57;&#x8F93;&#x51FA;&quot;&#xFF0C;&#x800C;&#x662F;<strong>&#x5BF9;&#x6574;&#x4E2A;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x7684;&#x9009;&#x62E9;&#x6027;&#x5C55;&#x793A;</strong>&#x3002;</p>
<p><strong>&#x56DB;&#x4E2A;&#x7EF4;&#x5EA6;&#xFF1A;</strong></p>
<table>
<thead>
<tr>
<th>&#x7EF4;&#x5EA6;</th>
<th>&#x9009;&#x9879;</th>
<th>&#x4EF7;&#x503C;</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>&#x7C92;&#x5EA6;</strong></td>
<td>token / message / task</td>
<td>&#x4E0D;&#x540C;&#x573A;&#x666F;&#x9700;&#x8981;&#x4E0D;&#x540C;&#x5BC6;&#x5EA6;</td>
</tr>
<tr>
<td><strong>&#x5185;&#x5BB9;</strong></td>
<td>thinking / tool_call / response</td>
<td>&#x9690;&#x85CF;&#x6216;&#x5C55;&#x793A;&#x54EA;&#x4E9B;&#x73AF;&#x8282;</td>
</tr>
<tr>
<td><strong>&#x53D7;&#x4F17;</strong></td>
<td>developer / user / audit</td>
<td>&#x540C;&#x4E00;&#x8FC7;&#x7A0B;&#xFF0C;&#x4E0D;&#x540C;&#x5448;&#x73B0;</td>
</tr>
<tr>
<td><strong>&#x805A;&#x5408;</strong></td>
<td>&#x9010;&#x6761; / &#x6279;&#x91CF; / &#x6458;&#x8981;</td>
<td>&#x51CF;&#x5C11;&#x4FE1;&#x606F;&#x8FC7;&#x8F7D;</td>
</tr>
</tbody>
</table>
<p><strong>&#x5B9E;&#x9645;&#x4F8B;&#x5B50;&#xFF1A;</strong> 50 &#x6B21; <code>read_file</code> &#x8C03;&#x7528;</p>
<pre><code>&#x5168;&#x91CF;&#x5C55;&#x793A;&#xFF08;&#x5F00;&#x53D1;&#x8005;&#xFF09;&#xFF1A;
  &#x1F527; read_file(a.py)  &#x2713;
  &#x1F527; read_file(b.py)  &#x2713;
  ... 50 &#x6761;

&#x805A;&#x5408;&#x5C55;&#x793A;&#xFF08;&#x7528;&#x6237;&#xFF09;&#xFF1A;
  &#x1F4C1; &#x6B63;&#x5728;&#x8BFB;&#x53D6; 50 &#x4E2A;&#x6587;&#x4EF6;... &#x2713;

&#x5BA1;&#x8BA1;&#x8BB0;&#x5F55;&#xFF1A;
  {&quot;ts&quot;: &quot;...&quot;, &quot;tool&quot;: &quot;read_file&quot;, &quot;file&quot;: &quot;a.py&quot;, &quot;tokens&quot;: 1200}
  ... 50 &#x6761; JSON
</code></pre>
<p><strong>deepagents &#x652F;&#x6301;&#x57FA;&#x7840;&#x6D41;&#x5F0F;</strong>&#xFF08;&#x7EE7;&#x627F; LangGraph &#x7684; <code>stream_mode</code>&#xFF09;&#xFF0C;&#x4F46;<strong>&#x9009;&#x62E9;&#x6027;&#x8FC7;&#x6EE4;&#x9700;&#x8981;&#x5E94;&#x7528;&#x5C42;&#x5B9E;&#x73B0;</strong>&#x3002;</p>
<hr>
<h2 id="&#x603B;&#x7ED3;&#xFF1A;&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x7684;&#x5173;&#x7CFB;"><a href="#&#x603B;&#x7ED3;&#xFF1A;&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x7684;&#x5173;&#x7CFB;"></a>&#x603B;&#x7ED3;&#xFF1A;&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x7684;&#x5173;&#x7CFB;</h2>
<pre><code>&#x8303;&#x5F0F;&#x4E00;&#xFF08;&#x6CE8;&#x610F;&#x529B;&#x7ECF;&#x6D4E;&#x5B66;&#xFF09;
    &#x2193; &#x89E3;&#x51B3;&quot;&#x7ED9; LLM &#x4EC0;&#x4E48;&quot;
&#x8303;&#x5F0F;&#x4E8C;&#xFF08;&#x5DE5;&#x5177;&#x9009;&#x62E9;&#xFF09;
    &#x2193; &#x89E3;&#x51B3;&quot;&#x7ED9; LLM &#x54EA;&#x4E9B;&#x5DE5;&#x5177;&quot;
&#x8303;&#x5F0F;&#x4E09;&#xFF08;&#x6D88;&#x606F;&#x5B8C;&#x6574;&#x6027;&#xFF09;
    &#x2193; &#x89E3;&#x51B3;&quot;&#x6D88;&#x606F;&#x683C;&#x5F0F;&#x6B63;&#x786E;&quot;
&#x8303;&#x5F0F;&#x56DB;&#xFF08;&#x4E0A;&#x4E0B;&#x6587;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF09;
    &#x2193; &#x89E3;&#x51B3;&quot;&#x957F;&#x671F;&#x8FD0;&#x884C;&#x4E0D;&#x5D29;&#x6E83;&quot;
&#x8303;&#x5F0F;&#x4E94;&#xFF08;&#x53EF;&#x7EC4;&#x5408;&#x6027;&#xFF09;
    &#x2193; &#x89E3;&#x51B3;&quot;&#x5982;&#x4F55;&#x4F18;&#x96C5;&#x5730;&#x5B9E;&#x73B0;&#x4EE5;&#x4E0A;&#x6240;&#x6709;&quot;
</code></pre>
<p><strong>&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x90FD;&#x6307;&#x5411;&#x540C;&#x4E00;&#x4E2A;&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;</strong></p>
<blockquote>
<p><strong>&#x5728;&#x6709;&#x9650;&#x7684; context window &#x5185;&#xFF0C;&#x5982;&#x4F55;&#x9AD8;&#x6548;&#x5730;&#x5B8C;&#x6210;&#x5F00;&#x653E;&#x5F0F;&#x4EFB;&#x52A1;&#xFF1F;</strong></p>
</blockquote>
<p>&#x8FD9;&#x4E2A;&#x7EA6;&#x675F;&#x50AC;&#x751F;&#x4E86;&#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;&#xFF08;&#x51CF;&#x5C11;&#x8F93;&#x5165;&#xFF09;&#x3001;&#x5DE5;&#x5177;&#x68C0;&#x7D22;&#xFF08;&#x7CBE;&#x9009;&#x5DE5;&#x5177;&#xFF09;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#xFF08;&#x7BA1;&#x7406;&#x5386;&#x53F2;&#xFF09;&#x3001;&#x6D88;&#x606F;&#x4FEE;&#x8865;&#xFF08;&#x4FDD;&#x8BC1;&#x683C;&#x5F0F;&#xFF09;&#x3001;&#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;&#xFF08;&#x7EC4;&#x5408;&#x80FD;&#x529B;&#xFF09;&#x3002;</p>
<p><strong>deepagents &#x7684;&#x8D21;&#x732E;&#xFF1A;</strong> &#x7528;&#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;&#x628A;&#x8FD9;&#x4E94;&#x4E2A;&#x8303;&#x5F0F;&#x7684;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x6253;&#x5305;&#x6210;&#x5F00;&#x7BB1;&#x5373;&#x7528;&#x7684;&#x65B9;&#x6848;&#x3002;&#x4E0D;&#x662F;&#x6BCF;&#x4E2A;&#x8303;&#x5F0F;&#x90FD;&#x505A;&#x5230;&#x4E86;&#x4E1A;&#x754C;&#x6700;&#x4F18;&#xFF0C;&#x4F46;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;<strong>&#x53EF;&#x7EC4;&#x5408;&#x7684;&#x57FA;&#x5EA7;</strong>&#x3002;</p>
<hr>
<h2 id="&#x9644;&#x5F55;&#xFF1A;deepagents &#x771F;&#x5B9E;&#x5B9A;&#x4F4D;"><a href="#&#x9644;&#x5F55;&#xFF1A;deepagents &#x771F;&#x5B9E;&#x5B9A;&#x4F4D;"></a>&#x9644;&#x5F55;&#xFF1A;deepagents &#x771F;&#x5B9E;&#x5B9A;&#x4F4D;</h2>
<pre><code>deepagents &#x2260; &#x6280;&#x672F;&#x9769;&#x65B0;
deepagents = &#x5DE5;&#x7A0B;&#x6574;&#x5408; + &#x6807;&#x51C6;&#x7EA6;&#x5B9A;

&#x8D21;&#x732E;&#x5206;&#x89E3;&#xFF1A;
  60% &#x2014; &#x628A;&#x5206;&#x6563;&#x7684;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x6253;&#x5305;&#xFF08;&#x4E0A;&#x4E0B;&#x6587;&#x538B;&#x7F29;&#x3001;&#x72B6;&#x6001;&#x4FEE;&#x8865;&#x3001;&#x6E10;&#x8FDB;&#x5F0F;&#x62AB;&#x9732;&#xFF09;
  25% &#x2014; &#x4E2D;&#x95F4;&#x4EF6;&#x67B6;&#x6784;&#xFF08;&#x8303;&#x5F0F;&#x4E94;&#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;&#xFF09;
  15% &#x2014; &#x6807;&#x51C6;&#x7EA6;&#x5B9A;&#xFF08;SKILL.md &#x683C;&#x5F0F;&#x3001;Backend &#x534F;&#x8BAE;&#xFF09;
</code></pre>
<p>&#x7C7B;&#x6BD4;&#xFF1A;Django &#x6CA1;&#x6709;&#x53D1;&#x660E; ORM&#x3001;&#x6A21;&#x677F;&#x5F15;&#x64CE;&#x3001;&#x8DEF;&#x7531;&#x7CFB;&#x7EDF;&#xFF0C;&#x4F46;&#x628A;&#x5B83;&#x4EEC;&#x6574;&#x5408;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x9AD8;&#x6548;&#x7684;&#x6846;&#x67B6;&#x3002;deepagents &#x5BF9; Agent &#x7CFB;&#x7EDF;&#x505A;&#x4E86;&#x540C;&#x6837;&#x7684;&#x4E8B;&#x3002;</p>
<hr>
<p><em>&#x672C;&#x6587;&#x57FA;&#x4E8E; deepagents &#x6E90;&#x7801;&#x5206;&#x6790;&#x548C; 2026 &#x5E74;&#x4E1A;&#x754C;&#x5B9E;&#x8DF5;&#x3002;&#x6838;&#x5FC3;&#x89C2;&#x70B9;&#xFF1A;Agent &#x7CFB;&#x7EDF;&#x7684;&#x672C;&#x8D28;&#x6311;&#x6218;&#x662F;&#x5728;&#x6709;&#x9650; context window &#x5185;&#x9AD8;&#x6548;&#x5B8C;&#x6210;&#x5F00;&#x653E;&#x5F0F;&#x4EFB;&#x52A1;&#x3002;&#x6240;&#x6709;&#x8BBE;&#x8BA1;&#x6A21;&#x5F0F;&#x90FD;&#x56F4;&#x7ED5;&#x8FD9;&#x4E2A;&#x7EA6;&#x675F;&#x5C55;&#x5F00;&#x3002;</em></p>
`,n=[{level:1,title:"Agent 系统的五个核心范式",children:[{level:2,title:"引言",children:[]},{level:2,title:"范式一：注意力经济学 — Less is More",children:[{level:3,title:"核心命题",children:[]},{level:3,title:"数学基础",children:[]},{level:3,title:"范式解法：渐进式披露（Progressive Disclosure）",children:[]},{level:3,title:"范式启发",children:[]}]},{level:2,title:"范式二：工具选择 — 从静态注册到动态检索",children:[{level:3,title:"核心命题",children:[]},{level:3,title:"三个层次",children:[]},{level:3,title:"范式启发",children:[]}]},{level:2,title:"范式三：消息完整性 — 协议约束下的自愈",children:[{level:3,title:"核心命题",children:[]},{level:3,title:"问题场景",children:[]},{level:3,title:"deepagents 的解法",children:[]},{level:3,title:"范式启发",children:[]}]},{level:2,title:"范式四：上下文生命周期 — 压缩、卸载、恢复",children:[{level:3,title:"核心命题",children:[]},{level:3,title:"类比操作系统",children:[]},{level:3,title:"deepagents 的实现",children:[]},{level:3,title:"范式启发",children:[]}]},{level:2,title:"范式五：可组合性 — 中间件模式",children:[{level:3,title:"核心命题",children:[]},{level:3,title:"问题：功能耦合",children:[]},{level:3,title:"解法：中间件栈",children:[]},{level:3,title:"范式启发",children:[]}]},{level:2,title:"范式之外：几个值得辨析的概念",children:[{level:3,title:"Cognitive Blueprint：配置 vs 平台",children:[]},{level:3,title:"流式的本质：信息流控制",children:[]}]},{level:2,title:"总结：五个范式的关系",children:[]},{level:2,title:"附录：deepagents 真实定位",children:[]}]}];export{x as attributes,F as html,n as nestedHeaders};
