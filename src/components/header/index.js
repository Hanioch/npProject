import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="titre"><h1>Le Panda Bricoleur</h1></div>
                <div class="account">
                    <div class="connexion">
                        <Link to="/connexion" style={{ textDecoration: 'none', color:'white' }}>
                            <div className='mini-connexion'>
                                <p>connexion</p>
                            </div>
                        </Link>
                    </div>
                    <div class="inscription">
                        <Link to="/inscription" style={{ textDecoration: 'none', color:'white'}}>
                            <div className='mini-inscription'>
                                <p>inscription</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>);

    }


}


export default Header;