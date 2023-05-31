
/**
 * Post the user email and password to the API and return the promise of the user token
 * @param {email} email - The user email.
 * @param {string} password - The user password.
 * @returns {Promise} - Return the token of the user
 */
export async function postSignIn (email, password) {
  let isLoading = true
  let error = false
  let data = {}
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "email": email,
          "password": password
      })
    })
    data = await response.json()
  } catch(err) {
    error = true
  } finally {
    isLoading = false
  }
  return {isLoading, data, error}
}
/**
 * Get the user activity data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The activity data
 */
export async function getUserActivity (token) {
  const response = await fetch('http://localhost:3001/api/v1/user/signup', {
    method: "POST",
    headers: { Authentication: 'Bearer {'+ token +'}' }
  })
  return response.json()
}
/**
 * Get the user session data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The session data
 */
export async function getUserProfile () {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ window.localStorage.getItem("userToken")
      }
  })
  return response.json()
}
/**
 * Get the user performance data from API
 * @param {object} userId - The user id.
 * @returns {Promise} - The performance data
 */
export async function getUserPerformance (firstName, name) {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: "PUT",
    body: {
        "email": firstName,
        "password": name
     }
  })
  return response.json()
}

