/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fbdfcc4925b7d42de6f7b566edb7aec"],["/about/index.html","e1900a06113f41693dfdfba30a6c5318"],["/archives/2019/01/index.html","d511f2485f42ae0063078848406e5d69"],["/archives/2019/04/index.html","446b6815eafba5ca811c47f352176957"],["/archives/2019/05/index.html","bd43f01a294cd95dd65cbb909dae9f82"],["/archives/2019/06/index.html","9e2400cde1178779905b5c71ec0cceba"],["/archives/2019/07/index.html","db26e83b0ba89db3ba0361aa79dec5eb"],["/archives/2019/index.html","aeec6b53ad0625e00255aa7638bca438"],["/archives/2019/page/2/index.html","9ec42fd9ee43d2aacbf4d06f4e8c1cc1"],["/archives/2020/03/index.html","6aa2172ecf7933346fcdf63617b17320"],["/archives/2020/04/index.html","512d22b1b6712b60590731a30b528c27"],["/archives/2020/07/index.html","e20752127f6ccda3caf0f203b7d872f0"],["/archives/2020/07/page/2/index.html","b426cc3320d33746108c2190151df732"],["/archives/2020/08/index.html","6f6414690a5101dee8011e181bea9b45"],["/archives/2020/index.html","8d5f11840348b85960e9dbcf319c856b"],["/archives/2020/page/2/index.html","9e6c9212a34a8a3fe0510cfe4e7100d9"],["/archives/2020/page/3/index.html","2c30678b8aa452cf2070ed2ffa7b9ad8"],["/archives/2021/02/index.html","5af372db570362654303742b8ccd64fd"],["/archives/2021/06/index.html","15dc72f3d3945765a51569edc6387b95"],["/archives/2021/07/index.html","1ad6e3e7f3252c0a8aa55a00cd6abdd2"],["/archives/2021/07/page/2/index.html","1c35473b7abc1366776629fd4038d841"],["/archives/2021/07/page/3/index.html","a72f2b6fa40999db3e7390a1e65919c9"],["/archives/2021/08/index.html","58232368641b2ca41f0f356c9661895e"],["/archives/2021/09/index.html","c28ec92b1d85d5d7575a06a5a451b7f1"],["/archives/2021/index.html","5ed2e9abf789f68578a495162cfb0a4b"],["/archives/2021/page/2/index.html","ea33902a5df5e40bf68749e2a0d6bd0c"],["/archives/2021/page/3/index.html","7e3f097f18915161aabffbe37542db97"],["/archives/2021/page/4/index.html","6a2a1f52c7dfb66a0211711af4e73c12"],["/archives/index.html","a93d53df88e597604433670a8cf283c9"],["/archives/page/2/index.html","a93d53df88e597604433670a8cf283c9"],["/archives/page/3/index.html","a93d53df88e597604433670a8cf283c9"],["/archives/page/4/index.html","a93d53df88e597604433670a8cf283c9"],["/archives/page/5/index.html","a93d53df88e597604433670a8cf283c9"],["/archives/page/6/index.html","a9a7a206f407fc7a921f7591193b79ec"],["/archives/page/7/index.html","a9a7a206f407fc7a921f7591193b79ec"],["/archives/page/8/index.html","a9a7a206f407fc7a921f7591193b79ec"],["/artitalk/index.html","a576ba732dc684e94bb614976577679c"],["/categories/408/NET/index.html","0fc4ad18e962d9a12de6d8ff239bea50"],["/categories/408/index.html","8463d37921f7fcd5e6b83e17b5f09637"],["/categories/C-Language/index.html","aaa2ad7b34d039cdd2edf1c199933bc2"],["/categories/DataStruction/index.html","5906cf01a3593389b0fe7b6310a5d2d2"],["/categories/Electron/index.html","4ec81d236b9b860634c48d7c9731642a"],["/categories/Git/index.html","625252ededad27e0dd0a090afc114ca1"],["/categories/Golang/Adavanced/index.html","d831782cac822b69ecfeae873abc30ff"],["/categories/Golang/Basic/index.html","e8aba4b9c04d7d4fb5bda4acd1e104ef"],["/categories/Golang/Basic/page/2/index.html","b1aa4cb3ede071a0915f14179b200156"],["/categories/Golang/Framework/index.html","56a821687d3445326083f5b23861eaa7"],["/categories/Golang/index.html","7e09137e3160beab89e4fbd578327a62"],["/categories/Golang/nil/index.html","84a73c318f58f5a5522060d82f744485"],["/categories/Golang/page/2/index.html","30399c4da72c3f1409447673b2c8072f"],["/categories/Golang/page/3/index.html","13cea93f7e3d83e215c08d2a9528a2a1"],["/categories/HEXO/index.html","cb48e61fe6f9f2ec0c55fe0f0cac6377"],["/categories/Java/SSM/index.html","750cb24efcb22f3941b4932096dae5ad"],["/categories/Java/index.html","701787179f208cd9a8d1c300ca6c1abc"],["/categories/LeetCode/index.html","22bdcca0b8ce07c9fe9318e14e2a04c8"],["/categories/Note/index.html","c261b9757fa5ab0ba9503698ef7b50a7"],["/categories/Other/index.html","84b13b443b9f9253dfdee3edfdc321ac"],["/categories/Python/OPP/index.html","020141322092bb71234568777857499b"],["/categories/Python/index.html","4a8c65d70da0d4fadcf1c2ed9f8ba997"],["/categories/Python/page/2/index.html","783305d082a52df50abc39b344384036"],["/categories/Python/内置库/index.html","c5b4aefb9654de4db28677fb52a1f497"],["/categories/Python/基础/index.html","22cfb9f54ab54c66a7d1e83b760b8e06"],["/categories/Python/爬虫/index.html","67b77c053cd0de447b11841c6c2db4e2"],["/categories/Python/爬虫/基础/index.html","6a2516a5067e22c277bba401ac6525f1"],["/categories/Python/进阶/IO/index.html","2061a9cf2419b1ae37e0c3a6503febd8"],["/categories/Python/进阶/index.html","0c34886b884af6331c1e0833c9732c28"],["/categories/Python/进阶/进程、线程/index.html","94ca04535a1942aa80243f28d3cdc3b4"],["/categories/Python/进阶/错误与调试/index.html","ad1a9b511db413f622c0506b5cb86f02"],["/categories/Python/高级特性/index.html","d5386a429554e5d0f5d8b38c2fc46280"],["/categories/RSA/index.html","1c60a3de88a6732e0713911adf7e9038"],["/categories/Vue/index.html","bcecbe5231ed5aaae965104fa8b4b022"],["/categories/index.html","a84e09e1c88460442e3b9be7991b79d6"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","801431a726e85eaa37231468d3b743e5"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","99a556e1ce067f1d54bc45c0a6afdf2b"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","26b91c18722974deee904aaed6644bfa"],["/page/11/index.html","937a79100f38d3d13401aac7fb02385a"],["/page/2/index.html","58840f0a86dec001c5988538361c5484"],["/page/3/index.html","a4413178c5a0a308c3d4f0ad18cbb42a"],["/page/4/index.html","52aee8019babed59b5a0fefe31ee2769"],["/page/5/index.html","11c0b98ab448238023f71f0f82c8e320"],["/page/6/index.html","43f53f8c4105c5476fa76fd0980f3692"],["/page/7/index.html","2040ab057d5584c163735db03c686d18"],["/page/8/index.html","2ca0daba76e1cc1808c0e520c2183097"],["/page/9/index.html","f14cff0ae7e7c36e1a0a62b99183d6db"],["/posts/11720.html","25b27d3a750e1f248e9c4866bcfa2d67"],["/posts/12119.html","8a0f89a12cf315355b1147b0e77beb61"],["/posts/13406.html","e2eec152c3956c2b09d1ba0f0df083f4"],["/posts/13460.html","e8e70f7f3180b05e9f93147d57ecdcf7"],["/posts/15463.html","c2e816b3b964f56883a82e9f63b2e097"],["/posts/16107.html","70306aa65642abeb83efd2389f8b98c6"],["/posts/17036.html","9d74a5187b02f32cbc8f9f0f0c6366cc"],["/posts/17751.html","a30b7b7ee2ffe4bc6bdd01fc12f057aa"],["/posts/18012.html","b498e8f9ca1b262d14ca863d1ab92e0b"],["/posts/18591.html","38ee08a2b4056c57b4ca90f14fa3062a"],["/posts/1937010b.html","f46487c93fa814f398a88ff3d527be72"],["/posts/19751.html","f37c9b4cefc421cd2c16cf9f24dc5b18"],["/posts/19a13983.html","5e1150246a62bca082d7fde08df40302"],["/posts/1aa7bff2.html","ba319bcfa47d990c0d31c928b132d4cd"],["/posts/21668.html","1b25cf794b3ae83400b43a50788ebaab"],["/posts/22089.html","0b9ed0fff6348e0df019a25dcd07cfc5"],["/posts/237b56c2.html","dd65446ad292c7572f4d8e9031969c39"],["/posts/24435.html","53352b6487dde9859a968bfe46d7ff9f"],["/posts/25425.html","bd721ea8e7578b5d3b1a7115ab4207d7"],["/posts/25647.html","bdfaa60d9613efe2d2a8d19ff9f69aad"],["/posts/25754.html","8f5e37ffde7c0f01448c03c745d9b21b"],["/posts/28223.html","25583ff2abeab482038b7ac56c3750ef"],["/posts/28995.html","a4831bf9f258196c0e9af4069503e1cb"],["/posts/29925.html","3057f91e89a118a871da30a62134fad0"],["/posts/2c39f343.html","c66e7f8db927e5b6f5e2a19f28a58d8a"],["/posts/2c48000c.html","ce9e6e36c259a6efbdbad95f963548b2"],["/posts/31044.html","0162346febcfe7a6c429f68773668f52"],["/posts/32620.html","93edef51834f836feda520e3a2fd2b6a"],["/posts/33205.html","128c41f3fd16a5abb47070c39b2b9707"],["/posts/33364.html","74315b92263538e5b983df53759b28eb"],["/posts/34681.html","4c889383c94fbd608ac988b89dc7dfef"],["/posts/34736.html","61d12eb6125874c635f607cf514e11ad"],["/posts/35371.html","bcfc8c7bb51429496e93c0ecc6d95755"],["/posts/37243.html","b8ab6e1d91b5d593a585e9a4d7a6685e"],["/posts/37390.html","983e890d589b51a3ba07d915d6710846"],["/posts/37710.html","727a5a8bf09030b812f53f5306cbdad3"],["/posts/38014.html","4870f37f46fb62950bbc10715e7ea9f8"],["/posts/3844.html","0b8422ce9ad8bfc9256440e499659682"],["/posts/3887.html","f6ac5960ddccb3f18fb8af20beee8f55"],["/posts/38965.html","785b754ed7b2803cceaaadad3d15d5ab"],["/posts/39690.html","5ba53de3aecf0c1593f30b084311f49e"],["/posts/39743.html","5b57e0b9be71a077e8942c130422c372"],["/posts/41079.html","d6655320e71bd700fda6b93daba8fc64"],["/posts/41307.html","9d285060ad7468c78ce10db1b1e78c33"],["/posts/41814.html","87737a16cfb7f3d22ff1e586c4e3c25c"],["/posts/41947.html","d2c8958c63b6d7a41ef3c5fc0c4b6f43"],["/posts/42006.html","cc88eae2164ee2cd2a78e20f84b661a1"],["/posts/42106.html","c4d3981b1a54e6037b82701fcfcd9615"],["/posts/42715.html","79d59279cd2eb153758e144bfa66ea72"],["/posts/42822.html","db09262a73440b27c9cfeb070aba8ec0"],["/posts/43293.html","c42fdd55c864a1d4c67ab562b68f985f"],["/posts/44644.html","0d80d3716e23e0bb746482cdc2c3f36e"],["/posts/44742.html","0e8ba45bfa0b8c13f51bcfcfff261c27"],["/posts/45109.html","8c1ac7ab03b01c3ce4e612aadee2e166"],["/posts/45196.html","2d55fc0b9e0402434b79c2e795304827"],["/posts/451cd62.html","53561f88215898e68532c740e078677e"],["/posts/46719.html","dc51136fc7ee0b82da3d259109f4f44d"],["/posts/46855.html","7695b2cbe5ad69d2874ad9fc0d6cfbc8"],["/posts/48872.html","825d8055b909891096d52080441e4f1f"],["/posts/4950.html","689ff08f8742fd46560750de4189907a"],["/posts/50917.html","b62ffe7ca7152f5777e7cc9b02840394"],["/posts/52628.html","1a0acfc6d667f942219b0d7430c772bf"],["/posts/54509.html","5ab4b8a4c7eb90da623fbf95aee386ca"],["/posts/55493.html","994e6fa5176c165a40145022700d46e8"],["/posts/55674.html","f3a913f547c242d70289fd42eb4f4d8f"],["/posts/59097.html","6cb5fe05ab6bf00c498186273f72d410"],["/posts/5bdd8b42.html","34f4660c61fe4cb6338c76cfaca5d076"],["/posts/5d7d558a.html","8f03929830d5564fc6164d461c74fd45"],["/posts/60258.html","2403e0fd0ec071108512fcafe085b898"],["/posts/6239436b.html","0d628b9b656741de52333954449a6df3"],["/posts/63024.html","262643a518e50631bb940d93922d6456"],["/posts/6343.html","5a1beb6951a5e96e3d880b8dfbb748d8"],["/posts/64290.html","f4049033b06a418d55955672e8233ae3"],["/posts/64ec0a72.html","6af10bfbebe753158b227a9b8abfb04b"],["/posts/65033.html","ed3d2c981c1ea7242f979470db38e9ba"],["/posts/65501a4c.html","817029d9016d6ae202ad513e51c3bad2"],["/posts/655173cc.html","11c4541cde6ab6cfce69d3d6c27978c0"],["/posts/6642a673.html","bf41642a4611dfbda26320951e0a1fcd"],["/posts/6930.html","e21f5fc1b293b9223fece45e5522a404"],["/posts/7031.html","81d860b7eb01c8d3c8e8c4406638d157"],["/posts/7b9344b7.html","1f66239c3f5f7116e88dc3a3fcbb90bb"],["/posts/7ebc0a4.html","79ab4788b0e7dcb99c81e1c6dd554ec5"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/88c693c7.html","fb6c72bceb739cf88fb87ebdc16d857b"],["/posts/8961d743.html","e4b25ccb6dfb0821c4a8806deda7b948"],["/posts/9049.html","aa07ef5a388e291a158ece6c9554205a"],["/posts/913ad9ee.html","8d7f131138349e67c7573f8d17cd689a"],["/posts/9832.html","706eb66776552acd73b206bef600736a"],["/posts/a55bf0d2.html","1b0477d1ea8dc90dde4d72049216715b"],["/posts/a6eafc24.html","8b8d27c386aba3d62a090e99b5cb52f3"],["/posts/aabd6c1b.html","6ad228f9838c42d0196548a2ed52cc1c"],["/posts/b2fbd54c.html","462acfecebe364403615a1930b48e3ad"],["/posts/b56ec5ea.html","27e69593cc0ebc1de4c26ddd58757278"],["/posts/bf9901b3.html","76f7a4ba4af4b7c8c9581c8dc8851fcc"],["/posts/c6fec8a1.html","73ea4db295ed1327bb02aa61645a299b"],["/posts/c8c5007f.html","44f0d768a2f47092f94cf17c739b4cbf"],["/posts/c8f1d592.html","82efaa5c8ba5c9557627a8ee01ad3762"],["/posts/ca82ac25.html","c25457b66873b2d8bd141f6039f31b1d"],["/posts/cd747566.html","b6486638b5497c3336ecee7bee8fb7f5"],["/posts/ce0db2d0.html","5de1ee77d89a2d1f37f20da2099ece26"],["/posts/d0d1ce.html","a5975b5f56682ce4644c21853014b2ce"],["/posts/d554428f.html","888766e5e064222459e319a93c7f4fd8"],["/posts/d9677098.html","b2932e42d66fdd29cb1a4e9bb841bea4"],["/posts/dc573b7e.html","742ce191af9a52d331ea209a67e206b1"],["/posts/e3c7a27f.html","421acbef748f6145ace1e1d426485fe2"],["/posts/f0e2800f.html","d9e012a7d8dddbcd123170de8e85a8ce"],["/posts/f56d3ab8.html","05e16f323cdb0b1d34d7a011e453646a"],["/posts/ff53e8a4.html","65cf1f315683e80a4a7a2ef43711aec0"],["/sw-register.js","1a5b8135609181cbb62a77b4b4523d2d"],["/tags/Builder-模式/index.html","56102d7d90ac0d704bb8dad1d97fa22d"],["/tags/C-Language/index.html","7bbf519dd84295cb9d1fa7c701941b74"],["/tags/DataStruction/index.html","1f86a03c0e63d3935c5b6d6b5f8fdfd7"],["/tags/Electron/index.html","58ad6984cf958bd202720cec80406952"],["/tags/FTP/index.html","1ced1eaf490af2b3ef0dad5318b19909"],["/tags/Function-Option/index.html","3f07981759276e9e66bb80cee22ba602"],["/tags/Golang/index.html","1f78d639aa9afc10a76579e86e83a09e"],["/tags/Golang/page/2/index.html","ade9f15f3d8d83db7f0dbabade535c25"],["/tags/HEXO/index.html","cce17a20dfdbd52a5ddd34154f93b6f0"],["/tags/Hash/index.html","9ba98e3d96bb06c77b6bbd3770c23f91"],["/tags/Java/index.html","a9eacc2fa366e699ab4a0387b373cb50"],["/tags/Json/index.html","3244a43321271620f1133978e640a71f"],["/tags/LeetCode/index.html","bb77cf1fc887aca321280cf35d37489c"],["/tags/OSI-模型/index.html","56fccc97a362f8b92d7db26d2dc462fe"],["/tags/OneTiny/index.html","aa8a99c1fc9178562f09044e379acc14"],["/tags/Python/index.html","ecb126d9b047aadecb5d864b21022123"],["/tags/Python/page/2/index.html","6ba2250fd03c20fa9fb16c42ecdbbed0"],["/tags/RSA/index.html","9e51b581c910ab719d713d0639f8eec3"],["/tags/SSM/index.html","660f938f29624452cdfe8444113cfdba"],["/tags/SSM配置/index.html","eff9493efd5a64e7b7c2d619b79c917c"],["/tags/Vue/index.html","866b6da161d9fb4602255c7dab1a004b"],["/tags/YAML/index.html","889b6f9750b8be7d86c504c401761b81"],["/tags/gin/index.html","3a0c70bbf2bcc2157eda1962bfdde86a"],["/tags/git/index.html","37974c127dee4c07b52eaa7ffa18a6fe"],["/tags/index.html","c719c88a9db5b3605078fb346df01d5f"],["/tags/json/index.html","41a428e4009819ec393fd76ca47f57ae"],["/tags/note/index.html","47f8781a523c70d8fe74d325f116df1f"],["/tags/request/index.html","a28da772880c1f5e88dfcfcff5188cc9"],["/tags/response/index.html","253b73dd2ae398a852491db32abf4648"],["/tags/七层模型/index.html","9acd75e4d9ce5be265c43f6e4cf2605d"],["/tags/上传/index.html","9f6c085ed46552a59f1c543e266ab29d"],["/tags/上传下载/index.html","4caf2a142ec10f9baaf3d35b43b8edea"],["/tags/下载/index.html","f6df5c3d6202fca82f72f33e1f6f8cd8"],["/tags/中间件/index.html","b978d28e6511d90897b91c059615b478"],["/tags/事务管理/index.html","915789e25f1cba4da7807e96baad0dd5"],["/tags/交叉编译/index.html","52d819a1fb78c26c0bacf5e2ccfa66ed"],["/tags/值实现/index.html","a453eac71922f3819d4235b72763a23b"],["/tags/函数式编程/index.html","4d96467c96fb4a872a1640f72c1d5209"],["/tags/反射/index.html","586b454acebae343ff4b50d33a6a6b28"],["/tags/命令/index.html","e5b5db3ba5bec588b4d42f445a5f05f2"],["/tags/局域网/index.html","d94013f08aa10b34a10af73e75b202d5"],["/tags/并行与并发/index.html","6251591919fac340d501691c8e8b087f"],["/tags/底层原理/index.html","237e65c1c677b45408bb9c1d5e410bf2"],["/tags/引用类型/index.html","4fee78875dc23c71823745de71dce1b7"],["/tags/性能比较/index.html","46db842c22b0522f5eb75750d558fb61"],["/tags/抽象类/index.html","d4d3e88148f18f72a16e6657df9ebb5d"],["/tags/拦截器/index.html","43372f37843b0be85fdc7a1a7ae3d95c"],["/tags/指针实现/index.html","bbcd63cc4e39a3e387b5af6f17474f8e"],["/tags/数据绑定/index.html","211a1ab664a4674d4120580ea332a833"],["/tags/数据结构/index.html","e26136033d847c65a45a8cd7bc421f4f"],["/tags/条件编译/index.html","22ff8f07482f2820399c5e0001738736"],["/tags/正则表达式/index.html","b6ab5672a49e86f68ec7d948ea85b1aa"],["/tags/爬虫/index.html","53112c63eceaac8db4c2126bd3bca659"],["/tags/物理层/index.html","86efceb76eab73290a0b563499257191"],["/tags/独立开发/index.html","14d3c5d31207306d9174b93eef1ec0b5"],["/tags/生成器模式/index.html","2093c546bf5e99aac5e9201bd22d71db"],["/tags/监视器/index.html","6bbbb239f9e43e3ec53bdaf34f7e80bc"],["/tags/算法/index.html","33e8b21c2d1761d78bf2f727140ccaa0"],["/tags/统一异常处理/index.html","ec2d99293a50c43e74aa2f96d023c337"],["/tags/计算机网络/index.html","915c4476229e91ffc93e92d03c631201"],["/tags/路由/index.html","5628120db33d7590aad2ae7b7314d33e"],["/tags/选项设计模式/index.html","9425aa1f705edf28ef4c3482c59979a7"],["/tags/重定向/index.html","0fbea41952c87ce9a9441be1d6156fbd"],["/tags/面向对象/index.html","7e95007b156162415705a5bf0cb6bf18"]];
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
