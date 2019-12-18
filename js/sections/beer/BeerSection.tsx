import {useEffect} from "react";
import {FlatList} from "react-native";
import ApiService from "../../api/ApiService";
import {Beer, SortType} from "../../types/Types";
import React from "react";
import {BeerComponent} from "../../components/Beer.component";
import {Dimensions} from "react-native";
import styled from "styled-components/native";
import {BeerDialogComponent} from "../../components/BeerDialog.components";

const screenWidth = Math.round(Dimensions.get('window').width);
const MARGIN = 12;
const NUMBER_OF_COLUMNS = 3;

const Margin = styled.View`
  margin-left: ${MARGIN};
  margin-top: ${2 * MARGIN};
`;

interface Props {
    sortType?: SortType,
    foodPairing?: string;
}

const BeerSectionInternal: React.FC<Props> = ({foodPairing, sortType}) => {
    const [beers, setBeers] = React.useState<Beer[]>([]);
    const [dialogData, setDialogData] = React.useState<Beer | null>(null);

    const itemWidth = (screenWidth - MARGIN * (NUMBER_OF_COLUMNS + 1)) / NUMBER_OF_COLUMNS;
    const itemHeight = itemWidth * 1.5;

    async function loadData() {
        const beers = await ApiService.getBeers(sortType, foodPairing);
        setBeers(beers);
    }

    function onClickBeer(beer: Beer) {
        setDialogData(beer);
    }

    useEffect(() => {
        loadData();
    }, [sortType]);

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

export default BeerSectionInternal;