export function debounce(func, dalay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args);
    }, dalay)
  }
}

export function formatTime(timeStamp) {
  timeStamp = timeStamp * 1000;
  let totalTime = new Date(+timeStamp);
  let obj = {
    years: totalTime.getFullYear(),
    months: totalTime.getMonth() + 1,
    date: totalTime.getDate(), 
  }
  return obj.years + '-' + obj.months + '-' + obj.date;
}