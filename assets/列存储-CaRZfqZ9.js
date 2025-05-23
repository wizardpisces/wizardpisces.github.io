const x={},F=`<p>&#x4EC0;&#x4E48;&#x662F;&#x5217;&#x5B58;&#x50A8;&#xFF1F;&#x8DDF;&#x4F20;&#x7EDF;&#x5B58;&#x50A8;&#x5565;&#x533A;&#x522B;&#xFF1F;&#x4E3A;&#x5565;&#x5217;&#x5B58;&#x50A8;&#x80FD;&#x66F4;&#x52A0;&#x5FEB;&#x901F;&#x54CD;&#x5E94;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#xFF1F;</p>
<p>&#x5217;&#x5B58;&#x50A8;&#xFF08;Columnar Storage&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x6570;&#x636E;&#x5B58;&#x50A8;&#x65B9;&#x5F0F;&#xFF0C;&#x4E0E;&#x4F20;&#x7EDF;&#x7684;&#x884C;&#x5B58;&#x50A8;&#xFF08;Row Storage&#xFF09;&#x6709;&#x663E;&#x8457;&#x533A;&#x522B;&#x3002;&#x5217;&#x5B58;&#x50A8;&#x5728;&#x5904;&#x7406;&#x5206;&#x6790;&#x578B;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;&#x65F6;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x6D89;&#x53CA;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x8868;&#x73B0;&#x5F97;&#x66F4;&#x52A0;&#x9AD8;&#x6548;&#x3002;</p>
<h3 id="&#x5217;&#x5B58;&#x50A8;&#xFF08;Columnar Storage&#xFF09;"><a href="#&#x5217;&#x5B58;&#x50A8;&#xFF08;Columnar Storage&#xFF09;"></a>&#x5217;&#x5B58;&#x50A8;&#xFF08;Columnar Storage&#xFF09;</h3>
<p>&#x5728;&#x5217;&#x5B58;&#x50A8;&#x4E2D;&#xFF0C;&#x6570;&#x636E;&#x6309;&#x5217;&#x5B58;&#x50A8;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6309;&#x884C;&#x5B58;&#x50A8;&#x3002;&#x6BCF;&#x4E00;&#x5217;&#x7684;&#x6570;&#x636E;&#x5B58;&#x50A8;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x6240;&#x6709;&#x540C;&#x4E00;&#x5217;&#x7684;&#x6570;&#x636E;&#x90FD;&#x8FDE;&#x7EED;&#x5B58;&#x50A8;&#x5728;&#x78C1;&#x76D8;&#x4E0A;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5BF9;&#x4E8E;&#x4E00;&#x4E2A;&#x6709;&#x56DB;&#x4E2A;&#x5217;&#xFF08;A&#x3001;B&#x3001;C&#x3001;D&#xFF09;&#x7684;&#x8868;&#xFF0C;&#x6570;&#x636E;&#x5C06;&#x6309;&#x5982;&#x4E0B;&#x65B9;&#x5F0F;&#x5B58;&#x50A8;&#xFF1A;</p>
<pre><code>Column A: A1, A2, A3, A4, ...
Column B: B1, B2, B3, B4, ...
Column C: C1, C2, C3, C4, ...
Column D: D1, D2, D3, D4, ...
</code></pre>
<h3 id="&#x884C;&#x5B58;&#x50A8;&#xFF08;Row Storage&#xFF09;"><a href="#&#x884C;&#x5B58;&#x50A8;&#xFF08;Row Storage&#xFF09;"></a>&#x884C;&#x5B58;&#x50A8;&#xFF08;Row Storage&#xFF09;</h3>
<p>&#x5728;&#x4F20;&#x7EDF;&#x7684;&#x884C;&#x5B58;&#x50A8;&#x4E2D;&#xFF0C;&#x6570;&#x636E;&#x6309;&#x884C;&#x5B58;&#x50A8;&#xFF0C;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x6570;&#x636E;&#x5B58;&#x50A8;&#x5728;&#x4E00;&#x8D77;&#x3002;&#x5BF9;&#x4E8E;&#x540C;&#x6837;&#x7684;&#x56DB;&#x5217;&#x8868;&#xFF0C;&#x6570;&#x636E;&#x5C06;&#x6309;&#x5982;&#x4E0B;&#x65B9;&#x5F0F;&#x5B58;&#x50A8;&#xFF1A;</p>
<pre><code>Row 1: A1, B1, C1, D1
Row 2: A2, B2, C2, D2
Row 3: A3, B3, C3, D3
Row 4: A4, B4, C4, D4
</code></pre>
<h3 id="&#x533A;&#x522B;"><a href="#&#x533A;&#x522B;"></a>&#x533A;&#x522B;</h3>
<ol>
<li>
<p><strong>&#x6570;&#x636E;&#x5B58;&#x50A8;&#x65B9;&#x5F0F;</strong></p>
<ul>
<li><strong>&#x884C;&#x5B58;&#x50A8;</strong>&#xFF1A;&#x6240;&#x6709;&#x5217;&#x7684;&#x503C;&#x6309;&#x884C;&#x5B58;&#x50A8;&#x5728;&#x4E00;&#x8D77;&#x3002;</li>
<li><strong>&#x5217;&#x5B58;&#x50A8;</strong>&#xFF1A;&#x540C;&#x4E00;&#x5217;&#x7684;&#x503C;&#x6309;&#x5217;&#x5B58;&#x50A8;&#x5728;&#x4E00;&#x8D77;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x9002;&#x7528;&#x573A;&#x666F;</strong></p>
<ul>
<li><strong>&#x884C;&#x5B58;&#x50A8;</strong>&#xFF1A;&#x9002;&#x7528;&#x4E8E;OLTP&#xFF08;&#x5728;&#x7EBF;&#x4E8B;&#x52A1;&#x5904;&#x7406;&#xFF09;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;&#xFF0C;&#x4F8B;&#x5982;&#x9891;&#x7E41;&#x7684;&#x63D2;&#x5165;&#x3001;&#x66F4;&#x65B0;&#x548C;&#x5220;&#x9664;&#x64CD;&#x4F5C;&#x3002;</li>
<li><strong>&#x5217;&#x5B58;&#x50A8;</strong>&#xFF1A;&#x9002;&#x7528;&#x4E8E;OLAP&#xFF08;&#x5728;&#x7EBF;&#x5206;&#x6790;&#x5904;&#x7406;&#xFF09;&#x5DE5;&#x4F5C;&#x8D1F;&#x8F7D;&#xFF0C;&#x4F8B;&#x5982;&#x590D;&#x6742;&#x7684;&#x67E5;&#x8BE2;&#x548C;&#x62A5;&#x8868;&#x5206;&#x6790;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x5217;&#x5B58;&#x50A8;&#x54CD;&#x5E94;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x66F4;&#x5FEB;&#x901F;&#x7684;&#x539F;&#x56E0;"><a href="#&#x5217;&#x5B58;&#x50A8;&#x54CD;&#x5E94;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x66F4;&#x5FEB;&#x901F;&#x7684;&#x539F;&#x56E0;"></a>&#x5217;&#x5B58;&#x50A8;&#x54CD;&#x5E94;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x66F4;&#x5FEB;&#x901F;&#x7684;&#x539F;&#x56E0;</h3>
<ol>
<li>
<p><strong>&#x67E5;&#x8BE2;&#x6548;&#x7387;</strong></p>
<ul>
<li>&#x5728;&#x5206;&#x6790;&#x578B;&#x67E5;&#x8BE2;&#x4E2D;&#xFF0C;&#x901A;&#x5E38;&#x53EA;&#x6D89;&#x53CA;&#x5C11;&#x91CF;&#x7684;&#x5217;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x8BA1;&#x7B97;&#x67D0;&#x4E2A;&#x7EDF;&#x8BA1;&#x6570;&#x636E;&#x53EA;&#x9700;&#x8BBF;&#x95EE;&#x7279;&#x5B9A;&#x7684;&#x5217;&#x3002;&#x5217;&#x5B58;&#x50A8;&#x4EC5;&#x8BFB;&#x53D6;&#x9700;&#x8981;&#x7684;&#x5217;&#x6570;&#x636E;&#xFF0C;&#x51CF;&#x5C11;&#x4E86;I/O&#x64CD;&#x4F5C;&#x3002;</li>
<li>&#x884C;&#x5B58;&#x50A8;&#x5219;&#x9700;&#x8981;&#x8BFB;&#x53D6;&#x6574;&#x884C;&#x6570;&#x636E;&#xFF0C;&#x5373;&#x4F7F;&#x53EA;&#x9700;&#x8981;&#x5176;&#x4E2D;&#x4E00;&#x4E24;&#x5217;&#xFF0C;&#x4E5F;&#x8981;&#x8BFB;&#x53D6;&#x6574;&#x884C;&#xFF0C;&#x5BFC;&#x81F4;&#x4E0D;&#x5FC5;&#x8981;&#x7684;I/O&#x5F00;&#x9500;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x6570;&#x636E;&#x538B;&#x7F29;</strong></p>
<ul>
<li>&#x5217;&#x5B58;&#x50A8;&#x7684;&#x540C;&#x4E00;&#x5217;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x76F8;&#x540C;&#x4E14;&#x7ECF;&#x5E38;&#x6709;&#x76F8;&#x4F3C;&#x7684;&#x503C;&#xFF0C;&#x538B;&#x7F29;&#x6548;&#x679C;&#x66F4;&#x597D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x8BB8;&#x591A;&#x91CD;&#x590D;&#x503C;&#x7684;&#x5217;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;RLE&#xFF08;Run-Length Encoding&#xFF09;&#x7B49;&#x538B;&#x7F29;&#x7B97;&#x6CD5;&#x663E;&#x8457;&#x51CF;&#x5C11;&#x5B58;&#x50A8;&#x7A7A;&#x95F4;&#x3002;</li>
<li>&#x884C;&#x5B58;&#x50A8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#x6DF7;&#x6742;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x538B;&#x7F29;&#x6548;&#x7387;&#x4F4E;&#x4E0B;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5411;&#x91CF;&#x5316;&#x5904;&#x7406;</strong></p>
<ul>
<li>&#x5217;&#x5B58;&#x50A8;&#x7CFB;&#x7EDF;&#x53EF;&#x4EE5;&#x5229;&#x7528;&#x5411;&#x91CF;&#x5316;&#x5904;&#x7406;&#x6280;&#x672F;&#xFF0C;&#x540C;&#x65F6;&#x5904;&#x7406;&#x4E00;&#x6279;&#x5217;&#x6570;&#x636E;&#xFF0C;&#x63D0;&#x9AD8;CPU&#x4F7F;&#x7528;&#x6548;&#x7387;&#x3002;</li>
<li>&#x884C;&#x5B58;&#x50A8;&#x5904;&#x7406;&#x6BCF;&#x884C;&#x6570;&#x636E;&#x65F6;&#x9700;&#x8981;&#x591A;&#x6B21;&#x52A0;&#x8F7D;&#x548C;&#x5B58;&#x50A8;&#xFF0C;&#x6548;&#x7387;&#x8F83;&#x4F4E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7F13;&#x5B58;&#x5229;&#x7528;</strong></p>
<ul>
<li>&#x7531;&#x4E8E;&#x5217;&#x5B58;&#x50A8;&#x6309;&#x5217;&#x8FDE;&#x7EED;&#x5B58;&#x50A8;&#xFF0C;&#x7F13;&#x5B58;&#x547D;&#x4E2D;&#x7387;&#x9AD8;&#xFF0C;&#x51CF;&#x5C11;&#x4E86;&#x5BF9;&#x78C1;&#x76D8;&#x7684;&#x8BBF;&#x95EE;&#x3002;</li>
<li>&#x884C;&#x5B58;&#x50A8;&#x6309;&#x884C;&#x5B58;&#x50A8;&#xFF0C;&#x7F13;&#x5B58;&#x547D;&#x4E2D;&#x7387;&#x8F83;&#x4F4E;&#xFF0C;&#x9700;&#x8981;&#x9891;&#x7E41;&#x8BBF;&#x95EE;&#x78C1;&#x76D8;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x5217;&#x5B58;&#x50A8;&#x901A;&#x8FC7;&#x4F18;&#x5316;I/O&#x64CD;&#x4F5C;&#x3001;&#x63D0;&#x9AD8;&#x538B;&#x7F29;&#x6548;&#x7387;&#x3001;&#x5229;&#x7528;&#x5411;&#x91CF;&#x5316;&#x5904;&#x7406;&#x548C;&#x66F4;&#x597D;&#x7684;&#x7F13;&#x5B58;&#x5229;&#x7528;&#xFF0C;&#x663E;&#x8457;&#x63D0;&#x9AD8;&#x4E86;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x7684;&#x54CD;&#x5E94;&#x901F;&#x5EA6;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5B83;&#x7279;&#x522B;&#x9002;&#x7528;&#x4E8E;&#x9700;&#x8981;&#x8FDB;&#x884C;&#x5927;&#x91CF;&#x8BFB;&#x53D6;&#x548C;&#x5206;&#x6790;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x5982;&#x6570;&#x636E;&#x4ED3;&#x5E93;&#x3001;&#x5546;&#x4E1A;&#x667A;&#x80FD;&#x548C;&#x5B9E;&#x65F6;&#x5206;&#x6790;&#x7CFB;&#x7EDF;&#x3002;</p>
<h3 id="&#x793A;&#x4F8B;"><a href="#&#x793A;&#x4F8B;"></a>&#x793A;&#x4F8B;</h3>
<p>&#x5047;&#x8BBE;&#x6709;&#x4E00;&#x4E2A;&#x5927;&#x578B;&#x9500;&#x552E;&#x6570;&#x636E;&#x8868;&#xFF0C;&#x5305;&#x542B;&#x65E5;&#x671F;&#x3001;&#x4EA7;&#x54C1;ID&#x3001;&#x9500;&#x552E;&#x6570;&#x91CF;&#x548C;&#x9500;&#x552E;&#x989D;&#x56DB;&#x4E2A;&#x5B57;&#x6BB5;&#xFF1A;</p>
<p><strong>&#x884C;&#x5B58;&#x50A8;&#xFF1A;</strong></p>
<pre><code>2023-01-01, 1001, 10, 500
2023-01-02, 1002, 15, 750
2023-01-03, 1001, 8, 400
</code></pre>
<p><strong>&#x5217;&#x5B58;&#x50A8;&#xFF1A;</strong></p>
<pre><code>&#x65E5;&#x671F;&#xFF1A;2023-01-01, 2023-01-02, 2023-01-03
&#x4EA7;&#x54C1;ID&#xFF1A;1001, 1002, 1001
&#x9500;&#x552E;&#x6570;&#x91CF;&#xFF1A;10, 15, 8
&#x9500;&#x552E;&#x989D;&#xFF1A;500, 750, 400
</code></pre>
<p>&#x67E5;&#x8BE2;&#x603B;&#x9500;&#x552E;&#x989D;&#x65F6;&#xFF0C;&#x5217;&#x5B58;&#x50A8;&#x53EA;&#x9700;&#x8BFB;&#x53D6;&#x201C;&#x9500;&#x552E;&#x989D;&#x201D;&#x5217;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x800C;&#x884C;&#x5B58;&#x50A8;&#x5219;&#x9700;&#x8BFB;&#x53D6;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x6240;&#x6709;&#x5B57;&#x6BB5;&#xFF0C;&#x660E;&#x663E;&#x589E;&#x52A0;&#x4E86;I/O&#x5F00;&#x9500;&#x548C;&#x5904;&#x7406;&#x65F6;&#x95F4;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x5217;&#x5B58;&#x50A8;&#x5728;&#x590D;&#x6742;&#x67E5;&#x8BE2;&#x4E2D;&#x8868;&#x73B0;&#x66F4;&#x9AD8;&#x6548;&#x7684;&#x539F;&#x56E0;&#x3002;</p>
`,E=[{level:3,title:"列存储（Columnar Storage）",children:[]},{level:3,title:"行存储（Row Storage）",children:[]},{level:3,title:"区别",children:[]},{level:3,title:"列存储响应复杂查询更快速的原因",children:[]},{level:3,title:"总结",children:[]},{level:3,title:"示例",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
