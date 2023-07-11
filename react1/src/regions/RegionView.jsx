import { useEffect, useState } from "react";
import regionAPI from "../../api/regionAPI";
import RegionCreate from "./RegionCreate";
import RegionEdit from "./RegionEdit";

// import RegionEdit from "./RegionEdit";
// import RegionEdit from './RegionEdit';

const RegionView = () => {
  const [regions, setRegions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    regionAPI.getAll().then((data) => {
      setRegions(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = (id) => {
    regionAPI.destroy(id).then(() => {
      alert("berhasil dihapus");
      setRefresh(true);
    });
  };

  const editedData = (e, id, name) => {
    e.preventDefault();
    setSelectedEdit({
      id: id,
      name:name
    })

    setDisplayEdit(true);
  }

  return (
    <>
      <h2>List Regions</h2>
      {displayForm ? (
        <RegionCreate setDisplayForm={setDisplayForm} setRefresh={setRefresh} />
      ) : (
        <>
          <button onClick={() => setDisplayForm(true)}>create</button>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((el) => (
                <tr key={el.region_id}>
                  <td>{el.region_id}</td>
                  <td>{el.region_name}</td>
                  <td>
                    <button onClick={(e) => {editedData(e, el.region_id, el.region_name)}}>Edit</button>
                    <button onClick={() => onDelete(el.region_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {displayEdit && <RegionEdit data={selectedEdit} setDisplayEdit={setDisplayEdit} setRefresh={setRefresh}/>}
          
        </>
      )}
    </>
  );
};

export default RegionView;
