require('dotenv').config();
const { ProductTransformer } = require('./lib/ProductTransformer');
const { PageProductFetcher } = require('./lib/PageProductFetcher');
const { AllProductFetcher } = require('./lib/AllProductFetcher');

class MainApplication {
    constructor() {
        this.transformer = new ProductTransformer();
        this.pageFetcher = new PageProductFetcher();
        this.allFetcher = new AllProductFetcher();
    }

    async execute() {
        try {
            console.log(' Запуск приложения для обработки товаров');
            console.log('='.repeat(50));
            
            await this.allFetcher.fetchAllProducts();
            await this.pageFetcher.fetchProductsByPages();
            await this.transformer.transformProductData();
            
            console.log('\n Все операции успешно завершены!');
            
        } catch (error) {
            console.error(' Критическая ошибка:', error.message);
        }
    }
}


const app = new MainApplication();

app.execute();

