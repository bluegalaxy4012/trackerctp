export function bussesSort(a: string, b: string): number {
  const aNumOnly = a.replace(/[^\d]+$/, '')
  const bNumOnly = b.replace(/[^\d]+$/, '')

  const numA = Number(aNumOnly);
  const numB = Number(bNumOnly);

  if(numA == numB)
  {
    if(aNumOnly != a) return 1;
    if(bNumOnly != b) return -1;
  }
  return numA - numB;
}

export function GetPixelPositionOffset(width: number, height: number) {
  return {
    x: -(width / 2),
    y: -(height / 2)
  };
}
