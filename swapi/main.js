const getResBtn = document.getElementById("get-residents")

function btnClicked (){
    axios.get('https://swapi.dev/api/planets/2/').then((res)=>{
        let residents = res.data.residents
        // console.log(residents)
    residents.forEach((element) =>
        axios.get(element).then((result)=>{
            // console.log(result.data.name)
            // let resName = result.data.name
            let h2 = document.createElement('h2')

            h2.textContent = result.data.name
            document.body.appendChild(h2)
        }))})}

getResBtn.addEventListener("click", btnClicked)