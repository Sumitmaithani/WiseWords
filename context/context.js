"use client";

import { createContext, useEffect, useState } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db, auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const WWContext = createContext()

const WWProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))

      setUsers(querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: {
            ...doc.data()
          }
        }
      }))
    }

    getUsers()
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))

      setPosts(querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: {
            body: doc.data().body,
            brief: doc.data().brief,
            category: doc.data().category,
            postLength: doc.data().postLength,
            bannerImage: doc.data().bannerImage,
            title: doc.data().title,
            postedOn: doc.data().postedOn.toDate(),
            author: doc.data().author,
          }
        }
      }))
    }

    getPosts()
  }, [])

  const addUserToFirebase = async user => {
    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0
    })
  }

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider)
    const user = userData.user
    console.log(user, '⚽')
    setCurrentUser(user)
    addUserToFirebase(user)
  }

  return (
    <WWContext.Provider value={{ posts, users, handleUserAuth, currentUser }}>
      {children}
    </WWContext.Provider>
  )
}

export { WWContext, WWProvider }