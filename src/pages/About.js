import React, { Component } from 'react';
import './About.css';
import profile from "../assets/profile.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile}
                alt="pfp"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Shaw Young</div>
              <div className="brief_description">
                Junior at Virgina Tech studying Computer Science, Business Information Technology, and Math! 
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}