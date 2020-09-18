import { MailProvider } from './../../providers/MailProvider';
import { User } from './../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UserRepository } from './../../repositories/UserRepository';

export class CreateUser {

	constructor(
		private userRepository: UserRepository,
		private mailProvider: MailProvider
	){}

	async execute(data: CreateUserRequestDTO) {
		const userAlreadyExists = await	this.userRepository.findByEmail(data.email);

		if(userAlreadyExists) {
			throw new Error("User already exists.");
		}

		const user = new User(data);

		await this.userRepository.save(user);

		this.mailProvider.sendMail({
			to: {
				name: data.name,
				email: data.email
			},
			from: {
				name: 'Equipe do App FCC',
				email: 'equipe@app.com'
			},
			subject: 'Bem vindo ao sistema',
			body: '<p>Você já pode realizar o login</p>'
		})
	}
}