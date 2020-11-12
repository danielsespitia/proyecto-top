import React from 'react' 

class FormSignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit(e) => {

  }

  handleChange(e) => {

  }

  render() {
    const { email, password } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <label
          htmlFor="email"
        >
          Correo electronico
        </label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={this.handleChange}
          value={email}
          placeholder="Correo electronico"
          required
        />
        <label 
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={this.handleChange}
          value={password}
          placeholder="***********"
          required
        />
        <ContainerButton className="Form__subtmit-span">
          <ButtonPrimary
            className="Form__submit-input"
            type="submit"
            value="Iniciar sesión"
          />
        </ContainerButton>
      </form>
    )
  }
}

export default FormSignIn