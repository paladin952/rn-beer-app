import {useEffect} from "react";
import {FlatList} from "react-native";
import ApiService from "../api/ApiService";
import {Beer} from "../types/Types";
import React from "react";
import {BeerComponent} from "./Beer.component";
import {Dimensions} from "react-native";
import styled from "styled-components/native";
import {BeerDialogComponent} from "./BeerDialog.components";

const screenWidth = Math.round(Dimensions.get('window').width);
const MARGIN = 12;
const NUMBER_OF_COLUMNS = 3;

const Margin = styled.View`
  margin-left: ${MARGIN};
  margin-bottom: ${2 * MARGIN};
`;

export const BeerSection = () => {
    const [beers, setBeers] = React.useState<Beer[]>([]);
    const [dialogData, setDialogData] = React.useState<Beer>(null);

    const itemWidth = (screenWidth - MARGIN * (NUMBER_OF_COLUMNS + 1)) / NUMBER_OF_COLUMNS;
    const itemHeight = itemWidth * 1.5;

    async function loadData() {
        const beers = await ApiService.getBeers();
        setBeers(beers);
    }

    function onClickBeer(beer) {
        setDialogData(beer);
    }

    useEffect(() => {
        loadData();
    });

    return (<>
        <FlatList
            data={beers}
            renderItem={({item}) => {
                return <Margin>
                    <BeerComponent beer={item} width={itemWidth} height={itemHeight} onPress={onClickBeer}/>
                </Margin>
            }}
            numColumns={NUMBER_OF_COLUMNS}
            keyExtractor={(item: Beer) => String(item.id)}
        />
        {dialogData && <BeerDialogComponent
            beer={dialogData}
            onClose={() => {
                setDialogData(null)
            }}/>}
    </>)
};