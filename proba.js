function calculateDifferentInDate(date){
  const difference =Math.floor ((new Date(date).getTime() - new Date().getTime())/1000/60/60/24);
  console.log(difference)
}



calculateDifferentInDate("Fri, 15 Jan 2021 22:18:00 GMT");
calculateDifferentInDate("Tue, 26 Jan 2021 20:00:00 GMT");