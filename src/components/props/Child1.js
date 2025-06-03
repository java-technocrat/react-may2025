import React from 'react'
import Child2 from './Child2'
function Child1(props) {
    return (
        <>
            <div>Child1</div>
            <Child2 message={props.message} />
        </>
    )
}

export default Child1