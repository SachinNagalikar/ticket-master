import React from 'react'
import {Button} from 'reactstrap'
const TicketRow = (props) => {
    return ( <tr >
        <td ><Button>{ props.ticket_code}</Button></td>
        <td >{props.name}</td>
        <td >{props.department}</td>
        <td >{props.message}</td>
        <td >{props.priority}</td>
        <td > < input type="checkbox" defaultChecked={props.status === 'completed'}/></td >
        </tr>
    )
}

export default TicketRow


