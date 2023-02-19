import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({availableTimes, onDateChange, onSubmit}) => {

  const utcDate = new Date();
  const offsetInMillis = 60 * 1000 * utcDate.getTimezoneOffset();
  const localDate = new Date(utcDate - offsetInMillis);
  const today = localDate.toISOString().substring(0,10);

  const formik = useFormik({
    onSubmit: onSubmit,
    initialValues: {
      'res-date': today,
      'res-time': availableTimes[0],
      'guests': 2,
      'occasion': 'Birthday'
    },
    validationSchema: Yup.object({
      'res-date': Yup.date().required().min(today),
      'res-time': Yup.string().oneOf(availableTimes).required(),
      'guests': Yup.number().positive().min(1).max(10).required(),
      'occasion': Yup.string().oneOf(['Birthday','Anniversary'])
    }),
  });

  useEffect(() => {
    let selectedTime = formik.values['res-time'];
    if ( availableTimes.indexOf(selectedTime) === -1 ) {
      formik.setValues({...formik.values, 'res-time': availableTimes[0]});
    }
  }, [formik, availableTimes]);

  const ErrorMessage = (props) => !!formik.errors[props.name] ? (
    <label
      className='error'
      role='alert'
      style={{color: 'red'}}
      htmlFor={props.name}>
      {formik.errors[props.name]}
    </label>
  ) : null;
  
  return (
    <form
      style={{display:'grid', maxWidth:'200px', gap:'20px'}}
      onSubmit={formik.handleSubmit}>
      <div className='formField'>
        <label htmlFor='res-date'>Choose date</label>
        <input
          id='res-date'
          name='res-date'
          type='date'
          min={today}
          value={formik.values['res-date']}
          onBlur={formik.onBlur}
          onChange={(e) => {
            onDateChange(e.currentTarget.value);
            formik.handleChange(e);
          }}
          />
        <ErrorMessage name='res-date' />
      </div>

      <div className='formField'>
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          name='res-time'
          value={formik.values['res-time']}
          onBlur={formik.onBlur}
          onChange={formik.handleChange}
          >
          { availableTimes.map(x => (<option key={x} value={x}>{x}</option>)) }
        </select>
        <ErrorMessage name='res-time' />
      </div>

      <div className='formField'>
        <label htmlFor='guests'>Number of guests</label>
        <input
          id='guests'
          name='guests'
          type='number'
          min={1}
          max={10}
          value={formik.values['guests']}
          onBlur={formik.onBlur}
          onChange={formik.handleChange}
          />
        <ErrorMessage name='guests'/>
      </div>

      <div className='formField'>
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          as='select'
          value={formik.values['occasion']}
          onBlur={formik.onBlur}
          onChange={formik.handleChange}
          >
          <option key='birthday' value='Birthday'>Birthday</option>
          <option key='anniversary' value='Anniversary'>Anniversary</option>
        </select>
        <ErrorMessage name='occasion'/>
      </div>

      <button type='submit'>Make Your reservation</button>
    </form>
)
};

export default BookingForm;