import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserLanding extends Component {
    constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

    componentDidMount(){
        console.log("User Landing Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}