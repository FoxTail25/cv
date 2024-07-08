



function Work({projectName, image, links, workTech, workDiscription, ...rest}) {

  return (
    <div className="flex_column works__block">

      <h2>
        Проект {`"${projectName}"`}
      </h2>

      <img src={image[0].imgPath} alt='Изображение' title={image[0].label} className="works__img" />

      <h3>
        Ссылки:

        <span className='work__link'>
          <a href={links[0]} title="ссылка на опубликованный проект" target="blank">Проект</a>
        </span>

        <span className='work__link'>
        <a href={links[1]} title="ссылка на репозиторий GitHub"  target="blank">Репозиторий</a>
        </span>

      </h3>


      <p className="work__tehnologis">
        {workTech}
      </p>

      <p className="work__description">
        {workDiscription}
      </p>
    </div>
  )
}

export default Work;