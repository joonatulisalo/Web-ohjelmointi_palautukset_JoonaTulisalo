import React from 'react';
import data from './components/Data.json'

import SearchBar from './components/SearchBar';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      discs: data.discs,
      discSearchString: ""
      
       }
    }
    SearchBarChange = (event) => {
      this.setState({ discSearchString: event.target.value });
    
  }

  render(){
    return(
      <>
      <input type="text" placeholder="Search..." onChange={this.SearchBarChange} value={this.state.discSearchString}/>
      <SearchBar
      discs={this.state.discs.filter((item) => item.disc.toLowerCase().includes(this.state.discSearchString.toLowerCase()))}
      />
      </>
    )
  }
}
  
export default App;
