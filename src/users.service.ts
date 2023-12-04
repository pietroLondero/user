import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserParams } from './utils/types/types';
import { UsersRepository } from './users.repository';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository1: UsersRepository) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository1.findOne({ where: { username } });
    }

    async findAll(): Promise<User[]> {
        return this.userRepository1.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository1.create({ ...userDetails, createdAt: new Date() });
        return this.userRepository1.save(newUser);
    }
}