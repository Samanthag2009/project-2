module.exports = {
    // Month + 1 bc Jan = 0, return MM/DD/YYYY
    format_date: (date) => {
      console.log(date)
      console.log(new Date(date))
      console.log(new Date(date).getMonth())
      console.log(new Date(date).getMonth() + 1)
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // format URL?

  };
  