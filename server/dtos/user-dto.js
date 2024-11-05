export const userDto = (model) => {
    return {
        id: model.id,
        email: model.email,
        isActivated: model.isActivated,
    };
};
