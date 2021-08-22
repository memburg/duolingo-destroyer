import StartPage from '../pageobjects/duolingo/start.page';

describe("Enemy's fortress", () => {
    it('should circumvent security', async () => {
        await StartPage.open();
        await StartPage.clickGetStarted();
        await StartPage.clickFrenchLanguageButton();
    });
});