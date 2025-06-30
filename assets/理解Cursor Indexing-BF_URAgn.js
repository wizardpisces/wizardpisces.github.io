const s={},x=`<h1 id="LSP&#xFF08;Language Server Protocol&#xFF09;"><a href="#LSP&#xFF08;Language Server Protocol&#xFF09;"></a>LSP&#xFF08;Language Server Protocol&#xFF09;</h1>
<p>Cursor &#x662F;&#x5728; <strong>LSP &#x57FA;&#x7840;&#x4E0A;&#x6784;&#x5EFA;&#x4E86;&#x667A;&#x80FD;&#x4E2D;&#x95F4;&#x5C42;</strong></p>
<h2 id="Cursor &#x7684; LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;"><a href="#Cursor &#x7684; LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;"></a>Cursor &#x7684; LSP &#x589E;&#x5F3A;&#x67B6;&#x6784;</h2>
<p><strong>1. &#x4F20;&#x7EDF; LSP &#x67B6;&#x6784;</strong></p>
<pre><code>&#x7F16;&#x8F91;&#x5668; &#x2190;&#x2192; Language Server &#x2190;&#x2192; &#x4EE3;&#x7801;&#x5206;&#x6790;&#x5F15;&#x64CE;
</code></pre>
<p><strong>2. Cursor &#x7684;&#x589E;&#x5F3A;&#x67B6;&#x6784;</strong></p>
<pre><code>&#x7F16;&#x8F91;&#x5668; &#x2190;&#x2192; AI&#x667A;&#x80FD;&#x5C42; &#x2190;&#x2192; LSP &#x2190;&#x2192; &#x4EE3;&#x7801;&#x5206;&#x6790;&#x5F15;&#x64CE;
                &#x2193;
            &#x8BED;&#x4E49;&#x7D22;&#x5F15;&#x5E93;
                &#x2193;
            &#x4E0A;&#x4E0B;&#x6587;&#x7BA1;&#x7406;&#x5668;
</code></pre>
<h2 id="&#x5177;&#x4F53;&#x7684;&#x667A;&#x80FD;&#x5904;&#x7406;&#x673A;&#x5236;"><a href="#&#x5177;&#x4F53;&#x7684;&#x667A;&#x80FD;&#x5904;&#x7406;&#x673A;&#x5236;"></a>&#x5177;&#x4F53;&#x7684;&#x667A;&#x80FD;&#x5904;&#x7406;&#x673A;&#x5236;</h2>
<p><strong>1. &#x8BF7;&#x6C42;&#x9884;&#x5904;&#x7406;&#xFF08;&#x53D1;&#x7ED9; LSP &#x524D;&#xFF09;</strong></p>
<pre><code class="language-typescript"><span class="hljs-comment">// &#x7528;&#x6237;&#x8F93;&#x5165;&#xFF1A;function process</span>
<span class="hljs-comment">// &#x4F20;&#x7EDF; LSP&#xFF1A;&#x76F4;&#x63A5;&#x67E5;&#x8BE2; &quot;process&quot; &#x7684;&#x8865;&#x5168;</span>
<span class="hljs-comment">// Cursor &#x667A;&#x80FD;&#x5C42;&#xFF1A;</span>
<span class="hljs-comment">// - &#x5206;&#x6790;&#x5F53;&#x524D;&#x6587;&#x4EF6;&#x4E0A;&#x4E0B;&#x6587;</span>
<span class="hljs-comment">// - &#x7406;&#x89E3;&#x7528;&#x6237;&#x610F;&#x56FE;&#xFF08;&#x53EF;&#x80FD;&#x60F3;&#x5199;&#x6570;&#x636E;&#x5904;&#x7406;&#x51FD;&#x6570;&#xFF09;</span>
<span class="hljs-comment">// - &#x7ED3;&#x5408;&#x9879;&#x76EE;&#x6A21;&#x5F0F;&#x548C;&#x6700;&#x4F73;&#x5B9E;&#x8DF5;</span>
<span class="hljs-comment">// - &#x751F;&#x6210;&#x66F4;&#x7CBE;&#x51C6;&#x7684; LSP &#x67E5;&#x8BE2;</span>
</code></pre>
<p><strong>2. &#x54CD;&#x5E94;&#x540E;&#x5904;&#x7406;&#xFF08;LSP &#x8FD4;&#x56DE;&#x540E;&#xFF09;</strong></p>
<pre><code class="language-typescript"><span class="hljs-comment">// LSP &#x8FD4;&#x56DE;&#xFF1A;100&#x4E2A;&#x53EF;&#x80FD;&#x7684;&#x8865;&#x5168;&#x9009;&#x9879;</span>
<span class="hljs-comment">// Cursor &#x667A;&#x80FD;&#x5C42;&#xFF1A;</span>
<span class="hljs-comment">// - &#x57FA;&#x4E8E;&#x4E0A;&#x4E0B;&#x6587;&#x76F8;&#x5173;&#x6027;&#x6392;&#x5E8F;</span>
<span class="hljs-comment">// - &#x8FC7;&#x6EE4;&#x6389;&#x4E0D;&#x7B26;&#x5408;&#x5F53;&#x524D;&#x573A;&#x666F;&#x7684;&#x9009;&#x9879;</span>
<span class="hljs-comment">// - &#x6DFB;&#x52A0; AI &#x751F;&#x6210;&#x7684;&#x667A;&#x80FD;&#x5EFA;&#x8BAE;</span>
<span class="hljs-comment">// - &#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#xFF1A;5-10&#x4E2A;&#x9AD8;&#x8D28;&#x91CF;&#x9009;&#x9879;</span>
</code></pre>
<p><strong>3. &#x4E0A;&#x4E0B;&#x6587;&#x589E;&#x5F3A;</strong></p>
<pre><code class="language-typescript"><span class="hljs-comment">// &#x4F20;&#x7EDF; LSP&#xFF1A;&#x53EA;&#x770B;&#x5F53;&#x524D;&#x6587;&#x4EF6;</span>
<span class="hljs-comment">// Cursor &#x589E;&#x5F3A;&#xFF1A;</span>
<span class="hljs-comment">// - &#x5206;&#x6790;&#x6574;&#x4E2A;&#x9879;&#x76EE;&#x7ED3;&#x6784;</span>
<span class="hljs-comment">// - &#x7406;&#x89E3;&#x4EE3;&#x7801;&#x98CE;&#x683C;&#x548C;&#x6A21;&#x5F0F;</span>
<span class="hljs-comment">// - &#x8003;&#x8651;&#x6700;&#x8FD1;&#x7684;&#x7F16;&#x8F91;&#x5386;&#x53F2;</span>
<span class="hljs-comment">// - &#x7ED3;&#x5408; AI &#x5BF9;&#x4EE3;&#x7801;&#x610F;&#x56FE;&#x7684;&#x7406;&#x89E3;</span>
</code></pre>
<h2 id="&#x5B9E;&#x9645;&#x4F18;&#x5316;&#x793A;&#x4F8B;"><a href="#&#x5B9E;&#x9645;&#x4F18;&#x5316;&#x793A;&#x4F8B;"></a>&#x5B9E;&#x9645;&#x4F18;&#x5316;&#x793A;&#x4F8B;</h2>
<p><strong>1. &#x667A;&#x80FD;&#x8865;&#x5168;&#x4F18;&#x5316;</strong></p>
<pre><code class="language-python"># &#x7528;&#x6237;&#x5728;&#x5199;&#xFF1A;
class UserService:
    def get_user_by_|  # &#x5149;&#x6807;&#x5728;&#x8FD9;&#x91CC;

# &#x4F20;&#x7EDF; LSP&#xFF1A;&#x8FD4;&#x56DE;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7684;&#x65B9;&#x6CD5;&#x540D;
# Cursor &#x667A;&#x80FD;&#x5C42;&#xFF1A;
# - &#x5206;&#x6790;&#x8FD9;&#x662F;&#x4E00;&#x4E2A; Service &#x7C7B;
# - &#x7406;&#x89E3;&#x6570;&#x636E;&#x5E93;&#x67E5;&#x8BE2;&#x6A21;&#x5F0F;
# - &#x4F18;&#x5148;&#x63A8;&#x8350;&#xFF1A;get_user_by_id, get_user_by_email
</code></pre>
<p><strong>2. &#x9519;&#x8BEF;&#x8BCA;&#x65AD;&#x589E;&#x5F3A;</strong></p>
<pre><code class="language-javascript"><span class="hljs-comment">// LSP &#x62A5;&#x9519;&#xFF1A;Undefined variable &apos;user&apos;</span>
<span class="hljs-comment">// Cursor &#x667A;&#x80FD;&#x5C42;&#xFF1A;</span>
<span class="hljs-comment">// - &#x5206;&#x6790;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;&#x53D1;&#x73B0;&#x53EF;&#x80FD;&#x662F;&#x5F02;&#x6B65;&#x95EE;&#x9898;</span>
<span class="hljs-comment">// - &#x63D0;&#x4F9B;&#x667A;&#x80FD;&#x4FEE;&#x590D;&#x5EFA;&#x8BAE;</span>
<span class="hljs-comment">// - &#x751A;&#x81F3;&#x76F4;&#x63A5;&#x751F;&#x6210;&#x4FEE;&#x590D;&#x4EE3;&#x7801;</span>
</code></pre>
<p><strong>3. &#x4EE3;&#x7801;&#x5BFC;&#x822A;&#x4F18;&#x5316;</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># &#x7528;&#x6237;&#x70B9;&#x51FB;&#x8DF3;&#x8F6C;&#x5230;&#x5B9A;&#x4E49;</span>
<span class="hljs-comment"># &#x4F20;&#x7EDF; LSP&#xFF1A;&#x76F4;&#x63A5;&#x8DF3;&#x8F6C;&#x5230;&#x51FD;&#x6570;&#x5B9A;&#x4E49;</span>
<span class="hljs-comment"># Cursor &#x667A;&#x80FD;&#x5C42;&#xFF1A;</span>
<span class="hljs-comment"># - &#x5982;&#x679C;&#x6709;&#x591A;&#x4E2A;&#x91CD;&#x8F7D;&#xFF0C;&#x667A;&#x80FD;&#x9009;&#x62E9;&#x6700;&#x76F8;&#x5173;&#x7684;</span>
<span class="hljs-comment"># - &#x63D0;&#x4F9B;&#x76F8;&#x5173;&#x4EE3;&#x7801;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x9884;&#x89C8;</span>
<span class="hljs-comment"># - &#x663E;&#x793A;&#x4F7F;&#x7528;&#x793A;&#x4F8B;&#x548C;&#x6587;&#x6863;</span>
</code></pre>
<h2 id="&#x6280;&#x672F;&#x5B9E;&#x73B0;&#x63A8;&#x6D4B;"><a href="#&#x6280;&#x672F;&#x5B9E;&#x73B0;&#x63A8;&#x6D4B;"></a>&#x6280;&#x672F;&#x5B9E;&#x73B0;&#x63A8;&#x6D4B;</h2>
<p><strong>1. &#x4E2D;&#x95F4;&#x4EF6;&#x6A21;&#x5F0F;</strong></p>
<pre><code class="language-typescript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CursorLSPProxy</span> </span>{
  <span class="hljs-keyword">async</span> handleCompletion(request: LSPRequest): <span class="hljs-built_in">Promise</span>&lt;LSPResponse&gt; {
    <span class="hljs-comment">// 1. &#x9884;&#x5904;&#x7406;&#x8BF7;&#x6C42;</span>
    <span class="hljs-keyword">const</span> enhancedRequest = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.enhanceRequest(request);
    
    <span class="hljs-comment">// 2. &#x8C03;&#x7528;&#x539F;&#x59CB; LSP</span>
    <span class="hljs-keyword">const</span> lspResponse = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.lspClient.request(enhancedRequest);
    
    <span class="hljs-comment">// 3. &#x540E;&#x5904;&#x7406;&#x54CD;&#x5E94;</span>
    <span class="hljs-keyword">const</span> smartResponse = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.enhanceResponse(lspResponse, context);
    
    <span class="hljs-keyword">return</span> smartResponse;
  }
}
</code></pre>
<p><strong>2. &#x4E0A;&#x4E0B;&#x6587;&#x611F;&#x77E5;</strong></p>
<pre><code class="language-typescript"><span class="hljs-keyword">interface</span> CursorContext {
  <span class="hljs-attr">currentFile</span>: <span class="hljs-built_in">string</span>;
  projectStructure: ProjectGraph;
  recentEdits: EditHistory[];
  userIntent: IntentAnalysis;
  codePatterns: PatternAnalysis[];
}
</code></pre>
<h2 id="&#x8FD9;&#x79CD;&#x67B6;&#x6784;&#x7684;&#x4F18;&#x52BF;"><a href="#&#x8FD9;&#x79CD;&#x67B6;&#x6784;&#x7684;&#x4F18;&#x52BF;"></a>&#x8FD9;&#x79CD;&#x67B6;&#x6784;&#x7684;&#x4F18;&#x52BF;</h2>
<p><strong>1. &#x517C;&#x5BB9;&#x6027;</strong>&#xFF1A;&#x7EE7;&#x627F;&#x4E86;&#x6574;&#x4E2A; LSP &#x751F;&#x6001;&#x7CFB;&#x7EDF;
<strong>2. &#x53EF;&#x6269;&#x5C55;&#x6027;</strong>&#xFF1A;&#x53EF;&#x4EE5;&#x4E3A;&#x4EFB;&#x4F55;&#x652F;&#x6301; LSP &#x7684;&#x8BED;&#x8A00;&#x6DFB;&#x52A0; AI &#x80FD;&#x529B;
<strong>3. &#x6E10;&#x8FDB;&#x589E;&#x5F3A;</strong>&#xFF1A;&#x5373;&#x4F7F; AI &#x5C42;&#x5931;&#x6548;&#xFF0C;&#x57FA;&#x7840; LSP &#x529F;&#x80FD;&#x4ECD;&#x7136;&#x53EF;&#x7528;
<strong>4. &#x6027;&#x80FD;&#x4F18;&#x5316;</strong>&#xFF1A;&#x667A;&#x80FD;&#x8FC7;&#x6EE4;&#x51CF;&#x5C11;&#x4E86;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x4FE1;&#x606F;&#x566A;&#x97F3;</p>
<h1 id="Code Index"><a href="#Code Index"></a>Code Index</h1>
<p>&#x7406;&#x89E3;&#x4ECE; code index &#x7684;&#x5EFA;&#x7ACB;&#x5F00;&#x59CB;&#xFF0C;&#x5230; diff code review &#x53EF;&#x80FD;&#x7684;&#x6D41;&#x7A0B;</p>
<h2 id="&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#xFF1A;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x7BA1;&#x7406;&#x7CFB;&#x7EDF;"><a href="#&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#xFF1A;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x7BA1;&#x7406;&#x7CFB;&#x7EDF;"></a>&#x7B80;&#x5355;&#x4F8B;&#x5B50;&#xFF1A;&#x4E00;&#x4E2A;&#x7528;&#x6237;&#x7BA1;&#x7406;&#x7CFB;&#x7EDF;</h2>
<h3 id="1. &#x4EE3;&#x7801;&#x7ED3;&#x6784;"><a href="#1. &#x4EE3;&#x7801;&#x7ED3;&#x6784;"></a>1. <strong>&#x4EE3;&#x7801;&#x7ED3;&#x6784;</strong></h3>
<pre><code>src/
&#x251C;&#x2500;&#x2500; user/
&#x2502;   &#x251C;&#x2500;&#x2500; userService.js     // &#x7528;&#x6237;&#x670D;&#x52A1;
&#x2502;   &#x251C;&#x2500;&#x2500; userModel.js       // &#x7528;&#x6237;&#x6A21;&#x578B;
&#x2502;   &#x2514;&#x2500;&#x2500; userController.js  // &#x7528;&#x6237;&#x63A7;&#x5236;&#x5668;
&#x251C;&#x2500;&#x2500; auth/
&#x2502;   &#x2514;&#x2500;&#x2500; authService.js     // &#x8BA4;&#x8BC1;&#x670D;&#x52A1;
&#x2514;&#x2500;&#x2500; utils/
    &#x2514;&#x2500;&#x2500; validator.js       // &#x9A8C;&#x8BC1;&#x5DE5;&#x5177;
</code></pre>
<h3 id="2. Code Index &#x5EFA;&#x7ACB;&#x8FC7;&#x7A0B;"><a href="#2. Code Index &#x5EFA;&#x7ACB;&#x8FC7;&#x7A0B;"></a>2. <strong>Code Index &#x5EFA;&#x7ACB;&#x8FC7;&#x7A0B;</strong></h3>
<h4 id="2.1 &#x6587;&#x4EF6;&#x5185;&#x5BB9;&#x793A;&#x4F8B;"><a href="#2.1 &#x6587;&#x4EF6;&#x5185;&#x5BB9;&#x793A;&#x4F8B;"></a>2.1 <strong>&#x6587;&#x4EF6;&#x5185;&#x5BB9;&#x793A;&#x4F8B;</strong></h4>
<pre><code class="language-javascript"><span class="hljs-comment">// userService.js</span>
<span class="hljs-keyword">import</span> { validateEmail } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../utils/validator.js&apos;</span>;
<span class="hljs-keyword">import</span> { UserModel } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./userModel.js&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">UserService</span> </span>{
  <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">createUser</span>(<span class="hljs-params">userData</span>)</span> {
    <span class="hljs-keyword">if</span> (!validateEmail(userData.email)) {
      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;Invalid email&apos;</span>);
    }
    <span class="hljs-keyword">return</span> UserModel.create(userData);
  }
}
</code></pre>
<pre><code class="language-javascript"><span class="hljs-comment">// authService.js  </span>
<span class="hljs-keyword">import</span> { UserService } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../user/userService.js&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AuthService</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.userService = <span class="hljs-keyword">new</span> UserService();
  }
  
  <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">register</span>(<span class="hljs-params">userData</span>)</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.userService.createUser(userData);
  }
}
</code></pre>
<h4 id="2.2 Index &#x5EFA;&#x7ACB;"><a href="#2.2 Index &#x5EFA;&#x7ACB;"></a>2.2 <strong>Index &#x5EFA;&#x7ACB;</strong></h4>
<pre><code class="language-json">{
  <span class="hljs-attr">&quot;files&quot;</span>: {
    <span class="hljs-attr">&quot;userService.js&quot;</span>: {
      <span class="hljs-attr">&quot;functions&quot;</span>: [<span class="hljs-string">&quot;createUser&quot;</span>],
      <span class="hljs-attr">&quot;imports&quot;</span>: [<span class="hljs-string">&quot;validator.js&quot;</span>, <span class="hljs-string">&quot;userModel.js&quot;</span>],
      <span class="hljs-attr">&quot;exports&quot;</span>: [<span class="hljs-string">&quot;UserService&quot;</span>],
      <span class="hljs-attr">&quot;vector&quot;</span>: [<span class="hljs-number">0.1</span>, <span class="hljs-number">0.3</span>, <span class="hljs-number">0.8</span>, ...] <span class="hljs-comment">// &#x8BED;&#x4E49;&#x5411;&#x91CF;</span>
    },
    <span class="hljs-attr">&quot;authService.js&quot;</span>: {
      <span class="hljs-attr">&quot;functions&quot;</span>: [<span class="hljs-string">&quot;register&quot;</span>],
      <span class="hljs-attr">&quot;imports&quot;</span>: [<span class="hljs-string">&quot;userService.js&quot;</span>],
      <span class="hljs-attr">&quot;exports&quot;</span>: [<span class="hljs-string">&quot;AuthService&quot;</span>],
      <span class="hljs-attr">&quot;vector&quot;</span>: [<span class="hljs-number">0.2</span>, <span class="hljs-number">0.4</span>, <span class="hljs-number">0.7</span>, ...]
    }
  },
  <span class="hljs-attr">&quot;dependencies&quot;</span>: {
    <span class="hljs-attr">&quot;userService.js&quot;</span>: {
      <span class="hljs-attr">&quot;dependsOn&quot;</span>: [<span class="hljs-string">&quot;validator.js&quot;</span>, <span class="hljs-string">&quot;userModel.js&quot;</span>],
      <span class="hljs-attr">&quot;usedBy&quot;</span>: [<span class="hljs-string">&quot;authService.js&quot;</span>, <span class="hljs-string">&quot;userController.js&quot;</span>]
    }
  },
  <span class="hljs-attr">&quot;functions&quot;</span>: {
    <span class="hljs-attr">&quot;createUser&quot;</span>: {
      <span class="hljs-attr">&quot;file&quot;</span>: <span class="hljs-string">&quot;userService.js&quot;</span>,
      <span class="hljs-attr">&quot;calledBy&quot;</span>: [<span class="hljs-string">&quot;authService.register&quot;</span>, <span class="hljs-string">&quot;userController.create&quot;</span>]
    }
  }
}
</code></pre>
<h3 id="3. Diff &#x51FA;&#x73B0;"><a href="#3. Diff &#x51FA;&#x73B0;"></a>3. <strong>Diff &#x51FA;&#x73B0;</strong></h3>
<p>&#x5047;&#x8BBE;&#x6709;&#x4EBA;&#x4FEE;&#x6539;&#x4E86; <code>userService.js</code>&#xFF1A;</p>
<pre><code class="language-diff">// userService.js
export class UserService {
  async createUser(userData) {
<span class="hljs-addition">+   // &#x65B0;&#x589E;&#xFF1A;&#x68C0;&#x67E5;&#x7528;&#x6237;&#x540D;&#x957F;&#x5EA6;</span>
<span class="hljs-addition">+   if (userData.username.length &lt; 3) {</span>
<span class="hljs-addition">+     throw new Error(&apos;Username too short&apos;);</span>
<span class="hljs-addition">+   }</span>
    if (!validateEmail(userData.email)) {
      throw new Error(&apos;Invalid email&apos;);
    }
    return UserModel.create(userData);
  }
}
</code></pre>
<h3 id="4. Diff &#x5206;&#x6790;&#x6D41;&#x7A0B;"><a href="#4. Diff &#x5206;&#x6790;&#x6D41;&#x7A0B;"></a>4. <strong>Diff &#x5206;&#x6790;&#x6D41;&#x7A0B;</strong></h3>
<h4 id="4.1 &#x89E3;&#x6790;&#x53D8;&#x66F4;"><a href="#4.1 &#x89E3;&#x6790;&#x53D8;&#x66F4;"></a>4.1 <strong>&#x89E3;&#x6790;&#x53D8;&#x66F4;</strong></h4>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> diffAnalysis = {
  <span class="hljs-attr">changedFiles</span>: [<span class="hljs-string">&apos;userService.js&apos;</span>],
  <span class="hljs-attr">changedFunctions</span>: [<span class="hljs-string">&apos;createUser&apos;</span>],
  <span class="hljs-attr">changeType</span>: <span class="hljs-string">&apos;logic_modification&apos;</span>,
  <span class="hljs-attr">addedValidation</span>: <span class="hljs-string">&apos;username.length&apos;</span>
};
</code></pre>
<h4 id="4.2 &#x67E5;&#x627E;&#x76F8;&#x5173;&#x6587;&#x4EF6;"><a href="#4.2 &#x67E5;&#x627E;&#x76F8;&#x5173;&#x6587;&#x4EF6;"></a>4.2 <strong>&#x67E5;&#x627E;&#x76F8;&#x5173;&#x6587;&#x4EF6;</strong></h4>
<pre><code class="language-javascript"><span class="hljs-comment">// &#x4ECE; index &#x4E2D;&#x67E5;&#x627E;</span>
<span class="hljs-keyword">const</span> relatedFiles = [
  <span class="hljs-comment">// &#x76F4;&#x63A5;&#x4F9D;&#x8D56;&#xFF1A;&#x8C01;&#x8C03;&#x7528;&#x4E86; createUser&#xFF1F;</span>
  <span class="hljs-string">&apos;authService.js&apos;</span>,      <span class="hljs-comment">// &#x56E0;&#x4E3A; authService.register &#x8C03;&#x7528;&#x4E86; createUser</span>
  <span class="hljs-string">&apos;userController.js&apos;</span>,   <span class="hljs-comment">// &#x56E0;&#x4E3A; userController.create &#x8C03;&#x7528;&#x4E86; createUser</span>
  
  <span class="hljs-comment">// &#x76F8;&#x5173;&#x4F9D;&#x8D56;&#xFF1A;createUser &#x4F9D;&#x8D56;&#x4EC0;&#x4E48;&#xFF1F;</span>
  <span class="hljs-string">&apos;userModel.js&apos;</span>,        <span class="hljs-comment">// &#x56E0;&#x4E3A; createUser &#x4F7F;&#x7528;&#x4E86; UserModel</span>
  <span class="hljs-string">&apos;validator.js&apos;</span>         <span class="hljs-comment">// &#x56E0;&#x4E3A; createUser &#x4F7F;&#x7528;&#x4E86; validateEmail</span>
];
</code></pre>
<h4 id="4.3 &#x63D0;&#x53D6;&#x76F8;&#x5173;&#x4EE3;&#x7801;&#x7247;&#x6BB5;"><a href="#4.3 &#x63D0;&#x53D6;&#x76F8;&#x5173;&#x4EE3;&#x7801;&#x7247;&#x6BB5;"></a>4.3 <strong>&#x63D0;&#x53D6;&#x76F8;&#x5173;&#x4EE3;&#x7801;&#x7247;&#x6BB5;</strong></h4>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> contextSnippets = [
  <span class="hljs-comment">// authService.js &#x4E2D;&#x7684;&#x76F8;&#x5173;&#x90E8;&#x5206;</span>
  <span class="hljs-string">\`async register(userData) {
    return this.userService.createUser(userData); // &#x8FD9;&#x91CC;&#x4F1A;&#x53D7;&#x5F71;&#x54CD;
  }\`</span>,
  
  <span class="hljs-comment">// userController.js &#x4E2D;&#x7684;&#x76F8;&#x5173;&#x90E8;&#x5206;  </span>
  <span class="hljs-string">\`async create(req, res) {
    const userData = req.body;
    const user = await this.userService.createUser(userData); // &#x8FD9;&#x91CC;&#x4F1A;&#x53D7;&#x5F71;&#x54CD;
  }\`</span>,
  
  <span class="hljs-comment">// userModel.js &#x4E2D;&#x7684;&#x76F8;&#x5173;&#x90E8;&#x5206;</span>
  <span class="hljs-string">\`static create(userData) {
    // &#x9700;&#x8981;&#x786E;&#x4FDD; username &#x5B57;&#x6BB5;&#x5B58;&#x5728;
    return new User(userData);
  }\`</span>
];
</code></pre>
<h3 id="5. &#x6784;&#x5EFA; Code Review &#x4E0A;&#x4E0B;&#x6587;"><a href="#5. &#x6784;&#x5EFA; Code Review &#x4E0A;&#x4E0B;&#x6587;"></a>5. <strong>&#x6784;&#x5EFA; Code Review &#x4E0A;&#x4E0B;&#x6587;</strong></h3>
<p>&#x6700;&#x7EC8;&#x53D1;&#x9001;&#x7ED9; AI &#x7684;&#x4E0A;&#x4E0B;&#x6587;&#xFF1A;</p>
<pre><code>## &#x53D8;&#x66F4;&#x5185;&#x5BB9;
userService.js &#x7684; createUser &#x65B9;&#x6CD5;&#x65B0;&#x589E;&#x4E86;&#x7528;&#x6237;&#x540D;&#x957F;&#x5EA6;&#x9A8C;&#x8BC1;

## &#x76F8;&#x5173;&#x4EE3;&#x7801;&#x4E0A;&#x4E0B;&#x6587;

### &#x8C03;&#x7528;&#x65B9; 1: authService.js
\`\`\`javascript
async register(userData) {
  return this.userService.createUser(userData); // &#x9700;&#x8981;&#x786E;&#x4FDD;&#x4F20;&#x5165;&#x7684; userData &#x6709; username
}
</code></pre>
<h3 id="&#x8C03;&#x7528;&#x65B9; 2: userController.js"><a href="#&#x8C03;&#x7528;&#x65B9; 2: userController.js"></a>&#x8C03;&#x7528;&#x65B9; 2: userController.js</h3>
<pre><code class="language-javascript"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">create</span>(<span class="hljs-params">req, res</span>)</span> {
  <span class="hljs-keyword">const</span> userData = req.body;
  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.userService.createUser(userData); <span class="hljs-comment">// &#x9700;&#x8981;&#x9A8C;&#x8BC1;&#x524D;&#x7AEF;&#x662F;&#x5426;&#x4F20;&#x5165; username</span>
}
</code></pre>
<h3 id="&#x6570;&#x636E;&#x6A21;&#x578B;: userModel.js"><a href="#&#x6570;&#x636E;&#x6A21;&#x578B;: userModel.js"></a>&#x6570;&#x636E;&#x6A21;&#x578B;: userModel.js</h3>
<pre><code class="language-javascript"><span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-title">create</span>(<span class="hljs-params">userData</span>)</span> {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> User(userData); <span class="hljs-comment">// &#x786E;&#x8BA4; User &#x6A21;&#x578B;&#x662F;&#x5426;&#x5305;&#x542B; username &#x5B57;&#x6BB5;</span>
}
</code></pre>
<h3 id="6. AI &#x5206;&#x6790;&#x7ED3;&#x679C;"><a href="#6. AI &#x5206;&#x6790;&#x7ED3;&#x679C;"></a>6. <strong>AI &#x5206;&#x6790;&#x7ED3;&#x679C;</strong></h3>
<p>&#x57FA;&#x4E8E;&#x8FD9;&#x4E2A;&#x4E0A;&#x4E0B;&#x6587;&#xFF0C;AI &#x80FD;&#x591F;&#x53D1;&#x73B0;&#xFF1A;</p>
<ol>
<li><strong>&#x6F5C;&#x5728;&#x95EE;&#x9898;</strong>&#xFF1A;&#x65B0;&#x589E;&#x7684; <code>username.length</code> &#x68C0;&#x67E5;&#x53EF;&#x80FD;&#x5BFC;&#x81F4; <code>userData.username</code> &#x4E3A; undefined &#x65F6;&#x62A5;&#x9519;</li>
<li><strong>&#x5F71;&#x54CD;&#x8303;&#x56F4;</strong>&#xFF1A;<code>authService.register</code> &#x548C; <code>userController.create</code> &#x90FD;&#x9700;&#x8981;&#x786E;&#x4FDD;&#x4F20;&#x5165; username</li>
<li><strong>&#x5EFA;&#x8BAE;</strong>&#xFF1A;
<ul>
<li>&#x6DFB;&#x52A0; username &#x5B58;&#x5728;&#x6027;&#x68C0;&#x67E5;</li>
<li>&#x66F4;&#x65B0;&#x76F8;&#x5173;&#x7684;&#x6D4B;&#x8BD5;&#x7528;&#x4F8B;</li>
<li>&#x68C0;&#x67E5;&#x524D;&#x7AEF;&#x662F;&#x5426;&#x6B63;&#x786E;&#x4F20;&#x9012; username &#x5B57;&#x6BB5;</li>
</ul>
</li>
</ol>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x6574;&#x4E2A;&#x6D41;&#x7A0B;&#x5C31;&#x662F;&#xFF1A;</p>
<ol>
<li><strong>&#x5EFA;&#x7ACB;&#x7D22;&#x5F15;</strong>&#xFF1A;&#x5206;&#x6790;&#x4EE3;&#x7801;&#x7ED3;&#x6784;&#x548C;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;</li>
<li><strong>&#x89E3;&#x6790;&#x53D8;&#x66F4;</strong>&#xFF1A;&#x8BC6;&#x522B;&#x4FEE;&#x6539;&#x4E86;&#x4EC0;&#x4E48;</li>
<li><strong>&#x67E5;&#x627E;&#x76F8;&#x5173;</strong>&#xFF1A;&#x4ECE;&#x7D22;&#x5F15;&#x4E2D;&#x627E;&#x5230;&#x76F8;&#x5173;&#x7684;&#x6587;&#x4EF6;&#x548C;&#x51FD;&#x6570;</li>
<li><strong>&#x63D0;&#x53D6;&#x7247;&#x6BB5;</strong>&#xFF1A;&#x53EA;&#x53D6;&#x76F8;&#x5173;&#x7684;&#x4EE3;&#x7801;&#x7247;&#x6BB5;&#xFF0C;&#x4E0D;&#x662F;&#x6574;&#x4E2A;&#x6587;&#x4EF6;</li>
<li><strong>&#x6784;&#x5EFA;&#x4E0A;&#x4E0B;&#x6587;</strong>&#xFF1A;&#x7EC4;&#x88C5;&#x6210; AI &#x80FD;&#x7406;&#x89E3;&#x7684;&#x683C;&#x5F0F;&#x8FDB;&#x884C;&#x5206;&#x6790;</li>
</ol>
`,n=[{level:1,title:"LSP（Language Server Protocol）",children:[{level:2,title:"Cursor 的 LSP 增强架构",children:[]},{level:2,title:"具体的智能处理机制",children:[]},{level:2,title:"实际优化示例",children:[]},{level:2,title:"技术实现推测",children:[]},{level:2,title:"这种架构的优势",children:[]}]},{level:1,title:"Code Index",children:[{level:2,title:"简单例子：一个用户管理系统",children:[{level:3,title:"1. 代码结构",children:[]},{level:3,title:"2. Code Index 建立过程",children:[{level:4,title:"2.1 文件内容示例",children:[]},{level:4,title:"2.2 Index 建立",children:[]}]},{level:3,title:"3. Diff 出现",children:[]},{level:3,title:"4. Diff 分析流程",children:[{level:4,title:"4.1 解析变更",children:[]},{level:4,title:"4.2 查找相关文件",children:[]},{level:4,title:"4.3 提取相关代码片段",children:[]}]},{level:3,title:"5. 构建 Code Review 上下文",children:[]},{level:3,title:"调用方 2: userController.js",children:[]},{level:3,title:"数据模型: userModel.js",children:[]},{level:3,title:"6. AI 分析结果",children:[]}]},{level:2,title:"总结",children:[]}]}];export{s as attributes,x as html,n as nestedHeaders};
