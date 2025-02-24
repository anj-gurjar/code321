import { Sequelize } from "sequelize";
const sequelize = new Sequelize('ecom', 'user', 'Admin', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5433
});
const start = async () => {
	try {

		await sequelize.sync({ force: false });
		console.log('Database synced successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}
start()
export default sequelize 