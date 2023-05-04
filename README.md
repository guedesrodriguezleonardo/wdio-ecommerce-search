# wdio-ecommerce-search ⛩️

This project is an automated testing project that utilizes WebdriverIO (WDIO) to test the search functionality of the MercadoLibre website. The purpose of this test is to retrieve the names, prices, and links of the articles found on the first 3 pages and output them into a .txt file.

## Project structure
### 🗐 Page Object Pattern
This project utilizes the Page Object Pattern, which is a design pattern used to organize and structure automated tests. It separates the code for interacting with a web page from the code for the tests themselves. This approach makes tests easier to read, maintain, and extend.

### 📁 /output
- camisetas.txt (This file is generated automatically after each test run and will be overwritten)

### 📁 /pages
- basepage.js

- homepage.js
 
- resultspage.js

### 📁/tests
- search.js: 

## How to run
To get started with this project, follow the steps below:

1. Clone the repository to your local machine
2. Install the dependencies by running   
```
npm install
```
3. Run the test suite by running  
 ```
 npm run wdio
 ```
4. After running the test, you can find the retrieved data in a .txt file inside the /output directory.


### 📚 Allure Report
This project uses the Allure Report to generate an interactive report that provides information about the test results. 
After running the tests, the report can be generated by running the command 
```
allure generate && allure open
```
