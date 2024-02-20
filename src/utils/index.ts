import moment from 'moment'
import 'moment/dist/locale/fr'

function getSecondMondayDate() {
  function getSecondMonday(startDate: Date) {
    const startOfMonth = moment(startDate)
      .utc()
      .startOf('month')
      .startOf('isoWeek')
    let studyDate = moment(startDate)
      .utc()
      .startOf('month')
      .startOf('isoWeek')
      .add(2, 'w')

    if (studyDate.month() == startOfMonth.month()) {
      studyDate = studyDate.subtract(1, 'w')
    }
    return moment(studyDate).format('YYYY-MM-DD')
  }
  let monday
  for (let i = 0; i < 20; i++) {
    const startOfMonth = moment().utc().subtract(i, 'M').format('YYYY-MM-DD')
    const secondMonday = getSecondMonday(new Date(startOfMonth))
    const secondMondayIsAfterToday = moment(new Date()).isAfter(
      secondMonday,
      'days'
    )
    if (secondMondayIsAfterToday) {
      const nextMonth = moment()
        .add(1, 'months')
        .startOf('month')
        .format('YYYY-MM-DD')
      monday = getSecondMonday(new Date(nextMonth))
    } else monday = secondMonday
  }
  return monday
}

export { getSecondMondayDate }
