import React, { Component } from 'react';
import axios from 'axios'

import TicketTable from './TicketTable'
import TicketForm from './TicketForm'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      tickets: []
    }
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=d40f371893f86307')
      .then((response) => {
        const tickets = response.data 
        this.setState(() => ({ 
          tickets
        }))
      })
  }

  handleSubmit = (ticket) => {
    this.setState((prevState) => ({
      tickets: prevState.tickets.concat(ticket) 
    }))
  } 

  render() {
    console.log(this.state.tickets)
    return (
      <div>
        <div className="container" striped>
          <div className="row">
            
            <div className="col-md-9" bordered>
            <h2>Ticket Master</h2>
            <h3>Listing Tickets - { this.state.tickets.length } </h3>
            <TicketTable tickets={this.state.tickets}/>  
            </div>

            <div className="col-md-3">
            <TicketForm handleSubmit={this.handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;