const x={},F=`<h1 id="NAS-RL"><a href="#NAS-RL"></a>NAS-RL</h1>
<p>&#x5168;&#x79F0; Neural Architecture Search&#xFF08;&#x795E;&#x7ECF;&#x67B6;&#x6784;&#x641C;&#x7D22;&#xFF09;&#xFF0C;&#x662F;&#x4E00;&#x79CD;&#x81EA;&#x52A8;&#x5316;&#x641C;&#x7D22;&#x6700;&#x4F73;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<p>&#x4F20;&#x7EDF;&#x4E0A;&#xFF0C;&#x8BBE;&#x8BA1;&#x4E00;&#x4E2A;&#x597D;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x9700;&#x8981;&#x4E13;&#x5BB6;&#x53CD;&#x590D;&#x8BD5;&#x9A8C;&#x548C;&#x76F4;&#x89C9;&#xFF0C;&#x800C; NAS &#x901A;&#x8FC7;&#x81EA;&#x52A8;&#x5316;&#x8FD9;&#x4E00;&#x8FC7;&#x7A0B;&#xFF0C;NAS &#x901A;&#x5E38;&#x4F7F;&#x7528;&#x4E00;&#x79CD;&#x79F0;&#x4E3A;&#x300C;&#x63A7;&#x5236;&#x5668;&#x300D;&#x7684;&#x6A21;&#x578B;&#x6765;&#x8FDB;&#x884C;&#x8FD9;&#x4E9B;&#x5E8F;&#x5217;&#x51B3;&#x7B56;&#x3002;&#x8FD9;&#x4E2A;&#x63A7;&#x5236;&#x5668;&#x53EF;&#x80FD;&#x662F;&#x4E00;&#x4E2A; RNN &#x6216;&#x8005;&#x5176;&#x4ED6;&#x5E8F;&#x5217;&#x6A21;&#x578B;&#xFF0C;&#x5B83;&#x8D1F;&#x8D23;&#x5728;&#x6BCF;&#x4E2A;&#x6B65;&#x9AA4;&#x505A;&#x51FA;&#x9009;&#x62E9;&#xFF0C;&#x6839;&#x636E;&#x5148;&#x524D;&#x7684;&#x9009;&#x62E9;&#x5386;&#x53F2;&#x6765;&#x51B3;&#x5B9A;&#x4E0B;&#x4E00;&#x5C42;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x63A7;&#x5236;&#x5668;&#x901A;&#x8FC7;&#x4E0D;&#x65AD;&#x5730;&#x5728;&#x641C;&#x7D22;&#x7A7A;&#x95F4;&#x4E2D;&#x63A2;&#x7D22;&#x5E76;&#x4F18;&#x5316;&#x51B3;&#x7B56;&#x5E8F;&#x5217;&#xFF0C;&#x6700;&#x7EC8;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x5728;&#x6027;&#x80FD;&#x4E0A;&#x6700;&#x4F18;&#x7684;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x3002;</p>
<ul>
<li>&#x6838;&#x5FC3;&#x601D;&#x60F3;&#xFF1A;&#x5C06;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x8BBE;&#x8BA1;&#x95EE;&#x9898;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5E8F;&#x5217;&#x51B3;&#x7B56;&#x95EE;&#x9898;</li>
</ul>
<h2 id="NAS &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x6210;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF1F;"><a href="#NAS &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x6210;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF1F;"></a>NAS &#x53EF;&#x4EE5;&#x7406;&#x89E3;&#x6210;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF1F;</h2>
<p>&#x53EF;&#x4EE5;&#xFF1B;&#x5B83;&#x7528;&#x4E00;&#x4E2A;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF08;&#x63A7;&#x5236;&#x5668;&#xFF09;&#x4E0D;&#x65AD;&#x5730;&#x751F;&#x6210;&#x548C;&#x4F18;&#x5316;&#x53E6;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x5B9E;&#x9645;&#x4EFB;&#x52A1;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#xFF08;&#x76EE;&#x6807;&#x6A21;&#x578B;&#xFF09;&#x7684;&#x67B6;&#x6784;&#x3002;&#x8FD9;&#x79CD;&#x65B9;&#x6CD5;&#x4E0D;&#x4EC5;&#x51CF;&#x5C11;&#x4E86;&#x4EBA;&#x5DE5;&#x5E72;&#x9884;&#xFF0C;&#x8FD8;&#x80FD;&#x53D1;&#x73B0;&#x6F5C;&#x5728;&#x7684;&#x3001;&#x66F4;&#x4F18;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x3002;</p>
<p>&#x7C7B;&#x4F3C;&#x4E8E;&#x5143;&#x5B66;&#x4E60;&#xFF08;Meta-Learning&#xFF09;&#x7684;&#x4E00;&#x79CD;&#x601D;&#x8DEF;&#xFF0C;&#x5728;&#x5143;&#x5B66;&#x4E60;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5B66;&#x4E60;&#x5982;&#x4F55;&#x66F4;&#x597D;&#x5730;&#x8FDB;&#x884C;&#x5B66;&#x4E60;&#x3002;&#x5728; NAS &#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x5B66;&#x4E60;&#x5982;&#x4F55;&#x8BBE;&#x8BA1;&#x66F4;&#x597D;&#x7684;&#x6DF1;&#x5EA6;&#x5B66;&#x4E60;&#x6A21;&#x578B;&#x3002;&#x4E24;&#x8005;&#x90FD;&#x4F53;&#x73B0;&#x4E86;&#x81EA;&#x6211;&#x6539;&#x8FDB;&#x548C;&#x81EA;&#x52A8;&#x5316;&#x4F18;&#x5316;&#x7684;&#x7406;&#x5FF5;&#x3002;</p>
<h2 id="&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;"><a href="#&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;"></a>&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;&#xFF1F;&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;</h2>
<p>&#x901A;&#x5E38;&#xFF0C;RNN &#x88AB;&#x7528;&#x4F5C;&#x63A7;&#x5236;&#x5668;&#x662F;&#x56E0;&#x4E3A;&#x5176;&#x5728;&#x5904;&#x7406;&#x5E8F;&#x5217;&#x6570;&#x636E;&#x65B9;&#x9762;&#x7684;&#x4F18;&#x52BF;&#x3002;&#x4E0B;&#x9762;&#x6211;&#x4EEC;&#x8BE6;&#x7EC6;&#x89E3;&#x91CA;&#x4E00;&#x4E0B;&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;&#x4EE5;&#x53CA;&#x4E3A;&#x4EC0;&#x4E48; RNN &#x901A;&#x5E38;&#x88AB;&#x9009;&#x62E9;&#x7528;&#x4F5C;&#x63A7;&#x5236;&#x5668;&#x3002;</p>
<h3 id="&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;"><a href="#&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;"></a>&#x63A7;&#x5236;&#x5668;&#x7684;&#x539F;&#x7406;</h3>
<ol>
<li>
<p><strong>&#x751F;&#x6210;&#x67B6;&#x6784;</strong>&#xFF1A;</p>
<ul>
<li>&#x63A7;&#x5236;&#x5668;&#x6A21;&#x578B;&#x901A;&#x8FC7;&#x751F;&#x6210;&#x4E00;&#x7CFB;&#x5217;&#x79BB;&#x6563;&#x7684;&#x51B3;&#x7B56;&#x6765;&#x5B9A;&#x4E49;&#x76EE;&#x6807;&#x6A21;&#x578B;&#x7684;&#x67B6;&#x6784;&#x3002;&#x6BCF;&#x4E2A;&#x51B3;&#x7B56;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x7684;&#x67B6;&#x6784;&#x7EC4;&#x4EF6;&#xFF08;&#x5982;&#x9009;&#x62E9;&#x5C42;&#x7684;&#x7C7B;&#x578B;&#x3001;&#x5927;&#x5C0F;&#x3001;&#x8FDE;&#x63A5;&#x65B9;&#x5F0F;&#x7B49;&#xFF09;&#x3002;</li>
<li>&#x63A7;&#x5236;&#x5668;&#x7684;&#x8F93;&#x51FA;&#x662F;&#x4E00;&#x4E2A;&#x5E8F;&#x5217;&#xFF0C;&#x8FD9;&#x4E2A;&#x5E8F;&#x5217;&#x63CF;&#x8FF0;&#x4E86;&#x76EE;&#x6807;&#x6A21;&#x578B;&#x7684;&#x7ED3;&#x6784;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x63A7;&#x5236;&#x5668;&#x53EF;&#x80FD;&#x8F93;&#x51FA;&#x4E00;&#x4E2A;&#x8FD9;&#x6837;&#x7684;&#x5E8F;&#x5217;&#xFF1A;Conv(64, 3x3) -&gt; MaxPool(2x2) -&gt; Dense(128)&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5E8F;&#x5217;&#x51B3;&#x7B56;</strong>&#xFF1A;</p>
<ul>
<li>&#x63A7;&#x5236;&#x5668;&#x5728;&#x6BCF;&#x4E00;&#x6B65;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x51B3;&#x7B56;&#xFF0C;&#x8FD9;&#x4E2A;&#x51B3;&#x7B56;&#x4F9D;&#x8D56;&#x4E8E;&#x4E4B;&#x524D;&#x6240;&#x751F;&#x6210;&#x7684;&#x51B3;&#x7B56;&#x3002;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x81EA;&#x7136;&#x800C;&#x7136;&#x5730;&#x9002;&#x5408;&#x7528;&#x5904;&#x7406;&#x5E8F;&#x5217;&#x6570;&#x636E;&#x7684;&#x6A21;&#x578B;&#x6765;&#x5B9E;&#x73B0;&#xFF0C;&#x56E0;&#x4E3A;&#x5E8F;&#x5217;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x5373;&#x6BCF;&#x4E2A;&#x51B3;&#x7B56;&#xFF09;&#x90FD;&#x4E0E;&#x524D;&#x9762;&#x7684;&#x51B3;&#x7B56;&#x6709;&#x5173;&#x8054;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x4F18;&#x5316;&#x8FC7;&#x7A0B;</strong>&#xFF1A;</p>
<ul>
<li>&#x751F;&#x6210;&#x67B6;&#x6784;&#x540E;&#xFF0C;&#x5BF9;&#x5BF9;&#x5E94;&#x7684;&#x76EE;&#x6807;&#x6A21;&#x578B;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#xFF0C;&#x5E76;&#x5728;&#x9A8C;&#x8BC1;&#x96C6;&#x4E0A;&#x8BC4;&#x4F30;&#x5176;&#x6027;&#x80FD;&#x3002;</li>
<li>&#x5C06;&#x8BC4;&#x4F30;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x53CD;&#x9988;&#x7ED9;&#x63A7;&#x5236;&#x5668;&#xFF0C;&#x8C03;&#x6574;&#x63A7;&#x5236;&#x5668;&#x7684;&#x6743;&#x91CD;&#xFF0C;&#x4F7F;&#x5176;&#x503E;&#x5411;&#x4E8E;&#x751F;&#x6210;&#x6027;&#x80FD;&#x66F4;&#x597D;&#x7684;&#x67B6;&#x6784;&#x3002;&#x8FD9;&#x901A;&#x5E38;&#x901A;&#x8FC7;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF08;Reinforcement Learning&#xFF09;&#x6216;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#xFF08;Evolutionary Algorithms&#xFF09;&#x6765;&#x5B9E;&#x73B0;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;"><a href="#&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;"></a>&#x4E3A;&#x4EC0;&#x4E48;&#x901A;&#x5E38;&#x662F; RNN&#xFF1F;</h3>
<p>&#x4F7F;&#x7528; RNN &#x662F;&#x56E0;&#x4E3A;&#x5176;&#x5728;&#x5904;&#x7406;&#x548C;&#x751F;&#x6210;&#x5E8F;&#x5217;&#x6570;&#x636E;&#x65B9;&#x9762;&#x7684;&#x7279;&#x70B9;&#x548C;&#x4F18;&#x52BF;&#x3002;&#x4EE5;&#x4E0B;&#x662F;&#x8BE6;&#x7EC6;&#x539F;&#x56E0;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x5E8F;&#x5217;&#x6570;&#x636E;&#x5904;&#x7406;&#x80FD;&#x529B;</strong>&#xFF1A;</p>
<ul>
<li>RNN &#x7684;&#x8BBE;&#x8BA1;&#x4F7F;&#x5F97;&#x5176;&#x64C5;&#x957F;&#x5904;&#x7406;&#x5E8F;&#x5217;&#x6570;&#x636E;&#xFF0C;&#x5373;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x524D;&#x4E00;&#x6B65;&#x7684;&#x8F93;&#x51FA;&#x5F71;&#x54CD;&#x4E0B;&#x4E00;&#x6B65;&#x7684;&#x8F93;&#x5165;&#xFF0C;&#x6355;&#x6349;&#x5E8F;&#x5217;&#x4E2D;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;</li>
<li>&#x5728; NAS &#x4E2D;&#xFF0C;&#x7F51;&#x7EDC;&#x7ED3;&#x6784;&#x662F;&#x4E00;&#x4E2A;&#x5E8F;&#x5217;&#x5316;&#x7684;&#x51B3;&#x7B56;&#x8FC7;&#x7A0B;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x9009;&#x62E9;&#x5C42;&#x7684;&#x7C7B;&#x578B;&#xFF08;&#x5377;&#x79EF;&#x5C42;&#x3001;&#x5168;&#x8FDE;&#x63A5;&#x5C42;&#x7B49;&#xFF09;&#x3001;&#x5C42;&#x7684;&#x53C2;&#x6570;&#xFF08;&#x5982;&#x6EE4;&#x6CE2;&#x5668;&#x6570;&#x91CF;&#x3001;&#x6838;&#x5927;&#x5C0F;&#x7B49;&#xFF09;&#x3001;&#x5C42;&#x4E0E;&#x5C42;&#x4E4B;&#x95F4;&#x7684;&#x8FDE;&#x63A5;&#x7B49;&#xFF0C;&#x8FD9;&#x4E9B;&#x51B3;&#x7B56;&#x9700;&#x8981;&#x9010;&#x6B65;&#x751F;&#x6210;&#xFF0C;&#x6BCF;&#x4E00;&#x6B65;&#x90FD;&#x4F9D;&#x8D56;&#x4E8E;&#x524D;&#x9762;&#x7684;&#x51B3;&#x7B56;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8BB0;&#x5FC6;&#x548C;&#x72B6;&#x6001;&#x4FDD;&#x6301;</strong>&#xFF1A;</p>
<ul>
<li>RNN &#x80FD;&#x591F;&#x4FDD;&#x7559;&#x4E4B;&#x524D;&#x6B65;&#x9AA4;&#x7684;&#x72B6;&#x6001;&#x4FE1;&#x606F;&#xFF0C;&#x8FD9;&#x662F;&#x901A;&#x8FC7;&#x5176;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x5B9E;&#x73B0;&#x7684;&#x3002;&#x5728;&#x67B6;&#x6784;&#x751F;&#x6210;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x6BCF;&#x4E2A;&#x51B3;&#x7B56;&#x90FD;&#x662F;&#x57FA;&#x4E8E;&#x524D;&#x9762;&#x6240;&#x6709;&#x51B3;&#x7B56;&#x7684;&#x7EFC;&#x5408;&#x7ED3;&#x679C;&#x3002;</li>
<li>&#x8FD9;&#x79CD;&#x8BB0;&#x5FC6;&#x80FD;&#x529B;&#x5728;&#x751F;&#x6210;&#x590D;&#x6742;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x65F6;&#x7279;&#x522B;&#x6709;&#x7528;&#xFF0C;&#x56E0;&#x4E3A;&#x6BCF;&#x4E00;&#x5C42;&#x7684;&#x914D;&#x7F6E;&#x53EF;&#x80FD;&#x4F9D;&#x8D56;&#x4E8E;&#x4E4B;&#x524D;&#x5C42;&#x7684;&#x914D;&#x7F6E;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x7075;&#x6D3B;&#x6027;</strong>&#xFF1A;</p>
<ul>
<li>RNN &#x53EF;&#x4EE5;&#x5F88;&#x81EA;&#x7136;&#x5730;&#x6269;&#x5C55;&#x5230;&#x751F;&#x6210;&#x53D8;&#x957F;&#x5E8F;&#x5217;&#xFF0C;&#x8FD9;&#x5BF9;&#x4E8E;&#x751F;&#x6210;&#x4E0D;&#x5B9A;&#x957F;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x975E;&#x5E38;&#x91CD;&#x8981;&#x3002;</li>
<li>&#x63A7;&#x5236;&#x5668;&#x53EF;&#x4EE5;&#x5B66;&#x4E60;&#x5230;&#x5728;&#x4F55;&#x65F6;&#x505C;&#x6B62;&#x751F;&#x6210;&#x65B0;&#x7684;&#x5C42;&#xFF0C;&#x4ECE;&#x800C;&#x751F;&#x6210;&#x4E0D;&#x540C;&#x957F;&#x5EA6;&#x7684;&#x67B6;&#x6784;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x63A7;&#x5236;&#x5668; - RNN &#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;"><a href="#&#x63A7;&#x5236;&#x5668; - RNN &#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;"></a>&#x63A7;&#x5236;&#x5668; - RNN &#x7684;&#x5DE5;&#x4F5C;&#x6D41;&#x7A0B;&#x793A;&#x4F8B;</h3>
<ol>
<li>
<p><strong>&#x521D;&#x59CB;&#x5316;</strong>&#xFF1A;</p>
<ul>
<li>&#x63A7;&#x5236;&#x5668; RNN &#x521D;&#x59CB;&#x5316;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x548C;&#x5F00;&#x59CB;&#x4EE4;&#x724C;&#xFF0C;&#x51C6;&#x5907;&#x751F;&#x6210;&#x7B2C;&#x4E00;&#x4E2A;&#x51B3;&#x7B56;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x751F;&#x6210;&#x7B2C;&#x4E00;&#x4E2A;&#x51B3;&#x7B56;</strong>&#xFF1A;</p>
<ul>
<li>&#x6839;&#x636E;&#x5F53;&#x524D;&#x9690;&#x85CF;&#x72B6;&#x6001;&#x548C;&#x8F93;&#x5165;&#x4EE4;&#x724C;&#xFF08;&#x5F00;&#x59CB;&#x4EE4;&#x724C;&#xFF09;&#xFF0C;RNN &#x751F;&#x6210;&#x7B2C;&#x4E00;&#x4E2A;&#x51B3;&#x7B56;&#xFF0C;&#x4F8B;&#x5982;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x5377;&#x79EF;&#x5C42; Conv(64, 3x3)&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x66F4;&#x65B0;&#x72B6;&#x6001;&#x5E76;&#x751F;&#x6210;&#x540E;&#x7EED;&#x51B3;&#x7B56;</strong>&#xFF1A;</p>
<ul>
<li>RNN &#x5C06;&#x5F53;&#x524D;&#x51B3;&#x7B56;&#x4F5C;&#x4E3A;&#x8F93;&#x5165;&#xFF0C;&#x5E76;&#x66F4;&#x65B0;&#x9690;&#x85CF;&#x72B6;&#x6001;&#xFF0C;&#x751F;&#x6210;&#x4E0B;&#x4E00;&#x4E2A;&#x51B3;&#x7B56;&#xFF0C;&#x4F8B;&#x5982;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x6700;&#x5927;&#x6C60;&#x5316;&#x5C42; MaxPool(2x2)&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x91CD;&#x590D;</strong>&#xFF1A;</p>
<ul>
<li>&#x91CD;&#x590D;&#x4EE5;&#x4E0A;&#x6B65;&#x9AA4;&#xFF0C;&#x76F4;&#x5230;&#x751F;&#x6210;&#x5B8C;&#x6574;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8F93;&#x51FA;&#x67B6;&#x6784;</strong>&#xFF1A;</p>
<ul>
<li>&#x63A7;&#x5236;&#x5668;&#x8F93;&#x51FA;&#x6574;&#x4E2A;&#x5E8F;&#x5217;&#xFF0C;&#x8868;&#x793A;&#x751F;&#x6210;&#x7684;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8BAD;&#x7EC3;&#x5E76;&#x8BC4;&#x4F30;&#x76EE;&#x6807;&#x6A21;&#x578B;</strong>&#xFF1A;</p>
<ul>
<li>&#x7528;&#x8BE5;&#x67B6;&#x6784;&#x8BAD;&#x7EC3;&#x76EE;&#x6807;&#x6A21;&#x578B;&#xFF0C;&#x5E76;&#x5728;&#x9A8C;&#x8BC1;&#x96C6;&#x4E0A;&#x8BC4;&#x4F30;&#x5176;&#x6027;&#x80FD;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x53CD;&#x9988;</strong>&#xFF1A;</p>
<ul>
<li>&#x5C06;&#x8BC4;&#x4F30;&#x7ED3;&#x679C;&#x4F5C;&#x4E3A;&#x5956;&#x52B1;&#xFF08;&#x6216;&#x60E9;&#x7F5A;&#xFF09;&#xFF0C;&#x53CD;&#x9988;&#x7ED9;&#x63A7;&#x5236;&#x5668; RNN&#xFF0C;&#x8C03;&#x6574;&#x5176;&#x6743;&#x91CD;&#xFF0C;&#x4EE5;&#x4F18;&#x5316;&#x67B6;&#x6784;&#x751F;&#x6210;&#x7B56;&#x7565;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x5176;&#x4ED6;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;"><a href="#&#x5176;&#x4ED6;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;"></a>&#x5176;&#x4ED6;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;</h3>
<p>&#x867D;&#x7136; RNN &#x662F;&#x5E38;&#x7528;&#x7684;&#x63A7;&#x5236;&#x5668;&#x6A21;&#x578B;&#xFF0C;&#x4F46;&#x4E5F;&#x6709;&#x5176;&#x4ED6;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5B9E;&#x73B0;&#x63A7;&#x5236;&#x5668;&#x7684;&#x529F;&#x80FD;&#xFF1A;</p>
<ol>
<li>
<p><strong>&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#xFF08;Attention Mechanism&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528; Transformer &#x7B49;&#x57FA;&#x4E8E;&#x6CE8;&#x610F;&#x529B;&#x673A;&#x5236;&#x7684;&#x6A21;&#x578B;&#x63D0;&#x5347;&#x751F;&#x6210;&#x901F;&#x5EA6;&#x548C;&#x6027;&#x80FD;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#xFF08;Reinforcement Learning&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li>&#x5229;&#x7528;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x4E2D;&#x7684; Q-learning &#x6216;&#x8005; Actor-Critic &#x65B9;&#x6CD5;&#x6765;&#x66FF;&#x4EE3; RNN &#x751F;&#x6210;&#x67B6;&#x6784;&#x51B3;&#x7B56;&#x3002;</li>
</ul>
</li>
<li>
<p><strong>&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#xFF08;Evolutionary Algorithms&#xFF09;</strong>&#xFF1A;</p>
<ul>
<li>&#x4F7F;&#x7528;&#x57FA;&#x56E0;&#x7B97;&#x6CD5;&#xFF08;Genetic Algorithm&#xFF09;&#x7B49;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#x901A;&#x8FC7;&#x53D8;&#x5F02;&#x3001;&#x4EA4;&#x53C9;&#x7B49;&#x64CD;&#x4F5C;&#x751F;&#x6210;&#x548C;&#x4F18;&#x5316;&#x67B6;&#x6784;&#x3002;</li>
</ul>
</li>
</ol>
<h3 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h3>
<p>&#x4F7F;&#x7528; RNN &#x4F5C;&#x4E3A;&#x63A7;&#x5236;&#x5668;&#x6A21;&#x578B;&#x7684;&#x65B9;&#x5F0F;&#x4F7F;&#x5F97; NAS &#x80FD;&#x591F;&#x5904;&#x7406;&#x590D;&#x6742;&#x7684;&#x7ED3;&#x6784;&#x751F;&#x6210;&#x4EFB;&#x52A1;&#x5E76;&#x6355;&#x6349;&#x5230;&#x751F;&#x6210;&#x8FC7;&#x7A0B;&#x4E2D;&#x5E8F;&#x5217;&#x51B3;&#x7B56;&#x7684;&#x4F9D;&#x8D56;&#x5173;&#x7CFB;&#x3002;&#x5B83;&#x7684;&#x5E8F;&#x5217;&#x5904;&#x7406;&#x80FD;&#x529B;&#x548C;&#x72B6;&#x6001;&#x4FDD;&#x7559;&#x7279;&#x6027;&#xFF0C;&#x4F7F;&#x5176;&#x6210;&#x4E3A;&#x751F;&#x6210;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x7684;&#x7406;&#x60F3;&#x9009;&#x62E9;&#x3002;&#x5F53;&#x7136;&#xFF0C;&#x968F;&#x7740;&#x6280;&#x672F;&#x7684;&#x8FDB;&#x6B65;&#xFF0C;&#x4E5F;&#x51FA;&#x73B0;&#x4E86;&#x5176;&#x4ED6;&#x66FF;&#x4EE3;&#x65B9;&#x6CD5;&#xFF0C;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x5B9E;&#x9645;&#x9700;&#x6C42;&#x9009;&#x62E9;&#x5408;&#x9002;&#x7684;&#x63A7;&#x5236;&#x5668;&#x6A21;&#x578B;&#x3002;</p>
<h2 id="&#x89E3;&#x51B3;&#x8BC4;&#x4F30;&#x65F6;&#x95F4;&#x8FC7;&#x957F;&#xFF1F;"><a href="#&#x89E3;&#x51B3;&#x8BC4;&#x4F30;&#x65F6;&#x95F4;&#x8FC7;&#x957F;&#xFF1F;"></a>&#x89E3;&#x51B3;&#x8BC4;&#x4F30;&#x65F6;&#x95F4;&#x8FC7;&#x957F;&#xFF1F;</h2>
<p>&#x5728;&#x795E;&#x7ECF;&#x7F51;&#x7EDC;&#x67B6;&#x6784;&#x641C;&#x7D22;&#xFF08;NAS&#xFF09;&#x4E2D;&#xFF0C;&#x7531;&#x4E8E;&#x63A7;&#x5236;&#x5668;&#x751F;&#x6210;&#x7684;&#x6A21;&#x578B;&#x6570;&#x91CF;&#x53EF;&#x80FD;&#x975E;&#x5E38;&#x5E9E;&#x5927;&#xFF0C;&#x8FD9;&#x4F1A;&#x5BFC;&#x81F4;&#x8BAD;&#x7EC3;&#x548C;&#x8BC4;&#x4F30;&#x6574;&#x4F53;&#x8017;&#x65F6;&#x6F2B;&#x957F;&#x3002;&#x4EE5;&#x4E0B;&#x51E0;&#x79CD;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6709;&#x6548;&#x7F13;&#x89E3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;</p>
<h3 id="1. &#x4F7F;&#x7528;&#x4EE3;&#x7406;&#x4EFB;&#x52A1;"><a href="#1. &#x4F7F;&#x7528;&#x4EE3;&#x7406;&#x4EFB;&#x52A1;"></a>1. &#x4F7F;&#x7528;&#x4EE3;&#x7406;&#x4EFB;&#x52A1;</h3>
<p><strong>&#x4EE3;&#x7406;&#x4EFB;&#x52A1;</strong>&#x662F;&#x4E00;&#x79CD;&#x7F29;&#x77ED;&#x6BCF;&#x6B21;&#x8BAD;&#x7EC3;&#x548C;&#x8BC4;&#x4F30;&#x65F6;&#x95F4;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x901A;&#x8FC7;&#x5BF9;&#x4E00;&#x4E2A;&#x7B80;&#x5316;&#x4F46;&#x76F8;&#x5173;&#x6027;&#x5F3A;&#x7684;&#x5B50;&#x4EFB;&#x52A1;&#x8FDB;&#x884C;&#x4F18;&#x5316;&#xFF0C;&#x4EE5;&#x63A8;&#x6D4B;&#x5B8C;&#x6574;&#x4EFB;&#x52A1;&#x4E0A;&#x7684;&#x6027;&#x80FD;&#x3002;</p>
<ul>
<li><strong>&#x7F29;&#x5C0F;&#x6570;&#x636E;&#x96C6;</strong>&#xFF1A;&#x5BF9;&#x4E00;&#x4E2A;&#x66F4;&#x5C0F;&#x7684;&#x6570;&#x636E;&#x96C6;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#x548C;&#x9A8C;&#x8BC1;&#xFF0C;&#x5C3D;&#x5FEB;&#x83B7;&#x5F97;&#x6027;&#x80FD;&#x7684;&#x53CD;&#x9988;&#x3002;</li>
<li><strong>&#x7F29;&#x5C0F;&#x6A21;&#x578B;&#x89C4;&#x6A21;</strong>&#xFF1A;&#x4F7F;&#x7528;&#x7B80;&#x5316;&#x7684;&#x6A21;&#x578B;&#xFF08;&#x5982;&#x8F83;&#x5C11;&#x7684;&#x53C2;&#x6570;&#x548C;&#x5C42;&#xFF09;&#x4EE5;&#x51CF;&#x5C11;&#x6BCF;&#x6B21;&#x8BAD;&#x7EC3;&#x65F6;&#x95F4;&#x3002;</li>
<li><strong>&#x65E9;&#x505C;&#x6CD5;</strong>&#xFF1A;&#x76D1;&#x6D4B;&#x6A21;&#x578B;&#x7684;&#x9A8C;&#x8BC1;&#x96C6;&#x6027;&#x80FD;&#xFF0C;&#x5728;&#x68C0;&#x6D4B;&#x5230;&#x8FC7;&#x62DF;&#x5408;&#x8D8B;&#x52BF;&#x65F6;&#x7ACB;&#x5373;&#x4E2D;&#x6B62;&#x8BAD;&#x7EC3;&#x3002;</li>
</ul>
<h3 id="2. &#x5E76;&#x884C;&#x641C;&#x7D22;"><a href="#2. &#x5E76;&#x884C;&#x641C;&#x7D22;"></a>2. &#x5E76;&#x884C;&#x641C;&#x7D22;</h3>
<p><strong>&#x5E76;&#x884C;&#x641C;&#x7D22;</strong>&#x5229;&#x7528;&#x5206;&#x5E03;&#x5F0F;&#x8BA1;&#x7B97;&#x8D44;&#x6E90;&#x540C;&#x65F6;&#x8BC4;&#x4F30;&#x591A;&#x4E2A;&#x5019;&#x9009;&#x6A21;&#x578B;&#x7684;&#x5927;&#x89C4;&#x6A21;&#x5E76;&#x884C;&#x80FD;&#x529B;&#x3002;&#x4F8B;&#x5982;&#xFF1A;</p>
<ul>
<li><strong>&#x5206;&#x5E03;&#x5F0F;&#x8BA1;&#x7B97;</strong>&#xFF1A;&#x7528;&#x591A;&#x4E2A;&#x8BA1;&#x7B97;&#x8282;&#x70B9;&#x540C;&#x65F6;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#x548C;&#x8BC4;&#x4F30;&#xFF0C;&#x5145;&#x5206;&#x5229;&#x7528;&#x8BA1;&#x7B97;&#x8D44;&#x6E90;&#x3002;</li>
<li><strong>&#x591A;GPU&#x8BAD;&#x7EC3;</strong>&#xFF1A;&#x5728;&#x591A;GPU&#x5E73;&#x53F0;&#x4E0A;&#x8FDB;&#x884C;&#x5E76;&#x884C;&#x8BAD;&#x7EC3;&#xFF0C;&#x901A;&#x8FC7;&#x540C;&#x6B65;&#x6216;&#x8005;&#x5F02;&#x6B65;&#x8BC4;&#x4F30;&#x51CF;&#x5C11;&#x603B;&#x4F53;&#x65F6;&#x95F4;&#x3002;</li>
</ul>
<h3 id="3. &#x57FA;&#x4E8E;&#x6743;&#x91CD;&#x5206;&#x4EAB;&#x7684;&#x65B9;&#x6CD5;"><a href="#3. &#x57FA;&#x4E8E;&#x6743;&#x91CD;&#x5206;&#x4EAB;&#x7684;&#x65B9;&#x6CD5;"></a>3. &#x57FA;&#x4E8E;&#x6743;&#x91CD;&#x5206;&#x4EAB;&#x7684;&#x65B9;&#x6CD5;</h3>
<p>&#xFF08;&#x8FC1;&#x79FB;&#x5B66;&#x4E60;&#xFF09;
<strong>&#x57FA;&#x4E8E;&#x6743;&#x91CD;&#x5206;&#x4EAB;&#x7684;&#x65B9;&#x6CD5;</strong>&#xFF08;&#x4F8B;&#x5982; One-shot NAS &#x548C;NASNet&#xFF09;&#x901A;&#x8FC7;&#x5171;&#x4EAB;&#x90E8;&#x5206;&#x6743;&#x91CD;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x6BCF;&#x4E2A;&#x67B6;&#x6784;&#x5206;&#x522B;&#x8BAD;&#x7EC3;&#x3002;</p>
<ul>
<li><strong>One-shot&#x6A21;&#x578B;</strong>&#xFF1A;&#x6240;&#x6709;&#x5019;&#x9009;&#x67B6;&#x6784;&#x5171;&#x4EAB;&#x4E00;&#x4E2A;&#x8D85;&#x5927;&#x6A21;&#x578B;&#x4E2D;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x901A;&#x8FC7;&#x4E0D;&#x540C;&#x8DEF;&#x5F84;&#x9009;&#x62E9;&#x8FDB;&#x884C;&#x8BAD;&#x7EC3;&#x548C;&#x8BC4;&#x4F30;&#xFF0C;&#x53EA;&#x9700;&#x8BAD;&#x7EC3;&#x4E00;&#x6B21;&#x3002;</li>
<li><strong>&#x6743;&#x91CD;&#x7EE7;&#x627F;</strong>&#xFF1A;&#x5728;&#x4E0D;&#x540C;&#x5019;&#x9009;&#x67B6;&#x6784;&#x4E4B;&#x95F4;&#x4F20;&#x9012;&#x548C;&#x5171;&#x4EAB;&#x6743;&#x91CD;&#xFF0C;&#x65E0;&#x9700;&#x5B8C;&#x5168;&#x4ECE;&#x5934;&#x5F00;&#x59CB;&#x8BAD;&#x7EC3;&#x6BCF;&#x4E2A;&#x6A21;&#x578B;&#x3002;</li>
</ul>
<h3 id="4. &#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x548C;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#x4F18;&#x5316;"><a href="#4. &#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x548C;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#x4F18;&#x5316;"></a>4. &#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x548C;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#x4F18;&#x5316;</h3>
<p>&#x5229;&#x7528;&#x5F3A;&#x5316;&#x5B66;&#x4E60;&#x548C;&#x8FDB;&#x5316;&#x7B97;&#x6CD5;&#x8FDB;&#x4E00;&#x6B65;&#x4F18;&#x5316;&#x67B6;&#x6784;&#x751F;&#x6210;&#x548C;&#x9009;&#x62E9;&#x7684;&#x6548;&#x7387;&#x3002;</p>
<ul>
<li><strong>&#x5F3A;&#x5316;&#x5B66;&#x4E60;</strong>&#xFF1A;&#x4F18;&#x5316;&#x63A7;&#x5236;&#x5668;&#x751F;&#x6210;&#x51B3;&#x7B56;&#x7684;&#x7B56;&#x7565;&#xFF0C;&#x4F7F;&#x5176;&#x66F4;&#x5FEB;&#x627E;&#x5230;&#x9AD8;&#x8D28;&#x91CF;&#x7684;&#x67B6;&#x6784;&#x3002;&#x8FD9;&#x53EF;&#x4EE5;&#x51CF;&#x5C0F;&#x641C;&#x7D22;&#x7A7A;&#x95F4;&#xFF0C;&#x63D0;&#x9AD8;&#x641C;&#x7D22;&#x6548;&#x7387;&#x3002;</li>
<li><strong>&#x8FDB;&#x5316;&#x7B97;&#x6CD5;</strong>&#xFF1A;&#x901A;&#x8FC7;&#x9009;&#x62E9;&#x3001;&#x4EA4;&#x53C9;&#x3001;&#x53D8;&#x5F02;&#x7B49;&#x64CD;&#x4F5C;&#xFF0C;&#x786E;&#x4FDD;&#x6BCF;&#x4EE3;&#x8BC4;&#x4F30;&#x7684;&#x67B6;&#x6784;&#x5177;&#x6709;&#x66F4;&#x9AD8;&#x7684;&#x6F5C;&#x529B;&#x3002;</li>
</ul>
<h3 id="5. &#x4EE3;&#x7406;&#x6A21;&#x578B;&#xFF08;Performance Predictors&#xFF09;"><a href="#5. &#x4EE3;&#x7406;&#x6A21;&#x578B;&#xFF08;Performance Predictors&#xFF09;"></a>5. &#x4EE3;&#x7406;&#x6A21;&#x578B;&#xFF08;Performance Predictors&#xFF09;</h3>
<p><strong>&#x4EE3;&#x7406;&#x6A21;&#x578B;</strong>&#xFF08;&#x4F8B;&#x5982;&#x5143;&#x5B66;&#x4E60;&#xFF09;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x9884;&#x6D4B;&#x672A;&#x8BAD;&#x7EC3;&#x67B6;&#x6784;&#x7684;&#x6027;&#x80FD;&#xFF0C;&#x4ECE;&#x800C;&#x51CF;&#x5C11;&#x5B9E;&#x9645;&#x8BAD;&#x7EC3;&#x7684;&#x6B21;&#x6570;&#x3002;</p>
<ul>
<li><strong>&#x6027;&#x80FD;&#x9884;&#x6D4B;&#x5668;</strong>&#xFF1A;&#x8BAD;&#x7EC3;&#x4EE3;&#x7406;&#x6A21;&#x578B;&#xFF0C;&#x6839;&#x636E;&#x5F53;&#x524D;&#x67B6;&#x6784;&#x7684;&#x4E00;&#x4E9B;&#x7279;&#x5F81;&#x5FEB;&#x901F;&#x4F30;&#x8BA1;&#x5176;&#x6027;&#x80FD;&#xFF0C;&#x4EE5;&#x66FF;&#x4EE3;&#x6216;&#x51CF;&#x5C11;&#x5B9E;&#x9645;&#x8BAD;&#x7EC3;&#x3002;</li>
<li><strong>&#x5143;&#x5B66;&#x4E60;</strong>&#xFF1A;&#x57FA;&#x4E8E;&#x4EE5;&#x524D;&#x7684;&#x8BAD;&#x7EC3;&#x7ED3;&#x679C;&#xFF0C;&#x5B66;&#x4E60;&#x66F4;&#x597D;&#x7684;&#x6A21;&#x578B;&#x641C;&#x7D22;&#x7B56;&#x7565;&#xFF0C;&#x63D0;&#x9AD8;&#x6837;&#x672C;&#x6548;&#x7387;&#x3002;</li>
</ul>
<h2 id="&#x66F4;&#x5148;&#x8FDB;&#x7684;&#x201C;NAS&#x201D;"><a href="#&#x66F4;&#x5148;&#x8FDB;&#x7684;&#x201C;NAS&#x201D;"></a>&#x66F4;&#x5148;&#x8FDB;&#x7684;&#x201C;NAS&#x201D;</h2>
<h3 id="DARTS"><a href="#DARTS"></a>DARTS</h3>
`,E=[{level:1,title:"NAS-RL",children:[{level:2,title:"NAS 可以理解成深度学习模型的深度学习模型？",children:[]},{level:2,title:"控制器的原理？为什么通常是 RNN？",children:[{level:3,title:"控制器的原理",children:[]},{level:3,title:"为什么通常是 RNN？",children:[]},{level:3,title:"控制器 - RNN 的工作流程示例",children:[]},{level:3,title:"其他替代方法",children:[]},{level:3,title:"总结",children:[]}]},{level:2,title:"解决评估时间过长？",children:[{level:3,title:"1. 使用代理任务",children:[]},{level:3,title:"2. 并行搜索",children:[]},{level:3,title:"3. 基于权重分享的方法",children:[]},{level:3,title:"4. 强化学习和进化算法优化",children:[]},{level:3,title:"5. 代理模型（Performance Predictors）",children:[]}]},{level:2,title:"更先进的“NAS”",children:[{level:3,title:"DARTS",children:[]}]}]}];export{x as attributes,F as html,E as nestedHeaders};
