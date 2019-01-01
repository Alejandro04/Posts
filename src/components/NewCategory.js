import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form'; 
import {createCategory} from '../actions/index'; 

class NewCategory extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createCategory(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render(){
    const {fields:{title}, handleSubmit} = this.props; 

    return(
      <div className="container">

      <h1> Create a new category </h1> 

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
  form: 'NewCategoryForm',
  fields: ['title'] 
}, null, {createCategory})(NewCategory); 
