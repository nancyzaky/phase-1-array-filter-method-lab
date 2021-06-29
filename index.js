// Code your solution here
const findMatching = (arr, str) => {
  return arr.filter(item => item.toLowerCase() === str.toLowerCase())
}

const fuzzyMatch = (arr, str) => {
  const lengthStr = str.length
  return arr.filter(item => item.slice(0,lengthStr) === str);
}

const matchName = (arr, str) => {
  const result = arr.filter (obj => obj.name=== str)
  return result
}
