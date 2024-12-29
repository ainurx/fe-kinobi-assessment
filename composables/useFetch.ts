// export default ({ $axios }, inject) => {
//     const api = {
//       async get(url: string, params = {}) {
//         try {
//           const response = await $axios.get(url, { params });
//           return response.data;
//         } catch (error: any) {
//           console.error('Error during GET request:', error);
//           throw error;
//         }
//       },
  
//       async post(url: string, data = {}) {
//         try {
//           const response = await $axios.post(url, data);
//           return response.data;
//         } catch (error: any) {
//           console.error('Error during POST request:', error);
//           throw error;
//         }
//       },
  
//       async put(url: string, data = {}) {
//         try {
//           const response = await $axios.put(url, data);
//           return response.data;
//         } catch (error: any) {
//           console.error('Error during PUT request:', error);
//           throw error;
//         }
//       },
  
//       async del(url) {
//         try {
//           const response = await $axios.delete(url);
//           return response.data;
//         } catch (error) {
//           console.error('Error during DELETE request:', error);
//           throw error;
//         }
//       }
//     };
  
//     // Request interceptor
//     // $axios.onRequest((config: any) => {
//     //   const token = this.$cookies.get('token'); // Example: Get token from cookies
//     //   if (token) {
//     //     config.headers.token = `Bearer ${token}`;
//     //   }
//     //   return config;
//     // });
  
//     // Error handler in response interceptor
//     $axios.onError((error:any) => {
//       console.error('API error:', error.response?.data || error.message);
//     });
  
//     // Inject API methods
//     inject('api', api);
//   };
  