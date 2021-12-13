/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fbdfcc4925b7d42de6f7b566edb7aec"],["/about/index.html","e1900a06113f41693dfdfba30a6c5318"],["/archives/2019/01/index.html","543c8ddbe777e9362d10c7125fb4fce6"],["/archives/2019/04/index.html","2e34677d8b78fada0c967eace0c21c17"],["/archives/2019/05/index.html","5dc2efdc64daf11cf0fff6d7831be3ad"],["/archives/2019/06/index.html","725738aee7e37f0bc162f48f2a49da81"],["/archives/2019/07/index.html","ee61746a49a26f210fa4ef66d431de84"],["/archives/2019/index.html","73c109b89acb497f8124134e3da76249"],["/archives/2019/page/2/index.html","43cd6286196a8772b92697786fc8452b"],["/archives/2020/03/index.html","0e8e0faaaa97a0fd35820fa6001283a8"],["/archives/2020/04/index.html","29dcc31b195122ca545de906350b1a79"],["/archives/2020/07/index.html","f32255561affd31a546b044d23c5cbfb"],["/archives/2020/07/page/2/index.html","0d1f77fb839bb3fe23a7bb3d12ef1c02"],["/archives/2020/08/index.html","3a84214443500450b14094ba4c9755db"],["/archives/2020/index.html","567bb33da4490eca9ca59fd243513c7a"],["/archives/2020/page/2/index.html","5f62c7b262aae56e29ff459c837bfa59"],["/archives/2020/page/3/index.html","8884678ed4cb5d21416f9d4b6aa7d4e2"],["/archives/2021/02/index.html","2ed294c6c603eb75f47a32d1311387ce"],["/archives/2021/06/index.html","c81abbfa2b21f71ea2258b60ea9d0d6d"],["/archives/2021/07/index.html","42414e1db5cdc82650ff2dcf3e2a522b"],["/archives/2021/07/page/2/index.html","048be76f9d55b2f96a4f2192ce19c0c3"],["/archives/2021/07/page/3/index.html","b54561e262bf72332d549de503a8592b"],["/archives/2021/08/index.html","708a1d7da4c3073a427226a8d919c0b9"],["/archives/2021/09/index.html","ab735d1dca56ebfc32a87f97bff8d00c"],["/archives/2021/index.html","26ff97c5bc32c4cb6920c2a24b0e32a7"],["/archives/2021/page/2/index.html","e387913ab85840eb2017b7de9d9db04b"],["/archives/2021/page/3/index.html","1d6244ab10c59f170c8aa8e09159eaa6"],["/archives/2021/page/4/index.html","38af7a510fd942931dbfba4de1f22e3d"],["/archives/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/2/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/3/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/4/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/5/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/6/index.html","966caf8123e4d4949e8adc5bc5e886f4"],["/archives/page/7/index.html","a649d4d3699712b3d6ffbd1464d7ce1a"],["/archives/page/8/index.html","a649d4d3699712b3d6ffbd1464d7ce1a"],["/artitalk/index.html","a576ba732dc684e94bb614976577679c"],["/categories/408/NET/index.html","32394124754f83ba62136482957a112e"],["/categories/408/index.html","be6dca8593c57d1055f4ed95eb34bf97"],["/categories/C-Language/index.html","f8b37983800408e0a1f515c2f27f6c72"],["/categories/DataStruction/index.html","279ef0aec3820a7f97004361554575cc"],["/categories/Electron/index.html","e9ac59db3a0cdb5f01c683beee61ed1f"],["/categories/Git/index.html","439149b79914c444be0c3a87d0f24ea9"],["/categories/Golang/Adavanced/index.html","245ee90fec8049268a476ddf9548ac66"],["/categories/Golang/Basic/index.html","622978bb3692a26d9b5c54629c33e1c0"],["/categories/Golang/Basic/page/2/index.html","9d1c70b4e9085ad42f88994fbcd861b6"],["/categories/Golang/Framework/index.html","eff9566dc3e82b2ba7b503ab3a6633b0"],["/categories/Golang/index.html","68d5f34b83dd620321dd29b205c58385"],["/categories/Golang/nil/index.html","3ca902b0cbe881076b754951414ae0dd"],["/categories/Golang/page/2/index.html","df106781287a07807eb617a9dc2efd69"],["/categories/Golang/page/3/index.html","eca3dc221ea589d3ae779236b537f056"],["/categories/HEXO/index.html","dde7c1e320f4d69dd385101990efde67"],["/categories/Java/SSM/index.html","463af89676eb5e0de9a7d684e9157605"],["/categories/Java/index.html","c948734b4c798a6ac457126583038d33"],["/categories/LeetCode/index.html","e690dd95dd67a55b46a74fa75f0ab041"],["/categories/Note/index.html","36f0205d98f3871cdab3d2a0090ec5fa"],["/categories/Other/index.html","ef6a4391695f193c70d89fe29e053fef"],["/categories/Python/OPP/index.html","d225690c7b25efad6e771e93d8bc49aa"],["/categories/Python/index.html","07a7fc2efffc2ef3396e4b61acf6adc5"],["/categories/Python/page/2/index.html","7ae99da516174563a6ebcde60688c41b"],["/categories/Python/内置库/index.html","6c28b659ea8c279d340b049e505e883d"],["/categories/Python/基础/index.html","d4f986a124aac69f8c4bbe4ba5f7a313"],["/categories/Python/爬虫/index.html","17d1be002900f9482db60b1f6f266dbd"],["/categories/Python/爬虫/基础/index.html","195a6f8ea2df97aa1d82d5c4d74a137b"],["/categories/Python/进阶/IO/index.html","4ba9ba88a403f17fa06c45e04d1d9a44"],["/categories/Python/进阶/index.html","a587fd74ae40d9522a949ed67505c4ce"],["/categories/Python/进阶/进程、线程/index.html","3f7fe3376d4c325dd42d07a774c5907d"],["/categories/Python/进阶/错误与调试/index.html","731ba87da5f5a6c0e7500fd4842b047c"],["/categories/Python/高级特性/index.html","e91a4d1c4f898574b4ebddecdd837020"],["/categories/RSA/index.html","70087c38768bd7309da0cee3be52efea"],["/categories/Vue/index.html","ebdc83d523038570490a81c22c98df74"],["/categories/index.html","d616dfbaff6af766f300e3141c801565"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","801431a726e85eaa37231468d3b743e5"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","a5a6c45db53dcaaba6f1448f4f85035b"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","ddb955bb6bbf610eaab05dc782b72535"],["/page/11/index.html","cbc4dc93764057485118f74a6f056300"],["/page/2/index.html","8955a28a2b6a397b681d43020eed0418"],["/page/3/index.html","380c6756b84fd863f6c9d207bc00a761"],["/page/4/index.html","95600ffdf7b328531fddde2e3eea4967"],["/page/5/index.html","76c1a161645e46360c454d51bf1bee9d"],["/page/6/index.html","573665a5adf053f587a276581796aa2a"],["/page/7/index.html","8eefd81cb624abfab939896e7cc28373"],["/page/8/index.html","09c8ca02d3c6c997b924d65217fce284"],["/page/9/index.html","07b2d5b3b93ac2264d3ed8df23a4e493"],["/posts/11720.html","25b27d3a750e1f248e9c4866bcfa2d67"],["/posts/12119.html","8a0f89a12cf315355b1147b0e77beb61"],["/posts/13406.html","e2eec152c3956c2b09d1ba0f0df083f4"],["/posts/13460.html","e8e70f7f3180b05e9f93147d57ecdcf7"],["/posts/15463.html","c2e816b3b964f56883a82e9f63b2e097"],["/posts/16107.html","70306aa65642abeb83efd2389f8b98c6"],["/posts/17036.html","9d74a5187b02f32cbc8f9f0f0c6366cc"],["/posts/17751.html","a30b7b7ee2ffe4bc6bdd01fc12f057aa"],["/posts/18012.html","d5914dac8acb018ca811d1f6ea030143"],["/posts/18591.html","38ee08a2b4056c57b4ca90f14fa3062a"],["/posts/1937010b.html","f46487c93fa814f398a88ff3d527be72"],["/posts/19751.html","f37c9b4cefc421cd2c16cf9f24dc5b18"],["/posts/19a13983.html","5e1150246a62bca082d7fde08df40302"],["/posts/1aa7bff2.html","ba319bcfa47d990c0d31c928b132d4cd"],["/posts/21668.html","1b25cf794b3ae83400b43a50788ebaab"],["/posts/22089.html","0b9ed0fff6348e0df019a25dcd07cfc5"],["/posts/237b56c2.html","dd65446ad292c7572f4d8e9031969c39"],["/posts/24435.html","53352b6487dde9859a968bfe46d7ff9f"],["/posts/25425.html","bd721ea8e7578b5d3b1a7115ab4207d7"],["/posts/25647.html","bdfaa60d9613efe2d2a8d19ff9f69aad"],["/posts/25754.html","8f5e37ffde7c0f01448c03c745d9b21b"],["/posts/28223.html","25583ff2abeab482038b7ac56c3750ef"],["/posts/28995.html","a4831bf9f258196c0e9af4069503e1cb"],["/posts/29925.html","3057f91e89a118a871da30a62134fad0"],["/posts/2c39f343.html","c66e7f8db927e5b6f5e2a19f28a58d8a"],["/posts/2c48000c.html","ce9e6e36c259a6efbdbad95f963548b2"],["/posts/2e4490bf.html","a45f4553bc1790047515c252c99cf529"],["/posts/31044.html","0162346febcfe7a6c429f68773668f52"],["/posts/32620.html","93edef51834f836feda520e3a2fd2b6a"],["/posts/33205.html","128c41f3fd16a5abb47070c39b2b9707"],["/posts/33364.html","74315b92263538e5b983df53759b28eb"],["/posts/34681.html","4c889383c94fbd608ac988b89dc7dfef"],["/posts/34736.html","61d12eb6125874c635f607cf514e11ad"],["/posts/35371.html","bcfc8c7bb51429496e93c0ecc6d95755"],["/posts/37243.html","b8ab6e1d91b5d593a585e9a4d7a6685e"],["/posts/37390.html","983e890d589b51a3ba07d915d6710846"],["/posts/37710.html","727a5a8bf09030b812f53f5306cbdad3"],["/posts/38014.html","4870f37f46fb62950bbc10715e7ea9f8"],["/posts/3844.html","0b8422ce9ad8bfc9256440e499659682"],["/posts/3887.html","f6ac5960ddccb3f18fb8af20beee8f55"],["/posts/38965.html","785b754ed7b2803cceaaadad3d15d5ab"],["/posts/39690.html","5ba53de3aecf0c1593f30b084311f49e"],["/posts/39743.html","5b57e0b9be71a077e8942c130422c372"],["/posts/41079.html","d6655320e71bd700fda6b93daba8fc64"],["/posts/41307.html","9d285060ad7468c78ce10db1b1e78c33"],["/posts/41814.html","87737a16cfb7f3d22ff1e586c4e3c25c"],["/posts/41947.html","d2c8958c63b6d7a41ef3c5fc0c4b6f43"],["/posts/42006.html","2056525cd7f8a74b6ed523ba6ea540d8"],["/posts/42106.html","c4d3981b1a54e6037b82701fcfcd9615"],["/posts/42715.html","79d59279cd2eb153758e144bfa66ea72"],["/posts/42822.html","db09262a73440b27c9cfeb070aba8ec0"],["/posts/43293.html","c42fdd55c864a1d4c67ab562b68f985f"],["/posts/44644.html","0d80d3716e23e0bb746482cdc2c3f36e"],["/posts/44742.html","0e8ba45bfa0b8c13f51bcfcfff261c27"],["/posts/45109.html","8c1ac7ab03b01c3ce4e612aadee2e166"],["/posts/45196.html","2d55fc0b9e0402434b79c2e795304827"],["/posts/451cd62.html","53561f88215898e68532c740e078677e"],["/posts/46719.html","dc51136fc7ee0b82da3d259109f4f44d"],["/posts/46855.html","7695b2cbe5ad69d2874ad9fc0d6cfbc8"],["/posts/48872.html","825d8055b909891096d52080441e4f1f"],["/posts/4950.html","689ff08f8742fd46560750de4189907a"],["/posts/50917.html","b62ffe7ca7152f5777e7cc9b02840394"],["/posts/52628.html","1a0acfc6d667f942219b0d7430c772bf"],["/posts/54509.html","5ab4b8a4c7eb90da623fbf95aee386ca"],["/posts/55493.html","994e6fa5176c165a40145022700d46e8"],["/posts/55674.html","f3a913f547c242d70289fd42eb4f4d8f"],["/posts/59097.html","6cb5fe05ab6bf00c498186273f72d410"],["/posts/5bdd8b42.html","34f4660c61fe4cb6338c76cfaca5d076"],["/posts/5d7d558a.html","8f03929830d5564fc6164d461c74fd45"],["/posts/60258.html","2403e0fd0ec071108512fcafe085b898"],["/posts/6239436b.html","0d628b9b656741de52333954449a6df3"],["/posts/63024.html","262643a518e50631bb940d93922d6456"],["/posts/6343.html","5a1beb6951a5e96e3d880b8dfbb748d8"],["/posts/64290.html","f4049033b06a418d55955672e8233ae3"],["/posts/64ec0a72.html","6af10bfbebe753158b227a9b8abfb04b"],["/posts/65033.html","ed3d2c981c1ea7242f979470db38e9ba"],["/posts/65501a4c.html","817029d9016d6ae202ad513e51c3bad2"],["/posts/655173cc.html","11c4541cde6ab6cfce69d3d6c27978c0"],["/posts/6642a673.html","bf41642a4611dfbda26320951e0a1fcd"],["/posts/6930.html","e21f5fc1b293b9223fece45e5522a404"],["/posts/7031.html","81d860b7eb01c8d3c8e8c4406638d157"],["/posts/7b9344b7.html","1f66239c3f5f7116e88dc3a3fcbb90bb"],["/posts/7ebc0a4.html","79ab4788b0e7dcb99c81e1c6dd554ec5"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/88c693c7.html","fb6c72bceb739cf88fb87ebdc16d857b"],["/posts/8961d743.html","e4b25ccb6dfb0821c4a8806deda7b948"],["/posts/9049.html","aa07ef5a388e291a158ece6c9554205a"],["/posts/913ad9ee.html","8d7f131138349e67c7573f8d17cd689a"],["/posts/9832.html","706eb66776552acd73b206bef600736a"],["/posts/a55bf0d2.html","1b0477d1ea8dc90dde4d72049216715b"],["/posts/a6eafc24.html","8b8d27c386aba3d62a090e99b5cb52f3"],["/posts/aabd6c1b.html","6ad228f9838c42d0196548a2ed52cc1c"],["/posts/b2fbd54c.html","462acfecebe364403615a1930b48e3ad"],["/posts/b56ec5ea.html","27e69593cc0ebc1de4c26ddd58757278"],["/posts/bf9901b3.html","76f7a4ba4af4b7c8c9581c8dc8851fcc"],["/posts/c6fec8a1.html","73ea4db295ed1327bb02aa61645a299b"],["/posts/c8c5007f.html","44f0d768a2f47092f94cf17c739b4cbf"],["/posts/c8f1d592.html","82efaa5c8ba5c9557627a8ee01ad3762"],["/posts/ca82ac25.html","c25457b66873b2d8bd141f6039f31b1d"],["/posts/cd747566.html","b6486638b5497c3336ecee7bee8fb7f5"],["/posts/ce0db2d0.html","5de1ee77d89a2d1f37f20da2099ece26"],["/posts/d0d1ce.html","a5975b5f56682ce4644c21853014b2ce"],["/posts/d554428f.html","888766e5e064222459e319a93c7f4fd8"],["/posts/d9677098.html","b2932e42d66fdd29cb1a4e9bb841bea4"],["/posts/dc573b7e.html","32931d3ddf073f6befc866a6a2cc8869"],["/posts/e3c7a27f.html","421acbef748f6145ace1e1d426485fe2"],["/posts/f0e2800f.html","d9e012a7d8dddbcd123170de8e85a8ce"],["/posts/f56d3ab8.html","05e16f323cdb0b1d34d7a011e453646a"],["/posts/ff53e8a4.html","65cf1f315683e80a4a7a2ef43711aec0"],["/sw-register.js","786bba0d92da0575066ea55a1b4ac794"],["/tags/Builder-模式/index.html","bc2f4135ba8b423863d4fa86d6ee9743"],["/tags/C-Language/index.html","a1bd6dc78809020985a76f3447c7ad05"],["/tags/DataStruction/index.html","fce0f80d86d6c7bcd51e81cabe08b21f"],["/tags/Electron/index.html","7aeb35ce17f63d024fb1577865568dd0"],["/tags/FTP/index.html","0911963d51cb495b80a14e1aa52cb77c"],["/tags/Function-Option/index.html","723ca1657d17fc003b82209ff3d7bf7e"],["/tags/Golang/index.html","770a822b9c68fb9b1756ddfbf6f92a00"],["/tags/Golang/page/2/index.html","33e8964a6db6f9c0442105bfec7e3ffc"],["/tags/HEXO/index.html","7bc36d3f6cc63848ff28da3c1aa18e4c"],["/tags/Hash/index.html","fcab60346ac39d7e5a8eb9297f245295"],["/tags/Java/index.html","e8b5ee005302738193bad460135081c1"],["/tags/Json/index.html","0dc15ecd564427f3f0757a2c6ab79216"],["/tags/LeetCode/index.html","907b555eb970f3aeb0ebbfee451b7948"],["/tags/OSI-模型/index.html","d3839b6ffea636a3146936523425e104"],["/tags/OneTiny/index.html","59f56b80b500a1c0c8033906e7d478f7"],["/tags/Python/index.html","ed9d5b2b1cd156b91b6d62d872c3200a"],["/tags/Python/page/2/index.html","ce7c3f95355ae8ee606174b564d65b23"],["/tags/RSA/index.html","0e9afbbfe7cb9f6fb0af1f3629d093fb"],["/tags/SSM/index.html","7ec019be310545cb1143ffe9bf27d1ca"],["/tags/SSM配置/index.html","25fbb765123a076310e419b445941ab3"],["/tags/Vue/index.html","01b8c37a8452c73f9ad12ff4bfd0eeaf"],["/tags/YAML/index.html","89997484ee483adc16f0bba54eb7fba1"],["/tags/commit/index.html","0a3daf5db5c3070c8c0cf7af609d04f1"],["/tags/gin/index.html","3d431f00f7e5c6df2501d604ccefea24"],["/tags/git/index.html","93ecb587a59f70b7ff4afca140ae1269"],["/tags/index.html","bf2ac5a0277283d70bef400af1eeee97"],["/tags/json/index.html","eae312ea6615a13dc9b4cb92c8bb9f66"],["/tags/note/index.html","2d8681e62f38d83749e5d7ced6f268b0"],["/tags/request/index.html","e56a56e04f55a3d218f4da6aa211f38e"],["/tags/response/index.html","07d085c1de1de30cdc69a7607bea82bb"],["/tags/七层模型/index.html","c1ea407499b66bc542c7841e3775faae"],["/tags/上传/index.html","2efc1bfd025e689c68f2f57e95104f5d"],["/tags/上传下载/index.html","cb8da0c8e61d4b06f27e7c9b7d3767a1"],["/tags/下载/index.html","7b9dfcb0a5d967452afc8e3e6ba668ed"],["/tags/中间件/index.html","25ca817cb4eb689885550eddf530b9bd"],["/tags/事务管理/index.html","577921c27a6911e7703e6602843c6539"],["/tags/交叉编译/index.html","da785ff00be08a5aa77876746fd87aec"],["/tags/值实现/index.html","84f5021e7420c57abc554a485b6acb31"],["/tags/函数式编程/index.html","64ac6f1cf8c3aaa12b5cf0b0b9839eac"],["/tags/反射/index.html","c335a8084c41542fd6e961bfff4257bb"],["/tags/命令/index.html","fec59867ed9a130b7cde0f9300666b3c"],["/tags/局域网/index.html","5449d4bf6c6bf17eba1ab5b9d1613b10"],["/tags/并行与并发/index.html","426dfda93ca64b087650e4a1a2a89dad"],["/tags/底层原理/index.html","017ba71a751b02bd45a4adf40c27d040"],["/tags/引用类型/index.html","8c483cd575f9a24cdba7c2929d0b9044"],["/tags/性能比较/index.html","91e57b6ba93b96df8e8119040814a14b"],["/tags/抽象类/index.html","c98a224b2182913424b8de8671c3b6a8"],["/tags/拦截器/index.html","22a4a6e78812fe8628d3f47e66a829cb"],["/tags/指针实现/index.html","63123a9b1a18a9596f5bc88bf14b974b"],["/tags/数据绑定/index.html","b642ce531d1608818f4eda42c5bedeea"],["/tags/数据结构/index.html","10f13273a2e226121a06fcf023e36266"],["/tags/条件编译/index.html","e3329f3aade81d2c37fb8fcf739da291"],["/tags/正则表达式/index.html","d2d701d5843388f79d8c7c6208934582"],["/tags/爬虫/index.html","53e41d0fa15757c09924ba4bcb8af9e0"],["/tags/物理层/index.html","7423cd7e4c478717399419a171c3a405"],["/tags/独立开发/index.html","6929a93a9c6dfb70330d968853fc04c5"],["/tags/生成器模式/index.html","54c7867de814119e0ce39a55e86eaf22"],["/tags/监视器/index.html","19d2f2405a52ec101db426c81ff6afc3"],["/tags/算法/index.html","d6e8a9cc7bbbbca41c3784999373cad0"],["/tags/统一异常处理/index.html","b500d91c6e75425fab1c25fe85e3d96f"],["/tags/计算机网络/index.html","8fe706330b9d923ad82a99790fb90881"],["/tags/路由/index.html","e58d048832f36f8ed16665f6ff08ec26"],["/tags/选项设计模式/index.html","0223d1d3c05ed73210a25e8208cf7ac0"],["/tags/重定向/index.html","56d3f0fb565db4f617ec44d7688809ae"],["/tags/面向对象/index.html","f089292a80fc9cc2c6be742725587b6d"]];
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
