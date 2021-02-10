import React, {useEffect} from 'react'

const Polly = (tweets, setTweets, bPolling, setBPolling) => {
    if (bPolling) return
    else setBPolling(true)
    console.log('invoking Polly')
    // useEffect( () => {
        setInterval(() => {
            console.log('ping')
            try {            
                fetch('http://localhost:4000/api/poll')
                    .then(res => res.json())
                    .catch(e => console.log(`err: ${e}`))
                    .then(data => {
                        if (data && data.items) {
                            try {
                            const arr = data.items
                            console.log(arr)
                            if (arr.length > tweets.length) {
                                console.log('change!')
                                setTweets(arr)
                            }
                            } catch {}
                        }
                        
                    })
                    
            } catch {console.log(`err post fetch`)}
            
        }, 2000)
    // })
}

export default Polly