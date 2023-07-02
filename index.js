const http=require('http');
const PORT=3040;
const HOSTNAME='localhost';
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.setHeader('Content-type','text/plain');
        res.end('welcome to men and women dummy data');

    }
    else if(req.url=='/men'){
        const menProducts=generateDummyData(10,'men');
        res.setHeader('Content-type','application/json');
        res.end(JSON.stringify(menProducts));
    }
    else if(req.url=='/women'){
        const womenProducts=generateDummyData(10,'women');
        res.setHeader('Content-type','application/json');
        res.end(JSON.stringify(womenProducts));
    }
    else{
        res.statusCode=404;
        res.setHeader('Content-type','text/plain');
        res.end('Page not found');
    }
});

function generateDummyData(count,category){
    const products=[];
    for(let i=1;i<=count;i++){
        products.push({id:i,name:'Product ${1}',category});

    }
    return products;
}
server.listen(PORT,()=>{
    console.log("server is running at ${HOSTNAME}:${PORT}");
})