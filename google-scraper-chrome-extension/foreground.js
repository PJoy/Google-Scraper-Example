// Get the query string
let googleQuery = document.querySelector('#rso').getAttribute('data-async-context').replace('query:', '');
let googleResults = [];

document.querySelectorAll('#rso > div > div.g').forEach(el => {
    let title = el.querySelector("h3 > span").innerText;
    let link = el.querySelector("a").getAttribute('href');

    if (title && link) {
        googleResults.push({
            'title': title,
            'link': link,
        });
    }
})

let query = {
    'search': googleQuery,
    'results': googleResults,
}

// Initialize XHR
const serverURL = "http://localhost:3333/";
const pushURI = "log-search";
const xHR = new XMLHttpRequest();

// Post to server
xHR.open("POST", serverURL + pushURI, true);
xHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xHR.send(JSON.stringify(query));

