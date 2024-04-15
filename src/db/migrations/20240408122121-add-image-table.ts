import { type QueryInterface, DataTypes, Sequelize } from "sequelize";

/** @type {import("sequelize-cli").Migration} */

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      queryInterface
        .createTable("images", {
          id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },
          file_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          file_path: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          mine_type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          original_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          size: {
            type: DataTypes.INTEGER,
          },
          created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
