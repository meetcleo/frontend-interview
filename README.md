# Cleo Frontend Interview

## Overview

We'll be pairing on a React application that allows users to convert currencies from one unit to another, based on a selection. The application itself has already been started by another team and our goal would be to:

1. Work on some features/enhancements/bugs together as per the requirements documented on the [project board](https://github.com/orgs/meetcleo/projects/8), from both a functional and UX perspective
2. Add tests for features and functionality we add
3. Fix any bugs we come across

The teams project manager has set up a project board for us to track various features/enhancements/bugs, which can be found [HERE](https://github.com/orgs/meetcleo/projects/8).

Each card on the project board has information about it's requirements, so take a moment to familiarise yourself with them and feel free to ask questions. Our goal is to work through the cards on that project board together in whichever order you feel works best, however they have been put in a rough logical order already.

We have also been provided a design (expand below) to reference during our development. We should aim to stay close to this, but we have freedom to change things where improvements to the UX would be gained.

<details>
  <summary>UI design reference</summary>
  <img width="402" height="833" alt="Screenshot 2025-07-11 at 14 51 52" src="https://github.com/user-attachments/assets/8c623ee2-455c-483b-8eeb-45fdff147190" />

  
</details>

It's important to note that whilst there may be bugs on that project board, not all may have been reported yet. As such, we can look to fix anything we find during our session.

## Getting started

This is a React application and as such, you'll need to have installed on your machine a few dependencies:

1. Node.js (>=16.0.0 <17.0.0)
2. Git
3. Yarn or NPM

With the above installed, you'll need to fork this Github repo locally to your machine. We also recommend you come prepared with your preferred IDE set up to your liking in order to allow us to start straight away.

## Running the application

There are various commands already available for you to run:

### Start the dev server

Runs the local development server on port 3000.

```console
$ yarn start
```

### Run the API

Runs the local API from a static database (currency values are not real time)

```console
$ yarn api
```

There are three endpoints made available for this task. Each is described bellow:

#### Currencies

Retrieve a list of all available currencies

```
GET - http://localhost:3002/currencies
```

The currencies available as part of this test are:

```json
{
  "AUD": "Australian Dollar",
  "CAD": "Canadian Dollar",
  "CHF": "Swiss Franc",
  "CNY": "Chinese Yuan",
  "EUR": "Euro",
  "GBP": "British Pound Sterling",
  "RUB": "Russian Ruble",
  "THB": "Thai Baht",
  "USD": "United States Dollar"
}
```

#### Rates

Retrieve a list of all available currencies with rates

```
GET - http://localhost:3002/rates
```

Retrieve a single currency and its rates

```
GET - http://localhost:3002/rates/{CURRENCY_CODE}
```

#### Convert

Convert an amount from one currency to another

```
GET - http://localhost:3002/convert?from={CURRENCY_CODE}&to={CURRENCY_CODE}&amount={AMOUNT}
```

### Testing

Runs tests via Jest and React Testing Library

```console
$ yarn test
```

## Notes

- We are big fans of tested code
- Be mindful of your code structure, you are completely free to make adjustments as you wish
- We are about good vibes and working as a team to solve things
- Remember to think out loud so you and your interviewers are aligned
- Feel free to Google something if you're unsure during the session. Also remember you can ask your interviewers any questions you may have
- We are not expecting to finish all the cards on the project board. We are more keen to see how you work, solve problems and communicate
