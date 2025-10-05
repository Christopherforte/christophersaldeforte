import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      likes: 0,
      dislikes: 0
    };
  }


  handleLike = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  };

  handleDislike = () => {
    this.setState(prevState => ({
      dislikes: prevState.dislikes + 1
    }));
  };

  render() {
    return (
      <div className="content-rating">
        <h1>Text Content Rating</h1>

        <p>Am i handsome?</p>

        <div className="rating-buttons">
          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
