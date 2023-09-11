import React, { Fragment } from 'react'

const If = (props) => {
  const { condition, children } = props
  return <>{condition ? children[0] : children[1]}</>
}

const Then = (props) => {
  return <>{props.children}</>
}

const Else = (props) => {
  return <>{props.children}</>
}

const While = (props) => {
  const { condition, children } = props
  return <>{condition ? children[0] : children[1]}</>
}

export { If, Then, Else, While }
