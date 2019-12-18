export interface Beer {
    id: number;
    name: string;
    tagline: string,
    abv: number;
    description: string;
    food_pairing: string[];
    image_url: string;
}

export type SortType = "abv_ascending" | "abv_descending" | "name_ascending" | "name_descending";