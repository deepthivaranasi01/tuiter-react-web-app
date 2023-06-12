import React from "react";
import { useDispatch } from "react-redux";
import { likeTuit, unlikeTuit } from "../../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitSummaryItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  const likeTuitHandler = (id) => {
    if (tuit.liked) {
      dispatch(unlikeTuit(id));
    } else {
      dispatch(likeTuit(id));
    }
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle user-image" height="48" width="70" src={`${tuit.image}`} />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            >
              <span fa-xmark>X</span>
            </i>
          </div>
          <div>
            <span className="fw-bolder">{tuit.userName}</span>{" "}
            <i className="fa fa-check-circle" style={{ color: "#0D6EFD" }}></i> {tuit.handle}. {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
        </div>
        <div className="col-2" style={{ marginLeft: 120 }}>
          <i className="fa fa-comment"></i>
          {tuit.replies}
        </div>
        <div className="col-2">
          <i className="fa fa-retweet"></i>
          &nbsp;{tuit.retuits}
        </div>
        <div className="col-2">
          {tuit.liked ? (
            <i
              className="fa fa-heart"
              style={{ color: "red" }}
              onClick={() => likeTuitHandler(tuit._id)}
            ></i>
          ) : (
            <i
              className="fa fa-heart"
              onClick={() => likeTuitHandler(tuit._id)}
            ></i>
          )}
          &nbsp;{tuit.likes}
        </div>
        <div className="col-3">
          <i className="fa fa-upload"></i>
        </div>
      </div>
    </li>
  );
};

export default TuitSummaryItem;
