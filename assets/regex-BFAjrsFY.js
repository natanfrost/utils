import{g as d}from"./index-BgRipVM6.js";function f(r,s){for(var t=0;t<s.length;t++){const a=s[t];if(typeof a!="string"&&!Array.isArray(a)){for(const e in a)if(e!=="default"&&!(e in r)){const n=Object.getOwnPropertyDescriptor(a,e);n&&Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>a[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,c;function x(){if(c)return i;c=1,i=r,r.displayName="regex",r.aliases=[];function r(s){(function(t){var a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,n={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},l={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},o="(?:[^\\\\-]|"+e.source+")",g=RegExp(o+"-"+o),p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:g,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":a,"char-set":l,escape:e}},"special-escape":a,"char-set":n,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":p}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":p}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(s)}return i}var u=x();const h=d(u),b=f({__proto__:null,default:h},[u]);export{b as r};
