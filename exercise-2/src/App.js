import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
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

  checkList(id) {
    return this.state.items.map(element => element.id).includes(id);
  }

  addItem(id, value, qty, unit) {
    if (this.checkList(id)) {
      this.setState({
        items: [...this.state.items].map((element) => {
          if (element.id === id) element.qty += qty;
          return element;
        })
      })
    }

    else {
      this.setState({ items: [...this.state.items, { id: id, value: value, qty: qty, unit: unit }] })
    }
  }

  render() {
    const { applicationDescription, applicationName } = this.props;
    return <div className={styles.shoppingList}>
      <Title
        applicationDescription={applicationDescription}
        applicationName={applicationName}
      />
      <ShoppingList items={this.state.items} />
      <button onClick={() => {
        this.addItem(5, 'Carrots', 5, 'pcs');
        //this.setState({ items: [...this.state.items, { id: 5, value: 'Carrots', qty: 5, unit: 'pcs' }] })
      }
      }> Add Carrots </button>

      <button onClick={() => {
        this.addItem(6, 'Strawberries', 3, 'pcs');
        //this.setState({ items: [...this.state.items, { id: 6, value: 'Strawberries', qty: 5, unit: 'pcs' }] })
      }
      }> Add Strawberries </button>

      <button onClick={() => {
        this.addItem(7, 'Yoghurt', 1, 'ltr');
        //this.setState({ items: [...this.state.items, { id: 7, value: 'Yoghurt', qty: 1, unit: 'ltr' }] })
      }
      }> Add Yoghurt </button>

      <button onClick={() => {
        this.addItem(8, 'Beer', 5, 'cans');
        //this.setState({ items: [...this.state.items, { id: 8, value: 'Beer', qty: 5, unit: 'cans' }] })
      }
      }> Add Beer </button>
    </div>
  }
}

export default App;