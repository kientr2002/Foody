import React from 'react'

const useFetchData = (baseUrl: string, method?: string, obj?: Object) => {
    const [data, setData] = React.useState<any>(undefined)
    const [loading, setLoading] = React.useState<boolean>(true)

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(
                baseUrl,
                {
                    method: method ? method : 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: obj ? JSON.stringify(obj) : null,
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setData(data.message[0])
            }
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        fetchData(baseUrl)
    }, [baseUrl])

    return { data, loading }
}

export default useFetchData
