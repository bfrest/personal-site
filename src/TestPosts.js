import React, { Component } from "react";
import firebase, { auth, provider } from "./firebase.js";

class TestPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      posts: [],
      user: null
    };

    this.setTitle = this.setTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    // This will grab all the posts and also update real time when one is added
    const postsRef = firebase.database().ref("posts");

    postsRef.on("value", snapshot => {
      let posts = snapshot.val();
      let newState = [];

      for (let post in posts) {
        newState.push({
          id: post,
          title: posts[post].title
        });
      }
      this.setState({ posts: newState });
    });
    // end of getting posts

    // this will check if the user was already logged in when the browser refreshes
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
    // end of checking logged in
  }

  logIn = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({ user });
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };

  setTitle = title => {
    this.setState({ title });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this tells the database where we want to store the data
    const postsRef = firebase.database().ref("posts");
    // grabbing the state
    const post = {
      title: this.state.title
    };

    // adding the post to the posts array
    postsRef.push(post);

    // clears out the state
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Auth Shit</h1>
        {this.state.user ? (
          <div>
            <img src={this.state.user.photoURL} />
            <p>{this.state.user.displayName}</p>
          </div>
        ) : (
          <p>You need to log in fool</p>
        )}

        {/*  login & out buttons */}
        {this.state.user ? <button onClick={this.logOut}>Log Out</button> : <button onClick={this.logIn}>Log In</button>}

        {/*  post form */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Blog Title" onChange={e => this.setTitle(e.target.value)} />
          <textarea type="text" name="postBody" placeholder="Post" />
          <button>Send</button>
        </form>

        {this.state.posts.map(item => (
          // this is spitting out the data from firebase
          <div>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default TestPosts;
