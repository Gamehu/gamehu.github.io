/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/06/26/dubbo讲究(一)/error.png","983e73140ec606d9910f9cc84f88fe31"],["/2018/06/26/dubbo讲究(一)/error01.png","b409e8be4faee8bd05d88192b1686a79"],["/2018/06/26/dubbo讲究(一)/error02.png","f999888003fe99e75b65d0b4d46762a0"],["/2018/06/26/dubbo讲究(一)/error03.png","506e0b65e683681f0969e8872a72f933"],["/2018/06/26/dubbo讲究(一)/error04.png","9c3e3af19449a0499d70a7fe83fca407"],["/2018/06/26/dubbo讲究(一)/error05.png","a14cc7bbf98df95b171b4240b4be50b3"],["/2018/06/26/dubbo讲究(一)/error06.png","4dcd5b6c57f9771a01226b26ffeb0209"],["/2018/06/26/dubbo讲究(一)/index.html","b75e0931272a6989bd46c327f9f2d36a"],["/2018/06/27/OKR/ORK-KPI2.jpg","ed78753b4569aeb35032522811777af8"],["/2018/06/27/OKR/index.html","8ae909891651a0b13a85e885f1c7458f"],["/2018/06/27/OKR/kpi1.png","be5a43b25720af92da884e6641125327"],["/2018/06/27/OKR/kpi3.jpg","9d6dfd174cbcb99e14d1dbcfed5e0d74"],["/2018/06/27/三大主义要不得/index.html","c62ce8154bb2b4cdc88863f2d9a07f05"],["/2018/06/28/联系和弱联系/index.html","6ed78d51b79104f623d8921523c718bf"],["/2018/06/29/区块链/index.html","48686f89fa615acfdc7ab73485d64b88"],["/2018/06/29/区块链/licheng.png","4c3a2be2b92b01d1b54b7dcf4b67aa76"],["/2018/06/29/区块链/zhinengheyue.png","fbe0fa1cfc39d66e27b17acffdb22f71"],["/2018/06/30/Serverless/index.html","c29935d7ae18ca4d385dbc0abf95c25a"],["/2018/07/03/Service Mesh/index.html","f599db51d9aec63c912a5fb9d0bb4e55"],["/2018/07/04/12-Factors/attached-resources.png","4543871f00bd6354b099f23bdddb3ddd"],["/2018/07/04/12-Factors/codebase-deploys.png","3b40fe51c68cd87b19c79d061c0f9963"],["/2018/07/04/12-Factors/index.html","cdf2f0efbc4596c4894b7355ea1516a9"],["/2018/07/04/12-Factors/process-types.png","0c38412f773c32e7a6c0248c500df99d"],["/2018/07/04/12-Factors/release.png","8458878ded8446c6cfc0385236ba7fe3"],["/2018/07/09/常用工具-windows版/Listary.png","4264ffef32bcbab7427bd599473c5c83"],["/2018/07/09/常用工具-windows版/Wox.png","608a3dd90af9a318b55ece241345117e"],["/2018/07/09/常用工具-windows版/chrome.png","390181f5a6158fff287a501013dde4b7"],["/2018/07/09/常用工具-windows版/everything.png","c3c268be5bc5e50a0d1411209dca1702"],["/2018/07/09/常用工具-windows版/index.html","f2d225aa2377f3da7fccd8e265e72864"],["/2018/07/09/常用工具-windows版/md.png","095b40b4cf1c4480dc831b71f13cdb9c"],["/2018/07/09/常用工具-windows版/mouth.jpg","9af9255d415d87985559129c88ad0a1f"],["/2018/07/09/常用工具-windows版/screenshot.png","bddc06e11932d7d9c2428604996ec25f"],["/2018/07/09/常用工具-windows版/tv.png","d0955c7ef6bed227509b7cbbda164179"],["/2018/07/10/how-brower-work/attachment.png","3a72b26188e686ce65de01627918b825"],["/2018/07/10/how-brower-work/index.html","0489a291737b45ab22f0fb62ab9ed0d2"],["/2018/07/10/how-brower-work/parser.png","f639bc9fd8f76ca20ffe5282d4df1972"],["/2018/07/10/how-brower-work/render-engine.png","f8f98d029d2183485acec0f7a182f847"],["/2018/07/10/how-brower-work/structure.png","db9572bf8f9fccc78af6aa368f21e3e7"],["/2018/07/10/how-brower-work/style-rule.png","21b4dd7c2ac8310d7cf11cbbe7913a5d"],["/2018/07/12/权限/01.png","9014697311641888e2740fcbd170cd56"],["/2018/07/12/权限/02.png","7def6b351e10e7fbdb503660cd29271b"],["/2018/07/12/权限/03.png","fa109f73cc4a65b4b6a073b02b673bf8"],["/2018/07/12/权限/index.html","9bc5b6c0345985144de65563fbc5ae0e"],["/2018/07/17/项目脚手架/01.png","a75ac2734295b512ea2d28c6cf1c227f"],["/2018/07/17/项目脚手架/02.png","0a8c0292697c932ccc302853f74c0c12"],["/2018/07/17/项目脚手架/index.html","75bd9aaf7409b2fcbba32ad7af4123d0"],["/2018/07/24/你妹/index.html","d036320b3946206e18711fe3ef7533f8"],["/2018/07/24/你妹/yimiao.jpg","186338d30c8b51fc659a55c2ab9f3e91"],["/2018/07/24/你妹/yimiao01.jpg","ea800465c55bfdd569467b3874b9c5f3"],["/2018/07/24/你妹/yimiao02.jpg","6f523faa2db5332703da65feb1eee7e9"],["/2018/07/24/你妹/yimiao03.jpg","2a001a69ec10a65f8b960b059b192395"],["/2018/07/31/详细设计/001.png","acb78a1a9089c67d395425bd2a8ab1f1"],["/2018/07/31/详细设计/002.png","00c3f08f649462948d5eca7a7287079d"],["/2018/07/31/详细设计/003.png","976ea2239edfbb904f301c0b6fe4a691"],["/2018/07/31/详细设计/004.png","ee7728dbccb3c998729b3b48b43b5c75"],["/2018/07/31/详细设计/index.html","8debce3f429dd0989addc0c4802b8a62"],["/2018/07/31/详细设计/scrum.jpg","09b07415347fdb92f766ae5978f2d974"],["/2018/07/31/详细设计/scrum_framework.png","6b00e3faa6fb3ac6c141561439b648a4"],["/2018/07/31/详细设计/详设.png","a9e920db52c424cbeb91e5a0143b6b06"],["/2018/07/31/详细设计/详设1.png","46f4c3ba679d1a5848edcc3f4656c480"],["/2018/07/31/详细设计/详设2.png","1230cd1d4b5d30fa4af7fcaec569f03e"],["/2018/07/31/详细设计/详设4.png","d9dc822cf5897759f329f3c58a77ae44"],["/2018/07/31/详细设计/详设5.png","3f34a5cea9e767904a93245ffe3e6516"],["/2018/07/31/详细设计/详设6.png","6521e56bc3222071ae6dfcc848f549d9"],["/2018/07/31/详细设计/详设7.png","b5b9b62fa43f64b45adf220c074490fb"],["/2018/07/31/详细设计/详设8.png","2b8d53424e8685f8f2b4a91f88dfa4b6"],["/2018/07/31/详细设计/详设9.png","0c540d7e064cd79b50bb38838bd81f1b"],["/2018/07/31/详细设计/详设模板.png","cafe1df62f8c2dad4297d10455de0098"],["/2018/08/01/Code Review/001.png","3045015f9486cc7eb32e3140fd4b4af3"],["/2018/08/01/Code Review/002.png","9c99885ca76b818e2ee1051a36cf7979"],["/2018/08/01/Code Review/003.png","bd3184325be5a6771350b82082572a62"],["/2018/08/01/Code Review/004.png","98a01393e4709c70338c81cec07d383c"],["/2018/08/01/Code Review/005.png","0d3525ea3cdffd3b1a231c502b3599bf"],["/2018/08/01/Code Review/code_review_hierarchy.png","f3566cca5e69c433b8012ea79cb6793e"],["/2018/08/01/Code Review/cr001.png","9d90e0d4f0a6582259eac71268483fe9"],["/2018/08/01/Code Review/index.html","37ec471e0625a17273fa23b149b10aec"],["/2018/08/01/观看之道/001.png","fdf5226dcd881510644e3e298eed23e9"],["/2018/08/01/观看之道/index.html","b9a521b6673d44e807bd756bff8ee6c8"],["/2018/08/06/GraphQL/index.html","7bc48e6754da991adacdd712b5d090f4"],["/2018/08/09/乔布斯/index.html","b968ccd0f27fe83219a20ad2bf90a592"],["/2018/08/11/中美贸易战/01.jpg","18956b485b43ec973520bac8c1ea1106"],["/2018/08/11/中美贸易战/index.html","2a3a1b29e4c959353081c986b1935972"],["/2018/08/14/自律(一)/a.jpg","bb496f75155a190fa61efeeb4ef8375d"],["/2018/08/14/自律(一)/index.html","34ff6dfacc7e1dec114aab95e3cd52ae"],["/2018/08/15/书方法/index.html","d918f3b840b75f6fb3d61c52237fec03"],["/2018/08/16/前后端分离/index.html","ae5bebca1c7ef223e4296139cd3d1e25"],["/2018/08/17/温伯格的采访/index.html","d0138f3c9a891a1da6cbe87661413b02"],["/2018/08/18/React一点点/1.png","788aa4e7432f55de8068baabf9b1c1d6"],["/2018/08/18/React一点点/2.png","db397331213db26c2fcb73c39e1d18bb"],["/2018/08/18/React一点点/3.png","3e47d06abf7183cace60a2625d459a40"],["/2018/08/18/React一点点/4.png","80d98b3eecae69788ef6a970d4bcab43"],["/2018/08/18/React一点点/index.html","9b5954fc16e65766bd2b6a530a4899f9"],["/2018/08/18/React一点点/one_year_of_react_native.png","d9ab0a371c3d15bc560712107a13b31d"],["/2018/08/19/同理心/index.html","df3490cf81593a93f4c30bceb2408afb"],["/2018/08/20/跨域/a.png","6a474e87058f8643f99f2ae832bc0d26"],["/2018/08/20/跨域/b.png","f63ff3ece1d4872049cd27443433343e"],["/2018/08/20/跨域/index.html","36ed59ca159017e127f5907093f5cd10"],["/2018/08/22/生育基金/a.jpg","4093e4ac6680c631fb84911647384779"],["/2018/08/22/生育基金/index.html","86eaee7fd22ace6259e1399795d931aa"],["/2018/08/27/计算机网络/index.html","312f16c3f4db5050614be0672142a0ef"],["/2018/08/28/我希望我是猫头鹰/DlpAaqOWsAIz97B.jpg","a3098bc0ef05b1b02bc0a7507eab701f"],["/2018/08/28/我希望我是猫头鹰/index.html","e5954ea3ca0c10e6115cbfb658d0ab9b"],["/2018/08/29/职业层级/index.html","b68c7a2edf83a11f92a658fb019f2f4c"],["/2018/09/07/逃避/index.html","731ef53208c55cd8ab41bdd6c35485c9"],["/2018/09/10/梦想金山-人物/index.html","647d78996e51035dac94be3807e7dcb3"],["/2018/09/11/CSS Triggers/css.png","0a190dd4a1013bf8d0b98053cbd680ff"],["/2018/09/11/CSS Triggers/index.html","368bcf83cd09a75be285fdcf9a0a2876"],["/2018/09/11/CSS Triggers/render.png","073fc75bb371636a85d32564c22e1da4"],["/2018/09/11/梦想金山-运营/index.html","28b0cf08afe94539c2ebf1dddf523e28"],["/2018/09/12/梦想金山-成长/index.html","2d7efdfd182420eaf38d43af38a3dda3"],["/2018/09/20/梦想金山-优秀的程序员/index.html","282c5eac1b736fbe04b5c5f31acccda4"],["/2018/09/21/想金山-产品王道三大法宝/index.html","0b89a0fef9b0fbec09aaf71b7d1806c6"],["/2018/09/29/敏捷自动化测试/index.html","cf8074b58e028dfb1d3fa2373d76631b"],["/2018/10/13/署/index.html","01bc8a3594a7f1a0bcd7802f3eae6e01"],["/2018/12/26/怎么让工作更加高效/abc.png","d5280acab6dc7d81c59d11fd416f9852"],["/2018/12/26/怎么让工作更加高效/clear-glass-with-red-sand-grainer-39396.jpg","406658f78fb13bae246afe0ff3406baa"],["/2018/12/26/怎么让工作更加高效/fast.png","1974c91bda98b157ff1e6c8ee9ec5fb3"],["/2018/12/26/怎么让工作更加高效/index.html","5fe2d92aa02593119740ffe90429c844"],["/2018/12/26/怎么让工作更加高效/信息源.png","fa74e30294374a1582fab63c8517d59f"],["/2018/12/26/怎么让工作更加高效/康奈尔笔记法.png","7fdac4f3a6d96068a1dedb06b826f326"],["/2018/12/26/怎么让工作更加高效/记忆.png","b8a79b4ba2e9716e23e2e1778f050e48"],["/2019/02/15/软技能-承担责任/index.html","f433e6c23e26aa7b33542c78ca0d04bb"],["/2019/02/19/2019年开始/gratisography-421H.jpg","6923414ca170da549302f8a1d06046dc"],["/2019/02/19/2019年开始/index.html","9929fe7e96bc459502470cccc3470ad3"],["/2019/02/24/前端小总结一下/gratisography-sad-bunny-thumbnail.jpg","040fff9d1f05aeb0de13a151eba00f2b"],["/2019/02/24/前端小总结一下/index.html","08871086daec5a92ba3965cc90167cee"],["/2019/02/25/合代码de内心独白/Snipaste_2020-02-01_23-27-25.png","d4b3f54c0008ea0ade11b7eb5721c711"],["/2019/02/25/合代码de内心独白/backend.png","1b0bad3bd90732e255ee6e66b78861e8"],["/2019/02/25/合代码de内心独白/frontend.png","a4be98bc522ac8deaacb41ce60eadf69"],["/2019/02/25/合代码de内心独白/index.html","c8aea0a7a451f67cd4747fa0eaa500b0"],["/2019/02/28/几个版本之后/index.html","8663e9d68ea390bac8254fc02ba7b848"],["/2019/03/04/系统之美/index.html","7883cc8b9176442d614164eb29c5a995"],["/2019/03/14/中间件到底该不该用/index.html","75a6fdc7c45b7d211b1ed02a69a2d0ea"],["/2019/03/15/git分支规范/1.png","354af12878fe9945a6b42d2081b814a2"],["/2019/03/15/git分支规范/2.png","d93164a6f07fc45396b289cffcf65262"],["/2019/03/15/git分支规范/3.png","fe99cad9ad35dc18eef0673019620e1d"],["/2019/03/15/git分支规范/4.png","8a7ec0652e94fcf4147d60c13c1472b0"],["/2019/03/15/git分支规范/index.html","fd20315cee8efafa9e496b20e596cf10"],["/2019/03/18/前端-通用工具类/index.html","d116bce3b203c1a13410bc52c6b10c52"],["/2019/03/22/React 条件渲染/001.png","6b77ebb3180240b89f993e999be51e0d"],["/2019/03/22/React 条件渲染/002.png","1c47be562ceb0e1cc07fd00d95d01856"],["/2019/03/22/React 条件渲染/003.png","2f32ab2e4c7151045146670bad6070e6"],["/2019/03/22/React 条件渲染/description.png","737a592368f3d58a01dcff6e668a39bb"],["/2019/03/22/React 条件渲染/index.html","91e3e4c87fde1c0295fdbf294d09da32"],["/2019/04/09/React Lifecycle/001.png","8d44319291d5accde677f6481efb2dfd"],["/2019/04/09/React Lifecycle/index.html","aa16e19dc7dc081160649f4a0ac351fd"],["/2019/04/14/怎样保持动力/index.html","1584f7445a1f79f897bef81263653726"],["/2019/04/14/怎样保持动力/panda.jpg","66c67a312b4309df526cb5620f680e39"],["/2019/04/17/搜索/001.png","cb733d2814da3e1bb7ff9fb251d65e07"],["/2019/04/17/搜索/index.html","22c69f5b24ec3ba49a408595720fb411"],["/2019/04/22/啥时候用Redux/001.png","5d07202de1a4bf7386d954fe20ddcff7"],["/2019/04/22/啥时候用Redux/index.html","a5630ac059895ef522d8e081908daaa1"],["/2019/04/30/前端编码规范/index.html","b9be85ead864bf050b544abd5437eb73"],["/2019/05/15/Linux Source命令/index.html","e90efe5fddc5fe79aec09b6405603953"],["/2019/05/15/Linux Source命令/kcptun.png","7a56e9c56ca5912f133336981885d945"],["/2019/05/15/Linux Source命令/source.png","a9503d862f99de28e0be879451e7c476"],["/2019/07/18/始于愤怒必终于羞愧/index.html","ba7b6b3be7bc73482f7e28e0040b8f72"],["/2019/07/18/自由成长活动/a.jpg","110eec12a9b5c721cbd2b245c249ae97"],["/2019/07/18/自由成长活动/index.html","320aec562a6ed71d69edbb8ecf890a29"],["/2019/07/24/浏览器渲染/index.html","7f4bd3e9cfb7dd97c931076a7fdc4804"],["/2019/08/02/写的好看一点/index.html","82a34f4cc83521b53f117c0eaf292484"],["/2019/08/05/ersonal-Growth/index.html","52091d88afc0a505ff563e37041dca2a"],["/2019/08/09/编写可读代码的艺术/index.html","df196b869147e29623d89ec1de027e98"],["/2019/08/19/吃力不讨好/index.html","1389ac972fdfb2a05df520d003774e9e"],["/2019/08/19/吃力不讨好/tom-gainor-ABjAtsf3XDA-unsplash.jpg","d41ccafb395c7ab668924681dedb2f1a"],["/2019/08/20/git实践/boat-164989.jpg","0fa191919624a2991de48d5a77b64511"],["/2019/08/20/git实践/index.html","74b99bc2d25da136f058e0ae55b43135"],["/2019/08/20/git实践/reset.jpg","96a702a3d044d4545b39ddc74f806947"],["/2019/08/21/提高效率/1.jpg","00fb735c216356d4cbfd91280fecfec3"],["/2019/08/21/提高效率/index.html","c9901d259f18b4ebd14b9940f204f053"],["/2019/08/22/How-To-Master-A-Skill-In-A-Short-Period-Of-Time/index.html","6eb0f9254ecb105a82dc8c336095c982"],["/2019/08/23/根因分析/image-20200306121924405.png","be3f7b12bff3c84275b79a3a57bf8e92"],["/2019/08/23/根因分析/index.html","73204e16f59c0ef4414baf518cfb0a74"],["/2019/08/27/作用域/index.html","ec9cb84d53a624de0dd9d20dd7ea7dd5"],["/2019/08/27/如何做职业规划/0.jpg","d9db48fc1111f6081203171e637aafb8"],["/2019/08/27/如何做职业规划/1.jpg","d0b3d3953d6a5f082cde2e41fed62d39"],["/2019/08/27/如何做职业规划/10.jpg","91abde28dac6f27183acdfbb87f5c47f"],["/2019/08/27/如何做职业规划/2.jpg","a1f21242388e7015fcb322ca9caad519"],["/2019/08/27/如何做职业规划/3.jpg","b5241e92d7126b2b159bd826a344078e"],["/2019/08/27/如何做职业规划/4.jpg","a79b14eed4a94a72dd82342dcaf9d673"],["/2019/08/27/如何做职业规划/5.jpg","1f3b77191a4d5b12726d9515543a3a88"],["/2019/08/27/如何做职业规划/6.jpg","1d55e8d9daec30e005ac39b59f6aa4ba"],["/2019/08/27/如何做职业规划/7.jpg","f0f79816552963c4e69ab95ad7859743"],["/2019/08/27/如何做职业规划/8.jpg","b564159edc3eae6206035e12593871fb"],["/2019/08/27/如何做职业规划/9.jpg","4c2c5e23128bc47c3b74bc123873eef0"],["/2019/08/27/如何做职业规划/a.png","e13fc0c9df80256a567be5989a98d6fe"],["/2019/08/27/如何做职业规划/excel.png","ea15fe6ba68e3a6084eb91fed48911d1"],["/2019/08/27/如何做职业规划/ice.jpg","a10af0fba8194354b105ad17192fd9fe"],["/2019/08/27/如何做职业规划/index.html","176558f6fc68718beb154cf0d686b626"],["/2019/09/03/Lint笔记/eslint.png","711be206c785f979ba09924b119f5b99"],["/2019/09/03/Lint笔记/idea_eslint.png","75caa9929787729109b8ef6a676c540e"],["/2019/09/03/Lint笔记/idea_eslint01.png","58c40aab2d4062e06d39581eea2c7bf5"],["/2019/09/03/Lint笔记/idea_eslint02.png","56522e6747a1107c9fe88704f09d89e1"],["/2019/09/03/Lint笔记/idea_eslint03.png","38dd71c105bb6673f07c002fd637a79c"],["/2019/09/03/Lint笔记/index.html","12569bfba53ef908fa8d5329fe86e1a7"],["/2019/09/06/工具/index.html","c6acb21690e5350745bfaf6b9040ea8e"],["/2019/09/06/工具/tool.png","f7370a970d9daaf4974ba04b9b2cf330"],["/2019/09/18/底层系统/index.html","2274598c7c6f7db25554d003378b9da8"],["/2019/09/18/底层系统/lost-1605501_1920.jpg","1a89b2ab789e84acac6d7634a2217b0c"],["/2019/09/20/Chrome Tools-Sources/0.png","cea109bb0aea626e16ab9e5ad185a545"],["/2019/09/20/Chrome Tools-Sources/10.png","23e24e3d3e023f9a6f1567cd9e64d884"],["/2019/09/20/Chrome Tools-Sources/Inked0_LI.jpg","6e1fed9af11d43d4555c47c3f1e15d88"],["/2019/09/20/Chrome Tools-Sources/breakpoints.gif","6618b32e542fdc94451381c861aa4b0b"],["/2019/09/20/Chrome Tools-Sources/debug.png","fed470be88a2d30f1639ff62a116b0ab"],["/2019/09/20/Chrome Tools-Sources/debug03.gif","a0adde7ab7c004556453e3d2c6cfc15e"],["/2019/09/20/Chrome Tools-Sources/debug04.gif","ec2d409883ed5786a9926e5953150a9e"],["/2019/09/20/Chrome Tools-Sources/index.html","787fb2b2180dbe60f28d7fb4905f63ed"],["/2019/09/20/Chrome Tools-Sources/network-overrides.gif","ff1d2802c2f68661d4f4156e6ab899ab"],["/2019/09/20/Chrome Tools-Sources/point_types.png","adf419c2a4e483b9d2c7fa03e2e11c6e"],["/2019/09/20/Chrome Tools-Sources/snippets.gif","5fe6a2651d5fe7303e915469d5be04eb"],["/2019/09/20/Chrome Tools-Sources/watch.png","2a88332a263e1f26124234a698b0affa"],["/2019/09/20/Chrome Tools-Sources/xhr.gif","67be6ec05ac15ee2ac7f2485f0048e55"],["/2019/09/22/怎么做好Presentation/1.png","e76f46042bcdfefd090cf7652593262e"],["/2019/09/22/怎么做好Presentation/2.png","e7930b8620912e0c537c1e7e7b3fd79b"],["/2019/09/22/怎么做好Presentation/3.jpg","0a9fae0f6306ad68f0916d55b0b235ec"],["/2019/09/22/怎么做好Presentation/index.html","3264247ae8c13e79f9c8aa0d2005982a"],["/2019/09/23/难度沟通/index.html","e39f1e90aace59c75bc93e08b0b0b106"],["/2019/09/27/安全扫描/1.png","2ce4c5172b53b01cf13319b3f064adb4"],["/2019/09/27/安全扫描/index.html","ad583db1009f90284c368722fc1264bf"],["/2019/09/27/安全扫描/shield.jpg","b1665747a41a569ecd1781e8e53c729f"],["/2019/09/30/抉择/index.html","c8050eba99082f1a137eea08483efc44"],["/2019/10/08/个人发展战略/0.jpg","53fa8bcb7a37f8743e7efff9bc72d2ca"],["/2019/10/08/个人发展战略/index.html","1075a609d992a71b2335dda3f228fac9"],["/2019/10/21/组织化人出管理的四大领域/1.jpg","ac2291fd73cfb1d8261c9ae50e2c858f"],["/2019/10/21/组织化人出管理的四大领域/2.jpg","9c34dd7fba9d09e2d2106b4e9b312e7c"],["/2019/10/21/组织化人出管理的四大领域/3.jpg","255a75b776ae1f10f7e7230132019dd2"],["/2019/10/21/组织化人出管理的四大领域/4.jpg","db21b8d4b39324595b00040b15b9e5c8"],["/2019/10/21/组织化人出管理的四大领域/5.jpg","8da15f13e6e261617403b26f2f37d11d"],["/2019/10/21/组织化人出管理的四大领域/6.jpg","bf2259c4ad13dc6e7bd249c23dfb29c2"],["/2019/10/21/组织化人出管理的四大领域/index.html","33963450d46499eaf529567f412ce343"],["/2019/10/21/组织化人出管理的四大领域/mohamed.jpg","ada8193ad8157ce96a79a3f80c94608b"],["/2019/10/31/延宕/PM Scare 3.png","22fbea492692c4e00779006db1281307"],["/2019/10/31/延宕/Snipaste_2019-11-01_18-27-35.png","9e823f1b4e0fb2f2eb7dd21ab8433f36"],["/2019/10/31/延宕/a.png","3488bba0b7c39438c56f6069a93edf16"],["/2019/10/31/延宕/b.png","9e97443ec0bb51957555ec2da59831e0"],["/2019/10/31/延宕/huaiyi.jpg","2475f33a549cefcf97ca51a75eb1568f"],["/2019/10/31/延宕/index.html","fc9d0320ba1995d047927ef7067f6d28"],["/2019/10/31/延宕/procrastination_brain.png","fffce00062e17dfc840b4e2fd03466b6"],["/2019/10/31/延宕/sikao.jpg","c965321239a14efc351ec8340e3fd2bf"],["/2019/10/31/延宕/smart.png","f6ff32645a9eef744138a46225a3b5f0"],["/2019/10/31/延宕/target.png","c804fa8c6f282cf1ff3134e86447007f"],["/2019/10/31/延宕/wushen.jpg","3450abdfb0712bee7c9c3be7ae5c5886"],["/2019/10/31/延宕/xinli.jpg","c2043ae517d80a092935cfe59914ccb5"],["/2019/10/31/延宕/ziwo.png","ad02bc74f065aa3314e82294801eae77"],["/2019/11/03/斜杠/dream_big.jpg","7ef69571cf8c5ec0f4be1de476c95046"],["/2019/11/03/斜杠/index.html","7f0bb2f18a77495531dc4ff5782b98d8"],["/2019/11/04/前端-性能优化姿势/index.html","eb90d35661fb682e56103537187dd3fc"],["/2019/11/20/理解一个新事物的方法/index.html","097e8352e95349b42ecd8626823df31a"],["/2019/11/26/Docker 一点点/index.html","3fc640f754e6d1e11c3bc48de849b246"],["/2019/11/29/postgresql(1)/1.jpg","3ebd3fe117b33484b9c240b868fcf89e"],["/2019/11/29/postgresql(1)/index.html","d49c514d8a4ff64448aa4b5045e5d4ae"],["/2019/12/27/SSO实践/florian-olivo-4hbJ-eymZ1o-unsplash.jpg","f68f149ec718d47dc96ac0f31d76f9ab"],["/2019/12/27/SSO实践/index.html","f84b78101f2625bf4824868068207ed1"],["/2019/12/27/SSO实践/sso.png","f47780152fbf5f611254032bce5bc469"],["/2019/12/27/SSO实践/whatis-single_sign_on-h.png","4288e42aec7667b64bd6619ec0e20904"],["/2020/02/03/领导寄语/a.png","4eba4b0019c42edd8e67c37890556745"],["/2020/02/03/领导寄语/index.html","089e15fd5425758894e6b9114334f717"],["/2020/02/13/Root-User-in-Ubuntu/index.html","265fa82bbf9e68897fef09300266f1a3"],["/2020/02/22/JS Modules/a.png","2e95ad7021bd14059189e93620f5446a"],["/2020/02/22/JS Modules/index.html","165afe867f05059ba28711d89bbfd5bd"],["/2020/02/23/ES Module/1.png","b41f0f53c93706e7a1b3549ea1631164"],["/2020/02/23/ES Module/10.png","ac49d9570518f08cb1785c5798616162"],["/2020/02/23/ES Module/11.png","cebd62404a0971c8c5bc422c11ca71e1"],["/2020/02/23/ES Module/12.png","63475452cb0cb3ff9b4bdadd344e3a2d"],["/2020/02/23/ES Module/13.png","3da06f20d11975c8e1042fe924a5f2ac"],["/2020/02/23/ES Module/14.png","cfe77e645019b8e6a1a8e49aa8456993"],["/2020/02/23/ES Module/15.png","8a1afd86f2e76e589213f0bd347affbb"],["/2020/02/23/ES Module/16.png","383a8aef130fff2966ce6cf82c6e27ab"],["/2020/02/23/ES Module/2.png","792988e6e2d51bf4ad0d5dc0cc288de9"],["/2020/02/23/ES Module/3.png","fb7ea7e9dfbb17db00a564543e71ed6d"],["/2020/02/23/ES Module/4.png","951dbbd0f1d2a2e88ed53a92311a65c3"],["/2020/02/23/ES Module/5.png","d2a239abdec50e69e1d9c651c142f6c6"],["/2020/02/23/ES Module/6.png","623e73a95ad3084f8f838232dea475c4"],["/2020/02/23/ES Module/7.png","f2ed1109168c320865df7e0ce815076c"],["/2020/02/23/ES Module/8.png","ba95132bf5eca3edf63835a4b66f8054"],["/2020/02/23/ES Module/9.png","1556eebd3e1ed0f707308f982844307d"],["/2020/02/23/ES Module/index.html","d61a0512d4319fa4ec1434b29231db1a"],["/2020/02/25/React Hooks(一)/5LbsY.jpg","33d16973e2c55f0c32d1ce2b098fb563"],["/2020/02/25/React Hooks(一)/a.png","eef33c7ded4da9ead300e81df916c752"],["/2020/02/25/React Hooks(一)/index.html","2618f6314a05f9c44eedf3fc7af62b99"],["/2020/02/25/React Hooks(一)/lQQX7.png","2f8cd76ef7fb42ad259a7bb871c49431"],["/2020/02/25/React Hooks(一)/nTmNe.jpg","37164c8629799476d155323d8e089ef7"],["/2020/02/25/React Hooks(一)/title.png","fcdb2b3e3298441739c64785516b20c4"],["/2020/02/28/Gulp/Gulp.png","9de4905baea7e42f724311277db91f56"],["/2020/02/28/Gulp/a.gif","f3945f68b68e945e05b18d1702038a1c"],["/2020/02/28/Gulp/duplex.png","1fb11f77cc52d18745cc63f239433a9f"],["/2020/02/28/Gulp/gulp01.png","80ddc065affe34ac89de8cc4aabe153c"],["/2020/02/28/Gulp/gulp02.png","fc70c5d8498c5366234f84289b0d0a34"],["/2020/02/28/Gulp/index.html","198dab4982fcdc7ed8432a63a1d7bc8b"],["/2020/02/28/Gulp/stream.png","e3f0840520fdccdbcac20a02a9ede0a1"],["/2020/02/28/Gulp/stream01.png","0677ed3e1fdb8555be94415b2e14d12d"],["/2020/02/28/Gulp/stream_cc.png","a3639aacd60f11dc19646a70ec8f72a3"],["/2020/02/28/Gulp/transform.png","aa59e763035e1705c549d5a350b27456"],["/2020/03/01/Module-bundling/index.html","a6b19f36f6a7ec4545cde819287a33b6"],["/2020/03/06/tick栈/index.html","c42b935a09d6a75082a2c82360f9faf8"],["/2020/03/22/Java 8 Stream/apis.png","f2682ed9b55c02d20c2ef36084c734e9"],["/2020/03/22/Java 8 Stream/computer-keyboard-34153.jpg","a21567f5eb1c22b9acac4fc7610f0caa"],["/2020/03/22/Java 8 Stream/index.html","a30d3139e3531eb5a39f2eae35fbc5fe"],["/2020/03/22/Java 8 Stream/java-streams.png","d07fa62f5019549fc66488712ce77a82"],["/2020/04/21/ps-grep-top-free/image-20200422105439799.png","c5d4319b76d345dc6565fba720a9c821"],["/2020/04/21/ps-grep-top-free/index.html","c07d280c333188ffc6e4c58abe9a56ef"],["/2020/04/21/ps-grep-top-free/ps.png","171c626afde8d62a3760df07da09b136"],["/2020/04/21/ps-grep-top-free/top.png","15afd3db2694cab0e9a70ac4f2c7e962"],["/2020/04/21/ps-grep-top-free/top1.png","dcbfe03f6ebc67575b129d02249f4d04"],["/2020/04/28/前端埋点(一)/index.html","95832d3bf94b3450b3723f1a1142a61f"],["/2020/06/02/Linux ls命令/1.png","d6a5b91f6d1860ffc537e45501fe3f5a"],["/2020/06/02/Linux ls命令/2.png","78cc5f7fa4afd6ee49dc0f0a84483dcc"],["/2020/06/02/Linux ls命令/3.png","af4b081316b3a70b35831c4671133542"],["/2020/06/02/Linux ls命令/4.png","fa61e8e10e016a76af76debfc24de1dc"],["/2020/06/02/Linux ls命令/5.png","ec4b9158d25b321320bd3665d28e2e91"],["/2020/06/02/Linux ls命令/6.png","cabbae3ddb99bf7ef321725efaca2daf"],["/2020/06/02/Linux ls命令/index.html","b9882f603d9da05a62cab0144de8dd8b"],["/about/index.html","bad9f0f3786fa29486768dcc6678679e"],["/about/index/wechat.png","17eebb936e0c872da01c9e402843eb82"],["/archives/2018/06/index.html","0639d7da13deda3671dfd88ce677aa87"],["/archives/2018/07/index.html","396b437a1e3f72104578d50e07810772"],["/archives/2018/08/index.html","e6d5282070b42b06f487ed8b18df2c32"],["/archives/2018/08/page/2/index.html","23678303d92eb2c018988cb049edcc8b"],["/archives/2018/09/index.html","b7e18d52800a388029e13bb424576116"],["/archives/2018/10/index.html","a397341cef50ab264f30ab869af894c5"],["/archives/2018/12/index.html","6f9badbceb5b0c982511bf2990c46284"],["/archives/2018/index.html","9075fb94373185f989859204ffba65d6"],["/archives/2018/page/2/index.html","ec9dff9c9d50ca26e2d1acd32a0cad88"],["/archives/2018/page/3/index.html","5e25f83a84fd683d3028545acb1a9011"],["/archives/2018/page/4/index.html","f329ac0674d83a9d65726b84726ee8e8"],["/archives/2019/02/index.html","d4178533b6e22268d3818188650eab40"],["/archives/2019/03/index.html","51f58fa29f999aa81725078fe63a5bc5"],["/archives/2019/04/index.html","f21d95402f9ba28ea33b70ea2b053f75"],["/archives/2019/05/index.html","4bfee2f9f71fbf0c498cf9714ab92081"],["/archives/2019/07/index.html","411851635bd8b3e55013e03cf913da3b"],["/archives/2019/08/index.html","7554dbcf1b43a0d236724cb70adbb2cc"],["/archives/2019/09/index.html","0f59ad753b77a7edf2255c60f2bbc12f"],["/archives/2019/10/index.html","ff5b3d527d126a3ce93a4daf0f479c2f"],["/archives/2019/11/index.html","bb2fe04d23efd741e02b5e5c3c064729"],["/archives/2019/12/index.html","3a512327f8867cae0676c7c10128a3a2"],["/archives/2019/index.html","f35d432ebf80a811d0395e819606bf69"],["/archives/2019/page/2/index.html","6b7759def4942caa503abb91b1370eca"],["/archives/2019/page/3/index.html","b7b65ebf10a44d46228aac8e443bd692"],["/archives/2019/page/4/index.html","96b35b21d489072f404c92bea68b0143"],["/archives/2019/page/5/index.html","48f43db989e04ceaf5043bf9fa852b82"],["/archives/2020/02/index.html","6a93a81c358f4ffb5dc44af378025af6"],["/archives/2020/03/index.html","a740585dec89f52de19f7b9e63696d6d"],["/archives/2020/04/index.html","53c38b8aaac1881a4f8f0ebe0d984d11"],["/archives/2020/06/index.html","1780d68974088459bf690b69a745ede9"],["/archives/2020/index.html","a700c43f247f0ddfa59984c8608dd7ce"],["/archives/2020/page/2/index.html","69ff610a17fd333b87fd3cd613e120fe"],["/archives/index.html","f46ab82053598662c2d68ba382fcb8d5"],["/archives/page/10/index.html","b82885b2115872f39166746d0c8cb433"],["/archives/page/2/index.html","880354f49fd1139d2dbc1c01836f2e4f"],["/archives/page/3/index.html","41ae88b4df4b8fde32fbac52b54d18db"],["/archives/page/4/index.html","742efe19b3071b0129c57ccc5e8819a9"],["/archives/page/5/index.html","1f0a3a2d5f8a7d0c32817c581b79f400"],["/archives/page/6/index.html","5b37c27c1a724e8bd48225d86fc3bfe5"],["/archives/page/7/index.html","851a3c9040e647b18ecb1eea9f39f8c7"],["/archives/page/8/index.html","fd2f3d94f3e32f18e814ac999cf49e0f"],["/archives/page/9/index.html","fd1ab100c1a134e1742be99978015648"],["/categories/Linux/index.html","b5b73e6290d349a8233ec6890fff6c12"],["/categories/index.html","9e58aa2d9c948e0419f362f521b1a2af"],["/categories/中间件/index.html","b0b1370ce0c731022ad8e2b3c4e301d2"],["/categories/前端/index.html","631ee83ba18d98889c0ee013cb303391"],["/categories/前端/page/2/index.html","6ec83a964a97cc5fdcd3d856ac0f34a6"],["/categories/圆桌派/index.html","73d5693fa5ca1f26b3a54f93e36fc31d"],["/categories/学习/index.html","3ba913cfae51d5a795f2a49cff5612c3"],["/categories/工作/index.html","e942b050ea0c01fb6bc73cfe950af938"],["/categories/工作/page/2/index.html","933bbd310ab3435e1be28fa95748c4dd"],["/categories/工作/page/3/index.html","edc031f45c6ab7114aabef5c7875222a"],["/categories/工具/index.html","88bae946ead8da8a7333f9c247c81366"],["/categories/工程/index.html","7bbe0d175f370e692766e0782bb69b46"],["/categories/成长/index.html","91d57b7f551650727aba610dcf33f8d3"],["/categories/成长/page/2/index.html","7ef51ab16a419d3f831733878999d2f4"],["/categories/敏捷/index.html","9c2b9077ec6255e2dc8ac6dd2de2df10"],["/categories/浏览器/index.html","ff951fb645996a015bc60129c268b77a"],["/categories/滚粗/index.html","5c558a0f643256717eb7445556ccef84"],["/categories/瞎扯/index.html","f1e7683dbcd3cadacd535570036a630d"],["/categories/职场/index.html","59f86e38dc7e68fc07baf398cd2e0e94"],["/categories/读书/index.html","d255e28e56c5342a96de8de0f5a907d6"],["/categories/读书/认知/index.html","3dbe7fca682b422905b185a6ce6ea094"],["/categories/部署/index.html","93b44f441e187671035e261b1c87b7a4"],["/categories/闲扯/index.html","e9d1bb695ce61b4bdbf18253922af4df"],["/css/main.css","038ec66c35844680fdc2465ee18c2a8d"],["/guestbook/index.html","7186cd307ce58a6f5b350564f7f1ac42"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5bcc29773ab951ba25e3bc7c8760a382"],["/iron_man.png","597481074be4c96d1a42fb424e423527"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","429218f46c22e9aabadfb8a653cd4c2d"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","6704fc106dfae3f71064a9863f5572c6"],["/page/2/index.html","4d62cd0110e98d8702476f0ded7d50b9"],["/page/3/index.html","c94e1d9f60f7dde39ad5ca133ee8b4a3"],["/page/4/index.html","76eefed1647a9e46cb56f3b9776411a2"],["/page/5/index.html","347f1a97184cf03d69a49b272de9e8e1"],["/page/6/index.html","7269fd6624e105324987e4f9df9d3b93"],["/page/7/index.html","100b50bb9c164e05b7693012e3a83c25"],["/page/8/index.html","c35799613c15df23efc279cd3cb8b790"],["/page/9/index.html","41c98f010f21ba0955fb889616ff3b9a"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","b59f98807d0fba69b9433e7e60afc4f5"],["/tags/12-Factors/index.html","03785e9f2222919783b3f972b1e7d1ce"],["/tags/Brower/index.html","2cddfb29a973c2812a7bb2a6fcf4ff66"],["/tags/Docker/index.html","96eb64cfdd67e8c8005db7d278f8e24e"],["/tags/ES-Module/index.html","ccb44759168cb30ab34edc67eb143293"],["/tags/JS作用域/index.html","6b0806c93beb5506f5e7b19879e05a86"],["/tags/Java/index.html","170541e3a05383c7914f0002fbf4abea"],["/tags/Linux/index.html","f89e3e7181e400383d1229d42c24cf4a"],["/tags/OKR/index.html","df740fd5a40d629f44a85ecf462c9024"],["/tags/PostgreSQL/index.html","add4cb8e2b6638c76b045a8ecf4ac617"],["/tags/Presentation/index.html","179babfeee4753e5d37722a79ec29614"],["/tags/React-Hooks/index.html","9902e6109b0fba0fa5bf3943a895e6bc"],["/tags/Serverless/index.html","5aa21cc1f9f6c002948008e5335627ca"],["/tags/command/index.html","07fb8447bb69a88702f49fa0ae0a1a3d"],["/tags/css/index.html","077344cf0b0c40043745674f146e0fe2"],["/tags/dubbo/index.html","7d4917681240eebe9fdc838e1622b707"],["/tags/git/index.html","8e0a90f1d2bc5d85d24dd5f36f98a6e2"],["/tags/graphql/index.html","dcd9e2ab6a82c4e4622c6dd65586a695"],["/tags/gulp/index.html","81e205771f471f9f7f69279bcf1f1a35"],["/tags/index.html","c5d41111dd035b2a3e32892e01c3c7fc"],["/tags/ls/index.html","1153fdcac3cff79ab6753a754702e588"],["/tags/module/index.html","78aa8d215129aeacef611b46351307ad"],["/tags/react/index.html","55067e9a31d3d9ea99dd9b5076faf65f"],["/tags/service-mesh/index.html","ee777e2443b5949e20bdc3ba394d296c"],["/tags/sso/index.html","04d048512470e4a43a7743112b7cd3d7"],["/tags/tick栈/index.html","7a5d071da80e592ecb8885af39756b7a"],["/tags/windows/index.html","93cbe7d706032a5b73596ee5c40bd245"],["/tags/万万没想到/index.html","ba6fbe42d41bade28a9460008d09b576"],["/tags/产品/index.html","edf4bf83707c9dc954925a53f5594444"],["/tags/人才管理/index.html","447520c454874b0acc309355ef2083fa"],["/tags/前端/index.html","2d7b10f3996056a40558b156e0ac0321"],["/tags/动力/index.html","8cc02d306f968cae69ffd55656cc4ea3"],["/tags/区块链/index.html","e8c9cd130cb20f7d346601aee5c6028e"],["/tags/名人/index.html","88ab983817a0ed0ba73b603752ab85bf"],["/tags/告诫/index.html","64c56e875d947bd264f2c936523fb946"],["/tags/埋点/index.html","ca17868a89005d2a2da242d17fdf4dc6"],["/tags/学习/index.html","9c09d7160d75aacf9216a065139be5c3"],["/tags/安全扫描/index.html","28e2eb64f656d9b52e017039ed4f3003"],["/tags/实践/index.html","c7564aa1717d349ae167914cf8a8e4d2"],["/tags/工程/index.html","b8d0dfa3cb3eaa7d82cf630c61eac240"],["/tags/开荒/index.html","9436951a1672c9908824f0e438170bcf"],["/tags/心理/index.html","345b95a0e053a842f9c12d3776fa1b4a"],["/tags/心理学/index.html","7f78b99fd16e0a9da45968de55a0b469"],["/tags/性能优化/index.html","12e4177462106bb5080f62c6f3b353da"],["/tags/总结/index.html","1bd945e4824bb2df034af4cd8c42562a"],["/tags/效率/index.html","cc77e7d7aecfa3c15f235059c7529527"],["/tags/梦想金山/index.html","a318eaab83d8b848270f8322d4d539b5"],["/tags/欲望/index.html","711a014db0b2ddc7fb2ce1cc12ab221e"],["/tags/生育基金/index.html","948df3f9f77ffa03aa8d2c92c3ea5c71"],["/tags/监控/index.html","9e48f5b46078eb08663322d178390319"],["/tags/系统思考/index.html","af08e13f99d0aaa6160befdd8a1e2566"],["/tags/编码/index.html","e74ce396626b2c212f68c340dc4810e2"],["/tags/职场/index.html","4acaa542e842c60ad49c6bd779c0c673"],["/tags/自律/index.html","746995bd873edc983871dba30e6456bf"],["/tags/规划/index.html","af7d97da4be5ab47a3ec0e0f5531a91c"],["/tags/计算机网络/index.html","8209204bfc310a66a079642251dbf922"],["/tags/认知/index.html","1eb27ed16fb0af46fa3678576d9000ae"],["/tags/诅咒/index.html","effb9733b43305591816424d256c89de"],["/tags/详设/index.html","3e9edced23f4caadb73c7a0b760cfb70"],["/tags/读书/index.html","2ec6ca690bf442596694aa7f37731b4e"],["/tags/跨域/index.html","e6ff0d656ecaf26c1e31178fc757ed8b"],["/tags/软技能/index.html","1cc3f283673dfb1ae70e52a3afe3bb48"],["/tags/运营/index.html","dd91752befc82012fcfcee815dc4168b"],["/tags/通用工具类/index.html","9fca75aa52800cbd41abd21b20a83c5d"],["/tags/高难度沟通/index.html","0e388abaefde410287359969cf54e19f"],["/uploads/iron_man.png","597481074be4c96d1a42fb424e423527"]];
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
