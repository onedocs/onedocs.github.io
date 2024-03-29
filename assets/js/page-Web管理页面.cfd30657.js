(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{609:function(v,_,t){"use strict";t.r(_);var i=t(1),a=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("[TOC]")]),v._v(" "),t("p",[v._v("RabbitMQ 的 web 管理页面相信很多小伙伴都用过，随便点一下估计也都知道啥意思，不过本着精益求精的思想，松哥还是想和大家捋一捋这个管理页面的各个细节。")]),v._v(" "),t("h2",{attrs:{id:"_1-概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-概览"}},[v._v("#")]),v._v(" 1. 概览")]),v._v(" "),t("p",[v._v("首先，这个 Web 管理页面大概就像下图这样：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117193630.png",alt:""}})]),v._v(" "),t("p",[v._v("首先一共有六个选项卡：")]),v._v(" "),t("ol",[t("li",[v._v("Overview：这里可以概览 RabbitMQ 的整体情况，如果是集群，也可以查看集群中各个节点的情况。包括 RabbitMQ 的端口映射信息等，都可以在这个选项卡中查看。")]),v._v(" "),t("li",[v._v("Connections：这个选项卡中是连接上 RabbitMQ 的生产者和消费者的情况。")]),v._v(" "),t("li",[v._v("Channels：这里展示的是“通道”信息，关于“通道”和“连接”的关系，松哥在后文再和大家详细介绍。")]),v._v(" "),t("li",[v._v("Exchange：这里展示所有的交换机信息。")]),v._v(" "),t("li",[v._v("Queue：这里展示所有的队列信息。")]),v._v(" "),t("li",[v._v("Admin：这里展示所有的用户信息。")])]),v._v(" "),t("p",[v._v("右上角是页面刷新的时间，默认是 5 秒刷新一次，展示的是所有的 Virtual host。")]),v._v(" "),t("p",[v._v("这是整个管理页面的一个大致情况，接下来我们来逐个介绍。")]),v._v(" "),t("h2",{attrs:{id:"_2-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-overview"}},[v._v("#")]),v._v(" 2. Overview")]),v._v(" "),t("p",[v._v("Overview 中分了如下一些功能模块：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117195222.png",alt:""}})]),v._v(" "),t("p",[v._v("分别是：")]),v._v(" "),t("p",[t("strong",[v._v("Totals：")])]),v._v(" "),t("p",[v._v("Totals 里面有 准备消费的消息数、待确认的消息数、消息总数以及消息的各种处理速率（发送速率、确认速率、写入硬盘速率等等）。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117200550.png",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("Nodes：")])]),v._v(" "),t("p",[v._v("Nodes 其实就是支撑 RabbitMQ 运行的一些机器，相当于集群的节点。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117201007.png",alt:""}})]),v._v(" "),t("p",[v._v("点击每个节点，可以查看节点的详细信息。")]),v._v(" "),t("p",[t("strong",[v._v("Churn statistics：")])]),v._v(" "),t("p",[v._v("这个不好翻译，里边展示的是 Connection、Channel 以及 Queue 的创建/关闭速率。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117201532.png",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("Ports and contexts：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117201727.png",alt:""}})]),v._v(" "),t("p",[v._v("这个里边展示了端口的映射信息以及 Web 的上下文信息。")]),v._v(" "),t("ul",[t("li",[v._v("5672 是 RabbitMQ 通信端口。")]),v._v(" "),t("li",[v._v("15672 是 Web 管理页面端口。")]),v._v(" "),t("li",[v._v("25672 是集群通信端口。")])]),v._v(" "),t("p",[t("strong",[v._v("Export definitions")]),v._v(" && "),t("strong",[v._v("Import definitions：")])]),v._v(" "),t("p",[v._v("最后面这两个可以导入导出当前实例的一些配置信息：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117201921.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"_3-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-connections"}},[v._v("#")]),v._v(" 3. Connections")]),v._v(" "),t("p",[v._v("这里主要展示的是当前连接上 RabbitMQ 的信息，无论是消息生产者还是消息消费者，只要连接上来了这里都会显示出来。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117202318.png",alt:""}})]),v._v(" "),t("p",[v._v("注意协议中的 AMQP 0-9-1 指的是 AMQP 协议的版本号。")]),v._v(" "),t("p",[v._v("其他属性含义如下：")]),v._v(" "),t("ul",[t("li",[v._v("User name：当前连接使用的用户名。")]),v._v(" "),t("li",[v._v("State：当前连接的状态，running 表示运行中；idle 表示空闲。")]),v._v(" "),t("li",[v._v("SSL/TLS：表示是否使用 ssl 进行连接。")]),v._v(" "),t("li",[v._v("Channels：当前连接创建的通道总数。")]),v._v(" "),t("li",[v._v("From client：每秒发出的数据包。")]),v._v(" "),t("li",[v._v("To client：每秒收到的数据包。")])]),v._v(" "),t("p",[v._v("点击连接名称可以查看每一个连接的详情。")]),v._v(" "),t("p",[v._v("在详情中可以查看每一个连接的通道数以及其他详细信息，也可以强制关闭一个连接。")]),v._v(" "),t("h2",{attrs:{id:"_4-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-channels"}},[v._v("#")]),v._v(" 4. Channels")]),v._v(" "),t("p",[v._v("这个地方展示的是通道的信息：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117215823.png",alt:""}})]),v._v(" "),t("p",[v._v("那么什么是通道呢？")]),v._v(" "),t("p",[v._v("一个连接（IP）可以有多个通道，如上图，一共是两个连接，但是一共有 12 个通道。")]),v._v(" "),t("p",[v._v("一个连接可以有多个通道，这个多个通道通过多线程实现，一般情况下，我们在通道中创建队列、交换机等。")]),v._v(" "),t("p",[v._v("生产者的通道一般会立马关闭；消费者是一直监听的，通道几乎是会一直存在。")]),v._v(" "),t("p",[v._v("上面各项参数含义分别如下：")]),v._v(" "),t("ul",[t("li",[v._v("Channel：通道名称。")]),v._v(" "),t("li",[v._v("User name：该通道登录使用的用户名。")]),v._v(" "),t("li",[v._v("Model：通道确认模式，C 表示 confirm；T 表示事务。")]),v._v(" "),t("li",[v._v("State：通道当前的状态，running 表示运行中；idle 表示空闲。")]),v._v(" "),t("li",[v._v("Unconfirmed：待确认的消息总数。")]),v._v(" "),t("li",[v._v("Prefetch：Prefetch 表示每个消费者最大的能承受的未确认消息数目，简单来说就是用来指定一个消费者一次可以从 RabbitMQ 中获取多少条消息并缓存在消费者中，一旦消费者的缓冲区满了，RabbitMQ 将会停止投递新的消息到该消费者中直到它发出有消息被 ack 了。总的来说，消费者负责不断处理消息，不断 ack，然后只要 unAcked 数少于 prefetch * consumer 数目，RabbitMQ 就不断将消息投递过去。")]),v._v(" "),t("li",[v._v("Unacker：待 ack 的消息总数。")]),v._v(" "),t("li",[v._v("publish：消息生产者发送消息的速率。")]),v._v(" "),t("li",[v._v("confirm：消息生产者确认消息的速率。")]),v._v(" "),t("li",[v._v("unroutable (drop)：表示未被接收，且已经删除了的消息。")]),v._v(" "),t("li",[v._v("deliver/get：消息消费者获取消息的速率。")]),v._v(" "),t("li",[v._v("ack：消息消费者 ack 消息的速率。")])]),v._v(" "),t("h2",{attrs:{id:"_5-exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-exchange"}},[v._v("#")]),v._v(" 5. Exchange")]),v._v(" "),t("p",[v._v("这个地方展示交换机信息：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117220309.png",alt:""}})]),v._v(" "),t("p",[v._v("这里会展示交换机的各种信息。")]),v._v(" "),t("p",[v._v("Type 表示交换机的类型。")]),v._v(" "),t("p",[v._v("Features 有两个取值 D 和 I。")]),v._v(" "),t("p",[v._v("D 表示交换机持久化，将交换机的属性在服务器内部保存，当 MQ 的服务器发生意外或关闭之后，重启 RabbitMQ 时不需要重新手动或执行代码去建立交换机，交换机会自动建立，相当于一直存在。")]),v._v(" "),t("p",[v._v("I 表示这个交换机不可以被消息生产者用来推送消息，仅用来进行交换机和交换机之间的绑定。")]),v._v(" "),t("p",[v._v("Message rate in 表示消息进入的速率。\nMessage rate out 表示消息出去的速率。")]),v._v(" "),t("p",[v._v("点击下方的 "),t("strong",[v._v("Add a new exchange")]),v._v(" 可以创建一个新的交换机。")]),v._v(" "),t("h2",{attrs:{id:"_6-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-queue"}},[v._v("#")]),v._v(" 6. Queue")]),v._v(" "),t("p",[v._v("这个选项卡就是用来展示消息队列的：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117223404.png",alt:""}})]),v._v(" "),t("p",[v._v("各项含义如下：")]),v._v(" "),t("ul",[t("li",[v._v("Name：表示消息队列名称。")]),v._v(" "),t("li",[v._v("Type：表示消息队列的类型，除了上图的 classic，另外还有一种消息类型是 Quorum。两个区别如下图：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117224741.png",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("Features：表示消息队列的特性，D 表示消息队列持久化。")]),v._v(" "),t("li",[v._v("State：表示当前队列的状态，running 表示运行中；idle 表示空闲。")]),v._v(" "),t("li",[v._v("Ready：表示待消费的消息总数。")]),v._v(" "),t("li",[v._v("Unacked：表示待应答的消息总数。")]),v._v(" "),t("li",[v._v("Total：表示消息总数 Ready+Unacked。")]),v._v(" "),t("li",[v._v("incoming：表示消息进入的速率。")]),v._v(" "),t("li",[v._v("deliver/get：表示获取消息的速率。")]),v._v(" "),t("li",[v._v("ack：表示消息应答的速率。")])]),v._v(" "),t("p",[v._v("点击下方的 Add a new queue 可以添加一个新的消息队列。")]),v._v(" "),t("p",[v._v("点击每一个消息队列的名称，可以进入到消息队列中。进入到消息队列后，可以完成对消息队列的进一步操作，例如：")]),v._v(" "),t("ul",[t("li",[v._v("将消息队列和某一个交换机进行绑定。")]),v._v(" "),t("li",[v._v("发送消息。")]),v._v(" "),t("li",[v._v("获取一条消息。")]),v._v(" "),t("li",[v._v("移动一条消息（需要插件的支持）。")]),v._v(" "),t("li",[v._v("删除消息队列。")]),v._v(" "),t("li",[v._v("清空消息队列中的消息。")]),v._v(" "),t("li",[v._v("...")])]),v._v(" "),t("p",[v._v("如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117225615.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"_7-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-admin"}},[v._v("#")]),v._v(" 7. Admin")]),v._v(" "),t("p",[v._v("这里是做一些用户管理操作，如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2021/10/tran/20211117225712.png",alt:""}})]),v._v(" "),t("p",[v._v("各项属性含义如下：")]),v._v(" "),t("ul",[t("li",[v._v("Name：表示用户名称。")]),v._v(" "),t("li",[v._v("Tags：表示角色标签，只能选取一个。")]),v._v(" "),t("li",[v._v("Can access virtual hosts：表示允许进入的虚拟主机。")]),v._v(" "),t("li",[v._v("Has password：表示这个用户是否设置了密码。")])]),v._v(" "),t("p",[v._v("常见的两个操作时管理用户和虚拟主机。")]),v._v(" "),t("p",[v._v("点击下方的 Add a user 可以添加一个新的用户，添加用户的时候需要给用户设置 Tags，其实就是用户角色，如下：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("none：\n不能访问 management plugin")])]),v._v(" "),t("li",[t("p",[v._v("management：\n用户可以通过 AMQP 做的任何事\n列出自己可以通过 AMQP 登入的 virtual hosts\n查看自己的 virtual hosts 中的 queues, exchanges 和 bindings\n查看和关闭自己的 channels 和 connections\n查看有关自己的 virtual hosts 的“全局”的统计信息，包含其他用户在这些 virtual hosts 中的活动")])]),v._v(" "),t("li",[t("p",[v._v("policymaker：\nmanagement 可以做的任何事\n查看、创建和删除自己的 virtual hosts 所属的 policies 和 parameters")])]),v._v(" "),t("li",[t("p",[v._v("monitoring：\nmanagement 可以做的任何事\n列出所有 virtual hosts，包括他们不能登录的 virtual hosts\n查看其他用户的 connections 和 channels\n查看节点级别的数据如 clustering 和 memory 使用情况\n查看真正的关于所有 virtual hosts 的全局的统计信息")])]),v._v(" "),t("li",[t("p",[v._v("administrator：\npolicymaker 和 monitoring 可以做的任何事\n创建和删除 virtual hosts\n查看、创建和删除 users\n查看创建和删除 permissions\n关闭其他用户的 connections")])]),v._v(" "),t("li",[t("p",[v._v("impersonator(模拟者)\n模拟者，无法登录管理控制台。")])])]),v._v(" "),t("p",[v._v("另外，这里也可以进行虚拟主机 virtual host 的操作，不过关于虚拟主机我打算另外写一篇文章和大家详聊，这里就先不展开啦。")]),v._v(" "),t("h2",{attrs:{id:"_8-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-小结"}},[v._v("#")]),v._v(" 8. 小结")]),v._v(" "),t("p",[v._v("好啦，今天算是一篇入门文章，和大家简单聊一聊 RabbitMQ 的 web 管理页面展示的一些信息。")])])}),[],!1,null,null,null);_.default=a.exports}}]);