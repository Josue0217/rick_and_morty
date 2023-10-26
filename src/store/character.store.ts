import type { Character } from '../characters/interfaces/character';

interface Store {

    //STATE
    characters: {
        list            : Character[];
        count           : number;
        isLoading       : boolean;
        hasError        : boolean;
        errorMessage?   : string;
    }

    //METODOS
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[] ) => void;
    loadCharactersFailed: ( error: string ) => void;

}

