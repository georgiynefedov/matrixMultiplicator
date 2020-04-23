class Matrix {

    constructor(a, b, c, d) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        if (!isNaN(a)) this.a = a;
        if (!isNaN(b)) this.b = b;
        if (!isNaN(c)) this.c = c;
        if (!isNaN(d)) this.d = d;
    }

    multiplyWith(matrix2){
        let newA = this.a * matrix2.a + this.b * matrix2.c;
        let newB = this.a * matrix2.b + this.b * matrix2.d;
        let newC = this.c * matrix2.a + this.d * matrix2.c;
        let newD = this.c * matrix2.b + this.d * matrix2.d;
        return new Matrix(newA, newB, newC, newD);
    }
}

function calculate() {
    let matrix1 = new Matrix(
        document.getElementById("a11").value,
        document.getElementById("a12").value,
        document.getElementById("a21").value,
        document.getElementById("a22").value
    );

    let matrix2 = new Matrix(
        document.getElementById("b11").value,
        document.getElementById("b12").value,
        document.getElementById("b21").value,
        document.getElementById("b22").value
    );

    let res = matrix1.multiplyWith(matrix2);
    document.getElementById("result").innerHTML = res.a + '  ' + res.b + '<br>' + res.c + '  ' + res.d;
}