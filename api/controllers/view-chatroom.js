module.exports = {


  friendlyName: 'View chatroom',


  description: 'Display "Chatroom" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/chatroom'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
