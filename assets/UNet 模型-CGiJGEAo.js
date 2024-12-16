const x={},F=`<h1 id="UNet"><a href="#UNet"></a>UNet</h1>
<p>UNet&#x662F;&#x50CF;&#x7D20;&#x7EA7;&#x5206;&#x7C7B;&#xFF0C;&#x8F93;&#x51FA;&#x7684;&#x5219;&#x662F;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x70B9;&#x7684;&#x7C7B;&#x522B;&#xFF0C;&#x5E38;&#x5E38;&#x7528;&#x5728;&#x751F;&#x7269;&#x533B;&#x5B66;&#x56FE;&#x50CF;&#x4E0A;&#xFF0C;&#x800C;&#x8BE5;&#x4EFB;&#x52A1;&#x4E2D;&#x56FE;&#x7247;&#x6570;&#x636E;&#x5F80;&#x5F80;&#x8F83;&#x5C11;&#x3002;(&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x4E00;&#x822C;&#x8F93;&#x51FA;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x6574;&#x4E2A;&#x56FE;&#x50CF;&#x7684;&#x7C7B;&#x6807;&#x7B7E;&#x3002;)</p>
<ul>
<li>
<p>UNet&#x91C7;&#x7528;&#x5168;&#x5377;&#x79EF;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;</p>
</li>
<li>
<p>&#x5DE6;&#x8FB9;&#x7F51;&#x7EDC;&#x4E3A;&#x7279;&#x5F81;&#x63D0;&#x53D6;&#x7F51;&#x7EDC;&#xFF1A;&#x4F7F;&#x7528;conv&#x548C;pooling</p>
</li>
<li>
<p>&#x53F3;&#x8FB9;&#x7F51;&#x7EDC;&#x4E3A;&#x7279;&#x5F81;&#x878D;&#x5408;&#x7F51;&#x7EDC;&#xFF1A;&#x4F7F;&#x7528;&#x4E0A;&#x91C7;&#x6837;&#x4EA7;&#x751F;&#x7684;&#x7279;&#x5F81;&#x56FE;&#x4E0E;&#x5DE6;&#x4FA7;&#x7279;&#x5F81;&#x56FE;&#x8FDB;&#x884C;concatenate&#x64CD;&#x4F5C;&#x3002;&#x539F;&#x56E0;</p>
<ol>
<li>
<p><strong>&#x7279;&#x5F81;&#x878D;&#x5408;</strong>&#xFF1A;U-Net&#x7684;&#x8BBE;&#x8BA1;&#x91C7;&#x7528;&#x4E86;&#x8DF3;&#x8FC7;&#x8FDE;&#x63A5;&#xFF08;skip connection&#xFF09;&#xFF0C;&#x5C06;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#xFF08;&#x6536;&#x7F29;&#x8DEF;&#x5F84;&#xFF09;&#x7684;&#x7279;&#x5F81;&#x56FE;&#x4E0E;&#x89E3;&#x7801;&#x9636;&#x6BB5;&#xFF08;&#x6269;&#x5C55;&#x8DEF;&#x5F84;&#xFF09;&#x5BF9;&#x5E94;&#x5C42;&#x7EA7;&#x7684;&#x7279;&#x5F81;&#x56FE;&#x8FDB;&#x884C;&#x62FC;&#x63A5;&#x3002;&#x8FD9;&#x79CD;&#x64CD;&#x4F5C;&#x7684;&#x76EE;&#x7684;&#x662F;&#x4E3A;&#x4E86;&#x878D;&#x5408;&#x4E0D;&#x540C;&#x5206;&#x8FA8;&#x7387;&#x5C42;&#x7EA7;&#x7684;&#x7279;&#x5F81;&#x4FE1;&#x606F;&#xFF0C;&#x65E2;&#x5305;&#x62EC;&#x9AD8;&#x7EA7;&#x8BED;&#x4E49;&#x7279;&#x5F81;&#xFF08;&#x5728;&#x89E3;&#x7801;&#x9636;&#x6BB5;&#x901A;&#x8FC7;&#x4E0A;&#x91C7;&#x6837;&#x83B7;&#x5F97;&#x7684;&#x4F4E;&#x5206;&#x8FA8;&#x7387;&#x3001;&#x9AD8;&#x7EA7;&#x522B;&#x7684;&#x7279;&#x5F81;&#xFF09;&#xFF0C;&#x4E5F;&#x5305;&#x62EC;&#x4F4E;&#x7EA7;&#x7EC6;&#x8282;&#x7279;&#x5F81;&#xFF08;&#x5728;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#x76F4;&#x63A5;&#x4ECE;&#x8F93;&#x5165;&#x56FE;&#x50CF;&#x4E2D;&#x63D0;&#x53D6;&#x7684;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x3001;&#x4F4E;&#x7EA7;&#x522B;&#x7279;&#x5F81;&#xFF09;&#x3002;</p>
</li>
<li>
<p><strong>&#x7EC6;&#x8282;&#x6062;&#x590D;</strong>&#xFF1A;&#x5728;&#x56FE;&#x50CF;&#x5206;&#x5272;&#x4E2D;&#xFF0C;&#x7EC6;&#x8282;&#x662F;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x7684;&#x3002;U-Net&#x7684;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#x4F1A;&#x4E0D;&#x53EF;&#x907F;&#x514D;&#x5730;&#x4E22;&#x5931;&#x4E00;&#x4E9B;&#x5C40;&#x90E8;&#x7EC6;&#x8282;&#x4FE1;&#x606F;&#xFF0C;&#x56E0;&#x4E3A;&#x5377;&#x79EF;&#x548C;&#x6C60;&#x5316;&#x64CD;&#x4F5C;&#x4F1A;&#x964D;&#x4F4E;&#x7A7A;&#x95F4;&#x5206;&#x8FA8;&#x7387;&#x3002;&#x901A;&#x8FC7;&#x5C06;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#x7684;&#x7279;&#x5F81;&#x4E0E;&#x89E3;&#x7801;&#x9636;&#x6BB5;&#x7684;&#x7279;&#x5F81;&#x5408;&#x5E76;&#xFF0C;&#x6A21;&#x578B;&#x80FD;&#x591F;&#x91CD;&#x65B0;&#x5229;&#x7528;&#x8FD9;&#x4E9B;&#x7EC6;&#x8282;&#x4FE1;&#x606F;&#xFF0C;&#x5E2E;&#x52A9;&#x66F4;&#x7CBE;&#x786E;&#x5730;&#x5B9A;&#x4F4D;&#x8FB9;&#x754C;&#x548C;&#x6062;&#x590D;&#x56FE;&#x50CF;&#x7684;&#x8BE6;&#x7EC6;&#x7ED3;&#x6784;&#x3002;</p>
</li>
<li>
<p><strong>&#x4E0A;&#x4E0B;&#x6587;&#x4FE1;&#x606F;</strong>&#xFF1A;&#x89E3;&#x7801;&#x9636;&#x6BB5;&#x7684;&#x4E0A;&#x91C7;&#x6837;&#x9010;&#x6B65;&#x6062;&#x590D;&#x56FE;&#x50CF;&#x7684;&#x7A7A;&#x95F4;&#x5206;&#x8FA8;&#x7387;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x4E0A;&#x91C7;&#x6837;&#x7684;&#x7279;&#x5F81;&#x53EF;&#x80FD;&#x7F3A;&#x4E4F;&#x5FC5;&#x8981;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4FE1;&#x606F;&#x6765;&#x6B63;&#x786E;&#x5730;&#x5206;&#x5272;&#x56FE;&#x50CF;&#x3002;&#x901A;&#x8FC7;concatenate&#x64CD;&#x4F5C;&#xFF0C;&#x6A21;&#x578B;&#x5728;&#x6BCF;&#x6B21;&#x4E0A;&#x91C7;&#x6837;&#x540E;&#x5C06;&#x4E4B;&#x524D;&#x9636;&#x6BB5;&#x7684;&#x7279;&#x5F81;&#x56FE;&#x5F15;&#x5165;&#x5230;&#x5F53;&#x524D;&#x5C42;&#x7EA7;&#xFF0C;&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x6574;&#x5408;&#x4E86;&#x9AD8;&#x5C42;&#x6B21;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x4FE1;&#x606F;&#x3002;</p>
</li>
<li>
<p><strong>&#x6539;&#x5584;&#x68AF;&#x5EA6;&#x6D41;</strong>&#xFF1A;&#x8DF3;&#x8FC7;&#x8FDE;&#x63A5;&#x4E0D;&#x4EC5;&#x6709;&#x52A9;&#x4E8E;&#x5728;&#x7F51;&#x7EDC;&#x4E2D;&#x878D;&#x5408;&#x4E0D;&#x540C;&#x5C42;&#x6B21;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x8FD8;&#x6709;&#x52A9;&#x4E8E;&#x6539;&#x5584;&#x68AF;&#x5EA6;&#x5728;&#x7F51;&#x7EDC;&#x4E2D;&#x7684;&#x6D41;&#x52A8;&#xFF0C;&#x8FD9;&#x5BF9;&#x4E8E;&#x8BAD;&#x7EC3;&#x6DF1;&#x5EA6;&#x7F51;&#x7EDC;&#x81F3;&#x5173;&#x91CD;&#x8981;&#x3002;&#x8FD9;&#x6837;&#x7684;&#x7F51;&#x7EDC;&#x8BBE;&#x8BA1;&#x51CF;&#x5C11;&#x4E86;&#x8BAD;&#x7EC3;&#x4E2D;&#x7684;&#x68AF;&#x5EA6;&#x6D88;&#x5931;&#x95EE;&#x9898;&#xFF0C;&#x5E76;&#x6709;&#x52A9;&#x4E8E;&#x7F51;&#x7EDC;&#x7684;&#x66F4;&#x6DF1;&#x5C42;&#x6B21;&#x8BAD;&#x7EC3;&#x3002;</p>
</li>
<li>
<p><strong>&#x8BAD;&#x7EC3;&#x7A33;&#x5B9A;&#x6027;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x91CD;&#x65B0;&#x5F15;&#x5165;&#x7F16;&#x7801;&#x9636;&#x6BB5;&#x7684;&#x7279;&#x5F81;&#xFF0C;&#x53EF;&#x4EE5;&#x7A33;&#x5B9A;&#x7F51;&#x7EDC;&#x7684;&#x8BAD;&#x7EC3;&#x8FC7;&#x7A0B;&#xFF0C;&#x52A0;&#x901F;&#x6536;&#x655B;&#xFF0C;&#x5E76;&#x63D0;&#x9AD8;&#x6A21;&#x578B;&#x5BF9;&#x566A;&#x58F0;&#x548C;&#x5176;&#x4ED6;&#x8BAD;&#x7EC3;&#x4E0D;&#x7A33;&#x5B9A;&#x56E0;&#x7D20;&#x7684;&#x9C81;&#x68D2;&#x6027;&#x3002;</p>
</li>
</ol>
</li>
</ul>
<h2 id="&#x540D;&#x8BCD;&#x89E3;&#x91CA;"><a href="#&#x540D;&#x8BCD;&#x89E3;&#x91CA;"></a>&#x540D;&#x8BCD;&#x89E3;&#x91CA;</h2>
<h3 id="&#x56FE;&#x50CF;&#x9AD8;&#x4F4E;&#x7EA7;&#x522B;&#x7279;&#x5F81;"><a href="#&#x56FE;&#x50CF;&#x9AD8;&#x4F4E;&#x7EA7;&#x522B;&#x7279;&#x5F81;"></a>&#x56FE;&#x50CF;&#x9AD8;&#x4F4E;&#x7EA7;&#x522B;&#x7279;&#x5F81;</h3>
<ul>
<li>
<p><strong>&#x4F4E;&#x7EA7;&#x522B;&#x7684;&#x7279;&#x5F81;</strong>&#xFF1A;&#x5728;&#x7F51;&#x7EDC;&#x7684;&#x8F83;&#x65E9;&#x9636;&#x6BB5;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x9760;&#x8FD1;&#x8F93;&#x5165;&#x5C42;&#xFF09;&#x63D0;&#x53D6;&#x7684;&#x7279;&#x5F81;&#x88AB;&#x79F0;&#x4E3A;&quot;&#x4F4E;&#x7EA7;&#x522B;&quot;&#x7684;&#x7279;&#x5F81;&#x3002;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#x901A;&#x5E38;&#x4E0E;&#x539F;&#x59CB;&#x56FE;&#x50CF;&#x5BC6;&#x5207;&#x76F8;&#x5173;&#xFF0C;&#x6355;&#x6349;&#x5230;&#x7684;&#x662F;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x57FA;&#x7840;&#x4FE1;&#x606F;&#xFF0C;&#x6BD4;&#x5982;&#x8FB9;&#x7F18;&#x3001;&#x89D2;&#x70B9;&#x3001;&#x989C;&#x8272;&#x548C;&#x7EB9;&#x7406;&#x7B49;&#x3002;&#x5728;&#x9AD8;&#x5206;&#x8FA8;&#x7387;&#x7684;&#x56FE;&#x50CF;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#x80FD;&#x591F;&#x63D0;&#x4F9B;&#x8BE6;&#x7EC6;&#x7684;&#x7A7A;&#x95F4;&#x548C;&#x7ED3;&#x6784;&#x4FE1;&#x606F;&#x3002;</p>
</li>
<li>
<p><strong>&#x9AD8;&#x7EA7;&#x522B;&#x7684;&#x7279;&#x5F81;</strong>&#xFF1A;&#x5728;&#x7F51;&#x7EDC;&#x7684;&#x8F83;&#x6DF1;&#x9636;&#x6BB5;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x66F4;&#x9760;&#x8FD1;&#x8F93;&#x51FA;&#x5C42;&#xFF09;&#x63D0;&#x53D6;&#x7684;&#x7279;&#x5F81;&#x88AB;&#x79F0;&#x4E3A;&quot;&#x9AD8;&#x7EA7;&#x522B;&quot;&#x7684;&#x7279;&#x5F81;&#x3002;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#x8868;&#x8FBE;&#x7684;&#x5185;&#x5BB9;&#x66F4;&#x4E3A;&#x62BD;&#x8C61;&#xFF0C;&#x6709;&#x66F4;&#x9AD8;&#x7684;&#x8BED;&#x4E49;&#x542B;&#x4E49;&#xFF0C;&#x6BD4;&#x5982;&#x8BC6;&#x522B;&#x51FA;&#x6574;&#x4E2A;&#x7269;&#x4F53;&#x3001;&#x60C5;&#x611F;&#x3001;&#x573A;&#x666F;&#x7B49;&#x7ED3;&#x6784;&#x6027;&#x548C;&#x8BED;&#x4E49;&#x6027;&#x5F3A;&#x7684;&#x4FE1;&#x606F;&#x3002;&#x56E0;&#x4E3A;&#x901A;&#x8FC7;&#x591A;&#x6B21;&#x6C60;&#x5316;&#x6216;&#x5377;&#x79EF;&#x64CD;&#x4F5C;&#xFF0C;&#x8FD9;&#x4E9B;&#x7279;&#x5F81;&#x7684;&#x7A7A;&#x95F4;&#x7EF4;&#x5EA6;(&#x5206;&#x8FA8;&#x7387;)&#x901A;&#x5E38;&#x6BD4;&#x539F;&#x59CB;&#x8F93;&#x5165;&#x8981;&#x5C0F;&#xFF0C;&#x4F46;&#x5B83;&#x4EEC;&#x80FD;&#x591F;&#x8868;&#x793A;&#x7684;&#x4FE1;&#x606F;&#x66F4;&#x4E3A;&#x5168;&#x5C40;&#x548C;&#x9AD8;&#x7EA7;&#x3002;</p>
</li>
</ul>
<p>&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;&#xFF0C;&#x5047;&#x8BBE;&#x6211;&#x4EEC;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x5904;&#x7406;&#x56FE;&#x50CF;&#x4E2D;&#x7684;&#x732B;&#x3002;&#x4F4E;&#x7EA7;&#x522B;&#x7684;&#x7279;&#x5F81;&#x53EF;&#x80FD;&#x4F1A;&#x6355;&#x6349;&#x5230;&#x732B;&#x7684;&#x8FB9;&#x7F18;&#x3001;&#x6BDB;&#x53D1;&#x7684;&#x7EB9;&#x7406;&#x3001;&#x773C;&#x775B;&#x7684;&#x989C;&#x8272;&#x7B49;&#x4FE1;&#x606F;&#xFF1B;&#x800C;&#x9AD8;&#x7EA7;&#x522B;&#x7684;&#x7279;&#x5F81;&#x53EF;&#x80FD;&#x5DF2;&#x7ECF;&#x80FD;&#x591F;&#x6355;&#x6349;&#x5230;&#x6574;&#x4E2A;&#x732B;&#x7684;&#x5F62;&#x72B6;&#xFF0C;&#x6216;&#x8005;&#x732B;&#x7684;&#x60C5;&#x7EEA;&#xFF08;&#x60A0;&#x95F2;&#x3001;&#x8B66;&#x89C9;&#x7B49;&#xFF09;&#x3002;</p>
<h3 id="DiceLoss"><a href="#DiceLoss"></a>DiceLoss</h3>
<p><strong>Dice Loss</strong> &#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x56FE;&#x50CF;&#x5206;&#x5272;&#x4EFB;&#x52A1;&#x7684;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF0C;&#x65E8;&#x5728;&#x5E94;&#x5BF9;&#x6B63;&#x8D1F;&#x6837;&#x672C;&#x5F3A;&#x70C8;&#x4E0D;&#x5E73;&#x8861;&#x7684;&#x573A;&#x666F;&#x3002;&#x8BA9;&#x6211;&#x6765;&#x8BE6;&#x7EC6;&#x89E3;&#x91CA;&#x4E00;&#x4E0B;&#x3002;</p>
<ul>
<li>
<p><strong>Dice Coefficient</strong>&#xFF08;Dice&#x7CFB;&#x6570;&#xFF09;&#x662F;Dice Loss&#x7684;&#x57FA;&#x7840;&#x3002;&#x5B83;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8BC4;&#x4F30;&#x4E24;&#x4E2A;&#x6837;&#x672C;&#x76F8;&#x4F3C;&#x6027;&#x7684;&#x5EA6;&#x91CF;&#x51FD;&#x6570;&#xFF0C;&#x53D6;&#x503C;&#x8303;&#x56F4;&#x5728;0&#x5230;1&#x4E4B;&#x95F4;&#xFF0C;&#x503C;&#x8D8A;&#x5927;&#x8868;&#x793A;&#x8D8A;&#x76F8;&#x4F3C;&#x3002;Dice Coefficient&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;</p>
<p>$$ \\text{Dice} = \\frac{2|X \\cap Y|}{|X| + |Y|} $$</p>
<p>&#x5176;&#x4E2D;&#xFF0C;$|X \\cap Y|$&#x8868;&#x793A;&#x6837;&#x672C;X&#x548C;Y&#x4E4B;&#x95F4;&#x7684;&#x4EA4;&#x96C6;&#xFF0C;$|X|$&#x548C;$|Y|$&#x5206;&#x522B;&#x8868;&#x793A;X&#x548C;Y&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;&#x5206;&#x5B50;&#x4E58;&#x4EE5;2&#x662F;&#x4E3A;&#x4E86;&#x4FDD;&#x8BC1;&#x5206;&#x6BCD;&#x91CD;&#x590D;&#x8BA1;&#x7B97;&#x540E;&#x53D6;&#x503C;&#x8303;&#x56F4;&#x5728;[0, 1]&#x4E4B;&#x95F4;&#x3002;</p>
<p>dice_loss = 1 - dice_coefficient&#xFF0C;&#x6240;&#x4EE5;&#x4F18;&#x5316;&#x76EE;&#x6807;&#x662F;&#x7F29;&#x5C0F; dice_loss &#x7684;&#x503C;&#x3002;</p>
</li>
</ul>
<h3 id="&#x53EC;&#x56DE;&#x7387;"><a href="#&#x53EC;&#x56DE;&#x7387;"></a>&#x53EC;&#x56DE;&#x7387;</h3>
<p><strong>&#x53EC;&#x56DE;&#x7387;</strong>&#xFF08;Recall&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x8BC4;&#x4F30;&#x5206;&#x7C7B;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x7684;&#x6307;&#x6807;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x5728;&#x4E8C;&#x5143;&#x6216;&#x591A;&#x5206;&#x7C7B;&#x4E2D;&#xFF0C;&#x5E38;&#x5E38;&#x7528;&#x4E8E;&#x68C0;&#x6D4B;&#x6A21;&#x578B;&#x627E;&#x5230;&#x76F8;&#x5173;&#x5B9E;&#x4F8B;&#x7684;&#x80FD;&#x529B;&#x3002;&#x5728;&#x76EE;&#x6807;&#x68C0;&#x6D4B;&#x6216;&#x4FE1;&#x606F;&#x68C0;&#x7D22;&#x4E2D;&#xFF0C;&#x53EC;&#x56DE;&#x7387;&#x4E5F;&#x5F88;&#x91CD;&#x8981;&#x3002;</p>
<p>&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF0C;&#x53EC;&#x56DE;&#x7387;&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;</p>
<p>$$ \\text{Recall} = \\frac{TP}{TP + FN} $$</p>
<p>&#x5176;&#x4E2D;&#xFF1A;</p>
<ul>
<li><strong>TP</strong>&#xFF08;True Positive&#xFF0C;&#x771F;&#x6B63;&#x4F8B;&#xFF08;&#x771F;&#x9633;&#xFF09;&#xFF09;&#xFF1A;&#x88AB;&#x6B63;&#x786E;&#x9884;&#x6D4B;&#x7684;&#x6B63;&#x4F8B;&#xFF0C;&#x5373;&#x8BE5;&#x6570;&#x636E;&#x7684;&#x771F;&#x5B9E;&#x503C;&#x4E3A;&#x6B63;&#x4F8B;&#xFF0C;&#x9884;&#x6D4B;&#x503C;&#x4E5F;&#x4E3A;&#x6B63;&#x4F8B;&#x7684;&#x60C5;&#x51B5;&#x3002;</li>
<li><strong>FN</strong>&#xFF08;False Negative&#xFF0C;&#x5047;&#x9634;&#x6027;&#xFF09;&#xFF1A;&#x88AB;&#x9519;&#x8BEF;&#x9884;&#x6D4B;&#x7684;&#x53CD;&#x4F8B;&#xFF0C;&#x5373;&#x8BE5;&#x6570;&#x636E;&#x7684;&#x771F;&#x5B9E;&#x503C;&#x4E3A;&#x6B63;&#x4F8B;&#xFF0C;&#x4F46;&#x88AB;&#x9519;&#x8BEF;&#x9884;&#x6D4B;&#x6210;&#x4E86;&#x53CD;&#x4F8B;&#x7684;&#x60C5;&#x51B5;&#x3002;</li>
</ul>
<p>&#x53EC;&#x56DE;&#x7387;&#x8861;&#x91CF;&#x4E86;&#x6A21;&#x578B;&#x6B63;&#x786E;&#x8BC6;&#x522B;&#x4E3A;&#x6B63;&#x7C7B;&#x7684;&#x5B9E;&#x4F8B;&#xFF08;&#x771F;&#x6B63;&#x7C7B;&#xFF09;&#x5360;&#x6240;&#x6709;&#x5B9E;&#x9645;&#x6B63;&#x7C7B;&#x5B9E;&#x4F8B;&#x7684;&#x6BD4;&#x4F8B;&#x3002;&#x5728;&#x67D0;&#x4E9B;&#x573A;&#x666F;&#x4E0B;&#xFF0C;&#x53EC;&#x56DE;&#x7387;&#x6BD4;&#x51C6;&#x786E;&#x7387;&#x66F4;&#x91CD;&#x8981;&#xFF0C;&#x4F8B;&#x5982;&#x533B;&#x5B66;&#x8BCA;&#x65AD;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x66F4;&#x5173;&#x5FC3;&#x662F;&#x5426;&#x6F0F;&#x8BCA;&#xFF08;&#x5373;FN &#x9633;&#x7684;&#x88AB;&#x8BCA;&#x65AD;&#x4E3A;&#x9634;&#x6027;&#xFF09;&#x3002;</p>
<h2 id="&#x95EE;&#x9898;"><a href="#&#x95EE;&#x9898;"></a>&#x95EE;&#x9898;</h2>
<ul>
<li>
<p>&#x4E3A;&#x4EC0;&#x4E48;&#x6700;&#x540E; U-Net &#x7684;&#x635F;&#x5931;&#x662F;&#x4EA4;&#x53C9;&#x71B5;&#x8DDF; dice_loss &#x7EC4;&#x6210;&#xFF1F;</p>
<p>&#x5728;U-Net&#x8FD9;&#x6837;&#x7684;&#x56FE;&#x50CF;&#x5206;&#x5272;&#x6A21;&#x578B;&#x4E2D;&#xFF0C;&#x901A;&#x5E38;&#x5C06;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#xFF08;Cross-Entropy Loss&#xFF09;&#x548C;Dice&#x635F;&#x5931;&#xFF08;Dice Loss&#xFF09;&#x7ED3;&#x5408;&#x4F7F;&#x7528;&#xFF0C;&#x539F;&#x56E0;&#x4E3B;&#x8981;&#x6709;&#x4EE5;&#x4E0B;&#x51E0;&#x70B9;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x7C7B;&#x4E0D;&#x5E73;&#x8861;&#xFF08;Class Imbalance&#xFF09;</strong>&#xFF1A;&#x5728;&#x533B;&#x5B66;&#x56FE;&#x50CF;&#x5206;&#x5272;&#x7B49;&#x4EFB;&#x52A1;&#x4E2D;&#xFF0C;&#x76EE;&#x6807;&#x533A;&#x57DF;&#xFF08;&#x611F;&#x5174;&#x8DA3;&#x7684;&#x533A;&#x57DF;&#xFF0C;&#x5982;&#x80BF;&#x7624;&#xFF09;&#x5F80;&#x5F80;&#x6BD4;&#x80CC;&#x666F;&#xFF08;&#x5176;&#x4F59;&#x90E8;&#x5206;&#xFF09;&#x8981;&#x5C0F;&#x5F97;&#x591A;&#xFF0C;&#x8FD9;&#x5BFC;&#x81F4;&#x4E86;&#x7C7B;&#x522B;&#x4E4B;&#x95F4;&#x7684;&#x4E0D;&#x5E73;&#x8861;&#xFF0C;&#x7B80;&#x5355;&#x7684;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x51FD;&#x6570;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x6A21;&#x578B;&#x504F;&#x5411;&#x4E8E;&#x591A;&#x6570;&#x7C7B;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x6BD4;&#x5355;&#x4E00;&#x7684;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x66F4;&#x80FD;&#x591F;&#x5904;&#x7406;&#x7C7B;&#x4E0D;&#x5E73;&#x8861;&#x7684;&#x635F;&#x5931;&#x51FD;&#x6570;&#x3002;</p>
</li>
<li>
<p><strong>Dice&#x7CFB;&#x6570;&#x7684;&#x7279;&#x6027;</strong>&#xFF1A;Dice&#x7CFB;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x8861;&#x91CF;&#x4E24;&#x4E2A;&#x6837;&#x672C;&#x95F4;&#x76F8;&#x4F3C;&#x5EA6;&#x7684;&#x7EDF;&#x8BA1;&#x91CF;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x4ECB;&#x4E8E;0&#x5230;1&#x4E4B;&#x95F4;&#xFF0C;&#x5F53;&#x503C;&#x4E3A;1&#x65F6;&#x8868;&#x660E;&#x9884;&#x6D4B;&#x548C;&#x771F;&#x5B9E;&#x6807;&#x7B7E;&#x4E4B;&#x95F4;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#x3002;&#x5B83;&#x5728;&#x56FE;&#x50CF;&#x5206;&#x5272;&#x4EFB;&#x52A1;&#x4E2D;&#x6781;&#x5176;&#x6709;&#x7528;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x76F4;&#x63A5;&#x91CF;&#x5316;&#x4E86;&#x9884;&#x6D4B;&#x548C;&#x771F;&#x5B9E;&#x6807;&#x7B7E;&#x4E4B;&#x95F4;&#x7684;&#x91CD;&#x53E0;&#x533A;&#x57DF;&#x3002;&#x8FD9;&#x79CD;&#x5EA6;&#x91CF;&#x5BF9;&#x4E8E;&#x6355;&#x83B7;&#x8FB9;&#x7F18;&#x533A;&#x57DF;&#x5C24;&#x5176;&#x91CD;&#x8981;&#xFF0C;&#x6B63;&#x5982;&#x5206;&#x5272;&#x4EFB;&#x52A1;&#x4E2D;&#x5E38;&#x5E38;&#x9047;&#x5230;&#x7684;&#x3002;</p>
</li>
<li>
<p><strong>&#x4EA4;&#x53C9;&#x71B5;&#x548C;Dice&#x635F;&#x5931;&#x7ED3;&#x5408;&#x7684;&#x4F18;&#x52BF;</strong>&#xFF1A;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x5173;&#x6CE8;&#x4E8E;&#x50CF;&#x7D20;&#x7EA7;&#x522B;&#x4E0A;&#x7684;&#x5206;&#x7C7B;&#x51C6;&#x786E;&#x6027;&#xFF0C;&#x6BCF;&#x4E2A;&#x50CF;&#x7D20;&#x70B9;&#x5206;&#x7C7B;&#x7684;&#x6B63;&#x786E;&#x4E0E;&#x5426;&#x90FD;&#x4F1A;&#x5F71;&#x54CD;&#x5230;&#x635F;&#x5931;&#x3002;&#x800C;Dice&#x635F;&#x5931;&#x5173;&#x6CE8;&#x9884;&#x6D4B;&#x533A;&#x57DF;&#x4E0E;&#x771F;&#x5B9E;&#x533A;&#x57DF;&#x7684;&#x91CD;&#x53E0;&#x5EA6;&#x3002;&#x8FD9;&#x4E24;&#x79CD;&#x635F;&#x5931;&#x5728;&#x76EE;&#x6807;&#x51FD;&#x6570;&#x4E2D;&#x7684;&#x7ED3;&#x5408;&#x4F7F;&#x5F97;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x5728;&#x6574;&#x4F53;&#xFF08;&#x5168;&#x5C40;&#x5206;&#x5272;&#x51C6;&#x786E;&#x6027;&#xFF09;&#x548C;&#x5C40;&#x90E8;&#xFF08;&#x7279;&#x522B;&#x662F;&#x5C0F;&#x533A;&#x57DF;&#x6216;&#x8FB9;&#x7F18;&#x7684;&#x5206;&#x5272;&#xFF09;&#x65B9;&#x9762;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#x3002;</p>
</li>
<li>
<p><strong>&#x68AF;&#x5EA6;&#x884C;&#x4E3A;</strong>&#xFF1A;&#x4EA4;&#x53C9;&#x71B5;&#x635F;&#x5931;&#x548C;Dice&#x635F;&#x5931;&#x5BF9;&#x68AF;&#x5EA6;&#x7684;&#x8D21;&#x732E;&#x4E5F;&#x6709;&#x6240;&#x4E0D;&#x540C;&#x3002;&#x4EA4;&#x53C9;&#x71B5;&#x5BF9;&#x4E8E;&#x63A5;&#x8FD1;&#x51B3;&#x7B56;&#x8FB9;&#x754C;&#x7684;&#x6837;&#x672C;&#x4F1A;&#x4EA7;&#x751F;&#x8F83;&#x5927;&#x7684;&#x68AF;&#x5EA6;&#xFF0C;&#x8FD9;&#x6709;&#x52A9;&#x4E8E;&#x786E;&#x4FDD;&#x5B66;&#x4E60;&#x8FDB;&#x7A0B;&#x3002;&#x800C;Dice&#x635F;&#x5931;&#xFF0C;&#x5219;&#x53EF;&#x4EE5;&#x5728;&#x6A21;&#x578B;&#x5BF9;&#x67D0;&#x4E9B;&#x7C7B;&#x522B;&#x7684;&#x9884;&#x6D4B;&#x5F88;&#x81EA;&#x4FE1;&#x65F6;&#xFF0C;&#x4ECD;&#x7136;&#x63D0;&#x4F9B;&#x4E00;&#x5B9A;&#x7684;&#x68AF;&#x5EA6;&#xFF0C;&#x56E0;&#x800C;&#x6709;&#x52A9;&#x4E8E;&#x5B66;&#x4E60;&#x8FC7;&#x7A0B;&#x4E2D;&#x5BF9;&#x4E0D;&#x5E73;&#x8861;&#x6570;&#x636E;&#x7684;&#x6821;&#x6B63;&#x3002;</p>
</li>
<li>
<p><strong>&#x6027;&#x80FD;&#x63D0;&#x5347;</strong>&#xFF1A;&#x5B9E;&#x9A8C;&#x8868;&#x660E;&#xFF0C;&#x4EC5;&#x4F7F;&#x7528;&#x4EA4;&#x53C9;&#x71B5;&#x6216;Dice&#x635F;&#x5931;&#x7684;&#x6A21;&#x578B;&#x6027;&#x80FD;&#x901A;&#x5E38;&#x4E0D;&#x5982;&#x4E24;&#x8005;&#x7ED3;&#x5408;&#x4F7F;&#x7528;&#x3002;&#x901A;&#x8FC7;&#x878D;&#x5408;&#x8FD9;&#x4E24;&#x79CD;&#x635F;&#x5931;&#x51FD;&#x6570;&#xFF0C;&#x6A21;&#x578B;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x4ECE;&#x5404;&#x81EA;&#x7684;&#x4F18;&#x70B9;&#x4E2D;&#x53D7;&#x76CA;&#x3002;</p>
</li>
</ol>
</li>
<li>
<p>UNet &#x8DDF; SAM &#x7684;&#x533A;&#x522B;&#xFF1F;</p>
</li>
</ul>
<p><a href="https://ai.meta.com/blog/segment-anything-foundation-model-image-segmentation/">SAM &#x6A21;&#x578B;&#x4ECB;&#x7ECD;</a></p>
<h1 id="Reference"><a href="#Reference"></a>Reference</h1>
<ul>
<li><a href="https://blog.csdn.net/weixin_45074568/article/details/114901600">UNet&#x8BE6;&#x89E3;</a></li>
<li><a href="https://pic2.zhimg.com/80/v2-68ffbaff593f95cc96fc4b6811356e39_1440w.webp">UNet image</a></li>
<li><a href="https://github.dev/milesial/Pytorch-UNet/blob/master/unet/unet_model.py">model source code</a></li>
<li>gpt</li>
</ul>
`,E=[{level:1,title:"UNet",children:[{level:2,title:"名词解释",children:[{level:3,title:"图像高低级别特征",children:[]},{level:3,title:"DiceLoss",children:[]},{level:3,title:"召回率",children:[]}]},{level:2,title:"问题",children:[]}]},{level:1,title:"Reference",children:[]}];export{x as attributes,F as html,E as nestedHeaders};
