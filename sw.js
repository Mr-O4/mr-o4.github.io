/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","7e4b8a9ea960c7f53f2ec4b114960d86"],["/2019/04/25/GoLang-Note-one/index.html","f3179bb0c8df140d085ff3da5ddfe2d1"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","24dda3f500156e5f53e76b61a2f3e74b"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","a54783c84a3ec6dfcf005a098811d36f"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","76a7af51c8652ab92840b74123f35412"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","b1e2f3bdc12420f468abf5e5e67618eb"],["/2019/04/25/RSA加密原理/index.html","2d127fdf3eaa72637147baf68bd877e2"],["/2019/04/25/通信中的加密与解密/index.html","165aebbf4e94c062ab7d0b7882f7d8cb"],["/2019/04/26/通信中的加密与解密-详细版/index.html","ab07e73eed07d9c69e89fe7dd7d2eb11"],["/2019/05/13/当小程序开发完成后/index.html","3993913224736acfad200f395a15bec5"],["/2019/05/15/几句话区分并行和并发/index.html","44bbb156ecd84e7c43e4f8938868d1a7"],["/2019/05/18/多端同步管理Hexo博客/index.html","8e647914bad4836dfed22730685a0a5e"],["/2019/05/19/Git命令大全/index.html","0cd97346595d352378e88d4ba8e20849"],["/2019/06/09/C-Note/index.html","864276d6b50ea0d2e43fdbb71e923587"],["/2019/06/09/Java-About-Hash/index.html","f61415bb3f23869a2e51edacb1402a44"],["/2019/06/09/Java-反射/index.html","9d6f0e4e41a215b576facaea905cf51b"],["/2019/07/07/SSM-4-数据绑定/index.html","51b2c8d45ea613c8ea0d0b25195b313c"],["/2019/07/07/SSM-5-拦截器/index.html","4f22d88459507f4e92c6a8f826d0e95c"],["/2019/07/10/SSM-6-上传和下载/index.html","dc49271c6803dca322a60b7287fb8a39"],["/2019/07/11/SSM-7-统一异常处理/index.html","6728cb1e9406992025eb5b42ee8abc50"],["/2019/07/13/SSM-8-Spring事务管理/index.html","0aeab11c0455fc32f50b5ee69d82cdd0"],["/2019/07/14/SSM-配置文件/index.html","cde68bd9ae7b7938100ca9b44fd00f5b"],["/2019/07/18/Git-基本操作说明/index.html","b67991e395429bf8cda8a90ee5b99071"],["/2020/03/21/Electron-Note/index.html","83eb2254bf4a0be52ae2124d484c6a1b"],["/2020/04/06/全站变灰的实现/index.html","49434d30e3076a0cbe7388fa14a3f0cc"],["/2020/04/08/VUE-note-day1/index.html","81e185b559c951504d55b5b2381c7baf"],["/2020/04/09/VUE-note-day2/index.html","66807b20052344edb179d0f28de048f8"],["/2020/07/02/Python【No-1】总叙/index.html","e5ea6f553ccc67fd6909efe7408258a4"],["/2020/07/03/Python【No-2】基础/index.html","f82b2d6714021a30cdc9ed82320d40b6"],["/2020/07/04/Python【No-3】判断和循环/index.html","5a2228c9bdb242175d0c112e2b972051"],["/2020/07/05/Python【No-4】数据类型/index.html","bf8f213bbc738c33aef7e1b34493c3d9"],["/2020/07/06/Python【No-5】运算符/index.html","447889ffaa4316594c665d3698dce660"],["/2020/07/07/Python【No-6】函数/index.html","1fa147b6a9e1034e539e167f923cfcb0"],["/2020/07/08/Python【No-7】错误处理/index.html","6a9921238846fd0912541acd6b4a2a90"],["/2020/07/09/Python【No-8】调试/index.html","5b488e13de3e6a96650262fbefabefa2"],["/2020/07/10/Python【No-9】测试/index.html","1476b71feb5d74b4430d64ff6713ec79"],["/2020/07/11/Python【No-10】模块/index.html","6c37c1615ed5ccbe1e0ff16965c92784"],["/2020/07/12/Python【No-11】类和对象/index.html","16b78a174202a17463ee11de8da534d6"],["/2020/07/13/Python【No-12】私有化/index.html","9ffe091d49dc45cc0d575519951e1a20"],["/2020/07/14/Python【No-13】魔术方法/index.html","e6a726d5483e6ba1acacc239e3700da7"],["/2020/07/15/Python【No-14】枚举类/index.html","e76ea997d22a76b1cbf92bbff7ad9079"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","e5b86100ce3c284ab8a917ad11d8092a"],["/2020/07/17/Python【No-16】进程/index.html","472c59dcacc697b0ea5213a6e721869a"],["/2020/07/18/Python【No-17】线程/index.html","10a862b14c229bd0fba7189ed252ba31"],["/2020/07/19/Python【No-18】协程/index.html","e61907f5be6d0a3a7a6cd58c52398c5c"],["/2020/07/20/Python【No-19】文件读写/index.html","7758d3b8fb55d94c0ed372abbfb78249"],["/2020/07/21/Python【No-20】操作文件和目录/index.html","16dd382c11843f1d813f0418ca239f97"],["/2020/07/24/Python【No-Feature】工具类/index.html","d7d0996f4d59cc9c033762f87da0f580"],["/2020/07/24/Python【No-Feature】高级特性/index.html","6841bab2f1e4b3809d2679aafc1880fd"],["/2020/07/25/Python【No-Feature】函数式编程/index.html","9f683a3d2ab5651d3249185faa5ee1ba"],["/2020/07/26/Python【No-Type】String/index.html","8b6c3e5f367dca828bfcd8926fdd1aa1"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","b3408cd24c8c38ed1d668465462afcb0"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","4dea9d3dc8923d2478fac1812a244891"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cb5732108ee6809698dd64cc287f9826"],["/2020/08/22/Python【No-Buildins】json/index.html","da90c5005c08c2ccae08cb9be3e925c6"],["/2020/08/23/Hexo-文件下载功能/index.html","dbf7263d0dfd6d454c152b51821eb43f"],["/2020/08/23/Python【No-Buildins】re/index.html","a69bb91cdcb10640a18381f6fb07b9ea"],["/2021/02/23/DataStruction [0-绪论]/index.html","4fafe20d7b71401d4afb914489fce9fc"],["/2021/02/23/DataStruction [1-算法]/index.html","073c9bb537a9d7d5a0424b8fcfa5b1e5"],["/2021/02/23/DataStruction [2-线性表]/index.html","5f2bb439d9470835d70783f93761232a"],["/2021/02/23/DataStruction [3-栈]/index.html","9a96e99d11e8a0e60cedb557b977e005"],["/2021/02/23/DataStruction [4-队列]/index.html","9fc302bd33c7bcc2055391752f233526"],["/2021/02/23/DataStruction [5-串]/index.html","8ab2ced465c35ddc3ba2e86e17727967"],["/2021/02/23/DataStruction [6-树]/index.html","41d2205ff0b471603dbdcb074a124a17"],["/2021/02/23/DataStruction [7-图1]/index.html","3ed9112810b514f14a7d1e6ed18a9a5d"],["/2021/02/23/DataStruction [8-图2]/index.html","f83a8b6a16447b1a58dde7efbcc26477"],["/2021/06/22/OneTiny-开发日记/index.html","03b4e4520c6e357b380e6f96442c95b5"],["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","f9660f96f44551a2fb3fffe9295a4d6b"],["/archives/2019/04/index.html","db16f3953226d8b584043541591a6ceb"],["/archives/2019/05/index.html","c89eeb27bb3742ade5df2f54a1c50d24"],["/archives/2019/06/index.html","11a851c834837332784326910c6b91d8"],["/archives/2019/07/index.html","8b1ac2cc28f193189886179d8845d302"],["/archives/2019/index.html","9260931eacf95a1dd64daad843c7957c"],["/archives/2019/page/2/index.html","8f764a733e22adfb5197920064958c10"],["/archives/2020/03/index.html","1b89d8b6f53d4fff9c8e3c9ab630d069"],["/archives/2020/04/index.html","a76fa65c3fc852d3bf505b52afba5c93"],["/archives/2020/07/index.html","c37e937bfb2eaf5bbd41697289ab0506"],["/archives/2020/07/page/2/index.html","1c06d39026a13fff0c73c9fecdc6a247"],["/archives/2020/08/index.html","1c619a1d2581a6a48cbd9efff36b2d4f"],["/archives/2020/index.html","f99ef302155179be3f62b15856e54916"],["/archives/2020/page/2/index.html","b6deb7c257aacd9dec47895abbe8783e"],["/archives/2020/page/3/index.html","2dc88cc7682e0ca20a54cadd7ab7d375"],["/archives/2021/02/index.html","bdc7a0066eea593e57e78d00ba6b1bbf"],["/archives/2021/06/index.html","f1ee6e136cb01a45cd188326ad544109"],["/archives/2021/index.html","de6e23f275868011bcf1a338e8a59652"],["/archives/index.html","e8456aa231d766024ee7d7094e23c926"],["/archives/page/2/index.html","39e341934e9f9d9a7581c6757d124cac"],["/archives/page/3/index.html","e8456aa231d766024ee7d7094e23c926"],["/archives/page/4/index.html","39e341934e9f9d9a7581c6757d124cac"],["/archives/page/5/index.html","39e341934e9f9d9a7581c6757d124cac"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","64c07e117f5afde4aa349da69eb39e6c"],["/categories/DataStruction/index.html","9bf5f16a1a76f98bf05bcf65f5ac3d2b"],["/categories/Electron/index.html","a25d289b2dae47f1e709bcf62bfe388d"],["/categories/Git/index.html","3490fdcf7fe9a671d88dee4f47b6c36c"],["/categories/GoLang/index.html","fc167ba2e47beae4fc4090b96dc8a1f5"],["/categories/HEXO/index.html","d16213713a82e284ae854cd09942ea00"],["/categories/Java/index.html","1398aa036439d7b9af511fd118b7b524"],["/categories/LeetCode/index.html","f715fb026e90d121545e0df35224bc17"],["/categories/Note/index.html","ace443c6c36036adc1f4911c069ea23d"],["/categories/Other/index.html","b5ff5889b2fc763773a5e9d847bd9186"],["/categories/Python/OPP/index.html","f165cfaab17540abdd3d085f314ef326"],["/categories/Python/index.html","14025896a2f6065dbfa211a69383ac03"],["/categories/Python/page/2/index.html","4cad1ee5ce435735e4c39ab90459978c"],["/categories/Python/内置库/index.html","b0b769839c6335fb76e498b7518a7f0a"],["/categories/Python/基础/index.html","c536edb7a863d268f9875edd8db2ae56"],["/categories/Python/爬虫/index.html","3d8a724b6744ab5f9b9e65345f328415"],["/categories/Python/爬虫/基础/index.html","4aeb5961041d5691c8bc2fac148f3b86"],["/categories/Python/进阶/IO/index.html","d01c8dbec839d4085ac376a32c14c739"],["/categories/Python/进阶/index.html","89b5a49eabdea33a97016c9a7e4ef383"],["/categories/Python/进阶/进程、线程/index.html","2910ecf0159435860e1293dbb63820a3"],["/categories/Python/进阶/错误与调试/index.html","373eb539d6296180d170f70d30ca57a4"],["/categories/Python/高级特性/index.html","54d8806de6e3d5f75dd52177f157f114"],["/categories/RSA/index.html","3bee15ce973f06fe35ee84a24339d036"],["/categories/SSM/index.html","3d041fafadc571ef808b1aa2604175a9"],["/categories/Vue/index.html","20ec763415d3f02c62f9c4f8c747e414"],["/categories/index.html","5cc69e699a5f2bd4390bf93ddbba09a5"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","61da4bce553de2d75a03e6f04f472430"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","2d1de8241da1c1b21387b74b7e53ddc2"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","8285084200da3294210826ed2e7242a3"],["/page/3/index.html","78bfd614996ca9d735835ae91842cdee"],["/page/4/index.html","c15376b32367ed24c13518614e7bb1de"],["/page/5/index.html","811ec9fef0f06f1bac9dca198b7c0adf"],["/page/6/index.html","a7b386cd4651cb1a33db2820245da469"],["/page/7/index.html","c09f72100c7beeeae2d96a0c1084bb4d"],["/sw-register.js","36029a93a3252498d733bfc59468e3c8"],["/tags/C-Language/index.html","abea0ae0fa7ad85d453ed95d5d311f95"],["/tags/DataStruction/index.html","19df88d0dd2195781c4e8e91875f2f73"],["/tags/Electron/index.html","a611d7c632688e4e8b64e322947780c2"],["/tags/FTP/index.html","25408e0ccc3d35230ea10b2ed80af2c4"],["/tags/GoLang/index.html","8669ca5700b6890e66a7c7d2de8da3ff"],["/tags/HEXO/index.html","b97a7027e8ea0d8a95c99980e335ba18"],["/tags/Hash/index.html","792e51eef2b49391b9615ec3689f4c6f"],["/tags/Java/index.html","d5d88df2ff18912e3a202105c2f976b5"],["/tags/LeetCode/index.html","3799dccc7c03d14224a90cadcd353dfb"],["/tags/OneTiny/index.html","fffae07f4db31dc1f4878d4fe18d4444"],["/tags/Python/index.html","39471afc7eea05ecd8db86fc58b27d80"],["/tags/Python/page/2/index.html","f43ff5ef788121ef3683c8e8d9f1f915"],["/tags/RSA/index.html","72fda3d02b34672c0dd9e15a853d906a"],["/tags/SSM/index.html","73189f737ff0ddc90a70bdf10b45dda0"],["/tags/SSM配置/index.html","9b5ffa1c9df68071126b7a3d1171daeb"],["/tags/Vue/index.html","4317e2194abce26e23b56f3b568ddbba"],["/tags/YAML/index.html","9d5e83f9f1d67b623d0c6d793203d1a8"],["/tags/gin/index.html","26069f8d0a21bca0a0ae8c4e296ac240"],["/tags/git/index.html","cefa1d33132edca2e3a49a3dafd38ac0"],["/tags/index.html","7b460cd6b8da7ecbe8b418ebe38c0c5d"],["/tags/json/index.html","9c6bcc28ce22c4295063337e098beff4"],["/tags/note/index.html","727b37b7a068e3a09ed65992e10386c5"],["/tags/上传下载/index.html","a57bc2f9a762ae4fef7591a73b03bf13"],["/tags/事务管理/index.html","59c0ae00ee7042a088fe53b284134470"],["/tags/函数式编程/index.html","afe593bf28b364943ea66fdc6ab21f53"],["/tags/反射/index.html","9696fd95b119955eb7b3531d9dd510ef"],["/tags/命令/index.html","77d5e897d8fccaa1f29bf1a73660a61d"],["/tags/局域网/index.html","947270fedd66f808f0616415df2aaffb"],["/tags/并行与并发/index.html","98659765eecac4ff53b83fac17478544"],["/tags/拦截器/index.html","c24aa5ca67eb4eeb7624e1a9bd28133f"],["/tags/数据绑定/index.html","f8ccd9cf6dda1b43775312c09949c406"],["/tags/数据结构/index.html","9cf20df0a008d2eeb5948f66de2f8724"],["/tags/正则表达式/index.html","aba7717758fb1cbcd6afb2f49d30025a"],["/tags/爬虫/index.html","22f64d0873ebc324f90a37599ae27012"],["/tags/独立开发/index.html","a096dddf421526154d9d8e72838679d3"],["/tags/算法/index.html","6853c585fb9a355ad467a4b849dd15db"],["/tags/统一异常处理/index.html","af9d74cbee4d9343671cd0f93424964a"]];
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
