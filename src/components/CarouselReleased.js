import React from 'react';

import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
// import Item from "react-elastic-carousel";
// Servicio de peticiones http
import spooti from '../utils/services';

// Este componente renderiza la lista horizontal de canciones lanzadas de la semana
class CarouselReleased extends React.Component{
    state = {
        loading: true,
        error: null,
        data: {
          albums: {
              items:[]
          }
        }
    };

    componentDidMount(){
        spooti.getNewReleases().then((resp)=>{
            try{
                console.log(resp);
                // this.listaReleased.push(resp['data']['albums']['items']);
                let data = resp['data'];
                
                this.setState({
                    loading: false,
                    data
                });
                console.log("resp", this.state);
            }catch(error){
                this.setState({
                    loading: false,
                    error
                });
            }
        });
    }
    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 1 , pagination: false, showArrows: false},
            { width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: false, showArrows: false },
            { width: 768, itemsToShow: 3, showArrows: false },
            { width: 1200, itemsToShow: 4, pagination: true, showArrows: false}
          ];
        if(this.state.loading){
            return (
                <div>
                    <p>Por Favor espere...</p>
                </div>
            );
        }else if(this.state.error){
            return (
                <div>
                    <p>{this.state.error.messages}</p>
                </div>
            );
        }else{
            return (
                <>
                    <Carousel breakPoints={breakPoints}>
                        {
                            this.state.data.albums.items.map(released => {
                            return ( 
                            <div key={released.id} className="col">
                                <Link to={`/artist/${released.artists[0].id}`}>
                                        <div className="card">
                                                <img src={released.images[0]['url']} className="card-img-top" alt={released.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{released.name}</h5>
                                                    <p className="card-text text-capitalize">{released.artists[0].name}</p>
                                                </div>
                                        </div>
                                </Link>
                                </div>);
                            })
                        }
                    </Carousel>
                </>
            );
        }
    }
}
export default CarouselReleased;