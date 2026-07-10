const x={},n=`<h1 id="Go Runtime&#xFF1A;&#x7406;&#x89E3; Go &#x201C;&#x9B54;&#x6CD5;&#x201D;&#x7684;&#x6838;&#x5FC3;"><a href="#Go Runtime&#xFF1A;&#x7406;&#x89E3; Go &#x201C;&#x9B54;&#x6CD5;&#x201D;&#x7684;&#x6838;&#x5FC3;"></a>Go Runtime&#xFF1A;&#x7406;&#x89E3; Go &#x201C;&#x9B54;&#x6CD5;&#x201D;&#x7684;&#x6838;&#x5FC3;</h1>
<p>&#x7406;&#x89E3; goroutine &#x7684;&#x8FD0;&#x884C;&#x539F;&#x7406;&#xFF0C;&#x5C31;&#x80FD;&#x7406;&#x89E3; Go &#x91CC;&#x9762;&#x5927;&#x91CF;&#x770B;&#x4F3C;&#x795E;&#x5947;&#x7684;&#x673A;&#x5236;&#x3002;</p>
<p>Go &#x7684;&#x5F88;&#x591A;&#x80FD;&#x529B;&#xFF1A;</p>
<ul>
<li>goroutine</li>
<li>channel</li>
<li>GC</li>
<li>&#x7F51;&#x7EDC;&#x5E76;&#x53D1;</li>
<li>defer</li>
<li>interface</li>
<li>map</li>
</ul>
<p>&#x672C;&#x8D28;&#x4E0A;&#x90FD;&#x6765;&#x81EA;&#x540C;&#x4E00;&#x4E2A;&#x601D;&#x60F3;&#xFF1A;</p>
<blockquote>
<p>Go &#x4E0D;&#x53EA;&#x662F;&#x7F16;&#x8BD1;&#x4EE3;&#x7801;&#xFF0C;&#x5B83;&#x8FD8;&#x643A;&#x5E26;&#x4E00;&#x4E2A; runtime&#xFF0C;&#x5728;&#x7528;&#x6237;&#x6001;&#x7BA1;&#x7406;&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x5F88;&#x591A;&#x673A;&#x5236;&#x3002;</p>
</blockquote>
<hr>
<h1 id="&#x4E00;&#x3001;&#x5173;&#x952E;&#x8BA4;&#x77E5;&#xFF1A;&#x6211;&#x4EEC;&#x5199;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x76F4;&#x63A5;&#x8DD1;&#x5728;&#x7EBF;&#x7A0B;&#x4E0A;"><a href="#&#x4E00;&#x3001;&#x5173;&#x952E;&#x8BA4;&#x77E5;&#xFF1A;&#x6211;&#x4EEC;&#x5199;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x76F4;&#x63A5;&#x8DD1;&#x5728;&#x7EBF;&#x7A0B;&#x4E0A;"></a>&#x4E00;&#x3001;&#x5173;&#x952E;&#x8BA4;&#x77E5;&#xFF1A;&#x6211;&#x4EEC;&#x5199;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x76F4;&#x63A5;&#x8DD1;&#x5728;&#x7EBF;&#x7A0B;&#x4E0A;</h1>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">foo</span><span class="hljs-params">()</span></span> {
    a := <span class="hljs-number">1</span>
    b := <span class="hljs-number">2</span>
    fmt.Println(a + b)
}

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    <span class="hljs-keyword">go</span> foo()
}
</code></pre>
<p>&#x5F88;&#x591A;&#x4EBA;&#x7684;&#x7B2C;&#x4E00;&#x53CD;&#x5E94;&#xFF1A;</p>
<pre><code>&#x521B;&#x5EFA;&#x7EBF;&#x7A0B;
    |
    v
&#x8FD0;&#x884C; foo()
</code></pre>
<p>&#x5B9E;&#x9645;&#x4E0A;&#x4E0D;&#x662F;&#x3002;</p>
<p>&#x66F4;&#x63A5;&#x8FD1;&#xFF1A;</p>
<pre><code>&#x521B;&#x5EFA;&#x4E00;&#x4E2A; goroutine(G)

G:
    &#x4FDD;&#x5B58; foo &#x7684;&#x5165;&#x53E3;&#x5730;&#x5740;
    &#x62E5;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x6808;
    &#x62E5;&#x6709;&#x81EA;&#x5DF1;&#x7684;&#x6267;&#x884C;&#x72B6;&#x6001;

        |
        v

&#x52A0;&#x5165; Go scheduler &#x7BA1;&#x7406;&#x7684;&#x961F;&#x5217;
</code></pre>
<p>goroutine &#x672C;&#x8D28;&#xFF1A;</p>
<pre><code>G = &#x53EF;&#x6062;&#x590D;&#x7684;&#x6267;&#x884C;&#x72B6;&#x6001;
</code></pre>
<p>&#x5305;&#x542B;&#xFF1A;</p>
<pre><code>stack
program counter
register &#x72B6;&#x6001;
&#x6267;&#x884C;&#x72B6;&#x6001;
&#x51FD;&#x6570;&#x5165;&#x53E3;
</code></pre>
<p>&#x5B83;&#x4E0D;&#x662F;&#x7EBF;&#x7A0B;&#xFF0C;&#x4E5F;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x3002;</p>
<p>&#x51FD;&#x6570;&#x53EA;&#x662F;&#x4EE3;&#x7801;&#x3002;</p>
<p>goroutine &#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x6267;&#x884C;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x65F6;&#x6240;&#x9700;&#x8981;&#x4FDD;&#x5B58;&#x7684;&#x5B8C;&#x6574;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
</blockquote>
<hr>
<h1 id="&#x4E8C;&#x3001;Go runtime &#x5728;&#x7EBF;&#x7A0B;&#x4E4B;&#x4E0A;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x5C42;&#x8C03;&#x5EA6;"><a href="#&#x4E8C;&#x3001;Go runtime &#x5728;&#x7EBF;&#x7A0B;&#x4E4B;&#x4E0A;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x5C42;&#x8C03;&#x5EA6;"></a>&#x4E8C;&#x3001;Go runtime &#x5728;&#x7EBF;&#x7A0B;&#x4E4B;&#x4E0A;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x5C42;&#x8C03;&#x5EA6;</h1>
<p>&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code>Process

    Thread 1
    Thread 2
    Thread 3
</code></pre>
<p>&#x5B83;&#x4E0D;&#x77E5;&#x9053; goroutine&#x3002;</p>
<p>&#x4F46;&#x662F; Go runtime &#x770B;&#x5230;&#xFF1A;</p>
<pre><code>G1
G2
G3
G4
...
</code></pre>
<p>&#x7136;&#x540E;&#xFF1A;</p>
<pre><code>OS Thread

       |
       v

Go Scheduler

       |
       +---- G1
       |
       +---- G2
       |
       +---- G3
</code></pre>
<p>&#x8FD9;&#x5C31;&#x662F; Go &#x7684; G-M-P &#x6A21;&#x578B;&#xFF1A;</p>
<pre><code>G:
goroutine

M:
machine
(OS thread)

P:
processor
(Go runtime &#x8C03;&#x5EA6;&#x8D44;&#x6E90;)
</code></pre>
<p>&#x5173;&#x7CFB;&#xFF1A;</p>
<pre><code>M(thread)
    |
    P
    |
    G queue
</code></pre>
<hr>
<h1 id="&#x4E09;&#x3001;goroutine &#x5982;&#x4F55;&#x8FD0;&#x884C;&#xFF1F;"><a href="#&#x4E09;&#x3001;goroutine &#x5982;&#x4F55;&#x8FD0;&#x884C;&#xFF1F;"></a>&#x4E09;&#x3001;goroutine &#x5982;&#x4F55;&#x8FD0;&#x884C;&#xFF1F;</h1>
<p>&#x5F53;&#x5199;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">go</span> foo()
</code></pre>
<p>&#x7F16;&#x8BD1;&#x5668;&#x4E0D;&#x4F1A;&#x628A; foo &#x76F4;&#x63A5;&#x585E;&#x8FDB;&#x7EBF;&#x7A0B;&#x3002;</p>
<p>&#x5B83;&#x4F1A;&#x751F;&#x6210;&#x7C7B;&#x4F3C;&#xFF1A;</p>
<pre><code class="language-go">runtime.newproc(foo)
</code></pre>
<p>&#x7136;&#x540E;&#xFF1A;</p>
<pre><code>runtime:

&#x521B;&#x5EFA; G

G.entry = foo

&#x653E;&#x5165; scheduler &#x961F;&#x5217;
</code></pre>
<p>&#x4E4B;&#x540E;&#x67D0;&#x4E2A;&#x7EBF;&#x7A0B;&#xFF1A;</p>
<pre><code>Thread 1

&#x8FDB;&#x5165; Go scheduler

&#x53D1;&#x73B0;:

G1 -&gt; foo()

&#x4E8E;&#x662F;&#xFF1A;

&#x6062;&#x590D; G1 &#x7684;&#x6267;&#x884C;&#x72B6;&#x6001;

CPU &#x5F00;&#x59CB;&#x6267;&#x884C; foo &#x7684;&#x673A;&#x5668;&#x7801;
</code></pre>
<p>&#x6CE8;&#x610F;&#xFF1A;</p>
<p>CPU &#x4E0D;&#x77E5;&#x9053; goroutine&#x3002;</p>
<p>CPU &#x53EA;&#x662F;&#x6267;&#x884C;&#xFF1A;</p>
<pre><code>foo &#x7684;&#x673A;&#x5668;&#x6307;&#x4EE4;&#x5730;&#x5740;
</code></pre>
<hr>
<h1 id="&#x56DB;&#x3001;&#x51FD;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x4EE5;&#x6682;&#x505C;&#x548C;&#x6062;&#x590D;&#xFF1F;"><a href="#&#x56DB;&#x3001;&#x51FD;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x4EE5;&#x6682;&#x505C;&#x548C;&#x6062;&#x590D;&#xFF1F;"></a>&#x56DB;&#x3001;&#x51FD;&#x6570;&#x4E3A;&#x4EC0;&#x4E48;&#x53EF;&#x4EE5;&#x6682;&#x505C;&#x548C;&#x6062;&#x590D;&#xFF1F;</h1>
<p>&#x8FD9;&#x662F; goroutine &#x6700;&#x6838;&#x5FC3;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<p>CPU &#x6267;&#x884C;&#x4EE3;&#x7801;&#x65F6;&#xFF0C;&#x672C;&#x8D28;&#x4F9D;&#x8D56;&#xFF1A;</p>
<pre><code>PC:
&#x4E0B;&#x4E00;&#x6761;&#x6307;&#x4EE4;&#x5730;&#x5740;

SP:
&#x6808;&#x4F4D;&#x7F6E;

Registers:
&#x5BC4;&#x5B58;&#x5668;&#x72B6;&#x6001;
</code></pre>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>G1:

PC = 0x123456
SP = 0xabcd
RAX = 10
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x5C31;&#x662F;&#x6267;&#x884C;&#x73B0;&#x573A;&#x3002;</p>
<p>&#x5F53; goroutine &#x88AB;&#x5207;&#x8D70;&#xFF1A;</p>
<p>runtime &#x4FDD;&#x5B58;&#xFF1A;</p>
<pre><code>G1:

PC
SP
registers
stack
</code></pre>
<p>&#x7136;&#x540E;&#xFF1A;</p>
<p>&#x6062;&#x590D; G2&#xFF1A;</p>
<pre><code>G2:

PC = 0x987654
SP = 0xefgh
</code></pre>
<p>CPU &#x7EE7;&#x7EED;&#x6267;&#x884C; G2&#x3002;</p>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<blockquote>
<p>goroutine &#x5207;&#x6362;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x7528;&#x6237;&#x6001;&#x4FDD;&#x5B58;&#x548C;&#x6062;&#x590D;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</p>
</blockquote>
<p>&#x548C;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x5207;&#x7EBF;&#x7A0B;&#x7C7B;&#x4F3C;&#x3002;</p>
<p>&#x533A;&#x522B;&#xFF1A;</p>
<p>&#x7EBF;&#x7A0B;&#x5207;&#x6362;&#xFF1A;</p>
<pre><code>OS kernel &#x505A;
</code></pre>
<p>goroutine &#x5207;&#x6362;&#xFF1A;</p>
<pre><code>Go runtime &#x505A;
</code></pre>
<hr>
<h1 id="&#x4E94;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019; goroutine &#x4F1A;&#x88AB;&#x5207;&#x6362;&#xFF1F;"><a href="#&#x4E94;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019; goroutine &#x4F1A;&#x88AB;&#x5207;&#x6362;&#xFF1F;"></a>&#x4E94;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019; goroutine &#x4F1A;&#x88AB;&#x5207;&#x6362;&#xFF1F;</h1>
<p>&#x4E0D;&#x662F;&#x4EFB;&#x4F55;&#x65F6;&#x5019;&#x3002;</p>
<p>&#x4E3B;&#x8981;&#x6709;&#xFF1A;</p>
<h2 id="1. &#x963B;&#x585E;"><a href="#1. &#x963B;&#x585E;"></a>1. &#x963B;&#x585E;</h2>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go">ch &lt;- value
</code></pre>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x63A5;&#x6536;&#x8005;&#xFF1A;</p>
<pre><code>G1

&#x53D1;&#x9001;&#x6570;&#x636E;

&#x53D1;&#x73B0;&#x65E0;&#x6CD5;&#x7EE7;&#x7EED;

&#x2193;

&#x8FDB;&#x5165;&#x7B49;&#x5F85;&#x72B6;&#x6001;

&#x2193;

runtime &#x8C03;&#x5EA6;&#x5176;&#x4ED6; G
</code></pre>
<hr>
<h2 id="2. &#x7F51;&#x7EDC;&#x7B49;&#x5F85;"><a href="#2. &#x7F51;&#x7EDC;&#x7B49;&#x5F85;"></a>2. &#x7F51;&#x7EDC;&#x7B49;&#x5F85;</h2>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go">conn.Read(buf)
</code></pre>
<p>&#x4F20;&#x7EDF;&#x7EBF;&#x7A0B;&#xFF1A;</p>
<pre><code>thread &#x963B;&#x585E;
</code></pre>
<p>Go&#xFF1A;</p>
<pre><code>G1 &#x7B49;&#x5F85; IO

thread &#x53BB;&#x8FD0;&#x884C; G2
</code></pre>
<p>&#x6240;&#x4EE5;&#x4E00;&#x4E2A;&#x7EBF;&#x7A0B;&#x53EF;&#x4EE5;&#x670D;&#x52A1;&#x5927;&#x91CF;&#x7F51;&#x7EDC;&#x8FDE;&#x63A5;&#x3002;</p>
<hr>
<h2 id="3. &#x4E3B;&#x52A8;&#x8BA9;&#x51FA;"><a href="#3. &#x4E3B;&#x52A8;&#x8BA9;&#x51FA;"></a>3. &#x4E3B;&#x52A8;&#x8BA9;&#x51FA;</h2>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go">runtime.Gosched()
</code></pre>
<p>&#x8868;&#x793A;&#xFF1A;</p>
<pre><code>&#x6211;&#x5148;&#x6682;&#x505C;&#xFF0C;&#x8BA9;&#x5176;&#x4ED6; goroutine &#x8FD0;&#x884C;
</code></pre>
<hr>
<h2 id="4. &#x62A2;&#x5360;"><a href="#4. &#x62A2;&#x5360;"></a>4. &#x62A2;&#x5360;</h2>
<p>&#x73B0;&#x4EE3; Go &#x652F;&#x6301;&#x5F02;&#x6B65;&#x62A2;&#x5360;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">for</span> {

}
</code></pre>
<p>&#x4E0D;&#x4F1A;&#x6C38;&#x4E45;&#x9738;&#x5360;&#x7EBF;&#x7A0B;&#x3002;</p>
<p>&#x7F16;&#x8BD1;&#x5668;&#x548C; runtime &#x4F1A;&#x534F;&#x4F5C;&#x63D2;&#x5165;&#x68C0;&#x67E5;&#x70B9;&#xFF1A;</p>
<pre><code>loop

&#x68C0;&#x67E5;&#x662F;&#x5426;&#x9700;&#x8981;&#x8C03;&#x5EA6;

loop
</code></pre>
<p>runtime &#x53EF;&#x4EE5;&#xFF1A;</p>
<pre><code>&#x4FDD;&#x5B58; G1

&#x5207;&#x6362; G2
</code></pre>
<hr>
<h1 id="&#x516D;&#x3001;channel &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x9B54;&#x6CD5;&#x201D;&#xFF1F;"><a href="#&#x516D;&#x3001;channel &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x9B54;&#x6CD5;&#x201D;&#xFF1F;"></a>&#x516D;&#x3001;channel &#x4E3A;&#x4EC0;&#x4E48;&#x50CF;&#x201C;&#x9B54;&#x6CD5;&#x201D;&#xFF1F;</h1>
<p>channel &#x4E0D;&#x662F;&#x666E;&#x901A;&#x961F;&#x5217;&#x3002;</p>
<p>&#x5B83;&#x662F; runtime &#x7BA1;&#x7406;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go">ch := <span class="hljs-built_in">make</span>(<span class="hljs-keyword">chan</span> <span class="hljs-keyword">int</span>)
</code></pre>
<p>&#x5185;&#x90E8;&#xFF1A;</p>
<pre><code>hchan

 |
 +-- buffer
 |
 +-- send queue
 |
 +-- receive queue
</code></pre>
<p>&#x53D1;&#x9001;&#xFF1A;</p>
<pre><code class="language-go">ch &lt;- <span class="hljs-number">10</span>
</code></pre>
<p>&#x5982;&#x679C;&#x6CA1;&#x4EBA;&#x63A5;&#xFF1A;</p>
<pre><code>G1

send

&#x2193;

&#x6302;&#x8D77;

&#x2193;

&#x8FDB;&#x5165;&#x7B49;&#x5F85;&#x961F;&#x5217;
</code></pre>
<p>&#x63A5;&#x6536;&#xFF1A;</p>
<pre><code class="language-go">x := &lt;-ch
</code></pre>
<p>runtime&#xFF1A;</p>
<pre><code>&#x627E;&#x5230;&#x7B49;&#x5F85;&#x4E2D;&#x7684; G1

&#x5524;&#x9192;

&#x4EA4;&#x6362;&#x6570;&#x636E;

&#x7EE7;&#x7EED;&#x6267;&#x884C;
</code></pre>
<p>&#x6240;&#x4EE5; channel &#x672C;&#x8D28;&#xFF1A;</p>
<blockquote>
<p>&#x8C03;&#x5EA6;&#x5668; + &#x540C;&#x6B65;&#x673A;&#x5236;&#x3002;</p>
</blockquote>
<hr>
<h1 id="&#x4E03;&#x3001;Go runtime &#x7BA1;&#x7406;&#x7684;&#x4E0D;&#x53EA;&#x662F; goroutine"><a href="#&#x4E03;&#x3001;Go runtime &#x7BA1;&#x7406;&#x7684;&#x4E0D;&#x53EA;&#x662F; goroutine"></a>&#x4E03;&#x3001;Go runtime &#x7BA1;&#x7406;&#x7684;&#x4E0D;&#x53EA;&#x662F; goroutine</h1>
<p>&#x7406;&#x89E3; runtime &#x540E;&#xFF0C;Go &#x7684;&#x5F88;&#x591A;&#x673A;&#x5236;&#x90FD;&#x80FD;&#x4E32;&#x8D77;&#x6765;&#x3002;</p>
<h2 id="1. Scheduler"><a href="#1. Scheduler"></a>1. Scheduler</h2>
<p>&#x8D1F;&#x8D23;&#xFF1A;</p>
<pre><code>G-M-P &#x8C03;&#x5EA6;&#x6A21;&#x578B;
</code></pre>
<p>&#x7BA1;&#x7406;&#xFF1A;</p>
<ul>
<li>goroutine &#x521B;&#x5EFA;</li>
<li>&#x6682;&#x505C;</li>
<li>&#x6062;&#x590D;</li>
<li>&#x62A2;&#x5360;</li>
</ul>
<hr>
<h2 id="2. Garbage Collector"><a href="#2. Garbage Collector"></a>2. Garbage Collector</h2>
<p>Go &#x81EA;&#x52A8;&#x7BA1;&#x7406;&#x5185;&#x5B58;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-go">obj := &amp;User{}
</code></pre>
<p>runtime &#x8DDF;&#x8E2A;&#xFF1A;</p>
<pre><code>heap:

obj1
obj2
obj3
</code></pre>
<p>GC&#xFF1A;</p>
<pre><code>&#x6807;&#x8BB0;&#x5B58;&#x6D3B;&#x5BF9;&#x8C61;

&#x6E05;&#x7406;&#x4E0D;&#x53EF;&#x8FBE;&#x5BF9;&#x8C61;
</code></pre>
<p>&#x73B0;&#x4EE3; Go&#xFF1A;</p>
<pre><code>&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;

GC &#x5E76;&#x53D1;&#x6267;&#x884C;

&#x51CF;&#x5C11;&#x6682;&#x505C;
</code></pre>
<p>&#x4F9D;&#x8D56;&#xFF1A;</p>
<ul>
<li>&#x4E09;&#x8272;&#x6807;&#x8BB0;</li>
<li>write barrier</li>
<li>&#x5E76;&#x53D1;&#x626B;&#x63CF;</li>
</ul>
<hr>
<h2 id="3. &#x7F51;&#x7EDC;&#x8C03;&#x5EA6; netpoller"><a href="#3. &#x7F51;&#x7EDC;&#x8C03;&#x5EA6; netpoller"></a>3. &#x7F51;&#x7EDC;&#x8C03;&#x5EA6; netpoller</h2>
<p>Go &#x7F51;&#x7EDC;&#x5E93;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x963B;&#x585E;&#x7EBF;&#x7A0B;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code>10000 &#x4E2A;&#x8FDE;&#x63A5;

&#x2193;

10000 &#x4E2A; goroutine

&#x2193;

&#x5C11;&#x91CF;&#x7EBF;&#x7A0B;

&#x2193;

runtime + epoll/kqueue
</code></pre>
<p>runtime &#x7BA1;&#x7406;&#x7B49;&#x5F85;&#x72B6;&#x6001;&#x3002;</p>
<hr>
<h2 id="4. defer"><a href="#4. defer"></a>4. defer</h2>
<p>&#x4EE3;&#x7801;&#xFF1A;</p>
<pre><code class="language-go"><span class="hljs-keyword">defer</span> <span class="hljs-built_in">close</span>(file)
</code></pre>
<p>&#x8868;&#x9762;&#xFF1A;</p>
<pre><code>&#x6CE8;&#x518C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;
</code></pre>
<p>&#x5B9E;&#x9645;&#xFF1A;</p>
<p>&#x7F16;&#x8BD1;&#x5668;&#x548C; runtime &#x4F1A;&#x4F18;&#x5316;&#x6267;&#x884C;&#x65B9;&#x5F0F;&#x3002;</p>
<hr>
<h2 id="5. interface"><a href="#5. interface"></a>5. interface</h2>
<p>interface &#x80CC;&#x540E;&#xFF1A;</p>
<pre><code>type &#x4FE1;&#x606F;

+

data &#x6307;&#x9488;

+

method table
</code></pre>
<p>&#x8C03;&#x7528;&#xFF1A;</p>
<pre><code class="language-go">w.Write()
</code></pre>
<p>&#x5B9E;&#x9645;&#xFF1A;</p>
<pre><code>&#x67E5;&#x627E;&#x63A5;&#x53E3;&#x8868;

&#x627E;&#x5230;&#x51FD;&#x6570;&#x5730;&#x5740;

&#x8DF3;&#x8F6C;&#x6267;&#x884C;
</code></pre>
<hr>
<h2 id="6. map"><a href="#6. map"></a>6. map</h2>
<p>Go map&#xFF1A;</p>
<p>&#x4E0D;&#x662F;&#x7B80;&#x5355; hash table&#x3002;</p>
<p>runtime &#x7BA1;&#x7406;&#xFF1A;</p>
<pre><code>hmap

 |
 +-- buckets
 |
 +-- overflow
 |
 +-- hash
</code></pre>
<p>&#x6269;&#x5BB9;&#xFF1A;</p>
<pre><code>&#x65E7; bucket

&#x9010;&#x6E10;&#x8FC1;&#x79FB;

&#x65B0; bucket
</code></pre>
<p>&#x907F;&#x514D;&#x957F;&#x65F6;&#x95F4;&#x505C;&#x987F;&#x3002;</p>
<hr>
<h1 id="&#x516B;&#x3001;Go &#x7684;&#x6574;&#x4F53;&#x7ED3;&#x6784;"><a href="#&#x516B;&#x3001;Go &#x7684;&#x6574;&#x4F53;&#x7ED3;&#x6784;"></a>&#x516B;&#x3001;Go &#x7684;&#x6574;&#x4F53;&#x7ED3;&#x6784;</h1>
<p>&#x6700;&#x7EC8;&#x6A21;&#x578B;&#xFF1A;</p>
<pre><code>                 CPU
                  |
                  v
          OS scheduler
                  |
                  v
             OS Thread
                  |
                  v
          Go runtime
                  |
     +------------+-------------+
     |            |             |
 scheduler       GC        netpoller
     |
 goroutines

     |
     v

&#x7528;&#x6237;&#x4E1A;&#x52A1;&#x4EE3;&#x7801;
</code></pre>
<hr>
<h1 id="&#x6700;&#x7EC8;&#x7406;&#x89E3;"><a href="#&#x6700;&#x7EC8;&#x7406;&#x89E3;"></a>&#x6700;&#x7EC8;&#x7406;&#x89E3;</h1>
<p>Go &#x7684;&#x6838;&#x5FC3;&#x4E0D;&#x662F;&#x201C;&#x8BED;&#x6CD5;&#x7B80;&#x5355;&#x201D;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x6838;&#x5FC3;&#x662F;&#xFF1A;</p>
<blockquote>
<p>Go &#x628A;&#x5F88;&#x591A;&#x8FC7;&#x53BB;&#x7531;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x8D1F;&#x8D23;&#x7684;&#x673A;&#x5236;&#xFF0C;&#x5728;&#x7528;&#x6237;&#x6001; runtime &#x4E2D;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#xFF0C;&#x5E76;&#x9488;&#x5BF9;&#x5E76;&#x53D1;&#x573A;&#x666F;&#x4F18;&#x5316;&#x3002;</p>
</blockquote>
<p>&#x6240;&#x4EE5;&#xFF1A;</p>
<ul>
<li>goroutine = runtime &#x7BA1;&#x7406;&#x7684;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;</li>
<li>channel = runtime &#x7BA1;&#x7406;&#x7684;&#x540C;&#x6B65;&#x901A;&#x4FE1;&#x7ED3;&#x6784;</li>
<li>GC = runtime &#x7BA1;&#x7406;&#x7684;&#x5185;&#x5B58;&#x751F;&#x547D;&#x5468;&#x671F;</li>
<li>netpoller = runtime &#x7BA1;&#x7406;&#x7684; IO &#x7B49;&#x5F85;</li>
<li>interface/map/defer = &#x7F16;&#x8BD1;&#x5668; + runtime &#x534F;&#x4F5C;&#x5B9E;&#x73B0;</li>
</ul>
<p>&#x7406;&#x89E3; Go runtime &#x540E;&#xFF0C;Go &#x7684;&#x5F88;&#x591A;&#x201C;&#x9B54;&#x6CD5;&#x201D;&#x90FD;&#x4F1A;&#x53D8;&#x6210;&#x666E;&#x901A;&#x7684;&#x5DE5;&#x7A0B;&#x8BBE;&#x8BA1;&#xFF1A;</p>
<p><strong>&#x4E0D;&#x662F;&#x4EE3;&#x7801;&#x76F4;&#x63A5;&#x8DD1;&#x5728;&#x7EBF;&#x7A0B;&#x4E0A;&#xFF0C;&#x800C;&#x662F;&#x7F16;&#x8BD1;&#x540E;&#x7684;&#x4EE3;&#x7801;&#x548C; runtime &#x4E00;&#x8D77;&#x8FD0;&#x884C;&#xFF1B;runtime &#x4E0D;&#x66FF;&#x4EE3; CPU &#x6267;&#x884C;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x5728;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#x7BA1;&#x7406;&#x5B83;&#x7684;&#x751F;&#x547D;&#x5468;&#x671F;&#x3001;&#x8C03;&#x5EA6;&#x5173;&#x7CFB;&#x548C;&#x8D44;&#x6E90;&#x3002;</strong></p>
`,e=[{level:1,title:"Go Runtime：理解 Go “魔法”的核心",children:[]},{level:1,title:"一、关键认知：我们写的代码不是简单直接跑在线程上",children:[]},{level:1,title:"二、Go runtime 在线程之上重新实现了一层调度",children:[]},{level:1,title:"三、goroutine 如何运行？",children:[]},{level:1,title:"四、函数为什么可以暂停和恢复？",children:[]},{level:1,title:"五、什么时候 goroutine 会被切换？",children:[{level:2,title:"1. 阻塞",children:[]},{level:2,title:"2. 网络等待",children:[]},{level:2,title:"3. 主动让出",children:[]},{level:2,title:"4. 抢占",children:[]}]},{level:1,title:"六、channel 为什么像“魔法”？",children:[]},{level:1,title:"七、Go runtime 管理的不只是 goroutine",children:[{level:2,title:"1. Scheduler",children:[]},{level:2,title:"2. Garbage Collector",children:[]},{level:2,title:"3. 网络调度 netpoller",children:[]},{level:2,title:"4. defer",children:[]},{level:2,title:"5. interface",children:[]},{level:2,title:"6. map",children:[]}]},{level:1,title:"八、Go 的整体结构",children:[]},{level:1,title:"最终理解",children:[]}];export{x as attributes,n as html,e as nestedHeaders};
