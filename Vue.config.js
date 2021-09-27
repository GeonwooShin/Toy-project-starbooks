module.exports = {
  chainWebpack: config => {
  config.plugins.delete('prefetch'); // prefetch 삭제
  },
  devServer: {
    proxy: 'http://13.209.146.204:8080' 
  }
};
// module.exports = {
//   chainWebpack: config => {
//     config.plugins.delete('prefetch'); // prefetch 삭제
//   },
//   // devServer: {
//   //   port: 8080,
//   //   proxy: {
//   //     '/api': {
//   //       target,
//   //       changeOrigin: true
//   //     }
//   //   }
//   // }
//   devServer: {
//     // 프록시 설정
//     proxy: {
//         // 프록시 요청을 보낼 api의 시작 부분
//         '/api': {
//             // 프록시 요청을 보낼 서버의 주소
//             // target: 'http://localhost:3000'
//             target: `http://13.209.146.204:8080`
//         }
//     }
//   }
// }

// // 개발 서버 설정
// devServer: {
//   // 프록시 설정
//   proxy: {
//       // 프록시 요청을 보낼 api의 시작 부분
//       '/api': {
//           // 프록시 요청을 보낼 서버의 주소
//           target
//       }
//   }
// }

// devServer: {
//   proxy: { // proxyTable 설정
//       '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
//           target: process.env.VUE_APP_PROD_BASE_DOMAIN, // www.xxx.com
//           changeOrigin: true
//       },
//        '/aw': { // aw로 url 이 시작하면 이렇게 target을 잡아준다. 
//           target: process.env.VUE_APP_PROD_AW_DOMAIN,
//           changeOrign: true
//       }, 
//   }
// }