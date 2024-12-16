const x={},s=`<p><a href="https://ziglang.org/">Zig &#x662F;&#x4E00;&#x79CD;&#x901A;&#x7528;&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x548C;&#x5DE5;&#x5177;&#x94FE;&#xFF0C;&#x7528;&#x4E8E;&#x7EF4;&#x62A4;&#x5065;&#x58EE;&#x3001;&#x6700;&#x4F18;&#x548C;&#x53EF;&#x91CD;&#x7528;&#x7684;&#x8F6F;&#x4EF6;</a></p>
<p>&#x89E3;&#x91CA;&#x4E0B; Zig &#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x63A7;&#x5236;&#x6D41; &#xFF0C;&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x6CA1;&#x5B58;&#x5206;&#x914D;&#xFF0C;&#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#x7684;&#x610F;&#x601D;&#xFF1F;</p>
<h3 id="&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x4F8B;&#x5B50;"><a href="#&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x4F8B;&#x5B50;"></a>&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x63A7;&#x5236;&#x6D41;&#x7684;&#x4F8B;&#x5B50;</h3>
<pre><code class="language-zig">// Zig
fn foo() i32 {
    return 1;
}

fn bar() i32 {
    return 2;
}

fn main() void {
    const x = foo() + bar(); // this is a simple addition, not a function call
    std.log.info(&quot;x = {d}&quot;, .{x}); // prints &quot;x = 3&quot;
}
</code></pre>
<pre><code class="language-python">
<span class="hljs-comment"># Python</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">foo</span>():</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">bar</span>():</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Adder</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span>(<span class="hljs-params">self, x</span>):</span>
        self.x = x

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__add__</span>(<span class="hljs-params">self, other</span>):</span>
        <span class="hljs-comment"># do something else</span>
        <span class="hljs-keyword">return</span> self.x * other.x

a = Adder(foo())
b = Adder(bar())
x = a + b <span class="hljs-comment"># this is a function call, not a simple addition</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;x =&quot;</span>, x) <span class="hljs-comment"># prints &quot;x = 2&quot;</span>
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;Zig &#x7684; + &#x8FD0;&#x7B97;&#x7B26;&#x53EA;&#x662F;&#x5BF9;&#x4E24;&#x4E2A;&#x6574;&#x6570;&#x8FDB;&#x884C;&#x7B80;&#x5355;&#x7684;&#x52A0;&#x6CD5;&#xFF0C;&#x4E0D;&#x4F1A;&#x6709;&#x4EFB;&#x4F55;&#x9690;&#x85CF;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x6216;&#x526F;&#x4F5C;&#x7528;&#x3002;&#x800C;&#x5728; Python &#x4E2D;&#xFF0C;+ &#x8FD0;&#x7B97;&#x7B26;&#x53EF;&#x4EE5;&#x88AB;&#x91CD;&#x8F7D;&#xFF0C;&#x6240;&#x4EE5; a + b &#x5B9E;&#x9645;&#x4E0A;&#x662F;&#x8C03;&#x7528;&#x4E86; Adder &#x7C7B;&#x7684; add &#x65B9;&#x6CD5;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x884C;&#x4E3A;&#x6216;&#x7ED3;&#x679C;&#x3002;</p>
<h3 id="&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x5185;&#x5B58;&#x5206;&#x914D;&#x4F8B;&#x5B50;"><a href="#&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x5185;&#x5B58;&#x5206;&#x914D;&#x4F8B;&#x5B50;"></a>&#x6CA1;&#x6709;&#x9690;&#x5F0F;&#x5185;&#x5B58;&#x5206;&#x914D;&#x4F8B;&#x5B50;</h3>
<pre><code class="language-zig">// Zig
const std = @import(&quot;std&quot;);

fn main() !void {
    const allocator = std.heap.page_allocator; // choose an allocator
    var s = try std.ArrayList(u8).initCapacity(allocator, 10); // allocate memory explicitly
    defer s.deinit(); // free memory explicitly

    try s.append(&apos;H&apos;);
    try s.append(&apos;e&apos;);
    try s.append(&apos;l&apos;);
    try s.append(&apos;l&apos;);
    try s.append(&apos;o&apos;);

    std.log.info(&quot;s = {s}&quot;, .{s.items}); // prints &quot;s = Hello&quot;
}
</code></pre>
<pre><code class="language-go"><span class="hljs-comment">// Go</span>
<span class="hljs-keyword">package</span> main

<span class="hljs-keyword">import</span> (
	<span class="hljs-string">&quot;fmt&quot;</span>
)

<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
	<span class="hljs-keyword">var</span> s []<span class="hljs-keyword">byte</span> <span class="hljs-comment">// declare a slice of bytes</span>
	s = <span class="hljs-built_in">append</span>(s, <span class="hljs-string">&apos;H&apos;</span>) <span class="hljs-comment">// append to the slice, may allocate memory implicitly</span>
	s = <span class="hljs-built_in">append</span>(s, <span class="hljs-string">&apos;e&apos;</span>)
	s = <span class="hljs-built_in">append</span>(s, <span class="hljs-string">&apos;l&apos;</span>)
	s = <span class="hljs-built_in">append</span>(s, <span class="hljs-string">&apos;l&apos;</span>)
	s = <span class="hljs-built_in">append</span>(s, <span class="hljs-string">&apos;o&apos;</span>)

	fmt.Println(<span class="hljs-string">&quot;s =&quot;</span>, <span class="hljs-keyword">string</span>(s)) <span class="hljs-comment">// prints &quot;s = Hello&quot;</span>
}
</code></pre>
<p>Zig &#x7684;&#x7A0B;&#x5E8F;&#x5458;&#x9700;&#x8981;&#x663E;&#x5F0F;&#x5730;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x5206;&#x914D;&#x5668;&#xFF0C;&#x663E;&#x5F0F;&#x5730;&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#x5185;&#x5B58;&#xFF0C;&#x5E76;&#x5904;&#x7406;&#x53EF;&#x80FD;&#x7684;&#x5206;&#x914D;&#x5931;&#x8D25;&#x3002;&#x800C;&#x5728; Go &#x4E2D;&#xFF0C;&#x7A0B;&#x5E8F;&#x5458;&#x4E0D;&#x9700;&#x8981;&#x5173;&#x5FC3;&#x5185;&#x5B58;&#x5206;&#x914D;&#x7684;&#x7EC6;&#x8282;&#xFF0C;&#x4F46;&#x4E5F;&#x65E0;&#x6CD5;&#x63A7;&#x5236;&#x6216;&#x9884;&#x6D4B;&#x5185;&#x5B58;&#x5206;&#x914D;&#x7684;&#x884C;&#x4E3A;&#x548C;&#x5F00;&#x9500;&#x3002;</p>
<h3 id="&#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#x7684;&#x4F8B;&#x5B50;"><a href="#&#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#x7684;&#x4F8B;&#x5B50;"></a>&#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#x7684;&#x4F8B;&#x5B50;</h3>
<p>Zig &#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#xFF0C;&#x6CA1;&#x6709;&#x5B8F;&#xFF0C;&#x610F;&#x5473;&#x7740; Zig &#x4E0D;&#x4F7F;&#x7528;&#x6587;&#x672C;&#x66FF;&#x6362;&#x6216;&#x5176;&#x4ED6;&#x590D;&#x6742;&#x7684;&#x9884;&#x5904;&#x7406;&#x6280;&#x672F;&#x6765;&#x751F;&#x6210;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x63D0;&#x4F9B;&#x4E86;&#x7F16;&#x8BD1;&#x671F;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x548C;&#x7F16;&#x8BD1;&#x671F;&#x53CD;&#x5C04;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x8BA9;&#x7A0B;&#x5E8F;&#x5458;&#x53EF;&#x4EE5;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x8C03;&#x7528;&#x4EFB;&#x610F;&#x51FD;&#x6570;&#xFF0C;&#x64CD;&#x4F5C;&#x7C7B;&#x578B;&#x548C;&#x503C;&#xFF0C;&#x6A21;&#x62DF;&#x76EE;&#x6807;&#x67B6;&#x6784;&#x7B49;&#xB9;&#x3002;&#x8FD9;&#x6709;&#x52A9;&#x4E8E;&#x63D0;&#x9AD8;&#x4EE3;&#x7801;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x548C;&#x4E00;&#x81F4;&#x6027;&#x3002;</p>
<p>&#x4E3E;&#x4F8B;&#x8BF4;&#x660E;&#xFF1A;</p>
<ul>
<li>Zig &#x6CA1;&#x6709;&#x9884;&#x5904;&#x7406;&#x5668;&#xFF0C;&#x6CA1;&#x6709;&#x5B8F;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;</li>
</ul>
<pre><code class="language-zig">// Zig
const std = @import(&quot;std&quot;);

const payload = \\\\{
\\\\   &quot;vals&quot;: {
\\\\       &quot;testing&quot;: 1,
\\\\       &quot;production&quot;: 42
\\\\   },
\\\\   &quot;uptime&quot;: 9999
\\\\};

const Config = struct {
    vals: struct {
        testing: u8,
        production: u8,
    },
    uptime: u64,
};

const config = x: {
    var stream = std.json.TokenStream.init(payload);
    const res = std.json.parse(Config, &amp;stream, .{}); // parse JSON at compile time
    break :x res catch unreachable
};

pub fn main() !void {
    if (config.vals.production &gt; 50) {
        @compileError(&quot;only up to 50 supported&quot;); // emit a compile error
    }
    std.log.info(&quot;up= {d}&quot;, .{config.uptime}); // prints &quot;up= 9999&quot;
}
</code></pre>
<pre><code class="language-c"><span class="hljs-comment">// C</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdlib.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;string.h&gt;</span></span>

<span class="hljs-meta">#<span class="hljs-meta-keyword">define</span> PAYLOAD <span class="hljs-meta-string">&quot;{ \\&quot;vals\\&quot;: { \\&quot;testing\\&quot;: 1, \\&quot;production\\&quot;: 42 }, \\&quot;uptime\\&quot;: 9999 }&quot;</span></span>

<span class="hljs-keyword">typedef</span> <span class="hljs-class"><span class="hljs-keyword">struct</span> {</span>
    <span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">char</span> testing;
    <span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">char</span> production;
} <span class="hljs-keyword">vals_t</span>;

<span class="hljs-keyword">typedef</span> <span class="hljs-class"><span class="hljs-keyword">struct</span> {</span>
    <span class="hljs-keyword">vals_t</span> vals;
    <span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">long</span> uptime;
} <span class="hljs-keyword">config_t</span>;

<span class="hljs-keyword">config_t</span> config; <span class="hljs-comment">// global variable</span>

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">parse_json</span><span class="hljs-params">(<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span>* payload)</span> </span>{
    <span class="hljs-comment">// parse JSON at runtime using some library</span>
}

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">(<span class="hljs-keyword">void</span>)</span> </span>{
    parse_json(PAYLOAD); <span class="hljs-comment">// call a function to parse JSON</span>

<span class="hljs-meta">#<span class="hljs-meta-keyword">if</span> (config.vals.production &gt; 50) <span class="hljs-comment">// use a preprocessor directive</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">error</span> <span class="hljs-meta-string">&quot;only up to 50 supported&quot;</span> <span class="hljs-comment">// emit a preprocessor error</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">endif</span></span>

    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;up= %lu\\n&quot;</span>, config.uptime); <span class="hljs-comment">// prints &quot;up= 9999&quot;</span>
}
</code></pre>
<p>&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;Zig &#x7684;&#x7A0B;&#x5E8F;&#x5458;&#x53EF;&#x4EE5;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x89E3;&#x6790; JSON &#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5E76;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x7ED3;&#x6784;&#x4F53;&#x7C7B;&#x578B;&#x7684;&#x5E38;&#x91CF;&#x3002;Zig &#x8FD8;&#x53EF;&#x4EE5;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x68C0;&#x67E5;&#x6761;&#x4EF6;&#xFF0C;&#x5E76;&#x53D1;&#x51FA;&#x7F16;&#x8BD1;&#x9519;&#x8BEF;&#x3002;&#x800C;&#x5728; C &#x4E2D;&#xFF0C;&#x7A0B;&#x5E8F;&#x5458;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x5B8F;&#x6765;&#x5B9A;&#x4E49;&#x5B57;&#x7B26;&#x4E32;&#x5E38;&#x91CF;&#xFF0C;&#x5E76;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x6765;&#x89E3;&#x6790; JSON&#x3002;C &#x8FD8;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x9884;&#x5904;&#x7406;&#x5668;&#x6307;&#x4EE4;&#x6765;&#x68C0;&#x67E5;&#x6761;&#x4EF6;&#xFF0C;&#x5E76;&#x53D1;&#x51FA;&#x9884;&#x5904;&#x7406;&#x5668;&#x9519;&#x8BEF;&#x3002;</p>
<h2 id="pointer alignment &#x662F;&#x4EC0;&#x4E48;&#x610F;&#x601D;"><a href="#pointer alignment &#x662F;&#x4EC0;&#x4E48;&#x610F;&#x601D;"></a>pointer alignment &#x662F;&#x4EC0;&#x4E48;&#x610F;&#x601D;</h2>
<p>Pointer alignment &#x662F;&#x6307;&#x6307;&#x9488;&#x6240;&#x6307;&#x5411;&#x7684;&#x5185;&#x5B58;&#x5730;&#x5740;&#x662F;&#x5426;&#x7B26;&#x5408;&#x67D0;&#x4E2A;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x662F;&#x5426;&#x80FD;&#x88AB;&#x67D0;&#x4E2A;&#x5BF9;&#x9F50;&#x56E0;&#x5B50;&#x6574;&#x9664;&#x3002;&#x5BF9;&#x9F50;&#x56E0;&#x5B50;&#x901A;&#x5E38;&#x662F; 2 &#x7684;&#x5E42;&#x6B21;&#xFF0C;&#x4F8B;&#x5982; 1&#x3001;2&#x3001;4&#x3001;8 &#x7B49;&#x3002;&#x4E0D;&#x540C;&#x7684;&#x7C7B;&#x578B;&#x6216;&#x5E73;&#x53F0;&#x53EF;&#x80FD;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF0C;&#x4F8B;&#x5982;&#x5728; 64 &#x4F4D;&#x7CFB;&#x7EDF;&#x4E0A;&#xFF0C;&#x4E00;&#x4E2A; usize &#x7C7B;&#x578B;&#x7684;&#x6307;&#x9488;&#x53EF;&#x80FD;&#x9700;&#x8981; 8 &#x5B57;&#x8282;&#x5BF9;&#x9F50;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#x5B83;&#x7684;&#x5730;&#x5740;&#x5FC5;&#x987B;&#x80FD;&#x88AB; 8 &#x6574;&#x9664;&#x3002;&#x5982;&#x679C;&#x6307;&#x9488;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x6027;&#x80FD;&#x4E0B;&#x964D;&#x6216;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#xB9;&#xB2;&#x3002;</p>
<p>&#x4E3E;&#x4F8B;&#x8BF4;&#x660E; Zig &#x6216;&#x8005; C &#x7684; pointer alignment&#xFF1A;</p>
<ul>
<li>&#x5728; Zig &#x4E2D;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @alignCast &#x51FD;&#x6570;&#x6765;&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x9488;&#x8F6C;&#x6362;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#x7684;&#x6307;&#x9488;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</li>
</ul>
<pre><code class="language-zig">const std = @import(&quot;std&quot;);
const expect = std.testing.expect;

test &quot;align cast&quot; {
    var array: [4]u8 = undefined;
    var ptr: *u8 = &amp;array[0];
    // ptr is 1-byte aligned by default
    try expect(ptr &amp; 0x7 == 0); // this may fail
    // cast ptr to a 8-byte aligned pointer
    var aligned_ptr = @alignCast(8, ptr);
    // aligned_ptr is guaranteed to be 8-byte aligned
    try expect(aligned_ptr &amp; 0x7 == 0); // this will pass
}
</code></pre>
<ul>
<li>&#x5728; C &#x4E2D;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; _Alignas &#x5173;&#x952E;&#x5B57;&#x6765;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x6307;&#x9488;&#x7684;&#x5BF9;&#x9F50;&#x8981;&#x6C42;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</li>
</ul>
<pre><code class="language-c"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdalign.h&gt;</span></span>

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">(<span class="hljs-keyword">void</span>)</span> </span>{
    <span class="hljs-keyword">char</span> <span class="hljs-built_in">array</span>[<span class="hljs-number">4</span>];
    <span class="hljs-keyword">char</span> *ptr = &amp;<span class="hljs-built_in">array</span>[<span class="hljs-number">0</span>];
    <span class="hljs-comment">// ptr is 1-byte aligned by default</span>
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;ptr = %p\\n&quot;</span>, (<span class="hljs-keyword">void</span> *)ptr);
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;ptr %% 8 = %d\\n&quot;</span>, (<span class="hljs-keyword">int</span>)(ptr % <span class="hljs-number">8</span>)); <span class="hljs-comment">// this may be non-zero</span>
    <span class="hljs-comment">// declare a pointer with 8-byte alignment</span>
    _Alignas(<span class="hljs-number">8</span>) <span class="hljs-keyword">char</span> *aligned_ptr = ptr;
    <span class="hljs-comment">// aligned_ptr is guaranteed to be 8-byte aligned</span>
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;aligned_ptr = %p\\n&quot;</span>, (<span class="hljs-keyword">void</span> *)aligned_ptr);
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;aligned_ptr %% 8 = %d\\n&quot;</span>, (<span class="hljs-keyword">int</span>)(aligned_ptr % <span class="hljs-number">8</span>)); <span class="hljs-comment">// this will be zero</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre>
<h2 id="Zig &#x662F;&#x5982;&#x4F55;&#x907F;&#x514D; C &#x7684;&#x7F13;&#x51B2;&#x95EE;&#x9898;&#x7684;"><a href="#Zig &#x662F;&#x5982;&#x4F55;&#x907F;&#x514D; C &#x7684;&#x7F13;&#x51B2;&#x95EE;&#x9898;&#x7684;"></a>Zig &#x662F;&#x5982;&#x4F55;&#x907F;&#x514D; C &#x7684;&#x7F13;&#x51B2;&#x95EE;&#x9898;&#x7684;</h2>
<p>&#x7B54;&#xFF1A;Zig &#x662F;&#x5982;&#x4F55;&#x907F;&#x514D; C &#x7684;&#x7F13;&#x51B2;&#x95EE;&#x9898;&#x7684;&#xFF0C;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5F88;&#x597D;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<p>&#x7F13;&#x51B2;&#x533A;&#x6EA2;&#x51FA;&#x662F;&#x4E00;&#x79CD;&#x975E;&#x5E38;&#x666E;&#x904D;&#x3001;&#x975E;&#x5E38;&#x5371;&#x9669;&#x7684;&#x6F0F;&#x6D1E;&#xFF0C;&#x5728;&#x5404;&#x79CD;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x3001;&#x5E94;&#x7528;&#x8F6F;&#x4EF6;&#x4E2D;&#x5E7F;&#x6CDB;&#x5B58;&#x5728;&#x3002;&#x5229;&#x7528;&#x7F13;&#x51B2;&#x533A;&#x6EA2;&#x51FA;&#x653B;&#x51FB;&#xFF0C;&#x53EF;&#x4EE5;&#x5BFC;&#x81F4;&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;&#x5931;&#x8D25;&#x3001;&#x7CFB;&#x7EDF;&#x5B95;&#x673A;&#x3001;&#x91CD;&#x65B0;&#x542F;&#x52A8;&#x7B49;&#x540E;&#x679C;&#x3002;&#x66F4;&#x4E3A;&#x4E25;&#x91CD;&#x7684;&#x662F;&#xFF0C;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x5B83;&#x6267;&#x884C;&#x975E;&#x6388;&#x6743;&#x6307;&#x4EE4;&#xFF0C;&#x751A;&#x81F3;&#x53EF;&#x4EE5;&#x53D6;&#x5F97;&#x7CFB;&#x7EDF;&#x7279;&#x6743;&#xFF0C;&#x8FDB;&#x800C;&#x8FDB;&#x884C;&#x5404;&#x79CD;&#x975E;&#x6CD5;&#x64CD;&#x4F5C;&#x3002;</p>
<p>&#x7F13;&#x51B2;&#x533A;&#x6EA2;&#x51FA;&#x7684;&#x539F;&#x56E0;&#x662F;&#x7A0B;&#x5E8F;&#x4E2D;&#x6CA1;&#x6709;&#x4ED4;&#x7EC6;&#x68C0;&#x67E5;&#x7528;&#x6237;&#x8F93;&#x5165;&#x7684;&#x53C2;&#x6570;&#x6216;&#x6570;&#x636E;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5BFC;&#x81F4;&#x5411;&#x7F13;&#x51B2;&#x533A;&#x5185;&#x586B;&#x5145;&#x6570;&#x636E;&#x65F6;&#x8D85;&#x8FC7;&#x4E86;&#x7F13;&#x51B2;&#x533A;&#x672C;&#x8EAB;&#x7684;&#x5BB9;&#x91CF;&#xFF0C;&#x800C;&#x5BFC;&#x81F4;&#x6570;&#x636E;&#x6EA2;&#x51FA;&#x5230;&#x88AB;&#x5206;&#x914D;&#x7A7A;&#x95F4;&#x4E4B;&#x5916;&#x7684;&#x5185;&#x5B58;&#x7A7A;&#x95F4;&#xFF0C;&#x4F7F;&#x5F97;&#x6EA2;&#x51FA;&#x7684;&#x6570;&#x636E;&#x8986;&#x76D6;&#x4E86;&#x5176;&#x4ED6;&#x5185;&#x5B58;&#x7A7A;&#x95F4;&#x7684;&#x6570;&#x636E;&#x3002;</p>
<p>Zig &#x901A;&#x8FC7;&#x4EE5;&#x4E0B;&#x51E0;&#x79CD;&#x65B9;&#x5F0F;&#x6765;&#x907F;&#x514D; C &#x7684;&#x7F13;&#x51B2;&#x95EE;&#x9898;&#xFF1A;</p>
<ul>
<li>Zig &#x6709;&#x66F4;&#x5F3A;&#x7684;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#xFF0C;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x4E00;&#x4E9B;&#x9690;&#x5F0F;&#x7684;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x6216;&#x9519;&#x8BEF;&#x7684;&#x7C7B;&#x578B;&#x5339;&#x914D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728; Zig &#x4E2D;&#xFF0C;&#x4F60;&#x4E0D;&#x80FD;&#x628A;&#x4E00;&#x4E2A; null &#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x975E;&#x7A7A;&#x7C7B;&#x578B;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x4E5F;&#x4E0D;&#x80FD;&#x628A;&#x4E00;&#x4E2A;&#x6307;&#x9488;&#x5F53;&#x4F5C;&#x4E00;&#x4E2A;&#x6574;&#x6570;&#x6765;&#x4F7F;&#x7528;&#x3002;</li>
<li>Zig &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E9B;&#x7F16;&#x8BD1;&#x671F;&#x548C;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x5B89;&#x5168;&#x68C0;&#x67E5;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x51FA;&#x73B0;&#x9519;&#x8BEF;&#x65F6;&#x53CA;&#x65F6;&#x62A5;&#x544A;&#x548C;&#x7EC8;&#x6B62;&#x7A0B;&#x5E8F;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x672A;&#x5B9A;&#x4E49;&#x7684;&#x884C;&#x4E3A;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728; Zig &#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x8BD5;&#x56FE;&#x5BF9;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x6570;&#x8FDB;&#x884C;&#x52A0;&#x6CD5;&#x8FD0;&#x7B97;&#xFF0C;&#x800C;&#x7ED3;&#x679C;&#x8D85;&#x51FA;&#x4E86;&#x8BE5;&#x7C7B;&#x578B;&#x7684;&#x6700;&#x5927;&#x503C;&#xFF0C;&#x90A3;&#x4E48;&#x7A0B;&#x5E8F;&#x4F1A;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x6216;&#x8FD0;&#x884C;&#x65F6;&#x62A5;&#x9519;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x50CF; C &#x90A3;&#x6837;&#x9ED8;&#x9ED8;&#x5730;&#x53D1;&#x751F;&#x6EA2;&#x51FA;&#x3002;</li>
<li>Zig &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E9B;&#x5B89;&#x5168;&#x7684;&#x51FD;&#x6570;&#x548C;&#x8BED;&#x6CD5;&#x6765;&#x5904;&#x7406;&#x5B57;&#x7B26;&#x4E32;&#x548C;&#x6570;&#x7EC4;&#xFF0C;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x4E0D;&#x5B89;&#x5168;&#x7684;&#x51FD;&#x6570;&#x548C;&#x8BED;&#x6CD5;&#xFF0C;&#x4F8B;&#x5982; strcpy &#xFF0C; strcat &#xFF0C; sprintf &#xFF0C; vsprintf &#xFF0C; gets &#xFF0C; scanf &#x7B49;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728; Zig &#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; [] &#x64CD;&#x4F5C;&#x7B26;&#x6765;&#x8BBF;&#x95EE;&#x6570;&#x7EC4;&#x6216;&#x5207;&#x7247;&#xFF08;slice&#xFF09;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @boundsCheck &#x6765;&#x5F00;&#x542F;&#x6216;&#x5173;&#x95ED;&#x8FB9;&#x754C;&#x68C0;&#x67E5;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; std.fmt.format &#x51FD;&#x6570;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; std.fmt.allocPrint &#x51FD;&#x6570;&#x6765;&#x5206;&#x914D;&#x8DB3;&#x591F;&#x7684;&#x5185;&#x5B58;&#x7A7A;&#x95F4;&#x6765;&#x5B58;&#x50A8;&#x683C;&#x5F0F;&#x5316;&#x540E;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF1B;&#x4F60;&#x8FD8;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; std.io.getStdIn().readLineAlloc &#x51FD;&#x6570;&#x6765;&#x5B89;&#x5168;&#x5730;&#x8BFB;&#x53D6;&#x4E00;&#x884C;&#x8F93;&#x5165;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; std.io.getStdIn().readInt &#x51FD;&#x6570;&#x6765;&#x5B89;&#x5168;&#x5730;&#x8BFB;&#x53D6;&#x4E00;&#x4E2A;&#x6574;&#x6570;&#x8F93;&#x5165;&#x3002;</li>
<li>Zig &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E9B;&#x9AD8;&#x7EA7;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x4F8B;&#x5982;&#x6CDB;&#x578B;&#x3001;&#x53CD;&#x5C04;&#x3001;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x7B49;&#xFF0C;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x4E00;&#x4E9B;&#x7075;&#x6D3B;&#x548C;&#x9AD8;&#x6548;&#x7684;&#x7F16;&#x7A0B;&#x6A21;&#x5F0F;&#xFF0C;&#x907F;&#x514D;&#x4F7F;&#x7528;&#x4E0D;&#x5B89;&#x5168;&#x548C;&#x4F4E;&#x6548;&#x7684;&#x7F16;&#x7A0B;&#x6A21;&#x5F0F;&#xFF0C;&#x4F8B;&#x5982;&#x5B8F;&#x3001;&#x6307;&#x9488;&#x7B97;&#x672F;&#x3001;&#x88F8;&#x6307;&#x9488;&#x7B49;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728; Zig &#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x6CDB;&#x578B;&#x51FD;&#x6570;&#x6216;&#x7ED3;&#x6784;&#x4F53;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x7684;&#x53C2;&#x6570;&#x6216;&#x5B57;&#x6BB5;&#xFF0C;&#x5E76;&#x6839;&#x636E;&#x53C2;&#x6570;&#x6216;&#x5B57;&#x6BB5;&#x7684;&#x7C7B;&#x578B;&#x751F;&#x6210;&#x4E0D;&#x540C;&#x7684;&#x4EE3;&#x7801;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @TypeOf &#x64CD;&#x4F5C;&#x7B26;&#x6765;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x6216;&#x53D8;&#x91CF;&#x7684;&#x7C7B;&#x578B;&#x4FE1;&#x606F;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @typeInfo &#x51FD;&#x6570;&#x6765;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x4FE1;&#x606F;&#xFF1B;&#x4F60;&#x8FD8;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @compileError &#x548C; @compileLog &#x6765;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x4EA7;&#x751F;&#x9519;&#x8BEF;&#x6216;&#x65E5;&#x5FD7;&#x4FE1;&#x606F;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; @embedFile &#x548C; @cInclude &#x6765;&#x5728;&#x7F16;&#x8BD1;&#x671F;&#x5D4C;&#x5165;&#x6587;&#x4EF6;&#x6216; C &#x5934;&#x6587;&#x4EF6;&#x3002;</li>
</ul>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>mainly reference GPT</li>
</ul>
`,n=[{level:3,title:"没有隐式控制流的例子",children:[]},{level:3,title:"没有隐式内存分配例子",children:[]},{level:3,title:"没有预处理器的例子",children:[]},{level:2,title:"pointer alignment 是什么意思",children:[]},{level:2,title:"Zig 是如何避免 C 的缓冲问题的",children:[]},{level:2,title:"Reference",children:[]}];export{x as attributes,s as html,n as nestedHeaders};
