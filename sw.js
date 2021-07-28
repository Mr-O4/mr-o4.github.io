/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","98c4684d2cddcce2663065d034dad8a6"],["/archives/2019/04/index.html","5fc9ceeba388f5a41fe7ad4585532056"],["/archives/2019/05/index.html","ffb5407a0d648ba371ff258815848edb"],["/archives/2019/06/index.html","5f050e87602193530d80fbcd94c0fa2b"],["/archives/2019/07/index.html","5855e667446536deb0b3411cb1282dac"],["/archives/2019/index.html","f741b4224818a3b6e19649a361b932a7"],["/archives/2019/page/2/index.html","19a61cf0798315c5b7f7fc911bef1207"],["/archives/2020/03/index.html","27eaaaaa31ca12d2a6c6083b5260386d"],["/archives/2020/04/index.html","383d0e62b864279d8f07a3e023bf1904"],["/archives/2020/07/index.html","dc23c43397177a95145a760d2e456ac2"],["/archives/2020/07/page/2/index.html","0e545f446c4a288bdb9a2f9a2ba604a4"],["/archives/2020/08/index.html","27e9c6502bc287ba961bd008ba0b8d45"],["/archives/2020/index.html","3ea1a022278bf75d968ff7754ac3ac84"],["/archives/2020/page/2/index.html","2c67b0dfcac7c22dc4f821da50711bab"],["/archives/2020/page/3/index.html","679c5659ac6522e62cb0934a4a035957"],["/archives/2021/02/index.html","bde6b604db2a200fe8580fe3919d6434"],["/archives/2021/06/index.html","6cef93b7b457a6cada488f57385aaf48"],["/archives/2021/07/index.html","922369cc89bde4d56d90b37794d14d1f"],["/archives/2021/07/page/2/index.html","72489628d75eeba4987399750bb8299a"],["/archives/2021/index.html","a453b7cd6c8cbcd29e4c909d2b581f65"],["/archives/2021/page/2/index.html","3efa60873b247c444a4533aa1f2a5171"],["/archives/2021/page/3/index.html","65336e5a93bb267519617eb8b0f7fcc6"],["/archives/index.html","1ee1d59b4918c578df6f2f84eb6781e5"],["/archives/page/2/index.html","1ee1d59b4918c578df6f2f84eb6781e5"],["/archives/page/3/index.html","1ee1d59b4918c578df6f2f84eb6781e5"],["/archives/page/4/index.html","1ee1d59b4918c578df6f2f84eb6781e5"],["/archives/page/5/index.html","140afecf35badbeb17266c94bab00e6f"],["/archives/page/6/index.html","140afecf35badbeb17266c94bab00e6f"],["/archives/page/7/index.html","140afecf35badbeb17266c94bab00e6f"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","26856521b484ec24e742db211abdb9ab"],["/categories/DataStruction/index.html","f538206edcd0bdb339937a4aa5528488"],["/categories/Electron/index.html","9c406d5ec50756b7415302448eb592e6"],["/categories/Git/index.html","5d22441deb9f473f934999e9ddab2fbb"],["/categories/Golang/Adavanced/index.html","52a88abfc05adb75501b9b9a44a6ecbf"],["/categories/Golang/Basic/index.html","9256232b877665c79f85bea546a77cc0"],["/categories/Golang/Basic/page/2/index.html","488a5b45bc3a00a59c8f32d9f25cc790"],["/categories/Golang/Framework/index.html","649e6f0a1bc9ceadf95abb3106bc06de"],["/categories/Golang/index.html","6f9961bc68c1ed30a39911c713931278"],["/categories/Golang/page/2/index.html","5a179d9da498fb0ca6a1f0a16a700243"],["/categories/HEXO/index.html","c17a361973fe195488d6426c0f45aeae"],["/categories/Java/SSM/index.html","bc408cd9c0c379d2bcfd04b84adaa516"],["/categories/Java/index.html","4a9df2766ac463e2c976381a1e026b9a"],["/categories/LeetCode/index.html","5ced485fa4803f5b26bfbe906bdabd04"],["/categories/Note/index.html","073cba5749ea97a975ccb5b7b35b19bf"],["/categories/Other/index.html","7568b5ac19eafc51c39ea054afe98863"],["/categories/Python/OPP/index.html","27cd22be43a6e4287913d8b67e94919e"],["/categories/Python/index.html","0cde7309ce2bc9206d0df8ea7ca00f31"],["/categories/Python/page/2/index.html","ab6869e4f8c141d66587f4e9a1b8fe70"],["/categories/Python/内置库/index.html","7891a6a6cea0e91ea2039ae8c5a6e4f4"],["/categories/Python/基础/index.html","7b879a55e74d7d58495c2e682a40d08f"],["/categories/Python/爬虫/index.html","4fbe952d74fc4e0ad0126d0f5bb45546"],["/categories/Python/爬虫/基础/index.html","0300e76a4be6e9bfa978343438d8eebf"],["/categories/Python/进阶/IO/index.html","b17d63bd101d5b0f26078427c4fb1c90"],["/categories/Python/进阶/index.html","d77a6595ac7f6f697ce697ca2e34da77"],["/categories/Python/进阶/进程、线程/index.html","ced3a1a8580a09f25146d53650e5e976"],["/categories/Python/进阶/错误与调试/index.html","ad736c8dc6da4fffe23cb7159de1d1d0"],["/categories/Python/高级特性/index.html","0031777bb87700002233f13363bf03c0"],["/categories/RSA/index.html","a0cef24560651c65298ee970caff8bed"],["/categories/Vue/index.html","e9ddd13c778b3603fbc23138d2194a42"],["/categories/index.html","40a0331886077aeb71325b0c708e5637"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","b24a99909a184a8f888bfafe55a8af55"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","dc100027234cba3d11c333a77e2f6d62"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","11e0db8ebe9c39a6b15ea9d10da65012"],["/page/2/index.html","5b3989cf9da1c751fad073893f455858"],["/page/3/index.html","b0f0a5fbae5c1c66896772a41a5e33b1"],["/page/4/index.html","163c65f1222e8471220107dccf529a5a"],["/page/5/index.html","92790833a9e8ecc354344ba85b99cb45"],["/page/6/index.html","73a8b22b8b9c0fa23b183303ee8db7d7"],["/page/7/index.html","469b3327f4cbad50f521cc2cdd788e09"],["/page/8/index.html","a01bef5bf342dac9b2b63585439f1985"],["/page/9/index.html","d82dab5c7ff11fa07cf1d037dbd79f3f"],["/posts/11720.html","d1fff5e54448b1e8956b00477dbc6e34"],["/posts/12119.html","3ec02edf19d3fd47db23b51fbddf8f70"],["/posts/13406.html","6299abec8842ddf2ec9a1e6dbda5e0f7"],["/posts/13460.html","3dd02845498ee8c40b967b8143830cda"],["/posts/15463.html","2f849dda2dd7dcb3aeaef5783b17b98c"],["/posts/16107.html","52e9b373f2dadfb961eb9a5fc0b28d84"],["/posts/17036.html","8055d623523df3b689f106301cc2e5de"],["/posts/17751.html","31e16395ce0507119e850b4218dde87d"],["/posts/18012.html","d604f9450b248bf26259365613afd13d"],["/posts/18591.html","1da8e533ca71c57df609db2d3112f441"],["/posts/1937010b.html","171c7db9e540d888923a7796b3a56371"],["/posts/19751.html","5a5670f9fd87964c7348ff2294c19d78"],["/posts/19a13983.html","edd3aef573ba0f9b4af7c6ed7472a487"],["/posts/1aa7bff2.html","212ff71730c2e3a2e7a654a0e0664dfe"],["/posts/21668.html","77619f1e55d25b0f6185a9f7cc977757"],["/posts/22089.html","7780efc70f29fd78c7f75337fc054963"],["/posts/237b56c2.html","e22b0acd44fcf763e6125562649686e0"],["/posts/24435.html","dd672d5df97808ea6ed748ad36e59f40"],["/posts/25425.html","ffca6587b9de31c0ea2c8b734e2d2fbb"],["/posts/25647.html","a1bff0eb4d61f3ae126e1d2abc9a7988"],["/posts/25754.html","44ee721f88846abed89d36c23a758a9a"],["/posts/28223.html","29aa2d2d9e5f23616b4a0103990c4895"],["/posts/28995.html","7002ab444a3847352e9ba1b5a584d519"],["/posts/29925.html","a57f044dc7b0d675d902a511f7ef87b9"],["/posts/2c39f343.html","3d1cf535fdeb14ca45b8c36898555f14"],["/posts/2c48000c.html","c649ad93bcd55c7ebf02dca18b17d838"],["/posts/31044.html","e67c3ed5af15e244a6c11bd942eb67c0"],["/posts/32620.html","0f418020b49a4561bf802fa35a68cd56"],["/posts/33205.html","34d2abe993e72f653639ff367ad5246e"],["/posts/33364.html","e83a414e7f4cedc2304d26188cf3bd7b"],["/posts/34681.html","8e95d7b26c5b403f56e26f8241853c49"],["/posts/34736.html","f09905cbfbf1fe8c3d23a2f2e3c1c38a"],["/posts/35371.html","5a4ae907de4f83cfd352122b2f54a967"],["/posts/37243.html","e992e1bf1caa6fab4276a7e67e71062a"],["/posts/37390.html","968dfbabed62ec655e3c3b21009977ab"],["/posts/37710.html","ef91e3436a70ec5ef62f1e4993fbd159"],["/posts/38014.html","debe646d9303e8da9ef67a878f16acb6"],["/posts/3844.html","1a4984a2ac089996c38ab092559a2e62"],["/posts/3887.html","d5b59482fc47c17b8a95f1fcdc5e755a"],["/posts/38965.html","f6ba7bd7e78d2954eb579956495b42c0"],["/posts/39690.html","9c10c516e4271ad097326b6393af00fe"],["/posts/39743.html","abb3d908efa155f4deaead25da84fc24"],["/posts/41079.html","8aa6b2d4a9ada4f49abf8045b0e90ed3"],["/posts/41307.html","e0733dd716e12d1b75a959802dabd56f"],["/posts/41814.html","20ab664408c9ef1b8bca118e8bd31dc7"],["/posts/41947.html","a89327748f14b27192ad967d520b7c84"],["/posts/42006.html","3725dce9a061b2986a8ed5bd25ab3688"],["/posts/42106.html","b03b35926267fb7bab7882f75565ebf8"],["/posts/42715.html","3eabe173031283468db07d693b23e7e2"],["/posts/42822.html","a65f98ac29b129a5cc8e57d64edcd90a"],["/posts/43293.html","0f8d8816cf2d094a0b57039a68c5f71b"],["/posts/44644.html","f218dc3a786002f48d56e1a0c0c5f5ce"],["/posts/44742.html","ce8cfba1069061f7951bdec121e8da07"],["/posts/45109.html","559ad39c23a515b655180a744eba8ec9"],["/posts/45196.html","c5cff8375ef3f421e78c384938ed93d2"],["/posts/451cd62.html","3bc320abe3d1379258408c3328a1b213"],["/posts/46719.html","3f095a06dde83cf5b55c9ee7d9802b0b"],["/posts/46855.html","3a5f4a5d2ff833a9c1535176e8e39771"],["/posts/48872.html","b1dc2397ecaf60f3100805508835270d"],["/posts/4950.html","a36bb0017caa96e671e702a0fe245f4f"],["/posts/50917.html","d9cda10f565db952f139d7c7a52a9800"],["/posts/52628.html","2ebaa71d7fa8d541a2e3261fb7f5cc66"],["/posts/54509.html","1d74a27216ab4e51c414142f23771f6a"],["/posts/55493.html","f9cd7a8d70a8278223b816aad304bd3a"],["/posts/55674.html","4530e4e56158f4f5ada127b3056f2667"],["/posts/59097.html","a9e9d32a323aa918a44ca4a703ac81c5"],["/posts/5bdd8b42.html","3e4989e5058f86271320f2193dd86135"],["/posts/5d7d558a.html","249af2971d0008b3c26c1547ad373be0"],["/posts/60258.html","8aba792a7b294bcbc953e171ca17b9b9"],["/posts/6239436b.html","4723bf4c5a15ea6f75d54e1228f8713d"],["/posts/63024.html","61c0d72693beeee9c491eb09b04c456a"],["/posts/6343.html","33a17c626abd4078f1b1a2da304a60dc"],["/posts/64290.html","f47d047bbd98d2794bb9145735dcc18a"],["/posts/64ec0a72.html","e071b9bd3cba7967e699cf68d431deb8"],["/posts/65033.html","500eac6db7c44305c57099e9d6922b0d"],["/posts/65501a4c.html","79d78f915b0a32e65f9660f375af4ef7"],["/posts/6642a673.html","a7fa856786a1269200c46d66c0f6d425"],["/posts/6930.html","b3abe93b494037a5c354ebac299968d7"],["/posts/7031.html","78e3d7c1027abb48fd2660cdc6a51963"],["/posts/7b9344b7.html","3d75ba36f6fe9c8bca2e4f574380de49"],["/posts/7ebc0a4.html","4aab1de517da841f1738d704b5822f3f"],["/posts/81730e0e.html","e7187467b0c23c45bd901c87ccce75d1"],["/posts/88c693c7.html","89ad5a72f3fccaf63e6c6d3d6b34f2a5"],["/posts/8961d743.html","e84ea58000cc311ec73bcbe2be947172"],["/posts/9049.html","5227610809f81f3da3aaec6891d9b234"],["/posts/913ad9ee.html","53c0528dcdb3239d2067e2c3660debd8"],["/posts/9832.html","bc71bd5f973ef92e57681660f69b827e"],["/posts/a55bf0d2.html","75472c1a089669fed5e33c3bb78ef3eb"],["/posts/a6eafc24.html","7445f85406c482de81b6f1ea9bc61133"],["/posts/b2fbd54c.html","83addf173e777bd6d834cda4e1cc533b"],["/posts/c6fec8a1.html","80126efe3cdd95f8a9035c5ef306c7d4"],["/posts/c8c5007f.html","ae31e38dfa1d1900654dc54303a3c0ae"],["/posts/c8f1d592.html","93b037425ae0bb561fef7820bc764174"],["/posts/ce0db2d0.html","4e7bc90770b9bbe81b7c030f718dba13"],["/posts/d0d1ce.html","3c3e42ac4ad038de9ab1b42d66b4095e"],["/posts/d554428f.html","27e4c4f92edeb667446751d84ce5fb67"],["/posts/d9677098.html","7c25dc527aba671f112eb40a1c8aecc5"],["/posts/e3c7a27f.html","400f3c43c759cc682d0ed4589a5fc48b"],["/posts/ff53e8a4.html","e17b4b660b8220383445394655f89f6b"],["/sw-register.js","7310f48ae6b4d54b26032ffbfe2844f9"],["/tags/C-Language/index.html","7ec7d372ebb09e0d99450487403e5719"],["/tags/DataStruction/index.html","17d0fb851ee0d33f0f8c7177e5b8dbd9"],["/tags/Electron/index.html","3418637e620a54dbcbd2f9ddeff32ba6"],["/tags/FTP/index.html","4ad3b0f65420a35e2c992b34ab780677"],["/tags/Golang/index.html","0526ffcba7e22bc3d7893e79b666635a"],["/tags/Golang/page/2/index.html","e59d64982a693f018f6f89d5bfc6fad2"],["/tags/HEXO/index.html","af4656d5aba6a14e239233ba768f389d"],["/tags/Hash/index.html","2d150a6074069b88e9f4df5e31739faf"],["/tags/Java/index.html","e4c007e0ac40a8c14fa21f82f131e412"],["/tags/Json/index.html","acdd5f381d29658ce523b8c3a5510a85"],["/tags/LeetCode/index.html","13e366ad35db570051702f279fd5bafc"],["/tags/OneTiny/index.html","58feba8254f98e3689009734a3e0639e"],["/tags/Python/index.html","423d4ea7c375c5b6f63d10810a8ed8be"],["/tags/Python/page/2/index.html","38a5462a910a02cf46159415da7c09e3"],["/tags/RSA/index.html","9a3c6d74958e6bfb6eda8118e3f25a86"],["/tags/SSM/index.html","098a4f4c3832e4473d9e815a4d834589"],["/tags/SSM配置/index.html","3d64504e868f661134844ded50654a56"],["/tags/Vue/index.html","193950232ff116f386250770ac50abea"],["/tags/YAML/index.html","e1f8ee5ae69b72f113a10b7726c78a9e"],["/tags/gin/index.html","ae05c75f90cbea0ae3ef0a1c494dd5ee"],["/tags/git/index.html","babf4a709345b636c4880b507464e2e3"],["/tags/index.html","44cb92cd951798c459e446ffd76b352b"],["/tags/json/index.html","724c251e7af07a6bd578b2e0e9be53c4"],["/tags/note/index.html","5932b29f9781b007019855bea033e48d"],["/tags/request/index.html","12bd68989dce7245992edf01a0daf002"],["/tags/response/index.html","b3a5f1cdee30d40ea97bfaf4e099fe92"],["/tags/上传/index.html","e6e118824be07700a63a6d18b908347f"],["/tags/上传下载/index.html","72b91faae7c9968ec6604728dfcd698f"],["/tags/下载/index.html","bcb6bc12ac2fa1b14f1b81c7349cd64d"],["/tags/中间件/index.html","cb4ffea4989a98b95d5fa52d807892bd"],["/tags/事务管理/index.html","93131e7adaaae7db15177467f381e9d6"],["/tags/交叉编译/index.html","4b91ee6cd3df9f84bcb382770209a9b8"],["/tags/函数式编程/index.html","2d45ff435146b82df4dcea1bad664896"],["/tags/反射/index.html","fee9d91231d332c48ed582938cf1792e"],["/tags/命令/index.html","de8b1baeb1b2e6528627e5ee1aec5444"],["/tags/局域网/index.html","b129d0f42aa4a0a6256e3067a16d90b1"],["/tags/并行与并发/index.html","46bad6f77b7419e45afcb47bbbb1df8a"],["/tags/拦截器/index.html","cfafd31a15047e2a9944e996f78c08f7"],["/tags/数据绑定/index.html","3fae901644e4b1b318fcd2b527072ef8"],["/tags/数据结构/index.html","d30a46def5b5fb162b5972b0bd85d5bf"],["/tags/条件编译/index.html","61f3da5e3cd893767e386e59141a5725"],["/tags/正则表达式/index.html","06f3d737befde93d69f1eb6cb95a3680"],["/tags/爬虫/index.html","113c2d1e8cd0ce7de57e6b5977077b9c"],["/tags/独立开发/index.html","e039f8560629591b76c360608ee7eb67"],["/tags/监视器/index.html","ed99e19a07009f1117b3117591ed55f1"],["/tags/算法/index.html","1cd23a444ca193002de44a8414c45823"],["/tags/统一异常处理/index.html","032b691926ff57a59ab189282adf74c2"],["/tags/路由/index.html","a7f01aeb2d34d0c77199a47805e50a85"],["/tags/重定向/index.html","502e07c587d7e5be2fb78bea02c4feec"]];
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
