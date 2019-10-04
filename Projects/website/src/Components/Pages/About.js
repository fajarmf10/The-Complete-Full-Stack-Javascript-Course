import React, {Component} from 'react';
import Header from '../Common/Header';
import image from  '../Assets/Images/about.jpg';
import AboutDesc from '../Common/AboutDesc';

class About extends Component{
    render(){
        return(
            <div>
                <Header
                title = "About Me!"
                subtitle = "It's dedicated for GodJihyo :)"
                showButton={false}
                image={image}
                />
                <AboutDesc/>
            </div>
        )
    }
}

export default About;