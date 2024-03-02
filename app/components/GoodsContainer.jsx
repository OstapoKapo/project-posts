'use client'
import '../globals.css';
import { useEffect, useRef, useState } from "react";
import Goods from './Goods';

const GoodsContainer = (posts) => {

const [allPost, setAllPost] = useState([]);
const [page, setPage] = useState(0);
const [pageArr, setPageArr] = useState([]);
const [searchData, setSearchData] = useState('');

const searchInp = useRef(null);
const filter = useRef(null);

function chunkArr(){
let pagesArr = [];
let chunk = [];
const chunkSize = 4;
for (let i = 0; i < allPost.length; i += chunkSize) {
  chunk = allPost.slice(i, i + chunkSize);
  pagesArr.push(chunk);
  }
  setPageArr(pagesArr);
}

useEffect(()=>{
  setAllPost(JSON.parse(posts.posts.value));
},[]);

useEffect(()=>{
  chunkArr();
},[allPost])
 
const paginationHandle = (e) => {
  const target = e.target;
  if(target.classList.contains('goodsContainer__arrow')){
    const action = target.getAttribute('data-action');
    if(action === 'left'){
      if(page>0){
        setPage(page-1);
      }else if(page === 0){
        setPage(pageArr.length-1);
      }
    }else if(action === 'right'){
      if(page<pageArr.length-1){
        setPage(page+1);
      }else if(page === pageArr.length-1){
        setPage(0);
      }
    }
   }
  }

  const filterHandle = (e) => {
    let target = e.target;
    if(target.classList.contains('goodsContainer__btn')){
      let action = target.getAttribute('data-action');
      if(action === 'min'){
        let newArr = allPost;
        newArr.sort(function(a, b){
          return a.id - b.id
        });
        setAllPost(newArr);
        chunkArr();
      }else if(action === 'max'){
        let newArr = allPost;
        newArr.sort(function(a, b){
          return b.id - a.id
        });
        setAllPost(newArr);
        chunkArr();
      }
      for(let el of filter.current.children){
        el.classList.remove('goodsContainer__btn_active');
      }
      target.classList.add('goodsContainer__btn_active');
    }
  }

  const searchHandle = () => {
    setSearchData(searchInp.current.value);
  }

    return (
       <div className='goodsContainer'>
         <div className="goodsContainer__filter" ref={filter} onClick={filterHandle}>
          <div className="goodsContainer__btn goodsContainer__btn_active" data-action='min'>min id</div>
          <div className="goodsContainer__btn" data-action='max'>max id</div>
          <input type="text" className='goodsContainer__inp' onChange={searchHandle} value={searchData} ref={searchInp} placeholder='search by title'/>
         </div>
         {pageArr.map((item) => <div key={pageArr.indexOf(item)}
          className='goodsContainer__chunk'
          style={{display: page == pageArr.indexOf(item) ? 'flex' : 'none'}}
          data-action={pageArr.indexOf(item)}>         
          {pageArr[pageArr.indexOf(item)].map((item) => <Goods id={item.id} key={item.id} body={item.body} title={item.title}/>)}
          </div>)}
          <div className="goodsContainer__pagination" onClick={paginationHandle}>           
              <img className='goodsContainer__arrow' src="/arrow_left.png" alt="arrow" data-action='left'/>   
              <div className='goodsContainer__text'><span>{page+1}</span>...{pageArr.length}</div>     
              <img className='goodsContainer__arrow' src="/arrow_right.png" alt="arrow" data-action='right'/>    
          </div>
       </div>
    )
}

export default GoodsContainer;