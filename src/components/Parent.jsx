import React from 'react'
import Children from './Children'
class Parent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Children label='Test'>
                    <button value='First'>1</button>
                    {/* <button value='Second'>2</button>
                    <button value='Third'>3</button>
                    <button value='Fourth'>4</button>
                    <button value='Fifth'>5</button> */}
                </Children>
            </React.Fragment>
        );
    }
}
export default Parent