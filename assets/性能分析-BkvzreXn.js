const x={title:"Profile"},F=`<h2 id="&#x6027;&#x80FD;&#x5206;&#x6790;"><a href="#&#x6027;&#x80FD;&#x5206;&#x6790;"></a>&#x6027;&#x80FD;&#x5206;&#x6790;</h2>
<p>&#x6700;&#x8FD1;&#x901A;&#x8FC7; alinode &#x7684;CPU&#x706B;&#x7130;&#x56FE;&#x627E;&#x51FA;&#x4E86;&#x9879;&#x76EE;&#x4E2D;&#x541E;&#x5410;&#x7387;&#x963B;&#x585E;&#x70B9;&#xFF0C;&#x7B80;&#x5355;&#x5206;&#x4EAB;</p>
<ul>
<li>profile&#x7684;&#x539F;&#x7406;&#xFF1F;</li>
<li>&#x5982;&#x4F55;&#x5BF9;profile&#x7ED3;&#x679C;&#x505A;&#x53EF;&#x89C6;&#x5316;&#xFF1F;</li>
<li>&#x706B;&#x7130;&#x56FE;&#x5982;&#x4F55;&#x5206;&#x6790;&#xFF1F;</li>
<li>&#x5982;&#x4F55;development/production&#x8FDB;&#x884C;profile</li>
</ul>
<h2 id="Chrome Profiler&#x8FD0;&#x884C;&#x673A;&#x5236;"><a href="#Chrome Profiler&#x8FD0;&#x884C;&#x673A;&#x5236;"></a>Chrome Profiler&#x8FD0;&#x884C;&#x673A;&#x5236;</h2>
<p>Chrome profiler &#x4E3A;&#x4E86;&#x627E;&#x5230;&#x90A3;&#x4E9B;&#x8017;&#x65F6;&#x6700;&#x591A;&#x7684;&#x4EE3;&#x7801;&#xFF0C;Chrome &#x5206;&#x6790;&#x5668;&#x6BCF; 100&#x3BC;s &#x6355;&#x83B7;&#x4E00;&#x4E2A;&#x5806;&#x6808;&#x8DDF;&#x8E2A;&#x3002;</p>
<p>&#x8FD9;&#x610F;&#x5473;&#x7740;&#xFF0C;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x53EA;&#x9700;&#x8981; 50&#x3BC;s &#x7684;&#x6267;&#x884C;&#x65F6;&#x95F4;&#xFF0C;&#x5C31;&#x53EF;&#x80FD;&#x4E0D;&#x4F1A;&#x5728;&#x5206;&#x6790;&#x5668;&#x4E2D;&#x663E;&#x793A;&#x51FA;&#x6765;&#xFF01;</p>
<p>&#x5F53;&#x4F60;&#x5206;&#x6790;&#x51E0;&#x6BEB;&#x79D2;&#x4EE5;&#x4E0A;&#x7684;&#x65F6;&#x95F4;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x51C6;&#x786E;&#x4E86;&#x89E3;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x5728;&#x4F55;&#x65F6;&#x82B1;&#x8D39;&#x6700;&#x591A;&#x7684;&#x65F6;&#x95F4;&#x3002; &#x4F46;&#x662F;&#xFF0C;&#x5F53;&#x4F60;&#x653E;&#x5927; profiler &#x9762;&#x677F;&#x60F3;&#x770B;&#x66F4;&#x7CBE;&#x51C6;&#x7684;&#x65F6;&#x95F4;&#x65F6;&#xFF0C;&#x4FE1;&#x606F;&#x4F1A;&#x53D8;&#x5F97;&#x4E0D;&#x592A;&#x51C6;&#x786E;&#x3002;</p>
<p>&#x5206;&#x6790;&#x5668;&#x4E5F;&#x4F1A;&#x4E0D;&#x4E00;&#x81F4;&#x3002; &#x6BCF;&#x6B21;&#x8FD0;&#x884C;&#x65F6;&#xFF0C;&#x4F1A;&#x4EA7;&#x751F;&#x4E00;&#x4E2A;&#x7A0D;&#x5FAE;&#x4E0D;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002; &#x6709;&#x65F6;&#x53EF;&#x80FD;&#x4F1A;&#x8BB0;&#x5F55;&#x975E;&#x5E38;&#x77ED;&#x7684;&#x51FD;&#x6570;&#x8C03;&#x7528;&#xFF0C;&#x800C;&#x5728;&#x5176;&#x4ED6;&#x65F6;&#x95F4;&#x518D;&#x6B21;&#x8FD0;&#x884C;&#x8FD9;&#x4E9B;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4FE1;&#x606F;&#x53EF;&#x80FD;&#x4F1A;&#x4E22;&#x5931;&#x3002;</p>
<h3 id="performance"><a href="#performance"></a>performance</h3>
<ul>
<li>Scripting</li>
<li>Rendering</li>
<li>Painting</li>
<li>Other</li>
<li>Idle</li>
</ul>
<pre><code>Rendering events are about computing styles associated with each DOM node (i.e. &quot;Style Recalculate&quot;) and elements position on the page (&quot;Layout&quot;). Paint category is about actually painting pixels and includes events like &quot;Paint&quot; itself and &quot;Decode Image&quot; / &quot;Resize Image&quot;.
</code></pre>
<h3 id="javascript-profiler"><a href="#javascript-profiler"></a>javascript-profiler</h3>
<ul>
<li>CPU Profiles</li>
</ul>
<h2 id="cpu profile&#x79CD;&#x7C7B;"><a href="#cpu profile&#x79CD;&#x7C7B;"></a>cpu profile&#x79CD;&#x7C7B;</h2>
<h3 id="&#x91C7;&#x6837; Sampling"><a href="#&#x91C7;&#x6837; Sampling"></a>&#x91C7;&#x6837; Sampling</h3>
<p>&#x57FA;&#x4E8E;&#x5BF9;StackTrace&#x7684;&#x201C;&#x91C7;&#x6837;&#x201D;&#x8FDB;&#x884C;&#x5B9E;&#x73B0;&#xFF0C;&#x5728;&#x4E00;&#x65F6;&#x95F4;&#x6BB5;&#x5185;&#xFF08;&#x81F3;&#x5C11;&#x5F97;5min&#x4FDD;&#x8BC1;&#x6837;&#x672C;&#x6570;&#x8DB3;&#x591F;&#x591A;&#xFF09;&#x5BF9;&#x5806;&#x6808;&#x505A;&#x5FEB;&#x7167;&#x91C7;&#x6837;</p>
<ul>
<li>&#x4F18;&#x70B9;:</li>
</ul>
<blockquote>
<p>&#x7B80;&#x5355;&#xFF0C;&#x6E90;&#x4EE3;&#x7801;&#x4FB5;&#x5165;&#x6027;&#x4E0D;&#x5927;</p>
</blockquote>
<ul>
<li>&#x52A3;&#x52BF;:</li>
</ul>
<blockquote>
<p>&#x91C7;&#x6837;&#x6570;&#x636E;&#x4E3B;&#x8981;&#x4F53;&#x73B0;&#x5728;&#x8C03;&#x7528;&#x6B21;&#x6570;&#x4E0A;&#xFF0C;&#x5BF9;CPU&#x7684;&#x5360;&#x6709;&#x65F6;&#x95F4;&#x4E0D;&#x591F;&#x7CBE;&#x51C6;</p>
</blockquote>
<ul>
<li>&#x8981;&#x6C42;&#xFF1A;</li>
</ul>
<blockquote>
<ol>
<li>&#x6837;&#x672C;&#x5FC5;&#x987B;&#x8DB3;&#x591F;&#x591A;&#x3002;</li>
<li>&#x7A0B;&#x5E8F;&#x4E2D;&#x6240;&#x6709;&#x6B63;&#x5728;&#x8FD0;&#x884C;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x90FD;&#x5FC5;&#x987B;&#x4EE5;&#x76F8;&#x540C;&#x7684;&#x6982;&#x7387;&#x88AB;Profiler&#x91C7;&#x6837;&#x3002;</li>
</ol>
<blockquote>
<p>JVM &#x53EA;&#x80FD;&#x5728;<a href="https://www.jianshu.com/p/c79c5e02ebe6">safepoint</a>&#x91C7;&#x6837;,&#x662F;&#x5426;&#x5C31;&#x8FDD;&#x80CC;&#x4E86;&#x7B2C;&#x4E8C;&#x6761;&#x539F;&#x5219;&#xFF1F;&#x6700;&#x7EC8;&#x5BFC;&#x81F4;profile&#x4E0D;&#x592A;&#x51C6;</p>
</blockquote>
</blockquote>
<ul>
<li>&#x9002;&#x5408;&#x573A;&#x666F;</li>
</ul>
<blockquote>
<p>Sampling&#x7531;&#x4E8E;&#x4F4E;&#x5F00;&#x9500;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x66F4;&#x9002;&#x5408;&#x7528;&#x5728;CPU&#x5BC6;&#x96C6;&#x578B;&#x7684;&#x5E94;&#x7528;&#x4E2D;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x53EF;&#x63A5;&#x53D7;&#x5927;&#x91CF;&#x6027;&#x80FD;&#x5F00;&#x9500;&#x7684;&#x7EBF;&#x4E0A;&#x670D;&#x52A1;&#x4E2D;&#x3002;
&#x4E5F;&#x662F;&#x4E00;&#x822C;Profiler&#x7684;&#x5B9E;&#x73B0;&#x673A;&#x5236;&#xFF0C;&#x5178;&#x578B;&#x7684;&#x5C31;&#x662F;alinode</p>
</blockquote>
<h3 id="Instrumentation"><a href="#Instrumentation"></a>Instrumentation</h3>
<p>Instrumentation&#x65B9;&#x5F0F;&#x5BF9;&#x51E0;&#x4E4E;&#x6240;&#x6709;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E86;&#x989D;&#x5916;&#x7684;AOP&#xFF08;Aspect Oriented Programming &#x4E2D;&#x6587;&#x7FFB;&#x8BD1;&#x4E3A;&#x9762;&#x5411;&#x5207;&#x9762;&#x7F16;&#x7A0B;&#xFF09;&#x903B;&#x8F91;&#xFF0C;&#x8FD9;&#x4F1A;&#x5BFC;&#x81F4;&#x5BF9;&#x7EBF;&#x4E0A;&#x670D;&#x52A1;&#x9020;&#x6210;&#x5DE8;&#x989D;&#x7684;&#x6027;&#x80FD;&#x5F71;&#x54CD;
&#x8FD9;&#x4E2A;&#x6709;&#x70B9;&#x50CF;&#x51FD;&#x6570;&#x57CB;&#x70B9;</p>
<ul>
<li>&#x4F18;&#x70B9;</li>
</ul>
<blockquote>
<p>&#x7EDD;&#x5BF9;&#x7CBE;&#x51C6;&#x7684;&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x6B21;&#x6570;&#x3001;&#x8C03;&#x7528;&#x65F6;&#x95F4;&#x7EDF;&#x8BA1;&#x3002;</p>
</blockquote>
<ul>
<li>&#x7F3A;&#x70B9;</li>
</ul>
<blockquote>
<p>&#x6027;&#x80FD;&#x6D88;&#x8017;&#x6BD4;&#x8F83;&#x5927;&#xFF0C;&#x4FB5;&#x5165;&#x6027;&#x4E5F;&#x6BD4;&#x8F83;&#x9AD8;</p>
</blockquote>
<ul>
<li>&#x9002;&#x5408;&#x573A;&#x666F;</li>
</ul>
<blockquote>
<p>Instrumentation&#x5219;&#x66F4;&#x9002;&#x5408;&#x7528;&#x5728;I/O&#x5BC6;&#x96C6;&#x7684;&#x5E94;&#x7528;&#x4E2D;&#x3001;&#x5BF9;&#x6027;&#x80FD;&#x5F00;&#x9500;&#x4E0D;&#x654F;&#x611F;&#x4EE5;&#x53CA;&#x786E;&#x5B9E;&#x9700;&#x8981;&#x7CBE;&#x786E;&#x7EDF;&#x8BA1;&#x7684;&#x573A;&#x666F;&#x4E2D;&#x3002;</p>
</blockquote>
<h2 id="&#x706B;&#x7130;&#x56FE;"><a href="#&#x706B;&#x7130;&#x56FE;"></a>&#x706B;&#x7130;&#x56FE;</h2>
<p>&#x706B;&#x7130;&#x56FE;&#x7EDF;&#x8BA1;&#x7684;&#x662F;&#x6B21;&#x6570;&#xFF0C;&#x6240;&#x4EE5;&#x5C5E;&#x4E8E;CPU&#x91C7;&#x6837;&#x7C7B;&#x578B;</p>
<p><a href="https://www.brendangregg.com/FlameGraphs/cpu-bash-flamegraph.svg">&#x706B;&#x7130;&#x56FE;svg</a></p>
<h3 id="&#x706B;&#x7130;&#x56FE;&#x542B;&#x4E49;"><a href="#&#x706B;&#x7130;&#x56FE;&#x542B;&#x4E49;"></a>&#x706B;&#x7130;&#x56FE;&#x542B;&#x4E49;</h3>
<ul>
<li>sampling</li>
</ul>
<blockquote>
<p>y &#x8F74;&#x8868;&#x793A;&#x8C03;&#x7528;&#x6808;&#xFF0C;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;&#x8C03;&#x7528;&#x6808;&#x8D8A;&#x6DF1;&#xFF0C;&#x706B;&#x7130;&#x5C31;&#x8D8A;&#x9AD8;&#xFF0C;&#x9876;&#x90E8;&#x5C31;&#x662F;&#x6B63;&#x5728;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x4E0B;&#x65B9;&#x90FD;&#x662F;&#x5B83;&#x7684;&#x7236;&#x51FD;&#x6570;&#x3002;
x &#x8F74;&#x8868;&#x793A;&#x62BD;&#x6837;&#x6570;&#xFF0C;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5728; x &#x8F74;&#x5360;&#x636E;&#x7684;&#x5BBD;&#x5EA6;&#x8D8A;&#x5BBD;&#xFF0C;&#x5C31;&#x8868;&#x793A;&#x5B83;&#x88AB;&#x62BD;&#x5230;&#x7684;&#x6B21;&#x6570;&#x591A;&#xFF0C;&#x5373;&#x6267;&#x884C;&#x7684;&#x65F6;&#x95F4;&#x957F;&#x3002;&#x6CE8;&#x610F;&#xFF0C;x &#x8F74;&#x4E0D;&#x4EE3;&#x8868;&#x65F6;&#x95F4;&#xFF0C;&#x800C;&#x662F;&#x6240;&#x6709;&#x7684;&#x8C03;&#x7528;&#x6808;&#x5408;&#x5E76;&#x540E;&#xFF0C;&#x6309;&#x5B57;&#x6BCD;&#x987A;&#x5E8F;&#x6392;&#x5217;&#x7684;&#x3002;</p>
</blockquote>
<p><strong>&#x706B;&#x7130;&#x56FE;&#x5C31;&#x662F;&#x770B;&#x9876;&#x5C42;&#x7684;&#x54EA;&#x4E2A;&#x51FD;&#x6570;&#x5360;&#x636E;&#x7684;&#x5BBD;&#x5EA6;&#x6700;&#x5927;&#x3002;&#x53EA;&#x8981;&#x6709;&quot;&#x5E73;&#x9876;&quot;&#xFF08;plateaus&#xFF09;&#xFF0C;&#x5C31;&#x8868;&#x793A;&#x8BE5;&#x51FD;&#x6570;&#x53EF;&#x80FD;&#x5B58;&#x5728;&#x6027;&#x80FD;&#x95EE;&#x9898;&#x3002;</strong></p>
<h3 id="&#x706B;&#x7130;&#x56FE;&#x793A;&#x4F8B;"><a href="#&#x706B;&#x7130;&#x56FE;&#x793A;&#x4F8B;"></a>&#x706B;&#x7130;&#x56FE;&#x793A;&#x4F8B;</h3>
<pre><code>func_c 
func_b 
func_a 
start_thread 

func_d 
func_a 
start_thread 

func_d
func_a 
start_thread
</code></pre>
<p>&#x4E0A;&#x9762;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;start_thread&#x662F;&#x542F;&#x52A8;&#x7EBF;&#x7A0B;&#xFF0C;&#x8C03;&#x7528;&#x4E86;func_a&#x3002;&#x540E;&#x8005;&#x53C8;&#x8C03;&#x7528;&#x4E86;func_b&#x548C;func_d&#xFF0C;&#x800C;func_b&#x53C8;&#x8C03;&#x7528;&#x4E86;func_c&#x3002;
&#x5408;&#x5E76;&#x540E;</p>
<pre><code class="language-js">start_thread;func_a;func_b;func_c <span class="hljs-number">1</span> 
start_thread;func_a;func_d <span class="hljs-number">2</span>
</code></pre>
<p>&#x6709;&#x4E86;&#x8FD9;&#x4E2A;&#x8C03;&#x7528;&#x6808;&#xFF0C;<a href="https://github.com/brendangregg/FlameGraph">&#x7EDF;&#x8BA1;&#x5DE5;&#x5177;</a>&#x5C31;&#x80FD;&#x751F;&#x6210;&#x5BF9;&#x5E94;&#x7684;&#x56FE;&#xFF0C;&#x7075;&#x9B42;&#x706B;&#x7130;&#x56FE;</p>
<pre><code>              |-func_c-|
|-func_d------|-func_b-|
|-func_a---------------|
|-start_thread---------|
</code></pre>
<!-- 
| func_c | a |
| --- | --- |
| func_d | func_b |
| func_a | a |
| start_thread | a | -->
<h2 id="Profile&#x5B9E;&#x8DF5;"><a href="#Profile&#x5B9E;&#x8DF5;"></a>Profile&#x5B9E;&#x8DF5;</h2>
<h3 id="&#x5F00;&#x53D1;&#x6D4B;&#x8BD5;&#x9636;&#x6BB5;"><a href="#&#x5F00;&#x53D1;&#x6D4B;&#x8BD5;&#x9636;&#x6BB5;"></a>&#x5F00;&#x53D1;&#x6D4B;&#x8BD5;&#x9636;&#x6BB5;</h3>
<p>&#x76EE;&#x524D;v8-profiler&#x5728; node12&#x7684;&#x65F6;&#x5019;&#x5B89;&#x88C5;&#x6784;&#x5EFA;&#x5931;&#x8D25;&#xFF0C;node12&#x7248;&#x672C;&#x81EA;&#x5E26;&#x7684;<a href="http://nodejs.cn/api/addons/building.html">node-gyp</a>build&#x4E0D;&#x6210;&#x529F;&#xFF1B;
&#x66FF;&#x4EE3;&#x65B9;&#x6848;&#x662F;&#x9009;&#x7528; v8-profiler-next&#xFF0C;&#x6B65;&#x9AA4;&#xFF1A;</p>
<ol>
<li>npm i -D v8-profiler-next</li>
<li>&#x53C2;&#x7167;v8-profiler-next&#x6587;&#x6863;&#xFF0C;&#x5728;dev&#x542F;&#x52A8;5&#x5206;&#x949F;&#x5DE6;&#x53F3;</li>
<li>&#x538B;&#x6D4B;&#xFF08;&#x4F8B;&#x5982;&#xFF1A;autocannon -c 10 -d 300 -p 1 http://localhost:8080&#xFF09;</li>
<li>&#x5BFC;&#x51FA;&#x7ED3;&#x679C;&#x5230;chrome&#x5C31;&#x53EF;&#x4EE5;&#x770B;&#x5230;&#x5177;&#x4F53;&#x7684; cpu&#x5360;&#x7528;&#x60C5;&#x51B5;</li>
</ol>
<p>&#x5728;chrome &#x8C03;&#x8BD5;&#x5DE5;&#x5177;&#x91CC;&#x627E;&#x5230; Javascript Profiler&#x5373;&#x53EF;&#x5BFC;&#x5165; xx.cpuprofile &#x6587;&#x4EF6;&#x8FDB;&#x884C;&#x5206;&#x6790;&#xFF0C;&#x6709;&#x767E;&#x5206;&#x6BD4;&#x8DDF;&#x5012;&#x7ACB;&#x706B;&#x7130;&#x56FE;</p>
<h3 id="&#x4EA7;&#x7EBF;"><a href="#&#x4EA7;&#x7EBF;"></a>&#x4EA7;&#x7EBF;</h3>
<p>&#x76EE;&#x524D;alinode&#x7528;&#x8D77;&#x6765;&#x8FD8;&#x6BD4;&#x8F83;&#x6D41;&#x7545;&#xFF0C;&#x5982;&#x679C;&#x4F7F;&#x7528;&#x7684;&#x662F;Docker&#x90E8;&#x7F72;&#xFF0C;&#x53EF;&#x4EE5;&#x8D70;&#x4EE5;&#x4E0B;&#x6D41;&#x7545;</p>
<ol>
<li>&#x76F4;&#x63A5;&#x4F7F;&#x7528;alinode&#x955C;&#x50CF;&#x6784;&#x5EFA;&#x81EA;&#x5DF1;&#x7684;dockerfile <strong>&#xFF08;&#x4E3A;&#x4E86;&#x964D;&#x4F4E;Docker&#x955C;&#x50CF;&#x7684;&#x5927;&#x5C0F;&#xFF0C;node12 &#x5BF9;&#x5E94;&#x7684;alinode&#x7248;&#x672C;&#x770B;&#x8D77;&#x6765;&#x57FA;&#x4E8E;alpine linux&#xFF0C;&#x6240;&#x4EE5;&#x6709;&#x4E9B;&#x9700;&#x8981;&#x6CE8;&#x610F;&#xFF0C;&#x4F8B;&#x5982;apt&#x9700;&#x8981;&#x66FF;&#x6362;apk&#xFF09;</strong></li>
<li>&#x6309;&#x7167;&#x5B98;&#x65B9;&#x6587;&#x6863;&#x521B;&#x5EFA; app-config.json &#x6587;&#x4EF6;</li>
</ol>
<pre><code class="language-json">{
    <span class="hljs-attr">&quot;appid&quot;</span>: <span class="hljs-string">&quot;xxxx&quot;</span>,
    <span class="hljs-attr">&quot;secret&quot;</span>: <span class="hljs-string">&quot;xxx&quot;</span>,
    <span class="hljs-attr">&quot;packages&quot;</span>: [
        <span class="hljs-string">&quot;docker&#x91CC;&#x9762;&#x7684;packge.json&#x8DEF;&#x5F84;&quot;</span> <span class="hljs-comment">// eg: /app/package.json</span>
    ]
}
</code></pre>
<ol start="3">
<li>&#x90E8;&#x7F72;&#x4E0A;&#x7EBF;&#xFF0C;&#x7136;&#x540E;&#x8FDB;&#x884C; cpu&#x5728;&#x7EBF;Profile&#xFF0C;&#x8F6C;&#x50A8;&#x540E;&#x5728;&#x7EBF;&#x5206;&#x6790;&#xFF08;&#x652F;&#x6301;&#x706B;&#x7130;&#x56FE;&#x8DDF;dev tool&#x6A21;&#x5F0F;&#xFF09;</li>
</ol>
<p>&#x611F;&#x5174;&#x8DA3;&#x7684;&#x53EF;&#x4EE5;&#x53C2;&#x8003;<a href="https://zhuanlan.zhihu.com/p/72729044">&#x8FD9;&#x91CC;</a></p>
<h3 id="Demo"><a href="#Demo"></a>Demo</h3>
<ol>
<li>&#x8DF3;&#x8F6C;&#x5230; <a href="https://wizardpisces.github.io/test">Test &#x8DEF;&#x7531;</a></li>
<li>&#x70B9;&#x51FB; cpu-profiling</li>
<li>&#x6253;&#x5F00;console&#xFF0C;&#x70B9;&#x51FB;Javascript Profiler&#xFF0C;&#x70B9;&#x51FB;record&#xFF0C;6&#x79D2;&#x540E;&#x70B9;&#x51FB;stop</li>
<li>&#x518D;&#x6B21;&#x70B9;&#x51FB; cpu-profiling</li>
</ol>
<p>&#x66F4;&#x591A;&#x7CBE;&#x7EC6;demo, &#x672C;&#x5730;&#x8FD0;&#x884C;&#x8FD9;&#x4E2A;<a href="https://github.com/wizardpisces/vite-site">&#x5DE5;&#x7A0B;</a>&#xFF0C;&#x4FEE;&#x6539;pages/test/use-test.ts&#x91CC;&#x9762;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x518D;&#x6B21;&#x8D70;&#x4E0A;&#x9762;&#x6D41;&#x7A0B;&#xFF0C;&#x770B;&#x4E0B;100&#x5FAE;&#x79D2;&#x7684;&#x6355;&#x83B7;&#x4E22;&#x5931;&#x6548;&#x679C;&#xFF0C;&#x4EE5;&#x53CA;&#x6700;&#x5C0F;&#x7684;&#x65F6;&#x95F4;&#x5355;&#x5143;&#x662F;&#x5426;&#x662F; 0.1&#x6BEB;&#x79D2;&#xFF08;&#x4E5F;&#x5C31;&#x662F;100&#x5FAE;&#x79D2;&#xFF09;</p>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://github.com/brendangregg/FlameGraph</li>
<li>https://www.mattzeunert.com/2016/08/06/show-native-functions-in-js-profile.html</li>
<li>https://nodesource.com/blog/diagnostics-in-NodeJS-2</li>
<li>https://www.ruanyifeng.com/blog/2017/09/flame-graph.html</li>
<li>https://tech.meituan.com/2019/10/10/jvm-cpu-profiler.html</li>
<li>https://www.jianshu.com/p/c79c5e02ebe6</li>
</ul>
<p><u>2021-7-28</u></p>
`,n=[{level:2,title:"性能分析",children:[]},{level:2,title:"Chrome Profiler运行机制",children:[{level:3,title:"performance",children:[]},{level:3,title:"javascript-profiler",children:[]}]},{level:2,title:"cpu profile种类",children:[{level:3,title:"采样 Sampling",children:[]},{level:3,title:"Instrumentation",children:[]}]},{level:2,title:"火焰图",children:[{level:3,title:"火焰图含义",children:[]},{level:3,title:"火焰图示例",children:[]}]},{level:2,title:"Profile实践",children:[{level:3,title:"开发测试阶段",children:[]},{level:3,title:"产线",children:[]},{level:3,title:"Demo",children:[]}]},{level:2,title:"Reference",children:[]}];export{x as attributes,F as html,n as nestedHeaders};
