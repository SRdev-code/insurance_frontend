const API_URL = "http://127.0.0.1:8000/api/policies/"

export const  fetchPolicies = async(filters={})=>{
    let res 
    if(Object.keys(filters).length > 0 ){
        const params = new URLSearchParams(filters).toString();
        res = await fetch(`${API_URL}?${params}`)
    }else{
        res = await fetch(`${API_URL}`)
    }
    

    if(!res.ok){
        throw new Error("Failed to get policies")
    }
    return res.json();
}