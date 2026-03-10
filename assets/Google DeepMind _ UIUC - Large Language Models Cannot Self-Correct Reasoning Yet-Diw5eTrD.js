const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-10-03</em></p>
<p>Google DeepMind &#x4E0E; UIUC &#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>&#x300A;Large Language Models Cannot Self-Correct Reasoning Yet&#x300B;</strong>&#xFF08;<a href="https://arxiv.org/abs/2310.01798">arXiv:2310.01798</a>&#xFF09;&#x5BF9; LLM &#x793E;&#x533A;&#x4E2D;&#x5E7F;&#x53D7;&#x8FFD;&#x6367;&#x7684;&quot;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&quot;&#xFF08;Self-Correction&#xFF09;&#x80FD;&#x529B;&#x8FDB;&#x884C;&#x4E86;&#x7CFB;&#x7EDF;&#x6027;&#x7684;&#x6279;&#x5224;&#x5BA1;&#x89C6;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x6838;&#x5FC3;&#x7ED3;&#x8BBA;&#x662F;&#xFF1A;<strong>&#x5728;&#x6CA1;&#x6709;&#x5916;&#x90E8;&#x53CD;&#x9988;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5927;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#x65E0;&#x6CD5;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x5176;&#x63A8;&#x7406;&#x9519;&#x8BEF;&#xFF0C;&#x751A;&#x81F3;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x540E;&#x6027;&#x80FD;&#x4F1A;&#x4E0B;&#x964D;&#x3002;</strong> &#x6B64;&#x524D;&#x88AB;&#x8BA4;&#x4E3A;&#x6709;&#x6548;&#x7684; Self-Correction &#x65B9;&#x6CD5;&#xFF0C;&#x5176;&#x6539;&#x8FDB;&#x8981;&#x4E48;&#x6765;&#x81EA;&#x5077;&#x770B;&#x4E86;&#x6B63;&#x786E;&#x7B54;&#x6848;&#xFF08;Oracle Labels&#xFF09;&#xFF0C;&#x8981;&#x4E48;&#x6765;&#x81EA;&#x4E0D;&#x516C;&#x5E73;&#x7684;&#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#x3002;</p>
<h2 id="&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x63ED;&#x7A7F;&#x4E86; LLM &quot;&#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&quot;&#x7684;&#x865A;&#x5047;&#x7E41;&#x8363;&#x3002;</strong></p>
<p>&#x81EA; ChatGPT &#x7206;&#x706B;&#x4EE5;&#x6765;&#xFF0C;&#x793E;&#x533A;&#x4E2D;&#x51FA;&#x73B0;&#x4E86;&#x5927;&#x91CF;&#x5173;&#x4E8E; Self-Correction &#x7684;&#x5DE5;&#x4F5C;&#xFF08;Self-Refine, Reflexion, RCI &#x7B49;&#xFF09;&#xFF0C;&#x58F0;&#x79F0;&#x53EF;&#x4EE5;&#x8BA9; LLM &#x5148;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x7B54;&#x6848;&#xFF0C;&#x518D;&#x53CD;&#x601D;&#x5E76;&#x4FEE;&#x6B63;&#x81EA;&#x5DF1;&#x7684;&#x9519;&#x8BEF;&#x3002;&#x8FD9;&#x8BA9;&#x4EBA;&#x4EA7;&#x751F;&#x4E86;&#x4E00;&#x79CD;&#x7F8E;&#x597D;&#x7684;&#x9519;&#x89C9;&#xFF1A;&#x6A21;&#x578B;&#x5C31;&#x50CF;&#x4EBA;&#x4E00;&#x6837;&#xFF0C;&#x53EF;&#x4EE5;&quot;&#x4E09;&#x7701;&#x543E;&#x8EAB;&quot;&#x3002;</p>
<p>&#x4F46;&#x8BBA;&#x6587;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x81F4;&#x547D;&#x7684;&#x53CD;&#x95EE;&#xFF1A;<strong>&#x5982;&#x679C;&#x6A21;&#x578B;&#x6709;&#x80FD;&#x529B;&#x5224;&#x65AD;&#x81EA;&#x5DF1;&#x7684;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x5B83;&#x4E0D;&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x5C31;&#x7ED9;&#x51FA;&#x6B63;&#x786E;&#x7B54;&#x6848;&#xFF1F;</strong></p>
<p>&#x8BBA;&#x6587;&#x805A;&#x7126;&#x4E8E;&#x4E00;&#x4E2A;&#x6838;&#x5FC3;&#x6982;&#x5FF5;&#x2014;&#x2014;<strong>&#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;Intrinsic Self-Correction&#xFF09;</strong>&#xFF1A;&#x6A21;&#x578B;&#x4EC5;&#x51ED;&#x81EA;&#x8EAB;&#x80FD;&#x529B;&#xFF08;&#x4E0D;&#x501F;&#x52A9;&#x5916;&#x90E8;&#x5DE5;&#x5177;&#x3001;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x3001;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x7B49;&#xFF09;&#x6765;&#x7EA0;&#x6B63;&#x81EA;&#x5DF1;&#x7684;&#x63A8;&#x7406;&#x3002;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x8868;&#x660E;&#xFF0C;&#x5728;&#x8FD9;&#x79CD;&#x4E25;&#x683C;&#x8BBE;&#x5B9A;&#x4E0B;&#xFF0C;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x4E0D;&#x4EC5;&#x65E0;&#x6548;&#xFF0C;&#x53CD;&#x800C;&#x6709;&#x5BB3;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x975E;&#x5E38;&#x771F;&#x5B9E;&#xFF0C;&#x800C;&#x4E14;&#x76F4;&#x63A5;&#x5F71;&#x54CD;&#x4E86;&#x6574;&#x4E2A; AI Agent &#x793E;&#x533A;&#x7684;&#x8BBE;&#x8BA1;&#x8303;&#x5F0F;&#x3002;</strong></p>
<ul>
<li><strong>&#x5B66;&#x672F;&#x754C;&#x7684;&#x8BEF;&#x5BFC;&#xFF1A;</strong> &#x8BB8;&#x591A;&#x8BBA;&#x6587;&#x62A5;&#x544A;&#x4E86; Self-Correction &#x7684;&#x663E;&#x8457;&#x63D0;&#x5347;&#xFF08;&#x5982; RCI &#x5728; CommonSenseQA &#x4E0A;&#x63D0;&#x5347; 15%&#xFF09;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x63D0;&#x5347;&#x7684;&#x524D;&#x63D0;&#x662F;&#x4F7F;&#x7528;&#x4E86; Oracle Labels&#x2014;&#x2014;&#x5373;&#x7528;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6765;&#x51B3;&#x5B9A;&quot;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x505C;&#x6B62;&#x7EA0;&#x6B63;&quot;&#x3002;&#x8FD9;&#x76F8;&#x5F53;&#x4E8E;&#x5728;&#x5F00;&#x5377;&#x8003;&#x8BD5;&#x4E2D;&#x58F0;&#x79F0;&#x81EA;&#x5DF1;&#x8BB0;&#x5FC6;&#x529B;&#x597D;&#x3002;</li>
<li><strong>&#x5DE5;&#x7A0B;&#x5B9E;&#x8DF5;&#x7684;&#x9677;&#x9631;&#xFF1A;</strong> &#x8BB8;&#x591A; AI Agent &#x6846;&#x67B6;&#x9ED8;&#x8BA4;&#x52A0;&#x5165;&quot;&#x53CD;&#x601D;-&#x91CD;&#x8BD5;&quot;&#x5FAA;&#x73AF;&#xFF0C;&#x4F46;&#x5982;&#x679C;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#x5C31;&#x65E0;&#x6CD5;&#x5224;&#x65AD;&#x5BF9;&#x9519;&#xFF0C;&#x8FD9;&#x79CD;&#x5FAA;&#x73AF;&#x53EA;&#x4F1A;&#x589E;&#x52A0;&#x63A8;&#x7406;&#x6210;&#x672C;&#xFF0C;&#x540C;&#x65F6;&#x53EF;&#x80FD;&#x628A;&#x5BF9;&#x7684;&#x7B54;&#x6848;&#x6539;&#x6210;&#x9519;&#x7684;&#x3002;</li>
<li><strong>&#x5B9E;&#x9A8C;&#x6570;&#x636E;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x5728; GSM8K&#xFF08;&#x6570;&#x5B66;&#x63A8;&#x7406;&#xFF09;&#x3001;CommonSenseQA&#xFF08;&#x5E38;&#x8BC6;&#x63A8;&#x7406;&#xFF09;&#x3001;HotpotQA&#xFF08;&#x591A;&#x8DF3;&#x95EE;&#x7B54;&#xFF09;&#x4E0A;&#x7684;&#x5B9E;&#x9A8C;&#x663E;&#x793A;&#xFF0C;GPT-3.5 &#x548C; GPT-4 &#x5728;&#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x540E;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x51E0;&#x4E4E;&#x5168;&#x7EBF;&#x4E0B;&#x964D;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x53D1;&#x73B0;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x53D1;&#x73B0;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x53D1;&#x73B0;&#xFF1F;</h2>
<p>&#x5176;&#x5B9E;&#x6709;&#x4EBA;&#x5DF2;&#x7ECF;&#x9690;&#x7EA6;&#x611F;&#x89C9;&#x5230;&#x4E86;&#x95EE;&#x9898;&#xFF0C;&#x4F46;&#x6B64;&#x524D;&#x7684;&#x7814;&#x7A76;&#x5B58;&#x5728;&#x4E09;&#x7C7B;&#x7CFB;&#x7EDF;&#x6027;&#x7684;&#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#x7F3A;&#x9677;&#xFF1A;</p>
<ol>
<li><strong>&#x4F9D;&#x8D56; Oracle Labels&#xFF08;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6CC4;&#x9732;&#xFF09;&#xFF1A;</strong> RCI &#x548C; Reflexion &#x7B49;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6B63;&#x786E;&#x6807;&#x7B7E;&#x6765;&#x63A7;&#x5236;&#x7EA0;&#x6B63;&#x5FAA;&#x73AF;&#x2014;&#x2014;&#x5982;&#x679C;&#x7B54;&#x6848;&#x5DF2;&#x7ECF;&#x6B63;&#x786E;&#xFF0C;&#x5C31;&#x8DF3;&#x8FC7;&#x7EA0;&#x6B63;&#x3002;&#x8FD9;&#x610F;&#x5473;&#x7740;&#x6A21;&#x578B;&#x53EA;&#x6709;&#x5728;&#x7B54;&#x9519;&#x65F6;&#x624D;&#x88AB;&#x8981;&#x6C42;&#x6539;&#x6B63;&#xFF0C;&#x800C;&#x5DF2;&#x7ECF;&#x7B54;&#x5BF9;&#x7684;&#x4E0D;&#x4F1A;&#x88AB;&quot;&#x6539;&#x574F;&quot;&#x3002;&#x53BB;&#x6389; Oracle &#x540E;&#xFF0C;&#x6027;&#x80FD;&#x7ACB;&#x523B;&#x5D29;&#x584C;&#x3002;</li>
<li><strong>&#x4E0D;&#x516C;&#x5E73;&#x7684;&#x57FA;&#x7EBF;&#x5BF9;&#x6BD4;&#xFF1A;</strong> Multi-Agent Debate &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x591A;&#x4E2A; LLM &#x5B9E;&#x4F8B;&#x4E92;&#x76F8;&quot;&#x8FA9;&#x8BBA;&quot;&#xFF0C;&#x770B;&#x4F3C;&#x901A;&#x8FC7;&#x8BA8;&#x8BBA;&#x6539;&#x8FDB;&#x4E86;&#x63A8;&#x7406;&#x3002;&#x4F46;&#x8BBA;&#x6587;&#x6307;&#x51FA;&#xFF0C;&#x5982;&#x679C;&#x62FF;&#x76F8;&#x540C;&#x6570;&#x91CF;&#x7684; LLM &#x8C03;&#x7528;&#x505A;&#x7B80;&#x5355;&#x7684; Self-Consistency&#xFF08;&#x591A;&#x6570;&#x6295;&#x7968;&#xFF09;&#xFF0C;&#x6548;&#x679C;&#x53CD;&#x800C;&#x66F4;&#x597D;&#x3002;&quot;&#x8FA9;&#x8BBA;&quot;&#x5E26;&#x6765;&#x7684;&#x63D0;&#x5347;&#x672C;&#x8D28;&#x4E0A;&#x6765;&#x81EA;&#x4E8E;&quot;&#x591A;&#x6B21;&#x91C7;&#x6837;&quot;&#xFF0C;&#x800C;&#x975E;&#x771F;&#x6B63;&#x7684;&quot;&#x7EA0;&#x9519;&quot;&#x3002;</li>
<li><strong>Prompt &#x8BBE;&#x8BA1;&#x4E0D;&#x5BF9;&#x7B49;&#xFF1A;</strong> Self-Refine &#x7B49;&#x5DE5;&#x4F5C;&#x5728;&#x521D;&#x59CB;&#x751F;&#x6210;&#x65F6;&#x4F7F;&#x7528;&#x4E86;&#x5F31; Prompt&#xFF0C;&#x7136;&#x540E;&#x5728;&#x53CD;&#x9988;&#x9636;&#x6BB5;&#x5F15;&#x5165;&#x4E86;&#x66F4;&#x8BE6;&#x7EC6;&#x7684;&#x4EFB;&#x52A1;&#x63CF;&#x8FF0;&#x3002;&#x63D0;&#x5347;&#x5B9E;&#x9645;&#x4E0A;&#x6765;&#x81EA;&#x4E8E;&#x66F4;&#x597D;&#x7684; Prompt&#xFF0C;&#x800C;&#x975E;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x673A;&#x5236;&#x3002;</li>
</ol>
<h2 id="&#x6838;&#x5FC3;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"><a href="#&#x6838;&#x5FC3;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;"></a>&#x6838;&#x5FC3;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;</h2>
<h3 id="&#x5E26; Oracle &#x7684;&#x81EA;&#x6211;&#x7EA0;&#x6B63; vs &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;"><a href="#&#x5E26; Oracle &#x7684;&#x81EA;&#x6211;&#x7EA0;&#x6B63; vs &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;"></a>&#x5E26; Oracle &#x7684;&#x81EA;&#x6211;&#x7EA0;&#x6B63; vs &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63;</h3>
<table>
<thead>
<tr>
<th>&#x6A21;&#x578B;</th>
<th>&#x65B9;&#x6CD5;</th>
<th>GSM8K</th>
<th>CommonSenseQA</th>
<th>HotpotQA</th>
</tr>
</thead>
<tbody>
<tr>
<td>GPT-3.5</td>
<td>&#x6807;&#x51C6; Prompting</td>
<td>75.9</td>
<td>75.8</td>
<td>26.0</td>
</tr>
<tr>
<td>GPT-3.5</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;Oracle&#xFF09;</td>
<td>84.3</td>
<td>89.7</td>
<td>29.0</td>
</tr>
<tr>
<td>GPT-3.5</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;&#x5185;&#x7701;&#xFF0C;&#x7B2C;1&#x8F6E;&#xFF09;</td>
<td>75.1</td>
<td>38.1</td>
<td>25.0</td>
</tr>
<tr>
<td>GPT-3.5</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;&#x5185;&#x7701;&#xFF0C;&#x7B2C;2&#x8F6E;&#xFF09;</td>
<td>74.7</td>
<td>41.8</td>
<td>25.0</td>
</tr>
<tr>
<td>GPT-4</td>
<td>&#x6807;&#x51C6; Prompting</td>
<td>95.5</td>
<td>82.0</td>
<td>49.0</td>
</tr>
<tr>
<td>GPT-4</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;Oracle&#xFF09;</td>
<td>97.5</td>
<td>85.5</td>
<td>59.0</td>
</tr>
<tr>
<td>GPT-4</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;&#x5185;&#x7701;&#xFF0C;&#x7B2C;1&#x8F6E;&#xFF09;</td>
<td>91.5</td>
<td>79.5</td>
<td>49.0</td>
</tr>
<tr>
<td>GPT-4</td>
<td>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF08;&#x5185;&#x7701;&#xFF0C;&#x7B2C;2&#x8F6E;&#xFF09;</td>
<td>89.0</td>
<td>80.0</td>
<td>43.0</td>
</tr>
</tbody>
</table>
<p>&#x7ED3;&#x679C;&#x975E;&#x5E38;&#x6E05;&#x6670;&#xFF1A;<strong>&#x6709; Oracle &#x65F6;&#x5927;&#x5E45;&#x63D0;&#x5347;&#xFF0C;&#x6CA1;&#x6709; Oracle &#x65F6;&#x5168;&#x7EBF;&#x4E0B;&#x964D;&#x3002;</strong></p>
<h3 id="Multi-Agent Debate vs Self-Consistency"><a href="#Multi-Agent Debate vs Self-Consistency"></a>Multi-Agent Debate vs Self-Consistency</h3>
<table>
<thead>
<tr>
<th>&#x65B9;&#x6CD5;</th>
<th>&#x54CD;&#x5E94;&#x6570;&#x91CF;</th>
<th>GSM8K</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6807;&#x51C6; Prompting</td>
<td>1</td>
<td>76.7</td>
</tr>
<tr>
<td>Self-Consistency</td>
<td>3</td>
<td>82.5</td>
</tr>
<tr>
<td>Multi-Agent Debate&#xFF08;&#x7B2C;1&#x8F6E;&#xFF09;</td>
<td>6</td>
<td>83.2</td>
</tr>
<tr>
<td>Self-Consistency</td>
<td>6</td>
<td>85.3</td>
</tr>
<tr>
<td>Multi-Agent Debate&#xFF08;&#x7B2C;2&#x8F6E;&#xFF09;</td>
<td>9</td>
<td>83.0</td>
</tr>
<tr>
<td>Self-Consistency</td>
<td>9</td>
<td>88.2</td>
</tr>
</tbody>
</table>
<p>&#x5728;&#x76F8;&#x540C;&#x63A8;&#x7406;&#x9884;&#x7B97;&#x4E0B;&#xFF0C;<strong>&#x7B80;&#x5355;&#x7684;&#x591A;&#x6570;&#x6295;&#x7968;&#x5168;&#x9762;&#x78BE;&#x538B;&quot;&#x8FA9;&#x8BBA;&quot;&#x673A;&#x5236;</strong>&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x8FD9;&#x6837;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x8FD9;&#x6837;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4F1A;&#x8FD9;&#x6837;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x7ED9;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x76F4;&#x89C9;&#x6027;&#x7684;&#x89E3;&#x91CA;&#xFF1A;</p>
<blockquote>
<p>&#x5982;&#x679C;&#x6A21;&#x578B;&#x5DF2;&#x7ECF;&#x4E0E;&#x826F;&#x597D;&#x7684; Prompt &#x5BF9;&#x9F50;&#xFF0C;&#x90A3;&#x4E48;&#x521D;&#x59CB;&#x54CD;&#x5E94;&#x5DF2;&#x7ECF;&#x662F;&#x8BE5; Prompt &#x548C;&#x89E3;&#x7801;&#x7B56;&#x7565;&#x4E0B;&#x7684;&#x6700;&#x4F18;&#x8F93;&#x51FA;&#x3002;&#x5F15;&#x5165;&quot;&#x53CD;&#x9988;&quot; Prompt &#x76F8;&#x5F53;&#x4E8E;&#x6DFB;&#x52A0;&#x4E86;&#x4E00;&#x4E2A;&#x989D;&#x5916;&#x7684;&#x8F93;&#x5165;&#x6270;&#x52A8;&#xFF0C;&#x8FD9;&#x4E2A;&#x6270;&#x52A8;&#x4E0D;&#x4E00;&#x5B9A;&#x5305;&#x542B;&#x6709;&#x52A9;&#x4E8E;&#x56DE;&#x7B54;&#x95EE;&#x9898;&#x7684;&#x65B0;&#x4FE1;&#x606F;&#xFF0C;&#x53CD;&#x800C;&#x53EF;&#x80FD;&#x5C06;&#x6A21;&#x578B;&#x4ECE;&#x6700;&#x4F18;&#x54CD;&#x5E94;&#x4E0A;&quot;&#x62FD;&#x504F;&quot;&#x3002;</p>
</blockquote>
<p>&#x5177;&#x4F53;&#x8868;&#x73B0;&#x4E3A;&#xFF1A;</p>
<ul>
<li><strong>&#x6B63;&#x786E;&#x2192;&#x9519;&#x8BEF;&#x7684;&#x6982;&#x7387; &gt; &#x9519;&#x8BEF;&#x2192;&#x6B63;&#x786E;&#x7684;&#x6982;&#x7387;&#xFF1A;</strong> &#x5728; GSM8K &#x4E0A;&#xFF0C;GPT-3.5 &#x7ECF;&#x8FC7;&#x4E24;&#x8F6E;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x540E;&#xFF0C;74.7% &#x7684;&#x7B54;&#x6848;&#x4FDD;&#x6301;&#x4E0D;&#x53D8;&#xFF1B;&#x5728;&#x6539;&#x53D8;&#x7684;&#x7B54;&#x6848;&#x4E2D;&#xFF0C;&#x4ECE;&#x5BF9;&#x6539;&#x6210;&#x9519;&#x7684;&#x6BD4;&#x4F8B;&#x8FDC;&#x9AD8;&#x4E8E;&#x4ECE;&#x9519;&#x6539;&#x6210;&#x5BF9;&#x7684;&#x6BD4;&#x4F8B;&#x3002;</li>
<li><strong>CommonSenseQA &#x7684;&quot;&#x8BF1;&#x5BFC;&#x6548;&#x5E94;&quot;&#xFF1A;</strong> &#x9009;&#x62E9;&#x9898;&#x7684;&#x5E72;&#x6270;&#x9879;&#x672C;&#x8EAB;&#x5C31;&#x5177;&#x6709;&#x4E00;&#x5B9A;&#x7684;&#x5408;&#x7406;&#x6027;&#x3002;&#x81EA;&#x6211;&#x7EA0;&#x6B63; Prompt &#x76F8;&#x5F53;&#x4E8E;&#x5728;&#x6697;&#x793A;&quot;&#x4F60;&#x53EF;&#x80FD;&#x7B54;&#x9519;&#x4E86;&quot;&#xFF0C;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x503E;&#x5411;&#x4E8E;&#x66F4;&#x6362;&#x7B54;&#x6848;&#xFF0C;&#x4F46;&#x66F4;&#x6362;&#x540E;&#x66F4;&#x53EF;&#x80FD;&#x9009;&#x5230;&#x5E72;&#x6270;&#x9879;&#x3002;</li>
</ul>
<h2 id="&#x4EC0;&#x4E48;&#x65F6;&#x5019; Self-Correction &#x662F;&#x6709;&#x6548;&#x7684;&#xFF1F;"><a href="#&#x4EC0;&#x4E48;&#x65F6;&#x5019; Self-Correction &#x662F;&#x6709;&#x6548;&#x7684;&#xFF1F;"></a>&#x4EC0;&#x4E48;&#x65F6;&#x5019; Self-Correction &#x662F;&#x6709;&#x6548;&#x7684;&#xFF1F;</h2>
<p>&#x8BBA;&#x6587;&#x5E76;&#x975E;&#x5168;&#x76D8;&#x5426;&#x5B9A;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF0C;&#x800C;&#x662F;&#x6307;&#x51FA;&#x5B83;&#x5728;&#x4EE5;&#x4E0B;&#x573A;&#x666F;&#x53EF;&#x4EE5;&#x6709;&#x6548;&#x5DE5;&#x4F5C;&#xFF1A;</p>
<ul>
<li><strong>&#x6709;&#x9AD8;&#x8D28;&#x91CF;&#x5916;&#x90E8;&#x53CD;&#x9988;&#x65F6;&#xFF1A;</strong> &#x4F8B;&#x5982;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x8FD0;&#x884C;&#x4EE3;&#x7801;&#x5E76;&#x83B7;&#x5F97;&#x7F16;&#x8BD1;&#x5668;/&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#x7684;&#x53CD;&#x9988;&#x2014;&#x2014;&#x8FD9;&#x4E0D;&#x662F;&quot;&#x5185;&#x7701;&quot;&#xFF0C;&#x800C;&#x662F;&quot;&#x6709;&#x636E;&#x53EF;&#x67E5;&#x7684;&#x6539;&#x9519;&quot;&#x3002;</li>
<li><strong>&#x4EFB;&#x52A1;&#x76EE;&#x6807;&#x53EF;&#x673A;&#x68B0;&#x9A8C;&#x8BC1;&#x65F6;&#xFF1A;</strong> &#x5982;&quot;&#x751F;&#x6210;&#x7684;&#x53E5;&#x5B50;&#x5FC5;&#x987B;&#x5305;&#x542B;&#x6240;&#x6709;&#x7ED9;&#x5B9A;&#x5173;&#x952E;&#x8BCD;&quot;&#x2014;&#x2014;&#x8FD9;&#x7C7B;&#x7EA6;&#x675F;&#x53EF;&#x4EE5;&#x88AB;&#x7A0B;&#x5E8F;&#x5316;&#x68C0;&#x67E5;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x636E;&#x6B64;&#x771F;&#x6B63;&#x4FEE;&#x6B63;&#x3002;</li>
<li><strong>&#x504F;&#x597D;&#x5BF9;&#x9F50;&#x4EFB;&#x52A1;&#xFF1A;</strong> &#x5982;&#x8BA9;&#x56DE;&#x590D;&#x66F4;&#x5B89;&#x5168;&#x3001;&#x66F4;&#x793C;&#x8C8C;&#x2014;&#x2014;&#x56E0;&#x4E3A; LLM &#x786E;&#x5B9E;&#x53EF;&#x4EE5;&#x8F83;&#x597D;&#x5730;&#x5224;&#x65AD;&#x6587;&#x672C;&#x7684;&#x98CE;&#x683C;&#x548C;&#x5B89;&#x5168;&#x6027;&#xFF0C;&#x4F46;&#x5B83;&#x65E0;&#x6CD5;&#x53EF;&#x9760;&#x5730;&#x5224;&#x65AD;&#x63A8;&#x7406;&#x7684;&#x6B63;&#x786E;&#x6027;&#x3002;</li>
</ul>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63; (Intrinsic Self-Correction)"><a href="#1. &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63; (Intrinsic Self-Correction)"></a>1. &#x5185;&#x7701;&#x5F0F;&#x81EA;&#x6211;&#x7EA0;&#x6B63; (Intrinsic Self-Correction)</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> LLM &#x4EC5;&#x51ED;&#x81EA;&#x8EAB;&#x80FD;&#x529B;&#xFF08;&#x4E0D;&#x501F;&#x52A9;&#x4EFB;&#x4F55;&#x5916;&#x90E8;&#x4FE1;&#x606F;&#x6E90;&#xFF09;&#x6765;&#x5BA1;&#x89C6;&#x5E76;&#x4FEE;&#x6B63;&#x5176;&#x521D;&#x59CB;&#x56DE;&#x7B54;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x8FD9;&#x662F;&quot;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&quot;&#x6982;&#x5FF5;&#x4E2D;&#x6700;&#x7406;&#x60F3;&#x5316;&#x7684;&#x5F62;&#x6001;&#x2014;&#x2014;&#x6A21;&#x578B;&#x771F;&#x7684;&#x80FD;&quot;&#x81EA;&#x77E5;&#x5176;&#x9519;&quot;&#x3002;&#x4F46;&#x5B9E;&#x9A8C;&#x8BC1;&#x660E;&#xFF0C;&#x5F53;&#x524D; LLM &#x505A;&#x4E0D;&#x5230;&#x8FD9;&#x4E00;&#x70B9;&#x3002;</li>
<li><strong>&#x6839;&#x672C;&#x77DB;&#x76FE;&#xFF1A;</strong> &#x5982;&#x679C;&#x6A21;&#x578B;&#x5185;&#x90E8;&#x7684;&quot;&#x5BA1;&#x67E5;&#x5458;&quot;&#x548C;&quot;&#x751F;&#x6210;&#x8005;&quot;&#x7528;&#x7684;&#x662F;&#x540C;&#x4E00;&#x5957;&#x77E5;&#x8BC6;&#x548C;&#x63A8;&#x7406;&#x80FD;&#x529B;&#xFF0C;&#x5BA1;&#x67E5;&#x5458;&#x5C31;&#x65E0;&#x6CD5;&#x8D85;&#x8D8A;&#x751F;&#x6210;&#x8005;&#x7684;&#x80FD;&#x529B;&#x8FB9;&#x754C;&#x3002;</li>
</ul>
<h3 id="2. Oracle Labels&#xFF08;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6807;&#x7B7E;&#xFF09;"><a href="#2. Oracle Labels&#xFF08;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6807;&#x7B7E;&#xFF09;"></a>2. Oracle Labels&#xFF08;&#x6B63;&#x786E;&#x7B54;&#x6848;&#x6807;&#x7B7E;&#xFF09;</h3>
<ul>
<li><strong>&#x5728;&#x5B9E;&#x9A8C;&#x4E2D;&#x7684;&#x4F5C;&#x7528;&#xFF1A;</strong> &#x63A7;&#x5236;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x7684;&#x5FAA;&#x73AF;&#x2014;&#x2014;&#x53EA;&#x5728;&#x6A21;&#x578B;&#x7B54;&#x9519;&#x65F6;&#x89E6;&#x53D1;&#x7EA0;&#x6B63;&#xFF0C;&#x7B54;&#x5BF9;&#x65F6;&#x4FDD;&#x6301;&#x539F;&#x7B54;&#x6848;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x662F;&#x4F5C;&#x5F0A;&#xFF1A;</strong> &#x5728;&#x771F;&#x5B9E;&#x5E94;&#x7528;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x4E0D;&#x53EF;&#x80FD;&#x4E8B;&#x5148;&#x77E5;&#x9053;&#x7B54;&#x6848;&#x5BF9;&#x4E0D;&#x5BF9;&#x3002;&#x4F9D;&#x8D56; Oracle &#x7684;&#x5B9E;&#x9A8C;&#x7ED3;&#x679C;&#x4E0D;&#x5177;&#x5907;&#x4EFB;&#x4F55;&#x5B9E;&#x9645;&#x6307;&#x5BFC;&#x610F;&#x4E49;&#x3002;</li>
<li><strong>&#x63ED;&#x793A;&#x7684;&#x771F;&#x76F8;&#xFF1A;</strong> Oracle Self-Correction &#x6709;&#x6548; = &quot;&#x6A21;&#x578B;&#x6709;&#x65F6;&#x80FD;&#x4ECE;&#x9519;&#x6539;&#x4E3A;&#x5BF9;&quot; + &quot;&#x6211;&#x4EEC;&#x4EBA;&#x4E3A;&#x963B;&#x6B62;&#x4E86;&#x6A21;&#x578B;&#x4ECE;&#x5BF9;&#x6539;&#x4E3A;&#x9519;&quot;&#x3002;&#x53BB;&#x6389;&#x7B2C;&#x4E8C;&#x4E2A;&#x6761;&#x4EF6;&#xFF0C;&#x6548;&#x679C;&#x7ACB;&#x523B;&#x53CD;&#x8F6C;&#x3002;</li>
</ul>
<h3 id="3. Self-Consistency&#xFF08;&#x81EA;&#x6211;&#x4E00;&#x81F4;&#x6027;&#xFF09;"><a href="#3. Self-Consistency&#xFF08;&#x81EA;&#x6211;&#x4E00;&#x81F4;&#x6027;&#xFF09;"></a>3. Self-Consistency&#xFF08;&#x81EA;&#x6211;&#x4E00;&#x81F4;&#x6027;&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x8BA9; LLM &#x5BF9;&#x540C;&#x4E00;&#x95EE;&#x9898;&#x751F;&#x6210;&#x591A;&#x4E2A;&#x56DE;&#x7B54;&#xFF0C;&#x7136;&#x540E;&#x901A;&#x8FC7;&#x591A;&#x6570;&#x6295;&#x7968;&#x9009;&#x51FA;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x3002;</li>
<li><strong>&#x4F18;&#x52BF;&#xFF1A;</strong> &#x7B80;&#x5355;&#x3001;&#x6709;&#x6548;&#x3001;&#x4E0D;&#x9700;&#x8981;&#x989D;&#x5916;&#x7684; Prompt &#x5DE5;&#x7A0B;&#x3002;</li>
<li><strong>&#x8BBA;&#x6587;&#x7684;&#x5173;&#x952E;&#x53D1;&#x73B0;&#xFF1A;</strong> &#x5728;&#x76F8;&#x540C;&#x7684;&#x63A8;&#x7406;&#x9884;&#x7B97;&#xFF08;LLM &#x8C03;&#x7528;&#x6B21;&#x6570;&#xFF09;&#x4E0B;&#xFF0C;Self-Consistency &#x59CB;&#x7EC8;&#x4F18;&#x4E8E; Multi-Agent Debate &#x548C; Self-Correction&#x3002;&#x8FD9;&#x8BF4;&#x660E;**&quot;&#x591A;&#x91C7;&#x6837; + &#x6295;&#x7968;&quot;&#x6BD4;&quot;&#x91C7;&#x6837; + &#x53CD;&#x601D; + &#x91CD;&#x5199;&quot;&#x66F4;&#x53EF;&#x9760;**&#x3002;</li>
</ul>
<h3 id="4. Prompt &#x8BBE;&#x8BA1;&#x4E0D;&#x5BF9;&#x7B49; (Prompt Design Asymmetry)"><a href="#4. Prompt &#x8BBE;&#x8BA1;&#x4E0D;&#x5BF9;&#x7B49; (Prompt Design Asymmetry)"></a>4. Prompt &#x8BBE;&#x8BA1;&#x4E0D;&#x5BF9;&#x7B49; (Prompt Design Asymmetry)</h3>
<ul>
<li><strong>&#x95EE;&#x9898;&#x63CF;&#x8FF0;&#xFF1A;</strong> &#x5728; Self-Refine &#x7684;&#x5B9E;&#x9A8C;&#x4E2D;&#xFF0C;&#x521D;&#x59CB;&#x751F;&#x6210;&#x7684; Prompt &#x6545;&#x610F;&#x4E0D;&#x5305;&#x542B;&#x5B8C;&#x6574;&#x7684;&#x4EFB;&#x52A1;&#x8981;&#x6C42;&#xFF08;&#x5982;&#x6CA1;&#x6709;&#x660E;&#x786E;&#x8BF4;&quot;&#x5FC5;&#x987B;&#x5305;&#x542B;&#x6240;&#x6709;&#x6982;&#x5FF5;&#x8BCD;&quot;&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x5728;&#x53CD;&#x9988;&#x9636;&#x6BB5;&#x8865;&#x5145;&#x8FD9;&#x4E9B;&#x8981;&#x6C42;&#x3002;</li>
<li><strong>&#x540E;&#x679C;&#xFF1A;</strong> &#x6240;&#x8C13;&#x7684;&quot;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x63D0;&#x5347;&quot;&#x5B9E;&#x9645;&#x4E0A;&#x662F;&quot;&#x66F4;&#x597D;&#x7684; Prompt &#x5E26;&#x6765;&#x7684;&#x63D0;&#x5347;&quot;&#x3002;&#x5F53;&#x628A;&#x5B8C;&#x6574;&#x7684;&#x6307;&#x4EE4;&#x76F4;&#x63A5;&#x653E;&#x5728;&#x521D;&#x59CB; Prompt &#x4E2D;&#x65F6;&#xFF0C;&#x4E0D;&#x4EC5;&#x4E0D;&#x9700;&#x8981;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#xFF0C;&#x6548;&#x679C;&#x8FD8;&#x66F4;&#x597D;&#xFF08;81.8% vs 67.0%&#xFF09;&#x3002;</li>
<li><strong>&#x542F;&#x793A;&#xFF1A;</strong> &#x8BC4;&#x4F30; Self-Correction &#x65F6;&#xFF0C;&#x5FC5;&#x987B;&#x5BF9;&#x521D;&#x59CB;&#x751F;&#x6210;&#x548C;&#x7EA0;&#x6B63;&#x9636;&#x6BB5;&#x6295;&#x5165;&#x540C;&#x7B49;&#x7684; Prompt &#x8BBE;&#x8BA1;&#x7CBE;&#x529B;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;Generation &#x2260; Verification&#xFF0C;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#x7684;&#x9002;&#x7528;&#x8FB9;&#x754C;"><a href="#&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;Generation &#x2260; Verification&#xFF0C;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#x7684;&#x9002;&#x7528;&#x8FB9;&#x754C;"></a>&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;Generation &#x2260; Verification&#xFF0C;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#x7684;&#x9002;&#x7528;&#x8FB9;&#x754C;</h2>
<p>&#x8BBA;&#x6587;&#x7684;&#x6838;&#x5FC3;&#x53D1;&#x73B0;&#x2014;&#x2014;&quot;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x65E0;&#x6548;&quot;&#x2014;&#x2014;&#x662F;&#x5426;&#x53EF;&#x4EE5;&#x65E0;&#x6761;&#x4EF6;&#x63A8;&#x5E7F;&#x5230;&#x6240;&#x6709;&#x573A;&#x666F;&#xFF1F;&#x7B54;&#x6848;&#x662F;<strong>&#x4E0D;&#x80FD;</strong>&#x3002;&#x5173;&#x952E;&#x53D8;&#x91CF;&#x5728;&#x4E8E;&#xFF1A;<strong>&#x751F;&#x6210;&#x4EFB;&#x52A1;&#x548C;&#x9A8C;&#x8BC1;&#x4EFB;&#x52A1;&#x7684;&#x96BE;&#x5EA6;&#x5DEE;&#x8DDD;&#xFF0C;&#x4EE5;&#x53CA;&#x662F;&#x5426;&#x5B58;&#x5728;&#x53EF;&#x8FFD;&#x6EAF;&#x7684;&#x5916;&#x90E8;&#x53C2;&#x7167;&#x7269;&#x3002;</strong></p>
<h3 id="&#x8BBA;&#x6587;&#x5B9E;&#x9A8C;&#x7684;&#x7279;&#x6B8A;&#x6027;"><a href="#&#x8BBA;&#x6587;&#x5B9E;&#x9A8C;&#x7684;&#x7279;&#x6B8A;&#x6027;"></a>&#x8BBA;&#x6587;&#x5B9E;&#x9A8C;&#x7684;&#x7279;&#x6B8A;&#x6027;</h3>
<p>&#x8BBA;&#x6587;&#x6D4B;&#x8BD5;&#x7684;&#x4E09;&#x4E2A; Benchmark&#xFF08;GSM8K&#x3001;CommonSenseQA&#x3001;HotpotQA&#xFF09;&#x6709;&#x4E00;&#x4E2A;&#x5171;&#x540C;&#x7279;&#x5F81;&#xFF1A;<strong>&#x9A8C;&#x8BC1;&#x548C;&#x751F;&#x6210;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;</strong>&#x3002;</p>
<ul>
<li>&#x68C0;&#x67E5;&#x4E00;&#x9053;&#x6570;&#x5B66;&#x9898;&#x7684;&#x89E3;&#x6CD5;&#x662F;&#x5426;&#x6B63;&#x786E; &#x2248; &#x91CD;&#x65B0;&#x505A;&#x4E00;&#x904D;&#x8FD9;&#x9053;&#x9898;</li>
<li>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5E38;&#x8BC6;&#x9009;&#x9879;&#x5BF9;&#x4E0D;&#x5BF9; &#x2248; &#x91CD;&#x65B0;&#x505A;&#x4E00;&#x904D;&#x5E38;&#x8BC6;&#x63A8;&#x7406;</li>
<li>&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&quot;&#x5916;&#x90E8;&#x5B9E;&#x4F53;&quot;&#x53EF;&#x4F9B;&#x5BF9;&#x7167;&#x2014;&#x2014;&#x6A21;&#x578B;&#x53EA;&#x80FD;&#x7528;&#x540C;&#x4E00;&#x5957;&#x77E5;&#x8BC6;&#x53BB;&quot;&#x81EA;&#x5DF1;&#x67E5;&#x81EA;&#x5DF1;&quot;</li>
</ul>
<p>&#x5728;&#x8FD9;&#x79CD;&quot;&#x751F;&#x6210;&#x96BE;&#x5EA6; &#x2248; &#x9A8C;&#x8BC1;&#x96BE;&#x5EA6;&quot;&#x4E14;&quot;&#x65E0;&#x5916;&#x90E8;&#x53C2;&#x7167;&quot;&#x7684;&#x8BBE;&#x5B9A;&#x4E0B;&#xFF0C;&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x786E;&#x5B9E;&#x4F1A;&#x9000;&#x5316;&#x4E3A;&#x540C;&#x4E00;&#x80FD;&#x529B;&#x7684;&#x91CD;&#x590D;&#x8C03;&#x7528;&#xFF0C;&#x8BBA;&#x6587;&#x7684;&#x7ED3;&#x8BBA;&#x5B8C;&#x5168;&#x6210;&#x7ACB;&#x3002;</p>
<h3 id="&#x4F46;&#x5F88;&#x591A;&#x5B9E;&#x9645;&#x573A;&#x666F;&#x5E76;&#x975E;&#x5982;&#x6B64;"><a href="#&#x4F46;&#x5F88;&#x591A;&#x5B9E;&#x9645;&#x573A;&#x666F;&#x5E76;&#x975E;&#x5982;&#x6B64;"></a>&#x4F46;&#x5F88;&#x591A;&#x5B9E;&#x9645;&#x573A;&#x666F;&#x5E76;&#x975E;&#x5982;&#x6B64;</h3>
<p>&#x4EE5; <strong>Code Review</strong> &#x4E3A;&#x4F8B;&#xFF0C;&#x8003;&#x8651;&#x4E24;&#x6B65;&#x6D41;&#x7A0B;&#xFF1A;</p>
<ol>
<li><strong>Step 1&#xFF08;&#x53D1;&#x73B0;&#xFF09;</strong>&#xFF1A;&#x5728; 500 &#x884C;&#x4EE3;&#x7801;&#x4E2D;&#x626B;&#x63CF;&#x6240;&#x6709;&#x6F5C;&#x5728;&#x95EE;&#x9898;&#x2014;&#x2014;&#x5E7F;&#x5EA6;&#x641C;&#x7D22;&#x3001;&#x521B;&#x9020;&#x6027;&#x4EFB;&#x52A1;</li>
<li><strong>Step 2&#xFF08;&#x5224;&#x5B9A;&#xFF09;</strong>&#xFF1A;&quot;&#x7B2C; 42 &#x884C;&#x662F;&#x5426;&#x771F;&#x7684;&#x5B58;&#x5728;&#x7A7A;&#x6307;&#x9488;&#x89E3;&#x5F15;&#x7528;&#xFF1F;&#x8BF7;&#x8FFD;&#x8E2A;&#x6267;&#x884C;&#x8DEF;&#x5F84;&quot;&#x2014;&#x2014;&#x7A84;&#x805A;&#x7126;&#x3001;&#x5206;&#x6790;&#x6027;&#x4EFB;&#x52A1;</li>
</ol>
<p>&#x8FD9;&#x4E24;&#x6B65;&#x6FC0;&#x6D3B;&#x7684;&#x662F;<strong>&#x4E0D;&#x540C;&#x7684;&#x80FD;&#x529B;&#x56DE;&#x8DEF;</strong>&#x3002;&#x8BA1;&#x7B97;&#x590D;&#x6742;&#x5EA6;&#x7406;&#x8BBA;&#x4E2D; P vs NP &#x7684;&#x7CBE;&#x795E;&#x5728;&#x6B64;&#x9002;&#x7528;&#xFF1A;<strong>&#x627E;&#x5230;&#x7B54;&#x6848;&#x5F88;&#x96BE;&#xFF0C;&#x4F46;&#x9A8C;&#x8BC1;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7B54;&#x6848;&#x5F80;&#x5F80;&#x5BB9;&#x6613;&#x5F97;&#x591A;</strong>&#x3002;&#x66F4;&#x91CD;&#x8981;&#x7684;&#x662F;&#xFF0C;&#x4EE3;&#x7801;&#x672C;&#x8EAB;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x5916;&#x90E8;&#x7684;&#x3001;&#x53EF;&#x8FFD;&#x6EAF;&#x7684;&#x5B9E;&#x4F53;&#x59CB;&#x7EC8;&#x5B58;&#x5728;&#x4E8E;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#x2014;&#x2014;Step 2 &#x4E0D;&#x662F;&#x7EAF;&#x7CB9;&#x7684;&quot;&#x5185;&#x7701;&quot;&#xFF0C;&#x800C;&#x662F;&quot;&#x5BF9;&#x7167;&#x4EE3;&#x7801;&#x505A;&#x5B9A;&#x5411;&#x5206;&#x6790;&quot;&#x3002;</p>
<h3 id="&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x6709;&#x6548;&#x6027;&#x7684;&#x51B3;&#x5B9A;&#x516C;&#x5F0F;"><a href="#&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x6709;&#x6548;&#x6027;&#x7684;&#x51B3;&#x5B9A;&#x516C;&#x5F0F;"></a>&#x81EA;&#x6211;&#x7EA0;&#x6B63;&#x6709;&#x6548;&#x6027;&#x7684;&#x51B3;&#x5B9A;&#x516C;&#x5F0F;</h3>
<blockquote>
<p><strong>Self-Correction &#x6709;&#x6548;&#x6027; &#x221D; (&#x9A8C;&#x8BC1;&#x4E0E;&#x751F;&#x6210;&#x7684;&#x96BE;&#x5EA6;&#x5DEE;&#x8DDD;) &#xD7; (&#x5916;&#x90E8;&#x53C2;&#x7167;&#x7269;&#x7684;&#x53EF;&#x7528;&#x7A0B;&#x5EA6;)</strong></p>
</blockquote>
<p>&#x6309;&#x8FD9;&#x4E2A;&#x6846;&#x67B6;&#xFF0C;&#x4E0D;&#x540C;&#x573A;&#x666F;&#x7684;&#x9884;&#x671F;&#x6548;&#x679C;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x573A;&#x666F;</th>
<th>&#x751F;&#x6210;&#x96BE;&#x5EA6;</th>
<th>&#x9A8C;&#x8BC1;&#x96BE;&#x5EA6;</th>
<th>&#x6709;&#x5916;&#x90E8;&#x53C2;&#x7167;&#xFF1F;</th>
<th>&#x81EA;&#x6211;&#x5BA1;&#x67E5;&#x6709;&#x6548;&#xFF1F;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6570;&#x5B66;&#x63A8;&#x7406;&#x7EA0;&#x9519;</td>
<td>&#x9AD8;</td>
<td><strong>&#x540C;&#x6837;&#x9AD8;</strong>&#xFF08;&#x91CD;&#x65B0;&#x7B97;&#x4E00;&#x904D;&#xFF09;</td>
<td>&#x65E0;</td>
<td><strong>&#x65E0;&#x6548;</strong>&#xFF08;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#xFF09;</td>
</tr>
<tr>
<td>&#x5E38;&#x8BC6;&#x95EE;&#x7B54;&#x7EA0;&#x9519;</td>
<td>&#x4E2D;</td>
<td><strong>&#x540C;&#x6837;&#x4E2D;</strong></td>
<td>&#x65E0;</td>
<td><strong>&#x65E0;&#x6548;</strong>&#xFF08;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#xFF09;</td>
</tr>
<tr>
<td>Code Review&#xFF1A;&#x7A7A;&#x6307;&#x9488;/&#x8D8A;&#x754C;</td>
<td>&#x9AD8;&#xFF08;&#x5E7F;&#x5EA6;&#x626B;&#x63CF;&#xFF09;</td>
<td><strong>&#x4F4E;&#xFF08;&#x8FFD;&#x8E2A;&#x5177;&#x4F53;&#x8DEF;&#x5F84;&#xFF09;</strong></td>
<td>&#x6709;&#xFF08;&#x4EE3;&#x7801;&#xFF09;</td>
<td><strong>&#x5F88;&#x53EF;&#x80FD;&#x6709;&#x6548;</strong></td>
</tr>
<tr>
<td>Code Review&#xFF1A;&#x7ADE;&#x6001;&#x6761;&#x4EF6;</td>
<td>&#x5F88;&#x9AD8;</td>
<td>&#x9AD8;</td>
<td>&#x6709;&#x4F46;&#x96BE;&#x8FFD;&#x8E2A;</td>
<td>&#x6548;&#x679C;&#x6709;&#x9650;</td>
</tr>
<tr>
<td>Code Review&#xFF1A;&quot;&#x51FD;&#x6570;&#x592A;&#x957F;&quot;</td>
<td>&#x4F4E;</td>
<td><strong>&#x540C;&#x6837;&#x4E3B;&#x89C2;</strong></td>
<td>&#x65E0;&#x5BA2;&#x89C2;&#x6807;&#x51C6;</td>
<td>&#x5927;&#x6982;&#x7387;&#x65E0;&#x6548;</td>
</tr>
<tr>
<td>&#x4EE3;&#x7801;&#x751F;&#x6210; + &#x6D4B;&#x8BD5;&#x53CD;&#x9988;</td>
<td>&#x9AD8;</td>
<td><strong>&#x4F4E;&#xFF08;&#x8DD1;&#x6D4B;&#x8BD5;&#x5373;&#x53EF;&#xFF09;</strong></td>
<td>&#x6709;&#xFF08;&#x7F16;&#x8BD1;&#x5668;/&#x6D4B;&#x8BD5;&#xFF09;</td>
<td><strong>&#x975E;&#x5E38;&#x6709;&#x6548;</strong></td>
</tr>
</tbody>
</table>
<h3 id="&#x5B9E;&#x8DF5;&#x542F;&#x793A;"><a href="#&#x5B9E;&#x8DF5;&#x542F;&#x793A;"></a>&#x5B9E;&#x8DF5;&#x542F;&#x793A;</h3>
<ol>
<li><strong>&#x4E0D;&#x8981;&#x56E0;&#x4E3A;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#x5C31;&#x653E;&#x5F03;&#x6240;&#x6709; self-review &#x673A;&#x5236;</strong>&#x2014;&#x2014;&#x5F53;&#x9A8C;&#x8BC1;&#x660E;&#x663E;&#x6BD4;&#x751F;&#x6210;&#x7B80;&#x5355;&#x3001;&#x4E14;&#x6709;&#x5177;&#x4F53;&#x4EE3;&#x7801;/&#x6570;&#x636E;&#x53EF;&#x4F9B;&#x8FFD;&#x6EAF;&#x65F6;&#xFF0C;&#x4E8C;&#x8F6E;&#x5BA1;&#x67E5;&#x662F;&#x6709;&#x6B63;&#x5411;&#x6536;&#x76CA;&#x7684;&#x3002;</li>
<li><strong>&#x5BF9;&#x7EAF;&#x63A8;&#x7406;&#x4EFB;&#x52A1;&#x4FDD;&#x6301;&#x8B66;&#x60D5;</strong>&#x2014;&#x2014;&#x6570;&#x5B66;&#x3001;&#x903B;&#x8F91;&#x3001;&#x5F00;&#x653E;&#x6027;&#x5224;&#x65AD;&#x7B49;&#x573A;&#x666F;&#x4E2D;&#xFF0C;&#x8BBA;&#x6587;&#x7684;&#x8B66;&#x544A;&#x5B8C;&#x5168;&#x9002;&#x7528;&#xFF0C;&#x591A;&#x91C7;&#x6837; + &#x6295;&#x7968;&#xFF08;Self-Consistency&#xFF09;&#x662F;&#x66F4;&#x53EF;&#x9760;&#x7684;&#x7B56;&#x7565;&#x3002;</li>
<li><strong>Prompt &#x8BBE;&#x8BA1;&#x51B3;&#x5B9A;&#x6210;&#x8D25;</strong>&#x2014;&#x2014;&#x5373;&#x4F7F;&#x5728; self-review &#x6709;&#x6548;&#x7684;&#x573A;&#x666F;&#x4E2D;&#xFF0C;&quot;&#x8BF7;&#x9A8C;&#x8BC1;&#x7B2C; 42 &#x884C;&#x7684;&#x6267;&#x884C;&#x8DEF;&#x5F84;&quot;&#x8FDC;&#x4F18;&#x4E8E;&quot;&#x4F60;&#x89C9;&#x5F97;&#x4F60;&#x8BF4;&#x7684;&#x5BF9;&#x5417;&#xFF1F;&quot;&#x3002;&#x524D;&#x8005;&#x5F15;&#x5BFC;&#x5B9A;&#x5411;&#x5206;&#x6790;&#xFF0C;&#x540E;&#x8005;&#x8BF1;&#x5BFC;&#x8C04;&#x5A9A;&#x5F0F;&#x81EA;&#x6211;&#x5426;&#x5B9A;&#x3002;</li>
</ol>
<hr>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7ED9; LLM &#x793E;&#x533A;&#x7684;&#x6838;&#x5FC3;&#x8B66;&#x793A;&#x662F;&#xFF1A;</p>
<ol>
<li><strong>&#x4E0D;&#x8981;&#x8FF7;&#x4FE1;&quot;&#x81EA;&#x6211;&#x53CD;&#x601D;&quot;&#xFF1A;</strong> &#x6CA1;&#x6709;&#x5916;&#x90E8;&#x53CD;&#x9988;&#xFF0C;LLM &#x76EE;&#x524D;&#x65E0;&#x6CD5;&#x6539;&#x8FDB;&#x81EA;&#x5DF1;&#x7684;&#x63A8;&#x7406;&#x3002;&#x8BA9;&#x6A21;&#x578B;&quot;&#x518D;&#x60F3;&#x60F3;&quot;&#x4E0D;&#x4F46;&#x6CA1;&#x7528;&#xFF0C;&#x53CD;&#x800C;&#x53EF;&#x80FD;&#x628A;&#x5BF9;&#x7684;&#x6539;&#x6210;&#x9519;&#x7684;&#x3002;</li>
<li><strong>&#x8B66;&#x60D5;&#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#x4E2D;&#x7684;&#x6F0F;&#x6D1E;&#xFF1A;</strong> Oracle Labels&#x3001;&#x4E0D;&#x516C;&#x5E73;&#x7684;&#x57FA;&#x7EBF;&#x5BF9;&#x6BD4;&#x3001;Prompt &#x4E0D;&#x5BF9;&#x7B49;&#x2014;&#x2014;&#x8FD9;&#x4E09;&#x4E2A;&#x95EE;&#x9898;&#x5728;&#x5F53;&#x65F6;&#x7684; Self-Correction &#x6587;&#x732E;&#x4E2D;&#x975E;&#x5E38;&#x666E;&#x904D;&#x3002;</li>
<li><strong>Self-Consistency &gt; Self-Correction&#xFF1A;</strong> &#x5982;&#x679C;&#x4F60;&#x6709;&#x989D;&#x5916;&#x7684;&#x63A8;&#x7406;&#x9884;&#x7B97;&#xFF0C;&#x591A;&#x91C7;&#x6837; + &#x6295;&#x7968;&#x6BD4;&#x53CD;&#x601D; + &#x91CD;&#x5199;&#x66F4;&#x5212;&#x7B97;&#x3002;</li>
<li><strong>&#x5916;&#x90E8;&#x53CD;&#x9988;&#x624D;&#x662F;&#x5173;&#x952E;&#xFF1A;</strong> &#x771F;&#x6B63;&#x6709;&#x6548;&#x7684;&quot;&#x7EA0;&#x6B63;&quot;&#x6765;&#x81EA;&#x4E8E;&#x4E0E;&#x73AF;&#x5883;&#x7684;&#x4EA4;&#x4E92;&#xFF08;&#x5982;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x3001;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x3001;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;&#xFF09;&#xFF0C;&#x800C;&#x975E;&#x6A21;&#x578B;&#x7684;&#x81EA;&#x6211;&#x5BA1;&#x89C6;&#x3002;</li>
</ol>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x5BF9;&#x540E;&#x6765;&#x7684; AI Agent &#x8BBE;&#x8BA1;&#x4EA7;&#x751F;&#x4E86;&#x6DF1;&#x8FDC;&#x5F71;&#x54CD;&#x2014;&#x2014;&#x5B83;&#x4FC3;&#x4F7F;&#x793E;&#x533A;&#x4ECE;&quot;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x53CD;&#x601D;&quot;&#x8F6C;&#x5411;&quot;&#x4E3A;&#x6A21;&#x578B;&#x63D0;&#x4F9B;&#x53EF;&#x9760;&#x7684;&#x5916;&#x90E8;&#x9A8C;&#x8BC1;&#x5DE5;&#x5177;&quot;&#xFF0C;&#x8FD9;&#x4E5F;&#x662F; LATS&#x3001;Toolformer&#x3001;CRITIC &#x7B49;&#x6846;&#x67B6;&#x6210;&#x529F;&#x7684;&#x5173;&#x952E;&#x539F;&#x56E0;&#x4E4B;&#x4E00;&#x3002;</p>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2310.01798">arXiv &#x8BBA;&#x6587;&#x94FE;&#x63A5;</a></li>
<li><a href="https://arxiv.org/abs/2310.04406">LATS: Language Agent Tree Search</a>&#xFF08;&#x5229;&#x7528;&#x5916;&#x90E8;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x6539;&#x8FDB;&#x63A8;&#x7406;&#x7684;&#x6B63;&#x9762;&#x6848;&#x4F8B;&#xFF09;</li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-03-09</em></p>
`,E=[{level:2,title:"这篇论文解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么之前没人发现？",children:[]},{level:2,title:"核心实验结果",children:[{level:3,title:"带 Oracle 的自我纠正 vs 内省式自我纠正",children:[]},{level:3,title:"Multi-Agent Debate vs Self-Consistency",children:[]}]},{level:2,title:"为什么会这样？",children:[]},{level:2,title:"什么时候 Self-Correction 是有效的？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 内省式自我纠正 (Intrinsic Self-Correction)",children:[]},{level:3,title:"2. Oracle Labels（正确答案标签）",children:[]},{level:3,title:"3. Self-Consistency（自我一致性）",children:[]},{level:3,title:"4. Prompt 设计不对等 (Prompt Design Asymmetry)",children:[]}]},{level:2,title:"延伸思考：Generation ≠ Verification，论文结论的适用边界",children:[{level:3,title:"论文实验的特殊性",children:[]},{level:3,title:"但很多实际场景并非如此",children:[]},{level:3,title:"自我纠正有效性的决定公式",children:[]},{level:3,title:"实践启示",children:[]}]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
