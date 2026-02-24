const x={},F=`<h1 id="LLM &#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x80FD;&#x529B;&#x8BC4;&#x4F30;&#xFF1A;&#x4ECE; IFScale &#x5230; IFEval &#x7684;&#x601D;&#x8003;"><a href="#LLM &#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x80FD;&#x529B;&#x8BC4;&#x4F30;&#xFF1A;&#x4ECE; IFScale &#x5230; IFEval &#x7684;&#x601D;&#x8003;"></a>LLM &#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x80FD;&#x529B;&#x8BC4;&#x4F30;&#xFF1A;&#x4ECE; IFScale &#x5230; IFEval &#x7684;&#x601D;&#x8003;</h1>
<h2 id="&#x5F15;&#x8A00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x5927;&#x6A21;&#x578B;&#x603B;&#x662F;&#x201C;&#x542C;&#x4E0D;&#x61C2;&#x8BDD;&#x201D;&#xFF1F;"><a href="#&#x5F15;&#x8A00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x5927;&#x6A21;&#x578B;&#x603B;&#x662F;&#x201C;&#x542C;&#x4E0D;&#x61C2;&#x8BDD;&#x201D;&#xFF1F;"></a>&#x5F15;&#x8A00;&#xFF1A;&#x4E3A;&#x4EC0;&#x4E48;&#x5927;&#x6A21;&#x578B;&#x603B;&#x662F;&#x201C;&#x542C;&#x4E0D;&#x61C2;&#x8BDD;&#x201D;&#xFF1F;</h2>
<p>&#x5728;&#x5F00;&#x53D1; Agent &#x6216;&#x7F16;&#x5199;&#x590D;&#x6742; Prompt &#x65F6;&#xFF0C;&#x6211;&#x4EEC;&#x7ECF;&#x5E38;&#x9047;&#x5230;&#x4E00;&#x4E2A;&#x632B;&#x8D25;&#x7684;&#x573A;&#x666F;&#xFF1A;&#x660E;&#x660E;&#x5DF2;&#x7ECF;&#x5199;&#x4E86;&#x201C;&#x7981;&#x6B62;&#x8F93;&#x51FA; JSON&#x201D;&#x6216;&#x201C;&#x6BCF;&#x6BB5;&#x4E0D;&#x8D85;&#x8FC7; 50 &#x5B57;&#x201D;&#xFF0C;&#x6A21;&#x578B;&#x5374;&#x89C6;&#x800C;&#x4E0D;&#x89C1;&#x3002;&#x8FD9;&#x79CD;&#x201C;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#xFF08;Instruction Following&#xFF09;&#x201D;&#x80FD;&#x529B;&#x7684;&#x5931;&#x6548;&#xFF0C;&#x5230;&#x5E95;&#x662F;&#x56E0;&#x4E3A;&#x6A21;&#x578B;&#x201C;&#x8111;&#x5BB9;&#x91CF;&#xFF08;Context&#xFF09;&#x201D;&#x4E0D;&#x591F;&#xFF0C;&#x8FD8;&#x662F;&#x201C;&#x6CE8;&#x610F;&#x529B;&#xFF08;Attention&#xFF09;&#x201D;&#x6DA3;&#x6563;&#xFF1F;</p>
<p>&#x6700;&#x8FD1;&#x4E00;&#x7BC7;&#x540D;&#x4E3A; <a href="https://arxiv.org/pdf/2507.11538"><code>How Many Instructions Can LLMs Follow at Once?</code></a> &#x7684;&#x8BBA;&#x6587;&#x8BD5;&#x56FE;&#x901A;&#x8FC7; <strong>IFScale</strong> &#x57FA;&#x51C6;&#x91CF;&#x5316;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x3002;&#x672C;&#x6587;&#x57FA;&#x4E8E;&#x5BF9;&#x8BE5;&#x8BBA;&#x6587;&#x7684;&#x5206;&#x6790;&#xFF0C;&#x7ED3;&#x5408; IFEval &#x7B49;&#x4E1A;&#x754C;&#x6807;&#x51C6;&#xFF0C;&#x63A2;&#x8BA8;&#x5982;&#x4F55;&#x79D1;&#x5B66;&#x8BC4;&#x4F30;&#x548C;&#x63D0;&#x5347; LLM &#x7684;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x80FD;&#x529B;&#x3002;</p>
<h2 id="1. &#x8BBA;&#x6587;&#x89E3;&#x8BFB;&#xFF1A;IFScale &#x4E0E;&#x201C;&#x9AD8;&#x5BC6;&#x5EA6;&#x6307;&#x4EE4;&#x201D;&#x7684;&#x5D29;&#x584C;"><a href="#1. &#x8BBA;&#x6587;&#x89E3;&#x8BFB;&#xFF1A;IFScale &#x4E0E;&#x201C;&#x9AD8;&#x5BC6;&#x5EA6;&#x6307;&#x4EE4;&#x201D;&#x7684;&#x5D29;&#x584C;"></a>1. &#x8BBA;&#x6587;&#x89E3;&#x8BFB;&#xFF1A;IFScale &#x4E0E;&#x201C;&#x9AD8;&#x5BC6;&#x5EA6;&#x6307;&#x4EE4;&#x201D;&#x7684;&#x5D29;&#x584C;</h2>
<h3 id="1.1 &#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#xFF1A;&#x586B;&#x8BCD;&#x6E38;&#x620F;"><a href="#1.1 &#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#xFF1A;&#x586B;&#x8BCD;&#x6E38;&#x620F;"></a>1.1 &#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#xFF1A;&#x586B;&#x8BCD;&#x6E38;&#x620F;</h3>
<p>&#x8FD9;&#x7BC7;&#x8BBA;&#x6587;&#x7684;&#x5B9E;&#x9A8C;&#x8BBE;&#x8BA1;&#x975E;&#x5E38;&#x76F4;&#x89C2;&#xFF0C;&#x672C;&#x8D28;&#x4E0A;&#x662F;&#x4E00;&#x4E2A;**&#x201C;&#x5173;&#x952E;&#x8BCD;&#x586B;&#x7A7A;&#x201D;**&#x538B;&#x529B;&#x6D4B;&#x8BD5;&#xFF1A;</p>
<ul>
<li><strong>&#x4EFB;&#x52A1;</strong>&#xFF1A;&#x8981;&#x6C42;&#x6A21;&#x578B;&#x751F;&#x6210;&#x4E00;&#x4EFD;&#x5546;&#x4E1A;&#x62A5;&#x544A;&#x3002;</li>
<li><strong>&#x7EA6;&#x675F;</strong>&#xFF1A;&#x5FC5;&#x987B;&#x5728;&#x6587;&#x4E2D;&#x5305;&#x542B;&#x7ED9;&#x5B9A;&#x7684; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> &#x4E2A;&#x7279;&#x5B9A;&#x5355;&#x8BCD;&#xFF08;&#x5982; revenue, synergy, ecosystem...&#xFF09;&#x3002;</li>
<li><strong>&#x53D8;&#x91CF;</strong>&#xFF1A;<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> &#x4ECE; 10 &#x589E;&#x52A0;&#x5230; 500&#x3002;</li>
<li><strong>&#x8BC4;&#x6D4B;</strong>&#xFF1A;&#x7528;&#x6B63;&#x5219;&#x5339;&#x914D;&#x7EDF;&#x8BA1;&#x5173;&#x952E;&#x8BCD;&#x51FA;&#x73B0;&#x7684;&#x6BD4;&#x4F8B;&#x3002;</li>
</ul>
<h3 id="1.2 &#x6838;&#x5FC3;&#x53D1;&#x73B0;"><a href="#1.2 &#x6838;&#x5FC3;&#x53D1;&#x73B0;"></a>1.2 &#x6838;&#x5FC3;&#x53D1;&#x73B0;</h3>
<ol>
<li><strong>&#x5168;&#x5458;&#x9000;&#x5316;</strong>&#xFF1A;&#x5373;&#x4F7F;&#x662F; GPT-4 &#x7EA7;&#x522B;&#x7684;&#x6700;&#x5F3A;&#x6A21;&#x578B;&#xFF0C;&#x5728; 500 &#x6761;&#x6307;&#x4EE4;&#x5BC6;&#x5EA6;&#x4E0B;&#xFF0C;&#x9075;&#x5FAA;&#x7387;&#x4E5F;&#x8DCC;&#x81F3; <strong>68%</strong> &#x5DE6;&#x53F3;&#x3002;</li>
<li><strong>&#x9000;&#x5316;&#x6A21;&#x5F0F;</strong>&#xFF1A;
<ul>
<li><strong>&#x9608;&#x503C;&#x578B;&#xFF08;Threshold Decay&#xFF09;</strong>&#xFF1A;&#x63A8;&#x7406;&#x578B;&#x6A21;&#x578B;&#xFF08;&#x5982; o3&#xFF09;&#x5728;&#x4E34;&#x754C;&#x70B9;&#x524D;&#x5F88;&#x7A33;&#xFF0C;&#x8FC7;&#x7EBF;&#x540E;&#x7A81;&#x7136;&#x5D29;&#x584C;&#x3002;</li>
<li><strong>&#x7EBF;&#x6027;/&#x6307;&#x6570;&#x578B;</strong>&#xFF1A;&#x666E;&#x901A;&#x6A21;&#x578B;&#x968F;&#x7740;&#x6570;&#x91CF;&#x589E;&#x52A0;&#xFF0C;&#x9075;&#x5FAA;&#x7387;&#x5448;&#x7EBF;&#x6027;&#x6216;&#x6307;&#x6570;&#x4E0B;&#x6ED1;&#x3002;</li>
</ul>
</li>
<li><strong>&#x9996;&#x56E0;&#x6548;&#x5E94;&#xFF08;Primacy Effect&#xFF09;</strong>&#xFF1A;&#x6A21;&#x578B;&#x5BF9; Prompt <strong>&#x524D;&#x90E8;</strong>&#x7684;&#x6307;&#x4EE4;&#x6267;&#x884C;&#x5F97;&#x66F4;&#x597D;&#xFF0C;&#x8D8A;&#x5F80;&#x540E;&#x8D8A;&#x5BB9;&#x6613;&#x6F0F;&#xFF08;Attention &#x8870;&#x51CF;&#xFF09;&#x3002;</li>
</ol>
<h2 id="2. &#x6279;&#x5224;&#x6027;&#x601D;&#x8003;&#xFF1A;&#x8FD9;&#x662F;&#x201C;&#x8BB0;&#x5FC6;&#x529B;&#x201D;&#x6D4B;&#x8BD5;&#xFF0C;&#x800C;&#x975E;&#x201C;&#x667A;&#x529B;&#x201D;&#x6D4B;&#x8BD5;"><a href="#2. &#x6279;&#x5224;&#x6027;&#x601D;&#x8003;&#xFF1A;&#x8FD9;&#x662F;&#x201C;&#x8BB0;&#x5FC6;&#x529B;&#x201D;&#x6D4B;&#x8BD5;&#xFF0C;&#x800C;&#x975E;&#x201C;&#x667A;&#x529B;&#x201D;&#x6D4B;&#x8BD5;"></a>2. &#x6279;&#x5224;&#x6027;&#x601D;&#x8003;&#xFF1A;&#x8FD9;&#x662F;&#x201C;&#x8BB0;&#x5FC6;&#x529B;&#x201D;&#x6D4B;&#x8BD5;&#xFF0C;&#x800C;&#x975E;&#x201C;&#x667A;&#x529B;&#x201D;&#x6D4B;&#x8BD5;</h2>
<p>&#x867D;&#x7136; IFScale &#x8BC1;&#x660E;&#x4E86;&#x6A21;&#x578B;&#x5728;&#x9AD8;&#x8D1F;&#x8F7D;&#x4E0B;&#x7684;&#x6CE8;&#x610F;&#x529B;&#x7F3A;&#x9677;&#xFF0C;&#x4F46;&#x4F5C;&#x4E3A;&#x201C;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x201D;&#x7684;&#x8BC4;&#x4F30;&#x6807;&#x51C6;&#xFF0C;&#x5B83;&#x5B58;&#x5728;&#x660E;&#x663E;&#x5C40;&#x9650;&#xFF1A;</p>
<ul>
<li><strong>&#x4F4E;&#x8BA4;&#x77E5;&#x8D1F;&#x8F7D;</strong>&#xFF1A;
&#x4EC5;&#x4EC5;&#x662F;&#x201C;&#x63D2;&#x5165;&#x5355;&#x8BCD;&#x201D;&#xFF0C;&#x4E0D;&#x6D89;&#x53CA;&#x590D;&#x6742;&#x7684;&#x903B;&#x8F91;&#x5224;&#x65AD;&#x3002;&#x8FD9;&#x6D4B;&#x8BD5;&#x7684;&#x662F;<strong>&#x663E;&#x6027;&#x8BB0;&#x5FC6;&#x68C0;&#x7D22;&#xFF08;Retrieval&#xFF09;</strong>&#xFF0C;&#x800C;&#x4E0D;&#x662F;<strong>&#x903B;&#x8F91;&#x6267;&#x884C;&#xFF08;Execution&#xFF09;</strong>&#x3002;</li>
<li><strong>&#x7F3A;&#x4E4F;&#x4E92;&#x65A5;&#x4E0E;&#x51B2;&#x7A81;</strong>&#xFF1A;
&#x771F;&#x5B9E;&#x4E16;&#x754C;&#x7684;&#x6307;&#x4EE4;&#x5F80;&#x5F80;&#x662F;&#x6253;&#x67B6;&#x7684;&#xFF08;&#x5982;&#x201C;&#x8981;&#x8BE6;&#x7EC6;&#x201D; vs &#x201C;&#x8981;&#x7B80;&#x7EC3;&#x201D;&#xFF09;&#x3002;IFScale &#x7684;&#x6307;&#x4EE4;&#x4E4B;&#x95F4;&#x662F;&#x72EC;&#x7ACB;&#x7684;&#xFF0C;&#x65E0;&#x6CD5;&#x6D4B;&#x8BD5;&#x6A21;&#x578B;&#x5904;&#x7406;**&#x51B2;&#x7A81;&#xFF08;Conflict&#xFF09;<strong>&#x548C;</strong>&#x6743;&#x8861;&#xFF08;Trade-off&#xFF09;**&#x7684;&#x80FD;&#x529B;&#x3002;</li>
<li><strong>&#x5FFD;&#x89C6;&#x8D28;&#x91CF;</strong>&#xFF1A;
&#x53EA;&#x8981;&#x628A;&#x8BCD;&#x585E;&#x8FDB;&#x53BB;&#x5C31;&#x7B97;&#x8D62;&#xFF0C;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x53EF;&#x80FD;&#x751F;&#x6210;&#x903B;&#x8F91;&#x4E0D;&#x901A;&#x7684;&#x201C;&#x5783;&#x573E;&#x6587;&#x672C;&#x201D;&#x6765;&#x9A97;&#x5206;&#x3002;</li>
</ul>
<p><strong>&#x6539;&#x8FDB;&#x601D;&#x8DEF;&#xFF1A;&#x6DF7;&#x5408;&#x903B;&#x8F91;&#x538B;&#x529B;&#x6D4B;&#x8BD5;&#xFF08;Mixed-Constraint Stress Test&#xFF09;</strong>
&#x66F4;&#x771F;&#x5B9E;&#x7684;&#x6D4B;&#x8BD5;&#x5E94;&#x5305;&#x542B;&#xFF1A;</p>
<ul>
<li><strong>&#x5426;&#x5B9A;&#x7EA6;&#x675F;</strong>&#xFF08;Negative Constraints&#xFF09;&#xFF1A;&quot;&#x4E25;&#x7981;&#x4F7F;&#x7528; X&quot;&#x3002;</li>
<li><strong>&#x6761;&#x4EF6;&#x4F9D;&#x8D56;</strong>&#xFF08;Conditional Dependencies&#xFF09;&#xFF1A;&quot;&#x5982;&#x679C; A&#xFF0C;&#x5219;&#x5FC5;&#x987B; B&quot;&#x3002;</li>
<li><strong>&#x683C;&#x5F0F;&#x5F3A;&#x7EA6;&#x675F;</strong>&#xFF08;Format Constraints&#xFF09;&#xFF1A;&quot;JSON &#x5B57;&#x6BB5;&#x5FC5;&#x987B;&#x5C0F;&#x4E8E; 50 &#x5B57;&quot;&#x3002;</li>
</ul>
<h2 id="3. &#x4E1A;&#x754C;&#x6807;&#x51C6;&#x5BF9;&#x6BD4;&#xFF1A;&#x4E25;&#x8C28;&#x6D3E; vs &#x7075;&#x6D3B;&#x6D3E;"><a href="#3. &#x4E1A;&#x754C;&#x6807;&#x51C6;&#x5BF9;&#x6BD4;&#xFF1A;&#x4E25;&#x8C28;&#x6D3E; vs &#x7075;&#x6D3B;&#x6D3E;"></a>3. &#x4E1A;&#x754C;&#x6807;&#x51C6;&#x5BF9;&#x6BD4;&#xFF1A;&#x4E25;&#x8C28;&#x6D3E; vs &#x7075;&#x6D3B;&#x6D3E;</h2>
<p>&#x5728;&#x201C;&#x5982;&#x4F55;&#x6D4B;&#x8BD5;&#x6307;&#x4EE4;&#x9075;&#x5FAA;&#x201D;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x4E0A;&#xFF0C;&#x4E1A;&#x754C;&#x4E3B;&#x8981;&#x5206;&#x4E3A;&#x4E24;&#x6D3E;&#xFF1A;</p>
<h3 id="3.1 &#x4E25;&#x8C28;&#x6D3E;&#xFF1A;IFEval (Google DeepMind)"><a href="#3.1 &#x4E25;&#x8C28;&#x6D3E;&#xFF1A;IFEval (Google DeepMind)"></a>3.1 &#x4E25;&#x8C28;&#x6D3E;&#xFF1A;IFEval (Google DeepMind)</h3>
<ul>
<li><strong>&#x6838;&#x5FC3;&#x54F2;&#x5B66;</strong>&#xFF1A;<strong>&#x201C;&#x4EE3;&#x7801;&#x5373;&#x771F;&#x7406;&#x201D;</strong>&#x3002;&#x53EA;&#x6D4B;&#x90A3;&#x4E9B;&#x5BA2;&#x89C2;&#x53EF;&#x9A8C;&#x8BC1;&#x7684;&#x6307;&#x4EE4;&#x3002;</li>
<li><strong>&#x5178;&#x578B;&#x6307;&#x4EE4;</strong>&#xFF1A;
<ul>
<li>&#x201C;&#x7981;&#x6B62;&#x4F7F;&#x7528;&#x5927;&#x5199;&#x5B57;&#x6BCD;&#x201D;</li>
<li>&#x201C;&#x5B57;&#x6570;&#x4E25;&#x683C;&#x5728; 200-300 &#x4E4B;&#x95F4;&#x201D;</li>
<li>&#x201C;&#x8F93;&#x51FA;&#x5FC5;&#x987B;&#x662F;&#x5408;&#x6CD5;&#x7684; JSON&#x201D;</li>
</ul>
</li>
<li><strong>&#x5224;&#x5206;&#x65B9;&#x5F0F;</strong>&#xFF1A;<strong>Python &#x811A;&#x672C;</strong>&#x3002;&#x6B63;&#x5219;&#x5339;&#x914D;&#x3001;&#x683C;&#x5F0F;&#x89E3;&#x6790;&#x3001;&#x5B57;&#x6570;&#x7EDF;&#x8BA1;&#x3002;</li>
<li><strong>&#x4F18;&#x70B9;</strong>&#xFF1A;100% &#x5BA2;&#x89C2;&#xFF0C;&#x65E0;&#x4E89;&#x8BAE;&#xFF0C;&#x4E0D;&#x9700;&#x8981; AI &#x88C1;&#x5224;&#x3002;</li>
<li><strong>&#x9002;&#x7528;&#x573A;&#x666F;</strong>&#xFF1A;&#x57FA;&#x5EA7;&#x6A21;&#x578B;&#x7684;&#x57FA;&#x7840;&#x80FD;&#x529B;&#x4F53;&#x68C0;&#x3002;</li>
</ul>
<h3 id="3.2 &#x7075;&#x6D3B;&#x6D3E;&#xFF1A;FollowBench / ComplexBench"><a href="#3.2 &#x7075;&#x6D3B;&#x6D3E;&#xFF1A;FollowBench / ComplexBench"></a>3.2 &#x7075;&#x6D3B;&#x6D3E;&#xFF1A;FollowBench / ComplexBench</h3>
<ul>
<li><strong>&#x6838;&#x5FC3;&#x54F2;&#x5B66;</strong>&#xFF1A;<strong>&#x201C;&#x7406;&#x89E3;&#x4E07;&#x5C81;&#x201D;</strong>&#x3002;&#x6D4B;&#x8BD5;&#x8BED;&#x4E49;&#x3001;&#x8BED;&#x6C14;&#x3001;&#x591A;&#x6B65;&#x903B;&#x8F91;&#x7B49;&#x8F6F;&#x7EA6;&#x675F;&#x3002;</li>
<li><strong>&#x5178;&#x578B;&#x6307;&#x4EE4;</strong>&#xFF1A;
<ul>
<li>&#x201C;&#x8BED;&#x6C14;&#x8981;&#x59D4;&#x5A49;&#x4F46;&#x4E13;&#x4E1A;&#x201D;</li>
<li>&#x201C;&#x5982;&#x679C; API &#x6302;&#x4E86;&#xFF0C;&#x4E0D;&#x8981;&#x6307;&#x8D23;&#x4F9B;&#x5E94;&#x5546;&#xFF0C;&#x8981;&#x8BF4;&#x662F;&#x6280;&#x672F;&#x96C6;&#x6210;&#x95EE;&#x9898;&#x201D;</li>
<li>&#x201C;&#x63D0;&#x4F9B;&#x4E24;&#x4E2A;&#x903B;&#x8F91;&#x4E0A;&#x4E92;&#x65A5;&#x7684;&#x5907;&#x9009;&#x65B9;&#x6848;&#x201D;</li>
</ul>
</li>
<li><strong>&#x5224;&#x5206;&#x65B9;&#x5F0F;</strong>&#xFF1A;<strong>LLM-as-a-judge</strong>&#x3002;&#x628A; Prompt&#x3001;&#x56DE;&#x590D;&#x548C;&#x8BC4;&#x5206;&#x6807;&#x51C6;&#x53D1;&#x7ED9; GPT-4 &#x6253;&#x5206;&#x3002;</li>
<li><strong>&#x4F18;&#x70B9;</strong>&#xFF1A;&#x771F;&#x5B9E;&#xFF0C;&#x8D34;&#x8FD1; Agent &#x5B9E;&#x9645;&#x5E94;&#x7528;&#x573A;&#x666F;&#x3002;</li>
<li><strong>&#x7F3A;&#x70B9;</strong>&#xFF1A;&#x88C1;&#x5224;&#x6A21;&#x578B;&#xFF08;GPT-4&#xFF09;&#x672C;&#x8EAB;&#x6709;&#x4E3B;&#x89C2;&#x6027;&#xFF0C;&#x7ED3;&#x679C;&#x6709;&#x6CE2;&#x52A8;&#x3002;</li>
</ul>
<h2 id="4. &#x5BF9; Agent &#x5F00;&#x53D1;&#x7684;&#x542F;&#x793A;"><a href="#4. &#x5BF9; Agent &#x5F00;&#x53D1;&#x7684;&#x542F;&#x793A;"></a>4. &#x5BF9; Agent &#x5F00;&#x53D1;&#x7684;&#x542F;&#x793A;</h2>
<ol>
<li><strong>&#x4E0D;&#x8981;&#x4E00;&#x6B21;&#x6027;&#x585E;&#x5165;&#x8FC7;&#x8F7D;&#x6307;&#x4EE4;</strong>&#xFF1A;
&#x8BBA;&#x6587;&#x8BC1;&#x660E; 500 &#x6761;&#x6307;&#x4EE4;&#x4F1A;&#x8BA9;&#x6A21;&#x578B;&#x5D29;&#x76D8;&#x3002;&#x5DE5;&#x7A0B;&#x4E0A;&#x5E94;&#x907F;&#x514D;&#x201C;&#x4E07;&#x80FD; Prompt&#x201D;&#xFF0C;&#x5C3D;&#x91CF;**&#x62C6;&#x89E3;&#xFF08;Decomposition&#xFF09;**&#x4EFB;&#x52A1;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x6B65;&#x9AA4;&#x7684; Context &#x4FDD;&#x6301;&#x5E72;&#x51C0;&#x3002;</li>
<li><strong>&#x5BF9;&#x6297;&#x4F4D;&#x7F6E;&#x504F;&#x89C1;</strong>&#xFF1A;
&#x628A;<strong>&#x6700;&#x5173;&#x952E;</strong>&#x7684;&#x6307;&#x4EE4;&#xFF08;&#x5982;&#x5B89;&#x5168;&#x7EA2;&#x7EBF;&#x3001;&#x8F93;&#x51FA;&#x683C;&#x5F0F;&#xFF09;&#x653E;&#x5728; Prompt &#x7684;<strong>&#x6700;&#x524D;&#x9762;</strong>&#x6216;<strong>&#x6700;&#x540E;&#x9762;</strong>&#xFF08;Recency Bias&#xFF09;&#xFF0C;&#x4E0D;&#x8981;&#x57CB;&#x5728;&#x4E2D;&#x95F4;&#x3002;</li>
<li><strong>&#x76D1;&#x63A7;&#x4F53;&#x7CFB;&#x5EFA;&#x8BBE;</strong>&#xFF1A;
<ul>
<li>&#x5BF9;<strong>&#x786C;&#x6307;&#x6807;</strong>&#xFF08;JSON &#x683C;&#x5F0F;&#x3001;&#x7981;&#x6B62;&#x8BCD;&#xFF09;&#xFF0C;&#x53C2;&#x8003; <strong>IFEval</strong> &#x5199;&#x811A;&#x672C;&#x6B7B;&#x677F;&#x6821;&#x9A8C;&#x3002;</li>
<li>&#x5BF9;<strong>&#x8F6F;&#x6307;&#x6807;</strong>&#xFF08;&#x8BED;&#x6C14;&#x3001;&#x903B;&#x8F91;&#xFF09;&#xFF0C;&#x53C2;&#x8003; <strong>FollowBench</strong> &#x7528;&#x66F4;&#x5F3A;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x6216;&#x4EBA;&#x5DE5;&#xFF09;&#x62BD;&#x68C0;&#x3002;</li>
</ul>
</li>
<li><strong>&#x63A8;&#x7406;&#x6A21;&#x5F0F;&#x7684;&#x4EF7;&#x503C;</strong>&#xFF1A;
&#x8BBA;&#x6587;&#x63D0;&#x5230;&#x5F00;&#x542F; Thinking/Reasoning &#x6A21;&#x5F0F;&#x80FD;&#x7F13;&#x89E3;&#x9AD8;&#x5BC6;&#x5EA6;&#x4E0B;&#x7684;&#x9000;&#x5316;&#x3002;&#x5728;&#x590D;&#x6742;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x727A;&#x7272;&#x4E00;&#x70B9;&#x5EF6;&#x8FDF;&#x6362;&#x53D6; Chain-of-Thought &#x662F;&#x503C;&#x5F97;&#x7684;&#x3002;</li>
</ol>
<hr>
<p><em>Reference:</em></p>
<ul>
<li><a href="https://arxiv.org/pdf/2507.11538">Arxiv: How Many Instructions Can LLMs Follow at Once?</a></li>
<li><a href="https://arxiv.org/abs/2311.07911">IFEval: Instruction Following Evaluation for Large Language Models</a></li>
</ul>
`,n=[{level:1,title:"LLM 指令遵循能力评估：从 IFScale 到 IFEval 的思考",children:[{level:2,title:"引言：为什么大模型总是“听不懂话”？",children:[]},{level:2,title:"1. 论文解读：IFScale 与“高密度指令”的崩塌",children:[{level:3,title:"1.1 实验设计：填词游戏",children:[]},{level:3,title:"1.2 核心发现",children:[]}]},{level:2,title:"2. 批判性思考：这是“记忆力”测试，而非“智力”测试",children:[]},{level:2,title:"3. 业界标准对比：严谨派 vs 灵活派",children:[{level:3,title:"3.1 严谨派：IFEval (Google DeepMind)",children:[]},{level:3,title:"3.2 灵活派：FollowBench / ComplexBench",children:[]}]},{level:2,title:"4. 对 Agent 开发的启示",children:[]}]}];export{x as attributes,F as html,n as nestedHeaders};
