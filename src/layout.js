import React from 'react';
import {Button } from 'reactstrap';

export default class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectButton:true,
            bgColor1: 'green',
            bgColor2: 'green',
            bgColor3: 'green',
            bgColor4: 'green',
            bgColor5: 'green'
        }
    }
logOut = () => {
  window.location.href="/"; 
}
    buttonClicked1= () => {
        const {selectButton} = this.state;
        console.log(selectButton);
        this.setState({bgColor1: 'red'});
           
        if(this.state.bgColor1 == 'red') {
            alert("Slot already booked :( ")
        } else {
           alert("Slot booked successfully..!");
        }
    }
        buttonClicked2= () => {
        const {selectButton} = this.state;
        console.log(selectButton);
        this.setState({bgColor2: 'red'});

        if(this.state.bgColor2 == 'red') {
            alert("Slot already booked :( ")
        } else {
           alert("Slot booked successfully..!");
        }
    }
        buttonClicked3= () => {
        const {selectButton} = this.state;
        console.log(selectButton);
        this.setState({bgColor3: 'red'});

        if(this.state.bgColor3 == 'red') {
            alert("Slot already booked :( ")
        } else {
           alert("Slot booked successfully..!");
        }
    }
        buttonClicked4= () => {
        const {selectButton} = this.state;
        console.log(selectButton);
        this.setState({bgColor4: 'red'});

        if(this.state.bgColor4 == 'red') {
            alert("Slot already booked :( ")
        } else {
           alert("Slot booked successfully..!");
        }
    }
        buttonClicked5= () => {
        const {selectButton} = this.state;
        console.log(selectButton);
        this.setState({bgColor5: 'red'});
        if(this.state.bgColor5 == 'red') {
            alert("Slot already booked :( ")
        } else {
           alert("Slot booked successfully..!");
        }
    }
    render () {
        const {selectButton} = this.state;
        console.log("render selected button state:", selectButton);
        const zones = [1,2,3,4,5,6,7,8,9,10];
        return (

            <div className="container">
                <h1 >Parking Lot</h1>
                <div className="row">
                    <Button className = "col-sm-4 sss" onClick = {this.buttonClicked1} 
                    style={{backgroundColor:this.state.bgColor1}}> 1 </Button>
                    <Button className = "col-sm-4 sss" onClick = {this.buttonClicked2} 
                    style={{backgroundColor:this.state.bgColor2}}> 2 </Button>
                    <Button className = "col-sm-4 sss" onClick = {this.buttonClicked3}
                    style={{backgroundColor:this.state.bgColor3}} > 3 </Button>
                    <Button className = "col-sm-2 sss" onClick = {this.buttonClicked4}
                    style={{backgroundColor:this.state.bgColor4}} > 4 </Button>
                    <Button className = "col-sm-2 sss" onClick = {this.buttonClicked5}
                    style={{backgroundColor:this.state.bgColor5}} > 5 </Button>
                    </div>
                    <div className="row" >
                </div>
                <button onClick= {this.logOut}>Logout</button>
            </div>
        );
    }

}