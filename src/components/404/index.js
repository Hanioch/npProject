import React from 'react';
import './index.scss';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

class Page404 extends React.Component {

    render() {

        return (
            <div className='bodyPage404'>
                <h1>Erreur 404</h1>
                <p>Cliquez<Link to='/accueil/circuits'>ici</Link>  pour etre redirigé</p>
            </div>
        );
    }


}


export default withRouter(Page404) ;