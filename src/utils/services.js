import axios from "axios";
import spootiServ from "../config";

let token = "";
let urlapi = "https://api.spotify.com/v1/";

const params = new URLSearchParams();
params.append("grant_type","client_credentials");
params.append("client_id", `${spootiServ.client_id}`);
params.append("client_secret",`${spootiServ.client_secret}`);


const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

// Se obtiene el token para consumir los servicios Rest de Spootify
const getToken = ()=>{
    // return axios({
    //     method: 'POST',
    //     url: 'https://accounts.spotify.com/api/token',
    //     data: user
    // });
    return axios.post(
        'https://accounts.spotify.com/api/token',
        params,
        config
    );
}

getToken().then((resp)=>{
    token = resp['data']['access_token'];
    console.log("token",token);
});

// Se Obtiene los nuevos lanzamientos
const getNewReleases = async()=>{
    return axios({
        method: 'GET',
        url: `${urlapi}browse/new-releases`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

// Se obtiene la lista de colaboraciones de artistas
const getFeaturePlaylist = async()=>{
    
    return axios({
        method: 'GET',
        url: `${urlapi}browse/featured-playlists`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

// Se obtiene las categorias
const getCategories = async()=>{
    //https://api.spotify.com/v1/browse/categories
    return axios({
        method: 'GET',
        url: `${urlapi}browse/categories`,
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
}

// Se obtiene lista de canciones por categoría
const getPlaylistCategory = async(id_category)=>{
    //https://api.spotify.com/v1/browse/categories/toplists/playlists
    return axios({
        method: 'GET',
        url: `${urlapi}browse/categories/${id_category}/playlists`,
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
}

// Se obtiene los datos de un artista
const getArtist =async(id_artist)=>{
    //https://api.spotify.com/v1/artists/6fWVd57NKTalqvmjRd2t8Z
    return axios({
        method: 'GET',
        url: `${urlapi}artists/${id_artist}`,
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
}

export default {getNewReleases, getFeaturePlaylist, getCategories, getPlaylistCategory, getArtist};
