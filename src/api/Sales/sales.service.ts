import { ISales } from './../../models/Sales';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from 'src/entities/sales.entity';
import { DetailsService } from '../Details/details.service';

@Injectable()
export class SalesService {
    constructor( @InjectRepository(Sales) private salesEntity : Repository< Sales >, 
    private detailsService : DetailsService ){
    }

    async create( sale : ISales ){
        const date = new Date();
        let total = 0;
        //aqui calculamos el total
        sale.details.forEach(item =>{
            total = total + ( item.quantity * item.unit_price )
        })
        const response = await this.salesEntity.save({
            id_user : sale.id_user,
            date : date,
            total
        })

        // Registro del detalle
        await this.detailsService.create_detail(response.id, sale.details)
    }

}
