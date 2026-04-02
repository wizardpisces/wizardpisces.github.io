const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2023-12-18</em></p>
<p>&#x540C;&#x6D4E;&#x5927;&#x5B66;&#x3001;&#x590D;&#x65E6;&#x5927;&#x5B66;&#x8054;&#x5408;&#x53D1;&#x5E03;&#x7684; <strong>&#x300A;Retrieval-Augmented Generation for Large Language Models: A Survey&#x300B;</strong>&#xFF08;<a href="https://arxiv.org/abs/2312.10997">arXiv:2312.10997</a>&#xFF09;&#x662F; RAG &#x9886;&#x57DF;&#x6700;&#x5177;&#x5F71;&#x54CD;&#x529B;&#x7684;&#x7EFC;&#x8FF0;&#x4E4B;&#x4E00;&#xFF0C;&#x7CFB;&#x7EDF;&#x68B3;&#x7406;&#x4E86; 100+ &#x7BC7; RAG &#x7814;&#x7A76;&#x3002;</p>
<p>&#x4F46;&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x4E0D;&#x6253;&#x7B97;&#x590D;&#x8FF0;&#x7EFC;&#x8FF0;&#x672C;&#x8EAB;&#x2014;&#x2014;&#x800C;&#x662F;&#x63D0;&#x70BC;&#x5176;&#x4E2D;<strong>&#x771F;&#x6B63;&#x6709;&#x542F;&#x53D1;&#x6027;&#x7684;&#x6D1E;&#x5BDF;</strong>&#xFF1A;&#x90A3;&#x4E9B;&#x6539;&#x53D8;&#x4F60;&#x5BF9; RAG &#x8BA4;&#x77E5;&#x7684;&#x89C2;&#x70B9;&#x3001;&#x53CD;&#x76F4;&#x89C9;&#x7684;&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#x3001;&#x4EE5;&#x53CA;&#x5BF9;&#x5DE5;&#x7A0B;&#x5B9E;&#x8DF5;&#x6709;&#x76F4;&#x63A5;&#x6307;&#x5BFC;&#x610F;&#x4E49;&#x7684;&#x8BBE;&#x8BA1;&#x539F;&#x5219;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x4E00;&#xFF1A;RAG &#x7684;&#x4E09;&#x4EE3;&#x6F14;&#x8FDB;&#xFF0C;&#x672C;&#x8D28;&#x662F;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x7684;&quot;&#x89E3;&#x8026;&#x53F2;&quot;"><a href="#&#x6D1E;&#x5BDF;&#x4E00;&#xFF1A;RAG &#x7684;&#x4E09;&#x4EE3;&#x6F14;&#x8FDB;&#xFF0C;&#x672C;&#x8D28;&#x662F;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x7684;&quot;&#x89E3;&#x8026;&#x53F2;&quot;"></a>&#x6D1E;&#x5BDF;&#x4E00;&#xFF1A;RAG &#x7684;&#x4E09;&#x4EE3;&#x6F14;&#x8FDB;&#xFF0C;&#x672C;&#x8D28;&#x662F;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x7684;&quot;&#x89E3;&#x8026;&#x53F2;&quot;</h2>
<p>&#x8BBA;&#x6587;&#x5C06; RAG &#x5212;&#x5206;&#x4E3A;&#x4E09;&#x4E2A;&#x8303;&#x5F0F;&#xFF1A;<strong>Naive RAG &#x2192; Advanced RAG &#x2192; Modular RAG</strong>&#x3002;</p>
<p>&#x8868;&#x9762;&#x4E0A;&#x770B;&#xFF0C;&#x8FD9;&#x662F;&#x529F;&#x80FD;&#x7684;&#x4E30;&#x5BCC;&#x5316;&#x3002;&#x4F46;&#x5982;&#x679C;&#x4F60;&#x4ECE;&#x8F6F;&#x4EF6;&#x5DE5;&#x7A0B;&#x89C6;&#x89D2;&#x5BA1;&#x89C6;&#xFF0C;&#x4F1A;&#x53D1;&#x73B0;&#x4E00;&#x4E2A;&#x66F4;&#x6DF1;&#x5C42;&#x7684;&#x89C4;&#x5F8B;&#xFF1A;<strong>RAG &#x7684;&#x6F14;&#x8FDB;&#x8F68;&#x8FF9;&#xFF0C;&#x5B8C;&#x7F8E;&#x590D;&#x523B;&#x4E86;&#x8F6F;&#x4EF6;&#x67B6;&#x6784;&#x4ECE;&#x5355;&#x4F53;&#x5230;&#x5FAE;&#x670D;&#x52A1;&#x7684;&#x89E3;&#x8026;&#x5386;&#x7A0B;&#x3002;</strong></p>
<table>
<thead>
<tr>
<th>&#x8303;&#x5F0F;</th>
<th>&#x67B6;&#x6784;&#x9690;&#x55BB;</th>
<th>&#x6838;&#x5FC3;&#x7279;&#x5F81;</th>
<th>&#x81F4;&#x547D;&#x7F3A;&#x9677;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Naive RAG</td>
<td>&#x5355;&#x4F53;&#x5E94;&#x7528;</td>
<td>&#x56FA;&#x5B9A;&#x7684; Retrieve-Read &#x7BA1;&#x9053;</td>
<td>&#x68C0;&#x7D22;&#x8D28;&#x91CF;&#x5DEE;&#x65F6;&#x65E0;&#x515C;&#x5E95;&#xFF0C;&#x5783;&#x573E;&#x8FDB;&#x5783;&#x573E;&#x51FA;</td>
</tr>
<tr>
<td>Advanced RAG</td>
<td>&#x5206;&#x5C42;&#x67B6;&#x6784;</td>
<td>&#x52A0;&#x5165; Pre/Post-Retrieval &#x5904;&#x7406;&#x5C42;</td>
<td>&#x4ECD;&#x662F;&#x94FE;&#x5F0F;&#x7ED3;&#x6784;&#xFF0C;&#x65E0;&#x6CD5;&#x8DF3;&#x8FC7;&#x6216;&#x56DE;&#x9000;</td>
</tr>
<tr>
<td>Modular RAG</td>
<td>&#x5FAE;&#x670D;&#x52A1;/&#x63D2;&#x4EF6;&#x5316;</td>
<td>&#x6A21;&#x5757;&#x53EF;&#x66FF;&#x6362;&#x3001;&#x53EF;&#x7F16;&#x6392;&#x3001;&#x53EF;&#x8DF3;&#x8FC7;</td>
<td>&#x7F16;&#x6392;&#x590D;&#x6742;&#x5EA6;&#x4E0A;&#x5347;&#xFF0C;&#x9700;&#x8981;&quot;&#x8C03;&#x5EA6;&#x667A;&#x80FD;&quot;</td>
</tr>
</tbody>
</table>
<p><strong>&#x5173;&#x952E;&#x542F;&#x793A;&#xFF1A;</strong> Modular RAG &#x7684;&#x771F;&#x6B63;&#x7A81;&#x7834;&#x4E0D;&#x5728;&#x4E8E;&quot;&#x6A21;&#x5757;&#x591A;&quot;&#xFF0C;&#x800C;&#x5728;&#x4E8E;<strong>&#x6D41;&#x7A0B;&#x53EF;&#x4EE5;&#x4E0D;&#x662F;&#x7EBF;&#x6027;&#x7684;</strong>&#x3002;Self-RAG &#x53EF;&#x4EE5;&#x51B3;&#x5B9A;&quot;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x4E0D;&#x9700;&#x8981;&#x68C0;&#x7D22;&quot;&#xFF0C;FLARE &#x53EF;&#x4EE5;&#x5728;&#x751F;&#x6210;&#x5230;&#x4E00;&#x534A;&#x65F6;&#x89E6;&#x53D1;&#x68C0;&#x7D22;&#x2014;&#x2014;&#x8FD9;&#x79CD;<strong>&#x81EA;&#x9002;&#x5E94;&#x63A7;&#x5236;&#x6D41;</strong>&#x624D;&#x662F;&#x4ECE; Advanced &#x5230; Modular &#x7684;&#x8D28;&#x53D8;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x4E8C;&#xFF1A;&#x566A;&#x58F0;&#x6587;&#x6863;&#x53CD;&#x800C;&#x63D0;&#x5347;&#x51C6;&#x786E;&#x7387; 30%&#x2014;&#x2014;&#x68C0;&#x7D22;&#x7684;&quot;&#x6709;&#x76CA;&#x6C61;&#x67D3;&quot;"><a href="#&#x6D1E;&#x5BDF;&#x4E8C;&#xFF1A;&#x566A;&#x58F0;&#x6587;&#x6863;&#x53CD;&#x800C;&#x63D0;&#x5347;&#x51C6;&#x786E;&#x7387; 30%&#x2014;&#x2014;&#x68C0;&#x7D22;&#x7684;&quot;&#x6709;&#x76CA;&#x6C61;&#x67D3;&quot;"></a>&#x6D1E;&#x5BDF;&#x4E8C;&#xFF1A;&#x566A;&#x58F0;&#x6587;&#x6863;&#x53CD;&#x800C;&#x63D0;&#x5347;&#x51C6;&#x786E;&#x7387; 30%&#x2014;&#x2014;&#x68C0;&#x7D22;&#x7684;&quot;&#x6709;&#x76CA;&#x6C61;&#x67D3;&quot;</h2>
<p>&#x8BBA;&#x6587;&#x5F15;&#x7528;&#x4E86; Cuconasu et al. &#x7684;&#x4E00;&#x4E2A;&#x6781;&#x5176;&#x53CD;&#x76F4;&#x89C9;&#x7684;&#x5B9E;&#x9A8C;&#x53D1;&#x73B0;&#xFF1A;</p>
<blockquote>
<p><strong>&#x5728;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&#x4E2D;&#x52A0;&#x5165;&#x4E0D;&#x76F8;&#x5173;&#x7684;&#x6587;&#x6863;&#xFF0C;&#x51C6;&#x786E;&#x7387;&#x53CD;&#x800C;&#x63D0;&#x5347;&#x4E86;&#x8D85;&#x8FC7; 30%&#x3002;</strong></p>
</blockquote>
<p>&#x8FD9;&#x5B8C;&#x5168;&#x8FDD;&#x80CC;&#x4E86;&quot;&#x68C0;&#x7D22;&#x8D8A;&#x7CBE;&#x51C6;&#x8D8A;&#x597D;&quot;&#x7684;&#x76F4;&#x89C9;&#x3002;&#x4E3A;&#x4EC0;&#x4E48;&#xFF1F;</p>
<p>&#x53EF;&#x80FD;&#x7684;&#x89E3;&#x91CA;&#xFF1A;<strong>&#x566A;&#x58F0;&#x6587;&#x6863;&#x5145;&#x5F53;&#x4E86;&#x4E00;&#x79CD;&#x9690;&#x5F0F;&#x7684;&quot;&#x6B63;&#x5219;&#x5316;&quot;</strong>&#x3002;&#x5F53;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;&#x53EA;&#x6709;&#x9AD8;&#x5EA6;&#x76F8;&#x5173;&#x7684;&#x6587;&#x6863;&#x65F6;&#xFF0C;&#x6A21;&#x578B;&#x5BB9;&#x6613;&#x8FC7;&#x5EA6;&#x4F9D;&#x8D56;&#x68C0;&#x7D22;&#x5185;&#x5BB9;&#x3001;&#x4E27;&#x5931;&#x81EA;&#x8EAB;&#x63A8;&#x7406;&#x80FD;&#x529B;&#xFF08;&#x8BBA;&#x6587;&#x79F0;&#x4E4B;&#x4E3A;&quot;&#x8FC7;&#x5EA6;&#x4F9D;&#x8D56;&#x589E;&#x5F3A;&#x4FE1;&#x606F;&quot;&#xFF09;&#x3002;&#x800C;&#x9002;&#x91CF;&#x566A;&#x58F0;&#x8FEB;&#x4F7F;&#x6A21;&#x578B;&#x5728;&#x68C0;&#x7D22;&#x5185;&#x5BB9;&#x548C;&#x81EA;&#x8EAB;&#x77E5;&#x8BC6;&#x4E4B;&#x95F4;&#x505A;&#x6743;&#x8861;&#x2014;&#x2014;&#x5C31;&#x50CF; Dropout &#x4E4B;&#x4E8E;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x3002;</p>
<p><strong>&#x5B9E;&#x8DF5;&#x542F;&#x793A;&#xFF1A;</strong> &#x4E0D;&#x8981;&#x628A;&#x5168;&#x90E8;&#x7CBE;&#x529B;&#x653E;&#x5728;&#x63D0;&#x5347;&#x68C0;&#x7D22;&#x7CBE;&#x5EA6;&#x4E0A;&#x3002;&#x5728;&#x67D0;&#x4E9B;&#x573A;&#x666F;&#x4E0B;&#xFF0C;&quot;&#x7A0D;&#x5FAE;&#x5BBD;&#x677E;&quot;&#x7684;&#x68C0;&#x7D22;&#x7B56;&#x7565;&#x53EF;&#x80FD;&#x6BD4;&quot;&#x6781;&#x81F4;&#x7CBE;&#x51C6;&quot;&#x8868;&#x73B0;&#x66F4;&#x597D;&#x3002;&#x5173;&#x952E;&#x5728;&#x4E8E;&#x8BA9; LLM &#x4FDD;&#x6301;&quot;&#x6279;&#x5224;&#x6027;&#x5730;&#x4F7F;&#x7528;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&quot;&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&quot;&#x65E0;&#x8111;&#x4FE1;&#x4EFB;&quot;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x4E09;&#xFF1A;&quot;&#x751F;&#x6210;&#x66FF;&#x4EE3;&#x68C0;&#x7D22;&quot;&#x2014;&#x2014;LLM &#x81EA;&#x5DF1;&#x7F16;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x6BD4;&#x641C;&#x5230;&#x7684;&#x66F4;&#x597D;"><a href="#&#x6D1E;&#x5BDF;&#x4E09;&#xFF1A;&quot;&#x751F;&#x6210;&#x66FF;&#x4EE3;&#x68C0;&#x7D22;&quot;&#x2014;&#x2014;LLM &#x81EA;&#x5DF1;&#x7F16;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x6BD4;&#x641C;&#x5230;&#x7684;&#x66F4;&#x597D;"></a>&#x6D1E;&#x5BDF;&#x4E09;&#xFF1A;&quot;&#x751F;&#x6210;&#x66FF;&#x4EE3;&#x68C0;&#x7D22;&quot;&#x2014;&#x2014;LLM &#x81EA;&#x5DF1;&#x7F16;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x6BD4;&#x641C;&#x5230;&#x7684;&#x66F4;&#x597D;</h2>
<p>GenRead &#x65B9;&#x6CD5;&#x63D0;&#x51FA;&#x4E86;&#x4E00;&#x4E2A;&#x5927;&#x80C6;&#x7684;&#x66FF;&#x6362;&#xFF1A;<strong>&#x7528; LLM &#x751F;&#x6210;&#x7684;&#x6587;&#x6863;&#x66FF;&#x4EE3;&#x5916;&#x90E8;&#x68C0;&#x7D22;</strong>&#x3002;&#x5B9E;&#x9A8C;&#x8868;&#x660E;&#xFF0C;LLM &#x751F;&#x6210;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x5F80;&#x5F80;&#x5305;&#x542B;&#x6BD4;&#x771F;&#x5B9E;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&#x66F4;&#x51C6;&#x786E;&#x7684;&#x7B54;&#x6848;&#x3002;</p>
<p>&#x8FD9;&#x770B;&#x4F3C;&#x8352;&#x8C2C;&#x2014;&#x2014;&#x5982;&#x679C; LLM &#x81EA;&#x5DF1;&#x5C31;&#x77E5;&#x9053;&#x7B54;&#x6848;&#xFF0C;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD8;&#x9700;&#x8981; RAG&#xFF1F;&#x4F46;&#x8BBA;&#x6587;&#x7ED9;&#x51FA;&#x4E86;&#x7CBE;&#x5999;&#x7684;&#x89E3;&#x91CA;&#xFF1A;</p>
<blockquote>
<p>LLM &#x751F;&#x6210;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4E4B;&#x6240;&#x4EE5;&#x66F4;&#x6709;&#x6548;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x5B83;&#x4E0E; LLM &#x7684;<strong>&#x56E0;&#x679C;&#x8BED;&#x8A00;&#x5EFA;&#x6A21;&#xFF08;Causal Language Modeling&#xFF09;&#x9884;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#x9AD8;&#x5EA6;&#x5BF9;&#x9F50;</strong>&#x2014;&#x2014;&#x6A21;&#x578B;&#x66F4;&#x64C5;&#x957F;&#x4ECE;&quot;&#x81EA;&#x5DF1;&#x98CE;&#x683C;&quot;&#x7684;&#x6587;&#x672C;&#x4E2D;&#x63D0;&#x53D6;&#x4FE1;&#x606F;&#x3002;</p>
</blockquote>
<p><strong>&#x6DF1;&#x5C42;&#x542B;&#x4E49;&#xFF1A;</strong> &#x68C0;&#x7D22;&#x7684;&#x76EE;&#x7684;&#x4E0D;&#x4EC5;&#x662F;&#x63D0;&#x4F9B;&quot;&#x6B63;&#x786E;&#x4FE1;&#x606F;&quot;&#xFF0C;&#x66F4;&#x662F;&#x63D0;&#x4F9B;&quot;&#x6A21;&#x578B;&#x80FD;&#x9AD8;&#x6548;&#x6D88;&#x5316;&#x7684;&#x4FE1;&#x606F;&#x683C;&#x5F0F;&quot;&#x3002;&#x4E00;&#x6BB5;&#x5B8C;&#x7F8E;&#x6B63;&#x786E;&#x4F46;&#x8868;&#x8FF0;&#x6666;&#x6DA9;&#x7684;&#x7EF4;&#x57FA;&#x767E;&#x79D1;&#x6587;&#x672C;&#xFF0C;&#x53EF;&#x80FD;&#x4E0D;&#x5982;&#x4E00;&#x6BB5; LLM &#x81EA;&#x5DF1;&#x7EC4;&#x7EC7;&#x7684;&#x3001;&#x7A0D;&#x6709;&#x4E0D;&#x51C6;&#x786E;&#x4F46;&#x903B;&#x8F91;&#x6E05;&#x6670;&#x7684;&#x6587;&#x672C;&#x6709;&#x7528;&#x3002;&#x8FD9;&#x63ED;&#x793A;&#x4E86; RAG &#x7684;&#x4E00;&#x4E2A;&#x9690;&#x85CF;&#x7EF4;&#x5EA6;&#xFF1A;<strong>Retriever &#x548C; Generator &#x4E4B;&#x95F4;&#x5B58;&#x5728;&quot;&#x8BED;&#x8A00;&#x98CE;&#x683C;&#x5BF9;&#x9F50;&quot;&#x7684;&#x9700;&#x6C42;&#x3002;</strong></p>
<h2 id="&#x6D1E;&#x5BDF;&#x56DB;&#xFF1A;Lost in the Middle&#x2014;&#x2014;LLM &#x7684;&quot;&#x6CE8;&#x610F;&#x529B;&#x6C99;&#x6F0F;&quot;"><a href="#&#x6D1E;&#x5BDF;&#x56DB;&#xFF1A;Lost in the Middle&#x2014;&#x2014;LLM &#x7684;&quot;&#x6CE8;&#x610F;&#x529B;&#x6C99;&#x6F0F;&quot;"></a>&#x6D1E;&#x5BDF;&#x56DB;&#xFF1A;Lost in the Middle&#x2014;&#x2014;LLM &#x7684;&quot;&#x6CE8;&#x610F;&#x529B;&#x6C99;&#x6F0F;&quot;</h2>
<p>&#x8BBA;&#x6587;&#x5F15;&#x7528;&#x4E86;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x53D1;&#x73B0;&#xFF1A;<strong>LLM &#x503E;&#x5411;&#x4E8E;&#x53EA;&#x5173;&#x6CE8;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x5F00;&#x5934;&#x548C;&#x7ED3;&#x5C3E;&#xFF0C;&#x9057;&#x5FD8;&#x4E2D;&#x95F4;&#x90E8;&#x5206;</strong>&#xFF08;&quot;Lost in the Middle&quot; &#x95EE;&#x9898;&#xFF09;&#x3002;</p>
<p>&#x8FD9;&#x5BF9; RAG &#x7684;&#x5DE5;&#x7A0B;&#x5B9E;&#x8DF5;&#x6709;&#x76F4;&#x63A5;&#x5F71;&#x54CD;&#xFF1A;</p>
<ul>
<li><strong>Reranking &#x4E0D;&#x53EA;&#x662F;&quot;&#x6392;&#x8D28;&#x91CF;&quot;&#xFF0C;&#x66F4;&#x662F;&quot;&#x6392;&#x4F4D;&#x7F6E;&quot;&#xFF1A;</strong> &#x6700;&#x76F8;&#x5173;&#x7684;&#x6587;&#x6863;&#x5E94;&#x8BE5;&#x653E;&#x5728; Prompt &#x7684;&#x5F00;&#x5934;&#x6216;&#x7ED3;&#x5C3E;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E2D;&#x95F4;&#x3002;LlamaIndex &#x548C; LangChain &#x7684; <code>LostInTheMiddleReranker</code> &#x6B63;&#x662F;&#x57FA;&#x4E8E;&#x6B64;&#x539F;&#x7406;&#x3002;</li>
<li><strong>&#x68C0;&#x7D22;&#x6570;&#x91CF;&#x4E0D;&#x662F;&#x8D8A;&#x591A;&#x8D8A;&#x597D;&#xFF1A;</strong> &#x585E;&#x5165;&#x8FC7;&#x591A;&#x6587;&#x6863;&#x4E0D;&#x4EC5;&#x589E;&#x52A0; token &#x6D88;&#x8017;&#xFF0C;&#x8FD8;&#x4F1A;&#x628A;&#x5173;&#x952E;&#x4FE1;&#x606F;&#x63A8;&#x5230;&quot;&#x9057;&#x5FD8;&#x533A;&quot;&#x3002;&#x8FD9;&#x5728;&#x672C;&#x8D28;&#x4E0A;&#x4E0E;&#x4EBA;&#x7C7B;&#x9605;&#x8BFB;&#x7684;&quot;&#x8BA4;&#x77E5;&#x8D1F;&#x8377;&quot;&#x9AD8;&#x5EA6;&#x76F8;&#x4F3C;&#x2014;&#x2014;&#x7ED9;&#x4F60; 3 &#x7BC7;&#x8BBA;&#x6587;&#x548C; 30 &#x7BC7;&#x8BBA;&#x6587;&#xFF0C;&#x524D;&#x8005;&#x4F60;&#x53CD;&#x800C;&#x8BB0;&#x5F97;&#x66F4;&#x7262;&#x3002;</li>
</ul>
<p><strong>&#x5B9E;&#x8DF5;&#x542F;&#x793A;&#xFF1A;</strong> RAG &#x7CFB;&#x7EDF;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;&#x662F;&#x4E00;&#x4E2A;&#x88AB;&#x4E25;&#x91CD;&#x4F4E;&#x4F30;&#x7684;&#x5DE5;&#x7A0B;&#x95EE;&#x9898;&#x3002;&#x4E0E;&#x5176;&#x65E0;&#x8111;&#x589E;&#x52A0; Top-K&#xFF0C;&#x4E0D;&#x5982;&#x5728;&#x56FA;&#x5B9A; K &#x7684;&#x524D;&#x63D0;&#x4E0B;&#x4F18;&#x5316;&#x6587;&#x6863;&#x7684;&#x6392;&#x5217;&#x7B56;&#x7565;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x4E94;&#xFF1A;&#x81EA;&#x9002;&#x5E94;&#x68C0;&#x7D22;&#x2014;&#x2014;&#x6700;&#x5F3A;&#x7684;&#x80FD;&#x529B;&#x662F;&quot;&#x77E5;&#x9053;&#x4F55;&#x65F6;&#x4E0D;&#x68C0;&#x7D22;&quot;"><a href="#&#x6D1E;&#x5BDF;&#x4E94;&#xFF1A;&#x81EA;&#x9002;&#x5E94;&#x68C0;&#x7D22;&#x2014;&#x2014;&#x6700;&#x5F3A;&#x7684;&#x80FD;&#x529B;&#x662F;&quot;&#x77E5;&#x9053;&#x4F55;&#x65F6;&#x4E0D;&#x68C0;&#x7D22;&quot;"></a>&#x6D1E;&#x5BDF;&#x4E94;&#xFF1A;&#x81EA;&#x9002;&#x5E94;&#x68C0;&#x7D22;&#x2014;&#x2014;&#x6700;&#x5F3A;&#x7684;&#x80FD;&#x529B;&#x662F;&quot;&#x77E5;&#x9053;&#x4F55;&#x65F6;&#x4E0D;&#x68C0;&#x7D22;&quot;</h2>
<p>&#x8BBA;&#x6587;&#x91CD;&#x70B9;&#x5206;&#x6790;&#x4E86; <strong>FLARE</strong> &#x548C; <strong>Self-RAG</strong> &#x4E24;&#x79CD;&#x81EA;&#x9002;&#x5E94;&#x68C0;&#x7D22;&#x65B9;&#x6848;&#xFF1A;</p>
<ul>
<li><strong>FLARE&#xFF1A;</strong> &#x76D1;&#x63A7;&#x751F;&#x6210;&#x8FC7;&#x7A0B;&#x4E2D; token &#x7684;&#x6982;&#x7387;&#x3002;&#x5F53;&#x6982;&#x7387;&#x4F4E;&#x4E8E;&#x9608;&#x503C;&#xFF08;&#x6A21;&#x578B;&quot;&#x4E0D;&#x786E;&#x5B9A;&quot;&#x65F6;&#xFF09;&#xFF0C;&#x81EA;&#x52A8;&#x89E6;&#x53D1;&#x68C0;&#x7D22;&#x3002;</li>
<li><strong>Self-RAG&#xFF1A;</strong> &#x5F15;&#x5165;&quot;&#x53CD;&#x601D; token&quot;&#xFF08;Reflection Token&#xFF09;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x5728;&#x63A8;&#x7406;&#x8FC7;&#x7A0B;&#x4E2D;&#x81EA;&#x4E3B;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x9700;&#x8981;&#x68C0;&#x7D22;&#x3001;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x53EF;&#x9760;&#x3002;</li>
</ul>
<p><strong>&#x6838;&#x5FC3;&#x6D1E;&#x5BDF;&#xFF1A;</strong> &#x4F20;&#x7EDF; RAG &#x7684;&#x95EE;&#x9898;&#x4E0D;&#x5728;&#x4E8E;&quot;&#x68C0;&#x7D22;&#x505A;&#x5F97;&#x4E0D;&#x597D;&quot;&#xFF0C;&#x800C;&#x5728;&#x4E8E;&quot;&#x603B;&#x662F;&#x5728;&#x68C0;&#x7D22;&quot;&#x3002;&#x5F88;&#x591A;&#x7B80;&#x5355;&#x95EE;&#x9898;&#xFF08;&#x5982;&quot;&#x4E2D;&#x56FD;&#x7684;&#x9996;&#x90FD;&#x662F;&#x54EA;&#x91CC;&quot;&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x7684;&#x53C2;&#x6570;&#x77E5;&#x8BC6;&#x5C31;&#x8DB3;&#x4EE5;&#x56DE;&#x7B54;&#xFF0C;&#x5F3A;&#x5236;&#x68C0;&#x7D22;&#x53CD;&#x800C;&#x5F15;&#x5165;&#x5EF6;&#x8FDF;&#x548C;&#x566A;&#x58F0;&#x3002;</p>
<blockquote>
<p><strong>&#x771F;&#x6B63;&#x667A;&#x80FD;&#x7684; RAG &#x7CFB;&#x7EDF;&#xFF0C;&#x4E0D;&#x662F;&#x5728;&#x68C0;&#x7D22;&#x4E0A;&#x505A;&#x5230;&#x6781;&#x81F4;&#xFF0C;&#x800C;&#x662F;&#x80FD;&#x7CBE;&#x51C6;&#x5224;&#x65AD;&quot;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x9700;&#x4E0D;&#x9700;&#x8981;&#x68C0;&#x7D22;&quot;&#x3002;</strong></p>
</blockquote>
<p>&#x8FD9;&#x4E0E;&#x4EBA;&#x7C7B;&#x4E13;&#x5BB6;&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x4E00;&#x81F4;&#x2014;&#x2014;&#x4F60;&#x4E0D;&#x4F1A;&#x6BCF;&#x56DE;&#x7B54;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#x90FD;&#x53BB;&#x67E5; Google&#xFF0C;&#x53EA;&#x6709;&#x5728;&#x4E0D;&#x786E;&#x5B9A;&#x65F6;&#x624D;&#x67E5;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x516D;&#xFF1A;RAG vs Fine-tuning&#x2014;&#x2014;&#x4E0D;&#x662F;&#x4E8C;&#x9009;&#x4E00;&#xFF0C;&#x800C;&#x662F;&#x5404;&#x7BA1;&#x4E00;&#x5C42;"><a href="#&#x6D1E;&#x5BDF;&#x516D;&#xFF1A;RAG vs Fine-tuning&#x2014;&#x2014;&#x4E0D;&#x662F;&#x4E8C;&#x9009;&#x4E00;&#xFF0C;&#x800C;&#x662F;&#x5404;&#x7BA1;&#x4E00;&#x5C42;"></a>&#x6D1E;&#x5BDF;&#x516D;&#xFF1A;RAG vs Fine-tuning&#x2014;&#x2014;&#x4E0D;&#x662F;&#x4E8C;&#x9009;&#x4E00;&#xFF0C;&#x800C;&#x662F;&#x5404;&#x7BA1;&#x4E00;&#x5C42;</h2>
<p>&#x8BBA;&#x6587;&#x7528;&#x4E00;&#x4E2A;&#x4E8C;&#x7EF4;&#x8C61;&#x9650;&#x56FE;&#xFF08;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#x9700;&#x6C42; &#xD7; &#x6A21;&#x578B;&#x9002;&#x914D;&#x9700;&#x6C42;&#xFF09;&#x6E05;&#x6670;&#x5730;&#x5212;&#x5206;&#x4E86; RAG &#x548C; Fine-tuning &#x7684;&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x573A;&#x666F;</th>
<th>&#x63A8;&#x8350;&#x65B9;&#x6848;</th>
<th>&#x539F;&#x56E0;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x77E5;&#x8BC6;&#x9891;&#x7E41;&#x66F4;&#x65B0;&#xFF08;&#x65B0;&#x95FB;&#x3001;&#x5B9E;&#x65F6;&#x6570;&#x636E;&#xFF09;</td>
<td><strong>RAG</strong></td>
<td>Fine-tuning &#x9700;&#x8981;&#x91CD;&#x65B0;&#x8BAD;&#x7EC3;&#xFF0C;RAG &#x53EA;&#x9700;&#x66F4;&#x65B0;&#x77E5;&#x8BC6;&#x5E93;</td>
</tr>
<tr>
<td>&#x9700;&#x8981;&#x590D;&#x5236;&#x7279;&#x5B9A;&#x98CE;&#x683C;/&#x683C;&#x5F0F;</td>
<td><strong>Fine-tuning</strong></td>
<td>RAG &#x65E0;&#x6CD5;&#x6539;&#x53D8;&#x6A21;&#x578B;&#x7684;&quot;&#x5199;&#x4F5C;&#x98CE;&#x683C;&quot;</td>
</tr>
<tr>
<td>&#x4E13;&#x4E1A;&#x9886;&#x57DF; + &#x5B9E;&#x65F6;&#x6027;</td>
<td><strong>&#x4E24;&#x8005;&#x7ED3;&#x5408;</strong></td>
<td>Fine-tuning &#x5B66;&#x9886;&#x57DF;&quot;&#x8BED;&#x8A00;&quot;&#xFF0C;RAG &#x63D0;&#x4F9B;&#x5B9E;&#x65F6;&quot;&#x77E5;&#x8BC6;&quot;</td>
</tr>
<tr>
<td>&#x5168;&#x65B0;&#x4E8B;&#x5B9E;&#x77E5;&#x8BC6;</td>
<td><strong>RAG</strong></td>
<td>&#x5B9E;&#x9A8C;&#x8BC1;&#x660E; LLM &#x901A;&#x8FC7; fine-tuning &#x5F88;&#x96BE;&#x5B66;&#x4E60;&#x65B0;&#x7684;&#x4E8B;&#x5B9E;&#x4FE1;&#x606F;</td>
</tr>
</tbody>
</table>
<p>&#x8BBA;&#x6587;&#x5F15;&#x7528;&#x7684;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x5B9E;&#x9A8C;&#x7ED3;&#x8BBA;&#x5C24;&#x5176;&#x503C;&#x5F97;&#x91CD;&#x89C6;&#xFF1A;<strong>&#x65E0;&#x76D1;&#x7763; fine-tuning &#x5728;&#x6CE8;&#x5165;&#x65B0;&#x4E8B;&#x5B9E;&#x77E5;&#x8BC6;&#x65B9;&#x9762;&#x51E0;&#x4E4E;&#x65E0;&#x6548;&#xFF0C;RAG &#x5728;&#x6240;&#x6709;&#x77E5;&#x8BC6;&#x6CE8;&#x5165;&#x4EFB;&#x52A1;&#x4E0A;&#x4E00;&#x81F4;&#x5730;&#x4F18;&#x4E8E; fine-tuning&#x3002;</strong></p>
<p><strong>&#x6DF1;&#x5C42;&#x542B;&#x4E49;&#xFF1A;</strong> Fine-tuning &#x6539;&#x53D8;&#x7684;&#x662F;&#x6A21;&#x578B;&#x7684;&quot;&#x884C;&#x4E3A;&#x6A21;&#x5F0F;&quot;&#xFF08;&#x600E;&#x4E48;&#x8BF4;&#xFF09;&#xFF0C;RAG &#x6539;&#x53D8;&#x7684;&#x662F;&#x6A21;&#x578B;&#x7684;&quot;&#x4FE1;&#x606F;&#x6E90;&quot;&#xFF08;&#x8BF4;&#x4EC0;&#x4E48;&#xFF09;&#x3002;&#x4E24;&#x8005;&#x4F5C;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x5C42;&#x9762;&#xFF0C;&#x7EC4;&#x5408;&#x4F7F;&#x7528;&#x65F6;&#x662F;&#x4E92;&#x8865;&#x7684;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x4E03;&#xFF1A;RAG &#x8BC4;&#x4F30;&#x7684;&quot;&#x4E09;&#x89D2;&#x56F0;&#x5883;&quot;"><a href="#&#x6D1E;&#x5BDF;&#x4E03;&#xFF1A;RAG &#x8BC4;&#x4F30;&#x7684;&quot;&#x4E09;&#x89D2;&#x56F0;&#x5883;&quot;"></a>&#x6D1E;&#x5BDF;&#x4E03;&#xFF1A;RAG &#x8BC4;&#x4F30;&#x7684;&quot;&#x4E09;&#x89D2;&#x56F0;&#x5883;&quot;</h2>
<p>&#x8BBA;&#x6587;&#x68B3;&#x7406;&#x4E86; RAG &#x8BC4;&#x4F30;&#x7684;&#x4E09;&#x4E2A;&#x8D28;&#x91CF;&#x7EF4;&#x5EA6;&#x2014;&#x2014;<strong>&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#xFF08;Context Relevance&#xFF09;&#x3001;&#x7B54;&#x6848;&#x5FE0;&#x5B9E;&#x5EA6;&#xFF08;Faithfulness&#xFF09;&#x3001;&#x7B54;&#x6848;&#x76F8;&#x5173;&#x6027;&#xFF08;Answer Relevance&#xFF09;</strong>&#x2014;&#x2014;&#x5E76;&#x63ED;&#x793A;&#x4E86;&#x5B83;&#x4EEC;&#x4E4B;&#x95F4;&#x7684;&#x5185;&#x5728;&#x5F20;&#x529B;&#xFF1A;</p>
<ul>
<li>&#x8FFD;&#x6C42;<strong>&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;</strong>&#x2192; &#x503E;&#x5411;&#x4E8E;&#x68C0;&#x7D22;&#x66F4;&#x591A;&#x6587;&#x6863; &#x2192; &#x53EF;&#x80FD;&#x7A00;&#x91CA;&#x5173;&#x952E;&#x4FE1;&#x606F; &#x2192; &#x635F;&#x5BB3;<strong>&#x7B54;&#x6848;&#x5FE0;&#x5B9E;&#x5EA6;</strong></li>
<li>&#x8FFD;&#x6C42;<strong>&#x7B54;&#x6848;&#x5FE0;&#x5B9E;&#x5EA6;</strong>&#x2192; &#x4E25;&#x683C;&#x9650;&#x5236;&#x53EA;&#x7528;&#x68C0;&#x7D22;&#x5185;&#x5BB9; &#x2192; &#x53EF;&#x80FD;&#x4E22;&#x5931;&#x6A21;&#x578B;&#x81EA;&#x8EAB;&#x7684;&#x6709;&#x6548;&#x77E5;&#x8BC6; &#x2192; &#x635F;&#x5BB3;<strong>&#x7B54;&#x6848;&#x76F8;&#x5173;&#x6027;</strong></li>
<li>&#x8FFD;&#x6C42;<strong>&#x7B54;&#x6848;&#x76F8;&#x5173;&#x6027;</strong>&#x2192; &#x6A21;&#x578B;&#x53EF;&#x80FD;&#x81EA;&#x7531;&#x53D1;&#x6325; &#x2192; &#x8131;&#x79BB;&#x68C0;&#x7D22;&#x5185;&#x5BB9; &#x2192; &#x635F;&#x5BB3;<strong>&#x7B54;&#x6848;&#x5FE0;&#x5B9E;&#x5EA6;</strong></li>
</ul>
<p><strong>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x4E0D;&#x53EF;&#x80FD;&#x4E09;&#x89D2;&#xFF1A;&#x4F60;&#x5F88;&#x96BE;&#x540C;&#x65F6;&#x6700;&#x5927;&#x5316;&#x4E09;&#x4E2A;&#x7EF4;&#x5EA6;&#x3002;</strong> &#x5DE5;&#x7A0B;&#x5B9E;&#x8DF5;&#x4E2D;&#xFF0C;&#x5FC5;&#x987B;&#x6839;&#x636E;&#x5177;&#x4F53;&#x573A;&#x666F;&#x505A;&#x53D6;&#x820D;&#x2014;&#x2014;&#x533B;&#x7597;&#x95EE;&#x7B54;&#x5E94;&#x4FA7;&#x91CD;&#x5FE0;&#x5B9E;&#x5EA6;&#xFF0C;&#x5BA2;&#x670D;&#x5BF9;&#x8BDD;&#x5E94;&#x4FA7;&#x91CD;&#x76F8;&#x5173;&#x6027;&#xFF0C;&#x641C;&#x7D22;&#x5E94;&#x4FA7;&#x91CD;&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#x3002;</p>
<h2 id="&#x6D1E;&#x5BDF;&#x516B;&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x65F6;&#x4EE3;&#xFF0C;RAG &#x4F9D;&#x7136;&#x4E0D;&#x53EF;&#x66FF;&#x4EE3;"><a href="#&#x6D1E;&#x5BDF;&#x516B;&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x65F6;&#x4EE3;&#xFF0C;RAG &#x4F9D;&#x7136;&#x4E0D;&#x53EF;&#x66FF;&#x4EE3;"></a>&#x6D1E;&#x5BDF;&#x516B;&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x65F6;&#x4EE3;&#xFF0C;RAG &#x4F9D;&#x7136;&#x4E0D;&#x53EF;&#x66FF;&#x4EE3;</h2>
<p>&#x968F;&#x7740; LLM &#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x7A81;&#x7834; 200K tokens&#xFF0C;&#x4E00;&#x4E2A;&#x81EA;&#x7136;&#x7684;&#x95EE;&#x9898;&#x662F;&#xFF1A;&#x8FD8;&#x9700;&#x8981; RAG &#x5417;&#xFF1F;</p>
<p>&#x8BBA;&#x6587;&#x7ED9;&#x51FA;&#x4E86;&#x4E09;&#x4E2A; RAG &#x4E0D;&#x53EF;&#x66FF;&#x4EE3;&#x7684;&#x7406;&#x7531;&#xFF1A;</p>
<ol>
<li><strong>&#x63A8;&#x7406;&#x6548;&#x7387;&#xFF1A;</strong> &#x628A;&#x6574;&#x672C;&#x4E66;&#x585E;&#x8FDB; Prompt &#x7684;&#x63A8;&#x7406;&#x6210;&#x672C;&#x8FDC;&#x9AD8;&#x4E8E;&#x6309;&#x9700;&#x68C0;&#x7D22;&#x51E0;&#x4E2A;&#x6BB5;&#x843D;&#x3002;</li>
<li><strong>&#x53EF;&#x8FFD;&#x6EAF;&#x6027;&#xFF1A;</strong> RAG &#x53EF;&#x4EE5;&#x660E;&#x786E;&#x6807;&#x6CE8;&quot;&#x8FD9;&#x6BB5;&#x56DE;&#x7B54;&#x6765;&#x81EA;&#x54EA;&#x4E2A;&#x6587;&#x6863;&#x7684;&#x54EA;&#x4E2A;&#x6BB5;&#x843D;&quot;&#xFF0C;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x751F;&#x6210;&#x5219;&#x662F;&#x9ED1;&#x76D2;&#x3002;</li>
<li><strong>&#x65B0;&#x7684;&#x53EF;&#x80FD;&#x6027;&#xFF1A;</strong> &#x8D85;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x53CD;&#x800C;&#x4E3A; RAG &#x5F00;&#x8F9F;&#x4E86;&#x65B0;&#x7A7A;&#x95F4;&#x2014;&#x2014;&#x53EF;&#x4EE5;&#x68C0;&#x7D22;&#x66F4;&#x591A;&#x5019;&#x9009;&#x6587;&#x6863;&#xFF0C;&#x5728;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x5185;&#x505A;&#x66F4;&#x6DF1;&#x5EA6;&#x7684;&#x5BF9;&#x6BD4;&#x3001;&#x7EFC;&#x5408;&#x548C;&#x63A8;&#x7406;&#x3002;</li>
</ol>
<p><strong>&#x6838;&#x5FC3;&#x89C2;&#x70B9;&#xFF1A;</strong> &#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x4E0D;&#x662F; RAG &#x7684;&#x7EC8;&#x7ED3;&#x8005;&#xFF0C;&#x800C;&#x662F; RAG &#x7684;&#x5347;&#x7EA7;&#x5668;&#x3002;&#x4E24;&#x8005;&#x7684;&#x5173;&#x7CFB;&#x4ECE;&quot;&#x4E92;&#x65A5;&quot;&#x53D8;&#x6210;&#x4E86;&quot;&#x4E92;&#x8865;&quot;&#x3002;</p>
<hr>
<h2 id="&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;RAG &#x7684;&#x7EC8;&#x6781;&#x5F62;&#x6001;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;RAG &#x7684;&#x7EC8;&#x6781;&#x5F62;&#x6001;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;RAG &#x7684;&#x7EC8;&#x6781;&#x5F62;&#x6001;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>&#x7EB5;&#x89C2;&#x8BBA;&#x6587;&#x68B3;&#x7406;&#x7684;&#x6F14;&#x8FDB;&#x8F68;&#x8FF9;&#xFF0C;RAG &#x7684;&#x53D1;&#x5C55;&#x65B9;&#x5411;&#x53EF;&#x4EE5;&#x5F52;&#x7EB3;&#x4E3A;&#x4E00;&#x53E5;&#x8BDD;&#xFF1A;</p>
<blockquote>
<p><strong>&#x4ECE;&quot;&#x56FA;&#x5B9A;&#x7BA1;&#x9053;&quot;&#x5230;&quot;&#x667A;&#x80FD;&#x4F53;&quot;&#x2014;&#x2014;RAG &#x6B63;&#x5728;&#x4ECE;&#x4E00;&#x4E2A;&#x5DE5;&#x7A0B;&#x6D41;&#x7A0B;&#xFF0C;&#x6F14;&#x5316;&#x4E3A;&#x4E00;&#x79CD;&#x8BA4;&#x77E5;&#x80FD;&#x529B;&#x3002;</strong></p>
</blockquote>
<p>&#x5177;&#x4F53;&#x800C;&#x8A00;&#xFF1A;</p>
<ol>
<li><strong>&#x68C0;&#x7D22;&#x4ECE;&quot;&#x88AB;&#x52A8;&#x89E6;&#x53D1;&quot;&#x8D70;&#x5411;&quot;&#x4E3B;&#x52A8;&#x5224;&#x65AD;&quot;</strong>&#xFF08;Self-RAG&#x3001;FLARE&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4E86;&quot;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x8BE5;&#x67E5;&#x8D44;&#x6599;&quot;&#x3002;</li>
<li><strong>&#x68C0;&#x7D22;&#x6E90;&#x4ECE;&quot;&#x5355;&#x4E00;&#x6587;&#x672C;&quot;&#x8D70;&#x5411;&quot;&#x5F02;&#x6784;&#x591A;&#x6E90;&quot;</strong>&#xFF08;&#x6587;&#x672C; + KG + &#x4EE3;&#x7801; + &#x6570;&#x636E;&#x5E93;&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4E86;&quot;&#x53BB;&#x54EA;&#x91CC;&#x67E5;&#x8D44;&#x6599;&quot;&#x3002;</li>
<li><strong>&#x68C0;&#x7D22;&#x8FC7;&#x7A0B;&#x4ECE;&quot;&#x4E00;&#x6B21;&#x6027;&quot;&#x8D70;&#x5411;&quot;&#x8FED;&#x4EE3;&#x5F0F;/&#x9012;&#x5F52;&#x5F0F;&quot;</strong>&#xFF08;ITER-RETGEN&#x3001;IRCoT&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x5B66;&#x4F1A;&#x4E86;&quot;&#x4E00;&#x6B21;&#x67E5;&#x4E0D;&#x5230;&#x5C31;&#x6362;&#x4E2A;&#x65B9;&#x5F0F;&#x518D;&#x67E5;&quot;&#x3002;</li>
<li><strong>RAG &#x4E0E; Fine-tuning &#x4ECE;&quot;&#x4E8C;&#x9009;&#x4E00;&quot;&#x8D70;&#x5411;&quot;&#x534F;&#x540C;&#x8BAD;&#x7EC3;&quot;</strong>&#xFF08;RA-DIT&#xFF09;&#xFF0C;&#x6A21;&#x578B;&#x7684;&#x53C2;&#x6570;&#x77E5;&#x8BC6;&#x548C;&#x5916;&#x90E8;&#x77E5;&#x8BC6;&#x4E0D;&#x518D;&#x5272;&#x88C2;&#x3002;</li>
</ol>
<p>&#x5F53;&#x8FD9;&#x56DB;&#x4E2A;&#x65B9;&#x5411;&#x6210;&#x719F;&#x878D;&#x5408;&#x65F6;&#xFF0C;RAG &#x5C06;&#x4E0D;&#x518D;&#x662F;&#x4E00;&#x4E2A;&#x72EC;&#x7ACB;&#x7684;&#x6280;&#x672F;&#x7EC4;&#x4EF6;&#xFF0C;&#x800C;&#x662F; LLM &#x8BA4;&#x77E5;&#x67B6;&#x6784;&#x7684;&#x5185;&#x5EFA;&#x80FD;&#x529B;&#x2014;&#x2014;&#x5C31;&#x50CF;&#x4EBA;&#x7C7B;&#x4E0D;&#x4F1A;&#x628A;&quot;&#x67E5;&#x5B57;&#x5178;&quot;&#x548C;&quot;&#x601D;&#x8003;&quot;&#x770B;&#x4F5C;&#x4E24;&#x4E2A;&#x72EC;&#x7ACB;&#x8FC7;&#x7A0B;&#x4E00;&#x6837;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x8FD9;&#x7BC7;&#x7EFC;&#x8FF0;&#x7684;&#x771F;&#x6B63;&#x4EF7;&#x503C;&#xFF0C;&#x4E0D;&#x5728;&#x4E8E;&#x5217;&#x4E3E;&#x4E86;&#x591A;&#x5C11;&#x79CD; RAG &#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x5728;&#x4E8E;&#x63ED;&#x793A;&#x4E86;&#x4EE5;&#x4E0B;&#x5173;&#x952E;&#x8BA4;&#x77E5;&#xFF1A;</p>
<ol>
<li><strong>RAG &#x7684;&#x6838;&#x5FC3;&#x74F6;&#x9888;&#x4E0D;&#x5728;&#x68C0;&#x7D22;&#xFF0C;&#x800C;&#x5728;&#x7F16;&#x6392;&#xFF1A;</strong> &#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x68C0;&#x7D22;&#x3001;&#x68C0;&#x7D22;&#x591A;&#x5C11;&#x3001;&#x600E;&#x4E48;&#x7528;&#x68C0;&#x7D22;&#x7ED3;&#x679C;&#x2014;&#x2014;&#x8FD9;&#x4E9B;&quot;&#x5143;&#x51B3;&#x7B56;&quot;&#x6BD4;&#x68C0;&#x7D22;&#x672C;&#x8EAB;&#x66F4;&#x91CD;&#x8981;&#x3002;</li>
<li><strong>&#x7CBE;&#x51C6;&#x4E0D;&#x7B49;&#x4E8E;&#x6700;&#x4F18;&#xFF1A;</strong> &#x566A;&#x58F0;&#x6587;&#x6863;&#x53EF;&#x80FD;&#x6709;&#x76CA;&#xFF0C;&#x8FC7;&#x591A;&#x6587;&#x6863;&#x53EF;&#x80FD;&#x6709;&#x5BB3;&#xFF0C;LLM &#x81EA;&#x5DF1;&#x7F16;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x53EF;&#x80FD;&#x6BD4;&#x641C;&#x5230;&#x7684;&#x66F4;&#x597D;&#x3002;</li>
<li><strong>RAG &#x548C; Fine-tuning &#x4F5C;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x5C42;&#x9762;&#xFF1A;</strong> &#x4E00;&#x4E2A;&#x7BA1;&quot;&#x8BF4;&#x4EC0;&#x4E48;&quot;&#xFF0C;&#x4E00;&#x4E2A;&#x7BA1;&quot;&#x600E;&#x4E48;&#x8BF4;&quot;&#xFF0C;&#x4E0D;&#x662F;&#x7ADE;&#x4E89;&#x5173;&#x7CFB;&#x3002;</li>
<li><strong>&#x8BC4;&#x4F30;&#x51B3;&#x5B9A;&#x65B9;&#x5411;&#xFF1A;</strong> &#x6CA1;&#x6709;&#x597D;&#x7684; RAG &#x8BC4;&#x4F30;&#x4F53;&#x7CFB;&#xFF0C;&#x5C31;&#x4E0D;&#x53EF;&#x80FD;&#x6709;&#x597D;&#x7684; RAG &#x7CFB;&#x7EDF;&#x3002;&#x4E09;&#x7EF4;&#x8D28;&#x91CF;&#x8BC4;&#x4F30;&#x6846;&#x67B6;&#xFF08;&#x76F8;&#x5173;&#x6027;&#x3001;&#x5FE0;&#x5B9E;&#x5EA6;&#x3001;&#x7B54;&#x6848;&#x8D28;&#x91CF;&#xFF09;&#x662F;&#x5F53;&#x524D;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;&#x3002;</li>
<li><strong>&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x662F; RAG &#x7684;&#x76DF;&#x53CB;&#xFF0C;&#x4E0D;&#x662F;&#x654C;&#x4EBA;&#xFF1A;</strong> &#x66F4;&#x5927;&#x7684;&#x7A97;&#x53E3; = RAG &#x53EF;&#x4EE5;&#x505A;&#x66F4;&#x6DF1;&#x5EA6;&#x7684;&#x63A8;&#x7406;&#xFF0C;&#x800C;&#x975E;&#x88AB;&#x6DD8;&#x6C70;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2312.10997">arXiv &#x8BBA;&#x6587;&#x94FE;&#x63A5;</a></li>
<li><a href="https://github.com/Tongji-KGLLM/RAG-Survey">GitHub &#x8D44;&#x6E90;&#x6C47;&#x603B;</a></li>
<li><a href="https://arxiv.org/abs/2310.11511">Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection</a></li>
<li><a href="https://arxiv.org/abs/2305.06983">FLARE: Active Retrieval Augmented Generation</a></li>
<li><a href="https://arxiv.org/abs/2307.03172">Lost in the Middle: How Language Models Use Long Contexts</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-03-10</em></p>
`,E=[{level:2,title:'洞察一：RAG 的三代演进，本质是软件工程的"解耦史"',children:[]},{level:2,title:'洞察二：噪声文档反而提升准确率 30%——检索的"有益污染"',children:[]},{level:2,title:'洞察三："生成替代检索"——LLM 自己编的上下文比搜到的更好',children:[]},{level:2,title:'洞察四：Lost in the Middle——LLM 的"注意力沙漏"',children:[]},{level:2,title:'洞察五：自适应检索——最强的能力是"知道何时不检索"',children:[]},{level:2,title:"洞察六：RAG vs Fine-tuning——不是二选一，而是各管一层",children:[]},{level:2,title:'洞察七：RAG 评估的"三角困境"',children:[]},{level:2,title:"洞察八：长上下文时代，RAG 依然不可替代",children:[]},{level:2,title:"延伸思考：RAG 的终极形态是什么？",children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
