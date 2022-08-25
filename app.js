// export let x=10;
// export let y=20;
//we can not export value from one file to another file 
//because node js does not allow export and import like other language

module.exports={
    x:10,
    y:20,
    //if we want make function
    z:function(){
        return 10;
    }
}