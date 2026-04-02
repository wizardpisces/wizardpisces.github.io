const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2024-12-27</em></p>
<p>&#x5357;&#x6D0B;&#x7406;&#x5DE5;&#x5927;&#x5B66;&#xFF08;NTU&#xFF09;&#x4E0E;&#x65B0;&#x52A0;&#x5761;&#x7BA1;&#x7406;&#x5927;&#x5B66;&#xFF08;SMU&#xFF09;&#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>&#x300A;Long Context vs. RAG for LLMs: An Evaluation and Revisits&#x300B;</strong>&#xFF08;<a href="https://arxiv.org/abs/2501.01880">arXiv:2501.01880</a>&#xFF09;&#x7CFB;&#x7EDF;&#x5BF9;&#x6BD4;&#x4E86;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;Long Context, LC&#xFF09;&#x4E0E; RAG &#x4E24;&#x79CD;&#x7B56;&#x7565;&#xFF0C;&#x5E76;&#x6307;&#x51FA;&#x6B64;&#x524D;&#x8BC4;&#x6D4B;&#x4E2D;&#x7684;&#x65B9;&#x6CD5;&#x8BBA;&#x7F3A;&#x9677;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;<strong>LC &#x548C; RAG &#x4E0D;&#x662F;&#x8C01;&#x53D6;&#x4EE3;&#x8C01;&#x7684;&#x5173;&#x7CFB;</strong>&#x2014;&#x2014;&#x524D;&#x8005;&#x5728; Wikipedia &#x7C7B; QA &#x4E0A;&#x66F4;&#x4F18;&#xFF0C;&#x540E;&#x8005;&#x5728;&#x5BF9;&#x8BDD;&#x7C7B;&#x548C;&#x901A;&#x7528;&#x67E5;&#x8BE2;&#x4E0A;&#x6709;&#x4F18;&#x52BF;&#xFF1B;&#x800C;&quot;&#x6458;&#x8981;&#x68C0;&#x7D22;&quot;&#x4E0E; LC &#x6027;&#x80FD;&#x76F8;&#x5F53;&#xFF0C;&quot;&#x5206;&#x5757;&#x68C0;&#x7D22;&quot;&#x660E;&#x663E;&#x843D;&#x540E;&#xFF0C;&#x6697;&#x793A; RAG &#x7684;&#x74F6;&#x9888;&#x5728;&#x5206;&#x5757;&#x7B56;&#x7565;&#x800C;&#x975E;&#x68C0;&#x7D22;&#x672C;&#x8EAB;&#x3002;</p>
<h2 id="&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;LC &#x548C; RAG &#x8C01;&#x66F4;&#x5F3A;&#xFF1F;&#x5728;&#x4EC0;&#x4E48;&#x573A;&#x666F;&#x4E0B;&#x8BE5;&#x9009;&#x8C01;&#xFF1F;</strong></p>
<p>LLM &#x8981;&#x5229;&#x7528;&#x8D85;&#x957F;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#xFF0C;&#x4E3B;&#x8981;&#x6709;&#x4E24;&#x6761;&#x8DEF;&#xFF1A;&#x4E00;&#x662F;&#x6269;&#x5C55;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#xFF08;LC&#xFF09;&#xFF0C;&#x628A;&#x6574;&#x4EFD;&#x6587;&#x6863;&#x585E;&#x8FDB; Prompt&#xFF1B;&#x4E8C;&#x662F;&#x7528;&#x68C0;&#x7D22;&#x5668; selectively &#x53D6;&#x56DE;&#x76F8;&#x5173;&#x7247;&#x6BB5;&#xFF08;RAG&#xFF09;&#xFF0C;&#x53EA;&#x628A; Top-K &#x585E;&#x8FDB; Prompt&#x3002;&#x4E1A;&#x754C;&#x957F;&#x671F;&#x4E89;&#x8BBA;&#x4E24;&#x8005;&#x5B70;&#x4F18;&#x5B70;&#x52A3;&#xFF0C;&#x4F46;&#x6B64;&#x524D;&#x7814;&#x7A76;&#x7ED3;&#x8BBA;&#x4E0D;&#x4E00;&#x2014;&#x2014;&#x6709;&#x7684;&#x8BF4; LC &#x78BE;&#x538B; RAG&#xFF0C;&#x6709;&#x7684;&#x8BF4; RAG &#x66F4;&#x5B9E;&#x7528;&#x2014;&#x2014;&#x4E14;&#x8BC4;&#x6D4B;&#x65B9;&#x6CD5;&#x5B58;&#x5728;&#x660E;&#x663E;&#x6F0F;&#x6D1E;&#xFF08;&#x5982;&#x6DF7;&#x5165;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x80FD;&#x7B54;&#x7684;&#x7B80;&#x5355;&#x9898;&#xFF09;&#x3002;&#x8BBA;&#x6587;&#x8BD5;&#x56FE;&#x7CFB;&#x7EDF;&#x56DE;&#x7B54;&#x8FD9;&#x4E00;&#x95EE;&#x9898;&#xFF0C;&#x5E76;&#x4FEE;&#x6B63;&#x8BC4;&#x6D4B;&#x504F;&#x5DEE;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x662F;&#x5DE5;&#x7A0B;&#x9009;&#x578B;&#x7684;&#x6838;&#x5FC3;&#x51B3;&#x7B56;&#x3002;</strong></p>
<p>&#x4F01;&#x4E1A;&#x6784;&#x5EFA;&#x77E5;&#x8BC6;&#x5E93;&#x5E94;&#x7528;&#x65F6;&#xFF0C;&#x5FC5;&#x987B;&#x5728; LC &#x548C; RAG &#x4E4B;&#x95F4;&#x505A;&#x67B6;&#x6784;&#x9009;&#x62E9;&#xFF1A;LC &#x9700;&#x8981;&#x652F;&#x6301;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x6210;&#x672C;&#x9AD8;&#x3001;&#x5EF6;&#x8FDF;&#x5927;&#xFF09;&#xFF0C;RAG &#x4F9D;&#x8D56;&#x68C0;&#x7D22;&#x8D28;&#x91CF;&#xFF08;&#x5206;&#x5757;&#x3001;&#x7D22;&#x5F15;&#x3001;rerank &#x7B49;&#x73AF;&#x8282;&#xFF09;&#x3002;&#x9009;&#x9519;&#x65B9;&#x6848;&#x4F1A;&#x5BFC;&#x81F4;&#x8981;&#x4E48;&#x6210;&#x672C;&#x5931;&#x63A7;&#xFF0C;&#x8981;&#x4E48;&#x56DE;&#x7B54;&#x8D28;&#x91CF;&#x4E0D;&#x8FBE;&#x6807;&#x3002;</p>
<ul>
<li><strong>&#x6210;&#x672C;&#x654F;&#x611F;&#x573A;&#x666F;&#xFF1A;</strong> &#x5BA2;&#x670D;&#x673A;&#x5668;&#x4EBA;&#x6BCF;&#x5929;&#x5904;&#x7406;&#x767E;&#x4E07;&#x7EA7;&#x67E5;&#x8BE2;&#xFF0C;&#x82E5;&#x5168;&#x90E8;&#x8D70; LC&#xFF0C;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x63A8;&#x7406;&#x6210;&#x672C;&#x53EF;&#x80FD;&#x6570;&#x500D;&#x4E8E; RAG&#xFF1B;&#x6B64;&#x65F6; RAG &#x7684;&#x6210;&#x672C;&#x4F18;&#x52BF;&#x662F;&#x521A;&#x9700;&#x3002;</li>
<li><strong>&#x8D28;&#x91CF;&#x654F;&#x611F;&#x573A;&#x666F;&#xFF1A;</strong> &#x6CD5;&#x5F8B;&#x3001;&#x533B;&#x7597;&#x7B49;&#x4E13;&#x4E1A;&#x9886;&#x57DF;&#xFF0C;&#x9057;&#x6F0F;&#x5173;&#x952E;&#x4FE1;&#x606F;&#x53EF;&#x80FD;&#x9020;&#x6210;&#x4E25;&#x91CD;&#x540E;&#x679C;&#xFF0C;LC &#x7684;&quot;&#x6574;&#x6587;&#x6863;&#x7406;&#x89E3;&quot;&#x4F18;&#x52BF;&#x53EF;&#x80FD;&#x503C;&#x5F97;&#x989D;&#x5916;&#x6210;&#x672C;&#x3002;</li>
<li><strong>&#x6B64;&#x524D;&#x56F0;&#x5883;&#xFF1A;</strong> &#x7F3A;&#x4E4F;&#x4E25;&#x8C28;&#x3001;&#x53EF;&#x590D;&#x73B0;&#x7684;&#x5BF9;&#x6BD4;&#xFF0C;&#x51B3;&#x7B56;&#x591A;&#x51ED;&#x76F4;&#x89C9;&#x6216;&#x5355;&#x4E00; benchmark &#x7684;&#x7247;&#x9762;&#x7ED3;&#x8BBA;&#xFF0C;&#x96BE;&#x4EE5;&#x5728;&#x4E0D;&#x540C;&#x4E1A;&#x52A1;&#x7EA6;&#x675F;&#x4E0B;&#x505A;&#x51FA;&#x7406;&#x6027;&#x9009;&#x62E9;&#x3002;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x4E8E;&#xFF1A;&#x4E0D;&#x4EC5;&#x7ED9;&#x51FA;&quot;&#x8C01;&#x5728;&#x4EC0;&#x4E48;&#x573A;&#x666F;&#x66F4;&#x4F18;&quot;&#x7684;&#x7ED3;&#x8BBA;&#xFF0C;&#x8FD8;&#x4FEE;&#x6B63;&#x4E86;&#x8BC4;&#x6D4B;&#x65B9;&#x6CD5;&#x8BBA;&#xFF0C;&#x4E3A;&#x5DE5;&#x7A0B;&#x9009;&#x578B;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x53EF;&#x9760;&#x7684;&#x4F9D;&#x636E;&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x7CFB;&#x7EDF;&#x56DE;&#x7B54;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x7CFB;&#x7EDF;&#x56DE;&#x7B54;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x6709;&#x4EBA;&#x7CFB;&#x7EDF;&#x56DE;&#x7B54;&#xFF1F;</h2>
<p><strong>&#x6280;&#x672F;&#x524D;&#x63D0;&#x4E0E;&#x65F6;&#x673A;&#xFF1A;</strong></p>
<ol>
<li><strong>&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x6A21;&#x578B;&#x521A;&#x6210;&#x719F;&#xFF1A;</strong> GPT-4 Turbo&#x3001;Claude&#x3001;Gemini &#x7B49;&#x652F;&#x6301; 128K+ &#x4E0A;&#x4E0B;&#x6587;&#xFF0C;LC &#x624D;&#x6210;&#x4E3A;&#x53EF;&#x884C;&#x9009;&#x9879;&#xFF1B;&#x6B64;&#x524D;&#x6A21;&#x578B;&#x4E0A;&#x4E0B;&#x6587;&#x6709;&#x9650;&#xFF0C;RAG &#x51E0;&#x4E4E;&#x662F;&#x552F;&#x4E00;&#x9009;&#x62E9;&#x3002;</li>
<li><strong>RAG &#x8303;&#x5F0F;&#x5206;&#x5316;&#xFF1A;</strong> &#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF08;Chunk-based&#xFF09;&#x4E0E;&#x6458;&#x8981;&#x68C0;&#x7D22;&#xFF08;Summarization-based&#xFF09;&#x7B49;&#x4E0D;&#x540C;&#x7B56;&#x7565;&#x6D8C;&#x73B0;&#xFF0C;&#x9700;&#x8981;&#x533A;&#x5206;&#x5BF9;&#x6BD4;&#x3002;</li>
<li><strong>&#x8BC4;&#x6D4B;&#x6C61;&#x67D3;&#x88AB;&#x8BC6;&#x522B;&#xFF1A;</strong> &#x793E;&#x533A;&#x9010;&#x6E10;&#x610F;&#x8BC6;&#x5230;&#xFF0C;&#x8BB8;&#x591A; QA benchmark &#x6DF7;&#x5165;&#x4E86;&quot;LLM &#x81EA;&#x8EAB;&#x5C31;&#x80FD;&#x56DE;&#x7B54;&quot;&#x7684;&#x7B80;&#x5355;&#x95EE;&#x9898;&#xFF0C;&#x5BFC;&#x81F4;&#x7ED3;&#x8BBA;&#x5931;&#x771F;&#x2014;&#x2014;&#x8BBA;&#x6587;&#x901A;&#x8FC7;&#x8FC7;&#x6EE4;&#x8FD9;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;&#x9996;&#x6B21;&#x7CFB;&#x7EDF;&#x4FEE;&#x6B63;&#x4E86;&#x8FD9;&#x4E00;&#x504F;&#x5DEE;&#x3002;&#x8FD9;&#x4E00;&#x4FEE;&#x6B63;&#x672C;&#x8EAB;&#x5177;&#x6709;&#x65B9;&#x6CD5;&#x8BBA;&#x4EF7;&#x503C;&#xFF0C;&#x53EF;&#x88AB;&#x5176;&#x4ED6; LC vs RAG &#x7814;&#x7A76;&#x501F;&#x9274;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x53D1;&#x73B0;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x53D1;&#x73B0;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5B83;&#x7684;&#x6838;&#x5FC3;&#x53D1;&#x73B0;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<table>
<thead>
<tr>
<th>&#x573A;&#x666F;/&#x7EF4;&#x5EA6;</th>
<th>LC</th>
<th>RAG&#xFF08;&#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF09;</th>
<th>RAG&#xFF08;&#x6458;&#x8981;&#x68C0;&#x7D22;&#xFF09;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Wikipedia &#x7C7B; QA</td>
<td>&#x6700;&#x4F18;</td>
<td>&#x660E;&#x663E;&#x843D;&#x540E;</td>
<td>&#x4E0E; LC &#x76F8;&#x5F53;</td>
</tr>
<tr>
<td>&#x5BF9;&#x8BDD;&#x7C7B;&#x67E5;&#x8BE2;</td>
<td>&#x4E00;&#x822C;</td>
<td>&#x6709;&#x4F18;&#x52BF;</td>
<td>&#x6709;&#x4F18;&#x52BF;</td>
</tr>
<tr>
<td>&#x901A;&#x7528;&#x95EE;&#x7B54;</td>
<td>&#x4E00;&#x822C;</td>
<td>&#x6709;&#x4F18;&#x52BF;</td>
<td>&#x6709;&#x4F18;&#x52BF;</td>
</tr>
<tr>
<td>&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;</td>
<td>&#x5929;&#x7136;&#x9AD8;&#xFF08;&#x6574;&#x6587;&#x6863;&#xFF09;</td>
<td>&#x4F9D;&#x8D56;&#x68C0;&#x7D22;&#x8D28;&#x91CF;</td>
<td>&#x4F9D;&#x8D56;&#x6458;&#x8981;&#x8D28;&#x91CF;</td>
</tr>
<tr>
<td>&#x6210;&#x672C;/&#x5EF6;&#x8FDF;</td>
<td>&#x9AD8;&#xFF08;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x63A8;&#x7406;&#xFF09;</td>
<td>&#x4F4E;&#xFF08;&#x53EA;&#x5904;&#x7406; Top-K&#xFF09;</td>
<td>&#x4E2D;&#x7B49;</td>
</tr>
</tbody>
</table>
<p><strong>&#x5173;&#x952E;&#x6D1E;&#x5BDF;&#xFF1A;</strong></p>
<ol>
<li><strong>&#x6458;&#x8981;&#x68C0;&#x7D22; &#x2248; &#x957F;&#x4E0A;&#x4E0B;&#x6587; &gt; &#x5206;&#x5757;&#x68C0;&#x7D22;</strong> &#x2014;&#x2014; RAG &#x7684;&#x74F6;&#x9888;&#x4E0D;&#x5728;&quot;&#x68C0;&#x7D22;&quot;&#x672C;&#x8EAB;&#xFF0C;&#x800C;&#x5728;&quot;&#x5206;&#x5757;&#x7B56;&#x7565;&quot;&#x3002;&#x6458;&#x8981;&#x76F8;&#x5F53;&#x4E8E;&#x5BF9;&#x6587;&#x6863;&#x7684;&#x9884;&#x538B;&#x7F29;&#xFF0C;&#x66F4;&#x63A5;&#x8FD1; LC &#x7684;&quot;&#x6574;&#x6587;&#x6863;&#x7406;&#x89E3;&quot;&#x3002;</li>
<li><strong>&#x8FC7;&#x6EE4;&quot;&#x65E0;&#x9700;&#x5916;&#x90E8;&#x4E0A;&#x4E0B;&#x6587;&#x5373;&#x53EF;&#x56DE;&#x7B54;&quot;&#x7684;&#x95EE;&#x9898;&#x540E;&#xFF0C;&#x5DEE;&#x8DDD;&#x4F1A;&#x53D8;&#x5316;</strong> &#x2014;&#x2014; &#x8BF4;&#x660E;&#x6B64;&#x524D;&#x8BC4;&#x6D4B;&#x6DF7;&#x5165;&#x4E86; LLM &#x81EA;&#x8EAB;&#x5C31;&#x80FD;&#x7B54;&#x7684;&#x7B80;&#x5355;&#x9898;&#xFF0C;&#x6C61;&#x67D3;&#x4E86;&#x5BF9;&#x6BD4;&#x7ED3;&#x8BBA;&#x3002;</li>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#xFF08;Context Relevance&#xFF09;&#x88AB;&#x4E25;&#x91CD;&#x5FFD;&#x89C6;</strong> &#x2014;&#x2014; &#x73B0;&#x6709;&#x7814;&#x7A76;&#x591A;&#x5173;&#x6CE8;&#x68C0;&#x7D22;&#x53EC;&#x56DE;&#x7387;&#x3001;&#x751F;&#x6210;&#x8D28;&#x91CF;&#xFF0C;&#x5374;&#x5F88;&#x5C11;&#x8BC4;&#x4F30;&quot;&#x585E;&#x8FDB; Prompt &#x7684;&#x5185;&#x5BB9;&#x662F;&#x5426;&#x771F;&#x7684;&#x4E0E;&#x95EE;&#x9898;&#x76F8;&#x5173;&quot;&#xFF0C;&#x8FD9;&#x662F;&#x5F71;&#x54CD;&#x6700;&#x7EC8;&#x7B54;&#x6848;&#x8D28;&#x91CF;&#x7684;&#x5173;&#x952E;&#x56E0;&#x7D20;&#x3002;</li>
</ol>
<p><strong>&#x5B9E;&#x8DF5;&#x9009;&#x578B;&#x53C2;&#x8003;&#xFF1A;</strong></p>
<table>
<thead>
<tr>
<th>&#x4E1A;&#x52A1;&#x7EA6;&#x675F;</th>
<th>&#x66F4;&#x4F18;&#x65B9;&#x6848;</th>
<th>&#x7406;&#x7531;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x9AD8;&#x541E;&#x5410;&#x3001;&#x6210;&#x672C;&#x654F;&#x611F;</td>
<td>RAG</td>
<td>&#x53EA;&#x5904;&#x7406; Top-K&#xFF0C;&#x63A8;&#x7406;&#x6210;&#x672C;&#x4F4E;</td>
</tr>
<tr>
<td>&#x8D28;&#x91CF;&#x4F18;&#x5148;&#x3001;&#x6587;&#x6863;&#x4E0D;&#x957F;</td>
<td>LC</td>
<td>&#x907F;&#x514D;&#x68C0;&#x7D22;&#x9057;&#x6F0F;&#xFF0C;&#x6574;&#x6587;&#x6863;&#x7406;&#x89E3;</td>
</tr>
<tr>
<td>&#x6587;&#x6863;&#x6781;&#x957F;&#x3001;&#x8D85;&#x4E0A;&#x4E0B;&#x6587;</td>
<td>RAG + &#x6458;&#x8981;&#x68C0;&#x7D22;</td>
<td>&#x6458;&#x8981;&#x68C0;&#x7D22;&#x4E0E; LC &#x6027;&#x80FD;&#x76F8;&#x5F53;&#xFF0C;&#x6210;&#x672C;&#x53EF;&#x63A7;</td>
</tr>
<tr>
<td>&#x6DF7;&#x5408;&#x9700;&#x6C42;</td>
<td>SELF-ROUTE &#x7C7B;&#x8DEF;&#x7531;</td>
<td>&#x6309;&#x95EE;&#x9898;&#x590D;&#x6742;&#x5EA6;&#x52A8;&#x6001;&#x9009;&#x62E9;</td>
</tr>
</tbody>
</table>
<p><em>&#x6CE8;&#xFF1A;&#x4E0A;&#x8FF0;&#x4E3A;&#x8BBA;&#x6587;&#x5728; QA &#x4EFB;&#x52A1;&#x4E0A;&#x7684;&#x7ED3;&#x8BBA;&#xFF1B;&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3001;&#x591A;&#x8F6E;&#x5BF9;&#x8BDD;&#x7B49;&#x573A;&#x666F;&#x9700;&#x53E6;&#x884C;&#x8BC4;&#x4F30;&#x3002;</em></p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;Long Context, LC&#xFF09;"><a href="#1. &#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;Long Context, LC&#xFF09;"></a>1. &#x957F;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;Long Context, LC&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x901A;&#x8FC7;&#x6269;&#x5C55;&#x6A21;&#x578B;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#xFF0C;&#x5C06;&#x6574;&#x4EFD;&#x6216;&#x5927;&#x91CF;&#x5916;&#x90E8;&#x6587;&#x6863;&#x76F4;&#x63A5;&#x653E;&#x5165; Prompt&#xFF0C;&#x8BA9; LLM &#x5728;&#x5355;&#x6B21;&#x63A8;&#x7406;&#x4E2D;&#x8BBF;&#x95EE;&#x5168;&#x90E8;&#x4FE1;&#x606F;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x65E0;&#x9700;&#x68C0;&#x7D22;&#xFF0C;&#x7406;&#x8BBA;&#x4E0A;&#x53EF;&#x907F;&#x514D;&#x68C0;&#x7D22;&#x9057;&#x6F0F;&#xFF1B;&#x4F46;&#x6210;&#x672C;&#x9AD8;&#x3001;&#x6613;&#x53D7;&quot;Lost in the Middle&quot;&#x5F71;&#x54CD;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x5C06;&#x6574;&#x672C; 10 &#x4E07;&#x5B57;&#x624B;&#x518C;&#x585E;&#x8FDB; Claude &#x7684; 200K &#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x76F4;&#x63A5;&#x95EE;&quot;&#x7B2C;&#x4E09;&#x7AE0;&#x7684;&#x5B89;&#x88C5;&#x6B65;&#x9AA4;&#x662F;&#x4EC0;&#x4E48;&quot;&#x3002;</li>
</ul>
<h3 id="2. &#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF08;Chunk-based Retrieval&#xFF09;"><a href="#2. &#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF08;Chunk-based Retrieval&#xFF09;"></a>2. &#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF08;Chunk-based Retrieval&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x5C06;&#x6587;&#x6863;&#x6309;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#xFF08;&#x5982; 512 token&#xFF09;&#x5207;&#x5757;&#xFF0C;&#x5BF9;&#x6BCF;&#x5757;&#x505A;&#x5411;&#x91CF;&#x5D4C;&#x5165;&#xFF0C;&#x67E5;&#x8BE2;&#x65F6;&#x68C0;&#x7D22;&#x8BED;&#x4E49;&#x76F8;&#x4F3C;&#x7684; Top-K &#x5757;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x662F; RAG &#x6700;&#x5E38;&#x89C1;&#x3001;&#x5DE5;&#x7A0B;&#x5B9E;&#x73B0;&#x6700;&#x7B80;&#x5355;&#x7684;&#x65B9;&#x6848;&#xFF0C;&#x4F46;&#x6613;&#x4E22;&#x5931;&#x8DE8;&#x5757;&#x4FE1;&#x606F;&#x3001;&#x5757;&#x8FB9;&#x754C;&#x53EF;&#x80FD;&#x5207;&#x65AD;&#x8BED;&#x4E49;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x4E00;&#x4EFD;&#x5408;&#x540C;&#x88AB;&#x5207;&#x6210; 20 &#x5757;&#xFF0C;&#x95EE;&quot;&#x8FDD;&#x7EA6;&#x91D1;&#x6761;&#x6B3E;&quot;&#x53EF;&#x80FD;&#x53EA;&#x547D;&#x4E2D;&#x534A;&#x53E5;&#xFF0C;&#x53E6;&#x4E00;&#x53E5;&#x5728;&#x76F8;&#x90BB;&#x5757;&#x4E2D;&#x88AB;&#x9057;&#x6F0F;&#x3002;</li>
</ul>
<h3 id="3. &#x6458;&#x8981;&#x68C0;&#x7D22;&#xFF08;Summarization-based Retrieval&#xFF09;"><a href="#3. &#x6458;&#x8981;&#x68C0;&#x7D22;&#xFF08;Summarization-based Retrieval&#xFF09;"></a>3. &#x6458;&#x8981;&#x68C0;&#x7D22;&#xFF08;Summarization-based Retrieval&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x5148;&#x5BF9;&#x6587;&#x6863;&#x6216;&#x6587;&#x6863;&#x7247;&#x6BB5;&#x505A;&#x6458;&#x8981;&#xFF0C;&#x518D;&#x5BF9;&#x6458;&#x8981;&#x505A;&#x68C0;&#x7D22;&#xFF1B;&#x6216;&#x5BF9;&#x68C0;&#x7D22;&#x5230;&#x7684;&#x5757;&#x505A;&#x4E8C;&#x6B21;&#x6458;&#x8981;&#x540E;&#x5582;&#x7ED9; LLM&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x53D1;&#x73B0;&#x5176;&#x4E0E; LC &#x6027;&#x80FD;&#x76F8;&#x5F53;&#xFF0C;&#x6697;&#x793A;&quot;&#x4FE1;&#x606F;&#x5BC6;&#x5EA6;&quot;&#x548C;&quot;&#x8BED;&#x4E49;&#x5B8C;&#x6574;&#x6027;&quot;&#x6BD4;&quot;&#x539F;&#x59CB;&#x7247;&#x6BB5;&quot;&#x66F4;&#x91CD;&#x8981;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x5BF9;&#x6BCF;&#x7AE0;&#x751F;&#x6210;&#x6458;&#x8981;&#xFF0C;&#x68C0;&#x7D22;&#x65F6;&#x5339;&#x914D;&#x6458;&#x8981;&#x800C;&#x975E;&#x539F;&#x6587;&#xFF0C;LLM &#x57FA;&#x4E8E;&#x6458;&#x8981;&#x56DE;&#x7B54;&#xFF0C;&#x518D;&#x6309;&#x9700;&#x56DE;&#x6EAF;&#x539F;&#x6587;&#x3002;</li>
</ul>
<h3 id="4. &#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#xFF08;Context Relevance&#xFF09;"><a href="#4. &#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#xFF08;Context Relevance&#xFF09;"></a>4. &#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#xFF08;Context Relevance&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x585E;&#x8FDB; Prompt &#x7684;&#x68C0;&#x7D22;/&#x4E0A;&#x4E0B;&#x6587;&#x5185;&#x5BB9;&#x4E0E;&#x7528;&#x6237;&#x95EE;&#x9898;&#x5728;&#x8BED;&#x4E49;&#x4E0A;&#x7684;&#x5339;&#x914D;&#x7A0B;&#x5EA6;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x6307;&#x51FA;&#x8FD9;&#x662F;&#x88AB;&#x73B0;&#x6709;&#x7814;&#x7A76;&#x4E25;&#x91CD;&#x5FFD;&#x89C6;&#x7684;&#x56E0;&#x7D20;&#x2014;&#x2014;&#x68C0;&#x7D22;&#x5230;&quot;&#x76F8;&#x5173;&quot;&#x6587;&#x6863;&#x4E0D;&#x7B49;&#x4E8E;&quot;&#x4E0E;&#x95EE;&#x9898;&#x76F8;&#x5173;&quot;&#xFF0C;&#x4F4E;&#x76F8;&#x5173;&#x6027;&#x4F1A;&#x5F15;&#x5165;&#x566A;&#x58F0;&#x751A;&#x81F3;&#x8BEF;&#x5BFC;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x95EE;&quot;&#x67D0;&#x516C;&#x53F8;&#x7684;&#x878D;&#x8D44;&#x8F6E;&#x6B21;&quot;&#xFF0C;&#x68C0;&#x7D22;&#x5230;&#x8BE5;&#x516C;&#x53F8;&#x4EA7;&#x54C1;&#x4ECB;&#x7ECD;&#x2014;&#x2014;&#x770B;&#x4F3C;&#x76F8;&#x5173;&#xFF0C;&#x5B9E;&#x5219;&#x7F3A;&#x5C11;&#x878D;&#x8D44;&#x4FE1;&#x606F;&#xFF0C;&#x5C5E;&#x4E8E;&#x4F4E;&#x76F8;&#x5173;&#x6027;&#x4E0A;&#x4E0B;&#x6587;&#x3002;</li>
</ul>
<h3 id="5. SELF-ROUTE&#xFF08;&#x81EA;&#x6211;&#x8DEF;&#x7531;&#xFF09;"><a href="#5. SELF-ROUTE&#xFF08;&#x81EA;&#x6211;&#x8DEF;&#x7531;&#xFF09;"></a>5. SELF-ROUTE&#xFF08;&#x81EA;&#x6211;&#x8DEF;&#x7531;&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> Google DeepMind &#x63D0;&#x51FA;&#x7684;&#x6DF7;&#x5408;&#x65B9;&#x6CD5;&#xFF1A;&#x5148;&#x8BA9;&#x6A21;&#x578B;&#x5224;&#x65AD;&quot;&#x5F53;&#x524D;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x8DB3;&#x4EE5;&#x56DE;&#x7B54;&#x95EE;&#x9898;&quot;&#xFF1B;&#x82E5;&#x8DB3;&#x4EE5;&#x56DE;&#x7B54;&#x5219;&#x8D70; RAG&#xFF0C;&#x5426;&#x5219;&#x8D70; LC&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x7ED3;&#x5408;&#x4E86; RAG &#x7684;&#x6210;&#x672C;&#x4F18;&#x52BF;&#x4E0E; LC &#x7684;&#x8D28;&#x91CF;&#x4F18;&#x52BF;&#xFF0C;&#x5B9E;&#x9A8C;&#x663E;&#x793A;&#x53EF;&#x4FDD;&#x6301; LC &#x7EA7;&#x6027;&#x80FD;&#x7684;&#x540C;&#x65F6;&#x5927;&#x5E45;&#x964D;&#x4F4E;&#x6210;&#x672C;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x7B80;&#x5355;&#x4E8B;&#x5B9E;&#x9898;&quot;&#x67D0;&#x516C;&#x53F8;&#x6210;&#x7ACB;&#x4E8E;&#x54EA;&#x5E74;&quot;&#x2014;&#x2014;&#x68C0;&#x7D22;&#x5230;&#x6210;&#x7ACB;&#x65E5;&#x671F;&#x5373;&#x53EF;&#xFF0C;&#x8D70; RAG&#xFF1B;&#x590D;&#x6742;&#x5F52;&#x7EB3;&#x9898;&quot;&#x8FD9;&#x6279;&#x6587;&#x6863;&#x7684;&#x5171;&#x540C;&#x4E3B;&#x9898;&quot;&#x2014;&#x2014;&#x68C0;&#x7D22;&#x7247;&#x6BB5;&#x4E0D;&#x8DB3;&#xFF0C;&#x8D70; LC&#x3002;</li>
</ul>
<h3 id="6. &#x8BC4;&#x6D4B;&#x6C61;&#x67D3;&#xFF08;Benchmark Contamination&#xFF09;"><a href="#6. &#x8BC4;&#x6D4B;&#x6C61;&#x67D3;&#xFF08;Benchmark Contamination&#xFF09;"></a>6. &#x8BC4;&#x6D4B;&#x6C61;&#x67D3;&#xFF08;Benchmark Contamination&#xFF09;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x8BC4;&#x6D4B;&#x96C6;&#x4E2D;&#x6DF7;&#x5165;&#x4E86;&quot;&#x65E0;&#x9700;&#x5916;&#x90E8;&#x4E0A;&#x4E0B;&#x6587;&#x5373;&#x53EF;&#x56DE;&#x7B54;&quot;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x5BFC;&#x81F4; LC &#x4E0E; RAG &#x7684;&#x5BF9;&#x6BD4;&#x5931;&#x771F;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x82E5;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x53C2;&#x6570;&#x5DF2;&#x5305;&#x542B;&#x7B54;&#x6848;&#xFF0C;&#x4E24;&#x79CD;&#x7B56;&#x7565;&#x90FD;&#x4F1A;&quot;&#x7B54;&#x5BF9;&quot;&#xFF0C;&#x65E0;&#x6CD5;&#x533A;&#x5206;&#x8C01;&#x5728;&quot;&#x771F;&#x6B63;&#x9700;&#x8981;&#x68C0;&#x7D22;&quot;&#x7684;&#x573A;&#x666F;&#x4E0B;&#x66F4;&#x4F18;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &quot;&#x4E2D;&#x56FD;&#x7684;&#x9996;&#x90FD;&#x662F;&#x54EA;&#x91CC;&quot;&#x2014;&#x2014;LLM &#x81EA;&#x8EAB;&#x80FD;&#x7B54;&#xFF0C;&#x65E0;&#x8BBA;&#x8D70; LC &#x8FD8;&#x662F; RAG &#x90FD;&#x6B63;&#x786E;&#xFF1B;&#x8FD9;&#x7C7B;&#x9898;&#x5E94;&#x88AB;&#x8FC7;&#x6EE4;&#xFF0C;&#x5426;&#x5219;&#x4F1A;&#x7A00;&#x91CA;&quot;&#x771F;&#x6B63;&#x9700;&#x8981;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&quot;&#x7684;&#x9898;&#x76EE;&#x7684;&#x6743;&#x91CD;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x5EF6;&#x4F38;&#x601D;&#x8003;"><a href="#&#x5EF6;&#x4F38;&#x601D;&#x8003;"></a>&#x5EF6;&#x4F38;&#x601D;&#x8003;</h2>
<p><strong>0. &#x4E0E;&#x76F8;&#x5173;&#x5DE5;&#x4F5C;&#x7684;&#x5173;&#x8054;</strong></p>
<p>&#x672C;&#x8BBA;&#x6587;&#x4E0E; Google DeepMind &#x7684; SELF-ROUTE&#xFF08;EMNLP 2024&#xFF09;&#x3001;LaRA Benchmark&#xFF08;ICML 2025&#xFF09;&#x5F62;&#x6210;&#x4E92;&#x8865;&#xFF1A;NTU/SMU &#x8BBA;&#x6587;&#x805A;&#x7126;<strong>&#x8BC4;&#x6D4B;&#x65B9;&#x6CD5;&#x8BBA;&#x4FEE;&#x6B63;</strong>&#x548C;<strong>&#x5206;&#x5757; vs &#x6458;&#x8981;</strong>&#x7684;&#x5BF9;&#x6BD4;&#xFF1B;SELF-ROUTE &#x63D0;&#x4F9B;<strong>&#x6DF7;&#x5408;&#x8DEF;&#x7531;</strong>&#x7684;&#x5DE5;&#x7A0B;&#x65B9;&#x6848;&#xFF1B;LaRA &#x5219;&#x5F3A;&#x8C03;<strong>&#x6CA1;&#x6709;&#x94F6;&#x5F39;</strong>&#x3001;&#x9700;&#x6309;&#x573A;&#x666F;&#x9009;&#x578B;&#x3002;&#x4E09;&#x8005;&#x5171;&#x540C;&#x6307;&#x5411;&#x540C;&#x4E00;&#x7ED3;&#x8BBA;&#xFF1A;LC &#x4E0E; RAG &#x662F;&#x4E92;&#x8865;&#x800C;&#x975E;&#x66FF;&#x4EE3;&#x3002;&#x82E5;&#x53EA;&#x8BFB;&#x4E00;&#x7BC7;&#xFF0C;&#x672C;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x5728;&#x4E8E;<strong>&#x4FEE;&#x6B63;&#x8BC4;&#x6D4B;&#x504F;&#x5DEE;</strong>&#x548C;<strong>&#x533A;&#x5206; RAG &#x5185;&#x90E8;&#x7B56;&#x7565;</strong>&#xFF08;&#x5206;&#x5757; vs &#x6458;&#x8981;&#xFF09;&#xFF0C;&#x4E3A;&#x540E;&#x7EED;&#x9009;&#x578B;&#x63D0;&#x4F9B;&#x66F4;&#x5E72;&#x51C0;&#x7684;&#x57FA;&#x7EBF;&#x3002;</p>
<p><strong>1. &quot;RAG &#x5DF2;&#x6B7B;&quot;&#x662F;&#x4F2A;&#x547D;&#x9898;</strong></p>
<p>LC &#x5728;&#x90E8;&#x5206; QA &#x4E0A;&#x4F18;&#x4E8E; RAG&#xFF0C;&#x4F46; RAG &#x5728;&#x5BF9;&#x8BDD;&#x7C7B;&#x3001;&#x901A;&#x7528;&#x67E5;&#x8BE2;&#x4E0A;&#x6709;&#x4F18;&#x52BF;&#xFF0C;&#x4E14;<strong>&#x6210;&#x672C;&#x663E;&#x8457;&#x66F4;&#x4F4E;</strong>&#x3002;Google DeepMind &#x7684; EMNLP 2024 &#x7814;&#x7A76;&#x663E;&#x793A;&#xFF1A;LC &#x5E73;&#x5747;&#x6027;&#x80FD;&#x4F18;&#x4E8E; RAG&#xFF08;Gemini-1.5-Pro &#x9AD8; 7.6%&#xFF0C;GPT-4 &#x9AD8; 13.1%&#xFF09;&#xFF0C;&#x4F46; RAG &#x6709;&#x663E;&#x8457;&#x6210;&#x672C;&#x4F18;&#x52BF;&#xFF1B;&#x5176;&#x63D0;&#x51FA;&#x7684; <strong>SELF-ROUTE</strong> &#x65B9;&#x6CD5;&#x2014;&#x2014;&#x6839;&#x636E;&#x6A21;&#x578B;&#x81EA;&#x6211;&#x53CD;&#x601D;&#x8DEF;&#x7531;&#x5230; RAG &#x6216; LC&#x2014;&#x2014;&#x5728;&#x4FDD;&#x6301; LC &#x7EA7;&#x6027;&#x80FD;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x5B9E;&#x73B0;&#x4E86; 65%&#xFF08;Gemini&#xFF09;&#x548C; 39%&#xFF08;GPT-4&#xFF09;&#x7684;&#x6210;&#x672C;&#x524A;&#x51CF;&#x3002;<strong>&#x52A8;&#x6001;&#x8DEF;&#x7531;&#x53EF;&#x80FD;&#x662F;&#x771F;&#x6B63;&#x7684;&#x6700;&#x4F18;&#x89E3;&#x3002;</strong></p>
<p><strong>2. &#x5DE5;&#x7A0B;&#x51B3;&#x7B56;&#xFF1A;&#x6210;&#x672C;&#x5F80;&#x5F80;&#x6BD4; 2% &#x51C6;&#x786E;&#x7387;&#x66F4;&#x91CD;&#x8981;</strong></p>
<p>&#x5B9E;&#x9645;&#x843D;&#x5730;&#x65F6;&#xFF0C;&#x591A; 2% &#x7684;&#x51C6;&#x786E;&#x7387;&#x672A;&#x5FC5;&#x503C;&#x5F97;&#x4ED8;&#x51FA;&#x6210;&#x500D;&#x7684;&#x63A8;&#x7406;&#x6210;&#x672C;&#x548C;&#x5EF6;&#x8FDF;&#x3002;RAG &#x7684;&#x6210;&#x672C;&#x4F18;&#x52BF;&#x662F;&#x6740;&#x624B;&#x950F;&#xFF0C;&#x5C24;&#x5176;&#x5728; high-throughput &#x573A;&#x666F;&#x3002;SELF-ROUTE &#x7684;&#x5B9E;&#x9A8C;&#x6570;&#x636E;&#x4F50;&#x8BC1;&#x4E86;&#x8FD9;&#x4E00;&#x70B9;&#xFF1A;63% &#x7684;&#x67E5;&#x8BE2;&#x5728; RAG &#x548C; LC &#x4E0B;&#x4EA7;&#x751F;&#x76F8;&#x540C;&#x9884;&#x6D4B;&#xFF0C;&#x8BF4;&#x660E;&#x5927;&#x91CF;&#x95EE;&#x9898;&#x7528; RAG &#x5373;&#x53EF;&#x6EE1;&#x8DB3;&#xFF0C;&#x65E0;&#x9700;&#x4E3A;&#x5C11;&#x6570;&#x590D;&#x6742;&#x9898;&#x652F;&#x4ED8;&#x5168;&#x91CF; LC &#x6210;&#x672C;&#x3002;</p>
<p><strong>3. &#x65B9;&#x6CD5;&#x8BBA;&#x6559;&#x8BAD;&#xFF1A;&#x8BC4;&#x6D4B;&#x6C61;&#x67D3;</strong></p>
<p>&#x8FC7;&#x6EE4;&quot;&#x65E0;&#x9700;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#x5373;&#x53EF;&#x56DE;&#x7B54;&quot;&#x7684;&#x95EE;&#x9898;&#x540E;&#xFF0C;&#x7ED3;&#x8BBA;&#x4F1A;&#x53D8;&#x5316;&#x2014;&#x2014;&#x8FD9;&#x63D0;&#x9192;&#x6211;&#x4EEC;&#xFF1A;benchmark &#x8BBE;&#x8BA1;&#x8981;&#x533A;&#x5206;&quot;&#x771F;&#x6B63;&#x9700;&#x8981;&#x68C0;&#x7D22;&quot;&#x4E0E;&quot;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x80FD;&#x7B54;&quot;&#x7684;&#x9898;&#x76EE;&#xFF0C;&#x5426;&#x5219;&#x5BF9;&#x6BD4;&#x5931;&#x53BB;&#x610F;&#x4E49;&#x3002;&#x8BBA;&#x6587;&#x7684;&#x4EF7;&#x503C;&#x4E0D;&#x4EC5;&#x5728;&#x4E8E;&#x7ED3;&#x8BBA;&#xFF0C;&#x66F4;&#x5728;&#x4E8E;<strong>&#x4FEE;&#x6B63;&#x4E86;&#x8BC4;&#x6D4B;&#x65B9;&#x6CD5;&#x8BBA;</strong>&#xFF0C;&#x4E3A;&#x540E;&#x7EED;&#x7814;&#x7A76;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x5E72;&#x51C0;&#x7684;&#x5BF9;&#x6BD4;&#x57FA;&#x7EBF;&#x3002;</p>
<p><strong>4. &#x6279;&#x5224;&#x6027;&#x5C40;&#x9650;</strong></p>
<p>&#x8BBA;&#x6587;&#x4E3B;&#x8981;&#x5728; QA &#x4EFB;&#x52A1;&#x4E0A;&#x8BC4;&#x6D4B;&#xFF0C;&#x5BF9;<strong>&#x4EE3;&#x7801;&#x751F;&#x6210;&#x3001;&#x591A;&#x8F6E;&#x5BF9;&#x8BDD;&#x3001;&#x591A;&#x6A21;&#x6001;</strong>&#x7B49;&#x573A;&#x666F;&#x7684;&#x9002;&#x7528;&#x6027;&#x672A;&#x77E5;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li><strong>&#x4EE3;&#x7801;&#x751F;&#x6210;&#xFF1A;</strong> &#x9700;&#x8981;&#x7CBE;&#x786E;&#x5F15;&#x7528;&#x4ED3;&#x5E93;&#x5185;&#x591A;&#x6587;&#x4EF6;&#x3001;&#x591A;&#x884C;&#x4EE3;&#x7801;&#xFF0C;RAG &#x7684;&quot;&#x7CBE;&#x51C6;&#x5B9A;&#x4F4D;&quot;&#x53EF;&#x80FD;&#x4F18;&#x4E8E; LC &#x7684;&quot;&#x6574;&#x5E93;&#x585E;&#x5165;&quot;&#x3002;</li>
<li><strong>&#x591A;&#x8F6E;&#x5BF9;&#x8BDD;&#xFF1A;</strong> &#x4E0A;&#x4E0B;&#x6587;&#x7D2F;&#x79EF;&#x540E;&#xFF0C;RAG &#x7684;&#x589E;&#x91CF;&#x68C0;&#x7D22;&#x4E0E; LC &#x7684;&#x6ED1;&#x52A8;&#x7A97;&#x53E3;&#xFF0C;&#x5B70;&#x4F18;&#x5B70;&#x52A3;&#x5C1A;&#x65E0;&#x5B9A;&#x8BBA;&#x3002;</li>
<li><strong>LaRA &#x7684;&#x542F;&#x793A;&#xFF1A;</strong> LaRA Benchmark&#xFF08;ICML 2025&#xFF09;&#x8BC4;&#x4F30; 11 &#x4E2A; LLM&#x3001;2326 &#x4E2A;&#x7528;&#x4F8B;&#x540E;&#x6307;&#x51FA;&#xFF1A;<strong>&#x6CA1;&#x6709;&#x94F6;&#x5F39;</strong>&#x2014;&#x2014;&#x6700;&#x4F18;&#x9009;&#x62E9;&#x53D6;&#x51B3;&#x4E8E;&#x6A21;&#x578B;&#x80FD;&#x529B;&#x3001;&#x4E0A;&#x4E0B;&#x6587;&#x957F;&#x5EA6;&#x3001;&#x4EFB;&#x52A1;&#x7C7B;&#x578B;&#x548C;&#x68C0;&#x7D22;&#x7279;&#x5F81;&#x3002;&#x4E0D;&#x80FD;&#x5C06; QA &#x7ED3;&#x8BBA;&#x7B80;&#x5355;&#x5916;&#x63A8;&#x5230;&#x6240;&#x6709;&#x573A;&#x666F;&#x3002;&#x5B9E;&#x8DF5;&#x8005;&#x5E94;&#x7ED3;&#x5408;&#x81EA;&#x8EAB;&#x6570;&#x636E;&#x5206;&#x5E03;&#x3001;&#x6A21;&#x578B;&#x9009;&#x578B;&#x548C;&#x6210;&#x672C;&#x7EA6;&#x675F;&#xFF0C;&#x505A;&#x5C0F;&#x89C4;&#x6A21; A/B &#x6D4B;&#x8BD5;&#xFF0C;&#x800C;&#x975E;&#x76F2;&#x76EE;&#x8DDF;&#x968F;&#x5355;&#x4E00;&#x8BBA;&#x6587;&#x7ED3;&#x8BBA;&#x3002;</li>
</ul>
<p><strong>5. RAG &#x6539;&#x8FDB;&#x65B9;&#x5411;&#xFF1A;&#x5206;&#x5757;&#x4E0D;&#x662F;&#x7EC8;&#x70B9;</strong></p>
<p>&#x65E2;&#x7136;&#x6458;&#x8981;&#x68C0;&#x7D22; &#x2248; LC &gt; &#x5206;&#x5757;&#x68C0;&#x7D22;&#xFF0C;RAG &#x7684;&#x4F18;&#x5316;&#x91CD;&#x70B9;&#x4E0D;&#x5E94;&#x53EA;&#x653E;&#x5728;&quot;&#x68C0;&#x7D22;&#x66F4;&#x51C6;&quot;&#x4E0A;&#xFF0C;&#x800C;&#x5E94;&#x63A2;&#x7D22;&#x66F4;&#x597D;&#x7684;<strong>&#x4FE1;&#x606F;&#x538B;&#x7F29;&#x4E0E;&#x7EC4;&#x7EC7;&#x65B9;&#x5F0F;</strong>&#x2014;&#x2014;&#x5982;&#x5206;&#x5C42;&#x6458;&#x8981;&#x3001;&#x56FE;&#x7ED3;&#x6784;&#x3001;&#x591A;&#x7C92;&#x5EA6;&#x7D22;&#x5F15;&#x7B49;&#xFF0C;&#x8BA9;&#x68C0;&#x7D22;&#x5230;&#x7684;&#x5185;&#x5BB9;&#x66F4;&#x63A5;&#x8FD1;&quot;&#x4E0E;&#x95EE;&#x9898;&#x76F8;&#x5173;&#x7684;&#x5B8C;&#x6574;&#x8BED;&#x4E49;&#x5355;&#x5143;&quot;&#xFF0C;&#x800C;&#x975E;&quot;&#x6070;&#x597D;&#x547D;&#x4E2D;&#x7684;&#x968F;&#x673A;&#x7247;&#x6BB5;&quot;&#x3002;&#x8FD9;&#x4E0E; GraphRAG &#x7528;&quot;&#x793E;&#x533A;&#x6458;&#x8981;&quot;&#x66FF;&#x4EE3;&quot;&#x76F8;&#x4F3C;&#x7247;&#x6BB5;&quot;&#x7684;&#x601D;&#x8DEF;&#x4E00;&#x81F4;&#xFF1A;&#x95EE;&#x9898;&#x7684;&#x672C;&#x8D28;&#x662F;&quot;&#x5982;&#x4F55;&#x7EC4;&#x7EC7;&#x4FE1;&#x606F;&#x4F9B; LLM &#x6D88;&#x5316;&quot;&#xFF0C;&#x800C;&#x975E;&quot;&#x5982;&#x4F55;&#x68C0;&#x7D22;&#x5F97;&#x66F4;&#x51C6;&quot;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<ol>
<li><strong>LC &#x4E0E; RAG &#x5404;&#x6709;&#x4F18;&#x52BF;&#x573A;&#x666F;&#xFF0C;&#x4E0D;&#x662F;&#x66FF;&#x4EE3;&#x5173;&#x7CFB;</strong> &#x2014;&#x2014; Wikipedia &#x7C7B; QA &#x504F;&#x5411; LC&#xFF0C;&#x5BF9;&#x8BDD;&#x7C7B;&#x3001;&#x901A;&#x7528;&#x67E5;&#x8BE2;&#x504F;&#x5411; RAG&#xFF1B;&quot;RAG &#x5DF2;&#x6B7B;&quot;&#x662F;&#x4F2A;&#x547D;&#x9898;&#x3002;</li>
<li><strong>&#x6458;&#x8981;&#x68C0;&#x7D22; &#x2248; LC &gt; &#x5206;&#x5757;&#x68C0;&#x7D22;</strong> &#x2014;&#x2014; RAG &#x7684;&#x74F6;&#x9888;&#x5728;&#x5206;&#x5757;&#x7B56;&#x7565;&#xFF0C;&#x6539;&#x8FDB;&#x6458;&#x8981;/&#x538B;&#x7F29;&#x7B56;&#x7565;&#x53EF;&#x80FD;&#x6BD4;&#x5806;&#x68C0;&#x7D22;&#x7CBE;&#x5EA6;&#x66F4;&#x6709;&#x6548;&#x3002;</li>
<li><strong>&#x8BC4;&#x6D4B;&#x9700;&#x8FC7;&#x6EE4;&quot;&#x65E0;&#x9700;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&quot;&#x7684;&#x95EE;&#x9898;</strong> &#x2014;&#x2014; &#x5426;&#x5219;&#x7ED3;&#x8BBA;&#x4F1A;&#x88AB;&#x7B80;&#x5355;&#x9898;&#x6C61;&#x67D3;&#xFF1B;&#x8FD9;&#x662F;&#x65B9;&#x6CD5;&#x8BBA;&#x4E0A;&#x7684;&#x91CD;&#x8981;&#x6559;&#x8BAD;&#x3002;</li>
<li><strong>&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#x662F;&#x5173;&#x952E;&#x5374;&#x88AB;&#x5FFD;&#x89C6;&#x7684;&#x7EF4;&#x5EA6;</strong> &#x2014;&#x2014; &#x68C0;&#x7D22;&#x8D28;&#x91CF;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x53EC;&#x56DE;&#xFF0C;&#x8FD8;&#x8981;&#x770B;&quot;&#x4E0E;&#x95EE;&#x9898;&#x7684;&#x76F8;&#x5173;&#x6027;&quot;&#x3002;</li>
<li><strong>&#x6210;&#x672C;&#x4E0E;&#x5EF6;&#x8FDF;&#x5F80;&#x5F80;&#x6BD4; 2% &#x51C6;&#x786E;&#x7387;&#x66F4;&#x91CD;&#x8981;</strong> &#x2014;&#x2014; RAG &#x7684;&#x6210;&#x672C;&#x4F18;&#x52BF;&#x662F;&#x5DE5;&#x7A0B;&#x843D;&#x5730;&#x7684;&#x6740;&#x624B;&#x950F;&#x3002;</li>
<li><strong>SELF-ROUTE &#x7B49;&#x6DF7;&#x5408;&#x8DEF;&#x7531;&#x601D;&#x8DEF;</strong> &#x2014;&#x2014; &#x6839;&#x636E;&#x95EE;&#x9898;&#x590D;&#x6742;&#x5EA6;&#x52A8;&#x6001;&#x9009;&#x62E9; RAG &#x6216; LC&#xFF0C;&#x53EF;&#x80FD;&#x662F;&#x517C;&#x987E;&#x6027;&#x80FD;&#x4E0E;&#x6210;&#x672C;&#x7684;&#x6700;&#x4F18;&#x65B9;&#x5411;&#x3002;</li>
</ol>
<p><strong>&#x4E00;&#x53E5;&#x8BDD;&#x6982;&#x62EC;&#xFF1A;</strong> &#x522B;&#x95EE;&quot;LC &#x548C; RAG &#x8C01;&#x8D62;&quot;&#xFF0C;&#x800C;&#x8981;&#x95EE;&quot;&#x5728;&#x4EC0;&#x4E48;&#x7EA6;&#x675F;&#x4E0B;&#x3001;&#x5BF9;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#x3001;&#x9009;&#x8C01;&#x66F4;&#x5408;&#x9002;&quot;&#x2014;&#x2014;&#x8BBA;&#x6587;&#x7ED9;&#x51FA;&#x4E86;&#x65B9;&#x6CD5;&#x8BBA;&#x4FEE;&#x6B63;&#x548C;&#x573A;&#x666F;&#x5316;&#x7ED3;&#x8BBA;&#xFF0C;&#x4F46;&#x771F;&#x6B63;&#x7684;&#x6700;&#x4F18;&#x89E3;&#x53EF;&#x80FD;&#x662F;&#x50CF; SELF-ROUTE &#x90A3;&#x6837;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x81EA;&#x5DF1;&#x51B3;&#x5B9A;&#x3002;&#x540C;&#x65F6;&#xFF0C;&#x82E5;&#x575A;&#x6301;&#x7528; RAG&#xFF0C;&#x4F18;&#x5148;&#x8003;&#x8651;&#x6539;&#x8FDB;&#x5206;&#x5757;&#x4E0E;&#x6458;&#x8981;&#x7B56;&#x7565;&#xFF0C;&#x800C;&#x975E;&#x4E00;&#x5473;&#x5806;&#x68C0;&#x7D22;&#x7CBE;&#x5EA6;&#x3002;</p>
<p><strong>&#x9605;&#x8BFB;&#x5EFA;&#x8BAE;&#xFF1A;</strong> &#x82E5;&#x4F60;&#x6B63;&#x5728;&#x505A; LC vs RAG &#x7684;&#x67B6;&#x6784;&#x9009;&#x578B;&#xFF0C;&#x5EFA;&#x8BAE;&#x7ED3;&#x5408;&#x672C;&#x8BBA;&#x6587;&#x7684;&quot;&#x5B9E;&#x8DF5;&#x9009;&#x578B;&#x53C2;&#x8003;&quot;&#x8868;&#x3001;SELF-ROUTE &#x7684;&#x6DF7;&#x5408;&#x8DEF;&#x7531;&#x601D;&#x8DEF;&#xFF0C;&#x4EE5;&#x53CA; LaRA &#x7684;&quot;&#x65E0;&#x94F6;&#x5F39;&quot;&#x7ED3;&#x8BBA;&#xFF0C;&#x5728;&#x81EA;&#x5BB6;&#x6570;&#x636E;&#x4E0A;&#x505A;&#x5C0F;&#x89C4;&#x6A21;&#x9A8C;&#x8BC1;&#x540E;&#x518D;&#x505A;&#x6700;&#x7EC8;&#x51B3;&#x7B56;&#x3002;&#x8BBA;&#x6587;&#x7684;&quot;&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&quot;&#x63D0;&#x9192;&#x4E5F;&#x503C;&#x5F97;&#x7EB3;&#x5165; RAG &#x7CFB;&#x7EDF;&#x7684;&#x8BC4;&#x4F30;&#x6307;&#x6807;&#x2014;&#x2014;&#x68C0;&#x7D22;&#x53EC;&#x56DE;&#x9AD8;&#x4E0D;&#x7B49;&#x4E8E;&#x7B54;&#x6848;&#x8D28;&#x91CF;&#x9AD8;&#x3002;</p>
<hr>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2501.01880">arXiv:2501.01880 - Long Context vs. RAG for LLMs</a></li>
<li><a href="https://aclanthology.org/2024.emnlp-industry.66/">Google DeepMind SELF-ROUTE (EMNLP 2024) - &#x6DF7;&#x5408; RAG/LC &#x8DEF;&#x7531;</a></li>
<li><a href="https://proceedings.mlr.press/v267/li25dv.html">LaRA Benchmark (ICML 2025) - No Silver Bullet</a></li>
<li><a href="https://arxiv.org/pdf/2501.01880">NTU/SMU &#x8BBA;&#x6587; PDF</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-03-10</em></p>
`,E=[{level:2,title:"这篇论文解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么现在才有人系统回答？",children:[]},{level:2,title:"它的核心发现是什么？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 长上下文（Long Context, LC）",children:[]},{level:3,title:"2. 分块检索（Chunk-based Retrieval）",children:[]},{level:3,title:"3. 摘要检索（Summarization-based Retrieval）",children:[]},{level:3,title:"4. 上下文相关性（Context Relevance）",children:[]},{level:3,title:"5. SELF-ROUTE（自我路由）",children:[]},{level:3,title:"6. 评测污染（Benchmark Contamination）",children:[]}]},{level:2,title:"延伸思考",children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
