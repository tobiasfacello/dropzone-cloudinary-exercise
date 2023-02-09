import { sequelize } from "../db";
import { Profile } from "../models";
//* Se sincroniza con la DB, "alter: true" le indica a la misma que haga los cambios "afectando" lo menos posible a los demás datos.

async function sync() {
	await sequelize.sync({ force: true });
	// await Profile.sync({ force: true });
}

sync();
