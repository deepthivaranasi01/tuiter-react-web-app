import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);

 return(
  <div className="sidebar">
   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>          
       )
     }
   </ul>
   </div>
 );
};
export default WhoToFollowList;

