# burokku

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/burokku.svg)](https://www.npmjs.com/package/burokku) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-if?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=burokku)

## Install

```bash
npm install --save burokku
```

## Usage

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
 const [loggedIn, setLoggedIn] = useState(false)

 const App = () => {
   <If condition={loggedIn}>
      <Then>
         <span>Yes user logged in.</span>
      </Then>
      <Else>
         <span>user is not logged in.</span>
      </Else>
   </If>
 }
```

## License

MIT © [@Seyifunmitan](https://github.com/@Seyifunmitan)
