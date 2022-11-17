interface Food {
    id: number,
    name: string, 
    des: string,
    image: string,
    avgStar: number,
    recipt: string,
    calo: number | null,
    protein: number | null,
    fat: number | null,
    carb: number | null
}

interface Comment {
    username: string
    star: number,
    comment: string,
}

export {
    Food,
    Comment
}
