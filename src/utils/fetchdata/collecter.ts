import { fetcher } from "./fetcher"
import { readFetchList,writeNasaData } from "./nasaData"
import {EXPIRE_DATA_FETCH } from "../../config"

// I Write Collecter To Fetch Data And Renew The Data Exists Every Custom Period Needed To Set On .env or config

const collecter=async()=>{
    let nextTime=Date.now()+parseInt(EXPIRE_DATA_FETCH as string)
    setTimeout(collecter,parseInt(EXPIRE_DATA_FETCH as string));
    writeNasaData(await fetcher(readFetchList() )) ;
    console.log(`\n\n[+] Nasa Data Fetched Successfully At : ${(new Date()).toLocaleString()}\n[+] Next Fetch Will be After${(new Date(nextTime)).toLocaleString()}`)
}

export{collecter}


