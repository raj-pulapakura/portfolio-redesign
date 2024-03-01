export interface PlaylistItemThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface PlaylistItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: PlaylistItemThumbnail;
    medium: PlaylistItemThumbnail;
    high: PlaylistItemThumbnail;
    standard: PlaylistItemThumbnail;
    maxres: PlaylistItemThumbnail;
  };
  channelTitle: string;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
}

const API_KEY = "AIzaSyA3OXOpwyKDuO0ceDVSOKOdufcQE_1oPg4";
const channelId = "UC3gzXBIw0UKUU9PVOr45n0w";

export async function getVideos(): Promise<{ snippet: PlaylistItemSnippet }[]> {
  try {
    // get channel data
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&part=contentDetails&id=${channelId}&key=${API_KEY}`
    );
    const data = await channelResponse.json();
    const uploadId = data.items[0].contentDetails.relatedPlaylists.uploads;

    // from channel data, get "playlist" containing all videos
    const maxResults = 50;
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadId}&maxResults=${maxResults}&key=${API_KEY}`,
      { next: { revalidate: 1200 } } // update cache every 20 minutes (1200 seconds)
    );
    const playlistData = await playlistResponse.json();

    // return items
    return playlistData.items;
  } catch (error) {
    console.error("Error fetching videos:", (error as Error).message);
    return [];
  }
}
