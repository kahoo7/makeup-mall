export function debounce(func, dalay=100) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args);
    }, dalay)
  }
}

export function formatTime(timeStamp) {
  let totalTime = new Date(+timeStamp);
  let obj = {
    years: totalTime.getFullYear(),
    months: totalTime.getMonth() + 1,
    date: totalTime.getDate(), 
  }
  return obj.years + '-' + obj.months + '-' + obj.date;
}