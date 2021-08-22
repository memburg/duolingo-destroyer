/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens Google Translate Page
    */
    open() {
        return browser.url(`https://translate.google.com/`);
    }
}
