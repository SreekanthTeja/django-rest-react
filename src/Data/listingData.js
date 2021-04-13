import React from "react";
const DataList = ({user,deleteUsers}) => {
  // console.log(users);

  // console.log(data);
  const userList = user.map(d => {
    return(
      <div className="collection-item" key={d.id}>
        <span onClick={() => {deleteUsers(d.id)}}>{d.content}</span>
      </div>
    )
  })
  return(
    <div className="collection">
      {userList}
    </div>
  )
}
export default DataList;
