import React, { Component } from 'react'
import Nav from "../component/navbar"
import FormField from "../component/FormField"

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <FormField  label="Name"  type="text" placeholder="e.g Alex Smith"/>
                <FormField  label="Email"  type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
        )
    }
}
