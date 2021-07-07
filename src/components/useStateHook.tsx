import React, { useState } from "react"

const UseStateHook = () => {
    const [ count ] = useState( 100 )

    return (
        <div>
         <h2>useStateHook</h2>
         <p>count is in {count} </p>
        </div>
    )
}

export default UseStateHook


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
