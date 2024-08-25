(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{408:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们之前的案例都是在单个节点上实现的，在生产环境中这种做法是有风险的，如果服务宕机、崩溃或者硬盘坏了都会对公司业务造成损失，因此我们需要数据备份。")]),t._v(" "),a("p",[t._v("在 MongoDB 中我们可以通过副本集来实现这一需求，MongoDB 副本集 (Replica Set) 是有自动故障恢复功能的主从集群，有一个 Primary 节点和一个或多个 Secondary 节点组成，如果 Primary 崩溃了，会自动从 Secondary 中选择一个将其升级为新的主服务器，本文我们先来看看副本集环境的搭建。")]),t._v(" "),a("h2",{attrs:{id:"单台服务器模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单台服务器模拟"}},[t._v("#")]),t._v(" 单台服务器模拟")]),t._v(" "),a("p",[t._v("我们在实际的生产环境中肯定是多台服务器部署，但是在自己学习过程中，我们可以在一台服务器上来模拟这个环境，这样可以简化我们的操作，让小伙伴们快速上手。下一小节我会和大家分享如何在真实的生产环境中创建副本集。")]),t._v(" "),a("p",[t._v("好了，开始吧。")]),t._v(" "),a("p",[t._v("首先我们在 Linux 根目录下创建 /data/db 目录作为我们的数据保存目录，然后执行如下命令启动一个 mongo shell：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mongo --nodb\n")])])]),a("p",[t._v("--nodb 表示启动时不连接任何数据库，然后通过如下命令创建一个副本集：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replicaSet=new ReplSetTest({nodes:3})\n")])])]),a("p",[t._v("在创建的日志中，我们可以看到三个实例的端口号，我这里分别是 20000、20001、20002，此时我们的副本集创建好了，但是并未启动，接下来执行如下命令启动三个 mongodb 实例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replicaSet.startSet()\n")])])]),a("p",[t._v("再执行如下命令配置复制功能：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replicaSet.initiate()\n")])])]),a("p",[t._v("这样环境基本就配好了，此时当前的 shell 不要关闭，我们重新打开一个 Linux 命令窗口，执行如下命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mongo 192.168.248.128:20000/sang_1\n")])])]),a("p",[t._v("表示连接端口为 20000 的那个实例中的 sang_1 数据库，连接成功后，我们可以执行如下命令查看当前实例的身份，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.isMaster()\n")])])]),a("p",[t._v("返回的数据很多，其中有一条是 "),a("code",[t._v('"ismaster" : true')]),t._v("，表示这是一个主节点，此时我们再分别打开两个 Linux 窗口，分别执行如下两条命令，进入另外两个节点：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mongo 192.168.248.128:20001/sang_1\nmongo 192.168.248.128:20002/sang_1\n")])])]),a("p",[t._v("连接成功之后，依然可以通过 "),a("code",[t._v("db.isMaster()")]),t._v(" 命令来查看备份节点的身份，我们发现此时 "),a("code",[t._v('"ismaster" : false')]),t._v("，表示这是一个备份节点，此时我们可以先做个简单的测试了，此时我在主节点(端口为 20000)那个节点上写一个文档，写完之后，我们看看其他副本集成员上是否有我刚才的写的文档的副本，执行命令顺序如下：")]),t._v(" "),a("p",[t._v("主节点写入数据：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.collect1.insert({x:"hahaha"})\n')])])]),a("p",[t._v("任意一个副本节点，先执行如下命令表示可以从备份节点读取数据：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.setSlaveOk()\n")])])]),a("p",[t._v("然后再在备份节点中执行如下命令读取数据：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collect1.find()\n")])])]),a("p",[t._v("此时，我们发现数据已经备份成功了。")]),t._v(" "),a("p",[t._v("如果此时我们尝试向备份节点中直接写入文档，会发现写入失败，这里需要注意备份节点中的数据都是备份来的，不可以直接写入，想写入，除非等它的身份转为主节点才可以。")]),t._v(" "),a("p",[t._v("此时，我们尝试通过如下命令关闭主节点：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("use admin\ndb.shutdownServer()\n")])])]),a("p",[t._v("然后查看两个备份节点的 db.isMaster(),发现有一个备份节点自动上位成为了主节点。")]),t._v(" "),a("p",[t._v("最后如果想关闭副本集，可以回到第一个shell命令行中，输入如下命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replicaSet.stopSet()\n")])])]),a("h2",{attrs:{id:"多台服务器模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多台服务器模拟"}},[t._v("#")]),t._v(" 多台服务器模拟")]),t._v(" "),a("p",[t._v("OK，以上操作是我们单台服务器模拟搭建副本集，方便我们做实验，在生产环境中，我们可能有多个服务器，多台服务器又要如何搭建副本集呢？各位看官继续向下看。")]),t._v(" "),a("p",[t._v("首先准备好三台装好了MongoDB的服务器，地址分别如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("192.168.248.128\n192.168.248.135\n192.168.248.136\n")])])]),a("p",[t._v("修改每台服务器的配置文件 mongodb.conf，添加 replSet=rs，表示副本集的名称，修改后的配置文件内容如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dbpath=/opt/mongodb/db\nlogpath=/opt/mongodb/logs/mongodb.log\nport=27017\nfork=true\nreplSet=rs\n")])])]),a("p",[t._v("修改完成之后，分别启动三台服务器上的 MongoDB，启动成功之后，连接上任意一台的 shell，连接成功之后，先定义配置文件，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('config={_id:"rs",members:[{_id:0,host:"192.168.248.128:27017"},{_id:1,host:"192.168.248.135:27017"},{_id:2,host:"192.168.248.136:27017"}]}\n')])])]),a("p",[t._v("id 后面跟着的是副本集的名称，也就是我们在 mongodb.conf 中定义的名称，后面三个是副本集的成员，定义好之后，再执行如下命令初始化副本集：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rs.initiate(config)\n")])])]),a("p",[t._v("初始化成功之后，我们就可以通过 rs.status() 来查看副本集的状态，也可以看到每个服务器的角色，部分日志内容如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"members"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.248.128:27017"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"health"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stateStr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRIMARY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.248.135:27017"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"health"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stateStr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SECONDARY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syncingTo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.248.128:27017"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.248.136:27017"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"health"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stateStr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SECONDARY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syncingTo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.248.128:27017"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们可以看到每台服务器的角色，有 primary，也有 secondary，secondary 上还注明了从哪个服务器上同步数据。所有这些工作做好之后，我们就可以按照上文介绍的方式来测一下这里的副本集了，测试工作我就不再重复介绍了。")]),t._v(" "),a("p",[t._v("好了，MongoDB 中副本集的搭建我们就先说到这里，小伙伴们有问题欢迎留言讨论。")]),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("ol",[a("li",[t._v("《MongoDB权威指南第2版》")])])])}),[],!1,null,null,null);s.default=n.exports}}]);