// bookAction kya hai actione creater jo ki ek function hai

import {buyBook} from './BookType.js';
// ye value ko import kare ge 


const purchase_book =()=>{

    return{
        type : buyBook // aur ye value ko convert kare ge string se direct book me 
    }
}

// action bana ne wala hota hai action creater 