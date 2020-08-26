import React from 'react';

const Home = () => {
    
    const NuevaFuncion =(event) =>{
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target.elements.filter.value);

    } 
console.log(NuevaFuncion)
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