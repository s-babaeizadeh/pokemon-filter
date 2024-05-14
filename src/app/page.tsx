
import { getPokemonList } from "@/components/lib/pokemonAPI";
import { PokemonGrid } from "@/components/pokimon-grid";



interface PokemonData {
  name: string;
  url: string;
}



export default async function Home() {

  const pokemonList:PokemonData[] = await getPokemonList()
  return (
     <PokemonGrid pokemonList={pokemonList}/>
  );
}
