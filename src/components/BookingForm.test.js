import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

describe('Booking form validations', () => {

  const onDateChange = jest.fn();
  const onSubmit = jest.fn();
  const availableTimes = ['17:00','18:00','19:00'];

  const renderForm = () => render(
    <BookingForm
      availableTimes={availableTimes}
      onDateChange={onDateChange}
      onSubmit={onSubmit}
      />
  );

  it('validates date field', async () => {
    renderForm();
    const dateInput = screen.getByLabelText('Choose date');

    const getAlert = async () => 
      await screen.findByRole('alert', {htmlFor: dateInput.id});
  
    // Date is required
    await userEvent.clear(dateInput);
    expect(await getAlert()).toHaveTextContent(/is a required field/);

    // Date not in the past
    await userEvent.type(dateInput, '1990-01-01', {delay: 10});
    expect(await getAlert()).toHaveTextContent(/must be later/);
  });

  it('validates time field', async () => {
    renderForm();
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
  
    // Time is required
    await userEvent.clear(dateInput);
    await screen.findByRole('alert', {htmlFor: timeInput.id})
      .then(elem => {
        expect(elem.textContent).toMatch(/is a required field/);
      });

  });

  describe('validates guest fields', () => {

    it.each([
      [' ', /required/],
      ['0', /must be greater/],
      ['11', /must be less/]
    ])('%p errs with %p', async (input, message) => {
      renderForm();
      const guestsInput = screen.getByLabelText(/guests/i);
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, input, {delay: 10});

      const alert = screen.getByRole('alert', {htmlFor: guestsInput.id})
      expect(alert.textContent).toMatch(message);
    })
  })

});