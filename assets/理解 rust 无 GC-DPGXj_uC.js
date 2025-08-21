const x={},n=`<p>&#x81EA;&#x5DF1;&#x7684;&#x7406;&#x89E3;&#xFF1A;<strong>rust &#x65E0; GC&#x5E94;&#x8BE5;&#x6307;&#x7684;&#x662F;&#x6CA1;&#x6709;&#x96C6;&#x4E2D;&#x5F0F;&#x7684; GC&#xFF0C;&#x800C;&#x662F;&#x5206;&#x6563;&#x5F0F;&#x7684;&#xFF0C;&#x968F;&#x7740;&#x4EE3;&#x7801;&#x7684;&#x6267;&#x884C;&#x800C;&#x81EA;&#x52A8;&#x7684; &#x56DE;&#x6536;&#xFF1F;</strong></p>
<p>Rust &#x4E2D;&#x6CA1;&#x6709;&#x4F20;&#x7EDF;&#x610F;&#x4E49;&#x4E0A;&#x7684; <strong>&#x96C6;&#x4E2D;&#x5F0F;&#x5783;&#x573E;&#x56DE;&#x6536;&#xFF08;Garbage Collector, GC&#xFF09;</strong>&#xFF0C;&#x800C;&#x662F;&#x901A;&#x8FC7; <strong>&#x5206;&#x6563;&#x5F0F;&#x7684;&#x3001;&#x7F16;&#x8BD1;&#x65F6;&#x9759;&#x6001;&#x5206;&#x6790;&#x548C;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x673A;&#x5236;</strong> &#x6765;&#x7BA1;&#x7406;&#x5185;&#x5B58;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x907F;&#x514D;&#x4E86;&#x4F20;&#x7EDF; GC &#x7684;&#x96C6;&#x4E2D;&#x5F0F;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#xFF0C;&#x56DE;&#x6536;&#x662F;&#x968F;&#x7740;&#x4EE3;&#x7801;&#x903B;&#x8F91;&#x6267;&#x884C;&#x81EA;&#x7136;&#x53D1;&#x751F;&#x7684;&#x3002;</p>
<hr>
<h3 id="Rust &#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x7279;&#x70B9;"><a href="#Rust &#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x7279;&#x70B9;"></a><strong>Rust &#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x7279;&#x70B9;</strong></h3>
<ol>
<li>
<p><strong>&#x6240;&#x6709;&#x6743;&#x7CFB;&#x7EDF;&#xFF08;Ownership System&#xFF09;</strong><br>
Rust &#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x4F9D;&#x8D56; <strong>&#x6240;&#x6709;&#x6743;&#x673A;&#x5236;</strong>&#xFF0C;&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#x5B8C;&#x6210;&#x5185;&#x5B58;&#x5206;&#x914D;&#x548C;&#x91CA;&#x653E;&#x7684;&#x5206;&#x6790;&#x3002;</p>
<ul>
<li>&#x6BCF;&#x4E2A;&#x503C;&#x90FD;&#x6709;&#x4E00;&#x4E2A;&#x6240;&#x6709;&#x8005;&#xFF08;<code>owner</code>&#xFF09;&#x3002;</li>
<li>&#x5F53;&#x503C;&#x7684;&#x6240;&#x6709;&#x8005;&#x8D85;&#x51FA;&#x4F5C;&#x7528;&#x57DF;&#x65F6;&#xFF0C;&#x5185;&#x5B58;&#x4F1A;&#x7ACB;&#x5373;&#x91CA;&#x653E;&#x3002;</li>
<li>&#x5728;&#x7F16;&#x8BD1;&#x65F6;&#xFF0C;Rust &#x68C0;&#x67E5;&#x6240;&#x6709;&#x6743;&#x8F6C;&#x79FB;&#x3001;&#x501F;&#x7528;&#x548C;&#x751F;&#x547D;&#x5468;&#x671F;&#xFF0C;&#x786E;&#x4FDD;&#x5185;&#x5B58;&#x5B89;&#x5168;&#x3002;</li>
</ul>
<p><strong>&#x4F8B;&#x5B50;&#xFF1A;</strong></p>
<pre><code class="language-rust">{
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>); <span class="hljs-comment">// s &#x62E5;&#x6709;&#x5B57;&#x7B26;&#x4E32;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, s);             <span class="hljs-comment">// &#x4F7F;&#x7528; s</span>
} <span class="hljs-comment">// &#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;&#xFF0C;s &#x88AB;&#x91CA;&#x653E;&#xFF0C;&#x5185;&#x5B58;&#x56DE;&#x6536;</span>
</code></pre>
</li>
<li>
<p><strong>&#x501F;&#x7528;&#x548C;&#x5F15;&#x7528;</strong></p>
<ul>
<li>&#x501F;&#x7528;&#xFF08;<code>&amp;T</code> &#x548C; <code>&amp;mut T</code>&#xFF09;&#x5141;&#x8BB8;&#x591A;&#x4E2A;&#x5730;&#x65B9;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x6539;&#x53D8;&#x6240;&#x6709;&#x6743;&#x3002;</li>
<li>Rust &#x7F16;&#x8BD1;&#x5668;&#x901A;&#x8FC7;&#x501F;&#x7528;&#x68C0;&#x67E5;&#x5668;&#x786E;&#x4FDD;&#x6CA1;&#x6709;&#x6570;&#x636E;&#x7ADE;&#x4E89;&#xFF08;&#x6570;&#x636E;&#x540C;&#x65F6;&#x88AB;&#x4FEE;&#x6539;&#x548C;&#x8BFB;&#x53D6;&#xFF09;&#x3002;</li>
</ul>
<p><strong>&#x4F8B;&#x5B50;&#xFF1A;</strong></p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>);
    <span class="hljs-keyword">let</span> len = calculate_length(&amp;s); <span class="hljs-comment">// &#x501F;&#x7528; s&#xFF0C;&#x4E0D;&#x8F6C;&#x79FB;&#x6240;&#x6709;&#x6743;</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Length of &apos;{}&apos;: {}&quot;</span>, s, len);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-built_in">usize</span> {
    s.len()
}
</code></pre>
</li>
<li>
<p><strong>&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF08;<code>Rc</code> &#x548C; <code>Arc</code>&#xFF09;</strong></p>
<ul>
<li>&#x5BF9;&#x4E8E;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x6240;&#x6709;&#x8005;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF08;<code>Rc&lt;T&gt;</code> &#x6216; <code>Arc&lt;T&gt;</code>&#xFF09;&#x3002;</li>
<li>&#x8FD0;&#x884C;&#x65F6;&#x8DDF;&#x8E2A;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF0C;&#x6240;&#x6709;&#x5F15;&#x7528;&#x90FD;&#x88AB;&#x4E22;&#x5F03;&#x65F6;&#xFF0C;&#x5185;&#x5B58;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x91CA;&#x653E;&#x3002;</li>
</ul>
<p><strong>&#x4F8B;&#x5B50;&#xFF1A;</strong></p>
<pre><code class="language-rust"><span class="hljs-keyword">use</span> std::rc::Rc;

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> shared_data = Rc::new(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;shared&quot;</span>));
    <span class="hljs-keyword">let</span> clone1 = Rc::clone(&amp;shared_data);
    <span class="hljs-keyword">let</span> clone2 = Rc::clone(&amp;shared_data);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;Count: {}&quot;</span>, Rc::strong_count(&amp;shared_data)); <span class="hljs-comment">// &#x8F93;&#x51FA; 3</span>
} <span class="hljs-comment">// &#x6240;&#x6709; Rc &#x88AB;&#x91CA;&#x653E;&#x540E;&#xFF0C;&#x6570;&#x636E;&#x624D;&#x4F1A;&#x91CA;&#x653E;</span>
</code></pre>
</li>
<li>
<p><strong>&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7684;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF08;<code>Arc</code>&#xFF09;</strong></p>
<ul>
<li><code>Arc</code> &#x662F; <code>Rc</code> &#x7684;&#x7EBF;&#x7A0B;&#x5B89;&#x5168;&#x7248;&#x672C;&#xFF0C;&#x7528;&#x4E8E;&#x591A;&#x7EBF;&#x7A0B;&#x73AF;&#x5883;&#x3002;</li>
<li>&#x4F9D;&#x8D56;&#x539F;&#x5B50;&#x64CD;&#x4F5C;&#x7BA1;&#x7406;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#x3002;</li>
</ul>
</li>
</ol>
<hr>
<h3 id="&#x6CA1;&#x6709;&#x96C6;&#x4E2D;&#x5F0F; GC &#x7684;&#x597D;&#x5904;"><a href="#&#x6CA1;&#x6709;&#x96C6;&#x4E2D;&#x5F0F; GC &#x7684;&#x597D;&#x5904;"></a><strong>&#x6CA1;&#x6709;&#x96C6;&#x4E2D;&#x5F0F; GC &#x7684;&#x597D;&#x5904;</strong></h3>
<ul>
<li>
<p><strong>&#x6027;&#x80FD;&#x66F4;&#x9AD8;</strong>&#xFF1A;</p>
<ul>
<li>&#x6CA1;&#x6709; GC &#x6682;&#x505C;&#xFF08;GC Pause&#xFF09;&#xFF0C;&#x56E0;&#x6B64;&#x5B9E;&#x65F6;&#x6027;&#x8F83;&#x597D;&#x3002;</li>
<li>&#x5728;&#x4F5C;&#x7528;&#x57DF;&#x7ED3;&#x675F;&#x65F6;&#x7ACB;&#x5373;&#x91CA;&#x653E;&#x5185;&#x5B58;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x7B49;&#x5F85;&#x5783;&#x573E;&#x56DE;&#x6536;&#x5668;&#x89E6;&#x53D1;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x53EF;&#x63A7;</strong>&#xFF1A;</p>
<ul>
<li>&#x5F00;&#x53D1;&#x8005;&#x901A;&#x8FC7;&#x6240;&#x6709;&#x6743;&#x548C;&#x501F;&#x7528;&#x673A;&#x5236;&#x5BF9;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x6709;&#x66F4;&#x591A;&#x7684;&#x660E;&#x786E;&#x63A7;&#x5236;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x66F4;&#x5C0F;&#x7684;&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;</strong>&#xFF1A;</p>
<ul>
<li>Rust &#x6CA1;&#x6709;&#x8BED;&#x8A00;&#x7EA7;&#x522B;&#x7684;&#x5783;&#x573E;&#x56DE;&#x6536;&#x5668;&#xFF0C;&#x8FD9;&#x51CF;&#x5C11;&#x4E86;&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x5185;&#x5B58;&#x548C; CPU &#x5F00;&#x9500;&#x3002;</li>
</ul>
</li>
</ul>
<hr>
<h3 id="&#x5206;&#x6563;&#x5F0F;&#x56DE;&#x6536;"><a href="#&#x5206;&#x6563;&#x5F0F;&#x56DE;&#x6536;"></a><strong>&#x5206;&#x6563;&#x5F0F;&#x56DE;&#x6536;</strong></h3>
<ul>
<li>Rust &#x7684;&#x5185;&#x5B58;&#x56DE;&#x6536;&#x4E0D;&#x662F;&#x96C6;&#x4E2D;&#x7BA1;&#x7406;&#xFF0C;&#x800C;&#x662F;&#x968F;&#x7740;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x9010;&#x6B65;&#x5B8C;&#x6210;&#x7684;&#xFF1A;
<ul>
<li>&#x7F16;&#x8BD1;&#x65F6;&#xFF1A;&#x5206;&#x6790;&#x4F5C;&#x7528;&#x57DF;&#x548C;&#x6240;&#x6709;&#x6743;&#xFF0C;&#x9759;&#x6001;&#x786E;&#x5B9A;&#x91CA;&#x653E;&#x65F6;&#x673A;&#x3002;</li>
<li>&#x8FD0;&#x884C;&#x65F6;&#xFF1A;&#x901A;&#x8FC7;&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF08;&#x5982; <code>Rc</code> &#x548C; <code>Arc</code>&#xFF09;&#x52A8;&#x6001;&#x7BA1;&#x7406;&#x5171;&#x4EAB;&#x6570;&#x636E;&#x3002;</li>
</ul>
</li>
</ul>
<p><strong>&#x4F8B;&#x5B50;&#xFF1A;</strong></p>
<pre><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    {
        <span class="hljs-keyword">let</span> data = Rc::new(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">&quot;hello&quot;</span>)); <span class="hljs-comment">// &#x5206;&#x914D;&#x5185;&#x5B58;</span>
        <span class="hljs-keyword">let</span> cloned = Rc::clone(&amp;data);            <span class="hljs-comment">// &#x5F15;&#x7528;&#x8BA1;&#x6570; +1</span>
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, cloned);                   <span class="hljs-comment">// &#x4F7F;&#x7528;&#x6570;&#x636E;</span>
    } <span class="hljs-comment">// &#x5F15;&#x7528;&#x8BA1;&#x6570;&#x51CF;&#x4E3A; 0&#xFF0C;&#x5185;&#x5B58;&#x7ACB;&#x5373;&#x91CA;&#x653E;</span>
}
</code></pre>
<hr>
<h3 id="&#x4E0E;&#x4F20;&#x7EDF; GC &#x7684;&#x5BF9;&#x6BD4;"><a href="#&#x4E0E;&#x4F20;&#x7EDF; GC &#x7684;&#x5BF9;&#x6BD4;"></a><strong>&#x4E0E;&#x4F20;&#x7EDF; GC &#x7684;&#x5BF9;&#x6BD4;</strong></h3>
<table>
<thead>
<tr>
<th>&#x7279;&#x6027;</th>
<th>Rust</th>
<th>&#x4F20;&#x7EDF; GC (&#x5982; Java, Go)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>&#x56DE;&#x6536;&#x89E6;&#x53D1;&#x65F6;&#x673A;</strong></td>
<td>&#x7F16;&#x8BD1;&#x65F6;&#x5206;&#x6790;&#xFF0C;&#x8FD0;&#x884C;&#x65F6;&#x5373;&#x65F6;&#x56DE;&#x6536;</td>
<td>&#x8FD0;&#x884C;&#x65F6;&#x6279;&#x91CF;&#x56DE;&#x6536;&#xFF08;&#x89E6;&#x53D1;&#x65F6;&#x6682;&#x505C;&#xFF09;</td>
</tr>
<tr>
<td><strong>&#x8FD0;&#x884C;&#x65F6;&#x5F00;&#x9500;</strong></td>
<td>&#x65E0;&#x96C6;&#x4E2D;&#x7BA1;&#x7406;&#xFF0C;&#x5F00;&#x9500;&#x66F4;&#x5C0F;</td>
<td>&#x9700;&#x8DDF;&#x8E2A;&#x5BF9;&#x8C61;&#x3001;&#x56DE;&#x6536;&#x5F00;&#x9500;&#x8F83;&#x9AD8;</td>
</tr>
<tr>
<td><strong>&#x6682;&#x505C;&#x95EE;&#x9898;</strong></td>
<td>&#x65E0; GC &#x6682;&#x505C;&#xFF0C;&#x5B9E;&#x65F6;&#x6027;&#x66F4;&#x597D;</td>
<td>&#x5B58;&#x5728; GC &#x6682;&#x505C;&#x95EE;&#x9898;</td>
</tr>
<tr>
<td><strong>&#x5185;&#x5B58;&#x5B89;&#x5168;&#x6027;</strong></td>
<td>&#x7F16;&#x8BD1;&#x65F6;&#x5F3A;&#x4FDD;&#x8BC1;</td>
<td>&#x8FD0;&#x884C;&#x65F6;&#x4F9D;&#x8D56;&#x8BED;&#x8A00;&#x7279;&#x6027;&#x548C;&#x68C0;&#x67E5;&#x673A;&#x5236;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a><strong>&#x603B;&#x7ED3;</strong></h3>
<p>Rust &#x7684;&#x5185;&#x5B58;&#x7BA1;&#x7406;&#x4F9D;&#x8D56; <strong>&#x6240;&#x6709;&#x6743;&#x673A;&#x5236;</strong> &#x548C; <strong>&#x5F15;&#x7528;&#x8BA1;&#x6570;&#xFF08;&#x5982;&#x679C;&#x9700;&#x8981;&#xFF09;</strong>&#xFF0C;&#x5728;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x7684;&#x540C;&#x65F6;&#x5B8C;&#x6210;&#x5185;&#x5B58;&#x7684;&#x5206;&#x6563;&#x5F0F;&#x56DE;&#x6536;&#xFF0C;&#x4E0D;&#x4F9D;&#x8D56;&#x96C6;&#x4E2D;&#x5F0F; GC&#x3002;&#x5B83;&#x907F;&#x514D;&#x4E86;&#x4F20;&#x7EDF; GC &#x7684;&#x6027;&#x80FD;&#x95EE;&#x9898;&#xFF0C;&#x540C;&#x65F6;&#x63D0;&#x4F9B;&#x4E86;&#x5F3A;&#x5927;&#x7684;&#x5185;&#x5B58;&#x5B89;&#x5168;&#x6027;&#x3002;</p>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>gpt</li>
</ul>
`,s=[{level:3,title:"Rust 的内存管理特点",children:[]},{level:3,title:"没有集中式 GC 的好处",children:[]},{level:3,title:"分散式回收",children:[]},{level:3,title:"与传统 GC 的对比",children:[]},{level:3,title:"总结",children:[]},{level:2,title:"Reference",children:[]}];export{x as attributes,n as html,s as nestedHeaders};
