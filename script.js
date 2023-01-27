const fetchData = async () => {
    const url = "http://localhost:3000/data";
    const response = await fetch(url);
    const dataFromServer = await response.json();
    console.log(dataFromServer)

}
fetchData();
console.log("Frontend Developer")