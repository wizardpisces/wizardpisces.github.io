const x={},F=`<p><strong>&#x8DE8;&#x6587;&#x6863;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;</strong></p>
<p>&#x573A;&#x666F;&#xFF1A;&#x4E24;&#x4E2A;&#x4E0D;&#x540C; PRD &#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x6BB5;&#x843D;&#x63CF;&#x8FF0;&#x7684;&#x662F;<strong>&#x540C;&#x4E00;&#x4E2A;&#x4E1A;&#x52A1;&#x4E8B;&#x5B9E;/&#x89C4;&#x5219;</strong>&#xFF0C;&#x4F46;&#x540E;&#x6765;&#x65B0; PRD &#x66F4;&#x65B0;&#x4E86;&#x63CF;&#x8FF0;&#x3002;RAG &#x5DF2;&#x7ECF;&#x628A;&#x65E7;&#x6587;&#x6863;&#x5207;&#x6210; chunk &#x5B58;&#x5165;&#x5411;&#x91CF;&#x5E93;&#xFF0C;&#x8FD9;&#x65F6;&#x5982;&#x4F55;<strong>&#x7CBE;&#x51C6;&#x66FF;&#x6362;&#x6216;&#x6291;&#x5236;&#x65E7;&#x77E5;&#x8BC6;</strong>&#x3002;</p>
<p>&#x8FD9;&#x4E0E;&#x666E;&#x901A;&quot;&#x6587;&#x6863;&#x7248;&#x672C;&#x66F4;&#x65B0;&quot;&#x4E0D;&#x540C;&#xFF0C;&#x672C;&#x8D28;&#x95EE;&#x9898;&#x662F;&#xFF1A;</p>
<blockquote>
<p><strong>RAG &#x7684;&#x7D22;&#x5F15;&#x5355;&#x4F4D;&#x662F; chunk&#xFF0C;&#x800C;&#x4E0D;&#x662F;&quot;&#x77E5;&#x8BC6;&#x70B9;&quot;&#x3002;</strong></p>
</blockquote>
<p>&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#x53EA;&#x77E5;&#x9053;&quot;&#x8FD9;&#x4E2A;&#x5411;&#x91CF;&#x548C;&#x67E5;&#x8BE2;&#x5411;&#x91CF;&#x6709;&#x591A;&#x8FD1;&quot;&#xFF0C;&#x5B83;&#x4E0D;&#x77E5;&#x9053;&#x4E24;&#x4E2A; chunk &#x8BF4;&#x7684;&#x662F;&#x540C;&#x4E00;&#x4EF6;&#x4E8B;&#xFF0C;&#x66F4;&#x4E0D;&#x77E5;&#x9053;&#x54EA;&#x4E2A;&#x662F;&#x65B0;&#x7248;&#x672C;&#x3002;</p>
<hr>
<h1 id="&#x95EE;&#x9898;&#x6709;&#x591A;&#x96BE;&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;"><a href="#&#x95EE;&#x9898;&#x6709;&#x591A;&#x96BE;&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;"></a>&#x95EE;&#x9898;&#x6709;&#x591A;&#x96BE;&#xFF1F;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;</h1>
<p>&#x7535;&#x5546;&#x552E;&#x540E;&#x4F53;&#x7CFB;&#xFF0C;&#x4E09;&#x4EFD;&#x4E0D;&#x540C;&#x65F6;&#x671F;&#x7684; PRD&#xFF1A;</p>
<pre><code>PRD_A (2023-01)&#xFF1A;&quot;&#x7528;&#x6237;&#x53EF;&#x5728;&#x7B7E;&#x6536;&#x540E; 7 &#x5929;&#x5185;&#x7533;&#x8BF7;&#x65E0;&#x7406;&#x7531;&#x9000;&#x6B3E;&quot;
PRD_B (2023-06)&#xFF1A;&quot;&#x9000;&#x6B3E;&#x7A97;&#x53E3;&#x5EF6;&#x957F;&#x81F3;&#x7B7E;&#x6536;&#x540E; 15 &#x5929;&quot;
PRD_C (2024-03)&#xFF1A;&quot;&#x7528;&#x6237;&#x53EF;&#x5728;&#x7B7E;&#x6536;&#x540E; 30 &#x5929;&#x5185;&#x7533;&#x8BF7;&#x65E0;&#x7406;&#x7531;&#x9000;&#x6B3E;&quot;
</code></pre>
<p>&#x4E09;&#x4EFD;&#x6587;&#x6863;&#x90FD;&#x88AB;&#x5207;&#x6210; chunk &#x5B58;&#x5165;&#x5411;&#x91CF;&#x5E93;&#x3002;&#x7528;&#x6237;&#x95EE;&quot;&#x9000;&#x6B3E;&#x671F;&#x9650;&#x662F;&#x591A;&#x4E45;&#xFF1F;&quot;&#x2014;&#x2014;&#x4E09;&#x4E2A; chunk &#x7684;&#x5411;&#x91CF;&#x90FD;&#x5F88;&#x76F8;&#x4F3C;&#xFF0C;&#x90FD;&#x53EF;&#x80FD;&#x88AB;&#x53EC;&#x56DE;&#x3002;&#x5982;&#x679C;&#x65E7; chunk &#x6392;&#x5728;&#x524D;&#x9762;&#xFF0C;LLM &#x5C31;&#x4F1A;&#x57FA;&#x4E8E;&#x8FC7;&#x65F6;&#x4FE1;&#x606F;&#x56DE;&#x7B54;&quot;7 &#x5929;&quot;&#x3002;</p>
<p>&#x66F4;&#x96BE;&#x7684;&#x60C5;&#x51B5;&#xFF1A;PRD_C &#x6539;&#x4E86;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#xFF0C;&#x4F46;<strong>&#x6CA1;&#x6709;&#x540C;&#x6B65;&#x4FEE;&#x6539;&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;&#x7684;&#x63CF;&#x8FF0;</strong>&#x3002;&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;&#x7684; chunk &#x4ECD;&#x7136;&#x5199;&#x7740;&quot;&#x4E70;&#x5BB6;&#x627F;&#x62C5;&#x9000;&#x8D27;&#x8FD0;&#x8D39;&quot;&#xFF0C;&#x4F46;&#x6309;&#x65B0;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x5E94;&#x8BE5;&#x662F;&quot;&#x5356;&#x5BB6;&#x627F;&#x62C5;&quot;&#x3002;&#x8FD9;&#x5C31;&#x662F;<strong>&#x8DE8;&#x77E5;&#x8BC6;&#x70B9;&#x7684;&#x7EA7;&#x8054;&#x8FC7;&#x671F;</strong>&#x2014;&#x2014;&#x8FDE;&#x4EBA;&#x90FD;&#x4E0D;&#x4E00;&#x5B9A;&#x7ACB;&#x523B;&#x610F;&#x8BC6;&#x5230;&#xFF0C;&#x4F55;&#x51B5;&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#x3002;</p>
<hr>
<h1 id="&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x603B;&#x89C8;"><a href="#&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x603B;&#x89C8;"></a>&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x603B;&#x89C8;</h1>
<p>&#x6838;&#x5FC3;&#x601D;&#x8DEF;&#xFF1A;&#x5728; chunk &#x4E4B;&#x4E0A;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&quot;&#x77E5;&#x8BC6;&#x5C42;&quot;&#x3002;&#x65B9;&#x6848;&#x4ECE;&#x7B80;&#x5355;&#x5230;&#x590D;&#x6742;&#xFF0C;&#x6210;&#x672C;&#x9010;&#x7EA7;&#x9012;&#x589E;&#xFF1A;</p>
<pre><code>&#x65B9;&#x6848;&#x590D;&#x6742;&#x5EA6;&#xFF1A;  &#x4F4E; &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2192; &#x9AD8;
             &#x2502;         &#x2502;            &#x2502;          &#x2502;         &#x2502;
             &#x65F6;&#x95F4;&#x4F18;&#x5148;&#x7EA7;   LLM&#x51B2;&#x7A81;&#x6D88;&#x89E3;   &#x8BED;&#x4E49;&#x53BB;&#x91CD;   &#x77E5;&#x8BC6;&#x70B9;ID   &#x77E5;&#x8BC6;&#x56FE;&#x8C31;
             &#x2502;         &#x2502;            &#x2502;          &#x2502;         &#x2502;
&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#xFF1A;  &#x540C;&#x4E00;&#x8BDD;&#x9898;    &#x77DB;&#x76FE;chunk    &#x91CD;&#x590D;chunk   &#x7248;&#x672C;&#x7BA1;&#x7406;   &#x7EA7;&#x8054;&#x66F4;&#x65B0;
             &#x504F;&#x597D;&#x65B0;&#x6587;&#x6863;   &#x8FD0;&#x884C;&#x65F6;&#x515C;&#x5E95;    &#x81EA;&#x52A8;&#x53D1;&#x73B0;    &#x7CBE;&#x51C6;&#x63A7;&#x5236;   &#x5173;&#x7CFB;&#x5EFA;&#x6A21;
</code></pre>
<hr>
<h1 id="&#x65B9;&#x6848; 1&#xFF1A;&#x65F6;&#x95F4; / &#x6587;&#x6863;&#x4F18;&#x5148;&#x7EA7;"><a href="#&#x65B9;&#x6848; 1&#xFF1A;&#x65F6;&#x95F4; / &#x6587;&#x6863;&#x4F18;&#x5148;&#x7EA7;"></a>&#x65B9;&#x6848; 1&#xFF1A;&#x65F6;&#x95F4; / &#x6587;&#x6863;&#x4F18;&#x5148;&#x7EA7;</h1>
<p><strong>&#x505A;&#x6CD5;</strong>&#xFF1A;&#x4E0D;&#x6539;&#x6570;&#x636E;&#xFF0C;&#x53EA;&#x6539;&#x68C0;&#x7D22;&#x6392;&#x5E8F;&#x2014;&#x2014;&#x7ED9;&#x65B0;&#x6587;&#x6863;&#x66F4;&#x9AD8;&#x6743;&#x91CD;&#x3002;</p>
<pre><code>final_score = vector_similarity + 0.1 * recency + 0.1 * doc_priority
</code></pre>
<table>
<thead>
<tr>
<th>&#x6587;&#x6863;</th>
<th>priority</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x6700;&#x65B0;PRD</td>
<td>10</td>
</tr>
<tr>
<td>&#x65E7;PRD</td>
<td>5</td>
</tr>
</tbody>
</table>
<p><strong>&#x4F18;&#x70B9;</strong>&#xFF1A;&#x96F6;&#x6210;&#x672C;&#xFF0C;&#x7ACB;&#x523B;&#x53EF;&#x7528;&#x3002;
<strong>&#x5C40;&#x9650;</strong>&#xFF1A;&#x4E0D;&#x80FD;&#x6392;&#x9664;&#x65E7; chunk&#xFF0C;&#x53EA;&#x80FD;&#x8BA9;&#x5B83;&#x6392;&#x540E;&#x9762;&#x3002;&#x5982;&#x679C; top_k &#x8DB3;&#x591F;&#x5927;&#xFF0C;&#x65E7;&#x77E5;&#x8BC6;&#x8FD8;&#x662F;&#x4F1A;&#x88AB;&#x53EC;&#x56DE;&#x3002;</p>
<hr>
<h1 id="&#x65B9;&#x6848; 2&#xFF1A;LLM &#x51B2;&#x7A81;&#x6D88;&#x89E3;"><a href="#&#x65B9;&#x6848; 2&#xFF1A;LLM &#x51B2;&#x7A81;&#x6D88;&#x89E3;"></a>&#x65B9;&#x6848; 2&#xFF1A;LLM &#x51B2;&#x7A81;&#x6D88;&#x89E3;</h1>
<p><strong>&#x505A;&#x6CD5;</strong>&#xFF1A;&#x4E0D;&#x5220;&#x65E7; chunk&#xFF0C;&#x5728; LLM &#x751F;&#x6210;&#x9636;&#x6BB5;&#x5904;&#x7406;&#x77DB;&#x76FE;&#x3002;</p>
<p>&#x68C0;&#x7D22;&#x53EC;&#x56DE;&#x4E86;&#x65B0;&#x65E7;&#x4E24;&#x4E2A; chunk &#x540E;&#xFF0C;&#x5728; prompt &#x4E2D;&#x52A0;&#x7EA6;&#x675F;&#xFF1A;</p>
<pre><code>&#x4EE5;&#x4E0B;&#x53C2;&#x8003;&#x8D44;&#x6599;&#x53EF;&#x80FD;&#x5B58;&#x5728;&#x7248;&#x672C;&#x5DEE;&#x5F02;&#x3002;&#x5982;&#x679C;&#x5185;&#x5BB9;&#x51B2;&#x7A81;&#xFF0C;&#x4EE5;&#x6587;&#x6863;&#x65F6;&#x95F4;&#x6700;&#x65B0;&#x7684;&#x4E3A;&#x51C6;&#x3002;

[chunk A - &#x6765;&#x81EA; PRD_A, 2023-01]
...
[chunk B - &#x6765;&#x81EA; PRD_C, 2024-03]
...
</code></pre>
<p><strong>&#x4F18;&#x70B9;</strong>&#xFF1A;&#x7B80;&#x5355;&#xFF0C;&#x4E0D;&#x6539;&#x7D22;&#x5F15;&#x3002;
<strong>&#x5C40;&#x9650;</strong>&#xFF1A;&#x4F9D;&#x8D56; LLM &#x5224;&#x65AD;&#x80FD;&#x529B;&#xFF0C;&#x4E14;&#x591A;&#x53EC;&#x56DE;&#x65E7; chunk &#x6D6A;&#x8D39; token&#x3002;&#x9002;&#x5408;&#x4F5C;&#x4E3A;&#x515C;&#x5E95;&#x65B9;&#x6848;&#x3002;</p>
<hr>
<h1 id="&#x65B9;&#x6848; 3&#xFF1A;&#x8BED;&#x4E49;&#x53BB;&#x91CD;"><a href="#&#x65B9;&#x6848; 3&#xFF1A;&#x8BED;&#x4E49;&#x53BB;&#x91CD;"></a>&#x65B9;&#x6848; 3&#xFF1A;&#x8BED;&#x4E49;&#x53BB;&#x91CD;</h1>
<p><strong>&#x505A;&#x6CD5;</strong>&#xFF1A;&#x65B0; chunk &#x5165;&#x5E93;&#x65F6;&#xFF0C;&#x81EA;&#x52A8;&#x68C0;&#x6D4B;&#x662F;&#x5426;&#x4E0E;&#x5DF2;&#x6709; chunk &#x8BED;&#x4E49;&#x91CD;&#x590D;&#x3002;</p>
<pre><code>&#x65B0; chunk &#x5165;&#x5E93;
    &#x2502;
    &#x25BC;
embedding &#x2192; &#x5411;&#x91CF;&#x68C0;&#x7D22;&#x5DF2;&#x6709; chunk
    &#x2502;
    &#x25BC;
&#x76F8;&#x4F3C;&#x5EA6; &gt; 0.9 &#x7684; &#x2192; &#x5224;&#x5B9A;&#x4E3A;&#x540C;&#x4E00;&#x77E5;&#x8BC6;&#x7684;&#x4E0D;&#x540C;&#x7248;&#x672C;
    &#x2502;
    &#x25BC;
&#x65E7; chunk &#x6807;&#x8BB0; deprecated / &#x964D;&#x4F4E;&#x6743;&#x91CD;
</code></pre>
<p><strong>&#x4F18;&#x70B9;</strong>&#xFF1A;&#x81EA;&#x52A8;&#x5316;&#xFF0C;&#x65E0;&#x9700;&#x4EBA;&#x5DE5;&#x5EFA;&#x6A21;&#x3002;
<strong>&#x5C40;&#x9650;</strong>&#xFF1A;&#x9608;&#x503C;&#x4E0D;&#x597D;&#x8C03;&#x2014;&#x2014;0.9 &#x53EF;&#x80FD;&#x6F0F;&#x6389;&#x6362;&#x4E86;&#x8868;&#x8FF0;&#x65B9;&#x5F0F;&#x7684;&#x540C;&#x4E00;&#x89C4;&#x5219;&#xFF0C;0.7 &#x53C8;&#x4F1A;&#x8BEF;&#x4F24;&#x76F8;&#x4F3C;&#x4F46;&#x4E0D;&#x540C;&#x7684;&#x77E5;&#x8BC6;&#x70B9;&#x3002;<strong>&#x4E0D;&#x9002;&#x5408;&#x590D;&#x6742;&#x4E1A;&#x52A1;&#x89C4;&#x5219;</strong>&#x3002;</p>
<hr>
<h1 id="&#x65B9;&#x6848; 4&#xFF1A;&#x77E5;&#x8BC6;&#x70B9; ID&#xFF08;Knowledge Unit&#xFF09;"><a href="#&#x65B9;&#x6848; 4&#xFF1A;&#x77E5;&#x8BC6;&#x70B9; ID&#xFF08;Knowledge Unit&#xFF09;"></a>&#x65B9;&#x6848; 4&#xFF1A;&#x77E5;&#x8BC6;&#x70B9; ID&#xFF08;Knowledge Unit&#xFF09;</h1>
<p><strong>&#x505A;&#x6CD5;</strong>&#xFF1A;&#x7ED9;&#x6BCF;&#x4E2A; chunk &#x6253;&#x4E0A;&#x5B83;&#x63CF;&#x8FF0;&#x7684;&quot;&#x4E1A;&#x52A1;&#x77E5;&#x8BC6;&#x70B9;&quot;&#x6807;&#x7B7E;&#xFF0C;&#x901A;&#x8FC7;&#x6807;&#x7B7E;&#x7BA1;&#x7406;&#x7248;&#x672C;&#x3002;</p>
<pre><code>PRD_A chunk_02 &#x2192; knowledge_id: refund_policy, status: deprecated
PRD_B chunk_15 &#x2192; knowledge_id: refund_policy, status: deprecated
PRD_C chunk_08 &#x2192; knowledge_id: refund_policy, status: active &#x2705;
</code></pre>
<p>&#x68C0;&#x7D22;&#x65F6;&#x8FC7;&#x6EE4; <code>status = active</code>&#xFF0C;&#x65E7;&#x7248;&#x672C;&#x5B8C;&#x5168;&#x4E0D;&#x4F1A;&#x88AB;&#x53EC;&#x56DE;&#x3002;</p>
<p><strong>&#x8FD9;&#x662F;&#x6574;&#x7BC7;&#x6587;&#x7AE0;&#x7684;&#x6838;&#x5FC3;&#x65B9;&#x6848;</strong>&#xFF0C;&#x540E;&#x9762;&#x6240;&#x6709;&#x65B9;&#x6848;&#x90FD;&#x5EFA;&#x7ACB;&#x5728;&#x5B83;&#x4E4B;&#x4E0A;&#x3002;&#x5173;&#x952E;&#x95EE;&#x9898;&#x662F;&#xFF1A;<strong>knowledge_id &#x4ECE;&#x54EA;&#x6765;&#xFF1F;</strong></p>
<h2 id="&#x77E5;&#x8BC6;&#x70B9;&#x6807;&#x7B7E;&#x600E;&#x4E48;&#x6765;&#xFF1F;"><a href="#&#x77E5;&#x8BC6;&#x70B9;&#x6807;&#x7B7E;&#x600E;&#x4E48;&#x6765;&#xFF1F;"></a>&#x77E5;&#x8BC6;&#x70B9;&#x6807;&#x7B7E;&#x600E;&#x4E48;&#x6765;&#xFF1F;</h2>
<p>&#x8FD9;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x7EAF;&#x6280;&#x672F;&#x95EE;&#x9898;&#xFF0C;&#x800C;&#x662F;<strong>&#x77E5;&#x8BC6;&#x7BA1;&#x7406;&#x95EE;&#x9898;</strong>&#x3002;&#x4E09;&#x79CD;&#x8DEF;&#x5F84;&#x5404;&#x6709;&#x9002;&#x7528;&#x573A;&#x666F;&#xFF1A;</p>
<p><strong>&#x8DEF;&#x5F84; A&#xFF1A;&#x4EBA;&#x5DE5;&#x5B9A;&#x4E49;&#xFF08;&#x6700;&#x53EF;&#x9760;&#xFF09;</strong></p>
<p>&#x7531;&#x4E1A;&#x52A1;&#x56E2;&#x961F;/&#x77E5;&#x8BC6;&#x7BA1;&#x7406;&#x56E2;&#x961F;&#x7EF4;&#x62A4;&#x4E00;&#x4EFD;&quot;&#x77E5;&#x8BC6;&#x70B9;&#x6E05;&#x5355;&quot;&#xFF0C;&#x6587;&#x6863;&#x5165;&#x5E93;&#x65F6;&#x4EBA;&#x5DE5;&#xFF08;&#x6216;&#x6309;&#x89C4;&#x5219;&#xFF09;&#x6807;&#x6CE8;&#x6BCF;&#x4E2A; chunk &#x5C5E;&#x4E8E;&#x54EA;&#x4E2A;&#x77E5;&#x8BC6;&#x70B9;&#x3002;</p>
<pre><code>&#x77E5;&#x8BC6;&#x70B9;&#x6E05;&#x5355;&#xFF08;&#x4EBA;&#x5DE5;&#x7EF4;&#x62A4;&#xFF09;&#xFF1A;
&#x251C;&#x2500;&#x2500; refund_policy        &#x9000;&#x6B3E;&#x653F;&#x7B56;
&#x251C;&#x2500;&#x2500; return_shipping_fee  &#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;
&#x251C;&#x2500;&#x2500; product_condition    &#x5546;&#x54C1;&#x5B8C;&#x597D;&#x6807;&#x51C6;
&#x251C;&#x2500;&#x2500; refund_timeline      &#x9000;&#x6B3E;&#x65F6;&#x6548;
&#x2514;&#x2500;&#x2500; ...
</code></pre>
<p>&#x9002;&#x5408;&#xFF1A;&#x77E5;&#x8BC6;&#x70B9;&#x6570;&#x91CF;&#x6709;&#x9650;&#xFF08;&#x51E0;&#x5341;&#x5230;&#x51E0;&#x767E;&#x4E2A;&#xFF09;&#x3001;&#x6709;&#x4E13;&#x4EBA;&#x7EF4;&#x62A4;&#x77E5;&#x8BC6;&#x5E93;&#x7684;&#x56E2;&#x961F;&#x3002;&#x5F88;&#x591A;&#x4F01;&#x4E1A;&#x7684;&#x5BA2;&#x670D;&#x77E5;&#x8BC6;&#x5E93;&#x3001;&#x5408;&#x89C4;&#x6587;&#x6863;&#x5E93;&#x5C31;&#x662F;&#x8FD9;&#x4E48;&#x7BA1;&#x7684;&#x3002;</p>
<p><strong>&#x8DEF;&#x5F84; B&#xFF1A;LLM &#x8F85;&#x52A9;&#x63D0;&#x53D6; + &#x4EBA;&#x5DE5;&#x5BA1;&#x6838;</strong></p>
<p>&#x5148;&#x8BA9; LLM &#x6279;&#x91CF;&#x7ED9; chunk &#x751F;&#x6210;&#x6807;&#x7B7E;&#x5019;&#x9009;&#xFF0C;&#x7136;&#x540E;&#x4EBA;&#x5DE5;&#x5408;&#x5E76;&#x8FD1;&#x4E49;&#x8BCD;&#x3001;&#x5BA1;&#x6838;&#x786E;&#x8BA4;&#x3002;</p>
<pre><code>LLM &#x5F00;&#x653E;&#x63D0;&#x53D6; &#x2192; &#x5F97;&#x5230;&#x96F6;&#x6563;&#x6807;&#x7B7E;&#xFF08;refund_rule, return_policy, &#x9000;&#x6B3E;&#x653F;&#x7B56;, ...&#xFF09;
     &#x2502;
     &#x25BC;
&#x5408;&#x5E76;&#x8FD1;&#x4E49;&#x8BCD;  &#x2192; &#x6807;&#x51C6;&#x5316;&#x6807;&#x7B7E;&#x5217;&#x8868;&#xFF08;refund_policy = [refund_rule, return_policy, &#x9000;&#x6B3E;&#x653F;&#x7B56;]&#xFF09;
     &#x2502;
     &#x25BC;
&#x4EBA;&#x5DE5;&#x5BA1;&#x6838;    &#x2192; &#x786E;&#x8BA4;/&#x4FEE;&#x6B63;
     &#x2502;
     &#x25BC;
&#x7528;&#x6807;&#x51C6;&#x5217;&#x8868;&#x7ED9; chunk &#x505A;&#x5206;&#x7C7B;&#x6807;&#x6CE8;&#xFF08;LLM &#x505A;&#x5206;&#x7C7B;&#x6BD4;&#x505A;&#x5F00;&#x653E;&#x751F;&#x6210;&#x51C6;&#x786E;&#x5F97;&#x591A;&#xFF09;
</code></pre>
<p>&#x9002;&#x5408;&#xFF1A;&#x77E5;&#x8BC6;&#x70B9;&#x591A;&#x3001;&#x4EBA;&#x529B;&#x6709;&#x9650;&#xFF0C;&#x4F46;&#x5BF9;&#x51C6;&#x786E;&#x6027;&#x6709;&#x8981;&#x6C42;&#x3002;</p>
<p><strong>&#x8DEF;&#x5F84; C&#xFF1A;&#x7EAF;&#x89C4;&#x5219;/&#x5143;&#x6570;&#x636E;</strong></p>
<p>&#x5982;&#x679C;&#x6587;&#x6863;&#x672C;&#x8EAB;&#x5C31;&#x6709;&#x7ED3;&#x6784;&#xFF08;&#x6BD4;&#x5982; Confluence &#x7684;&#x9875;&#x9762;&#x6807;&#x7B7E;&#x3001;PRD &#x7684;&#x7AE0;&#x8282;&#x7F16;&#x53F7;&#xFF09;&#xFF0C;&#x76F4;&#x63A5;&#x7528;&#x5DF2;&#x6709;&#x7684;&#x5143;&#x6570;&#x636E;&#x505A; knowledge_id&#x3002;</p>
<pre><code>PRD &#x6587;&#x6863;&#x7684;&quot;&#x7B2C;&#x4E09;&#x7AE0; &#x9000;&#x6B3E;&#x653F;&#x7B56;&quot; &#x2192; knowledge_id = prd_{doc_id}_chapter_3
</code></pre>
<p>&#x9002;&#x5408;&#xFF1A;&#x6587;&#x6863;&#x7ED3;&#x6784;&#x89C4;&#x8303;&#x3001;&#x6709;&#x7EDF;&#x4E00;&#x6A21;&#x677F;&#x7684;&#x56E2;&#x961F;&#x3002;</p>
<h2 id="&#x540C;&#x4E00;&#x77E5;&#x8BC6;&#x70B9;&#x591A;&#x4E2A;&#x7248;&#x672C;&#x600E;&#x4E48;&#x9009; active&#xFF1F;"><a href="#&#x540C;&#x4E00;&#x77E5;&#x8BC6;&#x70B9;&#x591A;&#x4E2A;&#x7248;&#x672C;&#x600E;&#x4E48;&#x9009; active&#xFF1F;"></a>&#x540C;&#x4E00;&#x77E5;&#x8BC6;&#x70B9;&#x591A;&#x4E2A;&#x7248;&#x672C;&#x600E;&#x4E48;&#x9009; active&#xFF1F;</h2>
<p>&#x901A;&#x5E38;<strong>&#x6700;&#x65B0;&#x6587;&#x6863;&#x7684; chunk &#x4E3A; active</strong>&#x3002;&#x4F46;&#x6709;&#x4F8B;&#x5916;&#x2014;&#x2014;&#x65B0;&#x6587;&#x6863;&#x53EF;&#x80FD;&#x53EA;&#x662F;&#x7B80;&#x7565;&#x63D0;&#x4E86;&#x4E00;&#x53E5;&#xFF0C;&#x65E7;&#x6587;&#x6863;&#x6709;&#x8BE6;&#x7EC6;&#x63CF;&#x8FF0;&#x3002;&#x5904;&#x7406;&#x539F;&#x5219;&#xFF1A;</p>
<ol>
<li>&#x9ED8;&#x8BA4;&#x6309;&#x6587;&#x6863;&#x65F6;&#x95F4;&#x53D6;&#x6700;&#x65B0;</li>
<li>&#x5982;&#x679C;&#x6700;&#x65B0; chunk &#x660E;&#x663E;&#x8FC7;&#x77ED;/&#x4E0D;&#x5B8C;&#x6574;&#xFF0C;&#x4FDD;&#x7559;&#x65E7;&#x7684;&#x8BE6;&#x7EC6;&#x7248;&#x672C;&#x4E3A; active&#xFF0C;&#x5C06;&#x65B0; chunk &#x6807;&#x8BB0;&#x4E3A; <code>reference</code>&#xFF08;&#x8F85;&#x52A9;&#x53C2;&#x8003;&#xFF09;</li>
<li>&#x4EBA;&#x5DE5;&#x515C;&#x5E95;&#xFF1A;&#x5BF9;&#x540C;&#x4E00; knowledge_id &#x4E0B; chunk &#x6570; &gt; 3 &#x7684;&#xFF0C;&#x5B9A;&#x671F;&#x4EBA;&#x5DE5;&#x5BA1;&#x67E5;</li>
</ol>
<hr>
<h1 id="&#x65B9;&#x6848; 5&#xFF1A;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x5C42;"><a href="#&#x65B9;&#x6848; 5&#xFF1A;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x5C42;"></a>&#x65B9;&#x6848; 5&#xFF1A;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x5C42;</h1>
<p>&#x65B9;&#x6848; 4 &#x7684; knowledge_id &#x662F;<strong>&#x6241;&#x5E73;&#x6807;&#x7B7E;</strong>&#x2014;&#x2014;&#x6BCF;&#x4E2A;&#x77E5;&#x8BC6;&#x70B9;&#x662F;&#x72EC;&#x7ACB;&#x7684;&#xFF0C;&#x4E0D;&#x77E5;&#x9053;&#x5F7C;&#x6B64;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x3002;&#x56DE;&#x5230;&#x5F00;&#x5934;&#x7684;&#x4F8B;&#x5B50;&#xFF1A;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x6539;&#x4E86;&#xFF0C;&#x4F46;&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;&#x6CA1;&#x8DDF;&#x7740;&#x6539;&#x3002;&#x6241;&#x5E73;&#x6807;&#x7B7E;&#x89E3;&#x51B3;&#x4E0D;&#x4E86;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4E0D;&#x77E5;&#x9053;&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;&#x4F9D;&#x8D56;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x3002;</p>
<p>&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x5728;&#x6241;&#x5E73;&#x6807;&#x7B7E;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x589E;&#x52A0;&#x4E86;<strong>&#x8282;&#x70B9;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x8FB9;</strong>&#xFF1A;</p>
<pre><code>&#x65B9;&#x6848; 4&#xFF08;&#x6241;&#x5E73;&#xFF09;&#xFF1A;
  [&#x9000;&#x6B3E;&#x653F;&#x7B56;]     [&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;]     [&#x5546;&#x54C1;&#x5B8C;&#x597D;&#x6807;&#x51C6;]
  &#x5404;&#x81EA;&#x72EC;&#x7ACB;&#xFF0C;&#x4E92;&#x4E0D;&#x77E5;&#x9053;

&#x65B9;&#x6848; 5&#xFF08;&#x56FE;&#x8C31;&#xFF09;&#xFF1A;
  [&#x9000;&#x6B3E;&#x653F;&#x7B56;] &#x2500;&#x2500;depends_on&#x2500;&#x2500;&#x2192; [&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;]
       &#x2502;                         &#x2502;
       &#x2514;&#x2500;&#x2500;part_of&#x2500;&#x2500;&#x2192; [&#x552E;&#x540E;&#x670D;&#x52A1;] &#x2190;&#x2500;&#x2500;part_of&#x2500;&#x2500;&#x2518;
</code></pre>
<h2 id="&#x5173;&#x7CFB;&#x8FB9;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"><a href="#&#x5173;&#x7CFB;&#x8FB9;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;"></a>&#x5173;&#x7CFB;&#x8FB9;&#x89E3;&#x51B3;&#x4EC0;&#x4E48;&#x95EE;&#x9898;&#xFF1F;</h2>
<p><strong>1. &#x7EA7;&#x8054;&#x66F4;&#x65B0;&#x63D0;&#x9192;</strong></p>
<p>&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x66F4;&#x65B0;&#x540E;&#xFF0C;&#x7CFB;&#x7EDF;&#x6CBF;&#x7740; <code>depends_on</code> &#x8FB9;&#x627E;&#x5230;&#x6240;&#x6709;&#x4E0B;&#x6E38;&#x77E5;&#x8BC6;&#x70B9;&#xFF0C;&#x6807;&#x8BB0;&#x9700;&#x8981;&#x5BA1;&#x67E5;&#xFF1A;</p>
<pre><code>&#x9000;&#x6B3E;&#x653F;&#x7B56; &#x66F4;&#x65B0;
   &#x2502;
   &#x251C;&#x2500;&#x2192; &#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;   &#x2192; &#x6807;&#x8BB0;&#xFF1A;&#x9700;&#x5BA1;&#x67E5;&#xFF08;&#x4F9D;&#x8D56;&#x5DF2;&#x66F4;&#x65B0;&#xFF09;
   &#x251C;&#x2500;&#x2192; &#x5BA2;&#x670D;&#x8BDD;&#x672F;&#x6A21;&#x677F; &#x2192; &#x6807;&#x8BB0;&#xFF1A;&#x9700;&#x5BA1;&#x67E5;
   &#x2514;&#x2500;&#x2192; FAQ &#x9000;&#x6B3E;&#x6761;&#x76EE; &#x2192; &#x6807;&#x8BB0;&#xFF1A;&#x9700;&#x5BA1;&#x67E5;
</code></pre>
<p>&#x6CA1;&#x6709;&#x5173;&#x7CFB;&#x8FB9;&#xFF0C;&#x6539;&#x4E86;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x540E;&#x6839;&#x672C;&#x4E0D;&#x77E5;&#x9053;&#x8FD8;&#x6709;&#x54EA;&#x4E9B;&#x77E5;&#x8BC6;&#x70B9;&#x53D7;&#x5F71;&#x54CD;&#x3002;</p>
<p><strong>2. &#x591A;&#x8DF3;&#x68C0;&#x7D22;</strong></p>
<p>&#x7528;&#x6237;&#x95EE;&quot;&#x9000;&#x8D27;&#x540E;&#x591A;&#x4E45;&#x80FD;&#x6536;&#x5230;&#x9000;&#x6B3E;&#xFF1F;&quot;&#x6D89;&#x53CA;&#x591A;&#x4E2A;&#x77E5;&#x8BC6;&#x70B9;&#xFF1A;</p>
<pre><code>&#x5411;&#x91CF;&#x68C0;&#x7D22; &#x2192; &#x547D;&#x4E2D; [&#x9000;&#x6B3E;&#x65F6;&#x6548;]
&#x6CBF;&#x8FB9;&#x6269;&#x5C55; &#x2192; [&#x9000;&#x6B3E;&#x65F6;&#x6548;] &#x2500;&#x2500; depends_on &#x2192; [&#x9000;&#x6B3E;&#x653F;&#x7B56;]
         &#x2192; [&#x9000;&#x6B3E;&#x65F6;&#x6548;] &#x2500;&#x2500; depends_on &#x2192; [&#x652F;&#x4ED8;&#x6E20;&#x9053;&#x9000;&#x6B3E;&#x5468;&#x671F;]
&#x7EC4;&#x5408;&#x4E09;&#x4E2A;&#x8282;&#x70B9;&#x7684; active chunk &#x2192; LLM &#x751F;&#x6210;&#x5B8C;&#x6574;&#x7B54;&#x6848;
</code></pre>
<p>&#x6241;&#x5E73;&#x6807;&#x7B7E;&#x53EA;&#x80FD;&#x9760;&#x5411;&#x91CF;&#x76F8;&#x4F3C;&#x5EA6;&quot;&#x78B0;&#x8FD0;&#x6C14;&quot;&#x53EC;&#x56DE;&#x76F8;&#x5173; chunk&#xFF0C;&#x56FE;&#x8C31;&#x80FD;<strong>&#x7ED3;&#x6784;&#x5316;&#x5730;</strong>&#x627E;&#x5230;&#x5173;&#x8054;&#x77E5;&#x8BC6;&#x3002;</p>
<h2 id="&#x5173;&#x7CFB;&#x600E;&#x4E48;&#x5EFA;&#xFF1F;"><a href="#&#x5173;&#x7CFB;&#x600E;&#x4E48;&#x5EFA;&#xFF1F;"></a>&#x5173;&#x7CFB;&#x600E;&#x4E48;&#x5EFA;&#xFF1F;</h2>
<p>&#x548C;&#x77E5;&#x8BC6;&#x70B9;&#x6807;&#x7B7E;&#x4E00;&#x6837;&#xFF0C;&#x5173;&#x7CFB;&#x4E5F;&#x4E0D;&#x662F;&#x7EAF;&#x9760; LLM &#x81EA;&#x52A8;&#x751F;&#x6210;&#x7684;&#xFF1A;</p>
<p><strong>&#x4EBA;&#x5DE5;&#x5B9A;&#x4E49;</strong>&#xFF1A;&#x9886;&#x57DF;&#x4E13;&#x5BB6;&#x6700;&#x6E05;&#x695A;&quot;&#x9000;&#x8FD0;&#x8D39;&#x89C4;&#x5219;&#x4F9D;&#x8D56;&#x9000;&#x6B3E;&#x653F;&#x7B56;&quot;&#x3002;&#x5BF9;&#x4E8E;&#x6838;&#x5FC3;&#x4E1A;&#x52A1;&#x77E5;&#x8BC6;&#xFF08;&#x51E0;&#x5341;&#x4E2A;&#x8282;&#x70B9;&#xFF09;&#xFF0C;&#x4EBA;&#x5DE5;&#x6807;&#x6CE8;&#x5173;&#x7CFB;&#x6700;&#x53EF;&#x9760;&#xFF0C;&#x5DE5;&#x4F5C;&#x91CF;&#x4E5F;&#x4E0D;&#x5927;&#x3002;</p>
<p><strong>&#x534A;&#x81EA;&#x52A8;&#x53D1;&#x73B0;</strong>&#xFF1A;&#x7528; embedding &#x76F8;&#x4F3C;&#x5EA6;&#x7C97;&#x7B5B;&quot;&#x53EF;&#x80FD;&#x6709;&#x5173;&#x7CFB;&quot;&#x7684;&#x8282;&#x70B9;&#x5BF9;&#xFF0C;&#x518D;&#x7531;&#x4EBA;&#x5DE5;/LLM &#x5224;&#x65AD;&#x5177;&#x4F53;&#x5173;&#x7CFB;&#x7C7B;&#x578B;&#x3002;&#x907F;&#x514D; N&#xD7;N &#x66B4;&#x529B;&#x6BD4;&#x8F83;&#x3002;</p>
<p><strong>&#x6587;&#x6863;&#x7ED3;&#x6784;&#x63A8;&#x5BFC;</strong>&#xFF1A;&#x540C;&#x4E00;&#x4EFD; PRD &#x4E2D;&#x76F8;&#x90BB;&#x7AE0;&#x8282;&#x7684;&#x77E5;&#x8BC6;&#x70B9;&#x5927;&#x6982;&#x7387;&#x6709; <code>part_of</code> &#x6216; <code>depends_on</code> &#x5173;&#x7CFB;&#xFF1B;&#x540E;&#x53D1;&#x5E03;&#x7684;&#x6587;&#x6863;&#x5982;&#x679C;&#x8986;&#x76D6;&#x4E86;&#x65E7;&#x6587;&#x6863;&#x7684;&#x540C;&#x4E00;&#x4E3B;&#x9898;&#xFF0C;&#x5927;&#x6982;&#x7387;&#x662F; <code>supersedes</code> &#x5173;&#x7CFB;&#x3002;</p>
<p>&#x5173;&#x7CFB;&#x4E00;&#x65E6;&#x5EFA;&#x597D;&#xFF0C;&#x7EF4;&#x62A4;&#x6210;&#x672C;&#x5176;&#x5B9E;&#x4E0D;&#x9AD8;&#x2014;&#x2014;&#x65B0;&#x6587;&#x6863;&#x5165;&#x5E93;&#x65F6;&#xFF0C;&#x53EA;&#x9700;&#x8981;&#x5BF9;&#x53D7;&#x5F71;&#x54CD;&#x7684;&#x8282;&#x70B9;&#x505A;&#x589E;&#x91CF;&#x68C0;&#x67E5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x91CD;&#x5EFA;&#x6574;&#x5F20;&#x56FE;&#x3002;</p>
<hr>
<h1 id="&#x6570;&#x636E;&#x5B58;&#x5728;&#x54EA;&#xFF1F;"><a href="#&#x6570;&#x636E;&#x5B58;&#x5728;&#x54EA;&#xFF1F;"></a>&#x6570;&#x636E;&#x5B58;&#x5728;&#x54EA;&#xFF1F;</h1>
<pre><code>&#x539F;&#x59CB;&#x6587;&#x6863;&#xFF08;S3 / &#x672C;&#x5730;&#x78C1;&#x76D8;&#xFF09;
  &#x2502;  &#x5F52;&#x6863;&#x7528;&#xFF0C;&#x4E0D;&#x53C2;&#x4E0E;&#x68C0;&#x7D22;
  &#x2502;
  &#x25BC;  &#x5207;&#x5206; + &#x6807;&#x6CE8;
&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#xFF08;Milvus / Pinecone / Chroma / pgvector&#xFF09;
  &#x2502;  &#x6BCF;&#x6761;&#x8BB0;&#x5F55; = chunk + vector + metadata&#xFF08;knowledge_id, status, ...&#xFF09;
  &#x2502;  &#x8FD9;&#x662F;&#x68C0;&#x7D22;&#x7684;&#x6838;&#x5FC3;&#xFF0C;text/vector/&#x6807;&#x7B7E;&#x90FD;&#x5B58;&#x5728;&#x540C;&#x4E00;&#x6761;&#x8BB0;&#x5F55;&#x91CC;
  &#x2502;
  &#x25BC;  knowledge_id &#x5173;&#x8054;&#xFF08;&#x65B9;&#x6848; 5 &#x624D;&#x9700;&#x8981;&#xFF09;
&#x5173;&#x7CFB;&#x578B;&#x6570;&#x636E;&#x5E93;&#xFF08;PostgreSQL / SQLite&#xFF09;
     knowledge_node &#x8868; + knowledge_edge &#x8868;
</code></pre>
<p>&#x6700;&#x7B80;&#x5F62;&#x6001;&#x5C31;&#x662F;<strong>&#x4E00;&#x4E2A;&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;</strong>&#x2014;&#x2014;chunk &#x7684;&#x6587;&#x672C;&#x3001;&#x5411;&#x91CF;&#x3001;&#x6807;&#x7B7E;&#x3001;&#x72B6;&#x6001;&#x90FD;&#x5728;&#x540C;&#x4E00;&#x6761;&#x8BB0;&#x5F55;&#x91CC;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x989D;&#x5916;&#x7684;&#x6587;&#x4EF6;&#x7D22;&#x5F15;&#x3002;&#x5165;&#x5E93;&#x65F6;&#x4E00;&#x6B21;&#x6027;&#x5207;&#x5206;&#x3001;&#x7B97;&#x5411;&#x91CF;&#x3001;&#x6253;&#x6807;&#x7B7E;&#x3001;&#x5199;&#x5165;&#x3002;&#x68C0;&#x7D22;&#x65F6;&#x7528;&#x5411;&#x91CF;&#x76F8;&#x4F3C;&#x5EA6; + metadata filter&#xFF08;<code>status=active</code>&#xFF09;&#x3002;</p>
<hr>
<h1 id="&#x6362;&#x4E2A;&#x89D2;&#x5EA6;&#xFF1A;&#x4E5F;&#x8BB8;&#x4E0D;&#x9700;&#x8981;&quot;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&quot;"><a href="#&#x6362;&#x4E2A;&#x89D2;&#x5EA6;&#xFF1A;&#x4E5F;&#x8BB8;&#x4E0D;&#x9700;&#x8981;&quot;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&quot;"></a>&#x6362;&#x4E2A;&#x89D2;&#x5EA6;&#xFF1A;&#x4E5F;&#x8BB8;&#x4E0D;&#x9700;&#x8981;&quot;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&quot;</h1>
<p>&#x524D;&#x9762;&#x4E94;&#x4E2A;&#x65B9;&#x6848;&#x6709;&#x4E00;&#x4E2A;&#x5171;&#x540C;&#x7684;&#x9690;&#x542B;&#x5047;&#x8BBE;&#xFF1A;<strong>&#x5FC5;&#x987B;&#x5728; chunk &#x5C42;&#x9762;&#x89E3;&#x51B3;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&#x95EE;&#x9898;</strong>&#x3002;&#x4F46;&#x771F;&#x7684;&#x5FC5;&#x987B;&#x5417;&#xFF1F;</p>
<h2 id="&#x601D;&#x8DEF; A&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x76F4;&#x63A5;&#x7ED5;&#x8FC7; chunk"><a href="#&#x601D;&#x8DEF; A&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x76F4;&#x63A5;&#x7ED5;&#x8FC7; chunk"></a>&#x601D;&#x8DEF; A&#xFF1A;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x76F4;&#x63A5;&#x7ED5;&#x8FC7; chunk</h2>
<p>&#x73B0;&#x5728;&#x4E3B;&#x6D41;&#x6A21;&#x578B;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;&#x5DF2;&#x7ECF;&#x5230;&#x4E86; 128K-1M token&#x3002;&#x5982;&#x679C;&#x4F60;&#x7684;&#x77E5;&#x8BC6;&#x5E93;&#x4E0D;&#x7B97;&#x5927;&#xFF08;&#x6BD4;&#x5982; 100 &#x4EFD; PRD&#xFF0C;&#x603B;&#x91CF;&#x51E0;&#x5341;&#x4E07;&#x5B57;&#xFF09;&#xFF0C;&#x4E00;&#x79CD;&#x66B4;&#x529B;&#x4F46;&#x6709;&#x6548;&#x7684;&#x505A;&#x6CD5;&#x662F;&#xFF1A;</p>
<pre><code>&#x7528;&#x6237;&#x63D0;&#x95EE; &#x2192; &#x628A;&#x6240;&#x6709;&#x76F8;&#x5173;&#x6587;&#x6863;&#xFF08;&#x4E0D;&#x662F; chunk&#xFF09;&#x6574;&#x4EFD;&#x585E;&#x8FDB;&#x4E0A;&#x4E0B;&#x6587; &#x2192; LLM &#x81EA;&#x5DF1;&#x5224;&#x65AD;&#x65B0;&#x65E7;
</code></pre>
<p>&#x6839;&#x672C;&#x4E0D;&#x5207; chunk&#xFF0C;&#x4E5F;&#x5C31;&#x6CA1;&#x6709;&quot;&#x8DE8;&#x6587;&#x6863;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&quot;&#x7684;&#x95EE;&#x9898;&#x3002;&#x6A21;&#x578B;&#x80FD;&#x770B;&#x5230;&#x5B8C;&#x6574;&#x7684;&#x6587;&#x6863;&#x4E0A;&#x4E0B;&#x6587;&#x548C;&#x65F6;&#x95F4;&#x4FE1;&#x606F;&#xFF0C;&#x81EA;&#x5DF1;&#x5C31;&#x80FD;&#x5224;&#x65AD;&#x54EA;&#x4E2A;&#x662F;&#x6700;&#x65B0;&#x7684;&#x3002;</p>
<p><strong>&#x5C40;&#x9650;</strong>&#xFF1A;&#x6587;&#x6863;&#x91CF;&#x592A;&#x5927;&#x65F6;&#x653E;&#x4E0D;&#x4E0B; / token &#x6210;&#x672C;&#x9AD8; / &#x4E0D;&#x9002;&#x5408;&#x5B9E;&#x65F6;&#x68C0;&#x7D22;&#x573A;&#x666F;&#x3002;&#x4F46;&#x5BF9;&#x5F88;&#x591A;&#x5185;&#x90E8;&#x77E5;&#x8BC6;&#x5E93;&#x6765;&#x8BF4;&#xFF0C;&#x8FD9;&#x6BD4;&#x5EFA;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x7B80;&#x5355;&#x5F97;&#x591A;&#x3002;</p>
<p>&#x53C2;&#x8003;&#xFF1A;<a href="../ai-LLM/NTU%20&amp;%20SMU%20-%20Long%20Context%20vs%20RAG%20for%20LLMs.md">NTU &amp; SMU - Long Context vs RAG for LLMs</a> &#x7684;&#x7ED3;&#x8BBA;&#x662F;&#x2014;&#x2014;&#x5728;&#x77E5;&#x8BC6;&#x5E93;&#x89C4;&#x6A21;&#x6709;&#x9650;&#x7684;&#x573A;&#x666F;&#x4E0B;&#xFF0C;&#x957F;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&#x51C6;&#x786E;&#x7387;&#x751A;&#x81F3;&#x4F18;&#x4E8E; RAG&#x3002;</p>
<h2 id="&#x601D;&#x8DEF; B&#xFF1A;&#x6587;&#x6863;&#x7EA7;&#x7248;&#x672C;&#x7BA1;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F; chunk &#x7EA7;"><a href="#&#x601D;&#x8DEF; B&#xFF1A;&#x6587;&#x6863;&#x7EA7;&#x7248;&#x672C;&#x7BA1;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F; chunk &#x7EA7;"></a>&#x601D;&#x8DEF; B&#xFF1A;&#x6587;&#x6863;&#x7EA7;&#x7248;&#x672C;&#x7BA1;&#x7406;&#xFF0C;&#x800C;&#x4E0D;&#x662F; chunk &#x7EA7;</h2>
<p>&#x5F88;&#x591A;&#x65F6;&#x5019;&quot;&#x8DE8;&#x6587;&#x6863;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&quot;&#x7684;&#x6839;&#x56E0;&#x662F;&#xFF1A;<strong>&#x4E0D;&#x540C;&#x6587;&#x6863;&#x8986;&#x76D6;&#x4E86;&#x91CD;&#x53E0;&#x7684;&#x4E3B;&#x9898;&#xFF0C;&#x4F46;&#x6CA1;&#x6709;&#x7EDF;&#x4E00;&#x7684;&#x7248;&#x672C;&#x7BA1;&#x7406;</strong>&#x3002;</p>
<p>&#x5982;&#x679C;&#x4ECE;&#x6E90;&#x5934;&#x89E3;&#x51B3;&#x2014;&#x2014;&#x6BCF;&#x4E2A;&#x4E1A;&#x52A1;&#x4E3B;&#x9898;&#x53EA;&#x7EF4;&#x62A4;&#x4E00;&#x4EFD;&#x6743;&#x5A01;&#x6587;&#x6863;&#xFF08;single source of truth&#xFF09;&#xFF0C;&#x65B0; PRD &#x53D1;&#x5E03;&#x65F6;&#x540C;&#x6B65;&#x66F4;&#x65B0;&#x5BF9;&#x5E94;&#x4E3B;&#x9898;&#x7684;&#x6743;&#x5A01;&#x6587;&#x6863;&#xFF0C;&#x7136;&#x540E;&#x91CD;&#x65B0;&#x5165;&#x5E93;&#x2014;&#x2014;&#x5C31;&#x4E0D;&#x5B58;&#x5728;&#x8DE8;&#x6587;&#x6863;&#x51B2;&#x7A81;&#x4E86;&#x3002;</p>
<pre><code>&#x4E1A;&#x52A1;&#x4E3B;&#x9898; &#x2500;&#x2500;&#x2192; &#x6743;&#x5A01;&#x6587;&#x6863;&#xFF08;&#x552F;&#x4E00;&#xFF09;&#x2500;&#x2500;&#x2192; chunk &#x2500;&#x2500;&#x2192; &#x5411;&#x91CF;&#x5E93;
               &#x2502;
            &#x66F4;&#x65B0;&#x65F6;&#xFF1A;&#x6574;&#x4EFD;&#x6587;&#x6863;&#x91CD;&#x65B0;&#x5207;&#x5206;&#x5165;&#x5E93;&#xFF0C;&#x65E7; chunk &#x5168;&#x90E8;&#x5220;&#x9664;
</code></pre>
<p>&#x8FD9;&#x4E0D;&#x662F; RAG &#x5C42;&#x9762;&#x7684;&#x65B9;&#x6848;&#xFF0C;&#x800C;&#x662F;<strong>&#x6587;&#x6863;&#x6CBB;&#x7406;</strong>&#x5C42;&#x9762;&#x7684;&#x65B9;&#x6848;&#x3002;&#x542C;&#x8D77;&#x6765;&quot;&#x4E0D;&#x6280;&#x672F;&quot;&#xFF0C;&#x4F46;&#x5BF9;&#x4E8E;&#x6709;&#x6587;&#x6863;&#x7BA1;&#x7406;&#x6D41;&#x7A0B;&#x7684;&#x56E2;&#x961F;&#xFF08;Confluence&#x3001;Notion&#x3001;&#x98DE;&#x4E66;&#x6587;&#x6863;&#xFF09;&#xFF0C;&#x8FD9;&#x5F80;&#x5F80;&#x662F;&#x6295;&#x5165;&#x4EA7;&#x51FA;&#x6BD4;&#x6700;&#x9AD8;&#x7684;&#x505A;&#x6CD5;&#x3002;</p>
<h2 id="&#x601D;&#x8DEF; C&#xFF1A;Agentic RAG&#x2014;&#x2014;&#x8BA9; Agent &#x52A8;&#x6001;&#x5904;&#x7406;&#x51B2;&#x7A81;"><a href="#&#x601D;&#x8DEF; C&#xFF1A;Agentic RAG&#x2014;&#x2014;&#x8BA9; Agent &#x52A8;&#x6001;&#x5904;&#x7406;&#x51B2;&#x7A81;"></a>&#x601D;&#x8DEF; C&#xFF1A;Agentic RAG&#x2014;&#x2014;&#x8BA9; Agent &#x52A8;&#x6001;&#x5904;&#x7406;&#x51B2;&#x7A81;</h2>
<p>&#x4E0D;&#x5728;&#x79BB;&#x7EBF;&#x9636;&#x6BB5;&#x9884;&#x5904;&#x7406;&#x51B2;&#x7A81;&#xFF0C;&#x800C;&#x662F;&#x5728;&#x8FD0;&#x884C;&#x65F6;&#x8BA9; Agent &#x81EA;&#x5DF1;&#x5224;&#x65AD;&#xFF1A;</p>
<pre><code>&#x7528;&#x6237;&#x63D0;&#x95EE;
  &#x2502;
  &#x25BC;
Agent &#x7B2C;&#x4E00;&#x8F6E;&#x68C0;&#x7D22; &#x2192; &#x53EC;&#x56DE; chunk A (&#x65E7;) &#x548C; chunk B (&#x65B0;)
  &#x2502;
  &#x25BC;
Agent &#x53D1;&#x73B0;&#x77DB;&#x76FE; &#x2192; &#x4E3B;&#x52A8;&#x8FFD;&#x52A0;&#x68C0;&#x7D22;&#xFF0C;&#x67E5;&#x627E;&#x66F4;&#x591A;&#x4E0A;&#x4E0B;&#x6587;
  &#x2502;
  &#x25BC;
Agent &#x5BF9;&#x6BD4;&#x6587;&#x6863;&#x65F6;&#x95F4;&#x3001;&#x6765;&#x6E90;&#x3001;&#x5185;&#x5BB9; &#x2192; &#x5224;&#x65AD; B &#x4E3A;&#x6700;&#x65B0;
  &#x2502;
  &#x25BC;
&#x57FA;&#x4E8E; B &#x751F;&#x6210;&#x56DE;&#x7B54;&#xFF0C;&#x5E76;&#x6CE8;&#x660E;&quot;&#x6B64;&#x4FE1;&#x606F;&#x6765;&#x81EA; PRD_C (2024-03)&quot;
</code></pre>
<p>&#x548C;&#x65B9;&#x6848; 2&#xFF08;LLM &#x51B2;&#x7A81;&#x6D88;&#x89E3;&#xFF09;&#x7684;&#x533A;&#x522B;&#x662F;&#xFF1A;&#x65B9;&#x6848; 2 &#x9760; prompt &#x63D0;&#x793A;&#x88AB;&#x52A8;&#x5904;&#x7406;&#xFF0C;Agent &#x65B9;&#x6848;&#x662F;<strong>&#x4E3B;&#x52A8;&#x53D1;&#x73B0;&#x51B2;&#x7A81;&#x3001;&#x4E3B;&#x52A8;&#x8FFD;&#x52A0;&#x68C0;&#x7D22;&#x3001;&#x4E3B;&#x52A8;&#x9A8C;&#x8BC1;</strong>&#x3002;</p>
<h2 id="&#x601D;&#x8DEF; D&#xFF1A;Contextual Retrieval&#x2014;&#x2014;&#x8BA9;&#x6BCF;&#x4E2A; chunk &#x81EA;&#x5E26;&#x4E0A;&#x4E0B;&#x6587;"><a href="#&#x601D;&#x8DEF; D&#xFF1A;Contextual Retrieval&#x2014;&#x2014;&#x8BA9;&#x6BCF;&#x4E2A; chunk &#x81EA;&#x5E26;&#x4E0A;&#x4E0B;&#x6587;"></a>&#x601D;&#x8DEF; D&#xFF1A;Contextual Retrieval&#x2014;&#x2014;&#x8BA9;&#x6BCF;&#x4E2A; chunk &#x81EA;&#x5E26;&#x4E0A;&#x4E0B;&#x6587;</h2>
<p>Anthropic &#x63D0;&#x51FA;&#x7684; <a href="../ai-LLM/Anthropic%20-%20Contextual%20Retrieval.md">Contextual Retrieval</a> &#x65B9;&#x6848;&#xFF1A;&#x5728; chunk &#x5165;&#x5E93;&#x524D;&#xFF0C;&#x7528; LLM &#x7ED9;&#x6BCF;&#x4E2A; chunk &#x8865;&#x5145;&#x5B83;&#x6240;&#x5728;&#x6587;&#x6863;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x6458;&#x8981;&#x3002;</p>
<pre><code>&#x539F;&#x59CB; chunk&#xFF1A;
&quot;&#x9000;&#x6B3E;&#x7A97;&#x53E3;&#x5EF6;&#x957F;&#x81F3;&#x7B7E;&#x6536;&#x540E; 15 &#x5929;&quot;

&#x52A0;&#x4E0A;&#x6587;&#x6863;&#x4E0A;&#x4E0B;&#x6587;&#x540E;&#xFF1A;
&quot;[&#x6765;&#x81EA; PRD_B, 2023-06, &#x552E;&#x540E;&#x653F;&#x7B56;&#x66F4;&#x65B0;] &#x9000;&#x6B3E;&#x7A97;&#x53E3;&#x5EF6;&#x957F;&#x81F3;&#x7B7E;&#x6536;&#x540E; 15 &#x5929;&#x3002;
&#x6B64;&#x89C4;&#x5219;&#x66FF;&#x4EE3;&#x4E86; PRD_A &#x4E2D;&#x7684; 7 &#x5929;&#x9000;&#x6B3E;&#x653F;&#x7B56;&#x3002;&quot;
</code></pre>
<p>&#x8FD9;&#x6837;&#x5373;&#x4F7F;&#x65B0;&#x65E7; chunk &#x540C;&#x65F6;&#x88AB;&#x53EC;&#x56DE;&#xFF0C;chunk &#x81EA;&#x8EAB;&#x5C31;&#x643A;&#x5E26;&#x4E86;&quot;&#x6211;&#x662F;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x7684;&#x3001;&#x66FF;&#x4EE3;&#x4E86;&#x4EC0;&#x4E48;&quot;&#x7684;&#x4FE1;&#x606F;&#xFF0C;LLM &#x80FD;&#x66F4;&#x51C6;&#x786E;&#x5730;&#x5224;&#x65AD;&#x3002;</p>
<hr>
<h1 id="&#x5173;&#x952E;&#x7ED3;&#x8BBA;"><a href="#&#x5173;&#x952E;&#x7ED3;&#x8BBA;"></a>&#x5173;&#x952E;&#x7ED3;&#x8BBA;</h1>
<p>&#x4EC5;&#x9760; RAG chunk <strong>&#x65E0;&#x6CD5;&#x5929;&#x7136;&#x89E3;&#x51B3;&#x8DE8;&#x6587;&#x6863;&#x77E5;&#x8BC6;&#x66F4;&#x65B0;&#x95EE;&#x9898;</strong>&#xFF0C;&#x56E0;&#x4E3A;&#xFF1A;</p>
<blockquote>
<p>&#x5411;&#x91CF;&#x6570;&#x636E;&#x5E93;&#x4E0D;&#x77E5;&#x9053;&#x201C;&#x77E5;&#x8BC6;&#x70B9;&#x662F;&#x4EC0;&#x4E48;&#x201D;&#xFF0C;&#x66F4;&#x4E0D;&#x77E5;&#x9053;&#x77E5;&#x8BC6;&#x70B9;&#x4E4B;&#x95F4;&#x7684;&#x5173;&#x7CFB;&#x3002;</p>
</blockquote>
<p>&#x65B9;&#x6848;&#x9009;&#x62E9;&#x53D6;&#x51B3;&#x4E8E;&#x573A;&#x666F;&#xFF1A;</p>
<table>
<thead>
<tr>
<th>&#x601D;&#x8DEF;</th>
<th>&#x6838;&#x5FC3;&#x505A;&#x6CD5;</th>
<th>&#x9002;&#x5408;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x957F;&#x4E0A;&#x4E0B;&#x6587;</td>
<td>&#x4E0D;&#x5207; chunk&#xFF0C;&#x6574;&#x4EFD;&#x6587;&#x6863;&#x585E;&#x4E0A;&#x4E0B;&#x6587;</td>
<td>&#x77E5;&#x8BC6;&#x5E93;&#x5C0F;&#xFF08;&lt; &#x767E;&#x4E07;&#x5B57;&#xFF09;&#x3001;&#x5BF9;&#x5EF6;&#x8FDF;&#x4E0D;&#x654F;&#x611F;</td>
</tr>
<tr>
<td>&#x6587;&#x6863;&#x6CBB;&#x7406;</td>
<td>&#x6BCF;&#x4E2A;&#x4E3B;&#x9898;&#x7EF4;&#x62A4;&#x552F;&#x4E00;&#x6743;&#x5A01;&#x6587;&#x6863;</td>
<td>&#x6709;&#x6587;&#x6863;&#x7BA1;&#x7406;&#x6D41;&#x7A0B;&#x7684;&#x56E2;&#x961F;</td>
</tr>
<tr>
<td>&#x77E5;&#x8BC6;&#x70B9; ID</td>
<td>chunk &#x6253;&#x6807;&#x7B7E; + &#x7248;&#x672C;&#x7BA1;&#x7406;</td>
<td>&#x77E5;&#x8BC6;&#x91CF;&#x5927;&#x3001;&#x9700;&#x8981;&#x7CBE;&#x51C6;&#x63A7;&#x5236;</td>
</tr>
<tr>
<td>&#x77E5;&#x8BC6;&#x5173;&#x7CFB;&#x5C42;</td>
<td>&#x6807;&#x7B7E;&#x4E4B;&#x95F4;&#x52A0;&#x5173;&#x7CFB;&#x8FB9;</td>
<td>&#x77E5;&#x8BC6;&#x70B9;&#x6709;&#x4F9D;&#x8D56;&#x3001;&#x9700;&#x8981;&#x7EA7;&#x8054;&#x66F4;&#x65B0;</td>
</tr>
<tr>
<td>Contextual Retrieval</td>
<td>chunk &#x81EA;&#x5E26;&#x4E0A;&#x4E0B;&#x6587;</td>
<td>&#x6539;&#x9020;&#x6210;&#x672C;&#x4F4E;&#x3001;&#x6E10;&#x8FDB;&#x5F0F;&#x4F18;&#x5316;</td>
</tr>
<tr>
<td>Agentic RAG</td>
<td>Agent &#x8FD0;&#x884C;&#x65F6;&#x52A8;&#x6001;&#x5224;&#x65AD;</td>
<td>&#x6709; Agent &#x6846;&#x67B6;&#x3001;&#x80FD;&#x63A5;&#x53D7;&#x591A;&#x8F6E;&#x68C0;&#x7D22;&#x5EF6;&#x8FDF;</td>
</tr>
<tr>
<td>&#x65F6;&#x95F4;&#x4F18;&#x5148;&#x7EA7; + LLM &#x515C;&#x5E95;</td>
<td>&#x6539;&#x6392;&#x5E8F; + prompt &#x63D0;&#x793A;</td>
<td>&#x5FEB;&#x901F;&#x4E0A;&#x7EBF;&#x3001;&#x515C;&#x5E95;&#x65B9;&#x6848;</td>
</tr>
</tbody>
</table>
<p><strong>&#x6CA1;&#x6709;&#x94F6;&#x5F39;&#x3002;</strong> &#x524D;&#x9762;&#x4E94;&#x4E2A;&#x65B9;&#x6848;&#x63CF;&#x8FF0;&#x7684;&#x201C;&#x77E5;&#x8BC6;&#x56FE;&#x8C31;&#x5C42;&#x201D;&#x662F;&#x4E00;&#x79CD;&#x53EF;&#x884C;&#x8DEF;&#x5F84;&#xFF0C;&#x4F46;&#x4E0D;&#x662F;&#x552F;&#x4E00;&#x8DEF;&#x5F84;&#xFF0C;&#x751A;&#x81F3;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x6700;&#x4F18;&#x8DEF;&#x5F84;&#x3002;&#x5BF9;&#x4E8E;&#x5927;&#x591A;&#x6570;&#x56E2;&#x961F;&#xFF0C;<strong>&#x6587;&#x6863;&#x6CBB;&#x7406; + &#x77E5;&#x8BC6;&#x70B9; ID + LLM &#x515C;&#x5E95;</strong>&#x7684;&#x7EC4;&#x5408;&#x5C31;&#x8DB3;&#x591F;&#x4E86;&#x3002;&#x53EA;&#x6709;&#x77E5;&#x8BC6;&#x5E93;&#x89C4;&#x6A21;&#x5927;&#x3001;&#x77E5;&#x8BC6;&#x70B9;&#x4E4B;&#x95F4;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x590D;&#x6742;&#x3001;&#x4E14;&#x66F4;&#x65B0;&#x9891;&#x7E41;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x624D;&#x503C;&#x5F97;&#x6295;&#x5165;&#x5173;&#x7CFB;&#x5EFA;&#x6A21;&#x3002;</p>
<p>&#x77E5;&#x8BC6;&#x7BA1;&#x7406;&#x4ECE;&#x6765;&#x90FD;&#x662F;<strong>&#x4EBA; + &#x7CFB;&#x7EDF;</strong>&#x534F;&#x4F5C;&#x7684;&#x4E8B;&#x3002;LLM &#x53EF;&#x4EE5;&#x8F85;&#x52A9;&#x6807;&#x6CE8;&#x548C;&#x5BA1;&#x67E5;&#xFF0C;&#x4F46;&#x77E5;&#x8BC6;&#x4F53;&#x7CFB;&#x7684;&#x5B9A;&#x4E49;&#x3001;&#x5173;&#x952E;&#x5173;&#x7CFB;&#x7684;&#x786E;&#x8BA4;&#x3001;&#x51B2;&#x7A81;&#x7684;&#x6700;&#x7EC8;&#x88C1;&#x5B9A;&#xFF0C;&#x4ECD;&#x7136;&#x9700;&#x8981;&#x61C2;&#x4E1A;&#x52A1;&#x7684;&#x4EBA;&#x6765;&#x628A;&#x5173;&#x3002;</p>
`,E=[{level:1,title:"问题有多难？一个例子",children:[]},{level:1,title:"解决方案总览",children:[]},{level:1,title:"方案 1：时间 / 文档优先级",children:[]},{level:1,title:"方案 2：LLM 冲突消解",children:[]},{level:1,title:"方案 3：语义去重",children:[]},{level:1,title:"方案 4：知识点 ID（Knowledge Unit）",children:[{level:2,title:"知识点标签怎么来？",children:[]},{level:2,title:"同一知识点多个版本怎么选 active？",children:[]}]},{level:1,title:"方案 5：知识图谱层",children:[{level:2,title:"关系边解决什么问题？",children:[]},{level:2,title:"关系怎么建？",children:[]}]},{level:1,title:"数据存在哪？",children:[]},{level:1,title:'换个角度：也许不需要"知识图谱"',children:[{level:2,title:"思路 A：长上下文直接绕过 chunk",children:[]},{level:2,title:"思路 B：文档级版本管理，而不是 chunk 级",children:[]},{level:2,title:"思路 C：Agentic RAG——让 Agent 动态处理冲突",children:[]},{level:2,title:"思路 D：Contextual Retrieval——让每个 chunk 自带上下文",children:[]}]},{level:1,title:"关键结论",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
