export default function iterateThroughObject(reportWithIterator) {
  if (!reportWithIterator) {
    console.log('Placeholder');
    return;
  }

  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  // Remove the trailing ' | ' from the result
  console.log(result.slice(0, -3));
}
