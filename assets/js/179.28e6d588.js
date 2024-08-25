(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{473:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("实际上，没有特殊需求的话，安装好之后直接就可以用了。一般来说，还是需要稍微配置一下，比如中央仓库的问题。默认使用 Maven 自己的中央仓库，使用起来网速比较慢，这个时候，可以通过修改配置文件，将仓库改成国内的镜像仓库，国内仓库使用较多的是阿里巴巴的仓库。")]),t._v(" "),s("h2",{attrs:{id:"_3-1-仓库类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-仓库类型"}},[t._v("#")]),t._v(" 3.1 仓库类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("仓库类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("本地仓库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("就是你自己电脑上的仓库，每个人电脑上都有一个仓库，默认位置在 "),s("code",[t._v("当前用户名\\.m2\\repository")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("私服仓库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一般来说是公司内部搭建的 Maven 私服，处于局域网中，访问速度较快，这个仓库中存放的 jar 一般就是公司内部自己开发的 jar")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("中央仓库")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("有 Apache 团队来维护，包含了大部分的 jar，早期不包含 Oracle 数据库驱动，从 2019 年 8 月开始，包含了 Oracle 驱动")])])])]),t._v(" "),s("p",[t._v("现在存在 3 个仓库，那么 jar 包如何查找呢？")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://maven.javaboy.org/assets/images/img/3-1.png",alt:"",title:"3-1.png"}})]),t._v(" "),s("h2",{attrs:{id:"_3-2-本地仓库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-本地仓库配置"}},[t._v("#")]),t._v(" 3.2 本地仓库配置")]),t._v(" "),s("p",[t._v("本地仓库默认位置在 "),s("code",[t._v("当前用户名\\.m2\\repository")]),t._v("，这个位置可以自定义，但是不建议大家自定义这个地址，有几个原因：")]),t._v(" "),s("ol",[s("li",[t._v("虽然所有的本地的 jar 都放在这个仓库中，但是并不会占用很大的空间。")]),t._v(" "),s("li",[t._v("默认的位置比较隐蔽，不容易碰到")])]),t._v(" "),s("p",[t._v("技术上来说，当然是可以自定义本地仓库位置的，在 conf/settings.xml 中自定义本地仓库位置：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://maven.javaboy.org/assets/images/img/3-2.png",alt:"",title:"3-2.png"}})]),t._v(" "),s("h2",{attrs:{id:"_3-3-远程镜像配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-远程镜像配置"}},[t._v("#")]),t._v(" 3.3 远程镜像配置")]),t._v(" "),s("p",[t._v("由于默认的中央仓库下载较慢，因此，也可以将远程仓库地址改为阿里巴巴的仓库地址：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nexus-aliyun"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Nexus aliyun"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/groups/public"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这段配置，加在 settings.xml 中的 mirrors 节点中：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://maven.javaboy.org/assets/images/img/3-3.png",alt:"",title:"3-3.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);