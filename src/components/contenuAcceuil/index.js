/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './index.scss';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'




class Contenu extends React.Component {
    constructor(){
        super()
        this.state={
            nav:['apple','arduino','art', 'gadget', 'audio'],
            nav2:['cardboard','papier','porte-feuilles', 'card', 'digital'],
            nav3:['IPhone-Charger','keyboard','fix-Lightning','charge-station','Blackintosh' ]
        }
    }
    
    circuits() {
        const tabCircuits = this.state.nav.map(elem=>(
            <div className={`petitCircuits ${elem}`}>
                <Link to={`/accueill/categorie/${elem}`}style={{ textDecoration: 'none' }}><div className='catButton'><h3>{elem}</h3>
                <button className='cliqueCat'>cliquez ici</button></div></Link></div>))
                
        return(<div className='centerCircuits'>
            {tabCircuits}
    </div>)
    }

    bricolage(){
        const tabBricolage = this.state.nav2.map(elem=>(
            <div className={`petitCircuits ${elem}`}>
                <Link to={`/accueill/categorie/${elem}`}style={{ textDecoration: 'none' }}><div className='catButton'><h3>{elem}</h3>
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
        const appleList = this.state.nav3.map(elem=>(
            <div className={`petitCircuits ${elem}`}>
                <Link to={`/accueiil/categorie/genre/${elem}`}style={{ textDecoration: 'none' }}><div className='catButton'><h3>{elem}</h3>
                <button className='cliqueCat'>cliquez ici</button></div></Link></div>))
        return(<div className='centerCircuits'>
            {appleList}
    </div>)
    }

    chargerStation(){
        
        return(
            <div className='chargerStation'>
                <h1>Charger station for  Iphone</h1>
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/-LDpEZ3Ef6g" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <p>During the fall of 2016 I received a complimentary iPhone/Apple Watch dock from a company called 1byone. 
                    While I really liked the dock and overall gave it a good review, I realized that I could improve it with 
                    some simple modifications. Several of these modifications were very specific to this dock, as you can see 
                    in the video above. While I won't go into the details of those modifications here, one of the modifications
                    could be applicable to many different iPhone docks on the market.
                    <br/>
                    The fall of 2016 will be remembered for many things, but for iPhone users it will be remembered as when we
                    lost the most basic of ports (the humble headphone jack). iPhone 7's ship with special lightning headphones
                    and an adapter to convert from a lightning port to a 1/8" headphone jack. However, if you want to charge
                    your phone while listening to music, you're out of luck with these included adapters. While Apple's docking
                    stations have a headphone jack built into them, third party docks often don't have this feature - yet.
                    In this Instructable, I will show you how to add a headphone jack an iPhone dock.
</p>
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
                break;
            case this.props.match.params.genre ==='arduino':
                return(this.apple())
                break;
            case this.props.match.params.genre === 'art':
                return(this.apple())
                break;
            case this.props.match.params.list ==='charge-station':
                return(this.chargerStation())
                break;
            case this.props.match.params.list ==='IPhone-Charger':
                return(this.chargerStation())
            break;
            case this.props.match.params.list ==='keyboard':
                return(this.chargerStation())
            break;
            case this.props.match.params.list ==='Blackintosh':
                return(this.chargerStation())
            break;
            case this.props.match.params.list ==='fix-Lightning':
                return(this.chargerStation())
            break;
            default:
                return(this.vide())
        }
    }


}


export default withRouter(Contenu) ;






