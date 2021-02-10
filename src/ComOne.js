import React, { useState } from 'react'


const ComOne = (props) => {
    console.log(`s: ${props.s}`)
    return (
        <div>
            <p>Component Renders</p>
            <p>State: {props.s}</p>
        </div>
    )
}

// module.exports = ComOne
export default ComOne