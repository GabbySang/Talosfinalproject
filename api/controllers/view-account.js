module.exports = {


  friendlyName: 'View account',


  description: 'Display "Account" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
