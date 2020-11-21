var today = moment()
let newDay = today.format('ddd DD-MMM-YYYY')
let todaysHour = moment(moment().toDate().getTime()).format(
  'ddd DD-MMM-YYYY, hh:mm A'
)
window.onload = function () {
  let currentDay = document.getElementById('currentDay')
  currentDay.innerHTML = moment(todaysHour).format('MMM-DD-YYYY')
  var allInputs = document.getElementsByClassName('text')
  var allTimeDivsId = document.getElementsByClassName('time-block')
  var allTimeDivs = document.getElementsByClassName('col hour')

  for (let i = 0; i < allInputs.length; i++) {
    $(allInputs[i]).val(localStorage[allInputs[i].name])
    // console.log('divs', allTimeDivsId[i])
    var amPm = allTimeDivs[i].innerHTML.includes('AM') ? 'AM' : 'PM'
    let scheduleTimeDate = moment(
      `${newDay}, ${allTimeDivsId[i].id}:00 ${amPm}`,
      'ddd DD-MMM-YYYY, hh:mm A'
    ).format('ddd DD-MMM-YYYY')
    let scheduleTimeHour = moment(
      `${newDay}, ${allTimeDivsId[i].id}:00 ${amPm}`,
      'ddd DD-MMM-YYYY, hh:mm A'
    ).format('hh:mm A')
    let oneTry = moment(
      moment(`${newDay}, ${allTimeDivsId[i].id}:00 ${amPm}`).toDate().getTime()
    ).format('ddd DD-MMM-YYYY, hh:mm A')
    let scheduleFullTime = oneTry
    // console.log('schedulfulltime', scheduleFullTime)
    // console.log('todayhour', todaysHour)
    // console.log('test', moment(todaysHour).isBefore(scheduleFullTime, 'hour'))

    if (moment(todaysHour).isBefore(scheduleFullTime, 'hour')) {
      //   console.log('bryan', allTimeDivsId[i])
      allTimeDivsId[i].setAttribute('class', 'time-block future')
    } else if (moment(todaysHour).isSame(scheduleFullTime, 'hour')) {
      allTimeDivsId[i].setAttribute('class', 'time-block present')
      //   console.log('preseent')
    }
    if (moment(todaysHour).isAfter(scheduleFullTime, 'hour')) {
      allTimeDivsId[i].setAttribute('class', 'time-block past')
      allInputs[i].setAttribute('disabled', true)
    }
  }
}
var timeDisplay = $('#currentDay')

function currentTime() {
  var today = moment()
  timeDisplay.text(today.format('MMM DD, YYYY [at] hh:mm:ss a'))
  var timeRightNow = today.hours()

  for (var i = 9; i <= 17; i++) {
    var hourEl = document.getElementById(i.toString())
    var id = parseInt(hourEl.id)

    // hourEl.classList.add('past')

    // less than, equal to or greater than
    if (id < timeRightNow) {
      hourEl.classList.add('past')
    }

    // console.log(id,timeRightNow)
  }
}
// currentTime()
var allInputs = document.getElementsByClassName('text')
var allButtons = document.getElementsByClassName('buttons')
for (let index = 0; index < allInputs.length; index++) {
  let eachInput = allInputs[index]
  let eachButton = allButtons[index]
  $(eachInput).change((event) => {
    let inputValue = event.target.value
    $(eachButton).click((event) => {
      event.preventDefault()
      $(eachInput).val(inputValue)
      localStorage.setItem(eachInput.name, inputValue)
      //   console.log('butt', i)
    })
  })
}

// console.log('text', text)
// var finalinput = ''
// console.log(inputs)
// var inputs = $()
// console.log(finalinput)
// localStorage.setItem();
