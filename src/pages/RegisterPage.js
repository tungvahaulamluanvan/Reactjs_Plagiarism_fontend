import React, { Component } from 'react';
import ContentRegist from '../form/ContentRegist';
import ContentLogin from '../form/ContentLogin';
import Login from '../form/Login';
import Register from '../form/Register';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SiteBar from '../siteBar/SiteBar';
import './form.css';
class RegisterPage extends Component{

    render(){
        return(
        <div>
            <Header></Header>
            <SiteBar siteName="Đăng ký"></SiteBar>
            <div className="container slide sign-up-mode">
                <div className="panels-container">
                    <Login></Login>
                    <Register></Register>
                    <ContentRegist></ContentRegist>
                    <ContentLogin></ContentLogin>
                </div>          
            </div>
            <Footer></Footer>
        </div>
        );
    }
}
export default RegisterPage;