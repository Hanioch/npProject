import React from 'react';
import './index.scss';
import Footer from '../footer/index'
import { Link } from 'react-router-dom'


class Connexion extends React.Component {
    constructor(){
        super()
        this.state={
            username:'',
            status:'',
            password:''
        }
    }
    connect(e){
        e.preventDefault()
        console.log(this.state)
        fetch('/logIn',
        {
            method:'POST',
            headers: new Headers({
                'Content-Type':'application/json',
            }),
            body: JSON.stringify(
                this.state
            ),
        })
        .then((res)=>{
            if(res.status ===200){
                console.log('connecté avec succes',res)
                this.setState({
                    username:'',
                    status:''
                })
                window.location.href = 'http://localhost:3000/accueil/circuits'
                return null
            }else if(res.status ===402){
                console.log(' mot de passe incorrecte')
                return null
            }else{
                console.log('erreur pseudo')
                return null
            }
        })

    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className='corpsConnexion'>
                </div>
                <div className='grandRetourConnexion'>
                <Link to="/accueil/circuits" style={{ textDecoration: 'none',color:'white' }}>
                    <h2 className='retourConnexion'>Retour au site</h2>
                </Link>
                </div>
                <div className='grandTitreConnexion'>
                    <h1 className='titreConnexion'>Le panda bricoleur</h1>
                </div>
                <div className='centreConnexion'>
                    <h3 className='connecter'>Se connecter</h3>
                    <form className='formulaireConnexion'>
                        <label className='lesLabels'>
                            <p className='textConnexion'>Pseudo:</p>
                            <input type='text' className='lesInputs' onChange={(e)=> this.setState({username:e.target.value})}></input>
                        </label>
                        <label className='lesLabels'>
                            <br />
                            <p className='textConnexion'>Mot de passe:</p>
                            <input type='password' className='lesInputs' onChange={(e)=>this.setState({password:e.target.value})}></input>
                        </label>
                        <br />
                        <button className='submitConnexion' onClick={(e)=>this.connect(e)}>Valider</button>

                    </form>
                    <p className='pasdeCompte'>pas encore de compte ? <br />
                    <Link to="/inscription" style={{ textDecoration: 'none' }}><span className='linkConnexion'>cliquez  ici!</span> </Link></p>
                </div>
                <Footer/>
            </React.Fragment>
        );

    }


}


export default Connexion;