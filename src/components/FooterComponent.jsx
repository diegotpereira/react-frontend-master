import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <footer className ="footer">
                    <span className = "text-muted">Todos Direitos Reservados 2020 https://github.com/diegotpereira </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent