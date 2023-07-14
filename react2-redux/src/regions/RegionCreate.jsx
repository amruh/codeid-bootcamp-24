import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewRegion } from "../../store/region/regionSlices";

export default function RegionCreate(props) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors,  }
  } = useForm();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    if (addRequestStatus === "idle") {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewRegion(data)).unwrap();
        reset();
      } catch (err) {
        console.log("failed to add region", err);
      } finally {
        props.setDisplay(false);
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Region Name</label>
          <input type="text" name="name" {...register("name")} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.setDisplay(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
