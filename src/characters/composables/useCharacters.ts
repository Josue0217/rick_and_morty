
import { onMounted, ref } from 'vue';
import axios from 'axios';
import rickAndMortyApi from '../../api/rickAndMorityApi';
import type { Character } from '../interfaces/character';


const characters = ref<any[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {

    onMounted( async() => {
        await loadCharacters();
    })

    const loadCharacters = async() => {

        if( characters.value.length > 0 ) return;

        isLoading.value = true;
        try {
            const { data } = await rickAndMortyApi.get<Character[]>('/character');
            characters.value = data.results;
            isLoading.value = false;
            
        } catch (error) {
            isLoading.value = false;
            hasError.value = true;
            
            if( axios.isAxiosError(error) ){
                return errorMessage.value = error.message;
            }

            errorMessage.value = JSON.stringify(error);
            
        }
    }
    

    return {
        characters,
        isLoading,
        hasError,
        errorMessage
    }
}