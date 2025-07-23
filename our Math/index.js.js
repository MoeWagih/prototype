const n=30;
for(let i = 2 ; i< n ; i++ )
{
    let isprime=true;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            isprime=false;
            break;
        }
    }
    if(isprime==true)
        console.log(i);
}