import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";

class Posts extends Component {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row"></div>
          <div className="col-md-12"></div>
          <PostForm />
        </div>
      </div>
    );
  }
}

export default Posts;
