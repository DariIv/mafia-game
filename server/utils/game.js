// функция для перемешивания ролей. usersArray - массив

function shuffleRoles(usersArray) {
  let counter = usersArray.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = usersArray[counter];
    usersArray[counter] = usersArray[index];
    usersArray[index] = temp;
  }

  return usersArray;
}

function assignRoles(shuffledIdArray) {
  let result = {};

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

// мафия - массив
function whomSendBack(killed, saved) {
  return killed == saved
    ? {
        saved
      }
    : {
        killed
      };
}

module.exports = {
  shuffleRoles,
  assignRoles,
  whomSendBack,
};
