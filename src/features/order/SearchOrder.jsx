import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchOrder() {
    const navigate=useNavigate();
    const [query , setQuery]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        navigate(`/order/${query}`)
    }

  return (
    <form onSubmit={onSubmit}>
        <input placeholder="search your order" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </form>
  )
}
