const convertDate = (string:string) : string => {
    let date = new Date(string)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default convertDate