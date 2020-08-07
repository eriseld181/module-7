import React, { Component } from 'react'


interface HeaderProps {
    title: string
}
interface HeaderState {
    songs: string
}


export default class home extends Component<HeaderProps, HeaderState> {
    state: HeaderState = {
        songs: ""

    }

    componentDidMount = () => {
        console.log("mount")
    }
    fetchSongs = () => {
        // fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + this.state.songs, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        //         "x-rapidapi-key": "5adaa39bc1mshd0a69d0d95f1d2ap1b717ajsnb5f60cf77aa0"
        //     }
        // })


        //     .then(response => response.json())
        //     .then(data => console.log(data));
        // fetch("api.openweathermap.org/data/2.5/weather?q=London&appid=8e8721bdeba915a15725abcffe793f33")
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });


    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='mb-5' ><input type="text" value={this.state.songs} onChange={(sur) => this.setState({ songs: sur.currentTarget.value })}
                />
                    <button onClick={this.fetchSongs}>Search</button></div>

                <hr />


            </div>
        )
    }
}
