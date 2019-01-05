import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createSubCategory, getAllCategories} from '../actions/index'; 

class NewSubCategory extends Component{
  
  componentWillMount(){
    this.props.getAllCategories()
  }

  categories() {
    if (this.props.categories[0] !== undefined) {
      return this.props.categories[0].map((category) => {
        return (
          <option value={category.id}>{category.name}</option> 
        )
      });
    }
  }

  onSubmit(e){
    e.preventDefault()
    const data = {
        name: this.refs.name.value,
        category_id: this.refs.category_id.value,
    }

    this.props.createSubCategory(data)
  }

  render(){
    return(
      <div className="container">

        <h1> Create a new SubCategory </h1> 

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" 
              className=""
              placeholder="Name"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-group">
            <label>Categories</label>
            <select name="category_id" ref="category_id">
              {this.categories()}
            </select> 
          </div>
          
          <button type="submit" className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

const mapDispatchToProps = {
  createSubCategory,
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSubCategory); 
