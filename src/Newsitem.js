import React  from 'react'


const Newsitem =(props)=> {


  
    const {title,description,imgurl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'> <div className="card" style={{width: "18rem"}}>
          <div>
      <span className="badge rounded-pill bg-info" style={{display:"flex",justifyContent:"center"}}>
    {source}
  </span>
  </div>
      <img src={!imgurl?"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png":imgurl} className="card-img-top" alt="..."/>
      <div className="card-body" >
      
        <h5 className="card-title">{title}  
</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-info"> By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-info">Read More </a>
      </div>
    </div></div>
    )
  }
export default Newsitem