/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","2b674cf4d1bfb1ff161e2853ab32e5f9"],["/archives/2019/04/index.html","4401fad475bdc288b35ae0954bc2c4a2"],["/archives/2019/05/index.html","c1637917575f4e076b7ebf215ec7fb53"],["/archives/2019/06/index.html","d9a132fd63f529db83ab6ac0a0ecd6ce"],["/archives/2019/07/index.html","f0ac458a662be15648fff38c5066eb79"],["/archives/2019/index.html","d959ff77a3534c003e36dfa4476cddf1"],["/archives/2019/page/2/index.html","72ab08cd291c6bad3fea9515ed3cd56b"],["/archives/2020/03/index.html","0bd973fd6b56bd47e5d4e3360b16c464"],["/archives/2020/04/index.html","88f022fc55d3c70a0fa6019634a3004e"],["/archives/2020/07/index.html","ad7c5a33a1bb1c61a4daf0bbc667d705"],["/archives/2020/07/page/2/index.html","b7de1545eb0b3da3549095abafe8296d"],["/archives/2020/08/index.html","646255018e829876518eb0354d670358"],["/archives/2020/index.html","f18a555a4a1a3c8e90e424539007f7e3"],["/archives/2020/page/2/index.html","d57b2ec6503c84a4c64b85911a091985"],["/archives/2020/page/3/index.html","641a21f02bca9182815b77184229e996"],["/archives/2021/02/index.html","fe069f3cf749d3fddcee5ca08c675c24"],["/archives/2021/06/index.html","00ec6a791887f171c4cfeedb07dcf46a"],["/archives/2021/07/index.html","00b658c2a1834c403a04071e32ca0770"],["/archives/2021/07/page/2/index.html","646415ae7d8d268cadd0c8b9d4529c0f"],["/archives/2021/07/page/3/index.html","a0535714be43a1025b455a61a5836444"],["/archives/2021/index.html","d80df419f73c7fe363b4b8d923f7e7be"],["/archives/2021/page/2/index.html","b6490b5d76b9c023f51ae510f9ec1512"],["/archives/2021/page/3/index.html","9b41bd2b7c67cc3a75412dd4b843ccbf"],["/archives/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/2/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/3/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/4/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/5/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/6/index.html","ec962d7685b48a5b6cf79f888a76dbe4"],["/archives/page/7/index.html","804864512349aa337308716061a9dda2"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/408/NET/index.html","d29f8c38fda75357f0d62d986f2efedf"],["/categories/408/index.html","a547861f3b6cca71eae25e07bfcd2595"],["/categories/C-Language/index.html","c7b8d45fda3e03ff4279ffb8442e8481"],["/categories/DataStruction/index.html","da32bd35bcc497b7d3af162884502611"],["/categories/Electron/index.html","2bdb41412e5cc922324bd58f1f3059a1"],["/categories/Git/index.html","d5ac44152f6502f56f20de85a4813142"],["/categories/Golang/Adavanced/index.html","96801e02361219c3b0b6e967f2b795c9"],["/categories/Golang/Basic/index.html","9794bef5b854f26162b2c4f5f01305bc"],["/categories/Golang/Basic/page/2/index.html","7a8ec45664cdc87380f87cf4dcea654e"],["/categories/Golang/Framework/index.html","53247791351b607e6488066d93ef3bd2"],["/categories/Golang/index.html","8b97fa6027ed33c500bf782967af8153"],["/categories/Golang/nil/index.html","eff4edc6bfa745a1ee7389fa1b7fd0b4"],["/categories/Golang/page/2/index.html","7d8ded7792960fb24774bdb39730c4ec"],["/categories/HEXO/index.html","63145bafd481f4e4bf8a8f88e56dc77f"],["/categories/Java/SSM/index.html","a065ec65aa4c19c8f030b8a764fd6393"],["/categories/Java/index.html","25ecd2c07e91c8df1432de2e763b7124"],["/categories/LeetCode/index.html","9cdc99215fa327e95b573fb72ab6cc7b"],["/categories/Note/index.html","8d9c14968ba1da762418ed74ffa927eb"],["/categories/Other/index.html","27d7b97455e6a11a10369067678411e2"],["/categories/Python/OPP/index.html","207e6ca8b59696a4e904a2525ae004bf"],["/categories/Python/index.html","f561693afee62441ea717bcbb8c52c23"],["/categories/Python/page/2/index.html","7b6ec6f9e952b02886523d9a253cc954"],["/categories/Python/内置库/index.html","68fd160f305e312bddc9137ae195e00f"],["/categories/Python/基础/index.html","b320584b08426f3cac0012f753635dd8"],["/categories/Python/爬虫/index.html","7dece8a61e3e50a42edf78681a1753de"],["/categories/Python/爬虫/基础/index.html","7810b632544dd69be47bb39b9f7d17e9"],["/categories/Python/进阶/IO/index.html","683ffa3206bb3405447ff1c755333dec"],["/categories/Python/进阶/index.html","13d9ee5aa642b92989188889325c7395"],["/categories/Python/进阶/进程、线程/index.html","e30cfc47ec9cbd61ab1aa61ea03d166a"],["/categories/Python/进阶/错误与调试/index.html","21cfed5e3cf3198d04bc3a2dd39838ab"],["/categories/Python/高级特性/index.html","c0f54a0c49aa9ca38bc50470783f4021"],["/categories/RSA/index.html","1e72568375d8c8a93f0ecc399448213f"],["/categories/Vue/index.html","2fc87ef8808f40bc8dfe5f6ba30f198b"],["/categories/index.html","21903725facfcb7c4aa5f6ec3c581a4a"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","b24a99909a184a8f888bfafe55a8af55"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","3afdcbe237b46df6f3f4bfea889180a9"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","cf38727ad7f4edaf217b38f74abec61b"],["/page/11/index.html","33d72218b5990bdcba68e2b8c267014f"],["/page/2/index.html","de885c06676753e931a75009ec137516"],["/page/3/index.html","09c6a5e4e5aacb8241543e0faef7a95e"],["/page/4/index.html","e6ac0b14f818c2fb73896e0ebee98ec4"],["/page/5/index.html","f2d41bcdd69b2ea85321c271c25f5552"],["/page/6/index.html","4d9ec4c54a346472235ae5469a5f109d"],["/page/7/index.html","d44c0681da70d8621f8c7272c20b5966"],["/page/8/index.html","32d6ae40c5ae93bee91147353670804b"],["/page/9/index.html","26ce6d80fa93d5f674c3ecf6fda9e94e"],["/posts/11720.html","aba927bc7b6b405a0d599eda2f9e1969"],["/posts/12119.html","1c4c25b91eabc5f98779de741e0ea081"],["/posts/13406.html","cfecfd02f03abf8ac25202b9cdbbcd96"],["/posts/13460.html","9f40b3eb98882e2b2201ed1572bfcab2"],["/posts/15463.html","f822c0dd3956cb528b2a4c358aacf950"],["/posts/16107.html","a7cc27ad699c41859c147250009dc8d9"],["/posts/17036.html","74c9f21a24fd5e13acc66c1c12aa44b3"],["/posts/17751.html","28c3da17470c8f098306c0e08cf7e8c4"],["/posts/18012.html","17de978768ffeac514566394b83c66fe"],["/posts/18591.html","b5f9e06d39f696bff3c1f7d420950fbc"],["/posts/1937010b.html","24cd89a95cfae4ebed72a54676c8f504"],["/posts/19751.html","2f8f9e4baa5136ba90ef8dcd4e78a378"],["/posts/19a13983.html","fdbd2f4e59dddd280d3c6353c00f62c8"],["/posts/1aa7bff2.html","7661b6a6249cf321152e2289b7de29bc"],["/posts/21668.html","17b9fc86fc79b0aeb90fd490fb379dd4"],["/posts/22089.html","8ab21fff76bf8b6a6d0ce8ce4a5834da"],["/posts/237b56c2.html","8c619f37fc5a50696bf3371a19d4a483"],["/posts/24435.html","b692a67b4a46b0e124b2ecb41da92269"],["/posts/25425.html","94bff5d438297d660d3c692233a1fd16"],["/posts/25647.html","23f03bf93dd29e0de7b1894cf70c063c"],["/posts/25754.html","c92b021cbd9b8abf964361841bd8115e"],["/posts/28223.html","6400a4e998a5d493284bd6210852e908"],["/posts/28995.html","34bc41e7743a04b7bcb5a40b2e144e66"],["/posts/29925.html","8a1c0d0abc5b8a0f704a0611e8ad453e"],["/posts/2c39f343.html","ab78e109e73558cc698703e1f0a84201"],["/posts/2c48000c.html","727f8b95070217049e63e2c8e8201fd2"],["/posts/31044.html","2dc6df8ac4a4ac08b159224b17ca51cb"],["/posts/32620.html","00be29c0377a5162da28ea3b6f4a8ecb"],["/posts/33205.html","31743bd615834e556764f51b1a987406"],["/posts/33364.html","d59b75adfc2f05e19314df5cfa6be97e"],["/posts/34681.html","bcdc417514b5039a960fe68bf750853f"],["/posts/34736.html","932d4025f04f79925557a4a26763ec1c"],["/posts/35371.html","905d9fe9d5819885efb07b6b8f548537"],["/posts/37243.html","dd7e31bdcdf10e62872551980169f475"],["/posts/37390.html","a3a9a9a6ccd2aa6582c3a691042813dc"],["/posts/37710.html","76c74b5d26400c5ef4296f2bcedbb6be"],["/posts/38014.html","ac8648b328206c18ca4339621d7a0ef4"],["/posts/3844.html","41c0604e4c879cfb906caa11cd8caa59"],["/posts/3887.html","fe78db641a6746d0fcdfb18e2bb6d32e"],["/posts/38965.html","af022f564b9fdd61371640538289f777"],["/posts/39690.html","e346ccf227289251403c4c68c69fe1fe"],["/posts/39743.html","bb7befd1232fa2286075c0cf34739138"],["/posts/41079.html","f40cf599bb78c61da69794564ceb19bc"],["/posts/41307.html","276799b2949bcbb0a359ca9c70a0c434"],["/posts/41814.html","052429725656994b211e4fc4dfc3bbb9"],["/posts/41947.html","eb0af1982e336b2efd6079aac5c8628b"],["/posts/42006.html","c3ae482d01357d8be12de49209fde88e"],["/posts/42106.html","b511563e95dd3f8b1bdf742510623aa8"],["/posts/42715.html","b0908a8e54afa32d4ee983b184103420"],["/posts/42822.html","1e49be5f5a515539421b2a2a9e6c5fe8"],["/posts/43293.html","377dad38818bdbeb52187c3b2feec80e"],["/posts/44644.html","d9f124aa9a598def55c853f75095eef7"],["/posts/44742.html","172cd47ba81fb6eb0fa59b41c275de23"],["/posts/45109.html","5107e6772de9bc22b321616ee20ec999"],["/posts/45196.html","a95951c4e7864cbb58423a4250d69fdb"],["/posts/451cd62.html","966393ebdf2520eba222d55c496f26b0"],["/posts/46719.html","ddb7285beded8784e873584f875db697"],["/posts/46855.html","191a10a24050992e087af0600321eff5"],["/posts/48872.html","7b5b87377c05de3f96026a2673d868c0"],["/posts/4950.html","584d8b571a55bd40b5a17824ab128bef"],["/posts/50917.html","8a18092e9d5f8233f28d6173e10c4ef3"],["/posts/52628.html","7c3e2c5c0e65b2e344816f2aeac53e73"],["/posts/54509.html","99d7c6937deec12efeb4dcfd775e46b8"],["/posts/55493.html","6300d4ea3c9b3cbd58c8205f7fd48c97"],["/posts/55674.html","41bb787de0c97779c79ddb2f4d4fcfbf"],["/posts/59097.html","f7ab4379f2a140f1e9496b29e2d08a44"],["/posts/5bdd8b42.html","8e5cb04efa3b65c846918e99e11c71e7"],["/posts/5d7d558a.html","3d60bdb3de2c598e9e7e4a8e29a7208d"],["/posts/60258.html","093ba86b5a2c801e38b4c8a1a5f4b222"],["/posts/6239436b.html","c9071318d87a7e8bee2e5fd88fada18d"],["/posts/63024.html","fff167b8964fcc4002bbfaed7b106798"],["/posts/6343.html","09552a1a7be5cff8a3b2e653dbdf5766"],["/posts/64290.html","5dbe3dce74191462c640a582228262af"],["/posts/64ec0a72.html","f06cd4b9f35a07108d98b855e6753d31"],["/posts/65033.html","302545bd21f1bbb5157742a89800c9f4"],["/posts/65501a4c.html","687a53263b9400115bf3a1a281ce9c0b"],["/posts/6642a673.html","6fdd27b145032668116e129018ece4cd"],["/posts/6930.html","44638ab2eb887a4cb45fa26d1c0e05be"],["/posts/7031.html","ba845da1dc5283f11a42648f4494e3d4"],["/posts/7b9344b7.html","763e09a289e9b25ba37894e9a830dcd0"],["/posts/7ebc0a4.html","86cdf6e1e04381fb8dbfc6d328165818"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/88c693c7.html","562a3c7c0cc92fed01401fa7c9005ba3"],["/posts/8961d743.html","e7322d6a750c80b7bd87d7ce6baa29ec"],["/posts/9049.html","2dc239ab4c5d847c5e98815e30139827"],["/posts/913ad9ee.html","58374d9d5251f4a9a7d7bb49b7147e60"],["/posts/9832.html","78c15c0ba4bb9a22e8ed74cad2b1a5fb"],["/posts/a55bf0d2.html","2ddd84285895bb190759dc658c8c4c3c"],["/posts/a6eafc24.html","b6389ea39b3d9b87f8489f9a236647ab"],["/posts/b2fbd54c.html","856d213eb5646c3b2b37a7b6fa79c7d6"],["/posts/c6fec8a1.html","5ed64f47dceef35e5a3c0990f65862ff"],["/posts/c8c5007f.html","81add8dfa3e207f2b6bae54008c0bb82"],["/posts/c8f1d592.html","f87a7a4411e0eb8dc4046746a3eb8f93"],["/posts/ce0db2d0.html","68a3a796775fec5dfb7f50a6294648e8"],["/posts/d0d1ce.html","6c90df13fd45157bf59d5a6ed2420067"],["/posts/d554428f.html","3f9341de5324c77e3258ffefc59b507d"],["/posts/d9677098.html","809ea1c0db665b5a90a68ae58a1cfb43"],["/posts/e3c7a27f.html","a9cb404643a5de5e70fafa9e78534318"],["/posts/f0e2800f.html","4468a44ec9cd10c04be4ef3bafe72615"],["/posts/f56d3ab8.html","55636c5611be9f1a6316e57ed8671bb5"],["/posts/ff53e8a4.html","629b91d1369d776cd5723c9826611f10"],["/sw-register.js","29739c9e821e37d9d9aa98bae7f2720f"],["/tags/Builder-模式/index.html","e1cb36277e31ad8fb48a95da008fcf4c"],["/tags/C-Language/index.html","534194db87e9de0e44bc6b971938171b"],["/tags/DataStruction/index.html","a1c69027c6bd67258e95e56851f0034f"],["/tags/Electron/index.html","e86e74729350e3cc460b95825e6c0f3b"],["/tags/FTP/index.html","493dadbf8a99218b8f4fcff6c8665485"],["/tags/Function-Option/index.html","9116e1e788ec26d8b0b6244f16bffec0"],["/tags/Golang/index.html","37e2e5c5577650211ac8058bed29b6ba"],["/tags/Golang/page/2/index.html","203a5f3a338067fc436d7b877d2f9a29"],["/tags/HEXO/index.html","2621f34ca15a5eb85bda4171d022859f"],["/tags/Hash/index.html","aeebb5fe747bf4f97215989645c8d1d6"],["/tags/Java/index.html","91f018328d078ac03544315fa689165d"],["/tags/Json/index.html","3d56007242fed5500f60847c4b29c893"],["/tags/LeetCode/index.html","c8be9af7057418bbeb9a0df0bdd877f7"],["/tags/OSI-模型/index.html","1f9ebb0a6193e7a43c1bfed9b3990888"],["/tags/OneTiny/index.html","8ab7eb5f873775c7dcfd1fa433e8d352"],["/tags/Python/index.html","83018e37878d22b9f95cf40f0fdb3bed"],["/tags/Python/page/2/index.html","a9c6a8d66658c953abed85e7b0da56d7"],["/tags/RSA/index.html","1b663531a883bba3a042ef3b62b86e9c"],["/tags/SSM/index.html","cd1578e67b7590cae167a937646acc06"],["/tags/SSM配置/index.html","a20302819cc045bb13034c34a096a584"],["/tags/Vue/index.html","e85776f5cfff67735283a5f371c9accb"],["/tags/YAML/index.html","45727301298ec16333dd9ac3e52c22c7"],["/tags/gin/index.html","990a114c7696fbe2987d51c6be1d09c2"],["/tags/git/index.html","c1888cfbbc3f4c4796b9c50b9147cbd6"],["/tags/index.html","0bafa56fe65da1806410bfd6cdb7c086"],["/tags/json/index.html","b5367e022ebdff3ad313e12dc1f28a59"],["/tags/note/index.html","e0accfb3f57251cba4022a03140b46c3"],["/tags/request/index.html","cd6faeffe81d12651a09f2b33c3205a9"],["/tags/response/index.html","c502d01595fb96a52c40f28dd172f393"],["/tags/七层模型/index.html","b566d569091fe1952c97d537cb6bf945"],["/tags/上传/index.html","cdf913646ae5aecc298189f7c3659b45"],["/tags/上传下载/index.html","afc098dffa2ec6983331185951e7af0f"],["/tags/下载/index.html","727afc23c93404fde5be24608a2d0032"],["/tags/中间件/index.html","57d6ecc4bebe047095ba09a7598d3735"],["/tags/事务管理/index.html","01384f71a18954526c996c2cb3d40868"],["/tags/交叉编译/index.html","b846e5cf24dd6c2581c8268b8dd4bb2e"],["/tags/函数式编程/index.html","a9e646dfe75121f1f5793c6b5b7f6546"],["/tags/反射/index.html","d88d3590d856604b4e71567997bddb85"],["/tags/命令/index.html","5efa8b64a1da2196c8605859996b53e7"],["/tags/局域网/index.html","75cd57fa415cf1b46ec98ea525dbd204"],["/tags/并行与并发/index.html","61b78ba0aad115f987ba751b37f6db8c"],["/tags/拦截器/index.html","7e831e949fa430b5d23a930e1e1a0506"],["/tags/数据绑定/index.html","5b484914bebb75112a0e743380440695"],["/tags/数据结构/index.html","3004c0854c041684a6397f0ceaf229ae"],["/tags/条件编译/index.html","5c1c3b40b20bfffda73175e00ebb5cb4"],["/tags/正则表达式/index.html","13315c1e040ea4573c4e337f26fb7656"],["/tags/爬虫/index.html","cd88e89acb3ed87c56585679bdf35064"],["/tags/物理层/index.html","49056d36d762c6c1382eb2f4d3e47895"],["/tags/独立开发/index.html","2a1d41837fdbe32cbfc7d256caf32852"],["/tags/生成器模式/index.html","ca9882dd16bdca2cd2de57971d0c748c"],["/tags/监视器/index.html","1808f760fdeabbdae946e73fbb4ac924"],["/tags/算法/index.html","a1a2f1040180bee616cccded7f9c0990"],["/tags/统一异常处理/index.html","7f4dda8ea3682b47589ae3dffd6bdb01"],["/tags/计算机网络/index.html","146be9c0d1558a50b81963e0e5ce94b2"],["/tags/路由/index.html","3f5251be579a0f6232d266e6ea4a7929"],["/tags/选项设计模式/index.html","0c22e016423aa4ece959f235279bad30"],["/tags/重定向/index.html","f4797c37e40b5576b834eec059938da6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
