/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","bcc589ae25b2783bcb90d49652541071"],["/archives/2019/04/index.html","38a280e5e836b75182b339cdc5687561"],["/archives/2019/05/index.html","7c5923f5beb196daf0ba8785b3aad2af"],["/archives/2019/06/index.html","8084e2c6bb7323d34c7139c5e3351925"],["/archives/2019/07/index.html","e157c654966808b8b78e4453b8a2c6b8"],["/archives/2019/index.html","16c1c576f9ee8b8b65bfff85514052bb"],["/archives/2019/page/2/index.html","6ed49a03b731610d0aab3e53808dbf65"],["/archives/2020/03/index.html","5de0f135c605631441c5b0b8cac89677"],["/archives/2020/04/index.html","5944d1fac140d499f6575c34d27d2fd1"],["/archives/2020/07/index.html","7ffed265aac0758db04c3298afb0cba4"],["/archives/2020/07/page/2/index.html","e8f1c9a1ef0fa7d5224a1eab5ebab56e"],["/archives/2020/08/index.html","2baf3766acc8faa1ce5df79404b1d52a"],["/archives/2020/index.html","78c34af292731d2a96f539347b697eda"],["/archives/2020/page/2/index.html","add9ad35fa6aeb313373b581ce2e267b"],["/archives/2020/page/3/index.html","cb6b32f5ecf49e2fbf3f546274c6f79d"],["/archives/2021/02/index.html","e637cf13b8af205c01e3029f6688587c"],["/archives/2021/06/index.html","3d1026e8f77318aa7f26e5968545b981"],["/archives/2021/07/index.html","caa3d0de0e802d1befd47a89ee9648fd"],["/archives/2021/07/page/2/index.html","501d54ba018f9b3e9a32a543a409542c"],["/archives/2021/index.html","bd99554de88d01ca044ca888a68fb068"],["/archives/2021/page/2/index.html","4f24881c918ef9f583090bfdc11c5a95"],["/archives/2021/page/3/index.html","45400116318ae5cd7904e6439db8466d"],["/archives/index.html","9538ad11361091a2a9e6a7bafa4be7b0"],["/archives/page/2/index.html","9538ad11361091a2a9e6a7bafa4be7b0"],["/archives/page/3/index.html","9538ad11361091a2a9e6a7bafa4be7b0"],["/archives/page/4/index.html","9538ad11361091a2a9e6a7bafa4be7b0"],["/archives/page/5/index.html","9538ad11361091a2a9e6a7bafa4be7b0"],["/archives/page/6/index.html","ab9ee17cdbdabaf01b4882b8435a3892"],["/archives/page/7/index.html","ab9ee17cdbdabaf01b4882b8435a3892"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","72ea3113df0138ab9a4b23413dcb6b37"],["/categories/DataStruction/index.html","74e801a6e4d1081a4fb57f7da91aa953"],["/categories/Electron/index.html","4c791624291c00d1573ea780b1ba7388"],["/categories/Git/index.html","eb95f0e39d3c93d7657301142916b1a5"],["/categories/Golang/Adavanced/index.html","e92337cb42660012a8ab03756ff157c7"],["/categories/Golang/Basic/index.html","902b887d93ada5dbc6a180b08d069808"],["/categories/Golang/Basic/page/2/index.html","6187a683de2f9d3bf1c8977e0ccf3887"],["/categories/Golang/Framework/index.html","8bba85ecdc27f9fb61b78e66a92d5ab7"],["/categories/Golang/index.html","8a726fefa17e568769cbe4885496d724"],["/categories/Golang/page/2/index.html","be3d2aa04e5ce573a263e8f14d73939e"],["/categories/HEXO/index.html","183191032beaa48a054efcf542cc61e1"],["/categories/Java/SSM/index.html","4a4fd2aaccefec49fa446db1a97f6050"],["/categories/Java/index.html","d75f091da35e340f9738f32697993487"],["/categories/LeetCode/index.html","51b4d580c515e3f98b28b59ce3deb256"],["/categories/Note/index.html","bdb6719d83343a8c31b15971f665499c"],["/categories/Other/index.html","06a396edce9ce664d55fedc4693c2171"],["/categories/Python/OPP/index.html","2e12306a411c37f7ff3046bc694843ad"],["/categories/Python/index.html","5fa613777a4bf71a10e2dc3461ff0c10"],["/categories/Python/page/2/index.html","54ca2a525e755cbd480087c341b8e3ee"],["/categories/Python/内置库/index.html","0a8695a0da90a17c31b25b7f715c9529"],["/categories/Python/基础/index.html","02503f8140575875d23cf07ced94713c"],["/categories/Python/爬虫/index.html","7903aa0c5de7965482d5a2520238cba5"],["/categories/Python/爬虫/基础/index.html","ac8d41cf09f3a6aff7023742a32bd486"],["/categories/Python/进阶/IO/index.html","9fa7a06a5eb36a757de70342411f8256"],["/categories/Python/进阶/index.html","c6db8201a2ac1d5b5820eb7f05addeda"],["/categories/Python/进阶/进程、线程/index.html","883d4bde0c896a1b4a6acc4326f7366f"],["/categories/Python/进阶/错误与调试/index.html","19ada6464e206f496c4638d10649791f"],["/categories/Python/高级特性/index.html","f31577e2e7d1f8913524a09b157fe857"],["/categories/RSA/index.html","271a47754c62334893bf6379c90228a9"],["/categories/Vue/index.html","fe44ef71c804fa62a4cb1ae2867d9283"],["/categories/index.html","e041d787148b3af82ddd39b595b4a68d"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","b24a99909a184a8f888bfafe55a8af55"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","86986d3eda3105d3fed1ca146ce3660f"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","0871aa421fa04dc6e9cad1096db1ae70"],["/page/2/index.html","d0aa9356944cacc28c680b1cd5a62ff8"],["/page/3/index.html","f096ed7fbed81b7915e7bc34620caea0"],["/page/4/index.html","c3fffb9f8ed208a10cd412087c0482cd"],["/page/5/index.html","076f147212c7fd1c9c331e6c9a1b3db5"],["/page/6/index.html","6c74214fffb41bdd0d15e3a1b58322bb"],["/page/7/index.html","e69736eec9f4beb0cfabb95c5d707079"],["/page/8/index.html","3a36a34d0347dde2ec284addeca221aa"],["/page/9/index.html","e9b5a759d42bd1a09422167d3205e177"],["/posts/11720.html","d1fff5e54448b1e8956b00477dbc6e34"],["/posts/12119.html","3ec02edf19d3fd47db23b51fbddf8f70"],["/posts/13406.html","6299abec8842ddf2ec9a1e6dbda5e0f7"],["/posts/13460.html","3dd02845498ee8c40b967b8143830cda"],["/posts/15463.html","2f849dda2dd7dcb3aeaef5783b17b98c"],["/posts/16107.html","52e9b373f2dadfb961eb9a5fc0b28d84"],["/posts/17036.html","8055d623523df3b689f106301cc2e5de"],["/posts/17751.html","31e16395ce0507119e850b4218dde87d"],["/posts/18012.html","d604f9450b248bf26259365613afd13d"],["/posts/18591.html","1da8e533ca71c57df609db2d3112f441"],["/posts/1937010b.html","171c7db9e540d888923a7796b3a56371"],["/posts/19751.html","5a5670f9fd87964c7348ff2294c19d78"],["/posts/19a13983.html","edd3aef573ba0f9b4af7c6ed7472a487"],["/posts/1aa7bff2.html","212ff71730c2e3a2e7a654a0e0664dfe"],["/posts/21668.html","77619f1e55d25b0f6185a9f7cc977757"],["/posts/22089.html","50e338b739fdbed714612f5abede3a9d"],["/posts/237b56c2.html","e22b0acd44fcf763e6125562649686e0"],["/posts/24435.html","dd672d5df97808ea6ed748ad36e59f40"],["/posts/25425.html","ffca6587b9de31c0ea2c8b734e2d2fbb"],["/posts/25647.html","a1bff0eb4d61f3ae126e1d2abc9a7988"],["/posts/25754.html","44ee721f88846abed89d36c23a758a9a"],["/posts/28223.html","29aa2d2d9e5f23616b4a0103990c4895"],["/posts/28995.html","7002ab444a3847352e9ba1b5a584d519"],["/posts/29925.html","a57f044dc7b0d675d902a511f7ef87b9"],["/posts/2c39f343.html","7c4781aa24a21be149c1353a104aca36"],["/posts/2c48000c.html","c649ad93bcd55c7ebf02dca18b17d838"],["/posts/31044.html","e67c3ed5af15e244a6c11bd942eb67c0"],["/posts/32620.html","0f418020b49a4561bf802fa35a68cd56"],["/posts/33205.html","34d2abe993e72f653639ff367ad5246e"],["/posts/33364.html","e83a414e7f4cedc2304d26188cf3bd7b"],["/posts/34681.html","bf797298a7f97cd2fdbafe8755848dd0"],["/posts/34736.html","f09905cbfbf1fe8c3d23a2f2e3c1c38a"],["/posts/35371.html","5a4ae907de4f83cfd352122b2f54a967"],["/posts/37243.html","e992e1bf1caa6fab4276a7e67e71062a"],["/posts/37390.html","968dfbabed62ec655e3c3b21009977ab"],["/posts/37710.html","ef91e3436a70ec5ef62f1e4993fbd159"],["/posts/38014.html","debe646d9303e8da9ef67a878f16acb6"],["/posts/3844.html","1a4984a2ac089996c38ab092559a2e62"],["/posts/3887.html","d5b59482fc47c17b8a95f1fcdc5e755a"],["/posts/38965.html","f6ba7bd7e78d2954eb579956495b42c0"],["/posts/39690.html","9c10c516e4271ad097326b6393af00fe"],["/posts/39743.html","abb3d908efa155f4deaead25da84fc24"],["/posts/41079.html","98ed44645eebddfc7f11541afa5c0c21"],["/posts/41307.html","e0733dd716e12d1b75a959802dabd56f"],["/posts/41814.html","20ab664408c9ef1b8bca118e8bd31dc7"],["/posts/41947.html","a89327748f14b27192ad967d520b7c84"],["/posts/42006.html","3725dce9a061b2986a8ed5bd25ab3688"],["/posts/42106.html","b03b35926267fb7bab7882f75565ebf8"],["/posts/42715.html","3eabe173031283468db07d693b23e7e2"],["/posts/42822.html","a65f98ac29b129a5cc8e57d64edcd90a"],["/posts/43293.html","0f8d8816cf2d094a0b57039a68c5f71b"],["/posts/44644.html","f218dc3a786002f48d56e1a0c0c5f5ce"],["/posts/44742.html","ce8cfba1069061f7951bdec121e8da07"],["/posts/45109.html","559ad39c23a515b655180a744eba8ec9"],["/posts/45196.html","c5cff8375ef3f421e78c384938ed93d2"],["/posts/451cd62.html","3bc320abe3d1379258408c3328a1b213"],["/posts/46719.html","3f095a06dde83cf5b55c9ee7d9802b0b"],["/posts/46855.html","3a5f4a5d2ff833a9c1535176e8e39771"],["/posts/48872.html","b1dc2397ecaf60f3100805508835270d"],["/posts/4950.html","a36bb0017caa96e671e702a0fe245f4f"],["/posts/50917.html","d9cda10f565db952f139d7c7a52a9800"],["/posts/52628.html","2ebaa71d7fa8d541a2e3261fb7f5cc66"],["/posts/54509.html","1d74a27216ab4e51c414142f23771f6a"],["/posts/55493.html","f9cd7a8d70a8278223b816aad304bd3a"],["/posts/55674.html","4530e4e56158f4f5ada127b3056f2667"],["/posts/59097.html","a9e9d32a323aa918a44ca4a703ac81c5"],["/posts/5bdd8b42.html","3e4989e5058f86271320f2193dd86135"],["/posts/5d7d558a.html","249af2971d0008b3c26c1547ad373be0"],["/posts/60258.html","8e1d09c769c98dc163d973f11fb0a321"],["/posts/6239436b.html","4723bf4c5a15ea6f75d54e1228f8713d"],["/posts/63024.html","61c0d72693beeee9c491eb09b04c456a"],["/posts/6343.html","d14275fcefcd5462ac8ed3054bc83a8e"],["/posts/64290.html","f47d047bbd98d2794bb9145735dcc18a"],["/posts/64ec0a72.html","e071b9bd3cba7967e699cf68d431deb8"],["/posts/65033.html","500eac6db7c44305c57099e9d6922b0d"],["/posts/65501a4c.html","d74099349a17f1640d0f36485cbe080c"],["/posts/6642a673.html","a7fa856786a1269200c46d66c0f6d425"],["/posts/6930.html","b3abe93b494037a5c354ebac299968d7"],["/posts/7031.html","78e3d7c1027abb48fd2660cdc6a51963"],["/posts/7b9344b7.html","3d75ba36f6fe9c8bca2e4f574380de49"],["/posts/7ebc0a4.html","4aab1de517da841f1738d704b5822f3f"],["/posts/81730e0e.html","481ecbd0f103a6f556459d12041bf59c"],["/posts/88c693c7.html","89ad5a72f3fccaf63e6c6d3d6b34f2a5"],["/posts/8961d743.html","e84ea58000cc311ec73bcbe2be947172"],["/posts/9049.html","5227610809f81f3da3aaec6891d9b234"],["/posts/913ad9ee.html","53c0528dcdb3239d2067e2c3660debd8"],["/posts/9832.html","bc71bd5f973ef92e57681660f69b827e"],["/posts/a55bf0d2.html","75472c1a089669fed5e33c3bb78ef3eb"],["/posts/a6eafc24.html","c269dd92b1ceeddfe4ce90ab13c2fcd4"],["/posts/b2fbd54c.html","83addf173e777bd6d834cda4e1cc533b"],["/posts/c6fec8a1.html","80126efe3cdd95f8a9035c5ef306c7d4"],["/posts/c8c5007f.html","6a0ae4c430233f791b0227b4b5c5652b"],["/posts/ce0db2d0.html","4e7bc90770b9bbe81b7c030f718dba13"],["/posts/d0d1ce.html","3c3e42ac4ad038de9ab1b42d66b4095e"],["/posts/d554428f.html","27e4c4f92edeb667446751d84ce5fb67"],["/posts/d9677098.html","7c25dc527aba671f112eb40a1c8aecc5"],["/posts/e3c7a27f.html","803b05b23b9b22a0caef98011ce9b32d"],["/posts/ff53e8a4.html","e17b4b660b8220383445394655f89f6b"],["/sw-register.js","4810de1299802bdf3b11037bc7a2a0b5"],["/tags/C-Language/index.html","9710c835e38f94d0e60d9da365aade6d"],["/tags/DataStruction/index.html","1cdb76c62bc1039983827a9936e52b01"],["/tags/Electron/index.html","6eac4a59f983f820018f8ef92e8ed367"],["/tags/FTP/index.html","6de8a311627edfa202b3c721e604e264"],["/tags/Golang/index.html","13657007aea8596f7aff6c679e5c26fc"],["/tags/Golang/page/2/index.html","b6f080dc845dcb30f4efacf8bf0be1c0"],["/tags/HEXO/index.html","c1f3224155d0ac32b66c5b22a8a1c582"],["/tags/Hash/index.html","bcda1ce6e04b36bae05f60c12f68c4ef"],["/tags/Java/index.html","f70461d5464f587c08e8b98079029f0c"],["/tags/Json/index.html","7c4fe8ad974920766b7410ade632ca69"],["/tags/LeetCode/index.html","2e3ebe368a9edf96330feec7bcea5078"],["/tags/OneTiny/index.html","eb13528fd50cccffd4a5edab406d8c92"],["/tags/Python/index.html","d0baebff37df12c957ea0fa3c354ed89"],["/tags/Python/page/2/index.html","4eebbdfaf773bd884ac9dd0a4b9e42c2"],["/tags/RSA/index.html","f16f6a8d2d463ae8b1bb0d0a63584fd1"],["/tags/SSM/index.html","a7e56d993bd4e46e56b4a17f24a226ab"],["/tags/SSM配置/index.html","6f045f64b3f3b87a453b8f69ea601be2"],["/tags/Vue/index.html","fa502ea6edb99765ebd26cb10a96f94b"],["/tags/YAML/index.html","facc73b33f907b4842b6881a54948d77"],["/tags/gin/index.html","278dbd24b1d693479b99751d7f5252b1"],["/tags/git/index.html","392b335a35c68d801bf9e857d38f60f6"],["/tags/index.html","2aeb4b1c1f0b7b5b91b98aa9e5f1de85"],["/tags/json/index.html","2cea24ae8e9334313f4c48a3c374dbef"],["/tags/note/index.html","958cd99404eba33951303fd51263aba1"],["/tags/request/index.html","bcb23e3f00cfbed394b5c02e0dc63fab"],["/tags/response/index.html","79fa4ce7cea597e98c29b7a5673d3422"],["/tags/上传/index.html","38bd6acba532b824ab39018ef74e8cec"],["/tags/上传下载/index.html","8541332cf1f70a58db7288d06f282fd3"],["/tags/下载/index.html","984f30e553c1b3d3700cdd9d518d1704"],["/tags/中间件/index.html","36351a2721387d74c9cca1c112380a42"],["/tags/事务管理/index.html","9346579959f4e07952f92837ac0580d8"],["/tags/函数式编程/index.html","f7efe92ccbc68b2b2d69ee8b9a368d18"],["/tags/反射/index.html","5d773f51eae32b08901af145b6015441"],["/tags/命令/index.html","105fcf8da295675e122cde3c78f583b9"],["/tags/局域网/index.html","c4699a20b73ddd181d005b83fce5d0c7"],["/tags/并行与并发/index.html","c8953638553cd17e6524579222aa2d69"],["/tags/拦截器/index.html","58ae3b32490eeddbd3d977d6581de031"],["/tags/数据绑定/index.html","8086f035934406e187df51c1f5944502"],["/tags/数据结构/index.html","a84d1120b9db2c53d2b45a530f6386cc"],["/tags/正则表达式/index.html","e1d1f32946d210d9700a9b24a754b709"],["/tags/爬虫/index.html","3c23597d9f22e3bec6ea2f47fafc66b9"],["/tags/独立开发/index.html","1097cdbf486adfad2d549ceafea260d9"],["/tags/监视器/index.html","085427c97615918b1ddd03e515a1958b"],["/tags/算法/index.html","60d8bca7a9abc65bff2b43d508f6552a"],["/tags/统一异常处理/index.html","1c1a02c395e757a941c19493670d0557"],["/tags/路由/index.html","cc20f2ce4342ece2147a141d73c3488e"],["/tags/重定向/index.html","d55a3b76ebc73716d901c92f4be8d14e"]];
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
