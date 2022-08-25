const dbConnect= require('./mongodb1');
const insert=async ()=>{
    const db=await dbConnect();
    const result= await db.insert([
          //for inserting multiple  data use array
        {
        name:'mobile',
        brand:'realme1',
        price:1200,
        category:'2 mobile'},
        {
            name:'mobile',
            brand:'realme2',
            price:13000,
            category:'1mobile'},
            {
                name:'mobile',
                brand:'realme3',
                price:14000,
                category:'1 mobile'},

]
    
    );
 //console.log(result);
 //checking data inserted or not

 if(result.acknowledged)
 {
console.log("data inserted");
 }
}
insert();