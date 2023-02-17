import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import Container from "./Container";
import { fetchAPI } from "../api";
import './Reservations.scss';

export const initializeTimes = () => fetchAPI(new Date());

export const updateTimes = (state, forDate) => {
  return fetchAPI(forDate);
}

const Reservations = ({onSubmit}) => {

  const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes());

  const handleSubmit = (onSubmit) ?? ((values) => { console.log('submit', values); })

  return (
    <section id='reservations'>
      <Container>
        <h2>Reservations</h2>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={updateAvailableTimes}
          onSubmit={handleSubmit}
          />
      </Container>
    </section>
  );
}

export default Reservations;