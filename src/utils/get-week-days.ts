export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(year, month, day))))
    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
