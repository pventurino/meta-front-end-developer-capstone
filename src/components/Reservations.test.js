import { render, screen, within,  } from "@testing-library/react";
import BookingForm from './BookingForm';
import Reservations, { initializeTimes, updateTimes } from "./Reservations";

test('Renders the BookingForm heading', () => {
    const availableTimes = [17,18,19];
    const onDateChange = jest.fn();

    render(
        <BookingForm
            availableTimes={availableTimes}
            onDateChange={onDateChange}/>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();

    // Test that available times become time options
    const timeSelector = screen.getByLabelText('Choose time');
    availableTimes.forEach(x => {
        let optionElement = within(timeSelector).getByText(`${x}:00`);
        expect(optionElement).toBeInTheDocument();
    })
})

test('initializeTimes', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual([17,18,19,20,21,22])
})

test('updateTimes', () => {
    const inputState = [17,18,19];
    const outputState = updateTimes(inputState, '2022-02-02');
    expect(outputState).toEqual(inputState);
})
