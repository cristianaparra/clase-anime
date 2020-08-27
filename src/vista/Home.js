import React, {useEffect,useState} from 'react';
import ResumenAnime from '../componentes/ResumenAnime';



const Home = () => {

    
    const [state, setState] = useState(
        {
            animes: []
        });
    
    const NuevaFuncion =(event) =>{
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target.elements.filter.value);

    } 
<<<<<<< HEAD
console.log(NuevaFuncion)
=======
    useEffect (() => {
        fetch('https://kitsu.io/api/edge/anime')
        .then ((resp) => resp.json())
        .then ((datos) => {
           setState(s=>({
               ...s,
               animes: datos.data
           }))
           
        })
    }, [])

    

>>>>>>> f47bb88da230f125329f0ebd827b1607b064f321
    return (
      <>
        <form onSubmit={NuevaFuncion}>
          <input type="text" name="filter" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>

        <div className="row">
          {state.animes.map((ani, id) => (
            <div className="col-4" key={id}>
              <ResumenAnime
                nombre={ani.attributes.titles.en}
                url={ani.links.self}
                img={
                  ani.attributes.coverImage
                    ? ani.attributes.coverImage.original
                    : ""
                }
              />
            </div>
          ))}
        </div>
      </>
    );
}
export default Home;