import axios from 'axios'
import store from '~/store'
import router from '~/router'
import Swal from 'sweetalert2'

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    Swal.fire({
      type: 'error',
      title: 'Error',
      text: 'An Error Occured',
      reverseButtons: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    })
  }

  if (status === 401 && store.getters['auth/check']) {
    Swal.fire({
      type: 'warning',
      title: 'Token Expired',
      text: 'Token Expired',
      reverseButtons: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then(() => {
      store.commit('auth/LOGOUT')

      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})
