import React, { Component } from 'react'

export default class UserMovieList extends Component {
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
        console.log("User Movie List Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    //////////////////////////
    // Render()
    //////////////////////////

    render() {
        return (
            <div>
                <h1 style={styleTitle}>User Movie List</h1>
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