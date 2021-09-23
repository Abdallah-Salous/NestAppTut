import { HttpException, Injectable } from '@nestjs/common';
import { carDto } from './carDto';
import { Cars } from './carsmock';

@Injectable()
export class CarService {
    private cars =[];
    constructor(){
        this.cars = Cars;
    }
    getCars() {
        return Cars;
    }

    getCarsById(id: number){
        let car = this.cars.find((car) => car.id === id);
        if(!car) throw new HttpException('car does not exist', 404);
        return car;

    }

    
    deleteCarById(id: number){
        
        const index = this.cars.findIndex((car)=> parseInt(car.id) === id);
        console.log(index);
        if(index == -1) throw new HttpException('Not Found',404);
        this.cars.splice(index, 1);

        return this.cars;

    }

    postCar(car: carDto): carDto{
        this.cars.push(car);
        return car;

    }

    
}
