(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6cd2e50"],{"12de":function(t,e,a){"use strict";var n=a("9efd"),o="/api/admin/themes",s={listAll:function(){return Object(n["a"])({url:"".concat(o),method:"get"})},listFiles:function(){return Object(n["a"])({url:"".concat(o,"/files"),method:"get"})},customTpls:function(){return Object(n["a"])({url:"".concat(o,"/files/custom"),method:"get"})},active:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/activation"),method:"post"})},getActivatedTheme:function(){return Object(n["a"])({url:"".concat(o,"/activation"),method:"get"})},delete:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t),method:"delete"})},fetchConfiguration:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/configurations"),method:"get"})},fetchSettings:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/settings"),method:"get"})},saveSettings:function(t,e){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/settings"),data:e,method:"post"})},getProperty:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t),method:"get"})},upload:function(t,e,a){return Object(n["a"])({url:"".concat(o,"/upload"),timeout:864e4,data:t,onUploadProgress:e,cancelToken:a,method:"post"})},fetching:function(t){return Object(n["a"])({url:"".concat(o,"/fetching"),params:{uri:t},method:"post"})},getContent:function(t){return Object(n["a"])({url:"".concat(o,"/files/content"),params:{path:t},method:"get"})},saveContent:function(t,e){return Object(n["a"])({url:"".concat(o,"/files/content"),params:{path:t},data:e,method:"put"})},reload:function(){return Object(n["a"])({url:"".concat(o,"/reload"),method:"post"})},exists:function(t){return Object(n["a"])({url:"".concat(o,"/activation/template/exists"),method:"get",params:{template:t}})}};e["a"]=s},"2ffa":function(t,e,a){"use strict";var n=a("79e0"),o=a.n(n);o.a},"79e0":function(t,e,a){},ed66:function(t,e,a){"use strict";var n=a("9efd"),o="/api/admin/sheets",s={list:function(){return Object(n["a"])({url:o,method:"get"})},listInternal:function(){return Object(n["a"])({url:"".concat(o,"/internal"),method:"get"})},get:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t),method:"get"})},create:function(t,e){return Object(n["a"])({url:o,method:"post",data:t,params:{autoSave:e}})},update:function(t,e,a){return Object(n["a"])({url:"".concat(o,"/").concat(t),method:"put",data:e,params:{autoSave:a}})},updateStatus:function(t,e){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/").concat(e),method:"put"})},delete:function(t){return Object(n["a"])({url:"".concat(o,"/").concat(t),method:"delete"})},sheetStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"}}};e["a"]=s},f585:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"page-header-index-wide"},[n("a-row",{attrs:{gutter:12}},[n("a-col",{attrs:{span:24}},[n("div",{staticStyle:{"margin-bottom":"16px"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入页面标题"}]}],expression:"['title', { rules: [{ required: true, message: '请输入页面标题' }] }]"}],attrs:{size:"large",placeholder:"请输入页面标题"},model:{value:e.sheetToStage.title,callback:function(t){e.$set(e.sheetToStage,"title",t)},expression:"sheetToStage.title"}})],1),n("div",{attrs:{id:"editor"}},[n("mavon-editor",{attrs:{boxShadow:!1,toolbars:e.toolbars,ishljs:!0,autofocus:!1},model:{value:e.sheetToStage.originalContent,callback:function(t){e.$set(e.sheetToStage,"originalContent",t)},expression:"sheetToStage.originalContent"}})],1)]),n("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[n("a-drawer",{attrs:{title:"页面设置",width:e.isMobile()?"100%":"460",closable:!0,visible:e.sheetSettingVisible},on:{close:function(){return t.sheetSettingVisible=!1}}},[n("div",{staticClass:"post-setting-drawer-content"},[n("div",{style:{marginBottom:"16px"}},[n("h3",{staticClass:"post-setting-drawer-title"},[e._v("基本设置")]),n("div",{staticClass:"post-setting-drawer-item"},[n("a-form",{attrs:{layout:"vertical"}},[n("a-form-item",{attrs:{label:"页面路径：",help:e.options.blog_url+"/s/"+(e.sheetToStage.url?e.sheetToStage.url:"{auto_generate}")}},[n("a-input",{model:{value:e.sheetToStage.url,callback:function(t){e.$set(e.sheetToStage,"url",t)},expression:"sheetToStage.url"}})],1),n("a-form-item",{attrs:{label:"开启评论："}},[n("a-radio-group",{attrs:{defaultValue:!1},model:{value:e.sheetToStage.disallowComment,callback:function(t){e.$set(e.sheetToStage,"disallowComment",t)},expression:"sheetToStage.disallowComment"}},[n("a-radio",{attrs:{value:!1}},[e._v("开启")]),n("a-radio",{attrs:{value:!0}},[e._v("关闭")])],1)],1),n("a-form-item",{attrs:{label:"自定义模板："}},[n("a-select",{model:{value:e.sheetToStage.template,callback:function(t){e.$set(e.sheetToStage,"template",t)},expression:"sheetToStage.template"}},[n("a-select-option",{key:"",attrs:{value:""}},[e._v("无")]),e._l(e.customTpls,function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})],2)],1)],1)],1)]),n("a-divider"),n("div",{style:{marginBottom:"16px"}},[n("h3",{staticClass:"post-setting-drawer-title"},[e._v("缩略图")]),n("div",{staticClass:"post-setting-drawer-item"},[n("div",{staticClass:"sheet-thum"},[n("img",{staticClass:"img",attrs:{src:e.sheetToStage.thumbnail||"//i.loli.net/2019/05/05/5ccf007c0a01d.png"},on:{click:function(){return t.thumDrawerVisible=!0}}}),n("a-button",{staticClass:"sheet-thum-remove",attrs:{type:"dashed"},on:{click:e.handlerRemoveThumb}},[e._v("移除")])],1)])]),n("a-divider",{staticClass:"divider-transparent"})],1),n("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:e.handleSelectSheetThumb},model:{value:e.thumDrawerVisible,callback:function(t){e.thumDrawerVisible=t},expression:"thumDrawerVisible"}}),n("div",{staticClass:"bottom-control"},[n("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.handleDraftClick}},[e._v("保存草稿")]),n("a-button",{attrs:{type:"primary"},on:{click:e.handlePublishClick}},[e._v("发布")])],1)],1)],1)],1),n("AttachmentDrawer",{model:{value:e.attachmentDrawerVisible,callback:function(t){e.attachmentDrawerVisible=t},expression:"attachmentDrawerVisible"}}),n("footer-tool-bar",{style:{width:e.isSideMenu()&&e.isDesktop()?"calc(100% - "+(e.sidebarOpened?256:80)+"px)":"100%"}},[n("a-button",{attrs:{type:"primary"},on:{click:function(){return t.sheetSettingVisible=!0}}},[e._v("发布")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(){return t.attachmentDrawerVisible=!0}}},[e._v("附件库")])],1)],1)},o=[],s=(a("612f"),a("6657")),i=a("ed4e"),r=a("3993"),c=a("5a70"),l=a("ac0d"),u=a("2749"),h=(a("cc71"),a("ed66")),d=a("12de"),m=a("482b"),f={components:{mavonEditor:s["mavonEditor"],FooterToolBar:c["a"],AttachmentDrawer:i["a"],AttachmentSelectDrawer:r["a"]},mixins:[l["a"],l["b"]],data:function(){return{toolbars:u["a"],wrapperCol:{xl:{span:24},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,thumDrawerVisible:!1,sheetSettingVisible:!1,customTpls:[],sheetToStage:{},timer:null,options:[],keys:["blog_url"]}},created:function(){this.loadCustomTpls(),this.loadOptions(),clearInterval(this.timer),this.timer=null,this.autoSaveTimer()},destroyed:function(){clearInterval(this.timer),this.timer=null},beforeRouteLeave:function(t,e,a){null!==this.timer&&clearInterval(this.timer),this.autoSaveSheet(),a()},beforeRouteEnter:function(t,e,a){var n=t.query.sheetId;a(function(t){n&&h["a"].get(n).then(function(e){var a=e.data.data;t.sheetToStage=a})})},methods:{loadCustomTpls:function(){var t=this;d["a"].customTpls().then(function(e){t.customTpls=e.data.data})},loadOptions:function(){var t=this;m["a"].listAll(this.keys).then(function(e){t.options=e.data.data})},handlePublishClick:function(){this.sheetToStage.status="PUBLISHED",this.saveSheet()},handleDraftClick:function(){this.sheetToStage.status="DRAFT",this.saveSheet()},handlerRemoveThumb:function(){this.sheetToStage.thumbnail=null},createOrUpdateSheet:function(t,e,a){var n=this;this.sheetToStage.id?h["a"].update(this.sheetToStage.id,this.sheetToStage,a).then(function(t){n.$log.debug("Updated sheet",t.data.data),e&&e()}):h["a"].create(this.sheetToStage,a).then(function(e){n.$log.debug("Created sheet",e.data.data),t&&t(),n.sheetToStage=e.data.data})},saveSheet:function(){var t=this;this.createOrUpdateSheet(function(){return t.$message.success("页面创建成功")},function(){return t.$message.success("页面更新成功")},!1)},autoSaveSheet:function(){null!=this.sheetToStage.title&&null!=this.sheetToStage.originalContent&&this.createOrUpdateSheet(null,null,!0)},handleSelectSheetThumb:function(t){this.sheetToStage.thumbnail=t.path,this.thumDrawerVisible=!1},autoSaveTimer:function(){var t=this;null==this.timer&&(this.timer=setInterval(function(){t.autoSaveSheet()},15e3))}}},p=f,g=(a("2ffa"),a("17cc")),b=Object(g["a"])(p,n,o,!1,null,"d8269fa2",null);e["default"]=b.exports}}]);