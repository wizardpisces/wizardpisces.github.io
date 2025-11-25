const x={},F=`<p><strong>Claude &#x7684; JIT &#x68C0;&#x7D22;&#x5176;&#x5B9E;&#x5C31;&#x662F;&#x201C;&#x5728;&#x5BF9;&#x8BDD;&#x65F6;&#x4E34;&#x65F6;&#x505A;&#x7D22;&#x5F15;&#x201D;&#xFF0C;&#x56E0;&#x6B64;&#x6709;&#x51B7;&#x542F;&#x52A8;&#x6210;&#x672C;&#xFF1B;
&#x800C;&#x7C7B;&#x4F3C; zilliz/claude-context &#x7684; MCP &#x63D2;&#x4EF6;&#x63D0;&#x4F9B;&#x201C;&#x9884;&#x6784;&#x5EFA;&#x3001;&#x6301;&#x4E45;&#x5316;&#x3001;&#x9AD8;&#x8D28;&#x91CF;&#x7D22;&#x5F15;&#x201D;&#xFF0C;&#x8BA9; Claude &#x53EF;&#x4EE5;&#x8DF3;&#x8FC7; JIT &#x7684;&#x6602;&#x8D35;&#x63A8;&#x7406;&#x6B65;&#x9AA4;&#xFF0C;&#x76F4;&#x63A5;&#x8D70;&#x201C;&#x9AD8;&#x8D28;&#x91CF;&#x6377;&#x5F84;&#x201D;&#x3002;</strong></p>
<p>&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF1A;</p>
<blockquote>
<p><strong>JIT = &#x6A21;&#x578B;&#x73B0;&#x7B97;&#x73B0;&#x67E5;&#xFF08;token &#x8D35;&#x3001;&#x6162;&#x3001;&#x6709;&#x6982;&#x7387;&#x9519;&#xFF09;</strong>
<strong>MCP = &#x7ED9;&#x6A21;&#x578B;&#x51C6;&#x5907;&#x597D;&#x7684;&#x5168;&#x5C40;&#x77E5;&#x8BC6;&#x56FE;&#xFF08;token &#x5C11;&#x3001;&#x5FEB;&#x3001;&#x7A33;&#x5B9A;&#xFF09;</strong></p>
</blockquote>
<h1 id="&#x8BE6;&#x7EC6;&#x89E3;&#x6790;"><a href="#&#x8BE6;&#x7EC6;&#x89E3;&#x6790;"></a>&#x8BE6;&#x7EC6;&#x89E3;&#x6790;</h1>
<h2 id="1. Claude &#x7684; JIT &#x68C0;&#x7D22;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x201C;&#x4E34;&#x65F6;&#x7D22;&#x5F15;&#x201D;"><a href="#1. Claude &#x7684; JIT &#x68C0;&#x7D22;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x201C;&#x4E34;&#x65F6;&#x7D22;&#x5F15;&#x201D;"></a>1. Claude &#x7684; JIT &#x68C0;&#x7D22;&#xFF0C;&#x672C;&#x8D28;&#x5C31;&#x662F;&#x201C;&#x4E34;&#x65F6;&#x7D22;&#x5F15;&#x201D;</h2>
<p>Claude Code &#x7684;&#x6D41;&#x7A0B;&#x662F;&#xFF1A;</p>
<ol>
<li>&#x6A21;&#x578B;&#x626B;&#x63CF;&#x6587;&#x4EF6;&#x5217;&#x8868;&#xFF08;token &#x6D88;&#x8017;&#x5DE8;&#x5927;&#xFF09;</li>
<li>&#x5206;&#x6790;&#x8DEF;&#x5F84;&#x5173;&#x7CFB;&#xFF08;&#x518D;&#x6B21;&#x6D88;&#x8017; token&#xFF09;</li>
<li>&#x731C;&#x6D4B;&#x4F9D;&#x8D56;&#x7ED3;&#x6784;&#x3001;&#x6A21;&#x5757;&#x8FB9;&#x754C;</li>
<li>&#x51B3;&#x5B9A;&#x54EA;&#x4E9B;&#x6587;&#x4EF6;&#x8981; load &#x8FDB;&#x4E0A;&#x4E0B;&#x6587;&#x7A97;&#x53E3;</li>
<li>&#x91CD;&#x590D;&#x591A;&#x8F6E;&#xFF08;&#x63A2;&#x7D22; &#x2192; &#x8BD5;&#x9519; &#x2192; &#x518D;&#x63A2;&#x7D22;&#xFF09;</li>
</ol>
<p>&#x8FD9;&#x4E2A;&#x5C31;&#x662F;&#x5178;&#x578B;&#x7684; <strong>&#x201C;&#x5373;&#x65F6;&#x7D22;&#x5F15;&#xFF08;JIT indexing&#xFF09;&#x201D;</strong>&#x3002;</p>
<p>&#x5B83;&#x6709;&#x4E24;&#x4E2A;&#x660E;&#x786E;&#x95EE;&#x9898;&#xFF1A;</p>
<h3 id="&#x95EE;&#x9898; 1&#xFF1A;&#x51B7;&#x542F;&#x52A8;&#x6210;&#x672C;&#x9AD8;"><a href="#&#x95EE;&#x9898; 1&#xFF1A;&#x51B7;&#x542F;&#x52A8;&#x6210;&#x672C;&#x9AD8;"></a><strong>&#x95EE;&#x9898; 1&#xFF1A;&#x51B7;&#x542F;&#x52A8;&#x6210;&#x672C;&#x9AD8;</strong></h3>
<p>&#x7B2C;&#x4E00;&#x6B21;&#x7406;&#x89E3;&#x4ED3;&#x5E93;&#x7ED3;&#x6784;&#xFF0C;&#x9700;&#x8981;&#x51E0;&#x5341;&#x4E07; token&#x3002;</p>
<h3 id="&#x95EE;&#x9898; 2&#xFF1A;&#x6A21;&#x578B;&#x63A8;&#x7406;&#x6210;&#x672C;&#x9AD8;"><a href="#&#x95EE;&#x9898; 2&#xFF1A;&#x6A21;&#x578B;&#x63A8;&#x7406;&#x6210;&#x672C;&#x9AD8;"></a><strong>&#x95EE;&#x9898; 2&#xFF1A;&#x6A21;&#x578B;&#x63A8;&#x7406;&#x6210;&#x672C;&#x9AD8;</strong></h3>
<p>&#x6A21;&#x578B;&#x5FC5;&#x987B;&#x7528;&#x601D;&#x8003;&#xFF08;reasoning&#xFF09;&#x6765;&#x6784;&#x5EFA;&#x4E34;&#x65F6;&#x77E5;&#x8BC6;&#x56FE;&#x3002;</p>
<h3 id="&#x95EE;&#x9898; 3&#xFF1A;&#x4E0D;&#x7A33;&#x5B9A;&#xFF08;&#x731C;&#x7ED3;&#x6784;&#x53EF;&#x80FD;&#x9519;&#xFF09;"><a href="#&#x95EE;&#x9898; 3&#xFF1A;&#x4E0D;&#x7A33;&#x5B9A;&#xFF08;&#x731C;&#x7ED3;&#x6784;&#x53EF;&#x80FD;&#x9519;&#xFF09;"></a><strong>&#x95EE;&#x9898; 3&#xFF1A;&#x4E0D;&#x7A33;&#x5B9A;&#xFF08;&#x731C;&#x7ED3;&#x6784;&#x53EF;&#x80FD;&#x9519;&#xFF09;</strong></h3>
<p>&#x5C24;&#x5176;&#x5728;&#xFF1A;</p>
<ul>
<li>monorepo</li>
<li>&#x591A;&#x8BED;&#x8A00;&#x6DF7;&#x5408;&#x9879;&#x76EE;</li>
<li>&#x590D;&#x6742;&#x4F9D;&#x8D56;&#x56FE;
&#x4E2D;&#x66F4;&#x5BB9;&#x6613;&#x51FA;&#x9519;&#x3002;</li>
</ul>
<hr>
<h2 id="2. MCP &#x63D2;&#x4EF6;&#xFF08;&#x4F8B;&#x5982; zilliz/claude-context&#xFF09;&#x63D0;&#x4F9B;&#x7684;&#x662F;&#xFF1A;&#x201C;&#x957F;&#x671F;&#x3001;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8D85;&#x9AD8;&#x8D28;&#x91CF;&#x7D22;&#x5F15;&#x201D;"><a href="#2. MCP &#x63D2;&#x4EF6;&#xFF08;&#x4F8B;&#x5982; zilliz/claude-context&#xFF09;&#x63D0;&#x4F9B;&#x7684;&#x662F;&#xFF1A;&#x201C;&#x957F;&#x671F;&#x3001;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8D85;&#x9AD8;&#x8D28;&#x91CF;&#x7D22;&#x5F15;&#x201D;"></a>2. MCP &#x63D2;&#x4EF6;&#xFF08;&#x4F8B;&#x5982; zilliz/claude-context&#xFF09;&#x63D0;&#x4F9B;&#x7684;&#x662F;&#xFF1A;&#x201C;&#x957F;&#x671F;&#x3001;&#x7ED3;&#x6784;&#x5316;&#x7684;&#x8D85;&#x9AD8;&#x8D28;&#x91CF;&#x7D22;&#x5F15;&#x201D;</h2>
<p>&#x8FD9;&#x7C7B; MCP &#x5DE5;&#x5177;&#x505A;&#x7684;&#x5176;&#x5B9E;&#x662F;&#xFF1A;</p>
<h3 id="&#x2714; &#x63D0;&#x524D; vectorize &#x6240;&#x6709;&#x6587;&#x4EF6;"><a href="#&#x2714; &#x63D0;&#x524D; vectorize &#x6240;&#x6709;&#x6587;&#x4EF6;"></a>&#x2714; &#x63D0;&#x524D; vectorize &#x6240;&#x6709;&#x6587;&#x4EF6;</h3>
<p>&#xFF08;Claude &#x518D;&#x4E5F;&#x4E0D;&#x9700;&#x8981;&#x81EA;&#x5DF1;&#x4E00;&#x884C;&#x4E00;&#x884C;&#x626B;&#xFF09;</p>
<h3 id="&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA; semantic graph&#xFF08;&#x8BED;&#x4E49;&#x56FE;&#xFF09;"><a href="#&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA; semantic graph&#xFF08;&#x8BED;&#x4E49;&#x56FE;&#xFF09;"></a>&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA; semantic graph&#xFF08;&#x8BED;&#x4E49;&#x56FE;&#xFF09;</h3>
<p>&#xFF08;&#x6BD4;&#x5982;&#x54EA;&#x4E9B;&#x6587;&#x4EF6;&#x662F; API &#x5C42;&#x3001;&#x54EA;&#x4E9B;&#x662F;&#x4E1A;&#x52A1;&#x903B;&#x8F91;&#xFF09;</p>
<h3 id="&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF08;AST / import graph&#xFF09;"><a href="#&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF08;AST / import graph&#xFF09;"></a>&#x2714; &#x63D0;&#x524D;&#x6784;&#x5EFA;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#xFF08;AST / import graph&#xFF09;</h3>
<p>&#xFF08;Claude &#x4E0D;&#x7528;&#x731C;&#x8C01; import &#x8C01;&#xFF09;</p>
<h3 id="&#x2714; &#x63D0;&#x524D;&#x505A; embedding &#x538B;&#x7F29;"><a href="#&#x2714; &#x63D0;&#x524D;&#x505A; embedding &#x538B;&#x7F29;"></a>&#x2714; &#x63D0;&#x524D;&#x505A; embedding &#x538B;&#x7F29;</h3>
<p>&#xFF08;&#x964D;&#x4F4E; token &#x5F00;&#x9500;&#xFF09;</p>
<h3 id="&#x2714; &#x591A;&#x7248;&#x672C; / &#x591A;&#x4ED3;&#x5E93;&#x77E5;&#x8BC6;&#x5171;&#x4EAB;"><a href="#&#x2714; &#x591A;&#x7248;&#x672C; / &#x591A;&#x4ED3;&#x5E93;&#x77E5;&#x8BC6;&#x5171;&#x4EAB;"></a>&#x2714; &#x591A;&#x7248;&#x672C; / &#x591A;&#x4ED3;&#x5E93;&#x77E5;&#x8BC6;&#x5171;&#x4EAB;</h3>
<p>&#xFF08;JIT &#x505A;&#x4E0D;&#x5230;&#xFF09;</p>
<hr>
<h1 id="&#x5B89;&#x88C5; MCP &#x540E; Claude &#x4F1A;&#x201C;&#x66F4;&#x504F;&#x5411;&#x4F7F;&#x7528; MCP &#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x975E;&#x81EA;&#x884C; JIT &#x63A8;&#x7406;&#x201D;&#xFF1F;"><a href="#&#x5B89;&#x88C5; MCP &#x540E; Claude &#x4F1A;&#x201C;&#x66F4;&#x504F;&#x5411;&#x4F7F;&#x7528; MCP &#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x975E;&#x81EA;&#x884C; JIT &#x63A8;&#x7406;&#x201D;&#xFF1F;"></a>&#x5B89;&#x88C5; MCP &#x540E; Claude &#x4F1A;&#x201C;&#x66F4;&#x504F;&#x5411;&#x4F7F;&#x7528; MCP &#x7684;&#x77E5;&#x8BC6;&#xFF0C;&#x800C;&#x975E;&#x81EA;&#x884C; JIT &#x63A8;&#x7406;&#x201D;&#xFF1F;</h1>
<h2 id="Claude &#x4F1A;&#x81EA;&#x52A8;&#x6839;&#x636E;&#x5DE5;&#x5177;&#x7684;&#x201C;&#x6210;&#x672C;&#x201D;&#x6765;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x5B83;"><a href="#Claude &#x4F1A;&#x81EA;&#x52A8;&#x6839;&#x636E;&#x5DE5;&#x5177;&#x7684;&#x201C;&#x6210;&#x672C;&#x201D;&#x6765;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x5B83;"></a>Claude &#x4F1A;&#x81EA;&#x52A8;&#x6839;&#x636E;&#x5DE5;&#x5177;&#x7684;&#x201C;&#x6210;&#x672C;&#x201D;&#x6765;&#x51B3;&#x5B9A;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x5B83;</h2>
<p>&#x5F53; Claude &#x770B;&#x5230; MCP &#x5DE5;&#x5177;&#x63D0;&#x4F9B;&#xFF1A;</p>
<ul>
<li>&#x7ED3;&#x6784;&#x5316;&#x641C;&#x7D22;&#xFF08;&#x8BED;&#x4E49; + &#x8DEF;&#x5F84; + AST&#xFF09;</li>
<li>&#x76F8;&#x5173;&#x6027;&#x6781;&#x9AD8;&#x7684;&#x6587;&#x4EF6; top-k</li>
<li>&#x7ECF;&#x8FC7; embedding &#x805A;&#x7C7B;&#x7684;&#x7ED3;&#x679C;</li>
<li>&#x76F4;&#x63A5;&#x5E26;&#x5173;&#x952E;&#x4EE3;&#x7801;&#x6BB5;</li>
</ul>
<p>Claude &#x4F1A;&#x81EA;&#x52A8;&#x5224;&#x65AD;&#xFF1A;</p>
<blockquote>
<p><strong>&#x201C;&#x65E2;&#x7136; MCP &#x7ED9;&#x4E86;&#x9AD8;&#x7F6E;&#x4FE1;&#x5EA6;&#x77E5;&#x8BC6;&#xFF0C;&#x6211;&#x6CA1;&#x5FC5;&#x8981;&#x6D6A;&#x8D39; token &#x53BB;&#x505A; JIT &#x7D22;&#x5F15;&#x3002;&#x201D;</strong></p>
</blockquote>
<h1 id="&#x1F9ED; 4. &#x66F4;&#x6DF1;&#x4E00;&#x5C42;&#xFF1A;MCP &#x4E0D;&#x662F;&#x66FF;&#x4EE3; JIT&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x7684;&#x201C;&#x6CE8;&#x610F;&#x529B;&#x8D44;&#x672C;&#x201D;&#x66F4;&#x6709;&#x6548;&#x7387;"><a href="#&#x1F9ED; 4. &#x66F4;&#x6DF1;&#x4E00;&#x5C42;&#xFF1A;MCP &#x4E0D;&#x662F;&#x66FF;&#x4EE3; JIT&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x7684;&#x201C;&#x6CE8;&#x610F;&#x529B;&#x8D44;&#x672C;&#x201D;&#x66F4;&#x6709;&#x6548;&#x7387;"></a>&#x1F9ED; 4. &#x66F4;&#x6DF1;&#x4E00;&#x5C42;&#xFF1A;MCP &#x4E0D;&#x662F;&#x66FF;&#x4EE3; JIT&#xFF0C;&#x800C;&#x662F;&#x8BA9;&#x6A21;&#x578B;&#x7684;&#x201C;&#x6CE8;&#x610F;&#x529B;&#x8D44;&#x672C;&#x201D;&#x66F4;&#x6709;&#x6548;&#x7387;</h1>
<p>Claude &#x7684;&#x6CE8;&#x610F;&#x529B;&#xFF08;attention budget&#xFF09;&#x662F;&#x6709;&#x9650;&#x7684;&#x3002;</p>
<p>JIT &#x4F1A;&#x6D88;&#x8017;&#x5927;&#x91CF;&#x6CE8;&#x610F;&#x529B;&#x505A;&#xFF1A;</p>
<ul>
<li>&#x6587;&#x4EF6;&#x626B;&#x63CF;</li>
<li>&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x63A8;&#x7406;</li>
<li>&#x8DEF;&#x5F84;&#x63A8;&#x7406;</li>
<li>&#x591A;&#x8F6E;&#x68C0;&#x7D22;&#x8BD5;&#x9519;</li>
</ul>
<p>MCP &#x628A;&#x8FD9;&#x4E9B;&#x6CE8;&#x610F;&#x529B;&#x7701;&#x4E0B;&#x6765;&#xFF0C;&#x4F7F; Claude &#x628A;&#x9884;&#x7B97;&#x7528;&#x5728;&#xFF1A;</p>
<ul>
<li>&#x903B;&#x8F91;&#x63A8;&#x7406;</li>
<li>&#x4EE3;&#x7801;&#x7406;&#x89E3;</li>
<li>&#x4FEE;&#x590D;</li>
<li>&#x5BA1;&#x67E5;</li>
<li>refactor</li>
</ul>
<p>&#x8FD9;&#x624D;&#x662F;&#x4E3A;&#x4F55; MCP &#x80FD;&#x663E;&#x8457;&#x63D0;&#x5347; Claude &#x7684; Code Intelligence&#x3002;</p>
`,E=[{level:1,title:"详细解析",children:[{level:2,title:"1. Claude 的 JIT 检索，本质就是“临时索引”",children:[{level:3,title:"问题 1：冷启动成本高",children:[]},{level:3,title:"问题 2：模型推理成本高",children:[]},{level:3,title:"问题 3：不稳定（猜结构可能错）",children:[]}]},{level:2,title:"2. MCP 插件（例如 zilliz/claude-context）提供的是：“长期、结构化的超高质量索引”",children:[{level:3,title:"✔ 提前 vectorize 所有文件",children:[]},{level:3,title:"✔ 提前构建 semantic graph（语义图）",children:[]},{level:3,title:"✔ 提前构建依赖关系（AST / import graph）",children:[]},{level:3,title:"✔ 提前做 embedding 压缩",children:[]},{level:3,title:"✔ 多版本 / 多仓库知识共享",children:[]}]}]},{level:1,title:"安装 MCP 后 Claude 会“更偏向使用 MCP 的知识，而非自行 JIT 推理”？",children:[{level:2,title:"Claude 会自动根据工具的“成本”来决定是否使用它",children:[]}]},{level:1,title:"🧭 4. 更深一层：MCP 不是替代 JIT，而是让模型的“注意力资本”更有效率",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
