import React, {Component} from 'react';
import Tour from './../Tour/Tour';
import './TourList.scss';
import {tourData} from '../../tourData';

class TourList extends Component {
    state = {
        tours: tourData
    }

    removeTour = (id) => {
        const tours = this.state.tours
        const filteredTours = tours.filter(tour => 
            tour.id !== id
        )
        this.setState({tours: filteredTours});
    }

    render() {
        let tour = this.state.tours.map(tour => {
            return <Tour
            key={tour.id}
            city={tour.city} 
            img= {tour.img}
            name={tour.name}
            info={tour.info}
            removeTour = {() => this.removeTour(tour.id)}
            />
        }
        )
        console.log(this.state.tours);
        return(
            <section className='tourList'>
           {tour}
            </section>
        )
    }
}

export default TourList;