import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
} from '@chakra-ui/react'

import UserItems from '../UserItems/UserItems'
import PropsUsersTableInterface from '../../interfaces/PropsUsersTableInterface'
import UserInterface from '../../interfaces/UserInterface'

export default function UsersTable({users}: PropsUsersTableInterface) {
  return (
    <Table variant="simple">
      <TableCaption>User List</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Type</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user: UserInterface) => (
          <UserItems key={user.id} user={user} />
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Type</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
