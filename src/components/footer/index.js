import React from 'react';
import './index.scss';
import logo from '../../img/panda.svg'
import twitter from '../../img/twitter.svg'
import facebook from '../../img/facebook.svg'
import insta from '../../img/instagram.svg'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='gaucheFooter'>
                <img src={logo} className='logoConnexion'></img>
                </div>
                <div className='centreFooter'>
                <p className='citationFooter'>DIY for all</p>
                <p className='FAQ'>FAQ</p>
                <p className='Copyright'>Copyright © 2019 Le Panda Bricoleur Inc.<br/> Tous droits réservés. </p>
                </div>
                <div className='droiteFooter'>
                <p className='contact'>Contactez nous</p>
                <img src={twitter} className='icone'></img>
                <img src={facebook} className='icone'></img>
                <img src={insta} className='icone'></img>

                </div>

            </footer>

        );

    }


}


export default Footer;