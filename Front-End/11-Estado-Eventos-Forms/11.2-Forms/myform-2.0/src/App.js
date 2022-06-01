import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Nome: '',
    Email: '',
    Cpf: '',
    Endereco: '',
    Cidade: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
    console.log(this.state);  
  }  

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <label>Nome:</label>
            <input 
            name='Nome' 
            onChange={this.handleChange}
            />

            <label>Email:</label>
            <input 
            name='Email' 
            onChange={this.handleChange}
            />

            <label>CPF:</label>
            <input 
            name='Cpf' 
            onChange={this.handleChange}
            />
            <br />
            <br />

            <label>Endereço:</label>
            <input 
            name='Endereco' 
            onChange={this.handleChange}
            />

            <label>Cidade:</label>
            <input 
            name='Cidade' 
            onChange={this.handleChange}
            />

            <select>
              <option value='SP'>São Paulo</option>
              <option value='RJ'>Rio de janeiro</option>
              <option value='PA'>Pará</option>
              <option value='ES'>Espirito Santo</option>
              <option value='MG'>Minas Gerais</option>
              <option value='AM'>Amazonas</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='SC'>Santa Catarina</option>
              <option value=''>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
              <option value='x'>x</option>
            </select>

          </fieldset>
        </form>
      </div>
    );
  }  
}

export default App;
