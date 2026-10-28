const x={title:"Coding Agent 的强化学习式演进：从任务反馈到策略优化",description:"把优化对象从 Prompt、Skill 和上下文扩展到完整执行策略，以真实任务结果作为反馈信号，渐进建立可验证的强化学习式闭环。"},F=`<h1 id="Coding Agent &#x7684;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x7B56;&#x7565;&#x4F18;&#x5316;"><a href="#Coding Agent &#x7684;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x7B56;&#x7565;&#x4F18;&#x5316;"></a>Coding Agent &#x7684;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x7B56;&#x7565;&#x4F18;&#x5316;</h1>
<h2 id="&#x80CC;&#x666F;&#x73B0;&#x8C61;"><a href="#&#x80CC;&#x666F;&#x73B0;&#x8C61;"></a>&#x80CC;&#x666F;&#x73B0;&#x8C61;</h2>
<p>Coding Agent &#x5DF2;&#x7ECF;&#x80FD;&#x5728;&#x5355;&#x6B21;&#x4EFB;&#x52A1;&#x91CC;&#x5B8C;&#x6210;&#x9700;&#x6C42;&#x7406;&#x89E3;&#x3001;&#x68C0;&#x7D22;&#x3001;&#x7F16;&#x7801;&#x3001;&#x8FD0;&#x884C;&#x9A8C;&#x8BC1;&#x548C;&#x53CD;&#x9988;&#x4FEE;&#x6B63;&#x3002;&#x8FD9;&#x4E2A;&#x80FD;&#x529B;&#x5728;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#x573A;&#x666F;&#x53EF;&#x7528;&#xFF0C;&#x4F46;&#x7ED3;&#x679C;&#x4ECD;&#x4E0D;&#x7A33;&#x5B9A;&#xFF1A;</p>
<ul>
<li>&#x540C;&#x7C7B;&#x4EFB;&#x52A1;&#x6362;&#x4E00;&#x4E2A;&#x4ED3;&#x5E93;&#x6216;&#x9700;&#x6C42;&#x5F62;&#x6001;&#xFF0C;&#x7ED3;&#x679C;&#x53EF;&#x80FD;&#x660E;&#x663E;&#x4E0D;&#x540C;&#xFF1B;</li>
<li>&#x4E00;&#x6B21;&#x5931;&#x8D25;&#x4FEE;&#x6B63;&#x540E;&#xFF0C;&#x4E0B;&#x4E00;&#x6B21;&#x4ECD;&#x53EF;&#x80FD;&#x6CBF;&#x76F8;&#x4F3C;&#x9519;&#x8BEF;&#x8DEF;&#x5F84;&#x6267;&#x884C;&#xFF1B;</li>
<li>&#x589E;&#x52A0; Skill / Context &#x540E;&#x5C40;&#x90E8;&#x6539;&#x5584;&#xFF0C;&#x6574;&#x4F53;&#x5374;&#x51FA;&#x73B0;&#x65B0;&#x7684;&#x504F;&#x5DEE;&#xFF1B;</li>
<li>&#x4EBA;&#x5DE5;&#x53CD;&#x590D;&#x7EA0;&#x6B63;&#x7684;&#x5185;&#x5BB9;&#x6CA1;&#x6709;&#x6210;&#x4E3A;&#x4E0B;&#x4E00;&#x8F6E;&#x7B56;&#x7565;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</li>
</ul>
<p>&#x6240;&#x4EE5;&#x95EE;&#x9898;&#x4E0D;&#x662F;&#x201C;Agent &#x80FD;&#x4E0D;&#x80FD; Coding&#x201D;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>
<blockquote>
<p>&#x5982;&#x4F55;&#x8BA9; Agent &#x6839;&#x636E;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#xFF0C;&#x6301;&#x7EED;&#x6539;&#x8FDB;&#x5B83;&#x9009;&#x62E9;&#x4FE1;&#x606F;&#x3001;&#x8C03;&#x7528;&#x5DE5;&#x5177;&#x3001;&#x4FEE;&#x6539;&#x4EE3;&#x7801;&#x548C;&#x9A8C;&#x8BC1;&#x7ED3;&#x679C;&#x7684;&#x65B9;&#x5F0F;&#x3002;</p>
</blockquote>
<p>&#x9875;&#x9762;&#x8FD8;&#x539F;&#x3001;&#x63A5;&#x53E3;&#x9002;&#x914D;&#x3001;&#x6D4B;&#x8BD5;&#x4FEE;&#x590D;&#x90FD;&#x662F;&#x540C;&#x4E00;&#x7C7B;&#x73B0;&#x8C61;&#x3002;&#x5B83;&#x4EEC;&#x90FD;&#x5177;&#x5907;&#x53EF;&#x6267;&#x884C;&#x7684;&#x73AF;&#x5883;&#x53CD;&#x9988;&#xFF08;&#x6784;&#x5EFA;&#x3001;&#x6D4B;&#x8BD5;&#x3001;&#x8FD0;&#x884C;&#x3001;&#x622A;&#x56FE;&#x3001;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#xFF09;&#xFF0C;&#x4E5F;&#x90FD;&#x9700;&#x8981;&#x8DE8;&#x4EFB;&#x52A1;&#x6539;&#x8FDB;&#x6267;&#x884C;&#x7B56;&#x7565;&#x3002;</p>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x662F;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x662F;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x662F;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;</h2>
<p>&#x8FD9;&#x91CC;&#x6240;&#x8BF4;&#x7684;&#x201C;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;&#x201D;&#x4E0D;&#x662F;&#x8981;&#x6C42;&#x7ACB;&#x523B;&#x8BAD;&#x7EC3;&#x4E00;&#x4E2A;&#x5927;&#x6A21;&#x578B;&#xFF0C;&#x800C;&#x662F;&#x6307;&#x4EE5;&#x4EFB;&#x52A1;&#x7ED3;&#x679C;&#x4E3A;&#x5956;&#x52B1;&#x4FE1;&#x53F7;&#x3001;&#x4EE5; Agent &#x6267;&#x884C;&#x7B56;&#x7565;&#x4E3A;&#x4F18;&#x5316;&#x5BF9;&#x8C61;&#x7684;&#x95ED;&#x73AF;&#xFF1A;</p>
<pre><code class="language-text">&#x73AF;&#x5883;&#x53CD;&#x9988;&#xFF1A;&#x6784;&#x5EFA; / &#x6D4B;&#x8BD5; / &#x8FD0;&#x884C;&#x7ED3;&#x679C; / &#x622A;&#x56FE; / &#x4EBA;&#x5DE5;&#x9A8C;&#x6536;
&#x5956;&#x52B1;&#x4FE1;&#x53F7;&#xFF1A;&#x6700;&#x7EC8;&#x662F;&#x5426;&#x5B8C;&#x6210;&#x3001;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x91CF;&#x3001;&#x6267;&#x884C;&#x6210;&#x672C;
&#x4F18;&#x5316;&#x5BF9;&#x8C61;&#xFF1A;Context / Prompt / Skill / Tool / &#x6A21;&#x578B;&#x53C2;&#x6570; / &#x6267;&#x884C;&#x987A;&#x5E8F;
&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;&#xFF1A;&#x76F8;&#x540C;&#x6761;&#x4EF6;&#x4E0B;&#x6BD4;&#x8F83;&#x4E0D;&#x540C;&#x7B56;&#x7565;&#x7248;&#x672C;&#x7684;&#x7ED3;&#x679C;
</code></pre>
<p>&#x628A;&#x5B83;&#x4F5C;&#x4E3A; Coding Agent &#x8303;&#x5F0F;&#x7684;&#x76EE;&#x6807;&#xFF0C;&#x662F;&#x56E0;&#x4E3A;&#x8FD9;&#x7C7B;&#x95EE;&#x9898;&#x5177;&#x5907;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x7684;&#x5178;&#x578B;&#x7ED3;&#x6784;&#xFF1A;</p>
<ul>
<li><strong>&#x7ED3;&#x679C;&#x662F;&#x5EF6;&#x8FDF;&#x7684;</strong>&#x3002;&#x4E00;&#x6B21;&#x4EE3;&#x7801;&#x4FEE;&#x6539;&#x662F;&#x5426;&#x6709;&#x6548;&#xFF0C;&#x5F80;&#x5F80;&#x8981;&#x5230;&#x8FD0;&#x884C;&#x3001;&#x96C6;&#x6210;&#x548C;&#x9A8C;&#x6536;&#x4E4B;&#x540E;&#x624D;&#x77E5;&#x9053;&#xFF1B;&#x4E2D;&#x95F4;&#x6B65;&#x9AA4;&#x65E0;&#x6CD5;&#x5355;&#x72EC;&#x7ED9;&#x51FA;&#x53EF;&#x9760;&#x5956;&#x52B1;&#x3002;</li>
<li><strong>&#x72B6;&#x6001;&#x662F;&#x4E0D;&#x5B8C;&#x5168;&#x7684;</strong>&#x3002;Agent &#x770B;&#x4E0D;&#x5230;&#x5B8C;&#x6574;&#x4ED3;&#x5E93;&#x5386;&#x53F2;&#x3001;&#x9690;&#x85CF;&#x9700;&#x6C42;&#x548C;&#x672A;&#x6765;&#x9A8C;&#x8BC1;&#x7ED3;&#x679C;&#xFF0C;&#x53EA;&#x80FD;&#x5728;&#x90E8;&#x5206;&#x89C2;&#x5BDF;&#x4E0B;&#x51B3;&#x7B56;&#x3002;</li>
<li><strong>&#x6700;&#x4F18;&#x7B56;&#x7565;&#x9700;&#x8981;&#x63A2;&#x7D22;&#x4E0E;&#x6743;&#x8861;</strong>&#x3002;&#x4EC0;&#x4E48;&#x65F6;&#x5019;&#x589E;&#x52A0;&#x4E0A;&#x4E0B;&#x6587;&#x3001;&#x8C03;&#x7528;&#x4EC0;&#x4E48;&#x5DE5;&#x5177;&#x3001;&#x662F;&#x5426;&#x76F8;&#x4FE1;&#x6D4B;&#x8BD5;&#xFF0C;&#x90FD;&#x9700;&#x8981;&#x6839;&#x636E;&#x5206;&#x5E03;&#x7ED3;&#x679C;&#x8C03;&#x6574;&#xFF0C;&#x96BE;&#x4EE5;&#x7A77;&#x4E3E;&#x4E3A;&#x9759;&#x6001;&#x89C4;&#x5219;&#x3002;</li>
<li><strong>&#x73AF;&#x5883;&#x63D0;&#x4F9B;&#x4E86;&#x4F4E;&#x6210;&#x672C;&#x76D1;&#x7763;</strong>&#x3002;&#x6784;&#x5EFA;&#x3001;&#x6D4B;&#x8BD5;&#x3001;&#x8FD0;&#x884C;&#x622A;&#x56FE;&#x548C;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x4E3A;&#x6BCF;&#x4E00;&#x6B65;&#x4E2D;&#x95F4;&#x52A8;&#x4F5C;&#x6807;&#x6CE8;&#x5BF9;&#x9519;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x8FD9;&#x4E0D;&#x662F;&#x201C;&#x7528;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x66FF;&#x4EE3; Prompt&#x3001;Skill &#x548C;&#x4EBA;&#x5DE5;&#x7ECF;&#x9A8C;&#x201D;&#xFF0C;&#x800C;&#x662F;&#x628A;&#x5B83;&#x4EEC;&#x7EDF;&#x4E00;&#x653E;&#x8FDB;&#x4E00;&#x4E2A;&#x53EF;&#x88AB;&#x7ED3;&#x679C;&#x9A8C;&#x8BC1;&#x7684;&#x7B56;&#x7565;&#x7CFB;&#x7EDF;&#x3002;&#x4EBA;&#x5DE5;&#x7ECF;&#x9A8C;&#x63D0;&#x4F9B;&#x5148;&#x9A8C;&#x4E0E;&#x7EA6;&#x675F;&#xFF0C;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x95ED;&#x73AF;&#x63D0;&#x4F9B;&#x7CFB;&#x7EDF;&#x5316;&#x7684;&#x9009;&#x62E9;&#x3001;&#x7EA0;&#x9519;&#x548C;&#x6CDB;&#x5316;&#x3002;</p>
<h2 id="&#x4E0E;&#x5176;&#x4ED6;&#x7B56;&#x7565;&#x7684;&#x5BF9;&#x6BD4;"><a href="#&#x4E0E;&#x5176;&#x4ED6;&#x7B56;&#x7565;&#x7684;&#x5BF9;&#x6BD4;"></a>&#x4E0E;&#x5176;&#x4ED6;&#x7B56;&#x7565;&#x7684;&#x5BF9;&#x6BD4;</h2>
<h3 id="&#x5806;&#x79EF; Context &#x4E0E; Prompt"><a href="#&#x5806;&#x79EF; Context &#x4E0E; Prompt"></a>&#x5806;&#x79EF; Context &#x4E0E; Prompt</h3>
<p>&#x4F18;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x8FED;&#x4EE3;&#x5FEB;&#xFF0C;&#x80FD;&#x628A;&#x5DE5;&#x7A0B;&#x7ECF;&#x9A8C;&#x76F4;&#x63A5;&#x5199;&#x8FDB;&#x6267;&#x884C;&#xFF1B;</li>
<li>&#x53EF;&#x89E3;&#x91CA;&#xFF0C;&#x80FD;&#x77E5;&#x9053; Agent &#x770B;&#x5230;&#x4EC0;&#x4E48;&#x6307;&#x5BFC;&#xFF1B;</li>
<li>&#x5BF9;&#x5C11;&#x91CF;&#x5DF2;&#x77E5; Failure &#x901A;&#x5E38;&#x89C1;&#x6548;&#x5FEB;&#x3002;</li>
</ul>
<p>&#x7F3A;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x7F3A;&#x5C11;&#x7ED3;&#x679C;&#x9A8C;&#x8BC1;&#xFF0C;&#x5BB9;&#x6613;&#x628A;&#x201C;&#x770B;&#x8D77;&#x6765;&#x6709;&#x7528;&#x201D;&#x8BEF;&#x5224;&#x4E3A;&#x201C;&#x5B9E;&#x9645;&#x6709;&#x6548;&#x201D;&#xFF1B;</li>
<li>&#x4E0A;&#x4E0B;&#x6587;&#x8D8A;&#x957F;&#xFF0C;&#x566A;&#x58F0;&#x8D8A;&#x591A;&#xFF0C;&#x8FD8;&#x53EF;&#x80FD;&#x4E0E;&#x4ED3;&#x5E93;&#x4E8B;&#x5B9E;&#x51B2;&#x7A81;&#xFF1B;</li>
<li>&#x89C4;&#x5219;&#x4E4B;&#x95F4;&#x5BB9;&#x6613;&#x8026;&#x5408;&#xFF0C;&#x6539;&#x4E00;&#x5904;&#x53EF;&#x80FD;&#x5F71;&#x54CD;&#x5168;&#x90E8;&#x4EFB;&#x52A1;&#xFF1B;</li>
<li>&#x65E0;&#x6CD5;&#x4F18;&#x5316;&#x5DE5;&#x5177;&#x8C03;&#x7528;&#x987A;&#x5E8F;&#x548C;&#x9A8C;&#x8BC1;&#x7B56;&#x7565;&#x3002;</li>
</ul>
<h3 id="&#x9759;&#x6001;&#x89C4;&#x5219;&#x4E0E;&#x6D41;&#x7A0B;&#x7F16;&#x6392;"><a href="#&#x9759;&#x6001;&#x89C4;&#x5219;&#x4E0E;&#x6D41;&#x7A0B;&#x7F16;&#x6392;"></a>&#x9759;&#x6001;&#x89C4;&#x5219;&#x4E0E;&#x6D41;&#x7A0B;&#x7F16;&#x6392;</h3>
<p>&#x4F18;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x786E;&#x5B9A;&#x3001;&#x53EF;&#x5BA1;&#x8BA1;&#xFF0C;&#x9002;&#x5408;&#x7EA6;&#x675F;&#x9AD8;&#x98CE;&#x9669;&#x6B65;&#x9AA4;&#xFF1B;</li>
<li>&#x4E0D;&#x4F9D;&#x8D56;&#x6A21;&#x578B;&#x968F;&#x673A;&#x6027;&#xFF0C;&#x7ED3;&#x679C;&#x7A33;&#x5B9A;&#xFF1B;</li>
<li>&#x80FD;&#x4FDD;&#x8BC1;&#x5DF2;&#x77E5;&#x6D41;&#x7A0B;&#x6309;&#x9884;&#x671F;&#x6267;&#x884C;&#x3002;</li>
</ul>
<p>&#x7F3A;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x957F;&#x5C3E;&#x573A;&#x666F;&#x8986;&#x76D6;&#x6210;&#x672C;&#x9AD8;&#xFF1B;</li>
<li>&#x89C4;&#x5219;&#x8D8A;&#x7EC6;&#x8D8A;&#x8106;&#xFF0C;&#x7EF4;&#x62A4;&#x6210;&#x672C;&#x968F; Case &#x589E;&#x957F;&#xFF1B;</li>
<li>&#x53EA;&#x63A7;&#x5236;&#x8FB9;&#x754C;&#xFF0C;&#x4E0D;&#x80FD;&#x5B66;&#x4E60;&#x54EA;&#x79CD;&#x7B56;&#x7565;&#x66F4;&#x6709;&#x6548;&#x3002;</li>
</ul>
<h3 id="&#x884C;&#x4E3A;&#x514B;&#x9686; / &#x4ECE;&#x6210;&#x529F;&#x6837;&#x672C;&#x5B66;&#x4E60;"><a href="#&#x884C;&#x4E3A;&#x514B;&#x9686; / &#x4ECE;&#x6210;&#x529F;&#x6837;&#x672C;&#x5B66;&#x4E60;"></a>&#x884C;&#x4E3A;&#x514B;&#x9686; / &#x4ECE;&#x6210;&#x529F;&#x6837;&#x672C;&#x5B66;&#x4E60;</h3>
<p>&#x4F18;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x80FD;&#x4ECE;&#x4F18;&#x8D28;&#x8F68;&#x8FF9;&#x5FEB;&#x901F;&#x5F97;&#x5230;&#x7A33;&#x5B9A;&#x57FA;&#x7EBF;&#xFF1B;</li>
<li>&#x5BF9;&#x5355;&#x4E00;&#x3001;&#x7A33;&#x5B9A;&#x4EFB;&#x52A1;&#x6210;&#x672C;&#x4F4E;&#xFF1B;</li>
<li>&#x6210;&#x529F;&#x7ECF;&#x9A8C;&#x53EF;&#x4EE5;&#x6C89;&#x6DC0;&#x4E3A; Skill &#x6216;&#x793A;&#x4F8B;&#x3002;</li>
</ul>
<p>&#x7F3A;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x8D28;&#x91CF;&#x4E0A;&#x9650;&#x53D7;&#x6F14;&#x793A;&#x6837;&#x672C;&#x9650;&#x5236;&#xFF1B;</li>
<li>&#x72B6;&#x6001;&#x504F;&#x79BB;&#x8BAD;&#x7EC3;&#x5206;&#x5E03;&#x540E;&#x9519;&#x8BEF;&#x5BB9;&#x6613;&#x7D2F;&#x79EF;&#xFF1B;</li>
<li>&#x6210;&#x529F;&#x6837;&#x672C;&#x5C11;&#x3001;&#x5931;&#x8D25;&#x6837;&#x672C;&#x901A;&#x5E38;&#x672A;&#x88AB;&#x5145;&#x5206;&#x4F7F;&#x7528;&#xFF1B;</li>
<li>&#x4E0D;&#x76F4;&#x63A5;&#x4F18;&#x5316;&#x73AF;&#x5883;&#x7ED3;&#x679C;&#xFF0C;&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x201C;&#x6BCF;&#x6B65;&#x5408;&#x7406;&#x3001;&#x6574;&#x4F53;&#x5931;&#x8D25;&#x201D;&#x3002;</li>
</ul>
<h3 id="&#x5355;&#x4EFB;&#x52A1;&#x81EA;&#x9002;&#x5E94;&#x641C;&#x7D22;"><a href="#&#x5355;&#x4EFB;&#x52A1;&#x81EA;&#x9002;&#x5E94;&#x641C;&#x7D22;"></a>&#x5355;&#x4EFB;&#x52A1;&#x81EA;&#x9002;&#x5E94;&#x641C;&#x7D22;</h3>
<p>&#x4F18;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x80FD;&#x5229;&#x7528;&#x5F53;&#x524D;&#x53CD;&#x9988;&#x4E0D;&#x65AD;&#x4FEE;&#x6539;&#xFF1B;</li>
<li>&#x65E0;&#x9700;&#x9884;&#x5148;&#x8BAD;&#x7EC3;&#xFF0C;&#x7075;&#x6D3B;&#xFF1B;</li>
<li>&#x53EF;&#x4EE5;&#x5B8C;&#x6210;&#x4E0D;&#x5C11;&#x4E00;&#x6B21;&#x6027;&#x7684;&#x590D;&#x6742;&#x4EFB;&#x52A1;&#x3002;</li>
</ul>
<p>&#x7F3A;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x5B66;&#x4E60;&#x505C;&#x7559;&#x5728;&#x5F53;&#x524D;&#x4EFB;&#x52A1;&#xFF0C;&#x4E0D;&#x8DE8; Case &#x590D;&#x7528;&#xFF1B;</li>
<li>&#x6BCF;&#x8F6E;&#x90FD;&#x91CD;&#x65B0;&#x63A2;&#x7D22;&#xFF0C;&#x6210;&#x672C;&#x9AD8;&#xFF1B;</li>
<li>&#x5BB9;&#x6613;&#x56F0;&#x5728;&#x5C40;&#x90E8;&#x6700;&#x4F18;&#xFF0C;&#x53CD;&#x590D;&#x7528;&#x540C;&#x4E00;&#x9519;&#x8BEF;&#x65B9;&#x5F0F;&#x91CD;&#x8BD5;&#x3002;</li>
</ul>
<h3 id="&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x7B56;&#x7565;&#x4F18;&#x5316;"><a href="#&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x7B56;&#x7565;&#x4F18;&#x5316;"></a>&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x7B56;&#x7565;&#x4F18;&#x5316;</h3>
<p>&#x4F18;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x76F4;&#x63A5;&#x4F18;&#x5316;&#x4EFB;&#x52A1;&#x7EA7;&#x7ED3;&#x679C;&#xFF1B;</li>
<li>&#x540C;&#x65F6;&#x5229;&#x7528;&#x6210;&#x529F;&#x4E0E;&#x5931;&#x8D25;&#x6837;&#x672C;&#xFF1B;</li>
<li>&#x80FD;&#x628A; Context&#x3001;Skill&#x3001;Tool &#x548C;&#x6A21;&#x578B;&#x8F93;&#x51FA;&#x7EB3;&#x5165;&#x7EDF;&#x4E00;&#x4F18;&#x5316;&#xFF1B;</li>
<li>&#x652F;&#x6301;&#x4ECE;&#x79BB;&#x7EBF;&#x7B56;&#x7565;&#x9009;&#x62E9;&#x9010;&#x6B65;&#x6F14;&#x8FDB;&#x5230;&#x6A21;&#x578B;&#x7EA7;&#x7B56;&#x7565;&#x4F18;&#x5316;&#x3002;</li>
</ul>
<p>&#x7F3A;&#x70B9;&#xFF1A;</p>
<ul>
<li>&#x5956;&#x52B1;&#x5B9A;&#x4E49;&#x96BE;&#xFF0C;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x7A00;&#x758F;&#x4E14;&#x5E26;&#x566A;&#x58F0;&#xFF1B;</li>
<li>&#x8BAD;&#x7EC3;&#x4E0E;&#x8BC4;&#x4F30;&#x6210;&#x672C;&#x9AD8;&#xFF1B;</li>
<li>&#x5BB9;&#x6613;&#x8FC7;&#x62DF;&#x5408;&#x8BC4;&#x6D4B;&#x96C6;&#x6216;&#x4EA7;&#x751F;&#x5956;&#x52B1;&#x9ED1;&#x5BA2;&#xFF1B;</li>
<li>&#x7CFB;&#x7EDF;&#x590D;&#x6742;&#xFF0C;&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x548C;&#x53EF;&#x63A7;&#x6027;&#x4E0B;&#x964D;&#xFF1B;</li>
<li>&#x5BF9;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x3001;&#x6570;&#x636E;&#x8D28;&#x91CF;&#x548C;&#x56DE;&#x5F52;&#x4F53;&#x7CFB;&#x8981;&#x6C42;&#x9AD8;&#x3002;</li>
</ul>
<p>&#x8FD9;&#x4E9B;&#x7B56;&#x7565;&#x4E0D;&#x662F;&#x5B8C;&#x5168;&#x4E92;&#x65A5;&#x3002;&#x5408;&#x7406;&#x8DEF;&#x5F84;&#x901A;&#x5E38;&#x662F;&#xFF1A;</p>
<pre><code class="language-text">&#x7528; Context / Skill &#x6C89;&#x6DC0;&#x5DF2;&#x77E5;&#x7ECF;&#x9A8C;
&#x2192; &#x7528;&#x9759;&#x6001;&#x89C4;&#x5219;&#x7EA6;&#x675F;&#x9AD8;&#x98CE;&#x9669;&#x8FB9;&#x754C;
&#x2192; &#x7528;&#x5355;&#x4EFB;&#x52A1;&#x81EA;&#x9002;&#x5E94;&#x641C;&#x7D22;&#x5B8C;&#x6210;&#x5F53;&#x524D;&#x4EFB;&#x52A1;
&#x2192; &#x7528;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x95ED;&#x73AF;&#x5224;&#x65AD;&#x54EA;&#x4E9B;&#x7ECF;&#x9A8C;&#x3001;&#x89C4;&#x5219;&#x548C;&#x641C;&#x7D22;&#x65B9;&#x5F0F;&#x771F;&#x6B63;&#x6539;&#x5584;&#x4E86;&#x7ED3;&#x679C;
</code></pre>
<h2 id="&#x5982;&#x4F55;&#x63A8;&#x8FDB;"><a href="#&#x5982;&#x4F55;&#x63A8;&#x8FDB;"></a>&#x5982;&#x4F55;&#x63A8;&#x8FDB;</h2>
<h3 id="&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x53EF;&#x590D;&#x73B0; Baseline"><a href="#&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x53EF;&#x590D;&#x73B0; Baseline"></a>&#x7B2C;&#x4E00;&#x6B65;&#xFF1A;&#x5EFA;&#x7ACB;&#x53EF;&#x590D;&#x73B0; Baseline</h3>
<p>&#x5148;&#x9009;&#x4E00;&#x7EC4;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#xFF0C;&#x4FDD;&#x5B58;&#x8F93;&#x5165;&#x3001;&#x4ED3;&#x5E93; Commit&#x3001;&#x6A21;&#x578B;&#x914D;&#x7F6E;&#x3001;&#x6267;&#x884C;&#x6761;&#x4EF6;&#x548C;&#x9A8C;&#x6536;&#x6807;&#x51C6;&#xFF1B;&#x4E0D;&#x6CE8;&#x5165;&#x5019;&#x9009;&#x589E;&#x5F3A;&#x80FD;&#x529B;&#x65F6;&#x8DD1;&#x51FA; Direct Baseline&#x3002;</p>
<p>Baseline &#x4E0D;&#x4E00;&#x5B9A;&#x6210;&#x529F;&#xFF0C;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x63D0;&#x4F9B;&#x6BD4;&#x8F83;&#x57FA;&#x51C6;&#x3002;&#x6CA1;&#x6709;&#x53EF;&#x590D;&#x73B0; Baseline&#xFF0C;&#x540E;&#x7EED;&#x4EFB;&#x4F55;&#x201C;&#x53D8;&#x597D;&#x201D;&#x90FD;&#x96BE;&#x4EE5;&#x5F52;&#x56E0;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x91C7;&#x96C6;&#x7ED3;&#x679C;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x628A; Trace &#x5F53;&#x5956;&#x52B1;"><a href="#&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x91C7;&#x96C6;&#x7ED3;&#x679C;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x628A; Trace &#x5F53;&#x5956;&#x52B1;"></a>&#x7B2C;&#x4E8C;&#x6B65;&#xFF1A;&#x91C7;&#x96C6;&#x7ED3;&#x679C;&#x8BC1;&#x636E;&#xFF0C;&#x4E0D;&#x628A; Trace &#x5F53;&#x5956;&#x52B1;</h3>
<p>&#x5BF9;&#x6BCF;&#x4E2A;&#x4EFB;&#x52A1;&#x4FDD;&#x5B58;&#xFF1A;</p>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x8F93;&#x5165;&#x4E0E;&#x9A8C;&#x6536;&#x6807;&#x51C6;
&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x4E0E;&#x5173;&#x952E;&#x5DE5;&#x5177;&#x8C03;&#x7528;
&#x4EE3;&#x7801; Diff &#x4E0E;&#x8FD0;&#x884C;&#x4EA7;&#x7269;
&#x6700;&#x7EC8;&#x9A8C;&#x6536;&#x7ED3;&#x679C;
&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x91CF;&#x4E0E;&#x4FEE;&#x6B63;&#x5185;&#x5BB9;
Token / &#x65F6;&#x95F4; / &#x8F6E;&#x6B21;&#x6210;&#x672C;
&#x5931;&#x8D25;&#x7C7B;&#x578B;&#x4E0E;&#x4ECD;&#x672A;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;
</code></pre>
<p>Trace &#x7528;&#x4E8E;&#x5B9A;&#x4F4D;&#x5931;&#x8D25;&#xFF0C;&#x7ED3;&#x679C;&#x7528;&#x4E8E;&#x786E;&#x8BA4;&#x6539;&#x8FDB;&#xFF1B;&#x4E8C;&#x8005;&#x4E0D;&#x80FD;&#x4E92;&#x76F8;&#x66FF;&#x4EE3;&#x3002;&#x5956;&#x52B1;&#x5E94;&#x4F18;&#x5148;&#x6765;&#x81EA;&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#x548C;&#x53EF;&#x9A8C;&#x8BC1;&#x4EA7;&#x7269;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x201C;Agent &#x8BF4;&#x4E86;&#x4EC0;&#x4E48;&#x201D;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;&#x4E0E;&#x7B56;&#x7565;&#x9009;&#x62E9;"><a href="#&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;&#x4E0E;&#x7B56;&#x7565;&#x9009;&#x62E9;"></a>&#x7B2C;&#x4E09;&#x6B65;&#xFF1A;&#x5355;&#x53D8;&#x91CF;&#x5B9E;&#x9A8C;&#x4E0E;&#x7B56;&#x7565;&#x9009;&#x62E9;</h3>
<p>&#x6BCF;&#x4E2A;&#x5019;&#x9009;&#x6539;&#x8FDB;&#x5355;&#x72EC;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<pre><code class="language-text">&#x76F8;&#x540C;&#x4EFB;&#x52A1;&#x3001;&#x8D77;&#x70B9;&#x3001;&#x9A8C;&#x6536;&#x6807;&#x51C6;
&#x251C;&#x2500; &#x57FA;&#x7EBF;
&#x251C;&#x2500; + Context &#x53D8;&#x5316;
&#x251C;&#x2500; + Skill &#x53D8;&#x5316;
&#x251C;&#x2500; + Tool &#x53D8;&#x5316;
&#x2514;&#x2500; + &#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;&#x53D8;&#x5316;
       &#x2193; &#x6BD4;&#x8F83;
   &#x6700;&#x7EC8;&#x7ED3;&#x679C; / &#x4FEE;&#x6B63;&#x91CF; / &#x6210;&#x672C; / &#x526F;&#x4F5C;&#x7528;
</code></pre>
<p>&#x5355;&#x9879;&#x6709;&#x6548;&#x540E;&#x518D;&#x7EC4;&#x5408;&#xFF0C;&#x7EC4;&#x5408;&#x4ECD;&#x9700;&#x8981;&#x6574;&#x4F53;&#x56DE;&#x5F52;&#x3002;&#x591A;&#x6B21;&#x5B9E;&#x9A8C;&#x540E;&#x603B;&#x7ED3;&#x9002;&#x7528;&#x6761;&#x4EF6;&#xFF0C;&#x8BA9;&#x7CFB;&#x7EDF;&#x6309;&#x4EFB;&#x52A1;&#x7279;&#x5F81;&#x9009;&#x62E9;&#x7B56;&#x7565;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x9ED8;&#x8BA4;&#x6CE8;&#x5165;&#x5168;&#x90E8;&#x80FD;&#x529B;&#x3002;</p>
<h3 id="&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x628A;&#x7B56;&#x7565;&#x7248;&#x672C;&#x5316;"><a href="#&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x628A;&#x7B56;&#x7565;&#x7248;&#x672C;&#x5316;"></a>&#x7B2C;&#x56DB;&#x6B65;&#xFF1A;&#x628A;&#x7B56;&#x7565;&#x7248;&#x672C;&#x5316;</h3>
<p>Context&#x3001;Skill&#x3001;Tool &#x548C;&#x9A8C;&#x8BC1;&#x89C4;&#x5219;&#x4E00;&#x65E6;&#x88AB;&#x5B9E;&#x9A8C;&#x786E;&#x8BA4;&#xFF0C;&#x5C31;&#x4F5C;&#x4E3A;&#x7B56;&#x7565;&#x7248;&#x672C;&#x4FDD;&#x5B58;&#xFF0C;&#x5173;&#x8054;&#xFF1A;</p>
<pre><code class="language-text">&#x9002;&#x7528;&#x4EFB;&#x52A1;&#x7C7B;&#x578B;
&#x8F93;&#x5165;&#x4E0E;&#x9A8C;&#x6536;&#x6807;&#x51C6;
&#x6267;&#x884C;&#x7ED3;&#x679C;
&#x56DE;&#x5F52; Case
&#x66F4;&#x65B0;&#x539F;&#x56E0;
&#x56DE;&#x6EDA;&#x4F9D;&#x636E;
</code></pre>
<p>&#x8FD9;&#x4F7F; Agent &#x7684;&#x6539;&#x8FDB;&#x4ECE;&#x201C;&#x6539;&#x4E86;&#x4E00;&#x7BC7;&#x6587;&#x6863;&#x201D;&#x53D8;&#x6210;&#x201C;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x6BD4;&#x8F83;&#x548C;&#x56DE;&#x6EDA;&#x7684;&#x7B56;&#x7565;&#x7248;&#x672C;&#x201D;&#x3002;</p>
<h3 id="&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x9010;&#x6B65;&#x8FDB;&#x5165;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x4F18;&#x5316;"><a href="#&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x9010;&#x6B65;&#x8FDB;&#x5165;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x4F18;&#x5316;"></a>&#x7B2C;&#x4E94;&#x6B65;&#xFF1A;&#x9010;&#x6B65;&#x8FDB;&#x5165;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x4F18;&#x5316;</h3>
<p>&#x5F53;&#x5DF2;&#x6709;&#x8DB3;&#x591F; Case&#x3001;&#x5956;&#x52B1;&#x548C;&#x53EF;&#x590D;&#x73B0;&#x73AF;&#x5883;&#x65F6;&#xFF0C;&#x53EF;&#x4EE5;&#x5206;&#x4E09;&#x6863;&#x63A8;&#x8FDB;&#xFF1A;</p>
<pre><code class="language-text">&#x79BB;&#x7EBF;&#x7B56;&#x7565;&#x4F18;&#x5316;
&#x2192; &#x7528;&#x5386;&#x53F2;&#x8F68;&#x8FF9;&#x3001;&#x504F;&#x597D;&#x548C;&#x7ED3;&#x679C;&#x8BAD;&#x7EC3; Context Selector / Tool Router / &#x7B56;&#x7565;&#x7248;&#x672C;
&#x7CFB;&#x7EDF;&#x7EA7;&#x81EA;&#x6211;&#x6539;&#x8FDB;
&#x2192; &#x7528;&#x771F;&#x5B9E;&#x7ED3;&#x679C;&#x751F;&#x6210;&#x5019;&#x9009; Skill / Context&#xFF0C;&#x518D;&#x901A;&#x8FC7;&#x65B0; Case &#x9A8C;&#x8BC1;
&#x5728;&#x7EBF;&#x5F3A;&#x5316;&#x5B66;&#x4E60;
&#x2192; &#x5728;&#x9694;&#x79BB;&#x6C99;&#x7BB1;&#x4E2D;&#x6267;&#x884C;&#x7B56;&#x7565;&#x3001;&#x63A5;&#x6536;&#x5956;&#x52B1;&#x3001;&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x6216;&#x7CFB;&#x7EDF;&#x53C2;&#x6570;
</code></pre>
<p>&#x8FD9;&#x4E09;&#x6863;&#x4E0D;&#x5FC5;&#x540C;&#x65F6;&#x542F;&#x52A8;&#x3002;&#x5DE5;&#x7A0B;&#x95ED;&#x73AF;&#x5148;&#x8BC1;&#x660E;&#x201C;&#x53CD;&#x9988;&#x80FD;&#x6539;&#x5584;&#x7ED3;&#x679C;&#x201D;&#xFF0C;&#x518D;&#x8003;&#x8651;&#x6A21;&#x578B;&#x7EA7; RL&#xFF1B;&#x73AF;&#x5883;&#x4E0D;&#x5B89;&#x5168;&#x3001;&#x5956;&#x52B1;&#x4E0D;&#x7A33;&#x5B9A;&#x6216;&#x8BC4;&#x4F30;&#x4E0D;&#x5145;&#x5206;&#x65F6;&#xFF0C;&#x4E0D;&#x5E94;&#x8FDB;&#x5165;&#x5728;&#x7EBF;&#x66F4;&#x65B0;&#x3002;</p>
<h2 id="&#x65B9;&#x6848;&#x7684;&#x5C40;&#x9650;"><a href="#&#x65B9;&#x6848;&#x7684;&#x5C40;&#x9650;"></a>&#x65B9;&#x6848;&#x7684;&#x5C40;&#x9650;</h2>
<ul>
<li><strong>&#x5956;&#x52B1;&#x5B9A;&#x4E49;&#x56F0;&#x96BE;</strong>&#xFF1A;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x7A00;&#x758F;&#x3001;&#x4E3B;&#x89C2;&#x4E14;&#x5E26;&#x566A;&#x58F0;&#xFF1B;Token&#x3001;&#x8F6E;&#x6B21;&#x7B49;&#x4EE3;&#x7406;&#x6307;&#x6807;&#x5BB9;&#x6613;&#x88AB;&#x4F18;&#x5316;&#xFF0C;&#x4F46;&#x4E0D;&#x7B49;&#x4E8E;&#x4EFB;&#x52A1;&#x8D28;&#x91CF;&#x3002;</li>
<li><strong>&#x73AF;&#x5883;&#x566A;&#x58F0;&#x5F71;&#x54CD;&#x5F52;&#x56E0;</strong>&#xFF1A;&#x6A21;&#x578B;&#x7248;&#x672C;&#x3001;&#x4ED3;&#x5E93;&#x72B6;&#x6001;&#x3001;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x3001;&#x7F51;&#x7EDC;&#x548C;&#x968F;&#x673A;&#x91C7;&#x6837;&#x90FD;&#x4F1A;&#x6539;&#x53D8;&#x7ED3;&#x679C;&#xFF0C;&#x5355;&#x6B21;&#x5BF9;&#x6BD4;&#x4E0D;&#x4E00;&#x5B9A;&#x4EE3;&#x8868;&#x771F;&#x5B9E;&#x6548;&#x679C;&#x3002;</li>
<li><strong>&#x6539;&#x8FDB;&#x6765;&#x6E90;&#x96BE;&#x4EE5;&#x5206;&#x79BB;</strong>&#xFF1A;&#x5931;&#x8D25;&#x53EF;&#x80FD;&#x6765;&#x81EA;&#x9700;&#x6C42;&#x7406;&#x89E3;&#x3001;&#x5DE5;&#x7A0B;&#x4FE1;&#x606F;&#x3001;&#x5DE5;&#x5177;&#x80FD;&#x529B;&#x3001;&#x9A8C;&#x8BC1;&#x65B9;&#x5F0F;&#x6216;&#x6A21;&#x578B;&#x672C;&#x8EAB;&#xFF1B;&#x53EA;&#x6539;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x4E5F;&#x53EF;&#x80FD;&#x63A9;&#x76D6;&#x7EC4;&#x5408;&#x95EE;&#x9898;&#x3002;</li>
<li><strong>&#x63A2;&#x7D22;&#x6709;&#x98CE;&#x9669;</strong>&#xFF1A;Agent &#x4F1A;&#x6267;&#x884C;&#x771F;&#x5B9E;&#x547D;&#x4EE4;&#x3001;&#x4FEE;&#x6539;&#x4EE3;&#x7801;&#x6216;&#x8C03;&#x7528;&#x5916;&#x90E8;&#x670D;&#x52A1;&#xFF0C;&#x5FC5;&#x987B;&#x5148;&#x5728;&#x9694;&#x79BB;&#x6C99;&#x7BB1;&#x4E2D;&#x5B89;&#x5168;&#x63A2;&#x7D22;&#x3002;</li>
<li><strong>&#x8BC4;&#x6D4B;&#x5206;&#x5E03;&#x53EF;&#x80FD;&#x5931;&#x771F;</strong>&#xFF1A;Case &#x96C6;&#x53EA;&#x4EE3;&#x8868;&#x8FC7;&#x53BB;&#x89C1;&#x8FC7;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5BF9;&#x672A;&#x77E5;&#x4EFB;&#x52A1;&#x548C;&#x957F;&#x5C3E;&#x573A;&#x666F;&#x53EF;&#x80FD;&#x8FC7;&#x62DF;&#x5408;&#x3002;</li>
<li><strong>&#x6210;&#x672C;&#x53EF;&#x80FD;&#x5F88;&#x9AD8;</strong>&#xFF1A;&#x6837;&#x672C;&#x6536;&#x96C6;&#x3001;&#x4EBA;&#x5DE5;&#x8BC4;&#x5206;&#x3001;&#x8BAD;&#x7EC3;&#x3001;&#x56DE;&#x5F52;&#x548C;&#x6C99;&#x7BB1;&#x8FD0;&#x884C;&#x90FD;&#x9700;&#x8981;&#x6301;&#x7EED;&#x6295;&#x5165;&#x3002;</li>
<li><strong>&#x53EF;&#x89E3;&#x91CA;&#x6027;&#x4E0B;&#x964D;</strong>&#xFF1A;&#x8D8A;&#x63A5;&#x8FD1;&#x6A21;&#x578B;&#x7EA7;&#x7B56;&#x7565;&#x4F18;&#x5316;&#xFF0C;&#x8D8A;&#x96BE;&#x76F4;&#x63A5;&#x89E3;&#x91CA;&#x4E3A;&#x4EC0;&#x4E48;&#x67D0;&#x4E2A;&#x884C;&#x4E3A;&#x88AB;&#x9009;&#x4E2D;&#xFF0C;&#x9700;&#x8981;&#x66F4;&#x5F3A;&#x7684;&#x9A8C;&#x6536;&#x3001;&#x5BA1;&#x8BA1;&#x548C;&#x56DE;&#x6EDA;&#x673A;&#x5236;&#x3002;</li>
</ul>
<p>&#x56E0;&#x6B64;&#xFF0C;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x5F0F;&#x6F14;&#x8FDB;&#x662F;&#x7EC8;&#x70B9;&#x65B9;&#x5411;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8D77;&#x70B9;&#x6377;&#x5F84;&#x3002;&#x7F3A;&#x5C11;&#x6570;&#x636E;&#x3001;&#x53CD;&#x9988;&#x3001;&#x8BC4;&#x4F30;&#x548C;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x65F6;&#xFF0C;&#x5148;&#x628A;&#x95ED;&#x73AF;&#x5EFA;&#x8D77;&#x6765;&#xFF0C;&#x6BD4;&#x76F4;&#x63A5;&#x8BAD;&#x7EC3;&#x66F4;&#x53EF;&#x9760;&#x3002;</p>
<h2 id="&#x7ED3;&#x8BBA;"><a href="#&#x7ED3;&#x8BBA;"></a>&#x7ED3;&#x8BBA;</h2>
<p>&#x901A;&#x7528;&#x7684; Coding Agent &#x8303;&#x5F0F;&#x53EF;&#x4EE5;&#x6982;&#x62EC;&#x4E3A;&#xFF1A;</p>
<blockquote>
<p>&#x628A;&#x5355;&#x6B21;&#x4EFB;&#x52A1;&#x4E2D;&#x7684;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x548C;&#x6700;&#x7EC8;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x6837;&#x672C;&#xFF0C;&#x628A;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x4F5C;&#x4E3A;&#x5956;&#x52B1;&#xFF0C;&#x7528;&#x53EF;&#x590D;&#x73B0;&#x5B9E;&#x9A8C;&#x9010;&#x6B65;&#x4F18;&#x5316; Agent &#x7684;&#x6267;&#x884C;&#x7B56;&#x7565;&#xFF1B;&#x5148;&#x5B8C;&#x6210; Baseline&#x3001;&#x53CD;&#x9988;&#x91C7;&#x96C6;&#x3001;&#x5355;&#x53D8;&#x91CF;&#x9A8C;&#x8BC1;&#x548C;&#x7B56;&#x7565;&#x7248;&#x672C;&#x5316;&#xFF0C;&#x518D;&#x5728;&#x6709;&#x5B89;&#x5168;&#x8FB9;&#x754C;&#x65F6;&#x8FDB;&#x5165;&#x6A21;&#x578B;&#x7EA7;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x3002;</p>
</blockquote>
<p>&#x8FD9;&#x4E2A;&#x8303;&#x5F0F;&#x4E0D;&#x9488;&#x5BF9;&#x67D0;&#x4E00;&#x7C7B;&#x9875;&#x9762;&#x6216;&#x67D0;&#x4E00;&#x79CD;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#xFF0C;&#x800C;&#x662F;&#x9002;&#x7528;&#x4E8E;&#x6240;&#x6709;&#x80FD;&#x591F;&#x4EA7;&#x751F;&#x6784;&#x5EFA;&#x3001;&#x6D4B;&#x8BD5;&#x3001;&#x8FD0;&#x884C;&#x3001;&#x622A;&#x56FE;&#x6216;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x53CD;&#x9988;&#x7684; Coding &#x4EFB;&#x52A1;&#x3002;</p>
<h2 id="&#x5173;&#x8054;&#x65B9;&#x6848;"><a href="#&#x5173;&#x8054;&#x65B9;&#x6848;"></a>&#x5173;&#x8054;&#x65B9;&#x6848;</h2>
<ul>
<li><a href="./Agent%20%E7%9A%84%E5%88%86%E6%B2%BB%E5%BC%8F%E6%BC%94%E8%BF%9B%EF%BC%9A%E4%BB%BB%E5%8A%A1%E8%A7%A3%E8%80%A6%E4%B8%8E%E5%B1%80%E9%83%A8%E5%8F%8D%E9%A6%88%E9%97%AD%E7%8E%AF.md">Agent &#x7684;&#x5206;&#x6CBB;&#x5F0F;&#x6F14;&#x8FDB;&#xFF1A;&#x4EFB;&#x52A1;&#x89E3;&#x8026;&#x4E0E;&#x5C40;&#x90E8;&#x53CD;&#x9988;&#x95ED;&#x73AF;</a>&#xFF1A;&#x5C06;&#x957F;&#x4EFB;&#x52A1;&#x62C6;&#x6210;&#x5C40;&#x90E8;&#x95ED;&#x73AF;&#xFF0C;&#x4E3A;&#x7B56;&#x7565;&#x5B9E;&#x9A8C;&#x63D0;&#x4F9B;&#x53EF;&#x590D;&#x73B0;&#x5355;&#x5143;&#x3002;</li>
<li><a href="./%E9%9D%A2%E5%90%91%20RSI%20%E7%9A%84%20Coding%20Agent%EF%BC%9A%E4%BB%8E%E4%BB%BB%E5%8A%A1%E5%8F%8D%E9%A6%88%E5%88%B0%E6%96%B9%E6%B3%95%E8%BF%AD%E4%BB%A3.md">&#x9762;&#x5411; RSI &#x7684; Coding Agent&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x5230;&#x65B9;&#x6CD5;&#x8FED;&#x4EE3;</a>&#xFF1A;&#x4ECE;&#x4EFB;&#x52A1;&#x53CD;&#x9988;&#x6539;&#x8FDB; Skill / Tool / Context&#xFF0C;&#x5E76;&#x8FED;&#x4EE3;&#x6539;&#x8FDB;&#x65B9;&#x6CD5;&#x672C;&#x8EAB;&#x3002;</li>
<li><a href="./Agent%20%E6%94%B9%E8%BF%9B%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%EF%BC%9A%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%8F%8D%E9%A6%88%E9%87%87%E9%9B%86.md">Agent &#x6539;&#x8FDB;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;&#xFF1A;&#x4E0A;&#x4E0B;&#x6587;&#x8BBE;&#x8BA1;&#x4E0E;&#x53CD;&#x9988;&#x91C7;&#x96C6;</a>&#xFF1A;&#x53CD;&#x9988;&#x91C7;&#x96C6;&#x4E0E;&#x7ED3;&#x679C;&#x6807;&#x6CE8;&#x7684;&#x6700;&#x5C0F;&#x5DE5;&#x7A0B;&#x57FA;&#x7840;&#x3002;</li>
<li><a href="./RN%20Screenshot-to-Page%20Agent%20%E8%B7%AF%E5%BE%84%E4%BC%98%E5%8C%96%EF%BC%9A%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88%E6%80%9D%E8%80%83.md">RN Screenshot-to-Page Agent &#x8DEF;&#x5F84;&#x4F18;&#x5316;&#xFF1A;&#x6280;&#x672F;&#x65B9;&#x6848;&#x601D;&#x8003;</a>&#xFF1A;&#x9875;&#x9762;&#x8FD8;&#x539F;&#x573A;&#x666F;&#x4E2D;&#x7684;&#x5177;&#x4F53;&#x843D;&#x5730;&#x65B9;&#x6848;&#x3002;</li>
<li><a href="./RN%E9%A1%B5%E9%9D%A2%E8%BF%98%E5%8E%9F%EF%BC%9A%E9%98%B6%E6%AE%B5%E6%8E%A8%E8%BF%9B%E4%B8%8E%E9%AA%8C%E6%94%B6.md">RN &#x9875;&#x9762;&#x8FD8;&#x539F;&#xFF1A;&#x516D;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;</a>&#xFF1A;&#x4ECE; Baseline &#x5230;&#x6D88;&#x878D;&#x5B9E;&#x9A8C;&#x518D;&#x5230;&#x7B56;&#x7565;&#x9009;&#x62E9;&#x7684;&#x9636;&#x6BB5;&#x63A8;&#x8FDB;&#x793A;&#x4F8B;&#x3002;</li>
</ul>
<h2 id="&#x5916;&#x90E8;&#x53C2;&#x8003;"><a href="#&#x5916;&#x90E8;&#x53C2;&#x8003;"></a>&#x5916;&#x90E8;&#x53C2;&#x8003;</h2>
<ul>
<li><a href="https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents">Anthropic Agent Evals</a>&#xFF1A;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x73AF;&#x5883;&#x7ED3;&#x679C;&#x4E0E;&#x8BC4;&#x4F30;&#x7684;&#x533A;&#x5206;&#x3002;</li>
<li><a href="https://arxiv.org/abs/2502.10325">AgentPRM</a>&#xFF1A;&#x8FC7;&#x7A0B;&#x53CD;&#x9988;&#x3001;&#x7B56;&#x7565;&#x4F18;&#x5316;&#x4E0E;&#x5956;&#x52B1;&#x4F30;&#x8BA1;&#x7684;&#x8FB9;&#x754C;&#x3002;</li>
</ul>
`,E=[{level:1,title:"Coding Agent 的强化学习式演进：从任务反馈到策略优化",children:[{level:2,title:"背景现象",children:[]},{level:2,title:"为什么是强化学习式演进",children:[]},{level:2,title:"与其他策略的对比",children:[{level:3,title:"堆积 Context 与 Prompt",children:[]},{level:3,title:"静态规则与流程编排",children:[]},{level:3,title:"行为克隆 / 从成功样本学习",children:[]},{level:3,title:"单任务自适应搜索",children:[]},{level:3,title:"强化学习式策略优化",children:[]}]},{level:2,title:"如何推进",children:[{level:3,title:"第一步：建立可复现 Baseline",children:[]},{level:3,title:"第二步：采集结果证据，不把 Trace 当奖励",children:[]},{level:3,title:"第三步：单变量实验与策略选择",children:[]},{level:3,title:"第四步：把策略版本化",children:[]},{level:3,title:"第五步：逐步进入强化学习式优化",children:[]}]},{level:2,title:"方案的局限",children:[]},{level:2,title:"结论",children:[]},{level:2,title:"关联方案",children:[]},{level:2,title:"外部参考",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
