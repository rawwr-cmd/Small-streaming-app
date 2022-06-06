import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStream } from "../../actions";
import { useDispatch } from "react-redux";

const StreamEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [dispatch, id]);

  const stream = useSelector((state) => state.streams[id]);
  // console.log(stream);

  const streamDetails = () => {
    if (!stream) {
      return <div>Loadings..</div>;
    }
    return (
      <div>
        <div>{stream.title}</div>
      </div>
    );
  };

  return <div className="ui relaxed divided list">{streamDetails()}</div>;
};
export default StreamEdit;
