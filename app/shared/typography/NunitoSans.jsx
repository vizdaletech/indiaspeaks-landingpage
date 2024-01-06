import { nunito_sans } from '@/typography/font'
import React from 'react'

const NunitoSans = ({children}) => {
  return (
    <p className={`${nunito_sans.className}`}>
        {children}
    </p>
  )
}

export default NunitoSans