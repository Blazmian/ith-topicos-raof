import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { IDetails } from 'src/models/Sales';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {

    constructor( @InjectRepository(Details) private detailsEntity : Repository < Details >){

    }

    async create_detail(id_sales : number, details : IDetails[]) {
        details.forEach(element => {
            this.detailsEntity.insert({
                product : element.product,
                quantity : element.quantity,
                unit_price : element.unit_price,
                id_sales : id_sales
            })
        });
    }
 }