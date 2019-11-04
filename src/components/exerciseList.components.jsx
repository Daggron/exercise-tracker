import React from 'react';
import axios from 'axios';


export default class ExerciseList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            exercise :[]
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/exercise/')
        .then(data=>{
            this.setState({
                exercise:data.data
            })
        })
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead>

                        <tr>
                            <th className="t-head">
                                ID
                            </th>
                            <th className="t-head">
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
                                                exer.date
                                            }
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