import React from 'react'
import { NavLinks } from '@/app/constants'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='d-flex gap-4'>
    {NavLinks.map((link, index)=>{
      return (
        <Link key={index} href={link.route}>{link.label}</Link>
      )
    })}
  </div>
  )
}
