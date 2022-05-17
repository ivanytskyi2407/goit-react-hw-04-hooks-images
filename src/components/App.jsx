// import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import API from './API/API';
import { toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
///////////////////////////////////////////////
import { useState, useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    API(query, page).then(pictures => {
      console.log(pictures);
      setLoader(true);
      if (pictures.length > 12) {
        setLoadMore(true);
      }
      if (pictures.length === 0) {
        return toast.error('Нічого немає');
      }
      if (pictures.length < 12) {
        setLoadMore(false);
      }

      setPictures(pictures);
    });
    setLoader(false);
  }, [query]);

  const handlFormSubmit = e => {
    setQuery(e);
  };
  const onClickButton = () => {
    setPage(page => {
      return page + 1;
    });
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handlFormSubmit} />
      {loader && <Loader />}
      <ImageGallery pictures={pictures}></ImageGallery>
      {loadMore && <Button onClickButton={onClickButton} />}
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
};
export default App;
// //////////////////////////////////////////////////////

// export default class App extends Component {
//   state = {
//     query: '',
//     loader: false,
//     page: 1,
//     pictures: [],
//     loadMore: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.setState({ loader: true });

//       API(query, page).then(pictures => {
//         this.setState({ loader: false });
//         if (pictures.length === 0) {
//           return toast.error('Нічого немає');
//         }

//         this.setState(prevState => ({
//           pictures: [...prevState.pictures, ...pictures],
//           loadMore: true,
//         }));
//         if (pictures.length < 12) {
//           this.setState({
//             loadMore: false,
//           });
//         }
//       });
//     }
//   }
//   handlFormSubmit = query => {
//     this.setState({ query });
//     this.defaultState();
//   };

//   onClickButton = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };
//   defaultState = () => {
//     this.setState({ page: 1, pictures: [] });
//   };

//   render() {
//     const { loader, pictures, loadMore } = this.state;
//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.handlFormSubmit} />
//         {loader && <Loader />}
//         <ImageGallery pictures={pictures}></ImageGallery>
//         {loadMore && <Button onClickButton={this.onClickButton} />}
//         <ToastContainer autoClose={2000} position="top-center" />
//       </div>
//     );
//   }
// }
