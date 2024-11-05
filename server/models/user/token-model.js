import { DataTypes } from 'sequelize';

const RefreshTokenModel = (sequelize, User) => {
    const RefreshToken = sequelize.define(
        'RefreshToken',
        {
            refreshToken: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
            tableName: 'refresh_tokens',
        },
    );

    // Определяем связь между RefreshToken и User
    RefreshToken.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
    });

    return RefreshToken;
};

export default RefreshTokenModel;
