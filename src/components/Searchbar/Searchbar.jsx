import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
// import { Component } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error('Введіть назву картинки');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className="button-label"></span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};
export default Searchbar;

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleQueryChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.query.trim() === '') {
//       return toast.error('Введіть назву картинки');
//     }
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchFormButton}>
//             <span className="button-label"></span>
//           </button>

//           <input
//             className={s.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             value={this.state.query}
//             placeholder="Search images and photos"
//             onChange={this.handleQueryChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
