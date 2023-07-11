import { useState } from "react";
import regionAPI from "../../api/regionAPI";

const RegionCreate = (props) => {
  const [value, setValue] = useState({
    name: "",
  });

  const inputHandleChange = (e) => {
    e.preventDefault();
    setValue({
      name: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    regionAPI.create(value).then(() => {
      alert("data berhasil ditambahkan");
      props.setRefresh(true);
      props.setDisplayForm(false);
    });
  };

  return (
    <>
      <h2>Add Region</h2>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            required
            id="name"
            placeholder="name"
            onChange={inputHandleChange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.setDisplayForm(false);
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default RegionCreate;
