import axios from "axios"
import { api } from "../actions/api"
import { useEffect, useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export const UserData = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        await axios.post(api + "/userdata")
            .then((res) => {
                setData(res?.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Bootcamp students data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>First name</Th>
                            <Th>Last name</Th>
                            <Th>Age</Th>
                            <Th>Mobile Number</Th>
                            <Th>Email</Th>
                            <Th>Password</Th>
                            <Th>Gender</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((val) => (
                                <Tr>
                                    <Td>{val.Fname}</Td>
                                    <Td>{val.Lname}</Td>
                                    <Td>{val.Age}</Td>
                                    <Td>{val.Mnum}</Td>
                                    <Td>{val.Email}</Td>
                                    <Td>{val.Pwd}</Td>
                                    <Td>{val.Gen}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}