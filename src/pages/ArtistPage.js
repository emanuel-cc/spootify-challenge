import React from 'react';

// Servicio de peticiones http
import spooti from '../utils/services';

// Esta página muestra los detalles de un artista
class ArtistPage extends React.Component{
    state = {
        data:{
            name: "",
            popularity: "",
            followers:{

            },
            images: [{}],
            genres: []
        }
    };
    componentDidMount(){
        spooti.getArtist(this.props.match.params.id).then((resp)=>{
            console.log("Artist:",resp);
            let data = resp['data'];
            this.setState({
                data
            });
        });
    }
    render(){
        let info = this.state.data;
        const regresar = ()=>{
            window.history.back();
        }
        return (
            <>
                {
                    <div className="container">
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-outline-primary" onClick={regresar}>Regresar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2 className={`text-center`}>Artist's Details</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img src={info.images[0].url} className="rounded img-thumbnail" />
                            </div>
                            <div className="col-6">
                                <h4 className={`text-capitalize`}>Artist name: {info.name}</h4>
                                <p className={`text-capitalize`}>Popularity: {info.popularity}</p>
                                <p className={`text-capitalize`}>Genre: {info.genres[0]}</p>
                                <p className={`text-capitalize`}>Total followers: {info.followers.total}</p>
                            </div>
                        </div>
                        
                    </div>
                
                }
                
            </>
        );
    }
}
export default ArtistPage;