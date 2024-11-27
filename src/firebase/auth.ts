import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { auth } from './config'

export const authenticateAnonymously = async () => {
  try {
    const userCredential = await signInAnonymously(auth)
    return userCredential.user
  } catch (error) {
    console.error("Erreur lors de l'authentification anonyme :", error)
    throw error
  }
}

export const initializeAuth = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        try {
          await signInAnonymously(auth)
          resolve()
        } catch (error) {
          console.error("Erreur lors de l'authentification anonyme :", error)
          reject(error)
        }
      } else {
        resolve()
      }
    })
  })
}
