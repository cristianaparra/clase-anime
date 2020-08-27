import React, {useEffect} from 'react';


const Home = () => {
    
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
            console.log(datos.data)
        })

    }, [])


>>>>>>> f47bb88da230f125329f0ebd827b1607b064f321
    return (
        <>
        <form onSubmit={NuevaFuncion}>
            <input type="text" name="filter" className="form-control"/>
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
            home
        </>
    )
 
}



export default Home;