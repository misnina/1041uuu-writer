(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),i=a(1),l=a(2),o=a(3),u=a(5),v=a(4),b=a(6),p=(a(16),a(10)),h=a.n(p),f=["a","b","c","d","e","f","g","h","i","j"],m=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("nav",null,f.map(function(t){return console.log(t),c.a.createElement("button",{className:"dot ".concat(t),onClick:function(a){return e.props.setStyle(t)}})}))}}]),t}(n.Component);function y(e){return c.a.createElement("textarea",{onChange:function(t){return e.saveText(t.target.value)}})}var j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"footer"},"Support ",c.a.createElement("a",{href:"https://www.patreon.com/1041uuu"},"1041uuu")," on Patreon ",c.a.createElement("button",{onClick:this.props.saveFile},"Save as Text"))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(v.a)(t).call(this,e))).state={text:"",style:"a"},a.saveText=a.saveText.bind(Object(i.a)(a)),a.setStyle=a.setStyle.bind(Object(i.a)(a)),a.saveFile=a.saveFile.bind(Object(i.a)(a)),a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"app"},c.a.createElement("div",{className:"style + ".concat(this.state.style)},c.a.createElement(m,{setStyle:this.setStyle}),c.a.createElement(y,{saveText:this.saveText,spellcheck:"false"}),c.a.createElement(j,{saveFile:this.saveFile})))}},{key:"saveText",value:function(e){this.setState({text:e})}},{key:"setStyle",value:function(e){this.setState({style:e})}},{key:"saveFile",value:function(){var e=new Blob([this.state.text],{type:"text/plain;charset=utf-8"});h.a.saveAs(e,"text.txt")}}]),t}(n.Component);s.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4dffd932.chunk.js.map