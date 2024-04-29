export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((val) => val.startsWith(startString));
  return filteredValues.map((val) => val.slice(startString.length)).join('-');
}
