#Google scraper chrome extension example

After activation, the extension scapes the results of each query, and sends them to the Node.js server API.

## 1) Install extension
* Open Google chrome and open url `chrome://extensions/`
* Click on "load unpacked extension"
* Select google-scraper/google-scraper-chrome-extension directory

## 2) Install server
* Run `npm install` in google-scraper/google-scraper-server
* Run `node index.js`

## 3) Test the app
* Got to `google.com`
* Search some terms
* The results should be logged by the Node server in the console
