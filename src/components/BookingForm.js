import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const BookingForm = ({availableTimes, onDateChange}) => {

  let utcDate = new Date();
  let offsetInMillis = 60 * 1000 * utcDate.getTimezoneOffset();
  let localDate = new Date(utcDate - offsetInMillis);
  
  let [state, setState] = useState({
    'res-date': localDate.toISOString().substring(0,10),
    'res-time': 17,
    'guests': 2,
    'occasion': 'Birthday'
  });

  return (
    <Formik
      initialValues={state}
      validationSchema={ Yup.object().shape({
        'res-date': Yup.date().required(),
        'res-time': Yup.number().oneOf(availableTimes).required(),
        'guests': Yup.number().positive().min(1).max(10).required(),
        'occasion': Yup.string().oneOf(['Birthday','Anniversary'])
      }) }
      onSubmit={ values => {
        console.log(values);
        setState(values);
      } }
    >
      {({errors, touched}) => (
        <Form style={{display:'grid', maxWidth:'200px', gap:'20px'}}>
          <label htmlFor='res-date'>Choose date</label>
          <Field name='res-date' type='date' onChange={(e) => onDateChange(e.currentTarget.value)}/>
          <ErrorMessage name='res-date' />

          <label htmlFor='res-time'>Choose time</label>
          <Field name='res-time' as='select'>
            { availableTimes.map(x => (<option key={x} value={x}>{x}:00</option>)) }
          </Field>
          <ErrorMessage name='res-time' />

          <label htmlFor='guests'>Number of guests</label>
          <Field name='guests' type='number' min={1} max={10}/>
          <ErrorMessage name='guests'/>

          <label htmlFor='occasion'>Occasion</label>
          <Field name='occasion' as='select'>
            <option key='birthday' value='Birthday'>Birthday</option>
            <option key='anniversary' value='Anniversary'>Anniversary</option>
          </Field>
          <ErrorMessage name='occasion'/>

          <button type='submit'>Make Your reservation</button>
        </Form>
      )}
    </Formik>

)
};

export default BookingForm;