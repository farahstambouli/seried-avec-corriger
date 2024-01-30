//exercice2(moi)(juste)
function puissance(x,n){
for(var i=1;i<=n;i+=1){
    var res
    res=x**i
}
return res

}


//exercice3(juste)

function egalite(a,b){
    for(var i=0;i<a.length;i+=1){
        for(var j=0;j<b.length;j+=1)

        if(a[i]==b[j] && (a.length==b.length)){
            //i fait faire la comparaison entre position et position; et il faut qu'ils ont la memes longeurs
    
            return "vrai"
        }
        else {
            return "faux"
        }
    }
}

//exercice 4

function afficher(x){
    for(x%2==0){
        var aff 
        aff="pair"
    }
    else {
        aff="impair"
    }
    return aff
}


//exercice 5
function cherche(a,array){
    var somma
    var i=0
    while(i<array.length;i+=1)
    if(array[i]=a){
        somma=somma+array[i]
    }
}

//exercice 6
function combien(array){
    var i=0
    var sommep
    var sommeImp
    while(i<array.length[10] ; i+=1){
        if(array[i]2%==0){
            sommep=sommep+array[i]
        }
        else{
            sommeImp=sommeImp+array[i]
        }

    }
    var aff
    aff=("le nembre d'element pair est"sommep,"le nembre d'element impaire est"sommeImp) 
}

//exercice7
