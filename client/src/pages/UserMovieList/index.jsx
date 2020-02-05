import React, { Component } from 'react'

export default class UserMovieList extends Component {
    constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

    componentDidMount(){
        console.log("User Movie List Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    render() {
        return (
            <div>
                <h1>User Movie List</h1>
            </div>
        )
    }
}
