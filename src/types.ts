//I had originally had the ingredients in an array within the object.
//However, I couldn't find information on whether that was allowed or if the strings inside would be accessible,
//so I split it out into 5 ingredients with 2 through 5 being optional.
//I also wanted the notes property to be optional.
export type Recipe = {
    id: number | string,
    image: string,
    name: string,
    icon: string,
    ingredient1: string,
    ingredient2?: string,
    ingredient3?: string,
    ingredient4?: string,
    ingredient5?: string,
    description: string,
    optional: string,
    notes?: string
}