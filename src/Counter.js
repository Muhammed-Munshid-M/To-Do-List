// import React,{useState,useEffect} from 'react'

// function Counter() {
//     const [count,setCount] = useState(0)
//     const [count2,setCount2] = useState(0)
//     useEffect(()=>{
//         console.log('Mounting...');
//         console.log('Count1...'+count);
//         console.log('count2...'+count2);
//     },[])
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <h1>Hello I am Cmponent: {count}</h1>

//       <button onClick={()=>setCount2(count2+1)}>Increment</button>
//       <h1>Hello I am Cmponent 2: {count2}</h1>
//     </div>
//   )
// }

// export default Counter