import { Component } from 'react';
import { Notify } from 'notiflix';
import { getImages } from 'utils/getImagesApi';
import { Button, ImageGallery, Loader, Searchbar } from 'utils/allComponents';

export class App extends Component {
  state = {
    images: [],
    query: null,
    page: 1,
    totalPages: null,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page, totalPages, images } = this.state;

    if (prevState.page !== page && page !== 1) {
      this.setState({ loading: true });
      const res = await getImages(query, page);

      this.setState(({ images }) => ({
        images: [...images, ...res.hits],
        loading: false,
      }));
    }

    if (page >= totalPages && images !== prevState.images) {
      Notify.success('No more results...');
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    const input = e.target.elements.search;
    const value = input.value.trim();
    const page = 1;

    if (value === '') {
      Notify.warning("You didn't enter anything...");
      return;
    }

    this.setState({ loading: true });
    const res = await getImages(value, page);
    this.setState({ loading: false });

    if (res.hits.length === 0) {
      Notify.failure('No result for your request...');
      return;
    }

    const totalPages = Math.ceil(res.totalHits / 12);

    this.setState({
      images: res.hits,
      query: value,
      page,
      totalPages: totalPages,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, totalPages, page } = this.state;
    const isNotEmpty = images.length !== 0;
    const isNotEndList = page < totalPages;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isNotEmpty && <ImageGallery images={images} />}
        {loading ? (
          <Loader />
        ) : (
          isNotEmpty && isNotEndList && <Button onClick={this.loadMore} />
        )}
      </>
    );
  }
}
