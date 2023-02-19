import { render, screen, within, fireEvent, act } from "@testing-library/react";
import BookingForm from './BookingForm';
import Reservations, { initializeTimes, updateTimes } from "./Reservations";
import * as API from "../api";
import userEvent from "@testing-library/user-event";

describe('Reservations', () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Renders the BookingForm heading', () => {
        const availableTimes = ['17:00','18:00','19:00'];
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
            let optionElement = within(timeSelector).getByText(x);
            expect(optionElement).toBeInTheDocument();
        })
    });
    
    test('Form component can be submitted', async () => {
        const fetchAPI = jest.spyOn(API, 'fetchAPI');
        const mockSubmit = jest.fn();
        
        render(<Reservations onSubmit={mockSubmit}/>);
        expect(fetchAPI).toBeCalled();
    
        const select = screen.getByLabelText(/choose time/i);
        const options = within(select).getAllByText(/\d+:[03]0/);
    
        const submitButton = screen.getByRole('button', {type: 'submit'});
        await userEvent.click(submitButton);
        expect(mockSubmit).toBeCalled();
    });

    it('auto-selects an existing time', async () => {
        const fetchAPI = jest.spyOn(API, 'fetchAPI');
        fetchAPI.mockReturnValue(['17:00','18:00']);

        render(<Reservations />)
        const timePicker = screen.getByLabelText('Choose time');
        expect(timePicker.value).toEqual('17:00');

        fetchAPI.mockReturnValue(['18:00','19:00']);
        const datePicker = screen.getByLabelText('Choose date');
        await act(() => fireEvent.change(datePicker, {target: {value: '2022-02-02'}}));
        expect(timePicker.value).toEqual('18:00');

    });

    test('initializeTimes', () => {
        const mockReturn = ['17:00','17:30','19:00'];
        const mockFetch = jest.spyOn(API, 'fetchAPI')
            .mockReturnValueOnce(mockReturn);
    
        const initialState = initializeTimes();
        expect(initialState).toEqual(mockReturn)
        expect(mockFetch).toBeCalled();
    });
    
    test('updateTimes', () => {
        const mockReturn = ['17:00','17:30','19:00'];
        const mockFetch = jest.spyOn(API, 'fetchAPI')
            .mockReturnValueOnce(mockReturn);
    
        const outputState = updateTimes(['17:00'], new Date('2022-02-02'));
        expect(mockFetch).toBeCalled();
        expect(outputState).toEqual(mockReturn);
    });
})
