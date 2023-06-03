import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchDataFromApi } from '../../utils/api'

import noResults from "../../assets/no-results.png"
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { useEffect, useState } from 'react';
import Spinner from '../../components/spinner/Spinner'
import MovieCard from '../../components/movieCard/MovieCard';
function SearchResult() {
  const [data,setData] = useState(null);
  const [pageNum,setPageNum] = useState(1);// we'll provide page no.s 2,3,4 so on to call api and fetch data cuz 1 page returns 20 results ---->infinite scroll
  const [loading,setLoading] = useState(false);
  const {query} = useParams();

  const fetchInitialData = () =>{
    setLoading(true);
    fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev = prev + 1));
        setLoading(false);
      }
    );

  //merging new data with old data ..(state ⬆ ) code below
    const fetchNextPageData = () => {
      fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`).then(
        (res) => {
          if (data?.results) {
            setData({
              ...data,
              results: [...data?.results, ...res.results],
            });
          } else {
            setData(res);
          }
          setPageNum((prev)=> prev + 1);
          //increment page when we get new data from api
        }
        
      );
    };

    //use Effect re-renders code (fetchDataFromApi) every time query changes ...dependency array
    useEffect(() => {
      fetchDataFromApi;
    }, [query]);

    return (
      <div className="searchResultsPage">
        {loading && <Spinner initial={true} />}
        {!loading && (
          <ContentWrapper>
            {data.results.length > 0 ? (
              <>
                <div className="pageTitle">
                  {`Search ${
                    data.total_results > 1 ? "results" : "results"
                  } of '${query}'}`}
                </div>
                <InfiniteScroll>
                  {data.results.map((item, index) => {
                    if(item.media_type === "person") return ;
                      return(
                        <MovieCard key={index} data={item} fromSearch={true}/>
                      )
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <span className="resultNotFound">
                😖 Sorry, Page not found !!!
              </span>
            )}
          </ContentWrapper>
        )}
      </div>
    );
  }}
export default SearchResult;