import "./Home.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import CardContainer from "../../components/CardContainer/CardContainer";
import NavBar from "../../components/NavBar/NavBar";
import Filters from "../../components/Filters/Filters";
import { IonButton, IonDatetime } from "@ionic/react";

const Home = () => {
  const dispatch = useDispatch();
  const allpokemons = useSelector((state) => state.allpokemons);
  const pokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const totalItems = pokemons.length;
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  useEffect(() => {
    if (allpokemons.length < 1) dispatch(getPokemons());
  }, [dispatch, allpokemons]);

  if (allpokemons.length) {
    return (
      <div className="home">
        <NavBar />
        <Filters />
        <CardContainer pokemons={pokemons.slice(startIndex, endIndex)} />
        <Paginate
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
        />
      </div>
    );
  } else {
    return <h2 className="loading">LOADING ...</h2>;
  }
};

export default Home;
