async function dataFecth() {
    await new Promise((resolve)=>setTimeout(resolve,2000));
    
    return{ stats : {
            user : "1000"
        }
}}


export default async function loadingExample(){
    const data = await dataFecth()
    return(
        <div className="p-4">Users :{data.stats.user}</div>
    )
}