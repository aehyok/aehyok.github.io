(window["webpackJsonp_map-app"]=window["webpackJsonp_map-app"]||[]).push([["marker-polygon"],{"7e70":function(e,n,t){"use strict";t.r(n);var c=t("7a23"),o=Object(c["hb"])("data-v-544196e5");Object(c["I"])("data-v-544196e5");var i={id:"map",ref:"refMap",style:{width:"1000px",height:"800px"}},l={class:"operation"},a=Object(c["m"])("绘制标记"),r=Object(c["m"])("绘制多边形"),u=Object(c["m"])("拖动多边形"),s=Object(c["m"])("编辑多边形"),b=Object(c["m"])("导入行政边界（KML文件）");Object(c["F"])();var p,m=o((function(e,n,t,p,m,d){var f=Object(c["O"])("el-button"),O=Object(c["O"])("v-contextmenu-item"),j=Object(c["O"])("v-contextmenu-group"),g=Object(c["O"])("v-contextmenu"),k=Object(c["P"])("contextmenu");return Object(c["E"])(),Object(c["i"])(c["b"],null,[Object(c["eb"])(Object(c["n"])("div",i,[Object(c["n"])("div",l,[Object(c["n"])(f,{type:"primary",icon:"el-icon-share",size:"mini",onClick:Object(c["gb"])(e.markClick,["stop"])},{default:o((function(){return[a]})),_:1},8,["onClick"]),Object(c["n"])(f,{type:"primary",icon:"el-icon-share",size:"mini",onClick:Object(c["gb"])(e.plotClick,["stop"])},{default:o((function(){return[r]})),_:1},8,["onClick"]),Object(c["n"])(f,{type:"primary",icon:"el-icon-share",size:"mini",onClick:Object(c["gb"])(e.dragClick,["stop"])},{default:o((function(){return[u]})),_:1},8,["onClick"]),Object(c["n"])(f,{type:"primary",icon:"el-icon-share",size:"mini",onClick:Object(c["gb"])(e.editClick,["stop"])},{default:o((function(){return[s]})),_:1},8,["onClick"]),Object(c["n"])(f,{type:"primary",icon:"el-icon-share",size:"mini",onClick:Object(c["gb"])(e.importClick,["stop"])},{default:o((function(){return[b]})),_:1},8,["onClick"])])],512),[[k,void 0,"contextmenu"]]),Object(c["n"])(g,{ref:"contextmenu"},{default:o((function(){return[Object(c["n"])(j,{title:""},{default:o((function(){return[Object(c["n"])(O,{onClick:e.savePolygon},{default:o((function(){return[Object(c["n"])("img",{src:e.url,class:"image-size"},null,8,["src"])]})),_:1},8,["onClick"]),Object(c["n"])(O,{onClick:e.deletePolygon},{default:o((function(){return[Object(c["n"])("img",{src:e.url,class:"image-size"},null,8,["src"])]})),_:1},8,["onClick"])]})),_:1})]})),_:1},512)],64)})),d=t("5530"),f=t("ade3"),O=(t("b0c0"),t("7fc3")),j=(t("2fd0"),t("d625")),g=(t("0a75"),Object(c["o"])({directives:{contextmenu:j["f"]},components:(p={},Object(f["a"])(p,j["a"].name,j["a"]),Object(f["a"])(p,j["d"].name,j["d"]),Object(f["a"])(p,j["b"].name,j["b"]),Object(f["a"])(p,j["e"].name,j["e"]),Object(f["a"])(p,j["c"].name,j["c"]),p),setup:function(){var e=Object(c["K"])(null),n=Object(c["K"])(null),t={},o=Object(c["J"])({url:"../logo.png",markerPoint:{},plotPolygon:[]}),i=function(){t.pm.enableDraw("Marker")},l=function(){console.log("open"),t.pm.enableDraw("Polygon",{pinning:!0,snappable:!0,measurements:{measurement:!0}})},a=function(){t.pm.enableGlobalEditMode({allowSelfIntersection:!1})},r=function(){console.log("drag"),t.pm.enableGlobalDragMode()},u=function(){console.log("导入kml")},s=function(e){console.log(e,"beforeUpload----上传文件");var n=new FileReader;n.readAsBinaryString(e),n.onload=function(){console.log(n.result,"fileReader.result");var e=new DOMParser,c=e.parseFromString(n.result,"text/xml"),o=new L.KML(c);console.log(o,"track"),t.addLayer(o);var i=o.getBounds();t.fitBounds(i)}},b=function(e,n,t){console.log("success----on",e,n)};return Object(c["B"])((function(){var e=Object(O["a"])(),n=e.init;t=n([34.263742732916505,108.01650524139406]),t.on("pm:create",(function(e){"Polygon"===e.shape&&console.log("绘制多边形",e),"Marker"===e.shape&&t.eachLayer((function(n){console.log(n._url,n._leaflet_id,n.pm),n.pm&&"Marker"===n.pm._shape&&e.marker._leaflet_id!==n._leaflet_id&&n.remove()})),e.layer.on("click",(function(){console.log("创建了图层后的click事件")})),e.layer.on("pm:edit",(function(e){console.log(e,"pm:edit拖动")}))}))})),Object(d["a"])(Object(d["a"])({},Object(c["V"])(o)),{},{refMap:n,contextmenu:e,plotClick:l,dragClick:r,markClick:i,editClick:a,importClick:u,beforeUpload:s,onSuccess:b})}}));t("f7d2");g.render=m,g.__scopeId="data-v-544196e5";n["default"]=g},"8d01":function(e,n,t){},f7d2:function(e,n,t){"use strict";t("8d01")}}]);