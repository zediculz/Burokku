import React, { Fragment } from 'react'

// works like switch case
// renders all true condtion passed tp each case components
// defaultCase is redner when all the condition in cases are false
/*
  @params [match takes case, and default]
*/
function Match(props) {
  const { children } = props
  const childTrueCondition = children.filter(
    (child) => child.props.condition === true
  )
  if (childTrueCondition.length !== 0) {
    return (
      <>
        {childTrueCondition.map((child) => {
          return child
        })}
      </>
    )
  } else {
    return (
      <>
        {children.map((child) => {
          if (child.type.name === 'DefaultCase') return child
        })}
      </>
    )
  }
}

// renders true condition
/* 
  @params [condtiond: which most be true]
 */
const Case = (props) => {
  const { children } = props
  return <>{children}</>
}

// renders wheb all condtions are false
/* 
  @params [condtiond: which most be true]
 */
const DefaultCase = (props) => {
  const { children } = props
  return <>{children}</>
}

export { Match, Case, DefaultCase }
