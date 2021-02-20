import React from 'react';
// Servicio de peticiones http
import spooti from '../utils/services';

// Esta página muestra la lista de canciones por categoría
class PlaylistCategoryPage extends React.Component{
    state={
        data: {
            playlists:{
                items:[]
            }
        }
    };
    
    componentDidMount(){
        spooti.getPlaylistCategory(this.props.match.params.id).then((resp)=>{
            console.log("listCategory:",resp);
            let data = resp['data'];
            this.setState({
                data
            });
            console.log("listaCategoryid",this.state);
        });
    }
    render(){

        const regresar =()=>{
            window.history.back();
        }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <button className="btn btn-outline-primary" onClick={regresar}>Regresar</button>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h2 className="text-center">Category's Playlist</h2>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            this.state.data.playlists.items.map(lista=>{
                                return (
                                    <div key={lista.id} className="col mt-3">
                                        <div className="card h-100">
                                            <img src={lista.images[0].url} className="card-img-top" alt={lista.description}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{lista.name}</h5>
                                                <p className="card-text">{lista.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                    
                </div>
            </>
        );
    }
}
export default PlaylistCategoryPage;