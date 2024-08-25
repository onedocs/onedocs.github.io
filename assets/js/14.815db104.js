(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{383:function(t,e,v){"use strict";v.r(e);var _=v(42),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("docker 如日中天，这不是单纯的炒概念，docker 确确实实解决了开发与运维的痛点，因此在企业开发中得到了非常广泛的使用，本文对于 docker 的这些基本知识点再做一些简单回顾。")]),t._v(" "),v("h2",{attrs:{id:"什么是-docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[t._v("#")]),t._v(" 什么是 docker")]),t._v(" "),v("p",[t._v("根据 wikipedia 中的介绍：")]),t._v(" "),v("blockquote",[v("p",[t._v("Docker 是一个开放源代码软件项目，让应用程序布署在软件容器下的工作可以自动化进行，借此在 Linux 操作系统上，提供一个额外的软件抽象层，以及操作系统层虚拟化的自动管理机制。"),v("br"),t._v("\nDocker 利用 Linux 核心中的资源分脱机制，例如 cgroups ，以及 Linux 核心名字空间（name space），来创建独立的软件容器（containers）。这可以在单一 Linux 实体下运作，避免启动一个虚拟机造成的额外负担。Linux 核心对名字空间的支持完全隔离了工作环境中应用程序的视野，包括进程树、网络、用户 ID 与挂载文件系统，而核心的 cgroup 提供资源隔离，包括 CPU 、存储器、block I/O 与网络。从 0.9 版本起，Dockers 在使用抽象虚拟是经由 libvirt 的 LXC 与 systemd - nspawn 提供界面的基础上，开始包括 libcontainer 库做为以自己的方式开始直接使用由 Linux 核心提供的虚拟化的设施。\n依据行业分析公司“451研究”：“Dockers 是有能力打包应用程序及其虚拟容器，可以在任何 Linux 服务器上运行的依赖性工具，这有助于实现灵活性和便携性，应用程序在任何地方都可以运行，无论是公有云、私有云、单机等。” 。")])]),t._v(" "),v("p",[t._v("这里的介绍有点绕口，让我来介绍下 docker 解决了哪些痛点：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("简化\b环境管理")]),t._v(" "),v("p",[t._v("传统的软件开发与发布环境复杂，配置繁琐，经常有读者在微信上问：我的代码开发环境可以运行，一旦部署到服务器上就运行不了了。这个问题\b很常见，也确实很烦人，但是问题总要解决，开发环境、测试环境、生产环境，每个环节都有可能出现这样那样的问题，如果能够在各个环境中实现一键部署，就会方便很多，例如一键安装 linux 、一键安装 mysql、一键安装 nginx 等，docker 彻底解决了这个问题。")])]),t._v(" "),v("li",[v("p",[t._v("虚拟化更加轻量级")]),t._v(" "),v("p",[t._v("说到容器，说到虚拟化，很多人总会想到虚拟机，想到 VMware、VirtualBox 等工具，不同于这些虚拟技术，docker 虚拟化更加轻量级，传统的虚拟机都是先虚拟出一个操作系统，然后在操作系统上完成各种各样的配置，这样并不能充分的利用物理机的性能，docker 则是一种操作系统级别的虚拟技术，它运行在操作系统之上的用户空间，所有的容器都共用一个系统内核甚至公共库，容器引擎提供了进程级别的隔离，让每个容器都像运行在单独的系统之上，但是又能够共享很多底层资源。因此 docker 更为轻量、快速和易于管理。")])]),t._v(" "),v("li",[v("p",[t._v("程序可移植")]),t._v(" "),v("p",[t._v("有了前面介绍的两个特点，程序可移植就是顺理成章的事情了。")])])]),t._v(" "),v("h2",{attrs:{id:"docker-和虚拟机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-和虚拟机"}},[t._v("#")]),t._v(" docker 和虚拟机")]),t._v(" "),v("p",[t._v("前面介绍了 docker 与传统虚拟机的差异，通过下表再来详细了解下这种差异：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}}),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("docker")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("虚拟机")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("相同点")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("1. 都可在不同的主机之间迁移"),v("br"),t._v("2. 都具备 root 权限"),v("br"),t._v("3. 都可以远程控制"),v("br"),t._v("4. 都有备份、回滚操作"),v("br")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("在性能上有优势，可以轻易的运行多个操作系统")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("可以安装任何系统，但是性能不及容器")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("原理")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("和宿主机共享内核，所有容器运行在容器引擎之上，容器并非一个完整的操作系统，\b所有容器共享操作系统，在进程级进行隔离")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("每一个虚拟机都建立在虚拟的硬件之上，提供指令级的虚拟，具备一个完整的操作系统")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("优点")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("高效、集中。一个硬件\b节点可以运行数以百计的的容器，非常节省资源，QoS 会尽量满足，但不保证一定满足。内核\b由提供者升级，服务由服务提供者管理")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("对操作系统具有绝对权限，对系统版本和系统升级具有完全的管理权限。具有一整套的的资源：CPU、RAM 和磁盘。QoS 是有保证的，每一个虚拟机就像一个真实的物理机一样，可以实现不同的操作系统运行在同一物理节点上。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("资源管理")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("弹性资源分配：资源可以在没有关闭容器的情况下添加，数据卷也无需重新分配大小")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("虚拟机需要重启，虚拟机里边的操作系统需要处理新加入的资源，如磁盘等，都需要重新分区。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("远程管理")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("根据操作系统的不同，可以通过 shell 或者远程桌面进行")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("远程控制由虚拟化平台提供，可以在\b虚拟机启动之前连接")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("缺点")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("对内核没有控制权限，只有容器的提供者具备升级权限。只有一个内核运行在物理节点上，几乎不能实现不同的操作系统混合。容器提供者一般仅提供少数的几个操作系统")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("每一台虚拟机都具有更大的负载，耗费更多的资源，用户需要全权维护和管理。一台物理机上能够运行的虚拟机非常有限")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("配置")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("快速，基本上是一键配置")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("配置时间长")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("启动时间")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("秒级")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("分钟级")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("硬盘使用")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("MB")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("GB")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("接近原生态")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("弱于原生态")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("系统支持数量")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("\b单机支持上千个")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("一般不多于几十个")])])])]),t._v(" "),v("h2",{attrs:{id:"docker-与传统容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-与传统容器"}},[t._v("#")]),t._v(" docker 与传统容器")]),t._v(" "),v("p",[t._v("不同与传统容器，docker 早起基于 LXC，\b后来基于自研的 libContainer，docker 对于传统容器做了许多优化，如下：")]),t._v(" "),v("ol",[v("li",[t._v("跨平台的可移植性")]),t._v(" "),v("li",[t._v("面向应用")]),t._v(" "),v("li",[t._v("版本控制")]),t._v(" "),v("li",[t._v("组件复用")]),t._v(" "),v("li",[t._v("共享性")]),t._v(" "),v("li",[t._v("工具生态系统")])]),t._v(" "),v("h2",{attrs:{id:"docker-应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-应用场景"}},[t._v("#")]),t._v(" docker 应用场景")]),t._v(" "),v("ol",[v("li",[t._v("加速本地开发")]),t._v(" "),v("li",[t._v("自动打包和部署应用")]),t._v(" "),v("li",[t._v("创建轻量、私有的PaaS环境")]),t._v(" "),v("li",[t._v("自动化测试和持续集成/部署")]),t._v(" "),v("li",[t._v("部署并扩展Web应用、数据库和后端服务器")]),t._v(" "),v("li",[t._v("创建安全沙盒")]),t._v(" "),v("li",[t._v("轻量级的桌面虚拟化")])]),t._v(" "),v("h2",{attrs:{id:"docker-核心组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-核心组件"}},[t._v("#")]),t._v(" docker 核心组件")]),t._v(" "),v("p",[t._v("docker 中有三大核心组件：")]),t._v(" "),v("ul",[v("li",[t._v("镜像")])]),t._v(" "),v("p",[t._v("镜像是一个只读的静态模版，它保存了容器需要的环境和应用的执行代码，可以将镜像看成是容器的代码，当代码运行起来之后，就成了容器，\b镜像和容器的关系也类似于程序和进程的关系。")]),t._v(" "),v("ul",[v("li",[t._v("容器")])]),t._v(" "),v("p",[t._v("容器是一个运行时环境，是镜像的一个运行状态，它是镜像执行的动态表现。")]),t._v(" "),v("ul",[v("li",[t._v("库")])]),t._v(" "),v("p",[t._v("库是一个特定的用户存储镜像的目录，一个用户可以建立多个库来保存自己的镜像。")]),t._v(" "),v("h2",{attrs:{id:"docker相关技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker相关技术"}},[t._v("#")]),t._v(" docker相关技术")]),t._v(" "),v("ol",[v("li",[t._v("隔离性")]),t._v(" "),v("li",[t._v("可度量性")]),t._v(" "),v("li",[t._v("移植性")]),t._v(" "),v("li",[t._v("安全性")])]),t._v(" "),v("h2",{attrs:{id:"docker-安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[t._v("#")]),t._v(" docker 安装")]),t._v(" "),v("p",[t._v("相对而言，Linux 上安装 Docker 是最容易的，其次是 Mac ，最后是 Windows ，Windows 因此要装的东西比较多，官方也提供了两个不同的安装包，支持不同的 Windows 的不同版本，一个是针对 Win10 的安装引导程序，还有一个是兼容性较好的 Toolbox ，但是在 Windows 上运行 Docker ，后期在虚拟目录等方面还会遇到各种问题，所以这里松哥是非常不建议大家在 Windows 中安装 Docker ，有 Mac 的上 Mac （Mac 上安装 Docker 就像安装普通软件一样），没有 Mac 的装 Linux 虚拟机，再装 Docker 即可，这里我就先以 CentOS 上安装 Docker 为例，来说说 Docker 安装。")]),t._v(" "),v("p",[t._v("分别执行如下安装命令：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 首先安装 Docker\nyum -y install docker\n\n# 然后启动 Docker 服务\nservice docker start\n\n# 测试安装是否成功\ndocker -v\n")])])]),v("p",[t._v("安装完成后，看到如下页面，表示安装成功：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://www.javaboy.org/images/docker/docker-1-1.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("本文主要向大家介绍了 Docker 的基本概念以及 Docker 的安装 ，下篇文章我们向大家介绍 Docker 中基本的容器操作。有问题欢迎留言讨论。")]),t._v(" "),v("p",[t._v("参考资料：")]),t._v(" "),v("p",[t._v("[1] 曾金龙，肖新华，刘清.Docker开发实践[M].北京：人民邮电出版社，2015.")])])}),[],!1,null,null,null);e.default=l.exports}}]);