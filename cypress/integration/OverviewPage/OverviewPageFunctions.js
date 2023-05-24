import OverviewPageUtils from './OverviewPageUtils';
import {
  logo,
  title,
  products_count,
  first_product_title_A_Z,
  first_product_title_low_high,
  first_product_price_A_Z,
  first_product_price_low_high,
  last_product_title_A_Z,
  last_product_title_low_high,
  last_product_price_A_Z,
  last_product_price_low_high,
} from './OverviewPageValues.json';

class OverviewPageFunctions {
  validateElementsExistence() {
    OverviewPageUtils.logo.should('be.visible').should('contain.text', logo);
    OverviewPageUtils.title.should('be.visible').should('contain.text', title);
  }

  testProductsCount() {
    OverviewPageUtils.inventoryList
      .children()
      .should('have.length', products_count);
  }

  sortProductsAscending() {
    OverviewPageUtils.sortOptions.select('az');
  }

  sortProductsDescending() {
    OverviewPageUtils.sortOptions.select('za');
  }

  sortProductsLowToHigh() {
    OverviewPageUtils.sortOptions.select('lohi');
  }

  sortProductsHighToLow() {
    OverviewPageUtils.sortOptions.select('hilo');
  }

  testAscendingSort() {
    OverviewPageUtils.inventoryList
      .first()
      .should('contain.text', first_product_title_A_Z)
      .should('contain.text', first_product_price_A_Z);

    OverviewPageUtils.inventoryList
      .last()
      .should('contain.text', last_product_title_A_Z)
      .should('contain.text', last_product_price_A_Z);
  }

  testDescendingSort() {
    OverviewPageUtils.inventoryList
      .first()
      .should('contain.text', last_product_title_A_Z)
      .should('contain.text', last_product_price_A_Z);

    OverviewPageUtils.inventoryList
      .last()
      .should('contain.text', first_product_title_A_Z)
      .should('contain.text', first_product_price_A_Z);
  }

  testLowToHighSort() {
    OverviewPageUtils.inventoryList
      .first()
      .should('contain.text', first_product_title_low_high)
      .should('contain.text', first_product_price_low_high);

    OverviewPageUtils.inventoryList
      .last()
      .should('contain.text', last_product_title_low_high)
      .should('contain.text', last_product_price_low_high);
  }

  testHighToLowSort() {
    OverviewPageUtils.inventoryList
      .first()
      .should('contain.text', last_product_title_low_high)
      .should('contain.text', last_product_price_low_high);

    OverviewPageUtils.inventoryList
      .last()
      .should('contain.text', first_product_title_low_high)
      .should('contain.text', first_product_price_low_high);
  }
}

export default new OverviewPageFunctions();
