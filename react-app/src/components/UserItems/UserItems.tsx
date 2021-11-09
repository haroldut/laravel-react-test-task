import React from 'react'

import {Tr, Td} from '@chakra-ui/react'

import PropsUserItemInterface from '../../interfaces/PropsUserItemInterface'

export default function UserItems({user}: PropsUserItemInterface) {
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.user_type}</Td>
    </Tr>
  )
}
