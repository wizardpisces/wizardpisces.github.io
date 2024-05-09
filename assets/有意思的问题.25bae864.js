const x={},F=`<h1 id="&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;ArcFace&#x4E3A;&#x4EC0;&#x4E48;&#x6BD4;CosFace&#x6548;&#x679C;&#x597D;"><a href="#&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;ArcFace&#x4E3A;&#x4EC0;&#x4E48;&#x6BD4;CosFace&#x6548;&#x679C;&#x597D;"></a>&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;ArcFace&#x4E3A;&#x4EC0;&#x4E48;&#x6BD4;CosFace&#x6548;&#x679C;&#x597D;</h1>
<h2 id="softmax loss &#x4E0E;&#x4EA4;&#x53C9;&#x71B5;"><a href="#softmax loss &#x4E0E;&#x4EA4;&#x53C9;&#x71B5;"></a>softmax loss &#x4E0E;&#x4EA4;&#x53C9;&#x71B5;</h2>
<ul>
<li>Softmax Loss&#xFF08;Softmax&#x635F;&#x5931;&#xFF09;&#x4E00;&#x822C;&#x6307;&#x7684;&#x5C31;&#x662F;&#x5728;&#x591A;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x4E2D;&#x4F7F;&#x7528;&#x7684;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF0C;&#x4F46;&#x5728;&#x8BA1;&#x7B97;&#x4EA4;&#x53C9;&#x71B5;&#x524D;&#xFF0C;&#x5148;&#x5728;&#x7B54;&#x6848;&#x9884;&#x6D4B;&#xFF08;logits&#xFF09;&#x4E0A;&#x6267;&#x884C;&#x4E86;&#x4E00;&#x6B21; Softmax &#x64CD;&#x4F5C;&#x3002;</li>
<li>&#x4EA4;&#x53C9;&#x71B5;&#x4F5C;&#x4E3A;&#x635F;&#x5931;&#x51FD;&#x6570;&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x597D;&#x5904;&#x662F;&#x4F7F;&#x7528;sigmoid&#x51FD;&#x6570;&#x5728;&#x68AF;&#x5EA6;&#x4E0B;&#x964D;&#x65F6;&#x80FD;&#x907F;&#x514D;&#x5747;&#x65B9;&#x8BEF;&#x5DEE;&#x635F;&#x5931;&#x51FD;&#x6570;&#x5B66;&#x4E60;&#x901F;&#x7387;&#x964D;&#x4F4E;&#x7684;&#x95EE;&#x9898;&#xFF08;&#x68AF;&#x5EA6;&#x8BA1;&#x7B97;&#x7684;&#x65F6;&#x5019;&#x4EA4;&#x53C9;&#x71B5;&#x76F8;&#x5BF9;&#x4E8E;&#x5747;&#x65B9;&#x8BEF;&#x5DEE;&#x635F;&#x5931;&#x80FD;&#x591F;&#x53BB;&#x6389; sigmoid &#x7684;&#x5F71;&#x54CD;&#xFF09;</li>
</ul>
<p><a href="https://blog.csdn.net/gbz3300255/article/details/108470972">reference</a></p>
<h2 id="&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x7684;&#x53D1;&#x5C55;"><a href="#&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x7684;&#x53D1;&#x5C55;"></a>&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x7684;&#x53D1;&#x5C55;</h2>
<p>SphereFace -&gt; CosFace -&gt; ArcFace</p>
<p>&#x6B27;&#x6C0F;&#x8DDD;&#x79BB; -&gt; &#x89D2;&#x5EA6;&#x7A7A;&#x95F4;</p>
<h2 id="SphereFace"><a href="#SphereFace"></a>SphereFace</h2>
<ul>
<li>
<p>&#x635F;&#x5931;&#x51FD;&#x6570; A-Softmax Loss &#x901A;&#x8FC7;&#x5F15;&#x5165;&#x4E00;&#x4E2A;&#x89D2;&#x5EA6;&#x95F4;&#x9694;&#xFF08;Angular Margin&#xFF09;&#x6765;&#x589E;&#x5F3A;&#x7279;&#x5F81;&#x7684;&#x533A;&#x5206;&#x5EA6;&#xFF0C;&#x6B27;&#x51E0;&#x91CC;&#x5F97;&#x7A7A;&#x95F4; -&gt; &#x89D2;&#x7A7A;&#x95F4;&#x3002;&#x5728;&#x591A;&#x5206;&#x7C7B;&#x95EE;&#x9898;&#x4E2D;&#xFF0C;Softmax Loss&#x4F18;&#x5316;&#x7C7B;&#x95F4;&#x8DDD;&#x79BB;&#xFF0C;&#x4F46;&#x5BF9;&#x4E8E;&#x7C7B;&#x5185;&#x8DDD;&#x79BB;&#x7684;&#x4F18;&#x5316;&#x8F83;&#x5F31;&#x3002;&#x539F;&#x56E0;</p>
<ul>
<li>&#x76EE;&#x6807;&#x51FD;&#x6570;&#x8BBE;&#x8BA1;&#xFF1A;&#x5F52;&#x4E00;&#x5316;&#x5904;&#x7406;&#x4F1A;&#x5BFC;&#x81F4;&#x7C7B;&#x5185;&#x6837;&#x672C;&#x7684;&#x7279;&#x5F81;&#x8868;&#x793A;&#x5728;&#x6982;&#x7387;&#x7A7A;&#x95F4;&#x4E2D;&#x88AB;&#x62C9;&#x8FD1;&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C0F;&#x4E86;&#x7C7B;&#x5185;&#x8DDD;&#x79BB;&#x3002;</li>
</ul>
</li>
<li>
<p>&#x5FAE;&#x5C0F;&#x7684;&#x9762;&#x90E8;&#x7279;&#x5F81;&#x5DEE;&#x5F02;&#x53EF;&#x80FD;&#x5728;&#x89D2;&#x5EA6;&#x4E0A;&#x4EA7;&#x751F;&#x66F4;&#x5927;&#x7684;&#x5F71;&#x54CD;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x6B27;&#x51E0;&#x91CC;&#x5F97;&#x7A7A;&#x95F4;&#xFF1B;&#x8FD9;&#x53E5;&#x7ED3;&#x8BBA;&#x662F;&#x5982;&#x4F55;&#x5F97;&#x51FA;&#x7684;&#xFF1F;</p>
<ul>
<li>&#x8FD9;&#x4E2A;&#x7ED3;&#x8BBA;&#x6765;&#x81EA;&#x4E8E;&#x5BF9;&#x9AD8;&#x7EF4;&#x6216;&#x7A00;&#x758F;&#x7279;&#x5F81;&#x7A7A;&#x95F4;&#x7684;&#x89C2;&#x5BDF;&#xFF0C;&#x5B83;&#x6BD4;&#x8F83;&#x5FAE;&#x5999;&#xFF1B;&#x5F53;&#x540C;&#x4E00;&#x5F20;&#x4EBA;&#x8138;&#x51FA;&#x73B0;&#x8868;&#x60C5;&#x6216;&#x8005;&#x5149;&#x7EBF;&#x6539;&#x53D8;&#x65F6;&#xFF0C;&#x7279;&#x5F81;&#x5411;&#x91CF;&#x7684;&#x6B27;&#x51E0;&#x91CC;&#x5F97;&#x8DDD;&#x79BB;&#x53EF;&#x80FD;&#x53D1;&#x751F;&#x663E;&#x8457;&#x53D8;&#x5316;&#xFF0C;&#x56E0;&#x4E3A;&#x8FD9;&#x4E9B;&#x6539;&#x53D8;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x5230;&#x7279;&#x5F81;&#x5411;&#x91CF;&#x7684;&#x957F;&#x5EA6;&#x548C;&#x65B9;&#x5411;&#x3002;&#x5F53;&#x6BD4;&#x8F83;&#x4E0D;&#x540C;&#x4EBA;&#x7684;&#x9762;&#x5B54;&#x65F6;&#xFF0C;&#x54EA;&#x6015;&#x4ED6;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x5916;&#x89C2;&#x5DEE;&#x5F02;&#x5F88;&#x5C0F;&#xFF0C;&#x4ED6;&#x4EEC;&#x7279;&#x5F81;&#x5411;&#x91CF;&#x7684;&#x65B9;&#x5411;&#x4E5F;&#x53EF;&#x80FD;&#x6709;&#x76F8;&#x5F53;&#x5927;&#x7684;&#x5DEE;&#x5F02;&#x3002;&#x5373;&#x4F7F;&#x4ED6;&#x4EEC;&#x5728;&#x6B27;&#x51E0;&#x91CC;&#x5F97;&#x8DDD;&#x79BB;&#x4E0A;&#x63A5;&#x8FD1;&#xFF0C;&#x4ED6;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x89D2;&#x5EA6;&#x4ECD;&#x7136;&#x53EF;&#x80FD;&#x5F88;&#x5927;&#x3002;</li>
</ul>
</li>
<li>
<p>CosFace</p>
</li>
<li>
<p>ArcFace</p>
</li>
</ul>
<p>&#x4F8B;&#x5B50;&#xFF1A;</p>
<pre><code>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E24;&#x5F20;&#x4EBA;&#x8138;&#x56FE;&#x50CF; A &#x548C; B&#xFF0C;&#x5404;&#x6709;&#x4E24;&#x4E2A;&#x7279;&#x5F81;&#x3002;&#x5728;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x7A7A;&#x95F4;&#x4E2D;&#xFF08;&#x6BCF;&#x4E00;&#x7EF4;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x7279;&#x5F81;&#xFF09;&#xFF1A;

&#x5411;&#x91CF; A = (2, 4)&#xFF0C;&#x4EE3;&#x8868;&#x8138;&#x90E8;&#x56FE;&#x50CF; A &#x7684;&#x4E24;&#x4E2A;&#x7279;&#x5F81;&#x503C;&#x3002;
&#x5411;&#x91CF; B = (4, 8)&#xFF0C;&#x4EE3;&#x8868;&#x8138;&#x90E8;&#x56FE;&#x50CF; B &#x7684;&#x4E24;&#x4E2A;&#x7279;&#x5F81;&#x503C;&#x3002;
&#x5728;&#x6B27;&#x51E0;&#x91CC;&#x5F97;&#x7A7A;&#x95F4;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x4F1A;&#x6BD4;&#x8F83; A &#x548C; B &#x4E4B;&#x95F4;&#x7684;&#x4E8C;&#x7EF4;&#x7A7A;&#x95F4;&#x8DDD;&#x79BB;&#x3002;&#x8DDD;&#x79BB;&#x503C; sqrt((4 - 2)&#xB2; + (8 - 4)&#xB2;) = 2.8&#xFF08;&#x7EA6;&#x7B49;&#x4E8E;&#xFF09;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x56FE;&#x50CF; A &#x548C;B &#x5728;&#x6B27;&#x51E0;&#x91CC;&#x5FB7;&#x7A7A;&#x95F4;&#x4E2D;&#x662F;&#x4E0D;&#x5C3D;&#x76F8;&#x540C;&#x7684;&#x3002;

&#x7136;&#x800C;&#xFF0C;&#x4E8B;&#x5B9E;&#x4E0A;&#xFF0C;&#x56FE;&#x50CF; A &#x548C; B &#x53EF;&#x80FD;&#x6765;&#x81EA;&#x540C;&#x4E00;&#x4E2A;&#x4EBA;&#xFF0C;&#x4F46;&#x4E0D;&#x540C;&#x7684;&#x5149;&#x7167;&#x6761;&#x4EF6;&#x3001;&#x76F8;&#x673A;&#x53C2;&#x6570;&#x7B49;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x7279;&#x5F81;&#x7684;&#x7EDD;&#x5BF9;&#x503C;&#xFF0C;&#x4F46;&#x4E0D;&#x4F1A;&#x660E;&#x663E;&#x6539;&#x53D8;&#x7279;&#x5F81;&#x4E4B;&#x95F4;&#x7684;&#x76F8;&#x5BF9;&#x5173;&#x7CFB;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x4ECE;&#x7279;&#x5F81;&#x7684;&#x89D2;&#x5EA6;&#x6765;&#x770B;&#xFF0C;&#x56FE;&#x50CF; A &#x548C;&#x56FE;&#x50CF; B &#x53EF;&#x80FD;&#x66F4;&#x52A0;&#x7C7B;&#x4F3C;&#x3002;

&#x5728;&#x89D2;&#x5EA6;&#x7A7A;&#x95F4;&#x4E2D;&#xFF0C;A &#x548C; B &#x7684;&#x89D2;&#x5EA6;&#x662F; 0&#xFF0C;&#x6211;&#x95E8;&#x4F1A;&#x8BA4;&#x4E3A; A &#x548C; B &#x662F;&#x76F8;&#x540C;&#x7684;&#x3002;

&#x8FD9;&#x4E5F;&#x51F8;&#x663E;&#x4E86;&#x5728;&#x5904;&#x7406;&#x67D0;&#x4E9B;&#x95EE;&#x9898;&#xFF08;&#x5982;&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#xFF0C;&#x6587;&#x672C;&#x76F8;&#x4F3C;&#x6027;&#xFF09;&#x65F6;&#xFF0C;&#x6211;&#x4EEC;&#x5E94;&#x5F53;&#x66F4;&#x5177;&#x91CD;&#x89C6;&#x6570;&#x636E;&#x70B9;&#x4E4B;&#x95F4;&#x7684;&#x89D2;&#x5EA6;&#xFF08;&#x76F8;&#x5BF9;&#x503C;&#xFF09;&#x800C;&#x975E;&#x8DDD;&#x79BB;&#xFF08;&#x7EDD;&#x5BF9;&#x503C;&#xFF09;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4F55;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4E2D;&#x7ECF;&#x5E38;&#x4F7F;&#x7528;&#x89D2;&#x5EA6;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x4F59;&#x5F26;&#x76F8;&#x4F3C;&#x6027;&#x5EA6;&#x91CF;&#x3002;
</code></pre>
<ul>
<li>Reference
<ul>
<li><a href="https://blog.csdn.net/weixin_42111770/article/details/80665419">&#x4EBA;&#x8138;&#x8BC6;&#x522B;&#x4E4B;SphereFace</a></li>
</ul>
</li>
</ul>
<h1 id="LLM &#x6982;&#x8981;"><a href="#LLM &#x6982;&#x8981;"></a>LLM &#x6982;&#x8981;</h1>
<p><img src="https://llmbook-zh.github.io/List.png" alt="roadmap"></p>
<h1 id="Towhee &#x7684; pipeline &#x8BBE;&#x8BA1;&#x7406;&#x5FF5;"><a href="#Towhee &#x7684; pipeline &#x8BBE;&#x8BA1;&#x7406;&#x5FF5;"></a>Towhee &#x7684; pipeline &#x8BBE;&#x8BA1;&#x7406;&#x5FF5;</h1>
<p>Towhee &#x7684; pipeline &#x673A;&#x5236;&#x7684;&#x8BBE;&#x8BA1;&#x7406;&#x5FF5;&#x662F;&#x4E3A;&#x4E86;&#x7B80;&#x5316;&#x673A;&#x5668;&#x5B66;&#x4E60;&#x4EFB;&#x52A1;&#x4E2D;&#x7684; embedding &#x8FC7;&#x7A0B;&#x3002;&#x5B83;&#x65E8;&#x5728;&#x5E2E;&#x52A9;&#x7528;&#x6237;&#x901A;&#x8FC7;&#x51E0;&#x884C;&#x4EE3;&#x7801;&#x5C06;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x6570;&#x636E;&#x8F6C;&#x6362;&#x4E3A;&#x6613;&#x4E8E;&#x7BA1;&#x7406;&#x548C;&#x68C0;&#x7D22;&#x7684;&#x7ED3;&#x6784;&#x5316;&#x6570;&#x636E;&#xFF0C;&#x5373; embeddings&#x3002;</p>
<p>&#x6838;&#x5FC3;&#x7EC4;&#x4EF6;&#x5305;&#x62EC;&#xFF1A;</p>
<ol>
<li>
<p><strong>Operator</strong>&#xFF1A;&#x8FD9;&#x662F; Towhee &#x4E2D;&#x7684;&#x6700;&#x5C0F;&#x529F;&#x80FD;&#x5355;&#x5143;&#xFF0C;&#x6BCF;&#x4E2A; Operator &#x90FD;&#x6709;&#x5176;&#x7279;&#x5B9A;&#x529F;&#x80FD;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E00;&#x4E2A; Operator &#x53EF;&#x80FD;&#x8D1F;&#x8D23;&#x56FE;&#x50CF;&#x9884;&#x5904;&#x7406;&#xFF0C;&#x800C;&#x53E6;&#x4E00;&#x4E2A;&#x5219;&#x8D1F;&#x8D23;&#x4F7F;&#x7528;&#x6A21;&#x578B;&#x5C06;&#x56FE;&#x50CF;&#x8F6C;&#x6362;&#x4E3A; embeddings&#x3002;</p>
</li>
<li>
<p><strong>Pipeline</strong>&#xFF1A;Pipeline &#x662F;&#x4E00;&#x5957;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;&#xFF0C;&#x53EF;&#x4EE5;&#x7531;&#x4E00;&#x4E2A;&#x6709;&#x5411;&#x65E0;&#x73AF;&#x56FE; (DAG) &#x6765;&#x63CF;&#x8FF0;&#xFF0C;&#x5176;&#x4E2D;&#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x90FD;&#x662F;&#x4E00;&#x4E2A; Operator&#x3002;&#x5728; Towhee &#x4E2D;&#xFF0C;&#x6BCF;&#x4E2A; pipeline &#x901A;&#x8FC7;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x6D41;&#x7A0B;&#x5904;&#x7406;&#x67D0;&#x4E00;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x4F8B;&#x5982;&#x751F;&#x6210;&#x56FE;&#x50CF;&#x7684; embeddings&#x3002;&#x8FD9;&#x4E2A; pipeline &#x53EF;&#x80FD;&#x7531;&#x56FE;&#x50CF;&#x9884;&#x5904;&#x7406; Operator &#x548C; embedding &#x6A21;&#x578B; Operator &#x7EC4;&#x6210;&#x3002;</p>
</li>
<li>
<p><strong>Hub</strong>&#xFF1A;Towhee &#x5DF2;&#x7ECF;&#x5EFA;&#x7ACB;&#x4E86;&#x4E00;&#x4E2A; Hub&#xFF0C;&#x5B58;&#x50A8;&#x4E86;&#x7528;&#x6237;&#x7F16;&#x5199;&#x5E76;&#x4E0A;&#x4F20;&#x7684; pipeline&#x3001;operator&#x3001;dataset&#x3002;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x5728; Hub &#x521B;&#x5EFA; repository&#xFF0C;&#x5E76;&#x5C06;&#x4ED6;&#x4EEC;&#x7684; pipeline &#x548C; operator &#x4E0A;&#x4F20;&#x5230; Hub&#xFF0C;&#x4F7F;&#x5F97; Towhee &#x793E;&#x533A;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x4EBA;&#x90FD;&#x53EF;&#x4EE5;&#x4E92;&#x76F8;&#x501F;&#x9274;&#x548C;&#x4F7F;&#x7528;&#x4ED6;&#x4EBA;&#x8BBE;&#x8BA1;&#x7684; pipeline &#x548C; operator&#x3002;</p>
</li>
</ol>
<h1 id="&#x7279;&#x65AF;&#x62C9;&#x7684; FSD &#x7684;&#x6280;&#x672F;&#x6808;"><a href="#&#x7279;&#x65AF;&#x62C9;&#x7684; FSD &#x7684;&#x6280;&#x672F;&#x6808;"></a>&#x7279;&#x65AF;&#x62C9;&#x7684; FSD &#x7684;&#x6280;&#x672F;&#x6808;</h1>
<ul>
<li>RegNet</li>
</ul>
<h1 id="CLIP &#x6A21;&#x578B;"><a href="#CLIP &#x6A21;&#x578B;"></a>CLIP &#x6A21;&#x578B;</h1>
<p>CLIP&#xFF08;Contrastive Language-Image Pretraining&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x57FA;&#x4E8E;&#x5BF9;&#x6BD4;&#x5B66;&#x4E60;&#x7684;&#x591A;&#x6A21;&#x6001;&#x6A21;&#x578B;&#xFF0C;&#x65E8;&#x5728;&#x5C06;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x548C;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;&#x9886;&#x57DF;&#x7ED3;&#x5408;&#x8D77;&#x6765;&#x3002;</p>
<p>CLIP&#x6210;&#x4E3A;&#x4E86;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x548C;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;&#x8FD9;&#x4E24;&#x5927;AI&#x65B9;&#x5411;&#x7684;&#x201C;&#x6865;&#x6881;&#x201D;&#xFF0C;AI&#x9886;&#x57DF;&#x7684;&#x591A;&#x6A21;&#x6001;&#x5E94;&#x7528;&#x6709;&#x4E86;&#x7ECF;&#x5178;&#x7684;&#x57FA;&#x77F3;&#x6A21;&#x578B;&#x3002;</p>
<h1 id="&#x6A21;&#x578B;&#x5DE5;&#x5382;"><a href="#&#x6A21;&#x578B;&#x5DE5;&#x5382;"></a>&#x6A21;&#x578B;&#x5DE5;&#x5382;</h1>
<p>gpt &#x636E;&#x8BF4;&#x662F;&#x4E00;&#x6B21;&#x8BAD;&#x7EC3;&#x6210;&#x529F;&#xFF0C;&#x8BF4;&#x660E;&#x80CC;&#x540E;&#x7684;&#x6A21;&#x578B;&#x5DE5;&#x5382;&#x6D41;&#x6C34;&#x7EBF;&#x5F88;&#x7A33;&#x5B9A;&#xFF08;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x6539;&#x53D8;&#x53C2;&#x6570;&#x5C31;&#x5F97;&#x51FA;&#x9884;&#x671F;&#x7684;&#x8BAD;&#x7EC3;&#x7ED3;&#x679C;&#xFF0C;&#x5BF9;&#x4E8E;&#x6A21;&#x578B;&#x7684;&#x63A7;&#x5236;&#x5F88;&#x7A33;&#x5B9A;&#xFF09;
&#x6A21;&#x578B;&#x6D41;&#x6C34;&#x7EBF;</p>
<h1 id="STNs &#x795E;&#x7ECF;&#x7F51;&#x7EDC;"><a href="#STNs &#x795E;&#x7ECF;&#x7F51;&#x7EDC;"></a>STNs &#x795E;&#x7ECF;&#x7F51;&#x7EDC;</h1>
<p>STN&#xFF08;Spatial Transformer Networks&#xFF09;&#x53EF;&#x4EE5;&#x7B80;&#x5355;&#x7406;&#x89E3;&#x4E3A;&#x901A;&#x8FC7;CNN&#x6765;&#x81EA;&#x52A8;&#x5B66;&#x4E60;&#x8F6C;&#x6362;&#x77E9;&#x9635;&#xFF08;&#x53C2;&#x8003;&#x4E0B;&#x9762;<strong>&#x9F50;&#x6B21;&#x5750;&#x6807;</strong>&#xFF09;&#xFF0C;&#x4F7F;&#x5F97;&#x539F;&#x56FE;&#x548C;&#x8F6C;&#x6362;&#x77E9;&#x9635;&#x8FD0;&#x7B97;&#x540E;&#xFF0C;&#x80FD;&#x591F;&#x88AB;&#x63B0;&#x6B63;&#x3002;&#x53EF;&#x63D2;&#x5165;&#x5230;&#x6DF1;&#x5EA6;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E2D;&#x7684;&#x6A21;&#x5757;&#xFF0C;&#x5B83;&#x53EF;&#x4EE5;&#x81EA;&#x4E3B;&#x5B66;&#x4E60;&#x5982;&#x4F55;&#x6267;&#x884C;&#x7A7A;&#x95F4;&#x53D8;&#x6362;&#x4EE5;&#x589E;&#x5F3A;&#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#x3002;</p>
<p>STN&#x5305;&#x62EC;&#x4E09;&#x4E2A;&#x4E3B;&#x8981;&#x7684;&#x90E8;&#x5206;&#xFF1A;</p>
<ul>
<li>
<p>Localisation Network&#xFF1A;&#x8FD9;&#x662F;STN&#x7684;&#x7B2C;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x8D1F;&#x8D23;&#x5B66;&#x4E60;&#x5982;&#x4F55;&#x6267;&#x884C;&#x6700;&#x4F18;&#x7684;&#x53D8;&#x6362;&#x3002;&#x57FA;&#x672C;&#x4E0A;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF0C;&#x53EF;&#x4EE5;&#x8F93;&#x5165;&#x56FE;&#x50CF;&#x5E76;&#x901A;&#x8FC7;&#x81EA;&#x5DF1;&#x7684;&#x5C42;&#x6765;&#x9884;&#x6D4B;&#x53D8;&#x6362;&#x7684;&#x53C2;&#x6570;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x8981;&#x6267;&#x884C;&#x4EFF;&#x5C04;&#x53D8;&#x6362;&#xFF0C;Localisation Network&#x53EF;&#x80FD;&#x4F1A;&#x8F93;&#x51FA;&#x516D;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x5B9A;&#x4E49;&#x4E86;&#x9700;&#x8981;&#x8FDB;&#x884C;&#x7684;&#x5E73;&#x79FB;&#x3001;&#x7F29;&#x653E;&#x3001;&#x65CB;&#x8F6C;&#x548C;&#x9519;&#x5207; &#x7684;&#x4EFF;&#x5C04;&#x77E9;&#x9635;&#x3002;</p>
</li>
<li>
<p>Parameterised Grid Generator&#xFF1A;&#x8FD9;&#x4E00;&#x90E8;&#x5206;&#x4F1A;&#x63A5;&#x6536;Localisation Network&#x8F93;&#x51FA;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x8FD9;&#x4E9B;&#x53C2;&#x6570;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x5BF9;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x8FDB;&#x884C;&#x53D8;&#x6362;&#x7684;&#x5750;&#x6807;&#x7F51;&#x683C;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x8F93;&#x5165;&#x56FE;&#x50CF;&#x9700;&#x8981;&#x65CB;&#x8F6C;&#xFF0C;&#x5219;&#x7F51;&#x683C;&#x4F1A;&#x751F;&#x6210;&#x65CB;&#x8F6C;&#x540E;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x7684;&#x65B0;&#x4F4D;&#x7F6E;&#x3002;</p>
<ul>
<li>&#x4F8B;&#x5982;
grid = F.affine_grid(theta, x.size())</li>
</ul>
<pre><code>&#x56FE;&#x7247;&#x50CF;&#x7D20;&#xFF1A;
[(0,0), (0,1), (0,2),
</code></pre>
</li>
</ul>
<p>(1,0), (1,1), (1,2),
(2,0), (2,1), (2,2)]</p>
<p>-&gt; &#x4F7F;&#x7528;&#x53F3;&#x79FB;&#x4E00;&#x4F4D;&#x7684;&#x4EFF;&#x5C04;&#x53D8;&#x6362;&#x77E9;&#x9635;&#x751F;&#x6210;&#x7684;&#x4EFF;&#x5C04;&#x53D8;&#x6362;&#x7F51;&#x683C;&#xFF1A;</p>
<p>[(0,1), (0,2), (0,3),
(1,1), (1,2), (1,3),
(2,1), (2,2), (2,3)]</p>
<pre><code>
* Sampler&#xFF1A;F.grid_sample(x, grid) &#x90E8;&#x5206;&#x4F7F;&#x7528;&#x7F51;&#x683C;&#x751F;&#x6210;&#x7684;&#x65B0;&#x5750;&#x6807;&#x53BB;&#x7D22;&#x5F15;&#x8F93;&#x5165;&#x56FE;&#x50CF;&#xFF0C;&#x751F;&#x6210;&#x53D8;&#x6362;&#x540E;&#x7684;&#x8F93;&#x51FA;&#x56FE;&#x50CF;&#x3002;&#x5982;&#x679C;&#x65B0;&#x5750;&#x6807;&#x70B9;&#x4E0D;&#x5728;&#x50CF;&#x7D20;&#x70B9;&#x7684;&#x7CBE;&#x786E;&#x4F4D;&#x7F6E;&#x4E0A;&#xFF0C;&#x5219;&#x4F1A;&#x4F7F;&#x7528;&#x4E00;&#x4E9B;&#x63D2;&#x503C;&#x65B9;&#x6CD5;&#x6765;&#x4F30;&#x8BA1;&#x65B0;&#x5750;&#x6807;&#x5BF9;&#x5E94;&#x7684;&#x50CF;&#x7D20;&#x503C;&#x3002;


[STNs &#x7F51;&#x7EDC;&#x6E90;&#x7801;](https://pytorch.org/tutorials/intermediate/spatial_transformer_tutorial.html#spatial-transformer-networks-tutorial)
# &#x9F50;&#x6B21;&#x5750;&#x6807;
&#x5728;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7CFB;&#x7EDF;&#x4E2D;&#xFF0C;&#x4E00;&#x4E2A; n &#x7EF4;&#x7A7A;&#x95F4;&#x7684;&#x70B9;&#x7528; n+1 &#x7EF4;&#x7684;&#x5750;&#x6807;&#x6765;&#x8868;&#x793A;&#x3002;&#x5728;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x7528;&#x4E24;&#x4E2A;&#x5750;&#x6807; (x, y) &#x6765;&#x8868;&#x793A;&#x8FD9;&#x4E2A;&#x70B9;&#x3002;&#x4F46;&#x662F;&#x5728;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x4F1A;&#x7528;&#x4E09;&#x4E2A;&#x5750;&#x6807; (x, y, z) &#x6765;&#x8868;&#x793A;&#x8FD9;&#x4E2A;&#x70B9;&#x3002;&#x8FD9;&#x91CC;&#x7684; z &#x5750;&#x6807;&#x901A;&#x5E38;&#x88AB;&#x79F0;&#x4E3A;&#x201C;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x201D;&#x3002;
* &#x5C5E;&#x6027;&#xFF1A;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7684;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x5C5E;&#x6027;&#x662F;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x5C06;&#x6240;&#x6709;&#x5750;&#x6807;&#x90FD;&#x4E58;&#x4EE5;&#x540C;&#x4E00;&#x4E2A;&#x975E;&#x96F6;&#x7684;&#x5B9E;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x70B9;&#x7684;&#x4F4D;&#x7F6E;&#x5E76;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#xFF0C;(2, 4, 2) &#x548C; (1, 2, 1) &#x5B9E;&#x9645;&#x4E0A;&#x8868;&#x793A;&#x7684;&#x662F;&#x540C;&#x4E00;&#x4E2A;&#x70B9;&#x3002;
* &#x5E94;&#x7528;&#xFF1A;&#x975E;&#x5E38;&#x9002;&#x5408;&#x7528;&#x6765;&#x8868;&#x793A;&#x51E0;&#x4F55;&#x53D8;&#x6362;&#xFF0C;&#x5982;&#x5E73;&#x79FB;&#x3001;&#x65CB;&#x8F6C;&#x548C;&#x7F29;&#x653E;&#x3002;
## &#x4E3E;&#x4F8B;&#x8BF4;&#x660E;
[&#x5E38;&#x89C1;&#x53D8;&#x6362;&#x77E9;&#x9635;](https://img-blog.csdnimg.cn/20210715201056712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMjQzNzUw,size_16,color_FFFFFF,t_70)
</code></pre>
<p>&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x6709;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x70B9; P&#xFF0C;&#x5176;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x662F; (x, y)&#x3002;&#x6211;&#x4EEC;&#x60F3;&#x5C06;&#x8FD9;&#x4E2A;&#x70B9;&#x5728;&#x5C4F;&#x5E55;&#x4E0A;&#x5411;&#x53F3;&#x79FB;&#x52A8; 5 &#x4E2A;&#x5355;&#x4F4D;&#xFF0C;&#x5E76;&#x5411;&#x4E0A;&#x79FB;&#x52A8; 3 &#x4E2A;&#x5355;&#x4F4D;&#x3002;&#x5728;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x4F1A;&#x662F;&#xFF1A;</p>
<p>P&apos; = (x + 5, y + 3)</p>
<p>&#x4F46;&#x662F;&#xFF0C;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x60F3;&#x901A;&#x8FC7;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x6765;&#x5E94;&#x7528;&#x8FD9;&#x4E2A;&#x5E73;&#x79FB;&#xFF0C;&#x6211;&#x4EEC;&#x5C31;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x4E8C;&#x7EF4;&#x5750;&#x6807;&#xFF0C;&#x56E0;&#x4E3A;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x4E0D;&#x652F;&#x6301;&#x76F4;&#x63A5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x5E38;&#x6570;&#xFF08;&#x5982;&#x5E73;&#x79FB;&#x5411;&#x91CF;&#xFF09;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x53D1;&#x6325;&#x4F5C;&#x7528;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<p>&#x6211;&#x4EEC;&#x9996;&#x5148;&#x5C06;&#x70B9; P &#x8F6C;&#x6362;&#x4E3A;&#x9F50;&#x6B21;&#x5750;&#x6807;&#xFF0C;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x989D;&#x5916;&#x7684;&#x7EF4;&#x5EA6;&#xFF1A;</p>
<p>P_homogeneous = (x, y, 1)</p>
<p>&#x73B0;&#x5728;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A; 3x3 &#x7684;&#x53D8;&#x6362;&#x77E9;&#x9635;&#x6765;&#x8868;&#x793A;&#x5E73;&#x79FB;&#xFF1A;</p>
<p>T = | 1 0 5 |
| 0 1 3 |
| 0 0 1 |</p>
<p>&#x5C06;&#x53D8;&#x6362;&#x77E9;&#x9635; T &#x4E58;&#x4EE5;&#x9F50;&#x6B21;&#x5750;&#x6807; P_homogeneous&#xFF0C;&#x6211;&#x4EEC;&#x5F97;&#x5230;&#xFF1A;</p>
<p>P&apos;_homogeneous = T * P_homogeneous
= | 1 0 5 |   | x |
| 0 1 3 | * | y |
| 0 0 1 |   | 1 |</p>
<pre><code>           = | x + 5 |
             | y + 3 |
             |   1   |
</code></pre>
<p>&#x8FD9;&#x4E2A;&#x7ED3;&#x679C;&#x7684;&#x524D;&#x4E24;&#x4E2A;&#x5750;&#x6807; (x + 5, y + 3) &#x5C31;&#x662F;&#x5E94;&#x7528;&#x5E73;&#x79FB;&#x540E;&#x7684;&#x65B0;&#x4F4D;&#x7F6E;&#xFF0C;&#x4E0E;&#x6211;&#x4EEC;&#x76F4;&#x63A5;&#x5728;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#x8BA1;&#x7B97;&#x7684;&#x7ED3;&#x679C;&#x76F8;&#x540C;&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x4F7F;&#x7528;&#x9F50;&#x6B21;&#x5750;&#x6807;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x6765;&#x5B9E;&#x73B0;&#x8FD9;&#x4E2A;&#x53D8;&#x6362;&#xFF0C;&#x8FD9;&#x5BF9;&#x4E8E;&#x8BA1;&#x7B97;&#x673A;&#x56FE;&#x5F62;&#x5B66;&#x7684;&#x5E94;&#x7528;&#x975E;&#x5E38;&#x91CD;&#x8981;&#xFF0C;&#x56E0;&#x4E3A;&#x786C;&#x4EF6;&#x901A;&#x5E38;&#x9488;&#x5BF9;&#x77E9;&#x9635;&#x8FD0;&#x7B97;&#x8FDB;&#x884C;&#x4E86;&#x4F18;&#x5316;&#x3002;</p>
<p>&#x6700;&#x540E;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x8F6C;&#x6362;&#x56DE;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#xFF0C;&#x53EA;&#x9700;&#x8981;&#x7B80;&#x5355;&#x5730;&#x5FFD;&#x7565;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5750;&#x6807;&#xFF08;&#x5728;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#x662F; 1&#xFF09;&#x5373;&#x53EF;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x70B9; P &#x5728;&#x5E73;&#x79FB;&#x53D8;&#x6362;&#x540E;&#x7684;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x662F; (x + 5, y + 3)&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x5982;&#x4F55;&#x7B80;&#x5316;&#x548C;&#x7EDF;&#x4E00;&#x51E0;&#x4F55;&#x53D8;&#x6362;&#x7684;&#x8868;&#x793A;&#x548C;&#x8BA1;&#x7B97;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728;&#x9700;&#x8981;&#x8FDE;&#x7EED;&#x5E94;&#x7528;&#x591A;&#x4E2A;&#x53D8;&#x6362;&#x65F6;&#x3002;&#x901A;&#x8FC7;&#x4F7F;&#x7528;&#x9F50;&#x6B21;&#x5750;&#x6807;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x591A;&#x4E2A;&#x53D8;&#x6362;&#x5408;&#x5E76;&#x5230;&#x4E00;&#x4E2A;&#x77E9;&#x9635;&#x4E2D;&#xFF0C;&#x7136;&#x540E;&#x4E00;&#x6B21;&#x6027;&#x5E94;&#x7528;&#x5230;&#x70B9;&#x4E0A;&#xFF0C;&#x8FD9;&#x5728;&#x4E09;&#x7EF4;&#x56FE;&#x5F62;&#x6E32;&#x67D3;&#x4E2D;&#x5C24;&#x4E3A;&#x91CD;&#x8981;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x6709;&#x8FD9;&#x4E2A;&#x7279;&#x6027;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x6709;&#x8FD9;&#x4E2A;&#x7279;&#x6027;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x6709;&#x8FD9;&#x4E2A;&#x7279;&#x6027;</h2>
<p>&#x9F50;&#x6B21;&#x5750;&#x6807;&#x6709;&#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x5F15;&#x5165;&#x4E86;&#x4E00;&#x4E2A;&#x989D;&#x5916;&#x7684;&#x7EF4;&#x5EA6;&#x6765;&#x4EE3;&#x8868;&#x70B9;&#x7684;&#x201C;&#x6743;&#x91CD;&#x201D;&#xFF0C;&#x8FD9;&#x5141;&#x8BB8;&#x5750;&#x6807;&#x8868;&#x793A;&#x5728;&#x5C3A;&#x5EA6;&#x4E0A;&#x4E0D;&#x662F;&#x552F;&#x4E00;&#x7684;&#x3002;&#x5728;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7CFB;&#x7EDF;&#x4E2D;&#xFF0C;&#x4E00;&#x4E2A;&#x70B9;&#x7684;&#x4F4D;&#x7F6E;&#x7531;&#x6BD4;&#x4F8B;&#x800C;&#x975E;&#x7EDD;&#x5BF9;&#x503C;&#x786E;&#x5B9A;&#xFF0C;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x53EA;&#x6709;&#x5750;&#x6807;&#x7684;&#x6BD4;&#x4F8B;&#xFF08;&#x6216;&#x6BD4;&#x4F8B;&#x5173;&#x7CFB;&#xFF09;&#x662F;&#x91CD;&#x8981;&#x7684;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B83;&#x4EEC;&#x7684;&#x5B9E;&#x9645;&#x6570;&#x503C;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x7684;&#x6570;&#x5B66;&#x57FA;&#x7840;&#x662F;&#x5C04;&#x5F71;&#x51E0;&#x4F55;&#x4E2D;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x5C04;&#x5F71;&#x51E0;&#x4F55;&#x7814;&#x7A76;&#x7684;&#x662F;&#x5BF9;&#x8C61;&#x7684;&#x51E0;&#x4F55;&#x5C5E;&#x6027;&#x5728;&#x6295;&#x5F71;&#x53D8;&#x6362;&#x4E0B;&#x7684;&#x4E0D;&#x53D8;&#x6027;&#x3002;&#x5728;&#x5C04;&#x5F71;&#x7A7A;&#x95F4;&#x4E2D;&#xFF0C;&#x4E00;&#x4E2A;&#x70B9;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E0D;&#x540C;&#x7684;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x6765;&#x8868;&#x793A;&#xFF0C;&#x53EA;&#x8981;&#x8FD9;&#x4E9B;&#x5750;&#x6807;&#x662F;&#x6210;&#x6BD4;&#x4F8B;&#x7684;&#x3002;&#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x5C04;&#x5F71;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x70B9;&#x662F;&#x901A;&#x8FC7;&#x4ECE;&#x539F;&#x70B9;&#x51FA;&#x53D1;&#x7684;&#x5C04;&#x7EBF;&#x6765;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x800C;&#x6BCF;&#x4E2A;&#x5C04;&#x7EBF;&#x4E0E;&#x7ED9;&#x5B9A;&#x7684;&#x8D85;&#x5E73;&#x9762;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#x4E8C;&#x7EF4;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x7EBF;&#x6216;&#x4E09;&#x7EF4;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x5E73;&#x9762;&#xFF09;&#x76F8;&#x4EA4;&#x4E8E;&#x4E00;&#x70B9;&#x3002;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x4E2D;&#x7684;&#x989D;&#x5916;&#x7EF4;&#x5EA6;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x8868;&#x793A;&#x8FD9;&#x6837;&#x7684;&#x5C04;&#x7EBF;&#xFF0C;&#x5E76;&#x901A;&#x8FC7;&#x4EA4;&#x70B9;&#x6765;&#x786E;&#x5B9A;&#x539F;&#x59CB;&#x7A7A;&#x95F4;&#x4E2D;&#x7684;&#x70B9;&#x3002;</p>
<p>&#x5728;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x4F7F;&#x5F97;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x975E;&#x5E38;&#x9002;&#x5408;&#x8868;&#x793A;&#x5305;&#x62EC;&#x65E0;&#x7A77;&#x8FDC;&#x70B9;&#x5728;&#x5185;&#x7684;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x4F4D;&#x7F6E;&#xFF0C;&#x8FD9;&#x662F;&#x5728;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#x4E0D;&#x53EF;&#x80FD;&#x505A;&#x5230;&#x7684;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5728;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x4E2D;&#xFF0C;&#x70B9; (x, y, z) &#x5728; z &#x4E0D;&#x4E3A;&#x96F6;&#x65F6;&#x53EF;&#x4EE5;&#x8868;&#x793A;&#x4E3A;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807; (x/z, y/z)&#xFF0C;&#x800C;&#x5F53; z &#x4E3A;&#x96F6;&#x65F6;&#xFF0C;&#x8FD9;&#x4E2A;&#x70B9;&#x53EF;&#x4EE5;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x5728;&#x65E0;&#x7A77;&#x8FDC;&#x5904;&#x3002;</p>
<p>&#x5728;&#x8BA1;&#x7B97;&#x673A;&#x56FE;&#x5F62;&#x5B66;&#x4E2D;&#xFF0C;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x7684;&#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x77E9;&#x9635;&#x4E58;&#x6CD5;&#x6765;&#x8868;&#x793A;&#x548C;&#x7EC4;&#x5408;&#x5404;&#x79CD;&#x53D8;&#x6362;&#xFF0C;&#x5305;&#x62EC;&#x90A3;&#x4E9B;&#x5728;&#x4F20;&#x7EDF;&#x7B1B;&#x5361;&#x5C14;&#x5750;&#x6807;&#x7CFB;&#x4E2D;&#x9700;&#x8981;&#x7279;&#x6B8A;&#x5904;&#x7406;&#x7684;&#x53D8;&#x6362;&#xFF0C;&#x5982;&#x5E73;&#x79FB;&#x3002;&#x901A;&#x8FC7;&#x7B80;&#x5355;&#x5730;&#x5C06;&#x53D8;&#x6362;&#x77E9;&#x9635;&#x4E0E;&#x9F50;&#x6B21;&#x5750;&#x6807;&#x5411;&#x91CF;&#x76F8;&#x4E58;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5E94;&#x7528;&#x590D;&#x6742;&#x7684;&#x53D8;&#x6362;&#x5E8F;&#x5217;&#xFF0C;&#x800C;&#x65E0;&#x9700;&#x4E3A;&#x6BCF;&#x79CD;&#x53D8;&#x6362;&#x7C7B;&#x578B;&#x7F16;&#x5199;&#x5355;&#x72EC;&#x7684;&#x4EE3;&#x7801;&#x3002;&#x8FD9;&#x79CD;&#x7EDF;&#x4E00;&#x7684;&#x5904;&#x7406;&#x65B9;&#x5F0F;&#x7B80;&#x5316;&#x4E86;&#x7B97;&#x6CD5;&#xFF0C;&#x5E76;&#x5141;&#x8BB8;&#x786C;&#x4EF6;&#x548C;&#x8F6F;&#x4EF6;&#x4F18;&#x5316;&#x8FD9;&#x4E9B;&#x64CD;&#x4F5C;&#x3002;</p>
<h1 id="SD U-Net&#x7684;&#x6574;&#x4F53;&#x67B6;&#x6784;"><a href="#SD U-Net&#x7684;&#x6574;&#x4F53;&#x67B6;&#x6784;"></a>SD U-Net&#x7684;&#x6574;&#x4F53;&#x67B6;&#x6784;</h1>
<h1 id="ResNet"><a href="#ResNet"></a>ResNet</h1>
<ul>
<li>
<p>ResNet &#x662F;&#x4EC0;&#x4E48;&#x7F51;&#x7EDC;&#xFF1F;&#x5BF9;&#x4E8E; ResNet &#x6A21;&#x578B;&#xFF0C;&#x901A;&#x5E38;&#x4F1A;&#x4F7F;&#x7528; ImageNet &#x6570;&#x636E;&#x96C6;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#xFF0C;ImageNet &#x662F;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x8D85;&#x8FC7;&#x4E00;&#x5343;&#x4E07;&#x5F20;&#x56FE;&#x50CF;&#x7684;&#x5927;&#x89C4;&#x6A21;&#x56FE;&#x50CF;&#x6570;&#x636E;&#x96C6;&#xFF0C;&#x6DB5;&#x76D6;&#x4E86;&#x4E00;&#x5343;&#x4E2A;&#x4E0D;&#x540C;&#x7C7B;&#x522B;&#x7684;&#x56FE;&#x50CF;&#x3002;</p>
<ul>
<li>&#x4EFB;&#x52A1;&#xFF1A;
<ul>
<li>&#x57FA;&#x7840;&#x80FD;&#x529B;&#xFF1A;&#x56FE;&#x7247;&#x5206;&#x7C7B;&#xFF08;&#x57FA;&#x7840;&#x80FD;&#x529B;&#xFF09;</li>
<li>&#x6539;&#x9020;&#x540E;&#x80FD;&#x5B8C;&#x6210;&#x7684;&#x4EFB;&#x52A1;&#xFF1A;&#x76EE;&#x6807;&#x68C0;&#x6D4B;&#xFF08;Object Detection&#xFF09;&#xFF08;&#x8FC1;&#x79FB;&#x5B66;&#x4E60;&#xFF1A;&#x5728;&#x7F51;&#x7EDC;&#x7684;&#x9876;&#x90E8;&#x6DFB;&#x52A0;&#x989D;&#x5916;&#x7684;&#x5377;&#x79EF;&#x5C42;&#x548C;&#x5206;&#x7C7B;&#x5668;&#xFF09;&#xFF0C;&#x8BED;&#x4E49;&#x5206;&#x5272;&#xFF08;Semantic Segmentation&#xFF09;&#xFF0C;&#x5B9E;&#x4F8B;&#x5206;&#x5272;&#xFF08;Instance Segmentation&#xFF09;&#xFF0C;&#x56FE;&#x50CF;&#x98CE;&#x683C;&#x8F6C;&#x6362;&#xFF08;Image Style Transfer&#xFF09;&#xFF0C;&#x56FE;&#x50CF;&#x8D85;&#x5206;&#x8FA8;&#x7387;&#xFF08;Image Super-Resolution&#xFF09; &#x7B49;</li>
</ul>
</li>
</ul>
</li>
<li>
<p>&#x6B8B;&#x5DEE;&#x7684;&#x4F5C;&#x7528;&#xFF1F;</p>
<blockquote>
<p>&#x7F13;&#x89E3;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x95EE;&#x9898;&#xFF1A;&#x7531;&#x4E8E;&#x68AF;&#x5EA6;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x77ED;&#x8DEF;&#x8DEF;&#x5F84;&#x76F4;&#x63A5;&#x4F20;&#x64AD;&#xFF0C;&#x5B83;&#x51CF;&#x5C11;&#x4E86;&#x68AF;&#x5EA6;&#x901A;&#x8FC7;&#x591A;&#x4E2A;&#x5C42;&#x65F6;&#x6F5C;&#x5728;&#x7684;&#x6D88;&#x5931;&#x95EE;&#x9898;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x52A0;&#x901F;&#x8BAD;&#x7EC3;&#xFF1A;&#x7F51;&#x7EDC;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5B66;&#x4E60;&#x6B8B;&#x5DEE;&#x51FD;&#x6570;&#x66F4;&#x52A0;&#x5BB9;&#x6613;&#x5730;&#x8BAD;&#x7EC3;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5728;&#x975E;&#x5E38;&#x6DF1;&#x7684;&#x7F51;&#x7EDC;&#x4E2D;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x63D0;&#x5347;&#x51C6;&#x786E;&#x5EA6;&#xFF1A;&#x6709;&#x4E86;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#xFF0C;&#x7F51;&#x7EDC;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5F97;&#x66F4;&#x6DF1;&#xFF0C;&#x5728;&#x8BB8;&#x591A;&#x89C6;&#x89C9;&#x8BC6;&#x522B;&#x4EFB;&#x52A1;&#x4E2D;&#x53EF;&#x4EE5;&#x63D0;&#x5347;&#x6027;&#x80FD;&#x3002;</p>
</blockquote>
</li>
<li>
<p>&#x65E2;&#x7136;&#x201C;&#x77ED;&#x8DEF;&#x201D;&#x7684;&#x90E8;&#x5206;&#x4E0D;&#x662F;&#x9009;&#x62E9;&#x6027;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x6052;&#x5B9A;&#x7684;&#xFF0C;&#x90A3;&#x4E0D;&#x5C31;&#x662F;&#x6570;&#x636E;&#x540C;&#x65F6;&#x901A;&#x8FC7;&#x5E76;&#x8BAD;&#x7EC3;&#x6B63;&#x5E38;&#x8BAD;&#x7EC3;&#x8DEF;&#x5F84;&#x8DDF;&#x77ED;&#x8DEF;&#x8DEF;&#x5F84;&#xFF0C;&#x8FD9;&#x4E0D;&#x662F;&#x4F1A;&#x8BA9;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x8017;&#x65F6;&#x66F4;&#x957F;&#x4E48;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x8BF4;&#x52A0;&#x901F;&#x4E86;&#x7F51;&#x7EDC;&#x8BAD;&#x7EC3;&#xFF1F;</p>
<blockquote>
<p>&#x77ED;&#x8DEF;&#x8FDE;&#x63A5;&#xFF08;&#x6216;&#x8DF3;&#x8DC3;&#x8FDE;&#x63A5;&#xFF09;&#x548C;&#x4E3B;&#x8DEF;&#x5F84;&#x90FD;&#x4F1A;&#x5728;&#x6BCF;&#x6B21;&#x524D;&#x5411;&#x548C;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x8FC7;&#x7A0B;&#x4E2D;&#x540C;&#x65F6;&#x8FDB;&#x884C;&#x8BA1;&#x7B97;&#x3002;&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;&#xFF08;ResNets&#xFF09;&#x5E76;&#x4E0D;&#x4F1A;&#x8282;&#x7701;&#x8BA1;&#x7B97;&#x65F6;&#x95F4;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x7531;&#x4E8E;&#x5F15;&#x5165;&#x4E86;&#x989D;&#x5916;&#x7684;&#x8DF3;&#x8DC3;&#x8FDE;&#x63A5;&#xFF0C;&#x4ED6;&#x4EEC;&#x5176;&#x5B9E;&#x53EF;&#x80FD;&#x4F1A;&#x7A0D;&#x5FAE;&#x589E;&#x52A0;&#x6574;&#x4F53;&#x7684;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x201C;&#x52A0;&#x901F;&#x201D;&#x5728;&#x8FD9;&#x91CC;&#x6307;&#x7684;&#x662F;&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;&#x7684;&#x6536;&#x655B;&#x901F;&#x5EA6;&#xFF0C;&#x5373;&#x7F51;&#x7EDC;&#x5982;&#x4F55;&#x5FEB;&#x901F;&#x964D;&#x4F4E;&#x8BAD;&#x7EC3;&#x635F;&#x5931;&#x5E76;&#x63D0;&#x9AD8;&#x9A8C;&#x8BC1;&#x6027;&#x80FD;&#x3002;&#x8FD9;&#x4E2A;&#x6536;&#x655B;&#x52A0;&#x901F;&#x662F;&#x901A;&#x8FC7;&#x5904;&#x7406;&#x4E00;&#x4E9B;&#x5F71;&#x54CD;&#x6DF1;&#x5EA6;&#x7F51;&#x7EDC;&#x8BAD;&#x7EC3;&#x7684;&#x95EE;&#x9898;&#x5B9E;&#x73B0;&#x7684;&#x3002;</p>
</blockquote>
<blockquote>
<ol>
<li><strong>&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x548C;&#x68AF;&#x5EA6;&#x7206;&#x70B8;&#x95EE;&#x9898;</strong>&#xFF1A;&#x6DF1;&#x5EA6;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x5F80;&#x5F80;&#x96BE;&#x4EE5;&#x8BAD;&#x7EC3;&#xFF0C;&#x56E0;&#x4E3A;&#x68AF;&#x5EA6;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x635F;&#x5931;&#x51FD;&#x6570;&#x76F8;&#x5BF9;&#x4E8E;&#x53C2;&#x6570;&#x7684;&#x5BFC;&#x6570;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x53D8;&#x5F97;&#x975E;&#x5E38;&#x5C0F;&#xFF08;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#xFF09;&#x6216;&#x975E;&#x5E38;&#x5927;&#xFF08;&#x68AF;&#x5EA6;&#x7206;&#x70B8;&#xFF09;&#x3002;&#x8FD9;&#x4F7F;&#x5F97;&#x4F18;&#x5316;&#x7B97;&#x6CD5;&#x96BE;&#x4EE5;&#x7528;&#x6709;&#x6548;&#x7684;&#x6B65;&#x9AA4;&#x6765;&#x66F4;&#x65B0;&#x53C2;&#x6570;&#x3002;&#x901A;&#x8FC7;&#x5F15;&#x5165;&#x77ED;&#x8DEF;&#x8FDE;&#x63A5;&#xFF0C;ResNets &#x5141;&#x8BB8;&#x68AF;&#x5EA6;&#x5728;&#x4E0D;&#x53D7;&#x963B;&#x788D;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x6D41;&#x7ECF;&#x591A;&#x4E2A;&#x5C42;&#x3002;&#x8FD9;&#x66F4;&#x5BB9;&#x6613;&#x4FDD;&#x6301;&#x68AF;&#x5EA6;&#x7684;&#x5927;&#x5C0F;&#x9002;&#x4E2D;&#xFF0C;&#x4ECE;&#x800C;&#x66F4;&#x6709;&#x6548;&#x5730;&#x8FDB;&#x884C;&#x6743;&#x91CD;&#x66F4;&#x65B0;&#x3002;</li>
</ol>
</blockquote>
<blockquote>
<ol start="2">
<li><strong>&#x6052;&#x7B49;&#x6620;&#x5C04;&#x7684;&#x4FDD;&#x7559;</strong>&#xFF1A;ResNets&#x7684;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x601D;&#x60F3;&#x662F;:&#x5982;&#x679C;&#x6DF1;&#x5C42;&#x7F51;&#x7EDC;&#x53EF;&#x4EE5;&#x5728;&#x4E0D;&#x635F;&#x5931;&#x6027;&#x80FD;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x7ED9;&#x51FA;&#x4E00;&#x4E2A;&#x6052;&#x7B49;&#x6620;&#x5C04;&#xFF0C;&#x90A3;&#x4E48;&#x4EFB;&#x4F55;&#x589E;&#x52A0;&#x6DF1;&#x5EA6;&#x7684;&#x5C1D;&#x8BD5;&#x90FD;&#x4E0D;&#x5E94;&#x51CF;&#x5C11;&#x7F51;&#x7EDC;&#x7684;&#x6027;&#x80FD;&#x3002;&#x901A;&#x8FC7;&#x5F15;&#x5165;&#x77ED;&#x8DEF;&#x8FDE;&#x63A5;&#xFF0C;&#x7F51;&#x7EDC;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5230;&#x7684;&#x6620;&#x5C04;&#x66F4;&#x63A5;&#x8FD1;&#x4E8E;&#x6052;&#x7B49;&#x6620;&#x5C04;&#xFF0C;&#x8FD9;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x4FDD;&#x8BC1;&#x6DF1;&#x5EA6;&#x589E;&#x52A0;&#x8FDB;&#x800C;&#x6027;&#x80FD;&#x589E;&#x52A0;&#x3002;</li>
</ol>
</blockquote>
<blockquote>
<p>&#x6240;&#x4EE5;&#xFF0C;&#x5F53;&#x6211;&#x4EEC;&#x8BF4;ResNets &quot;&#x52A0;&#x901F;&quot;&#x8BAD;&#x7EC3;&#x65F6;&#xFF0C;&#x662F;&#x6307;&#x5B83;&#x4EEC;&#x901A;&#x8FC7;&#x89E3;&#x51B3;&#x8FD9;&#x4E9B;&#x95EE;&#x9898;&#x589E;&#x5F3A;&#x4E86;&#x6536;&#x655B;&#x6027;&#xFF0C;&#x4ECE;&#x800C;&#x66F4;&#x5FEB;&#x5730;&#x8FBE;&#x5230;&#x826F;&#x597D;&#x7684;&#x8BAD;&#x7EC3;&#x548C;&#x9A8C;&#x8BC1;&#x6027;&#x80FD;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B83;&#x4EEC;&#x51CF;&#x5C0F;&#x4E86;&#x6BCF;&#x4E2A;&#x8FED;&#x4EE3;&#x7684;&#x8BA1;&#x7B97;&#x6210;&#x672C;&#x3002;</p>
</blockquote>
</li>
<li>
<p>&#x7F51;&#x7EDC;&#x5565;&#x65F6;&#x5019;&#x8D70;&#x77ED;&#x8DEF;&#xFF0C;&#x5565;&#x65F6;&#x5019;&#x8D70;&#x6B63;&#x5E38;&#x8BAD;&#x7EC3;&#x8DEF;&#x5F84;&#x5462;&#xFF1F;</p>
<blockquote>
<p>&#x6B8B;&#x5DEE;&#x7F51;&#x7EDC;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x5C42;&#x90FD;&#x7531;&#x4E24;&#x4E2A;&#x4E3B;&#x8981;&#x90E8;&#x5206;&#x7EC4;&#x6210;&#xFF1A;&#x6B63;&#x5E38;&#x8DEF;&#x5F84;&#xFF08;&#x6216;&#x79F0;&#x4E3A;&#x8F6C;&#x6362;&#x8DEF;&#x5F84;&#xFF09;&#x548C;&#x77ED;&#x8DEF;&#x6216;&#x8DF3;&#x8FC7;&#x7684;&#x8DEF;&#x5F84;&#xFF08;&#x8DF3;&#x8DC3;&#x8FDE;&#x63A5;&#xFF09;&#x3002;&#x8FD9;&#x4E24;&#x6761;&#x8DEF;&#x5F84;&#x5728;&#x6700;&#x540E;&#x5408;&#x5E76;&#xFF0C;&#x901A;&#x5E38;&#x662F;&#x901A;&#x8FC7;&#x7B80;&#x5355;&#x7684;&#x52A0;&#x6CD5;&#x64CD;&#x4F5C;&#x8FDB;&#x884C;&#x5408;&#x5E76;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x67B6;&#x6784;&#xFF0C;&#x7F51;&#x7EDC;&#x53EF;&#x4EE5;&#x7075;&#x6D3B;&#x5730;&#x9009;&#x62E9;&#x5728;&#x67D0;&#x4E2A;&#x7279;&#x5B9A;&#x5C42;&#x91C7;&#x53D6;&#x4EC0;&#x4E48;&#x6837;&#x7684;&#x884C;&#x52A8;&#x3002;&#x5982;&#x679C;&#x6709;&#x4E00;&#x5C42;&#x7684;&#x8F93;&#x51FA;&#x4E0E;&#x5176;&#x8F93;&#x5165;&#x6CA1;&#x6709;&#x592A;&#x5927;&#x5DEE;&#x5F02;&#xFF08;&#x5373;&#xFF1A;&quot;residual&quot;&#xFF0C;&#x6216;&#x6B8B;&#x5DEE;&#xFF0C;&#x63A5;&#x8FD1;&#x4E8E;&#x96F6;&#xFF08;&#x5219;&#x8BF4;&#x660E;&#x6B63;&#x5E38;&#x8DEF;&#x5F84;&#x7684;&#x8F93;&#x51FA;&#x8D8B;&#x8FD1;0&#xFF09;&#xFF0C;&#x6B8B;&#x5DEE; = &#x6B8B;&#x5DEE;&#x5757;&#x8F93;&#x51FA;&#xFF08;=&#x6B8B;&#x5DEE;&#x8DEF;&#x5F84;&#xFF08;&#x4E00;&#x822C;&#x662F;&#x8F93;&#x5165;&#xFF09;+&#x6B63;&#x5E38;&#x8DEF;&#x5F84;&#x8F93;&#x51FA;&#xFF09; - &#x6B8B;&#x5DEE;&#x5757;&#x8F93;&#x5165;&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x7F51;&#x7EDC;&#x53EF;&#x80FD;&#x9009;&#x62E9;&#x5927;&#x90E8;&#x5206;&#x4F7F;&#x7528;&#x8DF3;&#x8DC3;&#x8FDE;&#x63A5;&#x7684;&#x8DEF;&#x5F84;&#xFF0C;&#x628A;&#x90A3;&#x4E2A;&#x5C42;&#x7684;&#x8F93;&#x51FA;&#x76F4;&#x63A5;&#x4F20;&#x9012;&#x5230;&#x4E0B;&#x4E00;&#x4E2A;&#x5C42;&#x3002;&#x8FD9;&#x6837;&#x7684;&#x7ED3;&#x679C;&#x5927;&#x81F4;&#x662F;&#xFF0C;&#x8FD9;&#x4E00;&#x5C42;&#x5E76;&#x6CA1;&#x6709;&#x505A;&#x592A;&#x591A;&#x7684;&#x6539;&#x53D8;&#xFF0C;&#x53EA;&#x662F;&#x66F2;&#x7EBF;&#x6551;&#x8FC7;&#x4E86;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x95EE;&#x9898;&#x3002;&#x5728;&#x67D0;&#x79CD;&#x7A0B;&#x5EA6;&#x4E0A;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x8FD9;&#x79CD;&#x884C;&#x4E3A;&#x770B;&#x4F5C;&#x662F;&#x7F51;&#x7EDC;&quot;&#x5173;&#x95ED;&quot;&#x4E86;&#x8FD9;&#x4E2A;&#x5C42;&#x7684;&#x90E8;&#x5206;&#x64CD;&#x4F5C;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x53E6;&#x4E00;&#x65B9;&#x9762;&#xFF0C;&#x5982;&#x679C;&#x67D0;&#x4E00;&#x5C42;&#x7684;&#x8F93;&#x5165;&#x548C;&#x8F93;&#x51FA;&#x4E4B;&#x95F4;&#x6709;&#x5F88;&#x5927;&#x7684;&#x5DEE;&#x5F02;&#xFF08;&#x5373;&#xFF1A;&quot;residual&quot;&#xFF0C;&#x6216;&#x6B8B;&#x5DEE;&#xFF0C;&#x4E0D;&#x63A5;&#x8FD1;&#x4E8E;&#x96F6;&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x7F51;&#x7EDC;&#x53EF;&#x80FD;&#x4F1A;&#x66F4;&#x591A;&#x5730;&#x4F7F;&#x7528;&#x6B63;&#x5E38;&#x8DEF;&#x5F84;&#xFF0C;&#x800C;&#x4E0D;&#x4F9D;&#x8D56;&#x8DF3;&#x8DC3;&#x8FDE;&#x63A5;&#x3002;&#x8FD9;&#x5C31;&#x610F;&#x5473;&#x7740;&#x7F51;&#x7EDC;&#x5B9E;&#x9645;&#x4E0A;&#x5BF9;&#x6570;&#x636E;&#x8FDB;&#x884C;&#x4E86;&#x4E00;&#x4E9B;&#x6709;&#x7528;&#x7684;&#x53D8;&#x6362;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x8FD9;&#x4E2A;&#x51B3;&#x5B9A;&#x662F;&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x81EA;&#x7136;&#x4EA7;&#x751F;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x901A;&#x8FC7;&#x4EBA;&#x5DE5;&#x91C7;&#x53D6;&#x4E3B;&#x52A8;&#x8C03;&#x6574;&#x7684;&#x3002;&#x6240;&#x6709;&#x8FD9;&#x4E00;&#x5207;&#x7684;&#x76EE;&#x6807;&#x90FD;&#x662F;&#x4E3A;&#x4E86;&#x6700;&#x5C0F;&#x5316;&#x8BAD;&#x7EC3;&#x6570;&#x636E;&#x548C;&#x7F51;&#x7EDC;&#x9884;&#x6D4B;&#x4E4B;&#x95F4;&#x7684;&#x8BEF;&#x5DEE;&#x3002;&#x901A;&#x8FC7;&#x8BAD;&#x7EC3;&#x81EA;&#x7136;&#x800C;&#x7136;&#x5730;&#x4F7F;&#x5F97;&#x4E00;&#x6761;&#x8DEF;&#x5F84;&#x7684;&#x5F71;&#x54CD;&#x529B;&#x589E;&#x5F3A;&#xFF0C;&#x53E6;&#x4E00;&#x6761;&#x8DEF;&#x5F84;&#x7684;&#x5F71;&#x54CD;&#x529B;&#x51CF;&#x5F31;&#x3002;</p>
</blockquote>
</li>
</ul>
<p><a href="https://zhuanlan.zhihu.com/p/31852747">ResNet &#x8BE6;&#x7EC6;&#x89E3;&#x91CA;</a></p>
<h1 id="&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6210;&#x5C31;&#x4EBA;&#x7269;"><a href="#&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6210;&#x5C31;&#x4EBA;&#x7269;"></a>&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6210;&#x5C31;&#x4EBA;&#x7269;</h1>
<p>&#x5982;&#x679C;&#x8BF4;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x4E09;&#x5DE8;&#x5934;Hinton&#x3001;LeCun&#x3001;Bengio&#x662F;T0&#x7EA7;&#x522B;&#xFF0C;&#x90A3;&#x4E48;&#x4F55;&#x607A;&#x660E;&#xFF08;ResNet&#xFF09;&#x6BEB;&#x65E0;&#x7591;&#x95EE;T1&#x7EA7;&#x522B;&#x3002;</p>
<ul>
<li>
<p>Geoffrey Hinton&#xFF08;&#x6770;&#x5F17;&#x91CC;&#xB7;&#x8F9B;&#x987F;&#xFF09;&#xFF1A;&#x4ED6;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x9886;&#x57DF;&#x7684;&#x5148;&#x9A71;&#x4E4B;&#x4E00;&#xFF0C;&#x63D0;&#x51FA;&#x4E86;&#x53CD;&#x5411;&#x4F20;&#x64AD;&#x7B97;&#x6CD5;&#xFF0C;&#x5E76;&#x5728;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x548C;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x9886;&#x57DF;&#x505A;&#x51FA;&#x4E86;&#x4F17;&#x591A;&#x91CD;&#x8981;&#x8D21;&#x732E;&#x3002;&#x4ED6;&#x7684;&#x5DE5;&#x4F5C;&#x4E3A;&#x73B0;&#x4EE3;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7684;&#x53D1;&#x5C55;&#x5960;&#x5B9A;&#x4E86;&#x57FA;&#x7840;&#x3002;</p>
</li>
<li>
<p>Yann LeCun&#xFF08;&#x6768;&#x7ACB;&#x6606;&#xFF09;&#xFF1A;&#x4ED6;&#x662F;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#xFF08;CNN&#xFF09;&#x7684;&#x5148;&#x9A71;&#x4E4B;&#x4E00;&#xFF0C;&#x63D0;&#x51FA;&#x4E86;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x7684;&#x6982;&#x5FF5;&#xFF0C;&#x5E76;&#x5728;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x3001;&#x6A21;&#x5F0F;&#x8BC6;&#x522B;&#x548C;&#x81EA;&#x7136;&#x8BED;&#x8A00;&#x5904;&#x7406;&#x7B49;&#x9886;&#x57DF;&#x505A;&#x51FA;&#x4E86;&#x91CD;&#x8981;&#x8D21;&#x732E;&#x3002;</p>
</li>
<li>
<p>Yoshua Bengio&#xFF08;&#x7EA6;&#x4E66;&#x4E9A;&#xB7;&#x672C;&#x5409;&#x5965;&#xFF09;&#xFF1A;&#x4ED6;&#x662F;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x9886;&#x57DF;&#x7684;&#x6770;&#x51FA;&#x79D1;&#x5B66;&#x5BB6;&#x4E4B;&#x4E00;&#xFF0C;&#x63D0;&#x51FA;&#x4E86;&#x6DF1;&#x5EA6;&#x7F6E;&#x4FE1;&#x7F51;&#x7EDC;&#xFF08;DBN&#xFF09;&#x548C;&#x6DF1;&#x5EA6;&#x751F;&#x6210;&#x6A21;&#x578B;&#x7B49;&#x91CD;&#x8981;&#x6982;&#x5FF5;&#xFF0C;&#x5E76;&#x5728;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x7406;&#x8BBA;&#x548C;&#x7B97;&#x6CD5;&#x65B9;&#x9762;&#x505A;&#x51FA;&#x4E86;&#x8BB8;&#x591A;&#x5F00;&#x521B;&#x6027;&#x5DE5;&#x4F5C;&#x3002;</p>
</li>
</ul>
<p><a href="https://www.zhihu.com/question/424149824/answer/2296707462">&#x4F55;&#x607A;&#x660E;&#x76EE;&#x524D;&#x7684;&#x5B66;&#x672F;&#x6210;&#x679C;&#x662F;&#x5426;&#x591F;&#x5F97;&#x4E0A;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x9886;&#x57DF;&#x5386;&#x53F2;&#x7B2C;&#x4E00;&#x4EBA;&#xFF1F;</a></p>
<h1 id="Resource"><a href="#Resource"></a>Resource</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/632809634">SD &#x8BE6;&#x89E3;</a></li>
<li><a href="https://github.com/315386775/DeepLearing-Interview-Awesome-2024">DeepLearing-Interview-Awesome-2024</a></li>
</ul>
`,E=[{level:1,title:"\u4EBA\u8138\u8BC6\u522B\u4EFB\u52A1\u4E2D\uFF0CArcFace\u4E3A\u4EC0\u4E48\u6BD4CosFace\u6548\u679C\u597D",children:[{level:2,title:"softmax loss \u4E0E\u4EA4\u53C9\u71B5",children:[]},{level:2,title:"\u4EBA\u8138\u8BC6\u522B\u7684\u53D1\u5C55",children:[]},{level:2,title:"SphereFace",children:[]}]},{level:1,title:"LLM \u6982\u8981",children:[]},{level:1,title:"Towhee \u7684 pipeline \u8BBE\u8BA1\u7406\u5FF5",children:[]},{level:1,title:"\u7279\u65AF\u62C9\u7684 FSD \u7684\u6280\u672F\u6808",children:[]},{level:1,title:"CLIP \u6A21\u578B",children:[]},{level:1,title:"\u6A21\u578B\u5DE5\u5382",children:[]},{level:1,title:"STNs \u795E\u7ECF\u7F51\u7EDC",children:[{level:2,title:"\u4E3A\u4EC0\u4E48\u9F50\u6B21\u5750\u6807\u6709\u8FD9\u4E2A\u7279\u6027",children:[]}]},{level:1,title:"SD U-Net\u7684\u6574\u4F53\u67B6\u6784",children:[]},{level:1,title:"ResNet",children:[]},{level:1,title:"\u6DF1\u5EA6\u5B66\u4E60\u6210\u5C31\u4EBA\u7269",children:[]},{level:1,title:"Resource",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
