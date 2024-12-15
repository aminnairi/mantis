import{_ as i,c as a,a1 as n,o as l}from"./chunks/framework.CNY3Wz3S.js";const o=JSON.parse('{"title":"URL","description":"","frontmatter":{},"headers":[],"relativePath":"url.md","filePath":"url.md"}'),p={name:"url.md"};function t(h,s,e,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h1><p>Mantis provides a type-safe way to create and manipulate URLs.</p><h2 id="creating-urls" tabindex="-1">Creating URLs <a class="header-anchor" href="#creating-urls" aria-label="Permalink to &quot;Creating URLs&quot;">​</a></h2><p>Use <code>create_url</code> to build URLs with proper encoding:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-a56s8" id="tab-UnkFWzn" checked><label data-title="main.v" for="tab-UnkFWzn">main.v</label></div><div class="blocks"><div class="language-v vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> khalyomede.mantis.http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { create_url }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Simple URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/posts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;/blog/posts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // URL with query parameters</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url_with_query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/search&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    queries: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;q&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url_with_query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;/search?q=hello+world&amp;page=1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="url-components" tabindex="-1">URL Components <a class="header-anchor" href="#url-components" aria-label="Permalink to &quot;URL Components&quot;">​</a></h2><p>URLs can include various components:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IMu1x" id="tab-fYp1xWn" checked><label data-title="main.v" for="tab-fYp1xWn">main.v</label></div><div class="blocks"><div class="language-v vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> khalyomede.mantis.http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Url }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Url{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: .https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sub_domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blog&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tld: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    paths: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;posts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    queries: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;utm_source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;twitter&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;utm_medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;social&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;https://blog.example.com:8080/posts/2024/hello-world?utm_source=twitter&amp;utm_medium=social#comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h3 id="url-encoding-decoding" tabindex="-1">URL Encoding/Decoding <a class="header-anchor" href="#url-encoding-decoding" aria-label="Permalink to &quot;URL Encoding/Decoding&quot;">​</a></h3><p>Safely encode and decode URL components:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-U_LcN" id="tab-FscoONN" checked><label data-title="main.v" for="tab-FscoONN">main.v</label></div><div class="blocks"><div class="language-v vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> khalyomede.mantis.http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { encode_url, decode_url }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Encoding</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  encoded </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encode_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world &amp; more&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(encoded) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;hello+world+%26+more&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Decoding</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  decoded </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> decode_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello+world+%26+more&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(decoded) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;hello world &amp; more&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="supported-schemes" tabindex="-1">Supported Schemes <a class="header-anchor" href="#supported-schemes" aria-label="Permalink to &quot;Supported Schemes&quot;">​</a></h2><p>Mantis supports various URL schemes:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BpcL3" id="tab-Lnc5brx" checked><label data-title="main.v" for="tab-Lnc5brx">main.v</label></div><div class="blocks"><div class="language-v vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> khalyomede.mantis.http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Url }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // HTTP/HTTPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  http_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Url{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: .http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // HTTPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  https_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Url{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: .https</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tld: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // WebSocket</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ws_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Url{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: .ws</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;socket&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tld: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Other supported schemes:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // - .wss (Secure WebSocket)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // - .mailto</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // - .tel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // - .slack</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // - .s3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,14)]))}const c=i(p,[["render",t]]);export{o as __pageData,c as default};
