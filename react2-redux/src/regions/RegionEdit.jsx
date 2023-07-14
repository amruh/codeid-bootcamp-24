import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateRegion } from "../../store/region/regionSlices";

export default function RegionEdit(props) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors,  }
  } = useForm({defaultValues:{name:props.data.name}});
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const dt = {
        id:props.data.id,
        data
    }
    if (addRequestStatus === "idle") {
      try {
        setAddRequestStatus("pending");
        await dispatch(updateRegion(dt)).unwrap();
        reset();
      } catch (err) {
        console.log("failed to edit region", err);
      } finally {
        props.setDisplayEdit(false);
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
              props.setDisplayEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
