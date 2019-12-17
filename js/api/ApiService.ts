import {Beer} from "../types/Types";
import axios from 'axios';

const GET_BEER_URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6";

export default class ApiService {

    public static async getBeers(): Promise<Beer[]> {
        return axios.get(GET_BEER_URL).then(value => value.data);
    }

}