import React, { useState } from 'react'


const ComTwo = (props) => {
    console.log(`s: ${props.s}`)
    return (
        <div>
            <p>State2: {props.s}</p>
        </div>
    )
}

// module.exports = ComOne
export default ComTwo