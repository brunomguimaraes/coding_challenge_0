# ***CENSORED_NAME*** coding challenge
I took the liberty of doing the techtest in another private repository, so that I could configure automated deployment and CI. As a result, you will not find my git flow in this repository.
If it is in the interest of the reviewers, I can share the other repository to show all the commits and pull requests.

## Requirements
- NodeJS v12.16.3

## Step by step:
### Installation 
`yarn install` or `yarn`

### Set up dotenv(.env)
- Create `.env` file
- Set env variables([check bellow](https://github.com/***CENSORED_NAME***Limited/fe-techtest-brunoguimaraes/blob/version-0/README.md#api-access)):

`REACT_APP_***CENSORED_NAME***_API_SECRET_KEY=YOUR_SECRET_KEY`

`REACT_APP_***CENSORED_NAME***_API_PROGRAM_ID=YOUR_PROGRAM_ID`

`REACT_APP_***CENSORED_NAME***_API_STAGE_URL=YOUR_***CENSORED_NAME***_API_URL`

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
