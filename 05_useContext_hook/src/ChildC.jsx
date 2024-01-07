import React, { useContext } from "react";
import {data, data1} from './App'

function ChildC() {
    // counsume sirf ek hi fn ko acept kar ta hai

    const firstName = useContext(data);
    const gender = useContext(data1);

    return(
        <>
        <h1>hi my name is {firstName} my gender is {gender}</h1>
        </>
    )

    
}

export default ChildC