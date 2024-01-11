
import {buy_Book} from './BookType' //action type buy book hai

const initialState = {
    NumberOfBooks : 20

}
//fucntion bana denge reducer ke liye 
const BookReducer = (state =  initialState , action) =>{

switch(action.type){
    case buy_book : return {
        ...state, NumberOfBooks : state.initialState -1
    }

    default : return state
}

}

export default BookReducer;