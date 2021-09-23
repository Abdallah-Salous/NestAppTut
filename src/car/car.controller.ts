import { Body, Delete, ParseIntPipe, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';
import { carDto } from './carDto';

@Controller('car')
export class CarController {

    constructor (private carservice: CarService) {}

    @Get()
   async getCars(){
        return this.carservice.getCars();
    }

    @Get(':id')
    async getCar(@Param('id') id){
        return this.carservice.getCarsById(id);
    }

    @Delete(':id')
    async deleteCarById(@Param('id', ParseIntPipe) id){
        return this.carservice.deleteCarById(id);

    }

    @Post()
    async postCar(@Body() car: carDto){
        console.log(car);
        return this.carservice.postCar(car);
    }

}
