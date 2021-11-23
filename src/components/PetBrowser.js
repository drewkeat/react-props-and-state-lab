import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {

  generatePets = () => {
    return this.props.pets.map(petDetails => {
      return <Pet key={petDetails.id} pet={petDetails} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">
      {this.generatePets()}
    </div>;
  }
}

export default PetBrowser;
