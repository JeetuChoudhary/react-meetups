import { Meetup } from "../../models/MeetupModel";
import Card from "../Card/Card";
import ListItems from "./ListItems/ListItems";

type Props = {
  meetups: Meetup[];
};

const MeetupList: React.FC<Props> = ({ meetups }) => {
  return (
    <>
      {meetups.map((meetup) => (
        <Card key={meetup.id}>
          <ListItems meetup={meetup} />
        </Card>
      ))}
    </>
  );
};

export default MeetupList;
