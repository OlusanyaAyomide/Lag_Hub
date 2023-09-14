interface IThumbnail {
  url: string;
  width?: number;
  height?: number;
}

interface IId {
  kind: string;
  videoId?: string;
  channelId?:string
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IItem {
  kind: string;
  id: IId;
  snippet: ISnippet;
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IYouTubeResponse {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItem[];
}

interface IMusicInfo {
  id: string;
  title: string;
  play: string;
  cover: string;
  author: string;
  original: boolean;
  duration: number;
  album: string;
}

interface IAuthor {
  id: string;
  unique_id: string;
  nickname: string;
  avatar: string;
}

export interface IVideo {
  aweme_id: string;
  video_id: string;
  region: string;
  title: string;
  cover: string;
  origin_cover: string;
  duration: number;
  play: string;
  wmplay: string;
  music: string;
  music_info: IMusicInfo;
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  create_time: number;
  anchors: null; // Replace with actual type if needed
  anchors_extras: string;
  is_ad: boolean;
  commerce_info: {
      adv_promotable: boolean;
      auction_ad_invited: boolean;
      branded_content_type: number;
      with_comment_filter_words: boolean;
  };
  commercial_video_info: string;
  author: IAuthor;
  is_top: number;
}

export interface TikTopFeedResponse{
  code:number,
  msg:string
  data:IVideo
}


export interface Imessageinfo{
  _id:string
  username:string
}
