import React from "react";

import PropsUserItemInterface from "../../interfaces/PropsUserItemInterface";

import { Tr, Td } from "@chakra-ui/react";

export default function UserItems(props: PropsUserItemInterface) {
    const user = props.user;

    return (
        <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.user_type}</Td>
        </Tr>
    );
}
