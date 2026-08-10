const x={},F=`<h1 id="&#x4ECE;&#x4E00;&#x53E5; Prompt &#x5230;&#x53EF;&#x9760; Agent&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;"><a href="#&#x4ECE;&#x4E00;&#x53E5; Prompt &#x5230;&#x53EF;&#x9760; Agent&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;"></a>&#x4ECE;&#x4E00;&#x53E5; Prompt &#x5230;&#x53EF;&#x9760; Agent&#xFF1A;&#x7CFB;&#x5217;&#x8282;&#x70B9;&#x8DEF;&#x7EBF;&#x56FE;</h1>
<h2 id="&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;"><a href="#&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;"></a>&#x7CFB;&#x5217;&#x5B9A;&#x4F4D;</h2>
<p>&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x201C;&#x6280;&#x672F;&#x7B80;&#x62A5;&#x52A9;&#x624B;&#x201D;&#xFF0C;&#x4ECE;&#x4E00;&#x53E5; Prompt &#x5F00;&#x59CB;&#xFF0C;&#x6BCF;&#x6B21;&#x53EA;&#x89E3;&#x51B3;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x5931;&#x8D25;&#xFF0C;&#x6700;&#x7EC8;&#x6F14;&#x5316;&#x6210;&#x4E00;&#x4E2A;&#x53EF;&#x89C2;&#x6D4B;&#x3001;&#x53EF;&#x6062;&#x590D;&#x3001;&#x53EF;&#x8BC4;&#x6D4B;&#x3001;&#x6709;&#x4EBA;&#x7C7B;&#x63A7;&#x5236;&#x8FB9;&#x754C;&#x7684;&#x5B8C;&#x6574; Agent&#x3002;</p>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x6309;&#x6846;&#x67B6;&#x7F16;&#x6392;&#x7684;&#x6559;&#x7A0B;&#xFF1A;</p>
<pre><code class="language-text">Prompt &#x2192; LangChain &#x2192; LangGraph &#x2192; Langfuse
</code></pre>
<p>&#x771F;&#x6B63;&#x7684;&#x53D9;&#x4E8B;&#x987A;&#x5E8F;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x4E0A;&#x4E00;&#x7248;&#x80FD;&#x8FD0;&#x884C;
&#x2192; &#x9047;&#x5230;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x5931;&#x8D25;
&#x2192; &#x539F;&#x6709;&#x7ED3;&#x6784;&#x65E0;&#x6CD5;&#x89E3;&#x51B3;
&#x2192; &#x5F15;&#x5165;&#x4E00;&#x4E2A;&#x65B0;&#x673A;&#x5236;
&#x2192; &#x5F97;&#x5230;&#x4E00;&#x4E2A;&#x66F4;&#x53EF;&#x9760;&#x7684;&#x7248;&#x672C;
&#x2192; &#x66B4;&#x9732;&#x4E0B;&#x4E00;&#x7BC7;&#x7684;&#x95EE;&#x9898;
</code></pre>
<p>&#x6BCF;&#x7BC7;&#x6587;&#x7AE0;&#x5FC5;&#x987B;&#x6EE1;&#x8DB3;&#xFF1A;&#x5373;&#x4F7F;&#x8BFB;&#x8005;&#x4E0D;&#x7EE7;&#x7EED;&#x8FFD;&#x7CFB;&#x5217;&#xFF0C;&#x4E5F;&#x80FD;&#x5E26;&#x8D70;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x5224;&#x65AD;&#x3002;</p>
<h2 id="&#x8D2F;&#x7A7F;&#x5168;&#x7CFB;&#x5217;&#x7684;&#x4F8B;&#x5B50;"><a href="#&#x8D2F;&#x7A7F;&#x5168;&#x7CFB;&#x5217;&#x7684;&#x4F8B;&#x5B50;"></a>&#x8D2F;&#x7A7F;&#x5168;&#x7CFB;&#x5217;&#x7684;&#x4F8B;&#x5B50;</h2>
<p>&#x9879;&#x76EE;&#x6682;&#x5B9A;&#x540D;&#xFF1A;<code>tech-brief-agent</code></p>
<p>&#x521D;&#x59CB;&#x9700;&#x6C42;&#xFF1A;</p>
<pre><code class="language-text">&#x8F93;&#x5165;&#xFF1A;
&#x4E00;&#x4E2A;&#x6280;&#x672F;&#x4E3B;&#x9898; + 5 &#x4E2A;&#x8D44;&#x6599;&#x94FE;&#x63A5;

&#x8F93;&#x51FA;&#xFF1A;
&#x4E00;&#x7BC7; 500&#xFF5E;800 &#x5B57;&#x4E2D;&#x6587;&#x6280;&#x672F;&#x7B80;&#x62A5;
&#x5305;&#x542B;&#x4E8B;&#x5B9E;&#x3001;&#x6765;&#x6E90;&#xFF0C;&#x4EE5;&#x53CA;&#x4E00;&#x4E2A;&#x6709;&#x4F9D;&#x636E;&#x7684;&#x5224;&#x65AD;
</code></pre>
<p>&#x56FA;&#x5B9A;&#x8D28;&#x91CF;&#x8981;&#x6C42;&#xFF1A;</p>
<ol>
<li>&#x91CD;&#x8981;&#x4E8B;&#x5B9E;&#x6709;&#x6765;&#x6E90;&#x652F;&#x6491;&#x3002;</li>
<li>&#x660E;&#x786E;&#x533A;&#x5206;&#x8D44;&#x6599;&#x4E8B;&#x5B9E;&#x4E0E;&#x4F5C;&#x8005;&#x5224;&#x65AD;&#x3002;</li>
<li>&#x4E0D;&#x4F7F;&#x7528;&#x5BA3;&#x4F20;&#x8154;&#xFF0C;&#x4E0D;&#x4E3A;&#x4E86;&#x5B8C;&#x6574;&#x800C;&#x9762;&#x9762;&#x4FF1;&#x5230;&#x3002;</li>
<li>&#x8D44;&#x6599;&#x4E92;&#x76F8;&#x51B2;&#x7A81;&#x65F6;&#xFF0C;&#x4E0D;&#x64C5;&#x81EA;&#x9009;&#x62E9;&#x66F4;&#x987A;&#x8033;&#x7684;&#x7B54;&#x6848;&#x3002;</li>
<li>&#x6240;&#x6709;&#x6765;&#x6E90;&#x94FE;&#x63A5;&#x96C6;&#x4E2D;&#x653E;&#x5728;&#x6587;&#x672B;&#x3002;</li>
</ol>
<p>&#x56FA;&#x5B9A;&#x6D4B;&#x8BD5;&#x573A;&#x666F;&#xFF1A;</p>
<pre><code class="language-text">&#x573A;&#x666F; A&#xFF1A;&#x8D44;&#x6599;&#x5145;&#x5206;&#x4E14;&#x5F7C;&#x6B64;&#x4E00;&#x81F4;
&#x573A;&#x666F; B&#xFF1A;&#x8D44;&#x6599;&#x7F3A;&#x5C11;&#x5173;&#x952E;&#x4E8B;&#x5B9E;
&#x573A;&#x666F; C&#xFF1A;&#x4E24;&#x4E2A;&#x6765;&#x6E90;&#x4E92;&#x76F8;&#x77DB;&#x76FE;
&#x573A;&#x666F; D&#xFF1A;&#x6765;&#x6E90;&#x91CC;&#x6DF7;&#x6709;&#x8425;&#x9500;&#x7A3F;&#x548C;&#x4E8C;&#x624B;&#x8F6C;&#x8FF0;
&#x573A;&#x666F; E&#xFF1A;&#x6A21;&#x578B;&#x6216; Prompt &#x5347;&#x7EA7;&#x540E;&#x8F93;&#x51FA;&#x53D1;&#x751F;&#x56DE;&#x5F52;
</code></pre>
<p>&#x8FD9;&#x4E9B;&#x8F93;&#x5165;&#x4F1A;&#x5728;&#x6574;&#x4E2A;&#x7CFB;&#x5217;&#x53CD;&#x590D;&#x51FA;&#x73B0;&#x3002;&#x673A;&#x5236;&#x8D8A;&#x6765;&#x8D8A;&#x590D;&#x6742;&#xFF0C;&#x95EE;&#x9898;&#x4E0D;&#x6362;&#xFF0C;&#x8BFB;&#x8005;&#x624D;&#x80FD;&#x770B;&#x89C1;&#x6BCF;&#x4E00;&#x5C42;&#x5230;&#x5E95;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x3002;</p>
<h2 id="&#x603B;&#x4F53;&#x8282;&#x70B9;&#x56FE;"><a href="#&#x603B;&#x4F53;&#x8282;&#x70B9;&#x56FE;"></a>&#x603B;&#x4F53;&#x8282;&#x70B9;&#x56FE;</h2>
<pre><code class="language-mermaid">flowchart TD
    N00[&#x5E8F;&#x7AE0;&#xFF1A;&#x4FC4;&#x7F57;&#x65AF;&#x65B9;&#x5757;&#x4E0E;&#x53EF;&#x79EF;&#x7D2F;&#x7684;&#x7ECF;&#x9A8C;]
    N01[Prompt &#x4E3A;&#x4F55;&#x968F;&#x6A21;&#x578B;&#x5347;&#x7EA7;&#x5931;&#x6548;]
    N02[Prompt &#x7248;&#x672C;&#x3001;&#x6D4B;&#x8BD5;&#x4E0E;&#x56DE;&#x6EDA;]
    N03[Workflow &#x8FD8;&#x662F; Agent]
    N04[&#x6700;&#x5C0F; LangChain]
    N05[&#x6700;&#x5C0F; LangGraph]
    N06[&#x6700;&#x5C0F; Langfuse Trace]
    N07[Context&#xFF1A;&#x53EA;&#x5E26;&#x9700;&#x8981;&#x7684;&#x8BC1;&#x636E;]
    N08[Memory&#xFF1A;&#x4FDD;&#x7559;&#x4EC0;&#x4E48;&#xFF0C;&#x5FD8;&#x6389;&#x4EC0;&#x4E48;]
    N09[Plan &#x4E0E; Skill&#xFF1A;&#x957F;&#x4EFB;&#x52A1;&#x5982;&#x4F55;&#x4E0D;&#x8DD1;&#x504F;]
    N10[&#x591A; Agent&#xFF1A;&#x4F55;&#x65F6;&#x503C;&#x5F97;&#x5E76;&#x884C;&#x5206;&#x5DE5;]
    N11[Checkpoint &#x4E0E; Retry&#xFF1A;&#x4E2D;&#x65AD;&#x540E;&#x5982;&#x4F55;&#x7EE7;&#x7EED;]
    N12[&#x6C99;&#x7BB1;&#x3001;&#x6743;&#x9650;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;]
    N13[Dataset&#x3001;Eval &#x4E0E;&#x6301;&#x7EED;&#x4F18;&#x5316;]
    N14[&#x7EC8;&#x7AE0;&#xFF1A;&#x4E00;&#x4E2A;&#x53EF;&#x9760; Agent &#x7684;&#x5B8C;&#x6574;&#x7ED3;&#x6784;]

    N00 --&gt; N01 --&gt; N02 --&gt; N03 --&gt; N04 --&gt; N05 --&gt; N06
    N06 --&gt; N07 --&gt; N08 --&gt; N09 --&gt; N10 --&gt; N11 --&gt; N12 --&gt; N13 --&gt; N14
</code></pre>
<h2 id="&#x7B2C;&#x4E00;&#x5B63;&#xFF1A;Prompt &#x4E0D;&#x662F;&#x7A0B;&#x5E8F;"><a href="#&#x7B2C;&#x4E00;&#x5B63;&#xFF1A;Prompt &#x4E0D;&#x662F;&#x7A0B;&#x5E8F;"></a>&#x7B2C;&#x4E00;&#x5B63;&#xFF1A;Prompt &#x4E0D;&#x662F;&#x7A0B;&#x5E8F;</h2>
<h3 id="N00&#xFF5C;&#x5E8F;&#x7AE0;&#xFF1A;&#x7ECF;&#x9A8C;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x591F;&#x79EF;&#x7D2F;"><a href="#N00&#xFF5C;&#x5E8F;&#x7AE0;&#xFF1A;&#x7ECF;&#x9A8C;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x591F;&#x79EF;&#x7D2F;"></a>N00&#xFF5C;&#x5E8F;&#x7AE0;&#xFF1A;&#x7ECF;&#x9A8C;&#x4E3A;&#x4EC0;&#x4E48;&#x80FD;&#x591F;&#x79EF;&#x7D2F;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709;&#x6587;&#x7AE0;&#xFF0C;&#x7EE7;&#x7EED;&#x7CBE;&#x4FEE;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x53EA;&#x6709;&#x4E03;&#x79CD;&#x65B9;&#x5757;&#xFF0C;&#x300A;&#x4FC4;&#x7F57;&#x65AF;&#x65B9;&#x5757;&#x300B;&#x4E3A;&#x4EC0;&#x4E48;&#x56DB;&#x5341;&#x5E74;&#x8FD8;&#x6CA1;&#x88AB;&#x73A9;&#x5B8C;&#xFF1F;</code></li>
<li>&#x4E3B;&#x89D2;&#xFF1A;&#x4FC4;&#x7F57;&#x65AF;&#x65B9;&#x5757;&#xFF0C;&#x4E0D;&#x5F15;&#x5165;&#x6280;&#x672F;&#x7B80;&#x62A5;&#x52A9;&#x624B;&#x3002;</li>
<li>&#x73B0;&#x8C61;&#xFF1A;&#x5E73;&#x53F0;&#x3001;&#x786C;&#x4EF6;&#x548C;&#x753B;&#x9762;&#x4E00;&#x76F4;&#x6362;&#xFF0C;&#x73A9;&#x5BB6;&#x7EC3;&#x51FA;&#x7684;&#x80FD;&#x529B;&#x5374;&#x6CA1;&#x6709;&#x8FC7;&#x671F;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x7A33;&#x5B9A;&#x89C4;&#x5219;&#x8BA9;&#x7ECF;&#x9A8C;&#x53EF;&#x4EE5;&#x8DE8;&#x5C40;&#x3001;&#x8DE8;&#x5E73;&#x53F0;&#x79EF;&#x7D2F;&#x3002;</li>
<li>AI &#x53EA;&#x5360;&#x7ED3;&#x5C3E;&#x4E24;&#x6BB5;&#xFF1A;&#x6A21;&#x578B;&#x5347;&#x7EA7;&#x540E;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; Prompt &#x7684;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x7ECF;&#x5E38;&#x8FC7;&#x671F;&#xFF1F;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;Prompt &#x7A76;&#x7ADF;&#x662F;&#x53EF;&#x8FC1;&#x79FB;&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x8FD8;&#x662F;&#x5BF9;&#x67D0;&#x4EE3;&#x6A21;&#x578B;&#x7684;&#x9002;&#x914D;&#xFF1F;</li>
</ul>
<h3 id="N01&#xFF5C;&#x540C;&#x4E00;&#x53E5; Prompt&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x4E2A;&#x6A21;&#x578B;&#x5C31;&#x4E0D;&#x597D;&#x7528;&#x4E86;"><a href="#N01&#xFF5C;&#x540C;&#x4E00;&#x53E5; Prompt&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x4E2A;&#x6A21;&#x578B;&#x5C31;&#x4E0D;&#x597D;&#x7528;&#x4E86;"></a>N01&#xFF5C;&#x540C;&#x4E00;&#x53E5; Prompt&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x6362;&#x4E2A;&#x6A21;&#x578B;&#x5C31;&#x4E0D;&#x597D;&#x7528;&#x4E86;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4E3A;&#x4EC0;&#x4E48;&#x6A21;&#x578B;&#x4E00;&#x5347;&#x7EA7;&#xFF0C;&#x6628;&#x5929;&#x597D;&#x7528;&#x7684; Prompt &#x4ECA;&#x5929;&#x5C31;&#x5931;&#x6548;&#x4E86;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x540C;&#x4E00;&#x53E5; Prompt&#xFF0C;&#x628A;&#x4E94;&#x7BC7;&#x8D44;&#x6599;&#x538B;&#x7F29;&#x6210;&#x6280;&#x672F;&#x7B80;&#x62A5;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x6362;&#x6A21;&#x578B;&#x540E;&#xFF0C;&#x5F15;&#x7528;&#x4E22;&#x5931;&#x3001;&#x7BC7;&#x5E45;&#x5931;&#x63A7;&#x3001;&#x4E8B;&#x5B9E;&#x4E0E;&#x5224;&#x65AD;&#x6DF7;&#x5728;&#x4E00;&#x8D77;&#x3002;</li>
<li>&#x5C55;&#x793A;&#x65B9;&#x5F0F;&#xFF1A;&#x56FA;&#x5B9A;&#x76F8;&#x540C;&#x8F93;&#x5165;&#x4E0E; Prompt&#xFF0C;&#x53EA;&#x66FF;&#x6362;&#x6A21;&#x578B;&#xFF0C;&#x5BF9;&#x6BD4;&#x8F93;&#x51FA;&#x5DEE;&#x5F02;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x6982;&#x5FF5;&#xFF1A;
<ul>
<li>Prompt &#x4E0D;&#x72EC;&#x7ACB;&#x8FD0;&#x884C;&#xFF1B;&#x5B9E;&#x9645;&#x884C;&#x4E3A;&#x6765;&#x81EA;&#x6A21;&#x578B;&#x3001;Prompt&#x3001;&#x53C2;&#x6570;&#x4E0E;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x7EC4;&#x5408;&#x3002;</li>
<li>&#x201C;&#x540C;&#x4E00;&#x53E5;&#x8BDD;&#x201D;&#x4E0D;&#x7B49;&#x4E8E;&#x201C;&#x540C;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#x201D;&#x3002;</li>
<li>&#x6A21;&#x578B;&#x5347;&#x7EA7;&#x6539;&#x53D8;&#x80FD;&#x529B;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x6539;&#x53D8;&#x6307;&#x4EE4;&#x4F18;&#x5148;&#x7EA7;&#x4E0E;&#x8868;&#x8FBE;&#x504F;&#x597D;&#x3002;</li>
</ul>
</li>
<li>&#x4E0D;&#x5728;&#x672C;&#x7BC7;&#x89E3;&#x51B3;&#xFF1A;&#x4E0D;&#x6025;&#x7740;&#x5F15;&#x5165;&#x5E73;&#x53F0;&#x3001;&#x8BC4;&#x6D4B;&#x6846;&#x67B6;&#x6216; Agent&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;Prompt &#x662F;&#x884C;&#x4E3A;&#x5951;&#x7EA6;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x4E0D;&#x662F;&#x8131;&#x79BB;&#x6A21;&#x578B;&#x5B58;&#x5728;&#x7684;&#x6E90;&#x7801;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x65E2;&#x7136;&#x884C;&#x4E3A;&#x4F1A;&#x53D8;&#xFF0C;&#x600E;&#x6837;&#x77E5;&#x9053;&#x54EA;&#x4E2A;&#x7248;&#x672C;&#x66F4;&#x597D;&#xFF0C;&#x574F;&#x4E86;&#x53C8;&#x600E;&#x6837;&#x9000;&#x56DE;&#x53BB;&#xFF1F;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>01_single_prompt.py</code></li>
</ul>
<h3 id="N02&#xFF5C;Prompt &#x6539;&#x5230;&#x7B2C;&#x516B;&#x7248;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x53CD;&#x800C;&#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x7248;&#x6700;&#x597D;"><a href="#N02&#xFF5C;Prompt &#x6539;&#x5230;&#x7B2C;&#x516B;&#x7248;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x53CD;&#x800C;&#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x7248;&#x6700;&#x597D;"></a>N02&#xFF5C;Prompt &#x6539;&#x5230;&#x7B2C;&#x516B;&#x7248;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x53CD;&#x800C;&#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x7248;&#x6700;&#x597D;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>Prompt &#x6539;&#x5230;&#x7B2C;&#x516B;&#x7248;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x53CD;&#x800C;&#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x7248;&#x6700;&#x597D;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x4E00;&#x4E2A; Prompt &#x80FD;&#x751F;&#x6210;&#x7B80;&#x62A5;&#xFF0C;&#x4F46;&#x6548;&#x679C;&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x4E0E;&#x63AA;&#x8F9E;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;v3 &#x6587;&#x98CE;&#x66F4;&#x597D;&#x5374;&#x6F0F;&#x6389;&#x5F15;&#x7528;&#xFF1B;v5 &#x4FEE;&#x597D;&#x5F15;&#x7528;&#x53C8;&#x4EA7;&#x751F;&#x5927;&#x91CF;&#x5E9F;&#x8BDD;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x673A;&#x5236;&#xFF1A;
<ul>
<li>Prompt &#x6587;&#x4EF6;&#x5316;&#x4E0E;&#x7248;&#x672C;&#x53F7;&#x3002;</li>
<li>&#x56FA;&#x5B9A;&#x8F93;&#x5165;&#x6837;&#x672C;&#x3002;</li>
<li>&#x6700;&#x5C0F;&#x8BC4;&#x4EF7;&#x6807;&#x51C6;&#xFF1A;&#x5F15;&#x7528;&#x5B8C;&#x6574;&#x3001;&#x4E8B;&#x5B9E;&#x51C6;&#x786E;&#x3001;&#x7BC7;&#x5E45;&#x5408;&#x9002;&#x3001;&#x5224;&#x65AD;&#x6709;&#x4F9D;&#x636E;&#x3002;</li>
<li>&#x53D8;&#x66F4;&#x8BF4;&#x660E;&#x3001;&#x7070;&#x5EA6;&#x4E0E;&#x56DE;&#x6EDA;&#x3002;</li>
</ul>
</li>
<li>&#x6700;&#x5C0F;&#x5B9E;&#x73B0;&#xFF1A;&#x5148;&#x7528;&#x666E;&#x901A;&#x6587;&#x4EF6;&#x3001;Git&#x3001;&#x6D4B;&#x8BD5;&#x6837;&#x672C;&#x548C;&#x7B80;&#x5355;&#x811A;&#x672C;&#xFF0C;&#x4E0D;&#x5F15;&#x5165; Langfuse&#x3002;</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>&#x7248;&#x672C;&#x591A;&#x4E0D;&#x7B49;&#x4E8E;&#x7BA1;&#x7406;&#x597D;&#xFF1B;&#x6CA1;&#x6709;&#x6D4B;&#x8BD5;&#x6837;&#x672C;&#xFF0C;&#x7248;&#x672C;&#x53F7;&#x53EA;&#x662F;&#x5B58;&#x6863;&#x3002;</li>
<li>&#x81EA;&#x52A8;&#x8BC4;&#x5206;&#x4FBF;&#x5B9C;&#x4F46;&#x53EF;&#x80FD;&#x504F;&#xFF1B;&#x4EBA;&#x5DE5;&#x8BC4;&#x4EF7;&#x53EF;&#x9760;&#x4F46;&#x6162;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x7BA1;&#x7406; Prompt &#x7684;&#x91CD;&#x70B9;&#x4E0D;&#x662F;&#x4FDD;&#x5B58;&#x6587;&#x5B57;&#xFF0C;&#x800C;&#x662F;&#x77E5;&#x9053;&#x4E00;&#x6B21;&#x6539;&#x52A8;&#x8BA9;&#x54EA;&#x4E9B;&#x6848;&#x4F8B;&#x53D8;&#x597D;&#x3001;&#x53C8;&#x8BA9;&#x54EA;&#x4E9B;&#x6848;&#x4F8B;&#x53D8;&#x574F;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x5373;&#x4F7F; Prompt &#x7BA1;&#x597D;&#x4E86;&#xFF0C;&#x8BA9;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x540C;&#x65F6;&#x641C;&#x7D22;&#x3001;&#x5224;&#x65AD;&#x3001;&#x5199;&#x4F5C;&#xFF0C;&#x4ECD;&#x7136;&#x5BB9;&#x6613;&#x987E;&#x6B64;&#x5931;&#x5F7C;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>02_versioned_prompt.py</code></li>
</ul>
<h2 id="&#x7B2C;&#x4E8C;&#x5B63;&#xFF1A;&#x4E0B;&#x4E00;&#x6B65;&#x7531;&#x8C01;&#x51B3;&#x5B9A;"><a href="#&#x7B2C;&#x4E8C;&#x5B63;&#xFF1A;&#x4E0B;&#x4E00;&#x6B65;&#x7531;&#x8C01;&#x51B3;&#x5B9A;"></a>&#x7B2C;&#x4E8C;&#x5B63;&#xFF1A;&#x4E0B;&#x4E00;&#x6B65;&#x7531;&#x8C01;&#x51B3;&#x5B9A;</h2>
<h3 id="N03&#xFF5C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x53EA;&#x9700;&#x8981; Workflow&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x624D;&#x503C;&#x5F97;&#x4EA4;&#x7ED9; Agent"><a href="#N03&#xFF5C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x53EA;&#x9700;&#x8981; Workflow&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x624D;&#x503C;&#x5F97;&#x4EA4;&#x7ED9; Agent"></a>N03&#xFF5C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x53EA;&#x9700;&#x8981; Workflow&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x624D;&#x503C;&#x5F97;&#x4EA4;&#x7ED9; Agent</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709;&#x8349;&#x7A3F;&#xFF0C;&#x9700;&#x8981;&#x7528;&#x201C;&#x6280;&#x672F;&#x7B80;&#x62A5;&#x52A9;&#x624B;&#x201D;&#x91CD;&#x5199;&#xFF0C;&#x66FF;&#x6362;&#x652F;&#x4ED8; SDK &#x4F8B;&#x5B50;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x53EA;&#x9700;&#x8981; Workflow&#xFF0C;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x624D;&#x503C;&#x5F97;&#x4EA4;&#x7ED9; Agent&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x4E00;&#x4E2A; Prompt &#x540C;&#x65F6;&#x9605;&#x8BFB;&#x3001;&#x5224;&#x65AD;&#x548C;&#x5199;&#x4F5C;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x7B2C;&#x4E00;&#x6B21;&#x6539;&#x9020;&#xFF1A;&#x62C6;&#x6210;&#x56FA;&#x5B9A; Workflow&#x3002;</li>
</ul>
<pre><code class="language-text">&#x8BFB;&#x53D6;&#x8D44;&#x6599;
&#x2192; &#x63D0;&#x53D6;&#x4E8B;&#x5B9E;
&#x2192; &#x5408;&#x5E76;&#x91CD;&#x590D;&#x4FE1;&#x606F;
&#x2192; &#x751F;&#x6210;&#x63D0;&#x7EB2;
&#x2192; &#x64B0;&#x5199;&#x7B80;&#x62A5;
&#x2192; &#x68C0;&#x67E5;&#x5F15;&#x7528;
</code></pre>
<ul>
<li>&#x7B2C;&#x4E00;&#x5C42;&#x53CD;&#x8F6C;&#xFF1A;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x53EF;&#x4EE5;&#x8C03;&#x7528; LLM&#xFF0C;&#x4F46;&#x4E0B;&#x4E00;&#x6B65;&#x7531;&#x4EE3;&#x7801;&#x51B3;&#x5B9A;&#xFF0C;&#x6240;&#x4EE5;&#x4ECD;&#x7136;&#x662F; Workflow&#x3002;</li>
<li>&#x7B2C;&#x4E8C;&#x5C42;&#x53CD;&#x8F6C;&#xFF1A;&#x6709; <code>if</code>&#x3001;&#x5FAA;&#x73AF;&#x548C;&#x91CD;&#x8BD5;&#xFF0C;&#x4E5F;&#x672A;&#x5FC5;&#x662F; Agent&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x4E24;&#x4E2A;&#x6765;&#x6E90;&#x4E92;&#x76F8;&#x77DB;&#x76FE;&#xFF0C;&#x7CFB;&#x7EDF;&#x65E0;&#x6CD5;&#x9884;&#x5148;&#x77E5;&#x9053;&#x8BE5;&#x641C;&#x7D22;&#x4EC0;&#x4E48;&#x3001;&#x5148;&#x68C0;&#x67E5;&#x54EA;&#x4E2A;&#x6765;&#x6E90;&#x3002;</li>
<li>&#x5C40;&#x90E8; Agent Loop&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x89C2;&#x5BDF;&#x51B2;&#x7A81;
&#x2192; &#x63D0;&#x51FA;&#x5047;&#x8BBE;
&#x2192; &#x9009;&#x62E9;&#x65B0;&#x7684;&#x641C;&#x7D22;&#x6216;&#x68C0;&#x67E5;&#x52A8;&#x4F5C;
&#x2192; &#x83B7;&#x5F97;&#x8BC1;&#x636E;
&#x2192; &#x4FDD;&#x7559;&#x3001;&#x4FEE;&#x6B63;&#x6216;&#x653E;&#x5F03;&#x5047;&#x8BBE;
</code></pre>
<ul>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>Workflow &#x66F4;&#x53EF;&#x63A7;&#x3001;&#x4FBF;&#x5B9C;&#x3001;&#x5BB9;&#x6613;&#x91CD;&#x653E;&#x3002;</li>
<li>Agent &#x80FD;&#x5904;&#x7406;&#x672A;&#x77E5;&#x8DEF;&#x5F84;&#xFF0C;&#x4F46;&#x5E26;&#x6765;&#x6210;&#x672C;&#x3001;&#x5EF6;&#x8FDF;&#x4E0E;&#x4E0D;&#x53EF;&#x9884;&#x6D4B;&#x6027;&#x3002;</li>
<li>&#x540C;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x53EF;&#x4EE5;&#x6709;&#x786E;&#x5B9A;&#x9AA8;&#x67B6;&#x548C;&#x5C40;&#x90E8;&#x63A2;&#x7D22;&#xFF0C;&#x4E0D;&#x5FC5;&#x6574;&#x4F53;&#x9009;&#x8FB9;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x5728;&#x770B;&#x5230;&#x5F53;&#x524D;&#x7ED3;&#x679C;&#x4EE5;&#x524D;&#xFF0C;&#x80FD;&#x5426;&#x786E;&#x5B9A;&#x4E0B;&#x4E00;&#x6B65;&#xFF1F;&#x80FD;&#x5219; Workflow&#xFF1B;&#x4E0D;&#x80FD;&#x624D;&#x7ED9; Agent &#x9009;&#x62E9;&#x6743;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x624B;&#x5199;&#x4E00;&#x6B21;&#x6A21;&#x578B;&#x3001;&#x5DE5;&#x5177;&#x548C;&#x6D88;&#x606F;&#x5FAA;&#x73AF;&#x5F88;&#x7B80;&#x5355;&#xFF0C;&#x5DE5;&#x5177;&#x591A;&#x8D77;&#x6765;&#x4EE5;&#x540E;&#xFF0C;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#x5148;&#x5931;&#x63A7;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>03_workflow_vs_agent.py</code></li>
</ul>
<h3 id="N04&#xFF5C;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BFB;&#x61C2; LangChain&#xFF1A;&#x5B83;&#x5230;&#x5E95;&#x5C01;&#x88C5;&#x4E86;&#x4EC0;&#x4E48;"><a href="#N04&#xFF5C;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BFB;&#x61C2; LangChain&#xFF1A;&#x5B83;&#x5230;&#x5E95;&#x5C01;&#x88C5;&#x4E86;&#x4EC0;&#x4E48;"></a>N04&#xFF5C;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BFB;&#x61C2; LangChain&#xFF1A;&#x5B83;&#x5230;&#x5E95;&#x5C01;&#x88C5;&#x4E86;&#x4EC0;&#x4E48;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x8BFB;&#x61C2; LangChain&#xFF1A;&#x5B83;&#x5230;&#x5E95;&#x66FF; Agent &#x5C01;&#x88C5;&#x4E86;&#x4EC0;&#x4E48;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x624B;&#x5199;&#x6A21;&#x578B;&#x8C03;&#x7528;&#x3001;&#x5DE5;&#x5177;&#x5B9A;&#x4E49;&#x3001;tool call &#x89E3;&#x6790;&#x3001;&#x7ED3;&#x679C;&#x56DE;&#x4F20;&#x548C;&#x505C;&#x6B62;&#x6761;&#x4EF6;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x52A0;&#x5165;&#x641C;&#x7D22;&#x3001;&#x7F51;&#x9875;&#x8BFB;&#x53D6;&#x3001;&#x6765;&#x6E90;&#x6838;&#x9A8C;&#x4E09;&#x4E2A;&#x5DE5;&#x5177;&#x540E;&#xFF0C;&#x6D88;&#x606F;&#x4E0E;&#x5DE5;&#x5177;&#x5FAA;&#x73AF;&#x53D8;&#x5F97;&#x6742;&#x4E71;&#x3002;</li>
<li>&#x5148;&#x624B;&#x5199;&#x6700;&#x5C0F;&#x5FAA;&#x73AF;&#xFF0C;&#x8BA9;&#x8BFB;&#x8005;&#x770B;&#x5230;&#x95EE;&#x9898;&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x6A21;&#x578B;&#x9009;&#x62E9;&#x5DE5;&#x5177;
&#x2192; &#x7A0B;&#x5E8F;&#x6267;&#x884C;&#x5DE5;&#x5177;
&#x2192; &#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x56DE;&#x5230;&#x6A21;&#x578B;
&#x2192; &#x6A21;&#x578B;&#x51B3;&#x5B9A;&#x7EE7;&#x7EED;&#x8FD8;&#x662F;&#x7ED3;&#x675F;
</code></pre>
<ul>
<li>&#x518D;&#x7528; LangChain &#x91CD;&#x5199;&#x540C;&#x4E00;&#x6BB5;&#x903B;&#x8F91;&#x3002;</li>
<li>&#x53EA;&#x4ECB;&#x7ECD;&#x5F53;&#x524D;&#x4F8B;&#x5B50;&#x9700;&#x8981;&#x7684;&#x80FD;&#x529B;&#xFF1A;
<ul>
<li>Model&#x3002;</li>
<li>Messages&#x3002;</li>
<li>Tools&#x3002;</li>
<li>Structured Output&#x3002;</li>
<li><code>create_agent</code> &#x4E0E;&#x505C;&#x6B62;&#x6761;&#x4EF6;&#x3002;</li>
</ul>
</li>
<li>&#x4E0D;&#x5728;&#x672C;&#x7BC7;&#x5C55;&#x5F00;&#xFF1A;Memory&#x3001;&#x591A; Agent&#x3001;LangGraph checkpoint&#x3002;</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>&#x6846;&#x67B6;&#x51CF;&#x5C11;&#x80F6;&#x6C34;&#x4EE3;&#x7801;&#xFF0C;&#x4E5F;&#x5F15;&#x5165;&#x62BD;&#x8C61;&#x4E0E;&#x7248;&#x672C;&#x4F9D;&#x8D56;&#x3002;</li>
<li>&#x7B80;&#x5355;&#x8C03;&#x7528;&#x4E0D;&#x5FC5;&#x4E3A;&#x4E86;&#x7EDF;&#x4E00;&#x800C;&#x5F3A;&#x884C;&#x5957;&#x6846;&#x67B6;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;LangChain &#x6CA1;&#x6709;&#x8BA9;&#x6A21;&#x578B;&#x66F4;&#x806A;&#x660E;&#xFF0C;&#x5B83;&#x6536;&#x8D77;&#x7684;&#x662F;&#x6A21;&#x578B;&#x3001;&#x5DE5;&#x5177;&#x548C;&#x5FAA;&#x73AF;&#x4E4B;&#x95F4;&#x5BB9;&#x6613;&#x5199;&#x4E71;&#x7684;&#x80F6;&#x6C34;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;Agent &#x80FD;&#x5FAA;&#x73AF;&#x4EE5;&#x540E;&#xFF0C;&#x641C;&#x7D22;&#x4E0D;&#x8DB3;&#x8981;&#x56DE;&#x5934;&#x3001;&#x4EBA;&#x5DE5;&#x5BA1;&#x6838;&#x8981;&#x6682;&#x505C;&#x3001;&#x670D;&#x52A1;&#x91CD;&#x542F;&#x8981;&#x6062;&#x590D;&#xFF0C;&#x5355;&#x4E2A;&#x5FAA;&#x73AF;&#x5F00;&#x59CB;&#x88C5;&#x4E0D;&#x4E0B;&#x8FD9;&#x4E9B;&#x72B6;&#x6001;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>04_langchain_agent.py</code></li>
</ul>
<h3 id="N05&#xFF5C;&#x6D41;&#x7A0B;&#x7B2C;&#x4E00;&#x6B21;&#x9700;&#x8981;&#x8D70;&#x56DE;&#x5934;&#x8DEF;&#xFF1A;&#x6700;&#x5C0F; LangGraph"><a href="#N05&#xFF5C;&#x6D41;&#x7A0B;&#x7B2C;&#x4E00;&#x6B21;&#x9700;&#x8981;&#x8D70;&#x56DE;&#x5934;&#x8DEF;&#xFF1A;&#x6700;&#x5C0F; LangGraph"></a>N05&#xFF5C;&#x6D41;&#x7A0B;&#x7B2C;&#x4E00;&#x6B21;&#x9700;&#x8981;&#x8D70;&#x56DE;&#x5934;&#x8DEF;&#xFF1A;&#x6700;&#x5C0F; LangGraph</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x6D41;&#x7A0B;&#x7B2C;&#x4E00;&#x6B21;&#x9700;&#x8981;&#x201C;&#x8D70;&#x56DE;&#x5934;&#x8DEF;&#x201D;&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x5B9E;&#x73B0;&#x6700;&#x5C0F; LangGraph</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;LangChain Agent &#x53EF;&#x4EE5;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#xFF0C;&#x4F46;&#x5916;&#x90E8;&#x4E1A;&#x52A1;&#x6D41;&#x7A0B;&#x4ECD;&#x6563;&#x843D;&#x5728;&#x6761;&#x4EF6;&#x5224;&#x65AD;&#x91CC;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;
<ul>
<li>&#x8BC1;&#x636E;&#x4E0D;&#x8DB3;&#xFF0C;&#x8981;&#x56DE;&#x5230;&#x641C;&#x7D22;&#x3002;</li>
<li>&#x5F15;&#x7528;&#x5931;&#x8D25;&#xFF0C;&#x8981;&#x9000;&#x56DE;&#x5199;&#x4F5C;&#x3002;</li>
<li>&#x901A;&#x8FC7;&#x4EE5;&#x540E;&#xFF0C;&#x8981;&#x7B49;&#x5F85;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x3002;</li>
</ul>
</li>
<li>&#x6700;&#x5C0F;&#x56FE;&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x641C;&#x7D22; &#x2192; &#x5224;&#x65AD;&#x8BC1;&#x636E;
        &#x251C;&#x2500; &#x8DB3;&#x591F; &#x2192; &#x5199;&#x4F5C; &#x2192; &#x5F15;&#x7528;&#x68C0;&#x67E5;
        &#x2514;&#x2500; &#x4E0D;&#x8DB3; &#x2192; &#x4FEE;&#x6539;&#x67E5;&#x8BE2; &#x2192; &#x641C;&#x7D22;
</code></pre>
<ul>
<li>&#x53EA;&#x5F15;&#x5165;&#xFF1A;
<ul>
<li>State&#x3002;</li>
<li>Node&#x3002;</li>
<li>Edge &#x4E0E; Conditional Edge&#x3002;</li>
<li>&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;&#x3002;</li>
</ul>
</li>
<li>&#x6682;&#x4E0D;&#x5F15;&#x5165;&#x6301;&#x4E45;&#x5316; checkpoint&#xFF0C;&#x628A;&#x201C;&#x80FD;&#x753B;&#x51FA;&#x6D41;&#x7A0B;&#x201D;&#x548C;&#x201C;&#x80FD;&#x6062;&#x590D;&#x6267;&#x884C;&#x201D;&#x5206;&#x6210;&#x4E24;&#x7BC7;&#x3002;</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>&#x56FE;&#x80FD;&#x8BA9;&#x72B6;&#x6001;&#x4E0E;&#x8F6C;&#x79FB;&#x663E;&#x5F0F;&#x5316;&#xFF0C;&#x4F46;&#x5C0F;&#x4EFB;&#x52A1;&#x4F1A;&#x56E0;&#x6B64;&#x53D8;&#x91CD;&#x3002;</li>
<li>&#x8282;&#x70B9;&#x62C6;&#x5F97;&#x592A;&#x7EC6;&#xFF0C;&#x7406;&#x89E3;&#x4E0E;&#x89C2;&#x6D4B;&#x6210;&#x672C;&#x589E;&#x52A0;&#xFF1B;&#x592A;&#x7C97;&#xFF0C;&#x53C8;&#x5931;&#x53BB;&#x6062;&#x590D;&#x548C;&#x5B9A;&#x4F4D;&#x4EF7;&#x503C;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;LangGraph &#x7684;&#x4EF7;&#x503C;&#x4E0D;&#x5728;&#x753B;&#x56FE;&#xFF0C;&#x800C;&#x5728;&#x660E;&#x786E;&#x201C;&#x5F53;&#x524D;&#x72B6;&#x6001;&#x662F;&#x4EC0;&#x4E48;&#xFF0C;&#x4E0B;&#x4E00;&#x6B65;&#x4F9D;&#x636E;&#x4EC0;&#x4E48;&#x53D1;&#x751F;&#x201D;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x56FE;&#x5DF2;&#x7ECF;&#x80FD;&#x8DD1;&#xFF0C;&#x4F46;&#x6700;&#x7EC8;&#x7B80;&#x62A5;&#x5199;&#x9519;&#x65F6;&#xFF0C;&#x4ECD;&#x7136;&#x4E0D;&#x77E5;&#x9053;&#x6700;&#x65E9;&#x574F;&#x5728;&#x54EA;&#x4E2A;&#x8282;&#x70B9;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>05_minimal_langgraph.py</code></li>
</ul>
<h3 id="N06&#xFF5C;&#x6700;&#x7EC8;&#x6587;&#x7AE0;&#x5199;&#x9519;&#x4E86;&#xFF0C;&#x5230;&#x5E95;&#x662F;&#x54EA;&#x4E00;&#x6B65;&#x574F;&#x4E86;&#xFF1A;&#x6700;&#x5C0F; Langfuse"><a href="#N06&#xFF5C;&#x6700;&#x7EC8;&#x6587;&#x7AE0;&#x5199;&#x9519;&#x4E86;&#xFF0C;&#x5230;&#x5E95;&#x662F;&#x54EA;&#x4E00;&#x6B65;&#x574F;&#x4E86;&#xFF1A;&#x6700;&#x5C0F; Langfuse"></a>N06&#xFF5C;&#x6700;&#x7EC8;&#x6587;&#x7AE0;&#x5199;&#x9519;&#x4E86;&#xFF0C;&#x5230;&#x5E95;&#x662F;&#x54EA;&#x4E00;&#x6B65;&#x574F;&#x4E86;&#xFF1A;&#x6700;&#x5C0F; Langfuse</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x6700;&#x7EC8;&#x6587;&#x7AE0;&#x5199;&#x9519;&#x4E86;&#xFF0C;&#x5230;&#x5E95;&#x662F;&#x54EA;&#x4E00;&#x6B65;&#x574F;&#x4E86;&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x63A5;&#x5165; Langfuse</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;Graph &#x80FD;&#x8FD0;&#x884C;&#xFF0C;&#x4F46;&#x65E5;&#x5FD7;&#x53EA;&#x80FD;&#x770B;&#x5230;&#x96F6;&#x6563;&#x8F93;&#x51FA;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x628A;&#x201C;&#x4ECD;&#x5728;&#x5185;&#x6D4B;&#x201D;&#x5199;&#x6210;&#x201C;&#x6B63;&#x5F0F;&#x53D1;&#x5E03;&#x201D;&#xFF0C;&#x65E0;&#x6CD5;&#x5224;&#x65AD;&#x662F;&#x641C;&#x7D22;&#x3001;&#x63D0;&#x53D6;&#x3001;&#x5224;&#x65AD;&#x8FD8;&#x662F;&#x6539;&#x5199;&#x51FA;&#x9519;&#x3002;</li>
<li>&#x6700;&#x5C0F; Trace&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x4E00;&#x6B21;&#x7B80;&#x62A5;&#x4EFB;&#x52A1; = &#x4E00;&#x4E2A; Trace
&#x641C;&#x7D22;&#x3001;&#x63D0;&#x53D6;&#x3001;&#x5224;&#x65AD;&#x3001;&#x5199;&#x4F5C; = Observations
&#x6BCF;&#x6B21;&#x6A21;&#x578B;&#x8C03;&#x7528; = Generation
</code></pre>
<ul>
<li>&#x53EA;&#x5F15;&#x5165;&#xFF1A;
<ul>
<li>Trace&#x3001;Observation&#x3001;Generation&#x3002;</li>
<li>&#x8F93;&#x5165;&#x3001;&#x8F93;&#x51FA;&#x3001;&#x5EF6;&#x8FDF;&#x3001;Token &#x4E0E;&#x6210;&#x672C;&#x3002;</li>
<li>&#x628A; Prompt &#x7248;&#x672C;&#x5173;&#x8054;&#x5230; Generation&#x3002;</li>
</ul>
</li>
<li>&#x4E0D;&#x5728;&#x672C;&#x7BC7;&#x5C55;&#x5F00;&#xFF1A;Dataset&#x3001;Experiment&#x3001;LLM-as-a-Judge&#x3002;</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>&#x89C2;&#x6D4B;&#x8D8A;&#x7EC6;&#xFF0C;&#x5B9A;&#x4F4D;&#x8D8A;&#x5BB9;&#x6613;&#xFF0C;&#x4F46;&#x6570;&#x636E;&#x91CF;&#x3001;&#x9690;&#x79C1;&#x4E0E;&#x6210;&#x672C;&#x4E5F;&#x4F1A;&#x4E0A;&#x5347;&#x3002;</li>
<li>Trace &#x80FD;&#x544A;&#x8BC9;&#x4F60;&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x4E0D;&#x4F1A;&#x81EA;&#x52A8;&#x544A;&#x8BC9;&#x4F60;&#x600E;&#x6837;&#x4FEE;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x53EA;&#x662F;&#x4E8B;&#x6545;&#x73B0;&#x573A;&#x7684;&#x6700;&#x540E;&#x4E00;&#x5F20;&#x7167;&#x7247;&#xFF0C;Trace &#x624D;&#x4FDD;&#x7559;&#x4E8B;&#x60C5;&#x600E;&#x6837;&#x4E00;&#x6B65;&#x6B65;&#x53D1;&#x751F;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x770B;&#x89C1;&#x6BCF;&#x4E00;&#x6B65;&#x4EE5;&#x540E;&#xFF0C;&#x65B0;&#x7684;&#x95EE;&#x9898;&#x662F;&#x54EA;&#x4E9B;&#x4FE1;&#x606F;&#x771F;&#x7684;&#x8BE5;&#x8FDB;&#x5165;&#x6A21;&#x578B;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>06_langfuse_trace.py</code></li>
</ul>
<h2 id="&#x7B2C;&#x4E09;&#x5B63;&#xFF1A;Agent &#x600E;&#x6837;&#x4ECE;&#x80FD;&#x8DD1;&#x53D8;&#x6210;&#x6562;&#x7528;"><a href="#&#x7B2C;&#x4E09;&#x5B63;&#xFF1A;Agent &#x600E;&#x6837;&#x4ECE;&#x80FD;&#x8DD1;&#x53D8;&#x6210;&#x6562;&#x7528;"></a>&#x7B2C;&#x4E09;&#x5B63;&#xFF1A;Agent &#x600E;&#x6837;&#x4ECE;&#x80FD;&#x8DD1;&#x53D8;&#x6210;&#x6562;&#x7528;</h2>
<h3 id="N07&#xFF5C;Context&#xFF1A;&#x8D44;&#x6599;&#x8D8A;&#x591A;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x56DE;&#x7B54;&#x53CD;&#x800C;&#x8D8A;&#x5DEE;"><a href="#N07&#xFF5C;Context&#xFF1A;&#x8D44;&#x6599;&#x8D8A;&#x591A;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x56DE;&#x7B54;&#x53CD;&#x800C;&#x8D8A;&#x5DEE;"></a>N07&#xFF5C;Context&#xFF1A;&#x8D44;&#x6599;&#x8D8A;&#x591A;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x56DE;&#x7B54;&#x53CD;&#x800C;&#x8D8A;&#x5DEE;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709;&#x76F8;&#x5173;&#x7B14;&#x8BB0;&#xFF0C;&#x53EF;&#x91CD;&#x5199;&#x4E3A;&#x7CFB;&#x5217;&#x6B63;&#x6587;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x8D44;&#x6599;&#x8D8A;&#x591A;&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x53CD;&#x800C;&#x8D8A;&#x5BB9;&#x6613;&#x7B54;&#x9519;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x628A;&#x6240;&#x6709;&#x641C;&#x7D22;&#x7ED3;&#x679C;&#x3001;&#x5386;&#x53F2;&#x6D88;&#x606F;&#x548C;&#x5DE5;&#x5177;&#x8F93;&#x51FA;&#x90FD;&#x585E;&#x7ED9;&#x6A21;&#x578B;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x5173;&#x952E;&#x4FE1;&#x606F;&#x88AB;&#x566A;&#x58F0;&#x6DF9;&#x6CA1;&#xFF0C;&#x65E7;&#x7ED3;&#x8BBA;&#x4E0E;&#x65B0;&#x8BC1;&#x636E;&#x4E92;&#x76F8;&#x6C61;&#x67D3;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x673A;&#x5236;&#xFF1A;
<ul>
<li>&#x539F;&#x59CB;&#x8D44;&#x6599;&#x4E0E;&#x9001;&#x5165;&#x6A21;&#x578B;&#x7684; Context &#x5206;&#x79BB;&#x3002;</li>
<li>&#x6458;&#x8981;&#x3001;&#x68C0;&#x7D22;&#x3001;&#x88C1;&#x526A;&#x548C;&#x5F15;&#x7528;&#x56DE;&#x6EAF;&#x3002;</li>
<li>&#x5F53;&#x524D;&#x6B65;&#x9AA4;&#x53EA;&#x83B7;&#x5F97;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#x6240;&#x9700;&#x7684;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x592A;&#x5C11;&#x4F1A;&#x6F0F;&#x4FE1;&#x606F;&#xFF0C;&#x592A;&#x591A;&#x4F1A;&#x589E;&#x52A0;&#x6210;&#x672C;&#x5E76;&#x7A00;&#x91CA;&#x6CE8;&#x610F;&#x529B;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;Context Engineering &#x4E0D;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x770B;&#x5F97;&#x66F4;&#x591A;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x5B83;&#x5728;&#x8FD9;&#x4E00;&#x6B65;&#x53EA;&#x770B;&#x8BE5;&#x770B;&#x7684;&#x4E1C;&#x897F;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x80FD;&#x63A7;&#x5236;&#x4E86;&#xFF0C;&#x4F46;&#x7528;&#x6237;&#x6BCF;&#x6B21;&#x90FD;&#x8981;&#x91CD;&#x65B0;&#x8BF4;&#x660E;&#x81EA;&#x5DF1;&#x7684;&#x504F;&#x597D;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>07_context_pipeline.py</code></li>
</ul>
<h3 id="N08&#xFF5C;Memory&#xFF1A;Agent &#x5E94;&#x8BE5;&#x8BB0;&#x4F4F;&#x4EC0;&#x4E48;&#xFF0C;&#x53C8;&#x8BE5;&#x5FD8;&#x6389;&#x4EC0;&#x4E48;"><a href="#N08&#xFF5C;Memory&#xFF1A;Agent &#x5E94;&#x8BE5;&#x8BB0;&#x4F4F;&#x4EC0;&#x4E48;&#xFF0C;&#x53C8;&#x8BE5;&#x5FD8;&#x6389;&#x4EC0;&#x4E48;"></a>N08&#xFF5C;Memory&#xFF1A;Agent &#x5E94;&#x8BE5;&#x8BB0;&#x4F4F;&#x4EC0;&#x4E48;&#xFF0C;&#x53C8;&#x8BE5;&#x5FD8;&#x6389;&#x4EC0;&#x4E48;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709; Memory &#x6587;&#x7AE0;&#x4E0E;&#x8BBA;&#x6587;&#x7B14;&#x8BB0;&#xFF0C;&#x53EF;&#x590D;&#x7528;&#x6750;&#x6599;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>Agent &#x4E3A;&#x4EC0;&#x4E48;&#x603B;&#x8BB0;&#x4E0D;&#x4F4F;&#x4F60;&#xFF1F;&#x53C8;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x4EC0;&#x4E48;&#x90FD;&#x8BB0;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x6BCF;&#x6B21;&#x90FD;&#x8981;&#x91CD;&#x65B0;&#x8BF4;&#x660E;&#x5199;&#x4F5C;&#x504F;&#x597D;&#x548C;&#x53EF;&#x4FE1;&#x6765;&#x6E90;&#x6807;&#x51C6;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x8BB0;&#x5FC6;&#x4E0D;&#x8DB3;&#x5BFC;&#x81F4;&#x91CD;&#x590D;&#x6C9F;&#x901A;&#xFF1B;&#x8BB0;&#x5FC6;&#x8FC7;&#x591A;&#x53C8;&#x628A;&#x4E00;&#x6B21;&#x6027;&#x7684;&#x8981;&#x6C42;&#x5E26;&#x5230;&#x540E;&#x7EED;&#x4EFB;&#x52A1;&#x3002;</li>
<li>&#x533A;&#x5206;&#xFF1A;
<ul>
<li>&#x5F53;&#x524D;&#x8FD0;&#x884C; State&#x3002;</li>
<li>&#x4F1A;&#x8BDD;&#x5185;&#x77ED;&#x671F;&#x8BB0;&#x5FC6;&#x3002;</li>
<li>&#x8DE8;&#x4EFB;&#x52A1;&#x957F;&#x671F;&#x504F;&#x597D;&#x3002;</li>
<li>&#x4E0D;&#x5E94;&#x6301;&#x4E45;&#x5316;&#x7684;&#x4E34;&#x65F6;&#x4FE1;&#x606F;&#x3002;</li>
</ul>
</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;&#x4E2A;&#x6027;&#x5316;&#x4E0E;&#x6C61;&#x67D3;&#x3001;&#x4FBF;&#x5229;&#x4E0E;&#x9690;&#x79C1;&#x3001;&#x81EA;&#x52A8;&#x5199;&#x5165;&#x4E0E;&#x7528;&#x6237;&#x786E;&#x8BA4;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;Memory &#x7684;&#x96BE;&#x70B9;&#x4E0D;&#x662F;&#x5B58;&#x50A8;&#xFF0C;&#x800C;&#x662F;&#x51B3;&#x5B9A;&#x4EC0;&#x4E48;&#x503C;&#x5F97;&#x5728;&#x672A;&#x6765;&#x7EE7;&#x7EED;&#x5F71;&#x54CD;&#x5224;&#x65AD;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x52A9;&#x624B;&#x8BA4;&#x8BC6;&#x7528;&#x6237;&#x4EE5;&#x540E;&#xFF0C;&#x9762;&#x5BF9;&#x4E00;&#x7BC7;&#x957F;&#x7814;&#x7A76;&#x4ECD;&#x7136;&#x53EF;&#x80FD;&#x505A;&#x5230;&#x4E00;&#x534A;&#x5FD8;&#x4E86;&#x6700;&#x521D;&#x76EE;&#x6807;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>08_memory.py</code></li>
</ul>
<h3 id="N09&#xFF5C;Plan &#x4E0E; Skill&#xFF1A;&#x4EFB;&#x52A1;&#x53D8;&#x957F;&#x4EE5;&#x540E;&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8D8A;&#x6765;&#x8D8A;&#x5BB9;&#x6613;&#x8DD1;&#x504F;"><a href="#N09&#xFF5C;Plan &#x4E0E; Skill&#xFF1A;&#x4EFB;&#x52A1;&#x53D8;&#x957F;&#x4EE5;&#x540E;&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8D8A;&#x6765;&#x8D8A;&#x5BB9;&#x6613;&#x8DD1;&#x504F;"></a>N09&#xFF5C;Plan &#x4E0E; Skill&#xFF1A;&#x4EFB;&#x52A1;&#x53D8;&#x957F;&#x4EE5;&#x540E;&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8D8A;&#x6765;&#x8D8A;&#x5BB9;&#x6613;&#x8DD1;&#x504F;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#xFF0C;&#x53EF;&#x5438;&#x6536; Skill &#x4E0E; Context &#x7B14;&#x8BB0;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4EFB;&#x52A1;&#x53D8;&#x957F;&#x4EE5;&#x540E;&#xFF0C;Agent &#x4E3A;&#x4EC0;&#x4E48;&#x8D8A;&#x6765;&#x8D8A;&#x5BB9;&#x6613;&#x8DD1;&#x504F;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;Agent &#x8FB9;&#x505A;&#x8FB9;&#x60F3;&#xFF0C;&#x6CA1;&#x6709;&#x663E;&#x5F0F;&#x8BA1;&#x5212;&#xFF0C;&#x4E5F;&#x4F1A;&#x91CD;&#x590D;&#x53D1;&#x660E;&#x76F8;&#x540C;&#x505A;&#x6CD5;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x7814;&#x7A76;&#x591A;&#x4E2A;&#x5B50;&#x95EE;&#x9898;&#x65F6;&#x6F0F;&#x9879;&#x3001;&#x91CD;&#x590D;&#x641C;&#x7D22;&#x3001;&#x5199;&#x4F5C;&#x76EE;&#x6807;&#x6F02;&#x79FB;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x673A;&#x5236;&#xFF1A;
<ul>
<li>&#x663E;&#x5F0F;&#x8BA1;&#x5212;&#x548C; Todo&#x3002;</li>
<li>&#x5B8C;&#x6210;&#x6761;&#x4EF6;&#x3002;</li>
<li>&#x53EF;&#x590D;&#x7528; Skill&#xFF1A;&#x6765;&#x6E90;&#x8BC4;&#x7EA7;&#x3001;&#x51B2;&#x7A81;&#x6838;&#x9A8C;&#x3001;&#x7B80;&#x62A5;&#x5199;&#x4F5C;&#x89C4;&#x8303;&#x3002;</li>
<li>&#x8BA1;&#x5212;&#x53EF;&#x66F4;&#x65B0;&#xFF0C;&#x4F46;&#x6BCF;&#x6B21;&#x53D8;&#x5316;&#x7559;&#x4E0B;&#x539F;&#x56E0;&#x3002;</li>
</ul>
</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;&#x8BA1;&#x5212;&#x592A;&#x6B7B;&#x4F1A;&#x963B;&#x788D;&#x63A2;&#x7D22;&#xFF0C;&#x5B8C;&#x5168;&#x65E0;&#x8BA1;&#x5212;&#x53C8;&#x96BE;&#x4EE5;&#x77E5;&#x9053;&#x662F;&#x5426;&#x504F;&#x822A;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x8BA1;&#x5212;&#x4E0D;&#x662F;&#x9884;&#x8A00;&#x672A;&#x6765;&#xFF0C;&#x800C;&#x662F;&#x7ED9;&#x53D8;&#x5316;&#x63D0;&#x4F9B;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x6BD4;&#x8F83;&#x7684;&#x57FA;&#x51C6;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x5B50;&#x95EE;&#x9898;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#xFF0C;&#x53EF;&#x4EE5;&#x5E76;&#x884C;&#x5904;&#x7406;&#xFF0C;&#x4F46;&#x591A; Agent &#x662F;&#x5426;&#x53EA;&#x662F;&#x628A;&#x6DF7;&#x4E71;&#x590D;&#x5236;&#x4E86;&#x51E0;&#x4EFD;&#xFF1F;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>09_plan_and_skills.py</code></li>
</ul>
<h3 id="N10&#xFF5C;&#x591A; Agent&#xFF1A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x5206;&#x5DE5;&#x771F;&#x7684;&#x6BD4;&#x4E00;&#x4E2A; Agent &#x66F4;&#x597D;"><a href="#N10&#xFF5C;&#x591A; Agent&#xFF1A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x5206;&#x5DE5;&#x771F;&#x7684;&#x6BD4;&#x4E00;&#x4E2A; Agent &#x66F4;&#x597D;"></a>N10&#xFF5C;&#x591A; Agent&#xFF1A;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x5206;&#x5DE5;&#x771F;&#x7684;&#x6BD4;&#x4E00;&#x4E2A; Agent &#x66F4;&#x597D;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709;&#x300A;&#x4ECE; Loop &#x5230; Graph&#x300B;&#xFF0C;&#x9700;&#x8981;&#x6362;&#x6210;&#x7EDF;&#x4E00;&#x4F8B;&#x5B50;&#x540E;&#x91CD;&#x5199;&#x6216;&#x4F5C;&#x4E3A;&#x6269;&#x5C55;&#x9605;&#x8BFB;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4E00;&#x4E2A; Agent &#x5FD9;&#x4E0D;&#x8FC7;&#x6765;&#xFF0C;&#x5C31;&#x8BE5;&#x62C6;&#x6210;&#x591A;&#x4E2A;&#x5417;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x4E00;&#x4E2A; Agent &#x987A;&#x5E8F;&#x7814;&#x7A76;&#x4EA7;&#x54C1;&#x3001;&#x516C;&#x53F8;&#x3001;&#x6280;&#x672F;&#x4E0E;&#x5E02;&#x573A;&#x80CC;&#x666F;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x9002;&#x7528;&#x6761;&#x4EF6;&#xFF1A;&#x5B50;&#x4EFB;&#x52A1;&#x76F8;&#x5BF9;&#x72EC;&#x7ACB;&#x3001;&#x5DE5;&#x5177;&#x4E0E;&#x4E0A;&#x4E0B;&#x6587;&#x4E0D;&#x540C;&#x3001;&#x5E76;&#x884C;&#x80FD;&#x663E;&#x8457;&#x964D;&#x4F4E;&#x8017;&#x65F6;&#x3002;</li>
<li>&#x56FE;&#x7ED3;&#x6784;&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x89C4;&#x5212;
&#x251C;&#x2500; &#x6280;&#x672F;&#x8BC1;&#x636E;&#x7814;&#x7A76;
&#x251C;&#x2500; &#x4EA7;&#x54C1;&#x4E0E;&#x516C;&#x53F8;&#x8D44;&#x6599;&#x7814;&#x7A76;
&#x2514;&#x2500; &#x53CD;&#x65B9;&#x8BC1;&#x636E;&#x7814;&#x7A76;
        &#x2193;
&#x7EDF;&#x4E00;&#x8BC1;&#x636E;&#x683C;&#x5F0F; &#x2192; &#x6C47;&#x603B; &#x2192; &#x51B2;&#x7A81;&#x68C0;&#x67E5; &#x2192; &#x5199;&#x4F5C;
</code></pre>
<ul>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;
<ul>
<li>&#x5E76;&#x884C;&#x63D0;&#x9AD8;&#x901F;&#x5EA6;&#xFF0C;&#x4E5F;&#x4F1A;&#x5236;&#x9020;&#x91CD;&#x590D;&#x641C;&#x7D22;&#x548C;&#x4E92;&#x76F8;&#x77DB;&#x76FE;&#x3002;</li>
<li>&#x4E13;&#x4E1A; Agent &#x80FD;&#x7F29;&#x5C0F;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x4F46;&#x6C47;&#x603B;&#x8282;&#x70B9;&#x53EF;&#x80FD;&#x6210;&#x4E3A;&#x65B0;&#x74F6;&#x9888;&#x3002;</li>
<li>&#x80FD;&#x7528;&#x4E00;&#x4E2A; Agent &#x89E3;&#x51B3;&#x65F6;&#xFF0C;&#x4E0D;&#x4E3A;&#x89D2;&#x8272;&#x626E;&#x6F14;&#x5F3A;&#x62C6;&#x591A;&#x4E2A;&#x3002;</li>
</ul>
</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x591A; Agent &#x7684;&#x7406;&#x7531;&#x4E0D;&#x662F;&#x201C;&#x4E13;&#x5BB6;&#x542C;&#x8D77;&#x6765;&#x66F4;&#x806A;&#x660E;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x4EFB;&#x52A1;&#x786E;&#x5B9E;&#x5B58;&#x5728;&#x53EF;&#x4EE5;&#x72EC;&#x7ACB;&#x63A8;&#x8FDB;&#x3001;&#x6700;&#x540E;&#x518D;&#x6C47;&#x5408;&#x7684;&#x652F;&#x7EBF;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x4EFB;&#x52A1;&#x8FD0;&#x884C;&#x5341;&#x5206;&#x949F;&#x540E;&#x4E2D;&#x65AD;&#xFF0C;&#x5DF2;&#x7ECF;&#x5B8C;&#x6210;&#x7684;&#x4E09;&#x6761;&#x652F;&#x7EBF;&#x662F;&#x5426;&#x5168;&#x90E8;&#x91CD;&#x505A;&#xFF1F;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>10_multi_agent.py</code></li>
</ul>
<h3 id="N11&#xFF5C;Checkpoint &#x4E0E; Retry&#xFF1A;&#x505A;&#x5230;&#x4E00;&#x534A;&#x65AD;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x4ECE;&#x5934;&#x91CD;&#x6765;"><a href="#N11&#xFF5C;Checkpoint &#x4E0E; Retry&#xFF1A;&#x505A;&#x5230;&#x4E00;&#x534A;&#x65AD;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x4ECE;&#x5934;&#x91CD;&#x6765;"></a>N11&#xFF5C;Checkpoint &#x4E0E; Retry&#xFF1A;&#x505A;&#x5230;&#x4E00;&#x534A;&#x65AD;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x4ECE;&#x5934;&#x91CD;&#x6765;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>Agent &#x505A;&#x5230;&#x4E00;&#x534A;&#x65AD;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x80FD;&#x4ECE;&#x5934;&#x91CD;&#x6765;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x957F;&#x4EFB;&#x52A1;&#x80FD;&#x5206;&#x5DE5;&#xFF0C;&#x4F46;&#x8FDB;&#x7A0B;&#x91CD;&#x542F;&#x6216;&#x5DE5;&#x5177;&#x8D85;&#x65F6;&#x540E;&#x53EA;&#x80FD;&#x6574;&#x6BB5;&#x91CD;&#x8DD1;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x4E09;&#x6761;&#x7814;&#x7A76;&#x652F;&#x7EBF;&#x5DF2;&#x6709;&#x4E24;&#x6761;&#x5B8C;&#x6210;&#xFF0C;&#x7B2C;&#x4E09;&#x6761;&#x8D85;&#x65F6;&#xFF1B;&#x76F2;&#x76EE;&#x91CD;&#x8BD5;&#x4F1A;&#x6D6A;&#x8D39;&#x6210;&#x672C;&#xFF0C;&#x751A;&#x81F3;&#x91CD;&#x590D;&#x5916;&#x90E8;&#x52A8;&#x4F5C;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x673A;&#x5236;&#xFF1A;
<ul>
<li>LangGraph Checkpoint&#x3002;</li>
<li>&#x4ECE;&#x6700;&#x540E;&#x6210;&#x529F;&#x72B6;&#x6001;&#x6062;&#x590D;&#x3002;</li>
<li>Retry Policy&#x3002;</li>
<li>&#x5E42;&#x7B49;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x3002;</li>
<li>&#x5DF2;&#x5B8C;&#x6210;&#x7ED3;&#x679C;&#x590D;&#x7528;&#x3002;</li>
</ul>
</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;checkpoint &#x9891;&#x7387;&#x8D8A;&#x9AD8;&#xFF0C;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x8D8A;&#x5C11;&#xFF0C;&#x4F46;&#x5B58;&#x50A8;&#x548C;&#x517C;&#x5BB9;&#x6210;&#x672C;&#x8D8A;&#x9AD8;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;retry &#x51B3;&#x5B9A;&#x518D;&#x505A;&#x4E00;&#x6B21;&#xFF0C;checkpoint &#x51B3;&#x5B9A;&#x4ECE;&#x54EA;&#x91CC;&#x518D;&#x505A;&#xFF1B;&#x4E8C;&#x8005;&#x4E0D;&#x662F;&#x4E00;&#x56DE;&#x4E8B;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x80FD;&#x6062;&#x590D;&#x4E0D;&#x7B49;&#x4E8E;&#x6562;&#x653E;&#x624B;&#x8FD0;&#x884C;&#xFF0C;&#x5C24;&#x5176;&#x5F53;&#x5DE5;&#x5177;&#x53EF;&#x4EE5;&#x53D1;&#x5E03;&#x6587;&#x7AE0;&#x3001;&#x53D1;&#x6D88;&#x606F;&#x6216;&#x6539;&#x6570;&#x636E;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>11_durable_execution.py</code></li>
</ul>
<h3 id="N12&#xFF5C;&#x6C99;&#x7BB1;&#x3001;&#x6743;&#x9650;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;&#xFF1A;&#x80FD;&#x505A;&#x4E0D;&#x7B49;&#x4E8E;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x505A;"><a href="#N12&#xFF5C;&#x6C99;&#x7BB1;&#x3001;&#x6743;&#x9650;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;&#xFF1A;&#x80FD;&#x505A;&#x4E0D;&#x7B49;&#x4E8E;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x505A;"></a>N12&#xFF5C;&#x6C99;&#x7BB1;&#x3001;&#x6743;&#x9650;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;&#xFF1A;&#x80FD;&#x505A;&#x4E0D;&#x7B49;&#x4E8E;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x505A;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5DF2;&#x6709; BubbleWrap &#x6C99;&#x7BB1;&#x6587;&#x7AE0;&#xFF0C;&#x53EF;&#x4F5C;&#x4E3A;&#x601D;&#x60F3;&#x652F;&#x7EBF;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>Agent &#x80FD;&#x5199;&#x5B8C;&#x6587;&#x7AE0;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x4E0D;&#x80FD;&#x8BA9;&#x5B83;&#x76F4;&#x63A5;&#x53D1;&#x5E03;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;Agent &#x80FD;&#x7814;&#x7A76;&#x3001;&#x5199;&#x4F5C;&#x5E76;&#x6062;&#x590D;&#x6267;&#x884C;&#xFF0C;&#x4F46;&#x5DE5;&#x5177;&#x6743;&#x9650;&#x8FC7;&#x5927;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x6765;&#x6E90;&#x5224;&#x65AD;&#x9519;&#x8BEF;&#xFF0C;&#x5374;&#x5DF2;&#x7ECF;&#x66F4;&#x65B0;&#x6587;&#x7AE0;&#x6216;&#x53D1;&#x9001;&#x901A;&#x77E5;&#x3002;</li>
<li>&#x65B0;&#x589E;&#x673A;&#x5236;&#xFF1A;
<ul>
<li>&#x8BFB;&#x5DE5;&#x5177;&#x4E0E;&#x5199;&#x5DE5;&#x5177;&#x5206;&#x79BB;&#x3002;</li>
<li>&#x6C99;&#x7BB1;&#x4E0E;&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x9694;&#x79BB;&#x3002;</li>
<li>&#x53D1;&#x5E03;&#x524D;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#x3002;</li>
<li>&#x9AD8;&#x98CE;&#x9669;&#x53C2;&#x6570;&#x7EA6;&#x675F;&#x3002;</li>
<li>&#x5DF2;&#x53D1;&#x751F;&#x526F;&#x4F5C;&#x7528;&#x7684;&#x8865;&#x507F;&#x8DEF;&#x5F84;&#x3002;</li>
</ul>
</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;&#x63A7;&#x5236;&#x8D8A;&#x5F3A;&#xFF0C;&#x81EA;&#x52A8;&#x5316;&#x6536;&#x76CA;&#x8D8A;&#x4F4E;&#xFF1B;&#x6743;&#x9650;&#x8D8A;&#x5BBD;&#xFF0C;&#x9519;&#x8BEF;&#x534A;&#x5F84;&#x8D8A;&#x5927;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;Agent &#x80FD;&#x505A;&#x4EC0;&#x4E48;&#xFF0C;&#x548C;&#x5B83;&#x88AB;&#x5141;&#x8BB8;&#x76F4;&#x63A5;&#x505A;&#x4EC0;&#x4E48;&#xFF0C;&#x662F;&#x4E24;&#x4E2A;&#x95EE;&#x9898;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x6709;&#x4E86;&#x63A7;&#x5236;&#x8FB9;&#x754C;&#xFF0C;&#x8FD8;&#x8981;&#x8BC1;&#x660E;&#x65B0;&#x7248;&#x672C;&#x6574;&#x4F53;&#x4E0A;&#x771F;&#x7684;&#x6BD4;&#x65E7;&#x7248;&#x672C;&#x597D;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>12_guardrails_and_hitl.py</code></li>
</ul>
<h3 id="N13&#xFF5C;Dataset &#x4E0E; Eval&#xFF1A;Demo &#x6210;&#x529F;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0A;&#x7EBF;&#x540E;&#x8D8A;&#x6765;&#x8D8A;&#x5DEE;"><a href="#N13&#xFF5C;Dataset &#x4E0E; Eval&#xFF1A;Demo &#x6210;&#x529F;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0A;&#x7EBF;&#x540E;&#x8D8A;&#x6765;&#x8D8A;&#x5DEE;"></a>N13&#xFF5C;Dataset &#x4E0E; Eval&#xFF1A;Demo &#x6210;&#x529F;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0A;&#x7EBF;&#x540E;&#x8D8A;&#x6765;&#x8D8A;&#x5DEE;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>Demo &#x660E;&#x660E;&#x6210;&#x529F;&#x4E86;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48; Agent &#x4E0A;&#x7EBF;&#x540E;&#x8D8A;&#x6765;&#x8D8A;&#x5DEE;&#xFF1F;</code></li>
<li>&#x4E0A;&#x4E00;&#x7248;&#x7CFB;&#x7EDF;&#xFF1A;&#x6709; Trace&#x3001;&#x6709;&#x6743;&#x9650;&#xFF0C;&#x4F46;&#x4F18;&#x5316;&#x4ECD;&#x9760;&#x6311;&#x51E0;&#x4E2A;&#x6848;&#x4F8B;&#x89C2;&#x5BDF;&#x3002;</li>
<li>&#x672C;&#x7BC7;&#x5931;&#x8D25;&#xFF1A;&#x4FEE;&#x597D;&#x6765;&#x6E90;&#x51B2;&#x7A81;&#x6848;&#x4F8B;&#x540E;&#xFF0C;&#x6B63;&#x5E38;&#x7B80;&#x62A5;&#x53CD;&#x800C;&#x53D8;&#x5F97;&#x5197;&#x957F;&#xFF1B;&#x6362;&#x6A21;&#x578B;&#x964D;&#x4F4E;&#x6210;&#x672C;&#xFF0C;&#x5374;&#x4E22;&#x4E86;&#x5F15;&#x7528;&#x3002;</li>
<li>&#x5F62;&#x6210;&#x95ED;&#x73AF;&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x7EBF;&#x4E0A;&#x5931;&#x8D25; Trace
&#x2192; &#x52A0;&#x5165; Dataset
&#x2192; &#x4FEE;&#x6539; Prompt&#x3001;&#x6A21;&#x578B;&#x6216;&#x6D41;&#x7A0B;
&#x2192; &#x6279;&#x91CF; Experiment
&#x2192; &#x6BD4;&#x8F83;&#x8D28;&#x91CF;&#x3001;&#x6210;&#x672C;&#x4E0E;&#x5EF6;&#x8FDF;
&#x2192; &#x7070;&#x5EA6;&#x53D1;&#x5E03;
&#x2192; &#x7EE7;&#x7EED;&#x89C2;&#x5BDF;
</code></pre>
<ul>
<li>&#x8BC4;&#x4EF7;&#x7EF4;&#x5EA6;&#xFF1A;&#x4E8B;&#x5B9E;&#x51C6;&#x786E;&#x3001;&#x5F15;&#x7528;&#x5B8C;&#x6574;&#x3001;&#x51B2;&#x7A81;&#x5904;&#x7406;&#x3001;&#x4FE1;&#x606F;&#x5BC6;&#x5EA6;&#x3001;&#x6210;&#x672C;&#x3001;&#x5EF6;&#x8FDF;&#x3002;</li>
<li>&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;&#xFF1A;&#x4EE3;&#x7801;&#x89C4;&#x5219;&#x3001;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x3001;&#x7528;&#x6237;&#x53CD;&#x9988;&#x3001;LLM-as-a-Judge &#x7EC4;&#x5408;&#x3002;</li>
<li>&#x5173;&#x952E;&#x6743;&#x8861;&#xFF1A;&#x5355;&#x4E00;&#x603B;&#x5206;&#x65B9;&#x4FBF;&#x6BD4;&#x8F83;&#xFF0C;&#x5374;&#x53EF;&#x80FD;&#x63A9;&#x76D6;&#x67D0;&#x4E2A;&#x5173;&#x952E;&#x80FD;&#x529B;&#x9000;&#x5316;&#x3002;</li>
<li>&#x6838;&#x5FC3;&#x5224;&#x65AD;&#xFF1A;&#x8BC4;&#x6D4B;&#x4E0D;&#x662F;&#x7ED9; Agent &#x6253;&#x4E00;&#x4E2A;&#x5206;&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x6BCF;&#x6B21;&#x4FEE;&#x6539;&#x90FD;&#x80FD;&#x56DE;&#x7B54;&#x201C;&#x6539;&#x5584;&#x4E86;&#x4EC0;&#x4E48;&#xFF0C;&#x53C8;&#x727A;&#x7272;&#x4E86;&#x4EC0;&#x4E48;&#x201D;&#x3002;</li>
<li>&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x94A9;&#x5B50;&#xFF1A;&#x6240;&#x6709;&#x90E8;&#x4EF6;&#x90FD;&#x6709;&#x4E86;&#xFF0C;&#x6700;&#x540E;&#x9700;&#x8981;&#x56DE;&#x770B;&#x54EA;&#x4E9B;&#x590D;&#x6742;&#x5EA6;&#x771F;&#x7684;&#x503C;&#x5F97;&#x4FDD;&#x7559;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>13_evaluation_loop.py</code></li>
</ul>
<h3 id="N14&#xFF5C;&#x7EC8;&#x7AE0;&#xFF1A;&#x4E00;&#x4E2A;&#x53EF;&#x9760; Agent &#x7684;&#x5B8C;&#x6574;&#x7ED3;&#x6784;"><a href="#N14&#xFF5C;&#x7EC8;&#x7AE0;&#xFF1A;&#x4E00;&#x4E2A;&#x53EF;&#x9760; Agent &#x7684;&#x5B8C;&#x6574;&#x7ED3;&#x6784;"></a>N14&#xFF5C;&#x7EC8;&#x7AE0;&#xFF1A;&#x4E00;&#x4E2A;&#x53EF;&#x9760; Agent &#x7684;&#x5B8C;&#x6574;&#x7ED3;&#x6784;</h3>
<ul>
<li>&#x72B6;&#x6001;&#xFF1A;&#x5F85;&#x5199;&#xFF0C;&#x7CFB;&#x5217;&#x5B8C;&#x7ED3;&#x7BC7;&#x3002;</li>
<li>&#x6682;&#x5B9A;&#x6807;&#x9898;&#xFF1A;<code>&#x4E00;&#x4E2A;&#x5C0F; Agent&#xFF0C;&#x662F;&#x600E;&#x6837;&#x4E00;&#x6B65;&#x6B65;&#x957F;&#x6210;&#x590D;&#x6742;&#x7CFB;&#x7EDF;&#x7684;&#xFF1F;</code></li>
<li>&#x5185;&#x5BB9;&#x5F62;&#x5F0F;&#xFF1A;&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x8F93;&#x5165;&#xFF0C;&#x4ECE; N01 &#x5230; N13 &#x9010;&#x5C42;&#x56DE;&#x653E;&#x3002;</li>
<li>&#x6700;&#x7EC8;&#x7ED3;&#x6784;&#xFF1A;</li>
</ul>
<pre><code class="language-text">&#x5165;&#x53E3;&#x4E0E;&#x56FA;&#x5B9A; Workflow
&#x251C;&#x2500; Prompt &#x7248;&#x672C;&#x4E0E;&#x914D;&#x7F6E;
&#x251C;&#x2500; &#x5C40;&#x90E8; Agent &#x63A2;&#x7D22;
&#x251C;&#x2500; LangChain &#x6A21;&#x578B;&#x4E0E;&#x5DE5;&#x5177;&#x5C01;&#x88C5;
&#x251C;&#x2500; LangGraph &#x72B6;&#x6001;&#x3001;&#x8DEF;&#x7531;&#x4E0E; checkpoint
&#x251C;&#x2500; Context &#x4E0E; Memory
&#x251C;&#x2500; Plan&#x3001;Skill &#x4E0E;&#x53EF;&#x9009;&#x5B50; Agent
&#x251C;&#x2500; &#x6C99;&#x7BB1;&#x3001;&#x6743;&#x9650;&#x4E0E;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;
&#x2514;&#x2500; Langfuse Trace&#x3001;Dataset &#x4E0E; Eval
</code></pre>
<ul>
<li>&#x5FC5;&#x987B;&#x56DE;&#x7B54;&#xFF1A;
<ul>
<li>&#x54EA;&#x4E9B;&#x80FD;&#x529B;&#x89E3;&#x51B3;&#x4E86;&#x771F;&#x5B9E;&#x5931;&#x8D25;&#xFF1F;</li>
<li>&#x54EA;&#x4E9B;&#x53EA;&#x662F;&#x89C4;&#x6A21;&#x6269;&#x5927;&#x540E;&#x624D;&#x9700;&#x8981;&#xFF1F;</li>
<li>&#x5982;&#x679C;&#x4ECA;&#x5929;&#x91CD;&#x65B0;&#x5B9E;&#x73B0;&#xFF0C;&#x6700;&#x5C0F;&#x53EF;&#x7528;&#x7248;&#x672C;&#x4F1A;&#x4FDD;&#x7559;&#x4EC0;&#x4E48;&#xFF1F;</li>
</ul>
</li>
<li>&#x6700;&#x7EC8;&#x5224;&#x65AD;&#xFF1A;&#x4E30;&#x5BCC; Agent &#x4E0D;&#x662F;&#x4E00;&#x6B21;&#x8BBE;&#x8BA1;&#x51FA;&#x6765;&#x7684;&#xFF0C;&#x800C;&#x662F;&#x4ECE;&#x5177;&#x4F53;&#x5931;&#x8D25;&#x4E2D;&#x9010;&#x5C42;&#x957F;&#x51FA;&#x6765;&#x7684;&#xFF1B;&#x6CA1;&#x6709;&#x5BF9;&#x5E94;&#x95EE;&#x9898;&#x7684;&#x590D;&#x6742;&#x5EA6;&#xFF0C;&#x5E94;&#x5F53;&#x6682;&#x7F13;&#x52A0;&#x5165;&#x3002;</li>
<li>&#x6700;&#x7EC8;&#x4EA7;&#x7269;&#xFF1A;&#x5B8C;&#x6574;&#x4EE3;&#x7801;&#x3001;&#x67B6;&#x6784;&#x56FE;&#x3001;&#x5931;&#x8D25;&#x6848;&#x4F8B;&#x96C6;&#x3001;&#x8BC4;&#x6D4B;&#x96C6;&#x4E0E;&#x7248;&#x672C;&#x6F14;&#x8FDB;&#x8BB0;&#x5F55;&#x3002;</li>
<li>&#x4EE3;&#x7801;&#x5FEB;&#x7167;&#xFF1A;<code>14_complete_agent.py</code></li>
</ul>
<h2 id="&#x65E7;&#x6587;&#x7AE0;&#x5982;&#x4F55;&#x6302;&#x56DE;&#x4E3B;&#x7EBF;"><a href="#&#x65E7;&#x6587;&#x7AE0;&#x5982;&#x4F55;&#x6302;&#x56DE;&#x4E3B;&#x7EBF;"></a>&#x65E7;&#x6587;&#x7AE0;&#x5982;&#x4F55;&#x6302;&#x56DE;&#x4E3B;&#x7EBF;</h2>
<table>
<thead>
<tr>
<th>&#x5DF2;&#x6709;&#x5185;&#x5BB9;</th>
<th>&#x5EFA;&#x8BAE;&#x4F4D;&#x7F6E;</th>
<th>&#x5904;&#x7406;&#x65B9;&#x5F0F;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x300A;&#x4ECE; Prompt &#x5230; Loop&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI &#x5DE5;&#x7A0B;&#x7684;&#x56DB;&#x6B21;&#x5347;&#x7EA7;&#x300B;</td>
<td>N03 &#x524D;&#x540E;&#x7684;&#x5168;&#x5C40;&#x5730;&#x56FE;</td>
<td>&#x4FDD;&#x7559;&#x4E3A;&#x6982;&#x89C8;&#xFF0C;&#x4E3B;&#x7CFB;&#x5217;&#x4E0D;&#x91CD;&#x590D;&#x5176;&#x5206;&#x5C42;&#x7ED3;&#x8BBA;</td>
</tr>
<tr>
<td>&#x300A;&#x4EC0;&#x4E48;&#x662F; ReAct&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2; AI Agent &#x539F;&#x7406;&#x300B;</td>
<td>N04 &#x6269;&#x5C55;&#x9605;&#x8BFB;</td>
<td>&#x89E3;&#x91CA; Agent &#x5185;&#x90E8;&#x7684; Thought / Action / Observation Loop</td>
</tr>
<tr>
<td>&#x300A;&#x4ECE; Loop &#x5230; Graph&#xFF1A;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x770B;&#x61C2;&#x591A; Agent &#x600E;&#x4E48;&#x534F;&#x4F5C;&#x300B;</td>
<td>N10</td>
<td>&#x7528;&#x6280;&#x672F;&#x7B80;&#x62A5;&#x52A9;&#x624B;&#x91CD;&#x5199;&#xFF0C;&#x6216;&#x4FDD;&#x7559;&#x4E3A;&#x65C1;&#x652F;&#x6848;&#x4F8B;</td>
</tr>
<tr>
<td>&#x300A;&#x6709;&#x6548;&#x7684; AI Agent &#x4E0A;&#x4E0B;&#x6587;&#x5DE5;&#x7A0B;&#x300B;</td>
<td>N07</td>
<td>&#x63D0;&#x70BC;&#x6210;&#x9762;&#x5411;&#x7EDF;&#x4E00;&#x6848;&#x4F8B;&#x7684;&#x6B63;&#x6587;&#xFF0C;&#x5176;&#x4F59;&#x6DF1;&#x5EA6;&#x5185;&#x5BB9;&#x505A;&#x6269;&#x5C55;&#x9605;&#x8BFB;</td>
</tr>
<tr>
<td>Memory &#x8BBA;&#x6587;&#x4E0E;&#x5B9E;&#x8DF5;&#x6587;&#x7AE0;</td>
<td>N08</td>
<td>&#x4F5C;&#x4E3A;&#x7406;&#x8BBA;&#x4E0E;&#x5B9E;&#x73B0;&#x53C2;&#x8003;&#xFF0C;&#x4E0D;&#x5728;&#x6B63;&#x6587;&#x7F57;&#x5217;&#x8BBA;&#x6587;</td>
</tr>
<tr>
<td>BubbleWrap &#x6C99;&#x7BB1;&#x6587;&#x7AE0;</td>
<td>N12</td>
<td>&#x4FDD;&#x7559;&#x4E3A;&#x201C;&#x4E16;&#x754C;&#x4E0E;&#x5730;&#x56FE;&#x201D;&#x601D;&#x60F3;&#x7BC7;&#xFF0C;&#x4E3B;&#x7EBF;&#x6587;&#x7AE0;&#x8BB2;&#x5177;&#x4F53;&#x5B9E;&#x73B0;</td>
</tr>
</tbody>
</table>
<h2 id="&#x4EE3;&#x7801;&#x4ED3;&#x5E93;&#x89C4;&#x5212;"><a href="#&#x4EE3;&#x7801;&#x4ED3;&#x5E93;&#x89C4;&#x5212;"></a>&#x4EE3;&#x7801;&#x4ED3;&#x5E93;&#x89C4;&#x5212;</h2>
<p>&#x6240;&#x6709; Python &#x793A;&#x4F8B;&#x7EDF;&#x4E00;&#x4F7F;&#x7528; <code>uv</code> &#x7BA1;&#x7406;&#x3002;</p>
<pre><code class="language-text">tech-brief-agent/
&#x251C;&#x2500;&#x2500; pyproject.toml
&#x251C;&#x2500;&#x2500; uv.lock
&#x251C;&#x2500;&#x2500; README.md
&#x251C;&#x2500;&#x2500; examples/
&#x2502;   &#x251C;&#x2500;&#x2500; 01_single_prompt.py
&#x2502;   &#x251C;&#x2500;&#x2500; 02_versioned_prompt.py
&#x2502;   &#x251C;&#x2500;&#x2500; 03_workflow_vs_agent.py
&#x2502;   &#x251C;&#x2500;&#x2500; 04_langchain_agent.py
&#x2502;   &#x251C;&#x2500;&#x2500; 05_minimal_langgraph.py
&#x2502;   &#x251C;&#x2500;&#x2500; 06_langfuse_trace.py
&#x2502;   &#x251C;&#x2500;&#x2500; 07_context_pipeline.py
&#x2502;   &#x251C;&#x2500;&#x2500; 08_memory.py
&#x2502;   &#x251C;&#x2500;&#x2500; 09_plan_and_skills.py
&#x2502;   &#x251C;&#x2500;&#x2500; 10_multi_agent.py
&#x2502;   &#x251C;&#x2500;&#x2500; 11_durable_execution.py
&#x2502;   &#x251C;&#x2500;&#x2500; 12_guardrails_and_hitl.py
&#x2502;   &#x251C;&#x2500;&#x2500; 13_evaluation_loop.py
&#x2502;   &#x2514;&#x2500;&#x2500; 14_complete_agent.py
&#x251C;&#x2500;&#x2500; prompts/
&#x2502;   &#x251C;&#x2500;&#x2500; brief_v1.md
&#x2502;   &#x2514;&#x2500;&#x2500; brief_v2.md
&#x251C;&#x2500;&#x2500; fixtures/
&#x2502;   &#x251C;&#x2500;&#x2500; consistent_sources/
&#x2502;   &#x251C;&#x2500;&#x2500; missing_evidence/
&#x2502;   &#x2514;&#x2500;&#x2500; conflicting_sources/
&#x251C;&#x2500;&#x2500; datasets/
&#x251C;&#x2500;&#x2500; tests/
&#x2514;&#x2500;&#x2500; app/
</code></pre>
<p>&#x5EFA;&#x8BAE;&#x6BCF;&#x4E2A;&#x8282;&#x70B9;&#x6253;&#x4E00;&#x4E2A; Git Tag&#xFF1A;</p>
<pre><code class="language-text">n01-single-prompt
n02-prompt-versioning
n03-workflow-agent
...
n14-complete-agent
</code></pre>
<p>&#x8FD9;&#x6837;&#x8BFB;&#x8005;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x6BD4;&#x8F83;&#x76F8;&#x90BB;&#x7248;&#x672C;&#xFF0C;&#x4E0D;&#x5FC5;&#x53EA;&#x770B;&#x6700;&#x7EC8;&#x590D;&#x6742;&#x4EE3;&#x7801;&#x3002;</p>
<h2 id="&#x6BCF;&#x7BC7;&#x6587;&#x7AE0;&#x7684;&#x56FA;&#x5B9A;&#x53D9;&#x4E8B;&#x6A21;&#x677F;"><a href="#&#x6BCF;&#x7BC7;&#x6587;&#x7AE0;&#x7684;&#x56FA;&#x5B9A;&#x53D9;&#x4E8B;&#x6A21;&#x677F;"></a>&#x6BCF;&#x7BC7;&#x6587;&#x7AE0;&#x7684;&#x56FA;&#x5B9A;&#x53D9;&#x4E8B;&#x6A21;&#x677F;</h2>
<ol>
<li>&#x5148;&#x5C55;&#x793A;&#x4E0A;&#x4E00;&#x7248;&#x5DF2;&#x7ECF;&#x80FD;&#x505A;&#x4EC0;&#x4E48;&#x3002;</li>
<li>&#x7528;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x8F93;&#x5165;&#x8BA9;&#x5B83;&#x5931;&#x8D25;&#x3002;</li>
<li>&#x8BA9;&#x8BFB;&#x8005;&#x5148;&#x731C;&#x201C;&#x591A;&#x5199;&#x4E00;&#x53E5; Prompt &#x80FD;&#x4E0D;&#x80FD;&#x89E3;&#x51B3;&#x201D;&#x3002;</li>
<li>&#x8BF4;&#x660E;&#x65E7;&#x7ED3;&#x6784;&#x4E3A;&#x4EC0;&#x4E48;&#x5DF2;&#x7ECF;&#x4E0D;&#x591F;&#x3002;</li>
<li>&#x53EA;&#x52A0;&#x5165;&#x4E00;&#x4E2A;&#x65B0;&#x673A;&#x5236;&#x3002;</li>
<li>&#x7528;&#x540C;&#x4E00;&#x4E2A;&#x5931;&#x8D25;&#x6848;&#x4F8B;&#x91CD;&#x65B0;&#x8FD0;&#x884C;&#x3002;</li>
<li>&#x8BB2;&#x6E05;&#x6536;&#x76CA;&#x4EE5;&#x53CA;&#x65B0;&#x589E;&#x4EE3;&#x4EF7;&#x3002;</li>
<li>&#x7528;&#x4ECD;&#x672A;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#x9884;&#x544A;&#x4E0B;&#x4E00;&#x8282;&#x70B9;&#x3002;</li>
</ol>
<p>&#x907F;&#x514D;&#xFF1A;</p>
<ul>
<li>&#x5F00;&#x5934;&#x5148;&#x5B9A;&#x4E49;&#x6846;&#x67B6;&#x3002;</li>
<li>&#x4E00;&#x7BC7;&#x540C;&#x65F6;&#x4ECB;&#x7ECD;&#x4E94;&#x4E2A;&#x65B0;&#x6982;&#x5FF5;&#x3002;</li>
<li>&#x4E3A;&#x4E86;&#x5C55;&#x793A;&#x6280;&#x672F;&#xFF0C;&#x5236;&#x9020;&#x73B0;&#x5B9E;&#x4E2D;&#x4E0D;&#x4F1A;&#x51FA;&#x73B0;&#x7684;&#x9700;&#x6C42;&#x3002;</li>
<li>&#x628A;&#x6846;&#x67B6;&#x80FD;&#x529B;&#x5F53;&#x6210;&#x4E1A;&#x52A1;&#x6536;&#x76CA;&#x3002;</li>
<li>&#x53EA;&#x5C55;&#x793A;&#x6210;&#x529F;&#x8DEF;&#x5F84;&#xFF0C;&#x4E0D;&#x4FDD;&#x7559;&#x5931;&#x8D25;&#x8F93;&#x5165;&#x3002;</li>
<li>&#x6BCF;&#x7BC7;&#x66F4;&#x6362;&#x4F8B;&#x5B50;&#xFF0C;&#x5BFC;&#x81F4;&#x8BFB;&#x8005;&#x65E0;&#x6CD5;&#x6BD4;&#x8F83;&#x589E;&#x91CF;&#x3002;</li>
</ul>
<h2 id="&#x7CFB;&#x5217;&#x7684;&#x6838;&#x5FC3;&#x6743;&#x8861;&#x7EBF;"><a href="#&#x7CFB;&#x5217;&#x7684;&#x6838;&#x5FC3;&#x6743;&#x8861;&#x7EBF;"></a>&#x7CFB;&#x5217;&#x7684;&#x6838;&#x5FC3;&#x6743;&#x8861;&#x7EBF;</h2>
<p>&#x6574;&#x4E2A;&#x7CFB;&#x5217;&#x4E0D;&#x5E94;&#x53EA;&#x5C55;&#x793A;&#x201C;&#x80FD;&#x529B;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#x201D;&#xFF0C;&#x8FD8;&#x8981;&#x6301;&#x7EED;&#x8FFD;&#x8E2A;&#x8FD9;&#x4E9B;&#x4EE3;&#x4EF7;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x65B0;&#x80FD;&#x529B;</th>
<th>&#x83B7;&#x5F97;&#x4EC0;&#x4E48;</th>
<th>&#x540C;&#x65F6;&#x4ED8;&#x51FA;&#x4EC0;&#x4E48;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Prompt &#x7248;&#x672C;</td>
<td>&#x53EF;&#x6BD4;&#x8F83;&#x3001;&#x53EF;&#x56DE;&#x6EDA;</td>
<td>&#x7BA1;&#x7406;&#x4E0E;&#x8BC4;&#x6D4B;&#x6210;&#x672C;</td>
</tr>
<tr>
<td>Workflow</td>
<td>&#x7A33;&#x5B9A;&#x3001;&#x53EF;&#x9884;&#x6D4B;</td>
<td>&#x5BF9;&#x672A;&#x77E5;&#x60C5;&#x51B5;&#x4E0D;&#x7075;&#x6D3B;</td>
</tr>
<tr>
<td>Agent</td>
<td>&#x52A8;&#x6001;&#x63A2;&#x7D22;</td>
<td>&#x6210;&#x672C;&#x3001;&#x5EF6;&#x8FDF;&#x4E0E;&#x4E0D;&#x786E;&#x5B9A;&#x6027;</td>
</tr>
<tr>
<td>LangChain</td>
<td>&#x5C11;&#x5199;&#x80F6;&#x6C34;&#x4EE3;&#x7801;</td>
<td>&#x6846;&#x67B6;&#x62BD;&#x8C61;&#x4E0E;&#x5347;&#x7EA7;&#x6210;&#x672C;</td>
</tr>
<tr>
<td>LangGraph</td>
<td>&#x663E;&#x5F0F;&#x72B6;&#x6001;&#x4E0E;&#x6062;&#x590D;</td>
<td>&#x8282;&#x70B9;&#x548C;&#x72B6;&#x6001;&#x8BBE;&#x8BA1;&#x590D;&#x6742;&#x5EA6;</td>
</tr>
<tr>
<td>Langfuse</td>
<td>&#x53EF;&#x89C2;&#x6D4B;&#x3001;&#x53EF;&#x6BD4;&#x8F83;</td>
<td>&#x6570;&#x636E;&#x91CF;&#x3001;&#x9690;&#x79C1;&#x4E0E;&#x5E73;&#x53F0;&#x6210;&#x672C;</td>
</tr>
<tr>
<td>Memory</td>
<td>&#x8DE8;&#x4EFB;&#x52A1;&#x4E2A;&#x6027;&#x5316;</td>
<td>&#x6C61;&#x67D3;&#x3001;&#x9690;&#x79C1;&#x4E0E;&#x8FC7;&#x671F;&#x95EE;&#x9898;</td>
</tr>
<tr>
<td>&#x591A; Agent</td>
<td>&#x5E76;&#x884C;&#x4E0E;&#x4E0A;&#x4E0B;&#x6587;&#x9694;&#x79BB;</td>
<td>&#x534F;&#x8C03;&#x3001;&#x91CD;&#x590D;&#x52B3;&#x52A8;&#x4E0E;&#x51B2;&#x7A81;</td>
</tr>
<tr>
<td>Checkpoint</td>
<td>&#x4E2D;&#x65AD;&#x6062;&#x590D;</td>
<td>&#x5B58;&#x50A8;&#x4E0E;&#x72B6;&#x6001;&#x517C;&#x5BB9;&#x6210;&#x672C;</td>
</tr>
<tr>
<td>&#x6C99;&#x7BB1;&#x4E0E;&#x5BA1;&#x6279;</td>
<td>&#x964D;&#x4F4E;&#x9519;&#x8BEF;&#x534A;&#x5F84;</td>
<td>&#x81EA;&#x52A8;&#x5316;&#x7A0B;&#x5EA6;&#x4E0B;&#x964D;</td>
</tr>
<tr>
<td>Eval</td>
<td>&#x6709;&#x4F9D;&#x636E;&#x5730;&#x8FED;&#x4EE3;</td>
<td>&#x8BC4;&#x6D4B;&#x96C6;&#x7EF4;&#x62A4;&#x4E0E;&#x6307;&#x6807;&#x504F;&#x5DEE;</td>
</tr>
</tbody>
</table>
<h2 id="&#x53D1;&#x5E03;&#x8282;&#x594F;&#x5EFA;&#x8BAE;"><a href="#&#x53D1;&#x5E03;&#x8282;&#x594F;&#x5EFA;&#x8BAE;"></a>&#x53D1;&#x5E03;&#x8282;&#x594F;&#x5EFA;&#x8BAE;</h2>
<p>&#x4E0D;&#x5FC5;&#x4E00;&#x5F00;&#x59CB;&#x627F;&#x8BFA; 15 &#x7BC7;&#x3002;&#x5BF9;&#x5916;&#x53EA;&#x5BA3;&#x5E03;&#x4E09;&#x7BC7;&#x4EE5;&#x5185;&#xFF0C;&#x5185;&#x90E8;&#x6309;&#x5B8C;&#x6574;&#x8DEF;&#x7EBF;&#x63A8;&#x8FDB;&#x3002;</p>
<p>&#x6BCF;&#x4E2A;&#x9636;&#x6BB5;&#x7ED3;&#x675F;&#x540E;&#xFF0C;&#x6839;&#x636E;&#x8BFB;&#x8005;&#x53CD;&#x9988;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x5C55;&#x5F00;&#x4E0B;&#x4E00;&#x5B63;&#xFF1A;</p>
<pre><code class="language-text">&#x7B2C;&#x4E00;&#x5B63;&#xFF1A;&#x8BFB;&#x8005;&#x662F;&#x5426;&#x5173;&#x5FC3; Prompt &#x7684;&#x53EF;&#x9760;&#x6027;&#xFF1F;
&#x7B2C;&#x4E8C;&#x5B63;&#xFF1A;&#x8BFB;&#x8005;&#x662F;&#x5426;&#x613F;&#x610F;&#x8DDF;&#x7740;&#x4EE3;&#x7801;&#x7EE7;&#x7EED;&#x642D;&#x7CFB;&#x7EDF;&#xFF1F;
&#x7B2C;&#x4E09;&#x5B63;&#xFF1A;&#x8BFB;&#x8005;&#x662F;&#x5426;&#x5F00;&#x59CB;&#x5173;&#x5FC3;&#x751F;&#x4EA7;&#x53EF;&#x9760;&#x6027;&#x4E0E;&#x6743;&#x8861;&#xFF1F;
</code></pre>
<p>&#x4F18;&#x5148;&#x53D1;&#x5E03;&#x987A;&#x5E8F;&#xFF1A;</p>
<ol>
<li>N00 &#x4FC4;&#x7F57;&#x65AF;&#x65B9;&#x5757;&#x3002;</li>
<li>N01 &#x6A21;&#x578B;&#x5347;&#x7EA7;&#x4E0E; Prompt &#x5931;&#x6548;&#x3002;</li>
<li>N02 Prompt &#x7248;&#x672C;&#x4E0E;&#x56DE;&#x5F52;&#x3002;</li>
<li>N03 Workflow &#x4E0E; Agent&#x3002;</li>
<li>N04 &#x6700;&#x5C0F; LangChain&#x3002;</li>
<li>N05 &#x6700;&#x5C0F; LangGraph&#x3002;</li>
<li>N06 &#x6700;&#x5C0F; Langfuse&#x3002;</li>
</ol>
<p>&#x5B8C;&#x6210; N06 &#x540E;&#x518D;&#x8BC4;&#x4F30;&#x7B2C;&#x4E09;&#x5B63;&#xFF0C;&#x4E0D;&#x8981;&#x4E3A;&#x4E86;&#x8DEF;&#x7EBF;&#x56FE;&#x5B8C;&#x6574;&#x800C;&#x5F3A;&#x884C;&#x5199;&#x5B8C;&#x3002;</p>
<h2 id="&#x5B98;&#x65B9;&#x53C2;&#x8003;"><a href="#&#x5B98;&#x65B9;&#x53C2;&#x8003;"></a>&#x5B98;&#x65B9;&#x53C2;&#x8003;</h2>
<ol>
<li>
<p>LangChain Agents&#xFF1A;https://docs.langchain.com/oss/python/langchain/agents</p>
</li>
<li>
<p>LangGraph Overview&#xFF1A;https://docs.langchain.com/oss/python/langgraph/overview</p>
</li>
<li>
<p>LangGraph Persistence&#xFF1A;https://docs.langchain.com/oss/python/langgraph/persistence</p>
</li>
<li>
<p>Langfuse Documentation&#xFF1A;https://langfuse.com/docs</p>
</li>
<li>
<p>Langfuse Prompt Management&#xFF1A;https://langfuse.com/docs/prompt-management</p>
</li>
<li>
<p>Langfuse Evaluation&#xFF1A;https://langfuse.com/docs/evaluation/overview</p>
</li>
</ol>
`,E=[{level:1,title:"从一句 Prompt 到可靠 Agent：系列节点路线图",children:[{level:2,title:"系列定位",children:[]},{level:2,title:"贯穿全系列的例子",children:[]},{level:2,title:"总体节点图",children:[]},{level:2,title:"第一季：Prompt 不是程序",children:[{level:3,title:"N00｜序章：经验为什么能够积累",children:[]},{level:3,title:"N01｜同一句 Prompt，为什么换个模型就不好用了",children:[]},{level:3,title:"N02｜Prompt 改到第八版，为什么反而不知道哪版最好",children:[]}]},{level:2,title:"第二季：下一步由谁决定",children:[{level:3,title:"N03｜一个任务，什么时候只需要 Workflow，什么时候才值得交给 Agent",children:[]},{level:3,title:"N04｜一个例子读懂 LangChain：它到底封装了什么",children:[]},{level:3,title:"N05｜流程第一次需要走回头路：最小 LangGraph",children:[]},{level:3,title:"N06｜最终文章写错了，到底是哪一步坏了：最小 Langfuse",children:[]}]},{level:2,title:"第三季：Agent 怎样从能跑变成敢用",children:[{level:3,title:"N07｜Context：资料越多，为什么回答反而越差",children:[]},{level:3,title:"N08｜Memory：Agent 应该记住什么，又该忘掉什么",children:[]},{level:3,title:"N09｜Plan 与 Skill：任务变长以后，Agent 为什么越来越容易跑偏",children:[]},{level:3,title:"N10｜多 Agent：什么时候分工真的比一个 Agent 更好",children:[]},{level:3,title:"N11｜Checkpoint 与 Retry：做到一半断了，为什么不能从头重来",children:[]},{level:3,title:"N12｜沙箱、权限与人工审批：能做不等于可以直接做",children:[]},{level:3,title:"N13｜Dataset 与 Eval：Demo 成功，为什么上线后越来越差",children:[]},{level:3,title:"N14｜终章：一个可靠 Agent 的完整结构",children:[]}]},{level:2,title:"旧文章如何挂回主线",children:[]},{level:2,title:"代码仓库规划",children:[]},{level:2,title:"每篇文章的固定叙事模板",children:[]},{level:2,title:"系列的核心权衡线",children:[]},{level:2,title:"发布节奏建议",children:[]},{level:2,title:"官方参考",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
