import React from 'react'
import TicketRow from './TicketRow'
import {Table} from "reactstrap"
const TicketTable = (props) => {
    return ( <Table striped hover>
        <thead>
        <tr>
                 <th> code </th> 
                < th > name </th>
                <th > department </th>
                <th > message </th>
                <th > priority </th>
                <th > status </th> 
        </tr> 
        </thead>
        <tbody> {
            props.tickets.map((ticket) => {
                return ( <TicketRow key = {ticket.ticket_code}
                    ticket_code = {ticket.ticket_code}
                    name = {ticket.name}
                    department = {ticket.department}
                    message = {ticket.message}
                    priority = {ticket.priority}
                    status={ticket.status}
                />)
            })
        }</tbody>
    </Table>
    )
}

export default TicketTable