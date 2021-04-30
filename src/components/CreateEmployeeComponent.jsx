import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then( (res) => {
                let employee =  res.data;

                this.setState({firstName: employee.firstName,
                               lastName: employee.lastName,
                               emailId: employee.emailId
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));


        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if (this.state.id === '_add') {
            return <h3 className="text-center">Novo Funcionário</h3>
        } else {
            return <h3 className="text-center">Atualizar Funcionário</h3>
        }
    }
    render(){
        return (
            <div>
                <br></br>

                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Nome: </label>
                                        <input placeholder="Digite seu nome" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>

                                    <div className = "form-group">
                                            <label> SobreNome: </label>
                                            <input placeholder="Digite seu Sobrenome" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                            <label> E-mail Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateEmployeeComponent