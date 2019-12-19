import React from 'react';
import './index.scss';
import Footer from '../footer/index'
import { Link } from 'react-router-dom'
let succes = false

class Inscription extends React.Component {
    constructor(){
        super()
        
        this.state={
            username:'',
            status:'',
            password:'',
            confirm:'',
            mail:'',
            ok: ''
        }
    }
    

    signIn(e){
        
        e.preventDefault()
        fetch('/signIn',
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
            if(res.status === 200){
                console.log('inscrit avec succes',res)
                this.refs.incorrect.style.display='none'
                this.refs.correct.style.display='none'
                this.refs.signInFail.style.display='none'
                this.refs.signInSuccess.style.display='block'
                return null
            }else{
                console.log('email ou mot de passe deja utiliser')
                this.refs.incorrect.style.display='none'
                this.refs.correct.style.display='none'
                this.refs.signInFail.style.display='block'
                this.refs.signInSuccess.style.display='none'

                return null
            }
        })
        .then(data =>{
            if(data!=null && data !==undefined){
                console.log(data)
                this.setState({
                    username:'',
                    status:''
                })
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        
            if(this.state.confirm !=='' && this.state.password!==''){
                console.log('je rentre dans le premier if')
                if(this.state.confirm === this.state.password){
                    console.log('mdp identique')
                    this.refs.incorrect.style.display='none'
                    this.refs.correct.style.display = 'block'
                    this.refs.signInFail.style.display='none'
                    this.refs.signInSuccess.style.display='none'
    
            }else{
                console.log('mdp pas identiques')
                this.refs.correct.style.display='none'
                this.refs.incorrect.style.display = 'block'
                }
                }else{
                    this.refs.incorrect.style.display='none'
                    this.refs.correct.style.display = 'none'
                    this.refs.signInFail.style.display='none'
                    this.refs.signInSuccess.style.display='none'
    
                }

    }

    
        
    render() {

        
        return (
            <React.Fragment>
                <div className='corpsInscription'>
                <div className='petitCorpsInscription'></div>
                <div className='grandRetourInscription'>
                <Link to="/accueil/circuits" style={{ textDecoration: 'none',color:'white' }}>
                    <h2 className='retourConnexion'>Retour au site</h2>
                </Link>
                </div>
                <div className='grandTitreInscription'>
                    <h1 className='titreInscription'>Le panda bricoleur</h1>
                </div>
                <div className='centreInscription'>
                    <h3 className='inscrire'>S'inscrire</h3>
                    <form className='formulaireInscription'>
                        <label className='lesLabels'>
                            <p className='textInscription'>Adresse mail:</p>
                            <input type='text' className='lesInputs' onChange={(e)=> this.setState({mail:e.target.value})}></input>
                        </label>
                        <label className='lesLabels'>
                            <p className='textInscription'>Pseudo:</p>
                            <input type='text' className='lesInputs' onChange={(e)=> this.setState({username:e.target.value})}></input>
                        </label>
                        <label className='lesLabels'>
                            <p className='textInscription'>
                                Mot de passe:</p>
                            <input type='password' className='lesInputs'onChange={(e)=> this.setState({password:e.target.value})}>

                            </input>
                        </label>
                        <label className='lesLabels'>
                        
                            <p className='textInscription'>
                                Confirmer:
                            </p>
                            <input type='password' className='lesInputs' onChange={(e)=> this.setState({confirm:e.target.value})}
                            ></input>
                        </label>
                        <div className='grandMdp'>
                            <p className='mdpCorrect' ref='correct'>les deux mot de passe sont identiques!</p>
                        </div>
                        <div className='grandMdp'>
                        <p className='mdpIncorrect' ref='incorrect'>les deux mot de passe ne sont  pas identiques!</p>
                        </div>
                        <div className='grandMdp'>
                        <p className='succes' ref='signInSuccess'>inscription reussis</p>
                        </div>
                        <div className='grandMdp'>
                        <p className='fail' ref='signInFail'>adresse mail ou pseudo déja utilisé, dommage!</p>
                        </div>
                        <button className='submitInscription' onClick={(e)=>this.signIn(e)}>Valider</button>

                    </form>
                    <p className='dejaCompte'>Vous avez déjâ un compte? <br />
                    <Link to="/connexion" style={{ textDecoration: 'none' }}><span className='linkInscription'>
                        cliquez  ici!</span></Link></p>
                </div>
            </div>
            <Footer/>
            </React.Fragment>


        );

    }
    


}


export default Inscription;