import HomePage from '../pageobjects/googletranslate/home.page';

describe("Google Translate Home Page", () => {
	it("should dismiss 'Switch to App' alert", async () => {
		await HomePage.open();
		await HomePage.clickNoThanksButton();
	});

	it("should select target language", async () => {
		await HomePage.clickDetectLanguageButton();
	});
});