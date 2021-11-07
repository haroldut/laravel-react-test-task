import React, { useEffect, useState } from "react";

import UsersTable from "../UsersTable/UsersTable";

import UserInterface from "../../interfaces/UserInterface";

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const groupItems = items.reduce((acc: any, item: UserInterface) => {
        if (!acc[item.user_type]) {
            acc[item.user_type] = [];
        }

        acc[item.user_type].push(item);
        console.log(acc);
        return acc;
    }, {})

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
            <Flex minHeight="calc(100vh - 136px)">
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
                        <Tabs>
                            <TabList>
                                <Tab>Admin</Tab>
                                <Tab>Staff</Tab>
                                <Tab>Customer</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    {groupItems['admin'] !== undefined ? <UsersTable users={groupItems['admin']} /> : <Text fontSize="1xl">There are no admin users</Text>}
                                </TabPanel>
                                <TabPanel>
                                    {groupItems['staff'] !== undefined ? <UsersTable users={groupItems['staff']} /> : <Text fontSize="1xl">There are no staff users</Text>}
                                </TabPanel>
                                <TabPanel>
                                    {groupItems['customer'] !== undefined ? <UsersTable users={groupItems['customer']} /> : <Text fontSize="1xl">There are no customer users</Text>}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

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
