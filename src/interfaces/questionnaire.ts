import { IActivity } from "./activity";
import { IDrink } from "./drink";
import { IHistory } from "./history";
import { ISmoking } from "./smoking";

export interface IQuestionnaire {
  history: IHistory;
  smoking: ISmoking;
  drink: IDrink;
  activity: IActivity;
}
