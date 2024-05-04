import{_ as r,r as t,o as l,c as d,b as e,d as n,e as a,a as i}from"./app-c9408cad.js";const c={},o=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),u={href:"https://seata.apache.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://sca.aliyun.com/zh-cn/docs/2022.0.0.0-RC1/overview/version-explain",target:"_blank",rel:"noopener noreferrer"},p=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>下载好 seata 后解压进入 在 pom 中引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在配置文件中配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 事务组名称  </span>
<span class="token key attr-name">seata.tx-service-group</span><span class="token punctuation">=</span><span class="token value attr-value">train-group  </span>
<span class="token comment"># 事务组和seata集群做关联  </span>
<span class="token key attr-name">seata.service.vgroup-mapping.train-group</span><span class="token punctuation">=</span><span class="token value attr-value">default  </span>
<span class="token comment"># seata集群对应的机器  </span>
<span class="token key attr-name">seata.service.grouplist.default</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要事务的方法上添加 @GlobalTransactional 注解即可</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>`,7),m={href:"https://sca.aliyun.com/zh-cn/docs/2022.0.0.0/user-guide/seata/quick-start",target:"_blank",rel:"noopener noreferrer"},b=i(`<h3 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h3><p>进入seata conf文件夹，找到 application,yml文件并打开，配置seata config栏，将type 里面的file改为nacos(默认项目nacos为配置中心)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
  config<span class="token punctuation">:</span>
    <span class="token comment"># support: nacos, consul, apollo, zk, etcd3</span>
    type<span class="token punctuation">:</span> nacos
    nacos<span class="token punctuation">:</span>
      server<span class="token punctuation">-</span><span class="token key atrule">addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      namespace<span class="token punctuation">:</span> train
      group<span class="token punctuation">:</span> SEATA_GROUP
      username<span class="token punctuation">:</span> nacos
      password<span class="token punctuation">:</span> nacos
      context<span class="token punctuation">-</span><span class="token key atrule">path</span><span class="token punctuation">:</span>
      data<span class="token punctuation">-</span><span class="token key atrule">id</span><span class="token punctuation">:</span> seataServer.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册中心" tabindex="-1"><a class="header-anchor" href="#注册中心" aria-hidden="true">#</a> 注册中心</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>
	<span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token comment"># support: nacos, eureka, redis, zk, consul, etcd3, sofa</span>
    type<span class="token punctuation">:</span> nacos
    nacos<span class="token punctuation">:</span>
      application<span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
      server<span class="token punctuation">-</span><span class="token key atrule">addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      group<span class="token punctuation">:</span> SEATA_GROUP
      namespace<span class="token punctuation">:</span> train
      cluster<span class="token punctuation">:</span> default
      username<span class="token punctuation">:</span> nacos
      password<span class="token punctuation">:</span> nacos
      context<span class="token punctuation">-</span><span class="token key atrule">path</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何配置可以查看同级目录下的application.example.yml文件</p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>#For details about configuration items, see https://seata.io/zh-cn/docs/user/configurations.html
#Transport configuration, for client and server
transport.type=TCP
transport.server=NIO
transport.heartbeat=true
transport.enableTmClientBatchSendRequest=false
transport.enableRmClientBatchSendRequest=true
transport.enableTcServerBatchSendResponse=false
transport.rpcRmRequestTimeout=30000
transport.rpcTmRequestTimeout=30000
transport.rpcTcRequestTimeout=30000
transport.threadFactory.bossThreadPrefix=NettyBoss
transport.threadFactory.workerThreadPrefix=NettyServerNIOWorker
transport.threadFactory.serverExecutorThreadPrefix=NettyServerBizHandler
transport.threadFactory.shareBossWorker=false
transport.threadFactory.clientSelectorThreadPrefix=NettyClientSelector
transport.threadFactory.clientSelectorThreadSize=1
transport.threadFactory.clientWorkerThreadPrefix=NettyClientWorkerThread
transport.threadFactory.bossThreadSize=1
transport.threadFactory.workerThreadSize=default
transport.shutdown.wait=3
transport.serialization=seata
transport.compressor=none

#Transaction routing rules configuration, only for the client
service.vgroupMapping.default_tx_group=default
#If you use a registry, you can ignore it
service.default.grouplist=127.0.0.1:8091
service.enableDegrade=false
service.disableGlobalTransaction=false

#Transaction rule configuration, only for the client
client.rm.asyncCommitBufferLimit=10000
client.rm.lock.retryInterval=10
client.rm.lock.retryTimes=30
client.rm.lock.retryPolicyBranchRollbackOnConflict=true
client.rm.reportRetryCount=5
client.rm.tableMetaCheckEnable=true
client.rm.tableMetaCheckerInterval=60000
client.rm.sqlParserType=druid
client.rm.reportSuccessEnable=false
client.rm.sagaBranchRegisterEnable=false
client.rm.sagaJsonParser=fastjson
client.rm.tccActionInterceptorOrder=-2147482648
client.tm.commitRetryCount=5
client.tm.rollbackRetryCount=5
client.tm.defaultGlobalTransactionTimeout=60000
client.tm.degradeCheck=false
client.tm.degradeCheckAllowTimes=10
client.tm.degradeCheckPeriod=2000
client.tm.interceptorOrder=-2147482648
client.undo.dataValidation=true
client.undo.logSerialization=jackson
client.undo.onlyCareUpdateColumns=true
server.undo.logSaveDays=7
server.undo.logDeletePeriod=86400000
client.undo.logTable=undo_log
client.undo.compress.enable=true
client.undo.compress.type=zip
client.undo.compress.threshold=64k
#For TCC transaction mode
tcc.fence.logTableName=tcc_fence_log
tcc.fence.cleanPeriod=1h

#Log rule configuration, for client and server
log.exceptionRate=100

#Transaction storage configuration, only for the server. The file, db, and redis configuration values are optional.
store.mode=file
store.lock.mode=file
store.session.mode=file
#Used for password encryption
store.publicKey=

#If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`file\`, you can remove the configuration block.
store.file.dir=file_store/data
store.file.maxBranchSessionSize=16384
store.file.maxGlobalSessionSize=512
store.file.fileWriteBufferCacheSize=16384
store.file.flushDiskMode=async
store.file.sessionReloadReadSize=100

#These configurations are required if the \`store mode\` is \`db\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`db\`, you can remove the configuration block.
store.db.datasource=druid
store.db.dbType=mysql
store.db.driverClassName=com.mysql.jdbc.Driver
store.db.url=jdbc:mysql://127.0.0.1:3306/seata?useUnicode=true&amp;rewriteBatchedStatements=true
store.db.user=username
store.db.password=password
store.db.minConn=5
store.db.maxConn=30
store.db.globalTable=global_table
store.db.branchTable=branch_table
store.db.distributedLockTable=distributed_lock
store.db.queryLimit=100
store.db.lockTable=lock_table
store.db.maxWait=5000

#These configurations are required if the \`store mode\` is \`redis\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`redis\`, you can remove the configuration block.
store.redis.mode=single
store.redis.single.host=127.0.0.1
store.redis.single.port=6379
store.redis.sentinel.masterName=
store.redis.sentinel.sentinelHosts=
store.redis.sentinel.sentinelPassword=
store.redis.maxConn=10
store.redis.minConn=1
store.redis.maxTotal=100
store.redis.database=0
store.redis.password=
store.redis.queryLimit=100

#Transaction rule configuration, only for the server
server.recovery.committingRetryPeriod=1000
server.recovery.asynCommittingRetryPeriod=1000
server.recovery.rollbackingRetryPeriod=1000
server.recovery.timeoutRetryPeriod=1000
server.maxCommitRetryTimeout=-1
server.maxRollbackRetryTimeout=-1
server.rollbackRetryTimeoutUnlockEnable=false
server.distributedLockExpireTime=10000
server.xaerNotaRetryTimeout=60000
server.session.branchAsyncQueueSize=5000
server.session.enableBranchAsyncRemove=false
server.enableParallelRequestHandle=false

#Metrics configuration, only for the server
metrics.enabled=false
metrics.registryType=compact
metrics.exporterList=prometheus
metrics.exporterPrometheusPort=9898
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="seata-分布式事务的四种模式" tabindex="-1"><a class="header-anchor" href="#seata-分布式事务的四种模式" aria-hidden="true">#</a> Seata 分布式事务的四种模式</h2><p>AT模式：默认，简单，需要增加undo_log表，生成反向SQL，性能高 回滚后，原来没数据的，现在还是没数据</p><p>TCC模式：try confirm/cancel，三个阶段的代码都得自己实现，Seata只负责调度 对业务代码侵入较强，必要时可能还要修改数据库</p><p>SAGA模式：长事务解决方案，需要程序员自己编写两阶段代码 基于状态机来实现的，需要一个JSON文件，可异步执行</p><p>XA模式：XA协议是由 X/Open 组织提出的分布式事务处理规范，基于数据库的XA协议来实现2PC又称XA方案，适用于强一致性的场景，比如金融、银行等 需要数据库本身支持XA协议，可以跨数据库</p>`,13);function k(h,g){const s=t("ExternalLinkIcon");return l(),d("div",null,[o,e("p",null,[e("a",u,[n("官网"),a(s)]),n(" 下载时，请注意spring boot和spring cloud alibaba的版本 "),e("a",v,[n("版本支持"),a(s)]),n(" 主要介绍注册中心和配置中心都是nacos的情况")]),p,e("p",null,[e("a",m,[n("配置"),a(s)])]),b])}const y=r(c,[["render",k],["__file","seataInstall.html.vue"]]);export{y as default};
