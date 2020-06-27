import React from 'react'

class Children extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    {this.props.label}
                </div>
                {this.props.children}
            </React.Fragment>
        );
    }
}
export default Children