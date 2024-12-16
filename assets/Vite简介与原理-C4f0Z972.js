const x={title:"vite 简介与原理"},F=`<h1 id="vite&#x7B80;&#x4ECB;&#x4E0E;&#x539F;&#x7406;"><a href="#vite&#x7B80;&#x4ECB;&#x4E0E;&#x539F;&#x7406;"></a>vite&#x7B80;&#x4ECB;&#x4E0E;&#x539F;&#x7406;</h1>
<p><strong>&#x8BB2;&#x89E3;&#x8303;&#x56F4;</strong></p>
<ol start="0">
<li>&#x80CC;&#x666F;</li>
<li>vite&#x662F;&#x4EC0;&#x4E48;</li>
<li>&#x7279;&#x5F81;: &#x51B7;&#x542F;&#x52A8; + &#x70ED;&#x66F4;&#x65B0;</li>
<li>C/S &#x57FA;&#x672C;&#x67B6;&#x6784;</li>
<li>&#x9884;&#x5904;&#x7406;: &#x89E3;&#x51B3;&#x7684;&#x95EE;&#x9898; + &#x539F;&#x7406;</li>
<li>&#x70ED;&#x66FF;&#x6362;&#xFF1A;&#x5982;&#x4F55;&#x4F7F;&#x7528; + &#x539F;&#x7406;</li>
<li>&#x5176;&#x5B83;&#xFF1A;&#x63D2;&#x4EF6;&#x673A;&#x5236; + &#x7ADE;&#x54C1;&#x8D70;&#x52BF; + &#x603B;&#x7ED3; + QA</li>
</ol>
<h2 id="&#x80CC;&#x666F;"><a href="#&#x80CC;&#x666F;"></a>&#x80CC;&#x666F;</h2>
<p>&#x76EE;&#x524D;&#x7684;webpack development &#x573A;&#x666F;&#x4E5F;&#x4F1A;&#x628A;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7528;&#x5230;&#x7684;&#x4EE3;&#x7801;&#x5168;&#x90E8;&#x8FDB;&#x884C;&#x6253;&#x5305;&#x6784;&#x5EFA;&#xFF0C;&#x8FD9;&#x6837;&#x6253;&#x5305;&#x51FA;&#x6765;&#x7684;&#x4EE3;&#x7801;&#x662F;&#x5341;&#x5206;&#x5E9E;&#x5927;&#x7684;&#xFF0C;&#x5F88;&#x591A;&#x65F6;&#x5019;&#x5176;&#x5B9E;&#x6211;&#x4EEC;&#x5728;&#x5F00;&#x53D1;&#x8FC7;&#x7A0B;&#x4E2D;&#x5E76;&#x4E0D;&#x9700;&#x8981;&#x5168;&#x90E8;&#x4EE3;&#x7801;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x5C0F;&#x90E8;&#x5206;&#xFF0C;&#x8FD9;&#x4E2A;&#x65F6;&#x5019;&#x5927;&#x91CF;&#x7684;&#x6784;&#x5EFA;&#x65F6;&#x95F4;&#x90FD;&#x662F;&#x591A;&#x4F59;&#x7684;&#xFF0C;&#x6211;&#x4EEC;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x80FD;&#x591F;&#x771F;&#x6B63;&#x610F;&#x4E49;&#x4E0A;&#x5B9E;&#x73B0;&#x61D2;&#x52A0;&#x8F7D;&#x7684;&#x5F00;&#x53D1;&#x5DE5;&#x5177;&#x3002;</p>
<h2 id="vite &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"><a href="#vite &#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>vite &#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>
<p>Vite &#x662F;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x751F;ESM &#x9A71;&#x52A8;&#x7684; Web &#x5F00;&#x53D1;&#x6784;&#x5EFA;&#x5DE5;&#x5177;&#x3002;&#x5728;&#x5F00;&#x53D1;&#x73AF;&#x5883;&#x4E0B;&#x57FA;&#x4E8E;&#x6D4F;&#x89C8;&#x5668;&#x539F;&#x751F;ES imports &#x5F00;&#x53D1;&#xFF0C;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E0B;&#x57FA;&#x4E8E;Rollup&#x6253;&#x5305;&#x3002;</p>
<p>&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x7AEF;&#x4F7F;&#x7528; export&#x3001;import &#x7684;&#x65B9;&#x5F0F;&#x5BFC;&#x5165;&#x548C;&#x5BFC;&#x51FA;&#x6A21;&#x5757;&#xFF0C;&#x5728; script &#x6807;&#x7B7E;&#x91CC;&#x8BBE;&#x7F6E; type=&quot;module&quot;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x4F1A;&#x8BC6;&#x522B;&#x6240;&#x6709;&#x6DFB;&#x52A0;&#x4E86;type=&apos;module&apos;&#x7684;script&#x6807;&#x7B7E;&#xFF0C;&#x5BF9;&#x4E8E;&#x8BE5;&#x6807;&#x7B7E;&#x4E2D;&#x7684;import&#x5173;&#x952E;&#x5B57;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x4F1A;&#x53D1;&#x8D77;http&#x8BF7;&#x6C42;&#x83B7;&#x53D6;&#x6A21;&#x5757;&#x5185;&#x5BB9;&#x3002;</p>
<h2 id="&#x7279;&#x5F81;"><a href="#&#x7279;&#x5F81;"></a>&#x7279;&#x5F81;</h2>
<h3 id="&#x7F13;&#x6162;&#x7684;&#x542F;&#x52A8;"><a href="#&#x7F13;&#x6162;&#x7684;&#x542F;&#x52A8;"></a>&#x7F13;&#x6162;&#x7684;&#x542F;&#x52A8;</h3>
<p><strong>vite&#x4E4B;&#x524D;</strong></p>
<p>&#x5F53;&#x51B7;&#x542F;&#x52A8;&#x5F00;&#x53D1;&#x670D;&#x52A1;&#x5668;&#x65F6;&#xFF0C;&#x57FA;&#x4E8E;&#x6253;&#x5305;&#x5668;&#x7684;&#x65B9;&#x5F0F;&#x542F;&#x52A8;&#x5FC5;&#x987B;&#x4F18;&#x5148;&#x6293;&#x53D6;&#x5E76;&#x6784;&#x5EFA;&#x4F60;&#x7684;&#x6574;&#x4E2A;&#x5E94;&#x7528;&#xFF0C;&#x7136;&#x540E;&#x624D;&#x80FD;&#x63D0;&#x4F9B;&#x670D;&#x52A1;&#x3002;
<img src="https://image-static.segmentfault.com/390/909/3909091021-8309835d1e5e9c6f_fix732" alt="&#x4F20;&#x7EDF;bundle"></p>
<p><strong>vite&#x540E;</strong></p>
<p><img src="https://image-static.segmentfault.com/567/647/56764761-7263734579ea52a9_fix732" alt="ESM &#x7684;&#x6784;&#x5EFA;&#x6A21;&#x5F0F;">
&#x7070;&#x8272;&#x90E8;&#x5206;&#x662F;&#x6682;&#x65F6;&#x6CA1;&#x6709;&#x7528;&#x5230;&#x7684;&#x8DEF;&#x7531;&#xFF0C;&#x751A;&#x81F3;&#x5B8C;&#x5168;&#x4E0D;&#x4F1A;&#x53C2;&#x4E0E;&#x6784;&#x5EFA;&#x8FC7;&#x7A0B;&#xFF0C;&#x968F;&#x7740;&#x9879;&#x76EE;&#x91CC;&#x7684;&#x8DEF;&#x7531;&#x8D8A;&#x6765;&#x8D8A;&#x591A;&#xFF0C;&#x6784;&#x5EFA;&#x901F;&#x5EA6;&#x4E5F;&#x4E0D;&#x4F1A;&#x53D8;&#x6162;&#x3002;</p>
<h3 id="&#x7F13;&#x6162;&#x7684;&#x66F4;&#x65B0;"><a href="#&#x7F13;&#x6162;&#x7684;&#x66F4;&#x65B0;"></a>&#x7F13;&#x6162;&#x7684;&#x66F4;&#x65B0;</h3>
<p><strong>vite&#x4E4B;&#x524D;</strong></p>
<ul>
<li>
<p>&#x7B2C;&#x4E00;&#x9636;&#x6BB5;&#xFF1A;
&#x6253;&#x5305;&#x5668;&#x7684;&#x5F00;&#x53D1;&#x670D;&#x52A1;&#x5668;&#x5C06;&#x6784;&#x5EFA;&#x5185;&#x5BB9;&#x5B58;&#x5165;&#x5185;&#x5B58;&#xFF0C;&#x4FEE;&#x6539;&#x540E;&#x91CD;&#x65B0;&#x6784;&#x5EFA;&#x5E76;&#x91CD;&#x8F7D;&#x9875;&#x9762;&#xFF08;&#x4EE3;&#x4EF7;&#x5F88;&#x9AD8; + &#x91CD;&#x65B0;&#x52A0;&#x8F7D;&#x9875;&#x9762;&#x4F1A;&#x6D88;&#x9664;&#x5E94;&#x7528;&#x7684;&#x5F53;&#x524D;&#x72B6;&#x6001;&#xFF09;</p>
</li>
<li>
<p>&#x7B2C;&#x4E8C;&#x9636;&#x6BB5;&#xFF1A;
HMR &#x70ED;&#x66F4;&#x65B0;&#xFF08;&#x4E3B;&#x6D41;&#x7684;webpack&#xFF09;&#xFF0C;&#x5141;&#x8BB8;&#x4E00;&#x4E2A;&#x6A21;&#x5757; &#x201C;&#x70ED;&#x66FF;&#x6362;&#x201D; &#x5B83;&#x81EA;&#x5DF1;&#xFF0C;&#x800C;&#x5BF9;&#x9875;&#x9762;&#x5176;&#x4F59;&#x90E8;&#x5206;&#x6CA1;&#x6709;&#x5F71;&#x54CD;&#x3002;
&#x5B9E;&#x8DF5;&#x4E2D;&#xFF1A;&#x4E0D;&#x8FC7;HMR&#x4E5F;&#x4F1A;&#x968F;&#x7740;&#x5E94;&#x7528;&#x89C4;&#x6A21;&#x7684;&#x589E;&#x957F;&#x800C;&#x663E;&#x8457;&#x4E0B;&#x964D;</p>
</li>
</ul>
<p><strong>vite&#x540E;</strong></p>
<p>HMR &#x662F;&#x5728;&#x539F;&#x751F; ESM &#x4E0A;&#x6267;&#x884C;&#x7684;&#x3002;&#x5F53;&#x7F16;&#x8F91;&#x4E00;&#x4E2A;&#x6587;&#x4EF6;&#x65F6;&#xFF0C;Vite &#x53EA;&#x9700;&#x8981;&#x7CBE;&#x786E;&#x5730;&#x4F7F;&#x5DF2;&#x7F16;&#x8F91;&#x7684;&#x6A21;&#x5757;&#x4E0E;&#x5176;&#x6700;&#x8FD1;&#x7684; HMR &#x8FB9;&#x754C;&#x4E4B;&#x95F4;&#x7684;&#x94FE;&#x5931;&#x6548;&#xFF08;&#x5927;&#x591A;&#x6570;&#x65F6;&#x5019;&#x53EA;&#x9700;&#x8981;&#x6A21;&#x5757;&#x672C;&#x8EAB;&#xFF09;&#xFF0C;&#x4F7F; HMR &#x66F4;&#x65B0;&#x59CB;&#x7EC8;&#x5FEB;&#x901F;&#xFF0C;&#x65E0;&#x8BBA;&#x5E94;&#x7528;&#x7684;&#x5927;&#x5C0F;&#x3002;</p>
<h2 id="&#x57FA;&#x672C;&#x67B6;&#x6784;"><a href="#&#x57FA;&#x672C;&#x67B6;&#x6784;"></a>&#x57FA;&#x672C;&#x67B6;&#x6784;</h2>
<p><img src="https://pic3.zhimg.com/80/v2-31d7184b441c76cf972f740264fb5f0e_1440w.jpg" alt="&#x57FA;&#x672C;&#x67B6;&#x6784;&#x56FE;"></p>
<ol>
<li>server &#x9884;&#x6784;&#x5EFA; -&gt; &#x542F;&#x7528;&#x670D;&#x52A1; node + connect + ws</li>
<li>&#x6D4F;&#x89C8;&#x5668;&#x8BF7;&#x6C42; -&gt; server&#x4E2D;&#x95F4;&#x4EF6;&#x5904;&#x7406; -&gt; server&#x63D2;&#x4EF6;&#x8C03;&#x7528;&#xFF08;&#xFF08;&#x8DEF;&#x5F84;&#x6539;&#x5199;&#xFF0C;hot&#x6CE8;&#x5165;&#xFF0C;&#x4F9D;&#x8D56;&#x56FE;&#x751F;&#x6210;&#xFF09; -&gt; &#x8FD4;&#x56DE; client</li>
</ol>
<h2 id="&#x9884;&#x6784;&#x5EFA;"><a href="#&#x9884;&#x6784;&#x5EFA;"></a>&#x9884;&#x6784;&#x5EFA;</h2>
<p><img src="https://pic4.zhimg.com/80/v2-c4c7642a3d9166294ffaf7f4589652b3_1440w.jpg" alt="&#x9884;&#x6784;&#x5EFA;&#x56FE;"></p>
<p>&#x57FA;&#x4E8E; esbuild &#x7684;<strong>&#x4F9D;&#x8D56;</strong>&#x9884;&#x6253;&#x5305;</p>
<ol>
<li>&#x51CF;&#x5C11;&#x6A21;&#x5757;/&#x8BF7;&#x6C42;&#x6570;&#x91CF;&#xFF1B;</li>
<li>&#x652F;&#x6301; CommonJS &#x4F9D;&#x8D56;&#x3002;</li>
</ol>
<p>&#x9884;&#x6253;&#x5305;&#x53EA;&#x6709;&#x5728;&#x4F9D;&#x8D56;&#x53D8;&#x52A8;&#x65F6;&#x624D;&#x9700;&#x8981;&#x6267;&#x884C;&#xFF0C;&#x4F46;&#x5728;&#x6709;&#x5927;&#x91CF;&#x4F9D;&#x8D56;&#x7684;&#x9879;&#x76EE;&#x4E2D;&#xFF0C;&#x6BCF;&#x6B21;&#x6267;&#x884C;&#x8FD8;&#x662F;&#x53EF;&#x80FD;&#x4F1A;&#x9700;&#x8981;&#x5F88;&#x957F;&#x65F6;&#x95F4;&#x3002;Vite &#x4E4B;&#x524D;&#x662F;&#x4F7F;&#x7528; Rollup &#x6765;&#x6267;&#x884C;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#xFF0C;&#x5728; 2.0 &#x4E2D;&#x5207;&#x6362;&#x5230;&#x4E86; esbuild&#xFF0C;&#x4F7F;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x52A0;&#x5FEB;&#x4E86;&#x51E0;&#x5341;&#x500D;&#x3002;</p>
<p>Vite &#x901A;&#x8FC7;&#x5728;&#x4E00;&#x5F00;&#x59CB;&#x5C06;&#x5E94;&#x7528;&#x4E2D;&#x7684;&#x6A21;&#x5757;&#x533A;&#x5206;&#x4E3A; &#x4F9D;&#x8D56; &#x548C; &#x6E90;&#x7801; &#x4E24;&#x7C7B;&#xFF0C;&#x6539;&#x8FDB;&#x4E86;&#x5F00;&#x53D1;&#x670D;&#x52A1;&#x5668;&#x542F;&#x52A8;&#x65F6;&#x95F4;&#x3002;</p>
<ol>
<li><strong>&#x4F9D;&#x8D56;</strong> &#x5927;&#x591A;&#x4E3A;&#x5728;&#x5F00;&#x53D1;&#x65F6;&#x4E0D;&#x4F1A;&#x53D8;&#x52A8;&#x7684;&#x7EAF; JavaScript&#xFF0C;&#x4F8B;&#x5982; node_modules &#x7B49;&#x7B2C;&#x4E09;&#x65B9;&#x4F9D;&#x8D56;</li>
<li><strong>&#x6E90;&#x7801;</strong> &#x901A;&#x5E38;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x65F6;&#x5E38;&#x88AB;&#x7F16;&#x8F91;&#x7684;&#x6587;&#x4EF6;</li>
</ol>
<ul>
<li>&#x573A;&#x666F;</li>
</ul>
<p>import { debounce } from &apos;lodash&apos; &#x5BFC;&#x5165;&#x4E00;&#x4E2A;&#x547D;&#x540D;&#x51FD;&#x6570;&#x7684;&#x65F6;&#x5019;&#xFF0C;debounce &#x51FD;&#x6570;&#x7684;&#x6A21;&#x5757;&#x5185;&#x90E8;&#x53C8;&#x4F9D;&#x8D56;&#x4E86;&#x5F88;&#x591A;&#x5176;&#x4ED6;&#x51FD;&#x6570;&#xFF0C;&#x5F62;&#x6210;&#x4E86;&#x4E00;&#x4E2A;&#x4F9D;&#x8D56;&#x56FE;&#x3002;
&#x5F53;&#x6D4F;&#x89C8;&#x5668;&#x8BF7;&#x6C42; debounce &#x7684;&#x6A21;&#x5757;&#x65F6;&#xFF0C;&#x53C8;&#x4F1A;&#x53D1;&#x73B0;&#x5185;&#x90E8;&#x6709; 2 &#x4E2A; import&#xFF0C;&#x518D;&#x8FD9;&#x6837;&#x5EF6;&#x4F38;&#x4E0B;&#x53BB;&#xFF0C;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x53EF;&#x80FD;&#x5E26;&#x6765;&#x4E86;&#x51E0;&#x767E;&#x6B21;&#x8BF7;&#x6C42;&#x3002;
<img src="https://image-static.segmentfault.com/192/501/1925014045-24fec7998153eafe_fix732" alt="&#x4F18;&#x5316;&#x4F9D;&#x8D56;"></p>
<ul>
<li>&#x89E3;&#x51B3;&#x65B9;&#x6848;
&#x6298;&#x4E2D;</li>
</ul>
<p>&#x5229;&#x7528; Esbuild &#x5FEB;&#x901F;&#x7684;&#x6784;&#x5EFA;&#x7F16;&#x8BD1;&#x901F;&#x5EA6;&#xFF0C;&#x5728;&#x6CA1;&#x6709;&#x611F;&#x77E5;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x5728;&#x542F;&#x52A8;&#x7684;&#x65F6;&#x5019;&#x9884;&#x5148;&#x5E2E;&#x4F60;&#x628A; debounce &#x6240;&#x7528;&#x5230;&#x7684;&#x6240;&#x6709;&#x5185;&#x90E8;&#x6A21;&#x5757;&#x5168;&#x90E8;&#x6253;&#x5305;&#x6210;&#x4E00;&#x4E2A;&#x4F20;&#x7EDF;&#x7684; js bundle&#xFF08;&#x6784;&#x5EFA;&#x597D;&#x7684;bundle&#x4F1A;&#x653E;&#x5728;node_modules/.vite&#x4E0B;&#xFF09;&#xFF0C;&#x540E;&#x7EED;&#x5BF9; A module&#x7684;&#x5F15;&#x7528;&#x90FD;&#x76F4;&#x63A5;&#x8FD4;&#x56DE; .vite/A &#x6587;&#x4EF6;&#x5185;&#x5BB9;</p>
<p>Esbuild &#x4F7F;&#x7528; Go &#x7F16;&#x5199;&#xFF0C;&#x5E76;&#x4E14;&#x6BD4;&#x4EE5; JavaScript &#x7F16;&#x5199;&#x7684;&#x6253;&#x5305;&#x5668;&#x9884;&#x6784;&#x5EFA;&#x4F9D;&#x8D56;&#x5FEB; 10-100 &#x500D;&#x3002;
<img src="https://image-static.segmentfault.com/261/069/2610694591-1cb5e4e6fe22c3b3_fix732" alt="&#x6784;&#x5EFA;&#x901F;&#x5EA6;&#x5BF9;&#x6BD4;"></p>
<h2 id="HMR&#xFF08;&#x70ED;&#x66FF;&#x6362;&#xFF09;"><a href="#HMR&#xFF08;&#x70ED;&#x66FF;&#x6362;&#xFF09;"></a>HMR&#xFF08;&#x70ED;&#x66FF;&#x6362;&#xFF09;</h2>
<h3 id="demo"><a href="#demo"></a>demo</h3>
<ol>
<li>self accept</li>
</ol>
<ul>
<li>demo .vue css</li>
<li>demo .vue template</li>
<li>demo .vue script</li>
</ul>
<ol start="2">
<li>array accept (not self accept)</li>
</ol>
<ul>
<li>demo https://github.com/wizardpisces/lerna-repo/tree/master/packages/mini-vite/template-vue-ts/src/mimic-store</li>
</ul>
<h3 id="&#x539F;&#x7406;"><a href="#&#x539F;&#x7406;"></a>&#x539F;&#x7406;</h3>
<ul>
<li><img src="https://pic4.zhimg.com/80/v2-ba85e5e1a85f75966eeb63ec4def066f_1440w.jpg" alt="&#x6784;&#x5EFA;HMR&#x56FE;"></li>
<li><img src="https://pic3.zhimg.com/80/v2-1ed0d753300fe600cb6f9aafa2479c5a_1440w.jpg" alt="HMR&#x4EA4;&#x4E92;&#x56FE;"></li>
</ul>
<p><strong>server build moduleGraph</strong></p>
<p>&#x5206;&#x6790; &#x6E90;&#x6587;&#x4EF6; import -&gt; build &#x7236;&#x5B50;&#x5173;&#x7CFB;&#x56FE;
&#x5206;&#x6790; &#x6E90;&#x6587;&#x4EF6; import.meta.hot -&gt; build &#x70ED;&#x66FF;&#x6362;&#x4F9D;&#x8D56;&#x56FE;</p>
<p><strong>client build hotModulesMap</strong></p>
<pre><code>
// hot injection&#xFF0C;&#x5206;&#x6790;&#x4EE3;&#x7801;&#x5305;&#x542B; &quot;import.meta.hot&quot;&#xFF0C;&#x5C31;&#x4F1A;&#x5728;&#x5934;&#x90E8;&#x63D2;&#x5165;&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#x8FDB;&#x884C;&#x70ED;&#x66FF;&#x6362;&#x56FE;&#x6784;&#x5EFA;
import { createHotContext as __litepack__createHotContext } from &quot;/@litepack/client&quot;;
import.meta.hot = __litepack__createHotContext(&quot;/src/mimic-store/index.ts&quot;);
...

// hot injection&#xFF0C;&#x6E90;&#x4EE3;&#x7801;
if (import.meta.hot) {
  import.meta.hot.accept([&quot;/src/mimic-store/module1.ts&quot;], ([module12, module22]) =&gt; {
    let param = {};
    if (module12) {
      param[&quot;module1&quot;] = module12.default;
    }
    module.hotUpdate(param);
  });
}

</code></pre>
<h2 id="vite &#x63D2;&#x4EF6;&#x673A;&#x5236;"><a href="#vite &#x63D2;&#x4EF6;&#x673A;&#x5236;"></a>vite &#x63D2;&#x4EF6;&#x673A;&#x5236;</h2>
<p><img src="https://pic1.zhimg.com/80/v2-206f26236414d03f4283ac19054f6f64_1440w.jpg" alt="&#x63D2;&#x4EF6;&#x56FE;&#x4F8B;&#x5B50; vite-plugin-vue"></p>
<p>&#x5728; rollup &#x63D2;&#x4EF6;&#x57FA;&#x7840;&#x4E0A; &#x6269;&#x5C55;&#x51FA; vite &#x7684; plugin API&#xFF0C;&#x4EE5;&#x53CA;&#x6267;&#x884C;&#x673A;&#x5236;&#x3002;&#x597D;&#x5904;&#xFF1A;&#x4E00;&#x5957;&#x63D2;&#x4EF6;&#x53EF;&#x80FD;&#x5728; rollup &#x8DDF; vite &#x540C;&#x65F6;&#x517C;&#x5BB9;&#x4F7F;&#x7528;&#xFF08;&#x5982;&#x679C;&#x5E76;&#x672A;&#x4F7F;&#x7528;vite&#x72EC;&#x6709;&#x7684;&#x63D2;&#x4EF6;hook&#xFF09;&#xFF0C;&#x6269;&#x5927; vite&#x7684;&#x751F;&#x6001;&#x5708;&#xFF0C;&#x76F4;&#x63A5;&#x8FD0;&#x884C;&#x5927;&#x90E8;&#x5206;&#x7684; rollup&#x63D2;&#x4EF6;</p>
<h2 id="&#x8D8B;&#x52BF;"><a href="#&#x8D8B;&#x52BF;"></a>&#x8D8B;&#x52BF;</h2>
<p><a href="https://www.npmtrends.com/snowpack-vs-vite">snowpack vs vite</a></p>
<h2 id="&#x603B;&#x7ED3;"><a href="#&#x603B;&#x7ED3;"></a>&#x603B;&#x7ED3;</h2>
<ul>
<li>vite&#x5DF2;&#x7ECF;&#x51FA;&#x5230;&#x7248;&#x672C;2&#xFF0C;&#x76EE;&#x524D;spa&#x9879;&#x76EE;&#x7528;&#x8D77;&#x6765;&#x6CA1;&#x53D1;&#x73B0;&#x4EC0;&#x4E48;&#x7279;&#x522B;&#x95EE;&#x9898;</li>
<li>&#x5185;&#x90E8;&#x9879;&#x76EE;(admin)&#x53EF;&#x4EE5;&#x5F00;&#x59CB;&#x5148;&#x5C1D;&#x8BD5; Vite</li>
<li>SSR &#x76EE;&#x524D;&#x5904;&#x5728;&#x5B9E;&#x9A8C;&#x9636;&#x6BB5;&#xFF0C;&#x8FD8;&#x9700;&#x7B49;&#x5F85;</li>
</ul>
<h2 id="QA"><a href="#QA"></a>QA</h2>
<h3 id="&#x662F;&#x5426;&#x4F1A;&#x53D6;&#x4EE3; webpack&#xFF1F;"><a href="#&#x662F;&#x5426;&#x4F1A;&#x53D6;&#x4EE3; webpack&#xFF1F;"></a>&#x662F;&#x5426;&#x4F1A;&#x53D6;&#x4EE3; webpack&#xFF1F;</h3>
<p>&#x76EE;&#x524D;&#x770B;&#x8D77;&#x6765;&#x4E0D;&#x4F1A;</p>
<p><strong>&#x539F;&#x56E0;&#xFF1A;</strong></p>
<ul>
<li>webpack&#x80FD;&#x8986;&#x76D6;&#x66F4;&#x591A;&#x7684;&#x5947;&#x7279;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x751F;&#x6001;&#x4E5F;&#x66F4;&#x4E30;&#x5BCC;</li>
</ul>
<h3 id="vite&#x8FD8;&#x6709;&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#xFF1F;"><a href="#vite&#x8FD8;&#x6709;&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#xFF1F;"></a>vite&#x8FD8;&#x6709;&#x54EA;&#x4E9B;&#x95EE;&#x9898;&#xFF1F;</h3>
<ol>
<li>&#x670D;&#x52A1;&#x7AEF;&#x6E32;&#x67D3; (SSR) &#x652F;&#x6301;&#x8FD8;&#x5904;&#x5728;&#x5B9E;&#x9A8C;&#x9636;&#x6BB5;&#xFF0C;&#x4EA7;&#x7EBF;&#x4F7F;&#x7528;&#x4ECD;&#x9700;&#x7B49;&#x5F85;</li>
</ol>
<h3 id="&#x4FEE;&#x6539; node_modules &#x6E90;&#x6587;&#x4EF6;&#x662F;&#x5426;&#x89E6;&#x53D1;&#x70ED;&#x66F4;&#x65B0;&#xFF1F;"><a href="#&#x4FEE;&#x6539; node_modules &#x6E90;&#x6587;&#x4EF6;&#x662F;&#x5426;&#x89E6;&#x53D1;&#x70ED;&#x66F4;&#x65B0;&#xFF1F;"></a>&#x4FEE;&#x6539; node_modules &#x6E90;&#x6587;&#x4EF6;&#x662F;&#x5426;&#x89E6;&#x53D1;&#x70ED;&#x66F4;&#x65B0;&#xFF1F;</h3>
<p>&#x4E0D;&#x4F1A;</p>
<h3 id="&#x5982;&#x4F55;&#x5165;&#x624B; vite &#x6E90;&#x7801;"><a href="#&#x5982;&#x4F55;&#x5165;&#x624B; vite &#x6E90;&#x7801;"></a>&#x5982;&#x4F55;&#x5165;&#x624B; vite &#x6E90;&#x7801;</h3>
<p><a href="https://github.com/wizardpisces/lerna-repo/tree/master/packages/mini-vite">&#x7B80;&#x5316;&#x7248; vite</a>&#xFF0C;&#x4F9B;&#x521D;&#x5165;&#x5751;</p>
<p><strong>&#x539F;&#x56E0;&#xFF1A;</strong></p>
<ul>
<li>&#x7531;&#x4E8E;&#x9884;&#x6784;&#x5EFA;&#xFF0C;node_modules&#x91CC;&#x9762;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x5DF2;&#x7ECF;&#x88AB;&#x6253;&#x5305;&#x5230; node_modules/.vite&#x4E0B;&#x9762;&#xFF0C;&#x76EE;&#x524D;&#x6B64;&#x8DEF;&#x5F84;&#x5E76;&#x672A;&#x6CE8;&#x518C;&#x5230;&#x70ED;&#x66FF;&#x6362;&#x56FE;&#x91CC;&#x9762;</li>
</ul>
<p><strong>&#x591A;&#x79CD;&#x6784;&#x5EFA;&#x5DE5;&#x5177;&#x7684;&#x6BD4;&#x5BF9;</strong></p>
<ol>
<li>
<p>webpack :&#x5F3A;&#x8C03;&#x5BF9;web&#x5F00;&#x53D1;&#x7684;&#x652F;&#x6301;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5185;&#x7F6E;&#x4E86;HMR&#x7684;&#x652F;&#x6301;&#xFF0C;&#x63D2;&#x4EF6;&#x7CFB;&#x7EDF;&#x6BD4;&#x8F83;&#x5F3A;&#x5927;&#xFF0C;&#x5BF9;&#x5404;&#x79CD;&#x6A21;&#x5757;&#x7CFB;&#x7EDF;&#x517C;&#x5BB9;&#x6027;&#x6700;&#x4F73;(amd,cjs,umd,esm&#x7B49;&#xFF0C;&#x517C;&#x5BB9;&#x6027;&#x597D;&#x7684;&#x6709;&#x70B9;&#x8FC7;&#x5206;&#x4E86;&#xFF0C;&#x8FD9;&#x5B9E;&#x9645;&#x4E0A;&#x6709;&#x5229;&#x6709;&#x5F0A;,&#x5BFC;&#x81F4;&#x9762;&#x5411;webpack&#x7F16;&#x7A0B;&#xFF09;&#xFF0C;&#x6709;&#x4E30;&#x5BCC;&#x7684;&#x751F;&#x6001;&#xFF0C;&#x7F3A;&#x70B9;&#x662F;&#x4EA7;&#x7269;&#x4E0D;&#x591F;&#x5E72;&#x51C0;&#xFF0C;&#x4EA7;&#x7269;&#x4E0D;&#x652F;&#x6301;&#x751F;&#x6210;esm&#x683C;&#x5F0F;&#xFF0C; &#x63D2;&#x4EF6;&#x5F00;&#x53D1;&#x4E0A;&#x624B;&#x8F83;&#x96BE;&#xFF0C;&#x4E0D;&#x592A;&#x9002;&#x5408;&#x5E93;&#x7684;&#x5F00;&#x53D1;&#x3002;</p>
</li>
<li>
<p>rollup: &#x5F3A;&#x8C03;&#x5BF9;&#x5E93;&#x5F00;&#x53D1;&#x7684;&#x652F;&#x6301;&#xFF0C;&#x57FA;&#x4E8E;ESM&#x6A21;&#x5757;&#x7CFB;&#x7EDF;&#xFF0C;&#x5BF9;tree shaking&#x6709;&#x7740;&#x826F;&#x597D;&#x7684;&#x652F;&#x6301;&#xFF0C;&#x4EA7;&#x7269;&#x975E;&#x5E38;&#x5E72;&#x51C0;&#xFF0C;&#x652F;&#x6301;&#x591A;&#x79CD;&#x8F93;&#x51FA;&#x683C;&#x5F0F;&#xFF0C;&#x9002;&#x5408;&#x505A;&#x5E93;&#x7684;&#x5F00;&#x53D1;&#xFF0C;&#x63D2;&#x4EF6;api&#x6BD4;&#x8F83;&#x53CB;&#x597D;&#xFF0C;&#x7F3A;&#x70B9;&#x662F;&#x5BF9;cjs&#x652F;&#x6301;&#x9700;&#x8981;&#x4F9D;&#x8D56;&#x63D2;&#x4EF6;&#xFF0C;&#x4E14;&#x652F;&#x6301;&#x6548;&#x679C;&#x4E0D;&#x4F73;&#x9700;&#x8981;&#x8F83;&#x591A;&#x7684;hack&#xFF0C;&#x4E0D;&#x652F;&#x6301;HMR&#xFF0C;&#x505A;&#x5E94;&#x7528;&#x5F00;&#x53D1;&#x65F6;&#x9700;&#x8981;&#x4F9D;&#x8D56;&#x5404;&#x79CD;&#x63D2;&#x4EF6;&#x3002;</p>
</li>
<li>
<p>esbuild: &#x5F3A;&#x8C03;&#x6027;&#x80FD;&#xFF0C;&#x5185;&#x7F6E;&#x4E86;&#x5BF9;css&#x3001;&#x56FE;&#x7247;&#x3001;react&#x3001;typescript&#x7B49;&#x5185;&#x7F6E;&#x652F;&#x6301;&#xFF0C;&#x7F16;&#x8BD1;&#x901F;&#x5EA6;&#x7279;&#x522B;&#x5FEB;&#xFF08;&#x662F;webpack&#x548C;rollup&#x901F;&#x5EA6;&#x7684;100&#x500D;+),&#x7F3A;&#x70B9;&#x662F;&#x76EE;&#x524D;&#x63D2;&#x4EF6;&#x7CFB;&#x7EDF;&#x8F83;&#x4E3A;&#x7B80;&#x5355;&#xFF08;&#x6846;&#x67B6;&#x4F5C;&#x8005;&#x8FD8;&#x5728;&#x8FED;&#x4EE3;&#x4E2D;&#xFF09;&#xFF0C;&#x751F;&#x6001;&#x4E0D;&#x5982;webpack&#x548C;rollup&#x6210;&#x719F;&#x3002;</p>
</li>
</ol>
<h2 id="Reference"><a href="#Reference"></a>Reference</h2>
<ul>
<li>https://github.com/wizardpisces/lerna-repo/tree/master/packages/mini-vite</li>
<li>https://vitejs.dev/guide/</li>
<li>https://github.com/evanw/esbuild</li>
<li>https://segmentfault.com/a/1190000039264055</li>
</ul>
<h2 id="&#x4E0B;&#x671F;&#x9884;&#x544A;"><a href="#&#x4E0B;&#x671F;&#x9884;&#x544A;"></a>&#x4E0B;&#x671F;&#x9884;&#x544A;</h2>
<p>vite ssr&#x7B80;&#x4ECB;</p>
`,E=[{level:1,title:"vite简介与原理",children:[{level:2,title:"背景",children:[]},{level:2,title:"vite 是什么？",children:[]},{level:2,title:"特征",children:[{level:3,title:"缓慢的启动",children:[]},{level:3,title:"缓慢的更新",children:[]}]},{level:2,title:"基本架构",children:[]},{level:2,title:"预构建",children:[]},{level:2,title:"HMR（热替换）",children:[{level:3,title:"demo",children:[]},{level:3,title:"原理",children:[]}]},{level:2,title:"vite 插件机制",children:[]},{level:2,title:"趋势",children:[]},{level:2,title:"总结",children:[]},{level:2,title:"QA",children:[{level:3,title:"是否会取代 webpack？",children:[]},{level:3,title:"vite还有哪些问题？",children:[]},{level:3,title:"修改 node_modules 源文件是否触发热更新？",children:[]},{level:3,title:"如何入手 vite 源码",children:[]}]},{level:2,title:"Reference",children:[]},{level:2,title:"下期预告",children:[]}]}];export{x as attributes,F as html,E as nestedHeaders};
