import React from 'react'
import axios from 'axios'

const useFetchData = (baseUrl: string, header?: any) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState<boolean>(true)

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            if (json) {
                setData(json)
                setLoading(false)
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    React.useEffect(() => {
        fetchData(baseUrl)
    }, [])

    return { data, loading }
}

export default useFetchData
