
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste= async() => {

    try{
        const resp = await fetch(jokeUrl);

        if(!resp.ok) throw 'No se puso realizar la peticion';

        const {id, icon_url, value} = await resp.json();
        
        return {id, icon_url, value};
        
    } catch(err){
        throw err;
    }
};

export {
    obtenerChiste
}