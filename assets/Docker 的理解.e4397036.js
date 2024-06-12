const x={},F=`<h1 id="Docker &#x955C;&#x50CF;"><a href="#Docker &#x955C;&#x50CF;"></a>Docker &#x955C;&#x50CF;</h1>
<h2 id="&#x5C42;&#x6B21;&#x5173;&#x7CFB;"><a href="#&#x5C42;&#x6B21;&#x5173;&#x7CFB;"></a>&#x5C42;&#x6B21;&#x5173;&#x7CFB;</h2>
<p>Docker &#x955C;&#x50CF;&#x7684;&#x5C42;&#x6B21;&#x5173;&#x7CFB;&#x539F;&#x7406;&#x57FA;&#x4E8E;&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;&#xFF0C;&#x8FD9;&#x79CD;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5141;&#x8BB8;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5C42;&#x6B21;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x8868;&#x73B0;&#x4E3A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x3002;Docker &#x5229;&#x7528;&#x8FD9;&#x4E00;&#x7279;&#x6027;&#x6765;&#x6784;&#x5EFA;&#x548C;&#x7BA1;&#x7406;&#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;&#x3002;</p>
<h3 id="&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;"><a href="#&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;"></a>&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;</h3>
<p>&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;&#x5982; AUFS&#x3001;OverlayFS&#x3001;btrfs &#x7B49;&#xFF09;&#x662F; Docker &#x7684;&#x6838;&#x5FC3;&#x6280;&#x672F;&#x4E4B;&#x4E00;&#x3002;&#x5B83;&#x5141;&#x8BB8;&#x591A;&#x4E2A;&#x76EE;&#x5F55;&#xFF08;&#x79F0;&#x4E3A;&#x5C42;&#xFF09;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x4F7F;&#x5176;&#x770B;&#x8D77;&#x6765;&#x50CF;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x76EE;&#x5F55;&#x3002;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#xFF0C;&#x53EA;&#x6709;&#x6700;&#x9876;&#x5C42;&#x662F;&#x53EF;&#x5199;&#x7684;&#x3002;</p>
<h3 id="Docker &#x955C;&#x50CF;&#x5C42;&#x6B21;&#x7ED3;&#x6784;"><a href="#Docker &#x955C;&#x50CF;&#x5C42;&#x6B21;&#x7ED3;&#x6784;"></a>Docker &#x955C;&#x50CF;&#x5C42;&#x6B21;&#x7ED3;&#x6784;</h3>
<p>Docker &#x955C;&#x50CF;&#x7531;&#x591A;&#x4E2A;&#x53EA;&#x8BFB;&#x5C42;&#x7EC4;&#x6210;&#xFF0C;&#x6BCF;&#x4E00;&#x5C42;&#x5BF9;&#x5E94; Dockerfile &#x4E2D;&#x7684;&#x4E00;&#x6761;&#x6307;&#x4EE4;&#x3002;&#x8FD9;&#x4E9B;&#x5C42;&#x662F;&#x589E;&#x91CF;&#x7684;&#xFF0C;&#x5373;&#x6BCF;&#x4E00;&#x5C42;&#x53EA;&#x5305;&#x542B;&#x76F8;&#x5BF9;&#x4E8E;&#x524D;&#x4E00;&#x5C42;&#x7684;&#x53D8;&#x5316;&#x3002;&#x955C;&#x50CF;&#x5C42;&#x6B21;&#x7ED3;&#x6784;&#x7684;&#x57FA;&#x672C;&#x539F;&#x7406;&#x5982;&#x4E0B;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x57FA;&#x7840;&#x955C;&#x50CF;&#x5C42;</strong>&#xFF1A;&#x8FD9;&#x662F;&#x955C;&#x50CF;&#x7684;&#x6700;&#x5E95;&#x5C42;&#xFF0C;&#x901A;&#x5E38;&#x662F;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x7684;&#x57FA;&#x7840;&#x955C;&#x50CF;&#xFF08;&#x5982; <code>ubuntu</code>&#x3001;<code>alpine</code>&#x3001;<code>node</code> &#x7B49;&#xFF09;&#x3002;&#x5B83;&#x63D0;&#x4F9B;&#x4E86;&#x8FD0;&#x884C;&#x5E94;&#x7528;&#x6240;&#x9700;&#x7684;&#x57FA;&#x672C;&#x73AF;&#x5883;&#x3002;</p>
</li>
<li>
<p><strong>&#x4E2D;&#x95F4;&#x5C42;</strong>&#xFF1A;&#x6BCF;&#x4E00;&#x6761; Dockerfile &#x6307;&#x4EE4;&#xFF08;&#x5982; <code>RUN</code>&#x3001;<code>COPY</code>&#x3001;<code>ADD</code> &#x7B49;&#xFF09;&#x90FD;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5C42;&#x3002;&#x6BCF;&#x4E2A;&#x4E2D;&#x95F4;&#x5C42;&#x53EA;&#x5305;&#x542B;&#x76F8;&#x5BF9;&#x4E8E;&#x524D;&#x4E00;&#x5C42;&#x7684;&#x53D8;&#x5316;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5B89;&#x88C5;&#x8F6F;&#x4EF6;&#x5305;&#x3001;&#x590D;&#x5236;&#x6587;&#x4EF6;&#x7B49;&#x3002;</p>
</li>
<li>
<p><strong>&#x9876;&#x5C42;</strong>&#xFF1A;&#x8FD9;&#x662F;&#x955C;&#x50CF;&#x7684;&#x6700;&#x9876;&#x5C42;&#xFF0C;&#x901A;&#x5E38;&#x5305;&#x542B;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x7684;&#x4EE3;&#x7801;&#x548C;&#x914D;&#x7F6E;&#x6587;&#x4EF6;&#x3002;</p>
</li>
</ol>
<h3 id="&#x5BB9;&#x5668;&#x5C42;&#x6B21;&#x7ED3;&#x6784;"><a href="#&#x5BB9;&#x5668;&#x5C42;&#x6B21;&#x7ED3;&#x6784;"></a>&#x5BB9;&#x5668;&#x5C42;&#x6B21;&#x7ED3;&#x6784;</h3>
<p>&#x5F53;&#x4F60;&#x542F;&#x52A8;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#x65F6;&#xFF0C;Docker &#x4F1A;&#x5728;&#x955C;&#x50CF;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#xFF0C;&#x8FD9;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#x79F0;&#x4E3A;&#x5BB9;&#x5668;&#x5C42;&#x3002;&#x5BB9;&#x5668;&#x5C42;&#x662F;&#x552F;&#x4E00;&#x53EF;&#x5199;&#x7684;&#x5C42;&#xFF0C;&#x6240;&#x6709;&#x5BF9;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x7684;&#x4FEE;&#x6539;&#xFF08;&#x5982;&#x521B;&#x5EFA;&#x65B0;&#x6587;&#x4EF6;&#x3001;&#x4FEE;&#x6539;&#x73B0;&#x6709;&#x6587;&#x4EF6;&#x7B49;&#xFF09;&#x90FD;&#x4F1A;&#x53D1;&#x751F;&#x5728;&#x8FD9;&#x4E00;&#x5C42;&#x3002;</p>
<h3 id="&#x5206;&#x5C42;&#x5B58;&#x50A8;&#x7684;&#x4F18;&#x70B9;"><a href="#&#x5206;&#x5C42;&#x5B58;&#x50A8;&#x7684;&#x4F18;&#x70B9;"></a>&#x5206;&#x5C42;&#x5B58;&#x50A8;&#x7684;&#x4F18;&#x70B9;</h3>
<ol>
<li>
<p><strong>&#x9AD8;&#x6548;&#x5B58;&#x50A8;</strong>&#xFF1A;&#x7531;&#x4E8E;&#x6BCF;&#x4E00;&#x5C42;&#x662F;&#x53EA;&#x8BFB;&#x7684;&#xFF0C;&#x5E76;&#x4E14;&#x662F;&#x589E;&#x91CF;&#x7684;&#xFF0C;Docker &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5171;&#x4EAB;&#x76F8;&#x540C;&#x7684;&#x57FA;&#x7840;&#x5C42;&#x6765;&#x8282;&#x7701;&#x5B58;&#x50A8;&#x7A7A;&#x95F4;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x591A;&#x4E2A;&#x57FA;&#x4E8E;&#x540C;&#x4E00;&#x57FA;&#x7840;&#x955C;&#x50CF;&#x7684;&#x5BB9;&#x5668;&#x53EF;&#x4EE5;&#x5171;&#x4EAB;&#x8BE5;&#x57FA;&#x7840;&#x955C;&#x50CF;&#x7684;&#x5C42;&#x3002;</p>
</li>
<li>
<p><strong>&#x5FEB;&#x901F;&#x6784;&#x5EFA;</strong>&#xFF1A;&#x6784;&#x5EFA;&#x955C;&#x50CF;&#x65F6;&#xFF0C;&#x5982;&#x679C;&#x67D0;&#x4E00;&#x5C42;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x4E14;&#x6CA1;&#x6709;&#x53D8;&#x5316;&#xFF0C;Docker &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x91CD;&#x7528;&#x8BE5;&#x5C42;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x6784;&#x5EFA;&#x3002;&#x8FD9;&#x5927;&#x5927;&#x52A0;&#x5FEB;&#x4E86;&#x955C;&#x50CF;&#x7684;&#x6784;&#x5EFA;&#x901F;&#x5EA6;&#x3002;</p>
</li>
<li>
<p><strong>&#x7F13;&#x5B58;&#x673A;&#x5236;</strong>&#xFF1A;Docker &#x4F7F;&#x7528;&#x7F13;&#x5B58;&#x673A;&#x5236;&#x6765;&#x52A0;&#x901F;&#x955C;&#x50CF;&#x7684;&#x6784;&#x5EFA;&#x548C;&#x90E8;&#x7F72;&#x3002;&#x5982;&#x679C;&#x67D0;&#x4E00;&#x5C42;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x4E8E;&#x7F13;&#x5B58;&#x4E2D;&#xFF0C;&#x5E76;&#x4E14;&#x6CA1;&#x6709;&#x53D8;&#x5316;&#xFF0C;Docker &#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4ECE;&#x7F13;&#x5B58;&#x4E2D;&#x83B7;&#x53D6;&#x8BE5;&#x5C42;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x6267;&#x884C;&#x6307;&#x4EE4;&#x3002;</p>
</li>
</ol>
<h3 id="&#x793A;&#x4F8B;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;&#x7684;&#x5C42;&#x6B21;&#x5173;&#x7CFB;"><a href="#&#x793A;&#x4F8B;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;&#x7684;&#x5C42;&#x6B21;&#x5173;&#x7CFB;"></a>&#x793A;&#x4F8B;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;&#x7684;&#x5C42;&#x6B21;&#x5173;&#x7CFB;</h3>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x5982;&#x4E0B;&#x7684; Dockerfile&#xFF1A;</p>
<pre><code class="language-Dockerfile"><span class="hljs-comment"># &#x4F7F;&#x7528;&#x5B98;&#x65B9;&#x7684; Node.js &#x955C;&#x50CF;&#x4F5C;&#x4E3A;&#x57FA;&#x7840;&#x955C;&#x50CF;</span>
<span class="hljs-keyword">FROM</span> node:<span class="hljs-number">14</span>

<span class="hljs-comment"># &#x8BBE;&#x7F6E;&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;</span>
<span class="hljs-keyword">WORKDIR</span><span class="bash"> /app</span>

<span class="hljs-comment"># &#x590D;&#x5236; package.json &#x548C; package-lock.json &#x5230;&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;</span>
<span class="hljs-keyword">COPY</span><span class="bash"> package*.json ./</span>

<span class="hljs-comment"># &#x5B89;&#x88C5;&#x4F9D;&#x8D56;</span>
<span class="hljs-keyword">RUN</span><span class="bash"> npm install</span>

<span class="hljs-comment"># &#x590D;&#x5236;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x4EE3;&#x7801;&#x5230;&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;</span>
<span class="hljs-keyword">COPY</span><span class="bash"> . .</span>

<span class="hljs-comment"># &#x66B4;&#x9732;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x8FD0;&#x884C;&#x7684;&#x7AEF;&#x53E3;</span>
<span class="hljs-keyword">EXPOSE</span> <span class="hljs-number">3000</span>

<span class="hljs-comment"># &#x8FD0;&#x884C;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;</span>
<span class="hljs-keyword">CMD</span><span class="bash"> [<span class="hljs-string">&quot;node&quot;</span>, <span class="hljs-string">&quot;app.js&quot;</span>]</span>
</code></pre>
<p>&#x6784;&#x5EFA;&#x955C;&#x50CF;&#x65F6;&#xFF0C;&#x6BCF;&#x4E00;&#x6761;&#x6307;&#x4EE4;&#x90FD;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5C42;&#xFF1A;</p>
<ol>
<li><strong>&#x57FA;&#x7840;&#x955C;&#x50CF;&#x5C42;</strong>&#xFF1A;<code>FROM node:14</code></li>
<li><strong>&#x5DE5;&#x4F5C;&#x76EE;&#x5F55;&#x5C42;</strong>&#xFF1A;<code>WORKDIR /app</code></li>
<li><strong>&#x590D;&#x5236;&#x4F9D;&#x8D56;&#x6587;&#x4EF6;&#x5C42;</strong>&#xFF1A;<code>COPY package*.json ./</code></li>
<li><strong>&#x5B89;&#x88C5;&#x4F9D;&#x8D56;&#x5C42;</strong>&#xFF1A;<code>RUN npm install</code></li>
<li><strong>&#x590D;&#x5236;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x4EE3;&#x7801;&#x5C42;</strong>&#xFF1A;<code>COPY . .</code></li>
<li><strong>&#x66B4;&#x9732;&#x7AEF;&#x53E3;&#x5C42;</strong>&#xFF1A;<code>EXPOSE 3000</code></li>
<li><strong>&#x8FD0;&#x884C;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x5C42;</strong>&#xFF1A;<code>CMD [&quot;node&quot;, &quot;app.js&quot;]</code></li>
</ol>
<p>&#x5F53;&#x4F60;&#x8FD0;&#x884C;&#x5BB9;&#x5668;&#x65F6;&#xFF0C;Docker &#x4F1A;&#x5728;&#x8FD9;&#x4E9B;&#x53EA;&#x8BFB;&#x5C42;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#x3002;&#x6240;&#x6709;&#x5BF9;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x7684;&#x4FEE;&#x6539;&#x90FD;&#x4F1A;&#x53D1;&#x751F;&#x5728;&#x8FD9;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#x4E2D;&#x3002;</p>
<h3 id="&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;"><a href="#&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;"></a>&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;</h3>
<p>&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF08;Union File System&#xFF09;&#x5982;&#x4F55;&#x5141;&#x8BB8;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5C42;&#x6B21;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x8868;&#x73B0;&#x4E3A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x3002;&#x4F8B;&#x5B50;&#xFF1A;</p>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E09;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x76EE;&#x5F55;&#xFF0C;&#x6BCF;&#x4E2A;&#x76EE;&#x5F55;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5C42;&#xFF1A;</p>
<ol>
<li><strong>Layer 1</strong>&#xFF1A;&#x5305;&#x542B;&#x57FA;&#x672C;&#x7684;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x6587;&#x4EF6;</li>
<li><strong>Layer 2</strong>&#xFF1A;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x6587;&#x4EF6;</li>
<li><strong>Layer 3</strong>&#xFF1A;&#x5305;&#x542B;&#x7528;&#x6237;&#x7684;&#x6570;&#x636E;&#x6587;&#x4EF6;&#xFF0C;&#x5BB9;&#x5668;&#x8FD0;&#x884C;&#x65F6;&#x7684;<strong>&#x53EF;&#x5199;&#x5C42;</strong></li>
</ol>
<h4 id="&#x76EE;&#x5F55;&#x7ED3;&#x6784;"><a href="#&#x76EE;&#x5F55;&#x7ED3;&#x6784;"></a>&#x76EE;&#x5F55;&#x7ED3;&#x6784;</h4>
<ul>
<li>
<p><strong>Layer 1</strong>&#xFF08;&#x57FA;&#x7840;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x5C42;&#xFF09;</p>
<pre><code>/bin
/lib
/etc
</code></pre>
</li>
<li>
<p><strong>Layer 2</strong>&#xFF08;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x5C42;&#xFF09;</p>
<pre><code>/app
/usr/local/bin
</code></pre>
</li>
<li>
<p><strong>Layer 3</strong>&#xFF08;&#x7528;&#x6237;&#x6570;&#x636E;&#x5C42;&#xFF09;</p>
<pre><code>/home/user
/var/log
</code></pre>
</li>
</ul>
<h4 id="&#x53E0;&#x52A0;&#x540E;&#x7684;&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;"><a href="#&#x53E0;&#x52A0;&#x540E;&#x7684;&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;"></a>&#x53E0;&#x52A0;&#x540E;&#x7684;&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;</h4>
<p>&#x5F53;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5C06;&#x8FD9;&#x4E09;&#x4E2A;&#x5C42;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#x65F6;&#xFF0C;&#x5B83;&#x4EEC;&#x4F1A;&#x8868;&#x73B0;&#x4E3A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF1A;</p>
<pre><code>/bin
/lib
/etc
/app
/usr/local/bin
/home/user
/var/log
</code></pre>
<h3 id="&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;"><a href="#&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;"></a>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;</h3>
<p>&#x8BA9;&#x6211;&#x4EEC;&#x5C06;&#x8FD9;&#x4E2A;&#x6982;&#x5FF5;&#x5E94;&#x7528;&#x5230; Docker &#x955C;&#x50CF;&#x548C;&#x5BB9;&#x5668;&#x4E0A;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x57FA;&#x7840;&#x955C;&#x50CF;&#xFF08;Layer 1&#xFF09;</strong>&#xFF1A;&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x4E00;&#x4E2A; Ubuntu &#x57FA;&#x7840;&#x955C;&#x50CF;&#xFF0C;&#x5B83;&#x5305;&#x542B;&#x4E86;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x7684;&#x57FA;&#x672C;&#x6587;&#x4EF6;&#x3002;</p>
<pre><code>/bin
/lib
/etc
</code></pre>
</li>
<li>
<p><strong>&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x5C42;&#xFF08;Layer 2&#xFF09;</strong>&#xFF1A;&#x6211;&#x4EEC;&#x5728;&#x57FA;&#x7840;&#x955C;&#x50CF;&#x4E0A;&#x5B89;&#x88C5;&#x4E86;&#x4E00;&#x4E2A;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#xFF0C;&#x8FD9;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5C42;&#x3002;</p>
<pre><code>/app
/usr/local/bin
</code></pre>
</li>
<li>
<p><strong>&#x7528;&#x6237;&#x6570;&#x636E;&#x5C42;&#xFF08;Layer 3&#xFF09;</strong>&#xFF1A;&#x5BB9;&#x5668;&#x8FD0;&#x884C;&#x65F6;&#xFF0C;&#x7528;&#x6237;&#x5728;&#x5BB9;&#x5668;&#x5185;&#x521B;&#x5EFA;&#x6216;&#x4FEE;&#x6539;&#x6587;&#x4EF6;&#xFF0C;&#x8FD9;&#x4E9B;&#x53D8;&#x5316;&#x4F1A;&#x8BB0;&#x5F55;&#x5728;&#x4E00;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#x4E2D;&#x3002;</p>
<pre><code>/home/user
/var/log
</code></pre>
</li>
</ol>
<h4 id="&#x53E0;&#x52A0;&#x540E;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;"><a href="#&#x53E0;&#x52A0;&#x540E;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;"></a>&#x53E0;&#x52A0;&#x540E;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;</h4>
<p>&#x5F53;&#x6211;&#x4EEC;&#x542F;&#x52A8;&#x5BB9;&#x5668;&#x65F6;&#xFF0C;Docker &#x4F1A;&#x5C06;&#x8FD9;&#x4E9B;&#x5C42;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x8868;&#x73B0;&#x4E3A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF1A;</p>
<pre><code>/bin
/lib
/etc
/app
/usr/local/bin
/home/user
/var/log
</code></pre>
<p>&#x7528;&#x6237;&#x5728;&#x5BB9;&#x5668;&#x5185;&#x770B;&#x5230;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x5C31;&#x50CF;&#x662F;&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF0C;&#x5C3D;&#x7BA1;&#x5B83;&#x5B9E;&#x9645;&#x4E0A;&#x662F;&#x7531;&#x591A;&#x4E2A;&#x5C42;&#x53E0;&#x52A0;&#x800C;&#x6210;&#x7684;&#x3002;</p>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x8054;&#x5408;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x7684;&#x5173;&#x952E;&#x5728;&#x4E8E;&#x5B83;&#x80FD;&#x591F;&#x5C06;&#x591A;&#x4E2A;&#x53EA;&#x8BFB;&#x5C42;&#xFF08;&#x4EE3;&#x8868;&#x4E0D;&#x540C;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x72B6;&#x6001;&#xFF09;&#x548C;&#x4E00;&#x4E2A;&#x53EF;&#x5199;&#x5C42;&#xFF08;&#x7528;&#x4E8E;&#x8BB0;&#x5F55;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x53D8;&#x5316;&#xFF09;&#x53E0;&#x52A0;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x4F7F;&#x7528;&#x6237;&#x770B;&#x5230;&#x7684;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#x8868;&#x73B0;&#x4E3A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684;&#x6574;&#x4F53;&#x3002;&#x8FD9;&#x79CD;&#x673A;&#x5236;&#x5728; Docker &#x4E2D;&#x88AB;&#x5E7F;&#x6CDB;&#x5E94;&#x7528;&#xFF0C;&#x7528;&#x4E8E;&#x9AD8;&#x6548;&#x5730;&#x7BA1;&#x7406;&#x548C;&#x5171;&#x4EAB;&#x955C;&#x50CF;&#x5C42;&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x5FEB;&#x901F;&#x7684;&#x5BB9;&#x5668;&#x542F;&#x52A8;&#x548C;&#x9AD8;&#x6548;&#x7684;&#x5B58;&#x50A8;&#x5229;&#x7528;&#x3002;</p>
`,E=[{level:1,title:"Docker \u955C\u50CF",children:[{level:2,title:"\u5C42\u6B21\u5173\u7CFB",children:[{level:3,title:"\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\uFF08Union File System\uFF09",children:[]},{level:3,title:"Docker \u955C\u50CF\u5C42\u6B21\u7ED3\u6784",children:[]},{level:3,title:"\u5BB9\u5668\u5C42\u6B21\u7ED3\u6784",children:[]},{level:3,title:"\u5206\u5C42\u5B58\u50A8\u7684\u4F18\u70B9",children:[]},{level:3,title:"\u793A\u4F8B\uFF1ADocker \u955C\u50CF\u548C\u5BB9\u5668\u7684\u5C42\u6B21\u5173\u7CFB",children:[]},{level:3,title:"\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\uFF08Union File System\uFF09",children:[{level:4,title:"\u76EE\u5F55\u7ED3\u6784",children:[]},{level:4,title:"\u53E0\u52A0\u540E\u7684\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF",children:[]}]},{level:3,title:"\u5177\u4F53\u4F8B\u5B50\uFF1ADocker \u955C\u50CF\u548C\u5BB9\u5668",children:[{level:4,title:"\u53E0\u52A0\u540E\u7684\u6587\u4EF6\u7CFB\u7EDF",children:[]}]},{level:3,title:"\u603B\u7ED3",children:[]}]}]}];export{x as attributes,F as html,E as nestedHeaders};
