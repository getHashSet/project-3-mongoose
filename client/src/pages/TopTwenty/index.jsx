import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TopTwenty extends Component {
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
        console.log("Top Twenty Movies Page Mounted");
        console.log(`Props: ${console.log(this.props)}`);
    }

    //////////////////////////
    // render()
    //////////////////////////

    render() {
        return (
            <div>
                <h1 style={styleTitle}>Top Twenty Movies</h1>
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