import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


function index() {
    const [tokenData, setTokenData] = useState([])
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
          try {
            const parsedData = JSON.parse(storedToken)
            if (Array.isArray(parsedData)) {
              setTokenData(parsedData)
            }
          } catch (error) {
            console.error('Error parsing token data:', error)
          }
        }
      }, [])
  return (
    <div>index</div>
  )
}

export default index