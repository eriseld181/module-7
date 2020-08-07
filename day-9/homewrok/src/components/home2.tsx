import React, { useState, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import { HeaderProps } from '../types/types'




// function home2() {



const Header = ({ title }: HeaderProps) => {
    const [weather, setWeather] = useState("")

    const fetchCity = () => {
        const data1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=d01ccb458cc2846f7d8cf46b24017573`)
            .then((response) => response.json())
            .then((data) => { console.log(data) })


            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {

        fetchCity()
    }, [])


    return (
        <div>
            <h1>{title}</h1>
            <div className='mb-5' ><input type="text" value={weather} onChange={e => setWeather(e.target.value)}


            />
                <button onClick={fetchCity}>Search</button></div>

            <hr />
            <Container>
                <Row>


                </Row></Container>

        </div>
    )
}

export default Header