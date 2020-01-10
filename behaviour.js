function megasena()
{
    numero = 0;
    dezenas = [];    
    
    document.getElementById('lbl06').style.visibility = 'visible';
    document.getElementById('inp06').style.visibility = 'visible';

    for (i=0; dezenas.length < 6; i++)
    {
        while ((dezenas.indexOf(numero) !== -1) || (numero == 0))
        {
            numero = Math.floor(Math.random() * (60 - 1 + 1)) + 1;            
            if ((numero.toString().length) === 1) { numero = '0' + numero.toString();}                           
        }    
        
        dezenas[i] = numero;
        document.getElementById('inp0'+ (i + 1).toString() ).value = numero;
    }    
}