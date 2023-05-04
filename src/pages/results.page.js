const fs = require('fs');
const path = require('path');
const BasePage = require('./base.page');

class ResultsPage extends BasePage {

  //Locators

  get items() {
    return $$('.ui-search-layout__item.shops__layout-item');
  }

  get nextButton() {
    return $('.andes-pagination__button--next a')
  }

  //Functions

  async clickNextButtonAndWait() {
    await this.nextButton.click();
    await this.items[0].waitForDisplayed();
  }

  async getPageItems(page) {
    const output = [];
    const items = await this.items;
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const nameText = await item.$('.ui-search-item__title').getText();
      const priceText = await item.$('.price-tag-fraction').getText();
      const urlLink = await item.$('.ui-search-link').getAttribute('href');
  
      output.push(`Page ${page} - Product ${i+1}\nItem Name: ${nameText}\nItem Price: ${priceText}\nItem Link: ${urlLink}\n\n`);
    }
  
    return output;
  }

  async exportPagesItems(numPages) {
    const output = [];

    for (let page = 1; page <= numPages; page++) {
      const pageItems = await this.getPageItems(page);
      output.push(...pageItems);

      if (page < numPages) {
        await this.clickNextButtonAndWait();
      }

      const filePath = path.resolve(__dirname, '../output/camisetas.txt');
      fs.writeFileSync(filePath, output.join(''));
    }
  }

}

module.exports = new ResultsPage();
