import {Beer} from "../types/Types";
import axios from 'axios';

const GET_BEER_URL = "https://api.punkapi.com/v2/beers?food=";

export default class ApiService {

    public static async getBeers(foodPairing: string): Promise<Beer[]> {
        return axios.get(GET_BEER_URL + foodPairing)
            .then(value => value.data)
            .then((beers: Beer[]) => {
                // Remove beers without image
                return beers.filter((b: Beer) => b.image_url != null)
            })
    }

}