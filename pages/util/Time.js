export const convertTime = (date) => {
  const hour24 = date.getHours()
  const min = date.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const ampm = hour24 < 12 ? 'AM' : 'PM'
  let hours = hour24 < 13 ? hour24 : hour24 - 12
  if (hours === 0) hours = 12
  return `${hours}:${min} ${ampm}`
}

export const addMinutes = (date, minutes) =>
  new Date(date.getTime() + parseInt(minutes, 10) * 60000)
