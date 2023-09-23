import React, { Fragment } from 'react'

function Show(props) {
  const { children, fallback, condition } = props
  if (condition) {
    return <>{children}</>
  }

  return <>{fallback}</>
}

export { Show }
