const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2025-01-22</em></p>
<p>DeepSeek &#x53D1;&#x5E03;&#x7684; <strong>DeepSeek-R1</strong>&#xFF08;&#x8BBA;&#x6587;&#x6807;&#x9898;&#x4E3A;&#x300A;<a href="https://arxiv.org/abs/2501.12948">DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning</a>&#x300B;&#xFF09;&#x5728; AI &#x5708;&#x5F15;&#x8D77;&#x4E86;&#x5F88;&#x5927;&#x5173;&#x6CE8;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x63ED;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x4EC5;&#x901A;&#x8FC7;**&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF08;RL&#xFF09;**&#x800C;&#x975E;&#x5927;&#x89C4;&#x6A21;&#x4EBA;&#x5DE5;&#x76D1;&#x7763;&#x5FAE;&#x8C03;&#xFF08;SFT&#xFF09;&#xFF0C;&#x8BA9;&#x5927;&#x6A21;&#x578B;&#x201C;&#x6D8C;&#x73B0;&#x201D;&#x51FA;&#x590D;&#x6742;&#x7684;&#x63A8;&#x7406;&#x80FD;&#x529B;&#xFF08;Reasoning&#xFF09;&#xFF0C;&#x5E76;&#x8BE6;&#x7EC6;&#x9610;&#x8FF0;&#x4E86;&#x4ECE;&#x7EAF; RL &#x63A2;&#x7D22;&#x5230;&#x5DE5;&#x7A0B;&#x5316;&#x843D;&#x5730;&#x7684;&#x5B8C;&#x6574;&#x8DEF;&#x5F84;&#x3002;</p>
<h2 id="DeepSeek-R1 &#x8BBA;&#x6587;&#x6982;&#x8FF0;"><a href="#DeepSeek-R1 &#x8BBA;&#x6587;&#x6982;&#x8FF0;"></a>DeepSeek-R1 &#x8BBA;&#x6587;&#x6982;&#x8FF0;</h2>
<h3 id="1. DeepSeek-R1 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#1. DeepSeek-R1 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>1. DeepSeek-R1 &#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h3>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x5982;&#x4F55;&#x4F4E;&#x6210;&#x672C;&#x3001;&#x81EA;&#x52A8;&#x5316;&#x5730;&#x8BA9;&#x5927;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x590D;&#x6742;&#x7684;&#x903B;&#x8F91;&#x63A8;&#x7406;&#xFF08;Reasoning&#xFF09;&#x3002;</strong></p>
<p>&#x76EE;&#x524D;&#x63D0;&#x5347;&#x6A21;&#x578B;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x5982; CoT&#xFF09;&#x4E3B;&#x8981;&#x9762;&#x4E34;&#x4E24;&#x5927;&#x74F6;&#x9888;&#xFF1A;</p>
<ul>
<li><strong>&#x76D1;&#x7763;&#x6570;&#x636E;&#x7684;&#x5929;&#x82B1;&#x677F;&#xFF1A;</strong> &#x4F9D;&#x8D56;&#x4EBA;&#x7C7B;&#x7F16;&#x5199;&#x7684;&#x201C;&#x601D;&#x7EF4;&#x94FE;&#x201D;&#xFF08;CoT&#xFF09;&#x6570;&#x636E;&#x4E0D;&#x4EC5;&#x6602;&#x8D35;&#xFF0C;&#x800C;&#x4E14;&#x4EBA;&#x7C7B;&#x7684;&#x8BA4;&#x77E5;&#x4E0A;&#x9650;&#x9650;&#x5236;&#x4E86;&#x6A21;&#x578B;&#x7684;&#x6F5C;&#x529B;&#x3002;</li>
<li><strong>&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x7684;&#x9ED1;&#x76D2;&#xFF1A;</strong> &#x666E;&#x901A;&#x6A21;&#x578B;&#x53EA;&#x8F93;&#x51FA;&#x7B54;&#x6848;&#xFF0C;&#x7F3A;&#x4E4F;&#x50CF; OpenAI o1 &#x90A3;&#x6837;&#x7684;&#x201C;&#x6162;&#x601D;&#x8003;&#x201D;&#x8FC7;&#x7A0B;&#xFF08;Self-Reflection, Verification&#xFF09;&#x3002;</li>
</ul>
<p><strong>R1 &#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x5B83;&#x8BC1;&#x660E;&#x4E86;&#x53EA;&#x8981;&#x7ED9;&#x4E88;&#x6B63;&#x786E;&#x7684;&#x6FC0;&#x52B1;&#xFF08;Incentive&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x81EA;&#x6211;&#x535A;&#x5F08;&#xFF08;RL&#xFF09;&#x81EA;&#x53D1;&#x5B66;&#x4F1A;&#x68C0;&#x67E5;&#x3001;&#x9A8C;&#x7B97;&#x548C;&#x957F;&#x94FE;&#x6761;&#x601D;&#x8003;&#xFF0C;&#x800C;&#x4E0D;&#x9700;&#x8981;&#x4EBA;&#x7C7B;&#x624B;&#x628A;&#x624B;&#x6559;&#x3002;</p>
<hr>
<h3 id="2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>2. &#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h3>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x4E14;&#x7D27;&#x8FEB;&#x3002;</strong></p>
<ul>
<li><strong>&#x6570;&#x636E;&#x8017;&#x5C3D;&#xFF1A;</strong> &#x9AD8;&#x8D28;&#x91CF;&#x7684;&#x63A8;&#x7406;&#x6570;&#x636E;&#xFF08;&#x5982;&#x6570;&#x5B66;&#x8BC1;&#x660E;&#x3001;&#x7ADE;&#x8D5B;&#x4EE3;&#x7801;&#xFF09;&#x5728;&#x4E92;&#x8054;&#x7F51;&#x4E0A;&#x76F8;&#x5BF9;&#x7A00;&#x7F3A;&#x3002;</li>
<li><strong>SFT &#x7684;&#x5C40;&#x9650;&#xFF1A;</strong> &#x5355;&#x7EAF;&#x6A21;&#x4EFF;&#x4EBA;&#x7C7B;&#x6B65;&#x9AA4;&#xFF0C;&#x6A21;&#x578B;&#x5BB9;&#x6613;&#x201C;&#x5F62;&#x4F3C;&#x795E;&#x4E0D;&#x4F3C;&#x201D;&#xFF0C;&#x9047;&#x5230;&#x65B0;&#x9898;&#x5F80;&#x5F80;&#x9760;&#x80CC;&#x8BF5;&#x800C;&#x975E;&#x63A8;&#x7406;&#x3002;</li>
<li><strong>&#x5BF9;&#x6807;&#x95ED;&#x6E90;&#xFF1A;</strong> &#x5F00;&#x6E90;&#x754C;&#x6025;&#x9700;&#x77E5;&#x9053; OpenAI o1 &#x8FD9;&#x79CD;&#x201C;&#x7CFB;&#x7EDF; 2&#xFF08;System 2&#xFF09;&#x201D;&#x601D;&#x7EF4;&#x80FD;&#x529B;&#x662F;&#x5982;&#x4F55;&#x8BAD;&#x7EC3;&#x51FA;&#x6765;&#x7684;&#x3002;</li>
</ul>
<hr>
<h3 id="3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"><a href="#3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;"></a>3. &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x53BB;&#x89E3;&#x51B3;&#xFF1F;</h3>
<p>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x7A81;&#x7834;&#x4E0E;&#x7B97;&#x529B;&#x6210;&#x719F;&#x7684;&#x7ED3;&#x5408;&#x70B9;&#xFF1A;</p>
<ol>
<li><strong>&#x7B97;&#x6CD5;&#x6210;&#x672C;&#x964D;&#x4F4E;&#xFF1A;</strong> &#x4F20;&#x7EDF;&#x7684; RL&#xFF08;&#x5982; PPO&#xFF09;&#x9700;&#x8981;&#x7EF4;&#x62A4;&#x5E9E;&#x5927;&#x7684; Critic &#x6A21;&#x578B;&#xFF0C;&#x663E;&#x5B58;&#x548C;&#x8BA1;&#x7B97;&#x5F00;&#x9500;&#x6781;&#x5927;&#x3002;DeepSeek &#x63D0;&#x51FA;&#x7684; <strong>GRPO&#xFF08;Group Relative Policy Optimization&#xFF09;</strong> &#x6452;&#x5F03;&#x4E86; Critic&#xFF0C;&#x6781;&#x5927;&#x964D;&#x4F4E;&#x4E86;&#x8BAD;&#x7EC3;&#x95E8;&#x69DB;&#x3002;</li>
<li><strong>&#x201C;Aha Moment&#x201D;&#x7684;&#x53D1;&#x73B0;&#xFF1A;</strong> DeepSeek &#x53D1;&#x73B0;&#xFF0C;&#x4EC5;&#x901A;&#x8FC7;&#x7B80;&#x5355;&#x7684;&#x9A8C;&#x8BC1;&#x4FE1;&#x53F7;&#xFF08;&#x5982;&#x7B54;&#x6848;&#x5BF9;&#x9519;&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x5C31;&#x80FD;&#x81EA;&#x53D1;&#x6D8C;&#x73B0;&#x51FA;&#x590D;&#x6742;&#x7684;&#x201C;&#x53CD;&#x601D;&#x201D;&#x884C;&#x4E3A;&#x3002;</li>
<li><strong>&#x57FA;&#x7840;&#x6A21;&#x578B;&#x7684;&#x6210;&#x719F;&#xFF1A;</strong> DeepSeek-V3 &#x8FD9;&#x6837;&#x5F3A;&#x5927;&#x7684; Base &#x6A21;&#x578B;&#x4E3A; RL &#x63A2;&#x7D22;&#x63D0;&#x4F9B;&#x4E86;&#x8DB3;&#x591F;&#x597D;&#x7684;&#x5E95;&#x5EA7;&#x3002;</li>
</ol>
<hr>
<h3 id="4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>4. &#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h3>
<p>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5206;&#x4E3A;&#x4E24;&#x4E2A;&#x9636;&#x6BB5;&#xFF1A;</p>
<ul>
<li><strong>R1-Zero&#xFF08;&#x7EAF; RL &#x63A2;&#x7D22;&#xFF09;&#xFF1A;</strong> &#x76F4;&#x63A5;&#x5728; Base &#x6A21;&#x578B;&#x4E0A;&#x8DD1; RL&#xFF0C;&#x5956;&#x52B1;&#x53EA;&#x770B;&#x201C;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#x201D;&#x548C;&#x201C;&#x683C;&#x5F0F;&#x6709;&#x6CA1;&#x6709;&#x201D;&#x3002;&#x7ED3;&#x679C;&#x53D1;&#x73B0;&#x6A21;&#x578B;<strong>&#x81EA;&#x53D1;</strong>&#x5B66;&#x4F1A;&#x4E86;&#x957F;&#x601D;&#x7EF4;&#x94FE;&#x548C;&#x81EA;&#x6211;&#x53CD;&#x601D;&#xFF0C;&#x4F46;&#x4E5F;&#x5E26;&#x6765;&#x4E86;&#x8BED;&#x8A00;&#x6DF7;&#x4E71;&#x548C;&#x53EF;&#x8BFB;&#x6027;&#x5DEE;&#x7684;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>R1&#xFF08;&#x5DE5;&#x7A0B;&#x5316;&#x5B8C;&#x5168;&#x4F53;&#xFF09;&#xFF1A;</strong> &#x5F15;&#x5165;&#x4E86;&#x201C;&#x51B7;&#x542F;&#x52A8; -&gt; RL -&gt; &#x62D2;&#x7EDD;&#x91C7;&#x6837; -&gt; SFT -&gt; &#x6700;&#x7EC8;&#x5BF9;&#x9F50;&#x201D;&#x7684;&#x591A;&#x9636;&#x6BB5;&#x6D41;&#x6C34;&#x7EBF;&#x3002;&#x901A;&#x8FC7;&#x5C11;&#x91CF;&#x9AD8;&#x8D28;&#x91CF;&#x6570;&#x636E;&#x5B9A;&#x578B;&#xFF0C;&#x518D;&#x901A;&#x8FC7; RL &#x63D0;&#x5347;&#x667A;&#x529B;&#xFF0C;&#x6700;&#x540E;&#x901A;&#x8FC7; SFT &#x548C;&#x5BF9;&#x9F50;&#x4FEE;&#x590D;&#x8BED;&#x8A00;&#x98CE;&#x683C;&#x548C;&#x5B89;&#x5168;&#x6027;&#x3002;</li>
</ul>
<hr>
<h3 id="5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"><a href="#5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;"></a>5. &#x8FD8;&#x6709;&#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x5417;&#xFF1F;</h3>
<p>DeepSeek-R1 &#x662F;&#x76EE;&#x524D;&#x5F00;&#x6E90;&#x9886;&#x57DF;&#x7684;<strong>&#x6700;&#x4F73;&#x5B9E;&#x8DF5;</strong>&#xFF0C;&#x4F46;&#x5E76;&#x975E;&#x7EC8;&#x5C40;&#x3002;</p>
<ul>
<li><strong>&#x5C40;&#x9650;&#xFF1A;</strong> &#x76EE;&#x524D;&#x4E3B;&#x8981;&#x5728;&#x6709;&#x6807;&#x51C6;&#x7B54;&#x6848;&#x7684;&#x7406;&#x5DE5;&#x79D1;&#x4EFB;&#x52A1;&#xFF08;&#x6570;&#x5B66;&#x3001;&#x4EE3;&#x7801;&#xFF09;&#x4E0A;&#x8868;&#x73B0;&#x51FA;&#x8272;&#xFF0C;&#x6587;&#x79D1;&#x548C;&#x5F00;&#x653E;&#x5F0F;&#x4EFB;&#x52A1;&#x7684;&#x5956;&#x52B1;&#x5B9A;&#x4E49;&#x4ECD;&#x662F;&#x96BE;&#x9898;&#x3002;&#x6709;&#x65F6;&#x4F1A;&#x51FA;&#x73B0;&#x201C;&#x8FC7;&#x5EA6;&#x601D;&#x8003;&#x201D;&#x6D6A;&#x8D39;&#x7B97;&#x529B;&#x7684;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>&#x672A;&#x6765;&#x65B9;&#x5411;&#xFF1A;</strong> &#x53EF;&#x80FD;&#x662F;&#x66F4;&#x7CBE;&#x7EC6;&#x7684;&#x8FC7;&#x7A0B;&#x5956;&#x52B1;&#x6A21;&#x578B;&#xFF08;PRM&#xFF09;&#x3001;&#x81EA;&#x9002;&#x5E94;&#x8BA1;&#x7B97;&#xFF08;Adaptive Computation&#xFF09;&#x4EE5;&#x53CA;&#x4E0E;&#x5DE5;&#x5177;&#x4F7F;&#x7528;&#xFF08;Tool Use&#xFF09;&#x7684;&#x7ED3;&#x5408;&#x3002;</li>
</ul>
<p>&#x8981;&#x6DF1;&#x5165;&#x7406;&#x89E3; DeepSeek-R1&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x62C6;&#x89E3;&#x5176;&#x4E2D;&#x7684;&#x6838;&#x5FC3;&#x6280;&#x672F;&#x6982;&#x5FF5;&#x3002;R1 &#x7684;&#x6838;&#x5FC3;&#x903B;&#x8F91;&#x5176;&#x5B9E;&#x5C31;&#x662F;&#xFF1A;<strong>&#x7ED9;&#x6A21;&#x578B;&#x4E00;&#x4E2A;&#x96BE;&#x9898;&#x548C;&#x4E00;&#x628A;&#x5C3A;&#x5B50;&#xFF0C;&#x8BA9;&#x5B83;&#x81EA;&#x5DF1;&#x8BD5;&#x9519;&#xFF0C;&#x8BD5;&#x5BF9;&#x4E86;&#x5C31;&#x5956;&#x52B1;&#xFF0C;&#x5B83;&#x81EA;&#x5DF1;&#x5C31;&#x80FD;&#x7422;&#x78E8;&#x51FA;&#x89E3;&#x9898;&#x5957;&#x8DEF;&#x3002;</strong></p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;&#xFF1A;</h2>
<hr>
<h3 id="1. GRPO (Group Relative Policy Optimization)"><a href="#1. GRPO (Group Relative Policy Optimization)"></a>1. GRPO (Group Relative Policy Optimization)</h3>
<p>&#x8FD9;&#x662F;&#x76F8;&#x5BF9;&#x4E8E;&#x4F20;&#x7EDF; <strong>PPO&#xFF08;Proximal Policy Optimization&#xFF09;</strong> &#x7684;&#x4E00;&#x79CD;&#x66F4;&#x9AD8;&#x6548;&#x7684;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x7B97;&#x6CD5;&#x3002;</p>
<ul>
<li><strong>PPO&#xFF08;&#x4F20;&#x7EDF;&#xFF09;&#xFF1A;</strong> &#x9700;&#x8981;&#x4E00;&#x4E2A;&#x989D;&#x5916;&#x7684;&#x201C;&#x8001;&#x5E08;&#x5085;&#x201D;&#x6A21;&#x578B;&#xFF08;Critic&#xFF09;&#x6765;&#x65F6;&#x523B;&#x7ED9;&#x6A21;&#x578B;&#x7684;&#x6BCF;&#x4E00;&#x6B65;&#x6253;&#x5206;&#xFF08;Value Function&#xFF09;&#x3002;&#x8FD9;&#x5BFC;&#x81F4;&#x663E;&#x5B58;&#x5360;&#x7528;&#x7FFB;&#x500D;&#xFF0C;&#x4E14; Critic &#x81EA;&#x8EAB;&#x5728;&#x5927;&#x6A21;&#x578B;&#x957F;&#x8F93;&#x51FA;&#x4EFB;&#x52A1;&#x4E2D;&#x5F88;&#x96BE;&#x8BAD;&#x7EC3;&#x7A33;&#x5B9A;&#x3002;</li>
<li><strong>GRPO&#xFF08;&#x7EC4;&#x76F8;&#x5BF9;&#x7B56;&#x7565;&#xFF09;&#xFF1A;</strong> &#x4E0D;&#x9700;&#x8981; Critic&#x3002;&#x5B83;&#x8BA9;&#x6A21;&#x578B;&#x5BF9;&#x7740;&#x540C;&#x4E00;&#x9053;&#x9898;&#x751F;&#x6210;&#x4E00;&#x7EC4;&#xFF08;&#x6BD4;&#x5982; 4 &#x4E2A;&#xFF09;&#x4E0D;&#x540C;&#x7684;&#x7B54;&#x6848;&#x3002;</li>
<li><strong>&#x673A;&#x5236;&#xFF1A;</strong>
<ul>
<li><strong>&#x7EC4;&#x5185;&#x5BF9;&#x6BD4;&#xFF1A;</strong> &#x53EA;&#x8981;&#x8FD9;&#x4E00;&#x7EC4;&#x91CC;&#x6709;&#x4E00;&#x4E2A;&#x7B54;&#x6848;&#x662F;&#x5BF9;&#x7684;&#xFF0C;&#x6216;&#x8005;&#x6BD4;&#x5176;&#x4ED6;&#x7B54;&#x6848;&#x597D;&#xFF0C;&#x5B83;&#x5C31;&#x83B7;&#x5F97;&#x6B63;&#x5411;&#x6FC0;&#x52B1;&#xFF08;Advantage &gt; 0&#xFF09;&#xFF1B;&#x5DEE;&#x7684;&#x5C31;&#x53D7;&#x7F5A;&#x3002;</li>
<li><strong>&#x901A;&#x4FD7;&#x7406;&#x89E3;&#xFF1A;</strong> &#x4E0D;&#x9700;&#x8981;&#x8BF7;&#x4E13;&#x95E8;&#x7684;&#x8001;&#x5E08;&#xFF08;Critic&#xFF09;&#xFF0C;&#x8BA9;&#x5B66;&#x751F;&#x81EA;&#x5DF1;&#x505A;&#x51E0;&#x904D;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x505A;&#x5F97;&#x597D;&#x7684;&#x90A3;&#x904D;&#x5F53;&#x6210;&#x699C;&#x6837;&#x6765;&#x5B66;&#x3002;</li>
</ul>
</li>
<li><strong>&#x4F18;&#x52BF;&#xFF1A;</strong> &#x6781;&#x5927;&#x5730;&#x8282;&#x7701;&#x4E86;&#x663E;&#x5B58;&#xFF0C;&#x4F7F;&#x5F97;&#x5927;&#x89C4;&#x6A21; RL &#x8BAD;&#x7EC3;&#x6210;&#x4E3A;&#x53EF;&#x80FD;&#x3002;</li>
</ul>
<h3 id="2. &#x81EA;&#x6211;&#x535A;&#x5F08;&#x4E0E;&#x6536;&#x655B; (Self-Play / Exploration)"><a href="#2. &#x81EA;&#x6211;&#x535A;&#x5F08;&#x4E0E;&#x6536;&#x655B; (Self-Play / Exploration)"></a>2. &#x81EA;&#x6211;&#x535A;&#x5F08;&#x4E0E;&#x6536;&#x655B; (Self-Play / Exploration)</h3>
<p>&#x5728; R1 &#x7684;&#x8BED;&#x5883;&#x4E0B;&#xFF0C;&#x8FD9;&#x6307;&#x7684;&#x662F;&#x6A21;&#x578B;&#x5728; RL &#x8FC7;&#x7A0B;&#x4E2D;&#x7684;<strong>&#x81EA;&#x6211;&#x63A2;&#x7D22;</strong>&#x3002;</p>
<ul>
<li><strong>R1-Zero &#x7684;&#x95ED;&#x73AF;&#xFF1A;</strong>
<ol>
<li><strong>&#x91C7;&#x6837;&#xFF08;Generate&#xFF09;&#xFF1A;</strong> &#x6A21;&#x578B;&#x9488;&#x5BF9;&#x9898;&#x76EE;&#x5C1D;&#x8BD5;&#x751F;&#x6210;&#x591A;&#x79CD;&#x89E3;&#x6CD5;&#x3002;</li>
<li><strong>&#x9A8C;&#x8BC1;&#xFF08;Verify&#xFF09;&#xFF1A;</strong> &#x7528;&#x89C4;&#x5219;&#xFF08;&#x5982;&#x7F16;&#x8BD1;&#x5668;&#x3001;&#x7B54;&#x6848;&#x6BD4;&#x5BF9;&#xFF09;&#x5224;&#x65AD;&#x5BF9;&#x9519;&#x3002;</li>
<li><strong>&#x66F4;&#x65B0;&#xFF08;Update&#xFF09;&#xFF1A;</strong> &#x7528; GRPO &#x5F3A;&#x5316;&#x90A3;&#x4E9B;&#x505A;&#x5BF9;&#x7684;&#x8DEF;&#x5F84;&#x3002;</li>
</ol>
</li>
<li><strong>&#x6D8C;&#x73B0;&#xFF08;Emergence&#xFF09;&#xFF1A;</strong> &#x968F;&#x7740;&#x8BAD;&#x7EC3;&#x8FDB;&#x884C;&#xFF0C;&#x6A21;&#x578B;&#x53D1;&#x73B0;&#x201C;&#x591A;&#x5199;&#x70B9;&#x6B65;&#x9AA4;&#x201D;&#x3001;&#x201C;&#x56DE;&#x5934;&#x68C0;&#x67E5;&#x4E00;&#x904D;&#x201D;&#x80FD;&#x663E;&#x8457;&#x63D0;&#x9AD8;&#x505A;&#x5BF9;&#x7684;&#x6982;&#x7387;&#x3002;&#x4E8E;&#x662F;&#xFF0C;**&#x53CD;&#x601D;&#xFF08;Reflection&#xFF09;<strong>&#x548C;</strong>&#x9A8C;&#x8BC1;&#xFF08;Verification&#xFF09;**&#x7684;&#x80FD;&#x529B;&#x5C31;&#x4F5C;&#x4E3A;&#x4E00;&#x79CD;&#x201C;&#x751F;&#x5B58;&#x7B56;&#x7565;&#x201D;&#x88AB;&#x6A21;&#x578B;&#x81EA;&#x53D1;&#x5B66;&#x4F1A;&#x4E86;&#x3002;</li>
</ul>
<h3 id="3. &#x51B7;&#x542F;&#x52A8; (Cold Start)"><a href="#3. &#x51B7;&#x542F;&#x52A8; (Cold Start)"></a>3. &#x51B7;&#x542F;&#x52A8; (Cold Start)</h3>
<p>&#x8FD9;&#x662F;&#x89E3;&#x51B3;&#x7EAF; RL &#x6A21;&#x578B;&#x201C;&#x4E0D;&#x8BF4;&#x4EBA;&#x8BDD;&#x201D;&#x7684;&#x5173;&#x952E;&#x6B65;&#x9AA4;&#x3002;</p>
<ul>
<li><strong>&#x95EE;&#x9898;&#xFF1A;</strong> R1-Zero &#x867D;&#x7136;&#x806A;&#x660E;&#xFF0C;&#x4F46;&#x7ECF;&#x5E38;&#x4E2D;&#x82F1;&#x5939;&#x6742;&#x3001;&#x683C;&#x5F0F;&#x6DF7;&#x4E71;&#x3001;&#x751A;&#x81F3;&#x65E0;&#x9650;&#x91CD;&#x590D;&#x3002;&#x56E0;&#x4E3A;&#x5B83;&#x53EA;&#x5728;&#x4E4E;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#xFF0C;&#x4E0D;&#x5728;&#x4E4E;&#x597D;&#x4E0D;&#x597D;&#x770B;&#x3002;</li>
<li><strong>&#x89E3;&#x51B3;&#xFF1A;</strong> &#x5728;&#x5927;&#x89C4;&#x6A21; RL &#x4E4B;&#x524D;&#xFF0C;&#x5148;&#x7528;&#x5C11;&#x91CF;&#xFF08;&#x51E0;&#x5343;&#x6761;&#xFF09;&#x9AD8;&#x8D28;&#x91CF;&#x7684;&#x4EBA;&#x7C7B;&#x53EF;&#x8BFB;&#x7684; CoT &#x6570;&#x636E;&#x5FAE;&#x8C03;&#x6A21;&#x578B;&#x3002;</li>
<li><strong>&#x4F5C;&#x7528;&#xFF1A;</strong> &#x7ED9;&#x6A21;&#x578B;&#x7ACB;&#x4E2A;&#x89C4;&#x77E9;&#x2014;&#x2014;&#x201C;&#x4E0D;&#x4EC5;&#x8981;&#x7B97;&#x5BF9;&#xFF0C;&#x8FD8;&#x8981;&#x5199;&#x5F97;&#x50CF;&#x4E2A;&#x4EBA;&#x201D;&#x3002;&#x8FD9;&#x6781;&#x5927;&#x5730;&#x7A33;&#x5B9A;&#x4E86;&#x540E;&#x7EED; RL &#x7684;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x3002;</li>
</ul>
<h3 id="4. &#x62D2;&#x7EDD;&#x91C7;&#x6837; (Rejection Sampling)"><a href="#4. &#x62D2;&#x7EDD;&#x91C7;&#x6837; (Rejection Sampling)"></a>4. &#x62D2;&#x7EDD;&#x91C7;&#x6837; (Rejection Sampling)</h3>
<p>&#x8FD9;&#x662F;&#x5C06; RL &#x83B7;&#x5F97;&#x7684;&#x667A;&#x529B;&#x8F6C;&#x5316;&#x4E3A;&#x7A33;&#x5B9A;&#x80FD;&#x529B;&#x7684;&#x624B;&#x6BB5;&#x3002;</p>
<ul>
<li><strong>&#x8FC7;&#x7A0B;&#xFF1A;</strong> &#x7528;&#x8BAD;&#x7EC3;&#x597D;&#x7684;&#x5F3A;&#x6A21;&#x578B;&#x751F;&#x6210;&#x6D77;&#x91CF;&#x6570;&#x636E;&#x3002;</li>
<li><strong>&#x8FC7;&#x6EE4;&#xFF1A;</strong> &#x6254;&#x6389;&#x9519;&#x8BEF;&#x7684;&#xFF0C;&#x53EA;&#x4FDD;&#x7559;&#x6B63;&#x786E;&#x7684;&#x63A8;&#x7406;&#x8DEF;&#x5F84;&#x3002;</li>
<li><strong>&#x56DE;&#x704C;&#xFF1A;</strong> &#x628A;&#x8FD9;&#x4E9B;&#x7B5B;&#x9009;&#x540E;&#x7684;&#x7CBE;&#x534E;&#x6570;&#x636E;&#x5F53;&#x4F5C; SFT &#x6570;&#x636E;&#xFF0C;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x6A21;&#x578B;&#x3002;</li>
<li><strong>&#x76EE;&#x7684;&#xFF1A;</strong> &#x628A; RL &#x63A2;&#x7D22;&#x5230;&#x7684;&#x201C;&#x7075;&#x5149;&#x4E00;&#x73B0;&#x201D;&#x56FA;&#x5316;&#x4E3A;&#x6A21;&#x578B;&#x7684;&#x672C;&#x80FD;&#x53CD;&#x5E94;&#xFF0C;&#x540C;&#x65F6;&#x53EF;&#x4EE5;&#x6DF7;&#x5408;&#x975E;&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#x7684;&#x6570;&#x636E;&#xFF0C;&#x4FDD;&#x8BC1;&#x6A21;&#x578B;&#x4E0D;&#x504F;&#x79D1;&#x3002;</li>
</ul>
<h3 id="5. &#x8FC7;&#x7A0B;&#x5956;&#x52B1; vs. &#x7ED3;&#x679C;&#x5956;&#x52B1; (Process vs. Outcome Reward)"><a href="#5. &#x8FC7;&#x7A0B;&#x5956;&#x52B1; vs. &#x7ED3;&#x679C;&#x5956;&#x52B1; (Process vs. Outcome Reward)"></a>5. &#x8FC7;&#x7A0B;&#x5956;&#x52B1; vs. &#x7ED3;&#x679C;&#x5956;&#x52B1; (Process vs. Outcome Reward)</h3>
<p>DeepSeek-R1 &#x4E3B;&#x8981;&#x4F9D;&#x8D56;<strong>&#x7ED3;&#x679C;&#x5956;&#x52B1;&#xFF08;Outcome Reward&#xFF09;</strong>&#xFF0C;&#x8FD9;&#x4E0E;&#x672A;&#x6765;&#x7684;**&#x8FC7;&#x7A0B;&#x5956;&#x52B1;&#xFF08;Process Reward&#xFF09;**&#x65B9;&#x5411;&#x5F62;&#x6210;&#x5BF9;&#x6BD4;&#x3002;</p>
<ul>
<li><strong>&#x7ED3;&#x679C;&#x5956;&#x52B1;&#xFF08;R1&#xFF09;&#xFF1A;</strong> &#x53EA;&#x770B;&#x6700;&#x540E;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#x3002;&#x4F18;&#x70B9;&#x662F;&#x5EC9;&#x4EF7;&#x3001;&#x6613;&#x5F97;&#xFF1B;&#x7F3A;&#x70B9;&#x662F;&#x53CD;&#x9988;&#x7A00;&#x758F;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x8499;&#x5BF9;&#x3002;</li>
<li><strong>&#x8FC7;&#x7A0B;&#x5956;&#x52B1;&#xFF08;&#x672A;&#x6765;&#xFF09;&#xFF1A;</strong> &#x7ED9;&#x63A8;&#x7406;&#x7684;&#x6BCF;&#x4E00;&#x6B65;&#x6253;&#x5206;&#x3002;&#x4F18;&#x70B9;&#x662F;&#x53CD;&#x9988;&#x7CBE;&#x51C6;&#xFF0C;&#x6A21;&#x578B;&#x77E5;&#x9053;&#x54EA;&#x4E00;&#x6B65;&#x8D70;&#x9519;&#x4E86;&#xFF1B;&#x7F3A;&#x70B9;&#x662F;&#x6570;&#x636E;&#x6781;&#x5176;&#x6602;&#x8D35;&#xFF0C;&#x96BE;&#x4EE5;&#x6807;&#x6CE8;&#x3002;</li>
</ul>
<hr>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>DeepSeek-R1 &#x7684;&#x672C;&#x8D28;&#x662F;**&#x201C;&#x601D;&#x7EF4;&#x7684;&#x6D8C;&#x73B0;&#x201D;**&#xFF1A;</p>
<ol>
<li><strong>&#x7EAF; RL + &#x7ED3;&#x679C;&#x6FC0;&#x52B1;</strong>&#x8BC1;&#x660E;&#x4E86;&#x63A8;&#x7406;&#x80FD;&#x529B;&#x53EF;&#x4EE5;&#x81EA;&#x5B66;&#x3002;</li>
<li><strong>GRPO</strong> &#x8BA9;&#x8FD9;&#x79CD;&#x81EA;&#x5B66;&#x53D8;&#x5F97;&#x4FBF;&#x5B9C;&#x53EF;&#x884C;&#x3002;</li>
<li><strong>&#x51B7;&#x542F;&#x52A8;&#x548C;&#x62D2;&#x7EDD;&#x91C7;&#x6837;</strong> &#x628A;&#x5929;&#x624D;&#x7684;&#x601D;&#x8DEF;&#x53D8;&#x6210;&#x4E86;&#x5DE5;&#x7A0B;&#x4E0A;&#x53EF;&#x9760;&#x7684;&#x4EA7;&#x54C1;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2501.12948">&#x8BBA;&#x6587;&#x5730;&#x5740;</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-01-20</em></p>
`,E=[{level:2,title:"DeepSeek-R1 论文概述",children:[{level:3,title:"1. DeepSeek-R1 解决了什么问题？",children:[]},{level:3,title:"2. 这个问题真实存在吗？",children:[]},{level:3,title:"3. 为什么现在才有人去解决？",children:[]},{level:3,title:"4. 它是如何解决的？",children:[]},{level:3,title:"5. 还有更好的解决方案吗？",children:[]}]},{level:2,title:"关键词解析：",children:[{level:3,title:"1. GRPO (Group Relative Policy Optimization)",children:[]},{level:3,title:"2. 自我博弈与收敛 (Self-Play / Exploration)",children:[]},{level:3,title:"3. 冷启动 (Cold Start)",children:[]},{level:3,title:"4. 拒绝采样 (Rejection Sampling)",children:[]},{level:3,title:"5. 过程奖励 vs. 结果奖励 (Process vs. Outcome Reward)",children:[]},{level:3,title:"总结",children:[]}]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
