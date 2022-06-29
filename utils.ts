export const shuffleArray = (array: string[]) => {

  for (let index = array.length - 1; index > 0; index--) {
    const index2 = Math.floor(Math.random() * (index + 1));
    [array[index], array[index2]] = [array[index2], array[index]];
  }

  return array;
};
