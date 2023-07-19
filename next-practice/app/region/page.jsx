"use client";
import { useEffect, useState } from "react";
import regionApi from "../api/regionApi";
import Link from "next/link";

export default function Region() {
    const [regions, setRegions] = useState([]);
    const [refresh, setRefresh] = useState(false);
    

    const deleteHandle = (e, id) => {
        e.preventDefault();
        console.log(id);
        regionApi.destroy(id).then(() => {
            alert("data berhasil dihapus");
        })
        setRefresh(true);
    }

    useEffect(() => {
        regionApi.getAll().then(
            data => { setRegions(data) }
        )
        setRefresh(false);
    }, [refresh])
  return (
    <>
      <h1 className="text-xl text-center mt-5">Region List</h1>
        <div className="relative overflow-x-auto p-5">
            <div className="text-center mb-3">
                <Link className="bg-blue-500 text-white px-2 py-1 rounded-md" href='/region/create'>Create</Link>
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
                    {regions && regions.map(region => 
                        <tr key={region.region_id} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {region.region_id}
                            </th>
                            <td className="px-6 py-4">
                                {region.region_name}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/region/${region.region_id}`}>Edit </Link>
                                <button onClick={(e) => deleteHandle(e, region.region_id)}>Delete</button>
                                 
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      <div>
      </div>
    </>
  );
}
