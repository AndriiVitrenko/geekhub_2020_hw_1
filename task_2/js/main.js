$('button').on('click', function() {
    //let output = $('#output');
    //let array = $('#array').value;
    //let array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
    //let array = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]
    //let array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
    const array = [7, 0, 1, 3, 4, 1, 2, 1];
    let water_level = 0;

    const platos = analyse(analyse(array));    
    
    for (let j = 0; j < platos.length - 1; j++) {
        const index0 = array.indexOf(platos[j])
        const index1 = array.indexOf(platos[j + 1], index0)
        
        for (let k = index0 + 1; index0 < k && k < index1; k++) {
            water_level += (Math.min(array[index0], array[index1]) - array[k])
        }
    }

    console.log(water_level)
})

function analyse(array) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if ((array[i] >= array[i - 1] && array[i] >= array[i + 1]) || (i === 0 && array[i] > array[i + 1]) || (i === array.length - 1 && array[i] > array[i - 1])) {
            result.push(array[i])
        }
    }

    if (result.length > 1) {
        return result
    }
    else {
        return array
    }
}