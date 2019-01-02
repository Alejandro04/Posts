import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form'; 
import {createSubCategory} from '../actions/index'; 

class NewSubCategory extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createSubCategory(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render(){
    const {fields:{title}, handleSubmit} = this.props; 

    return(
      <div className="container">

      <h1> Create a new SubCategory </h1> 

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'NewSubCategoryForm',
  fields: ['title'] 
}, null, {createSubCategory})(NewSubCategory); 
