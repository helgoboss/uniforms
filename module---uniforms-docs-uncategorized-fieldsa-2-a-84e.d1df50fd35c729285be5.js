(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{77:function(e,a,t){"use strict";t.r(a),t.d(a,"rightToc",function(){return s}),t.d(a,"default",function(){return m});t(0);var n=t(118);t(119);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=[{value:"AutoField algorithm",id:"autofield-algorithm",children:[]},{value:"Guaranteed props",id:"guaranteed-props",children:[]},{value:"Props propagation",id:"props-propagation",children:[]}],p={rightToc:s},r="wrapper";function m(e){var a=e.components,t=o(e,["components"]);return Object(n.a)(r,c({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"autofield-algorithm"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#autofield-algorithm"}),"#"),Object(n.a)("inlineCode",{parentName:"h2"},"AutoField")," algorithm"),Object(n.a)("pre",{className:"language-js"},Object(n.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"let")," component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"component"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword nil"}),"undefined"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"allowedValues"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"checkboxes")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"&&")," props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"fieldType")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"!==")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Array"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"RadioField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"else")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"SelectField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"else")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"switch")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"fieldType"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Date"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"DateField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Array"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ListField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Number"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NumField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Object"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"String"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"case")," ",Object(n.a)("span",c({parentName:"code"},{className:"token known-class-name class-name"}),"Boolean"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        component ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"BoolField"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"break"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"invariant"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"component",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token string"}),"'Unsupported field type: %s'"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," props",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token property-access"}),"fieldType"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"toString"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"guaranteed-props"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#guaranteed-props"}),"#"),"Guaranteed props"),Object(n.a)("p",null,Object(n.a)("strong",{parentName:"p"},"Note:")," These are ",Object(n.a)("strong",{parentName:"p"},"not")," the only props that a field will receive - these are guaranteed for all fields created with ",Object(n.a)("inlineCode",{parentName:"p"},"connectField")," helper."),Object(n.a)("table",null,Object(n.a)("thead",{parentName:"table"},Object(n.a)("tr",{parentName:"thead"},Object(n.a)("th",c({parentName:"tr"},{align:"center"}),"Name"),Object(n.a)("th",c({parentName:"tr"},{align:"center"}),"Type"),Object(n.a)("th",c({parentName:"tr"},{align:"center"}),"Description"))),Object(n.a)("tbody",{parentName:"table"},Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"changed")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"bool")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Has field changed?")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"disabled")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"bool")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Is field disabled?")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"error")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"object")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field scoped part of validation error.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"errorMessage")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field scoped validation error message.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"field")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"object")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field definition from schema.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"fields")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"arrayOf(string)")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Subfields names.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"fieldType")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"func")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field type.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"findError")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"func(name)")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Request another field error.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"findField")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"func(name)")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Request another field field.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"findValue")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"func(name)")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Request another field value.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"id")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field id - given or random.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"label")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field label.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"name")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field name.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"onChange")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"func(value, [name])")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Change field value.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"parent")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"object")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Parent field props.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"placeholder")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"string")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field placeholder.")),Object(n.a)("tr",{parentName:"tbody"},Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"value")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),Object(n.a)("inlineCode",{parentName:"td"},"any")),Object(n.a)("td",c({parentName:"tr"},{align:"center"}),"Field value.")))),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"props-propagation"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#props-propagation"}),"#"),"Props propagation"),Object(n.a)("p",null,"Few props propagate in a very special way. These are ",Object(n.a)("inlineCode",{parentName:"p"},"label"),", ",Object(n.a)("inlineCode",{parentName:"p"},"placeholder")," and ",Object(n.a)("inlineCode",{parentName:"p"},"disabled"),"."),Object(n.a)("p",null,Object(n.a)("strong",{parentName:"p"},"Example:")),Object(n.a)("pre",{className:"language-js"},Object(n.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"                    ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// default label | no      placeholder"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," label",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"Text"')," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"       ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// custom  label | no      placeholder"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," label",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token boolean"}),"false"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"      ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// no      label | no      placeholder"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," placeholder ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"        ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// default label | default placeholder"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," placeholder",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"Text"')," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// default label | custom  placeholder"),"\n\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField")," label",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token keyword null nil"}),"null"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// null = no label but the children have their labels"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField")," label",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token boolean"}),"false"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// false = no label and the children have no labels"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ListField")," name",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"authors"')," disabled",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"          ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// Additions are disabled..."),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ListItemField")," name",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"$"')," disabled",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"        ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// ...deletion too"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField")," disabled",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token boolean"}),"false"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," name",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'""'),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// ...but editing is not."),"\n            ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"TextField")," name",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"name"')," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n            ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NumField"),"  name",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'"age"')," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n        ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"NestField"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ListItemField"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(n.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ListField"),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n")),Object(n.a)("p",null,Object(n.a)("strong",{parentName:"p"},"Note:")," ",Object(n.a)("inlineCode",{parentName:"p"},"label"),", ",Object(n.a)("inlineCode",{parentName:"p"},"placeholder")," and ",Object(n.a)("inlineCode",{parentName:"p"},"disabled")," are cast to ",Object(n.a)("inlineCode",{parentName:"p"},"Boolean")," before being passed to nested fields."))}m.isMDXComponent=!0}}]);