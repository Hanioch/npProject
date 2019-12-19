import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'
import domage from '../../img/dommage.png'


class mdpOublie extends React.Component {
    
    render() {
        return (
            <div className='corpsOublie'>
                <h1 className='dmg'>Dommage</h1>
                <img src={domage}></img>
                <h2 className='redirection'> pour créer un autre compte <br/>
                <Link to='/Inscription'  style={{ textDecoration: 'none' }}>
                    <span className='linkConnexion'> cliquez ici</span>
                </Link>
                </h2>
            </div>
        );

    }


}


export default mdpOublie;