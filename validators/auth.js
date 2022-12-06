const { check } = require("express-validator");

module.exports.validatePostAuth = () => {
  const validationMiddlewares = [
    check("name").notEmpty().withMessage("User name cannot be empty."),
    check("email").isEmail().withMessage("User email is invalid."),
    check("role").notEmpty().withMessage("User role cannot be empty."), // check for role options
  ];
  return validationMiddlewares;
};
