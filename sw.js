/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fbdfcc4925b7d42de6f7b566edb7aec"],["/about/index.html","e1900a06113f41693dfdfba30a6c5318"],["/archives/2019/01/index.html","22535581ee8899fcedfcd3565b220313"],["/archives/2019/04/index.html","264ce9b9b29ca86924d1b10c502bad89"],["/archives/2019/05/index.html","da5279aa2a12c73fee170f328854e8ac"],["/archives/2019/06/index.html","e70de55b68bd1dc00f911efa3ac32719"],["/archives/2019/07/index.html","7a4da6c07c282feb67a9d498f49b54a2"],["/archives/2019/index.html","82d497a8c6ce19eb486ec27f85929565"],["/archives/2019/page/2/index.html","9e86a91e4ccca4756355e102675c5326"],["/archives/2020/03/index.html","5548f6bae85ec2a4f0adffbddb0418c4"],["/archives/2020/04/index.html","653eb3b94224ef274a920d84318261ac"],["/archives/2020/07/index.html","334f1a1ec7c8ef006a9180393908af07"],["/archives/2020/07/page/2/index.html","3a8d00568020693f00d2f64c494fafc8"],["/archives/2020/08/index.html","b4fc64abeac7aedeca34e01e7c4c2d4e"],["/archives/2020/index.html","08c3fce922500312aa41d3027fef8418"],["/archives/2020/page/2/index.html","e1a3cfed8fc30759a7790f2b08b2e223"],["/archives/2020/page/3/index.html","9e621f8849a3323cd646100118eb24c6"],["/archives/2021/02/index.html","916fc1ddad4384a1852563db25e6e1a5"],["/archives/2021/06/index.html","67899da156ad7277a99bdaa631a52ddf"],["/archives/2021/07/index.html","fe62fad916e6f4ca7f215013a7e56019"],["/archives/2021/07/page/2/index.html","d328b58d5b8a897b01e080beec4fd983"],["/archives/2021/07/page/3/index.html","f45756c139f5098ddfc90897d1dcf798"],["/archives/2021/08/index.html","299ed61fe6572558e16e93c1be35a8a2"],["/archives/2021/09/index.html","82b4c812a8f7c35a3a879f96fff8c16a"],["/archives/2021/index.html","3cceddbcb00b7479aff964319986287d"],["/archives/2021/page/2/index.html","6446af39f0011478e7c759656c9dfd54"],["/archives/2021/page/3/index.html","c2a39b444b2f38c24b187b8f28bb27a1"],["/archives/2021/page/4/index.html","2f9958c0b7be35ded639fdf2c143c782"],["/archives/index.html","5d6716e7580caebafb67a57627db3ac7"],["/archives/page/2/index.html","5d6716e7580caebafb67a57627db3ac7"],["/archives/page/3/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/archives/page/4/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/archives/page/5/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/archives/page/6/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/archives/page/7/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/archives/page/8/index.html","ee3dc295688ab44e02be7e800b11c5e2"],["/artitalk/index.html","a576ba732dc684e94bb614976577679c"],["/categories/408/NET/index.html","21baba0b42147be53ce58cf9ea2f8688"],["/categories/408/index.html","d5f74588ea28253b355f135cb9d33050"],["/categories/C-Language/index.html","1e780b38bbb89777fe47264f0fbddd62"],["/categories/DataStruction/index.html","3c23e9c1696340a1104cc554dfccec8a"],["/categories/Electron/index.html","48a332bcbfd1165451e2d44a5f013ecb"],["/categories/Git/index.html","9cbee6b3a06ac53d4098d4217ae23625"],["/categories/Golang/Adavanced/index.html","cdd52b2ee3ea9beb99ba2b2ad9614028"],["/categories/Golang/Basic/index.html","25084f02b305462117bcce6445c491c0"],["/categories/Golang/Basic/page/2/index.html","d54806eda837b48e63c7b31f33f2bc4c"],["/categories/Golang/Framework/index.html","e14a919d2312db112daacb6d68132e69"],["/categories/Golang/index.html","67360c52ccf558fc54fb990fe798d133"],["/categories/Golang/nil/index.html","4df0b4bdd65c1a43ceb8b9eaba9e2a17"],["/categories/Golang/page/2/index.html","97d098b3776b31fc790f74b18e4705f9"],["/categories/Golang/page/3/index.html","53654ca97860356e61617eca527d9a7e"],["/categories/HEXO/index.html","793cb94c0f22ae9ddd8c41fd642ab51f"],["/categories/Java/SSM/index.html","767a6969030233165115c021cec33fc2"],["/categories/Java/index.html","6f4a9d4852424db105f6a944ee6f15a9"],["/categories/LeetCode/index.html","2571bf0d7053b5de9dbd4ce552eedeec"],["/categories/Note/index.html","a9585b84079cb69ca67185fc6d94bf74"],["/categories/Other/index.html","a96100751c933445c776581564b35c9c"],["/categories/Python/OPP/index.html","f8b87be5a63141861df1d955d5f2e385"],["/categories/Python/index.html","116f34d634bef3828dfc663d69cf03d1"],["/categories/Python/page/2/index.html","d7a131d7b6df3845e518cda9440ff321"],["/categories/Python/内置库/index.html","6c5ff78bc4717c33dc9dec6c73b2b946"],["/categories/Python/基础/index.html","5cc251267bb68cef24606906d3b109de"],["/categories/Python/爬虫/index.html","7de00448a65e298db8c6753102dd2f57"],["/categories/Python/爬虫/基础/index.html","f1151dcddbb145bf419ff87c744ca462"],["/categories/Python/进阶/IO/index.html","1ee4ac695727aa93e03f0e41b0cd4768"],["/categories/Python/进阶/index.html","06f01656ca2a91d9624c45b8f2ae5141"],["/categories/Python/进阶/进程、线程/index.html","c262474949f98883a4a627ab0fd7b32a"],["/categories/Python/进阶/错误与调试/index.html","39299a5d509ae048536db4733f4850fc"],["/categories/Python/高级特性/index.html","47f26a0bc13b6c561fad1bcc460e75f5"],["/categories/RSA/index.html","50e0bcdafb1771ed9b8d1cf68dded6ff"],["/categories/Vue/index.html","edce760a1e334dab2c373fc3c8723717"],["/categories/index.html","d616dfbaff6af766f300e3141c801565"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","801431a726e85eaa37231468d3b743e5"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","24bba4662ba3186a294e7415a86d076a"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","41cb5f18783e370a36cffc777b9d7581"],["/page/11/index.html","aba4ad1aa2ec554a889e08b8993e6174"],["/page/2/index.html","b7cbad420c003c716e714923bdac852b"],["/page/3/index.html","d1d9745ad0ebba04e29aad75325ed22c"],["/page/4/index.html","ef3cb7a35c877f114f07b518f63ee77d"],["/page/5/index.html","13c13be2c8a12161c5f9cb814b936f34"],["/page/6/index.html","cbd5f18923431b6370f86c795209cf5a"],["/page/7/index.html","b0fb587f5e7474cf9cd610e40cb7ef61"],["/page/8/index.html","4408725cfb91749f95a50c3575bb917c"],["/page/9/index.html","39992900aa176151269d816c920816ef"],["/posts/11720.html","25b27d3a750e1f248e9c4866bcfa2d67"],["/posts/12119.html","8a0f89a12cf315355b1147b0e77beb61"],["/posts/13406.html","e2eec152c3956c2b09d1ba0f0df083f4"],["/posts/13460.html","e8e70f7f3180b05e9f93147d57ecdcf7"],["/posts/15463.html","c2e816b3b964f56883a82e9f63b2e097"],["/posts/16107.html","70306aa65642abeb83efd2389f8b98c6"],["/posts/17036.html","9d74a5187b02f32cbc8f9f0f0c6366cc"],["/posts/17751.html","a30b7b7ee2ffe4bc6bdd01fc12f057aa"],["/posts/18012.html","d5914dac8acb018ca811d1f6ea030143"],["/posts/18591.html","38ee08a2b4056c57b4ca90f14fa3062a"],["/posts/1937010b.html","f46487c93fa814f398a88ff3d527be72"],["/posts/19751.html","f37c9b4cefc421cd2c16cf9f24dc5b18"],["/posts/19a13983.html","5e1150246a62bca082d7fde08df40302"],["/posts/1aa7bff2.html","ba319bcfa47d990c0d31c928b132d4cd"],["/posts/21668.html","1b25cf794b3ae83400b43a50788ebaab"],["/posts/22089.html","0b9ed0fff6348e0df019a25dcd07cfc5"],["/posts/237b56c2.html","dd65446ad292c7572f4d8e9031969c39"],["/posts/24435.html","53352b6487dde9859a968bfe46d7ff9f"],["/posts/25425.html","bd721ea8e7578b5d3b1a7115ab4207d7"],["/posts/25647.html","bdfaa60d9613efe2d2a8d19ff9f69aad"],["/posts/25754.html","8f5e37ffde7c0f01448c03c745d9b21b"],["/posts/28223.html","25583ff2abeab482038b7ac56c3750ef"],["/posts/28995.html","a4831bf9f258196c0e9af4069503e1cb"],["/posts/29925.html","3057f91e89a118a871da30a62134fad0"],["/posts/2c39f343.html","c66e7f8db927e5b6f5e2a19f28a58d8a"],["/posts/2c48000c.html","ce9e6e36c259a6efbdbad95f963548b2"],["/posts/2e4490bf.html","a45f4553bc1790047515c252c99cf529"],["/posts/31044.html","0162346febcfe7a6c429f68773668f52"],["/posts/32620.html","93edef51834f836feda520e3a2fd2b6a"],["/posts/33205.html","128c41f3fd16a5abb47070c39b2b9707"],["/posts/33364.html","74315b92263538e5b983df53759b28eb"],["/posts/34681.html","4c889383c94fbd608ac988b89dc7dfef"],["/posts/34736.html","61d12eb6125874c635f607cf514e11ad"],["/posts/35371.html","bcfc8c7bb51429496e93c0ecc6d95755"],["/posts/37243.html","b8ab6e1d91b5d593a585e9a4d7a6685e"],["/posts/37390.html","983e890d589b51a3ba07d915d6710846"],["/posts/37710.html","727a5a8bf09030b812f53f5306cbdad3"],["/posts/38014.html","4870f37f46fb62950bbc10715e7ea9f8"],["/posts/3844.html","0b8422ce9ad8bfc9256440e499659682"],["/posts/3887.html","f6ac5960ddccb3f18fb8af20beee8f55"],["/posts/38965.html","785b754ed7b2803cceaaadad3d15d5ab"],["/posts/39690.html","5ba53de3aecf0c1593f30b084311f49e"],["/posts/39743.html","5b57e0b9be71a077e8942c130422c372"],["/posts/41079.html","d6655320e71bd700fda6b93daba8fc64"],["/posts/41307.html","9d285060ad7468c78ce10db1b1e78c33"],["/posts/41814.html","87737a16cfb7f3d22ff1e586c4e3c25c"],["/posts/41947.html","d2c8958c63b6d7a41ef3c5fc0c4b6f43"],["/posts/42006.html","2056525cd7f8a74b6ed523ba6ea540d8"],["/posts/42106.html","c4d3981b1a54e6037b82701fcfcd9615"],["/posts/42715.html","79d59279cd2eb153758e144bfa66ea72"],["/posts/42822.html","db09262a73440b27c9cfeb070aba8ec0"],["/posts/43293.html","c42fdd55c864a1d4c67ab562b68f985f"],["/posts/44644.html","0d80d3716e23e0bb746482cdc2c3f36e"],["/posts/44742.html","0e8ba45bfa0b8c13f51bcfcfff261c27"],["/posts/45109.html","8c1ac7ab03b01c3ce4e612aadee2e166"],["/posts/45196.html","2d55fc0b9e0402434b79c2e795304827"],["/posts/451cd62.html","53561f88215898e68532c740e078677e"],["/posts/46719.html","dc51136fc7ee0b82da3d259109f4f44d"],["/posts/46855.html","7695b2cbe5ad69d2874ad9fc0d6cfbc8"],["/posts/48872.html","825d8055b909891096d52080441e4f1f"],["/posts/4950.html","689ff08f8742fd46560750de4189907a"],["/posts/50917.html","b62ffe7ca7152f5777e7cc9b02840394"],["/posts/52628.html","1a0acfc6d667f942219b0d7430c772bf"],["/posts/54509.html","5ab4b8a4c7eb90da623fbf95aee386ca"],["/posts/55493.html","994e6fa5176c165a40145022700d46e8"],["/posts/55674.html","f3a913f547c242d70289fd42eb4f4d8f"],["/posts/59097.html","6cb5fe05ab6bf00c498186273f72d410"],["/posts/5bdd8b42.html","34f4660c61fe4cb6338c76cfaca5d076"],["/posts/5d7d558a.html","8f03929830d5564fc6164d461c74fd45"],["/posts/60258.html","2403e0fd0ec071108512fcafe085b898"],["/posts/6239436b.html","0d628b9b656741de52333954449a6df3"],["/posts/63024.html","262643a518e50631bb940d93922d6456"],["/posts/6343.html","5a1beb6951a5e96e3d880b8dfbb748d8"],["/posts/64290.html","f4049033b06a418d55955672e8233ae3"],["/posts/64ec0a72.html","6af10bfbebe753158b227a9b8abfb04b"],["/posts/65033.html","ed3d2c981c1ea7242f979470db38e9ba"],["/posts/65501a4c.html","817029d9016d6ae202ad513e51c3bad2"],["/posts/655173cc.html","11c4541cde6ab6cfce69d3d6c27978c0"],["/posts/6642a673.html","bf41642a4611dfbda26320951e0a1fcd"],["/posts/6930.html","e21f5fc1b293b9223fece45e5522a404"],["/posts/7031.html","81d860b7eb01c8d3c8e8c4406638d157"],["/posts/7b9344b7.html","1f66239c3f5f7116e88dc3a3fcbb90bb"],["/posts/7ebc0a4.html","79ab4788b0e7dcb99c81e1c6dd554ec5"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/88c693c7.html","fb6c72bceb739cf88fb87ebdc16d857b"],["/posts/8961d743.html","e4b25ccb6dfb0821c4a8806deda7b948"],["/posts/9049.html","aa07ef5a388e291a158ece6c9554205a"],["/posts/913ad9ee.html","8d7f131138349e67c7573f8d17cd689a"],["/posts/9832.html","706eb66776552acd73b206bef600736a"],["/posts/a55bf0d2.html","1b0477d1ea8dc90dde4d72049216715b"],["/posts/a6eafc24.html","8b8d27c386aba3d62a090e99b5cb52f3"],["/posts/aabd6c1b.html","6ad228f9838c42d0196548a2ed52cc1c"],["/posts/b2fbd54c.html","462acfecebe364403615a1930b48e3ad"],["/posts/b56ec5ea.html","27e69593cc0ebc1de4c26ddd58757278"],["/posts/bf9901b3.html","76f7a4ba4af4b7c8c9581c8dc8851fcc"],["/posts/c6fec8a1.html","73ea4db295ed1327bb02aa61645a299b"],["/posts/c8c5007f.html","44f0d768a2f47092f94cf17c739b4cbf"],["/posts/c8f1d592.html","82efaa5c8ba5c9557627a8ee01ad3762"],["/posts/ca82ac25.html","c25457b66873b2d8bd141f6039f31b1d"],["/posts/cd747566.html","b6486638b5497c3336ecee7bee8fb7f5"],["/posts/ce0db2d0.html","5de1ee77d89a2d1f37f20da2099ece26"],["/posts/d0d1ce.html","a5975b5f56682ce4644c21853014b2ce"],["/posts/d554428f.html","888766e5e064222459e319a93c7f4fd8"],["/posts/d9677098.html","b2932e42d66fdd29cb1a4e9bb841bea4"],["/posts/dc573b7e.html","32931d3ddf073f6befc866a6a2cc8869"],["/posts/e3c7a27f.html","421acbef748f6145ace1e1d426485fe2"],["/posts/f0e2800f.html","d9e012a7d8dddbcd123170de8e85a8ce"],["/posts/f56d3ab8.html","05e16f323cdb0b1d34d7a011e453646a"],["/posts/ff53e8a4.html","65cf1f315683e80a4a7a2ef43711aec0"],["/sw-register.js","7c3d71797b5305c56cb08430ed042edf"],["/tags/Builder-模式/index.html","ef2a904c24bf7e2cb27ce0a9f793c07c"],["/tags/C-Language/index.html","0219c9984356d968765c2327b605432a"],["/tags/DataStruction/index.html","64d3b258c45ccf715c582f3bfc5b806a"],["/tags/Electron/index.html","e649daaf03265bead5e113d39b436908"],["/tags/FTP/index.html","4546c6dafb0314c5386bdc3526f6754b"],["/tags/Function-Option/index.html","798c16e90dbde22ddad34aff4b2ad81c"],["/tags/Golang/index.html","90e53555f7e3940980243352a5a44911"],["/tags/Golang/page/2/index.html","b4feaa0fa454d5aea30651948d5c7364"],["/tags/HEXO/index.html","a68126ba9dea873a87d0af48f8a8a5a0"],["/tags/Hash/index.html","acec5817f168e824b403988526249ac7"],["/tags/Java/index.html","1ad244a6e442a56dc56a054ace7ae851"],["/tags/Json/index.html","a7e05c3dc44a19f07fe12281b6624fa6"],["/tags/LeetCode/index.html","a4507c7f0c612cab1a4771283c727f26"],["/tags/OSI-模型/index.html","0301efaa8555666d3b152dcf070153bd"],["/tags/OneTiny/index.html","e051720fdcfd520bfa376ac58a4c1b46"],["/tags/Python/index.html","cc2538cad27b5dbb6690efcae4294ee8"],["/tags/Python/page/2/index.html","19e4dc20ea9301cf0fbc9da8a3269d56"],["/tags/RSA/index.html","35e7051a01465624233466c9b6b1193e"],["/tags/SSM/index.html","eefe946882f9753471c5c8c144ac5a81"],["/tags/SSM配置/index.html","0266f0be32bc2124b9cf81587d1813f6"],["/tags/Vue/index.html","78b22d82505b131fbef47e4e0cb434e0"],["/tags/YAML/index.html","03d8ff94a2470d686ada6ba27e4881d2"],["/tags/commit/index.html","2b2d8de10e8580ea9e970b1baf65308c"],["/tags/gin/index.html","e31014d20d9dddf313ecc2dddb34c2d7"],["/tags/git/index.html","79695137944e3e94ae58620f4bf6ba6d"],["/tags/index.html","bf2ac5a0277283d70bef400af1eeee97"],["/tags/json/index.html","457d67491b355a39fcc0f1ba0c2f20a3"],["/tags/note/index.html","1e693488bbec9f2f723ac36e473a8b0f"],["/tags/request/index.html","65ddf709f96828a7ee8bb9a0e139c2f3"],["/tags/response/index.html","0c23ccb03a9438e7885c8bdb372faf34"],["/tags/七层模型/index.html","6da0fd1ac50bd61ead6b1e5878d26373"],["/tags/上传/index.html","baf2ed35799d65770145c933e5dcef47"],["/tags/上传下载/index.html","e90f045e0c315553e0f907ca19f3ff50"],["/tags/下载/index.html","a03aa412083cba8c04acb2ec347cb928"],["/tags/中间件/index.html","92ed3963417bd329e43b5045770c79ba"],["/tags/事务管理/index.html","627c74c25762b8079e768fafda72a1ba"],["/tags/交叉编译/index.html","ec3bb8abc7529306b7f873b209a55ede"],["/tags/值实现/index.html","57f77dd39a7fee836849c0ee6e9f1e66"],["/tags/函数式编程/index.html","94defc2f3dccbb1ea5ebb92e709db7ac"],["/tags/反射/index.html","720f4163a5c4ede71d6121f68d5ff227"],["/tags/命令/index.html","7b9988fd57f165b63b2f4cfb8a2c011b"],["/tags/局域网/index.html","f8193ae4d739d3f49e80121dd1be98d4"],["/tags/并行与并发/index.html","c3ba523544ddfb850c83c6171fb27875"],["/tags/底层原理/index.html","f1f823ee9a8c0b2bb82f718fbc8bff1d"],["/tags/引用类型/index.html","e763befe90d6f52efef7863fd78a1a2f"],["/tags/性能比较/index.html","42f9574e83fb60d721902ce08cca28b2"],["/tags/抽象类/index.html","1fb86e8f2a68c7fd961140f96201fb16"],["/tags/拦截器/index.html","4117e5f01868900744a6c6852dc45f67"],["/tags/指针实现/index.html","ac4b162aae1f8430a69a285bffa0ad3a"],["/tags/数据绑定/index.html","c22fa8e871f09830c4d8b4a5f161abef"],["/tags/数据结构/index.html","c3e1b1f6a45ca859b79665cb7077af9e"],["/tags/条件编译/index.html","877404d49f6ea4013766f350cd4b1867"],["/tags/正则表达式/index.html","ccece3e6816599386b4623ad3c981622"],["/tags/爬虫/index.html","f6b949530a41e7aed5d293bed9dde189"],["/tags/物理层/index.html","96151e6882cbf0c1eee6e347cebc70fd"],["/tags/独立开发/index.html","ab103155375127e9d3237e843fe70ea1"],["/tags/生成器模式/index.html","ecdad8b61e9542f21ce47f9c117e744b"],["/tags/监视器/index.html","c4ea7a858a4ba049eec9734b37c33a8e"],["/tags/算法/index.html","e63355448a88782b3c770779d2465e82"],["/tags/统一异常处理/index.html","6eb2c2e49947196b9b9698fd70d250b0"],["/tags/计算机网络/index.html","b460d0bba718e8ebcad36e6683fb2103"],["/tags/路由/index.html","e12265156dbcc3c26f2e3fa877fde834"],["/tags/选项设计模式/index.html","19e4aaa20501798386c6714097c45619"],["/tags/重定向/index.html","a7d2c74767d0b6e191849bfc592af4fe"],["/tags/面向对象/index.html","2aed75f520b79b67b4b0c259df00c5da"]];
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
