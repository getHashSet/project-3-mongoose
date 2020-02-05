import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserLanding extends Component {
    constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

    //////////////////////////
    // Notes
    //////////////////////////
    //
    // 
    //
    // 
    //
    //
    //
    //////////////////////////

    //////////////////////////
    // Hooks
    //////////////////////////

    componentDidMount(){
        console.log("User Landing Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    //////////////////////////
    // render()
    //////////////////////////

    render() {
        return (
            <div>
                <h1 style={styleTitle}>User Home Page</h1>
            </div>
        )
    }
}

    //////////////////////////
    // styles
    //////////////////////////

    let styleTitle = {
        color: "#000000",
        fontSize: "5em",
        fontWeight: "900"
    };