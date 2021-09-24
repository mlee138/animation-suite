export function distance(x1, x2, y1, y2){
    const a = (x2 - x1)**2;
    const b = (y2 - y1)**2;
    return  Math.sqrt(a+b);
}