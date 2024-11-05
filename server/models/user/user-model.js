import { DataTypes } from 'sequelize';

const UserModel = (sequelize) => {
    return sequelize.define(
        'UserModel',
        {
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isActivated: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            activationLink: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
            tableName: 'users',
        },
    );
};

export default UserModel;
