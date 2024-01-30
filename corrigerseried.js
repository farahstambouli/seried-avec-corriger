//exercice1
function tab(array){
    var sommeP=0, sommeImp=0, diff=0
    for(var i=0;i<array.length;i+=1){
        if(array[i]%2==0){
            //sommeP+=array[i]
            sommeP=sommeP+array[i]
        }else{
            sommeImp+=array[i]
        }
        diff=sommeP-sommeImp
    }
    return diff

}
//autre methode
// while
 
function whTest(array){
    var sommeP=0, sommeImp=0, diff=0
    var i=0
    while(i<array.length){
        if(array[i]%2==0){
            //sommeP+=array[i]
            sommeP=sommeP+array[i]
        }else{
            sommeImp+=array[i]
        }
        diff=sommeP-sommeImp
        i++

    }
    if(diff>0){
        return diff
    }else{
        return diff*(-1)
    }

}

//Do while
function dotest(array){
    var sommeP=0, sommeImp=0, diff=0
    var i=0
    do{
        if(array[i]%2==0){
            //sommeP+=array[i]
            sommeP=sommeP+array[i]
        }else{
            sommeImp+=array[i]
        }
        diff=sommeP-sommeImp
        i++
    }while(i<array.length)
    return diff

}
//exercice2
//autre methode(madame)(ta methode est juste)
function power(x,n){
    var i=1
    var res
    while(i<=n){
        res=x**i
        i++
    }
    return res
}
function print(n){

    var i=1
    while(i<=n){
        console.log("bonjour")
        i++
    }
} 
//exercice3(moi)
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