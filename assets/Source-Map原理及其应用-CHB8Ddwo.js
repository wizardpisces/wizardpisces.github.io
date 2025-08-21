const x={title:"Source-Map原理及其应用",description:"原理及其应用"},e=`<h2 id="&#x4EC0;&#x4E48;&#x662F; source-map?"><a href="#&#x4EC0;&#x4E48;&#x662F; source-map?"></a>&#x4EC0;&#x4E48;&#x662F; source-map?</h2>
<h3 id="&#x5E7F;&#x4E49;&#x89E3;&#x91CA;&#xFF1A;"><a href="#&#x5E7F;&#x4E49;&#x89E3;&#x91CA;&#xFF1A;"></a>&#x5E7F;&#x4E49;&#x89E3;&#x91CA;&#xFF1A;</h3>
<p>&#x6EAF;&#x6E90;</p>
<h3 id="&#x524D;&#x7AEF;&#x5F00;&#x53D1;"><a href="#&#x524D;&#x7AEF;&#x5F00;&#x53D1;"></a>&#x524D;&#x7AEF;&#x5F00;&#x53D1;</h3>
<p>&#x201C;A source map provides a way of mapping code within a compressed file back to it&#x2019;s original position in a source file&#x201D;</p>
<h3 id="V3 spec example:"><a href="#V3 spec example:"></a>V3 spec example:</h3>
<pre><code class="language-json">{
    version : 3,
    file: &quot;out.js&quot;,
    sourceRoot : &quot;&quot;,
    sources: [&quot;foo.js&quot;, &quot;bar.js&quot;],
    names: [&quot;src&quot;, &quot;maps&quot;, &quot;are&quot;, &quot;fun&quot;],
    mappings: &quot;AAgBC,SAAQ,CAAEA&quot;
}
</code></pre>
<h2 id="&#x4E3A;&#x4EC0;&#x4E48;&#x4F7F;&#x7528; source-map?(debug)"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x4F7F;&#x7528; source-map?(debug)"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x4F7F;&#x7528; source-map?(debug)</h2>
<p>&#x524D;&#x7AEF;&#x6A21;&#x5757;&#x6253;&#x5305;&#x53D1;&#x5E03;&#x57FA;&#x672C;&#x6D41;&#x7A0B;&#xFF1A;</p>
<p>Modules -&gt; compilers -&gt; assets</p>
<p>&#x4EE3;&#x7801;&#x8F6C;&#x6362;&#x7C7B;&#x578B;&#xFF1A;</p>
<ul>
<li>&#x7F16;&#x8BD1;&#xFF08;TypeScript)</li>
<li>&#x8F6C;&#x8BD1;&#xFF08;Babel&#xFF09;</li>
<li>&#x538B;&#x7F29;&#x6DF7;&#x6DC6;&#xFF08;UglifyJS&#xFF09;</li>
<li>&#x5408;&#x5E76;&#x591A;&#x4E2A;&#x6587;&#x4EF6;&#xFF0C;&#x51CF;&#x5C11;&#x5E26;&#x5BBD;&#x8BF7;&#x6C42;&#x3002;(Webpack, Rollup)</li>
</ul>
<ol>
<li>dev &#x73AF;&#x5883;&#x5982;&#x4F55;&#x5B9A;&#x4F4D;&#x8C03;&#x8BD5;&#xFF1F;</li>
<li>&#x4EA7;&#x7EBF;&#x51FA;&#x9519;&#x5982;&#x4F55;&#x5B9A;&#x4F4D;&#x8C03;&#x8BD5;&#xFF1F;</li>
</ol>
<h2 id="source-map &#x5982;&#x4F55;&#x6620;&#x5C04;"><a href="#source-map &#x5982;&#x4F55;&#x6620;&#x5C04;"></a>source-map &#x5982;&#x4F55;&#x6620;&#x5C04;</h2>
<p>mappings: &quot;&#x8F93;&#x51FA;&#x6587;&#x4EF6;&#x5217;&#x4F4D;&#x7F6E;|&#x8F93;&#x5165;&#x6587;&#x4EF6;&#x540D;|&#x8F93;&#x5165;&#x6587;&#x4EF6;&#x884C;&#x53F7;|&#x8F93;&#x5165;&#x6587;&#x4EF6;&#x5217;&#x53F7;,.....&quot;</p>
<h3 id="&#x4F18;&#x5316;&#x63AA;&#x65BD;&#xFF1A;"><a href="#&#x4F18;&#x5316;&#x63AA;&#x65BD;&#xFF1A;"></a>&#x4F18;&#x5316;&#x63AA;&#x65BD;&#xFF1A;</h3>
<ul>
<li>&#x6587;&#x4EF6;&#x540D;&#x63D0;&#x53D6;</li>
<li>&#x53EF;&#x7B26;&#x53F7;&#x5316;&#x5B57;&#x7B26;&#x7684;&#x63D0;&#x53D6;</li>
<li>&#x8BB0;&#x5F55;&#x76F8;&#x5BF9;&#x4F4D;&#x7F6E;</li>
<li>VLQ&#x7F16;&#x7801;</li>
</ul>
<p><a href="https://juejin.im/post/6844903869928079373">&#x8BE6;&#x7EC6;&#x53C2;&#x8003;</a></p>
<h2 id="souce-map &#x751F;&#x6210;&#x57FA;&#x672C;&#x6B65;&#x9AA4;"><a href="#souce-map &#x751F;&#x6210;&#x57FA;&#x672C;&#x6B65;&#x9AA4;"></a>souce-map &#x751F;&#x6210;&#x57FA;&#x672C;&#x6B65;&#x9AA4;</h2>
<ol>
<li>
<p>Transform code and note the new generated source location</p>
</li>
<li>
<p>Check for a difference in location between the original and generated code</p>
</li>
<li>
<p>Using these mapping build a source map</p>
</li>
</ol>
<p><a href="https://indepth.dev/source-maps-from-top-to-bottom/">&#x5177;&#x4F53;&#x53C2;&#x7167;&#x8FD9;&#x91CC;</a></p>
<h2 id="source-map &#x6620;&#x5C04;&#x53EF;&#x89C6;&#x5316;"><a href="#source-map &#x6620;&#x5C04;&#x53EF;&#x89C6;&#x5316;"></a>source-map &#x6620;&#x5C04;&#x53EF;&#x89C6;&#x5316;</h2>
<p><a href="https://sokra.github.io/source-map-visualization/#sass">online source-map visualization</a></p>
<h2 id="source-map test case &#x5199;&#x6CD5;"><a href="#source-map test case &#x5199;&#x6CD5;"></a>source-map test case &#x5199;&#x6CD5;</h2>
<p><a href="https://github.com/wizardpisces/tiny-sass-compiler/blob/master/src/__tests__/compile.spec.ts">&#x4E00;&#x79CD;&#x5199;&#x6CD5;</a></p>
<h2 id="&#x53C2;&#x8003;&#x8D44;&#x6599;"><a href="#&#x53C2;&#x8003;&#x8D44;&#x6599;"></a>&#x53C2;&#x8003;&#x8D44;&#x6599;</h2>
<ol>
<li>https://indepth.dev/source-maps-from-top-to-bottom/</li>
<li>https://juejin.im/post/6844903869928079373</li>
<li>https://www.npmjs.com/package/source-map</li>
<li>https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/</li>
</ol>
`,o=[{level:2,title:"什么是 source-map?",children:[{level:3,title:"广义解释：",children:[]},{level:3,title:"前端开发",children:[]},{level:3,title:"V3 spec example:",children:[]}]},{level:2,title:"为什么使用 source-map?(debug)",children:[]},{level:2,title:"source-map 如何映射",children:[{level:3,title:"优化措施：",children:[]}]},{level:2,title:"souce-map 生成基本步骤",children:[]},{level:2,title:"source-map 映射可视化",children:[]},{level:2,title:"source-map test case 写法",children:[]},{level:2,title:"参考资料",children:[]}];export{x as attributes,e as html,o as nestedHeaders};
