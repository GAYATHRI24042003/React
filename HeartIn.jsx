import { useState } from "react";
 export function Heart({count,setCount}){
    const [like,setLike]=useState(false);
    //let like=false;
    function handleLike(){
        if(like){ 
            setCount(count-1);
        }
        else{
            setCount(count+1);
        }
        setLike(!like);
    }
    return(
        <span onClick={handleLike} style={{color:'red'}}>
        {
            like?<i class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>
        }
        </span>
    );
 }

export default function HeartIn(){
    const[count,setCount]=useState(0);
    return(
        <>
        <p>the click count is {count}</p>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        <Heart count={count} setCount={setCount}></Heart>
        
        </>
    )
}
