import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {createAction} from '../createAction';
import {IAppState} from '../../interfaces/appState.interface';
import {
  IVideoGameListing,
  getFilteredVideoGames,
  getVideoGame
} from '../../interfaces/videoGameListing/videoGameListing.interface';
import {IVideoGame} from '../../interfaces/videoGame/videoGame.interface';

@Injectable()
export class VideoGameListingStore {

  static RETRIEVE = 'VIDEO_GAME_LISTING_RETRIEVE';
  static RETRIEVE_SUCCESS = 'VIDEO_GAME_LISTING_RETRIEVE_SUCCESS';
  static RETRIEVE_ERROR = 'VIDEO_GAME_LISTING_RETRIEVE_ERROR';
  static SEARCH = 'VIDEO_GAME_LISTING_SEARCH';

  constructor(private store: Store<IAppState>) {

  }

  getVideoGameListing(): Observable<IVideoGameListing> {
    return this.store.select(appState => appState.videoGameListing);
  }

  getVideoGames(): Observable<Array<IVideoGame>> {
    return this.getVideoGameListing()
      .map(videoGameListing => getFilteredVideoGames(videoGameListing));
  }

  getVideoGame(id: string): Observable<IVideoGame> {
    return this.getVideoGameListing()
      .map(videoGameListing => getVideoGame(videoGameListing, id))
  }

  retrieve() {
    this.store.dispatch(createAction(VideoGameListingStore.RETRIEVE));
  }

  search(query: string) {
    this.store.dispatch(createAction(VideoGameListingStore.SEARCH, { query }));
  }
}