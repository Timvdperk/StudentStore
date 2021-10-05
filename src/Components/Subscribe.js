import React, { Component } from 'react';
import swal from 'sweetalert';
import{ init } from 'emailjs-com';
import "./Subscribe.css";
init("user_u1zlPhWo9cqzLFVF1t6Ie");


export default class Subscribe extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fname: "",
        lname: "",
        leeftijd:"",
        stad:"",
        email: "",
        institute: '',
        studentnumber:''

      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const templateId = 'template_k59v42n';
        this.sendFeedback(templateId, {
            naam: this.state.fname,
            lnaam: this.state.lname,
            age: this.state.leeftijd,
            city: this.state.stad,
            mail: this.state.email,
            inst: this.state.institute,
            numb: this.state.studentnumber
        })

        this.setState({
            fname: '',
            lname: '',
            leeftijd:'',
            stad:'',
            email: '',
            institute: '',
            studentnumber: ''
        })
    } 

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            "service_cmg5fsw", templateId,
            variables
        ).then(res => {
            swal('That worked')
        })
            .catch(err => console.error('Error:', err)
            )
    }


render(){
    return (
       <div>
          <h1 id="title">Goed dat je je aanmeld!</h1>
          <p id="text">Door speciale deals gemaakt door studenten met producenten, hebben wij korting voor jou geregeld!</p>
              <p id="disclaimer">*Je ontvangt een mail na verificatie </p>
            <div class="form">
                <form onSubmit={this.handleSubmit}>
                    <label for = "fname" id="labels">Naam:</label><br></br>
                    <input type="text" id="fname" name="fname" required value={this.state.fname} onChange={this.handleChange}></input><br></br>
                    <label for = "lname" id="labels">Instituut:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange}></input><br></br>
                    <label for = "leeftijd" id="labels">Studentnummer:</label><br></br>
                    <input type="number" id="leeftijd" name="leeftijd" value={this.state.leeftijd} onChange={this.handleChange}></input><br></br>
                    <label for = "email" id="labels" >Email:</label><br></br>
                    <input type="email" id="email" name="email" required value={this.state.email} onChange={this.handleChange}></input><br></br>
                    <label for = "stad" id="labels" >Wachtwoord:</label><br></br>
                    <input type="text" id="stad" name="stad" value={this.state.stad} onChange={this.handleChange}></input><br></br>
                    <button type="submit" class="btn btn-primary" id="verstuur">Verstuur</button>
                </form>
            </div>
       </div>
    );
}
}