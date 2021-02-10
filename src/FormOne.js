import React, { useEffect } from 'react'

const FormOne = (props) => {
    
    const getData = () => {
        var data = 'not found'
        data = document.getElementById('textOne').value
        console.log(`getData payload: ${data} `)

        fetch('http://localhost:4000/api/spa/', 
            {method:"POST", 
             mode:"cors", 
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({myData: data})
            })
            .catch(e => {console.log(`error on fetch ${e}`)})    
            .then(x => x.json())
            .catch(e => {console.log(`error on process ${e}`)})
            // .then(x => console.log(`response: ${Object.keys(x)}`))
            // .then(x => console.log(x))
            .then(x => {props.setterTwo(x.returnData)})
            .finally('call over')
    }

    // useEffect( () => {
    //     setInterval(() => {
    //         console.log('ping')
    //         try {            
    //             fetch('http://localhost:4000/api/poll')
    //                 .then(res => res.json())
    //                 .catch(e => console.log(e))
    //                 .then(data => {
    //                     if (data && data.items) {
    //                         try {
    //                         const arr = data.items
    //                         console.log(arr)
    //                         if (arr.length > props.tweets.length) {
    //                             console.log('change!')
    //                             props.setTweets(arr)
    //                         }
    //                     } catch {}
    //                     }
                        
    //                 })
                    
    //         } catch {console.log(`err post fetch`)}
            
    //     }, 2000)
    // })
    return (
        <div onClick={() => {props.setter(Math.random())}}>
            {/* <p>form</p> */}
            <form 
                action="http://localhost:4000/api/submission" 
                method="POST">
                <input id="textOne" name="myName" type="text"></input>
                <input type="submit"/>
                {/* <input>Send</input> */}
            </form>
            <div onClick={(e) => {
                console.log('spa click'); 
                getData()
            }}>
            <span>SPA Send</span>
            </div>
        </div>
    )
}

export default FormOne