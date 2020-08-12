function average (array){
    
    const sumatory = array.reduce((sum, value) => {
        return sum + value
    })

    const averageData = sumatory/(array.length)
    
    return averageData
}

function averageResponse (req, res){
    const {data} = req.body

    const averageData = average(data)

    res.json({
        average: averageData
    }).status(200)
}

module.exports = {
    averageResponse,
    average
}