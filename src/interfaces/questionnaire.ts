import { IActivity } from "./activity";
import { IAddExam } from "./add-exam";
import { IDrink } from "./drink";
import { IHistory } from "./history";
import { ISmoking } from "./smoking";

export interface IQuestionnaire {
  history: IHistory;
  smoking: ISmoking;
  drink: IDrink;
  activity: IActivity;
  addExam?: IAddExam;
  isAddExam?: boolean;
}
