import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createCategory} from '../actions/index'; 

class NewCategory extends Component{

  onSubmit(e){
    e.preventDefault()
    const data = {
        name: this.refs.name.value,
    }
    this.props.createCategory(data)
  }

  render(){
    return(
      <div className="container">

      <h1> Create a new category </h1> 

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
  createCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory); 