import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {getCategory} from '../actions/index'; 

class SubCategory extends Component{

  componentWillMount(){
   // this.props.getCategory(this.props.params.id); 
  }

  render(){ 
    return(
      <div className="container">

      <h3>Name:  </h3>

      <button className="btn btn-warning">
        Delete SubCategory
      </button> 

      </div>
    );
  }
}

/*
function mapStateToProps(state){
  return { category: state.categories.category}; 
}
*/

export default SubCategory