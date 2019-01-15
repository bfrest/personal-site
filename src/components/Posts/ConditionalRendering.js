import React, { Component } from "react";
import { PostWrapper } from "./postStyles";
import gear from "../gear.svg";
class Post extends Component {
  render() {
    return (
      <PostWrapper>
        <h1>Conditional Rendering In React</h1>
        <i className="post-date">January 13, 2019</i>

        <p>
          Using conditional rendering can make your application very dynamic. You will be able to get the behavior of your components to perfom exactly like you want them to. A
          really great example is displaying certain things if someone is logged in or not.
        </p>

        <p>There are a couple ways to achieve this and I will be going over each of them. The one you decide to use is all preference on what you think is more readable.</p>

        <h3>If Else Inside The Render</h3>

        <p>We will have a component that will show a log in button if the user is not logged in, or a log out button if the user is logged in. I will show you more below.</p>

        <p>
          Here we have the main home component. Inside I am setting up state to know if the user is logged in or not. I am also setting up the log in & log out functions. I am
          binding those functions to the home component so they know to reference Home when I call the function in other components.
        </p>

        <p>
          I am passing those methods to the corresponding component through props. Inside the two button components, I am setting the method from props to fire when the button is
          clicked.
        </p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547388518/home.png" alt="code sample" />
        </div>

        <p>
          This is the log in component. I have added the onClick event handler to call the function that was passed through props to change state in the home component to true.
        </p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547389470/logIn.png" alt="code sample" />
        </div>

        <p>
          This is the log out component. I have added the onClick event handler to call the function that was passed through props to change state in the home component to false.
        </p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547467588/logOut.png" alt="code sample" />
        </div>

        <h3>Inline If & If/Else Statement</h3>

        <p>
          For Inline if/else statements you can insert the evaluation in the return method. You don't always need to have an else statement just like in vanilla javascript. For
          example the code below will only render the login button if this.state.loggedIn is false. If this.state.loggedIn is true it will just skip over and not render the button.
        </p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547389470/inline.png" alt="code sample" />
        </div>

        <p>
          But lets say you wanted to have it like the first example and render something else if the first evaluation doesn't pass. You can add an else statement simply by swapping
          out the && for a question mark, and adding a colon between the two things you like to render.
        </p>

        <p>If the first evaluation passes it will render the first button, If not it will render the second button.</p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547389471/inlineifElse.png" alt="code sample" />
        </div>

        <h3>Advanced</h3>

        <p>If you want to see a use case I recently had while using styled components.</p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547398735/props.png" alt="code sample" />
        </div>

        <p>
          I was trying to get the text color to match a background theme and some of the choices are gradients. So I needed a way to get the text to have a gradient. I found out
          how from this <a href="https://codepen.io/leocampos/pen/pPwwNR">codepen</a>. But the problem I was having was the background for the blog post is white, and the
          background for one of the themes were white. So the p tag was white and so was the background. I made a little inline if/else statement that checks if the current theme
          background is white then the p tag will be black, and if the background is not white then it will be the theme background color. You can see it in action if you hit
          <img src={gear} alt="logo" className="small-logo" /> then change the theme and scroll up to the date at the top of the page!
        </p>

        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1547398735/propstheme.png" alt="code sample" />
        </div>
      </PostWrapper>
    );
  }
}

export default Post;
