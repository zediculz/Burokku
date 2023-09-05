import React from 'react'

const If = (props) => {
  const { condition, children } = props
  return <div>{condition ? children[0] : children[1]}</div>
}

const Then = (props) => {
  return <div>{props.children}</div>
}

const Else = (props) => {
  return <div>{props.children}</div>
}

const While = (props) => {
  const { condition, children } = props

  if (condition) {
    return <div>{children[0]}</div>
  } else {
    return <div>{children[1]}</div>
  }
}

export { If, Then, Else, While }
