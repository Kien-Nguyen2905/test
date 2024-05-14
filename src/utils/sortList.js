export const sortList = (list) =>
  list.sort((a, b) => {
    if (a.completed === false && b.completed === true) {
      return -1;
    }
    if (a.completed === true && b.completed === false) {
      return 1;
    }
    return 0;
  });
