
const calcularfactorial = (n) =>{
    let  factorial = 1;
    if(n>0){
        for(let i = 1; i<=n;i++){
            factorial*=i
        }
    }
    return factorial;
}

const combinatoria  = (n,x) =>{
    let  combinatoria;
    if(typeof(n)=== String &&typeof(x)=== String){
        return "error"
    }
    if( n==x || x==0 ){
        combinatoria = 1;
    }else{
        if(n>x && x>0){
            let numerador = calcularfactorial(n)
            let denominador  = calcularfactorial(x)*calcularfactorial(n-x)
            combinatoria= numerador/denominador;
        }else if(x<0||n<0 || x>n){
            return "error"
        }
    }
    return combinatoria;
}
console.log(combinatoria(5,2))
test('combinatoria cuanto x mayor que n', () => {
  expect(combinatoria(5,8)).toBe('error');
});

test('combinatoria cuando x es negativo', () => {
    expect(combinatoria(5,-2)).toBe('error');
  });
  
test('combinatoriacuando n es negativo', () => {
    expect(combinatoria(-5,2)).toBe('error');
  });
  
test('combinatoria con x = 0 y n= 3', () => {
    expect(combinatoria(3,0)).toBe(1);
  });
  
test('combinatoria con x = 1 y n= 4', () => {
    expect(combinatoria(4,1)).toBe(4);
  });
  
test('combinatoria con x = 2 y n= 5', () => {
    expect(combinatoria(5,2)).toBe(10);
  });
  
test('combinatoria con x = 3 y n= 7', () => {
    expect(combinatoria(7,3)).toBe(35);
  });
  
test('conbinatoria con x=n', () => {
    expect(combinatoria(5,5)).toBe(1);
  });
  
test('combinatoria con xy v valores de cadena ', () => {
    expect(combinatoria('2','5')).toBe("error");
  });
  
test('combinatoria con x = 1 y n= 1', () => {
    expect(combinatoria(1,1)).toBe(1);
  });
