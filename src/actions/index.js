export function selectBook(book) {
  /* selectBook is an ActionCreator, it needs to return an action, an
  object with a 'type' property. An action always contains a type and
   sometimes a payload*/
  return {
	type: 'BOOK_SELECTED',
	payload: book
  };
}

/*just as does the reducer with {connect}, the action functions have 2part process
  1) write the function/action
  2) wire the function into our react application
*/
