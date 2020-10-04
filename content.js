fetch('https://code-wars-checker-server.herokuapp.com/checker').then(r => r.text()).then(result => {
    if (result == 'false') {
        chrome.runtime.sendMessage({redirect: "https://codewars-blocking-cat.herokuapp.com"});
    }
})
