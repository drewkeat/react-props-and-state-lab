import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {...this.state.filters,
      type: event.target.value,}
    })
  }

  onFindPetsClick = (event) => {
    const urls = {
      'all':'/api/pets',
      'cat':'/api/pets?type=cat',
      'dog':'/api/pets?type=dog',
      'micropig':'/api/pets?type=micropig',
    }
    fetch(`${urls[this.state.filters.type]}`).then(resp => resp.json()).then(data => this.setState({
      pets: [...data]
    }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
