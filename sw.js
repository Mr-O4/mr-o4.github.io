/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","31f55f07c90a9cae8fcd42fced28da25"],["/2019/04/25/GoLang-Note-one/index.html","3fb9fce9549f7f405dc237fad5c4f24b"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","1b9970b6c68560a38117b9aba6ce54ff"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","59625e92ec5c3f2d296ee75a85cf7734"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","82e786e99786922dc200c9497ab27656"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","66273d4081d4b7729b2496b333d3b1ae"],["/2019/04/25/RSA加密原理/index.html","a9c1f9db2af23d4e1bff076dcef84f64"],["/2019/04/25/通信中的加密与解密/index.html","a0881fc858fe082c7c48582d03afe567"],["/2019/04/26/通信中的加密与解密-详细版/index.html","8c062b7fff04a4bad339c30d4d812cb4"],["/2019/05/13/当小程序开发完成后/index.html","75757a74db79bbd076c8e0f9da97c30b"],["/2019/05/15/几句话区分并行和并发/index.html","152be33399f39d58b296ab5dcdefb9d8"],["/2019/05/18/多端同步管理Hexo博客/index.html","6c94d3d768e119a83f9c97ac63a6c1e6"],["/2019/05/19/Git命令大全/index.html","97d01c84a6cffb941c2e006f641a6066"],["/2019/06/09/C-Note/index.html","3d2861e5826cd43bfc3a3fc2ad336a76"],["/2019/06/09/Java-About-Hash/index.html","6ce328e5bd932eaa1720b107e9e56223"],["/2019/06/09/Java-反射/index.html","63ce4c335672fad441d08597118a3a67"],["/2019/07/07/SSM-4-数据绑定/index.html","900f66dfdf208df0c55f637f126ebe82"],["/2019/07/07/SSM-5-拦截器/index.html","9f5825798a6ccfe8bd2b64654d26fb28"],["/2019/07/10/SSM-6-上传和下载/index.html","a4510357afc6a8b993090907b7384040"],["/2019/07/11/SSM-7-统一异常处理/index.html","90adf2cb7cd1d5cad803691673ede234"],["/2019/07/13/SSM-8-Spring事务管理/index.html","e66eda2d7cdcae164448b283fa0eca71"],["/2019/07/14/SSM-配置文件/index.html","660efd325babbca08359dcada3cc788f"],["/2019/07/18/Git-基本操作说明/index.html","f9b982159d8af6d8b221888a61ff2245"],["/2020/03/21/Electron-Note/index.html","b2e4758b30c7aef155f6286fa8efd5a4"],["/2020/04/06/全站变灰的实现/index.html","a4873325130cb0b77073a2e678902c9e"],["/2020/04/08/VUE-note-day1/index.html","b28d3f2ea97d1f606766194fba6cfe2f"],["/2020/04/09/VUE-note-day2/index.html","05907b1cf9b61285e078cbf30cf8d668"],["/2020/07/02/Python【No-1】总叙/index.html","6139a08330c5a4e289899a0e8bc06521"],["/2020/07/02/Python【No-2】基础/index.html","3d5e81e79619a6e0c210eb8057195536"],["/2020/07/09/Python【No-3】判断和循环/index.html","344e07ea1b8f95b4098127355ee02111"],["/2020/07/09/Python【No-4】数据类型/index.html","0bd8482622bcfdf1a50b5ca2a28cfcd6"],["/2020/07/10/Python【No-5】运算符/index.html","ee17e48c1ff179adbf3753dc886f8b2e"],["/2020/07/11/Python【No-6】函数/index.html","fc028fa4fce19f5d83c01d6c68c46e2f"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","f7d68e9d803d46bd1cd680a0b74840ce"],["/2020/07/12/Python【No-Feature】工具类/index.html","74d39bfde84ffb78d523b6d7797b8828"],["/2020/07/12/Python【No-Feature】高级特性/index.html","d98a0a214a7da65822a454e87daa514e"],["/2020/07/12/Python【No-Type】String/index.html","fb821880c0bd8e28a6bab5e1474c4e85"],["/2020/07/14/Python【No-7】错误处理/index.html","436da514f10d20d19a0bec326f4161e8"],["/2020/07/15/Python【No-8】调试/index.html","d7ae187a675bcd78024df40718dd8a76"],["/2020/07/15/Python【No-9】测试/index.html","410f86ca3472d92c5618ed59515586c9"],["/2020/07/16/Python【No-10】模块/index.html","8c577fe7ec7646b4c4911ba6d0323306"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","ba57f97de0e66f7bb4351c2f82c9aa18"],["/2020/07/16/Python【No-16】进程/index.html","7f48f3957106c37fdf228b57acfc6cb0"],["/2020/07/16/Python【No-17】线程/index.html","f2b35c58ff7afe8c98afbe74c28c2ff4"],["/2020/07/16/Python【No-18】协程/index.html","fceea97dcd6785ed48ee82d07e277213"],["/2020/07/16/Python【No-19】文件读写/index.html","419022d1ac7027e980f1193b39b5f3c9"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","50015b00e94a8387b0e461cdd8ca7f08"],["/2020/07/17/Python【No-11】类和对象/index.html","c149d7acb57fe29e5dcfef0bbcd51551"],["/2020/07/18/Python【No-12】私有化/index.html","39a339354ab48aaae854aec6bf93de4b"],["/2020/07/19/Python【No-13】魔术方法/index.html","6e48ac3731475ad1fdc5842978ab028d"],["/2020/07/20/Python【No-14】枚举类/index.html","12005e4a7511fc0d23f1f03eaba19926"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","771219b89dee922ef645b6e2d9fc27b6"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","7f73570a4f134c4b7db17ef69e93a60e"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","cdeb3470acdacc990866319c1572d39a"],["/2020/08/20/Python【No-Buildins】json/index.html","760d9f36cd7684a76472ce95ec2f47b4"],["/2020/08/20/Python【No-Buildins】re/index.html","9439b4ef183bc7b45bbe7cdd29929d0f"],["/2020/08/23/Hexo-文件下载功能/index.html","9fb7c0f3c1a8980c55f446bdd9c228d1"],["/2021/02/23/DataStruction [0-绪论]/index.html","6c91bbbe0ee1282df1e499420b489af3"],["/2021/02/23/DataStruction [1-算法]/index.html","0bd33859c394815e64c9e5bb2d0b33a7"],["/2021/02/23/DataStruction [2-线性表]/index.html","523bc0b86e83502a358d06288819d06e"],["/2021/02/23/DataStruction [3-栈]/index.html","8cd185e44f8660c8c5cddd0e671c3756"],["/2021/02/23/DataStruction [4-队列]/index.html","ac470b345ef5ab387f53bee56f5b5e4b"],["/2021/02/23/DataStruction [5-串]/index.html","8c7991b84baca7be85909ea4e6deb390"],["/2021/02/23/DataStruction [6-树]/index.html","4985d678d6ca8db76d34736b7e8c1cef"],["/2021/02/23/DataStruction [7-图1]/index.html","d9d02b0a9a1c88dd3f4e7446f87f5ee6"],["/2021/02/23/DataStruction [8-图2]/index.html","0be4adff0b2abada2cc20c3d210e5c11"],["/404.html","7e880be23317310b570e78202a888489"],["/about/index.html","2b7febd8e10995a3155782b01b0ffb54"],["/archives/2019/01/index.html","80121f26143b905eb64062df6fda5fba"],["/archives/2019/04/index.html","d19c77dd49da99e823d0202e25da8bb3"],["/archives/2019/05/index.html","cd5502df8d016d5908c3528221e08f44"],["/archives/2019/06/index.html","3b1edd264ad505e3e7521c0e596859ba"],["/archives/2019/07/index.html","98fc285ed05c2ab94adb82ec341c58fe"],["/archives/2019/index.html","68178bb3c0108b829a0e0cc21e4a6b1f"],["/archives/2019/page/2/index.html","68375ca3956bdebdb289edac6de92c98"],["/archives/2020/03/index.html","b2abd149c333224b06e186ac08fe1d2f"],["/archives/2020/04/index.html","a186d150e621c955b371d93a765555f8"],["/archives/2020/07/index.html","9e8f76cda301c2d3de2194c3fbc05e8a"],["/archives/2020/07/page/2/index.html","308611816916e2a38e7df76d366447a1"],["/archives/2020/08/index.html","62883a882f24605c03b67011cdc3d82d"],["/archives/2020/index.html","e5df433ea0b3aa0b0f523d78cc127c47"],["/archives/2020/page/2/index.html","515f92adf8ce976c10b5d4f4c3b8eb85"],["/archives/2020/page/3/index.html","9145be53b6dc17cf5f9dd66df558eb84"],["/archives/2021/02/index.html","a699bb0b89782b1bf0fb7205721390dd"],["/archives/2021/index.html","2d261c2fd32beeb255979808872657c3"],["/archives/index.html","2b49a3ebcf70dae931af3a6aa05bfb94"],["/archives/page/2/index.html","2b49a3ebcf70dae931af3a6aa05bfb94"],["/archives/page/3/index.html","2b49a3ebcf70dae931af3a6aa05bfb94"],["/archives/page/4/index.html","2b49a3ebcf70dae931af3a6aa05bfb94"],["/archives/page/5/index.html","2b49a3ebcf70dae931af3a6aa05bfb94"],["/artitalk/index.html","8c2418b9e344ad406fdf0ab465a89223"],["/categories/C-Language/index.html","fe0794f469149731059727590b451923"],["/categories/DataStruction/index.html","268cad655cf3e56a46bd064c37bbfad2"],["/categories/Electron/index.html","78fcabd49ce54407f054252039d86d61"],["/categories/Git/index.html","a8e0a2a98bba1087c8b75bc11395038f"],["/categories/GoLang/index.html","2eb6a382369f5d6440fcc92ef52535bb"],["/categories/HEXO/index.html","f865ba0b622910aae694832aaa18a4d4"],["/categories/Java/index.html","397b8d835222bec9315f02bbe1c3bb0d"],["/categories/LeetCode/index.html","896d9aba15010abff1bc522cb2a87b50"],["/categories/Note/index.html","ab5182922af3f81de00ccde79a1ddb70"],["/categories/Other/index.html","028c5bdc018afa1c5798d39950a6fea5"],["/categories/Python/OPP/index.html","348245594760e8ecf6c47e20369716c4"],["/categories/Python/index.html","64e42e9e3190dd6be799e7877202b575"],["/categories/Python/page/2/index.html","26cb33feee8b6b925811e4e31e1047bb"],["/categories/Python/内置库/index.html","83dcab8163275019ab736bc732c4bcbf"],["/categories/Python/基础/index.html","59cfe1d9719bfcdae41035b4e614e3f5"],["/categories/Python/爬虫/index.html","2c3454a99bd910dcefbc7795ea20b795"],["/categories/Python/爬虫/基础/index.html","edfc8ff5bbeaa4faa6735cdedb91daca"],["/categories/Python/进阶/IO/index.html","0d733aab3e8d10c08b8071c25257b320"],["/categories/Python/进阶/index.html","7a0310918448979b7229aa2cfbf51257"],["/categories/Python/进阶/进程、线程/index.html","db3f8ca499a50bd776d63bcbb483288c"],["/categories/Python/进阶/错误与调试/index.html","2da8a7bb322201ed31cf469882122488"],["/categories/Python/高级特性/index.html","7997df28e33192fe6d4bec9e39fcc641"],["/categories/RSA/index.html","dcbc37c856730d07fba3b7137c912148"],["/categories/SSM/index.html","d793c31ef128e734aad6026864170bfb"],["/categories/Vue/index.html","be6bf6e8bd734b0235a35710a0ec1a4d"],["/categories/index.html","ea59ad674377bc7eed2a9353eeaf26e9"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","b3aa4e01f47dfd6e05c698203e18218e"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","34ac8a8da3ffa6b794102eeab4689dad"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","a7163daa1d88c041c6df299d7b693ae3"],["/page/3/index.html","330b450694e9160039e2fdbd987bbbd1"],["/page/4/index.html","36c37dd24e26e809c4702a3f3aad6d63"],["/page/5/index.html","92fa17968738326e8d55a0feba931418"],["/page/6/index.html","e7399bf85c2fe10b4a8feaf28f341ca6"],["/page/7/index.html","d37da6b272c05c4c949fd4c3cd2f5230"],["/sw-register.js","5965ece2966c67db6ac764e2c6acfb5b"],["/tags/C-Language/index.html","17d78bd2649790c3d4520e8fbdc11fe9"],["/tags/DataStruction/index.html","988c494d00ac4d24fda99c4006348c5b"],["/tags/Electron/index.html","0a14a85c1c43b5edcdeee51eb34d5b37"],["/tags/GoLang/index.html","18310c0291495d3217d6035ddd74827a"],["/tags/HEXO/index.html","1c112c856138c62139d674a1405c387f"],["/tags/Hash/index.html","5290b199cddfdbc44bdda1cf2f88a828"],["/tags/Java/index.html","f23e95c246c7564e64921a9780927538"],["/tags/LeetCode/index.html","6e3392793ed005eb94c6d1dc0fc295f2"],["/tags/Python/index.html","e618bb5fb11a36e827a0661835591834"],["/tags/Python/page/2/index.html","6150db5694dc35ec5026cb173185a283"],["/tags/RSA/index.html","43506274650adccee9bce49972360cb4"],["/tags/SSM/index.html","ce6e2c9231c923a63f018f7b0a8c2a9c"],["/tags/SSM配置/index.html","0ed88f094b78c92166e27dcaf6e4d53b"],["/tags/Vue/index.html","33ea74cd1a0fbf3f403d6c55ab823771"],["/tags/YAML/index.html","181ba68a435b057a4659e27e0b6b3790"],["/tags/git/index.html","c437b1ca5bb5ef483b9332d250ef3e4c"],["/tags/index.html","aabdc3da65c7c40b90f7e779d00a0f18"],["/tags/json/index.html","a832e55091bfd42b80c5466012e7e405"],["/tags/note/index.html","fa677656a111f20e330fe27de5a481d1"],["/tags/上传下载/index.html","8fb67d471c00668845ef266e3db3dd6f"],["/tags/事务管理/index.html","55d229dee43287cf0bf23716825fd27d"],["/tags/函数式编程/index.html","60a1c1c7ca7b49ddb75b97d3c83d5c2b"],["/tags/反射/index.html","25e48e51598b8be4050e77b8bfcf888a"],["/tags/命令/index.html","3b7b36e035d7045216e8169e554f3505"],["/tags/并行与并发/index.html","947ec6e7194f9ee038c5cff9537628e8"],["/tags/拦截器/index.html","a9a4fbc6bcb2e5b4461db30f83bc621d"],["/tags/数据绑定/index.html","7684fcd187a0a85b187d3d197e1f619a"],["/tags/数据结构/index.html","461449d4c019c99df8e369b874f3a50c"],["/tags/正则表达式/index.html","143fd00ae3eb2388b085dad35a2ac3ee"],["/tags/爬虫/index.html","dece7a275584a98f735f1efe6544dbed"],["/tags/算法/index.html","6268bb352d797d81297264de8c583384"],["/tags/统一异常处理/index.html","733eaaab4e170441f564e67cbcb85906"]];
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
