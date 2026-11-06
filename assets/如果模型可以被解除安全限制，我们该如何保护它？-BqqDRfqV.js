const x={},F=`<!-- 写作锚点
读者收获：按攻击者权限和部署方式区分防御目标，理解抗修改训练、外部防护与权重完整性保护的作用和边界。
核心判断：获得完整权重的人可能修改模型行为，模型内部安全对齐不能独自承担部署安全；各类防护的有效性仍需实验与权限边界验证。
如何推进：沿第二份讨论的第一部分，保留五种防御思路、部署场景对照和来稿中的研究数据，最后转向理解内部机制。
-->
<h1 id="&#x5982;&#x679C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x88AB;&#x89E3;&#x9664;&#x5B89;&#x5168;&#x9650;&#x5236;&#xFF0C;&#x6211;&#x4EEC;&#x8BE5;&#x5982;&#x4F55;&#x4FDD;&#x62A4;&#x5B83;&#xFF1F;"><a href="#&#x5982;&#x679C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x88AB;&#x89E3;&#x9664;&#x5B89;&#x5168;&#x9650;&#x5236;&#xFF0C;&#x6211;&#x4EEC;&#x8BE5;&#x5982;&#x4F55;&#x4FDD;&#x62A4;&#x5B83;&#xFF1F;"></a>&#x5982;&#x679C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x88AB;&#x89E3;&#x9664;&#x5B89;&#x5168;&#x9650;&#x5236;&#xFF0C;&#x6211;&#x4EEC;&#x8BE5;&#x5982;&#x4F55;&#x4FDD;&#x62A4;&#x5B83;&#xFF1F;</h1>
<p><a href="./%E5%A6%82%E6%9E%9C%20AI%20%E7%9A%84%E8%A1%8C%E4%B8%BA%E5%8F%AF%E4%BB%A5%E8%A2%AB%E7%BC%96%E8%BE%91%EF%BC%8C%E6%88%91%E4%BB%AC%E8%BF%98%E8%83%BD%E6%94%B9%E5%8F%98%E5%AE%83%E4%BB%80%E4%B9%88%EF%BC%9F.md">&#x524D;&#x9762;</a>&#x8BA8;&#x8BBA;&#x4E86;&#x6A21;&#x578B;&#x884C;&#x4E3A;&#x7F16;&#x8F91;&#x7684;&#x53EF;&#x80FD;&#x6027;&#x3002;&#x5B89;&#x5168;&#x95EE;&#x9898;&#x4E5F;&#x968F;&#x4E4B;&#x51FA;&#x73B0;&#xFF1A;</p>
<p>&#x5982;&#x679C;&#x653B;&#x51FB;&#x8005;&#x62FF;&#x5230;&#x4E86;&#x5B8C;&#x6574;&#x6A21;&#x578B;&#x6743;&#x91CD;&#xFF0C;&#x5C31;&#x53EF;&#x80FD;&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x7A81;&#x7834;&#x6A21;&#x578B;&#x539F;&#x672C;&#x7684; API &#x5B89;&#x5168;&#x9650;&#x5236;&#x3002;</p>
<p>&#x8981;&#x8BA8;&#x8BBA;&#x9632;&#x5FA1;&#xFF0C;&#x9996;&#x5148;&#x5F97;&#x95EE;&#xFF1A;</p>
<p><strong>&#x6211;&#x4EEC;&#x8981;&#x9632;&#x5FA1;&#x7684;&#x662F;&#x8C01;&#xFF1F;&#x653B;&#x51FB;&#x8005;&#x62E5;&#x6709;&#x591A;&#x5927;&#x7684;&#x6743;&#x9650;&#xFF1F;</strong></p>
<p>&#x8FD9;&#x4F1A;&#x76F4;&#x63A5;&#x51B3;&#x5B9A;&#x9632;&#x5FA1;&#x65B9;&#x6848;&#x3002;</p>
<h2 id="&#x4E00;&#x3001;&#x5148;&#x7406;&#x89E3;&#x5B83;&#x5E26;&#x6765;&#x7684;&#x5B89;&#x5168;&#x98CE;&#x9669;"><a href="#&#x4E00;&#x3001;&#x5148;&#x7406;&#x89E3;&#x5B83;&#x5E26;&#x6765;&#x7684;&#x5B89;&#x5168;&#x98CE;&#x9669;"></a>&#x4E00;&#x3001;&#x5148;&#x7406;&#x89E3;&#x5B83;&#x5E26;&#x6765;&#x7684;&#x5B89;&#x5168;&#x98CE;&#x9669;</h2>
<p>&#x4F20;&#x7EDF;&#x5927;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x673A;&#x5236;&#x901A;&#x5E38;&#x5EFA;&#x7ACB;&#x5728;&#x4E00;&#x4E2A;&#x5047;&#x8BBE;&#x4E0A;&#xFF1A;</p>
<p>&#x6A21;&#x578B;&#x7ECF;&#x8FC7;&#x5B89;&#x5168;&#x8BAD;&#x7EC3;&#x4E4B;&#x540E;&#xFF0C;&#x7528;&#x6237;&#x5373;&#x4F7F;&#x63D0;&#x51FA;&#x5371;&#x9669;&#x95EE;&#x9898;&#xFF0C;&#x6A21;&#x578B;&#x4E5F;&#x5E94;&#x8BE5;&#x62D2;&#x7EDD;&#x3002;</p>
<p>&#x4F46; Abliteration &#x6539;&#x53D8;&#x4E86;&#x8FD9;&#x4E2A;&#x5047;&#x8BBE;&#x3002;</p>
<pre><code class="language-text">&#x4F20;&#x7EDF;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x67B6;&#x6784;

&#x7528;&#x6237;&#x8BF7;&#x6C42;
    &#x2193;
&#x5B89;&#x5168;&#x5BF9;&#x9F50;&#x6A21;&#x578B;
&#x62D2;&#x7EDD;&#x673A;&#x5236;&#x5DF2;&#x7F16;&#x7801;&#x5728;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x4E2D;
    &#x2193;
&#x5B89;&#x5168;&#x56DE;&#x7B54; / &#x62D2;&#x7EDD;
</code></pre>
<pre><code class="language-text">Abliteration &#x653B;&#x51FB;

&#x653B;&#x51FB;&#x8005;&#x83B7;&#x53D6;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x6743;&#x91CD;
    &#x2193;
&#x76F4;&#x63A5;&#x4FEE;&#x6539;&#x6A21;&#x578B;&#x53C2;&#x6570;
    &#x2193;
&#x65E0;&#x9700;&#x901A;&#x8FC7;&#x7528;&#x6237;&#x8F93;&#x5165;&#x7ED5;&#x8FC7;&#x5B89;&#x5168;&#x7B56;&#x7565;
    &#x2193;
&#x5B89;&#x5168;&#x62D2;&#x7EDD;&#x80FD;&#x529B;&#x53EF;&#x80FD;&#x663E;&#x8457;&#x4E0B;&#x964D;
</code></pre>
<p>&#x539F;&#x6765;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x76F8;&#x5F53;&#x7A0B;&#x5EA6;&#x4E0A;&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x7684;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x6743;&#x91CD;&#x672C;&#x8EAB;&#x5374;&#x662F;&#x53EF;&#x4EE5;&#x88AB;&#x4FEE;&#x6539;&#x7684;&#x3002;</p>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x4E0D;&#x80FD;&#x628A;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x5B89;&#x5168;&#x5BF9;&#x9F50;&#x5F53;&#x6210;&#x552F;&#x4E00;&#x9632;&#x7EBF;&#x3002;</p>
<h2 id="&#x4E8C;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E00;&#xFF1A;&#x8BA9;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E0D;&#x518D;&#x4F9D;&#x8D56;&#x5355;&#x4E00;&#x65B9;&#x5411;"><a href="#&#x4E8C;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E00;&#xFF1A;&#x8BA9;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E0D;&#x518D;&#x4F9D;&#x8D56;&#x5355;&#x4E00;&#x65B9;&#x5411;"></a>&#x4E8C;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E00;&#xFF1A;&#x8BA9;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E0D;&#x518D;&#x4F9D;&#x8D56;&#x5355;&#x4E00;&#x65B9;&#x5411;</h2>
<p>&#x8FD9;&#x662F;&#x6700;&#x76F4;&#x63A5;&#x7684;&#x7814;&#x7A76;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x65E9;&#x671F;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x7814;&#x7A76;&#x53D1;&#x73B0;&#xFF0C;&#x67D0;&#x4E9B;&#x6A21;&#x578B;&#x7684;&#x62D2;&#x7EDD;&#x884C;&#x4E3A;&#x53EF;&#x4EE5;&#x88AB;&#x4E00;&#x4E2A;&#x4E3B;&#x8981;&#x65B9;&#x5411;&#x4ECB;&#x5BFC;&#x3002;</p>
<p>&#x90A3;&#x4E48;&#x9632;&#x5FA1;&#x8005;&#x53EF;&#x4EE5;&#x53CD;&#x8FC7;&#x6765;&#x505A;&#xFF1A;</p>
<p>&#x4E0D;&#x8981;&#x8BA9;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x8FC7;&#x5EA6;&#x4F9D;&#x8D56;&#x67D0;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x8BA9;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x5206;&#x5E03;&#x5728;&#xFF1A;</p>
<ul>
<li>&#x591A;&#x4E2A; Transformer &#x5C42;&#x3002;</li>
<li>&#x591A;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#x3002;</li>
<li>&#x4E0D;&#x540C; Token &#x4F4D;&#x7F6E;&#x3002;</li>
<li>&#x4E0D;&#x540C;&#x7684;&#x5B89;&#x5168;&#x5224;&#x65AD;&#x8DEF;&#x5F84;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x6837;&#xFF0C;&#x5373;&#x4F7F;&#x653B;&#x51FB;&#x8005;&#x79FB;&#x9664;&#x4E86;&#x4E00;&#x4E2A;&#x65B9;&#x5411;&#xFF0C;&#x5176;&#x4ED6;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x53D1;&#x6325;&#x4F5C;&#x7528;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x628A;&#x5B83;&#x7406;&#x89E3;&#x4E3A;&#xFF1A;</p>
<pre><code class="language-text">&#x539F;&#x6765;&#xFF1A;
&#x5B89;&#x5168;&#x884C;&#x4E3A; &#x2248; f(r1)

&#x6539;&#x8FDB;&#x540E;&#xFF1A;
&#x5B89;&#x5168;&#x884C;&#x4E3A; &#x2248; f(r1, r2, &#x2026;, rn)
</code></pre>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x7B80;&#x5355;&#x589E;&#x52A0;&#x51E0;&#x4E2A;&#x5411;&#x91CF;&#x5C31;&#x80FD;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#x3002;&#x4E0D;&#x540C;&#x65B9;&#x5411;&#x4E4B;&#x95F4;&#x662F;&#x5426;&#x72EC;&#x7ACB;&#x3001;&#x662F;&#x5426;&#x5171;&#x4EAB;&#x4FE1;&#x606F;&#xFF0C;&#x4EE5;&#x53CA;&#x4FEE;&#x6539;&#x540E;&#x80FD;&#x5426;&#x4FDD;&#x6301;&#x6B63;&#x5E38;&#x80FD;&#x529B;&#xFF0C;&#x90FD;&#x9700;&#x8981;&#x5B9E;&#x9A8C;&#x9A8C;&#x8BC1;&#x3002;</p>
<h2 id="&#x4E09;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E8C;&#xFF1A;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x62B5;&#x6297; Abliteration"><a href="#&#x4E09;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E8C;&#xFF1A;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x62B5;&#x6297; Abliteration"></a>&#x4E09;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E8C;&#xFF1A;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x62B5;&#x6297; Abliteration</h2>
<p>&#x65E2;&#x7136; Abliteration &#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5BF9;&#x6BD4;&#x6B63;&#x5E38;&#x8BF7;&#x6C42;&#x548C;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x7684;&#x5185;&#x90E8;&#x6FC0;&#x6D3B;&#xFF0C;&#x4F30;&#x8BA1;&#x51FA;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#xFF0C;&#x90A3;&#x4E48;&#x8BAD;&#x7EC3;&#x65F6;&#x5C31;&#x53EF;&#x4EE5;&#x4E3B;&#x52A8;&#x8003;&#x8651;&#x8FD9;&#x79CD;&#x653B;&#x51FB;&#x3002;</p>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li>&#x5728;&#x8BAD;&#x7EC3;&#x4E2D;&#x6A21;&#x62DF;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x88AB;&#x6D88;&#x9664;&#x7684;&#x60C5;&#x51B5;&#x3002;</li>
<li>&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x906D;&#x53D7;&#x5185;&#x90E8;&#x8868;&#x793A;&#x5E72;&#x9884;&#x540E;&#x4ECD;&#x7136;&#x80FD;&#x591F;&#x8BC6;&#x522B;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x3002;</li>
<li>&#x8BA9;&#x5B89;&#x5168;&#x5224;&#x65AD;&#x4E0D;&#x53EA;&#x4F9D;&#x8D56;&#x67D0;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x65B9;&#x5411;&#x3002;</li>
<li>&#x5728;&#x8BAD;&#x7EC3;&#x548C;&#x8BC4;&#x4F30;&#x4E2D;&#x52A0;&#x5165;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x88AB;&#x4FEE;&#x6539;&#x540E;&#x7684;&#x5B89;&#x5168;&#x6D4B;&#x8BD5;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x79CD;&#x601D;&#x8DEF;&#x53EF;&#x4EE5;&#x79F0;&#x4E3A; Abliteration-resistant Training&#x3002;</p>
<p>2026 &#x5E74;&#x7684;&#x4E00;&#x9879;&#x7814;&#x7A76;&#x300A;Open-Weight LLM Fine-Tuning Defenses are Susceptible to Simple Attacks&#x300B;&#xFF0C;&#x63D0;&#x51FA;&#x4E86; Abliteration-Resistant Tuning&#xFF08;ART&#xFF09;&#x3002;</p>
<p>&#x5B83;&#x628A;&#x62B5;&#x6297; Abliteration &#x7EB3;&#x5165;&#x5B89;&#x5168;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#xFF0C;&#x5B9E;&#x9A8C;&#x4E2D;&#x5BF9; Abliteration&#x3001;Prefilling &#x7B49;&#x653B;&#x51FB;&#x7684;&#x6210;&#x529F;&#x7387;&#x964D;&#x4F4E;&#x4E86;&#x7EA6; 10%&#xFF5E;20%&#x3002;</p>
<p>&#x8FD9;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x653B;&#x51FB;&#x88AB;&#x5F7B;&#x5E95;&#x89E3;&#x51B3;&#x4E86;&#x3002;&#x5373;&#x4F7F;&#x4E13;&#x95E8;&#x8BAD;&#x7EC3;&#x4E86;&#x9632;&#x5FA1;&#x673A;&#x5236;&#xFF0C;&#x4ECD;&#x7136;&#x5B58;&#x5728;&#x6B8B;&#x4F59;&#x98CE;&#x9669;&#x3002;</p>
<h2 id="&#x56DB;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E09;&#xFF1A;&#x4F7F;&#x7528;&#x5916;&#x90E8;&#x72EC;&#x7ACB;&#x5B89;&#x5168;&#x673A;&#x5236;"><a href="#&#x56DB;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E09;&#xFF1A;&#x4F7F;&#x7528;&#x5916;&#x90E8;&#x72EC;&#x7ACB;&#x5B89;&#x5168;&#x673A;&#x5236;"></a>&#x56DB;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E09;&#xFF1A;&#x4F7F;&#x7528;&#x5916;&#x90E8;&#x72EC;&#x7ACB;&#x5B89;&#x5168;&#x673A;&#x5236;</h2>
<p>&#x8FD9;&#x662F;&#x6211;&#x8BA4;&#x4E3A;&#x5B9E;&#x9645;&#x4EA7;&#x54C1;&#x90E8;&#x7F72;&#x4E2D;&#x6700;&#x91CD;&#x8981;&#x7684;&#x4E00;&#x5C42;&#x3002;</p>
<p>&#x4E0D;&#x8981;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x65E2;&#x8D1F;&#x8D23;&#x751F;&#x6210;&#x7B54;&#x6848;&#xFF0C;&#x53C8;&#x72EC;&#x81EA;&#x8D1F;&#x8D23;&#x5224;&#x65AD;&#x7B54;&#x6848;&#x662F;&#x5426;&#x5B89;&#x5168;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x5EFA;&#x7ACB;&#x72EC;&#x7ACB;&#x4E8E;&#x4E3B;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x7684;&#x5B89;&#x5168;&#x7CFB;&#x7EDF;&#x3002;</p>
<h3 id="Defense in Depth&#xFF1A;&#x7EB5;&#x6DF1;&#x9632;&#x5FA1;"><a href="#Defense in Depth&#xFF1A;&#x7EB5;&#x6DF1;&#x9632;&#x5FA1;"></a>Defense in Depth&#xFF1A;&#x7EB5;&#x6DF1;&#x9632;&#x5FA1;</h3>
<p><strong>&#x7B2C;&#x4E00;&#x5C42;&#xFF1A;&#x8F93;&#x5165;&#x5B89;&#x5168;&#x68C0;&#x6D4B;</strong></p>
<p>&#x68C0;&#x6D4B;&#x6076;&#x610F;&#x8BF7;&#x6C42;&#x3001;&#x5371;&#x9669;&#x610F;&#x56FE;&#x3001;Prompt Injection &#x7B49;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E8C;&#x5C42;&#xFF1A;&#x4E3B;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x5BF9;&#x9F50;</strong></p>
<p>&#x4F7F;&#x7528; SFT&#x3001;RLHF&#x3001;DPO &#x7B49;&#x8BAD;&#x7EC3;&#x65B9;&#x5F0F;&#x5EFA;&#x7ACB;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x5B89;&#x5168;&#x884C;&#x4E3A;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E09;&#x5C42;&#xFF1A;&#x72EC;&#x7ACB;&#x8F93;&#x51FA;&#x5BA1;&#x6838;</strong></p>
<p>&#x4F7F;&#x7528;&#x72EC;&#x7ACB;&#x7684;&#x5B89;&#x5168;&#x5206;&#x7C7B;&#x5668;&#x6216;&#x5BA1;&#x6838;&#x6A21;&#x578B;&#x68C0;&#x67E5;&#x751F;&#x6210;&#x7ED3;&#x679C;&#x3002;</p>
<p><strong>&#x7B2C;&#x56DB;&#x5C42;&#xFF1A;&#x5DE5;&#x5177;&#x548C;&#x6743;&#x9650;&#x63A7;&#x5236;</strong></p>
<p>&#x9650;&#x5236;&#x6A21;&#x578B;&#x80FD;&#x591F;&#x8C03;&#x7528;&#x7684; API&#x3001;&#x6587;&#x4EF6;&#x3001;&#x6570;&#x636E;&#x5E93;&#x3001;&#x7EC8;&#x7AEF;&#x548C;&#x5916;&#x90E8;&#x7CFB;&#x7EDF;&#x3002;</p>
<p><strong>&#x7B2C;&#x4E94;&#x5C42;&#xFF1A;&#x5BA1;&#x8BA1;&#x548C;&#x76D1;&#x63A7;</strong></p>
<p>&#x68C0;&#x6D4B;&#x5F02;&#x5E38;&#x884C;&#x4E3A;&#x3001;&#x8BB0;&#x5F55;&#x8C03;&#x7528;&#x3001;&#x652F;&#x6301;&#x8FFD;&#x8E2A;&#x548C;&#x5E94;&#x6025;&#x64A4;&#x9500;&#x3002;</p>
<p>&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;&#xFF1A;</p>
<p>&#x5047;&#x8BBE;&#x4F01;&#x4E1A;&#x90E8;&#x7F72;&#x4E86;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x7F51;&#x7EDC;&#x5B89;&#x5168;&#x5206;&#x6790;&#x7684;&#x5F00;&#x6E90;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x5373;&#x4F7F;&#x6709;&#x4EBA;&#x5BF9;&#x6A21;&#x578B;&#x8FDB;&#x884C;&#x4E86; Abliteration&#xFF1A;</p>
<ul>
<li>&#x8F93;&#x5165;&#x5BA1;&#x6838;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x68C0;&#x67E5;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x3002;</li>
<li>&#x8F93;&#x51FA;&#x5BA1;&#x6838;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x8BC6;&#x522B;&#x5371;&#x9669;&#x64CD;&#x4F5C;&#x6307;&#x5BFC;&#x3002;</li>
<li>&#x6743;&#x9650;&#x7CFB;&#x7EDF;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x963B;&#x6B62;&#x6A21;&#x578B;&#x8BBF;&#x95EE;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x3002;</li>
<li>&#x6C99;&#x7BB1;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x9650;&#x5236;&#x6A21;&#x578B;&#x6267;&#x884C;&#x547D;&#x4EE4;&#x3002;</li>
<li>&#x5BA1;&#x8BA1;&#x7CFB;&#x7EDF;&#x4ECD;&#x7136;&#x53EF;&#x4EE5;&#x8BB0;&#x5F55;&#x5F02;&#x5E38;&#x884C;&#x4E3A;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4E0D;&#x9700;&#x8981;&#x4F9D;&#x8D56;&#x4E3B;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x3002;</p>
<p>&#x5BA1;&#x6838;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x4E5F;&#x53EF;&#x80FD;&#x88AB;&#x653B;&#x51FB;&#xFF0C;&#x6240;&#x4EE5;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x72EC;&#x7ACB;&#x7684;&#x6A21;&#x578B;&#x3001;&#x4E0D;&#x540C;&#x7684;&#x68C0;&#x6D4B;&#x7B56;&#x7565;&#x548C;&#x6743;&#x9650;&#x8FB9;&#x754C;&#xFF0C;&#x4E0D;&#x80FD;&#x7B80;&#x5355;&#x5730;&#x590D;&#x5236;&#x4E3B;&#x6A21;&#x578B;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x3002;</p>
<h2 id="&#x4E94;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x56DB;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x5177;&#x5907;&#x5B8C;&#x6574;&#x6027;&#x4FDD;&#x62A4;"><a href="#&#x4E94;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x56DB;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x5177;&#x5907;&#x5B8C;&#x6574;&#x6027;&#x4FDD;&#x62A4;"></a>&#x4E94;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x56DB;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x5177;&#x5907;&#x5B8C;&#x6574;&#x6027;&#x4FDD;&#x62A4;</h2>
<p>&#x8FD9;&#x4E00;&#x70B9;&#x5BB9;&#x6613;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>
<p>&#x5982;&#x679C;&#x662F;&#x4F01;&#x4E1A;&#x6A21;&#x578B;&#x670D;&#x52A1;&#x63D0;&#x4F9B;&#x5546;&#xFF0C;&#x53EF;&#x4EE5;&#x505A;&#xFF1A;</p>
<ul>
<li>&#x5BF9;&#x5B98;&#x65B9;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x8FDB;&#x884C;&#x6570;&#x5B57;&#x7B7E;&#x540D;&#x3002;</li>
<li>&#x53D1;&#x5E03;&#x6A21;&#x578B;&#x6587;&#x4EF6;&#x7684; SHA-256 &#x54C8;&#x5E0C;&#x3002;</li>
<li>&#x52A0;&#x8F7D;&#x6A21;&#x578B;&#x524D;&#x9A8C;&#x8BC1;&#x6587;&#x4EF6;&#x5B8C;&#x6574;&#x6027;&#x3002;</li>
<li>&#x5EFA;&#x7ACB;&#x53EF;&#x4FE1;&#x6A21;&#x578B;&#x4ED3;&#x5E93;&#x548C;&#x7248;&#x672C;&#x7BA1;&#x7406;&#x3002;</li>
<li>&#x5BF9;&#x6A21;&#x578B;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x8FDB;&#x884C;&#x5B8C;&#x6574;&#x6027;&#x68C0;&#x6D4B;&#x3002;</li>
<li>&#x5BF9;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x7684;&#x6A21;&#x578B;&#x53D8;&#x66F4;&#x8FDB;&#x884C;&#x5BA1;&#x6279;&#x548C;&#x5BA1;&#x8BA1;&#x3002;</li>
</ul>
<p>&#x4F8B;&#x5982;&#xFF1A;</p>
<p>&#x5B98;&#x65B9;&#x53D1;&#x5E03;&#x7684;&#x6A21;&#x578B;&#x662F; A&#xFF0C;&#x653B;&#x51FB;&#x8005;&#x4FEE;&#x6539;&#x540E;&#x5F97;&#x5230; B&#x3002;</p>
<p>&#x901A;&#x8FC7;&#x54C8;&#x5E0C;&#x548C;&#x7B7E;&#x540D;&#xFF0C;&#x53EF;&#x4EE5;&#x8BC6;&#x522B; B &#x5E76;&#x963B;&#x6B62;&#x5B83;&#x8FDB;&#x5165;&#x4F01;&#x4E1A;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x91CC;&#x6709;&#x4E2A;&#x8FB9;&#x754C;&#xFF1A;</p>
<p>&#x6570;&#x5B57;&#x7B7E;&#x540D;&#x53EA;&#x80FD;&#x9632;&#x6B62;&#x672A;&#x7ECF;&#x6388;&#x6743;&#x7684;&#x4FEE;&#x6539;&#xFF0C;&#x4E0D;&#x80FD;&#x963B;&#x6B62;&#x62FF;&#x5230;&#x6A21;&#x578B;&#x7684;&#x4EBA;&#x4E3B;&#x52A8;&#x4FEE;&#x6539;&#x81EA;&#x5DF1;&#x7684;&#x526F;&#x672C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x628A;&#x5B8C;&#x6574;&#x7684;&#x5F00;&#x6E90;&#x6743;&#x91CD;&#x4EA4;&#x7ED9;&#x7528;&#x6237;&#xFF0C;&#x5C31;&#x65E0;&#x6CD5;&#x4ECE;&#x6280;&#x672F;&#x4E0A;&#x963B;&#x6B62;&#x7528;&#x6237;&#x4FEE;&#x6539;&#x81EA;&#x5DF1;&#x7684;&#x6743;&#x91CD;&#x3002;</p>
<p>&#x8FD9;&#x662F; Open-weight Model &#x7684;&#x57FA;&#x672C;&#x5B89;&#x5168;&#x5C5E;&#x6027;&#xFF0C;&#x5E76;&#x975E; Abliteration &#x7279;&#x6709;&#x7684;&#x95EE;&#x9898;&#x3002;</p>
<h2 id="&#x516D;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E94;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x5373;&#x4F7F;&#x88AB;&#x4FEE;&#x6539;&#xFF0C;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x4E5F;&#x4E0D;&#x5BB9;&#x6613;&#x88AB;&#x5F7B;&#x5E95;&#x7834;&#x574F;"><a href="#&#x516D;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E94;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x5373;&#x4F7F;&#x88AB;&#x4FEE;&#x6539;&#xFF0C;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x4E5F;&#x4E0D;&#x5BB9;&#x6613;&#x88AB;&#x5F7B;&#x5E95;&#x7834;&#x574F;"></a>&#x516D;&#x3001;&#x9632;&#x5FA1;&#x601D;&#x8DEF;&#x4E94;&#xFF1A;&#x8BA9;&#x6A21;&#x578B;&#x5373;&#x4F7F;&#x88AB;&#x4FEE;&#x6539;&#xFF0C;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x4E5F;&#x4E0D;&#x5BB9;&#x6613;&#x88AB;&#x5F7B;&#x5E95;&#x7834;&#x574F;</h2>
<p>&#x8FD9;&#x91CC;&#x6709;&#x4E00;&#x9879;&#x7814;&#x7A76;&#xFF1A;</p>
<p>Decoy Direction Optimization&#xFF08;DDO&#xFF09;&#x3002;</p>
<p>&#x5B83;&#x901A;&#x8FC7;&#x5F15;&#x5165;&#x5E72;&#x6270;&#x6027;&#x7684;&#x5185;&#x90E8;&#x8868;&#x793A;&#xFF0C;&#x8BA9;&#x653B;&#x51FB;&#x8005;&#x7528;&#x5E38;&#x89C4;&#x5BF9;&#x6BD4;&#x65B9;&#x6CD5;&#x4F30;&#x8BA1;&#x62D2;&#x7EDD;&#x65B9;&#x5411;&#x65F6;&#xFF0C;&#x5F97;&#x5230;&#x7684;&#x65B9;&#x5411;&#x4E0D;&#x518D;&#x51C6;&#x786E;&#x3002;</p>
<p>&#x53EF;&#x4EE5;&#x7528;&#x4E00;&#x4E2A;&#x6BD4;&#x55BB;&#x7406;&#x89E3;&#xFF1A;</p>
<ul>
<li>&#x653B;&#x51FB;&#x8005;&#x60F3;&#x627E;&#x5230;&#x5B89;&#x5168;&#x673A;&#x5236;&#x6240;&#x5728;&#x7684;&#x5F00;&#x5173;&#x3002;</li>
<li>&#x9632;&#x5FA1;&#x8005;&#x5728;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x653E;&#x5165;&#x4E00;&#x4E2A;&#x5BB9;&#x6613;&#x88AB;&#x8BEF;&#x8BA4;&#x4E3A;&#x5F00;&#x5173;&#x7684;&#x5E72;&#x6270;&#x4FE1;&#x53F7;&#x3002;</li>
<li>&#x653B;&#x51FB;&#x8005;&#x79FB;&#x9664;&#x5E72;&#x6270;&#x4FE1;&#x53F7;&#x540E;&#xFF0C;&#x771F;&#x6B63;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#x4ECD;&#x7136;&#x5B58;&#x5728;&#x3002;</li>
</ul>
<p>&#x8BBA;&#x6587;&#x5728;&#x516D;&#x79CD;&#x6A21;&#x578B;&#x5BB6;&#x65CF;&#x4E0A;&#x8FDB;&#x884C;&#x4E86;&#x8BC4;&#x4F30;&#xFF0C;&#x62A5;&#x544A;&#x4E86;&#x5BF9;&#x6807;&#x51C6; Refusal Feature Ablation &#x653B;&#x51FB;&#x7684;&#x660E;&#x663E;&#x9632;&#x5FA1;&#x6548;&#x679C;&#x3002;</p>
<p>&#x4F46;&#x9762;&#x5BF9;&#x81EA;&#x9002;&#x5E94;&#x653B;&#x51FB;&#xFF0C;&#x6548;&#x679C;&#x4F1A;&#x4E0B;&#x964D;&#x3002;&#x56E0;&#x6B64;&#x4E0D;&#x80FD;&#x5C06;&#x5B83;&#x7406;&#x89E3;&#x6210;&#x4E0D;&#x53EF;&#x7834;&#x89E3;&#x7684;&#x9632;&#x62A4;&#x3002;</p>
<h2 id="&#x4E03;&#x3001;&#x5230;&#x5E95;&#x54EA;&#x79CD;&#x9632;&#x5FA1;&#x6700;&#x6709;&#x6548;&#xFF1F;"><a href="#&#x4E03;&#x3001;&#x5230;&#x5E95;&#x54EA;&#x79CD;&#x9632;&#x5FA1;&#x6700;&#x6709;&#x6548;&#xFF1F;"></a>&#x4E03;&#x3001;&#x5230;&#x5E95;&#x54EA;&#x79CD;&#x9632;&#x5FA1;&#x6700;&#x6709;&#x6548;&#xFF1F;</h2>
<p>&#x8FD9;&#x8981;&#x770B;&#x6A21;&#x578B;&#x7684;&#x4F7F;&#x7528;&#x65B9;&#x5F0F;&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x573A;&#x666F;</th>
<th>&#x6700;&#x91CD;&#x8981;&#x7684;&#x9632;&#x5FA1;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x95ED;&#x6E90; API &#x6A21;&#x578B;</td>
<td>&#x6743;&#x91CD;&#x4FDD;&#x62A4;&#x3001;&#x72EC;&#x7ACB;&#x5B89;&#x5168;&#x5BA1;&#x6838;&#x3001;&#x6743;&#x9650;&#x63A7;&#x5236;</td>
</tr>
<tr>
<td>&#x4F01;&#x4E1A;&#x5185;&#x90E8;&#x90E8;&#x7F72;&#x5F00;&#x6E90;&#x6A21;&#x578B;</td>
<td>&#x6A21;&#x578B;&#x5B8C;&#x6574;&#x6027;&#x9A8C;&#x8BC1;&#x3001;&#x72EC;&#x7ACB;&#x5BA1;&#x6838;&#x3001;&#x6C99;&#x7BB1;</td>
</tr>
<tr>
<td>&#x5411;&#x516C;&#x4F17;&#x53D1;&#x5E03;&#x5F00;&#x6E90;&#x6743;&#x91CD;</td>
<td>&#x6297;&#x4FEE;&#x6539;&#x8BAD;&#x7EC3;&#x3001;&#x900F;&#x660E;&#x5B89;&#x5168;&#x8BC4;&#x4F30;&#x3001;&#x98CE;&#x9669;&#x62AB;&#x9732;</td>
</tr>
<tr>
<td>Agent &#x81EA;&#x4E3B;&#x8C03;&#x7528;&#x5DE5;&#x5177;</td>
<td>&#x6700;&#x5C0F;&#x6743;&#x9650;&#x3001;&#x4EBA;&#x5DE5;&#x5BA1;&#x6279;&#x3001;&#x6267;&#x884C;&#x73AF;&#x5883;&#x9694;&#x79BB;</td>
</tr>
<tr>
<td>&#x9AD8;&#x98CE;&#x9669;&#x884C;&#x4E1A;</td>
<td>&#x72EC;&#x7ACB;&#x5B89;&#x5168;&#x7CFB;&#x7EDF;&#x3001;&#x64CD;&#x4F5C;&#x5BA1;&#x8BA1;&#x3001;&#x4EBA;&#x5DE5;&#x76D1;&#x7763;</td>
</tr>
</tbody>
</table>
<p>&#x6211;&#x8FD8;&#x60F3;&#x5F3A;&#x8C03;&#x4E00;&#x4E2A;&#x73B0;&#x5B9E;&#x5224;&#x65AD;&#xFF1A;</p>
<p>2026 &#x5E74; Anthropic &#x5BF9; GLM-5.3 &#x7684;&#x5B89;&#x5168;&#x7814;&#x7A76;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x6848;&#x4F8B;&#x3002;&#x7814;&#x7A76;&#x8005;&#x5BF9;&#x5F00;&#x653E;&#x6743;&#x91CD;&#x6A21;&#x578B;&#x8FDB;&#x884C; Abliteration &#x540E;&#xFF0C;&#x5176;&#x5728;&#x4E09;&#x4E2A;&#x5371;&#x9669;&#x8BF7;&#x6C42;&#x57FA;&#x51C6;&#x4E0A;&#x7684;&#x5E73;&#x5747;&#x62D2;&#x7EDD;&#x7387;&#x4ECE;&#x7EA6; 95% &#x964D;&#x5230;&#x4E86;&#x7EA6; 6%&#xFF0C;&#x800C; GPQA-Diamond &#x7B49;&#x901A;&#x7528;&#x79D1;&#x5B66;&#x80FD;&#x529B;&#x6D4B;&#x8BD5;&#x57FA;&#x672C;&#x6CA1;&#x6709;&#x660E;&#x663E;&#x4E0B;&#x964D;&#x3002;</p>
<p><strong>&#x6A21;&#x578B;&#x80FD;&#x529B;&#x4FDD;&#x7559;&#x5F97;&#x5F88;&#x597D;&#xFF0C;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x6A21;&#x578B;&#x5B89;&#x5168;&#x80FD;&#x529B;&#x4E5F;&#x4FDD;&#x7559;&#x5F97;&#x5F88;&#x597D;&#x3002;</strong></p>
<p>&#x6240;&#x4EE5;&#x6211;&#x7684;&#x5224;&#x65AD;&#x662F;&#xFF1A;</p>
<p>Abliteration &#x4E0D;&#x610F;&#x5473;&#x7740;&#x6240;&#x6709;&#x5927;&#x6A21;&#x578B;&#x90FD;&#x4F1A;&#x53D8;&#x5F97;&#x4E0D;&#x5B89;&#x5168;&#xFF0C;&#x4F46;&#x5B83;&#x8BF4;&#x660E;&#xFF0C;&#x4EC5;&#x9760;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&#x5B89;&#x5168;&#x5BF9;&#x9F50;&#xFF0C;&#x4E0D;&#x80FD;&#x6784;&#x6210;&#x4E00;&#x4E2A;&#x53EF;&#x9760;&#x7684;&#x5B8C;&#x6574;&#x5B89;&#x5168;&#x67B6;&#x6784;&#x3002;</p>
<p>&#x53E6;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x4E5F;&#x968F;&#x4E4B;&#x51FA;&#x73B0;&#xFF1A;&#x627E;&#x5230;&#x3001;&#x76D1;&#x6D4B;&#x6216;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5185;&#x90E8;&#x65B9;&#x5411;&#xFF0C;&#x662F;&#x5426;&#x610F;&#x5473;&#x7740;&#x5DF2;&#x7ECF;&#x89E3;&#x91CA;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x5B89;&#x5168;&#x673A;&#x5236;&#xFF1F;&#x8FD9;&#x9700;&#x8981;&#x8FDB;&#x4E00;&#x6B65;&#x533A;&#x5206; RepE &#x548C;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x3002;</p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>&#x300A;Open-Weight LLM Fine-Tuning Defenses are Susceptible to Simple Attacks&#x300B;&#xFF0C;2026&#xFF1A;https://arxiv.org/abs/2605.26526</li>
<li>MATS&#xFF0C;&#x300A;Decoy Direction Optimization: A Post-Hoc Defense Against LLM Abliteration&#x300B;&#xFF1A;https://www.matsprogram.org/research/decoy-direction-optimization-a-post-hoc-defense-against-llm-abliteration</li>
<li>Anthropic&#xFF0C;&#x300A;GLM-5.3 and the spread of advanced cyber capabilities&#x300B;&#xFF0C;2026&#xFF1A;https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities</li>
</ol>
<p><em>LZ AI Note&#xFF5C;&#x8BB0;&#x5F55;&#x73B0;&#x8C61;&#xFF0C;&#x8FFD;&#x95EE;&#x672C;&#x8D28;&#x3002;&#x590D;&#x6742;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x7B80;&#x5355;&#x8BF4;&#x3002;</em></p>
`,E=[{level:1,title:"如果模型可以被解除安全限制，我们该如何保护它？",children:[{level:2,title:"一、先理解它带来的安全风险",children:[]},{level:2,title:"二、防御思路一：让安全机制不再依赖单一方向",children:[]},{level:2,title:"三、防御思路二：训练模型抵抗 Abliteration",children:[]},{level:2,title:"四、防御思路三：使用外部独立安全机制",children:[{level:3,title:"Defense in Depth：纵深防御",children:[]}]},{level:2,title:"五、防御思路四：让模型权重具备完整性保护",children:[]},{level:2,title:"六、防御思路五：让模型即使被修改，安全能力也不容易被彻底破坏",children:[]},{level:2,title:"七、到底哪种防御最有效？",children:[]},{level:2,title:"参考资料",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
