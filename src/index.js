import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Person  from './Components/Person';
import App from './App';
import { Todolist } from './Components/Todolist';
import Product from './Components/Products/product';
import ShoppingList from './Components/ShoppingList/shoppinglist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <App></App>
//    self closing tag
    <div>
    <App />
    
    {/* <Person></Person>
    <Todolist></Todolist> */}
    {/* <Product></Product> */}
    <ShoppingList></ShoppingList>
    </div>
);

