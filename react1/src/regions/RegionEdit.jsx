import { useState } from "react";
import regionAPI from "../../api/regionAPI";

const RegionEdit = (props) => {
  console.log(props);
  const [value, setValue] = useState({
    name: props.data.name,
  });

  const inputHandleChange = (e) => {
    e.preventDefault();
    setValue({
      name: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    regionAPI.edit(props.data.id, value).then(() => {
      alert("data berhasil diupdate");
      props.setRefresh(true);
      props.setDisplayEdit(false);
    });
  };

  return (
    <>
      <h2>Edit Regions</h2>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            value={value.name}
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
              props.setDisplayEdit(false);
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default RegionEdit;
