class Card {
    name ="";
    description = "";
    img="";

constructor(name, description, img){
    this.name = name;
    this.description = description;
    this.img = img;
}

getName(){
    return this.name;
}

getDescription(){
    return this.description;
}

getImg(){
    return this.img;
}

}