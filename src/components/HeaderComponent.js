import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bd-dark">
                        <div><a href="https://github.com/diegotpereira" className="navbar-brand">Aplicativo de gerenciamento de funcionários</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent