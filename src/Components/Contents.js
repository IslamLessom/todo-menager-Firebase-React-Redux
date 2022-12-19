import React from 'react'
import {
    CardName,
    CardWork,
    ContentDiv,
    CardTime,
    CardButton,
    ContentGrid
} from './Contents.element'
import DescriptionTextTodo from './ModalIcons/DescriptionTextTodo'

function Content({ index, nameObjective, desObjective, timeObjective }) {
    return (
        <ContentDiv>
            <CardWork key={index}>
                <CardName>{nameObjective}</CardName>
                <CardTime>{timeObjective}</CardTime>
                <DescriptionTextTodo desObjective={desObjective} />
            </CardWork>
        </ContentDiv>
    )
}

export default Content
