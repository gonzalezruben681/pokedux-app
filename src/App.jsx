import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { get } from"immutable";
import Logo from "./assets/logo.svg";
import { Col, Spin } from "antd";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector(state => get(state, 'pokemons')).toJS();
  const loading = useSelector((state) => get(state, 'loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };
    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size="large" />
      </Col> : <PokemonList pokemons={pokemons} /> }
      
    </div>
  );
}

export default App;
