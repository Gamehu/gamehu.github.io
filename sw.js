/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/06/26/dubbo讲究(一)/error.png","983e73140ec606d9910f9cc84f88fe31"],["/2018/06/26/dubbo讲究(一)/error01.png","b409e8be4faee8bd05d88192b1686a79"],["/2018/06/26/dubbo讲究(一)/error02.png","f999888003fe99e75b65d0b4d46762a0"],["/2018/06/26/dubbo讲究(一)/error03.png","506e0b65e683681f0969e8872a72f933"],["/2018/06/26/dubbo讲究(一)/error04.png","9c3e3af19449a0499d70a7fe83fca407"],["/2018/06/26/dubbo讲究(一)/error05.png","a14cc7bbf98df95b171b4240b4be50b3"],["/2018/06/26/dubbo讲究(一)/error06.png","4dcd5b6c57f9771a01226b26ffeb0209"],["/2018/06/26/dubbo讲究(一)/index.html","68f6c8462610e2a7da331bde00e7b0f4"],["/2018/06/27/OKR/ORK-KPI2.jpg","ed78753b4569aeb35032522811777af8"],["/2018/06/27/OKR/index.html","f187ddfb75a6d0ede003952e541cb8c2"],["/2018/06/27/OKR/kpi1.png","be5a43b25720af92da884e6641125327"],["/2018/06/27/OKR/kpi3.jpg","9d6dfd174cbcb99e14d1dbcfed5e0d74"],["/2018/06/27/三大主义要不得/index.html","385706c156a86b3560cfab20b02bdb6a"],["/2018/06/28/联系和弱联系/index.html","9b4ddda598639817c9504bc5e78ad9c0"],["/2018/06/29/区块链/index.html","f374304e2f73446545a4cb57ae586a37"],["/2018/06/29/区块链/licheng.png","4c3a2be2b92b01d1b54b7dcf4b67aa76"],["/2018/06/29/区块链/zhinengheyue.png","fbe0fa1cfc39d66e27b17acffdb22f71"],["/2018/06/30/Serverless/index.html","78d60a7978e9d74d2c6e2b53bba07da4"],["/2018/07/03/Service Mesh/index.html","06aca1036e8952d228d7fcc05de162b4"],["/2018/07/04/12-Factors/attached-resources.png","4543871f00bd6354b099f23bdddb3ddd"],["/2018/07/04/12-Factors/codebase-deploys.png","3b40fe51c68cd87b19c79d061c0f9963"],["/2018/07/04/12-Factors/index.html","d6d5b250ffbfb963f256d3e38813cb99"],["/2018/07/04/12-Factors/process-types.png","0c38412f773c32e7a6c0248c500df99d"],["/2018/07/04/12-Factors/release.png","8458878ded8446c6cfc0385236ba7fe3"],["/2018/07/09/常用工具-windows版/Listary.png","4264ffef32bcbab7427bd599473c5c83"],["/2018/07/09/常用工具-windows版/Wox.png","608a3dd90af9a318b55ece241345117e"],["/2018/07/09/常用工具-windows版/chrome.png","390181f5a6158fff287a501013dde4b7"],["/2018/07/09/常用工具-windows版/everything.png","c3c268be5bc5e50a0d1411209dca1702"],["/2018/07/09/常用工具-windows版/index.html","af7f4ad2e5abafdc28fab25758393e31"],["/2018/07/09/常用工具-windows版/md.png","095b40b4cf1c4480dc831b71f13cdb9c"],["/2018/07/09/常用工具-windows版/mouth.jpg","9af9255d415d87985559129c88ad0a1f"],["/2018/07/09/常用工具-windows版/screenshot.png","bddc06e11932d7d9c2428604996ec25f"],["/2018/07/09/常用工具-windows版/tv.png","d0955c7ef6bed227509b7cbbda164179"],["/2018/07/10/how-brower-work/attachment.png","3a72b26188e686ce65de01627918b825"],["/2018/07/10/how-brower-work/index.html","f2bd72d04787dd49edb648f9a5f3e974"],["/2018/07/10/how-brower-work/parser.png","f639bc9fd8f76ca20ffe5282d4df1972"],["/2018/07/10/how-brower-work/render-engine.png","f8f98d029d2183485acec0f7a182f847"],["/2018/07/10/how-brower-work/structure.png","db9572bf8f9fccc78af6aa368f21e3e7"],["/2018/07/10/how-brower-work/style-rule.png","21b4dd7c2ac8310d7cf11cbbe7913a5d"],["/2018/07/12/权限/01.png","9014697311641888e2740fcbd170cd56"],["/2018/07/12/权限/02.png","7def6b351e10e7fbdb503660cd29271b"],["/2018/07/12/权限/03.png","fa109f73cc4a65b4b6a073b02b673bf8"],["/2018/07/12/权限/index.html","410fbc233f9696a350c744b280a944bf"],["/2018/07/17/项目脚手架/01.png","a75ac2734295b512ea2d28c6cf1c227f"],["/2018/07/17/项目脚手架/02.png","0a8c0292697c932ccc302853f74c0c12"],["/2018/07/17/项目脚手架/index.html","b56f46cc821021b6e737fe28c58ca7fa"],["/2018/07/24/你妹/index.html","53f59d3b50878d10cee012b50b6be54f"],["/2018/07/24/你妹/yimiao.jpg","186338d30c8b51fc659a55c2ab9f3e91"],["/2018/07/24/你妹/yimiao01.jpg","ea800465c55bfdd569467b3874b9c5f3"],["/2018/07/24/你妹/yimiao02.jpg","6f523faa2db5332703da65feb1eee7e9"],["/2018/07/24/你妹/yimiao03.jpg","2a001a69ec10a65f8b960b059b192395"],["/2018/07/31/详细设计/001.png","acb78a1a9089c67d395425bd2a8ab1f1"],["/2018/07/31/详细设计/002.png","00c3f08f649462948d5eca7a7287079d"],["/2018/07/31/详细设计/003.png","976ea2239edfbb904f301c0b6fe4a691"],["/2018/07/31/详细设计/004.png","ee7728dbccb3c998729b3b48b43b5c75"],["/2018/07/31/详细设计/index.html","516e543137fbea7d63d8a4a09e1bd0ca"],["/2018/07/31/详细设计/scrum.jpg","09b07415347fdb92f766ae5978f2d974"],["/2018/07/31/详细设计/scrum_framework.png","6b00e3faa6fb3ac6c141561439b648a4"],["/2018/07/31/详细设计/详设.png","a9e920db52c424cbeb91e5a0143b6b06"],["/2018/07/31/详细设计/详设1.png","46f4c3ba679d1a5848edcc3f4656c480"],["/2018/07/31/详细设计/详设2.png","1230cd1d4b5d30fa4af7fcaec569f03e"],["/2018/07/31/详细设计/详设4.png","d9dc822cf5897759f329f3c58a77ae44"],["/2018/07/31/详细设计/详设5.png","3f34a5cea9e767904a93245ffe3e6516"],["/2018/07/31/详细设计/详设6.png","6521e56bc3222071ae6dfcc848f549d9"],["/2018/07/31/详细设计/详设7.png","b5b9b62fa43f64b45adf220c074490fb"],["/2018/07/31/详细设计/详设8.png","2b8d53424e8685f8f2b4a91f88dfa4b6"],["/2018/07/31/详细设计/详设9.png","0c540d7e064cd79b50bb38838bd81f1b"],["/2018/07/31/详细设计/详设模板.png","cafe1df62f8c2dad4297d10455de0098"],["/2018/08/01/Code Review/001.png","3045015f9486cc7eb32e3140fd4b4af3"],["/2018/08/01/Code Review/002.png","9c99885ca76b818e2ee1051a36cf7979"],["/2018/08/01/Code Review/003.png","bd3184325be5a6771350b82082572a62"],["/2018/08/01/Code Review/004.png","98a01393e4709c70338c81cec07d383c"],["/2018/08/01/Code Review/005.png","0d3525ea3cdffd3b1a231c502b3599bf"],["/2018/08/01/Code Review/code_review_hierarchy.png","f3566cca5e69c433b8012ea79cb6793e"],["/2018/08/01/Code Review/cr001.png","9d90e0d4f0a6582259eac71268483fe9"],["/2018/08/01/Code Review/index.html","9e4466db6218d63a477f7ede786d5637"],["/2018/08/01/观看之道/001.png","fdf5226dcd881510644e3e298eed23e9"],["/2018/08/01/观看之道/index.html","1bdf6af36d8a436d05625bcccd6a1166"],["/2018/08/06/GraphQL/index.html","06779aba9cdac5d57acf31f055df0a20"],["/2018/08/09/乔布斯/index.html","a38a189528955a1b143ae3d7e1e83f02"],["/2018/08/11/中美贸易战/01.jpg","18956b485b43ec973520bac8c1ea1106"],["/2018/08/11/中美贸易战/index.html","21f7912fd45f8d308607cfbbcecec08b"],["/2018/08/14/自律(一)/a.jpg","bb496f75155a190fa61efeeb4ef8375d"],["/2018/08/14/自律(一)/index.html","75b9f9408adc7be7d09d01309e561b65"],["/2018/08/15/书方法/index.html","921d509e0e02f4e2e4aef12942b0aaf0"],["/2018/08/16/前后端分离/index.html","5c393765b8c3d2cdab771b87357fafc3"],["/2018/08/17/温伯格的采访/index.html","26de846da0d130ce4b68bd38b529bd2d"],["/2018/08/18/React一点点/1.png","788aa4e7432f55de8068baabf9b1c1d6"],["/2018/08/18/React一点点/2.png","db397331213db26c2fcb73c39e1d18bb"],["/2018/08/18/React一点点/3.png","3e47d06abf7183cace60a2625d459a40"],["/2018/08/18/React一点点/4.png","80d98b3eecae69788ef6a970d4bcab43"],["/2018/08/18/React一点点/index.html","1804c94c89f8b6e412e3d2b9334d4952"],["/2018/08/18/React一点点/one_year_of_react_native.png","d9ab0a371c3d15bc560712107a13b31d"],["/2018/08/19/同理心/index.html","5ff88be8f23f30b87b0123aea1600c49"],["/2018/08/20/跨域/a.png","6a474e87058f8643f99f2ae832bc0d26"],["/2018/08/20/跨域/b.png","f63ff3ece1d4872049cd27443433343e"],["/2018/08/20/跨域/index.html","d30b990d6d4516e5121af09b13664e48"],["/2018/08/22/生育基金/a.jpg","4093e4ac6680c631fb84911647384779"],["/2018/08/22/生育基金/index.html","7c542fbd9806b08ca25895e78534cda9"],["/2018/08/27/计算机网络/index.html","f61390f139744f8e688a7c150d323740"],["/2018/08/28/我希望我是猫头鹰/DlpAaqOWsAIz97B.jpg","a3098bc0ef05b1b02bc0a7507eab701f"],["/2018/08/28/我希望我是猫头鹰/index.html","0e54297b831a7db8988929b09b2bdc62"],["/2018/08/29/职业层级/index.html","1b0e9c666bd1ee61ec70389ad06dc04c"],["/2018/09/07/逃避/index.html","9ef2658d87a57be1666ab6752344e66d"],["/2018/09/10/梦想金山-人物/index.html","b5b5a1487190d68d505cabffeaf1e440"],["/2018/09/11/CSS Triggers/css.png","0a190dd4a1013bf8d0b98053cbd680ff"],["/2018/09/11/CSS Triggers/index.html","f39659df36c6cc099fbe1835021272a5"],["/2018/09/11/CSS Triggers/render.png","073fc75bb371636a85d32564c22e1da4"],["/2018/09/11/梦想金山-运营/index.html","e9a1e1afc03071df81a4681c1ca225fb"],["/2018/09/12/梦想金山-成长/index.html","9abc01bdb9a6033b5a2e5c111e5ddc8b"],["/2018/09/20/梦想金山-优秀的程序员/index.html","f9b4ff2a2e57a0fb060f931f7aa96e22"],["/2018/09/21/想金山-产品王道三大法宝/index.html","a1754b01cad906ca7d43aaa7ade6c13c"],["/2018/09/29/敏捷自动化测试/index.html","b5e9a8e095d386c0ed9a41f34c5f7de8"],["/2018/10/13/署/index.html","3c389c66f4126b0772f781d5782fa12d"],["/2018/12/26/怎么让工作更加高效/abc.png","d5280acab6dc7d81c59d11fd416f9852"],["/2018/12/26/怎么让工作更加高效/clear-glass-with-red-sand-grainer-39396.jpg","406658f78fb13bae246afe0ff3406baa"],["/2018/12/26/怎么让工作更加高效/fast.png","1974c91bda98b157ff1e6c8ee9ec5fb3"],["/2018/12/26/怎么让工作更加高效/index.html","3c84035dbd6e0cb12063d287ea49e475"],["/2018/12/26/怎么让工作更加高效/信息源.png","fa74e30294374a1582fab63c8517d59f"],["/2018/12/26/怎么让工作更加高效/康奈尔笔记法.png","7fdac4f3a6d96068a1dedb06b826f326"],["/2018/12/26/怎么让工作更加高效/记忆.png","b8a79b4ba2e9716e23e2e1778f050e48"],["/2019/02/15/软技能-承担责任/index.html","7ea7213a530004db4fd636cd7b8c158b"],["/2019/02/19/2019年开始/gratisography-421H.jpg","6923414ca170da549302f8a1d06046dc"],["/2019/02/19/2019年开始/index.html","872728458170612b8126714ed0bb6ec2"],["/2019/02/24/前端小总结一下/gratisography-sad-bunny-thumbnail.jpg","040fff9d1f05aeb0de13a151eba00f2b"],["/2019/02/24/前端小总结一下/index.html","0ad7994dfc7cfb32a941a5ee5f1c22cc"],["/2019/02/25/合代码de内心独白/Snipaste_2020-02-01_23-27-25.png","d4b3f54c0008ea0ade11b7eb5721c711"],["/2019/02/25/合代码de内心独白/backend.png","1b0bad3bd90732e255ee6e66b78861e8"],["/2019/02/25/合代码de内心独白/frontend.png","a4be98bc522ac8deaacb41ce60eadf69"],["/2019/02/25/合代码de内心独白/index.html","ded8feb8ff981267bb030ac0cd06c6bb"],["/2019/02/28/几个版本之后/index.html","ebb21493d9e86260d51ebc9872c73ba7"],["/2019/03/04/系统之美/index.html","ba8df807649e332614f2c0be7cc73315"],["/2019/03/14/中间件到底该不该用/index.html","53e94da555d15108e20ea18c56513a17"],["/2019/03/15/git分支规范/1.png","354af12878fe9945a6b42d2081b814a2"],["/2019/03/15/git分支规范/2.png","d93164a6f07fc45396b289cffcf65262"],["/2019/03/15/git分支规范/3.png","fe99cad9ad35dc18eef0673019620e1d"],["/2019/03/15/git分支规范/4.png","8a7ec0652e94fcf4147d60c13c1472b0"],["/2019/03/15/git分支规范/index.html","6746d2484363fd8cf0b139c57591cf13"],["/2019/03/18/前端-通用工具类/index.html","319e580ce8a023dca919e1f11bebaef2"],["/2019/03/22/React 条件渲染/001.png","6b77ebb3180240b89f993e999be51e0d"],["/2019/03/22/React 条件渲染/002.png","1c47be562ceb0e1cc07fd00d95d01856"],["/2019/03/22/React 条件渲染/003.png","2f32ab2e4c7151045146670bad6070e6"],["/2019/03/22/React 条件渲染/description.png","737a592368f3d58a01dcff6e668a39bb"],["/2019/03/22/React 条件渲染/index.html","de4e163406ff414a63ee1a976d1f7a37"],["/2019/04/09/React Lifecycle/001.png","8d44319291d5accde677f6481efb2dfd"],["/2019/04/09/React Lifecycle/index.html","60af36e48fd8503a304b001709ee0c85"],["/2019/04/14/怎样保持动力/index.html","a237e5fe371687d6083c57c93320d697"],["/2019/04/14/怎样保持动力/panda.jpg","66c67a312b4309df526cb5620f680e39"],["/2019/04/17/搜索/001.png","cb733d2814da3e1bb7ff9fb251d65e07"],["/2019/04/17/搜索/index.html","80fbc4f0b76bf33cebc0e199b55fefb6"],["/2019/04/22/啥时候用Redux/001.png","5d07202de1a4bf7386d954fe20ddcff7"],["/2019/04/22/啥时候用Redux/index.html","04460831b30a2ee6b54d4fcfba24eaff"],["/2019/04/30/前端编码规范/index.html","396e32bbd04046956277685f544dafbc"],["/2019/05/15/Linux Source命令/index.html","d5e8d6612ac433bbe8e5bb17b09fe2da"],["/2019/05/15/Linux Source命令/kcptun.png","7a56e9c56ca5912f133336981885d945"],["/2019/05/15/Linux Source命令/source.png","a9503d862f99de28e0be879451e7c476"],["/2019/07/18/始于愤怒必终于羞愧/index.html","28040c371302779bd57f11489291d2c3"],["/2019/07/18/自由成长活动/a.jpg","110eec12a9b5c721cbd2b245c249ae97"],["/2019/07/18/自由成长活动/index.html","3c28b663889f9834aeab6d6d4f01b94e"],["/2019/07/24/浏览器渲染/index.html","6d0c7490f4924e510d934ad530c075e0"],["/2019/08/02/写的好看一点/index.html","e18e8340321ec890d9aa02a199ec0587"],["/2019/08/05/ersonal-Growth/index.html","e01e2a5e32c156222b55d4f438b1e146"],["/2019/08/09/编写可读代码的艺术/index.html","898a05cd73d5fc6a8746c30d20c1c5f8"],["/2019/08/19/吃力不讨好/index.html","77f49cb7ed625f7bf3e9c0d30f5b7242"],["/2019/08/19/吃力不讨好/tom-gainor-ABjAtsf3XDA-unsplash.jpg","d41ccafb395c7ab668924681dedb2f1a"],["/2019/08/20/git实践/boat-164989.jpg","0fa191919624a2991de48d5a77b64511"],["/2019/08/20/git实践/index.html","304c6efac0c312eb49d05c13214efe8c"],["/2019/08/20/git实践/reset.jpg","96a702a3d044d4545b39ddc74f806947"],["/2019/08/21/提高效率/1.jpg","00fb735c216356d4cbfd91280fecfec3"],["/2019/08/21/提高效率/index.html","22c265464862cc8964f01b82aab926da"],["/2019/08/22/How-To-Master-A-Skill-In-A-Short-Period-Of-Time/index.html","8fcc3aa5de8c2042a3889a45f7412798"],["/2019/08/23/根因分析/image-20200306121924405.png","be3f7b12bff3c84275b79a3a57bf8e92"],["/2019/08/23/根因分析/index.html","b0f888f57579babfd5303b56e9d3becf"],["/2019/08/27/作用域/index.html","f58bc29542064585a836258e0b6d2c35"],["/2019/08/27/如何做职业规划/0.jpg","d9db48fc1111f6081203171e637aafb8"],["/2019/08/27/如何做职业规划/1.jpg","d0b3d3953d6a5f082cde2e41fed62d39"],["/2019/08/27/如何做职业规划/10.jpg","91abde28dac6f27183acdfbb87f5c47f"],["/2019/08/27/如何做职业规划/2.jpg","a1f21242388e7015fcb322ca9caad519"],["/2019/08/27/如何做职业规划/3.jpg","b5241e92d7126b2b159bd826a344078e"],["/2019/08/27/如何做职业规划/4.jpg","a79b14eed4a94a72dd82342dcaf9d673"],["/2019/08/27/如何做职业规划/5.jpg","1f3b77191a4d5b12726d9515543a3a88"],["/2019/08/27/如何做职业规划/6.jpg","1d55e8d9daec30e005ac39b59f6aa4ba"],["/2019/08/27/如何做职业规划/7.jpg","f0f79816552963c4e69ab95ad7859743"],["/2019/08/27/如何做职业规划/8.jpg","b564159edc3eae6206035e12593871fb"],["/2019/08/27/如何做职业规划/9.jpg","4c2c5e23128bc47c3b74bc123873eef0"],["/2019/08/27/如何做职业规划/a.png","e13fc0c9df80256a567be5989a98d6fe"],["/2019/08/27/如何做职业规划/excel.png","ea15fe6ba68e3a6084eb91fed48911d1"],["/2019/08/27/如何做职业规划/ice.jpg","a10af0fba8194354b105ad17192fd9fe"],["/2019/08/27/如何做职业规划/index.html","c0a580dbade64db8435bc2e9a8396ce2"],["/2019/09/03/Lint笔记/eslint.png","711be206c785f979ba09924b119f5b99"],["/2019/09/03/Lint笔记/idea_eslint.png","75caa9929787729109b8ef6a676c540e"],["/2019/09/03/Lint笔记/idea_eslint01.png","58c40aab2d4062e06d39581eea2c7bf5"],["/2019/09/03/Lint笔记/idea_eslint02.png","56522e6747a1107c9fe88704f09d89e1"],["/2019/09/03/Lint笔记/idea_eslint03.png","38dd71c105bb6673f07c002fd637a79c"],["/2019/09/03/Lint笔记/index.html","d01a98177e278f1aa6eba55b66e671d2"],["/2019/09/06/工具/index.html","c54a8f65c22a81ee5d61d0ab0530b7b6"],["/2019/09/06/工具/tool.png","f7370a970d9daaf4974ba04b9b2cf330"],["/2019/09/18/底层系统/index.html","1dee2aa8b637219575bd743a9cd49bb0"],["/2019/09/18/底层系统/lost-1605501_1920.jpg","1a89b2ab789e84acac6d7634a2217b0c"],["/2019/09/20/Chrome Tools-Sources/0.png","cea109bb0aea626e16ab9e5ad185a545"],["/2019/09/20/Chrome Tools-Sources/10.png","23e24e3d3e023f9a6f1567cd9e64d884"],["/2019/09/20/Chrome Tools-Sources/Inked0_LI.jpg","6e1fed9af11d43d4555c47c3f1e15d88"],["/2019/09/20/Chrome Tools-Sources/breakpoints.gif","6618b32e542fdc94451381c861aa4b0b"],["/2019/09/20/Chrome Tools-Sources/debug.png","fed470be88a2d30f1639ff62a116b0ab"],["/2019/09/20/Chrome Tools-Sources/debug03.gif","a0adde7ab7c004556453e3d2c6cfc15e"],["/2019/09/20/Chrome Tools-Sources/debug04.gif","ec2d409883ed5786a9926e5953150a9e"],["/2019/09/20/Chrome Tools-Sources/index.html","cb88bd006cd2dca2f2a2f4a7b0f9b465"],["/2019/09/20/Chrome Tools-Sources/network-overrides.gif","ff1d2802c2f68661d4f4156e6ab899ab"],["/2019/09/20/Chrome Tools-Sources/point_types.png","adf419c2a4e483b9d2c7fa03e2e11c6e"],["/2019/09/20/Chrome Tools-Sources/snippets.gif","5fe6a2651d5fe7303e915469d5be04eb"],["/2019/09/20/Chrome Tools-Sources/watch.png","2a88332a263e1f26124234a698b0affa"],["/2019/09/20/Chrome Tools-Sources/xhr.gif","67be6ec05ac15ee2ac7f2485f0048e55"],["/2019/09/22/怎么做好Presentation/1.png","e76f46042bcdfefd090cf7652593262e"],["/2019/09/22/怎么做好Presentation/2.png","e7930b8620912e0c537c1e7e7b3fd79b"],["/2019/09/22/怎么做好Presentation/3.jpg","0a9fae0f6306ad68f0916d55b0b235ec"],["/2019/09/22/怎么做好Presentation/index.html","218dba263e6d1f1634169818f0f426fd"],["/2019/09/23/难度沟通/index.html","1197b2dabb4b3872bdef0d5a05f70963"],["/2019/09/27/安全扫描/1.png","2ce4c5172b53b01cf13319b3f064adb4"],["/2019/09/27/安全扫描/index.html","f47ac44ed7e8a3835f29195a880955f1"],["/2019/09/27/安全扫描/shield.jpg","b1665747a41a569ecd1781e8e53c729f"],["/2019/09/30/抉择/index.html","b1bd38f29019e650a306bcc3b8ab981f"],["/2019/10/08/个人发展战略/0.jpg","53fa8bcb7a37f8743e7efff9bc72d2ca"],["/2019/10/08/个人发展战略/index.html","5ad80c81a5edb87168f2fe8276d6c10f"],["/2019/10/21/组织化人出管理的四大领域/1.jpg","ac2291fd73cfb1d8261c9ae50e2c858f"],["/2019/10/21/组织化人出管理的四大领域/2.jpg","9c34dd7fba9d09e2d2106b4e9b312e7c"],["/2019/10/21/组织化人出管理的四大领域/3.jpg","255a75b776ae1f10f7e7230132019dd2"],["/2019/10/21/组织化人出管理的四大领域/4.jpg","db21b8d4b39324595b00040b15b9e5c8"],["/2019/10/21/组织化人出管理的四大领域/5.jpg","8da15f13e6e261617403b26f2f37d11d"],["/2019/10/21/组织化人出管理的四大领域/6.jpg","bf2259c4ad13dc6e7bd249c23dfb29c2"],["/2019/10/21/组织化人出管理的四大领域/index.html","6be2e6d5ac9248d52ddfb8341c44a136"],["/2019/10/21/组织化人出管理的四大领域/mohamed.jpg","ada8193ad8157ce96a79a3f80c94608b"],["/2019/10/31/延宕/PM Scare 3.png","22fbea492692c4e00779006db1281307"],["/2019/10/31/延宕/Snipaste_2019-11-01_18-27-35.png","9e823f1b4e0fb2f2eb7dd21ab8433f36"],["/2019/10/31/延宕/a.png","3488bba0b7c39438c56f6069a93edf16"],["/2019/10/31/延宕/b.png","9e97443ec0bb51957555ec2da59831e0"],["/2019/10/31/延宕/huaiyi.jpg","2475f33a549cefcf97ca51a75eb1568f"],["/2019/10/31/延宕/index.html","3ae0d0c546fc7df70e21b5d120cc91b1"],["/2019/10/31/延宕/procrastination_brain.png","fffce00062e17dfc840b4e2fd03466b6"],["/2019/10/31/延宕/sikao.jpg","c965321239a14efc351ec8340e3fd2bf"],["/2019/10/31/延宕/smart.png","f6ff32645a9eef744138a46225a3b5f0"],["/2019/10/31/延宕/target.png","c804fa8c6f282cf1ff3134e86447007f"],["/2019/10/31/延宕/wushen.jpg","3450abdfb0712bee7c9c3be7ae5c5886"],["/2019/10/31/延宕/xinli.jpg","c2043ae517d80a092935cfe59914ccb5"],["/2019/10/31/延宕/ziwo.png","ad02bc74f065aa3314e82294801eae77"],["/2019/11/03/斜杠/dream_big.jpg","7ef69571cf8c5ec0f4be1de476c95046"],["/2019/11/03/斜杠/index.html","88973a7b3e3a58bd67be9b1a20751a87"],["/2019/11/04/前端-性能优化姿势/index.html","2c83fd10b74f7675cf5d25ee750aab15"],["/2019/11/20/理解一个新事物的方法/index.html","8fd69ce1c62d3e1d64d10c341c0cb9a6"],["/2019/11/26/Docker 一点点/index.html","f89bd69148f5cbc4e3931fccbec19e34"],["/2019/11/29/postgresql(1)/1.jpg","3ebd3fe117b33484b9c240b868fcf89e"],["/2019/11/29/postgresql(1)/index.html","433e288f7bd7bed47d84dea4176d6c57"],["/2019/12/27/SSO实践/florian-olivo-4hbJ-eymZ1o-unsplash.jpg","f68f149ec718d47dc96ac0f31d76f9ab"],["/2019/12/27/SSO实践/index.html","aa3ee75b2bc990eec4f744a3cc5ecf91"],["/2019/12/27/SSO实践/sso.png","f47780152fbf5f611254032bce5bc469"],["/2019/12/27/SSO实践/whatis-single_sign_on-h.png","4288e42aec7667b64bd6619ec0e20904"],["/2020/02/03/领导寄语/a.png","4eba4b0019c42edd8e67c37890556745"],["/2020/02/03/领导寄语/index.html","294b220c62dbbdd88cee10ca08b658f1"],["/2020/02/13/Root-User-in-Ubuntu/index.html","bbd0253f7a9c74b45d986d91b7d10c06"],["/2020/02/22/JS Modules/a.png","2e95ad7021bd14059189e93620f5446a"],["/2020/02/22/JS Modules/index.html","e6b9738f57d8ab75d4f1322d1b4b2c2b"],["/2020/02/23/ES Module/1.png","b41f0f53c93706e7a1b3549ea1631164"],["/2020/02/23/ES Module/10.png","ac49d9570518f08cb1785c5798616162"],["/2020/02/23/ES Module/11.png","cebd62404a0971c8c5bc422c11ca71e1"],["/2020/02/23/ES Module/12.png","63475452cb0cb3ff9b4bdadd344e3a2d"],["/2020/02/23/ES Module/13.png","3da06f20d11975c8e1042fe924a5f2ac"],["/2020/02/23/ES Module/14.png","cfe77e645019b8e6a1a8e49aa8456993"],["/2020/02/23/ES Module/15.png","8a1afd86f2e76e589213f0bd347affbb"],["/2020/02/23/ES Module/16.png","383a8aef130fff2966ce6cf82c6e27ab"],["/2020/02/23/ES Module/2.png","792988e6e2d51bf4ad0d5dc0cc288de9"],["/2020/02/23/ES Module/3.png","fb7ea7e9dfbb17db00a564543e71ed6d"],["/2020/02/23/ES Module/4.png","951dbbd0f1d2a2e88ed53a92311a65c3"],["/2020/02/23/ES Module/5.png","d2a239abdec50e69e1d9c651c142f6c6"],["/2020/02/23/ES Module/6.png","623e73a95ad3084f8f838232dea475c4"],["/2020/02/23/ES Module/7.png","f2ed1109168c320865df7e0ce815076c"],["/2020/02/23/ES Module/8.png","ba95132bf5eca3edf63835a4b66f8054"],["/2020/02/23/ES Module/9.png","1556eebd3e1ed0f707308f982844307d"],["/2020/02/23/ES Module/index.html","1d52399cf2b55609b5ddd6de62d501f2"],["/2020/02/25/React Hooks(一)/5LbsY.jpg","33d16973e2c55f0c32d1ce2b098fb563"],["/2020/02/25/React Hooks(一)/a.png","eef33c7ded4da9ead300e81df916c752"],["/2020/02/25/React Hooks(一)/index.html","f35eb5801b2d701d42daa87b82d5dd2f"],["/2020/02/25/React Hooks(一)/lQQX7.png","2f8cd76ef7fb42ad259a7bb871c49431"],["/2020/02/25/React Hooks(一)/nTmNe.jpg","37164c8629799476d155323d8e089ef7"],["/2020/02/25/React Hooks(一)/title.png","fcdb2b3e3298441739c64785516b20c4"],["/2020/02/28/Gulp/Gulp.png","9de4905baea7e42f724311277db91f56"],["/2020/02/28/Gulp/a.gif","f3945f68b68e945e05b18d1702038a1c"],["/2020/02/28/Gulp/duplex.png","1fb11f77cc52d18745cc63f239433a9f"],["/2020/02/28/Gulp/gulp01.png","80ddc065affe34ac89de8cc4aabe153c"],["/2020/02/28/Gulp/gulp02.png","fc70c5d8498c5366234f84289b0d0a34"],["/2020/02/28/Gulp/index.html","68f0d2f7ec04224d584978a83942ecb3"],["/2020/02/28/Gulp/stream.png","e3f0840520fdccdbcac20a02a9ede0a1"],["/2020/02/28/Gulp/stream01.png","0677ed3e1fdb8555be94415b2e14d12d"],["/2020/02/28/Gulp/stream_cc.png","a3639aacd60f11dc19646a70ec8f72a3"],["/2020/02/28/Gulp/transform.png","aa59e763035e1705c549d5a350b27456"],["/2020/03/01/Module-bundling/index.html","19139c44a6439c15b76a1f306e6eb071"],["/2020/03/06/tick栈/index.html","de94d614d6841d9d813d6f66264219df"],["/2020/03/22/Java 8 Stream/apis.png","f2682ed9b55c02d20c2ef36084c734e9"],["/2020/03/22/Java 8 Stream/computer-keyboard-34153.jpg","a21567f5eb1c22b9acac4fc7610f0caa"],["/2020/03/22/Java 8 Stream/index.html","286ee16e903aad0ffa7dbf6ad92dbfd6"],["/2020/03/22/Java 8 Stream/java-streams.png","d07fa62f5019549fc66488712ce77a82"],["/2020/04/21/ps-grep-top-free/image-20200422105439799.png","c5d4319b76d345dc6565fba720a9c821"],["/2020/04/21/ps-grep-top-free/index.html","309f70b7cff48e08f4f0094e17fd4a6d"],["/2020/04/21/ps-grep-top-free/ps.png","171c626afde8d62a3760df07da09b136"],["/2020/04/21/ps-grep-top-free/top.png","15afd3db2694cab0e9a70ac4f2c7e962"],["/2020/04/21/ps-grep-top-free/top1.png","dcbfe03f6ebc67575b129d02249f4d04"],["/2020/04/28/前端埋点(一)/index.html","165e124f71ed5024d152c1e908c6ae4b"],["/2020/06/02/Linux ls命令/1.png","d6a5b91f6d1860ffc537e45501fe3f5a"],["/2020/06/02/Linux ls命令/2.png","78cc5f7fa4afd6ee49dc0f0a84483dcc"],["/2020/06/02/Linux ls命令/3.png","af4b081316b3a70b35831c4671133542"],["/2020/06/02/Linux ls命令/4.png","fa61e8e10e016a76af76debfc24de1dc"],["/2020/06/02/Linux ls命令/5.png","ec4b9158d25b321320bd3665d28e2e91"],["/2020/06/02/Linux ls命令/6.png","cabbae3ddb99bf7ef321725efaca2daf"],["/2020/06/02/Linux ls命令/index.html","885d3ff0fe26f7bf65ac4398dbd33f51"],["/2020/06/05/前端埋点(二)/index.html","3df1c0bfb81dbf5f007646b6b7329830"],["/about/index.html","192e00ccfafc4cd5ec6e8d8b8ee65414"],["/about/index/wechat.png","17eebb936e0c872da01c9e402843eb82"],["/archives/2018/06/index.html","582d920ac1698d50e115c90310aebe11"],["/archives/2018/07/index.html","6aa348d692c5e230021ee02486d74002"],["/archives/2018/08/index.html","7aa06264356922fd57714a83e69aa595"],["/archives/2018/08/page/2/index.html","265d2aea26fd3390946bc6f480feadb4"],["/archives/2018/09/index.html","4bac51a701fbac3838e60bbb84444ab5"],["/archives/2018/10/index.html","9a5ac238c0b4b0cb89450db99913f686"],["/archives/2018/12/index.html","db0f0caafd148f302a97269f799be700"],["/archives/2018/index.html","8512ccc736f94111a6c67e3577696ffb"],["/archives/2018/page/2/index.html","0f62755d14956a95f0aab536f427e49f"],["/archives/2018/page/3/index.html","6a80747e854a51f18f8ab5865ff10d4c"],["/archives/2018/page/4/index.html","f6f7ee856a128c9a89ff8ec85f8558f9"],["/archives/2019/02/index.html","fb5c8535fdd8a42e12fff8aca3327adc"],["/archives/2019/03/index.html","6f7e01fca726a5dd88715d265a4324cb"],["/archives/2019/04/index.html","7459e194690b451d1b0e531e623433be"],["/archives/2019/05/index.html","a1926f2ae3125712d222c85fe5ac088c"],["/archives/2019/07/index.html","e9403a7f29600e6ccaae8e95cef48fdd"],["/archives/2019/08/index.html","8e2b7257fb6a76f2f5434bfda4d0eae9"],["/archives/2019/09/index.html","43372c4a42e43962b1c20358c936ee50"],["/archives/2019/10/index.html","3dc47d84b07cdfecce4d7f2e042c66f5"],["/archives/2019/11/index.html","ede02c2cb5403d3446b971131100414a"],["/archives/2019/12/index.html","c12cd1e71a011de3ac18256e1fb4cc8d"],["/archives/2019/index.html","9de880f0a0de0992c74e9437e7d2cea2"],["/archives/2019/page/2/index.html","4d7726a5557f0a0bd5359cde7001b3ca"],["/archives/2019/page/3/index.html","8981fb3002db41b8885b42353b306847"],["/archives/2019/page/4/index.html","104195d43db5eb33885212f72f33de94"],["/archives/2019/page/5/index.html","5e480dc324e24ffef4e4ed33323e1a6d"],["/archives/2020/02/index.html","290edd6eb81f9865d0309099057d21f2"],["/archives/2020/03/index.html","af46cd0c0e1c856b2979825755e2d165"],["/archives/2020/04/index.html","af798350b476ca01ac3960a874347bd8"],["/archives/2020/06/index.html","cb39f74252f3c545162f15c2da5550ec"],["/archives/2020/index.html","2156edb793df37d8b27b2abb9f466a42"],["/archives/2020/page/2/index.html","b0158f9cf6a8f3e5d9a9c8f7aa0427e1"],["/archives/index.html","7426fca9601c9c69658bc338dd82c1d6"],["/archives/page/10/index.html","4be95d79af458abb3e0d369fe3980662"],["/archives/page/2/index.html","f490d5b1ca0484a0767f9156d2b15127"],["/archives/page/3/index.html","b0952bbc9a46f020f10117dc90796208"],["/archives/page/4/index.html","4ccdcc63ff9a2a0620aac6e950a64f12"],["/archives/page/5/index.html","d40f549e17c063dd73ecfd8d4735cf00"],["/archives/page/6/index.html","2afcff63554112ebf0a10d983fd56759"],["/archives/page/7/index.html","04e26e3bf3420b3ba2476d92e46d514b"],["/archives/page/8/index.html","350e76d37837ba33b41315faaf543974"],["/archives/page/9/index.html","02244f0708bc62e7b31ce53333f4dbfd"],["/categories/index.html","75bffb782e7e41f580084602deecd2f4"],["/categories/linux/index.html","9bc9864cbfcff987fcdaee91093b2a02"],["/categories/中间件/index.html","013841b65e6eb57101c00e4bf01d8b65"],["/categories/前端/index.html","5735e21ad24b90650e14de9edb393c8b"],["/categories/前端/page/2/index.html","d6eb5db289883e43027db5d22aab8c7b"],["/categories/圆桌派/index.html","6451dd6d2ee4cedf13cf93dc6eb88e3c"],["/categories/学习/index.html","b90e69f11d026927b6627eecc86cab9b"],["/categories/工作/index.html","9917189a73504d4813162b4ce9bbf54a"],["/categories/工作/page/2/index.html","4e19db92bc980cf6ba7428bc88be5fa2"],["/categories/工作/page/3/index.html","31a52c8b65f468159beab3a074967858"],["/categories/工具/index.html","3ea4736900018c5ea3c8d50187ec6313"],["/categories/工程/index.html","3d4ae01ae354ecad8a10d4268bb5a9cb"],["/categories/成长/index.html","516f09fa173c90db48788af035942770"],["/categories/成长/page/2/index.html","07039dacf210d16404577ecc719d2643"],["/categories/敏捷/index.html","e0e034e77025e97316b686de21074af1"],["/categories/浏览器/index.html","9b844bcd4c1bcd0323a20bd67b17aaea"],["/categories/滚粗/index.html","5d1bdc2a3ba517a95f1090ae27a3c41e"],["/categories/瞎扯/index.html","f813a3553a3cff1404c87d2a67f42b47"],["/categories/职场/index.html","e63944fb7e7a19908c5145bd59ffd67c"],["/categories/读书/index.html","58a3081d54c367fa8b24993c150ce335"],["/categories/读书/认知/index.html","bdc99973d1c3aaefa7ebac45c5d16e55"],["/categories/部署/index.html","11189909f23699f4ab6273576e956230"],["/categories/闲扯/index.html","7ea9ff5f29e1c2e332fdb7de430e1adb"],["/css/main.css","831b0689dd78092fc3467e46bedd55fe"],["/guestbook/index.html","679f6f251a71b68747a9c2943db0274e"],["/images/Mr.Zhong_cute_16px_505864_easyicon.net.png","b1b3d8851044d2101888d7d8cc68d0a7"],["/images/Mr.Zhong_cute_32px_505864_easyicon.net.png","523117cafd29dbb5bcf6810c430a2083"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ac5578c63cd3f80cfb27e5ee18de2ff5"],["/iron_man.png","597481074be4c96d1a42fb424e423527"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/README.html","2eb7fb7c12fb28c4e4c052455f4667e6"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","429218f46c22e9aabadfb8a653cd4c2d"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","d476a5f2e9acd32e6fbc511bb0767458"],["/page/2/index.html","76c814f5265a58936f8c13982fb905ab"],["/page/3/index.html","476db7c168d7e4931550ce2ca075d42f"],["/page/4/index.html","71f5ebcd159f0d4b6cb7fe5742688b25"],["/page/5/index.html","c8e962fe3ba2a5d113c5cfa162204b81"],["/page/6/index.html","0a84704c1f84ce0b211b112f6d3d8020"],["/page/7/index.html","b9927017ae0960f44f4b9c318534e04d"],["/page/8/index.html","8bd75f8d2216f9dcb9192587645dbad2"],["/page/9/index.html","106a48f3dc8785d9362628e76d79fb0b"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","840252e3bc612f6ea1bb88d0e5235088"],["/tags/12-Factors/index.html","c294c7387b74bc13f812b3db1d579999"],["/tags/Brower/index.html","bc30c6518982001c060e0d52e2c9a2ee"],["/tags/Docker/index.html","78d47ce9f8575b5c49bb8bccd8fbaabe"],["/tags/ES-Module/index.html","90dddc4430d488e67b74f2990d5d9b47"],["/tags/JS作用域/index.html","10eaffbd634ae4f792f28363449597f1"],["/tags/Java/index.html","9d220ec0610211a4c36cdc545dbd3f5b"],["/tags/Linux/index.html","15f22f54b6a3e76144d25bad4140a232"],["/tags/OKR/index.html","92b3b7579c45d2d235d292146ed977f5"],["/tags/PostgreSQL/index.html","667e425e2992020c81040f625654c60e"],["/tags/Presentation/index.html","41ca827d6d252e5deee91e1ade60f902"],["/tags/React-Hooks/index.html","464facc7628d1cbe4be80e8a9a025886"],["/tags/Serverless/index.html","d14f610ddb40327f654d67a73ed780dd"],["/tags/command/index.html","a36b35854bac72d9914569bb8e7148de"],["/tags/css/index.html","c15d996ba6ea8b69201b616312a4a212"],["/tags/dubbo/index.html","6fae4064eeff8ef66fb636942899ee1d"],["/tags/git/index.html","ab323f630147808506163098c8b3343d"],["/tags/graphql/index.html","1b3b26fc7da2c465c9abab16d54fec3f"],["/tags/gulp/index.html","213074d7f976daaf3cc69fea96b33686"],["/tags/index.html","6547b4ee29c6c970e9896193f14b42c9"],["/tags/ls/index.html","b0f229f330680f051a48202a8daac398"],["/tags/module/index.html","1153421e0b0ef952df2e5ec9c5b67878"],["/tags/react/index.html","a5d8260b7802ef62b7a02ff3538d4fde"],["/tags/service-mesh/index.html","ea24a7a741fb5422605539ad1a43e97e"],["/tags/sso/index.html","066899aa28c173a7c9e0608357d0889a"],["/tags/tick栈/index.html","48dd9541886d96709093e0af39821d07"],["/tags/windows/index.html","62fd90ee15073c9e32c3777996d7bfe4"],["/tags/万万没想到/index.html","bf7c20eb89cb5bdcfde2b1de13c82195"],["/tags/产品/index.html","3f5e01055eb6ce984bfc481adf9f0c3f"],["/tags/人才管理/index.html","5243a08d047f210090bdf5b5e9d41c9f"],["/tags/前端/index.html","fd0676dd7bec8b46d4d9ac852b5cc8af"],["/tags/动力/index.html","95702ad397c8fa57a6b64844adf25152"],["/tags/区块链/index.html","d31002adcd2d5c07a8621074de6deace"],["/tags/名人/index.html","fc59f176e063ecafe9101482fd5e0a47"],["/tags/告诫/index.html","571d4f3ceecec91308739c302aad4e26"],["/tags/埋点/index.html","30a1c5d9bfe9fb450efcad7f64fdcc59"],["/tags/学习/index.html","81e41430e27a07f20367ffcbfe13e67f"],["/tags/安全扫描/index.html","10e73f07c3a458d08a9ca325cf0623f5"],["/tags/实践/index.html","d73d1583a81771034f356a215330a156"],["/tags/工程/index.html","1b99758bdc696f5ea23709b611b280d4"],["/tags/开荒/index.html","91c5939f947965e19dcdabf19773db5e"],["/tags/心理/index.html","f5e85f5964a07586393318e4e87c8868"],["/tags/心理学/index.html","11f0f0c3d4c4e2d371a8fdce98ae52ff"],["/tags/性能优化/index.html","d67809cc759682fb1a41999914441226"],["/tags/总结/index.html","ae02f44b5533edadb9143282614ebde1"],["/tags/效率/index.html","2c46a6c166c4f88951a584a9f8206437"],["/tags/梦想金山/index.html","2ffb8bb8cb21f658cfc639ba70179905"],["/tags/欲望/index.html","6c245ab30b2d63e485bbcfe78f4ad799"],["/tags/生育基金/index.html","ac24a82a13284d622973fd823082184f"],["/tags/监控/index.html","87a85ac31ccfa2de8166a3ea8d1fd2d1"],["/tags/系统思考/index.html","0f8e679d8881112c66e87365ac54fe76"],["/tags/编码/index.html","b7ff226d966204665455dd3513689fa6"],["/tags/职场/index.html","d618d5672a604071458d5d585edec934"],["/tags/自律/index.html","0e46731e4b99baa2e67c0af90a72ccf6"],["/tags/规划/index.html","460035c4a1eaeba08b2f21b190a01c91"],["/tags/计算机网络/index.html","4c2b0beedb5b796f989ba097e869285c"],["/tags/认知/index.html","266933b9b46f8e3f1f9db11593b4ee1b"],["/tags/诅咒/index.html","78c4e24a1c599f9b63e5534b4000487f"],["/tags/详设/index.html","3abede0399fc2ccedaf67815e1807d09"],["/tags/读书/index.html","be16ec2a9a95a2c3d068cb868b22d4a7"],["/tags/跨域/index.html","f3522152ab343e0b864bb3a83c8b451c"],["/tags/软技能/index.html","d500e86722c677ea846b178cdc9b4f4a"],["/tags/运营/index.html","1406d2c2500765c64ef734d53da68349"],["/tags/通用工具类/index.html","23490f0ad090012b03f7d5b0b62cab85"],["/tags/高难度沟通/index.html","8f8a5e74fc31eeb3a686fd3d747307df"],["/uploads/iron_man.png","597481074be4c96d1a42fb424e423527"]];
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
