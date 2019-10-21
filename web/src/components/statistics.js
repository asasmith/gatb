import React from 'react'
import styled from 'styled-components'

export default function Statistics ({stats}) {
  const {edges} = stats
  return (
    <section>
      <List>
        {edges.map(item => {
          const {statistic, info, id} = item.node
          return (
            <ListItem key={id}>
              <p>{ statistic }</p>
              <p>{ info }</p>
            </ListItem>
          )
        })}
      </List>
    </section>
  )
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: minmax(20vh, 1fr);
`

const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
