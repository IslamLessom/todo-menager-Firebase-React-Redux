import React, { useEffect, useState } from 'react'
//--firebase
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../Fairbase'
//--firebase
import DescriptionTextTodo from '../Components/ModalIcons/DescriptionTextTodo'
import {
  MenageContent,
  CardButton,
  CardName,
  CardTime,
  CardWork,
  ContentDiv
} from "./Menage.element"

import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/reducer/todo'
import { Taimer } from '../Components/Taimer/Taimer'

function Menage() {
  const dispatch = useDispatch()
  const todo = useSelector((s) => s.todo.todo)
  useEffect(() => {
    getDocs(collection(db, 'posts'))
      .then((res) => dispatch(getData(res.docs.map(el => ({ ...el.data(), id: el.id })))))
  }, [])


  return (
    <MenageContent>
      {todo.map((post) => {
        return (
          post.value === 'Menage' && (
            <ContentDiv>
              <CardWork key={post.id}>
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

export default Menage
