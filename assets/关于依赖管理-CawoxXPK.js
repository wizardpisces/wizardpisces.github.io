const x={},F=`<h1 id="&#x5173;&#x4E8E;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;"><a href="#&#x5173;&#x4E8E;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;"></a>&#x5173;&#x4E8E;&#x4F9D;&#x8D56;&#x7BA1;&#x7406;</h1>
<h2 id="Javascript"><a href="#Javascript"></a>Javascript</h2>
<p>&#x4E3B;&#x6D41;Package Manager&#xFF1A; npm/yarn/pnpm
&#x4E3B;&#x6D41;Mono Repo Manager&#xFF1A;yarn/pnpm/lerna&#xFF08;&#x5206;&#x4E3A;&#x4E09;&#x79CD;&#x7C7B;&#x578B;&#xFF1A;package&#x72EC;&#x7ACB;node_modules&#x3001;Root&#x7EF4;&#x62A4;&#x516C;&#x5171;&#x5176;&#x4ED6;&#x5404;package&#x7EF4;&#x62A4;&#x3001;package&#x4F9D;&#x8D56;&#x5B8C;&#x5168;link&#x5230;Root&#xFF09;</p>
<ul>
<li>npm&#x8DDF;yarn&#x6BD4;&#x8F83;&#x7C7B;&#x4F3C;&#xFF0C;&#x90FD;&#x662F;&#x57FA;&#x4E8E;&#x516C;&#x5171;&#x6A21;&#x5757;&#x63D0;&#x5347;&#xFF0C;&#x4F9D;&#x8D56;&#x62CD;&#x5E73;</li>
<li>pnpm&#x57FA;&#x4E8E;symbolic link&#xFF0C;&#x5929;&#x7136;&#x652F;&#x6301;&#x591A;&#x5305;&#x5DE5;&#x7A0B;</li>
<li>&#x5176;&#x4E2D;lerna&#x5904;&#x4E8E;&#x66F4;&#x4E0A;&#x5C42;&#xFF0C;&#x57FA;&#x4E8E;npm&#x8FD9;&#x79CD;&#x66F4;&#x5E95;&#x5C42;&#x7684;Package Manager&#xFF0C;&#x7136;&#x540E;&#x6269;&#x5C55;&#x66F4;&#x591A;&#x7684;&#x591A;&#x5305;&#x7BA1;&#x7406;&#x529F;&#x80FD;&#xFF1B;&#x672C;&#x4EBA;&#x5BF9;lerna&#x7684;&#x4F7F;&#x7528;&#x8FD8;&#x6BD4;&#x8F83;&#x6D45;&#xFF0C;&#x5C31;&#x4E0D;&#x6DF1;&#x5165;&#x63A2;&#x8BA8;</li>
</ul>
<p>&#x53D1;&#x5C55;&#x7684;&#x5927;&#x81F4;&#x65B9;&#x5411;</p>
<ol>
<li>&#x5B89;&#x88C5;&#x901F;&#x5EA6;</li>
<li>&#x5360;&#x7528;&#x7A7A;&#x95F4;</li>
<li>&#x7A33;&#x5B9A;&#x6027;</li>
<li>&#x5BF9;&#x591A;&#x5305;&#x5DE5;&#x7A0B;&#x7684;&#x652F;&#x6301;</li>
<li>&#x7CFB;&#x7EDF;&#x517C;&#x5BB9;&#x6027;</li>
</ol>
<p>&#x76EE;&#x524D;pnpm&#x7531;&#x4E8E;&#x672C;&#x8EAB;&#x6587;&#x4EF6;&#x7B26;&#x53F7;&#x94FE;&#x63A5;&#x7684;&#x5B89;&#x88C5;&#x539F;&#x7406;&#xFF0C;&#x5728;&#x5B89;&#x88C5;&#x901F;&#x5EA6;/&#x78C1;&#x76D8;&#x7A7A;&#x95F4;&#x5360;&#x7528;/&#x591A;&#x5305;&#x5DE5;&#x7A0B;&#x652F;&#x6301;&#x4E0A;&#x5360;&#x636E;&#x4E0A;&#x98CE;&#xFF1B;&#x987A;&#x5E26;&#x89E3;&#x51B3;&#x4E86;npm&#x8DDF;yarn&#x7684;&#x5E7D;&#x7075;&#x5F15;&#x7528;&#xFF08;&#x6CA1;&#x5728;package.json&#x58F0;&#x660E;&#x7684;&#x4E8C;&#x624B;&#x4F9D;&#x8D56;&#x5374;&#x88AB;&#x4F7F;&#x7528;&#x4E86;&#xFF09;&#x4EE5;&#x53CA;&#x540C;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x5305;&#x591A;&#x6B21;&#x5B89;&#x88C5;&#xFF08;&#x7531;&#x4E8E;&#x516C;&#x5171;&#x63D0;&#x5347;&#x662F;&#x6309;&#x7167;&#x7248;&#x672C;&#x63D0;&#x5347;&#xFF0C;&#x4E00;&#x4E2A;&#x7248;&#x672C;&#x63D0;&#x5347;&#x540E;&#x5176;&#x4ED6;&#x7684;&#x90FD;&#x4F1A;&#x5D4C;&#x5957;&#x4E0B;&#x53BB;&#xFF09;&#x7684;&#x95EE;&#x9898;</p>
<h3 id="&#x6709;&#x610F;&#x601D;&#x7684;&#x73B0;&#x8C61;"><a href="#&#x6709;&#x610F;&#x601D;&#x7684;&#x73B0;&#x8C61;"></a>&#x6709;&#x610F;&#x601D;&#x7684;&#x73B0;&#x8C61;</h3>
<ul>
<li>pnpm Mono&#x5DE5;&#x7A0B;&#x53EA;&#x6709;&#x4E00;&#x4E2A;lock&#x6587;&#x4EF6;&#xFF0C;&#x5728;package&#x4E0B;&#x5B89;&#x88C5;&#x7684;&#x4F9D;&#x8D56;&#x4E5F;&#x4F1A;&#x81EA;&#x52A8;link&#x5230;root&#x552F;&#x4E00;&#x7684;.pnpm&#x4E0B;&#xFF0C;&#x5E76;&#x66F4;&#x65B0;root&#x7684;lock&#xFF1B;&#x8FD9;&#x4E00;&#x70B9;yarn&#x4E5F;&#x53EA;&#x6709;&#x4E00;&#x4E2A;lock&#xFF0C;&#x53EA;&#x662F;package&#x7684;&#x4F9D;&#x8D56;&#x662F;&#x516C;&#x5171;&#x4F9D;&#x8D56;&#x63D0;&#x5347;&#x800C;&#x4E0D;&#x662F;link</li>
<li>pnpm&#x4F1A;&#x5728;&#x5B89;&#x88C5;&#x65F6;&#x667A;&#x80FD;&#x63D0;&#x793A;&#x5173;&#x4E8E;peer dependency&#x7684;&#x95EE;&#x9898;&#xFF0C;&#x4F8B;&#x5982;&#x5B89;&#x88C5; @swc/jest&#x4F1A;&#x63D0;&#x793A; &#x201C;&#x2715; missing peer @swc/core@*&#x201D;&#xFF1B;&#x4F46;yarn&#x4E0D;&#x4F1A;</li>
</ul>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li>https://www.shangmayuan.com/a/7c2b42a5aa0a4f62815b8154.html</li>
</ul>
`,E=[{level:1,title:"关于依赖管理",children:[{level:2,title:"Javascript",children:[{level:3,title:"有意思的现象",children:[]}]}]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
