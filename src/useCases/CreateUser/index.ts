import { CreateUserController } from './CreateUserController';
import { CreateUser } from './CreateUser';
import { PostgresUerRepository } from './../../repositories/implementations/PostgresUserRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';

const mailtrapMailProvider = new MailTrapMailProvider();
const postgreUserRepository = new PostgresUerRepository();

const createUser = new CreateUser(
	postgreUserRepository,
	mailtrapMailProvider
)

const createUserController = new CreateUserController(
	createUser
)

export { createUser, createUserController }