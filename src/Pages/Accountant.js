import React, { useEffect, useState } from 'react'
//--firebase
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../Fairbase'
//--firebase
import DescriptionTextTodo from '../Components/ModalIcons/DescriptionTextTodo'
import { Taimer } from '../Components/Taimer/Taimer'
import {
  MenageContent,
  CardButton,
  CardName,
  CardTime,
  CardWork,
  ContentDiv
} from "./Menage.element"

function Accountant({ isAuth }) {
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
          post.value === 'Accountant' && (
            <ContentDiv>
              <CardWork key={index}>
                <CardName>{post.nameObjective}</CardName>
                <CardTime><Taimer timeObjectiveHours={post.timeObjectiveHours} timeObjectiveMinutes={post.timeObjectiveMinutes} timeObjectiveSeconds={post.timeObjectiveSeconds} /></CardTime>
                <DescriptionTextTodo desObjective={post.desObjective} />
              </CardWork>
            </ContentDiv>
          )
        )
      })}
    </MenageContent >
  )
}

export default Accountant
