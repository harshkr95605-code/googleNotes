import React from 'react'
import Child5 from './Child5'

function Child4({data}) {
  return (
    <div>
      coming from 3 -{data}
      <Child5 data={data}/>
    </div>
  )
}

export default Child4
