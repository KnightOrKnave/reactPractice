import React,{Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../../actions';
//import {mySaga} from '../../sagas';

class Weather extends Component{
    constructor(props){
        super(props);
        this.handleTest=this.handleTest.bind(this);
    }

    handleTest(){
        this.props.mySaga();
    }

    render (){
        return(
            <div>
                <h1>Wheather is {this.props.value}</h1>
                <p style={{color:this.props.value,fontSize:"5em"}}>color</p>
                
                <button onClick={this.handleTest}>aaaaa</button>
            </div>
        )
    }
}

const mapStateToProps=state=>({value:state.weather.value});
//const mapDispatchToProps=({test,mySaga});
const mapDispatchToProps=dispatch =>({
    mySaga:()=> dispatch(test())
})



export default connect(mapStateToProps,mapDispatchToProps)(Weather);