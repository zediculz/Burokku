import React from 'react'

const Match = (props) => {
  const { children } = props
  return (
    <div>
      {children.map((child) => {
        const { props } = child

        if (props.condition) {
          return child
        } else {
          if (child.type.name === 'DefaultCase') return child
        }
      })}
    </div>
  )
}

const Case = (props) => {
  const { children } = props
  return <div>{children}</div>
}

const DefaultCase = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export { Match, Case, DefaultCase }
