import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegionCreate from "./RegionCreate";
import RegionEdit from "./RegionEdit";
import { deleteRegion, fetchRegions } from "../../store/region/regionSlices";

export default function RegionIndex() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions.regions);
  const regionStatus = useSelector((state) => state.regions.status);
  const error = useSelector((state) => state.regions.error);
  const [displayCreate, setDisplayCreate] = useState(false);
  const [displayEdit, setDisplayEdit] = useState({
    show: false,
    id: "",
    name: "",
  });

  useEffect(() => {
    if (regionStatus === "idle") {
      dispatch(fetchRegions());
    }
  }, [regionStatus, dispatch]);

  function deleteReg(e, id) {
    e.preventDefault();
    dispatch(deleteRegion(id));
  }

  // console.log(regionStatus);

  let content;

  if (regionStatus === "loading") {
    content = <h1>Loading..</h1>;
  } else if (regionStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      {content || (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplayCreate(true)}>Add Region</button>
          {displayCreate && <RegionCreate setDisplay={setDisplayCreate} />}
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((reg) => (
                <tr key={reg.region_id}>
                  <td>{reg.region_id}</td>
                  <td>{reg.region_name}</td>
                  <td>
                    <button
                      onClick={() =>
                        setDisplayEdit({
                          show: true,
                          id: reg.region_id,
                          name: reg.region_name,
                        })
                      }
                    >
                      Edit
                    </button>
                    <button onClick={(e) => deleteReg(e, reg.region_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {displayEdit.show && (
            <RegionEdit data={{ id: displayEdit.id, name: displayEdit.name }} setDisplayEdit={setDisplayEdit} />
          )}
        </>
      )}
    </>
  );
}
