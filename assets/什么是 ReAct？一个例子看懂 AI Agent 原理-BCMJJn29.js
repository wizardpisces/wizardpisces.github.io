const x={},n=`<h1 id="&#x4EC0;&#x4E48;&#x662F; ReAct&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI Agent &#x539F;&#x7406;"><a href="#&#x4EC0;&#x4E48;&#x662F; ReAct&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI Agent &#x539F;&#x7406;"></a>&#x4EC0;&#x4E48;&#x662F; ReAct&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI Agent &#x539F;&#x7406;</h1>
<p>Agent &#x4E0D;&#x662F;&#x4E00;&#x79CD;&#x795E;&#x79D8;&#x6280;&#x672F;&#x3002;</p>
<p>&#x5982;&#x679C;&#x628A;&#x5404;&#x79CD;&#x6846;&#x67B6;&#xFF08;LangGraph&#x3001;AutoGen&#x3001;OpenAI Agents SDK&#x3001;CrewAI&#x2026;&#x2026;&#xFF09;&#x5168;&#x90E8;&#x53BB;&#x6389;&#xFF0C;&#x4F60;&#x4F1A;&#x53D1;&#x73B0;&#xFF1A;</p>
<blockquote>
<p><strong>Agent = LLM + &#x5FAA;&#x73AF;&#xFF08;Loop&#xFF09;+ &#x5DE5;&#x5177;&#xFF08;Tool&#xFF09;+ &#x72B6;&#x6001;&#xFF08;State&#xFF09;</strong></p>
</blockquote>
<p>&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#xFF0C;&#x6211;&#x4EEC;&#x4E0D;&#x7528;&#x4EFB;&#x4F55;&#x6846;&#x67B6;&#x3002;&#x4ECE;&#x4E00;&#x4E2A;&#x53EA;&#x6709;&#x5341;&#x51E0;&#x884C;&#x4EE3;&#x7801;&#x7684;&#x5C0F;&#x4F8B;&#x5B50;&#x5F00;&#x59CB;&#xFF0C;&#x4E00;&#x6B65;&#x4E00;&#x6B65;&#x628A; Agent &#x6F14;&#x5316;&#x51FA;&#x6765;&#x3002;</p>
<p>&#x54B1;&#x4F9D;&#x65E7;&#x4ECE;&#x5929;&#x6C14;&#x7684;&#x4F8B;&#x5B50;&#x5F00;&#x59CB;</p>
<hr>
<h2 id="&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x666E;&#x901A; LLM&#xFF0C;&#x5176;&#x5B9E;&#x4E0D;&#x662F; Agent"><a href="#&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x666E;&#x901A; LLM&#xFF0C;&#x5176;&#x5B9E;&#x4E0D;&#x662F; Agent"></a>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;&#x666E;&#x901A; LLM&#xFF0C;&#x5176;&#x5B9E;&#x4E0D;&#x662F; Agent</h2>
<p>&#x5148;&#x770B;&#x6700;&#x666E;&#x901A;&#x7684;&#x8C03;&#x7528;&#x3002;</p>
<pre><code class="language-python"><span class="hljs-keyword">from</span> openai <span class="hljs-keyword">import</span> OpenAI

client = OpenAI()

response = client.responses.create(
    model=<span class="hljs-string">&quot;gpt-4.1&quot;</span>,
    <span class="hljs-built_in">input</span>=<span class="hljs-string">&quot;&#x5317;&#x4EAC;&#x4ECA;&#x5929;&#x5929;&#x6C14;&#x600E;&#x4E48;&#x6837;&#xFF1F;&quot;</span>
)

<span class="hljs-built_in">print</span>(response.output_text)
</code></pre>
<p>&#x6574;&#x4E2A;&#x6D41;&#x7A0B;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF1A;</p>
<pre><code>&#x7528;&#x6237;
   &#x2502;
   &#x25BC;
Prompt
   &#x2502;
   &#x25BC;
LLM
   &#x2502;
   &#x25BC;
Answer
</code></pre>
<p>&#x7279;&#x70B9;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#xFF1A;</p>
<blockquote>
<p><strong>&#x8F93;&#x5165;&#x4E00;&#x6B21;&#xFF0C;&#x8F93;&#x51FA;&#x4E00;&#x6B21;&#x3002;</strong></p>
</blockquote>
<p>&#x6A21;&#x578B;&#x4E0D;&#x77E5;&#x9053;&#xFF1A;</p>
<ul>
<li>&#x6709;&#x6CA1;&#x6709;&#x5DE5;&#x5177;</li>
<li>&#x80FD;&#x4E0D;&#x80FD;&#x67E5;&#x8BE2;&#x5929;&#x6C14;</li>
<li>&#x662F;&#x5426;&#x9700;&#x8981;&#x7EE7;&#x7EED;&#x6267;&#x884C;</li>
</ul>
<p>&#x5B83;&#x53EA;&#x662F;&#x56DE;&#x7B54;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>&#x62B1;&#x6B49;&#xFF0C;&#x6211;&#x65E0;&#x6CD5;&#x83B7;&#x53D6;&#x5B9E;&#x65F6;&#x5929;&#x6C14;&#x3002;
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F;&#x666E;&#x901A; Chat&#x3002;</p>
<p>&#x8DDD;&#x79BB; Agent &#x8FD8;&#x5DEE;&#x5F97;&#x8FDC;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7ED9; LLM &#x4E00;&#x628A;&#x5DE5;&#x5177;"><a href="#&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7ED9; LLM &#x4E00;&#x628A;&#x5DE5;&#x5177;"></a>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;&#x7ED9; LLM &#x4E00;&#x628A;&#x5DE5;&#x5177;</h1>
<p>&#x5982;&#x679C;&#x544A;&#x8BC9;&#x6A21;&#x578B;&#xFF1A;</p>
<blockquote>
<p>&#x4F60;&#x53EF;&#x4EE5;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x5929;&#x6C14;&#x51FD;&#x6570;&#x3002;</p>
</blockquote>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">get_weather</span>(<span class="hljs-params">city</span>):</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;&#x5317;&#x4EAC;&#xFF1A;26&#x2103;&#xFF0C;&#x6674;&quot;</span>
</code></pre>
<p>&#x7136;&#x540E;&#x544A;&#x8BC9;&#x6A21;&#x578B;&#xFF1A;</p>
<pre><code>&#x4F60;&#x6709;&#x4E00;&#x4E2A;&#x5DE5;&#x5177;&#xFF1A;

get_weather(city)

&#x9700;&#x8981;&#x5929;&#x6C14;&#x65F6;&#xFF0C;&#x8BF7;&#x8C03;&#x7528;&#x5B83;&#x3002;
</code></pre>
<p>&#x8FD9;&#x65F6;&#x5019;&#x5F88;&#x591A;&#x6A21;&#x578B;&#x90FD;&#x4F1A;&#x8FD4;&#x56DE;&#xFF1A;</p>
<pre><code class="language-json">{
    <span class="hljs-attr">&quot;tool&quot;</span>: <span class="hljs-string">&quot;get_weather&quot;</span>,
    <span class="hljs-attr">&quot;args&quot;</span>: {
        <span class="hljs-attr">&quot;city&quot;</span>: <span class="hljs-string">&quot;&#x5317;&#x4EAC;&quot;</span>
    }
}
</code></pre>
<p>&#x6CE8;&#x610F;&#x3002;</p>
<p>&#x8FD9;&#x91CC;<strong>&#x5DE5;&#x5177;&#x5176;&#x5B9E;&#x8FD8;&#x6CA1;&#x6267;&#x884C;&#x3002;</strong></p>
<p>LLM &#x53EA;&#x662F;&#x8BF4;&#xFF1A;</p>
<blockquote>
<p>&#x6211;&#x5EFA;&#x8BAE;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x5DE5;&#x5177;&#x3002;</p>
</blockquote>
<p>&#x6240;&#x4EE5;&#x76EE;&#x524D;&#x6D41;&#x7A0B;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code>&#x7528;&#x6237;
   &#x2502;
   &#x25BC;
LLM
   &#x2502;
   &#x25BC;
&#x544A;&#x8BC9;&#x7A0B;&#x5E8F;&#xFF1A;
&#x8C03;&#x7528; get_weather
</code></pre>
<p>&#x6A21;&#x578B;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&quot;&#x51B3;&#x7B56;&#x8005;&quot;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x6267;&#x884C;&#x5DE5;&#x5177;&#x7684;&#x662F;&#x4F60;&#x7684;&#x7A0B;&#x5E8F;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A0B;&#x5E8F;&#x66FF;&#x6A21;&#x578B;&#x6267;&#x884C;&#x5DE5;&#x5177;"><a href="#&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A0B;&#x5E8F;&#x66FF;&#x6A21;&#x578B;&#x6267;&#x884C;&#x5DE5;&#x5177;"></a>&#x7B2C;&#x4E09;&#x9636;&#x6BB5;&#xFF1A;&#x7A0B;&#x5E8F;&#x66FF;&#x6A21;&#x578B;&#x6267;&#x884C;&#x5DE5;&#x5177;</h1>
<p>&#x4E8E;&#x662F;&#x7A0B;&#x5E8F;&#x5F00;&#x59CB;&#x591A;&#x4E00;&#x6B65;&#x3002;</p>
<pre><code class="language-python">tool_call = llm(prompt)

result = get_weather(tool_call[<span class="hljs-string">&quot;city&quot;</span>])

<span class="hljs-built_in">print</span>(result)
</code></pre>
<p>&#x6D41;&#x7A0B;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code>&#x7528;&#x6237;
 &#x2502;
 &#x25BC;
LLM
 &#x2502;
 &#x25BC;
Tool Call
 &#x2502;
 &#x25BC;
Python
 &#x2502;
 &#x25BC;
&#x6267;&#x884C;&#x5DE5;&#x5177;
 &#x2502;
 &#x25BC;
&#x7ED3;&#x679C;
</code></pre>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>get_weather(&quot;&#x5317;&#x4EAC;&quot;)
</code></pre>
<p>&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code>&#x5317;&#x4EAC;&#xFF1A;26&#x2103;
</code></pre>
<p>&#x4F46;&#x662F;&#x95EE;&#x9898;&#x6765;&#x4E86;&#x3002;</p>
<p>&#x7A0B;&#x5E8F;&#x62FF;&#x5230;&#x4E86;&#x5929;&#x6C14;&#x3002;</p>
<p><strong>&#x6A21;&#x578B;&#x4E0D;&#x77E5;&#x9053;&#x3002;</strong></p>
<p>&#x56E0;&#x4E3A;&#x5929;&#x6C14;&#x662F;&#x5728; Python &#x4E16;&#x754C;&#x53D1;&#x751F;&#x7684;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x6839;&#x672C;&#x6CA1;&#x770B;&#x89C1;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x628A;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x518D;&#x5582;&#x56DE;&#x6A21;&#x578B;"><a href="#&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x628A;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x518D;&#x5582;&#x56DE;&#x6A21;&#x578B;"></a>&#x7B2C;&#x56DB;&#x9636;&#x6BB5;&#xFF1A;&#x628A;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x518D;&#x5582;&#x56DE;&#x6A21;&#x578B;</h1>
<p>&#x6240;&#x4EE5;&#x9700;&#x8981;&#x7B2C;&#x4E8C;&#x6B21;&#x8C03;&#x7528;&#x3002;</p>
<p>&#x7B2C;&#x4E00;&#x6B21;&#xFF1A;</p>
<pre><code>LLM&#xFF1A;

&#x8C03;&#x7528; get_weather(&quot;&#x5317;&#x4EAC;&quot;)
</code></pre>
<p>Python&#xFF1A;</p>
<pre><code>&#x5317;&#x4EAC;&#xFF1A;26&#x2103;
</code></pre>
<p>&#x7B2C;&#x4E8C;&#x6B21;&#xFF1A;</p>
<pre><code>LLM&#xFF1A;

&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#xFF1A;

&#x5317;&#x4EAC;&#xFF1A;26&#x2103;

&#x8BF7;&#x7EE7;&#x7EED;&#x56DE;&#x7B54;&#x7528;&#x6237;&#x3002;
</code></pre>
<p>&#x4E8E;&#x662F;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code>&#x5317;&#x4EAC;&#x4ECA;&#x5929;26&#x2103;&#xFF0C;&#x5929;&#x6C14;&#x6674;&#x6717;&#x3002;
</code></pre>
<p>&#x6574;&#x4E2A;&#x6D41;&#x7A0B;&#xFF1A;</p>
<pre><code>&#x7B2C;&#x4E00;&#x6B21;

&#x7528;&#x6237;
 &#x2502;
 &#x25BC;
LLM
 &#x2502;
 &#x25BC;
Tool Call

&#x2193;

Python&#x6267;&#x884C;

&#x2193;

&#x7B2C;&#x4E8C;&#x6B21;

LLM
 &#x2502;
 &#x25BC;
&#x6700;&#x7EC8;&#x56DE;&#x7B54;
</code></pre>
<p>&#x5230;&#x8FD9;&#x91CC;&#xFF0C;&#x5DF2;&#x7ECF;&#x8D8A;&#x6765;&#x8D8A;&#x50CF; Agent &#x4E86;&#x3002;</p>
<p>&#x4F46;&#x662F;&#x8FD8;&#x6709;&#x95EE;&#x9898;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x4E94;&#x9636;&#x6BB5;&#xFF1A;&#x5982;&#x679C;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x5DE5;&#x5177;&#x600E;&#x4E48;&#x529E;&#xFF1F;"><a href="#&#x7B2C;&#x4E94;&#x9636;&#x6BB5;&#xFF1A;&#x5982;&#x679C;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x5DE5;&#x5177;&#x600E;&#x4E48;&#x529E;&#xFF1F;"></a>&#x7B2C;&#x4E94;&#x9636;&#x6BB5;&#xFF1A;&#x5982;&#x679C;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x5DE5;&#x5177;&#x600E;&#x4E48;&#x529E;&#xFF1F;</h1>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<p>&#x7528;&#x6237;&#x8BF4;&#xFF1A;</p>
<pre><code>&#x4E0A;&#x6D77;&#x5929;&#x6C14;&#x600E;&#x4E48;&#x6837;&#xFF1F;

&#x987A;&#x4FBF;&#x544A;&#x8BC9;&#x6211;&#x7F8E;&#x5143;&#x6C47;&#x7387;&#x3002;
</code></pre>
<p>&#x6A21;&#x578B;&#x7B2C;&#x4E00;&#x6B21;&#x8FD4;&#x56DE;&#xFF1A;</p>
<pre><code>&#x8C03;&#x7528;&#xFF1A;

get_weather()

</code></pre>
<p>&#x7A0B;&#x5E8F;&#x6267;&#x884C;&#x3002;</p>
<p>&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code>&#x5929;&#x6C14;&#x2026;&#x2026;
</code></pre>
<p>&#x518D;&#x6B21;&#x53D1;&#x7ED9;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x53C8;&#x8BF4;&#xFF1A;</p>
<pre><code>&#x8C03;&#x7528;&#xFF1A;

get_exchange_rate()
</code></pre>
<p>&#x7A0B;&#x5E8F;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x3002;</p>
<p>&#x5F97;&#x5230;&#xFF1A;</p>
<pre><code>7.16
</code></pre>
<p>&#x518D;&#x6B21;&#x53D1;&#x56DE;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x6700;&#x540E;&#x56DE;&#x7B54;&#xFF1A;</p>
<pre><code>&#x4E0A;&#x6D77;&#x4ECA;&#x5929;&#x2026;&#x2026;
&#x7F8E;&#x5143;&#x6C47;&#x7387;&#x2026;&#x2026;
</code></pre>
<p>&#x53D1;&#x73B0;&#x4E86;&#x5417;&#xFF1F;</p>
<p>&#x51FA;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x4E1C;&#x897F;&#x3002;</p>
<p><strong>&#x5FAA;&#x73AF;&#x3002;</strong></p>
<p>&#x7A0B;&#x5E8F;&#x5F00;&#x59CB;&#x4E0D;&#x65AD;&#xFF1A;</p>
<pre><code>LLM

&#x2193;

Tool

&#x2193;

LLM

&#x2193;

Tool

&#x2193;

LLM

&#x2193;

&#x2026;&#x2026;
</code></pre>
<p>&#x76F4;&#x5230;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x8BF4;&#xFF1A;</p>
<pre><code>&#x6CA1;&#x6709;&#x5DE5;&#x5177;&#x8981;&#x8C03;&#x7528;&#x4E86;&#x3002;
</code></pre>
<p>&#x5FAA;&#x73AF;&#x7ED3;&#x675F;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x516D;&#x9636;&#x6BB5;&#xFF1A;&#x771F;&#x6B63;&#x7684; Agent Loop &#x51FA;&#x73B0;&#x4E86;"><a href="#&#x7B2C;&#x516D;&#x9636;&#x6BB5;&#xFF1A;&#x771F;&#x6B63;&#x7684; Agent Loop &#x51FA;&#x73B0;&#x4E86;"></a>&#x7B2C;&#x516D;&#x9636;&#x6BB5;&#xFF1A;&#x771F;&#x6B63;&#x7684; Agent Loop &#x51FA;&#x73B0;&#x4E86;</h1>
<p>&#x4E8E;&#x662F;&#x4EE3;&#x7801;&#x5F00;&#x59CB;&#x53D8;&#x6210;&#x7ECF;&#x5178;&#x5199;&#x6CD5;&#x3002;</p>
<pre><code class="language-python">messages = [user_message]

<span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:

    response = llm(messages)

    <span class="hljs-keyword">if</span> response.need_tool():

        result = call_tool(response)

        messages.append(result)

    <span class="hljs-keyword">else</span>:

        <span class="hljs-built_in">print</span>(response.text)
        <span class="hljs-keyword">break</span>
</code></pre>
<p>&#x6CE8;&#x610F;&#x3002;</p>
<p>&#x6574;&#x4E2A; Agent &#x6700;&#x6838;&#x5FC3;&#x7684;&#x4E1C;&#x897F;&#xFF0C;&#x5C31;&#x662F;&#x8FD9;&#x4E2A; while&#x3002;</p>
<p>&#x5F88;&#x591A;&#x6846;&#x67B6;&#x7ED5;&#x6765;&#x7ED5;&#x53BB;&#x3002;</p>
<p>&#x6700;&#x540E;&#x90FD;&#x4F1A;&#x843D;&#x5230;&#x7C7B;&#x4F3C;&#x903B;&#x8F91;&#x3002;</p>
<pre><code>while True

    &#x95EE; LLM

    &#x5982;&#x679C;&#x8981;&#x5DE5;&#x5177;&#xFF1A;

        &#x8C03;&#x5DE5;&#x5177;

        &#x653E;&#x56DE;&#x4E0A;&#x4E0B;&#x6587;

    &#x5426;&#x5219;&#xFF1A;

        &#x7ED3;&#x675F;
</code></pre>
<p>Agent &#x7684;&#x751F;&#x547D;&#xFF0C;&#x5C31;&#x6765;&#x81EA;&#x8FD9;&#x4E2A;&#x5FAA;&#x73AF;&#x3002;</p>
<hr>
<h1 id="&#x7B2C;&#x4E03;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x9700;&#x8981; State&#xFF08;&#x72B6;&#x6001;&#xFF09;&#xFF1F;"><a href="#&#x7B2C;&#x4E03;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x9700;&#x8981; State&#xFF08;&#x72B6;&#x6001;&#xFF09;&#xFF1F;"></a>&#x7B2C;&#x4E03;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x9700;&#x8981; State&#xFF08;&#x72B6;&#x6001;&#xFF09;&#xFF1F;</h1>
<p>&#x7EE7;&#x7EED;&#x601D;&#x8003;&#x3002;</p>
<p>&#x5982;&#x679C;&#x53EA;&#x6709;&#xFF1A;</p>
<pre><code>response = llm(prompt)
</code></pre>
<p>&#x7B2C;&#x4E8C;&#x6B21;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x5FD8;&#x4E86;&#x7B2C;&#x4E00;&#x6B21;&#x53D1;&#x751F;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x6240;&#x4EE5; Agent &#x5FC5;&#x987B;&#x4FDD;&#x5B58;&#x5386;&#x53F2;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-python">messages = [
    {
        <span class="hljs-string">&quot;role&quot;</span>: <span class="hljs-string">&quot;user&quot;</span>,
        <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;&#x5317;&#x4EAC;&#x5929;&#x6C14;&quot;</span>
    }
]
</code></pre>
<p>&#x8C03;&#x7528;&#x5DE5;&#x5177;&#x4EE5;&#x540E;&#xFF1A;</p>
<pre><code class="language-python">messages.append(
    {
        <span class="hljs-string">&quot;role&quot;</span>: <span class="hljs-string">&quot;tool&quot;</span>,
        <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-string">&quot;26&#x2103;&quot;</span>
    }
)
</code></pre>
<p>&#x518D;&#x6B21;&#x8C03;&#x7528;&#xFF1A;</p>
<pre><code class="language-python">response = llm(messages)
</code></pre>
<p>&#x6A21;&#x578B;&#x73B0;&#x5728;&#x770B;&#x5230;&#x7684;&#x662F;&#xFF1A;</p>
<pre><code>User&#xFF1A;

&#x5317;&#x4EAC;&#x5929;&#x6C14;

&#x2193;

Tool&#xFF1A;

26&#x2103;
</code></pre>
<p>&#x4E8E;&#x662F;&#x5B83;&#x77E5;&#x9053;&#xFF1A;</p>
<blockquote>
<p>&#x54E6;&#xFF0C;&#x6211;&#x5DF2;&#x7ECF;&#x67E5;&#x8FC7;&#x5929;&#x6C14;&#x4E86;&#x3002;</p>
</blockquote>
<p>&#x8FD9;&#x5C31;&#x662F; Agent &#x7684; State&#x3002;</p>
<p>State &#x672C;&#x8D28;&#x5C31;&#x662F;&#xFF1A;</p>
<blockquote>
<p><strong>&#x8BA9;&#x6A21;&#x578B;&#x8BB0;&#x4F4F;&#x5DF2;&#x7ECF;&#x53D1;&#x751F;&#x8FC7;&#x4EC0;&#x4E48;&#x3002;</strong></p>
</blockquote>
<hr>
<h1 id="&#x7B2C;&#x516B;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Agent &#x53EF;&#x4EE5;&#x89C4;&#x5212;&#xFF1F;"><a href="#&#x7B2C;&#x516B;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Agent &#x53EF;&#x4EE5;&#x89C4;&#x5212;&#xFF1F;"></a>&#x7B2C;&#x516B;&#x9636;&#x6BB5;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48; Agent &#x53EF;&#x4EE5;&#x89C4;&#x5212;&#xFF1F;</h1>
<p>&#x7EE7;&#x7EED;&#x5347;&#x7EA7;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>&#x5E2E;&#x6211;&#x5206;&#x6790;&#x82F9;&#x679C;&#x80A1;&#x7968;&#x3002;

&#x5982;&#x679C;&#x4E0A;&#x6DA8;&#xFF0C;
&#x770B;&#x770B;&#x65B0;&#x95FB;&#xFF1B;

&#x5982;&#x679C;&#x4E0B;&#x8DCC;&#xFF0C;
&#x770B;&#x770B;&#x8D22;&#x62A5;&#x3002;
</code></pre>
<p>&#x6A21;&#x578B;&#x7B2C;&#x4E00;&#x6B21;&#x53EF;&#x80FD;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code>Step1&#xFF1A;

&#x67E5;&#x8BE2;&#x80A1;&#x4EF7;
</code></pre>
<p>Python&#x6267;&#x884C;&#x3002;</p>
<p>&#x56DE;&#x6765;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x7EE7;&#x7EED;&#xFF1A;</p>
<pre><code>Step2&#xFF1A;

&#x67E5;&#x8BE2;&#x65B0;&#x95FB;
</code></pre>
<p>&#x56DE;&#x6765;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x7EE7;&#x7EED;&#xFF1A;</p>
<pre><code>Step3&#xFF1A;

&#x603B;&#x7ED3;
</code></pre>
<p>&#x4F60;&#x4F1A;&#x53D1;&#x73B0;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x5730;&#x65B9;&#x5199;&#xFF1A;</p>
<pre><code>&#x7B2C;&#x4E00;&#x6B65;&#x2026;&#x2026;
&#x7B2C;&#x4E8C;&#x6B65;&#x2026;&#x2026;
&#x7B2C;&#x4E09;&#x6B65;&#x2026;&#x2026;
</code></pre>
<p>&#x5168;&#x90E8;&#x90FD;&#x662F;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<p>Agent &#x5E76;&#x4E0D;&#x662F;&#x7A0B;&#x5E8F;&#x4F1A;&#x89C4;&#x5212;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x89C4;&#x5212;&#x7684;&#x662F;&#xFF1A;</p>
<p><strong>LLM&#x3002;</strong></p>
<p>&#x7A0B;&#x5E8F;&#x53EA;&#x662F;&#x4E00;&#x76F4;&#xFF1A;</p>
<pre><code>&#x6267;&#x884C;

&#x2193;

&#x53CD;&#x9988;

&#x2193;

&#x6267;&#x884C;

&#x2193;

&#x53CD;&#x9988;
</code></pre>
<hr>
<h1 id="&#x7B2C;&#x4E5D;&#x9636;&#x6BB5;&#xFF1A;&#x518D;&#x52A0;&#x4E00;&#x4E2A; Memory"><a href="#&#x7B2C;&#x4E5D;&#x9636;&#x6BB5;&#xFF1A;&#x518D;&#x52A0;&#x4E00;&#x4E2A; Memory"></a>&#x7B2C;&#x4E5D;&#x9636;&#x6BB5;&#xFF1A;&#x518D;&#x52A0;&#x4E00;&#x4E2A; Memory</h1>
<p>&#x5982;&#x679C;&#x6BCF;&#x6B21;&#x804A;&#x5929;&#xFF1A;</p>
<pre><code>messages=[]
</code></pre>
<p>&#x6A21;&#x578B;&#x90FD;&#x4F1A;&#x5FD8;&#x8BB0;&#x4EE5;&#x524D;&#x5185;&#x5BB9;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x589E;&#x52A0;&#xFF1A;</p>
<pre><code class="language-python">memory = []

memory.append(user)

memory.append(tool)

memory.append(ai)
</code></pre>
<p>&#x4E0B;&#x4E00;&#x6B21;&#xFF1A;</p>
<pre><code>response = llm(memory)
</code></pre>
<p>&#x4E8E;&#x662F;&#xFF1A;</p>
<p>Agent &#x5F00;&#x59CB;&#x6709;&#x4E86;&#x957F;&#x671F;&#x8BB0;&#x5FC6;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x6240;&#x8C13;&#xFF1A;</p>
<ul>
<li>Memory</li>
<li>Long Context</li>
<li>RAG</li>
<li>Vector Database</li>
</ul>
<p>&#x672C;&#x8D28;&#x90FD;&#x662F;&#xFF1A;</p>
<p><strong>&#x5E2E;&#x52A9;&#x6A21;&#x578B;&#x6062;&#x590D; State&#x3002;</strong></p>
<hr>
<h1 id="&#x7B2C;&#x5341;&#x9636;&#x6BB5;&#xFF1A;&#x5B8C;&#x6574;&#x7684;&#x6781;&#x7B80; Agent"><a href="#&#x7B2C;&#x5341;&#x9636;&#x6BB5;&#xFF1A;&#x5B8C;&#x6574;&#x7684;&#x6781;&#x7B80; Agent"></a>&#x7B2C;&#x5341;&#x9636;&#x6BB5;&#xFF1A;&#x5B8C;&#x6574;&#x7684;&#x6781;&#x7B80; Agent</h1>
<p>&#x6700;&#x540E;&#xFF0C;&#x628A;&#x6240;&#x6709;&#x4E1C;&#x897F;&#x62FC;&#x8D77;&#x6765;&#x3002;</p>
<pre><code class="language-python">messages = []

<span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:

    response = llm(messages)

    <span class="hljs-keyword">if</span> response.has_tool_call():

        result = call_tool(response.tool)

        messages.append(result)

    <span class="hljs-keyword">else</span>:

        <span class="hljs-built_in">print</span>(response.text)
        <span class="hljs-keyword">break</span>
</code></pre>
<p>&#x662F;&#x4E0D;&#x662F;&#x5F88;&#x773C;&#x719F;&#xFF1F;</p>
<p>LangGraph</p>
<p>&#x2193;</p>
<p>AutoGen</p>
<p>&#x2193;</p>
<p>OpenAI Agents SDK</p>
<p>&#x2193;</p>
<p>CrewAI</p>
<p>&#x2193;</p>
<p>&#x5404;&#x79CD; AI Agent &#x6846;&#x67B6;&#x2026;&#x2026;</p>
<p>&#x62C6;&#x5230;&#x6700;&#x540E;&#xFF0C;&#x6838;&#x5FC3;&#x51E0;&#x4E4E;&#x90FD;&#x662F;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:

    response = llm(messages)

    <span class="hljs-keyword">if</span> tool_call:

        result = tool()

        messages.append(result)

    <span class="hljs-keyword">else</span>:

        <span class="hljs-keyword">break</span>
</code></pre>
<p>&#x4EE3;&#x7801;&#x4E0D;&#x5230;&#x4E8C;&#x5341;&#x884C;&#x3002;</p>
<p>&#x5374;&#x5DF2;&#x7ECF;&#x5305;&#x542B;&#x4E86; Agent &#x6700;&#x91CD;&#x8981;&#x7684;&#x51E0;&#x4E2A;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x3002;</p>
<hr>
<h1 id="Agent &#x7684;&#x672C;&#x8D28;&#xFF0C;&#x5176;&#x5B9E;&#x53EA;&#x6709;&#x56DB;&#x4E2A;&#x7EC4;&#x4EF6;"><a href="#Agent &#x7684;&#x672C;&#x8D28;&#xFF0C;&#x5176;&#x5B9E;&#x53EA;&#x6709;&#x56DB;&#x4E2A;&#x7EC4;&#x4EF6;"></a>Agent &#x7684;&#x672C;&#x8D28;&#xFF0C;&#x5176;&#x5B9E;&#x53EA;&#x6709;&#x56DB;&#x4E2A;&#x7EC4;&#x4EF6;</h1>
<p>&#x5F88;&#x591A;&#x4EBA;&#x7B2C;&#x4E00;&#x6B21;&#x63A5;&#x89E6; Agent&#xFF0C;&#x4F1A;&#x89C9;&#x5F97;&#x5B83;&#x662F;&#x4E00;&#x79CD;&#x5168;&#x65B0;&#x7684; AI &#x6280;&#x672F;&#x3002;</p>
<p>&#x5B9E;&#x9645;&#x4E0A;&#xFF0C;&#x5982;&#x679C;&#x628A;&#x5404;&#x79CD;&#x6846;&#x67B6;&#x548C;&#x5DE5;&#x7A0B;&#x7EC6;&#x8282;&#x5265;&#x79BB;&#x6389;&#xFF0C;Agent &#x7684;&#x6838;&#x5FC3;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF1A;</p>
<pre><code>          +----------------+
          |      LLM       |
          +-------+--------+
                  |
          &#x5224;&#x65AD;&#x4E0B;&#x4E00;&#x6B65;&#x505A;&#x4EC0;&#x4E48;
                  |
                  v
        +------------------+
        |     Tool Call    |
        +--------+---------+
                 |
            &#x6267;&#x884C;&#x771F;&#x5B9E;&#x64CD;&#x4F5C;
                 |
                 v
        +------------------+
        |      State       |
        +--------+---------+
                 |
          &#x66F4;&#x65B0;&#x4E0A;&#x4E0B;&#x6587;&#x4FE1;&#x606F;
                 |
                 v
        +------------------+
        |      Loop        |
        +------------------+
                 |
          &#x7EE7;&#x7EED;&#x95EE; LLM&#xFF1F;
</code></pre>
<p>&#x56DB;&#x8005;&#x7F3A;&#x4E00;&#x4E0D;&#x53EF;&#xFF1A;</p>
<ul>
<li><strong>LLM</strong>&#xFF1A;&#x8D1F;&#x8D23;&#x601D;&#x8003;&#x3001;&#x89C4;&#x5212;&#x548C;&#x51B3;&#x7B56;&#x3002;</li>
<li><strong>Tool</strong>&#xFF1A;&#x8D1F;&#x8D23;&#x4E0E;&#x5916;&#x90E8;&#x4E16;&#x754C;&#x4EA4;&#x4E92;&#xFF0C;&#x4F8B;&#x5982;&#x641C;&#x7D22;&#x3001;&#x6570;&#x636E;&#x5E93;&#x3001;API&#x3001;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x7B49;&#x3002;</li>
<li><strong>State</strong>&#xFF1A;&#x8BB0;&#x5F55;&#x5DF2;&#x7ECF;&#x53D1;&#x751F;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x62E5;&#x6709;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x4ECE;&#x96F6;&#x5F00;&#x59CB;&#x3002;</li>
<li><strong>Loop</strong>&#xFF1A;&#x4E0D;&#x65AD;&#x6267;&#x884C;&quot;&#x601D;&#x8003; &#x2192; &#x5DE5;&#x5177; &#x2192; &#x66F4;&#x65B0;&#x72B6;&#x6001; &#x2192; &#x518D;&#x601D;&#x8003;&quot;&#xFF0C;&#x76F4;&#x5230;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#x3002;</li>
</ul>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x603B;&#x7ED3;&#x6210;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<blockquote>
<p><strong>Agent &#x5E76;&#x4E0D;&#x662F;&#x4E00;&#x79CD;&#x65B0;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x662F;&#x5728; LLM &#x5916;&#x9762;&#x5305;&#x4E86;&#x4E00;&#x5C42;&#x80FD;&#x591F;&#x6301;&#x7EED;&#x51B3;&#x7B56;&#x3001;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#x548C;&#x7EF4;&#x62A4;&#x72B6;&#x6001;&#x7684;&#x6267;&#x884C;&#x5FAA;&#x73AF;&#x3002;</strong></p>
</blockquote>
<p>&#x7406;&#x89E3;&#x4E86;&#x8FD9;&#x56DB;&#x4E2A;&#x7EC4;&#x4EF6;&#xFF0C;&#x518D;&#x53BB;&#x770B; LangGraph&#x3001;OpenAI Agents SDK&#x3001;CrewAI &#x6216; AutoGen &#x7B49;&#x6846;&#x67B6;&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x5B83;&#x4EEC;&#x505A;&#x7684;&#x4E8B;&#x60C5;&#x5176;&#x5B9E;&#x9AD8;&#x5EA6;&#x4E00;&#x81F4;&#xFF1A;&#x53EA;&#x662F;&#x628A;&#x8FD9;&#x5957;&#x5FAA;&#x73AF;&#x5C01;&#x88C5;&#x5F97;&#x66F4;&#x5B8C;&#x5584;&#x3001;&#x66F4;&#x6613;&#x6269;&#x5C55;&#x800C;&#x5DF2;&#x3002;&#x771F;&#x6B63;&#x7684; Agent &#x539F;&#x7406;&#xFF0C;&#x5E76;&#x6CA1;&#x6709;&#x60F3;&#x8C61;&#x4E2D;&#x590D;&#x6742;&#x3002;</p>
`,F=[{level:1,title:"什么是 ReAct？一个例子看懂 AI Agent 原理",children:[{level:2,title:"第一阶段：普通 LLM，其实不是 Agent",children:[]}]},{level:1,title:"第二阶段：给 LLM 一把工具",children:[]},{level:1,title:"第三阶段：程序替模型执行工具",children:[]},{level:1,title:"第四阶段：把工具结果再喂回模型",children:[]},{level:1,title:"第五阶段：如果需要多个工具怎么办？",children:[]},{level:1,title:"第六阶段：真正的 Agent Loop 出现了",children:[]},{level:1,title:"第七阶段：为什么需要 State（状态）？",children:[]},{level:1,title:"第八阶段：为什么 Agent 可以规划？",children:[]},{level:1,title:"第九阶段：再加一个 Memory",children:[]},{level:1,title:"第十阶段：完整的极简 Agent",children:[]},{level:1,title:"Agent 的本质，其实只有四个组件",children:[]}];export{x as attributes,n as html,F as nestedHeaders};
