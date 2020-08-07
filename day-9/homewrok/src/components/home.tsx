import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap'

interface HeaderProps {
    title: string
}
interface HeaderState {
    weather: string
}


export default class home extends Component<HeaderProps, HeaderState> {
    state: HeaderState = {
        weather: ""

    }


    fetchweather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.weather}&appid=d01ccb458cc2846f7d8cf46b24017573`)
            .then((response) => response.json())
            .then((data)=>{console.log(data)})
              
            
            .catch(err => {
                console.log(err);
            });
        }
  



    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='mb-5' ><input type="text" value={this.state.weather} onChange={(w) => this.setState({ weather: w.currentTarget.value })}
                />
                    <button onClick={this.fetchweather}>Search</button></div>

                <hr />
                <Container>
                    <Row>
                        hello
                        
                        </Row></Container>

            </div>
        )
    }
}
