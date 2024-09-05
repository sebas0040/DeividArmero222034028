const miVehiculo: tipoVehiculo = {
    tipo:'',
    marca: '',
    modelo: '',
    cilindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo(){
    
        console.log(`El vehiculo arranco con un motor de ${this.cilindraje} cc`)
        
    },
};

const miSegundoVehiculo: cEspeciales = {
    velocidad: 200,
    suspencion: false,
    agregarSuspension(){
        if (this.suspencion === true){
            console.log('Tu vehiculo tine suspensión')
        }else{
            console.log('Tu vehiculo no tiene suspesión')
        }
    }


}

const miTecerVehiculo: testArray = {
    modelos: [],
    caracteristicasArray: [
        ["azul","verde"],
        ["Rin 15","rin 17"],
        ["2 puertas","4 puertas"]
    ]
    
};

interface tipoVehiculo{
    tipo: string,
    marca: string,
    modelo: string,
    cilindraje: number,
    numPuertas: number,
    arrancarVehiculo(): void,

};

interface cEspeciales {
    velocidad: number,
    suspencion:boolean,
    agregarSuspension(): void
};

interface testArray{
    modelos: number[],
    caracteristicasArray: Array<string[]>
}



// Imprime el valor del objeto miVehiculo, emplea la notación ({ objeto })
console.log(miVehiculo);

//- Invoca al método arrancarVehiculo usando el objeto correspondiente. Asegúrate de que su valor se vea en consola
miVehiculo.arrancarVehiculo(); 

//- Invoca al método agregarSuspension usando el objeto correspondiente. Asegúrate de que su valor se vea en consola
miSegundoVehiculo.agregarSuspension();

//- Imprime el valor del objeto miOtroVehiculo.


//- Imprime el valor del objeto miTercerVechiculo. Emplea la notación ({ objeto })
console.log(miTecerVehiculo);

//- Imprime un índice especifico del objeto miTercerObjeto, accede a la propiedad empleando la notación caracteristicasArray[ ][ ] obtén en la impresión de consola los valores: azul.
console.log(miTecerVehiculo.caracteristicasArray[1][1]);

//- De igual forma imprime un índice especifico del objeto miTercerObjeto, pero esta vez imprime en consola: 4 puertas
console.log(miTecerVehiculo.caracteristicasArray[2][1]);

//Impresión de todos los valores de cada subarray
// - Como se imprimiría verde, rin 17 y 4 puertas recorriendo los índices? Emplea la sintaxis:


// - Define let index = 0 cuál fue el resultado generado en consola?
// RESULTADO azul, Rin 15, 2 puertas
let index: number =  0
miTecerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]) 
});

// - Define let index = 0 cuál fue el resultado generado en consola?
// RESULTADO verde, Rin 17, 4 puertas
index = 1
miTecerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]) 
});


//15:22