const FormatDateHook = (isoString) => {
  // Convert date time stamp to custom format
  function getFormattedDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return ''; // Invalid date
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const formattedDate = getFormattedDate(isoString);
  return [formattedDate];
}

export default FormatDateHook;