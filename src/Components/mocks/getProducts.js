const products=[
    {
        id:0,
        img: 'http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN',
        name:'RUTINI',
        price:3400, 
        descripcion:'Dominio Malbec',
        stock:3
    },
    {
        id:1,
        img:'http://drive.google.com/uc?export=view&id=11lt-y-3IvuOktIG8ikI62JReNh4S9ciZ',
        name:'Trumpeter',
        price:2300, 
        descripcion:'Malbec',
        stock:5
    },
    {
        id:2,
        img: 'http://drive.google.com/uc?export=view&id=1_BHlmNl_yQ4h0NwyNqMCHJYnb72PqoFB',
        name:'PORTILLO',
        price:3200, 
        descripcion:'Malbec',
        stock:8
    },
    {
        id:3,
        img: 'http://drive.google.com/uc?export=view&id=1_E3DNOULO0YLIxZxGsd-gzBCAuRHg8xT',
        name:'RUTINI MALBEC',
        price:5400, 
        descripcion:'Dominio Malbec',
        stock:0
    },
    {
        id:4,
        img: 'http://drive.google.com/uc?export=view&id=1PDDSgFIf15tpbFiFHgxxiNQTcvGKACdz',
        name:'LUIGI BOSCA',
        price:5400, 
        descripcion:'Malbec',
        stock:3
    },
    {
        id:5,
        img: 'http://drive.google.com/uc?export=view&id=1RWo3So9HteOYHE47hvAkPvAz8M4dGnrW',
        name:'LUIGI BOSCA CHANDONNAY',
        price:4300, 
        descripcion:'CHANDONNAY',
        stock:3
    },
    {
        id:6,
        img: 'http://drive.google.com/uc?export=view&id=1zVspbccGYIWC78TJvjlJSSj6DuExmWVp',
        name:'ESTANCIA MENDOZA',
        price:1500, 
        descripcion:'MALBEC',
        stock:3
    },
    {
        id:7,
        img: 'http://drive.google.com/uc?export=view&id=1_kk-C0_MNdSoIuNbZLmzOysiEyIFXNu7',
        name:'ZUCARDI',
        price:3400, 
        descripcion:'Malbec',
        stock:3
    },
    {
        id:8,
        img: 'http://drive.google.com/uc?export=view&id=1vAcvNZj5rEVxExEiLoCjGhx_B0AXk0NI',
        name:'ZUCARDI',
        price:3800, 
        descripcion:'Malbec',
        stock:9
    },
]    
export function getProducts () {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}