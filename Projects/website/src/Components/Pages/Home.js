import React, {Component} from 'react';
import Header from '../Common/Header';
import image from  '../Assets/Images/dota.png';//'../assets/img/dota.png';

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                title = "Hello all!"
                subtitle = "It's nice to meet you :)"
                buttonText = "Tell me more"
                link="/services"
                showButton={true}
                image={image}
                ></Header>
            </div>
        );
    }
}

export default Home;