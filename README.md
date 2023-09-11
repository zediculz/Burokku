
# Burokku
A Lightweight Tool For Conditionally Rendering React Components.

## Install

```bash
npm install --save burokku
```
### without Burokku
```jsx
 const [loggedIn, setLoggedIn] = useState(false)

 const App = () => {

  // conditional rendering
   return (
     {loggedIn ? 'user logged in' : "user not logged in"}
   )
 }

```
### with Burokku
```jsx
import { If, Then, Else } from 'burokku'
const [loggedIn, setLoggedIn] = useState(false)

// cleaner conditional rendering
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

#### While
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

#### Match
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

#### Show
```javascript
import { Show } from 'burokku'
const [loggedIn, setLoggedIn] = useState(false)

function App() {

  // solidjs like SHOW 
  return (
    <Show 
    condition={loggedIn} 
    fallback={<p>hello, click here to login</p>}>
        <div>You are logged In, click here to logout</div>
    </Show>
  )
} 

```

## License
MIT


[![NPM](https://img.shields.io/npm/v/burokku.svg)](https://www.npmjs.com/package/burokku)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/burokku?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=burokku)