import React from "react";
import {data, data1} from './App'

function ChildC() {
    // counsume sirf ek hi fn ko acept kar ta hai

    return(
        <>
        <data.Consumer> 
            {
                (name) => {
                    return( 
                        <data1.Consumer>
                            {
                                (lastName) => {
                                    return(
                                        <h1>my name is {name} and my last name  {lastName}</h1>
                                    )
                                }
                            }
                        </data1.Consumer>
                        // 
                    )
                }}
            
        </data.Consumer>
        </>
    )

    
}

export default ChildC