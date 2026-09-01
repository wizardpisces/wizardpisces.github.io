const x={},F=`<h1 id="&#x4E24;&#x4E2A;&#x7A0B;&#x5E8F;&#x6CA1;&#x6709;&#x4E92;&#x76F8;&#x8C03;&#x7528;&#xFF0C;&#x6570;&#x636E;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x662F;&#x8FC7;&#x53BB;&#x4E86;&#xFF1F;"><a href="#&#x4E24;&#x4E2A;&#x7A0B;&#x5E8F;&#x6CA1;&#x6709;&#x4E92;&#x76F8;&#x8C03;&#x7528;&#xFF0C;&#x6570;&#x636E;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x662F;&#x8FC7;&#x53BB;&#x4E86;&#xFF1F;"></a>&#x4E24;&#x4E2A;&#x7A0B;&#x5E8F;&#x6CA1;&#x6709;&#x4E92;&#x76F8;&#x8C03;&#x7528;&#xFF0C;&#x6570;&#x636E;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x662F;&#x8FC7;&#x53BB;&#x4E86;&#xFF1F;</h1>
<p>&#x5728;&#x7EC8;&#x7AEF;&#x91CC;&#x8FD0;&#x884C; Claude Code&#xFF0C;&#x51E0;&#x79D2;&#x540E;&#x6253;&#x5F00;&#x7528;&#x4E8E;&#x67E5;&#x770B; AI &#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x7684; Langfuse&#xFF0C;&#x9875;&#x9762;&#x4E0A;&#x51FA;&#x73B0;&#x4E86;&#x6A21;&#x578B;&#x8BF7;&#x6C42;&#x3001;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x548C;&#x8017;&#x65F6;&#x3002;</p>
<p>&#x8FD9;&#x4EF6;&#x4E8B;&#x7B2C;&#x4E00;&#x773C;&#x6709;&#x70B9;&#x4E0D;&#x8BB2;&#x9053;&#x7406;&#x3002;</p>
<p>Claude Code &#x6CA1;&#x88C5; Langfuse SDK&#xFF0C;&#x4E24;&#x4E2A;&#x7A0B;&#x5E8F;&#x4E5F;&#x4E0D;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#x3002;&#x4EE3;&#x7801;&#x91CC;&#x627E;&#x4E0D;&#x5230;&#x8C01;&#x8C03;&#x7528;&#x4E86;&#x8C01;&#xFF0C;&#x6570;&#x636E;&#x5374;&#x8FC7;&#x53BB;&#x4E86;&#x3002;</p>
<p>&#x5982;&#x679C;&#x628A;&#x5B83;&#x53EA;&#x5F53;&#x6210; OpenTelemetry &#x7684;&#x914D;&#x7F6E;&#x95EE;&#x9898;&#xFF0C;&#x5F88;&#x5FEB;&#x4F1A;&#x6389;&#x8FDB;&#x4E00;&#x4E32;&#x7F29;&#x5199;&#x3002;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x8FFD;&#x95EE;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x4EF6;&#x4E8B;&#xFF1A;</p>
<blockquote>
<p>&#x4E24;&#x4E2A;&#x7CFB;&#x7EDF;&#x4E0D;&#x8BA4;&#x8BC6;&#x5BF9;&#x65B9;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4ECD;&#x7136;&#x80FD;&#x534F;&#x4F5C;&#xFF1F;</p>
</blockquote>
<p>&#x7B54;&#x6848;&#x85CF;&#x5728;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x91CC;&#x4E00;&#x4E2A;&#x5F88;&#x5E38;&#x89C1;&#x3001;&#x5374;&#x5BB9;&#x6613;&#x88AB;&#x5FFD;&#x7565;&#x7684;&#x53D8;&#x5316;&#x4E2D;&#xFF1A;&#x7CFB;&#x7EDF;&#x4E00;&#x65E6;&#x79BB;&#x5F00;&#x540C;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#xFF0C;&#x5C31;&#x4E0D;&#x80FD;&#x518D;&#x4F20;&#x5BF9;&#x8C61;&#xFF0C;&#x53EA;&#x80FD;&#x4F20;&#x6D88;&#x606F;&#x3002;</p>
<h2 id="&#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x8D70;&#x4E0D;&#x51FA;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;"><a href="#&#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x8D70;&#x4E0D;&#x51FA;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;"></a>&#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x8D70;&#x4E0D;&#x51FA;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;</h2>
<p>&#x540C;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#x91CC;&#x7684;&#x4E24;&#x4E2A;&#x6A21;&#x5757;&#xFF0C;&#x6C9F;&#x901A;&#x5F88;&#x7B80;&#x5355;&#x3002;</p>
<pre><code class="language-text">A &#x8C03;&#x7528; B
&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;
B &#x8FD4;&#x56DE;&#x7ED3;&#x679C;
</code></pre>
<p>A &#x77E5;&#x9053; B &#x7684;&#x51FD;&#x6570;&#x540D;&#x3001;&#x53C2;&#x6570;&#x548C;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x53CC;&#x65B9;&#x5171;&#x4EAB;&#x540C;&#x4E00;&#x5757;&#x5185;&#x5B58;&#xFF0C;&#x751A;&#x81F3;&#x53EF;&#x4EE5;&#x62FF;&#x5230;&#x540C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;</p>
<p>&#x8FD9;&#x79CD;&#x5173;&#x7CFB;&#x76F4;&#x63A5;&#x3001;&#x6E05;&#x695A;&#xFF0C;&#x4E5F;&#x5F88;&#x9AD8;&#x6548;&#x3002;</p>
<p>&#x95EE;&#x9898;&#x51FA;&#x73B0;&#x5728; B &#x88AB;&#x642C;&#x5230;&#x53E6;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#x4EE5;&#x540E;&#x3002;</p>
<p>&#x5185;&#x5B58;&#x5730;&#x5740;&#x53EA;&#x5BF9;&#x5F53;&#x524D;&#x8FDB;&#x7A0B;&#x6709;&#x610F;&#x4E49;&#x3002;A &#x624B;&#x91CC;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x4E0D;&#x80FD;&#x539F;&#x6837;&#x585E;&#x8FDB; B &#x7684;&#x5185;&#x5B58;&#xFF1B;A &#x4E5F;&#x4E0D;&#x80FD;&#x518D;&#x50CF;&#x8C03;&#x7528;&#x672C;&#x5730;&#x51FD;&#x6570;&#x4E00;&#x6837;&#xFF0C;&#x76F4;&#x63A5;&#x8DF3;&#x8FDB; B &#x7684;&#x4EE3;&#x7801;&#x3002;</p>
<p>&#x539F;&#x6765;&#x7684;&#x52A8;&#x4F5C;&#x5FC5;&#x987B;&#x6539;&#x5199;&#x6210;&#x4E00;&#x6761;&#x6D88;&#x606F;&#xFF1A;</p>
<pre><code class="language-text">&#x6211;&#x8981;&#x505A;&#x4EC0;&#x4E48;
&#x9700;&#x8981;&#x54EA;&#x4E9B;&#x6570;&#x636E;
&#x7ED3;&#x679C;&#x5E94;&#x8BE5;&#x600E;&#x6837;&#x8FD4;&#x56DE;
</code></pre>
<p>&#x6D88;&#x606F;&#x518D;&#x88AB;&#x7F16;&#x7801;&#xFF0C;&#x901A;&#x8FC7;&#x7F51;&#x7EDC;&#x9001;&#x5230;&#x53E6;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#x3002;</p>
<p>&#x8FD9;&#x4E00;&#x6B65;&#xFF0C;&#x624D;&#x662F;&#x534F;&#x8BAE;&#x5F00;&#x59CB;&#x51FA;&#x73B0;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<h2 id="&#x5BF9;&#x8C61;&#x8FC7;&#x4E0D;&#x53BB;&#xFF0C;&#x53EA;&#x80FD;&#x628A;&#x52A8;&#x4F5C;&#x5199;&#x6210;&#x6D88;&#x606F;"><a href="#&#x5BF9;&#x8C61;&#x8FC7;&#x4E0D;&#x53BB;&#xFF0C;&#x53EA;&#x80FD;&#x628A;&#x52A8;&#x4F5C;&#x5199;&#x6210;&#x6D88;&#x606F;"></a>&#x5BF9;&#x8C61;&#x8FC7;&#x4E0D;&#x53BB;&#xFF0C;&#x53EA;&#x80FD;&#x628A;&#x52A8;&#x4F5C;&#x5199;&#x6210;&#x6D88;&#x606F;</h2>
<p>&#x56DE;&#x5230; Claude Code&#x3002;</p>
<p>&#x5B83;&#x5B8C;&#x6210;&#x4E00;&#x6B21;&#x4EFB;&#x52A1;&#x65F6;&#xFF0C;&#x4F1A;&#x7ECF;&#x5386;&#x6A21;&#x578B;&#x8BF7;&#x6C42;&#x3001;&#x6587;&#x4EF6;&#x8BFB;&#x53D6;&#x548C;&#x547D;&#x4EE4;&#x6267;&#x884C;&#x3002;Langfuse &#x60F3;&#x5C55;&#x793A;&#x8FD9;&#x6BB5;&#x8FC7;&#x7A0B;&#xFF0C;Claude Code &#x4E0D;&#x53EF;&#x80FD;&#x628A;&#x5185;&#x5B58;&#x91CC;&#x7684;&#x6267;&#x884C;&#x5BF9;&#x8C61;&#x76F4;&#x63A5;&#x4EA4;&#x7ED9;&#x5B83;&#x3002;</p>
<p>&#x5B83;&#x53EA;&#x80FD;&#x628A;&#x8FC7;&#x7A0B;&#x5199;&#x6210;&#x8BB0;&#x5F55;&#xFF1A;</p>
<pre><code class="language-text">&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;
&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x5F00;&#x59CB;&#x3001;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x7ED3;&#x675F;
&#x8FD9;&#x4E00;&#x6B65;&#x5C5E;&#x4E8E;&#x54EA;&#x6B21;&#x4EFB;&#x52A1;
&#x4E0A;&#x4E00;&#x5C42;&#x6B65;&#x9AA4;&#x662F;&#x8C01;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x8BB0;&#x5F55;&#x6309;&#x7167;&#x5171;&#x540C;&#x7EA6;&#x5B9A;&#x7EC4;&#x7EC7;&#xFF0C;&#x518D;&#x53D1;&#x5230;&#x4E00;&#x4E2A;&#x7F51;&#x7EDC;&#x5730;&#x5740;&#x3002;Langfuse &#x6536;&#x5230;&#x4EE5;&#x540E;&#xFF0C;&#x624D;&#x80FD;&#x628A;&#x96F6;&#x6563;&#x6B65;&#x9AA4;&#x62FC;&#x56DE;&#x4E00;&#x6761;&#x8FD0;&#x884C;&#x8F68;&#x8FF9;&#x3002;</p>
<p>&#x4ECA;&#x5929;&#x8FD9;&#x5957;&#x7EA6;&#x5B9A;&#x5E38;&#x7531; OpenTelemetry &#x63D0;&#x4F9B;&#xFF0C;&#x901A;&#x5E38;&#x7B80;&#x79F0; OTel&#xFF1B;&#x8DE8;&#x7F51;&#x7EDC;&#x4F20;&#x8F93;&#x65F6;&#x4F7F;&#x7528;&#x7684;&#x534F;&#x8BAE;&#x53EB; OTLP&#x3002;</p>
<p>&#x540D;&#x8BCD;&#x53EF;&#x4EE5;&#x5148;&#x653E;&#x5728;&#x4E00;&#x8FB9;&#x3002;&#x5B83;&#x4EEC;&#x5728;&#x8FD9;&#x6B21;&#x901A;&#x4FE1;&#x91CC;&#x53EA;&#x627F;&#x62C5;&#x4E24;&#x4E2A;&#x89D2;&#x8272;&#xFF1A;</p>
<pre><code class="language-text">OTel&#xFF1A;&#x89C4;&#x5B9A;&#x8FD0;&#x884C;&#x8BB0;&#x5F55;&#x600E;&#x4E48;&#x5199;
OTLP&#xFF1A;&#x89C4;&#x5B9A;&#x8FD0;&#x884C;&#x8BB0;&#x5F55;&#x600E;&#x4E48;&#x5BC4;
</code></pre>
<p>Claude Code &#x8D1F;&#x8D23;&#x5199;&#x548C;&#x5BC4;&#xFF0C;Langfuse &#x8D1F;&#x8D23;&#x6536;&#x548C;&#x5C55;&#x793A;&#x3002;&#x4E24;&#x8FB9;&#x6CA1;&#x6709;&#x5171;&#x4EAB;&#x4EE3;&#x7801;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x5171;&#x4EAB;&#x5185;&#x5B58;&#xFF0C;&#x53EA;&#x662F;&#x90FD;&#x9075;&#x5B88;&#x540C;&#x4E00;&#x4EFD;&#x89C4;&#x5219;&#x3002;</p>
<p>&#x6240;&#x8C13; Trace Endpoint&#xFF0C;&#x4E5F;&#x53EA;&#x662F; Langfuse &#x7559;&#x7ED9;&#x8FD9;&#x4E9B;&#x8BB0;&#x5F55;&#x7684;&#x6536;&#x4EF6;&#x5730;&#x5740;&#x3002;</p>
<h2 id="&#x534F;&#x8BAE;&#x7701;&#x6389;&#x7684;&#x662F;&#x6210;&#x5BF9;&#x9002;&#x914D;"><a href="#&#x534F;&#x8BAE;&#x7701;&#x6389;&#x7684;&#x662F;&#x6210;&#x5BF9;&#x9002;&#x914D;"></a>&#x534F;&#x8BAE;&#x7701;&#x6389;&#x7684;&#x662F;&#x6210;&#x5BF9;&#x9002;&#x914D;</h2>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5171;&#x540C;&#x534F;&#x8BAE;&#xFF0C;Claude Code &#x60F3;&#x652F;&#x6301;&#x4E09;&#x4E2A;&#x89C2;&#x6D4B;&#x5E73;&#x53F0;&#xFF0C;&#x5C31;&#x8981;&#x7EF4;&#x62A4;&#x4E09;&#x5957;&#x9002;&#x914D;&#xFF1A;</p>
<pre><code class="language-text">Claude Code &#x2192; Langfuse
Claude Code &#x2192; LangSmith
Claude Code &#x2192; &#x5176;&#x4ED6;&#x5E73;&#x53F0;
</code></pre>
<p>&#x518D;&#x589E;&#x52A0;&#x4E24;&#x4E2A;&#x80FD;&#x4EA7;&#x751F;&#x8FD0;&#x884C;&#x8BB0;&#x5F55;&#x7684; Agent&#xFF0C;&#x9002;&#x914D;&#x5173;&#x7CFB;&#x5F88;&#x5FEB;&#x4F1A;&#x53D8;&#x6210;&#x4E00;&#x5F20;&#x7F51;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x6709; 3 &#x4E2A;&#x53D1;&#x9001;&#x65B9;&#x3001;3 &#x4E2A;&#x63A5;&#x6536;&#x65B9;&#xFF0C;&#x6700;&#x76F4;&#x63A5;&#x7684;&#x529E;&#x6CD5;&#x9700;&#x8981;&#x7EF4;&#x62A4; 9 &#x7EC4;&#x8FDE;&#x63A5;&#xFF1A;</p>
<pre><code class="language-text">3 &#xD7; 3 = 9
</code></pre>
<p>&#x5F15;&#x5165;&#x5171;&#x540C;&#x534F;&#x8BAE;&#x4EE5;&#x540E;&#xFF0C;&#x53D1;&#x9001;&#x65B9;&#x53EA;&#x9700;&#x8981;&#x5B66;&#x4F1A;&#x6309;&#x6807;&#x51C6;&#x53D1;&#x9001;&#xFF0C;&#x63A5;&#x6536;&#x65B9;&#x53EA;&#x9700;&#x8981;&#x5B66;&#x4F1A;&#x6309;&#x6807;&#x51C6;&#x63A5;&#x6536;&#xFF1A;</p>
<pre><code class="language-text">3 &#x4E2A;&#x53D1;&#x9001;&#x5B9E;&#x73B0; + 3 &#x4E2A;&#x63A5;&#x6536;&#x5B9E;&#x73B0; = 6
</code></pre>
<p>&#x89C4;&#x6A21;&#x7EE7;&#x7EED;&#x6269;&#x5927;&#xFF0C;&#x5DEE;&#x8DDD;&#x4F1A;&#x66F4;&#x660E;&#x663E;&#x3002;</p>
<p>&#x534F;&#x8BAE;&#x771F;&#x6B63;&#x7701;&#x6389;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x8BF7;&#x6C42;&#x91CC;&#x7684;&#x51E0;&#x884C;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x6BCF;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x4EA7;&#x54C1;&#xFF0C;&#x90FD;&#x8981;&#x8BA9;&#x5B83;&#x548C;&#x6240;&#x6709;&#x73B0;&#x6709;&#x4EA7;&#x54C1;&#x4E92;&#x76F8;&#x8BA4;&#x8BC6;&#x7684;&#x6210;&#x672C;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x5F88;&#x591A;&#x6846;&#x67B6;&#x559C;&#x6B22;&#x628A;&#x6A21;&#x578B;&#x3001;&#x5DE5;&#x5177;&#x3001;&#x5B58;&#x50A8;&#x548C;&#x89C2;&#x6D4B;&#x505A;&#x6210;&#x53EF;&#x66FF;&#x6362;&#x7EC4;&#x4EF6;&#x3002;&#x7EC4;&#x4EF6;&#x4E0D;&#x518D;&#x4F9D;&#x8D56;&#x67D0;&#x4E2A;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#xFF0C;&#x53EA;&#x4F9D;&#x8D56;&#x4E00;&#x4EFD;&#x76F8;&#x5BF9;&#x7A33;&#x5B9A;&#x7684;&#x5951;&#x7EA6;&#x3002;</p>
<p>&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x6362;&#xFF0C;&#x89C2;&#x6D4B;&#x5E73;&#x53F0;&#x53EF;&#x4EE5;&#x6362;&#xFF0C;&#x53EA;&#x8981;&#x53CC;&#x65B9;&#x4ECD;&#x7136;&#x8BF4;&#x540C;&#x4E00;&#x79CD;&#x201C;&#x8BED;&#x8A00;&#x201D;&#xFF0C;&#x7CFB;&#x7EDF;&#x5C31;&#x4E0D;&#x5FC5;&#x6574;&#x4F53;&#x91CD;&#x5199;&#x3002;</p>
<h2 id="&#x4E0D;&#x662F;&#x6240;&#x6709;&#x8FDE;&#x63A5;&#x90FD;&#x503C;&#x5F97;&#x534F;&#x8BAE;&#x5316;"><a href="#&#x4E0D;&#x662F;&#x6240;&#x6709;&#x8FDE;&#x63A5;&#x90FD;&#x503C;&#x5F97;&#x534F;&#x8BAE;&#x5316;"></a>&#x4E0D;&#x662F;&#x6240;&#x6709;&#x8FDE;&#x63A5;&#x90FD;&#x503C;&#x5F97;&#x534F;&#x8BAE;&#x5316;</h2>
<p>&#x534F;&#x8BAE;&#x4E5F;&#x4F1A;&#x5E26;&#x6765;&#x6210;&#x672C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x4E24;&#x4E2A;&#x6A21;&#x5757;&#x59CB;&#x7EC8;&#x8FD0;&#x884C;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#xFF0C;&#x7531;&#x540C;&#x4E00;&#x4E2A;&#x56E2;&#x961F;&#x7EF4;&#x62A4;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x88AB;&#x5355;&#x72EC;&#x66FF;&#x6362;&#xFF0C;&#x4E00;&#x6B21;&#x666E;&#x901A;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x901A;&#x5E38;&#x66F4;&#x7B80;&#x5355;&#x3002;&#x4E3A;&#x4E86;&#x201C;&#x67B6;&#x6784;&#x6F02;&#x4EAE;&#x201D;&#x5F3A;&#x884C;&#x589E;&#x52A0;&#x6D88;&#x606F;&#x683C;&#x5F0F;&#x3001;&#x7248;&#x672C;&#x517C;&#x5BB9;&#x548C;&#x7F51;&#x7EDC;&#x9519;&#x8BEF;&#xFF0C;&#x53EA;&#x4F1A;&#x628A;&#x539F;&#x672C;&#x6E05;&#x695A;&#x7684;&#x5173;&#x7CFB;&#x7ED5;&#x8FDC;&#x3002;</p>
<p>&#x534F;&#x8BAE;&#x5F00;&#x59CB;&#x503C;&#x5F97;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x8FB9;&#x754C;&#x771F;&#x7684;&#x53D1;&#x751F;&#x4E86;&#x53D8;&#x5316;&#xFF1A;</p>
<pre><code class="language-text">&#x7EC4;&#x4EF6;&#x9700;&#x8981;&#x72EC;&#x7ACB;&#x90E8;&#x7F72;
&#x53CC;&#x65B9;&#x7531;&#x4E0D;&#x540C;&#x56E2;&#x961F;&#x7EF4;&#x62A4;
&#x540C;&#x4E00;&#x80FD;&#x529B;&#x5B58;&#x5728;&#x591A;&#x79CD;&#x5B9E;&#x73B0;
&#x53D1;&#x9001;&#x65B9;&#x548C;&#x63A5;&#x6536;&#x65B9;&#x4F1A;&#x5404;&#x81EA;&#x5347;&#x7EA7;
</code></pre>
<p>&#x8FD9;&#x65F6;&#xFF0C;&#x76F4;&#x63A5;&#x4F9D;&#x8D56;&#x5177;&#x4F53;&#x4EE3;&#x7801;&#x624D;&#x4F1A;&#x6210;&#x4E3A;&#x8D1F;&#x62C5;&#x3002;&#x534F;&#x8BAE;&#x4E70;&#x6765;&#x7684;&#x4E0D;&#x662F;&#x9AD8;&#x7EA7;&#x611F;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x4E24;&#x8FB9;&#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x540C;&#x65F6;&#x523B;&#x3001;&#x4EE5;&#x4E0D;&#x540C;&#x901F;&#x5EA6;&#x53D8;&#x5316;&#x3002;</p>
<h2 id="&#x534F;&#x8BAE;&#x6CA1;&#x6709;&#x6D88;&#x9664;&#x4F9D;&#x8D56;&#xFF0C;&#x53EA;&#x662F;&#x6362;&#x4E86;&#x4F9D;&#x8D56;&#x5BF9;&#x8C61;"><a href="#&#x534F;&#x8BAE;&#x6CA1;&#x6709;&#x6D88;&#x9664;&#x4F9D;&#x8D56;&#xFF0C;&#x53EA;&#x662F;&#x6362;&#x4E86;&#x4F9D;&#x8D56;&#x5BF9;&#x8C61;"></a>&#x534F;&#x8BAE;&#x6CA1;&#x6709;&#x6D88;&#x9664;&#x4F9D;&#x8D56;&#xFF0C;&#x53EA;&#x662F;&#x6362;&#x4E86;&#x4F9D;&#x8D56;&#x5BF9;&#x8C61;</h2>
<p>&#x8FD9;&#x91CC;&#x5F88;&#x5BB9;&#x6613;&#x4EA7;&#x751F;&#x53E6;&#x4E00;&#x4E2A;&#x8BEF;&#x89E3;&#xFF1A;&#x6709;&#x4E86;&#x534F;&#x8BAE;&#xFF0C;&#x7CFB;&#x7EDF;&#x5C31;&#x89E3;&#x8026;&#x4E86;&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x8FD9;&#x4E48;&#x5F7B;&#x5E95;&#x3002;</p>
<p>Claude Code &#x4E0D;&#x518D;&#x4F9D;&#x8D56; Langfuse &#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x5374;&#x5F00;&#x59CB;&#x4F9D;&#x8D56;&#x534F;&#x8BAE;&#x89C4;&#x5B9A;&#x7684;&#x5B57;&#x6BB5;&#x3001;&#x7248;&#x672C;&#x548C;&#x8BED;&#x4E49;&#xFF1B;Langfuse&#x4E5F;&#x5FC5;&#x987B;&#x6B63;&#x786E;&#x7406;&#x89E3;&#x8FD9;&#x4E9B;&#x7EA6;&#x5B9A;&#x3002;</p>
<p>&#x539F;&#x6765;&#x7684;&#x4F9D;&#x8D56;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x6211;&#x5FC5;&#x987B;&#x77E5;&#x9053;&#x4F60;&#x662F;&#x8C01;&#xFF0C;&#x4EE5;&#x53CA;&#x600E;&#x6837;&#x8C03;&#x7528;&#x4F60;
</code></pre>
<p>&#x534F;&#x8BAE;&#x5316;&#x4E4B;&#x540E;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x6211;&#x4E0D;&#x5FC5;&#x77E5;&#x9053;&#x4F60;&#x662F;&#x8C01;&#xFF0C;&#x4F46;&#x6211;&#x4EEC;&#x5FC5;&#x987B;&#x540C;&#x610F;&#x8FD9;&#x6761;&#x6D88;&#x606F;&#x662F;&#x4EC0;&#x4E48;&#x610F;&#x601D;
</code></pre>
<p>&#x8026;&#x5408;&#x6CA1;&#x6709;&#x6D88;&#x5931;&#xFF0C;&#x53EA;&#x662F;&#x4ECE;&#x5177;&#x4F53;&#x4EA7;&#x54C1;&#x79FB;&#x5230;&#x4E86;&#x5171;&#x540C;&#x89C4;&#x5219;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x534F;&#x8BAE;&#x8BBE;&#x8BA1;&#x6700;&#x96BE;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<p>&#x683C;&#x5F0F;&#x7EDF;&#x4E00;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x8BED;&#x4E49;&#x4E00;&#x5B9A;&#x4E00;&#x81F4;&#x3002;&#x4E00;&#x6B21;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x5728;&#x6280;&#x672F;&#x4E0A;&#x8FD4;&#x56DE;&#x6210;&#x529F;&#xFF0C;&#x4E0D;&#x4EE3;&#x8868;&#x5B83;&#x5B8C;&#x6210;&#x4E86;&#x7528;&#x6237;&#x771F;&#x6B63;&#x60F3;&#x8981;&#x7684;&#x4E8B;&#x60C5;&#xFF1B;&#x4E00;&#x6761;&#x8FD0;&#x884C;&#x8BB0;&#x5F55;&#x5B8C;&#x6574;&#x9001;&#x8FBE;&#xFF0C;&#x4E5F;&#x4E0D;&#x4EE3;&#x8868;&#x7CFB;&#x7EDF;&#x884C;&#x4E3A;&#x5C31;&#x662F;&#x6B63;&#x786E;&#x7684;&#x3002;</p>
<p>&#x534F;&#x8BAE;&#x80FD;&#x4FDD;&#x8BC1;&#x6D88;&#x606F;&#x53EF;&#x4EE5;&#x88AB;&#x4EA4;&#x6362;&#xFF0C;&#x5374;&#x4E0D;&#x80FD;&#x66FF;&#x53C2;&#x4E0E;&#x8005;&#x5224;&#x65AD;&#x4E1A;&#x52A1;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x89C4;&#x5219;&#x5B9A;&#x5F97;&#x592A;&#x5C11;&#xFF0C;&#x4E0D;&#x540C;&#x7CFB;&#x7EDF;&#x4F1A;&#x5404;&#x81EA;&#x89E3;&#x91CA;&#xFF1B;&#x89C4;&#x5219;&#x5B9A;&#x5F97;&#x592A;&#x7EC6;&#xFF0C;&#x53C8;&#x4F1A;&#x628A;&#x6240;&#x6709;&#x5B9E;&#x73B0;&#x9501;&#x5728;&#x540C;&#x4E00;&#x79CD;&#x505A;&#x6CD5;&#x4E0A;&#x3002;&#x534F;&#x8BAE;&#x5FC5;&#x987B;&#x5728;&#x201C;&#x5927;&#x5BB6;&#x90FD;&#x80FD;&#x63A5;&#x5165;&#x201D;&#x548C;&#x201C;&#x63A5;&#x5165;&#x4EE5;&#x540E;&#x4E0D;&#x4F1A;&#x5404;&#x8BF4;&#x5404;&#x8BDD;&#x201D;&#x4E4B;&#x95F4;&#x627E;&#x5E73;&#x8861;&#x3002;</p>
<h2 id="&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x91CD;&#x70B9;&#xFF0C;&#x662F;&#x8BA9;&#x8C01;&#x4E0D;&#x5FC5;&#x8BA4;&#x8BC6;&#x8C01;"><a href="#&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x91CD;&#x70B9;&#xFF0C;&#x662F;&#x8BA9;&#x8C01;&#x4E0D;&#x5FC5;&#x8BA4;&#x8BC6;&#x8C01;"></a>&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7684;&#x91CD;&#x70B9;&#xFF0C;&#x662F;&#x8BA9;&#x8C01;&#x4E0D;&#x5FC5;&#x8BA4;&#x8BC6;&#x8C01;</h2>
<p>&#x518D;&#x770B; Claude Code &#x548C; Langfuse&#xFF0C;&#x6574;&#x6761;&#x94FE;&#x8DEF;&#x5176;&#x5B9E;&#x5F88;&#x77ED;&#xFF1A;</p>
<pre><code class="language-text">Claude Code
&#x628A;&#x8FD0;&#x884C;&#x8FC7;&#x7A0B;&#x5199;&#x6210;&#x6807;&#x51C6;&#x6D88;&#x606F;
        &#x2193;
&#x901A;&#x8FC7;&#x534F;&#x8BAE;&#x53D1;&#x9001;
        &#x2193;
Langfuse
&#x6309;&#x540C;&#x4E00;&#x89C4;&#x5219;&#x63A5;&#x6536;&#x548C;&#x8FD8;&#x539F;
</code></pre>
<p>&#x5B83;&#x4EEC;&#x80FD;&#x591F;&#x534F;&#x4F5C;&#xFF0C;&#x4E0D;&#x662F;&#x56E0;&#x4E3A;&#x85CF;&#x7740;&#x4E00;&#x6761;&#x6211;&#x4EEC;&#x6CA1;&#x627E;&#x5230;&#x7684;&#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x800C;&#x662F;&#x56E0;&#x4E3A;&#x53CC;&#x65B9;&#x90FD;&#x8BA4;&#x8BC6;&#x7B2C;&#x4E09;&#x6837;&#x4E1C;&#x897F;&#xFF1A;&#x534F;&#x8BAE;&#x3002;</p>
<p>&#x8FD9;&#x7ED9;&#x6846;&#x67B6;&#x8BBE;&#x8BA1;&#x7559;&#x4E0B;&#x4E00;&#x4E2A;&#x5F88;&#x5B9E;&#x7528;&#x7684;&#x5224;&#x65AD;&#x3002;</p>
<p>&#x5F53;&#x4E24;&#x4E2A;&#x7EC4;&#x4EF6;&#x603B;&#x8981;&#x4E00;&#x8D77;&#x4FEE;&#x6539;&#x3001;&#x589E;&#x52A0;&#x4E00;&#x79CD;&#x5B9E;&#x73B0;&#x5C31;&#x8981;&#x6539;&#x904D;&#x6574;&#x4E2A;&#x7CFB;&#x7EDF;&#x65F6;&#xFF0C;&#x95EE;&#x9898;&#x53EF;&#x80FD;&#x4E0D;&#x5728;&#x6A21;&#x5757;&#x62C6;&#x5F97;&#x4E0D;&#x591F;&#x591A;&#xFF0C;&#x800C;&#x5728;&#x5B83;&#x4EEC;&#x4ECD;&#x7136;&#x901A;&#x8FC7;&#x5F7C;&#x6B64;&#x7684;&#x5177;&#x4F53;&#x4EE3;&#x7801;&#x8FDE;&#x63A5;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x7A33;&#x5B9A;&#x7684;&#x8FB9;&#x754C;&#xFF0C;&#x9700;&#x8981;&#x56DE;&#x7B54;&#xFF1A;</p>
<pre><code class="language-text">&#x8DE8;&#x8FB9;&#x754C;&#x4F20;&#x9012;&#x7684;&#x7A76;&#x7ADF;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;
&#x53CC;&#x65B9;&#x6700;&#x5C11;&#x9700;&#x8981;&#x5171;&#x540C;&#x7406;&#x89E3;&#x4EC0;&#x4E48;&#xFF1F;
&#x54EA;&#x4E9B;&#x5B9E;&#x73B0;&#x7EC6;&#x8282;&#x53EF;&#x4EE5;&#x7559;&#x5728;&#x8FB9;&#x754C;&#x540E;&#x9762;&#xFF1F;
</code></pre>
<p>&#x4E00;&#x4E2A;&#x597D;&#x7684;&#x534F;&#x8BAE;&#x4E0D;&#x4F1A;&#x8BA9;&#x7CFB;&#x7EDF;&#x5B8C;&#x5168;&#x6CA1;&#x6709;&#x4F9D;&#x8D56;&#x3002;&#x5B83;&#x53EA;&#x662F;&#x8BA9;&#x53D1;&#x9001;&#x65B9;&#x4E0D;&#x5FC5;&#x7406;&#x89E3;&#x63A5;&#x6536;&#x65B9;&#x5185;&#x90E8;&#x600E;&#x4E48;&#x5B9E;&#x73B0;&#xFF0C;&#x63A5;&#x6536;&#x65B9;&#x4E5F;&#x4E0D;&#x5FC5;&#x53C2;&#x4E0E;&#x53D1;&#x9001;&#x65B9;&#x600E;&#x6837;&#x8FD0;&#x884C;&#x3002;</p>
<p>&#x540C;&#x4E00;&#x4E2A;&#x8FDB;&#x7A0B;&#x91CC;&#xFF0C;&#x7A0B;&#x5E8F;&#x53EF;&#x4EE5;&#x5171;&#x4EAB;&#x5BF9;&#x8C61;&#x3002;</p>
<p>&#x79BB;&#x5F00;&#x8FDB;&#x7A0B;&#x4EE5;&#x540E;&#xFF0C;&#x7CFB;&#x7EDF;&#x53EA;&#x80FD;&#x5171;&#x4EAB;&#x7EA6;&#x5B9A;&#x3002;</p>
<p>&#x8FD9;&#x5C31;&#x662F;&#x6570;&#x636E;&#x660E;&#x660E;&#x6CA1;&#x6709;&#x7ECF;&#x8FC7;&#x76F4;&#x63A5;&#x8C03;&#x7528;&#xFF0C;&#x5374;&#x4ECD;&#x7136;&#x80FD;&#x591F;&#x5230;&#x8FBE;&#x53E6;&#x4E00;&#x8FB9;&#x7684;&#x539F;&#x56E0;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>Anthropic&#xFF0C;Monitoring Claude Code&#xFF1A;https://code.claude.com/docs/en/monitoring-usage</li>
<li>OpenTelemetry&#xFF0C;Concepts&#xFF1A;https://opentelemetry.io/docs/concepts/</li>
<li>OpenTelemetry&#xFF0C;Components&#xFF1A;https://opentelemetry.io/docs/concepts/components/</li>
<li>Langfuse&#xFF0C;Native OpenTelemetry Integration&#xFF1A;https://langfuse.com/integrations/native/opentelemetry</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;</em></p>
<h2 id="&#x5F80;&#x671F;&#x63A8;&#x8350;"><a href="#&#x5F80;&#x671F;&#x63A8;&#x8350;"></a>&#x5F80;&#x671F;&#x63A8;&#x8350;</h2>
<ul>
<li><a href="./DeepSeek%20%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%9F%E5%BC%80%E5%A7%8B%E9%80%A0%20Harness%EF%BC%9F%E5%9B%A0%E4%B8%BA%E6%A8%A1%E5%9E%8B%E5%B7%B2%E7%BB%8F%E8%A7%A3%E9%87%8A%E4%B8%8D%E4%BA%86%20Agent%20%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%BD%E7%94%A8.md">DeepSeek &#x4E3A;&#x4EC0;&#x4E48;&#x4E5F;&#x5F00;&#x59CB;&#x9020; Harness&#xFF1F;&#x56E0;&#x4E3A;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x89E3;&#x91CA;&#x4E0D;&#x4E86; Agent &#x4E3A;&#x4EC0;&#x4E48;&#x597D;&#x7528;</a></li>
<li><a href="../ai-%E7%AC%94%E8%AE%B0/MCP%20%E5%8D%87%E7%BA%A7%E5%90%8E%EF%BC%8CAI%20%E4%BA%A7%E5%93%81%E8%83%BD%E7%9C%9F%E6%AD%A3%E8%B5%B0%E5%87%BA%E8%81%8A%E5%A4%A9%E6%A1%86%E5%90%97%EF%BC%9F.md">MCP &#x5347;&#x7EA7;&#x540E;&#xFF0C;AI &#x4EA7;&#x54C1;&#x5982;&#x4F55;&#x8D70;&#x51FA;&#x804A;&#x5929;&#x6846;&#xFF1F;</a></li>
</ul>
`,E=[{level:1,title:"两个程序没有互相调用，数据为什么还是过去了？",children:[{level:2,title:"直接调用，走不出一个进程",children:[]},{level:2,title:"对象过不去，只能把动作写成消息",children:[]},{level:2,title:"协议省掉的是成对适配",children:[]},{level:2,title:"不是所有连接都值得协议化",children:[]},{level:2,title:"协议没有消除依赖，只是换了依赖对象",children:[]},{level:2,title:"框架设计的重点，是让谁不必认识谁",children:[]},{level:2,title:"参考资料",children:[]},{level:2,title:"往期推荐",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
