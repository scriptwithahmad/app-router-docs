import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Folder 01</h1>
      <Link href={"/f1/f2"}>f2</Link>
    </div>
  )
}

export default page
