/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","e6b733d39b8ccf2ae5edecff30da8eed"],["/archives/2019/04/index.html","1d4d3d3e8346209a706e9fcf5baba235"],["/archives/2019/05/index.html","1bf2f2af5fa8cdb0f95786cfa3abe0c4"],["/archives/2019/06/index.html","dfff448ecd300f6acbad2260bed7de03"],["/archives/2019/07/index.html","2644c63e1d37cd69f2506002f7032d9e"],["/archives/2019/index.html","28f73d81f31dc1abc135639f12beee66"],["/archives/2019/page/2/index.html","e1fdb8884b59c7d6798330313042a224"],["/archives/2020/03/index.html","2bbde95286aaeb19037b3ca5d54cea8a"],["/archives/2020/04/index.html","dd3ba8cd45862d6b63c5775721475dcd"],["/archives/2020/07/index.html","c7d4a67413dec0c40a285b25012d088f"],["/archives/2020/07/page/2/index.html","87eaf853d67b84cd153b79c01fbac30f"],["/archives/2020/08/index.html","efd5a9bec334e5068e21ba1dec064ae3"],["/archives/2020/index.html","bbc53d91f2794015c22603ac89535f67"],["/archives/2020/page/2/index.html","2433636c319c2301af267764b05f2f21"],["/archives/2020/page/3/index.html","bb20144ee7431d4bd92575c26af0c370"],["/archives/2021/02/index.html","5b590617a8c2434a9752fa6ea32c37e2"],["/archives/2021/06/index.html","d2ce64b6c39e0d2d4ca5be77ca50db59"],["/archives/2021/07/index.html","7b008100477667dce6c17a3fbeb7781c"],["/archives/2021/07/page/2/index.html","87119890dd11203cd50a752810d10dc1"],["/archives/2021/07/page/3/index.html","474370c5f0bcc3fefbca7410a0255e7e"],["/archives/2021/index.html","d5a8f0ce5aeefe16606320c1c4fb65dc"],["/archives/2021/page/2/index.html","9e9c27c5596f0fa783071d4b273d387c"],["/archives/2021/page/3/index.html","afe6074dd619480343ba29a3c74c570c"],["/archives/index.html","cd9a7ca5618787b8e10523b894c7b23e"],["/archives/page/2/index.html","cd9a7ca5618787b8e10523b894c7b23e"],["/archives/page/3/index.html","cd9a7ca5618787b8e10523b894c7b23e"],["/archives/page/4/index.html","cd9a7ca5618787b8e10523b894c7b23e"],["/archives/page/5/index.html","96991ebafcf0b61b61bf17f71e9e5dea"],["/archives/page/6/index.html","96991ebafcf0b61b61bf17f71e9e5dea"],["/archives/page/7/index.html","96991ebafcf0b61b61bf17f71e9e5dea"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/408/NET/index.html","ce1f5f992675ef92353b30b5aec02b1b"],["/categories/408/index.html","252178848f989350eedca5b5f1a456e4"],["/categories/C-Language/index.html","c1353a01be9643a38304dc73893e8aab"],["/categories/DataStruction/index.html","9b14e9fb69c78178d2ca9dfdf30db95e"],["/categories/Electron/index.html","e75ff9bb924fd6c25be8d3c537ec7476"],["/categories/Git/index.html","7342fa1c4efdc765eff452c1d424cfb8"],["/categories/Golang/Adavanced/index.html","0552de490605988b5d0c13a8a5265dda"],["/categories/Golang/Basic/index.html","059079cb7a53a1954fae55c32abfd5f2"],["/categories/Golang/Basic/page/2/index.html","1c63c361d9632eb7f21195462c1a05f6"],["/categories/Golang/Framework/index.html","a780e335b52e0c10bc6ecf510c89475c"],["/categories/Golang/index.html","8fec2791a10a4839fa411a1cb7541846"],["/categories/Golang/nil/index.html","4a3601f9d4b640d75bc002c82c539a43"],["/categories/Golang/page/2/index.html","e7cd4b5b07163de67537ec4791b4e4ce"],["/categories/HEXO/index.html","307f5664eb63642d0c57ea12b6315091"],["/categories/Java/SSM/index.html","100f2e65756436980934c2c201a372f0"],["/categories/Java/index.html","2325ca3e4b8ed96c13bb06763fa94c86"],["/categories/LeetCode/index.html","48d86bd30260ea0a4c0fd5cef3ca96a7"],["/categories/Note/index.html","eb0cf323070bd172abb61dc8eabe158c"],["/categories/Other/index.html","23d78848d7e6289f9e473aa9abc549d7"],["/categories/Python/OPP/index.html","f7721cc5d11f8deb75ed00eb903791e3"],["/categories/Python/index.html","abbc61c13e9c2e941aafd1a747ba960a"],["/categories/Python/page/2/index.html","d8d62ac1415d8b09caaaa43ce89ddb06"],["/categories/Python/内置库/index.html","183a638db8cedbd5ea1301a377e824b6"],["/categories/Python/基础/index.html","ea7348a5e15eebf5301c60ec41997586"],["/categories/Python/爬虫/index.html","0e177102130190f7726b1f0f39f2f8b4"],["/categories/Python/爬虫/基础/index.html","448e35fafe1a55b20d33b53fa0dbd009"],["/categories/Python/进阶/IO/index.html","dcebe600ae2fbeeb7318d9ee7f486614"],["/categories/Python/进阶/index.html","97479c1b5d7aca01b7ac8c56d7155bb0"],["/categories/Python/进阶/进程、线程/index.html","339be291e8f5394a04233040b4bdb126"],["/categories/Python/进阶/错误与调试/index.html","82fd3d5d6b3342ba729d26e920a92003"],["/categories/Python/高级特性/index.html","71df517c607abc5549b1c5b7e06e6113"],["/categories/RSA/index.html","c75b93446536c59cd55d15a9f49d726a"],["/categories/Vue/index.html","bff5f3493250122d51b1a3d1ad430bbd"],["/categories/index.html","21903725facfcb7c4aa5f6ec3c581a4a"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","b24a99909a184a8f888bfafe55a8af55"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","288beeb96b5acb528f47f7cce85250d7"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","6630a57b63ac7ad2b30cb7ea0cc7c06e"],["/page/11/index.html","03290d3ebc31a7a21835768597087382"],["/page/2/index.html","53c39b82d96e3278ba1186743d053e7e"],["/page/3/index.html","32d6fbb574e18b47ae4003436e74be9c"],["/page/4/index.html","50ef2718f26ae9933178f0a13a544544"],["/page/5/index.html","a3d7e37c53ffa93e6004b1e1f0867410"],["/page/6/index.html","9ee022c59930a5c4d5c712f7aec64426"],["/page/7/index.html","7d0e274dea4643c134960876a1241d9d"],["/page/8/index.html","4bc03873c85e3955357f4f98a37d128c"],["/page/9/index.html","38d56f1f641bd884b8f2ba8de995db64"],["/sw-register.js","519ba8bb6f2fbdbb307192a8e493fe5e"],["/tags/Builder-模式/index.html","1d99833a214e639eb635bff4ed512c6c"],["/tags/C-Language/index.html","4a850fc809392be0b282461047b021e9"],["/tags/DataStruction/index.html","f5acdde084e19016b09afe8caec6d4ea"],["/tags/Electron/index.html","01e0f9f587de13d16ea650b89ebadd04"],["/tags/FTP/index.html","82f0218ea6b0a6532bdf93912d6f3832"],["/tags/Function-Option/index.html","01fd075dcae278a731c9793e905816d1"],["/tags/Golang/index.html","fc93c6338d4c328adcbb205e08b455a4"],["/tags/Golang/page/2/index.html","e08e6017cf178c87fb0d949e3b4d2fd8"],["/tags/HEXO/index.html","d6bd629e0eef357f7803c32ab1a2d42a"],["/tags/Hash/index.html","41004d6171e33d1e40697a6f2940fc8d"],["/tags/Java/index.html","d7a83727fd66d5af2efb7e9c41bb2b3c"],["/tags/Json/index.html","74c96614b3766f0273aa0f1160b75c6b"],["/tags/LeetCode/index.html","874918fc8dbda685b262082c2c2bfe68"],["/tags/OSI-模型/index.html","e4a1bea2bd182bb5a6e61806060d728a"],["/tags/OneTiny/index.html","0487da26a486030f8222d2a2123f5bb6"],["/tags/Python/index.html","9f95624264703e8caf2fa09d0d3a6bea"],["/tags/Python/page/2/index.html","2757b6f18591a505f6e44653187ab0a8"],["/tags/RSA/index.html","bba925430f3b57ffab5875dc52864688"],["/tags/SSM/index.html","f8dd5c40d77354dd78a37b3b967cb65a"],["/tags/SSM配置/index.html","2f0b3e439bf5b9a9a8fef6863db2dcb2"],["/tags/Vue/index.html","f38b7bf0c41e809cc21b5124c5234654"],["/tags/YAML/index.html","d97680b2f05e7a26307aaf0b5c3168b6"],["/tags/gin/index.html","7531f9b17a0b2c4621a9e596eb25217e"],["/tags/git/index.html","da1c299802c8a2c51655e701724c09a7"],["/tags/index.html","0bafa56fe65da1806410bfd6cdb7c086"],["/tags/json/index.html","ef06e84f27268b09f57832275a7bda0d"],["/tags/note/index.html","03e00c04fa5b702cc7565b59fe7d6f72"],["/tags/request/index.html","3c93dd0077fe90971acfff2632d463eb"],["/tags/response/index.html","8781b0a6dd94ff34241d2f372b83d123"],["/tags/七层模型/index.html","390cdcc941a07846b70ce9068aa55982"],["/tags/上传/index.html","4cfc5bf7755ef54f9f13279275195f00"],["/tags/上传下载/index.html","914b6296e36a6305f2b3fac765cf19c0"],["/tags/下载/index.html","20e4e6cb6fea85a5100bc303593c2f8e"],["/tags/中间件/index.html","ab7404762da2d0da632197321436db73"],["/tags/事务管理/index.html","21e5db5beaae4cc04107bf71770d460f"],["/tags/交叉编译/index.html","e6aadee77e7bad3df8323d9f1d6ec0e5"],["/tags/函数式编程/index.html","b06377c0a3f2332170427dcbb197a651"],["/tags/反射/index.html","3e88c4563fa1f51a351170d1f351deb5"],["/tags/命令/index.html","1b4b63ceb36f2ff5e518775b149815a6"],["/tags/局域网/index.html","d2b942272ae5cb66d1e3feaa8313ade9"],["/tags/并行与并发/index.html","23310002dbe3034810ddef90fa4e3180"],["/tags/拦截器/index.html","76b5d1b0d2d70681bcfdb1ff2f099c45"],["/tags/数据绑定/index.html","04a92938b8585c0347780234a265dd16"],["/tags/数据结构/index.html","8ced6bc87167b6bccbd99ff080626f93"],["/tags/条件编译/index.html","4d53ae587e26bcb842f1ffb95899a8e8"],["/tags/正则表达式/index.html","d434736b96e092fe6cbe25cb4b49026e"],["/tags/爬虫/index.html","69ed6c69879ff0ed5004ad0973acb422"],["/tags/物理层/index.html","6bdf2e234965fb1ab10887692efa95f6"],["/tags/独立开发/index.html","db2655b90148d7d9cdc09cc71acf76ee"],["/tags/生成器模式/index.html","f61c3840e18919b71aaf536bb9efc73b"],["/tags/监视器/index.html","c627d73d9d2f5b86974aa52d27a9933c"],["/tags/算法/index.html","f97039479efd76016deefa4069e947ba"],["/tags/统一异常处理/index.html","51938630cf80db29c70b66bd97eb2fe5"],["/tags/计算机网络/index.html","a9ed7a29b2ebfe0405be22a1f36948ef"],["/tags/路由/index.html","a7af480df29a2ca958b6f85365453886"],["/tags/选项设计模式/index.html","1f958488bc6fb855747df29149961da1"],["/tags/重定向/index.html","aa0e5fe0d77d3ce5026d0279c681e6a9"]];
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
