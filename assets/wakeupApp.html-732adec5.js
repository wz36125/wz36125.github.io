const e=JSON.parse('{"key":"v-c5ef5bc6","path":"/blogs/frontEnd/wakeupApp.html","title":"随记-H5页面如何唤起App","lang":"en-US","frontmatter":{"title":"随记-H5页面如何唤起App","date":"2023-03-20T00:00:00.000Z","tags":["JavaScript"],"categories":["前端"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"在浏览器中，是没有办法知道用户是否安装了某个app，可以通过 URL Scheme 调用底层接口跳转","slug":"在浏览器中-是没有办法知道用户是否安装了某个app-可以通过-url-scheme-调用底层接口跳转","link":"#在浏览器中-是没有办法知道用户是否安装了某个app-可以通过-url-scheme-调用底层接口跳转","children":[]},{"level":3,"title":"常用APP的 URL Scheme","slug":"常用app的-url-scheme","link":"#常用app的-url-scheme","children":[]},{"level":3,"title":"URL Scheme 语法","slug":"url-scheme-语法","link":"#url-scheme-语法","children":[]},{"level":3,"title":"然后进行推断假设：我设定一个时间段(3秒)，如果用户安装了指定的app，手机此时底部会弹出一个小窗 问用户是否打开app，如果打开后会离开浏览器，此时就会触发 “visibilitychange” 事件，如果没有在指定时间内离开浏览器 那就认定用户没有安装app，就跳转到指定的应用市场去安装或者直接跳转下载app的链接","slug":"然后进行推断假设-我设定一个时间段-3秒-如果用户安装了指定的app-手机此时底部会弹出一个小窗-问用户是否打开app-如果打开后会离开浏览器-此时就会触发-visibilitychange-事件-如果没有在指定时间内离开浏览器-那就认定用户没有安装app-就跳转到指定的应用市场去安装或者直接跳转下载app的链接","link":"#然后进行推断假设-我设定一个时间段-3秒-如果用户安装了指定的app-手机此时底部会弹出一个小窗-问用户是否打开app-如果打开后会离开浏览器-此时就会触发-visibilitychange-事件-如果没有在指定时间内离开浏览器-那就认定用户没有安装app-就跳转到指定的应用市场去安装或者直接跳转下载app的链接","children":[]}]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1711169548000,"updatedTime":1713098998000,"contributors":[{"name":"EngJ.K","email":"717179175@qq.com","commits":2}]},"filePathRelative":"blogs/frontEnd/wakeupApp.md"}');export{e as data};