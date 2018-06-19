// LoaderComponent.js

import React, { Component } from 'react';
import logo from './giphy.gif';
import axios from 'axios';

export default class LoaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = this.state = {
        name:'',
        company:'',
        blog: '',
        avatar:'',
        loading: true
       }
      }
       componentDidMount()
       {
         axios.get("https://api.github.com/users/georgioupanayiotis")
           .then(response => {
             this.setState({
               name:response.data.name,
               company:response.data.company,
               blog: response.data.blog,
               avatar:response.data.avatar_url,
               loading: false
             });
           })
           .catch(error => {
             console.log(error);
           });
       }

   render()
   {
    let data;
    console.log('logoooo', logo)
    if (this.state.loading) {
      data = <img src={logo} alt='Loading'/>
    } else {
      data = <div>
                <br/>
                Name: {this.state.name}
                <br/>
                Company: {this.state.company}
                <br/>
                Blog: {this.state.blog}
                <br/>
                <img src={this.state.avatar} alt='Github avatar'/>
            </div>
    }
      return(
      <div>
            {data}
       </div>
      )
   }
}
