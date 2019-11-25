import React, {Component} from 'react';
import './Tour.scss';

class Tour extends Component {
    state = {
        showInfo: false
    }

    infoHandler = () => {
        this.setState({showInfo: !this.state.showInfo})
    }


    render() {
        return(
            <article className='tour'>
                <div className='img-container'>
                    <img src={this.props.img} alt='tour'/>
                    <span className='close-btn' onClick={this.props.removeTour}>
                        <i className='fas fa-window-close'/>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{this.props.city}</h3>
                    <h4>{this.props.name}</h4>
                    <h5>Info {' '}
                        <span onClick={this.infoHandler}>
                            <i className='fas fa-caret-square-down' />
                        </span>
                    </h5>{this.state.showInfo ?
    <p>{this.props.info}</p> :null }
                </div>
            </article>
        )
    }
}

export default Tour;