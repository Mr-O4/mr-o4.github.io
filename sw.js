/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","d336cae5d993501ec47155cd53042646"],["/archives/2019/04/index.html","bea8969b7757799bef151b07e6963f2b"],["/archives/2019/05/index.html","25058588e44f53fda9126ff40b9b07fa"],["/archives/2019/06/index.html","4a74e3c23dd857aa87873dab5b0eea8a"],["/archives/2019/07/index.html","b892495519191991365f873628874ca3"],["/archives/2019/index.html","99a8ddc32776e4a1af73f6746c93b82e"],["/archives/2019/page/2/index.html","b3fddf061d7b824afbaf59fd8661980a"],["/archives/2020/03/index.html","e9f1f121044f2f2968b294c72403a167"],["/archives/2020/04/index.html","8dc805cfcd914b61d86329963205a703"],["/archives/2020/07/index.html","0a57e1ed03f09334445897996ec3b4c0"],["/archives/2020/07/page/2/index.html","bf65f14d9bc7191b13222c6e8d9986dd"],["/archives/2020/08/index.html","b1842956a366ac26434c2caea92f25d4"],["/archives/2020/index.html","25b95ef01b70734d6d7ca1d6368e0f68"],["/archives/2020/page/2/index.html","112736e81e080b44d66fa678c859937f"],["/archives/2020/page/3/index.html","546ea19a076e46fd0b24c8e6b30dc186"],["/archives/2021/02/index.html","daa2f563f619adb7e9877be34de28880"],["/archives/2021/06/index.html","d2cbbd269e6ebd58151484f0ecd92437"],["/archives/2021/index.html","21f7c47d217b9c99c6561e79dcbe4556"],["/archives/index.html","0e6d4e2f3536b7d67b789fe179b55335"],["/archives/page/2/index.html","0e6d4e2f3536b7d67b789fe179b55335"],["/archives/page/3/index.html","0e6d4e2f3536b7d67b789fe179b55335"],["/archives/page/4/index.html","0e6d4e2f3536b7d67b789fe179b55335"],["/archives/page/5/index.html","0e6d4e2f3536b7d67b789fe179b55335"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","fab7ebe5b4ab5972ba269baed161a3e7"],["/categories/DataStruction/index.html","36832a38b62879e01ff27d30c9556ef3"],["/categories/Electron/index.html","5434e86a37b147c8e9fe44e88da6d824"],["/categories/Git/index.html","cbdb86873d2f070627cf70d69a21fd43"],["/categories/Golang/index.html","257bbe4c9925000140fd997f4f7d23d0"],["/categories/HEXO/index.html","6fe0975486812927afe12784025af013"],["/categories/Java/SSM/index.html","3084dc033a9ed03d821a846510259185"],["/categories/Java/index.html","0f233e42ac5929247215042c039abcb8"],["/categories/LeetCode/index.html","9aad010368709e1827e3a19265ac6f95"],["/categories/Note/index.html","5f396c49e62e40d19d13e91b96e3244a"],["/categories/Other/index.html","0542a8ff7cdbc9fc9f87a118760b0440"],["/categories/Python/OPP/index.html","683b7155814ee28cab0fe6c9f6db4053"],["/categories/Python/index.html","0a8b62e47230b1a8426ac13f7f042df3"],["/categories/Python/page/2/index.html","83878ced7422e58eaf3f2a0e317b04c9"],["/categories/Python/内置库/index.html","21f945c595af550311ff18598666a92b"],["/categories/Python/基础/index.html","ba8ce8f778db138d27c76c2577c1f94b"],["/categories/Python/爬虫/index.html","4d542c0eb95509f324b1009480e2dd9d"],["/categories/Python/爬虫/基础/index.html","659eebf6f64e8a03a59fd90142e8730e"],["/categories/Python/进阶/IO/index.html","4a78d218fad1ba08d402cf7863af2bc0"],["/categories/Python/进阶/index.html","57ef8c0597c9058ff24f0f1f92d49a0d"],["/categories/Python/进阶/进程、线程/index.html","f8120047980694dd1d66cb7fc5c83efc"],["/categories/Python/进阶/错误与调试/index.html","698615f81c2ec1d37128f199a3be279e"],["/categories/Python/高级特性/index.html","69443597dfcb8375de664402da3fe342"],["/categories/RSA/index.html","6788434b6cda7f5d007c8b372a9ded19"],["/categories/Vue/index.html","0e10d4f6b9470291f7a87b5620f6a009"],["/categories/index.html","e3cafdc016b05e9d6178bff5112c49e2"],["/css/first.css","6410fc49a40d242264438ca22dc675fa"],["/css/style.css","05049a5f2afe91494d5b19f2bbefae67"],["/friends/index.html","ab6325a395cc2108d995f28ecf58951d"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","2188f4bdd6e045f6bcc4a621a107732b"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","d7abfdb05f3595904a4f24680bef4463"],["/page/3/index.html","a7003be3e74725f0144410a22031d7ae"],["/page/4/index.html","f070ca6783c121cb821591f643c956f9"],["/page/5/index.html","864211e2879ece4fe396082874455db8"],["/page/6/index.html","28e2df381ad0aa516844bb650b8bec46"],["/page/7/index.html","51e08b3c9ce453ff506559702187b82d"],["/posts/11720.html","0736018af3ae8cdab08340c18d545841"],["/posts/12119.html","8146d9397ba1cb964ba95a8f359f1c74"],["/posts/13406.html","41444c9ac259332f68d36c48331eee8b"],["/posts/13460.html","c38a799e96723ec5dc5900e36385281b"],["/posts/15463.html","3adb325851615583ba6a842198161843"],["/posts/16107.html","de527d26edf1d567ef8f4a9ba8aad4c0"],["/posts/17036.html","b4b265f0726eca48675d468296eeee8b"],["/posts/17751.html","73dcbe4fdbd3e9132890b63e23deeaff"],["/posts/18012.html","c9e2c704ce48c027b342c2ffa2a5f54c"],["/posts/18591.html","31693e7efa7f0dcc8d32aa55e1282078"],["/posts/19751.html","4b90abbf8a433a701776ab5d32d1ce07"],["/posts/21668.html","f393db5f25e10c3e1b685aa100d4b7f2"],["/posts/22089.html","882b52915e271d2b4e6328f69972ff37"],["/posts/24435.html","766e48dcaa02e482f761c821ace37969"],["/posts/25425.html","2d9781bd369a26f1558d2b1c1816b9c5"],["/posts/25647.html","ac5792b5a6034096c13120a253082d00"],["/posts/25754.html","2b7b83a1d29a392fc86d6d5e270c2963"],["/posts/28223.html","4cefa6875703ff3f94b9757947a295b4"],["/posts/28995.html","c5a3f1627c079e65c76538b94c090ad9"],["/posts/29925.html","75e9bb598af515fdcc99f83c0a306f3a"],["/posts/31044.html","869db02d42ace8ea3ede52a99b3632ef"],["/posts/32620.html","a1f91fcf9233ba8bda01e8b0479d38b6"],["/posts/33205.html","b26d7831d6fa99cf99c094c3ec5472ae"],["/posts/33364.html","b04c1c183f1d4b46d597f50759fa0557"],["/posts/34681.html","d5c503fec83a327c1ea94e3032f45fe4"],["/posts/34736.html","4a4c405463b40493f6e644f7457a8d3a"],["/posts/35371.html","a7b24a46503cf0c19030d2572e67946c"],["/posts/37243.html","4802741b40c1b7d138286aca28e94632"],["/posts/37390.html","968dfbabed62ec655e3c3b21009977ab"],["/posts/37710.html","ef91e3436a70ec5ef62f1e4993fbd159"],["/posts/38014.html","7e13f50db9121c8513aa29d6ce26018e"],["/posts/3844.html","45b7614d3bbdf7b0e92a4fc0d8e020b7"],["/posts/3887.html","4f13366d329875e7c55abc60044cefe7"],["/posts/38965.html","abb662057943b0d271c07ceb6d0ed0e4"],["/posts/39690.html","a3502e9d022fe93f79052d11bfc2c54b"],["/posts/39743.html","e62a2147083747cbcba66f1c9a2b4b97"],["/posts/41079.html","7ec55d86eaddcc9492ed6ea97645f712"],["/posts/41307.html","71c62b6927366965315727efae4cd7d0"],["/posts/41814.html","f295ab7242b6ee19f60e8a178d39b647"],["/posts/41947.html","6742e36dbcefb7ec4b73829692efa2be"],["/posts/42006.html","5824c0a23e2046e2b9537ab97c5fb5e5"],["/posts/42106.html","333a75e6efb98712f29aaec46d09af7c"],["/posts/42715.html","b687699a7e0a587362c186acda2720ce"],["/posts/42822.html","b02d3946225007729f2c4addbab79572"],["/posts/43293.html","a43fc8cbbc67f3551757307ec28b9974"],["/posts/44644.html","92442c23cfb015e341dab8e241053bf5"],["/posts/44742.html","f604be25a4b310d6e0eed0d7f1fcffd2"],["/posts/45109.html","21265c9927156917eb57dbab516a7f02"],["/posts/45196.html","ee158d4631115196cc74b1eef0e4d75c"],["/posts/46719.html","04daad47c10e243f9eb156374f6e41d6"],["/posts/46855.html","5c6b16296f45036deb0278e3992a6383"],["/posts/48872.html","7d13150d293929c9b9a0006ccd9b26f0"],["/posts/4950.html","46618e7479e98b61c5426a1c4b3c93c7"],["/posts/50917.html","670f68abf8ba4391d38f4742b00a4b66"],["/posts/52628.html","a80a4fd1e53cd8529bfab53a098fd83b"],["/posts/54509.html","523baf0246f05a07d12cef55dfcab8ed"],["/posts/55493.html","645ae3e65cefea633aba06dea65f6db9"],["/posts/55674.html","5f1dd63681b8eaadd5dc6a690abe9b73"],["/posts/59097.html","070dbf736cc744bd4f2e4d633bbefba2"],["/posts/60258.html","f84e5c5ea53f4780a507c482f3db270d"],["/posts/62154.html","b3dd92e0ce9b205bb8b13799820567ae"],["/posts/63024.html","6cdff80a5f5d1422cfc21de348475d1a"],["/posts/6343.html","0570f2d47d0ebac8d25a398e3efe55cc"],["/posts/64290.html","86bf9789072fe9ad82f8991837e8c9a2"],["/posts/65033.html","ec7bf2dd6b337a140bcf3de7ff3edbb1"],["/posts/6930.html","575ba07401c3af560ca17e62cd2d7b34"],["/posts/7031.html","172ea51e031a911a1850362c9613071f"],["/posts/9049.html","719be17ed2b3d7653a033c7ca4bf39fc"],["/posts/9832.html","5c93426ebdc449076b34b2f0ce89d65d"],["/sw-register.js","d81713d0d78c1504646fcde0752f8dee"],["/tags/C-Language/index.html","3fd750a39a0767fc4670bb2360744d13"],["/tags/DataStruction/index.html","37df0688509161419f79e164557ed3ed"],["/tags/Electron/index.html","629d3b6c91663497bb90295b2d4b1618"],["/tags/FTP/index.html","97ee69e325f0c3d56eace2fb1f57c9ac"],["/tags/GoLang/index.html","97a111ca3d4ded7810bffd32611f452d"],["/tags/HEXO/index.html","e5a166dd58dfe113959568355c7dfec5"],["/tags/Hash/index.html","b53170872f6234d5558766997f234f4e"],["/tags/Java/index.html","21df3ca5a959968fc13ddf89320ff049"],["/tags/LeetCode/index.html","e1a24f9c80d9fb9986d96a56bafbef8c"],["/tags/OneTiny/index.html","106e1707812f9716506494d5860c519b"],["/tags/Python/index.html","5dbf3bb0601118ac530b1dc10e7aa53f"],["/tags/Python/page/2/index.html","0fa7fcb00f087bbe620d0e7c57d0efef"],["/tags/RSA/index.html","7fc775e1bbba8f950af9d4ffa253853d"],["/tags/SSM/index.html","6c47ccb6bfe15387db1be3b1473a3df1"],["/tags/SSM配置/index.html","221a96fd2aa64c0a44f31c18a4112e73"],["/tags/Vue/index.html","7f10fee67fc9dbb45ba5e2e7a8e05861"],["/tags/YAML/index.html","69898fb160351f06f33804374e2a205c"],["/tags/gin/index.html","4e0c1e654b430cf6a54f09e52fec7e08"],["/tags/git/index.html","cf421163be00e9e06df746016e1af2b2"],["/tags/index.html","485bdfc542f10b59d6160caaeda06210"],["/tags/json/index.html","f3a89f61ddf7a0e7ed05bf60a82651ac"],["/tags/note/index.html","e5619ff1312136ec1d3818f74678978f"],["/tags/上传下载/index.html","af4ae370307fd23fce58d92db22164e7"],["/tags/事务管理/index.html","36d2c8ecd0898c69150679a155a3941a"],["/tags/函数式编程/index.html","9b852fd67904fbc84f5c085b2a278446"],["/tags/反射/index.html","5faade438966636dcd71e369c0c59392"],["/tags/命令/index.html","e5e091e7b314e606a1e6f479c409a300"],["/tags/局域网/index.html","bb3a744a8af432f84457a21e3f14cf0d"],["/tags/并行与并发/index.html","6eeee25edf704c1de822e8db79c2bf13"],["/tags/拦截器/index.html","d835f1ffe99082afc1c74b9f39a77df1"],["/tags/数据绑定/index.html","f5d4a9aeeed13510545a37ea0e03a885"],["/tags/数据结构/index.html","bde5558a3613ba357dbd419f0771e3e3"],["/tags/正则表达式/index.html","420a79a6a265f4773dddffd0e34064f5"],["/tags/爬虫/index.html","77edc575246b574c554a652a793fd8dd"],["/tags/独立开发/index.html","b4bb302392b5ac5beb345f569eeecd73"],["/tags/算法/index.html","017195becea785ffaf32d6c51705442f"],["/tags/统一异常处理/index.html","2d781828b16fa06028e086aaac35727a"]];
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
