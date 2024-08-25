(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{499:function(_,r,t){"use strict";t.r(r);var e=t(42),v=Object(e.a)({},(function(){var _=this,r=_.$createElement,t=_._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("松哥原创的四套视频教程已经全部杀青，感兴趣的小伙伴戳这里--\x3e"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/6GIZ6RmPWZzFe1jaroXcPQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("Spring Boot+Vue+微人事视频教程"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("来看今天的正文。")]),_._v(" "),t("p",[_._v("前面松哥说最近有出免费视频的计划，在免费视频的第三阶段，我将来和大家聊一聊 Spring 的源码（"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/aj9Bt1TE1pb8ZPVCpDKI8A",target:"_blank",rel:"noopener noreferrer"}},[_._v("我为什么要出一套免费视频教程"),t("OutboundLink")],1),_._v("）。")]),_._v(" "),t("p",[_._v("SSM 作为 Java 开发领域的经典框架组合，作为一个有追求的技术人，都是有必要认真去走一遍 Spring 源码的，搞懂 Spring 源码，不仅仅是为了掌握 Spring，也是为了学习其中优秀的设计思想。")]),_._v(" "),t("p",[_._v("可以这么说，如果你看懂了 Spring 源码，再去看 MyBatis、Spring Security 源码，你会发现这些源码都非常容易，稍微瞅几眼就懂了。")]),_._v(" "),t("p",[_._v("然而源码的学习是一个枯燥的过程，源码解读也是一个枯燥的过程，但是一旦你把源码搞懂了，技术上的提升也绝对是肉眼可见的，所以，去折腾一下源码绝对是有必要的，这也是你和同行拉开差距的方式之一。")]),_._v(" "),t("p",[_._v("松哥自己在 Spring 源码这块前前后后也折腾了很久了，有一些心得一直想和大家分享，但却总下不了决心，因为现在已经很忙了，再加塞一个任务进来，怕是吃不消，但是很多时候，我们总得逼自己一把，才能成长，不能总是躺在舒适区。于是下定决心，这次一定要把 Spring 源码解析的视频录出来。")]),_._v(" "),t("p",[_._v("然而视频录制是一个非常费时费力的事情，有的人可能不太理解为什么视频会更加费时间，松哥来给大家举几个例子：")]),_._v(" "),t("ol",[t("li",[_._v("视频的案例，需要提前准备，不是讲的时候边讲边写，那样是不负责任的，对自己不负责，对读者也不负责。录视频和写博客一样，案例都是要先经过设计的："),t("code",[_._v("这个知识点，我用一个什么样的 Demo 才能让读者更好的理解它？")])]),_._v(" "),t("li",[_._v("视频可能还需要准备一个配套的文档，文档的撰写跟写博客一样，得不少时间。")]),_._v(" "),t("li",[_._v("视频录完之后，一般都要二次处理一下，去噪音等等，二次处理耗时和计算机性能有很大关系，这也是一个耗时操作。")])]),_._v(" "),t("p",[_._v("所以要把一个自己懂的东西讲出来，同时还要让听讲的人听懂，这并非一件容易的事情。")]),_._v(" "),t("p",[_._v("松哥思来想去，决定在视频开始录制之前，先出一系列源码解读的文章，通过图文的形式先带领大家进入 Spring 源码的世界，然后再抽时间录视频，这样感觉更稳一些。")]),_._v(" "),t("p",[_._v("所以今天这篇文章，我主要和大家说一下我的 Spring 源码解读计划，大概从哪几个方面入手。")]),_._v(" "),t("h2",{attrs:{id:"_1-spring-架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-架构"}},[_._v("#")]),_._v(" 1.Spring 架构")]),_._v(" "),t("p",[_._v("先来看一张 Spring 整体架构图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://img.itboyhub.com/2020/06/2020-06-07-19-42-07.png",alt:""}})]),_._v(" "),t("p",[_._v("从这张图中，我们可以看到，Spring Framework 中包含的东西还是非常多的，虽然东西很多，但是主次其实很明显。")]),_._v(" "),t("p",[_._v("我们在学习 Spring 的时候，有两个非常重要的地方：")]),_._v(" "),t("ol",[t("li",[_._v("Core Container")]),_._v(" "),t("li",[_._v("AOP")])]),_._v(" "),t("p",[_._v("这两个是核心，也是我们到时候源码分析的重点，其他的 Data Access 、Web 等，基本都是以这两个为基础扩展出来的功能。")]),_._v(" "),t("p",[_._v("我来给大家挨个介绍一下。")]),_._v(" "),t("h2",{attrs:{id:"_2-spring-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-模块"}},[_._v("#")]),_._v(" 2.Spring 模块")]),_._v(" "),t("h3",{attrs:{id:"_2-1-core-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-core-container"}},[_._v("#")]),_._v(" 2.1 Core Container")]),_._v(" "),t("p",[_._v("Core Container 是 Spring 容器的核心模块，里边主要包含四个模块：Beans、Core、Context 以及 Expression Language，我们所熟知的 IoC/DI 就是由 Beans 和 Core 来提供。")]),_._v(" "),t("p",[_._v("我来分别介绍一下这几个模块的作用。")]),_._v(" "),t("ul",[t("li",[_._v("Core：这个是 Spring 的核心模块，它里边主要是 Spring 框架的一些基础工具类，比如一些序列化工具、类型转换器、我们常用的优先级注解等等，都是它提供的。")]),_._v(" "),t("li",[_._v("Beans：Beans 就没啥好说的，我们所熟知的 IoC/DI 就是由它提供的。")]),_._v(" "),t("li",[_._v("Context：Context 虽然不像前两个模块那么基础，因为它是基于 Core 和 Beans 构建的，但是 Context 也是我们在 Web 项目中必不可少的工具，资源加载、Event 等等都需要 Context。")]),_._v(" "),t("li",[_._v("Expression Language：SpEL 虽然归类于 Core Container，但是在目前前后端分离的背景下，其实 SpEL 的使用场景大大缩水。SpEL 是一个支持查询并在运行时可以操纵一个对象图的表达式语言，它的语法类似于统一 EL，但提供了更多的功能，而且它可以独立使用。")])]),_._v(" "),t("h3",{attrs:{id:"_2-2-aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aop"}},[_._v("#")]),_._v(" 2.2 AOP")]),_._v(" "),t("p",[_._v("AOP 也是 Spring 中一个非常重要的功能模块，其实小伙伴们从平时的面试中应该就能感觉出来 AOP 的分量，可以说，如果没有 AOP，你就见不到 Spring 中很多令人惊叹的功能。像我们熟知的 Spring 中的事务管理，就离不开 Spring AOP。关于 AOP 的更多介绍，大家可以参考已经录制的 【Spring 基础篇】的视频，我就不再赘述。")]),_._v(" "),t("h3",{attrs:{id:"_2-3-data-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-data-access"}},[_._v("#")]),_._v(" 2.3 Data Access")]),_._v(" "),t("p",[_._v("Data Access 模块中，主要是封装了一些数据库持久化相关的操作。比如 JDBC、ORM、OXM、JMS 以及事务。")]),_._v(" "),t("ul",[t("li",[_._v("JDBC：这个是对传统的 JDBC 的封装，传统的 JDBC 里边有很多冗余代码，Spring 利用自身特性对其进行封装，简化了数据库访问。")]),_._v(" "),t("li",[_._v("ORM：ORM 为我们常见的 ORM 框架（如 Hibernate、MyBatis 等）提供了一个交互层。")]),_._v(" "),t("li",[_._v("OXM：OXM 模块抽象了对象和 XML 之间的转换，O 是 Object，X 是 XML。")]),_._v(" "),t("li",[_._v("JMS：JMS 主要是对消息中间件的消息发送/消费提供封装。")])]),_._v(" "),t("h3",{attrs:{id:"_2-4-web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-web"}},[_._v("#")]),_._v(" 2.4 Web")]),_._v(" "),t("p",[_._v("Web 模块里边包含几个部分，不过对于我们而言，使用更多的是 webmvc，也就是我们常说的 SpringMVC。")]),_._v(" "),t("p",[_._v("Web 主要包含如下模块：")]),_._v(" "),t("ul",[t("li",[_._v("Web：提供基础的 Web 功能，构建 Web 上下文、提供文件上传等功能。")]),_._v(" "),t("li",[_._v("WebMVC：提供 MVC 支持。")]),_._v(" "),t("li",[_._v("其他一些冷门的模块我就不多做介绍了。")])]),_._v(" "),t("h3",{attrs:{id:"_2-5-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-test"}},[_._v("#")]),_._v(" 2.5 Test")]),_._v(" "),t("p",[_._v("对测试功能提供支持。")]),_._v(" "),t("h2",{attrs:{id:"_3-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-小结"}},[_._v("#")]),_._v(" 3.小结")]),_._v(" "),t("p",[_._v("好啦，今天就先和大家稍微聊一下 Spring 中的各个模块，接下来松哥将按照本文的顺序和大家逐步剖析 Spring 源码，其中 Ioc/DI、AOP 将是分析的重点。")]),_._v(" "),t("p",[_._v("欢迎大家保持关注～喜欢的话，记得点个在看鼓励下松哥哦～")])])}),[],!1,null,null,null);r.default=v.exports}}]);