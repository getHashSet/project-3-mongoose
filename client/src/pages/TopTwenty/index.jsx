import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TopTwenty extends Component {
    constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
    }
    
    componentDidMount(){
        console.log("Top Twenty Movies Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    render() {
        return (
            <div>
                <h1>Top Twenty Movies</h1>
            </div>
        )
    }
}