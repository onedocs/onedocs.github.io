(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{437:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("hello，小伙伴们好久不见！前面我们说了 redis 中的基本数据类型，本文我们来看看 redis 中的发布订阅和事务，因为这两个都比较简单，因此我放在一篇文章中来讲。")]),e._v(" "),r("p",[e._v("本文是 Redis 系列的第七篇文章，了解前面的文章有助于更好的理解本文：")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("1."),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/NCm3zNGIDVMnlykeOiaH7Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 上安装 Redis"),r("OutboundLink")],1),r("br"),e._v("\n2."),r("a",{attrs:{href:"http://mp.weixin.qq.com/s/jNSN8YO4jZbyjKR5C4in_w",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 中的五种数据类型简介"),r("OutboundLink")],1),r("br"),e._v("\n3."),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/Svvgwo_a92vNdCSazbzKRQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 字符串 (STRING) 介绍"),r("OutboundLink")],1),r("br"),e._v("\n4."),r("a",{attrs:{href:"http://mp.weixin.qq.com/s/OGUnTBmdErvZ8r_yoyg_rQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 字符串 (STRING) 中BIT相关命令"),r("OutboundLink")],1),r("br"),e._v("\n5."),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/C07AJhRk8AvPeKxSUq8lGA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 列表与集合"),r("OutboundLink")],1),r("br"),e._v("\n6."),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/9KlDOJlY7ZEoLEGUyDNxRg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 散列与有序集合"),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"发布订阅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[e._v("#")]),e._v(" 发布订阅")]),e._v(" "),r("p",[e._v("redis 的发布订阅系统有点类似于我们生活中的电台，电台可以在某一个频率上发送广播，而我们可以接收任何一个频率的广播，Android 中的 broadcast 也和这类似。")]),e._v(" "),r("p",[e._v("订阅消息的方式如下:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('127.0.0.1:6379> SUBSCRIBE c1 c2 c3\nReading messages... (press Ctrl-C to quit)\n1) "subscribe"\n2) "c1"\n3) (integer) 1\n1) "subscribe"\n2) "c2"\n3) (integer) 2\n1) "subscribe"\n2) "c3"\n3) (integer) 3\n')])])]),r("p",[e._v("这个表示接收 c1，c2，c3 三个频道传来的消息，发送消息的方式如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('127.0.0.1:6379> PUBLISH c1 "hello redis!"\n(integer) 1\n')])])]),r("p",[e._v("当 c1 这个频道上有消息发出时，此时在消息订阅控制台可以看到如下输出：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('1) "message"\n2) "c1"\n3) "hello redis!"\n')])])]),r("p",[e._v("在 redis 中，我们也可以使用模式匹配订阅，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('127.0.0.1:6379> PSUBSCRIBE c*\nReading messages... (press Ctrl-C to quit)\n1) "psubscribe"\n2) "c*"\n3) (integer) 1\n')])])]),r("p",[e._v("此时可以接收到所有以 c 开头的频道发来的消息。")]),e._v(" "),r("h3",{attrs:{id:"tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" tips")]),e._v(" "),r("p",[e._v("redis 中的发布订阅系统在某些场景下还是非常好用的，但是也有一些问题需要注意：由于网络在传输过程中可能会遭遇断线等意外情况，断线后需要进行重连，然而这会导致断线期间的数据丢失。")]),e._v(" "),r("h2",{attrs:{id:"事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),r("p",[e._v("既然 redis 是一种 NoSQL 数据库，那它当然也有事务的功能，不过这里的事务和我们关系型数据库中的事务有一点点差异。")]),e._v(" "),r("p",[e._v("redis 中事务的用法非常简单，我们通过 MULTI 命令开启一个事务，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("127.0.0.1:6379> MULTI\nOK\n")])])]),r("p",[e._v("在 MULTI 命令执行之后，我们可以继续发送命令去执行，此时的命令不会被立马执行，而是放在一个队列中，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("127.0.0.1:6379> set k1 v1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> set k3 v3\nQUEUED\n")])])]),r("p",[e._v("当所有的命令都输入完成后，我们可以通过 EXEC 命令发起执行，也可以通过 DISCARD 命令清空队列，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("127.0.0.1:6379> EXEC\n1) OK\n2) OK\n3) OK\n")])])]),r("h3",{attrs:{id:"事务中的异常情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务中的异常情况"}},[e._v("#")]),e._v(" 事务中的异常情况")]),e._v(" "),r("p",[e._v("redis 中事务的异常情况总的来说分为两类：")]),e._v(" "),r("ol",[r("li",[e._v("进入队列之前就能发现的错误，比如命令输错；")]),e._v(" "),r("li",[e._v("执行 EXEC 之后才能发现的错误，比如给一个非数字字符加 1 ；")])]),e._v(" "),r("p",[e._v("那么对于这两种不同的异常，redis 中有不同的处理策略。对于第一种错误，服务器会对命令入队失败的情况进行记录，并在客户端调用 EXEC 命令时，拒绝执行并自动放弃这个事务（这个是2.6.5之后的版本做法，之前的版本做法小伙伴可以参考官方文档）。如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('127.0.0.1:6379> MULTI\nOK\n127.0.0.1:6379> set kv1 v1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> set k3 v3 3 3\nQUEUED\n127.0.0.1:6379> set k4 v4\nQUEUED\n127.0.0.1:6379> EXEC\n1) OK\n2) OK\n3) (error) ERR syntax error\n4) OK\n127.0.0.1:6379> keys *\n1) "k4"\n2) "k2"\n3) "kv1"\n')])])]),r("p",[e._v("而对于第二种情况，redis 并没有对它们进行特别处理， 即使事务中有某个/某些命令在执行时产生了错误， 事务中的其他命令仍然会继续执行。如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('127.0.0.1:6379> MULTI\nOK\n127.0.0.1:6379> set k1 vv\nQUEUED\n127.0.0.1:6379> INCR k1\nQUEUED\n127.0.0.1:6379> EXEC\n1) OK\n2) (error) ERR value is not an integer or out of range\n127.0.0.1:6379> GET k1\n"vv"\n')])])]),r("p",[e._v("不同于关系型数据库，redis 中的事务出错时没有回滚，对此，官方的解释如下：")]),e._v(" "),r("blockquote",[r("p",[e._v("Redis 命令只会因为错误的语法而失败（并且这些问题不能在入队时发现），或是命令用在了错误类型的键上面：这也就是说，从实用性的角度来说，失败的命令是由编程错误造成的，而这些错误应该在开发的过程中被发现，而不应该出现在生产环境中。因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。")])]),e._v(" "),r("h3",{attrs:{id:"watch-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-命令"}},[e._v("#")]),e._v(" WATCH 命令")]),e._v(" "),r("p",[e._v("事务中的 WATCH 命令可以用来监控一个 key，通过这种监控，我们可以为 redis 事务提供(CAS)行为。 如果有至少一个被 WATCH 监视的键在 EXEC 执行之前被修改了，那么整个事务都会被取消，EXEC 返回 nil-reply 来表示事务已经失败。如下：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://www.javaboy.org/images/redis/p297.png",alt:""}})]),e._v(" "),r("p",[e._v("通过 unwatch 命令，可以取消对一个 key 的监控，如下：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://www.javaboy.org/images/redis/p298.png",alt:""}})]),e._v(" "),r("p",[e._v("OK,发布订阅和事务我们就介绍这么多，更多命令小伙伴们可以参考"),r("a",{attrs:{href:"http://www.redis.cn/commands.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),r("OutboundLink")],1),e._v("。小伙伴在看官方文档时，有什么问题欢迎留言讨论。")])])}),[],!1,null,null,null);t.default=a.exports}}]);