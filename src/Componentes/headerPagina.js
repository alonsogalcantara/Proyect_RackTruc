import React from 'react'
class HeaderPagina extends React.Component{

    constructor() {
        super();
        this.state = {
            name: '',
        };

        this.nameHandler = this.nameHandler.bind(this);
    }

    nameHandler(event) {
        this.setState({ name: event.target.value });
    }

    render(){
        return <div className = "barraBuscadora" >
                <form>
                    <div className="field" id="searchform">
                        <img style={{height:30, width: 30}} hspace="25" alt='Logo empresa'/>
                        <input type="text" id="Busqueda" placeholder="" style={{height:20, width:300}}/>
                        <button type="button" id="Buscar">BUSCAR</button>
                    
                    </div>
                    <script className="cssdeck" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
                </form>
        </div>
    }
}

export default HeaderPagina;