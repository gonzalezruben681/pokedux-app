import PropTypes  from "prop-types";
import {useDispatch} from 'react-redux';
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import {setFavorite} from '../actions';

const PokemonCard = ({name, image, types, id, favorite}) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(',')
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }
    PokemonCard.propTypes = {
        name: PropTypes.node.isRequired,
        image: PropTypes.node.isRequired,
        types: PropTypes.node.isRequired,
        id: PropTypes.node.isRequired,
        favorite: PropTypes.bool.isRequired

    }
    return <Card title={name} cover={ <img src={image} alt={name} /> } 
    extra={ <StarButton  isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
        <Meta description={typesString}  />
    </Card>
}

export default PokemonCard;


