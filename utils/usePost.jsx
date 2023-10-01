import { useState, useEffect } from 'react'

function usePost(url, requestData) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function postData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    if (requestData) {
      postData()
    }
  }, [url, requestData])

  return { data, loading, error }
}

export default usePost
