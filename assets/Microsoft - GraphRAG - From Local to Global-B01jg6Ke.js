const x={},F=`<p><em>&#x8BBA;&#x6587;&#x53D1;&#x5E03;&#x65F6;&#x95F4;&#xFF1A;2024-04-24</em></p>
<p>&#x5FAE;&#x8F6F;&#x7814;&#x7A76;&#x9662;&#x53D1;&#x5E03;&#x7684; <strong>&#x300A;From Local to Global: A Graph RAG Approach to Query-Focused Summarization&#x300B;</strong>&#xFF08;<a href="https://arxiv.org/abs/2404.16130">arXiv:2404.16130</a>&#xFF09;&#x7528;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x66FF;&#x4EE3;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#xFF0C;&#x89E3;&#x51B3;&#x4E86;&#x4F20;&#x7EDF; RAG &#x5728;&quot;&#x5168;&#x5C40;&#x7406;&#x89E3;&#x7C7B;&#x95EE;&#x9898;&quot;&#x4E0A;&#x7684;&#x6839;&#x672C;&#x7F3A;&#x9677;&#x3002;</p>
<p>&#x7B80;&#x5355;&#x6765;&#x8BF4;&#xFF0C;&#x4F20;&#x7EDF; RAG &#x53EA;&#x80FD;&#x56DE;&#x7B54;&quot;&#x627E;&#x5F97;&#x5230;&#x76F8;&#x4F3C;&#x7247;&#x6BB5;&quot;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x800C; GraphRAG &#x80FD;&#x56DE;&#x7B54;&quot;&#x8FD9;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#x6574;&#x4F53;&#x5728;&#x8BB2;&#x4EC0;&#x4E48;&quot;&#x2014;&#x2014;&#x524D;&#x8005;&#x662F;&#x5C40;&#x90E8;&#x68C0;&#x7D22;&#xFF0C;&#x540E;&#x8005;&#x662F;&#x5168;&#x5C40;&#x5F52;&#x7EB3;&#x3002;</p>
<h2 id="&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x89E3;&#x51B3;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>&#x6838;&#x5FC3;&#x95EE;&#x9898;&#xFF1A;&#x4F20;&#x7EDF; RAG &#x5728;&quot;&#x5168;&#x5C40;&#x7406;&#x89E3;&#x7C7B;&#x95EE;&#x9898;&quot;&#x4E0A;&#x5B58;&#x5728;&#x6839;&#x672C;&#x6027;&#x5931;&#x6548;&#x3002;</strong></p>
<p>&#x4F20;&#x7EDF; RAG &#x7684;&#x6D41;&#x7A0B;&#x662F;&#xFF1A;&#x7528;&#x6237;&#x63D0;&#x95EE; &#x2192; &#x7528;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x627E;&#x4E0E;&#x95EE;&#x9898;&#x8BED;&#x4E49;&#x76F8;&#x4F3C;&#x7684;&#x6587;&#x672C;&#x7247;&#x6BB5; &#x2192; &#x628A;&#x7247;&#x6BB5;&#x585E;&#x8FDB; Prompt &#x2192; LLM &#x751F;&#x6210;&#x56DE;&#x7B54;&#x3002;&#x8FD9;&#x5957;&#x903B;&#x8F91;&#x5728;&quot;&#x67D0;&#x6BB5;&#x6587;&#x6863;&#x91CC;&#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&quot;&#x8FD9;&#x7C7B;<strong>&#x5C40;&#x90E8;&#x95EE;&#x9898;</strong>&#x4E0A;&#x8868;&#x73B0;&#x826F;&#x597D;&#xFF0C;&#x4F46;&#x9762;&#x5BF9;&quot;&#x8FD9;&#x4E2A;&#x6570;&#x636E;&#x96C6;&#x7684;&#x4E3B;&#x8981;&#x4E3B;&#x9898;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&quot;&quot;&#x8FD9;&#x4E9B;&#x6587;&#x6863;&#x4E4B;&#x95F4;&#x6709;&#x4EC0;&#x4E48;&#x5171;&#x540C;&#x70B9;&#xFF1F;&quot;&#x8FD9;&#x7C7B;<strong>&#x5168;&#x5C40;&#x95EE;&#x9898;</strong>&#x65F6;&#xFF0C;&#x5B8C;&#x5168;&#x5931;&#x6548;&#x3002;</p>
<p>&#x539F;&#x56E0;&#x5F88;&#x76F4;&#x89C2;&#xFF1A;<strong>&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x53EA;&#x80FD;&#x627E;&#x5230;&quot;&#x4E0E;&#x67E5;&#x8BE2;&#x76F8;&#x4F3C;&quot;&#x7684;&#x5C40;&#x90E8;&#x7247;&#x6BB5;&#xFF0C;&#x65E0;&#x6CD5;&#x83B7;&#x5F97;&quot;&#x6574;&#x4E2A;&#x8BED;&#x6599;&#x5E93;&#x7684;&#x9E1F;&#x77B0;&#x56FE;&quot;</strong>&#x3002;&#x4F60;&#x95EE;&quot;&#x4E3B;&#x8981;&#x4E3B;&#x9898;&quot;&#xFF0C;&#x68C0;&#x7D22;&#x7CFB;&#x7EDF;&#x4F1A;&#x8FD4;&#x56DE;&#x51E0;&#x4E2A;&#x4E0E;&quot;&#x4E3B;&#x9898;&quot;&#x4E00;&#x8BCD;&#x76F8;&#x4F3C;&#x7684;&#x6BB5;&#x843D;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x6BB5;&#x843D;&#x53EF;&#x80FD;&#x6070;&#x597D;&#x6765;&#x81EA;&#x540C;&#x4E00;&#x5B50;&#x4E3B;&#x9898;&#xFF0C;&#x5B8C;&#x5168;&#x9057;&#x6F0F;&#x4E86;&#x5176;&#x4ED6;&#x91CD;&#x8981;&#x7EF4;&#x5EA6;&#x3002;&#x8FD9;&#x5C31;&#x50CF;&#x95EE;&quot;&#x8FD9;&#x5EA7;&#x68EE;&#x6797;&#x91CC;&#x6709;&#x54EA;&#x4E9B;&#x6811;&#x79CD;&quot;&#xFF0C;&#x4F20;&#x7EDF; RAG &#x53EA;&#x4F1A;&#x7ED9;&#x4F60;&#x51E0;&#x7247;&#x53F6;&#x5B50;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x68EE;&#x6797;&#x7684;&#x5168;&#x666F;&#x3002;</p>
<h2 id="&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"><a href="#&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;"></a>&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x771F;&#x5B9E;&#x5B58;&#x5728;&#x5417;&#xFF1F;</h2>
<p><strong>&#x771F;&#x5B9E;&#x5B58;&#x5728;&#xFF0C;&#x4E14;&#x968F;&#x7740;&#x4F01;&#x4E1A;&#x79C1;&#x6709;&#x77E5;&#x8BC6;&#x5E93;&#x89C4;&#x6A21;&#x6269;&#x5927;&#x800C;&#x6108;&#x53D1;&#x7A81;&#x51FA;&#x3002;</strong></p>
<ul>
<li><strong>&#x4F01;&#x4E1A;&#x77E5;&#x8BC6;&#x7BA1;&#x7406;&#x573A;&#x666F;&#xFF1A;</strong> &#x67D0;&#x516C;&#x53F8;&#x6709; 10 &#x4E07;&#x4EFD;&#x5185;&#x90E8;&#x6587;&#x6863;&#xFF0C;&#x7BA1;&#x7406;&#x5C42;&#x95EE;&quot;&#x6211;&#x4EEC;&#x8FC7;&#x53BB;&#x4E00;&#x5E74;&#x5728;&#x54EA;&#x4E9B;&#x9886;&#x57DF;&#x6295;&#x5165;&#x6700;&#x591A;&#xFF1F;&quot;&#x2014;&#x2014;&#x4F20;&#x7EDF; RAG &#x4F1A;&#x68C0;&#x7D22;&#x5230;&#x82E5;&#x5E72;&#x76F8;&#x5173;&#x6BB5;&#x843D;&#xFF0C;&#x4F46;&#x65E0;&#x6CD5;&#x7CFB;&#x7EDF;&#x6027;&#x5730;&#x5F52;&#x7EB3;&#x51FA;&#x8DE8;&#x6587;&#x6863;&#x7684;&#x4E3B;&#x9898;&#x5206;&#x5E03;&#x3002;</li>
<li><strong>&#x5B66;&#x672F;&#x6587;&#x732E;&#x7EFC;&#x8FF0;&#xFF1A;</strong> &#x7814;&#x7A76;&#x8005;&#x95EE;&quot;&#x8FD9;&#x4E2A;&#x9886;&#x57DF;&#x8FD1;&#x4E94;&#x5E74;&#x7684;&#x4E3B;&#x8981;&#x4E89;&#x8BAE;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;&quot;&#x2014;&#x2014;&#x9700;&#x8981;&#x904D;&#x5386;&#x5927;&#x91CF;&#x8BBA;&#x6587;&#x3001;&#x63D0;&#x70BC;&#x5171;&#x6027;&#xFF0C;&#x800C;&#x975E;&#x627E;&#x5230;&#x67D0;&#x51E0;&#x7BC7;&quot;&#x76F8;&#x4F3C;&quot;&#x7684;&#x8BBA;&#x6587;&#x3002;</li>
<li><strong>&#x5B9E;&#x9A8C;&#x6570;&#x636E;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x5728;&#x767E;&#x4E07; token &#x7EA7;&#x522B;&#x7684;&#x6570;&#x636E;&#x96C6;&#x4E0A;&#x6D4B;&#x8BD5;&#xFF0C;&#x4F20;&#x7EDF; RAG &#x5728;&quot;&#x5168;&#x9762;&#x6027;&quot;&#xFF08;Comprehensiveness&#xFF09;&#x548C;&quot;&#x591A;&#x6837;&#x6027;&quot;&#xFF08;Diversity&#xFF09;&#x4E24;&#x4E2A;&#x6307;&#x6807;&#x4E0A;&#x663E;&#x8457;&#x843D;&#x540E;&#x4E8E; GraphRAG&#x3002;</li>
</ul>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x89E3;&#x51B3;&#xFF1F;/ &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x63D0;&#x51FA;&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x89E3;&#x51B3;&#xFF1F;/ &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x63D0;&#x51FA;&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4E4B;&#x524D;&#x6CA1;&#x4EBA;&#x89E3;&#x51B3;&#xFF1F;/ &#x4E3A;&#x4EC0;&#x4E48;&#x73B0;&#x5728;&#x624D;&#x63D0;&#x51FA;&#xFF1F;</h2>
<p><strong>&#x6280;&#x672F;&#x524D;&#x63D0;&#xFF1A;</strong> &#x4F20;&#x7EDF; RAG &#x7684;&#x8303;&#x5F0F;&#x5929;&#x7136;&#x504F;&#x5411;&quot;&#x68C0;&#x7D22;&#x76F8;&#x4F3C;&quot;&#xFF0C;Query-Focused Summarization&#xFF08;QFS&#xFF09;&#x9886;&#x57DF;&#x65E9;&#x6709;&#x7814;&#x7A76;&#xFF0C;&#x4F46;&#x6B64;&#x524D;&#x65B9;&#x6CD5;&#x65E0;&#x6CD5;&#x6269;&#x5C55;&#x5230; RAG &#x7CFB;&#x7EDF;&#x5E38;&#x89C1;&#x7684;&#x767E;&#x4E07;&#x7EA7; token &#x89C4;&#x6A21;&#x3002;GraphRAG &#x7684;&#x63D0;&#x51FA;&#x4F9D;&#x8D56;&#x51E0;&#x4E2A;&#x5173;&#x952E;&#x6761;&#x4EF6;&#xFF1A;</p>
<ol>
<li><strong>LLM &#x7684;&#x5B9E;&#x4F53;&#x62BD;&#x53D6;&#x80FD;&#x529B;&#x6210;&#x719F;&#xFF1A;</strong> &#x7528; LLM &#x4ECE;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x6587;&#x672C;&#x4E2D;&#x62BD;&#x53D6;&#x5B9E;&#x4F53;&#x548C;&#x5173;&#x7CFB;&#xFF0C;&#x6784;&#x5EFA;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#xFF0C;&#x8FD9;&#x5728; GPT-3.5/4 &#x65F6;&#x4EE3;&#x624D;&#x8DB3;&#x591F;&#x53EF;&#x9760;&#x3002;</li>
<li><strong>&#x793E;&#x533A;&#x53D1;&#x73B0;&#x7B97;&#x6CD5;&#x7684;&#x6210;&#x719F;&#x5E94;&#x7528;&#xFF1A;</strong> Leiden &#x7B49;&#x56FE;&#x805A;&#x7C7B;&#x7B97;&#x6CD5;&#x80FD;&#x9AD8;&#x6548;&#x5730;&#x5C06;&#x5B9E;&#x4F53;&#x5206;&#x7EC4;&#xFF0C;&#x4E3A;&quot;&#x9884;&#x751F;&#x6210;&#x793E;&#x533A;&#x6458;&#x8981;&quot;&#x63D0;&#x4F9B;&#x7ED3;&#x6784;&#x57FA;&#x7840;&#x3002;</li>
<li><strong>RAG &#x7684;&#x666E;&#x53CA;&#x66B4;&#x9732;&#x4E86;&#x8FB9;&#x754C;&#xFF1A;</strong> &#x5F53; RAG &#x6210;&#x4E3A;&#x4F01;&#x4E1A;&#x6807;&#x914D;&#x540E;&#xFF0C;&quot;&#x5168;&#x5C40;&#x95EE;&#x9898;&quot;&#x7684;&#x9700;&#x6C42;&#x624D;&#x88AB;&#x7CFB;&#x7EDF;&#x6027;&#x5730;&#x66B4;&#x9732;&#x51FA;&#x6765;&#x3002;</li>
</ol>
<h2 id="&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"><a href="#&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;"></a>&#x5B83;&#x662F;&#x5982;&#x4F55;&#x89E3;&#x51B3;&#x7684;&#xFF1F;</h2>
<p>GraphRAG &#x7684;&#x6838;&#x5FC3;&#x601D;&#x8DEF;&#x662F;&#xFF1A;<strong>&#x7528;&#x56FE;&#x7ED3;&#x6784;&#x66FF;&#x4EE3;&#x5411;&#x91CF;&#x7A7A;&#x95F4;&#xFF0C;&#x7528;&quot;&#x793E;&#x533A;&#x6458;&#x8981;&quot;&#x66FF;&#x4EE3;&quot;&#x76F8;&#x4F3C;&#x7247;&#x6BB5;&quot;</strong>&#x3002;</p>
<table>
<thead>
<tr>
<th>&#x9636;&#x6BB5;</th>
<th>&#x4F20;&#x7EDF; RAG</th>
<th>GraphRAG</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x7D22;&#x5F15;&#x6784;&#x5EFA;</td>
<td>&#x6587;&#x672C;&#x5206;&#x5757; &#x2192; &#x5411;&#x91CF;&#x5316;&#x5D4C;&#x5165;</td>
<td>&#x6587;&#x672C; &#x2192; LLM &#x62BD;&#x53D6;&#x5B9E;&#x4F53;/&#x5173;&#x7CFB; &#x2192; &#x77E5;&#x8BC6;&#x56FE;&#x8C31; &#x2192; Leiden &#x793E;&#x533A;&#x805A;&#x7C7B; &#x2192; &#x4E3A;&#x6BCF;&#x4E2A;&#x793E;&#x533A;&#x9884;&#x751F;&#x6210;&#x6458;&#x8981;</td>
</tr>
<tr>
<td>&#x67E5;&#x8BE2;&#x65F6;</td>
<td>&#x5411;&#x91CF;&#x68C0;&#x7D22; Top-K &#x7247;&#x6BB5;</td>
<td>&#x7528;&#x793E;&#x533A;&#x6458;&#x8981;&#x751F;&#x6210;&#x90E8;&#x5206;&#x56DE;&#x7B54; &#x2192; &#x6C47;&#x603B;&#x6210;&#x6700;&#x7EC8;&#x56DE;&#x7B54;</td>
</tr>
<tr>
<td>&#x9002;&#x7528;&#x95EE;&#x9898;</td>
<td>&#x5C40;&#x90E8;&#x3001;&#x4E8B;&#x5B9E;&#x6027;&#x3001;&#x6709;&#x660E;&#x786E;&#x68C0;&#x7D22;&#x76EE;&#x6807;</td>
<td>&#x5168;&#x5C40;&#x3001;&#x5F52;&#x7EB3;&#x6027;&#x3001;&#x9700;&#x8981;&#x8DE8;&#x6587;&#x6863;&#x7406;&#x89E3;</td>
</tr>
</tbody>
</table>
<p><strong>&#x56DB;&#x6B65;&#x6D41;&#x7A0B;&#x7B80;&#x8FF0;&#xFF1A;</strong></p>
<ol>
<li><strong>&#x5B9E;&#x4F53;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x6784;&#x5EFA;&#xFF1A;</strong> &#x7528; LLM &#x4ECE;&#x6E90;&#x6587;&#x6863;&#x4E2D;&#x62BD;&#x53D6;&#x5B9E;&#x4F53;&#xFF08;&#x4EBA;&#x7269;&#x3001;&#x7EC4;&#x7EC7;&#x3001;&#x6982;&#x5FF5;&#x7B49;&#xFF09;&#x53CA;&#x5176;&#x5173;&#x7CFB;&#xFF0C;&#x5F62;&#x6210;&#x6709;&#x5411;&#x56FE;&#x3002;</li>
<li><strong>&#x793E;&#x533A;&#x805A;&#x7C7B;&#xFF1A;</strong> &#x7528; Leiden &#x7B97;&#x6CD5;&#x5BF9;&#x56FE;&#x8C31;&#x505A;&#x793E;&#x533A;&#x53D1;&#x73B0;&#xFF0C;&#x5C06;&#x7D27;&#x5BC6;&#x76F8;&#x5173;&#x7684;&#x5B9E;&#x4F53;&#x805A;&#x6210;&#x7C07;&#x3002;</li>
<li><strong>&#x793E;&#x533A;&#x6458;&#x8981;&#x9884;&#x751F;&#x6210;&#xFF1A;</strong> &#x4E3A;&#x6BCF;&#x4E2A;&#x793E;&#x533A;&#x7528; LLM &#x751F;&#x6210;&#x4E00;&#x6BB5;&#x6458;&#x8981;&#xFF0C;&#x6982;&#x62EC;&#x8BE5;&#x793E;&#x533A;&#x5185;&#x7684;&#x6838;&#x5FC3;&#x4FE1;&#x606F;&#x3002;</li>
<li><strong>&#x67E5;&#x8BE2;&#x65F6;&#x56DE;&#x7B54;&#x751F;&#x6210;&#xFF1A;</strong> &#x6839;&#x636E;&#x67E5;&#x8BE2;&#x9009;&#x62E9;&#x76F8;&#x5173;&#x793E;&#x533A;&#xFF0C;&#x7528;&#x5176;&#x6458;&#x8981;&#x751F;&#x6210;&#x90E8;&#x5206;&#x56DE;&#x7B54;&#xFF0C;&#x518D;&#x6C47;&#x603B;&#x6210;&#x6700;&#x7EC8;&#x56DE;&#x7B54;&#x3002;</li>
</ol>
<p><strong>&#x5173;&#x952E;&#x6D1E;&#x5BDF;&#xFF1A;</strong> &#x793E;&#x533A;&#x6458;&#x8981;&#x76F8;&#x5F53;&#x4E8E;&quot;&#x9884;&#x8BA1;&#x7B97;&#x7684;&#x5168;&#x5C40;&#x89C6;&#x56FE;&quot;&#x3002;&#x4F20;&#x7EDF; RAG &#x5728;&#x67E5;&#x8BE2;&#x65F6;&#x624D;&#x53BB;&quot;&#x627E;&#x76F8;&#x4F3C;&quot;&#xFF0C;&#x800C; GraphRAG &#x5728;&#x7D22;&#x5F15;&#x9636;&#x6BB5;&#x5C31;&#x5B8C;&#x6210;&#x4E86;&quot;&#x5168;&#x5C40;&#x5F52;&#x7EB3;&quot;&#xFF0C;&#x67E5;&#x8BE2;&#x65F6;&#x53EA;&#x9700;&#x5728;&#x5DF2;&#x5F52;&#x7EB3;&#x7684;&#x89C6;&#x56FE;&#x4E0A;&#x505A;&#x4E8C;&#x6B21;&#x52A0;&#x5DE5;&#x3002;</p>
<p><strong>&#x5C42;&#x7EA7;&#x7ED3;&#x6784;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x8FD8;&#x652F;&#x6301;&#x591A;&#x5C42;&#x7EA7;&#x793E;&#x533A;&#xFF08;&#x4ECE;&#x9AD8;&#x5C42;&#x4E3B;&#x9898;&#x5230;&#x4F4E;&#x5C42;&#x5B50;&#x4E3B;&#x9898;&#xFF09;&#xFF0C;&#x53EF;&#x6839;&#x636E;&#x67E5;&#x8BE2;&#x7C92;&#x5EA6;&#x9009;&#x62E9;&#x4E0D;&#x540C;&#x5C42;&#x7EA7;&#x7684;&#x6458;&#x8981;&#xFF0C;&#x5B9E;&#x73B0;&#x4ECE;&quot;&#x5B8F;&#x89C2;&#x6982;&#x89C8;&quot;&#x5230;&quot;&#x5FAE;&#x89C2;&#x7EC6;&#x8282;&quot;&#x7684;&#x7075;&#x6D3B;&#x5207;&#x6362;&#x3002;</p>
<h2 id="&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"><a href="#&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;"></a>&#x5173;&#x952E;&#x8BCD;&#x89E3;&#x6790;</h2>
<h3 id="1. &#x5B9E;&#x4F53;&#x77E5;&#x8BC6;&#x56FE;&#x8C31; (Entity Knowledge Graph)"><a href="#1. &#x5B9E;&#x4F53;&#x77E5;&#x8BC6;&#x56FE;&#x8C31; (Entity Knowledge Graph)"></a>1. &#x5B9E;&#x4F53;&#x77E5;&#x8BC6;&#x56FE;&#x8C31; (Entity Knowledge Graph)</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x4ECE;&#x975E;&#x7ED3;&#x6784;&#x5316;&#x6587;&#x672C;&#x4E2D;&#x62BD;&#x53D6;&#x7684;&#x5B9E;&#x4F53;&#xFF08;&#x8282;&#x70B9;&#xFF09;&#x53CA;&#x5176;&#x5173;&#x7CFB;&#xFF08;&#x8FB9;&#xFF09;&#x6784;&#x6210;&#x7684;&#x56FE;&#x7ED3;&#x6784;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x56FE;&#x80FD;&#x663E;&#x5F0F;&#x8868;&#x8FBE;&quot;&#x8C01;&#x548C;&#x8C01;&#x76F8;&#x5173;&quot;&#xFF0C;&#x800C;&#x5411;&#x91CF;&#x53EA;&#x80FD;&#x8868;&#x8FBE;&quot;&#x8BED;&#x4E49;&#x76F8;&#x4F3C;&quot;&#x3002;&#x5BF9;&#x4E8E;&quot;&#x627E;&#x51FA;&#x6587;&#x6863;&#x95F4;&#x7684;&#x9690;&#x542B;&#x8054;&#x7CFB;&quot;&#x8FD9;&#x7C7B;&#x4EFB;&#x52A1;&#xFF0C;&#x56FE;&#x7ED3;&#x6784;&#x66F4;&#x81EA;&#x7136;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x4ECE;&#x65B0;&#x95FB;&#x4E2D;&#x62BD;&#x53D6;&quot;&#x516C;&#x53F8; A &#x6536;&#x8D2D;&#x4E86;&#x516C;&#x53F8; B&quot;&#x3001;&quot;&#x516C;&#x53F8; B &#x4E0E;&#x516C;&#x53F8; C &#x6709;&#x5408;&#x4F5C;&#x5173;&#x7CFB;&quot;&#xFF0C;&#x5F62;&#x6210;&#x4E09;&#x89D2;&#x5173;&#x7CFB;&#xFF0C;&#x4FBF;&#x4E8E;&#x53D1;&#x73B0;&#x4EA7;&#x4E1A;&#x94FE;&#x6761;&#x3002;</li>
</ul>
<h3 id="2. Leiden &#x7B97;&#x6CD5;"><a href="#2. Leiden &#x7B97;&#x6CD5;"></a>2. Leiden &#x7B97;&#x6CD5;</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x4E00;&#x79CD;&#x56FE;&#x793E;&#x533A;&#x53D1;&#x73B0;&#x7B97;&#x6CD5;&#xFF0C;&#x7528;&#x4E8E;&#x5C06;&#x56FE;&#x4E2D;&#x7684;&#x8282;&#x70B9;&#x805A;&#x7C7B;&#x6210;&#x5185;&#x90E8;&#x8FDE;&#x63A5;&#x7D27;&#x5BC6;&#x3001;&#x5916;&#x90E8;&#x8FDE;&#x63A5;&#x7A00;&#x758F;&#x7684;&#x793E;&#x533A;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x793E;&#x533A;&#x76F8;&#x5F53;&#x4E8E;&quot;&#x4E3B;&#x9898;&#x7C07;&quot;&#xFF0C;&#x6BCF;&#x4E2A;&#x793E;&#x533A;&#x53EF;&#x4EE5;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A;&#x53EF;&#x6458;&#x8981;&#x7684;&#x8BED;&#x4E49;&#x5355;&#x5143;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x5C06;&quot;&#x6C14;&#x5019;&#x53D8;&#x5316;&quot;&#x3001;&quot;&#x78B3;&#x6392;&#x653E;&quot;&#x3001;&quot;&#x53EF;&#x518D;&#x751F;&#x80FD;&#x6E90;&quot;&#x7B49;&#x5B9E;&#x4F53;&#x805A;&#x6210;&#x4E00;&#x4E2A;&#x793E;&#x533A;&#xFF0C;&#x8BE5;&#x793E;&#x533A;&#x7684;&#x6458;&#x8981;&#x53EF;&#x4EE5;&#x6982;&#x62EC;&quot;&#x73AF;&#x4FDD;&#x4E0E;&#x80FD;&#x6E90;&#x8F6C;&#x578B;&quot;&#x8FD9;&#x4E00;&#x4E3B;&#x9898;&#x3002;</li>
</ul>
<h3 id="3. &#x67E5;&#x8BE2;&#x805A;&#x7126;&#x6458;&#x8981; (Query-Focused Summarization, QFS)"><a href="#3. &#x67E5;&#x8BE2;&#x805A;&#x7126;&#x6458;&#x8981; (Query-Focused Summarization, QFS)"></a>3. &#x67E5;&#x8BE2;&#x805A;&#x7126;&#x6458;&#x8981; (Query-Focused Summarization, QFS)</h3>
<ul>
<li><strong>&#x5B9A;&#x4E49;&#xFF1A;</strong> &#x9488;&#x5BF9;&#x7528;&#x6237;&#x67E5;&#x8BE2;&#x751F;&#x6210;&#x6458;&#x8981;&#xFF0C;&#x800C;&#x975E;&#x751F;&#x6210;&#x4E0E;&#x67E5;&#x8BE2;&#x65E0;&#x5173;&#x7684;&#x901A;&#x7528;&#x6458;&#x8981;&#x3002;</li>
<li><strong>&#x4E3A;&#x4EC0;&#x4E48;&#x91CD;&#x8981;&#xFF1A;</strong> &#x5168;&#x5C40;&#x95EE;&#x9898;&#x672C;&#x8D28;&#x4E0A;&#x662F;&quot;&#x9488;&#x5BF9;&#x6574;&#x4E2A;&#x8BED;&#x6599;&#x5E93;&#x7684; QFS&quot;&#xFF0C;&#x4F20;&#x7EDF; RAG &#x7684;&#x68C0;&#x7D22;&#x8303;&#x5F0F;&#x65E0;&#x6CD5;&#x8986;&#x76D6;&#x3002;</li>
<li><strong>&#x5177;&#x4F53;&#x4F8B;&#x5B50;&#xFF1A;</strong> &#x95EE;&quot;&#x4E3B;&#x8981;&#x4E89;&#x8BAE;&quot;&#x65F6;&#xFF0C;&#x6458;&#x8981;&#x5E94;&#x805A;&#x7126;&#x4E8E;&#x4E89;&#x8BAE;&#x70B9;&#xFF0C;&#x800C;&#x975E;&#x6CDB;&#x6CDB;&#x6982;&#x8FF0;&#x6240;&#x6709;&#x5185;&#x5BB9;&#x3002;</li>
</ul>
<hr>
<h2 id="&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;GraphRAG &#x662F;&#x5426;&#x610F;&#x5473;&#x7740;&quot;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x5DF2;&#x6B7B;&quot;&#xFF1F;"><a href="#&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;GraphRAG &#x662F;&#x5426;&#x610F;&#x5473;&#x7740;&quot;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x5DF2;&#x6B7B;&quot;&#xFF1F;"></a>&#x5EF6;&#x4F38;&#x601D;&#x8003;&#xFF1A;GraphRAG &#x662F;&#x5426;&#x610F;&#x5473;&#x7740;&quot;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x5DF2;&#x6B7B;&quot;&#xFF1F;</h2>
<p><strong>&#x7B54;&#x6848;&#x662F;&#x5426;&#x5B9A;&#x7684;&#x2014;&#x2014;&#x4E24;&#x8005;&#x9002;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x7684;&#x95EE;&#x9898;&#x3002;</strong></p>
<table>
<thead>
<tr>
<th>&#x95EE;&#x9898;&#x7C7B;&#x578B;</th>
<th>&#x793A;&#x4F8B;</th>
<th>&#x66F4;&#x4F18;&#x65B9;&#x6848;</th>
<th>&#x539F;&#x56E0;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x5C40;&#x90E8;&#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;</td>
<td>&quot;&#x67D0;&#x5408;&#x540C;&#x7B2C; 3 &#x6761;&#x89C4;&#x5B9A;&#x7684;&#x8FDD;&#x7EA6;&#x91D1;&#x6BD4;&#x4F8B;&#x662F;&#x591A;&#x5C11;&#xFF1F;&quot;</td>
<td>&#x4F20;&#x7EDF; RAG</td>
<td>&#x6709;&#x660E;&#x786E;&#x68C0;&#x7D22;&#x76EE;&#x6807;&#xFF0C;&#x5411;&#x91CF;&#x76F8;&#x4F3C;&#x5EA6;&#x5373;&#x53EF;&#x5B9A;&#x4F4D;</td>
</tr>
<tr>
<td>&#x5168;&#x5C40;&#x5F52;&#x7EB3;&#x95EE;&#x9898;</td>
<td>&quot;&#x8FD9;&#x6279;&#x5408;&#x540C;&#x4E2D;&#x6700;&#x5E38;&#x89C1;&#x7684;&#x4E89;&#x8BAE;&#x6761;&#x6B3E;&#x6709;&#x54EA;&#x4E9B;&#xFF1F;&quot;</td>
<td>GraphRAG</td>
<td>&#x9700;&#x8981;&#x8DE8;&#x6587;&#x6863;&#x5F52;&#x7EB3;&#xFF0C;&#x793E;&#x533A;&#x6458;&#x8981;&#x63D0;&#x4F9B;&#x5168;&#x5C40;&#x89C6;&#x56FE;</td>
</tr>
<tr>
<td>&#x591A;&#x8DF3;&#x63A8;&#x7406;</td>
<td>&quot;A &#x516C;&#x53F8;&#x7684;&#x4F9B;&#x5E94;&#x5546; B &#x7684;&#x7ADE;&#x4E89;&#x5BF9;&#x624B;&#x662F;&#x8C01;&#xFF1F;&quot;</td>
<td>&#x89C6;&#x6570;&#x636E;&#x89C4;&#x6A21;&#x800C;&#x5B9A;</td>
<td>&#x5C0F;&#x89C4;&#x6A21;&#x53EF;&#x7528;&#x56FE;&#x904D;&#x5386;&#xFF0C;&#x5927;&#x89C4;&#x6A21;&#x53EF;&#x80FD;&#x9700;&#x6DF7;&#x5408;&#x65B9;&#x6848;</td>
</tr>
</tbody>
</table>
<p><strong>GraphRAG &#x7684;&#x5C40;&#x9650;&#x6027;&#xFF1A;</strong></p>
<ol>
<li><strong>&#x7D22;&#x5F15;&#x6784;&#x5EFA;&#x6210;&#x672C;&#x9AD8;&#xFF1A;</strong> &#x9700;&#x8981; LLM &#x5BF9;&#x6BCF;&#x4EFD;&#x6587;&#x6863;&#x505A;&#x5B9E;&#x4F53;&#x62BD;&#x53D6;&#xFF0C;&#x518D;&#x8DD1; Leiden &#x805A;&#x7C7B;&#xFF0C;&#x518D;&#x4E3A;&#x6BCF;&#x4E2A;&#x793E;&#x533A;&#x751F;&#x6210;&#x6458;&#x8981;&#x3002;&#x767E;&#x4E07; token &#x7EA7;&#x522B;&#x7684;&#x7D22;&#x5F15;&#x6784;&#x5EFA;&#x53EF;&#x80FD;&#x8017;&#x65F6;&#x6570;&#x5C0F;&#x65F6;&#x751A;&#x81F3;&#x66F4;&#x4E45;&#x3002;</li>
<li><strong>&#x5B9E;&#x4F53;&#x62BD;&#x53D6;&#x53EF;&#x80FD;&#x51FA;&#x9519;&#xFF1A;</strong> LLM &#x62BD;&#x53D6;&#x7684;&#x5B9E;&#x4F53;&#x548C;&#x5173;&#x7CFB;&#x53EF;&#x80FD;&#x6709;&#x9057;&#x6F0F;&#x3001;&#x9519;&#x8BEF;&#x6216;&#x5197;&#x4F59;&#xFF0C;&#x76F4;&#x63A5;&#x5F71;&#x54CD;&#x56FE;&#x8C31;&#x8D28;&#x91CF;&#x548C;&#x793E;&#x533A;&#x5212;&#x5206;&#x3002;</li>
<li><strong>&#x4E0D;&#x9002;&#x5408;&#x7B80;&#x5355;&#x5C40;&#x90E8;&#x67E5;&#x8BE2;&#xFF1A;</strong> &#x5BF9;&#x4E8E;&quot;&#x8FD9;&#x6BB5;&#x6587;&#x6863;&#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&quot;&#x8FD9;&#x7C7B;&#x95EE;&#x9898;&#xFF0C;GraphRAG &#x7684;&#x793E;&#x533A;&#x6458;&#x8981;&#x53EF;&#x80FD;&#x8FC7;&#x4E8E;&#x62BD;&#x8C61;&#xFF0C;&#x53CD;&#x800C;&#x4E0D;&#x5982;&#x76F4;&#x63A5;&#x68C0;&#x7D22;&#x539F;&#x6587;&#x3002;</li>
<li><strong>&#x66F4;&#x65B0;&#x6210;&#x672C;&#xFF1A;</strong> &#x65B0;&#x589E;&#x6587;&#x6863;&#x9700;&#x8981;&#x91CD;&#x65B0;&#x62BD;&#x53D6;&#x5B9E;&#x4F53;&#x3001;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x793E;&#x533A;&#x5212;&#x5206;&#xFF0C;&#x589E;&#x91CF;&#x66F4;&#x65B0;&#x6BD4;&#x5411;&#x91CF;&#x7D22;&#x5F15;&#x590D;&#x6742;&#x5F97;&#x591A;&#x3002;</li>
</ol>
<p><strong>&#x5B9E;&#x8DF5;&#x542F;&#x793A;&#xFF1A;</strong> &#x5E94;&#x6839;&#x636E;&#x95EE;&#x9898;&#x7C7B;&#x578B;&#x9009;&#x62E9;&#x67B6;&#x6784;&#x3002;&#x5C40;&#x90E8;&#x95EE;&#x9898;&#x4E3A;&#x4E3B;&#x7684;&#x77E5;&#x8BC6;&#x5E93;&#xFF0C;&#x4F20;&#x7EDF; RAG &#x8DB3;&#x591F;&#x4E14;&#x66F4;&#x8F7B;&#x91CF;&#xFF1B;&#x5168;&#x5C40;&#x7406;&#x89E3;&#x9700;&#x6C42;&#x5F3A;&#x70C8;&#x7684;&#x573A;&#x666F;&#xFF08;&#x5982;&#x4F01;&#x4E1A;&#x6218;&#x7565;&#x5206;&#x6790;&#x3001;&#x6587;&#x732E;&#x7EFC;&#x8FF0;&#xFF09;&#xFF0C;&#x518D;&#x8003;&#x8651;&#x5F15;&#x5165; GraphRAG &#x6216;&#x6DF7;&#x5408;&#x65B9;&#x6848;&#x3002;</p>
<p><strong>&#x6DF7;&#x5408;&#x67B6;&#x6784;&#x7684;&#x53EF;&#x884C;&#x6027;&#xFF1A;</strong> &#x8BBA;&#x6587;&#x4F5C;&#x8005;&#x5728; GitHub &#x5B9E;&#x73B0;&#x4E2D;&#x652F;&#x6301;&quot;&#x5C40;&#x90E8; + &#x5168;&#x5C40;&quot;&#x53CC;&#x6A21;&#x5F0F;&#x67E5;&#x8BE2;&#x3002;&#x7CFB;&#x7EDF;&#x53EF;&#x5148;&#x5224;&#x65AD;&#x95EE;&#x9898;&#x7C7B;&#x578B;&#xFF1A;&#x82E5;&#x4E3A;&#x5C40;&#x90E8;&#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;&#xFF0C;&#x8D70;&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x8DEF;&#x5F84;&#xFF1B;&#x82E5;&#x4E3A;&#x5168;&#x5C40;&#x5F52;&#x7EB3;&#x95EE;&#x9898;&#xFF0C;&#x8D70;&#x793E;&#x533A;&#x6458;&#x8981;&#x8DEF;&#x5F84;&#x3002;&#x8FD9;&#x79CD;&#x8DEF;&#x7531;&#x903B;&#x8F91;&#x5728;&#x672A;&#x6765; RAG &#x7CFB;&#x7EDF;&#x4E2D;&#x53EF;&#x80FD;&#x6210;&#x4E3A;&#x6807;&#x914D;&#x3002;</p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<ol>
<li><strong>&#x4F20;&#x7EDF; RAG &#x7684;&#x6839;&#x672C;&#x5C40;&#x9650;&#xFF1A;</strong> &#x5411;&#x91CF;&#x68C0;&#x7D22;&#x53EA;&#x80FD;&#x505A;&quot;&#x5C40;&#x90E8;&#x76F8;&#x4F3C;&#x5339;&#x914D;&quot;&#xFF0C;&#x65E0;&#x6CD5;&#x56DE;&#x7B54;&#x9700;&#x8981;&#x5168;&#x5C40;&#x5F52;&#x7EB3;&#x7684;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>GraphRAG &#x7684;&#x6838;&#x5FC3;&#x521B;&#x65B0;&#xFF1A;</strong> &#x7528;&#x77E5;&#x8BC6;&#x56FE;&#x8C31; + &#x793E;&#x533A;&#x805A;&#x7C7B; + &#x9884;&#x751F;&#x6210;&#x6458;&#x8981;&#xFF0C;&#x5728;&#x7D22;&#x5F15;&#x9636;&#x6BB5;&#x5B8C;&#x6210;&quot;&#x5168;&#x5C40;&#x89C6;&#x56FE;&quot;&#x7684;&#x6784;&#x5EFA;&#xFF0C;&#x67E5;&#x8BE2;&#x65F6;&#x5728;&#x89C6;&#x56FE;&#x4E0A;&#x505A;&#x4E8C;&#x6B21;&#x52A0;&#x5DE5;&#x3002;</li>
<li><strong>&#x9002;&#x7528;&#x573A;&#x666F;&#x4E92;&#x8865;&#xFF1A;</strong> &#x5C40;&#x90E8;&#x4E8B;&#x5B9E;&#x67E5;&#x8BE2;&#x7528;&#x4F20;&#x7EDF; RAG&#xFF0C;&#x5168;&#x5C40;&#x5F52;&#x7EB3;&#x95EE;&#x9898;&#x7528; GraphRAG&#xFF0C;&#x4E24;&#x8005;&#x4E0D;&#x662F;&#x66FF;&#x4EE3;&#x5173;&#x7CFB;&#x3002;</li>
<li><strong>&#x6210;&#x672C;&#x4E0E;&#x6743;&#x8861;&#xFF1A;</strong> GraphRAG &#x7684;&#x7D22;&#x5F15;&#x6784;&#x5EFA;&#x548C;&#x66F4;&#x65B0;&#x6210;&#x672C;&#x663E;&#x8457;&#x9AD8;&#x4E8E;&#x4F20;&#x7EDF; RAG&#xFF0C;&#x9700;&#x6839;&#x636E;&#x4E1A;&#x52A1;&#x9700;&#x6C42;&#x8BC4;&#x4F30;&#x6295;&#x5165;&#x4EA7;&#x51FA;&#x6BD4;&#x3002;</li>
<li><strong>&#x5411;&#x91CF;&#x68C0;&#x7D22;&#x672A;&#x6B7B;&#xFF1A;</strong> &#x4E24;&#x8005;&#x89E3;&#x51B3;&#x4E0D;&#x540C;&#x7EF4;&#x5EA6;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x672A;&#x6765;&#x6DF7;&#x5408;&#x67B6;&#x6784;&#xFF08;&#x5C40;&#x90E8;&#x7528;&#x5411;&#x91CF;&#x3001;&#x5168;&#x5C40;&#x7528;&#x56FE;&#xFF09;&#x53EF;&#x80FD;&#x662F;&#x4E3B;&#x6D41;&#x65B9;&#x5411;&#x3002;</li>
</ol>
<h1 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h1>
<ul>
<li><a href="https://arxiv.org/abs/2404.16130">arXiv &#x8BBA;&#x6587;&#x94FE;&#x63A5;</a></li>
<li><a href="https://github.com/microsoft/graphrag">Microsoft GraphRAG GitHub</a></li>
<li><a href="https://microsoft.github.io/graphrag/">GraphRAG &#x5B98;&#x65B9;&#x6587;&#x6863;</a></li>
</ul>
<p><em>&#x7F16;&#x8F91;&#xFF1A;2026-03-11</em></p>
`,E=[{level:2,title:"这篇论文解决了什么问题？",children:[]},{level:2,title:"这个问题真实存在吗？",children:[]},{level:2,title:"为什么之前没人解决？/ 为什么现在才提出？",children:[]},{level:2,title:"它是如何解决的？",children:[]},{level:2,title:"关键词解析",children:[{level:3,title:"1. 实体知识图谱 (Entity Knowledge Graph)",children:[]},{level:3,title:"2. Leiden 算法",children:[]},{level:3,title:"3. 查询聚焦摘要 (Query-Focused Summarization, QFS)",children:[]}]},{level:2,title:'延伸思考：GraphRAG 是否意味着"向量检索已死"？',children:[]},{level:2,title:"总结",children:[]},{level:1,title:"参考资料",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
