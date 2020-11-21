# Fidel coding challenge
I took the liberty of doing the techtest in another private repository, so that I could configure automated deployment and CI. As a result, you will not find my git flow in this repository.
If it is in the interest of the reviewers, I can share the other repository to show all the commits and pull requests.

## Live version:
https://pedantic-joliot-45c220.netlify.app/

## Requirements
- NodeJS v12.16.3

## Step by step:
### Installation 
`yarn install` or `yarn`

### Set up dotenv(.env)
- Create `.env` file
- Set env variables([check bellow](https://github.com/FidelLimited/fe-techtest-brunoguimaraes/blob/version-0/README.md#api-access)):

`REACT_APP_FIDEL_API_SECRET_KEY=YOUR_SECRET_KEY`

`REACT_APP_FIDEL_API_PROGRAM_ID=YOUR_PROGRAM_ID`

`REACT_APP_FIDEL_API_STAGE_URL=YOUR_FIDEL_API_URL`

### Avaliable scripts

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn lint`

Runs eslint report to check project's patterns to make the code more consistent and avoid bugs.

`yarn lint:fix`

Runs eslint report and attempts to fix any problem detected

`yarn test`

Launches the test runner in the interactive watch mode.

`yarn build`

Builds the app for production to the `build` folder.

## What is Fidel API?

Fidel is an API platform that makes it easy for developers to link payment cards to their applications and receive real-time transaction data.

## Objective

The objective of this test is to verify your front-end skills and introduce you to the Fidel API.

## Task

1. Create a UI that displays transactions fetched from Fidel API (see below).
2. Add pagination using the pagination API (e.g. infinite scroll, load more button etc...)

### Stack

- JavaScript or TypeScript
- React

Please feel free to use your tooling of choice for styling and testing!

### Documentation

- [Documentation](https://docs.fidel.uk/transactions)
- [API Reference](https://reference.fidel.uk)
- [API pagination](https://reference.fidel.uk/reference#pagination)
  - If you are constructing the query parameter string yourself, you may need to use `encodeURIComponent` on the `start` parameter.

### API Access

Use the development stage API https://api-dev.fidel.uk/v1d/.  
- *Test environment secret key:* `sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6`  
- *Program ID* to fetch the transactions from: `2314f371-39b1-4c80-8040-4144ff1bad09`  

You can read more about request headers in the API Reference.

## Questions & support

Should you have any questions, just ask jordan@fidel.uk :)
