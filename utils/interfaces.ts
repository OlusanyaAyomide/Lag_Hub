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

interface IYouTubeResponse {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItem[];
}
  