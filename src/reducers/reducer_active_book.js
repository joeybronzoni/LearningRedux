/* state argument is not application state, only
the state that this reducer is responsible for */
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
	  return action.payload;
  }

  return state;

};
/* redux doesn't really allow you return 'undefined'  from a reducer
   it will throw an err so you must always return a non-undefined value
   hence the default state=null as an arg (es6 syntax)
*/
