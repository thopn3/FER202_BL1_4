import React from "react";
import "./layout.css";
import {Header, Main, Footer} from "./components/Index";

// Su dung JSX de dinh nghia 1 class component
class RootComp extends React.Component{
    render(){
        return (
            <section>
                <Header/>
                <Main/>
                <Footer/>
            </section>
        );
    }
}

// Xuat khau defaul component
export default RootComp;