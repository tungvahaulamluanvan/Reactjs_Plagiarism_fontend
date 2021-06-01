import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ManageDoc from '../manageDoc/ManageDoc';
import SiteBar from '../siteBar/SiteBar';


class HomePage extends Component{
    
    render(){
        return(
            <div>
                <Header></Header>
                <SiteBar siteName="Quản lý tài liệu"></SiteBar>
                <ManageDoc></ManageDoc>
                <Footer></Footer>
            </div>
        );
    }
}
export default HomePage;