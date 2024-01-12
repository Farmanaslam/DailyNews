import React, { useEffect, useState } from "react";
import Newsitem from "../Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const pageSize = 12;

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props){
  //   super(props);
  //   console.log("I am constructor");
  //  this.state={
  //   articles:[],
  //   loading:false,
  //   page:1,
  //   totalResults:0
  //  }
  // }
  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=976ba8955af04131a5fe5ee6cbd2e978&page=${page}&pageSize=${pageSize}`;

    setloading(true);
    // this.setState({loading:true});
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);

    // console.log(parsedData)
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    document.title = `${capitalize(props.category)} - NewsIndia`;
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    // this.setState({page:this.state.page+1})

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    setpage(page + 1);

    // this.setState({loading:true});
    let data = await fetch(url && url);
    let parsedData = await data.json();
    // console.log(parsedData)
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
    // this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  };

  // async componentDidMount(){
  //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=1&pageSize=${this.pageSize}`;

  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData=await data.json();
  //   console.log(parsedData)
  //   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  // this.updateNews()

  // }
  // const handlePrevClick=async ()=>{
  // console.log("previous")

  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${this.pageSize}`;
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData=await data.json();
  // console.log(parsedData)
  // this.setState({page:this.state.page - 1,
  // articles: parsedData.articles,
  // loading:false
  // })
  // setpage(page-1)
  // updateNews()
  // this.setState({page:this.state.page-1})
  // this.updateNews();
  // }
  // const handleNextClick= async ()=>{
  // console.log("next")
  // if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.pageSize))){

  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${this.pageSize}`;
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData=await data.json();
  // console.log(parsedData)

  // this.setState({page:this.state.page + 1,
  // articles:parsedData.articles,
  // loading:false
  //   })}
  // setpage(page+1)
  // updateNews()
  // this.setState({page:this.state.page+1})
  // this.updateNews();
  // }

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        {" "}
        NewsIndia--Top HeadLines from {capitalize(props.category)}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles && articles.length}
        next={fetchMoreData}
        hasMore={articles && articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((element, i) => {
                return (
                  <div className="col md-4" key={i}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 45) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : " "
                      }
                      imgurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}   type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; Previous </button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.pageSize)}type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
</div> */}
    </>
  );
  //976ba8955af04131a5fe5ee6cbd2e978
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
export default News;
