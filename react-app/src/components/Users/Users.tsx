import React, {useEffect, useState} from 'react'

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react'

import UsersTable from '../UsersTable/UsersTable'
import {useAppSelector, useAppDispatch} from '../../hooks'
import {actions} from '../../usersSlice'

export default function Users() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useAppDispatch()
  const [tabIndex, setTabIndex] = React.useState(0)
  const [filterValue, setFilterValue] = useState('admin')

  const adminUsers: any = useAppSelector((state) =>
    state.items.find((item: any) => item.payload.type === 'admin')
  )

  const staffUsers: any = useAppSelector((state) =>
    state.items.find((item: any) => item.payload.type === 'staff')
  )

  const customerUsers: any = useAppSelector((state) =>
    state.items.find((item: any) => item.payload.type === 'customer')
  )

  useEffect(() => {
    if (filterValue) {
      fetch('api/users?type=' + filterValue)
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(
              actions.addItems({
                type: filterValue,
                users: result.users,
              })
            )
            setIsLoaded(true)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
    }
  }, [dispatch, filterValue])

  const handleTabsChange = (index: number) => {
    setIsLoaded(false)
    setTabIndex(index)
    switch (index) {
      case 0:
        setFilterValue('admin')
        break
      case 1:
        setFilterValue('staff')
        break
      case 2:
        setFilterValue('customer')
        break
      default:
        break
    }
  }

  const goToUsers = () => {
    window.location.replace('/users')
  }

  const clearCache = () => {
    fetch('api/refresh-cache')
      .then((res) => res.json())
      .then((result) => {
        setFilterValue('')
        dispatch(actions.clearItems())
        handleTabsChange(0)
      })
  }

  return (
    <div>
      <Flex
        as="header"
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
      <Flex
        flexWrap={{base: 'wrap', lg: 'nowrap'}}
        height={{base: 'auto', lg: 'calc(100vh - 136px)'}}
      >
        <Box
          w={{base: '100vw', lg: '240px'}}
          h={{base: 'max-content', lg: 'auto'}}
          bg="gray.50"
        >
          <Box w="100%" paddingY={1} paddingX={3} fontSize="2xl">
            <Button variant="link" onClick={goToUsers}>
              Users
            </Button>
          </Box>
          <Box w="100%" paddingY={1} paddingX={3} fontSize="2xl">
            <Button variant="link" onClick={clearCache}>
              Clear Cache
            </Button>
          </Box>
        </Box>
        <Box
          w={{base: '100vw', lg: 'calc(100vw - 240px)'}}
          p={3}
          overflowY="scroll"
        >
          {error ? (
            <Text fontSize="1xl">{error}</Text>
          ) : (
            <Tabs index={tabIndex} onChange={handleTabsChange} overflowY="auto">
              <TabList>
                <Tab>Admin</Tab>
                <Tab>Staff</Tab>
                <Tab>Customer</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {adminUsers !== undefined ? (
                    <UsersTable users={adminUsers.payload.users} />
                  ) : isLoaded ? (
                    <Text fontSize="1xl">There are no admin users</Text>
                  ) : (
                    <Center p={3}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Center>
                  )}
                </TabPanel>
                <TabPanel>
                  {staffUsers !== undefined ? (
                    <UsersTable users={staffUsers.payload.users} />
                  ) : isLoaded ? (
                    <Text fontSize="1xl">There are no staff users</Text>
                  ) : (
                    <Center p={3}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Center>
                  )}
                </TabPanel>
                <TabPanel>
                  {customerUsers !== undefined ? (
                    <UsersTable users={customerUsers.payload.users} />
                  ) : isLoaded ? (
                    <Text fontSize="1xl">There are no customer users</Text>
                  ) : (
                    <Center p={3}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Center>
                  )}
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
        <Text>
          Harold Ulloa Torres -{' '}
          <Link href="http://haroldut.com">haroldut.com</Link>
        </Text>
      </Flex>
    </div>
  )
}
