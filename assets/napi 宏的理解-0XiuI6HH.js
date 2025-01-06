const x={},s=`<h1 id="napi &#x5B8F;&#x7684;&#x7406;&#x89E3;"><a href="#napi &#x5B8F;&#x7684;&#x7406;&#x89E3;"></a>napi &#x5B8F;&#x7684;&#x7406;&#x89E3;</h1>
<h2 id="&#x5B8F;&#x4E0E; DSL"><a href="#&#x5B8F;&#x4E0E; DSL"></a>&#x5B8F;&#x4E0E; DSL</h2>
<p>Rust &#x5B8F;&#x7684;&#x6838;&#x5FC3;&#x4E4B;&#x4E00;&#x662F;&#x901A;&#x8FC7;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x6765;&#x7B80;&#x5316;&#x91CD;&#x590D;&#x4EFB;&#x52A1;&#xFF0C;&#x800C; DSL&#xFF08;&#x9886;&#x57DF;&#x4E13;&#x7528;&#x8BED;&#x8A00;&#xFF09;&#x5219;&#x662F;&#x5728;&#x5B8F;&#x7684;&#x5E2E;&#x52A9;&#x4E0B;&#xFF0C;&#x4E3A;&#x7279;&#x5B9A;&#x9886;&#x57DF;&#x95EE;&#x9898;&#x8BBE;&#x8BA1;&#x7684;&#x4E00;&#x79CD;&#x66F4;&#x6613;&#x8BFB;&#x3001;&#x6613;&#x7528;&#x7684;&#x8BED;&#x6CD5;&#x3002;&#x901A;&#x8FC7;&#x5B8F;&#xFF0C;&#x53EF;&#x4EE5;&#x628A; Rust &#x7684;&#x4EE3;&#x7801;&#x53D8;&#x5F97;&#x50CF;&#x5B9A;&#x5236;&#x7684;&#x5C0F;&#x8BED;&#x8A00;&#x4E00;&#x6837;&#xFF0C;&#x8BA9;&#x5F00;&#x53D1;&#x8005;&#x4E13;&#x6CE8;&#x4E8E;&#x95EE;&#x9898;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x7EC6;&#x8282;&#x7684;&#x5B9E;&#x73B0;&#x3002;</p>
<p>&#x4EE5;&#x4E0B;&#x662F;&#x51E0;&#x4E2A;&#x793A;&#x4F8B;&#xFF0C;&#x5C55;&#x793A;&#x5982;&#x4F55;&#x7528; Rust &#x5B8F;&#x6784;&#x5EFA; DSL&#xFF1A;</p>
<hr>
<h3 id="&#x793A;&#x4F8B; 1&#xFF1A;&#x6784;&#x5EFA;&#x7B80;&#x5355;&#x7684; HTML DSL"><a href="#&#x793A;&#x4F8B; 1&#xFF1A;&#x6784;&#x5EFA;&#x7B80;&#x5355;&#x7684; HTML DSL"></a>&#x793A;&#x4F8B; 1&#xFF1A;&#x6784;&#x5EFA;&#x7B80;&#x5355;&#x7684; HTML DSL</h3>
<p>&#x4EE5;&#x4E0B;&#x5B8F;&#x5B9E;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684; HTML &#x6784;&#x5EFA;&#x5668;&#xFF0C;&#x7528;&#x4E8E;&#x751F;&#x6210; HTML &#x6587;&#x672C;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-built_in">macro_rules!</span> html {
    <span class="hljs-comment">// &#x5339;&#x914D;&#x7A7A;&#x6807;&#x7B7E;</span>
    ($tag:ident) =&gt; {
        <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;&lt;{}&gt;&lt;/{}&gt;&quot;</span>, <span class="hljs-built_in">stringify!</span>($tag), <span class="hljs-built_in">stringify!</span>($tag))
    };
    <span class="hljs-comment">// &#x5339;&#x914D;&#x5E26;&#x6709;&#x6587;&#x672C;&#x5185;&#x5BB9;&#x7684;&#x6807;&#x7B7E;</span>
    ($tag:ident, $content:expr) =&gt; {
        <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;&lt;{}&gt;{}&lt;/{}&gt;&quot;</span>, <span class="hljs-built_in">stringify!</span>($tag), $content, <span class="hljs-built_in">stringify!</span>($tag))
    };
    <span class="hljs-comment">// &#x5339;&#x914D;&#x5E26;&#x6709;&#x5D4C;&#x5957;&#x6807;&#x7B7E;&#x7684;&#x60C5;&#x51B5;</span>
    ($tag:ident, { $($inner:tt)* }) =&gt; {
        <span class="hljs-built_in">format!</span>(
            <span class="hljs-string">&quot;&lt;{}&gt;{}&lt;/{}&gt;&quot;</span>,
            <span class="hljs-built_in">stringify!</span>($tag),
            html!($($inner)*),
            <span class="hljs-built_in">stringify!</span>($tag)
        )
    };
    <span class="hljs-comment">// &#x5904;&#x7406;&#x591A;&#x4E2A;&#x5D4C;&#x5957;&#x6807;&#x7B7E;</span>
    ($($inner:tt)*) =&gt; {
        <span class="hljs-built_in">vec!</span>[$(html!($inner)),*].join(<span class="hljs-string">&quot;&quot;</span>)
    };
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> page = html!(
        html, {
            head, { title, <span class="hljs-string">&quot;Example Page&quot;</span> }
            body, {
                h1, <span class="hljs-string">&quot;Hello, World!&quot;</span>
                p, <span class="hljs-string">&quot;This is an example of a DSL in Rust.&quot;</span>
            }
        }
    );

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, page);
}
</code></pre>
<p><strong>&#x8F93;&#x51FA;&#xFF1A;</strong></p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Example Page<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, World!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is an example of a DSL in Rust.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p><strong>&#x5206;&#x6790;&#xFF1A;</strong></p>
<ul>
<li>&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x901A;&#x8FC7;&#x5B8F; <code>html!</code> &#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C; HTML &#x7684; DSL&#x3002;</li>
<li>&#x7528;&#x6237;&#x65E0;&#x9700;&#x5173;&#x5FC3;&#x5982;&#x4F55;&#x62FC;&#x63A5;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x53EA;&#x9700;&#x63CF;&#x8FF0; HTML &#x7ED3;&#x6784;&#x3002;</li>
<li>&#x5D4C;&#x5957;&#x8BED;&#x6CD5;&#x4E0E; HTML &#x81EA;&#x7136;&#x5BF9;&#x5E94;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x793A;&#x4F8B; 2&#xFF1A;&#x6784;&#x5EFA;&#x547D;&#x4EE4;&#x884C;&#x89E3;&#x6790;&#x5668; DSL"><a href="#&#x793A;&#x4F8B; 2&#xFF1A;&#x6784;&#x5EFA;&#x547D;&#x4EE4;&#x884C;&#x89E3;&#x6790;&#x5668; DSL"></a>&#x793A;&#x4F8B; 2&#xFF1A;&#x6784;&#x5EFA;&#x547D;&#x4EE4;&#x884C;&#x89E3;&#x6790;&#x5668; DSL</h3>
<p>&#x4EE5;&#x4E0B;&#x5B8F;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7B80;&#x5316;&#x547D;&#x4EE4;&#x884C;&#x53C2;&#x6570;&#x89E3;&#x6790;&#x7684; DSL&#xFF1A;</p>
<pre><code class="language-rust">macro_rules! cli {
    (
        $(
            $name:ident: $type:ty =&gt; $description:expr
        ),*
        $(,)?
    ) =&gt; {
        {
            let mut args = std::env::args().skip(1);
            let mut parsed = std::collections::HashMap::new();
            $(
                if let Some(value) = args.next() {
                    let parsed_value = value.parse::&lt;$type&gt;().expect(&amp;format!(
                        &quot;Failed to parse argument \`{}\`: {}&quot;,
                        stringify!($name), $description
                    ));
                    parsed.insert(stringify!($name).to_string(), parsed_value);
                }
            )*
            parsed
        }
    };
}

fn main() {
    // &#x5B9A;&#x4E49;&#x547D;&#x4EE4;&#x884C;&#x53C2;&#x6570;&#x7684;&#x683C;&#x5F0F;&#x548C;&#x63CF;&#x8FF0;
    let args = cli!(
        name: String =&gt; &quot;The user&apos;s name&quot;,
        age: u32 =&gt; &quot;The user&apos;s age&quot;,
    );

    // &#x4F7F;&#x7528;&#x89E3;&#x6790;&#x540E;&#x7684;&#x53C2;&#x6570;
    println!(&quot;Name: {}&quot;, args[&quot;name&quot;]);
    println!(&quot;Age: {}&quot;, args[&quot;age&quot;]);
}
</code></pre>
<p><strong>&#x8FD0;&#x884C;&#x793A;&#x4F8B;&#xFF1A;</strong></p>
<pre><code class="language-bash">$ cargo run Alice 30
Name: Alice
Age: 30
</code></pre>
<p><strong>&#x5206;&#x6790;&#xFF1A;</strong></p>
<ul>
<li>&#x901A;&#x8FC7; <code>cli!</code> &#x5B8F;&#x5B9A;&#x4E49;&#x547D;&#x4EE4;&#x884C;&#x53C2;&#x6570;&#x7684;&#x683C;&#x5F0F;&#x548C;&#x7C7B;&#x578B;&#x3002;</li>
<li>&#x7528;&#x6237;&#x53EA;&#x9700;&#x63CF;&#x8FF0;&#x53C2;&#x6570;&#xFF0C;&#x800C;&#x65E0;&#x9700;&#x624B;&#x52A8;&#x89E3;&#x6790;&#x6216;&#x5904;&#x7406;&#x9519;&#x8BEF;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x793A;&#x4F8B; 3&#xFF1A;&#x5B9E;&#x73B0;&#x72B6;&#x6001;&#x673A; DSL"><a href="#&#x793A;&#x4F8B; 3&#xFF1A;&#x5B9E;&#x73B0;&#x72B6;&#x6001;&#x673A; DSL"></a>&#x793A;&#x4F8B; 3&#xFF1A;&#x5B9E;&#x73B0;&#x72B6;&#x6001;&#x673A; DSL</h3>
<p>&#x4EE5;&#x4E0B;&#x5B8F;&#x7528;&#x6765;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x6709;&#x9650;&#x72B6;&#x6001;&#x673A;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-built_in">macro_rules!</span> state_machine {
    (
        $name:ident {
            $($state:ident =&gt; $next:ident),* $(,)?
        }
    ) =&gt; {
        <span class="hljs-keyword">pub</span> <span class="hljs-class"><span class="hljs-keyword">struct</span> $<span class="hljs-title">name</span></span> {
            state: &amp;<span class="hljs-symbol">&apos;static</span> <span class="hljs-built_in">str</span>,
        }

        <span class="hljs-keyword">impl</span> $name {
            <span class="hljs-keyword">pub</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">new</span></span>() -&gt; <span class="hljs-keyword">Self</span> {
                <span class="hljs-keyword">Self</span> { state: <span class="hljs-built_in">stringify!</span>($state).split(<span class="hljs-string">&apos;,&apos;</span>).next().unwrap().trim() }
            }

            <span class="hljs-keyword">pub</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">transition</span></span>(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>, event: &amp;<span class="hljs-built_in">str</span>) {
                <span class="hljs-keyword">match</span> (<span class="hljs-keyword">self</span>.state, event) {
                    $(
                        (<span class="hljs-built_in">stringify!</span>($state), <span class="hljs-built_in">stringify!</span>($next)) =&gt; <span class="hljs-keyword">self</span>.state = <span class="hljs-built_in">stringify!</span>($next),
                    )*
                    _ =&gt; <span class="hljs-built_in">panic!</span>(<span class="hljs-string">&quot;Invalid transition&quot;</span>),
                }
            }

            <span class="hljs-keyword">pub</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">state</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; &amp;<span class="hljs-built_in">str</span> {
                <span class="hljs-keyword">self</span>.state
            }
        }
    };
}

state_machine! {
    TrafficLight {
        Red =&gt; Green,
        Green =&gt; Yellow,
        Yellow =&gt; Red,
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> light = TrafficLight::new();

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Current state: {}&quot;</span>, light.state()); <span class="hljs-comment">// Red</span>
    light.transition(<span class="hljs-string">&quot;Green&quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Current state: {}&quot;</span>, light.state()); <span class="hljs-comment">// Green</span>
    light.transition(<span class="hljs-string">&quot;Yellow&quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Current state: {}&quot;</span>, light.state()); <span class="hljs-comment">// Yellow</span>
    light.transition(<span class="hljs-string">&quot;Red&quot;</span>);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Current state: {}&quot;</span>, light.state()); <span class="hljs-comment">// Red</span>
}
</code></pre>
<p><strong>&#x8F93;&#x51FA;&#xFF1A;</strong></p>
<pre><code>Current state: Red
Current state: Green
Current state: Yellow
Current state: Red
</code></pre>
<p><strong>&#x5206;&#x6790;&#xFF1A;</strong></p>
<ul>
<li>&#x901A;&#x8FC7; <code>state_machine!</code> &#x5B8F;&#xFF0C;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x7B80;&#x5355;&#x5730;&#x5B9A;&#x4E49;&#x72B6;&#x6001;&#x548C;&#x8F6C;&#x79FB;&#x89C4;&#x5219;&#x3002;</li>
<li>&#x5B8F;&#x5C06; DSL &#x7F16;&#x8BD1;&#x6210; Rust &#x4EE3;&#x7801;&#xFF0C;&#x5B8C;&#x6210;&#x72B6;&#x6001;&#x673A;&#x7684;&#x5B9E;&#x73B0;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x6E05;&#x6670;&#x4E14;&#x5177;&#x6709;&#x5B9E;&#x9645;&#x7528;&#x9014;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>Rust &#x5B8F;&#x5728;&#x6784;&#x5EFA; DSL &#x65F6;&#x5177;&#x6709;&#x4EE5;&#x4E0B;&#x4F18;&#x70B9;&#xFF1A;</p>
<ol>
<li><strong>&#x53EF;&#x8BFB;&#x6027;</strong>&#xFF1A;&#x7528;&#x81EA;&#x7136;&#x7684;&#x8BED;&#x6CD5;&#x63CF;&#x8FF0;&#x7279;&#x5B9A;&#x9886;&#x57DF;&#x7684;&#x89C4;&#x5219;&#xFF0C;&#x7528;&#x6237;&#x65E0;&#x9700;&#x4E86;&#x89E3;&#x5E95;&#x5C42;&#x5B9E;&#x73B0;&#x3002;</li>
<li><strong>&#x7B80;&#x5316;&#x4EE3;&#x7801;</strong>&#xFF1A;&#x51CF;&#x5C11;&#x6837;&#x677F;&#x4EE3;&#x7801;&#xFF0C;&#x4E13;&#x6CE8;&#x4E8E;&#x6838;&#x5FC3;&#x903B;&#x8F91;&#x3002;</li>
<li><strong>&#x5F3A;&#x7C7B;&#x578B;&#x4FDD;&#x969C;</strong>&#xFF1A;&#x7ED3;&#x5408; Rust &#x7684;&#x7C7B;&#x578B;&#x7CFB;&#x7EDF;&#xFF0C;&#x786E;&#x4FDD;&#x751F;&#x6210;&#x4EE3;&#x7801;&#x7684;&#x5B89;&#x5168;&#x6027;&#x3002;</li>
</ol>
<p>&#x8FD9;&#x4E9B; DSL &#x793A;&#x4F8B;&#x6DB5;&#x76D6;&#x4E86; HTML &#x6784;&#x5EFA;&#x3001;&#x547D;&#x4EE4;&#x884C;&#x89E3;&#x6790;&#x548C;&#x72B6;&#x6001;&#x673A;&#x5B9A;&#x4E49;&#xFF0C;&#x662F; Rust &#x5B8F;&#x5728;&#x9886;&#x57DF;&#x4E13;&#x7528;&#x8BED;&#x8A00;&#x8BBE;&#x8BA1;&#x4E2D;&#x7684;&#x5E38;&#x89C1;&#x7528;&#x6CD5;&#x3002;</p>
<h2 id="&#x624B;&#x5199;&#x5B9E;&#x73B0;"><a href="#&#x624B;&#x5199;&#x5B9E;&#x73B0;"></a>&#x624B;&#x5199;&#x5B9E;&#x73B0;</h2>
<p>&#x4E0B;&#x9762;&#x662F;&#x4E4B;&#x524D;&#x624B;&#x5199;&#x7684;&#x7B80;&#x5316;&#x5B9E;&#x73B0;&#x7248;&#x672C;&#xFF0C;&#x5E76;&#x4E3A;&#x5176;&#x6DFB;&#x52A0;&#x4E86;&#x8BE6;&#x7EC6;&#x6CE8;&#x91CA;&#xFF0C;&#x5E2E;&#x52A9;&#x7406;&#x89E3;&#x5404;&#x90E8;&#x5206;&#x7684;&#x529F;&#x80FD;&#x548C;&#x903B;&#x8F91;&#xFF1A;</p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> napi::sys::*; <span class="hljs-comment">// &#x5F15;&#x5165; N-API &#x7684;&#x4F4E;&#x7EA7;&#x522B; FFI &#x63A5;&#x53E3;</span>
<span class="hljs-keyword">use</span> napi::{Env, <span class="hljs-built_in">Result</span>}; <span class="hljs-comment">// &#x5F15;&#x5165;&#x9AD8;&#x5C42;&#x62BD;&#x8C61;&#x7684;&#x73AF;&#x5883;&#x548C;&#x7ED3;&#x679C;&#x7C7B;&#x578B;</span>

<span class="hljs-comment">// &#x5FC5;&#x987B;&#x5BFC;&#x51FA;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x8BA9; Node.js &#x5728;&#x52A0;&#x8F7D;&#x6A21;&#x5757;&#x65F6;&#x627E;&#x5230;&#x5165;&#x53E3;&#x70B9;</span>
<span class="hljs-meta">#[no_mangle]</span> <span class="hljs-comment">// &#x9632;&#x6B62;&#x7F16;&#x8BD1;&#x5668;&#x4FEE;&#x6539;&#x51FD;&#x6570;&#x540D;</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">unsafe</span> <span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">napi_register_module_v1</span></span>(
    env: napi_env,    <span class="hljs-comment">// N-API &#x63D0;&#x4F9B;&#x7684;&#x73AF;&#x5883;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4EE3;&#x8868;&#x5F53;&#x524D;&#x6A21;&#x5757;&#x7684;&#x72B6;&#x6001;</span>
    exports: napi_value, <span class="hljs-comment">// exports &#x662F; Node.js &#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;</span>
) -&gt; napi_value {
    <span class="hljs-comment">// &#x4F7F;&#x7528; N-API &#x63D0;&#x4F9B;&#x7684;&#x5DE5;&#x5177;&#x51FD;&#x6570;&#x6CE8;&#x518C;&#x6A21;&#x5757;&#x548C;&#x5BFC;&#x51FA;&#x51FD;&#x6570;</span>
    napi::register_module(env, exports, |env, exports| {
        <span class="hljs-comment">// &#x521B;&#x5EFA;&#x4E00;&#x4E2A; N-API &#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x5E76;&#x7ED1;&#x5B9A;&#x5230; \`sum\`</span>
        <span class="hljs-keyword">let</span> sum_fn = napi::bindgen_prelude::create_function(
            env,    <span class="hljs-comment">// N-API &#x73AF;&#x5883;</span>
            <span class="hljs-string">&quot;sum&quot;</span>,  <span class="hljs-comment">// &#x51FD;&#x6570;&#x7684;&#x540D;&#x79F0;</span>
            <span class="hljs-literal">Some</span>(sum), <span class="hljs-comment">// &#x51FD;&#x6570;&#x7684;&#x5B9E;&#x73B0;</span>
        )?;
        
        <span class="hljs-comment">// &#x5C06;&#x521B;&#x5EFA;&#x7684;&#x51FD;&#x6570;&#x7ED1;&#x5B9A;&#x5230;&#x6A21;&#x5757;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#x4E0A;&#xFF0C;&#x4F9B; JavaScript &#x8C03;&#x7528;</span>
        napi::bindgen_prelude::set_named_property(env, exports, <span class="hljs-string">&quot;sum&quot;</span>, sum_fn)?;

        <span class="hljs-literal">Ok</span>(exports) <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#xFF0C;Node.js &#x4F1A;&#x52A0;&#x8F7D;&#x6B64;&#x6A21;&#x5757;</span>
    })
}

<span class="hljs-comment">// &#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x7684;&#x51FD;&#x6570;&#x903B;&#x8F91;</span>
<span class="hljs-keyword">unsafe</span> <span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">sum</span></span>(env: napi_env, info: napi_callback_info) -&gt; napi_value {
    <span class="hljs-comment">// &#x83B7;&#x53D6;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x9012;&#x7684;&#x53C2;&#x6570;&#xFF08;&#x671F;&#x671B;&#x4E24;&#x4E2A;&#x53C2;&#x6570; a &#x548C; b&#xFF09;</span>
    <span class="hljs-keyword">let</span> args = napi::bindgen_prelude::get_args(env, info, <span class="hljs-number">2</span>)?;

    <span class="hljs-comment">// &#x4ECE;&#x53C2;&#x6570;&#x4E2D;&#x63D0;&#x53D6;&#x6574;&#x6570;&#x503C;</span>
    <span class="hljs-keyword">let</span> a: <span class="hljs-built_in">i32</span> = args[<span class="hljs-number">0</span>].get()?; <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; i32</span>
    <span class="hljs-keyword">let</span> b: <span class="hljs-built_in">i32</span> = args[<span class="hljs-number">1</span>].get()?; <span class="hljs-comment">// &#x83B7;&#x53D6;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; i32</span>

    <span class="hljs-comment">// &#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; JavaScript &#x6570;&#x503C;&#x5BF9;&#x8C61;</span>
    napi::bindgen_prelude::create_int32(env, a + b)
}
</code></pre>
<hr>
<h3 id="&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;"><a href="#&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;"></a><strong>&#x9010;&#x6B65;&#x62C6;&#x89E3;&#x6CE8;&#x91CA;&#x8BF4;&#x660E;</strong></h3>
<h4 id="1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (napi_register_module_v1)"><a href="#1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (napi_register_module_v1)"></a><strong>1. &#x6A21;&#x5757;&#x5165;&#x53E3;&#x70B9; (<code>napi_register_module_v1</code>)</strong></h4>
<ul>
<li>&#x8FD9;&#x662F; Rust &#x7F16;&#x5199;&#x7684; N-API &#x6A21;&#x5757;&#x7684;&#x5165;&#x53E3;&#x70B9;&#x3002;</li>
<li>Node.js &#x5728;&#x52A0;&#x8F7D; <code>.node</code> &#x6587;&#x4EF6;&#x65F6;&#xFF0C;&#x4F1A;&#x67E5;&#x627E;&#x5E76;&#x8C03;&#x7528;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x3002;</li>
</ul>
<p>&#x5173;&#x952E;&#x53C2;&#x6570;&#xFF1A;</p>
<ul>
<li><code>env</code>&#xFF1A;&#x5F53;&#x524D; N-API &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4FDD;&#x5B58;&#x6A21;&#x5757;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x72B6;&#x6001;&#x3002;</li>
<li><code>exports</code>&#xFF1A;&#x4EE3;&#x8868;&#x6A21;&#x5757;&#x7684;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#xFF0C;&#x76F8;&#x5F53;&#x4E8E; Node.js &#x4E2D;&#x7684; <code>module.exports</code>&#x3002;</li>
</ul>
<p>&#x51FD;&#x6570;&#x4F5C;&#x7528;&#xFF1A;</p>
<ul>
<li>&#x6CE8;&#x518C;&#x6A21;&#x5757;&#x7684;&#x6240;&#x6709;&#x5BFC;&#x51FA;&#x65B9;&#x6CD5;&#xFF0C;&#x5E76;&#x5C06;&#x5B83;&#x4EEC;&#x7ED1;&#x5B9A;&#x5230; <code>exports</code>&#x3002;</li>
</ul>
<hr>
<h4 id="2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (create_function)"><a href="#2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (create_function)"></a><strong>2. &#x6CE8;&#x518C;&#x51FD;&#x6570; (<code>create_function</code>)</strong></h4>
<ul>
<li>&#x8FD9;&#x4E2A;&#x90E8;&#x5206;&#x901A;&#x8FC7; <code>napi::bindgen_prelude::create_function</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7B26;&#x5408; N-API &#x6807;&#x51C6;&#x7684;&#x51FD;&#x6570;&#x3002;</li>
<li><code>create_function</code> &#x7684;&#x5173;&#x952E;&#x53C2;&#x6570;&#xFF1A;
<ul>
<li><code>env</code>&#xFF1A;N-API &#x73AF;&#x5883;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li><code>&quot;sum&quot;</code>&#xFF1A;JavaScript &#x4E2D;&#x51FD;&#x6570;&#x7684;&#x540D;&#x5B57;&#x3002;</li>
<li><code>Some(sum)</code>&#xFF1A;&#x6307;&#x5411; Rust &#x4E2D;&#x5B9E;&#x9645;&#x7684;&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h4 id="3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (sum)"><a href="#3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (sum)"></a><strong>3. &#x51FD;&#x6570;&#x5B9E;&#x73B0; (<code>sum</code>)</strong></h4>
<p>&#x8FD9;&#x662F;&#x5177;&#x4F53;&#x7684; Rust &#x51FD;&#x6570;&#x903B;&#x8F91;&#xFF0C;&#x901A;&#x8FC7; FFI &#x66B4;&#x9732;&#x7ED9; Node.js &#x8C03;&#x7528;&#x3002;</p>
<ul>
<li>
<p>&#x53C2;&#x6570;&#x89E3;&#x6790;&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; <code>napi::bindgen_prelude::get_args</code> &#x83B7;&#x53D6;&#x4F20;&#x9012;&#x7ED9;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x671F;&#x671B;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x3002;</li>
<li>&#x6BCF;&#x4E2A;&#x53C2;&#x6570;&#x9700;&#x8981;&#x7528; <code>.get()</code> &#x89E3;&#x6790;&#x5E76;&#x8F6C;&#x6362;&#x4E3A; Rust &#x7C7B;&#x578B;&#x3002;</li>
</ul>
</li>
<li>
<p>&#x7ED3;&#x679C;&#x5904;&#x7406;&#xFF1A;</p>
<ul>
<li>&#x8BA1;&#x7B97;&#x4E24;&#x4E2A;&#x6574;&#x6570;&#x7684;&#x548C;&#x3002;</li>
<li>&#x4F7F;&#x7528; <code>napi::bindgen_prelude::create_int32</code> &#x521B;&#x5EFA;&#x4E00;&#x4E2A; JavaScript &#x7684;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#xFF0C;&#x5C06;&#x7ED3;&#x679C;&#x8FD4;&#x56DE;&#x7ED9;&#x8C03;&#x7528;&#x8005;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;"><a href="#&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;"></a><strong>&#x8C03;&#x7528;&#x94FE;&#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;</strong></h3>
<ol>
<li>Node.js &#x52A0;&#x8F7D; <code>.node</code> &#x6587;&#x4EF6;&#x65F6;&#xFF0C;&#x8C03;&#x7528; <code>napi_register_module_v1</code>&#x3002;</li>
<li><code>napi_register_module_v1</code> &#x4F7F;&#x7528; <code>create_function</code> &#x521B;&#x5EFA;&#x51FD;&#x6570;&#x5E76;&#x5C06;&#x5176;&#x7ED1;&#x5B9A;&#x5230;&#x6A21;&#x5757;&#x7684;&#x5BFC;&#x51FA;&#x5BF9;&#x8C61;&#x3002;</li>
<li>&#x5728; JavaScript &#x4E2D;&#x8C03;&#x7528; <code>sum</code>&#xFF0C;&#x4F1A;&#x89E6;&#x53D1; <code>sum</code> &#x51FD;&#x6570;&#x7684;&#x6267;&#x884C;&#xFF1A;
<ul>
<li>&#x83B7;&#x53D6;&#x53C2;&#x6570;&#x3002;</li>
<li>&#x8C03;&#x7528; Rust &#x51FD;&#x6570;&#x3002;</li>
<li>&#x5C06;&#x7ED3;&#x679C;&#x8F6C;&#x6362;&#x4E3A; JavaScript &#x7C7B;&#x578B;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h3 id="&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;"><a href="#&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;"></a><strong>&#x4F18;&#x7F3A;&#x70B9;&#x5BF9;&#x6BD4;</strong></h3>
<ul>
<li>
<p><strong>&#x4F18;&#x70B9;&#xFF1A;</strong></p>
<ul>
<li>&#x76F4;&#x63A5;&#x64CD;&#x4F5C; N-API&#xFF0C;&#x53EF;&#x4EE5;&#x5B8C;&#x5168;&#x63A7;&#x5236;&#x6A21;&#x5757;&#x884C;&#x4E3A;&#x3002;</li>
<li>&#x9002;&#x7528;&#x4E8E;&#x9700;&#x8981;&#x624B;&#x52A8;&#x4F18;&#x5316;&#x6027;&#x80FD;&#x6216;&#x6709;&#x7279;&#x6B8A;&#x9700;&#x6C42;&#x7684;&#x573A;&#x666F;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7F3A;&#x70B9;&#xFF1A;</strong></p>
<ul>
<li>&#x7F16;&#x5199; N-API &#x4EE3;&#x7801;&#x7E41;&#x7410;&#x4E14;&#x5BB9;&#x6613;&#x51FA;&#x9519;&#x3002;</li>
<li>&#x9700;&#x8981;&#x5904;&#x7406;&#x53C2;&#x6570;&#x89E3;&#x6790;&#x3001;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x3001;&#x9519;&#x8BEF;&#x7BA1;&#x7406;&#x7B49;&#x5927;&#x91CF;&#x7EC6;&#x8282;&#x3002;</li>
<li>&#x96BE;&#x4EE5;&#x7EF4;&#x62A4;&#xFF0C;&#x4EE3;&#x7801;&#x91CF;&#x5927;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a><strong>&#x603B;&#x7ED3;</strong></h3>
<p>&#x624B;&#x5199;&#x5B9E;&#x73B0;&#x5C55;&#x793A;&#x4E86; Rust &#x548C; Node.js &#x4EA4;&#x4E92;&#x7684;&#x57FA;&#x7840;&#xFF0C;&#x4F46;&#x5728;&#x5B9E;&#x9645;&#x9879;&#x76EE;&#x4E2D;&#xFF0C;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x7C7B;&#x4F3C; <code>#[napi]</code> &#x5B8F;&#x6765;&#x7B80;&#x5316;&#x5F00;&#x53D1;&#x3002;&#x5C5E;&#x6027;&#x5B8F;&#x4F1A;&#x81EA;&#x52A8;&#x751F;&#x6210;&#x4E0A;&#x8FF0;&#x590D;&#x6742;&#x903B;&#x8F91;&#xFF0C;&#x8BA9;&#x5F00;&#x53D1;&#x8005;&#x4E13;&#x6CE8;&#x4E8E;&#x6838;&#x5FC3;&#x529F;&#x80FD;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ul>
<li>gpt</li>
</ul>
`,n=[{level:1,title:"napi 宏的理解",children:[{level:2,title:"宏与 DSL",children:[{level:3,title:"示例 1：构建简单的 HTML DSL",children:[]},{level:3,title:"示例 2：构建命令行解析器 DSL",children:[]},{level:3,title:"示例 3：实现状态机 DSL",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"手写实现",children:[{level:3,title:"逐步拆解注释说明",children:[{level:4,title:"1. 模块入口点 (napi_register_module_v1)",children:[]},{level:4,title:"2. 注册函数 (create_function)",children:[]},{level:4,title:"3. 函数实现 (sum)",children:[]}]},{level:3,title:"调用链的工作流程",children:[]},{level:3,title:"优缺点对比",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,s as html,n as nestedHeaders};
