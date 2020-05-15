import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      usr: [],
      newName: '',
      newLastNam: ''
    }
  }
  

  crt = (e) =>{
    e.preventDefault();
    if(!this.state.newName || !this.state.newLastNam){
      alert("Por favot llena los campos")
    }else{
      e.preventDefault();
      this.setState({
        usr: this.state.usr.concat({
          name: this.state.newName,
          lastname: this.state.newLastNam,
        }),
        newName: '',
        newLastNam: '',
      });
    }
   
  }

  changN = (e) => {
    this.setState({
      newName: e.target.value,
    });
    
  }

  changLn = (e) => {
    this.setState({
      newLastNam: e.target.value,
    });
  }
  


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.crt}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="first-name" 
                  value={this.state.newName}
                  onChange={this.changN}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="last-name" 
                  value={this.state.newLastNam}
                  onChange={this.changLn}
                  />
              </div>

              <div className="action">
                <button type="submit" 
                className="btn btn-primary"
                >Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
                  {this.state.usr.map((usr, ind)=>
                    <tr key={ind}> 
                      <td >{usr.name}</td>
                      <td >{usr.lastname}</td>
                    </tr>
                   )}
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


