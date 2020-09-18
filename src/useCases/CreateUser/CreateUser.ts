import { User } from './../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UserRepository } from './../../repositories/UserRepository';

export class CreateUser {

	constructor(
		private userRepository: UserRepository
	){}

	async execute(data: CreateUserRequestDTO) {
		const userAlreadyExists = await	this.userRepository.findByEmail(data.email);

		if(userAlreadyExists) {
			throw new Error("User already exists.");
		}

		const user = new User(data);

		await this.userRepository.save(user);
	}
}