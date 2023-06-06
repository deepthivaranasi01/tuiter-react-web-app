import React from "react";
const TuitStat = (
    tuitstat = {"replies" : 123, "retuits" : 432, "likes" : 2345, "liked" : true}
) => {
    return (
    <div className="row mt-2">
    <div className="col-2" style= {{marginLeft:100}} >
        <i className='fa fa-comment'></i>
        {tuitstat.replies}
    </div>
    <div className="col-2">
        <i className='fa fa-retweet'></i>
        &nbsp;{tuitstat.retuits}
    </div>
    <div className="col-2">
    {tuitstat.liked ? <><i className="fa fa-heart" style = {{color:"red"}}></i></> : <><i className="fa fa-heart"></i></>}
          &nbsp;{tuitstat.likes}
    </div>
    <div className="col-3">
        <i className='fa fa-upload'></i>
    </div>
    
    </div>
    );
};

export default TuitStat;