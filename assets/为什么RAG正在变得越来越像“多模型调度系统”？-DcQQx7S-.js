const x={},E=`<p><a href="https://towardsdatascience.com/dispatching-the-parsed-rag-question-chunk-strategy-model-tier-activations-audit/">&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;</a>&#x8BB2;&#x7684;&#x662F;&#xFF1A;<strong>RAG &#x91CC;&#x7528;&#x6237;&#x95EE;&#x9898;&#x4E0D;&#x8981;&#x76F4;&#x63A5;&#x4E22;&#x7ED9;&#x68C0;&#x7D22;&#x548C;&#x751F;&#x6210;&#xFF0C;&#x800C;&#x8981;&#x5148;&#x88AB;&#x89E3;&#x6790;&#x6210;&#x4E00;&#x5F20;&#x201C;&#x6267;&#x884C;&#x8BA1;&#x5212;&#x8868;&#x201D;&#xFF0C;&#x518D;&#x7531; dispatcher &#x51B3;&#x5B9A;&#x540E;&#x9762;&#x7684;&#x68C0;&#x7D22;&#x65B9;&#x5F0F;&#x3001;chunk &#x5904;&#x7406;&#x65B9;&#x5F0F;&#x3001;&#x6A21;&#x578B;&#x6863;&#x4F4D;&#x548C;&#x5BA1;&#x8BA1;&#x8BB0;&#x5F55;&#x3002;</strong></p>
<p>&#x7528;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x4E32;&#x8D77;&#x6765;&#xFF1A;</p>
<p>&#x7528;&#x6237;&#x4E0A;&#x4F20;&#x4E00;&#x4EFD;&#x4FDD;&#x9669;&#x5408;&#x540C;&#xFF0C;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>What is the annual premium and what are the main exclusions?<br>
&#x5E74;&#x4FDD;&#x8D39;&#x662F;&#x591A;&#x5C11;&#xFF1F;&#x4E3B;&#x8981;&#x9664;&#x5916;&#x8D23;&#x4EFB;&#x6709;&#x54EA;&#x4E9B;&#xFF1F;</p>
</blockquote>
<p>&#x666E;&#x901A; RAG &#x53EF;&#x80FD;&#x4F1A;&#x8FD9;&#x4E48;&#x505A;&#xFF1A;<br>
&#x628A;&#x8FD9;&#x53E5;&#x8BDD; embedding &#x4E00;&#x4E0B;&#xFF0C;&#x627E; top-k chunk&#xFF0C;&#x7136;&#x540E;&#x628A; chunk &#x548C;&#x95EE;&#x9898;&#x4E00;&#x8D77;&#x585E;&#x7ED9;&#x5927;&#x6A21;&#x578B;&#x3002;</p>
<p>&#x6587;&#x7AE0;&#x8BA4;&#x4E3A;&#x8FD9;&#x592A;&#x7C97;&#x4E86;&#x3002;&#x56E0;&#x4E3A;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x5176;&#x5B9E;&#x5305;&#x542B;&#x4E24;&#x79CD;&#x5B8C;&#x5168;&#x4E0D;&#x540C;&#x7684;&#x4EFB;&#x52A1;&#xFF1A;</p>
<ol>
<li>
<p><strong>annual premium</strong> &#x662F;&#x4E00;&#x4E2A;&#x5355;&#x70B9;&#x4E8B;&#x5B9E;&#xFF0C;&#x7B54;&#x6848;&#x901A;&#x5E38;&#x662F;&#x91D1;&#x989D;&#xFF0C;&#x6BD4;&#x5982; <code>EUR 12,000</code>&#x3002;<br>
&#x8FD9;&#x79CD;&#x95EE;&#x9898;&#x5E94;&#x8BE5;&#x627E;&#x5F88;&#x5C40;&#x90E8;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x53EF;&#x80FD;&#x4E00;&#x884C;&#x5C31;&#x591F;&#xFF1B;&#x751F;&#x6210;&#x65F6;&#x53EF;&#x4EE5;&#x6309; chunk &#x987A;&#x5E8F;&#x9010;&#x4E2A;&#x95EE;&#x6A21;&#x578B;&#xFF0C;&#x627E;&#x5230;&#x5B8C;&#x6574;&#x7B54;&#x6848;&#x5C31;&#x505C;&#x3002;</p>
</li>
<li>
<p><strong>main exclusions</strong> &#x662F;&#x4E00;&#x4E2A;&#x5217;&#x8868;/&#x603B;&#x7ED3;&#x95EE;&#x9898;&#xFF0C;&#x7B54;&#x6848;&#x53EF;&#x80FD;&#x6563;&#x843D;&#x5728;&#x591A;&#x4E2A;&#x7AE0;&#x8282;&#x3002;<br>
&#x8FD9;&#x79CD;&#x95EE;&#x9898;&#x9700;&#x8981;&#x66F4;&#x5927;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x6BD4;&#x5982; section &#x6216; chapter&#xFF1B;&#x751F;&#x6210;&#x65F6;&#x6700;&#x597D;&#x628A;&#x591A;&#x4E2A;&#x76F8;&#x5173; chunk &#x5408;&#x5E76;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x7EFC;&#x5408;&#x56DE;&#x7B54;&#x3002;</p>
</li>
</ol>
<p>&#x6240;&#x4EE5;&#x6587;&#x7AE0;&#x4E3B;&#x5F20;&#x5148;&#x628A;&#x95EE;&#x9898;&#x89E3;&#x6790;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x5BF9;&#x8C61;&#xFF0C;&#x5927;&#x6982;&#x50CF;&#x8FD9;&#x6837;&#xFF1A;</p>
<pre><code class="language-text">answer_shape:
  premium -&gt; single
  exclusions -&gt; listing

answer_type:
  premium -&gt; amount
  exclusions -&gt; text

chunk_strategy:
  premium -&gt; sequential
  exclusions -&gt; combined

answer_context:
  premium -&gt; line
  exclusions -&gt; chapter

suggested_model:
  premium -&gt; &#x5C0F;&#x6A21;&#x578B;&#x5373;&#x53EF;
  exclusions -&gt; &#x66F4;&#x5F3A;&#x6A21;&#x578B;

decomposition:
  independent&#xFF0C;&#x62C6;&#x6210;&#x4E24;&#x4E2A;&#x5B50;&#x95EE;&#x9898;
</code></pre>
<p>&#x7136;&#x540E; dispatcher &#x6839;&#x636E;&#x8FD9;&#x4E2A;&#x89E3;&#x6790;&#x7ED3;&#x679C;&#xFF0C;&#x628A;&#x4E24;&#x4E2A;&#x5B50;&#x95EE;&#x9898;&#x9001;&#x5230;&#x4E0D;&#x540C;&#x6267;&#x884C;&#x8DEF;&#x5F84;&#x3002;</p>
<p>&#x5BF9;&#x4E8E;&#x201C;&#x5E74;&#x4FDD;&#x8D39;&#x662F;&#x591A;&#x5C11;&#x201D;&#xFF0C;&#x7CFB;&#x7EDF;&#x7528;&#x5173;&#x952E;&#x8BCD;&#x3001;&#x91D1;&#x989D; regex&#x3001;&#x4E13;&#x5BB6;&#x8BCD;&#x5178;&#xFF0C;&#x6BD4;&#x5982; <code>premium / cotisation / prime</code>&#xFF0C;&#x53BB;&#x627E;&#x6700;&#x53EF;&#x80FD;&#x5305;&#x542B;&#x91D1;&#x989D;&#x7684;&#x5C40;&#x90E8;&#x7247;&#x6BB5;&#xFF1B;&#x5982;&#x679C; top-1 chunk &#x5DF2;&#x7ECF;&#x7B54;&#x51FA;&#x6765;&#xFF0C;&#x5C31;&#x4E0D;&#x518D;&#x70E7; token &#x770B;&#x540E;&#x9762;&#x7684; chunk&#x3002;</p>
<p>&#x5BF9;&#x4E8E;&#x201C;&#x4E3B;&#x8981;&#x9664;&#x5916;&#x8D23;&#x4EFB;&#x6709;&#x54EA;&#x4E9B;&#x201D;&#xFF0C;&#x7CFB;&#x7EDF;&#x77E5;&#x9053;&#x8FD9;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5355;&#x503C;&#x62BD;&#x53D6;&#xFF0C;&#x800C;&#x662F;&#x5217;&#x8868;&#x578B;&#x3001;&#x8DE8;&#x6BB5;&#x843D;&#x578B;&#x95EE;&#x9898;&#xFF0C;&#x4E8E;&#x662F;&#x4F1A;&#x6269;&#x5927;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x628A;&#x591A;&#x4E2A; chunk &#x5408;&#x5728;&#x4E00;&#x8D77;&#xFF0C;&#x8BA9;&#x6A21;&#x578B;&#x603B;&#x7ED3;&#x3002;</p>
<p>&#x6587;&#x7AE0;&#x8FD8;&#x5F3A;&#x8C03;&#x4E00;&#x4E2A;&#x70B9;&#xFF1A;<strong>&#x89E3;&#x6790;&#x95EE;&#x9898;&#x4E0D;&#x80FD;&#x53EA;&#x770B;&#x95EE;&#x9898;&#x672C;&#x8EAB;&#xFF0C;&#x8FD8;&#x8981;&#x770B;&#x6587;&#x6863; profile&#x3002;</strong></p>
<p>&#x6BD4;&#x5982;&#x7528;&#x6237;&#x95EE;&#xFF1A;</p>
<blockquote>
<p>What does it say on page 3?</p>
</blockquote>
<p>&#x5982;&#x679C;&#x6587;&#x6863;&#x662F; PDF&#xFF0C;page 3 &#x662F;&#x7A33;&#x5B9A;&#x6982;&#x5FF5;&#x3002;<br>
&#x4F46;&#x5982;&#x679C;&#x6587;&#x6863;&#x662F; Word&#xFF0C;page 3 &#x53D6;&#x51B3;&#x4E8E;&#x5B57;&#x4F53;&#x3001;&#x5C4F;&#x5E55;&#x5BBD;&#x5EA6;&#x3001;&#x6253;&#x5370;&#x8BBE;&#x7F6E;&#xFF0C;&#x6839;&#x672C;&#x4E0D;&#x662F;&#x7A33;&#x5B9A;&#x7ED3;&#x6784;&#x3002;</p>
<p>&#x6240;&#x4EE5; dispatcher &#x8981;&#x6839;&#x636E;&#x6587;&#x6863; profile &#x8C03;&#x6574; activations&#xFF1A;</p>
<pre><code class="language-text">PDF:
  extract_page_numbers = true

DOCX:
  extract_page_numbers = false
  parsing_notes = &quot;page numbers are approximate&quot;
</code></pre>
<p>&#x8FD9;&#x6837;&#x7CFB;&#x7EDF;&#x4E0D;&#x4F1A;&#x5F88;&#x81EA;&#x4FE1;&#x5730;&#x7ED9;&#x51FA;&#x4E00;&#x4E2A;&#x5047;&#x7684;&#x201C;&#x7B2C; 3 &#x9875;&#x7B54;&#x6848;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x5728;&#x5BA1;&#x8BA1;&#x4FE1;&#x606F;&#x91CC;&#x8BB0;&#x5F55;&#xFF1A;&#x8FD9;&#x4E2A;&#x6587;&#x6863;&#x683C;&#x5F0F;&#x4E0D;&#x652F;&#x6301;&#x53EF;&#x9760;&#x9875;&#x7801;&#x5B9A;&#x4F4D;&#x3002;</p>
<p>&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x771F;&#x6B63;&#x60F3;&#x8868;&#x8FBE;&#x7684;&#x4E0D;&#x662F;&#x201C;&#x518D;&#x52A0;&#x4E00;&#x4E2A;&#x590D;&#x6742;&#x6A21;&#x5757;&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<p><strong>RAG &#x7684;&#x8D28;&#x91CF;&#x95EE;&#x9898;&#xFF0C;&#x5F88;&#x591A;&#x4E0D;&#x662F; embedding &#x4E0D;&#x591F;&#x5F3A;&#x3001;chunk size &#x6CA1;&#x8C03;&#x597D;&#xFF0C;&#x800C;&#x662F;&#x95EE;&#x9898;&#x6CA1;&#x6709;&#x88AB;&#x6B63;&#x786E;&#x8DEF;&#x7531;&#x3002;</strong></p>
<p>&#x6838;&#x5FC3;&#x542F;&#x53D1;&#x53EF;&#x4EE5;&#x6982;&#x62EC;&#x6210;&#x4E09;&#x53E5;&#x8BDD;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x7528;&#x6237;&#x95EE;&#x9898;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x4EFD;&#x6267;&#x884C;&#x8BA1;&#x5212;&#x3002;</strong><br>
&#x5B83;&#x5E94;&#x8BE5;&#x88AB;&#x89E3;&#x6790;&#x6210; answer type&#x3001;answer shape&#x3001;scope&#x3001;decomposition&#x3001;chunk strategy&#x3001;model choice&#x3001;activation flags &#x7B49;&#x7ED3;&#x6784;&#x5316;&#x5B57;&#x6BB5;&#x3002;</p>
</li>
<li>
<p><strong>&#x4E0D;&#x540C;&#x95EE;&#x9898;&#x5E94;&#x8BE5;&#x8D70;&#x4E0D;&#x540C; RAG &#x8DEF;&#x5F84;&#x3002;</strong><br>
&#x5355;&#x70B9;&#x91D1;&#x989D;&#x3001;&#x65E5;&#x671F;&#x3001;IBAN &#x8FD9;&#x7C7B;&#x95EE;&#x9898;&#x9002;&#x5408;&#x5C0F;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x987A;&#x5E8F; chunk&#x3001;&#x4FBF;&#x5B9C;&#x6A21;&#x578B;&#xFF1B;&#x5217;&#x8868;&#x3001;&#x5BF9;&#x6BD4;&#x3001;&#x603B;&#x7ED3;&#x3001;&#x6CD5;&#x5F8B;&#x6761;&#x6B3E;&#x89E3;&#x91CA;&#x5219;&#x9700;&#x8981;&#x5927;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x5408;&#x5E76; chunk&#x3001;&#x66F4;&#x5F3A;&#x6A21;&#x578B;&#x3002;</p>
</li>
<li>
<p><strong>&#x751F;&#x4EA7;&#x7EA7; RAG &#x5FC5;&#x987B;&#x53EF;&#x5BA1;&#x8BA1;&#x3002;</strong><br>
&#x7CFB;&#x7EDF;&#x8981;&#x8BB0;&#x5F55;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x62C6;&#x6210;&#x8FD9;&#x4E9B;&#x5B50;&#x95EE;&#x9898;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x7528;&#x4E86;&#x8FD9;&#x4E2A;&#x6A21;&#x578B;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x5173;&#x95ED;&#x9875;&#x7801;&#x63D0;&#x53D6;&#x3001;&#x4E3A;&#x4EC0;&#x4E48;&#x9009;&#x62E9; combined &#x6216; sequential&#x3002;&#x5426;&#x5219;&#x7B54;&#x6848;&#x9519;&#x4E86;&#x4EE5;&#x540E;&#xFF0C;&#x56E2;&#x961F;&#x53EA;&#x80FD;&#x731C;&#x95EE;&#x9898;&#x51FA;&#x5728;&#x54EA;&#x3002;</p>
</li>
</ol>
<p>&#x6240;&#x4EE5;&#x8FD9;&#x7BC7;&#x6587;&#x7AE0;&#x6700;&#x91CD;&#x8981;&#x7684;&#x542F;&#x53D1;&#x662F;&#xFF1A;</p>
<p><strong>&#x4E0D;&#x8981;&#x628A; RAG &#x505A;&#x6210;&#x201C;&#x95EE;&#x9898;&#x8FDB;&#x3001;top-k chunk &#x51FA;&#x3001;&#x5927;&#x6A21;&#x578B;&#x7B54;&#x201D;&#x7684;&#x9ED1;&#x76D2;&#x6D41;&#x6C34;&#x7EBF;&#xFF1B;&#x8981;&#x5148;&#x628A;&#x95EE;&#x9898;&#x89E3;&#x6790;&#x6210;&#x7ED3;&#x6784;&#x5316;&#x8BA1;&#x5212;&#xFF0C;&#x518D;&#x8BA9; dispatcher &#x660E;&#x786E;&#x63A7;&#x5236;&#x68C0;&#x7D22;&#x3001;&#x751F;&#x6210;&#x3001;&#x6A21;&#x578B;&#x548C;&#x5BA1;&#x8BA1;&#x3002;</strong></p>
<p>&#x5B83;&#x7684;&#x89C2;&#x70B9;&#x5F88;&#x5DE5;&#x7A0B;&#x5316;&#xFF1A;<br>
RAG &#x4E0D;&#x53EA;&#x662F;&#x201C;&#x68C0;&#x7D22;&#x589E;&#x5F3A;&#x751F;&#x6210;&#x201D;&#xFF0C;&#x66F4;&#x50CF;&#x4E00;&#x4E2A;&#x6587;&#x6863;&#x95EE;&#x7B54;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x3002;&#x95EE;&#x9898;&#x89E3;&#x6790;&#x5668;&#x8D1F;&#x8D23;&#x7406;&#x89E3;&#x610F;&#x56FE;&#xFF0C;dispatcher &#x8D1F;&#x8D23;&#x8C03;&#x5EA6;&#x8D44;&#x6E90;&#xFF0C;retrieval &#x548C; generation &#x53EA;&#x662F;&#x88AB;&#x8C03;&#x5EA6;&#x7684;&#x6267;&#x884C;&#x5355;&#x5143;&#x3002;</p>
`,F=[];export{x as attributes,E as html,F as nestedHeaders};
