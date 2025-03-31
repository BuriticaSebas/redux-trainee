import React from "react";

const SearchBar = ( {categoria, buscador, selectCategoria, textoBuscar}) => {



    console.log("Esta es la categoria", categoria)
    console.log("Esta es el texto", buscador)


    return (
        <div className="h-full bg-blue-500 flex flex-col p-4 my-10">
            <div className="m-auto flex gap-10">
                <input
                    className="p-3 rounded-lg bg-blue-800"
                    type="text"
                    placeholder="Buscador"
                    value={buscador}
                    onChange={(e) => textoBuscar(e.target.value)}

                />

                <div>
                    <label htmlFor="categorias" className="flex items-center">
                        Categorías
                    </label>
                    <select name="CATEGORIAS" id="categorias"  value={categoria}  onChange={(e)=> selectCategoria(e.target.value)}>
                        <option value="Todas">Todas</option>
                        <option value="Zapatos">Zapatos</option>
                        <option value="Camisetas">Camisetas</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Abrigos">Abrigos</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
