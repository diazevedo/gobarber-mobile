<h1 align="center">
  <img alt="Gobarber logo" src=".github/logo.svg" width="5%" align="center"/> </br>
    GoBarber App
</h1>

<h2 align="center">
  <img alt="Web login page" src=".github/gobarberLogin.gif" width="35%" />
  <img alt="Mobile login page" src=".github/gobarberNavigation.gif" width="35%" />
</h2>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diazevedo/gobarber-mobile">

  <a href="https://www.linkedin.com/in/diazevedo" target="_blank" >
    <img alt="Made by Di Azevedo" src="https://img.shields.io/badge/made%20by-DiAzevedo-%2325b0e6">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>


An aplication for IOS/Android developed with React-Native. The app is focused on clients who are looking for barbers. It allows them to select the professional and the date and time for an appointment. The user can also manage their profile and cancel appointments.

It has the [backend](https://github.com/diazevedo/gobarber) and [frontend](https://github.com/diazevedo/gobarber-web).

### Technologies / Libraries

- [React Native](http://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
  - [Redux Saga](https://redux-saga.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [Axios](https://github.com/axios/axios)
- [Prop Types](https://github.com/facebook/prop-types)
- [Reactotron](https://github.com/infinitered/reactotron)
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)

### Requirements

- [Node](https://nodejs.org/en/).
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/) — I am using yarn commands over this step-by-step.
- This project consumes the [API](https://github.com/diazevedo/gobarber) so have it running.

```bash
# Clone the project
$ git clone https://github.com/diazevedo/gobarber-mobile.git

# Go to the repository folder
$ cd gobarber-mobile

# Installing dependencies
$ yarn or npm

# Starting the project
$ yarn start

# To run on IOS
yarn ios
```

:bulb: Feel free to comment or to contribute with this project any thoughts on how to improve are welcome.
