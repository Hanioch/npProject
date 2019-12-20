import React from 'react';
import './index.scss';
import Footer from '../footer/index'
import Header from '../header/index'
import Nav from '../nav/index'
import Contenu from'../contenuAcceuil/index'
import { Link } from 'react-router-dom'

class acceuil extends React.Component {
    constructor(){
        super()
        this.state={
            temp:'',
            weathericon:''
        }
    }
    componentDidMount(){

        //fetching meteo API
        fetch('http://api.weatherstack.com/current?access_key=517f4af44a62308c1ca67254975142bd&query=Brussels')
        .then((res) =>{
            if(res.status === 200){
                return res.json()
            }else{
                return false
                
            }
        })
        .then((data) => {
            this.setState({
                temp:data.current.temperature,
                weathericon:data.current.weather_icons[1]
                
            })  
    
        })
    }

    
    render() {
        
        
        
        return (
            <div className='bodyAcceuil'>
                <Header/>
                    <div className='allCategorie'>
                        <Nav/>
                    </div>
                    <p className='temperature'>Il fait actuellement {this.state.temp} degrés, un temps parfait pour rester chez sois et bricoler</p>
                    <Contenu/>
                
                <Footer/>
            </div>
        );
    }


}


export default acceuil;