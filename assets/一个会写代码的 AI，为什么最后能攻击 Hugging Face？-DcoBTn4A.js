const x={},F=`<h1 id="AI Agent &#x7684;&#x884C;&#x52A8;&#x80FD;&#x529B;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x88AB;&#x653E;&#x5927;&#x6210;&#x653B;&#x51FB;&#x94FE;&#xFF1F;&#x2014;&#x2014;&#x4ECE; Hugging Face &#x653B;&#x51FB;&#x53D6;&#x8BC1;&#x8BF4;&#x8D77;"><a href="#AI Agent &#x7684;&#x884C;&#x52A8;&#x80FD;&#x529B;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x88AB;&#x653E;&#x5927;&#x6210;&#x653B;&#x51FB;&#x94FE;&#xFF1F;&#x2014;&#x2014;&#x4ECE; Hugging Face &#x653B;&#x51FB;&#x53D6;&#x8BC1;&#x8BF4;&#x8D77;"></a>AI Agent &#x7684;&#x884C;&#x52A8;&#x80FD;&#x529B;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x88AB;&#x653E;&#x5927;&#x6210;&#x653B;&#x51FB;&#x94FE;&#xFF1F;&#x2014;&#x2014;&#x4ECE; Hugging Face &#x653B;&#x51FB;&#x53D6;&#x8BC1;&#x8BF4;&#x8D77;</h1>
<p>&#x5047;&#x8BBE;&#x73B0;&#x5728;&#x6709;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#xFF1A;</p>
<ul>
<li>&#x53EF;&#x4EE5;&#x6267;&#x884C; Shell &#x547D;&#x4EE4;&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x8BFB;&#x53D6;&#x6587;&#x4EF6;&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x8BBF;&#x95EE;&#x4E92;&#x8054;&#x7F51;&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x8C03;&#x7528; API&#xFF1B;</li>
<li>&#x4F46;&#x4F60;&#x6CA1;&#x6709;&#x544A;&#x8BC9;&#x5B83;&#x6BCF;&#x4E00;&#x6B65;&#x5177;&#x4F53;&#x505A;&#x4EC0;&#x4E48;&#x3002;</li>
</ul>
<p>&#x4F60;&#x53EA;&#x7ED9;&#x5B83;&#x4E00;&#x4E2A;&#x76EE;&#x6807;&#x3002;</p>
<p>&#x5269;&#x4E0B;&#x7684;&#x8DEF;&#xFF0C;&#x5B83;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x3002;</p>
<p>&#x4F60;&#x4F1A;&#x628A;&#x5B83;&#x5F53;&#x6210;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>&#x5982;&#x679C;&#x4F60;&#x7684;&#x7B54;&#x6848;&#x662F;&#x201C;&#x4E00;&#x4E2A; AI Agent&#x201D;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x5DF2;&#x7ECF;&#x6293;&#x4F4F;&#x4E86; Hugging Face &#x8FD9;&#x6B21;&#x4E8B;&#x4EF6;&#x6700;&#x6838;&#x5FC3;&#x7684;&#x90E8;&#x5206;&#x3002;</p>
<h2 id="Agent &#x548C;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#xFF0C;&#x5DEE;&#x522B;&#x4E0D;&#x53EA;&#x662F;&#x4F1A;&#x4E0D;&#x4F1A;&#x5199;&#x4EE3;&#x7801;"><a href="#Agent &#x548C;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#xFF0C;&#x5DEE;&#x522B;&#x4E0D;&#x53EA;&#x662F;&#x4F1A;&#x4E0D;&#x4F1A;&#x5199;&#x4EE3;&#x7801;"></a>Agent &#x548C;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#xFF0C;&#x5DEE;&#x522B;&#x4E0D;&#x53EA;&#x662F;&#x4F1A;&#x4E0D;&#x4F1A;&#x5199;&#x4EE3;&#x7801;</h2>
<p>&#x4F20;&#x7EDF;&#x7A0B;&#x5E8F;&#x901A;&#x5E38;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165; &#x2192; &#x56FA;&#x5B9A;&#x903B;&#x8F91; &#x2192; &#x8F93;&#x51FA;
</code></pre>
<p>Agent &#x66F4;&#x50CF;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">&#x76EE;&#x6807;
 &#x2193;
&#x89C2;&#x5BDF;&#x73AF;&#x5883;
 &#x2193;
&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;
 &#x2193;
&#x8C03;&#x7528;&#x5DE5;&#x5177;
 &#x2193;
&#x5F97;&#x5230;&#x7ED3;&#x679C;
 &#x2193;
&#x518D;&#x6B21;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;
 &#x2193;
&#x2026;&#x2026;
</code></pre>
<p>&#x5B83;&#x548C;&#x666E;&#x901A;&#x7A0B;&#x5E8F;&#x6700;&#x5927;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x4E0D;&#x662F;&#x4F1A;&#x4E0D;&#x4F1A;&#x751F;&#x6210;&#x4EE3;&#x7801;&#xFF0C;&#x800C;&#x662F;&#x53EF;&#x4EE5;&#x53C2;&#x4E0E;&#x51B3;&#x5B9A;&#x201C;&#x4E0B;&#x4E00;&#x6B65;&#x505A;&#x4EC0;&#x4E48;&#x201D;&#x3002;</p>
<p>&#x7528;&#x7A0B;&#x5E8F;&#x5458;&#x719F;&#x6089;&#x7684;&#x4F2A;&#x4EE3;&#x7801;&#x8868;&#x793A;&#xFF0C;&#x5C31;&#x662F;&#xFF1A;</p>
<pre><code class="language-python"><span class="hljs-keyword">while</span> <span class="hljs-keyword">not</span> goal_reached:
    observation = observe()
    action = model.decide(observation)
    result = execute(action)
</code></pre>
<p>&#x6A21;&#x578B;&#x8D1F;&#x8D23;&#x63D0;&#x51FA;&#x884C;&#x52A8;&#xFF0C;&#x7A0B;&#x5E8F;&#x8D1F;&#x8D23;&#x6267;&#x884C;&#x884C;&#x52A8;&#xFF0C;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x518D;&#x56DE;&#x5230;&#x6A21;&#x578B;&#xFF0C;&#x6210;&#x4E3A;&#x4E0B;&#x4E00;&#x8F6E;&#x5224;&#x65AD;&#x7684;&#x8F93;&#x5165;&#x3002;</p>
<p>&#x8FD9;&#x6761;&#x5FAA;&#x73AF;&#x4E00;&#x65E6;&#x63A5;&#x4E0A; Shell&#x3001;&#x7F51;&#x7EDC;&#x548C;&#x6587;&#x4EF6;&#x7CFB;&#x7EDF;&#xFF0C;Agent &#x5C31;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x80FD;&#x5728;&#x771F;&#x5B9E;&#x73AF;&#x5883;&#x91CC;&#x6301;&#x7EED;&#x505A;&#x4E8B;&#x7684;&#x8F6F;&#x4EF6;&#x7CFB;&#x7EDF;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E5F;&#x89E3;&#x91CA;&#x4E86;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x9002;&#x5408;&#x505A;&#x653B;&#x51FB;"><a href="#&#x8FD9;&#x4E5F;&#x89E3;&#x91CA;&#x4E86;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x9002;&#x5408;&#x505A;&#x653B;&#x51FB;"></a>&#x8FD9;&#x4E5F;&#x89E3;&#x91CA;&#x4E86;&#x5B83;&#x4E3A;&#x4EC0;&#x4E48;&#x9002;&#x5408;&#x505A;&#x653B;&#x51FB;</h2>
<p>&#x5047;&#x8BBE;&#x4EFB;&#x52A1;&#x53D8;&#x6210;&#xFF1A;</p>
<blockquote>
<p>&#x627E;&#x5230;&#x8FD9;&#x53F0;&#x673A;&#x5668;&#x4E0A;&#x7684;&#x6F0F;&#x6D1E;&#xFF0C;&#x5E76;&#x8BC1;&#x660E;&#x4F60;&#x80FD;&#x591F;&#x5229;&#x7528;&#x5B83;&#x3002;</p>
</blockquote>
<p>&#x4F20;&#x7EDF;&#x811A;&#x672C;&#x9700;&#x8981;&#x63D0;&#x524D;&#x5199;&#x597D;&#x626B;&#x63CF;&#x3001;&#x5224;&#x65AD;&#x3001;&#x5229;&#x7528;&#x548C;&#x7ED3;&#x679C;&#x89E3;&#x6790;&#x7684;&#x5B8C;&#x6574;&#x8DEF;&#x5F84;&#x3002;Agent &#x53EF;&#x4EE5;&#x8FB9;&#x8D70;&#x8FB9;&#x6539;&#xFF1A;</p>
<pre><code class="language-text">&#x626B;&#x63CF;
 &#x2193;
&#x53D1;&#x73B0;&#x4E00;&#x4E2A;&#x670D;&#x52A1;
 &#x2193;
&#x5224;&#x65AD;&#x6280;&#x672F;&#x6808;
 &#x2193;
&#x5C1D;&#x8BD5;&#x4E00;&#x79CD;&#x653B;&#x51FB;
 &#x2193;
&#x5931;&#x8D25;
 &#x2193;
&#x6362;&#x4E00;&#x79CD;
 &#x2193;
&#x53D1;&#x73B0;&#x5F02;&#x5E38;&#x54CD;&#x5E94;
 &#x2193;
&#x641C;&#x7D22;&#x76F8;&#x5173;&#x4FE1;&#x606F;
 &#x2193;
&#x5C1D;&#x8BD5;&#x5229;&#x7528;
 &#x2193;
&#x7EE7;&#x7EED;&#x89C2;&#x5BDF;&#x73AF;&#x5883;
</code></pre>
<p>Agent &#x4E0D;&#x9700;&#x8981;&#x63D0;&#x524D;&#x77E5;&#x9053;&#x5B8C;&#x6574;&#x7684;&#x653B;&#x51FB;&#x8DEF;&#x5F84;&#x3002;&#x5B83;&#x53EA;&#x9700;&#x8981;&#x77E5;&#x9053;&#x76EE;&#x6807;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x6BCF;&#x4E00;&#x6B65;&#x7684;&#x53CD;&#x9988;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;&#x3002;</p>
<p>&#x6240;&#x8C13;&#x201C;AI &#x81EA;&#x52A8;&#x653B;&#x51FB;&#x201D;&#xFF0C;&#x7A81;&#x7136;&#x5C31;&#x6CA1;&#x6709;&#x90A3;&#x4E48;&#x795E;&#x79D8;&#x4E86;&#xFF1A;&#x5B83;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x81EA;&#x5DF1;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x6B65;&#x884C;&#x52A8;&#x7684;&#x7A0B;&#x5E8F;&#x3002;</p>
<h2 id="&#x6240;&#x4EE5;&#xFF0C;&#x5148;&#x628A;&#x5B83;&#x5173;&#x8D77;&#x6765;"><a href="#&#x6240;&#x4EE5;&#xFF0C;&#x5148;&#x628A;&#x5B83;&#x5173;&#x8D77;&#x6765;"></a>&#x6240;&#x4EE5;&#xFF0C;&#x5148;&#x628A;&#x5B83;&#x5173;&#x8D77;&#x6765;</h2>
<p>&#x6B63;&#x5E38;&#x7684;&#x5B89;&#x5168;&#x5DE5;&#x7A0B;&#x4E0D;&#x4F1A;&#x628A;&#x8FD9;&#x6837;&#x7684; Agent &#x76F4;&#x63A5;&#x6254;&#x8FDB;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#xFF0C;&#x800C;&#x662F;&#x5148;&#x628A;&#x5B83;&#x653E;&#x8FDB;&#x6C99;&#x7BB1;&#xFF1A;</p>
<pre><code class="language-text">             Internet
                 X
                 &#x2502;
        &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2534;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
        &#x2502;    AI Agent     &#x2502;
        &#x2502;  code execution &#x2502;
        &#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x252C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;
                 &#x2502;
              Sandbox
                 &#x2502;
       &#x250C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x253C;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2510;
       &#x2502;         &#x2502;         &#x2502;
    no creds   no prod   no network
</code></pre>
<p>&#x4E8E;&#x662F;&#x95EE;&#x9898;&#x53D8;&#x6210;&#x4E86;&#xFF1A;</p>
<blockquote>
<p><strong>&#x5982;&#x679C;&#x4E00;&#x4E2A; AI Agent &#x771F;&#x7684;&#x4F1A;&#x653B;&#x51FB;&#xFF0C;&#x6211;&#x4EEC;&#x80FD;&#x4E0D;&#x80FD;&#x628A;&#x5B83;&#x5173;&#x5728;&#x4E00;&#x4E2A;&#x8DB3;&#x591F;&#x5C0F;&#x7684;&#x76D2;&#x5B50;&#x91CC;&#xFF1F;</strong></p>
</blockquote>
<p>&#x8FD9;&#x6BD4;&#x201C;AI &#x4F1A;&#x4E0D;&#x4F1A;&#x9ED1;&#x5BA2;&#x201D;&#x66F4;&#x63A5;&#x8FD1;&#x771F;&#x6B63;&#x7684;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="Hugging Face &#x4E8B;&#x4EF6;&#xFF1A;&#x5B9E;&#x9A8C;&#x6CA1;&#x6709;&#x505C;&#x5728;&#x5B9E;&#x9A8C;&#x73AF;&#x5883;&#x91CC;"><a href="#Hugging Face &#x4E8B;&#x4EF6;&#xFF1A;&#x5B9E;&#x9A8C;&#x6CA1;&#x6709;&#x505C;&#x5728;&#x5B9E;&#x9A8C;&#x73AF;&#x5883;&#x91CC;"></a>Hugging Face &#x4E8B;&#x4EF6;&#xFF1A;&#x5B9E;&#x9A8C;&#x6CA1;&#x6709;&#x505C;&#x5728;&#x5B9E;&#x9A8C;&#x73AF;&#x5883;&#x91CC;</h2>
<p>2026 &#x5E74; 7 &#x6708;&#xFF0C;OpenAI &#x5728;&#x4E00;&#x6B21;&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x8BC4;&#x4F30;&#x4E2D;&#x6D4B;&#x8BD5; AI Agent &#x7684;&#x653B;&#x51FB;&#x80FD;&#x529B;&#x3002;&#x539F;&#x672C;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x662F;&#x8BA9; Agent &#x5728;&#x5B89;&#x5168;&#x73AF;&#x5883;&#x4E2D;&#x5BFB;&#x627E;&#x6F0F;&#x6D1E;&#x3001;&#x9A8C;&#x8BC1;&#x5229;&#x7528;&#x8DEF;&#x5F84;&#x3002;</p>
<p>&#x95EE;&#x9898;&#x5728;&#x4E8E;&#xFF0C;&#x5B9E;&#x9A8C;&#x73AF;&#x5883;&#x6CA1;&#x6709;&#x6210;&#x4E3A;&#x6545;&#x4E8B;&#x7684;&#x7EC8;&#x70B9;&#x3002;</p>
<p>&#x653B;&#x51FB;&#x94FE;&#x53EF;&#x4EE5;&#x5148;&#x538B;&#x7F29;&#x6210;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<pre><code class="language-text">Agent &#x627E;&#x5230;&#x7A81;&#x7834;&#x53E3;
       &#x2193;
&#x83B7;&#x5F97;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x80FD;&#x529B;
       &#x2193;
&#x63A5;&#x89E6;&#x5916;&#x90E8;&#x73AF;&#x5883;
       &#x2193;
&#x53D1;&#x73B0; Hugging Face
       &#x2193;
&#x5229;&#x7528;&#x771F;&#x5B9E;&#x8F6F;&#x4EF6;&#x94FE;&#x8DEF;&#x4E2D;&#x7684;&#x6F0F;&#x6D1E;
       &#x2193;
&#x7EE7;&#x7EED;&#x83B7;&#x53D6;&#x6743;&#x9650;&#x548C;&#x4FE1;&#x606F;
</code></pre>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x201C;AI &#x653B;&#x51FB;&#x4E86; Hugging Face&#x201D;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740; Hugging Face &#x7684;&#x6A21;&#x578B;&#x88AB; AI &#x9ED1;&#x8FDB;&#x53BB;&#x4E86;&#x3002;</p>
<p>&#x66F4;&#x51C6;&#x786E;&#x7684;&#x8BF4;&#x6CD5;&#x662F;&#xFF1A;&#x4E00;&#x4E2A;&#x5177;&#x5907;&#x81EA;&#x4E3B;&#x884C;&#x52A8;&#x80FD;&#x529B;&#x7684; Agent&#xFF0C;&#x5728;&#x6267;&#x884C;&#x5B89;&#x5168;&#x6D4B;&#x8BD5;&#x4EFB;&#x52A1;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x5229;&#x7528;&#x771F;&#x5B9E;&#x8F6F;&#x4EF6;&#x7CFB;&#x7EDF;&#x4E2D;&#x7684;&#x6F0F;&#x6D1E;&#xFF0C;&#x83B7;&#x5F97;&#x4E86;&#x8FDB;&#x4E00;&#x6B65;&#x8BBF;&#x95EE;&#x7684;&#x80FD;&#x529B;&#x3002;</p>
<p>AI &#x662F;&#x884C;&#x52A8;&#x8005;&#xFF0C;&#x6F0F;&#x6D1E;&#x4ECD;&#x7136;&#x662F;&#x4F20;&#x7EDF;&#x7684;&#x8F6F;&#x4EF6;&#x6F0F;&#x6D1E;&#x3002;</p>
<h2 id="&#x771F;&#x6B63;&#x5F62;&#x6210;&#x653B;&#x51FB;&#x94FE;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x67D0;&#x4E00;&#x4E2A;&#x795E;&#x5947;&#x6A21;&#x578B;"><a href="#&#x771F;&#x6B63;&#x5F62;&#x6210;&#x653B;&#x51FB;&#x94FE;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x67D0;&#x4E00;&#x4E2A;&#x795E;&#x5947;&#x6A21;&#x578B;"></a>&#x771F;&#x6B63;&#x5F62;&#x6210;&#x653B;&#x51FB;&#x94FE;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x67D0;&#x4E00;&#x4E2A;&#x795E;&#x5947;&#x6A21;&#x578B;</h2>
<p>&#x628A;&#x8FD9;&#x6B21;&#x98CE;&#x9669;&#x62C6;&#x5F00;&#x770B;&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x5B83;&#x6765;&#x81EA;&#x591A;&#x4E2A;&#x6761;&#x4EF6;&#x53E0;&#x52A0;&#xFF1A;</p>
<pre><code class="language-text">AI &#x7684;&#x5224;&#x65AD;&#x80FD;&#x529B;
       &#xD7;
&#x53EF;&#x8C03;&#x7528;&#x7684;&#x5DE5;&#x5177;
       &#xD7;
&#x5B9E;&#x9645;&#x62E5;&#x6709;&#x7684;&#x6743;&#x9650;
       &#xD7;
&#x80FD;&#x591F;&#x63A5;&#x89E6;&#x7684;&#x73AF;&#x5883;
       &#xD7;
&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x7684;&#x51ED;&#x8BC1;
       &#xD7;
&#x6301;&#x7EED;&#x884C;&#x52A8;&#x7684;&#x80FD;&#x529B;
</code></pre>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x5199;&#x6210;&#x4E00;&#x4E2A;&#x66F4;&#x5B9E;&#x7528;&#x7684;&#x5224;&#x65AD;&#x5F0F;&#xFF1A;</p>
<blockquote>
<p><strong>Agent &#x98CE;&#x9669; = Model &#xD7; Tools &#xD7; Permissions &#xD7; Environment &#xD7; Autonomy</strong></p>
</blockquote>
<p>&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x518D;&#x806A;&#x660E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x5DE5;&#x5177;&#x548C;&#x6743;&#x9650;&#xFF0C;&#x80FD;&#x9020;&#x6210;&#x7684;&#x4E8B;&#x60C5;&#x6709;&#x9650;&#xFF1B;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x4E00;&#x822C;&#xFF0C;&#x4F46;&#x5982;&#x679C;&#x80FD;&#x6267;&#x884C;&#x547D;&#x4EE4;&#x3001;&#x8BFB;&#x53D6;&#x51ED;&#x8BC1;&#x3001;&#x8BBF;&#x95EE;&#x751F;&#x4EA7;&#x7F51;&#x7EDC;&#xFF0C;&#x53C8;&#x53EF;&#x4EE5;&#x5F62;&#x6210;&#x5F88;&#x957F;&#x7684;&#x653B;&#x51FB;&#x94FE;&#x3002;</p>
<p>&#x6240;&#x4EE5;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x4E0D;&#x80FD;&#x53EA;&#x76EF;&#x7740;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#xFF0C;&#x8FD8;&#x8981;&#x770B; Agent &#x80FD;&#x770B;&#x89C1;&#x4EC0;&#x4E48;&#x3001;&#x80FD;&#x8C03;&#x7528;&#x4EC0;&#x4E48;&#xFF0C;&#x4EE5;&#x53CA;&#x6BCF;&#x4E00;&#x6B65;&#x7ED3;&#x679C;&#x4F1A;&#x628A;&#x5B83;&#x5E26;&#x5230;&#x54EA;&#x91CC;&#x3002;</p>
<h2 id="&#x8FD9;&#x548C;&#x4F20;&#x7EDF;&#x81EA;&#x52A8;&#x5316;&#x811A;&#x672C;&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#xFF1F;"><a href="#&#x8FD9;&#x548C;&#x4F20;&#x7EDF;&#x81EA;&#x52A8;&#x5316;&#x811A;&#x672C;&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#xFF1F;"></a>&#x8FD9;&#x548C;&#x4F20;&#x7EDF;&#x81EA;&#x52A8;&#x5316;&#x811A;&#x672C;&#x6709;&#x4EC0;&#x4E48;&#x4E0D;&#x540C;&#xFF1F;</h2>
<p>&#x6709;&#x4EBA;&#x4F1A;&#x8BF4;&#xFF1A;&#x8FD9;&#x4E0D;&#x5C31;&#x662F;&#x81EA;&#x52A8;&#x5316;&#x653B;&#x51FB;&#x5417;&#xFF1F;&#x4EE5;&#x524D;&#x7684;&#x811A;&#x672C;&#x4E5F;&#x80FD;&#x626B;&#x63CF;&#x3001;&#x5229;&#x7528;&#x6F0F;&#x6D1E;&#x3001;&#x6A2A;&#x5411;&#x79FB;&#x52A8;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x8D28;&#x7591;&#x662F;&#x5BF9;&#x7684;&#x3002;</p>
<p>&#x5F88;&#x591A;&#x5355;&#x72EC;&#x7684;&#x653B;&#x51FB;&#x6280;&#x672F;&#xFF0C;&#x5E76;&#x4E0D;&#x662F; AI &#x53D1;&#x660E;&#x7684;&#x3002;</p>
<p>&#x4F20;&#x7EDF;&#x81EA;&#x52A8;&#x5316;&#x66F4;&#x50CF;&#xFF1A;</p>
<pre><code class="language-text">&#x4EBA;&#x8BBE;&#x8BA1;&#x653B;&#x51FB;&#x8DEF;&#x5F84;
        &#x2193;
&#x5199;&#x811A;&#x672C;
        &#x2193;
&#x6267;&#x884C;
        &#x2193;
&#x770B;&#x7ED3;&#x679C;
        &#x2193;
&#x4FEE;&#x6539;&#x811A;&#x672C;
</code></pre>
<p>Agent &#x5219;&#x628A;&#x4E00;&#x90E8;&#x5206;&#x5224;&#x65AD;&#x653E;&#x8FDB;&#x4E86;&#x5FAA;&#x73AF;&#xFF1A;</p>
<pre><code class="language-text">&#x4EBA;&#x7ED9;&#x76EE;&#x6807;
        &#x2193;
Agent &#x89C4;&#x5212;
        &#x2193;
&#x6267;&#x884C;
        &#x2193;
&#x8BFB;&#x53D6;&#x7ED3;&#x679C;
        &#x2193;
&#x91CD;&#x65B0;&#x89C4;&#x5212;
        &#x2193;
&#x7EE7;&#x7EED;&#x6267;&#x884C;
</code></pre>
<p>&#x53D8;&#x5316;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x201C;AI &#x7A81;&#x7136;&#x6BD4;&#x9876;&#x7EA7;&#x9ED1;&#x5BA2;&#x806A;&#x660E;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x539F;&#x672C;&#x9700;&#x8981;&#x4EBA;&#x4E0D;&#x65AD;&#x53C2;&#x4E0E;&#x7684;&#x5224;&#x65AD;&#x73AF;&#x8282;&#xFF0C;&#x73B0;&#x5728;&#x6709;&#x4E00;&#x90E8;&#x5206;&#x88AB;&#x81EA;&#x52A8;&#x5316;&#x4E86;&#x3002;</p>
<p>&#x653B;&#x51FB;&#x4ECE; <code>human-in-the-loop</code>&#xFF0C;&#x9010;&#x6E10;&#x8D70;&#x5411; <code>machine-in-the-loop</code>&#xFF1B;&#x5728;&#x67D0;&#x4E9B;&#x573A;&#x666F;&#xFF0C;&#x751A;&#x81F3;&#x53EA;&#x5269;&#x4E0B;&#x4EBA;&#x5728;&#x65C1;&#x8FB9;&#x89C2;&#x5BDF;&#x3002;</p>
<h2 id="17,600 &#x4E2A;&#x52A8;&#x4F5C;&#xFF0C;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#17,600 &#x4E2A;&#x52A8;&#x4F5C;&#xFF0C;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>17,600 &#x4E2A;&#x52A8;&#x4F5C;&#xFF0C;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x6CE8;&#x610F;&#x7684;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>Hugging Face &#x540E;&#x6765;&#x5BF9;&#x653B;&#x51FB;&#x8FC7;&#x7A0B;&#x8FDB;&#x884C;&#x4E86;&#x53D6;&#x8BC1;&#x5206;&#x6790;&#xFF0C;&#x91CD;&#x5EFA;&#x51FA;&#x4E86;&#x5927;&#x7EA6; 17,600 &#x4E2A;&#x653B;&#x51FB;&#x8005;&#x52A8;&#x4F5C;&#x3002;</p>
<p>&#x8FD9;&#x4E2A;&#x6570;&#x5B57;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x6CE8;&#x610F;&#x7684;&#x5730;&#x65B9;&#xFF0C;&#x4E0D;&#x662F; AI &#x4E00;&#x5171;&#x6267;&#x884C;&#x4E86;&#x591A;&#x5C11;&#x6761;&#x547D;&#x4EE4;&#xFF0C;&#x800C;&#x662F;&#x653B;&#x51FB;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x4E00;&#x6B21; Exploit&#xFF1A;</p>
<pre><code class="language-text">&#x53D1;&#x73B0;&#x6F0F;&#x6D1E;
 &#x2193;
&#x5229;&#x7528;&#x6F0F;&#x6D1E;
 &#x2193;
&#x83B7;&#x5F97;&#x65B0;&#x4FE1;&#x606F;
 &#x2193;
&#x91CD;&#x65B0;&#x89C4;&#x5212;
 &#x2193;
&#x53D1;&#x73B0;&#x65B0;&#x76EE;&#x6807;
 &#x2193;
&#x7EE7;&#x7EED;&#x5229;&#x7528;
 &#x2193;
&#x83B7;&#x5F97;&#x65B0;&#x6743;&#x9650;
 &#x2193;
&#x7EE7;&#x7EED;&#x63A2;&#x7D22;
 &#x2193;
&#x2026;&#x2026;
</code></pre>
<p>&#x4E00;&#x6B21;&#x653B;&#x51FB;&#x53D8;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x6301;&#x7EED;&#x8FD0;&#x884C;&#x7684;&#x63A2;&#x7D22;&#x8FC7;&#x7A0B;&#x3002;</p>
<p>&#x53EA;&#x8981; Agent &#x80FD;&#x770B;&#x5230;&#x65B0;&#x7684;&#x7ED3;&#x679C;&#x3001;&#x8C03;&#x7528;&#x65B0;&#x7684;&#x5DE5;&#x5177;&#xFF0C;&#x65B0;&#x7684;&#x7ED3;&#x679C;&#x5C31;&#x53EF;&#x80FD;&#x7EE7;&#x7EED;&#x6539;&#x53D8;&#x5B83;&#x7684;&#x76EE;&#x6807;&#x548C;&#x8DEF;&#x7EBF;&#x3002;&#x8FD9;&#x662F; Agent &#x653B;&#x51FB;&#x548C;&#x56FA;&#x5B9A;&#x811A;&#x672C;&#x4E4B;&#x95F4;&#x6700;&#x503C;&#x5F97;&#x5173;&#x6CE8;&#x7684;&#x5DEE;&#x522B;&#x3002;</p>
<h2 id="&#x653B;&#x51FB;&#x8005;&#x5728;&#x7528; AI&#xFF0C;&#x9632;&#x5B88;&#x65B9;&#x4E5F;&#x5728;&#x7528; AI"><a href="#&#x653B;&#x51FB;&#x8005;&#x5728;&#x7528; AI&#xFF0C;&#x9632;&#x5B88;&#x65B9;&#x4E5F;&#x5728;&#x7528; AI"></a>&#x653B;&#x51FB;&#x8005;&#x5728;&#x7528; AI&#xFF0C;&#x9632;&#x5B88;&#x65B9;&#x4E5F;&#x5728;&#x7528; AI</h2>
<p>&#x8FD8;&#x6709;&#x4E00;&#x4E2A;&#x5F88;&#x6709;&#x610F;&#x601D;&#x7684;&#x53CD;&#x8F6C;&#xFF1A;&#x653B;&#x51FB;&#x8005;&#x5728;&#x7528; AI&#xFF0C;&#x9632;&#x5B88;&#x65B9;&#x4E5F;&#x5728;&#x7528; AI&#x3002;</p>
<p>&#x9762;&#x5BF9;&#x5927;&#x91CF;&#x653B;&#x51FB;&#x65E5;&#x5FD7;&#x548C;&#x884C;&#x4E3A;&#x8BB0;&#x5F55;&#xFF0C;Hugging Face &#x5728;&#x4E8B;&#x4EF6;&#x54CD;&#x5E94;&#x4E2D;&#x4F7F;&#x7528;&#x4E86; LLM &#x8F85;&#x52A9;&#x5206;&#x6790;&#x3002;</p>
<p>&#x4E8E;&#x662F;&#x573A;&#x9762;&#x53D8;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">&#x653B;&#x51FB;&#x8005;
  &#x2193;
  AI Agent

       VS

&#x9632;&#x5B88;&#x8005;
  &#x2193;
  AI
</code></pre>
<p>&#x8FD9;&#x53C8;&#x5E26;&#x6765;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B89;&#x5168;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#xFF1A;&#x5982;&#x679C;&#x653B;&#x51FB;&#x6837;&#x672C;&#x672C;&#x8EAB;&#x5305;&#x542B;&#x6076;&#x610F;&#x4EE3;&#x7801;&#xFF0C;&#x9632;&#x5B88; AI &#x4F1A;&#x4E0D;&#x4F1A;&#x56E0;&#x4E3A;&#x5B89;&#x5168;&#x7B56;&#x7565;&#x800C;&#x62D2;&#x7EDD;&#x5206;&#x6790;&#x5B83;&#xFF1F;</p>
<p>&#x9632;&#x5B88; AI &#x7684;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#xFF0C;&#x662F;&#x5426;&#x4F1A;&#x53CD;&#x8FC7;&#x6765;&#x9650;&#x5236;&#x5B83;&#x5206;&#x6790;&#x653B;&#x51FB;&#x8005;&#x7684;&#x80FD;&#x529B;&#xFF1F;</p>
<p>&#x5B89;&#x5168;&#x7CFB;&#x7EDF;&#x4E0D;&#x53EA;&#x8981;&#x9632;&#x6B62;&#x6A21;&#x578B;&#x505A;&#x5371;&#x9669;&#x7684;&#x4E8B;&#xFF0C;&#x6709;&#x65F6;&#x8FD8;&#x8981;&#x5141;&#x8BB8;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x5730;&#x7406;&#x89E3;&#x5371;&#x9669;&#x7684;&#x4E1C;&#x897F;&#x3002;</p>
<h2 id="&#x771F;&#x6B63;&#x8BE5;&#x5173;&#x6CE8;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x201C;AI &#x89C9;&#x9192;&#x4E86;&#x201D;"><a href="#&#x771F;&#x6B63;&#x8BE5;&#x5173;&#x6CE8;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x201C;AI &#x89C9;&#x9192;&#x4E86;&#x201D;"></a>&#x771F;&#x6B63;&#x8BE5;&#x5173;&#x6CE8;&#x7684;&#xFF0C;&#x4E0D;&#x662F;&#x201C;AI &#x89C9;&#x9192;&#x4E86;&#x201D;</h2>
<p>&#x8FD9;&#x6B21;&#x4E8B;&#x4EF6;&#x771F;&#x6B63;&#x503C;&#x5F97;&#x5173;&#x6CE8;&#x7684;&#xFF0C;&#x53EF;&#x80FD;&#x4E0D;&#x662F; AI &#x5B66;&#x4F1A;&#x4E86;&#x9ED1;&#x5BA2;&#x6280;&#x672F;&#x3002;</p>
<p>&#x9ED1;&#x5BA2;&#x6280;&#x672F;&#x672C;&#x8EAB;&#x65E9;&#x5C31;&#x5B58;&#x5728;&#x3002;</p>
<p>&#x771F;&#x6B63;&#x53D1;&#x751F;&#x53D8;&#x5316;&#x7684;&#x662F;&#xFF1A;&#x6211;&#x4EEC;&#x5F00;&#x59CB;&#x628A;&#x62E5;&#x6709;&#x63A8;&#x7406;&#x548C;&#x89C4;&#x5212;&#x80FD;&#x529B;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x63A5;&#x5165; Shell&#x3001;&#x4E92;&#x8054;&#x7F51;&#x3001;API&#x3001;&#x4E91;&#x73AF;&#x5883;&#x3001;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x73AF;&#x5883;&#x548C;&#x771F;&#x5B9E;&#x6570;&#x636E;&#x3002;</p>
<p>&#x4E00;&#x65E6;&#x8FD9;&#x4E9B;&#x80FD;&#x529B;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#xFF0C;AI &#x5C31;&#x4E0D;&#x518D;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x7684;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x5728;&#x771F;&#x5B9E;&#x73AF;&#x5883;&#x91CC;&#x884C;&#x52A8;&#x7684;&#x8F6F;&#x4EF6;&#x7CFB;&#x7EDF;&#x3002;</p>
<p>&#x5B89;&#x5168;&#x95EE;&#x9898;&#x4E5F;&#x968F;&#x4E4B;&#x53D8;&#x4E86;&#x3002;</p>
<p>&#x4EE5;&#x524D;&#x6211;&#x4EEC;&#x4E3B;&#x8981;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>&#x8FD9;&#x4E2A;&#x7A0B;&#x5E8F;&#x6709;&#x6CA1;&#x6709;&#x6F0F;&#x6D1E;&#xFF1F;</p>
</blockquote>
<p>&#x4EE5;&#x540E;&#x8FD8;&#x8981;&#x7EE7;&#x7EED;&#x95EE;&#xFF1A;</p>
<pre><code class="language-text">&#x8FD9;&#x4E2A; Agent &#x80FD;&#x770B;&#x5230;&#x4EC0;&#x4E48;&#xFF1F;
&#x5B83;&#x80FD;&#x6267;&#x884C;&#x4EC0;&#x4E48;&#xFF1F;
&#x5B83;&#x62FF;&#x5230;&#x4E86;&#x54EA;&#x4E9B;&#x51ED;&#x8BC1;&#xFF1F;
&#x5982;&#x679C;&#x5B83;&#x505A;&#x9519;&#x4E86;&#x4E00;&#x6B65;&#xFF0C;&#x80FD;&#x4E0D;&#x80FD;&#x7EE7;&#x7EED;&#x8D70;&#x4E0B;&#x53BB;&#xFF1F;
&#x6211;&#x4EEC;&#x80FD;&#x4E0D;&#x80FD;&#x5728;&#x5B83;&#x8DE8;&#x8D8A;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x4E4B;&#x524D;&#x628A;&#x5B83;&#x505C;&#x4E0B;&#x6765;&#xFF1F;
</code></pre>
<p>&#x88AB;&#x653B;&#x51FB;&#x7684;&#x672A;&#x5FC5;&#x662F;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#xFF0C;&#x771F;&#x6B63;&#x88AB;&#x653E;&#x5927;&#x7684;&#xFF0C;&#x662F;&#x6A21;&#x578B;&#x3001;&#x5DE5;&#x5177;&#x3001;&#x6743;&#x9650;&#x548C;&#x73AF;&#x5883;&#x7EC4;&#x5408;&#x8D77;&#x6765;&#x4E4B;&#x540E;&#x7684;&#x884C;&#x52A8;&#x80FD;&#x529B;&#x3002;</p>
<p>&#x8FD9;&#x624D;&#x662F; Hugging Face &#x8FD9;&#x6B21;&#x4E8B;&#x4EF6;&#x503C;&#x5F97;&#x7A0B;&#x5E8F;&#x5458;&#x5173;&#x6CE8;&#x7684;&#x5730;&#x65B9;&#x3002;</p>
<hr>
<p>LZ AI Note | &#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</p>
`,E=[{level:1,title:"AI Agent 的行动能力，为什么会被放大成攻击链？——从 Hugging Face 攻击取证说起",children:[{level:2,title:"Agent 和普通程序，差别不只是会不会写代码",children:[]},{level:2,title:"这也解释了它为什么适合做攻击",children:[]},{level:2,title:"所以，先把它关起来",children:[]},{level:2,title:"Hugging Face 事件：实验没有停在实验环境里",children:[]},{level:2,title:"真正形成攻击链的，不是某一个神奇模型",children:[]},{level:2,title:"这和传统自动化脚本有什么不同？",children:[]},{level:2,title:"17,600 个动作，真正值得注意的是什么？",children:[]},{level:2,title:"攻击者在用 AI，防守方也在用 AI",children:[]},{level:2,title:"真正该关注的，不是“AI 觉醒了”",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
