const BasePage = require('./base.page');

class HomePage extends BasePage {

    //Locators

    get acceptCookiesButton() {
        return $('button[data-testid="action:understood-button"]')
    }

    get searchBar() {
        return $('.nav-search-input');
    }
    
    get searchButton() {
        return $('.nav-icon-search');
    }

    //Functions

    async acceptCookies() {
        try {
          await this.acceptCookiesButton.click();
          console.log('Accepted cookies.');
        } catch (e) {
          console.log('No cookies alert found.');
        }
    }

    async searchItem(item) {
        await this.searchBar.setValue(item);
        await this.searchButton.click();
    }

}

module.exports = new HomePage();
