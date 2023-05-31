

const Pagination = ({page, setPage, quantyPage}) => {
  return (
    <div className='pagination'>
       { page > 1 && <button  onClick={() => setPage(page -1)}>Back</button>  } { quantyPage !== 0 && <p>{page} de {quantyPage}</p>  } {quantyPage > page && <button onClick={() => setPage(page+1)}>Next</button>}
    </div>
  )
}

export default Pagination