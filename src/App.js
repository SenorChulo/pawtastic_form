import React, {Component} from 'react';
import './components/rename_later.js'
import './App.css';

export default class app extends Component {
 




  render() {
    return(
      <div class ="Container">
        <div class ="Row1">
          <ul class="list">
            <li class="l1">Human Profile</li>
            <li class="l2">Pet Basics</li>
            <li class="l3">Pet Details</li>
            <li class="l4">Confirm</li>
          </ul>
        </div>
        <div class =" Row2">
          <h1 class="h1">Yay, we love dogs!Give us the basics about your pup.</h1>
          <div class="name1">Name</div>
          <input class="name"/>
          <div class="breed1">Breed</div>
          <input class="breed"/>
          <div class="birthday1">Birthday</div>
          <input class="birthday"/>
          <div class="gender">Gender</div>
          <input type="checkbox" id="toggle" class="checkbox" />
          <label for="toggle" class="switch">red</label>
          <button class="back" onClick="">Back</button>
          <button class="next" onClick="">Next</button>
          <div class="spayed">Spayed or Neutered</div>
          <input type="checkbox" id="neut" class="box" />
          <label for="neut" class="neuter">blue</label>
          <div class="weight">Weight</div>
          <input type="checkbox" id="four" class="for" />
          <label for="four" class="fourth">fourth</label>
        </div>
      </div>
    )
  }
}
