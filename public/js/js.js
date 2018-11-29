function Plant(name,type,medicUse,age,height,area){
    this.name = name;
    this.age = age;
    this.height = height;
    this.area = area;
    this.medicUse = false;
    this.type = type;
    this.getName = getName;
    
    this.setAge = function (agePlant) {
        if (age < 0 )
            throw "Значение должно быть больше 0 ";
        this.age = agePlant;
    }
    this.getAge = function () {
        return this.age;
    }
    this.setSize = function (heightPlant) {
        if (height < 0 )
            throw "Значение должно быть больше 0 ";
        this.height = heightPlant;
    }
    this.getAge = function () {
        return this.height;
    }
}
function Fir(needleLength, sort){
    Plant.call(this);
    this.sort = sort;
    this.needleLength = needleLength;
    this.setNeedleLenght = function(lenght){
        if(lenght < 0)
            throw "Значение должно быть больше 0 ";
            this.needleLength = lenght;
    }
    this.getNeedleLenght = function(){
        return this.needleLength;
    }
}
function Fern(){
    Plant.call(this);
}

function getName(){
    return this.name;
}

var Plant = new Plant('вася','зеденый', 'колючконогие', 'широколистые', 'тайша');
Plant.setAge(80);

var h1 = document.getElementById('h1');

