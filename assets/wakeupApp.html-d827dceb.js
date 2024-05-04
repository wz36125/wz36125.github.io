import{_ as n,o as a,c as s,a as t}from"./app-c9408cad.js";const e={},p=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><h3 id="在浏览器中-是没有办法知道用户是否安装了某个app-可以通过-url-scheme-调用底层接口跳转" tabindex="-1"><a class="header-anchor" href="#在浏览器中-是没有办法知道用户是否安装了某个app-可以通过-url-scheme-调用底层接口跳转" aria-hidden="true">#</a> 在浏览器中，是没有办法知道用户是否安装了某个app，可以通过 URL Scheme 调用底层接口跳转</h3><h3 id="常用app的-url-scheme" tabindex="-1"><a class="header-anchor" href="#常用app的-url-scheme" aria-hidden="true">#</a> 常用APP的 URL Scheme</h3><table><thead><tr><th>APP</th><th>微信</th><th>支付宝</th><th>淘宝</th><th>微博</th><th>QQ</th><th>知乎</th><th>短信</th></tr></thead><tbody><tr><td>URL Scheme</td><td>weixin://</td><td>alipay://</td><td>taobao://</td><td>sinaweibo://</td><td>mqq://</td><td>zhihu://</td><td>sms://</td></tr></tbody></table><h3 id="url-scheme-语法" tabindex="-1"><a class="header-anchor" href="#url-scheme-语法" aria-hidden="true">#</a> URL Scheme 语法</h3><p>URL的组成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[scheme:][//authority][path][?query][#fragment]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面表格中都是最简单的用于打开 APP 的 URL Scheme，下面才是我们常用的 URL Scheme 格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
行为(应用的某个功能)    
            |
scheme://[path][?query]
   |               |
应用标识       功能需要的参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="然后进行推断假设-我设定一个时间段-3秒-如果用户安装了指定的app-手机此时底部会弹出一个小窗-问用户是否打开app-如果打开后会离开浏览器-此时就会触发-visibilitychange-事件-如果没有在指定时间内离开浏览器-那就认定用户没有安装app-就跳转到指定的应用市场去安装或者直接跳转下载app的链接" tabindex="-1"><a class="header-anchor" href="#然后进行推断假设-我设定一个时间段-3秒-如果用户安装了指定的app-手机此时底部会弹出一个小窗-问用户是否打开app-如果打开后会离开浏览器-此时就会触发-visibilitychange-事件-如果没有在指定时间内离开浏览器-那就认定用户没有安装app-就跳转到指定的应用市场去安装或者直接跳转下载app的链接" aria-hidden="true">#</a> 然后进行推断假设：我设定一个时间段(3秒)，如果用户安装了指定的app，手机此时底部会弹出一个小窗 问用户是否打开app，如果打开后会离开浏览器，此时就会触发 “visibilitychange” 事件，如果没有在指定时间内离开浏览器 那就认定用户没有安装app，就跳转到指定的应用市场去安装或者直接跳转下载app的链接</h3><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> timer<span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">wake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;https://downv6.qq.com/qqweb/QQ_1/android_apk/Android_9.0.17_64_HB.apk&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;mqqwpa://im/chat?chat_type=wpa&amp;uin=xx&amp;version=1&amp;src_type=web&amp;web_src=http:://wpa.b.qq.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function c(o,l){return a(),s("div",null,i)}const d=n(e,[["render",c],["__file","wakeupApp.html.vue"]]);export{d as default};