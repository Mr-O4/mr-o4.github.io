/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","119d6fb4047ba67332a6aafdacce6d7e"],["/2019/04/25/GoLang-Note-one/index.html","756cfcebc1de5b6b94fe7ce9e3cc3874"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","9bf53c6b32a0920689c2805c79499137"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","2bb1567dffa0dc8f72ed4f00cc10d65b"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","1ec68ff6a63d5078d6376674c3a6f9a9"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","f5c49406be1a9f8e14e1cd079d46bc62"],["/2019/04/25/RSA加密原理/index.html","e7d98c9efebbc651157a8980e73c6c30"],["/2019/04/25/通信中的加密与解密/index.html","d26c028aee9396fd0aa85aafbcec727c"],["/2019/04/26/通信中的加密与解密-详细版/index.html","469efc8d1e89b1d5fcaa5151321a7bb4"],["/2019/05/13/当小程序开发完成后/index.html","0d63d0c3b4002c29bfefe2d62135a3ff"],["/2019/05/15/几句话区分并行和并发/index.html","74bfed848502a3971320517832d13cb8"],["/2019/05/18/多端同步管理Hexo博客/index.html","74f1a7ba96294e143d3b103feb87c0e6"],["/2019/05/19/Git命令大全/index.html","aa61337a3548db33dca6e5a47a54a155"],["/2019/06/09/C-Note/index.html","3012aff6dee4fbf15206e7b4b6535f90"],["/2019/06/09/Java-About-Hash/index.html","ad6f8bf11c43dca2d94b4c166a95bee3"],["/2019/06/09/Java-反射/index.html","e53459de4dec4482e2542bb50ff577cd"],["/2019/07/07/SSM-4-数据绑定/index.html","ca78f550c705a2a48fad56c28a912fe8"],["/2019/07/07/SSM-5-拦截器/index.html","709fbeeddcf4576daec53e623a8a9696"],["/2019/07/10/SSM-6-上传和下载/index.html","2c6c6d57202af65f0b7300b87d3a1482"],["/2019/07/11/SSM-7-统一异常处理/index.html","195e73e0b3a326524d1e6105cf744934"],["/2019/07/13/SSM-8-Spring事务管理/index.html","4fa4ff63920474659652117bf724a1c1"],["/2019/07/14/SSM-配置文件/index.html","b3d66ddaa2b342a8247233e62f38e4bc"],["/2019/07/18/Git-基本操作说明/index.html","a5cdc2275f5c957ce3f38c389d86ef39"],["/2020/03/21/Electron-Note/index.html","6f2e1db7c2dedb8826585ec409ba766d"],["/2020/04/06/全站变灰的实现/index.html","f746eb3f9202ae1df634ec5196ff0ccf"],["/2020/04/08/VUE-note-day1/index.html","bcbea7c888733d2981cb87a0060b149d"],["/2020/04/09/VUE-note-day2/index.html","0093d8bfed3bde6815aace51a1dbfb30"],["/2020/07/02/Python【No-1】总叙/index.html","7365e3c8d7d704d4facb829ea1c42a31"],["/2020/07/03/Python【No-2】基础/index.html","b38f146f28321040c95487c5f04b073d"],["/2020/07/04/Python【No-3】判断和循环/index.html","8b7ace7ceaa41d460013f7e40a4c48b3"],["/2020/07/05/Python【No-4】数据类型/index.html","556b78d586e2a0b188a0d30b72094949"],["/2020/07/06/Python【No-5】运算符/index.html","b91b5544f8e7ba80d3939225c8d239be"],["/2020/07/07/Python【No-6】函数/index.html","fdfee7c1091b08ea198759def098692d"],["/2020/07/08/Python【No-7】错误处理/index.html","b2044dd254ea90a91f9bf5e238f20cac"],["/2020/07/09/Python【No-8】调试/index.html","4e531c1594d73ea86d8369bbcef1abd0"],["/2020/07/10/Python【No-9】测试/index.html","87367436c78c0a25a7bea42fa7203884"],["/2020/07/11/Python【No-10】模块/index.html","bbe8136bfe251eb2e6ffad4ac71b4614"],["/2020/07/12/Python【No-11】类和对象/index.html","10a21f16372f1f082753e86d93cb0b91"],["/2020/07/13/Python【No-12】私有化/index.html","89daed10f531f3eae52746256e175431"],["/2020/07/14/Python【No-13】魔术方法/index.html","a9cbae09943996d8d3aed721c4e1516d"],["/2020/07/15/Python【No-14】枚举类/index.html","c4b5dddd340df4920344ac94882aa536"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","5ced1af1a7b280de522c4c1ae04b4260"],["/2020/07/17/Python【No-16】进程/index.html","b145f2bcef27a094dd4e78ca3b155d27"],["/2020/07/18/Python【No-17】线程/index.html","654d6e95d1f2f85ca2c70c1dc1382a36"],["/2020/07/19/Python【No-18】协程/index.html","6558ca47b90354a319940af804fee65c"],["/2020/07/20/Python【No-19】文件读写/index.html","e071717a839ba3e4f4294ac0b5ce4cdd"],["/2020/07/21/Python【No-20】操作文件和目录/index.html","5ffd6892a45c464b73cf3be6f82ba6a3"],["/2020/07/24/Python【No-Feature】工具类/index.html","d1ce21437b1f19e0bbe7e5ccf870bc5f"],["/2020/07/24/Python【No-Feature】高级特性/index.html","4b476521502918a7f6f1b32de082b913"],["/2020/07/25/Python【No-Feature】函数式编程/index.html","5fb15546db369b15a1c157c47dc3781f"],["/2020/07/26/Python【No-Type】String/index.html","ebb89fd70c9de45dd36ce127611e32df"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","a044c10ed4b05f7a2a935d5e90069ec9"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","854e78252611830c51d7541b0e8d9703"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","71b6345267545214eb4b2ea1e6915e10"],["/2020/08/22/Python【No-Buildins】json/index.html","b61cf44625388fa3ac7e07e6c98f111d"],["/2020/08/23/Hexo-文件下载功能/index.html","0132bdc17e6582a1fddd2988f0b5411b"],["/2020/08/23/Python【No-Buildins】re/index.html","a0546684eea24388da8707d673765b66"],["/2021/02/23/DataStruction [0-绪论]/index.html","2ccefd827683c3b2f02524755fbb6fdd"],["/2021/02/23/DataStruction [1-算法]/index.html","0b07a795f64bd8948fc4f72991481394"],["/2021/02/23/DataStruction [2-线性表]/index.html","c38a75ee9111f9c86d72d9c9619a854e"],["/2021/02/23/DataStruction [3-栈]/index.html","0c8d103cc04991b9aa4f7299e5f7fd7f"],["/2021/02/23/DataStruction [4-队列]/index.html","3863e6da8bfe5a366642d7b5a2c78f44"],["/2021/02/23/DataStruction [5-串]/index.html","d750aef6ffe4312c08a454558cee5c35"],["/2021/02/23/DataStruction [6-树]/index.html","f1a5335961dfa7e38db98c30a47de09c"],["/2021/02/23/DataStruction [7-图1]/index.html","5153070083a792b7569135b818a84605"],["/2021/02/23/DataStruction [8-图2]/index.html","65a2b71d90d7a85936b1e489f51c4966"],["/404.html","23d29de4333838f097f72143cd5e7cfe"],["/about/index.html","5b0e4cb1f4ad453b2bc992250cbf1bab"],["/archives/2019/01/index.html","30407403ab98be3d9d16942510985856"],["/archives/2019/04/index.html","1aa976244d644a94c6b20b58afb8720f"],["/archives/2019/05/index.html","4eb685b9fac8722625282d044c32e571"],["/archives/2019/06/index.html","a6ec74602ca50952038247337e5ea3ba"],["/archives/2019/07/index.html","5aa2b2697f031d1409ce0fc0d039eabf"],["/archives/2019/index.html","23aa2312a7e101023206c7c98becf172"],["/archives/2019/page/2/index.html","a7457b285e0f8785c2c5256e4f65e663"],["/archives/2020/03/index.html","3b818a4cd805ffdc0828b3f0ad853601"],["/archives/2020/04/index.html","3978548d3c15b261571c27e85a66f788"],["/archives/2020/07/index.html","1af7897f4048c059a31c72900e8520f5"],["/archives/2020/07/page/2/index.html","1906b32063779e71e3e0cd7eb8f1a564"],["/archives/2020/08/index.html","e3142f34b9d03c6c1c18953a7af3ad49"],["/archives/2020/index.html","7d6fa6d3f7c018905165acae9a7200d9"],["/archives/2020/page/2/index.html","45c06e8aa085783aa5d90313fa17da62"],["/archives/2020/page/3/index.html","0bd00d910f2601f627792b09776d7f98"],["/archives/2021/02/index.html","6b0633e7dcbd6dcf047bc896aea68dc6"],["/archives/2021/index.html","4a752502bd35859f75f3dace88b03bff"],["/archives/index.html","afbbe18041bf64af1ecc397f54a87068"],["/archives/page/2/index.html","afbbe18041bf64af1ecc397f54a87068"],["/archives/page/3/index.html","afbbe18041bf64af1ecc397f54a87068"],["/archives/page/4/index.html","afbbe18041bf64af1ecc397f54a87068"],["/archives/page/5/index.html","afbbe18041bf64af1ecc397f54a87068"],["/artitalk/index.html","1e3588ae8145b29bc56279733481dfa4"],["/categories/C-Language/index.html","cc127a24c2c6d06571393d96540b3221"],["/categories/DataStruction/index.html","57f8b01e91200d61c9cf6828a25ff952"],["/categories/Electron/index.html","8ff8d0cc1157635824038d1726cc4340"],["/categories/Git/index.html","43705e2b62180bb8a1093616adbb1be3"],["/categories/GoLang/index.html","c9568f4f145742ca6d228feb4e000c59"],["/categories/HEXO/index.html","3c0f52daf0f19c58976e4adceb6f1e65"],["/categories/Java/index.html","0c0343401e23a333444f9f1829e3ee99"],["/categories/LeetCode/index.html","caffab4b919bb4d488e5c24c6f4bcc15"],["/categories/Note/index.html","9c12f232ef36c7d2a495136fe8c09aa0"],["/categories/Other/index.html","cae9c38bcb1f55deca99ddd8c1d59bcf"],["/categories/Python/OPP/index.html","306a04dcd44f5999f331ba69db858b0c"],["/categories/Python/index.html","1833921f5d217fa119e80a789ea4c194"],["/categories/Python/page/2/index.html","1a95b71b20789abecf8e7f6542e31824"],["/categories/Python/内置库/index.html","b4f0ae56c3d492cc034f1e16df336ad7"],["/categories/Python/基础/index.html","c3be0edf163bae90fd3e0a692c105d92"],["/categories/Python/爬虫/index.html","f804759672e38a9f7e1b69e425255371"],["/categories/Python/爬虫/基础/index.html","ecdc75a3bd5824754973c0ac0fc01fc1"],["/categories/Python/进阶/IO/index.html","4af545e48ce7aa93a96209f0974202c3"],["/categories/Python/进阶/index.html","668aa49db4aebdd2bc762a77a9c66fce"],["/categories/Python/进阶/进程、线程/index.html","f31a65106a58295dcdf288a46dec5b4b"],["/categories/Python/进阶/错误与调试/index.html","4881f64b6f4d137b9dcabbf126692780"],["/categories/Python/高级特性/index.html","ddcac597def63aa7acfd214c0dc97b2f"],["/categories/RSA/index.html","9feb91805f34442b5b11199bf52edc79"],["/categories/SSM/index.html","cb7f5cf106fb534f94d8c21da3cfd183"],["/categories/Vue/index.html","3c54430f858738f37c9c4ba73169300c"],["/categories/index.html","f53f450dd5952f56934e8f92ea5642d2"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","d4fe0db2c3a632673344f9e9417fa652"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","7ba488b40c33ab00831710c392d929d9"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","f44349a57a92af12b3b362f2ff90e22b"],["/page/3/index.html","dbb541499c8586836c146d12180993f9"],["/page/4/index.html","aad06a47c56119894136a4a136b29a9c"],["/page/5/index.html","4a5fa335d92cbfcdaaabf446a83bbc97"],["/page/6/index.html","7e5b48454577e587482faa44d2b502bc"],["/page/7/index.html","c3702868e79c79a3be5081cc53cdbe54"],["/sw-register.js","ca8051764e683352e80f5fa1fe93cf58"],["/tags/C-Language/index.html","59063a9fb35ae4715e14a3725f23821c"],["/tags/DataStruction/index.html","146736a1e203f45e60367fce63836973"],["/tags/Electron/index.html","218fb61ed4505fa803a49b8838dec938"],["/tags/GoLang/index.html","a3e47cff638209e03cdc6c06f6ef20ee"],["/tags/HEXO/index.html","ccf6b44ca744c7952148e2b3da2f07e8"],["/tags/Hash/index.html","a54bfa944a427ed95ab3be8b5ca840af"],["/tags/Java/index.html","3834cba10fa14ed56377d71323e70aed"],["/tags/LeetCode/index.html","e2356f234a7744a8b80e453da97ccce7"],["/tags/Python/index.html","e6dbf334ff75bdc94be05a2a5782929e"],["/tags/Python/page/2/index.html","069b606097e8089008b00e5ab10d6f91"],["/tags/RSA/index.html","60b1751c57b776abf9b0355435dce6a0"],["/tags/SSM/index.html","9dc620f31cc30a467fc0890fe52e714d"],["/tags/SSM配置/index.html","9c2b57ee24f62f0bf7eb43fc7547bf15"],["/tags/Vue/index.html","892a2159e1713f66a0fbf292b288c308"],["/tags/YAML/index.html","8d615eb75fd17db1938e6e8675dbb026"],["/tags/git/index.html","2f62d2ecb296fac748888bfaa7eb90ff"],["/tags/index.html","35af290822f3470113783b0441021f1e"],["/tags/json/index.html","9a8b6dad44be8c836a8dededde90d587"],["/tags/note/index.html","f35d4375c28619d9ed309b65172d7a0d"],["/tags/上传下载/index.html","8aea05282d38fc6c8163f89e764b128c"],["/tags/事务管理/index.html","ed908c4600a94ae18379d3eff13389ef"],["/tags/函数式编程/index.html","a7695a6ac38f5e685071330684d0089d"],["/tags/反射/index.html","76307f7ae95f2a4c20f517eecd217c22"],["/tags/命令/index.html","6bdb5b66a2b23fdc16db8e5ed682a1b8"],["/tags/并行与并发/index.html","31c900f70bf3cb032188b2800f34486f"],["/tags/拦截器/index.html","8850f1b71c4583b1f02efa3086e77e10"],["/tags/数据绑定/index.html","6d543ec78d08fecdf27ac817d3ba37e4"],["/tags/数据结构/index.html","ea2734555f62206a4e6d150de0373261"],["/tags/正则表达式/index.html","76494b676994cb18d9758061b5de5d63"],["/tags/爬虫/index.html","7657de68f542d95362e2b41418936d6f"],["/tags/算法/index.html","7c39f3b6ed2385aab328af78b62f2260"],["/tags/统一异常处理/index.html","ca576ba787cb72b603734050207efeca"]];
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
