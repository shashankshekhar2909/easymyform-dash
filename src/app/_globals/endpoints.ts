const ENDPOINTS: any = {
  users: {
    signIn: '/user/login',
    signUp: '/user/register',
    logout:'/user/logout',
    userInfo:'/user/user-info',
  },
  jobs:{
    postJobFeed:'/job/job-feeds ',

  },
  cv:{
    postCV:'/cv/cv-form',
    getCV:'/cv/cv-form-filtered'
  }
};

export { ENDPOINTS };
