/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/01/Hello-World/index.html","119d6fb4047ba67332a6aafdacce6d7e"],["/2019/04/25/GoLang-Note-one/index.html","756cfcebc1de5b6b94fe7ce9e3cc3874"],["/2019/04/25/LeetCode-笔记【No-1】0x01-两数之和/index.html","9bf53c6b32a0920689c2805c79499137"],["/2019/04/25/LeetCode-笔记【No-2】0x07-整数反转/index.html","2bb1567dffa0dc8f72ed4f00cc10d65b"],["/2019/04/25/LeetCode-笔记【No-3】0x0D-罗马数字转整数/index.html","1ec68ff6a63d5078d6376674c3a6f9a9"],["/2019/04/25/LeetCode-笔记【No-4】0x09-回文数/index.html","f5c49406be1a9f8e14e1cd079d46bc62"],["/2019/04/25/RSA加密原理/index.html","e7d98c9efebbc651157a8980e73c6c30"],["/2019/04/25/通信中的加密与解密/index.html","d26c028aee9396fd0aa85aafbcec727c"],["/2019/04/26/通信中的加密与解密-详细版/index.html","469efc8d1e89b1d5fcaa5151321a7bb4"],["/2019/05/13/当小程序开发完成后/index.html","0d63d0c3b4002c29bfefe2d62135a3ff"],["/2019/05/15/几句话区分并行和并发/index.html","74bfed848502a3971320517832d13cb8"],["/2019/05/18/多端同步管理Hexo博客/index.html","74f1a7ba96294e143d3b103feb87c0e6"],["/2019/05/19/Git命令大全/index.html","aa61337a3548db33dca6e5a47a54a155"],["/2019/06/09/C-Note/index.html","3012aff6dee4fbf15206e7b4b6535f90"],["/2019/06/09/Java-About-Hash/index.html","ad6f8bf11c43dca2d94b4c166a95bee3"],["/2019/06/09/Java-反射/index.html","e53459de4dec4482e2542bb50ff577cd"],["/2019/07/07/SSM-4-数据绑定/index.html","ca78f550c705a2a48fad56c28a912fe8"],["/2019/07/07/SSM-5-拦截器/index.html","709fbeeddcf4576daec53e623a8a9696"],["/2019/07/10/SSM-6-上传和下载/index.html","2c6c6d57202af65f0b7300b87d3a1482"],["/2019/07/11/SSM-7-统一异常处理/index.html","195e73e0b3a326524d1e6105cf744934"],["/2019/07/13/SSM-8-Spring事务管理/index.html","4fa4ff63920474659652117bf724a1c1"],["/2019/07/14/SSM-配置文件/index.html","b3d66ddaa2b342a8247233e62f38e4bc"],["/2019/07/18/Git-基本操作说明/index.html","a5cdc2275f5c957ce3f38c389d86ef39"],["/2020/03/21/Electron-Note/index.html","6f2e1db7c2dedb8826585ec409ba766d"],["/2020/04/06/全站变灰的实现/index.html","f746eb3f9202ae1df634ec5196ff0ccf"],["/2020/04/08/VUE-note-day1/index.html","bcbea7c888733d2981cb87a0060b149d"],["/2020/04/09/VUE-note-day2/index.html","0093d8bfed3bde6815aace51a1dbfb30"],["/2020/07/02/Python【No-1】总叙/index.html","9b647a86ae08ea324dff629b2f1ea892"],["/2020/07/02/Python【No-2】基础/index.html","7011a3844b9fede25e215964f68b545a"],["/2020/07/09/Python【No-3】判断和循环/index.html","b4323c7ad7851452e2d014634a769679"],["/2020/07/09/Python【No-4】数据类型/index.html","3f5449d00b5bdfabe10dba87e30ea493"],["/2020/07/10/Python【No-5】运算符/index.html","54ab17f429c07dc35c8be09382a668dd"],["/2020/07/11/Python【No-6】函数/index.html","fb63642f99f726a3d93d087f99d3bb1b"],["/2020/07/12/Python【No-Feature】函数式编程/index.html","27d03798a4a09f76a38da9830c8f0fa6"],["/2020/07/12/Python【No-Feature】工具类/index.html","30a33afbc258dc3d6309282ce12bd326"],["/2020/07/12/Python【No-Feature】高级特性/index.html","ad2eddb1e45492ef6ed57d6503858ce3"],["/2020/07/12/Python【No-Type】String/index.html","5844af855a990cb0e001ab3b802ef66f"],["/2020/07/14/Python【No-7】错误处理/index.html","2888f6658b3cdc3d15ad3ff24582cecb"],["/2020/07/15/Python【No-8】调试/index.html","a5008a0287b62de1af0b11a1ac942de4"],["/2020/07/15/Python【No-9】测试/index.html","2783bc87a075cda9fb0e1f238a92d2bf"],["/2020/07/16/Python【No-10】模块/index.html","2ee6c9570618e5671ce40cbda2ef374b"],["/2020/07/16/Python【No-15】进程线程总叙/index.html","3d2ad15ced355379f100b0e68d5da22e"],["/2020/07/16/Python【No-16】进程/index.html","a76c9b61bb31af3c38d61e1282f204fa"],["/2020/07/16/Python【No-17】线程/index.html","b2018549224e744d28254c49b517ce61"],["/2020/07/16/Python【No-18】协程/index.html","35b240d2d72c51e099fbaea44f7b0de5"],["/2020/07/16/Python【No-19】文件读写/index.html","25ade56ae9567d6a17990a9f4af9bbad"],["/2020/07/16/Python【No-20】操作文件和目录/index.html","296d964cd0713239f86064350dec389f"],["/2020/07/17/Python【No-11】类和对象/index.html","0155a1a8fb75d9de02ea0b2561b6080d"],["/2020/07/18/Python【No-12】私有化/index.html","901289f4ea3ff2f9a5d1f195c838c3be"],["/2020/07/19/Python【No-13】魔术方法/index.html","3cf44a6970f9c3bd7b99d09f74fb05f6"],["/2020/07/20/Python【No-14】枚举类/index.html","03288c3171f399b79c4519f1c813ed2f"],["/2020/08/20/Python【Crawler】0-爬虫总叙/index.html","bb6f224e2caaa0a73c4ca42b16206a91"],["/2020/08/20/Python【Crawler】1-通用爬虫/index.html","3f5353d262584e7d90d5a240876c4d75"],["/2020/08/20/Python【Crawler】2-聚焦爬虫/index.html","762ec87f7dfe9699b962ce4e0a5eafac"],["/2020/08/20/Python【No-Buildins】json/index.html","22049d2a9cd4b9b36529bbd4397a7810"],["/2020/08/20/Python【No-Buildins】re/index.html","82d20c7b90e8e6ea3e53bd32f23695b6"],["/2020/08/23/Hexo-文件下载功能/index.html","1d314fcce4371615f5369c6fdcd83ac6"],["/2021/02/23/DataStruction [0-绪论]/index.html","2ccefd827683c3b2f02524755fbb6fdd"],["/2021/02/23/DataStruction [1-算法]/index.html","0b07a795f64bd8948fc4f72991481394"],["/2021/02/23/DataStruction [2-线性表]/index.html","c38a75ee9111f9c86d72d9c9619a854e"],["/2021/02/23/DataStruction [3-栈]/index.html","0c8d103cc04991b9aa4f7299e5f7fd7f"],["/2021/02/23/DataStruction [4-队列]/index.html","3863e6da8bfe5a366642d7b5a2c78f44"],["/2021/02/23/DataStruction [5-串]/index.html","d750aef6ffe4312c08a454558cee5c35"],["/2021/02/23/DataStruction [6-树]/index.html","f1a5335961dfa7e38db98c30a47de09c"],["/2021/02/23/DataStruction [7-图1]/index.html","5153070083a792b7569135b818a84605"],["/2021/02/23/DataStruction [8-图2]/index.html","65a2b71d90d7a85936b1e489f51c4966"],["/404.html","23d29de4333838f097f72143cd5e7cfe"],["/about/index.html","5b0e4cb1f4ad453b2bc992250cbf1bab"],["/archives/2019/01/index.html","41c3534af7e86c853d60bceaf6c85877"],["/archives/2019/04/index.html","0f0923340fcafe04ee6b3c3a04fb8bc5"],["/archives/2019/05/index.html","99fca82b33d70431927cdf254dd4ddbf"],["/archives/2019/06/index.html","dcf071430381ddee1b07dbe376190747"],["/archives/2019/07/index.html","152016b046931ed485a8b8d07c73a091"],["/archives/2019/index.html","f919a745e7a9d9b3916de27de829afdd"],["/archives/2019/page/2/index.html","eabe9cccc0df490fe9a592d33a51a618"],["/archives/2020/03/index.html","fdea5353f1a0644e557086ea411def17"],["/archives/2020/04/index.html","377a0765194f98e4ff504806e3545193"],["/archives/2020/07/index.html","065f2a65c6699a7288106316f8d0d4f9"],["/archives/2020/07/page/2/index.html","736588f4dbbb151afb7687fe9be0cb4d"],["/archives/2020/08/index.html","ba8e7c3f8ff8ad72d35236ccf9599e2f"],["/archives/2020/index.html","bb90051e8762a5a0e8f8d5eadf2e313b"],["/archives/2020/page/2/index.html","d5c01789bb53c8274e9f2c81d2ef8636"],["/archives/2020/page/3/index.html","3114e2348605668f0d5dece26f0c6671"],["/archives/2021/02/index.html","8009e6361fd369d1c1618473fb9e87c0"],["/archives/2021/index.html","3433e3dced2ce11b91362172f20ccc0b"],["/archives/index.html","84ce89c8d2ef8cbdbd493096a6eeb51e"],["/archives/page/2/index.html","84ce89c8d2ef8cbdbd493096a6eeb51e"],["/archives/page/3/index.html","84ce89c8d2ef8cbdbd493096a6eeb51e"],["/archives/page/4/index.html","84ce89c8d2ef8cbdbd493096a6eeb51e"],["/archives/page/5/index.html","84ce89c8d2ef8cbdbd493096a6eeb51e"],["/artitalk/index.html","1e3588ae8145b29bc56279733481dfa4"],["/categories/C-Language/index.html","91cd517a09ac4b7f06cf3938eb8014a3"],["/categories/DataStruction/index.html","1c0d2829478ea387c590a3184ca74068"],["/categories/Electron/index.html","659ef63ce6b7304a111cefd304c7dc91"],["/categories/Git/index.html","d9534d1388cb27088d7acfcf3be8a009"],["/categories/GoLang/index.html","ffb2e4d7950f863394e511d144701959"],["/categories/HEXO/index.html","754d2c23a46f73ec5d61bc2a918ea2ec"],["/categories/Java/index.html","1003d85a3df780fc6ee54227104757bc"],["/categories/LeetCode/index.html","447a9ccd53823d2e0b66ee0d45de219f"],["/categories/Note/index.html","d2bc92c30e49c6887ddd28817ea66803"],["/categories/Other/index.html","d8ecdd81fb1b64b2af41b91d8b063296"],["/categories/Python/OPP/index.html","aaedbc8b2af00fdef5867c80734f18b4"],["/categories/Python/index.html","6b311bf4f03f7fcd5766cbb84d08775a"],["/categories/Python/page/2/index.html","3151cddc2440c40394b666099cfc056b"],["/categories/Python/内置库/index.html","fd1437cc77637d3812d13e724a32b7b9"],["/categories/Python/基础/index.html","8c163043b236347bd01fb41b5d1fbb46"],["/categories/Python/爬虫/index.html","7d584897fe783421e8ca9a0006ec4373"],["/categories/Python/爬虫/基础/index.html","2c6bcd0aba10dab0322e8e5ae8ee74bc"],["/categories/Python/进阶/IO/index.html","4859d2f76a8fc0ca3cbea9c444bcbabd"],["/categories/Python/进阶/index.html","ef49ec7b508903c3b4a2c7b3005f33ef"],["/categories/Python/进阶/进程、线程/index.html","19f99d879e55a4a6ce7fd387f8fe8788"],["/categories/Python/进阶/错误与调试/index.html","3609c6c3dc74f32708b22b3c2b3a93b0"],["/categories/Python/高级特性/index.html","f0c16ca6b5e0b4589c3f55842e0f4915"],["/categories/RSA/index.html","459d7ec21e6037c1d97c076fad0482a6"],["/categories/SSM/index.html","5da9071b69f02ff2967e688c4832568c"],["/categories/Vue/index.html","858a1c2bd5e2f9c8ecdc7f6081328ca1"],["/categories/index.html","f53f450dd5952f56934e8f92ea5642d2"],["/css/first.css","1179464acdf8bef33531cd355bdeab46"],["/css/style.css","1bc90014480cdbc25caf574fd73eed00"],["/friends/index.html","d4fe0db2c3a632673344f9e9417fa652"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","6cb17c22466d592fb6a8496985c46020"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","58a76331ddc896582f1fef14e8931b06"],["/page/3/index.html","e826a48172bb727d6e1b9f8a73f92e81"],["/page/4/index.html","7eb5264e37d190b6a9a55d8e7afd7918"],["/page/5/index.html","5d306192562a6b1b82357fd0ca294abe"],["/page/6/index.html","5d8eb630d26f8fb04209433adc38606a"],["/page/7/index.html","4c6e97d844b1a028edc6fce952cbebfc"],["/sw-register.js","85e56f7ba55faf03d926dc067568552a"],["/tags/C-Language/index.html","d295562a540b5e0aac0734bb8ce54845"],["/tags/DataStruction/index.html","b14dc155edba83a8bb452cf3e6d5c911"],["/tags/Electron/index.html","e4026dcabd55d21c0d52d739ffafa7d3"],["/tags/GoLang/index.html","b29e2c845793baf7e307517e3abdbc4b"],["/tags/HEXO/index.html","7f34dd09205db2a9431f670571095938"],["/tags/Hash/index.html","0593e62de02be5d7382411ac2b713106"],["/tags/Java/index.html","f748ee7a40fbab91e9f3e56cc306f224"],["/tags/LeetCode/index.html","fa5338febb754a193eb27a322997e119"],["/tags/Python/index.html","608cffdd7f751ff156ed70c93d7e9c9a"],["/tags/Python/page/2/index.html","ba2b75c4bbfefdb17dbcd3235f237378"],["/tags/RSA/index.html","91ccadd3c7d74edd1129dbd33a4e622a"],["/tags/SSM/index.html","297e6b92a3a35f79336fb3339c552745"],["/tags/SSM配置/index.html","30428568f1aa9f1bed4860182ab343dc"],["/tags/Vue/index.html","17aff752cbcce5b65aa6b69e657fbf5b"],["/tags/YAML/index.html","195f81c112474876ae9a4a3e08fbdaab"],["/tags/git/index.html","3dca26eb749fbf3ce0facdfb44a9eea8"],["/tags/index.html","35af290822f3470113783b0441021f1e"],["/tags/json/index.html","4c99231639328c24d869b972827a9700"],["/tags/note/index.html","be66b2a83fec0e45256140131019591c"],["/tags/上传下载/index.html","683ad9b31c9235520e6984300068cc16"],["/tags/事务管理/index.html","fd7f2e49bfa5e0f8b338269181bcaa06"],["/tags/函数式编程/index.html","202ffa5cc51127da6d14a431c66f19ea"],["/tags/反射/index.html","973071c3ebb6fc193598cbdb7c7e37e1"],["/tags/命令/index.html","184102457c9a7c77ddbf1aaf2f857dd3"],["/tags/并行与并发/index.html","0add1d304b62ccad039cdd5c836c0be2"],["/tags/拦截器/index.html","753de7924543e123d99ae68f7454e5d8"],["/tags/数据绑定/index.html","1f6958829a5a6dd5ed6389bce622549c"],["/tags/数据结构/index.html","db662e36d3b36c6a812252da038f6cb5"],["/tags/正则表达式/index.html","5fa9a02576483a9df96be1cd0c527200"],["/tags/爬虫/index.html","e3ff5f22f794ecf6c9a925385f9ac325"],["/tags/算法/index.html","2ce9172f2059e8936f3012f0a7fb16a7"],["/tags/统一异常处理/index.html","2cfd4abed03e9cf733e4b4dc434f627b"]];
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
