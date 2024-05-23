import { IActivity } from "./activity";
import { IAddExam } from "./add-exam";
import { ICognitive } from "./cognitive";
import { IDepression } from "./depression";
import { IDrink } from "./drink";
import { IHistory } from "./history";
import { ISmoking } from "./smoking";

export interface IQuestionnaire {
  history: IHistory;
  smoking: ISmoking;
  drink: IDrink;
  activity: IActivity;
  addExam?: IAddExam;
  depression?: IDepression;
  cognitive?: ICognitive;
  isAddExam?: boolean;
}
