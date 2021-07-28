/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6ba9b4b3e2db7a168505aee6a668352"],["/about/index.html","ddae468378659ea4272de3bbd52cac90"],["/archives/2019/01/index.html","91e5fc7d235445848534d21bf7e06a47"],["/archives/2019/04/index.html","e857afef4e7ff77312c970895856933d"],["/archives/2019/05/index.html","2217f0a68cc09a67180abccfefaf4548"],["/archives/2019/06/index.html","ac927301dcd738ffa4c198226546c90d"],["/archives/2019/07/index.html","cd055e7aafbfa4c8b2e4fc8e944c6584"],["/archives/2019/index.html","ec701523b7a933c02bc230eb6e4a3b7c"],["/archives/2019/page/2/index.html","4517322e35532c69b8e74be7f4151f8e"],["/archives/2020/03/index.html","97adb6898d17e9a1dab47efd9494fa26"],["/archives/2020/04/index.html","ad49a88f52a9f535782c95fa5bd6c4a6"],["/archives/2020/07/index.html","8671a466b391f5ffd9af3ffc5b9f580a"],["/archives/2020/07/page/2/index.html","11b23bcfac90144dd7d81b313c3b0850"],["/archives/2020/08/index.html","b3d94268cc496b1aa628d454a813c24c"],["/archives/2020/index.html","c2082b85385b85281a1f5d1aac17ef43"],["/archives/2020/page/2/index.html","01063318981875219d3e127056a49982"],["/archives/2020/page/3/index.html","f5c3667ae9b699867c31b83859a1ad93"],["/archives/2021/02/index.html","ba8b8feb879fe50a3f13422d60737c31"],["/archives/2021/06/index.html","b6d82840bbbe4c4ca938e229a796c345"],["/archives/2021/07/index.html","3cb4ca069c12e66fc0c32e032e8b8dab"],["/archives/2021/07/page/2/index.html","209cf2d053c16539e0be1d4f7901aa4d"],["/archives/2021/07/page/3/index.html","234b1c2fe042d1d0e06ab33db048ab53"],["/archives/2021/index.html","e5d32a20e2d84d4ca97b138d03110436"],["/archives/2021/page/2/index.html","288b5fff77eb5cca6fe24fa5348e1719"],["/archives/2021/page/3/index.html","343b8e8a1ff6291716e1663ab9855856"],["/archives/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/2/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/3/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/4/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/5/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/6/index.html","5ced62221a315ea8ed2929452e254c09"],["/archives/page/7/index.html","5ced62221a315ea8ed2929452e254c09"],["/artitalk/index.html","fd1cc823e331853b5890d454aef20518"],["/categories/C-Language/index.html","fd2e492a88b5600cdefd6a21703d23ab"],["/categories/DataStruction/index.html","2e5dad5c0c8748bdcc1e55afe54ee7f1"],["/categories/Electron/index.html","4598abe6e3079364863feee3d0788c63"],["/categories/Git/index.html","ff9f08fecac231c591a44abd020685b2"],["/categories/Golang/Adavanced/index.html","5d19ff1849283636ccb384904fff5332"],["/categories/Golang/Basic/index.html","9530195f24f8545bd2da27b4739a76bb"],["/categories/Golang/Basic/page/2/index.html","458dca0c70a68daca46c3626ef695474"],["/categories/Golang/Framework/index.html","ddc6ab5a183bf94c1976e0a4c6efc73e"],["/categories/Golang/index.html","b9798db17435010d9f3bf52864a8c6cf"],["/categories/Golang/nil/index.html","df14ed8d55c330276166b342cbb199bb"],["/categories/Golang/page/2/index.html","60d4641c2cad8d657fb7c1209d13dc87"],["/categories/HEXO/index.html","f5fea9b524d4048f736c605755c4f6f7"],["/categories/Java/SSM/index.html","295bab670d4ffdbb4d4b1a4d910be6cb"],["/categories/Java/index.html","04613a3e9269fb6f787bbcdd21b82182"],["/categories/LeetCode/index.html","d0880adc0bde63e212e4c856dfd843bd"],["/categories/Note/index.html","dd24c992b0031d03bd2ca2a80162b853"],["/categories/Other/index.html","76e4b3c10d4afa64cdb10615446e15de"],["/categories/Python/OPP/index.html","9ea745e79e7605767a5418d8f9bbc7e8"],["/categories/Python/index.html","d857c52b9e4f60d9a5a35be406d82823"],["/categories/Python/page/2/index.html","e17b74eb2e1b71aaa0972b2865114164"],["/categories/Python/内置库/index.html","67bb1652a9f2363f4e9067565a3f2048"],["/categories/Python/基础/index.html","bc12d40d9f7b7c9266c765ad2af54137"],["/categories/Python/爬虫/index.html","9951560d5d45767eb5581feaf3464455"],["/categories/Python/爬虫/基础/index.html","3246af30a7c5af91fffebac64650d579"],["/categories/Python/进阶/IO/index.html","37b4d41aff7f8750997b47cf448cd713"],["/categories/Python/进阶/index.html","3f755e2a8607e1e07cfd2e61330f1f5d"],["/categories/Python/进阶/进程、线程/index.html","207d8bacc240776c6b781acfaca523f4"],["/categories/Python/进阶/错误与调试/index.html","d08dab5c89c05dfff2d712f22daa903d"],["/categories/Python/高级特性/index.html","5faa09228b112e02ba80345e82733c12"],["/categories/RSA/index.html","8ee4122e65d576f2898679e29196d406"],["/categories/Vue/index.html","151ef4569d1b82b2591f63e16d8f6b15"],["/categories/index.html","1d3d60a5f6c646af92d10cd18fe418fa"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","b24a99909a184a8f888bfafe55a8af55"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","b0d719db78ba77f3c5ac4ed294eebba5"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","27179a3450c6aa4a2bbafc8ad8f2d613"],["/page/11/index.html","0669dbfb09060a1e43efcb6a51564e8c"],["/page/2/index.html","8446a21fbae7223ed7700b384ac07b32"],["/page/3/index.html","8713fa8dcf68c9cca4b22cea9322163b"],["/page/4/index.html","d3f242d1935dd89c93a50fcb7d3ab2d3"],["/page/5/index.html","5bd47973ac94c6704399ee800d7f6769"],["/page/6/index.html","f2afc53acbc34eb2b50e374ef8486100"],["/page/7/index.html","1a56fdb27f8e5396328aff69604800c0"],["/page/8/index.html","f72f64f172e955b9fd5dc063632f0e4b"],["/page/9/index.html","c20e254f2669b08ba07dd2299946e051"],["/posts/11720.html","d1fff5e54448b1e8956b00477dbc6e34"],["/posts/12119.html","3ec02edf19d3fd47db23b51fbddf8f70"],["/posts/13406.html","6299abec8842ddf2ec9a1e6dbda5e0f7"],["/posts/13460.html","3dd02845498ee8c40b967b8143830cda"],["/posts/15463.html","2f849dda2dd7dcb3aeaef5783b17b98c"],["/posts/16107.html","52e9b373f2dadfb961eb9a5fc0b28d84"],["/posts/17036.html","8055d623523df3b689f106301cc2e5de"],["/posts/17751.html","31e16395ce0507119e850b4218dde87d"],["/posts/18012.html","d604f9450b248bf26259365613afd13d"],["/posts/18591.html","1da8e533ca71c57df609db2d3112f441"],["/posts/1937010b.html","171c7db9e540d888923a7796b3a56371"],["/posts/19751.html","5a5670f9fd87964c7348ff2294c19d78"],["/posts/19a13983.html","edd3aef573ba0f9b4af7c6ed7472a487"],["/posts/1aa7bff2.html","212ff71730c2e3a2e7a654a0e0664dfe"],["/posts/21668.html","77619f1e55d25b0f6185a9f7cc977757"],["/posts/22089.html","7780efc70f29fd78c7f75337fc054963"],["/posts/237b56c2.html","e22b0acd44fcf763e6125562649686e0"],["/posts/24435.html","dd672d5df97808ea6ed748ad36e59f40"],["/posts/25425.html","ffca6587b9de31c0ea2c8b734e2d2fbb"],["/posts/25647.html","a1bff0eb4d61f3ae126e1d2abc9a7988"],["/posts/25754.html","44ee721f88846abed89d36c23a758a9a"],["/posts/28223.html","29aa2d2d9e5f23616b4a0103990c4895"],["/posts/28995.html","7002ab444a3847352e9ba1b5a584d519"],["/posts/29925.html","a57f044dc7b0d675d902a511f7ef87b9"],["/posts/2c39f343.html","3eee85751e96140a173dfc461112a67e"],["/posts/2c48000c.html","c649ad93bcd55c7ebf02dca18b17d838"],["/posts/31044.html","e67c3ed5af15e244a6c11bd942eb67c0"],["/posts/32620.html","0f418020b49a4561bf802fa35a68cd56"],["/posts/33205.html","34d2abe993e72f653639ff367ad5246e"],["/posts/33364.html","e83a414e7f4cedc2304d26188cf3bd7b"],["/posts/34681.html","8e95d7b26c5b403f56e26f8241853c49"],["/posts/34736.html","f09905cbfbf1fe8c3d23a2f2e3c1c38a"],["/posts/35371.html","5a4ae907de4f83cfd352122b2f54a967"],["/posts/37243.html","e992e1bf1caa6fab4276a7e67e71062a"],["/posts/37390.html","968dfbabed62ec655e3c3b21009977ab"],["/posts/37710.html","ef91e3436a70ec5ef62f1e4993fbd159"],["/posts/38014.html","debe646d9303e8da9ef67a878f16acb6"],["/posts/3844.html","1a4984a2ac089996c38ab092559a2e62"],["/posts/3887.html","d5b59482fc47c17b8a95f1fcdc5e755a"],["/posts/38965.html","f6ba7bd7e78d2954eb579956495b42c0"],["/posts/39690.html","9c10c516e4271ad097326b6393af00fe"],["/posts/39743.html","abb3d908efa155f4deaead25da84fc24"],["/posts/41079.html","8aa6b2d4a9ada4f49abf8045b0e90ed3"],["/posts/41307.html","e0733dd716e12d1b75a959802dabd56f"],["/posts/41814.html","20ab664408c9ef1b8bca118e8bd31dc7"],["/posts/41947.html","a0ce479ce12401269a2b4efc9da45a98"],["/posts/42006.html","3725dce9a061b2986a8ed5bd25ab3688"],["/posts/42106.html","b03b35926267fb7bab7882f75565ebf8"],["/posts/42715.html","3eabe173031283468db07d693b23e7e2"],["/posts/42822.html","a65f98ac29b129a5cc8e57d64edcd90a"],["/posts/43293.html","0f8d8816cf2d094a0b57039a68c5f71b"],["/posts/44644.html","f218dc3a786002f48d56e1a0c0c5f5ce"],["/posts/44742.html","ce8cfba1069061f7951bdec121e8da07"],["/posts/45109.html","559ad39c23a515b655180a744eba8ec9"],["/posts/45196.html","c5cff8375ef3f421e78c384938ed93d2"],["/posts/451cd62.html","3bc320abe3d1379258408c3328a1b213"],["/posts/46719.html","3f095a06dde83cf5b55c9ee7d9802b0b"],["/posts/46855.html","3a5f4a5d2ff833a9c1535176e8e39771"],["/posts/48872.html","b1dc2397ecaf60f3100805508835270d"],["/posts/4950.html","a36bb0017caa96e671e702a0fe245f4f"],["/posts/50917.html","d9cda10f565db952f139d7c7a52a9800"],["/posts/52628.html","2ebaa71d7fa8d541a2e3261fb7f5cc66"],["/posts/54509.html","1d74a27216ab4e51c414142f23771f6a"],["/posts/55493.html","f9cd7a8d70a8278223b816aad304bd3a"],["/posts/55674.html","4530e4e56158f4f5ada127b3056f2667"],["/posts/59097.html","a9e9d32a323aa918a44ca4a703ac81c5"],["/posts/5bdd8b42.html","3e4989e5058f86271320f2193dd86135"],["/posts/5d7d558a.html","249af2971d0008b3c26c1547ad373be0"],["/posts/60258.html","8aba792a7b294bcbc953e171ca17b9b9"],["/posts/6239436b.html","4723bf4c5a15ea6f75d54e1228f8713d"],["/posts/63024.html","61c0d72693beeee9c491eb09b04c456a"],["/posts/6343.html","33a17c626abd4078f1b1a2da304a60dc"],["/posts/64290.html","f47d047bbd98d2794bb9145735dcc18a"],["/posts/64ec0a72.html","e071b9bd3cba7967e699cf68d431deb8"],["/posts/65033.html","500eac6db7c44305c57099e9d6922b0d"],["/posts/65501a4c.html","d74099349a17f1640d0f36485cbe080c"],["/posts/6642a673.html","a7fa856786a1269200c46d66c0f6d425"],["/posts/6930.html","b3abe93b494037a5c354ebac299968d7"],["/posts/7031.html","78e3d7c1027abb48fd2660cdc6a51963"],["/posts/7b9344b7.html","3d75ba36f6fe9c8bca2e4f574380de49"],["/posts/7ebc0a4.html","4aab1de517da841f1738d704b5822f3f"],["/posts/81730e0e.html","e8e52975b35898b35cb53e23ac3fbb3b"],["/posts/88c693c7.html","89ad5a72f3fccaf63e6c6d3d6b34f2a5"],["/posts/8961d743.html","e84ea58000cc311ec73bcbe2be947172"],["/posts/9049.html","5227610809f81f3da3aaec6891d9b234"],["/posts/913ad9ee.html","defd210079c3337cddbdeee6c00ca47d"],["/posts/9832.html","bc71bd5f973ef92e57681660f69b827e"],["/posts/a55bf0d2.html","75472c1a089669fed5e33c3bb78ef3eb"],["/posts/a6eafc24.html","fab457b4262982a6b85d802b5ee73033"],["/posts/b2fbd54c.html","83addf173e777bd6d834cda4e1cc533b"],["/posts/c6fec8a1.html","80126efe3cdd95f8a9035c5ef306c7d4"],["/posts/c8c5007f.html","6a0ae4c430233f791b0227b4b5c5652b"],["/posts/c8f1d592.html","e831003f5cd46b686e90ee9bfb42396e"],["/posts/ce0db2d0.html","4e7bc90770b9bbe81b7c030f718dba13"],["/posts/d0d1ce.html","9747590d13686eb04666ea13e831062c"],["/posts/d554428f.html","27e4c4f92edeb667446751d84ce5fb67"],["/posts/d9677098.html","7c25dc527aba671f112eb40a1c8aecc5"],["/posts/e3c7a27f.html","803b05b23b9b22a0caef98011ce9b32d"],["/posts/f0e2800f.html","03d3af32bb86f5470ead127329d882ea"],["/posts/f56d3ab8.html","9a4de3e407cbc14230b543f5089b0db2"],["/posts/ff53e8a4.html","e17b4b660b8220383445394655f89f6b"],["/sw-register.js","0d89f54b7cdb7b452f60a2516224d8ae"],["/tags/Builder-模式/index.html","c9f8d62d05b9b8567273acd8077f4924"],["/tags/C-Language/index.html","d34a1691bf39b595f48b5db73a8655c8"],["/tags/DataStruction/index.html","fa299eef4fb9ca758c2e5d5db1326177"],["/tags/Electron/index.html","ceb24ab166e5c23d20f4c8bf0c0b4bd5"],["/tags/FTP/index.html","7ea3115ebecb65e50b135984e7b48e99"],["/tags/Function-Option/index.html","d5c841b17143094253ede26317034da0"],["/tags/Golang/index.html","8882f05f1de8f004c15bea69f8436ea5"],["/tags/Golang/page/2/index.html","810e2c83a25dc8e460464f8c07146fca"],["/tags/HEXO/index.html","22103350ca58130097914ca4971bc2c9"],["/tags/Hash/index.html","bdba5e0a1e55a3ddb7b9789bb4fde9d8"],["/tags/Java/index.html","36cc6ff79d5dcee7b8bb30e9c706b70e"],["/tags/Json/index.html","f34e091d1f31bea64c8660a03171d629"],["/tags/LeetCode/index.html","2e0fbbb29089aa525e94c84d3120f8a3"],["/tags/OneTiny/index.html","aa4f96744c955f118308d7363e8a4807"],["/tags/Python/index.html","5792c574708f7650ff0b1e5100677c9a"],["/tags/Python/page/2/index.html","2385a57987540ea694143a65751fe0e3"],["/tags/RSA/index.html","15c4efd68fb53f0963c813b7e424625b"],["/tags/SSM/index.html","92f95395b366c6d03518a3e791805c55"],["/tags/SSM配置/index.html","099f34d451ca1398c664988feb364fbd"],["/tags/Vue/index.html","259f7a59e04f7f6de57b219424348fca"],["/tags/YAML/index.html","0b257a612d9290065d71ed3bb39c8da2"],["/tags/gin/index.html","422f21e6751610c2611eb3c2c1269972"],["/tags/git/index.html","7405a23b26db8662fd524b74d9c536ef"],["/tags/index.html","f6d1b18b6dc92e0b595de151f128ce14"],["/tags/json/index.html","490ec2d6385170e17b9d17f3f4686154"],["/tags/note/index.html","97307cd95a58b3dda4bcfb18f86a08e9"],["/tags/request/index.html","3ffdefbd12be697e16afdcdc1517f128"],["/tags/response/index.html","5b68190fb73043db42ee40ae24da1249"],["/tags/上传/index.html","46b58e39c737e28e9c58570ce6812782"],["/tags/上传下载/index.html","516a3b92ec08b21a87e06acefb2adcc1"],["/tags/下载/index.html","7f362b43a8a95feca2ad7dcdbd71cc4f"],["/tags/中间件/index.html","8ee5ad06fe62adbaab9a63a9a9c2fd1d"],["/tags/事务管理/index.html","d85f4edd96ff95ee4a5c35338408860e"],["/tags/交叉编译/index.html","1f1dbb13caa5b8e75f405bf0f3202f2c"],["/tags/函数式编程/index.html","ad8d44c075a59afdf023196c5e169281"],["/tags/反射/index.html","face0e863811eca4e6257803a9257d2d"],["/tags/命令/index.html","841ebb7bddf48963c553895501d0220f"],["/tags/局域网/index.html","b791fd2c031f2b7ac42dc762814cd77e"],["/tags/并行与并发/index.html","e89fde578833f5cc19b981cb7ccea26e"],["/tags/拦截器/index.html","a2b46442aba17a81897b214d2c12a8ee"],["/tags/数据绑定/index.html","0f0d404090e86dc2ca9318ac7755cad8"],["/tags/数据结构/index.html","b673b79f83dc492dbdbe7d92facfb7b7"],["/tags/条件编译/index.html","1c5ba79d6398a7bdf6ad988635fb1613"],["/tags/正则表达式/index.html","b6bc8355d3b64f36e2a0e165f9aa5bd8"],["/tags/爬虫/index.html","832edf8f1c17dea1eb5dc87d82f7e48f"],["/tags/独立开发/index.html","1eaa88149d2a827f06e3a959b514a32f"],["/tags/生成器模式/index.html","2edb69dd227b7911779cc44c37c34fa7"],["/tags/监视器/index.html","0fc63f886a70d5fb9c38a5b7715bbc27"],["/tags/算法/index.html","54914f38ab64d73ca64972c69412d645"],["/tags/统一异常处理/index.html","e2056c4ace1039f22467ce98dcbf6ec6"],["/tags/路由/index.html","8d72b97e73734a5db5abf1514a203610"],["/tags/选项设计模式/index.html","2eacb29d2e1ac96cf6b7b4590eb779ba"],["/tags/重定向/index.html","45df2b47acfe508667123cb613e1d92d"]];
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
