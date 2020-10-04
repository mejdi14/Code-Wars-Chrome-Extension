console.log("hello my fist pretty extension");
fetch('https://code-wars-checker-server.herokuapp.com/checker').then(r => r.text()).then(result => {
    if (result == 'false') {
        chrome.runtime.sendMessage({redirect: "https://github.com/mejdi14"});
    }
})
let imgs = document.getElementsByTagName('img');
