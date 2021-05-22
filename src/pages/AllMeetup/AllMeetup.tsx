import { useEffect, useState } from "react";
import MeetupList from "../../components/MeetupList/MeetupList";
import { Meetup } from "../../models/MeetupModel";
import { fetchMeetupsFromDatabase } from "../../utils/data";
import { Container } from "./AllMeetup.styles";

const AllMeetup: React.FC = () => {
  const [isloading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMeetupsFromDatabase()
      .then((res) => res.json())
      .then((data) => {
        const meetupsData: Meetup[] = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupsData.push(meetup);
        }
        setIsLoading(false);
        setMeetups((preState) => [...preState, ...meetupsData]);
      });
  }, []);

  if (isloading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <Container>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </Container>
  );
};

export default AllMeetup;
