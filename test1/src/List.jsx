import React from "react";

class Table extends React.Component {
    state = {
        pets:[],
    };

    componentDidMount(){
        fetch("/pets")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ pets: json });
      });
    }

    render() {
        let arr = [];
        let pets = this.state.pets;
        return (
            <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Animal</th>
              <th scope="col">City</th>
              <th scope="col">Breed</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.animal}</td>
                  <td>{el.city}</td>
                  <td>{el.breed}</td>
                 </tr>
              );
            })}
          </tbody>
        </table>

        </div>

        )
    }
}

export default Table;