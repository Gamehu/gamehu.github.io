/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/06/26/dubbo讲究(一)/index.html","f671123340eb72b1a735e8f74910955c"],["/2018/06/27/OKR/index.html","88ee4c488de6559174cf368498296b19"],["/2018/06/27/三大主义要不得/index.html","88fc6aa7985d200b563fd5fb17514c00"],["/2018/06/28/联系和弱联系/index.html","91341b2b8cddfe4d4d406473c43dcf29"],["/2018/06/29/区块链/index.html","ce823c4541dc6416adb795f7e88a3096"],["/2018/06/30/Serverless/index.html","c660487f7779a0e8add330811d8c7b57"],["/2018/07/03/Service Mesh/index.html","18110965a223f5cf12f76db9f33eb041"],["/2018/07/04/12-Factors/index.html","83eaffe78f35e4cf5a73446740b988ed"],["/2018/07/09/常用工具-windows版/index.html","21dced61bde9da70fef4c8bbf034c7a1"],["/2018/07/10/how-brower-work/index.html","d78ce1254e3f48d9a1d522102b8b33dc"],["/2018/07/12/权限/index.html","ced1a3712868b6da0c696feee573b007"],["/2018/07/17/项目脚手架/index.html","b75b0df274a00291f4eb7476c990992e"],["/2018/07/24/你妹/index.html","88c23eed42490941878fc76483392ee4"],["/2018/07/31/详细设计/index.html","33755facdf9892bf669affa4526b11fe"],["/2018/08/01/Code Review/index.html","b8752c704ccb3169dd18550a8439f2d9"],["/2018/08/01/观看之道/index.html","5af7caf339a15f70abe7d22cda575677"],["/2018/08/06/GraphQL/index.html","fcc06cfaaff87ff6cb2b4310fc7034de"],["/2018/08/09/乔布斯/index.html","f4f94da13aead52faedc02e16b390f85"],["/2018/08/11/中美贸易战/index.html","e893d1f8e54c8d1c78f916a16d791263"],["/2018/08/14/自律(一)/index.html","2cbcf076e8d83b034d98c5d4057af46a"],["/2018/08/15/书方法/index.html","0fe16e0fa0051e8bf34e295107b62394"],["/2018/08/16/前后端分离/index.html","550233bf220262d824576ce691600f8f"],["/2018/08/17/温伯格的采访/index.html","50448cba67e1f5d67f5187b066dc4dc3"],["/2018/08/18/React一点点/index.html","14e9d6c741092894cbfd7d0bc441b3a4"],["/2018/08/19/同理心/index.html","042276bd26489de63f71d8e7e9f1556b"],["/2018/08/20/跨域/index.html","49c1699fb6c3fa4a3c316f1599294e48"],["/2018/08/22/生育基金/index.html","7fe05de86d82534d44374c5a15dfbb92"],["/2018/08/27/计算机网络/index.html","e31947d809b407b885a410deea3e0656"],["/2018/08/28/我希望我是猫头鹰/index.html","0c0113bd60e11eb4d80a857d05e4934c"],["/2018/08/29/职业层级/index.html","13165333e148e5ce018b3958ff2b02b6"],["/2018/09/07/逃避/index.html","0a10acd0cb592846b61ad18d3090cdde"],["/2018/09/10/梦想金山-人物/index.html","21b37c34acea1d3d2d0d62ebb3eba27f"],["/2018/09/11/CSS Triggers/index.html","dc7d1e16ba6eadc5db355577041e99cb"],["/2018/09/11/梦想金山-运营/index.html","6ad482e322255bafdd6019bbfae3f681"],["/2018/09/12/梦想金山-成长/index.html","7a3d06ac58a888211992340b93615a04"],["/2018/09/20/梦想金山-优秀的程序员/index.html","ae67c0cea35e0ef72d420c9b7b56c649"],["/2018/09/21/想金山-产品王道三大法宝/index.html","73576e4cdfb13f40e897b7df19eb8a59"],["/2018/09/29/敏捷自动化测试/index.html","51064bf8f4dc3987f7cd2f3a21c261fd"],["/2018/10/13/署/index.html","9ba8ce98e8198a0152f0958bb0155a5d"],["/2018/12/26/怎么让工作更加高效/index.html","189537c06ee48904f9b16e822b2f665a"],["/2019/02/15/软技能-承担责任/index.html","2e31a83f10e5dffa4f83abc00f99e836"],["/2019/02/19/2019年开始/index.html","365dc96a430bdc5ed639edc680cc70cf"],["/2019/02/24/前端小总结一下/index.html","b08316003c916bef7e836809965d1d0c"],["/2019/02/25/合代码de内心独白/index.html","03e5c244daa9abf2c4805ac9df346792"],["/2019/02/28/几个版本之后/index.html","c86b3aeae5491a7521173422f7b547b0"],["/2019/03/04/系统之美/index.html","725d036083d2faec7d2595f7d2a4a741"],["/2019/03/14/中间件到底该不该用/index.html","88cb94f72a3c70d4ecdb368a3bfa7f28"],["/2019/03/15/git分支规范/index.html","dc0d3db42c81a6002050e5685682a56f"],["/2019/03/18/前端-通用工具类/index.html","1526a9fa51d4f27bcc8c1aa9137c6309"],["/2019/03/22/React 条件渲染/index.html","8161d19fa3204c0920dcc81f8e0ab7ec"],["/2019/04/09/React Lifecycle/index.html","1b8de93089de8c11a3c35dc0d80680ea"],["/2019/04/14/怎样保持动力/index.html","c4459f0d3cbbb88e2a358b9eae24b88a"],["/2019/04/17/搜索/index.html","8537c701d564676069f78731a463253c"],["/2019/04/22/啥时候用Redux/index.html","c31c075d50b5bedd24e21c7fc6f11f85"],["/2019/04/30/前端编码规范/index.html","27cd67052ab0e3ac868c2dd36a7fbfcf"],["/2019/05/15/Linux Source命令/index.html","2974efbba057db58c70748a62a0f4c77"],["/2019/07/18/始于愤怒必终于羞愧/index.html","92b30c5ffaffa2e87515445f23624203"],["/2019/07/18/自由成长活动/index.html","3aadeb29bf455a3e96ded590aa3f5489"],["/2019/07/24/浏览器渲染/index.html","7ba999b64090171135b42766b85b3328"],["/2019/08/02/写的好看一点/index.html","cdc00fc56ab6bb9d7e1ee96440054aa7"],["/2019/08/05/ersonal-Growth/index.html","3564f8b9395a1e41a7c3d0c49e459114"],["/2019/08/09/编写可读代码的艺术/index.html","2d13a6a90e15f453f029e50b88e062b5"],["/2019/08/19/吃力不讨好/index.html","561e9dcaef2ab255cad2faa8253462b3"],["/2019/08/20/git实践/index.html","bd57dcca9233d2bbddf86f8cdc8d9d5c"],["/2019/08/21/提高效率/index.html","fe26afa5af2e3a77dfb75d6e6fced0fb"],["/2019/08/22/How-To-Master-A-Skill-In-A-Short-Period-Of-Time/index.html","9e377d356c4098b1f2f62e8a4b4cfceb"],["/2019/08/23/根因分析/index.html","d397d76c42cfee0fd1c419e56e715773"],["/2019/08/27/作用域/index.html","09830b8449f8acb663a8310a05de6f4b"],["/2019/08/27/如何做职业规划/index.html","423f4cafb40973a9196a34850888139e"],["/2019/09/03/Lint笔记/index.html","8178b897ecbeac877de75272acfa16a2"],["/2019/09/06/工具/index.html","2221d2c73bf99b982c753c1d5202d138"],["/2019/09/18/底层系统/index.html","216026dd9113962902ff12c7c4e904db"],["/2019/09/20/Chrome Tools-Sources/index.html","6b2c38eba1ae74a36cf08f2829494eb5"],["/2019/09/22/怎么做好Presentation/index.html","f006b7b861509bf2ac89c8f119061f68"],["/2019/09/23/难度沟通/index.html","9451c5b4b394b5eb88459628c839c6e4"],["/2019/09/27/安全扫描/index.html","8b87cda7be333a7a68bbc67ca773e863"],["/2019/09/30/抉择/index.html","0ba1e90191312ebe8129684971b773f5"],["/2019/10/08/个人发展战略/index.html","8395423f763b5c24a2436f8b3b3a7f50"],["/2019/10/21/组织化人出管理的四大领域/index.html","d59b710b9da281f616d4db9dacc19615"],["/2019/10/31/延宕/index.html","83c47588f13fafb7ec331360054835f8"],["/2019/11/03/斜杠/index.html","733c014324f007a4270f5f3b3dad2153"],["/2019/11/04/前端-性能优化姿势/index.html","ac961c4a0f67b87934e12dee287d8202"],["/2019/11/20/理解一个新事物的方法/index.html","259f4c568f38af266724bc3349c4a9d4"],["/2019/11/26/Docker 一点点/index.html","95397d0a9726315f0fcb53e920ed7d35"],["/2019/11/29/postgresql(1)/index.html","99b84a5a6c83e85958e71dccabd296b9"],["/2019/12/27/SSO实践/index.html","743457d359d551e0056783a595cca60a"],["/2020/02/03/领导寄语/index.html","d4f7a5d42c82d244f56bb925fabb60f1"],["/2020/02/13/Root-User-in-Ubuntu/index.html","c44feee6ad8b0586e28bd5e667295abc"],["/2020/02/22/JS Modules/index.html","f6a1bbec477d8a2db4212ad2847e73ef"],["/2020/02/23/ES Module/index.html","744455dba17cdccb170d2f2d370f4625"],["/2020/02/25/React Hooks(一)/index.html","f9e2f06991c68d5f23496af704e3ce1e"],["/2020/02/28/Gulp/index.html","f80b9010f7020206e78e285136b3cd4c"],["/2020/03/01/Module-bundling/index.html","c13ae5b7713ac3de0dfa11c04e9e9d72"],["/2020/03/06/tick栈/index.html","4417e47fdff7cb94cde649075f91c113"],["/2020/03/22/Java 8 Stream/index.html","2f982ec981dc77004e410303c2217f48"],["/2020/04/21/ps-grep-top-free/index.html","c24c7c7287407a7d1898b87ffb3a90fc"],["/2020/04/28/前端埋点(一)/index.html","6e577a71a5743e782624db98af391dcf"],["/2020/06/02/Linux-ls命令/index.html","4174671ca768c6a9278aa445adc0dadf"],["/about/index.html","1a60e55e14fa5d0974deacfee5ab3be6"],["/about/index/wechat.png","17eebb936e0c872da01c9e402843eb82"],["/archives/2018/06/index.html","f936531c85d9d21ffa21db1285b28901"],["/archives/2018/07/index.html","bf403e52e68d65a48e4f40317dc479ad"],["/archives/2018/08/index.html","a1db190db101bef8117d92695c8c6a0d"],["/archives/2018/08/page/2/index.html","79669264d68a3cb6fce875f630593025"],["/archives/2018/09/index.html","0d2e6b791718addb173662b8c5b25fc1"],["/archives/2018/10/index.html","d13dfa934ae7ce9cb34f77efc18adb40"],["/archives/2018/12/index.html","7d3a60745c41d8b428729d2669913726"],["/archives/2018/index.html","28ef426d3bcf75661e77c585426318ed"],["/archives/2018/page/2/index.html","40845dbc7671c475be9bc8fb75df36d7"],["/archives/2018/page/3/index.html","80e1a7ea1348fd0c7535de14179abd97"],["/archives/2018/page/4/index.html","4ed7d3551beecbdbe287cbb646da4d16"],["/archives/2019/02/index.html","fb0519c4aa4d83f021333496d8f9462f"],["/archives/2019/03/index.html","f3b4314b3b5902f162c46b8455f4ee99"],["/archives/2019/04/index.html","f7d88efa511758a5d2d1b0e14e346d60"],["/archives/2019/05/index.html","cf94d1fa06abe2d525073d6d477523a5"],["/archives/2019/07/index.html","fba0808f29f9eab8d3e8ac73fc016b25"],["/archives/2019/08/index.html","8028b87a37974b48618a753a734b1125"],["/archives/2019/09/index.html","6700e68595286bf4f0e72a1f4e0877cb"],["/archives/2019/10/index.html","3d55c6ba2f5f1cdfb769609162bc455d"],["/archives/2019/11/index.html","007b5f7df4e55de647e89c0580b2143c"],["/archives/2019/12/index.html","974691afdfca3707d9cec476b20c4c98"],["/archives/2019/index.html","fdf564131ac39c5c7187085eb8eab308"],["/archives/2019/page/2/index.html","0df0464f08f00beebbdb1c92188f9f06"],["/archives/2019/page/3/index.html","0ed157db63bd17105c894a442592a3af"],["/archives/2019/page/4/index.html","dde811c3f309c5aa3bced2201affcd72"],["/archives/2019/page/5/index.html","9628dd02da730db9af301f9785bec14c"],["/archives/2020/02/index.html","5700a0ff7b0475f43bf21f92d3a042b3"],["/archives/2020/03/index.html","f6b943d139e9f62d3dcbb08fc2bd5326"],["/archives/2020/04/index.html","878f373e44d99e17eeaba4a28ee020d0"],["/archives/2020/06/index.html","558e7cd9e47290ab37dc86d39a1090e4"],["/archives/2020/index.html","a831ee94603e8849d09b5b35e331827a"],["/archives/2020/page/2/index.html","e517f5424218d993e3f7de5d74c9dd95"],["/archives/index.html","1debcb0ac8f08158ba72aefd5ea7a041"],["/archives/page/10/index.html","b8abf30765f023413995acc02af0256b"],["/archives/page/2/index.html","700e613c92eb54bfcfa66f21061176a4"],["/archives/page/3/index.html","82f04ae9b15ac0247c34a65c1dbb9077"],["/archives/page/4/index.html","d06638e64515a41478278d566fbdcb55"],["/archives/page/5/index.html","f0203d6bd8e8a406c34c0988ac7302f5"],["/archives/page/6/index.html","3d60815f497d1f237d6a433a5ca5ea18"],["/archives/page/7/index.html","a58621701ac0f824a36fa4aac2a02f22"],["/archives/page/8/index.html","897389bdd0b1d74c210acb31cc8698ba"],["/archives/page/9/index.html","cc91aa74a7e496a4e0559e5877d3dca1"],["/categories/index.html","268942e495e76d8e0dc6849d0c7d591c"],["/categories/linux/index.html","6b2060d3febe81b975c771a04d87a2dd"],["/categories/中间件/index.html","65a2ca6607c664fba2ffd01767e8ff33"],["/categories/前端/index.html","0f5888105e0081b075f8f0baed79cbfb"],["/categories/前端/page/2/index.html","8396649b6f389ebcab635df47eded80e"],["/categories/圆桌派/index.html","91a6bb81a4adeffd14357321849db51e"],["/categories/学习/index.html","5cd7932dbe4003da9f13d8c2b4d5d8d3"],["/categories/工作/index.html","de3f9523059e164af08e02609cdf0715"],["/categories/工作/page/2/index.html","975bd4c4152fc296fcb437abc2e01ed8"],["/categories/工作/page/3/index.html","e2baad08289ea8ebb4972906378bbf42"],["/categories/工具/index.html","85fc934c833efc8b5576961c63864966"],["/categories/工程/index.html","eb44f2e5158d9287015384274b0f101b"],["/categories/成长/index.html","2846277307ab11354125d7dd71f85df1"],["/categories/成长/page/2/index.html","1e55d15ddd31f2595985b6660fb935a9"],["/categories/敏捷/index.html","840a33ad443a5de7bd1fe240ca1c6e18"],["/categories/浏览器/index.html","bdd5f68f5d91dc1d60906a71f9c60644"],["/categories/滚粗/index.html","8054ef6aa73579bb287785e500904c5c"],["/categories/瞎扯/index.html","9424faf00854afede301f2e7cba0b6b8"],["/categories/职场/index.html","1afda278469a8a2119b29ddc7ed8aa34"],["/categories/读书/index.html","cfe82178686b16028f30ebee0e798a20"],["/categories/读书/认知/index.html","3fc7b95ed07aadcbf85b8c19cdbc5109"],["/categories/部署/index.html","7fffc5fe606b775a523df667d5429327"],["/categories/闲扯/index.html","957034e8cb26cf7d0859afc91fac2a0a"],["/css/main.css","d071f44dd8fa261aa9b2236520d932c4"],["/guestbook/index.html","e654d8b2704b75ebb1da958625153295"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b7d28c1da2886afa186ac97534131cfc"],["/iron_man.png","597481074be4c96d1a42fb424e423527"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","429218f46c22e9aabadfb8a653cd4c2d"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","05e3dc8856914a79cd68705cba6bc163"],["/page/2/index.html","d35ad95eba6c3e5593ac1098e86092aa"],["/page/3/index.html","2082e05875b672d9910ab1c41c7d292e"],["/page/4/index.html","b78615f506b0ff406c548cde1dbf6728"],["/page/5/index.html","5459522ebb907d48757fa9ff6208d4b3"],["/page/6/index.html","550ec2fe248b7bbbaa0c4706a9327a08"],["/page/7/index.html","1994107eba0b3c261e1c6af2e8c71cb7"],["/page/8/index.html","b26607c2d510776a25b0e22a5dd92f4a"],["/page/9/index.html","c1447506276384df2f0c6151a08937ef"],["/sw-register.js","5ed6e1e5a53cf4075d7f92570f95c4eb"],["/tags/12-Factors/index.html","e04e2fae86489c7b0f1ceb7813977faf"],["/tags/Brower/index.html","71a68e5a4fe5357d857c42307bb74f28"],["/tags/Docker/index.html","4ed475dfa1b1d6dadf42c00b9ea89aef"],["/tags/ES-Module/index.html","c02052bc91b5e55966103320dd7bb041"],["/tags/JS作用域/index.html","a5a5fc78bc3c59c27df21ac19e053b40"],["/tags/Java/index.html","cf706c7506c01bf54429452d5918e01c"],["/tags/Linux/index.html","44670ff299ab04e8bfc1362a22c6d45f"],["/tags/OKR/index.html","ec1981b5d596bda33e144c1f55e268dd"],["/tags/PostgreSQL/index.html","2a9f72034da295145bde920949d78e39"],["/tags/Presentation/index.html","bfc239e0dbf2f0d66cbfd81d5f7badfa"],["/tags/React-Hooks/index.html","0e6597380eaa62ee3cbd45920a1a55ff"],["/tags/Serverless/index.html","2e5f646f72dbf11e8ff229d06f6811ca"],["/tags/command/index.html","4c5caccf017f316e4072ae3fefeb56db"],["/tags/css/index.html","019051fa965d24dd48b15c1687045aaa"],["/tags/dubbo/index.html","798f67b8679bdb4a68dbc0fee5ea99ee"],["/tags/git/index.html","f0549a8eb96b5c5f547f54a54ee5849b"],["/tags/graphql/index.html","09dc67ea82031f9e3a5c82779e9c9eb1"],["/tags/gulp/index.html","389534aec783fd98b53f75bb88b6f409"],["/tags/index.html","77cc4af733c45b3e0c92cb6a08c517c3"],["/tags/ls/index.html","735649465bfce0ad0bef6c7893cd501b"],["/tags/module/index.html","703c974efb33066e44a6f450bd995e29"],["/tags/react/index.html","7e340132d8639934c06a9d9260bc1b9d"],["/tags/service-mesh/index.html","bcec995143fe9c63f9e9b5c786134a5f"],["/tags/sso/index.html","9621a2a10ffd350e4d32eb8339f608d5"],["/tags/tick栈/index.html","c9f76c9972005a316c225bdda85cd442"],["/tags/windows/index.html","f91b2198a29aaa2ce828b4232ce9c374"],["/tags/万万没想到/index.html","aa697c586fd92df952b7c7a8e3895c31"],["/tags/产品/index.html","54b0c25443c10a8c23c23e290b06caab"],["/tags/人才管理/index.html","a4c329f5b2c8790b6110fadb4f968b83"],["/tags/前端/index.html","a938531a94d549ef9f02c886c030736d"],["/tags/动力/index.html","0e338fdd46ec3bef4a31edfa7122656c"],["/tags/区块链/index.html","1151d52acdb7c709c1edd1ef5121805f"],["/tags/名人/index.html","368134a6867d9c85dc6d73fb755f417a"],["/tags/告诫/index.html","1ed18ae439efbd1dcf79218c1cf20a24"],["/tags/埋点/index.html","888494fae4d71ad3ec43256e1ec9d3c4"],["/tags/学习/index.html","851a21b4a4cdd85b67a55625e89350f1"],["/tags/安全扫描/index.html","5923c8451512b2cc07acc000bb637447"],["/tags/实践/index.html","931579ba1e6b4bd19c622b6fba0fe8f7"],["/tags/工程/index.html","8bcc67aed51f69184dd2f4f69f46f3e0"],["/tags/开荒/index.html","6e9810b5f44fc43c1dd43aa62be020d8"],["/tags/心理/index.html","4027571b1d131e5426db82881681225d"],["/tags/心理学/index.html","030aeb770bf3e4793207ae707c749ad5"],["/tags/性能优化/index.html","0458315150fce750644b7e3420470d85"],["/tags/总结/index.html","c4c6aba28019cb95b37b9d8e579b9958"],["/tags/效率/index.html","5debb270616644cc123734573058432f"],["/tags/梦想金山/index.html","3906394904729a65c23f6fba506225af"],["/tags/欲望/index.html","b218adc9b9b05b36589729d6e145b154"],["/tags/生育基金/index.html","6339a13589b4a4371d75d163a69fc0cc"],["/tags/监控/index.html","c095ba9ebb7782fc9ff059629b9b3bc2"],["/tags/系统思考/index.html","74be50d99c978a48d9536cd907cf0fa0"],["/tags/编码/index.html","a4b541bd608e3a7f4099d1f520315177"],["/tags/职场/index.html","94ef738d4e7df39e514444d28c3a80d5"],["/tags/自律/index.html","e3889ef15c3136e3294614e3394e9ad2"],["/tags/规划/index.html","9aeab0dc868cfa3c93751be6d1e5820e"],["/tags/计算机网络/index.html","de7766fb5e1270dc4f5a3804e7f6805b"],["/tags/认知/index.html","f65fb58dcb5bfaec558d5ea671f0c2cd"],["/tags/诅咒/index.html","e76f1aeb344930e109f54110884d12f5"],["/tags/详设/index.html","f96382f6c1b45ad587b65a8ad4bf654f"],["/tags/读书/index.html","2e4a79a76218efd4502c98ce3becbbef"],["/tags/跨域/index.html","4b244e625fdc517e4a1bde10d90db931"],["/tags/软技能/index.html","d2d5051fe809e603f2f913e13eef910f"],["/tags/运营/index.html","e09555fdd4abee712763f90590369d1e"],["/tags/通用工具类/index.html","6024c1d5c221f5fca8817838c678a183"],["/tags/高难度沟通/index.html","e836ddf55745b27a297782a193db0584"],["/uploads/iron_man.png","597481074be4c96d1a42fb424e423527"]];
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
