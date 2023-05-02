export interface Author{
  id: string,
  name:string
  description: string
}
export interface Book{
  id: string,
  image: string ,
  title: string,
  author: Author,
  genre:string,
  description : string,
  likes : number,
  cost : number
}
