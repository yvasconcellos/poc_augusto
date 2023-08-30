import { Input } from '@chakra-ui/react'
import React from 'react'
import InputMask from 'react-input-mask'

const PhoneMaskInput = ({ value, onChange, ...rest }) => {
  return (
    <InputMask mask="(99) 99999-9999" value={value} onChange={onChange}>
      {() => <Input {...rest} />}
    </InputMask>
  )
}

export default PhoneMaskInput
