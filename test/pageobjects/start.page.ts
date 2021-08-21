import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get #buttonGetStarted() { return $('[href="/register"]') }
    get #buttonFrenchLanguage() { return $('//h2[contains(text(), "French")]') }

    /**
     * a method to click on get started button
     */
    async clickGetStarted() {
        await (await this.#buttonGetStarted).click();
    }

    /**
     * a method to click on get started button
     */
    async clickFrenchLanguageButton() {
        await (await this.#buttonFrenchLanguage).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

export default new StartPage();
