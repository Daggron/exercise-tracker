import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateExercise extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
        }

        this.changeDate = this.changeDate.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changedDescription = this.changedDescription.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }


    componentDidMount(){
        this.setState({
            users:['Test user'],
            username:'test user'
        })
    }

    changeUsername(e){
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        });
    }

    changedDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    changeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }

    changeDate(date){
        this.setState({
            date:date
        });
    }

    handleSubmitForm(e){
        
        e.preventDefault();

        const exercise = {
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }

        console.log(exercise);

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>
                    Create new Exercise Log
                </h3>
                <form onSubmit={this.handleSubmitForm}>

                    <div className="form-group"> 
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.changeUsername.bind(this)}>
                            {
                                this.state.users.map(function(user) {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.changedDescription.bind(this)}
                            />
                     </div>
                     <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.changeDuration}
                            />
                     </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.changeDate}
                            />
                        </div>
                     </div>

                     <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                     </div>

                </form>
            </div>
        )
    }
}