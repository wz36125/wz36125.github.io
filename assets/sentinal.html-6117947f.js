import{_ as p,r as o,o as l,c,b as n,d as s,e,a as t}from"./app-c9408cad.js";const r={},u=n("h2",{id:"启动控制台",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动控制台","aria-hidden":"true"},"#"),s(" 启动控制台")],-1),i=n("h3",{id:"获取-sentinel-控制台",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取-sentinel-控制台","aria-hidden":"true"},"#"),s(" 获取 Sentinel 控制台")],-1),d={href:"https://github.com/alibaba/Sentinel/releases",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/alibaba/Sentinel/tree/master/sentinel-dashboard",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[s("使用以下命令将代码打包成一个 fat jar: "),n("code",null,"mvn clean package")],-1),m=t(`<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><blockquote><p><strong>注意</strong>：启动 Sentinel 控制台需要 JDK 版本为 1.8 及以上版本。</p></blockquote><p>使用如下命令启动控制台：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Dserver.port</span><span class="token operator">=</span><span class="token number">18080</span> <span class="token parameter variable">-Dcsp.sentinel.dashboard.server</span><span class="token operator">=</span>localhost:18080 <span class="token parameter variable">-Dproject.name</span><span class="token operator">=</span>sentinel-dashboard <span class="token parameter variable">-jar</span> sentinel-dashboard-1.8.6.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>-Dserver.port=18080</code> 用于指定 Sentinel 控制台端口为 <code>18080</code>。</p>`,5),b=n("strong",null,"登录",-1),q=n("code",null,"sentinel",-1),g={href:"https://sentinelguard.io/zh-cn/docs/dashboard.html#%E9%89%B4%E6%9D%83",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Sentinel",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权" aria-hidden="true">#</a> 鉴权</h3><p>用户可以通过如下参数进行配置：</p><ul><li><code>-Dsentinel.dashboard.auth.username=sentinel</code> 用于指定控制台的登录用户名为 <code>sentinel</code>；</li><li><code>-Dsentinel.dashboard.auth.password=123456</code> 用于指定控制台的登录密码为 <code>123456</code>；如果省略这两个参数，默认用户和密码均为 <code>sentinel</code>；</li><li><code>-Dserver.servlet.session.timeout=7200</code> 用于指定 Spring Boot 服务端 session 的过期时间，如 <code>7200</code> 表示 7200 秒；<code>60m</code> 表示 60 分钟，默认为 30 分钟； 同样也可以直接在 Spring properties 文件中进行配置。</li></ul><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><p>当设计的资源触发了限流才能在控台中查看到数据 <strong>实时监控：一段时间后会自动清除</strong></p><h3 id="流控规则" tabindex="-1"><a class="header-anchor" href="#流控规则" aria-hidden="true">#</a> 流控规则</h3><p>实时动态对资源或接口添加规则，但注意单纯的配置不会持久化，实例重启规则消失</p><h4 id="流控效果" tabindex="-1"><a class="header-anchor" href="#流控效果" aria-hidden="true">#</a> 流控效果</h4><p><strong>快速失败：根据单机阈值一些请求成功，一些请求失败</strong></p><p><strong>Warm Up：预热，初始值为 阈值/3，经过多少预热时长才逐渐升至设定的QPS阈值，比如阈值为100，时长是10秒，则从33开始经过10秒上升到100；此效果适用于一直处于大流量的接口，特别是程序刚启动的时候，如果没有预热而流量达到阈值程序可能会大量的异常或挂掉</strong></p><p><strong>排队等待：需要填写超时时间，假设超时时间是500，阈值是10，现在有100个请求，此时会有90个请求在等待，等待时间500毫秒，如果500毫秒内当前实例还能接收阈值请求则继续执行，如果接收不完超过500毫秒的请求全部拒绝</strong></p><h4 id="流控模式" tabindex="-1"><a class="header-anchor" href="#流控模式" aria-hidden="true">#</a> 流控模式</h4><p><strong>直接：</strong><strong>关联：对目标的限流是有条件的，需要关联的资源限流时，目标才会限流</strong><strong>链路：输入需要限流的入口资源，假设有两个接口都会调用同一个资源(Service)，但我只限制某个接口(Controller)进来的流量，此时就可以使用链路；需要配置以下信息</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 流控模式是链路时，必须关闭这个配置，默认是true，为true时可以在控台-簇点链路界面看到所有请求都在一个链路下面  </span>
<span class="token key attr-name">spring.cloud.sentinel.web-context-unify</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="熔断规则" tabindex="-1"><a class="header-anchor" href="#熔断规则" aria-hidden="true">#</a> 熔断规则</h3><p>注意配置应和其它配置做出区别</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.sentinel.datasource.degrade.nacos.ruleType</span><span class="token punctuation">=</span><span class="token value attr-value">degrade  </span>
  
<span class="token comment"># sentinel默认不监控feign，需改成true，在簇点链路界面会显示资源：</span>
<span class="token key attr-name">feign.sentinel.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true  </span>
<span class="token comment"># 上面改成true后，启动会报注入失败，需改成懒加载  </span>
<span class="token key attr-name">spring.cloud.openfeign.lazy-attributes-resolution</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="熔断策略" tabindex="-1"><a class="header-anchor" href="#熔断策略" aria-hidden="true">#</a> 熔断策略</h4><ol><li><p>慢调用比例：一定时间内总请求达到一定次数，<strong>超时</strong>请求达到一定比例。</p></li><li><p>异常比例：一定时间内总请求达到一定次数，<strong>异常</strong>请求达到一定比例。</p></li><li><p>异常数：一定时间内总请求达到一定次数，<strong>异常</strong>请求达到一定次数。假设规定200个请求，3个异常数，熔断时长3秒，此时满足请求数且接口异常个数大于等于3，此时这个接口熔断3秒</p></li></ol><p>熔断参数说明：</p><ul><li><p>最大rt：最大超时时间，超过这个时间就记此次请求为超时</p></li><li><p>统计时长：采样的请求来自与过去的某一段时间，比如1秒，那么统计时长就是1秒。</p></li><li><p>比例阈值：如果统计时长内，超过最大rt的请求时的比例达到了比例阈值，那么就达到了触发熔断的条件。</p></li><li><p>最小请求数：统计时长内，请求数达到一定数值才允许采取熔断策略。</p></li><li><p>熔断时长：采取熔断后，拒绝请求的时长。</p></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 慢调用比例</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;GET:http://business/business/hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">201</span><span class="token punctuation">,</span>
<span class="token property">&quot;timeWindow&quot;</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
<span class="token property">&quot;minRequestAmount&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span>
<span class="token property">&quot;statIntervalMs&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token property">&quot;slowRatioThreshold&quot;</span><span class="token operator">:</span><span class="token number">0.3</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 异常比例</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;GET:http://business/business/hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">0.3</span><span class="token punctuation">,</span>
<span class="token property">&quot;timeWindow&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
<span class="token property">&quot;minRequestAmount&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span>
<span class="token property">&quot;statIntervalMs&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 异常数</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;GET:http://business/business/hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
<span class="token property">&quot;timeWindow&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
<span class="token property">&quot;minRequestAmount&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span>
<span class="token property">&quot;statIntervalMs&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.编写降级处理类，方法名、参数、返回值要和Feign方法中的一致 2.在Feign方法上的注解@FeignClient上Fallback参数，值是上面的降级处理类 3.当熔断或者Feign调用出错时，就会调用降级处理方法</p><h2 id="与nacos组合实现限流规则持久化" tabindex="-1"><a class="header-anchor" href="#与nacos组合实现限流规则持久化" aria-hidden="true">#</a> 与nacos组合实现限流规则持久化</h2><p>引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 限流熔断 --&gt;</span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>  
  
<span class="token comment">&lt;!-- sentinel + nacos --&gt;</span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-datasource-nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># sentinel控台：https://github.com/alibaba/spring-cloud-alibaba/wiki/Sentinel  </span>
<span class="token key attr-name">spring.cloud.sentinel.transport.port</span><span class="token punctuation">=</span><span class="token value attr-value">8719  </span>
<span class="token key attr-name">spring.cloud.sentinel.transport.dashboard</span><span class="token punctuation">=</span><span class="token value attr-value">localhost:18080  </span>
<span class="token comment"># sentinel + nacos  </span>
<span class="token key attr-name">spring.cloud.sentinel.datasource.nacos.nacos.serverAddr</span><span class="token punctuation">=</span><span class="token value attr-value">localhost:8848  </span>
<span class="token key attr-name">spring.cloud.sentinel.datasource.nacos.nacos.namespace</span><span class="token punctuation">=</span><span class="token value attr-value">xxx  </span>
<span class="token key attr-name">spring.cloud.sentinel.datasource.nacos.nacos.groupId</span><span class="token punctuation">=</span><span class="token value attr-value">xxx_GROUP  </span>
<span class="token key attr-name">spring.cloud.sentinel.datasource.nacos.nacos.dataId</span><span class="token punctuation">=</span><span class="token value attr-value">sentinel  </span>
<span class="token key attr-name">spring.cloud.sentinel.datasource.nacos.nacos.ruleType</span><span class="token punctuation">=</span><span class="token value attr-value">flow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在接口上添加注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;资源名&quot;</span><span class="token punctuation">,</span> blockHandler <span class="token operator">=</span> <span class="token string">&quot;触发限流时要调用的方法&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入nacos控台，创建配置，注意配置内容的格式为JSON</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 快速失败</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;资源名&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 接口上写的注解的value值</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 针对来源</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 阈值类型</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">//单机阈值</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 流控模式</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 流控效果</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">// 是否集群</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 预热</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;资源名&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 接口上写的注解的value值</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 针对来源</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 阈值类型</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">//单机阈值</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 流控模式</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 流控效果</span>
<span class="token property">&quot;warmUpPeriodSec&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 预热时长</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">// 是否集群</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">//排队等待</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;资源名&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 接口上写的注解的value值</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 针对来源</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 阈值类型</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">//单机阈值</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 流控模式</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 流控效果</span>
<span class="token property">&quot;maxQueueingTimeMs&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 等待时间</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">// 是否集群</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;maxQueueingTimeMs&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 关联 对目标的限流是有条件的，需要关联的资源限流时，目标才会限流</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;关联资源名&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;资源名&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
“refResource”<span class="token operator">:</span> <span class="token string">&quot;关联资源名&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello1&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">&quot;refResource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 链路</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token property">&quot;resource&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello2&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;limitApp&quot;</span><span class="token operator">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;grade&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;refResource&quot;</span><span class="token operator">:</span><span class="token string">&quot;/hello1&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;controlBehavior&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;clusterMode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用接口触发限流， 返回 sentinel 找到 流控规则 就可以看到在 nacos 写的配置已生效</p>`,33);function f(_,x){const a=o("ExternalLinkIcon");return l(),c("div",null,[u,i,n("p",null,[s("可以从 "),n("a",d,[s("release 页面"),e(a)]),s(" 下载最新版本的控制台 jar 包。 也可以从最新版本的源码自行构建 Sentinel 控制台：")]),n("ul",null,[n("li",null,[s("下载 "),n("a",k,[s("控制台"),e(a)]),s(" 工程")]),v]),m,n("p",null,[s("从 Sentinel 1.6.0 起，Sentinel 控制台引入基本的"),b,s("功能，默认用户名和密码都是 "),q,s("。可以参考 "),n("a",g,[s("鉴权模块文档"),e(a)]),s(" 配置用户名和密码。")]),n("blockquote",null,[n("p",null,[s("注：若应用为 Spring Boot 或 Spring Cloud 应用，可以通过 Spring 配置文件来指定配置，详情请参考 "),n("a",h,[s("Spring Cloud Alibaba Sentinel 文档"),e(a)]),s("。")])]),y])}const j=p(r,[["render",f],["__file","sentinal.html.vue"]]);export{j as default};