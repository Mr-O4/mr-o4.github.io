/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","0cc19f601dc36af6210db7ac49aec31e"],["/2019/04/25/GoLang-Note-one/index.html","561f17fcf50f1db1ebb2538a683093f3"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","5c2062bd6a8ee16deb1fd62cdda9103c"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","62fc90510e11d63f3615d46086de18ab"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","26921ed77a339f83904d753a6e87c8c5"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","2d5cc964e8030f4bd076c00d6e9c1fd5"],["/2019/04/25/RSA加密原理/index.html","668d4c391d0edb53f053dabd04348e56"],["/2019/04/25/通信中的加密与解密/index.html","09717f43f79642d139fa4694062dbf74"],["/2019/04/26/通信中的加密与解密-详细版/index.html","912c39559c705121f33631f6b698b29f"],["/2019/05/13/当小程序开发完成后/index.html","a9575f13b39b2f479da73e6ec7dcc668"],["/2019/05/15/几句话区分并行和并发/index.html","4641fc855a9ff5d9018e7734b95d18da"],["/2019/05/18/多端同步管理Hexo博客/index.html","7bc3114616fa6dd427cb8e8ad0ee2d5b"],["/2019/05/19/Git命令大全/index.html","27c06110ef13bc9e5b1b7a837298fee0"],["/2019/06/09/C-Note/index.html","e01e9482196afd281cd73e12b4ad0c28"],["/2019/06/09/Java-About-Hash/index.html","8657baed93be8acf371e238b7ca4fc00"],["/2019/06/09/Java-反射/index.html","096dc86a713378282130cfb2a666daab"],["/2019/07/07/SSM-4-数据绑定/index.html","d774b3d0124a9de8f06093419aa947f2"],["/2019/07/07/SSM-5-拦截器/index.html","a666c5d6028c7e004ca2ff6d5f80f127"],["/2019/07/10/SSM-6-上传和下载/index.html","b8b788b3f477322d10c7107ec491bf5e"],["/2019/07/11/SSM-7-统一异常处理/index.html","231fc2bac3db75c75ecd80104e308bb2"],["/2019/07/13/SSM-8-Spring事务管理/index.html","105cb21d6b13897322ca7bb6dc4492cf"],["/2019/07/14/SSM-配置文件/index.html","389bb8ccf0dd183fa916be42f84e09e2"],["/2019/07/18/Git-基本操作说明/index.html","a89ac2445134ff6ea8dc8836aad49a8e"],["/2020/03/21/Electron-Note/index.html","7095a0087eeb79f3aa8ed28161d63ef7"],["/2020/04/06/全站变灰的实现/index.html","6fc253be5d3cd65cd4bb7bc715fa10ca"],["/2020/04/08/VUE-note-day1/index.html","9d35886087ead0229618c282b1532f69"],["/2020/04/09/VUE-note-day2/index.html","a12d4283ca204a618cd2b42dc8200d23"],["/2020/07/02/Python【No-1】总叙/index.html","1dee304ee7c4ad050892c80d0b8c0284"],["/2020/07/02/Python【No-2】基础/index.html","0435f4485c703e6dda479718189de521"],["/2020/07/09/Python【No-3】判断和循环/index.html","8ad08fa81b3f3c04446bde19ae7a4d10"],["/2020/07/09/Python【No-4】数据类型/index.html","f960358adcc641729d33e8d8a8db5d17"],["/2020/07/10/Python【No-5】运算符/index.html","1d7af72361907d395edb050800d101b4"],["/2020/07/11/Python【No-6】函数/index.html","b1160b9c572bb289c02aa6e76f01c5f9"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","f53e85574fc3701eb3b72576805b8cd1"],["/2020/07/12/Python【No-Feature】工具类/index.html","b2ad0c4a67c9e7ef4e112235c319855c"],["/2020/07/12/Python【No-Feature】高级特性/index.html","6340c4b39d0eaf495a1cba019ef5ff4a"],["/2020/07/12/Python【No-Type】String/index.html","2d84bdb89ce9a3b47a11de3d988afac0"],["/2020/07/14/Python【No-7】错误处理/index.html","4ad1d33354129a295862f0acd7a72a4f"],["/2020/07/15/Python【No-8】调试/index.html","ed26c572fc0fcff1aaa7f56e06d3d351"],["/2020/07/15/Python【No-9】测试/index.html","765bd7d20a2908007cd227cc91516331"],["/2020/07/16/Python【No-10】模块/index.html","4f0c4c94f577666007178d71776945d3"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","787cad41444ff0d2abb89f697594090e"],["/2020/07/16/Python【No-16】进程/index.html","33c76c8ef7caabb8fa102a9706b1b75b"],["/2020/07/16/Python【No-17】线程/index.html","d5d4849e99d92723fd6fcfb3dc4b8fcc"],["/2020/07/16/Python【No-18】协程/index.html","5380a961d993515b1cb9d6c1d1d8a7e5"],["/2020/07/16/Python【No-19】文件读写/index.html","80cbe5e3ac7be56d4c05a8c5f16cf993"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","8725613581deeddaf6286f3ec0deea81"],["/2020/07/17/Python【No-11】类和对象/index.html","64e986e1c3b9ea3168b8433f459c362f"],["/2020/07/18/Python【No-12】私有化/index.html","e7a71e13823d4ac50e0d3fd0b066081b"],["/2020/07/19/Python【No-13】魔术方法/index.html","0f8c11ba5e7f3809bd61901b0fae2b73"],["/2020/07/20/Python【No-14】枚举类/index.html","9ff4101c692ad90be1a3249855e4370d"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","e436c341eae6a57c360ee7538940a978"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","3c65a73fbcc4083aecdf1d898d65e260"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","86812f4f575b5023ccc3aef4ffe8dec1"],["/2020/08/20/Python【No-Buildins】json/index.html","7c61a485f1190b52b4461f121fdc0d5d"],["/2020/08/20/Python【No-Buildins】re/index.html","d98f0c7cbb631cde206623d24751eba2"],["/2020/08/23/Hexo-文件下载功能/index.html","c6809f000422cf090532347a8d540491"],["/2021/02/23/DataStruction [0-绪论]/index.html","cd3eef52a19a1511a173703beb9624c9"],["/2021/02/23/DataStruction [1-算法]/index.html","32ebfe4d6fc54bebe92a50ae833a348e"],["/2021/02/23/DataStruction [2-线性表]/index.html","751ab351a1eb10eb286180812651e440"],["/2021/02/23/DataStruction [3-栈]/index.html","6397b015744d32e71ea1c3d8c82bd1db"],["/2021/02/23/DataStruction [4-队列]/index.html","c2bdf7b557093f4c7afda835490c4991"],["/2021/02/23/DataStruction [5-串]/index.html","e2261bd5f26c5f829b63e03c50fc51ca"],["/2021/02/23/DataStruction [6-树]/index.html","bbdf3246a3fdfec81484baf4da3e2b12"],["/2021/02/23/DataStruction [7-图1]/index.html","47ed6dee7fbac1597ad73becb8943b20"],["/2021/02/23/DataStruction [8-图2]/index.html","283f4f6de184a8dacb6283138d2b594d"],["/404.html","9150c8e438d10e23356b7b78392f6170"],["/about/index.html","d1a15ab64d057da8b9f273325398a755"],["/archives/2019/01/index.html","a4b8e520b3994b2b9b44210299965d97"],["/archives/2019/04/index.html","fa71d8abb2e1cd7909307567b2818ffe"],["/archives/2019/05/index.html","128943aa408bf55eca27b82504a479ee"],["/archives/2019/06/index.html","1acd3ce6c596ab68b95c05cdc564c9f6"],["/archives/2019/07/index.html","4989660a2f6a300f214ed4b87251a3a0"],["/archives/2019/index.html","c016ace3839a6b2c876370c1dcf10419"],["/archives/2019/page/2/index.html","d9090a8558feb5665f1a461908d57dca"],["/archives/2020/03/index.html","41d5bfdf288589f11bcd27f70dd11504"],["/archives/2020/04/index.html","ef8a34fcb1541f057f97a4a66c0fba2f"],["/archives/2020/07/index.html","54e018fb5e86d92a6935e42d980749e3"],["/archives/2020/07/page/2/index.html","c11c9316f84c6fce06d589024583ebf2"],["/archives/2020/08/index.html","fbe1f1d302c9b2c47ee603db2a3d84a0"],["/archives/2020/index.html","a544ae4f8fa6914d6e466452db13bae8"],["/archives/2020/page/2/index.html","afd813cb4308b3f3545e6a50fd70bd0b"],["/archives/2020/page/3/index.html","fee9ae15bd4a69ca4f8790fae2186418"],["/archives/2021/02/index.html","e0ea6dd8e4ecd5ecb02c2a1e3c9575a2"],["/archives/2021/index.html","7b9e70a21831a133699b6eddbdf2a239"],["/archives/index.html","cdee296ab15b92c7f1a10a939f2f8a27"],["/archives/page/2/index.html","cdee296ab15b92c7f1a10a939f2f8a27"],["/archives/page/3/index.html","cdee296ab15b92c7f1a10a939f2f8a27"],["/archives/page/4/index.html","cdee296ab15b92c7f1a10a939f2f8a27"],["/archives/page/5/index.html","7052ac4c973f69c6038204317bf214c3"],["/artitalk/index.html","754090032588679912be2cca3a0c486d"],["/categories/C-Language/index.html","b2900c0d9740bfdf50ae9603c5d72a5d"],["/categories/DataStruction/index.html","48ddad500a7ecfbd79c5e21a7cfe7d30"],["/categories/Electron/index.html","40d3eb84f571574439940ffbf34ee0fb"],["/categories/Git/index.html","d244e8bc624affb18e7317f086bb581f"],["/categories/GoLang/index.html","5c41fd34295182050bb7b69fdd5c575b"],["/categories/HEXO/index.html","e5cb210e25a53bf33d0ecb52b7da2c92"],["/categories/Java/index.html","e39681738ff56621043d1d00903a649b"],["/categories/LeetCode/index.html","43055aded4d506fb61c4eedb1ad3f172"],["/categories/Note/index.html","2cba925c438b4d4627cb76fb4bfc7be7"],["/categories/Other/index.html","7c592fd6a02279970628d3e39ce4c5f5"],["/categories/Python/OPP/index.html","01ec8335391d23644f84e7d7eaa2d329"],["/categories/Python/index.html","77028cc0982e89486275b411b2ce0fd2"],["/categories/Python/page/2/index.html","41f12694d39f68128269ec5028506e98"],["/categories/Python/内置库/index.html","40094ff14ae8e208f7f1ee7663f27065"],["/categories/Python/基础/index.html","e2bb7b8719e13dc50d416e3cc57ac350"],["/categories/Python/爬虫/index.html","e2255ce6a80b38d2f2c82e051777f102"],["/categories/Python/爬虫/基础/index.html","e48473c08e8439252c07692f9f07d52f"],["/categories/Python/进阶/IO/index.html","2ab8f98f065dda8eabc15780563e8a87"],["/categories/Python/进阶/index.html","7dd3e063ff78664e90f49334998d8f3d"],["/categories/Python/进阶/进程、线程/index.html","0e04fd4d66c0abf7d11ede75e56154f0"],["/categories/Python/进阶/错误与调试/index.html","96a8c3ff6281abe630d28715fce44c08"],["/categories/Python/高级特性/index.html","0d458526c8192475f1a3e3529f67f9c2"],["/categories/RSA/index.html","7231009f8821e2f1c49116684b680dfa"],["/categories/SSM/index.html","a40217454b043b6289ad9cf4e50f90d0"],["/categories/Vue/index.html","4f449d04787ea55951cec81ff33f5265"],["/categories/index.html","77f13a111b5a334349aaf72ce7a94b7f"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","5e49d311ba18da140cff797bdba5a139"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","1c09142b3ce11deb61490a1596c5c38f"],["/page/3/index.html","3e3430c7ff3a3d3664cdfa50cb27d168"],["/page/4/index.html","d64e3a7de38c74313b08d6186c62ce90"],["/page/5/index.html","6bdf01680780bbed5814768e68309d09"],["/page/6/index.html","698ab36b8bac47f352ecc01099530143"],["/page/7/index.html","b97207969969946f997cfe2a2abd6831"],["/sw-register.js","29d8ab83d4b474c6597f1a0c40e22bf0"],["/tags/C-Language/index.html","caa762f4c10acad13d780c8dba76e712"],["/tags/DataStruction/index.html","7cd89d9f023d09785182cf6d313fddfe"],["/tags/Electron/index.html","ae8792413930c2b2c924d9f4caec966c"],["/tags/GoLang/index.html","893832d621cc57ba8564bac7fd5253ed"],["/tags/HEXO/index.html","9887991f9e79699c3ed75986d6ca1df3"],["/tags/Hash/index.html","0afb3853c88332e4b13b582d9149395a"],["/tags/Java/index.html","23dd2075f880d9bf5a860114cc4895e6"],["/tags/LeetCode/index.html","c5e2a6be4265f3fbf958da76deb02c45"],["/tags/Python/index.html","5364f3518d8f00e63ab5fea79352ea3a"],["/tags/Python/page/2/index.html","6db22703351d39a4f1b4734b6905748b"],["/tags/RSA/index.html","e09af084122d9cca7361624e5aa015c1"],["/tags/SSM/index.html","337cfc70e05818463a64753e86704cc2"],["/tags/SSM配置/index.html","a82ddb05ae1608f7e5d65a7f08826fa2"],["/tags/Vue/index.html","4c78ddfa73d92dbb2bc5a64f4b2478df"],["/tags/YAML/index.html","6288afcdf544d85be9173fb3ccfad68f"],["/tags/git/index.html","0fc8eef6b1d7866148b8491795acda46"],["/tags/index.html","b026c3750d0b93b25ab16ac2b5713870"],["/tags/json/index.html","fad20f3a439504091d02f934ec6bc40b"],["/tags/note/index.html","d83c7e2407ec0c5469902c642deef630"],["/tags/上传下载/index.html","a7eff4623e682b2e4e66b2b4938402dd"],["/tags/事务管理/index.html","11a75d48d4f59265eac0d9ae3ba0a9d0"],["/tags/函数式编程/index.html","8ae5ede09a0fe6189463f89c6124de60"],["/tags/反射/index.html","595e972f3f3a5cdc5978dd4de895868b"],["/tags/命令/index.html","117296cb6f0aa9f42e600cb15a6437c0"],["/tags/并行与并发/index.html","58a6f8b429537fa0c1f89eae771b3abd"],["/tags/拦截器/index.html","d0038758484cf4a7bf77085a8ab9ca80"],["/tags/数据绑定/index.html","2862d3cdbbdc0838a650c2a0ef97ed16"],["/tags/数据结构/index.html","7e3f8d7a206b237e3c7d0cbc32c6045d"],["/tags/正则表达式/index.html","38eb8904e47a9dfff1bc8d6cc04a45f3"],["/tags/爬虫/index.html","f383c097465380b4a7aa021a84885c0c"],["/tags/算法/index.html","20e5a97c6f0a83ce33c6c581d5c3553e"],["/tags/统一异常处理/index.html","9ec59a9e99f53e289e346fa87ed77160"]];
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
