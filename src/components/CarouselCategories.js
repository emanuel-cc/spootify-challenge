import React from 'react';

import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
// import Item from "react-elastic-carousel";

// Servicio http
import spooti from '../utils/services';

// Estilos
import '../components/styles/Card.css';

// Este componente renderiza las categorías
class CarouselCategories extends React.Component{
    state = {
        loading: true,
        error: null,
        data:{
            categories: {
                items: []
            }
        }
    };

    componentDidMount(){
        spooti.getCategories().then((resp)=>{
            try{
                let data = resp['data'];
            
                this.setState({
                    loading: false,
                    data
                });
                console.log("categories", this.state);
                // this.props.navigation.navigate(`/category/${this.state.data.categories.items['id']}`);
            }catch(error){
                this.setState({
                    loading: false,
                    error
                });
            }
            console.log(resp);
            
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
                        this.state.data.categories.items.map(category => {
                            return ( 
                            <div key={category.id} className="col">
                                <Link to={`/category/${category.id}`}>
                                <div className="card puntero">
                                    <img src={category.icons[0]['url']} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{category.name}</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>);
                        })
                    }
                </Carousel>
            );
          }
    }
}
export default CarouselCategories;