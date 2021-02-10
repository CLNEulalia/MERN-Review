import React from 'react'

const doLike = (id) => {
    fetch('http://localhost:4000/api/like/' + id)
        .then(res => res.json())
        .then(data => {
            console.log('returning from like route with: ...')
            console.log(data)
        })
        .catch(e => console.log(`doLike failed with ${e}`))
}

const delTweet = (id) => {
    fetch('http://localhost:4000/api/like/' + id, 
        {method:'DELETE'}
    )
        .then(res => res.json())
        .then(data => {
            console.log('returning from like route with: ...')
            console.log(data)
        })
        .catch(e => console.log(`doLike failed with ${e}`))
}

const clickLike = (e) => {
    // console.log(e.target.parentElement.parentElement.id)
    console.log(e)
}

const TweetItem = (props) => {

    return (
        <div id={props._id}>
            <span>{props.tweet} | </span> 
            {/* <div onClick={(e) => clickLike(e) }> */}
            {/* <div onClick={ e => clickLike(props._id)} > */}
            {/* <div onClick={ e => doLike(props._id)} > */}
                <span onClick={ e => doLike(props._id)}>
                ...{props.likes} |
                </span>
                <span onClick={ e => doLike(props._id)}>
                    ...LIKE... |
                </span>
                <span onClick={ e => delTweet(props._id)}>
                    ...DELETE... |
                </span>
            {/* </div> */}
        </div>
    )
}

export default TweetItem