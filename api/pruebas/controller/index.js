async function promedio (req, res){
    const {data} = req.body

    const sumatory = data.reduce((sum, value) => {
        return sum + value
    })

    
}