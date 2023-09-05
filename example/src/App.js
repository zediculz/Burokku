import React, { useState } from 'react'
import { If, Then, Else, While, Match, Case, DefaultCase } from 'burokku'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [age, setAge] = useState(18)



  return (
    <main>
      <button onClick={e => setLoggedIn(!loggedIn)}>Change State</button>

      <p>if, then, else</p>
      <If condition={loggedIn}>
        <Then>
          <span>Yes user logged in.</span>
        </Then>
        <Else>
          <span>user is not logged in.</span>
        </Else>
      </If>
      <p> </p>
      <p>-------------</p>

      <p> while, else</p>
      <While condition={loggedIn}>
        <div>User Logged in</div>
        <Else>
          <span>User Logged out</span>
        </Else>
      </While>
      <p>-------------</p>

      <p>match, case, DefaultCase</p>
      <Match>
        <Case condition={true}>
          Age is greeter than 18
        </Case>
        <Case condition={age < 10}>
          Age is less than 10
        </Case>
        <DefaultCase>
          <span>all conditions are false</span>
        </DefaultCase>
      </Match>
      <p>-------------</p>
      <p> </p>
    </main>
  )
}

export default App
