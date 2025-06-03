import React from 'react'

function Child2(props) {
    return (
        <>
            <div>Child2</div>
            <p>Parent props is: {props.message}</p>
        </>
    )
}

export default Child2