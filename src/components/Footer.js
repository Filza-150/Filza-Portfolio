import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            Small Steps, Big Dreams <span className='text-primary text-2xl px-1'>&#9825;</span>
            <Link href="https://www.linkedin.com/in/filza-naeem-2a414131a/" className='underline
            underline-offset-2
            ' target={"_blank"}>Let&apos;s Connect</Link>
            </div>
            <Link href="https://www.linkedin.com/in/filza-naeem-2a414131a/" className='underline
            underline-offset-2
            ' target={"_blank"}>say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
