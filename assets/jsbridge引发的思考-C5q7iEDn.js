const x={},F=`<h1 id="JsBridge&#x5F15;&#x53D1;&#x7684;&#x601D;&#x8003;"><a href="#JsBridge&#x5F15;&#x53D1;&#x7684;&#x601D;&#x8003;"></a>JsBridge&#x5F15;&#x53D1;&#x7684;&#x601D;&#x8003;</h1>
<p>RN&#x8DDF;&#x5FAE;&#x4FE1;&#x5C0F;&#x7A0B;&#x5E8F;&#x7B97;&#x662F;JsBridge&#x6700;&#x7ECF;&#x5178;&#x7684;&#x5B9E;&#x8DF5;</p>
<h2 id="&#x7591;&#x95EE;"><a href="#&#x7591;&#x95EE;"></a>&#x7591;&#x95EE;</h2>
<ol>
<li>&#x4E3A;&#x4EC0;&#x4E48;js&#x80FD;&#x591F;&#x8C03;&#x7528;android&#x6216;&#x8005;IOS&#x7CFB;&#x7EDF;&#x7684;&#x65B9;&#x6CD5;&#xFF1F;</li>
<li>&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x4E4B;&#x95F4;&#x5982;&#x4F55;&#x505A;&#x5230;&#x76F8;&#x4E92;&#x8C03;&#x7528;&#xFF1F;</li>
</ol>
<h2 id="JsBridge&#x539F;&#x7406;"><a href="#JsBridge&#x539F;&#x7406;"></a>JsBridge&#x539F;&#x7406;</h2>
<p>Web&#x7AEF;&#x548C;Native&#x53EF;&#x4EE5;&#x7C7B;&#x6BD4;&#x4E8E;Client/Server&#x6A21;&#x5F0F;&#xFF0C;Web&#x7AEF;&#x8C03;&#x7528;&#x539F;&#x751F;&#x63A5;&#x53E3;&#x65F6;&#x5C31;&#x5982;&#x540C;Client&#x5411;Server&#x7AEF;&#x53D1;&#x9001;&#x4E00;&#x4E2A;&#x8BF7;&#x6C42;&#x7C7B;&#x4F3C;&#xFF0C;JSB&#x5728;&#x6B64;&#x5145;&#x5F53;&#x7C7B;&#x4F3C;&#x4E8E;HTTP&#x534F;&#x8BAE;&#x7684;&#x89D2;&#x8272;&#xFF0C;&#x5B9E;&#x73B0;JSBridge&#x4E3B;&#x8981;&#x662F;&#x4E24;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x5C06;Native&#x7AEF;&#x539F;&#x751F;&#x63A5;&#x53E3;&#x5C01;&#x88C5;&#x6210;JavaScript&#x63A5;&#x53E3;</li>
<li>&#x5C06;Web&#x7AEF;JavaScript&#x63A5;&#x53E3;&#x5C01;&#x88C5;&#x6210;&#x539F;&#x751F;&#x63A5;&#x53E3;</li>
</ul>
<h3 id="Native&#x8C03;&#x7528;JS"><a href="#Native&#x8C03;&#x7528;JS"></a>Native&#x8C03;&#x7528;JS</h3>
<ul>
<li>&#x539F;&#x7406;&#xFF1A;&#x76F4;&#x63A5;&#x7528;JS&#x5F15;&#x64CE;&#x6267;&#x884C;&#xFF08;IOS&#x7684; WebView &#x5BB9;&#x5668;&#x91C7;&#x7528; WKWebView &#x5185;&#x6838;+JavascriptCore&#x5F15;&#x64CE; etc&#xFF09;</li>
<li>&#x573A;&#x666F;&#xFF1A;Native input&#x7ED1;&#x5B9A; Native &#x4E8B;&#x4EF6;&#xFF0C;&#x5728;&#x4E8B;&#x4EF6;&#x4EE3;&#x7801;&#x91CC;&#x901A;&#x8FC7;&#x8C03;&#x7528;js&#x5C06;&#x7ED3;&#x679C;&#x53CD;&#x5E94;&#x5230; Webview</li>
</ul>
<h3 id="JS&#x8C03;&#x7528;Native&#x65B9;&#x5F0F;"><a href="#JS&#x8C03;&#x7528;Native&#x65B9;&#x5F0F;"></a>JS&#x8C03;&#x7528;Native&#x65B9;&#x5F0F;</h3>
<h4 id="&#x62E6;&#x622A;&#x5F0F;"><a href="#&#x62E6;&#x622A;&#x5F0F;"></a>&#x62E6;&#x622A;&#x5F0F;</h4>
<p>&#x6807;&#x51C6;&#x7684;URL&#x683C;&#x5F0F;&#xFF1A;<code>&lt;scheme&gt;://&lt;host&gt;:&lt;port&gt;&lt;path&gt;</code>&#xFF0C;APP&#x6709;&#x4E13;&#x5C5E;&#x7684;Scheme&#xFF0C;eg&#xFF1A;&#x5FAE;&#x4FE1;&#x7684; URL Scheme &#x5C31;&#x662F; weixin://</p>
<ul>
<li>&#x539F;&#x7406;&#xFF1A;Native&#x62E6;&#x622A; Webview Sheme &#x8BF7;&#x6C42;&#xFF0C;&#x5206;&#x6790;&#x662F;&#x5426;&#x4E3A;JSB&#x8BF7;&#x6C42;&#x683C;&#x5F0F;</li>
<li>&#x573A;&#x666F;&#xFF1A;Webview&#x6309;&#x94AE;&#x6253;&#x5F00;Native&#x76F8;&#x518C;&#xFF0C;&#x6784;&#x9020;Scheme&#x5E76;&#x53D1;&#x9001;&#xFF0C;&#x4F20;&#x9012;&#x7279;&#x5B9A;&#x53C2;&#x6570;&#x7ED9;Native&#x53BB;&#x5524;&#x8D77;&#x76F8;&#x518C;&#xFF1B;&#x6216;&#x8005;&#x6267;&#x884C;&#x67D0;&#x4E9B;&#x51FD;&#x6570;&#x83B7;&#x53D6;&#x503C;&#x540E;&#xFF0C;&#x518D;&#x6B21;&#x901A;&#x8FC7;&#x6267;&#x884C;js&#x628A;&#x7ED3;&#x679C;&#x8FD4;&#x56DE;&#x7ED9;webview&#x5B9E;&#x73B0;&#x95ED;&#x73AF;&#x901A;&#x4FE1;</li>
<li>&#x517C;&#x5BB9;&#x6027;&#xFF1A;&#x65E0;&#x517C;&#x5BB9;&#x6027;&#x95EE;&#x9898;</li>
<li>&#x6027;&#x80FD;&#xFF1A;URL request &#x521B;&#x5EFA;&#x8BF7;&#x6C42;&#x6709;&#x4E00;&#x5B9A;&#x7684;&#x8017;&#x65F6;&#xFF08;&#x4E00;&#x822C;&#x901A;&#x8FC7;webview&#x521B;&#x5EFA;iframe&#x65B9;&#x5F0F;&#x53D1;&#x9001;&#xFF09;&#xFF0C;Android&#x6BD4;&#x8F83;&#x5DEE;</li>
<li>&#x5C40;&#x9650;&#xFF1A;URL &#x5B57;&#x7B26;&#x4E32;&#x957F;&#x5EA6;&#x6709;&#x9650;&#x5236;</li>
</ul>
<h4 id="&#x6CE8;&#x5165;&#x5F0F;&#xFF08;&#x4E3B;&#x6D41;&#xFF09;"><a href="#&#x6CE8;&#x5165;&#x5F0F;&#xFF08;&#x4E3B;&#x6D41;&#xFF09;"></a>&#x6CE8;&#x5165;&#x5F0F;&#xFF08;&#x4E3B;&#x6D41;&#xFF09;</h4>
<ul>
<li>&#x539F;&#x7406;&#xFF1A;&#x901A;&#x8FC7; WebView &#x63D0;&#x4F9B;&#x7684;&#x63A5;&#x53E3;&#x5411; JS &#x5168;&#x5C40;&#x4E0A;&#x4E0B;&#x6587;&#x5BF9;&#x8C61;&#xFF08;window&#xFF09;&#x4E2D;&#x6CE8;&#x5165;&#x5BF9;&#x8C61;&#x6216;&#x8005;&#x65B9;&#x6CD5;&#xFF0C;&#x5F53; JS &#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x53EF;&#x76F4;&#x63A5;&#x6267;&#x884C;&#x76F8;&#x5E94;&#x7684; Native &#x4EE3;&#x7801;&#x903B;&#x8F91;&#xFF0C;&#x4ECE;&#x800C;&#x8FBE;&#x5230; Web &#x8C03;&#x7528; Native &#x7684;&#x76EE;&#x7684;&#x3002;</li>
</ul>
<blockquote>
<p>Native&#x7AEF;</p>
</blockquote>
<pre><code class="language-java"><span class="hljs-comment">// Android&#xFF08;4.2+&#xFF09;&#x63D0;&#x4F9B;&#x4E86;addJavascriptInterface&#x6CE8;&#x5165;</span>
<span class="hljs-comment">// &#x6CE8;&#x5165;&#x5168;&#x5C40;JS&#x5BF9;&#x8C61;</span>
webView.addJavascriptInterface(<span class="hljs-keyword">new</span> NativeBridge(<span class="hljs-keyword">this</span>), <span class="hljs-string">&quot;NativeBridge&quot;</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NativeBridge</span> </span>{
  <span class="hljs-keyword">private</span> Context ctx;
  NativeBridge(Context ctx) {
    <span class="hljs-keyword">this</span>.ctx = ctx;
  }

  <span class="hljs-comment">// &#x589E;&#x52A0;JS&#x8C03;&#x7528;&#x63A5;&#x53E3;</span>
  <span class="hljs-meta">@JavascriptInterface</span>
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">showNativeDialog</span><span class="hljs-params">(String text)</span> </span>{
    <span class="hljs-keyword">new</span> AlertDialog.Builder(ctx).setMessage(text).create().show();
  }
}
</code></pre>
<blockquote>
<p>web&#x7AEF;</p>
</blockquote>
<pre><code class="language-js"><span class="hljs-built_in">window</span>.NativeBridge.showNativeDialog(<span class="hljs-string">&apos;hello&apos;</span>);
</code></pre>
<ul>
<li>
<p>&#x573A;&#x666F;&#xFF1A;&#x5404;&#x79CD;&#x7CFB;&#x7EDF;API&#x7684;&#x76F4;&#x63A5;&#x8C03;&#x52A8;&#xFF08;&#x5B58;&#x50A8;&#x7B49;&#xFF09;</p>
</li>
<li>
<p>&#x517C;&#x5BB9;&#x6027;&#xFF1A;&#x5B89;&#x5353;4.2+ &#x548C; iOS 7+&#x4EE5;&#x4E0A;&#x53EF;&#x7528;</p>
</li>
<li>
<p>&#x6027;&#x80FD;&#xFF1A;&#x8F83;&#x597D;</p>
</li>
</ul>
<h3 id="&#x4E32;&#x8054;&#x53CC;&#x7AEF;&#x901A;&#x4FE1;"><a href="#&#x4E32;&#x8054;&#x53CC;&#x7AEF;&#x901A;&#x4FE1;"></a>&#x4E32;&#x8054;&#x53CC;&#x7AEF;&#x901A;&#x4FE1;</h3>
<p><a href="https://github.com/marcuswestin/WebViewJavascriptBridge">WebViewJavascriptBridge</a>
An iOS/OSX bridge for sending messages between Obj-C and JavaScript in UIWebViews/WebViews</p>
<h3 id="&#x5982;&#x4F55;&#x5904;&#x7406;&#x5B89;&#x5168;&#x95EE;&#x9898;"><a href="#&#x5982;&#x4F55;&#x5904;&#x7406;&#x5B89;&#x5168;&#x95EE;&#x9898;"></a>&#x5982;&#x4F55;&#x5904;&#x7406;&#x5B89;&#x5168;&#x95EE;&#x9898;</h3>
<p>&#x5728; APP &#x5185; JsBridge &#x53EF;&#x4EE5;&#x5B9E;&#x73B0; Web &#x548C; Native &#x7684;&#x901A;&#x4FE1;&#xFF0C;&#x4F46;&#x662F;&#x5982;&#x679C; APP &#x6253;&#x5F00;&#x4E00;&#x4E2A;&#x6076;&#x610F;&#x7684;&#x9875;&#x9762;&#xFF0C;&#x9875;&#x9762;&#x53EF;&#x4EE5;&#x4EFB;&#x610F;&#x8C03;&#x7528; JsBridge &#x65B9;&#x6CD5;&#xFF0C;&#x83B7;&#x53D6;&#x5404;&#x79CD;&#x9690;&#x79C1;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x5C31;&#x4F1A;&#x5F15;&#x8D77;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x3002;</p>
<ul>
<li>&#x9650;&#x5B9A;&#x57DF;&#x540D;&#x767D;&#x540D;&#x5355;&#xFF0C;&#x53EA;&#x5141;&#x8BB8;&#x6307;&#x5B9A;&#x57DF;&#x540D;&#x8C03;&#x7528;</li>
</ul>
<h2 id="JSI"><a href="#JSI"></a>JSI</h2>
<p>RN &#x5728;0.59 &#x7248;&#x672C;&#x4F7F;&#x7528;JSI &#x53D6;&#x4EE3;&#x4E86;&#x5148;&#x524D;&#x7684;JSBridge &#x3002;</p>
<p>React Native JSI (JavaScript Interface) &#x53EF;&#x4EE5;&#x4F7F; JavaScript &#x548C; &#x539F;&#x751F;&#x6A21;&#x5757; &#x66F4;&#x5FEB;&#x3001;&#x66F4;&#x7B80;&#x5355;&#x7684;&#x901A;&#x4FE1;&#x3002;&#x5B83;&#x4E5F;&#x662F;React Native &#x65B0;&#x7684;&#x67B6;&#x6784;&#x4F53;&#x7CFB;&#x4E2D;Fabric UI&#x5C42; &#x548C; Turbo &#x6A21;&#x5757;&#x7684;&#x6838;&#x5FC3;&#x90E8;&#x5206;&#x3002;</p>
<h3 id="JSI&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;"><a href="#JSI&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;"></a>JSI&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;</h3>
<p>JSI &#x79FB;&#x9664;&#x4E86;&#x539F;&#x751F;&#x4EE3;&#x7801;&#x548C;JavaScript&#x4EE3;&#x7801;&#x4E4B;&#x95F4;&#x7684;&#x6865;&#x63A5;&#xFF08;bridge&#xFF09;&#xFF0C;&#x540C;&#x65F6;&#x4E5F;&#x7701;&#x53BB;&#x4E86;&#x4E24;&#x7AEF;&#x76F8;&#x4E92;&#x8C03;&#x7528;&#x65F6;&#x5927;&#x91CF;&#x7684;JSON&#x5E8F;&#x5217;&#x5316;&#x548C;&#x53CD;&#x5E8F;&#x5217;&#x5316;&#x64CD;&#x4F5C;&#x3002;JSI&#x4E3A;&#x539F;&#x751F;&#x548C;JS&#x4EA4;&#x4E92;&#x6253;&#x5F00;&#x4E86;&#x65B0;&#x7684;&#x5927;&#x95E8;&#x3002;&#x4E0B;&#x9762;&#x662F;&#x4E00;&#x4E9B;JSI&#x7684;&#x7279;&#x70B9;&#xFF1A;</p>
<ul>
<li>JavaScript Interface &#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x5411;JavaScript &#x8FD0;&#x884C;&#x65F6;&#x6CE8;&#x518C;&#x65B9;&#x6CD5;&#x3002;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x5728;js&#x73AF;&#x5883;&#x4E2D;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; global&#x5BF9;&#x8C61;&#x83B7;&#x53D6;&#x5E76;&#x8C03;&#x7528;&#x3002;</li>
<li>&#x6211;&#x4EEC;&#x5B8C;&#x5168;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;C++&#x6216;&#x8005;&#x5728;iOS&#x91CC;&#x4F7F;&#x7528;OC &#xFF0C;&#x5728;Android&#x91CC;&#x4F7F;&#x7528;Java&#x5B9E;&#x73B0;&#x8FD9;&#x4E9B;&#x6CE8;&#x518C;&#x65B9;&#x6CD5;&#x3002;</li>
<li>&#x539F;&#x5148;&#x4F7F;&#x7528;bridge &#x7684;&#x65B9;&#x5F0F;&#x5B9E;&#x73B0;&#x7684;&#x539F;&#x751F;&#x6A21;&#x5757;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x589E;&#x52A0;&#x4E00;&#x5C42;C++&#xFF0C;&#x5FEB;&#x901F;&#x8F6C;&#x5316;&#x4E3A;&#x901A;&#x8FC7;JSI&#x5B9E;&#x73B0;&#x3002;</li>
<li>&#x5728;iOS&#x7AEF;&#x5B9E;&#x73B0;&#x975E;&#x5E38;&#x7B80;&#x5355;&#xFF0C;&#x56E0;&#x4E3A;C++&#x548C;OC &#x53EF;&#x4EE5;&#x65B9;&#x4FBF;&#x7684;&#x5B9E;&#x73B0;&#x6DF7;&#x7F16;&#x3002;</li>
<li>&#x5728;Android&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x901A;&#x8FC7;JNI &#x505A;&#x4E00;&#x4E9B;&#x8F6C;&#x5316;&#x3002;</li>
<li>&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x662F;&#x5B8C;&#x5168;&#x540C;&#x6B65;&#x7684;&#xFF0C;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x4E0D;&#x5FC5;&#x5F3A;&#x5236;&#x4F7F;&#x7528;async&#x3002;await&#x3002;</li>
</ul>
<h2 id="&#x5176;&#x4ED6;&#x89D2;&#x5EA6;&#x5206;&#x6790;"><a href="#&#x5176;&#x4ED6;&#x89D2;&#x5EA6;&#x5206;&#x6790;"></a>&#x5176;&#x4ED6;&#x89D2;&#x5EA6;&#x5206;&#x6790;</h2>
<ul>
<li>Javascript&#x7684;&#x7F16;&#x8BD1;&#x5668;V8&#x662F;C++&#x5B9E;&#x73B0;&#xFF0C;C++&#x7F16;&#x8BD1;&#x5668;&#x662F;C&#xFF0C;&#x6240;&#x4EE5;Javascript&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x662F;C&#x8BED;&#x8A00;&#x5B9E;&#x73B0;</li>
<li>Java&#x7F16;&#x8BD1;&#x5668;&#x88AB;&#x7F16;&#x5199;&#x4E3A;Java&#x7A0B;&#x5E8F;&#xFF0C;&#x7136;&#x540E;&#x4F7F;&#x7528;C&#x7F16;&#x5199;&#x7684;Java&#x7F16;&#x8BD1;&#x5668;&#xFF08;&#x7B2C;&#x4E00;&#x4E2A;Java&#x7F16;&#x8BD1;&#x5668;&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x8BD1;&#xFF0C;&#x6240;&#x4EE5;Java&#x7684;&#x7F16;&#x8BD1;&#x5668;&#x662F;C&#x8BED;&#x8A00;&#x5B9E;&#x73B0;</li>
<li>Objective-C&#x662F;&#x4E00;&#x79CD;&#x901A;&#x7528;&#x3001;&#x9AD8;&#x7EA7;&#x3001;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x3002;&#x5B83;&#x6269;&#x5C55;&#x4E86;&#x6807;&#x51C6;&#x7684;ANSI C&#x7F16;&#x7A0B;&#x8BED;&#x8A00;</li>
</ul>
<p>&#x5176;&#x4ED6;&#xFF1A;LLVM&#x662F;&#x6784;&#x67B6;&#x7F16;&#x8BD1;&#x5668;(compiler)&#x7684;&#x6846;&#x67B6;&#x7CFB;&#x7EDF;&#xFF0C;&#x4EE5;C++&#x7F16;&#x5199;&#x800C;&#x6210;&#xFF0C;&#x6240;&#x4EE5;&#x7F16;&#x8BD1;&#x7684;IR&#x4E3A;LLVM&#x7684;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#xFF08;&#x4F8B;&#x5982;Rust&#xFF09;&#x662F;C&#x8BED;&#x8A00;&#x5B9E;&#x73B0;</p>
<p>&#x603B;&#x7ED3;&#xFF1A;&#x8FD9;&#x4E9B;&#x9AD8;&#x7EA7;&#x8BED;&#x8A00;&#x5E95;&#x5C42;&#x90FD;&#x662F;C&#x7684;&#x884D;&#x751F;&#xFF1B;API&#xFF1A;&quot;C&quot; &#x90E8;&#x5206;&#x5B9A;&#x4E49;&#x4E86;&#x5916;&#x90E8;&#x51FD;&#x6570;&#x6240;&#x4F7F;&#x7528;&#x7684; &#x5E94;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x63A5;&#x53E3;&#xFF08;application binary interface&#xFF0C;ABI&#xFF09; &#x2014;&#x2014; ABI &#x5B9A;&#x4E49;&#x4E86;&#x5982;&#x4F55;&#x5728;&#x6C47;&#x7F16;&#x8BED;&#x8A00;&#x5C42;&#x9762;&#x8C03;&#x7528;&#x6B64;&#x51FD;&#x6570;&#x3002;&quot;C&quot; ABI &#x662F;&#x6700;&#x5E38;&#x89C1;&#x7684;&#xFF0C;&#x5E76;&#x9075;&#x5FAA; C &#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x7684; ABI&#x3002;</p>
<p>&#x63A8;&#x5BFC;&#xFF1A;</p>
<ol>
<li>&#x8FD9;&#x4E9B;&#x8BED;&#x8A00;&#x80FD;&#x5728;&#x7F16;&#x8BD1;&#x5C42;&#x9762;&#x4E92;&#x901A;&#xFF0C;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x5982;&#x679C;&#x90FD;&#x5B9E;&#x73B0;C&#x8BED;&#x8A00;&#x63D0;&#x4F9B;&#x7684;bridge interface&#xFF0C;&#x90A3;&#x5C31;&#x80FD;&#x76F4;&#x63A5;&#x5728;&#x4EE3;&#x7801;&#x7F16;&#x8BD1;&#x540E;&#x901A;&#x4FE1;&#xFF08;API&#x5C42;&#x9762;&#xFF1F;&#xFF09;&#xFF1F;Foreign_function_interface&#xFF1F;</li>
</ol>
<p>&#x5176;&#x4ED6;&#x8DE8;&#x8BED;&#x8A00;&#x901A;&#x4FE1;&#xFF0C;&#x4F8B;&#x5982;&#x534F;&#x8BAE;&#xFF08;&#x72EC;&#x7ACB;&#x4E8E;&#x8BED;&#x8A00;&#x5C42;&#x9762;&#x7684;&#x6807;&#x51C6;&#xFF09;&#xFF1A;RPC&#x7B49;</p>
<h2 id="&#x5E94;&#x7528;"><a href="#&#x5E94;&#x7528;"></a>&#x5E94;&#x7528;</h2>
<p>&#x5B9E;&#x73B0;&#x8FC7;&#x4E00;&#x4E2A;<a href="https://github.com/wizardpisces/tiny-sass-compiler">&#x7B80;&#x5355;&#x7684;SASS&#x7F16;&#x8BD1;&#x5668;</a>&#xFF0C;&#x4F7F;&#x7528;js&#x5B9E;&#x73B0;&#xFF1B;&#x6240;&#x4EE5;&#x53EF;&#x4EE5;&#x5728;&#x7F16;&#x8BD1;&#x8FC7;&#x7A0B;&#x4E2D;&#x534F;&#x5546;&#x6CE8;&#x5165;js&#x51FD;&#x6570;&#xFF0C;&#x5B9E;&#x73B0;&#x540E;&#x5C31;&#x662F;<a href="https://github.com/wizardpisces/tiny-sass-compiler/blob/master/transform.md">plugin&#x7CFB;&#x7EDF;</a>&#xFF0C;&#x5E94;&#x7528;&#x7684;<a href="https://github.com/wizardpisces/tiny-sass-compiler/blob/master/test/plugin/plugin.scss">Demo&#x4EE3;&#x7801;</a></p>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li><a href="https://github.com/wizardpisces/tiny-sass-compiler/blob/master/transform.md">tiny-sass-compiler Plugin</a></li>
<li><a href="https://juejin.cn/post/6916452544956858382">React Native&#x539F;&#x7406;&#x4E0E;&#x5B9E;&#x8DF5;</a></li>
<li><a href="https://blog.51cto.com/u_15047484/4605055">NativeScript&#x7684;&#x5DE5;&#x4F5C;&#x539F;&#x7406;&#xFF1A;&#x7528;JavaScript&#x8C03;&#x7528;&#x539F;&#x751F;API&#x5B9E;&#x73B0;&#x8DE8;&#x5E73;&#x53F0; </a></li>
<li><a href="https://juejin.cn/post/6999432558366703630#heading-1">React Native JSI&#xFF1A;&#x5B9E;&#x73B0;RN&#x4E0E;&#x539F;&#x751F;&#x901A;&#x4FE1;</a></li>
<li>https://tsejx.github.io/cross-platform-guidebook/hybird/jsbridge/</li>
<li>https://juejin.cn/post/6844903585268891662</li>
<li><a href="https://kaisery.github.io/trpl-zh-cn/ch19-01-unsafe-rust.html?highlight=extern#%E8%B0%83%E7%94%A8%E4%B8%8D%E5%AE%89%E5%85%A8%E5%87%BD%E6%95%B0%E6%88%96%E6%96%B9%E6%B3%95">Rust&#x7A0B;&#x5E8F;&#x8BED;&#x8A00;&#x8BBE;&#x8BA1;&#x4E4B;&#x4E0D;&#x5B89;&#x5168;&#x7684;Rust</a></li>
<li>https://en.wikipedia.org/wiki/Foreign_function_interface</li>
<li>https://blog.risingstack.com/how-to-use-rust-with-node-when-performance-matters/</li>
<li>https://www.teqng.com/2021/08/01/jsbridge-%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/#JSB_yuan_li</li>
</ul>
<p><em><strong>&#x672C;&#x6587;&#x5C5E;&#x4E8E;&#x4E2A;&#x4EBA;&#x7684;&#x89C1;&#x89E3;&#xFF0C;&#x914C;&#x60C5;&#x89C2;&#x770B;</strong></em></p>
`,E=[{level:1,title:"JsBridge引发的思考",children:[{level:2,title:"疑问",children:[]},{level:2,title:"JsBridge原理",children:[{level:3,title:"Native调用JS",children:[]},{level:3,title:"JS调用Native方式",children:[{level:4,title:"拦截式",children:[]},{level:4,title:"注入式（主流）",children:[]}]},{level:3,title:"串联双端通信",children:[]},{level:3,title:"如何处理安全问题",children:[]}]},{level:2,title:"JSI",children:[{level:3,title:"JSI有什么不同",children:[]}]},{level:2,title:"其他角度分析",children:[]},{level:2,title:"应用",children:[]}]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
