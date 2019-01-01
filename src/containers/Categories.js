import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions/index'; 
import { Link } from 'react-router-dom';

class Categories extends Component{
  componentWillMount(){
    this.props.getCategories();  
  } 

  renderCategories(){
    return this.props.categories.map((category) => {
      return (
        <li key={category.id}> 
          <Link to={"categories/" + category.id }>
            <h4> {category.title} </h4> 
          </Link> 
        </li> 
      )
    });
  }
  render(){
    return(
      <div className="container">

      <div>
      <Link to="category/new" className="btn btn-warning">
      Create Category
      </Link> 
      </div>

      Categories
      <ul className="list-group">
      {this.renderCategories()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {categories: state.categories.all } 
}

export default connect(mapStateToProps, {getCategories: getCategories })(Categories); 