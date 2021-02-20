import React from 'react';
import { FaSun, FaRegSun } from 'react-icons/fa';

// Componentes personalizados
import CarouselReleased from '../components/CarouselReleased';
import CarouselFeatured from '../components/CarouselFeatured';
import CarouselCategories from '../components/CarouselCategories';

// Estilos
import '../components/styles/Home.css';

class HomePage extends React.Component{
   state = {
       modo_dark:false
   };
    render(){
        const container = document.getElementById('root');

        const colorDark = ()=>{
            container.classList.add('bg-dark');
            this.setState({
                modo_dark: true
            });
        }

        const colorLight = ()=>{
            container.classList.remove('bg-dark');
            container.classList.add('bg-light');
            this.setState({
                modo_dark: false
            });
        }

        //#212121 mode dark
        const img = "https://www.tonica.la/__export/1599939641284/sites/debate/img/2020/09/12/iron-man-fortnite.jpg_423682103.jpg";
        return (
            <>
                <div className="row">
                    <div className="d-xs-none col-sm-3 col-md-3 col-lg-3">
                        <div className="contenedor">
                            <div className="sidebar-header">
                                <div className="text-center">
                                    <img src={img} width="80" className="rounded-circle mt-2" />
                                    <h5>Emanuel Antonio</h5>
                                </div>
                            </div>
                            <ul className="list-unstyled components">
                                <li className="active">
                                    <div className="container">
                                        <a href="#" className="text-white ml-4">Discover</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <a href="#" className="text-white ml-4">Search</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <a href="#" className="text-white ml-4">Favourites</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <a href="#" className="text-white ml-4">Playlist</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="puntero" onClick={colorDark}>
                                        <div className="row">
                                            <div className="col-1">
                                                <FaSun color={`#212121`} size={30}>

                                                </FaSun>
                                            </div>
                                            <div className="col-11">
                                                <h5>Dark Mode</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="puntero" onClick={colorLight}>
                                        <div className="row">
                                            <div className="col-1">
                                                <FaSun color={`#FFA500`} size={30}>

                                                </FaSun>
                                            </div>
                                            <div className="col-11">
                                                <h5>Light Mode</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="row">

                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-10 col-md-12">
                                <div className="text-left ml-3">
                                    <h5>Released this week</h5>
                                    <CarouselReleased />
                                </div>
                                <div className="text-left ml-3">
                                    <h5>Featured Playlists</h5>
                                    <CarouselFeatured />
                                </div>
                                <div className="text-left ml-3">
                                    <h5>Browse</h5>
                                    <CarouselCategories />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default HomePage; 