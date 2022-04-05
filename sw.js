/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d62759f99f24736d88276ef1c26883fe"],["/about/index.html","ed2b43144bf017ea26fcb52aec3498f4"],["/archives/2019/01/index.html","fd74726642252b13de0c7ba917358701"],["/archives/2019/04/index.html","e2b8ccbde1fe276d9cc98687fdc05c86"],["/archives/2019/05/index.html","b792db1edf4f7d5201cd9bebc5f023b8"],["/archives/2019/06/index.html","3dacc96c3c492858acba915a6bd32408"],["/archives/2019/07/index.html","999613b8ac68c64805dc1a8570085d4e"],["/archives/2019/index.html","d67ef2829383874719f0594505c9ae79"],["/archives/2019/page/2/index.html","c56c364ae57762e1d4d94d55d4181151"],["/archives/2020/03/index.html","bccba38bc9b4bf489198945441b68394"],["/archives/2020/04/index.html","bf922240ff3ef328610c0fd01ed945fe"],["/archives/2020/07/index.html","3f4f196276b6ea0334886508beb7452d"],["/archives/2020/07/page/2/index.html","0bf400e116517750a7148115184db3bd"],["/archives/2020/08/index.html","5269fdcb231b25f45bbae78bf8320126"],["/archives/2020/index.html","b1cc847fa19db71ca85bfac7135bc8e3"],["/archives/2020/page/2/index.html","a6f10b1e32d40d0d61db1fa01e75b709"],["/archives/2020/page/3/index.html","cdc598580509f37bf00dab1633f589e1"],["/archives/2021/02/index.html","663dbdbda8a55fd9a3277969320e13b8"],["/archives/2021/06/index.html","b66ed704d8a4e9b83fcd43b4e3f8ad90"],["/archives/2021/07/index.html","25d4e043225e176a2b9dc3d0f8342af4"],["/archives/2021/08/index.html","49f0f9e61111f3d0fadeef06a2231fea"],["/archives/2021/09/index.html","9504846c84d3ddbc4b0d683f022e8576"],["/archives/2021/index.html","a16dbebfe553c96a6d229d822934c15b"],["/archives/2021/page/2/index.html","15746f6e66bb6281fb0c5236d7491828"],["/archives/2022/01/index.html","5d3a8cda7e37c2c519633edcb69acced"],["/archives/2022/index.html","376e12c6bfe5de96919a59cf742dd3d6"],["/archives/index.html","097e7df315f72b5b8769666e065b158b"],["/archives/page/2/index.html","097e7df315f72b5b8769666e065b158b"],["/archives/page/3/index.html","097e7df315f72b5b8769666e065b158b"],["/archives/page/4/index.html","097e7df315f72b5b8769666e065b158b"],["/archives/page/5/index.html","097e7df315f72b5b8769666e065b158b"],["/archives/page/6/index.html","d6968d0514f6cf15163b18bfaf078b5d"],["/artitalk/index.html","2c37e9bef5f4fd892e9c6e17906ea04a"],["/categories/408/NET/index.html","8c6d9b02e8a273d168e7488b20db178d"],["/categories/408/index.html","770b83ad38a5671f117a3640d6bc4d68"],["/categories/C-Language/index.html","4c6477de040922581c7ce0132cd6d7c8"],["/categories/DataStruction/index.html","5104d3d600d561e92304acc53fe0eea4"],["/categories/Electron/index.html","0c20c6ecc2cc66ca76b416e4e376746c"],["/categories/Git/index.html","3dd35171b2254d2aeb1d9b314f0a59de"],["/categories/Golang/Advanced/index.html","16cc8c35d8b3475baa2e85bdd98e1759"],["/categories/Golang/index.html","97475fc68ced56c9bb93350767b51709"],["/categories/HEXO/index.html","3b204508926ef9240f24cd47616e7e6e"],["/categories/Java/SSM/index.html","dbc60a90d9dceb4ab69d4b6af983d3e2"],["/categories/Java/index.html","40de63a62be7a70fa7b6ca4f74fa5aad"],["/categories/LeetCode/index.html","d48097718c5d2ce033e11289e48e15e3"],["/categories/Note/index.html","e2770f7f666ea54556a29e993e206d4a"],["/categories/Other/index.html","6298e193bfbbf95597a2308a2ae36b9e"],["/categories/Python/OPP/index.html","cd4a91b5b92ec10892c243e5b723d027"],["/categories/Python/index.html","524f918ee02ec030e3ae9a7dfddcd797"],["/categories/Python/page/2/index.html","f5ccd3c6bfa1dbcebd7edb1892ccfa36"],["/categories/Python/内置库/index.html","58da04dcc4b58f9724268a5611333280"],["/categories/Python/基础/index.html","31f224849b6ca42a1b6fe01173e8090a"],["/categories/Python/爬虫/index.html","59ce4ca7319d27ee7d080c4b35c72e44"],["/categories/Python/爬虫/基础/index.html","e6e176568ad242a1f659f64986b9ad8b"],["/categories/Python/进阶/IO/index.html","ee132c940b8fbb21431a9c16979a35ae"],["/categories/Python/进阶/index.html","f31f3a1c733e89227f4408db5cd7f7cf"],["/categories/Python/进阶/进程、线程/index.html","babfaacecfc1bc3c93d2681bb32d6e00"],["/categories/Python/进阶/错误与调试/index.html","f6e931cf4e03bdee19abb80e10611478"],["/categories/Python/高级特性/index.html","11c580c8b4450bfd30d68ee52546edeb"],["/categories/RSA/index.html","2c61d868ab0be23cf055b2120178c00d"],["/categories/Vue/index.html","0b73a109163e6a142829365ada1a89e1"],["/categories/index.html","5cd35bcabdf247e7f8112591e74bf2db"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","25078bf510d87195a1effb4e7394da93"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","93681199fec58d0bda1943a27d0a5ea5"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","331790c869e610d8a8fedf8df81a01cc"],["/js/search/azure.js","036c2275adec94b960d301af9b8d52fc"],["/js/search/baidu.js","bf2f9a59f0c1aaf148391ceddc4a9230"],["/js/search/google.js","a7490695abe94cc2c19c338b0560c823"],["/js/search/hexo.js","9472c4f7ccf550635fc4c15454320552"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","9f74b0dfdbf15fd40caf064d9b1088ce"],["/page/3/index.html","14e81716c4a44d594f5454e4c53c0616"],["/page/4/index.html","79a9f54a5cd5cd2c1338abd3ad203ed3"],["/page/5/index.html","a3a2cf520dee80bd7b9a7445874745eb"],["/page/6/index.html","f7d9dd7b02b58502fa3e140ee59badc1"],["/page/7/index.html","0b47a95ecc88b5d9bac48db986d68b6e"],["/page/8/index.html","25da2fc1a967d2dfdaa002e1f80d45ff"],["/posts/11720.html","f0cfcaca1ea6333375009cc5bd790bdd"],["/posts/12119.html","e61848d4a8fe39770bd1e6f0bf5bb7a1"],["/posts/13406.html","01ccab587c918c537138f2159476c5e2"],["/posts/13460.html","d94086cab556b738f52ab225d8b73ed4"],["/posts/15463.html","3dcc34cc9409feb4b4747a8a2aa00ebc"],["/posts/16107.html","866beddc41cc3355cca430309271152d"],["/posts/17036.html","e3bba01e9db638f2faf09abee1ece040"],["/posts/17751.html","4e8441278ff9cd2d61b2e62aba9eca54"],["/posts/18012.html","9373f9f88320130ef53643d2ba008503"],["/posts/18591.html","1e9a366685ef771a00977151243207b5"],["/posts/19008af7.html","cbb4607470e7f583ab4f56dce99ac591"],["/posts/19751.html","f8f10cea64bac33807330d50c0ee93f1"],["/posts/1aa7bff2.html","eb93f8165b3f1c46ba7e16ba7f3d175f"],["/posts/21668.html","b9363d299241f03c461da6ae5d4a44f8"],["/posts/22089.html","913924986406a9cc4079d5acad727d0b"],["/posts/24435.html","11e4ab1ea73837b3e51d76aacb07d03f"],["/posts/25425.html","cfb1db57d6c06cf553f9d3038265b1aa"],["/posts/25647.html","5cdd240dc3ae4b4dc7538f319cc4276e"],["/posts/25754.html","f301350b0c5f3d213f60bdf23003e2d0"],["/posts/28223.html","532964d2277dc983a069f3e32a0f4335"],["/posts/28995.html","47c4d13be0f58e273d8a1f879ea85590"],["/posts/29925.html","96f1681eaecf19b99ab09ad8fa812552"],["/posts/2e4490bf.html","920c5d0f292a1e4fe1fdf5ebbd972a37"],["/posts/31044.html","bbb08d97563feddb2838c6c7083713d2"],["/posts/32620.html","0aeb00bcdb43b9a2e291d6570b6e6264"],["/posts/33205.html","d9badb9502fec32169b6eb9df47f4553"],["/posts/33364.html","50271a9512ef71298a49c663f36c708c"],["/posts/34681.html","9349555832454c62820c91c7f85cfb4b"],["/posts/34736.html","eef09d29c77e420fc2aafb1243d2566a"],["/posts/35371.html","68e79116a9cdf98690c110060a73d9a9"],["/posts/37243.html","aac0555ba89e6bcce94d833c678fb96f"],["/posts/37390.html","003b59286cc268ad985c4f207cc22474"],["/posts/37710.html","532793e6f7a88279980cf6894e864f91"],["/posts/38014.html","0b98dcade78033bf7fddcfd034c2bc96"],["/posts/3844.html","cdaa4378d78273fee2694ce0e620fe5e"],["/posts/3887.html","0620ef6cdc8e59d247e8461109efd278"],["/posts/38965.html","b7fd99570116c0dd0686a7c94ace8656"],["/posts/39690.html","45f804d397fed97f157cda9385e1ebc6"],["/posts/39743.html","09c9234723d8e19792234a05ce176532"],["/posts/41079.html","5f651de44d22acf0e3feae35f6c59f6d"],["/posts/41307.html","dc85aba79ca4f5a15804d0e008f1ef67"],["/posts/41814.html","23bd0b4844565489a1b9a3581f09c488"],["/posts/41947.html","c4fb76885c127f3946cb4f159fd79692"],["/posts/42006.html","a1ebc6bf3eed58ee67127874a0349ebc"],["/posts/42106.html","9d762805ed25d0b766bef26e458474f2"],["/posts/42715.html","c8fc117c19e8a82242b8836c5c541a98"],["/posts/42822.html","10f0d8bd46bc012ae5a2c90199ddb099"],["/posts/43293.html","8a568432322ed4d92d66b186ac2f48d4"],["/posts/44644.html","3e2075ae27f62db1dbe16ee163e0a55e"],["/posts/44742.html","c99fdc75e37ba247639176345c5bfc96"],["/posts/45109.html","b27f2ec11ca2d0898ceaf58921ad5f35"],["/posts/45196.html","ed13f94c125d66ebb062dc7e05f4b393"],["/posts/46719.html","e252c5296079e67ce9d59702148e06f2"],["/posts/46855.html","edfd1705c92f3253c96563f54e0a5556"],["/posts/48872.html","d8afe028dfb42d035786bae9fd9c9e26"],["/posts/4950.html","fcaf0e163351df22ff0c7ce7508f97a0"],["/posts/50917.html","c2c23cd2ac9fcdedb7a76358547c6935"],["/posts/52628.html","789b1b4eceb42bf0e18791c9366aaf23"],["/posts/54509.html","633ae21a7e18314b29a6950fb52ffd4e"],["/posts/55493.html","79f82d5c95f06c4c71780239ea59bea0"],["/posts/55674.html","af6107b31ed2ec8b585018496605da75"],["/posts/59097.html","357c6b07d0bf063a9eefe908b984fc8c"],["/posts/60258.html","d99ec9d1cf0bcc37357ed5c74c7ddca0"],["/posts/63024.html","6f3f9ad17d3516fcd83585109929e475"],["/posts/6343.html","56f285a5613422d86abbcd226737b211"],["/posts/64290.html","da825e12fbe30c67e8ff07be457cf9f2"],["/posts/65033.html","c96790ffe048d7ab010637958533293b"],["/posts/655173cc.html","560c63e1505e7332c9f9e3cfc094ec3e"],["/posts/6930.html","63b8ffd68fdcbd992e8b7ee0072fccde"],["/posts/7031.html","b991059466c1e75ae479eb3611780581"],["/posts/81730e0e.html","cff235e573e0fc9a4114a3434b8ec7ac"],["/posts/9049.html","a3cdafeeef6263a5b465d0f00499e54b"],["/posts/9832.html","7241cec831362de350db8a20efee5552"],["/posts/aabd6c1b.html","90b35eba765a3d173bee06fad9e8e760"],["/posts/b56ec5ea.html","4487dee8da8a96e3a70005ab00509cf8"],["/posts/bf9901b3.html","ed1a3c3c5e777de3c79bf40a54036375"],["/posts/ca82ac25.html","e4d0757c5b6d4005c062f83676ca1998"],["/posts/cd747566.html","04cd77cf90acd7174031c4bb1ca5b2a3"],["/posts/dc573b7e.html","3d3cb6e3d73c2b560a314f1b5c6aea6f"],["/posts/f56d3ab8.html","144c85d9519f910d78c95d9be7120752"],["/sw-register.js","efa1c434de49394f9055175711a95da7"],["/tags/C-Language/index.html","e967db4dca3c34b42b9dd86b39514bc3"],["/tags/DataStruction/index.html","d7c728537cc1f1f064a4696e687f9c31"],["/tags/Electron/index.html","6b8fa6b5acb0ed79e686fe516c57c0ac"],["/tags/FTP/index.html","56a7fad575a3f7151da852bebe4ad734"],["/tags/Golang/index.html","c2a3fe2f41feb5c348f7f8b119746ec0"],["/tags/HEXO/index.html","ffe831a9153c654645b655c5a38bbc8b"],["/tags/Hash/index.html","454f8d729f541068c461e885384bce44"],["/tags/Java/index.html","4c7d78711b898d9546296ffd690893ec"],["/tags/LeetCode/index.html","0991fdf4ad2c34207960958fef3bd3c3"],["/tags/OSI-模型/index.html","4ea18f75fd0e2090b75f096f09029996"],["/tags/OneTiny/index.html","fa0f24574edb449b8e7723a10b26f1ed"],["/tags/Python/index.html","9cff175f2a1f0e47c2097e34f3c4537b"],["/tags/Python/page/2/index.html","d05bca6849071b54923d2e49a54ec8d0"],["/tags/RSA/index.html","0d86fc11320a35d0f77a90842f187a60"],["/tags/SSM/index.html","46cd049a6cb2799a6e596bf021ec5cc2"],["/tags/SSM配置/index.html","1aac46759bff52388bd1384b0eda3389"],["/tags/SaveFunc/index.html","1fa283cc86777eeaa5afe5f8b7f2ab3f"],["/tags/Vue/index.html","32e317f938b168d137f93e07fcc5358b"],["/tags/YAML/index.html","ce2df4668cf06b167d6ab952251590ac"],["/tags/commit/index.html","a0b7e7058175e0b46fb4d280abcbc798"],["/tags/gin/index.html","9059ca90c87992581737b5329ec51202"],["/tags/git/index.html","74ce658f6fe0865e642592dde61d8061"],["/tags/index.html","26ad7f6d3e594a9bf20724cc3b1948a9"],["/tags/json/index.html","a2b07ab45d35400962bd3b94dcf5c610"],["/tags/note/index.html","ebc7769fd44e558acebd95e431afcb26"],["/tags/七层模型/index.html","35b21de941d4504b95bee3eb89744c75"],["/tags/上传下载/index.html","1feff3efb77afeeb4b09f4240b223a5d"],["/tags/事务/index.html","3c59d320491dce2ac2477bd79b855252"],["/tags/事务管理/index.html","e4b008d29d8e76fdb78fe58e463b4025"],["/tags/值实现/index.html","20123a2def381e016721c0a79d7b95b8"],["/tags/函数式编程/index.html","1c6d513729f7dcc9453c2806a60e6787"],["/tags/反射/index.html","40944ea51175f2e909bdd5102635bf2a"],["/tags/命令/index.html","342621599c36b12555b76d506d060504"],["/tags/安全函数/index.html","dd76cbd302ddb2699ac355aad6017a60"],["/tags/局域网/index.html","171c7c3769875387747602653d49dfbd"],["/tags/并行与并发/index.html","de66b7a195b2aa2f6d606cedb300846e"],["/tags/底层原理/index.html","0fa94345de9da8851be47bbe7edf1f64"],["/tags/引用类型/index.html","d9ed3e96a3693e3498097297c8e10e4c"],["/tags/性能比较/index.html","a30acc75d665a19d961bda5f485bcb16"],["/tags/抽象类/index.html","11597cbe9fab6a4cb5cffb2a97ef3b2f"],["/tags/拦截器/index.html","89f0a9489db83d126c4ceb0ff2c941b4"],["/tags/指针实现/index.html","e40e58d06d76debd9a687ba99b80f466"],["/tags/数据绑定/index.html","2721104bbfb69a81dd8e72e49698110c"],["/tags/数据结构/index.html","c20828b0cca49e8f43799746af905d07"],["/tags/正则表达式/index.html","b8771e3cd2a1eae047e54d6dbfd379cf"],["/tags/爬虫/index.html","60f326ca2c52088392007eb5ac1d9829"],["/tags/物理层/index.html","ca548fe1d0d479bf3e53e37d156e26bc"],["/tags/独立开发/index.html","85b9b804eaac42faf9e9d0e3a5fdb82a"],["/tags/算法/index.html","6a4c83dfebdd04c4b4092d3dd4bd9233"],["/tags/统一异常处理/index.html","3122e9a6155a9f1e6401e87b1aa81464"],["/tags/计算机网络/index.html","e556ab251568074fffd23ac4980b3b0a"],["/tags/面向对象/index.html","6073d2c9a6d700f54f37ba7bbfbb2ddb"]];
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
