(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{501:function(e,r,a){"use strict";a.r(r);var t=a(42),l=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"dispatcherservlet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatcherservlet"}},[e._v("#")]),e._v(" DispatcherServlet")]),e._v(" "),a("p",[e._v("1.DispatcherServlet：前端控制器")]),e._v(" "),a("p",[e._v("用户请求到达前端控制器，它就相当于 mvc 模式中的c，DispatcherServlet 是整个流程控制的中心，相当于是 SpringMVC 的大脑，由它调用其它组件处理用户的请求，DispatcherServlet 的存在降低了组件之间的耦合性。")]),e._v(" "),a("h2",{attrs:{id:"handlermapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlermapping"}},[e._v("#")]),e._v(" HandlerMapping")]),e._v(" "),a("p",[e._v("2.HandlerMapping：处理器映射器")]),e._v(" "),a("p",[e._v("HandlerMapping 负责根据用户请求找到 Handler 即处理器（也就是我们所说的 Controller），SpringMVC 提供了不同的映射器实现不同的映射方式，例如：配置文件方式，实现接口方式，注解方式等，在实际开发中，我们常用的方式是注解方式。")]),e._v(" "),a("h2",{attrs:{id:"handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[e._v("#")]),e._v(" Handler")]),e._v(" "),a("p",[e._v("3.Handler：处理器")]),e._v(" "),a("p",[e._v("Handler 是继 DispatcherServlet 前端控制器的后端控制器，在DispatcherServlet 的控制下 Handler 对具体的用户请求进行处理。由于 Handler 涉及到具体的用户业务请求，所以一般情况需要程序员根据业务需求开发 Handler。（这里所说的 Handler 就是指我们的 Controller）")]),e._v(" "),a("h2",{attrs:{id:"handladapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handladapter"}},[e._v("#")]),e._v(" HandlAdapter")]),e._v(" "),a("p",[e._v("4.HandlAdapter：处理器适配器")]),e._v(" "),a("p",[e._v("通过 HandlerAdapter 对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行。")]),e._v(" "),a("h2",{attrs:{id:"viewresolver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewresolver"}},[e._v("#")]),e._v(" ViewResolver")]),e._v(" "),a("p",[e._v("5.ViewResolver：视图解析器")]),e._v(" "),a("p",[e._v("ViewResolver 负责将处理结果生成 View 视图，ViewResolver 首先根据逻辑视图名解析成物理视图名即具体的页面地址，再生成 View 视图对象，最后对 View 进行渲染将处理结果通过页面展示给用户。 SpringMVC 框架提供了很多的 View 视图类型，包括：jstlView、freemarkerView、pdfView 等。一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。")])])}),[],!1,null,null,null);r.default=l.exports}}]);