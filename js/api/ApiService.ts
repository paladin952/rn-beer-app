import {Beer} from "../types/Types";
import axios from 'axios';

const GET_BEER_URL = "https://api.punkapi.com/v2/beers";

const getBeersUrl = (foodPairing?: string) => {
    if (foodPairing) {
        return GET_BEER_URL + "?food=" + foodPairing;
    }

    return GET_BEER_URL;
};

export default class ApiService {

    public static async getBeers(foodPairing?: string): Promise<Beer[]> {
        return axios.get(getBeersUrl(foodPairing))
            .then(value => value.data)
            .then((beers: Beer[]) => {
                return beers.filter((b: Beer) => b.image_url != null) // Remove beers without image
            })
    }

}