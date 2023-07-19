"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRegion, fetchRegions } from "../store/region/regionSlices";

export default function RegionRedux() {
  const regions = useSelector((state) => state.regions.regions);
  const regionStatus = useSelector((state) => state.regions.status);
  const error = useSelector((state) => state.regions.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (regionStatus === "idle") {
      dispatch(fetchRegions());
    }
  }, [regionStatus, dispatch]);

  function deleteHandle(e, id) {
    e.preventDefault();
    dispatch(deleteRegion(id));
  }

  return (
    <>
      <h1 className="text-xl text-center mt-5">Region List With Redux</h1>
      <div className="relative overflow-x-auto p-5">
        <div className="text-center mb-3">
          <Link
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
            href="/region-redux/create"
          >
            Create
          </Link>
        </div>
        <table className="w-50 mx-auto bg-white shadow-md shadow-gray-200  text-sm text-left text-gray-500  border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Region Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {regions &&
              regions.map((region) => (
                <tr key={region.region_id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {region.region_id}
                  </th>
                  <td className="px-6 py-4">{region.region_name}</td>
                  <td className="px-6 py-4">
                    <Link href={`/region-redux/${region.region_id}`}>
                      Edit{" "}
                    </Link>
                    <button onClick={(e) => deleteHandle(e, region.region_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
