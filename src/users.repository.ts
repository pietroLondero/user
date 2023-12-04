import { Repository } from "typeorm";
import { User } from "./entities";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository extends Repository<User>{
}