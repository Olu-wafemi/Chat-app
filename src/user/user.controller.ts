import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Userservice } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController{
    constructor(private readonly userService: Userservice){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }
    @Get('id')
    findById(@Param('id') id: string): Promise<User| undefined>{
        return this.userService.findById(Number(id));
    }

    @Post()
    create(@Body() user: Partial<User>): Promise<User>{
        return this.userService.create(user)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: Partial<User>  ): Promise<User| undefined>{
        return this.userService.update(Number(id), updateUser);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void>{
        return this.userService.delete(Number(id))
    }
}