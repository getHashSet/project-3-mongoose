import React, { Component } from 'react'

export default class VotePage extends Component {
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
    // This component will use axios to return a movie poster
    // the user will then vote if they liked it or disliked it.
    // there will also be a skip button.
    //
    // props passed to this page will check to see if the user is
    // logged in. If they are not logged in then they can not vote.
    //
    //
    //
    //////////////////////////

    //////////////////////////
    // Hooks
    //////////////////////////

    componentDidMount(){
        console.log("Vote Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    componentDidUpdate(){

    }

    //////////////////////////
    // render
    //////////////////////////

    render() {
        if (this.props.user) {
            // user is logged in.
            return (
                <div>
                    <h1 style={styleTitle}>Vote Page</h1>
                    <h2>You are logged in.</h2>
                </div>
            )
        } else {
            // user is not logged in.
            return(
                <div>
                    <h1 style={styleTitle}> Vote Page </h1>
                    <h2>You are not logged in.</h2>
                </div>
            )
        }
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