import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
	  return (
	    <li
		  key={book.title}
		  onClick={() => this.props.selectBook(book)}
		  className="list-group-item">
		  {book.title}
		</li>
      );
    });
  }

  render() {
	return (
		<ul className="list-group col-sm-4">
		  {this.renderList()}
		</ul>
	);
  };
};

/* take app state as arg and whatever gets returned from
   here will show up as props in this container
   this function is the glue between react and redux */
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

/* anything returned from this function will end up as props on
    BookList container. i.e. this.props.selectBook */
function mapDispatchToProps(dispatch) {
  /* whenever selectBook is called, result should be passed to all our reducers.
     The purpose of bindActionCreators & dispatch is to take what is returned from selectBook
     and make sure it flows through all the reducers */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*connect() takes two args 1)function 2)a component
  promote BookList from a component to a container/smart-component -it needs
  to know about this new dispatch method selectBook. Make it available as a prop */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
