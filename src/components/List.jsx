// eslint-disable-next-line no-restricted-globals

import React from "react";
import { withRouter } from 'react-router-dom'    
import queryString from 'query-string';


class List extends React.Component {
    constructor() {
        super();

        this.state = {
            employees: [
                { 
                    firstname: "Jill",
                    lastname: "Smith",
                    age: 50,
                    company: "apple"
                },
                { 
                    firstname: "Eve",
                    lastname: "Jackson",
                    age: 94,
                    company: "apple"
                },
                { 
                    firstname: "Mike",
                    lastname: "Freakson",
                    age: 32,
                    company: "google"
                },
                { 
                    firstname: "James",
                    lastname: "Felixson",
                    age: 18,
                    company: "microsoft"
                },
            ],
            companies: ["microsoft", "google", "apple", "samsung"],
            selectedCompany: "",
            minAge: "",
            maxAge: ""
        };
    }
    
    componentDidMount() {
        // const { search } = this.props.location;
        // const searchParams = new URLSearchParams(search);
        // for(var param of searchParams.entries()) {
        //     console.log(param);
        //     param.forEach((key) => {
        //         console.log(key);
        //         console.log("zz");
        //         if(key === "company") {
        //             this.setState({selectedCompany: param[0]});
        //         }
        //     });

            // if(param[0] === "company") {
            //     this.setState({selectedCompany: param[1]});
            // }
        // }
    }

    handleSelect = (e) => {
        this.setState({selectedCompany: e.target.value});

        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('company', e.target.value);
        this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
    }

    
    handleInput = (e) => {
        if(e.target.name === "minAge") {
            this.setState({minAge: e.target.value});

            let currentUrlParams = new URLSearchParams(window.location.search);
            currentUrlParams.set('minAge', e.target.value);
            this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
        }

        if(e.target.name === "maxAge") {
            this.setState({maxAge: e.target.value});

            let currentUrlParams = new URLSearchParams(window.location.search);
            currentUrlParams.set('maxAge', e.target.value);
            this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
        }
    }

    render() {
        return (
            <>
                <div>
                    <select onChange={this.handleSelect} value={this.state.selectedCompany}>        
                        {this.state.companies.map((company, i) => (     
                            <option key={i}>{company}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input onChange={this.handleInput} type="text" name="minAge" placeholder="min age" />
                    <input onChange={this.handleInput} type="text" name="maxAge" placeholder="max age" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, i) => (   
                            this.state.selectedCompany === employee.company ?                 
                            <tr key={i}>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.age}</td>
                                <td>{employee.company}</td>
                            </tr> : null
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default withRouter(List);