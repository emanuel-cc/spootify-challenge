import React from 'react';

import Carousel from 'react-elastic-carousel';
// import Item from "react-elastic-carousel";
// Servicio de peticiones http
import spooti from '../utils/services';

// Este componente renderiza la lista de canciones con colaboraciones
class CarouselFeatured extends React.Component{
    state = {
        loading: true,
        error: null,
        data:{
            playlists: {
                items: []
            }
        }
    };

    componentDidMount(){
        spooti.getFeaturePlaylist().then((resp)=>{
            try{
                console.log(resp);
                // this.listaReleased.push(resp['data']['albums']['items']);
                let data = resp['data'];
                
                this.setState({
                    loading: false,
                    data
                });
                console.log("playlists", this.state);
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
            { width: 550, itemsToShow: 3, pagination: false, showArrows: false },
            { width: 768, itemsToShow: 3, showArrows: false },
            { width: 1200, itemsToShow: 3, showArrows: false}
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
                
                <Carousel breakPoints={breakPoints}>
                    {
                        this.state.data.playlists.items.map(featured => {
                           return ( 
                           <div key={featured.id} className="col">
                               <div className="card">
                                <img src={featured.images[0]['url']} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{featured.name}</h5>
                                    <p className="card-text">{featured.description}</p>
                                </div>
                               </div>
                            </div>);
                        })
                    }
                </Carousel>
            );
        }
    }
}
export default CarouselFeatured;