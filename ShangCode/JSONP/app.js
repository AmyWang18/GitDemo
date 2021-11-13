const data = {
    name: "Amy"
};

//console.log(data);

function handle(data){
    //get result
    const result = document.getElementById('result');
    result.innerHTML = data.name;
}

handle(data);