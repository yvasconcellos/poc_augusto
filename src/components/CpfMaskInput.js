import { Input } from '@chakra-ui/react'
import React from 'react'
import InputMask from 'react-input-mask'

const CpfMaskInput = ({ value, onChange, ...rest }) => {
  return (
    <InputMask mask="999.999.999-99" value={value} onChange={onChange}>
      {() => <Input {...rest} />}
    </InputMask>
  )
}

export default CpfMaskInput
