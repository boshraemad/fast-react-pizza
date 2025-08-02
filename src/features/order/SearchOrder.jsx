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
        <input className="bg-yellow-100 rounded-full px-4 py-2  text-sm placeholder:text-stone-400 w-28 sm:w-64 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72" placeholder="search your order" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </form>
  )
}
