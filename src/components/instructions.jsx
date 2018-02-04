import React from 'react';
import ReactDOM from 'react-dom';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="instructions">
        <h1> Welcome to Mini-Mindfulness! </h1>
        <h2> A starter's guide to practicing mindful breathing </h2>
        <p>This is a lightweight application meant to ease beginners into a mindfulness practice.</p>
        <p>You can get started in just a few simple steps:</p>
        <ol>
          <li> Pick a duration for your session </li>
          <li> Start The Timer </li>
          <li> Focus on your breathing </li>
          <li> When you catch your mind wandering, click the 'refocus' button then return to your breath</li>
          <li> At the end of the session we'll give you information about how your session went </li>
        </ol>
      </div>
    );
  }
}

export default Instructions;