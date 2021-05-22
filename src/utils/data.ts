import { addNewMeetup, Meetup } from "../models/MeetupModel";

export const addNewMeetupInDatabase = (meetupData: addNewMeetup) => {
  return fetch("https://my-workground.firebaseio.com/meetups.json", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchMeetupsFromDatabase = async () => {
  try {
    const response = await fetch(
      "https://my-workground.firebaseio.com/meetups.json"
    );
    const meetupsData = await response.json();
    const meetups: Meetup[] = [];
    for (let key in meetupsData) {
      const meetup = {
        id: key,
        ...meetupsData[key],
      };
      meetups.push(meetup);
    }
    return meetups;
  } catch (error) {
    return null;
  }
};
