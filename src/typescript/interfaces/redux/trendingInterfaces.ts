import { FixedHeight, GifsTrendingDatum } from '../giphy/gifsTrending';
import { The480_WStill } from '../giphy/gifsTrending';
import { DownsizedSmall} from '../giphy/gifsTrending';


export interface StateRamdom extends LoadingRamdom {
    total_data: GifsTrendingDatum[];
    ramdom: RamdomData[];
    off_set: number;
    index: number;
}

export interface RamdomData {
    gifs: RamdomGif[];
    response_id: string;
}

export interface RamdomGif {
    original: FixedHeight;
    downsized_large: The480_WStill;
    downsized_medium: The480_WStill;
    downsized_small: DownsizedSmall;
    embed_url: string;
    title: string;
    import_datetime: string;
    trending_datetime: string;
    id: string;
}

export interface LoadingRamdom {
    loading: boolean;
    status: 'initial'|'pending'|'fulfilled'|'rejected';
}
