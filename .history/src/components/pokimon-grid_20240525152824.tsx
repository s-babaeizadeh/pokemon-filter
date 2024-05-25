"use client"

import { useState } from "react"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {PokemonCard} from "./pokemon-card";


// interface PokemonResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: PokemonData[];
// }

interface PokemonData {
  name: string;
  url: string;
}


interface PokemonGridProps {
    pokemonList: PokemonData[];    
}

export function PokemonGrid({pokemonList}:PokemonGridProps){
    const[searchText,setSearchText]= useState("");

    const searchFilter = (pokemonList:PokemonData[]) => {
        return pokemonList.filter((pokemon:PokemonData) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))

    }

    //save the filtered array of objects

    const filteredPokemonList = searchFilter(pokemonList);

//  console.log(pokemonList);
    return(
        <>
         <div>
            <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="pokemonName">Pokemon Name</Label>
                <Input 
                    type="text" 
                    value={searchText} 
                    autoComplete="off"
                    id="pokemonName"
                    placeholder="Charizard, Pikachu, etc."
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
           {filteredPokemonList.map((pokemon:PokemonData)=> {
            return(
                <PokemonCard name={pokemon.name} key={pokemon.name + "Card"}/>
            )

           })}
        </div>
        </>
    )

}