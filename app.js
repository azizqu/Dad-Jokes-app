const btn = document.querySelector('#btn');
const joke = document.querySelector('#joke');

const updateJoke = async () =>{
    joke.textContent = await getDadJoke();
}

const getDadJoke = async () =>{
    try{
        const config = {headers: {Accept:'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }
    catch (e){
        return e+' error establishing connection!'
    }
}

btn.addEventListener('click', updateJoke);