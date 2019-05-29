import React from 'react';

class Table extends React.Component{
   
    render (){
        let data = this.props.data
        console.log(this.props)
        if(!data.list){
            return <div></div>
        }else{
            return(
                <table className="ui inverted blue selecteble celled table"
                style = {{marginTop:"50px"}}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data.list).map((key)=>{
                                return (
                                    <tr key={key}>
                                        <td>{data.list[key].dt_txt}</td>
                                        <td>{(data.list[key].main.temp -273).toFixed(2)}</td>
                                        <td>{data.list[key].weather[0].main}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
        }
        
    }

}

export default Table