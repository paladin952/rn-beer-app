import {Beer, SortType} from "../types/Types";
import axios from 'axios';

const GET_BEER_URL = "https://api.punkapi.com/v2/beers";
const MAX_NUMBER_OF_BEERS = 9;

const getBeersUrl = (foodPairing?: string) => {
    if (foodPairing) {
        return GET_BEER_URL + "?food=" + foodPairing;
    }
    return GET_BEER_URL;
};


export default class ApiService {

    public static async getBeers(sortType?: SortType, foodPairing?: string): Promise<Beer[]> {
        const data = await axios.get(getBeersUrl(foodPairing))
            .then(value => value.data)
            .then((beers: Beer[]) => {
                return beers.filter((b: Beer) => b.image_url != null) // Remove beers without image
            }).then((beers: Beer[]) => {
                if (beers.length > MAX_NUMBER_OF_BEERS) {
                    return beers.slice(0, MAX_NUMBER_OF_BEERS);
                }
                return beers;
            });

        return sort(data, sortType);
    }
}

const sort = (data: Beer[], sortType?: SortType): Beer[] => {
    // sortType = "abv_descending";
    // sortType = "name_ascending";

    if (sortType === "abv_ascending") {
        data.sort((a,b) => (a.abv > b.abv) ? 1 : ((b.abv > a.abv) ? -1 : 0));
        return data;

    } else if (sortType === "abv_descending") {
        data.sort((a,b) => (a.abv < b.abv) ? 1 : ((b.abv < a.abv) ? -1 : 0));
        return data;

    } else if (sortType === "name_ascending") {
        data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return data;

    } else if (sortType === "name_descending") {
        data.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
        return data;

    } else {
        return data;
    }
};