
# Burokku
A Lightweight Tool For Conditionally Rendering React Components

## Install

```bash
npm install --save burokku
```
### without Borukku
```jsx
 const [loggedIn, setLoggedIn] = useState(false)

 const App = () => {
   return (
     {loggedIn ? 'do something' : "user not logged in"}
   )
 }

```
### with Borukku
```jsx
import { If, Then, Else } from 'burokku'
const [loggedIn, setLoggedIn] = useState(false)

function App() {
  return (
    <If condition={loggedIn}>
        <Then>
          <span>Yes, user logged in.</span>
        </Then>
        <Else>
          <span>Sorry, user is not logged in.</span>
        </Else>
    </If>
  )
} 

```
## More from Burokku

#### While, Else 
```javascript
import { While, Else } from 'burokku'
const [loggedIn, setLoggedIn] = useState(false)

function App() {
  return (
    <While condition={loggedIn}>
        <div>User Logged in </div>
        <Else>
          <span>User Logged out</span>
        </Else>
    </While>
  )
} 

```

#### Match, Case, DefaultCase
```javascript
import { Match, Case, DefaultCase } from 'burokku'
const [age, setAge] = useState(20)

function App() {
  return (
    <Match>
        <Case condition={age === 20}>
            <span>Age equals 20</span>
        </Case>
        <Case condition={age < 50}>
            <span>Age is less 50</span>
        </Case>
        <Case condition={age > 5}>
            <span>Age is greater 5</span>
        </Case>
        <DefaultCase>
            <span>i will render if all cases conditions are false</span>
        </DefaultCase>
    </Match>
  )
} 

```
## License

MIT © [@Seyifunmitan](https://github.com/@Seyifunmitan)


[![NPM](https://img.shields.io/npm/v/burokku.svg)](https://www.npmjs.com/package/burokku)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/burokku?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=burokku)