/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","832c63819cc32ecd78e18fa8f9296022"],["/about/index.html","d4617faa95f3c6edbb5dc553f4021159"],["/archives/2019/01/index.html","0deeffdd093898c939eb883b1fd59084"],["/archives/2019/04/index.html","225bfe0b76f6a8ab523570d5ccc77ab3"],["/archives/2019/05/index.html","9176681ad2b46b85093b7bcfeb6e8750"],["/archives/2019/06/index.html","cf4dc987c2567f53ad3578817bd29508"],["/archives/2019/07/index.html","9f99efaceeb6385d0e496fa93538095f"],["/archives/2019/index.html","763cde820ed240dbd5a89cb1c299d800"],["/archives/2019/page/2/index.html","19e33da42274e3686de49daad68d0808"],["/archives/2020/03/index.html","a0489e50607220749cd2d955a94842f4"],["/archives/2020/04/index.html","a9dc84572e34fa1df152f70d2e6d6a75"],["/archives/2020/07/index.html","b65b5bd1d0d59acb65fd5b9684fbbf5f"],["/archives/2020/07/page/2/index.html","49fa01471d09c6b569272520542ebd36"],["/archives/2020/08/index.html","37d7998af109b5475d3deab8b5009419"],["/archives/2020/index.html","f5a450951d20621e22b476ed2ee5897a"],["/archives/2020/page/2/index.html","398f72d686942abeee9a4c6e1d21ea12"],["/archives/2020/page/3/index.html","94dcb8b6c2895242e05f3b77d6e72112"],["/archives/2021/02/index.html","f52f7ec47cb62b29fe1214829c1a07e8"],["/archives/2021/06/index.html","390abaf053f66f75649ad471c16c1b0f"],["/archives/2021/07/index.html","d940274c58cd1bcce8471ba0e32d5f60"],["/archives/2021/08/index.html","ffb44f75feba263e167e5c091d174b62"],["/archives/2021/09/index.html","34ed664b74a0b3ffe7d803fc6f8081f7"],["/archives/2021/index.html","a73fdeb7be14f2842561683be72c9364"],["/archives/2021/page/2/index.html","49a824fea9db6b87bf7f0cfafaeac26d"],["/archives/2022/01/index.html","9b058c568d0ed119361c34abe984c4b5"],["/archives/2022/index.html","af99fad0c2bbd192799407b7225b71d6"],["/archives/index.html","0127072f172f9cece031001ebea08147"],["/archives/page/2/index.html","0127072f172f9cece031001ebea08147"],["/archives/page/3/index.html","0127072f172f9cece031001ebea08147"],["/archives/page/4/index.html","0127072f172f9cece031001ebea08147"],["/archives/page/5/index.html","0127072f172f9cece031001ebea08147"],["/archives/page/6/index.html","0127072f172f9cece031001ebea08147"],["/artitalk/index.html","d0754a2b62f6f9d4a721d2f481211978"],["/categories/408/NET/index.html","4267899d1d40fa6977623f920217ea90"],["/categories/408/index.html","85ced30261629eee5a3eb7db718c85e9"],["/categories/C-Language/index.html","2128a780d91d80a77e0839da969e0925"],["/categories/DataStruction/index.html","ac24e26c8f3128403a968a30561ad813"],["/categories/Electron/index.html","13e2a5167c93b52cc09f1c08f29dccdf"],["/categories/Git/index.html","3631d2b8ec6f515c95f77c5490cab7d2"],["/categories/Golang/Adavanced/index.html","2bb4c490d1dcaf567f4040a7863c9523"],["/categories/Golang/index.html","88720e3b4fa3237c075ae0c012405773"],["/categories/HEXO/index.html","6092b3c560630930e2cd3d9d108d88ed"],["/categories/Java/SSM/index.html","2a66ab5c99df570e990d75a7c085020f"],["/categories/Java/index.html","414c6085a785f34b738acb8140fc7d5a"],["/categories/LeetCode/index.html","76c4487047f7ab56f203532632d6f064"],["/categories/Note/index.html","d6221a954b14e964b2a3a1ae0a451db9"],["/categories/Other/index.html","b8e187d8027bc31a9853cbad2849432d"],["/categories/Python/OPP/index.html","1ea312f7ea059d2e04bff08f6a64ae47"],["/categories/Python/index.html","10317ba5a2566655b4cd881a2af21b5f"],["/categories/Python/page/2/index.html","fbe7cef80c46791e78cf435cffbf2a84"],["/categories/Python/内置库/index.html","ac7a1e5cfbe609a3482511eeaa2d0a5d"],["/categories/Python/基础/index.html","8aab881dc04b68213aeee63129435edb"],["/categories/Python/爬虫/index.html","7af4d9e2b29f282d9e14fb58576de89f"],["/categories/Python/爬虫/基础/index.html","f99feb1c064932a896a96c229731bab6"],["/categories/Python/进阶/IO/index.html","31bee07175da9db59015d70c4d9f0f0a"],["/categories/Python/进阶/index.html","a7695e27bc8887841947439deb99cdd0"],["/categories/Python/进阶/进程、线程/index.html","41cfbf2d1e0734c6647c5aa96d047c4c"],["/categories/Python/进阶/错误与调试/index.html","7722c356448fba0246eaaaa9092644c7"],["/categories/Python/高级特性/index.html","d04e43d674cb273b7767250e41e0b84f"],["/categories/RSA/index.html","36cdf5bb7bc2ace088754e6d50497804"],["/categories/Vue/index.html","64bbbeb2350cf67cc39b64084f71cf91"],["/categories/index.html","c7e7e568d3e6f9a6cda1ec991aa8fdc4"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","4642bd6129dd4e15a87448e784dd1095"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","79b0e1422b0d12bbcf3d938d42ca8dd5"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","10651fe09dd6abf75b50632f80dbfdb8"],["/page/3/index.html","984d113c5dd2abe57ccc31c345f3b982"],["/page/4/index.html","e9077a0241fa28af86c99f410880d12c"],["/page/5/index.html","a6b9d7aa6aace6ed82a01eb436a95640"],["/page/6/index.html","5c177c5099228221611a665d68792fad"],["/page/7/index.html","ffbad5637eb0e022845f2d534e02b5d2"],["/page/8/index.html","1cd341552cac36da7e0c614c0aa9fe70"],["/posts/11720.html","47ae8a0b4e3ea4c6d2775bdb318c5ce2"],["/posts/12119.html","fb8ecc6bf1e4447427fc9ab833df6ee8"],["/posts/13406.html","9a3ed8cbd615a945b98ab684fbda61ce"],["/posts/13460.html","782afacebd5dd5091266c902c003a07c"],["/posts/15463.html","09dbca8557cfbb6789e15e57c8abaf30"],["/posts/16107.html","060cbb2dbb4aaa8cc7a68dd41b5e1319"],["/posts/17036.html","b536bac6526c1270fbde9fc415e4c45a"],["/posts/17751.html","7f35ffc972324e5d3f1c6a2f9fb69321"],["/posts/18012.html","2d276bf1645ff90ffb55e1423b4dd6a2"],["/posts/18591.html","f087279fbff521879165c781ae7e570e"],["/posts/19008af7.html","b238cc73bd80129f455e673480a148cb"],["/posts/19751.html","c0163a44d4566f980319c1372b21fd99"],["/posts/1aa7bff2.html","34f9c1d4686f090d51636b4dae369af8"],["/posts/21668.html","0c7c3970fa8074ccbc241c673eef2b03"],["/posts/22089.html","c86690420fcca59e08800dab117474ba"],["/posts/24435.html","d8c0e7a03a5032c7a8a45f0c2de7cd71"],["/posts/25425.html","6a11659e0aa26c62874bde64783608d1"],["/posts/25647.html","7fd1b6dcbe517b3a10ff180a2a10b78b"],["/posts/25754.html","f4ca975301f0565e76eb36716e89f73b"],["/posts/28223.html","fe9560857b22fc3efc017a09f87d0326"],["/posts/28995.html","b416776f7f25665e77cdd30d42de5f33"],["/posts/29925.html","db9e540a29e05b75644138b02e41d130"],["/posts/2e4490bf.html","ec271747ab0c7652c44fc9b3f43a0e53"],["/posts/31044.html","40c3c81261eae2ff2434b8976ce6de5d"],["/posts/32620.html","98a5f9721a964d3a2e41e7d25b91ae51"],["/posts/33205.html","d85d61a72f07b6f15438943a1486df38"],["/posts/33364.html","c27354e14462925f879a496eda412811"],["/posts/34681.html","1a794cf476787e92ef651ea3a9c35f28"],["/posts/34736.html","d07f67e6abb203f4fce8b4b71cf1825f"],["/posts/35371.html","665c274b4842704b019083b1c78e8c90"],["/posts/37243.html","7824f29b665eff4ca9e2ecbe1213a747"],["/posts/37390.html","d39a2bd02dfc5544987183bb7160f2ea"],["/posts/37710.html","247de5ee449ad5b730333d83b2977712"],["/posts/38014.html","ff176da09f02c9d337ff6c519489ecb4"],["/posts/3844.html","4e101337ab58b81dc4ab540f69cfd879"],["/posts/3887.html","cc1885176e7cff3816e5663392deeb02"],["/posts/38965.html","4770c77612733b7b63b0d139b675c6e1"],["/posts/39690.html","ea34dcf8b1c9512e1a72db8a63220b7a"],["/posts/39743.html","4dea1f488f5bde3f27950996e42b6f43"],["/posts/41079.html","cdd3e97488dc2a6ee21290b78827177f"],["/posts/41307.html","ac9ac85df468bdb33fa4dd2da4a59023"],["/posts/41814.html","c50f97172f90194f3218ecc8334cdaed"],["/posts/41947.html","5cd2d8f14a673b03b6d86d5c2f59a131"],["/posts/42006.html","87bf0e1cf457cb340d3b904bff7ba316"],["/posts/42106.html","758adedff8b0087702dc46e489e4070f"],["/posts/42715.html","5dc673dfe660425ac1fe170c308cc5fd"],["/posts/42822.html","ec121007ae0bf8b7d1b9ebe78f62bd5d"],["/posts/43293.html","0bfc55c4474f9e798d234358dbbb0b1e"],["/posts/44644.html","7119605043b09ebb0b51532bf5c65a81"],["/posts/44742.html","3bafaca37c3d9a6e0f56faaf023e7fb9"],["/posts/45109.html","f5f331db11e6f8bfb16266cbe14d51fe"],["/posts/45196.html","5b1b3b62b7e092d9fe5a5345637ea6b1"],["/posts/46719.html","226d85d5b192242389fc21025d6ec1f5"],["/posts/46855.html","cd1abd935c5a172232d700b7bbd6b87a"],["/posts/48872.html","a5560ff5c2fa96aeca16bc3788e750d2"],["/posts/4950.html","d31ad6c99364ee4206719330c05feebd"],["/posts/50917.html","6a62354800f2252ca4f364176a932920"],["/posts/52628.html","12d6d4752a78e79da4a2619faa5cc103"],["/posts/54509.html","c2fc76917ee94716675bdc7602e26108"],["/posts/55493.html","dddcf2062e79dbe743c654085bd0a7a3"],["/posts/55674.html","82af90212e80096a91c2013f873e924b"],["/posts/59097.html","f1f2522da7fdf47581f353ddb2f3109a"],["/posts/60258.html","ea23634e12f83722b740b129b1ca5a52"],["/posts/63024.html","da35c4a00c541904974fb8911e0dbad3"],["/posts/6343.html","e8b33818888f14970b532aa867225a6d"],["/posts/64290.html","535f5ee44351e025a4bcfdd6ebd9e80f"],["/posts/65033.html","35c6b8ca4524c42ad335e7b5342a89f0"],["/posts/655173cc.html","d1312e19a6e72f7c7c66c2593c9b52be"],["/posts/6930.html","6a8a87f1b5bbadbe2f3645250d4c112c"],["/posts/7031.html","f7b18cf3c79354ae8fd6edfd5a6e8e09"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/9049.html","588b48d58f81bae2fd913fe9df975392"],["/posts/9832.html","adc598f544b53694b97140c535455afd"],["/posts/aabd6c1b.html","fd6cd31fc11e6c01e66cb2e430be934d"],["/posts/b56ec5ea.html","48507c018502935056c3f5e30ce27438"],["/posts/bf9901b3.html","4c0aaf82bf5faac9193dc30f4410f23e"],["/posts/ca82ac25.html","5240b80e27b657bd34fb6dcdcf4c9316"],["/posts/cd747566.html","5ee2676410d3df7cf44f03c828b9e94e"],["/posts/dc573b7e.html","2f5d1a24d8abeb49986b37c9f1b09a84"],["/posts/f56d3ab8.html","ce02a19892266ac34920cc1bd4bdc596"],["/sw-register.js","09c4e66012750d61710833338f9f3b07"],["/tags/C-Language/index.html","2ae4e1fb66adcd10a6e53c9ebfcc4a02"],["/tags/DataStruction/index.html","46371c6239bd0d6de0cba2c6cf56c7e2"],["/tags/Electron/index.html","8dfbac7981a6f893a9d72e7ab4b6362d"],["/tags/FTP/index.html","76a71d16f97a35843a98329a6357fb03"],["/tags/Golang/index.html","cff3297b2afadab91fba9d2cf62dfbd4"],["/tags/HEXO/index.html","1c82e6398b919095983245a55a6fa5ef"],["/tags/Hash/index.html","0d0dbae88966101d552585404d463951"],["/tags/Java/index.html","98b6efa4532a5704bf9c60ad8ba6a07d"],["/tags/LeetCode/index.html","feaf7dabae7b032c96ff835a5ceedd0e"],["/tags/OSI-模型/index.html","8b24c2d2ec4571378f5ac0ef204ca037"],["/tags/OneTiny/index.html","2cef856a6a27baed282d43054e4af451"],["/tags/Python/index.html","da9b53b625023d813da8b418e2787b46"],["/tags/Python/page/2/index.html","d3e63a957d372a2c1266440e59dbebd5"],["/tags/RSA/index.html","4ece5ea1ff3cc705689e24860a68f332"],["/tags/SSM/index.html","45327584521936efd36d58c2d6f4c341"],["/tags/SSM配置/index.html","5815fe8edca29c6781b93f6b9730cc10"],["/tags/SaveFunc/index.html","8099ee42a5ddde98d57165d51a036c94"],["/tags/Vue/index.html","746d0e8f97402ad254dfaa7e8748163b"],["/tags/YAML/index.html","0046e251d9328b432fc56f1f2a25b582"],["/tags/commit/index.html","7409c7f489a9fa759823c9ef51ac7a2e"],["/tags/gin/index.html","b463f02911ae37323ac4ab8f74a9658e"],["/tags/git/index.html","0323a6d5d29fb8758c4377df67b5b119"],["/tags/index.html","2d3bfde2efa887c887ffd586ae3f973e"],["/tags/json/index.html","932e1a789d57d0d57f07f2b9f103d3be"],["/tags/note/index.html","8f9c11dcb231ee1d2af2012f2f2a2de5"],["/tags/七层模型/index.html","28846951e4ef635175dcf0261bd3a913"],["/tags/上传下载/index.html","dd059e4c5116414269c4c7d74270d473"],["/tags/事务/index.html","beb9a98ea04c78ee288a80cf87c8fabc"],["/tags/事务管理/index.html","a29787238e707c73ff723e369b8548ff"],["/tags/值实现/index.html","3232c444bce156467ded6e3dba25d2ce"],["/tags/函数式编程/index.html","d41c6bbe2e539b7afec7049c5a96f157"],["/tags/反射/index.html","71a5417db6cf500bb65150ffd3fe35c8"],["/tags/命令/index.html","43c7f6af624b537e446606a99cd4c78e"],["/tags/安全函数/index.html","21f3becedf18c4f433253a56113b45af"],["/tags/局域网/index.html","a14643c14e20173f0a2c25a70589ce99"],["/tags/并行与并发/index.html","4c9d8f5adf6d088c633ca82a655ae6d2"],["/tags/底层原理/index.html","90c56d012cfd145983376b98e3430b21"],["/tags/引用类型/index.html","dcbde4b40718add4d3baa00df156f50b"],["/tags/性能比较/index.html","855fba4dc31f73bbca303ae2949d3e40"],["/tags/抽象类/index.html","4eb37c23befbc779bd82aceaafe4d297"],["/tags/拦截器/index.html","0e7cc58b0d473b838a0e0f1005e1f245"],["/tags/指针实现/index.html","c1a848f5ebc8bc9982a626ef352945ee"],["/tags/数据绑定/index.html","0dd0528fc4e29ce9a4a75dd1987b3063"],["/tags/数据结构/index.html","891e4e88a7669363687a0737b12951f7"],["/tags/正则表达式/index.html","b6bca49d46113c0f7c05eb910c76df5a"],["/tags/爬虫/index.html","a36e664b7c643060fb6a09a805a40401"],["/tags/物理层/index.html","ee955664023feb3e3ee15d645d788e66"],["/tags/独立开发/index.html","3499bd2639dc6b86ae7d4c629d6bece7"],["/tags/算法/index.html","8ea073362f75e4384a85429c74953443"],["/tags/统一异常处理/index.html","15d575ab31655f9fc98459844544631c"],["/tags/计算机网络/index.html","220d65b2ff928c46b1b86c24120ff852"],["/tags/面向对象/index.html","a2f27af8521ef48deacf282976494621"]];
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
