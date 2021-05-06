import React, { Component } from "react";
import { connect } from 'react-redux';
import { createPost } from "../actions/postActions"

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ''
           
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //Call Action
        this.props.createPost(post);

    }

    render () {
        return (
            <div>
                <h1>Add Posts</h1>
                <form>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div> 
                    <br />   
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div> 
                    <br />
                    <button onClick={this.onSubmit} type="submit">Submit</button>
                </form>                
            </div>
        )
    }
}




export default connect(null, { createPost })(Postform);