import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import './Reservations.scss';

const Reservations = () => {

  const updateTimes = (state, forDate) => {
    console.log('forDate', forDate);
    return state;
  }

  const initializeTimes = () => ([17,18,19,20,21,22]);
  const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      Reservations
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={updateAvailableTimes}
        />
    </>
  );
}

export default Reservations;