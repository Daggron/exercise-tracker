import React from 'react';
import axios from 'axios';
import  {  Link } from 'react-router-dom';

export default class ExerciseList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            exercise :[]
        }
        this.deleteExercise = this.deleteExercise.bind(this);
    }


    componentDidMount(){
        axios.get('http://localhost:5000/exercise/')
        .then(data=>{
            this.setState({
                exercise:data.data
            })
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercise/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            exercise:this.state.exercise.filter(el=>el._id !== id)
        })
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-light">

                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                UserName
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Duration
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Functions
                            </th>
                        </tr>

                    </thead>
                    <tbody>

                    
                        {
                            this.state.exercise.map((exer,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                        {
                                            index
                                        }
                                        </td>
                                        <td>
                                            {
                                                exer.username
                                            }
                                        </td>
                                        <td>
                                            {
                                                exer.description
                                            }
                                        </td>
                                        <td>
                                            {
                                                exer.duration
                                            }
                                        </td>
                                        <td>
                                            {
                                                exer.date.substring(0,10)
                                            }
                                        </td>
                                        <td>
                                        
                                        <Link to={"/edit/"+exer._id}>edit</Link>
                                         &nbsp;|&nbsp;
                                          
                                            <button onClick={()=>this.deleteExercise(exer._id)}>
                                                Delete
                                            </button>
                                        </td>
                                       
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                        
                </table>
            </div>
        )
    }
}