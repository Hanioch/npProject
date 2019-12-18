import React from 'react';
import './index.scss';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nav:['circuits','craft','cuisine', 'outside', 'pourquoi le DIY c\'est cool'],
            selected: [this.props.match.params.categorie]
        }
    }

    componentDidMount() {
        this.refs[this.state.selected].style.backgroundColor = 'rgb(24, 24, 24)'
        for(let i = 0; i < this.state.nav.length; i++){
            if(this.props.match.params.categorie === this.state.nav[i]) {
                return
            }
        }
        this.pageNotFound()
}

    pageNotFound() {
        window.location.href = 'http://localhost:3000/404'
    }

    componentDidUpdate(prevProps, prevState) {
        this.refs[prevState.selected].style.backgroundColor = ''
        this.refs[this.state.selected].style.backgroundColor = 'rgb(24, 24, 24)'
    }
    render() {
        const array = this.state.nav.map(elem=>(
            <Link to={`/accueil/${elem}`} className='categorie' ref={elem} onClick={(e) =>this.changeColor(e)}>
            <p className='pdeCategorie'>{elem}</p></Link>
        ))

        return (
            array
        );
    }
    changeColor(e) {
        this.setState({
            selected: e.target.childNodes[0].innerHTML
        })
        
    }


}


export default withRouter(Nav) ;