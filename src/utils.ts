const generateUniqueKey = (pre: string) => `${pre}_${new Date().getTime()}`

export default generateUniqueKey
