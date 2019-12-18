import React from 'react';
import './index.scss';
import Footer from '../footer/index'
import Header from '../header/index'
import Nav from '../nav/index'
import Contenu from'../contenuAcceuil/index'
import { Link } from 'react-router-dom'

class acceuil extends React.Component {
    
    render() {
        
        
        
        return (
            <div className='bodyAcceuil'>
                <Header/>
                    <div className='allCategorie'>
                        <Nav/>
                    </div>
                    <Contenu/>
                
                <Footer/>
            </div>
        );
    }


}


export default acceuil;