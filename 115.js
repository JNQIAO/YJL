// ==UserScript==
// @author       T3rry
// @name         115转存助手
// @namespace    Fake115Upload
// @version      2.4.0
// @description  115文件转存
// @match        https://115.com/*

// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand

// @include      http*://*.115.com/*
// @connect      proapi.115.com
// @connect      webapi.115.com
// @connect      115.com
// @connect      *

// @require      https://cdn.bootcss.com/jsSHA/2.3.1/sha1.js
// @require      https://greasyfork.org/scripts/5392-waitforkeyelements/code/WaitForKeyElements.js?version=115012
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/node-forge@0.10.0/dist/forge.min.js
// @require      https://gitee.com/zxf10608/js/raw/master/115js/base64_v1.0.js
// @require      https://gitee.com/zxf10608/js/raw/master/115js/115decode.js
// @require      https://gitee.com/zxf10608/js/raw/master/GM_config_zh-CN.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@8

// @run-at       document-start
// @compatible   Chrome
// @license      GPL License
// ==/UserScript==

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(z(){\'77 78\';y n,1O,1P,2C,2D,1E,1F;y o="|";y p="79/5.0 (7a 7b 10.0; 7c) 7d/55.36 (7e, 7f 7g) 7h/83.0.7i.61 7j/55.36 2Z/23.9.3.6";7.2E=1c.2E;z 56(){57();58();59(".5a-7k",5b);59("#5c.7l-7m-7n:7o(.7p-7q)",5d)}z 58(){7r(\'\\3Y\\3Z\',5e);z 5e(){G.7s()};G.7t({7u:\'30\',1a:\'C\\B\\A\\K\\L\\3Y\\3Z\',7v:1Q,7w:\'5f\',7x:\'#30 {7y-7z: 7A} #30 .5g {7B-5h: 7C} #30 .7D {5i-2F: 10%; 5i-2G: 10%;} #30 .7E {7F: 2F; 7G: 7H; 5h: -31;}\',7I:{7J:\'7K\',7L:\'7M\',7N:\'7O\',},7P:{13:{41:[\'\\7Q\\32\\3Y\\3Z\'],20:\'\\2p\\7R\',2q:\'2G\',M:\'33\',21:N},1d:{20:\'\\B\\A\\F\\I\\1R\\1G\\1H\\7S\\7T\\O\\P\\7U\',M:\'1r\',21:\'0\'},42:{41:[\'\\Z\\U\\F\\I\'],20:\'\\Z\\U\\3n\\5j\\5k\\5l(5m)\',2q:\'2F\',M:\'5n 5o\',21:\'34\',},43:{20:\'\\Z\\U\\B\\A\\F\\I\\35\\7V\\2r\\A\\44\\F\',2q:\'2G\',M:\'33\',21:N},45:{20:\'\\7W\\32\\5p\\46\\7X-3o\',2q:\'2G\',M:\'33\',21:N},37:{20:\'47-3o\',M:\'5q\',21:\'\'},48:{41:[\'\\1R\\1G\\F\\I\'],20:\'\\1R\\1G\\3n\\5j\\5k\\5l(5m)\',2q:\'2F\',M:\'5n 5o\',21:\'50\',},5r:{20:\'\\7Y\\7Z\\35\\3p\\O\\P\\1g\',2q:\'2G\',M:\'33\',21:1Q},49:{20:\'\\4a\\5s\\1R\\1G\\1m\\1n\\1H\\O\\P\\3p\',2q:\'2G\',M:\'33\',21:N}}})}z 1S(a){u(a==0){a=80*(5t.81(5t.82()*(11-4))+4)}D 1h 2s(5u=>84(5u,a))}z 2H(b,c,d){u(!d)d=\'38/85-86\';y a=1c.1I(\'a\');y e=1h 87([c],{\'M\':d});a.5v=7.88.89(e);a.4b=b;a.4c()}z 39(){7.12=[];7.4d=0;7.1s=[];7.3a=0;7.2t=0;7.1q=0;7.16=0;7.17=0;7.1J="";7.1w=0;7.3b="";7.3q="";7.3r=0;7.1i=0;7.22=[]}z 5d(){u(1c.8a(\'8b\')==2c&&4e.3c.1e(\'5f=4f\')==-1&&4e.3c.1e(\'8c\')==-1&&4e.3c.1e(\'ac=3c\')==-1){y a=1c.1I(\'a\');a.2d(\'3s\',\'8d 5w-5g 5w-4g\');a.2d(\'5v\',\'5x:;\');y i=1c.1I(\'i\');i.2d(\'3s\',\'4h-4i 4j-4b\');y b=1c.1I(\'4k\');b.1x=\'\\B\\A\\F\\I\';a.1T(i);a.1T(b);$(\'#5c #8e\').8f(a);a.2I=()=>{3t()}}}z 3t(){y b=4l.R>0&&4l[0]!==1j?4l[0]:\'\';Q.1o({1a:\'\\3n\\8g\\1G\\B\\A\\F\\I\',5y:\'5q\',8h:b,8i:1Q,8j:\'[\\8k\\8l/Y]\',8m:\'\\4m\\46\',8n:\'\\U\\8o\',5z:z 5z(a){u(!a){H.18(\'[C\\B\\A\\K\\L]\\B\\A\\F\\I\\3u\\5A\\3v\\5B\\V\');D\'\\F\\I\\3u\\5A\\3v\\5B\'}n=2u.1y(a);u(1t(n)==\'1j\'||n==N){H.18(\'[C\\B\\A\\K\\L]\\5C\\5D\\5E\\1u\\2v\\4m\\1H\\B\\A\\F\\I\\V\');D\'\\5C\\5D\\5E\\1u\\2v\\4m\\1H\\F\\I\'}},1b:z 1b(){5F()}}).25(z(a){u(a.2e){26(\'M\',5G(a.2e));u(14(\'M\')==\'2f\'){5H(a.2e)}E u(14(\'M\')==\'Y\'){5I(a.2e)}}E{7.1d=-1}})}z 5J(){8p.7.8q.8r.8s(z(t){u(t.R){y e=t[0],a=(e.3w,e.W);7.1d=a;H.T(\'[C\\B\\A\\K\\L]\\5p\\46\\8t\\1R\\1G\\O\\P\\1g\\S\'+e.5K+\'(\'+a+\')\')}},{1a:"\\3x\\3y\\8u\\2r\\A\\1H\\3z\\3A",8v:1,5L:1,8w:"\\2r\\A\\1u\\8x\\8y",8z:1})}z 5H(e){39();u(1t(7.1d)==\'1j\'||7.1d==\'-1\'){y f=G.J(\'1d\');7.3d=G.J(\'1d\')}E{y f=7.1d;7.3d=7.1d}u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\B\\A\\F\\I\\4n\\5M\\1R\\1G\\5N\\S\'+f)}7.12=e.4o(/(\\r|\\n)$/8A,"").19(/\\r?\\n/);7.1q=7.12.R;Q.1o({1a:\'\\1R\\1G\\B\\A\\F\\I\\2J\',2K:N,2L:N,2w:\'<p>\\2v\\27\\B\\A\\3e <1O>0</1O>/\'+7.12.R+\' \\2M\\F\\I</p><1p/><p><1P></1P></p>\',1b:2N z 1b(){Q.2O();y a=Q.2P();u(a){1O=a.1U(\'1O\');1P=a.1U(\'1P\');y b=3B(2N z(){u(7.1i<7.12.R){4p(7.12[7.1i],f);7.1i+=1}E{3C(b)}},G.J(\'48\'));2g(7.1w+7.17!=7.12.R){28 1S(50)}4q();u(G.J(\'49\')&&7.17!=0){y c=1h 5O(\'<1p/>\',\'g\');y d=7.1J.4o(c,\'\\n\');2H("8B.3D",d)}7.1d=-1}}})}z 5I(f){39();2h{Y.1y(f)}2i(1V){Q.1o({1a:\'\\F\\I\\3f\\3E\',1r:\'Y\\B\\A\\F\\I\\8C\\8D\\8E\\8F\\V\'}).25(z(a){3t()});D N}u(1t(Y.1y(f).29)==\'1j\'||1t(Y.1y(f).1f)==\'1j\'||1t(Y.1y(f).1v)==\'1j\'){Q.1o({1a:\'\\F\\I\\3f\\3E\',1r:\'Y\\B\\A\\F\\I\\5P\\5Q\\3f\\3E\\V\'}).25(z(a){3t()});D N}u(1t(7.1d)==\'1j\'||7.1d==\'-1\'){y g=G.J(\'1d\');7.3d=G.J(\'1d\')}E{y g=7.1d;7.3d=7.1d}u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\B\\A\\F\\I\\4n\\5M\\1R\\1G\\5N\\S\'+g)};7.1s=Y.1y(f);7.2t=f.2x().5R(/\\"29\\"/g).R;7.3a=2t;y h=f.2x().5R(/\\|/g).R/3;1s.1K=g;Q.1o({1a:\'\\2y\\2z\\O\\P\\1g\\2J\',2K:N,2L:N,2w:\'<p>\\2v\\27\\2y\\2z\\3e <2C>0</2C>/\'+2t+\' \\2M\\O\\P\\1g</p><1p/><p><2D></2D></p>\',1b:2N z 1b(){Q.2O();y e=Q.2P();u(e){2C=e.1U(\'2C\');2D=e.1U(\'2D\');4r([1s]);2g(7.4d!=h){28 1S(50)}7.1q=7.12.R;Q.1o({1a:\'\\1R\\1G\\B\\A\\F\\I\\2J\',2K:N,2L:N,2w:\'<p>\\2v\\27\\B\\A\\3e <1O>0</1O>/\'+7.12.R+\' \\2M\\F\\I</p><1p/><p><1P></1P></p>\',1b:2N z 1b(){Q.2O();y a=Q.2P();u(a){1O=a.1U(\'1O\');1P=a.1U(\'1P\');y b=3B(2N z(){u(7.1i<7.12.R){4p(7.12[7.1i].12,7.12[7.1i].W);7.1i+=1}E{3C(b)}},G.J(\'48\'));2g(7.1w+7.17!=7.12.R){28 1S(50)}4q();u(G.J(\'49\')&&7.17!=0){y c=1h 5O(\'<1p/>\',\'g\');y d=7.1J.4o(c,\'\\n\');2H(1s[0].3F+"8G.3D",d)}7.1d=-1}}})}}});D}z 5G(a){u(a.1e(\'\\"29\\"\')!=-1&&a.1e(\'\\"1f\\"\')!=-1&&a.1e(\'\\"1v\\"\')!=-1){D\'Y\'}E u(a.1e(o)!=-1){D\'2f\'}}z 2u(){}2u.1y=z 8H(a){y r;u(a.1e(\'\\"29\\"\')!=-1&&a.1e(\'\\"1f\\"\')!=-1&&a.1e(\'\\"29\\"\')!=-1){r=2u.4s(a)}E u(a.1e(o)!=-1){r=2u.4t(a)}D r};2u.4t=z 4t(d){y e=d.19(/\\r?\\n/);y f=1Q;e.1L(z(a){y b=a.8I();u(b==""){f=N}y c=b.19(\'|\');u(c.R!=4){f=N}E u(c[0]==\'\'||c[1]==\'\'||c[2]==\'\'||c[3]==\'\'||c[2].R!=40||c[3].R!=40){f=N}});D f};2u.4s=z 4s(a){y b=1Q;2h{Y.1y(a)}2i(1V){D N}u(1t(Y.1y(a).29)==\'1j\'||1t(Y.1y(a).1f)==\'1j\'||1t(Y.1y(a).1v)==\'1j\'){b=N}D b};z 5S(g,h){D 1h 2s(z(e,f){1W({1X:\'4u\',1z:\'3g://3h.C.1A/1f/8J\',3i:{\'4v-4w\':\'38/x-4x-4y-4z\'},1Y:\'1k\',2j:4A({1K:g,5K:h}),1M:z(d){u(d.15.5T){u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\1g\\S\'+h+\' \\2y\\2z\\1B\\2k\\V 8K = \'+d.15.W)}e(d.15.W)}E{u(G.J(\'5r\')){H.T(\'\\8L\\5U\\5U\\8M\\B\\A\\K\\L\\8N\\O\\P\\1g\\S\'+h+\' \\27\\35\\3z\\3A\\4a\\A\\27\\35\\3p\\O\\P\\1g\\V\\4n\\1R\\1G\\1u\\8O\\35\\3p\\O\\P\\1g\\V\');1W({1X:"2A",1z:"3g://3h.C.1A/1f/3c?3w=1&W=0&4B=0&4C=50&4D=1&o=5V&4E=1&5L=1&8P=0&3G=1&4F=&3H=1k&4G=0&8Q="+h+"&8R=1",1Y:\'1k\',1M:z(b){y c=b.15;c.2j.1L(z(a){u(a.1K==g){e(a.W)}})}})}E{Q.1o({1a:\'\\O\\P\\1g\\2y\\2z\\1m\\1n\',1r:\'\\O\\P\\1g\\S\'+h+\' \\2y\\2z\\1m\\1n\\V\\3I\\3J\\S\'+d.15.18,M:\'18\'});H.18(\'[C\\B\\A\\K\\L]\\O\\P\\1g\\S\'+h+\' \\2y\\2z\\1m\\1n\\V\\3I\\3J\\S\'+d.15.18)}}},5W:z(a){H.18(\'[C\\B\\A\\K\\L]\\O\\P\\1g\\S\'+h+\' \\2y\\2z\\1m\\1n\\V\');f(a)},})})}z 4A(a){y k,1N,v;1N=[];3K(k 3L a){v=4H(a[k]);1N.1C(k+"="+v)}D 1N.4I(\'&\')}z 5X(a){y k,1N,v;1N=[];3K(k 3L a){v=a[k];1N.1C((4H(k))+"="+(4H(v)))}D 1N.4I(\'&\')}z 5Y(a,b,c,d){y e,1N;e=1h 4J(\'4K-1\',\'5Z\');e.4L(""+a+b+b+c+"0");1N=e.4M(\'4N\');e=1h 4J(\'4K-1\',\'5Z\');e.4L(""+d+1N+"8S");D e.4M(\'4N\',{60:1Q})}z 4O(d){D 1h 2s(z(b,c){1W({1X:\'2A\',1z:\'3g://3h.C.1A/8T/J?W=\'+d,1Y:\'1k\',1M:z(a){u(a.1Z==2Q){u(a.15!=\'\'){b(a.15.8U)}}}})})}z 62(c){39();c[0].1e(\'|\')==-1?26(\'2a\',1Q):26(\'2a\',N);u(14(\'2a\')){4O(c[0]).25(z(b){7.16=b;7.1q=b;Q.1o({1a:\'\\Z\\U\\B\\A\\F\\I\\2J\',2K:N,2L:N,2w:\'<p>\\2v\\27\\Z\\U\\3e <1E>0</1E>/\'+7.16+\' \\2M\\F\\I</p><1p/><p><1F></1F></p>\',1b:z 1b(){Q.2O();y a=Q.2P();u(a){1E=a.1U(\'1E\');1F=a.1U(\'1F\');3M(c)}}})})}E{Q.1o({1a:\'\\Z\\U\\B\\A\\F\\I\\2J\',2K:N,2L:N,1b:z 1b(){Q.2O();y a=Q.2P();u(a){3M(c)}}})}}z 63(c){39();c[0].1e(\'|\')==-1?26(\'2a\',1Q):26(\'2a\',N);u(14(\'2a\')){4O(c[0]).25(z(b){7.16=b;7.1q=b;Q.1o({1a:\'\\Z\\U\\B\\A\\F\\I\\2J\',2K:N,2L:N,2w:\'<p>\\2v\\27\\Z\\U\\3e <1E>0</1E>/\'+7.16+\' \\2M\\F\\I</p><1p/><p><1F></1F></p>\',1b:z 1b(){Q.2O();y a=Q.2P();u(a){1E=a.1U(\'1E\');1F=a.1U(\'1F\');3M(c)}}})})}E{Q.1o({1a:\'\\5P\\5Q\\3f\\3E\',1r:\'\\8V\\2M\\O\\P\\1H\\B\\A\\F\\I\\Z\\U\\3n\\8W\\8X"\\Z\\64"\',M:\'18\'})}}2N z 3M(a){u(14(\'2a\')){u(14(\'M\')==\'Y\'){u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\3x\\3y\\1H\\Z\\U\\65\\66\\3v\\8Y\');H.T(\'[C\\B\\A\\K\\L]\\2p\\3j\\O\\P\\1g\\S\'+a[1]+\' \\8Z\\B\\A\\F\\I\\Z\\U\')}3k(a[0]);2g(7.22.R!=7.16){28 1S(50)}7.1s=67(7.1s);y b=3B(z(){u(7.1i<7.16){3N(7.22[7.1i].3O,7.22[7.1i].W);7.1i+=1}E{3C(b)}},G.J(\'42\'));2g(7.1w+7.17!=7.16){28 1S(50)}4P(7.1s[0]);y c=Y.90(7.1s[0]);u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\1g\\S\'+a[1]+\' Y\\B\\A\\F\\I\\Z\\U\\3P\\1B\\V\')}3l(c,\'1r\');u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]Y\\B\\A\\F\\I\\2b\\2R\\2B\\1u\\2S\\2T\\2U\\V\')}3Q();2H(a[1]+"68.1k",c)}E u(14(\'M\')==\'2f\'){u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\3x\\3y\\1H\\Z\\U\\65\\66\\3v\\91\');H.T(\'[C\\B\\A\\K\\L]\\2p\\3j\\O\\P\\1g\\S\'+a[1]+\' \\92\\B\\A\\F\\I\\Z\\U\')}3k(a[0]);2g(7.22.R!=7.16){28 1S(50)}y b=3B(z(){u(7.1i<7.16){3N(7.22[7.1i].3O,7.22[7.1i].W);7.1i+=1}E{3C(b)}},G.J(\'42\'));2g(7.1w+7.17!=7.16){28 1S(50)}u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\1g\\S\'+a[1]+\' 2f\\B\\A\\F\\I\\Z\\U\\3P\\1B\')}3l(7.3b,\'1r\');u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]2f\\B\\A\\F\\I\\2b\\2R\\2B\\1u\\2S\\2T\\2U\\V\')}3Q();2H(a[1]+"68.3D",7.3b)}u(G.J(\'43\')){u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\2p\\3j\\4a\\5s\\2r\\A\\44\\F\\93\\O\\P\\V\')}2H(a[1]+"94.95",7.3q)};D}E{u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\2p\\3j\\O\\P\\S\'+a[0].19("|")[0]+\' \\1H\\B\\A\\F\\I\\Z\\U\')}3N(a);28 1S(96);2g(7.3r!=0){28 1S(50)}u(G.J(\'43\')){y d=7.3q.19("\\",\\"")[1];y e=d.3R(0,d.R-2);3l(e,\'1r\');u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\44\\F\\2b\\2R\\2B\\1u\\2S\\2T\\2U\\V\'+e)}}3Q()}}z 4P(a){3K(y b 3L a){u(b===\'W\'||b===\'1K\')97 a[b];E u(b===\'1v\'&&a[b]!=\'\'){a[b].1L(69=>{4P(69)})}}}z 67(a){y b=[];y c=[];a.1L(1D=>{b[1D.W]=1D});a.1L(1D=>{y d=b[1D.1K];u(!d){c.1C(1D)}E{d.1v.1C(1D)}});D c}z 6a(a){2h{y b=/98-2E: .+;/g;y c=b.99(a)[0].19(\';\');y d=c[0].4Q(11)+"; 6b=6c, 4R 6d 9a 2V:2V:2V 6e;"+c[3]+";6f=.C.1A";1c.2E=d;6g();D d}2i(1V){D 2c}}z 6g(){y b=7.2E.19(\';\');b.1L(z(a){1c.2E=a+";6b=6c, 4R 6d 9b 2V:2V:2V 6e;;6f=.C.1A"})}z 3k(g){1W({1X:"2A",1z:"3g://3h.C.1A/1f?3w=1&W="+g+"&o=9c&4E=0&4B=0&4D=1&4C=6h&6i=&6j=&6k=0&3G=1&6l=1&4F=&3H=1k&M=&4f=&6m=&6n=&6o=&4G=",1Y:\'1k\',1M:z(e){u(e.1Z===2Q){y f=e.15;2h{u(14(\'M\')==\'Y\'){7.1s.1C({"W":f.W,"1K":f.2l[f.2l.R-1].1K,"29":f.2l[f.2l.R-1].3F,"1f":[],"1v":[]})}f.2j.1L(z(a){u(a.W!=g){3k(a.W)}E{y b=[a.n+\'|\'+a.s+\'|\'+a.6p,a.6q];7.22.1C({\'3O\':b,\'W\':g})}})}2i(1V){1W({1X:"2A",1z:"3g://9d.C.1A/3G/1f.6r?3w=1&W="+g+"&o=5V&4E=1&4B=0&4D=1&4C=6h&6i=&6j=&6k=0&3G=1&6l=1&4F=&3H=1k&M=&4f=&6m=&6n=&6o=&4G=0",1Y:\'1k\',1M:z(c){u(c.1Z===2Q){y d=c.15;2h{u(14(\'M\')==\'Y\'){7.1s.1C({"W":d.W,"1K":d.2l[d.2l.R-1].1K,"29":d.2l[d.2l.R-1].3F,"1f":[],"1v":[]})}d.2j.1L(z(a){u(a.W!=g){3k(a.W)}E{y b=[a.n+\'|\'+a.s+\'|\'+a.6p,a.6q];7.22.1C({\'3O\':b,\'W\':g})}})}2i(1V){H.18(1V)}}}})}}}})}z 6s(f,g,h,i){y j=g[0].19("|")[0];y k=2c;u(f!==1j){1W({1X:"2A",1z:f,3i:{"47-3o":G.J(\'45\')?(G.J(\'37\')!=\'\'?G.J(\'37\'):(2m.2n.1e(\'2Z/24\')==-1?2m.2n:p)):(2m.2n.1e(\'2Z/24\')==-1?2m.2n:p),"9e":"9f=0-9g","9h":h},1Y:\'9i\',1M:z(a){u(a.1Z===9j){k=a.15;2h{y b=1h 9k(k);y c=1h 4J(\'4K-1\',\'9l\');c.4L(b.4Q(0,9m*9n));y d=c.4M(\'4N\',{60:1Q});y e=\'C://\'+g[0]+\'|\'+d;u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\'+14(\'M\')+\'\\B\\A\\F\\I\\Z\\U\\1B\\2k\\S\'+g[0])}6t(e);u(14(\'2a\')){7.1q-=1;7.1w+=1;1E.1x=(7.16-7.1q).2x();1F.1x=3S((7.16-7.1q)/7.16*34)+"%";u(14(\'M\')==\'Y\'){3T(7.1s,i).1f.1C(e)}E u(14(\'M\')==\'2f\'){7.3b+=e+\'\\n\'}}E{3l(e,\'1r\');u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\B\\A\\F\\I\\2b\\2R\\2B\\1u\\2S\\2T\\2U\\V\')}}}2i(1V){7.17+=1;7.1J+=j+\'<1p/>\';H.18(1V)}}E{7.17+=1;7.1J+=j+\'<1p/>\';D}7.3r-=1}})}}z 6t(a){y b=a.19(\'|\')[0].3R(6);y c=a.19(\'|\')[2];y d=a.19(\'|\').4Q(2).4I(\'|\');u(2W.3U(\'2X\')==2c){2W.6u(\'2X\',d);u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\S\'+b+\' (6v=\'+c+\') \\2b\\6w\\2r\\A\\6x 6y！\')}}E{y e=4S(c);u(1t(e)==\'1j\'){y f=2W.3U(\'2X\').19(\',\');f.1C(d);2h{2W.6u(\'2X\',f.2x());u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\S\'+b+\' (6v=\'+c+\') \\2b\\6w\\2r\\A\\6x 6y！\')}}2i(18){H.18(\'[C\\B\\A\\K\\L]\\2r\\A\\9o 9p\\1m\\1n\\9q\\2b\\9r\\1u\\9s\\9t\\A\\4T\\9u\\2B\\V\')}}}}z 3T(a,b){u(!a 9v 9w){D 2c}3K(4U i 3L a){4U 1D=a[i];u(1D.W===b){D 1D}E{u(1D.1v){4U 2e=3T(1D.1v,b);u(2e){D 2e}}}}}z 3N(j,k){y l=4S(j[0].19(\'|\')[2]);u(l){l=\'C://\'+j[0]+\'|\'+l.19(\'|\')[1];u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\O\\P\\S\'+j[0].19(\'|\')[0]+\' \\6z\\U\\1u\\6A\\6B\\A\\4T\\1H\\B\\A\\F\\I\\V\')}u(14(\'2a\')){7.1q-=1;7.1w+=1;1E.1x=(7.16-7.1q).2x();1F.1x=3S((7.16-7.1q)/7.16*34)+"%";u(14(\'M\')==\'Y\'){3T(7.1s,k).1f.1C(l)}E u(14(\'M\')==\'2f\'){7.3b+=l+\'\\n\'}}E{3l(l,\'1r\');u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\B\\A\\F\\I\\2b\\2R\\2B\\1u\\2S\\2T\\2U\\V\')}}}E{y m=2c;1W({1X:"2A",1z:\'3m://3h.C.1A/1f/4b?6C=\'+j[1],3i:{"4V-9x":"  4W-4V, 4W-9y, 9z-9A=0, 9B-9C","9D":"4W-4V","9E":"0"},1Y:\'1k\',1M:z(d){u(d.1Z===2Q){m=d.15;7.3r+=1;y e=d.9F;y f=6a(e);y g=2c;u(f){g=f}2h{y h=j[1];y i=m.9G;6D(h,i).25(z(a){y b=a[0];y c=j[0].19("|")[0];7.3q+="\\""+c+"\\",\\""+b+"\\"\\n";6s(b,j,g,k)})}2i(1V){H.18(1V)}}E{D}}})}}z 4S(d){u(2W.3U(\'2X\')==2c){D}E{y e=2W.3U(\'2X\').19(\',\').9H(z(a,b,c){D a.19(\'|\')[0]==d});u(e==1j){D}E{D e}}}z 6D(i,j){D 1h 2s(z(e,f){y g=\'3m://6E.C.1A/6F/9I/9J?t=${1h 9K().9L()}\';y h=\'2j=\'+9M(\'{"6C":"\'+i+\'"}\');6G(g,h).25(z(a){u(a.5T){y b=9N(a.2j);y c=Y.1y(b);y d=c[j].1z.1z;e([d])}E{e([N,a.9O])}})})}z 6G(e,f,g){D 6H(f,g).25(z(d){D 1h 2s(z(b,c){1W({1X:\'4u\',2j:d,1z:e,1Y:\'1k\',3i:{"47-3o":G.J(\'45\')?(G.J(\'37\')!=\'\'?G.J(\'37\'):(2m.2n.1e(\'2Z/24\')==-1?2m.2n:p)):(2m.2n.1e(\'2Z/24\')==-1?2m.2n:p),"4v-4w":"38/x-4x-4y-4z; 6I=6J-8","9P":"38/1k, 1r/5x, */*; q=0.4R","9Q":"3m://C.1A","X-9R-9S":"9T"},1M:z(a){b(a.15)},5W:z(a){c(a)},})})})}z 6H(c,d){D 1h 2s(z(a,b){u(/^\\w+=/.9U(c)){a(c);D}})}z 4r(f){D 1h 2s(z(d,e){f.1L(z(c){5S(c.1K,c.29).25(z(b){7.3a-=1;2C.1x=(7.2t-7.3a).2x();2D.1x=3S((7.2t-7.3a)/7.2t*34)+"%";u(c.1f&&c.1f!=\'\'){c.1f.1L(z(a){7.12.1C({\'W\':b,\'12\':a});7.4d+=1})}u(c.1v&&c.1v!=\'\'){c.1v.1L(z(a){a.1K=b});4r(c.1v)}})})})}z 57(){u(1t(14(\'3V\'))==\'1j\'||1t(14(\'3W\'))==\'1j\'){1W({1X:"2A",1z:\'3m://6E.C.1A/6F/9V\',1Y:\'1k\',1M:z(a){u(a.1Z==2Q){26(\'3V\',a.15.3V);26(\'3W\',a.15.3W);H.T(\'[C\\B\\A\\K\\L]\\32\\4X\\4Y\\4Z\\6K\\U\\1B\\2k\\V\')}E{H.18(\'[C\\B\\A\\K\\L]\\32\\4X\\4Y\\4Z\\6K\\U\\1m\\1n\\V\')}}})}E{H.T(\'[C\\B\\A\\K\\L]\\6z\\U\\1u\\6A\\6B\\A\\4T\\1H\\32\\4X\\4Y\\4Z\\V\')}}z 4p(a,b){y c=a.19(\'|\');u(c[0].3R(0,6)=="C://"){c[0]=c[0].3R(6)}6L(14(\'3W\'),14(\'3V\'),c[0],c[1],c[2],c[3],b)}z 6L(b,c,d,e,f,g,h){y i=\'9W\'+h;1W({1X:\'4u\',1z:\'3m://9X.C.1A/3.0/9Y.6r?\'+5X({9Z:0,a0:0,a1:\'11.2.0\',3H:\'1k\',a2:5Y(c,f,i,b)}),2j:4A({a3:g,a4:f,a5:f,a6:\'11.2.0\',a7:d,a8:e,a9:\'\',aa:i,ab:c}),1Y:\'1k\',3i:{\'4v-4w\':\'38/x-4x-4y-4z;6I=6J-8\'},1M:z(a){7.1q-=1;1O.1x=(7.12.R-7.1q).2x();1P.1x=3S((7.12.R-7.1q)/7.12.R*34)+"%";u(a.1Z===2Q){u(a.15.1Z===2){7.1w+=1;u(G.J(\'13\')){H.T(\'[C\\B\\A\\K\\L]\\B\\A\\1B\\2k\\S\'+d+\' --> \'+h)}D 1Q}E u(a.15.1Z===1){7.17+=1;7.1J+=d+\' —— \\6M\\6N\\6O\\6P\\3u\\A\\27\\6Q\\O\\P<1p/>\';H.18(\'[C\\B\\A\\K\\L]\\B\\A\\1m\\1n\\S\'+d+\' --> \'+h+\' \\3I\\3J\\S\\6M\\6N\\6O\\6P\\3u\\A\\27\\6Q\\O\\P\');D N}E u(a.15.1Z===0){7.17+=1;7.1J+=d+\' —— \'+a.15.6R+\'<1p/>\';H.18(\'[C\\B\\A\\K\\L]\\B\\A\\1m\\1n\\S\'+d+\' --> \'+h+\' \\3I\\3J\\S\'+a.15.6R);D N}E{7.17+=1;7.1J+=d+\'<1p/>\';H.18(\'[C\\B\\A\\K\\L]\\B\\A\\1m\\1n\\S\'+d+\' --> \'+h);D N}}E{7.17+=1;7.1J+=d+\'<1p/>\';H.18(\'[C\\B\\A\\K\\L]\\B\\A\\1m\\1n\\S\'+d+\' --> \'+h);D N}}})}z 3Q(){u(7.1w+7.17==7.16){u(7.17==0){Q.1o({1a:\'\\Z\\U\\3P\\1B\',1r:\'\\B\\A\\F\\I\\Z\\U\\1B\\2k\\V\\2b\\2R\\2B\\1u\\2S\\2T\\2U\',M:\'6S\'})}E{Q.1o({1a:\'\\6T\\6U\\O\\P\\Z\\U\\1m\\1n\',M:\'6V\',2w:\'<p>\\1B\\2k:\'+7.1w+\'&1l;&1l;&1l;&1l;\\1m\\1n:\'+7.17+\'&1l;&1l;&1l;&1l;\\6W\\6X:\'+7.16+\'</p><1p/><p 6Y="2F">\'+7.1J+\'</p>\'})}}}z 4q(){u(7.1w+7.17==7.12.R){u(7.17==0){Q.1o({1a:\'\\B\\A\\3P\\1B\',1r:\'\\ad\\ae\\F\\I\\B\\A\\1B\\2k\\V\',M:\'6S\',1b:z 1b(){51()}})}E{Q.1o({1a:\'\\6T\\6U\\O\\P\\B\\A\\1m\\1n\',M:\'6V\',2w:\'<p>\\1B\\2k:\'+7.1w+\'&1l;&1l;&1l;&1l;\\1m\\1n:\'+7.17+\'&1l;&1l;&1l;&1l;\\6W\\6X:\'+7.12.R+\'</p><1p/><p 6Y="2F">\'+7.1J+\'</p>\',1b:z 1b(){51()}})}}}z 6Z(a){y b=(a.2Y("af"));y c=a.2Y(\'1a\');u(b=="0"){y d=a.2Y(\'ag\');D[d,c]}E{y e=a.2Y(\'ah\');y f=a.2Y(\'12\');y g=a.2Y(\'ai\');D[c+\'|\'+e+\'|\'+f,g]}}z 70(a){aj.ak.al.am.an(1,a,0)}z 71(b){y c=b.1f[0];u(1t(c)!=\'1j\'){H.T(\'[C\\B\\A\\K\\L]\\2p\\3j\\O\\P\\B\\A\\S\'+c.3F);y d=1h ao();d.ap(c);d.1M=z(e){y a=d.aq;Q.ar().2e=a;$(\'.72-as.72-at\')[2].4c()}}E{H.18(\'[C\\B\\A\\K\\L]\\O\\P\\B\\A\\au\\av\\aw\\3f\\V\')}}z 5b(a){y b=a[0].ax;y c=6Z(b);y d=1c.1I(\'a\');y e=1c.1I(\'i\');e.2d(\'3s\',\'4h-4i 4j-4g\');y f=1c.1I(\'4k\');y g=1c.73("\\Z\\64");f.1T(g);d.1T(e);d.1T(f);a[0].1T(d);d.2I=()=>{26(\'M\',\'2f\');62(c)};y h=1c.1I(\'a\');y i=1c.1I(\'i\');i.2d(\'3s\',\'4h-4i 4j-4g\');y j=1c.1I(\'4k\');y k=1c.73("\\Z\\ay");j.1T(k);h.1T(i);h.1T(j);a[0].1T(h);h.2I=()=>{26(\'M\',\'Y\');63(c)}}z 5F(){y a=Q.74();y b=a.52();b.1x=\'\\3x\\3y\\3z\\3A\';b.2o.53=\'#54\';b.2o.75=\'31\';b.2o.76=\'31\';b.2I=()=>{5J()};a.3X(b);y c=a.52();c.1x=\'\\O\\P\\B\\A\';c.2o.53=\'#54\';c.2o.75=\'31\';c.2o.76=\'31\';a.3X(c);y d=1c.1I(\'5y\');d.2d(\'M\',\'5a\');d.2d(\'az\',\'.3D, .1k\');d.2d(\'2o\',\'aA: aB\');a.3X(d);c.2I=()=>{d.4c()};d.aC=()=>{71(d)}}z 51(){y a=Q.74();y b=a.52();b.1x=\'\\aD\\2p\\3z\\3A\';b.2o.53=\'#54\';b.2I=()=>{Q.aE();70(7.3d)};a.3X(b)}56()})();',62,661,'|||||||window|||||||||||||||||||||||if||||var|function|u5b58|u8f6c|115|return|else|u94fe|GM_config|console|u63a5|get|u52a9|u624b|type|false|u6587|u4ef6|Swal|length|uff1a|log|u53d6|uff01|cid||JSON|u63d0|||sha1|debug|GM_getValue|response|sha1_total_num|sha1_fail_num|error|split|title|onBeforeOpen|document|root|indexOf|files|u5939|new|counter|undefined|json|nbsp|u5931|u8d25|fire|br|sha1_count|text|folders|typeof|u5230|dirs|sha1_success_num|textContent|parse|url|com|u6210|push|item|extract_num|extract_prog|u5165|u7684|createElement|sha1_fail_info|pid|forEach|onload|tmp|down_num|down_prog|true|u5bfc|Delay|appendChild|querySelector|err|GM_xmlhttpRequest|method|responseType|status|label|default|temp|||then|GM_setValue|u5728|await|dir_name|is_dir|u5df2|null|setAttribute|value|TXT|while|try|catch|data|u529f|path|navigator|userAgent|style|u5f00|labelPos|u4fdd|Promise|folders_length|LinkParser|u6b63|html|toString|u521b|u5efa|GET|u5236|folder_num|folder_prog|cookie|left|right|Download_File|onclick|u4e2d|showCloseButton|allowOutsideClick|u4e2a|async|showLoading|getContent|200|u590d|u526a|u8d34|u677f|00|localStorage|Local_115sha1|getAttribute|115Browser|TranSave_Cfg|1em|u7528|checkbox|100|u540c||ua|application|Reset_Para|folders_count|sha1linkText|search|root_open|u7b2c|u9519|https|webapi|headers|u59cb|GetFilesByCID|GM_setClipboard|http|u8bf7|Agent|u540d|directlinkText|reqcount|class|GetInfo|u4e0d|u4e3a|aid|u9009|u62e9|u76ee|u5f55|setInterval|clearInterval|txt|u8bef|name|natsort|format|u539f|u56e0|for|in|ExtractSha1|GetShareLink|info|u5b8c|Show_ExtractSha1_Result|substring|parseInt|GetFolderByCID|getItem|user_id|userkey|before|u8bbe|u7f6e||section|extract_interval|directlink|u76f4|custom_ua|u5b9a|User|download_interval|fail_file|u4e0b|download|click|sha1_folders_count|location|star|upload|icon|operate|ifo|span|arguments|u786e|u5c06|replace|DownLoadFileFromSha1Links|Show_DownloadSha1_Result|Parse_JSON|parseJSON|parseTXT|POST|Content|Type|www|form|urlencoded|PostData|offset|limit|show_dir|asc|source|fc_mix|encodeURIComponent|join|jsSHA|SHA|update|getHash|HEX|Get_File_Num|CleanJson|slice|01|Check115Sha1LocalExist|u50a8|let|cache|no|u6237|u4fe1|u606f||AddEndLinkBtn|cloneNode|backgroundColor|ECAE3C|537|Init|Get_User_Info|Config|waitForKeyElements|file|AddExtractSHA1Btn|js_top_panel_box|AddDownloadSHA1Btn|opencfg|tab|inline|bottom|margin|u6c42|u95f4|u9694|ms|unsigned|int|u81ea|textarea|merge_folder|u8f7d|Math|resolve|href|btn|javascript|input|inputValidator|u80fd|u7a7a|u672a|u8bc6|u522b|AddStartLinkBtn|CheckLinkFormat|DownloadSha1_TXT|DownloadSha1_JSON|Select_Folder|cname|nf|u88ab|u81f3|RegExp|u683c|u5f0f|match|Create_Folder|state|u0031|file_name|onerror|UrlData|GetSig|TEXT|outputUpper||ExtractSha1_TXT_PreProcess|ExtractSha1_JSON_PreProcess|u53d6TXT|u7c7b|u578b|GetFoldersTree|_115sha1|children_obj|DeleteCookie|expires|Thu|Jan|UTC|domain|RenewCookie|1150|code|scid|snap|record_open_time|is_share|suffix|custom_order|sha|pc|php|CreateShareLink|Save115sha1Local|setItem|SHA1|u7ecf|u5230Local|Storage|u8bfb|u672c|u5730|pickcode|DirectLink|proapi|app|getData|getSign|charset|UTF|u83b7|DownFileBySha1JS|u670d|u52a1|u5668|u4e0a|u8be5|statusmsg|success|u90e8|u5206|warning|u603b|u8ba1|align|GetSha1LinkByliNode|Open_Folder|DownloadFromFile|swal2|createTextNode|getConfirmButton|paddingLeft|paddingRight|use|strict|Mozilla|Windows|NT|WOW64|AppleWebKit|KHTML|like|Gecko|Chrome|4103|Safari|opr|tv|lt|noflex|not|with|btmline|GM_registerMenuCommand|open|init|id|isTabs|skin|css|background|color|LightCyan|padding|0px|config_var|reset_holder|float|position|relative|frameStyle|height|380px|width|340px|zIndex|2147483648|fields|u901a|u542fDebug|u9ed8|u8ba4|u5939CID|u65f6|u4f7f|u4e49User|u5408|u5e76|1000|floor|random||setTimeout|octet|stream|Blob|URL|createObjectURL|getElementById|downloadsha1btn|rb|button|js_recent_view_btn|after|u8f93|inputValue|showCancelButton|inputPlaceholder|u652f|u6301TXT|confirmButtonText|cancelButtonText|u6d88|top|Core|FileSelectDG|Open|u4e49|u8981|select|btn_txt|u8fd9|u91cc|select_one|gi|FailFile|u65e0|u6cd5|u89e3|u6790|_FailFile|generalLinkParse|trim|add|CID|u005b|u0035|u005d|u6b64|qid|search_value|fc|000000|category|count|u5355|u70b9|u51fb|uff1aJSON|u7684JSON|stringify|uff1aTXT|u7684TXT|u7684csv|_DirectLink|csv|2000|delete|set|exec|1970|2100|user_ptime|aps|Range|bytes|154112|Cookie|arraybuffer|206|Uint8Array|ARRAYBUFFER|128|1024|u5230local|storage|uff0c|u8fbe|u6700|u5927|u9650|instanceof|Array|control|store|max|age|must|revalidate|Pragma|Expires|responseHeaders|file_id|find|chrome|downurl|Date|getTime|m115_encode|m115_decode|msg|Accept|Origin|Requested|With|XMLHttpRequest|test|uploadinfo|U_1_|uplb|initupload|isp|appid|appversion|sig|preid|fileid|quickid|app_ver|filename|filesize|exif|target|userid||u6240|u6709|file_type|cate_id|file_size|pick_code|TOP|Ext|CACHE|FileMain|GotoDir|FileReader|readAsText|result|getInput|confirm|styled|u8fc7|u7a0b|u51fa|parentNode|u53d6JSON|accept|display|none|onchange|u6253|close'.split('|'),0,{}))