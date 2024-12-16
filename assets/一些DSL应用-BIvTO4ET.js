const s={},a=`<h1 id="Domain Specific Language"><a href="#Domain Specific Language"></a>Domain Specific Language</h1>
<h2 id="Virtual-dom"><a href="#Virtual-dom"></a>Virtual-dom</h2>
<p>&#x865A;&#x62DF;dom&#x64CD;&#x4F5C;&#x96C6;&#x5408;</p>
<ol>
<li>creat VNode-A &#xFF08;&#x7B80;&#x79F0; v-a&#xFF09;</li>
<li>create Dom-A (&#x7B80;&#x79F0; d-a) from v-a</li>
<li>change v-a to v-b</li>
<li>diff v-a and v-b to patches</li>
<li>patch d-a from patches</li>
<li>continue 3</li>
</ol>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> h = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;virtual-dom/h&apos;</span>);
<span class="hljs-keyword">var</span> diff = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;virtual-dom/diff&apos;</span>);
<span class="hljs-keyword">var</span> patch = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;virtual-dom/patch&apos;</span>);
<span class="hljs-keyword">var</span> createElement = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;virtual-dom/create-element&apos;</span>);


<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">render</span>(<span class="hljs-params">count</span>)  </span>{
    <span class="hljs-keyword">return</span> h(<span class="hljs-string">&apos;div&apos;</span>, {}, [<span class="hljs-built_in">String</span>(count)]);
}

<span class="hljs-comment">// 2: Initialise the document</span>
<span class="hljs-keyword">var</span> count = <span class="hljs-number">0</span>;      <span class="hljs-comment">// We need some app data. Here we just store a count.</span>
<span class="hljs-keyword">var</span> tree = render(count);              <span class="hljs-comment">// 1: &#x521B;&#x5EFA; VNode</span>
<span class="hljs-keyword">var</span> rootNode = createElement(tree);     <span class="hljs-comment">// 2. &#x751F;&#x6210;&#x5B9E;&#x9645;&#x7684; DOM</span>
<span class="hljs-built_in">document</span>.body.appendChild(rootNode);  <span class="hljs-comment">// 3. &#x6302;&#x8F7D;</span>
count++;
<span class="hljs-keyword">var</span> newTree = render(count);
<span class="hljs-keyword">var</span> patches = diff(tree, newTree); <span class="hljs-comment">// VNode diff</span>
rootNode = patch(rootNode, patches); <span class="hljs-comment">// Patch</span>
</code></pre>
<h3 id="Tools"><a href="#Tools"></a>Tools</h3>
<ul>
<li><a href="https://github.com/twilson63/html2hscript">html2hscript</a> - Parse HTML into hyperscript</li>
<li><a href="http://html2hscript.herokuapp.com/">html2hscript.herokuapp.com</a> - Online Tool that converts html snippets to hyperscript</li>
<li><a href="https://github.com/unframework/html2hyperscript">html2hyperscript</a> - Original commandline utility to convert legacy HTML markup into hyperscript</li>
</ul>
<h3 id="Reference"><a href="#Reference"></a>Reference</h3>
<ul>
<li><a href="https://github.com/hyperhype/hyperscript">hyperscript</a></li>
<li><a href="https://github1s.com/Matt-Esch/virtual-dom/blob/HEAD/README.md">virtual-dom</a></li>
<li><a href="https://github.com/snabbdom/snabbdom">snabbdom</a></li>
</ul>
<h2 id="HTML Manipulation"><a href="#HTML Manipulation"></a>HTML Manipulation</h2>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> MarkdownIt <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;markdown-it&apos;</span>
<span class="hljs-keyword">import</span> { parseDocument, DomUtils } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;htmlparser2&apos;</span>
<span class="hljs-keyword">import</span> renderDom <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;dom-serializer&apos;</span>
<span class="hljs-keyword">import</span> { Element } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;domhandler&apos;</span>

<span class="hljs-keyword">let</span> html = <span class="hljs-keyword">new</span> MarkdownIt(options).render(mdContent)
<span class="hljs-keyword">const</span> rootDom = parseDocument(html) <span class="hljs-comment">// parse dom to JSON so we can easily manipulate</span>

<span class="hljs-comment">// inject hash tag to header tag</span>
<span class="hljs-keyword">let</span> hElements = rootDom.children.filter(
        <span class="hljs-function"><span class="hljs-params">rootSibling</span> =&gt;</span> rootSibling <span class="hljs-keyword">instanceof</span> Element &amp;&amp; [<span class="hljs-string">&apos;h1&apos;</span>, <span class="hljs-string">&apos;h2&apos;</span>, <span class="hljs-string">&apos;h3&apos;</span>, <span class="hljs-string">&apos;h4&apos;</span>, <span class="hljs-string">&apos;h5&apos;</span>, <span class="hljs-string">&apos;h6&apos;</span>].includes(rootSibling.tagName)
    ) <span class="hljs-keyword">as</span> Element[]

hElements.forEach(<span class="hljs-function"><span class="hljs-params">ele</span> =&gt;</span> {
    <span class="hljs-keyword">let</span> hName = DomUtils.textContent(ele)
    ele.attribs[<span class="hljs-string">&apos;id&apos;</span>] = hName
    <span class="hljs-comment">// inject hash link</span>
    <span class="hljs-keyword">let</span> newEle = <span class="hljs-keyword">new</span> Element(<span class="hljs-string">&apos;a&apos;</span>, { <span class="hljs-attr">href</span>: <span class="hljs-string">&apos;#&apos;</span> + hName }, <span class="hljs-literal">undefined</span>)
    DomUtils.prependChild(ele, newEle)
})

html = renderDom(rootDom) <span class="hljs-comment">// serialize json dom to string</span>

<span class="hljs-built_in">document</span>.body.appendChild(html);  <span class="hljs-comment">// &#x6302;&#x8F7D;</span>

</code></pre>
<h3 id="Ecosystem"><a href="#Ecosystem"></a>Ecosystem</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/fb55/htmlparser2">htmlparser2</a></td>
<td>Fast &amp; forgiving HTML/XML parser</td>
</tr>
<tr>
<td><a href="https://github.com/fb55/domhandler">domhandler</a></td>
<td>Handler for htmlparser2 that turns documents into a DOM</td>
</tr>
<tr>
<td><a href="https://github.com/fb55/domutils">domutils</a></td>
<td>Utilities for working with domhandler&apos;s DOM</td>
</tr>
<tr>
<td><a href="https://github.com/fb55/css-select">css-select</a></td>
<td>CSS selector engine, compatible with domhandler&apos;s DOM</td>
</tr>
<tr>
<td><a href="https://github.com/cheeriojs/cheerio">cheerio</a></td>
<td>The jQuery API for domhandler&apos;s DOM</td>
</tr>
<tr>
<td><a href="https://github.com/cheeriojs/dom-serializer">dom-serializer</a></td>
<td>Serializer for domhandler&apos;s DOM</td>
</tr>
</tbody>
</table>
<h2 id="Webpack"><a href="#Webpack"></a>Webpack</h2>
<pre><code class="language-ts"><span class="hljs-keyword">const</span> parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;@babel/parser&apos;</span>)
<span class="hljs-keyword">import</span> traverse <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@babel/traverse&apos;</span>
<span class="hljs-keyword">const</span> babel = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;@babel/core&apos;</span>)

<span class="hljs-comment">// parse to json</span>
<span class="hljs-keyword">const</span> ast = parser.parse(content, {
    <span class="hljs-attr">sourceType</span>: <span class="hljs-string">&apos;module&apos;</span>
  })
<span class="hljs-keyword">const</span> dependencies: Record&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">string</span>&gt; = {}

<span class="hljs-comment">// traverse with type visitor hooks to manipulate</span>
traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">ImportDeclaration</span>(<span class="hljs-params">{ node }</span>)</span> {
        <span class="hljs-keyword">const</span> dirname = path.dirname(filename)
        <span class="hljs-keyword">const</span> newFile = path.join(dirname, node.source.value)

        <span class="hljs-comment">// collect file dependecies</span>
        dependencies[node.source.value] = newFile
    }
})

<span class="hljs-comment">// code generation from json</span>
<span class="hljs-keyword">const</span> { code } = babel.transformFromAstSync(ast, content, {
    <span class="hljs-attr">presets</span>: [<span class="hljs-string">&quot;@babel/preset-env&quot;</span>]
})!

</code></pre>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<p>&#x4E00;&#x822C;compiler&#x64CD;&#x4F5C;&#x96C6;&#x5408;&#xFF1A;</p>
<ol>
<li>parse raw string to VNode</li>
<li>traverse VNode (visitor hooks with manipulation: insert , remove, modify, replace etc )</li>
<li>code generation or Serialize VNode to string</li>
</ol>
`,n=[{level:1,title:"Domain Specific Language",children:[{level:2,title:"Virtual-dom",children:[{level:3,title:"Tools",children:[]},{level:3,title:"Reference",children:[]}]},{level:2,title:"HTML Manipulation",children:[{level:3,title:"Ecosystem",children:[]}]},{level:2,title:"Webpack",children:[]},{level:2,title:"总结",children:[]}]}];export{s as attributes,a as html,n as nestedHeaders};
