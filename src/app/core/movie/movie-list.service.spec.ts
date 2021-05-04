
import {MovieListService} from './movie-list.service';

describe('MovieListService', () => {
  let service;

  const httpClient: any = {
  };

  beforeEach(() => {
    service = new MovieListService(httpClient);
  });

  it('should run #getLanguageList()', async () => {
  const  movieList = [ {
    original_language: 'hi'
  }, {
      original_language: 'hi'
  }
  ];
    const result = service.getLanguageList(movieList);
  });

});
