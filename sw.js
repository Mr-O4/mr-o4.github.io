/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","bbbbe28ec0f5b8ffb1c157d6c5d6f3a7"],["/2019/04/25/GoLang-Note-one/index.html","b7372dadb49e219cc12980bd9a006c0c"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","e16823e4e1d4ccf0a48bc128c1274ca2"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","ff36ac4a27d203a859572e62a5b42b7e"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","c0dee238b5ec7cf7b6f88d5e9ffd5b1a"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","0520a565295334392ce957b8596170c7"],["/2019/04/25/RSA加密原理/index.html","01a3672f2f567a6b4815d3538c243148"],["/2019/04/25/通信中的加密与解密/index.html","66997f430f892122edfa11ed23b69221"],["/2019/04/26/通信中的加密与解密-详细版/index.html","d1b34cd3ac550f6e7fd48f6bed67abff"],["/2019/05/13/当小程序开发完成后/index.html","13541ce40db3cfd16d8796ed8837eb19"],["/2019/05/15/几句话区分并行和并发/index.html","fca65174c185b077110113e9498e4cf2"],["/2019/05/18/多端同步管理Hexo博客/index.html","a074836672eaa62205ba31e3fefb0de7"],["/2019/05/19/Git命令大全/index.html","e1a9e0af5be179e744cdb07d44b98258"],["/2019/06/09/C-Note/index.html","1f0130d4e17abced5a01ebb1f84af56d"],["/2019/06/09/Java-About-Hash/index.html","e848d50866d0e35b38db8a7b2a685d2d"],["/2019/06/09/Java-反射/index.html","a1290f368978d3547a867076d931d2c7"],["/2019/07/07/SSM-4-数据绑定/index.html","9f7d55a49252523e7ad0615af3b685ac"],["/2019/07/07/SSM-5-拦截器/index.html","55f5b6d265c258bdaca6165e27b020fc"],["/2019/07/10/SSM-6-上传和下载/index.html","a7c3baca997de84b2f43be9b058e0d25"],["/2019/07/11/SSM-7-统一异常处理/index.html","18164679051874d766d37d4b71d1f6fa"],["/2019/07/13/SSM-8-Spring事务管理/index.html","74c1d7cb1699ac068b7ab06e10f39770"],["/2019/07/14/SSM-配置文件/index.html","c22f9bdb0582ab01f9a83553da723e13"],["/2019/07/18/Git-基本操作说明/index.html","e29eee6e07adffc17c8ae67ecc28432c"],["/2020/03/21/Electron-Note/index.html","488deaeef9cf3f7b3e2ecef981c1cf77"],["/2020/04/06/全站变灰的实现/index.html","a4ed12dca25d9d60a91791d6a9df05e2"],["/2020/04/08/VUE-note-day1/index.html","ff93fef2dec82aa41f754157d6bf149d"],["/2020/04/09/VUE-note-day2/index.html","3fa6183e694036d6ef6f8724db2d07c2"],["/2020/07/02/Python【No-1】总叙/index.html","b5acb31a53fa5e4878337973be500a8f"],["/2020/07/03/Python【No-2】基础/index.html","97896149aa8db2d2f23e6c92924bef31"],["/2020/07/04/Python【No-3】判断和循环/index.html","6e084cb57b14c3444035772e1d05456d"],["/2020/07/05/Python【No-4】数据类型/index.html","8d41652a26109d76a574190f68a8e926"],["/2020/07/06/Python【No-5】运算符/index.html","6ebf0c96e4fee7ce88560e29bb3d82a9"],["/2020/07/07/Python【No-6】函数/index.html","2ccd5fd245fd2ee8ec22b6040466b30e"],["/2020/07/08/Python【No-7】错误处理/index.html","0cd2c17d2ead8ab84d92837ec2163a33"],["/2020/07/09/Python【No-8】调试/index.html","f19c350e9cfbc61e9d7f86eb24e49374"],["/2020/07/10/Python【No-9】测试/index.html","42445bd7056e3711a8b2594f8eb9d8e2"],["/2020/07/11/Python【No-10】模块/index.html","d83e18f3e957f7ce9b9f2af783295cfb"],["/2020/07/12/Python【No-11】类和对象/index.html","2a7927a1bddda1ba662f84ce917b4376"],["/2020/07/13/Python【No-12】私有化/index.html","0191c0ddf880cc1d41833cbf60c803a6"],["/2020/07/14/Python【No-13】魔术方法/index.html","cf89f483cbc1cad3f9e44599d279d556"],["/2020/07/15/Python【No-14】枚举类/index.html","bc5e6e02debe46cfcac05c942fb1a0ea"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","26afcb20677fd7b469df0d5ded29f2c3"],["/2020/07/17/Python【No-16】进程/index.html","a2f165417b740f0e549785928ac20cb5"],["/2020/07/18/Python【No-17】线程/index.html","4e713dafc3fdd89f2773f4954bb77e75"],["/2020/07/19/Python【No-18】协程/index.html","4d859175e565bb1331f52ba56164d571"],["/2020/07/20/Python【No-19】文件读写/index.html","0b99a4ae022a1acedc40e10032af7a60"],["/2020/07/21/Python【No-20】操作文件和目录/index.html","8aca2e6fdebd453bc6c3498ea463061c"],["/2020/07/24/Python【No-Feature】工具类/index.html","ad96c08b54f01ee209d2be0824a89eb8"],["/2020/07/24/Python【No-Feature】高级特性/index.html","efc24f6d598e84cbca647ac157777394"],["/2020/07/25/Python【No-Feature】函数式编程/index.html","493f8b36c958080c61fb9d637a79fe82"],["/2020/07/26/Python【No-Type】String/index.html","e01d49238c81e94bc6b777ead269866e"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","cfd24990d4fe682f83651f6dc3cbfc5a"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","d8966b8251f4165b199be6bc80ccb0a4"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cd716685137f756b6df0685e6d3e35bc"],["/2020/08/22/Python【No-Buildins】json/index.html","2e30dd223df9c75f3d830867be6e33e3"],["/2020/08/23/Hexo-文件下载功能/index.html","5666438b99b8f7dbb784c90e572bc97b"],["/2020/08/23/Python【No-Buildins】re/index.html","7c7d7ffeabdee86c5fba338781079626"],["/2021/02/23/DataStruction [0-绪论]/index.html","d47dedf399f7c11d57ad334a953f8713"],["/2021/02/23/DataStruction [1-算法]/index.html","cc1becf6f70169ba8aab860005d10580"],["/2021/02/23/DataStruction [2-线性表]/index.html","57f86c40cecfa8f32367d72af3ed5228"],["/2021/02/23/DataStruction [3-栈]/index.html","3c1c05242ed79bdbfa36f85392685db1"],["/2021/02/23/DataStruction [4-队列]/index.html","3805340cf2117c196e13872d5cd6275f"],["/2021/02/23/DataStruction [5-串]/index.html","f6c7f3aea3479a131cd0e2d2401c980f"],["/2021/02/23/DataStruction [6-树]/index.html","97197843dbd8405e3b79e7b751e64584"],["/2021/02/23/DataStruction [7-图1]/index.html","d2617c8dece42fd813cbac41bf917676"],["/2021/02/23/DataStruction [8-图2]/index.html","858bab98e06e6bd86ff8d927b2982be1"],["/2021/06/22/OneTiny-开发日记/index.html","52b716018c5a0ec4fcddaf595299dcb1"],["/404.html","e92a945340405f16eaa323efc4172531"],["/about/index.html","8aee88ac6410552e02894763dc4462ee"],["/archives/2019/01/index.html","0ef7981e3cd75673971112a4dc39299e"],["/archives/2019/04/index.html","9feabe44bdc0170c50afc21636864936"],["/archives/2019/05/index.html","5aafa932b4a4df41a20fd6507abf9cb0"],["/archives/2019/06/index.html","d973cbfdefc81c10e5b882d0ba25389d"],["/archives/2019/07/index.html","9a3afd2d2aeb043ccd71c035d547df25"],["/archives/2019/index.html","865b6648f58c0f5c6bd1bc171ae59c02"],["/archives/2019/page/2/index.html","4281913ec878a690c087b80d385f8c2f"],["/archives/2020/03/index.html","36c5b7a6f1e24dba5a32d7c4ac9555c7"],["/archives/2020/04/index.html","da29e10f95bc04aac349df6d3222a716"],["/archives/2020/07/index.html","6dfc1e0527daf02552a7f06dd9e56e07"],["/archives/2020/07/page/2/index.html","2ea2e1f92d2894a0f33f6c3fe542715d"],["/archives/2020/08/index.html","8e3ab64208e8c48eda058b8a478202a5"],["/archives/2020/index.html","6cb73d9b90a3bbc25159d62c19761a39"],["/archives/2020/page/2/index.html","3eac40372ddddee283365ec31893ef76"],["/archives/2020/page/3/index.html","1d7220ad2af72594710270ac93ae7dfb"],["/archives/2021/02/index.html","e115f5f5cd97d46ffad662b1a9a72140"],["/archives/2021/06/index.html","a4614990319f551a661ef22af2cfe772"],["/archives/2021/index.html","02dbcdb89b9cf84914557e10ba793c1e"],["/archives/index.html","474fa608ba6866a71692bc24ebfc660d"],["/archives/page/2/index.html","474fa608ba6866a71692bc24ebfc660d"],["/archives/page/3/index.html","474fa608ba6866a71692bc24ebfc660d"],["/archives/page/4/index.html","474fa608ba6866a71692bc24ebfc660d"],["/archives/page/5/index.html","474fa608ba6866a71692bc24ebfc660d"],["/artitalk/index.html","f39ca306e0546117adbb99a498df43b4"],["/categories/C-Language/index.html","2200f3bb6a4d67a444c054ba769a16fd"],["/categories/DataStruction/index.html","7a0c0378d1bafb57d2b5f88a772c15e2"],["/categories/Electron/index.html","a0ef58ffd1d652520c075ca0e2c0b11e"],["/categories/Git/index.html","cf3073e744b647f73e73f5aba4aa0fc8"],["/categories/GoLang/index.html","d35d5c553681a07ba3b8027461aaa475"],["/categories/HEXO/index.html","5121c7b794a83293350c217375f41dd5"],["/categories/Java/index.html","358be4cb700135df606ed3138ad58f38"],["/categories/LeetCode/index.html","88374d01cd5a8e4ab2ff128683ffbbe3"],["/categories/Note/index.html","5f08c4ac345486ebe811c3cb16a5e4c6"],["/categories/Other/index.html","73b18aabd84e56a7854812aaa170fef2"],["/categories/Python/OPP/index.html","4144019b07a38bfac0f07635630370f4"],["/categories/Python/index.html","99e86074c2ac3660d5fd0a78de941c9d"],["/categories/Python/page/2/index.html","300266b53e32596833774660407ee562"],["/categories/Python/内置库/index.html","91dfee249de319839e083078aa1bab67"],["/categories/Python/基础/index.html","9d899229cbb409f763e5410b811272bd"],["/categories/Python/爬虫/index.html","f18fe1e5acbff4ed61d679d564b2ec00"],["/categories/Python/爬虫/基础/index.html","ae04198a28d99e21f56a4b8e02ea08be"],["/categories/Python/进阶/IO/index.html","a1b39ad211e94bf85b7230d7ee56d1e5"],["/categories/Python/进阶/index.html","ee3905b71baa491d9b4353a2c818c1dc"],["/categories/Python/进阶/进程、线程/index.html","337d37d658694f7649bfdc49cccbf3e7"],["/categories/Python/进阶/错误与调试/index.html","811b61ddcb2fceab367ce24b3c1836cf"],["/categories/Python/高级特性/index.html","3783f7649c6c0b2026bd9c9c97789655"],["/categories/RSA/index.html","642e8f7d3b8137dc3e3c67cdb483e1fb"],["/categories/SSM/index.html","480483ac1e3fe54aa53860db0e9098fe"],["/categories/Vue/index.html","dfefaa97571b318b718dd8d13e14fa46"],["/categories/index.html","bfbc3c101637d6d91525b96e6a95c470"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","a8e54c7f523b94ff64f06e82dbbf729b"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","9b58c2a6323cdeee97bb7f18b98abe22"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","edf5e6ffdee289858c6abada2e1ec042"],["/page/3/index.html","c83e5ec3673337edf63dfd1b957866af"],["/page/4/index.html","8189373c18340ef2277b6926a9c2cd8f"],["/page/5/index.html","1156f5f0590ff1a422e779fb529f3c8e"],["/page/6/index.html","f97cbd0cb317db9cc933cafbf4fc5dfe"],["/page/7/index.html","3d886f4d84e7ffcd65cb40c82c65e590"],["/sw-register.js","5762d79d94a60d78adb43f1c7fbcb26c"],["/tags/C-Language/index.html","0ed23b92ea3a50fbc4338ec8fa92bc82"],["/tags/DataStruction/index.html","d06d18be8f150475f134a53a1f8836e1"],["/tags/Electron/index.html","d4108978aeeda78a6d7254f991639883"],["/tags/FTP/index.html","f3930b884753a8128f1018229081aa48"],["/tags/GoLang/index.html","e50fb52cc7d5fa8ee7682e8ca7fa1bba"],["/tags/HEXO/index.html","4893e31fb48c6c916b70a771708277fc"],["/tags/Hash/index.html","45ec50e20f606eddda029759699af503"],["/tags/Java/index.html","024f6519d9ed8f7abcaa0fc61feea7d6"],["/tags/LeetCode/index.html","f65efcab2a6c6fb4c7ecca5f5f78b1da"],["/tags/OneTiny/index.html","06a580f21690fa0b5936697f553d4dc4"],["/tags/Python/index.html","62edbb80a9707b4ef6dac54747b2edd4"],["/tags/Python/page/2/index.html","7dd94c55c06f10824083d7d653c71f48"],["/tags/RSA/index.html","4f0d58f97c7662bae5c0a2b111888117"],["/tags/SSM/index.html","8544d04b42cb5b23e7b2c062d77b4012"],["/tags/SSM配置/index.html","d6391d860c8ed8bee9598cba85a5ab53"],["/tags/Vue/index.html","72aa393919cba01d550601f70156907d"],["/tags/YAML/index.html","2b60221c768c73b732b5635233b7d82c"],["/tags/gin/index.html","a22e97d7f17d02207063bbe80e8bff77"],["/tags/git/index.html","b6f57914503f7469ca02eb38d0dc53b7"],["/tags/index.html","a41f4a1d0bea7940548e599e25659679"],["/tags/json/index.html","34fabb62278b244a73cd7e1ac7012a8b"],["/tags/note/index.html","6683e5ae175414b2df176b14f7e73d11"],["/tags/上传下载/index.html","4284e543f45c4843e7897328ea8e5cb6"],["/tags/事务管理/index.html","6d2efe3ff2b6b135a086a03c406a88e1"],["/tags/函数式编程/index.html","4c23683c4cc5b6039dd991bff8cdd33d"],["/tags/反射/index.html","5a12c2e31d5553bb0c9678fa4cda9b17"],["/tags/命令/index.html","cd2e7dc69ded9d8d01fe5bf066260ef3"],["/tags/局域网/index.html","226435be8f9c446285f9b03fd8b04126"],["/tags/并行与并发/index.html","de602ef89f75c585a30c8dea94d77a67"],["/tags/拦截器/index.html","5df0a8752bf4df2922b46b7fc1fd244e"],["/tags/数据绑定/index.html","3b15f84a595c1db3518123e9059b5185"],["/tags/数据结构/index.html","c77033dd165448e420553e98c376c9de"],["/tags/正则表达式/index.html","097d571681d0c76f0d0e00e8db424e10"],["/tags/爬虫/index.html","46e9c9c5bd3e64ca36fe59202db71c2a"],["/tags/独立开发/index.html","72a01923d8ca7f13532c7b6725725bd0"],["/tags/算法/index.html","b2c1be753ed00092640808d22a0b2a4e"],["/tags/统一异常处理/index.html","6a690c2426dd9ee853b0bff859ee8edc"]];
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
