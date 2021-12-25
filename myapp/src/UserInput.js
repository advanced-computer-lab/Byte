import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function UserInput() {
  let search = window.location.search;
  console.log(search);
  const price = search.split('=')[1].split('%')[0];
  const selected_seats = search.split('=%20')[1].split('%')[0];
  const flight_number = search.split('=')[3].split('%')[0];
  const no_Of_Seats = search.split('=')[4].split('%')[0];
  const classV = search.split('=%20')[2].split('%')[0];

  console.log('priceeeeeeeeeeeeeee ' + price);
  console.log('selected_seats ' + selected_seats);
  console.log('flight_number ' + flight_number);
  console.log('noOfSeats ' + no_Of_Seats);
  console.log('classV ' + classV);

  const [form, setForm] = useState([]);
  //assume 3 for now -> take from seats page
  var noOfSeats = 3;

  const prevIsValid = () => {
    if (form.length === 0) {
      return true;
    }

    const someEmpty = form.some(
      (item) =>
        item.Firstname === '' ||
        item.Lastname === '' ||
        item.Passport === '' ||
        item.Email === ''
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];

        if (form[index].Email === '') {
          allPrev[index].errors.Platform = 'Email is required';
        }
        if (form[index].Passport === '') {
          allPrev[index].errors.Platform = 'Passport is required';
        }

        if (form[index].Firstname === '') {
          allPrev[index].errors.Firstname = 'Firstname is required';
        }

        if (form[index].Lastname === '') {
          allPrev[index].errors.Lastname = 'Lastname is required';
        }
        setForm(allPrev);
      });
    }

    return !someEmpty;
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      Email: '',
      Passport: '',
      Firstname: '',
      Lastname: '',

      errors: {
        Email: null,
        Passport: null,
        Firstname: null,
        Lastname: null,
      },
    };

    if (prevIsValid()) {
      setForm((prev) => [...prev, inputState]);
    }
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,

          errors: {
            ...item.errors,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + ' Is required',
          },
        };
      });
    });
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };
  return (
    <div className='container mt-5 py-5'>
      <h1>Travellers' Data</h1>
      <p>
        Please input each traveller's personal information as shown in passport
      </p>

      {/* {JSON.stringify(form)} */}

      <form>
        {form.map((item, index) => (
          <div className='row mt-3' key={`item-${index}`}>
            <div className='col'>
              <input
                type='text'
                className={
                  item.errors.Firstname
                    ? 'form-control  is-invalid'
                    : 'form-control'
                }
                name='Firstname'
                placeholder='Firstname'
                value={item.Firstname}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Firstname && (
                <div className='invalid-feedback'>{item.errors.Firstname}</div>
              )}
            </div>

            <div className='col'>
              <input
                type='text'
                className={
                  item.errors.Lastname
                    ? 'form-control  is-invalid'
                    : 'form-control'
                }
                name='Lastname'
                placeholder='Lastname'
                value={item.Lastname}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Lastname && (
                <div className='invalid-feedback'>{item.errors.Lastname}</div>
              )}
            </div>

            <div className='col'>
              <input
                type='text'
                className={
                  item.errors.Platform
                    ? 'form-control  is-invalid'
                    : 'form-control'
                }
                name='Passport'
                placeholder='Passport'
                value={item.Passport}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Passport && (
                <div className='invalid-feedback'>{item.errors.Passport}</div>
              )}
            </div>

            <div className='col'>
              <input
                type='text'
                className={
                  item.errors.Platform
                    ? 'form-control  is-invalid'
                    : 'form-control'
                }
                name='Email'
                placeholder='Email'
                value={item.Email}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Email && (
                <div className='invalid-feedback'>{item.errors.Email}</div>
              )}
            </div>

            <button
              className='btn btn-warning'
              onClick={(e) => handleRemoveField(e, index)}
            >
              X
            </button>
          </div>
        ))}

        <button className='btn btn-primary mt-2' onClick={handleAddLink}>
          Add a Traveller
        </button>
        <button className='btn btn-success mt-2' style={{ marginLeft: '20px' }}>
          <Link
            style={{ color: 'white' }}
            to={{
              pathname: `/pay`,
              search: `
                  :price=${price}
                  :selected= ${selected_seats}
                  :fnumber=${flight_number}
                  :no_of_seats=${no_Of_Seats}
                  :class= ${classV}
                  `,
            }}
          >
            Proceed to Payment
          </Link>
        </button>
      </form>
    </div>
  );
}

export default UserInput;
