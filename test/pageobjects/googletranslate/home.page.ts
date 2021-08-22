import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get #buttonNoThanks() { return $('//span[contains(text(), "No thanks")]') }
    get #buttonDetectLanguage() { return $('//div[contains(text(), "Detect language")]') }

    /**
     * a method to click on 'no thanks' button
     */
    async clickNoThanksButton() {
        await (await this.#buttonNoThanks).click();
        await browser.pause(3000);
    }

    /**
     * a method to click on 'Detect Language' button
     */
    async clickDetectLanguageButton() {
        await (await this.#buttonDetectLanguage).click();
        await browser.pause(3000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

export default new HomePage();
