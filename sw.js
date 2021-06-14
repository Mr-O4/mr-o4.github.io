/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","31f55f07c90a9cae8fcd42fced28da25"],["/2019/04/25/GoLang-Note-one/index.html","3fb9fce9549f7f405dc237fad5c4f24b"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","1b9970b6c68560a38117b9aba6ce54ff"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","59625e92ec5c3f2d296ee75a85cf7734"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","82e786e99786922dc200c9497ab27656"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","66273d4081d4b7729b2496b333d3b1ae"],["/2019/04/25/RSA加密原理/index.html","a9c1f9db2af23d4e1bff076dcef84f64"],["/2019/04/25/通信中的加密与解密/index.html","a0881fc858fe082c7c48582d03afe567"],["/2019/04/26/通信中的加密与解密-详细版/index.html","8c062b7fff04a4bad339c30d4d812cb4"],["/2019/05/13/当小程序开发完成后/index.html","75757a74db79bbd076c8e0f9da97c30b"],["/2019/05/15/几句话区分并行和并发/index.html","152be33399f39d58b296ab5dcdefb9d8"],["/2019/05/18/多端同步管理Hexo博客/index.html","6c94d3d768e119a83f9c97ac63a6c1e6"],["/2019/05/19/Git命令大全/index.html","97d01c84a6cffb941c2e006f641a6066"],["/2019/06/09/C-Note/index.html","3d2861e5826cd43bfc3a3fc2ad336a76"],["/2019/06/09/Java-About-Hash/index.html","6ce328e5bd932eaa1720b107e9e56223"],["/2019/06/09/Java-反射/index.html","63ce4c335672fad441d08597118a3a67"],["/2019/07/07/SSM-4-数据绑定/index.html","900f66dfdf208df0c55f637f126ebe82"],["/2019/07/07/SSM-5-拦截器/index.html","9f5825798a6ccfe8bd2b64654d26fb28"],["/2019/07/10/SSM-6-上传和下载/index.html","a4510357afc6a8b993090907b7384040"],["/2019/07/11/SSM-7-统一异常处理/index.html","90adf2cb7cd1d5cad803691673ede234"],["/2019/07/13/SSM-8-Spring事务管理/index.html","e66eda2d7cdcae164448b283fa0eca71"],["/2019/07/14/SSM-配置文件/index.html","660efd325babbca08359dcada3cc788f"],["/2019/07/18/Git-基本操作说明/index.html","f9b982159d8af6d8b221888a61ff2245"],["/2020/03/21/Electron-Note/index.html","b2e4758b30c7aef155f6286fa8efd5a4"],["/2020/04/06/全站变灰的实现/index.html","a4873325130cb0b77073a2e678902c9e"],["/2020/04/08/VUE-note-day1/index.html","b28d3f2ea97d1f606766194fba6cfe2f"],["/2020/04/09/VUE-note-day2/index.html","05907b1cf9b61285e078cbf30cf8d668"],["/2020/07/02/Python【No-1】总叙/index.html","6139a08330c5a4e289899a0e8bc06521"],["/2020/07/02/Python【No-2】基础/index.html","3d5e81e79619a6e0c210eb8057195536"],["/2020/07/09/Python【No-3】判断和循环/index.html","344e07ea1b8f95b4098127355ee02111"],["/2020/07/09/Python【No-4】数据类型/index.html","0bd8482622bcfdf1a50b5ca2a28cfcd6"],["/2020/07/10/Python【No-5】运算符/index.html","ee17e48c1ff179adbf3753dc886f8b2e"],["/2020/07/11/Python【No-6】函数/index.html","fc028fa4fce19f5d83c01d6c68c46e2f"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","f7d68e9d803d46bd1cd680a0b74840ce"],["/2020/07/12/Python【No-Feature】工具类/index.html","74d39bfde84ffb78d523b6d7797b8828"],["/2020/07/12/Python【No-Feature】高级特性/index.html","d98a0a214a7da65822a454e87daa514e"],["/2020/07/12/Python【No-Type】String/index.html","fb821880c0bd8e28a6bab5e1474c4e85"],["/2020/07/14/Python【No-7】错误处理/index.html","436da514f10d20d19a0bec326f4161e8"],["/2020/07/15/Python【No-8】调试/index.html","d7ae187a675bcd78024df40718dd8a76"],["/2020/07/15/Python【No-9】测试/index.html","410f86ca3472d92c5618ed59515586c9"],["/2020/07/16/Python【No-10】模块/index.html","8c577fe7ec7646b4c4911ba6d0323306"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","ba57f97de0e66f7bb4351c2f82c9aa18"],["/2020/07/16/Python【No-16】进程/index.html","7f48f3957106c37fdf228b57acfc6cb0"],["/2020/07/16/Python【No-17】线程/index.html","f2b35c58ff7afe8c98afbe74c28c2ff4"],["/2020/07/16/Python【No-18】协程/index.html","fceea97dcd6785ed48ee82d07e277213"],["/2020/07/16/Python【No-19】文件读写/index.html","419022d1ac7027e980f1193b39b5f3c9"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","50015b00e94a8387b0e461cdd8ca7f08"],["/2020/07/17/Python【No-11】类和对象/index.html","c149d7acb57fe29e5dcfef0bbcd51551"],["/2020/07/18/Python【No-12】私有化/index.html","39a339354ab48aaae854aec6bf93de4b"],["/2020/07/19/Python【No-13】魔术方法/index.html","6e48ac3731475ad1fdc5842978ab028d"],["/2020/07/20/Python【No-14】枚举类/index.html","12005e4a7511fc0d23f1f03eaba19926"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","771219b89dee922ef645b6e2d9fc27b6"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","7f73570a4f134c4b7db17ef69e93a60e"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cdeb3470acdacc990866319c1572d39a"],["/2020/08/20/Python【No-Buildins】json/index.html","760d9f36cd7684a76472ce95ec2f47b4"],["/2020/08/20/Python【No-Buildins】re/index.html","9439b4ef183bc7b45bbe7cdd29929d0f"],["/2020/08/23/Hexo-文件下载功能/index.html","9fb7c0f3c1a8980c55f446bdd9c228d1"],["/2021/02/23/DataStruction [0-绪论]/index.html","6c91bbbe0ee1282df1e499420b489af3"],["/2021/02/23/DataStruction [1-算法]/index.html","0bd33859c394815e64c9e5bb2d0b33a7"],["/2021/02/23/DataStruction [2-线性表]/index.html","523bc0b86e83502a358d06288819d06e"],["/2021/02/23/DataStruction [3-栈]/index.html","8cd185e44f8660c8c5cddd0e671c3756"],["/2021/02/23/DataStruction [4-队列]/index.html","ac470b345ef5ab387f53bee56f5b5e4b"],["/2021/02/23/DataStruction [5-串]/index.html","8c7991b84baca7be85909ea4e6deb390"],["/2021/02/23/DataStruction [6-树]/index.html","4985d678d6ca8db76d34736b7e8c1cef"],["/2021/02/23/DataStruction [7-图1]/index.html","d9d02b0a9a1c88dd3f4e7446f87f5ee6"],["/2021/02/23/DataStruction [8-图2]/index.html","0be4adff0b2abada2cc20c3d210e5c11"],["/404.html","7e880be23317310b570e78202a888489"],["/about/index.html","2b7febd8e10995a3155782b01b0ffb54"],["/archives/2019/01/index.html","354ebffe8411d37e2dc1aedc6961837b"],["/archives/2019/04/index.html","07c31b62a86b5608bbb0d4d2118517e8"],["/archives/2019/05/index.html","37bd45a449c7fad154bccdcecce85e66"],["/archives/2019/06/index.html","fb355ee870f93eadf232542b89512112"],["/archives/2019/07/index.html","18f7d448136782d0d5db92c0c5dc4dc5"],["/archives/2019/index.html","2956999b85ce61a28d09007dc13efbe0"],["/archives/2019/page/2/index.html","5ab9a33a08906f4b614d5f721b918293"],["/archives/2020/03/index.html","a77644b07220771fc9505d899e1893ef"],["/archives/2020/04/index.html","4dd82b2fa4101d5c8ace0df360e623cb"],["/archives/2020/07/index.html","5995b1383f45306cf67cc1d9e32a561b"],["/archives/2020/07/page/2/index.html","a6aeee08b39ac6edbdc9f5c469e9e366"],["/archives/2020/08/index.html","b5be074af097675536a589fb7a27683a"],["/archives/2020/index.html","3e888a63bb803e9107426acfed31c274"],["/archives/2020/page/2/index.html","59a2b66fce1f9764309723cfcc6ba297"],["/archives/2020/page/3/index.html","70da196d05ba18759854864f79702a0f"],["/archives/2021/02/index.html","e4742b06e43d2259fbb07fb96641ba07"],["/archives/2021/index.html","7faa6bee35d12dc0c7859d5afb9c9559"],["/archives/index.html","37d09ff25db4bfeffb6affe7e33e6bb1"],["/archives/page/2/index.html","37d09ff25db4bfeffb6affe7e33e6bb1"],["/archives/page/3/index.html","37d09ff25db4bfeffb6affe7e33e6bb1"],["/archives/page/4/index.html","37d09ff25db4bfeffb6affe7e33e6bb1"],["/archives/page/5/index.html","37d09ff25db4bfeffb6affe7e33e6bb1"],["/artitalk/index.html","8c2418b9e344ad406fdf0ab465a89223"],["/categories/C-Language/index.html","99e26c3936397bd90563bc6596d520cf"],["/categories/DataStruction/index.html","3eada8cc5d6e24140fbefe94639ea033"],["/categories/Electron/index.html","bf5748208ecc019b16fa4930da72e10e"],["/categories/Git/index.html","8e939e2e316f2dc9aaf80264e59416ca"],["/categories/GoLang/index.html","b1e69c89d6e339f6458e5c293d68f430"],["/categories/HEXO/index.html","9a6b951f48dae19a204c06c46c8829ce"],["/categories/Java/index.html","aef8c141acd9c83a50e5f02cdb4cdfbb"],["/categories/LeetCode/index.html","d06a380786ded8c1bff89de00f08eff4"],["/categories/Note/index.html","f47b74fb81a43135997e94981cb4ed84"],["/categories/Other/index.html","bd23395285b89e6a82e6d197ab025708"],["/categories/Python/OPP/index.html","a50ef43a894009923ca24371fd01c8df"],["/categories/Python/index.html","d2b57708ddf8ec3b2f894096197969b7"],["/categories/Python/page/2/index.html","2981d32d3eaa34f38f0e580890badfe8"],["/categories/Python/内置库/index.html","a1423eb08e8748d7a9387851d350defd"],["/categories/Python/基础/index.html","fb4ce8b4d6a36dc7492c8c1531a460e2"],["/categories/Python/爬虫/index.html","80c8691a1c7573fe3380cec6e940bc5f"],["/categories/Python/爬虫/基础/index.html","598dd50dd4b44e36b2ceafa7c0192c2c"],["/categories/Python/进阶/IO/index.html","13347f978de6bb49ca59cc94389dcb3d"],["/categories/Python/进阶/index.html","aada49c4aaf7a5a41277dfe8240e5c5e"],["/categories/Python/进阶/进程、线程/index.html","5dcf9cd523ba302b38aa70eb732a49f0"],["/categories/Python/进阶/错误与调试/index.html","cd8035023c1cf49b792e4ed4f464aa2a"],["/categories/Python/高级特性/index.html","55c6ff66b35c4a3e14bfa9fc15f6db1a"],["/categories/RSA/index.html","e6608360934bfbb1439cff8825e5b9db"],["/categories/SSM/index.html","d924288dc0893d48f91a6c95709e10e5"],["/categories/Vue/index.html","a1208f6d279e2f50d7ade99b4f73e491"],["/categories/index.html","ea59ad674377bc7eed2a9353eeaf26e9"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","b3aa4e01f47dfd6e05c698203e18218e"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","243f1db00019b31aa78df05d491180b0"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","69ba7e5f43b91052ad4b2cef3eab6057"],["/page/3/index.html","b81cb375cefe6f74d21d0f263729c877"],["/page/4/index.html","634c7a2d5b2319fc400162a92b385fdc"],["/page/5/index.html","9ce77ea7e416c15f11b9fea1809e8505"],["/page/6/index.html","ac059a08af91376f2dc2ff1c0dafb6cb"],["/page/7/index.html","f4307b8e960a1bf2ad0a2a946461fd2a"],["/sw-register.js","ef978068ded3fa1034e1a461039c0ba5"],["/tags/C-Language/index.html","7954a4ef3295ef6074e54ea3a1093797"],["/tags/DataStruction/index.html","b078d79c02c675c4b94a7a798205e0c1"],["/tags/Electron/index.html","64aaed3d5bcbfefeed3eae66783b2fd9"],["/tags/GoLang/index.html","d227b3aecd48d0f71d0f0f6bca28a5b8"],["/tags/HEXO/index.html","0fbc663c68493c08bd552b763a0e27e7"],["/tags/Hash/index.html","92235644eea2b487ce200eee8c8a3bcc"],["/tags/Java/index.html","12ce03a1d8fe4c9e53f9495bd1335ffa"],["/tags/LeetCode/index.html","13ab4cea971590a43f4b5e5ed2698dd5"],["/tags/Python/index.html","81fd80f4883f2a0a75045c3ec0199ca6"],["/tags/Python/page/2/index.html","bfb01d46818fc38832056c284b850589"],["/tags/RSA/index.html","86c336072cdb72504b400af04072f845"],["/tags/SSM/index.html","227da335125a0359ea49868245760563"],["/tags/SSM配置/index.html","7efd45ddf858683b4d4d055a75c829eb"],["/tags/Vue/index.html","2bd2e78e40e1aba29e6bcfb968d1a998"],["/tags/YAML/index.html","19cb0cf51476f6b2bd9ae786ad73bd32"],["/tags/git/index.html","f91e8a35b4fd0e6d7f33be410688fbf2"],["/tags/index.html","aabdc3da65c7c40b90f7e779d00a0f18"],["/tags/json/index.html","f42ffe7e5aff781522ab932ac07ff2be"],["/tags/note/index.html","7b5bfdfd5586ebb95c3b36d0c7c1a1c1"],["/tags/上传下载/index.html","b705ed49f4a8d3b9e11230e7bb996e84"],["/tags/事务管理/index.html","ec7a5d243aa826750f0f3303c7d10d05"],["/tags/函数式编程/index.html","0fbe2e3f9d97ee60718cb2b387645ff3"],["/tags/反射/index.html","f2879da6c81f2074feb3b3d737bab7d8"],["/tags/命令/index.html","0c831100eae63ea6df8b692f3c470bce"],["/tags/并行与并发/index.html","820f08bafb743768be3a4d8a4b08fd81"],["/tags/拦截器/index.html","ad6bca471f9708d78828be63a75b9bc8"],["/tags/数据绑定/index.html","c3af810f45d894e7d391869dac0f2076"],["/tags/数据结构/index.html","1adfd17cb6c4dc532e186e0d2d955188"],["/tags/正则表达式/index.html","1e7ac1876c38d908d1856f7371f999c1"],["/tags/爬虫/index.html","adb151651ea416edc388ed8f7b65f774"],["/tags/算法/index.html","e3b5cd7c458fb3cfae9662ec34bf9a8b"],["/tags/统一异常处理/index.html","f005991e556b65802857d4add0194bb1"]];
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
