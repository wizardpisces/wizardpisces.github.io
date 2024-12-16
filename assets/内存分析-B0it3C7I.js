const x={title:"内存分析"},e=`<h1 id="Node&#x5185;&#x5B58;&#x5206;&#x6790;"><a href="#Node&#x5185;&#x5B58;&#x5206;&#x6790;"></a>Node&#x5185;&#x5B58;&#x5206;&#x6790;</h1>
<p>&#x957F;&#x65F6;&#x95F4;&#xFF08;&#x4E00;&#x822C;&#x662F;&#x51E0;&#x5929;&#x65F6;&#x95F4;&#xFF09;&#x4E00;&#x6761;&#x5185;&#x5B58;&#x53EA;&#x589E;&#x4E0D;&#x51CF;&#x7684;&#x66F2;&#x7EBF;&#x5C31;&#x6807;&#x5FD7;&#x7740;&#x5185;&#x5B58;&#x6CC4;&#x9732;&#x4E86;</p>
<h2 id="&#x5185;&#x5B58;&#x6CC4;&#x9732;&#x5206;&#x6790;&#x57FA;&#x672C;&#x6B65;&#x9AA4;"><a href="#&#x5185;&#x5B58;&#x6CC4;&#x9732;&#x5206;&#x6790;&#x57FA;&#x672C;&#x6B65;&#x9AA4;"></a>&#x5185;&#x5B58;&#x6CC4;&#x9732;&#x5206;&#x6790;&#x57FA;&#x672C;&#x6B65;&#x9AA4;</h2>
<ol start="0">
<li>node&#x5F15;&#x5165; require(&apos;heapdump&apos;)</li>
<li>&#x542F;&#x52A8;node, eg: npm&#xA0;run&#xA0;start</li>
<li>lsof&#xA0;-i:8080</li>
<li>kill&#xA0;-USR2&#xA0;<pid>&#xFF08;&#x7B2C;&#x4E09;&#x6B65;&#x67E5;&#x770B;&#x5230;&#x7684;pid&#xFF09;</pid></li>
<li>&#x6839;&#x636E;&#x60C5;&#x51B5;&#x8C03;&#x6574;&#x538B;&#x6D4B;&#x53C2;&#x6570; autocannon&#xA0;-c&#xA0;10&#xA0;-a&#xA0;10&#xA0;http://localhost:8080</li>
<li>&#x91CD;&#x590D;&#x6267;&#x884C;3&#x6B21;&#x6B65;&#x9AA4;&#xA0;4&#xFF0C;5</li>
<li>&#x6D4F;&#x89C8;&#x5668;&#x6253;&#x5F00;&#x63A7;&#x5236;&#x53F0;memory&#x680F;&#x76EE;&#xFF0C;&#x6309;&#x7167;&#x751F;&#x6210;&#x987A;&#x5E8F;&#x8F7D;&#x5165;&#x751F;&#x4EA7;&#x7684;&#x5185;&#x5B58;&#x5FEB;&#x7167;&#xA0;&#xA0;heapdump&#x5F00;&#x5934;&#x7684;&#x6587;&#x4EF6;</li>
</ol>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://marmelab.com/blog/2018/04/03/how-to-track-and-fix-memory-leak-with-nodejs.html</li>
<li>https://github.com/aliyun-node/Node.js-Troubleshooting-Guide/blob/master/0x03_%E5%B7%A5%E5%85%B7%E7%AF%87_%E6%AD%A3%E7%A1%AE%E6%89%93%E5%BC%80%20Chrome%20devtools.md</li>
</ul>
`,l=[{level:1,title:"Node内存分析",children:[{level:2,title:"内存泄露分析基本步骤",children:[]},{level:2,title:"Reference",children:[]}]}];export{x as attributes,e as html,l as nestedHeaders};
