export function decodedValue([color1, color2]:string) {
  let array : string [] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  let colors:string[] = [color1,color2];
  let arraySalida: number [] = [];
  let numero!: number;
  let numeroString !: string;
  for (let color of colors){
    if (array.includes(color)){
      const indece = array.indexOf(color);
      arraySalida.push(indece);
    }
    else{
      return undefined;
    }
  }
  numeroString = arraySalida.join("")
  numero =  parseInt(numeroString);
  return numero;
}
