import React, { useState } from "react";
import "./App.css";

function UserInput() {
  const [form, setForm] = useState([]);

  const prevIsValid = () => {
    if (form.length === 0) {
      return true;
    }

    const someEmpty = form.some(
      (item) => item.Firstname === "" || item.Lastname === "" || item.Email === ""
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];

        if (form[index].Email === "") {
          allPrev[index].errors.Platform = "Email is required";
        }

        if (form[index].Firstname === "") {
          allPrev[index].errors.Firstname = "Firstname is required";
        }

        if (form[index].Lastname === "") {
            allPrev[index].errors.Lastname = "Lastname is required";
          }
        setForm(allPrev);
      });
    }

    return !someEmpty;
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      Email: "",
      Firstname: "",
      Lastname: "",

      errors: {
        Email: null,
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
                : [event.target.name] + " Is required",
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
    <div className="container mt-5 py-5">
      <h1>Travellers' Data</h1>
      <p>Please input each traveller's personal information</p>

      {/* {JSON.stringify(form)} */}

      <form>
        {form.map((item, index) => (
          <div className="row mt-3" key={`item-${index}`}>

            <div className="col">
              <input
                type="text"
                className={
                  item.errors.Firstname
                    ? "form-control  is-invalid"
                    : "form-control"
                }
                name="Firstname"
                placeholder="Firstname"
                value={item.Firstname}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Firstname && (
                <div className="invalid-feedback">{item.errors.Firstname}</div>
              )}
            </div>

            <div className="col">
              <input
                type="text"
                className={
                  item.errors.Lastname
                    ? "form-control  is-invalid"
                    : "form-control"
                }
                name="Lastname"
                placeholder="Lastname"
                value={item.Lastname}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Lastname && (
                <div className="invalid-feedback">{item.errors.Lastname}</div>
              )}
            </div>

            <div className="col">
              <input
                type="text"
                className={
                  item.errors.Platform
                    ? "form-control  is-invalid"
                    : "form-control"
                }
                name="Email"
                placeholder="Email"
                value={item.Email}
                onChange={(e) => onChange(index, e)}
              />

              {item.errors.Email && (
                <div className="invalid-feedback">{item.errors.Email}</div>
              )}
            </div>

            <button 
              className="btn btn-warning"
              onClick={(e) => handleRemoveField(e, index)}
            >
              X
            </button>
          </div>
        ))}

        <button className="btn btn-primary mt-2" onClick={handleAddLink}>
          Add a Traveller
        </button>
      </form>
    </div>
  );
}

export default UserInput;