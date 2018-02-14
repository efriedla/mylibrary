import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  
  render() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    // const doubled = url.map((photo) => console.log(photo));
  
    
      
    return (
      <div >
        <h1 >My library</h1>
        <div className="container ">
          <div class="row">
          <div class="col-sm-3 col-xs-5"><BookList /></div>
          <div class="col-sm-9 col-xs-7"><BookDetail /></div>

          
          
          </div>
       
        </div>
       
        
        
      </div>
    );
  }
}

export default App;
