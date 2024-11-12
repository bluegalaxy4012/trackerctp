export function numericSort(a: string, b: string): number {
    const numA = Number(a);
    const numB = Number(b);
    return numA - numB;
}