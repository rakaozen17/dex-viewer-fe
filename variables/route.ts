export interface Route {
    path: string;
    filePath: string;
  }
  
  const routes: Route[] = [
    {
      path: '/login',
      filePath: 'pages/LoginPage/LoginPage',
    },
    {
      path: '/',
      filePath: 'pages/HomePage/IndexPage',
    }
  ];
  
  export default routes;
  