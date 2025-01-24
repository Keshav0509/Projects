export const shuffleArray = (array: any[])=>{
  return [...array].sort(()=>Math.random() - 0.5);
}
export const padZero = (num: number) =>{
  return num < 10 ? `0${num}`: num ;
}