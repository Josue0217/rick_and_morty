import { useQuery } from '@tanstack/vue-query';
import { getCharacterById } from './getCharacterById';

//useQuery

export const useCharacter = ( id: string ) => {

    const { isLoading, isError, data: character, error } = useQuery(
        [ 'character', id ],
        () => getCharacterById( id ),
    )

    return {
        isLoading,
        isError,
        character,
        errorMessage: error
    }
}