import React from 'react';
import './index.scss';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'



class Contenu extends React.Component {
    constructor(){
        super()
        this.state={
            nav:['apple','arduino','art', 'gadget', 'audio'],
            nav2:['cardboard','papier','porte-feuilles', 'card', 'digital']
        }
    }
    circuits() {
        const tabCircuits = this.state.nav.map(elem=>(
            <div className={`petitCircuits ${elem}`}>
                <Link to={`/acceuil/categorie/${elem}`}style={{ textDecoration: 'none' }}><div className='catButton'><h3>{elem}</h3>
                <button className='cliqueCat'>cliquez ici</button></div></Link></div>))
                
        return(<div className='centerCircuits'>
            {tabCircuits}
    </div>)
    }

    bricolage(){
        const tabBricolage = this.state.nav2.map(elem=>(
            <div className={`petitCircuits ${elem}`}>
                <Link to={`/acceuil/categorie/${elem}`}style={{ textDecoration: 'none' }}><div className='catButton'><h3>{elem}</h3>
                <button className='cliqueCat'>cliquez ici</button></div></Link></div>))
        return(<div className='centerCircuits'>
            {tabBricolage}
    </div>)
    }
    vide(){
        return(
        <div className='noTime'>
            <h1 className='texteTime'>Coming soon</h1>
            <p className='pTime'>(si si c'est vrai)</p>
        </div>
        )
    }
    apple(){
        return(
            <div className='centerCircuits'>
                <h1>Je suis un bg</h1>
            </div>
        )
    }
    arduino(){
        return(<div>
            bg ++
        </div>)
    }
    art(){
        return(
            <div className='centerCircuits'>
                <h1>Je suis un bg</h1>
            </div>)
    }
    cool(){
        return(
            <div className='centerCircuits'>
                <h1>Pourquoi le DIY c'est vraiment</h1>
            </div>
        )
    }

    render() {
        
        switch(true){
            case this.props.match.params.categorie === 'circuits':
                return(this.circuits())
                break;
            case this.props.match.params.categorie ==='craft':
                return(this.bricolage())
                break;
            case this.props.match.params.genre ==='apple':
                return(this.apple())
            break
            case this.props.match.params.genre ==='arduino':
                return(this.arduino())
            break
            case this.props.match.params.genre === 'art':
                return(this.art())
            break
            case this.props.match.params.categorie.replace('%', ' ') === `pourquoi le DIY c'est cool`:
                return(this.cool())
            break
            default:
                return(this.vide())
        }
    }
    


}


export default withRouter(Contenu) ;






