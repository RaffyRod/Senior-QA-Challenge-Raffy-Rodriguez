
# QA Automation Challenge

This is an automation framework developed for UI and API testing.


### UI testing

The framework contains the following 10 test cases for the website [automationpractice.com/](http://automationpractice.com/index.php)

1. Sign up.

2. Log in.

3. Search for an item using the search bar.

4. Check the best seller's section.

5. Add an item to the wishlist.

6. Subscribe for newsLetters.

7. Add an item to the shopping cart.

8. Remove the item from the shopping cart.

9. Complete the checkout.

10. Log out.




The test cases are documented in the test management platform [qatouch.com](https://www.qatouch.com/). To access the test suite, can reach me at:
raffy.a.rodriguez@gmail.com



### API testing

For the API testing it was required to be automated 3 request to the Marvel Comics API [Marvel Developer Site](https://developer.marvel.com).


1. Automate that all the characters can be fetch.

2. Automate that all the comics for Spiderman can be fetch.

3. Automate that all characters for the X-Man comic can be fetch



## Tech Stack

* [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Nodejs.](https://nodejs.org/en/about/)
* [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
* [MD5.](https://www.npmjs.com/package/md5)
* [Fakerjs.](http://marak.github.io/faker.js/)
* [CircleCi.](https://circleci.com/developer/orbs/orb/cypress-io/cypress#quick-start)
* [Mochawesome.](https://www.npmjs.com/package/mochawesome)
* [ESlint.](https://eslint.org/docs/latest/user-guide/getting-started)





## Before Installing

* Node.js must be installed in order to run the project.

* `(For locally purposes)` If you are using `window's powershell or CMD` as terminal, run the command `npm run test-windows` or
if you are a MacOs or linux user just run from the terminal `npm run test`.


* Go to [Marvel's developer website](https://developer.marvel.com) and create an account to get a public and a private API key `(this is required for API testing)`.

* Make sure of getting an email and password for [automationpractice.com/](http://automationpractice.com/index.php).




## Installation

* Clone the repository from Github.

```bash
  git clone https://github.com/elraffy/Senior-QA-Challenge-Raffy-Rodriguez.git  
```

* Install all packages and dependencies for the project.


```bash
  npm install  
```



* Configure the credentials for UI and API:



#### UI testing configuration  
Go to directory `cypress/fixtures` , open the loginData.json file and add the email and password for the website.


```bash
  {
  "email": "myemail@mail.com",
  "pass": "mypassword"
   }
```

#### API testing configuration 



Go to directory `cypress/support/utilities` , open the file apiHelper.js and modify the properties `apiData.publicKey` and `apiData.privateKey`, 
replacing the values with the ones gotten from [Marvel's developer website](https://developer.marvel.com) after creating the account. 



```bash
    apiData.publicKey = "my marvel public key goes here";
    apiData.privateKey = "my marvel private key goes here";
``` 



The required hash and timestamp are being generated by using the [MD5 library](https://www.npmjs.com/package/md5) and programatically on the same apiHelper.js file.



```bash
   
   const date = new Date();
   apiData.timestamp = date.getTime();   

   apiData.hash = md5(apiData.timestamp + apiData.privateKey + apiData.publicKey);
```

* Run the tests using the cypress Test Runner by typing on the terminal the command:


```bash   
   npx cypress open
```


* Run the tests on headless mode by typing on the terminal the command:


```bash   
   npm run test
```

This will automatically run all test and generate the report at the end of execution.



## Must Know


* The website [automationpractice.com](http://automationpractice.com/index.php) has load issues and this make some of the test fail sometimes.
* For API negative test cases was used `failOnStatusCode: false` , so it can continue and do the assertions.
* It was implemented the ESlint linter to ensured the code ebst practices and performance.



## Considerations

* It was used the POM dessign pattern combined with Javascript and cypress best practices.

* Reusable features like Login and Logout were created as a custom command for cypress, so can be used when need it.

* The static data was created on `fixture` but the dynamic data was generated using [fakerjs](https://www.npmjs.com/package/faker), creating variables in a custom helper file.

* All `validation data for assertions` such as `(URLs and confirmation messages )`, were saved in the cypress.json/env.

* The CI pipeline is configured through a Circle CI orbs.

* All The API successfull requests for positive scenarios were also validated using the [postman](https://www.postman.com/) tool and the collection will be included in the project just in case that is required to validate some information.

* To test with postman or other third party, will be required to get a hash that can be generated by going to [Hash generator](https://www.md5hashgenerator.com/) and doing the following steps:



   1. Go to the [Hash generator](https://www.md5hashgenerator.com/) website.

   2. On the text-area field paste the API keys preceded by the number `1` that will works as a `Timestamp`.

   ```bash   
    ` 1 + Marvel's API privateKey + Marvel's API publicKey`
   ```

   3. Click the generate button to get the hash required for API testing.





## Contributing

Contributions are always welcome!

* Feel free of fork this project, create your own branch, commit your changes and do your pull request.



## Acknowledgements

 - [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
 - [NPMjs.com](https://www.npmjs.com/)
 - [Circleci Documentation](https://circleci.com/developer/orbs/orb/cypress-io/cypress#usage-start-server)
 - [ESlint Documentation](https://eslint.org/docs/latest/user-guide/getting-started)



## 🔗 Links
[![Profile](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/elraffy)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raffy-a-rodriguez-400552110/)


