import React from "react";

import UserItems from "../UserItems/UserItems";

import PropsUsersTableInterface from "../../interfaces/PropsUsersTableInterface";
import UserInterface from "../../interfaces/UserInterface";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
} from "@chakra-ui/react";

export default function UsersTable(props: PropsUsersTableInterface) {
    const users = props.users;
    const usersItems = users.map((user: UserInterface) => (
        <UserItems key={user.id} user={user} />
    ));

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
            <Tbody>{usersItems}</Tbody>
            <Tfoot>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Type</Th>
                </Tr>
            </Tfoot>
        </Table>
    );
}
