import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(url)
        .then(ref => ref.json())
        .then(data => {
            setLoading(false)
            setCountries(data)
        })
        .catch(err => console.log(err.message))
    }, [url])

    return { loading, countries }  
}

export default useFetch