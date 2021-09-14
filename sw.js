/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e589acdc1b384fb50202e1d3c3739528"],["/about/index.html","b2369ecfaa64d2ae95dc9bb0d6b9dffc"],["/archives/2019/01/index.html","1cdea7c929bcf9c708be13299347886b"],["/archives/2019/04/index.html","fa75a04a67224fe39f75156e90477bfb"],["/archives/2019/05/index.html","682c63180f24c8a7d227b0d7e478bc16"],["/archives/2019/06/index.html","aa3eaf4f48ca844e2f02d6dd0914f564"],["/archives/2019/07/index.html","5f3d603c4b2eba57ac08f3cacabf15f0"],["/archives/2019/index.html","8fe1cd3e1a2d6dba893c40f9c659e972"],["/archives/2019/page/2/index.html","9d10d3bad3fa97b45dff655b91afe3be"],["/archives/2020/03/index.html","ccff6a262123530d42f92f399d9c5663"],["/archives/2020/04/index.html","f76060c397b0ffb8dbabe7d4a4245b53"],["/archives/2020/07/index.html","377b2c0cad21e5a1f34879b71663a072"],["/archives/2020/07/page/2/index.html","e900dfa5e55b4a69e358555526e4c5b2"],["/archives/2020/08/index.html","75b8b46c9f19c8fe6712bf16b3dbb57c"],["/archives/2020/index.html","72798a120373714bb1284fde0bf1b4a1"],["/archives/2020/page/2/index.html","c55eb9ac123135dd6bc8a1e35978c34c"],["/archives/2020/page/3/index.html","6921cff1ff7c5434705c1fc53b766500"],["/archives/2021/02/index.html","f0eb4c6bc20881c2ac17ef1a89f74c6a"],["/archives/2021/06/index.html","b100d8d8cdaaa9a38a7594e60b4e263f"],["/archives/2021/07/index.html","f2fe724c978295bef000fb483c579edf"],["/archives/2021/07/page/2/index.html","83cc62fb1dfe3746ef13a561d445106e"],["/archives/2021/07/page/3/index.html","ce8f2a8313166b0ab68d42636867781b"],["/archives/2021/08/index.html","48dd808a20d1f90bd3b2a67aa7e94872"],["/archives/2021/09/index.html","5921832a3f19946667c496dcded4f813"],["/archives/2021/index.html","78b352e840884c9b0b032f833904b27a"],["/archives/2021/page/2/index.html","796a5574c12ae8556d8412a5a41d2ba9"],["/archives/2021/page/3/index.html","3eeecb8bfb7de7fcdc1e739fa4f05170"],["/archives/2021/page/4/index.html","ff248fcc4c9d8323d6c93759e2682ceb"],["/archives/index.html","e13413de6590ce3d64435b19b820ee6d"],["/archives/page/2/index.html","e13413de6590ce3d64435b19b820ee6d"],["/archives/page/3/index.html","e13413de6590ce3d64435b19b820ee6d"],["/archives/page/4/index.html","e13413de6590ce3d64435b19b820ee6d"],["/archives/page/5/index.html","9d94769d4f9cf8ef8150ac9e0cc33c83"],["/archives/page/6/index.html","9d94769d4f9cf8ef8150ac9e0cc33c83"],["/archives/page/7/index.html","9d94769d4f9cf8ef8150ac9e0cc33c83"],["/archives/page/8/index.html","9d94769d4f9cf8ef8150ac9e0cc33c83"],["/artitalk/index.html","a30bffa711dcd6884c415904807cc15a"],["/categories/408/NET/index.html","756db453b10a6920bdd20da9206fc62a"],["/categories/408/index.html","4304fdb83f7cf2907d23aad08433375c"],["/categories/C-Language/index.html","86522d44e7d478f8d064ee7b9ee41b82"],["/categories/DataStruction/index.html","216c2479f9605be8e9178044adfa1aae"],["/categories/Electron/index.html","cf467cac989ff47e6b9a376946e7bccb"],["/categories/Git/index.html","47244d9c0b064978451d7e38a6ea7a46"],["/categories/Golang/Adavanced/index.html","92adfa367b4278f9566f9d27cc81e162"],["/categories/Golang/Basic/index.html","f236b98d90a83d8dd0f68755f813360c"],["/categories/Golang/Basic/page/2/index.html","b64e47e5240bf667ba5078e8b455e606"],["/categories/Golang/Framework/index.html","55627c34fec5b6c3b0b4408c17918246"],["/categories/Golang/index.html","9fe18d8c2e7a0c2f844c36062c8097e4"],["/categories/Golang/nil/index.html","03709b5057895b33baeaebe1070e867a"],["/categories/Golang/page/2/index.html","0c72c3a3aba8fe7df3537613542b4400"],["/categories/Golang/page/3/index.html","2ec810b8e5ce7faa6418e5dcde018ae8"],["/categories/HEXO/index.html","36881a1396dbd3676fb901d0712ec5fa"],["/categories/Java/SSM/index.html","20c636cee1a0240b7e0799e599cb5862"],["/categories/Java/index.html","d13d03a896b5031bc72b4f9f5cb511eb"],["/categories/LeetCode/index.html","9fd88f750355bd29fbaea4d59913393a"],["/categories/Note/index.html","490b937fceff40ca15ebe0f7aee5cb71"],["/categories/Other/index.html","7eb9276abc06a4d61fd6d1ac55bb9081"],["/categories/Python/OPP/index.html","87fb4f9bbb2ca52468b06653d6c84f9b"],["/categories/Python/index.html","d5c398a95134279e59a94df09e6619d1"],["/categories/Python/page/2/index.html","e3195d4e2398958d41292179aef7eb7d"],["/categories/Python/内置库/index.html","97da182ec59359eab28de786d984a479"],["/categories/Python/基础/index.html","9e0e66d58d3c24697994805af59bbc0f"],["/categories/Python/爬虫/index.html","2960c7ee1fda239b8e62f2f18ef78aa4"],["/categories/Python/爬虫/基础/index.html","9740fead1318e6da612a36941630242a"],["/categories/Python/进阶/IO/index.html","2f7b0476ed17100f397b1a9a2e210758"],["/categories/Python/进阶/index.html","f5f78d9f245c8075dd9fa1f79fb8b2c6"],["/categories/Python/进阶/进程、线程/index.html","9073888628f91e51151395a36711e1d8"],["/categories/Python/进阶/错误与调试/index.html","c8f23b021496ca3c26046328ce85938f"],["/categories/Python/高级特性/index.html","bdb1f081fa7d553643732d4af08d0323"],["/categories/RSA/index.html","b0f9f8132b11bcb98acb6792fe2cdef4"],["/categories/Vue/index.html","9d7eae6f36794bd134b5fa5f76d505bb"],["/categories/index.html","8932bbf1a65d07eccef6c8974a5fb6db"],["/css/first.css","3ac24ff8d5cdf574c792d665d721621c"],["/css/style.css","09badb29a7c8ebb71200f179bd9c628c"],["/friends/index.html","8b3fb541de19765ce5625d76dd75edb2"],["/images/cover/God.jpg","2f3fbf3d9ed68ca1f35b3a40b17ed544"],["/images/cover/me.jpg","41c2b75c8cd5e5fccb7d0b4d07616137"],["/images/icon/favicon.png","908d3ed33c51b22ef2a439a9bd192f5f"],["/images/icon/logo.png","a8af0fde5eb7389c5039db1b84a835e4"],["/index.html","233d52476c6e0ad1e1e085a9f40ff7fa"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","e09c9c471ca8f9bcf8e71913f3c3c46b"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/10/index.html","f6d5f1988da1ab7814f1411f22066fa9"],["/page/11/index.html","4fff06437770a3da48ccdc62477ee18c"],["/page/2/index.html","1c0932844b28f02f1b02eb88c1105181"],["/page/3/index.html","8d659c09c4b12a2674043cac1641ee60"],["/page/4/index.html","62c1978b837d7163c3416a08a38ff10c"],["/page/5/index.html","913f54c3d85d9ad9bd1347476f26d4bb"],["/page/6/index.html","e07b66c30a0fdbda5ea14b478bf29474"],["/page/7/index.html","968e29c455112ccb2cdf477f35603911"],["/page/8/index.html","1af879de8e3216895cce684f0e91c11b"],["/page/9/index.html","bdc317cb3b9faed0b4f6e28886eaa84b"],["/posts/11720.html","2c720631bacec782b6b2cecffda8a582"],["/posts/12119.html","e02b65978e52c4fc37aa3efaac3ec9d7"],["/posts/13406.html","2d773f6a4792fd67248ed0fc857a4f89"],["/posts/13460.html","d832bc661c09105faecfe561b5cd992c"],["/posts/15463.html","63bc41b109ea1c3007f713137b8bf535"],["/posts/16107.html","239477a6a21e11b21adb30c93fc997e7"],["/posts/17036.html","728190f5bbd5170de00617b24f984964"],["/posts/17751.html","9e9f54b315f11e2d9c768dfd6b1b04c9"],["/posts/18012.html","b2672af5e91203fc6604a92d76d14d3c"],["/posts/18591.html","c1585ade43bcdf12d5ac8fe42d78f1b1"],["/posts/1937010b.html","e4bde7bf91e0964e185c04a60ee075b0"],["/posts/19751.html","da5ac72710267b30d6b4f01820dbd501"],["/posts/19a13983.html","1dacdf76081184b1466563c8103b7283"],["/posts/1aa7bff2.html","7037999ca7e3379e3211b2553e9c4b75"],["/posts/21668.html","f5ee79baf23fd4a44f172be8bcfee399"],["/posts/22089.html","5a505d738c24669c6cc4386ad0e51395"],["/posts/237b56c2.html","e77f8f00ea66cc95dfca727fbda7404a"],["/posts/24435.html","783229605ca5ca26afc6a4fbdf8aee1a"],["/posts/25425.html","ff2c4f21c940f5cc2354cc3341584d39"],["/posts/25647.html","c46c8a6ab9ff6f235e2382b9ca6ed650"],["/posts/25754.html","57ecd59469d75846a808cf52ff0e867d"],["/posts/28223.html","d15abef5bc37f62ab3e59a80f31a93c2"],["/posts/28995.html","09446b7ed1779d136dba00f5ebd3924a"],["/posts/29925.html","c97806afe8eff0a9481ea67573f251ae"],["/posts/2c39f343.html","e8e2248896f4351d326313cba9fa62be"],["/posts/2c48000c.html","cf060ec420d25c304036b73b4eb6f743"],["/posts/31044.html","efe8010cddf2687f1440c0c130de0154"],["/posts/32620.html","2294438b9249da2d481a4c1cc7c51125"],["/posts/33205.html","f8b769d6d0905736cc95a4ad9fac7e0e"],["/posts/33364.html","ce5ced01b968f3468a365bd8d56a2dcc"],["/posts/34681.html","16c2037da20888071584555d9e6856df"],["/posts/34736.html","7170ae8ae58da26d8f3029129c56fb90"],["/posts/35371.html","3949659a0a39f5e6c589fdf6f4cd33ed"],["/posts/37243.html","ade40f6829105b7cc17e2b69d6d973fb"],["/posts/37390.html","12c9c003c9384055629bb595585a57f8"],["/posts/37710.html","00c498f65ed508bd9af31141073bfbe3"],["/posts/38014.html","7b9bffc0ec86842885573c2bfef95a81"],["/posts/3844.html","035f744a4d6e02f7cc3182f4ad735464"],["/posts/3887.html","667bf0822028865834bf4154dd1a7c09"],["/posts/38965.html","5b9bc4e3aad05d6dc37b42ffc81dd021"],["/posts/39690.html","4a82db3492e5ed156b5e2d477be8fcbe"],["/posts/39743.html","37186c13f71a3987337998c42bb50ef1"],["/posts/41079.html","fb0ab4a11e097a686e1174da6875a0e8"],["/posts/41307.html","d2f46a032bebdf40756753fb793315af"],["/posts/41814.html","418fd61925fd73cda9abd6219bfed197"],["/posts/41947.html","3377ea45549ea83af7fb431b12a9446a"],["/posts/42006.html","2141ff57de2d15a8d501b3200c3ef13f"],["/posts/42106.html","72aa4b05b8a1f67c8e9e93416e9632db"],["/posts/42715.html","c7c943842d12b48746f0f5e73757ffa2"],["/posts/42822.html","4778113ca7e28d1f5167a3389b634a13"],["/posts/43293.html","ae31526041505e305e44aec209b9e22c"],["/posts/44644.html","ad7dea397817895a3097b682ae8aaa28"],["/posts/44742.html","20b37ab72299f94fbf109bcbed6507f7"],["/posts/45109.html","e866de76420bfe39789146e7e9253380"],["/posts/45196.html","18e1ba01afad1350ed4137e77ae59c53"],["/posts/451cd62.html","5c61820b9421d3096530de0964b8bc7d"],["/posts/46719.html","907e0d5b2c7753966514ea541044e99f"],["/posts/46855.html","bb743f67775e2a848bcf94cf536f0532"],["/posts/48872.html","90c0d58f5b9027378704ee8c9c0146f3"],["/posts/4950.html","f75fb7be91585bed554345ed2e446354"],["/posts/50917.html","6042162420fdcd409ab10b10a1bf4ad9"],["/posts/52628.html","0751b0980d96f5b01399c53986cfa8a1"],["/posts/54509.html","cb494bd8414c3d363749bc1536ab0457"],["/posts/55493.html","c21560f1d268f7f0043592b76b5dbded"],["/posts/55674.html","1d3a3aaf4b246e090b406a6ff471893b"],["/posts/59097.html","4a4ac4d96bd2811a8e6ebf078426d0f8"],["/posts/5bdd8b42.html","936a3489acaa943f13e9469d0cb6e89a"],["/posts/5d7d558a.html","bbc8d81ee9122d68fbe5d1826000e9a2"],["/posts/60258.html","29002603379580bb505aa232cead56ca"],["/posts/6239436b.html","0c4030bd6a905342e648d8796c73f44b"],["/posts/63024.html","e9372fc046046d293ff85534c88572bc"],["/posts/6343.html","f7448ed4f4cd456833f31b66c720b713"],["/posts/64290.html","7dbabafe6cd24abd6fb368f92412f6f9"],["/posts/64ec0a72.html","f2e8534ea264e022f3691a587994d7e9"],["/posts/65033.html","9ecb73149e9e98c275fea02d1a07434f"],["/posts/65501a4c.html","4b9e06f40a4f9f3113f4544400733f1b"],["/posts/655173cc.html","6e90df3649be58c1c81c9ae219f4d8a1"],["/posts/6642a673.html","6e520cc50342750d3099c3cf415a56d0"],["/posts/6930.html","2bf37337e8c50c4ab8a403c4bfe5b78e"],["/posts/7031.html","fb6d06e6a31286d323db4b98f32a1231"],["/posts/7b9344b7.html","8571a2a8247828c95ed06bd7045551e7"],["/posts/7ebc0a4.html","589496a8a8b7c71fc49e1828c4f2248f"],["/posts/81730e0e.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/88c693c7.html","67cd997ec00cc637e4ec643b3554b85b"],["/posts/8961d743.html","fdf936dbfd8dc9f3c3929f417d553950"],["/posts/9049.html","c999d059946641f33cbbb81fb8ea75c7"],["/posts/913ad9ee.html","ea609364e5affe1bc01e15613ae90149"],["/posts/9832.html","68764f3a14c22241f252f9120c54a5df"],["/posts/a55bf0d2.html","4804e4eda3fda3bd93d12db08c634677"],["/posts/a6eafc24.html","b6c303036931b8ddb0bd069f39f0ac0f"],["/posts/aabd6c1b.html","506019151a5dc997d1a22ed11e73342d"],["/posts/b2fbd54c.html","b4e7c9768a9a45c03e3b1593fe291f24"],["/posts/b56ec5ea.html","989ccd598bee66109269838fcadf4fc9"],["/posts/bf9901b3.html","38864fcfebf780352b94c954b7d969dc"],["/posts/c6fec8a1.html","ac6f19207f6f752693a5ca3068f3d984"],["/posts/c8c5007f.html","59f40fc035069ded9f2f4d9208a1f288"],["/posts/c8f1d592.html","99bfce8fb9870131d9d95b5e262ba1e2"],["/posts/ca82ac25.html","06c577378f07eef9c8ae984c0fa894ed"],["/posts/cd747566.html","47e9fa4f410a79e5b3e787b3246400fd"],["/posts/ce0db2d0.html","d9f34170dd6316bfde0c2d519ebafbf1"],["/posts/d0d1ce.html","66c90239c58a618b74d77575d73c95b4"],["/posts/d554428f.html","9f428443b2e4cc1bec36ef6b8d68f9d3"],["/posts/d9677098.html","086491a08571e790beb543537f60d5db"],["/posts/dc573b7e.html","bfd1920ee353b233fd0082c366c81b75"],["/posts/e3c7a27f.html","3f1a99f735201e7befb6fa398db3e1ab"],["/posts/f0e2800f.html","c9a9c157eec359423f799f5980b29142"],["/posts/f56d3ab8.html","1b981d6d783cd36c547cf2446f3681ea"],["/posts/ff53e8a4.html","3c4908c13479672164854a82052ded70"],["/sw-register.js","a65283c110aabcd1fb0de95570c14f28"],["/tags/Builder-模式/index.html","f8761fbfed78b1b8729b5367be45c011"],["/tags/C-Language/index.html","3e31f47fae8ea5cf4c2fb6cb8c50d253"],["/tags/DataStruction/index.html","0fc9e608662dd7889def29a1018e43f6"],["/tags/Electron/index.html","e627b76f7f604e6eaa57afad8fae068c"],["/tags/FTP/index.html","d6f5b679e3298502978dab0c0cb69730"],["/tags/Function-Option/index.html","7f8f6aea8856db631485758f4507daa8"],["/tags/Golang/index.html","1ba0473dbc362175b0f3d3031d00680d"],["/tags/Golang/page/2/index.html","a38d9ff61885582c491cf9667a9e48e5"],["/tags/HEXO/index.html","14059f9a8b9cf2f7ab48dd4a686930b1"],["/tags/Hash/index.html","737a645d7c1af36ec72203b3d2f9ca8d"],["/tags/Java/index.html","2703d3901440f926d254f7001bf6c7e9"],["/tags/Json/index.html","a485fc2e7f6c259d554dd9a5ea68ec22"],["/tags/LeetCode/index.html","6c61c4a11ba31cfe66c583819f34d550"],["/tags/OSI-模型/index.html","83801b95393b549592c9bbf67533a7bb"],["/tags/OneTiny/index.html","9665c11f52e36388fa4bdffa74d843e4"],["/tags/Python/index.html","3a2bbc956ce2496339dd1f545ffbdc9d"],["/tags/Python/page/2/index.html","be899e654751066c5f0f826179f3cc3a"],["/tags/RSA/index.html","ee96e7432a08ea3e90a515156d5f408a"],["/tags/SSM/index.html","a9d754efb1d125ce9454d54dd2d22d59"],["/tags/SSM配置/index.html","a9c7aa89d83c5952b60455566dfb0c37"],["/tags/Vue/index.html","8c62de538e34f6450d6a732e4acf0f8e"],["/tags/YAML/index.html","26f7342cedd19b5fe23e3383f69ce1dc"],["/tags/gin/index.html","9b8fe1947cf15e96b9667aa12943614d"],["/tags/git/index.html","5b949a4f54c0a56d0a6780cf3f79956e"],["/tags/index.html","61abd465c75050c4e20911bdb73cf4a6"],["/tags/json/index.html","e1230ca1f55661180c468322ae546b05"],["/tags/note/index.html","188ffd2eb0b7edee53d7ce83a37d8b82"],["/tags/request/index.html","75e882674a73c5bb5a1ec1503db9c183"],["/tags/response/index.html","3446d4c02978bae52f1d387cd57992b3"],["/tags/七层模型/index.html","b5d16ad027ae5b4a579c8c6b96cb46db"],["/tags/上传/index.html","905311fea8b195ff7546c4bc638e5e62"],["/tags/上传下载/index.html","ff4d5339f528d44f980bb5a675d929b7"],["/tags/下载/index.html","3141a03b3970a92da1ac6d65192cf8cb"],["/tags/中间件/index.html","02772abcf01d804c421db8a640cbdec6"],["/tags/事务管理/index.html","a38f305a53318aed1e8b2806eb6efab8"],["/tags/交叉编译/index.html","2e850d92aa398843581e2c0a775b5738"],["/tags/值实现/index.html","c98b3898c115b08df567b64f182f86db"],["/tags/函数式编程/index.html","e98e60fc226e421dcaab13969152755c"],["/tags/反射/index.html","be297b92d5cefa4a6238265c2ac5306c"],["/tags/命令/index.html","4add41ecb8aec00790b6dc3df1b24774"],["/tags/局域网/index.html","4b46a68c710fb469ff766a1e18a53973"],["/tags/并行与并发/index.html","010db24b63a5a04268ef9fe0b918f267"],["/tags/底层原理/index.html","4b0b70d5ee88380480332b7b49a3aa01"],["/tags/引用类型/index.html","c5762121b17195a6fdfb721175837a17"],["/tags/性能比较/index.html","58aa5fd1306871247b38edc0ab9dbba7"],["/tags/抽象类/index.html","465eb182e91d5140b215534bd66d393a"],["/tags/拦截器/index.html","382404c9026ee7f27a6d021148d0b2d7"],["/tags/指针实现/index.html","c397f789640b85d85dc3ed88010aedfa"],["/tags/数据绑定/index.html","10af998a90f1fee28a39b8d20ad0e8b9"],["/tags/数据结构/index.html","d2fba970302c452e5945137214ade664"],["/tags/条件编译/index.html","c20f6ef88baf08d2b479a26b871d26a0"],["/tags/正则表达式/index.html","070b6935d0418bff7454c140c8939b66"],["/tags/爬虫/index.html","6112d728435732edd80b7a87c038db15"],["/tags/物理层/index.html","f13e06f8a4dc4b37fab1d465dd67896b"],["/tags/独立开发/index.html","e75a114e7b263c2220b204276d3a1e48"],["/tags/生成器模式/index.html","3c4d19cdf38155f5aa20a02234285e93"],["/tags/监视器/index.html","c48d1136e0ee620598cb646c8bf4338f"],["/tags/算法/index.html","255b8458c4d2a3a70fd6e50d0a6d13eb"],["/tags/统一异常处理/index.html","969c23066f754ac5c75c4d0dce7e413e"],["/tags/计算机网络/index.html","dd5fe468a50c444da538d15639270823"],["/tags/路由/index.html","62d07fed619b33591f1006d6985610c1"],["/tags/选项设计模式/index.html","e72a784672e02ef03c19512d7163c35f"],["/tags/重定向/index.html","f3690ab48aa72d226286311726d82eb4"],["/tags/面向对象/index.html","afa9ff0d6069d6f91f9f3a3c750372e1"]];
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
