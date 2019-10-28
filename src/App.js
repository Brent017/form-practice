import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: "",
      nutAllergy: "",
      dairyAllergy: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">Choose a destination</option>
            <option value="italy">Italy</option>
            <option value="germany">Germany</option>
            <option value="greece">Greece</option>
          </select>
          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />{" "}
            Vegan:
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="nutAllergy"
              onChange={this.handleChange}
              checked={this.state.nutAllergy}
            />{" "}
            Nut Allergy:
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="dairyAllergy"
              onChange={this.handleChange}
              checked={this.state.dairyAllergy}
            />{" "}
            Dairy Allergy:
          </label>
          <br />

          <button>Submit</button>
        </form>

        <br />
        <h2>Information entered:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <br />
        <p>Your age: {this.state.age}</p>
        <br />
        <p>Your gender: {this.state.gender}</p>
        <br />
        <p>Your destination: {this.state.destination}</p>
        <br />
        <p>Your dietary restrictions: </p>

        <p>
          Vegan: {this.state.isVegan ? "Yes" : "No"}
          <br />
          Nut Allergy: {this.state.nutAllergy ? "Yes" : "No"}
          <br />
          Dairy Allergy: {this.state.dairyAllergy ? "Yes" : "No"}
        </p>
      </main>
    );
  }
}

export default App;
