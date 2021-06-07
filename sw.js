/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","31f55f07c90a9cae8fcd42fced28da25"],["/2019/04/25/GoLang-Note-one/index.html","3fb9fce9549f7f405dc237fad5c4f24b"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","1b9970b6c68560a38117b9aba6ce54ff"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","59625e92ec5c3f2d296ee75a85cf7734"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","82e786e99786922dc200c9497ab27656"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","66273d4081d4b7729b2496b333d3b1ae"],["/2019/04/25/RSA加密原理/index.html","a9c1f9db2af23d4e1bff076dcef84f64"],["/2019/04/25/通信中的加密与解密/index.html","a0881fc858fe082c7c48582d03afe567"],["/2019/04/26/通信中的加密与解密-详细版/index.html","8c062b7fff04a4bad339c30d4d812cb4"],["/2019/05/13/当小程序开发完成后/index.html","75757a74db79bbd076c8e0f9da97c30b"],["/2019/05/15/几句话区分并行和并发/index.html","68a0ca799fa5a48deaaf39965240ca09"],["/2019/05/18/多端同步管理Hexo博客/index.html","6c94d3d768e119a83f9c97ac63a6c1e6"],["/2019/05/19/Git命令大全/index.html","97d01c84a6cffb941c2e006f641a6066"],["/2019/06/09/C-Note/index.html","3d2861e5826cd43bfc3a3fc2ad336a76"],["/2019/06/09/Java-About-Hash/index.html","6ce328e5bd932eaa1720b107e9e56223"],["/2019/06/09/Java-反射/index.html","63ce4c335672fad441d08597118a3a67"],["/2019/07/07/SSM-4-数据绑定/index.html","900f66dfdf208df0c55f637f126ebe82"],["/2019/07/07/SSM-5-拦截器/index.html","9f5825798a6ccfe8bd2b64654d26fb28"],["/2019/07/10/SSM-6-上传和下载/index.html","a4510357afc6a8b993090907b7384040"],["/2019/07/11/SSM-7-统一异常处理/index.html","90adf2cb7cd1d5cad803691673ede234"],["/2019/07/13/SSM-8-Spring事务管理/index.html","e66eda2d7cdcae164448b283fa0eca71"],["/2019/07/14/SSM-配置文件/index.html","660efd325babbca08359dcada3cc788f"],["/2019/07/18/Git-基本操作说明/index.html","f9b982159d8af6d8b221888a61ff2245"],["/2020/03/21/Electron-Note/index.html","b2e4758b30c7aef155f6286fa8efd5a4"],["/2020/04/06/全站变灰的实现/index.html","a4873325130cb0b77073a2e678902c9e"],["/2020/04/08/VUE-note-day1/index.html","b28d3f2ea97d1f606766194fba6cfe2f"],["/2020/04/09/VUE-note-day2/index.html","05907b1cf9b61285e078cbf30cf8d668"],["/2020/07/02/Python【No-1】总叙/index.html","6139a08330c5a4e289899a0e8bc06521"],["/2020/07/02/Python【No-2】基础/index.html","3d5e81e79619a6e0c210eb8057195536"],["/2020/07/09/Python【No-3】判断和循环/index.html","344e07ea1b8f95b4098127355ee02111"],["/2020/07/09/Python【No-4】数据类型/index.html","0bd8482622bcfdf1a50b5ca2a28cfcd6"],["/2020/07/10/Python【No-5】运算符/index.html","ee17e48c1ff179adbf3753dc886f8b2e"],["/2020/07/11/Python【No-6】函数/index.html","fc028fa4fce19f5d83c01d6c68c46e2f"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","f7d68e9d803d46bd1cd680a0b74840ce"],["/2020/07/12/Python【No-Feature】工具类/index.html","74d39bfde84ffb78d523b6d7797b8828"],["/2020/07/12/Python【No-Feature】高级特性/index.html","d98a0a214a7da65822a454e87daa514e"],["/2020/07/12/Python【No-Type】String/index.html","fb821880c0bd8e28a6bab5e1474c4e85"],["/2020/07/14/Python【No-7】错误处理/index.html","436da514f10d20d19a0bec326f4161e8"],["/2020/07/15/Python【No-8】调试/index.html","d7ae187a675bcd78024df40718dd8a76"],["/2020/07/15/Python【No-9】测试/index.html","410f86ca3472d92c5618ed59515586c9"],["/2020/07/16/Python【No-10】模块/index.html","8c577fe7ec7646b4c4911ba6d0323306"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","ba57f97de0e66f7bb4351c2f82c9aa18"],["/2020/07/16/Python【No-16】进程/index.html","7f48f3957106c37fdf228b57acfc6cb0"],["/2020/07/16/Python【No-17】线程/index.html","f2b35c58ff7afe8c98afbe74c28c2ff4"],["/2020/07/16/Python【No-18】协程/index.html","fceea97dcd6785ed48ee82d07e277213"],["/2020/07/16/Python【No-19】文件读写/index.html","419022d1ac7027e980f1193b39b5f3c9"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","50015b00e94a8387b0e461cdd8ca7f08"],["/2020/07/17/Python【No-11】类和对象/index.html","c149d7acb57fe29e5dcfef0bbcd51551"],["/2020/07/18/Python【No-12】私有化/index.html","39a339354ab48aaae854aec6bf93de4b"],["/2020/07/19/Python【No-13】魔术方法/index.html","6e48ac3731475ad1fdc5842978ab028d"],["/2020/07/20/Python【No-14】枚举类/index.html","12005e4a7511fc0d23f1f03eaba19926"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","771219b89dee922ef645b6e2d9fc27b6"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","7f73570a4f134c4b7db17ef69e93a60e"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cdeb3470acdacc990866319c1572d39a"],["/2020/08/20/Python【No-Buildins】json/index.html","760d9f36cd7684a76472ce95ec2f47b4"],["/2020/08/20/Python【No-Buildins】re/index.html","9439b4ef183bc7b45bbe7cdd29929d0f"],["/2020/08/23/Hexo-文件下载功能/index.html","9fb7c0f3c1a8980c55f446bdd9c228d1"],["/2021/02/23/DataStruction [0-绪论]/index.html","6c91bbbe0ee1282df1e499420b489af3"],["/2021/02/23/DataStruction [1-算法]/index.html","0bd33859c394815e64c9e5bb2d0b33a7"],["/2021/02/23/DataStruction [2-线性表]/index.html","523bc0b86e83502a358d06288819d06e"],["/2021/02/23/DataStruction [3-栈]/index.html","8cd185e44f8660c8c5cddd0e671c3756"],["/2021/02/23/DataStruction [4-队列]/index.html","ac470b345ef5ab387f53bee56f5b5e4b"],["/2021/02/23/DataStruction [5-串]/index.html","8c7991b84baca7be85909ea4e6deb390"],["/2021/02/23/DataStruction [6-树]/index.html","4985d678d6ca8db76d34736b7e8c1cef"],["/2021/02/23/DataStruction [7-图1]/index.html","d9d02b0a9a1c88dd3f4e7446f87f5ee6"],["/2021/02/23/DataStruction [8-图2]/index.html","0be4adff0b2abada2cc20c3d210e5c11"],["/404.html","7e880be23317310b570e78202a888489"],["/about/index.html","2b7febd8e10995a3155782b01b0ffb54"],["/archives/2019/01/index.html","ea0f5ca9392d34bb1c935117d8ebd3bd"],["/archives/2019/04/index.html","56910825c4f239912e616b66070d5235"],["/archives/2019/05/index.html","e9be1f6e70af1c30a3e4db8122e83df4"],["/archives/2019/06/index.html","cce38dfb0ef6540d5c92db8e497b608c"],["/archives/2019/07/index.html","7a50be74b7eaa1e04cd61500ff66e4ce"],["/archives/2019/index.html","b8b88d958479c3cf625cb95d1e56d7e2"],["/archives/2019/page/2/index.html","ef269f26299feea26550e35a3a2693f4"],["/archives/2020/03/index.html","df4fee102dccb4d5af88612d9c3c1ca2"],["/archives/2020/04/index.html","a5f78db702f100104b3fb5dbbdc9d894"],["/archives/2020/07/index.html","b9428fc6ce6876ee864cebada5237cb0"],["/archives/2020/07/page/2/index.html","95db0fb3ed5bff713c0570faac923512"],["/archives/2020/08/index.html","8d85ea232f0fedfaabb28ee9a94c6c29"],["/archives/2020/index.html","9d9d845ca398736a7e013bb49f7de541"],["/archives/2020/page/2/index.html","cce957e03b238cc63f005969e20b83e8"],["/archives/2020/page/3/index.html","072cc10198087c161065232da12a59b6"],["/archives/2021/02/index.html","027ce0b1e5f345a2eb1b189a9781707c"],["/archives/2021/index.html","8d456eddc04c0a8f479fd40949aa007a"],["/archives/index.html","a1e02fa8f4c34cf25485f0e6cf04130b"],["/archives/page/2/index.html","a1e02fa8f4c34cf25485f0e6cf04130b"],["/archives/page/3/index.html","a1e02fa8f4c34cf25485f0e6cf04130b"],["/archives/page/4/index.html","a1e02fa8f4c34cf25485f0e6cf04130b"],["/archives/page/5/index.html","a1e02fa8f4c34cf25485f0e6cf04130b"],["/artitalk/index.html","8c2418b9e344ad406fdf0ab465a89223"],["/categories/C-Language/index.html","5b5dbb4554c7bfa34ce7efb2ec03598e"],["/categories/DataStruction/index.html","5b137bc1a86512750a7893332008ebfa"],["/categories/Electron/index.html","11fd7a690c04c8c4b046ba6c6f296698"],["/categories/Git/index.html","dfd52496de737d0b95f347e38faee96a"],["/categories/GoLang/index.html","7c7098653b9ce8109ca62946937f0ea7"],["/categories/HEXO/index.html","024991fa526e9e624f9d55fd37c8c8a0"],["/categories/Java/index.html","77eae2e1dfab325269b7d14f7c28f507"],["/categories/LeetCode/index.html","51a318563877a324de89a3d102fe0111"],["/categories/Note/index.html","3c3de669b1fd6f399484e070c7d6029f"],["/categories/Other/index.html","d3f53d705a211cf39c4fde13d2fc3cfe"],["/categories/Python/OPP/index.html","70673ccd0a16ed5fbda50b8eca73f469"],["/categories/Python/index.html","af454832ed1003ca36291dd93f1b0fa8"],["/categories/Python/page/2/index.html","d19a34616d25ac848f175d7ca4eebf6e"],["/categories/Python/内置库/index.html","3fdc0df16dea56b1dca319c23e1d2043"],["/categories/Python/基础/index.html","59b2e0327da8a9131224d8a39b7d4ee9"],["/categories/Python/爬虫/index.html","9c0de299a4361e639191b550b18c3213"],["/categories/Python/爬虫/基础/index.html","f1eec1bd3f7fa115a6a8ab826a70ccf7"],["/categories/Python/进阶/IO/index.html","0b262458c7a24d004a1d2e2b2284a627"],["/categories/Python/进阶/index.html","ad029f359852f7b38d9f93b288200c32"],["/categories/Python/进阶/进程、线程/index.html","c0724570cd46fce99f748be606ae612d"],["/categories/Python/进阶/错误与调试/index.html","c6bebd7df2001bea60d325226b307028"],["/categories/Python/高级特性/index.html","6fbe104cddaacdff9fe7dc0460c71373"],["/categories/RSA/index.html","761807b985ff5cbbcb1fed8489d2a9a7"],["/categories/SSM/index.html","11bcf2e5bf627d116610060f4e358f36"],["/categories/Vue/index.html","dc33f650ebc323d51e37debc1155a85e"],["/categories/index.html","ea59ad674377bc7eed2a9353eeaf26e9"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","b3aa4e01f47dfd6e05c698203e18218e"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","5c0a2bf279940484feebd79627a86be7"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","18d02c609477cb66db5068b097f674ea"],["/page/3/index.html","6cf70b1768f070e367bf4c34acb7abcb"],["/page/4/index.html","e941f40813bf1a77fe06fa066bb4603a"],["/page/5/index.html","9c7251f13b61ae0d8d7750725516dbbd"],["/page/6/index.html","d11ae26db884becf2e74ab4f18330b0e"],["/page/7/index.html","85493933d0f87dc3dc467a898ba8f72b"],["/sw-register.js","50ad123e2304729bc5e8a9738355988b"],["/tags/C-Language/index.html","0fea361cb7fce46f74d4a3f7341ce234"],["/tags/DataStruction/index.html","118e44f6c3e5db6139965dc9a38ace87"],["/tags/Electron/index.html","128dcfcf569e11b5827f53632410fa08"],["/tags/GoLang/index.html","a684484aab0ce6b8502331d5a01cb1ba"],["/tags/HEXO/index.html","81d195c3e53b4268ca12472689d8eed9"],["/tags/Hash/index.html","dd79341c23f978a27941dd974ee50e65"],["/tags/Java/index.html","5d3726f86295a56ff57fd7eb697cfb46"],["/tags/LeetCode/index.html","2d312239188c226df25e62353c60a4f7"],["/tags/Python/index.html","46bb0ebef4f0641bd72aef9e4f6a2a1a"],["/tags/Python/page/2/index.html","e0c57c4af1fbf29fa72fc630e08cd6a8"],["/tags/RSA/index.html","1470addf554ea11474c905e2eceadd62"],["/tags/SSM/index.html","e7c23414dccd85d25cee191f3219302f"],["/tags/SSM配置/index.html","5c379f60d43afc6e1ff74b8fcc2c9924"],["/tags/Vue/index.html","7155daa7aaf1512afc27104671c31871"],["/tags/YAML/index.html","d7ccdd4cf48987c521fb5b4588fdc868"],["/tags/git/index.html","f19dacd974c503a661f0ac3890bd8022"],["/tags/index.html","aabdc3da65c7c40b90f7e779d00a0f18"],["/tags/json/index.html","cfcc038d63e0f0f286f2035413b4e4e3"],["/tags/note/index.html","b53d9aebb16944b6f040f5073d9ed2d9"],["/tags/上传下载/index.html","991f874a241ac58374e91a55d5907623"],["/tags/事务管理/index.html","7e26d4aa6bf4cdafa93dd78a97a7a8f7"],["/tags/函数式编程/index.html","c3079072e1dd1102622e4281686ae765"],["/tags/反射/index.html","9aea6806d7503e122defdf65e0fe4186"],["/tags/命令/index.html","d5f16c2c5271f1ebed1b6a069de96933"],["/tags/并行与并发/index.html","ee341dcfdb7f246d2738329042a80a1a"],["/tags/拦截器/index.html","6e17e90a5cfb00df638b158c6e51bd3e"],["/tags/数据绑定/index.html","23ff4dbc5a31bea6d603e8ab99a9600e"],["/tags/数据结构/index.html","0c88e722b741a4574bd60e795c964418"],["/tags/正则表达式/index.html","9f2ddc8412f8dfab1d3e4321b907ef23"],["/tags/爬虫/index.html","37a324780df0b434ff040d5461060c63"],["/tags/算法/index.html","7bf7b1f686f2820ec17867ca6591f568"],["/tags/统一异常处理/index.html","d6a37b23c09832aad088c0b8df0ae552"]];
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
