module.exports = {


    friendlyName: 'View homepage or redirect',
  
  
    description: 'Display homepage for entry into site.',
  
  
    exits: {
  
      success: {
        statusCode: 200,
        description: 'Requesting user to click entry button, show public landing page.',
        viewTemplatePath: 'pages/homepage'
      },
  
      redirect: {
        responseType: 'redirect',
        description: 'Requesting user has entered sit, redirect to the internal controller page.'
      },
  
    },
  
  
    fn: async function () {
  
      if (this.req.me) {
        throw {redirect:'/welcome'};
      }
  
      return {};
  
    }
  
  
  };
  