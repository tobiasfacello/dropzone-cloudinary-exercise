import { sequelize } from "../db";
import { Model, DataTypes } from "sequelize-cockroachdb";

class Profile extends Model {}

Profile.init(
	{
		full_name: DataTypes.STRING,
		biography: DataTypes.STRING,
		picture_url: DataTypes.TEXT,
	},
	{ sequelize, modelName: "Profile" }
);

export { Profile };
