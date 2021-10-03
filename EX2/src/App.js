import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  
}
  addCarrots= () =>{
    this.setState({ items: [...this.state.items, {id: 5, value: "Carrots", qty: 8, unit: 'pcs'}] });
  }
  addStrawberries= () =>{
    this.setState({ items: [...this.state.items, {id: 6, value: "Strawberries", qty: 2, unit: 'ltr'}] });
  }
  addBeans= () =>{
    this.setState({ items: [...this.state.items, {id: 7, value: "Beans", qty: 1, unit: 'ltr'}] });
  }
  addBacon= () =>{
    this.setState({ items: [...this.state.items, {id: 8, value: "Bacon", qty: 4, unit: 'pcs'}] });
  }    
  addItems = (itemName,quantity,type) =>{
    
    return() =>{
      const results = this.state.items.findIndex((element, index, array)=>{
        if(element.value === itemName){
          return true
        }
        else{
          return false
        }
      });
      if(results != -1){
        let newItems = [...this.state.items];
        newItems[results].qty += quantity;
        this.setState({ items: newItems});
      }
      else{

      

      this.setState({ items: [...this.state.items, {value:itemName, qty: quantity, unit:type}] });
      }
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addItems('Carrots',8,'pcs')}
      > Carrots </button>
      <button onClick={this.addItems('Strawberries',2,'ltr')}
      > Strawberries</button>
      <button onClick={this.addItems('Beans',1,'ltr')}
      > Beans</button>
      <button onClick={this.addItems('Bacon',4,'pcs')}
      > Bacon</button>
    </div>
  }
}

export default App;