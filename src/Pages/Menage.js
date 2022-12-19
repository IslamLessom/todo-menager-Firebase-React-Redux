import React, { useEffect, useState } from 'react'
//--firebase
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../Fairbase'
//--firebase
import Contents from '../Components/Contents'
import { MenageContent } from "./Menage.element"

function Menage({ isAuth }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const dbTodo = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    dbTodo()
  }, [])


  return (
    <MenageContent>
      {data.map((post, index) => {
        return (
          <Contents index={index} nameObjective={post.nameObjective} desObjective={post.desObjective} timeObjective={post.timeObjective} />
        )
      })}
    </MenageContent>
  )
}

export default Menage
