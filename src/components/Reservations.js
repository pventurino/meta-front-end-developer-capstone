import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import Container from "./Container";
import { fetchAPI, submitAPI } from "../api";
import './Reservations.scss';
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => fetchAPI(new Date());

export const updateTimes = (state, forDate) => {
  return fetchAPI(new Date(forDate));
}

const Reservations = ({onSubmit}) => {
  const navigate = useNavigate();

  const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes());

  const handleSubmit = (onSubmit) ?? ((values) => { console.log('submit', values); })

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate('/reservations/confirmation');
    }
  }

  return (
    <section id='reservations'>
      <Container>
        <h2>Reservations</h2>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={updateAvailableTimes}
          onSubmit={submitForm}
          />
      </Container>
    </section>
  );
}

export default Reservations;