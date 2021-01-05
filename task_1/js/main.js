document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()

    let func = new Function('', `result(${document.getElementById('input').value})`)
    func()
})


function result (array) {
    let min = 0, max = 0, sum = 0;


    for (let i = 0; i < array.length; i++) {
        sum += array[i]

        if (array[i] > max) {
            max = array[i]
        }

        if (array[i] < min) {
            min = array[i]
        }
    }

    document.getElementById('max').innerHTML = max;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sum').innerHTML = sum;
}