import { useEffect, useState } from "react"

export const  getData = (url) => {
    const [ data , setData ] = useState ();
    const [ loading , setLoading ] = useState(true);

    const fetch = async(url) => {
        try {
            const data = await fetch(url);
            const res = await data.json();
            setLoading(false)
            setData(res)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }
    }

    useEffect(()=>{
        fetch(url)
    } , [url])

    return { data , loading }
}