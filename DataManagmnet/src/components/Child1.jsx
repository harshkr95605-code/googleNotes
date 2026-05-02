import React from 'react'
import Child2 from './Child2'

function Child1({data}) {
  return (
    <div>
      Child1 - {data}
      <Child2 data={data}/>
    </div>
  )
}

export default Child1
