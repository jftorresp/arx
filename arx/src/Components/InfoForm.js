import React from "react";
import logoLogin from "../images/logo_Arx_Blanco.png";
import axios from "axios";
import { Link } from "react-router-dom";

class InfoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      genero: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { lastname, firstname, email, genero } = this.state;

    const form = await axios.post("/api/form", {
      lastname,
      firstname,
      email,
      genero
    });
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-b-160 p-t-50">
            <form
              onSubmit={this.handleSubmit}
              className="login100-form validate-form"
            >
              <span className="login100-form-title">
                <Link to="/First">
                  <img src={logoLogin} alt="" />
                </Link>
              </span>

              <div
                className="wrap-input100 rs1 validate-input"
                data-validate="Username is required"
              >
                <input
                  className="input100 has-val"
                  type="text"
                  name="firstname"
                  onChange={this.handleChange}
                />
                <span className="label-input100">Nombre</span>
              </div>

              <div
                className="wrap-input100 rs2 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100 has-val"
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                />
                <span className="label-input100">Apellido</span>
              </div>

              <div className="wrap-input100-b validate-input">
                <input
                  className="input100 has-val"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
                <span className="label-input100">Email</span>
              </div>

              <div className="wrap-input100-b validate-input">
                <select
                  className="input100 has-val"
                  name="genero"
                  onChange={this.handleChange}
                >
                  <option />
                  <option>Hombre</option>
                  <option>Mujer</option>
                </select>
                <span className="label-input100">Género</span>
              </div>

              <div className="container-login100-form-btn">
                <button
                  onClick={this.handleClick}
                  className="login100-form-btn"
                >
                  Obtener Información
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoForm;
