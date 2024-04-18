export async function currentSessionToken() {
    let token = localStorage.getItem('token');
    if (token) {
        return {  "Content-Type": "multipart/form-data",'Access-Control-Allow-Origin' : '*','Authorization': `Bearer `+token };
    } else {
        return {  'Access-Control-Allow-Origin' : '*' };
    }
}