/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","7e4b8a9ea960c7f53f2ec4b114960d86"],["/2019/04/25/GoLang-Note-one/index.html","f3179bb0c8df140d085ff3da5ddfe2d1"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","24dda3f500156e5f53e76b61a2f3e74b"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","a54783c84a3ec6dfcf005a098811d36f"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","76a7af51c8652ab92840b74123f35412"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","b1e2f3bdc12420f468abf5e5e67618eb"],["/2019/04/25/RSA加密原理/index.html","2d127fdf3eaa72637147baf68bd877e2"],["/2019/04/25/通信中的加密与解密/index.html","165aebbf4e94c062ab7d0b7882f7d8cb"],["/2019/04/26/通信中的加密与解密-详细版/index.html","ab07e73eed07d9c69e89fe7dd7d2eb11"],["/2019/05/13/当小程序开发完成后/index.html","02545e8651e0653127381cc0d2586b6b"],["/2019/05/15/几句话区分并行和并发/index.html","44bbb156ecd84e7c43e4f8938868d1a7"],["/2019/05/18/多端同步管理Hexo博客/index.html","8e647914bad4836dfed22730685a0a5e"],["/2019/05/19/Git命令大全/index.html","0cd97346595d352378e88d4ba8e20849"],["/2019/06/09/C-Note/index.html","864276d6b50ea0d2e43fdbb71e923587"],["/2019/06/09/Java-About-Hash/index.html","f61415bb3f23869a2e51edacb1402a44"],["/2019/06/09/Java-反射/index.html","9d6f0e4e41a215b576facaea905cf51b"],["/2019/07/07/SSM-4-数据绑定/index.html","51b2c8d45ea613c8ea0d0b25195b313c"],["/2019/07/07/SSM-5-拦截器/index.html","4f22d88459507f4e92c6a8f826d0e95c"],["/2019/07/10/SSM-6-上传和下载/index.html","dc49271c6803dca322a60b7287fb8a39"],["/2019/07/11/SSM-7-统一异常处理/index.html","6728cb1e9406992025eb5b42ee8abc50"],["/2019/07/13/SSM-8-Spring事务管理/index.html","0aeab11c0455fc32f50b5ee69d82cdd0"],["/2019/07/14/SSM-配置文件/index.html","cde68bd9ae7b7938100ca9b44fd00f5b"],["/2019/07/18/Git-基本操作说明/index.html","b67991e395429bf8cda8a90ee5b99071"],["/2020/03/21/Electron-Note/index.html","83eb2254bf4a0be52ae2124d484c6a1b"],["/2020/04/06/全站变灰的实现/index.html","49434d30e3076a0cbe7388fa14a3f0cc"],["/2020/04/08/VUE-note-day1/index.html","81e185b559c951504d55b5b2381c7baf"],["/2020/04/09/VUE-note-day2/index.html","66807b20052344edb179d0f28de048f8"],["/2020/07/02/Python【No-1】总叙/index.html","e5ea6f553ccc67fd6909efe7408258a4"],["/2020/07/03/Python【No-2】基础/index.html","f82b2d6714021a30cdc9ed82320d40b6"],["/2020/07/04/Python【No-3】判断和循环/index.html","5a2228c9bdb242175d0c112e2b972051"],["/2020/07/05/Python【No-4】数据类型/index.html","bf8f213bbc738c33aef7e1b34493c3d9"],["/2020/07/06/Python【No-5】运算符/index.html","447889ffaa4316594c665d3698dce660"],["/2020/07/07/Python【No-6】函数/index.html","1fa147b6a9e1034e539e167f923cfcb0"],["/2020/07/08/Python【No-7】错误处理/index.html","6a9921238846fd0912541acd6b4a2a90"],["/2020/07/09/Python【No-8】调试/index.html","5b488e13de3e6a96650262fbefabefa2"],["/2020/07/10/Python【No-9】测试/index.html","1476b71feb5d74b4430d64ff6713ec79"],["/2020/07/11/Python【No-10】模块/index.html","6c37c1615ed5ccbe1e0ff16965c92784"],["/2020/07/12/Python【No-11】类和对象/index.html","16b78a174202a17463ee11de8da534d6"],["/2020/07/13/Python【No-12】私有化/index.html","9ffe091d49dc45cc0d575519951e1a20"],["/2020/07/14/Python【No-13】魔术方法/index.html","e6a726d5483e6ba1acacc239e3700da7"],["/2020/07/15/Python【No-14】枚举类/index.html","e76ea997d22a76b1cbf92bbff7ad9079"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","e5b86100ce3c284ab8a917ad11d8092a"],["/2020/07/17/Python【No-16】进程/index.html","472c59dcacc697b0ea5213a6e721869a"],["/2020/07/18/Python【No-17】线程/index.html","10a862b14c229bd0fba7189ed252ba31"],["/2020/07/19/Python【No-18】协程/index.html","e61907f5be6d0a3a7a6cd58c52398c5c"],["/2020/07/20/Python【No-19】文件读写/index.html","7758d3b8fb55d94c0ed372abbfb78249"],["/2020/07/21/Python【No-20】操作文件和目录/index.html","16dd382c11843f1d813f0418ca239f97"],["/2020/07/24/Python【No-Feature】工具类/index.html","d7d0996f4d59cc9c033762f87da0f580"],["/2020/07/24/Python【No-Feature】高级特性/index.html","6841bab2f1e4b3809d2679aafc1880fd"],["/2020/07/25/Python【No-Feature】函数式编程/index.html","9f683a3d2ab5651d3249185faa5ee1ba"],["/2020/07/26/Python【No-Type】String/index.html","8b6c3e5f367dca828bfcd8926fdd1aa1"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","b3408cd24c8c38ed1d668465462afcb0"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","4dea9d3dc8923d2478fac1812a244891"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cb5732108ee6809698dd64cc287f9826"],["/2020/08/22/Python【No-Buildins】json/index.html","da90c5005c08c2ccae08cb9be3e925c6"],["/2020/08/23/Hexo-文件下载功能/index.html","dbf7263d0dfd6d454c152b51821eb43f"],["/2020/08/23/Python【No-Buildins】re/index.html","a69bb91cdcb10640a18381f6fb07b9ea"],["/2021/02/23/DataStruction [0-绪论]/index.html","4fafe20d7b71401d4afb914489fce9fc"],["/2021/02/23/DataStruction [1-算法]/index.html","073c9bb537a9d7d5a0424b8fcfa5b1e5"],["/2021/02/23/DataStruction [2-线性表]/index.html","5f2bb439d9470835d70783f93761232a"],["/2021/02/23/DataStruction [3-栈]/index.html","9a96e99d11e8a0e60cedb557b977e005"],["/2021/02/23/DataStruction [4-队列]/index.html","9fc302bd33c7bcc2055391752f233526"],["/2021/02/23/DataStruction [5-串]/index.html","8ab2ced465c35ddc3ba2e86e17727967"],["/2021/02/23/DataStruction [6-树]/index.html","41d2205ff0b471603dbdcb074a124a17"],["/2021/02/23/DataStruction [7-图1]/index.html","3ed9112810b514f14a7d1e6ed18a9a5d"],["/2021/02/23/DataStruction [8-图2]/index.html","443ce390ea2c749e2089345eaca03fae"],["/2021/06/22/OneTiny-开发日记-2021-6-22/index.html","d828b0910ad63616b9ed853cdce048ef"],["/2021/06/25/OneTiny-开发日记-2021-6-25/index.html","cbd3f6dc7d9aceb8f4eb82fb215fce4d"],["/2021/06/29/OneTiny-开发日记-2021-6-29/index.html","55fd8adbb172051c659038f786aa59e0"],["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","dbce38f555f2cb1cb0c7f123677dc932"],["/archives/2019/04/index.html","bffca37a7811afde4acddaa36b5ce4e3"],["/archives/2019/05/index.html","f40e04b6eef5faf7e194ca94a83cb3bc"],["/archives/2019/06/index.html","8548ec94af5d4dedb7f63ef790715de3"],["/archives/2019/07/index.html","ab835cecff27ac3e1e4c7805119c279e"],["/archives/2019/index.html","28c787908f815dce0783867c91ebfb05"],["/archives/2019/page/2/index.html","d13bc06568d26ea86bacc387a2fc39c2"],["/archives/2020/03/index.html","1e933b3d4468db16be69cd36572eae60"],["/archives/2020/04/index.html","f6d55e69298c709305cc84f8d7ba2cc8"],["/archives/2020/07/index.html","3047f78a7c600a66e3cc99d4cffec819"],["/archives/2020/07/page/2/index.html","865914b1ab8cfcec26697ac8dff5b5c6"],["/archives/2020/08/index.html","b961508d98c66ade0e2d058ba6c72082"],["/archives/2020/index.html","a017d5e36791e1845347954acc6db1d6"],["/archives/2020/page/2/index.html","2298976ed645c8546d9b8bc95c84e709"],["/archives/2020/page/3/index.html","9b3ff57eb1efcf9bda370bb09ea96e9f"],["/archives/2021/02/index.html","bd07dd83a1af8ae65c2369495b405824"],["/archives/2021/06/index.html","7e92704ecc8b5ed15bc5aed05b48f85f"],["/archives/2021/index.html","b7f1e914b2e27d6d2a4f61302d9939e9"],["/archives/index.html","e042ec99ad38d85bb832720ac6661807"],["/archives/page/2/index.html","e042ec99ad38d85bb832720ac6661807"],["/archives/page/3/index.html","e042ec99ad38d85bb832720ac6661807"],["/archives/page/4/index.html","e042ec99ad38d85bb832720ac6661807"],["/archives/page/5/index.html","e042ec99ad38d85bb832720ac6661807"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","cc573b715badda8e034c3e7e48cedb0d"],["/categories/DataStruction/index.html","404aeb5e3f1df7c617593c40e19cdd9e"],["/categories/Electron/index.html","b9c5a2ffd25719437bb97adef748f142"],["/categories/Git/index.html","ffe0161440f26425f711454b92642434"],["/categories/GoLang/index.html","fa9963123b845350a8ee7db5c48625e2"],["/categories/HEXO/index.html","f17dffb9b7f09ecd2c89308f405ba7e2"],["/categories/Java/index.html","158ae9cd09f84f2bf3cf1bab2672dac2"],["/categories/LeetCode/index.html","b01305eaa3950f12405cd4f1df2dede4"],["/categories/Note/index.html","797e17df7a32476fcab0eab489182677"],["/categories/Other/index.html","7b60c0105ec885538655c74a44d9cf23"],["/categories/Python/OPP/index.html","b33057ba2a07e0368290d801f2cfba16"],["/categories/Python/index.html","82dd0c6a312a22e9d2bc88a6090a1f2b"],["/categories/Python/page/2/index.html","4c74764ee69b6f3036839a511be7ecd5"],["/categories/Python/内置库/index.html","a35b7411a77339bcc8d0161632e2d757"],["/categories/Python/基础/index.html","6aa5e004b90350e86fc9541ae7d7d63b"],["/categories/Python/爬虫/index.html","f3168f177d8b0c2667883bd0567f2ff2"],["/categories/Python/爬虫/基础/index.html","dd8bc165d690863f7f20eedaa770da82"],["/categories/Python/进阶/IO/index.html","2877cb27c18e52aef6f458050db17ecd"],["/categories/Python/进阶/index.html","988d2edbe41efc10bb78c332a4dbcaa3"],["/categories/Python/进阶/进程、线程/index.html","ded10f5f6971b5ca18a0064d31f1284b"],["/categories/Python/进阶/错误与调试/index.html","2fc0b61b13b5a449d3ab7e84d84c1ccf"],["/categories/Python/高级特性/index.html","cb87d8606d40efa9b63294fd57983b2c"],["/categories/RSA/index.html","1a7c5d9c900c99a8046cf7ce6fdad1bf"],["/categories/SSM/index.html","3a1f2da68a8077d500331fc3611cba2d"],["/categories/Vue/index.html","7d04e4fd8c2e6be643ebd8b025b9bbde"],["/categories/index.html","8f25e9728c43c01e57c47a3ce6b73148"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","ab6325a395cc2108d995f28ecf58951d"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","ecaf05d4b0867a51541c67130ebba19c"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","e0e466b53c3dc045f207cb9ae3a4f84a"],["/page/3/index.html","10676c51b6f6818fd2d3754142d69bcd"],["/page/4/index.html","440b4b393aa96ed4c76308b0a94409d1"],["/page/5/index.html","ed3ace230e84c195b46ce29e0ad19dd6"],["/page/6/index.html","30e7cfaae9671ad6a172d90de9ede8c4"],["/page/7/index.html","40b20b6f26b32eda3731a430ec241844"],["/sw-register.js","01f5d9316bb4d25629039fe704477f16"],["/tags/C-Language/index.html","395962421345bdf8e2ee85c03ee9ad74"],["/tags/DataStruction/index.html","7b83567fa33aedb80ca13fb6959f58a0"],["/tags/Electron/index.html","7d1200dcc1bdc4279f173eb87d56e2d2"],["/tags/FTP/index.html","b935e142a5296c02a1e83df4918c3653"],["/tags/GoLang/index.html","df4af7ac5e33e400a33ee0e97f65df4c"],["/tags/HEXO/index.html","d3a1f9b71f82a75c266ac381edfebdd6"],["/tags/Hash/index.html","5823c993e1ca44aaa39b2d5fa7f1a31a"],["/tags/Java/index.html","a71820eae42efb7be33b54c2d7137ef9"],["/tags/LeetCode/index.html","d3080fe404c2beb1163f9b45654471a6"],["/tags/OneTiny/index.html","5dccf5e7b522a9ce155a15382992619b"],["/tags/Python/index.html","215bf4077a2c850b2af0f932eb15efc0"],["/tags/Python/page/2/index.html","079c14e92c18d6830d4d56aedbdfef75"],["/tags/RSA/index.html","9c11a3631557c8bc866e6299123976df"],["/tags/SSM/index.html","e9564cf491cafaf00d4ff7e56891459d"],["/tags/SSM配置/index.html","6734ddfbca5ef96090dc943083a92f28"],["/tags/Vue/index.html","cb98d1e434444874f43ad98dff1d7b5c"],["/tags/YAML/index.html","173381c258b1a23cae405c1eb7645c90"],["/tags/gin/index.html","0ffac058ac6a921caf95c0f7e800c36c"],["/tags/git/index.html","f32ebb24d1f2bc0d5465cb1bcd63dceb"],["/tags/index.html","485bdfc542f10b59d6160caaeda06210"],["/tags/json/index.html","d080ad81d828e19897f8adf22e0c1e1a"],["/tags/note/index.html","17b268a85dbc668a7ed24f3d4d1fb37a"],["/tags/上传下载/index.html","842bbd0bbdf0c162d15149270ecb52d8"],["/tags/事务管理/index.html","3027165165cc28827c5b697d38512f18"],["/tags/函数式编程/index.html","1b3690efc84db6db60494ff9c4716895"],["/tags/反射/index.html","56dcd5666d3c0307e4470f7f3c333d04"],["/tags/命令/index.html","e9e1bf9f331378173577da6768f53cde"],["/tags/局域网/index.html","968188a267250eb5362664f04d42d259"],["/tags/并行与并发/index.html","061e4626b35d1b67e92aee21cf07ee4e"],["/tags/拦截器/index.html","300e41b4edbc262f1f09524ccc90512d"],["/tags/数据绑定/index.html","df14c5f39230dadc80b9e214989046db"],["/tags/数据结构/index.html","47786f567bd8eda1f5d37c16f5569214"],["/tags/正则表达式/index.html","ad2096e63ecd3d6a32b71056ab44615f"],["/tags/爬虫/index.html","51a487598be94842c0424e84f7f0b8c7"],["/tags/独立开发/index.html","e871ed85b7e69962dc8f3610be057db0"],["/tags/算法/index.html","58557f9c5cc60d7986c4aea7cf16f079"],["/tags/统一异常处理/index.html","20a4000495e1bd8469ad0bf271f0f5ea"]];
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
