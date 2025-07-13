import type {IBackdrop} from "./IBackdrop.ts";
import type {IPoster} from "./IPoster.ts";

export interface IImagesResponse {
	backdrops: IBackdrop[];
	id: number;
	logos: [];
	posters: IPoster[];
}
