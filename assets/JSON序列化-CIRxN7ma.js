const x={},s=`<p>&#x95EE;&#xFF1A;easyjson &#x8DDF; golang &#x539F;&#x751F; JSON &#x65B9;&#x6CD5;&#x5BF9;&#x6BD4;</p>
<ul>
<li>easyjson&#x662F;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x5FEB;&#x901F;&#x8FDB;&#x884C;json&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x5DE5;&#x5177;&#x5305;&#xFF0C;&#x5B83;&#x901A;&#x8FC7;&#x4E3A;&#x7ED3;&#x6784;&#x4F53;&#x751F;&#x6210;&#x65B9;&#x6CD5;&#x6765;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x53CD;&#x5C04;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8;&#x6027;&#x80FD;&#x548C;&#x6548;&#x7387;&#x3002;</li>
<li>&#x4E0E;golang&#x539F;&#x751F;&#x7684;json&#x65B9;&#x6CD5;&#x76F8;&#x6BD4;&#xFF0C;easyjson&#x7684;&#x6027;&#x80FD;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8;2&#xFF5E;3&#x500D;&#x3002;</li>
<li>easyjson&#x7684;&#x4F7F;&#x7528;&#x65B9;&#x6CD5;&#x662F;&#x5148;&#x5B89;&#x88C5;&#x5B83;&#xFF0C;&#x7136;&#x540E;&#x4E3A;&#x9700;&#x8981;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x7ED3;&#x6784;&#x4F53;&#x6DFB;&#x52A0;&#x6CE8;&#x91CA;&#xFF0C;&#x7136;&#x540E;&#x8FD0;&#x884C;easyjson&#x547D;&#x4EE4;&#x751F;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x89E3;&#x6790;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p>&#x95EE;&#xFF1A; &#x4E00;&#x4E9B;easyjson&#x7684;&#x4F18;&#x7F3A;&#x70B9;&#xFF1F;</p>
<p>&#x7B54;&#xFF1A;easyjson&#x7684;&#x4F18;&#x70B9;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x5B83;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8;json&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x6027;&#x80FD;&#x548C;&#x6548;&#x7387;&#xFF0C;&#x6BD4;golang&#x539F;&#x751F;&#x7684;json&#x65B9;&#x6CD5;&#x5FEB;2&#xFF5E;3&#x500D;&#x3002;</li>
<li>&#x5B83;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x53CD;&#x5C04;&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C11;&#x5185;&#x5B58;&#x5206;&#x914D;&#x548C;GC&#x538B;&#x529B;&#x3002;</li>
<li>&#x5B83;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6CE8;&#x91CA;&#x548C;&#x547D;&#x4EE4;&#x884C;&#x5DE5;&#x5177;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x89E3;&#x6790;&#x4EE3;&#x7801;&#xFF0C;&#x4F7F;&#x7528;&#x65B9;&#x4FBF;&#x3002;</li>
</ul>
<p>easyjson&#x7684;&#x7F3A;&#x70B9;&#x662F;&#xFF1A;</p>
<ul>
<li>&#x5B83;&#x4E0D;&#x4F1A;&#x6821;&#x9A8C;json&#x7684;&#x6B63;&#x786E;&#x6027;&#xFF0C;&#x53EF;&#x80FD;&#x5BFC;&#x81F4;&#x89E3;&#x6790;&#x9519;&#x8BEF;&#x6216;&#x5F02;&#x5E38;&#x3002;</li>
<li>&#x5B83;&#x7684;&#x4EE3;&#x7801;&#x98CE;&#x683C;&#x53EF;&#x80FD;&#x4E0D;&#x592A;&#x4F18;&#x96C5;&#xFF0C;&#x6709;&#x4E9B;&#x91CD;&#x590D;&#x6216;&#x5197;&#x4F59;&#x3002;</li>
<li>&#x5B83;&#x9700;&#x8981;&#x4E3A;&#x6BCF;&#x4E2A;&#x89E3;&#x6790;&#x5B57;&#x6BB5;&#x6307;&#x5B9A;FieldTag&#xFF0C;&#x5426;&#x5219;&#x4F1A;&#x4F7F;&#x7528;&#x53D8;&#x91CF;&#x540D;&#x4F5C;&#x4E3A;&#x89E3;&#x6790;&#x5B57;&#x6BB5;2&#x3002;</li>
</ul>
<p>&#x95EE;&#xFF1A;easyjson &#x662F;&#x4EC0;&#x4E48;&#x539F;&#x7406;</p>
<p>&#x7B54;&#xFF1A;</p>
<ul>
<li>&#x5B83;&#x901A;&#x8FC7;&#x7ED9;&#x6211;&#x4EEC;&#x8981;&#x8FDB;&#x884C;&#x5E8F;&#x5217;&#x5316;&#x7684; struct &#x751F;&#x6210;&#x65B9;&#x6CD5;&#x6765;&#x5B9E;&#x73B0;&#x4E0D;&#x901A;&#x8FC7;&#x53CD;&#x5C04;&#x8FDB;&#x884C;json&#x5E8F;&#x5217;&#x5316;&#x3002;</li>
<li>&#x5B83;&#x53EA;&#x9488;&#x5BF9;&#x9884;&#x5148;&#x5B9A;&#x4E49;&#x597D;&#x7684; json &#x7ED3;&#x6784;&#x4F53;&#x5BF9;&#x8F93;&#x5165;&#x7684;json&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x7EAF;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x622A;&#x53D6;&#xFF0C;&#x5E76;&#x5C06;&#x5BF9;&#x5E94;&#x7684;json&#x5B57;&#x6BB5;&#x8D4B;&#x503C;&#x7ED9;&#x7ED3;&#x6784;&#x4F53;&#x3002;</li>
<li>&#x5B83;&#x63D0;&#x4F9B;&#x4E86;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x5DE5;&#x5177;&#xFF0C;&#x53EF;&#x4EE5;&#x4E00;&#x952E;&#x751F;&#x6210;go&#x6587;&#x4EF6;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x7ED3;&#x6784;&#x4F53;&#x5BF9;&#x5E94;&#x7684;&#x89E3;&#x6790;&#x4EE3;&#x7801;&#x3002;</li>
</ul>
<p>&#x95EE;&#xFF1A;&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;
&#x7B54;&#xFF1A;
&#x597D;&#x7684;&#xFF0C;&#x6211;&#x53EF;&#x4EE5;&#x7ED9;&#x4F60;&#x4E00;&#x4E9B;&#x793A;&#x4F8B;&#x4EE3;&#x7801;&#x6765;&#x8BF4;&#x660E; easyjson &#x8DDF; golang &#x81EA;&#x5E26; JSON &#x5DE5;&#x5177;&#x7684;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x7ED3;&#x6784;&#x4F53;&#x5982;&#x4E0B;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">type</span> Student <span class="hljs-keyword">struct</span> {
    Name <span class="hljs-keyword">string</span> <span class="hljs-string">\`json:&quot;name&quot;\`</span>
    Age <span class="hljs-keyword">int</span> <span class="hljs-string">\`json:&quot;age&quot;\`</span>
    Score <span class="hljs-keyword">float64</span> <span class="hljs-string">\`json:&quot;score&quot;\`</span>
}
</code></pre>
<p>&#x5982;&#x679C;&#x6211;&#x4EEC;&#x4F7F;&#x7528; golang &#x81EA;&#x5E26;&#x7684; JSON &#x5DE5;&#x5177;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;encoding/json&quot;</span>
    <span class="hljs-string">&quot;fmt&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A; Student &#x5BF9;&#x8C61;</span>
    s := Student{
        Name: <span class="hljs-string">&quot;Alice&quot;</span>,
        Age: <span class="hljs-number">18</span>,
        Score: <span class="hljs-number">95.5</span>,
    }

    <span class="hljs-comment">// &#x5E8F;&#x5217;&#x5316;&#x4E3A; JSON &#x5B57;&#x7B26;&#x4E32;</span>
    b, err := json.Marshal(s)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(<span class="hljs-string">&quot;error:&quot;</span>, err)
    }
    fmt.Println(<span class="hljs-keyword">string</span>(b)) <span class="hljs-comment">// {&quot;name&quot;:&quot;Alice&quot;,&quot;age&quot;:18,&quot;score&quot;:95.5}</span>

    <span class="hljs-comment">// &#x53CD;&#x5E8F;&#x5217;&#x5316;&#x4E3A; Student &#x5BF9;&#x8C61;</span>
    <span class="hljs-keyword">var</span> s2 Student
    err = json.Unmarshal(b, &amp;s2)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(<span class="hljs-string">&quot;error:&quot;</span>, err)
    }
    fmt.Println(s2) <span class="hljs-comment">// {Alice 18 95.5}</span>
}
</code></pre>
<p>&#x5982;&#x679C;&#x6211;&#x4EEC;&#x4F7F;&#x7528; easyjson&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x5148;&#x5B89;&#x88C5; easyjson &#x5DE5;&#x5177;&#xFF1A;</p>
<pre><code class="language-bash">go get -u github.com/mailru/easyjson/...
</code></pre>
<p>&#x7136;&#x540E;&#x5728;&#x7ED3;&#x6784;&#x4F53;&#x4E0A;&#x52A0;&#x4E0A;&#x6CE8;&#x91CA; <code>//easyjson:json</code>&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x547D;&#x4EE4; <code>easyjson -all student.go</code> &#x751F;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#x65B9;&#x6CD5;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-comment">//easyjson:json</span>
<span class="hljs-keyword">type</span> Student <span class="hljs-keyword">struct</span> {
    Name <span class="hljs-keyword">string</span> <span class="hljs-string">\`json:&quot;name&quot;\`</span>
    Age <span class="hljs-keyword">int</span> <span class="hljs-string">\`json:&quot;age&quot;\`</span>
    Score <span class="hljs-keyword">float64</span> <span class="hljs-string">\`json:&quot;score&quot;\`</span>
}
</code></pre>
<p>&#x751F;&#x6210;&#x7684;&#x65B9;&#x6CD5;&#x4F1A;&#x5728;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6587;&#x4EF6; <code>student_easyjson.go</code> &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">import</span> (
    <span class="hljs-string">&quot;fmt&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A; Student &#x5BF9;&#x8C61;</span>
    s := Student{
        Name: <span class="hljs-string">&quot;Alice&quot;</span>,
        Age: <span class="hljs-number">18</span>,
        Score: <span class="hljs-number">95.5</span>,
    }

    <span class="hljs-comment">// &#x5E8F;&#x5217;&#x5316;&#x4E3A; JSON &#x5B57;&#x7B26;&#x4E32;</span>
    b, err := s.MarshalJSON()
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(<span class="hljs-string">&quot;error:&quot;</span>, err)
    }
    fmt.Println(<span class="hljs-keyword">string</span>(b)) <span class="hljs-comment">// {&quot;name&quot;:&quot;Alice&quot;,&quot;age&quot;:18,&quot;score&quot;:95.5}</span>

    <span class="hljs-comment">// &#x53CD;&#x5E8F;&#x5217;&#x5316;&#x4E3A; Student &#x5BF9;&#x8C61;</span>
    <span class="hljs-keyword">var</span> s2 Student
    err = s2.UnmarshalJSON(b)
    <span class="hljs-keyword">if</span> err != <span class="hljs-literal">nil</span> {
        fmt.Println(<span class="hljs-string">&quot;error:&quot;</span>, err)
    }
    fmt.Println(s2) <span class="hljs-comment">// {Alice 18 95.5}</span>
}
</code></pre>
<p>&#x4ECE;&#x8FD9;&#x4E9B;&#x793A;&#x4F8B;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x770B;&#x5230; easyjson &#x8DDF; golang &#x81EA;&#x5E26; JSON &#x5DE5;&#x5177;&#x7684;&#x4E0D;&#x540C;&#x3002;</p>
<p><em><strong>&#x901A;&#x8FC7; GPT &#x751F;&#x6210;</strong></em></p>
`,n=[];export{x as attributes,s as html,n as nestedHeaders};
