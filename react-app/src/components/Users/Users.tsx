import React, { useEffect, useState } from "react";

import UsersTable from "../UsersTable/UsersTable";

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("api/users")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.users);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={3}
                bg="gray.100"
            >
                <Flex align="center" mr={5}>
                    <Image
                        boxSize="64px"
                        src="/img/Nicarao-Agency-Vertical-Logo-Full-Color-Square-Icon.png"
                    />
                    <Text p={3} fontSize="3xl">
                        Laravel React Test Task
                    </Text>
                </Flex>
            </Flex>
            <Flex height="calc(100vh - 136px)">
                <Box w="240px" bg="gray.50">
                    <Box w="100%" p={1} fontSize="2xl">
                        <Link href="users">Users</Link>
                    </Box>
                    <Box w="100%" p={1} fontSize="2xl">
                        <Text>Clear Cache</Text>
                    </Box>
                </Box>
                <Box width="calc(100vw - 240px)" p={3}>
                    {error ? (
                        <Text fontSize="1xl">{error}</Text>
                    ) : !isLoaded ? (
                        <Text fontSize="1xl">Loading...</Text>
                    ) : (
                        <UsersTable users={items} />
                    )}
                </Box>
            </Flex>
            <Flex
                as="footer"
                align="center"
                justify="center"
                wrap="wrap"
                padding={3}
                bg="gray.100"
            >
                <Text>Harold Ulloa Torres</Text>
            </Flex>
        </div>
    );
}
