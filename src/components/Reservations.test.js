import { render, screen, within,  } from "@testing-library/react";
import BookingForm from './BookingForm';
import Reservations from "./Reservations";
import { shallow } from 'enzyme';

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
})

test('initializeTimes', () => {
    render(<Reservations />);
    const timeSelector = screen.getByLabelText('Choose time');
    [17,18,19,20,21,22].forEach(x => {
        let optionElement = within(timeSelector).getByText(`${x}:00`);
        expect(optionElement).toBeInTheDocument();
    })
})

test('updateTimes', () => {
    const inputState = [17,18,19];
    const returnState = Reservations.updateTimes(inputState, '2022-01-01');
    expect(returnState).toEqual(inputState);
    expect(true).toBe(false);
})