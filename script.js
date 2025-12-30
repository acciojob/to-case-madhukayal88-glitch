function toCase(str) {
  // Acceptance Criteria: Handle empty strings by returning '-'
  if (str === '') {
    return '-';
  }

  // Convert the string to lowercase and uppercase
  const lower = str.toLowerCase();
  const upper = str.toUpperCase();

  // Return the formatted string with '-' as the delimiter
  return `${lower}-${upper}`;
}