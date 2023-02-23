import Image from 'next/image'
import type { ReactElement } from 'react'
import figurine from '../public/figurine.png'

export default function Oscar (): ReactElement {
  return (
    <>
       <Image
        src={figurine}
        alt="Picture of the Oscar Figurine"
        width={280}
        height={500}
        placeholder="blur"
      />
    </>
  )
}
