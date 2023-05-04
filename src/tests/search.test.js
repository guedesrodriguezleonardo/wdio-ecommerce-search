const HomePage = require('../pages/home.page');
const ResultsPage = require('../pages/results.page');

describe('Search for items in MercadoLibre', () => {
    it('should search for items and save the results to a txt file', async () => {
  
      await HomePage.openUrl();
      await HomePage.acceptCookies();
      await HomePage.searchItem('camisetas');
      expect(ResultsPage.itemName).toBeDisplayed();

      await ResultsPage.exportPagesItems(3);
    });

});