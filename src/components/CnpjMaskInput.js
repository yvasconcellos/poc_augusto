import { Input } from '@chakra-ui/react'
import React from 'react'
import InputMask from 'react-input-mask'

const CnpjMaskInput = ({ value, onChange, ...rest }) => {
  return (
    <InputMask mask="99.999.999/9999-99" value={value} onChange={onChange}>
      {() => <Input {...rest} />}
    </InputMask>
  )
}

export default CnpjMaskInput
