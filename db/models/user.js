'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  },
  {
    defaultScope: {
      attributes:{
        exclude: ["hashedPassword", "createdAt", "updatedAt"]
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ["hashedPassword"] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  User.associate = function(models) {
    User.hasMany(models.Book, { foreignKey: 'userId', as: 'book' });
    User.hasMany(models.Review, {foreignKey: 'userId'});
  };


  User.prototype.isValid = () => true;

  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.toSafeObject = function() {
    return {
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      username: this.username,
      updatedAt: this.updatedAt,
      tokenId: this.tokenId,
    };
  };

  User.prototype.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function(id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function({ username, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.getCurrentUserById(user.id);
    }
  };

  User.signup = async function({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      tokenId: null,
    });
    console.log(user)
    return await User.getCurrentUserById(user.id);
  };


  return User;
};
