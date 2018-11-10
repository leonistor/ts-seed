
export const cifreComune = (a:number, b: number): boolean => {
  let aa = a.toString().split(''), bb = b.toString();

  for (let i = 0; i < aa.length; i++) {
    const c = aa[i];
    if (bb.indexOf(c) >= 0) {
      return true;
    }
  }
  return false;
}

export const patratCub = (n: number): number[] => {
  let rezultat: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!cifreComune(i * i, i * i * i)) {
      rezultat.push(i);
    }
  }
  return rezultat;
}

console.log(patratCub(500));

