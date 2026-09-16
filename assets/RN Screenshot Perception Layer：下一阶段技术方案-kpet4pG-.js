const x={title:"RN Screenshot Perception Layer：从“模型看图”到可评测的 Native 运行事实",description:"以 agent-device 为候选运行底座，为 RN Screenshot-to-Page 补充结构观察、稳定交互、截图差异和可复核证据闭环。"},F=`<h1 id="RN Screenshot Perception Layer&#xFF1A;&#x4ECE;&#x201C;&#x6A21;&#x578B;&#x770B;&#x56FE;&#x201D;&#x5230;&#x53EF;&#x8BC4;&#x6D4B;&#x7684; Native &#x8FD0;&#x884C;&#x4E8B;&#x5B9E;"><a href="#RN Screenshot Perception Layer&#xFF1A;&#x4ECE;&#x201C;&#x6A21;&#x578B;&#x770B;&#x56FE;&#x201D;&#x5230;&#x53EF;&#x8BC4;&#x6D4B;&#x7684; Native &#x8FD0;&#x884C;&#x4E8B;&#x5B9E;"></a>RN Screenshot Perception Layer&#xFF1A;&#x4ECE;&#x201C;&#x6A21;&#x578B;&#x770B;&#x56FE;&#x201D;&#x5230;&#x53EF;&#x8BC4;&#x6D4B;&#x7684; Native &#x8FD0;&#x884C;&#x4E8B;&#x5B9E;</h1>
<h2 id="&#x80CC;&#x666F;"><a href="#&#x80CC;&#x666F;"></a>&#x80CC;&#x666F;</h2>
<p>&#x5F53;&#x524D; RN Screenshot-to-Page &#x5DF2;&#x7ECF;&#x5F62;&#x6210;&#x4E09;&#x6761;&#x5E76;&#x884C;&#x8DEF;&#x5F84;&#xFF1A;Schema &#x8FC1;&#x79FB;&#x8D1F;&#x8D23;&#x8FD1;&#x671F;&#x4EA4;&#x4ED8;&#xFF0C;Codex Direct &#x8D1F;&#x8D23;&#x63A2;&#x7D22;&#x7AEF;&#x5230;&#x7AEF;&#x751F;&#x6210;&#x80FD;&#x529B;&#xFF0C;Material&#x3001;Trace&#x3001;&#x89C6;&#x89C9; Tool &#x548C;&#x8BC4;&#x6D4B;&#x4F5C;&#x4E3A;&#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x5171;&#x7528;&#x7684;&#x57FA;&#x7840;&#x8BBE;&#x65BD;&#x3002;</p>
<p>&#x8FD9;&#x5957;&#x8DEF;&#x5F84;&#x4ECD;&#x7F3A;&#x5C11;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x73AF;&#x8282;&#xFF1A;Agent &#x4FEE;&#x6539;&#x4EE3;&#x7801;&#x540E;&#xFF0C;&#x600E;&#x6837;&#x7A33;&#x5B9A;&#x5730;&#x77E5;&#x9053;&#x771F;&#x5B9E; Native &#x9875;&#x9762;&#x5DF2;&#x7ECF;&#x53D8;&#x6210;&#x4EC0;&#x4E48;&#x6837;&#x3002;</p>
<p>&#x76EE;&#x524D;&#x7684;&#x9A8C;&#x8BC1;&#x4E3B;&#x8981;&#x4F9D;&#x8D56;&#x4EBA;&#x5DE5;&#x542F;&#x52A8; App&#x3001;&#x8FDB;&#x5165;&#x9875;&#x9762;&#x3001;&#x622A;&#x56FE;&#xFF0C;&#x518D;&#x628A;&#x622A;&#x56FE;&#x4EA4;&#x7ED9; Agent &#x6216;&#x4EBA;&#x5DE5;&#x5224;&#x65AD;&#x3002;&#x8FD9;&#x80FD;&#x591F;&#x652F;&#x6491;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x8DD1;&#x901A; Case&#xFF0C;&#x4F46;&#x96BE;&#x4EE5;&#x5F62;&#x6210;&#x89C4;&#x6A21;&#x5316;&#x95ED;&#x73AF;&#xFF1A;&#x9875;&#x9762;&#x5165;&#x53E3;&#x4E0D;&#x7A33;&#x5B9A;&#x3001;&#x622A;&#x56FE;&#x65F6;&#x673A;&#x4E0D;&#x4E00;&#x81F4;&#x3001;Agent &#x53EA;&#x80FD;&#x770B;&#x50CF;&#x7D20;&#x800C;&#x4E0D;&#x77E5;&#x9053;&#x9875;&#x9762;&#x7ED3;&#x6784;&#xFF0C;&#x591A;&#x4E2A;&#x4EFB;&#x52A1;&#x8FD8;&#x53EF;&#x80FD;&#x4E89;&#x62A2;&#x540C;&#x4E00;&#x6A21;&#x62DF;&#x5668;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#x9700;&#x8981;&#x63A2;&#x7D22;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x7684; RN Screenshot Perception Layer&#xFF1A;&#x5B83;&#x4E0D;&#x8D1F;&#x8D23;&#x751F;&#x6210;&#x9875;&#x9762;&#xFF0C;&#x4E5F;&#x4E0D;&#x66FF;&#x4EE3; Material &#x548C;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#xFF0C;&#x53EA;&#x8D1F;&#x8D23;&#x628A;&#x8FD0;&#x884C;&#x4E2D;&#x7684; Native App &#x8F6C;&#x6362;&#x4E3A; Agent &#x53EF;&#x4F7F;&#x7528;&#x3001;&#x53EF;&#x9A8C;&#x8BC1;&#x3001;&#x53EF;&#x56DE;&#x653E;&#x7684;&#x4E8B;&#x5B9E;&#x3002;</p>
<pre><code class="language-text">Material / Golden Path
&#x2192; &#x5E2E;&#x52A9; Agent &#x51B3;&#x5B9A;&#x5982;&#x4F55;&#x5B9E;&#x73B0;

RN Screenshot Perception Layer
&#x2192; &#x5E2E;&#x52A9; Agent &#x89C2;&#x5BDF;&#x5B9E;&#x73B0;&#x7ED3;&#x679C;&#x5E76;&#x6536;&#x96C6;&#x8BC1;&#x636E;

Contract / &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
&#x2192; &#x5224;&#x65AD;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x4EA4;&#x4ED8;
</code></pre>
<p><code>agent-device</code> &#x5DF2;&#x63D0;&#x4F9B;&#x79FB;&#x52A8;&#x7AEF;&#x81EA;&#x52A8;&#x5316;&#x3001;Accessibility Snapshot&#x3001;&#x7A33;&#x5B9A;&#x4EA4;&#x4E92;&#x3001;&#x622A;&#x56FE;&#x3001;Diff&#x3001;Replay&#x3001;&#x8BBE;&#x5907;&#x6240;&#x6709;&#x6743;&#x548C; CLI/MCP/Node API&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x8FD9;&#x4E00;&#x5C42;&#x7684;&#x5019;&#x9009;&#x8FD0;&#x884C;&#x5E95;&#x5EA7;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4ECE;&#x96F6;&#x5B9E;&#x73B0;&#x4E00;&#x5957;&#x79FB;&#x52A8;&#x7AEF;&#x81EA;&#x52A8;&#x5316;&#x7CFB;&#x7EDF;&#x3002;</p>
<h2 id="&#x6838;&#x5FC3;&#x5224;&#x65AD;"><a href="#&#x6838;&#x5FC3;&#x5224;&#x65AD;"></a>&#x6838;&#x5FC3;&#x5224;&#x65AD;</h2>
<p>&#x8FD9;&#x4E00;&#x5C42;&#x7684;&#x76EE;&#x6807;&#x4E0D;&#x662F;&#x8BA9; Agent &#x201C;&#x591A;&#x770B;&#x4E00;&#x6B21;&#x622A;&#x56FE;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x628A;&#x9875;&#x9762;&#x5B9E;&#x73B0;&#x540E;&#x7684;&#x53CD;&#x9988;&#x4ECE;&#x4E00;&#x6B21;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x56FE;&#x7247;&#x5347;&#x7EA7;&#x4E3A;&#x591A;&#x79CD;&#x76F8;&#x4E92;&#x8865;&#x5145;&#x7684;&#x8FD0;&#x884C;&#x8BC1;&#x636E;&#xFF1A;</p>
<pre><code class="language-text">&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x4E8B;&#x5B9E;&#xFF1A;&#x5F53;&#x524D;&#x662F;&#x5426;&#x8FDB;&#x5165;&#x4E86;&#x6B63;&#x786E;&#x9875;&#x9762;
&#x7ED3;&#x6784;&#x4E8B;&#x5B9E;&#xFF1A;&#x6587;&#x6848;&#x3001;&#x63A7;&#x4EF6;&#x3001;&#x72B6;&#x6001;&#x548C;&#x53EF;&#x4EA4;&#x4E92;&#x5143;&#x7D20;&#x662F;&#x5426;&#x5B58;&#x5728;
&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;&#xFF1A;&#x771F;&#x5B9E;&#x622A;&#x56FE;&#x4E0E;&#x8BBE;&#x8BA1;&#x53C2;&#x8003;&#x5728;&#x54EA;&#x4E9B;&#x533A;&#x57DF;&#x5B58;&#x5728;&#x5DEE;&#x5F02;
&#x884C;&#x4E3A;&#x4E8B;&#x5B9E;&#xFF1A;&#x5173;&#x952E;&#x64CD;&#x4F5C;&#x540E;&#x662F;&#x5426;&#x5230;&#x8FBE;&#x9884;&#x671F;&#x72B6;&#x6001;
&#x8D28;&#x91CF;&#x4E8B;&#x5B9E;&#xFF1A;&#x672C;&#x6B21;&#x89C2;&#x5BDF;&#x662F;&#x5426;&#x5B8C;&#x6574;&#x3001;&#x7A33;&#x5B9A;&#x3001;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x5224;&#x65AD;
&#x5DE5;&#x7A0B;&#x4E8B;&#x5B9E;&#xFF1A;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x3001;&#x4ED3;&#x5E93; Commit&#x3001;&#x8BBE;&#x5907;&#x548C;&#x4EA7;&#x7269;&#x662F;&#x5426;&#x53EF;&#x8FFD;&#x6EAF;
</code></pre>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x4F9D;&#x8D56;&#x622A;&#x56FE;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x4F9D;&#x8D56;&#x622A;&#x56FE;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x53EA;&#x4F9D;&#x8D56;&#x622A;&#x56FE;</h2>
<p>&#x8BBE;&#x8BA1;&#x622A;&#x56FE;&#x548C; Native &#x8FD0;&#x884C;&#x622A;&#x56FE;&#x662F;&#x89C6;&#x89C9;&#x4E8B;&#x5B9E;&#xFF0C;&#x4F46;&#x53EA;&#x6709;&#x50CF;&#x7D20;&#x4ECD;&#x4E0D;&#x8DB3;&#x4EE5;&#x652F;&#x6491;&#x7A33;&#x5B9A;&#x81EA;&#x52A8;&#x5316;&#x3002;</p>
<p>&#x53EA;&#x770B;&#x622A;&#x56FE;&#x65F6;&#xFF0C;Agent &#x5F88;&#x96BE;&#x53EF;&#x9760;&#x5224;&#x65AD;&#xFF1A;</p>
<ul>
<li>&#x5F53;&#x524D;&#x662F;&#x5426;&#x771F;&#x7684;&#x8FDB;&#x5165;&#x76EE;&#x6807;&#x9875;&#x9762;&#xFF0C;&#x8FD8;&#x662F;&#x505C;&#x5728; Loading&#x3001;&#x767B;&#x5F55;&#x9875;&#x6216;&#x9519;&#x8BEF;&#x9875;&#xFF1B;</li>
<li>&#x67D0;&#x4E2A;&#x89C6;&#x89C9;&#x533A;&#x57DF;&#x662F;&#x6309;&#x94AE;&#x3001;&#x6587;&#x672C;&#x3001;&#x56FE;&#x7247;&#x8FD8;&#x662F;&#x4E0D;&#x53EF;&#x70B9;&#x51FB;&#x5BB9;&#x5668;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x64CD;&#x4F5C;&#x540E;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x76EE;&#x6807;&#x5143;&#x7D20;&#x662F;&#x5426;&#x53EA;&#x662F;&#x79FB;&#x51FA;&#x5C4F;&#x5E55;&#xFF0C;&#x8FD8;&#x662F;&#x6839;&#x672C;&#x6CA1;&#x6709;&#x6E32;&#x67D3;&#xFF1B;</li>
<li>&#x5DEE;&#x5F02;&#x6765;&#x81EA;&#x5E03;&#x5C40;&#x9519;&#x8BEF;&#xFF0C;&#x8FD8;&#x662F;&#x72B6;&#x6001;&#x680F;&#x3001;&#x52A8;&#x6001;&#x5185;&#x5BB9;&#x548C;&#x5B57;&#x4F53;&#x6E32;&#x67D3;&#x566A;&#x58F0;&#xFF1B;</li>
<li>&#x4E00;&#x6B21;&#x70B9;&#x51FB;&#x5931;&#x8D25;&#x662F;&#x9875;&#x9762;&#x6CA1;&#x6709;&#x53D8;&#x5316;&#xFF0C;&#x8FD8;&#x662F;&#x64CD;&#x4F5C;&#x6267;&#x884C;&#x540E;&#x89C2;&#x5BDF;&#x5931;&#x8D25;&#x3002;</li>
</ul>
<p>&#x66F4;&#x5408;&#x7406;&#x7684;&#x89C2;&#x5BDF;&#x6A21;&#x578B;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">Accessibility Snapshot&#xFF1A;&#x9875;&#x9762;&#x8BED;&#x4E49;&#x3001;&#x63A7;&#x4EF6;&#x72B6;&#x6001;&#x3001;&#x5143;&#x7D20;&#x4F4D;&#x7F6E;&#x548C;&#x53EF;&#x4EA4;&#x4E92;&#x6027;
Native Screenshot&#xFF1A;&#x989C;&#x8272;&#x3001;&#x5B57;&#x4F53;&#x3001;&#x56FE;&#x7247;&#x3001;&#x5706;&#x89D2;&#x3001;&#x9634;&#x5F71;&#x548C;&#x6574;&#x4F53;&#x5E03;&#x5C40;
Interaction Outcome&#xFF1A;&#x64CD;&#x4F5C;&#x662F;&#x5426;&#x6267;&#x884C;&#x3001;&#x9875;&#x9762;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x53D8;&#x5316;
Logs / Runtime State&#xFF1A;&#x9875;&#x9762;&#x5F02;&#x5E38;&#x3001;&#x5D29;&#x6E83;&#x3001;&#x7F51;&#x7EDC;&#x548C;&#x6E32;&#x67D3;&#x95EE;&#x9898;
</code></pre>
<p>Accessibility Snapshot &#x4E0D;&#x80FD;&#x9A8C;&#x8BC1;&#x5B8C;&#x6574;&#x89C6;&#x89C9;&#xFF0C;Screenshot &#x4E5F;&#x4E0D;&#x80FD;&#x53EF;&#x9760;&#x8868;&#x8FBE;&#x9875;&#x9762;&#x8BED;&#x4E49;&#x3002;&#x4E24;&#x8005;&#x9700;&#x8981;&#x5171;&#x540C;&#x4F5C;&#x4E3A;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x80FD;&#x4E92;&#x76F8;&#x66FF;&#x4EE3;&#x3002;</p>
<h2 id="&#x5019;&#x9009;&#x5E95;&#x5EA7;&#xFF1A;agent-device"><a href="#&#x5019;&#x9009;&#x5E95;&#x5EA7;&#xFF1A;agent-device"></a>&#x5019;&#x9009;&#x5E95;&#x5EA7;&#xFF1A;agent-device</h2>
<p><code>agent-device</code> &#x7684;&#x4EF7;&#x503C;&#x4E0D;&#x5728;&#x4E8E;&#x5B83;&#x652F;&#x6301;&#x591A;&#x5C11;&#x5E73;&#x53F0;&#xFF0C;&#x800C;&#x5728;&#x4E8E;&#x5B83;&#x5DF2;&#x7ECF;&#x5EFA;&#x7ACB;&#x4E86;&#x4E00;&#x5957;&#x9002;&#x5408; Coding Agent &#x7684;&#x79FB;&#x52A8;&#x7AEF; <code>inspect &#x2192; act &#x2192; settle &#x2192; verify</code> &#x6A21;&#x578B;&#x3002;</p>
<p>&#x4E00;&#x6B21;&#x5178;&#x578B;&#x64CD;&#x4F5C;&#x662F;&#xFF1A;</p>
<pre><code class="language-bash">agent-device open &lt;app&gt; --platform ios
agent-device snapshot -i
agent-device press @e2 --settle
agent-device <span class="hljs-built_in">wait</span> text <span class="hljs-string">&quot;&#x76EE;&#x6807;&#x9875;&#x9762;&#x6587;&#x6848;&quot;</span>
agent-device screenshot ./actual.png
agent-device close
</code></pre>
<p>&#x5B83;&#x80FD;&#x591F;&#x4E3A;&#x5F53;&#x524D;&#x65B9;&#x6848;&#x63D0;&#x4F9B;&#x56DB;&#x7C7B;&#x6700;&#x5C0F;&#x80FD;&#x529B;&#x3002;</p>
<h3 id="&#x7ED3;&#x6784;&#x5316;&#x9875;&#x9762;&#x89C2;&#x5BDF;"><a href="#&#x7ED3;&#x6784;&#x5316;&#x9875;&#x9762;&#x89C2;&#x5BDF;"></a>&#x7ED3;&#x6784;&#x5316;&#x9875;&#x9762;&#x89C2;&#x5BDF;</h3>
<p><code>snapshot -i</code> &#x4ECE; Accessibility Tree &#x4E2D;&#x8FD4;&#x56DE;&#x7CBE;&#x7B80;&#x7684;&#x4EA4;&#x4E92;&#x8282;&#x70B9;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">@e2 [button] &quot;&#x767B;&#x5F55;&quot;
@e3 [text-field] &quot;&#x624B;&#x673A;&#x53F7;&quot;
@e4 [button] &quot;&#x83B7;&#x53D6;&#x9A8C;&#x8BC1;&#x7801;&quot;
</code></pre>
<p>&#x8282;&#x70B9;&#x5305;&#x542B; role&#x3001;label&#x3001;value&#x3001;identifier&#x3001;rect&#x3001;enabled&#x3001;selected&#x3001;focused&#x3001;visible &#x548C; hittable &#x7B49;&#x4E8B;&#x5B9E;&#x3002;Agent &#x53EF;&#x4EE5;&#x5148;&#x786E;&#x8BA4;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x548C;&#x7ED3;&#x6784;&#xFF0C;&#x518D;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x9700;&#x8981;&#x8BFB;&#x53D6;&#x622A;&#x56FE;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x4F1A;&#x53CD;&#x5411;&#x63A8;&#x52A8; RN Material &#x548C;&#x9875;&#x9762;&#x5B9E;&#x73B0;&#x6539;&#x5584; Accessibility Label&#x3001;Role &#x548C; Test ID&#x3002;&#x53EF;&#x8BBF;&#x95EE;&#x6027;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x6D4B;&#x8BD5;&#x9644;&#x52A0;&#x9879;&#xFF0C;&#x4E5F;&#x6210;&#x4E3A; Agent &#x7406;&#x89E3;&#x771F;&#x5B9E;&#x9875;&#x9762;&#x7684;&#x673A;&#x5668;&#x63A5;&#x53E3;&#x3002;</p>
<h3 id="&#x57FA;&#x4E8E;&#x6700;&#x65B0;&#x89C2;&#x5BDF;&#x7684;&#x5B89;&#x5168;&#x4EA4;&#x4E92;"><a href="#&#x57FA;&#x4E8E;&#x6700;&#x65B0;&#x89C2;&#x5BDF;&#x7684;&#x5B89;&#x5168;&#x4EA4;&#x4E92;"></a>&#x57FA;&#x4E8E;&#x6700;&#x65B0;&#x89C2;&#x5BDF;&#x7684;&#x5B89;&#x5168;&#x4EA4;&#x4E92;</h3>
<p><code>@ref</code> &#x662F;&#x5F53;&#x524D; Snapshot &#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4E34;&#x65F6;&#x5F15;&#x7528;&#xFF0C;&#x4E0D;&#x662F;&#x8DE8;&#x9875;&#x9762;&#x6C38;&#x4E45;&#x6709;&#x6548;&#x7684; ID&#x3002;&#x9875;&#x9762;&#x53D1;&#x751F;&#x526F;&#x4F5C;&#x7528;&#x540E;&#xFF0C;&#x65E7;&#x5F15;&#x7528;&#x9700;&#x8981;&#x5931;&#x6548;&#xFF1B;&#x5E26; generation &#x7684;&#x5F15;&#x7528;&#x4F8B;&#x5982; <code>@e12~s42</code> &#x53EF;&#x4EE5;&#x660E;&#x786E;&#x5B83;&#x6765;&#x81EA;&#x54EA;&#x4E00;&#x4EE3;&#x89C2;&#x5BDF;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x673A;&#x5236;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x4E0B;&#x9762;&#x7684;&#x8BEF;&#x64CD;&#x4F5C;&#xFF1A;</p>
<pre><code class="language-text">&#x8BFB;&#x53D6;&#x9875;&#x9762; A&#xFF0C;&#x5F97;&#x5230; @e2
&#x70B9;&#x51FB;&#x540E;&#x8FDB;&#x5165;&#x9875;&#x9762; B
&#x7EE7;&#x7EED;&#x7528;&#x65E7; @e2
&#x8BEF;&#x70B9;&#x9875;&#x9762; B &#x4E0A;&#x540C;&#x4F4D;&#x7F6E;&#x7684;&#x53E6;&#x4E00;&#x4E2A;&#x5143;&#x7D20;
</code></pre>
<p>&#x6211;&#x4EEC;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x5B9E;&#x73B0; Ref Frame&#xFF0C;&#x4F46;&#x5728; Perception Tool &#x7684;&#x534F;&#x8BAE;&#x91CC;&#x5E94;&#x4FDD;&#x7559;&#x76F8;&#x540C;&#x539F;&#x5219;&#xFF1A;&#x4E00;&#x6B21;&#x4EA4;&#x4E92;&#x53EA;&#x80FD;&#x6D88;&#x8D39;&#x5F53;&#x524D;&#x89C2;&#x5BDF;&#x53D1;&#x5E03;&#x7684;&#x5F15;&#x7528;&#xFF0C;&#x53D1;&#x751F;&#x9875;&#x9762;&#x53D8;&#x66F4;&#x540E;&#x5FC5;&#x987B;&#x57FA;&#x4E8E;&#x65B0;&#x7684; Observation &#x7EE7;&#x7EED;&#x6267;&#x884C;&#x3002;</p>
<h3 id="&#x64CD;&#x4F5C;&#x540E;&#x7B49;&#x5F85;&#x7A33;&#x5B9A;&#x5E76;&#x8FD4;&#x56DE;&#x589E;&#x91CF;"><a href="#&#x64CD;&#x4F5C;&#x540E;&#x7B49;&#x5F85;&#x7A33;&#x5B9A;&#x5E76;&#x8FD4;&#x56DE;&#x589E;&#x91CF;"></a>&#x64CD;&#x4F5C;&#x540E;&#x7B49;&#x5F85;&#x7A33;&#x5B9A;&#x5E76;&#x8FD4;&#x56DE;&#x589E;&#x91CF;</h3>
<p><code>--settle</code> &#x628A;&#x201C;&#x64CD;&#x4F5C;&#x540E;&#x7B49;&#x5F85; UI &#x5B89;&#x9759;&#x5E76;&#x6BD4;&#x8F83;&#x524D;&#x540E;&#x72B6;&#x6001;&#x201D;&#x4F5C;&#x4E3A;&#x4E00;&#x7B49;&#x80FD;&#x529B;&#x3002;&#x5B83;&#x6BD4;&#x56FA;&#x5B9A; <code>sleep</code> &#x66F4;&#x9002;&#x5408; RN &#x9875;&#x9762;&#xFF1A;&#x52A8;&#x753B;&#x3001;&#x8BF7;&#x6C42;&#x3001;&#x952E;&#x76D8;&#x3001;&#x5217;&#x8868;&#x5E03;&#x5C40;&#x548C;&#x56FE;&#x7247;&#x52A0;&#x8F7D;&#x7684;&#x5B8C;&#x6210;&#x65F6;&#x95F4;&#x5E76;&#x4E0D;&#x56FA;&#x5B9A;&#x3002;</p>
<p>&#x8FD4;&#x56DE;&#x589E;&#x91CF;&#x4E5F;&#x6BD4;&#x6BCF;&#x4E00;&#x6B65;&#x91CD;&#x65B0;&#x53D1;&#x9001;&#x5B8C;&#x6574; UI Tree &#x66F4;&#x8282;&#x7701; Token&#xFF1A;</p>
<pre><code class="language-text">- @e2 [button] &quot;&#x63D0;&#x4EA4;&quot;
+ @e8 [text] &quot;&#x63D0;&#x4EA4;&#x6210;&#x529F;&quot;
</code></pre>
<p>Perception Layer &#x5E94;&#x4F18;&#x5148;&#x8FD4;&#x56DE;&#x53D8;&#x5316;&#x548C;&#x5173;&#x952E;&#x72B6;&#x6001;&#xFF0C;&#x5B8C;&#x6574; Snapshot &#x53EA;&#x5728;&#x521D;&#x59CB;&#x5316;&#x3001;&#x6062;&#x590D;&#x6216;&#x5DEE;&#x5F02;&#x4FE1;&#x606F;&#x4E0D;&#x8DB3;&#x65F6;&#x83B7;&#x53D6;&#x3002;</p>
<h3 id="&#x622A;&#x56FE;&#x4E0E;&#x5DEE;&#x5F02;&#x533A;&#x57DF;"><a href="#&#x622A;&#x56FE;&#x4E0E;&#x5DEE;&#x5F02;&#x533A;&#x57DF;"></a>&#x622A;&#x56FE;&#x4E0E;&#x5DEE;&#x5F02;&#x533A;&#x57DF;</h3>
<p><code>agent-device</code> &#x5DF2;&#x63D0;&#x4F9B; Native Screenshot &#x548C;&#x50CF;&#x7D20;&#x7EA7; Screenshot Diff&#x3002;Diff &#x4E0D;&#x53EA;&#x8FD4;&#x56DE;&#x4E0D;&#x540C;&#x50CF;&#x7D20;&#x6BD4;&#x4F8B;&#xFF0C;&#x8FD8;&#x4F1A;&#x805A;&#x5408;&#x5DEE;&#x5F02;&#x533A;&#x57DF;&#x5E76;&#x8F93;&#x51FA;&#x6807;&#x6CE8;&#x56FE;&#x3002;</p>
<p>&#x8FD9;&#x4F7F; Agent &#x53EF;&#x4EE5;&#x4ECE;&#x201C;&#x6574;&#x4F53;&#x770B;&#x8D77;&#x6765;&#x4E0D;&#x50CF;&#x201D;&#x8FDB;&#x4E00;&#x6B65;&#x5B9A;&#x4F4D;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">&#x9876;&#x90E8;&#x6807;&#x9898;&#x533A;&#x57DF;&#x4F4D;&#x7F6E;&#x504F;&#x79FB;
&#x5217;&#x8868;&#x95F4;&#x8DDD;&#x6301;&#x7EED;&#x504F;&#x5927;
&#x5E95;&#x90E8;&#x6309;&#x94AE;&#x5BBD;&#x5EA6;&#x4E0D;&#x4E00;&#x81F4;
&#x67D0;&#x4E00;&#x56FE;&#x7247;&#x533A;&#x57DF;&#x5185;&#x5BB9;&#x5B8C;&#x5168;&#x4E0D;&#x540C;
</code></pre>
<p>&#x4E0D;&#x8FC7;&#x50CF;&#x7D20; Diff &#x53EA;&#x80FD;&#x4F5C;&#x4E3A;&#x5DEE;&#x5F02;&#x4FE1;&#x53F7;&#xFF0C;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x4F5C;&#x4E3A;&#x6700;&#x7EC8;&#x8BBE;&#x8BA1;&#x8BC4;&#x5206;&#x3002;&#x8DE8;&#x5E73;&#x53F0;&#x5B57;&#x4F53;&#x3001;&#x72B6;&#x6001;&#x680F;&#x3001;&#x52A8;&#x6001;&#x5185;&#x5BB9;&#x3001;&#x9634;&#x5F71;&#x6297;&#x952F;&#x9F7F;&#x548C;&#x56FE;&#x7247;&#x52A0;&#x8F7D;&#x90FD;&#x4F1A;&#x5236;&#x9020;&#x566A;&#x58F0;&#x3002;</p>
<h2 id="&#x5728;&#x73B0;&#x6709;&#x67B6;&#x6784;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;"><a href="#&#x5728;&#x73B0;&#x6709;&#x67B6;&#x6784;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;"></a>&#x5728;&#x73B0;&#x6709;&#x67B6;&#x6784;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;</h2>
<p>Perception Layer &#x4E0D;&#x8FDB;&#x5165;&#x9875;&#x9762;&#x751F;&#x6210;&#x6838;&#x5FC3;&#xFF0C;&#x4E5F;&#x4E0D;&#x590D;&#x5236; <code>agent-device</code> &#x7684;&#x591A;&#x5E73;&#x53F0; Runtime&#x3002;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x5728; <code>coding_agent/rn_page</code> &#x4E2D;&#x589E;&#x52A0;&#x8584; Adapter&#xFF0C;&#x5BF9;&#x5916;&#x4FDD;&#x6301; RN &#x9875;&#x9762;&#x9886;&#x57DF;&#x8BED;&#x4E49;&#xFF1A;</p>
<pre><code class="language-text">workbench/services/coding_agent
&#x251C;&#x2500;&#x2500; core
&#x2502;   &#x2514;&#x2500;&#x2500; Decision Event / Execution Report / Run Store
&#x251C;&#x2500;&#x2500; rn_page
&#x2502;   &#x251C;&#x2500;&#x2500; Material Query
&#x2502;   &#x251C;&#x2500;&#x2500; Visual Inspect
&#x2502;   &#x2514;&#x2500;&#x2500; Perception Adapter
&#x2502;       &#x2514;&#x2500;&#x2500; agent-device CLI&#xFF0C;&#x540E;&#x7EED;&#x6309;&#x9700;&#x8FC1;&#x79FB; Node API
&#x2514;&#x2500;&#x2500; mcp
    &#x2514;&#x2500;&#x2500; RN Page Profile

&#x76EE;&#x6807; RN &#x4ED3;&#x5E93;
&#x251C;&#x2500;&#x2500; src/material-lab
&#x2502;   &#x251C;&#x2500;&#x2500; Catalog
&#x2502;   &#x2514;&#x2500;&#x2500; Fixture / Candidate Board
&#x2514;&#x2500;&#x2500; .agent-device &#x6216;&#x6D4B;&#x8BD5;&#x5165;&#x53E3;&#x914D;&#x7F6E;
</code></pre>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4F18;&#x5148;&#x901A;&#x8FC7; CLI &#x9A8C;&#x8BC1;&#x80FD;&#x529B;&#x548C;&#x6D41;&#x7A0B;&#x3002;&#x53EA;&#x6709;&#x7A33;&#x5B9A; Case &#x8BC1;&#x660E;&#x9700;&#x8981;&#x66F4;&#x5F3A;&#x7684;&#x7ED3;&#x6784;&#x5316;&#x8FD4;&#x56DE;&#x3001;&#x8D85;&#x65F6;&#x63A7;&#x5236;&#x548C; Session &#x590D;&#x7528;&#x65F6;&#xFF0C;&#x518D;&#x4F7F;&#x7528; Typed Node API&#xFF1B;MCP &#x53EA;&#x662F;&#x66B4;&#x9732;&#x65B9;&#x5F0F;&#xFF0C;&#x4E0D;&#x5E94;&#x6210;&#x4E3A;&#x8FD0;&#x884C;&#x903B;&#x8F91;&#x7684;&#x65B0;&#x5B9E;&#x73B0;&#x3002;</p>
<h2 id="Perception Tool &#x7684;&#x6700;&#x5C0F;&#x534F;&#x8BAE;"><a href="#Perception Tool &#x7684;&#x6700;&#x5C0F;&#x534F;&#x8BAE;"></a>Perception Tool &#x7684;&#x6700;&#x5C0F;&#x534F;&#x8BAE;</h2>
<p>&#x73B0;&#x6709; <code>screenshot_preview</code> &#x66F4;&#x9002;&#x5408;&#x6F14;&#x8FDB;&#x4E3A;&#x8BED;&#x4E49;&#x66F4;&#x5B8C;&#x6574;&#x7684; <code>capture_mobile_app_state</code>&#x3002;&#x7B2C;&#x4E00;&#x7248;&#x4E0D;&#x8FFD;&#x6C42;&#x8986;&#x76D6;&#x6240;&#x6709; <code>agent-device</code> &#x547D;&#x4EE4;&#xFF0C;&#x53EA;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x7EA7;&#x590D;&#x5408;&#x64CD;&#x4F5C;&#x3002;</p>
<p>&#x5EFA;&#x8BAE;&#x8F93;&#x5165;&#xFF1A;</p>
<pre><code class="language-yaml"><span class="hljs-attr">taskId:</span> <span class="hljs-string">&#x672C;&#x6B21;&#x552F;&#x4E00;&#x6267;&#x884C;</span> <span class="hljs-string">ID</span>
<span class="hljs-attr">repositoryRoot:</span> <span class="hljs-string">RN</span> <span class="hljs-string">&#x4ED3;&#x5E93;</span>
<span class="hljs-attr">platform:</span> <span class="hljs-string">ios</span> <span class="hljs-string">|</span> <span class="hljs-string">android</span>
<span class="hljs-attr">app:</span> <span class="hljs-string">Bundle</span> <span class="hljs-string">ID&#x3001;Package</span> <span class="hljs-string">Name</span> <span class="hljs-string">&#x6216;&#x53EF;&#x89E3;&#x6790;</span> <span class="hljs-string">App</span>
<span class="hljs-attr">entry:</span>
  <span class="hljs-attr">deepLink:</span> <span class="hljs-string">&#x53EF;&#x9009;&#xFF0C;&#x76EE;&#x6807;&#x9875;&#x9762;&#x786E;&#x5B9A;&#x6027;&#x5165;&#x53E3;</span>
  <span class="hljs-attr">fixtureId:</span> <span class="hljs-string">&#x53EF;&#x9009;&#xFF0C;Material</span> <span class="hljs-string">Lab</span> <span class="hljs-string">Fixture</span>
<span class="hljs-attr">waitFor:</span>
  <span class="hljs-attr">text:</span> <span class="hljs-string">&#x53EF;&#x9009;&#xFF0C;&#x76EE;&#x6807;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x6587;&#x6848;</span>
  <span class="hljs-attr">selector:</span> <span class="hljs-string">&#x53EF;&#x9009;&#xFF0C;&#x7A33;&#x5B9A;&#x5143;&#x7D20;</span>
<span class="hljs-attr">referenceImage:</span> <span class="hljs-string">&#x53EF;&#x9009;&#xFF0C;&#x8BBE;&#x8BA1;&#x53C2;&#x8003;&#x56FE;</span>
<span class="hljs-attr">capture:</span>
  <span class="hljs-attr">accessibility:</span> <span class="hljs-literal">true</span>
  <span class="hljs-attr">screenshot:</span> <span class="hljs-literal">true</span>
  <span class="hljs-attr">diff:</span> <span class="hljs-literal">true</span>
</code></pre>
<p>&#x5EFA;&#x8BAE;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code class="language-yaml"><span class="hljs-attr">status:</span> <span class="hljs-string">completed</span> <span class="hljs-string">|</span> <span class="hljs-string">partial</span> <span class="hljs-string">|</span> <span class="hljs-string">blocked</span>
<span class="hljs-attr">screenReached:</span> <span class="hljs-literal">true</span> <span class="hljs-string">|</span> <span class="hljs-literal">false</span>
<span class="hljs-attr">observationQuality:</span>
  <span class="hljs-attr">state:</span> <span class="hljs-string">healthy</span> <span class="hljs-string">|</span> <span class="hljs-string">recovered</span> <span class="hljs-string">|</span> <span class="hljs-string">sparse</span> <span class="hljs-string">|</span> <span class="hljs-string">invalid</span>
  <span class="hljs-attr">reason:</span> <span class="hljs-string">&#x53EF;&#x9009;&#x7684;&#x7ED3;&#x6784;&#x5316;&#x539F;&#x56E0;</span>
<span class="hljs-attr">snapshot:</span>
  <span class="hljs-attr">generation:</span> <span class="hljs-number">42</span>
  <span class="hljs-attr">interactiveNodes:</span> <span class="hljs-string">&#x7CBE;&#x7B80;&#x8282;&#x70B9;</span>
<span class="hljs-attr">screenshot:</span>
  <span class="hljs-attr">path:</span> <span class="hljs-string">actual.png</span>
  <span class="hljs-attr">width:</span> <span class="hljs-number">1179</span>
  <span class="hljs-attr">height:</span> <span class="hljs-number">2556</span>
<span class="hljs-attr">diff:</span>
  <span class="hljs-attr">path:</span> <span class="hljs-string">diff.png</span>
  <span class="hljs-attr">mismatchPercentage:</span> <span class="hljs-number">8.42</span>
  <span class="hljs-attr">regions:</span> <span class="hljs-string">&#x5DEE;&#x5F02;&#x533A;&#x57DF;&#x6458;&#x8981;</span>
<span class="hljs-attr">artifacts:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">app.log</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">actual.png</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">diff.png</span>
<span class="hljs-attr">unresolved:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">&#x52A8;&#x6001;&#x5934;&#x50CF;&#x533A;&#x57DF;&#x672A;&#x5C4F;&#x853D;</span>
</code></pre>
<p>Tool &#x9700;&#x8981;&#x8FD4;&#x56DE;&#x7ED3;&#x6784;&#x5316;&#x7ED3;&#x679C;&#x548C;&#x4EA7;&#x7269;&#x8DEF;&#x5F84;&#xFF0C;&#x4E0D;&#x628A;&#x5168;&#x91CF;&#x65E5;&#x5FD7;&#x3001;&#x5B8C;&#x6574;&#x7EC4;&#x4EF6;&#x6811;&#x548C;&#x56FE;&#x7247; Base64 &#x5168;&#x90E8;&#x585E;&#x5165;&#x6A21;&#x578B;&#x4E0A;&#x4E0B;&#x6587;&#x3002;Agent &#x5148;&#x8BFB;&#x53D6;&#x6458;&#x8981;&#xFF0C;&#x53EA;&#x6709;&#x9700;&#x8981;&#x8BCA;&#x65AD;&#x65F6;&#x518D;&#x6309;&#x8DEF;&#x5F84;&#x67E5;&#x770B;&#x8BE6;&#x7EC6; Artifact&#x3002;</p>
<h2 id="&#x89C2;&#x5BDF;&#x8D28;&#x91CF;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x7B49;&#x6570;&#x636E;"><a href="#&#x89C2;&#x5BDF;&#x8D28;&#x91CF;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x7B49;&#x6570;&#x636E;"></a>&#x89C2;&#x5BDF;&#x8D28;&#x91CF;&#x5FC5;&#x987B;&#x662F;&#x4E00;&#x7B49;&#x6570;&#x636E;</h2>
<p>&#x201C;&#x6CA1;&#x6709;&#x6355;&#x83B7;&#x5230;&#x8282;&#x70B9;&#x201D;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x89E3;&#x91CA;&#x4E3A;&#x201C;&#x9875;&#x9762;&#x6CA1;&#x6709;&#x8282;&#x70B9;&#x201D;&#x3002;Perception Layer &#x81F3;&#x5C11;&#x9700;&#x8981;&#x533A;&#x5206;&#xFF1A;</p>
<pre><code class="language-text">healthy&#xFF1A;&#x89C2;&#x5BDF;&#x5B8C;&#x6574;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5224;&#x65AD;&#x4F9D;&#x636E;
recovered&#xFF1A;&#x4E3B;&#x8DEF;&#x5F84;&#x5931;&#x8D25;&#x4F46;&#x56DE;&#x9000;&#x6210;&#x529F;&#xFF0C;&#x9700;&#x8981;&#x4FDD;&#x7559;&#x539F;&#x56E0;
sparse&#xFF1A;&#x53EA;&#x5F97;&#x5230;&#x5C11;&#x91CF;&#x7ED3;&#x6784;&#xFF0C;&#x4E0D;&#x80FD;&#x636E;&#x6B64;&#x65AD;&#x8A00;&#x5143;&#x7D20;&#x4E0D;&#x5B58;&#x5728;
invalid&#xFF1A;&#x9519;&#x8BEF;&#x9875;&#x9762;&#x3001;&#x52A8;&#x753B;&#x672A;&#x7ED3;&#x675F;&#x3001;&#x622A;&#x56FE;&#x5C3A;&#x5BF8;&#x9519;&#x8BEF;&#x7B49;&#xFF0C;&#x4E0D;&#x80FD;&#x53C2;&#x4E0E;&#x8BC4;&#x5206;
</code></pre>
<p>&#x5178;&#x578B; invalid &#x539F;&#x56E0;&#x5305;&#x62EC;&#xFF1A;</p>
<ul>
<li>&#x6CA1;&#x6709;&#x8FDB;&#x5165;&#x76EE;&#x6807;&#x9875;&#x9762;&#xFF1B;</li>
<li>Metro &#x6216; App &#x672A;&#x5C31;&#x7EEA;&#xFF1B;</li>
<li>&#x622A;&#x56FE;&#x5C3A;&#x5BF8;&#x4E0E; Baseline &#x4E0D;&#x4E00;&#x81F4;&#xFF1B;</li>
<li>&#x7CFB;&#x7EDF;&#x5F39;&#x7A97;&#x3001;&#x952E;&#x76D8;&#x6216;&#x8C03;&#x8BD5;&#x83DC;&#x5355;&#x906E;&#x6321;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x4ECD;&#x5904;&#x4E8E;&#x52A8;&#x753B;&#x6216; Loading&#xFF1B;</li>
<li>Fixture &#x6570;&#x636E;&#x4E0D;&#x786E;&#x5B9A;&#xFF1B;</li>
<li>&#x5B57;&#x4F53;&#x6216;&#x56FE;&#x7247;&#x8D44;&#x6E90;&#x6CA1;&#x6709;&#x52A0;&#x8F7D;&#x6210;&#x529F;&#x3002;</li>
</ul>
<p>&#x53EA;&#x6709;&#x8D28;&#x91CF;&#x5408;&#x683C;&#x7684;&#x89C2;&#x5BDF;&#x624D;&#x80FD;&#x8FDB;&#x5165;&#x89C6;&#x89C9;&#x8BC4;&#x5206;&#x548C; Case &#x5BF9;&#x6BD4;&#x3002;&#x5426;&#x5219;&#x5E94;&#x5148;&#x4FEE;&#x590D;&#x73AF;&#x5883;&#x6216;&#x9875;&#x9762;&#x5165;&#x53E3;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BA9; Agent&#x6839;&#x636E;&#x65E0;&#x6548;&#x8BC1;&#x636E;&#x4FEE;&#x6539;&#x4EE3;&#x7801;&#x3002;</p>
<h2 id="&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x7684;&#x5206;&#x5C42;&#x7B56;&#x7565;"><a href="#&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x7684;&#x5206;&#x5C42;&#x7B56;&#x7565;"></a>&#x89C6;&#x89C9;&#x6BD4;&#x8F83;&#x7684;&#x5206;&#x5C42;&#x7B56;&#x7565;</h2>
<p>&#x7B2C;&#x4E00;&#x7248;&#x4E0D;&#x5EFA;&#x8BBE;&#x590D;&#x6742;&#x89C6;&#x89C9;&#x6A21;&#x578B;&#xFF0C;&#x5148;&#x5C06;&#x6BD4;&#x8F83;&#x62C6;&#x6210;&#x4E09;&#x5C42;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x4E0E;&#x7ED3;&#x6784; Contract"><a href="#&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x4E0E;&#x7ED3;&#x6784; Contract"></a>&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x4E0E;&#x7ED3;&#x6784; Contract</h3>
<p>&#x901A;&#x8FC7; Accessibility Snapshot &#x548C;&#x660E;&#x786E;&#x65AD;&#x8A00;&#x786E;&#x8BA4;&#xFF1A;</p>
<ul>
<li>&#x5DF2;&#x8FDB;&#x5165;&#x76EE;&#x6807;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x5FC5;&#x8981;&#x6587;&#x6848;&#x5B58;&#x5728;&#xFF1B;</li>
<li>&#x6838;&#x5FC3;&#x64CD;&#x4F5C;&#x53EF;&#x7528;&#xFF1B;</li>
<li>Loading&#x3001;Empty&#x3001;Error &#x548C;&#x6B63;&#x5E38;&#x72B6;&#x6001;&#x7B26;&#x5408; Case &#x8981;&#x6C42;&#xFF1B;</li>
<li>&#x9875;&#x9762;&#x6CA1;&#x6709;&#x88AB;&#x7CFB;&#x7EDF;&#x5F39;&#x7A97;&#x6216;&#x8C03;&#x8BD5;&#x754C;&#x9762;&#x906E;&#x6321;&#x3002;</li>
</ul>
<p>&#x8EAB;&#x4EFD; Contract &#x4E0D;&#x901A;&#x8FC7;&#x65F6;&#xFF0C;&#x4E0D;&#x6267;&#x884C;&#x89C6;&#x89C9;&#x8BC4;&#x5206;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;&#x622A;&#x56FE;&#x5F52;&#x4E00;&#x5316;"><a href="#&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;&#x622A;&#x56FE;&#x5F52;&#x4E00;&#x5316;"></a>&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;&#x622A;&#x56FE;&#x5F52;&#x4E00;&#x5316;</h3>
<p>&#x5728;&#x6BD4;&#x8F83;&#x524D;&#x56FA;&#x5B9A;&#xFF1A;</p>
<ul>
<li>&#x8BBE;&#x5907;&#x578B;&#x53F7;&#x3001;&#x7CFB;&#x7EDF;&#x7248;&#x672C;&#x3001;&#x5C4F;&#x5E55;&#x5C3A;&#x5BF8;&#x4E0E; DPR&#xFF1B;</li>
<li>Light/Dark Theme&#xFF1B;</li>
<li>Locale&#x3001;&#x65F6;&#x533A;&#x548C;&#x5B57;&#x4F53;&#x7F29;&#x653E;&#xFF1B;</li>
<li>Fixture &#x6570;&#x636E;&#x548C;&#x7F51;&#x7EDC;&#x54CD;&#x5E94;&#xFF1B;</li>
<li>&#x72B6;&#x6001;&#x680F;&#x7B56;&#x7565;&#xFF1B;</li>
<li>&#x52A8;&#x753B;&#x5173;&#x95ED;&#x6216;&#x7A33;&#x5B9A;&#x6761;&#x4EF6;&#xFF1B;</li>
<li>&#x56FE;&#x7247;&#x8D44;&#x6E90;&#x548C;&#x5B57;&#x4F53;&#x52A0;&#x8F7D;&#x72B6;&#x6001;&#x3002;</li>
</ul>
<p>&#x52A8;&#x6001;&#x533A;&#x57DF;&#x901A;&#x8FC7;&#x663E;&#x5F0F; Mask &#x6392;&#x9664;&#xFF0C;&#x4E0D;&#x80FD;&#x901A;&#x8FC7;&#x4E0D;&#x65AD;&#x8C03;&#x5927;&#x6574;&#x4F53;&#x9608;&#x503C;&#x63A9;&#x76D6;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;&#x50CF;&#x7D20;&#x4E0E; Region Diff"><a href="#&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;&#x50CF;&#x7D20;&#x4E0E; Region Diff"></a>&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;&#x50CF;&#x7D20;&#x4E0E; Region Diff</h3>
<p>&#x8F93;&#x51FA;&#x5168;&#x5C40;&#x5DEE;&#x5F02;&#x6BD4;&#x4F8B;&#x3001;&#x5DEE;&#x5F02;&#x533A;&#x57DF;&#x548C;&#x6807;&#x6CE8;&#x56FE;&#xFF0C;&#x7528;&#x4E8E;&#x5B9A;&#x4F4D;&#x95EE;&#x9898;&#x3002;&#x540E;&#x7EED;&#x53EA;&#x6709;&#x771F;&#x5B9E; Case &#x8BC1;&#x660E;&#x50CF;&#x7D20; Diff &#x4E0D;&#x8DB3;&#x65F6;&#xFF0C;&#x624D;&#x8BC4;&#x4F30;&#x589E;&#x52A0;&#xFF1A;</p>
<ul>
<li>&#x7ED3;&#x6784;&#x611F;&#x77E5;&#x7684;&#x51E0;&#x4F55;&#x6BD4;&#x8F83;&#xFF1B;</li>
<li>OCR &#x6587;&#x672C;&#x57FA;&#x7EBF;&#x548C;&#x5B57;&#x4F53;&#x5EA6;&#x91CF;&#xFF1B;</li>
<li>&#x611F;&#x77E5;&#x76F8;&#x4F3C;&#x5EA6;&#xFF1B;</li>
<li>Screenshot Region &#x4E0E; RN Component Tree &#x7684;&#x6620;&#x5C04;&#x3002;</li>
</ul>
<p>&#x4E0D;&#x5728;&#x7B2C;&#x4E00;&#x7248;&#x540C;&#x65F6;&#x5F15;&#x5165;&#x6240;&#x6709;&#x8BC4;&#x5206;&#x7B97;&#x6CD5;&#x3002;</p>
<h2 id="&#x4E0E; Material-first &#x7684;&#x53CC;&#x5411;&#x5173;&#x7CFB;"><a href="#&#x4E0E; Material-first &#x7684;&#x53CC;&#x5411;&#x5173;&#x7CFB;"></a>&#x4E0E; Material-first &#x7684;&#x53CC;&#x5411;&#x5173;&#x7CFB;</h2>
<p>Perception Layer &#x4E0D;&#x53EA;&#x662F;&#x9A8C;&#x8BC1;&#x6700;&#x7EC8;&#x9875;&#x9762;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x63D0;&#x9AD8; Material Catalog &#x7684;&#x4E8B;&#x5B9E;&#x8D28;&#x91CF;&#x3002;</p>
<pre><code class="language-text">Material Fixture
&#x2192; Native &#x6E32;&#x67D3;
&#x2192; Accessibility Snapshot + Screenshot
&#x2192; &#x4EBA;&#x5DE5;&#x786E;&#x8BA4;
&#x2192; Catalog &#x83B7;&#x5F97;&#x53EF;&#x8FD0;&#x884C;&#x8BC1;&#x636E;
</code></pre>
<p>Material &#x53EF;&#x4EE5;&#x9010;&#x6B65;&#x8865;&#x5145;&#xFF1A;</p>
<ul>
<li>&#x771F;&#x5B9E; Fixture &#x622A;&#x56FE;&#xFF1B;</li>
<li>Accessibility Role&#x3001;Label &#x548C; Test ID&#xFF1B;</li>
<li>&#x652F;&#x6301;&#x72B6;&#x6001;&#x4E0E; Variant&#xFF1B;</li>
<li>&#x63A8;&#x8350;&#x7684;&#x7A33;&#x5B9A;&#x9009;&#x62E9;&#x5668;&#xFF1B;</li>
<li>&#x89C6;&#x89C9;&#x5C3A;&#x5BF8;&#x548C;&#x5185;&#x5BB9;&#x5BB9;&#x91CF;&#xFF1B;</li>
<li>&#x5BF9;&#x5E94; Contract&#x3002;</li>
</ul>
<p>&#x9875;&#x9762;&#x8FD8;&#x539F;&#x65F6;&#xFF0C;Agent &#x4E0D;&#x53EA;&#x77E5;&#x9053;&#x7EC4;&#x4EF6;&#x7684;&#x5BFC;&#x5165;&#x8DEF;&#x5F84;&#x548C; Props&#xFF0C;&#x8FD8;&#x80FD;&#x770B;&#x5230;&#x5B83;&#x5728;&#x771F;&#x5B9E; Native &#x73AF;&#x5883;&#x4E2D;&#x7684;&#x8868;&#x73B0;&#x3002;&#x9875;&#x9762;&#x4EA4;&#x4ED8;&#x4EA7;&#x751F;&#x7684;&#x65B0; Case&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x53CD;&#x5411;&#x66B4;&#x9732; Material &#x7684;&#x7F3A;&#x53E3;&#xFF1A;&#x627E;&#x4E0D;&#x5230;&#x7EC4;&#x4EF6;&#x3001;Props &#x63CF;&#x8FF0;&#x4E0D;&#x8DB3;&#x3001;Fixture &#x4E0D;&#x8986;&#x76D6;&#x771F;&#x5B9E;&#x72B6;&#x6001;&#xFF0C;&#x6216;&#x8005;&#x7EC4;&#x4EF6;&#x672C;&#x8EAB;&#x7F3A;&#x5C11;&#x53EF;&#x8BBF;&#x95EE;&#x6027;&#x4FE1;&#x606F;&#x3002;</p>
<p>&#x8FD9;&#x6761;&#x53CD;&#x9988;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x81EA;&#x52A8;&#x4FEE;&#x6539;&#x516C;&#x5171; Catalog&#x3002;&#x4E00;&#x6B21;&#x9875;&#x9762;&#x4E2D;&#x7684;&#x7279;&#x6B8A;&#x7ED3;&#x6784;&#x4ECD;&#x7136;&#x5148;&#x8FDB;&#x5165; Candidate&#xFF0C;&#x7ECF;&#x4EBA;&#x5DE5; Review &#x548C;&#x590D;&#x7528;&#x8BC1;&#x636E;&#x786E;&#x8BA4;&#x540E;&#x518D;&#x5347;&#x7EA7;&#x3002;</p>
<h2 id="&#x53EF;&#x6062;&#x590D;&#x7684;&#x4EFB;&#x52A1;&#x4E0E;&#x8BC1;&#x636E;&#x6A21;&#x578B;"><a href="#&#x53EF;&#x6062;&#x590D;&#x7684;&#x4EFB;&#x52A1;&#x4E0E;&#x8BC1;&#x636E;&#x6A21;&#x578B;"></a>&#x53EF;&#x6062;&#x590D;&#x7684;&#x4EFB;&#x52A1;&#x4E0E;&#x8BC1;&#x636E;&#x6A21;&#x578B;</h2>
<p>Codex &#x548C; <code>agent-device</code> &#x90FD;&#x91C7;&#x7528; Session/&#x4E8B;&#x4EF6;&#x5316;&#x601D;&#x8DEF;&#xFF1A;&#x6A21;&#x578B;&#x8D1F;&#x8D23;&#x51B3;&#x7B56;&#xFF0C;&#x5DE5;&#x5177;&#x8D1F;&#x8D23;&#x6267;&#x884C;&#xFF0C;&#x7B56;&#x7565;&#x8D1F;&#x8D23;&#x7EA6;&#x675F;&#xFF0C;&#x4E8B;&#x4EF6;&#x548C; Artifact &#x8D1F;&#x8D23;&#x6062;&#x590D;&#x4E0E;&#x5BA1;&#x8BA1;&#x3002;</p>
<p>RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#x53EF;&#x4EE5;&#x6CBF;&#x7528;&#x540C;&#x6837;&#x7684;&#x4EFB;&#x52A1;&#x8FB9;&#x754C;&#xFF1A;</p>
<pre><code class="language-yaml"><span class="hljs-attr">PageRestoreRun:</span>
  <span class="hljs-attr">taskId:</span> <span class="hljs-string">&#x552F;&#x4E00;&#x6267;&#x884C;</span> <span class="hljs-string">ID</span>
  <span class="hljs-attr">repositoryCommit:</span> <span class="hljs-string">&#x8F93;&#x5165;&#x4EE3;&#x7801;&#x7248;&#x672C;</span>
  <span class="hljs-attr">worktree:</span> <span class="hljs-string">&#x72EC;&#x7ACB;&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;</span>
  <span class="hljs-attr">modelAndSkillVersion:</span> <span class="hljs-string">&#x6267;&#x884C;&#x6761;&#x4EF6;</span>
  <span class="hljs-attr">designReference:</span> <span class="hljs-string">&#x539F;&#x59CB;&#x8F93;&#x5165;</span>
  <span class="hljs-attr">materialVersion:</span> <span class="hljs-string">&#x4F7F;&#x7528;&#x7684;</span> <span class="hljs-string">Catalog</span> <span class="hljs-string">&#x7248;&#x672C;</span>
  <span class="hljs-attr">platformAndDevice:</span> <span class="hljs-string">Native</span> <span class="hljs-string">&#x73AF;&#x5883;</span>
  <span class="hljs-attr">observations:</span> <span class="hljs-string">&#x6BCF;&#x8F6E;&#x7ED3;&#x6784;&#x548C;&#x89C6;&#x89C9;&#x6458;&#x8981;</span>
  <span class="hljs-attr">artifacts:</span> <span class="hljs-string">&#x622A;&#x56FE;&#x3001;Diff&#x3001;&#x65E5;&#x5FD7;&#x3001;&#x89C6;&#x9891;</span>
  <span class="hljs-attr">codeChanges:</span> <span class="hljs-string">&#x6700;&#x7EC8;&#x4FEE;&#x6539;</span>
  <span class="hljs-attr">executionReport:</span> <span class="hljs-string">Agent</span> <span class="hljs-string">&#x6700;&#x7EC8;&#x7ED3;&#x679C;</span>
  <span class="hljs-attr">resultScore:</span> <span class="hljs-string">&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x7ED3;&#x679C;</span>
</code></pre>
<p>&#x540C;&#x4E00;&#x4E2A;&#x9700;&#x6C42;&#x91CD;&#x8DD1;&#x65F6;&#x4F7F;&#x7528;&#x65B0;&#x7684; <code>taskId</code>&#xFF0C;&#x4F46;&#x4FDD;&#x7559;&#x76F8;&#x540C; Case ID &#x548C;&#x56FA;&#x5B9A;&#x8F93;&#x5165;&#xFF0C;&#x4EE5;&#x4FBF;&#x6BD4;&#x8F83;&#x4E0D;&#x540C;&#x7B56;&#x7565;&#x3002;Raw Trace&#x3001;Decision Events&#x3001;Perception Artifacts&#x3001;Execution Report &#x548C;&#x4EBA;&#x5DE5;&#x8BC4;&#x5206;&#x5206;&#x522B;&#x627F;&#x62C5;&#x4E0D;&#x540C;&#x804C;&#x8D23;&#xFF0C;&#x4E0D;&#x4E92;&#x76F8;&#x91CD;&#x590D;&#x3002;</p>
<h2 id="&#x591A; Agent &#x4E0E;&#x8BBE;&#x5907;&#x9694;&#x79BB;"><a href="#&#x591A; Agent &#x4E0E;&#x8BBE;&#x5907;&#x9694;&#x79BB;"></a>&#x591A; Agent &#x4E0E;&#x8BBE;&#x5907;&#x9694;&#x79BB;</h2>
<p>&#x591A;&#x4E2A; Agent &#x5E76;&#x884C;&#x65F6;&#xFF0C;&#x4EE3;&#x7801; Worktree &#x548C;&#x6A21;&#x62DF;&#x5668;&#x5FC5;&#x987B;&#x4E00;&#x4E00;&#x7ED1;&#x5B9A;&#xFF1A;</p>
<pre><code class="language-text">Agent A &#x2192; Worktree A &#x2192; Simulator A &#x2192; Metro Port A
Agent B &#x2192; Worktree B &#x2192; Simulator B &#x2192; Metro Port B
</code></pre>
<p>&#x9700;&#x8981;&#x663E;&#x5F0F;&#x8BB0;&#x5F55;&#xFF1A;</p>
<ul>
<li>Git Worktree&#xFF1B;</li>
<li>Device Key&#xFF1B;</li>
<li>Session Owner&#xFF1B;</li>
<li>Metro Port&#xFF1B;</li>
<li>Bundle/Package&#xFF1B;</li>
<li>taskId&#xFF1B;</li>
<li>Claim &#x751F;&#x547D;&#x5468;&#x671F;&#x3002;</li>
</ul>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EF;&#x4EE5;&#x590D;&#x7528; <code>agent-device</code> &#x6309; Worktree &#x7BA1;&#x7406; Session &#x548C;&#x8BBE;&#x5907; Claim &#x7684;&#x673A;&#x5236;&#x3002;&#x4E0D;&#x8981;&#x8BA9;&#x4E0D;&#x540C; Agent &#x5171;&#x4EAB;&#x4E00;&#x4E2A;&#x9ED8;&#x8BA4;&#x6A21;&#x62DF;&#x5668;&#xFF0C;&#x4E5F;&#x4E0D;&#x8981;&#x901A;&#x8FC7;&#x201C;&#x53D1;&#x73B0;&#x5F53;&#x524D;&#x542F;&#x52A8;&#x7684;&#x8BBE;&#x5907;&#x201D;&#x9690;&#x5F0F;&#x9009;&#x62E9;&#x6267;&#x884C;&#x76EE;&#x6807;&#x3002;</p>
<h2 id="Skill&#x3001;Tool&#x3001;Context &#x4E0E; Runtime &#x7684;&#x8FB9;&#x754C;"><a href="#Skill&#x3001;Tool&#x3001;Context &#x4E0E; Runtime &#x7684;&#x8FB9;&#x754C;"></a>Skill&#x3001;Tool&#x3001;Context &#x4E0E; Runtime &#x7684;&#x8FB9;&#x754C;</h2>
<p>&#x672C;&#x65B9;&#x6848;&#x6CBF;&#x7528;&#x73B0;&#x6709;&#x516D;&#x9636;&#x6BB5;&#x65B9;&#x6848;&#x4E2D;&#x7684;&#x5206;&#x5C42;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x5185;&#x5BB9;</th>
<th>&#x627F;&#x8F7D;&#x4F4D;&#x7F6E;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x4F55;&#x65F6;&#x5FC5;&#x987B;&#x8FDB;&#x884C; Native &#x9A8C;&#x8BC1;&#x3001;&#x5931;&#x8D25;&#x540E;&#x5982;&#x4F55;&#x5904;&#x7406;</td>
<td>RN Screenshot-to-Page Skill</td>
</tr>
<tr>
<td>&#x6253;&#x5F00;&#x9875;&#x9762;&#x3001;&#x89C2;&#x5BDF;&#x3001;&#x4EA4;&#x4E92;&#x3001;&#x622A;&#x56FE;&#x548C; Diff</td>
<td>Perception Tool / agent-device Runtime</td>
</tr>
<tr>
<td>&#x9875;&#x9762;&#x5165;&#x53E3;&#x3001;Fixture&#x3001;&#x9009;&#x62E9;&#x5668;&#x3001;&#x52A8;&#x6001;&#x533A;&#x57DF; Mask</td>
<td>&#x9879;&#x76EE;&#x914D;&#x7F6E;&#x6216; Case Context</td>
</tr>
<tr>
<td>&#x7EC4;&#x4EF6;&#x4E8B;&#x5B9E;&#x548C;&#x771F;&#x5B9E;&#x5C55;&#x793A;</td>
<td>Material Catalog / Fixture</td>
</tr>
<tr>
<td>&#x9875;&#x9762;&#x4EE3;&#x7801;&#x7EC4;&#x7EC7;&#x548C;&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;</td>
<td>Golden Path / Contract</td>
</tr>
<tr>
<td>&#x539F;&#x59CB;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x548C;&#x8017;&#x65F6;</td>
<td>Langfuse Raw Trace</td>
</tr>
<tr>
<td>&#x5173;&#x952E;&#x4E0D;&#x786E;&#x5B9A;&#x6027;&#x548C;&#x51B3;&#x7B56;</td>
<td>Decision Events</td>
</tr>
<tr>
<td>&#x6700;&#x7EC8;&#x4EA7;&#x7269;&#x548C;&#x9057;&#x7559;&#x95EE;&#x9898;</td>
<td>Execution Report</td>
</tr>
<tr>
<td>&#x662F;&#x5426;&#x8FBE;&#x5230;&#x4EA4;&#x4ED8;&#x6807;&#x51C6;</td>
<td>&#x81EA;&#x52A8; Contract + &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;</td>
</tr>
</tbody>
</table>
<p>Skill &#x4E0D;&#x5E94;&#x590D;&#x5236;&#x5168;&#x90E8; CLI &#x624B;&#x518C;&#xFF1B;Tool &#x4E0D;&#x5E94;&#x51B3;&#x5B9A;&#x9875;&#x9762;&#x5E94;&#x8BE5;&#x7528;&#x54EA;&#x4E2A;&#x7EC4;&#x4EF6;&#xFF1B;Runtime &#x4E0D;&#x5E94;&#x81EA;&#x52A8;&#x628A;&#x5DEE;&#x5F02;&#x89E3;&#x91CA;&#x6210;&#x4EE3;&#x7801;&#x4FEE;&#x590D;&#xFF1B;Execution Report &#x4E5F;&#x4E0D;&#x91CD;&#x590D;&#x4FDD;&#x5B58;&#x5B8C;&#x6574; Raw Trace&#x3002;</p>
<h2 id="&#x5206;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;"><a href="#&#x5206;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;"></a>&#x5206;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;</h2>
<p>&#x672C;&#x65B9;&#x6848;&#x662F;&#x73B0;&#x6709;&#x300A;RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;&#x300B;&#x7684;&#x5E76;&#x884C;&#x57FA;&#x7840;&#x80FD;&#x529B;&#xFF0C;&#x4E0D;&#x6539;&#x53D8;&#x201C;&#x771F;&#x5B9E; Case &#x4F18;&#x5148;&#x3001;&#x5355;&#x53D8;&#x91CF;&#x9A8C;&#x8BC1;&#x201D;&#x7684;&#x539F;&#x5219;&#x3002;</p>
<h3 id="P0&#xFF1A;&#x4EBA;&#x5DE5;&#x53EF;&#x63A7;&#x7684; CLI Spike"><a href="#P0&#xFF1A;&#x4EBA;&#x5DE5;&#x53EF;&#x63A7;&#x7684; CLI Spike"></a>P0&#xFF1A;&#x4EBA;&#x5DE5;&#x53EF;&#x63A7;&#x7684; CLI Spike</h3>
<p>&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x5DF2;&#x6709;&#x771F;&#x5B9E; RN Case&#xFF1A;</p>
<ol>
<li>&#x5B89;&#x88C5;&#x5E76;&#x8FD0;&#x884C; <code>agent-device doctor</code>&#xFF1B;</li>
<li>&#x56FA;&#x5B9A;&#x4E00;&#x4E2A; iOS Simulator&#xFF1B;</li>
<li>&#x6253;&#x5F00;&#x76EE;&#x6807; App &#x548C; Deep Link&#xFF1B;</li>
<li>&#x7B49;&#x5F85;&#x4E00;&#x4E2A;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x5143;&#x7D20;&#xFF1B;</li>
<li>&#x83B7;&#x53D6; Interactive Snapshot&#xFF1B;</li>
<li>&#x622A;&#x53D6; Native &#x9875;&#x9762;&#xFF1B;</li>
<li>&#x4E0E;&#x8BBE;&#x8BA1;&#x53C2;&#x8003;&#x56FE;&#x751F;&#x6210; Diff&#xFF1B;</li>
<li>&#x4FDD;&#x5B58;&#x5B9E;&#x9645;&#x56FE;&#x3001;Diff &#x56FE;&#x3001;&#x65E5;&#x5FD7;&#x548C;&#x4EBA;&#x5DE5;&#x7ED3;&#x8BBA;&#x3002;</li>
</ol>
<p>&#x8FD9;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x4FEE;&#x6539;&#x9ED8;&#x8BA4; RN Skill&#xFF0C;&#x4E0D;&#x5EFA;&#x8BBE; MCP&#xFF0C;&#x4E0D;&#x505A;&#x81EA;&#x52A8;&#x4FEE;&#x590D;&#x3002;&#x76EE;&#x6807;&#x53EA;&#x662F;&#x8BC1;&#x660E; <code>agent-device</code> &#x80FD;&#x7A33;&#x5B9A;&#x9A71;&#x52A8;&#x6211;&#x4EEC;&#x7684;&#x5BBF;&#x4E3B; App &#x5E76;&#x53D6;&#x5F97;&#x6709;&#x6548;&#x8BC1;&#x636E;&#x3002;</p>
<h3 id="P1&#xFF1A;&#x5C01;&#x88C5;&#x6700;&#x5C0F; Perception Adapter"><a href="#P1&#xFF1A;&#x5C01;&#x88C5;&#x6700;&#x5C0F; Perception Adapter"></a>P1&#xFF1A;&#x5C01;&#x88C5;&#x6700;&#x5C0F; Perception Adapter</h3>
<p>&#x5F53; CLI Spike &#x7A33;&#x5B9A;&#x540E;&#xFF0C;&#x5728; <code>coding_agent/rn_page</code> &#x5C01;&#x88C5; <code>capture_mobile_app_state</code>&#xFF1A;</p>
<ul>
<li>&#x8F93;&#x5165;&#x56FA;&#x5B9A;&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C;&#x7B49;&#x5F85;&#x6761;&#x4EF6;&#xFF1B;</li>
<li>&#x5185;&#x90E8;&#x8C03;&#x7528;&#x540C;&#x4E00;&#x4E2A; <code>agent-device</code> Session&#xFF1B;</li>
<li>&#x8FD4;&#x56DE; Observation Quality&#x3001;Snapshot &#x6458;&#x8981;&#x548C; Artifact &#x8DEF;&#x5F84;&#xFF1B;</li>
<li>&#x4E0E; <code>taskId</code>&#x3001;&#x4ED3;&#x5E93; Commit &#x548C; Execution Report &#x5173;&#x8054;&#xFF1B;</li>
<li>&#x5931;&#x8D25;&#x4F7F;&#x7528;&#x7ED3;&#x6784;&#x5316; reason &#x548C; hint&#xFF0C;&#x4E0D;&#x4F9D;&#x8D56;&#x9519;&#x8BEF;&#x6587;&#x672C;&#x5206;&#x7C7B;&#x3002;</li>
</ul>
<h3 id="P2&#xFF1A;Direct Baseline &#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;"><a href="#P2&#xFF1A;Direct Baseline &#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;"></a>P2&#xFF1A;Direct Baseline &#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;</h3>
<p>&#x4F7F;&#x7528;&#x540C;&#x4E00;&#x4E2A; Case &#x6BD4;&#x8F83;&#xFF1A;</p>
<pre><code class="language-text">Direct Baseline
vs
Direct + Native Perception Feedback
</code></pre>
<p>&#x53EA;&#x589E;&#x52A0;&#x751F;&#x6210;&#x540E;&#x7684;&#x8FD0;&#x884C;&#x53CD;&#x9988;&#xFF0C;&#x4E0D;&#x540C;&#x65F6;&#x589E;&#x52A0; Material&#x3001;Page Schema&#x3001;Task Brief &#x6216;&#x65B0; Skill &#x89C4;&#x5219;&#x3002;&#x6BD4;&#x8F83;&#x9996;&#x8F6E;&#x901A;&#x8FC7;&#x7387;&#x3001;&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x3001;&#x4FEE;&#x6B63;&#x8F6E;&#x6570;&#x3001;&#x8017;&#x65F6;&#x548C; Token&#x3002;</p>
<h3 id="P3&#xFF1A;Material-first &#x8054;&#x5408; Case"><a href="#P3&#xFF1A;Material-first &#x8054;&#x5408; Case"></a>P3&#xFF1A;Material-first &#x8054;&#x5408; Case</h3>
<p>Perception Feedback &#x88AB;&#x8BC1;&#x660E;&#x6709;&#x6548;&#x540E;&#xFF0C;&#x518D;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<pre><code class="language-text">Direct + Material
vs
Direct + Material + Native Perception
</code></pre>
<p>&#x89C2;&#x5BDF;&#x5B83;&#x662F;&#x5426;&#x540C;&#x65F6;&#x6539;&#x5584;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x7387;&#x548C;&#x89C6;&#x89C9;&#x9A8C;&#x6536;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x53EA;&#x964D;&#x4F4E;&#x622A;&#x56FE;&#x5DEE;&#x5F02;&#x3002;</p>
<h3 id="P4&#xFF1A;Replay &#x4E0E; CI"><a href="#P4&#xFF1A;Replay &#x4E0E; CI"></a>P4&#xFF1A;Replay &#x4E0E; CI</h3>
<p>&#x628A;&#x5DF2;&#x7ECF;&#x8DD1;&#x901A;&#x7684;&#x5173;&#x952E;&#x6D41;&#x7A0B;&#x4FDD;&#x5B58;&#x4E3A; <code>.ad</code> Script&#xFF1A;</p>
<pre><code class="language-text">&#x6253;&#x5F00;&#x76EE;&#x6807; Fixture
&#x2192; &#x7B49;&#x5F85;&#x9875;&#x9762;&#x8EAB;&#x4EFD;
&#x2192; &#x6267;&#x884C;&#x5173;&#x952E;&#x4EA4;&#x4E92;
&#x2192; &#x65AD;&#x8A00;&#x76EE;&#x6807;&#x72B6;&#x6001;
&#x2192; &#x622A;&#x56FE;
</code></pre>
<p>&#x5728; PR &#x6216;&#x5B9A;&#x671F;&#x4EFB;&#x52A1;&#x4E2D;&#x91CD;&#x653E;&#xFF0C;&#x5E76;&#x4FDD;&#x5B58; Evidence Artifact&#x3002;Replay &#x7528;&#x6765;&#x4FDD;&#x62A4;&#x5DF2;&#x9A8C;&#x8BC1;&#x7ED3;&#x679C;&#xFF0C;&#x4E0D;&#x66FF;&#x4EE3;&#x63A2;&#x7D22;&#x9636;&#x6BB5;&#x7531; Agent &#x52A8;&#x6001;&#x9009;&#x62E9;&#x64CD;&#x4F5C;&#x3002;</p>
<h2 id="&#x8BC4;&#x4EF7;&#x6307;&#x6807;"><a href="#&#x8BC4;&#x4EF7;&#x6307;&#x6807;"></a>&#x8BC4;&#x4EF7;&#x6307;&#x6807;</h2>
<p>&#x9664;&#x73B0;&#x6709;&#x9875;&#x9762;&#x8FD8;&#x539F;&#x6307;&#x6807;&#x5916;&#xFF0C;&#x672C;&#x65B9;&#x6848;&#x589E;&#x52A0;&#x8FD0;&#x884C;&#x9A8C;&#x8BC1;&#x4E13;&#x9879;&#x6307;&#x6807;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x6307;&#x6807;</th>
<th>&#x8BF4;&#x660E;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x9875;&#x9762;&#x5230;&#x8FBE;&#x6210;&#x529F;&#x7387;</td>
<td>&#x81EA;&#x52A8;&#x8FDB;&#x5165;&#x6B63;&#x786E;&#x76EE;&#x6807;&#x9875;&#x9762;&#x7684;&#x6BD4;&#x4F8B;</td>
</tr>
<tr>
<td>&#x6709;&#x6548;&#x89C2;&#x5BDF;&#x7387;</td>
<td><code>healthy/recovered</code> &#x4E14;&#x53EF;&#x7528;&#x4E8E;&#x5224;&#x65AD;&#x7684;&#x89C2;&#x5BDF;&#x6BD4;&#x4F8B;</td>
</tr>
<tr>
<td>&#x622A;&#x56FE;&#x786E;&#x5B9A;&#x6027;</td>
<td>&#x76F8;&#x540C; Commit &#x548C; Fixture &#x591A;&#x6B21;&#x622A;&#x56FE;&#x7684;&#x81EA;&#x8EAB;&#x6CE2;&#x52A8;</td>
</tr>
<tr>
<td>&#x81EA;&#x52A8;&#x4FEE;&#x6B63;&#x589E;&#x76CA;</td>
<td>&#x52A0;&#x5165;&#x8FD0;&#x884C;&#x53CD;&#x9988;&#x540E;&#x51CF;&#x5C11;&#x7684;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x8F6E;&#x6570;</td>
</tr>
<tr>
<td>&#x9519;&#x8BEF;&#x5F52;&#x56E0;&#x7387;</td>
<td>&#x80FD;&#x5426;&#x533A;&#x5206;&#x5B9E;&#x73B0;&#x9519;&#x8BEF;&#x3001;&#x73AF;&#x5883;&#x9519;&#x8BEF;&#x548C;&#x8BC1;&#x636E;&#x65E0;&#x6548;</td>
</tr>
<tr>
<td>Artifact &#x5B8C;&#x6574;&#x7387;</td>
<td>Reference&#x3001;Actual&#x3001;Diff&#x3001;&#x65E5;&#x5FD7;&#x662F;&#x5426;&#x53EF;&#x590D;&#x6838;</td>
</tr>
<tr>
<td>&#x8BBE;&#x5907;&#x51B2;&#x7A81;&#x7387;</td>
<td>&#x5E76;&#x53D1;&#x4EFB;&#x52A1;&#x4E2D;&#x53D1;&#x751F;&#x62A2;&#x5360;&#x6216;&#x4E32;&#x6270;&#x7684;&#x6BD4;&#x4F8B;</td>
</tr>
<tr>
<td>&#x6267;&#x884C;&#x6210;&#x672C;</td>
<td>&#x589E;&#x52A0;&#x7684;&#x65F6;&#x95F4;&#x3001;Token &#x548C;&#x8BBE;&#x5907;&#x8D44;&#x6E90;</td>
</tr>
</tbody>
</table>
<p>&#x7B2C;&#x4E00;&#x9879;&#x57FA;&#x7EBF;&#x4E0D;&#x662F;&#x76EE;&#x6807;&#x56FE;&#x76F8;&#x4F3C;&#x5EA6;&#xFF0C;&#x800C;&#x662F;&#x622A;&#x56FE;&#x786E;&#x5B9A;&#x6027;&#x3002;&#x5982;&#x679C;&#x540C;&#x4E00;&#x4EFD;&#x4EE3;&#x7801;&#x91CD;&#x590D;&#x622A;&#x56FE;&#x7684;&#x5DEE;&#x5F02;&#x5DF2;&#x7ECF;&#x5F88;&#x5927;&#xFF0C;&#x4EFB;&#x4F55;&#x89C6;&#x89C9;&#x8BC4;&#x5206;&#x90FD;&#x4E0D;&#x53EF;&#x4FE1;&#x3002;</p>
<h2 id="&#x98CE;&#x9669;&#x4E0E;&#x63A7;&#x5236;"><a href="#&#x98CE;&#x9669;&#x4E0E;&#x63A7;&#x5236;"></a>&#x98CE;&#x9669;&#x4E0E;&#x63A7;&#x5236;</h2>
<h3 id="&#x50CF;&#x7D20;&#x6307;&#x6807;&#x7ED1;&#x67B6;&#x5B9E;&#x73B0;"><a href="#&#x50CF;&#x7D20;&#x6307;&#x6807;&#x7ED1;&#x67B6;&#x5B9E;&#x73B0;"></a>&#x50CF;&#x7D20;&#x6307;&#x6807;&#x7ED1;&#x67B6;&#x5B9E;&#x73B0;</h3>
<p>Agent &#x53EF;&#x80FD;&#x4E3A;&#x4E86;&#x964D;&#x4F4E;&#x50CF;&#x7D20;&#x5DEE;&#x5F02;&#x4F7F;&#x7528;&#x7EDD;&#x5BF9;&#x5B9A;&#x4F4D;&#x3001;&#x786C;&#x7F16;&#x7801;&#x6587;&#x672C;&#x6216;&#x7834;&#x574F;&#x54CD;&#x5E94;&#x5F0F;&#x5E03;&#x5C40;&#x3002;&#x63A7;&#x5236;&#x65B9;&#x5F0F;&#x662F;&#x8BA9;&#x89C6;&#x89C9; Diff &#x53EA;&#x4F5C;&#x4E3A; Contract &#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x7EC4;&#x4EF6;&#x590D;&#x7528;&#x3001;&#x4EE3;&#x7801;&#x8D28;&#x91CF;&#x3001;&#x4EA4;&#x4E92;&#x548C;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x3002;</p>
<h3 id="&#x81EA;&#x52A8;&#x53CD;&#x9988;&#x5F62;&#x6210;&#x9519;&#x8BEF;&#x5FAA;&#x73AF;"><a href="#&#x81EA;&#x52A8;&#x53CD;&#x9988;&#x5F62;&#x6210;&#x9519;&#x8BEF;&#x5FAA;&#x73AF;"></a>&#x81EA;&#x52A8;&#x53CD;&#x9988;&#x5F62;&#x6210;&#x9519;&#x8BEF;&#x5FAA;&#x73AF;</h3>
<p>&#x5982;&#x679C;&#x8FDB;&#x5165;&#x4E86;&#x9519;&#x8BEF;&#x9875;&#x9762;&#x6216;&#x622A;&#x56FE;&#x65E0;&#x6548;&#xFF0C;Agent &#x53EF;&#x80FD;&#x6839;&#x636E;&#x9519;&#x8BEF;&#x8BC1;&#x636E;&#x4E0D;&#x65AD;&#x4FEE;&#x6539;&#x4EE3;&#x7801;&#x3002;&#x63A7;&#x5236;&#x65B9;&#x5F0F;&#x662F;&#x5148;&#x9A8C;&#x8BC1;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#x548C; Observation Quality&#xFF0C;invalid &#x8BC1;&#x636E;&#x7981;&#x6B62;&#x8FDB;&#x5165;&#x81EA;&#x52A8;&#x4FEE;&#x6B63;&#x3002;</p>
<h3 id="&#x5DE5;&#x5177;&#x4E0A;&#x4E0B;&#x6587;&#x8FC7;&#x5927;"><a href="#&#x5DE5;&#x5177;&#x4E0A;&#x4E0B;&#x6587;&#x8FC7;&#x5927;"></a>&#x5DE5;&#x5177;&#x4E0A;&#x4E0B;&#x6587;&#x8FC7;&#x5927;</h3>
<p>&#x5B8C;&#x6574; Accessibility Tree&#x3001;&#x65E5;&#x5FD7;&#x548C;&#x622A;&#x56FE;&#x4F1A;&#x8FC5;&#x901F;&#x5360;&#x6EE1;&#x4E0A;&#x4E0B;&#x6587;&#x3002;&#x63A7;&#x5236;&#x65B9;&#x5F0F;&#x662F;&#x9ED8;&#x8BA4;&#x8FD4;&#x56DE;&#x4EA4;&#x4E92;&#x8282;&#x70B9;&#x3001;&#x53D8;&#x5316;&#x6458;&#x8981;&#x3001;&#x5DEE;&#x5F02; Region &#x548C; Artifact &#x8DEF;&#x5F84;&#xFF0C;&#x8BE6;&#x7EC6;&#x5185;&#x5BB9;&#x6309;&#x9700;&#x8BFB;&#x53D6;&#x3002;</p>
<h3 id="&#x591A;&#x5E73;&#x53F0;&#x8303;&#x56F4;&#x5931;&#x63A7;"><a href="#&#x591A;&#x5E73;&#x53F0;&#x8303;&#x56F4;&#x5931;&#x63A7;"></a>&#x591A;&#x5E73;&#x53F0;&#x8303;&#x56F4;&#x5931;&#x63A7;</h3>
<p><code>agent-device</code> &#x652F;&#x6301;&#x5927;&#x91CF;&#x5E73;&#x53F0;&#xFF0C;&#x4F46;&#x5F53;&#x524D; Case &#x4E0D;&#x9700;&#x8981;&#x540C;&#x6B65;&#x8986;&#x76D6;&#x3002;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x53EA;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x4E3B;&#x8981; iOS Simulator&#xFF1B;Android &#x5728;&#x6D41;&#x7A0B;&#x7A33;&#x5B9A;&#x540E;&#x4F5C;&#x4E3A;&#x72EC;&#x7ACB;&#x53D8;&#x91CF;&#x9A8C;&#x8BC1;&#x3002;</p>
<h3 id="&#x516C;&#x5171;&#x7269;&#x6599;&#x88AB;&#x4E00;&#x6B21; Case &#x6C61;&#x67D3;"><a href="#&#x516C;&#x5171;&#x7269;&#x6599;&#x88AB;&#x4E00;&#x6B21; Case &#x6C61;&#x67D3;"></a>&#x516C;&#x5171;&#x7269;&#x6599;&#x88AB;&#x4E00;&#x6B21; Case &#x6C61;&#x67D3;</h3>
<p>&#x8FD0;&#x884C;&#x9A8C;&#x8BC1;&#x53D1;&#x73B0;&#x7684;&#x7EC4;&#x4EF6;&#x7F3A;&#x53E3;&#x53EA;&#x5F62;&#x6210; Candidate &#x548C;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x81EA;&#x52A8;&#x4FEE;&#x6539; Material Catalog &#x6216; Golden Path&#x3002;</p>
<h2 id="&#x5F53;&#x524D;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;"><a href="#&#x5F53;&#x524D;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;"></a>&#x5F53;&#x524D;&#x4E0D;&#x505A;&#x4EC0;&#x4E48;</h2>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x660E;&#x786E;&#x4E0D;&#x505A;&#xFF1A;</p>
<ul>
<li>&#x590D;&#x5236; <code>agent-device</code> &#x7684;&#x5B8C;&#x6574;&#x591A;&#x5E73;&#x53F0; Runtime&#xFF1B;</li>
<li>&#x81EA;&#x7814; Appium&#x3001;XCTest &#x6216; ADB &#x81EA;&#x52A8;&#x5316;&#x6846;&#x67B6;&#xFF1B;</li>
<li>&#x7528;&#x4E00;&#x4E2A;&#x7EFC;&#x5408; AI &#x5206;&#x6570;&#x4EE3;&#x66FF;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#xFF1B;</li>
<li>&#x9ED8;&#x8BA4;&#x8FD0;&#x884C;&#x65E0;&#x9650;&#x8F6E;&#x81EA;&#x52A8;&#x4FEE;&#x590D;&#xFF1B;</li>
<li>&#x4E3A;&#x6240;&#x6709;&#x9875;&#x9762;&#x9884;&#x5148;&#x7F16;&#x5199; Replay&#xFF1B;</li>
<li>&#x5C06; Perception Tool &#x53D8;&#x6210;&#x9875;&#x9762;&#x751F;&#x6210;&#x7684;&#x5F3A;&#x5236;&#x524D;&#x7F6E;&#x6B65;&#x9AA4;&#xFF1B;</li>
<li>&#x540C;&#x65F6;&#x4E0A;&#x7EBF; Schema&#x3001;Material&#x3001;&#x89C6;&#x89C9;&#x6A21;&#x578B;&#x548C; Perception &#x7684;&#x7EC4;&#x5408;&#x5B9E;&#x9A8C;&#xFF1B;</li>
<li>&#x81EA;&#x52A8;&#x5C06;&#x9875;&#x9762;&#x7279;&#x4F8B;&#x6C89;&#x6DC0;&#x4E3A;&#x516C;&#x5171; Material&#x3002;</li>
</ul>
<p>&#x81EA;&#x52A8;&#x4FEE;&#x6B63;&#x5373;&#x4F7F;&#x8FDB;&#x5165;&#x540E;&#x7EED;&#x9636;&#x6BB5;&#xFF0C;&#x4E5F;&#x5EFA;&#x8BAE;&#x8BBE;&#x7F6E;&#x6700;&#x591A; 2&#xFF5E;3 &#x8F6E;&#x9884;&#x7B97;&#xFF0C;&#x8D85;&#x8FC7;&#x9884;&#x7B97;&#x540E;&#x63D0;&#x4EA4;&#x5F53;&#x524D;&#x8BC1;&#x636E;&#x548C;&#x9057;&#x7559;&#x95EE;&#x9898;&#xFF0C;&#x7531;&#x4EBA;&#x5224;&#x65AD;&#x7EE7;&#x7EED;&#x65B9;&#x5411;&#x3002;</p>
<h2 id="&#x6700;&#x5C0F;&#x9A8C;&#x6536;&#x6807;&#x51C6;"><a href="#&#x6700;&#x5C0F;&#x9A8C;&#x6536;&#x6807;&#x51C6;"></a>&#x6700;&#x5C0F;&#x9A8C;&#x6536;&#x6807;&#x51C6;</h2>
<p>&#x4E00;&#x4E2A; Perception Spike &#x53EA;&#x6709;&#x540C;&#x65F6;&#x6EE1;&#x8DB3;&#x4EE5;&#x4E0B;&#x6761;&#x4EF6;&#xFF0C;&#x624D;&#x7B97;&#x8DD1;&#x901A;&#xFF1A;</p>
<ul>
<li>&#x4ECE;&#x6307;&#x5B9A; RN &#x4ED3;&#x5E93;&#x548C;&#x56FA;&#x5B9A; Commit &#x542F;&#x52A8;&#x76EE;&#x6807; App&#xFF1B;</li>
<li>&#x901A;&#x8FC7;&#x786E;&#x5B9A;&#x6027;&#x5165;&#x53E3;&#x8FDB;&#x5165;&#x6B63;&#x786E;&#x9875;&#x9762;&#xFF1B;</li>
<li>&#x7ED3;&#x6784;&#x5316;&#x68C0;&#x67E5;&#x786E;&#x8BA4;&#x9875;&#x9762;&#x8EAB;&#x4EFD;&#xFF1B;</li>
<li>&#x5728;&#x7A33;&#x5B9A;&#x72B6;&#x6001;&#x53D6;&#x5F97; Native Screenshot&#xFF1B;</li>
<li>&#x540C;&#x4E00;&#x8F93;&#x5165;&#x91CD;&#x590D;&#x6267;&#x884C;&#x65F6;&#x622A;&#x56FE;&#x566A;&#x58F0;&#x53EF;&#x89E3;&#x91CA;&#xFF1B;</li>
<li>&#x751F;&#x6210; Reference / Actual / Diff &#x4E09;&#x7C7B;&#x4EA7;&#x7269;&#xFF1B;</li>
<li>&#x5931;&#x8D25;&#x80FD;&#x591F;&#x533A;&#x5206;&#x73AF;&#x5883;&#x3001;&#x9875;&#x9762;&#x3001;&#x89C2;&#x5BDF;&#x8D28;&#x91CF;&#x548C;&#x89C6;&#x89C9;&#x5DEE;&#x5F02;&#xFF1B;</li>
<li>&#x6240;&#x6709;&#x4EA7;&#x7269;&#x5173;&#x8054;&#x540C;&#x4E00;&#x4E2A; <code>taskId</code>&#xFF1B;</li>
<li>&#x4EBA;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x4EA7;&#x7269;&#x72EC;&#x7ACB;&#x590D;&#x6838;&#x7ED3;&#x8BBA;&#xFF1B;</li>
<li>&#x4E0D;&#x8981;&#x6C42;&#x4FEE;&#x6539;&#x516C;&#x5171; Material &#x6216;&#x751F;&#x4EA7;&#x9875;&#x9762;&#x7ED3;&#x6784;&#x6765;&#x8FC1;&#x5C31;&#x5DE5;&#x5177;&#x3002;</li>
</ul>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p>Material-first &#x89E3;&#x51B3;&#x201C;Agent &#x5E94;&#x4F18;&#x5148;&#x4F7F;&#x7528;&#x54EA;&#x4E9B;&#x771F;&#x5B9E;&#x751F;&#x4EA7;&#x7269;&#x6599;&#x201D;&#xFF0C;Golden Path &#x89E3;&#x51B3;&#x201C;&#x6CA1;&#x6709;&#x73B0;&#x6210;&#x5B9E;&#x73B0;&#x65F6;&#x5E94;&#x53C2;&#x8003;&#x54EA;&#x4E9B;&#x5DF2;&#x9A8C;&#x8BC1;&#x5DE5;&#x7A0B;&#x8DEF;&#x5F84;&#x201D;&#xFF0C;RN Screenshot Perception Layer &#x5219;&#x89E3;&#x51B3;&#x201C;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x540E;&#xFF0C;Agent &#x5982;&#x4F55;&#x57FA;&#x4E8E;&#x771F;&#x5B9E; Native &#x8FD0;&#x884C;&#x4E8B;&#x5B9E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x201D;&#x3002;</p>
<p><code>agent-device</code> &#x5DF2;&#x7ECF;&#x63D0;&#x4F9B;&#x7ED3;&#x6784;&#x89C2;&#x5BDF;&#x3001;&#x5B89;&#x5168;&#x4EA4;&#x4E92;&#x3001;&#x7A33;&#x5B9A;&#x7B49;&#x5F85;&#x3001;&#x622A;&#x56FE;&#x5DEE;&#x5F02;&#x3001;Replay &#x548C;&#x8BBE;&#x5907;&#x9694;&#x79BB;&#xFF0C;&#x9002;&#x5408;&#x4F5C;&#x4E3A;&#x5019;&#x9009;&#x5E95;&#x5EA7;&#x3002;&#x6211;&#x4EEC;&#x7684;&#x5DE5;&#x4F5C;&#x91CD;&#x70B9;&#x4E0D;&#x5E94;&#x662F;&#x590D;&#x5236;&#x5B83;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x56FA;&#x5B9A;&#x9875;&#x9762;&#x5165;&#x53E3;&#x548C;&#x8FD0;&#x884C;&#x73AF;&#x5883;
&#x2192; &#x5C01;&#x88C5;&#x6700;&#x5C0F; RN Perception Adapter
&#x2192; &#x4EA7;&#x51FA;&#x7ED3;&#x6784;&#x5316;&#x89C2;&#x5BDF;&#x4E0E;&#x53EF;&#x590D;&#x6838; Artifact
&#x2192; &#x5728;&#x76F8;&#x540C; Case &#x4E2D;&#x505A;&#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;
&#x2192; &#x53EA;&#x6709;&#x8BC1;&#x660E;&#x51CF;&#x5C11;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x540E;&#x624D;&#x8FDB;&#x5165;&#x9ED8;&#x8BA4;&#x8DEF;&#x5F84;
</code></pre>
<p>&#x56E0;&#x6B64;&#x4E0B;&#x4E00;&#x6B65;&#x4E0D;&#x662F;&#x5EFA;&#x8BBE;&#x5B8C;&#x6574;&#x89C6;&#x89C9;&#x5E73;&#x53F0;&#xFF0C;&#x800C;&#x662F;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x771F;&#x5B9E; RN &#x9875;&#x9762;&#x5B8C;&#x6210; CLI Spike&#xFF0C;&#x5148;&#x8BC1;&#x660E;&#x8FD9;&#x6761; Native &#x53CD;&#x9988;&#x94FE;&#x80FD;&#x591F;&#x7A33;&#x5B9A;&#x3001;&#x4F4E;&#x566A;&#x58F0;&#x5730;&#x8DD1;&#x901A;&#x3002;</p>
<h2 id="&#x5173;&#x8054;&#x65B9;&#x6848;"><a href="#&#x5173;&#x8054;&#x65B9;&#x6848;"></a>&#x5173;&#x8054;&#x65B9;&#x6848;</h2>
<ul>
<li><a href="./RN%20Screenshot-to-Page%20Agent%20%E8%B7%AF%E5%BE%84%E4%BC%98%E5%8C%96%EF%BC%9A%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88%E6%80%9D%E8%80%83.md">&#x300A;RN Screenshot-to-Page Agent &#x8DEF;&#x5F84;&#x4F18;&#x5316;&#xFF1A;&#x6280;&#x672F;&#x65B9;&#x6848;&#x601D;&#x8003;&#x300B;</a></li>
<li><a href="./RN%E9%A1%B5%E9%9D%A2%E8%BF%98%E5%8E%9F%EF%BC%9A%E9%98%B6%E6%AE%B5%E6%8E%A8%E8%BF%9B%E4%B8%8E%E9%AA%8C%E6%94%B6.md">&#x300A;RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;&#x300B;</a></li>
<li><a href="./AI%20Engineering%20Golden%20Path%EF%BC%9A%E9%9D%A2%E5%90%91%20Agent%20%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%A4%8D%E7%94%A8%E6%9C%BA%E5%88%B6.md">&#x300A;AI Engineering Golden Path&#xFF1A;&#x9762;&#x5411; Agent &#x7684;&#x5DE5;&#x7A0B;&#x590D;&#x7528;&#x673A;&#x5236;&#x300B;</a></li>
</ul>
`,E=[{level:1,title:"RN Screenshot Perception Layer：从“模型看图”到可评测的 Native 运行事实",children:[{level:2,title:"背景",children:[]},{level:2,title:"核心判断",children:[]},{level:2,title:"为什么不能只依赖截图",children:[]},{level:2,title:"候选底座：agent-device",children:[{level:3,title:"结构化页面观察",children:[]},{level:3,title:"基于最新观察的安全交互",children:[]},{level:3,title:"操作后等待稳定并返回增量",children:[]},{level:3,title:"截图与差异区域",children:[]}]},{level:2,title:"在现有架构中的位置",children:[]},{level:2,title:"Perception Tool 的最小协议",children:[]},{level:2,title:"观察质量必须是一等数据",children:[]},{level:2,title:"视觉比较的分层策略",children:[{level:3,title:"第一层：页面身份与结构 Contract",children:[]},{level:3,title:"第二层：截图归一化",children:[]},{level:3,title:"第三层：像素与 Region Diff",children:[]}]},{level:2,title:"与 Material-first 的双向关系",children:[]},{level:2,title:"可恢复的任务与证据模型",children:[]},{level:2,title:"多 Agent 与设备隔离",children:[]},{level:2,title:"Skill、Tool、Context 与 Runtime 的边界",children:[]},{level:2,title:"分阶段推进",children:[{level:3,title:"P0：人工可控的 CLI Spike",children:[]},{level:3,title:"P1：封装最小 Perception Adapter",children:[]},{level:3,title:"P2：Direct Baseline 单变量实验",children:[]},{level:3,title:"P3：Material-first 联合 Case",children:[]},{level:3,title:"P4：Replay 与 CI",children:[]}]},{level:2,title:"评价指标",children:[]},{level:2,title:"风险与控制",children:[{level:3,title:"像素指标绑架实现",children:[]},{level:3,title:"自动反馈形成错误循环",children:[]},{level:3,title:"工具上下文过大",children:[]},{level:3,title:"多平台范围失控",children:[]},{level:3,title:"公共物料被一次 Case 污染",children:[]}]},{level:2,title:"当前不做什么",children:[]},{level:2,title:"最小验收标准",children:[]},{level:2,title:"结论",children:[]},{level:2,title:"关联方案",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
