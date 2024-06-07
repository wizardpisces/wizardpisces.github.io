const x={},F=`<h1 id="ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;"><a href="#ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;"></a>ControlNet &#x4E0E; LoRA &#x63D2;&#x4EF6;</h1>
<p>ControlNet &#x548C; LoRA &#x5E76;&#x4E0D;&#x662F;&#x5B8C;&#x5168;&#x76F8;&#x540C;&#x7684;&#x4E1C;&#x897F;&#xFF0C;&#x5C3D;&#x7BA1;&#x5B83;&#x4EEC;&#x90FD;&#x4E0E;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x548C;&#x56FE;&#x50CF;&#x751F;&#x6210;&#x6709;&#x5173;&#x3002;</p>
<p>ControlNet&#xFF1A;</p>
<ul>
<li>&#x4F5C;&#x7528;&#xFF1A;&#x7528;&#x4E8E;&#x63A7;&#x5236; AI &#x56FE;&#x50CF;&#x751F;&#x6210;&#x3002;</li>
<li>&#x7279;&#x70B9;&#xFF1A;&#x5141;&#x8BB8;&#x7528;&#x6237;&#x5BF9;&#x751F;&#x6210;&#x7684;&#x56FE;&#x50CF;&#x8FDB;&#x884C;&#x7CBE;&#x7EC6;&#x7684;&#x63A7;&#x5236;&#x3002;</li>
<li>&#x5E94;&#x7528;&#xFF1A;&#x5728;&#x8BA1;&#x7B97;&#x673A;&#x89C6;&#x89C9;&#x3001;&#x827A;&#x672F;&#x8BBE;&#x8BA1;&#x3001;&#x865A;&#x62DF;&#x73B0;&#x5B9E;&#x7B49;&#x9886;&#x57DF;&#x4E2D;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002;</li>
<li>&#x793A;&#x4F8B;&#xFF1A;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x4E0A;&#x4F20;&#x7EBF;&#x7A3F;&#xFF0C;&#x8BA9; AI &#x5E2E;&#x52A9;&#x586B;&#x8272;&#x6E32;&#x67D3;&#x3001;&#x63A7;&#x5236;&#x4EBA;&#x7269;&#x59FF;&#x6001;&#x7B49;&#x3002;</li>
</ul>
<p>LoRA&#xFF1A;</p>
<ul>
<li>&#x4F5C;&#x7528;&#xFF1A;&#x7528;&#x4E8E;&#x5927;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x5FAE;&#x8C03;&#x3002;</li>
<li>&#x7279;&#x70B9;&#xFF1A;&#x901A;&#x8FC7;&#x964D;&#x7EF4;&#x548C;&#x5347;&#x7EF4;&#x6765;&#x6A21;&#x62DF;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x91CF;&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C11;&#x8BAD;&#x7EC3;&#x6210;&#x672C;&#x3002;</li>
<li>&#x5E94;&#x7528;&#xFF1A;&#x5728;&#x53C2;&#x6570;&#x91CF;&#x8F83;&#x5927;&#x7684;&#x6A21;&#x578B;&#x5FAE;&#x8C03;&#x4E2D;&#x8868;&#x73B0;&#x4F18;&#x5F02;&#x3002;</li>
</ul>
<h1 id="ControlNet"><a href="#ControlNet"></a>ControlNet</h1>
<p>ControlNet &#x662F;&#x4E00;&#x4E2A;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#xFF0C;&#x7528;&#x4E8E;&#x63A7;&#x5236; Stable Diffusion&#xFF08;SD&#xFF09;&#x6A21;&#x578B;&#x5E76;&#x6269;&#x5C55;&#x5176;&#x8F93;&#x5165;&#x6761;&#x4EF6;&#x3002;</p>
<p>&#x4F5C;&#x7528;&#xFF1A;</p>
<ul>
<li>&#x53EF;&#x63A7;&#x6027;&#x63D0;&#x5347;&#xFF1A;ControlNet &#x5141;&#x8BB8;&#x521B;&#x4F5C;&#x8005;&#x901A;&#x8FC7;&#x6DFB;&#x52A0;&#x989D;&#x5916;&#x7684;&#x63A7;&#x5236;&#x6761;&#x4EF6;&#x6765;&#x5F15;&#x5BFC; SD &#x6A21;&#x578B;&#x751F;&#x6210;&#x56FE;&#x50CF;&#xFF0C;&#x4ECE;&#x800C;&#x63D0;&#x9AD8; AI &#x56FE;&#x50CF;&#x751F;&#x6210;&#x7684;&#x53EF;&#x63A7;&#x6027;&#x3002;</li>
<li>&#x591A;&#x6837;&#x6027;&#xFF1A;&#x5B83;&#x652F;&#x6301;&#x591A;&#x79CD;&#x8F93;&#x5165;&#x6761;&#x4EF6;&#xFF0C;&#x5982; Canny &#x8FB9;&#x7F18;&#x3001;&#x8BED;&#x4E49;&#x5206;&#x5272;&#x56FE;&#x3001;&#x5173;&#x952E;&#x70B9;&#x3001;&#x6D82;&#x9E26;&#x7B49;&#xFF0C;&#x62D3;&#x5C55;&#x4E86; SD &#x7684;&#x80FD;&#x529B;&#x8FB9;&#x754C;&#x3002;</li>
</ul>
<p>&#x91CD;&#x8981;&#x6027;&#xFF1A;</p>
<ul>
<li>
<p>&#x521B;&#x4F5C;&#x81EA;&#x7531;&#x5EA6;&#xFF1A;ControlNet &#x8BA9;&#x521B;&#x4F5C;&#x8005;&#x66F4;&#x7CBE;&#x7EC6;&#x5730;&#x63A7;&#x5236;&#x751F;&#x6210;&#x56FE;&#x50CF;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5305;&#x62EC;&#x4E3B;&#x4F53;&#x3001;&#x80CC;&#x666F;&#x3001;&#x98CE;&#x683C;&#x7B49;&#xFF0C;&#x4ECE;&#x800C;&#x5B9E;&#x73B0;&#x66F4;&#x597D;&#x7684;&#x521B;&#x4F5C;&#x81EA;&#x7531;&#x5EA6;&#x3002;</p>
</li>
<li>
<p>&#x5546;&#x4E1A;&#x5E94;&#x7528;&#xFF1A;&#x53EF;&#x63A7;&#x7684; AI &#x7ED8;&#x753B;&#x5BF9;&#x5546;&#x4E1A;&#x843D;&#x5730;&#x5177;&#x6709;&#x91CD;&#x8981;&#x610F;&#x4E49;&#xFF0C;&#x4F8B;&#x5982;&#x5E7F;&#x544A;&#x3001;&#x8BBE;&#x8BA1;&#x3001;&#x827A;&#x672F;&#x7B49;&#x9886;&#x57DF;&#x3002;</p>
</li>
<li>
<p><a href="https://juejin.cn/post/7210369671656505399">ControlNet &#x8BBA;&#x6587;&#x89E3;&#x6790;</a></p>
</li>
</ul>
<h1 id="LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;"><a href="#LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;"></a>LoRA&#xFF08;Low-Rank Adaptation&#xFF09;&#x4F4E;&#x79E9;&#x9002;&#x5E94;</h1>
<p>LoRA &#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5927;&#x6A21;&#x578B;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x5FAE;&#x8C03;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="&#x4E0E;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x7684;&#x533A;&#x522B;"><a href="#&#x4E0E;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x7684;&#x533A;&#x522B;"></a>&#x4E0E;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x7684;&#x533A;&#x522B;</h2>
<ul>
<li>&#x63D2;&#x5165;&#x4F4D;&#x7F6E;&#xFF1A;
<ul>
<li>LoRA&#x662F;&#x4EE5;&#x6B8B;&#x5DEE;&#x8FDE;&#x63A5;&#x7684;&#x5F62;&#x5F0F;&#x201C;&#x5E76;&#x8054;&#x201D;&#x5728;Transformer&#x7684;Q&#x3001;K&#x3001;V&#x3001;O&#x77E9;&#x9635;&#x4E0A;&#x3002;</li>
<li>&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x901A;&#x5E38;&#x662F;&#x5728;&#x5168;&#x8FDE;&#x63A5;&#x5C42;&#x540E;&#x9762;&#x63D2;&#x5165;&#x9002;&#x914D;&#x5668;&#x3002;</li>
</ul>
</li>
<li>&#x63A8;&#x7406;&#x5EF6;&#x8FDF;&#xFF1A;
<ul>
<li>LoRA&#x5728;&#x8BAD;&#x7EC3;&#x5B8C;&#x540E;&#xFF0C;&#x5176;&#x53C2;&#x6570;&#x53EF;&#x4EE5;&#x4E0E;&#x539F;&#x6709;&#x9884;&#x8BAD;&#x7EC3;&#x6A21;&#x578B;&#x76F4;&#x63A5;&#x5408;&#x5E76;&#xFF0C;&#x53D8;&#x56DE;&#x5355;&#x5206;&#x652F;&#x7ED3;&#x6784;&#xFF0C;&#x4E0D;&#x4F1A;&#x5F15;&#x5165;&#x989D;&#x5916;&#x7684;&#x5EF6;&#x8FDF;&#x3002;</li>
<li>&#x9002;&#x914D;&#x5668;&#x7531;&#x4E8E;&#x5F15;&#x5165;&#x4E86;&#x989D;&#x5916;&#x7684;&#x4E32;&#x8054;&#x7F51;&#x7EDC;&#x5C42;&#xFF0C;&#x4F1A;&#x5E26;&#x6765;&#x63A8;&#x7406;&#x65F6;&#x95F4;&#x7684;&#x589E;&#x52A0;&#x3002;</li>
</ul>
</li>
</ul>
<p>LoRA&#x901A;&#x8FC7;&#x53EA;&#x66F4;&#x65B0;&#x6A21;&#x578B;&#x6743;&#x91CD;&#x7684;&#x5C0F;&#x90E8;&#x5206;&#x6765;&#x63D0;&#x9AD8;&#x6548;&#x7387;&#xFF0C;&#x800C;&#x9002;&#x914D;&#x5668;&#x5219;&#x662F;&#x63D2;&#x5165;&#x5728;&#x4E0D;&#x540C;&#x4F4D;&#x7F6E;&#xFF0C;&#x5177;&#x6709;&#x4E00;&#x4E9B;&#x4E0D;&#x540C;&#x7684;&#x7279;&#x70B9;&#x3002;</p>
<h2 id="&#x964D;&#x7EF4;&#x548C;&#x5347;&#x7EF4;"><a href="#&#x964D;&#x7EF4;&#x548C;&#x5347;&#x7EF4;"></a>&#x964D;&#x7EF4;&#x548C;&#x5347;&#x7EF4;</h2>
<p>&#x964D;&#x7EF4; (Dimensionality Reduction)&#xFF1A;</p>
<ul>
<li>&#x5728;&#x539F;&#x59CB;&#x9884;&#x8BAD;&#x7EC3;&#x8BED;&#x8A00;&#x6A21;&#x578B;&#xFF08;PLM&#xFF09;&#x65C1;&#x8FB9;&#x589E;&#x52A0;&#x4E00;&#x4E2A;&#x65C1;&#x8DEF;&#x3002;</li>
<li>&#x901A;&#x8FC7;&#x4F4E;&#x79E9;&#x5206;&#x89E3;&#x6765;&#x6A21;&#x62DF;&#x53C2;&#x6570;&#x7684;&#x66F4;&#x65B0;&#x91CF;&#x3002;</li>
<li>&#x964D;&#x7EF4;&#x901A;&#x5E38;&#x5305;&#x62EC;&#x4E24;&#x4E2A;&#x6B65;&#x9AA4;&#xFF1A;&#x964D;&#x7EF4;&#x77E9;&#x9635; A &#x548C;&#x5347;&#x7EF4;&#x77E9;&#x9635; B&#x3002;</li>
<li>&#x5728;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x539F;&#x6A21;&#x578B;&#x7684;&#x53C2;&#x6570;&#x4FDD;&#x6301;&#x56FA;&#x5B9A;&#xFF0C;&#x53EA;&#x8BAD;&#x7EC3;&#x964D;&#x7EF4;&#x77E9;&#x9635; A &#x548C;&#x5347;&#x7EF4;&#x77E9;&#x9635; B&#x3002;</li>
<li>&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x663E;&#x8457;&#x51CF;&#x5C11;&#x8BAD;&#x7EC3;&#x6210;&#x672C;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x6301;&#x6A21;&#x578B;&#x7684;&#x6027;&#x80FD;&#x3002;</li>
</ul>
<p>&#x5347;&#x7EF4; (Dimensionality Expansion)&#xFF1A;</p>
<ul>
<li>&#x6A21;&#x578B;&#x7684;&#x8F93;&#x5165;&#x8F93;&#x51FA;&#x7EF4;&#x5EA6;&#x4E0D;&#x53D8;&#x3002;</li>
<li>&#x8F93;&#x51FA;&#x65F6;&#x5C06; BA &#x4E0E; PLM &#x7684;&#x53C2;&#x6570;&#x53E0;&#x52A0;&#x3002;</li>
<li>&#x7528;&#x968F;&#x673A;&#x9AD8;&#x65AF;&#x5206;&#x5E03;&#x521D;&#x59CB;&#x5316; A&#xFF0C;&#x7528; 0 &#x77E9;&#x9635;&#x521D;&#x59CB;&#x5316; B&#xFF0C;&#x4FDD;&#x8BC1;&#x8BAD;&#x7EC3;&#x7684;&#x5F00;&#x59CB;&#x6B64;&#x65C1;&#x8DEF;&#x77E9;&#x9635;&#x4F9D;&#x7136;&#x662F; 0 &#x77E9;&#x9635;&#x3002;</li>
<li>LoRA &#x5141;&#x8BB8;&#x6211;&#x4EEC;&#x901A;&#x8FC7;&#x4F18;&#x5316;&#x9002;&#x5E94;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BC6;&#x96C6;&#x5C42;&#x53D8;&#x5316;&#x7684;&#x79E9;&#x5206;&#x89E3;&#x77E9;&#x9635;&#xFF0C;&#x6765;&#x95F4;&#x63A5;&#x8BAD;&#x7EC3;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E2D;&#x7684;&#x4E00;&#x4E9B;&#x5BC6;&#x96C6;&#x5C42;&#xFF0C;&#x540C;&#x65F6;&#x4FDD;&#x6301;&#x9884;&#x5148;&#x8BAD;&#x7EC3;&#x7684;&#x6743;&#x91CD;&#x4E0D;&#x53D8;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x5728;&#x53C2;&#x6570;&#x91CF;&#x8F83;&#x5168;&#x53C2;&#x6570;&#x5FAE;&#x8C03;&#xFF08;Fine-Tuning&#xFF09;&#x663E;&#x8457;&#x964D;&#x4F4E;&#x7684;&#x540C;&#x65F6;&#xFF0C;&#x6027;&#x80FD;&#x4F18;&#x4E8E;&#x5176;&#x4ED6;&#x53C2;&#x6570;&#x9AD8;&#x6548;&#x5FAE;&#x8C03;&#x65B9;&#x6CD5;&#x3002;</li>
</ul>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li>GPT</li>
</ul>
`,E=[{level:1,title:"ControlNet \u4E0E LoRA \u63D2\u4EF6",children:[]},{level:1,title:"ControlNet",children:[]},{level:1,title:"LoRA\uFF08Low-Rank Adaptation\uFF09\u4F4E\u79E9\u9002\u5E94",children:[{level:2,title:"\u4E0E\u4F4E\u79E9\u5206\u89E3\u7684\u533A\u522B",children:[]},{level:2,title:"\u964D\u7EF4\u548C\u5347\u7EF4",children:[]}]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
