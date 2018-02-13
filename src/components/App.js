import React, { Component } from 'react';
import BookList from '../containers/BookList';

class App extends Component {
  
  render() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    // const doubled = url.map((photo) => console.log(photo));
  
    
      
    return (
      <div >
        <div class="container">
          <h1 >My library</h1>
          <BookList />
        </div>
       
        
        
      </div>
    );
  }
}

export default App;
