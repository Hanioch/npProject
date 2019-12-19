import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'


class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            status: '',
        }
    }
    componentDidMount(){
        fetch('/status')
        .then((res)=>{
            if(res.status ===200){
                this.setState({
                    status:true
                })
                console.log('ok connect')
                return res.json()
            }else{
                console.log('non connecté')
                return res.json()
            }
        })
        .then((data)=>{
            this.setState({
                status: data
            })
        })
    }
    deconnexion(e){
    e.preventDefault();
    fetch('/logout')
    .then((res) => {
    if (res.status === 200) {
    return res.json()
    } else {
    return false
}
})
    .then((data) => {
this.setState({
status: data
})
})


    }
    
    render() {
        console.log(this.state)
        return (
            <header>
                <div class="titre"><h1>Le Panda Bricoleur</h1></div>
                {(this.state.status ?
                    <div class="account">
                        <div className='connecter'>
                            {this.state.status}
                            <br/>
                            <button className='deconnexion' onClick={(e)=>this.deconnexion(e)}> se déconnecter</button>
                        </div>
                        </div> : <div class="account">
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
                </div>)}
            </header>);

    }


}


export default Header;