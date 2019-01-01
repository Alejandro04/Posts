import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
import {getCategory, deleteCategory} from '../actions/index'; 

class Category extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getCategory(this.props.params.id); 
  }

  deleteButtonClick(){
    this.props.deleteCategory(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      }); 
  }

  render(){
    if(!this.props.category){
      return <div> Getting category, please wait. </div>; 
    }

    return(
      <div className="container">

      <h3>Name: {this.props.category.name} </h3>

      <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
        Delete Category
      </button> 

      </div>
    );
  }
}

function mapStateToProps(state){
  return { category: state.categories.category}; 
}


export default connect(mapStateToProps, {getCategory, deleteCategory})(Category); 