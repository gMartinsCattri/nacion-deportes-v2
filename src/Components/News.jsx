import React from 'react'
import style from './News.module.css'
function News() {
  return (
    <div className={style.containerGeneralNews}>
        <div className={style.containerContentNews}>
            <div className={style.ImageNews}></div>
            <div className={style.TextContentContainerNews} >
                <div>
                    <p className={style.TextContentTitleNews}>Lorem Ipsum Dolor</p>
                    <hr className={style.lineaTitleNews} />
                </div>
                <div>
                    <p  className={style.TextContentParagraphNews}>Desde ontem a noite o último pull request desse SCRUM complexificou o merge do polimorfismo aplicado nas classes.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News