import React from 'react';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    handleOnClick = (text) =>{
        alert(text)
    }

    render(){
        const constant = this.props.children
        return(
            
            <div>
                <h3>Hello Welcome {this.props.username}</h3>

                {/* {React.Children.map((child,i)=>{
                    return child
                }

                )} */}
                <div>
                {this.props.children.map(child=><div><button onClick={()=>this.handleOnClick(child)}>{child}</button></div>)}
                </div>
            </div>
        );
    }
        
    
}
export default Dashboard;