function useDateFormatter(date) {

const newDate = new Date(date);

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
};

const formatter = new Intl.DateTimeFormat('en-US', options);
const formattedDate = formatter.format(newDate);

return [formattedDate];

}

export default useDateFormatter
