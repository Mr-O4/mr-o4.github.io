/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","cd3107a6b195f348ed3cdd4794a18e06"],["/2019/04/25/GoLang-Note-one/index.html","8e2bb936edce4fcf003c367ec9d420d4"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","24d9d71b5504b5a4cd16c616206bdad9"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","37973e113f8aaa4d7406800b000b1185"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","283c94f16bb91f601f280d7c0b9f09b0"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","44cb10601373633c63edd8f4640ef184"],["/2019/04/25/RSA加密原理/index.html","c9f6e662cd9055eee6455a8437925728"],["/2019/04/25/通信中的加密与解密/index.html","d8c9b4686e077ba5e5de0ca82dd72877"],["/2019/04/26/通信中的加密与解密-详细版/index.html","8bee91f1b5a226a0ac740499f8ce0684"],["/2019/05/13/当小程序开发完成后/index.html","481a741fcf000da79675684cd06124da"],["/2019/05/15/几句话区分并行和并发/index.html","3710c5675b2d1ec4feb68257d1e60038"],["/2019/05/18/多端同步管理Hexo博客/index.html","b8548e58c91aa3a23284c814c108547a"],["/2019/05/19/Git命令大全/index.html","91f2d755a6642541bdd84455fbc60560"],["/2019/06/09/C-Note/index.html","8904cbcb3690494a4d315d5e4bf764d0"],["/2019/06/09/Java-About-Hash/index.html","7dbb58a929cb54e9ead445ebc1eddbb0"],["/2019/06/09/Java-反射/index.html","792577d5a1f323baf61982b360914649"],["/2019/07/07/SSM-4-数据绑定/index.html","2c18c16b8bcd1d258383727894e566d7"],["/2019/07/07/SSM-5-拦截器/index.html","a681bf3bcee15e4c91f593b4493c01ee"],["/2019/07/10/SSM-6-上传和下载/index.html","6b6e08e96e9e078c3f6946d7fc56ede2"],["/2019/07/11/SSM-7-统一异常处理/index.html","14e0a2c9986dd00cffb3b8096e226693"],["/2019/07/13/SSM-8-Spring事务管理/index.html","bb570456ed0756701ae57c07cfa063d6"],["/2019/07/14/SSM-配置文件/index.html","e780682299d244eab5758ae2ad7d73c0"],["/2019/07/18/Git-基本操作说明/index.html","f8aee61d81a6d33f6e0b32345ec8406b"],["/2020/03/21/Electron-Note/index.html","1464ff43bc649757cbaee3d4995dd7e2"],["/2020/04/06/全站变灰的实现/index.html","9fe194dd270a79d5467bb242bc5ee0ef"],["/2020/04/08/VUE-note-day1/index.html","ab35e438d5dc259aaae84470df719684"],["/2020/04/09/VUE-note-day2/index.html","78e003945ed50c9802db05e4f3d26797"],["/2020/07/02/Python【No-1】总叙/index.html","4db81825a67d006c6d3c4be016771e6e"],["/2020/07/02/Python【No-2】基础/index.html","f2c6ad76c1ac26c6116e4cc7772bf26d"],["/2020/07/09/Python【No-3】判断和循环/index.html","04b7370af3518b8499ead6c2d4aacf55"],["/2020/07/09/Python【No-4】数据类型/index.html","d5495d875f040453ae6992bfb03160c2"],["/2020/07/10/Python【No-5】运算符/index.html","4108c1541653e7dc504515b9f4b2a160"],["/2020/07/11/Python【No-6】函数/index.html","a5bb6a489abfb3056d252ae330da4a0e"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","4f9a521492b44df5578d2feb78197a49"],["/2020/07/12/Python【No-Feature】工具类/index.html","20a3f337ce72530087b47963d11dfed8"],["/2020/07/12/Python【No-Feature】高级特性/index.html","b9f0eb51db256394c0359906e1d85a52"],["/2020/07/12/Python【No-Type】String/index.html","232d60a76a69ed187faa03d14a2d7bc2"],["/2020/07/14/Python【No-7】错误处理/index.html","98f6f74c857297e4834f374bcac50410"],["/2020/07/15/Python【No-8】调试/index.html","6682888deab3ba9af3915ade565c9a31"],["/2020/07/15/Python【No-9】测试/index.html","bb7d6e6f00b3e67b4b78560a78d9c105"],["/2020/07/16/Python【No-10】模块/index.html","112326069c1dee7450bde7c2e3f866c8"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","37eee3a4d7480888b9c276919d76988e"],["/2020/07/16/Python【No-16】进程/index.html","20f5a97e5ed3f580df32a435ba27bae9"],["/2020/07/16/Python【No-17】线程/index.html","9bc60309c744d30fd25c97fc51162932"],["/2020/07/16/Python【No-18】协程/index.html","74cda2059ae6724bda62bd6c4d5bb0d0"],["/2020/07/16/Python【No-19】文件读写/index.html","c2c52022d8583826d17d62502c5958bb"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","5d80649ad4e03e8bc024110741ba158a"],["/2020/07/17/Python【No-11】类和对象/index.html","2bf57d8d7d206fbc086b4ccf1f2956c6"],["/2020/07/18/Python【No-12】私有化/index.html","57fc5a54c5e8c8772c760f715eecfdcd"],["/2020/07/19/Python【No-13】魔术方法/index.html","f6eafd3f946c490ba1cc28d7996e5f74"],["/2020/07/20/Python【No-14】枚举类/index.html","7cfd5c9c1cc84547c1f7c863d1782729"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","20bbb18e2b1ae13a0f2c742cfeaa9b66"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","02f914a435746b960f445e6ecad49b04"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","effeef0974f05cee2ebe1d4bffa1d18f"],["/2020/08/20/Python【No-Buildins】json/index.html","c03be5ce096134148a5bbcd976db6dd7"],["/2020/08/20/Python【No-Buildins】re/index.html","7578aec4d5e2180893bc270b2abe0986"],["/2020/08/23/Hexo-文件下载功能/index.html","d5ddc562e9b1c87202e7a077abe2fb3a"],["/2021/02/23/DataStruction [0-绪论]/index.html","9e297089042b7305fe33d9681d4b3bbe"],["/2021/02/23/DataStruction [1-算法]/index.html","b5c8ef351f8be477940eea53b602739c"],["/2021/02/23/DataStruction [2-线性表]/index.html","82589408a47105d47ac9c47b52276408"],["/2021/02/23/DataStruction [3-栈]/index.html","40a9bb56a532879f15ad5e265104faa3"],["/2021/02/23/DataStruction [4-队列]/index.html","daf2fc538bb6059cd263c46552b6d4e3"],["/2021/02/23/DataStruction [5-串]/index.html","be62aaea2da3810d4b3a73aff1cff61b"],["/2021/02/23/DataStruction [6-树]/index.html","a442f6d1771dc0d5fa32296bb9555b25"],["/2021/02/23/DataStruction [7-图1]/index.html","f364f8465b108d1b56bdf4a114982a5b"],["/2021/02/23/DataStruction [8-图2]/index.html","8be03d58030341bf9f2ed5abb266f2c0"],["/404.html","662013a3e562db5d470c7c218f184321"],["/about/index.html","58be1690b2d127274ac19b61313b0e18"],["/archives/2019/01/index.html","703ad5c140f95d80a146fcef5e665f33"],["/archives/2019/04/index.html","0c1dcf660427f5b824b1ae5489ecb918"],["/archives/2019/05/index.html","740e7bca37bf1fdca31788b899d8251a"],["/archives/2019/06/index.html","39c59304d8d471236bc2b571ff4296e3"],["/archives/2019/07/index.html","86f141ab56e3b51934dae52bbfbacc5f"],["/archives/2019/index.html","94db6f580e5ce2aeb93d9f2e874db550"],["/archives/2019/page/2/index.html","6b4d4ac7d5b9ea326587fab0fc46cadd"],["/archives/2020/03/index.html","0272b8cfd7a176a98f185fee5b4e8ac9"],["/archives/2020/04/index.html","45bdef85defe5fd6c7d14198c5a94a4e"],["/archives/2020/07/index.html","83dc0e83127009d7d07bad01c145bcf7"],["/archives/2020/07/page/2/index.html","6dca2bfc636292acf3d90cbf235c569e"],["/archives/2020/08/index.html","a2d4eef0402d05f2aec80751f50918b2"],["/archives/2020/index.html","301f1e0336072cab29be4badcb5593e4"],["/archives/2020/page/2/index.html","89cc8b9feaae41ba9aea30890f89017d"],["/archives/2020/page/3/index.html","5cafbb340cf0258350621a8a213238a3"],["/archives/2021/02/index.html","88d8ef0efa43369981a5906551bd91df"],["/archives/2021/index.html","269d09421d898b7fd31281d25206836b"],["/archives/index.html","b22a6d64b65e2814a1975745e25aa7e3"],["/archives/page/2/index.html","b22a6d64b65e2814a1975745e25aa7e3"],["/archives/page/3/index.html","b22a6d64b65e2814a1975745e25aa7e3"],["/archives/page/4/index.html","b22a6d64b65e2814a1975745e25aa7e3"],["/archives/page/5/index.html","b22a6d64b65e2814a1975745e25aa7e3"],["/artitalk/index.html","725d9f8a212c4c23c464d4fdd0b0a7ef"],["/categories/C-Language/index.html","fe1ee4a1285a23a040aedc08077d5982"],["/categories/DataStruction/index.html","8ca42658590e0ced98209adb187d8fb0"],["/categories/Electron/index.html","f4c679861650dd8402341fd7ac068a0e"],["/categories/Git/index.html","a1681ae41433d6235772fccc7e2221c1"],["/categories/GoLang/index.html","2b588ab00e0207d93791e86477cdc55e"],["/categories/HEXO/index.html","83be6e33b9efc2846e77a95aa194458e"],["/categories/Java/index.html","776d61c1bb0770fcfca152516b5cf033"],["/categories/LeetCode/index.html","3376523a1b602b7b19d7dfa1996d9294"],["/categories/Note/index.html","df5357e74e52075413eb841eefc14330"],["/categories/Other/index.html","312a3da8673057af3ed87745bd5f5f2f"],["/categories/Python/OPP/index.html","831c61c546498accea1cb3e409b6228e"],["/categories/Python/index.html","bf8bd70a67db4eaa3c0d1fb660765b38"],["/categories/Python/page/2/index.html","435645a6715f8129ca8e60d71ee34c6f"],["/categories/Python/内置库/index.html","7f3cd78284542248d1952cb1f043ce89"],["/categories/Python/基础/index.html","8d7b7a3bf7a10452d1eb9ca1e46a3d99"],["/categories/Python/爬虫/index.html","5d539ec226e919b6594828c1ef323723"],["/categories/Python/爬虫/基础/index.html","e619fb764873b43795ccb5685f47b19d"],["/categories/Python/进阶/IO/index.html","dbd014b7a87dcbc8e3dea9c17829fb99"],["/categories/Python/进阶/index.html","b3efb1ab2ac2109b0f1b8152dc77443a"],["/categories/Python/进阶/进程、线程/index.html","851c738ca787d0a9d82ff228e4e344b5"],["/categories/Python/进阶/错误与调试/index.html","e3c01007129e24fb6a3d83ecc4622f5f"],["/categories/Python/高级特性/index.html","183f9f756ab4cdcb5be5f8ec62044135"],["/categories/RSA/index.html","99a3222832fffcaa73cd2c68777c090a"],["/categories/SSM/index.html","e6e712fc6a18e0a75b13acb86fa4107d"],["/categories/Vue/index.html","3773dff6245a7aa695cae45bd3606e90"],["/categories/index.html","0a74294f41ca27653aee8b3eb89f24d9"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","022787c4860cf906961c1319c050daf1"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","1eb9eda5b428868b9bba81c2c0029a20"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","6c44c78747902d48e658996ba5857b4b"],["/page/3/index.html","d52b1a38224a4c94b399ddd9cdcf505b"],["/page/4/index.html","ceacce326a0d6980a6a686ce91e94e1e"],["/page/5/index.html","65f77aee494dbef5344d97dfbe06efd3"],["/page/6/index.html","2533f9f55ec8ee515f8b8ebaaff6d061"],["/page/7/index.html","68e3a37ea479e3c9dbaeaea9589ada8a"],["/sw-register.js","44a554a7c2d83f64f4f3e4919e31975a"],["/tags/C-Language/index.html","8629cd2dd9b70c9eb9ace00756cc2204"],["/tags/DataStruction/index.html","686aeea5592a5a493e189691dc710037"],["/tags/Electron/index.html","f7e63e83203c1ca0fd37e17b3e1f3d04"],["/tags/GoLang/index.html","7c1336c140cff8a7e40ac585ff91a540"],["/tags/HEXO/index.html","b5e78a1eb12dc9ba8253855b17532d07"],["/tags/Hash/index.html","82ddb9d7c3d1e6195edd3b4c738c935f"],["/tags/Java/index.html","35b60770c3ab579e24f008a8f1e77077"],["/tags/LeetCode/index.html","f92a1525885ed3e850725f878cdb5753"],["/tags/Python/index.html","575374f1d45c7a40fb2a8cee2f692908"],["/tags/Python/page/2/index.html","ec2b98083701e050a8c55f3923c8b573"],["/tags/RSA/index.html","0658f9e96f85a8d5980c39c73cbd081c"],["/tags/SSM/index.html","013a831d1ed490731ab80feb45ac8dfa"],["/tags/SSM配置/index.html","1d7c1039b1d3926851ef5bfc94830b70"],["/tags/Vue/index.html","beb2c7bbd322a3a66b1b4c20448db829"],["/tags/YAML/index.html","74231f154baa6164c25688b8626600b5"],["/tags/git/index.html","c58cc164bcbe05e8450c73e95b009fa2"],["/tags/index.html","2a61c35d5753372118045bc96893ca24"],["/tags/json/index.html","b39e36ae4a6186fd073f5f19abb598b3"],["/tags/note/index.html","f6dbc71514b7549018c7f5cd4a386969"],["/tags/上传下载/index.html","63eb70f6cbd9ba89dd216afceb38075b"],["/tags/事务管理/index.html","7dc9439b055d049df040edfeda84a515"],["/tags/函数式编程/index.html","328003c396f01535b9c014fcc8d6d0b9"],["/tags/反射/index.html","bf5b07c04f7765c7b61c2cbde8ed838c"],["/tags/命令/index.html","ba3442330385a57056bfbaf44413b3f2"],["/tags/并行与并发/index.html","9183761979d86210fa443929762a4b71"],["/tags/拦截器/index.html","731c87c8bd5bf51ef4137006fa9e0159"],["/tags/数据绑定/index.html","41643d5d7836315402d351d0c3ec3dc2"],["/tags/数据结构/index.html","6f3dca06c0ac6bb493ee0ddbdd483e62"],["/tags/正则表达式/index.html","262b1708304ccd1bf5deb953707dfa9d"],["/tags/爬虫/index.html","ebee86ff854a8d9ff99fa033dbd530ea"],["/tags/算法/index.html","7400c6b697d559c156bb1992d47dc055"],["/tags/统一异常处理/index.html","299dddb882fedf6dfadfcab953f207c8"]];
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
