import React from 'react'
import Image from 'next/image'
import { cookies } from 'next/headers'
import Header from './components/header/header'
import BankList from './components/bank/bankList'

const defaultBank = {
  "568852cb-444c-4b30-bfbe-60be2d8ac39e": {
    "name": "Default Color Bank",
    "colors": [
      {
        name: "Red",
        hex: "#FF0000"
      },
      {
        name: "Green",
        hex: "#00FF00"
      },
      {
        name: "Blue",
        hex: "#0000FF"
      }
    ]
  }
}

export default function Home() {
  const cookieStore = cookies()
  const colorBanks = cookieStore.has('colorBanks') ? JSON.parse(cookieStore.get('colorBanks').value) : defaultBank

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-dark">
        <Header />
        <BankList initColorBank={colorBanks} />
      </main>
    </>
  )
}