import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component{
    constructor(props){
        super(props);

        this.changeUsername = this.changeUsername.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

        this.state={
            username:''
        }
    }

    changeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onSubmitForm(e){
        e.preventDefault();
        const user ={
            username:this.state.username
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add',user)
        .then(res => console.log(res.data));

        this.setState({
            username:''
        });
    }

    render(){
        return(
            <div>
               <form onSubmit={this.onSubmitForm}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.changeUsername.bind(this)}
                            />
                     </div>
                     <div className="form-group">
                         <button className="btn btn-primary">
                             Submit
                         </button>
                     </div>
               </form>
            </div>
        )
    }
}