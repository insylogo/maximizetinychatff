
exports.main = function() {
    require("sdk/tabs").on("ready", maxTinychat);
    function maxTinychat (tab) {
        tab.attach({
            contentScript: 'if (document.URL.indexOf("http://tinychat.com") != -1) {var leftBlock = document.getElementById("preload");            var chatWindow = leftBlock.children[0];        	var body = document.getElementsByTagName("body")[0];        	body.insertBefore(chatWindow, body.firstChild);        	chatWindow.style.width = "100%";        	chatWindow.style.left = "0px";        	chatWindow.style.top = "0px";        	chatWindow.style.position = "absolute";        	chatWindow.style.zIndex = 1000;        }'
        });
        
    }
};