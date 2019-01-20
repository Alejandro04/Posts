import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllSubCategories} from '../actions/index';
import { Link } from 'react-router-dom';

class SubCategories extends Component {
  
  componentWillMount() {
    this.props.getAllSubCategories();
  }

  renderSubCategories() {
    if (this.props.subcategories[0] !== undefined) {
      return this.props.subcategories[0].slice(0).reverse().map((subcat) => {
        return (
            <Link to={"subcategory/" + subcat.id} className="list-group-item">
              <h4 className="list-group-item-heading"> {subcat.name} </h4>
            </Link>
        )
      });
    }
  }
  render() {
    return (
        <div className="container">

            <div>
                <Link to="subcategory/new" className="btn btn-warning btn-create">
                    Create SubCategory
                </Link>
            </div>

            <h4 className="title-section">SubCategories  <a href="/dashboard" className="btn btn-link">Back</a></h4>
            <div class="list-group">
                {this.renderSubCategories()}
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { subcategories: state.subcategories }
}

const mapDispatchToProps = {
  getAllSubCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories); 