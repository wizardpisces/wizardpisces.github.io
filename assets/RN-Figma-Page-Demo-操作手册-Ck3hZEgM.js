const x={title:"RN Figma → Page Demo 操作手册",description:"配置并运行 Material MCP、Native Candidate Board、RN Demo Page 和整页验收闭环。"},e=`<h1 id="RN Figma &#x2192; Page Demo &#x64CD;&#x4F5C;&#x624B;&#x518C;"><a href="#RN Figma &#x2192; Page Demo &#x64CD;&#x4F5C;&#x624B;&#x518C;"></a>RN Figma &#x2192; Page Demo &#x64CD;&#x4F5C;&#x624B;&#x518C;</h1>
<p>&#x6309;&#x7167;&#x8FD9;&#x4E00;&#x4EFD;&#x6587;&#x6863;&#x5373;&#x53EF;&#x8FD0;&#x884C; Demo&#x3002;&#x6574;&#x4F53;&#x8BBE;&#x8BA1;&#x89C1;<a href="./RN-Visual-Material-Lab%E4%B8%8EMCP%E8%A7%86%E8%A7%89%E6%A3%80%E7%B4%A2%E6%96%B9%E6%A1%88.md">&#x300A;RN Figma &#x2192; Page Demo &#x6280;&#x672F;&#x65B9;&#x6848;&#x300B;</a>&#x3002;</p>
<p>&#x6574;&#x4E2A; Demo &#x9700;&#x8981;&#x4E24;&#x4E2A;&#x7EC8;&#x7AEF;&#x73AF;&#x5883;&#xFF1A;</p>
<pre><code class="language-text">&#x7EC8;&#x7AEF; A&#xFF1A;Node 20+&#xFF0C;&#x6784;&#x5EFA;&#x5E76;&#x63D0;&#x4F9B; Material MCP
&#x7EC8;&#x7AEF; B&#xFF1A;Node 14.19.x + pnpm 6.32.25&#xFF0C;&#x8FD0;&#x884C; ShopeeRN Host
</code></pre>
<h2 id="&#x4E00;&#x6B21;&#x6027;&#x51C6;&#x5907;"><a href="#&#x4E00;&#x6B21;&#x6027;&#x51C6;&#x5907;"></a>&#x4E00;&#x6B21;&#x6027;&#x51C6;&#x5907;</h2>
<h3 id="1. &#x5728;&#x7EC8;&#x7AEF; A &#x6784;&#x5EFA; MCP &#x6A21;&#x5757;"><a href="#1. &#x5728;&#x7EC8;&#x7AEF; A &#x6784;&#x5EFA; MCP &#x6A21;&#x5757;"></a>1. &#x5728;&#x7EC8;&#x7AEF; A &#x6784;&#x5EFA; MCP &#x6A21;&#x5757;</h3>
<p>&#x786E;&#x8BA4; Node &#x7248;&#x672C;&#xFF1A;</p>
<pre><code class="language-bash">node --version
</code></pre>
<p>&#x9700;&#x8981; Node 20 &#x6216;&#x66F4;&#x9AD8;&#x7248;&#x672C;&#x3002;</p>
<pre><code class="language-bash"><span class="hljs-built_in">cd</span> /Users/liuze/workspace/shopee-fe/fe-code-agent/modules/rn-visual-material-agent
pnpm install
pnpm <span class="hljs-built_in">test</span>
</code></pre>
<p>&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#x540E;&#x5E94;&#x751F;&#x6210;&#xFF1A;</p>
<pre><code class="language-text">dist/src/server.js
</code></pre>
<h3 id="2. &#x914D;&#x7F6E; Codex MCP"><a href="#2. &#x914D;&#x7F6E; Codex MCP"></a>2. &#x914D;&#x7F6E; Codex MCP</h3>
<pre><code class="language-toml"><span class="hljs-section">[mcp_servers.rn_material_lab]</span>
<span class="hljs-attr">command</span> = <span class="hljs-string">&quot;node&quot;</span>
<span class="hljs-attr">args</span> = [<span class="hljs-string">&quot;/Users/liuze/workspace/shopee-fe/fe-code-agent/modules/rn-visual-material-agent/dist/src/server.js&quot;</span>]
<span class="hljs-attr">env</span> = { RN_MATERIAL_WORKSPACE_ROOT = <span class="hljs-string">&quot;/Users/liuze/workspace/shopee-fe/web-affiliate-rn&quot;</span> }
<span class="hljs-attr">startup_timeout_sec</span> = <span class="hljs-number">10</span>
<span class="hljs-attr">tool_timeout_sec</span> = <span class="hljs-number">30</span>
<span class="hljs-attr">enabled</span> = <span class="hljs-literal">true</span>
</code></pre>
<p>&#x91CD;&#x542F; Codex &#x540E;&#x5E94;&#x770B;&#x5230;&#xFF1A;</p>
<pre><code class="language-text">list_rn_materials
get_rn_material
write_rn_demo_page
</code></pre>
<h3 id="3. &#x5728;&#x7EC8;&#x7AEF; B &#x51C6;&#x5907; ShopeeRN &#x73AF;&#x5883;"><a href="#3. &#x5728;&#x7EC8;&#x7AEF; B &#x51C6;&#x5907; ShopeeRN &#x73AF;&#x5883;"></a>3. &#x5728;&#x7EC8;&#x7AEF; B &#x51C6;&#x5907; ShopeeRN &#x73AF;&#x5883;</h3>
<p>&#x5F53;&#x524D; Host &#x8981;&#x6C42;&#xFF1A;</p>
<pre><code class="language-text">Node 14.19.x
pnpm 6.32.25
</code></pre>
<p>&#x672C;&#x673A;&#x53EF;&#x6267;&#x884C;&#xFF1A;</p>
<pre><code class="language-bash"><span class="hljs-built_in">source</span> <span class="hljs-string">&quot;<span class="hljs-variable">$HOME</span>/.nvm/nvm.sh&quot;</span>
nvm use 14.19.2
node --version

<span class="hljs-comment"># Node 14 &#x7684;&#x5168;&#x5C40;&#x5305;&#x4E0E;&#x5176;&#x4ED6; Node &#x7248;&#x672C;&#x9694;&#x79BB;&#x3002;</span>
npm install -g pnpm@6.32.25
pnpm --version
</code></pre>
<p>&#x786E;&#x8BA4;&#x8F93;&#x51FA;&#x4E3A; <code>v14.19.x</code> &#x548C; <code>6.32.25</code>&#x3002;</p>
<p>&#x751F;&#x6210;&#x5F00;&#x53D1; Bundle &#x9700;&#x8981;&#x7684;&#x7248;&#x672C;&#x6587;&#x4EF6;&#xFF1A;</p>
<pre><code class="language-bash"><span class="hljs-built_in">cd</span> /Users/liuze/workspace/shopee-fe/web-affiliate-rn
npm run bundleVersionSync
</code></pre>
<p>&#x786E;&#x8BA4; Host &#x5DF2;&#x7ECF;&#x5F15;&#x7528;&#x5F53;&#x524D; RN &#x4ED3;&#x5E93;&#xFF1A;</p>
<pre><code class="language-bash">readlink /Users/liuze/workspace/shopee-fe/host/react-native/node_modules/@shopee-rn/affiliate-network
</code></pre>
<p>&#x5F53;&#x524D;&#x673A;&#x5668;&#x5E94;&#x8F93;&#x51FA;&#xFF1A;</p>
<pre><code class="language-text">../../../../web-affiliate-rn
</code></pre>
<h3 id="4. &#x542F;&#x52A8; ShopeeRN Host"><a href="#4. &#x542F;&#x52A8; ShopeeRN Host"></a>4. &#x542F;&#x52A8; ShopeeRN Host</h3>
<p>&#x7EE7;&#x7EED;&#x5728; Node 14 + pnpm 6 &#x7684;&#x7EC8;&#x7AEF;&#x4E2D;&#x6267;&#x884C;&#xFF1A;</p>
<pre><code class="language-bash"><span class="hljs-built_in">cd</span> /Users/liuze/workspace/shopee-fe/host/react-native
yarn dev --scope @shopee-rn/affiliate-network
</code></pre>
<p>&#x770B;&#x5230;&#x4EE5;&#x4E0B;&#x5185;&#x5BB9;&#x8BF4;&#x660E; Metro &#x5DF2;&#x542F;&#x52A8;&#xFF1A;</p>
<pre><code class="language-text">Running with these preload plugin [ &apos;@shopee-rn/affiliate-network&apos; ]
Welcome to React Native!
port: 8081
</code></pre>
<p>&#x51C6;&#x5907;&#x53EF;&#x8FD0;&#x884C;&#x7684;&#x6A21;&#x62DF;&#x5668;&#x6216;&#x771F;&#x673A;&#x3002;&#x53EA;&#x6709;&#x94FE;&#x63A5;&#x4F46; Codex &#x65E0;&#x6743;&#x8BFB;&#x53D6; Figma &#x65F6;&#xFF0C;&#x9700;&#x8981;&#x540C;&#x65F6;&#x63D0;&#x4F9B;&#x622A;&#x56FE;&#x3002;</p>
<h2 id="&#x6BCF;&#x6B21;&#x751F;&#x6210; Demo"><a href="#&#x6BCF;&#x6B21;&#x751F;&#x6210; Demo"></a>&#x6BCF;&#x6B21;&#x751F;&#x6210; Demo</h2>
<h3 id="1. &#x63D0;&#x4EA4;&#x4EFB;&#x52A1;"><a href="#1. &#x63D0;&#x4EA4;&#x4EFB;&#x52A1;"></a>1. &#x63D0;&#x4EA4;&#x4EFB;&#x52A1;</h3>
<pre><code class="language-text">&#x8BF7;&#x8BFB;&#x53D6;&#xFF1A;
/Users/liuze/workspace/shopee-fe/fe-code-agent/modules/rn-visual-material-agent/prompt.md

taskId: commission-summary-v1
Figma: &lt;Figma Link&gt;
&#x9700;&#x6C42;&#xFF1A;&lt;&#x4E1A;&#x52A1;&#x9700;&#x6C42;&gt;

&#x8BF7;&#x6267;&#x884C;&#x533A;&#x57DF;&#x62C6;&#x89E3;&#x3001;&#x5019;&#x9009;&#x7B5B;&#x9009;&#x3001;&#x5019;&#x9009;&#x9762;&#x677F;&#x89C6;&#x89C9;&#x9009;&#x62E9;&#x548C; Demo Page &#x751F;&#x6210;&#x3002;
</code></pre>
<h3 id="2. &#x67E5;&#x770B;&#x5019;&#x9009;&#x9762;&#x677F;"><a href="#2. &#x67E5;&#x770B;&#x5019;&#x9009;&#x9762;&#x677F;"></a>2. &#x67E5;&#x770B;&#x5019;&#x9009;&#x9762;&#x677F;</h3>
<p>Codex &#x4F1A;&#x8C03;&#x7528; <code>list_rn_materials</code>&#x3002;&#x5DE5;&#x5177;&#x7ED3;&#x679C;&#x5305;&#x542B;&#xFF1A;</p>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;candidateBoard&quot;</span>: {
    <span class="hljs-attr">&quot;pageName&quot;</span>: <span class="hljs-string">&quot;MATERIAL_LAB&quot;</span>,
    <span class="hljs-attr">&quot;propsData&quot;</span>: {
      <span class="hljs-attr">&quot;fixtureIds&quot;</span>: [<span class="hljs-string">&quot;payment.status.pending&quot;</span>]
    },
    <span class="hljs-attr">&quot;deepLinkPath&quot;</span>: <span class="hljs-string">&quot;/material-lab?fixtureIds=payment.status.pending&quot;</span>,
    <span class="hljs-attr">&quot;testID&quot;</span>: <span class="hljs-string">&quot;material-lab:candidates&quot;</span>
  }
}
</code></pre>
<p>&#x6253;&#x5F00;&#x8BE5;&#x9875;&#x9762;&#x540E;&#xFF0C;&#x5019;&#x9009;&#x7684;&#x771F;&#x5B9E; RN &#x753B;&#x9762;&#x65C1;&#x4F1A;&#x663E;&#x793A;&#xFF1A;</p>
<ul>
<li>&#x5E8F;&#x53F7;&#xFF1B;</li>
<li><code>materialId</code>&#xFF1B;</li>
<li><code>fixtureId</code>&#xFF1B;</li>
<li><code>domain / kind</code>&#xFF1B;</li>
<li>Fixture Props&#xFF1B;</li>
<li>&#x6E90;&#x7801;&#x8DEF;&#x5F84;&#x3002;</li>
</ul>
<p>Codex &#x5C06;&#x5019;&#x9009;&#x9762;&#x677F;&#x622A;&#x56FE;&#x4E0E; Figma &#x533A;&#x57DF;&#x5BF9;&#x6BD4;&#x540E;&#x9009;&#x62E9; Fixture&#x3002;&#x5019;&#x9009;&#x8FC7;&#x591A;&#x65F6;&#x7EE7;&#x7EED;&#x9650;&#x5B9A; <code>domain</code>&#x3001;<code>kind</code>&#x3001;<code>query</code>&#xFF0C;&#x6216;&#x4F7F;&#x7528; <code>offset</code> &#x5206;&#x9875;&#xFF1B;&#x6BCF;&#x6279;&#x6700;&#x591A; 20 &#x4E2A;&#x3002;</p>
<p>&#x4F7F;&#x7528;&#x5DE5;&#x5177;&#x8FD4;&#x56DE;&#x7684; <code>deepLinkPath</code> &#x6253;&#x5F00; App &#x9875;&#x9762;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<pre><code class="language-text">https://affiliate.&lt;environment-domain&gt;/material-lab?fixtureIds=payment.commission-bill-status.pending
</code></pre>
<h3 id="3. &#x751F;&#x6210; Demo"><a href="#3. &#x751F;&#x6210; Demo"></a>3. &#x751F;&#x6210; Demo</h3>
<p>&#x9009;&#x5B9A; Fixture &#x540E;&#x8C03;&#x7528; <code>write_rn_demo_page</code>&#xFF0C;&#x4EA7;&#x7269;&#x4F4D;&#x4E8E;&#xFF1A;</p>
<pre><code class="language-text">web-affiliate-rn/src/material-lab/generated/&lt;taskId&gt;/input.json
web-affiliate-rn/src/material-lab/generated/&lt;taskId&gt;/material-mapping.json
web-affiliate-rn/src/material-lab/generated/&lt;taskId&gt;/result.json
web-affiliate-rn/src/material-lab/generated-page.json
</code></pre>
<h3 id="4. &#x6253;&#x5F00;&#x6574;&#x9875; Demo"><a href="#4. &#x6253;&#x5F00;&#x6574;&#x9875; Demo"></a>4. &#x6253;&#x5F00;&#x6574;&#x9875; Demo</h3>
<pre><code class="language-text">Forbidden Zone -&gt; Demo Pages -&gt; Generated Material Demo
</code></pre>
<p>&#x6216;&#xFF1A;</p>
<pre><code class="language-text">https://affiliate.&lt;environment-domain&gt;/material-lab?demo=true
</code></pre>
<p>&#x7A33;&#x5B9A;&#x6807;&#x8BC6;&#xFF1A;</p>
<pre><code class="language-text">material-demo:&lt;taskId&gt;
material-demo-region:&lt;regionId&gt;
</code></pre>
<h3 id="5. &#x6574;&#x9875;&#x9A8C;&#x6536;"><a href="#5. &#x6574;&#x9875;&#x9A8C;&#x6536;"></a>5. &#x6574;&#x9875;&#x9A8C;&#x6536;</h3>
<p>&#x622A;&#x53D6; Generated Material Demo &#x7684;&#x771F;&#x5B9E; Native &#x753B;&#x9762;&#xFF0C;&#x4E0E; Figma &#x6BD4;&#x8F83;&#xFF1A;</p>
<ul>
<li>&#x7EC4;&#x4EF6;&#x662F;&#x5426;&#x9009;&#x9519;&#xFF1B;</li>
<li>&#x533A;&#x5757;&#x662F;&#x5426;&#x7F3A;&#x5931;&#xFF1B;</li>
<li>&#x987A;&#x5E8F;&#x3001;&#x95F4;&#x8DDD;&#x548C;&#x80CC;&#x666F;&#x662F;&#x5426;&#x6B63;&#x786E;&#xFF1B;</li>
<li>&#x6587;&#x6848;&#x3001;&#x72B6;&#x6001;&#x548C; Props &#x662F;&#x5426;&#x6B63;&#x786E;&#xFF1B;</li>
<li>&#x662F;&#x5426;&#x5B58;&#x5728;&#x6CA1;&#x6709;&#x7269;&#x6599;&#x8986;&#x76D6;&#x7684;&#x533A;&#x57DF;&#x3002;</li>
</ul>
<p>&#x4FEE;&#x6539; Mapping &#x6216;&#x5E03;&#x5C40;&#x540E;&#x91CD;&#x65B0;&#x751F;&#x6210;&#x3002;&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#x4E0D;&#x8981;&#x6C42;&#x81EA;&#x52A8;&#x50CF;&#x7D20; Diff&#xFF0C;&#x53EA;&#x4FDD;&#x7559; Figma &#x539F;&#x56FE;&#x3001;RN &#x6574;&#x9875;&#x622A;&#x56FE;&#x548C; Codex/&#x4EBA;&#x5DE5;&#x5DEE;&#x5F02;&#x7ED3;&#x8BBA;&#x3002;</p>
<h2 id="&#x5DF2;&#x9A8C;&#x8BC1;&#x72B6;&#x6001;"><a href="#&#x5DF2;&#x9A8C;&#x8BC1;&#x72B6;&#x6001;"></a>&#x5DF2;&#x9A8C;&#x8BC1;&#x72B6;&#x6001;</h2>
<p>&#x5F53;&#x524D;&#x7248;&#x672C;&#x5DF2;&#x7ECF;&#x9A8C;&#x8BC1;&#xFF1A;</p>
<ul>
<li>Material MCP TypeScript &#x6784;&#x5EFA;&#x548C;&#x534F;&#x8BAE;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF1B;</li>
<li>&#x771F;&#x5B9E; <code>web-affiliate-rn</code> Catalog &#x53EF;&#x88AB; MCP &#x8BFB;&#x53D6;&#xFF1B;</li>
<li>Candidate Board Fixture &#x7B5B;&#x9009;&#x4E0E;&#x987A;&#x5E8F;&#x6D4B;&#x8BD5;&#x901A;&#x8FC7;&#xFF1B;</li>
<li>Material Lab &#x5B9A;&#x5411; ESLint &#x548C;&#x76F8;&#x5173; TypeScript &#x68C0;&#x67E5;&#x901A;&#x8FC7;&#xFF1B;</li>
<li>ShopeeRN Metro &#x80FD;&#x52A0;&#x8F7D;&#x5F53;&#x524D;&#x63D2;&#x4EF6;&#xFF1B;</li>
<li>Material Lab &#x72EC;&#x7ACB; iOS Bundle &#x7F16;&#x8BD1;&#x6210;&#x529F;&#x3002;</li>
</ul>
<p>&#x5168;&#x5E94;&#x7528; Bundle &#x5F53;&#x524D;&#x4ECD;&#x4F1A;&#x88AB; Host &#x4E2D;&#x672A;&#x6784;&#x5EFA;&#x7684;
<code>@shopee/phone-utils-standalone</code> &#x963B;&#x585E;&#xFF0C;&#x8FD9;&#x4E0E; Material Lab &#x65E0;&#x5173;&#x3002;Material Lab &#x72EC;&#x7ACB; Bundle &#x5DF2;&#x9A8C;&#x8BC1;&#x6210;&#x529F;&#x3002;</p>
`,a=[{level:1,title:"RN Figma → Page Demo 操作手册",children:[{level:2,title:"一次性准备",children:[{level:3,title:"1. 在终端 A 构建 MCP 模块",children:[]},{level:3,title:"2. 配置 Codex MCP",children:[]},{level:3,title:"3. 在终端 B 准备 ShopeeRN 环境",children:[]},{level:3,title:"4. 启动 ShopeeRN Host",children:[]}]},{level:2,title:"每次生成 Demo",children:[{level:3,title:"1. 提交任务",children:[]},{level:3,title:"2. 查看候选面板",children:[]},{level:3,title:"3. 生成 Demo",children:[]},{level:3,title:"4. 打开整页 Demo",children:[]},{level:3,title:"5. 整页验收",children:[]}]},{level:2,title:"已验证状态",children:[]}]}];export{x as attributes,e as html,a as nestedHeaders};
