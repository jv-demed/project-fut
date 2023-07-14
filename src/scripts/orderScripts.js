export function orderBy(list, asc, info){
    return [...list].sort((a, b) => {
        if(a[info].toString() < b[info].toString()){
            return asc*-1;
        }else if(a[info].toString() > b[info].toString()){
            return asc;
        }return 0;
    });
}