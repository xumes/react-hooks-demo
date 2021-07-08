import React, { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [ name, setName ] = useState('Joe');
    const [ count, setCount ] = useState( 100 )

    const handleIncrease = () => {
        setCount(count+1)
    }

    const handleDecrease = () => {
        setCount(prevState => prevState - 1)
    }

    useEffect(() => {
        console.log(`use effect caled with name= ${name}`)

        return () => {
            setName('Joe')
            console.log(`bye ${name}`)
        }
    })

    return (
        <div>
        <h2>UseEffectHook</h2>
        <p>Hello {name}</p>
        <p>count is in {count} </p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default UseEffectHook


// 0




// 1
// const [ count, setCount ] = useState( 100 )

// const handleForceAdd = () => {
//     count ++
// }

// return (
//     <div>
//      <h2>useStateHook</h2>
//      <p>count is in {count} </p>
//      {/* <button onClick={handleForceAdd}>Force add 1</button> */}
//     </div>
// )



// 2
// const UseStateHook = () => {
//     const [ count, setCount ] = useState( 100 )

//     const handleIncrease = () => {
//         setCount(count+1)
//     }

//     const handleDecrease = () => {
//         setCount(prevState => prevState - 1)
//     }

//     return (
//         <div>
//          <h2>useStateHook</h2>
//          <p>count is in {count} </p>
//          <button onClick={handleIncrease}>Increase</button>
//          <button onClick={handleDecrease}>Decrease</button>
//         </div>
//     )
// }
