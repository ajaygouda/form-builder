import { Navbar } from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar name="Users" isSearch={false} />
      <div>Dashboard</div>
    </>
  )
}

export default page