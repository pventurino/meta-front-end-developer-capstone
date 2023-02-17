import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import Container from "./Container";
import './Reservations.scss';

export const initializeTimes = () => ([17,18,19,20,21,22]);

export const updateTimes = (state, forDate) => {
  console.log('forDate', forDate);
  return state;
}

const Reservations = () => {

  const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes());

  return (
    <section id='reservations'>
      <Container>
        <h2>Reservations</h2>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={updateAvailableTimes}
          />
      </Container>
    </section>
  );
}

export default Reservations;