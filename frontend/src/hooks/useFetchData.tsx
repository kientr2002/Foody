import React from 'react'
import axios from 'axios'

const useFetchData = (baseUrl:string, header?:any) => {
    const [data, setData] = React.useState([])
    const [fetchErr, setFetchErr] = React.useState('')

    React.useEffect(() => {
        const source = axios.CancelToken.source()

        const fetchData= async (url:string) => {
            try {
                const response = await axios(url, {
                    cancelToken: source.token,
                    headers: header ? {'Authorization': `Bearer ${header}`} : {}
                })
                setData(response.data)
                setFetchErr('')
            }
            catch (err:any) {
                setData([])
                setFetchErr(err?.message)
            }
        }
        fetchData(baseUrl)

        return () => {
            source.cancel()
        }
    }, [baseUrl])

    return {data, fetchErr}
}

export default useFetchData