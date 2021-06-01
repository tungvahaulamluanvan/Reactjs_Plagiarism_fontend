import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return <span>Path : {location.pathname}</span>
  }  
class SiteBar extends Component{
    
    render(){
        return(
        <div className="namesitebar">
            <h1><a href="#">Trang chủ </a><i className="fa fa-angle-right"></i>{this.props.siteName}</h1>
        </div>
        );
    }
}
export default SiteBar;