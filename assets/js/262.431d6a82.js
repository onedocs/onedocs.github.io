(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{518:function(_,v,e){"use strict";e.r(v);var t=e(42),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("随着 Spring5 的推出，WebFlux 被置于越来越重要的位置，无论是内在的学习驱动，还是公司的项目要求，很多小伙伴们都开始关注 WebFlux 了，也有很多小伙伴在微信上私我能不能整一套 WebFlux 教程？")]),_._v(" "),e("p",[_._v("整当然是能整，不过最近忙是真的忙，松哥最近开始带团队了，有很多需要和其他部门对接的事情，晚上十一点还在出方案。。。写公号的时间被严重压缩了，但是不管怎么样，该写还是要写，不仅仅是对小伙伴们的承诺，也是对自己的承诺。")]),_._v(" "),e("p",[_._v("想来想去，这次就整 WebFlux 吧，有小伙伴已经催了快一年了，该搞了。")]),_._v(" "),e("p",[_._v("今天我们就先来介绍下响应式系统，毕竟不了解响应式系统，那学习 WebFlux 干嘛？")]),_._v(" "),e("h2",{attrs:{id:"_1-什么是响应式系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是响应式系统"}},[_._v("#")]),_._v(" 1.什么是响应式系统")]),_._v(" "),e("p",[_._v("响应式系统的目标是灵敏度高，系统稳健一直有回复，松耦合和可扩展。"),e("strong",[_._v("响应式系统是一种架构")]),_._v("，可以应用于任何地方，无论是一个小小的博客网页，还是复杂的网购系统，都可以使用响应式架构。")]),_._v(" "),e("p",[_._v("一般来说，响应式系统有四个显著的特点：")]),_._v(" "),e("ul",[e("li",[_._v("即时响应（responsive）")]),_._v(" "),e("li",[_._v("回弹性（resilience）")]),_._v(" "),e("li",[_._v("弹性（elastic）")]),_._v(" "),e("li",[_._v("消息驱动（message driven）")])]),_._v(" "),e("p",[_._v("下面这张图很好的描述了这几者之间的关系：")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://img.itboyhub.com/2021/02/20210420214856.png",alt:""}})]),_._v(" "),e("p",[_._v("消息驱动是手段，弹性和回弹性是形式，最终的即时响应就是它的价值。")]),_._v(" "),e("p",[_._v("接下来我们来逐个介绍这四种特性。")]),_._v(" "),e("h2",{attrs:{id:"_2-四大特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-四大特点"}},[_._v("#")]),_._v(" 2.四大特点")]),_._v(" "),e("h3",{attrs:{id:"_2-1-即时响应（responsive）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-即时响应（responsive）"}},[_._v("#")]),_._v(" 2.1 即时响应（responsive）")]),_._v(" "),e("p",[_._v("即时响应的特点就是一个字，快！")]),_._v(" "),e("p",[_._v("现在 4G 的普及，百兆千兆带宽的使用，CPU 计算能力的提高，都在降低用户对于一个系统的耐心，一个网页，5s 没加载完，用户已经觉得体验很差了，30s 还没加载出来，那你可能失去这个用户。")]),_._v(" "),e("p",[_._v("所以我们需要构建一个健壮的、能够快速响应的即时响应系统，特别是在一些高并发的场景下，响应延迟还能保持在合理范围内，这才是最重要的。")]),_._v(" "),e("p",[_._v("要实现这一目标，要用到很多具体的技术，例如异步加载、预加载等。另外还涉及到弹性（elastic）与回弹性（resilience）这样一些原则性问题。")]),_._v(" "),e("h3",{attrs:{id:"_2-2-弹性（elastic）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-弹性（elastic）"}},[_._v("#")]),_._v(" 2.2 弹性（elastic）")]),_._v(" "),e("p",[_._v("弹性其实就是指系统随时可以动态扩展。")]),_._v(" "),e("p",[_._v("举个例子，一个电商网站，平时活跃用户有限，所需要的服务器数量足够支撑日常服务即可，没有必要多买，毕竟都是要花钱的。一旦遇上大促，系统的流量在短时间内爆发出来，这个时候就需要能够随时随地方便的为系统扩容，这就是系统的弹性。")]),_._v(" "),e("p",[_._v("松哥在之前的文章中和大家聊过 Nginx 负载均衡，这其实就是一种扩容的手段。现在很多中小公司可能回采用云服务，如果使用云服务，一般都可以非常方便的实现动态扩容。")]),_._v(" "),e("h3",{attrs:{id:"_2-3-回弹性（resilience）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-回弹性（resilience）"}},[_._v("#")]),_._v(" 2.3 回弹性（resilience）")]),_._v(" "),e("p",[_._v("回弹性就是指当系统遭遇到失败时，依然能够对外提供服务。松哥在之前和大家分享 Spring Cloud 时，Hystrix 的功能之一就是容错，当一个服务崩掉的时候，不会拖累到其他服务。通过服务的降级、隔离等手段，可以保证回弹性。回弹性还会要求在系统出错的时候，能够自动进行重试。")]),_._v(" "),e("p",[_._v("其实大家看回弹性这个单词 resilience，不知道有没有想起来在 Spring Cloud 体系中，用来替代 Hystrix 的工具就叫做 resilience4j，所以如果你了解 Hystrix 的功能，大概就知道什么是回弹性。不了解 Spring Cloud 的话，可以看看这个网站：www.itboyhub.com。")]),_._v(" "),e("h3",{attrs:{id:"_2-4-消息驱动（message-driven）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-消息驱动（message-driven）"}},[_._v("#")]),_._v(" 2.4 消息驱动（message driven）")]),_._v(" "),e("p",[_._v("消息驱动是具体的实现手段。")]),_._v(" "),e("p",[_._v("在分布式系统中，我们要解耦、隔离服务、提高可伸缩性，为了达成这一目标，消息驱动是最佳选择。因为只有消息驱动能够同时满足即时响应、弹性以及回弹性这些要求。")]),_._v(" "),e("p",[_._v("有的小伙伴在学习微服务的时候，可能会看到一个名词，就叫做消息驱动的微服务。")]),_._v(" "),e("p",[_._v("在松哥的微人事中，有一个邮件发送的功能，就用到了消息驱动，发件人只需要把邮件内容扔到消息中间件中即可，剩余的事情都不用管了，邮件服务器会自动从消息中间件中读取邮件信息然后将邮件发送出去，发送失败的事务、回滚等等操作，都由邮件服务器自行处理，发送方只管把消息扔出去就行了，这就很好的实现了解耦。")]),_._v(" "),e("p",[_._v("这就是我们常说的响应式系统的四大特点。")]),_._v(" "),e("h2",{attrs:{id:"_3-身边的响应式系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-身边的响应式系统"}},[_._v("#")]),_._v(" 3.身边的响应式系统")]),_._v(" "),e("p",[_._v("响应式系统其实离我们并不远，不是说用了 WebFlux、用了 Gateway、用了异步 Servlet 就是响应式系统，这其实没有必然联系，上面那些都是实现响应式系统的一个具体方案，具体技术而已。")]),_._v(" "),e("p",[_._v("举一个很简单的消息驱动微服务的案例，如下图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://zsrimg.ikafan.com/file_images/article/201910/20191015105956901.png?201991511043",alt:""}})]),_._v(" "),e("p",[_._v("引入了消息中间件 RabbitMQ/Kafka 之后，能够很好的实现 A 服务和 B 服务的解耦，同时利用 RabbitMQ/Kafka 自带的消息消费失败重试的功能也能很好的提高系统的容错性和可靠性。")]),_._v(" "),e("p",[_._v("松哥之前专门录过提高消息中间件可靠性的视频，感兴趣的小伙伴可以看看：")]),_._v(" "),e("p",[_._v("提高可靠性：\n"),_._v("\n处理幂等性：\n")]),_._v(" "),e("h2",{attrs:{id:"_4-小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-小结"}},[_._v("#")]),_._v(" 4.小结")]),_._v(" "),e("p",[_._v("总之，响应式系统是一个架构层面的东西，它有四个基本特点，它还有很多具体的实现手段，这些具体的实现手段松哥将在未来的文章中和大家逐一进行介绍。好啦，本文作为一个引子，就先和大家聊这么多，关于响应式系统，如果大家有自己的理解或者实践经验，欢迎投稿哦。")])])}),[],!1,null,null,null);v.default=s.exports}}]);