import {createStore} from 'redux'; // redux method ko import kar diye 
import BookReducer from './BookReducer'; // ye bhi import kar diye aapn ne 



const store = createStore(BookReducer) // aur yaha par us me store me dal diye 

// jo bhi update honge waha dikhe ge 

export default store; // export kar diye aapn ne 

// simpal store bana diye aapn ne 

