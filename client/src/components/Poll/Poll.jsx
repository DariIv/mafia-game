import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import {shuffleRoles} from '../../../../server/utils/game'


function RolesList(props) {

  // const { users } = useSelector(state => state.usersReducer)
  // const dispatch = useDispatch()

  const userArray = [{ user_name: 'Bob' }, { user_name: 'Kate' }, { user_name: 'Vladimir' }, { user_name: 'Vitaliy' }, { user_name: 'Yuriy' }]
  // const shuffle = shuffleRoles(userArray)
  const roles = assignRoles(userArray)
  // console.log(roles);

  function shuffleRoles(usersArray) {
    let counter = usersArray.length;

    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);

      counter--;

      const temp = usersArray[counter];
      usersArray[counter] = usersArray[index];
      usersArray[index] = temp;
    }
    return usersArray;
  }

  function assignRoles(shuffledIdArray) {
    const result = [];

    const totalMafia = Math.floor(shuffledIdArray.length / 2 - 1);

    for (let i = 0; i < totalMafia - 2; i++) {
      result[shuffledIdArray[i]] = {
        role: 'Мафия',
      };
    }
    result[shuffledIdArray[totalMafia]] = {
      role: 'Детектив',
    };
    result[shuffledIdArray[totalMafia + 1]] = {
      role: 'Доктор',
    };
    for (let j = totalMafia + 2; j < shuffledIdArray.length; j++) {
      result[shuffledIdArray[j]] = {
        role: 'Мирный житель',
      };
    }

    return result;
  }

  console.log(roles);
  console.log(userArray);

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_URL)
  //     .then(res => res.json())
  //     .then(data => dispatch({ type: 'INIT_USERS', payload: data }))
  // }, [dispatch])

  return (
    <>
      <h1>
        User List
      </h1>

      {userArray.length ? roles.map(user =>


        <div className="row" key={user.id}>

          <h1>{`${user.user_name}+${user.user_name}`}</h1>

        </div>

      ) : <div>No data!</div>}

    </>
  );
}

export default RolesList;