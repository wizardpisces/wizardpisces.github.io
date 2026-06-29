const x={},F=`<h1 id="&#x4ECE; AI Agent &#x7684; BubbleWrap &#x6C99;&#x7BB1;&#xFF0C;&#x770B;&#x201C;&#x4E16;&#x754C;&#x4E0E;&#x5730;&#x56FE;&#x201D;&#x7684;&#x9694;&#x79BB;&#x54F2;&#x5B66;"><a href="#&#x4ECE; AI Agent &#x7684; BubbleWrap &#x6C99;&#x7BB1;&#xFF0C;&#x770B;&#x201C;&#x4E16;&#x754C;&#x4E0E;&#x5730;&#x56FE;&#x201D;&#x7684;&#x9694;&#x79BB;&#x54F2;&#x5B66;"></a>&#x4ECE; AI Agent &#x7684; BubbleWrap &#x6C99;&#x7BB1;&#xFF0C;&#x770B;&#x201C;&#x4E16;&#x754C;&#x4E0E;&#x5730;&#x56FE;&#x201D;&#x7684;&#x9694;&#x79BB;&#x54F2;&#x5B66;</h1>
<p>&#x5728;&#x7814;&#x7A76; AI Agent &#x7684;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x65F6;&#xFF0C;&#x7ECF;&#x5E38;&#x4F1A;&#x770B;&#x5230;&#x4E00;&#x4E2A;&#x5DE5;&#x5177;&#xFF1A;</p>
<pre><code class="language-text">Bubblewrap&#xFF08;bwrap&#xFF09;
</code></pre>
<p>&#x4ECE;&#x5B9A;&#x4E49;&#x4E0A;&#x6765;&#x8BF4;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x57FA;&#x4E8E; Linux Namespace &#x7684;&#x8F7B;&#x91CF;&#x7EA7;&#x6C99;&#x7BB1;&#x5DE5;&#x5177;&#x3002;&#x5F88;&#x591A;&#x684C;&#x9762;&#x5E94;&#x7528;&#x3001;&#x5BB9;&#x5668;&#x8FD0;&#x884C;&#x65F6;&#x4EE5;&#x53CA; AI Agent &#x7684;&#x6267;&#x884C;&#x73AF;&#x5883;&#x90FD;&#x4F1A;&#x4F7F;&#x7528;&#x5B83;&#x6765;&#x9650;&#x5236;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x8BBF;&#x95EE;&#x7684;&#x8D44;&#x6E90;&#x3002;</p>
<p>&#x4E0D;&#x8FC7;&#xFF0C;&#x5982;&#x679C;&#x53EA;&#x628A; Bubblewrap &#x7406;&#x89E3;&#x6210;&#x4E00;&#x4E2A;&#x201C;&#x9694;&#x79BB;&#x5DE5;&#x5177;&#x201D;&#xFF0C;&#x5176;&#x5B9E;&#x5F88;&#x5BB9;&#x6613;&#x9519;&#x8FC7;&#x5B83;&#x80CC;&#x540E;&#x66F4;&#x6709;&#x610F;&#x601D;&#x7684;&#x90E8;&#x5206;&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#x5B83;&#x4F53;&#x73B0;&#x4E86;&#x4E00;&#x79CD;&#x548C;&#x4F20;&#x7EDF;&#x5B89;&#x5168;&#x6A21;&#x578B;&#x4E0D;&#x592A;&#x4E00;&#x6837;&#x7684;&#x601D;&#x8DEF;&#x3002;</p>
<h2 id="&#x6211;&#x4EEC;&#x4E60;&#x60EF;&#x7406;&#x89E3;&#x7684;&#x9694;&#x79BB;"><a href="#&#x6211;&#x4EEC;&#x4E60;&#x60EF;&#x7406;&#x89E3;&#x7684;&#x9694;&#x79BB;"></a>&#x6211;&#x4EEC;&#x4E60;&#x60EF;&#x7406;&#x89E3;&#x7684;&#x9694;&#x79BB;</h2>
<p>&#x5927;&#x591A;&#x6570;&#x4EBA;&#x7B2C;&#x4E00;&#x6B21;&#x63A5;&#x89E6;&#x6743;&#x9650;&#x7CFB;&#x7EDF;&#x65F6;&#xFF0C;&#x5BF9;&#x9694;&#x79BB;&#x7684;&#x7406;&#x89E3;&#x90FD;&#x6BD4;&#x8F83;&#x76F4;&#x89C2;&#xFF1A;</p>
<pre><code class="language-text">A &#x533A;&#x57DF;
&#x2588;&#x2588;&#x2588;&#x2588;&#x5899;&#x2588;&#x2588;&#x2588;&#x2588;
B &#x533A;&#x57DF;
</code></pre>
<p>&#x4E24;&#x8FB9;&#x4E92;&#x76F8;&#x9694;&#x5F00;&#x3002;</p>
<p>&#x8D44;&#x6E90;&#x5728;&#x90A3;&#x91CC;&#xFF0C;&#x4F46;&#x4F60;&#x8FDB;&#x4E0D;&#x53BB;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F;&#x4F20;&#x7EDF;&#x6743;&#x9650;&#x63A7;&#x5236;&#x6700;&#x5178;&#x578B;&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x3002;</p>
<p>&#x5047;&#x8BBE;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#x5E0C;&#x671B;&#x8BFB;&#x53D6;&#xFF1A;</p>
<pre><code class="language-text">~/.ssh
</code></pre>
<p>&#x5728;&#x5E38;&#x89C1;&#x7684;&#x6743;&#x9650;&#x6A21;&#x578B;&#x91CC;&#xFF0C;&#x60C5;&#x51B5;&#x901A;&#x5E38;&#x662F;&#x8FD9;&#x6837;&#x7684;&#xFF1A;</p>
<pre><code class="language-text">~/.ssh &#x5B58;&#x5728;

&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x53D1;&#x73B0;&#x5B83;

&#x4F46;&#x6CA1;&#x6709;&#x8BBF;&#x95EE;&#x6743;&#x9650;
</code></pre>
<p>&#x4E8E;&#x662F;&#x7A0B;&#x5E8F;&#x5F97;&#x5230;&#x4E00;&#x4E2A;&#x7ED3;&#x679C;&#xFF1A;</p>
<pre><code class="language-text">Permission Denied
</code></pre>
<p>&#x5BF9;&#x8C61;&#x662F;&#x5B58;&#x5728;&#x7684;&#xFF0C;&#x53EA;&#x662F;&#x64CD;&#x4F5C;&#x88AB;&#x62D2;&#x7EDD;&#x4E86;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x5B89;&#x5168;&#x673A;&#x5236;&#x672C;&#x8D28;&#x4E0A;&#x90FD;&#x662F;&#x8FD9;&#x79CD;&#x6A21;&#x5F0F;&#xFF1A;&#x5141;&#x8BB8;&#x4F60;&#x770B;&#x5230;&#x76EE;&#x6807;&#xFF0C;&#x4F46;&#x9650;&#x5236;&#x4F60;&#x5BF9;&#x76EE;&#x6807;&#x91C7;&#x53D6;&#x884C;&#x52A8;&#x3002;</p>
<h2 id="Bubblewrap &#x7684;&#x601D;&#x8DEF;"><a href="#Bubblewrap &#x7684;&#x601D;&#x8DEF;"></a>Bubblewrap &#x7684;&#x601D;&#x8DEF;</h2>
<p>Bubblewrap &#x91C7;&#x7528;&#x7684;&#x662F;&#x53E6;&#x4E00;&#x79CD;&#x65B9;&#x5F0F;&#x3002;</p>
<p>&#x5B83;&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x544A;&#x8BC9;&#x7A0B;&#x5E8F;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x4E2A;&#x4E1C;&#x897F;&#x5B58;&#x5728;&#xFF0C;&#x4F46;&#x4F60;&#x4E0D;&#x80FD;&#x8BBF;&#x95EE;
</code></pre>
<p>&#x800C;&#x662F;&#x76F4;&#x63A5;&#x8BA9;&#x7A0B;&#x5E8F;&#x8BA4;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x4E2A;&#x4E1C;&#x897F;&#x4E0D;&#x5B58;&#x5728;
</code></pre>
<p>&#x4F8B;&#x5982;&#x5728;&#x4E00;&#x4E2A;&#x7ECF;&#x8FC7;&#x88C1;&#x526A;&#x7684;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x91CC;&#x6267;&#x884C;&#xFF1A;</p>
<pre><code class="language-bash">ls /home
</code></pre>
<p>&#x7A0B;&#x5E8F;&#x53EF;&#x80FD;&#x53EA;&#x4F1A;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">project
tmp
usr
</code></pre>
<p>&#x5B83;&#x4E0D;&#x4F1A;&#x770B;&#x5230;&#x7528;&#x6237;&#x771F;&#x5B9E;&#x7684; Home &#x76EE;&#x5F55;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">~/.ssh
</code></pre>
<p>&#x5BF9;&#x4E8E;&#x8FD9;&#x4E2A;&#x8FDB;&#x7A0B;&#x6765;&#x8BF4;&#xFF0C;&#x90A3;&#x4E2A;&#x76EE;&#x5F55;&#x4ECE;&#x4E00;&#x5F00;&#x59CB;&#x5C31;&#x4E0D;&#x5728;&#x5B83;&#x6240;&#x8BA4;&#x77E5;&#x7684;&#x4E16;&#x754C;&#x91CC;&#x3002;</p>
<p>&#x4ECE;&#x7ED3;&#x679C;&#x4E0A;&#x770B;&#xFF0C;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x90FD;&#x5B9E;&#x73B0;&#x4E86;&#x4FDD;&#x62A4;&#x8D44;&#x6E90;&#x7684;&#x76EE;&#x7684;&#xFF0C;&#x4F46;&#x601D;&#x8DEF;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x524D;&#x8005;&#x662F;&#x5728;&#x9650;&#x5236;&#x884C;&#x4E3A;&#x3002;</p>
<p>&#x540E;&#x8005;&#x662F;&#x5728;&#x6539;&#x53D8;&#x89C2;&#x5BDF;&#x7ED3;&#x679C;&#x3002;</p>
<h2 id="&#x9694;&#x79BB;&#x7684;&#x4E0D;&#x53EA;&#x662F;&#x8D44;&#x6E90;"><a href="#&#x9694;&#x79BB;&#x7684;&#x4E0D;&#x53EA;&#x662F;&#x8D44;&#x6E90;"></a>&#x9694;&#x79BB;&#x7684;&#x4E0D;&#x53EA;&#x662F;&#x8D44;&#x6E90;</h2>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x5F88;&#x6709;&#x610F;&#x601D;&#x7684;&#x73B0;&#x8C61;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x65F6;&#x5019;&#xFF0C;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x5E76;&#x4E0D;&#x53EA;&#x662F;&#x63A7;&#x5236;&#x7A0B;&#x5E8F;&#x80FD;&#x505A;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x8FD8;&#x5305;&#x62EC;&#x63A7;&#x5236;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x770B;&#x5230;&#x4EC0;&#x4E48;&#x3002;</p>
<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x59CB;&#x7EC8;&#x5904;&#x4E8E;&#x53EF;&#x89C1;&#x72B6;&#x6001;&#xFF0C;&#x90A3;&#x4E48;&#x7CFB;&#x7EDF;&#x5C31;&#x5FC5;&#x987B;&#x4E0D;&#x65AD;&#x5904;&#x7406;&#x5404;&#x79CD;&#x8BBF;&#x95EE;&#x5C1D;&#x8BD5;&#x3001;&#x6743;&#x9650;&#x68C0;&#x67E5;&#x548C;&#x62D2;&#x7EDD;&#x64CD;&#x4F5C;&#x3002;</p>
<p>&#x800C;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6839;&#x672C;&#x4E0D;&#x51FA;&#x73B0;&#x5728;&#x7A0B;&#x5E8F;&#x7684;&#x4E16;&#x754C;&#x91CC;&#xFF0C;&#x90A3;&#x4E48;&#x5927;&#x91CF;&#x540E;&#x7EED;&#x95EE;&#x9898;&#x751A;&#x81F3;&#x4E0D;&#x4F1A;&#x4EA7;&#x751F;&#x3002;</p>
<p>&#x8FD9;&#x4E5F;&#x662F; Bubblewrap &#x7ED9;&#x4EBA;&#x7684;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x611F;&#x89C9;&#xFF1A;</p>
<p>&#x5B83;&#x4E0D;&#x50CF;&#x662F;&#x5728;&#x56F4;&#x5899;&#x5916;&#x5B89;&#x6392;&#x5B88;&#x536B;&#x3002;</p>
<p>&#x66F4;&#x50CF;&#x662F;&#x5728;&#x91CD;&#x65B0;&#x7ED8;&#x5236;&#x5730;&#x56FE;&#x3002;</p>
<h2 id="&#x5730;&#x56FE;&#x4E0E;&#x73B0;&#x5B9E;"><a href="#&#x5730;&#x56FE;&#x4E0E;&#x73B0;&#x5B9E;"></a>&#x5730;&#x56FE;&#x4E0E;&#x73B0;&#x5B9E;</h2>
<p>&#x5730;&#x56FE;&#x5E76;&#x4E0D;&#x7B49;&#x4E8E;&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x3002;</p>
<p>&#x4E00;&#x5F20;&#x57CE;&#x5E02;&#x5730;&#x56FE;&#x4E0D;&#x4F1A;&#x6807;&#x51FA;&#x6BCF;&#x68F5;&#x6811;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E5F;&#x4E0D;&#x4F1A;&#x8BB0;&#x5F55;&#x6BCF;&#x4E00;&#x5757;&#x8DEF;&#x8FB9;&#x77F3;&#x3002;</p>
<p>&#x4F46;&#x6211;&#x4EEC;&#x4E0D;&#x4F1A;&#x56E0;&#x6B64;&#x8BA4;&#x4E3A;&#x5730;&#x56FE;&#x662F;&#x9519;&#x8BEF;&#x7684;&#x3002;</p>
<p>&#x56E0;&#x4E3A;&#x5730;&#x56FE;&#x4ECE;&#x6765;&#x4E0D;&#x662F;&#x4E3A;&#x4E86;&#x63CF;&#x8FF0;&#x5168;&#x90E8;&#x73B0;&#x5B9E;&#x3002;</p>
<p>&#x5B83;&#x53EA;&#x662F;&#x9488;&#x5BF9;&#x7279;&#x5B9A;&#x4EFB;&#x52A1;&#xFF0C;&#x5BF9;&#x73B0;&#x5B9E;&#x8FDB;&#x884C;&#x9009;&#x62E9;&#x6027;&#x7684;&#x8868;&#x8FBE;&#x3002;</p>
<p>&#x5BFC;&#x822A;&#x5730;&#x56FE;&#x5173;&#x5FC3;&#x9053;&#x8DEF;&#x3002;</p>
<p>&#x5730;&#x94C1;&#x56FE;&#x5173;&#x5FC3;&#x7EBF;&#x8DEF;&#x3002;</p>
<p>&#x7269;&#x6D41;&#x5730;&#x56FE;&#x5173;&#x5FC3;&#x8FD0;&#x8F93;&#x7F51;&#x7EDC;&#x3002;</p>
<p>&#x6BCF;&#x4E00;&#x79CD;&#x5730;&#x56FE;&#x90FD;&#x4FDD;&#x7559;&#x4E86;&#x81EA;&#x5DF1;&#x9700;&#x8981;&#x7684;&#x4FE1;&#x606F;&#xFF0C;&#x540C;&#x65F6;&#x5FFD;&#x7565;&#x4E86;&#x5927;&#x91CF;&#x65E0;&#x5173;&#x7EC6;&#x8282;&#x3002;</p>
<p>Bubblewrap &#x505A;&#x7684;&#x4E8B;&#x60C5;&#x4E0E;&#x6B64;&#x975E;&#x5E38;&#x76F8;&#x4F3C;&#x3002;</p>
<p>&#x5B83;&#x6CA1;&#x6709;&#x590D;&#x5236; Linux&#x3002;</p>
<p>&#x6CA1;&#x6709;&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x3002;</p>
<p>&#x4E5F;&#x6CA1;&#x6709;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x771F;&#x6B63;&#x72EC;&#x7ACB;&#x7684;&#x4E16;&#x754C;&#x3002;</p>
<p>&#x5B83;&#x53EA;&#x662F;&#x5411;&#x8FDB;&#x7A0B;&#x5C55;&#x793A;&#x4E86;&#x4E00;&#x5F20;&#x7ECF;&#x8FC7;&#x88C1;&#x526A;&#x540E;&#x7684;&#x5730;&#x56FE;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">/
&#x251C;&#x2500;&#x2500; usr
&#x251C;&#x2500;&#x2500; bin
&#x2514;&#x2500;&#x2500; workspace
</code></pre>
<p>&#x7136;&#x540E;&#x544A;&#x8BC9;&#x8FDB;&#x7A0B;&#xFF1A;</p>
<pre><code class="language-text">&#x4F60;&#x7684;&#x4E16;&#x754C;&#x5C31;&#x662F;&#x8FD9;&#x4E9B;&#x5185;&#x5BB9;
</code></pre>
<p>&#x5BF9;&#x4E8E;&#x8FDB;&#x7A0B;&#x800C;&#x8A00;&#xFF0C;&#x8FD9;&#x5F20;&#x5730;&#x56FE;&#x5C31;&#x662F;&#x73B0;&#x5B9E;&#x3002;</p>
<h2 id="Namespace &#x7684;&#x672C;&#x8D28;"><a href="#Namespace &#x7684;&#x672C;&#x8D28;"></a>Namespace &#x7684;&#x672C;&#x8D28;</h2>
<p>&#x7406;&#x89E3;&#x8FD9;&#x4E00;&#x70B9;&#x4E4B;&#x540E;&#xFF0C;&#x518D;&#x770B; Linux Namespace&#xFF0C;&#x5F88;&#x591A;&#x539F;&#x672C;&#x62BD;&#x8C61;&#x7684;&#x6982;&#x5FF5;&#x4F1A;&#x53D8;&#x5F97;&#x76F4;&#x89C2;&#x3002;</p>
<p>&#x4E0D;&#x5C11;&#x4EBA;&#x5728;&#x5B66;&#x4E60;&#x5BB9;&#x5668;&#x65F6;&#x90FD;&#x4F1A;&#x6709;&#x4E00;&#x4E2A;&#x8BEF;&#x533A;&#xFF1A;</p>
<p>&#x65E2;&#x7136;&#x5BB9;&#x5668;&#x548C;&#x5BBF;&#x4E3B;&#x673A;&#x770B;&#x5230;&#x7684;&#x5185;&#x5BB9;&#x4E0D;&#x4E00;&#x6837;&#xFF0C;&#x90A3;&#x4E48;&#x7CFB;&#x7EDF;&#x4E00;&#x5B9A;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4EFD;&#x65B0;&#x7684;&#x73AF;&#x5883;&#x3002;</p>
<p>&#x5B9E;&#x9645;&#x4E0A;&#x5E76;&#x4E0D;&#x5B8C;&#x5168;&#x5982;&#x6B64;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5E95;&#x5C42;&#x8D44;&#x6E90;&#x4F9D;&#x7136;&#x662F;&#x5171;&#x4EAB;&#x7684;&#x3002;</p>
<p>&#x53D8;&#x5316;&#x7684;&#x662F;&#x89C2;&#x5BDF;&#x8FD9;&#x4E9B;&#x8D44;&#x6E90;&#x7684;&#x65B9;&#x5F0F;&#x3002;</p>
<p>&#x540C;&#x6837;&#x4E00;&#x53F0;&#x673A;&#x5668;&#x3002;</p>
<p>&#x540C;&#x4E00;&#x4E2A;&#x5185;&#x6838;&#x3002;</p>
<p>&#x540C;&#x4E00;&#x7EC4;&#x7269;&#x7406;&#x8D44;&#x6E90;&#x3002;</p>
<p>&#x4E0D;&#x540C;&#x8FDB;&#x7A0B;&#x5374;&#x80FD;&#x591F;&#x770B;&#x5230;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x3001;&#x8FDB;&#x7A0B;&#x6811;&#x3001;&#x7F51;&#x7EDC;&#x63A5;&#x53E3;&#x751A;&#x81F3;&#x4E3B;&#x673A;&#x540D;&#x3002;</p>
<p>&#x5982;&#x679C;&#x7EE7;&#x7EED;&#x6CBF;&#x7528;&#x5730;&#x56FE;&#x7684;&#x6BD4;&#x55BB;&#xFF0C;&#x90A3;&#x4E48; Namespace &#x63D0;&#x4F9B;&#x7684;&#x80FD;&#x529B;&#x5176;&#x5B9E;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x5141;&#x8BB8;&#x4E0D;&#x540C;&#x8FDB;&#x7A0B;&#x62E5;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x4E16;&#x754C;&#x89C6;&#x56FE;&#x3002;</p>
</blockquote>
<p>&#x4E16;&#x754C;&#x672C;&#x8EAB;&#x6CA1;&#x6709;&#x53D8;&#x3002;</p>
<p>&#x53D8;&#x5316;&#x7684;&#x662F;&#x63CF;&#x8FF0;&#x4E16;&#x754C;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="Docker &#x4E0E; Bubblewrap"><a href="#Docker &#x4E0E; Bubblewrap"></a>Docker &#x4E0E; Bubblewrap</h2>
<p>&#x4ECE;&#x8FD9;&#x4E2A;&#x89D2;&#x5EA6;&#x518D;&#x770B; Docker&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x5B83;&#x548C; Bubblewrap &#x7684;&#x5171;&#x540C;&#x70B9;&#x6BD4;&#x8868;&#x9762;&#x4E0A;&#x66F4;&#x591A;&#x3002;</p>
<p>Docker &#x5E76;&#x6CA1;&#x6709;&#x521B;&#x9020;&#x4E00;&#x53F0;&#x65B0;&#x7684;&#x8BA1;&#x7B97;&#x673A;&#x3002;</p>
<p>Bubblewrap &#x4E5F;&#x6CA1;&#x6709;&#x521B;&#x9020;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7CFB;&#x7EDF;&#x3002;</p>
<p>&#x5B83;&#x4EEC;&#x90FD;&#x5728;&#x505A;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;&#x60C5;&#xFF1A;</p>
<p>&#x4E3A;&#x8FDB;&#x7A0B;&#x6784;&#x9020;&#x4E00;&#x4E2A;&#x7ECF;&#x8FC7;&#x7EC4;&#x7EC7;&#x548C;&#x7B5B;&#x9009;&#x7684;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x3002;</p>
<p>&#x5BB9;&#x5668;&#x91CC;&#x7684;&#x8FDB;&#x7A0B;&#x4F1A;&#x8BA4;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x662F;&#x6211;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;
&#x8FD9;&#x662F;&#x6211;&#x7684;&#x7F51;&#x7EDC;
&#x8FD9;&#x662F;&#x6211;&#x7684;&#x8FDB;&#x7A0B;&#x7A7A;&#x95F4;
</code></pre>
<p>&#x800C;&#x5BBF;&#x4E3B;&#x673A;&#x4E0A;&#x7684;&#x8FDB;&#x7A0B;&#x5219;&#x62E5;&#x6709;&#x53E6;&#x4E00;&#x5957;&#x89C6;&#x56FE;&#x3002;</p>
<p>&#x8D44;&#x6E90;&#x53EF;&#x80FD;&#x6765;&#x81EA;&#x540C;&#x4E00;&#x4E2A;&#x5185;&#x6838;&#x3002;</p>
<p>&#x4F46;&#x4E0D;&#x540C;&#x8FDB;&#x7A0B;&#x5BF9;&#x8FD9;&#x4E9B;&#x8D44;&#x6E90;&#x7684;&#x7406;&#x89E3;&#x5DF2;&#x7ECF;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x5F88;&#x591A;&#x5BB9;&#x5668;&#x6280;&#x672F;&#x770B;&#x8D77;&#x6765;&#x662F;&#x5728;&#x9694;&#x79BB;&#x8D44;&#x6E90;&#xFF0C;&#x672C;&#x8D28;&#x4E0A;&#x5374;&#x662F;&#x5728;&#x9694;&#x79BB;&#x89C6;&#x56FE;&#x3002;</p>
<h2 id="&#x4E00;&#x4E2A;&#x66F4;&#x6709;&#x8DA3;&#x7684;&#x89C6;&#x89D2;"><a href="#&#x4E00;&#x4E2A;&#x66F4;&#x6709;&#x8DA3;&#x7684;&#x89C6;&#x89D2;"></a>&#x4E00;&#x4E2A;&#x66F4;&#x6709;&#x8DA3;&#x7684;&#x89C6;&#x89D2;</h2>
<p>&#x5982;&#x679C;&#x4E00;&#x5B9A;&#x8981;&#x7ED9; Bubblewrap &#x627E;&#x4E00;&#x4E2A;&#x4E0D;&#x90A3;&#x4E48;&#x6280;&#x672F;&#x5316;&#x7684;&#x63CF;&#x8FF0;&#xFF0C;&#x6211;&#x66F4;&#x613F;&#x610F;&#x628A;&#x5B83;&#x770B;&#x6210;&#x4E00;&#x4E2A;&#x4E16;&#x754C;&#x7F16;&#x8F91;&#x5668;&#x3002;</p>
<p>&#x4F60;&#x51B3;&#x5B9A;&#x54EA;&#x4E9B;&#x76EE;&#x5F55;&#x5B58;&#x5728;&#x3002;</p>
<p>&#x54EA;&#x4E9B;&#x76EE;&#x5F55;&#x9700;&#x8981;&#x9690;&#x85CF;&#x3002;</p>
<p>&#x54EA;&#x4E9B;&#x8D44;&#x6E90;&#x53EF;&#x4EE5;&#x6620;&#x5C04;&#x8FDB;&#x6765;&#x3002;</p>
<p>&#x54EA;&#x4E9B;&#x8D44;&#x6E90;&#x5FC5;&#x987B;&#x5F7B;&#x5E95;&#x6D88;&#x5931;&#x3002;</p>
<p>&#x7136;&#x540E;&#x628A;&#x8FD9;&#x4E2A;&#x7ECF;&#x8FC7;&#x7F16;&#x8F91;&#x7684;&#x4E16;&#x754C;&#x4EA4;&#x7ED9;&#x8FDB;&#x7A0B;&#x3002;</p>
<p>&#x5BF9;&#x4E8E;&#x8FDB;&#x7A0B;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x88AB;&#x5220;&#x51CF;&#x8FC7;&#x7684;&#x73AF;&#x5883;&#x3002;</p>
<p>&#x800C;&#x662F;&#x5B83;&#x6240;&#x80FD;&#x591F;&#x611F;&#x77E5;&#x5230;&#x7684;&#x5168;&#x90E8;&#x73B0;&#x5B9E;&#x3002;</p>
<h2 id="&#x7ED3;&#x8BED;"><a href="#&#x7ED3;&#x8BED;"></a>&#x7ED3;&#x8BED;</h2>
<p>&#x5BB9;&#x5668;&#x6280;&#x672F;&#x6700;&#x5BB9;&#x6613;&#x8BA9;&#x4EBA;&#x4EA7;&#x751F;&#x8BEF;&#x89E3;&#x7684;&#x5730;&#x65B9;&#xFF0C;&#x5728;&#x4E8E;&#x6211;&#x4EEC;&#x603B;&#x662F;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x6210;&#x8D44;&#x6E90;&#x9694;&#x79BB;&#x6280;&#x672F;&#x3002;</p>
<p>&#x4F46;&#x5F88;&#x591A;&#x65F6;&#x5019;&#xFF0C;&#x5B83;&#x9694;&#x79BB;&#x7684;&#x5E76;&#x4E0D;&#x662F;&#x8D44;&#x6E90;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x662F;&#x89C2;&#x5BDF;&#x8D44;&#x6E90;&#x7684;&#x65B9;&#x5F0F;&#x3002;</p>
<p>Bubblewrap &#x53EF;&#x4EE5;&#x8BF4;&#x662F;&#x8FD9;&#x79CD;&#x601D;&#x60F3;&#x6700;&#x7EAF;&#x7CB9;&#x7684;&#x4F53;&#x73B0;&#x4E4B;&#x4E00;&#x3002;</p>
<p>&#x5B83;&#x4E0D;&#x521B;&#x9020;&#x65B0;&#x7684;&#x4E16;&#x754C;&#x3002;</p>
<p>&#x5B83;&#x53EA;&#x662F;&#x4E3A;&#x8FDB;&#x7A0B;&#x7ED8;&#x5236;&#x4E86;&#x4E00;&#x5F20;&#x65B0;&#x7684;&#x5730;&#x56FE;&#x3002;</p>
<p>&#x800C;&#x5F53;&#x771F;&#x6B63;&#x7406;&#x89E3;&#x8FD9;&#x4E00;&#x70B9;&#x4E4B;&#x540E;&#xFF0C;&#x5F88;&#x591A;&#x770B;&#x4F3C;&#x590D;&#x6742;&#x7684;&#x6982;&#x5FF5;&#x2014;&#x2014;Namespace&#x3001;&#x5BB9;&#x5668;&#x3001;&#x6302;&#x8F7D;&#x3001;&#x6C99;&#x7BB1;&#x3001;&#x8FD0;&#x884C;&#x65F6;&#x9694;&#x79BB;&#x2014;&#x2014;&#x90FD;&#x4F1A;&#x9010;&#x6E10;&#x6536;&#x655B;&#x5230;&#x540C;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<p>&#x4E16;&#x754C;&#x8FD8;&#x662F;&#x90A3;&#x4E2A;&#x4E16;&#x754C;&#x3002;</p>
<p>&#x53EA;&#x662F;&#x6BCF;&#x4E2A;&#x8FDB;&#x7A0B;&#x770B;&#x5230;&#x7684;&#x5730;&#x56FE;&#x4E0D;&#x4E00;&#x6837;&#x3002;</p>
`,E=[{level:1,title:"从 AI Agent 的 BubbleWrap 沙箱，看“世界与地图”的隔离哲学",children:[{level:2,title:"我们习惯理解的隔离",children:[]},{level:2,title:"Bubblewrap 的思路",children:[]},{level:2,title:"隔离的不只是资源",children:[]},{level:2,title:"地图与现实",children:[]},{level:2,title:"Namespace 的本质",children:[]},{level:2,title:"Docker 与 Bubblewrap",children:[]},{level:2,title:"一个更有趣的视角",children:[]},{level:2,title:"结语",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
