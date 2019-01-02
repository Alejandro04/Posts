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
      return this.props.subcategories[0].map((subcat) => {
        return (
          <li key={subcat.id}>
            <Link to={"categories/" + subcat.id}>
              <h4> {subcat.name} </h4>
            </Link>
          </li>
        )
      });
    }
  }
  render() {
    return (
        <div className="container">

            <div>
                <Link to="subcategory/new" className="btn btn-warning">
                    Create SubCategory
                </Link>
            </div>

            SubCategories
            <ul className="list-group">
                {this.renderSubCategories()}
            </ul>
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