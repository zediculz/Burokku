/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import { If, Then, Else, While, Match, Case, Show } from 'burokku'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [age, setAge] = useState(20)

  return (
    <main>
      <button onClick={e => setLoggedIn(!loggedIn)}>Change State</button> <p></p>

      <b>If, Then, Else <span>✅</span></b>
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
      <b> While, Else <span>✅</span></b>
      <While condition={loggedIn}>
        <div>User Logged in</div>
        <Else>
          <span>User Logged out</span>
        </Else>
      </While>
      <p>-------------</p>
      <b>match, case, DefaultCase <span>✅</span></b>
      <p></p>
      <Match>
        <Case condition={age === 20}>
          Age is 20
        </Case>
        <Case condition={age < 50}>
          Age is less 50
        </Case>
        <Case condition={age > 5}>
          Age is greater 5
        </Case>
      </Match>
      <p></p>
      <p>-------------</p>
      <b>Show</b>
      <Show when={loggedIn} fallback={<p>hello, click here to login</p>}>
        <div>You are logged In, click here to logout</div>
      </Show>
    </main>
  )
}

export default App
