import React, { Fragment } from 'react'

function Show(props) {
  const { children, fallback } = props
  if (props.condition) {
    return <>{children}</>
  }

  return <>{fallback}</>
}

export { Show }
