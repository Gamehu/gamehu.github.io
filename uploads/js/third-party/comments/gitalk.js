document.addEventListener("page:loaded",()=>{if(!CONFIG.page.comments)return;NexT.utils.loadComments(".gitalk-container").then(()=>NexT.utils.getScript(CONFIG.gitalk.js,{condition:window.Gitalk})).then(()=>{const e=new Gitalk({clientID:CONFIG.gitalk.client_id,clientSecret:CONFIG.gitalk.client_secret,repo:CONFIG.gitalk.repo,owner:CONFIG.gitalk.github_id,admin:[CONFIG.gitalk.admin_user],id:CONFIG.gitalk.path_md5,proxy:CONFIG.gitalk.proxy,language:CONFIG.gitalk.language||window.navigator.language,distractionFreeMode:CONFIG.gitalk.distraction_free_mode});e.render(document.querySelector(".gitalk-container"))})});