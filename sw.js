/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","119d6fb4047ba67332a6aafdacce6d7e"],["/2019/04/25/GoLang-Note-one/index.html","756cfcebc1de5b6b94fe7ce9e3cc3874"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","9bf53c6b32a0920689c2805c79499137"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","2bb1567dffa0dc8f72ed4f00cc10d65b"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","1ec68ff6a63d5078d6376674c3a6f9a9"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","f5c49406be1a9f8e14e1cd079d46bc62"],["/2019/04/25/RSA加密原理/index.html","e7d98c9efebbc651157a8980e73c6c30"],["/2019/04/25/通信中的加密与解密/index.html","d26c028aee9396fd0aa85aafbcec727c"],["/2019/04/26/通信中的加密与解密-详细版/index.html","469efc8d1e89b1d5fcaa5151321a7bb4"],["/2019/05/13/当小程序开发完成后/index.html","0d63d0c3b4002c29bfefe2d62135a3ff"],["/2019/05/15/几句话区分并行和并发/index.html","74bfed848502a3971320517832d13cb8"],["/2019/05/18/多端同步管理Hexo博客/index.html","74f1a7ba96294e143d3b103feb87c0e6"],["/2019/05/19/Git命令大全/index.html","aa61337a3548db33dca6e5a47a54a155"],["/2019/06/09/C-Note/index.html","3012aff6dee4fbf15206e7b4b6535f90"],["/2019/06/09/Java-About-Hash/index.html","ad6f8bf11c43dca2d94b4c166a95bee3"],["/2019/06/09/Java-反射/index.html","e53459de4dec4482e2542bb50ff577cd"],["/2019/07/07/SSM-4-数据绑定/index.html","ca78f550c705a2a48fad56c28a912fe8"],["/2019/07/07/SSM-5-拦截器/index.html","709fbeeddcf4576daec53e623a8a9696"],["/2019/07/10/SSM-6-上传和下载/index.html","2c6c6d57202af65f0b7300b87d3a1482"],["/2019/07/11/SSM-7-统一异常处理/index.html","195e73e0b3a326524d1e6105cf744934"],["/2019/07/13/SSM-8-Spring事务管理/index.html","4fa4ff63920474659652117bf724a1c1"],["/2019/07/14/SSM-配置文件/index.html","b3d66ddaa2b342a8247233e62f38e4bc"],["/2019/07/18/Git-基本操作说明/index.html","a5cdc2275f5c957ce3f38c389d86ef39"],["/2020/03/21/Electron-Note/index.html","6f2e1db7c2dedb8826585ec409ba766d"],["/2020/04/06/全站变灰的实现/index.html","f746eb3f9202ae1df634ec5196ff0ccf"],["/2020/04/08/VUE-note-day1/index.html","bcbea7c888733d2981cb87a0060b149d"],["/2020/04/09/VUE-note-day2/index.html","0093d8bfed3bde6815aace51a1dbfb30"],["/2020/07/02/Python【No-1】总叙/index.html","9b647a86ae08ea324dff629b2f1ea892"],["/2020/07/02/Python【No-2】基础/index.html","7011a3844b9fede25e215964f68b545a"],["/2020/07/09/Python【No-3】判断和循环/index.html","b4323c7ad7851452e2d014634a769679"],["/2020/07/09/Python【No-4】数据类型/index.html","3f5449d00b5bdfabe10dba87e30ea493"],["/2020/07/10/Python【No-5】运算符/index.html","54ab17f429c07dc35c8be09382a668dd"],["/2020/07/11/Python【No-6】函数/index.html","fb63642f99f726a3d93d087f99d3bb1b"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","27d03798a4a09f76a38da9830c8f0fa6"],["/2020/07/12/Python【No-Feature】工具类/index.html","30a33afbc258dc3d6309282ce12bd326"],["/2020/07/12/Python【No-Feature】高级特性/index.html","ad2eddb1e45492ef6ed57d6503858ce3"],["/2020/07/12/Python【No-Type】String/index.html","5844af855a990cb0e001ab3b802ef66f"],["/2020/07/14/Python【No-7】错误处理/index.html","2888f6658b3cdc3d15ad3ff24582cecb"],["/2020/07/15/Python【No-8】调试/index.html","a5008a0287b62de1af0b11a1ac942de4"],["/2020/07/15/Python【No-9】测试/index.html","2783bc87a075cda9fb0e1f238a92d2bf"],["/2020/07/16/Python【No-10】模块/index.html","2ee6c9570618e5671ce40cbda2ef374b"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","3d2ad15ced355379f100b0e68d5da22e"],["/2020/07/16/Python【No-16】进程/index.html","a76c9b61bb31af3c38d61e1282f204fa"],["/2020/07/16/Python【No-17】线程/index.html","b2018549224e744d28254c49b517ce61"],["/2020/07/16/Python【No-18】协程/index.html","35b240d2d72c51e099fbaea44f7b0de5"],["/2020/07/16/Python【No-19】文件读写/index.html","25ade56ae9567d6a17990a9f4af9bbad"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","296d964cd0713239f86064350dec389f"],["/2020/07/17/Python【No-11】类和对象/index.html","0155a1a8fb75d9de02ea0b2561b6080d"],["/2020/07/18/Python【No-12】私有化/index.html","901289f4ea3ff2f9a5d1f195c838c3be"],["/2020/07/19/Python【No-13】魔术方法/index.html","3cf44a6970f9c3bd7b99d09f74fb05f6"],["/2020/07/20/Python【No-14】枚举类/index.html","03288c3171f399b79c4519f1c813ed2f"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","bb6f224e2caaa0a73c4ca42b16206a91"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","3f5353d262584e7d90d5a240876c4d75"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","762ec87f7dfe9699b962ce4e0a5eafac"],["/2020/08/20/Python【No-Buildins】json/index.html","22049d2a9cd4b9b36529bbd4397a7810"],["/2020/08/20/Python【No-Buildins】re/index.html","82d20c7b90e8e6ea3e53bd32f23695b6"],["/2020/08/23/Hexo-文件下载功能/index.html","1d314fcce4371615f5369c6fdcd83ac6"],["/2021/02/23/DataStruction [0-绪论]/index.html","2ccefd827683c3b2f02524755fbb6fdd"],["/2021/02/23/DataStruction [1-算法]/index.html","0b07a795f64bd8948fc4f72991481394"],["/2021/02/23/DataStruction [2-线性表]/index.html","c38a75ee9111f9c86d72d9c9619a854e"],["/2021/02/23/DataStruction [3-栈]/index.html","0c8d103cc04991b9aa4f7299e5f7fd7f"],["/2021/02/23/DataStruction [4-队列]/index.html","3863e6da8bfe5a366642d7b5a2c78f44"],["/2021/02/23/DataStruction [5-串]/index.html","d750aef6ffe4312c08a454558cee5c35"],["/2021/02/23/DataStruction [6-树]/index.html","f1a5335961dfa7e38db98c30a47de09c"],["/2021/02/23/DataStruction [7-图1]/index.html","5153070083a792b7569135b818a84605"],["/2021/02/23/DataStruction [8-图2]/index.html","65a2b71d90d7a85936b1e489f51c4966"],["/404.html","23d29de4333838f097f72143cd5e7cfe"],["/about/index.html","5b0e4cb1f4ad453b2bc992250cbf1bab"],["/archives/2019/01/index.html","475033de7b5019f062d7c9163830f175"],["/archives/2019/04/index.html","795faea5fd8e4c4e42c2e426ce0d9931"],["/archives/2019/05/index.html","a6d7bf8c6651b5b4aa36249c69eb1a0e"],["/archives/2019/06/index.html","00c6376a123223b2a827e5a39b90f581"],["/archives/2019/07/index.html","497e332c6e919bace2c3c812f5290d5b"],["/archives/2019/index.html","11f57175397b8e64219fcc7e7e2e0f65"],["/archives/2019/page/2/index.html","e1438ca123246a0108a618f88a4b954f"],["/archives/2020/03/index.html","30e8273bddf5ca534afec43b92028e96"],["/archives/2020/04/index.html","d9ad872b3b4e4894af209dc6d8b14d7b"],["/archives/2020/07/index.html","4273f65c66ec437e02b35d52b6b358c5"],["/archives/2020/07/page/2/index.html","99d1a118fa8c209ff4f36be1f272b00d"],["/archives/2020/08/index.html","dbca79070bf5f3d9b8cd1d6b0fa691a3"],["/archives/2020/index.html","703216873dcdb1a93e2e467edc2960d2"],["/archives/2020/page/2/index.html","d20acbb9042162bcf62d2726b6de48f1"],["/archives/2020/page/3/index.html","ffe100f9179bf2679584d7ee930d62fb"],["/archives/2021/02/index.html","12b848421c52d61728cca84dfe8ad9a1"],["/archives/2021/index.html","b06e080bce3d00483af0a3589dd8d638"],["/archives/index.html","07f4bea5331c3acb52bf51603673199c"],["/archives/page/2/index.html","07f4bea5331c3acb52bf51603673199c"],["/archives/page/3/index.html","07f4bea5331c3acb52bf51603673199c"],["/archives/page/4/index.html","07b8688a896bc321d53fcea803257d93"],["/archives/page/5/index.html","07b8688a896bc321d53fcea803257d93"],["/artitalk/index.html","1e3588ae8145b29bc56279733481dfa4"],["/categories/C-Language/index.html","a57ffc4e3710450724559595a50f072e"],["/categories/DataStruction/index.html","acfb499a299c287c3e910c2c68f88e5d"],["/categories/Electron/index.html","90658ba22c2851f462391001048ed47c"],["/categories/Git/index.html","3b74f07ded42fbbe0d2a203a059f0d20"],["/categories/GoLang/index.html","3eee65c137b5a94fd6df2f38b78e7a34"],["/categories/HEXO/index.html","30695daa36a833bed25708fc2bc63d11"],["/categories/Java/index.html","e355641b1c30a1da2b728094ebedaea0"],["/categories/LeetCode/index.html","d753704f0f6b5076f3c4e3416ecc6530"],["/categories/Note/index.html","46abbc2baa0c65cb4799a5081631d373"],["/categories/Other/index.html","fb0fab8bc24deeee2d7d451569283818"],["/categories/Python/OPP/index.html","532f535c596bdff1ca2ba9748718b8fe"],["/categories/Python/index.html","7cd5e1a29c3a06fb10e77394890fbb31"],["/categories/Python/page/2/index.html","804febbfcb74ac00c8eb1c375714581c"],["/categories/Python/内置库/index.html","341b8b2b6dc0d9c3561f911f9b4bf36c"],["/categories/Python/基础/index.html","d6c596f34ec7028ce8a8de19079a2fc5"],["/categories/Python/爬虫/index.html","24fa1e9999fc11261c9a98907704f043"],["/categories/Python/爬虫/基础/index.html","2f4744ae0840333e870dd8f88a995ada"],["/categories/Python/进阶/IO/index.html","b3c66ec4fed4c80926aa7d44d8b4faee"],["/categories/Python/进阶/index.html","c50079545832f3ce25ef9f55b94375b8"],["/categories/Python/进阶/进程、线程/index.html","8bcd0ebc038433dda9346d03e235c484"],["/categories/Python/进阶/错误与调试/index.html","4c8a39f6afb709be21fab44419994518"],["/categories/Python/高级特性/index.html","1866e50a518a88512a5738c24adb98ad"],["/categories/RSA/index.html","695b9e2762e2176241f230b6c3afef39"],["/categories/SSM/index.html","e58f7602bd4b00b023071363dd6886f6"],["/categories/Vue/index.html","7f094dfd35cd167e8f509e0f56004e97"],["/categories/index.html","f53f450dd5952f56934e8f92ea5642d2"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","d4fe0db2c3a632673344f9e9417fa652"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","332bcd67dbf47483a73c2627c392242c"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","f63bb9ff2c10f29446f8ed3fc0fc076c"],["/page/3/index.html","c5e3fc031bcb3d3ba748edd0aff58fa6"],["/page/4/index.html","b5966046c1180202fdc8f201bac48ab0"],["/page/5/index.html","78ef3867aff6aecf4fa9df424a762f64"],["/page/6/index.html","3a04459eabfa7e044723fa16f588092a"],["/page/7/index.html","bb3c406f16d967de11c9312fdae53e31"],["/sw-register.js","81dca15bbefca94c502861581ee86f87"],["/tags/C-Language/index.html","071e7415adda10d4c70bf72064026419"],["/tags/DataStruction/index.html","6c12c898be266bab09b95f30eaab5091"],["/tags/Electron/index.html","ac7cfcedef404c3dd6956bb328d5bf7a"],["/tags/GoLang/index.html","47ce9acf60a0828ca2ce4de059ac332d"],["/tags/HEXO/index.html","29af3e1deac56524af380e336d9e9559"],["/tags/Hash/index.html","60a83e2caa2a16d62033d871daa8b776"],["/tags/Java/index.html","3f85b7e18367f4f4fc60e86d579f5f79"],["/tags/LeetCode/index.html","619b43eed4b2c6d06ceac067691bf4e3"],["/tags/Python/index.html","67473899eef8118d7f90d40207a1ef43"],["/tags/Python/page/2/index.html","baa36997e1d2acc6608510229c6da7e5"],["/tags/RSA/index.html","d93520dcb420bfb0ab03cf2ad86c05ee"],["/tags/SSM/index.html","88835d2d9ce359406ceb1b460ef55a3f"],["/tags/SSM配置/index.html","90eb9ccd6807b21c817a0f8fcab67428"],["/tags/Vue/index.html","d58e3d4b20b6ae08c27d7d3d0a71811c"],["/tags/YAML/index.html","9bc75ae5a612e9d7f97b16ab3f037a3e"],["/tags/git/index.html","0ce4fe43133073a39f697215b7aa4594"],["/tags/index.html","35af290822f3470113783b0441021f1e"],["/tags/json/index.html","029254f6d6354921c35d4db531bbc4af"],["/tags/note/index.html","707ba1591ce417a5fa775c6625fdd9ad"],["/tags/上传下载/index.html","776a0e8f63d6802663cced884d1d4b69"],["/tags/事务管理/index.html","b77a5f64cdcf30ae3ef7ff5d8c16cdeb"],["/tags/函数式编程/index.html","a5b57308ee06dc37a97d0e2382239d1c"],["/tags/反射/index.html","07782491cbcbe02dca470c4564c49ca5"],["/tags/命令/index.html","f9737cdb094fdb97547d1f5447b4c79a"],["/tags/并行与并发/index.html","774377afe7b92955d87d545a6ea70230"],["/tags/拦截器/index.html","d4defbc1939c6fbf54ced5f9796bd360"],["/tags/数据绑定/index.html","f60d0a395bd1e62b3bbe2b10c41e2587"],["/tags/数据结构/index.html","1cd2dedc5910096f9509d7b10da0f680"],["/tags/正则表达式/index.html","16e551550184186db0fad1fe6ef56e81"],["/tags/爬虫/index.html","e6c6e8bd3de8250857d437967ce863ff"],["/tags/算法/index.html","a70906a71c75442a9fa179ce08002c96"],["/tags/统一异常处理/index.html","3e9bb9feacf7ac895a141a1a13ab9ea4"]];
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
