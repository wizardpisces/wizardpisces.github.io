const x={title:"评估世界萃取：与 Skill 协同演进的验证机制",description:"从真实任务中同时提炼执行方法与评估环境，通过环境校验、方法验证和反馈回流，让 Skill 与评估能力共同积累。"},E=`<h1 id="&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#xFF1A;&#x4E0E; Skill &#x534F;&#x540C;&#x6F14;&#x8FDB;&#x7684;&#x9A8C;&#x8BC1;&#x673A;&#x5236;"><a href="#&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#xFF1A;&#x4E0E; Skill &#x534F;&#x540C;&#x6F14;&#x8FDB;&#x7684;&#x9A8C;&#x8BC1;&#x673A;&#x5236;"></a>&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x8403;&#x53D6;&#xFF1A;&#x4E0E; Skill &#x534F;&#x540C;&#x6F14;&#x8FDB;&#x7684;&#x9A8C;&#x8BC1;&#x673A;&#x5236;</h1>
<h2 id="&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;"><a href="#&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;"></a>&#x80CC;&#x666F;&#x4E0E;&#x76EE;&#x6807;</h2>
<p>&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x7559;&#x4E0B;&#x884C;&#x52A8;&#x3001;&#x4EA7;&#x7269;&#x3001;&#x73AF;&#x5883;&#x53CD;&#x9988;&#x548C;&#x4EBA;&#x5DE5;&#x4FEE;&#x6B63;&#x3002;&#x8FD9;&#x4E9B;&#x6750;&#x6599;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x63D0;&#x70BC; Skill&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#x6062;&#x590D;&#x4EFB;&#x52A1;&#x6761;&#x4EF6;&#x3001;&#x6784;&#x9020;&#x9A8C;&#x6536;&#x573A;&#x666F;&#xFF0C;&#x68C0;&#x9A8C;&#x540E;&#x7EED;&#x65B9;&#x6CD5;&#x662F;&#x5426;&#x6709;&#x6548;&#x3002;</p>
<p>&#x5982;&#x679C;&#x53EA;&#x4FDD;&#x7559; Skill&#xFF0C;&#x539F;&#x6765;&#x7684;&#x95EE;&#x9898;&#x548C;&#x9A8C;&#x6536;&#x6761;&#x4EF6;&#x4F1A;&#x9010;&#x6E10;&#x4E22;&#x5931;&#xFF1B;&#x5982;&#x679C;&#x540C;&#x65F6;&#x4FDD;&#x7559;&#x80FD;&#x591F;&#x91CD;&#x65B0;&#x6267;&#x884C;&#x4E0E;&#x8BC4;&#x4EF7;&#x7684;&#x73AF;&#x5883;&#xFF0C;&#x6BCF;&#x6B21;&#x65B9;&#x6CD5;&#x4FEE;&#x8BA2;&#x5C31;&#x6709;&#x4E86;&#x53EF;&#x6BD4;&#x8F83;&#x7684;&#x4F9D;&#x636E;&#x3002;</p>
<p>&#x672C;&#x65B9;&#x6848;&#x4ECE;&#x540C;&#x4E00;&#x6B21;&#x4EFB;&#x52A1;&#x4E2D;&#x8403;&#x53D6;&#x4E24;&#x7C7B;&#x4EA7;&#x7269;&#xFF1A;Skill &#x6C89;&#x6DC0;&#x600E;&#x6837;&#x5B8C;&#x6210;&#x4EFB;&#x52A1;&#xFF0C;&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#xFF08;Env&#xFF09;&#x6C89;&#x6DC0;&#x4EFB;&#x52A1;&#x5728;&#x4EC0;&#x4E48;&#x6761;&#x4EF6;&#x4E0B;&#x53D1;&#x751F;&#x3001;Agent &#x53EF;&#x4EE5;&#x600E;&#x6837;&#x4EA4;&#x4E92;&#xFF0C;&#x4EE5;&#x53CA;&#x7ED3;&#x679C;&#x5982;&#x4F55;&#x88AB;&#x8BC4;&#x4EF7;&#x3002;&#x4E24;&#x7C7B;&#x4EA7;&#x7269;&#x901A;&#x8FC7;&#x5B9E;&#x9645;&#x4F7F;&#x7528;&#x5171;&#x540C;&#x6F14;&#x8FDB;&#x3002;</p>
<h2 id="&#x6574;&#x4F53;&#x673A;&#x5236;"><a href="#&#x6574;&#x4F53;&#x673A;&#x5236;"></a>&#x6574;&#x4F53;&#x673A;&#x5236;</h2>
<pre><code class="language-text">&#x4EFB;&#x52A1;&#x76EE;&#x6807;&#x3001;&#x6267;&#x884C;&#x8F68;&#x8FF9;&#x3001;&#x4EA7;&#x7269;&#x4E0E;&#x4EBA;&#x5DE5;&#x53CD;&#x9988;
                  &#x2193;
          &#x540C;&#x4E00;&#x4E2A;&#x5206;&#x6790;&#x5DE5;&#x4F5C;&#x7A7A;&#x95F4;
           &#x2199;             &#x2198;
Skill Creator         Env Creator
&#x63D0;&#x70BC;&#x6267;&#x884C;&#x65B9;&#x6CD5;           &#x8403;&#x53D6;&#x8BC4;&#x4F30;&#x4E16;&#x754C;
           &#x2198;             &#x2199;
         Agent &#x91C7;&#x7528; Skill&#xFF0C;&#x5728; Env &#x4E2D;&#x6267;&#x884C;
                  &#x2193;
         &#x884C;&#x4E3A;&#x3001;&#x7ED3;&#x679C;&#x3001;&#x8BC4;&#x4EF7;&#x4E0E;&#x4FEE;&#x6B63;
           &#x2199;             &#x2198;
       &#x4FEE;&#x8BA2; Skill       &#x5B8C;&#x5584; Env
</code></pre>
<p>&#x4EBA;&#x5DE5;&#x5148;&#x786E;&#x8BA4;&#x5019;&#x9009; Skill &#x7684;&#x5185;&#x5BB9;&#x4E0E;&#x9002;&#x7528;&#x8303;&#x56F4;&#xFF0C;Env Creator &#x636E;&#x6B64;&#x9009;&#x62E9;&#x76F8;&#x5173;&#x4EFB;&#x52A1;&#x7247;&#x6BB5;&#x3001;&#x6062;&#x590D;&#x6267;&#x884C;&#x6761;&#x4EF6;&#x5E76;&#x6784;&#x9020;&#x8BC4;&#x4EF7;&#x3002;Skill &#x7684;&#x5B9E;&#x9645;&#x6548;&#x679C;&#x901A;&#x8FC7;&#x73AF;&#x5883;&#x4E2D;&#x7684;&#x6267;&#x884C;&#x7ED3;&#x679C;&#x68C0;&#x9A8C;&#x3002;</p>
<h2 id="&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x5305;&#x542B;&#x4EC0;&#x4E48;"><a href="#&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x5305;&#x542B;&#x4EC0;&#x4E48;"></a>&#x8BC4;&#x4F30;&#x4E16;&#x754C;&#x5305;&#x542B;&#x4EC0;&#x4E48;</h2>
<table>
<thead>
<tr>
<th>&#x90E8;&#x5206;</th>
<th>&#x5185;&#x5BB9;&#x4E0E;&#x4F5C;&#x7528;</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x521D;&#x59CB;&#x72B6;&#x6001;</td>
<td>&#x6062;&#x590D;&#x4EFB;&#x52A1;&#x5F00;&#x59CB;&#x65F6;&#x7684;&#x4EE3;&#x7801;&#x6216;&#x6587;&#x6863;&#x3001;&#x76F8;&#x5173;&#x6570;&#x636E;&#x4E0E;&#x914D;&#x7F6E;</td>
</tr>
<tr>
<td>&#x4EA4;&#x4E92;&#x6761;&#x4EF6;</td>
<td>&#x63D0;&#x4F9B;&#x53EF;&#x64CD;&#x4F5C;&#x5BF9;&#x8C61;&#x3001;&#x5DE5;&#x5177;&#x3001;&#x4F9D;&#x8D56;&#x670D;&#x52A1;&#xFF0C;&#x4EE5;&#x53CA;&#x5FC5;&#x8981;&#x7684; Fixture &#x6216; Mock</td>
</tr>
<tr>
<td>&#x4EFB;&#x52A1;&#x76EE;&#x6807;</td>
<td>&#x4FDD;&#x7559;&#x539F;&#x59CB;&#x8981;&#x6C42;&#x3001;&#x7EA6;&#x675F;&#x548C;&#x5141;&#x8BB8;&#x53D8;&#x5316;&#x7684;&#x8303;&#x56F4;</td>
</tr>
<tr>
<td>&#x8BC4;&#x4EF7;&#x673A;&#x5236;</td>
<td>&#x5B9A;&#x4E49;&#x68C0;&#x67E5;&#x65B9;&#x5F0F;&#x3001;&#x6240;&#x9700;&#x8BC1;&#x636E;&#x3001;&#x4EBA;&#x5DE5;&#x9A8C;&#x6536;&#x6761;&#x4EF6;&#x53CA;&#x5DF2;&#x77E5;&#x8BC4;&#x4EF7;&#x8FB9;&#x754C;</td>
</tr>
</tbody>
</table>
<p>Env &#x5E94;&#x5141;&#x8BB8; Agent &#x6839;&#x636E;&#x884C;&#x52A8;&#x83B7;&#x5F97;&#x65B0;&#x7684;&#x73AF;&#x5883;&#x54CD;&#x5E94;&#xFF0C;&#x5E76;&#x9009;&#x62E9;&#x4E0D;&#x540C;&#x7684;&#x89E3;&#x51B3;&#x8DEF;&#x5F84;&#x3002;&#x4EFB;&#x52A1;&#x76EE;&#x6807;&#x548C;&#x9A8C;&#x6536;&#x6761;&#x4EF6;&#x6765;&#x81EA;&#x9700;&#x6C42;&#x3001;&#x5DE5;&#x7A0B;&#x7EA6;&#x675F;&#x4E0E;&#x4EBA;&#x5DE5;&#x786E;&#x8BA4;&#xFF1B;&#x5019;&#x9009; Skill &#x662F;&#x63A5;&#x53D7;&#x68C0;&#x9A8C;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="Env Creator &#x5982;&#x4F55;&#x8403;&#x53D6;&#x73AF;&#x5883;"><a href="#Env Creator &#x5982;&#x4F55;&#x8403;&#x53D6;&#x73AF;&#x5883;"></a>Env Creator &#x5982;&#x4F55;&#x8403;&#x53D6;&#x73AF;&#x5883;</h2>
<h3 id="&#x4ECE;&#x95EE;&#x9898;&#x8303;&#x56F4;&#x6062;&#x590D;&#x6267;&#x884C;&#x6761;&#x4EF6;"><a href="#&#x4ECE;&#x95EE;&#x9898;&#x8303;&#x56F4;&#x6062;&#x590D;&#x6267;&#x884C;&#x6761;&#x4EF6;"></a>&#x4ECE;&#x95EE;&#x9898;&#x8303;&#x56F4;&#x6062;&#x590D;&#x6267;&#x884C;&#x6761;&#x4EF6;</h3>
<p>&#x56F4;&#x7ED5;&#x5019;&#x9009; Skill &#x6240;&#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x9009;&#x62E9;&#x76F8;&#x5173;&#x4EFB;&#x52A1;&#x3001;&#x5931;&#x8D25;&#x4E0E;&#x4FEE;&#x6B63;&#x7247;&#x6BB5;&#xFF0C;&#x63D0;&#x53D6;&#x6267;&#x884C;&#x6240;&#x9700;&#x7684;&#x6700;&#x5C0F;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x4EE3;&#x7801;&#x4EFB;&#x52A1;&#x6062;&#x590D;&#x8D77;&#x70B9; Commit&#x3001;&#x76F8;&#x5173;&#x672A;&#x63D0;&#x4EA4;&#x6539;&#x52A8;&#x3001;&#x4F9D;&#x8D56;&#x548C;&#x6D4B;&#x8BD5;&#x6570;&#x636E;&#xFF1B;&#x6587;&#x6863;&#x4EFB;&#x52A1;&#x6062;&#x590D;&#x539F;&#x6587;&#x3001;&#x4FEE;&#x6539;&#x8981;&#x6C42;&#x3001;&#x4EBA;&#x5DE5;&#x8BC4;&#x8BBA;&#x53CA;&#x524D;&#x540E; diff&#x3002;&#x6700;&#x7EC8;&#x5B9E;&#x73B0;&#x548C;&#x4FEE;&#x6539; diff &#x4F5C;&#x4E3A;&#x8BC4;&#x4EF7;&#x53C2;&#x8003;&#xFF0C;&#x4FDD;&#x7559;&#x4EA7;&#x751F;&#x8FD9;&#x4E9B;&#x53D8;&#x5316;&#x7684;&#x8981;&#x6C42;&#x4E0E;&#x7406;&#x7531;&#x3002;</p>
<p>&#x8D77;&#x70B9;&#x4E0E;&#x5173;&#x952E;&#x8FC7;&#x7A0B;&#x8BC1;&#x636E;&#x9700;&#x8981;&#x5728;&#x539F;&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x65F6;&#x4FDD;&#x5B58;&#x3002;&#x590D;&#x76D8;&#x9636;&#x6BB5;&#x68C0;&#x67E5;&#x6750;&#x6599;&#x662F;&#x5426;&#x5145;&#x5206;&#xFF0C;&#x6807;&#x51FA;&#x65E0;&#x6CD5;&#x6062;&#x590D;&#x7684;&#x4F9D;&#x8D56;&#x548C;&#x6761;&#x4EF6;&#xFF0C;&#x4F9B;&#x4EBA;&#x5DE5;&#x51B3;&#x5B9A;&#x8865;&#x8BC1;&#x6216;&#x7F29;&#x5C0F;&#x8BC4;&#x4F30;&#x8303;&#x56F4;&#x3002;</p>
<h3 id="&#x6784;&#x9020;&#x4EFB;&#x52A1;&#x5165;&#x53E3;&#x4E0E;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;"><a href="#&#x6784;&#x9020;&#x4EFB;&#x52A1;&#x5165;&#x53E3;&#x4E0E;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;"></a>&#x6784;&#x9020;&#x4EFB;&#x52A1;&#x5165;&#x53E3;&#x4E0E;&#x8BC4;&#x4EF7;&#x65B9;&#x5F0F;</h3>
<p>Env Creator &#x5C06;&#x539F;&#x59CB;&#x8981;&#x6C42;&#x6574;&#x7406;&#x4E3A;&#x53EF;&#x518D;&#x6B21;&#x4EA4;&#x7ED9; Agent &#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x914D;&#x7F6E;&#x76F8;&#x5173;&#x5DE5;&#x5177;&#x548C;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x4ECE;&#x539F;&#x6709;&#x9A8C;&#x6536;&#x4E2D;&#x63D0;&#x53D6;&#x68C0;&#x67E5;&#x9879;&#x3002;</p>
<p>&#x6267;&#x884C;&#x4FA7;&#x83B7;&#x5F97;&#x4EFB;&#x52A1;&#x3001;&#x8D77;&#x70B9;&#x4E0E;&#x5FC5;&#x8981;&#x4E0A;&#x4E0B;&#x6587;&#xFF1B;&#x8BC4;&#x4EF7;&#x4FA7;&#x4FDD;&#x7559;&#x53C2;&#x8003;&#x7ED3;&#x679C;&#x3001;&#x5931;&#x8D25;&#x8BC1;&#x636E;&#x548C;&#x68C0;&#x67E5;&#x4F9D;&#x636E;&#x3002;&#x5DF2;&#x77E5;&#x4FEE;&#x590D;&#x8FC7;&#x7A0B;&#x7528;&#x4E8E;&#x5206;&#x6790;&#x4E0E;&#x8BC4;&#x4EF7;&#xFF0C;&#x907F;&#x514D;&#x5C06;&#x6765;&#x6E90;&#x4EFB;&#x52A1;&#x7684;&#x5B8C;&#x6574;&#x7B54;&#x6848;&#x76F4;&#x63A5;&#x63D0;&#x4F9B;&#x7ED9;&#x5F85;&#x6D4B; Agent&#x3002;</p>
<h3 id="&#x6821;&#x9A8C;&#x73AF;&#x5883;&#x672C;&#x8EAB;"><a href="#&#x6821;&#x9A8C;&#x73AF;&#x5883;&#x672C;&#x8EAB;"></a>&#x6821;&#x9A8C;&#x73AF;&#x5883;&#x672C;&#x8EAB;</h3>
<p>&#x751F;&#x6210;&#x7684; Env &#x9700;&#x8981;&#x63A5;&#x53D7;&#x4EBA;&#x5DE5; Review &#x548C;&#x6837;&#x672C;&#x6821;&#x9A8C;&#xFF1A;</p>
<pre><code class="language-text">&#x5DF2;&#x77E5;&#x6EE1;&#x8DB3;&#x8981;&#x6C42;&#x7684;&#x7ED3;&#x679C; &#x2192; &#x80FD;&#x591F;&#x8BC6;&#x522B;&#x5176;&#x6709;&#x6548;&#x6027;
&#x5DF2;&#x77E5;&#x8FDD;&#x53CD;&#x8981;&#x6C42;&#x7684;&#x7ED3;&#x679C; &#x2192; &#x80FD;&#x591F;&#x53D1;&#x73B0;&#x5BF9;&#x5E94;&#x5931;&#x8D25;
&#x4E0D;&#x540C;&#x5B9E;&#x73B0;&#x7684;&#x5408;&#x6CD5;&#x7ED3;&#x679C; &#x2192; &#x80FD;&#x591F;&#x6309;&#x76F8;&#x540C;&#x8981;&#x6C42;&#x8BC4;&#x4EF7;
</code></pre>
<p>&#x4F8B;&#x5982;&#xFF0C;&#x6807;&#x9898;&#x680F; Env &#x5E94;&#x80FD;&#x53D1;&#x73B0;&#x56DE;&#x8C03;&#x7F3A;&#x5931;&#x6216;&#x95F4;&#x8DDD;&#x4E0D;&#x7B26;&#xFF0C;&#x4E5F;&#x5E94;&#x63A5;&#x53D7;&#x6EE1;&#x8DB3;&#x8981;&#x6C42;&#x7684;&#x53E6;&#x4E00;&#x79CD;&#x5B9E;&#x73B0;&#x3002;&#x6821;&#x9A8C;&#x7ED3;&#x679C;&#x66B4;&#x9732;&#x4EFB;&#x52A1;&#x6761;&#x4EF6;&#x3001;&#x89C2;&#x5BDF;&#x80FD;&#x529B;&#x6216;&#x8BC4;&#x4EF7;&#x6807;&#x51C6;&#x7684;&#x7F3A;&#x53E3;&#xFF0C;&#x518D;&#x53CD;&#x9988;&#x7ED9; Env Creator &#x4FEE;&#x8BA2;&#x3002;</p>
<h2 id="Skill &#x4E0E; Env &#x5982;&#x4F55;&#x534F;&#x540C;&#x6F14;&#x8FDB;"><a href="#Skill &#x4E0E; Env &#x5982;&#x4F55;&#x534F;&#x540C;&#x6F14;&#x8FDB;"></a>Skill &#x4E0E; Env &#x5982;&#x4F55;&#x534F;&#x540C;&#x6F14;&#x8FDB;</h2>
<p>&#x4E24;&#x8005;&#x90FD;&#x53EF;&#x4EE5;&#x53D8;&#x5316;&#xFF0C;&#x4F46;&#x6BCF;&#x6B21;&#x6BD4;&#x8F83;&#x56FA;&#x5B9A;&#x76F8;&#x5E94;&#x7684;&#x5BF9;&#x8C61;&#xFF1A;</p>
<pre><code class="language-text">&#x9A8C;&#x8BC1; Skill&#xFF1A;
&#x56FA;&#x5B9A; Env &#x2192; &#x6BD4;&#x8F83;&#x65E7; Skill &#x4E0E;&#x5019;&#x9009; Skill &#x7684;&#x884C;&#x4E3A;&#x548C;&#x7ED3;&#x679C;

&#x9A8C;&#x8BC1; Env&#xFF1A;
&#x56FA;&#x5B9A;&#x53C2;&#x8003;&#x6837;&#x672C; &#x2192; &#x68C0;&#x67E5;&#x65B0; Env &#x7684;&#x6062;&#x590D;&#x80FD;&#x529B;&#x4E0E;&#x8BC4;&#x4EF7;&#x8868;&#x73B0;
            &#x2192; &#x5FC5;&#x8981;&#x65F6;&#x91CD;&#x65B0;&#x8BC4;&#x4F30;&#x5DF2;&#x6709; Skills
</code></pre>
<p>&#x73AF;&#x5883;&#x53D8;&#x5316;&#x4FDD;&#x7559;&#x539F;&#x56E0;&#x4E0E;&#x5F71;&#x54CD;&#x8303;&#x56F4;&#x3002;&#x9A8C;&#x6536;&#x6807;&#x51C6;&#x6539;&#x53D8;&#x540E;&#xFF0C;&#x65B0;&#x65E7;&#x7ED3;&#x679C;&#x5206;&#x522B;&#x5BF9;&#x5E94;&#x5404;&#x81EA;&#x6761;&#x4EF6;&#xFF1B;&#x6BD4;&#x8F83;&#x540C;&#x4E00; Skill &#x7684;&#x6539;&#x8FDB;&#x65F6;&#xFF0C;&#x4F7F;&#x7528;&#x4E00;&#x81F4;&#x7684;&#x73AF;&#x5883;&#x548C;&#x6807;&#x51C6;&#x3002;</p>
<h2 id="&#x4ECE; Env Creator &#x5230; Meta-env-creator"><a href="#&#x4ECE; Env Creator &#x5230; Meta-env-creator"></a>&#x4ECE; Env Creator &#x5230; Meta-env-creator</h2>
<p>Env Creator &#x8D1F;&#x8D23;&#x5177;&#x4F53;&#x73AF;&#x5883;&#x7684;&#x8403;&#x53D6;&#x4E0E;&#x4FEE;&#x8BA2;&#x3002;Meta-env-creator &#x8D1F;&#x8D23;&#x4ECE;&#x53CD;&#x590D;&#x51FA;&#x73B0;&#x7684;&#x73AF;&#x5883;&#x95EE;&#x9898;&#x4E2D;&#xFF0C;&#x6539;&#x8FDB;&#x53D6;&#x8BC1;&#x3001;&#x6062;&#x590D;&#x3001;&#x573A;&#x666F;&#x6784;&#x9020;&#x548C;&#x8BC4;&#x4EF7;&#x6821;&#x9A8C;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<pre><code class="language-text">&#x67D0;&#x4E2A; Env &#x9057;&#x6F0F;&#x5FC5;&#x8981;&#x6570;&#x636E; &#x2192; &#x8865;&#x9F50;&#x8BE5;&#x73AF;&#x5883;

&#x591A;&#x4E2A; Env &#x53CD;&#x590D;&#x9057;&#x6F0F;&#x6267;&#x884C;&#x6761;&#x4EF6;
  &#x2192; &#x5206;&#x6790;&#x8403;&#x53D6;&#x65B9;&#x6CD5;&#x7684;&#x7F3A;&#x53E3;
  &#x2192; &#x4FEE;&#x8BA2; Env Creator &#x7684;&#x6307;&#x5BFC;&#x6216;&#x5DE5;&#x5177;
  &#x2192; &#x5728;&#x72EC;&#x7ACB;&#x4EFB;&#x52A1;&#x4E2D;&#x9A8C;&#x8BC1;&#x65B0;&#x65B9;&#x6CD5;
</code></pre>
<p>&#x8F93;&#x5165;&#x5305;&#x62EC;&#x73AF;&#x5883;&#x6784;&#x5EFA;&#x8FC7;&#x7A0B;&#x3001;&#x6062;&#x590D;&#x5931;&#x8D25;&#x3001;&#x9519;&#x8BEF;&#x5224;&#x5B9A;&#x3001;&#x4EBA;&#x5DE5;&#x7EA0;&#x6B63;&#xFF0C;&#x4EE5;&#x53CA;&#x540E;&#x7EED; Skill &#x7684;&#x5E94;&#x7528;&#x7ED3;&#x679C;&#x3002;&#x4EBA;&#x5DE5;&#x5BA1;&#x6838;&#x751F;&#x6210;&#x65B9;&#x6CD5;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x51CF;&#x5C11;&#x9057;&#x6F0F;&#x548C;&#x8BEF;&#x5224;&#x3001;&#x662F;&#x5426;&#x589E;&#x52A0;&#x6062;&#x590D;&#x6210;&#x672C;&#x3002;</p>
<p>&#x8865;&#x5145;&#x65B0;&#x573A;&#x666F;&#x6269;&#x5C55;&#x7684;&#x662F;&#x8BC4;&#x4F30;&#x8986;&#x76D6;&#xFF1B;&#x6539;&#x8FDB;&#x751F;&#x6210;&#x573A;&#x666F;&#x4E0E;&#x8BC4;&#x4EF7;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x624D;&#x8FDB;&#x5165; meta &#x5C42;&#x3002;&#x8BE5;&#x673A;&#x5236;&#x4F5C;&#x4E3A;&#x540E;&#x7EED;&#x63A2;&#x7D22;&#xFF0C;&#x5148;&#x4FDD;&#x7559;&#x76F8;&#x5E94;&#x8FC7;&#x7A0B;&#x4E0E;&#x53CD;&#x9988;&#x3002;</p>
<h2 id="&#x521D;&#x6B65;&#x9A8C;&#x8BC1;&#x8303;&#x56F4;"><a href="#&#x521D;&#x6B65;&#x9A8C;&#x8BC1;&#x8303;&#x56F4;"></a>&#x521D;&#x6B65;&#x9A8C;&#x8BC1;&#x8303;&#x56F4;</h2>
<p>&#x521D;&#x7248;&#x56F4;&#x7ED5;&#x4E00;&#x4E2A;&#x771F;&#x5B9E;&#x4EFB;&#x52A1;&#x95EE;&#x9898;&#xFF0C;&#x9A8C;&#x8BC1;&#x73AF;&#x5883;&#x8403;&#x53D6;&#x4E0E;&#x65B9;&#x6CD5;&#x8BC4;&#x4F30;&#x80FD;&#x5426;&#x8FDE;&#x63A5;&#x8D77;&#x6765;&#xFF1A;</p>
<ul>
<li>&#x80FD;&#x5426;&#x6062;&#x590D;&#x4EFB;&#x52A1;&#x8D77;&#x70B9;&#xFF0C;&#x5E76;&#x8BA9; Agent &#x91CD;&#x65B0;&#x5F00;&#x5C55;&#x4EA4;&#x4E92;&#x3002;</li>
<li>&#x80FD;&#x5426;&#x4F9D;&#x636E;&#x539F;&#x59CB;&#x8981;&#x6C42;&#x8BC4;&#x4EF7;&#x5DF2;&#x77E5;&#x6210;&#x529F;&#x3001;&#x5931;&#x8D25;&#x53CA;&#x5408;&#x6CD5;&#x66FF;&#x4EE3;&#x7ED3;&#x679C;&#x3002;</li>
<li>&#x80FD;&#x5426;&#x5728;&#x540C;&#x4E00; Env &#x4E2D;&#x6BD4;&#x8F83;&#x5019;&#x9009; Skill&#xFF0C;&#x56DE;&#x67E5;&#x884C;&#x4E3A;&#x3001;&#x7ED3;&#x679C;&#x4E0E;&#x8BC1;&#x636E;&#x3002;</li>
<li>&#x65B0;&#x53D1;&#x73B0;&#x7684;&#x95EE;&#x9898;&#x80FD;&#x5426;&#x53CD;&#x9988;&#x4E3A; Skill &#x4FEE;&#x8BA2;&#x3001;&#x73AF;&#x5883;&#x8865;&#x5145;&#x6216;&#x660E;&#x786E;&#x7684;&#x8BC1;&#x636E;&#x7F3A;&#x53E3;&#x3002;</li>
</ul>
<p>&#x5148;&#x9A8C;&#x8BC1;&#x8FD9;&#x6761;&#x95ED;&#x73AF;&#xFF0C;&#x518D;&#x6839;&#x636E;&#x6062;&#x590D;&#x6210;&#x672C;&#x3001;&#x8BC4;&#x4EF7;&#x53EF;&#x9760;&#x6027;&#x548C;&#x573A;&#x666F;&#x590D;&#x7528;&#x60C5;&#x51B5;&#xFF0C;&#x5224;&#x65AD;&#x73AF;&#x5883;&#x751F;&#x6210;&#x4E0E; meta &#x5C42;&#x81EA;&#x52A8;&#x5316;&#x7684;&#x6295;&#x5165;&#x3002;</p>
`,F=[{level:1,title:"评估世界萃取：与 Skill 协同演进的验证机制",children:[{level:2,title:"背景与目标",children:[]},{level:2,title:"整体机制",children:[]},{level:2,title:"评估世界包含什么",children:[]},{level:2,title:"Env Creator 如何萃取环境",children:[{level:3,title:"从问题范围恢复执行条件",children:[]},{level:3,title:"构造任务入口与评价方式",children:[]},{level:3,title:"校验环境本身",children:[]}]},{level:2,title:"Skill 与 Env 如何协同演进",children:[]},{level:2,title:"从 Env Creator 到 Meta-env-creator",children:[]},{level:2,title:"初步验证范围",children:[]}]}];export{x as attributes,E as html,F as nestedHeaders};
