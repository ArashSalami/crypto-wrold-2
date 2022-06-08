import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Containers";
import ExchangeList from "../components/ExchangeList";
import { getExchanges, getCoins } from "../store/features/mainSlice";
import Loading from "../components/Loading";

const Exchanges = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getCoins());
    dispatch(getExchanges());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ExchangeList />
        </Container>
      )}
    </>
  );
};

export default Exchanges;
