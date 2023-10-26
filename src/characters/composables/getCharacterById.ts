import type { Character } from "../interfaces/character";
import rickAndMortyApi from '../../api/rickAndMorityApi';


export const getCharacterById = async( id: string ):Promise<Character> => {
    const { data } = await rickAndMortyApi.get<Character[]>(`/character/${ id }`);
    
    return data;
}