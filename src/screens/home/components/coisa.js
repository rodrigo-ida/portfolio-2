const coisa = [
    
        {
            "startingPoint": 0,
            "endingPoint": 3.3333333333333335
        },
        {
            "startingPoint": 3.3333333333333335,
            "endingPoint": 6.666666666666667
        },
        {
            "startingPoint": 6.666666666666667,
            "endingPoint": 10
        },
        {
            "startingPoint": 10,
            "endingPoint": 13.333333333333334
        },
        {
            "startingPoint": 13.333333333333334,
            "endingPoint": 16.666666666666668
        },
        {
            "startingPoint": 16.666666666666668,
            "endingPoint": 20
        },
        {
            "startingPoint": 20,
            "endingPoint": 23.333333333333336
        },
        {
            "startingPoint": 23.333333333333336,
            "endingPoint": 26.666666666666668
        },
        {
            "startingPoint": 26.666666666666668,
            "endingPoint": 30
        },
        {
            "startingPoint": 30,
            "endingPoint": 33.333333333333336
        },
        {
            "startingPoint": 33.333333333333336,
            "endingPoint": 36.66666666666667
        },
        {
            "startingPoint": 36.66666666666667,
            "endingPoint": 40
        },
        {
            "startingPoint": 40,
            "endingPoint": 43.333333333333336
        },
        {
            "startingPoint": 43.333333333333336,
            "endingPoint": 46.66666666666667
        },
        {
            "startingPoint": 46.66666666666667,
            "endingPoint": 50
        },
        {
            "startingPoint": 50,
            "endingPoint": 53.333333333333336
        },
        {
            "startingPoint": 53.333333333333336,
            "endingPoint": 56.66666666666667
        },
        {
            "startingPoint": 56.66666666666667,
            "endingPoint": 60
        },
        {
            "startingPoint": 60,
            "endingPoint": 63.333333333333336
        },
        {
            "startingPoint": 63.333333333333336,
            "endingPoint": 66.66666666666667
        },
        {
            "startingPoint": 66.66666666666667,
            "endingPoint": 70
        },
        {
            "startingPoint": 70,
            "endingPoint": 73.33333333333334
        },
        {
            "startingPoint": 73.33333333333334,
            "endingPoint": 76.66666666666667
        },
        {
            "startingPoint": 76.66666666666667,
            "endingPoint": 80
        },
        {
            "startingPoint": 80,
            "endingPoint": 83.33333333333334
        },
        {
            "startingPoint": 83.33333333333334,
            "endingPoint": 86.66666666666667
        },
        {
            "startingPoint": 86.66666666666667,
            "endingPoint": 90
        },
        {
            "startingPoint": 90,
            "endingPoint": 93.33333333333334
        },
        {
            "startingPoint": 93.33333333333334,
            "endingPoint": 96.66666666666667
        },
        {
            "startingPoint": 96.66666666666667,
            "endingPoint": 100
        },
        {
            "startingPoint": 100,
            "endingPoint": 120
        }
    

]


const comoDeveSerInicial = () => {

    const coisa3 = coisa.map( (e, i, arr ) => {

        const bi = e.startingPoint
        const bf = e.endingPoint
        const ti = e.endingPoint
        const tf = e.endingPoint


        return {
            bi, bf, ti, tf
        }
    })
    return coisa3
}

const final = (inicial) => {

    // BI = nao muda 
    // BF = subtrai ficando z
    // TI = subtrai ficando = BF 
    // TF = nao muda

    const final = inicial.map((e,i,arr) => {

        const valueToAdd = 5

        const bi = e.bi
        const bf = e.bf - valueToAdd
        const ti = bf
        const tf = e.tf

        return {
            bi, bf, ti, tf
        }
    })
    return final


}



console.log('iniciallll',comoDeveSerInicial())
// console.log(final(comoDeveSerInicial()))


// const valores crus = [
    //     {
    //         "startingPoint": 0,
    //         "endingPoint": 3.3333333333333335
    //     },
    //     {
    //         "startingPoint": 3.3333333333333335,
    //         "endingPoint": 6.666666666666667
    //     },
    //     {
    //         "startingPoint": 6.666666666666667,
    //         "endingPoint": 10
    //     },
    //     {
    //         "startingPoint": 10,
    //         "endingPoint": 13.333333333333334
    //     },
    //     {
    //         "startingPoint": 13.333333333333334,
    //         "endingPoint": 16.666666666666668
    //     },
    //     {
    //         "startingPoint": 16.666666666666668,
    //         "endingPoint": 20
    //     },
    //     {
    //         "startingPoint": 20,
    //         "endingPoint": 23.333333333333336
    //     },
    //     {
    //         "startingPoint": 23.333333333333336,
    //         "endingPoint": 26.666666666666668
    //     },
    //     {
    //         "startingPoint": 26.666666666666668,
    //         "endingPoint": 30
    //     },
    //     {
    //         "startingPoint": 30,
    //         "endingPoint": 33.333333333333336
    //     },
    //     {
    //         "startingPoint": 33.333333333333336,
    //         "endingPoint": 36.66666666666667
    //     },
    //     {
    //         "startingPoint": 36.66666666666667,
    //         "endingPoint": 40
    //     },
    //     {
    //         "startingPoint": 40,
    //         "endingPoint": 43.333333333333336
    //     },
    //     {
    //         "startingPoint": 43.333333333333336,
    //         "endingPoint": 46.66666666666667
    //     },
    //     {
    //         "startingPoint": 46.66666666666667,
    //         "endingPoint": 50
    //     },
    //     {
    //         "startingPoint": 50,
    //         "endingPoint": 53.333333333333336
    //     },
    //     {
    //         "startingPoint": 53.333333333333336,
    //         "endingPoint": 56.66666666666667
    //     },
    //     {
    //         "startingPoint": 56.66666666666667,
    //         "endingPoint": 60
    //     },
    //     {
    //         "startingPoint": 60,
    //         "endingPoint": 63.333333333333336
    //     },
    //     {
    //         "startingPoint": 63.333333333333336,
    //         "endingPoint": 66.66666666666667
    //     },
    //     {
    //         "startingPoint": 66.66666666666667,
    //         "endingPoint": 70
    //     },
    //     {
    //         "startingPoint": 70,
    //         "endingPoint": 73.33333333333334
    //     },
    //     {
    //         "startingPoint": 73.33333333333334,
    //         "endingPoint": 76.66666666666667
    //     },
    //     {
    //         "startingPoint": 76.66666666666667,
    //         "endingPoint": 80
    //     },
    //     {
    //         "startingPoint": 80,
    //         "endingPoint": 83.33333333333334
    //     },
    //     {
    //         "startingPoint": 83.33333333333334,
    //         "endingPoint": 86.66666666666667
    //     },
    //     {
    //         "startingPoint": 86.66666666666667,
    //         "endingPoint": 90
    //     },
    //     {
    //         "startingPoint": 90,
    //         "endingPoint": 93.33333333333334
    //     },
    //     {
    //         "startingPoint": 93.33333333333334,
    //         "endingPoint": 96.66666666666667
    //     },
    //     {
    //         "startingPoint": 96.66666666666667,
    //         "endingPoint": 100
    //     },
    //     {
    //         "startingPoint": 100,
    //         "endingPoint": 120
    //     }
    // ]



const valoresAjeitados = [
    {
      bi: 0,
      bf: 3.3333333333333335,
      ti: 3.3333333333333335,
      tf: 3.3333333333333335 
    },
    {
      bi: 3.3333333333333335,
      bf: 6.666666666666667,
      ti: 6.666666666666667,
      tf: 6.666666666666667
    },
    { bi: 6.666666666666667, bf: 10, ti: 10, tf: 10 },
    {
      bi: 10,
      bf: 13.333333333333334,
      ti: 13.333333333333334,
      tf: 13.333333333333334
    },
    {
      bi: 13.333333333333334,
      bf: 16.666666666666668,
      ti: 16.666666666666668,
      tf: 16.666666666666668
    },
    { bi: 16.666666666666668, bf: 20, ti: 20, tf: 20 },
    {
      bi: 20,
      bf: 23.333333333333336,
      ti: 23.333333333333336,
      tf: 23.333333333333336
    },
    {
      bi: 23.333333333333336,
      bf: 26.666666666666668,
      ti: 26.666666666666668,
      tf: 26.666666666666668
    },
    { bi: 26.666666666666668, bf: 30, ti: 30, tf: 30 },
    {
      bi: 30,
      bf: 33.333333333333336,
      ti: 33.333333333333336,
      tf: 33.333333333333336
    },
    {
      bi: 33.333333333333336,
      bf: 36.66666666666667,
      ti: 36.66666666666667,
      tf: 36.66666666666667
    },
    { bi: 36.66666666666667, bf: 40, ti: 40, tf: 40 },
    {
      bi: 40,
      bf: 43.333333333333336,
      ti: 43.333333333333336,
      tf: 43.333333333333336
    },
    {
      bi: 43.333333333333336,
      bf: 46.66666666666667,
      ti: 46.66666666666667,
      tf: 46.66666666666667
    },
    { bi: 46.66666666666667, bf: 50, ti: 50, tf: 50 },
    {
      bi: 50,
      bf: 53.333333333333336,
      ti: 53.333333333333336,
      tf: 53.333333333333336
    },
    {
      bi: 53.333333333333336,
      bf: 56.66666666666667,
      ti: 56.66666666666667,
      tf: 56.66666666666667
    },
    { bi: 56.66666666666667, bf: 60, ti: 60, tf: 60 },
    {
      bi: 60,
      bf: 63.333333333333336,
      ti: 63.333333333333336,
      tf: 63.333333333333336
    },
    {
      bi: 63.333333333333336,
      bf: 66.66666666666667,
      ti: 66.66666666666667,
      tf: 66.66666666666667
    },
    { bi: 66.66666666666667, bf: 70, ti: 70, tf: 70 },
    {
      bi: 70,
      bf: 73.33333333333334,
      ti: 73.33333333333334,
      tf: 73.33333333333334
    },
    {
      bi: 73.33333333333334,
      bf: 76.66666666666667,
      ti: 76.66666666666667,
      tf: 76.66666666666667
    },
    { bi: 76.66666666666667, bf: 80, ti: 80, tf: 80 },
    {
      bi: 80,
      bf: 83.33333333333334,
      ti: 83.33333333333334,
      tf: 83.33333333333334
    },
    {
      bi: 83.33333333333334,
      bf: 86.66666666666667,
      ti: 86.66666666666667,
      tf: 86.66666666666667
    },
    { bi: 86.66666666666667, bf: 90, ti: 90, tf: 90 },
    {
      bi: 90,
      bf: 93.33333333333334,
      ti: 93.33333333333334,
      tf: 93.33333333333334
    },
    {
      bi: 93.33333333333334,
      bf: 96.66666666666667,
      ti: 96.66666666666667,
      tf: 96.66666666666667
    },
    { bi: 96.66666666666667, bf: 100, ti: 100, tf: 100 },
    { bi: 100, bf: 120, ti: 120, tf: 120 }
  ]






0,
200,
400,
600,
800,
1000,
1200,
1400,
1600,
1800,
2000,
2200,
2400,
2600,
2800,
3000,
3200,
3400,
3600,
3800,
4000,
4200,
4400,
4600,
4800,
5000,
5200,
5400,
5600,
5800,
6000