import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from '../containers/book-list';

/* so we are manipulating our app's state over time through the use
   of actionCreators and !!** our component's state is completely
   different/not-related from our applications state */
class BookDetail extends Component {
  render(){
	/* this check is neccesary here because the BOOK_SELECTED action
       starts as null so we want to return early if that is the case
    */
	if (!this.props.book){
      return <div>Select a book to get started</div>;
	}

    return (
      <div>
		<h3>Details for:</h3>
		<div>Title: {this.props.book.title}</div>
		<div>Pages: {this.props.book.pages}</div>
	  </div>
	);
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
