import React, {Component} from 'react';
import PortofolioItem from './PortofolioItem';

import image1 from '../Assets/Images/Portofolio/01-thumbnail.jpg';
import image2 from '../Assets/Images/Portofolio/02-thumbnail.jpg';
import image3 from '../Assets/Images/Portofolio/03-thumbnail.jpg';
import image4 from '../Assets/Images/Portofolio/04-thumbnail.jpg';
import image5 from '../Assets/Images/Portofolio/05-thumbnail.jpg';
import image6 from '../Assets/Images/Portofolio/06-thumbnail.jpg';

const portofolio = [
    {title:'Threads', subtitle:'Illustration', image:image1},
    {title:'Explore', subtitle:'Graphic Design', image:image2},
    {title:'Finish', subtitle:'Identity', image:image3},
    {title:'Lines', subtitle:'Branding', image:image4},
    {title:'Southwest', subtitle:'Website Design', image:image5},
    {title:'Window', subtitle:'Photography', image:image6}
];

class Portofolio extends Component{
    render(){
        return(
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    {portofolio.map((item, i)=>{
                        return <PortofolioItem {...item} key={i} />
                    })}
                </div>
                </div>
            </section>

        );
    }
}

export default Portofolio;