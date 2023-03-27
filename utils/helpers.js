module.exports = {
    // Month + 1 bc Jan = 0, return MM/DD/YYYY
    get_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // format URL?

  };
  