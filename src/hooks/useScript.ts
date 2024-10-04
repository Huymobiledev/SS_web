/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

export const useScript = (url: string, name: any) => {

  const [lib, setLib] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true
    script.onload = () => {
      console.log('load script done:', name)
      setLib(true)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return lib

}